# Cours de chimie

Catalogue pédagogique organisé en 6 branches et 18 chapitres, de la structure de la matière à la chimie organique et analytique. Chaque leçon contient les notions essentielles, une formule ou relation clé, un exemple résolu et un exercice corrigé.

Les pages approfondies :

- `index.html` — réaction chimique, équation, tableau d’avancement, réactif limitant et bilans de matière.
- `acides-bases.html` — définition de Brønsted, pH, acides forts et faibles, pK_A et titrages.
- `structure-matiere.html` — noyau, cortège électronique, isotopes, configuration et tableau périodique.

## Ouvrir les cours

Ouvre `programmes.html` dans un navigateur pour parcourir les programmes, ou `index.html` pour commencer par l’avancement. Aucun serveur ni installation n’est nécessaire.

Les chapitres signalés « cours complet » dans le catalogue ouvrent une page dédiée ; les autres ouvrent une leçon générée depuis `chimie-data.js` par `cours.html`.

Le site réutilise la feuille de style partagée de `cours-mathematiques` pour conserver le même format visuel.

## Sources vérifiées

Chaque valeur numérique des trois cours complets a été contrôlée sur une source publique consultable, et la section « Sources » en bas de chaque page (ancre `#sources`) donne les liens directs :

| Contenu | Source vérifiée |
| --- | --- |
| Programme de seconde (atome, noyau, isotopes, classification) | B.O. spécial n°1 du 22 janvier 2019, reproduit par PCCL |
| Programme de première spécialité (avancement, réactif limitant, titrages colorimétriques) | B.O. spécial n°1 du 22 janvier 2019, reproduit par PCCL |
| Charge élémentaire, masses du proton et de l’électron, rayons du proton et de Bohr | CODATA 2022 — `physics.nist.gov/cuu` |
| Isotopes du chlore et du cuivre (masses, abondances, masses molaires) | NIST « Atomic Weights and Isotopic Compositions » + CIAAW (IUPAC) |
| Configuration électronique du cuivre, électronégativité du fluor | Periodic Table of Elements — Los Alamos National Laboratory |
| Produit ionique de l’eau et pH de neutralité selon la température | « The Ionic Product for Water » — LibreTexts Chemistry |
| Définition du pH (activité de l’ion hydrogène) et formules approchées | Article « Potentiel hydrogène » |

Points d’attention relevés lors de la vérification :

- Le rayon du noyau (≈ 10⁻¹⁵ m) n’est « environ 100 000 fois » plus petit que celui de l’atome (≈ 10⁻¹⁰ m) qu’en comparant les ordres de grandeur ; sur les valeurs mesurées le rapport vaut 6,3 × 10⁴ pour l’hydrogène (rayon de charge du proton 8,41 × 10⁻¹⁶ m, rayon de Bohr 5,29 × 10⁻¹¹ m).
- Le rapport des masses proton/électron vaut 1 836,15 (et non « environ 2 000 »).
- Le chlore naturel contient 75,76 % de ³⁵Cl et 24,24 % de ³⁷Cl, le cuivre 69,15 % de ⁶³Cu et 30,85 % de ⁶⁵Cu.
- Les formules pH = −log C et pH = 14 + log C ne sont valables qu’à 25 °C et pour C ≳ 10⁻⁶ mol·L⁻¹.
- La règle de Klechkowski admet des exceptions (chrome, cuivre).

Limites : les pages `education.gouv.fr` sont protégées par un contrôle anti-robot et les PDF officiels ne sont pas extractibles ici ; les textes de programme sont donc cités via leur reproduction en HTML par PCCL (source gouvernementale) et les données via NIST, CIAAW et LibreTexts. Les chapitres dont le niveau n’a pas pu être établi avec certitude (branche « Chimie analytique et spectroscopie ») n’affichent pas de lien « programme officiel » dans `cours.html`.

