const catalog = window.courseCatalog || [];
const discipline = catalog.length === 1 && Array.isArray(catalog[0].chapters) ? catalog[0] : null;
const chapters = discipline
  ? discipline.chapters
  : catalog.flatMap((entry) => entry.chapters || []);
const deepCourses = catalog.filter((entry) => entry.href);
const deepSections = catalog.flatMap((entry) => entry.sections || []);
const deepCourseLabel = deepCourses.length === 1 ? 'COURS APPROFONDI' : 'COURS APPROFONDIS';

const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const catalogueCount = document.querySelector('#catalogue-count');

if (catalogueCount) {
  catalogueCount.textContent = `${chapters.length} CHAPITRES`;
}
document.querySelector('#domain-statistics').textContent = `${catalog.length} ${catalog.length === 1 ? 'BRANCHE' : 'BRANCHES'} · ${chapters.length} CHAPITRES${deepCourses.length ? ` · ${deepCourses.length} ${deepCourseLabel} · ${deepSections.length} SECTIONS` : ''}`;

if (!discipline || !chapters.length) {
  const empty = document.createElement('p');
  empty.className = 'programme-note';
  empty.textContent = 'Aucun chapitre disponible pour le moment.';
  programmeSections.append(empty);
} else {
  chapters.forEach((chapter, index) => {
    const number = String(index + 1).padStart(2, '0');

    const levelLink = document.createElement('a');
    levelLink.href = `#${chapter.id}`;
    const levelOrder = document.createElement('span');
    levelOrder.textContent = number;
    levelLink.append(levelOrder, document.createTextNode(chapter.title));
    levelNavigation.append(levelLink);

    const section = document.createElement('section');
    section.className = 'programme-section';
    section.id = chapter.id;
    section.setAttribute('aria-labelledby', `${chapter.id}-title`);

    const heading = document.createElement('div');
    heading.className = 'programme-section-heading';
    const title = document.createElement('h2');
    title.id = `${chapter.id}-title`;
    title.textContent = chapter.title;
    const field = document.createElement('span');
    field.textContent = (chapter.field || '').toLocaleUpperCase('fr-FR');
    heading.append(title, field);
    section.append(heading);

    const note = document.createElement('p');
    note.className = 'programme-note';
    note.textContent = chapter.summary;
    section.append(note);

    const chapterList = document.createElement('div');
    chapterList.className = 'chapter-list';
    chapterList.setAttribute('aria-label', `Ouvrir : ${chapter.title}`);

    const link = document.createElement('a');
    link.className = 'chapter-link';
    link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
    link.innerHTML = '<span class="chapter-number"></span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>';
    link.querySelector('.chapter-number').textContent = number;
    link.querySelector('.chapter-title').textContent = chapter.title;
    link.querySelector('.chapter-field').textContent = chapter.field || 'OUVRIR LE COURS';
    chapterList.append(link);

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

