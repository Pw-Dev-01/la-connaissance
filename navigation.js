
const NAVIGATION_LIENS = [
  {
    texte: "Accueil général ↗",
    url: "/index.html"
  },
  {
    texte: "Accueil cours ↗",
    url: "discipline"
  }
];

function afficherNavigation() {
  const conteneurs = document.querySelectorAll("[data-navigation]");

  conteneurs.forEach((conteneur) => {
    const chemin = window.location.pathname;
    const segments = chemin.split("/").filter(Boolean);

    // Le dossier de la discipline est le dossier parent
    // de la page HTML courante.
    const dossierDiscipline =
      segments.length > 1 ? segments[segments.length - 2] : "";

    conteneur.replaceChildren();

    NAVIGATION_LIENS.forEach(({ texte, url }) => {
      const lien = document.createElement("a");

      lien.textContent = texte;
      lien.href =
        url === "discipline"
          ? `/${dossierDiscipline}/index.html`
          : url;

      conteneur.appendChild(lien);
    });
  });
}

document.addEventListener("DOMContentLoaded", afficherNavigation);
