// Leçon de géologie : notions, relation essentielle, exemple guidé,
// exercice corrigé et sources. Même gabarit que physique/chimie/économie.
// Les entrées de type « cours approfondi » (href + sections, sans chapters)
// ne sont pas rendues ici : elles sont redirigées vers leur page dédiée.
const chapterId = new URLSearchParams(window.location.search).get('id');
const branch = window.courseCatalog.find((item) => (item.chapters || []).some((chapter) => chapter.id === chapterId));
const deepCourse = !branch && chapterId
  ? window.courseCatalog.find((item) => item.href && (item.id === chapterId || (item.sections || []).some((entry) => entry.anchor === chapterId)))
  : null;
if (deepCourse) {
  window.location.replace(`${deepCourse.href}#${encodeURIComponent(chapterId)}`);
}
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

// Équations en MathML accessible ; repli texte si le type est inconnu.
const appendMathDisplay = (parent, text, mathMLType) => {
  if (!['moment-magnitude', 'radioactive-decay-summary'].includes(mathMLType)) {
    addText(parent, 'span', 'math-display', text);
    return;
  }

  const namespace = 'http://www.w3.org/1998/Math/MathML';
  const node = (name, value) => {
    const element = document.createElementNS(namespace, name);
    if (value) element.textContent = value;
    return element;
  };
  const equation = node('math');
  equation.classList.add('mathml-display');
  equation.setAttribute('display', 'block');

  if (mathMLType === 'moment-magnitude') {
    const row = node('mrow');
    const magnitude = node('msub');
    magnitude.append(node('mi', 'M'), node('mi', 'w'));
    const fraction = node('mfrac');
    fraction.append(node('mn', '2'), node('mn', '3'));
    const base = node('msub');
    base.append(node('mi', 'log'), node('mn', '10'));
    const moment = node('msub');
    moment.append(node('mi', 'M'), node('mn', '0'));
    const argument = node('mrow');
    argument.append(node('mo', '('), moment, node('mo', ')'));
    row.append(magnitude, node('mo', '='), fraction, node('mo', '×'), base, argument, node('mo', '−'), node('mn', '6,0'));
    equation.append(row);
    equation.setAttribute('aria-label', 'Magnitude de moment égale deux tiers du logarithme décimal du moment sismique moins six');
    addText(parent, 'span', 'math-display', text);
  } else {
    const initialPopulation = node('msub');
    initialPopulation.append(node('mi', 'N'), node('mn', '0'));
    const timeFunction = node('mrow');
    timeFunction.append(node('mi', 'N'), node('mo', '('), node('mi', 't'), node('mo', ')'));
    const exponent = node('mrow');
    exponent.append(node('mo', '−'), node('mi', 'λ'), node('mi', 't'));
    const exponential = node('msup');
    exponential.append(node('mi', 'e'), exponent);
    const halfLife = node('msub');
    const halfLifeIndex = node('mfrac');
    halfLifeIndex.append(node('mn', '1'), node('mn', '2'));
    halfLife.append(node('mi', 't'), halfLifeIndex);
    const naturalLog = node('mrow');
    naturalLog.append(node('mi', 'ln'), node('mo', '('), node('mn', '2'), node('mo', ')'));
    const ratio = node('mfrac');
    ratio.append(naturalLog, node('mi', 'λ'));
    const decayLaw = node('mrow');
    decayLaw.append(timeFunction, node('mo', '='), initialPopulation, exponential);
    const halfLifeEquation = node('mrow');
    halfLifeEquation.append(halfLife, node('mo', '='), ratio);
    const table = node('mtable');
    for (const expression of [decayLaw, halfLifeEquation]) {
      const tableRow = node('mtr');
      const cell = node('mtd');
      cell.append(expression);
      tableRow.append(cell);
      table.append(tableRow);
    }
    equation.append(table);
    equation.setAttribute('aria-label', 'N de t égale N zéro fois exponentielle de moins lambda t. Demi-vie égale logarithme naturel de deux divisé par lambda.');
  }

  parent.append(equation);
};

