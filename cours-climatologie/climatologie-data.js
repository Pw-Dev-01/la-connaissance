// ============================================================
// BRANCHE « L'ATMOSPHÈRE » — version corrigée (à coller en remplacement
// de l'ancienne branche, juste après la branche « grands-livres »).
// Elle se termine par « ]; » qui ferme window.courseCatalog.
// Le bloc de sources est placé DANS lesson du dernier chapitre
// (ozone-aerosols-qualite-air), comme pour les chapitres des autres branches.
// ============================================================

{
    id: 'atmosphere',
    title: 'L’atmosphère',
    note: 'L’enveloppe gazeuse de la Terre : composition, structure verticale, circulation, cycle de l’eau, rayonnement et interactions avec le climat.',
    chapters: [
      {
        id: 'composition-atmosphere',
        title: 'La composition de l’atmosphère',
        field: 'Sciences de l’atmosphère · composition chimique',
        summary: 'Les gaz majoritaires, les constituants variables et les particules en suspension : pourquoi les composants minoritaires peuvent avoir des effets majeurs.',
        lesson: {
          sections: [
            'L’atmosphère terrestre est un mélange de gaz retenu par la gravité. Dans l’air sec près de la surface, l’azote moléculaire N₂ représente environ 78,08 % du volume et l’oxygène moléculaire O₂ environ 20,95 %. L’argon compte pour environ 0,93 %. Le reste comprend notamment le dioxyde de carbone, le néon, l’hélium, le méthane et d’autres gaz à l’état de traces. Ces proportions décrivent l’air sec : la vapeur d’eau est exclue parce que sa proportion varie fortement selon le lieu et les conditions météorologiques. Source : NASA, Earth Fact Sheet, https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html',
            'La composition de l’air sec est relativement homogène dans la basse atmosphère, mais elle n’est pas immuable. Le dioxyde de carbone (CO₂), le méthane (CH₄) et le protoxyde d’azote (N₂O) sont présents à de faibles concentrations, tout en influençant le bilan radiatif parce qu’ils absorbent certains rayonnements infrarouges. Leurs concentrations dépendent des échanges naturels et des émissions humaines. Il faut distinguer abondance et effet : une substance très minoritaire peut avoir une influence climatique importante si ses propriétés spectrales le permettent.',
            'La vapeur d’eau est un important gaz à effet de serre naturel. Sa concentration atmosphérique dépend fortement de la température et de la disponibilité en eau. Dans la troposphère, elle varie de presque zéro dans certains environnements froids et secs à plusieurs pour cent du volume dans de l’air chaud et humide. À l’échelle globale, la vapeur d’eau agit principalement comme une rétroaction climatique : lorsque l’air se réchauffe, il peut généralement contenir davantage de vapeur d’eau avant saturation.',
            'L’atmosphère contient également des aérosols, c’est-à-dire de petites particules solides ou des gouttelettes liquides en suspension. Ils peuvent provenir des embruns marins, des poussières, des volcans, des incendies, de réactions chimiques dans l’air ou des activités humaines. Les aérosols influencent la visibilité, la santé, la formation des nuages et le rayonnement. Certains diffusent la lumière solaire, tandis que d’autres, comme la suie, en absorbent une partie. Leurs effets varient selon leur composition, leur taille, leur altitude et leur environnement. Source : NASA, Atmospheric Composition, https://terra.nasa.gov/science/atmospheric-composition',
            'Les proportions des gaz traces sont souvent exprimées en parties par million (ppm) ou en parties par milliard (ppb). Pour comparer des données, il faut vérifier si elles sont exprimées en fraction molaire, en fraction volumique ou en fraction massique. Ces conventions ne sont pas interchangeables sans précaution. Il faut également distinguer la composition de l’air sec de celle de l’air humide.'
          ],
          formula: {
            label: 'FRACTION MOLAIRE',
            text: 'xᵢ = nᵢ / n_total',
            explanation: 'xᵢ est la fraction molaire du constituant i, nᵢ sa quantité de matière et n_total la quantité totale de matière gazeuse. Pour un mélange de gaz idéaux, la fraction molaire est égale à la fraction volumique.'
          }
        }
      },
      {
        id: 'structure-verticale',
        title: 'La structure verticale de l’atmosphère',
        field: 'Sciences de l’atmosphère · thermodynamique verticale',
        summary: 'Troposphère, stratosphère, mésosphère, thermosphère et exosphère : des couches définies principalement par l’évolution de la température avec l’altitude.',
        lesson: {
          sections: [
            'On distingue généralement cinq grandes couches selon le profil vertical moyen de température. La troposphère s’étend depuis la surface jusqu’à la tropopause, située approximativement entre 8 et 18 km selon la latitude, la saison et les conditions atmosphériques. Elle contient la majeure partie de la masse atmosphérique et presque toute la vapeur d’eau. Les nuages et la plupart des phénomènes météorologiques s’y développent, même si certains sommets de cumulonimbus peuvent pénétrer dans la basse stratosphère.',
            'Dans la troposphère, la température diminue généralement avec l’altitude, car la surface absorbe le rayonnement solaire puis transfère de l’énergie à l’air par rayonnement infrarouge, conduction et mouvements turbulents. Dans l’atmosphère standard, le gradient thermique moyen de la troposphère est fixé à environ 6,5 °C par kilomètre. Cette valeur est une référence pour un modèle standard, pas une règle universelle : une inversion thermique peut faire augmenter la température avec l’altitude sur une couche limitée.',
            'La stratosphère s’étend approximativement de la tropopause à 50 km. La couche d’ozone y absorbe une partie du rayonnement ultraviolet solaire, ce qui contribue à faire augmenter la température avec l’altitude dans une grande partie de la stratosphère. Cette stratification limite souvent les mouvements convectifs verticaux par rapport à la troposphère. Les frontières des couches ne se trouvent pas à une altitude parfaitement fixe partout. Source : NASA, What Is Earth’s Atmosphere?, https://www.nasa.gov/general/what-is-earths-atmosphere/',
            'Au-dessus se trouve la mésosphère, approximativement entre 50 et 80–85 km, où la température rediminue généralement avec l’altitude. Beaucoup de météoroïdes qui entrent dans l’atmosphère se fragmentent ou s’échauffent fortement dans cette région en raison de leurs interactions avec le gaz atmosphérique. La thermosphère s’étend au-dessus, avec des températures cinétiques qui peuvent devenir très élevées sous l’effet de l’absorption des rayonnements solaires énergétiques. Comme le gaz y est extrêmement raréfié, cette température élevée ne signifie pas qu’un objet y subirait le même transfert de chaleur que dans de l’air dense.',
            'L’exosphère est la région externe où les collisions entre particules deviennent rares et où certaines particules peuvent s’échapper dans l’espace. Il n’existe pas de frontière supérieure nette entre l’atmosphère et l’espace : la densité diminue progressivement. L’ionosphère, importante pour la propagation de certaines ondes radio et pour les aurores, n’est pas une couche thermique supplémentaire parfaitement superposée aux cinq couches principales. Elle recoupe une partie de la mésosphère et de la thermosphère et varie avec l’activité solaire. Source : NASA, Earth’s Atmospheric Layers, https://www.nasa.gov/image-article/earths-atmospheric-layers-3/'
          ],
          formula: {
            label: 'GRADIENT THERMIQUE VERTICAL',
            text: 'Γ = − dT / dz',
            explanation: 'Γ désigne le gradient thermique vertical selon cette convention de signe ; T est la température et z l’altitude. Dans la troposphère, Γ est généralement positif lorsque la température diminue avec l’altitude.'
          }
        }
      },
      {
        id: 'pression-densite',
        title: 'Pression, densité et équilibre hydrostatique',
        field: 'Physique de l’atmosphère · mécanique des fluides',
        summary: 'Le poids de l’air crée la pression atmosphérique ; pression et densité diminuent généralement avec l’altitude et structurent les mouvements atmosphériques.',
        lesson: {
          sections: [
            'La pression atmosphérique correspond à la force exercée par l’air par unité de surface. La pression atmosphérique standard au niveau de la mer est de 101 325 Pa, soit 1013,25 hPa. La pression réellement mesurée varie avec la météo, l’altitude et les conditions locales. En montant, la pression diminue parce que la colonne d’air située au-dessus du point de mesure devient moins importante.',
            'Dans une atmosphère au repos vertical moyen, la variation de pression avec l’altitude est décrite par l’équilibre hydrostatique : la différence de pression entre deux niveaux soutient le poids de la couche d’air comprise entre eux. Cette relation est une approximation très utile, même si l’atmosphère réelle est en mouvement et présente des accélérations. Elle explique pourquoi la pression ne décroît pas de manière linéaire avec l’altitude.',
            'La relation des gaz parfaits relie pression, température et densité. Pour l’air assimilé à un gaz parfait, p = ρ Rₛ T, où p est la pression en pascals, ρ la masse volumique en kg·m⁻³, Rₛ la constante spécifique de l’air sec et T la température absolue en kelvins. À pression égale, un air plus chaud est généralement moins dense qu’un air plus froid. À température égale, une pression plus faible correspond à une densité plus faible.',
            'Dans un modèle isotherme simplifié, la pression diminue approximativement de façon exponentielle avec l’altitude : p(z) = p₀ exp(−z/H), avec H = RₛT/g. H est la hauteur d’échelle, d’environ 8 km pour des conditions proches de la basse atmosphère terrestre. Cette approximation suppose une température constante et une gravité presque constante ; elle ne remplace pas les modèles atmosphériques réels lorsque la température varie fortement avec l’altitude.',
            'Les différences horizontales de pression contribuent à mettre l’air en mouvement. Le vent est influencé par la force de gradient de pression, la rotation terrestre, le frottement près de la surface et, selon les situations, la courbure de l’écoulement. Une carte de pression ne donne donc pas à elle seule la vitesse exacte du vent : il faut aussi considérer la distribution spatiale de pression et les autres forces qui agissent sur l’air.'
          ],
          formula: {
            label: 'ÉQUILIBRE HYDROSTATIQUE',
            text: 'dp / dz = −ρg',
            explanation: 'p est la pression, z l’altitude, ρ la masse volumique de l’air et g l’accélération de la pesanteur. La relation décrit l’équilibre vertical hydrostatique.'
          }
        }
      },
      {
        id: 'circulation-atmospherique',
        title: 'La circulation atmosphérique et les vents',
        field: 'Météorologie dynamique · circulation générale',
        summary: 'Les contrastes de chauffage, la rotation terrestre, les gradients de pression et les échanges avec la surface organisent les vents à différentes échelles.',
        lesson: {
          sections: [
            'Le Soleil ne chauffe pas uniformément la Terre : en moyenne, les basses latitudes reçoivent davantage d’énergie solaire par unité de surface que les hautes latitudes. L’atmosphère et les océans transportent une partie de cette énergie vers les régions plus froides. Ce transport s’effectue par des mouvements à grande échelle, des systèmes météorologiques, la turbulence et les échanges entre l’air et la surface.',
            'Un contraste de pression produit une force qui tend à accélérer l’air des hautes pressions vers les basses pressions. Mais le vent observé n’est pas simplement dirigé des anticyclones vers les dépressions : la rotation de la Terre introduit l’effet de Coriolis, qui dévie le mouvement vers la droite dans l’hémisphère Nord et vers la gauche dans l’hémisphère Sud. Près du sol, le frottement ralentit le vent et modifie sa direction par rapport à l’équilibre de haute altitude.',
            'La circulation moyenne est souvent présentée avec trois cellules idéalisées par hémisphère : Hadley, Ferrel et polaire. Cette représentation aide à comprendre les régions tropicales ascendantes, les zones subtropicales souvent associées à des subsidences et les échanges avec les latitudes plus élevées. La circulation réelle est plus complexe : les continents, les montagnes, les saisons, les océans et les perturbations météorologiques modifient en permanence ce schéma.',
            'Les jets sont des bandes de vents rapides situées près de certaines limites entre masses d’air, notamment près de la tropopause. Ils résultent de contrastes thermiques et de l’équilibre entre les forces de pression et de Coriolis. Leur position et leur intensité varient. Les dépressions et les anticyclones sont des structures de circulation liées aux champs de pression, à la température et aux mouvements verticaux ; leur évolution est au cœur de la prévision météorologique.',
            'Les vents échangent de la quantité de mouvement, de la chaleur et de l’humidité avec la surface. Au-dessus de l’océan, ils contribuent à l’évaporation et à l’entraînement de l’eau ; au-dessus des terres, leur effet dépend notamment de la rugosité, du relief, de la végétation et de l’humidité des sols. La météorologie combine observations, lois physiques et modèles numériques. Les prévisions restent incertaines, en particulier à mesure que l’échéance augmente, car l’atmosphère est un système dynamique chaotique.'
          ],
          formula: {
            label: 'ACCÉLÉRATION DUE AU GRADIENT DE PRESSION',
            text: 'aₚ = −(1 / ρ) ∇p',
            explanation: 'Cette expression donne l’accélération due au gradient de pression par unité de masse dans l’équation du mouvement, avant prise en compte des autres forces. ∇p représente le gradient spatial de pression.'
          }
        }
      },
      {
        id: 'cycle-eau-nuages',
        title: 'Le cycle de l’eau, l’humidité et les nuages',
        field: 'Physique des nuages · hydrologie atmosphérique',
        summary: 'Évaporation, condensation, saturation et précipitations relient l’atmosphère aux océans, aux continents, aux glaces et à la biosphère.',
        lesson: {
          sections: [
            'L’eau circule continuellement entre la surface et l’atmosphère. L’énergie solaire permet l’évaporation des surfaces d’eau et des sols humides ; les plantes transfèrent aussi de l’eau vers l’air par transpiration. La vapeur est transportée par les vents, peut se condenser en nuages, puis revenir à la surface sous forme de précipitations. Une partie ruisselle, s’infiltre, rejoint les rivières et les nappes, ou est stockée temporairement dans la neige et les glaciers.',
            'L’humidité relative est le rapport, exprimé en pourcentage, entre la pression partielle de vapeur d’eau présente et la pression de vapeur saturante à la même température. La saturation dépend fortement de la température : l’air chaud peut contenir davantage de vapeur d’eau avant d’atteindre la saturation que l’air froid. Cela ne signifie pas que l’air chaud contient toujours plus d’eau ; la quantité réelle dépend des conditions d’évaporation, du transport et du mélange.',
            'Un nuage se forme lorsque l’air atteint la saturation et que la vapeur d’eau se condense ou se dépose sur des noyaux de condensation ou de glace. Le refroidissement peut résulter de l’ascendance de l’air, qui se détend lorsque la pression diminue, ou d’un mélange avec de l’air plus froid. Les nuages sont constitués de gouttelettes liquides, de cristaux de glace ou d’un mélange des deux, selon la température et les conditions microphysiques.',
            'La formation de précipitations dépend de la croissance des gouttelettes et des cristaux jusqu’à une taille permettant leur chute vers le sol. Dans les nuages chauds, les collisions et la coalescence peuvent accroître les gouttes ; dans les nuages froids, la croissance des cristaux de glace et leur interaction avec les gouttelettes peuvent contribuer à la neige ou à la pluie après fonte. Toute condensation ne produit donc pas automatiquement une précipitation qui atteint le sol.',
            'Le cycle de l’eau redistribue aussi de l’énergie. L’évaporation consomme de l’énergie à la surface ; la condensation libère cette énergie dans l’atmosphère. Cette chaleur latente contribue à alimenter les orages et les cyclones tropicaux. Le réchauffement climatique intensifie plusieurs aspects du cycle hydrologique, mais les changements régionaux de précipitations ne sont pas uniformes : ils dépendent aussi de la circulation atmosphérique, de la géographie et de la variabilité naturelle. Source : GIEC, AR6, chapitre sur l’eau, https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-4/'
          ],
          formula: {
            label: 'HUMIDITÉ RELATIVE',
            text: 'HR = 100 × e / eₛ(T)',
            explanation: 'e est la pression partielle réelle de vapeur d’eau et eₛ(T) la pression de vapeur saturante à la température T. Les deux pressions doivent être exprimées dans la même unité.'
          }
        }
      },
      {
        id: 'rayonnement-effet-serre',
        title: 'Le rayonnement atmosphérique et l’effet de serre',
        field: 'Climatologie physique · transferts radiatifs',
        summary: 'L’atmosphère absorbe, diffuse et émet le rayonnement à différentes longueurs d’onde ; les gaz à effet de serre modifient le flux infrarouge sortant.',
        lesson: {
          sections: [
            'Le système climatique reçoit principalement de l’énergie solaire à ondes courtes et perd de l’énergie vers l’espace sous forme de rayonnement infrarouge émis par la surface et l’atmosphère. Une partie du rayonnement solaire est réfléchie par les nuages, les aérosols et les surfaces : cette part contribue à l’albédo planétaire. Le reste est absorbé par la surface et l’atmosphère et alimente les échanges d’énergie.',
            'La surface terrestre émet principalement dans l’infrarouge thermique. La vapeur d’eau, le CO₂, le CH₄, le N₂O et l’ozone absorbent dans certaines bandes spectrales infrarouges, puis émettent eux-mêmes du rayonnement selon leur température. Une partie de ce rayonnement est dirigée vers la surface et une autre vers l’espace. Cet échange constitue l’effet de serre naturel, qui rend la température moyenne de surface plus élevée qu’elle ne le serait sans ces absorbeurs infrarouges.',
            'L’effet de serre ne signifie pas que l’atmosphère bloque toute la chaleur ni qu’elle fonctionne exactement comme une vitre de serre horticole. Il s’agit d’un transfert radiatif dans un milieu dont l’absorption et l’émission dépendent de la longueur d’onde, de la température et de la quantité de gaz absorbants. L’augmentation des concentrations de gaz à effet de serre d’origine humaine réduit initialement le rayonnement infrarouge sortant pour un état thermique donné ; le système se réchauffe ensuite jusqu’à rétablir un nouvel équilibre énergétique, avec des rétroactions.',
            'Le forçage radiatif décrit une perturbation du bilan énergétique du système climatique, souvent exprimée en W·m⁻². Une valeur positive tend à réchauffer le système, toutes choses égales par ailleurs ; une valeur négative tend à le refroidir. Les gaz à effet de serre ont globalement un effet réchauffant, tandis que de nombreux aérosols anthropiques diffusent la lumière solaire et ont un effet refroidissant moyen, avec des incertitudes importantes et des effets régionaux. Certains aérosols absorbants peuvent au contraire réchauffer l’atmosphère.',
            'La réponse climatique dépend du forçage total, des nuages, de la vapeur d’eau, de la glace, des océans et des échanges avec la surface. Les modèles de transfert radiatif calculent l’absorption et l’émission dans des bandes spectrales, puis les modèles climatiques couplent ces processus aux mouvements de l’air et de l’océan. Les évaluations du GIEC synthétisent les observations et la littérature évaluée par les pairs. Source : GIEC, Sixième rapport d’évaluation, https://www.ipcc.ch/assessment-report/ar6/'
          ],
          formula: {
            label: 'LOI DE STEFAN-BOLTZMANN',
            text: 'E = σT⁴',
            explanation: 'Pour un corps noir, E est le flux radiatif émis par unité de surface, T la température absolue en kelvins et σ = 5,670374419 × 10⁻⁸ W·m⁻²·K⁻⁴. Les surfaces et gaz réels nécessitent de tenir compte de leurs propriétés radiatives.'
          }
        }
      },
      {
        id: 'ozone-aerosols-qualite-air',
        title: 'Ozone, aérosols et qualité de l’air',
        field: 'Chimie atmosphérique · environnement',
        summary: 'L’ozone stratosphérique protège des ultraviolets, tandis que l’ozone troposphérique et les particules peuvent contribuer à la pollution atmosphérique.',
        lesson: {
          sections: [
            'L’ozone O₃ est la même molécule dans toute l’atmosphère, mais ses effets dépendent fortement de l’altitude. Dans la stratosphère, la couche d’ozone absorbe une grande partie des ultraviolets solaires les plus énergétiques, protégeant les êtres vivants. La quantité d’ozone varie selon la saison, la latitude, la circulation et la chimie atmosphérique ; la couche d’ozone n’est pas une enveloppe solide, mais une région où sa concentration est relativement élevée.',
            'Les substances contenant du chlore ou du brome, notamment certains composés halogénés d’origine humaine utilisés dans l’industrie, peuvent catalyser la destruction de l’ozone stratosphérique. Le Protocole de Montréal et ses amendements ont permis de réduire fortement la production de nombreuses substances qui appauvrissent la couche d’ozone. Le rétablissement est progressif et varie selon les régions et les conditions atmosphériques ; il ne signifie pas que tous les problèmes liés à l’ozone ont disparu. Source : NASA Ozone Watch, https://ozonewatch.gsfc.nasa.gov/',
            'Dans la troposphère, l’ozone est un polluant secondaire : il se forme par des réactions photochimiques impliquant notamment des oxydes d’azote et des composés organiques volatils sous l’action de la lumière solaire. Il peut irriter les voies respiratoires et endommager la végétation. Ses concentrations dépendent des émissions, de l’ensoleillement, de la température, du vent et des réactions chimiques ; elles ne se déduisent donc pas simplement de la quantité d’ozone stratosphérique.',
            'Les particules fines et autres aérosols peuvent pénétrer dans le système respiratoire et affecter la santé, selon leur taille et leur composition. Ils proviennent notamment de la combustion, de processus industriels, de poussières, de sels marins et de réactions chimiques dans l’air. Ils influencent aussi le climat en diffusant ou en absorbant le rayonnement et en modifiant parfois les propriétés des nuages. Leurs effets radiatifs ne sont pas identiques d’un type d’aérosol à l’autre et restent une source importante d’incertitude climatique.',
            'La qualité de l’air est étudiée à l’aide de stations au sol, de campagnes de mesure, de modèles chimiques et de satellites. Les satellites permettent de suivre certains gaz et panaches à grande échelle, mais une mesure satellitaire intégrée sur une colonne atmosphérique n’est pas directement équivalente à la concentration respirée au niveau du sol. Une interprétation fiable exige de considérer la variable mesurée, l’altitude, la résolution spatiale, la couverture nuageuse et les incertitudes instrumentales. Source : NASA, Atmospheric Composition, https://terra.nasa.gov/science/atmospheric-composition'
          ],
          formula: {
            label: 'ÉTAPES DE LA FORMATION PHOTOCHIMIQUE DE L’OZONE',
            text: 'NO₂ + lumière → NO + O ; O + O₂ → O₃',
            explanation: 'Ces réactions schématisent une étape du cycle photochimique. La production nette d’ozone dépend d’autres réactions, notamment de la présence de composés organiques volatils et de la chimie des oxydes d’azote ; cette écriture seule ne décrit pas toute la chimie atmosphérique.'
          },
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Cambridge University Press — An Introduction to Atmospheric Physics, David G. Andrews (2e édition, 2010)',
              url: 'https://www.cambridge.org/core/books/an-introduction-to-atmospheric-physics/3F0120AB397D07A552C821158930ACB8'
            },
            {
              title: 'Cambridge University Press — Atmospheric and Oceanic Fluid Dynamics, Geoffrey K. Vallis (2e édition, 2017)',
              url: 'https://www.cambridge.org/core/books/atmospheric-and-oceanic-fluid-dynamics/41379BDDC4257CBE11143C466F6428A4'
            },
            {
              title: 'NASA — Atmospheric Composition',
              url: 'https://www.nasa.gov/ames/earth-science/missions/atmospheric-composition/'
            },
            {
              title: 'NASA Science — Earth\'s Atmosphere: A Multi-layered Cake',
              url: 'https://science.nasa.gov/earth/earth-atmosphere/earths-atmosphere-a-multi-layered-cake/'
            },
            {
              title: 'Organisation météorologique mondiale (OMM) — State of the Global Climate',
              url: 'https://wmo.int/publication-series/state-of-global-climate'
            }
          ]
        }
      }
    ] // FIN BRANCHE atmosphere
  }
];

