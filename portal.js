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
        shouldOpen ? 'Masquer les chapitres' : 'Afficher les chapitres'
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

const disciplines = {
  mathematiques: {
    file: './cours-mathematiques/mathematiques-data.js',
    folder: 'cours-mathematiques/',
    fallback: 'programmes.html'
  },
  physique: {
    file: './cours-physique/physique-data.js',
    folder: 'cours-physique/',
    fallback: 'index.html'
  },
  chimie: {
    file: './cours-chimie/chimie-data.js',
    folder: 'cours-chimie/',
    fallback: 'index.html'
  },
  economie: {
    file: './cours-economie/economie-data.js',
    folder: 'cours-economie/',
    fallback: 'index.html'
  },
  geologie: {
    file: './cours-geologie/geologie-data.js',
    folder: 'cours-geologie/',
    fallback: 'index.html'
  },
  climatologie: {
    file: './cours-climatologie/climatologie-data.js',
    folder: 'cours-climatologie/',
    fallback: 'index.html'
  },
  paleontologie: {
    file: './cours-paleontologie/paleontologie-data.js',
    folder: 'cours-paleontologie/',
    fallback: 'index.html'
  },
  anthropologie: {
    file: './cours-anthropologie/anthropologie-data.js',
    folder: 'cours-anthropologie/',
    fallback: 'cours.html'
  },
  histoire: {
    file: './cours-histoire/histoire-data.js',
    folder: 'cours-histoire/',
    fallback: 'index.html'
  }
};

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
   5. EXTRACTION DES CHAPITRES
   ========================================================= */

function getChapters(catalog) {
  const branches = Array.isArray(catalog)
    ? catalog
    : Object.values(catalog || {});

  return branches.flatMap((branch) => {
    if (!branch || !Array.isArray(branch.chapters)) {
      return [];
    }

    return branch.chapters;
  });
}

/* =========================================================
   6. CRÉATION DES LIENS VERS LES CHAPITRES
   ========================================================= */

function getChapterUrl(chapter, config) {
  const folderUrl = new URL(config.folder, document.baseURI);
  const url = new URL(config.coursePage || 'cours.html', folderUrl);

  if (chapter.id) {
    url.searchParams.set('id', chapter.id);
  }

  return url.href;
}

/* =========================================================
   7. AFFICHAGE DES CHAPITRES
   ========================================================= */

function displayChapters(disciplineId, chapters, config) {
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

  const validChapters = chapters.filter(
    (chapter) => chapter && chapter.title
  );

  if (validChapters.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'Aucun chapitre disponible.';

    list.appendChild(item);
    submenu.appendChild(list);
    return;
  }

  validChapters.forEach((chapter) => {
    const item = document.createElement('li');
    const link = document.createElement('a');

    link.href = getChapterUrl(chapter, config);
    link.textContent = chapter.title;
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
      const chapters = getChapters(catalog);

      displayChapters(disciplineId, chapters, config);
    } catch (error) {
      console.error(`Erreur de chargement pour ${disciplineId} :`, error);

      const message = document.createElement('p');
      message.className = 'mobile-chapter-error';
      message.textContent = 'Impossible de charger les chapitres.';

      submenu.replaceChildren(message);
    }
  }
}

/* =========================================================
   9. LANCEMENT
   ========================================================= */

initialiseMobileChapters();
