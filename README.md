# La connaissance

Portail statique réunissant les cours de mathématiques, de physique et les prochaines disciplines.

## Ouvrir le portail

Ouvre `index.html` dans un navigateur. Les liens mènent aux catalogues des matières. Aucun serveur ni installation n’est nécessaire.

- `cours-mathematiques/` : copie du site de mathématiques, intégrée à ce dépôt pour le déploiement Pages sans accès à un dépôt privé externe.
- `cours-physique/` : catalogue et leçons de physique.

## Déploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` assemble les fichiers statiques et les publie à chaque push sur `main`. Dans les paramètres du dépôt GitHub, règle **Settings → Pages → Build and deployment → Source** sur **GitHub Actions**.

La copie `cours-mathematiques/` est autonome dans ce dépôt. Lors d’une mise à jour du cours source, reporte les changements ici puis pousse-les pour republier le portail.
