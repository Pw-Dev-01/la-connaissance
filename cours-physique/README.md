# Le cours de physique

Site statique (GitHub Pages) : un catalogue de branches de la physique et des leçons affichées à partir d'un seul fichier de données. Aucune page HTML n'est nécessaire par cours : tout le contenu vit dans `physique-data.js`.

## Organisation des fichiers

```
/ (racine du dépôt)
├── styles.css          Styles communs à toutes les disciplines
├── catalogue.js        Moteur commun : génère le catalogue (index.html)
├── cours.js            Moteur commun : génère une leçon (cours.html)
├── navigation.js       Moteur commun : liens de navigation secondaire du haut de page
└── (dossier de la discipline physique)
    ├── index.html      Page catalogue
    ├── cours.html      Page de leçon (lue avec ?id=identifiant-du-chapitre)
    └── physique-data.js  Toutes les données : branches, chapitres, leçons
```

Les fichiers « communs » sont partagés avec les autres disciplines : les modifier avec prudence et tester les autres disciplines ensuite.

## Ordre de chargement

Dans `index.html` et `cours.html`, le fichier de données doit toujours être chargé **avant** les moteurs :

```html
<script src="physique-data.js?v=N" defer></script>
<script src="../catalogue.js" defer></script>     <!-- index.html -->
<script src="../cours.js" defer></script>         <!-- cours.html -->
<script src="../navigation.js" defer></script>
```

Le paramètre `?v=N` force le navigateur à recharger le fichier de données. À augmenter après chaque mise à jour, dans **les deux** pages (index et cours), sinon une page peut afficher « Leçon introuvable » avec un ancien fichier en cache.

## Blocs HTML attendus par les moteurs

- En-tête de `index.html` et de `cours.html` : `<nav class="topbar-links" data-navigation></nav>` (rempli par `navigation.js`).
- `index.html` : `#catalogue-levels` (menu latéral), `#programme-sections` (liste des branches), `#domain-statistics` et `#catalogue-count` (statistiques écrites par `catalogue.js`).
- `cours.html` : `#lesson-title`, `#lesson-summary`, `#lesson-eyebrow`, `#lesson-field`, `#lesson-level`, `#lesson-level-label`, `#lesson-chapter-nav`, `#chapter-lesson`, `#lesson-footer`.
- Les statistiques du catalogue sont calculées : ne pas les écrire à la main dans le HTML (le texte initial est remplacé au chargement).

## Format des données

Le fichier définit `window.courseCatalog`, un tableau de branches. L'ordre du tableau est l'ordre d'affichage et de numérotation.

```js
window.courseCatalog = [
  {
    id: 'thermodynamique',            // identifiant unique de la branche
    title: 'Thermodynamique',
    note: 'Phrase de présentation de la branche.',
    chapters: [
      {
        id: 'gaz-parfaits',           // identifiant UNIQUE dans tout le fichier
        title: 'Température et gaz parfaits',
        field: 'Thermodynamique · bases',   // mention affichée à droite
        summary: 'Résumé affiché sous le titre de la leçon.',
        lesson: { /* voir ci-dessous */ }
      }
    ]
  }
];
```

Une branche peut aussi être ajoutée après coup avec `window.courseCatalog.push({ … })`.

### Contenu d'une leçon (`lesson`)

`cours.js` affiche, dans cet ordre, les champs présents :

| Champ | Rôle |
|---|---|
| `fiche` | Fiche sous forme de paires `[libellé, valeur]` |
| `content` (+ `heading`) | Contenu en HTML libre |
| `sections` | Paragraphes de texte |
| `formula` | `{ label, text, mathML? }` : formule principale |
| `equationDetails` | Équations détaillées : `title`, `formula`, `explanation`, `parameters`, `example`, `result` |
| `example` | `{ statement, calculation, answer }` : exemple guidé |
| `exercise` ou `exercises` | Exercice(s) avec `question` et `answer` (correction dépliable) |
| `sources` (+ `sourcesHeading`) | Liste de `{ title, url }` |

