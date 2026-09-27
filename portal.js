const courseEntries = document.querySelectorAll('.course-entry');

courseEntries.forEach((entry) => {
  entry.addEventListener('focus', () => entry.classList.add('is-focused'));
  entry.addEventListener('blur', () => entry.classList.remove('is-focused'));
});
