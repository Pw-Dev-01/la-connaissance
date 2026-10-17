
 // Catalogue COMMUN à toutes les disciplines.
 // Lit window.courseCatalog (défini par le data de la discipline) et génère :
 //  - un bandeau « Les branches » bien visible (cartes cliquables) ;
 //  - la navigation latérale ;
 //  - les sections de chapitres.
//
// Formats d'une branche, tous compatibles :
//  1. « chapters » seul : chapitres affichés dans cours.html?id=… ;
//  2. « href » + « sections » sans chapitres : cours approfondi rendu par une page
//     dédiée, ses sections sont listées (ancien format, inchangé) ;
//  3. « chapters » + « href » + « sections » : les chapitres, puis les sections du
//     cours approfondi numérotées à la suite (ex. physique quantique) ;
//  4. « deepCourses » : liste de cours approfondis rattachés à la branche, affichés
//     après les chapitres. Chaque cours { title, href, sections, expand? } apparaît
//     comme UNE entrée (son titre) ; avec « expand: true », ses sections sont
//     listées et numérotées à la suite des chapitres (ex. thermodynamique).

(function () {
  const courseCatalog = (window.courseCatalog || []).filter(Boolean);

  // Tri chronologique des branches à partir de sortYear.
  // Le catalogue d'origine n'est pas modifié.
  const catalogChrono = [...courseCatalog].sort((a, b) => {
  const yearA = a.sortYear;
  const yearB = b.sortYear;

  const validA = typeof yearA === 'number' && Number.isFinite(yearA);
  const validB = typeof yearB === 'number' && Number.isFinite(yearB);

  if (validA && validB) return yearA - yearB;
  if (validA) return -1;
  if (validB) return 1;

  return 0;
});

  if (!catalogChrono.length) {
    console.error(
      'catalogue.js : window.courseCatalog est vide ou absent. Le fichier data est-il chargé avant catalogue.js ?'
    );
  }

  const levelNavigation = document.querySelector('#catalogue-levels');
  const programmeSections = document.querySelector('#programme-sections');

  // Liste des entrées affichées pour une branche, dans l'ordre.
  function branchEntries(branch) {
    const entries = [];

    (branch.chapters || []).forEach((chapter) => {
      entries.push({
        title: chapter.title,
        field: chapter.field || '',
        href: `cours.html?id=${encodeURIComponent(chapter.id)}`
      });
    });

    if (branch.href && Array.isArray(branch.sections)) {
      branch.sections.forEach((item) => {
        entries.push({
          title: item.title,
          field: 'Cours approfondi',
          href: `${branch.href}#${item.anchor}`
        });
      });
    }

    (branch.deepCourses || []).forEach((course) => {
      const sections = course.sections || [];

      if (course.expand) {
        sections.forEach((item) => {
          entries.push({
            title: item.title,
            field: 'Cours approfondi',
            href: `${course.href}#${item.anchor}`
          });
        });
      } else {
        entries.push({
          title: course.title,
          field: `Cours approfondi · ${sections.length} section${sections.length > 1 ? 's' : ''}`,
          href: course.href
        });
      }
    });

    return entries;
  }

  // Mot employé pour compter les entrées d'une branche.
  function entryNoun(branch) {
    const hasChapters = (branch.chapters || []).length > 0;
    const hasDeep =
      Boolean(branch.href) || (branch.deepCourses || []).length > 0;

    if (hasChapters && hasDeep) return 'rubrique';
    return hasChapters ? 'chapitre' : 'section';
  }

  // Statistiques générales du catalogue.
  const chapters = catalogChrono.flatMap(
    (branch) => branch.chapters || []
  );

  const deepCourses = [
    ...catalogChrono.filter((branch) => branch.href),
    ...catalogChrono.flatMap((branch) => branch.deepCourses || [])
  ];

  const deepSections = deepCourses.flatMap(
    (course) => course.sections || []
  );

  const deepCourseLabel =
    deepCourses.length === 1
      ? 'COURS APPROFONDI'
      : 'COURS APPROFONDIS';

  // Le saut de ligne place « N SECTIONS » sur sa propre ligne.
  const countText =
    `${catalogChrono.length} BRANCHES · ${chapters.length} CHAPITRES` +
    `${deepCourses.length
      ? ` · ${deepCourses.length} ${deepCourseLabel}\n${deepSections.length} SECTIONS`
      : ''}`;

  const statsText = countText;
  const countNode = document.querySelector('#catalogue-count');
  const statsNode = document.querySelector('#domain-statistics');

  if (countNode) countNode.textContent = countText;
  if (statsNode) statsNode.textContent = statsText;

  // Style injecté ici : pas besoin de modifier styles.css.
  const catalogueStyle = document.createElement('style');

  catalogueStyle.textContent = `
    #domain-statistics, #catalogue-count {
      white-space: pre-line;
    }

    .branch-overview {
      margin: 0 0 2.5rem;
    }

    .branch-overview-title {
      margin: 0 0 .9rem;
      font-size: .78rem;
      font-weight: 700;
      letter-spacing: .14em;
      text-transform: uppercase;
      opacity: .7;
    }

    .branch-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: .75rem;
    }

    .branch-card {
      display: flex;
      flex-direction: column;
      gap: .4rem;
      padding: 1rem 1.05rem;
      border: 1.5px solid rgba(23, 33, 27, .22);
      background: rgba(255, 255, 255, .55);
      color: inherit;
      text-decoration: none;
      transition: border-color .15s, transform .15s;
    }

    .branch-card:hover,
    .branch-card:focus-visible {
      border-color: var(--accent, #ef7455);
      transform: translateY(-2px);
    }

    .branch-card-number {
      font-size: .8rem;
      font-weight: 700;
      letter-spacing: .12em;
      color: var(--accent, #ef7455);
    }

    .branch-card-title {
      font-size: 0.9rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .branch-card-count {
      font-size: .72rem;
      font-weight: 700;
      letter-spacing: .12em;
      text-transform: uppercase;
      opacity: .65;
    }

    .programme-section {
      scroll-margin-top: 1rem;
    }

    .programme-section-heading {
      border-top: 3px solid var(--accent, #ef7455);
      padding-top: 1rem;
    }

    .programme-section-heading h2 {
      margin: 0;
      line-height: 1.15;
    }

    .programme-section-heading h2 .branch-number {
      display: block;
      margin: 0 0 .45rem;
      font-family: inherit;
      font-size: .85rem;
      font-weight: 700;
      letter-spacing: .14em;
      text-transform: none;
      font-style: normal;
      color: var(--accent, #ef7455);
    }

    .programme-section-heading h2 .branch-name {
      display: block;
      font-size: clamp(1.7rem, 6.5vw, 2.25rem);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: normal;
      text-transform: none;
      font-style: normal;
      color: #17211b;
    }

    /* Correction : deux liens en colonne, alignés à droite */
    .topbar {
      position: relative;
    }

    /* Conteneur vertical pour les deux liens */
    .topbar .edition.catalogue-back {
      position: absolute;
      right: 0;
      top: 0;
      text-transform: lowercase;
      display: block;
    }

    /* Le second lien passe en dessous du premier */
    .topbar .edition.catalogue-back + .edition.catalogue-back {
      margin-top: 1.4rem;
      right: 0;
    }
  `;

  document.head.append(catalogueStyle);

  function pluralize(count, noun) {
    return `${count} ${noun}${count > 1 ? 's' : ''}`;
  }

  // Bandeau « Les branches ».
  // Un conteneur #branch-overview peut exister dans la page ;
  // sinon il est créé juste avant la liste des sections.
  if (programmeSections && catalogChrono.length) {
    let overview = document.querySelector('#branch-overview');

    if (!overview) {
      overview = document.createElement('nav');
      overview.id = 'branch-overview';
      programmeSections.before(overview);
    }

    overview.className = 'branch-overview';
    overview.setAttribute('aria-label', 'Branches du cours');

    overview.append(
      Object.assign(document.createElement('p'), {
        className: 'branch-overview-title',
        textContent: 'Les branches'
      })
    );

    const grid = document.createElement('div');
    grid.className = 'branch-grid';

    // TRI CHRONOLOGIQUE : cartes des branches.
    catalogChrono.forEach((branch, index) => {
      const card = document.createElement('a');

      card.className = 'branch-card';
      card.href = `#${branch.id}`;

      card.innerHTML =
        '<span class="branch-card-number"></span>' +
        '<span class="branch-card-title"></span>' +
        '<span class="branch-card-count"></span>';

      card.querySelector('.branch-card-number').textContent =
        String(index + 1).padStart(2, '0');

      card.querySelector('.branch-card-title').textContent =
        branch.title;

      card.querySelector('.branch-card-count').textContent =
        pluralize(branchEntries(branch).length, entryNoun(branch));

      grid.append(card);
    });

    overview.append(grid);
  }

  // TRI CHRONOLOGIQUE : navigation latérale et sections.
  catalogChrono.forEach((branch, branchIndex) => {
    if (levelNavigation) {
      const branchLink = document.createElement('a');

      branchLink.href = `#${branch.id}`;
      branchLink.innerHTML =
        `<span>${String(branchIndex + 1).padStart(2, '0')}</span>`;

      branchLink.append(document.createTextNode(branch.title));
      levelNavigation.append(branchLink);
    }

    const entries = branchEntries(branch);
    const noun = entryNoun(branch);

    const section = document.createElement('section');
    section.className = 'programme-section';
    section.id = branch.id;
    section.setAttribute('aria-labelledby', `${branch.id}-title`);

    const heading = document.createElement('div');
    heading.className = 'programme-section-heading';

    heading.innerHTML =
      `<h2 id="${branch.id}-title">` +
      '<span class="branch-number"></span>' +
      '<span class="branch-name"></span>' +
      '</h2>' +
      `<span>${pluralize(entries.length, noun).toUpperCase()}</span>`;

    heading.querySelector('.branch-number').textContent =
      String(branchIndex + 1).padStart(2, '0');

    heading.querySelector('.branch-name').textContent =
      branch.title;

    section.append(heading);

    section.append(
      Object.assign(document.createElement('p'), {
        className: 'programme-note',
        textContent: branch.note || ''
      })
    );

    const chapterList = document.createElement('div');
    chapterList.className = 'chapter-list';

    chapterList.setAttribute(
      'aria-label',
      `${noun === 'chapitre'
        ? 'Chapitres'
        : noun === 'section'
          ? 'Sections'
          : 'Rubriques'} de ${branch.title}`
    );

    entries.forEach((entry, index) => {
      const link = document.createElement('a');

      link.className = 'chapter-link';
      link.href = entry.href;

      link.innerHTML =
        `<span class="chapter-number">${String(index + 1).padStart(2, '0')}</span>` +
        '<span class="chapter-title"></span>' +
        '<span class="chapter-field"></span>' +
        '<span class="chapter-arrow" aria-hidden="true">↗</span>';

      link.querySelector('.chapter-title').textContent =
        entry.title;

      link.querySelector('.chapter-field').textContent =
        entry.field;

      chapterList.append(link);
    });

    section.append(chapterList);

    if (programmeSections) {
      programmeSections.append(section);
    }
  });

  // Surbrillance de la branche visible dans la navigation latérale.
  if (levelNavigation && programmeSections) {
    const navLinks = Array.from(
      levelNavigation.querySelectorAll('a')
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          navLinks.forEach((navLink) => {
            navLink.classList.toggle(
              'is-current',
              navLink.hash === `#${entry.target.id}`
            );
          });
        }
      },
      { rootMargin: '-18% 0px -68% 0px' }
    );

    programmeSections
      .querySelectorAll('.programme-section')
      .forEach((section) => sectionObserver.observe(section));
  }
})();

