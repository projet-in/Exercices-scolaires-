# École+ — Site d'exercices scolaires (Belgique francophone)

Exercices interactifs de la 1re maternelle à la rhétorique, avec épreuves
blanches CEB (P6), CE1D (S2), CE2D (S4) et CESS (rhéto).

**État actuel** : 15 années, 294 modules, 2346 questions en banques + 19
générateurs illimités, sur 14 types d'activités différents.

## Déployer le site

**GitHub Pages** (méthode actuelle) :
1. Dépôt GitHub → Settings → Pages → Source : Deploy from a branch → main → / (root)
2. Attendre 1-2 min, l'adresse apparaît en haut de la page Pages
3. Pour mettre à jour : Add file → Upload files → glisser les fichiers modifiés
   **dans le bon dossier** (les fichiers `js/*.js` doivent aller dans le
   dossier `js/` du dépôt, pas à la racine — sinon 404 silencieux)

**Alternative** : Netlify Drop (app.netlify.com/drop) ou Vercel — glisser le
dossier complet, aucune configuration.

Aucune base de données : tout est statique. Les points, la progression, les
niveaux choisis et les badges sont sauvegardés dans le navigateur de chaque
visiteur (localStorage), sous le préfixe `ecoleplus_`.

## Structure du projet

```
site-exercices/
├── index.html              → coquille du site + bouton mode Dys/TDAH
├── css/style.css            → design + styles de tous les types d'activités
└── js/
    ├── catalogue.js         → années, matières, modules (LA carte du site)
    ├── banques.js            → questions fixes {q, b, a, n?} (généré, voir plus bas)
    ├── generateurs.js         → questions générées à l'infini (calcul, langues...)
    ├── vocabulaire.js          → 400 paires de vocabulaire EN/NL (P5→rhéto)
    ├── activites.js            → données des jeux : couleurs, cris, mots à
    │                             écrire, phrases, lectures progressives,
    │                             textes à trous, chronologies, memory,
    │                             vrai/faux blitz, cryptographie, mots mêlés,
    │                             cartes interactives
    └── moteur.js               → navigation, tous les moteurs de jeu, niveaux
                                  de difficulté, mode Dys/TDAH, gamification
                                  (ne pas toucher sans relire ce fichier)
```

## Les types de modules

Chaque module du catalogue a un `type`. Voici ce que chacun attend comme
`ref` et où sont les données correspondantes :

| type | données dans | format |
|---|---|---|
| `banque` | `banques.js` → `BANQUES` | `{q, b, a:[...], n?:4\|5}` |
| `gen` | `generateurs.js` → `GENERATEURS` | fonction `(params) => {q, opts, bonne}` |
| `couleurs` | intégré au moteur | liste `COULEURS_JEU` (activites.js) |
| `cris` | intégré au moteur | liste `CRIS_ANIMAUX` (activites.js) |
| `mot` | `activites.js` → `MOTS_ECRIRE` | `[emoji, MOT, traduction]` |
| `phraseordre` | `activites.js` → `PHRASES_ORDRE` | `[[mots...], traduction]` |
| `lecture` | `activites.js` → `LECTURES` (+ textes progressifs fusionnés) | `{t, q:[{q,b,a,n?}]}`, `t2`/`t3` optionnels pour les niveaux 2+/4+ |
| `trous` | `activites.js` → `TEXTES_TROUS` | `{t:"...{mot}...", intrus:[...]}` |
| `chrono` | `activites.js` → `CHRONOLOGIES` | `{titre, evenements:[[texte, date]]}` |
| `memory` | `activites.js` → `MEMORY_PAIRES` | `[[recto, verso], ...]` (≥6 paires) |
| `vfblitz` | `activites.js` → `VF_BLITZ` | `{q, vrai:true/false}` (≥10 par liste) |
| `crypto` | `activites.js` → `CRYPTO_PHRASES` | `{phrase, shift}` (chiffre de César) |
| `motsmeles` | `activites.js` → `MOTSMELES` | `{mots:[...]}` (grille générée automatiquement) |
| `carte` | `activites.js` → `CARTES` | `{titre, note, lieux:[{nom, zone}]}` (schéma cliquable, pas une carte exacte) |

