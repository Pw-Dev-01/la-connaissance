// Les données sont une liste plate de chapitres (window.paleontologyCatalog),
// chacun avec un champ « branch » qui l'associe à une rubrique.
const chapters = window.paleontologyCatalog || [];

// La clé doit être identique au champ « branch » des chapitres dans
// paleontologie-data.js. L'ordre ci-dessous fixe l'ordre d'affichage.
const rubricDetails = {
  archives: {
    title: 'Fossiles et archives',
    note: 'Reconnaître les types de fossiles et comprendre les conditions de leur conservation.'
  },
  'terrain-et-temps': {
    title: 'Terrain et temps',
    note: 'Relier chaque découverte à son contexte géologique et à la chronologie des couches.'
  },
  'histoire-vivant': {
    title: 'Histoire du vivant',
    note: 'Utiliser les fossiles pour étudier l’évolution, les milieux anciens et les changements de biodiversité.'
  },
  'grands-livres': {
    title: 'Les grands livres',
    note: 'Dix ouvrages de référence de la paléontologie, avec auteur, édition, date de parution et résumé.'
  }
};

const rubrics = Object.entries(rubricDetails)
  .map(([id, details]) => ({ id, ...details, chapters: chapters.filter((chapter) => chapter.branch === id) }))
  .filter((rubric) => rubric.chapters.length > 0);

const countLabel = `${rubrics.length} RUBRIQUES · ${chapters.length} CHAPITRES`;

const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const catalogueCount = document.querySelector('#catalogue-count');
const domainStatistics = document.querySelector('#domain-statistics');

if (catalogueCount) catalogueCount.textContent = countLabel;
if (domainStatistics) domainStatistics.textContent = countLabel;

if (!chapters.length || !rubrics.length) {
  const empty = document.createElement('p');
  empty.className = 'programme-note';
  empty.textContent = 'Aucun chapitre disponible pour le moment.';
  programmeSections.append(empty);
} else {
  rubrics.forEach((rubric, rubricIndex) => {
    const rubricNumber = String(rubricIndex + 1).padStart(2, '0');
    const levelLink = document.createElement('a');
    levelLink.href = `#${rubric.id}`;
    const levelOrder = document.createElement('span');
    levelOrder.textContent = rubricNumber;
    levelLink.append(levelOrder, document.createTextNode(rubric.title));
    levelNavigation.append(levelLink);

    const section = document.createElement('section');
    section.className = 'programme-section';
    section.id = rubric.id;
    section.setAttribute('aria-labelledby', `${rubric.id}-title`);

    const heading = document.createElement('div');
    heading.className = 'programme-section-heading';
    const title = document.createElement('h2');
    title.id = `${rubric.id}-title`;
    title.textContent = rubric.title;
    const count = document.createElement('span');
    count.textContent = `${String(rubric.chapters.length).padStart(2, '0')} CHAPITRES`;
    heading.append(title, count);
    section.append(heading);

    const note = document.createElement('p');
    note.className = 'programme-note';
    note.textContent = rubric.note;
    section.append(note);

    const chapterList = document.createElement('div');
    chapterList.className = 'chapter-list';
    chapterList.setAttribute('aria-label', `Chapitres de la rubrique ${rubric.title}`);

    rubric.chapters.forEach((chapter, chapterIndex) => {
      const link = document.createElement('a');
      link.className = 'chapter-link';
      link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
      link.innerHTML = '<span class="chapter-number"></span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>';
      link.querySelector('.chapter-number').textContent = String(chapterIndex + 1).padStart(2, '0');
      link.querySelector('.chapter-title').textContent = chapter.title;
      // Pour les grands livres, « field » est générique : on affiche plutôt auteur · année (summary).
      const detail = chapter.branch === 'grands-livres' ? (chapter.summary || chapter.field) : chapter.field;
      link.querySelector('.chapter-field').textContent = (detail || 'OUVRIR LE COURS').replace(/\.$/, '');
      chapterList.append(link);
    });

    section.append(chapterList);
    programmeSections.append(section);
  });

  // Surbrillance de la rubrique visible dans la navigation latérale.
  const navLinks = Array.from(levelNavigation.querySelectorAll('a'));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach((navLink) => {
          const isCurrent = navLink.hash === `#${entry.target.id}`;
          navLink.classList.toggle('is-current', isCurrent);
          if (isCurrent) {
            navLink.setAttribute('aria-current', 'location');
          } else {
            navLink.removeAttribute('aria-current');
          }
        });
      }
    },
    { rootMargin: '-18% 0px -68% 0px' }
  );
  programmeSections.querySelectorAll('.programme-section').forEach((section) => sectionObserver.observe(section));
}
