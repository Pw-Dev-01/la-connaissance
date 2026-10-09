// Catalogue du cours de géologie : 3 branches, 6 chapitres et 1 cours approfondi.
// Sources scientifiques en bas de chaque leçon (bloc « RÉFÉRENCES ») et à la fin
// du cours approfondi (bloc « SOURCES »). Le cours approfondi « Géodynamique et
// histoire de la planète » est une page dédiée : son entrée utilise « href » et
// « sections » au lieu de « chapters » (voir catalogue.js). OpenStax est utilisé
// en priorité (Astronomy 2e, Chemistry 2e), complété par le manuel ouvert
// « Physical Geology » (2e éd., Steven Earle, BCcampus, CC BY 4.0) et par l'USGS.
window.courseCatalog = [
  {
    id: 'materiaux-terrestres',
    title: 'Matériaux terrestres',
    note: 'Minéraux, roches magmatiques et cycle des roches : identifier la matière.',
    chapters: [
      {
        id: 'mineraux',
        title: 'Minéraux : cristaux et propriétés',
        field: 'Minéralogie · bases',
        summary: 'Structure cristalline, liaisons, familles de minéraux et identification.',
        lesson: {
          sections: [
            'Un minéral est un solide naturel, généralement inorganique, de composition chimique définie et dont les atomes sont ordonnés selon une structure cristalline : c’est cet ordre qui distingue un cristal d’un verre.',
            'La liaison chimique contrôle les propriétés : les liaisons covalentes fortes donnent des minéraux durs comme le diamant, tandis que les liaisons faibles entre feuillets expliquent le clivage parfait des micas et la douceur du talc.',
            'Identifier un minéral combine sept tests : la dureté (échelle de Mohs), la couleur du trait sur porcelaine, l’éclat (métallique, vitreux, gras, soyeux, terne), le clivage (plans de rupture nets) ou la cassure (irrégulière ou conchoïdale), la densité, la forme cristalline et, pour quelques espèces, des tests particuliers comme l’effervescence des carbonates à l’acide.',
            'Les silicates forment la famille la plus abondante de la croûte : leurs tétraèdres silicium-oxygène s’assemblent en édifices isolés (olivine), en chaînes simples (pyroxènes) ou doubles (amphiboles), en feuillets (micas, argiles) ou en réseaux tridimensionnels (quartz, feldspaths). Les autres groupes rassemblent les oxydes, sulfures, sulfates, halogénures, carbonates et minéraux natifs.',
            'Le quartz (SiO₂, dureté 7, sans clivage, cassure conchoïdale) et la calcite (CaCO₃, dureté 3, trois directions de clivage, effervescence à l’acide) illustrent la démarche : deux minéraux incolores se distinguent sans ambiguïté par la dureté, le clivage et le test à l’acide.'
          ],
          formula: {
            label: 'ÉCHELLE DE MOHS',
            text: 'talc 1 < gypse 2 < calcite 3 < fluorine 4 < apatite 5 < orthose 6 < quartz 7 < topaze 8 < corindon 9 < diamant 10'
          },
          equationDetails: [
            {
              title: 'Lire un test de dureté',
              formula: 'repère inférieur < dureté < repère supérieur',
              explanation: 'La dureté Mohs est relative : un minéral raye tous les repères plus tendres et est rayé par tous les repères plus durs. Les repères usuels de terrain sont l’ongle (≈ 2,5), la pièce de cuivre (≈ 3,5), le verre (≈ 5,5) et la lame d’acier (≈ 6,5).',
              parameters: 'Repères exprimés en dureté Mohs ; le test se fait sur une surface fraîche, en rayant franchement puis en vérifiant qu’une strie (et non une simple trace de poudre) a bien été creusée.',
              example: 'Exemple : un échantillon raye le verre mais est rayé par l’acier ; sa dureté est donc comprise entre 5,5 et 6,5, ce qui correspond par exemple à l’orthose (6).',
              result: 'Encadrer la dureté entre deux repères, jamais l’annoncer au dixième.'
            },
            {
              title: 'Distinguer clivage et cassure',
              formula: 'clivage : plans nets répétés  |  cassure : surface irrégulière',
              explanation: 'Le clivage suit des plans de faiblesse du cristal et se répète parallèlement à lui-même (une, deux ou trois directions) ; la cassure ne suit aucun plan et donne des surfaces quelconques, parfois conchoïdales comme celle du quartz.',
              parameters: 'Observer plusieurs fragments : un plan qui réapparaît systématiquement signale un clivage ; une surface différente à chaque coup signale une cassure.',
              example: 'Exemple : la calcite se divise en rhomboèdres répétés (trois directions de clivage), tandis que le quartz casse en surfaces courbes imprévisibles.',
              result: 'Compter les directions de clivage : un critère aussi discriminant que la dureté.'
            }
          ],
          example: {
            statement: 'Un échantillon raye le verre (dureté ≈ 5,5) mais est rayé par une lame d’acier (dureté ≈ 6,5). Que peut-on dire de sa dureté ?',
            calculation: 'Le minéral est plus dur que 5,5 et moins dur que 6,5 : sa dureté Mohs se situe entre ces deux repères, ce qui correspond par exemple à l’orthose (6).',
            answer: 'La dureté du minéral est comprise entre 5,5 et 6,5.'
          },
          exercise: {
            question: 'Un minéral raye la calcite (3) et l’ongle (≈ 2,5) mais pas la fluorine (4). Quelle est sa dureté ?',
            answer: 'Sa dureté est strictement supérieure à 3 et inférieure à 4.'
          },
          exercises: [
            {
              question: 'Un minéral raye la calcite (3) et l’ongle (≈ 2,5) mais pas la fluorine (4). Quelle est sa dureté ?',
              answer: 'Sa dureté est strictement supérieure à 3 et inférieure à 4.'
            },
            {
              question: 'Deux échantillons incolores : l’un présente trois directions de clivage et fait effervescence à l’acide, l’autre casse en surfaces courbes et raye le verre. Les identifier.',
              answer: 'Le premier est une calcite (clivage triple, carbonate) ; le second est un quartz (cassure conchoïdale, dureté 7).'
            },
            {
              question: 'Un minéral feuilleté se divise en lamelles transparentes et se raye à l’ongle. Quel groupe et quel test confirment l’identification ?',
              answer: 'Un mica (silicate en feuillets) ; le clivage parfait en lamelles et la dureté inférieure à 2,5 orientent vers la muscovite ou la biotite.'
            }
          ],
          sources: [
            { title: 'Physical Geology, 2e éd. — Chapitre 2 : Minerals', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-minerals/' },
            { title: 'OpenStax Chemistry 2e — 2.4 Chemical Formulas', url: 'https://openstax.org/books/chemistry-2e/pages/2-4-chemical-formulas' }
          ]
        }
      } // FIN CHAPITRE mineraux
      ,
      {
        id: 'roches-magmatiques',
        title: 'Roches magmatiques et cycle des roches', // CHAPITRE roches
        field: 'Pétrologie · bases',
        summary: 'Refroidissement du magma, classification et transformations du cycle.',
        lesson: {
          sections: [
            'Une roche magmatique se forme par solidification d’un magma : lentement en profondeur (roche intrusive ou plutonique, gros cristaux visibles à l’œil nu comme le granite), ou rapidement en surface (roche extrusive ou volcanique, cristaux fins, pâte microlithique ou verre comme le basalte). La taille des cristaux raconte donc la vitesse de refroidissement avant de raconter la composition.',
            'La classification croise la teneur en silice et la taille des cristaux : les roches felsiques sont riches en silice et de teinte claire (granite en profondeur, rhyolite en surface, avec quartz et feldspaths alcalins), les roches mafiques en sont pauvres et de teinte sombre (gabbro en profondeur, basalte en surface, avec pyroxène, olivine et feldspath calcique), les roches intermédiaires occupent le milieu (diorite, andésite). À composition égale, le granite est l’équivalent intrusif de la rhyolite et le gabbro celui du basalte.',
            'La série de Bowen ordonne la cristallisation : l’olivine cristallise en premier à haute température, puis les pyroxènes, les amphiboles, la biotite, et enfin le quartz à basse température, tandis que les feldspaths évoluent du pôle calcique vers le pôle sodique puis potassique. Un magma qui perd ses premiers cristaux s’appauvrit en fer et magnésium et s’enrichit en silice : c’est la différenciation magmatique.',
            'Le cycle des roches relie les trois familles : une roche magmatique exposée s’altère et s’érode en sédiments qui, compactés et cimentés, deviennent roche sédimentaire ; enfouie, toute roche se transforme par pression et température en roche métamorphique ; fondue partiellement ou totalement, elle redonne un magma. Aucun point de départ n’est imposé : le cycle décrit des transformations, pas une histoire unique.'
          ],
          formula: {
            label: 'CLASSIFICATION CROISÉE',
            text: 'felsique (riche en SiO₂) → intermédiaire → mafique (pauvre en SiO₂)  |  intrusive (lente) ↔ extrusive (rapide)'
          },
          equationDetails: [
            {
              title: 'Lire la granularité',
              formula: 'intrusive : cristaux jointifs visibles  |  extrusive : pâte fine ou verre',
              explanation: 'Un refroidissement lent laisse le temps aux cristaux de croître : la roche est grenue (texture phanéritique). Un refroidissement rapide fige des microlites ou du verre : la roche est aphanitique, parfois avec quelques grands cristaux (phénocristaux) hérités d’un début de cristallisation lente.',
              parameters: 'Observer à l’œil nu puis à la loupe : si aucun cristal n’est discernable, la roche est extrusive ; si tous les cristaux s’emboîtent, elle est intrusive.',
              example: 'Exemple : un granite montre quartz, feldspath et mica en cristaux millimétriques emboîtés ; un basalte montre une pâte sombre homogène où seuls quelques phénocristaux se distinguent.',
              result: 'La texture donne la vitesse, la couleur donne la composition : croiser les deux.'
            },
            {
              title: 'Appliquer la série de Bowen',
              formula: 'olivine → pyroxène → amphibole → biotite → quartz  |  feldspath Ca → Na → K',
              explanation: 'Les minéraux ne cristallisent pas ensemble mais successivement, du plus réfractaire au plus fusible. Retirer les premiers cristaux du liquide (décantation, filtrage) fait évoluer le magma résiduel vers le pôle felsique : un basalte peut ainsi engendrer une andésite puis une rhyolite.',
              parameters: 'Série discontinue (ferromagnésiens) et série continue (feldspaths) ; la différenciation exige une séparation physique entre cristaux et liquide.',
              example: 'Exemple : l’olivine, premier minéral à cristalliser, s’accumule au fond de la chambre et le liquide restant s’enrichit en silice.',
              result: 'Ordre de cristallisation = ordre inverse de fusion.'
            }
          ],
          example: {
            statement: 'Un échantillon sombre à gros cristaux contient pyroxène et feldspath calcique. Dans quelle famille le classer et quel est son équivalent volcanique ?',
            calculation: 'La couleur sombre indique une roche mafique et les gros cristaux un refroidissement lent : c’est un gabbro, équivalent intrusif du basalte.',
            answer: 'C’est un gabbro ; son équivalent extrusif est le basalte.'
          },
          exercise: {
            question: 'Une lave claire et visqueuse refroidit brutalement en surface. Quel type de roche obtient-on : felsique ou mafique, intrusive ou extrusive ?',
            answer: 'On obtient une roche felsique extrusive, par exemple une rhyolite.'
          },
          exercises: [
            {
              question: 'Une lave claire et visqueuse refroidit brutalement en surface. Quel type de roche obtient-on : felsique ou mafique, intrusive ou extrusive ?',
              answer: 'On obtient une roche felsique extrusive, par exemple une rhyolite.'
            },
            {
              question: 'Un échantillon sombre à gros cristaux contient pyroxène et feldspath calcique. Le classer et donner son équivalent volcanique.',
              answer: 'Gabbro (mafique intrusif) ; son équivalent extrusif est le basalte.'
            },
            {
              question: 'Un magma basaltique perd son olivine par décantation. Dans quel sens évolue le liquide résiduel et pourquoi ?',
              answer: 'Vers le pôle felsique : l’olivine emporte fer et magnésium, le liquide restant s’enrichit relativement en silice (différenciation de Bowen).'
            }
          ],
          sources: [
            { title: 'Physical Geology, 2e éd. — Chapitre 3 : Intrusive Igneous Rocks', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/3-intrusive-igneous-rocks/' },
            { title: 'Physical Geology, 2e éd. — Chapitre 4 : Volcanism', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/4-volcanism/' }
          ]
        }
      }
    ]
  },
  {
    id: 'dynamique-interne',
    title: 'Dynamique interne',
    note: 'Plaques, séismes et déformations : comprendre le moteur de la planète.',
    chapters: [
      {
        id: 'tectonique-plaques',
        title: 'Tectonique des plaques',
        field: 'Géodynamique · bases',
        summary: 'Frontières de plaques, expansion océanique et moteur du mouvement.',
        lesson: {
          sections: [
            'La lithosphère rigide (croûte et manteau supérieur rigide, de l’ordre de 100 km d’épaisseur) est découpée en plaques qui se déplacent sur l’asthénosphère ductile. Les plaques portent tantôt de la croûte océanique (fine, dense, basaltique), tantôt de la croûte continentale (épaisse, légère, granitique) : cette différence de densité commande leur comportement aux frontières.',
            'Aux dorsales océaniques, les plaques divergent : la décompression fait fondre le manteau, le magma construit un nouveau plancher et les anomalies magnétiques s’enregistrent symétriquement de part et d’autre de l’axe. Dans les zones de subduction, la lithosphère océanique âgée et dense plonge sous la plaque voisine au niveau des fosses ; le long des failles transformantes, les plaques coulissent horizontalement sans création ni destruction.',
            'La collision de deux croûtes continentales, trop légères pour subduire, empile les terrains et édifie les chaînes de montagnes ; la subduction d’une plaque océanique sous un continent engendre un arc volcanique parallèle à la fosse. Les volcans d’Islande illustrent le cas divergent, ceux des Andes le cas convergent.',
            'Le mouvement est entretenu par la chaleur interne : la traction du panneau plongeant tire la plaque vers la fosse, la poussée à la dorsale l’écarte de l’axe, et la convection du manteau l’entraîne par couplage visqueux. Les vitesses, de quelques centimètres par an, s’accumulent en milliers de kilomètres sur les temps géologiques.'
          ],
          formula: {
            label: 'TROIS FRONTIÈRES',
            text: 'divergente (construction)  |  convergente (subduction ou collision)  |  transformante (coulissage)'
          },
          equationDetails: [
            {
              title: 'Reconnaître une frontière sur le terrain',
              formula: 'dorsale + anomalies symétriques = divergence  |  fosse + arc volcanique = subduction',
              explanation: 'Chaque frontière possède une signature : relief axial et magnétisme symétrique pour la divergence, fosse profonde et volcanisme d’arc pour la subduction, décalage horizontal sans volcanisme pour la transformante. Les chaînes intracontinentales sans fosse active signalent une collision ancienne ou en cours.',
              parameters: 'Indices : topographie (dorsale, fosse, chaîne), volcanisme (absent, axial, d’arc), sismicité (superficielle, intermédiaire, profonde).',
              example: 'Exemple : une fosse bordée d’un arc volcanique parallèle et de séismes profonds signe une subduction ; une vallée axiale volcanique au milieu d’un océan signe une dorsale.',
              result: 'Lire relief, volcanisme et profondeur des séismes ensemble.'
            },
            {
              title: 'Relier subduction, séismes et volcans',
              formula: 'séismes profonds le long du panneau + volcans à ~100 km au-dessus = subduction active',
              explanation: 'Le panneau plongeant devient cassant et génère des séismes jusqu’à environ 660 km de profondeur ; les fluides qu’il libère abaissent le point de fusion du manteau voisin et alimentent l’arc volcanique en surface, décalé vers l’intérieur par rapport à la fosse.',
              parameters: 'Plan de Wadati-Benioff : alignement des foyers qui dessine le panneau ; distance fosse-arc de l’ordre de 100 à 200 km selon la géométrie locale.',
              example: 'Exemple : sous les Andes, les foyers s’alignent le long du panneau Nazca et le volcanisme andin se développe une centaine de kilomètres en arrière de la fosse.',
              result: 'Sismicité profonde + arc = panneau en cours de descente.'
            }
          ],
          example: {
            statement: 'De part et d’autre d’une dorsale, des basaltes symétriques présentent la même anomalie magnétique. Qu’en déduire ?',
            calculation: 'Les deux flancs se sont formés en même temps à l’axe puis ont été transportés de chaque côté.',
            answer: 'Le plancher océanique s’écarte symétriquement de la dorsale.'
          },
          exercise: {
            question: 'Une fosse profonde borde un arc volcanique actif. Quel type de frontière est en jeu ?',
            answer: 'Une frontière convergente avec subduction.'
          },
          exercises: [
            {
              question: 'Une fosse profonde borde un arc volcanique actif. Quel type de frontière est en jeu ?',
              answer: 'Une frontière convergente avec subduction.'
            },
            {
              question: 'Des anomalies magnétiques strictement symétriques encadrent une vallée axiale volcanique au milieu d’un océan. Interpréter.',
              answer: 'Une dorsale en divergence : le plancher neuf s’enregistre à l’axe puis s’écarte symétriquement.'
            },
            {
              question: 'Deux massifs continentaux se chevauchent sans fosse ni volcanisme d’arc. Quel régime et quel relief attendre ?',
              answer: 'Une collision continentale : empilement de nappes, épaississement crustal et chaîne de montagnes.'
            }
          ],
          sources: [
            { title: 'Physical Geology, 2e éd. — Chapitre 10 : Plate Tectonics', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/10-plate-tectonics/' },
            { title: 'OpenStax Astronomy 2e — 8.2 Earth’s Crust : croûte, tectonique des plaques, chaleur interne', url: 'https://openstax.org/books/astronomy-2e/pages/8-2-earths-crust' }
          ]
        }
      } // FIN CHAPITRE tectonique
      ,
      {
        id: 'seismes',
        title: 'Séismes : ondes et magnitude',
        field: 'Sismologie · intermédiaire',
        summary: 'Rebond élastique, ondes sismiques, intensité et magnitude.',
        lesson: {
          sections: [
            'Un séisme libère brutalement l’énergie accumulée par déformation élastique le long d’une faille : les blocs se chargent comme un ressort puis glissent en quelques secondes, c’est le rebond élastique. Le foyer (hypocentre) est le point de rupture en profondeur ; l’épicentre est sa projection verticale en surface, et la faille peut rompre sur des dizaines à des centaines de kilomètres pour les plus grands événements.',
            'Les ondes de volume traversent la Terre : les ondes P compriment et dilatent la matière dans la direction de propagation, traversent solides et liquides et arrivent en premier ; les ondes S cisaillent perpendiculairement, ne traversent pas le noyau externe liquide et arrivent ensuite. Les ondes de surface (Love, transverses, et Rayleigh, elliptiques), plus lentes mais de forte amplitude, causent l’essentiel des dégâts en surface.',
            'L’écart d’arrivée S − P croît avec la distance : trois stations au moins permettent de localiser l’épicentre par triangulation des cercles de distance. L’ombre des ondes S derrière le noyau externe et la réfraction des ondes P ont historiquement révélé la structure interne du globe.',
            'L’intensité (échelle de Mercalli modifiée, en chiffres romains) décrit les effets observés en un lieu : dégâts, perception, comportement des objets. La magnitude mesure l’énergie libérée à la source : la magnitude de moment, déduite du moment sismique (rigidité × surface rompue × glissement), est l’échelle de référence actuelle. Chaque degré de magnitude correspond à environ 32 fois plus d’énergie libérée, soit un facteur 1 000 pour deux degrés.'
          ],
          formula: {
            label: 'MAGNITUDE DE MOMENT',
            text: 'Mw = (2/3) × log₁₀(M₀) − 6,0  (M₀ en N·m)',
            mathML: 'moment-magnitude'
          },
          equationDetails: [
            {
              title: 'Localiser un épicentre par triangulation',
              formula: 'Δt(S − P) croît avec la distance  |  3 stations = 1 intersection',
              explanation: 'Chaque station donne un intervalle S − P converti en distance épicentrale par les tables temps-distance ; le cercle centré sur la station contient l’épicentre. Trois cercles se coupent en un point : l’épicentre. La profondeur se déduit ensuite des phases réfléchies et de la géométrie.',
              parameters: 'Δt(S − P) : secondes entre l’arrivée des P et des S ; distance lue sur hodochrone (km) ; au moins trois stations non alignées.',
              example: 'Exemple : trois stations donnent des distances de 180, 240 et 300 km ; les trois cercles se recoupent au droit de la faille active voisine.',
              result: 'S − P donne la distance, le croisement donne le lieu.'
            },
            {
              title: 'Comparer deux magnitudes en énergie',
              formula: 'facteur ≈ 32 par degré  |  ≈ 1 000 pour deux degrés',
              explanation: 'L’échelle des magnitudes est logarithmique : l’amplitude des ondes est multipliée par 10 par degré, et l’énergie par environ 32. Deux degrés d’écart correspondent donc à environ mille fois plus d’énergie, ce qui explique qu’un grand séisme domine totalement le budget sismique d’une région.',
              parameters: 'Mw : magnitude de moment, sans unité ; énergie en joules ; le facteur 32 est une valeur arrondie d’usage pédagogique.',
              example: 'Exemple : un séisme de Mw 7 libère environ 32 fois l’énergie d’un Mw 6, et environ 1 000 fois celle d’un Mw 5.',
              result: 'Petit écart de magnitude = grand écart d’énergie.'
            }
          ],
          example: {
            statement: 'Deux séismes ont des magnitudes de moment 6,0 et 7,0. Comparer l’énergie libérée.',
            calculation: 'Un degré de magnitude correspond à environ 32 fois plus d’énergie.',
            answer: 'Le séisme de magnitude 7 libère environ 32 fois plus d’énergie.'
          },
          exercise: {
            question: 'Des dégâts violents sont observés mais la magnitude annoncée est modérée. Y a-t-il contradiction ?',
            answer: 'Non : l’intensité dépend du lieu, la magnitude décrit la source.'
          },
          exercises: [
            {
              question: 'Des dégâts violents sont observés mais la magnitude annoncée est modérée. Y a-t-il contradiction ?',
              answer: 'Non : l’intensité dépend du lieu (distance, sols, bâti), la magnitude décrit la source.'
            },
            {
              question: 'Deux séismes affichent Mw 5,0 et Mw 7,0. Comparer leurs énergies libérées.',
              answer: 'Deux degrés d’écart : environ 32 × 32 ≈ 1 000 fois plus d’énergie pour le Mw 7.'
            },
            {
              question: 'Une station enregistre P puis S avec un long intervalle, une autre avec un intervalle court. Laquelle est la plus proche et combien de stations faut-il pour localiser ?',
              answer: 'L’intervalle court signale la station proche ; il faut au moins trois stations pour trianguler l’épicentre.'
            }
          ],
          sources: [
            { title: 'Physical Geology, 2e éd. — Chapitre 11 : Earthquakes', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/11-earthquakes/' },
            { title: 'USGS — Moment magnitude, Richter scale : what are the different magnitude scales ?', url: 'https://www.usgs.gov/faqs/moment-magnitude-richter-scale-what-are-different-magnitude-scales-and-why-are-there-so-many' }
          ]
        }
      } // FIN CHAPITRE seismes
    ] // FIN BRANCHE dynamique
  } // FIN BRANCHE 2
  ,
  {
    id: 'temps-geologiques',
    title: 'Temps géologiques',
    note: 'Datations relative et isotopique : ordonner les temps profonds.',
    chapters: [
      {
        id: 'datation-relative',
        title: 'Datation relative et principes',
        field: 'Stratigraphie · bases',
        summary: 'Superposition, recoupement, inclusions et fossiles.',
        lesson: {
          sections: [
            'La datation relative ordonne les événements sans donner d’âge en années : elle repose sur la géométrie des contacts. Le principe de superposition affirme qu’une couche sédimentaire est plus récente que celle qu’elle recouvre, tant que la série n’a pas été retournée ; le principe de continuité initiale suppose que les couches se déposent horizontalement et s’étendent latéralement jusqu’à buter sur un relief.',
            'Le principe de recoupement affirme qu’une structure qui en recoupe une autre lui est postérieure : faille qui déplace des couches, filon qui traverse un granite, érosion qui tronque des plis. Le principe d’inclusion affirme qu’un fragment inclus dans une roche est plus ancien que cette roche : enclaves, galets remaniés, xénolithes.',
            'Les fossiles stratigraphiques permettent de corréler des couches éloignées : une espèce abondante, largement répartie mais d’extension temporelle courte, date toutes les couches qui la contiennent. Les discordances — surfaces d’érosion entre deux séries — signalent une lacune : dépôt, émersion et érosion, puis reprise de la sédimentation.',
            'La méthode s’applique pas à pas : repérer les contacts, ordonner couches et structures, repérer les discordances, puis caler la séquence locale dans l’échelle stratigraphique grâce aux fossiles. Elle ne donne jamais de durée, seulement un ordre : l’âge en années relève de la datation isotopique.'
          ],
          formula: {
            label: 'PRINCIPES',
            text: 'superposition  |  continuité  |  recoupement  |  inclusions  |  succession faunique'
          },
          example: {
            statement: 'Une faille traverse une série sédimentaire puis est scellée par une coulée volcanique, elle-même recouverte d’un conglomérat à galets volcaniques. Ordonner les événements.',
            calculation: 'Les sédiments sont les plus anciens ; la faille les recoupe donc elle est postérieure ; la coulée scelle la faille donc elle est plus récente ; le conglomérat contient des galets de la coulée donc il est le plus récent.',
            answer: 'Sédiments, puis faille, puis volcanisme, puis conglomérat.'
          },
          exercise: {
            question: 'Un granite contient des enclaves de schiste. Lequel est le plus ancien ?',
            answer: 'Le schiste : les inclusions sont antérieures à la roche qui les contient.'
          },
          exercises: [
            {
              question: 'Un granite contient des enclaves de schiste. Lequel est le plus ancien ?',
              answer: 'Le schiste : les inclusions sont antérieures à la roche qui les contient.'
            },
            {
              question: 'Une série plissée est tronquée par une surface d’érosion puis recouverte de couches horizontales. Que signale ce contact et quel est l’ordre ?',
              answer: 'Une discordance : plissement puis émersion et érosion, puis reprise de la sédimentation horizontale.'
            },
            {
              question: 'Deux affleurements distants contiennent le même fossile stratigraphique dans des faciès différents. Que peut-on corréler ?',
              answer: 'Leurs âges : le fossile date les deux couches, même si les roches se ressemblent peu.'
            }
          ],
          sources: [
            { title: 'Physical Geology, 2e éd. — Chapitre 8 : Measuring Geological Time', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/8-measuring-geological-time/' }
          ]
        }
      } // FIN CHAPITRE relatif
      ,
      {
        id: 'datation-isotopique',
        title: 'Datation isotopique et demi-vie',
        field: 'Géochronologie · intermédiaire',
        summary: 'Décroissance radioactive, demi-vie et âge d’une roche.',
        lesson: {
          sections: [
            'Un isotope parent radioactif se désintègre en isotope fils à un rythme constant, propre à chaque couple : la datation mesure le rapport entre les atomes fils accumulés et les atomes parents restants. Le choix du couple dépend de l’âge présumé : un couple à demi-vie courte pour les temps récents, à demi-vie longue pour les temps profonds.',
            'La demi-vie est la durée au bout de laquelle la moitié des noyaux parents a disparu : après une demi-vie il reste 1/2 des parents, après deux 1/4, après trois 1/8. La constante de désintégration λ et la demi-vie sont liées par t(1/2) = ln(2)/λ ; connaître l’une donne l’autre, et l’âge se déduit du rapport mesuré.',
            'La méthode exige un système resté fermé depuis l’événement daté : toute perte ou apport de parent ou de fils (lessivage, chauffage, recristallisation) fausse l’âge. On date donc un événement précis — cristallisation d’un minéral, fermeture d’un système — et non « la roche » en général : une roche métamorphique peut donner l’âge du métamorphisme plutôt que celui de sa formation.',
            'Plusieurs couples se contrôlent mutuellement : quand deux chronomètres indépendants donnent le même âge, la datation est dite concordante et la confiance est maximale. C’est la convergence des méthodes, calée sur l’échelle stratigraphique, qui permet d’ordonner 4,6 milliards d’années d’histoire terrestre.'
          ],
          formula: {
            label: 'LOI DE DÉCROISSANCE',
            text: 'N(t) = N₀ × e^(−λt)  |  t(1/2) = ln(2) / λ',
            mathML: 'radioactive-decay-summary'
          },
          equationDetails: [
            {
              title: 'Lire un rapport fils/parent en demi-vies',
              formula: 'fils = parent → 1 demi-vie  |  fils = 3 × parent → 2 demi-vies',
              explanation: 'Sans aucun calcul, le rapport donne le nombre de demi-vies : autant de fils que de parents signifie que la moitié des parents initiaux subsiste (1 demi-vie) ; trois fois plus de fils que de parents signifie qu’il ne reste qu’un quart des parents (2 demi-vies). Multiplier ensuite par la demi-vie du couple donne l’âge.',
              parameters: 'Rapport mesuré au spectromètre de masse ; demi-vie du couple utilisé ; hypothèse de système fermé et de fils initiaux connus ou négligeables.',
              example: 'Exemple : un minéral contient trois fois plus d’atomes fils que d’atomes parents ; deux demi-vies se sont écoulées.',
              result: 'Le rapport donne les demi-vies, la demi-vie donne les années.'
            },
            {
              title: 'Vérifier la concordance de deux couples',
              formula: 'âge couple 1 = âge couple 2 = âge retenu',
              explanation: 'Dater le même échantillon avec deux couples indépendants teste l’hypothèse de système fermé : si les deux âges coïncident, aucune perte ni apport significatif n’a eu lieu. S’ils divergent, l’échantillon a été perturbé (réchauffage, altération) et l’âge simple est rejeté.',
              parameters: 'Deux couples de demi-vies différentes sur le même minéral ; incertitudes analytiques comparées à l’écart entre les deux âges.',
              example: 'Exemple : deux couples donnent respectivement 298 et 302 millions d’années avec des incertitudes de ±5 Ma : les âges sont concordants.',
              result: 'Concordance = confiance ; discordance = réexamen.'
            }
          ],
          example: {
            statement: 'Un minéral contient autant d’atomes fils que d’atomes parents. Combien de demi-vies se sont écoulées ?',
            calculation: 'Autant de fils que de parents signifie que la moitié des parents initiaux subsiste : une demi-vie s’est écoulée.',
            answer: 'Une demi-vie.'
          },
          exercise: {
            question: 'Après trois demi-vies, quelle fraction des noyaux parents subsiste ?',
            answer: 'Un huitième : 1/2 × 1/2 × 1/2.'
          },
          exercises: [
            {
              question: 'Après trois demi-vies, quelle fraction des noyaux parents subsiste ?',
              answer: 'Un huitième : 1/2 × 1/2 × 1/2.'
            },
            {
              question: 'Un minéral contient trois fois plus d’atomes fils que d’atomes parents. Combien de demi-vies se sont écoulées ?',
              answer: 'Deux demi-vies : il ne reste qu’un quart des parents initiaux.'
            },
            {
              question: 'Deux couples indépendants donnent 298 ± 5 Ma et 315 ± 5 Ma sur le même échantillon. Que conclure ?',
              answer: 'Les âges sont discordants au-delà des incertitudes : le système a probablement été perturbé, l’âge simple est rejeté.'
            }
          ],
          sources: [
            { title: 'Physical Geology, 2e éd. — Chapitre 8 : Measuring Geological Time', url: 'https://opentextbc.ca/physicalgeology2ed/chapter/8-measuring-geological-time/' }
          ]
        }
      } // FIN CHAPITRE isotopique
    ] // FIN BRANCHE temps
  } // FIN BRANCHE 3
  ,
  {
    id: 'geodynamique-histoire-planete',
    title: 'Géodynamique et histoire de la planète',
    note: 'Moteur thermique, cinématique des plaques, cycle de Wilson, archives et horloges isotopiques : un cours approfondi en 14 sections, avec exercices et sources.',
    href: 'geodynamique-histoire-planete.html',
    sections: [
      { anchor: 'cadre', title: 'Le cadre chronologique' },
      { anchor: 'architecture', title: 'L’architecture interne' },
      { anchor: 'chaleur', title: 'Le moteur thermique' },
      { anchor: 'isostasie', title: 'L’isostasie' },
      { anchor: 'magnetisme', title: 'Le champ magnétique' },
      { anchor: 'cinematique', title: 'La cinématique des plaques' },
      { anchor: 'forces', title: 'Les forces motrices' },
      { anchor: 'wilson', title: 'Le cycle de Wilson' },
      { anchor: 'deformation', title: 'Plis, failles et orogenèse' },
      { anchor: 'archives', title: 'Les archives sédimentaires' },
      { anchor: 'datations', title: 'Les datations isotopiques' },
      { anchor: 'hadeen-archeen', title: 'Hadéen et Archéen' },
      { anchor: 'proterozoique', title: 'Le Protérozoïque' },
      { anchor: 'phanerozoique', title: 'Le Phanérozoïque' },
      { anchor: 'exercices', title: 'S’entraîner' },
      { anchor: 'sources', title: 'Sources' }
    ]
  } // FIN COURS APPROFONDI géodynamique
];

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
