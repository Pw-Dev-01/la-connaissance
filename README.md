# La connaissance

Portail statique réunissant les cours de mathématiques, de physique et les prochaines disciplines.

## Ouvrir le portail

Ouvre `index.html` dans un navigateur. Les liens mènent aux catalogues des matières. Aucun serveur ni installation n’est nécessaire.

- `cours-mathematiques/` : copie du site de mathématiques, intégrée à ce dépôt pour le déploiement Pages sans accès à un dépôt privé externe.
- `cours-physique/` : catalogue et leçons de physique.

## Déploiement GitHub Pages

Le dépôt est un site statique servi depuis la racine. Configure **Settings → Pages → Build and deployment** sur la branche `main` et le dossier `/(root)` ; chaque push relance alors le workflow Pages intégré à GitHub.

Les cours de mathématiques et de physique sont des fichiers du dépôt, sans sous-module privé à cloner. Lors d’une mise à jour du dépôt source des maths, reporte les changements dans `cours-mathematiques/` puis pousse-les pour republier le portail.
