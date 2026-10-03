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
// Cours approfondis rattachés via « deepCourses » (tableau de pages par branche).
const extraDeepPages = window.courseCatalog.flatMap((branch) => (Array.isArray(branch.deepCourses) ? branch.deepCourses : []));
const extraDeepSections = extraDeepPages.flatMap((page) => page.sections || []);
const allDeepCoursesCount = deepCourses.length + extraDeepPages.length;
const allDeepSectionsCount = deepSections.length + extraDeepSections.length;
const deepCourseLabel = allDeepCoursesCount === 1 ? 'COURS APPROFONDI' : 'COURS APPROFONDIS';

document.querySelector('#catalogue-count').textContent =
  `${window.courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES${allDeepCoursesCount ? ` · ${allDeepCoursesCount} ${deepCourseLabel} · ${allDeepSectionsCount} SECTIONS` : ''}`;
document.querySelector('#domain-statistics').textContent = `${window.courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES · ${allDeepCoursesCount} ${deepCourseLabel} · ${allDeepSectionsCount} SECTIONS`;

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

  // Chapitres de la branche, puis sections des cours approfondis éventuels.
  // Une branche peut aussi regrouper plusieurs cours approfondis : propriété
  // « deepCourses » (tableau de pages), chacun avec ses propres ancres.
  const deepCoursePages = Array.isArray(branch.deepCourses)
    ? branch.deepCourses
    : (branch.href ? [{ title: branch.title, href: branch.href, sections: branch.sections || [] }] : []);
  const deepSectionsCount = deepCoursePages.reduce((total, page) => total + (page.sections || []).length, 0);

  if (deepCoursePages.length === 1) {
    heading.querySelector('span').textContent =
      `${branchChapters.length ? `${branchChapters.length} CHAPITRES + ` : ''}1 COURS APPROFONDI · ${deepSectionsCount} SECTIONS`;
  } else if (deepCoursePages.length > 1) {
    heading.querySelector('span').textContent =
      `${branchChapters.length ? `${branchChapters.length} CHAPITRES + ` : ''}${deepCoursePages.length} COURS APPROFONDIS · ${deepSectionsCount} SECTIONS`;
  }

  // Chapitres de la branche, puis les cours approfondis rattachés.
  // Deux cas, sans jamais doubler les mêmes lignes :
  //  — la branche porte elle-même « href » + « sections » : le cours approfondi
  //    EST la branche, ses sections sont déjà listées par « branchSections » ;
  //  — la branche possède « deepCourses » (tableau de pages) : chaque cours
  //    n'apparaît qu'UNE seule fois dans le catalogue, comme un simple lien vers
  //    sa page ; ses sections restent listées dans le menu de gauche de cette
  //    page, où elles sont numérotées.
  const attachedDeepEntries = Array.isArray(branch.deepCourses)
    ? branch.deepCourses.map((page) => ({
      // Le cours approfondi apparaît comme un lien vers sa page, sous son propre
      // titre (et non sous le titre de sa première section) : c'est ce titre qui
      // identifie la page dans le catalogue.
      href: page.href,
      title: page.title || 'Cours approfondi',
      field: 'Cours approfondi'
    }))
    : [];

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
    })),
    ...attachedDeepEntries
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
