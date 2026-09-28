const readingProgress = document.querySelector('#reading-progress');
const sections = document.querySelectorAll('.lesson-section');
const chapterLinks = document.querySelectorAll('.chapter-nav a');

const updateReadingProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  readingProgress.style.width = `${Math.min(progress, 100)}%`;
};

window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('resize', updateReadingProgress);
updateReadingProgress();

const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;

    chapterLinks.forEach((link) => {
      const isCurrent = link.hash === `#${entry.target.id}`;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
}, { rootMargin: '-18% 0px -68% 0px' });

sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll('.exercise').forEach((exercise) => {
  const label = exercise.querySelector('.reveal-label');
  exercise.addEventListener('toggle', () => {
    label.textContent = exercise.open ? 'Masquer la correction' : 'Voir la correction';
  });
});
