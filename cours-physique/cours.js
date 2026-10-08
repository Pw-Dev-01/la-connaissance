// exercice corrigé et références éventuelles.

// Récupération de l’ID dans l’URL
const id = new URLSearchParams(location.search).get('id');

// 1) Chercher un cours principal
let course = window.courseCatalog.find(c => c.id === id);

// 2) Si rien trouvé → chercher dans les chapters
if (!course) {
  for (const branch of window.courseCatalog) {
    if (branch.chapters) {
      const found = branch.chapters.find(ch => ch.id === id);
      if (found) {
        course = found;
        break;
      }
    }
  }
};
// 1) Recherche d’un chapitre classique
let branch = window.courseCatalog.find((item) =>
  (item.chapters || []).some((chapter) => chapter.id === chapterId)
);

// 2) Recherche d’un cours approfondi (nouveau comportement corrigé)
let deepCourse = null;

if (!branch && chapterId) {
  deepCourse = window.courseCatalog.find((item) => {
    // Cas 1 : cours approfondi avec un ID direct (ex : grands-livres-physique)
    if (item.id === chapterId && !item.chapters) return true;

    // Cas 2 : cours approfondi avec sections (ex : cours de géologie)
    if (item.sections && item.sections.some((entry) => entry.anchor === chapterId)) {
      return true;
    }

    return false;
  });
}

// 3) Si c’est un cours approfondi → redirection vers sa page dédiée
if (deepCourse && deepCourse.href) {
  window.location.replace(`${deepCourse.href}#${encodeURIComponent(chapterId)}`);
  return;
}

// 4) Si c’est un cours approfondi SANS href (cas de ton cours “grands-livres-physique”)
if (deepCourse && !deepCourse.href) {
  // On affiche un sommaire automatique
  document.title = `${deepCourse.title} · Cours de physique`;
  document.querySelector('#lesson-title').textContent = deepCourse.title;
  document.querySelector('#lesson-summary').textContent = deepCourse.note;
  document.querySelector('#lesson-eyebrow').textContent = deepCourse.title.toUpperCase('fr-FR');
  document.querySelector('#lesson-field').textContent = 'COURS APPROFONDI';
  document.querySelector('#lesson-level').textContent = 'APPROFONDISSEMENT';

  const container = document.querySelector('#chapter-lesson');

  const intro = document.createElement('section');
  intro.className = 'lesson-section';
  intro.innerHTML = `
    <p class="section-index">01 / SOMMAIRE</p>
    <h2>Chapitres du cours</h2>
    <p>${deepCourse.note}</p>
  `;
  container.append(intro);

  const list = document.createElement('nav');
  list.className = 'chapter-nav';

  deepCourse.chapters.forEach((chapter) => {
    const link = document.createElement('a');
    link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
    link.textContent = chapter.title;
    list.append(link);
  });

  container.append(list);
  return;
}

// 5) Si aucun chapitre trouvé → erreur
const chapter = branch?.chapters?.find((item) => item.id === chapterId);

if (!branch || !chapter) {
  document.title = 'Leçon introuvable · Cours de physique';
  document.querySelector('#lesson-title').textContent = 'Leçon introuvable';
  document.querySelector('#lesson-summary').textContent =
    'Ce chapitre ne figure pas dans le catalogue. Retourne à la page des branches pour choisir une leçon.';
  return;
}

// 6) Affichage normal d’un chapitre classique
document.title = `${chapter.title} · Cours de physique`;
document.querySelector('#lesson-title').textContent = chapter.title;
document.querySelector('#lesson-summary').textContent = chapter.summary;
document.querySelector('#lesson-eyebrow').textContent =
  `${branch.title.toUpperCase('fr-FR')} · ${chapter.field}`;
document.querySelector('#lesson-field').textContent = chapter.field;
document.querySelector('#lesson-level').textContent = 'BASES → APPROFONDISSEMENT';

const levelLabel = document.querySelector('#lesson-level-label');
levelLabel.textContent = branch.title.toUpperCase('fr-FR');
levelLabel.href = `index.html#${branch.id}`;

document.querySelector('#lesson-footer').textContent =
  `${branch.title.toUpperCase('fr-FR')} · ${chapter.field.toUpperCase('fr-FR')}`;

// Navigation latérale
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

// Construction du contenu
const lessonContainer = document.querySelector('#chapter-lesson');

// SECTION 01 : COMPRENDRE
const theory = document.createElement('section');
theory.className = 'lesson-section';
theory.innerHTML = `
  <p class="section-index">01 / COMPRENDRE</p>
  <h2>Les notions essentielles</h2>
`;
chapter.lesson.sections.forEach((paragraph) => {
  const p = document.createElement('p');
  p.textContent = paragraph;
  theory.append(p);
});
lessonContainer.append(theory);

// SECTION 02 : EXEMPLE GUIDÉ
const example = document.createElement('section');
example.className = 'lesson-section';
example.innerHTML = `
  <p class="section-index">02 / EXEMPLE GUIDÉ</p>
  <h2>Méthode pas à pas</h2>
  <p>${chapter.lesson.example.statement}</p>
  <p>${chapter.lesson.example.calculation}</p>
`;
const result = document.createElement('div');
result.className = 'worked-result';
result.textContent = chapter.lesson.example.answer;
example.append(result);
lessonContainer.append(example);

// SECTION 03 : EXERCICE
const practice = document.createElement('section');
practice.className = 'lesson-section exercise-section';
practice.innerHTML = `
  <p class="section-index">03 / S’ENTRAÎNER</p>
  <h2>À toi de jouer</h2>
`;
const exercise = document.createElement('details');
exercise.className = 'exercise';
const summary = document.createElement('summary');
summary.innerHTML = `
  <span class="exercise-number">A</span>
  <span>${chapter.lesson.exercise.question}</span>
  <span class="reveal-label">Voir la correction</span>
`;
exercise.append(summary);
const answer = document.createElement('div');
answer.className = 'exercise-answer';
answer.textContent = chapter.lesson.exercise.answer;
exercise.append(answer);
exercise.addEventListener('toggle', () => {
  summary.querySelector('.reveal-label').textContent =
    exercise.open ? 'Masquer la correction' : 'Voir la correction';
});
practice.append(exercise);
lessonContainer.append(practice);

// SECTION 04 : RÉFÉRENCES
if (chapter.lesson.sources?.length) {
  const references = document.createElement('section');
  references.className = 'lesson-section';
  references.innerHTML = `
    <p class="section-index">04 / RÉFÉRENCES</p>
    <h2>Sources scientifiques</h2>
  `;
  chapter.lesson.sources.forEach((source) => {
    const p = document.createElement('p');
    const link = document.createElement('a');
    link.href = source.url;
    link.textContent = source.title;
    link.target = '_blank';
    link.rel = 'noreferrer';
    p.append(link);
    references.append(p);
  });
  lessonContainer.append(references);
}