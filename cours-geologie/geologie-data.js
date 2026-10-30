
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
    note: 'Moteur thermique, cinématique des plaques, cycle de Wilson, archives et horloges isotopiques, avec exercices et sources.',
    chapters: [
      { id: "geodyn-cadre", title: "Le cadre chronologique", field: 'Géodynamique · approfondissement', summary: "Le temps profond et sa mesure", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La géodynamique étudie les transferts d'énergie et de matière à l'intérieur de la Terre et leurs effets en surface : ouverture et fermeture des océans, chaînes de montagnes, volcanisme, séismes. L'histoire de la planète est le récit de ces processus sur des milliards d'années. Pour la lire, il faut un cadre chronologique commun : la <strong>Charte chronostratigraphique internationale</strong>, référence officielle de la Commission internationale de stratigraphie (ICS, version 2024/12), qui découpe le temps en éons, ères, périodes et étages datés.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Les durées se comptent en <strong>Ma</strong> (millions d'années) et en <strong>Ga</strong> (milliards d'années). La Terre a environ 4 566 millions d'années (manuel ouvert <em>Historical Geology</em>) : même les dinosaures n'occupent qu'une fraction infime de cette durée. Le mot « Précambrien » regroupe informellement tout ce qui précède le Phanérozoïque, soit les éons Hadéen, Archéen et Protérozoïque.</p>\n<div class=\"sign-table-wrap\">\n<table class=\"sign-table\" style=\"display:table\">\n<caption>Échelle des temps géologiques (bornes d'après la charte ICS 2024/12)</caption>\n<thead><tr><th scope=\"col\">Éon et ère</th><th scope=\"col\">Bornes (Ma)</th><th scope=\"col\">Contenu et repères</th></tr></thead>\n<tbody>\n<tr><th scope=\"row\">Hadéen</th><td>4 567 – 4 031</td><td>Accrétion de la Terre, océan magmatique, noyau et manteau</td></tr>\n<tr><th scope=\"row\">Archéen</th><td>4 031 – 2 500</td><td>Premières croûtes stables, premières traces de vie</td></tr>\n<tr><th scope=\"row\">Protérozoïque</th><td>2 500 – 538,8</td><td>Grande Oxydation, supercontinents, glaciations globales</td></tr>\n<tr><th scope=\"row\">Paléozoïque</th><td>538,8 – 251,902</td><td>Explosion cambrienne, conquête des continents</td></tr>\n<tr><th scope=\"row\">Mésozoïque</th><td>251,902 – 66,0</td><td>Domination des dinosaures, ouverture de l'Atlantique</td></tr>\n<tr><th scope=\"row\">Cénozoïque</th><td>66,0 – 0</td><td>Mammifères, glaciations quaternaires</td></tr>\n</tbody>\n</table>\n</div>\n<p class=\"table-note\" style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Lecture : « Ma » = millions d'années avant le présent ; la borne basse d'une unité est la borne haute de la suivante.</p>\n<div class=\"callout callout-coral\"><strong>Trois archives complémentaires</strong><p>Les roches donnent la nature et l'ordre des événements (datation relative), les fossiles corrèlent les couches entre régions, les isotopes radioactifs fournissent des âges en années (datation isotopique). Aucune des trois ne suffit seule : c'est leur croisement qui fonde l'échelle des temps.</p></div>" } },
      { id: "geodyn-architecture", title: "L’architecture interne", field: 'Géodynamique · approfondissement', summary: "Ce que les ondes sismiques révèlent", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Personne n'a vu l'intérieur de la Terre, mais les ondes sismiques le dessinent : les ondes P (compression) et S (cisaillement) changent de vitesse en traversant des milieux de rigidité différente, et les ondes S ne traversent pas les liquides. Leurs temps d'arrivée, enregistrés dans le monde entier, révèlent une planète en couches concentriques (USGS, <em>This Dynamic Earth</em>).</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La <strong>croûte</strong>, rigide et mince, n'a qu'environ 5 km d'épaisseur sous les océans, contre environ 30 km en moyenne sous les continents et jusqu'à 100 km sous les grandes chaînes comme les Alpes. Sous elle s'étend le <strong>manteau</strong>, environ 2 900 km de roches denses, chaudes et semi-solides, plus riches en fer, magnésium et calcium que la croûte. Au centre, le <strong>noyau</strong> métallique (fer et nickel), près de deux fois plus dense que le manteau, se divise en un noyau externe liquide d'environ 2 200 km et un noyau interne solide d'environ 1 250 km de rayon.</p>\n<div class=\"sign-table-wrap\">\n<table class=\"sign-table\" style=\"display:table\">\n<caption>Les grandes enveloppes de la Terre (USGS, Physical Geology)</caption>\n<thead><tr><th scope=\"col\">Enveloppe</th><th scope=\"col\">Épaisseur</th><th scope=\"col\">État</th><th scope=\"col\">Nature</th></tr></thead>\n<tbody>\n<tr><th scope=\"row\">Croûte océanique</th><td>≈ 5 km</td><td>Solide rigide</td><td>Basaltes</td></tr>\n<tr><th scope=\"row\">Croûte continentale</th><td>≈ 30 km, jusqu'à ≈ 100 km</td><td>Solide rigide</td><td>Granites, roches métamorphiques et sédimentaires</td></tr>\n<tr><th scope=\"row\">Manteau</th><td>≈ 2 900 km</td><td>Solide qui flue lentement</td><td>Roches riches en Fe, Mg et Ca</td></tr>\n<tr><th scope=\"row\">Noyau externe</th><td>≈ 2 200 km</td><td>Liquide</td><td>Alliage fer-nickel</td></tr>\n<tr><th scope=\"row\">Noyau interne</th><td>≈ 1 250 km de rayon</td><td>Solide (pression)</td><td>Alliage fer-nickel, plus de 6 000 °C</td></tr>\n</tbody>\n</table>\n</div>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Une seconde découpe, mécanique, se superpose à la découpe chimique : la <strong>lithosphère</strong>, rigide, regroupe la croûte et le manteau supérieur soudé à sa base, sur au moins 80 km — c'est elle qui est découpée en plaques. Sous elle, l'<strong>asthénosphère</strong> est fragilisée par de minuscules quantités de fusion : elle flue très lentement et laisse la lithosphère dériver. La limite croûte–manteau, marquée par un saut de vitesse des ondes, est la discontinuité de Mohorovičić. Le noyau interne, presque aussi chaud que la surface du Soleil, reste solide parce que la pression empêche la fusion.</p>" } },
      { id: "geodyn-chaleur", title: "Le moteur thermique", field: 'Géodynamique · approfondissement', summary: "Géotherme, conduction et convection", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La chaleur qui s'échappe de l'intérieur fournit l'énergie des montagnes, des volcans, des continents et des bassins océaniques (OpenStax, <em>Astronomy 2e</em>). Elle a deux origines : la <strong>chaleur résiduelle</strong> de la formation de la planète (accrétion, impacts, différenciation) et la <strong>désintégration radioactive</strong> des éléments instables de la croûte et du manteau. La température croît donc avec la profondeur, jusqu'aux quelque 3 500 à plus de 6 000 °C du noyau.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La <strong>conduction</strong> transfère la chaleur de proche en proche, sans déplacement de matière, sous l'effet d'une différence de température : elle domine dans la croûte rigide et la lithosphère. La <strong>convection</strong> la transfère par le mouvement lent de la matière elle-même : c'est le régime du manteau ductile. La convection transporte la chaleur bien plus vite que la conduction, et c'est cette efficacité qui entretient la tectonique des plaques.</p>\n<div class=\"formula-block\"><span class=\"formula-label\">CONDUCTION · LOI DE FOURIER</span><math class=\"mathml-display\" display=\"block\" aria-label=\"Flux thermique conductif égal à la conductivité thermique fois la différence de température divisée par l'épaisseur\"><mrow><mi>q</mi><mo>=</mo><mi>k</mi><mo>·</mo><mfrac><mrow><mi>Δ</mi><mi>T</mi></mrow><mi>d</mi></mfrac></mrow></math><span class=\"math-display\">q = k · ΔT / d</span></div>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><strong>Paramètres et unités :</strong> q : flux thermique surfacique (W·m⁻²) ; k : conductivité thermique de la roche (W·m⁻¹·K⁻¹) ; ΔT : écart de température (K ou °C) ; d : distance (m). <strong>Exemple :</strong> à conductivité égale, une région à 30 °C/km évacue deux fois plus de chaleur qu'une région à 15 °C/km. <strong>Résultat :</strong> le flux suit le gradient.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Trois points structurent la suite. D'abord, la convection est <strong>indispensable</strong> à la tectonique : elle maintient l'asthénosphère faible et mobile, et son organisation (manteau entier, deux niveaux, ou mélange) reste débattue. Ensuite, elle s'arrêtera quand le noyau aura assez refroidi : c'est déjà fait sur Mercure, Mars et la Lune. Enfin, là où la croûte épaisse isole, la chaleur fragilise la lithosphère : un ingrédient du déchirement des continents (section 08).</p>" } },
      { id: "geodyn-isostasie", title: "L’isostasie", field: 'Géodynamique · approfondissement', summary: "L'équilibre flottant de la lithosphère", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Les reliefs ne tiennent pas « posés » sur le manteau : ils y flottent, comme un iceberg sur l'eau, selon le principe d'Archimède. C'est l'<strong>isostasie</strong> : tout excès de masse en surface (chaîne de montagnes, calotte glaciaire) est compensé en profondeur, et tout allègement (érosion, fonte des glaces) provoque un soulèvement. Deux variantes du modèle coexistent : le modèle d'<strong>Airy</strong>, où la compensation se fait par une racine crustale légère qui s'enfonce sous les reliefs, et le modèle de <strong>Pratt</strong>, où la croûte garde une épaisseur constante mais sa densité varie latéralement.</p>\n<div class=\"formula-block\"><span class=\"formula-label\">ISOSTASIE · MODÈLE D'AIRY</span><math class=\"mathml-display\" display=\"block\" aria-label=\"Épaisseur de la racine crustale égale à la masse volumique de la croûte fois la hauteur du relief, divisée par la différence des masses volumiques du manteau et de la croûte\"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><msub><mi>ρ</mi><mi>c</mi></msub><mo>·</mo><mi>h</mi></mrow><mrow><msub><mi>ρ</mi><mi>m</mi></msub><mo>−</mo><msub><mi>ρ</mi><mi>c</mi></msub></mrow></mfrac></mrow></math><span class=\"math-display\">r = ρ<sub>c</sub> · h / (ρ<sub>m</sub> − ρ<sub>c</sub>)</span></div>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><strong>Paramètres et unités :</strong> r : épaisseur de la racine crustale (m) ; h : altitude du relief (m) ; ρ<sub>c</sub> et ρ<sub>m</sub> : masses volumiques de la croûte et du manteau (kg·m⁻³). <strong>Exemple :</strong> avec les valeurs usuelles ρ<sub>c</sub> = 2 800 et ρ<sub>m</sub> = 3 300 kg·m⁻³, une chaîne de 5 km d'altitude s'enracine d'environ 28 km. <strong>Résultat :</strong> la racine vaut plus de cinq fois la hauteur visible.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La preuve la plus directe est le <strong>rebond post-glaciaire</strong> : la calotte laurentide, épaisse de plus de 3 000 m, a quitté la région de la baie d'Hudson il y a environ 8 000 ans, et la croûte y remonte encore à près de 2 cm par an. Autour, les régions refoulées par le manteau déplacé s'affaissent en retour. L'érosion agit de même : décaper une montagne l'allège, le manteau remonte, et le relief ne s'abaisse que lentement — c'est pourquoi les chaînes anciennes gardent longtemps une topographie.</p>" } },
      { id: "geodyn-magnetisme", title: "Le champ magnétique", field: 'Géodynamique · approfondissement', summary: "Géodynamo, inversions et paléomagnétisme", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La Terre est un aimant géant dont la source est interne : le noyau externe est un alliage fer-nickel liquide, conducteur, animé de mouvements de convection et entraîné par la rotation de la planète. Ces mouvements brassent des charges électriques et entretiennent le <strong>champ magnétique</strong> : c'est la géodynamo. Le champ protège la surface et l'atmosphère en déviant une grande partie des particules chargées du vent solaire.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Ce champ n'est pas figé : au cours du passé géologique, il s'est <strong>inversé à de nombreuses reprises</strong>, le nord magnétique devenant sud et inversement. Les roches enregistrent ces bascules : en refroidissant, les minéraux magnétiques (comme la magnétite) figent la direction du champ ambiant, et les sédiments orientent leurs grains magnétiques au dépôt. C'est le <strong>paléomagnétisme</strong>, une boussole fossile qui sert à la fois à dater et à repositionner les continents.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">L'enregistrement le plus lisible se trouve de part et d'autre des dorsales océaniques : la croûte nouvellement formée, aimantée dans le sens du champ du moment, dessine des <strong>bandes magnétiques symétriques</strong>, alternativement normales et inversées, comme un code-barres du temps. En connaissant la durée approximative des inversions, on convertit la largeur des bandes en vitesse d'expansion des fonds océaniques : c'est l'une des mesures fondatrices de la cinématique des plaques (section 06). La même logique permet de retrouver la latitude d'un fragment continental au moment où ses roches se sont formées.</p>" } },
      { id: "geodyn-cinematique", title: "La cinématique des plaques", field: 'Géodynamique · approfondissement', summary: "Limites, vitesses et mesures modernes", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La lithosphère est découpée en grandes plaques rigides qui se déplacent les unes par rapport aux autres sur l'asthénosphère. Leurs contacts définissent quatre types de limites : <strong>divergentes</strong> (les plaques s'écartent, la croûte nouvelle naît du manteau), <strong>convergentes</strong> (une plaque plonge sous l'autre, la croûte est détruite), <strong>transformantes</strong> (glissement horizontal sans création ni destruction) et <strong>zones diffuses</strong>, larges ceintures où la limite est mal définie.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Ces mouvements, de quelques centimètres par an, s'additionnent en milliers de kilomètres sur des millions d'années. La dorsale médio-atlantique s'écarte à environ 2,5 cm par an, soit 25 km par million d'années ; la dorsale arctique est encore plus lente (moins de 2,5 cm/an), tandis que la dorsale du Pacifique Est dépasse 15 cm/an. L'océan Atlantique, né d'un mince bras de mer il y a 100 à 200 millions d'années, s'est ouvert à ce rythme (USGS, <em>This Dynamic Earth</em>).</p>\n<div class=\"formula-block\"><span class=\"formula-label\">VITESSE D'EXPANSION</span><math class=\"mathml-display\" display=\"block\" aria-label=\"Vitesse égale à la distance divisée par la durée\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>d</mi><mi>t</mi></mfrac></mrow></math><span class=\"math-display\">v = d / t</span></div>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><strong>Paramètres et unités :</strong> v : vitesse relative des plaques (m·an⁻¹, ou cm·an⁻¹) ; d : distance parcourue (m) ; t : durée (an). <strong>Exemple :</strong> à 2,5 cm par an, ouvrir un bras de mer de 1 000 km demande 1 000 000 m / 0,025 m·an⁻¹ = 40 millions d'années. <strong>Résultat :</strong> les vitesses géologiques « lentes » construisent des océans.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Aujourd'hui, on mesure ces déplacements en direct : par interférométrie, télémétrie laser et surtout <strong>GPS</strong>, dont chaque station capte au moins quatre satellites pour se positionner au millimètre près. Les vitesses ainsi suivies pendant quelques années concordent avec celles moyennées sur des millions d'années : la cinématique des plaques est un mouvement continu, pas une succession de saccades.</p>" } },
      { id: "geodyn-forces", title: "Les forces motrices", field: 'Géodynamique · approfondissement', summary: "Ce qui fait bouger les plaques", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">C'est la question que Wegener n'avait pas su résoudre : quelle force déplace des masses de roche de plusieurs dizaines de kilomètres d'épaisseur ? La réponse moderne combine plusieurs moteurs, tous alimentés par la chaleur interne. La <strong>convection du manteau</strong> entraîne la base de la lithosphère ; la <strong>poussée des dorsales</strong> fait glisser les plaques le long du relief de la dorsale ; la <strong>traction du panneau plongeant</strong> tire la plaque vers la fosse quand la lithosphère océanique, froide et dense, s'enfonce dans le manteau.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Ces mécanismes s'articulent dans le modèle de l'expansion–subduction : la croûte nouvelle naît aux dorsales, dérive comme sur un tapis roulant, puis replonge dans les fosses où elle est recyclée dans le manteau. Ce recyclage explique trois observations qui avaient embarrassé les premiers océanographes : la Terre ne grossit pas malgré la création continue de croûte, les sédiments des fonds océaniques restent minces, et les roches océaniques sont bien plus jeunes que les roches continentales.</p>\n<div class=\"callout callout-coral\"><strong>Une question toujours ouverte</strong><p>La tectonique des plaques est acceptée par toute la communauté scientifique, mais la part exacte de chaque moteur reste débattue, tout comme son fonctionnement aux premiers temps de la Terre ou sur d'autres planètes (USGS, <em>This Dynamic Earth</em>). En science, un modèle unificateur n'interdit pas les questions : il les organise.</p></div>" } },
      { id: "geodyn-wilson", title: "Le cycle de Wilson", field: 'Géodynamique · approfondissement', summary: "Supercontinents : assembler, disperser, recommencer", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Les continents ne dérivent pas au hasard : ils s'assemblent en <strong>supercontinents</strong> puis se dispersent, en un cycle qui porte le nom du géophysicien John Tuzo Wilson. L'histoire est lisible sur la marge est de l'Amérique du Nord : au Mésoprotérozoïque, l'orogenèse de Grenville soude des fragments continentaux et assemble le supercontinent <strong>Rodinia</strong> ; au Néoprotérozoïque, Rodinia se déchire, et ce rifting laisse des épanchements basaltiques ; au Paléozoïque, les orogenèses appalachiennes ferment un nouvel océan ; au Trias, la <strong>Pangée</strong> commence à son tour à se disloquer (manuel <em>Historical Geology</em>).</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La Pangée, « toutes les terres » en grec, est le supercontinent le mieux documenté. Proposée par Wegener en 1912 dans sa théorie de la <strong>dérive des continents</strong>, elle s'appuyait sur des preuves convergentes : l'emboîtement des côtes, des fossiles identiques de part et d'autre de l'Atlantique (alors que ces organismes n'auraient pas pu le traverser), des fougères <em>Glossopteris</em> en régions aujourd'hui polaires, du charbon tropical en Antarctique et des dépôts glaciaires en Afrique australe. Sa dislocation commence il y a environ 225 à 200 millions d'années, et l'Atlantique s'ouvre depuis, pouce par pouce (USGS, <em>This Dynamic Earth</em>).</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Chaque étape du cycle laisse des signatures reconnaissables : extension et failles normales, dykes mafiques et bassins de rift à l'ouverture ; plissement, chevauchements, plutons granitiques et sutures à la fermeture ; épanchements basaltiques quand un rift avorte. Former puis disloquer un supercontinent perturbe profondément le cycle du carbone : c'est ce qui relie la tectonique aux glaciations globales du Protérozoïque (section 13). Les bassins de rift « ratés », comme ceux de la côte est américaine, restent visibles en cicatrices dans la croûte.</p>" } },
      { id: "geodyn-deformation", title: "Plis, failles et orogenèse", field: 'Géodynamique · approfondissement', summary: "Quand la croûte se déforme", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Aux limites convergentes, la croûte encaisse la collision : soumise à une <strong>contrainte</strong>, elle se <strong>déforme</strong>, d'abord élastiquement puis durablement. La déformation ductile plisse les couches en anticlinaux et synclinaux ; la déformation cassante les rompt en failles. Trois familles de failles correspondent à trois régimes de contrainte : les failles <strong>normales</strong> en extension (un compartiment s'affaisse), les failles <strong>inverses</strong> et chevauchements en compression (un compartiment monte sur l'autre), les <strong>décrochements</strong> en coulissage horizontal.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">L'accumulation de ces déformations construit les <strong>chaînes de montagnes</strong> : épaississement crustal, empilement de nappes, intrusion de plutons granitiques et métamorphisme régional. Les zones de subduction se signalent en profondeur par des plans de séismes inclinés de 40 à 60° sur plusieurs centaines de kilomètres, les zones de Wadati-Benioff, qui dessinent le panneau plongeant. En surface, volcans, séismes et reliefs suivent fidèlement les limites de plaques : c'est ce qui a permis, avant même la tectonique des plaques, de les cartographier.</p>\n<div class=\"callout callout-coral\"><strong>Lire une chaîne comme un rapport d'accident</strong><p>Plis serrés, failles inverses, ophiolites (lambeaux de croûte océanique) et granites d'anatexie racontent la fermeture d'un océan puis la collision ; failles normales, dykes et basaltes racontent l'ouverture. Une chaîne de montagnes est le procès-verbal d'un cycle de Wilson arrivé à son terme.</p></div>" } },
      { id: "geodyn-archives", title: "Les archives sédimentaires", field: 'Géodynamique · approfondissement', summary: "Ce que les couches racontent", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Les sédiments s'accumulent en couches dans des milieux variés — deltas, plates-formes, plaines abyssales — et conservent la trace des conditions de dépôt : granulométrie, figures sédimentaires, fossiles. Une pile de couches est donc une archive ordonnée : le principe de <strong>superposition</strong> affirme qu'une couche est plus récente que celle qu'elle recouvre, et les principes de <strong>recoupement</strong> et d'<strong>inclusion</strong> ordonnent failles, intrusions et fragments remaniés. Les <strong>fossiles stratigraphiques</strong>, abondants et d'extension temporelle courte, corrèlent des affleurements éloignés.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Ces archives ont fourni une preuve décisive de la jeunesse des océans : les sondages de l'Atlantique ont trouvé une couche de sédiments bien plus mince qu'attendu si les océans existaient depuis 4 milliards d'années. La réponse, apportée par l'expansion des fonds océaniques, est que la croûte océanique est en permanence recyclée : les sédiments marins n'ont jamais le temps de s'épaissir comme sur les continents (USGS, <em>This Dynamic Earth</em>).</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La méthode de lecture est systématique : repérer les contacts, ordonner couches et structures, identifier les <strong>discordances</strong> (surfaces d'érosion signalant une lacune : dépôt, émersion, érosion, reprise de la sédimentation), puis caler la séquence locale dans l'échelle stratigraphique grâce aux fossiles. Elle ne donne que des ordres, jamais des durées : les années relèvent des horloges isotopiques (section 11).</p>" } },
      { id: "geodyn-datations", title: "Les datations isotopiques", field: 'Géodynamique · approfondissement', summary: "Les horloges de la décroissance radioactive", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Certains noyaux atomiques sont instables et se transforment spontanément : c'est la <strong>décroissance radioactive</strong> (émissions alpha, bêta, gamma), qui convertit un noyau père en noyau fils. La probabilité de désintégration par unité de temps est constante pour un isotope donné : la décroissance est donc proportionnelle au nombre de noyaux restants, ce qui donne une loi exponentielle et la notion de <strong>demi-vie</strong>, durée au bout de laquelle la moitié des noyaux pères a disparu (OpenStax, <em>Chemistry 2e</em>).</p>\n<div class=\"formula-block\"><span class=\"formula-label\">DÉCROISSANCE ET DEMI-VIE</span><math class=\"mathml-display\" display=\"block\" aria-label=\"Nombre de noyaux restants égal au nombre initial fois l'exponentielle de moins lambda t, et demi-vie égale au logarithme népérien de deux divisé par lambda\"><mtable><mtr><mtd><mrow><mi>N</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mo>−</mo><mi>λ</mi><mi>t</mi></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>t</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>ln</mi><mo>(</mo><mn>2</mn><mo>)</mo></mrow><mi>λ</mi></mfrac></mrow></mtd></mtr></mtable></math><span class=\"math-display\">N(t) = N₀ · e^(−λt)  |  t(1/2) = ln(2) / λ</span></div>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><strong>Paramètres et unités :</strong> N : noyaux pères restants ; N₀ : noyaux initiaux ; λ : constante de désintégration (an⁻¹) ; t : temps (an) ; t(1/2) : demi-vie (an). <strong>Exemple :</strong> après une demi-vie, il reste la moitié des pères ; après deux, un quart ; après trois, un huitième. <strong>Résultat :</strong> mesurer le rapport fils/parent, c'est compter les demi-vies écoulées.</p>\n<div class=\"sign-table-wrap\">\n<table class=\"sign-table\" style=\"display:table\">\n<caption>Couples père–fils usuels (demi-vies, ordres de grandeur)</caption>\n<thead><tr><th scope=\"col\">Couple</th><th scope=\"col\">Demi-vie</th><th scope=\"col\">Matériaux datés</th></tr></thead>\n<tbody>\n<tr><th scope=\"row\">Uranium-plomb (²³⁸U → ²⁰⁶Pb)</th><td>≈ 4,5 Ga</td><td>Zircons, roches très anciennes</td></tr>\n<tr><th scope=\"row\">Potassium-argon (⁴⁰K → ⁴⁰Ar)</th><td>≈ 1,25 Ga</td><td>Roches volcaniques, laves</td></tr>\n<tr><th scope=\"row\">Rubidium-strontium (⁸⁷Rb → ⁸⁷Sr)</th><td>≈ 49 Ga</td><td>Roches magmatiques et métamorphiques</td></tr>\n<tr><th scope=\"row\">Carbone 14 (¹⁴C → ¹⁴N)</th><td>≈ 5 730 ans</td><td>Matériaux organiques récents uniquement</td></tr>\n</tbody>\n</table>\n</div>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Chaque couple a son domaine : on ne date pas un granite au carbone 14, ni une poterie à l'uranium-plomb. Deux garde-fous s'imposent : vérifier que le système est resté <strong>fermé</strong> (ni perte ni apport depuis la formation, faute de quoi l'âge est faussé) et croiser <strong>deux couples indépendants</strong> sur le même échantillon — si les âges coïncident, la confiance est grande ; s'ils divergent, le système a été perturbé. C'est ainsi qu'on date la Terre elle-même à environ 4,566 milliards d'années.</p>" } },
      { id: "geodyn-hadeen-archeen", title: "Hadéen et Archéen", field: 'Géodynamique · approfondissement', summary: "La formation d'une planète habitable", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Il y a 4 567 millions d'années, la Terre s'assemble par <strong>accrétion</strong> de poussières et de planétésimaux. L'énergie des impacts et de la compression chauffe le jeune globe jusqu'à le fondre en surface : l'<strong>océan magmatique</strong> permet la <strong>différenciation</strong>, les métaux lourds (fer, nickel) s'enfonçant pour former le noyau tandis que les silicates légers flottent pour former manteau et croûte. La Lune naît probablement d'un impact géant, avec un corps de la taille de Mars, qui arrache et met en orbite une partie du manteau terrestre.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">L'eau et l'atmosphère primitive arrivent par plusieurs voies : <strong>dégazage volcanique</strong> de l'intérieur, apports de <strong>comètes</strong> glacées et de <strong>météorites</strong> hydratées. La signature isotopique de l'eau terrestre ressemble davantage à celle des météorites qu'à celle des comètes : c'est un indice, pas encore une preuve définitive, que les trois sources ont pu contribuer (manuel <em>Historical Geology</em>).</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">La vie apparaît tôt, dans un monde sans oxygène libre, sous une atmosphère riche en dioxyde de carbone et en méthane. Les indices chimiques la signalent déjà vers 3,9 milliards d'années, et les <strong>stromatolites</strong> — colonies bactériennes photosynthétiques fossilisées — sont établies à 3,5 milliards d'années (OpenStax, <em>Astronomy 2e</em>). L'Archéen construit les premières croûtes continentales stables : les <strong>cratons</strong>, cœurs anciens des continents, dont la plupart seront en place au Protérozoïque.</p>" } },
      { id: "geodyn-proterozoique", title: "Le Protérozoïque", field: 'Géodynamique · approfondissement', summary: "Oxygène, supercontinents et glaces globales", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Le Protérozoïque (2 500 à 538,8 Ma) est l'éon des bascules planétaires. D'abord la <strong>Grande Oxydation</strong> : les cyanobactéries photosynthétiques rejettent de l'oxygène, déchet de leur métabolisme. Cet oxygène réagit avec tout ce qui s'oxyde — carbone, silice, fer dissous, qui précipite en oxydes et forme les gisements de fer rubanés — puis, les tampons épuisés, s'accumule dans l'atmosphère. Pour les microbes anaérobies, c'est un poison mortel : beaucoup disparaissent, ne survivant que dans les milieux confinés sans oxygène (manuel <em>Introduction to Historical Geology</em>).</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Le même éon assemble les premiers supercontinents et connaît les plus grandes glaciations connues. L'épisode huronien (environ 2,4 à 2,1 Ga, tillite de Gowganda vers 2,3 Ga) frappe le Paléoprotérozoïque, puis le Cryogénien (720 à 635 Ma) porte les <strong>Terres boules de neige</strong> : Sturtien (≈ 720–690 Ma), Marinoan (660–635 Ma) et Gaskiers, plus limité et plus récent. Les preuves convergent : tillites et diamictites, blocs lâchés par les icebergs, stries glaciaires, carbonates de coiffe qui scellent chaque déglaciation, et paléomagnétisme qui place les glaces jusque sous les basses latitudes.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Pendant ce temps, la vie se complexifie : cellules à noyau (<strong>eucaryotes</strong>) il y a 2,1 à 1,6 milliards d'années, reproduction sexuée vers 1,2 Ga, puis faune d'Édiacara (635,5 à 541 Ma), premiers organismes multicellulaires à corps mou, méduses et vers possibles, dont une partie s'éteint et l'autre préfigure la vie moderne. La transition vers des organismes à parties dures, à la limite du Phanérozoïque, ouvre soudain le registre fossile (manuel <em>Historical Geology</em>).</p>" } },
      { id: "geodyn-phanerozoique", title: "Le Phanérozoïque", field: 'Géodynamique · approfondissement', summary: "L'histoire visible et ses crises", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Le Phanérozoïque (538,8 Ma à aujourd'hui) est l'éon de la vie visible : l'apparition des parties dures multiplie les fossiles et rend l'histoire lisible en continu. Le Paléozoïque voit la conquête des continents par les plantes puis les animaux, et l'assemblage de la Pangée ; le Mésozoïque, la domination des dinosaures et l'ouverture de l'Atlantique ; le Cénozoïque, l'expansion des mammifères puis les glaciations quaternaires.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Cette histoire est ponctuée de <strong>crises d'extinction</strong>, dont cinq majeures (« Big Five »). La plus grave, à la limite Permien-Trias (251,902 Ma), élimine une immense part du vivant marin — les brachiopodes déclinent de 96 % — dans un contexte de volcanisme colossal, d'anoxie des océans et probablement de destruction de la couche d'ozone : les mers du Trias inférieur, vidées, sont brièvement dominées par un seul bivalve opportuniste, <em>Claraia</em>. À la limite Trias-Jurassique, environ la moitié des genres marins disparaît et libère la place aux dinosaures ; à la limite Crétacé-Paléogène (66,0 Ma), un impact majeur coïncide avec la fin des dinosaures non aviens (manuel <em>Historical Geology</em>).</p>\n<div class=\"callout callout-coral\"><strong>Un système couplé</strong><p>Tectonique, climat et vivant interagissent en permanence : la position des continents règle les courants et le carbone atmosphérique, les glaciations suivent les supercontinents, l'oxygène photosynthétique a empoisonné puis protégé le vivant. L'histoire de la planète n'est pas une suite d'événements, c'est une dynamique.</p></div>" } },
      { id: "geodyn-exercices", title: "S’entraîner", field: 'Géodynamique · approfondissement', summary: "À toi de jouer", lesson: { content: "<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">A</span><span>Deux dorsales s'écartent respectivement à 2,5 et 15 cm par an. En un million d'années, quelle largeur de croûte nouvelle chacune produit-elle ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>La première produit 2,5 cm/an × 1 000 000 ans = 25 km ; la seconde 15 cm/an × 1 000 000 ans = 150 km. C'est l'écart entre une dorsale lente et une dorsale rapide.</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">B</span><span>Dans le modèle d'Airy, une chaîne de 4 km s'enracine de combien avec ρc = 2 800 et ρm = 3 300 kg·m⁻³, et que conclure si la sismique mesure une croûte totale de 65 km sous cette chaîne ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>La racine vaut 2 800 × 4 000 / 500 ≈ 22 km, soit environ 52 km avec une croûte de référence de 30 km : une mesure de 65 km signale un épaississement tectonique réel, pas seulement isostatique.</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">C</span><span>Un zircon contient autant de plomb 206 que d'uranium 238 restant. Quel âge a-t-il, en demi-vies puis en années ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>Autant de fils que de pères : une demi-vie s'est écoulée, soit environ 4,5 milliards d'années pour le couple ²³⁸U–²⁰⁶Pb.</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">D</span><span>Pourquoi les sédiments des fonds océaniques sont-ils minces alors que les océans reçoivent des apports depuis des centaines de millions d'années ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>Parce que la croûte océanique est recyclée : née aux dorsales, elle plonge dans les fosses au bout de quelques centaines de millions d'années au plus. Les sédiments n'ont jamais le temps de s'épaissir.</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">E</span><span>La baie d'Hudson remonte de près de 2 cm par an depuis environ 8 000 ans. Quel processus ce mouvement enregistre-t-il ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>On mesure le rebond isostatique post-glaciaire : la croûte, délestée de la calotte laurentide partie il y a environ 8 000 ans, remonte encore aujourd'hui pendant que le manteau reflue.</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">F</span><span>Deux couples isotopiques donnent 298 ± 5 Ma et 315 ± 5 Ma sur le même minéral. Que conclure ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>Les âges sont discordants au-delà des incertitudes : le système a été perturbé (perte ou apport), l'âge simple est rejeté et l'échantillon doit être réexaminé.</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">G</span><span>Qu'est-ce qui prouve que les glaciations du Cryogénien ont atteint les basses latitudes, et non seulement les pôles ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>Le paléomagnétisme des dépôts glaciaires (tillites, diamictites, blocs lâchés) enregistre leur latitude de formation : sous les tropiques pour le Sturtien et le Marinoan, d'où l'hypothèse « Terre boule de neige ».</p></div>\n</details>\n<details class=\"exercise\">\n<summary onclick=\"var l=this.querySelector('.reveal-label');if(l){l.textContent=this.parentNode.open?'Voir la correction':'Masquer la correction';}\"><span class=\"exercise-number\">H</span><span>Pourquoi la Grande Oxydation a-t-elle été une extinction de masse pour les microbes de son temps ?</span><span class=\"reveal-label\">Voir la correction</span></summary>\n<div class=\"exercise-answer\"><p>Parce que l'oxygène libre, déchet de la photosynthèse des cyanobactéries, est un poison pour les organismes anaérobies : une fois les tampons géochimiques épuisés, son accumulation a éliminé les microbes incapables de le tolérer.</p></div>\n</details>" } },
      { id: "geodyn-sources", title: "Sources", field: 'Géodynamique · approfondissement', summary: "Sources scientifiques", lesson: { content: "<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\">Chaque fait de ce cours est issu d'une source ouverte vérifiable ci-dessous. OpenStax est utilisé en priorité (astronomie, chimie, physique) ; la géologie de terrain suit le manuel ouvert <em>Physical Geology</em> (Steven Earle, BCcampus, CC BY 4.0) et ses adaptations, complétés par l'USGS et la charte officielle de la Commission internationale de stratigraphie.</p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://openstax.org/books/astronomy-2e/pages/8-2-earths-crust\" target=\"_blank\" rel=\"noreferrer\">OpenStax, Astronomy 2e — 8.2 Earth's Crust : croûte océanique et continentale, tectonique des plaques, chaleur interne, failles et volcanisme (CC BY-NC-SA)</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://openstax.org/books/astronomy-2e/pages/8-4-life-chemical-evolution-and-climate-change\" target=\"_blank\" rel=\"noreferrer\">OpenStax, Astronomy 2e — 8.4 Life, Chemical Evolution, and Climate Change : origine de la vie, atmosphère primitive, oxygène et ozone (CC BY-NC-SA)</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://openstax.org/books/chemistry-2e/pages/21-3-radioactive-decay\" target=\"_blank\" rel=\"noreferrer\">OpenStax, Chemistry 2e — 21.3 Radioactive Decay : modes de décroissance, demi-vie et datations radiométriques (CC BY-NC-SA)</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer\" target=\"_blank\" rel=\"noreferrer\">OpenStax, University Physics vol. 2 — 1.6 Mechanisms of Heat Transfer : conduction, convection, rayonnement et loi de Fourier (CC BY-NC-SA)</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://opentextbc.ca/physicalgeology2ed/\" target=\"_blank\" rel=\"noreferrer\">Steven Earle, Physical Geology, 2e éd., BCcampus, 2019 (CC BY 4.0) : ch. 6 sédiments, ch. 8 temps géologiques, ch. 9 intérieur de la Terre, ch. 10 tectonique, ch. 12 structures, ch. 22 origine de la Terre</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Physical_Geology_(Panchuk)/03%3A_Earths_Interior/3.05%3A_Isostasy\" target=\"_blank\" rel=\"noreferrer\">Karla Panchuk, Physical Geology — 3.5 Isostasy (miroir LibreTexts, CC BY-NC-SA) : modèles d'Airy et de Pratt, rebond post-glaciaire</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://pubs.usgs.gov/gip/dynamic/inside.html\" target=\"_blank\" rel=\"noreferrer\">USGS, This Dynamic Earth — Inside the Earth : couches, lithosphère, asthénosphère, champ magnétique</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://pubs.usgs.gov/gip/dynamic/historical.html\" target=\"_blank\" rel=\"noreferrer\">USGS, This Dynamic Earth — Historical perspective : Wegener 1912, preuves de la dérive, dislocation de la Pangée</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://pubs.usgs.gov/gip/dynamic/developing.html\" target=\"_blank\" rel=\"noreferrer\">USGS, This Dynamic Earth — Developing the theory : expansion océanique, inversions magnétiques, zones de Wadati-Benioff</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://pubs.usgs.gov/gip/dynamic/understanding.html\" target=\"_blank\" rel=\"noreferrer\">USGS, This Dynamic Earth — Understanding plate motions : limites, vitesses (2,5 à plus de 15 cm/an), GPS</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf\" target=\"_blank\" rel=\"noreferrer\">Commission internationale de stratigraphie — Charte chronostratigraphique internationale v2024/12 : noms et bornes des unités (PDF)</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Historical_Geology_(Bentley_et_al.)/02%3A_A_Brief_History_of_Earth\" target=\"_blank\" rel=\"noreferrer\">Bentley et coll., Historical Geology — ch. 2 A Brief History of Earth (miroir LibreTexts, CC BY-NC 4.0) : Hadéen, Archéen, Protérozoïque, Phanérozoïque</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Historical_Geology_(Bentley_et_al.)/06%3A_Plate_Tectonics\" target=\"_blank\" rel=\"noreferrer\">Bentley et coll., Historical Geology — ch. 6 Plate Tectonics, § 6.7 Wilson Cycles : supercontinents, Rodinia, Pangée</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Historical_Geology_(Bentley_et_al.)/07%3A_Geologic_Time\" target=\"_blank\" rel=\"noreferrer\">Bentley et coll., Historical Geology — ch. 7 Geologic Time : âge de la Terre (4,566 Ga), principes de datation</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Historical_Geology_(Bentley_et_al.)/11%3A_Mass_Extinctions\" target=\"_blank\" rel=\"noreferrer\">Bentley et coll., Historical Geology — ch. 11 Mass Extinctions, § 11.2 The Big Five : crises Permien-Trias, Trias-Jurassique, Crétacé-Paléogène</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Historical_Geology_(Bentley_et_al.)/20%3A_(Case_Study)_Snowball_Earth_glaciations/20.06%3A_When_were_the_Snowballs\" target=\"_blank\" rel=\"noreferrer\">Bentley et coll., Historical Geology — § 20.6 When were the Snowballs? : Sturtien, Marinoan, Gaskiers, glaciation huronienne</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Introduction_to_Historical_Geology_(Ruppert_Lacy_and_Haddad)/11%3A_Proterozoic_Eon/11.03%3A_Proterozoic_Atmosphere\" target=\"_blank\" rel=\"noreferrer\">Ruppert, Lacy et Haddad, Introduction to Historical Geology — § 11.3 Proterozoic Atmosphere (miroir LibreTexts, CC BY-NC 4.0) : Grande Oxydation, fers rubanés</a></p>\n<p style=\"max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78\"><a href=\"https://geo.libretexts.org/Bookshelves/Geology/Introduction_to_Historical_Geology_(Ruppert_Lacy_and_Haddad)/11%3A_Proterozoic_Eon/11.02%3A_Proterozoic_Glaciations\" target=\"_blank\" rel=\"noreferrer\">Ruppert, Lacy et Haddad — § 11.2 Proterozoic Glaciations : preuves glaciaires, carbonates de coiffe, mécanisme de sortie</a></p>" } }
    ]
  }, // FIN BRANCHE géodynamique
// ============================================================================
// NOUVELLE BRANCHE : « Outils et méthodes » (1 chapitre)
// À COLLER dans géologie-data.js, juste après la dernière branche existante,
// AVANT la ligne finale « ]; ».
// Ne pas oublier la virgule après la branche précédente : le bloc ci-dessous
// commence par « , » pour cela.
// Même format que les autres chapitres : sections, formula, equationDetails,
// exercise, exercises, sources.
// Convention : les valeurs numériques citées viennent des sources listées en bas
// de leçon ; les écarts entre sources sont signalés dans le texte.
// ============================================================================
  {
    id: 'outils-et-methodes',
    title: 'Outils et méthodes',
    note: 'Mesurer la Terre aujourd’hui : géodésie spatiale, radar, laser et gravimétrie.',
    chapters: [
      {
        id: 'nouveaux-outils-de-mesure',
        title: 'Les nouveaux outils de mesure',
        field: 'Géodésie et télédétection · bases',
        summary: 'GNSS, InSAR, LiDAR et GRACE-FO : mesurer des déplacements de quelques millimètres à quelques centimètres.',
        lesson: {
          sections: [
            'Longtemps, la géologie a reposé sur l’observation de terrain et sur des mesures ponctuelles. Aujourd’hui, des instruments mesurent en continu, depuis le sol ou depuis l’espace, de très petits mouvements de la croûte. L’USGS emploie ainsi le LIDAR, le GPS, l’interférométrie radar (InSAR) et des instruments de terrain comme les creepmètres, et précise que les mesures géodésiques permettent d’observer des processus liés aux séismes que la sismologie seule ne montre pas : le mouvement lent de fond entre les plaques, ou le glissement continu de failles comme celle de Hayward, de l’ordre de plusieurs millimètres par an.',
            'Le GNSS (système de positionnement par satellites, dont le GPS) mesure la position d’une station au millimètre près. Selon l’IRIS, le GPS détecte des mouvements de plaques de 1 ou 2 mm par an ; une présentation de l’USGS annonce une précision meilleure que 1 mm par an sur la vitesse, ce qui n’est pas tout à fait la même grandeur (plus petit mouvement détectable et précision de la vitesse). Le réseau américain Plate Boundary Observatory d’EarthScope comptait environ 1 100 stations GPS : mesurer chaque jour, plutôt qu’une semaine par an comme dans les campagnes anciennes, change la qualité des séries. Une station apparaît comme une série temporelle de sa position, dont la pente donne la vitesse.',
            'L’InSAR compare deux images radar d’un même lieu prises à des dates différentes. Un déplacement du sol change la distance entre le satellite et le sol, donc la phase du signal. Une frange (un cycle de couleurs sur l’interférogramme) correspond à un déplacement égal à la moitié de la longueur d’onde, car le signal fait l’aller-retour. Pour Sentinel-1, en bande C, la longueur d’onde est de 5,56 cm, soit environ 2,8 cm par frange (NASA/JPL). Attention : l’InSAR ne mesure que la composante du mouvement le long de la ligne de visée du satellite (Sentinel-1 regarde le sol à environ 40° de la verticale), et les résultats rapides publiés après un séisme sont qualifiés de préliminaires.',
            'Le LiDAR envoie des impulsions laser, mesure leur temps d’aller-retour et en déduit une distance : c’est le temps de vol. Comme l’impulsion fait l’aller et le retour, la distance est la vitesse de la lumière multipliée par le temps, divisée par deux (OpenTopography). Un LiDAR aéroporté peut émettre jusqu’à 100 000 impulsions par seconde (valeur citée par une documentation universitaire), et un filtrage dit « de sol nu » retire les arbres et les bâtiments pour obtenir un modèle numérique de terrain. Il sert à repérer failles, glissements de terrain, volcans ou anciens lits de rivière.',
            'GRACE-FO (NASA et GFZ, lancée le 22 mai 2018) est une paire de satellites qui se suivent à environ 220 km et mesurent leur distance par signaux micro-ondes, avec une précision de l’ordre du micromètre (NASA/JPL : environ 1 micron ; l’AWI parle de quelques micromètres). Quand le premier survole une zone de gravité un peu plus forte, il s’éloigne du second : ces variations de distance servent à construire des cartes mensuelles du champ de gravité, donc des déplacements de masse, surtout d’eau (nappes, glaciers, calottes). Retenir : chaque outil mesure une grandeur indirecte (position, phase, temps, distance entre satellites) ; on les combine, et on donne toujours une valeur avec son incertitude.'
          ],
          formula: {
            label: 'DISTANCE PAR TEMPS DE VOL (LIDAR)',
            text: 'd = c × t / 2'
          },
          equationDetails: [
            {
              title: 'LiDAR : de la durée d’un écho à une distance',
              formula: 'd = c × t / 2',
              explanation: 'L’impulsion laser fait un aller-retour entre le capteur et la surface : la distance parcourue est c × t, et la distance au sol est la moitié.',
              parameters: 'd : distance capteur–surface ; c : vitesse de la lumière, environ 300 000 km/s ; t : durée de l’aller-retour.',
              example: 'Un écho revient après 2 × 10⁻⁶ s : d = 3 × 10⁸ × 2 × 10⁻⁶ / 2 = 300 m.',
              result: 'Ne pas oublier la division par deux, sinon la distance est doublée.'
            },
            {
              title: 'InSAR : compter les franges',
              formula: 'déplacement le long de la ligne de visée = N × λ / 2',
              explanation: 'Une frange correspond à un déplacement d’une demi-longueur d’onde, car le trajet radar est un aller-retour.',
              parameters: 'N : nombre de franges comptées ; λ : longueur d’onde du radar (Sentinel-1, bande C : 5,56 cm).',
              example: 'Quatre franges : 4 × 5,56 / 2 ≈ 11 cm le long de la ligne de visée.',
              result: 'C’est un déplacement relatif, projeté sur la ligne de visée, et non le déplacement réel du sol.'
            },
            {
              title: 'GNSS : une vitesse à partir d’une série de positions',
              formula: 'vitesse = déplacement / durée',
              explanation: 'La pente de la position d’une station en fonction du temps donne sa vitesse, en mm par an.',
              parameters: 'déplacement en mm ; durée en années.',
              example: 'Une station se déplace d’environ 20 mm en 3 ans : 20 / 3 ≈ 6,7 mm par an.',
              result: 'Donner la vitesse avec une incertitude, jamais avec dix décimales.'
            },
            {
              title: 'GRACE-FO : une précision relative',
              formula: 'précision relative = précision de la mesure / distance mesurée',
              explanation: 'Comparer l’incertitude à la grandeur mesurée donne une idée de la qualité d’un instrument.',
              parameters: 'précision d’environ 1 µm = 10⁻⁶ m ; distance entre satellites d’environ 220 km = 2,2 × 10⁵ m.',
              example: '10⁻⁶ / 2,2 × 10⁵ ≈ 4,5 × 10⁻¹².',
              result: 'Les variations de distance détectées sont de l’ordre d’un millionième de mètre sur 220 km.'
            }
          ],
          exercise: {
            question: 'Un écho LiDAR revient après 4 × 10⁻⁶ s. Quelle est la distance entre le capteur et la surface (c ≈ 3 × 10⁸ m/s) ?',
            answer: 'd = c × t / 2 = 3 × 10⁸ × 4 × 10⁻⁶ / 2 = 600 m.'
          },
          exercises: [
            {
              question: 'Un écho LiDAR revient après 4 × 10⁻⁶ s. Quelle est la distance entre le capteur et la surface (c ≈ 3 × 10⁸ m/s) ?',
              answer: 'd = c × t / 2 = 3 × 10⁸ × 4 × 10⁻⁶ / 2 = 600 m.'
            },
            {
              question: 'Un interférogramme Sentinel-1 montre 6 franges autour d’un séisme. Quel déplacement le long de la ligne de visée cela représente-t-il (1 frange ≈ 2,8 cm) ?',
              answer: '6 × 2,8 ≈ 17 cm le long de la ligne de visée ; ce n’est pas forcément le déplacement réel du sol, car l’InSAR n’en mesure que la composante projetée.'
            },
            {
              question: 'Une station GNSS se déplace de 35 mm en 5 ans. Quelle est sa vitesse moyenne ?',
              answer: '35 / 5 = 7 mm par an.'
            }
          ],
          sources: [
            { title: 'OpenTopography — What is Lidar?', url: 'https://opentopography.org/lidar_basics' },
            { title: 'NASA Earthdata (OPERA, Sentinel-1) — Displacement maps : longueur d’onde 5,56 cm et franges', url: 'https://gis.earthdata.nasa.gov/gis05/rest/services/DISASTERS_202606_EARTHQUAKE_VENEZUELA/202611_opera_displacement/ImageServer' },
            { title: 'Wikipédia (en) — Interferometric synthetic-aperture radar (à recouper)', url: 'https://en.wikipedia.org/wiki/Interferometric_synthetic-aperture_radar' },
            { title: 'IRIS — Measuring Plate Tectonic Motions with GPS', url: 'https://www.iris.edu/hq/inclass/animation/measuring_plate_tectonics_with_gps' },
            { title: 'USGS — Deformation (Earthquake Hazards Program)', url: 'https://www.usgs.gov/programs/earthquake-hazards/science/deformation' },
            { title: 'USGS / CGSIC — Tracking Ground Movement with GNSS (Hothem, 2018)', url: 'https://www.gps.gov/cgsic/meetings/2018/hothem.pdf' },
            { title: 'EarthScope — Exploring a Changing Continent Using a Plate Boundary Observatory', url: 'https://earthscope-program-2003-2018.org/articles/exploring_continent_with_PBO.html' },
            { title: 'NASA/JPL — GRACE-FO mission', url: 'https://grace.jpl.nasa.gov/mission/grace-fo' },
            { title: 'Alfred Wegener Institute — Keeping a Close Eye on Ice Loss', url: 'https://www.awi.de/en/about-us/service/press/single-view/keeping-a-close-eye-on-ice-loss.html' }
          ]
        }
      } // FIN CHAPITRE nouveaux-outils-de-mesure
    ] // FIN BRANCHE outils-et-methodes
  } // FIN BRANCHE outils-et-methodes
  ,
// BRANCHE — PÉRIODES GÉOLOGIQUES (sortYear = false : clé volontairement absente)

  {
    id: 'periodes-geologiques',
    title: 'Les périodes géologiques',
    note: 'Sept chapitres sur la mesure du temps géologique, le Précambrien, le Paléozoïque, le Mésozoïque, le Cénozoïque et le Quaternaire. Les âges suivent l’échelle chronostratigraphique internationale de l’ICS (version 2024/12 pour les valeurs citées) et restent révisables ; les pourcentages d’extinction sont des estimations qui varient selon les méthodes.',
    chapters: [
      {
        id: 'temps-profond-datation',
        title: 'Le temps profond : comment dater l’histoire de la Terre',
        field: 'Géologie · Stratigraphie, datation radiométrique et échelle des temps géologiques',
        summary: 'Comprendre comment les géologues ordonnent et datent les événements passés, et pourquoi les âges de l’échelle géologique sont des valeurs révisables.',
        lesson: {
          sections: [
            'La géologie reconstitue le passé à partir des roches. En 1669, Nicolas Sténon formule des principes fondateurs de la stratigraphie, dont celui de la superposition : dans une série de couches sédimentaires non perturbée, les couches les plus basses sont les plus anciennes. Au XVIIIe siècle, James Hutton soutient que les processus lents observables aujourd’hui (érosion, sédimentation, soulèvement) ont pu façonner la Terre sur des durées immenses ; Charles Lyell diffuse cette approche, souvent appelée uniformitarisme, dans ses Principles of Geology (1830-1833). En 1815, William Smith publie une carte géologique de l’Angleterre et du pays de Galles et montre que des couches éloignées peuvent être mises en correspondance grâce à leurs fossiles.',
            'La datation relative range les événements du plus ancien au plus récent sans donner d’âge en années ; elle repose sur la superposition, les relations de recoupement et les fossiles. La datation absolue (ou numérique) attribue un âge exprimé en années, surtout grâce à la radiochronologie : un isotope radioactif « père » se transforme en isotope « fils » à vitesse constante, décrite par sa demi-vie, durée au bout de laquelle la moitié des noyaux initiaux s’est désintégrée. L’uranium 238 a une demi-vie d’environ 4,47 milliards d’années et permet de dater des roches très anciennes, notamment à partir de cristaux de zircon. Le carbone 14, de demi-vie 5 730 ans, ne sert que pour des matériaux organiques d’au plus quelques dizaines de milliers d’années (environ 50 000 ans) : il est inutilisable pour les périodes géologiques anciennes.',
            'Au début du XXe siècle, la radioactivité fournit un nouvel outil : Arthur Holmes publie The Age of the Earth en 1913. En 1956, Clair Patterson obtient, à partir des isotopes du plomb de météorites, un âge d’environ 4,55 milliards d’années pour la Terre. L’estimation couramment retenue aujourd’hui est d’environ 4,54 milliards d’années ; l’ICS fixe la base de l’éon Hadéen à 4 567 Ma, valeur proche de l’âge des plus anciens matériaux datés du Système solaire. Les roches terrestres préservées sont beaucoup plus récentes que la Terre elle-même, car la tectonique, l’érosion et le recyclage de la croûte ont détruit l’essentiel de la croûte primitive : les plus anciens minéraux terrestres connus sont des zircons détritiques des Jack Hills (Australie), datés d’environ 4,4 milliards d’années.',
            'Les durées sont organisées en éons (Hadéen, Archéen, Protérozoïque, Phanérozoïque), éras, périodes, époques et âges. Pour le Phanérozoïque, les limites sont définies par un GSSP (Global Boundary Stratotype Section and Point), c’est-à-dire un point précis dans une coupe de roches de référence, souvent lié à l’apparition d’un fossile. Les âges numériques associés ne définissent pas ces unités : ils sont révisés quand de nouvelles mesures sont publiées. Par exemple, dans la version 2024/12 de la charte de l’ICS, la base du Crétacé passe de 145,0 à 143,1 Ma. Les âges de cette branche doivent donc être lus comme les valeurs en vigueur dans cette version, avec leurs incertitudes.'
          ],
          example: {
            statement: 'Un échantillon organique conserve 25 % de son carbone 14 initial. Sachant que la demi-vie du carbone 14 est de 5 730 ans, quel est son âge approximatif ?',
            calculation: 'Il reste 25 % = 1/4 = (1/2)², soit deux demi-vies écoulées. Âge ≈ 2 × 5 730 = 11 460 ans.',
            answer: 'L’échantillon a environ 11 460 ans. Cette méthode ne s’applique qu’aux matériaux organiques relativement récents et le résultat s’accompagne d’une incertitude.'
          },
          exercise: {
            question: 'Pourquoi une roche de 100 millions d’années ne peut-elle pas être datée au carbone 14 ?',
            answer: 'Parce que la demi-vie du carbone 14 (5 730 ans) est trop courte : après 100 millions d’années, il n’en resterait plus de quantité mesurable. Il faut utiliser des systèmes à demi-vie longue, comme l’uranium-plomb.'
          },
          exercises: [
            {
              question: 'Que signifie la demi-vie d’un isotope radioactif ?',
              answer: 'C’est la durée au bout de laquelle la moitié des noyaux radioactifs initiaux d’un échantillon s’est désintégrée.'
            },
            {
              question: 'Que signifie le sigle GSSP et à quoi sert-il ?',
              answer: 'Global Boundary Stratotype Section and Point : un point de référence dans une coupe de roches qui définit officiellement la base d’une unité de l’échelle des temps géologiques.'
            },
            {
              question: 'Pourquoi la base du Crétacé est-elle citée tantôt à 145,0 Ma, tantôt à 143,1 Ma ?',
              answer: 'Parce que les âges numériques de l’échelle sont révisés : la version 2024/12 de la charte de l’ICS a rajeuni cette limite à 143,1 Ma en suivant la Geologic Time Scale 2020.'
            }
          ],
          sources: [
            { title: 'ICS — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' },
            { title: 'ICS — Journal des modifications de la charte (2012-2026)', url: 'https://stratigraphy.org/ICSchart/ChangeLog2012-2026.txt' },
            { title: 'USGS — The Age of the Earth', url: 'https://pubs.usgs.gov/gip/geotime/age.html' },
            { title: 'Wikipedia — Age of Earth', url: 'https://en.wikipedia.org/wiki/Age_of_Earth' },
            { title: 'Wikipedia — Radiometric dating', url: 'https://en.wikipedia.org/wiki/Radiometric_dating' }
          ]
        }
      },
      {
        id: 'precambrien',
        title: 'Le Précambrien : Hadéen, Archéen et Protérozoïque',
        field: 'Précambrien · De 4 567 à 538,8 millions d’années environ',
        summary: 'Découvrir les trois premiers éons, l’apparition de la vie, la Grande Oxydation et les premiers animaux de l’Édiacarien.',
        lesson: {
          sections: [
            '« Précambrien » est un terme informel qui regroupe les trois premiers éons : Hadéen, Archéen et Protérozoïque. Il couvre environ 88 % de l’histoire de la Terre. Dans la version 2024/12 de la charte de l’ICS, l’Hadéen commence à 4 567 Ma (âge ratifié par l’IUGS en 2022) et la base de l’Archéen est fixée à 4 031 ± 3 Ma depuis 2023 (elle était auparavant arrondie à environ 4 000 Ma). L’Archéen se termine à 2 500 Ma. Les témoins directs de l’Hadéen sont rares : météorites, roches lunaires et zircons très anciens. Les plus anciennes traces de vie sont microbiennes : des stromatolithes, structures laminées construites par des communautés microbiennes, sont signalés à partir d’environ 3,4-3,5 milliards d’années, certaines interprétations restant débattues.',
            'Le Protérozoïque (2 500 – 538,8 Ma) est divisé en Paléoprotérozoïque, Mésoprotérozoïque et Néoprotérozoïque. Au Paléoprotérozoïque survient la Grande Oxydation (Great Oxidation Event) : l’oxygène libre s’accumule durablement dans l’atmosphère, vers 2,4 milliards d’années (les contraintes la situent entre environ 2,45 et 2,32 Ga). Cet oxygène est produit par la photosynthèse oxygénique, notamment celle des cyanobactéries. Les formations de fer rubanées, abondantes durant la première moitié du Paléoprotérozoïque, témoignent d’océans riches en fer dissous. Des travaux récents suggèrent que cette oxygénation n’a pas été un événement unique et instantané, mais une succession d’épisodes. L’origine précise des eucaryotes reste, elle aussi, discutée.',
            'Le Néoprotérozoïque comprend trois périodes : Tonien (1 000 – 720 Ma), Cryogénien (720 – 635 Ma) et Édiacarien (635 – 538,8 Ma). Le Cryogénien est associé à des glaciations majeures, dites « Terre boule de neige » (par exemple Sturtien, vers 717-660 Ma, et Marinoen, jusque vers 635 Ma) ; l’étendue réelle des glaces, notamment aux basses latitudes, reste discutée. L’Édiacarien, ratifié par l’IUGS en 2004, est la première nouvelle période géologique formellement définie depuis environ 120 ans. Il doit son nom aux collines d’Ediacara (Australie-Méridionale), où Reg Sprigg a découvert en 1946 des fossiles d’organismes inconnus.',
            'Le biote édiacarien regroupe les premiers grands organismes complexes multicellulaires du registre fossile, apparus surtout après environ 575 Ma et disparus vers 539 Ma. Il s’agit d’êtres à corps mou, souvent en forme de frondes, de disques ou de rubans. Leurs affinités avec les animaux actuels sont encore débattues : certains sont rattachés à des animaux, d’autres à des lignées éteintes. La base du Cambrien (538,8 Ma) marque l’entrée dans le Phanérozoïque, éon « de la vie visible », qui ne représente qu’environ 12 % de l’histoire de la Terre.'
          ],
          example: {
            statement: 'En prenant 4 567 Ma pour la base de l’Hadéen et 538,8 Ma pour la base du Phanérozoïque, quelle part de la durée totale correspond au Précambrien ?',
            calculation: 'Durée du Précambrien = 4 567 − 538,8 = 4 028,2 Ma. Part = 4 028,2 / 4 567 ≈ 0,882, soit environ 88 %.',
            answer: 'Le Précambrien représente environ 88 % de la durée comprise entre 4 567 Ma et aujourd’hui ; le Phanérozoïque, environ 12 %.'
          },
          exercise: {
            question: 'Qu’est-ce que la Grande Oxydation ?',
            answer: 'Une accumulation durable d’oxygène libre dans l’atmosphère, vers 2,4 milliards d’années, liée à la photosynthèse oxygénique des cyanobactéries.'
          },
          exercises: [
            {
              question: 'Quelles sont les limites de l’Édiacarien dans la charte de l’ICS ?',
              answer: 'De 635 Ma à 538,8 Ma.'
            },
            {
              question: 'Pourquoi le terme « Précambrien » est-il dit informel ?',
              answer: 'Parce qu’il ne correspond pas à une unité formelle de l’échelle de l’ICS : il regroupe commodément les éons Hadéen, Archéen et Protérozoïque.'
            },
            {
              question: 'Que désigne l’expression « Terre boule de neige » ?',
              answer: 'Une hypothèse de glaciations extrêmes du Cryogénien où les glaces auraient recouvert de très vastes régions du globe ; son ampleur exacte reste discutée.'
            }
          ],
          sources: [
            { title: 'ICS — Journal des modifications de la charte (Hadéen 4 567 Ma, Archéen 4 031 Ma)', url: 'https://stratigraphy.org/ICSchart/ChangeLog2012-2026.txt' },
            { title: 'ICS — The Ediacaran Period: a new addition to the geologic time scale', url: 'https://stratigraphy.org/gssps/files/ediacaran.pdf' },
            { title: 'Wikipedia — Ediacaran', url: 'https://en.wikipedia.org/wiki/Ediacaran' },
            { title: 'Wikipedia — Neoproterozoic', url: 'https://en.wikipedia.org/wiki/Neoproterozoic' },
            { title: 'University of Maryland (T. Holtz) — The Proterozoic', url: 'https://geol.umd.edu/~tholtz/G102/lectures/102proterozoic.html' }
          ]
        }
      },
      {
        id: 'paleozoique-cambrien-silurien',
        title: 'Paléozoïque (1) : Cambrien, Ordovicien et Silurien',
        field: 'Paléozoïque · De 538,8 à environ 419,6 millions d’années',
        summary: 'Suivre la diversification des animaux marins, l’extinction de la fin de l’Ordovicien et les premières plantes terrestres.',
        lesson: {
          sections: [
            'Le Paléozoïque (« vie ancienne ») commence avec le Cambrien, dont la base est définie par un GSSP à Fortune Head (Terre-Neuve, Canada), ratifié en 1992 et daté de 538,8 ± 0,6 Ma. Le nom Cambrien, tiré de Cambria (nom latin du pays de Galles), est proposé par Adam Sedgwick en 1835. Le Cambrien voit une diversification rapide des animaux marins, dont beaucoup acquièrent un squelette minéralisé, et la plupart des grands plans d’organisation animaux apparaissent dans le registre fossile. L’expression « explosion cambrienne » ne signifie pas un événement instantané : le phénomène s’étale sur plusieurs dizaines de millions d’années et possède des précurseurs à l’Édiacarien. Les trilobites sont les fossiles emblématiques de la période.',
            'Certains gisements à conservation exceptionnelle, qui préservent des parties molles, éclairent cette diversification : le schiste de Burgess (Canada), découvert par Charles Walcott en 1909, et le gisement de Chengjiang (Chine), daté d’environ 518 Ma. Ils montrent des animaux variés, dont des arthropodes, des vers et des formes sans équivalent actuel. Le Cambrien dure environ 52 Ma : de 538,8 Ma jusqu’à la base de l’Ordovicien, que la version 2024/12 de la charte de l’ICS place à environ 486,9 Ma (± 1,5).',
            'L’Ordovicien (environ 486,9 – 443,1 Ma), nom proposé par Charles Lapworth en 1879 d’après les Ordovices, peuple celte du pays de Galles, est marqué par la Grande Biodiversification ordovicienne : la diversité des animaux marins augmente fortement, notamment chez les invertébrés des fonds marins. La fin de la période est marquée par la glaciation hirnantienne (le Hirnantien débute vers 445,2 Ma) et par la première des « Cinq grandes » extinctions de masse. Celle-ci s’est déroulée en deux phases et a éliminé, selon les estimations, environ 85 % des espèces, surtout marines ; elle est liée à un refroidissement, à une glaciation sur le Gondwana et à une baisse du niveau marin.',
            'Le Silurien (environ 443,1 – 419,6 Ma) doit son nom aux Silures, peuple celte du pays de Galles, nom donné par Roderick Murchison en 1835. Après l’extinction, les écosystèmes marins se reconstituent et des récifs se développent. C’est durant le Silurien que se diversifient les premières plantes vasculaires terrestres, comme le genre Cooksonia, de très petites plantes à tiges simples. Les poissons à mâchoires sont attestés au Silurien, avant leur grande diversification au Dévonien. Ces changements préparent la colonisation des continents par les plantes et les animaux au Paléozoïque suivant.'
          ],
          example: {
            statement: 'Quelle est la durée approximative de l’Ordovicien, entre 486,85 Ma et 443,1 Ma ?',
            calculation: '486,85 − 443,1 = 43,75 Ma, soit environ 43,8 Ma.',
            answer: 'L’Ordovicien dure environ 43,8 millions d’années, avec une incertitude de l’ordre de 1 à 2 Ma sur chaque limite.'
          },
          exercise: {
            question: 'Pourquoi l’expression « explosion cambrienne » est-elle trompeuse ?',
            answer: 'Parce que la diversification des animaux s’étale sur plusieurs dizaines de millions d’années et a des précurseurs à l’Édiacarien ; ce n’est pas un événement instantané.'
          },
          exercises: [
            {
              question: 'Où se trouve le GSSP qui définit la base du Cambrien ?',
              answer: 'À Fortune Head, à Terre-Neuve (Canada), ratifié en 1992.'
            },
            {
              question: 'Quelle extinction de masse marque la fin de l’Ordovicien et quelle est la cause généralement invoquée ?',
              answer: 'L’extinction de la fin de l’Ordovicien, en deux phases, qui a touché environ 85 % des espèces selon les estimations ; elle est associée à un refroidissement, une glaciation et une baisse du niveau marin.'
            },
            {
              question: 'Quelles plantes terrestres se diversifient au Silurien ?',
              answer: 'Les premières plantes vasculaires, comme le genre Cooksonia.'
            }
          ],
          sources: [
            { title: 'ICS — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' },
            { title: 'ICS — Journal des modifications de la charte (2012-2026)', url: 'https://stratigraphy.org/ICSchart/ChangeLog2012-2026.txt' },
            { title: 'Wikipedia — Ediacaran (GSSP du Cambrien à Fortune Head)', url: 'https://en.wikipedia.org/wiki/Ediacaran' },
            { title: 'UCMP Berkeley — The Cambrian Period', url: 'https://ucmp.berkeley.edu/cambrian/cambrian.php' },
            { title: 'UCMP Berkeley — The Ordovician Period', url: 'https://ucmp.berkeley.edu/ordovician/ordovician.php' },
            { title: 'UCMP Berkeley — The Silurian Period', url: 'https://ucmp.berkeley.edu/silurian/silurian.php' }
          ]
        }
      },
      {
        id: 'paleozoique-devonien-permien',
        title: 'Paléozoïque (2) : Dévonien, Carbonifère et Permien',
        field: 'Paléozoïque · De 419,6 à 251,9 millions d’années environ',
        summary: 'Comprendre la colonisation des continents, les forêts du Carbonifère, la Pangée et la plus grande extinction de masse connue.',
        lesson: {
          sections: [
            'Le Dévonien (environ 419,6 – 358,9 Ma) est souvent appelé « âge des poissons » en raison de la diversification des poissons. C’est aussi la période où la colonisation des terres s’intensifie : des plantes à tiges plus grandes apparaissent, puis les premières forêts (par exemple avec Archaeopteris), et les arthropodes terrestres se diversifient. Vers 375 Ma, Tiktaalik, poisson tétrapodomorphe découvert dans l’Arctique canadien, présente des caractères intermédiaires entre poissons et tétrapodes. À la fin de la période, une série de pulses d’extinction (événements Kellwasser, vers 372 Ma, et Hangenberg, vers 359 Ma) touche surtout la vie marine et fait disparaître, selon les estimations, de l’ordre de 70 % des espèces.',
            'Le Carbonifère (environ 358,9 – 298,9 Ma) tire son nom des couches de charbon qu’il contient ; le terme a été introduit par Conybeare et Phillips en 1822. De vastes forêts marécageuses, dominées par des lycophytes arborescents et des fougères, ont enfoui de grandes quantités de matière organique devenue charbon. L’ICS divise le Carbonifère en deux sous-systèmes : le Mississippien (inférieur) et le Pennsylvanien (supérieur). Les premiers amniotes, vertébrés capables de pondre des œufs à coquille hors de l’eau, apparaissent à cette période, et certains insectes atteignent de grandes tailles, comme la libellule Meganeura. La collision entre grands continents prépare l’assemblage de la Pangée.',
            'Le Permien (environ 298,9 – 251,9 Ma) est nommé par Roderick Murchison en 1841 d’après la région de Perm (Russie). La Pangée est largement assemblée ; l’intérieur du supercontinent connaît des climats contrastés et souvent arides. Les synapsides, groupe qui inclut les ancêtres des mammifères, dominent de nombreux écosystèmes terrestres. La période débute dans le contexte d’une longue glaciation de la fin du Paléozoïque centrée sur le Gondwana, puis le climat se réchauffe.',
            'La limite Permien-Trias, datée à 251,902 ± 0,024 Ma (Burgess et al., 2014), correspond à la « Grande Mortalité », la plus sévère extinction de masse connue. Les estimations récentes évaluent la perte à environ 81 à 94 % des espèces animales marines, avec aussi de lourdes pertes sur les continents ; tous les trilobites disparaissent. La cause principale généralement retenue est le volcanisme des trapps de Sibérie, qui a libéré de grandes quantités de gaz à effet de serre. Les datations de Burgess et collègues indiquent que ce magmatisme a débuté environ 300 000 ans avant le début de l’extinction et s’est poursuivi pendant au moins 500 000 ans après.'
          ],
          example: {
            statement: 'Quelle est la durée du Permien, entre 298,9 Ma et 251,902 Ma ?',
            calculation: '298,9 − 251,902 = 46,998 Ma, soit environ 47,0 Ma.',
            answer: 'Le Permien dure environ 47 millions d’années. Le Paléozoïque entier (538,8 − 251,902) dure environ 286,9 Ma.'
          },
          exercise: {
            question: 'D’où le Carbonifère tire-t-il son nom ?',
            answer: 'Des couches de charbon (carbone) formées à partir des forêts marécageuses de cette période.'
          },
          exercises: [
            {
              question: 'Quelle extinction de masse marque la limite Permien-Trias et à quelle date ?',
              answer: 'La « Grande Mortalité », vers 251,9 Ma (251,902 ± 0,024 Ma), la plus sévère extinction de masse connue.'
            },
            {
              question: 'Quelle est la cause principale généralement retenue pour cette extinction ?',
              answer: 'Le volcanisme des trapps de Sibérie et ses effets climatiques et océaniques, même si les mécanismes exacts font encore l’objet de recherches.'
            },
            {
              question: 'Quels sont les deux sous-systèmes du Carbonifère selon l’ICS ?',
              answer: 'Le Mississippien (inférieur) et le Pennsylvanien (supérieur).'
            }
          ],
          sources: [
            { title: 'ICS — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' },
            { title: 'ICS — Journal des modifications de la charte (2012-2026)', url: 'https://stratigraphy.org/ICSchart/ChangeLog2012-2026.txt' },
            { title: 'Burgess et al. (2014), PNAS — High-precision timeline for Earth’s most severe extinction', url: 'https://www.pnas.org/doi/10.1073/pnas.1317692111' },
            { title: 'Science News — Volcanic activity convicted in Permian extinction', url: 'https://www.sciencenews.org/article/volcanic-activity-convicted-permian-extinction' },
            { title: 'UCMP Berkeley — The Devonian Period', url: 'https://ucmp.berkeley.edu/devonian/devonian.php' },
            { title: 'UCMP Berkeley — The Carboniferous Period', url: 'https://ucmp.berkeley.edu/carboniferous/carboniferous.php' },
            { title: 'UCMP Berkeley — The Permian Period', url: 'https://ucmp.berkeley.edu/permian/permian.php' }
          ]
        }
      },
      {
        id: 'mesozoique',
        title: 'Mésozoïque : Trias, Jurassique et Crétacé',
        field: 'Mésozoïque · De 251,9 à 66 millions d’années environ',
        summary: 'Suivre l’ère des dinosaures, la fragmentation de la Pangée et l’extinction de la fin du Crétacé.',
        lesson: {
          sections: [
            'Le Trias (environ 251,9 – 201,4 Ma) s’ouvre sur la reconstruction des écosystèmes après la Grande Mortalité. Son nom vient de la division en trois ensembles des terrains du Trias d’Allemagne (Buntsandstein, Muschelkalk, Keuper), proposée par Friedrich von Alberti en 1834. La Pangée est alors un supercontinent unique. Les premiers dinosaures et les premiers mammifères apparaissent au Trias, mais ce sont d’autres reptiles archosauriens qui dominent d’abord les milieux terrestres. La période se termine par une extinction de masse vers 201 Ma, associée à d’importantes éruptions volcaniques (province magmatique de l’Atlantique central), qui aurait touché environ 70 à 80 % des espèces selon les estimations.',
            'Le Jurassique (201,4 – 143,1 Ma, soit environ 58,3 Ma) tire son nom du massif du Jura ; Leopold von Buch en établit la division en trois ensembles en 1839 (Jurassique noir, brun et blanc). La Pangée commence à se fragmenter et l’océan Atlantique central s’ouvre. Les dinosaures dominent les écosystèmes terrestres, avec notamment les sauropodes, tandis que les ptérosaures occupent les airs, et que des reptiles marins comme les ichtyosaures et les plésiosaures peuplent les mers (ces derniers ne sont pas des dinosaures). Vers 150 Ma, Archaeopteryx, découvert en 1861 dans les calcaires de Solnhofen (Allemagne), illustre la proximité entre dinosaures théropodes et oiseaux.',
            'Le Crétacé (143,1 – 66,0 Ma, soit environ 77,1 Ma) est la plus longue période du Mésozoïque. Son nom vient du latin creta, la craie : les dépôts de craie, formés de microfossiles marins, sont typiques de cette période. La notion de Crétacé comme période distincte a été introduite par le géologue belge Jean d’Omalius d’Halloy en 1822. Le climat est globalement chaud et les niveaux marins sont élevés. Les plantes à fleurs (angiospermes) se diversifient, ce qui transforme les écosystèmes terrestres. La limite Jurassique-Crétacé a pour particularité d’être la seule limite entre deux systèmes dont le GSSP n’est pas encore défini.',
            'La fin du Crétacé correspond à la limite Crétacé-Paléogène (K-Pg), datée d’environ 66,0 Ma. L’extinction associée aurait éliminé environ 75 % des espèces de plantes et d’animaux, dont tous les dinosaures non aviens ; les oiseaux, issus de dinosaures théropodes, survivent. En 1980, Luis et Walter Alvarez, Frank Asaro et Helen Michel proposent une cause extraterrestre à partir d’une anomalie d’iridium dans les couches de la limite. Le cratère de Chicxulub (Yucatán, Mexique), d’environ 180 km de diamètre moyen et daté d’environ 66,04 Ma, est aujourd’hui largement considéré comme la cause principale de l’extinction. Le volcanisme des trapps du Deccan, contemporain, est lui aussi étudié et son rôle exact reste débattu.'
          ],
          example: {
            statement: 'Trias : 251,902 → 201,4 Ma ; Jurassique : 201,4 → 143,1 Ma ; Crétacé : 143,1 → 66,0 Ma. Quelle période du Mésozoïque est la plus longue ?',
            calculation: 'Trias : 251,902 − 201,4 = 50,5 Ma. Jurassique : 201,4 − 143,1 = 58,3 Ma. Crétacé : 143,1 − 66,0 = 77,1 Ma.',
            answer: 'Le Crétacé, avec environ 77,1 Ma. Le Mésozoïque dure en tout environ 185,9 Ma (251,902 − 66,0).'
          },
          exercise: {
            question: 'Pourquoi l’anomalie d’iridium est-elle importante pour comprendre l’extinction de la fin du Crétacé ?',
            answer: 'Parce que l’iridium est rare dans la croûte terrestre mais plus abondant dans les astéroïdes : sa concentration anormalement élevée à la limite K-Pg a conduit à l’hypothèse d’un impact.'
          },
          exercises: [
            {
              question: 'Quelles sont les dates de début et de fin du Jurassique dans la charte de l’ICS (version 2024/12) ?',
              answer: 'De 201,4 Ma à 143,1 Ma.'
            },
            {
              question: 'Les plésiosaures et les ptérosaures sont-ils des dinosaures ?',
              answer: 'Non. Ce sont des reptiles marins (plésiosaures) et volants (ptérosaures) contemporains des dinosaures.'
            },
            {
              question: 'Quelle particularité présente la limite entre le Jurassique et le Crétacé ?',
              answer: 'C’est la seule limite entre deux systèmes dont le GSSP n’est pas encore défini.'
            }
          ],
          sources: [
            { title: 'ICS — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' },
            { title: 'Wikipedia — Jurassic', url: 'https://en.wikipedia.org/wiki/Jurassic' },
            { title: 'Wikipedia — Cretaceous', url: 'https://en.wikipedia.org/wiki/Cretaceous' },
            { title: 'Wikipedia — Chicxulub crater', url: 'https://en.wikipedia.org/wiki/Chicxulub_crater' },
            { title: 'Alvarez et al. (1980), Science — Extraterrestrial cause for the Cretaceous-Tertiary extinction', url: 'https://www.science.org/doi/10.1126/science.208.4448.1095' }
          ]
        }
      },
      {
        id: 'cenozoique',
        title: 'Cénozoïque : Paléogène et Néogène',
        field: 'Cénozoïque · De 66 à 2,58 millions d’années environ',
        summary: 'Comprendre la diversification des mammifères, le refroidissement du climat et la formation des paysages et des écosystèmes modernes.',
        lesson: {
          sections: [
            'Le Cénozoïque (« vie récente ») commence à 66,0 Ma. Le Paléogène (66,0 – 23,04 Ma) comprend le Paléocène (66,0 – 56,0 Ma), l’Éocène (56,0 – 33,9 Ma) et l’Oligocène (33,9 – 23,04 Ma). Après l’extinction de la fin du Crétacé, les mammifères et les oiseaux se diversifient dans les niches laissées libres. Le terme « Tertiaire », ancien, n’est plus une unité formelle de l’ICS : il est remplacé par Paléogène et Néogène. Le début du Paléogène est marqué par des climats globalement plus chauds que l’actuel, avec en particulier le maximum thermique du passage Paléocène-Éocène (PETM), vers 56 Ma, une phase de réchauffement rapide associée à une libération massive de carbone.',
            'Autour de 33,9 Ma, à la transition Éocène-Oligocène, le climat se refroidit nettement et des calottes de glace se développent sur l’Antarctique. L’ouverture progressive de passages océaniques autour de l’Antarctique a contribué à l’isoler thermiquement, mais la chronologie exacte de ce processus est débattue. Les collisions tectoniques modifient aussi les reliefs : la collision entre l’Inde et l’Eurasie, débutée il y a environ 50 Ma, aboutit à la formation de l’Himalaya, et le rapprochement de l’Afrique et de l’Europe contribue à la formation des Alpes.',
            'Le Néogène (23,04 – 2,58 Ma, soit environ 20,5 Ma) comprend le Miocène (23,04 – 5,333 Ma) et le Pliocène (5,333 – 2,58 Ma). Au Miocène, les milieux ouverts et les herbacées, notamment les graminées de type C4, s’étendent, ce qui favorise la diversification de nombreux herbivores. Entre environ 5,97 et 5,33 Ma, la crise de salinité messinienne transforme la Méditerranée, dont le niveau baisse fortement avant sa remise en eau. C’est aussi à la fin du Miocène que se situent les plus anciens candidats au statut d’hominine, comme Sahelanthropus, vers 7 Ma, dont le statut fait toutefois débat.',
            'Le Pliocène prolonge la tendance générale au refroidissement, qui conduit aux glaciations du Quaternaire. Les écosystèmes sont alors très proches des écosystèmes actuels : mammifères modernes, vastes zones de savanes et de steppes, calottes polaires installées. La limite entre le Néogène et le Quaternaire est placée à 2,58 Ma, à la base du Gélasien. Cette limite correspond à un changement climatique, avec l’installation de glaciations répétées dans l’hémisphère nord.'
          ],
          example: {
            statement: 'Le Paléogène dure de 66,0 à 23,04 Ma et le Néogène de 23,04 à 2,58 Ma. Combien de fois le Paléogène est-il plus long que le Néogène ?',
            calculation: 'Paléogène : 66,0 − 23,04 = 42,96 Ma. Néogène : 23,04 − 2,58 = 20,46 Ma. Rapport : 42,96 / 20,46 ≈ 2,1.',
            answer: 'Le Paléogène est environ 2,1 fois plus long que le Néogène (≈ 43,0 Ma contre ≈ 20,5 Ma).'
          },
          exercise: {
            question: 'Pourquoi ne parle-t-on plus de « Tertiaire » comme unité officielle de l’échelle ?',
            answer: 'Parce que l’ICS utilise désormais les systèmes Paléogène et Néogène ; « Tertiaire » est un terme ancien qui n’a plus de statut formel.'
          },
          exercises: [
            {
              question: 'Quelles sont les trois époques du Paléogène ?',
              answer: 'Le Paléocène, l’Éocène et l’Oligocène.'
            },
            {
              question: 'Quelles sont les deux époques du Néogène et leur limite ?',
              answer: 'Le Miocène et le Pliocène, séparés à 5,333 Ma.'
            },
            {
              question: 'Que se passe-t-il vers 33,9 Ma, à la transition Éocène-Oligocène ?',
              answer: 'Un refroidissement marqué du climat et le développement de calottes de glace en Antarctique.'
            }
          ],
          sources: [
            { title: 'ICS — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' },
            { title: 'ICS — Journal des modifications de la charte (2012-2026)', url: 'https://stratigraphy.org/ICSchart/ChangeLog2012-2026.txt' },
            { title: 'Wikipedia — Paleogene', url: 'https://en.wikipedia.org/wiki/Paleogene' },
            { title: 'Wikipedia — Neogene', url: 'https://en.wikipedia.org/wiki/Neogene' },
            { title: 'Wikipedia — Paleocene–Eocene Thermal Maximum', url: 'https://en.wikipedia.org/wiki/Paleocene%E2%80%93Eocene_Thermal_Maximum' }
          ]
        }
      },
      {
        id: 'quaternaire-holocene-anthropocene',
        title: 'Quaternaire : glaciations, Holocène et débat sur l’Anthropocène',
        field: 'Cénozoïque · De 2,58 millions d’années à aujourd’hui',
        summary: 'Comprendre les cycles glaciaires, les subdivisions de l’Holocène et pourquoi l’Anthropocène n’est pas une époque officielle.',
        lesson: {
          sections: [
            'Le Quaternaire commence à 2,58 Ma, à la base du Gélasien, et regroupe le Pléistocène et l’Holocène. Il est marqué par une alternance de périodes glaciaires et interglaciaires, dont le rythme est lié aux variations de l’orbite et de l’inclinaison de la Terre (cycles de Milankovitch). Ces cycles ont d’abord une périodicité dominante d’environ 41 000 ans, puis, après la transition du Pléistocène moyen, d’environ 100 000 ans. Dans la charte de l’ICS, le Pléistocène est subdivisé en Gélasien (début à 2,58 Ma), Calabrien (1,80 Ma), Chibanien (774 000 ans, GSSP ratifié en 2020 près de Chiba, au Japon) et un Pléistocène supérieur dont la base est placée vers 129 000 ans.',
            'Le Pléistocène est aussi la période de l’évolution du genre Homo. Les plus anciens fossiles généralement rattachés à notre espèce, Homo sapiens, découverts à Jebel Irhoud (Maroc), sont datés d’environ 300 000 ans. La dernière période glaciaire s’achève vers 11 700 ans avant 2000, ce qui marque le début de l’Holocène. Cette limite est repérée dans les carottes de glace du Groenland et correspond à un réchauffement rapide.',
            'L’Holocène (depuis 0,0117 Ma, soit 11 700 ans avant 2000) est subdivisé depuis 2018 en trois âges ratifiés par l’IUGS : le Greenlandien (de 11 700 à 8 200 ans avant 2000), le Northgrippien (de 8 200 à 4 200 ans) et le Meghalayen (depuis environ 4 200 ans). Les deux premiers sont définis dans des carottes de glace du Groenland ; le Meghalayen, dans une stalagmite de la grotte de Mawmluh (Meghalaya, Inde). Leurs limites correspondent à des événements climatiques : un refroidissement vers 8 200 ans, et une période d’aridification marquée vers 4 200 ans dans plusieurs régions du monde, dont l’ampleur et les conséquences humaines sont discutées.',
            'Le terme Anthropocène, popularisé par Paul Crutzen et Eugene Stoermer à partir de 2000, désigne une période où les activités humaines transformeraient le système terrestre à l’échelle globale. Le groupe de travail sur l’Anthropocène, créé en 2009, proposait une nouvelle époque débutant au milieu du XXe siècle, avec un site de référence au lac Crawford (Ontario, Canada). En mars 2024, la proposition est rejetée par un vote de la Sous-commission de stratigraphie du Quaternaire ; l’IUGS a confirmé ce vote le 20 mars 2024 après un soutien quasi unanime des présidents des sous-commissions de l’ICS, la procédure ayant toutefois été contestée par des membres de la sous-commission. L’Anthropocène n’est donc pas une unité officielle de l’échelle, l’époque officielle actuelle restant l’Holocène, mais le terme reste largement utilisé comme descripteur de l’impact humain.'
          ],
          example: {
            statement: 'Le Northgrippien débute à 8 200 ans avant 2000 et le Meghalayen à 4 200 ans avant 2000. Quelle est la durée du Northgrippien ?',
            calculation: '8 200 − 4 200 = 4 000 ans.',
            answer: 'Le Northgrippien dure environ 4 000 ans. Le Greenlandien (11 700 − 8 200) dure 3 500 ans.'
          },
          exercise: {
            question: 'Pourquoi dit-on que l’Anthropocène n’est pas une époque officielle de l’échelle des temps géologiques ?',
            answer: 'Parce que la proposition formelle a été rejetée en 2024 par la Sous-commission de stratigraphie du Quaternaire, puis la décision a été confirmée par l’IUGS ; le terme reste employé de façon informelle.'
          },
          exercises: [
            {
              question: 'À quelle date commence le Quaternaire dans la charte de l’ICS ?',
              answer: 'À 2,58 Ma, à la base du Gélasien.'
            },
            {
              question: 'Quels sont les trois âges de l’Holocène ?',
              answer: 'Le Greenlandien, le Northgrippien et le Meghalayen.'
            },
            {
              question: 'À quoi servent les carottes de glace du Groenland pour définir l’Holocène ?',
              answer: 'Elles fournissent les sections de référence (GSSP) qui définissent le début de l’Holocène et deux de ses âges, grâce à leurs enregistrements climatiques.'
            }
          ],
          sources: [
            { title: 'ICS — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' },
            { title: 'ICS — Journal des modifications de la charte (2012-2026)', url: 'https://stratigraphy.org/ICSchart/ChangeLog2012-2026.txt' },
            { title: 'IUGS — Déclaration du 20 mars 2024 sur l’Anthropocène', url: 'https://www.iugs.org/_files/ugd/f1fc07_23c6f9e723bc47b9b5fdcd300f806f25.pdf' },
            { title: 'Earth.Org — Not Yet Anthropocene', url: 'https://earth.org/not-yet-anthropocene-what-the-official-rejection-of-the-anthropocene-as-earths-new-epoch-means-for-the-climate-discourse/' },
            { title: 'Wikipedia — Holocene', url: 'https://en.wikipedia.org/wiki/Holocene' },
            { title: 'Wikipedia — Quaternary', url: 'https://en.wikipedia.org/wiki/Quaternary' }
          ]
        }
      }
    ]
  },

// ---------------------------------------------------------------------------
// BRANCHE Les grands livres de la géologie  

{
  id: 'grands-livres',
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
},
// BRANCHE COUCHES GÉOLOGIQUES

  {
    id: 'couches-geologiques',
    title: 'Les couches géologiques',
    note: 'Six chapitres sur la lecture des strates, leur formation, la structure interne de la Terre, la datation, l’échelle des temps géologiques et les ruptures du registre sédimentaire. Les âges sont des estimations scientifiques susceptibles d’être révisées (référence : International Commission on Stratigraphy, version 2024/12).',
    chapters: [
      {
        id: 'principes-stratigraphie',
        title: 'Lire les strates : les principes de la stratigraphie',
        field: 'Géologie · Stratigraphie, de Sténon (1669) à William Smith (1815)',
        summary: 'Comprendre comment l’ordre des couches de roche permet de reconstituer une chronologie relative, et quelles sont les limites de ces principes.',
        lesson: {
          sections: [
            'Une couche géologique, ou strate, est un niveau de roche, le plus souvent sédimentaire, qui s’est formé au cours d’une même période de dépôt et qui est séparé des niveaux voisins par des surfaces appelées plans de stratification. La stratigraphie est la science qui étudie la façon dont ces couches sont agencées. Elle est un outil central pour interpréter le passage du temps géologique, car chaque empilement de strates conserve la trace d’environnements et d’événements successifs.',
            'Les bases de la stratigraphie sont généralement attribuées à Nicolas Sténon (1638-1686), médecin et naturaliste danois qui travaillait en Toscane. En 1666, il dissèque la tête d’un grand requin blanc capturé près de Florence et remarque la ressemblance entre ses dents et certains « fossiles » trouvés dans les collines de l’intérieur des terres. Dans un ouvrage publié en 1669, il énonce trois principes : la superposition (dans une série non déformée, la couche la plus ancienne est en bas et les plus récentes au-dessus), l’horizontalité originelle (les strates se déposent initialement à peu près à l’horizontale, donc des couches inclinées ou plissées ont été perturbées après leur dépôt) et la continuité latérale (une strate s’étendait à l’origine dans toutes les directions jusqu’à s’amincir ou rencontrer le bord de son bassin de dépôt).',
            'Un quatrième principe, celui des relations de recoupement, complète ces règles : une faille, une intrusion ou toute autre structure qui coupe des couches est plus récente que ces couches. Selon les auteurs, ce principe est rattaché à Sténon ou à des géologues ultérieurs. À la fin du XVIIIe siècle, l’arpenteur britannique William Smith, qui travaille sur le creusement de canaux dans le Somerset, constate que chaque niveau de roche contient un ensemble de fossiles caractéristique et que les mêmes successions de fossiles se retrouvent dans différentes régions d’Angleterre. C’est le principe de succession faunique. Il lui permet de publier en 1815 une carte intitulée A Delineation of the Strata of England and Wales, with part of Scotland, considérée comme la première carte géologique couvrant une aussi vaste étendue.',
            'Ces principes ont des limites qu’il faut connaître. Ils s’appliquent d’abord à des séries peu déformées : les plissements intenses et les chevauchements peuvent renverser localement l’ordre des couches, et une coupe doit alors être interprétée avec prudence. Ils donnent ensuite un âge relatif (plus ancien ou plus récent) et non un âge en années. Enfin, une série de strates n’est jamais complète : des périodes de non-dépôt ou d’érosion créent des lacunes, que le chapitre sur les discordances développe.'
          ],
          example: {
            statement: 'Dans une falaise dont les couches sont horizontales et non déformées, on observe de bas en haut : un grès (A), une argile (B) puis un calcaire (C). Quelle couche est la plus ancienne et laquelle est la plus récente ?',
            calculation: 'Par le principe de superposition, dans une série non déformée la couche du bas s’est déposée en premier. L’ordre de dépôt est donc A, puis B, puis C.',
            answer: 'Le grès A est le plus ancien et le calcaire C le plus récent. Ce raisonnement donne un ordre relatif, pas des âges en années, et suppose que la série n’a pas été renversée par la tectonique.'
          },
          exercise: {
            question: 'Pourquoi une couche de roche fortement inclinée est-elle le signe d’une perturbation postérieure à son dépôt ?',
            answer: 'Parce que, d’après le principe d’horizontalité originelle, les sédiments se déposent initialement à peu près à l’horizontale. Une strate inclinée ou plissée a donc été déformée après sa formation.'
          },
          exercises: [
            {
              question: 'Quels sont les trois principes que Nicolas Sténon énonce en 1669 ?',
              answer: 'La superposition, l’horizontalité originelle et la continuité latérale des strates.'
            },
            {
              question: 'Que dit le principe de succession faunique de William Smith ?',
              answer: 'Chaque niveau de roche contient un ensemble de fossiles caractéristique et les mêmes successions de fossiles se retrouvent d’une région à l’autre, ce qui permet d’ordonner et de comparer les strates.'
            },
            {
              question: 'Une faille coupe trois couches de calcaire. La faille est-elle plus ancienne ou plus récente que ces couches ?',
              answer: 'Plus récente, d’après le principe de recoupement : une structure qui coupe des couches s’est formée après elles.'
            }
          ],
          sources: [
            { title: 'University of British Columbia (EOAS) — Stratigraphy: the basic principles', url: 'https://www.eoas.ubc.ca/courses/eosc326/resources/Stratigraphy/stratigraphy.htm' },
            { title: 'CK-12 / Lumen Learning — Relative ages of rocks', url: 'https://courses.lumenlearning.com/earthscienceck12/chapter/relative-ages-of-rocks/' },
            { title: 'CK-12 / Lumen Learning — Steno’s laws and unconformities', url: 'https://courses.lumenlearning.com/earthscienceck12/?p=467' },
            { title: 'UC Museum of Paleontology (Berkeley) — William Smith (1769-1839)', url: 'https://ucmp.berkeley.edu/history/smith.html' }
          ]
        }
      },
      {
        id: 'formation-des-strates',
        title: 'Comment se forment les couches : sédimentation et diagenèse',
        field: 'Géologie · Dépôt des sédiments, lithification et roches sédimentaires',
        summary: 'Suivre le chemin d’un grain de roche, de l’altération au dépôt puis à la roche solide, et comprendre pourquoi les roches sédimentaires dominent en surface.',
        lesson: {
          sections: [
            'La plupart des couches visibles à la surface des continents sont des roches sédimentaires. Leur formation suit une chaîne de processus : l’altération et l’érosion des roches existantes fournissent des particules ou des substances dissoutes, que l’eau, le vent, la glace ou la gravité transportent, puis déposent dans des environnements variés (cours d’eau, lacs, deltas, plages, plateaux continentaux, fonds océaniques). Les particules se déposent sous l’effet de la gravité, ce qui explique que les sédiments forment à l’origine des nappes à peu près horizontales.',
            'Lorsque les dépôts s’accumulent, les sédiments les plus anciens sont enfouis sous les plus récents. Le poids des couches supérieures tasse les grains et réduit les espaces entre eux : c’est la compaction. Des minéraux précipités à partir de l’eau qui circule dans les pores, comme la calcite ou la silice, collent ensuite les grains entre eux : c’est la cimentation. La compaction et la cimentation transforment le sédiment meuble en roche solide, un processus appelé lithification. Plus largement, la diagenèse désigne l’ensemble des changements physiques, chimiques et biologiques subis par un sédiment après son dépôt.',
            'On distingue deux grandes familles de roches sédimentaires. Les roches détritiques sont faites de fragments issus de roches préexistantes (conglomérat, grès, siltite, argilite). Les roches chimiques, dont font partie les roches d’origine biologique selon les classifications, résultent de la précipitation de minéraux ou de l’accumulation de restes d’organismes (calcaires, évaporites). La nature d’une roche renseigne sur son milieu de dépôt : un calcaire fossilifère indique en général une mer peu profonde, tandis qu’un grès à grandes stratifications obliques évoque souvent des dunes. Dans le Grand Canyon, la formation de Kaibab, qui forme les bords du canyon, s’est ainsi déposée dans une mer chaude et peu profonde il y a environ 270 millions d’années.',
            'Les roches sédimentaires occupent environ 75 % des affleurements continentaux, alors qu’elles ne représentent qu’environ 5 % du volume de la croûte : elles forment une mince couverture au-dessus de roches magmatiques et métamorphiques plus abondantes en profondeur. Les roches magmatiques peuvent aussi créer des couches : des coulées de lave ou des dépôts de cendres volcaniques se superposent comme des strates. Ces niveaux volcaniques sont précieux, car ils peuvent contenir des minéraux datables et encadrer en âge les couches sédimentaires voisines.'
          ],
          example: {
            statement: 'Dans un exemple pédagogique fictif, une couche de sédiments de 3 mètres d’épaisseur s’est déposée en 30 000 ans. Quelle est la vitesse moyenne de dépôt ?',
            calculation: '3 m = 3 000 mm. Vitesse moyenne = 3 000 mm ÷ 30 000 ans = 0,1 mm par an.',
            answer: 'La vitesse moyenne est de 0,1 mm par an. C’est une moyenne : les vitesses réelles varient fortement selon l’environnement et peuvent comporter des interruptions.'
          },
          exercise: {
            question: 'Quelle différence y a-t-il entre la compaction et la cimentation ?',
            answer: 'La compaction est un tassement mécanique des grains sous le poids des couches sus-jacentes. La cimentation est un processus chimique : des minéraux précipitent entre les grains et les lient.'
          },
          exercises: [
            {
              question: 'Quelle proportion des affleurements continentaux est constituée de roches sédimentaires ?',
              answer: 'Environ 75 %, alors qu’elles représentent seulement environ 5 % du volume de la croûte.'
            },
            {
              question: 'Qu’appelle-t-on diagenèse ?',
              answer: 'L’ensemble des changements physiques, chimiques et biologiques subis par un sédiment après son dépôt, y compris sa transformation en roche (lithification).'
            },
            {
              question: 'Pourquoi une coulée de lave intercalée entre deux couches sédimentaires est-elle utile aux géologues ?',
              answer: 'Parce qu’elle peut contenir des minéraux datables par radiochronologie, ce qui permet d’encadrer l’âge des couches sédimentaires situées au-dessous et au-dessus.'
            }
          ],
          sources: [
            { title: 'HyperPhysics (Georgia State University) — Sedimentary Rocks', url: 'https://hyperphysics.gsu.edu/hbase/Geophys/sedime.html' },
            { title: 'Futura-Sciences — Roche sédimentaire', url: 'https://www.futura-sciences.com/planete/definitions/geologie-roche-sedimentaire-1101/' },
            { title: 'USGS — Grand Canyon geology', url: 'https://www.usgs.gov/geology-and-ecology-of-national-parks/grand-canyon-geology' },
            { title: 'National Park Service — Grand Canyon’s rocks are incredibly old', url: 'https://www.nps.gov/places/000/grand-canyon-s-rocks-are-incredibly-old.htm' }
          ]
        }
      },
      {
        id: 'structure-interne-terre',
        title: 'Les couches internes de la Terre : croûte, manteau et noyau',
        field: 'Géologie · Structure interne du globe et sismologie',
        summary: 'Découvrir l’organisation concentrique de la Terre, la manière dont on la connaît par les ondes sismiques et les repères de profondeur essentiels.',
        lesson: {
          sections: [
            'Le mot « couches » désigne aussi les enveloppes concentriques qui composent la Terre. Notre planète mesure environ 12 750 km de diamètre, soit un rayon d’environ 6 371 km. Les forages les plus profonds n’atteignent qu’une infime fraction de cette distance : la structure interne est donc connue surtout de façon indirecte, par l’étude de la propagation des ondes sismiques, dont la vitesse et la trajectoire changent selon les matériaux traversés. C’est au tournant du XXe siècle que les scientifiques ont établi que la Terre comprend trois grandes parties : la croûte, le manteau et le noyau.',
            'La croûte est l’enveloppe externe, solide et très mince. On distingue la croûte océanique, de composition basaltique et épaisse de l’ordre de 5 à 10 km, et la croûte continentale, plus épaisse et de composition globalement plus granitique, dont l’épaisseur moyenne se situe autour de 35 à 40 km et peut atteindre environ 70 km sous les grandes chaînes de montagnes. Sa limite avec le manteau est la discontinuité de Mohorovičić, ou Moho, du nom du sismologue croate Andrija Mohorovičić, qui a mis en évidence en 1909 une accélération brusque des ondes sismiques à partir d’une certaine profondeur.',
            'Le manteau s’étend sous la croûte jusqu’à environ 2 900 km de profondeur. Il s’agit d’une roche silicatée dense et chaude, dite semi-solide, qui se déforme très lentement. Sa partie supérieure, plus froide et rigide, forme avec la croûte la lithosphère, d’une épaisseur moyenne d’au moins 80 km, qui est découpée en plaques mobiles. Sous elle se trouve l’asthénosphère, une zone plus ductile sur laquelle la lithosphère se déplace. La limite entre le manteau et le noyau, située vers 2 900 km, est la discontinuité de Gutenberg.',
            'Le noyau est un alliage métallique de fer et de nickel, environ deux fois plus dense que le manteau. Le noyau externe, liquide, a une épaisseur d’environ 2 200 km. Les mouvements de ce métal liquide engendrent le champ magnétique terrestre. Les ondes sismiques de cisaillement (ondes S) ne traversent pas les liquides, ce qui a permis de repérer ce noyau liquide. En 1936, la sismologue danoise Inge Lehmann montre qu’il existe à l’intérieur un noyau interne où les ondes vont plus vite. Ce noyau interne, solide malgré sa température très élevée à cause de la pression, commence vers 5 150 km de profondeur et s’étend jusqu’au centre de la Terre.'
          ],
          example: {
            statement: 'Le noyau externe va d’environ 2 900 km à environ 5 150 km de profondeur. Quelle est son épaisseur approximative ?',
            calculation: 'Épaisseur = 5 150 km − 2 900 km = 2 250 km.',
            answer: 'Environ 2 250 km avec ces repères. Les sources arrondissent souvent cette valeur à environ 2 200 km, car les limites de profondeur sont elles-mêmes des valeurs approchées.'
          },
          exercise: {
            question: 'Pourquoi dit-on que la structure interne de la Terre est connue de façon indirecte ?',
            answer: 'Parce que les forages n’atteignent qu’une infime fraction du rayon terrestre. On déduit la structure interne de la manière dont les ondes sismiques se propagent et changent de vitesse selon les matériaux traversés.'
          },
          exercises: [
            {
              question: 'Qu’est-ce que le Moho ?',
              answer: 'La discontinuité de Mohorovičić, qui sépare la croûte du manteau et se repère par un changement brusque de vitesse des ondes sismiques.'
            },
            {
              question: 'Quelle est la différence entre le noyau externe et le noyau interne ?',
              answer: 'Le noyau externe, de fer et de nickel, est liquide et engendre le champ magnétique. Le noyau interne, de composition voisine, est solide à cause de la pression.'
            },
            {
              question: 'De quoi la lithosphère est-elle composée ?',
              answer: 'De la croûte et de la partie supérieure, rigide, du manteau. Elle est découpée en plaques qui se déplacent sur l’asthénosphère.'
            }
          ],
          sources: [
            { title: 'USGS — This Dynamic Earth: Inside the Earth', url: 'https://pubs.usgs.gov/gip/dynamic/inside.html' },
            { title: 'American Physical Society — Inge Lehmann et le noyau interne (1936)', url: 'https://aps.org/publications/apsnews/202309/history.cfm' },
            { title: 'Science Notes — Layers of the Earth', url: 'https://sciencenotes.org/layers-of-the-earth/' }
          ]
        }
      },
      {
        id: 'datation-des-couches',
        title: 'Dater les couches : datation relative, radiochronologie et âge de la Terre',
        field: 'Géologie · Chronologie relative et absolue',
        summary: 'Distinguer l’ordre des couches de leur âge en années, comprendre la demi-vie des isotopes radioactifs et retracer la détermination de l’âge de la Terre.',
        lesson: {
          sections: [
            'Dater une couche peut signifier deux choses différentes. La datation relative établit seulement un ordre : telle strate est plus ancienne que telle autre, d’après la superposition, les recoupements ou les fossiles. La datation absolue, ou numérique, donne un âge exprimé en années. Elle repose sur la radiochronologie, qui exploite la désintégration radioactive de certains isotopes.',
            'Le principe est le suivant : un isotope radioactif « père » se transforme à vitesse constante en un isotope « fils » stable. Le temps nécessaire pour que la moitié des atomes pères d’un échantillon se soient désintégrés est la demi-vie. En mesurant les proportions de père et de fils, on calcule le temps écoulé depuis que le minéral s’est formé et est devenu un système fermé. La radioactivité naturelle de l’uranium a été découverte en 1896 par Henri Becquerel. L’uranium 238 se transforme en plomb 206 avec une demi-vie d’environ 4,47 milliards d’années, l’uranium 235 en plomb 207 avec environ 704 millions d’années, et le potassium 40 en argon 40 avec environ 1,25 milliard d’années.',
            'Le carbone 14 est un cas particulier : sa demi-vie n’est que d’environ 5 730 ans et il ne permet de dater que des restes organiques (bois, os, tissus) âgés de moins d’environ 50 000 ans, parfois jusqu’à 60 000 ans selon les méthodes. Au-delà, il en reste trop peu pour être mesuré avec fiabilité, et il ne peut donc pas dater des fossiles de dinosaures. Pour les roches, on utilise des couples à très longue demi-vie. Les strates sédimentaires elles-mêmes se prêtent mal à ces mesures, car leurs grains proviennent de roches plus anciennes. On date donc plutôt des niveaux volcaniques intercalés ou des intrusions qui encadrent les couches.',
            'L’âge de la Terre a été déterminé à partir de météorites. Les roches terrestres sont constamment recyclées par la tectonique et le cycle des roches, alors que les météorites sont considérées comme des systèmes restés fermés depuis leur formation. En 1956, le géochimiste américain Clair Patterson publie une étude de la composition isotopique du plomb de la météorite de Canyon Diablo (Arizona) et obtient un âge de 4,55 milliards d’années avec une incertitude d’environ 70 millions d’années. La valeur actuellement admise pour l’âge de la Terre est de 4,54 ± 0,05 milliard d’années, très proche de celle de Patterson.'
          ],
          example: {
            statement: 'Un morceau de bois ancien contient 25 % du carbone 14 initial. La demi-vie du carbone 14 est d’environ 5 730 ans. Quel est son âge approximatif ?',
            calculation: '25 % correspond à deux demi-vies successives (100 % → 50 % → 25 %). Âge ≈ 2 × 5 730 ans = 11 460 ans.',
            answer: 'Environ 11 460 ans. Ce calcul est un ordre de grandeur : en pratique, la mesure demande des corrections et des étalonnages.'
          },
          exercise: {
            question: 'Pourquoi le carbone 14 ne convient-il pas pour dater une roche de 100 millions d’années ?',
            answer: 'Sa demi-vie est trop courte (environ 5 730 ans) : après des dizaines de milliers d’années il n’en reste plus assez pour être mesuré, et il ne concerne que la matière organique.'
          },
          exercises: [
            {
              question: 'Qu’appelle-t-on demi-vie d’un isotope radioactif ?',
              answer: 'Le temps nécessaire pour que la moitié des atomes radioactifs d’un échantillon se soient désintégrés.'
            },
            {
              question: 'Quel isotope fils résulte de la désintégration de l’uranium 238 ?',
              answer: 'Le plomb 206.'
            },
            {
              question: 'Pourquoi a-t-on utilisé des météorites pour estimer l’âge de la Terre ?',
              answer: 'Parce que les roches terrestres sont recyclées par les processus géologiques, alors que les météorites sont considérées comme des systèmes restés fermés depuis la formation du Système solaire.'
            }
          ],
          sources: [
            { title: 'USGS — Radiometric Time Scale', url: 'https://pubs.usgs.gov/gip/geotime/radiometric.html' },
            { title: 'USGS — Canyon Diablo meteorite et âge de la Terre (Clair Patterson, 1956)', url: 'https://www.usgs.gov/media/images/d38-canyon-diablo-amnh-5030-herojpgwideexact1230jpg' },
            { title: 'NIST — Radioactive dating: uranium-238 et carbone 14', url: 'https://www.nist.gov/node/1875781' },
            { title: 'Evolution: Education and Outreach — How Old is Earth, and How Do We Know? (demi-vies)', url: 'https://evolution-outreach.biomedcentral.com/articles/10.1007/s12052-010-0226-0/tables/1' }
          ]
        }
      },
      {
        id: 'echelle-temps-geologiques',
        title: 'L’échelle des temps géologiques',
        field: 'Géologie · Éons, ères, périodes et référentiel de l’ICS',
        summary: 'Connaître la hiérarchie de l’échelle des temps géologiques, ses grandes limites et le statut de l’Anthropocène.',
        lesson: {
          sections: [
            'L’échelle des temps géologiques classe l’histoire de la Terre en unités emboîtées. Elle a été construite à partir des successions de strates et de fossiles, puis calibrée par des datations numériques. Les unités de temps sont, de la plus grande à la plus petite, l’éon, l’ère, la période, l’époque et l’âge. Les ensembles de roches correspondants s’appellent éonothème, érathème, système, série et étage. Le référentiel international est la charte chronostratigraphique de la Commission internationale de stratigraphie (ICS), mise à jour régulièrement ; ses âges numériques restent révisables.',
            'La Terre s’est formée il y a environ 4,54 à 4,57 milliards d’années. L’éon Hadéen, informel, couvre les débuts. L’Archéen commence vers 4 milliards d’années et dure jusqu’à environ 2 500 millions d’années. Le Protérozoïque va de 2 500 à environ 538,8 millions d’années. Le Phanérozoïque, qui débute avec le Cambrien il y a environ 538,8 millions d’années, est l’éon des fossiles abondants. Il comprend trois ères : le Paléozoïque (de 538,8 à environ 251,9 Ma), le Mésozoïque (de 251,9 à 66 Ma, avec le Trias, le Jurassique et le Crétacé) et le Cénozoïque (depuis 66 Ma, avec le Paléogène, le Néogène et le Quaternaire). Selon la charte ICS 2024/12, le Trias commence vers 251,9 Ma, le Jurassique vers 201,4 Ma, le Crétacé vers 143,1 Ma, le Néogène vers 23,04 Ma et le Quaternaire vers 2,58 Ma.',
            'Une limite entre deux unités est définie en un lieu précis par un point stratotypique mondial, ou GSSP (Global Boundary Stratotype Section and Point), aussi appelé « clou d’or ». Un GSSP fixe la base d’un étage dans une coupe de référence, à l’aide d’un marqueur principal, souvent la première apparition d’un fossile. Par exemple, la base du Trias est définie à Meishan (Chine) par l’apparition du conodonte Hindeodus parvus, et la base du Cambrien à Fortune Head (Terre-Neuve, Canada) par celle de la trace fossile Treptichnus pedum. Pour les unités les plus anciennes (environ 1 000 Ma et plus), les limites sont fixées par des âges conventionnels (GSSA) car les coupes de référence sont trop rares.',
            'Nous vivons dans l’Holocène, qui a commencé il y a environ 11 700 ans, au sein du Quaternaire. L’ICS y distingue des étages : le Meghalayen, qui commence il y a environ 4 200 ans, est l’étage actuel. Le terme « Anthropocène », popularisé par le chimiste Paul Crutzen, désigne l’empreinte humaine sur le système terrestre. Un groupe de travail créé en 2009 a proposé d’en faire une époque débutant vers 1952, avec le lac Crawford (Ontario) comme coupe de référence. En mars 2024, la sous-commission du Quaternaire a voté contre cette proposition (12 voix contre, 4 pour), vote approuvé le 20 mars 2024 par l’ICS et l’Union internationale des sciences géologiques. L’Anthropocène n’est donc pas une unité officielle de l’échelle, mais le terme reste employé comme descripteur de l’impact humain.'
          ],
          example: {
            statement: 'D’après les limites de l’ICS, le Mésozoïque commence vers 251,9 Ma et se termine vers 66 Ma. Quelle est sa durée approximative ?',
            calculation: 'Durée = 251,9 Ma − 66 Ma = 185,9 Ma.',
            answer: 'Environ 186 millions d’années. Ces limites sont des estimations qui peuvent être légèrement révisées.'
          },
          exercise: {
            question: 'Pourquoi l’Anthropocène ne figure-t-il pas dans l’échelle des temps géologiques officielle ?',
            answer: 'Parce que la proposition de le formaliser comme époque a été rejetée en mars 2024 par la sous-commission du Quaternaire, puis cette décision a été approuvée par l’ICS et l’UISG. On reste officiellement dans l’Holocène.'
          },
          exercises: [
            {
              question: 'Quelles sont les trois ères du Phanérozoïque ?',
              answer: 'Le Paléozoïque, le Mésozoïque et le Cénozoïque.'
            },
            {
              question: 'Que signifie GSSP ?',
              answer: 'Global Boundary Stratotype Section and Point : un point de référence mondial, dans une coupe de roches précise, qui définit la limite inférieure d’un étage de l’échelle des temps géologiques.'
            },
            {
              question: 'À quelle date approximative se situe la limite entre le Crétacé et le Paléogène ?',
              answer: 'Vers 66 millions d’années.'
            }
          ],
          sources: [
            { title: 'International Commission on Stratigraphy — International Chronostratigraphic Chart (v2024/12)', url: 'https://stratigraphy.org/ICSchart/ChronostratChart2024-12.pdf' },
            { title: 'Wikipedia — Global Boundary Stratotype Section and Point (GSSP)', url: 'https://en.wikipedia.org/wiki/Global_Boundary_Stratotype_Section_and_Point' },
            { title: 'ICS Subcommission on Quaternary Stratigraphy — Working Group on the Anthropocene', url: 'https://quaternary.stratigraphy.org/working-groups/anthropocene' },
            { title: 'IUGS — Déclaration du 20 mars 2024 sur l’Anthropocène', url: 'https://www.iugs.org/_files/ugd/f1fc07_23c6f9e723bc47b9b5fdcd300f806f25.pdf' }
          ]
        }
      },
      {
        id: 'discordances-fossiles-crises',
        title: 'Discordances, fossiles et grandes crises : les ruptures du registre',
        field: 'Géologie · Lacunes stratigraphiques, Siccar Point, Grand Canyon et limite Crétacé-Paléogène',
        summary: 'Comprendre ce que révèlent les discordances et les fossiles, avec trois cas de référence : Siccar Point, le Grand Canyon et la limite Crétacé-Paléogène.',
        lesson: {
          sections: [
            'Une discordance est une surface qui sépare deux ensembles de couches et qui traduit une interruption du registre : une période d’érosion ou de non-dépôt, donc du temps manquant. Dans une discordance angulaire, les couches inférieures sont inclinées alors que les couches supérieures sont presque horizontales. Dans une non-conformité, des roches sédimentaires reposent sur des roches magmatiques ou métamorphiques. Lire une discordance, c’est reconstituer une suite d’événements : dépôt, déformation, soulèvement, érosion, puis nouveau dépôt.',
            'À Siccar Point, sur la côte de l’est de l’Écosse, James Hutton, John Playfair et sir James Hall observent en juin 1788 une discordance angulaire célèbre. Des roches siluriennes (grauwackes) fortement inclinées sont recouvertes par des grès rouges du Dévonien supérieur presque horizontaux. Selon le Scottish Geology Trust, cette surface correspond à une lacune d’environ 65 millions d’années. Playfair écrira plus tard que l’esprit avait le vertige à regarder si loin dans « l’abîme du temps ». Ce site a contribué à convaincre que la Terre est très ancienne et que les processus géologiques sont cycliques.',
            'Le Grand Canyon (Arizona) montre plusieurs discordances. Selon le National Park Service, les roches les plus anciennes exposées, le socle de Vishnu, remontent à environ 1,84 milliard d’années, et la formation de Kaibab, qui forme les bords, à environ 270 millions d’années. John Wesley Powell a décrit la Grande Discordance (Great Unconformity), où les roches paléozoïques reposent sur le socle de Vishnu. Selon le NPS, la discordance angulaire qui sépare les roches paléozoïques du Supergroupe du Grand Canyon représente jusqu’à 750 millions d’années manquantes, et la non-conformité sous ce supergroupe jusqu’à 500 millions d’années. Le canyon lui-même, creusé par le Colorado, n’a été entaillé que durant les 5 à 6 derniers millions d’années.',
            'Les fossiles servent aussi à repérer les ruptures. La limite entre le Crétacé et le Paléogène, datée d’environ 66 millions d’années, est marquée par une extinction de masse. À Gubbio (Italie), une couche d’argile d’environ 1 cm d’épaisseur contient un excès d’iridium, un élément rare dans la croûte mais plus abondant dans les météorites. En 1980, l’équipe de Luis et Walter Alvarez, Frank Asaro et Helen Michel interprète cette anomalie comme la trace d’un impact météoritique. Depuis, l’anomalie a été retrouvée dans plus de 350 sites marins et continentaux, et le cratère de Chicxulub (Yucatán, Mexique) est daté d’environ 66 millions d’années. On estime que près des trois quarts des espèces ont disparu. L’hypothèse de l’impact est largement admise ; le rôle éventuel d’autres facteurs, comme les éruptions des trapps du Deccan, reste discuté.'
          ],
          example: {
            statement: 'À Siccar Point, des couches inclinées sont recouvertes par des couches presque horizontales plus récentes. Dans quel ordre se sont produits les événements ?',
            calculation: 'D’après l’horizontalité originelle, les couches inférieures se sont d’abord déposées à l’horizontale, puis ont été inclinées. La surface supérieure a ensuite été érodée, et de nouveaux sédiments s’y sont déposés.',
            answer: 'Ordre : 1) dépôt des couches inférieures ; 2) inclinaison par déformation ; 3) érosion ; 4) dépôt des couches supérieures. La discordance matérialise la lacune de temps.'
          },
          exercise: {
            question: 'Qu’est-ce qu’une discordance angulaire et que représente-t-elle ?',
            answer: 'C’est une surface séparant des couches inférieures inclinées de couches supérieures presque horizontales. Elle représente une lacune de temps due à de la déformation, de l’érosion ou du non-dépôt.'
          },
          exercises: [
            {
              question: 'Pourquoi l’iridium de la limite Crétacé-Paléogène a-t-il été interprété comme la trace d’un impact ?',
              answer: 'Parce que l’iridium est rare dans la croûte terrestre mais plus abondant dans les météorites, et que sa concentration anormale dans une fine couche d’argile, observée dans de nombreux sites, suggérait un apport extraterrestre.'
            },
            {
              question: 'Quelles roches se trouvent de part et d’autre de la discordance de Siccar Point ?',
              answer: 'Des grauwackes siluriennes inclinées en dessous, et des grès rouges du Dévonien supérieur presque horizontaux au-dessus.'
            },
            {
              question: 'Peut-on dire que le Grand Canyon a été creusé en 1,84 milliard d’années parce que ses roches les plus anciennes ont cet âge ?',
              answer: 'Non. 1,84 milliard d’années est l’âge des roches les plus anciennes. Le canyon, lui, a été creusé pendant les 5 à 6 derniers millions d’années seulement.'
            }
          ],
          sources: [
            { title: 'Scottish Geology Trust — Siccar Point, Hutton’s Unconformity', url: 'https://geoguide.scottishgeologytrust.org/page/3827' },
            { title: 'Kerr, A. (2018), Geoscience Canada — Hutton’s Unconformity at Siccar Point', url: 'https://journals.lib.unb.ca/index.php/GC/article/view/26048' },
            { title: 'National Park Service — Missing time at Grand Canyon (unconformités)', url: 'https://www.nps.gov/articles/000/grcatime-missing-time.htm' },
            { title: 'National Park Service — Grand Canyon: Earth history revealed', url: 'https://www.nps.gov/articles/000/grcatime-geoheritage.htm' },
            { title: 'Goderis et al. (2021), Science Advances — Globally distributed iridium layer within the Chicxulub impact structure', url: 'https://par.nsf.gov/servlets/purl/10244218' },
            { title: 'Encyclopædia Universalis — Impact météoritique de la limite Crétacé-Paléogène', url: 'https://www.universalis.fr/encyclopedie/impact-meteoritique-de-la-limite-cretace-paleogene/' }
          ]
        }
      }
    ]
  },


{
  id: 'structure-interne',
  title: 'La structure interne de la Terre',
  note: 'Six chapitres approfondis sur les enveloppes terrestres, la croûte et le Moho, le manteau, le noyau, les méthodes sismologiques et les sources d’information géophysiques. Les profondeurs et épaisseurs indiquées sont des valeurs moyennes ou approximatives : elles varient selon les régions et les modèles scientifiques. La structure profonde est reconstituée indirectement, car les forages n’atteignent pas le manteau ni le noyau.',
  chapters: [
    {
      id: 'organisation-interne-terre',
      title: 'Les grandes enveloppes internes de la Terre',
      field: 'Géologie · Géophysique · Structure interne terrestre',
      summary: 'Distinguer les enveloppes chimiques et mécaniques de la Terre, comprendre leurs propriétés et situer les principales limites internes.',
      lesson: {
        sections: [
          'La Terre est un corps différencié : ses matériaux ne sont pas répartis uniformément. On distingue classiquement trois grandes enveloppes selon leur composition : la croûte, le manteau et le noyau. La croûte est une enveloppe rocheuse relativement mince ; le manteau est principalement constitué de silicates riches en magnésium et en fer ; le noyau est métallique et composé majoritairement de fer, avec d’autres éléments en proportions encore étudiées. Cette organisation est cohérente avec la densité moyenne de la planète, supérieure à celle des roches affleurant en surface. Elle s’explique en grande partie par la différenciation précoce : lorsque l’intérieur terrestre était beaucoup plus chaud, les matériaux denses ont migré vers le centre tandis que les silicates formaient les enveloppes externes. Cette interprétation est fondée sur plusieurs observations indépendantes et sur des expériences de laboratoire, non sur un échantillonnage direct du noyau.',
          'La classification chimique ne doit pas être confondue avec la classification mécanique. Du point de vue du comportement physique, la lithosphère comprend la croûte et la partie la plus rigide du manteau supérieur. Elle est fragmentée en plaques tectoniques. Sous une grande partie de la lithosphère se trouve l’asthénosphère, une zone du manteau supérieur dont les roches restent majoritairement solides mais peuvent se déformer lentement à l’échelle des temps géologiques. Plus en profondeur, le manteau reste solide dans son ensemble, tout en pouvant s’écouler très lentement. Le noyau, lui, se divise en un noyau externe liquide et un noyau interne solide. Les limites entre ces zones correspondent à des changements de composition, de structure minéralogique ou de propriétés physiques ; elles ne sont donc pas toutes du même type.',
          'Les dimensions données dans les schémas sont des ordres de grandeur. Le rayon terrestre est d’environ 6 371 km ; la limite entre le manteau et le noyau se situe vers 2 900 km de profondeur. Le noyau interne commence à environ 5 150 km de profondeur, selon le modèle de référence employé. La croûte océanique est généralement plus mince que la croûte continentale : elle mesure souvent autour de 5 à 10 km, tandis que la croûte continentale atteint couramment plusieurs dizaines de kilomètres et peut être beaucoup plus épaisse sous les grandes chaînes de montagnes. Il faut également éviter de représenter l’asthénosphère comme un océan global de magma : il s’agit principalement de roche solide, localement partiellement fondue dans certaines conditions. Ces distinctions sont essentielles pour relier la structure interne aux séismes, au volcanisme et aux mouvements des plaques.'
        ],
        example: {
          statement: 'Un schéma simplifié indique que le manteau s’étend de la base de la croûte jusqu’à environ 2 900 km de profondeur. Quelle enveloppe se trouve immédiatement sous le manteau ?',
          calculation: 'On lit les enveloppes de l’extérieur vers le centre : croûte, manteau, puis noyau. La profondeur donnée est une valeur approximative de la limite manteau-noyau.',
          answer: 'Le noyau se trouve sous le manteau. La limite est située vers 2 900 km de profondeur, avec de petites différences selon les modèles et les définitions utilisées.'
        },
        exercise: {
          question: 'Pourquoi faut-il distinguer la classification chimique de la classification mécanique de la Terre ?',
          answer: 'La classification chimique distingue les enveloppes par leur composition, tandis que la classification mécanique les distingue par leur rigidité et leur comportement sous contrainte. Ces deux classifications ne découpent donc pas la Terre de la même manière.'
        },
        exercises: [
          {
            question: 'Quelles sont les trois grandes enveloppes selon la composition ?',
            answer: 'La croûte, le manteau et le noyau.'
          },
          {
            question: 'La majeure partie du manteau est-elle liquide ?',
            answer: 'Non. Le manteau est essentiellement solide, mais ses roches peuvent se déformer et s’écouler très lentement sur les temps géologiques.'
          },
          {
            question: 'Quelle différence majeure existe entre le noyau externe et le noyau interne ?',
            answer: 'Le noyau externe est liquide, alors que le noyau interne est solide, notamment en raison des conditions de pression et de température qui règnent au centre de la Terre.'
          }
        ],
        sources: [
          {
            title: 'USGS — Inside the Earth, This Dynamic Earth',
            url: 'https://pubs.usgs.gov/gip/dynamic/inside.html'
          },
          {
            title: 'USGS — The Interior of the Earth',
            url: 'https://pubs.usgs.gov/gip/interior/'
          },
          {
            title: 'University of Hawaiʻi — Layers of Earth',
            url: 'https://www.manoa.hawaii.edu/exploringourfluidearth/physical/ocean-floor/layers-earth'
          }
        ]
      }
    },
    {
      id: 'croute-terrestre-moho',
      title: 'La croûte terrestre et la discontinuité de Mohorovičić',
      field: 'Géologie · Pétrologie · Sismologie',
      summary: 'Comparer les croûtes continentale et océanique et expliquer comment les données sismiques révèlent la limite entre la croûte et le manteau.',
      lesson: {
        sections: [
          'La croûte est l’enveloppe solide la plus externe de la Terre. Elle existe sous les continents et sous les océans, mais son épaisseur, sa composition et son histoire diffèrent. La croûte océanique est généralement mince et composée principalement de roches mafiques, notamment des basaltes et des gabbros, relativement riches en fer et en magnésium. La croûte continentale est plus hétérogène ; elle contient des roches magmatiques, métamorphiques et sédimentaires, et sa composition moyenne est plus riche en silice que celle de la croûte océanique. Les continents peuvent conserver des roches très anciennes, tandis que la croûte océanique est continuellement créée aux dorsales et recyclée dans les zones de subduction. Ces tendances générales ne signifient pas que toutes les roches d’un continent ou d’un océan ont la même composition.',
          'La discontinuité de Mohorovičić, souvent appelée Moho, marque la limite entre la croûte et le manteau. Elle a été mise en évidence par le sismologue Andrija Mohorovičić en 1909, en étudiant les temps d’arrivée des ondes d’un séisme. Une augmentation de la vitesse des ondes sismiques en profondeur indique un changement des propriétés des matériaux. Le Moho n’est pas une surface visible partout à l’affleurement : sa profondeur est déduite principalement des observations géophysiques et des études de la croûte. Il se situe généralement à quelques kilomètres sous le plancher océanique et à plusieurs dizaines de kilomètres sous les continents ; il peut être plus profond sous certaines chaînes de montagnes. Les chiffres précis varient avec la région et la méthode de mesure.',
          'La croûte et le manteau supérieur immédiatement sous-jacent participent à la lithosphère, mais la base de la lithosphère n’est pas la même limite que le Moho. Le Moho est une limite principalement liée à un changement de composition et de propriétés sismiques ; la base de la lithosphère correspond plutôt à une transition de comportement mécanique et thermique vers un manteau plus déformable. Cette distinction est importante lorsqu’on interprète les cartes de profondeur, les modèles sismiques ou les coupes géologiques. Les forages profonds ont prélevé des matériaux de la croûte, mais aucun forage n’a traversé le Moho continental ou atteint le noyau. Les roches du manteau sont toutefois connues indirectement, notamment grâce à certains fragments remontés par des magmas et à des roches mantelliques exposées dans des contextes géologiques particuliers.'
        ],
        example: {
          statement: 'Une étude indique que le Moho se trouve à 8 km de profondeur sous une zone océanique et à 35 km sous une zone continentale. Quelle conclusion peut-on tirer de ces valeurs ?',
          calculation: 'Écart de profondeur = 35 km - 8 km = 27 km. Les deux valeurs illustrent une croûte généralement plus épaisse sous les continents que sous les océans.',
          answer: 'Dans cet exemple, le Moho est 27 km plus profond sous la zone continentale. Ces nombres illustrent une différence courante, mais ne constituent pas des valeurs universelles pour toutes les régions.'
        },
        exercise: {
          question: 'Comment les sismologues peuvent-ils repérer le Moho sans observer directement cette limite ?',
          answer: 'Ils analysent notamment les changements de vitesse, de trajet et de temps d’arrivée des ondes sismiques, qui révèlent une modification des propriétés des matériaux en profondeur.'
        },
        exercises: [
          {
            question: 'Quelles roches composent principalement la croûte océanique ?',
            answer: 'Principalement des basaltes et des gabbros, deux roches mafiques de composition globalement comparable, mais de texture différente.'
          },
          {
            question: 'Qui a mis en évidence la discontinuité aujourd’hui appelée Moho et en quelle année ?',
            answer: 'Andrija Mohorovičić, en 1909.'
          },
          {
            question: 'Le Moho et la base de la lithosphère désignent-ils la même limite ?',
            answer: 'Non. Le Moho sépare la croûte du manteau ; la base de la lithosphère marque une transition mécanique vers un manteau plus déformable.'
          }
        ],
        sources: [
          {
            title: 'USGS — Volcano Watch: A renewed effort to drill to the Moho',
            url: 'https://www.usgs.gov/observatories/hvo/news/volcano-watch-after-50-years-a-renewed-effort-drill-moho'
          },
          {
            title: 'USGS — Inside the Earth, This Dynamic Earth',
            url: 'https://pubs.usgs.gov/gip/dynamic/inside.html'
          },
          {
            title: 'USGS — The Interior of the Earth',
            url: 'https://pubs.usgs.gov/gip/interior/'
          }
        ]
      }
    },
    {
      id: 'manteau-lithosphere-asthenosphere',
      title: 'Le manteau terrestre, la lithosphère et l’asthénosphère',
      field: 'Géodynamique · Minéralogie · Tectonique des plaques',
      summary: 'Décrire la composition et le comportement du manteau, puis relier la déformation lente des roches aux déplacements des plaques tectoniques.',
      lesson: {
        sections: [
          'Le manteau s’étend du Moho jusqu’à la limite manteau-noyau, située vers 2 900 km de profondeur. Il représente la plus grande partie du volume terrestre. Il est composé principalement de silicates contenant du magnésium et du fer ; dans le manteau supérieur, la péridotite est une roche représentative. Avec l’augmentation de la pression, les minéraux changent de structure cristalline et deviennent plus denses, notamment dans la zone de transition du manteau. Le manteau inférieur présente lui aussi des phases minérales adaptées à des pressions très élevées. Les scientifiques déduisent ces propriétés à partir des ondes sismiques, des matériaux remontés depuis le manteau et d’expériences de laboratoire reproduisant les hautes pressions et températures.',
          'Le manteau est principalement solide : la température élevée ne suffit pas à le rendre entièrement liquide, car la pression augmente également avec la profondeur. Sur des durées courtes, une roche mantellique se comporte comme un solide ; sur des millions d’années, elle peut se déformer et s’écouler lentement. La lithosphère est l’enveloppe externe rigide formée de la croûte et d’une partie du manteau supérieur. Elle est divisée en plaques. L’asthénosphère est une région plus facilement déformable du manteau supérieur située sous la lithosphère dans de nombreuses régions. Elle n’est pas partout une couche uniforme ni un océan de magma : la fusion partielle y est localisée et les proportions de liquide restent généralement limitées en dehors de certains environnements magmatiques.',
          'La chaleur interne de la Terre contribue aux mouvements lents du manteau, souvent décrits en termes de convection et de circulation mantellique. Les plaques sont entraînées par plusieurs mécanismes, dont la traction exercée par les portions froides de lithosphère qui plongent en subduction et les forces associées aux dorsales ; leur importance relative varie selon les plaques et les contextes. Dans les zones de divergence, la remontée du manteau et la diminution de pression peuvent provoquer une fusion partielle et produire du magma. Dans les zones de subduction, l’eau libérée par la plaque plongeante favorise la fusion du manteau sus-jacent. Il est donc incorrect d’affirmer que toutes les plaques flottent sur du magma liquide : elles se déplacent au-dessus de matériaux solides capables de se déformer lentement.'
        ],
        example: {
          statement: 'Une plaque tectonique se déplace de 4 cm par an à vitesse constante. Quelle distance parcourt-elle en 1 000 000 d’années ?',
          calculation: 'Distance = vitesse × durée = 4 cm/an × 1 000 000 ans = 4 000 000 cm = 40 km.',
          answer: 'La distance calculée est de 40 km. Il s’agit d’une extrapolation simplifiée : les vitesses réelles changent selon les plaques, les périodes et les méthodes de mesure.'
        },
        exercise: {
          question: 'Pourquoi le manteau peut-il contribuer au mouvement des plaques tout en restant majoritairement solide ?',
          answer: 'Parce que les roches solides peuvent se déformer lentement sous l’effet de la température, de la pression et des contraintes lorsqu’elles sont soumises à ces conditions pendant de très longues durées.'
        },
        exercises: [
          {
            question: 'Quelle roche est représentative d’une grande partie du manteau supérieur ?',
            answer: 'La péridotite.'
          },
          {
            question: 'L’asthénosphère est-elle un océan continu de magma ?',
            answer: 'Non. Elle est surtout constituée de roche solide déformable ; la fusion partielle n’existe que dans certaines zones et conditions.'
          },
          {
            question: 'Cite un mécanisme qui contribue au déplacement des plaques.',
            answer: 'La traction exercée par une plaque froide qui plonge en subduction est un mécanisme important ; les forces liées aux dorsales contribuent également au mouvement.'
          }
        ],
        sources: [
          {
            title: 'USGS — Are the tectonic plates floating on magma?',
            url: 'https://www.usgs.gov/faqs/are-tectonic-plates-floating-magma'
          },
          {
            title: 'USGS — Inside the Earth, This Dynamic Earth',
            url: 'https://pubs.usgs.gov/gip/dynamic/inside.html'
          },
          {
            title: 'USGS — The Interior of the Earth',
            url: 'https://pubs.usgs.gov/gip/interior/'
          }
        ]
      }
    },
    {
      id: 'noyau-externe-interne',
      title: 'Le noyau terrestre : état physique, composition et origine',
      field: 'Géophysique · Géochimie · Physique des matériaux à haute pression',
      summary: 'Expliquer la distinction entre noyau externe liquide et noyau interne solide, et présenter les indices qui contraignent leur composition.',
      lesson: {
        sections: [
          'Le noyau commence à environ 2 900 km sous la surface et occupe la région centrale de la Terre. Il est constitué majoritairement de fer, avec du nickel et des éléments plus légers dont les proportions exactes restent un sujet de recherche. La composition est déduite de plusieurs contraintes : la densité moyenne de la Terre, son moment d’inertie, les données sismiques, les propriétés des météorites et les expériences sur les alliages soumis à de fortes pressions et températures. Il n’existe pas d’échantillon direct du noyau terrestre ; les descriptions de sa composition sont donc des modèles fortement contraints par des observations, mais elles ne correspondent pas à une analyse chimique directe d’un prélèvement du noyau.',
          'Le noyau externe est liquide. Une preuve majeure est l’absence de propagation directe des ondes de cisaillement S à travers cette région, car un liquide ne transmet pas les contraintes de cisaillement comme un solide. Les ondes de compression P, elles, traversent le noyau externe mais changent de vitesse et de trajectoire. Le noyau interne est considéré comme solide : l’ensemble des observations sismologiques, y compris les ondes converties et les modes propres de la Terre, indique que cette région centrale possède une rigidité compatible avec un solide. La pression extrêmement élevée permet au fer de rester solide au centre malgré une température très élevée. Les limites exactes et les propriétés fines du noyau font l’objet de recherches continues.',
          'Le noyau joue un rôle essentiel dans la dynamique de la planète. La circulation du métal liquide conducteur dans le noyau externe entretient le champ magnétique terrestre par le mécanisme de géodynamo. Le refroidissement progressif de la Terre et la solidification graduelle du noyau interne contribuent à fournir de l’énergie et de la flottabilité au fluide externe ; les détails des contributions thermiques et chimiques sont complexes. Le noyau n’est pas une masse de fer solide d’un seul bloc : sa division en deux régions d’états physiques différents est indispensable pour comprendre les observations sismiques et le champ magnétique. Il faut également distinguer la température, très élevée dans les deux régions, de l’état physique, qui dépend à la fois de la température, de la pression et de la composition.'
        ],
        example: {
          statement: 'Une station sismique enregistre des ondes P qui traversent la région centrale de la Terre, mais les ondes S directes ne traversent pas le noyau externe. Quelle propriété physique cela indique-t-il ?',
          calculation: 'Les ondes P sont des ondes de compression et peuvent se propager dans les solides et les liquides. Les ondes S sont des ondes de cisaillement et ne se propagent pas dans un liquide idéal.',
          answer: 'Ces observations indiquent que le noyau externe est liquide. La conclusion repose sur le comportement des ondes et sur plusieurs données sismologiques complémentaires.'
        },
        exercise: {
          question: 'Comment une température très élevée peut-elle coexister avec un noyau interne solide ?',
          answer: 'La pression augmente fortement vers le centre et modifie les conditions de fusion du matériau. Dans les conditions du noyau interne, le fer allié peut donc rester solide malgré la température élevée.'
        },
        exercises: [
          {
            question: 'Quels sont les deux grands domaines physiques du noyau ?',
            answer: 'Le noyau externe liquide et le noyau interne solide.'
          },
          {
            question: 'Quel élément constitue la majeure partie du noyau ?',
            answer: 'Le fer, accompagné notamment de nickel et d’éléments plus légers.'
          },
          {
            question: 'Pourquoi ne peut-on pas présenter la composition du noyau comme une mesure directe sur échantillon ?',
            answer: 'Parce qu’aucun échantillon direct du noyau n’a été prélevé. Sa composition est inférée à partir de données géophysiques, géochimiques et d’expériences à haute pression.'
          }
        ],
        sources: [
          {
            title: 'USGS — The Interior of the Earth',
            url: 'https://pubs.usgs.gov/gip/interior/'
          },
          {
            title: 'USGS — Cool Earthquake Facts',
            url: 'https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts'
          },
          {
            title: 'IRIS — Exploring the Earth Using Seismology',
            url: 'https://www.iris.edu/hq/inclass/fact-sheet/exploring_earth_using_seismology'
          }
        ]
      }
    },
    {
      id: 'ondes-sismiques-tomographie',
      title: 'Les ondes sismiques et l’exploration indirecte de l’intérieur terrestre',
      field: 'Sismologie · Géophysique · Imagerie du sous-sol',
      summary: 'Comprendre les ondes P et S, les discontinuités sismiques et la tomographie qui permet de reconstruire des modèles de l’intérieur de la Terre.',
      lesson: {
        sections: [
          'Les séismes produisent des ondes qui se propagent dans la Terre et le long de sa surface. Les ondes P, ou ondes primaires, sont des ondes de compression : le mouvement des particules est parallèle à la direction de propagation. Elles peuvent traverser les solides et les liquides et arrivent généralement avant les ondes S. Les ondes S, ou ondes secondaires, sont des ondes de cisaillement : le mouvement des particules est perpendiculaire à la direction de propagation. Elles nécessitent une rigidité au cisaillement et ne traversent donc pas le noyau externe liquide. Les vitesses des ondes dépendent des propriétés élastiques, de la densité, de la température, de la composition et de l’état physique des matériaux. Les changements de vitesse, les réflexions et les réfractions fournissent des indices sur les limites entre les enveloppes terrestres.',
          'Les sismologues enregistrent les mouvements du sol à l’aide de sismomètres et comparent les temps d’arrivée observés aux temps calculés dans des modèles. L’absence de certaines ondes directes dans certaines zones, ainsi que les changements de trajectoire des ondes P, ont permis de déduire l’existence du noyau externe liquide. Des changements de vitesse indiquent également des limites telles que le Moho et la limite manteau-noyau. Toutefois, un seul trajet d’onde ne permet pas de produire une image complète et unique de l’intérieur. Les interprétations s’appuient sur des réseaux de stations, des séismes de différentes positions et des modèles physiques. Les données sont affectées par la couverture des stations, le bruit, les incertitudes de localisation et les simplifications du modèle.',
          'La tomographie sismique combine de nombreux trajets d’ondes pour construire un modèle tridimensionnel des variations de vitesse à l’intérieur de la Terre. Le principe rappelle celui d’une tomographie médicale : plusieurs mesures prises selon des directions différentes contraignent une image interne. Les zones où les ondes sont plus rapides ou plus lentes peuvent correspondre à des différences de température, de composition, de phase minérale ou d’état physique ; leur interprétation doit donc tenir compte du contexte géologique. La tomographie peut mettre en évidence des plaques lithosphériques en subduction, des hétérogénéités du manteau et des structures de la croûte. Elle ne produit pas une photographie directe et parfaite : les résultats dépendent des données disponibles, de la résolution et des hypothèses mathématiques utilisées.'
        ],
        example: {
          statement: 'Une onde P parcourt une distance de 600 km dans un modèle où sa vitesse moyenne est de 6 km/s. Quel temps de parcours simplifié obtient-on ?',
          calculation: 'Temps = distance / vitesse = 600 km / 6 km/s = 100 s.',
          answer: 'Le temps de parcours simplifié est de 100 secondes. Dans la Terre réelle, la vitesse varie le long du trajet ; un calcul précis doit intégrer ces variations.'
        },
        exercise: {
          question: 'Pourquoi les ondes S sont-elles particulièrement utiles pour identifier un domaine liquide à l’intérieur de la Terre ?',
          answer: 'Parce qu’elles nécessitent une rigidité au cisaillement et ne se propagent pas à travers un liquide. Leur comportement, associé à celui des ondes P et à d’autres observations, permet de contraindre l’état physique des enveloppes profondes.'
        },
        exercises: [
          {
            question: 'Quelle est la différence de mouvement entre une onde P et une onde S ?',
            answer: 'Pour une onde P, le mouvement des particules est parallèle à la propagation ; pour une onde S, il est perpendiculaire.'
          },
          {
            question: 'Qu’est-ce que la tomographie sismique ?',
            answer: 'Une méthode qui combine des mesures d’ondes sismiques empruntant de nombreux trajets afin de reconstruire un modèle des variations de propriétés à l’intérieur de la Terre.'
          },
          {
            question: 'Une zone à faible vitesse sismique est-elle nécessairement composée de magma liquide ?',
            answer: 'Non. Une faible vitesse peut être liée à plusieurs facteurs, notamment la température, la composition, les phases minérales ou une fusion partielle locale. L’interprétation exige d’autres contraintes.'
          }
        ],
        sources: [
          {
            title: 'EarthScope Consortium — Seismic Tomography',
            url: 'https://www.earthscope.org/what-is/seismology/seismic-tomography/'
          },
          {
            title: 'IRIS — Exploring the Earth Using Seismology',
            url: 'https://www.iris.edu/hq/inclass/fact-sheet/exploring_earth_using_seismology'
          },
          {
            title: 'USGS — The Science of Earthquakes',
            url: 'https://www.usgs.gov/programs/earthquake-hazards/science-earthquakes'
          }
        ]
      }
    },
    {
      id: 'chaleur-gravite-champ-magnetique',
      title: 'Chaleur interne, gravité et champ magnétique : les autres indices géophysiques',
      field: 'Géophysique · Géothermie · Géomagnétisme',
      summary: 'Montrer comment les mesures de chaleur, de gravité et de magnétisme complètent la sismologie pour contraindre la structure et l’évolution de la Terre.',
      lesson: {
        sections: [
          'La chaleur interne de la Terre provient de plusieurs sources et processus. Une partie est une chaleur résiduelle de la formation de la planète et de sa différenciation ; une autre est produite par la désintégration radioactive d’isotopes présents dans les roches. Le refroidissement et la cristallisation progressive du noyau interne participent aussi au bilan énergétique profond. La chaleur est transférée par conduction dans les matériaux, et par convection dans les régions capables de circuler lentement, notamment le manteau et le noyau externe liquide. Le flux thermique mesuré à la surface varie selon les régions : il est influencé par l’âge de la lithosphère, le volcanisme, la circulation des eaux souterraines et la structure géologique. Il ne permet donc pas, à lui seul, de déduire toute la structure interne.',
          'La gravité et le moment d’inertie apportent des contraintes sur la répartition de la masse à l’intérieur de la planète. La densité moyenne de la Terre est supérieure à celle de nombreuses roches de surface, ce qui indique que les matériaux internes doivent être globalement plus denses. Les mesures gravimétriques permettent d’étudier les variations de masse et de densité dans la croûte et le manteau, mais plusieurs répartitions de matière peuvent parfois expliquer des anomalies semblables. Il faut donc croiser la gravité avec la sismologie, la géologie de terrain et les modèles de composition. De façon générale, les méthodes géophysiques sont complémentaires : chacune mesure une propriété différente et comporte ses propres limites d’interprétation.',
          'Le champ magnétique terrestre est principalement entretenu par la géodynamo dans le noyau externe, où circule un métal liquide électriquement conducteur. Les mouvements du fluide induisent des courants électriques qui génèrent à leur tour un champ magnétique auto-entretenu, à condition que les mouvements et les sources d’énergie restent suffisants. Le champ varie avec le temps et sa polarité s’est inversée à plusieurs reprises au cours de l’histoire géologique. Les roches volcaniques et certains sédiments peuvent enregistrer la direction du champ au moment de leur refroidissement ou de leur dépôt, ce qui permet d’étudier les inversions anciennes. Une inversion n’a pas de périodicité régulière et ne permet pas, à elle seule, de prévoir une date future. Le magnétisme complète ainsi les autres indices sur le noyau et sur l’histoire des roches, sans constituer une mesure directe de la composition profonde.'
        ],
        example: {
          statement: 'Une mesure de laboratoire indique un flux thermique local de 80 mW/m². Comment interpréter cette donnée dans une étude de la structure interne ?',
          calculation: 'Conversion d’unité : 80 mW/m² = 0,080 W/m². Cette valeur décrit un flux thermique par unité de surface pour le site étudié ; elle ne représente pas la température du manteau ni celle du noyau.',
          answer: 'La mesure quantifie le flux de chaleur traversant la surface locale. Pour interpréter son origine, il faut tenir compte du contexte géologique et la comparer à d’autres données, car une valeur isolée ne détermine pas à elle seule la structure profonde.'
        },
        exercise: {
          question: 'Pourquoi les géophysiciens combinent-ils les mesures sismiques, gravimétriques, thermiques et magnétiques ?',
          answer: 'Parce que chaque méthode contraint des propriétés différentes : les ondes sismiques renseignent sur les propriétés élastiques et l’état des matériaux, la gravité sur la distribution de masse, le flux thermique sur le transfert de chaleur et le champ magnétique sur les mouvements du métal conducteur du noyau externe.'
        },
        exercises: [
          {
            question: 'Cite deux contributions majeures à la chaleur interne terrestre.',
            answer: 'La chaleur résiduelle de la formation et de la différenciation de la Terre, et la chaleur produite par la désintégration radioactive d’isotopes. D’autres processus, dont l’évolution du noyau interne, participent également au bilan.'
          },
          {
            question: 'Quel processus est principalement responsable du champ magnétique terrestre actuel ?',
            answer: 'La géodynamo, entretenue par les mouvements du métal liquide électriquement conducteur du noyau externe.'
          },
          {
            question: 'Les inversions du champ magnétique se produisent-elles à intervalles réguliers ?',
            answer: 'Non. Elles sont irrégulières et ne suivent pas une périodicité fixe.'
          }
        ],
        sources: [
          {
            title: 'USGS — How does the Earth’s core generate a magnetic field?',
            url: 'https://www.usgs.gov/faqs/how-does-earths-core-generate-a-magnetic-field'
          },
          {
            title: 'USGS — Introduction to Geomagnetism',
            url: 'https://www.usgs.gov/programs/geomagnetism/introduction-geomagnetism'
          },
          {
            title: 'USGS — Is it true that Earth’s magnetic field occasionally reverses its polarity?',
            url: 'https://www.usgs.gov/faqs/it-true-earths-magnetic-field-occasionally-reverses-its-polarity'
          },
          {
            title: 'USGS — The Interior of the Earth',
            url: 'https://pubs.usgs.gov/gip/interior/'
          }
        ]
      }
    }
  ]
},


{
  id: 'formation-cristaux',
  title: 'La formation des cristaux et des minéraux',
  note: 'Six chapitres sur la définition des minéraux, la structure cristalline, la nucléation et la croissance, la cristallisation des magmas, la précipitation hydrothermale et sédimentaire, ainsi que les méthodes d’identification. Les conditions de formation dépendent de la composition chimique, de la température, de la pression, des fluides et du temps. Les exemples sont représentatifs et ne constituent pas des règles universelles.',
  chapters: [
    {
      id: 'mineraux-et-cristaux',
      title: 'Minéraux, cristaux et organisation de la matière',
      field: 'Minéralogie · Cristallographie · Géologie générale',
      summary: 'Distinguer un minéral, un cristal et une roche, puis comprendre comment l’organisation atomique détermine les propriétés des matériaux naturels.',
      lesson: {
        sections: [
          'Un minéral est généralement défini comme un solide naturel, le plus souvent inorganique, caractérisé par une composition chimique déterminée ou variable dans certaines limites et par une organisation atomique ordonnée. Cette définition possède des cas limites, notamment pour les matériaux amorphes, les substances d’origine biologique et certains composés naturels. Le quartz, la calcite, l’halite et le feldspath sont des exemples de minéraux. Une roche est un matériau géologique constitué d’un assemblage de minéraux, de fragments de roches ou, dans certains cas, de matière minérale peu ou pas cristallisée. Ainsi, le granite est habituellement composé de quartz, de feldspaths et de micas, tandis qu’un marbre est constitué principalement de calcite ou de dolomite selon sa composition.',
          'Un cristal possède un arrangement atomique périodique à longue distance. Cet ordre interne peut exister même si la forme extérieure n’est pas parfaitement géométrique. Lorsqu’un cristal dispose d’espace pour croître, ses faces peuvent refléter les directions privilégiées de son réseau cristallin et produire une forme caractéristique. Cependant, la forme visible dépend aussi de la vitesse de croissance, de l’espace disponible, des impuretés et des interactions avec les cristaux voisins. Un minéral peut donc former de beaux cristaux bien individualisés ou, au contraire, une masse compacte composée de nombreux grains microscopiques. Un solide amorphe, comme le verre volcanique, ne présente pas le même ordre cristallin périodique à longue distance.',
          'La composition chimique ne suffit pas toujours à prédire les propriétés d’un minéral : l’arrangement des atomes compte également. Des substances de composition identique peuvent adopter des structures cristallines différentes, phénomène appelé polymorphisme. Le diamant et le graphite sont tous deux constitués de carbone, mais leurs structures atomiques diffèrent fortement, ce qui explique notamment leurs différences de dureté. À l’inverse, un même type de structure peut accueillir des substitutions chimiques, comme dans plusieurs séries de minéraux. Pour identifier correctement un spécimen, il faut donc combiner plusieurs observations plutôt que se fier uniquement à la couleur ou à la forme extérieure.'
        ],
        example: {
          statement: 'Un échantillon contient des grains de quartz, de feldspath et de mica soudés les uns aux autres. S’agit-il nécessairement d’un seul cristal ?',
          calculation: 'On compare l’échelle des objets : un cristal est un solide dont l’organisation atomique est ordonnée ; une roche peut réunir plusieurs cristaux de minéraux différents.',
          answer: 'Non. Il s’agit vraisemblablement d’une roche composée de plusieurs minéraux, comme un granite si les proportions et la texture correspondent. La présence de plusieurs espèces minérales ne constitue pas un cristal unique.'
        },
        exercise: {
          question: 'Quelle est la différence fondamentale entre un cristal et une roche ?',
          answer: 'Un cristal se caractérise par une organisation atomique ordonnée ; une roche est un matériau géologique qui peut être constitué d’un assemblage de cristaux, de fragments et parfois de matière non cristallisée.'
        },
        exercises: [
          {
            question: 'Quelle est une caractéristique structurale essentielle d’un cristal ?',
            answer: 'Un arrangement atomique périodique à longue distance.'
          },
          {
            question: 'Le diamant et le graphite ont-ils la même composition chimique ?',
            answer: 'Oui, ils sont constitués de carbone, mais leur structure cristalline est différente.'
          },
          {
            question: 'La couleur suffit-elle pour identifier sûrement un minéral ?',
            answer: 'Non. La couleur peut varier en raison d’impuretés ou de défauts et plusieurs minéraux peuvent avoir des couleurs semblables.'
          }
        ],
        sources: [
          {
            title: 'USGS — What is the difference between a rock and a mineral?',
            url: 'https://www.usgs.gov/faqs/what-difference-between-a-rock-and-a-mineral'
          },
          {
            title: 'USGS — Minerals 101',
            url: 'https://www.usgs.gov/science/science-explorer/minerals/minerals-101'
          },
          {
            title: 'USGS — Minerals and Rocks',
            url: 'https://pubs.usgs.gov/of/1994/0636/report.pdf'
          }
        ]
      }
    },
    {
      id: 'structure-cristalline',
      title: 'Réseau cristallin, maille élémentaire et propriétés des minéraux',
      field: 'Cristallographie · Minéralogie physique · Chimie du solide',
      summary: 'Expliquer le réseau cristallin, les systèmes cristallins, les défauts structuraux et leurs effets sur les propriétés observables.',
      lesson: {
        sections: [
          'Dans un cristal, les atomes, ions ou groupes d’atomes occupent des positions organisées selon une périodicité. La maille élémentaire est un volume géométrique qui, répété dans les trois directions de l’espace, décrit le réseau cristallin. Les longueurs des arêtes et les angles entre elles caractérisent la géométrie de cette maille. Les cristaux sont classés dans sept systèmes cristallins selon les symétries et les paramètres de leur maille ; les réseaux de Bravais décrivent les arrangements périodiques distincts compatibles avec ces symétries. Cette classification est une description géométrique de la structure interne, et non une classification fondée uniquement sur l’apparence extérieure du spécimen.',
          'La structure cristalline contribue à expliquer des propriétés comme le clivage, la dureté, la densité et l’anisotropie. Le clivage correspond à la tendance d’un minéral à se rompre selon certains plans de sa structure, lorsque les liaisons y sont relativement moins résistantes. La dureté mesure la résistance à la rayure et ne doit pas être confondue avec la ténacité, qui décrit la réponse à la rupture ou à la déformation. Les propriétés peuvent varier selon la direction dans certains cristaux : on parle alors d’anisotropie. Les observations macroscopiques prennent leur sens lorsqu’elles sont reliées à la structure atomique et aux liaisons chimiques, mais la relation n’est pas toujours simple, car les défauts et les conditions de formation interviennent également.',
          'Les cristaux naturels ne sont pas parfaitement idéaux. Ils peuvent contenir des lacunes, des atomes substitués, des dislocations, des inclusions fluides ou solides et des zones de composition différente. Ces défauts peuvent modifier la couleur, la conductivité, la résistance mécanique et le comportement optique. Des éléments en traces peuvent colorer un minéral sans changer son espèce minérale, tandis qu’une modification importante de composition ou de structure peut conduire à une autre phase. La diffraction des rayons X permet d’étudier l’organisation cristalline en mesurant les directions et intensités des rayons diffractés par les plans atomiques. Elle complète les observations optiques et les analyses chimiques, en particulier lorsque des minéraux sont trop fins pour être identifiés à l’œil nu.'
        ],
        example: {
          statement: 'Deux spécimens sont constitués de carbone : l’un est du diamant et l’autre du graphite. Pourquoi leurs propriétés mécaniques sont-elles très différentes ?',
          calculation: 'La composition est identique, mais les atomes ne sont pas reliés de la même manière dans les deux structures. Le diamant possède un réseau tridimensionnel fortement lié ; le graphite comporte des feuillets fortement liés dans leur plan et plus faiblement liés entre eux.',
          answer: 'Leurs propriétés diffèrent parce que leur structure et leurs liaisons sont différentes. Le diamant est très dur, alors que le graphite se sépare facilement en feuillets. Cette comparaison illustre le rôle de la structure cristalline.'
        },
        exercise: {
          question: 'Comment la structure cristalline peut-elle influencer le clivage d’un minéral ?',
          answer: 'Elle crée des directions où la séparation est plus facile en raison de la disposition des atomes et de la résistance relative des liaisons. Le clivage se manifeste donc selon des plans privilégiés.'
        },
        exercises: [
          {
            question: 'À quoi sert une maille élémentaire ?',
            answer: 'Elle décrit le motif géométrique périodique qui, répété dans l’espace, permet de représenter le réseau cristallin.'
          },
          {
            question: 'Quelle propriété mesure l’échelle de Mohs ?',
            answer: 'La dureté relative, c’est-à-dire la résistance à la rayure.'
          },
          {
            question: 'Quelle méthode permet d’étudier la structure cristalline à partir de la diffraction ?',
            answer: 'La diffraction des rayons X.'
          }
        ],
        sources: [
          {
            title: 'USGS — Information Handout: X-Ray Powder Diffraction',
            url: 'https://pubs.usgs.gov/info/diffraction/html/index.html'
          },
          {
            title: 'OpenStax — Chemistry: Atoms First 2e, Chapter 15 Introduction',
            url: 'https://openstax.org/books/chemistry-atoms-first-2e/pages/15-introduction'
          },
          {
            title: 'USGS — Minerals and Rocks',
            url: 'https://pubs.usgs.gov/of/1994/0636/report.pdf'
          }
        ]
      }
    },
    {
      id: 'nucleation-croissance-cristalline',
      title: 'Nucléation et croissance cristalline',
      field: 'Cristallogenèse · Thermodynamique · Géochimie',
      summary: 'Comprendre comment apparaissent les premiers germes cristallins, comment ils grandissent et pourquoi la vitesse de croissance contrôle la taille et la forme des cristaux.',
      lesson: {
        sections: [
          'La cristallisation commence souvent par la nucléation, c’est-à-dire l’apparition de petits amas suffisamment stables pour servir de germes à un cristal. Dans une solution, la nucléation peut se produire spontanément dans le fluide ou être facilitée par une surface préexistante, comme une paroi, une particule ou un cristal déjà présent. On distingue ainsi la nucléation homogène, qui se produit dans le volume de la phase, et la nucléation hétérogène, favorisée par une interface. La formation d’un germe dépend de l’énergie nécessaire pour créer une nouvelle interface et du gain énergétique associé à la formation de la phase cristalline. Une solution sursaturée peut donc rester temporairement sans cristalliser avant qu’un germe stable apparaisse.',
          'Après la nucléation, un cristal grandit lorsque les atomes, ions ou molécules s’attachent à sa surface dans un arrangement compatible avec le réseau. La croissance dépend notamment de la sursaturation, de la température, de la composition du fluide, de la diffusion des espèces chimiques et de la présence d’impuretés. Une forte sursaturation peut favoriser la formation de nombreux germes, ce qui répartit la matière disponible entre beaucoup de cristaux et peut produire une population de petits cristaux. Lorsque la nucléation est moins abondante et que l’alimentation chimique persiste, certains cristaux peuvent devenir plus grands. Cette tendance n’est pas une loi absolue : les conditions changent au cours du processus, et la croissance peut être limitée par le transport des éléments ou par des réactions de surface.',
          'La forme extérieure d’un cristal, appelée habitus cristallin, ne dépend pas seulement de sa structure idéale. Les faces dont la croissance est relativement lente peuvent rester visibles, tandis que d’autres disparaissent plus rapidement. Les impuretés, les variations de température, les changements de composition et l’espace disponible modifient l’habitus. Des cristaux peuvent être prismatiques, tabulaires, aciculaires ou présenter d’autres formes caractéristiques, mais un même minéral peut avoir plusieurs habitus. Les cristaux peuvent également se gêner mutuellement et former des agrégats imbriqués plutôt que des formes individuelles complètes. La taille et la forme observées conservent parfois des indices sur les conditions de croissance, mais leur interprétation exige de tenir compte de l’ensemble de l’histoire géologique du spécimen.'
        ],
        example: {
          statement: 'Deux expériences utilisent la même solution minérale. Dans la première, de nombreux germes apparaissent ; dans la seconde, peu de germes se forment et la quantité totale de matière disponible est comparable. Quelle différence de taille peut-on raisonnablement attendre ?',
          calculation: 'Si la quantité de matière disponible est répartie entre un grand nombre de cristaux, chaque cristal reçoit en moyenne une part plus faible. Avec moins de germes, davantage de matière peut alimenter chacun d’eux, si les autres conditions restent comparables.',
          answer: 'La première expérience tend à produire plus de cristaux de petite taille, tandis que la seconde peut produire moins de cristaux plus grands. C’est une tendance conditionnelle, pas une règle garantie indépendamment de la diffusion, du temps et des conditions chimiques.'
        },
        exercise: {
          question: 'Pourquoi une solution sursaturée ne cristallise-t-elle pas nécessairement instantanément ?',
          answer: 'Parce que la formation d’un germe stable exige de franchir une barrière énergétique liée notamment à la création d’une interface. La nucléation peut donc être retardée, même si la cristallisation est thermodynamiquement favorisée.'
        },
        exercises: [
          {
            question: 'Qu’est-ce que la nucléation ?',
            answer: 'L’apparition de germes suffisamment stables pour initier la croissance d’une nouvelle phase cristalline.'
          },
          {
            question: 'Quelle différence existe entre nucléation homogène et hétérogène ?',
            answer: 'La nucléation homogène se produit dans le volume de la phase ; la nucléation hétérogène est favorisée par une surface ou une interface préexistante.'
          },
          {
            question: 'Cite deux facteurs qui influencent la croissance d’un cristal.',
            answer: 'Par exemple, la sursaturation et la température ; la composition du fluide, la diffusion et les impuretés interviennent également.'
          }
        ],
        sources: [
          {
            title: 'USGS — Physical-Chemical Mechanisms That Affect Regulation of Crystallization',
            url: 'https://wwwbrr.cr.usgs.gov/projects/GWC_Crystal/Scanned_files/Physical-chemical_62.pdf'
          },
          {
            title: 'Mindat — Crystal growth',
            url: 'https://www.mindat.org/glossary/crystal_growth'
          },
          {
            title: 'Geology.com — Crystal Habits and Forms of Minerals and Gems',
            url: 'https://geology.com/minerals/crystal-habit/'
          }
        ]
      }
    },
    {
      id: 'cristallisation-magmatique',
      title: 'Cristallisation des magmas et formation des roches ignées',
      field: 'Pétrologie magmatique · Minéralogie · Géochimie',
      summary: 'Relier le refroidissement des magmas à l’apparition des minéraux, à la texture des roches et à la cristallisation fractionnée.',
      lesson: {
        sections: [
          'Un magma est un matériau silicaté naturel à haute température qui contient généralement un liquide, des cristaux et parfois une phase gazeuse. Lorsqu’il refroidit, les minéraux ne cristallisent pas tous au même moment : leur apparition dépend de la composition du magma, de la pression, de la température et de la présence de composants volatils. Les premiers cristaux modifient progressivement la composition du liquide restant en prélevant certains éléments chimiques. Les séries de réactions magmatiques décrivent des tendances générales, mais l’ordre exact de cristallisation dépend du système étudié. Il serait donc incorrect de supposer que tous les magmas suivent une séquence identique ou que chaque minéral apparaît à une température unique, indépendante de la composition et de la pression.',
          'La vitesse de refroidissement influence fortement la texture des roches ignées. Un refroidissement relativement lent en profondeur laisse généralement davantage de temps aux cristaux pour croître et peut produire une texture grenue, comme dans de nombreux granites et gabbros. Un refroidissement rapide en surface ou près de la surface tend à produire des cristaux plus petits, comme dans de nombreux basaltes ; si le refroidissement est extrêmement rapide, une partie du matériau peut rester vitreuse et ne pas former de cristaux bien ordonnés. Certaines roches possèdent une texture porphyrique, avec de gros cristaux formés avant une matrice plus fine, ce qui indique généralement plusieurs étapes de refroidissement ou des changements de conditions. La texture fournit des indices sur l’histoire thermique, mais elle doit être interprétée avec la composition et les relations de terrain.',
          'La cristallisation fractionnée se produit lorsque des cristaux se séparent du liquide magmatique ou cessent d’échanger efficacement avec lui. Le liquide résiduel change alors de composition, ce qui peut conduire à la formation d’assemblages minéraux différents au cours de l’évolution du magma. Le mélange de magmas, l’assimilation de roches encaissantes et la séparation de fluides peuvent également modifier la composition. Dans une chambre magmatique, les cristaux peuvent s’accumuler et former des roches à texture particulière. Les exemples de granite et de basalte illustrent des tendances de composition et de refroidissement, mais ils ne suffisent pas à décrire toute la diversité des roches magmatiques. Les géologues combinent l’observation microscopique, les analyses chimiques et le contexte géologique pour reconstruire ces processus.'
        ],
        example: {
          statement: 'Deux magmas de composition comparable se refroidissent : l’un lentement en profondeur, l’autre rapidement près de la surface. Quelle différence texturale est généralement attendue ?',
          calculation: 'Le temps disponible pour la croissance cristalline est plus long lors d’un refroidissement lent et plus court lors d’un refroidissement rapide.',
          answer: 'Le magma refroidi lentement tend à former des cristaux plus gros et une texture grenue ; celui refroidi rapidement tend à former des cristaux plus petits, voire du verre si la cristallisation est empêchée. La composition et l’histoire exacte peuvent toutefois modifier le résultat.'
        },
        exercise: {
          question: 'Pourquoi la taille des cristaux peut-elle renseigner sur l’histoire de refroidissement d’une roche magmatique ?',
          answer: 'Parce que la croissance des cristaux nécessite du temps. Un refroidissement lent favorise généralement des cristaux plus grands, tandis qu’un refroidissement rapide limite leur croissance.'
        },
        exercises: [
          {
            question: 'Quel type de roche magmatique présente souvent une texture grenue ?',
            answer: 'Une roche plutonique refroidie lentement en profondeur, comme de nombreux granites ou gabbros.'
          },
          {
            question: 'Que signifie cristallisation fractionnée ?',
            answer: 'La séparation de cristaux du liquide magmatique, qui modifie la composition du liquide restant.'
          },
          {
            question: 'Un refroidissement rapide garantit-il toujours une roche entièrement vitreuse ?',
            answer: 'Non. Il peut produire de très petits cristaux ou une texture mixte ; une vitrification importante dépend notamment de la composition et de la rapidité du refroidissement.'
          }
        ],
        sources: [
          {
            title: 'USGS — Minerals and Rocks',
            url: 'https://pubs.usgs.gov/of/1994/0636/report.pdf'
          },
          {
            title: 'USGS — This Dynamic Earth: The Story of Plate Tectonics',
            url: 'https://pubs.usgs.gov/gip/dynamic/'
          },
          {
            title: 'OpenStax — Chemistry: Atoms First 2e, Chapter 15 Introduction',
            url: 'https://openstax.org/books/chemistry-atoms-first-2e/pages/15-introduction'
          }
        ]
      }
    },
    {
      id: 'cristallisation-hydrothermale-sedimentaire',
      title: 'Cristallisation hydrothermale, évaporitique et sédimentaire',
      field: 'Géochimie aqueuse · Géologie des gisements · Sédimentologie',
      summary: 'Étudier la précipitation des minéraux à partir des fluides, l’évaporation des eaux salées et la formation de cristaux dans les cavités et les sédiments.',
      lesson: {
        sections: [
          'Les fluides hydrothermaux sont des eaux chaudes contenant des substances dissoutes qui circulent dans les fractures, les pores et les roches. Leurs conditions physiques et chimiques changent pendant leur déplacement : refroidissement, variation de pression, mélange avec une autre eau, ébullition dans certains contextes ou réaction avec les roches encaissantes. Ces changements peuvent réduire la solubilité d’un composé ou modifier les espèces chimiques présentes, ce qui entraîne la précipitation de minéraux. Le quartz, la calcite, la fluorite et certains sulfures peuvent se former dans des systèmes hydrothermaux, mais les assemblages dépendent fortement de la température, de la composition du fluide, du pH, du potentiel d’oxydoréduction et de la géologie locale. La présence d’un minéral ne permet donc pas, à elle seule, de reconstruire une condition unique de formation.',
          'Les minéraux évaporitiques se forment lorsque l’évaporation concentre une eau contenant des ions dissous jusqu’à ce que certains minéraux précipitent. Dans des bassins où l’apport d’eau et l’évaporation sont équilibrés de manière particulière, des minéraux comme la halite et le gypse peuvent se déposer en couches. L’ordre de précipitation dépend de la composition initiale de l’eau, de la température, de la pression et des transformations ultérieures. Les séquences observées dans les roches évaporitiques peuvent être modifiées par la dissolution, la recristallisation ou l’arrivée de nouveaux fluides. Il ne faut donc pas considérer chaque succession minérale comme une séquence universelle, même si la concentration progressive des solutions constitue un mécanisme fondamental.',
          'La précipitation minérale peut également se produire dans les eaux souterraines, les pores des sédiments, les grottes et les cavités de roches volcaniques. Les géodes peuvent présenter une enveloppe minéralisée et des cristaux qui se développent vers l’intérieur d’une cavité, souvent à partir de fluides circulants. La calcite peut précipiter dans des grottes lorsque les conditions de l’eau et du dioxyde de carbone changent, formant notamment des stalactites et des stalagmites. Dans les sédiments, certains minéraux se forment après le dépôt, pendant la diagenèse, par réactions entre les grains et les eaux interstitielles. Ces processus peuvent cimenter les sédiments, remplacer des minéraux plus anciens ou produire de nouveaux cristaux. La distinction entre précipitation directe et transformation postérieure doit être fondée sur les textures, les relations entre minéraux et les données géochimiques.'
        ],
        example: {
          statement: 'Une eau souterraine contient des ions calcium et fluorure. Si les conditions deviennent favorables à la précipitation de fluorite, quelle phase solide peut se former ?',
          calculation: 'La fluorite a pour formule CaF2. Sa formation peut être représentée par : Ca2+ + 2 F- → CaF2(s). La réaction ne se produit que si les conditions de solution permettent la précipitation.',
          answer: 'La fluorite (CaF2) peut précipiter. La présence de calcium et de fluorure ne garantit pas à elle seule la formation du minéral : la concentration, l’activité des ions et les conditions chimiques déterminent si la solution atteint la saturation nécessaire.'
        },
        exercise: {
          question: 'Cite deux changements pouvant déclencher la précipitation de minéraux dans un fluide hydrothermal.',
          answer: 'Par exemple, un refroidissement et un changement de pH ; le mélange de fluides, une variation de pression ou une réaction avec la roche encaissante peuvent également favoriser la précipitation.'
        },
        exercises: [
          {
            question: 'Comment les minéraux évaporitiques se forment-ils généralement ?',
            answer: 'Par concentration d’une eau chargée en ions dissous, souvent sous l’effet de l’évaporation, jusqu’à la précipitation de phases minérales.'
          },
          {
            question: 'Quelle formule chimique correspond à la fluorite ?',
            answer: 'CaF2.'
          },
          {
            question: 'Qu’est-ce que la diagenèse ?',
            answer: 'L’ensemble des transformations physiques, chimiques et biologiques qui affectent les sédiments après leur dépôt, notamment la compaction et la cimentation.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry: Precipitation and Dissolution',
            url: 'https://openstax.org/books/chemistry-atoms-first-2e/pages/15-1-precipitation-and-dissolution'
          },
          {
            title: 'USGS — Information Handout: X-Ray Powder Diffraction',
            url: 'https://pubs.usgs.gov/info/diffraction/html/index.html'
          },
          {
            title: 'Geology.com — Crystal Habits and Forms of Minerals and Gems',
            url: 'https://geology.com/minerals/crystal-habit/'
          }
        ]
      }
    },
    {
      id: 'identification-mineraux-cristaux',
      title: 'Identifier les minéraux et reconstituer leur histoire de croissance',
      field: 'Minéralogie descriptive · Pétrographie · Méthodes analytiques',
      summary: 'Utiliser les propriétés physiques, les observations microscopiques et les méthodes instrumentales pour identifier les minéraux sans s’appuyer sur un seul indice.',
      lesson: {
        sections: [
          'L’identification d’un minéral repose sur un ensemble de propriétés : dureté, éclat, couleur, trait, clivage, fracture, densité, magnétisme et réaction à certains réactifs lorsqu’elle est pertinente et réalisée dans des conditions adaptées. La couleur est souvent peu diagnostique, car les impuretés et les défauts du réseau peuvent la modifier. La dureté de Mohs est une échelle comparative allant de 1 pour le talc à 10 pour le diamant ; elle ne constitue pas une mesure linéaire de la résistance mécanique. Les tests doivent être choisis selon l’échantillon et réalisés avec prudence afin de ne pas l’endommager inutilement. Un diagnostic fiable s’appuie sur plusieurs caractères concordants et sur le contexte géologique, et non sur une ressemblance visuelle isolée.',
          'L’observation au microscope polarisant permet d’étudier les minéraux dans les lames minces de roche. Les propriétés optiques, notamment le comportement en lumière polarisée, l’indice de réfraction relatif, le pléochroïsme et les couleurs d’interférence, aident à distinguer les espèces et à décrire les relations entre grains. La diffraction des rayons X identifie des structures cristallines en comparant les données mesurées à des références. Des méthodes chimiques, comme la fluorescence X ou la microsonde électronique, renseignent sur la composition élémentaire, tandis que certaines techniques spectroscopiques apportent des informations complémentaires. Aucune méthode ne répond à toutes les questions : le choix dépend de la taille des grains, de la nature de l’échantillon, de la précision recherchée et des moyens disponibles.',
          'La texture et les relations entre cristaux peuvent révéler une partie de leur histoire. Des cristaux inclus dans d’autres minéraux sont généralement antérieurs à la partie de l’hôte qui les enferme, mais des réactions ultérieures peuvent compliquer cette lecture. Des zones concentriques de composition différente peuvent enregistrer des variations du fluide ou du magma pendant la croissance. Des inclusions fluides piégées dans certains cristaux peuvent conserver des informations sur les fluides anciens, à condition de vérifier leur origine et leur évolution après piégeage. Les formes cristallines, les bordures de réaction, les fractures et les assemblages minéraux sont autant d’indices à confronter. Une reconstruction robuste combine les observations de terrain, la pétrographie et les analyses instrumentales ; elle exprime aussi les incertitudes lorsque plusieurs interprétations restent possibles.'
        ],
        example: {
          statement: 'Un minéral est violet et possède une forme prismatique. Peut-on conclure avec certitude qu’il s’agit d’améthyste ?',
          calculation: 'On vérifie d’autres critères : dureté, éclat, clivage, fracture, contexte géologique et, si nécessaire, propriétés optiques ou structure cristalline. L’améthyste est une variété violette de quartz, mais la couleur et la forme seules ne suffisent pas à confirmer l’identification.',
          answer: 'Non. Ces deux indices sont compatibles avec l’améthyste, mais ils ne suffisent pas à l’identifier avec certitude. Il faut confronter plusieurs propriétés diagnostiques et recourir à une analyse instrumentale si nécessaire.'
        },
        exercise: {
          question: 'Pourquoi faut-il utiliser plusieurs propriétés pour identifier un minéral ?',
          answer: 'Parce que plusieurs minéraux peuvent partager une couleur ou une forme semblable, et qu’un même minéral peut varier en apparence. La convergence de plusieurs propriétés augmente la fiabilité du diagnostic.'
        },
        exercises: [
          {
            question: 'Quelle est la valeur de dureté de Mohs du quartz ?',
            answer: '7 sur l’échelle de Mohs.'
          },
          {
            question: 'Quelle méthode est particulièrement utile pour déterminer une structure cristalline ?',
            answer: 'La diffraction des rayons X.'
          },
          {
            question: 'Que peuvent indiquer des zones de composition successives dans un cristal ?',
            answer: 'Elles peuvent enregistrer des variations des conditions ou de la composition pendant la croissance, sous réserve d’écarter les transformations postérieures.'
          }
        ],
        sources: [
          {
            title: 'USGS — Natural Gemstones: Mineral Gemstones',
            url: 'https://pubs.usgs.gov/gip/gemstones/mineral.html'
          },
          {
            title: 'USGS — Information Handout: X-Ray Powder Diffraction',
            url: 'https://pubs.usgs.gov/info/diffraction/html/index.html'
          },
          {
            title: 'USGS — What is the difference between a rock and a mineral?',
            url: 'https://www.usgs.gov/faqs/what-difference-between-a-rock-and-a-mineral'
          }
        ]
      }
    }
  ]
},

{
  id: 'geologie-mineraux',
  title: 'Les différents types de minéraux',
  note: 'Six chapitres pour comprendre la définition d’un minéral, les silicates, les carbonates, les oxydes et hydroxydes, les sulfures, puis les sulfates, halogénures, phosphates et éléments natifs. La classification dépend principalement de la composition chimique et de la structure cristalline ; les propriétés visibles seules ne suffisent pas toujours à identifier un minéral.',
  chapters: [
    {
      id: 'definition-classification-mineraux',
      title: 'Définir un minéral et comprendre sa classification',
      field: 'Géologie · Minéralogie générale',
      summary: 'Distinguer minéral, roche et minerai, puis comprendre pourquoi la composition chimique et l’organisation atomique servent à classer les minéraux.',
      lesson: {
        sections: [
          'Un minéral est généralement défini comme une substance naturelle, normalement inorganique, solide, dotée d’une structure interne ordonnée et d’une composition chimique caractéristique. Cette définition permet de distinguer un minéral d’un simple mélange. Des cas particuliers existent, notamment pour certaines substances naturelles et les matériaux d’origine biologique ; il faut donc éviter de réduire la minéralogie à la seule apparence extérieure.',
          'Une roche est un matériau géologique constitué d’un assemblage d’un ou de plusieurs minéraux, ou parfois de matière minérale peu différenciée. Le granite, par exemple, contient couramment du quartz, des feldspaths et des micas. Un minerai est, quant à lui, un matériau dont l’exploitation permet d’obtenir une substance utile dans des conditions économiques données : ce terme dépend donc aussi du contexte technique et économique, et non uniquement de la composition minérale.',
          'La classification minéralogique s’appuie notamment sur la composition chimique et la structure cristalline. Les grandes classes usuelles comprennent les silicates, les carbonates, les oxydes, les sulfures, les sulfates, les halogénures, les phosphates et les éléments natifs. Dans plusieurs classes, l’ion négatif principal ou le groupement anionique caractéristique joue un rôle central. Les silicates sont particulièrement abondants dans la croûte et le manteau terrestres.',
          'La formule chimique résume les éléments présents et leurs proportions idéalisées, mais certains minéraux acceptent des substitutions chimiques. L’olivine, par exemple, forme une série entre des pôles riches en magnésium et en fer. Une formule peut donc comporter des parenthèses ou des variables. Pour une identification rigoureuse, la chimie doit être interprétée avec la structure cristalline et les propriétés physiques, plutôt que séparément.'
        ],
        example: {
          statement: 'Un échantillon contient du quartz et des feldspaths. Faut-il le classer automatiquement comme un minéral unique ?',
          calculation: 'Comparer la notion de minéral, qui correspond à une espèce ou à une phase minérale, avec celle de roche, qui peut réunir plusieurs minéraux.',
          answer: 'Non. Le quartz et les feldspaths sont des minéraux distincts. Un échantillon qui les rassemble peut être une roche, par exemple un granite si sa composition et sa texture correspondent à cette roche.'
        },
        exercise: {
          question: 'Quelle différence essentielle existe entre un minéral et une roche ?',
          answer: 'Un minéral possède une composition et une structure caractéristiques ; une roche est généralement un assemblage de minéraux ou de matière minérale.'
        },
        exercises: [
          {
            question: 'Quels sont deux critères importants de classification des minéraux ?',
            answer: 'La composition chimique et la structure cristalline.'
          },
          {
            question: 'Le mot « minerai » désigne-t-il simplement n’importe quel minéral métallique ?',
            answer: 'Non. Il désigne un matériau exploitable pour en extraire une substance utile, compte tenu notamment des conditions techniques et économiques.'
          },
          {
            question: 'Pourquoi la formule chimique ne suffit-elle pas toujours à identifier un minéral ?',
            answer: 'Parce qu’il faut aussi tenir compte de la structure cristalline, des substitutions chimiques possibles et des propriétés physiques.'
          }
        ],
        sources: [
          {
            title: 'U.S. Geological Survey — Minerals 101',
            url: 'https://www.usgs.gov/science/science-explorer/minerals/minerals-101'
          },
          {
            title: 'U.S. Geological Survey — What is the difference between a rock and a mineral?',
            url: 'https://www.usgs.gov/faqs/what-difference-between-a-rock-and-a-mineral'
          },
          {
            title: 'Physical Geology, 2nd Edition — Mineral Groups',
            url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-3-mineral-groups/'
          }
        ]
      }
    },
    {
      id: 'mineraux-silicates',
      title: 'Les silicates : quartz, feldspaths, micas et minéraux associés',
      field: 'Géologie · Silicates et minéraux formateurs de roches',
      summary: 'Étudier le rôle des tétraèdres silicatés et les principales familles de silicates présentes dans les roches magmatiques, sédimentaires et métamorphiques.',
      lesson: {
        sections: [
          'Les silicates constituent la classe minérale dominante dans la croûte terrestre et sont également très importants dans le manteau. Leur unité structurale fondamentale est le tétraèdre silicaté, formé d’un atome de silicium associé à quatre atomes d’oxygène. Ces tétraèdres peuvent rester isolés ou partager des oxygènes, formant des chaînes, des feuillets ou des réseaux tridimensionnels. Cette organisation influence les propriétés et les plans de clivage des minéraux.',
          'Le quartz, de formule SiO2, possède un réseau tridimensionnel et ne présente pas de clivage net ; sa fracture est souvent conchoïdale. Les feldspaths sont un groupe majeur de silicates, comprenant notamment les feldspaths potassiques et les plagioclases. Ils sont fréquents dans les roches magmatiques et métamorphiques. Leur identification exige d’observer plusieurs caractères, car leurs couleurs peuvent varier et se ressembler.',
          'Les micas, comme la muscovite et la biotite, sont des silicates en feuillets. Ils présentent un clivage basal très marqué, qui permet de les séparer en lamelles. Les pyroxènes et les amphiboles sont des silicates en chaînes, avec des structures et des clivages différents. L’olivine, dont la composition varie entre des pôles riches en magnésium et en fer, est fréquente dans certaines roches magmatiques mafiques et ultramafiques.',
          'La structure des silicates fournit un lien entre l’échelle atomique et les observations de terrain. Elle contribue à expliquer pourquoi certains minéraux se séparent en feuillets, tandis que d’autres se fracturent sans plan de clivage évident. Toutefois, une propriété isolée ne constitue pas une preuve définitive : la couleur, la taille des grains, l’altération et les mélanges de minéraux peuvent compliquer l’identification.'
        ],
        example: {
          statement: 'Un minéral se sépare facilement en fines lamelles flexibles. Quelle famille peut-on envisager en premier ?',
          calculation: 'Relier le clivage basal très marqué à une structure silicatée en feuillets, puis vérifier les autres caractères de l’échantillon.',
          answer: 'Un mica, comme la muscovite ou la biotite, est une hypothèse plausible. Il faut toutefois vérifier d’autres propriétés avant de conclure.'
        },
        exercise: {
          question: 'Quelle est l’unité structurale fondamentale des silicates ?',
          answer: 'Le tétraèdre silicaté, composé d’un atome de silicium lié à quatre atomes d’oxygène.'
        },
        exercises: [
          {
            question: 'Quelle est la formule chimique du quartz ?',
            answer: 'SiO2.'
          },
          {
            question: 'Pourquoi les micas se séparent-ils en lamelles ?',
            answer: 'Leur structure en feuillets est associée à un clivage basal très marqué.'
          },
          {
            question: 'Les feldspaths ont-ils tous une couleur unique permettant une identification certaine ?',
            answer: 'Non. Leur couleur varie et peut se confondre avec celle d’autres minéraux ; plusieurs propriétés doivent être examinées.'
          }
        ],
        sources: [
          {
            title: 'Physical Geology, 2nd Edition — Silicate Minerals',
            url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-4-silicate-minerals/'
          },
          {
            title: 'The Geology of Virginia — Minerals',
            url: 'https://geologyva.pages.wm.edu/minerals-rocks-and-fossils/minerals/'
          },
          {
            title: 'Geosciences LibreTexts — Classes of Minerals',
            url: 'https://geo.libretexts.org/Bookshelves/Geology/Fundamentals_of_Geology_%28Schulte%29/02%3A_Rock_Forming_Minerals/2.06%3A_Classes_of_Minerals'
          }
        ]
      }
    },
    {
      id: 'mineraux-carbonates',
      title: 'Les carbonates : calcite, dolomite et formation des roches carbonatées',
      field: 'Géologie · Carbonates et environnements sédimentaires',
      summary: 'Reconnaître le groupement carbonate, distinguer calcite et dolomite avec prudence et comprendre leur importance dans les calcaires et les dolomies.',
      lesson: {
        sections: [
          'Les carbonates sont des minéraux dont la structure comprend le groupement carbonate CO3. La calcite, CaCO3, est l’un des carbonates les plus courants ; la dolomite, CaMg(CO3)2, contient du calcium et du magnésium. D’autres carbonates existent, notamment la sidérite, riche en fer, et la rhodochrosite, riche en manganèse. La classe est définie par la chimie et la structure, pas seulement par la couleur ou l’aspect d’un échantillon.',
          'La calcite est un constituant majeur de nombreux calcaires et peut aussi être présente dans des veines ou des cavités. Elle présente généralement un clivage rhomboédrique et réagit nettement avec de l’acide chlorhydrique dilué à froid lorsqu’elle est testée dans des conditions adaptées. Cette réaction libère du dioxyde de carbone. Les essais à l’acide doivent être réalisés dans un cadre approprié, avec de petites quantités et des protections, et ne doivent pas être utilisés sans encadrement.',
          'La dolomite est un carbonate de calcium et de magnésium qui constitue la dolomie et peut se former lors de transformations diagénétiques de sédiments carbonatés. Sur un échantillon massif, sa réaction à l’acide chlorhydrique dilué à froid est généralement moins vive que celle de la calcite ; la poudre réagit plus facilement. Cette différence est un indice utile, mais elle ne remplace pas une analyse lorsque l’identification doit être certaine.',
          'Les carbonates participent au cycle du carbone et réagissent aux conditions chimiques de l’eau. La dissolution et la précipitation des carbonates contribuent à la formation de reliefs karstiques, de cavités et de dépôts chimiques. Les roches carbonatées peuvent aussi contenir des fossiles, mais un calcaire n’est pas nécessairement composé uniquement de calcite : sa texture, ses impuretés et les autres constituants doivent être pris en compte.'
        ],
        example: {
          statement: 'Deux échantillons clairs sont soupçonnés d’être de la calcite et de la dolomite. Peut-on les distinguer par la couleur seule ?',
          calculation: 'Comparer des propriétés diagnostiques complémentaires : clivage, dureté, réaction à l’acide dans des conditions contrôlées et, si nécessaire, analyses de laboratoire.',
          answer: 'Non. La couleur n’est pas suffisante. La réaction à l’acide peut aider, mais elle dépend de la méthode employée et ne garantit pas à elle seule une identification certaine.'
        },
        exercise: {
          question: 'Quel groupement chimique caractérise les carbonates ?',
          answer: 'Le groupement carbonate CO3.'
        },
        exercises: [
          {
            question: 'Quelle est la formule de la calcite ?',
            answer: 'CaCO3.'
          },
          {
            question: 'Quel élément distingue notamment la dolomite de la calcite dans leur composition idéale ?',
            answer: 'La dolomite contient du magnésium en plus du calcium.'
          },
          {
            question: 'Pourquoi la couleur seule ne permet-elle pas d’identifier sûrement un carbonate ?',
            answer: 'Parce que des minéraux différents peuvent avoir des couleurs semblables et que les impuretés modifient l’apparence.'
          }
        ],
        sources: [
          {
            title: 'Physical Geology, 2nd Edition — Mineral Groups',
            url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-3-mineral-groups/'
          },
          {
            title: 'Geology 101 for Lehman College — Classifying Minerals',
            url: 'https://pressbooks.cuny.edu/gorokhovich/chapter/classifying-minerals/'
          },
          {
            title: 'U.S. Geological Survey — Minerals 101',
            url: 'https://www.usgs.gov/science/science-explorer/minerals/minerals-101'
          }
        ]
      }
    },
    {
      id: 'mineraux-oxydes-hydroxydes',
      title: 'Les oxydes et hydroxydes : oxydes de fer, corindon et minerais métalliques',
      field: 'Géologie · Oxydes, hydroxydes et géochimie',
      summary: 'Comprendre les composés minéraux associés à l’oxygène, distinguer oxydes et hydroxydes et relier quelques exemples à leurs usages géologiques.',
      lesson: {
        sections: [
          'Les oxydes sont des minéraux dans lesquels l’oxygène est associé à un ou plusieurs autres éléments, sans que le groupement principal soit un carbonate, un sulfate ou un silicate. L’hématite, Fe2O3, et la magnétite, Fe3O4, sont deux oxydes de fer importants. Ils se rencontrent dans différents contextes géologiques et constituent des minerais de fer lorsque leur concentration et les conditions d’exploitation le permettent.',
          'L’hématite peut présenter une teinte rouge-brun à noire et laisse souvent une trace rouge-brun sur une plaque non émaillée. La magnétite est généralement noire et peut être fortement attirée par un aimant. Ces propriétés sont des indices utiles, mais les grains fins, l’altération et les mélanges peuvent rendre les observations moins nettes. Il est préférable de croiser la trace, le magnétisme, la densité apparente et le contexte géologique.',
          'Le corindon, Al2O3, est un oxyde d’aluminium très dur. Ses variétés gemmes comprennent le rubis et le saphir ; ces noms correspondent à des variétés de corindon dont la couleur est liée notamment à des éléments en traces. Le corindon est aussi utilisé comme abrasif. La dureté élevée ne signifie pas que le minéral est incassable : la dureté mesure la résistance à la rayure, tandis que la ténacité et la fragilité décrivent d’autres comportements mécaniques.',
          'Les hydroxydes contiennent le groupement hydroxyle OH dans leur structure. Ils ne doivent pas être confondus avec les oxydes simples, même si les deux familles sont souvent étudiées ensemble. Des minéraux hydroxylés et des mélanges riches en oxydes ou hydroxydes de fer et d’aluminium apparaissent dans les produits d’altération. Le terme « limonite » est historiquement utilisé pour des matériaux ferrugineux jaunes à bruns, souvent mélangés et mal cristallisés, plutôt que pour une espèce minérale unique bien définie.'
        ],
        example: {
          statement: 'Un échantillon noir est attiré par un aimant. Quelle hypothèse minéralogique peut être proposée ?',
          calculation: 'Utiliser le magnétisme comme indice, puis le comparer à la couleur, à la trace et au contexte géologique.',
          answer: 'La magnétite est une hypothèse plausible, mais le magnétisme seul ne suffit pas à prouver l’identification.'
        },
        exercise: {
          question: 'Quelle différence de formule existe entre l’hématite et la magnétite ?',
          answer: 'L’hématite a pour formule Fe2O3 et la magnétite Fe3O4.'
        },
        exercises: [
          {
            question: 'Quel test simple peut aider à reconnaître la magnétite ?',
            answer: 'Vérifier si l’échantillon est attiré par un aimant, tout en utilisant d’autres indices.'
          },
          {
            question: 'Quelle est la formule du corindon ?',
            answer: 'Al2O3.'
          },
          {
            question: 'La dureté indique-t-elle qu’un minéral ne peut pas se casser ?',
            answer: 'Non. La dureté mesure la résistance à la rayure ; elle ne décrit pas à elle seule la ténacité ou la fragilité.'
          }
        ],
        sources: [
          {
            title: 'Physical Geology, 2nd Edition — Mineral Groups',
            url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-3-mineral-groups/'
          },
          {
            title: 'The Geology of Virginia — Minerals',
            url: 'https://geologyva.pages.wm.edu/minerals-rocks-and-fossils/minerals/'
          },
          {
            title: 'Mindat — Mineral Pages',
            url: 'https://www.mindat.org/a/mineralpages'
          }
        ]
      }
    },
    {
      id: 'mineraux-sulfures',
      title: 'Les sulfures : pyrite, galène, sphalérite et formation des gisements',
      field: 'Géologie · Minéraux sulfurés et gîtologie',
      summary: 'Étudier les sulfures métalliques, leurs propriétés d’identification et leur rôle dans certains gisements de métaux.',
      lesson: {
        sections: [
          'Les sulfures sont des minéraux dans lesquels le soufre est combiné à un ou plusieurs éléments, souvent métalliques. La pyrite, FeS2, la galène, PbS, et la sphalérite, ZnS, sont des exemples classiques. La chalcopyrite, CuFeS2, est un sulfure de cuivre et de fer. Ces minéraux peuvent se former dans différents environnements, notamment par circulation de fluides hydrothermaux, mais les conditions de formation varient selon le gisement.',
          'La pyrite possède souvent un éclat métallique et une couleur jaune laiton, ce qui explique qu’elle soit parfois confondue avec l’or. Elle est toutefois plus dure et plus cassante que l’or et sa trace est généralement sombre, tandis que l’or laisse une trace jaune. La couleur et l’éclat ne suffisent donc pas à identifier un échantillon. La pyrite peut aussi s’altérer au contact de l’eau et de l’oxygène ; dans certains contextes miniers, cette oxydation contribue à l’acidification des eaux de drainage.',
          'La galène est un sulfure de plomb, souvent gris plomb, à éclat métallique et à clivage cubique marqué. La sphalérite est le principal minéral de minerai du zinc dans de nombreux gisements ; sa couleur et son éclat peuvent varier. La chalcopyrite est une source importante de cuivre. La présence d’un sulfure ne signifie pas automatiquement qu’un gisement est économiquement exploitable : la teneur, le volume, la minéralogie associée, les contraintes environnementales et les techniques disponibles comptent aussi.',
          'Les sulfures et les sulfates se distinguent par leur chimie. Dans un sulfure, le soufre est présent sous forme sulfurée ; dans un sulfate, il appartient au groupement SO4. Cette distinction est essentielle, car des minéraux qui contiennent tous deux du soufre peuvent avoir des propriétés, des conditions de formation et des comportements à l’altération très différents. Les formules chimiques et les tests minéralogiques permettent d’éviter la confusion.'
        ],
        example: {
          statement: 'Un minéral jaune métallique est trouvé dans une roche. Peut-on conclure qu’il s’agit d’or ?',
          calculation: 'Comparer plusieurs propriétés diagnostiques : trace, dureté relative, densité, forme des grains et contexte de découverte.',
          answer: 'Non. La pyrite et la chalcopyrite peuvent présenter une couleur jaune métallique. Une identification fiable nécessite plusieurs observations et, si besoin, une analyse.'
        },
        exercise: {
          question: 'Quelle est la formule chimique de la pyrite ?',
          answer: 'FeS2.'
        },
        exercises: [
          {
            question: 'Quel métal est principalement associé à la galène ?',
            answer: 'Le plomb.'
          },
          {
            question: 'Quel métal est principalement extrait de la sphalérite ?',
            answer: 'Le zinc.'
          },
          {
            question: 'Quelle différence chimique sépare un sulfure d’un sulfate ?',
            answer: 'Le sulfate contient le groupement SO4 ; un sulfure contient le soufre sous forme sulfurée, sans ce groupement sulfate.'
          }
        ],
        sources: [
          {
            title: 'Physical Geology, 2nd Edition — Mineral Groups',
            url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-3-mineral-groups/'
          },
          {
            title: 'U.S. Geological Survey — Minerals FAQ',
            url: 'https://www.usgs.gov/science/faqs/minerals'
          },
          {
            title: 'Geology 101 for Lehman College — Classifying Minerals',
            url: 'https://pressbooks.cuny.edu/gorokhovich/chapter/classifying-minerals/'
          }
        ]
      }
    },
    {
      id: 'sulfates-halogenures-phosphates-elements-natifs',
      title: 'Sulfates, halogénures, phosphates et éléments natifs',
      field: 'Géologie · Autres grandes classes minérales et identification',
      summary: 'Explorer plusieurs classes moins abondantes mais importantes, puis appliquer une méthode prudente d’identification fondée sur plusieurs propriétés.',
      lesson: {
        sections: [
          'Les sulfates contiennent le groupement SO4. Le gypse, CaSO4·2H2O, est un sulfate hydraté ; la barytine, BaSO4, est un autre exemple important. Le gypse est relativement tendre et peut se rayer avec l’ongle, mais un test isolé ne suffit pas à confirmer une espèce. Les sulfates se forment notamment par précipitation dans certains milieux évaporitiques ou par transformations liées à l’altération, selon les conditions locales.',
          'Les halogénures contiennent des éléments halogènes, notamment le chlore ou le fluor. L’halite, NaCl, correspond au sel gemme et la fluorite, CaF2, est un minéral de fluorure. L’halite est soluble dans l’eau et possède un clivage cubique ; la fluorite présente généralement un clivage octaédrique. Il ne faut pas goûter un échantillon pour l’identifier : des minéraux d’apparence similaire peuvent contenir des substances nocives ou être contaminés.',
          'Les phosphates sont caractérisés par le groupement PO4. L’apatite est un groupe minéral important, notamment parce que des phosphates sont utilisés dans la fabrication d’engrais. La turquoise est un phosphate hydraté de cuivre et d’aluminium. Comme pour les autres classes, la présence du groupement chimique ne détermine pas à elle seule la couleur, la forme des cristaux ou l’usage : les éléments associés, les impuretés et les conditions de formation jouent aussi un rôle.',
          'Les éléments natifs sont constitués essentiellement d’un seul élément chimique. L’or, le cuivre natif, le soufre, le diamant et le graphite en sont des exemples. Le diamant et le graphite sont tous deux constitués de carbone, mais leurs structures atomiques diffèrent, ce qui entraîne des propriétés très différentes : le diamant est extrêmement dur, alors que le graphite se sépare facilement en feuillets. Cet exemple montre que la composition chimique seule ne suffit pas à décrire un minéral.',
          'L’identification pratique commence par l’observation de l’éclat, de la couleur et de la forme, puis examine la trace, la dureté relative, le clivage, la fracture, la densité apparente et des propriétés particulières comme le magnétisme. La couleur est souvent variable et la trace peut être plus informative. Les essais doivent être réalisés avec prudence : éviter les tests à l’acide sans encadrement, ne pas inhaler de poussières, ne pas goûter les minéraux et ne pas utiliser un échantillon inconnu comme objet de manipulation sans précaution.',
          'Lorsque les propriétés macroscopiques ne suffisent pas, les spécialistes peuvent utiliser la diffraction des rayons X, la microscopie, des analyses chimiques ou des méthodes spectroscopiques. Ces techniques permettent de caractériser la structure et la composition plus précisément. Une bonne description scientifique indique donc ce qui a été observé, les indices compatibles avec l’identification et le degré de certitude, au lieu de présenter une supposition comme un fait établi.'
        ],
        example: {
          statement: 'Deux échantillons sont tous deux constitués de carbone, mais l’un est très dur et l’autre se sépare en feuillets. Comment expliquer cette différence ?',
          calculation: 'Comparer la composition chimique à la structure cristalline : un même élément peut s’organiser selon des réseaux différents.',
          answer: 'Le diamant et le graphite sont des formes minérales du carbone dont les structures atomiques diffèrent. Cette différence de structure explique une grande partie de leurs propriétés physiques distinctes.'
        },
        exercise: {
          question: 'Pourquoi faut-il combiner plusieurs propriétés pour identifier un minéral ?',
          answer: 'Parce que des minéraux différents peuvent partager une couleur ou un éclat similaires ; plusieurs indices et, si nécessaire, des analyses instrumentales augmentent la fiabilité.'
        },
        exercises: [
          {
            question: 'À quelle classe appartient le gypse ?',
            answer: 'Aux sulfates ; sa formule est CaSO4·2H2O.'
          },
          {
            question: 'Quelle est la formule de l’halite ?',
            answer: 'NaCl.'
          },
          {
            question: 'Pourquoi le diamant et le graphite ont-ils des propriétés différentes malgré leur composition en carbone ?',
            answer: 'Parce que leurs atomes sont organisés selon des structures cristallines différentes.'
          }
        ],
        sources: [
          {
            title: 'Physical Geology, 2nd Edition — Mineral Groups',
            url: 'https://opentextbc.ca/physicalgeology2ed/chapter/2-3-mineral-groups/'
          },
          {
            title: 'Mindat — Mineral Pages',
            url: 'https://www.mindat.org/a/mineralpages'
          },
          {
            title: 'Dynamic Planet — How to Identify Minerals',
            url: 'https://open.maricopa.edu/hazards/chapter/3-2-how-to-identify-minerals/'
          },
          {
            title: 'Hong Kong Geology — Minerals and Rocks: Geological Building Blocks',
            url: 'https://hkss.cedd.gov.hk/hkss/en/publications-and-resources/educational-materials/hong-kong-geology/chapter-1/index.html'
          }
        ]
      }
    }
  ]
},

{
  id: 'champs-magnetique',
  sortYear: false,
  title: 'Géophysique : Le champ magnétique terrestre',
  note: 'Six chapitres approfondis consacrés à l’origine interne du champ magnétique terrestre, au fonctionnement de la géodynamo, à la géométrie et à la mesure du champ, à ses variations temporelles, aux archives paléomagnétiques et à son interaction avec le vent solaire. Les valeurs numériques sont des ordres de grandeur dépendant du lieu, de la date et du modèle utilisé.',
  chapters: [
    {
      id: 'structure-interne-et-champ-terrestre',
      title: 'La structure interne de la Terre et les caractéristiques du champ magnétique',
      field: 'Géophysique · Structure terrestre et géomagnétisme',
      summary: 'Identifier les enveloppes internes de la Terre, distinguer le champ principal des contributions crustales et externes, et comprendre pourquoi le champ observé varie selon la position.',
      lesson: {
        sections: [
          'La Terre est constituée de plusieurs enveloppes dont les propriétés physiques diffèrent. La croûte et le manteau sont principalement constitués de matériaux silicatés. Le noyau, beaucoup plus dense, est majoritairement métallique et riche en fer et en nickel. Il comprend un noyau externe liquide et un noyau interne solide. La limite entre le manteau et le noyau se situe à environ 2 900 km de profondeur. Cette organisation est fondamentale pour comprendre le magnétisme terrestre : le champ principal est produit essentiellement dans le noyau externe conducteur, et non par un aimant permanent placé au centre de la planète.',
          'Le champ magnétique mesuré à la surface résulte de la superposition de plusieurs contributions. La contribution dominante est le champ principal, généré par les mouvements du fluide conducteur du noyau externe. La croûte contient également des roches aimantées qui produisent des anomalies magnétiques locales ou régionales. Enfin, des courants électriques dans l’ionosphère et la magnétosphère génèrent des champs externes variables. Les mesures géomagnétiques doivent donc distinguer ces sources afin de ne pas attribuer à tort une variation observée à l’activité du noyau.',
          'À grande échelle, le champ principal peut être approximé par celui d’un dipôle magnétique incliné par rapport à l’axe de rotation terrestre. Cette approximation est utile pour représenter sa structure générale, mais elle ne décrit pas toutes ses irrégularités. Le champ réel comporte des composantes non dipolaires et sa géométrie varie dans le temps. Il ne faut donc pas confondre les pôles géographiques, définis par l’axe de rotation, les pôles géomagnétiques calculés à partir d’un dipôle équivalent et les pôles magnétiques observés, définis notamment par la verticalité du champ.'
        ],
        example: {
          statement: 'Une mesure géomagnétique contient une contribution dominante issue du noyau, une anomalie liée à des roches aimantées de la croûte et une perturbation associée aux courants de la haute atmosphère. Quelle contribution correspond au champ principal ?',
          calculation: 'On classe les contributions selon leur origine physique : noyau externe pour le champ principal, roches crustales pour le champ lithosphérique, ionosphère et magnétosphère pour les champs externes.',
          answer: 'Le champ principal est la contribution produite essentiellement par la géodynamo du noyau externe. Les deux autres contributions se superposent à lui, mais ne constituent pas le champ principal.'
        },
        exercise: {
          question: 'Pourquoi est-il incorrect de décrire le champ magnétique terrestre comme celui d’un simple aimant permanent situé au centre de la Terre ?',
          answer: 'Parce que le champ principal est entretenu par des mouvements de fluide métallique électriquement conducteur dans le noyau externe. Il s’agit d’une dynamo auto-entretenue, et non de l’aimantation permanente d’un solide central.'
        },
        exercises: [
          {
            question: 'À quelle profondeur approximative se situe la limite entre le manteau et le noyau ?',
            answer: 'À environ 2 900 km de profondeur.'
          },
          {
            question: 'Quelle enveloppe terrestre produit l’essentiel du champ magnétique principal ?',
            answer: 'Le noyau externe liquide, dont le fluide métallique est électriquement conducteur.'
          },
          {
            question: 'Quelle est la différence entre un champ crustal et un champ externe ?',
            answer: 'Le champ crustal est lié à l’aimantation de roches de la croûte. Les champs externes sont principalement associés aux courants électriques de l’ionosphère et de la magnétosphère.'
          }
        ],
        sources: [
          { title: 'USGS — Introduction to Geomagnetism', url: 'https://www.usgs.gov/programs/geomagnetism/introduction-geomagnetism' },
          { title: 'NOAA/NCEI — Geomagnetism Frequently Asked Questions', url: 'https://www.ncei.noaa.gov/products/geomagnetism-frequently-asked-questions' },
          { title: 'GFZ — Frequently asked questions regarding geomagnetism', url: 'https://www.gfz.de/en/section/geomagnetism/data-products-services/frequently-asked-questions-regarding-geomagnetism' }
        ]
      }
    },
    {
      id: 'geodynamo-et-origine-du-champ',
      title: 'La géodynamo : origine physique du champ magnétique terrestre',
      field: 'Géophysique · Magnétodynamique du noyau externe',
      summary: 'Expliquer comment la convection d’un fluide métallique conducteur, la rotation terrestre et l’induction électromagnétique entretiennent le champ magnétique.',
      lesson: {
        sections: [
          'Le noyau externe est constitué d’un alliage métallique liquide, principalement composé de fer et de nickel, auquel s’ajoutent des éléments plus légers. Sa température élevée maintient le matériau à l’état liquide dans les conditions de pression qui y règnent. Des mouvements de convection se développent sous l’effet de la flottabilité thermique et compositionnelle. Le refroidissement progressif de la Terre, la cristallisation du noyau interne et la redistribution des éléments légers contribuent au bilan énergétique et dynamique du noyau. Les détails quantitatifs de ces mécanismes font encore l’objet de recherches.',
          'Le fluide du noyau externe conduit l’électricité. Lorsqu’il se déplace dans un champ magnétique, il peut induire des courants électriques. Ces courants produisent à leur tour un champ magnétique. Dans les conditions appropriées, le couplage entre l’écoulement du fluide et le champ électromagnétique entretient le champ au cours du temps : c’est le mécanisme de géodynamo. L’énergie magnétique dissipée par effet Joule doit être compensée par l’énergie disponible dans les mouvements du noyau. La géodynamo est donc un système dynamique auto-entretenu, et non une source magnétique inépuisable indépendante de l’évolution thermique et compositionnelle de la Terre.',
          'La rotation terrestre joue un rôle important dans l’organisation des écoulements. À l’échelle du noyau, la force de Coriolis favorise des structures de mouvement influencées par l’axe de rotation. La dynamique réelle est toutefois tridimensionnelle, turbulente et couplée aux forces de pression, de flottabilité, de viscosité et de Lorentz, cette dernière étant liée à l’action du champ magnétique sur les courants. Les scientifiques étudient ce système à l’aide d’équations de la magnétohydrodynamique, de simulations numériques et de mesures géomagnétiques. Les modèles ne reproduisent pas chaque détail du noyau, mais permettent de tester les mécanismes capables de maintenir un champ global.'
        ],
        example: {
          statement: 'Un fluide métallique conducteur se déplace dans un champ magnétique préexistant. Quel enchaînement physique permet à une géodynamo de se maintenir ?',
          calculation: 'Mouvement du fluide conducteur → induction de courants électriques → production d’un champ magnétique → interaction avec l’écoulement. Le bilan énergétique doit compenser les dissipations, notamment ohmiques.',
          answer: 'La géodynamo peut se maintenir si les mouvements du fluide conducteur produisent des courants et un champ magnétique qui entretiennent le système, avec une énergie mécanique suffisante pour compenser les pertes.'
        },
        exercise: {
          question: 'Quel est le rôle de la conductivité électrique du fluide du noyau externe dans le fonctionnement de la géodynamo ?',
          answer: 'Elle permet l’apparition de courants électriques par induction lorsque le fluide conducteur se déplace dans le champ magnétique. Ces courants contribuent ensuite à générer le champ magnétique.'
        },
        exercises: [
          {
            question: 'Dans quelle enveloppe terrestre se déroule principalement la géodynamo ?',
            answer: 'Dans le noyau externe liquide.'
          },
          {
            question: 'Quel phénomène permet au mouvement d’un conducteur dans un champ magnétique de produire des courants électriques ?',
            answer: 'L’induction électromagnétique, appelée induction par mouvement dans ce contexte.'
          },
          {
            question: 'Pourquoi la rotation terrestre est-elle importante pour la dynamique du noyau ?',
            answer: 'Elle intervient notamment par la force de Coriolis, qui influence l’organisation spatiale des écoulements du fluide conducteur.'
          }
        ],
        sources: [
          { title: 'USGS — How does the Earth’s core generate a magnetic field?', url: 'https://www.usgs.gov/faqs/how-does-earths-core-generate-a-magnetic-field' },
          { title: 'USGS — Introduction to Geomagnetism', url: 'https://www.usgs.gov/programs/geomagnetism/introduction-geomagnetism' },
          { title: 'NASA — Earth’s Magnetosphere: Protecting Our Planet from Harmful Space Energy', url: 'https://science.nasa.gov/science-research/earth-science/earths-magnetosphere-protecting-our-planet-from-harmful-space-energy/' }
        ]
      }
    },
    {
      id: 'mesure-et-representation-du-champ',
      title: 'Mesurer et représenter le champ magnétique terrestre',
      field: 'Géophysique · Magnétométrie et modélisation du champ',
      summary: 'Maîtriser les composantes du champ, la déclinaison, l’inclinaison, l’intensité et le rôle des observatoires, satellites et modèles de référence.',
      lesson: {
        sections: [
          'Le champ magnétique est une grandeur vectorielle : en chaque point, il possède une direction, un sens et une intensité. Dans un repère local, on le décompose couramment en composantes nord X, est Y et verticale Z. Les conventions de signe doivent toujours être précisées. L’intensité totale est la norme du vecteur. Elle s’exprime souvent en teslas dans le système international, mais le nanotesla (nT) est une unité pratique en géomagnétisme. Les valeurs observées à la surface sont généralement de l’ordre de quelques dizaines de milliers de nanoteslas et dépendent de la position.',
          'La déclinaison magnétique est l’angle horizontal entre le nord géographique et la direction de la composante horizontale du champ. L’inclinaison magnétique est l’angle entre le vecteur champ et le plan horizontal. Ces angles varient avec la position géographique et au cours du temps. Une boussole s’aligne approximativement sur la composante horizontale du champ local ; elle n’indique donc pas nécessairement le nord géographique. La différence entre les deux directions doit être prise en compte dans les usages de navigation et de cartographie.',
          'Les mesures sont réalisées par des magnétomètres installés dans des observatoires, sur des plateformes mobiles, des navires, des avions ou des satellites. Les observatoires fournissent des séries temporelles utiles pour suivre les variations du champ. Les satellites permettent une couverture spatiale globale et contribuent à séparer les sources internes et externes. Les modèles comme l’International Geomagnetic Reference Field (IGRF), élaboré sous l’égide de l’IAGA à partir de données mondiales, décrivent le champ principal et sa variation séculaire. Un modèle est une représentation mathématique : il ne remplace pas une mesure locale et ses limites doivent être prises en compte.'
        ],
        example: {
          statement: 'Une mesure locale fournit les composantes X = 20 000 nT, Y = 5 000 nT et Z = 40 000 nT. Quelle expression permet de calculer l’intensité totale ?',
          calculation: 'F = √(X² + Y² + Z²). En remplaçant les composantes : F = √(20 000² + 5 000² + 40 000²) nT.',
          answer: 'F = √(2 025 000 000) nT, soit environ 45 000 nT. Il s’agit d’un exemple de calcul vectoriel illustratif, et non d’une mesure réelle attribuée à un lieu.'
        },
        exercise: {
          question: 'Pourquoi la déclinaison magnétique doit-elle être connue lorsqu’on utilise une boussole pour s’orienter par rapport au nord géographique ?',
          answer: 'Parce que la boussole suit la direction du champ magnétique horizontal local, qui forme généralement un angle avec le nord géographique. Cet angle est la déclinaison magnétique.'
        },
        exercises: [
          {
            question: 'Quelle unité est fréquemment utilisée pour exprimer l’intensité du champ géomagnétique ?',
            answer: 'Le nanotesla (nT), avec 1 nT = 10⁻⁹ tesla.'
          },
          {
            question: 'Que représente l’inclinaison magnétique ?',
            answer: 'L’angle entre le vecteur champ magnétique et le plan horizontal local.'
          },
          {
            question: 'Quel est le rôle principal de l’IGRF ?',
            answer: 'Fournir une description mathématique standard du champ magnétique principal terrestre et de sa variation séculaire.'
          }
        ],
        sources: [
          { title: 'NOAA/NCEI — Geomagnetism Frequently Asked Questions', url: 'https://www.ncei.noaa.gov/products/geomagnetism-frequently-asked-questions' },
          { title: 'IAGA — International Geomagnetic Reference Field (IGRF)', url: 'https://www.iaga-aiga.org/igrf/' },
          { title: 'IAGA — Data, Products, Services', url: 'https://iaga-aiga.org/data-products-services/' }
        ]
      }
    },
    {
      id: 'variations-temporelles-et-modeles',
      title: 'Les variations du champ magnétique et leur modélisation',
      field: 'Géophysique · Variation séculaire, variations rapides et modèles géomagnétiques',
      summary: 'Distinguer les changements lents du champ principal des perturbations rapides d’origine externe et comprendre comment les scientifiques construisent des modèles.',
      lesson: {
        sections: [
          'Le champ magnétique terrestre n’est pas constant. Sa composante principale évolue lentement parce que les écoulements du noyau externe changent au cours du temps. Cette évolution à long terme est appelée variation séculaire. Elle se manifeste notamment par des changements de l’intensité et de la direction du champ, ainsi que par le déplacement des pôles magnétiques. Ces évolutions sont irrégulières : elles ne suivent pas une vitesse uniforme et ne permettent pas, à elles seules, de prévoir une inversion prochaine.',
          'Des variations plus rapides sont produites par les courants électriques de l’ionosphère et de la magnétosphère. Elles peuvent se développer sur des durées allant de secondes à plusieurs jours et sont influencées par l’activité solaire. Les orages géomagnétiques correspondent à des perturbations importantes du système magnétosphérique et des courants associés. Pour étudier correctement le champ du noyau, les chercheurs doivent donc identifier et corriger, autant que possible, les contributions externes ainsi que les effets locaux liés à la croûte et aux installations de mesure.',
          'La modélisation combine des observations provenant des observatoires, des campagnes de mesure et des satellites. L’IGRF est un modèle de référence du champ principal, révisé périodiquement par l’IAGA. Il repose sur une représentation mathématique en harmoniques sphériques, adaptée à la géométrie globale de la Terre. Il sert notamment à calculer des paramètres géomagnétiques en fonction du lieu et de la date. Il faut cependant respecter la période de validité du modèle, ses incertitudes et son domaine d’application. Les modèles de référence ne constituent pas une prévision détaillée de toutes les perturbations géomagnétiques à court terme.'
        ],
        example: {
          statement: 'Un observatoire enregistre une variation lente sur plusieurs années et une perturbation importante pendant un épisode d’activité solaire. Comment distinguer ces deux phénomènes ?',
          calculation: 'On examine leur durée, leur évolution et leur contexte : une évolution progressive sur plusieurs années est compatible avec la variation séculaire ; une perturbation rapide associée à l’activité solaire relève principalement des champs externes.',
          answer: 'La variation lente est principalement liée à l’évolution du champ du noyau. La perturbation rapide est principalement associée aux courants de l’ionosphère et de la magnétosphère, eux-mêmes influencés par le vent solaire.'
        },
        exercise: {
          question: 'Pourquoi les scientifiques doivent-ils séparer les variations externes du champ principal lorsqu’ils étudient la géodynamo ?',
          answer: 'Parce que les variations externes peuvent modifier les mesures à court terme. Les séparer permet de mieux isoler l’évolution lente du champ produite dans le noyau terrestre.'
        },
        exercises: [
          {
            question: 'Comment appelle-t-on l’évolution lente du champ magnétique principal au cours du temps ?',
            answer: 'La variation séculaire.'
          },
          {
            question: 'Quelle organisation internationale coordonne l’élaboration de l’IGRF ?',
            answer: 'L’Association internationale de géomagnétisme et d’aéronomie (IAGA).'
          },
          {
            question: 'L’IGRF permet-il de prévoir précisément chaque orage géomagnétique ?',
            answer: 'Non. Il décrit le champ principal et sa variation séculaire ; les perturbations rapides liées à l’activité solaire nécessitent d’autres observations et outils de météorologie de l’espace.'
          }
        ],
        sources: [
          { title: 'IAGA — International Geomagnetic Reference Field (IGRF)', url: 'https://www.iaga-aiga.org/igrf/' },
          { title: 'GFZ — Geomagnetic Field Models', url: 'https://www.gfz.de/en/section/geomagnetism/data-products-services/mag-models' },
          { title: 'NOAA/NCEI — Geomagnetism Frequently Asked Questions', url: 'https://www.ncei.noaa.gov/products/geomagnetism-frequently-asked-questions' }
        ]
      }
    },
    {
      id: 'paleomagnetisme-et-inversions',
      title: 'Le paléomagnétisme, les inversions et les archives géologiques',
      field: 'Géophysique · Paléomagnétisme et géologie historique',
      summary: 'Comprendre comment les roches enregistrent l’orientation du champ ancien, comment les inversions sont identifiées et pourquoi ces archives ont contribué à établir la tectonique des plaques.',
      lesson: {
        sections: [
          'Le paléomagnétisme étudie les traces du champ magnétique ancien conservées dans les matériaux géologiques. Lors du refroidissement d’une lave, certains minéraux magnétiques peuvent acquérir une aimantation thermorémanente qui enregistre une direction liée au champ ambiant lorsque la roche passe sous des températures caractéristiques. Des sédiments peuvent également conserver une aimantation détritique ou chimique lors de leur dépôt ou de leur transformation. Ces enregistrements ne sont pas parfaits : ils peuvent être modifiés par l’altération, le chauffage, la déformation ou des événements géologiques ultérieurs. Les chercheurs appliquent donc des méthodes de laboratoire et des contrôles stratigraphiques pour distinguer l’aimantation ancienne des réaimantations plus récentes.',
          'Les inversions géomagnétiques sont des épisodes durant lesquels la polarité globale du champ dipolaire change : la configuration dite normale est remplacée par une configuration dite inversée, ou inversement. Les roches volcaniques et sédimentaires peuvent conserver des indices de ces changements. Les inversions ne se produisent pas à intervalles réguliers et ne suivent pas une périodicité fixe. La dernière inversion complète connue, qui marque la limite entre les chrones de polarité Matuyama et Brunhes, date d’environ 780 000 ans. Une excursion géomagnétique est différente d’une inversion complète : le champ s’écarte fortement de sa configuration habituelle, puis revient à la polarité initiale.',
          'Les fonds océaniques ont fourni une archive majeure de l’histoire du champ. En s’éloignant des dorsales, les basaltes océaniques enregistrent la polarité du champ au moment de leur formation. Les bandes d’anomalies magnétiques disposées de part et d’autre de certaines dorsales présentent une organisation globalement symétrique. Leur interprétation, combinée aux données géologiques et géophysiques, a joué un rôle déterminant dans le développement de l’expansion des fonds océaniques et de la tectonique des plaques. Le paléomagnétisme permet ainsi de relier les processus du noyau terrestre à l’histoire de la lithosphère.'
        ],
        example: {
          statement: 'Deux coulées de lave successives présentent des directions d’aimantation opposées après vérification que leur aimantation est primaire. Quelle interprétation géologique peut être envisagée ?',
          calculation: 'On compare les directions d’aimantation aux polarités de référence et on vérifie l’ordre stratigraphique ainsi que l’absence de réaimantation secondaire.',
          answer: 'Les coulées peuvent avoir enregistré deux périodes de polarité géomagnétique différente. Cette interprétation doit être confirmée par les données stratigraphiques et les analyses paléomagnétiques.'
        },
        exercise: {
          question: 'Comment les roches volcaniques peuvent-elles conserver une information sur le champ magnétique qui existait lors de leur formation ?',
          answer: 'Lors du refroidissement, des minéraux magnétiques acquièrent une aimantation rémanente dont la direction peut enregistrer celle du champ ambiant à l’époque de la solidification.'
        },
        exercises: [
          {
            question: 'Comment appelle-t-on l’étude des traces du champ magnétique ancien conservées dans les roches ?',
            answer: 'Le paléomagnétisme.'
          },
          {
            question: 'À quand remonte approximativement la dernière inversion complète du champ magnétique terrestre ?',
            answer: 'À environ 780 000 ans.'
          },
          {
            question: 'Pourquoi les bandes magnétiques du plancher océanique sont-elles importantes pour la tectonique des plaques ?',
            answer: 'Elles enregistrent les changements de polarité au cours de la formation des basaltes océaniques et fournissent des indices sur l’expansion des fonds océaniques.'
          }
        ],
        sources: [
          { title: 'USGS — Is it true that Earth’s magnetic field occasionally reverses its polarity?', url: 'https://www.usgs.gov/faqs/it-true-earths-magnetic-field-occasionally-reverses-its-polarity' },
          { title: 'USGS — Magnetic stripes and isotopic clocks', url: 'https://pubs.usgs.gov/gip/dynamic/stripes.html' },
          { title: 'GFZ — Geomagnetic Field Models', url: 'https://www.gfz.de/en/section/geomagnetism/data-products-services/mag-models' }
        ]
      }
    },
    {
      id: 'magnetosphere-et-interaction-solaire',
      title: 'La magnétosphère et les interactions entre la Terre et le Soleil',
      field: 'Géophysique · Physique de la magnétosphère et météorologie de l’espace',
      summary: 'Décrire la magnétosphère, son interaction avec le vent solaire, les ceintures de radiation, les aurores et les effets possibles des perturbations géomagnétiques.',
      lesson: {
        sections: [
          'La magnétosphère est la région de l’espace dans laquelle le champ magnétique terrestre domine l’organisation du plasma environnant. Elle est façonnée par le vent solaire, un flux de plasma principalement constitué de protons et d’électrons provenant du Soleil et transportant un champ magnétique interplanétaire. La pression du vent solaire comprime la magnétosphère du côté jour et étire les lignes de champ du côté nuit pour former une longue queue magnétique. La frontière principale entre le plasma solaire et la région dominée par le champ terrestre est appelée magnétopause. La forme et la position de ces structures varient avec les conditions du vent solaire.',
          'La magnétosphère dévie une grande partie du plasma du vent solaire, mais elle n’est pas une barrière parfaitement étanche. Des transferts d’énergie et de particules se produisent notamment par reconnexion magnétique et par différents processus de transport. Des particules chargées peuvent être piégées dans les ceintures de radiation de Van Allen. D’autres sont guidées le long des lignes de champ vers les régions polaires et peuvent contribuer aux aurores lorsqu’elles interagissent avec les constituants de la haute atmosphère. Les aurores sont donc liées au couplage entre le vent solaire, la magnétosphère et l’ionosphère.',
          'Les perturbations de la magnétosphère et de l’ionosphère peuvent produire des orages géomagnétiques. Elles sont susceptibles d’affecter certains systèmes technologiques : satellites, communications radio, navigation par satellite et réseaux électriques, selon l’intensité de l’événement et la vulnérabilité des infrastructures. Le champ magnétique contribue à protéger l’environnement terrestre du vent solaire, mais il ne constitue pas à lui seul une protection absolue contre toutes les particules énergétiques ou tous les rayonnements. L’atmosphère joue également un rôle essentiel dans la protection de la surface. L’étude de ces interactions relève de la météorologie de l’espace.'
        ],
        example: {
          statement: 'Une forte perturbation du vent solaire est suivie d’une activité géomagnétique accrue. Quelle chaîne d’interactions peut expliquer cette observation ?',
          calculation: 'Vent solaire perturbé → transfert d’énergie et de particules à la magnétosphère → modification des courants magnétosphériques et ionosphériques → variations mesurables du champ magnétique au sol.',
          answer: 'L’interaction du vent solaire avec la magnétosphère peut renforcer ou réorganiser les courants dans l’environnement spatial terrestre, entraînant une perturbation géomagnétique observable.'
        },
        exercise: {
          question: 'Pourquoi la magnétosphère terrestre est-elle décrite comme une structure dynamique plutôt que comme une enveloppe fixe ?',
          answer: 'Parce que sa forme, ses frontières et ses courants évoluent en permanence sous l’effet des variations du vent solaire et du champ magnétique interplanétaire.'
        },
        exercises: [
          {
            question: 'Comment s’appelle la frontière entre la magnétosphère terrestre et le vent solaire ?',
            answer: 'La magnétopause.'
          },
          {
            question: 'Quel phénomène est associé à la production des aurores polaires ?',
            answer: 'L’interaction de particules énergétiques avec la haute atmosphère, dans le cadre du couplage entre magnétosphère et ionosphère.'
          },
          {
            question: 'Cite deux infrastructures technologiques qui peuvent être perturbées par une forte activité géomagnétique.',
            answer: 'Les satellites et les réseaux électriques. Les communications radio et les systèmes de navigation peuvent également être affectés.'
          }
        ],
        sources: [
          { title: 'NOAA/SWPC — Earth’s Magnetosphere', url: 'https://www.spaceweather.gov/phenomena/earths-magnetosphere' },
          { title: 'NASA — Magnetospheres', url: 'https://science.nasa.gov/heliophysics/focus-areas/magnetosphere-ionosphere/' },
          { title: 'NASA — Earth’s Magnetosphere', url: 'https://science.nasa.gov/science-research/planetary-science/earths-magnetosphere/' },
          { title: 'NOAA — Space Weather Phenomena', url: 'https://www.spaceweather.gov/phenomena' }
        ]
      }
    }
  ]
},

{
  id: 'sediments-marins',
  title: 'Géophysique des sédiments marins',
  note: 'Six chapitres approfondis consacrés aux propriétés physiques des sédiments marins, à leur caractérisation acoustique et électromagnétique, à l’imagerie sismique, aux processus de dépôt et aux applications environnementales. Les interprétations géophysiques sont présentées comme des inférences à confronter aux carottes, aux mesures in situ et aux données géologiques.',
  chapters: [
    {
      id: 'proprietes-physiques-sediments-marins',
      title: 'Propriétés physiques et pétrophysiques des sédiments marins',
      field: 'Géophysique marine · Pétrophysique · Caractérisation des sédiments',
      summary: 'Relier la composition, la porosité, la densité, la teneur en eau et l’état de consolidation aux propriétés mesurables qui contrôlent les réponses géophysiques des dépôts marins.',
      lesson: {
        sections: [
          'Les sédiments marins sont des matériaux naturels généralement constitués de particules minérales, de matière organique et d’eau interstitielle. Leur granulométrie, leur minéralogie, leur forme et leur organisation déterminent une partie de leur comportement physique. Les argiles présentent souvent une forte proportion de particules fines et une grande surface spécifique ; les sables sont généralement plus grossiers et peuvent présenter une perméabilité plus élevée. Ces tendances ne constituent pas des règles absolues : la structure, la cimentation, la bioturbation, la profondeur d’enfouissement et la composition des grains modifient les propriétés mesurées.',
          'La porosité représente la fraction du volume total occupée par les vides. Dans un sédiment marin saturé, ces vides sont principalement remplis d’eau interstitielle, mais du gaz libre ou des hydrates peuvent exister dans certains contextes. La densité apparente humide dépend à la fois de la densité des grains, de la porosité et de la densité du fluide. Au cours de l’enfouissement, la compaction expulse généralement une partie de l’eau interstitielle et réduit la porosité ; cette évolution dépend toutefois de la lithologie, de la vitesse de sédimentation, de la pression interstitielle et de l’histoire géologique.',
          'La caractérisation pétrophysique combine des mesures de densité, de vitesse des ondes P, de susceptibilité magnétique, de conductivité thermique, de résistivité électrique, de rayonnement gamma naturel et de résistance au cisaillement. Les laboratoires de l’International Ocean Discovery Program documentent notamment des mesures de vitesse P, de densité par atténuation gamma, de susceptibilité magnétique, de conductivité thermique et de résistance au cisaillement sur les carottes. Ces paramètres sont complémentaires : aucun ne fournit à lui seul une identification lithologique univoque. Leur interprétation doit tenir compte de la qualité des échantillons, de la température, de la pression, de la salinité et des perturbations provoquées par le prélèvement.'
        ],
        example: {
          statement: 'Une carotte présente une porosité de 0,60. Le volume total d’un échantillon est de 100 cm³. Quel est le volume des vides ?',
          calculation: 'Vides = porosité × volume total = 0,60 × 100 cm³ = 60 cm³.',
          answer: 'Le volume des vides est de 60 cm³. Dans un sédiment saturé sans gaz, ces vides sont principalement occupés par l’eau interstitielle.'
        },
        exercise: {
          question: 'Pourquoi faut-il mesurer plusieurs propriétés physiques pour caractériser une couche sédimentaire ?',
          answer: 'Parce que plusieurs lithologies ou états de consolidation peuvent produire des réponses similaires pour une propriété isolée. Le croisement de mesures indépendantes réduit l’ambiguïté de l’interprétation.'
        },
        exercises: [
          {
            question: 'Quelle grandeur décrit la fraction du volume total occupée par les vides ?',
            answer: 'La porosité.'
          },
          {
            question: 'Quelles sont deux propriétés mesurées couramment sur les carottes dans les laboratoires de l’IODP ?',
            answer: 'Par exemple, la densité apparente par atténuation gamma et la vitesse des ondes P. La susceptibilité magnétique et la conductivité thermique sont également mesurées.'
          },
          {
            question: 'La diminution de porosité avec la profondeur est-elle toujours identique dans tous les sédiments ?',
            answer: 'Non. Elle dépend notamment de la lithologie, de la compaction, de la vitesse de sédimentation et de l’histoire des pressions interstitielles.'
          }
        ],
        sources: [
          { title: 'IODP JRSO — Petrophysics Laboratory', url: 'https://www.iodp.tamu.edu/labs/ship/Cdeck_petrophysics.html' },
          { title: 'IODP / PANGAEA — Physical Properties and Core Data', url: 'https://iodp.pangaea.de/front_content.php?idcat=665' },
          { title: 'ODP Legacy — Physical Properties Laboratory Methods', url: 'https://odplegacy.org/operations/labs/phys_props/' }
        ]
      }
    },
    {
      id: 'acoustique-et-sonar-des-sediments',
      title: 'Acoustique sous-marine, sonar et propriétés des fonds sédimentaires',
      field: 'Géophysique marine · Acoustique sous-marine · Sonar et profils de subsurface',
      summary: 'Comprendre la propagation des ondes acoustiques dans l’eau et les sédiments, les contrastes d’impédance, la rétrodiffusion sonar et les profils de pénétration superficielle.',
      lesson: {
        sections: [
          'Les méthodes acoustiques exploitent la propagation d’ondes de pression dans l’eau et dans les matériaux sédimentaires. La vitesse acoustique dépend des propriétés élastiques et de la densité du milieu ; elle varie donc avec la porosité, la composition, la pression effective, la température et la présence éventuelle de gaz. À une interface entre deux milieux présentant des impédances acoustiques différentes, une partie de l’énergie est réfléchie et une autre transmise. L’impédance acoustique est définie par Z = ρ × V, où ρ est la masse volumique et V la vitesse de propagation de l’onde considérée.',
          'Les sondeurs multifaisceaux mesurent les temps de parcours d’impulsions acoustiques émises dans plusieurs directions afin de cartographier la bathymétrie. Le niveau de rétrodiffusion, ou backscatter, renseigne sur la quantité d’énergie renvoyée vers le récepteur ; il dépend notamment de la rugosité du fond, de l’angle d’incidence, de la nature du sédiment et des paramètres instrumentaux. Il ne constitue donc pas une mesure directe et unique de la granulométrie. Des prélèvements et observations du fond sont nécessaires pour calibrer et valider les interprétations.',
          'Les sondeurs de sédiments et les systèmes de profilage sub-bottom utilisent des fréquences et des sources adaptées à l’imagerie des premiers mètres à dizaines de mètres sous le fond, selon les conditions et les instruments. Les systèmes chirp, boomer ou sparker produisent des profils de réflexion de résolution et de pénétration différentes. En règle générale, augmenter la fréquence améliore la résolution verticale potentielle mais accroît l’atténuation et peut réduire la pénétration. Les résultats dépendent aussi de la nature du sédiment : les gaz peu profonds, les fonds grossiers ou les interfaces très réfléchissantes peuvent limiter l’énergie disponible pour imager les niveaux plus profonds.'
        ],
        example: {
          statement: 'Une interface sépare deux milieux dont les impédances acoustiques sont Z1 = 1,5 × 10⁶ kg·m⁻²·s⁻¹ et Z2 = 3,0 × 10⁶ kg·m⁻²·s⁻¹. Calculer le coefficient de réflexion en amplitude à incidence normale.',
          calculation: 'R = (Z2 - Z1) / (Z2 + Z1) = (3,0 - 1,5) / (3,0 + 1,5) = 1,5 / 4,5 = 0,333.',
          answer: 'Le coefficient de réflexion en amplitude est environ 0,333. Cette valeur concerne le modèle idéal d’une interface plane à incidence normale ; les conditions réelles peuvent être plus complexes.'
        },
        exercise: {
          question: 'Pourquoi une carte de rétrodiffusion sonar ne permet-elle pas, à elle seule, de déterminer avec certitude la granulométrie du fond ?',
          answer: 'Parce que la rétrodiffusion dépend aussi de la rugosité, de l’angle d’incidence, de la fréquence, de la géométrie du sonar et des conditions d’acquisition. Une validation par prélèvements ou observations est nécessaire.'
        },
        exercises: [
          {
            question: 'Quelle relation définit l’impédance acoustique dans un milieu homogène pour une onde donnée ?',
            answer: 'Z = ρ × V, avec ρ la masse volumique et V la vitesse de propagation.'
          },
          {
            question: 'Quel est l’objectif principal d’un sondeur multifaisceaux ?',
            answer: 'Mesurer la bathymétrie sur plusieurs faisceaux pour produire une cartographie du relief sous-marin.'
          },
          {
            question: 'Quel compromis existe généralement entre fréquence acoustique et pénétration dans les sédiments ?',
            answer: 'Une fréquence plus élevée peut améliorer la résolution, mais elle est généralement davantage atténuée et peut donc réduire la pénétration.'
          }
        ],
        sources: [
          { title: 'USGS — Mapping the Seafloor', url: 'https://www.usgs.gov/science/science-explorer/ocean/mapping-the-seafloor' },
          { title: 'NOAA NCEI — Marine Seismic Reflection Data', url: 'https://www.ngdc.noaa.gov/mgg/seismicreflection/' },
          { title: 'University of Southampton — Inversion of Very-High-Resolution Reflection Data', url: 'https://www.southampton.ac.uk/oes/research/projects/inversion_of_very_high_resolution_reflection_data.page' }
        ]
      }
    },
    {
      id: 'sismique-reflexion-et-stratigraphie',
      title: 'Sismique réflexion, stratigraphie sismique et architecture des dépôts',
      field: 'Géophysique marine · Sismique réflexion · Stratigraphie sismique',
      summary: 'Analyser les réflecteurs, les terminaisons sismiques, les géométries de dépôts et les limites de séquences pour reconstruire l’organisation du sous-sol marin.',
      lesson: {
        sections: [
          'La sismique réflexion marine consiste à émettre une énergie acoustique contrôlée et à enregistrer les échos renvoyés par les interfaces du sous-sol. Les contrastes d’impédance acoustique produisent des réflexions dont le temps d’arrivée est mesuré. Les profils monotrace et multitraces offrent des niveaux différents de couverture et de traitement. Les données multitraces peuvent être traitées pour améliorer le rapport signal/bruit, corriger les effets de géométrie et produire des images du sous-sol. Le temps double de propagation (TWT) correspond au trajet aller-retour de l’onde entre la source, le réflecteur et le dispositif récepteur.',
          'L’interprétation stratigraphique s’appuie sur la continuité, l’amplitude, la fréquence, la configuration et les terminaisons des réflecteurs. Les géométries en onlap, downlap, toplap ou truncation peuvent aider à reconnaître des relations de dépôt, de progradation, de non-dépôt ou d’érosion. Une séquence sismique est délimitée par des surfaces présentant des relations stratigraphiques significatives. Ces interprétations doivent rester cohérentes avec le contexte sédimentaire, la bathymétrie, les carottes et les données de forage : une forme de réflecteur n’est pas, isolément, une preuve unique d’un processus donné.',
          'La conversion du temps en profondeur exige un modèle de vitesse. Pour un réflecteur horizontal et une vitesse moyenne représentative, une approximation simple est profondeur = vitesse × TWT / 2. Dans les milieux réels, la vitesse varie avec la profondeur, la lithologie, la porosité, la pression et la présence de fluides ; une conversion fiable nécessite donc des contraintes indépendantes, par exemple des mesures de vitesse sur carotte, des profils de vitesse ou des diagraphies. Les multiples, les diffractions, les effets de pendage, les variations latérales et les zones de faible qualité d’image peuvent entraîner des erreurs d’interprétation.'
        ],
        example: {
          statement: 'Un réflecteur est enregistré à un temps double de 0,080 s. En supposant une vitesse moyenne constante de 1 600 m/s, estimer sa profondeur.',
          calculation: 'Profondeur = V × TWT / 2 = 1 600 × 0,080 / 2 = 64 m.',
          answer: 'La profondeur estimée est de 64 m sous le point de référence considéré. Il s’agit d’une estimation dépendante de l’hypothèse de vitesse moyenne constante.'
        },
        exercise: {
          question: 'Pourquoi ne peut-on pas convertir directement tous les temps sismiques en profondeur sans information sur la vitesse ?',
          answer: 'Parce que le temps de parcours dépend de la vitesse dans chaque couche. Si cette vitesse varie, la conversion avec une vitesse unique peut produire une profondeur erronée.'
        },
        exercises: [
          {
            question: 'Que représente le temps double de propagation (TWT) ?',
            answer: 'Le temps nécessaire à l’onde pour aller de la source au réflecteur puis revenir au système récepteur.'
          },
          {
            question: 'Citer deux géométries ou terminaisons de réflecteurs utilisées en stratigraphie sismique.',
            answer: 'Onlap et downlap, par exemple. Toplap et troncature sont également des termes employés.'
          },
          {
            question: 'Quel organisme conserve des profils historiques de sismique réflexion marine et des données de navigation associées ?',
            answer: 'Le NOAA National Centers for Environmental Information (NCEI), notamment dans ses archives de sismique réflexion marine.'
          }
        ],
        sources: [
          { title: 'NOAA NCEI — Marine Seismic Reflection', url: 'https://www.ngdc.noaa.gov/mgg/seismicreflection/' },
          { title: 'USGS — Continental Margin Sedimentation: From Sediment Transport to Sequence Stratigraphy', url: 'https://www.usgs.gov/publications/continental-margin-sedimentation-sediment-transport-sequence-stratigraphy' },
          { title: 'US EPA — Seismic Reflection', url: 'https://www.epa.gov/environmental-geophysics/seismic-reflection' },
          { title: 'United Nations — CLCS Scientific and Technical Guidelines, Seismic Refraction and Reflection', url: 'https://www.un.org/depts/los/clcs_new/documents/Guidelines/CLCS_11.htm' }
        ]
      }
    },
    {
      id: 'methodes-electriques-electromagnetiques-gravimetriques',
      title: 'Méthodes électriques, électromagnétiques, magnétiques et gravimétriques',
      field: 'Géophysique marine · Méthodes potentielles · Résistivité et électromagnétisme',
      summary: 'Étudier les réponses électriques, électromagnétiques, magnétiques et gravimétriques des sédiments et du sous-sol marin, ainsi que leurs complémentarités et leurs limites.',
      lesson: {
        sections: [
          'La résistivité électrique caractérise l’opposition d’un matériau au passage du courant. Dans les sédiments marins saturés, elle dépend notamment de la porosité connectée, de la salinité de l’eau interstitielle, de la température, de la tortuosité et de la composition minéralogique. Les argiles peuvent présenter une conductivité supplémentaire liée aux phénomènes de surface. Les méthodes électromagnétiques contrôlées mesurent la réponse du sous-sol à un champ électromagnétique émis ou induit. En milieu marin, la forte conductivité de l’eau de mer modifie la propagation des champs et doit être intégrée à la conception des dispositifs et à la modélisation.',
          'Les méthodes magnétiques mesurent les variations du champ magnétique associées aux propriétés magnétiques des matériaux. En contexte marin, un magnétomètre remorqué peut cartographier des anomalies liées à des formations géologiques, à des roches riches en minéraux magnétiques ou à des objets ferreux. Les corrections et contrôles doivent tenir compte des variations temporelles du champ, de la position et de la distance entre le capteur et le fond. Une anomalie magnétique ne détermine pas automatiquement la nature ou la profondeur de sa source : plusieurs configurations peuvent produire des signatures comparables.',
          'La gravimétrie mesure les variations de l’accélération de la pesanteur associées aux contrastes de masse et de densité. En mer, les mesures réalisées depuis un navire nécessitent une correction attentive des mouvements du bateau, de la navigation et des effets instrumentaux. Les anomalies gravimétriques contribuent à l’étude de la structure crustale, des bassins sédimentaires et des grandes variations de densité, mais leur résolution est généralement moins adaptée à la description détaillée de couches superficielles minces. L’intégration des méthodes électriques, électromagnétiques, magnétiques, gravimétriques et sismiques permet de réduire certaines ambiguïtés, à condition de tenir compte de leurs sensibilités physiques distinctes.'
        ],
        example: {
          statement: 'Une mesure électrique simplifiée indique une résistivité de 2 Ω·m. Quelle est la conductivité correspondante ?',
          calculation: 'Conductivité σ = 1 / résistivité = 1 / 2 = 0,5 S/m.',
          answer: 'La conductivité correspondante est de 0,5 S/m. Cette conversion est mathématique ; l’interprétation géologique de cette valeur nécessite le contexte de salinité, de porosité, de température et de minéralogie.'
        },
        exercise: {
          question: 'Pourquoi associer une méthode électromagnétique à une méthode sismique dans l’étude de sédiments contenant potentiellement des hydrates de gaz ?',
          answer: 'Les méthodes ne répondent pas aux mêmes propriétés : la sismique renseigne notamment sur les vitesses et les contrastes acoustiques, tandis que les méthodes électriques sont sensibles aux propriétés de conduction. Leur combinaison peut mieux contraindre l’interprétation, sans supprimer le besoin de validation.'
        },
        exercises: [
          {
            question: 'Quelle propriété physique est directement liée à l’inverse de la résistivité ?',
            answer: 'La conductivité électrique.'
          },
          {
            question: 'Quel instrument est utilisé pour mesurer les variations du champ magnétique en prospection marine ?',
            answer: 'Un magnétomètre, souvent installé sur un dispositif remorqué.'
          },
          {
            question: 'À quelles variations du sous-sol la gravimétrie est-elle principalement sensible ?',
            answer: 'Aux variations de masse volumique qui produisent des variations mesurables de l’accélération de la pesanteur.'
          }
        ],
        sources: [
          { title: 'USGS — Gas Hydrates Primer: Geophysical Detection', url: 'https://www.usgs.gov/centers/whcmsc/science/gas-hydrates-primer' },
          { title: 'US EPA — Waterborne Magnetic Surveying', url: 'https://www.epa.gov/environmental-geophysics/waterborne-magnetic-surveying' },
          { title: 'NOAA National Geodetic Survey — Marine Gravity Surveys', url: 'https://www.ngs.noaa.gov/research/geopotential-datums/data-sources.shtml' },
          { title: 'USGS — Introduction to Potential Fields: Gravity', url: 'https://pubs.usgs.gov/fs/fs-0239-95/' },
          { title: 'Advances in Geophysics — Marine Controlled-Source and Magnetotelluric Methods', url: 'https://doi.org/10.1016/bs.agph.2025.06.005' }
        ]
      }
    },
    {
      id: 'dynamique-sedimentaire-et-enregistrement-geologique',
      title: 'Dynamique sédimentaire, transport et enregistrement géologique',
      field: 'Géophysique marine · Sédimentologie physique · Marges continentales',
      summary: 'Relier les processus de transport et de dépôt aux architectures sédimentaires observées par les méthodes géophysiques, depuis les environnements côtiers jusqu’aux bassins profonds.',
      lesson: {
        sections: [
          'Les particules atteignent les environnements marins par les fleuves, l’érosion côtière, les glaciers, l’activité biologique, les retombées atmosphériques et la remobilisation de dépôts préexistants. Leur transport dépend de la taille, de la densité et de la forme des grains, mais aussi de la turbulence, des courants, des vagues et de la stratification de la colonne d’eau. Sur les marges continentales, les sédiments peuvent être stockés sur le plateau, transférés vers le talus ou acheminés vers les plaines abyssales. Les courants de turbidité sont des écoulements gravitaires chargés en particules qui peuvent transporter des sédiments vers les parties profondes des bassins.',
          'Les dépôts conservent un enregistrement incomplet des processus. Les variations du niveau marin, de l’apport sédimentaire, de la subsidence, de la tectonique et de l’énergie des courants influencent la géométrie des corps sédimentaires. Les surfaces d’érosion, les chenaux enfouis, les lobes, les dépôts de pente et les réflecteurs progradants peuvent être reconnus dans les données acoustiques ou sismiques. L’interprétation doit distinguer les observations — géométrie, continuité, amplitude et position — des hypothèses sur les processus responsables. Le cadre de stratigraphie séquentielle permet d’organiser ces observations à différentes échelles temporelles et spatiales.',
          'Les taux d’accumulation sédimentaire sont estimés à partir de chronologies établies sur des carottes, de marqueurs stratigraphiques et de méthodes de datation adaptées à l’âge des dépôts. Les méthodes possibles incluent, selon le contexte, le radiocarbone pour certaines matières carbonées récentes, les marqueurs stratigraphiques, les propriétés paléomagnétiques et les modèles d’âge intégrant plusieurs contraintes. Le mélange biologique, la bioturbation, la dissolution, l’érosion et les hiatus peuvent modifier ou effacer une partie de l’enregistrement. Un taux calculé à partir de l’épaisseur et de la durée doit donc être interprété comme une moyenne sur l’intervalle étudié, et non comme une vitesse constante à chaque instant.'
        ],
        example: {
          statement: 'Une séquence sédimentaire de 4 m d’épaisseur représente, selon un modèle d’âge, une durée de 2 000 ans. Calculer son taux moyen d’accumulation en mm/an.',
          calculation: '4 m = 4 000 mm. Taux moyen = 4 000 mm / 2 000 ans = 2 mm/an.',
          answer: 'Le taux moyen est de 2 mm/an. Il ne signifie pas que le dépôt s’est effectué à vitesse constante ; des épisodes d’érosion, de non-dépôt ou de dépôt rapide peuvent être présents.'
        },
        exercise: {
          question: 'Pourquoi un taux moyen d’accumulation calculé sur une carotte ne décrit-il pas nécessairement les variations réelles du dépôt au cours du temps ?',
          answer: 'Parce que l’épaisseur conservée peut intégrer des phases de dépôt rapide, de dépôt lent, de non-dépôt, d’érosion et de remaniement. Le calcul fournit une moyenne sur l’intervalle daté.'
        },
        exercises: [
          {
            question: 'Citer deux facteurs qui influencent le transport des particules en milieu marin.',
            answer: 'La taille et la densité des grains, la turbulence, les courants et les vagues sont des exemples de facteurs.'
          },
          {
            question: 'Qu’est-ce qu’un courant de turbidité ?',
            answer: 'Un écoulement gravitaire sous-marin chargé en particules sédimentaires, capable de transporter des matériaux vers des zones plus profondes.'
          },
          {
            question: 'Quel effet la bioturbation peut-elle avoir sur l’enregistrement sédimentaire ?',
            answer: 'Elle mélange les sédiments et peut brouiller certaines structures ou réduire la résolution temporelle de l’enregistrement.'
          }
        ],
        sources: [
          { title: 'USGS — Continental Margin Sedimentation: From Sediment Transport to Sequence Stratigraphy', url: 'https://www.usgs.gov/publications/continental-margin-sedimentation-sediment-transport-sequence-stratigraphy' },
          { title: 'USGS — Mapping the Seafloor', url: 'https://www.usgs.gov/science/science-explorer/ocean/mapping-the-seafloor' },
          { title: 'NOAA NCEI — Sea Floor and Lakebed Sediment and Rock Data', url: 'https://www.ngdc.noaa.gov/mgg/geology/geology.html' }
        ]
      }
    },
    {
      id: 'carottages-donnees-et-applications-environnementales',
      title: 'Carottages, intégration des données et applications environnementales',
      field: 'Géophysique marine · Géotechnique · Surveillance environnementale et aléas',
      summary: 'Mettre en relation les levés géophysiques, les carottes et les analyses de laboratoire pour caractériser les sédiments, repérer les aléas et construire une interprétation intégrée.',
      lesson: {
        sections: [
          'Les carottes marines fournissent un accès direct aux matériaux du fond et du sous-sol. Les carottiers gravitaires, à piston ou d’autres systèmes sont choisis en fonction de la profondeur visée, de la nature du sédiment et du degré de perturbation acceptable. Le carottage à piston est utilisé pour récupérer des séquences relativement peu perturbées ; il ne garantit toutefois pas une absence totale de déformation, de perte de matériau ou de raccourcissement. La description visuelle, les mesures physiques, les analyses granulométriques, minéralogiques et géochimiques ainsi que les observations radiographiques ou tomographiques permettent de documenter les échantillons.',
          'L’intégration des données suit une logique de calibration et de validation croisée. Les profils sismiques et acoustiques donnent une continuité spatiale, tandis que les carottes fournissent des observations directes mais ponctuelles. Les mesures de laboratoire permettent de relier les signatures géophysiques à des propriétés physiques mesurées. Il faut contrôler les décalages de position, les différences de résolution, les effets de remaniement lors du prélèvement et les incertitudes de conversion temps-profondeur. Une interprétation robuste explicite les données disponibles, les hypothèses, les incertitudes et les limites de résolution.',
          'Les applications environnementales comprennent la cartographie des dépôts meubles, l’identification de zones d’érosion ou d’accumulation, l’étude des glissements sous-marins, la caractérisation de sédiments contaminés et la recherche d’indices de circulation de fluides ou de gaz. Les hydrates de gaz constituent un exemple important : certains profils sismiques montrent un réflecteur simulant le fond marin (BSR), souvent interprété comme proche de la base de la zone de stabilité des hydrates. Toutefois, un BSR ne constitue pas une preuve directe et exhaustive de la présence ou de la quantité d’hydrate ; des hydrates peuvent être détectés sans BSR, et les méthodes géophysiques doivent être confrontées aux forages, aux diagraphies et aux échantillons lorsque cela est possible.'
        ],
        example: {
          statement: 'Un levé géophysique révèle une anomalie acoustique sous le fond marin. Quelle démarche permet de tester si elle correspond à une couche de sédiment meuble, à du gaz peu profond ou à une variation lithologique ?',
          calculation: 'La démarche consiste à comparer la géométrie et l’amplitude du réflecteur avec les profils voisins, vérifier les paramètres d’acquisition et la bathymétrie, puis confronter l’interprétation à des données indépendantes : carottes, mesures de vitesse P, densité, résistivité ou diagraphies disponibles.',
          answer: 'L’anomalie ne peut pas être identifiée de façon certaine à partir de sa seule apparence. Une interprétation intégrée et une validation par des observations indépendantes sont nécessaires.'
        },
        exercise: {
          question: 'Quel est l’intérêt de confronter un profil sismique à une carotte prélevée dans la même zone ?',
          answer: 'La carotte apporte une information directe sur les matériaux et permet de calibrer l’interprétation des réflecteurs. Le profil sismique étend ensuite cette information ponctuelle à une plus grande continuité spatiale.'
        },
        exercises: [
          {
            question: 'Quel est l’intérêt d’un carottier à piston en géologie marine ?',
            answer: 'Il permet de récupérer des séquences sédimentaires relativement peu perturbées, même si des perturbations et pertes de matériau restent possibles.'
          },
          {
            question: 'Que signifie l’acronyme BSR dans l’étude des hydrates de gaz marins ?',
            answer: 'Bottom Simulating Reflector, ou réflecteur simulant le fond marin.'
          },
          {
            question: 'Un BSR permet-il de calculer directement la quantité d’hydrate de gaz présente dans les sédiments ?',
            answer: 'Non. Il constitue un indice géophysique associé à la zone de stabilité des hydrates, mais ne fournit pas à lui seul une mesure directe de leur présence, de leur saturation ou de leur quantité.'
          }
        ],
        sources: [
          { title: 'National Oceanography Centre — Marine Sampling and Piston Coring', url: 'https://www.noc.ac.uk/our-work/marine-technology/equipment/sampling' },
          { title: 'NOAA NCEI — Sea Floor and Lakebed Sediment and Rock Data', url: 'https://www.ngdc.noaa.gov/mgg/geology/geology.html' },
          { title: 'USGS — Gas Hydrates Primer', url: 'https://www.usgs.gov/centers/whcmsc/science/gas-hydrates-primer' },
          { title: 'USGS — Global Compilation of Published Gas Hydrate-Related Bottom Simulating Reflections', url: 'https://www.usgs.gov/data/global-compilation-published-gas-hydrate-related-bottom-simulating-reflections' },
          { title: 'National Oceanography Centre — Inversion of Very-High-Resolution Reflection Data', url: 'https://www.southampton.ac.uk/oes/research/projects/inversion_of_very_high_resolution_reflection_data.page' }
        ]
      }
    }
  ]
},

]


