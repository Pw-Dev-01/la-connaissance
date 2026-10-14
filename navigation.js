const NAVIGATION_LIENS = [
  {
    texte: "Accueil général ↗",
    cle: "homeUrl"
  },
  {
    texte: "Accueil cours ↗",
    cle: "courseHomeUrl"
  }
];

function afficherNavigation() {
  document.querySelectorAll("[data-navigation]").forEach((conteneur) => {
    conteneur.replaceChildren();

    NAVIGATION_LIENS.forEach(({ texte, cle }) => {
      const url = conteneur.dataset[cle];
      if (!url) return;

      const lien = document.createElement("a");
      lien.textContent = texte;
      lien.href = url;
      conteneur.appendChild(lien);
    });
  });
}

document.addEventListener("DOMContentLoaded", afficherNavigation);