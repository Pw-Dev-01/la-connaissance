const chapterId = new URLSearchParams(window.location.search).get('id');
const chapter = window.paleontologyCatalog.find((item) => item.id === chapterId);
const lessonTitle = document.querySelector('#lesson-title');
const lessonContainer = document.querySelector('#chapter-lesson');
const chapterNavigation = document.querySelector('#lesson-chapter-nav');
const branchTitles = {
  archives: 'FOSSILES ET ARCHIVES',
  'terrain-et-temps': 'TERRAIN ET TEMPS',
  'histoire-vivant': 'HISTOIRE DU VIVANT',
  'grands-livres': 'GRANDS LIVRES'
};

const addText = (parent, tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
};

if (!chapter) {
  document.title = 'Leçon introuvable · Cours de paléontologie';
  lessonTitle.textContent = 'Leçon introuvable';
  document.querySelector('#lesson-summary').textContent = 'Ce chapitre ne figure pas au catalogue. Retourne à la page des rubriques pour choisir une leçon.';
} else {