// Construit la liste des cours (accueil) et le menu mobile à partir de courses.js.
// Doit être chargé APRÈS courses.js et AVANT portal.js (tous en "defer").
(function () {
  var courses = window.COURSES || [];
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var num = function (i) { return String(i + 1).padStart(2, "0"); };

  // 1. Catalogue de la page d'accueil
  var list = document.getElementById("course-list");
  if (list) {
    list.innerHTML = courses.map(function (c, i) {
      return (
        '<a class="course-entry ' + esc(c.class) + '" href="' + esc(c.href) + '">' +
          '<span class="entry-number">' + num(i) + "</span>" +
          '<span class="entry-symbol" aria-hidden="true">' + esc(c.symbol) + "</span>" +
          '<span class="entry-copy"><strong>' + esc(c.title) + "</strong>" +
          "<span>" + esc(c.description) + "</span></span>" +
          '<span class="entry-arrow" aria-hidden="true">↗</span>' +
        "</a>"
      );
    }).join("");
  }

  // 2. Compteur « 01 — N »
  var idx = document.getElementById("course-count");
  if (idx) idx.textContent = "01 — " + num(courses.length - 1);

  // 3. Menu mobile (même balisage que l'actuel)
  var nav = document.getElementById("mobile-course-groups");
  if (nav) {
    nav.innerHTML = courses.map(function (c, i) {
      return (
        '<div class="mobile-nav-group" data-discipline="' + esc(c.id) + '">' +
          '<div class="mobile-nav-row">' +
            '<a href="' + esc(c.href) + '" class="mobile-nav-link"><span>' + num(i) + "</span> " + esc(c.title) + "</a>" +
            '<button class="mobile-nav-expand" type="button" aria-label="Afficher les chapitres : ' + esc(c.title) + '" ' +
              'aria-expanded="false" aria-controls="mobile-submenu-' + esc(c.id) + '"><span aria-hidden="true">⌄</span></button>' +
          "</div>" +
          '<div class="mobile-nav-submenu" id="mobile-submenu-' + esc(c.id) + '" data-submenu-for="' + esc(c.id) + '" hidden></div>' +
        "</div>"
      );
    }).join("");
  }
})();

