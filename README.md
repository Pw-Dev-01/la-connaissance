# Cours en ligne : dépôt principal

Site statique publié avec GitHub Pages. Le dépôt contient un portail d'accueil et plusieurs disciplines (mathématiques, physique, histoire…). Chaque discipline a son propre dossier et son propre fichier de données. Les moteurs d'affichage, les styles et la navigation sont **communs** et placés à la racine.

## Fichiers de la racine

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil du dépôt |
| `portal.js`, `portal.css` | Script et style propres à la page d'accueil |
| `catalogue.js` | Moteur commun : génère le catalogue d'une discipline (branches, chapitres) |
| `cours.js` | Moteur commun : génère une leçon à partir de son identifiant |
| `navigation.js` | Moteur commun : liens de navigation secondaire en haut des pages |
| `styles.css` | Styles communs des pages de catalogue et de leçon |
| `catalogue-backup.js`, `cours-backup.js` | Sauvegardes d'anciennes versions des moteurs (non chargées par les pages) |

## Fichiers communs : règle d'usage

`catalogue.js`, `cours.js`, `navigation.js` et `styles.css` servent **toutes** les disciplines. Toute modification se répercute partout :

1. Garder la compatibilité avec les anciens formats de données.
2. Faire une copie de sauvegarde avant de modifier (`catalogue-backup.js`, `cours-backup.js`).
3. Tester au moins deux disciplines après la modification.

## Structure d'une discipline

Chaque discipline est un dossier qui contient :

```
dossier-discipline/
├── index.html        Catalogue de la discipline
├── cours.html        Page de leçon (lue avec ?id=identifiant-du-chapitre)
└── xxx-data.js       Données de la discipline (window.courseCatalog)
```

Les pages d'une discipline chargent les fichiers communs par un chemin relatif (`../styles.css`, `../catalogue.js`, `../cours.js`, `../navigation.js`).

### Ordre de chargement

Le fichier de données doit toujours précéder les moteurs :

```html
<link rel="stylesheet" href="../styles.css">
<script src="xxx-data.js?v=N" defer></script>
<script src="../catalogue.js" defer></script>   <!-- index.html de la discipline -->
<script src="../cours.js" defer></script>       <!-- cours.html de la discipline -->
<script src="../navigation.js" defer></script>
```

`?v=N` force le rechargement du fichier de données : l'augmenter dans les deux pages à chaque mise à jour.

### Blocs HTML attendus

- En-tête des pages : `<nav class="topbar-links" data-navigation></nav>` (rempli par `navigation.js`).
- Catalogue : `#catalogue-levels`, `#programme-sections`, `#domain-statistics`, `#catalogue-count` (statistiques écrites automatiquement par `catalogue.js`).
- Leçon : `#lesson-title`, `#lesson-summary`, `#lesson-eyebrow`, `#lesson-field`, `#lesson-level`, `#lesson-level-label`, `#lesson-chapter-nav`, `#chapter-lesson`, `#lesson-footer`.

### Nom de la discipline

`cours.js` construit le titre de l'onglet à partir de `window.courseDiscipline` si le fichier de données la définit (par exemple `window.courseDiscipline = 'physique';`). À défaut, il reprend le texte après « · » dans le `<title>` de la page.

## Format des données (`window.courseCatalog`)

Un tableau de branches, dans l'ordre d'affichage.

```js
window.courseCatalog = [
  {
    id: 'ma-branche',
    title: 'Titre de la branche',
    note: 'Phrase de présentation.',
    chapters: [
      {
        id: 'mon-chapitre',               // unique dans tout le fichier
        title: 'Titre du chapitre',
        field: 'Mention affichée à droite',
        summary: 'Résumé affiché sous le titre de la leçon.',
        lesson: { /* voir ci-dessous */ }
      }
    ]
  }
];
```

Contenu d'une leçon, affiché par `cours.js` dans cet ordre (seuls les champs présents sont rendus) :

| Champ | Rôle |
|---|---|
| `fiche` | Paires `[libellé, valeur]` |
| `content` (+ `heading`) | HTML libre |
| `sections` | Paragraphes |
| `formula` | `{ label, text, mathML? }` |
| `equationDetails` | Équations détaillées (`title`, `formula`, `explanation`, `parameters`, `example`, `result`) |
| `example` | `{ statement, calculation, answer }` |
| `exercise` ou `exercises` | Exercices à correction dépliable (`question`, `answer`) |
| `sources` (+ `sourcesHeading`) | Liste de `{ title, url }` |

### Formats de branche acceptés par `catalogue.js`

- `chapters` seul : chapitres affichés dans `cours.html?id=…`.
- `href` + `sections` : cours approfondi rendu par une page HTML dédiée.
- `chapters` + `href` + `sections` : chapitres puis sections de la page dédiée.
- `deepCourses` : liste de cours approfondis rattachés à la branche.

Pour un cours approfondi sans page dédiée, le plus simple est d'en faire une branche dont chaque section est un chapitre (`lesson.content` contient le HTML).

## Ajouter une discipline

1. Créer un dossier à la racine.
2. Y copier `index.html` et `cours.html` d'une discipline existante, puis adapter les textes, le titre, l'icône du logo et le nom du fichier de données.
3. Créer le fichier de données avec `window.courseCatalog`.
4. Ajouter un lien depuis la page d'accueil du dépôt.

## Problèmes courants

| Symptôme | Cause probable |
|---|---|
| « Leçon introuvable » | Identifiant absent des données, fichier en cache (`?v=`), ou données non chargées avant `cours.js` |
| Catalogue vide | Erreur de syntaxe dans le fichier de données : ouvrir la console du navigateur |
| Un lien ouvre le mauvais chapitre | Deux chapitres avec le même `id` dans un même fichier |
| Mise en page cassée après modification | Changement dans un fichier commun : restaurer la sauvegarde puis retester |
| Page 404 | Nom de fichier avec une casse différente (GitHub Pages distingue majuscules et minuscules) |
| Liens du haut absents | `navigation.js` non chargé ou bloc `data-navigation` manquant |

## Avant de publier

- Aucune erreur dans la console sur le catalogue et sur une leçon.
- Identifiants de chapitres uniques.
- Test sur mobile : titres, tableaux défilants, formules.
- Test d'au moins une autre discipline si un fichier commun a changé.
