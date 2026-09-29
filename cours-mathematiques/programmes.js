const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const totalChapters = window.courseCatalog.reduce((total, programme) => total + programme.chapters.length, 0);

document.querySelector('#catalogue-count').textContent = `${totalChapters} INTITULÉS · ${window.courseCatalog.length} NIVEAUX`;

window.courseCatalog.forEach((programme, index) => {
  const levelLink = document.createElement('a');
  levelLink.href = `#${programme.id}`;
  levelLink.innerHTML = `<span>${index + 1}</span>${programme.title}`;
  levelNavigation.append(levelLink);

  const section = document.createElement('section');
  section.className = 'programme-section';
  section.id = programme.id;
  section.setAttribute('aria-labelledby', `${programme.id}-title`);

  const heading = document.createElement('div');
  heading.className = 'programme-section-heading';
  heading.innerHTML = `<h2 id="${programme.id}-title">${programme.title}</h2><span>${programme.chapters.length} CHAPITRES</span>`;
  section.append(heading);

  const note = document.createElement('p');
  note.className = 'programme-note';
  note.textContent = programme.note;
  section.append(note);

  const chapterList = document.createElement('div');
  chapterList.className = 'chapter-list';
  chapterList.setAttribute('aria-label', `Chapitres de ${programme.title}`);

  programme.chapters.forEach((chapter, index) => {
    const link = document.createElement('a');
    link.className = 'chapter-link';
    link.href = chapter.page || `cours.html?id=${encodeURIComponent(chapter.id)}`;
    link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
    link.querySelector('.chapter-title').textContent = chapter.title;
    link.querySelector('.chapter-field').textContent = chapter.field;
    chapterList.append(link);
  });

  section.append(chapterList);

  const source = document.createElement('p');
  source.className = 'programme-note';
  const sourceLink = document.createElement('a');
  sourceLink.href = programme.source;
  sourceLink.target = '_blank';
  sourceLink.rel = 'noreferrer';
  sourceLink.textContent = 'Texte de référence du programme ↗';
  source.append(sourceLink);
  section.append(source);

  programmeSections.append(section);
});
