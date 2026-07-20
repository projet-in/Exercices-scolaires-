# École+ — Site d'exercices scolaires (Belgique francophone)

Exercices interactifs de la 1re maternelle à la rhétorique, avec épreuves
blanches CEB (P6), CE1D (S2), CE2D (S4) et CESS (rhéto).

## Déployer le site (gratuit)

**Option Netlify (recommandée, comme tes autres projets) :**
1. Va sur https://app.netlify.com/drop
2. Glisse-dépose le dossier `site-exercices` complet
3. Le site est en ligne en quelques secondes, avec une URL partageable

**Option Vercel :** `vercel deploy` depuis le dossier, ou glisser-déposer sur vercel.com/new.

Aucune base de données, aucun serveur : tout est statique. Les points et la
progression sont sauvegardés dans le navigateur de chaque visiteur (localStorage).

## Structure du projet

```
site-exercices/
├── index.html          → coquille du site
├── css/style.css       → design
└── js/
    ├── catalogue.js    → années, matières, modules (LA carte du site)
    ├── banques.js      → questions fixes {q, b, a}
    ├── generateurs.js  → questions générées à l'infini (calcul, fractions...)
    └── moteur.js       → navigation, QCM, épreuves, points (ne pas toucher)
```

## Ajouter du contenu (le cœur du travail)

### Ajouter des questions à une banque existante
Ouvre `js/banques.js`, trouve la banque (ex. `p6_homophones`) et ajoute :
```js
{q:"Ta question avec ___ si besoin.", b:"bonne réponse", a:["piège 1","piège 2"]},
```

### Créer un nouveau module
1. Dans `js/banques.js`, crée une banque : `s3_geo: [ {q:..., b:..., a:[...]}, ... ],`
2. Dans `js/catalogue.js`, ajoute dans l'année et la matière voulues :
```js
{id:'geo', titre:'Géographie', emoji:'🗺️', type:'banque', ref:'s3_geo'}
```
C'est tout — le module apparaît sur le site, et ses questions entrent
automatiquement dans l'épreuve blanche de l'année.

### Créer une nouvelle matière ou année
Il suffit d'ajouter la clé dans `PROGRAMME` (catalogue.js). Les années sont
définies dans `ANNEES` au même endroit.

## État du contenu

- **Maternelle → P6** : bien fourni (le CEB est la partie la plus complète)
- **S1-S2 (CE1D)** : base solide, à enrichir
- **S3-S6 (CE2D/CESS)** : banques de démarrage — c'est là que l'effort de
  contenu doit porter en priorité

## Idées pour la suite

- Enrichir les banques S3-S6 matière par matière (10-15 questions par module minimum)
- Ajouter langues modernes (néerlandais/anglais) au secondaire
- Textes de lecture avec questions (le moteur peut être étendu)
- Compte à rebours paramétrable sur les épreuves (CE1D réel = épreuves plus longues)
- Statistiques par matière pour repérer les points faibles
