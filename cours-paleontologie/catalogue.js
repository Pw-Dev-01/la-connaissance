const catalog = window.courseCatalog || [];
const dataChapters = catalog.flatMap((entry) => entry.chapters || []);

// Rubriques : la clé doit être identique au champ « branch » des chapitres
// dans paleontologie-data.js. L'ordre ci-dessous fixe l'ordre d'affichage.
// « fallback » n'est utilisé que si aucun chapitre du fichier de données
// ne porte ce « branch » (id, titre, sous-titre).
const rubricDetails = {
  archives: {
    title: 'Fossiles et archives',
    note: 'Reconnaître les types de fossiles et comprendre les conditions de leur conservation.',
    fallback: [
      ['discipline', 'La discipline et ses archives', 'Introduction'],
      ['types', 'Les catégories de fossiles', 'Fossiles corporels et traces'],
      ['fossilisation', 'La fossilisation et ses biais', 'Conservation']
    ]
  },
  'terrain-et-temps': {
    title: 'Terrain et temps',
    note: 'Relier chaque découverte à son contexte géologique et à la chronologie des couches.',
    fallback: [
      ['terrain', 'Du terrain à la collection', 'Méthodes de terrain'],
      ['stratigraphie', 'Stratigraphie et corrélations', 'Datation relative'],
      ['datation', 'Datations et échelles de temps', 'Datation numérique']
    ]
  },
  'histoire-vivant': {
    title: 'Histoire du vivant',
    note: 'Utiliser les fossiles pour étudier l’évolution, les milieux anciens et les changements de biodiversité.',
    fallback: [
      ['evolution', 'Fossiles et évolution', 'Parentés et caractères'],
      ['paleoenvironnements', 'Paléoécologie', 'Milieux anciens'],
      ['biodiversite', 'Biodiversité et extinctions', 'Registre fossile']
    ]
  },
  'grands-livres': {
    title: 'Les grands livres',
    note: 'Dix ouvrages de référence de la paléontologie, avec auteur, édition, date de parution et résumé.',
    fallback: [
      ['cuvier-ossemens-fossiles', 'Recherches sur les ossemens fossiles de quadrupèdes', 'Georges Cuvier · 1812'],
      ['darwin-origine-des-especes', 'On the Origin of Species', 'Charles Darwin · 1859'],
      ['simpson-tempo-and-mode', 'Tempo and Mode in Evolution', 'George Gaylord Simpson · 1944'],
      ['gould-wonderful-life', 'Wonderful Life: The Burgess Shale and the Nature of History', 'Stephen Jay Gould · 1989'],
      ['benton-vertebrate-palaeontology', 'Vertebrate Palaeontology', 'Michael J. Benton · 1990'],
      ['alvarez-t-rex-crater-of-doom', 'T. rex and the Crater of Doom', 'Walter Alvarez · 1997'],
      ['fortey-trilobite', 'Trilobite! Eyewitness to Evolution', 'Richard Fortey · 2000'],
      ['benton-when-life-nearly-died', 'When Life Nearly Died: The Greatest Mass Extinction of All Time', 'Michael J. Benton · 2003'],
      ['rudwick-bursting-the-limits-of-time', 'Bursting the Limits of Time', 'Martin J. S. Rudwick · 2005'],
      ['shubin-your-inner-fish', 'Your Inner Fish', 'Neil Shubin · 2008']
    ]
  }
};

const rubrics = Object.entries(rubricDetails)
  .map(([id, details]) => {
    let list = dataChapters.filter((chapter) => chapter.branch === id);
    if (!list.length) {
      list = details.fallback.map(([chapterId, title, field]) => ({ id: chapterId, title, field }));
    }
    return { id, title: details.title, note: details.note, chapters: list };
  })
  .filter((rubric) => rubric.chapters.length > 0);

const totalChapters = rubrics.reduce((sum, rubric) => sum + rubric.chapters.length, 0);
const countLabel = `${rubrics.length} RUBRIQUES · ${totalChapters} CHAPITRES`;

const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const catalogueCount = document.querySelector('#catalogue-count');
const domainStatistics = document.querySelector('#domain-statistics');

if (catalogueCount) catalogueCount.textContent = countLabel;
if (domainStatistics) domainStatistics.textContent = countLabel;

if (!rubrics.length) {
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
      link.querySelector('.chapter-field').textContent = chapter.field || 'OUVRIR LE COURS';
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
