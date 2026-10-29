/* =========================================================
   1. FOCUS DES ENTRÉES DE COURS
   ========================================================= */


const courseEntries = document.querySelectorAll('.course-entry');


courseEntries.forEach((entry) => {
  entry.addEventListener('focus', () => {
    entry.classList.add('is-focused');
  });


  entry.addEventListener('blur', () => {
    entry.classList.remove('is-focused');
  });
});


/* =========================================================
   2. MENU HAMBURGER
   ========================================================= */


const menuToggle = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('#mobile-navigation');


function setMenuOpen(isOpen) {
  if (!menuToggle || !mobileNavigation) return;


  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
  );


  mobileNavigation.classList.toggle('is-open', isOpen);
  mobileNavigation.setAttribute('aria-hidden', String(!isOpen));
  mobileNavigation.inert = !isOpen;
}


if (menuToggle && mobileNavigation) {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') === 'true');


  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });


  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      menuToggle.getAttribute('aria-expanded') === 'true'
    ) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
    }
  });


  /* Ouverture / fermeture des sous-menus + fermeture au clic sur un lien */
  mobileNavigation.addEventListener('click', (event) => {
    const target = event.target;


    if (!(target instanceof Element)) return;


    const button = target.closest('.mobile-nav-expand');


    if (button && mobileNavigation.contains(button)) {
      event.preventDefault();
      event.stopPropagation();


      const submenuId = button.getAttribute('aria-controls');
      const submenu = submenuId
        ? document.getElementById(submenuId)
        : null;


      if (!submenu) {
        console.error('Sous-menu introuvable :', submenuId);
        return;
      }


      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';


      button.setAttribute('aria-expanded', String(shouldOpen));
      button.setAttribute(
        'aria-label',
        shouldOpen ? 'Masquer les rubriques' : 'Afficher les rubriques'
      );


      submenu.hidden = !shouldOpen;
      submenu.inert = !shouldOpen;
      submenu.classList.toggle('is-open', shouldOpen);


      return;
    }


    if (target.closest('a')) {
      setMenuOpen(false);
    }
  });
}


/* =========================================================
   3. CONFIGURATION DES DISCIPLINES
   ========================================================= */


const disciplines = Object.fromEntries(
  (window.COURSES || []).map((c) => [
    c.id,
    {
      file: `./${c.folder}/${c.dataFile}`,
      folder: `${c.folder}/`,
      branchPage: c.branchPage
    }
  ])
);


/* =========================================================
   4. CHARGEMENT DES FICHIERS DE DONNÉES
   ========================================================= */


function loadDisciplineData(file) {
  return new Promise((resolve, reject) => {
    window.courseCatalog = undefined;


    const script = document.createElement('script');
    script.src = new URL(file, document.baseURI).href;
    script.async = true;


    script.onload = () => {
      const catalog = window.courseCatalog;


      script.remove();
      window.courseCatalog = undefined;


      if (!catalog) {
        reject(new Error(`Aucun catalogue trouvé dans ${file}`));
        return;
      }


      resolve(catalog);
    };


    script.onerror = () => {
      script.remove();
      window.courseCatalog = undefined;


      reject(new Error(`Impossible de charger ${file}`));
    };


    document.head.appendChild(script);
  });
}


/* =========================================================
   5. EXTRACTION ET TRI DES SOUS-RUBRIQUES (BRANCHES)
   ========================================================= */



function getBranches(catalog) {
  const branches = (
    Array.isArray(catalog)
      ? catalog
      : Object.values(catalog || {})
  ).filter((branch) => branch && branch.title);

  // Identifier la branche Grands-livres grâce à son ID.
  const ordinaryBranches = branches.filter(
    (branch) => branch.id !== 'grands-livres'
  );

  const grandLivreBranches = branches.filter(
    (branch) => branch.id === 'grands-livres'
  );

  // Vérifier si un tri chronologique est nécessaire.
  const hasSortYear = ordinaryBranches.some(
    (branch) =>
      typeof branch.sortYear === 'number' &&
      Number.isFinite(branch.sortYear)
  );

  let sortedBranches = ordinaryBranches;

  if (hasSortYear) {
    sortedBranches = [...ordinaryBranches].sort((a, b) => {
      const yearA = a.sortYear;
      const yearB = b.sortYear;

      const validA =
        typeof yearA === 'number' && Number.isFinite(yearA);
      const validB =
        typeof yearB === 'number' && Number.isFinite(yearB);

      if (validA && validB) return yearA - yearB;
      if (validA) return -1;
      if (validB) return 1;

      return 0;
    });
  }

  // Toujours placer Grands-livres en dernier.
  return [...sortedBranches, ...grandLivreBranches];
}

/* =========================================================
   6. CRÉATION DES LIENS VERS LES SOUS-RUBRIQUES
   Ouvre la page d'accueil de la discipline, positionnée sur
   la branche (?branche=id et ancre #id).
   ========================================================= */


function getBranchUrl(branch, config) {
  const folderUrl = new URL(config.folder, document.baseURI);
  const url = new URL(config.branchPage || 'index.html', folderUrl);


  if (branch.id) {
    url.searchParams.set('branche', branch.id);
    url.hash = branch.id;
  }


  return url.href;
}


