const chapterId = new URLSearchParams(window.location.search).get('id');
const branch = window.courseCatalog.find((item) => item.chapters.some((chapter) => chapter.id === chapterId));
const chapter = branch?.chapters.find((item) => item.id === chapterId);
const lessonTitle = document.querySelector('#lesson-title');
const lessonContainer = document.querySelector('#chapter-lesson');

const addText = (parent, tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
};

if (!branch || !chapter) {
  document.title = 'Leçon introuvable · Cours de chimie';
  lessonTitle.textContent = 'Leçon introuvable';
  document.querySelector('#lesson-summary').textContent = 'Ce chapitre ne figure pas dans le catalogue. Retourne à la page des branches pour choisir une leçon.';
} else {
  document.title = `${chapter.title} · Cours de chimie`;
  lessonTitle.textContent = chapter.title;
  document.querySelector('#lesson-summary').textContent = chapter.summary;
  document.querySelector('#lesson-eyebrow').textContent = `${branch.title.toLocaleUpperCase('fr-FR')} · ${chapter.field}`;
  document.querySelector('#lesson-field').textContent = chapter.field;
  document.querySelector('#lesson-level').textContent = 'BASES → APPROFONDISSEMENT';
  document.querySelector('#lesson-level-label').textContent = branch.title.toLocaleUpperCase('fr-FR');
  document.querySelector('#lesson-footer').textContent = `${branch.title.toLocaleUpperCase('fr-FR')} · ${chapter.field.toLocaleUpperCase('fr-FR')}`;

  branch.chapters.forEach((sibling) => {
    const link = document.createElement('a');
    link.href = `cours.html?id=${encodeURIComponent(sibling.id)}`;
    link.textContent = sibling.title;
    if (sibling.id === chapter.id) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
    document.querySelector('#lesson-chapter-nav').append(link);
  });

  const theory = document.createElement('section');
  theory.className = 'lesson-section';
  addText(theory, 'p', 'section-index', '01 / COMPRENDRE');
  addText(theory, 'h2', '', 'Les notions essentielles');
  chapter.lesson.sections.forEach((paragraph) => addText(theory, 'p', '', paragraph));
  const formula = document.createElement('div');
  formula.className = 'formula-block formula-accent';
  addText(formula, 'span', 'formula-label', chapter.lesson.formula.label);
  addText(formula, 'span', 'math-display', chapter.lesson.formula.text);
  theory.append(formula);
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
  const exercise = document.createElement('details');
  exercise.className = 'exercise';
  const summary = document.createElement('summary');
  addText(summary, 'span', 'exercise-number', 'A');
  addText(summary, 'span', '', chapter.lesson.exercise.question);
  addText(summary, 'span', 'reveal-label', 'Voir la correction');
  const answer = document.createElement('div');
  answer.className = 'exercise-answer';
  addText(answer, 'p', '', chapter.lesson.exercise.answer);
  exercise.append(summary, answer);
  exercise.addEventListener('toggle', () => {
    summary.querySelector('.reveal-label').textContent = exercise.open ? 'Masquer la correction' : 'Voir la correction';
  });
  practice.append(exercise);
  lessonContainer.append(practice);
}
