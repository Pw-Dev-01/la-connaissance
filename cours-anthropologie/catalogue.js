const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const branches = window.courseCatalog;
const chapters = branches.flatMap((branch) => branch.chapters);

document.querySelector('#catalogue-count').textContent = `${branches.length} RUBRIQUES · ${chapters.length} CHAPITRES`;

branches.forEach((branch, branchIndex) => {
  const branchNumber = String(branchIndex + 1).padStart(2, '0');
  const branchLink = document.createElement('a');
  branchLink.href = `#${branch.id}`;
  branchLink.innerHTML = `<span>${branchNumber}</span>${branch.title}`;
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

  const note = document.createElement('p');
  note.className = 'programme-note';
  note.textContent = branch.note;
  section.append(note);

  const chapterList = document.createElement('div');
  chapterList.className = 'chapter-list';
  chapterList.setAttribute('aria-label', `Chapitres de ${branch.title}`);

  branch.chapters.forEach((chapter, chapterIndex) => {
    const link = document.createElement('a');
    link.className = 'chapter-link';
    link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
    link.innerHTML = '<span class="chapter-number"></span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>';
    link.querySelector('.chapter-number').textContent = String(chapterIndex + 1).padStart(2, '0');
    link.querySelector('.chapter-title').textContent = chapter.title;
    link.querySelector('.chapter-field').textContent = chapter.field;
    chapterList.append(link);
  });

  section.append(chapterList);
  programmeSections.append(section);
});

const navLinks = [...levelNavigation.querySelectorAll('a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const isCurrent = link.hash === `#${entry.target.id}`;
      link.classList.toggle('is-current', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-18% 0px -68% 0px' });

programmeSections.querySelectorAll('.programme-section').forEach((section) => sectionObserver.observe(section));