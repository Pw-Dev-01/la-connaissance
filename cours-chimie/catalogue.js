const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const chapters = window.courseCatalog.flatMap((branch) => branch.chapters);
const deepCourses = window.courseCatalog.filter((branch) => branch.href);
const deepSections = window.courseCatalog.flatMap((branch) => branch.sections || []);
const deepCourseLabel = deepCourses.length === 1 ? 'COURS APPROFONDI' : 'COURS APPROFONDIS';

document.querySelector('#catalogue-count').textContent = `${window.courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES`;
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
    link.href = chapter.page || `cours.html?id=${encodeURIComponent(chapter.id)}`;
    link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
    link.querySelector('.chapter-title').textContent = chapter.title;
    link.querySelector('.chapter-field').textContent = chapter.page ? `${chapter.field} · COURS COMPLET` : chapter.field;
    chapterList.append(link);
  });

  section.append(chapterList);
  programmeSections.append(section);
});
