const chapterId = new URLSearchParams(window.location.search).get('id');
const branches = window.courseCatalog;
const chapter = branches.flatMap((branch) => branch.chapters).find((item) => item.id === chapterId);
const branch = chapter ? branches.find((item) => item.chapters.includes(chapter)) : null;
const chapterNumber = chapter
  ? String(branches.flatMap((item) => item.chapters).findIndex((item) => item.id === chapter.id) + 1).padStart(2, '0')
  : '';
const lessonTitle = document.querySelector('#lesson-title');
const lessonSummary = document.querySelector('#lesson-summary');
const lessonContainer = document.querySelector('#chapter-lesson');
const chapterNavigation = document.querySelector('#lesson-chapter-nav');

const addText = (parent, tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
};

if (!branch || !chapter) {
  document.title = 'Leçon introuvable · Cours d’anthropologie';
  lessonTitle.textContent = 'Leçon introuvable';
  lessonSummary.textContent = 'Ce chapitre ne figure pas dans le catalogue. Retourne à la page des rubriques pour choisir une leçon.';
} else {
  document.title = `${chapter.title} · Cours d’anthropologie`;
  lessonTitle.textContent = chapter.title;
  if (chapter.title.split(/\s+/).some((word) => word.length > 16)) lessonTitle.classList.add('is-long-title');
  lessonSummary.textContent = chapter.summary;
  document.querySelector('#lesson-eyebrow').textContent = `ANTHROPOLOGIE · ${branch.title.toLocaleUpperCase('fr-FR')}`;
  document.querySelector('#lesson-field').textContent = chapter.field;
  // L'étiquette de domaine, au-dessus de la liste des chapitres, renvoie à la
  // rubrique correspondante du catalogue d'anthropologie.
  const levelLabel = document.querySelector('#lesson-level-label');
  levelLabel.textContent = branch.title.toLocaleUpperCase('fr-FR');
  levelLabel.href = `index.html#${branch.id}`;
  document.querySelector('#lesson-footer').textContent = `ANTHROPOLOGIE · ${chapter.field.toLocaleUpperCase('fr-FR')}`;

  branch.chapters.forEach((sibling) => {
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
  addText(theory, 'p', 'section-index', `${chapterNumber} / COMPRENDRE`);
  addText(theory, 'h2', '', chapter.lesson.heading);
  chapter.lesson.sections.forEach((paragraph) => addText(theory, 'p', '', paragraph));
  lessonContainer.append(theory);

  const example = document.createElement('section');
  example.className = 'lesson-section';
  addText(example, 'p', 'section-index', '02 / ÉTUDE GUIDÉE');
  addText(example, 'h2', '', 'Démarche pas à pas');
  addText(example, 'p', '', chapter.lesson.example.statement);
  addText(example, 'p', '', chapter.lesson.example.method);
  const exampleResult = document.createElement('div');
  exampleResult.className = 'worked-result';
  addText(exampleResult, 'strong', '', chapter.lesson.example.conclusion);
  example.append(exampleResult);
  lessonContainer.append(example);

  const practice = document.createElement('section');
  practice.className = 'lesson-section exercise-section';
  addText(practice, 'p', 'section-index', '03 / S’ENTRAÎNER');
  addText(practice, 'h2', '', 'À toi de jouer');
  const exercise = document.createElement('details');
  exercise.className = 'exercise';
  const exerciseSummary = document.createElement('summary');
  addText(exerciseSummary, 'span', 'exercise-number', 'A');
  addText(exerciseSummary, 'span', '', chapter.lesson.exercise.question);
  const revealLabel = addText(exerciseSummary, 'span', 'reveal-label', 'Voir la correction');
  const exerciseAnswer = document.createElement('div');
  exerciseAnswer.className = 'exercise-answer';
  addText(exerciseAnswer, 'p', '', chapter.lesson.exercise.answer);
  exercise.append(exerciseSummary, exerciseAnswer);
  exercise.addEventListener('toggle', () => {
    revealLabel.textContent = exercise.open ? 'Masquer la correction' : 'Voir la correction';
  });
  practice.append(exercise);
  lessonContainer.append(practice);

  const references = document.createElement('section');
  references.className = 'lesson-section';
  addText(references, 'p', 'section-index', '04 / SOURCES');
  addText(references, 'h2', '', 'Sources scientifiques et pédagogiques');
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

const readingProgress = document.querySelector('#reading-progress');
const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  readingProgress.style.width = `${Math.min(progress, 100)}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();