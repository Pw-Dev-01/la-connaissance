// Catalogue : navigation latérale + sections générées depuis paleontology-data.js
// (window.paleontologyCatalog, liste plate de leçons avec un champ « branch »).
// Les leçons sont regroupées par branche dans l'ordre de première apparition.
const BRANCH_META = {
  'archives': {
    title: 'Les archives fossiles',
    note: 'Ce que sont les fossiles, comment ils se forment et ce que le registre fossile permet (ou non) de conclure.'
  },
  'terrain-et-temps': {
    title: 'Terrain et temps',
    note: 'Documenter les découvertes, ordonner les couches et situer les fossiles dans le temps géologique.'
  },
  'histoire-vivant': {
    title: 'Histoire du vivant',
    note: 'Évolution, milieux anciens, biodiversité et extinctions lus à travers les fossiles.'
  },
  'outils': {
    title: 'Outils et méthodes',
    note: 'Du terrain au laboratoire : découvrir, préparer, observer et documenter les fossiles.'
  },
  'grands-livres': {
    title: 'Les grands livres',
    note: 'Dix ouvrages qui ont marqué la paléontologie, présentés sous forme de fiches.'
  }
};

const lessons = (window.paleontologyCatalog || []).filter((lesson) => lesson && lesson.id && lesson.branch);

// Regroupement par branche.
const courseCatalog = [];
lessons.forEach((lesson) => {
  let branch = courseCatalog.find((item) => item.id === lesson.branch);
  if (!branch) {
    const meta = BRANCH_META[lesson.branch] || {};
    branch = {
      id: lesson.branch,
      title: meta.title || lesson.branch,
      note: meta.note || '',
      chapters: []
    };
    courseCatalog.push(branch);
  }
  branch.chapters.push({ id: lesson.id, title: lesson.title, field: lesson.field || '' });
});

const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const chapterCount = courseCatalog.reduce((total, branch) => total + branch.chapters.length, 0);

const countLabel = `${courseCatalog.length} BRANCHES · ${chapterCount} CHAPITRES`;
const countElement = document.querySelector('#catalogue-count');
const statsElement = document.querySelector('#domain-statistics');
if (countElement) countElement.textContent = countLabel;
if (statsElement) statsElement.textContent = countLabel;

courseCatalog.forEach((branch, branchIndex) => {
  const branchLink = document.createElement('a');
  branchLink.href = `#${branch.id}`;
  branchLink.innerHTML = `<span>${String(branchIndex + 1).padStart(2, '0')}</span>`;
  branchLink.append(document.createTextNode(branch.title));
  levelNavigation.append(branchLink);

  const section = document.createElement('section');
  section.className = 'programme-section';
  section.id = branch.id;
  section.setAttribute('aria-labelledby', `${branch.id}-title`);

  const heading = document.createElement('div');
  heading.className = 'programme-section-heading';
  heading.innerHTML = `<h2 id="${branch.id}-title"></h2><span>${branch.chapters.length} CHAPITRES</span>`;
  heading.querySelector('h2').textContent = branch.title;
  section.append(heading);
  section.append(Object.assign(document.createElement('p'), { className: 'programme-note', textContent: branch.note }));

  const chapterList = document.createElement('div');
  chapterList.className = 'chapter-list';
  chapterList.setAttribute('aria-label', `Chapitres de ${branch.title}`);

  branch.chapters.forEach((chapter, index) => {
    const link = document.createElement('a');
    link.className = 'chapter-link';
    link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
    link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
    link.querySelector('.chapter-title').textContent = chapter.title;
    link.querySelector('.chapter-field').textContent = chapter.field;
    chapterList.append(link);
  });

  section.append(chapterList);
  programmeSections.append(section);
});

// Surbrillance de la branche visible dans la navigation latérale.
const navLinks = Array.from(levelNavigation.querySelectorAll('a'));
const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((navLink) => {
        navLink.classList.toggle('is-current', navLink.hash === `#${entry.target.id}`);
      });
    }
  },
  { rootMargin: '-18% 0px -68% 0px' }
);
programmeSections.querySelectorAll('.programme-section').forEach((section) => sectionObserver.observe(section));
