// Catalogue du cours de climatologie : 4 branches, 19 chapitres (dont 10 grands livres).
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
,

  {
    "id": "grands-livres"
,
    "title": "Les grands livres de la climatologie"
,
    "note": "Dix ouvrages de référence de la climatologie, avec auteur, édition, date de parution et résumé."
,
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

// BRANCHE L ATMOSPHÈRE 


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
          sourcesHeading: 'Sources scientifiques',
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
  },


{
  id: 'effet-radiatif',
  title: "L'effet radiatif",
  note: "Quatre chapitres pour comprendre le rayonnement thermique, le bilan radiatif terrestre, l'effet de serre et le forçage radiatif. Les valeurs globales sont des moyennes ou des ordres de grandeur dépendant de la période et de la méthode d'estimation.",
  chapters: [
    {
      id: 'rayonnement-thermique',
      title: 'Le rayonnement thermique et ses lois physiques',
      field: 'Physique · Rayonnement électromagnétique et transfert thermique',
      summary: "Comprendre comment les corps émettent et absorbent un rayonnement, et utiliser les lois de Stefan-Boltzmann et de Wien dans leur domaine de validité.",
      lesson: {
        sections: [
          "Le rayonnement est un mode de transfert d'énergie par ondes électromagnétiques. Contrairement à la conduction et à la convection, il peut se propager dans le vide. Tout corps dont la température est supérieure au zéro absolu émet un rayonnement thermique; la répartition des longueurs d'onde dépend notamment de sa température et de ses propriétés radiatives.",
          "Le modèle du corps noir décrit un objet idéal qui absorbe tout le rayonnement incident et émet, à une température donnée, le rayonnement thermique maximal possible. Les objets réels ne sont pas des corps noirs parfaits : leur émissivité, comprise entre 0 et 1 dans le modèle usuel, caractérise leur capacité d'émission par rapport à un corps noir à la même température.",
          "La loi de Stefan-Boltzmann donne le flux émis par unité de surface d'un corps noir : F = σ T^4. Pour une surface réelle grise, on utilise souvent F = ε σ T^4, avec une émissivité ε et la température absolue T en kelvins. La constante σ vaut environ 5,67 × 10^-8 W·m^-2·K^-4. Cette formule concerne l'émission; pour obtenir un échange radiatif net avec un environnement idéalisé à la température T_env, on peut utiliser F_net = ε σ (T^4 - T_env^4), sous des hypothèses adaptées.",
          "La loi de déplacement de Wien indique que la longueur d'onde au maximum d'émission d'un corps noir diminue lorsque sa température augmente : λ_max T ≈ 2,898 × 10^-3 m·K. Le Soleil, beaucoup plus chaud que la Terre, émet surtout dans les courtes longueurs d'onde; la Terre, plus froide, émet principalement dans l'infrarouge thermique. Les spectres réels dépendent aussi de l'absorption et de l'émission sélectives des matériaux et des gaz."
        ],
        example: {
          statement: "Une surface idéalisée de température T = 300 K a une émissivité ε = 0,90. Quel est son flux radiatif émis selon le modèle de Stefan-Boltzmann ?",
          calculation: "F = ε σ T^4 = 0,90 × 5,67 × 10^-8 × 300^4 ≈ 413 W/m².",
          answer: "Le flux émis estimé est d'environ 413 W/m². Il s'agit du flux émis, pas du flux net échangé avec l'environnement; ce dernier dépend aussi du rayonnement reçu et des températures environnantes."
        },
        exercise: {
          question: "Pourquoi faut-il exprimer la température en kelvins dans la loi de Stefan-Boltzmann ?",
          answer: "Parce que cette loi dépend de la température absolue élevée à la puissance 4. La température en degrés Celsius ne peut pas être utilisée directement."
        },
        exercises: [
          {
            question: "Quelle est l'unité du flux radiatif par unité de surface ?",
            answer: "Le watt par mètre carré (W/m²)."
          },
          {
            question: "Selon la loi de Wien, comment évolue la longueur d'onde du maximum d'émission quand la température augmente ?",
            answer: "Elle diminue : le produit λ_max × T reste approximativement égal à 2,898 × 10^-3 m·K pour un corps noir."
          },
          {
            question: "Une émissivité de 1 correspond à quel modèle idéal ?",
            answer: "À un corps noir, qui émet le flux maximal à la température considérée et absorbe tout le rayonnement incident."
          }
        ],
        sources: [
          {
            title: 'OpenStax — University Physics Volume 3, 6.1 Blackbody Radiation',
            url: 'https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation'
          },
          {
            title: 'OpenStax — University Physics Volume 2, 1.6 Mechanisms of Heat Transfer',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer'
          }
        ]
      }
    },
    {
      id: 'bilan-radiatif-terrestre',
      title: 'Le bilan radiatif de la Terre',
      field: 'Climatologie physique · Flux radiatifs au sommet de l’atmosphère et à la surface',
      summary: "Décrire les flux solaires entrants, la réflexion, l'absorption et le rayonnement infrarouge sortant, puis relier leur équilibre à l'évolution de la température globale.",
      lesson: {
        sections: [
          "Le bilan radiatif terrestre comptabilise l'énergie solaire absorbée par le système Terre-atmosphère et l'énergie renvoyée vers l'espace sous forme de rayonnement réfléchi et de rayonnement thermique infrarouge. À l'échelle globale et sur une durée suffisamment longue, un climat proche de l'équilibre doit évacuer vers l'espace autant d'énergie qu'il en absorbe. Cette égalité moyenne n'implique pas que chaque région ou chaque instant soit en équilibre.",
          "Le flux solaire moyen reçu au sommet de l'atmosphère, moyenné sur toute la surface de la Terre et sur le cycle jour-nuit, est d'environ 340 W/m². Une partie est réfléchie par les nuages, les aérosols et les surfaces claires; la fraction réfléchie à l'échelle planétaire est appelée albédo. Le reste est absorbé par l'atmosphère et la surface. La valeur exacte de chaque composante varie avec les nuages, les saisons, les surfaces et la période étudiée.",
          "La surface terrestre absorbe de l'énergie solaire et émet un rayonnement infrarouge en fonction de sa température. Une partie de cet infrarouge est absorbée par des gaz atmosphériques et des nuages, puis réémise dans différentes directions. L'énergie quitte également la surface par évaporation et par transfert turbulent de chaleur sensible. Il faut donc distinguer le bilan radiatif au sommet de l'atmosphère du bilan énergétique à la surface.",
          "Si le système Terre absorbe durablement plus d'énergie qu'il n'en renvoie vers l'espace, son contenu énergétique augmente, principalement dans l'océan, et le système se réchauffe. Si les pertes vers l'espace dépassent l'énergie absorbée, le système tend à se refroidir. La température répond avec retard, car les océans stockent une grande quantité d'énergie et les composantes du système climatique ont des inerties différentes."
        ],
        example: {
          statement: "Pour un schéma simplifié, le flux solaire moyen entrant vaut 340 W/m² et l'albédo planétaire vaut 0,29. Estimer le flux solaire réfléchi et le flux solaire absorbé, en négligeant ici les détails de répartition entre surface et atmosphère.",
          calculation: "Flux réfléchi = 0,29 × 340 = 98,6 W/m². Flux absorbé = (1 - 0,29) × 340 = 241,4 W/m².",
          answer: "Le modèle simplifié donne environ 99 W/m² réfléchis et 241 W/m² absorbés. Ce calcul concerne le rayonnement solaire; il ne donne pas à lui seul le bilan énergétique complet, qui inclut aussi le rayonnement infrarouge sortant."
        },
        exercise: {
          question: "Que signifie un déséquilibre énergétique positif au sommet de l'atmosphère ?",
          answer: "Le système Terre absorbe davantage d'énergie qu'il n'en renvoie vers l'espace; son contenu énergétique augmente tant que ce déséquilibre persiste."
        },
        exercises: [
          {
            question: "Que mesure l'albédo planétaire ?",
            answer: "La fraction du rayonnement solaire incident qui est réfléchie vers l'espace par le système Terre-atmosphère."
          },
          {
            question: "Pourquoi le flux solaire moyen global est-il inférieur au flux reçu sur une surface perpendiculaire aux rayons solaires ?",
            answer: "Parce que l'énergie interceptée par le disque terrestre est moyennée sur toute la surface sphérique et sur l'alternance jour-nuit."
          },
          {
            question: "Un bilan radiatif équilibré signifie-t-il qu'il n'existe aucun transfert de chaleur entre la surface et l'atmosphère ?",
            answer: "Non. Des flux importants peuvent s'échanger entre la surface et l'atmosphère même lorsque le bilan global au sommet de l'atmosphère est équilibré."
          }
        ],
        sources: [
          {
            title: 'NASA — Climate and Earth’s Energy Budget',
            url: 'https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/'
          },
          {
            title: 'NASA — The Earth’s Radiation Budget',
            url: 'https://science.nasa.gov/ems/13_radiationbudget/'
          },
          {
            title: 'GIEC — AR6, chapitre 7 : Earth’s Energy Budget and its Changes Through Time',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          }
        ]
      }
    },
    {
      id: 'effet-de-serre-radiatif',
      title: 'L’effet de serre et les échanges infrarouges',
      field: 'Sciences du climat · Absorption et émission infrarouges par l’atmosphère',
      summary: "Expliquer le rôle radiatif des gaz à effet de serre, distinguer l'effet de serre naturel de son renforcement anthropique et éviter les modèles trop simplifiés de l'atmosphère.",
      lesson: {
        sections: [
          "La plupart du rayonnement solaire qui atteint le système terrestre se situe dans les courtes longueurs d'onde, tandis que la surface terrestre, plus froide que le Soleil, émet principalement dans l'infrarouge thermique. Certains gaz atmosphériques, notamment la vapeur d'eau, le dioxyde de carbone, le méthane, le protoxyde d'azote et l'ozone, absorbent et émettent dans certaines bandes infrarouges. L'azote et l'oxygène, principaux constituants de l'air sec, interagissent beaucoup moins avec une grande partie du rayonnement infrarouge terrestre.",
          "Après avoir absorbé de l'infrarouge, une molécule active dans l'infrarouge échange de l'énergie avec son environnement et participe à l'émission atmosphérique. Le rayonnement émis par l'atmosphère se propage vers le haut et vers le bas. Le rayonnement descendant contribue à l'énergie reçue par la surface, mais il ne signifie pas que la chaleur est piégée de façon absolue : l'énergie continue de quitter le système vers l'espace, notamment depuis des couches atmosphériques plus élevées et plus froides.",
          "L'effet de serre naturel est essentiel à la température moyenne de la surface terrestre telle que nous la connaissons. Lorsque la concentration de gaz à effet de serre augmente, l'altitude effective depuis laquelle le rayonnement infrarouge s'échappe vers l'espace peut augmenter. Comme la température troposphérique diminue généralement avec l'altitude, l'émission vers l'espace peut alors être plus faible au départ; le système se réchauffe jusqu'à ce que le rayonnement sortant retrouve un niveau compatible avec l'énergie absorbée, avec des ajustements et rétroactions.",
          "Le rôle d'un gaz dépend de ses bandes d'absorption, de sa concentration, de sa durée de vie atmosphérique, de son mélange vertical et du recouvrement de ses bandes avec celles d'autres gaz. La vapeur d'eau est un puissant gaz à effet de serre et agit largement comme une rétroaction liée à la température; le CO2 est un moteur important du changement climatique actuel parce que les activités humaines augmentent sa concentration. L'effet de serre ne doit pas être décrit comme une simple couche solide qui renverrait tout le rayonnement vers le sol."
        ],
        example: {
          statement: "Une planète reçoit en moyenne une certaine énergie solaire absorbée. Si l'augmentation des gaz à effet de serre réduit initialement le rayonnement infrarouge sortant, quelle est la première conséquence énergétique attendue, toutes choses égales par ailleurs ?",
          calculation: "Déséquilibre énergétique = énergie absorbée - énergie sortante. Si le rayonnement sortant diminue alors que l'énergie absorbée reste inchangée, le déséquilibre devient positif.",
          answer: "La planète accumule de l'énergie et se réchauffe. À mesure que sa température et l'état de son atmosphère évoluent, le rayonnement infrarouge sortant augmente et d'autres ajustements interviennent."
        },
        exercise: {
          question: "Pourquoi l'augmentation du CO2 peut-elle réchauffer le climat même si le CO2 ne constitue qu'une petite fraction de l'atmosphère ?",
          answer: "Parce que le CO2 absorbe et émet dans des bandes importantes du rayonnement infrarouge terrestre. Son effet radiatif dépend de ses propriétés spectrales et de sa concentration, pas seulement de sa proportion dans l'air."
        },
        exercises: [
          {
            question: "Dans quelle région du spectre la Terre émet-elle principalement son rayonnement thermique ?",
            answer: "Dans l'infrarouge thermique."
          },
          {
            question: "Les gaz à effet de serre empêchent-ils tout rayonnement de quitter la Terre ?",
            answer: "Non. Ils absorbent et émettent dans certaines bandes; une partie du rayonnement s'échappe vers l'espace, notamment depuis l'atmosphère."
          },
          {
            question: "Quelle différence fondamentale existe entre effet de serre naturel et renforcement anthropique de l'effet de serre ?",
            answer: "L'effet de serre naturel résulte des propriétés de l'atmosphère; son renforcement anthropique vient notamment de l'augmentation des concentrations de gaz à effet de serre due aux activités humaines."
          }
        ],
        sources: [
          {
            title: 'NASA — Climate and Earth’s Energy Budget',
            url: 'https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/'
          },
          {
            title: 'NASA — What Is Earth’s Atmosphere?',
            url: 'https://www.nasa.gov/general/what-is-earths-atmosphere/'
          },
          {
            title: 'GIEC — AR6, chapitre 7 : Earth’s Energy Budget and its Changes Through Time',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          }
        ]
      }
    },
    {
      id: 'forcage-radiatif-retroactions',
      title: 'Forçage radiatif, rétroactions et réponse du climat',
      field: 'Sciences du climat · Perturbations du bilan énergétique et réponse du système climatique',
      summary: "Définir le forçage radiatif et le forçage radiatif effectif, comprendre le signe positif ou négatif et distinguer forçage, rétroaction et évolution de température.",
      lesson: {
        sections: [
          "Le forçage radiatif décrit une modification du flux radiatif net, généralement exprimée en W/m², causée par un facteur climatique tel qu'une variation des gaz à effet de serre, des aérosols ou de l'irradiance solaire. Avec la convention courante au sommet de l'atmosphère, un changement positif du flux net descendant tend à réchauffer le système et un changement négatif tend à le refroidir. La définition précise dépend du niveau de référence et de la méthode de calcul.",
          "Le forçage radiatif effectif (ERF) évalué par le GIEC correspond à la modification du flux radiatif net au sommet de l'atmosphère après les ajustements rapides du système à la perturbation, mais en excluant la réponse radiative liée au changement de température moyenne de surface. Il est donc plus complet que le forçage instantané pour comparer de nombreux agents climatiques, notamment les gaz à effet de serre et les aérosols.",
          "Une rétroaction climatique est un processus déclenché par une évolution initiale et qui modifie cette évolution. Une rétroaction positive amplifie la perturbation initiale; une rétroaction négative la réduit. Par exemple, le réchauffement augmente généralement la quantité de vapeur d'eau atmosphérique, ce qui renforce l'effet de serre et constitue une rétroaction positive. La diminution de la neige et de la glace peut réduire l'albédo et amplifier l'absorption solaire. Les nuages ont des effets radiatifs complexes qui dépendent notamment de leur altitude, de leur épaisseur et de leurs propriétés optiques.",
          "Un forçage radiatif ne donne pas, à lui seul, une hausse de température immédiate et universelle. La réponse dépend de la sensibilité climatique, des rétroactions, de la répartition géographique du forçage et de l'absorption de chaleur par l'océan. Il faut aussi distinguer les agents qui modifient le bilan énergétique de la variabilité interne du climat, laquelle peut produire des fluctuations temporaires sans constituer nécessairement un forçage externe durable."
        ],
        example: {
          statement: "Un calcul de modèle estime un forçage radiatif effectif de +1,5 W/m² pour une perturbation donnée. Que permet de conclure le signe de cette valeur ?",
          calculation: "Le signe est positif : selon la convention du flux net descendant, la perturbation augmente le bilan énergétique entrant net de 1,5 W/m² après les ajustements rapides retenus dans la définition de l'ERF.",
          answer: "Cette perturbation exerce une influence réchauffante sur le système climatique. La valeur seule ne permet pas de calculer directement une hausse précise de température sans connaître la réponse climatique et les hypothèses du modèle."
        },
        exercise: {
          question: "Quelle est la différence entre un forçage radiatif positif et une rétroaction positive ?",
          answer: "Un forçage est une perturbation initiale du bilan énergétique; une rétroaction est un processus de réponse au changement qui amplifie ou réduit celui-ci. Le mot positif ne désigne donc pas le même rôle causal dans les deux expressions."
        },
        exercises: [
          {
            question: "Dans quelle unité le forçage radiatif est-il exprimé ?",
            answer: "En watts par mètre carré (W/m²)."
          },
          {
            question: "Une rétroaction négative signifie-t-elle nécessairement que le climat se refroidit ?",
            answer: "Non. Elle signifie qu'elle s'oppose au changement initial; le système peut continuer à se réchauffer si le forçage et les autres processus dominent."
          },
          {
            question: "Pourquoi ne peut-on pas déduire directement une température finale d'une seule valeur de forçage ?",
            answer: "Parce qu'il faut également tenir compte de la sensibilité climatique, des rétroactions, de l'inertie thermique des océans et de la durée de la perturbation."
          }
        ],
        sources: [
          {
            title: 'GIEC — AR6, chapitre 7, section 7.3 : Effective Radiative Forcing',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'GIEC — AR6, chapitre 2 : Changing State of the Climate System',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-2/'
          },
          {
            title: 'GIEC — Glossary: Radiative Forcing',
            url: 'https://ipcc-data.org/guidelines/pages/glossary/glossary_r.html'
          }
        ]
      }
    }
  ]
},


