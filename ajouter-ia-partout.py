"""
ajouter-ia-partout.py
Ajoute automatiquement <script src="ia-ecole.js"></script> avant </body>
dans TOUTES les pages HTML du site, avec le bon chemin relatif selon
la profondeur du dossier (racine, sous-dossier, sous-sous-dossier...).

UTILISATION :
1. Place ce script à la RACINE de ton dépôt Exercices-scolaires-
   (au même endroit que ia-ecole.js)
2. Ouvre un terminal dans ce dossier
3. Lance : python ajouter-ia-partout.py
4. Le script te dit combien de pages ont été modifiées
5. Vérifie quelques pages, puis git add / commit / push comme d'habitude

Le script ne touche PAS aux pages qui ont déjà la ligne (sûr à relancer).
"""

import os

RACINE = os.path.dirname(os.path.abspath(__file__))
NOM_SCRIPT_IA = "ia-ecole.js"
BALISE_FERMANTE = "</body>"

fichiers_modifies = 0
fichiers_deja_ok = 0
fichiers_sans_body = 0

for dossier_courant, sous_dossiers, fichiers in os.walk(RACINE):
    for nom_fichier in fichiers:
        if not nom_fichier.lower().endswith(".html"):
            continue

        chemin_complet = os.path.join(dossier_courant, nom_fichier)

        with open(chemin_complet, "r", encoding="utf-8", errors="ignore") as f:
            contenu = f.read()

        # Déjà présent -> on ne touche pas
        if NOM_SCRIPT_IA in contenu:
            fichiers_deja_ok += 1
            continue

        if BALISE_FERMANTE not in contenu:
            fichiers_sans_body += 1
            print(f"[IGNORÉ - pas de </body>] {chemin_complet}")
            continue

        # Calcule le chemin relatif vers ia-ecole.js depuis ce fichier HTML
        chemin_relatif_dossier = os.path.relpath(RACINE, dossier_courant)
        if chemin_relatif_dossier == ".":
            chemin_script = NOM_SCRIPT_IA
        else:
            chemin_script = chemin_relatif_dossier.replace(os.sep, "/") + "/" + NOM_SCRIPT_IA

        balise_script = f'  <script src="{chemin_script}"></script>\n'
        nouveau_contenu = contenu.replace(
            BALISE_FERMANTE,
            balise_script + BALISE_FERMANTE,
            1  # seulement la première occurrence
        )

        with open(chemin_complet, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)

        fichiers_modifies += 1
        print(f"[MODIFIÉ] {chemin_complet}  ->  src=\"{chemin_script}\"")

print("\n--- Résumé ---")
print(f"Pages modifiées   : {fichiers_modifies}")
print(f"Déjà à jour       : {fichiers_deja_ok}")
print(f"Ignorées (sans </body>) : {fichiers_sans_body}")
