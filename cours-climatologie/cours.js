(function () {
  // ⚠️ Seule ligne à adapter selon le cours.
  const DISCIPLINE = 'climatologie';
  const SUFFIX = `Cours de ${DISCIPLINE}`;

  const $ = (sel) => document.querySelector(sel);
  const setText = (sel, value) => { const node = $(sel); if (node) node.textContent = value; };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // ---------------------------------------------------------------------------
  // Texte « riche » : rend correctement
  //  - les vecteurs  (lettre + U+20D7, ex. F⃗) : flèche dessinée en CSS ;
  //  - les indices Unicode (ₑₓ, ₘ, ₚ, ₕ, ₁, ₂…) : vraies balises <sub> ;
  //  - le faux « c » en indice (U+A700, ex. E꜀) : <sub>c</sub>.
  // Les polices du site n'ont pas ces caractères : ils s'affichaient en carrés.
  // ---------------------------------------------------------------------------
  const RICH = /(\S)\u20D7|([\u2080-\u209C\u1D62]+)|\uA700/g;

  function addRich(parent, text) {
    const re = new RegExp(RICH.source, 'g');
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
      if (m.index > last) parent.append(document.createTextNode(text.slice(last, m.index)));
      if (m[1]) parent.append(el('span', 'vec', m[1]));
      else if (m[2]) parent.append(el('sub', '', m[2].normalize('NFKD')));
      else parent.append(el('sub', '', 'c'));
      last = re.lastIndex;
    }
    if (last < text.length) parent.append(document.createTextNode(text.slice(last)));
    return parent;
  }

  function rich(tag, className, text) {
    return addRich(el(tag, className), String(text));
  }

  // Style des vecteurs et indices, injecté ici : pas besoin de modifier styles.css.
  const style = document.createElement('style');
  style.textContent = `
    .vec { position: relative; display: inline-block; line-height: 1; padding-top: .28em; }
    .vec::before { content: "\\2192"; position: absolute; top: -.1em; left: 50%;
      transform: translateX(-50%); font-size: .62em; line-height: 1; font-style: normal; }
    .formula-block sub, .lesson-section sub { font-size: .72em; line-height: 0; }
    .book-fiche p { margin: .55rem 0; }
  `;
  document.head.append(style);

  function makeSection(index, label, title, extraClass) {
    const section = el('section', 'lesson-section' + (extraClass ? ' ' + extraClass : ''));
    section.append(el('p', 'section-index', `${String(index).padStart(2, '0')} / ${label}`));
    section.append(el('h2', '', title));
    return section;
  }

  // La clé « mathML » des données est souvent un simple identifiant
  // (ex. 'newton-second-law') et non du balisage : on ne l'affiche que si c'est du MathML.
  function isMarkup(value) {
    return typeof value === 'string' && value.trim().startsWith('<');
  }

  const id = new URLSearchParams(location.search).get('id');
  const catalog = window.courseCatalog || [];

  // 1) Chapitre d'une branche (prioritaire)
  let course = null;
  let branch = null;
  let chapter = null;
  for (const item of catalog) {
    const found = (item.chapters || []).find((ch) => ch.id === id);
    if (found) { branch = item; chapter = found; break; }
  }

  // 2) Sinon : branche / cours simple
  if (!chapter) course = catalog.find((c) => c.id === id) || null;

  // 3) Cours approfondi via ancre
  if (!course && !chapter) {
    course = catalog.find((item) => (item.sections || []).some((s) => s.anchor === id));
  }

  // 4) Sommaire d'une branche / d'un cours approfondi
  if (!chapter && course && course.sections) {
    document.title = `${course.title} · ${SUFFIX}`;
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

  // 5) Chapitre
  if (branch && chapter) {
    const lesson = chapter.lesson || {};
    document.title = `${chapter.title} · ${SUFFIX}`;
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

    // Fiche bibliographique : « Libellé : valeur », libellé en gras, même ligne.
    if (lesson.fiche && lesson.fiche.length) {
      const s = makeSection(++n, 'FICHE', 'Fiche de l’ouvrage');
      const fiche = el('div', 'book-fiche');
      lesson.fiche.forEach(([label, value]) => {
        const p = el('p');
        p.append(el('strong', '', label + ' : '), document.createTextNode(value));
        fiche.append(p);
      });
      s.append(fiche);
      container.append(s);
    }

    // Notions
    if (lesson.sections && lesson.sections.length) {
      const s = makeSection(++n, lesson.fiche ? 'RÉSUMÉ' : 'COMPRENDRE',
        lesson.fiche ? 'De quoi parle ce livre' : 'Les notions essentielles');
      lesson.sections.forEach((p) => s.append(rich('p', '', p)));
      container.append(s);
    }

    // Formule principale (encadré)
    if (lesson.formula && lesson.formula.text) {
      const s = makeSection(++n, 'FORMULE', lesson.formula.label || 'Formule');
      const box = el('div', 'formula-block formula-accent');
      box.append(el('span', 'formula-label', lesson.formula.label || 'Formule'));
      if (isMarkup(lesson.formula.mathML)) {
        const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
        math.setAttribute('display', 'block');
        math.innerHTML = lesson.formula.mathML;
        box.append(math);
      } else {
        box.append(rich('span', 'math-display', lesson.formula.text));
      }
      s.append(box);
      container.append(s);
    }

    // Équations détaillées
    if (lesson.equationDetails && lesson.equationDetails.length) {
      const s = makeSection(++n, 'ÉQUATIONS', 'Les équations en détail');
      lesson.equationDetails.forEach((eq) => {
        const box = el('div', 'equation-detail');
        box.append(el('h3', '', eq.title));
        const formulaBox = el('div', 'formula-block formula-accent');
        formulaBox.append(rich('span', 'math-display', eq.formula));
        box.append(formulaBox);
        if (eq.explanation) box.append(rich('p', '', eq.explanation));
        if (eq.parameters) box.append(rich('p', '', 'Paramètres : ' + eq.parameters));
        if (eq.example) box.append(rich('p', '', 'Exemple : ' + eq.example));
        if (eq.result) box.append(rich('p', '', 'Résultat : ' + eq.result));
        s.append(box);
      });
      container.append(s);
    }

    // Exemple guidé
    if (lesson.example) {
      const s = makeSection(++n, 'EXEMPLE GUIDÉ', 'Méthode pas à pas');
      if (lesson.example.statement) s.append(rich('p', '', lesson.example.statement));
      if (lesson.example.calculation) s.append(rich('p', '', lesson.example.calculation));
      if (lesson.example.answer) {
        const result = el('div', 'worked-result');
        result.append(rich('span', '', lesson.example.answer));
        s.append(result);
      }
      container.append(s);
    }

    // Exercices : « exercises » (liste) si présent, sinon « exercise » (un seul).
    const exercises = (lesson.exercises && lesson.exercises.length)
      ? lesson.exercises
      : (lesson.exercise ? [lesson.exercise] : []);
    if (exercises.length) {
      const s = makeSection(++n, 'S’ENTRAÎNER', 'À toi de jouer', 'exercise-section');
      exercises.forEach((ex, i) => {
        const details = el('details', 'exercise');
        const summary = el('summary');
        summary.append(el('span', 'exercise-number', String.fromCharCode(65 + i)));
        summary.append(rich('span', '', ex.question));
        const reveal = el('span', 'reveal-label', 'Voir la correction');
        summary.append(reveal);
        details.append(summary);
        details.append(rich('div', 'exercise-answer', ex.answer));
        details.addEventListener('toggle', () => {
          reveal.textContent = details.open ? 'Masquer la correction' : 'Voir la correction';
        });
        s.append(details);
      });
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
  document.title = `Leçon introuvable · ${SUFFIX}`;
  setText('#lesson-title', 'Leçon introuvable');
  setText('#lesson-summary', 'Ce chapitre ne figure pas dans le catalogue.');
})();