{
  id: 'forçage-radiatif',
  title: 'Le forçage radiatif',
  note: "Quatre chapitres consacrés aux fondements physiques du forçage radiatif, à ses mécanismes atmosphériques, aux principaux agents naturels et anthropiques et à ses conséquences sur le système climatique. Les valeurs numériques sont précisées comme des estimations lorsqu'elles dépendent de la période de référence, des observations ou des méthodes d'évaluation.",
  chapters: [
    {
      id: 'fondements-forcage-radiatif',
      title: 'Les fondements physiques du forçage radiatif',
      field: 'Physique de l’atmosphère · Bilan énergétique et flux radiatifs',
      summary: "Définir le forçage radiatif, comprendre la différence entre flux radiatif et forçage, établir les conventions de signe et relier une perturbation énergétique à la réponse du système climatique.",
      lesson: {
        sections: [
          "Le forçage radiatif caractérise une perturbation du bilan énergétique du système climatique provoquée par une modification d'un facteur externe ou par un changement de composition ou de propriétés du système. Parmi les causes possibles figurent l'augmentation du dioxyde de carbone atmosphérique, les variations de l'irradiance solaire, les aérosols et les changements d'albédo associés à l'utilisation des terres. Dans les évaluations climatiques, le forçage est généralement exprimé en watts par mètre carré (W/m²). Il représente un changement de flux énergétique par unité de surface et ne constitue pas directement une mesure de température.",
          "Le bilan radiatif de la Terre résulte principalement de l'énergie solaire absorbée et du rayonnement infrarouge émis vers l'espace. Une perturbation positive du flux radiatif net descendant au sommet de l'atmosphère tend à augmenter l'énergie accumulée par le système Terre. Une perturbation négative tend au contraire à réduire cette accumulation. La convention de signe doit toujours être précisée, car certains calculs définissent le flux net avec une convention opposée.",
          "Il faut distinguer le flux radiatif absolu de son changement. Un flux de 240 W/m² n'est pas, à lui seul, un forçage radiatif : il peut représenter un flux énergétique existant. Le forçage correspond à la différence entre un état de référence et un état perturbé, selon une définition et une méthode données. Cette distinction est essentielle pour éviter de confondre l'énergie totale transportée par le rayonnement et la perturbation du bilan provoquée par un changement atmosphérique.",
          "Le forçage radiatif classique peut être évalué avant que le système climatique ait répondu par un changement de température de surface. Le forçage radiatif effectif, ou ERF, prend également en compte certains ajustements rapides de l'atmosphère, des nuages et de la surface, tout en excluant la réponse radiative associée au changement de température moyenne de surface. Cette distinction est particulièrement utile pour comparer des agents climatiques dont les effets ne se limitent pas à une modification directe de l'absorption infrarouge."
        ],
        example: {
          statement: "Un modèle estime que le flux radiatif net descendant au sommet de l'atmosphère passe de 0,2 W/m² à 1,0 W/m² entre deux états comparables. Quel est le changement de flux selon cette convention ?",
          calculation: "ΔF = F_final - F_initial = 1,0 - 0,2 = +0,8 W/m².",
          answer: "Le changement est de +0,8 W/m². Avec la convention du flux net descendant, ce changement positif correspond à une perturbation énergétique qui favorise l'accumulation d'énergie dans le système climatique, toutes choses égales par ailleurs."
        },
        exercise: {
          question: "Pourquoi un forçage radiatif exprimé en W/m² ne permet-il pas, à lui seul, de déterminer la température finale de la Terre ?",
          answer: "Parce que la réponse en température dépend aussi de la sensibilité climatique, des rétroactions, de la répartition du forçage, de la durée de la perturbation et de l'inertie thermique des océans."
        },
        exercises: [
          {
            question: "Quelle est l'unité couramment utilisée pour exprimer le forçage radiatif ?",
            answer: "Le watt par mètre carré (W/m²)."
          },
          {
            question: "Quelle est la différence entre un flux radiatif et un forçage radiatif ?",
            answer: "Le flux radiatif représente une quantité d'énergie transférée par unité de surface et de temps. Le forçage représente une modification du bilan radiatif entre un état de référence et un état perturbé."
          },
          {
            question: "Avec la convention du flux net descendant, que signifie un forçage radiatif positif ?",
            answer: "Il indique une perturbation qui favorise une augmentation de l'énergie retenue par le système climatique, avant prise en compte de l'ensemble de sa réponse en température."
          }
        ],
        sources: [
          {
            title: 'GIEC — AR6, chapitre 7 : Earth’s Energy Budget and its Changes Through Time',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'GIEC — AR6, chapitre 1 : Framing, Context, and Methods',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/'
          },
          {
            title: 'NASA — Climate and Earth’s Energy Budget',
            url: 'https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/'
          }
        ]
      }
    },
    {
      id: 'gaz-effet-serre-forcage',
      title: 'Les gaz à effet de serre et le forçage radiatif',
      field: 'Physique atmosphérique · Spectroscopie moléculaire et transfert radiatif',
      summary: "Expliquer comment les propriétés spectrales des gaz atmosphériques produisent un forçage radiatif, pourquoi le CO2 est un agent majeur du changement climatique actuel et comment distinguer absorption, émission et réchauffement.",
      lesson: {
        sections: [
          "Les gaz à effet de serre influencent le bilan radiatif en absorbant et en émettant le rayonnement infrarouge dans des bandes spectrales déterminées par leur structure moléculaire. La vapeur d'eau, le dioxyde de carbone, le méthane, le protoxyde d'azote et l'ozone contribuent à cet effet, mais leurs propriétés spectrales et leurs concentrations diffèrent. L'azote moléculaire et l'oxygène moléculaire, qui constituent l'essentiel de l'air sec, n'absorbent pas directement le rayonnement infrarouge terrestre de la même manière que les principaux gaz à effet de serre.",
          "Lorsque la concentration d'un gaz à effet de serre augmente, l'atmosphère devient généralement plus opaque à certaines longueurs d'onde infrarouges. Le rayonnement s'échappant vers l'espace provient alors, dans les bandes concernées, de niveaux atmosphériques différents. Dans la troposphère, où la température diminue généralement avec l'altitude, une émission provenant d'un niveau plus élevé est souvent associée à une température plus basse. Le rayonnement sortant peut donc diminuer initialement, créant un déséquilibre énergétique qui favorise le réchauffement jusqu'à ce que le système atteigne un nouvel équilibre.",
          "Le forçage radiatif du dioxyde de carbone augmente approximativement avec le logarithme de sa concentration dans les évaluations usuelles du climat. Cette relation découle notamment des propriétés d'absorption du CO2 et de la manière dont les bandes spectrales contribuent au transfert radiatif. Une approximation couramment utilisée pour le CO2 est ΔF ≈ 5,35 × ln(C/C0) W/m², où C est la concentration finale et C0 la concentration de référence. Cette formule est une approximation empirique pour les conditions atmosphériques terrestres; elle ne doit pas être appliquée sans vérifier le contexte et la définition du forçage.",
          "La vapeur d'eau joue un rôle important dans l'effet de serre naturel et dans les rétroactions climatiques. Sa concentration atmosphérique dépend fortement de la température et du cycle hydrologique. À mesure que l'air se réchauffe, il peut généralement contenir davantage de vapeur d'eau, ce qui renforce l'effet de serre. Le CO2 anthropique, en revanche, est un moteur majeur du réchauffement actuel parce que les activités humaines augmentent durablement sa concentration atmosphérique. Il est donc essentiel de distinguer un agent qui impose une perturbation durable du bilan énergétique d'une rétroaction qui amplifie la réponse climatique."
        ],
        example: {
          statement: "On utilise l'approximation ΔF ≈ 5,35 × ln(C/C0) pour estimer le forçage dû au CO2. La concentration passe de 280 ppm à 560 ppm. Quel est le forçage approximatif selon cette formule ?",
          calculation: "C/C0 = 560/280 = 2. ΔF ≈ 5,35 × ln(2) ≈ 5,35 × 0,693 ≈ 3,71 W/m².",
          answer: "Le forçage approximatif est de +3,7 W/m² selon cette formule. Il s'agit d'une estimation du forçage associé au doublement du CO2 dans le cadre de l'approximation donnée, et non d'une hausse directe de température de 3,7 °C."
        },
        exercise: {
          question: "Pourquoi le doublement de la concentration de CO2 ne signifie-t-il pas que la température moyenne de la Terre double ?",
          answer: "La concentration du gaz, le forçage radiatif et la température sont des grandeurs différentes. La température dépend du forçage et de la réponse du système climatique, notamment des rétroactions et de l'inertie thermique des océans."
        },
        exercises: [
          {
            question: "Quel mécanisme moléculaire permet au CO2 de contribuer à l'effet de serre ?",
            answer: "Ses modes moléculaires lui permettent d'absorber et d'émettre le rayonnement infrarouge dans des bandes spectrales particulières."
          },
          {
            question: "Que signifie l'approximation logarithmique du forçage du CO2 ?",
            answer: "Dans son domaine d'application, le forçage augmente approximativement en proportion du logarithme du rapport entre la concentration finale et la concentration de référence."
          },
          {
            question: "Pourquoi la vapeur d'eau est-elle souvent décrite comme une rétroaction positive du réchauffement actuel ?",
            answer: "Parce que le réchauffement augmente généralement la quantité de vapeur d'eau dans l'atmosphère, ce qui renforce l'effet de serre et amplifie la perturbation initiale."
          }
        ],
        sources: [
          {
            title: 'GIEC — AR6, chapitre 7 : Earth’s Energy Budget and its Changes Through Time',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'GIEC — AR6, chapitre 6 : Short-lived Climate Forcers',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-6/'
          },
          {
            title: 'OpenStax — University Physics Volume 3, 6.1 Blackbody Radiation',
            url: 'https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation'
          }
        ]
      }
    },
    {
      id: 'aerosols-albedo-forcage',
      title: 'Les aérosols, l’albédo et les autres agents de forçage',
      field: 'Climatologie · Aérosols atmosphériques, nuages, surfaces et rayonnement solaire',
      summary: "Analyser les effets radiatifs des aérosols, des changements d'albédo et de l'irradiance solaire, en distinguant les effets directs, les effets passant par les nuages et les incertitudes d'évaluation.",
      lesson: {
        sections: [
          "Les aérosols sont de petites particules solides ou liquides en suspension dans l'atmosphère. Leur effet radiatif dépend de leur taille, de leur composition chimique, de leur forme, de leur distribution verticale et des longueurs d'onde considérées. Certains aérosols diffusent efficacement le rayonnement solaire et augmentent la quantité de lumière renvoyée vers l'espace, produisant généralement un effet refroidissant. D'autres, comme le carbone suie, absorbent une partie du rayonnement solaire et peuvent réchauffer l'atmosphère. Le signe du forçage des aérosols dépend donc de leur nature et de leurs interactions avec le rayonnement et les nuages.",
          "Les aérosols peuvent aussi modifier les propriétés des nuages en agissant comme noyaux de condensation ou de glace. Ils peuvent influencer le nombre et la taille des gouttelettes, l'épaisseur optique des nuages, leur durée de vie et leurs précipitations. Ces effets indirects sont complexes et constituent une source importante d'incertitude dans les estimations du forçage anthropique. Ils ne doivent pas être résumés par une valeur universelle applicable à toutes les régions et à tous les types d'aérosols.",
          "L'albédo mesure la fraction du rayonnement incident qui est réfléchie par une surface ou par un système. La neige et la glace ont généralement un albédo élevé, tandis que les océans et de nombreuses surfaces sombres absorbent davantage de rayonnement solaire. La diminution de la couverture neigeuse ou glaciaire expose souvent des surfaces plus sombres, ce qui augmente l'absorption solaire et constitue une rétroaction positive au réchauffement. Les changements d'utilisation des terres peuvent également modifier l'albédo et les flux d'énergie, mais leur effet climatique global dépend du lieu et des changements associés à l'évapotranspiration, à la rugosité et au stockage du carbone.",
          "L'irradiance solaire varie naturellement au cours du temps. Ces variations modifient l'énergie reçue par la Terre et peuvent donc produire un forçage radiatif. Cependant, l'évaluation de l'évolution climatique récente montre que l'augmentation des gaz à effet de serre d'origine humaine est le principal moteur du réchauffement global observé depuis l'ère préindustrielle. Les variations solaires et les aérosols doivent être pris en compte dans le bilan complet, mais ils ne permettent pas d'expliquer seuls la tendance récente observée."
        ],
        example: {
          statement: "Un modèle simplifié indique qu'une modification des propriétés d'une surface fait passer son albédo de 0,20 à 0,30. Le rayonnement solaire incident moyen est de 200 W/m². Quelle est la variation du flux réfléchi, si le flux incident reste constant ?",
          calculation: "Flux réfléchi initial = 0,20 × 200 = 40 W/m². Flux réfléchi final = 0,30 × 200 = 60 W/m². Variation = 60 - 40 = +20 W/m².",
          answer: "Le flux réfléchi augmente de 20 W/m². Dans ce modèle simplifié, l'absorption solaire diminue d'autant, toutes choses égales par ailleurs. Le calcul ne représente pas à lui seul l'effet climatique complet d'un changement réel de surface."
        },
        exercise: {
          question: "Pourquoi est-il incorrect d'affirmer que tous les aérosols refroidissent le climat ?",
          answer: "Parce que certains aérosols diffusent le rayonnement solaire et tendent à refroidir, tandis que d'autres l'absorbent et peuvent réchauffer l'atmosphère. Leurs interactions avec les nuages compliquent également le bilan."
        },
        exercises: [
          {
            question: "Quel est généralement l'effet radiatif d'une augmentation de l'albédo planétaire, toutes choses égales par ailleurs ?",
            answer: "Elle augmente la réflexion du rayonnement solaire et réduit l'énergie solaire absorbée, ce qui tend à refroidir le système."
          },
          {
            question: "Pourquoi le carbone suie peut-il produire un effet différent de celui de nombreux aérosols diffusants ?",
            answer: "Parce qu'il absorbe efficacement le rayonnement solaire et peut réchauffer l'atmosphère, tandis que de nombreux aérosols diffusants renvoient davantage de rayonnement vers l'espace."
          },
          {
            question: "Pourquoi les effets des aérosols sur les nuages sont-ils difficiles à quantifier ?",
            answer: "Parce qu'ils dépendent des propriétés des particules, des conditions atmosphériques, de la microphysique des nuages et des interactions entre nuages, précipitations et circulation atmosphérique."
          }
        ],
        sources: [
          {
            title: 'GIEC — AR6, chapitre 6 : Short-lived Climate Forcers',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-6/'
          },
          {
            title: 'GIEC — AR6, chapitre 7 : Earth’s Energy Budget and its Changes Through Time',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'NASA — Climate and Earth’s Energy Budget',
            url: 'https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/'
          }
        ]
      }
    },
    {
      id: 'reponse-climatique-forcage',
      title: 'La réponse climatique au forçage radiatif',
      field: 'Climatologie physique · Sensibilité climatique, rétroactions et inertie thermique',
      summary: "Relier le forçage à la réponse en température, distinguer les rétroactions positives et négatives et comprendre pourquoi le système climatique réagit sur des échelles de temps différentes.",
      lesson: {
        sections: [
          "Un forçage radiatif modifie le bilan énergétique du système climatique, mais la réponse en température dépend de la façon dont le système réagit à cette perturbation. À mesure que la surface et la troposphère se réchauffent, elles émettent davantage de rayonnement infrarouge. Cette augmentation du rayonnement sortant constitue une réponse stabilisatrice du système. Le nouvel équilibre est atteint lorsque le bilan énergétique est de nouveau compatible avec une accumulation nette d'énergie proche de zéro, en tenant compte des échanges et des variations internes.",
          "La sensibilité climatique à l'équilibre désigne le réchauffement global moyen à long terme associé à un doublement de la concentration atmosphérique de CO2, après que le système climatique a atteint un nouvel équilibre. Elle ne se confond ni avec le forçage radiatif du doublement du CO2 ni avec le réchauffement observé sur une période courte. Son estimation dépend notamment des rétroactions de la vapeur d'eau, du gradient thermique vertical, des nuages, de la neige et de la glace, ainsi que de la compréhension des climats passés et des observations modernes.",
          "Les rétroactions positives amplifient une réponse initiale, alors que les rétroactions négatives la réduisent. La rétroaction de la vapeur d'eau et la rétroaction glace-albédo sont généralement positives dans le climat actuel. L'augmentation de l'émission infrarouge lorsque la température augmente constitue une réponse stabilisatrice majeure. Les rétroactions des nuages peuvent à la fois renforcer et atténuer certaines composantes du changement climatique; leur effet global dépend des variations de types, d'altitude et de propriétés des nuages.",
          "L'océan absorbe et redistribue une grande partie de l'excès d'énergie du système climatique. Cette capacité thermique retarde la réponse de la température de surface à un forçage donné. Le climat peut donc continuer à évoluer même lorsque les concentrations atmosphériques cessent d'augmenter, selon la durée de la perturbation et l'état du système. Les réponses transitoires et les réponses à l'équilibre doivent être distinguées pour interpréter les projections climatiques.",
          "Le forçage radiatif constitue ainsi un outil essentiel pour comparer les influences des gaz à effet de serre, des aérosols, des changements d'albédo et des variations solaires. Il ne remplace toutefois pas les modèles climatiques complets, qui doivent représenter les transferts radiatifs, la circulation atmosphérique, les océans, les nuages, le cycle de l'eau et les rétroactions entre composantes du système."
        ],
        example: {
          statement: "Une perturbation entraîne un forçage radiatif positif de +2 W/m². Le système climatique absorbe davantage d'énergie qu'il n'en renvoie initialement vers l'espace. Quelle évolution qualitative est attendue ?",
          calculation: "Déséquilibre énergétique = flux net entrant - flux net sortant. Si le forçage crée un déséquilibre positif, l'énergie du système augmente. Le réchauffement accroît ensuite l'émission infrarouge et déclenche d'autres ajustements.",
          answer: "Le système tend à se réchauffer. L'ampleur et la vitesse du réchauffement ne peuvent pas être déterminées à partir du seul forçage de +2 W/m²; elles dépendent notamment de la sensibilité climatique, des rétroactions et de l'absorption de chaleur par l'océan."
        },
        exercise: {
          question: "Pourquoi la température moyenne de surface peut-elle continuer à évoluer après la stabilisation d'un forçage radiatif ?",
          answer: "Parce que les océans et les autres composantes du système climatique possèdent une inertie thermique. Les échanges de chaleur internes se poursuivent et la température peut mettre du temps à approcher son nouvel équilibre."
        },
        exercises: [
          {
            question: "Qu'est-ce que la sensibilité climatique à l'équilibre ?",
            answer: "C'est le réchauffement global moyen à long terme associé à un doublement de la concentration atmosphérique de CO2, une fois le système climatique proche de son nouvel équilibre."
          },
          {
            question: "Quel rôle joue l'augmentation du rayonnement infrarouge émis lorsque la Terre se réchauffe ?",
            answer: "Elle constitue une réponse stabilisatrice : un système plus chaud émet généralement davantage d'infrarouge vers l'espace, ce qui contribue à réduire le déséquilibre énergétique."
          },
          {
            question: "Pourquoi faut-il distinguer la réponse climatique transitoire de la réponse à l'équilibre ?",
            answer: "Parce que la réponse transitoire est influencée par l'inertie thermique des océans et par l'évolution du forçage, tandis que la réponse à l'équilibre décrit l'état à long terme après l'ajustement du système."
          }
        ],
        sources: [
          {
            title: 'GIEC — AR6, chapitre 7 : Earth’s Energy Budget and its Changes Through Time',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'GIEC — AR6, chapitre 4 : Future Global Climate',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/'
          },
          {
            title: 'NASA — Climate and Earth’s Energy Budget',
            url: 'https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/'
          }
        ]
      }
    }
  ]
},

