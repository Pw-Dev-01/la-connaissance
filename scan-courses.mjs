// Usage : node scan-courses.mjs   (à lancer à la racine du site)
// Détecte les dossiers "cours-*" et génère courses.json + courses.js.
// Pour personnaliser un cours : créer cours-XXX/meta.json (voir README en bas).
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const DEFAULTS = {
  mathematiques: { order: 1,  symbol: "x²", class: "math-entry",         entry: "programmes.html", title: "Mathématiques",  description: "Du lycée à la prépa scientifique · 89 chapitres" },
  physique:      { order: 2,  symbol: "φ",  class: "physics-entry",      title: "Physique",       description: "Des lois fondamentales aux sciences de l’Univers · 35 chapitres et 8 cours approfondis" },
  chimie:        { order: 3,  symbol: "⇌",  class: "chemistry-entry",    title: "Chimie",         description: "Des constituants de la matière aux synthèses moléculaires · 18 chapitres" },
  economie:      { order: 4,  symbol: "€",  class: "economics-entry",    title: "Économie",       description: "Microéconomie, macroéconomie et grands économistes · 3 rubriques · 11 chapitres" },
  geologie:      { order: 5,  symbol: "◈",  class: "geology-entry",      title: "Géologie",       description: "Des minéraux aux temps profonds · 6 chapitres et 1 cours approfondi" },
  climatologie:  { order: 6,  symbol: "☀",  class: "climatology-entry",  title: "Climatologie",   description: "Du bilan radiatif au changement climatique · 9 chapitres" },
  paleontologie: { order: 7,  symbol: "✳",  class: "paleontology-entry", title: "Paléontologie",  description: "Des fossiles aux archives de l’histoire du vivant · 1 cours approfondi" },
  anthropologie: { order: 8,  symbol: "A",  class: "anthropology-entry", title: "Anthropologie",  description: "Des traces du passé aux sociétés et aux langues · 5 rubriques · 14 chapitres" },
  histoire:      { order: 9,  symbol: "H",  class: "history-entry",      title: "Histoire",       description: "Des premières cités aux grands empires · 1 rubrique · 6 chapitres" },
  philosophie:   { order: 10, symbol: "Φ",  class: "philosophy-entry",   title: "Philosophie",    description: "Conscience, liberté, vérité, justice et morale · Explorer les grandes questions de la pensée" },
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const folders = readdirSync(".").filter(
  (n) => /^cours-/.test(n) && statSync(n).isDirectory()
);

const courses = folders.map((folder) => {
  const id = folder.replace(/^cours-/, "");
  let meta = {};
  const metaPath = join(folder, "meta.json");
  if (existsSync(metaPath)) {
    try { meta = JSON.parse(readFileSync(metaPath, "utf8")); }
    catch (e) { console.warn(`⚠ ${metaPath} invalide : ${e.message}`); }
  }
  const d = DEFAULTS[id] || {};
  const merged = {
    id,
    folder,
    title: capitalize(id.replace(/-/g, " ")),
    symbol: "•",
    description: "",
    entry: "index.html",
    dataFile: `${id}-data.js`,
    class: "",
    order: 1000,
    ...d,
    ...meta,
  };
  merged.href = `${folder}/${merged.entry}`;
  if (!existsSync(join(folder, merged.entry))) {
    console.warn(`⚠ ${merged.href} introuvable (lien cassé ?)`);
  }
  if (!existsSync(join(folder, merged.dataFile))) {
    console.warn(`⚠ ${folder}/${merged.dataFile} introuvable (sous-menu mobile vide)`);
  }
  return merged;
});

courses.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "fr"));

writeFileSync("courses.json", JSON.stringify(courses, null, 2) + "\n");
writeFileSync(
  "courses.js",
  "// Fichier généré par scan-courses.mjs — ne pas modifier à la main\n" +
    "window.COURSES = " + JSON.stringify(courses, null, 2) + ";\n"
);

console.log(`✔ ${courses.length} cours : ${courses.map((c) => c.id).join(", ")}`);

/* README meta.json (facultatif), exemple pour cours-informatique/meta.json :
{
  "title": "Informatique",
  "symbol": "</>",
  "description": "Algorithmique et programmation · 12 chapitres",
  "order": 11,
  "class": "computing-entry",
  "entry": "index.html"
}
*/