/* =========================================================
   7. AFFICHAGE DES SOUS-RUBRIQUES
   ========================================================= */


function displayBranches(disciplineId, branches, config) {
  const submenu = document.querySelector(
    `[data-submenu-for="${disciplineId}"]`
  );


  if (!submenu) {
    console.error(`Sous-menu absent pour ${disciplineId}`);
    return;
  }


  submenu.replaceChildren();


  const list = document.createElement('ul');
  list.className = 'mobile-chapter-list';


  if (branches.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'Aucune rubrique disponible.';


    list.appendChild(item);
    submenu.appendChild(list);
    return;
  }


  branches.forEach((branch) => {
    const item = document.createElement('li');
    const link = document.createElement('a');


    link.href = getBranchUrl(branch, config);
    link.textContent = branch.title;
    link.className = 'mobile-chapter-link';


    item.appendChild(link);
    list.appendChild(item);
  });


  submenu.appendChild(list);
}


/* =========================================================
   8. INITIALISATION DES SOUS-MENUS
   ========================================================= */


async function initialiseMobileChapters() {
  for (const [disciplineId, config] of Object.entries(disciplines)) {
    const submenu = document.querySelector(
      `[data-submenu-for="${disciplineId}"]`
    );


    if (!submenu) {
      console.warn(`Sous-menu absent pour ${disciplineId}`);
      continue;
    }


    try {
      const catalog = await loadDisciplineData(config.file);
      const branches = getBranches(catalog);


      displayBranches(disciplineId, branches, config);
    } catch (error) {
      console.error(`Erreur de chargement pour ${disciplineId} :`, error);


      const message = document.createElement('p');
      message.className = 'mobile-chapter-error';
      message.textContent = 'Impossible de charger les rubriques.';


      submenu.replaceChildren(message);
    }
  }
}


// ---------------------------------------------------------------------------
// 9) Recherche globale dans tous les cours
// ---------------------------------------------------------------------------

function normalizeSearchText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getChapterSearchText(branch, chapter) {
  const lesson = chapter.lesson || {};

  const sections = Array.isArray(lesson.sections)
    ? lesson.sections.join(' ')
    : '';

  const sources = Array.isArray(lesson.sources)
    ? lesson.sources.map(source => source.title || '').join(' ')
    : '';

  const exercises = Array.isArray(lesson.exercises)
    ? lesson.exercises.map(exercise =>
        `${exercise.question || ''} ${exercise.answer || ''}`
      ).join(' ')
    : '';

  const singleExercise = lesson.exercise
    ? `${lesson.exercise.question || ''} ${lesson.exercise.answer || ''}`
    : '';

  const example = lesson.example
    ? Object.values(lesson.example).join(' ')
    : '';

  return [
    branch.title,
    branch.note,
    chapter.title,
    chapter.field,
    chapter.summary,
    lesson.heading,
    lesson.content,
    sections,
    sources,
    exercises,
    singleExercise,
    example
  ].filter(Boolean).join(' ');
}

async function searchAllCourses(query) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) return [];

  const results = [];
  const configs = Object.entries(disciplines);

  for (const [disciplineId, config] of configs) {
    try {
      const catalog = await loadDisciplineData(config.file);
      const branches = getBranches(catalog);

      for (const branch of branches) {
        const chapters = Array.isArray(branch.chapters)
          ? branch.chapters
          : [];

        // Recherche dans le titre et la note de la branche.
        const branchText = normalizeSearchText(
          `${branch.title || ''} ${branch.note || ''}`
        );

        if (branchText.includes(normalizedQuery)) {
          results.push({
            disciplineId,
            branchId: branch.id,
            branchTitle: branch.title || 'Branche sans titre',
            chapterId: null,
            chapterTitle: '',
            url: `./${config.folder}/${config.branchPage || 'index.html'}?branche=${encodeURIComponent(branch.id)}#${encodeURIComponent(branch.id)}`,
            type: 'branch'
          });
        }

        // Recherche dans chaque chapitre.
        for (const chapter of chapters) {
          if (!chapter || !chapter.id) continue;

          const searchableText = normalizeSearchText(
            getChapterSearchText(branch, chapter)
          );

          if (!searchableText.includes(normalizedQuery)) continue;

          results.push({
            disciplineId,
            branchId: branch.id,
            branchTitle: branch.title || 'Branche sans titre',
            chapterId: chapter.id,
            chapterTitle: chapter.title || 'Chapitre sans titre',
            url: `./${config.folder}/cours.html?id=${encodeURIComponent(chapter.id)}`,
            type: 'chapter'
          });
        }
      }
    } catch (error) {
      console.error(
        `Erreur pendant la recherche dans ${disciplineId} :`,
        error
      );
    }
  }

  // Les résultats correspondant à un chapitre sont affichés en premier.
  results.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'chapter' ? -1 : 1;
    }

    return a.chapterTitle.localeCompare(b.chapterTitle, 'fr');
  });

  return results;
}


/* =========================================================
   10. LANCEMENT
   ========================================================= */


initialiseMobileChapters();
