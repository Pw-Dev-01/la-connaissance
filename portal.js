
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

if (menuToggle && mobileNavigation) {
  function setMenuOpen(isOpen) {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
    );

    mobileNavigation.classList.toggle('is-open', isOpen);
    mobileNavigation.setAttribute('aria-hidden', String(!isOpen));
    mobileNavigation.inert = !isOpen;
  }

  menuToggle.addEventListener('click', () => {
    const isOpen =
      menuToggle.getAttribute('aria-expanded') === 'true';

    setMenuOpen(!isOpen);
  });

  mobileNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
    });
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


document.querySelectorAll('.submenu-toggle').forEach((button) => {
  const submenuId = button.getAttribute('aria-controls');
  const submenu = document.getElementById(submenuId);

  if (!submenu) return;

  button.addEventListener('click', () => {
    const isOpen =
      button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    submenu.classList.toggle('is-open', !isOpen);
    submenu.inert = isOpen;

    button.setAttribute(
      'aria-label',
      isOpen
        ? 'Afficher les cours'
        : 'Masquer les cours'
    );
  });
});

