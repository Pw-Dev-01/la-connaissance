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
    .replace(/[-_./]+/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getChapterSearchText(branch, chapter) {
  const lesson = chapter.lesson || {};

  const sections = Array.isArray(lesson.sections)
    ? lesson.sections.map(section =>
        typeof section === 'string'
          ? section
          : JSON.stringify(section)
      ).join(' ')
    : '';

  const sources = Array.isArray(lesson.sources)
    ? lesson.sources.map(source =>
        typeof source === 'string'
          ? source
          : `${source.title || ''} ${source.description || ''}`
      ).join(' ')
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
    ? Object.values(lesson.example).map(value =>
        typeof value === 'object' && value !== null
          ? JSON.stringify(value)
          : String(value ?? '')
      ).join(' ')
    : '';

  return normalizeSearchText([
    branch.id,
    branch.title,
    branch.note,
    chapter.id,
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
  ].filter(Boolean).join(' '));
}

function scoreSearchMatch(queryWords, searchableText) {
  const text = normalizeSearchText(searchableText);
  const words = text.split(' ').filter(Boolean);

  let score = 0;

  for (const queryWord of queryWords) {
    if (!queryWord) continue;

    if (words.includes(queryWord)) {
      score += 3;
    } else if (words.some(word => word.startsWith(queryWord))) {
      score += 2;
    } else if (text.includes(queryWord)) {
      score += 1;
    } else {
      // Tous les mots de la recherche doivent correspondre.
      return 0;
    }
  }

  return score;
}

async function searchAllCourses(query) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) return [];

  const queryWords = normalizedQuery.split(' ').filter(Boolean);
  const results = [];
  const configs = Object.entries(disciplines);

  for (const [disciplineId, config] of configs) {
    try {
      const catalog = await loadDisciplineData(config.file);
      const branches = getBranches(catalog);

      for (const branch of branches) {
        const branchText = normalizeSearchText([
          branch.id,
          branch.title,
          branch.note
        ].filter(Boolean).join(' '));

        const branchScore = scoreSearchMatch(queryWords, branchText);

        if (branchScore > 0) {
          results.push({
            disciplineId,
            branchId: branch.id,
            branchTitle: branch.title || 'Branche sans titre',
            chapterId: null,
            chapterTitle: '',
            url: `./${config.folder}${config.branchPage || 'index.html'}?branche=${encodeURIComponent(branch.id)}#${encodeURIComponent(branch.id)}`,
            type: 'branch',
            score: branchScore
          });
        }

        const chapters = Array.isArray(branch.chapters)
          ? branch.chapters
          : [];

        for (const chapter of chapters) {
          if (!chapter || !chapter.id) continue;

          const searchableText = getChapterSearchText(branch, chapter);
          const score = scoreSearchMatch(queryWords, searchableText);

          if (score === 0) continue;

          results.push({
            disciplineId,
            branchId: branch.id,
            branchTitle: branch.title || 'Branche sans titre',
            chapterId: chapter.id,
            chapterTitle: chapter.title || 'Chapitre sans titre',
            url: `./${config.folder}cours.html?id=${encodeURIComponent(chapter.id)}`,
            type: 'chapter',
            score
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

  // Les chapitres passent avant les branches ; les meilleurs matchs en premier.
  results.sort((a, b) =>
    (a.type === 'chapter' ? 0 : 1) -
    (b.type === 'chapter' ? 0 : 1) ||
    b.score - a.score ||
    a.chapterTitle.localeCompare(b.chapterTitle, 'fr')
  );

  // Évite les doublons si un même chapitre est référencé plusieurs fois.
  const seen = new Set();

  return results.filter(result => {
    const key = `${result.disciplineId}|${result.chapterId || result.branchId}|${result.type}`;

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}


/* =========================================================
   10. GESTION DU FORMULAIRE ET DES CLICS DE RECHERCHE
   ========================================================= */

function initialiseGlobalSearch() {
  const form = document.querySelector('#portal-search');
  const input = document.querySelector('#portal-search-input');
  const resultsContainer = document.querySelector('#portal-search-results');

  if (!form || !input || !resultsContainer) {
    console.error(
      'Recherche globale : formulaire, champ ou zone de résultats introuvable.',
      { form, input, resultsContainer }
    );
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();

    resultsContainer.replaceChildren();

    if (!query) return;

    const loading = document.createElement('p');
    loading.textContent = 'Recherche en cours…';
    resultsContainer.appendChild(loading);

    try {
      const results = await searchAllCourses(query);
      resultsContainer.replaceChildren();

      if (results.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Aucun cours trouvé pour cette recherche.';
        resultsContainer.appendChild(message);
        return;
      }

      const list = document.createElement('ul');
      list.className = 'portal-search-list';

      results.forEach((result) => {
        const item = document.createElement('li');
        const link = document.createElement('a');

        // Destination réelle calculée par la recherche.
        link.href = new URL(result.url, document.baseURI).href;

        link.textContent = result.type === 'chapter'
          ? `${result.chapterTitle} — ${result.branchTitle}`
          : result.branchTitle;

        link.className = 'portal-search-result';

        // Navigation normale vers le cours au clic.
        link.addEventListener('click', (event) => {
          if (
            event.button !== 0 ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey
          ) {
            return;
          }

          event.preventDefault();
          window.location.assign(link.href);
        });

        item.appendChild(link);
        list.appendChild(item);
      });

      resultsContainer.appendChild(list);
    } catch (error) {
      console.error('Erreur pendant la recherche globale :', error);
      resultsContainer.replaceChildren();

      const message = document.createElement('p');
      message.textContent =
        'La recherche a échoué. Vérifie la console et les fichiers de cours.';
      resultsContainer.appendChild(message);
    }
  });
}


/* =========================================================
   11. LANCEMENT
   ========================================================= */

initialiseMobileChapters();
initialiseGlobalSearch();