Les indices Unicode (₁, ₂ …), les vecteurs (lettre + U+20D7) et le « c » indice spécial (U+A700) sont reconnus dans les textes.

## Cours approfondis

Un cours approfondi est une **branche à part entière** : chaque section du cours est un chapitre, et son HTML est stocké dans `lesson.content`. Il s'ouvre donc comme une leçon normale (`cours.html?id=…`), sans page dédiée.

```js
{
  id: 'thermodynamique-transferts',
  title: 'Thermodynamique et transferts thermiques',
  note: 'Présentation du cours.',
  chapters: [
    {
      id: 'thermo-temperature-equilibre',   // préfixe propre au cours
      title: 'Température et équilibre thermique',
      field: 'Cours approfondi',
      summary: 'Phrase d’accroche de la section.',
      lesson: { content: '<p style="…">…</p>' }
    }
  ]
}
```

Conventions pour ajouter un cours approfondi à partir d'une page HTML :

1. Une section de la page = un chapitre. Le titre vient du menu « Dans ce cours ».
2. Retirer de chaque section le repère `section-index` et le titre `h2` : le `h2` devient le `summary`, le reste devient `lesson.content`.
3. Préfixer tous les identifiants de chapitres (`meca-`, `thermo-`, `quant-`, `part-`, `astro-` …) pour éviter les collisions : `cours.js` cherche un chapitre par son `id` dans tout le fichier.
4. Mettre en forme en ligne les éléments de premier niveau : `cours.js` ne stylise que les paragraphes directement dans la section, pas ceux d'un `lesson.content`. Les paragraphes et listes reçoivent donc un attribut `style` (interligne, couleur, largeur maximale).
5. Les équations MathML doivent être bien formées (balises ouvertes et fermées) : vérifier chaque `<mfrac>` et chaque `<mrow>`.

Anciennes formes encore acceptées par `catalogue.js` : une branche avec `href` + `sections` (page HTML dédiée) ou une liste `deepCourses`. Elles supposent que la page HTML existe encore.

## Ajouter une branche, un chapitre ou une leçon

1. Ouvrir `physique-data.js`.
2. Ajouter la branche (ou le chapitre dans `chapters`) avec un `id` **unique**.
3. Renseigner `title`, `field`, `summary` et `lesson`.
4. Augmenter `?v=N` dans `index.html` et `cours.html`.
5. Recharger la page en vidant le cache.

Aucun nombre n'est à mettre à jour ailleurs : branches, chapitres et statistiques se recalculent à partir des données.

## Conventions d'écriture

- Apostrophes typographiques (’) dans les textes du fichier de données.
- Formules : texte Unicode (`E = hf`, `Eₖ`) ou MathML dans `lesson.formula.mathML`.
- Sources : liens `https://` vérifiés, avec un titre explicite.

## Problèmes courants

| Symptôme | Cause probable |
|---|---|
| « Leçon introuvable » | Identifiant absent du fichier de données, fichier en cache (`?v=`), ou `physique-data.js` non chargé avant `cours.js` |
| Une branche n'apparaît pas | Fichier de données avec une erreur de syntaxe (virgule, guillemet) : ouvrir la console du navigateur |
| Un lien ouvre le mauvais chapitre | Deux chapitres avec le même `id` : `cours.js` prend le premier trouvé |
| Texte hors cadre sur mobile | Règles dans `styles.css` (titres : tailles dans les blocs `@media`, classe `is-long-title` pour les titres longs) |
| Liens du haut de page absents | `navigation.js` non chargé ou bloc `data-navigation` manquant |
| Page 404 | Nom de fichier avec une casse différente (GitHub Pages distingue majuscules et minuscules) |

## Vérifier avant publication

- Charger `physique-data.js` dans un éditeur ou la console : aucune erreur de syntaxe.
- Contrôler l'unicité des identifiants de chapitres.
- Ouvrir `index.html`, une leçon courte, une leçon avec formules MathML et une leçon avec exercices dépliables.
- Tester sur mobile : largeur des titres, tableaux défilants, formules.
