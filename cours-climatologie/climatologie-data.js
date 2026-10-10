// Catalogue du cours de climatologie : 3 branches, 9 chapitres.
// Règle éditoriale : chaque valeur chiffrée provient soit d'une source ouverte
// vérifiée (manuel ouvert « Practical Meteorology » de Roland Stull, hébergé sur
// Geo LibreTexts ; chapitres d'introduction ouverts « An Introduction to Weather
// and Climate » et « Atmospheric Processes and Phenomena » ; NOAA ; NASA ; GIEC),
// soit d'un calcul conduit pas à pas dans la leçon à partir de ces valeurs.
// Aucune donnée non vérifiable n'est affirmée : les ordres de grandeur non sourcés
// restent exprimés qualitativement.
window.courseCatalog = [
  {
    id: 'moteur-energetique',
    title: 'Le moteur énergétique',
    note: 'L\'énergie qui entre et celle qui sort : le bilan radiatif et l\'effet de serre qui fixent la température de la planète.',
    chapters: [
      {
        id: 'bilan-radiatif',
        title: 'Le bilan radiatif de la Terre',
        field: 'Climatologie physique · bases',
        summary: 'Constante solaire, albédo, loi de Stefan-Boltzmann : d\'où viennent les 255 K d\'émission et les 33 K d\'écart avec la surface.',
        lesson: {
          sections: [
            'Le Soleil fournit à la Terre un flux d\'énergie presque constant, mesuré hors de l\'atmosphère par les radiomètres satellitaires : c\'est la constante solaire, S₀ = 1361 W·m⁻². La Terre n\'intercepte ce faisceau que sur une surface projetée πR² (un disque) mais répartit cette énergie sur l\'ensemble du globe 4πR² (une sphère) : le flux moyen disponible par mètre carré est donc S₀/4, soit environ 340 W·m⁻². Ce facteur 4, purement géométrique, est la première cause d\'erreur des bilans d\'énergie mal construits.',
            'Une fraction de ce rayonnement est renvoyée vers l\'espace sans jamais être absorbée : c\'est l\'albédo α, rapport entre le flux réfléchi et le flux incident. La planète réfléchit environ 30 % du rayonnement solaire (α ≈ 0,30), l\'essentiel du compte étant tenu par les nuages et par les surfaces claires (banquise, calottes, déserts). Le reste, soit (1 − α)·S₀/4 ≈ 240 W·m⁻², constitue l\'énergie réellement disponible pour chauffer l\'atmosphère, les océans et la surface.',
            'Tout corps à la température T émet un flux proportionnel à la quatrième puissance de T : c\'est la loi de Stefan-Boltzmann, E = σT⁴, avec σ = 5,6704 × 10⁻⁸ W·m⁻²·K⁻⁴. En imposant l\'égalité entre l\'émission et l\'absorption (240 W·m⁻²), on obtient une température d\'émission de 255 K, soit −18 °C : la température qu\'aurait une Terre ne rayonnant que comme un corps noir, sans atmosphère partiellement opaque à l\'infrarouge.',
            'La surface réelle est près de 33 K plus chaude. La raison tient à une asymétrie : l\'atmosphère est presque transparente au rayonnement solaire, concentré dans le visible, mais partiellement opaque au rayonnement infrarouge réémis par le sol, à cause de la vapeur d\'eau, du dioxyde de carbone, du méthane et du protoxyde d\'azote. Le sol reçoit donc, en plus du Soleil, un flux infrarouge renvoyé vers le bas : c\'est l\'effet de serre, phénomène naturel sans lequel l\'eau liquide en surface serait impossible.',
            'La loi de Wien fixe la couleur de ce rayonnement : λ_max = b/T, avec b = 2,898 × 10⁻³ m·K. À 5777 K, le Soleil place son maximum vers 0,5 µm, dans le visible ; à 288 K, la Terre place le sien vers 10 µm, dans l\'infrarouge thermique. Parce que les deux maxima ne tombent pas dans la même bande spectrale, l\'atmosphère peut laisser entrer l\'énergie et retenir une partie de la sortie : l\'effet de serre est une affaire d\'absorption sélective, et non d\'opacité globale.',
            'L\'atténuation d\'un faisceau qui traverse l\'atmosphère suit une loi d\'absorption de type Beer-Lambert : E_transmis = E_incident · e^(−τ), où τ, l\'épaisseur optique, est sans dimension et croît avec la quantité de gaz absorbant traversée. C\'est cette forme exponentielle, jointe à la saturation progressive des raies d\'absorption, qui explique pourquoi le forçage apporté par le CO₂ augmente comme le logarithme de sa concentration, et non proportionnellement à elle.'
          ],
          formula: {
            label: 'TEMPÉRATURE D\'ÉQUILIBRE',
            text: 'Tₑ = [ S₀(1 − α) / (4σ) ]^(1/4) ≈ 255 K pour S₀ = 1361 W·m⁻² et α = 0,30',
            mathML: 'equilibrium-temperature'
          },
          equationDetails: [
            {
              title: 'Le facteur 4 : du disque à la sphère',
              formula: 'flux moyen = S₀ / 4 = 1361 / 4 ≈ 340 W·m⁻²',
              explanation: 'La Terre présente au Soleil une ombre de section πR² et capte donc S₀ × πR². Cette puissance est ensuite émise par l\'ensemble de la surface 4πR². Le rapport des deux surfaces vaut exactement 4, quelle que soit la taille de la planète : le flux moyen par mètre carré est S₀/4, et non S₀.',
              parameters: 'S₀ en W·m⁻² au sommet de l\'atmosphère ; R le rayon terrestre (il s\'élimine du calcul) ; le résultat est un flux moyen à l\'échelle du globe et du temps, pas un flux local à midi.',
              example: 'Exemple : une surface perpendiculaire aux rayons reçoit 1361 W·m⁻² au-dessus de l\'atmosphère à l\'équateur aux équinoxes ; la moyenne planétaire tombe à 340 W·m⁻² parce qu\'une moitié du globe est nuit et que les hautes latitudes reçoivent le faisceau en oblique.',
              result: 'Comparer 1361 W·m⁻² à un flux moyen de surface, sans le facteur 4 ni l\'albédo, conduit à une erreur d\'un facteur six.'
            },
            {
              title: 'Température d\'émission : le calcul complet',
              formula: 'Tₑ = [ (1 − α)·S₀ / (4σ) ]^(1/4)',
              mathML: 'stefan-boltzmann',
              explanation: 'Émettre 240 W·m⁻² comme un corps noir impose Tₑ = (240/σ)^(1/4) ≈ 255 K. En retour, une surface à 288 K émet σ × 288⁴ ≈ 390 W·m⁻² : les quelque 150 W·m⁻² qui manquent au bilan de surface sont compensés par le rayonnement infrarouge atmosphérique descendant, auxquels s\'ajoutent les flux de chaleur sensible et latent.',
              parameters: 'σ = 5,6704 × 10⁻⁸ W·m⁻²·K⁻⁴ ; T obligatoirement en kelvins dans une loi en T⁴ ; E en W·m⁻². L\'émissivité est prise égale à 1 (corps noir) : c\'est l\'hypothèse qui borne le calcul par le bas.',
              example: 'Exemple : avec S₀ = 1361 W·m⁻² et α = 0,30, le flux absorbé vaut 1361 × 0,70 / 4 = 238 W·m⁻², d\'où Tₑ = (238/σ)^(1/4) ≈ 255 K (−18 °C), à comparer aux 288 K (+15 °C) de la surface moyenne.',
              result: 'L\'écart de 33 K entre les deux températures est la signature chiffrée de l\'effet de serre.'
            },
            {
              title: 'Loi de Wien : où part l\'énergie terrestre',
              formula: 'λ_max = 2,898 × 10⁻³ / T  (λ en mètres, T en kelvins)',
              explanation: 'Le maximum d\'émission se déplace vers les courtes longueurs d\'onde quand la température augmente. Le Soleil (5777 K) émet donc dans le visible, que l\'atmosphère traverse bien ; la Terre (288 K) émet vers 10 µm, bande où la vapeur d\'eau, le CO₂ (bande de 15 µm) et l\'ozone absorbent fortement. Entre les deux, la fenêtre atmosphérique de 8 à 13 µm laisse s\'échapper une part importante du flux.',
              parameters: 'b = 2,898 × 10⁻³ m·K ; T en kelvins ; λ_max en mètres, souvent converti en micromètres (1 µm = 10⁻⁶ m).',
              example: 'Exemple : à 255 K, le maximum se place vers 11,4 µm, au cœur de la fenêtre atmosphérique — c\'est pourquoi les nuages, qui ferment cette fenêtre, pèsent autant sur le bilan que les gaz à effet de serre.',
              result: 'Refroidir l\'émetteur décale son maximum vers l\'infrarouge lointain, précisément là où l\'atmosphère est plus opaque.'
            },
            {
              title: 'Épaisseur optique et saturation des raies',
              formula: 'E_transmis = E_incident · e^(−τ)',
              explanation: 'Doubler la quantité de gaz absorbant double l\'épaisseur optique τ, donc la transmission décroît exponentiellement. Comme les raies des principaux gaz sont déjà proches de la saturation au centre, le surcroît d\'absorption se joue surtout sur les ailes des raies : le forçage radiatif du CO₂ croît comme le logarithme de la concentration, et non comme la concentration elle-même.',
              parameters: 'τ sans dimension ; E en W·m⁻² ; la loi suppose un faisceau monochromatique et un milieu homogène, hypothèses suffisantes pour raisonner en ordre de grandeur.',
              example: 'Exemple : τ = 0,20 laisse passer e⁻⁰‚² = 0,82 du flux ; τ = 0,40 n\'en laisse plus passer que 0,67. Deux fois plus de gaz ne produit donc pas deux fois plus d\'absorption.',
              result: 'La réponse du climat au CO₂ est logarithmique : chaque doublement de concentration apporte un forçage du même ordre.'
            }
          ],
          example: {
            statement: 'Une planète rocheuse reçoit S₀ = 1361 W·m⁻² et présente un albédo de 0,30. Estimer sa température d\'émission, puis interpréter l\'écart avec une température de surface de +15 °C.',
            calculation: 'Flux moyen absorbé : 1361 × (1 − 0,30) / 4 = 238 W·m⁻². Température d\'émission : Tₑ = (238 / 5,6704 × 10⁻⁸)^(1/4) ≈ 255 K, soit −18 °C. La surface observée (≈ 288 K) est 33 K plus chaude : l\'atmosphère absorbe une partie du rayonnement infrarouge et le réémet en partie vers le bas, ce qui relève la température de surface jusqu\'au rétablissement de l\'équilibre.',
            answer: 'Tₑ ≈ 255 K (−18 °C) ; les 33 K d\'écart avec 288 K mesurent l\'effet de serre naturel.'
          },
          exercise: {
            question: 'Pourquoi la moyenne planétaire du flux solaire absorbé vaut-elle environ 240 W·m⁻² et non 1361 W·m⁻² ?',
            answer: 'Parce qu\'il faut diviser par 4 le passage du disque qui intercepte le faisceau à la sphère qui émet, puis multiplier par (1 − α) ≈ 0,70 pour retirer la part réfléchie : 1361 / 4 × 0,70 ≈ 240 W·m⁻².'
          },
          exercises: [
            {
              question: 'Un nuage élevé et étendu recouvre une large portion du globe et renvoie davantage de rayonnement incident. Quel effet sur le flux absorbé ?',
              answer: 'L\'albédo planétaire augmente, donc le flux absorbé (1 − α)·S₀/4 diminue : le système reçoit moins d\'énergie, ce qui tend à refroidir la surface — à court terme seulement, car l\'effet net dépend de l\'altitude et de l\'épaisseur du nuage.'
            },
            {
              question: 'Calculer le flux émis par une surface à 288 K et le comparer au flux solaire absorbé de 240 W·m⁻².',
              answer: 'σ × 288⁴ ≈ 390 W·m⁻² : la surface émet bien plus qu\'elle n\'absorbe directement de soleil ; l\'écart est comblé par le rayonnement atmosphérique descendant et par les flux turbulent et latent venus de l\'atmosphère.'
            },
            {
              question: 'Une planète voit son albédo passer de 0,30 à 0,35 à constante solaire inchangée. Que devient sa température d\'émission ?',
              answer: 'Le flux absorbé passe de 238 à 221 W·m⁻², soit 7 % de perte ; comme le flux émis varie en T⁴, Tₑ baisse d\'environ 1,8 %, soit près de 5 K.'
            }
          ],
          sources: [
            { title: 'Roland Stull, Practical Meteorology (manuel ouvert, CC BY-NC-SA) — 2.2 Radiation Principles : constante solaire 1361 W·m⁻², loi de Beer-Lambert, épaisseur optique', url: 'https://geo.libretexts.org/Bookshelves/Meteorology_and_Climate_Science/Practical_Meteorology_(Stull)/02%3A_Solar_and_Infrared_Radiation/2.02%3A_Radiation_Principles' },
            { title: 'NASA Earth Observatory — Earth\'s Energy Budget : bilan moyen planétaire, albédo et flux rayonnants', url: 'https://earthobservatory.nasa.gov/features/EnergyBalance' },
            { title: 'OpenStax Astronomy 2e — 5.1 The Behavior of Light : rayonnement thermique, lois de Stefan-Boltzmann et de Wien', url: 'https://openstax.org/books/astronomy-2e/pages/5-1-the-behavior-of-light' },
            { title: 'GIEC, AR6 WGI — Chapitre 7 « The Earth\'s Energy Budget, Climate Feedbacks and Climate Sensitivity » : forçages radiatifs et rétroactions', url: 'https://www.ipcc.ch/report/ar6/wg1/' }
          ]
        }
      } // FIN CHAPITRE bilan-radiatif
      ,
      {
        id: 'effet-de-serre',
        title: 'Effet de serre et forçages climatiques',
        field: 'Climatologie physique · intermédiaire',
        summary: 'Gaz à effet de serre, forçage radiatif et rétroactions : ce qui déplace l\'équilibre, comment on le mesure et ce qui l\'amplifie.',
        lesson: {
          sections: [
            'L\'effet de serre repose sur une sélectivité spectrale, et non sur un simple « contact » entre le sol et l\'air : le sol, chauffé par le Soleil, émet dans l\'infrarouge ; l\'atmosphère absorbe une partie de ce rayonnement et le réémet dans toutes les directions, y compris vers le bas. Ce flux descendant supplémentaire contraint la surface à atteindre une température plus élevée pour que le flux quittant finalement l\'atmosphère égale le flux solaire absorbé. L\'équilibre est rétabli, mais à une température plus haute.',
            'Quatre gaz dominent l\'effet de serre naturel. La vapeur d\'eau (H₂O) apporte la plus grande part de l\'absorption infrarouge, mais sa durée de vie est courte (jours à semaines) et sa concentration est fixée par la température : c\'est une rétroaction, pas un forçage initial. Le dioxyde de carbone (CO₂) voit sa concentration pilotée par les échanges avec l\'océan, la biosphère et les combustions. Le méthane (CH₄) et le protoxyde d\'azote (N₂O) sont bien moins abondants mais très absorbants par molécule. L\'ozone (O₃) absorbe le rayonnement ultraviolet dans la stratosphère et l\'infrarouge en basse atmosphère ; les gaz fluorés, eux, sont d\'origine uniquement humaine.',
            'L\'activité humaine a relevé la concentration en CO₂. Le réservoir préindustriel, lu dans les bulles d\'air piégées par la glace, se situait aux alentours de 280 ppm ; les mesures directes engagées par Charles Keeling à Mauna Loa en 1958, poursuivies par NOAA, montrent un dépassement durable des 420 ppm, soit près de moitié plus qu\'avant les combustions fossiles. Cette hausse suit les émissions de charbon, de pétrole et de gaz, et porte la signature isotopique du carbone fossile.',
            'L\'effet d\'un gaz se quantifie par son forçage radiatif : la perturbation du bilan d\'énergie, exprimée en W·m⁻², imposée par une modification donnée, atmosphères ajustées sauf la température et les nuages. Pour le CO₂, la relation est logarithmique : ΔF = a × ln(C/C₀), avec a de l\'ordre de 5,4 W·m⁻² d\'après la formulation spectroscopique simplifiée retenue par les rapports du GIEC, soit environ 3,7 W·m⁻² pour un doublement de concentration.',
            'Une perturbation du bilan ne produit jamais un réchauffement proportionnel : le système répond par des rétroactions. Le recul de la banquise et des neiges réduit l\'albédo et amplifie le réchauffement ; le réchauffement accroît la teneur en vapeur d\'eau (environ 7 % d\'humidité saturante supplémentaire par degré), gaz à effet de serre, qui amplifie à son tour ; les nuages agissent dans les deux sens selon leur altitude, leur phase et leur épaisseur. La sensibilité climatique — le réchauffement moyen obtenu à l\'équilibre pour un doublement de CO₂ — résume toutes ces réponses : le GIEC retient une meilleure estimation d\'environ 3 °C, avec une fourchette probable de 2,5 à 4 °C.',
            'Enfin, un forçage ne se traduit pas immédiatement en température. L\'océan, par sa capacité thermique et la profondeur de son mélange, absorbe l\'essentiel de la chaleur excédentaire et retarde la réponse de surface : le réchauffement observé reste donc inférieur au réchauffement « engagé », et l\'océan continue de se réchauffer et de monter longtemps après une stabilisation des concentrations.'
          ],
          formula: {
            label: 'FORÇAGE LIÉ AU CO₂',
            text: 'ΔF ≈ 5,4 × ln(C / C₀) W·m⁻²  →  ≈ 3,7 W·m⁻² pour C = 2C₀',
            mathML: 'log-forcing'
          },
          equationDetails: [
            {
              title: 'Le forçage logarithmique : pourquoi le doublement compte',
              formula: 'ΔF = a × ln(C / C₀),  a ≈ 5,4 W·m⁻²,  ΔF(C = 2C₀) ≈ 3,7 W·m⁻²',
              explanation: 'La relation découle de la saturation des raies d\'absorption : ajouter du CO₂ là où l\'absorption est déjà pleine n\'ajoute presque rien, l\'effet se reporte sur les ailes de la bande et sur les couches émétiques d\'altitude. Le forçage ne dépend donc que du rapport C/C₀, et non de la concentration absolue : passer de 280 à 560 ppm ou de 560 à 1120 ppm donne le même forçage.',
              parameters: 'C la concentration en volume, C₀ la concentration de référence (préindustrielle ≈ 280 ppm) ; a un coefficient spectroscopique qui dépend du gaz considéré et vaut environ 5,4 W·m⁻² pour le CO₂ dans la formulation simplifiée utilisée par les rapports du GIEC.',
              example: 'Exemple : ΔF = 5,4 × ln(420/280) = 5,4 × 0,405 ≈ 2,2 W·m⁻² pour la hausse déjà observée du seul CO₂, à quoi s\'ajoutent le méthane, N₂O, les halocarbures et les aérosols, dont l\'effet est négatif.',
              result: 'Le forçage total anthropique est donc un solde entre gaz à effet de serre (positif) et aérosols (négatif).'
            },
            {
              title: 'Du forçage à la température : la réponse radiative brute',
              formula: 'dF = 4σT³ · dT  ⟹  dT ≈ [ T / (4F) ] × dF ≈ 0,27 K par W·m⁻²',
              mathML: 'stefan-boltzmann',
              explanation: 'En dérivant la loi de Stefan-Boltzmann F = σT⁴, on obtient la sensibilité du flux émis à la température. Avec F ≈ 240 W·m⁻² et Tₑ ≈ 255 K, le rapport T/(4F) vaut environ 0,27 K par W·m⁻² : c\'est la réponse d\'un corps noir sans aucune rétroaction.',
              parameters: 'T en kelvins (température d\'émission, pas de surface) ; F le flux émis en W·m⁻² ; dF le forçage en W·m⁻² ; le résultat est un écart de température en kelvins, identique en degrés Celsius.',
              example: 'Exemple : 3,7 W·m⁻² × 0,27 K·(W·m⁻²)⁻¹ ≈ 1,0 K sans rétroaction. Le GIEC retient ≈ 3 °C une fois la glace, la vapeur d\'eau et les nuages pris en compte (fourchette probable 2,5 à 4 °C) : les rétroactions multiplient la réponse brute par trois environ.',
              result: 'Une partie majeure du réchauffement attendu ne vient pas du gaz lui-même, mais des rétroactions qu\'il déclenche.'
            },
            {
              title: 'D\'où vient le CO₂ en excès : la signature isotopique',
              formula: 'δ¹³C atmosphérique en baisse quand [CO₂] augmente, et ¹⁴C absent',
              explanation: 'Le carbone des combustibles fossiles est appauvri en ¹³C par la fractionnement biologique et ne contient plus de ¹⁴C, désintégré depuis des millions d\'années. Brûler ce carbone ajoute donc du CO₂ « léger » : la proportion relative de ¹³C dans l\'air mesuré recule au fil de la hausse de concentration, et la teneur atmosphérique en O₂ diminue en parallèle, comme il se doit lors d\'une oxydation. Ces deux traces écartent l\'océan ou la respiration des sols comme source principale de la hausse observée.',
              parameters: 'δ¹³C exprimé en pour mille (‰) par rapport à un standard ; le rapport ¹³C/¹²C et la pression partielle en O₂ sont mesurés sur les mêmes sites que le CO₂.',
              example: 'Exemple : si la hausse observée provenait de l\'océan (réchauffement, dégazage), elle n\'aurait ni la même signature en ¹³C, ni la baisse corrélée d\'O₂, ni l\'absence de ¹⁴C.',
              result: 'La composition isotopique de l\'air identifie la source du carbone ajouté, sans dépendre des registres d\'émissions.'
            },
            {
              title: 'Le budget : où passe le CO₂ émis',
              formula: 'air ≈ 45 % ; océan + biosphère terrestre ≈ 55 % des émissions',
              explanation: 'Une part minoritaire mais persistante du CO₂ émis reste dans l\'atmosphère ; le reste est absorbé par l\'océan, où il acidifie l\'eau de mer, et par la biosphère terrestre (photosynthèse, sols). Ces puits ne sont pas constants : leur efficacité relative diminue quand la concentration s\'élève, ce qui explique que la fraction aérienne reste à peu près stable au lieu de baisser.',
              parameters: 'Fractions estimées sur des périodes pluri-décennales par comparaison des émissions comptables et des mesures atmosphériques ; elles varient d\'une année à l\'autre avec El Niño, les feux et l\'état de la végétation.',
              example: 'Exemple : lors d\'un épisode El Niño fort, la croissance annuelle de CO₂ accélère, car la sécheresse et les feux réduisent l\'absorption par les terres.',
              result: 'Sans les puits, la concentration augmenterait deux fois plus vite qu\'observé.'
            }
          ],
          example: {
            statement: 'La concentration atmosphérique en CO₂ double par rapport au niveau préindustriel (280 → 560 ppm). Estimer le forçage radiatif, la réponse d\'un corps noir sans rétroaction, puis le réchauffement retenu par le GIEC.',
            calculation: 'Forçage : ΔF = 5,4 × ln(560/280) = 5,4 × 0,693 ≈ 3,7 W·m⁻². Réponse radiative brute : ΔT = 3,7 × 0,27 ≈ 1,0 K, en prenant Tₑ = 255 K et F = 240 W·m⁻². Réponse avec rétroactions : la meilleure estimation du GIEC est d\'environ 3 °C, fourchette probable 2,5 à 4 °C.',
            answer: '≈ 3,7 W·m⁻² de forçage, ≈ 1 K sans rétroaction, ≈ 3 °C lorsque les rétroactions de la glace, de la vapeur d\'eau et des nuages sont incluses.'
          },
          exercise: {
            question: 'Pourquoi le réchauffement de surface observé reste-t-il inférieur au réchauffement « engagé » par les émissions déjà réalisées ?',
            answer: 'Parce que l\'océan absorbe la plus grande part de la chaleur excédentaire, par sa capacité thermique et par le mélange vertical : l\'équilibre radiatif de surface n\'est pas encore atteint, et la température continue de monter tant que le bilan reste positif, même à forçage constant.'
          },
          exercises: [
            {
              question: 'Pourquoi la vapeur d\'eau est-elle qualifiée de rétroaction et non de forçage initial ?',
              answer: 'Sa durée de vie atmosphérique est de l\'ordre de jours à semaines : sa concentration s\'ajuste à la température (loi de Clausius-Clapeyron, environ 7 % d\'humidité saturante de plus par degré). Elle ne peut donc pas initier un changement durable ; elle amplifie celui imposé par un gaz à longue durée de vie comme le CO₂.'
            },
            {
              question: 'Une bande d\'absorption est dite « saturée ». Pourquoi l\'ajout du gaz concerné produit-il tout de même un forçage ?',
              answer: 'Parce que l\'absorption supplémentaire se fait sur les ailes de la bande et dans les couches hautes de l\'atmosphère : épaissir la couche absorbante abaisse la hauteur effective d\'émission vers l\'espace, qui se situe dans une couche plus froide ; le flux sortant diminue donc, ce qui réchauffe le système jusqu\'au rétablissement de l\'équilibre.'
            },
            {
              question: 'Le méthane a un forçage cumulé bien plus faible que le CO₂, mais un potentiel de réchauffement très élevé. Comment réconcilier les deux ?',
              answer: 'Par molécule, le CH₄ absorbe dans des bandes peu saturées et est très efficace ; mais sa durée de vie est courte (une dizaine d\'années) contre plusieurs siècles pour le CO₂. Son potentiel dépend donc de l\'horizon retenu : élevé à 20 ans, plus modéré à 100 ans, et son effet cumulé dépend du maintien des émissions.'
            }
          ],
          sources: [
            { title: 'NOAA Global Monitoring Laboratory — Trends in Atmospheric Carbon Dioxide : série de Mauna Loa, débutée en 1958', url: 'https://gml.noaa.gov/ccgg/trends/' },
            { title: 'NASA — Vital Signs : Carbon Dioxide, la hausse du CO₂ atmosphérique', url: 'https://climate.nasa.gov/vital-signs/carbon-dioxide/' },
            { title: 'GIEC, AR6 WGI — Chapitre 7 « The Earth\'s Energy Budget, Climate Feedbacks and Climate Sensitivity » : forçages, rétroactions, sensibilité climatique', url: 'https://www.ipcc.ch/report/ar6/wg1/' },
            { title: 'Roland Stull, Practical Meteorology (manuel ouvert) — 2.3 Surface Radiation Budget : composantes du bilan de surface', url: 'https://geo.libretexts.org/Bookshelves/Meteorology_and_Climate_Science/Practical_Meteorology_(Stull)/02%3A_Solar_and_Infrared_Radiation/2.03%3A_Surface_Radiation_Budget' }
          ]
        }
      } // FIN CHAPITRE effet-de-serre
    ]
  },
  {
    id: 'circulation-generale',
    title: 'La circulation générale',
    note: 'Comment l\'atmosphère et l\'océan évacuent la chaleur des tropiques vers les pôles : cellules, vents, jets et oscillations.',
    chapters: [
      {
        id: 'cellules-de-circulation',
        title: 'Les cellules de circulation générale',
        field: 'Climatologie dynamique · bases',
        summary: 'Hadley, Ferrel, polaire : pourquoi l\'air monte à l\'équateur et redescend à 30°, et d\'où viennent alizés et vents d\'ouest.',
        lesson: {
          sections: [
            'Le moteur est thermique. Le bilan radiatif est excédentaire sous les tropiques et déficitaire aux hautes latitudes : chaque mètre carré tropical reçoit plus d\'énergie qu\'il n\'en émet, l\'inverse se produisant vers les pôles. Sans circulation, l\'équateur deviendrait brûlant et les pôles glaciaux. L\'atmosphère et l\'océan transportent ensemble cet excédent vers les hautes latitudes, l\'atmosphère en Assurant une part voisine de la moitié.',
            'Dans l\'hémisphère nord, la chaleur accumérée par les océans subtropicaux réchauffe l\'air par le bas : cet air léger s\'élève, et sa montée est entretenue par la condensation de la vapeur d\'eau, qui libère de la chaleur latente. En s\'élevant, il se refroidit, s\'appauvrit en humidité, se charge en nuages d\'orage, puis diverge en altitude vers le pôle. En perdant sa chaleur vers l\'espace, il devient dense et finit par redescendre — la convection thermique s\'organise en boucle fermée.',
            'Cette boucle porte un nom : la cellule de Hadley. Elle s\'achève bien avant le pôle, vers 30° de latitude, pour une raison dynamique. La force de Coriolis, née de la rotation de la Terre, dévie les mouvements vers la droite dans l\'hémisphère nord et vers la gauche dans l\'hémisphère sud, et son effet croît avec la latitude : nulle à l\'équateur, maximale aux pôles. L\'air qui s\'élève à l\'équateur et fuit vers le pôle en altitude est donc progressivement dévié vers l\'est ; vers 30°, son movement est devenu presque entièrement zonal (d\'ouest) à la tropopause, et il ne peut plus monter plus loin vers le pôle : c\'est là, et là seulement, qu\'il subsides — créant le jet subtropical.',
            'La branche descendante de la cellule de Hadley vers 30° comprime et réchauffe l\'air, dissipe les nuages et arrose les continents d\'un soleil persistant : c\'est la famille des déserts subtropicaux — Sahara, Arabie, déserts d\'Australie, du Kalahari, de Mojave et du Sonora, tous situés entre 15 et 35° de part et d\'autre de l\'équateur, et tous placés sous les hautes pressions subtropicales.',
            'Le retour de surface, de 30° vers l\'équateur, est dévié vers l\'ouest par Coriolis et forme les alizés : nord-est dans l\'hémisphère nord, sud-est dans l\'hémisphère sud. Ces deux flux convergent vers la zone de basse pression équatoriale, la zone de convergence intertropicale (ZCIT), ceinture d\'orages qui suit la course saisonnière du Soleil et migre plus volontiers vers l\'hémisphère d\'été, car les océans et les continents de l\'hémisphère nord emmagasinent davantage de chaleur.',
            'Entre 30 et 60° s\'étend la cellule de Ferrel, la seule des trois à être une circulation indirecte : elle est entraînée mécaniquement par ses voisines, comme une roue entraînée par deux roues dentées. Le retour de surface vers le pôle, dévié vers l\'est, fournit les vents d\'ouest qui gouvernent le temps des latitudes moyennes, de l\'Europe de l\'Ouest à la côte pacrique d\'Amérique du Nord. Au-delà du front polaire, vers 60°, l\'air froid et sec des régions arctiques descend au pôle et revient vers les basses latitudes : c\'est la cellule polaire, directe mais peu profonde, qui fournit les vents d\'est polaires.'
          ],
          formula: {
            label: 'PARAMÈTRE DE CORIOLIS',
            text: 'f = 2Ω sin φ  avec Ω = 7,29 × 10⁻⁵ s⁻¹  →  nul à l\'équateur, maximal aux pôles',
            mathML: 'coriolis-parameter'
          },
          equationDetails: [
            {
              title: 'La force de Coriolis et son paramètre',
              formula: 'F_c = m · f · v   avec   f = 2Ω sin φ',
              mathML: 'coriolis-parameter',
              explanation: 'Dans le repère tournant de la Terre, tout mouvement semble soumis à une force perpendiculaire à sa vitesse, dirigée vers la droite dans l\'hémisphère nord et vers la gauche dans l\'hémisphère sud. Cette force ne travaille pas : elle courbe les trajectoires sans jamais modifier la vitesse ni l\'énergie de la particule. Son intensité dépend uniquement de la latitude par l\'intermédiaire de f, le paramètre de Coriolis.',
              parameters: 'Ω = 7,29 × 10⁻⁵ s⁻¹, vitesse angulaire de rotation terrestre (un tour par jour sidéral) ; φ la latitude en degrés ; m la masse en kilogrammes ; v la vitesse en m·s⁻¹ ; f en s⁻¹.',
              example: 'Exemple : à 45° de latitude, f = 1,458 × 10⁻⁴ × sin 45° = 1,03 × 10⁻⁴ s⁻¹. À 5° de latitude, f ne vaut plus que 1,27 × 10⁻⁵ s⁻¹, soit huit fois moins : c\'est pourquoi aucun cyclone tropical ne se forme à moins de 5° de l\'équateur.',
              result: 'Le temps caractéristique de déviation est 2π/f : environ 12 h aux pôles, 17 h à 45°, 24 h à 30° et une durée infinie à l\'équateur.'
            },
            {
              title: 'Le vent géostrophique : lire la pression pour obtenir le vent',
              formula: 'v_g = (1 / ρf) × Δp / Δn',
              explanation: 'Lorsque la force du gradient de pression et la force de Coriolis s\'équilibrent, le vent souffle parallèlement aux isobares, en laissant les basses pressions à sa gauche dans l\'hémisphère nord. Plus les isobares sont serrées, plus le gradient est fort et plus le vent est rapide. L\'approximation est valable au-dessus de la couche de frottement et hors des basses latitudes, où f devient trop petit.',
              parameters: 'ρ la masse volumique de l\'air (≈ 1,2 kg·m⁻³ au niveau de la mer) ; f le paramètre de Coriolis ; Δp/Δn le gradient horizontal de pression en pascals par mètre.',
              example: 'Exemple : 3 hPa d\'écart sur 300 km donnent Δp/Δn = 300 / (3 × 10⁵) = 10⁻³ Pa·m⁻¹, d\'où v_g = 10⁻³ / (1,2 × 1,03 × 10⁻⁴) ≈ 8 m·s⁻¹ à 45° de latitude.',
              result: 'À gradient de pression égal, le vent géostrophique est plus fort en hautes latitudes qu\'en basses latitudes, puisque f y est plus grand.'
            },
            {
              title: 'Le nombre de Rossby : dire si la rotation compte',
              formula: 'Ro = U / (f · L)',
              mathML: 'rossby-number',
              explanation: 'Le nombre de Rossby compare l\'accélération relative du fluide à l\'accélération de Coriolis. Bien au-dessous de 1, la rotation domine et l\'équilibre géostrophique s\'applique : le mouvement est vaste, lent et faiblement courbure. Très au-dessus de 1, la rotation est négligeable et la trajectoire est gouvernée par l\'inertie et le frottement.',
              parameters: 'U la vitesse caractéristique en m·s⁻¹ ; L l\'échelle horizontale du mouvement en mètres ; f le paramètre de Coriolis en s⁻¹.',
              example: 'Exemple : une dépression de 1000 km (L = 10⁶ m) vent de 10 m·s⁻¹ à 45° donne Ro = 10 / (1,03 × 10⁻⁴ × 10⁶) ≈ 0,1 : la rotation commande tout. Un orage de 10 km donne Ro ≈ 10 : la rotation n\'y pèse presque rien.',
              result: 'Le même fluide obéit à deux physiques différentes selon la taille du mouvement observé.'
            }
          ],
          example: {
            statement: 'Comparer le paramètre de Coriolis à 10° et à 50° de latitude, puis expliquer pourquoi aucun cyclone tropical ne naît à l\'aplomb de l\'équateur.',
            calculation: 'f = 2Ω sin φ, avec 2Ω = 1,458 × 10⁻⁴ s⁻¹. À 10° : f = 1,458 × 10⁻⁴ × 0,174 = 2,5 × 10⁻⁵ s⁻¹. À 50° : f = 1,458 × 10⁻⁴ × 0,766 = 1,1 × 10⁻⁴ s⁻¹, soit quatre fois et demi plus. Or la mise en rotation d\'une masse d\'air autour d\'une basse pression suppose que Coriolis dévie les flux convergents avant qu\'ils n\'atteignent le centre : cette mise en rotation demande environ un quart de la période inertie 2π/f, soit plusieurs heures — durée impossible à l\'équateur, où f tend vers zéro.',
            answer: 'f croît comme sin φ : quasi nul à l\'équateur, il quadruple entre 10° et 50°. Sans déviation suffisante, aucune circulation fermée ne peut s\'organiser : la cyclogenèse est exclue sous les 5 à 10 premiers degrés de latitude.'
          },
          exercise: {
            question: 'Pourquoi les vents d\'ouest des latitudes moyennes soufflent-ils d\'ouest en est alors que la cellule de Ferrel est une circulation « à l\'envers » ?',
            answer: 'Le sens de la cellule ne fixe pas le sens du vent : ce qui compte est la déviation subie par le flux de surface. Ce flux part des hautes pressions subtropicales vers les basses pressions subpolaires, donc vers le pôle, et Coriolis le dévie vers la droite dans l\'hémisphère nord : la composante d\'ouest s\'impose, même si la boucle thermique est entraînée mécaniquement par ses voisines.'
          },
          exercises: [
            {
              question: 'La zone de convergence intertropicale est-elle fixe ?',
              answer: 'Non : elle suit la course saisonnière du Soleil et migre de plusieurs degrés, davantage vers le nord parce que les terres émergées de l\'hémisphère nord s\'échauffent plus vite. Ce balayement commande l\'aller et le retour des saisons des pluies et l\'inversion des moussons.'
            },
            {
              question: 'Pourquoi la cellule polaire est-elle peu profonde et difficile à observer ?',
              answer: 'Parce que le contraste thermique y est faible : l\'air froid descend au pôle et revient vers une région déjà froide. La conversion d\'énergie thermique en mouvement mécanique est donc modeste, et la cellule réelle est masquée par le passage des dépressions et des ondes de Rossby.'
            },
            {
              question: 'Un cyclone tropical remonte de 15 à 45° de latitude. Que change la multiplication par trois du paramètre de Coriolis ?',
              answer: 'Le vent se place progressivement en équilibre géostrophique, le champ de vent s\'étend et la structure perd sa symétrie thermique : le système achève sa transition extratropicale, passant d\'une machine alimentée par la chaleur latente tropicale à une dépression alimentée par le contraste frontal.'
            }
          ],
          sources: [
            { title: 'An Introduction to Weather and Climate (De Anza College, manuel ouvert) — 7.3 Three-Cell Model : cellules de Hadley, Ferrel et polaire, ceintures de vents et centres semi-permanents', url: 'https://geo.libretexts.org/Courses/De_Anza_College/An_Introduction_to_Weather_and_Climate/07%3A_General_Circulation/7.03%3A_Three-Cell_Model' },
            { title: 'An Introduction to Weather and Climate (De Anza College) — 7.1 Differential Heating : déséquilibre radiatif entre équateur et pôles', url: 'https://geo.libretexts.org/Courses/De_Anza_College/An_Introduction_to_Weather_and_Climate/07%3A_General_Circulation/7.01%3A_Differential_Heating' },
            { title: 'Roland Stull, Practical Meteorology (manuel ouvert) — 11.7 Explaining the General Circulation : limite de la cellule de Hadley, jets et transport de chaleur', url: 'https://geo.libretexts.org/Bookshelves/Meteorology_and_Climate_Science/Practical_Meteorology_(Stull)/11%3A_General_Circulation/11.7%3A_Explaining_the_General_Circulation' },
            { title: 'Atmospheric Processes and Phenomena (University of Hawaiʻi, manuel ouvert) — 11 General Circulation', url: 'https://pressbooks-dev.oer.hawaii.edu/atmo/chapter/chapter-11-general-circulation/' }
          ]
        }
      } // FIN CHAPITRE cellules-de-circulation
      ,
      {
        id: 'jets-streams-ondes-rossby',
        title: 'Jets-streams, ondes de Rossby et vortex polaire',
        field: 'Climatologie dynamique · intermédiaire',
        summary: 'Les rubans de vent rapide de la haute troposphère : d\'où ils viennent, comment ils ondulent et pourquoi ils bloquent le temps.',
        lesson: {
          sections: [
            'Là où s\'achève la cellule de Hadley, vers 30° de latitude, le vent d\'altitude forme un ruban rapide et étroit, le courant-jet subtropical, dont le cœur se situe vers 12 km, à la tropopause. Plus au nord, un second ruban, le courant-jet polaire, suit le front polaire, la frontière sinueuse entre l\'air polaire et l\'air subtropical. Les deux soufflent d\'ouest en est.',
            'Le jet n\'est pas un objet posé dans le ciel : il résulte du contraste thermique. Dans l\'atmosphère, le vent géostrophique change avec l\'altitude proportionnellement au gradient horizontal de température (relation du vent thermique). Un contraste nord-sud de température fort implique donc un cisaillement vertical fort, donc un vent rapide en altitude. C\'est pourquoi le jet polaire est le plus intense en hiver, quand l\'air arctique se refroidit alors que les tropiques changent peu.',
            'À ces rubans se superposent des ondulations de grande échelle, les ondes de Rossby (ou ondes planétaires), qui se propagent d\'ouest en est en dessinant des crêtes et des thalwegs. Ces sinuosités ne sont pas décoratives : en amont d\'un thalweg, l\'air polaire est poussé vers le sud, en aval l\'air subtropical est advecté vers le nord. Ce sont elles, et non la cellule de Ferrel, qui portent l\'essentiel du transport méridien de chaleur et de moment cinétique aux latitudes moyennes.',
            'Chaque onde possède sa propre vitesse de phase, qui dépend de sa longueur d\'onde. Les ondes courtes filent vers l\'est, portées par le flux d\'ouest ; les ondes très longues progressent lentement, s\'arrêtent ou reculent. Une onde dont la vitesse de phase s\'annule devient stationnaire : si une crête se referme en anticyclone à haute latitude, le flux devient franchement méridien et le temps se fige pendant des jours ou des semaines. C\'est un blocage : sécheresse et chaleur durable d\'un côté, froid persistant de l\'autre.',
            'Au-dessus du pôle, en hiver, la stratosphère abrite un vaste tourbillon cyclonique, le vortex polaire. Lorsqu\'une onde planétaire y injecte de la chaleur et le déforme, le vortex s\'étire et se décale : de l\'air stratosphérique très froid peut alors être advecté vers 50° de latitude, tandis que le jet d\'altitude se déplace vers le sud. En surface, cela se traduit par des épisodes de froid intense et durable sur l\'Amérique du Nord et l\'Eurasie.',
            'Les latitudes moyennes vivent donc sous la dictature des ondes : le climat moyen y est stable, mais le temps y est dominé par les thalwegs, les crêtes, les dépressions et les blocages, tous liés à la position et à l\'amplitude du jet. Suivre le jet, c\'est lire la carte des échanges nord-sud.'
          ],
          formula: {
            label: 'RELATION DU VENT THERMIQUE',
            text: '∂u_g/∂z = − (g / fT) × ∂T/∂y  :  fort contraste de température ⇒ fort cisaillement vertical ⇒ jet rapide en altitude',
            mathML: 'thermal-wind'
          },
          equationDetails: [
            {
              title: 'La relation du vent thermique',
              formula: '∂u_g/∂z = − (g / (f · T)) × ∂T/∂y',
              mathML: 'thermal-wind',
              explanation: 'En combinant l\'équilibre hydrostatique (la pression décroît avec l\'altitude) et l\'équilibre géostrophique (le vent suit les isobares), on obtient un résultat remarquable : le cisaillement vertical du vent est proportionnel au gradient horizontal de température. Là où il fait froid au nord et chaud au sud, le vent d\'ouest doit donc se renforcer avec l\'altitude.',
              parameters: 'g = 9,81 m·s⁻² ; f = paramètre de Coriolis en s⁻¹ ; T la température moyenne de la couche en kelvins ; ∂T/∂y le gradient de température vers le nord en K·m⁻¹ ; z l\'altitude en mètres.',
              example: 'Exemple : en hiver, 20 K d\'écart sur 2000 km donnent ∂T/∂y = 10⁻⁵ K·m⁻¹. À 45° de latitude avec T = 250 K : ∂u/∂z = 9,81 × 10⁻⁵ / (1,03 × 10⁻⁴ × 250) ≈ 3,8 × 10⁻³ s⁻¹, soit environ 38 m·s⁻¹ gagnés sur 10 km d\'altitude.',
              result: 'Le jet est bien un enfant du contraste thermique : c\'est la même physique qui fixe les alizés en surface et le courant-jet à 12 km.'
            },
            {
              title: 'Vitesse de phase des ondes de Rossby',
              formula: 'c = U − β / k²   avec   β = 2Ω cos φ / a ≈ 1,6 × 10⁻¹¹ m⁻¹·s⁻¹ à 45°',
              explanation: 'Une onde de Rossby avance par rapport au sol à une vitesse qui dépend de sa longueur d\'onde : les ondes courtes (k grand) voyagent presque à la vitesse U du flux qui les porte, tandis que les ondes très longues (k petit) sont retenues par l\'effet β et peuvent devenir stationnaires ou rétrograder. β mesure la variation du paramètre de Coriolis avec la latitude.',
              parameters: 'c vitesse de phase vers l\'est en m·s⁻¹ ; U vent zonal moyen en m·s⁻¹ ; k = 2π/λ le nombre d\'onde en m⁻¹ ; Ω = 7,29 × 10⁻⁵ s⁻¹ ; a = 6,371 × 10⁶ m, rayon terrestre.',
              example: 'Exemple : à 45°, β = 1,6 × 10⁻¹¹ m⁻¹·s⁻¹. Pour U = 15 m·s⁻¹, c s\'annule quand k² = β/U = 1,1 × 10⁻¹² m⁻², soit λ = 2π/k ≈ 6000 km : trois à cinq grandeurs d\'onde suffisent à faire le tour du globe, ce qui correspond aux configurations observées.',
              result: 'Les ondes de longueur voisine de 6000 km sont celles qui deviennent stationnaires : ce sont elles qui produisent les blocages et les vagues de chaleur ou de froid durables.'
            },
            {
              title: 'Le transport de chaleur par les tourbillons',
              formula: 'F_chaleur = ρ · c_p · ⟨v′T′⟩',
              explanation: 'Si l\'on moyenne le mouvement sur un cercle de latitude, la composante méridienne moyenne est faible. La chaleur est en réalité transportée par les corrélations entre anomalies : quand le vent (v′) souffle vers le pôle, l\'air est souvent plus chaud (T′ > 0), et ces couplages, accumulés le long d\'un cercle de latitude, portent le flux. Les tourbillons — thalwegs, crêtes, dépressions — font donc l\'essentiel du travail, ce qui explique l\'échec des modèles purement « cellulaires ».',
              parameters: 'ρ ≈ 1,2 kg·m⁻³ ; c_p = 1004 J·kg⁻¹·K⁻¹, chaleur massique de l\'air ; v′ et T′ les écarts instantanés à la moyenne zonale ; ⟨ ⟩ la moyenne sur un cercle de latitude.',
              example: 'Exemple : un thalweg typique associe une anomalie de +5 m·s⁻¹ vers le nord à +3 K. Localement, ρ·c_p·v′T′ = 1,2 × 1004 × 15 ≈ 1,8 × 10⁴ W·m⁻², valeurs du même ordre que celles mesurées dans les régions de fort gradient.',
              result: 'Le climat des latitudes moyennes est commandé par les tourbillons ; toute modification de leur activité change le transport de chaleur vers les pôles.'
            }
          ],
          example: {
            statement: 'En hiver, le contraste entre 30° et 60° de latitude atteint 30 K sur 3000 km. En déduire le cisaillement vertical du vent par la relation du vent thermique, puis l\'ordre de grandeur du jet à 10 km.',
            calculation: 'Gradient : ∂T/∂y = 30 K / 3 × 10⁶ m = 10⁻⁵ K·m⁻¹. Cisaillement : ∂u/∂z = 9,81 × 10⁻⁵ / (1,03 × 10⁻⁴ × 250) ≈ 3,8 × 10⁻³ s⁻¹. Intégré sur 10 000 m, cela donne Δu ≈ 38 m·s⁻¹ au-dessus du vent de surface.',
            answer: 'Un jet de l\'ordre de 35 à 40 m·s⁻¹, nul en surface : c\'est la structure verticale observée. Le même raisonnement avec des contrastes plus serrés (jusqu\'à 50 K sur 2000 km lors des vagues de froid) conduit à des jets de 60 à 80 m·s⁻¹.'
          },
          exercise: {
            question: 'Les ondes de Rossby se déplacent-elles toutes à la même vitesse ? Comment cela explique-t-il les blocages ?',
            answer: 'Non : la vitesse de phase c = U − β/k² dépend de la longueur d\'onde. Les ondes courtes défilent vers l\'est, les ondes très longues ralentissent, s\'arrêtent (c = 0 pour λ ≈ 6000 km aux latitudes moyennes) ou reculent. Une onde stationnaire ne transporte plus les thalwegs et les crêtes : les conditions météorologiques restent les mêmes au même endroit pendant des jours, avec renforcement de la sécheresse, de la chaleur ou du froid.'
          },
          exercises: [
            {
              question: 'Pourquoi le courant-jet polaire est-il plus rapide en hiver ?',
              answer: 'Parce que le gradient méridien de température est maximal : le pôle ne reçoit presque pas de rayonnement solaire tandis que les tropiques changent peu. La relation du vent thermique transforme ce contraste accru en cisaillement vertical plus fort, donc en jet plus rapide.'
            },
            {
              question: 'Que se passe-t-il, au sol, quand le vortex polaire se déforme ?',
              answer: 'L\'air stratosphérique froid est advecté vers les latitudes moyennes et le jet d\'altitude se déplace vers le sud. En surface, on observe des épisodes de froid durable, souvent accompagnés de neige, sur l\'Amérique du Nord et l\'Eurasie ; inversement, un vortex concentré et stable s\'accompagne d\'hivers doux à ces latitudes.'
            },
            {
              question: 'Le transport de chaleur vers les pôles est-il assuré par la cellule de Ferrel ?',
              answer: 'Non. C\'est une circulation faible et indirecte. Le transport est porté par les tourbillons des ondes de Rossby, mesuré par la corrélation ⟨v′T′⟩ : ce sont les thalwegs et crêtes, donc le temps qu\'il fait chaque jour, qui font passer la chaleur vers le pôle.'
            }
          ],
          sources: [
            { title: 'An Introduction to Weather and Climate (De Anza College, manuel ouvert) — 7.4 Jet streams : classes de jets et lien avec le contraste thermique', url: 'https://geo.libretexts.org/Courses/De_Anza_College/An_Introduction_to_Weather_and_Climate/07%3A_General_Circulation/7.04%3A_Jet_streams' },
            { title: 'NOAA National Weather Service — JetStream, Global Circulations : jet streams, ondes planétaires et vortex polaire', url: 'https://www.noaa.gov/jetstream/global/jet-stream' },
            { title: 'NOAA Climate.gov — Understanding the Arctic polar vortex', url: 'https://www.climate.gov/news-features/understanding-climate/understanding-arctic-polar-vortex' },
            { title: 'Atmospheric Processes and Phenomena (University of Hawaiʻi, manuel ouvert) — 10.6 Jet Streams', url: 'https://geo.libretexts.org/Bookshelves/Meteorology_and_Climate_Science/Atmospheric_Processes_and_Phenomena/10%3A_General_Circulation/10.06%3A_Jet_streams' }
          ]
        }
      } // FIN CHAPITRE jets-streams-ondes-rossby
      ,
      {
        id: 'moussons-et-zcit',
        title: 'Moussons et migration de la ZCIT',
        field: 'Climatologie dynamique · applications',
        summary: 'Pourquoi le vent et la pluie se renversent chaque année au-dessus de l\'Asie du Sud, et comment ce rythme dépend de la Terre comme de l\'océan.',
        lesson: {
          sections: [
            'La circulation générale décrite jusqu\'ici suppose une surface uniforme. Or la Terre est hétérogène : la capacité thermique d\'un continent est des milliers de fois plus faible que celle de l\'océan, et l\'air qui le surmonte réagit donc bien plus vite au rayonnement solaire. En été, l\'air au-dessus de la terre s\'échauffe, se dilate et s\'élève ; en hiver, refroidi, il devient dense et descend. Ce contraste saisonnier impose aux vents de basse altitude un renversement complet.',
            'De ce renversement naît la mousson : le mot vient de l\'arabe mawsim, « saison ». En été, l\'air humide de l\'océan Indien est aspiré vers le continent asiatique, où il s\'élève et déverse des pluies ; en hiver, l\'anticyclone continental froid chasse l\'air vers l\'océan, apportant un temps sec. Le même mécanisme fonctionne, plus modestement, sur le Sahel, le nord de l\'Australie, le sud-ouest des États-Unis et le sud de l\'Afrique.',
            'Ce renversement s\'ajoute à la migration saisonnière de la zone de convergence intertropicale. La ZCIT se trouve en moyenne un peu au nord de l\'équateur, parce que l\'hémisphère nord est mieux doté en terres ; elle migre vers 20 à 25° de latitude nord en été et revient vers l\'équateur, voire plus au sud, en hiver. En s\'associant au chauffage du plateau tibétain, qui agit comme une immense plaque chauffante à 4000 m d\'altitude, elle produit une mousson bien plus intense que la seule migration de la ZCIT ne le laisserait attendre.',
            'La mousson est un système couplé : la pluie libère de la chaleur latente, qui entretient le courant ascendant, qui entretient l\'humidité, qui entretient la pluie. D\'où la persistance des périodes dites actives et l\'existence de « ruptures de mousson » — plusieurs jours à deux semaines de sécheresse en pleine saison humide. Ces pulsations sont largement pilotées par une oscillation propre aux tropiques, l\'oscillation de Madden-Julian, qui se propage vers l\'est à une vitesse voisine de 5 m·s⁻¹ et revient tous les 30 à 60 jours.',
            'L\'enjeu est directement humain : la mousson apporte l\'essentiel de l\'eau aux rizières et aux villes de l\'Asie du Sud et du Sud-Est, et son retard, sa faiblesse ou ses excès commandent récoltes, inondations et prix alimentaires. Comprendre la mousson, c\'est comprendre un climat régional dont dépend plus d\'une personne sur cinq, et dont la variabilité est modulée, année après année, par l\'état de l\'océan Pacifique tropical.'
          ],
          formula: {
            label: 'RÉCHAUFFEMENT SAISONNIER D\'UNE COUCHE',
            text: 'ΔT = Q / (ρ · c_p · H)  :  à énergie égale, plus la capacité thermique ρ·c_p·H est faible, plus le réchauffement est grand',
            mathML: 'layer-heating'
          },
          equationDetails: [
            {
              title: 'Réchauffement d\'une couche : continents contre océan',
              formula: 'ΔT = Q / (ρ · c_p · H)   avec   ρ·c_p(air) ≈ 1200 J·m⁻³·K⁻¹   et   ρ·c_p(eau) ≈ 4,18 × 10⁶ J·m⁻³·K⁻¹',
              mathML: 'layer-heating',
              explanation: 'La variation de température d\'une couche de fluide d\'épaisseur H soumise à un apport d\'énergie Q par unité de surface est égale à l\'énergie divisée par sa capacité thermique volumique. Comme l\'eau a une capacité thermique volumique environ 3400 fois supérieure à celle de l\'air, et comme la couche océanique brassée est plus épaisse que la couche d\'air échauffée, le continent se réchauffe en quelques semaines de ce dont l\'océan a besoin pendant des mois.',
              parameters: 'Q en J·m⁻², énergie accumulée ; ρ la masse volumique (1,2 kg·m⁻³ pour l\'air, 1025 kg·m⁻³ pour l\'eau de mer) ; c_p la chaleur massique (1004 et 3990 J·kg⁻¹·K⁻¹) ; H l\'épaisseur de la couche brassée en mètres.',
              example: 'Exemple : il faut 1,2 × 10⁶ × 5 = 6 × 10⁶ J·m⁻² pour réchauffer de 5 K une colonne d\'air de 1000 m, mais 2,09 × 10⁸ × 5 ≈ 1,04 × 10⁹ J·m⁻² (soit 174 fois plus) pour réchauffer de 5 K une couche océanique de 50 m.',
              result: 'Le contraste terre-mer se creuse à l\'échelle de la saison : c\'est le moteur de la mousson, et l\'explication de l\'inertie thermique océanique qui décalera plus loin les saisons du climat futur.'
            },
            {
              title: 'La chaleur latente des pluies alimente la circulation',
              formula: 'Énergie libérée = L_v × P   avec   L_v = 2,5 × 10⁶ J·kg⁻¹ de pluie',
              explanation: 'Chaque millimètre de pluie correspond à 1 kg d\'eau condensée par mètre carré, et chaque kilogramme condensé libère 2,5 MJ. Sur une saison, la chaleur latente libérée par les pluies de mousson représente une source d\'énergie considérable, capable d\'entretenir la circulation qui a apporté l\'humidité : le système se nourrit de lui-même.',
              parameters: 'L_v chaleur latente de condensation de l\'eau à 20 °C, ≈ 2,45 à 2,5 × 10⁶ J·kg⁻¹ ; P hauteur de précipitations en mm (1 mm = 1 kg·m⁻²).',
              example: 'Exemple : une saison apportant 1000 mm libère 2,5 × 10⁹ J·m⁻². Étalé sur les 120 jours de la saison (environ 10⁷ s), cela équivaut à un chauffage moyen de l\'ordre de 250 W·m⁻², comparable au rayonnement solaire moyen absorbé par le système terrestre.',
              result: 'La pluie n\'est pas un effet passif de la circulation : elle en est une source d\'énergie à part entière.'
            },
            {
              title: 'L\'oscillation de Madden-Julian : une horloge de 30 à 60 jours',
              formula: 'D = c × t   avec   c ≈ 5 m·s⁻¹  ⇒  environ 430 km par jour',
              explanation: 'L\'oscillation de Madden-Julian est une anomalie couplée océan-atmosphère de convection tropicale qui se propage vers l\'est le long de l\'équateur. Ce n\'est ni une onde de Rossby des latitudes moyennes ni une marée : elle se déplace à environ 5 m·s⁻¹, si bien qu\'une phase met plusieurs semaines à traverser les bassins océaniques. Elle module la convection des tropiques, donc les pluies de mousson et l\'activité cyclonique.',
              parameters: 'c vitesse de propagation vers l\'est (≈ 5 m·s⁻¹) ; t durée en secondes ; D distance parcourue en mètres.',
              example: 'Exemple : à 430 km par jour, une phase active met environ 45 jours à franchir les 19 000 km séparant l\'Afrique orientale du Pacifique central — cohérent avec la période annoncée de 30 à 60 jours.',
              result: 'La MJO offre une prévisibilité intrassaisonnière : elle permet d\'anticiper de une à trois semaines les périodes sèches et actives d\'une saison humide.'
            }
          ],
          example: {
            statement: 'Le rayonnement solaire apporte, en moyenne, 250 W·m⁻² pendant les deux mois qui précèdent la mousson. Comparer l\'échauffement d\'une colonne d\'air continentale de 1000 m et celui d\'une couche océanique brassée de 50 m.',
            calculation: 'Énergie accumulée : Q = 250 W·m⁻² × 60 × 86 400 s ≈ 1,3 × 10⁹ J·m⁻². Capacité thermique de la couche d\'air : ρ·c_p·H = 1,2 × 1004 × 1000 ≈ 1,2 × 10⁶ J·m⁻²·K⁻¹, donc ΔT ≈ 1,3 × 10⁹ / 1,2 × 10⁶ ≈ 1080 K si tout restait dans la couche — estimation impossible, car l\'air chauffé s\'élève et se mélange : la limite physique est atteinte avant. Capacité thermique de la couche d\'eau : ρ·c_p·H = 1025 × 3990 × 50 ≈ 2,0 × 10⁸ J·m⁻²·K⁻¹, donc ΔT ≈ 6,5 K.',
            answer: 'Le continent, incapable de stocker cette énergie, s\'en débarrasse en chauffant une couche mince et en la faisant monter : la pression baisse fortement. L\'océan, lui, ne s\'échauffe que de quelques kelvins. Ce contraste — un continent brûlant sous une mer presque insensible — crée l\'aspiration de la mousson.'
          },
          exercise: {
            question: 'Pourquoi la mousson indienne commence-t-elle en juin sur la côte de Malabar avant de gagner le nord de l\'Inde en juillet ?',
            answer: 'Le flux d\'ouest humide issu de la mer d\'Arabie aborde d\'abord les Ghâts occidentaux, où le relief le force à s\'élever : les pluies y sont dès juin torrentielles. Le nord du pays ne reçoit ses pluies qu\'ensuite, lorsque le réchauffement du plateau tibétain et de la plaine indo-gangétique a creusé la dépression de mousson et que l\'humidité peut progresser vers l\'intérieur : la progression de la mousson est donc un phénomène à la fois thermique et orographique.'
          },
          exercises: [
            {
              question: 'Pourquoi la mousson est-elle un phénomène saisonnier, alors que la brise de mer se renverse chaque jour ?',
              answer: 'C\'est la même physique à deux échelles de temps : le renversement du vent suit le renversement du contraste thermique. Une brise se contente de quelques kilomètres de sable ou de roche chauffés en une journée ; la mousson exige que les océans et les continents aient accumulé ou perdu assez de chaleur pour inverser un gradient à l\'échelle d\'un millier de kilomètres, ce qui demande des semaines.'
            },
            {
              question: 'La migration de la ZCIT suffit-elle à expliquer la mousson asiatique ?',
              answer: 'Non. La ZCIT ne migre que d\'une vingtaine de degrés, or la mousson est bien plus vigoureuse que ce que cette migration seule produirait. S\'y ajoutent le chauffage du plateau tibétain, qui installe une dépression thermique durable, et l\'asymétrie terre-mer, qui entretient la circulation et sa chaleur latente.'
            },
            {
              question: 'À quoi sert de suivre l\'oscillation de Madden-Julian pour l\'agriculture ?',
              answer: 'Elle procure une prévisibilité de une à trois semaines : on peut savoir si une phase active (pluies abondantes) ou supprimée (rupture de mousson) traverse les tropiques, et donc ajuster les semis, l\'irrigation ou la récolte. C\'est la principale source de compétence des prévisions d\'échéance étendue dans les régions tropicales.'
            }
          ],
          sources: [
            { title: 'The Physical Environment (Ritter, manuel ouvert) — 6.6 Regional Scale Winds : the Monsoon, mécanisme terre-mer et renversement saisonnier', url: 'https://geo.libretexts.org/Bookshelves/Geography_(Physical)/The_Physical_Environment_(Ritter)/06%3A_Atmospheric_and_Ocean_Circulation/6.06%3A_Regional_Scale_Winds_-_The_Monsoon' },
            { title: 'Fundamentals of Climate Change (LibreTexts) — 1.13 Shifts of Rain : migration saisonnière de la ZCIT et déplacement des pluies', url: 'https://geo.libretexts.org/Bookshelves/Meteorology_and_Climate_Science/Fundamentals_of_Climate_Change/01%3A_Chapters/1.13%3A_Shifts_of_Rain' },
            { title: 'NOAA Physical Sciences Laboratory — Madden-Julian Oscillation Primer : propagation vers l\'est à ~5 m·s⁻¹ et prévisibilité intrassaisonnière', url: 'https://psl.noaa.gov/mjo/MJOprimer/' },
            { title: 'NOAA Climate Prediction Center — Tropical Intraseasonal Activity, questions fréquentes : périodes de 30 à 60 jours des phases MJO', url: 'https://cpc.ncep.noaa.gov/products/intraseasonal/intraseasonal_faq.html' }
          ]
        }
      } // FIN CHAPITRE moussons-et-zcit
    ]
  },
  {
    id: 'oceans-et-variabilite',
    title: 'L\'océan et la variabilité du climat',
    note: 'Le grand réservoir : circulation thermohaline, remontées d\'eaux froides, El Niño et les autres oscillations qui font varier le climat d\'une année à l\'autre.',
    chapters: [
      {
        id: 'ocean-moteur-thermique',
        title: 'L\'océan, moteur thermique et mémoire du climat',
        field: 'Climatologie · océan-atmosphère',
        summary: 'Pourquoi la mer adoucit les côtes, pourquoi elle plonge aux hautes latitudes, et ce que sa mémoire thermique implique pour le climat.',
        lesson: {
          sections: [
            'L\'océan couvre 71 % de la surface du globe. Sa couche superficielle brassée par le vent et les vagues, épaisse de 50 à 100 m, emmagasine une chaleur considérable : à capacité thermique égale, il faudrait plus de trois mille mètres d\'air pour stocker l\'énergie contenue dans un mètre d\'eau. C\'est pourquoi la mer est la mémoire du climat : elle enregistre et restitue l\'énergie à l\'échelle des saisons et des décennies.',
            'La circulation de surface est entraînée par les vents, donc par la structure des alizés et des vents d\'ouest : de grands tourbillons, les gyres subtropicales, tournent dans le sens horaire dans l\'Atlantique et le Pacifique nord, antihoraire dans les hémisphères sud. S\'y ajoute une circulation profonde, dite thermohaline, dictée par la densité : aux hautes latitudes, l\'eau refroidie et salée par la formation de glace devient assez dense pour plonger, puis se répand au fond des bassins et réapparaît lentement en surface après un parcours millénaire.',
            'Cette circulation verticale a une conséquence visible : les remontées d\'eaux froides, ou upwellings. Le long des côtes ouest des continents — Pérou, Californie, Maroc, Namibie, Somalie — les vents parallèles au littoral chassent l\'eau de surface vers le large et forcent l\'eau profonde à remonter. Froide, elle refroidit l\'air côtier et fabrique des brouillards, tandis que les déserts s\'avancent jusqu\'à la mer ; riche en sels nutritifs, elle nourrit un plancton qui alimente quelques-unes des pêcheries les plus productives du monde.',
            'À plus grande échelle, le renversement atlantique (AMOC) transporte vers le nord l\'eau chaude de surface, la refroidit aux hautes latitudes, la fait plonger puis la renvoie vers le sud en profondeur. À 26,5° N, ce transport de masse est de l\'ordre de 17 millions de mètres cubes par seconde, et il déplace vers le nord environ un pétawatt de puissance thermique. Cette chaleur explique en partie la douceur de l\'hiver de l\'Europe de l\'Ouest et l\'absence de glace de mer au nord de la Norvège, à des latitudes où le Québec et le Labrador connaissent -30 °C.',
            'Le stockage océanique se paie : sur le réchauffement planétaire récent, l\'océan a absorbé plus de 90 % de l\'énergie excédentaire du système Terre, et il éponge chaque année environ un quart du dioxyde de carbone émis par l\'humanité, au prix d\'une acidification de ses eaux. Parce que sa capacité thermique est immense, l\'océan freine le réchauffement de l\'atmosphère autant qu\'il garantit sa persistance : renoncer aux émissions ne rendra pas la chaleur déjà stockée, dont la restitution s\'étalera sur des siècles.',
            'Faire du climat, c\'est donc aussi faire de l\'océanographie : les grands écarts d\'une année à l\'autre, les épisodes de sécheresse et de pluie, les canicules marines et les saisons des ouragans s\'expliquent par l\'état de la mer bien plus que par l\'état de l\'atmosphère seule.'
          ],
          formula: {
            label: 'TRANSPORT DE CHALEUR PAR LA CIRCULATION',
            text: 'F = ρ · c_p · Q · ΔT  avec  Q ≈ 17 × 10⁶ m³·s⁻¹ et  ΔT ≈ 15 K  ⇒  F ≈ 1 PW pour l\'AMOC',
            mathML: 'amoc-heat-transport'
          },
          equationDetails: [
            {
              title: 'Combien de chaleur transporte l\'AMOC ?',
              formula: 'F = ρ · c_p · Q · ΔT',
              mathML: 'amoc-heat-transport',
              explanation: 'Un courant qui déplace un débit volumique Q d\'eau, refroidie de ΔT en allant vers le nord, libère une puissance thermique égale au produit de sa capacité thermique volumique, de son débit et de la chute de température. C\'est le calcul type de toute circulation océanique ou atmosphérique.',
              parameters: 'ρ · c_p = 4,1 × 10⁶ J·m⁻³·K⁻¹ pour l\'eau de mer (ρ = 1025 kg·m⁻³, c_p = 3990 J·kg⁻¹·K⁻¹) ; Q le débit en m³·s⁻¹ ; ΔT la chute de température entre l\'équateur et les hautes latitudes.',
              example: 'Exemple : Q = 17 × 10⁶ m³·s⁻¹ et ΔT ≈ 15 K donnent F = 4,1 × 10⁶ × 17 × 10⁶ × 15 ≈ 1,0 × 10¹⁵ W, soit un pétawatt.',
              result: 'Un pétawatt, à comparer aux 3 TW d\'électricité produits dans le monde : la circulation océanique déplace trois cents fois plus d\'énergie que toute notre économie électrique.'
            },
            {
              title: 'La spirale d\'Ekman et les remontées d\'eau',
              formula: 'Transport d\'Ekman ⊥ au vent, dévié de 90° à droite dans l\'hémisphère nord (vers le large le long des côtes ouest)',
              explanation: 'Comme la force de Coriolis croît avec la profondeur du fait de la diminution du frottement, le transport intégré de la couche superficielle n\'est pas parallèle au vent mais perpendiculaire : vers la droite du vent dans l\'hémisphère nord, vers la gauche dans le sud. Le long d\'une côte ouest, un vent parallèle au littoral provoque donc une divergence : il faut remplacer l\'eau qui s\'en va, et c\'est l\'eau profonde qui remonte.',
              parameters: 'Vent de surface en m·s⁻¹ ; transport d\'Ekman en m²·s⁻¹ (intégré sur la verticale) ; vitesse verticale de remontée typique de l\'ordre de 10⁻⁵ m·s⁻¹, soit environ 1 m par jour.',
              example: 'Exemple : les alizés soufflant vers le nord le long des côtes du Pérou poussent l\'eau de surface vers l\'ouest, vers le large. Le déficit d\'eau est comblé par une remontée d\'eau froide venue de 50 à 200 m de profondeur, à une vitesse verticale de l\'ordre de 1 mètre par jour : suffisant pour maintenir une pêcherie et un désert côtier.',
              result: 'Une côte froide, brumeuse et désertique bordant une mer très poissonneuse : c\'est la signature de l\'upwelling, du Pérou à la Namibie.'
            },
            {
              title: 'L\'inertie thermique de l\'océan',
              formula: 'Q = ρ · c_p · H · ΔT   (H = épaisseur de la couche)',
              explanation: 'La quantité d\'énergie nécessaire pour élever la température d\'une couche d\'eau d\'une épaisseur H et d\'une variation ΔT sert à mesurer l\'ampleur du frein que l\'océan oppose au réchauffement. Comparée au déséquilibre radiatif de la Terre, elle montre que la chaleur déjà accumulée mettra des décennies à être restituée.',
              parameters: 'ρ · c_p = 4,1 × 10⁶ J·m⁻³·K⁻¹ ; H épaisseur brassée (100 m) ; ΔT variation de température en kelvins ; surface océanique 3,6 × 10¹⁴ m².',
              example: 'Exemple : réchauffer de 1 K la couche de 100 m sur toute la surface des océans demande 4,1 × 10⁶ × 100 × 3,6 × 10¹⁴ ≈ 1,5 × 10²³ J. Le déséquilibre radiatif actuel (environ 1 W·m⁻²) accumule 1 × 3,6 × 10¹⁴ × 3,15 × 10⁷ ≈ 1,1 × 10²² J par an.',
              result: 'Il faudrait environ 13 années entières de déséquilibre radiatif pour réchauffer de 1 K seulement les 100 premiers mètres de l\'océan : voilà pourquoi le réchauffement observé est presque irréversible à l\'échelle humaine.'
            }
          ],
          example: {
            statement: 'Estimer l\'énergie nécessaire pour réchauffer de 1 K la couche océanique de 0 à 100 m sur toute la planète, et la comparer à l\'énergie accumulée chaque année par le déséquilibre radiatif de la Terre (environ 1 W·m⁻²).',
            calculation: 'Surface des océans : 3,6 × 10¹⁴ m². Capacité thermique de la couche : ρ·c_p·H = 4,1 × 10⁶ × 100 = 4,1 × 10⁸ J·m⁻²·K⁻¹, soit 4,1 × 10⁸ J·m⁻² pour 1 K. Sur toute la surface : 4,1 × 10⁸ × 3,6 × 10¹⁴ ≈ 1,5 × 10²³ J. Énergie annuelle du déséquilibre radiatif : 1 W·m⁻² × 3,6 × 10¹⁴ m² × 3,15 × 10⁷ s ≈ 1,1 × 10²² J.',
            answer: 'Le rapport vaut environ 13 : il faudrait treize ans de déséquilibre radiatif total, sans aucune perte, pour élever de 1 K la température des 100 premiers mètres de l\'océan. Cette inertie explique pourquoi la chaleur déjà absorbée continuera de réchauffer l\'atmosphère longtemps après l\'arrêt des émissions.'
          },
          exercise: {
            question: 'Pourquoi l\'hiver est-il doux à Brest, en Bretagne, et glacial à Goose Bay, au Labrador, alors que les deux villes sont presque à la même latitude ?',
            answer: 'La circulation océanique de l\'Atlantique nord transporte vers le nord de l\'eau chaude qui cède sa chaleur à l\'atmosphère, ce qui, combiné aux vents d\'ouest, adoucit l\'Europe de l\'Ouest et maintient la mer libre de glace au nord de la Norvège. Sur la côte orientale du Canada, le même océan apporte au contraire des eaux froides venues du nord, et les vents dominants viennent du continent refroidi : la latitude n\'explique donc qu\'une partie du climat.'
          },
          exercises: [
            {
              question: 'Qu\'est-ce qui rend une eau de mer assez dense pour plonger jusqu\'au fond ?',
              answer: 'Le froid et le sel. Aux hautes latitudes, la mer se refroidit jusqu\'à 0 à 2 °C, et la formation de la glace de mer rejette le sel dans l\'eau liquide, ce qui augmente sa salinité. Froide et salée, l\'eau devient plus dense que l\'eau environnante et plonge, amorçant la branche descendante de la circulation thermohaline.'
            },
            {
              question: 'Comment expliquer qu\'un désert borde une des mers les plus poissonneuses du monde, le long du Pérou et de la Namibie ?',
              answer: 'Les deux effets viennent du même mécanisme, la remontée d\'eau profonde. Froide, elle empêche la formation de nuages de pluie : d\'où un désert côtier brumeux. Riche en sels nutritifs venus des profondeurs, elle fertilise le plancton, donc les poissons : d\'où une pêcherie exceptionnelle. Un désert et une pêche abondante ne sont pas contradictoires mais solidaires.'
            },
            {
              question: 'Pourquoi les mesures de contenu thermique de l\'océan sont-elles un meilleur indicateur du réchauffement que les températures de l\'air ?',
              answer: 'Parce que l\'océan possède une capacité thermique énorme et absorbe plus de 90 % de l\'énergie excédentaire : il intègre le déséquilibre sur des années et son signal est bien moins bruité que celui de l\'atmosphère, dont la masse et la capacité thermique sont faibles. La hausse du contenu thermique océanique est donc la mesure la plus directe de l\'accumulation d\'énergie par la Terre.'
            }
          ],
          sources: [
            { title: 'NOAA National Ocean Service — What is the Atlantic Meridional Overturning Circulation (AMOC) ?', url: 'https://oceanservice.noaa.gov/facts/amoc.html' },
            { title: 'NOAA National Ocean Service — Upwelling : mécanisme, côtes concernées et conséquences biologiques', url: 'https://oceanservice.noaa.gov/facts/upwelling.html' },
            { title: 'NOAA National Weather Service, JetStream — Ocean Circulations : gyres, courant du Gulf Stream et circulation thermohaline', url: 'https://www.noaa.gov/jetstream/ocean/circulations' },
            { title: 'GIEC, AR6 Groupe de travail I (2021) — Résumé pour décideurs : absorption océanique de l\'énergie excédentaire et du carbone', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/' }
          ]
        }
      } // FIN CHAPITRE ocean-moteur-thermique
      ,
      {
        id: 'enso-et-variabilite-naturelle',
        title: 'ENSO et variabilité naturelle du climat',
        field: 'Climatologie · océan-atmosphère',
        summary: 'El Niño, La Niña, oscillation nord-atlantique, volcans : pourquoi le climat vacille autour de sa moyenne sans changer de tendance.',
        lesson: {
          sections: [
            'Le climat n\'est pas une constante : il vacille. Une partie de ces vacillements est interne au système couplé océan-atmosphère, et n\'a besoin d\'aucune cause extérieure pour se produire. La plus spectaculaire de ces oscillations est El Niño-Southern Oscillation (ENSO), née dans le Pacifique tropical et capable de modifier le temps sensible sur les cinq continents.',
            'En régime neutre, les alizés soufflent d\'est en ouest et accumulent les eaux chaudes du côté indonésien. La thermocline, surface qui sépare les eaux chaudes de surface des eaux froides profondes, plonge alors vers l\'ouest : profonde près de l\'Indonésie, elle affleure au large du Pérou, où la remontée d\'eau froide entretient une mer très poissonneuse. La convection se concentre au-dessus de la zone la plus chaude, à l\'ouest, et la circulation de Walker — branche montante au-dessus de l\'Indonésie, branche descendante sur le Pacifique oriental — organise le climat tropical.',
            'Lors d\'un El Niño, les alizés faiblissent, s\'arrêtent ou se renversent. Les eaux chaudes de l\'ouest, retenues jusque-là, s\'étalent vers l\'est, la thermocline s\'aplatit, et l\'upwelling péruvien, alimenté non plus par l\'eau froide profonde mais par une eau de surface appauvrie, s\'effondre : les anchois disparaissent, et des pluies torrentielles s\'abattent sur le Pérou et l\'Équateur tandis que l\'Indonésie et l\'Australie subissent sécheresse et incendies. En phase La Niña, le mécanisme s\'inverse et s\'accentue : alizés puissants, eau très froide au Pérou, pluies abondantes en Australie.',
            'Le basculement est entretenu par une rétroaction, dite de Bjerknes : un vent plus fort accroît la divergence océanique, donc le refroidissement de l\'est, ce qui renforce le contraste zonal de température, qui à son tour alimente le vent. En changeant le signe de l\'anomalie, la boucle devient celle d\'El Niño. Ce couplage explique la persistance des épisodes — plusieurs mois à plus d\'un an — et leur irrégularité, avec un cycle de deux à sept ans plutôt qu\'un rythme régulier.',
            'D\'autres oscillations font varier le climat, à d\'autres échelles. L\'oscillation nord-atlantique (NAO) décrit le balancement de la différence de pression entre l\'Islande et les Açores : en phase positive, les vents d\'ouest balaient l\'Europe, apportant douceur et pluie au nord et sécheresse au sud ; en phase négative, les descentes froides atteignent l\'Europe centrale et la Méditerranée reçoit les pluies. Le dipôle de l\'océan Indien, l\'oscillation pacifique décennale et le mode annulaire boréal complètent ce répertoire.',
            'À ces variabilités s\'ajoutent des forçages externes naturels. Les grandes éruptions volcaniques injectent du dioxyde de soufre dans la stratosphère, où il se transforme en aérosols qui réfléchissent le soleil : l\'éruption du Pinatubo, en 1991, a ainsi refroidi la planète de plusieurs dixièmes de degré pendant un à deux ans. Le cycle d\'activité solaire de onze ans, lui, ne fait varier l\'irradiance que d\'environ 0,1 %, ce qui correspond à un effet climatique faible, de l\'ordre du dixième de degré.',
            'Reconnaître ces variations n\'est pas un luxe méthodologique : une année El Niño s\'ajoute au réchauffement de fond et peut produire un record mondial, tandis qu\'une année La Niña le masque temporairement. On ne compare donc des climats qu\'en moyennant sur trente ans, et l\'attribution d\'une tendance exige de dépasser le bruit des oscillations.'
          ],
          formula: {
            label: 'INDICE ONI (OCEANIC NIÑO INDEX)',
            text: 'ONI = anomalie moyenne de température de surface de la mer dans la région Niño-3.4 (5° N–5° S, 120°–170° W) sur 3 mois glissants   |   El Niño si ONI ≥ +0,5 K   |   La Niña si ONI ≤ −0,5 K',
            mathML: 'oni-index'
          },
          equationDetails: [
            {
              title: 'L\'indice ONI et la définition opérationnelle d\'El Niño',
              formula: 'ONI = anomalie de température de surface de la mer moyennée sur 3 mois dans la région Niño-3.4',
              mathML: 'oni-index',
              explanation: 'Pour décrire ENSO, on ne regarde ni tout l\'océan ni un point isolé, mais une région diagnostique, Niño-3.4, comprise entre 5° N et 5° S et entre 120° W et 170° W. On calcule l\'écart à la normale de la température de surface, on en fait une moyenne glissante sur trois mois pour filtrer le passage des ondes et des journées, puis on applique des seuils. Un épisode est dit fort au-delà de ±1,5 K.',
              parameters: 'Région Niño-3.4 : 5° N–5° S, 120° W–170° W. Seuils : ONI ≥ +0,5 K ⇒ El Niño ; ONI ≤ −0,5 K ⇒ La Niña ; anomalie calculée par rapport à une période de référence de trente ans.',
              example: 'Exemple : l\'hiver 1997-1998 a présenté un ONI de l\'ordre de +2,4 K sur trois mois — l\'un des épisodes les plus intenses jamais mesurés, associé à des pluies torrentielles au Pérou et à des incendies de forêt en Indonésie et en Australie.',
              result: 'Un seul nombre, calculé sur une région choisie, sert de vigie mondiale : c\'est pourquoi l\'ONI est publié chaque mois par les services météorologiques.'
            },
            {
              title: 'La rétroaction de Bjerknes : une bascule à deux positions',
              formula: 'vent ↑ ⇒ divergence océanique ↑ ⇒ SST est ↓ ⇒ contraste zonal ↑ ⇒ vent ↑   (le signe s\'inverse pour El Niño)',
              explanation: 'Cette boucle de rétroaction positive explique pourquoi le système ne reste pas dans un état moyen : chaque anomalie renforce le mécanisme qui l\'a produite. Le déséquilibre ne s\'arrête que lorsque les ondes océaniques — ondes de Kelvin vers l\'est, ondes de Rossby vers l\'ouest — rapportent l\'information opposée à travers le bassin, ce qui prend de six mois à deux ans.',
              parameters: 'Anomalies typiques : ONI de ±0,5 K pour un épisode faible, de ±2,5 K pour un épisode majeur ; déplacement de la convection profonde vers l\'est de plusieurs milliers de kilomètres lors des épisodes forts.',
              example: 'Exemple : lors d\'un fort El Niño, la convection profonde quitte l\'Indonésie pour le centre du Pacifique, soit un déplacement vers l\'est de l\'ordre de 3000 km ; les cellules de circulation tropicale se réorganisent et les thalwegs du jet subtropical se déplacent, ce qui reporte sécheresses et pluies sur les latitudes tempérées.',
              result: 'ENSO n\'est ni purement océanique ni purement atmosphérique : c\'est un mode couplé, dont l\'état se maintient par lui-même pendant des mois.'
            },
            {
              title: 'Le refroidissement volcanique : un forçage bref',
              formula: 'Aérosols de sulfate ⇒ albédo ↑ ⇒ forçage négatif (de l\'ordre de −3 W·m⁻² pour le Pinatubo) ⇒ ΔT_surface ≈ 0,3 à 0,5 K pendant 1 à 2 ans',
              explanation: 'Une grande éruption tropicale projette des millions de tonnes de dioxyde de soufre à 20 km d\'altitude. Là, les aérosols ne sont pas lessivés par la pluie et séjournent un à deux ans, renvoyant une partie du rayonnement solaire vers l\'espace. Le refroidissement observé est bref, car les aérosols retombent et la capacité thermique océanique amortit la réponse.',
              parameters: 'Pinatubo (juin 1991) : environ 20 millions de tonnes de SO₂ injectées dans la stratosphère ; forçage radiatif de l\'ordre de −3 W·m⁻² ; durée du signal de un à trois ans.',
              example: 'Exemple : comparé au forçage du CO₂, qui est aujourd\'hui de l\'ordre de +2,7 W·m⁻² et persistant, un forçage volcanique vaut environ −3 W·m⁻² mais s\'éteint en deux ans : il ne peut pas compenser un déséquilibre, seulement le retarder.',
              result: 'Volcans et Soleil modulent le climat à court terme ; ils ne sont pas la cause de la tendance contemporaine, qui est mesurée et attribuée aux émissions de gaz à effet de serre.'
            }
          ],
          example: {
            statement: 'La région Niño-3.4 s\'étend sur 10° de latitude et 50° de longitude. Estimer l\'excès de chaleur contenu dans ses 100 premiers mètres lorsque l\'anomalie atteint +2,5 K, et comparer à l\'énergie que la Terre accumule en un an.',
            calculation: 'Largeur méridienne : 10° × 111 × 10³ m ≈ 1,11 × 10⁶ m. Longueur zonale à l\'équateur : 50 × 111,3 × 10³ ≈ 5,57 × 10⁶ m. Surface : A ≈ 6,2 × 10¹² m². Capacité thermique de la couche : 4,1 × 10⁶ × 100 = 4,1 × 10⁸ J·m⁻²·K⁻¹. Excès de chaleur : Q = 4,1 × 10⁸ × 2,5 × 6,2 × 10¹² ≈ 6,4 × 10²¹ J. Énergie annuelle du déséquilibre radiatif terrestre : environ 1,1 × 10²² J.',
            answer: 'L\'excès de chaleur d\'une seule anomalie de surface, sur 6 millions de kilomètres carrés et 100 m d\'épaisseur, représente près de 60 % de l\'énergie que toute la planète accumule en un an. La variabilité interne remue donc des quantités du même ordre que le forçage radiatif : voilà pourquoi une année El Niño peut battre un record mondial sans que la tendance ait changé.'
          },
          exercise: {
            question: 'Pourquoi le pêcheur d\'anchois du Pérou associe-t-il El Niño à une mauvaise année ?',
            answer: 'Parce que la remontée d\'eau froide et riche en sels nutritifs s\'arrête ou se trouve recouverte par une couche d\'eau chaude appauvrie. Le plancton disparaît, les anchois se dispersent en profondeur et les captures s\'effondrent ; au même moment, la côte subit des pluies torrentielles qui détruisent les installations. L\'anomalie climatique se traduit donc directement en crise alimentaire et économique.'
          },
          exercises: [
            {
              question: 'El Niño est-il un phénomène océanique ou atmosphérique ?',
              answer: 'Les deux à la fois, indissociablement. Le nom associe l\'oscillation australe, phénomène atmosphérique de balancement de pression entre Tahiti et Darwin, et l\'anomalie chaude océanique du Pacifique oriental. Aucun des deux ne peut se maintenir sans l\'autre : c\'est le couplage, la rétroaction de Bjerknes, qui produit l\'oscillation, avec une période irrégulière de deux à sept ans.'
            },
            {
              question: 'Pourquoi les années El Niño battent-elles souvent les records de température moyenne mondiale ?',
              answer: 'Parce que l\'océan Pacifique tropical libère vers l\'atmosphère une grande quantité de chaleur stockée, qui s\'ajoute au réchauffement d\'origine humaine. À l\'inverse, les années La Niña enfouissent de la chaleur dans l\'océan et paraissent plus fraîches. Le record ne crée donc pas la tendance : il la démasque en l\'amplifiant temporairement.'
            },
            {
              question: 'Que signifie une phase positive de l\'oscillation nord-atlantique pour l\'hiver européen ?',
              answer: 'Un renforcement du contraste de pression entre les Açores et l\'Islande, donc des vents d\'ouest plus vigoureux : hivers doux et humides au nord de l\'Europe, secs en Méditerranée. En phase négative, le flux d\'ouest faiblit, l\'air froid descend plus facilement vers l\'Europe centrale et les pluies gagnent le bassin méditerranéen. C\'est une variabilité surtout interne, plus difficile à prévoir saisonnièrement que l\'ENSO.'
            }
          ],
          sources: [
            { title: 'NOAA Climate.gov — ENSO : dossiers, explications et état courant du Pacifique tropical', url: 'https://www.climate.gov/enso' },
            { title: 'NOAA Climate Prediction Center — Oceanic Niño Index (ONI) : séries mensuelles et seuils ±0,5 K sur trois mois', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/ensostuff/ONI_v5.php' },
            { title: 'NOAA Climate Prediction Center — North Atlantic Oscillation : définition, indices et impacts', url: 'https://www.cpc.ncep.noaa.gov/products/precip/CWlink/pna/nao.shtml' },
            { title: 'NASA Earth Observatory — Global Effects of Mount Pinatubo : aérosols stratosphériques et refroidissement de 1992-1993', url: 'https://earthobservatory.nasa.gov/images/1510/global-effects-of-mount-pinatubo' }
          ]
        }
      } // FIN CHAPITRE enso-et-variabilite-naturelle
      ,
      {
        id: 'paleoclimats-et-milankovitch',
        title: 'Paléoclimats et cycles de Milankovitch',
        field: 'Climatologie · histoire du climat',
        summary: 'Ce que racontent les carottes de glace : des cycles glaciaires de 100 000 ans pilotés par l\'orbite, amplifiés par le carbone.',
        lesson: {
          sections: [
            'Le climat que nous connaissons est une exception récente. Le Quaternaire, depuis environ 2,6 millions d\'années, est scandé d\'une vingtaine de glaciations séparées par de brefs épisodes chauds. Nous vivons dans l\'un d\'eux, l\'Holocène, commencé il y a environ 11 700 ans : onze millénaires de stabilité relative qui ont permis l\'invention de l\'agriculture, des villes et de tout ce qui s\'ensuit.',
            'Cette histoire n\'a pas été devinée : elle a été lue dans les archives naturelles. Les carottes de glace sont les plus spectaculaires, car elles contiennent des bulles d\'air fossiles : analyser ces bulles, c\'est mesurer directement le dioxyde de carbone et le méthane de l\'atmosphère d\'autrefois, tandis que la composition isotopique de la glace renseigne sur la température. S\'y ajoutent les sédiments marins et leurs foraminifères, les coraux, les cernes d\'arbres, les pollens et les archives écrites.',
            'Ces archives montrent une succession de cycles d\'environ 100 000 ans, encadrés par des variations orbitales décrites par Milutin Milanković : l\'excentricité de l\'orbite terrestre, qui varie de 0 à 0,06 sur environ 100 000 ans ; l\'obliquité de l\'axe, l\'inclinaison de 22,1 à 24,5° sur 41 000 ans ; et la précession, le balancement de l\'axe sur lui-même, d\'environ 23 000 ans. Ces trois paramètres ne changent presque rien à l\'énergie solaire reçue en moyenne chaque année : ils la redistribuent entre les saisons et les latitudes.',
            'Ce qui compte alors, c\'est l\'ensoleillement estival aux hautes latitudes nord, vers 65° N. Un été un peu moins ensoleillé laisse la neige de l\'hiver survivre, l\'albédo s\'élève, la surface blanche renvoie davantage d\'énergie : la glaciation s\'installe. À l\'inverse, un été plus chaud déclenche la fonte, les océans absorbent du CO₂, la végétation avance vers le nord. Les variations orbitales agissent ainsi comme une impulsion que les rétroactions — glace, végétation, carbone, vapeur d\'eau — amplifient ensuite.',
            'Le lien entre gaz à effet de serre et température y apparaît comme une évidence statistique : sur 800 000 ans, le CO₂ oscille entre 180 ppm en plein âge glaciaire et 280 ppm en période chaude, en phase avec la température. Les mesures montrent même que le CO₂ suit la température de quelques siècles, ce qui est normal pour une rétroaction : le réchauffement libère du carbone de l\'océan, et ce carbone amplifie le réchauffement initial. Le CO₂ n\'est donc pas le seul déclencheur, mais il est l\'amplificateur indispensable.',
            'L\'histoire du climat comprend aussi des accidents : les événements abrupts dits de Dansgaard-Oeschger et de Heinrich, liés à des affaiblissements de la circulation océanique atlantique, puis des épisodes plus proches comme l\'optimum médiéval et le Petit Âge glaciaire, entre le XIVe et le milieu du XIXe siècle. Un refroidissement de quelques dixièmes de degré, attribué surtout à une activité volcanique soutenue et à une faible activité solaire, y a suffi pour modifier les récoltes et les glaciers européens.'
          ],
          formula: {
            label: 'LES TROIS CYCLES DE MILANKOVITCH',
            text: 'excentricité ≈ 100 000 ans (0 à 0,06) · obliquité ≈ 41 000 ans (22,1° à 24,5°) · précession ≈ 23 000 ans ⇒ redistribution saisonnière et latitudinale de l\'insolation, sans changement notable du total annuel',
            mathML: 'milankovitch-cycles'
          },
          equationDetails: [
            {
              title: 'Excentricité : une modulation de faible amplitude',
              formula: 'ΔS / S ≈ 2 e   (variation de l\'insolation entre périhélie et aphélie)',
              explanation: 'L\'orbite terrestre est une ellipse dont le Soleil occupe un foyer. Le flux solaire varie comme l\'inverse du carré de la distance : quand la distance varie de ±e, l\'insolation varie d\'environ ±2e autour de la moyenne. L\'excentricité actuelle, faible, produit donc un effet saisonnier modeste, mais elle module l\'amplitude des effets de la précession.',
              parameters: 'e = excentricité (0,0167 aujourd\'hui, jusqu\'à 0,06 aux maxima) ; S = 1361 W·m⁻², la constante solaire ; période d\'environ 100 000 ans.',
              example: 'Exemple : avec e = 0,0167, l\'insolation varie de ±3,3 % entre le périhélie (début janvier) et l\'aphélie (début juillet), soit un écart d\'environ 7 %. Avec e = 0,06, l\'écart atteindrait 4e, soit près de 24 %.',
              result: 'L\'excentricité ne réchauffe ni ne refroidit la Terre en moyenne : elle déplace l\'énergie d\'une saison à l\'autre et d\'un hémisphère à l\'autre.'
            },
            {
              title: 'Obliquité : l\'été polaire dépend de l\'inclinaison',
              formula: 'I_pôle (solstice) = S · sin ε   avec   ε = obliquité',
              explanation: 'Au solstice d\'été, le Soleil ne se couche plus au pôle : il tourne à une hauteur constante égale à l\'obliquité. L\'insolation journalière moyenne au pôle vaut donc le produit de la constante solaire par le sinus de l\'obliquité. Une obliquité plus forte rend les étés polaires plus chauds et les hivers plus froids ; elle peut ainsi faire fondre ou préserver une calotte.',
              parameters: 'ε l\'obliquité (23,44° aujourd\'hui, entre 22,1° et 24,5°) ; S = 1361 W·m⁻² ; période d\'environ 41 000 ans.',
              example: 'Exemple : au pôle Nord, le 21 juin, l\'insolation moyenne vaut 1361 × sin 23,44° ≈ 541 W·m⁻². Avec ε = 24,5°, elle passerait à 1361 × sin 24,5° ≈ 564 W·m⁻², soit 4 % de plus, et sensiblement plus encore en fin d\'été, quand la neige et la glace décident de leur survie.',
              result: 'Les archives glaciaires contiennent une forte composante de 41 000 ans : le signal de l\'obliquité est celui des hautes latitudes.'
            },
            {
              title: 'Précession : le calendrier des saisons se déplace',
              formula: 'Période de précession ≈ 23 000 ans  ⇒  la date du périhélie avance dans le calendrier des saisons',
              explanation: 'L\'axe terrestre décrit un cône, comme une toupie qui ralentit, et l\'orientation de l\'ellipse tourne elle aussi. Il en résulte que la date à laquelle la Terre passe au plus près du Soleil se décale dans l\'année. Selon que le périhélie tombe en été ou en hiver de l\'hémisphère nord, les étés de celui-ci reçoivent plus ou moins d\'énergie.',
              parameters: 'Période de précession ≈ 23 000 ans (19 000 à 26 000 selon la composante) ; périhélie actuel : début janvier, donc en hiver boréal.',
              example: 'Exemple : il y a environ 11 000 ans, le périhélie tombait en juillet, ce qui procurait aux étés de l\'hémisphère nord environ 8 % d\'énergie solaire de plus qu\'aujourd\'hui — une anomalie qui a accompagné la fin de la dernière glaciation et l\'installation de l\'optimum holocène.',
              result: 'Précession et obliquité agissent ensemble : c\'est leur combinaison, plus que chaque paramètre isolé, qui règle l\'ensoleillement estival des hautes latitudes.'
            }
          ],
          example: {
            statement: 'Comparer la vitesse de variation naturelle du CO₂ à la fin de la dernière déglaciation (de 190 à 280 ppm en environ 10 000 ans) à celle de la période industrielle (de 280 ppm vers 1750 à environ 425 ppm aujourd\'hui).',
            calculation: 'Variation naturelle : (280 − 190) / 10 000 = 0,009 ppm par an, soit 0,9 ppm par siècle. Variation industrielle : (425 − 280) / 275 ≈ 0,53 ppm par an, soit environ 53 ppm par siècle. Rapport : 53 / 0,9 ≈ 59.',
            answer: 'Le rythme actuel est environ soixante fois plus rapide que celui de la plus rapide déglaciation naturelle documentée. Cette comparaison sépare deux régimes : une cause orbitale, lente, agissant par impulsions millénaires, et une cause interne au système climatique, immédiate, qui ajoute un forçage persistant.'
          },
          exercise: {
            question: 'Pourquoi le cycle de 100 000 ans domine-t-il dans les archives, alors que l\'excentricité modifie si peu l\'insolation annuelle ?',
            answer: 'Parce que l\'effet de l\'excentricité est indirect : elle règle l\'amplitude avec laquelle la précession déplace l\'insolation d\'une saison à l\'autre. La réponse des calottes et du cycle du carbone, non linéaire, transforme cette modulation en cycles glaciaires complets : c\'est la combinaison « précession modulée par l\'excentricité, amplifiée par les rétroactions » qui produit le rythme de 100 000 ans.'
          },
          exercises: [
            {
              question: 'Comment une carotte de glace peut-elle révéler l\'atmosphère d\'il y a 800 000 ans ?',
              answer: 'La neige se transforme en glace en emprisonnant l\'air interstitiel : il subsiste des bulles qui sont des échantillons directs de l\'atmosphère de l\'époque. On en analyse le CO₂ et le CH₄, tandis que la composition isotopique de la glace elle-même (deutérium ou oxygène 18) donne la température, et les poussières ou les sels marins renseignent sur l\'aridité et les vents.'
            },
            {
              question: 'Les cycles de Milankovitch changent-ils la quantité d\'énergie solaire reçue chaque année par la Terre ?',
              answer: 'Presque pas : la moyenne annuelle et globale varie très peu. Ce qui change, c\'est la répartition : la différence d\'ensoleillement entre été et hiver, et entre les hautes et les basses latitudes. Le climat est donc sensible à la géométrie de l\'éclairement autant qu\'à son total.'
            },
            {
              question: 'Que nous apprend le Petit Âge glaciaire ?',
              answer: 'Que des forçages naturels modestes, ici une activité volcanique soutenue et un minimum d\'activité solaire, peuvent refroidir durablement une région de quelques dixièmes de degré, assez pour modifier récoltes et glaciers. Mais il enseigne aussi l\'échelle : ce refroidissement reste bien inférieur au réchauffement global de plus d\'un kelvin observé depuis la fin du XIXe siècle.'
            }
          ],
          sources: [
            { title: 'NOAA NCEI — Paleoclimatology : carottes de glace, sédiments, cernes et bases de données paléoclimatiques', url: 'https://www.ncei.noaa.gov/products/paleoclimatology' },
            { title: 'NASA Science — Milankovitch (Orbital) Cycles and Their Role in Earth\'s Climate : excentricité, obliquité et précession', url: 'https://science.nasa.gov/science-research/earth-science/milankovitch-orbital-cycles-and-their-role-in-earths-climate/' },
            { title: 'NOAA Global Monitoring Laboratory — Trends in Atmospheric Carbon Dioxide : concentrations actuelles et série historique', url: 'https://gml.noaa.gov/ccgg/trends/' },
            { title: 'GIEC, AR6 Groupe de travail I (2021) — Chapitre 2, Changing State of the Climate System : paléoclimats et vitesse du changement actuel', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-2/' }
          ]
        }
      } // FIN CHAPITRE paleoclimats-et-milankovitch
      ,
      {
        id: 'changement-climatique-actuel',
        title: 'Le changement climatique actuel',
        field: 'Climatologie · enjeux contemporains',
        summary: 'Des causes identifiées aux scénarios de fin de siècle : forçage radiatif, budget carbone et points de bascule.',
        lesson: {
          sections: [
            'Depuis la fin du XIXe siècle, la température moyenne de la surface du globe a augmenté d\'environ 1,1 °C sur la décennie 2011-2020 par rapport à la période préindustrielle selon le GIEC, et elle continue de progresser : l\'année 2024 a été la première année civile à franchir la barre des 1,5 °C par rapport à 1850-1900, selon l\'Organisation météorologique mondiale. Le réchauffement n\'est pas linéaire : les années s\'additionnent avec des à-coups liés à ENSO, aux volcans et à la variabilité naturelle, mais la tendance est continue.',
            'La cause est identifiée de façon formelle : la concentration de dioxyde de carbone est passée d\'environ 280 ppm vers 1750 à plus de 425 ppm aujourd\'hui, soit une hausse supérieure à 50 %, accompagnée d\'augmentations du méthane et du protoxyde d\'azote. L\'origine de ce surplus est établie par la chimie de ses isotopes, qui porte la signature des combustibles fossiles, et par le bilan de l\'oxygène atmosphérique. Le GIEC conclut qu\'il est sans équivoque que l\'influence humaine a réchauffé l\'atmosphère, l\'océan et les terres émergées, avec une meilleure estimation de +1,07 °C d\'origine humaine sur la décennie 2010-2019.',
            'La température de l\'air n\'est qu\'un symptôme parmi d\'autres. Le niveau moyen de la mer s\'élève d\'environ 20 cm depuis 1900, puis à un rythme de plus de 3 mm par an, sous deux effets qui s\'additionnent : la dilatation thermique de l\'eau et la fonte des glaces continentales du Groenland, de l\'Antarctique et des glaciers de montagne. L\'océan s\'acidifie, parce que le CO₂ dissous forme de l\'acide carbonique et libère des ions hydrogène qui dissolvent le carbonate indispensable aux coraux et aux coquillages.',
            'Les extrêmes suivent, et souvent plus vite que la moyenne. La vapeur d\'eau que l\'air peut contenir augmente d\'environ 7 % par kelvin de réchauffement (relation de Clausius-Clapeyron) : quand il pleut, il pleut donc davantage. Les vagues de chaleur deviennent plus fréquentes, plus longues et plus intenses, la sécheresse et les incendies s\'aggravent dans les régions déjà sèches, et la fréquence des cyclones tropicaux les plus violents augmente, même si leur nombre total pourrait diminuer.',
            'Pour l\'avenir, la physique et les scénarios socio-économiques se combinent. Selon les trajectoires d\'émissions retenues, le GIEC projette un réchauffement d\'ici 2100 allant d\'environ 1,4 °C (trajectoire de décarbonation rapide) à 4,4 °C (trajectoire à forte consommation de charbon et de pétrole). Les politiques actuellement annoncées, si elles étaient intégralement appliquées, conduiraient plutôt à un réchauffement de l\'ordre de 2,5 à 3 °C : l\'écart entre engagement et résultat constitue tout l\'enjeu des décennies à venir.',
            'Deux leviers coexistent, et ils ne se substituent pas l\'un à l\'autre. L\'atténuation consiste à réduire les émissions jusqu\'à la neutralité carbone, ce qui, parce que le réchauffement est proportionnel aux émissions cumulées, est la seule façon de plafonner puis de stabiliser la température. L\'adaptation consiste à se préparer aux changements déjà inévitables : rafraîchir les villes, gérer l\'eau, replier les installations littorales, adapter les cultures. Plus la décennie présente sera chaude, plus l\'adaptation de la seconde moitié du siècle sera coûteuse.'
          ],
          formula: {
            label: 'FORÇAGE RADIATIF DU CO₂',
            text: 'ΔF = 5,35 × ln(C / C₀)   :   de 280 à 425 ppm, ΔF = 5,35 × ln(425/280) ≈ +2,2 W·m⁻²',
            mathML: 'co2-radiative-forcing'
          },
          equationDetails: [
            {
              title: 'Le forçage radiatif du dioxyde de carbone',
              formula: 'ΔF = 5,35 × ln(C / C₀)',
              mathML: 'co2-radiative-forcing',
              explanation: 'Le forçage radiatif mesure le déséquilibre du bilan énergétique de la Terre imposé par un changement de composition atmosphérique, en watts par mètre carré. Pour le CO₂, l\'effet est logarithmique : chaque doublement ajoute à peu près la même puissance, ce qui signifie que le réchauffement supplémentaire par tonne émise reste comparable quel que soit le niveau de départ.',
              parameters: 'C la concentration actuelle, C₀ la concentration de référence, en ppm ; ΔF en W·m⁻². La constante 5,35 provient de l\'ajustement des calculs de transfert radiatif.',
              example: 'Exemple : de 280 à 425 ppm, ΔF = 5,35 × ln(1,518) = 5,35 × 0,417 ≈ +2,2 W·m⁻². En ajoutant méthane, protoxyde d\'azote et halocarbures, le forçage anthropique total est d\'environ +2,7 W·m⁻².',
              result: 'Deux watts et demi par mètre carré, c\'est peu en apparence — à peu près une petite ampoule par mètre carré — mais répété sur 510 millions de kilomètres carrés et pendant des décennies, c\'est une énergie colossale.'
            },
            {
              title: 'Du forçage au réchauffement : sensibilité climatique',
              formula: 'ΔT = λ × ΔF   avec   λ ≈ 0,8 K·(W·m⁻²)⁻¹ en équilibre, soit ≈ 3 K pour un doublement du CO₂',
              explanation: 'La réponse de la température à un forçage dépend d\'un paramètre de rétroaction global, λ, qui rassemble les rétroactions de la vapeur d\'eau, de la glace, des nuages et du rayonnement thermique. La réponse observée est plus faible que la réponse d\'équilibre, parce que l\'océan absorbe la majeure partie de l\'énergie reçue et retarde la réponse.',
              parameters: 'λ ≈ 0,8 K·(W·m⁻²)⁻¹ correspondant à une sensibilité climatique d\'équilibre de 2,5 à 4 K pour un doublement du CO₂ (meilleure estimation : 3 K, GIEC AR6) ; réponse transitoire observée : environ 0,45 K·(W·m⁻²)⁻¹.',
              example: 'Exemple : les observations donnent environ 1,2 K de réchauffement pour 2,7 W·m⁻² de forçage, soit 0,45 K·(W·m⁻²)⁻¹. En équilibre, le même forçage produirait 2,7 × 0,8 ≈ 2,2 K.',
              result: 'Le climat n\'a pas encore « fini » de réagir : l\'inertie thermique de l\'océan laisse une dette de réchauffement qui continuera de se manifester même après stabilisation des concentrations.'
            },
            {
              title: 'Le budget carbone restant',
              formula: 'ΔT ≈ TCRE × Σ émissions cumulées   avec   TCRE ≈ 0,45 K par 1000 GtCO₂',
              explanation: 'Le réchauffement maximal atteint est presque proportionnel à la quantité totale de CO₂ émise depuis l\'ère préindustrielle, et non à la date ou au rythme des émissions. Cette linéarité, appelée réponse transitoire au CO₂ cumulé, permet de calculer un budget : la quantité qu\'il reste à émettre pour respecter une limite de température.',
              parameters: 'TCRE ≈ 0,45 °C par 1000 GtCO₂ ; pour limiter le réchauffement à 1,5 °C, le budget restant à partir de 2020 est d\'environ 500 GtCO₂ pour une probabilité de 50 % (300 GtCO₂ pour 83 %), selon le GIEC AR6.',
              example: 'Exemple : au rythme d\'environ 40 GtCO₂ par an, un budget de 500 GtCO₂ correspond à une douzaine d\'années aux émissions actuelles ; à 300 GtCO₂, il n\'en reste qu\'une septaine.',
              result: 'Ce budget transforme un objectif de température en objet comptable : chaque tonne compte, et la date de la neutralité carbone en fixe le solde.'
            }
          ],
          example: {
            statement: 'Le CO₂ atmosphérique passerait de 280 ppm (préindustriel) à 560 ppm, soit un doublement. Estimer le forçage radiatif correspondant, puis le réchauffement d\'équilibre associé.',
            calculation: 'Forçage : ΔF = 5,35 × ln(560/280) = 5,35 × ln 2 = 5,35 × 0,693 ≈ 3,7 W·m⁻². Réchauffement d\'équilibre : avec λ ≈ 0,8 K·(W·m⁻²)⁻¹, ΔT = 3,7 × 0,8 ≈ 3,0 K.',
            answer: 'Environ 3 K, valeur médiane retenue par le GIEC pour un doublement du CO₂, avec une fourchette probable de 2,5 à 4 K qui traduit l\'incertitude sur les nuages. À noter que cette valeur est une température d\'équilibre : l\'inertie de l\'océan fait que le réchauffement observé reste, pour un temps, inférieur à la réponse complète.'
          },
          exercise: {
            question: 'Pourquoi la fréquence des vagues de chaleur augmente-t-elle plus vite que la température moyenne ?',
            answer: 'Parce qu\'un déplacement de la moyenne déplace toute la distribution : un seuil défini sur les extrêmes (par exemple le maximum annuel) est franchi d\'autant plus souvent que la distribution s\'est décalée. Un réchauffement moyen faible suffit donc à multiplier la probabilité des événements qui étaient rares. S\'y ajoutent des effets locaux : assèchement des sols, moins d\'évaporation, donc davantage d\'énergie disponible pour chauffer l\'air.'
          },
          exercises: [
            {
              question: 'La banquise arctique fond : pourquoi cela ne fait-il pas monter le niveau des mers, contrairement à la calotte du Groenland ?',
              answer: 'Parce que la banquise flotte : elle occupe déjà un volume dont le poids est égal à celui de l\'eau déplacée, et sa fonte ne change donc pas le niveau. La calotte du Groenland, elle, repose sur la terre ferme : l\'eau qu\'elle contient rejoint l\'océan et s\'y ajoute. La hausse du niveau de la mer vient donc de la fonte des glaces continentales et de la dilatation thermique de l\'eau, non de la banquise — dont la disparition compte néanmoins par la perte d\'albédo qu\'elle provoque.'
            },
            {
              question: 'Qu\'est-ce qu\'un point de bascule climatique ? Donnez deux exemples.',
              answer: 'Un seuil au-delà duquel un élément du système franchit une transition que le retour en arrière ne rétablit pas à l\'échelle humaine : la fonte du pergélisol libérant du CO₂ et du CH₄, l\'effondrement partiel des calottes polaires, l\'affaiblissement de la circulation atlantique, le dépérissement de la forêt amazonienne ou la disparition des récifs coralliens. Le franchissement n\'est pas nécessairement brutal, mais il est difficilement réversible.'
            },
            {
              question: 'Pourquoi parle-t-on d\'émissions cumulées plutôt que d\'émissions annuelles ?',
              answer: 'Parce que le CO₂ reste dans l\'atmosphère des siècles : une tonne émise en 2024 pèsera autant que la même tonne émise en 1990. Le réchauffement maximal atteint est donc proportionnel au total cumulé, avec un TCRE d\'environ 0,45 K par millier de gigatonnes. Ce qui compte n\'est pas la date des émissions, mais le total atteint avant que la neutralité carbone ne soit acquise.'
            }
          ],
          sources: [
            { title: 'GIEC, AR6 Groupe de travail I (2021) — Résumé pour décideurs : réchauffement observé, attribution à l\'influence humaine et budget carbone restant', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/' },
            { title: 'GIEC, AR6 Rapport de synthèse (2023) — Climate Change 2023 : trajectoires d\'émissions, projections de réchauffement et points de bascule', url: 'https://www.ipcc.ch/report/ar6/syr/' },
            { title: 'NASA — Vital Signs : Global Temperature, série de température mondiale observée', url: 'https://climate.nasa.gov/vital-signs/global-temperature/' },
            { title: 'Organisation météorologique mondiale (OMM) — State of the Global Climate 2024 : température annuelle et niveau de la mer', url: 'https://wmo.int/publication-series/state-of-global-climate-2024' },
            { title: 'NOAA Global Monitoring Laboratory — Trends in Atmospheric Carbon Dioxide : concentration mondiale de CO₂', url: 'https://gml.noaa.gov/ccgg/trends/' }
          ]
        }
      } // FIN CHAPITRE changement-climatique-actuel
    ] // FIN BRANCHE oceans-et-variabilite
  }

],
,
  {
    "id": "grands-livres",
    "title": "Les grands livres de la climatologie",
    "note": "Dix ouvrages de référence de la climatologie, avec auteur, édition, date de parution et résumé.",
    "chapters": [
      {
        "id": "arrhenius-worlds-in-the-making",
        "title": "Worlds in the Making",
        "field": "Svante Arrhenius · 1908",
        "summary": "Svante Arrhenius, 1908.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Worlds in the Making: The Evolution of the Universe"
            ],
            [
              "Auteur",
              "Svante Arrhenius (1859-1927), directeur de l’Institut Nobel de physico-chimie à Stockholm selon la page de titre"
            ],
            [
              "Édition",
              "New York et Londres, Harper & Brothers, mars 1908 (xiii + 229 pages). Traduction par H. Borns de l’ouvrage suédois Världarnas utveckling."
            ],
            [
              "Date de parution",
              "1908"
            ]
          ],
          "sections": [
            "Ce livre n’est pas un traité de climatologie : c’est un ouvrage sur l’évolution de l’univers et des mondes. Il est cité ici parce que sa table des matières comporte des sections sur l’effet de l’atmosphère qui retient la chaleur, sur le rôle du dioxyde de carbone atmosphérique, sur les âges géologiques chauds et froids et sur les variations de la teneur de l’air en dioxyde de carbone."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Project Gutenberg — texte de l’édition de 1908 (Harper & Brothers)",
              "url": "https://gutenberg.org/cache/epub/69022/pg69022-images.html"
            },
            {
              "title": "Bibliothèque nationale d’Irlande — notice (New York et Londres, Harper, 1908)",
              "url": "https://catalogue.nli.ie/Record/vtls000389394"
            }
          ]
        }
      },
      {
        "id": "milankovic-kanon-der-erdbestrahlung",
        "title": "Kanon der Erdbestrahlung und seine Anwendung auf das Eiszeitenproblem",
        "field": "Milutin Milanković · 1941",
        "summary": "Milutin Milanković, 1941.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Kanon der Erdbestrahlung und seine Anwendung auf das Eiszeitenproblem (Canon de l’insolation de la Terre et son application au problème des périodes glaciaires)"
            ],
            [
              "Auteur",
              "Milutin Milanković (1879-1958)"
            ],
            [
              "Édition",
              "Belgrade, Académie royale serbe, 1941. Traductions anglaises : Canon of Insolation and the Ice-Age Problem, Israel Program for Scientific Translations, Washington D. C., 1969 ; Belgrade, Zavod Nastavna Sredstva, 1998 (éd. N. Pantić)."
            ],
            [
              "Date de parution",
              "1941"
            ]
          ],
          "sections": [
            "Considéré comme l’œuvre maîtresse de Milanković, ce livre rassemble les éléments mathématiques de la théorie dite des « cycles de Milanković » : les variations de l’orbite terrestre modifient la quantité de rayonnement solaire reçu et ont pu jouer un rôle dans le déclenchement des glaciations. Le livre est le fruit de près de quarante ans de recherches mathématiques sur le climat.",
            "Milanković avait déjà présenté une première version de sa théorie en 1930 dans Mathematische Klimalehre und astronomische Theorie der Klimaschwankungen, contribution au Handbuch der Klimatologie (Berlin, Gebrüder Borntraeger). Le manuscrit du Kanon fut remis à l’imprimeur le 2 avril 1941, quatre jours avant le bombardement de Belgrade : l’imprimerie fut détruite, mais presque toutes les feuilles imprimées étaient intactes.",
            "La théorie n’a été largement acceptée qu’après l’article de Hays, Imbrie et Shackleton, « Variations in the Earth’s Orbit: Pacemaker of the Ice Ages » (Science, 1976), qui a mis en relation des carottes de sédiments marins avec les variations orbitales."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Union européenne des géosciences (EGU) — portrait de Milutin Milanković",
              "url": "https://www.egu.eu/awards-medals/portrait/milutin-milankovic/"
            },
            {
              "title": "Garrison-Morton (Jeremy Norman) — notice du Kanon der Erdbestrahlung",
              "url": "https://beta.historyofmedicine.com/id/15277"
            },
            {
              "title": "History of Information — Milanković et le Kanon der Erdbestrahlung",
              "url": "https://historyofinformation.com/detail.php?id=5340"
            }
          ]
        }
      },
      {
        "id": "le-roy-ladurie-histoire-du-climat",
        "title": "Histoire du climat depuis l’an mil",
        "field": "Emmanuel Le Roy Ladurie · 1967",
        "summary": "Emmanuel Le Roy Ladurie, 1967.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Histoire du climat depuis l’an mil"
            ],
            [
              "Auteur",
              "Emmanuel Le Roy Ladurie (1929-2023), préface de Pierre Pédelaborde"
            ],
            [
              "Édition",
              "Paris, Flammarion, collection « Nouvelle bibliothèque scientifique ». Version anglaise révisée et mise à jour : Times of Feast, Times of Famine: A History of Climate since the Year 1000 (1971)."
            ],
            [
              "Date de parution",
              "1967"
            ]
          ],
          "sections": [
            "L’auteur est historien : il aborde l’histoire de faits physiques, ceux du climat, avec les méthodes de l’histoire des sociétés humaines. Le livre porte sur l’histoire du climat depuis l’an mil.",
            "Le Roy Ladurie y insiste sur le fait que les rapports entre le climat et l’histoire humaine ne sont pas encore résolus, et prend ses distances avec un déterminisme grossier. Le climatologue Hubert Lamb en a rendu compte dans la revue Nature en 1968, sous le titre « Weather Long Ago »."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Wellcome Collection — notice bibliographique",
              "url": "https://wellcomecollection.org/works/dph5yxhb"
            },
            {
              "title": "Cahiers de géographie du Québec — compte rendu (1968)",
              "url": "https://www.erudit.org/fr/revues/cgq/1968-v12-n25-cgq2599/020804ar.pdf"
            },
            {
              "title": "Nature — H. Lamb, « Weather Long Ago » (1968)",
              "url": "https://www.nature.com/articles/217687a0"
            }
          ]
        }
      },
      {
        "id": "lamb-climate-present-past-future",
        "title": "Climate: Present, Past and Future",
        "field": "Hubert H. Lamb · 1972-1977",
        "summary": "Hubert H. Lamb, 1972 et 1977.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Climate: Present, Past and Future"
            ],
            [
              "Auteur",
              "Hubert H. Lamb"
            ],
            [
              "Édition",
              "Londres, Methuen, 2 volumes : volume 1 « Fundamentals and Climate Now » (1972, xxxi + 613 pages) et volume 2 « Climatic History and the Future » (1977). Distribué aux États-Unis par Barnes & Noble. Réédité par Routledge dans la collection Routledge Revivals."
            ],
            [
              "Date de parution",
              "1972 (volume 1) ; 1977 (volume 2)"
            ]
          ],
          "sections": [
            "Le volume 1 traite des fondements de la climatologie (rayonnement et apport de chaleur à la Terre, circulation de l’atmosphère, saisons, stratosphère, océans, cycle de l’eau, causes observées des variations climatiques) puis présente les climats du XXe siècle, avec des données de référence et une classification des climats.",
            "Le volume 2 couvre les deux dernières parties de l’étude : l’histoire du climat et l’avenir. L’auteur y replace dans leur contexte certaines prévisions pessimistes alors disponibles."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Université de Pennsylvanie — notice de la collection en deux volumes",
              "url": "https://find.library.upenn.edu/catalog/994941203503681"
            },
            {
              "title": "Routledge — présentation et table des matières du volume 1",
              "url": "https://www.routledge.com/products/9780203804315"
            }
          ]
        }
      },
      {
        "id": "peixoto-oort-physics-of-climate",
        "title": "Physics of Climate",
        "field": "José P. Peixoto et Abraham H. Oort · 1992",
        "summary": "José P. Peixoto et Abraham H. Oort, 1992.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Physics of Climate"
            ],
            [
              "Auteur",
              "José P. Peixoto et Abraham H. Oort, avec un avant-propos d’Edward N. Lorenz"
            ],
            [
              "Édition",
              "New York, American Institute of Physics (xxxix + 520 pages)."
            ],
            [
              "Date de parution",
              "1992"
            ]
          ],
          "sections": [
            "L’ouvrage décrit en profondeur la circulation atmosphérique et la façon dont les phénomènes de l’environnement mondial interagissent dans un seul système. Son approche intégrée réunit les grands éléments du système climatique — océans, atmosphère et cryosphère — pour expliquer la structure et le comportement du climat au cours du temps.",
            "Il s’adresse aux étudiants et aux professionnels de la météorologie, de l’océanographie, de la géophysique et de la physique."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Springer — présentation du livre",
              "url": "https://link.springer.com/book/9780883187128"
            },
            {
              "title": "Bibliothèque de l’Université de Kyushu — notice bibliographique",
              "url": "https://catalog.lib.kyushu-u.ac.jp/ja/recordID/1000642709"
            }
          ]
        }
      },
      {
        "id": "hartmann-global-physical-climatology",
        "title": "Global Physical Climatology",
        "field": "Dennis L. Hartmann · 1994",
        "summary": "Dennis L. Hartmann, 1994.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Global Physical Climatology"
            ],
            [
              "Auteur",
              "Dennis L. Hartmann (université de Washington, Seattle)"
            ],
            [
              "Édition",
              "San Diego et Londres, Academic Press, collection « International Geophysics Series », volume 56 (411 pages)."
            ],
            [
              "Date de parution",
              "1994"
            ]
          ],
          "sections": [
            "Manuel introductif consacré aux principes physiques fondamentaux et aux problèmes de la sensibilité et du changement climatiques. Il traite notamment du bilan énergétique global, de la théorie des paramètres orbitaux pour expliquer les changements climatiques passés, et des modèles climatiques globaux.",
            "Selon l’auteur, la plupart des manuels de climatologie sont descriptifs et écrits par des géographes ; celui-ci est écrit du point de vue d’un physicien."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Elsevier — présentation du livre",
              "url": "https://www.elsevier.com/books/catalog/isbn/9780123285300"
            },
            {
              "title": "Karlsruher Institut für Technologie — notice bibliographique",
              "url": "https://katalog.bibliothek.kit.edu/bib/128253"
            }
          ]
        }
      },
      {
        "id": "houghton-global-warming-complete-briefing",
        "title": "Global Warming: The Complete Briefing",
        "field": "John Houghton · 1994",
        "summary": "John Houghton, 1994.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Global Warming: The Complete Briefing"
            ],
            [
              "Auteur",
              "John Theodore Houghton (1931-2020)"
            ],
            [
              "Édition",
              "Première édition : Oxford, Lion Publishing, 1994 (192 pages). Deuxième édition : Cambridge University Press, 1997 ; puis troisième (2004), quatrième (2009) et cinquième (2015) éditions."
            ],
            [
              "Date de parution",
              "1994"
            ]
          ],
          "sections": [
            "Guide de la science du réchauffement climatique : l’auteur expose les bases scientifiques du réchauffement, puis les impacts probables du changement climatique sur les sociétés humaines, avant d’aborder les actions que gouvernements, industries et individus peuvent mener pour en atténuer les effets.",
            "La deuxième édition a été entièrement mise à jour pour tenir compte des dernières évaluations du GIEC et ajoute des questions à la fin des chapitres."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Wellcome Collection — notice de la première édition (Lion, 1994)",
              "url": "https://content.wellcomecollection.org/works/hetjwdze"
            },
            {
              "title": "Cambridge University Press — mentions d’édition (5e édition, 2015)",
              "url": "https://assets.cambridge.org/97811070/91672/copyright/9781107091672_copyright_info.pdf"
            }
          ]
        }
      },
      {
        "id": "alley-two-mile-time-machine",
        "title": "The Two-Mile Time Machine",
        "field": "Richard B. Alley · 2000",
        "summary": "Richard B. Alley, 2000.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "The Two-Mile Time Machine: Ice Cores, Abrupt Climate Change, and Our Future"
            ],
            [
              "Auteur",
              "Richard B. Alley (Pennsylvania State University)"
            ],
            [
              "Édition",
              "Princeton (New Jersey), Princeton University Press (viii + 229 pages, 18 chapitres en 5 parties). Réédité en 2014 dans la collection Princeton Science Library."
            ],
            [
              "Date de parution",
              "2000"
            ]
          ],
          "sections": [
            "Alley raconte l’histoire des changements climatiques mondiaux révélés par la lecture des couches annuelles de carottes de glace forées au Groenland. Dans les années 1990, avec ses collègues, il a montré que la dernière glaciation avait pris fin brusquement, en l’espace de trois ans environ.",
            "Les carottes, longues de plus de trois kilomètres au total, ont permis de reconstituer des phénomènes comme le régime des vents et les précipitations sur environ 110 000 ans. L’auteur en conclut que le climat peut changer brutalement et termine par une réflexion sur le climat futur et sur ce que l’on peut faire."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Pennsylvania State University — fiche de publication",
              "url": "https://pure.psu.edu/en/publications/the-two-mile-time-machine-ice-cores-abrupt-climate-change-and-our/"
            },
            {
              "title": "Notice de bibliothèque (Princeton University Press, 2000)",
              "url": "https://library.usi.edu/record/241335"
            },
            {
              "title": "Notice avec table des matières (18 chapitres)",
              "url": "https://opac.nwic.edu/eg/opac/record/24400"
            }
          ]
        }
      },
      {
        "id": "weart-discovery-of-global-warming",
        "title": "The Discovery of Global Warming",
        "field": "Spencer R. Weart · 2003",
        "summary": "Spencer R. Weart, 2003.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "The Discovery of Global Warming"
            ],
            [
              "Auteur",
              "Spencer R. Weart (né en 1942), physicien de formation devenu historien des sciences"
            ],
            [
              "Édition",
              "Cambridge (Massachusetts), Harvard University Press, collection « New histories of science, technology, and medicine » (x + 228 pages). Édition révisée et augmentée : Harvard University Press, 2008."
            ],
            [
              "Date de parution",
              "2003"
            ]
          ],
          "sections": [
            "Weart y présente l’histoire de la science du changement climatique, en racontant comment les scientifiques en sont venus à comprendre le réchauffement planétaire au cours du XXe siècle. Les chapitres vont de « How could climate change? » à « The discovery confirmed », en passant par « The erratic beast » et « Breaking into politics ».",
            "Une version du livre a été mise en ligne en août 2003 sur le site de l’American Institute of Physics."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Notice de bibliothèque avec table des matières (Harvard University Press, 2003)",
              "url": "https://lib.ecu.edu/catalog-preview/catalog/943242"
            },
            {
              "title": "American Institute of Physics — notice et biographie de l’auteur",
              "url": "https://history.aip.org/catalog/icos/26174.html"
            },
            {
              "title": "Publishers Weekly — compte rendu (2003)",
              "url": "https://publishersweekly.com/978-0-674-01157-1"
            }
          ]
        }
      },
      {
        "id": "pierrehumbert-principles-of-planetary-climate",
        "title": "Principles of Planetary Climate",
        "field": "Raymond T. Pierrehumbert · 2010",
        "summary": "Raymond T. Pierrehumbert, 2010.",
        "lesson": {
          "heading": "Fiche du livre",
          "fiche": [
            [
              "Titre complet",
              "Principles of Planetary Climate"
            ],
            [
              "Auteur",
              "Raymond T. Pierrehumbert (né en 1954), université de Chicago au moment de la publication"
            ],
            [
              "Édition",
              "Cambridge, Cambridge University Press (xxv + 652 pages)."
            ],
            [
              "Date de parution",
              "2010"
            ]
          ],
          "sections": [
            "Manuel qui présente les éléments physiques de base nécessaires pour comprendre le climat actuel et passé de la Terre, les climats des planètes du Système solaire et ceux des planètes extrasolaires : thermodynamique, transfert radiatif infrarouge, diffusion, transferts de chaleur à la surface et processus qui gouvernent l’évolution de la composition de l’atmosphère.",
            "Il commence par un traitement très élémentaire, puis devient progressivement plus exigeant. Près de quatre cents problèmes accompagnent le texte."
          ],
          "sourcesHeading": "Notices bibliographiques",
          "sources": [
            {
              "title": "Cambridge University Press — présentation du livre",
              "url": "https://www.cambridge.org/core/books/principles-of-planetary-climate/preface/3706FAD5101C3733C2FF2ADE9F214943"
            },
            {
              "title": "Bibliothèque universitaire de Nantes — notice (Cambridge UP, 2010)",
              "url": "https://nantilus.univ-nantes.fr/vufind/Record/PPN150092792"
            }
          ]
        }
      }
    ]
  },