if (!branch || !chapter) {
  document.title = 'Leçon introuvable · Cours de géologie';
  lessonTitle.textContent = 'Leçon introuvable';
  document.querySelector('#lesson-summary').textContent = 'Ce chapitre ne figure pas dans le catalogue. Retourne à la page des branches pour choisir une leçon.';
} else {
  document.title = `${chapter.title} · Cours de géologie`;
  lessonTitle.textContent = chapter.title;
  if (chapter.title.split(/\s+/).some((word) => word.length > 16)) {
    lessonTitle.classList.add('is-long-title');
  }
  document.querySelector('#lesson-summary').textContent = chapter.summary;
  document.querySelector('#lesson-eyebrow').textContent = `${branch.title.toLocaleUpperCase('fr-FR')} · ${chapter.field}`;
  document.querySelector('#lesson-field').textContent = chapter.field;
  document.querySelector('#lesson-level').textContent = 'BASES → APPROFONDISSEMENT';
  // L'étiquette de domaine, au-dessus de la liste des chapitres, renvoie à la
  // section de cette branche dans le catalogue de géologie.
  const levelLabel = document.querySelector('#lesson-level-label');
  levelLabel.textContent = branch.title.toLocaleUpperCase('fr-FR');
  levelLabel.href = `index.html#${branch.id}`;
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
  appendMathDisplay(formula, chapter.lesson.formula.text, chapter.lesson.formula.mathML);
  theory.append(formula);
  lessonContainer.append(theory);

  const hasEquationDetails = Boolean(chapter.lesson.equationDetails?.length);
  if (hasEquationDetails) {
    const equationSection = document.createElement('section');
    equationSection.className = 'lesson-section';
    addText(equationSection, 'p', 'section-index', '02 / ÉQUATIONS DÉTAILLÉES');
    addText(equationSection, 'h2', '', 'Formules, paramètres et applications');
    chapter.lesson.equationDetails.forEach((equation) => {
      addText(equationSection, 'h3', '', equation.title);
      const equationFormula = document.createElement('div');
      equationFormula.className = 'formula-block';
      appendMathDisplay(equationFormula, equation.formula, equation.mathML);
      equationSection.append(equationFormula);
      addText(equationSection, 'p', '', equation.explanation);
      addText(equationSection, 'p', '', `Paramètres et unités : ${equation.parameters}`);
      addText(equationSection, 'p', '', `Exemple : ${equation.example}`);
      const detailResult = document.createElement('div');
      detailResult.className = 'worked-result';
      addText(detailResult, 'strong', '', equation.result);
      equationSection.append(detailResult);
    });
    lessonContainer.append(equationSection);
  }

  const example = document.createElement('section');
  example.className = 'lesson-section';
  addText(example, 'p', 'section-index', `${hasEquationDetails ? '03' : '02'} / EXEMPLE GUIDÉ`);
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
  addText(practice, 'p', 'section-index', `${hasEquationDetails ? '04' : '03'} / S’ENTRAÎNER`);
  addText(practice, 'h2', '', 'À toi de jouer');
  const lessonExercises = chapter.lesson.exercises
    || (chapter.lesson.exercise ? [chapter.lesson.exercise] : []);
  lessonExercises.forEach((item, itemIndex) => {
    const exercise = document.createElement('details');
    exercise.className = 'exercise';
    const summary = document.createElement('summary');
    addText(summary, 'span', 'exercise-number', String.fromCharCode(65 + itemIndex));
    addText(summary, 'span', '', item.question);
    addText(summary, 'span', 'reveal-label', 'Voir la correction');
    const answer = document.createElement('div');
    answer.className = 'exercise-answer';
    addText(answer, 'p', '', item.answer);
    exercise.append(summary, answer);
    exercise.addEventListener('toggle', () => {
      summary.querySelector('.reveal-label').textContent = exercise.open ? 'Masquer la correction' : 'Voir la correction';
    });
    practice.append(exercise);
  });
  lessonContainer.append(practice);

  if (chapter.lesson.sources?.length) {
    const references = document.createElement('section');
    references.className = 'lesson-section';
    addText(references, 'p', 'section-index', `${hasEquationDetails ? '05' : '04'} / RÉFÉRENCES`);
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
}

const progressBar = document.querySelector('#reading-progress');
const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();