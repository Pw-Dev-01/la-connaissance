const catalog = window.courseCatalog || [];
const chapters = catalog.flatMap((entry) => entry.chapters || []);
const rubricDetails = {
  microeconomie: { title: 'Microéconomie', note: 'Choix individuels, marchés et réactions des quantités.' },
  macroeconomie: { title: 'Macroéconomie', note: 'Production, prix et activité à l’échelle d’une économie.' },
  'grands-economistes': { title: 'Les grands économistes', note: 'Une sélection de penseurs et de contributions qui ont marqué l’histoire de la pensée économique. Cette sélection n’est pas exhaustive.' },
  'grands-ouvrages': { title: 'Les grands livres de l’économie', note: 'Dix ouvrages de référence de la pensée économique, présentés par leur fiche bibliographique vérifiée. Cette sélection n’est pas exhaustive.' }
};
const rubrics = Object.entries(rubricDetails)
  .map(([id, details]) => ({ id, ...details, chapters: chapters.filter((chapter) => chapter.branch === id) }))
  .filter((rubric) => rubric.chapters.length > 0);

const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const catalogueCount = document.querySelector('#catalogue-count');

if (catalogueCount) {
  catalogueCount.textContent = `${rubrics.length} RUBRIQUES · ${chapters.length} CHAPITRES`;
}
document.querySelector('#domain-statistics').textContent = `${rubrics.length} RUBRIQUES · ${chapters.length} CHAPITRES`;

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
    count.textContent = `${rubric.chapters.length} CHAPITRES`;
    heading.append(title, count);
    section.append(heading);

    const note = document.createElement('p');
    note.className = 'programme-note';
    note.textContent = rubric.note;
    section.append(note);

    const chapterList = document.createElement('div');
    chapterList.className = 'chapter-list';
    chapterList.setAttribute('aria-label', `Chapitres de ${rubric.title}`);

    rubric.chapters.forEach((chapter, chapterIndex) => {
      const link = document.createElement('a');
      link.className = 'chapter-link';
      link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
      link.innerHTML = '<span class="chapter-number"></span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>';
      link.querySelector('.chapter-number').textContent = String(chapterIndex + 1).padStart(2, '0');
      link.querySelector('.chapter-title').textContent = chapter.title;
      link.querySelector('.chapter-field').textContent = chapter.field || 'OUVRIR LE COURS';
      chapterList.append(link);
    });

    section.append(chapterList);
    programmeSections.append(section);
  });

  // Surbrillance de la section visible dans la navigation latérale.
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
