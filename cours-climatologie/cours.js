// Leçon de climatologie : notions, relation essentielle, équations détaillées,
// exemple guidé, exercices corrigés et sources. Même gabarit que les autres disciplines.
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

// Équations en MathML accessible ; repli sur l'affichage texte si le type est inconnu.
const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
const mathNode = (name, ...children) => {
  const element = document.createElementNS(MATHML_NAMESPACE, name);
  children.forEach((child) => element.append(child));
  return element;
};
const token = (name, value) => mathNode(name, value);
const mi = (value) => token('mi', value);
const mn = (value) => token('mn', value);
const mo = (value) => token('mo', value);
const mtext = (value) => token('mtext', value);
const row = (...children) => mathNode('mrow', ...children);
const fraction = (numerator, denominator) => mathNode('mfrac', numerator, denominator);
const superscript = (base, exponent) => mathNode('msup', base, exponent);
const subscript = (base, index) => mathNode('msub', base, index);
const expressionTable = (expressions) => mathNode(
  'mtable',
  ...expressions.map((expression) => mathNode('mtr', mathNode('mtd', expression)))
);

// Une entrée par valeur de formule.mathML / equationDetails[].mathML du catalogue.
const equationBuilders = {
  'equilibrium-temperature': {
    label: 'Température d émission égale la racine quatrième de S zéro fois un moins alpha, divisé par quatre sigma.',
    build: () => row(
      subscript(mi('T'), mi('e')), mo('='),
      superscript(
        row(mo('['), fraction(row(subscript(mi('S'), mn('0')), mo('('), mn('1'), mo('−'), mi('α'), mo(')')), row(mn('4'), mi('σ'))), mo(']')),
        fraction(mn('1'), mn('4'))
      )
    )
  },
  'stefan-boltzmann': {
    label: 'E égale sigma T puissance quatre.',
    build: () => row(mi('E'), mo('='), mi('σ'), superscript(mi('T'), mn('4')))
  },
  'coriolis-parameter': {
    label: 'f égale deux oméga sinus phi.',
    build: () => row(mi('f'), mo('='), mn('2'), mi('Ω'), mi('sin'), row(mo('('), mi('φ'), mo(')')))
  },
  'thermal-wind': {
    label: 'Dérivée partielle de u géostrophique par rapport à z égale moins g divisé par f T, multiplié par la dérivée partielle de T par rapport à y.',
    build: () => row(
      fraction(row(mo('∂'), subscript(mi('u'), mi('g'))), row(mo('∂'), mi('z'))), mo('='), mo('−'),
      fraction(mi('g'), row(mi('f'), mi('T'))),
      fraction(row(mo('∂'), mi('T')), row(mo('∂'), mi('y')))
    )
  },
  'layer-heating': {
    label: 'Delta T égale Q divisé par rho, c indice p, H.',
    build: () => row(mi('Δ'), mi('T'), mo('='), fraction(mi('Q'), row(mi('ρ'), subscript(mi('c'), mi('p')), mi('H'))))
  },
  'amoc-heat-transport': {
    label: 'F égale rho, c indice p, Q, delta T.',
    build: () => row(mi('F'), mo('='), mi('ρ'), subscript(mi('c'), mi('p')), mi('Q'), mi('Δ'), mi('T'))
  },
  'oni-index': {
    label: 'ONI égale la moyenne sur trois mois de l anomalie de température de surface de la mer dans la région Niño trois quatre.',
    build: () => row(
      mi('ONI'), mo('='),
      subscript(row(mo('⟨'), superscript(mi('SST'), mo('′')), mo('⟩')), row(mn('3'), mi('mois'))),
      mtext(' (Niño-3.4)')
    )
  },
  'co2-radiative-forcing': {
    label: 'Delta F égale cinq virgule trente-cinq, logarithme népérien de C divisé par C zéro.',
    build: () => row(mi('Δ'), mi('F'), mo('='), mn('5,35'), mi('ln'), row(mo('('), fraction(mi('C'), subscript(mi('C'), mn('0'))), mo(')')))
  },
  'log-forcing': {
    label: 'Delta F égale k, logarithme népérien de C divisé par C zéro.',
    build: () => row(mi('Δ'), mi('F'), mo('='), mi('k'), mi('ln'), row(mo('('), fraction(mi('C'), subscript(mi('C'), mn('0'))), mo(')')))
  },
  'rossby-number': {
    label: 'Nombre de Rossby égale U divisé par f L.',
    build: () => row(mi('Ro'), mo('='), fraction(mi('U'), row(mi('f'), mi('L'))))
  },
  'milankovitch-cycles': {
    label: 'Excentricité environ cent mille ans ; obliquité environ quarante et un mille ans ; précession environ vingt-trois mille ans.',
    build: () => expressionTable([
      row(mtext('Excentricité ≈ 100 000 ans')),
      row(mtext('Obliquité ≈ 41 000 ans')),
      row(mtext('Précession ≈ 23 000 ans'))
    ])
  }
};

const appendMathDisplay = (parent, text, mathMLType) => {
  const builder = equationBuilders[mathMLType];
  if (!builder) {
    addText(parent, 'span', 'math-display', text);
    return;
  }

  const equation = mathNode('math');
  equation.classList.add('mathml-display');
  equation.setAttribute('display', 'block');
  equation.setAttribute('aria-label', builder.label);
  equation.append(builder.build());
  parent.append(equation);
  addText(parent, 'span', 'math-display', text);
};

if (!branch || !chapter) {
  document.title = 'Leçon introuvable · Cours de climatologie';
  lessonTitle.textContent = 'Leçon introuvable';
  document.querySelector('#lesson-summary').textContent = 'Ce chapitre ne figure pas dans le catalogue. Retourne à la page des branches pour choisir une leçon.';
} else {
  document.title = `${chapter.title} · Cours de climatologie`;
  lessonTitle.textContent = chapter.title;
  if (chapter.title.split(/\s+/).some((word) => word.length > 16)) {
    lessonTitle.classList.add('is-long-title');
  }
  document.querySelector('#lesson-summary').textContent = chapter.summary;
  document.querySelector('#lesson-eyebrow').textContent = `${branch.title.toLocaleUpperCase('fr-FR')} · ${chapter.field}`;
  document.querySelector('#lesson-field').textContent = chapter.field;
  document.querySelector('#lesson-level').textContent = 'BASES → APPROFONDISSEMENT';
  // L'étiquette de domaine, au-dessus de la liste des chapitres, renvoie à la
  // section de cette branche dans le catalogue de climatologie.
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

