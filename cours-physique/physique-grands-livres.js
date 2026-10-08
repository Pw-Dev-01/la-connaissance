// ---------------------------------------------------------------------------
// Rubrique « Les grands livres de la physique » : dix ouvrages de référence,
// avec titre, auteur, édition, date de parution et résumé. Les données
// bibliographiques ont été vérifiées sur des notices de bibliothèques,
// d'éditeurs et de comptes rendus ; les liens de vérification figurent au bas
// de chaque fiche. Ces fiches n'ont ni formule, ni exemple, ni exercice.
// ---------------------------------------------------------------------------
window.courseCatalog.push({
  id: 'grands-livres-physique',
  title: 'Les grands livres de la physique',
  note: 'Dix ouvrages de référence, de Galilée à Hawking : titre, auteur, édition, date de parution et résumé de chaque livre.',
  chapters: [
      {
        id: "galilee-deux-sciences-nouvelles", title: "Discorsi e dimostrazioni matematiche intorno a due nuove scienze", field: "Galileo Galilei · 1638",
        summary: "Galileo Galilei, 1638.",
        lesson: {
          fiche: [["Titre complet", "Discorsi e dimostrazioni matematiche, intorno à due nuove scienze attenenti alla mecanica & i movimenti locali (traduction littérale : Discours et démonstrations mathématiques concernant deux sciences nouvelles, relatives à la mécanique et aux mouvements locaux)"], ["Auteur", "Galileo Galilei (1564-1642)"], ["Édition", "Leyde (Pays-Bas), chez Lodewijk (Louis) Elzevir, édition originale. Le livre a été publié hors d’Italie, car l’Inquisition romaine avait interdit la publication de toute œuvre de Galilée."], ["Date de parution", "1638"]],
          sections: ["Dernier livre de Galilée, présenté comme un testament scientifique : il reprend une grande partie de ses travaux de physique des trente années précédentes. Il est écrit en partie en italien et en partie en latin, sous la forme d’un dialogue entre trois personnages, Salviati, Sagredo et Simplicio.", "Il fonde deux « sciences nouvelles » : la résistance des matériaux et la cinématique, science mathématique du mouvement. Les deux premières journées portent sur la mécanique des matériaux, les deux dernières sur le mouvement : mouvement uniforme et accéléré, trajectoires paraboliques."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Wikipédia (en) — Two New Sciences", url: "https://en.wikipedia.org/wiki/Two_New_Sciences" }, { title: "Christie’s — notice de l’édition originale (Leyde, Elzevier, 1638)", url: "https://www.christies.com.cn/lot/lot-1794974" }]
        }
      },
      {
        id: "newton-principia", title: "Philosophiæ Naturalis Principia Mathematica", field: "Isaac Newton · 1687",
        summary: "Isaac Newton, 1687.",
        lesson: {
          fiche: [["Titre complet", "Philosophiæ Naturalis Principia Mathematica (traduction littérale : Principes mathématiques de la philosophie naturelle)"], ["Auteur", "Isaac Newton (1642-1727)"], ["Édition", "Londres, imprimé par Joseph Streater pour la Royal Society, vendu notamment chez le libraire Samuel Smith. Édition originale, revue et financée par Edmond Halley, la Royal Society n’ayant plus de fonds."], ["Date de parution", "1687 (la fin de l’impression est signalée par Halley dans une lettre du 5 juillet 1687)"]],
          sections: ["Newton y énonce les trois lois de la dynamique et la loi de la gravitation universelle, et montre qu’une même loi mathématique explique le mouvement des corps sur Terre et celui des astres, en prolongeant les travaux de Copernic, de Galilée et de Kepler. L’ouvrage est divisé en trois livres.", "Edmond Halley a encouragé Newton à l’écrire, a suivi l’impression et a pris en charge son coût. Le livre n’a pas été un succès de librairie immédiat : Newton a offert des exemplaires à des bibliothèques d’universités et de collèges pour écouler une partie du tirage."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Chetham’s Library — le Principia, première édition", url: "https://library.chethams.com/?p=1933" }, { title: "Christie’s — notice de la première édition (Londres, 1687)", url: "https://www.christies.com.cn/lot/lot-1640068" }]
        }
      },
      {
        id: "huygens-traite-de-la-lumiere", title: "Traité de la lumière", field: "Christiaan Huygens · 1690",
        summary: "Christiaan Huygens, 1690.",
        lesson: {
          fiche: [["Titre complet", "Traité de la lumière. Où sont expliquées les causes de ce qui luy arrive dans la reflexion, & dans la refraction. Et particulierement dans l’etrange refraction du cristal d’Islande. Avec un discours de la cause de la pesanteur"], ["Auteur", "Christiaan Huygens (1629-1695)"], ["Édition", "Leyde, chez Pierre (Pieter) van der Aa. Édition originale, en deux parties : le Traité, puis le Discours de la cause de la pesanteur, qui a une page de titre propre."], ["Date de parution", "1690 (le traité était achevé en 1678)"]],
          sections: ["Huygens y expose sa théorie ondulatoire de la lumière : la lumière est une série d’impulsions qui se propage dans l’éther avec une vitesse très grande, mais finie. Il explique la réflexion et la réfraction, y compris la double réfraction du cristal d’Islande.", "Achevé en 1678, le traité est resté douze ans sans être publié, jusqu’à ce que Huygens ait étudié les Principia de Newton. La seconde partie, le Discours de la cause de la pesanteur (écrit en 1669), propose une explication mécanique de la gravité par des tourbillons, qui s’oppose à l’idée newtonienne d’une force attractive universelle. La théorie ondulatoire de Huygens est restée négligée pendant plus d’un siècle, jusqu’à ce que Thomas Young la reprenne pour expliquer les interférences lumineuses."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Penn Libraries — notice de l’édition originale", url: "https://find.library.upenn.edu/catalog/99390953503681" }, { title: "History of Information — Huygens et la théorie ondulatoire de la lumière", url: "https://historyofinformation.com/detail.php?id=2635" }]
        }
      },
      {
        id: "carnot-puissance-motrice-du-feu", title: "Réflexions sur la puissance motrice du feu", field: "Sadi Carnot · 1824",
        summary: "Sadi Carnot, 1824.",
        lesson: {
          fiche: [["Titre complet", "Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance"], ["Auteur", "Sadi Carnot (Nicolas Léonard Sadi Carnot, 1796-1832), ancien élève de l’École polytechnique"], ["Édition", "Paris, chez Bachelier, libraire (118 pages). Édition originale, tirée à environ 600 exemplaires ; c’est le seul livre publié par Carnot de son vivant."], ["Date de parution", "1824"]],
          sections: ["Publié alors que Carnot n’avait que 28 ans, ce livre est motivé par l’amélioration des machines à vapeur. Carnot cherche s’il existe une limite à la puissance motrice qu’on peut tirer de la chaleur. Il montre que cette puissance ne dépend pas de la substance qui fait travailler la machine, mais du passage de la chaleur d’un corps chaud vers un corps froid, et il introduit l’idée d’un cycle, où la machine et la substance reviennent à leur état initial. Il raisonne avec la théorie du calorique.", "Peu remarqué à sa parution, le livre était oublié en 1845, quand C. Holtzmann l’a redécouvert, suivi en 1848 par William Thomson. Il est considéré comme l’œuvre fondatrice de la thermodynamique."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "ULiège (Donum) — notice de l’édition de 1824", url: "https://donum.uliege.be/handle/2268.1/13610" }, { title: "BibNum (OpenEdition) — Réflexions sur la puissance motrice du feu", url: "https://journals.openedition.org/bibnum/858" }]
        }
      },
      {
        id: "maxwell-electricite-magnetisme", title: "A Treatise on Electricity and Magnetism", field: "James Clerk Maxwell · 1873",
        summary: "James Clerk Maxwell, 1873.",
        lesson: {
          fiche: [["Titre complet", "A Treatise on Electricity and Magnetism (traduction littérale : Traité d’électricité et de magnétisme)"], ["Auteur", "James Clerk Maxwell (1831-1879)"], ["Édition", "Oxford, Clarendon Press, deux volumes. Maxwell préparait une deuxième édition quand il est mort en 1879 ; une troisième édition a été établie après sa mort."], ["Date de parution", "1873"]],
          sections: ["Traité en deux volumes qui rassemble l’essentiel de ce que l’on savait de l’électricité et du magnétisme à l’époque, et qui introduit la théorie électromagnétique de façon méthodique et progressive. Les équations de Maxwell y apparaissent pour la première fois sous une forme pleinement développée.", "Maxwell y avance l’hypothèse que la lumière et l’électricité sont de même nature : les ondes électromagnétiques se propagent comme la lumière et à la même vitesse. Le livre n’a eu qu’un impact limité de son vivant ; quelques années après sa mort, la théorie électromagnétique de la lumière a été acceptée comme l’une des théories fondamentales de la physique."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Wikipédia (en) — A Treatise on Electricity and Magnetism", url: "https://en.wikipedia.org/wiki/A_Treatise_on_Electricity_and_Magnetism" }, { title: "Bauman Rare Books — notice de la première édition (Oxford, 1873)", url: "https://www.baumanrarebooks.com/rare-books/maxwell-james-clerk/treatise-on-electricity-and-magnetism/109587.aspx" }]
        }
      },
      {
        id: "curie-traite-de-radioactivite", title: "Traité de radioactivité", field: "Marie Curie · 1910",
        summary: "Marie Curie, 1910.",
        lesson: {
          fiche: [["Titre complet", "Traité de radioactivité, par Madame P. Curie"], ["Auteur", "Marie Curie (Marie Sklodowska Curie, 1867-1934), signant « Madame P. Curie »"], ["Édition", "Paris, Gauthier-Villars, deux tomes (tome I : xiii + 426 pages ; tome II : 548 pages), soit près de mille pages. Édition originale."], ["Date de parution", "Fin 1910"]],
          sections: ["Sept ans après sa thèse de 1903 (un volume de 142 pages), Marie Curie présente dans ce traité un exposé ordonné et systématique de la masse de données accumulées sur la radioactivité. Elle y admet sans réserve la théorie des transformations radioactives.", "Le livre paraît sept ans après le prix Nobel de physique de 1903 (partagé avec Pierre Curie et Henri Becquerel) et un an avant son prix Nobel de chimie, en 1911, pour l’isolement du radium et du polonium."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Nature — compte rendu du Traité de radioactivité (1911)", url: "https://www.nature.com/articles/086001a0" }, { title: "Wellcome Collection — notice bibliographique", url: "https://wellcomecollection.org/works/etcf9krh" }]
        }
      },
      {
        id: "einstein-relativite", title: "Über die spezielle und die allgemeine Relativitätstheorie", field: "Albert Einstein · 1917",
        summary: "Albert Einstein, 1917.",
        lesson: {
          fiche: [["Titre complet", "Über die spezielle und die allgemeine Relativitätstheorie (gemeinverständlich) (traduction littérale : Sur la théorie de la relativité restreinte et générale, exposé accessible à tous)"], ["Auteur", "Albert Einstein"], ["Édition", "Braunschweig (Brunswick), Friedr. Vieweg & Sohn, collection « Sammlung Vieweg », n° 38. Édition anglaise : Relativity: The Special and the General Theory, traduite par Robert Lawson, Londres, Methuen, 1920."], ["Date de parution", "1917 (texte daté de décembre 1916)"]],
          sections: ["Einstein y présente lui-même la théorie de la relativité à des lecteurs qui s’intéressent à la théorie d’un point de vue scientifique général ou philosophique, sans maîtriser l’appareil mathématique de la physique théorique. Il suppose un niveau d’études secondaires et de la patience.", "Le livre comprend une première partie sur la relativité restreinte et une seconde sur la relativité générale. À partir de la troisième édition (1918), une partie intitulée « Considérations sur le monde pris comme un tout » a été ajoutée, ainsi que des annexes dans les éditions suivantes."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Einstein Papers Project (Princeton) — notice du texte", url: "https://einsteinpapers.press.princeton.edu/vol6-doc/448" }, { title: "Notice de bibliothèque (Vieweg, 1917, Sammlung Vieweg 38)", url: "https://relbib.de/Record/324473729" }]
        }
      },
      {
        id: "dirac-principes-mecanique-quantique", title: "The Principles of Quantum Mechanics", field: "Paul A. M. Dirac · 1930",
        summary: "Paul A. M. Dirac, 1930.",
        lesson: {
          fiche: [["Titre complet", "The Principles of Quantum Mechanics (traduction littérale : Les principes de la mécanique quantique)"], ["Auteur", "Paul Adrien Maurice Dirac (1902-1984)"], ["Édition", "Oxford, Clarendon Press, collection « The International Series of Monographs on Physics ». Éditions suivantes : 1935, 1947 et 1958 (4e édition)."], ["Date de parution", "1930"]],
          sections: ["Monographie sur les principes fondamentaux de la mécanique quantique, écrite par l’un de ses créateurs. Dirac y traite la mécanique quantique comme un cadre mathématique dont on tire des grandeurs que l’on peut comparer à l’expérience, sans longue discussion philosophique.", "L’éditeur la présente, dès la troisième édition (1947), comme un classique de la théorie physique moderne dont l’originalité a été reconnue dès la première édition en 1930."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Wikipédia (en) — The Principles of Quantum Mechanics", url: "https://en.wikipedia.org/wiki/The_Principles_of_Quantum_Mechanics" }, { title: "Notice de bibliothèque (4e édition, Clarendon Press, 1958)", url: "https://libop-nifs.nifs.ac.jp/opac/opac_link/bibid/1000082189" }]
        }
      },
      {
        id: "feynman-lectures-on-physics", title: "The Feynman Lectures on Physics", field: "Richard P. Feynman, Robert B. Leighton et Matthew Sands · 1963",
        summary: "Richard P. Feynman, Robert B. Leighton et Matthew Sands, 1963.",
        lesson: {
          fiche: [["Titre complet", "The Feynman Lectures on Physics (traduction littérale : Le cours de physique de Feynman)"], ["Auteur", "Richard P. Feynman, Robert B. Leighton et Matthew Sands"], ["Édition", "Reading (Massachusetts), Addison-Wesley, trois volumes. Le texte est librement consultable en ligne depuis 2013 (Caltech et The Feynman Lectures Website)."], ["Date de parution", "1963-1965 (trois volumes)"]],
          sections: ["Manuel issu du cours de physique que Feynman a donné aux étudiants de première et de deuxième année du California Institute of Technology (Caltech), pendant deux années universitaires à partir de 1961. Le texte n’est pas une transcription mot à mot : il a été édité par Leighton et Sands, avec l’aide de Feynman.", "Il est souvent présenté comme l’un des livres de physique les plus populaires jamais écrits, et il a trouvé un public bien au-delà des étudiants."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "The Feynman Lectures on Physics — édition en ligne (Caltech)", url: "https://feynmanlectures.caltech.edu" }, { title: "Wikipédia (en) — The Feynman Lectures on Physics", url: "https://en.wikipedia.org/wiki/The_Feynman_Lectures_on_Physics" }]
        }
      },
      {
        id: "hawking-breve-histoire-du-temps", title: "A Brief History of Time", field: "Stephen Hawking · 1988",
        summary: "Stephen Hawking, 1988.",
        lesson: {
          fiche: [["Titre complet", "A Brief History of Time: From the Big Bang to Black Holes (traduction littérale : Une brève histoire du temps, du big bang aux trous noirs)"], ["Auteur", "Stephen W. Hawking (1942-2018)"], ["Édition", "Londres (Bantam Press) et New York (Bantam Books), publiés simultanément, avec une introduction de Carl Sagan. Traduction française : Une brève histoire du temps : du big bang aux trous noirs, traduite par Isabelle Naddeo-Souriau, Paris, Flammarion, 1989 (collection « Nouvelle bibliothèque scientifique », 236 pages)."], ["Date de parution", "1988"]],
          sections: ["Premier livre que Hawking a écrit pour le grand public. Plutôt que des équations (le livre n’en contient qu’une, E = mc²), il s’appuie sur le récit et les illustrations pour présenter le big bang, l’expansion de l’Univers, la mécanique quantique, les trous noirs, la flèche du temps et la recherche d’une théorie unifiée de la physique.", "Les chapitres de l’édition française vont de « Notre vision de l’univers » à « L’unification de la physique ». Le premier tirage comportait des erreurs ; il a été retiré et remplacé."],
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: "Notice de l’édition originale (Shapero Rare Books)", url: "https://shapero.com/products/hawking-brief-history-of-time-first-edition-1988-113271" }, { title: "Notice de l’édition française (Flammarion, 1989)", url: "https://ci.nii.ac.jp/ncid/BA07983066" }]
        }
      }
  ]
});
