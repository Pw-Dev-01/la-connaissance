
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
