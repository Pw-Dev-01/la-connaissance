
const courseEntries = document.querySelectorAll('.course-entry');

courseEntries.forEach((entry) => {
  entry.addEventListener('focus', () => {
    entry.classList.add('is-focused');
  });

  entry.addEventListener('blur', () => {
    entry.classList.remove('is-focused');
  });
});

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
  setMenuOpen(false);

  menuToggle.addEventListener('click', () => {
    const isOpen =
      menuToggle.getAttribute('aria-expanded') === 'true';

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

  mobileNavigation.addEventListener('click', (event) => {
    const button = event.target.closest('.mobile-nav-expand');

    if (button && mobileNavigation.contains(button)) {
      event.preventDefault();
      event.stopPropagation();

      const submenuId = button.getAttribute('aria-controls');
      const submenu = document.getElementById(submenuId);

      if (!submenu) {
        console.error('Sous-menu introuvable :', submenuId);
        return;
      }

      const shouldOpen =
        button.getAttribute('aria-expanded') !== 'true';

      button.setAttribute('aria-expanded', String(shouldOpen));
      button.setAttribute(
        'aria-label',
        shouldOpen
          ? 'Masquer les chapitres'
          : 'Afficher les chapitres'
      );

      submenu.hidden = !shouldOpen;
      submenu.inert = !shouldOpen;
      submenu.classList.toggle('is-open', shouldOpen);

      return;
    }

    if (event.target.closest('a')) {
      setMenuOpen(false);
    }
  });
}

const disciplines = {
  mathematiques: {
    file: 'mathematiques-data.js',
    folder: 'cours-mathematiques/',
    fallback: 'programmes.html'
  },
  physique: {
    file: 'physique-data.js',
    folder: 'cours-physique/',
    fallback: 'index.html'
  },
  chimie: {
    file: 'chimie-data.js',
    folder: 'cours-chimie/',
    fallback: 'index.html'
  },
  economie: {
    file: 'economie-data.js',
    folder: 'cours-economie/',
    fallback: 'index.html'
  },
  geologie: {
    file: 'geologie-data.js',
    folder: 'cours-geologie/',
    fallback: 'index.html'
  },
  climatologie: {
    file: 'climatologie-data.js',
    folder: 'cours-climatologie/',
    fallback: 'index.html'
  },
  paleontologie: {
    file: 'paleontologie-data.js',
    folder: 'cours-paleontologie/',
    fallback: 'index.html'
  },
  anthropologie: {
    file: 'anthropologie-data.js',
    folder: 'cours-anthropologie/',
    fallback: 'cours.html'
  },
  histoire: {
    file: 'histoire-data.js',
    folder: 'cours-histoire/',
    fallback: 'index.html'
  }
};

/*
 * Charge un fichier de données à la fois.
 * Chaque fichier utilise window.courseCatalog :
 * on récupère son contenu avant de passer au suivant.
 */
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

function getChapterUrl(chapter, config) {
  const folderUrl = new URL(config.folder, document.baseURI);

  if (chapter.page) {
    return new URL(chapter.page, folderUrl).href;
  }

  const fallbackUrl = new URL(config.fallback, folderUrl);
  fallbackUrl.searchParams.set('id', chapter.id || '');
  return fallbackUrl.href;
}

function displayChapters(disciplineId, chapters, config) {
  const submenu = document.querySelector(
    `[data-submenu-for="${disciplineId}"]`
  );

  if (!submenu) {
    console.error(`Sous-menu absent pour ${disciplineId}`);
    return;
  }

  submenu.replaceChildren();

  if (chapters.length === 0) {
    const message = document.createElement('li');
    message.textContent = 'Aucun chapitre disponible.';
    submenu.appendChild(message);
    return;
  }

  const list = document.createElement('ul');
  list.className = 'mobile-chapter-list';

  chapters.forEach((chapter) => {
    if (!chapter || !chapter.title) return;

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

async function initialiseMobileChapters() {
  for (const [disciplineId, config] of Object.entries(disciplines)) {
    const submenu = document.querySelector(
      `[data-submenu-for="${disciplineId}"]`
    );

    if (!submenu) continue;

    try {
      const catalog = await loadDisciplineData(config.file);
      const chapters = getChapters(catalog);

      displayChapters(disciplineId, chapters, config);
    } catch (error) {
      console.error(error);

      const message = document.createElement('p');
      message.textContent = 'Impossible de charger les chapitres.';
      submenu.replaceChildren(message);
    }
  }
}

initialiseMobileChapters();
