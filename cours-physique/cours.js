// Leçon de physique : notions, relation fondamentale, exemple résolu,
// exercice corrigé et références éventuelles (même gabarit que les autres
// disciplines du site). Les entrées « cours approfondi » (href + sections,
// sans chapters) ne sont pas rendues ici : elles sont redirigées vers leur
// page dédiée, et une branche sans chapitres ne casse pas la recherche.
const chapterId = new URLSearchParams(window.location.search).get('id');
const branch = window.courseCatalog.find((item) => (item.chapters || []).some((chapter) => chapter.id === chapterId));
const deepCourse = !branch && chapterId
  ? window.courseCatalog.find((item) => item.href && (item.id === chapterId || (item.sections || []).some((entry) => entry.anchor === chapterId)))
  : null;
if (deepCourse) {
  window.location.replace(`${deepCourse.href}#${encodeURIComponent(chapterId)}`);
}
const chapter = branch?.chapters?.find((item) => item.id === chapterId);
const lessonTitle = document.querySelector('#lesson-title');
const lessonContainer = document.querySelector('#chapter-lesson');

const addText = (parent, tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
};

const appendMathDisplay = (parent, text, mathMLType) => {
  if (!['newton-second-law', 'radioactive-decay-summary', 'radioactive-decay-law', 'radioactive-half-life', 'einstein-field-equation', 'einstein-tensor-definition'].includes(mathMLType)) {
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
  const row = node('mrow');
  if (mathMLType === 'newton-second-law') {
    const vector = (symbol) => {
      const accent = node('mover');
      accent.setAttribute('accent', 'true');
      accent.append(node('mi', symbol), node('mo', '→'));
      return accent;
    };

    const sum = node('munder');
    sum.append(node('mo', '∑'), node('mi', 'i'));
    const forceIndex = node('mrow');
    forceIndex.append(node('mi', 'i'), node('mo', ','), node('mtext', 'ext'));
    const force = node('msub');
    force.append(vector('F'), forceIndex);

    row.append(sum, force, node('mo', '='), node('mi', 'm'), vector('a'));
    equation.setAttribute('aria-label', 'Somme des forces vectorielles extérieures égale la masse multipliée par le vecteur accélération');
    equation.append(row);
  } else if (mathMLType === 'einstein-field-equation' || mathMLType === 'einstein-tensor-definition') {
    const tensor = (symbol) => {
      const indexedTensor = node('msub');
      indexedTensor.append(node('mi', symbol), node('mrow', 'μν'));
      return indexedTensor;
    };

    if (mathMLType === 'einstein-field-equation') {
      const cosmologicalTerm = node('mrow');
      cosmologicalTerm.append(node('mi', 'Λ'), tensor('g'));
      const numerator = node('mrow');
      numerator.append(node('mn', '8'), node('mi', 'π'), node('mi', 'G'));
      const denominator = node('msup');
      denominator.append(node('mi', 'c'), node('mn', '4'));
      const coupling = node('mfrac');
      coupling.append(numerator, denominator);
      const sourceTerm = node('mrow');
      sourceTerm.append(coupling, tensor('T'));
      row.append(tensor('G'), node('mo', '+'), cosmologicalTerm, node('mo', '='), sourceTerm);
      equation.setAttribute('aria-label', 'Tenseur d’Einstein plus constante cosmologique fois le tenseur métrique égale huit pi G sur c puissance quatre fois le tenseur énergie-impulsion');
    } else {
      const ricciTerm = node('mrow');
      ricciTerm.append(node('mn', '½'), node('mi', 'R'), tensor('g'));
      row.append(tensor('G'), node('mo', '='), tensor('R'), node('mo', '−'), ricciTerm);
      equation.setAttribute('aria-label', 'Le tenseur d’Einstein égale le tenseur de Ricci moins un demi du scalaire de Ricci fois le tenseur métrique');
    }
    equation.append(row);
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

    if (mathMLType === 'radioactive-decay-summary') {
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
    } else {
      row.append(mathMLType === 'radioactive-decay-law' ? decayLaw : halfLifeEquation);
      equation.append(row);
      equation.setAttribute('aria-label', mathMLType === 'radioactive-decay-law'
        ? 'N de t égale N zéro fois exponentielle de moins lambda t'
        : 'Demi-vie égale logarithme naturel de deux divisé par lambda');
    }
  }

  parent.append(equation);
};

if (!branch || !chapter) {
  document.title = 'Leçon introuvable · Cours de physique';
  lessonTitle.textContent = 'Leçon introuvable';
  document.querySelector('#lesson-summary').textContent = 'Ce chapitre ne figure pas dans le catalogue. Retourne à la page des branches pour choisir une leçon.';
} else {
  document.title = `${chapter.title} · Cours de physique`;
  lessonTitle.textContent = chapter.title;
  if (chapter.title.split(/\s+/).some((word) => word.length > 16)) {
    lessonTitle.classList.add('is-long-title');
  }
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
      const result = document.createElement('div');
      result.className = 'worked-result';
      addText(result, 'strong', '', equation.result);
      equationSection.append(result);
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
