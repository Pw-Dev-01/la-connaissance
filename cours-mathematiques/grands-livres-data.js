// Rubrique « Les grands livres de mathématiques » : dix ouvrages de référence,
// avec titre, auteur, édition, date de parution et résumé. Les données
// bibliographiques ont été vérifiées sur des notices de bibliothèques
// (Smithsonian, Keio, Kyoto, Boston Public Library, BnF…), de maisons de
// ventes (Christie’s, Bonhams, Sotheby’s…) et de comptes rendus ; les liens de
// vérification figurent au bas de chaque fiche. Ces fiches n'ont ni formule,
// ni exemple, ni exercice.
// Ordre : chronologique (date de la première édition imprimée).
// À CHARGER APRÈS le fichier qui définit window.courseCatalog (ou à coller à
// la toute fin de ce fichier, APRÈS le « ]; » qui ferme window.courseCatalog).
// ---------------------------------------------------------------------------
window.courseCatalog.push({
  id: 'grands-livres-mathematiques',
  title: 'Les grands livres de mathématiques',
  note: 'Dix ouvrages de référence, d’Euclide à Bourbaki : titre, auteur, édition, date de parution et résumé de chaque livre.',
  chapters: [
    {
      id: "euclide-elements",
      title: "Les Éléments (Elementa geometriae)",
      field: "Euclide · 1482 (première édition imprimée)",
      summary: "Euclide, première édition imprimée : Venise, 1482.",
      lesson: {
        fiche: [
          ["Titre", "Elementa geometriae (le texte s’ouvre par : « Preclarissimus liber elementorum Euclidis perspicacissimi in artem geometrie… »)"],
          ["Auteur", "Euclide (texte compilé vers 300 av. J.-C.) ; traduction latine d’Adélard de Bath, établie à partir de l’arabe, éditée par Campanus de Novare"],
          ["Édition", "Venise, Erhard Ratdolt. Première édition imprimée (editio princeps), en latin, avec une lettre dédicatoire de Ratdolt à Giovanni Mocenigo."],
          ["Date de parution", "25 mai 1482 (date du colophon : « octauis Calen. Iun. »)"]
        ],
        sections: [
          "Les Éléments d’Euclide sont présentés par les bibliographes comme le plus ancien manuel de mathématiques encore en usage. L’édition de Ratdolt est la première version imprimée de l’ouvrage : elle reproduit le texte latin d’Adélard de Bath (XIIe siècle), traduit de l’arabe, revu au XIIIe siècle par Campanus de Novare.",
          "Ratdolt y résout le problème de l’impression des figures géométriques : le volume en contient plus de quatre cents, et on ignore encore s’il les a obtenues par des bois gravés ou par des moules métalliques. Le texte, très dépendant de Campanus, n’est pas fidèle à l’original grec, et Ratdolt y appelle Euclide « de Mégare », une confusion avec un autre philosophe grec. Selon la Linda Hall Library, cette édition compte quinze livres au lieu de treize."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Smithsonian Libraries — Euclide, Elementa geometriae (Venise, Ratdolt, 1482)", url: "https://library.si.edu/es/digital-library/book/preclarissimusl00eucl" },
          { title: "Bibliothèque de l’Université Keio — Euclide, Elementa geometriae (Venise, 25 mai 1482)", url: "https://dcollections.lib.keio.ac.jp/en/node/205697" },
          { title: "Linda Hall Library (MAA Convergence) — Euclid’s Elementa geometriae printed by Ratdolt", url: "https://old.maa.org/node/841544" },
          { title: "St John’s College, Cambridge — Euclid, Elementa geometriae (Venise, 1482)", url: "https://www.joh.cam.ac.uk/node/2281" }
        ]
      }
    },
    {
      id: "cardano-ars-magna",
      title: "Ars magna (Artis magnae, sive de regulis algebraicis)",
      field: "Girolamo Cardano · 1545",
      summary: "Girolamo Cardano, Nuremberg, 1545.",
      lesson: {
        fiche: [
          ["Titre complet", "Artis magnae, sive de regulis algebraicis, Lib. unus (« Le Grand Art, ou les règles de l’algèbre »)"],
          ["Auteur", "Girolamo Cardano (1501-1576)"],
          ["Édition", "Nuremberg, Johann Petreius, in-folio, 82 feuillets foliotés. Édition originale ; une seconde édition paraît du vivant de Cardano, en 1570."],
          ["Date de parution", "1545"]
        ],
        sections: [
          "L’Ars magna est le grand traité d’algèbre de Cardano. Il expose la résolution des équations du troisième degré, par une méthode que Cardano avait obtenue de Niccolò Tartaglia et qu’il publie sans l’accord de celui-ci, ainsi que celle des équations du quatrième degré. Cardano y reconnaît aussi que Scipione del Ferro avait découvert la même formule que Tartaglia.",
          "Cardano ne se contente pas de chercher une solution : il observe les relations entre les racines d’une équation et ses coefficients, ce qui lui vaut d’être considéré comme l’un des fondateurs de la théorie des équations algébriques. Il distingue treize types d’équations du troisième degré, étudiés aux chapitres XI à XXIII. L’ouvrage est imprimé à Nuremberg par Johann Petreius, l’éditeur du De revolutionibus de Copernic."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Christie’s — Cardano, Artis magnae (Nuremberg, Petreius, 1545)", url: "https://www.christies.com.cn/lot/lot-923991" },
          { title: "Wikipédia (anglais) — Ars Magna (Cardano book)", url: "https://en.wikipedia.org/wiki/Ars_Magna_(Cardano_book)" },
          { title: "German Medical Science — Cardano et Johannes Petreius", url: "https://www.egms.de/static/en/meetings/dgnc2008/08dgnc320.shtml" }
        ]
      }
    },
    {
      id: "diophante-arithmetica",
      title: "Arithmeticorum libri sex (Arithmétiques de Diophante)",
      field: "Diophante d’Alexandrie, éd. Bachet de Méziriac · 1621",
      summary: "Diophante, édité par Claude-Gaspard Bachet de Méziriac, Paris, 1621.",
      lesson: {
        fiche: [
          ["Titre complet", "Diophanti Alexandrini Arithmeticorum libri sex, et de numeris multangulis liber unus. Nunc primum Graece & Latine editi, atque absolutissimis commentariis illustrati"],
          ["Auteur", "Diophante d’Alexandrie (actif vers le milieu du IIIe siècle) ; texte grec, traduction latine et commentaires établis par Claude-Gaspard Bachet de Méziriac (1581-1638)"],
          ["Édition", "Paris, 1621, in-folio, texte grec et latin en colonnes parallèles. Il existe deux adresses, Sébastien Cramoisy et Hieronymus Drouart, identiques sauf pour la page de titre. Première édition du texte grec."],
          ["Date de parution", "1621"]
        ],
        sections: [
          "Les Arithmétiques de Diophante sont un traité antique sur la résolution d’équations en nombres. L’édition de Bachet est la première à donner le texte grec ; elle l’accompagne de la traduction latine de Wilhelm Xylander, parue en 1575, et de commentaires de Bachet.",
          "Cette édition attire l’attention de Pierre de Fermat sur la théorie des nombres : c’est dans sa copie que Fermat a écrit en marge l’énoncé de son célèbre « dernier théorème ». Une autre édition, avec les commentaires de Fermat, publiée par son fils Samuel de Fermat, paraît à Toulouse en 1670 chez Bernard Bosc."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Thomas Jefferson’s Libraries — Catalogue Sowerby : Diophanti Arithmeticorum (Paris, 1621)", url: "https://tjlibraries.monticello.org/transcripts/sowerby/IV_1.html" },
          { title: "Université de Kyoto — Diophanti Alexandrini Arithmeticorum libri sex (1621)", url: "https://rmda.kulib.kyoto-u.ac.jp/en/item/RB00028884" },
          { title: "Christie’s — Diophante, Arithmeticorum libri sex (Paris, 1621)", url: "https://www.christies.com.cn/lot/lot-6352308" },
          { title: "Bibliorare — Diophante, édition de Toulouse (1670) avec les commentaires de Fermat", url: "https://www.bibliorare.com/lot/516943/" }
        ]
      }
    },
    {
      id: "descartes-geometrie",
      title: "La Géométrie (dans le Discours de la méthode)",
      field: "René Descartes · 1637",
      summary: "René Descartes, Leyde, 1637.",
      lesson: {
        fiche: [
          ["Titre complet", "Discours de la méthode pour bien conduire sa raison, & chercher la vérité dans les sciences. Plus la Dioptrique. Les Météores. Et la Géométrie. Qui sont des essais de cette Méthode (La Géométrie est le troisième essai)"],
          ["Auteur", "René Descartes (1596-1650) ; le volume paraît sans nom d’auteur"],
          ["Édition", "Leyde, Jan Maire, in-4. Édition originale : 78 pages pour le Discours, puis 413 pages pour les essais. Descartes reçoit 200 exemplaires pour toute rémunération."],
          ["Date de parution", "8 juin 1637 (fin de l’impression ; privilège français du 4 mai 1637)"]
        ],
        sections: [
          "La Géométrie est le troisième et dernier essai du volume, après la Dioptrique et les Météores. C’est le seul ouvrage de mathématiques que Descartes ait publié. Le Livre premier occupe les pages 297 à 314 de l’édition originale et passe pour le texte où Descartes introduit les coordonnées dites cartésiennes. Il y traite notamment le problème de Pappus, présenté comme la naissance de la géométrie analytique.",
          "Descartes écrit en français plutôt qu’en latin, pour toucher ceux qui ne se servent que de leur raison naturelle. Une traduction latine de La Géométrie, accompagnée de notes de Florimond de Beaune, paraît du vivant de Descartes."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Bibliorare — Descartes, Discours de la méthode (Leyde, Jean Maire, 1637)", url: "https://www.bibliorare.com/lot/134946/" },
          { title: "Gazette Drouot — Descartes, Discours de la méthode (Leyde, 1637)", url: "https://gazette-drouot.com/en/lots/13345563--c2-a7-descartes-rene---discours---" },
          { title: "BibNum (OpenEdition) — Le Livre premier de La Géométrie de Descartes", url: "https://journals.openedition.org/bibnum/635" },
          { title: "Source Library — Descartes, Discours de la méthode et Essais (édition originale de 1637)", url: "https://ficino.sourcelibrary.org/book/6953e52177f38f6761beffa2/page/6953e52277f38f6761beffaf" }
        ]
      }
    },
    {
      id: "newton-principia",
      title: "Principia (Philosophiae naturalis principia mathematica)",
      field: "Isaac Newton · 1687",
      summary: "Isaac Newton, Londres, 1687.",
      lesson: {
        fiche: [
          ["Titre complet", "Philosophiae naturalis principia mathematica"],
          ["Auteur", "Isaac Newton (1642-1727), édité par Edmond Halley"],
          ["Édition", "Londres, « jussu Societatis Regiae ac typis Josephi Streater », in-4. Édition originale, imprimée par ordre de la Royal Society ; Halley en suit l’impression et en supporte le coût."],
          ["Date de parution", "1687 (le 5 juillet 1687, Halley annonce à Newton l’achèvement de l’impression)"]
        ],
        sections: [
          "Les Principia exposent les trois lois du mouvement et la loi de la gravitation universelle, et résolvent le problème du mouvement des planètes. L’ouvrage établit aussi les bases mathématiques du mouvement des corps, ainsi que celui des fluides et l’effet des frottements.",
          "Le manuscrit, copié par Humphrey Newton, est conservé à la Royal Society. Le tirage de la première édition est petit : peut-être 250 exemplaires selon Bonhams. Une deuxième édition, très révisée avec la collaboration de Roger Cotes, paraît en 1713 et est considérée comme l’édition de référence."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Boston Public Library — Newton, Principia (Londres, 1687)", url: "https://ark.digitalcommonwealth.org/ark:/50959/1n79hq60p" },
          { title: "Cambridge Digital Library — Manuscrit des Principia (Royal Society MS/69)", url: "https://cudl.lib.cam.ac.uk/view/MS-ROYALSOCIETY-00069" },
          { title: "Université de Glasgow — Newton, Principia (Londres, 1687)", url: "https://www.gla.ac.uk/myglasgow/archivespecialcollections/digitisedcollections/revolutionsinastronomy/sirisaacnewtonprincipia" },
          { title: "Bonhams — Newton, Principia, première édition (1687)", url: "https://www.bonhams.com/auction/22714/lot/165/newton-isaac-philosophiae-naturalis-principia-mathematica-first-edition-joseph-streater-1687" }
        ]
      }
    },
    {
      id: "euler-introductio",
      title: "Introductio in analysin infinitorum",
      field: "Leonhard Euler · 1748",
      summary: "Leonhard Euler, Lausanne, 1748.",
      lesson: {
        fiche: [
          ["Titre complet", "Introductio in analysin infinitorum, auctore Leonhardo Eulero. Tomus primus [secundus]"],
          ["Auteur", "Leonhard Euler (1707-1783)"],
          ["Édition", "Lausanne, Marc-Michel Bousquet et associés, 2 volumes in-4, avec frontispice gravé, portrait du dédicataire Jean-Jacques Dortous de Mairan et 40 planches dépliantes. Édition originale."],
          ["Date de parution", "1748 (texte rédigé en 1745)"]
        ],
        sections: [
          "Le premier tome rassemble les travaux d’Euler sur les séries infinies, les produits infinis et les fractions continues. Euler y fait de la fonction le concept central de l’analyse, introduit la notation f(x) et souligne le rôle fondamental du nombre e et de l’exponentielle.",
          "Le second tome porte sur la géométrie analytique et l’étude des courbes algébriques. Les bibliographes comparent le rôle de l’ouvrage pour l’analyse moderne à celui des Éléments d’Euclide pour la géométrie antique."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Euler Archive — E101 : Introductio in analysin infinitorum, volume 1", url: "https://scholarlycommons.pacific.edu/euler-works/101/" },
          { title: "Euler Archive — E102 : Introductio in analysin infinitorum, volume 2", url: "https://scholarlycommons.pacific.edu/euler-works/102/" },
          { title: "Bibliothèques numériques de la Défense (notice d’après la BnF) — Introductio in analysin infinitorum", url: "https://bibliotheques-numeriques.defense.gouv.fr/impression/document/a2dbdb7c-4859-4d87-8b0d-88abc23df17c" },
          { title: "Université de Kyoto — Introductio in analysin infinitorum (1748)", url: "https://rmda.kulib.kyoto-u.ac.jp/en/item/rb00028899" },
          { title: "Christie’s — Euler, Introductio in analysin infinitorum (Lausanne, 1748)", url: "https://www.christies.com.cn/lot/lot-933528" }
        ]
      }
    },
    {
      id: "gauss-disquisitiones",
      title: "Disquisitiones arithmeticae",
      field: "Carl Friedrich Gauss · 1801",
      summary: "Carl Friedrich Gauss, Leipzig, 1801.",
      lesson: {
        fiche: [
          ["Titre complet", "Disquisitiones arithmeticae, auctore Carolo Friderico Gauss"],
          ["Auteur", "Carl Friedrich Gauss (1777-1855)"],
          ["Édition", "Leipzig, « in commissis apud Gerh. Fleischer, jun. », in-8 (XVIII pages, 668 pages, 10 feuillets). Édition originale, en latin."],
          ["Date de parution", "1801 (la dédicace au duc de Brunswick est datée de juillet 1801)"]
        ],
        sections: [
          "Gauss rédige l’ouvrage en 1798, à 21 ans, et le publie en 1801. Il comprend sept sections et 366 articles. Les trois premières rassemblent des résultats connus (congruences, théorème fondamental de l’arithmétique, racines primitives…) ; la section V, plus de la moitié du volume, est consacrée aux formes quadratiques.",
          "On y trouve la démonstration par Gauss de la loi de réciprocité quadratique, que ni Euler ni Legendre n’avaient obtenue, ainsi que la construction du polygone régulier à dix-sept côtés. Les typographes ayant mal compris ces mathématiques nouvelles, le volume contient un erratum de quatre pages et des feuillets de remplacement. Une seconde édition paraît en 1870, après la mort de Gauss ; la traduction anglaise d’Arthur Clarke est publiée en 1966."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Bibliothèque de l’ETH Zurich (swisscollections) — Disquisitiones arithmeticae (Leipzig, 1801)", url: "https://swisscollections.k8s-001.unibas.ch/Record/991085527879705501" },
          { title: "MacTutor (Université de St Andrews) — Gauss : Disquisitiones Arithmeticae", url: "https://mathshistory.st-andrews.ac.uk/Extras/Gauss_Disquisitiones" },
          { title: "Christie’s — Gauss, Disquisitiones arithmeticae (Leipzig, 1801)", url: "https://onlineonly.christies.com.cn/s/printed-manuscript-americana-science/disquisitiones-arithmeticae-33/173673" },
          { title: "Smithsonian Libraries — Disquisitiones arithmeticae", url: "https://library.si.edu/digital-library/book/disquisitionesa00gaus" },
          { title: "Wikipédia (anglais) — Disquisitiones Arithmeticae", url: "https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae" }
        ]
      }
    },
    {
      id: "cauchy-cours-d-analyse",
      title: "Cours d’analyse de l’École royale polytechnique",
      field: "Augustin-Louis Cauchy · 1821",
      summary: "Augustin-Louis Cauchy, Paris, 1821.",
      lesson: {
        fiche: [
          ["Titre complet", "Cours d’analyse de l’École royale polytechnique ; Ire partie. Analyse algébrique"],
          ["Auteur", "Augustin-Louis Cauchy (1789-1857)"],
          ["Édition", "Paris, de l’Imprimerie royale, Debure frères, libraires du Roi et de la Bibliothèque du Roi. Édition originale."],
          ["Date de parution", "1821"]
        ],
        sections: [
          "Ce livre est tiré de l’enseignement de Cauchy à l’École polytechnique. Le Cours d’analyse devait comprendre plusieurs parties, mais seule la première, l’Analyse algébrique, a été publiée ; on désigne donc par ce nom l’ouvrage entier.",
          "On y trouve des définitions de la limite et de la continuité d’une fonction. L’ouvrage est devenu très influent comme une des premières tentatives pour fonder l’analyse sur une base rigoureuse."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Internet Archive — Cauchy, Cours d’analyse (1821), exemplaire numérisé", url: "https://archive.org/details/coursdanalysedel00cauc" },
          { title: "Université de Lille — Œuvres complètes de Cauchy, 2e série, tome III (Cours d’analyse)", url: "https://lillonum.univ-lille.fr/files/original/8673b36cd9bbcf5f58ebc81873b56b692ff29c1e.pdf" },
          { title: "Société mathématique du Canada (Notes) — Taking a cue from Cauchy", url: "https://notes.math.ca/en/article/taking-a-cue-from-cauchy/" },
          { title: "Wikipédia (anglais) — Cours d’analyse", url: "https://en.wikipedia.org/wiki/Cours_d%27analyse" }
        ]
      }
    },
    {
      id: "whitehead-russell-principia-mathematica",
      title: "Principia Mathematica",
      field: "Alfred North Whitehead et Bertrand Russell · 1910-1913",
      summary: "Alfred North Whitehead et Bertrand Russell, Cambridge, 1910-1913.",
      lesson: {
        fiche: [
          ["Titre", "Principia Mathematica"],
          ["Auteurs", "Alfred North Whitehead (1861-1947) et Bertrand Russell (1872-1970)"],
          ["Édition", "Cambridge, at the University Press, 3 volumes grand in-8. Édition originale. Tirage : 750 exemplaires du premier volume, réduit à 500 pour les volumes II et III."],
          ["Date de parution", "Volume I : 1910 ; volume II : 1912 ; volume III : 1913 (seconde édition : 1925 pour le volume I, 1927 pour les volumes II et III)"]
        ],
        sections: [
          "Les Principia Mathematica sont un ouvrage sur les fondements des mathématiques. Les auteurs y tentent de déduire l’ensemble des mathématiques d’un petit nombre d’idées primitives et de principes d’inférence logique, à l’aide d’une notation symbolique très précise. L’ouvrage fait suite aux Principles of Mathematics de Russell (1903).",
          "Les auteurs n’ont pas atteint pleinement leur objectif, certaines de leurs théories et axiomes s’étant révélés insatisfaisants. Mais ces échecs ont stimulé la recherche, et l’ouvrage a profondément marqué la logique mathématique, la théorie des ensembles et la philosophie analytique."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Project Gutenberg — Principia Mathematica, vol. 1 (Cambridge, 1910-1913)", url: "https://www.gutenberg.org/ebooks/78050" },
          { title: "Christie’s — Whitehead et Russell, Principia mathematica (Cambridge, 1910-1913)", url: "https://onlineonly.christies.com.cn/s/valuable-books-manuscripts/alfred-north-whitehead-1861-1947-bertrand-russell-1872-1970-152/93457" },
          { title: "History of Information — Russell et Whitehead, Principia Mathematica", url: "https://historyofinformation.com/detail.php?id=1729" }
        ]
      }
    },
    {
      id: "bourbaki-elements-de-mathematique",
      title: "Éléments de mathématique",
      field: "Nicolas Bourbaki · 1939",
      summary: "Nicolas Bourbaki, Paris, 1939.",
      lesson: {
        fiche: [
          ["Titre", "Éléments de mathématique (« mathématique » est écrit volontairement au singulier)"],
          ["Auteur", "Nicolas Bourbaki, pseudonyme collectif d’un groupe de mathématiciens, principalement français, dont Henri Cartan, Claude Chevalley, Jean Dieudonné et André Weil"],
          ["Édition", "Paris, Hermann, collection « Actualités scientifiques et industrielles ». Le premier volume paru est le fascicule de résultats de la Théorie des ensembles (ASI 846)."],
          ["Date de parution", "1939 (début de la publication)"]
        ],
        sections: [
          "Les Éléments de mathématique sont un traité qui vise à présenter les mathématiques de façon rigoureuse et systématique à partir de leurs fondements. Le livre I, Théorie des ensembles, ouvre le traité ; l’ouvrage est composé de dix livres, divisés en chapitres. Le titre rend hommage à Euclide, et le singulier exprime l’idée de rétablir l’unité des mathématiques.",
          "Les éditions Hermann reçoivent le projet en 1937, auprès de leur directeur Enrique Freymann, et publient dès 1939 les premiers fascicules sans indiquer l’identité des rédacteurs. Les volumes ne sont pas parus dans l’ordre du traité : le premier à paraître est un fascicule de résultats, c’est-à-dire des définitions et des énoncés sans démonstration."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Bibliothèque nationale de France — Communiqué : archives de Nicolas Bourbaki (éditions Hermann)", url: "https://www.bnf.fr/sites/default/files/2018-11/cp_bourbaki.pdf" },
          { title: "Institut Élie Cartan de Lorraine — Premières éditions françaises des Éléments de mathématique", url: "https://dev-iecl.univ-lorraine.fr/wp-content/uploads/2021/04/BOURBAKI_depouillement_chapitre_premieres_editions_fr_des_elements_de_mathematique_par_Nicolas_Bourbaki.pdf" },
          { title: "Springer — Bourbaki, Théorie des ensembles (réimpression de l’édition de 1970)", url: "https://link.springer.com/10.1007/978-3-540-34035-5" },
          { title: "LibraryThing — Nicolas Bourbaki", url: "https://www.librarything.com/author/bourbakinicolas" }
        ]
      }
    }
  ]
});
