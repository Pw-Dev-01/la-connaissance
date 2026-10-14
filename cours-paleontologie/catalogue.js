// Catalogue COMMUN à toutes les disciplines : ne plus le modifier.
// Lit window.courseCatalog (défini par le data de la discipline) et génère :
//  - un bandeau « Les branches » bien visible (cartes cliquables) ;
//  - la navigation latérale ;
//  - les sections de chapitres.
// Une entrée peut être un « cours approfondi » rendu par une page dédiée : elle
// utilise alors « href » (la page) et « sections » (ses ancres) au lieu de
// « chapters ». Ces sections sont comptées et numérotées comme les chapitres.
(function () {
const courseCatalog = (window.courseCatalog || []).filter(Boolean);
if (!courseCatalog.length) console.error('catalogue.js : window.courseCatalog est vide ou absent. Le fichier data est-il chargé avant catalogue.js ?');

const levelNavigation = document.querySelector('#catalogue-levels');
const programmeSections = document.querySelector('#programme-sections');
const chapters = courseCatalog.flatMap((branch) => branch.chapters || branch.sections || []);
const deepCourses = courseCatalog.filter((branch) => branch.href);
const deepSections = courseCatalog.flatMap((branch) => branch.sections || []);
const deepCourseLabel = deepCourses.length === 1 ? 'COURS APPROFONDI' : 'COURS APPROFONDIS';

const countText = `${courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES${deepCourses.length ? ` · ${deepCourses.length} COURS APPROFONDI` : ''}`;
const statsText = `${courseCatalog.length} BRANCHES · ${chapters.length} CHAPITRES${deepCourses.length ? ` · ${deepCourses.length} ${deepCourseLabel} · ${deepSections.length} SECTIONS` : ''}`;
const countNode = document.querySelector('#catalogue-count');
const statsNode = document.querySelector('#domain-statistics');
if (countNode) countNode.textContent = countText;
if (statsNode) statsNode.textContent = statsText;

// Style injecté ici : pas besoin de modifier styles.css.
const catalogueStyle = document.createElement('style');
catalogueStyle.textContent = `
  .branch-overview { margin: 0 0 2.5rem; }
  .branch-overview-title { margin: 0 0 .9rem; font-size: .78rem; font-weight: 700;
    letter-spacing: .14em; text-transform: uppercase; opacity: .7; }
  .branch-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: .75rem; }
  .branch-card { display: flex; flex-direction: column; gap: .4rem; padding: 1rem 1.05rem;
    border: 1.5px solid rgba(23, 33, 27, .22); background: rgba(255, 255, 255, .55);
    color: inherit; text-decoration: none; transition: border-color .15s, transform .15s; }
  .branch-card:hover, .branch-card:focus-visible { border-color: var(--accent, #ef7455); transform: translateY(-2px); }
  .branch-card-number { font-size: .8rem; font-weight: 700; letter-spacing: .12em; color: var(--accent, #ef7455); }
  .branch-card-title { font-size: 1.05rem; font-weight: 700; line-height: 1.25; }
  .branch-card-count { font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; opacity: .65; }
  .programme-section { scroll-margin-top: 1rem; }
  .programme-section-heading { border-top: 3px solid var(--accent, #ef7455); padding-top: 1rem; }
  .programme-section-heading h2 { margin: 0; line-height: 1.15; }
  .programme-section-heading h2 .branch-number { display: block; margin: 0 0 .45rem;
    font-family: inherit; font-size: .85rem; font-weight: 700; letter-spacing: .14em;
    text-transform: none; font-style: normal; color: var(--accent, #ef7455); }
  .programme-section-heading h2 .branch-name { display: block;
    font-size: clamp(1.7rem, 6.5vw, 2.25rem); font-weight: 400; line-height: 1.15;
    letter-spacing: normal; text-transform: none; font-style: normal; color: #17211b; }
`;
document.head.append(catalogueStyle);

function chapterCount(branch) {
  return (branch.chapters || branch.sections || []).length;
}

// Bandeau « Les branches » : un conteneur #branch-overview peut exister dans la page ;
// sinon il est créé juste avant la liste des sections.
if (programmeSections && courseCatalog.length) {
  let overview = document.querySelector('#branch-overview');
  if (!overview) {
    overview = document.createElement('nav');
    overview.id = 'branch-overview';
    programmeSections.before(overview);
  }
  overview.className = 'branch-overview';
  overview.setAttribute('aria-label', 'Branches du cours');
  overview.append(Object.assign(document.createElement('p'), { className: 'branch-overview-title', textContent: 'Les branches' }));

  const grid = document.createElement('div');
  grid.className = 'branch-grid';
  courseCatalog.forEach((branch, index) => {
    const card = document.createElement('a');
    card.className = 'branch-card';
    card.href = `#${branch.id}`;
    card.innerHTML = '<span class="branch-card-number"></span><span class="branch-card-title"></span><span class="branch-card-count"></span>';
    card.querySelector('.branch-card-number').textContent = String(index + 1).padStart(2, '0');
    card.querySelector('.branch-card-title').textContent = branch.title;
    const total = chapterCount(branch);
    card.querySelector('.branch-card-count').textContent = `${total} ${branch.href ? 'section' : 'chapitre'}${total > 1 ? 's' : ''}`;
    grid.append(card);
  });
  overview.append(grid);
}

courseCatalog.forEach((branch, branchIndex) => {
  if (levelNavigation) {
    const branchLink = document.createElement('a');
    branchLink.href = `#${branch.id}`;
    branchLink.innerHTML = `<span>${String(branchIndex + 1).padStart(2, '0')}</span>`;
    branchLink.append(document.createTextNode(branch.title));
    levelNavigation.append(branchLink);
  }

  const section = document.createElement('section');
  section.className = 'programme-section';
  section.id = branch.id;
  section.setAttribute('aria-labelledby', `${branch.id}-title`);

  const heading = document.createElement('div');
  heading.className = 'programme-section-heading';
  heading.innerHTML = `<h2 id="${branch.id}-title"><span class="branch-number"></span><span class="branch-name"></span></h2><span>${chapterCount(branch)} ${branch.href ? 'SECTIONS' : 'CHAPITRES'}</span>`;
  heading.querySelector('.branch-number').textContent = String(branchIndex + 1).padStart(2, '0');
  heading.querySelector('.branch-name').textContent = branch.title;
  section.append(heading);
  section.append(Object.assign(document.createElement('p'), { className: 'programme-note', textContent: branch.note || '' }));

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
    (branch.chapters || []).forEach((chapter, index) => {
      const link = document.createElement('a');
      link.className = 'chapter-link';
      link.href = `cours.html?id=${encodeURIComponent(chapter.id)}`;
      link.innerHTML = `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><span class="chapter-title"></span><span class="chapter-field"></span><span class="chapter-arrow" aria-hidden="true">↗</span>`;
      link.querySelector('.chapter-title').textContent = chapter.title;
      link.querySelector('.chapter-field').textContent = chapter.field || '';
      chapterList.append(link);
    });
  }

  section.append(chapterList);
  if (programmeSections) programmeSections.append(section);
});

// Surbrillance de la branche visible dans la navigation latérale.
if (levelNavigation && programmeSections) {
  const navLinks = Array.from(levelNavigation.querySelectorAll('a'));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach((navLink) => {
          navLink.classList.toggle('is-current', navLink.hash === `#${entry.target.id}`);
        });
      }
    },
    { rootMargin: '-18% 0px -68% 0px' }
  );
  programmeSections.querySelectorAll('.programme-section').forEach((section) => sectionObserver.observe(section));
}
})();
