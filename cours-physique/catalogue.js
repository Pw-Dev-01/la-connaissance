// Catalogue : navigation latérale + sections générées depuis physique-data.js.
// Même structure que les autres disciplines (géologie, chimie, économie).
// Une branche peut en plus proposer un « cours approfondi » rendu par une page
// dédiée : la propriété « href » donne la page et « sections » ses ancres. Ces
// sections sont alors numérotées à la suite des chapitres de la branche.
const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const chapters = window.courseCatalog.flatMap((branch) => branch.chapters || []);
const deepSections = window.courseCatalog.flatMap((branch) => branch.sections || []);
const deepCourses = window.courseCatalog.filter((branch) => branch.href);

document.querySelector('#catalogue-count').textContent =
  `${window.courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES${deepCourses.length ? ` · ${deepCourses.length} COURS APPROFONDI · ${deepSections.length} SECTIONS` : ''}`;

window.courseCatalog.forEach((branch, branchIndex) => {
  const branchChapters = branch.chapters || [];
  const branchSections = branch.sections || [];

  const branchLink = document.createElement('a');
  branchLink.href = `#${branch.id}`;
  branchLink.innerHTML = `<span>${String(branchIndex + 1).padStart(2, '0')}</span>${branch.title}`;
  levelNavigation.append(branchLink);

  const section = document.createElement('section');
  section.className = 'programme-section';
  section.id = branch.id;
  section.setAttribute('aria-labelledby', `${branch.id}-title`);

  const countLabel = branch.href
    ? `${branchChapters.length ? `${branchChapters.length} CHAPITRES + ` : ''}${branchSections.length} SECTIONS`
    : `${branchChapters.length} CHAPITRES`;

  const heading = document.createElement('div');
  heading.className = 'programme-section-heading';
  heading.innerHTML = `<h2 id="${branch.id}-title"></h2><span>${countLabel}</span>`;
  heading.querySelector('h2').textContent = branch.title;
  section.append(heading);
  section.append(Object.assign(document.createElement('p'), { className: 'programme-note', textContent: branch.note }));

  // Chapitres de la branche, puis sections du cours approfondi éventuel.
  const entries = [
    ...branchChapters.map((chapter) => ({
      href: `cours.html?id=${encodeURIComponent(chapter.id)}`,
      title: chapter.title,
      field: chapter.field
    })),
    ...branchSections.map((item) => ({
      href: `${branch.href}#${item.anchor}`,
      title: item.title,
      field: 'Cours approfondi'
    }))
  ];

  const chapterList = document.createElement('div');
  chapterList.className = 'chapter-list';
  chapterList.setAttribute('aria-label', `Chapitres et sections de ${branch.title}`);

  entries.forEach((entry, index) => {
    const link = document.createElement('a');
    link.className = 'chapter-link';
    link.href = entry.href;
    link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
    link.querySelector('.chapter-title').textContent = entry.title;
    link.querySelector('.chapter-field').textContent = entry.field;
    chapterList.append(link);
  });

  section.append(chapterList);
  programmeSections.append(section);
});
