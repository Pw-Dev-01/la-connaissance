# Cours d'histoire — La connaissance

Discipline 09 du portail « La connaissance ». Même architecture que les autres
cours (géologie, paléontologie…) : un fichier de données, un moteur d'accueil et
un moteur de leçon génériques.

## Contenu actuel

**Rubrique : Histoire des civilisations** (6 chapitres)

1. Mésopotamie : villes, écriture et lois
2. Égypte ancienne : du Nil à Rome
3. Vallée de l'Indus : les villes sans histoire écrite
4. Grèce antique : cités, démocratie et guerres
5. Rome antique : de la Royauté à la chute de l'Occident
6. Chine ancienne : des Shang aux Han

Chaque chapitre comprend : notions essentielles, exemple guidé (ordonner des
événements), 3 exercices corrigés et un bloc de références.

## Fichiers

| Fichier | Rôle | À modifier pour une nouvelle discipline ? |
|---|---|---|
| `histoire-data.js` | Les données : rubriques et chapitres (`window.courseCatalog`) | Oui, c'est le seul fichier de contenu |
| `catalogue.js` | Génère la navigation et la liste des chapitres de l'accueil | Non (générique) |
| `cours.js` | Affiche une leçon à partir de `?id=` | Une ligne : `const DISCIPLINE = 'histoire';` |
| `cours.html` | Page de leçon, charge `histoire-data.js` puis `cours.js` | Textes et nom du fichier de données |
| `index.html` | Accueil de la discipline, charge `histoire-data.js` puis `catalogue.js` | Textes et nom du fichier de données |

Ordre de chargement des scripts : toujours le fichier de données **avant**
`catalogue.js` et `cours.js`.

## Format d'un chapitre

```js
{
  id: 'rome-antique',            // unique, sert dans cours.html?id=
  title: 'Rome antique : …',
  field: 'Méditerranée · 753 av. J.-C.–476 ap. J.-C.',
  summary: 'Une phrase de résumé.',
  lesson: {
    sections: ['Paragraphe 1', 'Paragraphe 2'],
    example:  { statement: '…', calculation: '…', answer: '…' },
    exercise: { question: '…', answer: '…' },   // copie du premier exercice
    exercises: [ { question: '…', answer: '…' } ],
    sources: [ { title: '…', url: 'https://…' } ]
  }
}
```

Les champs `formula`, `equationDetails` et `fiche` existent dans le moteur mais
ne sont pas utilisés ici : l'histoire n'a pas d'équations, et `fiche` est
réservé aux fiches de livres (affichage « Fiche de l'ouvrage »).

Pour ajouter une rubrique, ajouter un objet `{ id, title, note, chapters: [...] }`
dans `window.courseCatalog`, ou utiliser `window.courseCatalog.push({...})`.
Après un ajout, mettre à jour les compteurs de `index.html` (portail) :
« 1 rubrique · 6 chapitres ».

## Conventions de rédaction

- **Dates avant J.-C.** : plus le nombre est grand, plus l'événement est ancien.
  Chaque exemple guidé rappelle ce piège.
- **« Vers »** dès qu'une date dépend d'une chronologie discutée (haute, moyenne,
  basse en Mésopotamie ; Égypte ; Indus ; débuts des dynasties chinoises).
- **Désaccord entre sources** : on l'indique dans le texte (ex. 206 ou 202 pour les
  Han ; 2686 ou 2613 pour l'Ancien Empire) au lieu de trancher en silence.
- **Aucun fait sans source.** Un point que les sources contredisent est omis
  plutôt qu'affirmé (ex. type de brique de Mohenjo-daro).
- Apostrophes typographiques (’) dans les textes entre guillemets simples, pour
  ne pas casser les chaînes JavaScript.

## Sources et limites

Références utilisées : Musée du Louvre, UNESCO, British Museum (via Smarthistory),
World History Encyclopedia, Harappa.com et ressources universitaires.
Britannica et Encyclopædia Universalis n'ont pas pu être consultées directement.

À relire avant publication :
- chapitre **Indus** (sources secondaires pour Dholavira, classé en 2021) ;
- liens issus de sites pédagogiques (History Hit, Madain Project, Bharat Notes) :
  à remplacer par des références académiques si possible.

## Ajouter une rubrique d'histoire

Pistes de suite : Moyen Âge, Époque moderne, Époque contemporaine, ou
« Grands livres de l'histoire » sur le modèle des fiches de livres de la géologie.