// BRANCHE CYCLE DU CARBONE

  {
    id: 'cycle-carbone',
    title: 'Le cycle du carbone et les gaz à effet de serre',
    note: 'Six chapitres sur les réservoirs et les unités du carbone, le cycle rapide, le cycle lent, l’effet de serre, les principaux gaz à effet de serre et la perturbation d’origine humaine. Les valeurs chiffrées sont des estimations issues de synthèses scientifiques (IPCC AR6, Global Carbon Budget 2025, budgets mondiaux du méthane et du protoxyde d’azote) ; elles comportent des incertitudes et sont révisées régulièrement.',
    chapters: [
      {
        id: 'reservoirs-flux-unites',
        title: 'Les réservoirs de carbone, les flux et les unités',
        field: 'Sciences de la Terre · Biogéochimie du carbone · Réservoirs, flux et unités de mesure',
        summary: 'Comprendre où se trouve le carbone sur Terre, comment on décrit ses échanges et comment convertir ppm, GtC et GtCO₂.',
        lesson: {
          sections: [
            'Le carbone est l’élément de base des molécules organiques (glucides, lipides, protéines, acides nucléiques) et un constituant important des combustibles fossiles. Le cycle du carbone désigne l’ensemble de ses échanges entre l’atmosphère, l’océan, les sols et la végétation, les roches et l’intérieur de la Terre. OpenStax (Biology 2e) propose de l’étudier comme deux sous-cycles interconnectés : l’un concerne l’échange rapide de carbone entre les organismes vivants, l’autre le cycle à long terme à travers les processus géologiques.',
            'Un réservoir est un stock de carbone ; un flux est la quantité de carbone qui passe d’un réservoir à un autre pendant une durée donnée. OpenStax cite parmi les grands réservoirs l’atmosphère, les eaux liquides (surtout les océans), les sédiments océaniques, les sols, les sédiments continentaux (y compris les combustibles fossiles) et l’intérieur de la Terre. Selon la NASA, la plus grande partie du carbone terrestre, environ 65 500 milliards de tonnes, est stockée dans les roches ; le reste se trouve dans l’océan, l’atmosphère, les plantes, les sols et les combustibles fossiles.',
            'Les roches carbonées appartiennent à deux familles. D’après la NASA, environ 80 % sont des roches carbonatées comme le calcaire, formées par la cimentation de coquilles et de sédiments ; les quelque 20 % restants contiennent du carbone organique issu d’êtres vivants, enfoui dans des boues que la chaleur et la pression transforment en roches sédimentaires comme le schiste. Dans des cas particuliers, lorsque la matière végétale morte s’accumule plus vite qu’elle ne se décompose, ces couches organiques donnent du pétrole, du charbon ou du gaz naturel. OpenStax précise que les combustibles fossiles sont les restes de plantes décomposés sans oxygène, qu’ils demandent des millions d’années pour se former et qu’ils sont non renouvelables, car leur consommation dépasse largement leur vitesse de formation.',
            'Les unités doivent être précisées à chaque fois. La concentration atmosphérique de CO₂ s’exprime en ppm (micromole de CO₂ par mole d’air sec). Les flux de carbone s’expriment en GtC par an (milliards de tonnes de carbone) et les émissions en GtCO₂ par an. Le Global Carbon Budget utilise 1 ppm de CO₂ atmosphérique ≈ 2,124 GtC (en supposant une atmosphère bien mélangée sur l’année) et 1 GtC ≈ 3,664 GtCO₂ (rapport des masses molaires du CO₂ et du carbone, voisin de 44/12). Une même quantité de carbone pèse donc environ 3,7 fois plus lorsqu’elle est exprimée sous forme de CO₂.',
            'Les échelles de temps couvrent plusieurs ordres de grandeur. D’après le Global Carbon Budget, les échanges entre atmosphère, océan et biosphère terrestre vont de moins d’une journée (photosynthèse, respiration) à des millénaires, tandis que les échanges avec les réservoirs géologiques sont encore plus lents. Les émissions humaines viennent s’ajouter à ce cycle naturel actif : c’est cette perturbation que mesure le bilan mondial du carbone étudié au dernier chapitre.'
          ],
          example: {
            statement: 'En 2024, les émissions mondiales de CO₂ fossile sont estimées à 10,3 GtC par an et la croissance du carbone atmosphérique à 7,9 GtC par an (Global Carbon Budget 2025). Exprimer ces deux flux en GtCO₂, puis la croissance atmosphérique en ppm.',
            calculation: '10,3 × 3,664 ≈ 37,7 GtCO₂ ; 7,9 × 3,664 ≈ 28,9 GtCO₂ ; 7,9 ÷ 2,124 ≈ 3,7 ppm.',
            answer: 'Environ 37,7 GtCO₂ d’émissions fossiles (la publication indique 37,8 ± 1,8 GtCO₂ à partir de valeurs non arrondies), environ 28,9 GtCO₂ restant dans l’atmosphère, soit une hausse d’environ 3,7 ppm (la publication indique 3,73 ppm). Les petits écarts viennent des arrondis.'
          },
          exercise: {
            question: 'Pourquoi ne peut-on pas comparer directement 10 GtC et 10 GtCO₂ ?',
            answer: 'Parce que GtC mesure la masse du seul carbone, alors que GtCO₂ mesure la masse du dioxyde de carbone entier. 1 GtC correspond à environ 3,664 GtCO₂ : 10 GtC valent donc environ 36,6 GtCO₂.'
          },
          exercises: [
            {
              question: 'Selon la NASA, où se trouve la majeure partie du carbone terrestre ?',
              answer: 'Dans les roches (environ 65 500 milliards de tonnes de carbone).'
            },
            {
              question: 'Quels réservoirs de carbone OpenStax cite-t-il ?',
              answer: 'L’atmosphère, les eaux liquides (surtout les océans), les sédiments océaniques, les sols, les sédiments continentaux (y compris les combustibles fossiles) et l’intérieur de la Terre.'
            },
            {
              question: 'Que signifie « ppm » pour le CO₂ atmosphérique ?',
              answer: 'Partie par million : une micromole de CO₂ pour une mole d’air sec (fraction molaire dans l’air sec).'
            },
            {
              question: 'Par quel facteur multiplie-t-on une valeur en GtC pour obtenir des GtCO₂ ?',
              answer: 'Par environ 3,664, rapport des masses molaires du CO₂ et du carbone.'
            }
          ],
          sources: [
            { title: 'OpenStax Biology 2e — 46.3 Biogeochemical Cycles', url: 'https://openstax.org/books/biology-2e/pages/46-3-biogeochemical-cycles' },
            { title: 'NASA — The Carbon Cycle', url: 'https://science.nasa.gov/earth/climate-change/the-carbon-cycle/' },
            { title: 'Friedlingstein et al. (2026) — Global Carbon Budget 2025, Earth System Science Data', url: 'https://essd.copernicus.org/articles/18/3211/2026/' }
          ]
        }
      },
      {
        id: 'cycle-rapide',
        title: 'Le cycle rapide : photosynthèse, respiration et échanges avec l’océan',
        field: 'Biologie et écologie · Cycle biologique du carbone · Échelles de temps liées à la durée de vie des organismes',
        summary: 'Comprendre comment le carbone circule entre atmosphère, êtres vivants et océan, et pourquoi ce cycle n’est pas fermé à l’échelle des décennies.',
        lesson: {
          sections: [
            'Le cycle rapide, ou cycle biologique, repose sur l’échange de carbone entre autotrophes et hétérotrophes. Les autotrophes (plantes, algues, phytoplancton, certaines bactéries) utilisent le CO₂ comme matière première pour fabriquer des composés organiques riches en énergie, comme le glucose ; les hétérotrophes obtiennent leur carbone en consommant de la matière organique. La photosynthèse oxygénique se résume par 6 CO₂ + 6 H₂O + énergie lumineuse → C₆H₁₂O₆ + 6 O₂ ; la respiration aérobie correspond à la réaction inverse, qui libère de l’énergie utilisable par la cellule et renvoie du CO₂.',
            'D’après la NASA, les plantes et le phytoplancton sont les principaux acteurs du cycle rapide, et le temps de transit du carbone y est de l’ordre de la durée de vie des organismes. Les liaisons des chaînes carbonées contiennent beaucoup d’énergie, libérée lorsqu’elles sont rompues : c’est pourquoi le carbone organique sert de carburant à tous les êtres vivants. La NASA compare les flux annuels : environ 10¹³ à 10¹⁴ g de carbone pour le cycle lent, contre 10¹⁶ à 10¹⁷ g pour le cycle rapide, soit un cycle rapide de l’ordre de 100 à 10 000 fois plus intense.',
            'Le cycle rapide est visible dans les variations saisonnières du CO₂ atmosphérique. Dans l’hémisphère Nord, en hiver, peu de plantes terrestres poussent et beaucoup se décomposent, et la concentration en CO₂ augmente ; au printemps et en été, la végétation reprend et les grandes masses continentales boréales prélèvent du carbone dans l’atmosphère, ce qui fait baisser la concentration. Cette oscillation annuelle se superpose à la hausse de long terme mesurée à Mauna Loa.',
            'L’océan est le second grand acteur du cycle rapide. Selon OpenStax, le CO₂ atmosphérique se dissout dans l’eau, puis réagit avec elle pour former de l’acide carbonique (H₂CO₃), qui se dissocie en ions bicarbonate (HCO₃⁻) et carbonate (CO₃²⁻) : CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2 H⁺ + CO₃²⁻. Le phytoplancton prélève aussi du CO₂ par photosynthèse. D’après la NASA, le vent, les courants et la température contrôlent la vitesse d’absorption ; avant l’ère industrielle, l’océan rejetait du CO₂ en équilibre avec le carbone reçu par l’altération des roches, alors que depuis la hausse de la concentration atmosphérique il en absorbe davantage qu’il n’en rejette.',
            'Le cycle rapide n’est pas fermé à l’échelle des décennies : les changements d’usage des terres déplacent du carbone de la biosphère vers l’atmosphère. Pour la période 2015–2024, le Global Carbon Budget estime les émissions de la déforestation à environ 1,9 GtC par an, compensées aux deux tiers environ par la séquestration due au reboisement, au boisement et à la repousse forestière dans les cycles de culture itinérante (environ 1,3 GtC par an). Avec la récolte de bois, le drainage et les feux de tourbières, le bilan net des usages des terres est de 1,4 ± 0,7 GtC par an.'
          ],
          example: {
            statement: 'Pour 2015–2024, la déforestation émet environ 1,9 GtC par an et le reboisement, le boisement et la repousse forestière séquestrent environ 1,3 GtC par an. Quelle part des émissions de la déforestation est compensée ?',
            calculation: '1,3 ÷ 1,9 ≈ 0,68, soit environ 68 %. Écart entre les deux flux : 1,9 − 1,3 = 0,6 GtC par an.',
            answer: 'Environ 68 %, soit à peu près les deux tiers. L’écart de 0,6 GtC par an ne donne pas à lui seul le bilan net des usages des terres (1,4 ± 0,7 GtC par an), car d’autres émissions s’y ajoutent : récolte de bois, drainage et feux de tourbières.'
          },
          exercise: {
            question: 'Pourquoi la concentration de CO₂ atmosphérique varie-t-elle au cours de l’année dans l’hémisphère Nord ?',
            answer: 'Au printemps et en été, la photosynthèse de la végétation prélève du CO₂ et sa concentration baisse ; en automne et en hiver, la décomposition l’emporte, peu de plantes poussent et la concentration remonte.'
          },
          exercises: [
            {
              question: 'Quel est le rôle des autotrophes dans le cycle du carbone ?',
              answer: 'Ils fixent le carbone du CO₂ dans des molécules organiques, comme le glucose, grâce à la photosynthèse.'
            },
            {
              question: 'Que devient le CO₂ lorsqu’il se dissout dans l’eau de mer, selon OpenStax ?',
              answer: 'Il réagit avec l’eau pour former de l’acide carbonique (H₂CO₃), qui donne des ions bicarbonate et carbonate.'
            },
            {
              question: 'Comment le flux net de CO₂ entre océan et atmosphère a-t-il changé depuis l’ère industrielle, selon la NASA ?',
              answer: 'Avant l’ère industrielle, l’océan rejetait du CO₂ en équilibre avec l’apport de l’altération des roches ; depuis la hausse de la concentration atmosphérique, il absorbe davantage de carbone qu’il n’en rejette.'
            }
          ],
          sources: [
            { title: 'OpenStax Biology 2e — 46.3 Biogeochemical Cycles', url: 'https://openstax.org/books/biology-2e/pages/46-3-biogeochemical-cycles' },
            { title: 'NASA — The Carbon Cycle', url: 'https://science.nasa.gov/earth/climate-change/the-carbon-cycle/' },
            { title: 'NASA Earth Observatory — The Carbon Cycle', url: 'https://www.earthobservatory.nasa.gov/features/CarbonCycle' },
            { title: 'Friedlingstein et al. (2026) — Global Carbon Budget 2025, Earth System Science Data', url: 'https://essd.copernicus.org/articles/18/3211/2026/' }
          ]
        }
      },
      {
        id: 'cycle-lent',
        title: 'Le cycle lent : altération, sédimentation, volcanisme et combustibles fossiles',
        field: 'Géologie · Cycle géologique du carbone · Échelles de milliers à millions d’années',
        summary: 'Comprendre comment le carbone passe de l’atmosphère aux roches et inversement, pourquoi ce cycle agit comme un thermostat et pourquoi il ne peut pas compenser les émissions actuelles.',
        lesson: {
          sections: [
            'Selon la NASA, le passage du carbone de l’atmosphère vers les roches commence avec la pluie. Le CO₂ atmosphérique se combine à l’eau pour former de l’acide carbonique, un acide faible, qui attaque les roches en surface : c’est l’altération chimique. Elle libère des ions, notamment du calcium, que les rivières transportent vers l’océan. Dans l’océan, des organismes les utilisent avec les ions bicarbonate pour fabriquer du carbonate de calcium, constituant principal des coquilles. Un bilan simplifié classique de l’altération d’un silicate calcique suivie de la précipitation du carbonate s’écrit CaSiO₃ + 2 CO₂ + H₂O → Ca²⁺ + 2 HCO₃⁻ + SiO₂, puis Ca²⁺ + 2 HCO₃⁻ → CaCO₃ + CO₂ + H₂O.',
            'Avec le temps, les couches de coquilles et de sédiments se cimentent et forment des roches comme le calcaire, qui stockent le carbone dans la pierre. Du carbone organique est aussi enfoui dans des boues devenues roches sédimentaires. Le carbone qui circule dans ce cycle lent met, selon la NASA, de 100 à 200 millions d’années pour se déplacer entre roches, sols, océan et atmosphère, et seulement 10 à 100 millions de tonnes de carbone par an y transitent, soit 10¹³ à 10¹⁴ g.',
            'Le carbone retourne à l’atmosphère par le volcanisme. D’après la NASA, lorsque deux plaques se rencontrent, l’une plonge sous l’autre ; la roche entraînée fond sous l’effet de la chaleur et de la pression, puis se recombine en minéraux silicatés en libérant du CO₂. Les volcans rejettent ce gaz dans l’atmosphère et recouvrent le sol de roche silicatée fraîche, ce qui relance l’altération. OpenStax mentionne aussi les éruptions et les sources hydrothermales volcaniques comme sources de CO₂. Aujourd’hui, la NASA estime que les volcans émettent entre 130 et 380 millions de tonnes de CO₂ par an.',
            'À l’échelle de centaines de milliers d’années, ce cycle agit comme un thermostat. D’après la NASA, il maintient un équilibre qui empêche que tout le carbone terrestre passe dans l’atmosphère, comme sur Vénus, ou qu’il soit entièrement stocké dans les roches. La NASA indique qu’il faut quelques centaines de milliers d’années pour rééquilibrer le cycle lent par l’altération chimique. Elle cite l’exemple du soulèvement de l’Himalaya, commencé il y a environ 50 millions d’années : il a fourni une grande quantité de roche fraîche, a accéléré l’altération et le piégeage de carbone, et a contribué à la baisse des températures et à la formation de calottes glaciaires. Le mécanisme de régulation généralement avancé est une rétroaction négative : un climat plus chaud et plus humide accélère l’altération des silicates, qui retire du CO₂.',
            'Les combustibles fossiles sont des produits du cycle lent : OpenStax rappelle qu’ils se forment en millions d’années à partir de restes de plantes décomposés sans oxygène. En les brûlant en quelques générations, les humains transfèrent vers l’atmosphère un carbone qui était hors du cycle rapide. La NASA estime que, sur des millénaires, l’océan absorbera jusqu’à 85 % du carbone supplémentaire issu des combustibles fossiles, mais lentement, car ce processus dépend du transport de l’eau de surface vers les profondeurs. Le cycle lent ne peut donc pas compenser à l’échelle humaine les émissions actuelles.'
          ],
          example: {
            statement: 'La NASA estime que les volcans émettent entre 130 et 380 millions de tonnes de CO₂ par an. Les émissions fossiles mondiales de 2024 sont estimées à 37,8 GtCO₂ (Global Carbon Budget 2025). Combien de fois les émissions fossiles dépassent-elles celles des volcans ?',
            calculation: '37,8 GtCO₂ = 37 800 millions de tonnes. 37 800 ÷ 380 ≈ 99 ; 37 800 ÷ 130 ≈ 291.',
            answer: 'Les émissions fossiles de 2024 sont environ 100 à 290 fois supérieures aux émissions volcaniques estimées par la NASA. Ces valeurs sont des ordres de grandeur, car les estimations volcaniques sont incertaines.'
          },
          exercise: {
            question: 'Pourquoi l’altération des roches ne peut-elle pas compenser rapidement les émissions humaines de CO₂ ?',
            answer: 'Parce qu’elle agit sur des centaines de milliers d’années (la NASA indique quelques centaines de milliers d’années pour rééquilibrer le cycle lent), alors que les émissions humaines s’accumulent en quelques décennies.'
          },
          exercises: [
            {
              question: 'Combien de temps faut-il, selon la NASA, pour rééquilibrer le cycle lent par l’altération chimique ?',
              answer: 'Quelques centaines de milliers d’années.'
            },
            {
              question: 'Quel processus géologique ramène du CO₂ dans l’atmosphère à partir des roches carbonées ?',
              answer: 'Le volcanisme, après la subduction et la fusion de roches contenant du carbone.'
            },
            {
              question: 'Pourquoi les combustibles fossiles sont-ils qualifiés de non renouvelables, selon OpenStax ?',
              answer: 'Parce que leur consommation dépasse largement leur vitesse de formation, qui se compte en millions d’années.'
            },
            {
              question: 'Quelle part du carbone supplémentaire issu des combustibles fossiles l’océan absorbera-t-il à terme, selon la NASA, et sur quelle durée ?',
              answer: 'Jusqu’à 85 %, sur des millénaires.'
            }
          ],
          sources: [
            { title: 'NASA — The Carbon Cycle', url: 'https://science.nasa.gov/earth/climate-change/the-carbon-cycle/' },
            { title: 'NASA Earth Observatory — The Carbon Cycle', url: 'https://www.earthobservatory.nasa.gov/features/CarbonCycle' },
            { title: 'OpenStax Biology 2e — 46.3 Biogeochemical Cycles', url: 'https://openstax.org/books/biology-2e/pages/46-3-biogeochemical-cycles' },
            { title: 'Friedlingstein et al. (2026) — Global Carbon Budget 2025, Earth System Science Data', url: 'https://essd.copernicus.org/articles/18/3211/2026/' }
          ]
        }
      },
      {
        id: 'effet-de-serre',
        title: 'L’effet de serre : mécanisme, histoire et rôle de la vapeur d’eau',
        field: 'Physique du climat · Rayonnement et bilan d’énergie · Du XIXᵉ siècle à aujourd’hui',
        summary: 'Comprendre pourquoi l’atmosphère réchauffe la surface, comment cette idée a été établie et pourquoi la vapeur d’eau est une rétroaction.',
        lesson: {
          sections: [
            'La Terre reçoit surtout du rayonnement solaire visible et renvoie vers l’espace du rayonnement infrarouge thermique. Les gaz à effet de serre absorbent une partie de cet infrarouge et le réémettent dans toutes les directions, notamment vers la surface, ce qui ralentit la perte d’énergie. Les principaux constituants de l’air, le diazote et le dioxygène, absorbent très peu cet infrarouge ; ce sont des molécules comme H₂O, CO₂, CH₄ et N₂O qui ont la structure adaptée. Sans atmosphère, la température moyenne de surface serait d’environ −18 °C (255 K) ; elle est d’environ 15 °C, soit environ 33 °C de plus. L’expression « effet de serre » reste une analogie imparfaite.',
            'L’idée s’est construite par étapes. Selon l’AIP (Spencer Weart), Fourier comprend dans les années 1820 que l’atmosphère influence la température de la planète ; Tyndall identifie en 1859, par des expériences de laboratoire, plusieurs gaz qui piègent le rayonnement infrarouge, le plus important étant la vapeur d’eau. En 1896, Arrhenius réalise un calcul numérique suggérant que réduire de moitié le CO₂ atmosphérique pourrait abaisser la température en Europe d’environ 4 à 5 °C, et il envisage que l’industrie puisse un jour provoquer un réchauffement. Beaucoup de scientifiques rejettent alors cette idée. En 1938, Callendar soutient que le CO₂ augmente et élève la température du globe, sans convaincre immédiatement.',
            'La vapeur d’eau est le gaz à effet de serre le plus abondant et, selon la NASA, elle est responsable d’environ la moitié de l’effet de serre. Pourtant, elle n’est pas le moteur initial du réchauffement actuel : sa quantité dépend de la température, car un air plus chaud peut contenir plus de vapeur d’eau. C’est donc une rétroaction. Les gaz qui ne se condensent pas aux températures atmosphériques, comme le CO₂, le CH₄ et le N₂O, restent dans l’air quand la température varie. Un réchauffement initial dû à ces gaz augmente l’évaporation, donc la vapeur d’eau, ce qui amplifie le réchauffement ; la NASA indique que cet effet plus que double le réchauffement qui résulterait du seul CO₂.',
            'L’effet de serre naturel rend la Terre habitable, mais les activités humaines le renforcent en augmentant les concentrations de gaz à effet de serre. Le résumé du premier groupe de travail du sixième rapport du GIEC (IPCC AR6 WGI) affirme qu’il est sans équivoque que l’influence humaine a réchauffé l’atmosphère, l’océan et les terres. L’élévation de la température mondiale de surface due aux activités humaines entre 1850–1900 et 2010–2019 a pour meilleure estimation 1,07 °C, avec une fourchette probable de 0,8 à 1,3 °C.',
            'Les variations récentes sortent du cadre naturel connu. Selon l’IPCC, la concentration de CO₂ de 2019 (410 ppm) est la plus élevée depuis au moins 2 millions d’années, et celles du CH₄ et du N₂O sont les plus élevées depuis au moins 800 000 ans. Depuis 1750, les hausses du CO₂ (47 %) et du CH₄ (156 %) dépassent largement les variations naturelles multi-millénaires entre périodes glaciaires et interglaciaires observées sur au moins 800 000 ans, et celle du N₂O (23 %) y est comparable. Ces changements s’inscrivent dans un système où la vapeur d’eau, les nuages, la glace et le cycle du carbone réagissent au forçage initial.'
          ],
          example: {
            statement: 'Sans effet de serre naturel, la température moyenne de surface serait d’environ −18 °C ; la valeur observée est d’environ 15 °C. Quel est l’écart ? Exprimer −18 °C en kelvins.',
            calculation: '15 − (−18) = 33 °C ; −18 + 273,15 = 255,15 K, soit environ 255 K.',
            answer: 'L’effet de serre naturel élève la température moyenne de surface d’environ 33 °C. −18 °C correspond à environ 255 K. Ces valeurs sont des moyennes approximatives.'
          },
          exercise: {
            question: 'Pourquoi dit-on que la vapeur d’eau est une rétroaction plutôt qu’un forçage initial ?',
            answer: 'Parce que sa quantité dans l’atmosphère dépend de la température : elle amplifie un réchauffement déclenché par d’autres gaz, comme le CO₂, mais ne le déclenche pas elle-même.'
          },
          exercises: [
            {
              question: 'Quelle serait la température moyenne de surface de la Terre sans effet de serre naturel, et quelle est la valeur observée ?',
              answer: 'Environ −18 °C sans effet de serre, contre environ 15 °C observés.'
            },
            {
              question: 'Qui a montré expérimentalement en 1859 que certains gaz piègent le rayonnement infrarouge, et quel gaz était le plus important ?',
              answer: 'John Tyndall ; parmi les gaz qu’il a identifiés, le plus important était la vapeur d’eau.'
            },
            {
              question: 'Quelle part de l’effet de serre est due à la vapeur d’eau, selon la NASA ?',
              answer: 'Environ la moitié.'
            },
            {
              question: 'Que suggère le calcul d’Arrhenius de 1896 ?',
              answer: 'Que réduire de moitié le CO₂ atmosphérique pourrait abaisser la température en Europe d’environ 4 à 5 °C, et que l’industrie pourrait un jour provoquer un réchauffement.'
            }
          ],
          sources: [
            { title: 'AIP — The Discovery of Global Warming : The Carbon Dioxide Greenhouse Effect', url: 'https://history.aip.org/climate/co2.htm' },
            { title: 'NASA — Steamy Relationships: How Atmospheric Water Vapor Amplifies Earth’s Greenhouse Effect', url: 'https://science.nasa.gov/earth/climate-change/steamy-relationships-how-atmospheric-water-vapor-amplifies-earths-greenhouse-effect/' },
            { title: 'UC Berkeley UCMP — The Greenhouse Effect', url: 'https://ucmp.berkeley.edu/ucmp_oldsite_nonwpfiles/education/dynamic/session5/sess5_greenhouse.htm' },
            { title: 'IPCC AR6 WGI — Summary for Policymakers', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf' }
          ]
        }
      },
      {
        id: 'gaz-effet-de-serre',
        title: 'CO₂, méthane et protoxyde d’azote : sources, durées de vie et pouvoir de réchauffement',
        field: 'Chimie de l’atmosphère · Budgets des gaz à effet de serre · Métriques d’équivalence',
        summary: 'Connaître les trois principaux gaz à effet de serre d’origine humaine, leurs sources et la façon dont on les compare avec le pouvoir de réchauffement global.',
        lesson: {
          sections: [
            'Le dioxyde de carbone est le principal gaz à effet de serre émis par les activités humaines en masse. Sa concentration moyenne est passée d’environ 278 ppm en 1750 à 410 ppm en 2019 selon l’IPCC (+47 %), puis à 422,8 ppm en 2024 selon le Global Carbon Budget. Les émissions viennent de la combustion du charbon, du pétrole et du gaz, de la production de ciment et des changements d’usage des terres ; les combustibles fossiles sont devenus la source dominante des émissions anthropiques à partir d’environ 1950. Le CO₂ n’a pas de durée de vie unique : plusieurs processus (océan, biosphère, roches) le retirent à des vitesses différentes, et l’IPCC précise qu’aucune durée de vie unique ne peut lui être attribuée.',
            'Le méthane (CH₄) a une durée de vie moyenne d’environ 11,8 ans (IPCC AR6), car il est surtout détruit par des réactions chimiques dans la troposphère. Sa concentration est passée de 1866 ppb en 2019 (IPCC) à 1923 ppb en 2023 (Global Carbon Project), contre environ 722 ppb à l’époque préindustrielle, la valeur la plus élevée depuis au moins 800 000 ans. Pour la décennie 2010–2019, le Global Methane Budget estime les émissions mondiales à 575 Tg CH₄ par an (approche descendante), dont environ 65 % (369 Tg) proviennent de sources anthropiques directes : élevage et riziculture, gestion des déchets, exploitation des combustibles fossiles et combustion de biomasse. Les zones humides et les eaux continentales sont les principales sources naturelles et restent la plus grande source d’incertitude du bilan.',
            'Le protoxyde d’azote (N₂O) a une durée de vie d’environ 109 ans (IPCC AR6). Sa concentration est passée d’environ 270 ppb en 1750 à 336 ppb en 2022, soit une hausse proche de 25 % (332 ppb en 2019 selon l’IPCC). Le Global Nitrous Oxide Budget estime les émissions mondiales totales à environ 17,8 Tg N par an sur 2010–2019, dont 36 % d’origine anthropique. L’agriculture, par les engrais azotés et le fumier, représente environ 74 % des émissions anthropiques de la décennie 2010–2019, et ces émissions ont augmenté de 40 % entre 1980 et 2020. Le N₂O est aussi une substance qui appauvrit la couche d’ozone stratosphérique. Son lien avec le cycle de l’azote (nitrification et dénitrification microbiennes) montre que le cycle du carbone ne peut pas être isolé des autres cycles biogéochimiques.',
            'Pour comparer des gaz différents, on utilise le pouvoir de réchauffement global (PRG, ou GWP en anglais) : il compare le forçage radiatif intégré sur un horizon donné après l’émission d’un kilogramme d’un gaz à celui d’un kilogramme de CO₂, pris comme référence égale à 1. Les valeurs de l’IPCC AR6 sur 100 ans sont de 29,8 pour le méthane d’origine fossile, 27,0 pour le méthane d’origine non fossile et 273 pour le N₂O. Sur 20 ans, le PRG du méthane est de 82,5 (origine fossile) ou 79,7 (origine non fossile), alors que celui du N₂O reste à 273. Le PRG du méthane baisse avec l’horizon parce que ce gaz disparaît en une douzaine d’années, tandis que le CO₂ de référence continue d’agir beaucoup plus longtemps.',
            'Le PRG est une métrique conventionnelle : le choix de l’horizon (20 ou 100 ans) change fortement la valeur du méthane et donc le classement des gaz. Le CO₂ équivalent (CO₂e) s’obtient en multipliant la masse émise de chaque gaz par son PRG. Il faut aussi distinguer la masse émise de la contribution au forçage radiatif. D’après le Global Methane Budget, le CH₄ a contribué pour environ 31 % (1,19 W m⁻²) au forçage radiatif additionnel (3,84 W m⁻²) attribué aux émissions anthropiques de gaz à effet de serre et de leurs précurseurs sur l’ère industrielle. D’après l’IPCC AR6 (cité par Tian et al., 2024), le N₂O a contribué pour 6,4 % au forçage radiatif effectif total accru des gaz à effet de serre sur 1750–2022. Ces deux pourcentages ont des dénominateurs différents et ne s’additionnent pas.'
          ],
          example: {
            statement: 'Une installation rejette 2 t de méthane d’origine fossile et 0,5 t de N₂O. Calculer l’émission totale en tonnes de CO₂ équivalent avec les PRG à 100 ans de l’IPCC AR6 (29,8 pour le méthane fossile, 273 pour le N₂O).',
            calculation: '2 × 29,8 = 59,6 tCO₂e ; 0,5 × 273 = 136,5 tCO₂e ; total : 59,6 + 136,5 = 196,1 tCO₂e.',
            answer: 'Environ 196,1 tCO₂e à l’horizon de 100 ans. Cette valeur dépend de la métrique choisie : avec un horizon de 20 ans, le méthane serait pondéré par 82,5.'
          },
          exercise: {
            question: 'Pourquoi le PRG du méthane est-il plus élevé sur 20 ans que sur 100 ans ?',
            answer: 'Parce que le méthane est détruit en une douzaine d’années en moyenne : son effet est concentré sur les premières décennies, alors que le CO₂ de référence continue d’agir bien plus longtemps. Plus l’horizon est long, plus le rapport diminue.'
          },
          exercises: [
            {
              question: 'Quelles sont les durées de vie moyennes du CH₄ et du N₂O selon l’IPCC AR6 ?',
              answer: 'Environ 11,8 ans pour le CH₄ et environ 109 ans pour le N₂O.'
            },
            {
              question: 'Quel secteur est la principale source anthropique de N₂O ?',
              answer: 'L’agriculture (engrais azotés et fumier), avec environ 74 % des émissions anthropiques de N₂O de la décennie 2010–2019.'
            },
            {
              question: 'Quelle part des émissions mondiales de méthane de 2010–2019 est attribuée à des sources anthropiques directes ?',
              answer: 'Environ 65 % (369 Tg CH₄ par an sur 575 Tg CH₄ par an, selon l’approche descendante).'
            },
            {
              question: 'Quelles sont les concentrations annuelles moyennes de CO₂, CH₄ et N₂O en 2019 selon l’IPCC ?',
              answer: '410 ppm pour le CO₂, 1866 ppb pour le CH₄ et 332 ppb pour le N₂O.'
            }
          ],
          sources: [
            { title: 'IPCC AR6 WGI — Summary for Policymakers', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf' },
            { title: 'IPCC AR6 WGI — Chapitre 7 (durées de vie et PRG)', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/' },
            { title: 'GHG Protocol — IPCC Global Warming Potential Values (août 2024)', url: 'https://ghgprotocol.org/sites/default/files/2024-08/Global-Warming-Potential-Values%20%28August%202024%29.pdf' },
            { title: 'Saunois et al. (2025) — Global Methane Budget 2000–2020, Earth System Science Data', url: 'https://essd.copernicus.org/articles/17/1873/2025/' },
            { title: 'Global Carbon Project — Global CH4 Budget 2000–2020 (résumé)', url: 'https://cger.nies.go.jp/gcp/news/20250509.html' },
            { title: 'Tian et al. (2024) — Global Nitrous Oxide Budget 1980–2020, Earth System Science Data', url: 'https://essd.copernicus.org/articles/16/2543/2024/' }
          ]
        }
      },
      {
        id: 'perturbation-bilan',
        title: 'La perturbation du cycle : bilan mondial du carbone, puits et acidification',
        field: 'Sciences du climat · Budget global du carbone · De 1750 à 2025',
        summary: 'Comprendre le bilan annuel des émissions et des puits de carbone, ses incertitudes, la fragilité des puits naturels et l’acidification de l’océan.',
        lesson: {
          sections: [
            'Les mesures directes de CO₂ atmosphérique ont commencé en 1958 avec Charles David Keeling à Mauna Loa (Hawaï) : la première valeur enregistrée était de 313 ppm le 29 mars 1958. Le NOAA Global Monitoring Laboratory entretient ce suivi. Le pic saisonnier de mai a atteint 430,5 ppm en 2025, puis 432,3 ppm en 2026, soit une hausse de 1,8 ppm en un an. Ces valeurs mensuelles de Mauna Loa ne doivent pas être confondues avec la moyenne mondiale annuelle : 422,8 ppm en 2024 et, d’après l’estimation préliminaire du Global Carbon Budget, 425,6 ppm en 2025, soit 53 % au-dessus du niveau préindustriel d’environ 278 ppm.',
            'Le Global Carbon Budget quantifie cinq composantes : émissions fossiles (E_FOS), émissions des changements d’usage des terres (E_LUC), croissance du CO₂ atmosphérique (G_ATM), puits océanique (S_OCEAN) et puits terrestre (S_LAND). Leur somme laisse un déséquilibre budgétaire B_IM = E_FOS + E_LUC − (G_ATM + S_OCEAN + S_LAND), mesure de nos données et connaissances imparfaites. En 2024, les émissions fossiles sont de 10,3 ± 0,5 GtC (37,8 ± 1,8 GtCO₂), celles des usages des terres de 1,3 ± 0,7 GtC, soit au total 11,6 ± 0,9 GtC (42,4 ± 3,2 GtCO₂). Pour 2025, l’estimation préliminaire est de 10,4 GtC fossiles (38,1 GtCO₂) et de 11,5 GtC au total (42,2 GtCO₂).',
            'Sur 2015–2024, le Global Carbon Budget attribue environ 50 % des émissions à l’atmosphère (5,6 GtC par an, soit 2,6 ppm par an), environ 29 % à l’océan (3,2 ± 0,4 GtC par an) et environ 21 % aux terres (2,4 ± 0,8 GtC par an). L’IPCC AR6 donne pour sa part environ 56 % d’absorption par les terres et l’océan sur six décennies ; les périodes et les méthodes diffèrent. Les puits ne sont ni constants ni garantis : le puits terrestre stagne depuis 2000 et le puits océanique depuis 2016, et le changement climatique réduit les puits terrestre et océanique de 25 % et de 7,1 % en moyenne sur 2015–2024. Le puits terrestre a chuté à 1,9 GtC en 2024 pendant l’épisode El Niño, avant une estimation préliminaire de 3,1 GtC en 2025.',
            'Le CO₂ absorbé par l’océan réagit avec l’eau de mer et libère des ions hydrogène : le pH baisse, c’est l’acidification. D’après l’Agence européenne pour l’environnement, le pH moyen de surface est passé d’environ 8,2 à moins de 8,1 depuis l’ère industrielle, ce qui correspond à une hausse d’acidité d’environ 30 %, et l’acidification récente est environ 100 fois plus rapide que lors des événements naturels des 55 derniers millions d’années. L’échelle de pH étant logarithmique, une baisse de 0,1 unité multiplie la concentration en ions H⁺ par 10^0,1 ≈ 1,26 ; le chiffre de 30 % provient de valeurs de pH non arrondies. L’océan reste légèrement basique (pH supérieur à 7) : il devient moins basique, et non « acide ». Les modèles projettent un pH de surface de 8,05 à 7,75 en 2100 selon les émissions.',
            'Le Global Carbon Budget calcule aussi le budget carbone restant. À partir du début de 2026, pour avoir 50 % de chances de limiter le réchauffement à 1,5 °C, il reste 170 GtCO₂ (50 GtC), soit environ 4 ans aux émissions de 2025 ; les budgets pour 1,7 °C et 2 °C sont de 525 GtCO₂ (12 ans) et de 1055 GtCO₂ (25 ans). Il estime le réchauffement attribué aux activités humaines à 1,36 °C en 2024, et environ 0,1 °C de réchauffement supplémentaire pour chaque tranche de 180 GtCO₂ émise (valeur différente de l’estimation 1,07 °C de l’IPCC pour 2010–2019, qui porte sur une autre période). Des signaux de ralentissement existent : les émissions totales ont crû de 0,3 % par an sur 2015–2024 contre 1,9 % par an sur 2005–2014, et les émissions fossiles ont diminué dans 35 économies à PIB croissant. Elles restent toutefois à un niveau record.'
          ],
          example: {
            statement: 'Le budget carbone restant pour 50 % de chances de limiter le réchauffement à 1,5 °C est de 170 GtCO₂ au début de 2026. Les émissions totales de 2025 sont estimées à 42,2 GtCO₂. Combien d’années ce budget représente-t-il à ce rythme ?',
            calculation: '170 ÷ 42,2 ≈ 4,03 ans.',
            answer: 'Environ 4 ans si les émissions restaient au niveau de 2025. C’est un calcul d’ordre de grandeur : le budget restant est lui-même une estimation incertaine.'
          },
          exercise: {
            question: 'Calculer le déséquilibre budgétaire 2024 avec E_FOS = 10,3, E_LUC = 1,3, G_ATM = 7,9, S_OCEAN = 3,4 et S_LAND = 1,9 (en GtC par an).',
            answer: 'B_IM = (10,3 + 1,3) − (7,9 + 3,4 + 1,9) = 11,6 − 13,2 = −1,6 GtC par an avec ces valeurs arrondies. La publication indique −1,7 GtC par an à partir de valeurs non arrondies, ce qui suggère que le puits total ou la croissance atmosphérique est surestimé en 2024.'
          },
          exercises: [
            {
              question: 'Quelle est la première valeur de CO₂ enregistrée par Keeling à Mauna Loa ?',
              answer: '313 ppm, le 29 mars 1958.'
            },
            {
              question: 'Quelle fraction des émissions anthropiques de 2015–2024 est restée dans l’atmosphère, selon le Global Carbon Budget ?',
              answer: 'Environ 50 % ; le reste a été absorbé à environ 29 % par l’océan et à environ 21 % par les terres.'
            },
            {
              question: 'Pourquoi l’océan n’est-il pas « un puits sans conséquence » ?',
              answer: 'Parce que le CO₂ absorbé acidifie l’eau de mer : le pH de surface est passé d’environ 8,2 à moins de 8,1 depuis l’ère industrielle, ce qui peut affecter les organismes marins et les écosystèmes.'
            },
            {
              question: 'Quelle différence y a-t-il entre la valeur de Mauna Loa en mai et la moyenne mondiale annuelle ?',
              answer: 'La valeur de mai est un pic saisonnier mesuré à un seul observatoire (430,5 ppm en 2025), alors que la moyenne mondiale annuelle regroupe plusieurs stations sur toute l’année (422,8 ppm en 2024).'
            }
          ],
          sources: [
            { title: 'Friedlingstein et al. (2026) — Global Carbon Budget 2025, Earth System Science Data', url: 'https://essd.copernicus.org/articles/18/3211/2026/' },
            { title: 'UC San Diego — Annual Carbon Dioxide Peak Reaches 432 Parts per Million', url: 'https://today.ucsd.edu/story/annual-carbon-dioxide-peak-reaches-432-parts-per-million' },
            { title: 'NOAA Global Monitoring Laboratory — Trends in CO2, CH4, N2O, SF6', url: 'https://gml.noaa.gov/ccgg/trends/' },
            { title: 'Agence européenne pour l’environnement (Climate-ADAPT) — Ocean acidification', url: 'https://climate-adapt.eea.europa.eu/en/metadata/indicators/ocean-acidification' },
            { title: 'IPCC AR6 WGI — Summary for Policymakers', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf' }
          ]
        }
      }
    ]
  },

{
  id: 'aerosols-atmosphere',
  title: 'Les aérosols atmosphériques et leur influence sur le bilan énergétique terrestre',
  note: 'Quatre chapitres présentent la nature et les sources des aérosols, leurs interactions directes avec le rayonnement, leurs interactions avec les nuages et les méthodes utilisées pour quantifier leur influence climatique. Les effets dépendent notamment de la composition, de la taille, de l’altitude, de l’humidité, de la surface sous-jacente et de la présence de nuages ; il faut distinguer les effets locaux des estimations moyennes à l’échelle mondiale.',
  chapters: [
    {
      id: 'nature-sources-aerosols',
      title: 'La nature des aérosols atmosphériques et leurs sources',
      field: 'Climatologie · Physique de l’atmosphère · Composition de l’air',
      summary: 'Définir les aérosols, distinguer les particules naturelles des particules issues des activités humaines et comprendre pourquoi leur taille, leur composition et leur durée de résidence influencent leurs effets.',
      lesson: {
        sections: [
          'Un aérosol atmosphérique est un ensemble de particules solides ou de gouttelettes liquides en suspension dans un gaz, ici l’air. Le mot désigne couramment les particules en suspension elles-mêmes, tandis que le système aérosol comprend aussi le gaz porteur. Les aérosols sont différents des gaz à effet de serre : ils ne se comportent pas tous de la même façon vis-à-vis du rayonnement, et leur influence dépend fortement de leurs propriétés physiques et chimiques.',
          'Les sources naturelles comprennent notamment les embruns marins, les poussières minérales soulevées par le vent, les émissions biologiques, les feux de végétation et les aérosols formés à partir de gaz émis par les volcans. Les activités humaines produisent ou favorisent aussi des particules, par exemple par la combustion de combustibles fossiles et de biomasse, certains procédés industriels et les transformations chimiques de polluants gazeux. Une même catégorie chimique peut avoir plusieurs sources : il faut donc éviter d’associer automatiquement chaque type de particule à une origine unique.',
          'Les propriétés pertinentes comprennent la taille, la forme, l’indice de réfraction, la composition chimique, la capacité à absorber l’eau et les propriétés optiques. Les aérosols sont retirés de l’atmosphère par dépôt sec sur les surfaces et par des processus de précipitation qui les incorporent aux gouttes ou aux cristaux. Leur durée de résidence varie selon leur taille, leur composition, leur altitude et les conditions météorologiques ; elle est généralement courte par rapport à celle de nombreux gaz à effet de serre bien mélangés. Cette variabilité contribue à rendre leurs effets climatiques plus hétérogènes dans l’espace et dans le temps.'
        ],
        example: {
          statement: 'Une observation atmosphérique détecte des particules de sel marin, de poussière minérale et de suie. Peut-on attribuer à ces trois types de particules un effet climatique identique ?',
          calculation: 'Il faut comparer leurs propriétés optiques et microphysiques, leur concentration, leur altitude, l’humidité ambiante, les nuages et la surface située en dessous. La seule présence de particules ne suffit pas à déterminer le signe ni l’intensité de leur effet radiatif.',
          answer: 'Non. Les aérosols constituent une famille hétérogène : certaines particules diffusent efficacement la lumière solaire, certaines absorbent une partie du rayonnement et certaines modifient les propriétés des nuages. Leur effet doit être évalué selon les conditions physiques et atmosphériques.'
        },
        exercise: {
          question: 'Pourquoi la seule mesure de la masse totale des aérosols ne suffit-elle pas à déterminer leur influence sur le climat ?',
          answer: 'Parce que des masses égales peuvent présenter des tailles, des compositions, des propriétés d’absorption et de diffusion, des distributions verticales et des interactions nuageuses différentes.'
        },
        exercises: [
          {
            question: 'Citer deux sources naturelles d’aérosols atmosphériques.',
            answer: 'Par exemple, les embruns marins et les poussières minérales soulevées par le vent.'
          },
          {
            question: 'Citer deux processus qui retirent les aérosols de l’atmosphère.',
            answer: 'Le dépôt sec sur les surfaces et le lessivage par les précipitations.'
          },
          {
            question: 'La suie et les particules de sulfate ont-elles nécessairement les mêmes propriétés radiatives ?',
            answer: 'Non. Leur composition et leurs propriétés optiques diffèrent ; leur effet dépend aussi de leur environnement et de leur position dans l’atmosphère.'
          }
        ],
        sources: [
          {
            title: 'NOAA Global Monitoring Laboratory — Global Radiation and Aerosols',
            url: 'https://gml.noaa.gov/grad/about/aero_primer.html'
          },
          {
            title: 'NASA — Aerosols: Tiny Particles, Big Impact',
            url: 'https://science.nasa.gov/earth/earth-observatory/aerosols/'
          },
          {
            title: 'IPCC — AR6, Working Group I, Chapter 6: Short-lived Climate Forcers',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-6/'
          }
        ]
      }
    },
    {
      id: 'interactions-aerosols-rayonnement',
      title: 'Les interactions directes entre aérosols et rayonnement',
      field: 'Climatologie · Transferts radiatifs · Bilan énergétique terrestre',
      summary: 'Comprendre la diffusion et l’absorption du rayonnement par les aérosols, puis relier ces mécanismes au forçage radiatif et aux différences entre refroidissement de surface et réchauffement de l’atmosphère.',
      lesson: {
        sections: [
          'Le bilan énergétique terrestre dépend de l’énergie solaire absorbée et du rayonnement infrarouge émis vers l’espace. Les aérosols peuvent modifier les flux radiatifs en diffusant une partie du rayonnement solaire ou en en absorbant une partie. La diffusion redirige la lumière dans différentes directions ; une fraction peut repartir vers l’espace, ce qui tend à réduire l’énergie solaire absorbée par le système Terre. L’importance de cet effet dépend notamment des propriétés des particules, de leur abondance et de la géométrie d’éclairement.',
          'L’absorption du rayonnement solaire par un aérosol transfère de l’énergie à la particule et à son environnement, ce qui peut réchauffer la couche atmosphérique où elle se trouve. Le carbone suie est un exemple important de particule absorbante. Le réchauffement de l’air par absorption ne signifie pas nécessairement que la surface se réchauffe : l’effet sur la surface et sur le système climatique dépend de l’altitude des particules, de la couverture nuageuse, de la surface sous-jacente et des ajustements atmosphériques. Les poussières minérales peuvent également absorber et diffuser le rayonnement, avec des effets qui varient selon leurs propriétés et les longueurs d’onde considérées.',
          'Le forçage radiatif effectif exprime une modification du bilan énergétique du système climatique après prise en compte de certains ajustements rapides de l’atmosphère et des nuages, avant la réponse complète de la température de surface. Dans l’évaluation du GIEC publiée en 2021 pour la période 1750–2014, le forçage radiatif effectif total attribué aux aérosols anthropiques est estimé à environ −1,3 W/m², avec un intervalle d’évaluation de −2,0 à −0,6 W/m². Cette valeur est une estimation historique assortie d’incertitudes ; elle ne doit pas être présentée comme une mesure directe de l’effet actuel en 2026. Le signe négatif indique, selon cette convention, un effet net refroidissant sur le bilan énergétique global évalué.'
        ],
        example: {
          statement: 'Deux couches d’aérosols sont observées : l’une diffuse principalement la lumière solaire et l’autre absorbe une part importante de cette lumière. Pourquoi leurs conséquences peuvent-elles différer ?',
          calculation: 'La diffusion peut accroître le rayonnement renvoyé vers l’espace, tandis que l’absorption réchauffe la couche atmosphérique traversée. Pour quantifier l’effet net, il faut notamment connaître les propriétés optiques, la quantité de particules, leur altitude, les nuages et la réflectivité de la surface.',
          answer: 'La première couche peut favoriser un refroidissement du système en diminuant l’énergie solaire absorbée, alors que la seconde peut réchauffer l’atmosphère localement. Le bilan total ne se déduit pas du seul mécanisme dominant sans informations supplémentaires.'
        },
        exercise: {
          question: 'Que signifie un forçage radiatif effectif négatif associé aux aérosols anthropiques dans une évaluation climatique globale ?',
          answer: 'Cela signifie que leur effet net évalué tend à diminuer l’énergie retenue par le système climatique par rapport à la référence choisie, donc à exercer un effet refroidissant. Cette conclusion globale n’implique pas que chaque aérosol refroidisse chaque région.'
        },
        exercises: [
          {
            question: 'Quelle différence existe-t-il entre diffusion et absorption du rayonnement ?',
            answer: 'La diffusion change la direction de propagation du rayonnement ; l’absorption transfère son énergie à la matière.'
          },
          {
            question: 'Pourquoi une particule absorbante peut-elle réchauffer l’atmosphère sans réchauffer de la même manière la surface ?',
            answer: 'Parce que l’énergie est absorbée à l’altitude de la particule et que la réponse de la surface dépend aussi des échanges radiatifs, des nuages et de la circulation atmosphérique.'
          },
          {
            question: 'À quelle période se rapporte l’estimation du GIEC de −1,3 W/m² pour le forçage radiatif effectif total des aérosols anthropiques citée dans cette leçon ?',
            answer: 'À l’évolution depuis l’ère préindustrielle, évaluée pour la période 1750–2014 dans le sixième rapport d’évaluation du premier groupe de travail du GIEC publié en 2021.'
          }
        ],
        sources: [
          {
            title: 'IPCC — AR6, Working Group I, Chapter 7: The Earth’s Energy Budget, Climate Feedbacks, and Climate Sensitivity',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'NASA — Do small particles in the air (aerosols) have a warming or cooling effect on the climate?',
            url: 'https://science.nasa.gov/climate-change/faq/do-small-particles-in-the-air-aerosols-have-a-warming-or-cooling-effect-on-the-climate/'
          },
          {
            title: 'NOAA Global Monitoring Laboratory — Global Radiation and Aerosols',
            url: 'https://gml.noaa.gov/grad/about/aero_primer.html'
          },
          {
            title: 'OpenStax Astronomy — 15.4 Space Weather',
            url: 'https://openstax.org/books/astronomy/pages/15-4-space-weather'
          }
        ]
      }
    },
    {
      id: 'aerosols-nuages',
      title: 'Les interactions entre aérosols et nuages',
      field: 'Climatologie · Microphysique des nuages · Forçage radiatif indirect',
      summary: 'Étudier le rôle des aérosols comme noyaux de condensation ou de glace et expliquer comment les changements de gouttelettes, de précipitations et de propriétés nuageuses peuvent modifier le bilan radiatif.',
      lesson: {
        sections: [
          'De nombreux aérosols peuvent servir de noyaux de condensation des nuages lorsque les conditions d’humidité sont favorables. D’autres particules peuvent participer à la nucléation de glace. Ces rôles dépendent des propriétés de surface, de la composition chimique, de la taille des particules et des conditions thermodynamiques. Les aérosols ne créent donc pas automatiquement un nuage : la disponibilité d’eau, la température, la sursaturation et la dynamique atmosphérique restent déterminantes.',
          'Dans certaines situations, une augmentation du nombre de noyaux de condensation peut produire davantage de gouttelettes plus petites pour une quantité d’eau liquide donnée. Une telle modification peut augmenter la réflectivité du nuage et réduire le rayonnement solaire absorbé par le système Terre : c’est le mécanisme classiquement associé à l’effet de Twomey. Toutefois, la réponse réelle dépend de l’état initial du nuage et de son environnement ; la relation n’est pas une règle universelle applicable sans condition à tous les nuages.',
          'Les aérosols peuvent aussi modifier la formation des précipitations et l’évolution des nuages, notamment leur quantité d’eau liquide, leur durée de vie et leur étendue. Ces ajustements peuvent renforcer ou parfois contrer l’effet radiatif initial. Les nuages sont des systèmes dynamiques, et les interactions aérosols-nuages figurent parmi les principales sources d’incertitude des évaluations du forçage radiatif des aérosols. Il est donc essentiel de distinguer le mécanisme microphysique, l’ajustement du nuage et le résultat radiatif final.'
        ],
        example: {
          statement: 'Deux nuages ont une quantité d’eau liquide comparable, mais l’un contient davantage de gouttelettes de plus petite taille. Quelle différence radiative est possible ?',
          calculation: 'Si les autres conditions sont comparables, des gouttelettes plus nombreuses et plus petites peuvent accroître la réflectivité du nuage. Ce raisonnement décrit le mécanisme de Twomey, mais il ne permet pas à lui seul de prédire la durée de vie du nuage ni le changement final de précipitations.',
          answer: 'Le nuage aux gouttelettes plus petites peut réfléchir davantage de lumière solaire. L’effet radiatif et les ajustements ultérieurs dépendent néanmoins de la dynamique et de la microphysique du nuage.'
        },
        exercise: {
          question: 'Pourquoi l’augmentation du nombre de noyaux de condensation ne permet-elle pas, à elle seule, de prévoir précisément la durée de vie d’un nuage ?',
          answer: 'Parce que la durée de vie dépend aussi des processus de précipitation, de l’apport d’humidité, de la dynamique atmosphérique, de l’épaisseur du nuage et de ses interactions avec l’environnement.'
        },
        exercises: [
          {
            question: 'Que sont les noyaux de condensation des nuages ?',
            answer: 'Des particules sur lesquelles la vapeur d’eau peut se condenser lorsque les conditions atmosphériques sont favorables.'
          },
          {
            question: 'Quel est le mécanisme de l’effet de Twomey ?',
            answer: 'À quantité d’eau liquide comparable, une augmentation du nombre de gouttelettes peut réduire leur taille moyenne et accroître la réflectivité du nuage.'
          },
          {
            question: 'Les interactions aérosols-nuages entraînent-elles toujours le même changement de précipitations ?',
            answer: 'Non. La réponse dépend du type de nuage, de son état initial, de la dynamique et des processus microphysiques.'
          }
        ],
        sources: [
          {
            title: 'IPCC — AR6, Working Group I, Chapter 7: The Earth’s Energy Budget, Climate Feedbacks, and Climate Sensitivity',
            url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/'
          },
          {
            title: 'NASA — Aerosols: Tiny Particles, Big Impact',
            url: 'https://science.nasa.gov/earth/earth-observatory/aerosols/'
          },
          {
            title: 'NASA Langley Research Center — CERES Science',
            url: 'https://ceres.larc.nasa.gov/science/'
          }
        ]
      }
    },
    {
      id: 'mesure-incertitudes-aerosols',
      title: 'Mesurer les aérosols et évaluer les incertitudes climatiques',
      field: 'Climatologie · Observation satellitaire · Modélisation du système Terre',
      summary: 'Présenter les observations au sol et par satellite, les propriétés utilisées dans les modèles et les raisons pour lesquelles le forçage radiatif des aérosols reste difficile à quantifier.',
      lesson: {
        sections: [
          'Les aérosols sont étudiés à l’aide de mesures au sol, d’instruments aéroportés et de satellites. Les observations peuvent renseigner sur l’épaisseur optique des aérosols, leur distribution verticale, certaines propriétés de taille et d’absorption, ainsi que sur leur répartition géographique. Aucune mesure unique ne décrit toutes les propriétés nécessaires au calcul du bilan radiatif. Les observations satellitaires doivent notamment être interprétées en tenant compte de la surface sous-jacente, des nuages, de la géométrie d’observation et des limites des instruments.',
          'Les modèles climatiques et les modèles de transport chimique combinent les émissions, la formation et la transformation des particules, leur transport, leur dépôt et leurs interactions avec le rayonnement et les nuages. Les chercheurs comparent les simulations aux observations afin d’évaluer les biais et de mieux contraindre les processus. Une incertitude peut provenir des émissions, de la composition des particules, de leur mélange interne ou externe, de leur répartition verticale, des propriétés des nuages et de la représentation numérique de ces processus.',
          'Le forçage des aérosols varie dans l’espace et dans le temps, car les particules ont généralement une durée de résidence relativement courte et leurs sources sont inégalement réparties. Une estimation moyenne mondiale ne décrit donc pas nécessairement l’effet régional, et les résultats peuvent différer entre une région polluée, une zone océanique éloignée des sources et une région influencée par des poussières désertiques. La diminution des émissions d’aérosols anthropiques peut améliorer la qualité de l’air tout en réduisant certains effets refroidissants ; cela ne signifie pas que la pollution soit bénéfique, car ses impacts sanitaires et environnementaux sont distincts du seul bilan énergétique.'
        ],
        example: {
          statement: 'Un satellite mesure une épaisseur optique élevée des aérosols au-dessus d’une région. Peut-on en déduire directement le refroidissement moyen de cette région ?',
          calculation: 'Non : l’épaisseur optique décrit l’atténuation du rayonnement traversant la colonne atmosphérique, mais ne fournit pas seule le bilan énergétique. Il faut aussi caractériser les propriétés d’absorption et de diffusion, l’altitude des particules, les nuages, l’ensoleillement et la réflectivité de la surface.',
          answer: 'Non. L’épaisseur optique est une information importante, mais le calcul de l’effet radiatif nécessite plusieurs propriétés supplémentaires et une interprétation adaptée aux conditions d’observation.'
        },
        exercise: {
          question: 'Pourquoi les estimations du forçage radiatif des aérosols comportent-elles des incertitudes importantes ?',
          answer: 'Parce que les aérosols sont hétérogènes, évoluent rapidement, sont distribués de façon inégale et interagissent avec les nuages ; les émissions, les propriétés des particules et les processus associés ne sont pas tous connus avec la même précision.'
        },
        exercises: [
          {
            question: 'Que mesure l’épaisseur optique des aérosols ?',
            answer: 'Elle caractérise l’atténuation du rayonnement traversant une colonne atmosphérique due aux aérosols ; elle ne mesure pas directement leur masse ni leur forçage radiatif.'
          },
          {
            question: 'Pourquoi combiner observations satellitaires et mesures au sol ?',
            answer: 'Les satellites fournissent une couverture spatiale étendue, tandis que les mesures au sol contribuent à caractériser et à valider certaines propriétés des aérosols avec des méthodes complémentaires.'
          },
          {
            question: 'La baisse de certaines émissions d’aérosols peut-elle avoir des effets différents sur la qualité de l’air et sur le bilan radiatif ?',
            answer: 'Oui. La réduction de la pollution particulaire est bénéfique pour la qualité de l’air, tandis que la diminution de certains aérosols refroidissants peut réduire un effet qui masquait partiellement le réchauffement dû aux gaz à effet de serre.'
          }
        ],
        sources: [
          {
            title: 'NASA Langley Research Center — CERES Science',
            url: 'https://ceres.larc.nasa.gov/science/'
          },
          {
            title: 'NASA — Aerosols and Their Importance',
            url: 'https://earth.gsfc.nasa.gov/climate/data/deep-blue/aerosols'
          },
          {
            title: 'NOAA Global Monitoring Laboratory — Global Radiation and Aerosols',
            url: 'https://gml.noaa.gov/grad/about/aero_primer.html'
          },
          {
            title: 'OpenStax Astronomy — 8.4 Life, Chemical Evolution, and Climate Change',
            url: 'https://openstax.org/books/astronomy/pages/8-4-life-chemical-evolution-and-climate-change'
          }
        ]
      }
    }
  ]
},

{
id: 'climats-passes',
title: 'La reconstitution des climats passés grâce aux archives naturelles',
note: 'Six chapitres présentent les principales archives naturelles utilisées en paléoclimatologie, les méthodes de datation et d’interprétation, les reconstitutions de température et de précipitations, les changements océaniques et glaciaires, ainsi que les limites des données indirectes. Les archives ne mesurent généralement pas directement une variable climatique : elles fournissent des indicateurs dont la relation au climat doit être établie, calibrée et évaluée avec leurs incertitudes.',
chapters: [
{
id: 'principes-archives-paleoclimatiques',
title: 'Principes de la paléoclimatologie et des archives naturelles',
field: 'Climatologie · Paléoclimatologie · Indicateurs indirects',
summary: 'Définir la paléoclimatologie, distinguer les mesures instrumentales des indicateurs indirects et comprendre comment plusieurs archives indépendantes permettent de reconstruire les climats anciens.',
lesson: {
sections: [
'La paléoclimatologie étudie les climats passés, y compris les périodes antérieures aux réseaux de mesures instrumentales. Les observations directes par thermomètres, pluviomètres, satellites et autres instruments ne couvrent qu’une partie limitée de l’histoire climatique. Pour remonter plus loin dans le temps, les scientifiques étudient des archives physiques, chimiques, biologiques et historiques qui ont conservé des indices des conditions environnementales au moment de leur formation.',
'Une archive climatique est un matériau ou un dépôt qui conserve une information sur son environnement passé : glace, sédiments marins ou lacustres, cernes des arbres, coraux, pollens, concrétions de grottes, fossiles ou documents historiques. Un proxy climatique est une variable mesurable dans cette archive qui sert d’indicateur indirect d’une variable climatique ou d’un processus qui lui est lié. Par exemple, la largeur d’un cerne peut refléter les conditions de croissance, mais elle dépend aussi de l’âge de l’arbre, de l’espèce, du sol, de la compétition et des perturbations locales.',
'Chaque archive possède une portée temporelle et une résolution propres. Les cernes d’arbres peuvent souvent être datés année par année, tandis que des sédiments accumulés lentement peuvent fournir des séries de résolution plus faible, selon la vitesse de dépôt, le prélèvement et la conservation. Les carottes de glace conservent des couches de neige transformées en glace et des bulles d’air anciennes ; les sédiments marins contiennent des organismes et des signatures géochimiques utiles pour étudier les océans et les changements de longue durée. Il n’existe donc pas une archive universelle qui fournisse seule une histoire complète et uniforme du climat mondial.',
'Une reconstruction robuste combine généralement plusieurs types d’indices, des méthodes de datation et une connaissance des processus physiques ou biologiques qui relient le proxy au climat. Les résultats sont des estimations accompagnées d’incertitudes, et non des lectures directes et parfaites du passé. La comparaison entre archives indépendantes est importante pour vérifier si un signal observé localement reflète un phénomène régional ou une évolution de plus grande échelle.'
],
example: {
statement: 'Une étude trouve des cernes étroits dans des arbres d’une région pendant plusieurs années. Peut-on conclure immédiatement que la température mondiale a diminué ?',
calculation: 'Il faut d’abord vérifier la datation des cernes, l’espèce étudiée, les facteurs limitant la croissance et la relation statistique entre les mesures et le climat local. Il faut ensuite comparer le résultat avec d’autres archives et d’autres régions avant de tirer une conclusion à une échelle plus vaste.',
answer: 'Non. Des cernes étroits peuvent indiquer des conditions défavorables à la croissance, par exemple une sécheresse ou une saison de croissance fraîche selon le contexte. Une seule série locale ne suffit pas à établir une variation de la température mondiale.'
},
exercise: {
question: 'Pourquoi les paléoclimatologues confrontent-ils plusieurs types d’archives naturelles plutôt que de se fier à une seule ?',
answer: 'Parce que chaque archive possède ses propres biais, sa résolution et sa sensibilité climatique. Des indicateurs indépendants permettent de vérifier les interprétations et de distinguer les signaux locaux des tendances régionales ou globales.'
},
exercises: [
{
question: 'Quelle est la différence entre une archive climatique et un proxy climatique ?',
answer: 'L’archive est le matériau ou le dépôt qui conserve des informations ; le proxy est la mesure ou la propriété utilisée pour inférer une condition climatique passée.'
},
{
question: 'Citer trois archives naturelles utilisées en paléoclimatologie.',
answer: 'Par exemple, les carottes de glace, les cernes des arbres et les sédiments marins.'
},
{
question: 'Une archive naturelle fournit-elle toujours une mesure directe de la température ?',
answer: 'Non. Elle fournit souvent un indicateur indirect dont la relation à la température doit être établie et dont l’interprétation peut dépendre d’autres facteurs.'
}
],
sources: [
{
title: 'NOAA Climate.gov — Past Climate',
url: 'https://www.climate.gov/maps-data/climate-data-primer/past-climate'
},
{
title: 'NASA Earth Observatory — Paleoclimatology: Explaining the Evidence',
url: 'https://science.nasa.gov/earth/earth-observatory/paleoclimatology-explaining-the-evidence/'
},
{
title: 'U.S. Geological Survey — Paleoclimate Archives',
url: 'https://www.usgs.gov/programs/climate-research-and-development-program/science/paleoclimate-archives'
},
{
title: 'OpenStax Biology 2e — 44.5 Climate and the Effects of Global Climate Change',
url: 'https://openstax.org/books/biology-2e/pages/44-5-climate-and-the-effects-of-global-climate-change'
}
]
}
},
{
id: 'carottes-glace-atmosphere',
title: 'Les carottes de glace et les atmosphères anciennes',
field: 'Climatologie · Glaciologie · Isotopes stables · Gaz à effet de serre',
summary: 'Étudier la formation des archives glaciaires, l’interprétation des isotopes de l’eau, les bulles d’air piégées et les limites temporelles des informations obtenues dans les carottes de glace.',
lesson: {
sections: [
'Dans les régions où la neige s’accumule durablement, les couches successives se compactent et se transforment progressivement en glace. Le forage de carottes permet d’échantillonner cette succession de couches. La neige et la glace peuvent conserver des poussières, des ions, des cendres volcaniques et d’autres particules ; elles contiennent aussi de l’air emprisonné lors de la transformation de la neige en glace. Ces éléments fournissent des indices sur les conditions atmosphériques et environnementales au moment de leur dépôt.',
'Les rapports entre isotopes stables de l’eau, notamment l’oxygène-18 et l’oxygène-16 ainsi que le deutérium et l’hydrogène, varient avec les processus d’évaporation, de transport et de condensation. Dans de nombreuses régions polaires, ces rapports sont corrélés à la température de condensation et peuvent servir à reconstruire des variations thermiques passées. Cette relation n’est toutefois pas universelle : la trajectoire des masses d’air, la saisonnalité des précipitations, l’altitude et les changements de source d’humidité peuvent aussi modifier le signal isotopique.',
'Les bulles d’air emprisonnées dans la glace permettent d’analyser la composition de l’atmosphère ancienne, notamment les concentrations de dioxyde de carbone, de méthane et d’autres gaz présents dans l’échantillon. Il faut distinguer l’âge de la glace de celui du gaz qu’elle renferme : la neige reste poreuse pendant une période avant que l’air soit isolé dans des bulles. Le gaz est donc généralement plus jeune que la glace qui l’entoure, et cette différence doit être prise en compte dans la chronologie.',
'Les carottes de glace antarctiques ont permis de reconstituer des variations conjointes de température régionale et de concentrations de gaz à effet de serre sur plusieurs centaines de milliers d’années. Certaines archives antarctiques bien connues couvrent environ 800 000 ans, mais cette durée n’est pas applicable à toutes les carottes ni à toutes les régions. Les archives glaciaires sont particulièrement informatives pour les zones où la neige s’accumule et où la glace ancienne est conservée ; leur interprétation reste liée à la chronologie, à la résolution et aux processus locaux.'
],
example: {
statement: 'Une carotte de glace présente une variation du rapport isotopique de l’eau et des concentrations de CO2 dans les bulles d’air. Ces deux séries mesurent-elles exactement la même chose au même instant ?',
calculation: 'Le signal isotopique de la glace renseigne sur les conditions de formation des précipitations et peut servir d’indicateur thermique après interprétation. Les bulles renseignent sur la composition de l’atmosphère au moment où l’air a été piégé. Comme le gaz est emprisonné après le dépôt de la neige, les deux chronologies ne coïncident pas exactement.',
answer: 'Non. Les deux indicateurs sont complémentaires, mais ils ont des significations et des chronologies différentes. Il faut tenir compte du décalage entre l’âge de la glace et celui du gaz avant de comparer précisément les séries.'
},
exercise: {
question: 'Pourquoi l’âge du gaz emprisonné dans une carotte de glace diffère-t-il généralement de l’âge de la glace qui l’entoure ?',
answer: 'Parce que l’air circule encore dans les pores de la neige pendant une partie du processus de compactage. Il n’est isolé dans des bulles qu’ultérieurement, lorsque la neige devient suffisamment dense.'
},
exercises: [
{
question: 'Citer deux types d’informations obtenues grâce aux carottes de glace.',
answer: 'Les rapports isotopiques de l’eau, utilisés notamment pour reconstruire des variations de température, et la composition des gaz anciens emprisonnés dans les bulles d’air.'
},
{
question: 'Les isotopes de l’eau constituent-ils un thermomètre universel indépendant de tout contexte ?',
answer: 'Non. Leur interprétation dépend aussi de la circulation atmosphérique, de la source d’humidité, de la saisonnalité et des conditions de précipitation.'
},
{
question: 'Quelle distinction faut-il faire entre l’âge de la glace et l’âge du gaz ?',
answer: 'L’âge de la glace correspond au moment du dépôt et de la transformation de la neige ; l’âge du gaz correspond au moment où l’air a été isolé dans la glace, généralement plus tard.'
}
],
sources: [
{
title: 'NASA — How do we know what greenhouse gas and temperature levels were in the distant past?',
url: 'https://science.nasa.gov/climate-change/faq/how-do-we-know-what-greenhouse-gas-and-temperature-levels-were-in-the-distant-past/'
},
{
title: 'NASA Earth Observatory — Paleoclimatology: The Ice Core Record',
url: 'https://science.nasa.gov/earth/earth-observatory/paleoclimatology-the-ice-core-record/'
},
{
title: 'OpenStax Biology 2e — 44.5 Climate and the Effects of Global Climate Change',
url: 'https://openstax.org/books/biology-2e/pages/44-5-climate-and-the-effects-of-global-climate-change'
},
{
title: 'NOAA National Centers for Environmental Information — Paleoclimatology Data',
url: 'https://www.ncei.noaa.gov/products/paleoclimatology'
}
]
}
},
{
id: 'cernes-arbres-dendroclimatologie',
title: 'Les cernes des arbres et la dendroclimatologie',
field: 'Climatologie · Écologie forestière · Dendrochronologie',
summary: 'Comprendre comment la croissance annuelle des arbres conserve des indices climatiques, comment les séries sont datées et standardisées et pourquoi les facteurs écologiques doivent être séparés du signal climatique.',
lesson: {
sections: [
'Dans de nombreuses régions tempérées, les arbres produisent des cernes de croissance annuels visibles dans le bois. La largeur, la densité et certaines propriétés chimiques des cernes peuvent refléter les conditions de croissance pendant une saison ou une année. La dendrochronologie établit les dates des cernes, tandis que la dendroclimatologie utilise les séries datées pour étudier les relations entre la croissance des arbres et les variables climatiques.',
'Le climat n’est pas le seul facteur qui contrôle la croissance. L’âge et la taille de l’arbre, la compétition entre individus, les propriétés du sol, les ravageurs, les incendies et les changements d’environnement peuvent modifier les cernes. Les chercheurs appliquent donc des procédures de standardisation et comparent plusieurs arbres d’un même site ou de sites différents afin d’extraire le signal commun. La standardisation doit être choisie avec soin, car elle peut aussi atténuer certaines variations lentes si elle n’est pas adaptée à la question étudiée.',
'Les séries de cernes sont souvent particulièrement utiles pour reconstruire la variabilité annuelle à pluriannuelle des conditions de croissance, notamment la sécheresse ou les températures dans les régions où ces facteurs limitent la croissance. Les arbres ne répondent cependant pas tous de la même manière : dans un site, la croissance peut être surtout limitée par l’eau ; dans un autre, par la température ou par la durée de la saison de croissance. Une reconstruction climatique nécessite donc une calibration avec des observations instrumentales et une validation sur des données indépendantes lorsque cela est possible.',
'La datation croisée compare les motifs de cernes entre arbres vivants, bois morts et bois historiques. Elle permet de vérifier les années manquantes ou les cernes très fins difficiles à reconnaître et peut prolonger des chronologies au-delà de la durée de vie d’un seul arbre. La longueur et la qualité de la série dépendent néanmoins de la disponibilité des échantillons, de la conservation du bois et de la stabilité de la relation entre croissance et climat.'
],
example: {
statement: 'Une chronologie d’arbres d’une région montre des cernes étroits pendant plusieurs années, et les relevés instrumentaux indiquent que ces années ont été très sèches. Quelle conclusion est la plus prudente ?',
calculation: 'On peut tester la corrélation entre la largeur des cernes et les précipitations, l’humidité du sol ou un indice de sécheresse pendant la période commune. Il faut aussi examiner l’âge des arbres, les perturbations et la robustesse statistique de la relation, puis valider la reconstruction sur une période indépendante si les données le permettent.',
answer: 'La série peut contenir un signal de sécheresse si la relation est confirmée par la calibration et la validation. Elle ne prouve pas à elle seule que tous les cernes étroits sont causés par la sécheresse ni que le signal représente l’ensemble du globe.'
},
exercise: {
question: 'Pourquoi la datation croisée et la calibration climatique sont-elles deux étapes différentes ?',
answer: 'La datation croisée établit les années auxquelles correspondent les cernes ; la calibration évalue la relation statistique entre leurs caractéristiques et une variable climatique mesurée.'
},
exercises: [
{
question: 'Quelle différence existe-t-il entre dendrochronologie et dendroclimatologie ?',
answer: 'La dendrochronologie étudie et date les séries de cernes ; la dendroclimatologie utilise notamment ces séries datées pour reconstruire ou analyser des conditions climatiques passées.'
},
{
question: 'Citer deux facteurs non climatiques qui peuvent influencer la largeur des cernes.',
answer: 'L’âge de l’arbre et la compétition entre arbres ; le sol, les ravageurs et les incendies peuvent également intervenir.'
},
{
question: 'Pourquoi une série de cernes d’un seul arbre ne suffit-elle généralement pas pour reconstituer le climat régional ?',
answer: 'Parce que sa croissance peut être influencée par des facteurs locaux et individuels. Plusieurs arbres et des validations indépendantes permettent de mieux isoler le signal climatique commun.'
}
],
sources: [
{
title: 'NOAA Climate.gov — Past Climate',
url: 'https://www.climate.gov/maps-data/climate-data-primer/past-climate'
},
{
title: 'NOAA National Centers for Environmental Information — Paleoclimatology Data',
url: 'https://www.ncei.noaa.gov/products/paleoclimatology'
},
{
title: 'U.S. Geological Survey — Paleoclimate Archives',
url: 'https://www.usgs.gov/programs/ecosystems-land-change-science-program/science/paleoclimate-archives'
}
]
}
},
{
id: 'sediments-pollen-fossiles',
title: 'Les sédiments, les pollens et les fossiles comme archives du climat',
field: 'Climatologie · Sédimentologie · Palynologie · Paléoécologie',
summary: 'Expliquer comment les dépôts lacustres et marins, les pollens fossiles, les microfossiles et les propriétés géochimiques permettent de reconstituer les environnements et certains paramètres climatiques anciens.',
lesson: {
sections: [
'Les lacs et les océans accumulent des particules minérales, de la matière organique et des restes d’organismes. Lorsque les dépôts sont suffisamment continus et préservés, une carotte sédimentaire permet d’étudier leur succession. La composition des sédiments, les assemblages de microfossiles, la taille des grains et certains marqueurs chimiques peuvent renseigner sur les conditions environnementales au moment du dépôt. Ces indices ne sont toutefois pas uniquement climatiques : ils peuvent aussi refléter l’érosion, les changements de circulation, la productivité biologique, l’oxygénation ou des perturbations locales.',
'Les pollens produits par les plantes peuvent être transportés puis préservés dans les sédiments. L’identification des types de pollen et l’évolution de leur abondance permettent de reconstruire les changements de végétation. Comme les espèces végétales ont des exigences écologiques différentes, les assemblages fossiles donnent des indices sur les conditions de température, d’humidité et de saisonnalité. Il faut tenir compte du transport des pollens, de leur production inégale, de leur conservation et des changements dus aux activités humaines pour interpréter correctement le signal.',
'Les microfossiles marins, comme certains foraminifères, conservent dans leurs coquilles des informations biologiques et géochimiques sur l’eau dans laquelle ils se sont développés. Les rapports isotopiques de l’oxygène mesurés dans certaines coquilles peuvent refléter une combinaison de température de l’eau et de composition isotopique de l’eau de mer, elle-même influencée par le volume global de glace. D’autres indicateurs, notamment certaines relations élémentaires ou moléculaires, peuvent servir à estimer des variables comme la température de surface de l’océan, mais uniquement dans les limites de leur calibration et de leur domaine d’application.',
'Les sédiments peuvent aussi conserver des couches de cendres volcaniques, des traces de poussières transportées par le vent, du charbon issu des incendies ou des variations de matière organique. Ces éléments permettent de reconstituer certains événements et changements environnementaux, mais leurs causes doivent être distinguées : une hausse du charbon sédimentaire, par exemple, peut être liée aux incendies, à la quantité de végétation disponible, au transport ou à la conservation. Une interprétation solide s’appuie sur la stratigraphie, la datation et la comparaison avec d’autres indicateurs.'
],
example: {
statement: 'Une carotte de sédiments lacustres montre une modification des pollens fossiles et une augmentation de certains grains minéraux. Peut-on conclure directement à une baisse des précipitations ?',
calculation: 'Il faut identifier les taxons végétaux, connaître leurs exigences écologiques, vérifier les changements d’érosion et de transport minéral, dater les couches et comparer les résultats avec d’autres indicateurs hydrologiques ou climatiques.',
answer: 'Pas directement. Les données peuvent indiquer un changement de végétation ou de transport sédimentaire, mais plusieurs mécanismes peuvent produire ce signal. Une baisse des précipitations doit être étayée par des indices complémentaires.'
},
exercise: {
question: 'Pourquoi les rapports isotopiques de l’oxygène mesurés dans des microfossiles marins ne doivent-ils pas être interprétés uniquement comme un indicateur de température ?',
answer: 'Parce qu’ils dépendent à la fois de la température de formation et de la composition isotopique de l’eau de mer, qui peut varier notamment avec le volume global de glace. D’autres facteurs et les conditions de préservation doivent aussi être considérés.'
},
exercises: [
{
question: 'Que peut révéler une série de pollens fossiles dans les sédiments ?',
answer: 'Les changements de végétation et, indirectement, des informations sur les conditions écologiques et climatiques qui favorisaient les différentes plantes.'
},
{
question: 'Citer deux facteurs non climatiques susceptibles de modifier la composition d’un sédiment.',
answer: 'L’érosion et le transport des particules ; la productivité biologique, l’oxygénation et les changements locaux du bassin peuvent également intervenir.'
},
{
question: 'Pourquoi les microfossiles marins sont-ils utiles en paléoclimatologie ?',
answer: 'Leur abondance, leur composition et certaines propriétés chimiques de leurs coquilles peuvent fournir des indices sur les conditions océaniques passées, sous réserve d’une interprétation et d’une datation adaptées.'
}
],
sources: [
{
title: 'NASA Earth Observatory — Paleoclimatology: Explaining the Evidence',
url: 'https://science.nasa.gov/earth/earth-observatory/paleoclimatology-explaining-the-evidence/'
},
{
title: 'NOAA Climate.gov — Past Climate',
url: 'https://www.climate.gov/maps-data/climate-data-primer/past-climate'
},
{
title: 'NOAA National Centers for Environmental Information — Climate Reconstruction',
url: 'https://www.ncei.noaa.gov/products/paleoclimatology/climate-reconstruction'
},
{
title: 'OpenStax Biology 2e — 44.5 Climate and the Effects of Global Climate Change',
url: 'https://openstax.org/books/biology-2e/pages/44-5-climate-and-the-effects-of-global-climate-change'
}
]
}
},
{
id: 'coraux-grottes-glaciers',
title: 'Les coraux, les spéléothèmes et les glaciers',
field: 'Climatologie · Géochimie · Paléo-hydrologie · Géomorphologie glaciaire',
summary: 'Présenter les informations climatiques conservées dans les squelettes coralliens, les concrétions de grottes et les formes glaciaires, en distinguant les indices de température, d’hydrologie et de dynamique des glaciers.',
lesson: {
sections: [
'Les coraux constructeurs de récifs déposent des squelettes carbonatés dont les bandes de croissance et la composition chimique peuvent conserver des informations sur l’environnement marin. Certains rapports élémentaires et isotopiques sont sensibles à la température, à la salinité ou aux conditions de croissance. Comme plusieurs facteurs peuvent influencer un même indicateur, les reconstructions nécessitent des calibrations adaptées à l’espèce, au site et à la période. Les coraux tropicaux peuvent fournir des informations à résolution saisonnière ou annuelle lorsque leur croissance et leur préservation permettent une datation suffisamment précise.',
'Les spéléothèmes, notamment les stalagmites et les stalactites, se forment par précipitation de carbonate de calcium à partir d’eaux qui s’infiltrent dans les grottes. Leurs couches et leur géochimie peuvent enregistrer des variations du cycle hydrologique, de la végétation et de la circulation de l’eau. Les isotopes stables de l’oxygène et du carbone sont souvent étudiés, mais ils ne correspondent pas à un thermomètre simple : le signal dépend de la source des précipitations, de la saisonnalité, de l’évaporation, des processus dans le sol et la grotte, ainsi que des conditions de formation du carbonate.',
'Les glaciers et les calottes glaciaires répondent au bilan de masse, qui dépend notamment des accumulations de neige, de la fonte, du vêlage et de l’écoulement de la glace. Les moraines, les dépôts glaciaires et les traces d’érosion permettent de reconnaître les extensions passées des glaciers. Ces archives renseignent sur les conditions environnementales nécessaires à leur présence, mais la position d’un glacier ne dépend pas seulement de la température : les précipitations neigeuses, la topographie et la dynamique glaciaire interviennent également. La datation des formes et des dépôts est donc essentielle pour replacer leur évolution dans le temps.',
'Ces archives sont complémentaires. Les coraux renseignent sur certains environnements océaniques, les spéléothèmes sur les systèmes hydrologiques continentaux et les glaciers sur les conditions qui contrôlent la masse et l’écoulement de la glace. La combinaison de plusieurs indicateurs permet d’examiner si des changements observés dans différentes régions sont synchrones ou si leur chronologie diffère. Il faut cependant tenir compte des incertitudes de datation et du fait que chaque archive répond à des variables climatiques et environnementales différentes.'
],
example: {
statement: 'Une stalagmite présente un changement de composition isotopique au cours de sa croissance. Peut-on l’interpréter automatiquement comme une variation de température ?',
calculation: 'Il faut examiner les relations entre les isotopes et les précipitations locales, la source de l’humidité, la saisonnalité, les processus d’infiltration et les conditions de formation du carbonate. La datation et la comparaison avec d’autres archives hydrologiques aident à tester les interprétations possibles.',
answer: 'Non. Le changement peut refléter une modification des précipitations ou d’autres processus hydrologiques et géochimiques. Une interprétation thermique directe n’est justifiée que si elle est établie pour le site et l’indicateur concernés.'
},
exercise: {
question: 'Pourquoi l’avancée ou le recul d’un glacier ne peut-il pas être interprété comme une mesure directe et unique de la température ?',
answer: 'Parce que le glacier répond à plusieurs facteurs, dont la température, les précipitations neigeuses, le bilan de masse, la topographie et la dynamique de la glace.'
},
exercises: [
{
question: 'Quelles informations les coraux peuvent-ils conserver ?',
answer: 'Des indices sur les conditions de croissance et l’environnement marin, notamment certaines variations de température et de salinité, selon l’indicateur utilisé et sa calibration.'
},
{
question: 'Que sont les spéléothèmes ?',
answer: 'Des dépôts minéraux formés dans les grottes, notamment les stalagmites et les stalactites, qui peuvent conserver des informations sur l’hydrologie et l’environnement passés.'
},
{
question: 'Citer deux archives géomorphologiques laissées par les glaciers.',
answer: 'Les moraines et les dépôts glaciaires ; les formes d’érosion glaciaire constituent également des indices.'
}
],
sources: [
{
title: 'NOAA Climate.gov — Past Climate',
url: 'https://www.climate.gov/maps-data/climate-data-primer/past-climate'
},
{
title: 'NASA Earth Observatory — Paleoclimatology: Explaining the Evidence',
url: 'https://science.nasa.gov/earth/earth-observatory/paleoclimatology-explaining-the-evidence/'
},
{
title: 'U.S. Geological Survey — Paleoclimate Archives',
url: 'https://www.usgs.gov/programs/climate-research-and-development-program/science/paleoclimate-archives'
},
{
title: 'NOAA National Centers for Environmental Information — Paleoclimatology Data',
url: 'https://www.ncei.noaa.gov/products/paleoclimatology'
}
]
}
},
{
id: 'datation-calibration-incertitudes',
title: 'Datation, calibration, incertitudes et synthèse des reconstructions',
field: 'Climatologie · Statistiques · Géochronologie · Modélisation climatique',
summary: 'Comprendre comment les chercheurs datent les archives, calibrent les indicateurs, quantifient les incertitudes et combinent les reconstructions pour distinguer les variations naturelles des changements récents.',
lesson: {
sections: [
'La datation établit à quel moment une couche ou un échantillon s’est formé. Les méthodes disponibles dépendent du matériau et de l’échelle de temps : comptage des cernes annuels, comptage de couches lorsque celles-ci sont identifiables, datation radiométrique comme le radiocarbone dans son domaine d’application, corrélation de marqueurs volcaniques ou autres repères stratigraphiques. Certaines chronologies reposent sur plusieurs méthodes combinées. Chaque méthode a ses hypothèses, sa résolution et ses limites ; une date doit donc être associée à une incertitude et à une définition claire de ce qui est daté.',
'La calibration établit une relation entre un proxy et une variable climatique mesurée pendant une période où les observations instrumentales sont disponibles. Les chercheurs testent ensuite la stabilité de cette relation, évaluent les incertitudes statistiques et, lorsque c’est possible, valident la reconstruction sur des données qui n’ont pas servi à la calibration. Une relation statistique élevée ne garantit pas à elle seule une reconstruction fiable si elle repose sur une période trop courte, si les facteurs limitants changent ou si la relation ne reste pas stable dans le temps.',
'Les incertitudes peuvent venir de la mesure, de la datation, de la conservation de l’archive, de la calibration, de la représentativité spatiale et du modèle statistique utilisé. Il faut aussi distinguer la résolution temporelle d’une série de sa précision : une série annuelle peut contenir un signal local bruité, tandis qu’une série de résolution plus faible peut mieux représenter certaines tendances de longue durée. Les scientifiques décrivent les intervalles d’incertitude et évitent de présenter une reconstruction comme une mesure exacte.',
'Les synthèses climatiques combinent des archives et des méthodes différentes pour reconstruire des changements régionaux ou mondiaux. Les reconstructions doivent tenir compte de la répartition géographique inégale des données, de la sensibilité différente des proxies et des périodes où les archives se chevauchent. Les simulations climatiques et les connaissances sur les mécanismes physiques aident à interpréter les reconstructions, tandis que les données paléoclimatiques permettent de tester la capacité des modèles à représenter des climats différents du climat récent. Les changements climatiques du passé montrent que le système climatique varie naturellement, mais l’attribution d’un changement donné exige d’évaluer les mécanismes et les forçages en présence plutôt que de se limiter à constater qu’un changement s’est déjà produit.'
],
example: {
statement: 'Une reconstruction indique une température passée de 2,0 °C au-dessus d’une référence, avec une incertitude estimée de ±0,5 °C. Comment interpréter ce résultat ?',
calculation: 'L’intervalle indiqué par cette notation simple va de 1,5 °C à 2,5 °C au-dessus de la référence. Sa signification exacte dépend toutefois de la méthode utilisée : il peut s’agir d’un intervalle statistique défini par l’étude, et non d’une garantie absolue que la valeur vraie se trouve dans cet intervalle.',
answer: 'La reconstruction estime une anomalie de +2,0 °C, mais cette valeur n’est pas exacte au centième près. Il faut citer l’incertitude, la référence utilisée, la période concernée et la méthode de reconstruction.'
},
exercise: {
question: 'Pourquoi une reconstruction climatique doit-elle préciser la référence, la méthode de datation et l’incertitude ?',
answer: 'Ces informations permettent de comprendre ce qui est comparé, de situer correctement les événements dans le temps et d’évaluer la précision et les limites de l’estimation.'
},
exercises: [
{
question: 'Quelle est la différence entre calibration et validation d’une reconstruction ?',
answer: 'La calibration estime la relation entre le proxy et les observations climatiques ; la validation évalue les performances de la reconstruction sur des données indépendantes ou réservées à cet usage.'
},
{
question: 'Pourquoi la datation radiocarbone ne peut-elle pas être appliquée sans limite à tous les matériaux et à toutes les périodes ?',
answer: 'Parce qu’elle s’applique aux matériaux contenant du carbone dans un domaine temporel limité et exige des corrections et des hypothèses appropriées. D’autres matériaux ou périodes nécessitent d’autres méthodes.'
},
{
question: 'Quel intérêt y a-t-il à confronter les reconstructions aux modèles climatiques ?',
answer: 'Cette comparaison aide à tester la représentation des mécanismes climatiques, à interpréter les causes des variations passées et à identifier les limites des données ou des modèles.'
}
],
sources: [
{
title: 'NOAA National Centers for Environmental Information — Climate Reconstruction',
url: 'https://www.ncei.noaa.gov/products/paleoclimatology/climate-reconstruction'
},
{
title: 'NOAA National Centers for Environmental Information — Paleo Data Search',
url: 'https://www.ncei.noaa.gov/access/paleo-search/index.html'
},
{
title: 'NASA — What types of data do scientists use to study climate?',
url: 'https://science.nasa.gov/climate-change/faq/what-kinds-of-data-do-scientists-use-to-study-climate/'
},
{
title: 'OpenStax Biology 2e — 44.5 Climate and the Effects of Global Climate Change',
url: 'https://openstax.org/books/biology-2e/pages/44-5-climate-and-the-effects-of-global-climate-change'
},
{
title: 'U.S. Geological Survey — Paleoclimate Archives',
url: 'https://www.usgs.gov/programs/climate-research-and-development-program/science/paleoclimate-archives'
}
]
}
}
]
},

// BRANCHE EL NIÑO ET LA NIÑA

  {
    id: 'Nino-Nina',
    title: 'El Niño et La Niña : leurs mécanismes et leurs effets sur les températures et les précipitations mondiales',
    note: 'Six chapitres sur la définition de l’ENSO et de ses indices, l’état moyen du Pacifique tropical, les mécanismes de couplage océan-atmosphère, les effets sur les précipitations et les tempêtes, les effets sur les températures, les écosystèmes et les sociétés, puis le suivi, l’histoire et l’état de l’événement en cours en octobre 2026. Les effets décrits sont des tendances probables et non des certitudes : aucun événement n’est identique à un autre.',
    chapters: [
      {
        id: 'definition-enso',
        title: 'Définir El Niño, La Niña et l’ENSO : phases, régions et indices',
        field: 'Océanographie et climatologie · Pacifique tropical · Définitions et indices de suivi',
        summary: 'Comprendre ce que désignent El Niño, La Niña et l’Oscillation australe, comment on les mesure et à quelle fréquence ils reviennent.',
        lesson: {
          sections: [
            'L’ENSO (El Niño–Southern Oscillation) est un phénomène couplé entre l’océan et l’atmosphère du Pacifique tropical. El Niño en est la phase chaude, La Niña la phase froide, et des périodes neutres s’intercalent entre les deux. Le Climate.gov de la NOAA qualifie l’ENSO de configuration climatique naturelle la plus influente de la Terre. Selon le blog ENSO de la NOAA, des pêcheurs péruviens ont reconnu le réchauffement de l’océan Pacifique oriental et l’ont appelé « El Niño », peut-être depuis des siècles ; le nom désigne un courant d’eau chaude apparaissant au large du Pérou et de l’Équateur et se réfère à l’Enfant Jésus, car il survient vers Noël.',
            'L’« Oscillation australe » désigne l’aspect atmosphérique du phénomène : une fluctuation de pression à l’échelle du bassin tropical Indo-Pacifique, découverte par Gilbert Walker. Jacob Bjerknes a relié en 1969 ce schéma de pression à des variations de température dans le Pacifique tropical : l’océan et l’atmosphère forment un seul système couplé. L’indice d’oscillation australe (SOI) mesure la différence de pression entre Tahiti et Darwin ; un SOI négatif correspond à des eaux plus chaudes que d’habitude dans le Pacifique équatorial oriental, et le blog de la NOAA indique que le SOI est corrélé à environ 0,9 avec l’indice Niño-3.4.',
            'Pour suivre l’ENSO, la NOAA utilise des indices de température de surface dans des régions du Pacifique. La région Niño 3.4 s’étend de 5°N à 5°S et de 120°O à 170°O. L’indice océanique Niño (ONI) est la moyenne glissante sur trois mois des anomalies de température de surface dans cette région. Un épisode est classé El Niño ou La Niña lorsque l’indice atteint ±0,5 °C pendant au moins cinq saisons chevauchantes consécutives de trois mois : une valeur supérieure ou égale à +0,5 °C pour El Niño, inférieure ou égale à −0,5 °C pour La Niña, et entre les deux pour un état neutre. Le Climate Prediction Center (CPC) considère aussi que les conditions El Niño ou La Niña sont présentes lorsque l’anomalie mensuelle atteint ±0,5 °C et que l’atmosphère présente des caractéristiques cohérentes.',
            'Depuis 2026, le CPC utilise pour le suivi officiel l’indice relatif RONI, conformément à la déclaration d’information publique 26-05 du National Weather Service. Le RONI part de l’indice Niño 3.4, en retranche l’anomalie moyenne de température de surface de l’ensemble de la bande tropicale (20°N–20°S), puis ajuste le résultat pour que sa variance soit égale à celle de l’indice d’origine. Le seuil reste de ±0,5 °C sur la période de référence 1991–2020. L’ONI continue d’être publié et repose sur la version 6 des données ERSST avec des périodes de base de 30 ans centrées et mises à jour tous les cinq ans. Un autre indice, le MEI (indice multivarié), utilise des saisons de deux mois ; ses valeurs les plus fortes depuis 1979 sont 2,9 pour El Niño (mars–avril 1983) et 2,5 (mars–avril 1998), et −2,4 pour La Niña (juin–juillet et juillet–août 2010) et −2,2 (juin–juillet 2022).',
            'L’ENSO n’est pas un cycle régulier. D’après l’OMM, El Niño survient en moyenne tous les deux à sept ans et dure typiquement de neuf à douze mois. L’IRI (Columbia) précise que les événements El Niño et La Niña peuvent persister jusqu’à un an ou plus, de sorte que leurs effets s’accumulent sur plusieurs saisons. L’OMM souligne aussi qu’aucun El Niño n’est identique à un autre et que l’intensité des indicateurs ne correspond pas directement à l’intensité des effets locaux.'
          ],
          example: {
            statement: 'Valeurs fictives de l’ONI (°C) pour des saisons de trois mois consécutives : OND 0,6 ; NDJ 0,9 ; DJF 1,1 ; JFM 0,8 ; FMA 0,6 ; MAM 0,3. Cette séquence constitue-t-elle un épisode El Niño selon la règle de la NOAA ?',
            calculation: 'On compte les saisons consécutives dont l’indice est supérieur ou égal à 0,5 : OND, NDJ, DJF, JFM et FMA, soit 5 saisons. MAM (0,3) interrompt la série.',
            answer: 'Oui : le seuil de +0,5 °C est atteint sur 5 saisons chevauchantes consécutives, ce qui satisfait la durée minimale. Ces valeurs sont fictives et servent seulement à illustrer la règle.'
          },
          exercise: {
            question: 'Une période de 28 ans contient en moyenne combien d’événements ENSO chauds, si El Niño revient tous les 2 à 7 ans ?',
            answer: 'Entre 28 ÷ 7 = 4 et 28 ÷ 2 = 14 événements environ. C’est un ordre de grandeur : le phénomène est irrégulier et ne suit pas une période fixe.'
          },
          exercises: [
            {
              question: 'Quelle région sert de référence pour l’ONI ?',
              answer: 'La région Niño 3.4, entre 5°N et 5°S et entre 120°O et 170°O.'
            },
            {
              question: 'Quel seuil et quelle durée minimale définissent un épisode El Niño ou La Niña ?',
              answer: 'Un indice d’au moins +0,5 °C (El Niño) ou d’au plus −0,5 °C (La Niña) pendant au moins cinq saisons de trois mois chevauchantes consécutives.'
            },
            {
              question: 'Que signifie un indice d’oscillation australe (SOI) négatif ?',
              answer: 'La pression est relativement basse à Tahiti et haute à Darwin, et les eaux du Pacifique équatorial oriental sont plus chaudes que d’habitude : situation de type El Niño.'
            },
            {
              question: 'Quel indice sert depuis 2026 au suivi officiel de l’ENSO par le CPC ?',
              answer: 'Le RONI (indice océanique Niño relatif), selon la déclaration d’information publique 26-05 du National Weather Service.'
            }
          ],
          sources: [
            { title: 'NOAA CPC — Relative Oceanic Niño Index (RONI)', url: 'https://cpc.ncep.noaa.gov/products/analysis_monitoring/enso/roni/v5/' },
            { title: 'NOAA CPC — Oceanic Niño Index (ONI), version 6', url: 'https://cpc.ncep.noaa.gov/products/analysis_monitoring/enso/oni/v6/' },
            { title: 'NOAA CPC — Oceanic Niño Index (ONI), historique des épisodes', url: 'https://cpc.ncep.noaa.gov/products/analysis_monitoring/enso/oni/v5/' },
            { title: 'NOAA Climate.gov — The Rise of El Niño and La Niña', url: 'https://climate.gov/news-features/blogs/enso/rise-el-ni%C3%B1o-and-la-ni%C3%B1a' },
            { title: 'NOAA Climate.gov — Global impacts of El Niño and La Niña', url: 'https://www.climate.gov/news-features/featured-images/global-impacts-el-nino-and-la-nina' },
            { title: 'Midwestern Regional Climate Center (Purdue) — ENSO Indices and Past Events', url: 'https://www.mrcc.purdue.edu/index.php/climate_watch/special_topics/enso-indices-and-past-events' },
            { title: 'OMM — El Niño expected to last at least until April 2024', url: 'https://wmo.int/media/news/el-nino-expected-last-least-until-april-2024' }
          ]
        }
      },
      {
        id: 'etat-normal-pacifique',
        title: 'L’état moyen du Pacifique tropical : alizés, circulation de Walker, thermocline et remontées d’eau',
        field: 'Océanographie physique · Circulation tropicale · État de référence de l’ENSO',
        summary: 'Comprendre l’état normal de l’océan et de l’atmosphère du Pacifique tropical, dont El Niño et La Niña sont des écarts.',
        lesson: {
          sections: [
            'Dans les conditions neutres, les alizés soufflent d’est en ouest le long de l’équateur. Le blog de la NOAA précise qu’ils vont des zones d’air descendant vers les zones d’air ascendant. Selon l’IRI, l’Indonésie et les autres régions du Pacifique occidental reçoivent alors plus de précipitations que le Pacifique oriental, comme le Pérou et l’Équateur. Les alizés entraînent les eaux chaudes de surface vers l’ouest, ce qui forme la « piscine d’eau chaude » du Pacifique occidental, tandis que les eaux de surface de l’est restent plus fraîches.',
            'L’atmosphère répond à ce contraste de température par la circulation de Walker : un air chaud et humide s’élève au-dessus de l’ouest, un air plus froid et plus sec descend du côté est. Mojib Latif et David Neelin expliquent que Bjerknes a nommé cette circulation en l’honneur de Walker, et que le vent d’est en surface fait partie du système des alizés. Le vent d’est exerce sur l’océan une contrainte qui amoncelle l’eau à l’ouest. Les alizés sont donc à la fois la conséquence du gradient de température entre l’ouest et l’est et l’une de ses causes : c’est ce couplage qui permet à l’ENSO d’exister.',
            'La thermocline est la couche où la température de l’océan chute rapidement entre l’eau chaude de surface et l’eau froide profonde. Dans l’état moyen, la couche d’eau chaude est épaisse à l’ouest et mince à l’est : un modèle de l’océan évalué par Graham et ses collègues reproduit une piscine d’eau chaude profonde dans le Pacifique équatorial occidental, qui s’amincit en une couche de mélange mince dans l’est. Cette pente de la thermocline est un élément essentiel de l’ENSO : le CPC surveille un indice de température sous la surface, et en octobre 2026 il relie un indice bien supérieur à la moyenne à une thermocline plus profonde que la normale.',
            'Dans l’est, l’eau froide profonde remonte près des côtes. Le service éducatif de l’UCAR explique que le vent le long de la côte pousse l’eau de surface vers le large, ce qui fait remonter l’eau profonde riche en nutriments vers la surface. Selon OpenStax (Biology 2e, chapitre 44), la plus grande partie de l’océan ouvert ne dispose pas de processus qui ramène les nutriments organiques en surface ; les grandes remontées d’eau du courant de Humboldt, le long de la côte ouest de l’Amérique du Sud, font exception. OpenStax rappelle aussi que la capacité de l’eau à stocker de grandes quantités d’énergie a des effets majeurs sur le climat et la météo mondiaux.',
            'L’ENSO est donc une fluctuation autour de cet état moyen. Selon le Climate.gov de la NOAA, le lieu principal de l’air humide ascendant, au-dessus des eaux les plus chaudes, se situe dans le Pacifique central ou oriental pendant El Niño et sur l’Indonésie et le Pacifique occidental pendant La Niña. Comprendre l’état de référence permet de raisonner sur les écarts : pendant El Niño, les alizés faiblissent et la zone chaude s’étend vers l’est ; pendant La Niña, ils se renforcent et le contraste est-ouest s’accentue.'
          ],
          example: {
            statement: 'Pendant un épisode, la pression est anormalement basse à Tahiti et anormalement haute à Darwin. L’indice SOI (pression de Tahiti moins pression de Darwin, normalisée) est-il positif ou négatif, et de quelle phase s’agit-il ?',
            calculation: 'Pression basse (Tahiti) moins pression haute (Darwin) donne une différence négative : le SOI est négatif.',
            answer: 'Le SOI est négatif, ce qui correspond à des eaux plus chaudes que la normale dans le Pacifique équatorial oriental : situation de type El Niño. Un SOI positif correspondrait plutôt à La Niña.'
          },
          exercise: {
            question: 'Pourquoi la remontée d’eau (upwelling) au large du Pérou est-elle importante pour la vie marine ?',
            answer: 'Parce qu’elle ramène vers la surface une eau profonde riche en nutriments, qui alimente le phytoplancton et donc les chaînes alimentaires marines, y compris les pêcheries.'
          },
          exercises: [
            {
              question: 'Dans quelle direction soufflent les alizés le long de l’équateur dans les conditions neutres ?',
              answer: 'D’est en ouest.'
            },
            {
              question: 'Quelle région du Pacifique reçoit normalement plus de précipitations : l’ouest (Indonésie) ou l’est (Pérou, Équateur) ?',
              answer: 'L’ouest, d’après l’IRI.'
            },
            {
              question: 'Qu’est-ce que la thermocline ?',
              answer: 'La couche de l’océan où la température diminue rapidement entre l’eau chaude de surface et l’eau froide profonde.'
            },
            {
              question: 'Quel courant OpenStax cite-t-il comme exception à l’absence de remontée de nutriments dans l’océan ouvert ?',
              answer: 'Les remontées d’eau du courant de Humboldt, le long de la côte ouest de l’Amérique du Sud.'
            }
          ],
          sources: [
            { title: 'NOAA Climate.gov — The Rise of El Niño and La Niña', url: 'https://climate.gov/news-features/blogs/enso/rise-el-ni%C3%B1o-and-la-ni%C3%B1a' },
            { title: 'IRI (Columbia) — Why do we care about El Niño and La Niña?', url: 'https://iri.columbia.edu/our-expertise/climate/enso/why-do-we-care-about-el-nino-and-la-nina/' },
            { title: 'Latif et Neelin — Modelling the El Niño–Southern Oscillation, Europhysics News', url: 'https://www.europhysicsnews.org/articles/epn/pdf/1994/07/epn19942507p143.pdf' },
            { title: 'Graham et al. (2015) — Reassessing Conceptual Models of ENSO, Journal of Climate', url: 'https://repository.library.noaa.gov/view/noaa/29852/noaa_29852_DS1.pdf' },
            { title: 'UCAR Center for Science Education — An El Niño Fish Tale', url: 'https://scied.ucar.edu/el-nino-fish-tale' },
            { title: 'OpenStax Biology 2e — 44.4 Aquatic Biomes', url: 'https://openstax.org/books/biology-2e/pages/44-4-aquatic-biomes' },
            { title: 'NOAA Climate.gov — Global impacts of El Niño and La Niña', url: 'https://www.climate.gov/news-features/featured-images/global-impacts-el-nino-and-la-nina' }
          ]
        }
      },
      {
        id: 'mecanismes-couplage',
        title: 'Les mécanismes de l’ENSO : rétroaction de Bjerknes, ondes océaniques et inversion de phase',
        field: 'Dynamique climatique · Couplage océan-atmosphère · Modèles conceptuels de l’ENSO',
        summary: 'Comprendre comment un événement s’amplifie par rétroaction positive, puis pourquoi il s’achève et peut laisser place à la phase opposée.',
        lesson: {
          sections: [
            'La croissance d’un El Niño repose sur la rétroaction de Bjerknes, une rétroaction positive entre le vent et la température de surface. Selon le Climate.gov de la NOAA, elle commence lorsque les alizés faiblissent ou que la température de surface augmente dans le Pacifique central et oriental. Des vents plus faibles réduisent la remontée d’eau froide dans l’est ; l’eau y est plus chaude, le contraste est-ouest diminue, la circulation de Walker faiblit encore et les alizés diminuent davantage. Graham et ses collègues décrivent la même chaîne : l’anomalie initiale de température dans l’est réduit le gradient équatorial, affaiblit la circulation de Walker et modifie la contrainte du vent de façon à renforcer l’anomalie de départ.',
            'La Niña est le même mécanisme dans l’autre sens. Pendant La Niña, les alizés soufflent plus fort que la normale, entassent l’eau chaude de surface dans le Pacifique occidental et font remonter de l’eau profonde et froide dans l’est ; le contraste est-ouest et les vents d’est s’accentuent ensemble. La NOAA indique que l’on ne sait pas toujours quel élément déclenche la boucle : parfois la surface se refroidit d’abord puis les alizés se renforcent, parfois l’inverse. Cette ambiguïté explique pourquoi l’ENSO se mesure de plusieurs façons (température, pression, vent, pluie), car ces variables évoluent ensemble.',
            'L’initiation et la croissance d’un El Niño font intervenir les ondes équatoriales. Dans le modèle de l’oscillateur retardé décrit par Graham et ses collègues, des anomalies de vent d’ouest dans le Pacifique central provoquent une onde de Kelvin descendante qui se propage vers l’est et augmente la température de surface dans la région Niño-3. Ces auteurs rappellent aussi que des événements de haute fréquence, comme l’oscillation de Madden-Julian ou les coups de vent d’ouest, jouent un rôle de forçage aléatoire dans l’excitation des événements. Ainsi, l’ENSO combine une dynamique interne et un bruit atmosphérique, ce qui limite sa régularité.',
            'Une rétroaction positive seule ferait croître l’événement indéfiniment : il faut des rétroactions négatives retardées pour inverser la phase. La NOAA note que ces événements « sèment les graines de leur propre fin » par des processus océaniques retardés. Dans l’oscillateur retardé, des ondes de Rossby ascendantes se réfléchissent à la frontière occidentale en ondes de Kelvin ascendantes qui remontent la thermocline dans l’est et refroidissent la surface. Tziperman et ses collègues estiment qu’elles atteignent le Pacifique oriental environ six mois après la perturbation de vent initiale. Dans l’oscillateur de recharge de Jin (1997), un El Niño évacue de la chaleur de la bande équatoriale vers les latitudes plus élevées, laissant la thermocline anormalement peu profonde, ce qui favorise le passage vers La Niña ; l’accumulation de chaleur équatoriale est une condition préalable au prochain El Niño. Izumo et ses collègues proposent un oscillateur hybride combinant la recharge lente et la rétroaction retardée plus rapide, avec des contributions équivalentes.',
            'Le calendrier et la diversité des événements nuancent ce schéma. Les événements s’installent généralement au printemps ou en été boréal et atteignent leur maximum en hiver boréal ; Tziperman et ses collègues montrent que l’amplification saisonnière des ondes de Rossby et de Kelvin bloque le pic des El Niño vers la fin de l’année civile. Le modèle de recharge décrit assez bien les El Niño de type Pacifique oriental, mais moins bien ceux de type Pacifique central (dits « Modoki »), où la recharge et la décharge de chaleur équatoriale jouent un rôle moindre. Enfin, les La Niña de plusieurs années sont souvent expliquées comme un rebond après un El Niño extrême qui a vidé l’océan équatorial de sa chaleur, mais la La Niña de 2020–2023, précédée d’un El Niño borderline, ne suit pas ce scénario selon McPhaden et ses collègues.'
          ],
          example: {
            statement: 'Selon Tziperman et ses collègues, le signal qui met fin à un El Niño atteint l’est du Pacifique environ six mois après la perturbation de vent initiale. Si une anomalie de vent d’ouest apparaît en juillet, à quel mois le signal d’arrêt arrive-t-il ?',
            calculation: 'Juillet est le mois 7 ; 7 + 6 = 13, soit le mois 1 de l’année suivante (13 − 12 = 1), donc janvier.',
            answer: 'Environ janvier de l’année suivante, c’est-à-dire en plein hiver boréal, ce qui concorde avec le fait que les El Niño atteignent leur pic en fin d’année civile. C’est un ordre de grandeur, car le délai varie.'
          },
          exercise: {
            question: 'Pourquoi une rétroaction positive ne suffit-elle pas à expliquer l’alternance entre El Niño et La Niña ?',
            answer: 'Parce qu’elle ne fait qu’amplifier l’anomalie existante. Pour que la phase s’inverse, il faut des rétroactions négatives retardées, par exemple les ondes de Kelvin et de Rossby réfléchies ou la décharge de chaleur équatoriale.'
          },
          exercises: [
            {
              question: 'En quoi consiste la rétroaction de Bjerknes ?',
              answer: 'C’est une rétroaction positive entre le vent et la température de surface du Pacifique tropical : un réchauffement de l’est affaiblit les alizés, ce qui réduit la remontée d’eau froide et réchauffe encore l’est (le processus inverse vaut pour La Niña).'
            },
            {
              question: 'Que se passe-t-il pendant La Niña pour les alizés et les eaux de surface ?',
              answer: 'Les alizés soufflent plus fort que la normale, entassent l’eau chaude dans le Pacifique occidental et font remonter de l’eau profonde et froide dans l’est.'
            },
            {
              question: 'Que décrit l’oscillateur de recharge de Jin (1997) ?',
              answer: 'Le rôle du contenu de chaleur équatorial : il s’accumule avant un El Niño, puis El Niño l’évacue vers les latitudes élevées, laissant une thermocline peu profonde qui favorise La Niña.'
            },
            {
              question: 'À quelle saison les événements atteignent-ils généralement leur maximum ?',
              answer: 'En hiver boréal (fin de l’année civile).'
            }
          ],
          sources: [
            { title: 'NOAA Climate.gov — The Rise of El Niño and La Niña', url: 'https://climate.gov/news-features/blogs/enso/rise-el-ni%C3%B1o-and-la-ni%C3%B1a' },
            { title: 'Graham et al. (2015) — Reassessing Conceptual Models of ENSO, Journal of Climate', url: 'https://repository.library.noaa.gov/view/noaa/29852/noaa_29852_DS1.pdf' },
            { title: 'Tziperman et al. (1998) — Locking of El Niño’s Peak Time to the End of the Calendar Year in the Delayed Oscillator Picture of ENSO', url: 'https://origin.cpc.ncep.noaa.gov/products/people/yxue/pub/7.pdf' },
            { title: 'Izumo et al. — The Hybrid Recharge Delayed Oscillator: A More Realistic El Niño Conceptual Model', url: 'https://par.nsf.gov/servlets/purl/10530647' },
            { title: 'McPhaden, Hasan et Chikamoto (2023) — Causes and Consequences of the Prolonged 2020–2023 La Niña, EGU General Assembly', url: 'https://meetingorganizer.copernicus.org/EGU23/EGU23-10801.html' }
          ]
        }
      },
      {
        id: 'impacts-precipitations',
        title: 'Effets sur les précipitations et les tempêtes : déplacement de la convection et téléconnexions',
        field: 'Climatologie régionale · Téléconnexions · Sécheresses, inondations et cyclones',
        summary: 'Comprendre comment le déplacement de la pluie tropicale modifie les précipitations loin du Pacifique, et pourquoi ces effets restent probables sans être garantis.',
        lesson: {
          sections: [
            'Le premier effet de l’ENSO est un déplacement de la convection tropicale. D’après le Climate.gov de la NOAA, El Niño et La Niña réchauffent et refroidissent alternativement de vastes zones du Pacifique tropical, ce qui modifie fortement où et combien il pleut. Comme un rocher dans un cours d’eau, ce déplacement perturbe la circulation atmosphérique qui relie les tropiques aux moyennes latitudes, puis modifie les courants-jets. Il n’y a pas d’effets cohérents sur l’Amérique du Nord en été, alors que les régions tropicales et les subtropiques de l’hémisphère Sud, comme l’Australie, sont touchées aux deux saisons. En octobre 2026, le CPC décrit une convection et des pluies renforcées du Pacifique central à l’est, et supprimées sur l’Indonésie.',
            'Dans les régions proches du Pacifique, les effets typiques d’El Niño sont des pluies et inondations accrues sur la côte du Pérou et de l’Équateur et une sécheresse en Indonésie et en Australie ; La Niña produit l’inverse. L’IRI cite les inondations et glissements de terrain au Pérou et en Californie (l’El Niño de 1997 a causé 2 milliards de dollars de dégâts matériels au Pérou), ainsi que les incendies de forêt et leur pollution de l’air en Indonésie. Pendant La Niña, le Pacifique occidental reçoit plus de pluie que la moyenne, et les inondations peuvent être graves si elles suivent une sécheresse prolongée liée à El Niño. Une étude de Scientific Reports décrit, pour El Niño, des conditions plus sèches du sud et sud-est de l’Asie à l’Australie (surtout à l’est), dans le centre de la Chine, l’Amérique du Sud équatoriale, le nord des États-Unis, l’ouest et le sud du Canada et le Sahel.',
            'Aux latitudes moyennes, les effets passent par les ondes atmosphériques et les courants-jets. Selon les cours de Penn State, El Niño est souvent associé à de fortes pluies et inondations dans le sud des États-Unis, tandis que La Niña peut y provoquer de graves sécheresses ; des régions comme le nord-ouest Pacifique américain connaissent souvent des conditions plus sèches. Ces schémas sont des tendances de probabilité : l’IRI précise que les téléconnexions typiques d’El Niño sont probables, mais pas certaines, et le CPC indique, à propos de l’événement de 2026, que des impacts cohérents avec El Niño sont plus probables lorsque l’événement est fort, sans être garantis.',
            'Les cyclones tropicaux constituent un effet bien documenté. D’après la NOAA, El Niño favorise une activité cyclonique plus forte dans le Pacifique central et oriental et la supprime dans l’Atlantique ; La Niña a l’effet inverse. Le mécanisme principal est le cisaillement vertical du vent, c’est-à-dire la variation de la vitesse et de la direction du vent avec l’altitude, qui peut déchirer un cyclone en formation ou l’empêcher de se former. Pendant El Niño, des vents d’ouest plus forts en altitude et des alizés plus forts dans l’Atlantique augmentent ce cisaillement ; El Niño accentue aussi les mouvements descendants et la stabilité de l’atmosphère. L’effet se combine avec les cycles multidécennaux : dans une ère de forte activité atlantique, El Niño produit en général une saison proche de la normale et La Niña une saison supérieure à la normale.',
            'Les effets s’accumulent et se combinent dans le temps. L’IRI cite, parmi les effets des téléconnexions de l’ENSO, une invasion de criquets bruns en Afrique australe liée à des pluies précoces d’hiver, qui peuvent aussi conduire à la sécheresse, à l’échec des récoltes et à la famine. Pour la La Niña prolongée de 2020–2022, le secrétaire général de l’OMM a associé la sécheresse qui s’aggravait dans la Corne de l’Afrique et dans le sud de l’Amérique du Sud, ainsi que les pluies supérieures à la moyenne en Asie du Sud-Est et en Océanie, aux marques de La Niña ; le chercheur Richard Seager a aussi relié La Niña aux inondations en Asie, dont celles du Pakistan. Ces exemples illustrent que les effets locaux dépendent aussi d’autres facteurs que l’ENSO.'
          ],
          example: {
            statement: 'Une saison cyclonique s’annonce pendant un El Niño établi. Dans quel bassin faut-il s’attendre à une activité plus forte, et quel mécanisme l’explique principalement ?',
            calculation: 'Selon la NOAA, El Niño augmente le cisaillement vertical du vent sur l’Atlantique (plus de cisaillement = moins de cyclones) et le réduit sur le Pacifique central et oriental (moins de cisaillement = plus de cyclones).',
            answer: 'Plus d’activité dans le Pacifique central et oriental, moins dans l’Atlantique, principalement à cause du cisaillement vertical du vent. C’est une tendance de probabilité : le cycle multidécennal de l’Atlantique modifie aussi le résultat.'
          },
          exercise: {
            question: 'Pourquoi un El Niño fort ne garantit-il pas les mêmes effets dans toutes les régions ?',
            answer: 'Parce que les téléconnexions sont des tendances probables et non des certitudes : l’intensité des indicateurs ne correspond pas directement à l’intensité des effets locaux, aucun événement n’est identique à un autre, et d’autres facteurs climatiques agissent en même temps.'
          },
          exercises: [
            {
              question: 'Où le principal foyer de convection se trouve-t-il pendant El Niño et pendant La Niña ?',
              answer: 'Pendant El Niño, dans le Pacifique central ou oriental ; pendant La Niña, sur l’Indonésie et le Pacifique occidental.'
            },
            {
              question: 'Quels effets typiques d’El Niño sont observés sur la côte du Pérou et en Indonésie ?',
              answer: 'Des pluies et inondations accrues sur la côte du Pérou et de l’Équateur, et de la sécheresse, des incendies de forêt et de la pollution de l’air en Indonésie.'
            },
            {
              question: 'Quel est l’effet d’El Niño sur l’activité cyclonique dans l’Atlantique et dans le Pacifique oriental ?',
              answer: 'Il la supprime en général dans l’Atlantique (cisaillement du vent accru) et la renforce dans le Pacifique central et oriental.'
            },
            {
              question: 'Y a-t-il des effets cohérents d’El Niño sur l’Amérique du Nord en été ?',
              answer: 'Non : le Climate.gov indique qu’il n’y a pas d’effets cohérents sur l’Amérique du Nord en été, alors que les tropiques et les subtropiques de l’hémisphère Sud sont touchés aux deux saisons.'
            }
          ],
          sources: [
            { title: 'NOAA Climate.gov — Global impacts of El Niño and La Niña', url: 'https://www.climate.gov/news-features/featured-images/global-impacts-el-nino-and-la-nina' },
            { title: 'NOAA Climate.gov — Impacts of El Niño and La Niña on the hurricane season', url: 'https://www.climate.gov/news-features/blogs/enso/impacts-el-nino-and-la-nina-hurricane-season' },
            { title: 'IRI (Columbia) — Why do we care about El Niño and La Niña?', url: 'https://iri.columbia.edu/our-expertise/climate/enso/why-do-we-care-about-el-nino-and-la-nina/' },
            { title: 'NOAA CPC — ENSO Diagnostic Discussion, 8 octobre 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_disc_oct2026/ensodisc.shtml' },
            { title: 'Scientific Reports — Combined effects of the Pacific Decadal Oscillation and El Niño-Southern Oscillation on Global Land Dry–Wet Changes', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4200402/' },
            { title: 'Penn State (METEO 7) — Climatic Impacts of ENSO Events Beyond the Tropical Pacific', url: 'https://courses.ems.psu.edu/meteo7/book/export/html/2015' },
            { title: 'ABC News — What is a triple dip La Niña?', url: 'https://abc7news.com/triple-dip-la-nia-severe-weather-human-induced-climate-change-global-temperatures/12215880/' }
          ]
        }
      },
      {
        id: 'impacts-temperatures-ecosystemes',
        title: 'Effets sur les températures mondiales, les écosystèmes marins et les sociétés',
        field: 'Climat et environnement · Température globale, productivité marine et risques · Années 1970 à 2020',
        summary: 'Comprendre comment l’ENSO module la température moyenne du globe, perturbe la vie marine et pèse sur les sociétés, sans masquer le réchauffement climatique de fond.',
        lesson: {
          sections: [
            'El Niño libère de la chaleur stockée dans l’océan vers l’atmosphère et tend donc à élever la température moyenne du globe, alors que La Niña a souvent un effet de refroidissement temporaire. L’OMM indique que les effets d’El Niño sur la température mondiale se manifestent en général l’année qui suit son développement : pour l’événement apparu en 2023, elle les situait donc en 2024. L’OMM rappelle que 2016, ancienne année la plus chaude, résultait de l’effet combiné d’un El Niño exceptionnellement fort et du changement climatique.',
            'Il faut distinguer la variabilité naturelle de la tendance. Pour 2023–2024, l’OMM a classé El Niño parmi les cinq plus forts jamais enregistrés, avec un maximum entre novembre et janvier où l’anomalie de température de surface a atteint environ 2 °C dans la région Niño 3.4. Elle précise cependant que El Niño a contribué aux températures records, mais que les gaz à effet de serre en sont sans équivoque la principale cause, et que la température de surface de la mer de janvier 2024, la plus élevée jamais enregistrée pour un mois de janvier, ne peut pas s’expliquer par El Niño seul.',
            'À l’inverse, La Niña peut ralentir temporairement le réchauffement de surface. Selon Michael McPhaden (NOAA), la La Niña triple de 2020–2023 a pu offrir un répit temporaire à la hausse des températures mondiales, et elle a interrompu la hausse des températures de surface de la mer jusqu’au retour d’El Niño à l’été 2023, suivi d’une libération rapide de chaleur stockée dans l’océan supérieur. Les cycles ENSO ne modifient donc pas la tendance de long terme, mais ils déplacent les valeurs annuelles autour d’elle, ce qui compte lorsqu’on compare des années successives.',
            'Sur le plan écologique, El Niño réduit les remontées d’eau froide riche en nutriments, donc le phytoplancton qui nourrit les poissons. L’exemple classique est celui de l’anchois péruvien : d’après l’UCAR, la pêche atteignait près de 10 millions de tonnes en 1970, puis les bateaux sont rentrés avec les filets vides en 1972, et des oiseaux marins sont morts en grand nombre. L’UCAR ajoute que la surpêche des années 1960 avait réduit la résilience des anchois, qui ont moins bien supporté l’El Niño de 1972. Les épisodes forts s’accompagnent aussi de blanchissement des coraux ; les cours de Penn State notent que les récifs coralliens, sensibles aux variations de température, peuvent subir des épisodes de blanchissement pendant les forts El Niño. OpenStax signale par ailleurs que le réchauffement des océans met déjà en danger les récifs coralliens.',
            'Les effets touchent aussi les sociétés et le cycle du carbone. L’IRI rappelle que, pendant les deux plus forts El Niño du XXᵉ siècle (1982–1983 et 1997–1998), les modifications du climat se sont étendues aux épidémies, aux catastrophes naturelles, à la disponibilité de l’eau et à l’énergie hydroélectrique. Une étude publiée dans Scientific Reports rappelle que l’ENSO influence fortement les variations interannuelles du cycle mondial du carbone : dans l’essentiel des tropiques, la productivité de la végétation baisse avec la hausse de température et la baisse de pluie associées à El Niño, et l’inverse vaut pendant La Niña. L’ENSO relie donc directement le cycle de l’eau, la température et le cycle du carbone.'
          ],
          example: {
            statement: 'En septembre 2026, le CPC indique des anomalies relatives de température de surface de +2,1 °C dans Niño-3.4, +3,0 °C dans Niño-3 et +3,9 °C dans Niño-1+2. Quel est l’écart entre Niño-1+2 (côte sud-américaine) et Niño-3.4 (Pacifique central) ?',
            calculation: '3,9 − 2,1 = 1,8 °C.',
            answer: 'L’anomalie est plus forte de 1,8 °C près de la côte sud-américaine que dans le Pacifique central. Le CPC précise même que les anomalies dépassent +4,0 °C dans certaines parties du Pacifique équatorial oriental.'
          },
          exercise: {
            question: 'Pourquoi El Niño fait-il baisser la pêche à l’anchois au Pérou ?',
            answer: 'Parce que l’eau chaude de surface réduit la remontée d’eau froide riche en nutriments ; il y a moins de phytoplancton et donc moins d’anchois. Dans le cas de 1972, la surpêche avait aussi affaibli la résilience du stock.'
          },
          exercises: [
            {
              question: 'Quand les effets d’El Niño sur la température mondiale se manifestent-ils typiquement, selon l’OMM ?',
              answer: 'L’année qui suit le développement d’El Niño (par exemple 2024 pour l’événement apparu en 2023).'
            },
            {
              question: 'Pourquoi l’OMM insiste-t-elle sur le fait qu’El Niño n’explique pas à lui seul les records de 2023–2024 ?',
              answer: 'Parce que les gaz à effet de serre en sont la principale cause ; la température de surface de la mer de janvier 2024 ne peut pas s’expliquer par El Niño seul.'
            },
            {
              question: 'Quelle a été la conséquence de la La Niña de 2020–2023 sur les températures mondiales, selon McPhaden ?',
              answer: 'Elle a pu offrir un répit temporaire à la hausse des températures et a interrompu la hausse de la température de surface de la mer jusqu’au retour d’El Niño à l’été 2023.'
            },
            {
              question: 'Que se passe-t-il pour la végétation tropicale pendant El Niño ?',
              answer: 'Sa productivité baisse dans l’essentiel des tropiques en raison de la hausse de température et de la baisse de précipitations, avec l’effet inverse pendant La Niña.'
            }
          ],
          sources: [
            { title: 'OMM — El Niño expected to last at least until April 2024', url: 'https://wmo.int/media/news/el-nino-expected-last-least-until-april-2024' },
            { title: 'NOAA (Global Ocean Monitoring) — Recent “Triple-Dip” La Niña upends current understanding of ENSO', url: 'https://globalocean.noaa.gov/recent-triple-dip-la-nina-upends-current-understanding-of-enso' },
            { title: 'UCAR Center for Science Education — An El Niño Fish Tale', url: 'https://scied.ucar.edu/el-nino-fish-tale' },
            { title: 'IRI (Columbia) — Why do we care about El Niño and La Niña?', url: 'https://iri.columbia.edu/our-expertise/climate/enso/why-do-we-care-about-el-nino-and-la-nina/' },
            { title: 'Scientific Reports — Intensification of terrestrial carbon cycle related to El Niño–Southern Oscillation under greenhouse warming', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5698330/' },
            { title: 'Penn State (METEO 7) — Climatic Impacts of ENSO Events Beyond the Tropical Pacific', url: 'https://courses.ems.psu.edu/meteo7/book/export/html/2015' },
            { title: 'OpenStax Biology 2e — 44.4 Aquatic Biomes', url: 'https://openstax.org/books/biology-2e/pages/44-4-aquatic-biomes' },
            { title: 'NOAA CPC — ENSO Diagnostic Discussion, 8 octobre 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_disc_oct2026/ensodisc.shtml' }
          ]
        }
      },
      {
        id: 'suivi-histoire-climat',
        title: 'Observer, prévoir et replacer l’ENSO : événements marquants, état en octobre 2026 et changement climatique',
        field: 'Climatologie · Suivi opérationnel, histoire des événements et perspectives · De 1950 à 2026',
        summary: 'Comprendre comment le CPC suit l’ENSO, quels ont été les événements marquants, où en est l’événement de 2026 et ce que l’on sait de l’avenir de l’ENSO.',
        lesson: {
          sections: [
            'Le CPC publie chaque mois un diagnostic de l’ENSO et un système d’alerte (par exemple « El Niño Advisory »). Le diagnostic croise plusieurs observations : les indices de température de surface, un indice de température sous la surface entre 180° et 100°O qui reflète la profondeur de la thermocline, les anomalies de vent de basse et haute altitude, la convection et les pluies, et les indices d’oscillation australe. Le raisonnement est probabiliste : il donne des chances d’atteindre certaines intensités, et non une prédiction unique. La prochaine discussion mensuelle du CPC suivant celle d’octobre 2026 est prévue le 12 novembre 2026.',
            'Plusieurs événements servent de repères. L’IRI cite 1982–1983 et 1997–1998 comme les deux plus forts El Niño du XXᵉ siècle ; selon le MEI, les valeurs les plus fortes depuis 1979 datent de mars–avril 1983 (2,9) et mars–avril 1998 (2,5). L’OMM compte l’El Niño de 2023–2024 parmi les cinq plus forts jamais enregistrés. Pour La Niña, les valeurs MEI les plus fortes ont été −2,4 en juin–juillet et juillet–août 2010 et −2,2 en juin–juillet 2022. Ces classements dépendent de l’indice et de la période choisis : la NOAA utilise plusieurs indices qui ne sont pas strictement interchangeables.',
            'La La Niña de 2020–2023 est un cas d’étude. Il s’agit de la première La Niña « triple » du XXIᵉ siècle ; des événements comparables ont eu lieu en 1973–1976 et 1998–2001. Une hypothèse répandue veut que les La Niña pluriannuelles surviennent en rebond d’un El Niño extrême qui a vidé l’océan équatorial de sa chaleur ; selon McPhaden et ses collègues, ce n’était pas le cas en 2019, et ils invoquent plutôt des interactions entre bassins tropicaux. Pour la NOAA, cette La Niña montre que les concepts actuels de l’ENSO pourraient ne plus être adaptés dans un climat qui change.',
            'État de l’événement en cours. Dans sa discussion du 8 octobre 2026, le CPC maintient un « El Niño Advisory » : El Niño continue de se renforcer et un événement fort à très fort est probable jusqu’en janvier–mars 2027 (probabilité supérieure à 83 %). Les anomalies relatives atteignent +2,1 °C dans Niño-3.4, +3,0 °C dans Niño-3 et +3,9 °C dans Niño-1+2, avec plus de +4,0 °C par endroits dans l’est du Pacifique équatorial. La thermocline est plus profonde que la moyenne, des vents d’ouest anormaux s’étendent de l’ouest vers le centre-est du Pacifique, les pluies sont renforcées du centre à l’est et supprimées sur l’Indonésie, et les indices d’oscillation australe sont fortement négatifs. Le CPC évalue à 54 % (septembre–novembre), 83 % (octobre–décembre) et 70 % (novembre–janvier) la probabilité d’un événement historique, c’est-à-dire d’un RONI sur trois mois supérieur ou égal à +2,5 °C, ce qui dépasserait tous les El Niño depuis 1950. Il s’agit de probabilités de prévision, valables à la date indiquée et mises à jour chaque mois.',
            'Enfin, le changement climatique complique l’avenir de l’ENSO. D’après le GIEC (AR6), il est virtuellement certain que l’ENSO restera le mode dominant de la variabilité interannuelle dans un monde plus chaud ; il est très probable que la variabilité des précipitations liée à l’ENSO soit amplifiée dans la seconde moitié du XXIᵉ siècle dans la plupart des scénarios, mais il n’y a pas de consensus entre modèles pour un changement systématique de l’intensité de la variabilité de température de surface (confiance moyenne). Une étude de Cai et ses collègues (2022) soutient au contraire que les modèles CMIP6 montrent une variabilité de température plus forte au XXIᵉ siècle. Le blog de la NOAA ajoute qu’il n’existe pas de preuve claire que les changements de l’ENSO depuis 1950 soient inhabituels. Ces désaccords sont à retenir : l’incertitude sur l’évolution de l’ENSO est réelle.'
          ],
          example: {
            statement: 'Selon le MEI, l’El Niño de mars–avril 1983 a atteint 2,9 et la La Niña de l’été 2010 a atteint −2,4. Quel événement a eu l’amplitude la plus forte, et de combien en unités d’indice ?',
            calculation: 'On compare les valeurs absolues : |2,9| = 2,9 et |−2,4| = 2,4 ; 2,9 − 2,4 = 0,5.',
            answer: 'L’El Niño de 1983 a eu l’amplitude la plus forte, de 0,5 unité d’indice. Ces valeurs viennent d’un indice particulier : un autre indice pourrait donner un classement légèrement différent.'
          },
          exercise: {
            question: 'Pourquoi la La Niña de 2020–2023 a-t-elle surpris les scientifiques ?',
            answer: 'Parce qu’elle n’a pas suivi un El Niño extrême ayant vidé l’océan de sa chaleur, scénario habituellement avancé pour expliquer les La Niña de plusieurs années ; l’événement a donc remis en question certains concepts de l’ENSO.'
          },
          exercises: [
            {
              question: 'Quel est le statut de l’ENSO selon le CPC le 8 octobre 2026 ?',
              answer: 'El Niño Advisory : El Niño continue de se renforcer et un événement fort à très fort est probable jusqu’en janvier–mars 2027.'
            },
            {
              question: 'Quel seuil le CPC utilise-t-il pour qualifier un événement d’« historique » dans sa discussion d’octobre 2026 ?',
              answer: 'Un RONI sur trois mois supérieur ou égal à +2,5 °C, ce qui dépasserait tous les El Niño depuis 1950.'
            },
            {
              question: 'Quelles années ont connu des La Niña de trois hivers consécutifs avant 2020–2023, selon NOAA et McPhaden ?',
              answer: '1973–1976 et 1998–2001.'
            },
            {
              question: 'Que dit le GIEC AR6 à propos de la persistance de l’ENSO dans un climat plus chaud ?',
              answer: 'Il est virtuellement certain qu’il restera le mode dominant de variabilité interannuelle ; en revanche, il n’y a pas de consensus entre modèles pour un changement systématique de l’intensité de sa variabilité de température de surface.'
            }
          ],
          sources: [
            { title: 'NOAA CPC — ENSO Diagnostic Discussion, 8 octobre 2026', url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_disc_oct2026/ensodisc.shtml' },
            { title: 'Midwestern Regional Climate Center (Purdue) — ENSO Indices and Past Events', url: 'https://www.mrcc.purdue.edu/index.php/climate_watch/special_topics/enso-indices-and-past-events' },
            { title: 'IRI (Columbia) — Why do we care about El Niño and La Niña?', url: 'https://iri.columbia.edu/our-expertise/climate/enso/why-do-we-care-about-el-nino-and-la-nina/' },
            { title: 'OMM — El Niño expected to last at least until April 2024', url: 'https://wmo.int/media/news/el-nino-expected-last-least-until-april-2024' },
            { title: 'NOAA (Global Ocean Monitoring) — Recent “Triple-Dip” La Niña upends current understanding of ENSO', url: 'https://globalocean.noaa.gov/recent-triple-dip-la-nina-upends-current-understanding-of-enso' },
            { title: 'McPhaden, Hasan et Chikamoto (2023) — Causes and Consequences of the Prolonged 2020–2023 La Niña, EGU General Assembly', url: 'https://meetingorganizer.copernicus.org/EGU23/EGU23-10801.html' },
            { title: 'Cai et al. (2022) — Increased ENSO sea surface temperature variability under four IPCC emission scenarios, Nature Climate Change', url: 'https://www.doi.org/10.1038/s41558-022-01282-z' },
            { title: 'IPCC AR6 WGI — Summary for Policymakers', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf' }
          ]
        }
      }
    ]
  },

{
  id: 'pression-atmospherique',
  title: 'La pression atmosphérique : du poids de l’air aux anticyclones et aux tempêtes',
  note: 'Six chapitres sur la définition et les unités, l’histoire et la mesure, la variation avec l’altitude, la réduction au niveau de la mer et les cartes, le lien avec les vents et le temps, puis les phénomènes extrêmes. Les valeurs numériques de l’atmosphère standard sont des références : la pression réelle varie en permanence selon le lieu et la situation météorologique.',
  chapters: [
    {
      id: 'definition-origine-unites',
      title: 'Définition, origine physique et unités de la pression atmosphérique',
      field: 'Physique de l’atmosphère · Force par unité de surface et poids de la colonne d’air',
      summary: 'Comprendre ce qu’est la pression atmosphérique, d’où elle vient, et savoir passer d’une unité à l’autre (Pa, hPa, mbar, mmHg, atm, inHg).',
      lesson: {
        sections: [
          'La pression est une grandeur physique définie comme le quotient de l’intensité des forces appliquées perpendiculairement à une surface par l’aire de cette surface : p = F / S. La pression atmosphérique peut être définie comme l’intensité du poids de la colonne d’air située au-dessus d’une surface horizontale d’aire unité. Au niveau de la mer, sa valeur normale est de 101 325 Pa, ce qui signifie qu’une force d’environ 101 325 newtons s’exerce sur chaque mètre carré.',
          'À l’échelle microscopique, la pression d’un gaz résulte des collisions des molécules en agitation avec les parois et les objets : la force moyenne de ces chocs, rapportée à la surface, est la pression. Elle s’exerce dans toutes les directions et pas seulement vers le bas. L’atmosphère est retenue autour de la Terre par la gravité ; plus on monte, moins il reste d’air au-dessus de soi, donc plus la pression diminue. La relation « pression = poids de la colonne d’air » est l’approximation hydrostatique, très bonne pour la plupart des usages en météorologie.',
          'Plusieurs unités coexistent. L’unité du Système international est le pascal (1 Pa = 1 N/m²), très petite par rapport aux pressions atmosphériques ; les météorologues utilisent donc l’hectopascal (1 hPa = 100 Pa), nouvelle dénomination du millibar (1 mbar = 1 hPa ; 1 bar = 100 000 Pa). On rencontre aussi le millimètre de mercure (mmHg), pratiquement égal au torr, le pouce de mercure (inHg) utilisé par le National Weather Service américain, qui retient 29,92 inHg comme pression standard au niveau de la mer, et l’atmosphère (atm), avec 1 atm = 101 325 Pa = 1 013,25 hPa = 760 mmHg.',
          'Il faut distinguer la pression absolue de la pression relative (ou manométrique). La pression absolue est la somme de la pression manométrique et de la pression atmosphérique : p_abs = p_manométrique + p_atm. Un manomètre de pneu indique par exemple une pression relative, alors que la pression utilisée en météorologie est toujours une pression absolue.',
          'La valeur de 1 013,25 hPa est une pression de référence (pression normale ou standard au niveau moyen des océans) et non une valeur fixe. La pression réelle varie dans le temps et dans l’espace avec les masses d’air et les systèmes météorologiques ; on considère sur les cartes de surface que les valeurs supérieures à la référence correspondent plutôt à de hautes pressions et les valeurs inférieures à de basses pressions, mais cette comparaison n’est qu’un repère (voir le chapitre 4).'
        ],
        example: {
          statement: 'La pression atmosphérique normale vaut 101 325 Pa. Exprimer cette valeur en hPa, puis estimer la masse d’air dont le poids s’exerce sur 1 m² (g = 9,80665 m/s²).',
          calculation: 'En hPa : 101 325 Pa ÷ 100 = 1 013,25 hPa. Masse équivalente : m = p × S ÷ g = 101 325 × 1 ÷ 9,80665 ≈ 10 332 kg.',
          answer: 'La pression normale vaut 1 013,25 hPa. Elle correspond au poids d’une masse d’environ 10,3 tonnes sur chaque mètre carré (approximation hydrostatique).'
        },
        exercise: {
          question: 'Pourquoi dit-on que la pression atmosphérique est liée au poids de l’air situé au-dessus de nous ?',
          answer: 'Parce que, dans l’approximation hydrostatique, la pression en un point est égale au poids de la colonne d’air située au-dessus d’une surface horizontale d’aire unité en ce point.'
        },
        exercises: [
          {
            question: 'Combien de pascals valent 1 hPa, et quelle est la relation entre le hPa et le mbar ?',
            answer: '1 hPa = 100 Pa, et 1 hPa = 1 mbar : l’hectopascal est la nouvelle dénomination du millibar.'
          },
          {
            question: 'Un manomètre de pneu indique 2,2 bar de pression relative. Quelle est la pression absolue, avec une pression atmosphérique d’environ 1,013 bar ?',
            answer: 'p_abs = 2,2 + 1,013 ≈ 3,2 bar.'
          },
          {
            question: 'Quelle est la pression standard au niveau de la mer en pouces de mercure ?',
            answer: 'Environ 29,92 inHg, soit 1 013,25 hPa.'
          }
        ],
        sources: [
          { title: 'Encyclopædia Universalis — Pression atmosphérique (unités de mesure)', url: 'https://www.universalis.fr/encyclopedie/pression-atmospherique/1-les-unites-de-mesure-de-la-pression/' },
          { title: 'NOAA JetStream — Air pressure', url: 'https://www.noaa.gov/jetstream/atmosphere/air-pressure' },
          { title: 'OpenStax — Chemistry 2e, 9.1 Gas Pressure', url: 'https://openstax.org/books/chemistry-2e/pages/9-1-gas-pressure' },
          { title: 'OpenStax — University Physics Volume 1, 14.2 Measuring Pressure', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-2-measuring-pressure' }
        ]
      }
    },
    {
      id: 'histoire-mesure-barometres',
      title: 'De Torricelli à la station météo : histoire et mesure de la pression',
      field: 'Histoire des sciences · Baromètre à mercure, baromètre anéroïde et capteurs modernes',
      summary: 'Retracer la découverte de la pression atmosphérique (Torricelli 1643, Pascal et Périer 1648) et comprendre le fonctionnement des baromètres.',
      lesson: {
        sections: [
          'Pendant longtemps, on a attribué la montée de l’eau dans une pompe à l’« horreur du vide ». Pourtant, même avec les meilleures pompes, on ne parvenait pas à élever l’eau à plus de dix mètres environ. En 1643, Evangelista Torricelli (1608-1647) réalise l’expérience qui porte son nom : un tube de verre fermé à une extrémité, rempli de mercure puis retourné dans une cuve de mercure. La colonne descend jusqu’à une hauteur d’environ 76 cm au niveau de la mer et laisse un espace vide au-dessus d’elle : le mercure est soutenu par la pression de l’atmosphère.',
          'Si c’est le poids de l’air qui soutient la colonne, la hauteur doit diminuer lorsqu’on s’élève, alors que l’« horreur du vide » n’aurait aucune raison de varier avec l’altitude. Blaise Pascal fait tester cette idée : le 19 septembre 1648, son beau-frère Florin Périer réalise l’expérience de Torricelli à Clermont puis au sommet du Puy de Dôme, et constate que le mercure y est nettement moins haut. Cette « grande expérience » établit que la pression atmosphérique diminue avec l’altitude.',
          'Le baromètre à mercure repose sur l’équilibre hydrostatique p = ρ g h, où ρ est la masse volumique du mercure, g la pesanteur et h la hauteur de la colonne. Le mercure est utilisé parce que sa forte masse volumique (environ 13 595 kg/m³ à 0 °C) donne une colonne de moins d’un mètre, alors qu’avec de l’eau il faudrait environ 10,3 m. La hauteur dépendant de la masse volumique du mercure, donc de la température, et de la pesanteur locale, des corrections sont nécessaires pour des mesures précises ; c’est aussi pourquoi les unités mmHg et torr sont définies par rapport à des conditions de référence.',
          'Le baromètre anéroïde, sans liquide, mesure la déformation d’une capsule métallique dont l’intérieur est quasi vide ; la pression extérieure comprime plus ou moins la capsule et un mécanisme amplifie ce mouvement. Son invention est attribuée à Lucien Vidie, qui obtient un brevet en 1844. Branché sur un tambour, il donne le barographe, qui enregistre la pression en continu. Les stations automatiques modernes utilisent des capteurs électroniques, mais le principe reste le même : comparer la pression de l’air à une référence.',
          'Le baromètre est aussi un altimètre, puisque la pression moyenne varie avec l’altitude (voir le chapitre 3). C’est pour cela que les altimètres d’avion sont des baromètres anéroïdes gradués en altitude. Enfin, une hausse de la pression signale en général une amélioration du temps et une baisse, une dégradation, mais ce n’est qu’une tendance moyenne et non une règle absolue.'
        ],
        example: {
          statement: 'Le 19 septembre 1648, Périer observe que la hauteur du mercure est plus faible de 3 pouces 1 ligne et demie au sommet du Puy de Dôme qu’à Clermont. Avec 1 pouce = 2,71 cm et 1 ligne = 0,23 cm, quelle est la baisse en cm de mercure puis en hPa (1 mmHg ≈ 1,333 hPa) ?',
          calculation: '3 pouces = 3 × 2,71 = 8,13 cm ; 1,5 ligne = 1,5 × 0,23 = 0,345 cm ; total = 8,475 cm = 84,75 mm de mercure. En hPa : 84,75 × 1,333 ≈ 113 hPa.',
          answer: 'La colonne est plus basse d’environ 8,5 cm de mercure, soit une baisse de pression d’environ 113 hPa pour un dénivelé de l’ordre du kilomètre : cet ordre de grandeur est cohérent avec la diminution d’environ 12 hPa pour 100 m près du sol (chapitre 3).'
        },
        exercise: {
          question: 'Pourquoi la colonne de mercure est-elle moins haute au sommet d’une montagne qu’au pied ?',
          answer: 'Parce qu’il y a moins d’air au-dessus du sommet : la pression atmosphérique y est plus faible et soutient donc une colonne de mercure moins haute.'
        },
        exercises: [
          {
            question: 'Quelle hauteur de mercure correspond à la pression atmosphérique normale ?',
            answer: '760 mm de mercure (environ 76 cm).'
          },
          {
            question: 'Quelle hauteur d’eau équilibrerait la pression normale (101 325 Pa, ρ = 1 000 kg/m³, g = 9,80665 m/s²) ?',
            answer: 'h = p ÷ (ρ g) = 101 325 ÷ (1 000 × 9,80665) ≈ 10,3 m, ce qui explique la limite d’une dizaine de mètres des pompes aspirantes.'
          },
          {
            question: 'Qui a réalisé l’expérience du Puy de Dôme et à quelle date ?',
            answer: 'Florin Périer, beau-frère de Blaise Pascal, le 19 septembre 1648.'
          }
        ],
        sources: [
          { title: 'OpenStax — University Physics Volume 1, 14.2 Measuring Pressure', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-2-measuring-pressure' },
          { title: 'Académie de Nancy-Metz — Les phénomènes et les hommes : la pression (livret professeur)', url: 'https://sites.ac-nancy-metz.fr/physique/SiteAcademiqueOld/ancien_site/Traam/LYC1/livret_prof_TRAAM_pression_air.pdf' },
          { title: 'Whipple Museum (Cambridge) — Barometers', url: 'https://www.whipplemuseum.cam.ac.uk/explore-whipple-collections/meteorology/barometers' },
          { title: 'Association des anciens de la Météorologie — Chronologie (Vidie, baromètre anéroïde, 1844)', url: 'https://anciensmeteos.info/wp-content/uploads/aec-pdf/aec_n138/aec_n138_ar6.pdf' },
          { title: 'Hérodote — 19 septembre 1648 : Pascal et le Puy de Dôme', url: 'https://www.herodote.net/almanach-ID-2202.php' }
        ]
      }
    },
    {
      id: 'variation-altitude-atmosphere-standard',
      title: 'Variation de la pression avec l’altitude et atmosphère standard',
      field: 'Physique de l’atmosphère · Équilibre hydrostatique et atmosphère standard internationale (ISA)',
      summary: 'Comprendre pourquoi la pression décroît avec l’altitude de façon non linéaire et utiliser l’atmosphère standard pour estimer pression et altitude.',
      lesson: {
        sections: [
          'Pour une atmosphère au repos, la variation verticale de la pression suit l’équilibre hydrostatique : dp/dz = −ρ g. Chaque couche d’air supporte le poids de celles qui sont au-dessus. Comme l’air est compressible, sa masse volumique ρ diminue avec l’altitude, donc la pression ne décroît pas linéairement : elle décroît de façon à peu près exponentielle, vite près du sol et de plus en plus lentement en altitude.',
          'Près du sol, avec ρ ≈ 1,225 kg/m³, on obtient ρ g ≈ 12 Pa par mètre, soit environ 1,2 hPa pour 10 m ou encore une baisse de 1 hPa tous les 8 m environ. Vers 5 500 m, la masse volumique est nettement plus faible et il faut monter d’une quinzaine de mètres pour perdre 1 hPa. Cette règle des « 12 hPa pour 100 m » n’est donc valable que sur quelques centaines de mètres d’écart.',
          'Pour pouvoir comparer des instruments et des données, on utilise une atmosphère standard (ISA, International Standard Atmosphere) : pression de 1 013,25 hPa et température de 15 °C au niveau moyen de la mer, température décroissant de 6,5 °C par kilomètre dans la troposphère jusqu’à 11 km. La pression y suit p = p₀ (1 − L h / T₀)^n avec L = 0,0065 K/m, T₀ = 288,15 K et n ≈ 5,256. On obtient environ 701 hPa à 3 000 m, 540 hPa à 5 000 m et 226 hPa à 11 000 m.',
          'La température modifie ce profil : un air froid est plus dense, la pression y décroît plus vite avec l’altitude ; un air chaud est moins dense et la pression y décroît plus lentement. Dans une atmosphère isotherme, la pression diminue d’un facteur e (≈ 2,7) tous les H = R T / (M g), la hauteur d’échelle, qui vaut environ 8,4 km à 288 K. Ainsi, sur une même surface de pression, l’altitude est plus élevée dans l’air chaud que dans l’air froid.',
          'En météorologie, on repère souvent l’atmosphère par des niveaux de pression plutôt que par des altitudes (on parle par exemple de la température à 700 hPa). Dans l’atmosphère standard, les niveaux de 850, 700, 500, 300 et 250 hPa se situent respectivement vers 1 460 m, 3 010 m, 5 570 m, 9 160 m et 10 360 m. Le niveau de 500 hPa, cité dans les ressources de la NOAA, est proche de la moitié de la pression au sol, ce qui signifie qu’environ la moitié de la masse de l’atmosphère se trouve sous 5,5 km.'
        ],
        example: {
          statement: 'Estimer la pression à 3 000 m d’altitude dans l’atmosphère standard avec la formule p = 1 013,25 × (1 − 0,0065 × h / 288,15)^5,256, puis comparer avec l’approximation linéaire de 0,12 hPa par mètre.',
          calculation: 'Formule : 1 − 0,0065 × 3 000 / 288,15 ≈ 0,9323 ; 0,9323^5,256 ≈ 0,692 ; p ≈ 1 013,25 × 0,692 ≈ 701 hPa. Approximation linéaire : 1 013,25 − 0,12 × 3 000 ≈ 653 hPa.',
          answer: 'La pression standard à 3 000 m est d’environ 701 hPa. L’approximation linéaire donne 653 hPa, soit une erreur d’environ 48 hPa : elle surestime la baisse parce que la masse volumique de l’air diminue avec l’altitude.'
        },
        exercise: {
          question: 'Pourquoi la pression ne diminue-t-elle pas de façon linéaire avec l’altitude ?',
          answer: 'Parce que l’air est compressible : sa masse volumique diminue avec l’altitude, donc le gradient vertical de pression (−ρ g) diminue aussi.'
        },
        exercises: [
          {
            question: 'Environ de combien de mètres faut-il monter près du niveau de la mer pour que la pression baisse de 1 hPa ?',
            answer: 'D’environ 8 m (ρ g ≈ 12 Pa/m).'
          },
          {
            question: 'Dans l’atmosphère standard, vers quelle altitude trouve-t-on environ 500 hPa ?',
            answer: 'Vers 5 500 m (environ 5 570 m d’après la formule ISA).'
          },
          {
            question: 'La pression décroît-elle plus vite avec l’altitude dans un air froid ou dans un air chaud ?',
            answer: 'Dans un air froid, plus dense : la pression y diminue plus rapidement avec l’altitude.'
          }
        ],
        sources: [
          { title: 'OpenStax — University Physics Volume 1, 14.2 Measuring Pressure', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-2-measuring-pressure' },
          { title: 'NOAA JetStream — Air pressure', url: 'https://www.noaa.gov/jetstream/atmosphere/air-pressure' },
          { title: 'MétéoSuisse — Que signifie « haute pression » ? (variation de la pression avec l’altitude)', url: 'https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog/de/2023/02/was-heisst-hoher-luftdruck.html' },
          { title: 'Wikipédia (EN) — Atmospheric pressure (atmosphère standard ISA)', url: 'https://en.wikipedia.org/wiki/Atmospheric_pressure' }
        ]
      }
    },
    {
      id: 'pression-station-niveau-mer-cartes',
      title: 'Pression à la station, pression réduite au niveau de la mer et cartes de pression',
      field: 'Observation météorologique · Réduction au niveau de la mer, isobares, hautes et basses pressions',
      summary: 'Comprendre pourquoi on réduit la pression au niveau de la mer pour comparer les stations, lire une carte d’isobares et situer les records de pression.',
      lesson: {
        sections: [
          'Deux stations situées à des altitudes différentes mesurent des pressions très différentes uniquement à cause de l’altitude. Pour comparer les mesures et tracer des cartes, on ramène la pression au niveau moyen de la mer. On parle de pression à la station pour la valeur mesurée et de pression réduite au niveau de la mer (PMER ou MSLP) pour la valeur corrigée. La pression atmosphérique moyenne y est estimée à 1 013,25 hPa.',
          'Cette réduction repose sur le calcul de la pression qu’il y aurait au niveau de la mer sous la station, en tenant compte de la température de l’air. Le code QFF désigne la pression réduite au niveau de la mer par ce procédé. En aviation, le code QFE correspond à la pression à l’altitude de l’aérodrome, et le QNH est le calage altimétrique qui fait indiquer à l’altimètre l’altitude de l’aérodrome lorsque l’avion est au sol. La réduction est d’autant plus incertaine que la station est haute, car il faut estimer la température d’une colonne d’air fictive sous le sol.',
          'Sur les cartes de surface, les isobares sont les lignes joignant les points d’égale pression, tracées à intervalles réguliers. Elles dessinent des « bosses » (zones de hautes pressions) et des « creux » (zones de basses pressions), notés par exemple H et L sur les cartes américaines. Un anticyclone est une région de l’atmosphère où la pression est plus élevée que dans les régions avoisinantes situées à la même altitude ; une dépression (ou cyclone) est son contraire. Ce sont donc des notions relatives : on ne définit pas un anticyclone par un seuil de pression absolu.',
          'Plus les isobares sont rapprochées, plus la pression varie rapidement dans l’espace : c’est le gradient horizontal de pression, dont dépend la force du vent (chapitre 5). Les échelles mises en jeu sont celles des systèmes météorologiques : un anticyclone ou une dépression des latitudes moyennes s’étend typiquement sur plusieurs centaines à plusieurs milliers de kilomètres.',
          'Les extrêmes de pression au niveau de la mer connus des observations officielles sont instructifs. L’Organisation météorologique mondiale (OMM) retient pour la plus haute pression réduite au niveau de la mer à moins de 750 m d’altitude 1 083,8 hPa à Agata (Russie) le 31 décembre 1968, dans une masse d’air très froide et dense. La plus basse pression au niveau de la mer, hors tornades, est de 870 hPa, mesurée le 12 octobre 1979 dans l’œil du typhon Tip. Les valeurs obtenues pour des stations élevées de l’intérieur des continents sont, elles, entachées d’une grande incertitude à cause de la réduction au niveau de la mer.'
        ],
        example: {
          statement: 'Une station située à 500 m d’altitude mesure 955 hPa. Estimer la pression réduite au niveau de la mer avec la formule de l’atmosphère standard, p₀ = p ÷ (1 − 0,0065 × h / 288,15)^5,256.',
          calculation: '1 − 0,0065 × 500 / 288,15 ≈ 0,98872 ; 0,98872^5,256 ≈ 0,9421 ; p₀ ≈ 955 ÷ 0,9421 ≈ 1 013,7 hPa.',
          answer: 'Environ 1 014 hPa, très proche de la pression normale. Il s’agit d’une approximation pédagogique : la réduction opérationnelle utilise la température réelle de l’air et non celle de l’atmosphère standard.'
        },
        exercise: {
          question: 'Pourquoi ne peut-on pas comparer directement la pression mesurée dans une ville de montagne et celle d’une ville côtière ?',
          answer: 'Parce que la pression dépend fortement de l’altitude : la station de montagne a une pression plus basse même sans dépression météorologique. Il faut ramener les mesures au même niveau, le niveau de la mer.'
        },
        exercises: [
          {
            question: 'Un anticyclone se définit-il par un seuil absolu de pression, par exemple 1 030 hPa ?',
            answer: 'Non. C’est une zone où la pression est plus élevée que dans les régions voisines à la même altitude ; la notion est relative.'
          },
          {
            question: 'Quelle est la plus basse pression au niveau de la mer connue hors tornades, et où a-t-elle été mesurée ?',
            answer: '870 hPa, dans l’œil du typhon Tip, le 12 octobre 1979.'
          },
          {
            question: 'Que représente une isobare sur une carte ?',
            answer: 'Une ligne reliant les points où la pression (réduite au niveau de la mer) est la même.'
          }
        ],
        sources: [
          { title: 'Encyclopædia Universalis — Anticyclones', url: 'https://www.universalis.fr/encyclopedie/anticyclones/' },
          { title: 'Encyclopædia Universalis — Dépression, météorologie', url: 'https://www.universalis.fr/encyclopedie/depression-meteorologie/' },
          { title: 'OMM — Records mondiaux de phénomènes météorologiques et climatiques (tableau)', url: 'https://public.wmo.int/sites/default/files/2024-07/Table_Extreme_Records_2July2024.pdf' },
          { title: 'SMHI — Extrema de pression atmosphérique (incertitude de la réduction au niveau de la mer)', url: 'https://www.smhi.se/kunskapsbanken/meteorologi/lufttryck/extrema-lufttryck' },
          { title: 'NOAA — Surface Air Pressure Map (JetStream)', url: 'https://www.noaa.gov/sites/default/files/2022-11/sfc_slp_map.pdf' }
        ]
      }
    },
    {
      id: 'pression-vents-anticyclones-depressions',
      title: 'Pression, vents, anticyclones et dépressions',
      field: 'Dynamique de l’atmosphère · Gradient de pression, force de Coriolis et vent géostrophique',
      summary: 'Relier les différences de pression au vent, comprendre la circulation autour des anticyclones et des dépressions et utiliser la loi de Buys Ballot.',
      lesson: {
        sections: [
          'Une différence de pression entre deux régions voisines exerce sur l’air une force qui tend à le déplacer des hautes pressions vers les basses pressions : c’est la force du gradient de pression, à l’origine du vent. Plus les isobares sont serrées, plus le gradient est grand et plus le vent est fort. Par exemple, une différence de 12 hPa sur 100 km représente 0,12 hPa par kilomètre.',
          'Sur une Terre en rotation, l’air en mouvement est dévié par la force de Coriolis, vers la droite de son mouvement dans l’hémisphère Nord et vers la gauche dans l’hémisphère Sud. Loin du sol, cette déviation équilibre la force du gradient de pression : le vent, dit géostrophique, souffle alors à peu près parallèlement aux isobares plutôt que directement des hautes vers les basses pressions. Près du sol, le frottement affaiblit le vent et lui fait croiser les isobares vers les basses pressions.',
          'De cette dynamique découle la loi de Buys Ballot : dans l’hémisphère Nord, un observateur qui tourne le dos au vent a les basses pressions à sa gauche (et les hautes pressions à sa droite) ; dans l’hémisphère Sud, c’est l’inverse. Cette loi, établie à partir de l’équilibre géostrophique, est une règle approchée qui ne s’applique bien que loin des perturbations locales et du relief.',
          'Dans un anticyclone, l’air descend lentement (subsidence) puis s’écarte près du sol ; cette descente empêche en général la formation de nuages épais, d’où un temps plutôt stable et dégagé. Dans une dépression, l’air converge près du sol et s’élève : en montant il se refroidit, ce qui favorise la formation de nuages et de précipitations, avec un temps plus perturbé. En surface, dans l’hémisphère Nord, le vent tourne autour d’un anticyclone dans le sens des aiguilles d’une montre et autour d’une dépression dans le sens inverse ; l’hémisphère Sud présente les sens contraires.',
          'Ces correspondances sont des tendances, pas des certitudes : un anticyclone peut s’accompagner de nuages bas ou de brouillard, notamment en hiver, et une dépression peu creuse peut donner un temps modéré. Les météorologues s’intéressent donc moins à la valeur absolue de la pression qu’à son évolution : une chute rapide annonce généralement l’approche d’une perturbation, une hausse, plutôt une amélioration.'
        ],
        example: {
          statement: 'Dans l’hémisphère Nord, un observateur ressent un vent d’ouest (le vent vient de l’ouest). Où se trouvent les basses pressions par rapport à lui, d’après la loi de Buys Ballot ?',
          calculation: 'Un vent d’ouest souffle vers l’est : l’observateur qui lui tourne le dos regarde donc vers l’est. Sa gauche correspond alors au nord.',
          answer: 'Les basses pressions sont au nord et les hautes pressions au sud de l’observateur (loi approchée, valable loin du sol et des effets locaux).'
        },
        exercise: {
          question: 'Pourquoi le vent est-il plus fort lorsque les isobares sont rapprochées ?',
          answer: 'Parce que des isobares serrées signifient un gradient de pression horizontal important, donc une force plus grande sur l’air.'
        },
        exercises: [
          {
            question: 'Dans quel sens l’air tourne-t-il en surface autour d’une dépression dans l’hémisphère Nord ?',
            answer: 'Dans le sens inverse des aiguilles d’une montre (le sens est inversé dans l’hémisphère Sud).'
          },
          {
            question: 'Quel mouvement vertical de l’air caractérise en général un anticyclone, et quelle conséquence sur la nébulosité ?',
            answer: 'Un mouvement descendant (subsidence), qui limite la formation de nuages épais : temps en général stable.'
          },
          {
            question: 'Une forte baisse de pression en quelques heures annonce-t-elle forcément du beau temps ?',
            answer: 'Non : une baisse rapide annonce en général l’approche d’une perturbation et une dégradation.'
          }
        ],
        sources: [
          { title: 'Encyclopædia Universalis — Anticyclones', url: 'https://www.universalis.fr/encyclopedie/anticyclones/' },
          { title: 'Encyclopædia Universalis — Dépression, météorologie', url: 'https://www.universalis.fr/encyclopedie/depression-meteorologie/' },
          { title: 'Météo-France / SHOM — Fiche Vent (mai 2024)', url: 'https://www.refmar.shom.fr/sites/default/files/fiches_data/Fiche_Vent_mai_2024.pdf' },
          { title: 'NOAA NESDIS — Atmospheric pressure (ressource pédagogique)', url: 'https://www.nesdis.noaa.gov/node/18151' },
          { title: 'NOAA JetStream — Air pressure', url: 'https://www.noaa.gov/jetstream/atmosphere/air-pressure' }
        ]
      }
    },
    {
      id: 'pression-extremes-applications',
      title: 'Pression et phénomènes extrêmes : cyclones, bombes météorologiques, aviation et altitude',
      field: 'Météorologie appliquée · Intensité des tempêtes, altimétrie et pression partielle d’oxygène',
      summary: 'Utiliser la pression comme indicateur d’intensité des cyclones, connaître le critère de la cyclogenèse explosive et saisir l’effet de la pression sur l’altimétrie et la physiologie.',
      lesson: {
        sections: [
          'La pression au centre d’un système dépressionnaire est un indicateur classique de son intensité : plus la dépression est « creuse », c’est-à-dire plus sa pression centrale est basse, plus le gradient de pression autour d’elle est en général fort et plus les vents associés sont violents. Les plus basses pressions au niveau de la mer, hors tornades, se rencontrent dans les cyclones tropicaux : 870 hPa ont été mesurés le 12 octobre 1979 dans l’œil du typhon Tip, au moyen d’une sonde larguée depuis un avion de reconnaissance. Cette valeur est inférieure d’environ 143 hPa (soit 14 %) à la pression normale.',
          'Aux latitudes moyennes, une dépression peut se creuser très vite. Sanders et Gyakum (1980) ont défini, en s’appuyant sur des travaux de Tor Bergeron, la cyclogenèse explosive (ou « bombe météorologique ») : une baisse de la pression centrale d’au moins 24 × sin φ / sin 60° hPa en 24 heures, où φ est la latitude. Cela donne 24 hPa en 24 h à 60° de latitude et environ 17,8 hPa à 40°. Ce critère tient compte de la latitude, car un même creusement est plus intense à basse latitude.',
          'En aviation, l’altimètre est un baromètre anéroïde gradué en altitude d’après l’atmosphère standard. Si la pression réelle diffère de celle de l’atmosphère standard, l’indication est faussée ; d’où le calage de l’altimètre sur la pression du jour (QNH) pour que l’instrument indique l’altitude de l’aérodrome à l’atterrissage. Voler d’une zone de haute pression vers une zone de basse pression sans recaler l’altimètre conduit à surestimer son altitude réelle : l’appareil est plus bas que ce qu’indique l’instrument.',
          'Du point de vue physiologique, la composition de l’air (environ 21 % de dioxygène en proportion) varie très peu avec l’altitude, mais la pression partielle d’oxygène, égale à cette proportion multipliée par la pression totale, diminue avec elle. Elle vaut environ 213 hPa au niveau de la mer, mais seulement environ 113 hPa à 5 000 m dans l’atmosphère standard, soit environ 53 % de la valeur au niveau de la mer. C’est cette réduction, et non un manque de « proportion » d’oxygène, qui rend la respiration plus difficile en altitude, et c’est pourquoi les cabines d’avion de ligne sont pressurisées.',
          'Enfin, la pression intervient dans d’autres phénomènes familiers : la température d’ébullition de l’eau dépend de la pression, environ 100 °C à la pression normale, et elle diminue lorsque la pression diminue, ce qui allonge les temps de cuisson en altitude. Comme pour la météo, la valeur de la pression seule ne suffit pas à tout expliquer : il faut l’associer à la température, à l’humidité et au vent pour comprendre et prévoir le temps.'
        ],
        example: {
          statement: 'Une dépression se creuse à 40° de latitude Nord. Calculer la baisse minimale de pression en 24 h pour parler de cyclogenèse explosive, avec 24 × sin φ / sin 60°.',
          calculation: 'sin 40° ≈ 0,6428 ; sin 60° ≈ 0,8660 ; 24 × 0,6428 ÷ 0,8660 ≈ 17,8 hPa.',
          answer: 'Une baisse de pression d’environ 17,8 hPa ou plus en 24 heures à 40° de latitude correspond au critère de la cyclogenèse explosive (« 1 bergeron »).'
        },
        exercise: {
          question: 'De combien de hPa la pression centrale du typhon Tip (870 hPa) est-elle inférieure à la pression normale de 1 013,25 hPa ?',
          answer: '1 013,25 − 870 = 143,25 hPa, soit environ 14 % de moins que la pression normale.'
        },
        exercises: [
          {
            question: 'Quelle est la baisse de pression minimale en 24 h, à 60° de latitude, pour qu’une dépression soit une « bombe » ?',
            answer: '24 hPa en 24 heures (sin 60° / sin 60° = 1).'
          },
          {
            question: 'Pourquoi respire-t-on plus difficilement à 5 000 m alors que l’air contient toujours environ 21 % de dioxygène ?',
            answer: 'Parce que la pression totale y est environ moitié moindre : la pression partielle d’oxygène (21 % de la pression totale) y est donc aussi environ moitié moindre.'
          },
          {
            question: 'À quoi sert le calage altimétrique QNH en aviation ?',
            answer: 'À régler l’altimètre sur la pression du jour afin qu’il indique l’altitude de l’aérodrome lorsque l’avion est au sol.'
          }
        ],
        sources: [
          { title: 'OMM — Records mondiaux de phénomènes météorologiques et climatiques (typhon Tip, 870 hPa)', url: 'https://public.wmo.int/sites/default/files/2024-07/Table_Extreme_Records_2July2024.pdf' },
          { title: 'SMHI — Extrema de pression atmosphérique', url: 'https://www.smhi.se/kunskapsbanken/meteorologi/lufttryck/extrema-lufttryck' },
          { title: 'Encyclopædia Britannica — Bomb cyclone', url: 'https://www.britannica.com/science/bomb-cyclone' },
          { title: 'Wikipédia (EN) — Explosive cyclogenesis (définition de Sanders et Gyakum, 1980)', url: 'https://en.wikipedia.org/wiki/Explosive_cyclogenesis' },
          { title: 'OpenStax — University Physics Volume 1, 14.2 Measuring Pressure (baromètre et altimètre)', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-2-measuring-pressure' }
        ]
      }
    }
  ]
},

]

