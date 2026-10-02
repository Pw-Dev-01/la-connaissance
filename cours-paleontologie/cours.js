const chapterId = new URLSearchParams(window.location.search).get('id');
const chapter = window.paleontologyCatalog.find((item) => item.id === chapterId);
const lessonTitle = document.querySelector('#lesson-title');
const lessonContainer = document.querySelector('#chapter-lesson');
const chapterNavigation = document.querySelector('#lesson-chapter-nav');
const branchTitles = {
  archives: 'FOSSILES ET ARCHIVES',
  'terrain-et-temps': 'TERRAIN ET TEMPS',
  'histoire-vivant': 'HISTOIRE DU VIVANT'
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
  document.title = `${chapter.title} · Cours de paléontologie`;
  lessonTitle.textContent = chapter.title;
  if (chapter.title.split(/\s+/).some((word) => word.length > 16)) {
    lessonTitle.classList.add('is-long-title');
  }
  document.querySelector('#lesson-summary').textContent = chapter.summary;
  document.querySelector('#lesson-eyebrow').textContent = `PALÉONTOLOGIE · ${chapter.field}`;
  document.querySelector('#lesson-field').textContent = chapter.field;
  // L'étiquette de domaine, au-dessus de la liste des chapitres, renvoie à la
  // rubrique correspondante du catalogue de paléontologie.
  const levelLabel = document.querySelector('#lesson-level-label');
  levelLabel.textContent = branchTitles[chapter.branch];
  levelLabel.href = `index.html#${chapter.branch}`;
  document.querySelector('#lesson-footer').textContent = `PALÉONTOLOGIE · ${chapter.field.toLocaleUpperCase('fr-FR')}`;

  window.paleontologyCatalog
    .filter((item) => item.branch === chapter.branch)
    .forEach((sibling) => {
    const link = document.createElement('a');
    link.href = `cours.html?id=${encodeURIComponent(sibling.id)}`;
    link.textContent = sibling.title;
    if (sibling.id === chapter.id) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
    chapterNavigation.append(link);
  });

  const theory = document.createElement('section');
  theory.className = 'lesson-section';
  addText(theory, 'p', 'section-index', `${chapter.number} / COMPRENDRE`);
  addText(theory, 'h2', '', chapter.lesson.heading);
  const lessonContent = document.createElement('div');
  lessonContent.innerHTML = chapter.lesson.content;
  theory.append(lessonContent);
  lessonContainer.append(theory);

  const example = document.createElement('section');
  example.className = 'lesson-section';
  addText(example, 'p', 'section-index', '02 / EXEMPLE GUIDÉ');
  addText(example, 'h2', '', 'Méthode pas à pas');
  addText(example, 'p', '', chapter.lesson.example.statement);
  addText(example, 'p', '', chapter.lesson.example.calculation);
  const result = document.createElement('div');
  result.className = 'worked-result';
  addText(result, 'strong', '', chapter.lesson.example.answer);
  example.append(result);
  lessonContainer.append(example);

  const practice = document.createElement('section');
  practice.className = 'lesson-section exercise-section';
  addText(practice, 'p', 'section-index', '03 / S’ENTRAÎNER');
  addText(practice, 'h2', '', 'À toi de jouer');
  chapter.lesson.exercises.forEach((item, itemIndex) => {
    const exercise = document.createElement('details');
    exercise.className = 'exercise';
    const summary = document.createElement('summary');
    addText(summary, 'span', 'exercise-number', String.fromCharCode(65 + itemIndex));
    addText(summary, 'span', '', item.question);
    const revealLabel = addText(summary, 'span', 'reveal-label', 'Voir la correction');
    const answer = document.createElement('div');
    answer.className = 'exercise-answer';
    addText(answer, 'p', '', item.answer);
    exercise.append(summary, answer);
    exercise.addEventListener('toggle', () => {
      revealLabel.textContent = exercise.open ? 'Masquer la correction' : 'Voir la correction';
    });
    practice.append(exercise);
  });
  lessonContainer.append(practice);

  const references = document.createElement('section');
  references.className = 'lesson-section';
  addText(references, 'p', 'section-index', '04 / RÉFÉRENCES');
  addText(references, 'h2', '', 'Sources scientifiques');
  chapter.lesson.sources.forEach((source) => {
    const paragraph = document.createElement('p');
    const link = addText(paragraph, 'a', '', source.title);
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    references.append(paragraph);
  });
  lessonContainer.append(references);
}