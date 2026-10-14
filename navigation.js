const NAVIGATION_LIENS = [
{
texte: "Accueil général ↗",
url: "accueil-general"
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

// Détecte la base du site, par exemple /la-connaissance/
const baseSite = segments.length > 0
  ? `/${segments[0]}/`
  : "/";

// Détecte le dossier de la discipline
const dossierDiscipline =
  segments.length >= 2 ? segments[segments.length - 2] : "";

conteneur.replaceChildren();

NAVIGATION_LIENS.forEach(({ texte, url }) => {
  const lien = document.createElement("a");
  lien.textContent = texte;

  if (url === "accueil-general") {
    lien.href = `${baseSite}index.html`;
  } else {
    lien.href = `${baseSite}${dossierDiscipline}/index.html`;
  }

  conteneur.appendChild(lien);
});

});
}

document.addEventListener("DOMContentLoaded", afficherNavigation);