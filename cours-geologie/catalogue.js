// Catalogue : navigation latérale + sections générées depuis geologie-data.js.
// Même structure que les autres disciplines (physique, chimie, économie).
// Une entrée peut être un « cours approfondi » rendu par une page dédiée : elle
// utilise alors « href » (la page) et « sections » (ses ancres) au lieu de
// « chapters ». Ces sections sont comptées et numérotées comme les chapitres.
const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const chapters = window.courseCatalog.flatMap((branch) => branch.chapters || branch.sections || []);
const deepCourses = window.courseCatalog.filter((branch) => branch.href);
const deepSections = window.courseCatalog.flatMap((branch) => branch.sections || []);
const deepCourseLabel = deepCourses.length === 1 ? 'COURS APPROFONDI' : 'COURS APPROFONDIS';

document.querySelector('#catalogue-count').textContent = `${window.courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES${deepCourses.length ? ` · ${deepCourses.length} COURS APPROFONDI` : ''}`;
document.querySelector('#domain-statistics').textContent = `${window.courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES${deepCourses.length ? ` · ${deepCourses.length} ${deepCourseLabel} · ${deepSections.length} SECTIONS` : ''}`;

window.courseCatalog.forEach((branch, branchIndex) => {
  const branchLink = document.createElement('a');
  branchLink.href = `#${branch.id}`;
  branchLink.innerHTML = `<span>${String(branchIndex + 1).padStart(2, '0')}</span>${branch.title}`;
  levelNavigation.append(branchLink);

  const section = document.createElement('section');
  section.className = 'programme-section';
  section.id = branch.id;
  section.setAttribute('aria-labelledby', `${branch.id}-title`);

  const heading = document.createElement('div');
  heading.className = 'programme-section-heading';
  heading.innerHTML = `<h2 id="${branch.id}-title"></h2><span>${(branch.chapters || branch.sections || []).length} ${branch.href ? 'SECTIONS' : 'CHAPITRES'}</span>`;
  heading.querySelector('h2').textContent = branch.title;
  section.append(heading);
  section.append(Object.assign(document.createElement('p'), { className: 'programme-note', textContent: branch.note }));

  const chapterList = document.createElement('div');
  chapterList.className = 'chapter-list';
  chapterList.setAttribute('aria-label', `${branch.href ? 'Sections' : 'Chapitres'} de ${branch.title}`);

  if (branch.href) {
    branch.sections.forEach((item, index) => {
      const link = document.createElement('a');
      link.className = 'chapter-link';
      link.href = `${branch.href}#${item.anchor}`;
      link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
      link.querySelector('.chapter-title').textContent = item.title;
      link.querySelector('.chapter-field').textContent = 'Cours approfondi';
      chapterList.append(link);
    });
  } else {
    branch.chapters.forEach((chapter, index) => {
      const link = document.createElement('a');
      link.className = 'chapter-link';
      link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
      link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
      link.querySelector('.chapter-title').textContent = chapter.title;
      link.querySelector('.chapter-field').textContent = chapter.field;
      chapterList.append(link);
    });
  }

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
        const isCurrent = navLink.hash === `#${entry.target.id}`;
        navLink.classList.toggle('is-current', isCurrent);
      });
    }
  },
  { rootMargin: '-18% 0px -68% 0px' }
);
programmeSections.querySelectorAll('.programme-section').forEach((section) => sectionObserver.observe(section));