Chaque module précise aussi `langue:'fr'|'en'|'nl'` quand la voix doit
parler dans cette langue, et `niveaux:[...]` (5 objets de paramètres) pour
faire varier un générateur selon le niveau choisi (1 à 5).

## Ajouter du contenu

### Ajouter des questions à une banque existante
Ouvrir `js/banques.js`, trouver la banque (ex. `p6_homophones`) et ajouter :
```js
{q:"Ta question avec ___ si besoin.", b:"bonne réponse", a:["piège 1","piège 2"]},
```
Pour réserver une question aux niveaux difficiles : ajouter `n:4` ou `n:5`.

### Créer un nouveau module dans une banque
1. Dans `banques.js`, créer la banque si besoin.
2. Dans `catalogue.js`, ajouter dans l'année et la matière voulues :
```js
{id:'geo', titre:'Géographie', emoji:'🗺️', type:'banque', ref:'s3_geo'}
```
Il entre automatiquement dans l'épreuve blanche de son année (types
`banque`/`gen` uniquement — les jeux ludiques en sont exclus).

### Ajouter un texte de lecture progressif (avec niveaux)
Dans `activites.js` → `LECTURES_RICHES` (fusionné dans `LECTURES` au
démarrage) : fournir `t` (niveau 1), `t2` (ajouté dès le niveau 2), `t3`
(ajouté dès le niveau 4), et une liste `q` de questions taguées `n:1` à
`n:5` (1=explicite, 5=inférence/vocabulaire). Le moteur choisit
automatiquement 3/4/5/5/6 questions selon le niveau et exclut les questions
triviales aux niveaux 4-5.

### Ajouter une nouvelle matière ou année
Ajouter la clé dans `PROGRAMME` (catalogue.js). Les années elles-mêmes sont
définies dans `ANNEES` au même endroit.

## Fonctionnalités transversales

- **5 niveaux de difficulté** par module (générateurs à paramètres croissants,
  banques avec questions `n:4`/`n:5` réservées, chrono resserré dès le niveau 2)
- **Mode Dys/TDAH** (bouton en en-tête) : police Arial agrandie, guide de
  lecture ligné, aucune limite de temps, lecture vocale automatique des
  consignes et des choix, barrettes dizaines/unités pour les calculs,
  réponse à l'oral (micro, Chrome/Edge), mode "phrase par phrase" en lecture
- **Anti-répétition** : chaque module tire dans un paquet mélangé sans
  répétition avant d'avoir tout vu ; les générateurs évitent les 25 derniers
  énoncés
- **Gamification** : 15 badges à débloquer, défi du jour (module différent
  chaque jour, +50 points bonus), mode duel à 2 joueurs sur tout module QCM,
  carnet de progression (`#/badges`) avec barres par cycle

## État du contenu par domaine (juillet 2026)

- **Maternelle → P6** : très complet, c'est la partie la plus dense du site
- **S1-S4 (CE1D/CE2D)** : solide sur les matières historiques
  (maths/français/sciences/histoire/géo/langues)
- **S5-S6 (CESS)** : bien pourvu sur les matières historiques
- **Nouvelles matières transversales** (Citoyenneté/EPC, Médias, Finance,
  Premiers secours, Sciences par l'expérience, Arts et culture, Logique et
  code) : 8 à 30 questions par thème selon le cycle — correct mais plus
  léger que les matières historiques, marge de densification si besoin
- **Nouveaux formats de jeux** (mots mêlés, carte, chronologie, crypto,
  memory, vrai/faux) : présents jusqu'en S4-S5, pourraient être étendus à
  S5-S6 et enrichis en nombre de séries

## Idées pour la suite

- Densifier encore les matières transversales et les nouveaux formats de jeu
- Sons réels pour le memory et les mots mêlés en langues (comme les cris d'animaux)
- Export PDF d'une fiche de résultats à montrer à l'enseignant
- Mode hors-ligne (PWA) pour réviser sans connexion
- Tableau de bord parent séparé montrant la progression détaillée
- Étendre carte interactive / chronologie / mots mêlés à S5-S6
