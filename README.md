# La connaissance

Portail statique réunissant les cours de mathématiques, de physique, de chimie et les prochaines disciplines.

## Ouvrir le portail

Ouvre `index.html` dans un navigateur. Les liens mènent aux catalogues des matières. Aucun serveur ni installation n’est nécessaire.

- `cours-mathematiques/` : copie du site de mathématiques, intégrée à ce dépôt pour le déploiement Pages sans accès à un dépôt privé externe.
- `cours-physique/` : catalogue et leçons de physique.
- `cours-chimie/` : catalogue et leçons de chimie.

## Déploiement GitHub Pages

Le dépôt est un site statique servi depuis la racine. Configure **Settings → Pages → Build and deployment** sur la branche `main` et le dossier `/(root)` ; chaque push relance alors le workflow Pages intégré à GitHub.

Le workflow contrôle la syntaxe des trois fichiers de catalogue (`cours-chimie/chimie-data.js`, `cours-physique/physique-data.js`, `cours-mathematiques/programme-data.js`) avec `node --check` avant l’assemblage du site : un fichier de données cassé fait échouer le déploiement au lieu de publier un catalogue vide.

Les cours de mathématiques, de physique et de chimie sont des fichiers du dépôt, sans sous-module privé à cloner. Lors d’une mise à jour du dépôt source des maths, reporte les changements dans `cours-mathematiques/` puis pousse-les pour republier le portail.

