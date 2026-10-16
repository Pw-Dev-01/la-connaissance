
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
}

// Boutons qui ouvrent et ferment les sous-menus des disciplines.
document.querySelectorAll('.mobile-nav-expand').forEach((button) => {
  const submenuId = button.getAttribute('aria-controls');
  const submenu = document.getElementById(submenuId);

  if (!submenu) return;

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    const shouldOpen = !isOpen;

    button.setAttribute('aria-expanded', String(shouldOpen));
    button.setAttribute(
      'aria-label',
      shouldOpen
        ? 'Masquer les chapitres'
        : 'Afficher les chapitres'
    );

    submenu.hidden = !shouldOpen;
    submenu.classList.toggle('is-open', shouldOpen);
    submenu.inert = !shouldOpen;
  });
});

// Ferme le menu mobile après avoir suivi un lien.
// Les boutons de dépliage ne sont pas concernés.
if (mobileNavigation && menuToggle) {
  mobileNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
    });
  });
}
