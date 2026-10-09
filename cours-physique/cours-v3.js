// cours.js — version complète 
// Convertit automatiquement les vecteurs \vec{x} en MathML propre

function renderVectorEquation(text) {
  // Remplace \vec{x} par un bloc MathML
  const mathML = text.replace(/\\vec\{([a-zA-Z])\}/g, (match, letter) => {
    return `
      <mover>
        <mi>${letter}</mi>
        <mo>→</mo>
      </mover>
    `;
  });

  return `
    <div class="formula-block formula-accent">
      <math display="block">
        <mrow>
          ${mathML}
        </mrow>
      </math>
    </div>
  `;
}

(function () {
  const $ = (sel) => document.querySelector(sel);
  const setText = (sel, value) => { const el = $(sel); if (el) el.textContent = value; };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function makeSection(index, label, title, extraClass) {
    const section = el('section', 'lesson-section' + (extraClass ? ' ' + extraClass : ''));
    section.append(el('p', 'section-index', `${String(index).padStart(2, '0')} / ${label}`));
    section.append(el('h2', '', title));
    return section;
  }

  const id = new URLSearchParams(location.search).get('id');
  const catalog = window.courseCatalog || [];

  // 1) Chapitre d'une branche
  let course = null;
  let branch = null;
  let chapter = null;
  for (const item of catalog) {
    const found = (item.chapters || []).find((ch) => ch.id === id);
    if (found) { branch = item; chapter = found; break; }
  }

  // 2) Sinon : cours simple
  if (!chapter) course = catalog.find((c) => c.id === id) || null;

  // 3) Cours approfondi via ancre
  if (!course && !chapter) {
    course = catalog.find((item) => (item.sections || []).some((s) => s.anchor === id));
  }

  // 4) Sommaire d’un cours approfondi
  if (!chapter && course && course.sections) {
    document.title = `${course.title} · Cours de géologie`;
    setText('#lesson-title', course.title);
    setText('#lesson-summary', course.note || course.summary || '');
    setText('#lesson-eyebrow', course.title.toUpperCase());
    setText('#lesson-field', 'COURS APPROFONDI');
    setText('#lesson-level', 'APPROFONDISSEMENT');

    const container = $('#chapter-lesson');
    const intro = makeSection(1, 'SOMMAIRE', 'Chapitres du cours');
    intro.append(el('p', '', course.note || ''));
    container.append(intro);

    const nav = el('nav', 'chapter-nav');
    (course.chapters || []).forEach((ch) => {
      const a = el('a', '', ch.title);
      a.href = `cours.html?id=${encodeURIComponent(ch.id)}`;
      nav.append(a);
    });
    container.append(nav);
    return;
  }

  // 5) Chapitre normal
  if (branch && chapter) {
    const lesson = chapter.lesson || {};
    document.title = `${chapter.title} · Cours de géologie`;
    setText('#lesson-title', chapter.title);
    setText('#lesson-summary', chapter.summary || '');
    setText('#lesson-eyebrow', `${branch.title.toUpperCase()} · ${chapter.field || ''}`);
    setText('#lesson-field', chapter.field || '');
    setText('#lesson-level', 'BASES → APPROFONDISSEMENT');

    const levelLabel = $('#lesson-level-label');
    if (levelLabel) {
      levelLabel.textContent = branch.title.toUpperCase();
      levelLabel.href = `index.html#${branch.id}`;
    }
    setText('#lesson-footer', `${branch.title.toUpperCase()} · ${(chapter.field || '').toUpperCase()}`);

    const sideNav = $('#lesson-chapter-nav');
    if (sideNav) {
      branch.chapters.forEach((sibling) => {
        const a = el('a', '', sibling.title);
        a.href = `cours.html?id=${encodeURIComponent(sibling.id)}`;
        if (sibling.id === chapter.id) {
          a.classList.add('is-active');
          a.setAttribute('aria-current', 'page');
        }
        sideNav.append(a);
      });
    }

    const container = $('#chapter-lesson');
    let n = 0;

    // Fiche bibliographique
    if (lesson.fiche && lesson.fiche.length) {
      const s = makeSection(++n, 'FICHE', 'Fiche de l’ouvrage');
      const dl = el('dl', 'book-fiche');
      lesson.fiche.forEach(([label, value]) => {
        dl.append(el('dt', '', label));
        dl.append(el('dd', '', value));
      });
      s.append(dl);
      container.append(s);
    }

    // Sections
    if (lesson.sections && lesson.sections.length) {
      const s = makeSection(++n, lesson.fiche ? 'RÉSUMÉ' : 'COMPRENDRE',
        lesson.fiche ? 'De quoi parle ce livre' : 'Les notions essentielles');
      lesson.sections.forEach((p) => s.append(el('p', '', p)));
      container.append(s);
    }

    // Formule principale — ENCADRÉ CORAIL (MathML corrigé)
    if (lesson.formula && lesson.formula.text) {
      const s = makeSection(++n, 'FORMULE', lesson.formula.label || 'Formule');

      const box = el('div', 'formula-block formula-accent');
      box.append(el('span', 'formula-label', lesson.formula.label || 'Formule'));

// Si la formule contient un vecteur, on utilise le bloc MathML automatique
if (lesson.formula.text.includes("\\vec")) {
  const html = renderVectorEquation(lesson.formula.text);
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  box.append(wrapper.firstElementChild);

  s.append(box);
  container.append(s);
  return; // On stoppe ici pour ne pas afficher le texte brut
}

      // Exemple : si l’identifiant de la formule correspond à la 2e loi de Newton,
      // on force un MathML propre.
      if (lesson.formula.id === 'newton-second-law') {
        lesson.formula.mathML = `
<math display="block">
  <mrow>
    <mo>∑</mo>
    <msub>
      <mi>F</mi>
      <mi>ext</mi>
    </msub>
    <mo>=</mo>
    <mi>m</mi>
    <mo>&#x2062;</mo>
    <mi>a</mi>
  </mrow>
</math>`;
      }

      // Exemple : mouvement à accélération constante
      if (lesson.formula.id === 'uniform-acceleration') {
        lesson.formula.mathML = `
<math display="block">
  <mrow>
    <mi>v</mi>
    <mo>(</mo><mi>t</mi><mo>)</mo>
    <mo>=</mo>
    <msub><mi>v</mi><mn>0</mn></msub>
    <mo>+</mo>
    <mi>a</mi><mi>t</mi>
    <mo>|</mo>
    <mi>x</mi>
    <mo>(</mo><mi>t</mi><mo>)</mo>
    <mo>=</mo>
    <msub><mi>x</mi><mn>0</mn></msub>
    <mo>+</mo>
    <msub><mi>v</mi><mn>0</mn></msub><mi>t</mi>
    <mo>+</mo>
    <mfrac>
      <mn>1</mn>
      <mn>2</mn>
    </mfrac>
    <mi>a</mi>
    <msup><mi>t</mi><mn>2</mn></msup>
  </mrow>
</math>`;
      }

      if (lesson.formula.mathML) {
        const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
        math.setAttribute('display', 'block');
        // On insère le contenu interne du MathML fourni
        math.innerHTML = lesson.formula.mathML
          .replace(/^<math[^>]*>/i, '')
          .replace(/<\/math>\s*$/i, '');
        math.classList.add('mathml-display');
        box.append(math);
      }

      s.append(box);
      container.append(s);
    }

    // Équations détaillées — ENCADRÉ CORAIL
    if (lesson.equationDetails && lesson.equationDetails.length) {
      const s = makeSection(++n, 'ÉQUATIONS', 'Les équations en détail');
      lesson.equationDetails.forEach((eq) => {
        const box = el('div', 'equation-detail');
        box.append(el('h3', '', eq.title));

        // Si eq.formula contient du MathML, on peut aussi le traiter proprement :
        if (eq.mathML) {
          const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
          math.setAttribute('display', 'block');
          math.innerHTML = eq.mathML
            .replace(/^<math[^>]*>/i, '')
            .replace(/<\/math>\s*$/i, '');
          const f = el('div', 'formula-block formula-accent');
          f.append(math);
          box.append(f);
        } else {
          box.append(el('div', 'formula-block formula-accent', eq.formula));
        }

        if (eq.explanation) box.append(el('p', '', eq.explanation));
        if (eq.parameters) box.append(el('p', '', 'Paramètres : ' + eq.parameters));
        if (eq.example) box.append(el('p', '', 'Exemple : ' + eq.example));
        if (eq.result) box.append(el('p', '', 'Résultat : ' + eq.result));
        s.append(box);
      });
      container.append(s);
    }

    // Exemple guidé
    if (lesson.example) {
      const s = makeSection(++n, 'EXEMPLE GUIDÉ', 'Méthode pas à pas');
      if (lesson.example.statement) s.append(el('p', '', lesson.example.statement));
      if (lesson.example.calculation) s.append(el('p', '', lesson.example.calculation));
      if (lesson.example.answer) s.append(el('div', 'worked-result', lesson.example.answer));
      container.append(s);
    }

    // Exercice
    if (lesson.exercise) {
      const s = makeSection(++n, 'S’ENTRAÎNER', 'À toi de jouer', 'exercise-section');
      const details = el('details', 'exercise');
      const summary = el('summary');
      summary.append(el('span', 'exercise-number', 'A'));
      summary.append(el('span', '', lesson.exercise.question));
      const reveal = el('span', 'reveal-label', 'Voir la correction');
      summary.append(reveal);
      details.append(summary);
      details.append(el('div', 'exercise-answer', lesson.exercise.answer));
      details.addEventListener('toggle', () => {
        reveal.textContent = details.open ? 'Masquer la correction' : 'Voir la correction';
      });
      s.append(details);
      container.append(s);
    }

    // Sources
    if (lesson.sources && lesson.sources.length) {
      const s = makeSection(++n, 'RÉFÉRENCES', lesson.sourcesHeading || 'Sources scientifiques');
      lesson.sources.forEach((src) => {
        const p = el('p');
        const a = el('a', '', src.title);
        a.href = src.url;
        a.target = '_blank';
        a.rel = 'noreferrer';
        p.append(a);
        s.append(p);
      });
      container.append(s);
    }
    return;
  }

  // 6) Introuvable
  document.title = 'Leçon introuvable · Cours de géologie';
  setText('#lesson-title', 'Leçon introuvable');
  const ids = catalog.flatMap((b) => (b.chapters || []).map((c) => c.id));
  setText('#lesson-summary',
    'Ce chapitre ne figure pas dans le catalogue. [debug] id demandé = ' + JSON.stringify(id) +
    ' ; branches = ' + catalog.length + ' ; chapitres = ' + ids.length +
    ' ; présent = ' + ids.includes(id) +
    ' ; branches portant cet id = ' + catalog.filter((b) => b.id === id).length);
})();
