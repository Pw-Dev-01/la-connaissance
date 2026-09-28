const chapterId = new URLSearchParams(window.location.search).get('id');
const programme = window.courseCatalog.find((item) => item.chapters.some((chapter) => chapter.id === chapterId));
const chapter = programme?.chapters.find((item) => item.id === chapterId);

const titleElement = document.querySelector('#lesson-title');
const notFound = !programme || !chapter;

const createTextElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
};

const renderDetailedLesson = (lesson) => {
  const container = document.querySelector('#chapter-lesson');
  container.hidden = false;

  const theory = document.createElement('section');
  theory.className = 'lesson-section';
  theory.append(
    createTextElement('p', 'section-index', '01 / COMPRENDRE'),
    createTextElement('h2', '', 'Les notions essentielles')
  );
  lesson.sections.forEach((paragraph) => theory.append(createTextElement('p', '', paragraph)));
  container.append(theory);

  if (lesson.formula) {
    const formula = document.createElement('div');
    formula.className = 'formula-block formula-accent';
    formula.append(
      createTextElement('span', 'formula-label', lesson.formula.label),
      createTextElement('span', 'math-display', lesson.formula.text)
    );
    theory.append(formula);
  }

  const example = document.createElement('section');
  example.className = 'lesson-section';
  example.append(
    createTextElement('p', 'section-index', '02 / EXEMPLE GUIDÉ'),
    createTextElement('h2', '', 'Méthode pas à pas'),
    createTextElement('p', '', lesson.example.statement),
    createTextElement('p', '', lesson.example.calculation)
  );
  const result = document.createElement('div');
  result.className = 'worked-result';
  result.append(createTextElement('strong', '', lesson.example.answer));
  example.append(result);
  container.append(example);

  const practice = document.createElement('section');
  practice.className = 'lesson-section exercise-section';
  practice.append(
    createTextElement('p', 'section-index', '03 / S’ENTRAÎNER'),
    createTextElement('h2', '', 'À toi de jouer')
  );
  const exercise = document.createElement('details');
  exercise.className = 'exercise';
  const summary = document.createElement('summary');
  summary.append(
    createTextElement('span', 'exercise-number', 'A'),
    createTextElement('span', '', lesson.exercise.question),
    createTextElement('span', 'reveal-label', 'Voir la correction')
  );
  const answer = document.createElement('div');
  answer.className = 'exercise-answer';
  answer.append(createTextElement('p', '', lesson.exercise.answer));
  exercise.append(summary, answer);
  exercise.addEventListener('toggle', () => {
    summary.querySelector('.reveal-label').textContent = exercise.open ? 'Masquer la correction' : 'Voir la correction';
  });
  practice.append(exercise);
  container.append(practice);
};

if (notFound) {
  document.title = 'Cours introuvable | Cours de mathématiques';
  titleElement.textContent = 'Cours introuvable';
  document.querySelector('#lesson-summary').textContent = 'Ce chapitre ne figure pas dans le catalogue. Retourne aux programmes pour choisir un cours disponible.';
  document.querySelector('#lesson-main-point').textContent = 'Le lien demandé ne correspond à aucun chapitre connu.';
  document.querySelector('#lesson-prerequisite').textContent = 'Ouvre le catalogue et sélectionne un titre dans la liste.';
  document.querySelector('#lesson-method').remove();
  document.querySelector('#lesson-field').textContent = '';
  document.querySelector('#lesson-level').textContent = '';
} else {
  document.title = `${chapter.title} | Cours de mathématiques`;
  titleElement.textContent = chapter.title;
  document.querySelector('#lesson-eyebrow').textContent = `${programme.title.toLocaleUpperCase('fr-FR')} · ${chapter.field || 'MATHÉMATIQUES'}`;
  document.querySelector('#lesson-summary').textContent = chapter.summary;
  document.querySelector('#lesson-field').textContent = chapter.field || 'MATHÉMATIQUES';
  document.querySelector('#lesson-level').textContent = programme.title.toLocaleUpperCase('fr-FR');
  if (chapter.lesson) {
    document.querySelector('#lesson-generic').hidden = true;
    renderDetailedLesson(chapter.lesson);
  }
  const field = chapter.field || '';
  const fieldGuidance = field.includes('Probabilités')
    ? 'Décris d’abord l’expérience aléatoire et son univers. Distingue les événements, les données et la loi recherchée avant de calculer.'
    : field.includes('Géométrie')
      ? 'Fais un schéma, fixe un repère si nécessaire, puis traduis les propriétés géométriques avec les outils adaptés au chapitre.'
      : field.includes('Analyse')
        ? 'Précise le domaine de définition et les hypothèses. Choisis ensuite le théorème ou l’outil de calcul adapté et interprète le résultat.'
        : field.includes('Algèbre linéaire')
          ? 'Identifie les espaces, les applications et les bases utilisés. Vérifie les hypothèses avant d’appliquer un résultat de dimension ou de réduction.'
          : 'Repère les objets et les hypothèses, annonce la propriété utilisée, puis vérifie chaque transformation du calcul.';
  document.querySelector('#lesson-main-point').textContent = fieldGuidance;
  document.querySelector('#lesson-prerequisite').textContent = programme.id.includes('mpsi') || programme.id.includes('mp') || programme.id.includes('pcsi') || programme.id === 'pc' || programme.id === 'psi'
    ? `Rappelle les définitions du lycée liées à « ${chapter.title} », puis précise les hypothèses des résultats employés.`
    : `Avant les exercices sur « ${chapter.title} », vérifie les définitions, les notations et les calculs de base associés au chapitre.`;
  document.querySelector('#lesson-level-label').textContent = programme.id.toLocaleUpperCase('fr-FR');
  document.querySelector('#lesson-footer').textContent = `${programme.title.toLocaleUpperCase('fr-FR')} · ${chapter.field || 'MATHÉMATIQUES'}`;
  const sourceLink = document.querySelector('#lesson-source');
  if (programme.source) {
    sourceLink.href = programme.source;
    sourceLink.hidden = false;
  }

  const navigation = document.querySelector('#lesson-chapter-nav');
  programme.chapters.forEach((sibling) => {
    const link = document.createElement('a');
    link.href = sibling.page || `cours.html?id=${encodeURIComponent(sibling.id)}`;
    link.textContent = sibling.title;
    if (sibling.id === chapter.id) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('is-active');
    }
    navigation.append(link);
  });

  const methodItems = field.includes('Probabilités')
    ? ['Définis l’univers et les événements.', 'Choisis la formule ou la loi adaptée.', 'Vérifie que le résultat est cohérent avec les probabilités possibles.']
    : field.includes('Géométrie')
      ? ['Traduis l’énoncé par un schéma ou un repère.', 'Écris les relations vectorielles ou métriques utiles.', 'Interprète le résultat dans la figure de départ.']
      : field.includes('Analyse')
        ? ['Précise le domaine et le point ou l’intervalle étudié.', 'Vérifie les hypothèses, puis applique le théorème adapté.', 'Conclue sur le comportement ou les variations de la fonction.']
        : ['Identifie les objets et les hypothèses.', 'Applique une définition ou un résultat en justifiant les étapes.', 'Vérifie le calcul et formule une conclusion complète.'];

  const methodList = document.querySelector('#lesson-method');
  methodItems.forEach((text) => {
    const item = document.createElement('li');
    const title = document.createElement('strong');
    title.textContent = text;
    item.append(title);
    methodList.append(item);
  });
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
