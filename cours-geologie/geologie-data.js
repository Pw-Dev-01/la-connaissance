// Catalogue du cours de géologie
// Sources scientifiques en bas de chaque leçon (bloc « RÉFÉRENCES »). Toutes les
// branches, y compris « Géodynamique et histoire de la planète » et « Les grands
// livres », sont des leçons normales : un chapitre = une leçon, affichée par
// cours.html?id=… (lesson.content contient le HTML d'une section). OpenStax est utilisé
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
    id: 'periodes geologiques',
    title: 'Les périodes-géologiques',
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
}
];

