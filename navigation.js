function afficherNavigation(urlPremierCours) {
const conteneur = document.getElementById("topbar-links");
if (!conteneur) return;

const liens = [
{
texte: "Accueil général ↗",
url: "/index.html"
},
{
texte: "Accueil cours ↗",
url: "../index.html"
},
];

conteneur.replaceChildren();

liens.forEach(({ texte, url }) => {
const lien = document.createElement("a");
lien.textContent = texte;
lien.href = url;
conteneur.appendChild(lien);
});
}