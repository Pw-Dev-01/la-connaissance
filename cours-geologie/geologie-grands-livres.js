// ---------------------------------------------------------------------------
// Rubrique « Les grands livres de la géologie » : dix ouvrages de référence,
// avec titre, auteur, édition, date de parution et résumé. Les données
// bibliographiques ont été vérifiées sur des notices de bibliothèques,
// d'éditeurs, de commissaires-priseurs et de comptes rendus ; les liens de
// vérification figurent au bas de chaque fiche. Ces fiches n'ont ni formule,
// ni exemple, ni exercice.
// À COLLER À LA TOUTE FIN du fichier de données de géologie, APRÈS le « ]; »
// qui ferme window.courseCatalog.
// ---------------------------------------------------------------------------
window.courseCatalog.push({
  id: 'grands-livres-geologie',
  title: 'Les grands livres de la géologie',
  note: 'Dix ouvrages de référence, d’Agricola à McPhee : titre, auteur, édition, date de parution et résumé de chaque livre.',
  chapters: [
    {
      id: "agricola-de-natura-fossilium",
      title: "De natura fossilium (dans De ortu & causis subterraneorum)",
      field: "Georgius Agricola · 1546",
      summary: "Georgius Agricola, 1546.",
      lesson: {
        fiche: [
          ["Titre complet", "De ortu & causis subterraneorum Lib. V — De natura eorum quae effluunt ex terra Lib. IIII — De natura fossilium Lib. X — De veteribus & novis metallis Lib. II — Bermannus, sive De re metallica dialogus (recueil de cinq textes publié en un volume ; le traité De natura fossilium, « Sur la nature des fossiles », est un traité de minéralogie)"],
          ["Auteur", "Georgius Agricola (Georg Bauer, 1494-1555)"],
          ["Édition", "Bâle, Hieronymus Froben et Nicolaus Episcopius, in-folio (487 pages). Édition originale, dédiée à Maurice de Saxe, prince-électeur."],
          ["Date de parution", "Septembre 1546"]
        ],
        sections: [
          "Recueil de cinq textes d’Agricola, médecin installé à Joachimsthal, sur la géologie, la minéralogie et les mines. Le traité De natura fossilium (dix livres) décrit et classe les minéraux d’après leurs propriétés physiques, comme la couleur, l’éclat, le goût, la forme ou la dureté. Il est souvent cité comme la publication qui marque le début de la minéralogie en tant que science, et vaut à Agricola le surnom de « père de la minéralogie ».",
          "Le même volume contient De ortu et causis subterraneorum, considéré comme le premier ouvrage de géologie physique, et De veteribus et novis metallis, première histoire de l’exploitation des minerais, ainsi que la réédition du dialogue Bermannus, premier ouvrage d’Agricola sur les mines (paru en 1530). Son grand traité sur les techniques minières, De re metallica, paraît à Bâle en 1556."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Université de l’Illinois — Agricola, De ortu et causis subterraneorum (Bâle, 1546)", url: "https://xray-exhibit.scs.illinois.edu/books/agricola.php" },
          { title: "Christie’s — notice de l’édition originale (Bâle, Froben et Episcopius, 1546)", url: "https://www.christies.com.cn/lot/lot-923942" }
        ]
      }
    },
    {
      id: "steno-de-solido",
      title: "De solido intra solidum naturaliter contento dissertationis prodromus",
      field: "Nicolas Steno · 1669",
      summary: "Nicolas Steno, 1669.",
      lesson: {
        fiche: [
          ["Titre complet", "De solido intra solidum naturaliter contento dissertationis prodromus (traduction littérale : Prodrome d’une dissertation sur un solide naturellement contenu dans un solide)"],
          ["Auteur", "Nicolas Steno (Niels Steensen, 1638-1686), anatomiste et naturaliste danois, devenu évêque catholique"],
          ["Édition", "Florence, imprimerie « à l’enseigne de l’Étoile » (Ex typographia sub signo Stellae), in-4°. Édition originale, dédiée à Ferdinand II de Médicis, grand-duc de Toscane."],
          ["Date de parution", "1669"]
        ],
        sections: [
          "Steno, avant tout anatomiste, écrit ce texte comme une introduction à un ouvrage plus vaste qu’il n’a jamais publié. Il y avance que les couches de l’écorce terrestre gardent la trace d’une suite d’événements dans l’ordre chronologique, ce qui permet de reconstituer l’histoire de la Terre. Le livre est célébré comme un texte fondateur de la géologie moderne, de la stratigraphie et de la cristallographie.",
          "La tête d’un requin, apportée à Florence et confiée à Steno, joue un rôle déclencheur dans sa réflexion sur les fossiles, qu’il reconnaît comme les restes d’êtres vivants. Le livre énonce aussi la constance des angles entre les faces des cristaux de quartz, et contient la première tentative de représenter des coupes géologiques : six étapes successives de la stratification du sol toscan."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Inters.org — Steno, The Prodromus to a Dissertation concerning Solids Naturally Contained within Solids", url: "https://inters.org/node/1713" },
          { title: "Christie’s — notice de la première édition (Florence, 1669)", url: "https://www.christies.com.cn/lot/lot-933911" },
          { title: "University of Reading, Special Collections — Stones, Sharks and Steno’s De Solido", url: "https://collections.reading.ac.uk/special-collections/?p=9204" }
        ]
      }
    },
    {
      id: "hutton-theory-of-the-earth",
      title: "Theory of the Earth, with Proofs and Illustrations",
      field: "James Hutton · 1795",
      summary: "James Hutton, 1795.",
      lesson: {
        fiche: [
          ["Titre complet", "Theory of the Earth, with Proofs and Illustrations. In Four Parts (traduction littérale : Théorie de la Terre, avec preuves et illustrations, en quatre parties)"],
          ["Auteur", "James Hutton (1726-1797), médecin et géologue écossais"],
          ["Édition", "Édimbourg, imprimé pour Messrs Cadell, Junior, and Davies (Londres) et William Creech (Édimbourg). Deux volumes, correspondant aux parties 1 et 2 des quatre annoncées. Un troisième volume, établi plus tard par Archibald Geikie à partir des manuscrits de Hutton, a paru ensuite."],
          ["Date de parution", "1795"]
        ],
        sections: [
          "Hutton avait présenté sa théorie à la Royal Society of Edinburgh en 1785 (le texte a paru dans les Transactions de la société en 1788). En 1795, il la republie sous forme de livre, dans une version très augmentée. Il y soutient que la surface de la Terre est façonnée par des forces lentes et continues, agissant pendant de très longues durées.",
          "Cette idée, que l’on appellera plus tard uniformitarisme, s’opposait à celle de la plupart des naturalistes de l’époque, qui attribuaient les changements de la surface terrestre à des catastrophes soudaines. Le livre, prévu en quatre parties, est resté inachevé : Hutton est mort en 1797, après la publication des deux premières."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Thomas Fisher Rare Book Library (Toronto) — Hutton, Theory of the Earth", url: "https://fisherdigitus.library.utoronto.ca/exhibits/show/sciencehighlights/hutton--theory-of-earth-" },
          { title: "Wellcome Collection — notice de l’édition de 1795", url: "https://preview.wellcomecollection.org/works/u3697mde" },
          { title: "University of Wisconsin-Madison — Hutton, Theory of the earth (1795)", url: "https://www.library.wisc.edu/specialcollections/2017/04/22/earth-day" }
        ]
      }
    },
    {
      id: "cuvier-ossemens-fossiles",
      title: "Recherches sur les ossemens fossiles de quadrupèdes",
      field: "Georges Cuvier · 1812",
      summary: "Georges Cuvier, 1812.",
      lesson: {
        fiche: [
          ["Titre complet", "Recherches sur les ossemens fossiles de quadrupèdes, où l’on rétablit les caractères de plusieurs espèces d’animaux que les révolutions du globe paroissent avoir détruites"],
          ["Auteur", "Georges Cuvier (1769-1832), baron"],
          ["Édition", "Paris, chez Deterville, quatre volumes in-4°, avec plus de 150 planches gravées. Édition originale. Le premier volume comprend un Discours préliminaire et l’Essai sur la géographie minéralogique des environs de Paris, rédigé avec Alexandre Brongniart."],
          ["Date de parution", "1812"]
        ],
        sections: [
          "Recueil de mémoires de paléontologie, d’ostéologie (notamment des dents) et de stratigraphie. Dès les années 1790, Cuvier avait montré, à partir de fossiles de grands mammifères comme les mammouths, que l’extinction d’espèces est un fait scientifique.",
          "En reconstituant, à partir des os, l’aspect d’animaux disparus, Cuvier fonde la paléontologie des vertébrés. Il attribue la disparition de ces espèces à des « révolutions du globe », notion à laquelle Lyell opposera plus tard sa théorie du changement graduel."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "ABAA — notice de l’édition originale (Paris, Deterville, 1812)", url: "https://www.abaa.org/book/171787233" },
          { title: "Christie’s — notice de l’édition originale (4 volumes, 1812)", url: "https://www.christies.com.cn/lot/lot-933498" },
          { title: "Smithsonian Libraries — Recherches sur les ossemens fossiles de quadrupèdes, t. 3", url: "https://library.si.edu/es/digital-library/book/recherchessurles31812cuvi" }
        ]
      }
    },
    {
      id: "lyell-principles-of-geology",
      title: "Principles of Geology",
      field: "Charles Lyell · 1830-1833",
      summary: "Charles Lyell, 1830-1833.",
      lesson: {
        fiche: [
          ["Titre complet", "Principles of Geology, being an Attempt to Explain the Former Changes of the Earth’s Surface, by Reference to Causes now in Operation (traduction littérale : Principes de géologie, essai d’explication des changements passés de la surface de la Terre par référence aux causes actuellement à l’œuvre)"],
          ["Auteur", "Charles Lyell (1797-1875), géologue écossais"],
          ["Édition", "Londres, John Murray, trois volumes in-8°, parus en 1830, 1832 et 1833. Édition originale, tirée à 1 500 exemplaires."],
          ["Date de parution", "1830-1833"]
        ],
        sections: [
          "Lyell veut expliquer les changements passés de la surface de la Terre par des causes encore à l’œuvre aujourd’hui. Il popularise ainsi l’uniformitarisme, d’abord suggéré par Hutton dans Theory of the Earth (1795), et s’impose comme un grand théoricien de la géologie. Le livre présente aussi, pour la première fois, sa division des terrains tertiaires en Éocène, Miocène et Pliocène.",
          "Darwin lit l’ouvrage pendant le voyage du Beagle et en est profondément influencé. Lyell révise le livre dans de nombreuses éditions et reporte une partie de sa matière dans ses Elements of Geology (1838) ; la dixième édition (1865-1868) est profondément remaniée pour tenir compte de L’Origine des espèces de Darwin."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Wikipédia (en) — Principles of Geology", url: "https://en.wikipedia.org/wiki/Principles_of_Geology" },
          { title: "Wellcome Collection — notice de l’édition de 1830-1833 (3 volumes)", url: "https://wellcomecollection.org/works/ercxh6jg" },
          { title: "Bauman Rare Books — notice de la première édition (Londres, 1830-1833)", url: "https://www.baumanrarebooks.com/rare-books/lyell-charles/principles-of-geology/87276.aspx" }
        ]
      }
    },
    {
      id: "agassiz-etudes-sur-les-glaciers",
      title: "Études sur les glaciers",
      field: "Louis Agassiz · 1840",
      summary: "Louis Agassiz, 1840.",
      lesson: {
        fiche: [
          ["Titre complet", "Études sur les glaciers. Ouvrage accompagné d’un atlas de 32 planches"],
          ["Auteur", "Louis Agassiz (1807-1873)"],
          ["Édition", "Neuchâtel, aux frais de l’auteur, en vente chez Jent et Gassmann, libraires à Soleure. Un volume de texte in-8° (346 pages) et un atlas in-folio, lithographié par H. Nicolet à Neuchâtel d’après les dessins de Joseph Bettannier ; l’atlas compte 18 planches, dont 14 avec un calque explicatif. Édition originale."],
          ["Date de parution", "1840"]
        ],
        sections: [
          "Agassiz y expose la théorie des glaciers — leur formation, leurs caractères, leurs mouvements et leurs oscillations dans le temps — à partir d’observations faites sur les grands glaciers des Alpes. Le livre est considéré comme le premier ouvrage de glaciologie et comme le texte fondateur de la géologie glaciaire.",
          "En s’appuyant sur les travaux de Charpentier, Agassiz défend l’idée d’une grande période glaciaire : les blocs erratiques et les roches polies ou striées s’expliquent par d’anciens glaciers, et non par le Déluge ou par de grandes catastrophes. Il publiera une suite, Nouvelles études et expériences sur les glaciers actuels, à Paris, chez Victor Masson, en 1847."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Scott Polar Research Institute (Cambridge) — notice des Études sur les glaciers", url: "https://www.spri.cam.ac.uk/library/catalogue/records/202683/" },
          { title: "Christie’s — notice de l’édition originale (Neuchâtel, 1840)", url: "https://www.christies.com.cn/lot/lot-1339592" },
          { title: "Bibliorare — notice de l’édition originale (texte et atlas)", url: "https://www.bibliorare.com/lot/520059" }
        ]
      }
    },
    {
      id: "suess-antlitz-der-erde",
      title: "Das Antlitz der Erde",
      field: "Eduard Suess · 1883-1909",
      summary: "Eduard Suess, 1883-1909.",
      lesson: {
        fiche: [
          ["Titre complet", "Das Antlitz der Erde (traduction littérale : La Face de la Terre)"],
          ["Auteur", "Eduard Suess (1831-1914), professeur de géologie à l’université de Vienne"],
          ["Édition", "Prague puis Vienne, F. Tempsky ; Leipzig, G. Freytag. Trois volumes (le troisième en deux parties), complétés en 1909 par un volume d’index (Namens- und Sachregister) dû à Lukas Waagen. Traduction française : La Face de la Terre, sous la direction d’Emmanuel de Margerie, Paris, A. Colin. Traduction anglaise : The Face of the Earth, Oxford, Clarendon Press, par H. B. C. Sollas."],
          ["Date de parution", "1883-1909"]
        ],
        sections: [
          "Synthèse mondiale de la géologie, publiée sur plus de vingt-cinq ans, de 1883 à 1909. Suess y décrit l’évolution de la surface de la Terre à l’échelle du globe, et remplace la théorie des « soulèvements » d’Élie de Beaumont. Il est le créateur de notions devenues classiques, comme la Téthys et le Gondwana.",
          "Un compte rendu publié par la revue Nature en 1902, à la parution de la première moitié du troisième volume, estime qu’aucun traité général de géologie n’avait eu autant d’influence depuis les Principles de Lyell. La parution du dernier volume, en 1909, est saluée comme l’achèvement d’un ouvrage de référence."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Nature — compte rendu de la fin de l’ouvrage (1909-1910)", url: "https://www.nature.com/articles/083451a0" },
          { title: "Comptes Rendus Géoscience — Eduard Suess et sa fresque mondiale La face de la Terre", url: "https://comptes-rendus.academie-sciences.fr/geoscience/item/10.1016/j.crte.2006.11.003.pdf" },
          { title: "Christie’s — notice de l’édition originale (Prague, Tempsky ; Leipzig, Freytag)", url: "https://www.christies.com.cn/lot/lot-1340019" }
        ]
      }
    },
    {
      id: "wegener-continents-et-oceans",
      title: "Die Entstehung der Kontinente und Ozeane",
      field: "Alfred Wegener · 1915",
      summary: "Alfred Wegener, 1915.",
      lesson: {
        fiche: [
          ["Titre complet", "Die Entstehung der Kontinente und Ozeane (traduction littérale : L’origine des continents et des océans)"],
          ["Auteur", "Alfred Wegener (1880-1930), météorologue allemand"],
          ["Édition", "Braunschweig (Brunswick), Vieweg & Sohn, collection « Sammlung Vieweg », n° 23, 94 pages. Éditions suivantes, très remaniées : 2e édition en 1920 (collection « Die Wissenschaft », n° 66), 3e édition en 1922, 4e édition en 1929."],
          ["Date de parution", "1915 (première édition achevée en mars 1915)"]
        ],
        sections: [
          "Wegener y développe sa théorie de la dérive des continents : l’Amérique du Sud et l’Afrique sont des fragments d’un ancien continent plus vaste, ce que suggèrent la forme de leurs côtes et leurs structures géologiques. Il avait présenté ses idées une première fois le 6 janvier 1912, lors de la session annuelle de l’Union géologique à Francfort-sur-le-Main.",
          "La première édition, écrite en pleine Première Guerre mondiale, tient en douze chapitres et 94 pages. La théorie suscite peu d’intérêt avant la deuxième édition (1920), entièrement remaniée par Wegener. La traduction anglaise, de J. G. A. Skerl, a été faite d’après la troisième édition allemande de 1922."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Projekt Gutenberg — Die Entstehung der Kontinente und Ozeane (2e édition, 1920)", url: "https://www.gutenberg.org/ebooks/45460" },
          { title: "VLIZ — Wegener, histoire des éditions de Die Entstehung der Kontinente und Ozeane", url: "https://www.vliz.be/imisdocs/publications/ocrd/358011.pdf" },
          { title: "Environment & Society Portal — Wegener’s The Origin of Continents and Oceans", url: "https://www.environmentandsociety.org/tools/keywords/wegeners-origin-continents-and-oceans" }
        ]
      }
    },
    {
      id: "holmes-principles-of-physical-geology",
      title: "Principles of Physical Geology",
      field: "Arthur Holmes · 1944",
      summary: "Arthur Holmes, 1944.",
      lesson: {
        fiche: [
          ["Titre complet", "Principles of Physical Geology (traduction littérale : Principes de géologie physique)"],
          ["Auteur", "Arthur Holmes (1890-1965), géologue britannique, professeur de géologie à l’université d’Édimbourg jusqu’à sa retraite en 1956"],
          ["Édition", "Londres, Thomas Nelson and Sons (mention « First published September 1944 »), xii + 532 pages, 95 planches et 262 illustrations. Éditions suivantes : 2e édition entièrement revue (1965), 3e édition (1978, avec Doris Holmes), 4e édition (1993, avec Donald Duff)."],
          ["Date de parution", "Septembre 1944"]
        ],
        sections: [
          "Manuel de géologie physique devenu un ouvrage de référence au Royaume-Uni et ailleurs. Holmes, déjà connu pour son livre The Age of the Earth (1913), y expose les principes de la géologie physique, et le livre se termine par un chapitre sur la dérive des continents.",
          "Holmes est mort en 1965. Son manuel a continué à être réédité après lui : une deuxième édition entièrement revue en 1965, puis une troisième en 1978 et une quatrième en 1993, préparées avec d’autres auteurs."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "National Library of Ireland — notice de la première édition (Nelson, 1944)", url: "https://catalogue.nli.ie/Record/vtls000406909" },
          { title: "Wikipédia (en) — Arthur Holmes", url: "https://en.wikipedia.org/wiki/Arthur_Holmes" },
          { title: "Co-Curate (Newcastle) — Arthur Holmes (1890-1965)", url: "https://co-curate.ncl.ac.uk/arthur-holmes-1890-1965" }
        ]
      }
    },
    {
      id: "mcphee-annals-of-the-former-world",
      title: "Annals of the Former World",
      field: "John McPhee · 1998",
      summary: "John McPhee, 1998.",
      lesson: {
        fiche: [
          ["Titre complet", "Annals of the Former World (traduction littérale : Annales du monde d’avant)"],
          ["Auteur", "John McPhee (né en 1931), écrivain et journaliste américain, rédacteur au New Yorker et professeur à l’université de Princeton"],
          ["Édition", "New York, Farrar, Straus and Giroux, édition originale (ISBN 0-374-10520-4). Le volume rassemble cinq livres : Basin and Range (1981), In Suspect Terrain (1983), Rising from the Plains (1986), Assembling California (1993) et Crossing the Craton, inédit, avec vingt-cinq cartes nouvelles et une « table des matières narrative »."],
          ["Date de parution", "1998 (prix Pulitzer de non-fiction générale en 1999)"]
        ],
        sections: [
          "Pendant vingt ans à partir de 1978, McPhee a parcouru les États-Unis en compagnie de géologues, le long d’une coupe transversale de l’Amérique du Nord proche du quarantième parallèle. Il en tire une histoire géologique du continent, qui fait aussi le portrait des géologues et de leur manière de travailler.",
          "Les quatre premiers livres avaient d’abord paru séparément, de 1981 à 1993 ; le cinquième, Crossing the Craton, est inédit. L’ouvrage, que l’on peut lire en suivant plusieurs chemins, a obtenu le prix Pulitzer de non-fiction générale en 1999."
        ],
        sourcesHeading: "Notices bibliographiques",
        sources: [
          { title: "Wikipédia (en) — Annals of the Former World", url: "https://en.wikipedia.org/wiki/Annals_of_the_Former_World" },
          { title: "Westchester Library System — notice de la première édition (FSG, 1998)", url: "https://opac.westchesterlibraries.org/Record/3169876" },
          { title: "Université de Princeton — John McPhee", url: "https://humanities.princeton.edu/people/john-mcphee/" }
        ]
      }
    }
  ]
});
