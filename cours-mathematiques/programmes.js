const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const chapters = window.courseCatalog.flatMap((programme) => programme.chapters || []);
const deepCourses = window.courseCatalog.filter((programme) => programme.href);
const deepSections = deepCourses.flatMap((programme) => programme.sections || []);
const deepCourseLabel = deepCourses.length === 1 ? 'COURS APPROFONDI' : 'COURS APPROFONDIS';
const statisticsSuffix = deepCourses.length ? ` · ${deepCourses.length} ${deepCourseLabel} · ${deepSections.length} SECTIONS` : '';

document.querySelector('#catalogue-count').textContent = `${chapters.length} INTITULÉS · ${window.courseCatalog.length} NIVEAUX${statisticsSuffix}`;
document.querySelector('#domain-statistics').textContent = `${window.courseCatalog.length} PROGRAMMES · ${chapters.length} CHAPITRES${statisticsSuffix}`;

window.courseCatalog.forEach((programme, index) => {
  const programmeChapters = programme.chapters || [];
  const programmeSections_ = programme.sections || [];
  const isDeepCourse = Boolean(programme.href);

  const levelLink = document.createElement('a');
  levelLink.href = `#${programme.id}`;
  levelLink.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${programme.title}`;
  levelNavigation.append(levelLink);

  const section = document.createElement('section');
  section.className = 'programme-section';
  section.id = programme.id;
  section.setAttribute('aria-labelledby', `${programme.id}-title`);

  const countLabel = isDeepCourse
    ? `${programmeChapters.length ? `${programmeChapters.length} CHAPITRES + ` : ''}1 COURS APPROFONDI · ${programmeSections_.length} SECTIONS`
    : `${programmeChapters.length} CHAPITRES`;

  const heading = document.createElement('div');
  heading.className = 'programme-section-heading';
  heading.innerHTML = `<h2 id="${programme.id}-title">${programme.title}</h2><span>${countLabel}</span>`;
  section.append(heading);

  const note = document.createElement('p');
  note.className = 'programme-note';
  note.textContent = programme.note;
  section.append(note);

  const chapterList = document.createElement('div');
  chapterList.className = 'chapter-list';
  chapterList.setAttribute('aria-label', isDeepCourse ? `Sections du cours approfondi ${programme.title}` : `Chapitres de ${programme.title}`);

  // Un cours approfondi s'inscrit dans le catalogue par ses sections : chaque
  // ligne renvoie à la page du cours, à l'ancre de la section. On ne répète
  // pas le titre de la rubrique, qui figure déjà dans l'en-tête ci-dessus.
  const entries = isDeepCourse
    ? programmeSections_.map((item) => ({
      href: `${programme.href}#${item.anchor}`,
      title: item.title,
      field: 'Cours approfondi'
    }))
    : programmeChapters.map((chapter) => ({
      href: chapter.page || `cours.html?id=${encodeURIComponent(chapter.id)}`,
      title: chapter.title,
      field: chapter.field
    }));

  entries.forEach((entry, entryIndex) => {
    const link = document.createElement('a');
    link.className = 'chapter-link';
    link.href = entry.href;
    link.innerHTML = `<span class="chapter-number">${String(entryIndex + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
    link.querySelector('.chapter-title').textContent = entry.title;
    link.querySelector('.chapter-field').textContent = entry.field;
    chapterList.append(link);
  });

  section.append(chapterList);

  if (programme.source) {
    const source = document.createElement('p');
    source.className = 'programme-note';
    const sourceLink = document.createElement('a');
    sourceLink.href = programme.source;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noreferrer';
    sourceLink.textContent = 'Texte de référence du programme ↗';
    source.append(sourceLink);
    section.append(source);
  }

  programmeSections.append(section);
});
