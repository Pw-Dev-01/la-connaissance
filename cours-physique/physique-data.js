window.courseCatalog = [
{
  id: 'grands-livres',
  title: 'Les grands livres de la physique',
  note: 'Ouvrages fondateurs, manuels de référence et textes historiques.',
  deepCourses: [
    {
      title: 'Les grands livres de la physique',
      href: 'grands-livres-approfondie.html',
      sections: [
        { anchor: 'principia-newton', title: 'Newton — Principia (1687)' },
        { anchor: 'opticks-newton', title: 'Newton — Opticks (1704)' },
        { anchor: 'maxwell-treatise', title: 'Maxwell — Treatise on Electricity and Magnetism (1873)' },
        { anchor: 'boltzmann-gas-theory', title: 'Boltzmann — Lectures on Gas Theory (1896)' },
        { anchor: 'einstein-relativite', title: 'Einstein — Relativité (1905–1916)' },
        { anchor: 'feynman-lectures', title: 'Feynman — The Feynman Lectures on Physics (1964)' },
        { anchor: 'schrodinger-waves', title: 'Schrödinger — Wave Mechanics (1926)' },
        { anchor: 'dirac-quantum', title: 'Dirac — The Principles of Quantum Mechanics (1930)' },
        { anchor: 'landau-lifshitz', title: 'Landau & Lifshitz — Course of Theoretical Physics (1930–1980)' },
        { anchor: 'hawking-universe', title: 'Hawking — A Brief History of Time (1988)' },

        // Section finale
        { anchor: 'sources', title: 'Sources et références' }
      ]
    }
  ]
},
  {
    id: 'mecanique', title: 'Mécanique', note: 'Décrire le mouvement, ses causes et les échanges d’énergie.',
    chapters: [
      { id: 'cinematique', title: 'Cinématique du point', field: 'Classique · bases', summary: 'Position, vitesse et accélération en une et plusieurs dimensions.', lesson: { sections: ['La cinématique décrit un mouvement sans chercher ses causes. On choisit un référentiel, une origine des dates et un repère ; la position devient alors une fonction du temps.', 'La vitesse est la dérivée de la position et l’accélération la dérivée de la vitesse. En mouvement rectiligne uniformément accéléré, l’accélération est constante.'], formula: { label: 'MOUVEMENT À ACCÉLÉRATION CONSTANTE', text: 'v(t) = v₀ + at  |  x(t) = x₀ + v₀t + ½at²' }, example: { statement: 'Un véhicule part du repos et accélère à 2 m·s⁻² pendant 5 s. Quelle distance parcourt-il ?', calculation: 'Avec v₀ = 0 et x₀ = 0, x(5) = ½ × 2 × 5².', answer: 'Il parcourt 25 m.' }, exercise: { question: 'Un objet a v₀ = 3 m·s⁻¹ et a = 2 m·s⁻² pendant 4 s. Quelle est sa vitesse finale ?', answer: 'v = 3 + 2 × 4 = 11 m·s⁻¹.' } } },
      { id: 'lois-newton', title: 'Lois de Newton et forces', field: 'Classique · bases', summary: 'Bilan des forces, inertie, dynamique et action-réaction.', lesson: { sections: ['Une force modélise une interaction. Pour étudier un objet, on isole le système, on dresse le bilan des forces extérieures puis on applique la deuxième loi de Newton.', 'Dans un référentiel galiléen, la somme vectorielle des forces détermine l’accélération. Si la résultante est nulle, la vitesse reste constante : c’est le principe d’inertie.'], formula: { label: 'DEUXIÈME LOI DE NEWTON', text: 'Σ F⃗ₑₓₜ = m a⃗' }, example: { statement: 'Une masse de 4 kg subit une force horizontale résultante de 12 N. Quelle est son accélération ?', calculation: 'a = F/m = 12/4.', answer: 'a = 3 m·s⁻² dans la direction de la résultante.' }, exercise: { question: 'Quelle résultante faut-il pour accélérer une masse de 2 kg à 5 m·s⁻² ?', answer: 'F = ma = 2 × 5 = 10 N.' } } },
      { id: 'energie-mecanique', title: 'Travail, énergie et puissance', field: 'Classique · intermédiaire', summary: 'Travail d’une force, énergie cinétique, potentielle et conservation.', lesson: { sections: ['L’énergie cinétique dépend de la masse et de la vitesse. Le travail d’une force mesure le transfert d’énergie associé à un déplacement.', 'Le théorème de l’énergie cinétique relie la variation d’énergie cinétique au travail total des forces. En l’absence de dissipation, l’énergie mécanique se conserve.'], formula: { label: 'ÉNERGIES ET THÉORÈME', text: 'Ec = ½mv²  |  ΔEc = ΣW(F)  |  Em = Ec + Ep' }, example: { statement: 'Un objet de 2 kg passe de 3 à 5 m·s⁻¹. Quelle est la variation de son énergie cinétique ?', calculation: 'ΔEc = ½ × 2 × (5² − 3²) = 25 − 9.', answer: 'ΔEc = 16 J.' }, exercise: { question: 'Calculer Ec pour m = 0,5 kg et v = 4 m·s⁻¹.', answer: 'Ec = ½ × 0,5 × 4² = 4 J.' } } }
    ],
    // Cours approfondi rattaché à la branche, rendu par
    // mecanique-approfondie.html : le catalogue n'affiche qu'une seule entrée
    // (le titre du cours), et ses 29 sections restent numérotées dans le menu
    // de gauche de la page. Même convention que la branche nucléaire.
    deepCourses: [
      {
        title: 'Mécanique et mouvement',
        href: 'mecanique-approfondie.html',
        sections: [
          { anchor: 'referentiels-mouvement', title: 'Référentiels et mouvement relatif' },
          { anchor: 'position-deplacement', title: 'Position, déplacement et vitesse' },
          { anchor: 'vitesse-acceleration', title: 'Vitesse et accélération instantanées' },
          { anchor: 'acceleration-constante', title: 'Mouvement à accélération constante' },
          { anchor: 'chute-libre', title: 'La chute libre' },
          { anchor: 'vecteurs-composantes', title: 'Vecteurs et composantes' },
          { anchor: 'lancer-projectiles', title: 'Le lancer de projectiles' },
          { anchor: 'mouvement-circulaire', title: 'Le mouvement circulaire' },
          { anchor: 'corps-libre', title: 'Forces et diagramme de corps libre' },
          { anchor: 'premiere-loi', title: 'Première loi : l’inertie' },
          { anchor: 'deuxieme-loi', title: 'Deuxième loi : la résultante' },
          { anchor: 'masse-poids', title: 'Masse, poids et poids apparent' },
          { anchor: 'troisieme-loi', title: 'Troisième loi : action et réaction' },
          { anchor: 'methode-newton', title: 'Résoudre un problème newtonien' },
          { anchor: 'frottement', title: 'Le frottement' },
          { anchor: 'force-centripete', title: 'La force centripète' },
          { anchor: 'travail-force', title: 'Le travail d’une force' },
          { anchor: 'energie-cinetique', title: 'Énergie cinétique et théorème du travail' },
          { anchor: 'puissance', title: 'La puissance' },
          { anchor: 'energie-potentielle', title: 'Énergie potentielle et forces conservatives' },
          { anchor: 'conservation-energie', title: 'Conservation de l’énergie mécanique' },
          { anchor: 'quantite-mouvement', title: 'Quantité de mouvement et impulsion' },
          { anchor: 'collisions', title: 'Collisions et types de chocs' },
          { anchor: 'rotation', title: 'Rotation et moment d’inertie' },
          { anchor: 'couple-equilibre', title: 'Couple, équilibre et moment cinétique' },
          { anchor: 'gravitation', title: 'La gravitation universelle' },
          { anchor: 'orbites', title: 'Orbites et lois de Kepler' },
          { anchor: 'exercices', title: 'S’entraîner' },
          { anchor: 'sources', title: 'Sources' }
        ]
      }
    ]
  },
  {
    id: 'thermodynamique', title: 'Thermodynamique', note: 'Relier température, énergie, chaleur et transformations.',
    chapters: [
      { id: 'gaz-parfaits', title: 'Température et gaz parfaits', field: 'Thermique · bases', summary: 'État d’un gaz, pression, volume, température absolue et équation d’état.', lesson: { sections: ['Un gaz parfait est un modèle de particules ponctuelles sans interaction à distance, sauf lors des collisions. Son état macroscopique est décrit par la pression P, le volume V, la température absolue T et la quantité de matière n.', 'La température dans l’équation d’état s’exprime en kelvins. Une hausse de température à volume constant augmente la pression ; une hausse de volume à température constante la diminue.'], formula: { label: 'ÉQUATION D’ÉTAT DU GAZ PARFAIT', text: 'PV = nRT  |  T(K) = θ(°C) + 273,15' }, example: { statement: '1 mol de gaz parfait occupe 24,0 L à 300 K. Estimer sa pression avec R = 8,314 J·mol⁻¹·K⁻¹.', calculation: 'P = nRT/V = 1 × 8,314 × 300 / 0,024.', answer: 'P ≈ 1,04 × 10⁵ Pa.' }, exercise: { question: 'Convertir 20 °C en kelvins.', answer: 'T = 20 + 273,15 = 293,15 K.' } } },
      { id: 'premier-principe', title: 'Premier principe et bilans d’énergie', field: 'Thermique · intermédiaire', summary: 'Énergie interne, chaleur, travail reçu et transformations.', lesson: { sections: ['Le premier principe exprime la conservation de l’énergie pour un système thermodynamique. La variation d’énergie interne est égale aux transferts reçus sous forme de chaleur et de travail.', 'Il faut annoncer clairement la convention de signe utilisée. Ici, Q et W sont positifs lorsque le système reçoit de l’énergie.'], formula: { label: 'PREMIER PRINCIPE', text: 'ΔU = Q + W' }, example: { statement: 'Un système reçoit 500 J de chaleur et fournit 120 J de travail au milieu extérieur. Quelle est la variation de son énergie interne ?', calculation: 'Q = +500 J. Comme le système fournit le travail, W = −120 J. Donc ΔU = 500 − 120.', answer: 'ΔU = +380 J.' }, exercise: { question: 'Un système reçoit 200 J de travail et perd 50 J de chaleur. Calculer ΔU.', answer: 'ΔU = Q + W = −50 + 200 = +150 J.' } } },
      { id: 'second-principe', title: 'Entropie et second principe', field: 'Thermique · approfondissement', summary: 'Sens d’évolution spontanée, irréversibilité et entropie.', lesson: { sections: ['Le premier principe conserve l’énergie mais ne donne pas le sens d’une évolution. Le second principe introduit l’entropie, une grandeur d’état qui quantifie la dispersion de l’énergie.', 'Pour un système isolé, l’entropie totale ne diminue pas : elle reste constante dans une transformation réversible idéale et augmente dans une transformation irréversible.'], formula: { label: 'BILAN D’ENTROPIE D’UN SYSTÈME ISOLÉ', text: 'ΔS ≥ 0  |  égalité : transformation réversible' }, example: { statement: 'Deux corps à températures différentes sont placés en contact dans un système isolé. Dans quel sens l’échange thermique se produit-il spontanément ?', calculation: 'La chaleur se transfère spontanément du corps le plus chaud vers le plus froid, jusqu’à l’équilibre thermique.', answer: 'L’entropie totale augmente ; le processus inverse ne se produit pas spontanément.' }, exercise: { question: 'Une transformation spontanée d’un système isolé peut-elle diminuer son entropie ?', answer: 'Non. Le second principe impose ΔS ≥ 0.' } } }
    ],
    // Cours approfondi rattaché à la branche, rendu par
    // thermodynamique-approfondie.html : le catalogue affiche ses 22 sections
    // numérotées à la suite des trois chapitres de la branche, comme pour le
    // cours quantique. Même mécanisme que « deepCourses » de la branche nucléaire.
    deepCourses: [
      {
        title: 'Thermodynamique et transferts thermiques',
        href: 'thermodynamique-approfondie.html',
        sections: [
          { anchor: 'temperature-equilibre', title: 'Température et équilibre thermique' },
          { anchor: 'echelles-temperature', title: 'Les échelles de température' },
          { anchor: 'dilatation-thermique', title: 'La dilatation thermique' },
          { anchor: 'chaleur-calorimetrie', title: 'Chaleur et calorimétrie' },
          { anchor: 'changements-etat', title: 'Les changements d’état' },
          { anchor: 'conduction', title: 'La conduction thermique' },
          { anchor: 'convection-rayonnement', title: 'Convection et rayonnement' },
          { anchor: 'gaz-parfait', title: 'Le gaz parfait' },
          { anchor: 'theorie-cinetique', title: 'La théorie cinétique' },
          { anchor: 'vitesses-moleculaires', title: 'Vitesses moléculaires' },
          { anchor: 'energie-interne-equipartition', title: 'Énergie interne et équipartition' },
          { anchor: 'capacites-thermiques-gaz', title: 'Capacités thermiques des gaz' },
          { anchor: 'premier-principe', title: 'Travail, chaleur, premier principe' },
          { anchor: 'transformations-pv', title: 'Transformations et diagramme pV' },
          { anchor: 'transformations-adiabatiques', title: 'Transformations adiabatiques' },
          { anchor: 'machines-thermiques', title: 'Machines thermiques' },
          { anchor: 'cycle-carnot', title: 'Le cycle de Carnot' },
          { anchor: 'second-principe-enonces', title: 'Irréversibilité et second principe' },
          { anchor: 'entropie', title: 'L’entropie' },
          { anchor: 'entropie-microscopique', title: 'Entropie microscopique' },
          { anchor: 'exercices', title: 'S’entraîner' },
          { anchor: 'sources', title: 'Sources' }
        ]
      }
    ]
  },
  {
    id: 'electromagnetisme', title: 'Électricité et électromagnétisme', note: 'Des circuits électriques aux champs et à l’induction.',
    chapters: [
      { id: 'circuits-electriques', title: 'Circuits électriques', field: 'Électricité · bases', summary: 'Tension, courant, loi d’Ohm, puissance et associations de résistances.', lesson: { sections: ['Le courant électrique est un débit de charges. La tension entre deux points représente une différence d’énergie électrique par charge.', 'Pour un conducteur ohmique, la tension est proportionnelle au courant. La loi des nœuds traduit la conservation de la charge et la loi des mailles la conservation de l’énergie.'], formula: { label: 'LOI D’OHM ET PUISSANCE', text: 'U = RI  |  P = UI = RI²' }, example: { statement: 'Une résistance de 6 Ω est parcourue par un courant de 2 A. Calculer la tension et la puissance.', calculation: 'U = RI = 6 × 2 = 12 V. P = UI = 12 × 2.', answer: 'U = 12 V et P = 24 W.' }, exercise: { question: 'Quel courant traverse une résistance de 10 Ω sous 5 V ?', answer: 'I = U/R = 5/10 = 0,5 A.' } } },
      { id: 'champ-electrique', title: 'Électrostatique et champ électrique', field: 'Électromagnétisme · intermédiaire', summary: 'Charges, loi de Coulomb, champ et potentiel électrostatiques.', lesson: { sections: ['Deux charges électriques exercent l’une sur l’autre une force. Des charges de même signe se repoussent et de signes opposés s’attirent.', 'Le champ électrique décrit la force par unité de charge positive. Le potentiel électrique est une énergie potentielle par unité de charge.'], formula: { label: 'FORCE DE COULOMB ET CHAMP', text: 'F = k|q₁q₂|/r²  |  E⃗ = F⃗/q' }, example: { statement: 'Une charge de 2 μC est placée dans un champ électrique uniforme de 300 N·C⁻¹. Quelle force électrique subit-elle ?', calculation: 'F = qE = 2 × 10⁻⁶ × 300.', answer: 'F = 6 × 10⁻⁴ N, dans le sens du champ si la charge est positive.' }, exercise: { question: 'Quelle force subit une charge −1 μC dans un champ de 200 N·C⁻¹ ?', answer: 'La norme vaut 2 × 10⁻⁴ N ; la force est opposée au champ car la charge est négative.' } } },
      { id: 'induction', title: 'Magnétisme et induction', field: 'Électromagnétisme · approfondissement', summary: 'Champ magnétique, flux, loi de Faraday-Lenz et applications.', lesson: { sections: ['Un courant électrique produit un champ magnétique. Un champ magnétique variable peut induire une tension dans un circuit.', 'La loi de Lenz fixe le sens du courant induit : ses effets s’opposent à la variation de flux qui lui donne naissance.'], formula: { label: 'LOI DE FARADAY', text: 'e = −dΦ/dt' }, example: { statement: 'Le flux magnétique à travers une bobine augmente de 0,04 Wb en 0,02 s. Quelle est la valeur absolue de la tension induite moyenne ?', calculation: '|e| = |ΔΦ/Δt| = 0,04/0,02.', answer: '|e| = 2 V ; son signe dépend du sens choisi et s’oppose à la variation.' }, exercise: { question: 'Que se passe-t-il si le flux magnétique reste constant ?', answer: 'dΦ/dt = 0 : aucune tension induite n’est produite.' } } }
    ]
  },
  {
    id: 'ondes-acoustique', title: 'Ondes et acoustique', note: 'Propagation, superposition et phénomènes ondulatoires.',
    chapters: [
      { id: 'oscillations', title: 'Oscillations et signaux périodiques', field: 'Ondes · bases', summary: 'Période, fréquence, amplitude, phase et oscillateur harmonique.', lesson: { sections: ['Un signal périodique se répète après une durée T, sa période. La fréquence f compte le nombre de périodes par seconde et s’exprime en hertz.', 'Un oscillateur harmonique idéal suit une évolution sinusoïdale. Sa fréquence dépend des paramètres du système, comme la masse et la raideur pour un ressort.'], formula: { label: 'PÉRIODE ET FRÉQUENCE', text: 'f = 1/T  |  x(t) = A cos(ωt + φ), avec ω = 2πf' }, example: { statement: 'Un signal a une période de 4 ms. Quelle est sa fréquence ?', calculation: 'T = 0,004 s, donc f = 1/0,004.', answer: 'f = 250 Hz.' }, exercise: { question: 'Quelle est la période d’un signal de fréquence 500 Hz ?', answer: 'T = 1/500 = 0,002 s, soit 2 ms.' } } },
      { id: 'interferences', title: 'Interférences et diffraction', field: 'Ondes · intermédiaire', summary: 'Superposition, cohérence, franges et limite de résolution.', lesson: { sections: ['Lorsque deux ondes cohérentes se superposent, leurs amplitudes s’ajoutent. Selon leur déphasage, elles peuvent se renforcer ou s’annuler.', 'La diffraction est l’étalement d’une onde lorsqu’elle traverse une ouverture ou contourne un obstacle de taille comparable à sa longueur d’onde.'], formula: { label: 'INTERFRANGE ET DIFFRACTION', text: 'i = λD/a  |  θ ≈ λ/a pour une petite ouverture' }, example: { statement: 'Dans une expérience à deux fentes, λ = 600 nm, D = 2 m et l’écartement vaut a = 0,5 mm. Calculer l’interfrange.', calculation: 'i = 600×10⁻⁹ × 2 / (0,5×10⁻³).', answer: 'i = 2,4 mm.' }, exercise: { question: 'Comment varie l’interfrange si la distance D à l’écran double ?', answer: 'Comme i est proportionnel à D, l’interfrange double.' } } },
      { id: 'acoustique', title: 'Acoustique et effet Doppler', field: 'Ondes · applications', summary: 'Son, intensité, niveau sonore et décalage Doppler.', lesson: { sections: ['Le son est une onde mécanique longitudinale : il a besoin d’un milieu matériel pour se propager. Sa fréquence détermine la hauteur perçue et son amplitude est liée à l’intensité.', 'L’effet Doppler est la variation apparente de fréquence lorsque source et observateur sont en mouvement l’un par rapport à l’autre.'], formula: { label: 'NIVEAU SONORE', text: 'L = 10 log₁₀(I/I₀) dB' }, example: { statement: 'L’intensité sonore vaut 10⁻⁶ W·m⁻² et I₀ = 10⁻¹² W·m⁻². Calculer le niveau sonore.', calculation: 'I/I₀ = 10⁶, donc L = 10 log₁₀(10⁶).', answer: 'L = 60 dB.' }, exercise: { question: 'De combien augmente le niveau sonore si l’intensité est multipliée par 10 ?', answer: 'Il augmente de 10 dB.' } } }
    ]
  },
  {
    id: 'optique', title: 'Optique', note: 'Former des images et comprendre la nature ondulatoire de la lumière.',
    chapters: [
      { id: 'optique-geometrique', title: 'Optique géométrique et lentilles', field: 'Optique · bases', summary: 'Rayons lumineux, lentilles minces, images réelles et virtuelles.', lesson: { sections: ['Dans l’approximation de Gauss, les rayons proches de l’axe optique sont peu inclinés ; une lentille mince forme alors une image construite par les rayons principaux.', 'Une image réelle peut être projetée sur un écran ; une image virtuelle est visible en regardant dans le système optique mais ne peut pas être recueillie directement sur un écran.'], formula: { label: 'RELATION DE CONJUGAISON', text: '1/OA′ − 1/OA = 1/OF′' }, example: { statement: 'Une lentille convergente a une distance focale f′ = 10 cm. Un objet est à 30 cm devant elle. Où se forme l’image ?', calculation: 'Avec OA = −30 cm : 1/OA′ = 1/10 − 1/(−30) = 4/30.', answer: 'OA′ = 7,5 cm derrière la lentille ; l’image est réelle.' }, exercise: { question: 'Où se forme l’image d’un objet placé au foyer objet d’une lentille convergente ?', answer: 'Les rayons émergent parallèlement : l’image est à l’infini.' } } },
      { id: 'refraction', title: 'Réflexion et réfraction', field: 'Optique · bases', summary: 'Lois de Snell-Descartes et changement de direction à une interface.', lesson: { sections: ['Lorsqu’un rayon lumineux rencontre une interface, une partie peut être réfléchie et une partie réfractée. Les angles se mesurent par rapport à la normale à la surface.', 'La réfraction change de direction car la lumière ne se propage pas à la même vitesse dans les deux milieux.'], formula: { label: 'LOI DE SNELL-DESCARTES', text: 'n₁ sin(i₁) = n₂ sin(i₂)' }, example: { statement: 'Un rayon passe de l’air (n₁ = 1) au verre (n₂ = 1,5) avec i₁ = 30°. Calculer i₂.', calculation: 'sin(i₂) = (1/1,5) sin(30°) = 1/3.', answer: 'i₂ ≈ 19,5°.' }, exercise: { question: 'La lumière passe de l’eau vers l’air. Se rapproche-t-elle ou s’éloigne-t-elle de la normale ?', answer: 'Elle s’éloigne de la normale, car l’indice diminue.' } } },
      { id: 'optique-ondulatoire', title: 'Optique ondulatoire et polarisation', field: 'Optique · approfondissement', summary: 'Interférences lumineuses, diffraction et polarisation.', lesson: { sections: ['La lumière présente aussi un comportement ondulatoire. Deux sources cohérentes produisent des franges d’interférences dont la position dépend de la différence de marche.', 'La polarisation décrit l’orientation du champ électrique d’une onde lumineuse. Un polariseur sélectionne une direction de vibration.'], formula: { label: 'DIFFÉRENCE DE MARCHE', text: 'Constructive : δ = kλ  |  Destructive : δ = (k + ½)λ' }, example: { statement: 'La différence de marche vaut 2λ. L’interférence est-elle constructive ou destructive ?', calculation: 'δ/λ = 2 est un entier.', answer: 'L’interférence est constructive.' }, exercise: { question: 'Quelle condition donne une interférence destructive ?', answer: 'δ = (k + 1/2)λ, où k est un entier.' } } }
    ]
  },
  {
    id: 'fluides', title: 'Mécanique des fluides', note: 'Équilibre, écoulement et transport dans les fluides.',
    chapters: [
      { id: 'hydrostatique', title: 'Hydrostatique et poussée d’Archimède', field: 'Fluides · bases', summary: 'Pression dans un fluide au repos et poussée exercée sur un corps immergé.', lesson: { sections: ['Dans un fluide au repos, la pression augmente avec la profondeur. Une différence de pression entre le haut et le bas d’un objet immergé produit une force résultante vers le haut.', 'La poussée d’Archimède est égale au poids du fluide déplacé. Elle explique la flottaison des objets.'], formula: { label: 'PRESSION ET POUSSÉE D’ARCHIMÈDE', text: 'p = p₀ + ρgh  |  FA = ρfluide g Vdéplacé' }, example: { statement: 'Quel est le poids de l’eau déplacée par un objet immergé de volume 2 L ? Prendre ρ = 1000 kg·m⁻³ et g = 9,81 m·s⁻².', calculation: 'V = 0,002 m³ ; FA = 1000 × 9,81 × 0,002.', answer: 'La poussée vaut 19,62 N.' }, exercise: { question: 'Comment varie la pression quand on descend de 2 m dans l’eau ?', answer: 'Elle augmente de Δp = ρgΔh ≈ 1000×9,81×2 = 19 620 Pa.' } } },
      { id: 'bernoulli', title: 'Écoulement et théorème de Bernoulli', field: 'Fluides · intermédiaire', summary: 'Débit, conservation du débit et échange entre pression, vitesse et altitude.', lesson: { sections: ['Pour un fluide incompressible en régime permanent, le débit volumique se conserve le long d’un conduit sans fuite.', 'Le théorème de Bernoulli exprime la conservation de l’énergie mécanique par unité de volume le long d’une ligne de courant, dans les hypothèses du modèle idéal.'], formula: { label: 'CONTINUITÉ ET BERNOULLI', text: 'Q = Sv  |  p + ½ρv² + ρgz = constante' }, example: { statement: 'Un conduit passe de 4 cm² à 1 cm². Si la vitesse initiale est 1 m·s⁻¹, quelle est la vitesse dans la partie étroite ?', calculation: 'S₁v₁ = S₂v₂, donc v₂ = S₁v₁/S₂ = 4×1/1.', answer: 'v₂ = 4 m·s⁻¹.' }, exercise: { question: 'Si la section d’un conduit double et que le débit reste constant, que devient la vitesse ?', answer: 'Elle est divisée par deux puisque Q = Sv.' } } },
      { id: 'viscosite', title: 'Viscosité et régime d’écoulement', field: 'Fluides · approfondissement', summary: 'Frottements internes, écoulement laminaire ou turbulent et nombre de Reynolds.', lesson: { sections: ['La viscosité quantifie les frottements internes d’un fluide. Elle dissipe de l’énergie mécanique en chaleur et ralentit l’écoulement.', 'Le nombre de Reynolds compare les effets d’inertie aux effets visqueux. Il aide à prévoir si un écoulement est plutôt laminaire ou turbulent.'], formula: { label: 'NOMBRE DE REYNOLDS', text: 'Re = ρvL/μ' }, example: { statement: 'Calculer Re pour l’eau avec ρ = 1000 kg·m⁻³, v = 0,1 m·s⁻¹, L = 0,01 m et μ = 10⁻³ Pa·s.', calculation: 'Re = 1000×0,1×0,01/(10⁻³).', answer: 'Re = 1000.' }, exercise: { question: 'Comment varie Re si la vitesse double ?', answer: 'Re est proportionnel à v, donc il double.' } } }
    ]
  },
  {
    id: 'physique-quantique', title: 'Physique quantique et atomique', note: 'Quand l’énergie et la matière se décrivent à l’échelle microscopique. Un cours approfondi en vingt sections prolonge cette branche, du corps noir au laser.', href: 'physique-quantique-atomique.html',
    chapters: [
      { id: 'photons', title: 'Photons et effet photoélectrique', field: 'Quantique · bases', summary: 'Quantification de la lumière, énergie des photons et seuil d’extraction.', lesson: { sections: ['La lumière échange de l’énergie par paquets appelés photons. L’énergie de chaque photon dépend de sa fréquence, pas de l’intensité lumineuse.', 'Dans l’effet photoélectrique, un métal émet un électron si le photon apporte au moins l’énergie d’extraction. Une fréquence seuil existe donc.'], formula: { label: 'ÉNERGIE DU PHOTON', text: 'E = hf = hc/λ' }, example: { statement: 'Calculer l’énergie d’un photon de fréquence 5×10¹⁴ Hz avec h = 6,63×10⁻³⁴ J·s.', calculation: 'E = 6,63×10⁻³⁴ × 5×10¹⁴.', answer: 'E ≈ 3,32×10⁻¹⁹ J, soit environ 2,07 eV.' }, exercise: { question: 'L’énergie d’un photon augmente-t-elle quand sa longueur d’onde diminue ?', answer: 'Oui : E = hc/λ, donc l’énergie est inversement proportionnelle à λ.' } } },
      { id: 'dualite-onde-corpuscule', title: 'Dualité onde-corpuscule et de Broglie', field: 'Quantique · intermédiaire', summary: 'Comportement ondulatoire des particules et longueur d’onde associée.', lesson: { sections: ['La dualité onde-corpuscule associe des propriétés ondulatoires aux particules et des propriétés corpusculaires à la lumière.', 'La longueur d’onde de de Broglie est d’autant plus courte que la quantité de mouvement est grande ; les effets ondulatoires sont surtout visibles à petite échelle.'], formula: { label: 'LONGUEUR D’ONDE DE DE BROGLIE', text: 'λ = h/p' }, example: { statement: 'Comment évolue λ si la quantité de mouvement p est multipliée par 4 ?', calculation: 'La relation λ = h/p montre que la longueur d’onde est inversement proportionnelle à p.', answer: 'λ est divisée par 4.' }, exercise: { question: 'Que devient la longueur d’onde associée à une particule immobile ?', answer: 'Dans le modèle non relativiste, p tend vers 0 et λ = h/p devient très grande ; une particule localisée ne peut toutefois pas être exactement immobile.' } } },
      { id: 'atomes-niveaux', title: 'Atomes et niveaux d’énergie', field: 'Quantique · intermédiaire', summary: 'États quantifiés, transitions et spectres d’émission ou d’absorption.', lesson: { sections: ['Dans un atome, les électrons ne peuvent occuper que certains états d’énergie. Une transition entre deux niveaux s’accompagne de l’émission ou de l’absorption d’un photon.', 'La fréquence de la lumière émise dépend de l’écart d’énergie entre les deux niveaux ; le spectre sert ainsi de signature aux éléments.'], formula: { label: 'TRANSITION ÉNERGÉTIQUE', text: '|ΔE| = hf = hc/λ' }, example: { statement: 'Un atome émet un photon lors d’une transition de 3,0 eV. Quelle est sa longueur d’onde approximative ?', calculation: 'λ ≈ 1240 eV·nm / 3,0 eV.', answer: 'λ ≈ 413 nm.' }, exercise: { question: 'Lors d’une émission, l’énergie de l’atome augmente-t-elle ou diminue-t-elle ?', answer: 'Elle diminue de l’énergie emportée par le photon.' } } }
    ],
    sections: [
      { anchor: 'corps-noir', title: 'Le rayonnement du corps noir' },
      { anchor: 'photoelectrique', title: 'L’effet photoélectrique' },
      { anchor: 'compton', title: 'L’effet Compton' },
      { anchor: 'bohr', title: 'Le modèle de Bohr' },
      { anchor: 'ondes-matiere', title: 'Les ondes de matière' },
      { anchor: 'dualite', title: 'Dualité onde-particule' },
      { anchor: 'fonction-onde', title: 'La fonction d’onde' },
      { anchor: 'incertitude', title: 'Le principe d’incertitude' },
      { anchor: 'schrodinger', title: 'L’équation de Schrödinger' },
      { anchor: 'puits', title: 'La particule dans un puits' },
      { anchor: 'oscillateur', title: 'L’oscillateur harmonique' },
      { anchor: 'tunnel', title: 'L’effet tunnel' },
      { anchor: 'nombres-quantiques', title: 'Les nombres quantiques' },
      { anchor: 'spin', title: 'Le spin de l’électron' },
      { anchor: 'exclusion', title: 'Le principe d’exclusion' },
      { anchor: 'atomes', title: 'L’hydrogène et les atomes lourds' },
      { anchor: 'spectres', title: 'Spectres et rayons X' },
      { anchor: 'laser', title: 'Le laser' },
      { anchor: 'exercices', title: 'S’entraîner' },
      { anchor: 'sources', title: 'Sources' }
    ]
  },
  {
    id: 'physique-nucleaire', title: 'Physique nucléaire et particules', note: 'Noyaux, radioactivité, réactions nucléaires et, en cours approfondi, les constituants élémentaires de la matière.',
    // Cours approfondi rattaché à la branche, rendu par particules-elementaires.html
    // (même mécanisme que « cosmologie-particules.html ») : le catalogue n'affiche
    // que les trois rubriques de la branche — les deux chapitres ci-dessous puis ce
    // cours —, tandis que ses seize sections restent numérotées dans le menu de
    // gauche de la page.
    deepCourses: [
      {
        title: 'Particules élémentaires',
        href: 'particules-elementaires.html',
        sections: [
          { anchor: 'particules-elementaires', title: 'Les particules élémentaires' },
          { anchor: 'modele-standard', title: 'Le modèle standard' },
          { anchor: 'quarks', title: 'Les six quarks' },
          { anchor: 'leptons', title: 'Les six leptons' },
          { anchor: 'hadrons', title: 'Hadrons : baryons et mésons' },
          { anchor: 'antimatiere', title: 'L’antimatière' },
          { anchor: 'interactions', title: 'Les quatre interactions' },
          { anchor: 'bosons-porteurs', title: 'Les bosons porteurs' },
          { anchor: 'chromodynamique', title: 'La chromodynamique quantique' },
          { anchor: 'interaction-faible', title: 'L’interaction faible' },
          { anchor: 'boson-higgs', title: 'Le boson de Higgs' },
          { anchor: 'conservation', title: 'Lois de conservation' },
          { anchor: 'production-detection', title: 'Production et détection' },
          { anchor: 'decouvertes', title: 'Chronologie des découvertes' },
          { anchor: 'exercices', title: 'S’entraîner' },
          { anchor: 'sources', title: 'Sources' }
        ]
      }
    ],
    chapters: [
      { id: 'radioactivite', title: 'Radioactivité et décroissance', field: 'Nucléaire · bases', summary: 'Désintégration spontanée, demi-vie et loi de décroissance radioactive.', lesson: { sections: ['La désintégration radioactive est aléatoire pour un noyau isolé, mais prévisible statistiquement pour un grand ensemble de noyaux.', 'La demi-vie est la durée au bout de laquelle la moitié des noyaux radioactifs initiaux se sont désintégrés.'], formula: { label: 'LOI DE DÉCROISSANCE', text: 'N(t) = N₀e^(−λt)  |  t₁/₂ = ln(2)/λ' }, example: { statement: 'Un échantillon contient 800 noyaux radioactifs. Combien en reste-t-il après deux demi-vies ?', calculation: 'Après chaque demi-vie, la quantité est divisée par deux : 800 → 400 → 200.', answer: 'Il reste en moyenne 200 noyaux.' }, exercise: { question: 'Quelle fraction reste après trois demi-vies ?', answer: 'Il reste (1/2)³ = 1/8 de la quantité initiale.' } } },
      { id: 'energie-nucleaire', title: 'Énergie de liaison et réactions nucléaires', field: 'Nucléaire · intermédiaire', summary: 'Défaut de masse, énergie de liaison, fission et fusion.', lesson: { sections: ['La masse d’un noyau lié est inférieure à la somme des masses de ses nucléons libres. La différence correspond à l’énergie de liaison.', 'Lors d’une réaction nucléaire, la différence de masse entre états initial et final se transforme en énergie. Une réaction libère de l’énergie si les produits sont plus liés.'], formula: { label: 'ÉQUIVALENCE MASSE-ÉNERGIE', text: 'E = Δmc²' }, example: { statement: 'Une réaction présente un défaut de masse de 1,0×10⁻²⁹ kg. Estimer l’énergie libérée.', calculation: 'E = Δmc² ≈ 1,0×10⁻²⁹ × (3,0×10⁸)².', answer: 'E ≈ 9,0×10⁻¹³ J.' }, exercise: { question: 'Pourquoi une petite perte de masse peut-elle libérer beaucoup d’énergie ?', answer: 'Parce que l’énergie vaut Δmc² et que c² est très grand.' } } }
    ]
  },
  {
    id: 'relativite', title: 'Relativité', note: 'Espace, temps, mouvement rapide et gravitation.',
    chapters: [
      { id: 'relativite-restreinte', title: 'Relativité restreinte', field: 'Relativité · bases', summary: 'Référentiels inertiels, invariance de la vitesse de la lumière et dilatation du temps.', lesson: { sections: ['La relativité restreinte repose sur deux idées : les lois de la physique ont la même forme dans les référentiels inertiels, et la vitesse de la lumière dans le vide est la même pour tous les observateurs inertiels.', 'Le temps mesuré entre deux événements dépend du mouvement de l’observateur. La différence devient importante lorsque la vitesse approche celle de la lumière.'], formula: { label: 'FACTEUR DE LORENTZ', text: 'γ = 1/√(1 − v²/c²)' }, example: { statement: 'Calculer γ pour un objet se déplaçant à 0,6c.', calculation: 'γ = 1/√(1 − 0,36) = 1/0,8.', answer: 'γ = 1,25.' }, exercise: { question: 'Que vaut γ lorsque v est très petit devant c ?', answer: 'v²/c² est négligeable, donc γ ≈ 1 : on retrouve l’approximation classique.' } } },
      { id: 'espace-temps', title: 'Espace-temps et causalité', field: 'Relativité · intermédiaire', summary: 'Événements, intervalles relativistes, cônes de lumière et simultanéité.', lesson: { sections: ['Un événement est repéré par trois coordonnées spatiales et une date. Deux observateurs en mouvement relatif ne s’accordent pas nécessairement sur la simultanéité d’événements éloignés.', 'La causalité reste protégée : aucun signal ne peut transmettre une information plus vite que la lumière.'], formula: { label: 'INTERVALLE D’ESPACE-TEMPS', text: 's² = c²Δt² − Δx² − Δy² − Δz²' }, example: { statement: 'Deux événements sont séparés de Δt = 2 μs et Δx = 300 m dans une dimension. Calculer l’intervalle s².', calculation: 'cΔt = 3×10⁸ × 2×10⁻⁶ = 600 m. Donc s² = 600² − 300².', answer: 's² = 270 000 m² : la séparation est de type temps.' }, exercise: { question: 'Peut-on relier causalement deux événements séparés par une distance supérieure à cΔt ?', answer: 'Non, il faudrait un signal plus rapide que la lumière.' } } },
      { id: 'relativite-generale', title: 'Relativité générale et gravitation', field: 'Relativité · approfondissement', summary: 'Principe d’équivalence, courbure de l’espace-temps et gravitation.', lesson: { sections: ['La relativité générale interprète la gravitation comme un effet de la géométrie de l’espace-temps. La matière et l’énergie modifient cette géométrie ; les corps suivent les trajectoires naturelles de cet espace-temps courbe.', 'Le principe d’équivalence relie localement les effets d’un champ gravitationnel à ceux d’une accélération.'], formula: { label: 'LIMITE NEWTONIENNE', text: 'g = GM/r²' }, example: { statement: 'Comment varie l’accélération gravitationnelle si la distance au centre d’un astre double ?', calculation: 'g est proportionnelle à 1/r² ; remplacer r par 2r divise g par 2².', answer: 'Elle est divisée par 4.' }, exercise: { question: 'À quoi correspond localement l’apesanteur d’un astronaute en orbite ?', answer: 'L’astronaute et le vaisseau sont en chute libre commune ; il ne ressent donc pas de force de soutien.' } } }
    ]
  },
  {
    id: 'matiere-condensee', title: 'Matière condensée et matériaux', note: 'Organisation microscopique des solides et propriétés émergentes.',
    chapters: [
      { id: 'structures-cristallines', title: 'Structures cristallines', field: 'Matériaux · bases', summary: 'Réseaux périodiques, maille, compacité et diffraction des rayons X.', lesson: { sections: ['Un cristal est organisé selon une structure périodique. Une maille élémentaire, répétée dans l’espace, décrit le réseau et les positions des atomes.', 'La diffraction des rayons X révèle les distances interatomiques, car la longueur d’onde des rayons X est du même ordre de grandeur.'], formula: { label: 'LOI DE BRAGG', text: '2d sin(θ) = nλ' }, example: { statement: 'Pour n = 1, λ = 0,20 nm et θ = 30°, calculer l’espacement d.', calculation: 'd = λ/(2sinθ) = 0,20/(2×0,5).', answer: 'd = 0,20 nm.' }, exercise: { question: 'Que devient l’angle de diffraction si λ et d restent constants mais que l’ordre n augmente ?', answer: 'sinθ augmente, donc l’angle θ augmente tant que la diffraction est possible.' } } },
      { id: 'bandes-energie', title: 'Bandes d’énergie et matériaux', field: 'Matériaux · intermédiaire', summary: 'Bandes de valence et de conduction, isolants, conducteurs et semi-conducteurs.', lesson: { sections: ['Dans un solide, les niveaux d’énergie des atomes se regroupent en bandes. La bande de valence contient les électrons liés ; la bande de conduction permet le transport électrique.', 'La taille de la bande interdite distingue notamment conducteurs, semi-conducteurs et isolants. La température ou le dopage peuvent modifier la conductivité d’un semi-conducteur.'], formula: { label: 'ÉNERGIE DU PHOTON', text: 'E = hf ; absorption possible si E ≥ Eg' }, example: { statement: 'Un semi-conducteur a une bande interdite Eg = 1,1 eV. Un photon de 2 eV peut-il créer une excitation ?', calculation: 'L’énergie du photon dépasse la bande interdite : 2 eV > 1,1 eV.', answer: 'Oui, il peut promouvoir un électron vers la bande de conduction.' }, exercise: { question: 'Pourquoi un métal conduit-il bien l’électricité ?', answer: 'Il possède des états électroniques disponibles proches en énergie, permettant aux électrons de se déplacer sous l’action d’un champ.' } } },
      { id: 'supraconductivite', title: 'Magnétisme et supraconductivité', field: 'Matériaux · approfondissement', summary: 'Réponse magnétique des matériaux et transport sans résistance.', lesson: { sections: ['Les matériaux répondent différemment à un champ magnétique selon leur structure microscopique. La susceptibilité caractérise cette réponse.', 'Sous une température critique, certains matériaux deviennent supraconducteurs : leur résistance électrique disparaît et ils expulsent le champ magnétique de leur volume, effet Meissner.'], formula: { label: 'RÉSISTANCE EN ÉTAT SUPRACONDUCTEUR', text: 'T < Tc  ⇒  R = 0 (dans le modèle idéal)' }, example: { statement: 'Un fil supraconducteur maintient un courant sans source de tension dans le modèle idéal. Quelle est la puissance Joule ?', calculation: 'P = RI². Si R = 0, alors P = 0.', answer: 'La dissipation Joule est nulle.' }, exercise: { question: 'La supraconductivité apparaît-elle à toute température ?', answer: 'Non, elle apparaît sous une température critique propre au matériau.' } } }
    ]
  },
  {
    id: 'astrophysique-cosmologie', title: 'Astrophysique et cosmologie', note: 'Des systèmes planétaires à l’évolution de l’Univers.',
    chapters: [
      { id: 'gravitation-orbites', title: 'Gravitation et mécanique orbitale', field: 'Astrophysique · bases', summary: 'Force gravitationnelle, orbites circulaires et lois de Kepler.', lesson: { sections: ['La gravitation est une interaction attractive entre deux masses. Pour un satellite en orbite circulaire, la force gravitationnelle fournit l’accélération centripète.', 'Les lois de Kepler décrivent les orbites planétaires ; pour des orbites autour du même astre, le carré de la période est proportionnel au cube du demi-grand axe.'], formula: { label: 'GRAVITATION ET TROISIÈME LOI DE KEPLER', text: 'F = GMm/r²  |  T²/a³ = constante' }, example: { statement: 'Un satellite orbite à une distance r du centre. Comment varie sa vitesse circulaire si le rayon orbital est multiplié par 4 ?', calculation: 'v = √(GM/r). Remplacer r par 4r divise la vitesse par √4.', answer: 'La vitesse est divisée par 2.' }, exercise: { question: 'Quelle force maintient une planète sur son orbite autour du Soleil ?', answer: 'La force gravitationnelle exercée par le Soleil.' } } },
      { id: 'etoiles', title: 'Étoiles et évolution stellaire', field: 'Astrophysique · intermédiaire', summary: 'Équilibre hydrostatique, fusion nucléaire et étapes de vie des étoiles.', lesson: { sections: ['Une étoile est une boule de plasma maintenue par la gravitation et chauffée par les réactions nucléaires de son cœur. L’équilibre hydrostatique oppose la pression interne à la gravité.', 'La masse initiale détermine largement l’évolution : les étoiles peu massives finissent en naines blanches, les plus massives peuvent exploser en supernova.'], formula: { label: 'LUMINOSITÉ ET FLUX', text: 'F = L/(4πd²)' }, example: { statement: 'À quelle fraction du flux initial s’attend-on si la distance à une étoile double ?', calculation: 'Le flux varie comme 1/d² ; pour 2d, il est divisé par 4.', answer: 'Le flux reçu vaut un quart du flux initial.' }, exercise: { question: 'Quel mécanisme fournit l’énergie d’une étoile de la séquence principale ?', answer: 'La fusion nucléaire, principalement la fusion de l’hydrogène en hélium.' } } },
      { id: 'cosmologie', title: 'Galaxies et expansion de l’Univers', field: 'Cosmologie · approfondissement', summary: 'Décalage vers le rouge, expansion cosmique et histoire de l’Univers.', lesson: { sections: ['À grande échelle, les galaxies s’éloignent les unes des autres dans un Univers en expansion. Le décalage vers le rouge de leur lumière renseigne sur leur vitesse d’éloignement.', 'La loi de Hubble-Lemaître relie approximativement la vitesse d’éloignement à la distance pour les galaxies proches à l’échelle cosmologique.'], formula: { label: 'LOI DE HUBBLE-Lemaître', text: 'v ≈ H₀d' }, example: { statement: 'Avec H₀ = 70 km·s⁻¹·Mpc⁻¹, estimer la vitesse d’éloignement d’une galaxie située à 10 Mpc.', calculation: 'v ≈ 70 × 10.', answer: 'v ≈ 700 km·s⁻¹.' }, exercise: { question: 'Dans ce modèle, que devient la vitesse si la distance double ?', answer: 'Elle double, car v est proportionnelle à d.' } } }
    ],
    // Cours approfondi rattaché à la branche : modèle standard des particules,
    // histoire thermique de l’Univers, nucléosynthèse, fond diffus, matière
    // noire, énergie noire, neutrinos, baryogenèse et inflation (16 sections).
    deepCourses: [
      {
        title: 'Cosmologie des particules',
        href: 'cosmologie-particules.html',
        sections: [
          { anchor: 'introduction', title: 'La cosmologie des particules' },
          { anchor: 'modele-cosmologique', title: 'Le modèle standard de la cosmologie' },
          { anchor: 'modele-particules', title: 'Le modèle standard des particules' },
          { anchor: 'expansion-redshift', title: 'Expansion et décalage vers le rouge' },
          { anchor: 'densite-critique', title: 'Densité critique et paramètres' },
          { anchor: 'histoire-thermique', title: 'L’histoire thermique de l’Univers' },
          { anchor: 'nucleosynthese', title: 'La nucléosynthèse primordiale' },
          { anchor: 'fond-diffus', title: 'Recombinaison et fond diffus' },
          { anchor: 'matiere-noire', title: 'La matière noire' },
          { anchor: 'energie-noire', title: 'L’énergie noire' },
          { anchor: 'plasma-quark-gluon', title: 'Le plasma quark-gluon' },
          { anchor: 'neutrinos-cosmologiques', title: 'Les neutrinos cosmologiques' },
          { anchor: 'baryogenese', title: 'La baryogenèse' },
          { anchor: 'inflation', title: 'L’inflation' },
          { anchor: 'exercices', title: 'S’entraîner' },
          { anchor: 'sources', title: 'Sources' }
        ]
      }
    ]
  },
  {
    id: 'astrophysique',
    title: 'Astrophysique des hautes énergies',
    note: 'Rayons X et gamma, rayons cosmiques, pulsars, trous noirs et sursauts : observer l’Univers au-delà du visible. Un cours approfondi en quinze sections, avec exercices et sources vérifiées.',
    href: 'astrophysique-hautes-energies.html',
    sections: [
      { anchor: 'introduction', title: 'Le spectre des hautes énergies' },
      { anchor: 'telescopes', title: 'Observer au-dessus de l’atmosphère' },
      { anchor: 'plasmas-chauds', title: 'Chaleur extrême et rayons X' },
      { anchor: 'mecanismes', title: 'Freinage, raies et diffusion Compton' },
      { anchor: 'rayons-cosmiques', title: 'Les rayons cosmiques' },
      { anchor: 'spectre-energie', title: 'Le spectre et ses hautes énergies' },
      { anchor: 'synchrotron', title: 'Le rayonnement synchrotron' },
      { anchor: 'binaires-x', title: 'Binaires de rayons X' },
      { anchor: 'pulsars', title: 'Pulsars et étoiles à neutrons' },
      { anchor: 'trous-noirs', title: 'Trous noirs et horizons' },
      { anchor: 'sursauts-gamma', title: 'Sursauts gamma' },
      { anchor: 'agn-jets', title: 'Noyaux actifs et jets' },
      { anchor: 'multimessager', title: 'Le ciel multimessager' },
      { anchor: 'exercices', title: 'S’entraîner' },
      { anchor: 'sources', title: 'Sources' }
    ]
  },
  {
    id: 'mesures-methodes', title: 'Mesures, unités et méthodes expérimentales', note: 'Les outils transversaux pour quantifier et confronter les modèles au réel.',
    chapters: [
      { id: 'unites-dimensions', title: 'Unités et analyse dimensionnelle', field: 'Méthodes · bases', summary: 'Système international, dimensions et vérification d’équations physiques.', lesson: { sections: ['Une grandeur physique s’exprime avec une valeur numérique et une unité. L’analyse dimensionnelle vérifie que les deux membres d’une relation ont les mêmes dimensions.', 'Elle permet de repérer une erreur d’unité ou de construire une forme possible pour une loi, mais ne suffit pas à déterminer ses constantes numériques.'], formula: { label: 'DIMENSIONS FONDAMENTALES', text: '[v] = L·T⁻¹  |  [a] = L·T⁻²  |  [F] = M·L·T⁻²' }, example: { statement: 'La formule v = d/t est-elle homogène ?', calculation: '[d/t] = L/T, qui est bien la dimension d’une vitesse.', answer: 'Oui, la relation est dimensionnellement homogène.' }, exercise: { question: 'L’expression d = vt + ½at² est-elle homogène ?', answer: 'vt a la dimension L ; at² vaut aussi L. Les deux termes sont des longueurs.' } } },
      { id: 'incertitudes', title: 'Incertitudes et chiffres significatifs', field: 'Méthodes · intermédiaire', summary: 'Précision des mesures, incertitude absolue et relative, propagation.', lesson: { sections: ['Une mesure expérimentale n’est jamais parfaitement exacte. On décrit sa précision par une incertitude, qui dépend de l’instrument et du protocole.', 'L’incertitude relative compare l’incertitude absolue à la valeur mesurée. Elle permet de comparer la qualité de mesures de tailles différentes.'], formula: { label: 'INCERTITUDE RELATIVE', text: 'uᵣ(x) = u(x)/|x|' }, example: { statement: 'Une longueur est mesurée à 20,0 ± 0,2 cm. Calculer l’incertitude relative.', calculation: 'uᵣ = 0,2/20,0 = 0,01.', answer: 'L’incertitude relative est 1 %.' }, exercise: { question: 'Une masse de 50 g est connue à ±1 g. Quelle est l’incertitude relative ?', answer: '1/50 = 0,02, soit 2 %.' } } },
      { id: 'experimentation-modelisation', title: 'Expérimentation et modélisation', field: 'Méthodes · pratique', summary: 'Protocole, variables, ajustement de données et validation d’un modèle.', lesson: { sections: ['Une expérience scientifique précise une question, les grandeurs mesurées, les variables contrôlées et le protocole. Répéter les mesures aide à estimer la dispersion.', 'Un modèle propose une relation mathématique entre grandeurs. On le confronte aux observations en examinant les résidus, les incertitudes et son domaine de validité.'], formula: { label: 'RÉSIDU D’UN MODÈLE', text: 'résidu = valeur mesurée − valeur prédite' }, example: { statement: 'Un modèle prédit 9,8 m·s⁻² et une mesure donne 9,7 m·s⁻². Quel est le résidu ?', calculation: 'r = 9,7 − 9,8.', answer: 'Le résidu vaut −0,1 m·s⁻².' }, exercise: { question: 'Pourquoi répéter une mesure plusieurs fois ?', answer: 'Pour estimer la variabilité expérimentale et réduire l’influence d’une erreur aléatoire.' } } }
    ],
    // Cours approfondi rattaché à la branche, rendu par
    // constantes-physiques-approfondie.html : le catalogue n'affiche qu'une
    // seule entrée (le titre du cours), et ses 22 sections restent numérotées
    // dans le menu de gauche de la page. Même convention que la branche
    // nucléaire.
    deepCourses: [
      {
        title: 'Les 20 principales constantes',
        href: 'constantes-physiques-approfondie.html',
        sections: [
          { anchor: 'nature-constante', title: 'Qu’est-ce qu’une constante ?' },
          { anchor: 'exactitude-incertitude', title: 'Exactitude, incertitude, notation CODATA' },
          { anchor: 'unites-base', title: 'Les sept unités de base du SI' },
          { anchor: 'redefinition-2019', title: 'Le redéfinissement du SI en 2019' },
          { anchor: 'classer-constantes', title: 'Définies, mesurées, dérivées' },
          { anchor: 'constante-lumiere', title: 'c — la vitesse de la lumière' },
          { anchor: 'constante-planck', title: 'h et ħ — la constante de Planck' },
          { anchor: 'charge-elementaire', title: 'e — la charge élémentaire' },
          { anchor: 'constante-mole', title: 'N_A, R et F — les constantes de la mole' },
          { anchor: 'constante-boltzmann', title: 'k_B — la constante de Boltzmann' },
          { anchor: 'constante-gravitation', title: 'G — la constante de gravitation' },
          { anchor: 'structure-fine', title: 'α — la constante de structure fine' },
          { anchor: 'constantes-electromagnetiques', title: 'μ₀, ε₀ et Z₀' },
          { anchor: 'constantes-rayonnement', title: 'σ et b — les constantes du rayonnement' },
          { anchor: 'pesanteur-standard', title: 'g₀ — la pesanteur standard' },
          { anchor: 'constantes-masses', title: 'mₑ, m_p, m_n et u — les masses' },
          { anchor: 'grandeurs-derivees', title: 'Grandeurs dérivées de la physique atomique' },
          { anchor: 'constantes-dimensionnement', title: 'Constantes et analyse dimensionnelle' },
          { anchor: 'relations-constantes', title: 'Comment les constantes se relient' },
          { anchor: 'tableau-recapitulatif', title: 'Tableau récapitulatif' },
          { anchor: 'exercices', title: 'S’entraîner' },
          { anchor: 'sources', title: 'Sources' }
        ]
      },
    ]
  },
  {
    id: 'grands-physiciens', title: 'Les grands physiciens',
    note: 'Vingt-six physiciens classés par date de naissance, d’Archimède à Feynman, avec leurs contributions et leurs dates vérifiées.',
    href: 'grands-physiciens-approfondie.html',
    sections: [
      { anchor: 'methode-selection', title: 'Comment établir une telle liste ?' },
      { anchor: 'archimede', title: 'Archimède — statique et hydrostatique' },
      { anchor: 'ibn-al-haytham', title: 'Ibn al-Haytham — l’optique expérimentale' },
      { anchor: 'copernic', title: 'Copernic — l’héliocentrisme' },
      { anchor: 'galilee', title: 'Galilée — la mécanique mesurée' },
      { anchor: 'kepler', title: 'Kepler — les lois planétaires' },
      { anchor: 'newton', title: 'Newton — mouvement et gravitation' },
      { anchor: 'volta', title: 'Volta — la pile électrique' },
      { anchor: 'ampere', title: 'Ampère — l’électrodynamique' },
      { anchor: 'faraday', title: 'Faraday — le champ et l’induction' },
      { anchor: 'joule', title: 'Joule — l’énergie et la chaleur' },
      { anchor: 'maxwell', title: 'Maxwell — le champ électromagnétique' },
      { anchor: 'boltzmann', title: 'Boltzmann — l’entropie statistique' },
      { anchor: 'hertz', title: 'Hertz — les ondes et l’effet photoélectrique' },
      { anchor: 'planck', title: 'Planck — la quantification de l’énergie' },
      { anchor: 'marie-curie', title: 'Marie Curie — la radioactivité' },
      { anchor: 'rutherford', title: 'Rutherford — le noyau atomique' },
      { anchor: 'lise-meitner', title: 'Lise Meitner — la fission expliquée' },
      { anchor: 'einstein', title: 'Einstein — quanta et relativité' },
      { anchor: 'noether', title: 'Noether — symétries et conservation' },
      { anchor: 'bohr', title: 'Bohr — la quantification de l’atome' },
      { anchor: 'schrodinger', title: 'Schrödinger — la mécanique ondulatoire' },
      { anchor: 'lemaitre', title: 'Lemaître — l’expansion de l’Univers' },
      { anchor: 'fermi', title: 'Fermi — le siècle nucléaire' },
      { anchor: 'heisenberg', title: 'Heisenberg — l’incertitude' },
      { anchor: 'dirac', title: 'Dirac — le positron' },
      { anchor: 'feynman', title: 'Feynman — les diagrammes' },
      { anchor: 'tableau-chronologique', title: 'Tableau chronologique' },
      { anchor: 'exercices', title: 'S’entraîner' },
      { anchor: 'sources', title: 'Sources' }
    ]
  }
];

const stellarChapter = window.courseCatalog
  .flatMap((branch) => branch.chapters || [])
  .find((chapter) => chapter.id === 'etoiles');

stellarChapter.summary = 'Naissance, structure, types spectraux, durées de vie et évolution jusqu’aux naines blanches, étoiles à neutrons ou trous noirs.';
stellarChapter.lesson = {
  sections: [
    'Une étoile se forme par effondrement d’une région dense d’un nuage moléculaire. Quand son cœur devient assez chaud, la fusion de l’hydrogène démarre : l’étoile entre sur la séquence principale, où elle passe la majeure partie de sa vie. L’équilibre hydrostatique est un équilibre local entre le gradient de pression, dirigé vers l’extérieur, et la gravitation, dirigée vers le centre ; ce n’est pas un équilibre entre fusion et gravité prises comme deux forces ponctuelles.',
    'Dans le cœur, l’hydrogène fusionne en hélium, principalement par la chaîne proton-proton dans les étoiles de masse proche ou inférieure à celle du Soleil, et avec une contribution croissante du cycle CNO dans les étoiles plus chaudes et massives. L’énergie produite est transportée vers l’extérieur puis rayonnée. La luminosité, le rayon et la température effective sont liés par la loi de Stefan-Boltzmann. Les équations de structure ci-dessous expriment, dans le modèle sphérique, l’équilibre de pression et l’accumulation de masse.',
    'Les classes spectrales O, B, A, F, G, K et M classent les étoiles selon leur spectre et leur température de surface, des plus chaudes (O) aux plus froides (M). Elles ne sont pas les étapes successives d’une vie. « Géante rouge » décrit un stade évolutif ; « naine blanche », « étoile à neutrons » et « trou noir » désignent des résidus. La couleur seule ne permet donc pas de prédire la fin d’une étoile.',
    'La masse contrôle fortement la durée de vie : une étoile massive a davantage de combustible, mais sa luminosité et son rythme de fusion sont beaucoup plus élevés. Ordres de grandeur de durée sur la séquence principale, d’après des modèles stellaires : type O5, environ 40 M☉, 1 million d’années ; B0, 16 M☉, 10 millions d’années ; A0, 3,3 M☉, 500 millions d’années ; F0, 1,7 M☉, 2,7 milliards d’années ; G0, 1,1 M☉, 9 milliards d’années ; K0, 0,8 M☉, 14 milliards d’années ; M0, 0,4 M☉, 200 milliards d’années. Ce sont des valeurs représentatives, pas une table universelle : composition, masse exacte et modèle modifient les résultats. Les naines rouges les moins massives peuvent vivre jusqu’à environ 14 000 milliards d’années ; l’Univers étant âgé d’environ 13,8 milliards d’années, aucune n’a encore achevé toute son évolution prévue.',
    'Le Soleil, étoile de type G, a environ 4,6 milliards d’années et devrait rester sur la séquence principale encore environ 5 milliards d’années. Après l’épuisement de l’hydrogène central, son cœur se contractera tandis que ses couches externes gonfleront : il deviendra une géante rouge, puis éjectera une partie de son enveloppe. Le gaz éjecté peut former une nébuleuse planétaire ; le cœur résiduel deviendra une naine blanche, principalement composée de carbone et d’oxygène, qui se refroidira lentement. Une naine blanche stable ne dépasse pas la limite de Chandrasekhar, proche de 1,4 M☉. Le Soleil ne finira pas en supernova ni en trou noir.',
    'Les étoiles suffisamment massives peuvent poursuivre la fusion des éléments dans des couches successives jusqu’à former un cœur riche en fer. La fusion du fer ne fournit plus l’énergie nécessaire pour soutenir le cœur : celui-ci s’effondre et l’étoile peut subir une supernova par effondrement du cœur. Le résidu compact est une étoile à neutrons si la matière du cœur peut être soutenue par la matière nucléaire dense ; si le résidu est trop massif, l’effondrement peut former un trou noir. Les limites dépendent des modèles, de la perte de masse et d’éventuelles interactions dans un système binaire : il n’existe pas de correspondance exacte et universelle entre masse initiale et résidu final. Une étoile à neutrons peut être observée comme pulsar si son rayonnement balaie périodiquement notre ligne de visée.',
    'Un trou noir stellaire est un objet dont l’horizon des événements délimite la région d’où aucun signal ne peut ressortir. Pour un trou noir idéal, non chargé et non rotatif (solution de Schwarzschild), le rayon de cet horizon est Rₛ = 2GM/c². Il vaut environ 2,95 km par masse solaire. C’est un rayon, non un diamètre, et l’horizon n’est pas une surface matérielle. Cette formule n’est pas le rayon d’une étoile ordinaire ni la description complète d’un trou noir en rotation. À grande distance, le champ gravitationnel dépend de la masse comme celui de tout autre objet de même masse : un trou noir n’aspire pas toute matière environnante.',
    'Les astronomes étudient les étoiles par leur spectre, leur luminosité, leur température, leur distance et leur évolution dans le diagramme de Hertzsprung-Russell. La luminosité est la puissance totale émise par l’étoile ; le flux est la puissance reçue par unité de surface et diminue comme le carré de la distance.'
  ],
  formula: {
    label: 'STRUCTURE STELLAIRE ET RAYON DE SCHWARZSCHILD',
    text: 'dP/dr = −G Mᵣρ/r²  |  dMᵣ/dr = 4πr²ρ  |  L = 4πR²σTₑff⁴  |  tₘₛ ≈ 10¹⁰ ans × (M/M☉)/(L/L☉)  |  F = L/(4πd²)  |  Rₛ = 2GM/c² ≈ 2,95 km × (M/M☉)'
  },
  equationDetails: [
    {
      title: 'Équilibre hydrostatique',
      formula: 'dP/dr = −G Mᵣρ/r²',
      explanation: 'Dans une étoile sphérique stable, la pression augmente vers le centre pour soutenir les couches contre la gravitation. Le signe négatif indique que la pression décroît quand le rayon r augmente.',
      parameters: 'P : pression (Pa) ; r : distance au centre (m) ; Mᵣ : masse contenue à l’intérieur du rayon r (kg) ; ρ : masse volumique locale (kg·m⁻³) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻².',
      example: 'Dans un point d’un modèle stellaire, prenons r = 10⁹ m, Mᵣ = 10³⁰ kg et ρ = 10⁵ kg·m⁻³. Alors dP/dr = −(6,67430 × 10⁻¹¹ × 10³⁰ × 10⁵)/(10⁹)².',
      result: 'Le gradient vaut environ −6,67 × 10⁶ Pa·m⁻¹ : la pression diminue vers l’extérieur à ce point.'
    },
    {
      title: 'Masse contenue dans une étoile sphérique',
      formula: 'dMᵣ/dr = 4πr²ρ',
      explanation: 'Une mince coquille sphérique de rayon r et d’épaisseur dr a pour volume environ 4πr²dr. Sa masse vaut donc ρ fois ce volume ; l’équation exprime la masse ajoutée quand on augmente légèrement r.',
      parameters: 'Mᵣ : masse à l’intérieur de r (kg) ; r : rayon mesuré depuis le centre (m) ; ρ : masse volumique de la coquille (kg·m⁻³). La dérivée dMᵣ/dr s’exprime en kg·m⁻¹.',
      example: 'Pour une coquille située à r = 10⁸ m et de masse volumique ρ = 10⁵ kg·m⁻³, dMᵣ/dr = 4π × (10⁸)² × 10⁵.',
      result: 'La masse augmente d’environ 1,26 × 10²² kg par mètre de rayon à cet endroit.'
    },
    {
      title: 'Luminosité et température effective',
      formula: 'L = 4πR²σTₑff⁴',
      explanation: 'C’est la loi de Stefan-Boltzmann appliquée à une étoile sphérique : la puissance émise par unité de surface vaut σTₑff⁴, puis on la multiplie par la surface totale 4πR². Tₑff est la température d’un corps noir qui émettrait le même flux surfacique que l’étoile.',
      parameters: 'L : luminosité, puissance totale rayonnée (W) ; R : rayon de l’étoile (m) ; σ = 5,670374419 × 10⁻⁸ W·m⁻²·K⁻⁴ : constante de Stefan-Boltzmann ; Tₑff : température effective (K).',
      example: 'Pour le Soleil, prenons R = 6,96 × 10⁸ m et Tₑff = 5 772 K. L = 4π(6,96 × 10⁸)² × (5,670374419 × 10⁻⁸) × 5 772⁴.',
      result: 'On obtient L ≈ 3,83 × 10²⁶ W, proche de la luminosité solaire mesurée.'
    },
    {
      title: 'Durée de vie sur la séquence principale',
      formula: 'tₘₛ ≈ 10¹⁰ ans × (M/M☉)/(L/L☉)',
      explanation: 'Cette estimation compare la quantité de combustible disponible, proportionnelle à la masse M, au rythme auquel il est consommé, lié à la luminosité L. Elle donne un ordre de grandeur de la durée de fusion de l’hydrogène au cœur, pas la durée totale incluant les phases de géante et de résidu.',
      parameters: 'tₘₛ : durée sur la séquence principale (ans) ; M : masse de l’étoile ; L : sa luminosité ; M☉ et L☉ : masse et luminosité du Soleil. Les rapports M/M☉ et L/L☉ sont sans unité. La valeur 10¹⁰ ans est une normalisation approximative pour le Soleil.',
      example: 'Pour une étoile modèle de masse M = 2 M☉ et de luminosité L = 16 L☉, tₘₛ ≈ 10¹⁰ × 2/16 ans.',
      result: 'La durée estimée est d’environ 1,25 × 10⁹ ans, soit 1,25 milliard d’années.'
    },
    {
      title: 'Luminosité et flux reçu',
      formula: 'F = L/(4πd²)',
      explanation: 'Si la source rayonne de façon isotrope et que la lumière se propage sans absorption, sa puissance se répartit sur une sphère de rayon d. L’aire de cette sphère est 4πd² ; le flux diminue donc comme l’inverse du carré de la distance.',
      parameters: 'F : flux reçu, puissance par unité de surface (W·m⁻²) ; L : luminosité intrinsèque de la source (W) ; d : distance à la source (m).',
      example: 'À la distance moyenne Terre-Soleil d ≈ 1,496 × 10¹¹ m, avec L☉ ≈ 3,83 × 10²⁶ W, F = 3,83 × 10²⁶/[4π(1,496 × 10¹¹)²].',
      result: 'On trouve environ 1,36 × 10³ W·m⁻², soit 1,36 kW·m⁻², avant les effets de l’atmosphère terrestre.'
    },
    {
      title: 'Rayon de Schwarzschild',
      formula: 'Rₛ = 2GM/c²',
      explanation: 'Pour un trou noir idéal, non chargé et non rotatif, cette solution de la relativité générale donne le rayon de l’horizon des événements. L’horizon est une frontière causale, pas une surface matérielle ; Rₛ est un rayon, et non un diamètre.',
      parameters: 'Rₛ : rayon de l’horizon (m) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² ; M : masse du trou noir (kg) ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide. Pour M = M☉, Rₛ ≈ 2,95 km.',
      example: 'Pour M = 10 M☉, Rₛ ≈ 2,95 km × 10.',
      result: 'Le rayon est d’environ 29,5 km ; le diamètre correspondant est d’environ 59 km.'
    }
  ],
  example: {
    statement: 'Quel serait le rayon de Schwarzschild d’un trou noir non rotatif de 10 M☉ ?',
    calculation: 'On utilise Rₛ ≈ 2,95 km × (M/M☉). Pour M = 10 M☉, Rₛ ≈ 2,95 × 10 km = 29,5 km.',
    answer: 'Le rayon de l’horizon serait d’environ 29,5 km, soit un diamètre d’environ 59 km.'
  },
  exercise: {
    question: 'Estimer le rayon de Schwarzschild d’un trou noir non rotatif de 4 M☉.',
    answer: 'Rₛ ≈ 2,95 km × 4 = 11,8 km. Cette estimation utilise le modèle de Schwarzschild, pour un objet non chargé et non rotatif.'
  },
  sources: [
    { title: 'NASA — Star Basics', url: 'https://science.nasa.gov/universe/stars/' },
    { title: 'NASA — Star Types', url: 'https://science.nasa.gov/universe/stars/types/' },
    { title: 'OpenStax Astronomy 2e — Lifetimes on the Main Sequence', url: 'https://openstax.org/books/astronomy-2e/pages/22-1-evolution-from-the-main-sequence-to-red-giants' },
    { title: 'OpenStax Astronomy 2e — The Death of Low-Mass Stars', url: 'https://openstax.org/books/astronomy-2e/pages/23-1-the-death-of-low-mass-stars' },
    { title: 'OpenStax Astronomy 2e — Evolution of Massive Stars', url: 'https://openstax.org/books/astronomy-2e/pages/23-2-evolution-of-massive-stars-an-explosive-finish' },
    { title: 'OpenStax Astronomy 2e — Black Holes and Schwarzschild radius', url: 'https://openstax.org/books/astronomy-2e/pages/24-5-black-holes' }
  ]
};

const quantumChapters = Object.fromEntries(
  window.courseCatalog
    .flatMap((branch) => branch.chapters || [])
    .filter((chapter) => ['photons', 'dualite-onde-corpuscule', 'atomes-niveaux'].includes(chapter.id))
    .map((chapter) => [chapter.id, chapter])
);

quantumChapters.photons.summary = 'Énergie des photons, effet photoélectrique, fonction de travail et fréquence ou longueur d’onde seuil.';
quantumChapters.photons.lesson.sections = [
  'Un photon de fréquence f transporte une énergie E = hf. À fréquence fixée, augmenter l’intensité d’une lumière augmente surtout le nombre de photons reçus par unité de temps, pas l’énergie de chacun. Dans le vide, la fréquence et la longueur d’onde sont liées par c = fλ.',
  'Dans l’effet photoélectrique, un photon peut céder son énergie à un électron du matériau. Une partie sert à extraire l’électron (fonction de travail φ) ; le reste devient son énergie cinétique. Il existe donc une fréquence seuil propre au matériau. Au seuil idéal, l’électron sort avec une énergie cinétique nulle ; en dessous, augmenter l’intensité ne suffit pas à extraire des électrons.',
  'Le potentiel d’arrêt est la valeur absolue de la tension inverse nécessaire pour empêcher même les photoélectrons les plus énergétiques d’atteindre l’électrode collectrice. Il donne une mesure de leur énergie cinétique maximale. Les équations ci-dessous supposent le modèle photoélectrique à un photon, sans pertes supplémentaires de l’électron dans le matériau.'
];
quantumChapters.photons.lesson.formula = {
  label: 'ÉNERGIE DU PHOTON',
  text: 'Eγ = hf = hc/λ'
};
quantumChapters.photons.lesson.example = {
  statement: 'Un photon a une fréquence f = 5,00 × 10¹⁴ Hz. Calculer son énergie et sa longueur d’onde dans le vide.',
  calculation: 'Avec h = 6,626 × 10⁻³⁴ J·s et c = 2,998 × 10⁸ m·s⁻¹ : E = hf = 3,313 × 10⁻¹⁹ J ; λ = c/f = 6,00 × 10⁻⁷ m.',
  answer: 'E ≈ 2,07 eV et λ ≈ 600 nm.'
};
quantumChapters.photons.lesson.exercise = {
  question: 'Une surface de travail φ = 2,00 eV reçoit une lumière de longueur d’onde 400 nm. Quelle est l’énergie cinétique maximale des photoélectrons ?',
  answer: 'Eγ = hc/λ ≈ 1239,84/400 = 3,10 eV. Kmax = Eγ − φ ≈ 3,10 − 2,00 = 1,10 eV.'
};
quantumChapters.photons.lesson.equationDetails = [
  {
    title: 'Énergie et longueur d’onde du photon',
    formula: 'Eγ = hf = hc/λ ; c = fλ',
    explanation: 'La première égalité donne l’énergie quantique du photon ; la seconde forme utilise la relation de propagation d’une onde électromagnétique dans le vide. Une fréquence plus élevée, donc une longueur d’onde plus courte, correspond à un photon plus énergétique.',
    parameters: 'Eγ : énergie du photon (J ou eV) ; h = 6,62607015 × 10⁻³⁴ J·s : constante de Planck ; f : fréquence (Hz = s⁻¹) ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide ; λ : longueur d’onde dans le vide (m). hc ≈ 1239,84 eV·nm.',
    example: 'Pour f = 5,00 × 10¹⁴ Hz, Eγ = hf = 3,313 × 10⁻¹⁹ J. Avec 1 eV = 1,602176634 × 10⁻¹⁹ J, cela vaut 2,07 eV ; λ = c/f = 600 nm.',
    result: 'Le photon transporte environ 3,31 × 10⁻¹⁹ J, soit 2,07 eV, et sa longueur d’onde dans le vide est 600 nm.'
  },
  {
    title: 'Bilan d’énergie de l’effet photoélectrique',
    formula: 'Kmax = hf − φ, si hf ≥ φ',
    explanation: 'Dans le modèle d’Einstein, un photon transfère son énergie à un électron. Le travail nécessaire pour extraire cet électron est la fonction de travail φ ; l’énergie restante est la borne supérieure de l’énergie cinétique des électrons émis. Si hf < φ, aucune émission photoélectrique à un photon n’est possible.',
    parameters: 'Kmax : énergie cinétique maximale de l’électron émis (J ou eV) ; h : constante de Planck ; f : fréquence incidente (Hz) ; φ : fonction de travail du matériau, énergie minimale d’extraction (J ou eV). Les énergies doivent être dans les mêmes unités.',
    example: 'Pour une surface hypothétique de φ = 2,00 eV éclairée à λ = 400 nm, Eγ = hc/λ ≈ 1239,84/400 = 3,10 eV, donc Kmax ≈ 3,10 − 2,00.',
    result: 'Kmax ≈ 1,10 eV. La valeur φ = 2,00 eV est ici une donnée d’exercice, pas l’attribution à un métal particulier.'
  },
  {
    title: 'Fréquence seuil',
    formula: 'f₀ = φ/h',
    explanation: 'La fréquence seuil correspond au cas limite hf₀ = φ : chaque photon apporte juste l’énergie d’extraction. Au seuil idéal, Kmax = 0 ; une fréquence strictement supérieure donne des électrons avec une énergie cinétique positive.',
    parameters: 'f₀ : fréquence seuil (Hz) ; φ : fonction de travail (J) ; h : constante de Planck (J·s). Si φ est donnée en eV, utiliser h ≈ 4,135667696 × 10⁻¹⁵ eV·s.',
    example: 'Pour φ = 2,00 eV, f₀ = 2,00/(4,135667696 × 10⁻¹⁵) s⁻¹.',
    result: 'f₀ ≈ 4,84 × 10¹⁴ Hz.'
  },
  {
    title: 'Longueur d’onde seuil',
    formula: 'λ₀ = c/f₀ = hc/φ',
    explanation: 'Cette relation exprime le même seuil en longueur d’onde. Comme f = c/λ dans le vide, le photoeffet est possible pour λ < λ₀ ; à λ = λ₀, le modèle idéal donne Kmax = 0.',
    parameters: 'λ₀ : longueur d’onde seuil dans le vide (m ou nm) ; c : vitesse de la lumière (m·s⁻¹) ; f₀ : fréquence seuil (Hz) ; h : constante de Planck ; φ : fonction de travail. Utiliser des unités cohérentes pour hc et φ.',
    example: 'Pour φ = 2,00 eV, λ₀ ≈ (1239,84 eV·nm)/(2,00 eV).',
    result: 'λ₀ ≈ 620 nm. Une longueur d’onde plus grande ne produit pas de photoélectrons dans ce modèle, même si l’intensité augmente.'
  },
  {
    title: 'Mesure par le potentiel d’arrêt',
    formula: 'Kmax = eVs',
    explanation: 'Un champ électrique inverse freine les photoélectrons. Au potentiel d’arrêt, le travail électrique compense exactement leur énergie cinétique maximale. Vs désigne ici la valeur positive de la tension de freinage ; le signe de la tension appliquée dépend du branchement.',
    parameters: 'Kmax : énergie cinétique maximale (J) ; e = 1,602176634 × 10⁻¹⁹ C : valeur absolue de la charge élémentaire ; Vs : valeur absolue du potentiel d’arrêt (V). Comme 1 eV = e × 1 V, la valeur numérique en eV est égale à celle en volts.',
    example: 'Si le potentiel d’arrêt mesuré vaut Vs = 1,10 V, alors Kmax = e × 1,10 V.',
    result: 'Kmax = 1,10 eV, soit environ 1,76 × 10⁻¹⁹ J.'
  }
];
quantumChapters.photons.lesson.sources = [
  { title: 'OpenStax University Physics, vol. 3 — Blackbody Radiation and Planck’s hypothesis', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation' },
  { title: 'OpenStax University Physics, vol. 3 — Photoelectric Effect', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect' },
  { title: 'NIST — CODATA recommended values of the fundamental constants', url: 'https://physics.nist.gov/cuu/Constants/' }
];

quantumChapters['dualite-onde-corpuscule'].summary = 'Longueur d’onde de de Broglie, limites de localisation et dualité observée par diffraction et interférences.';
quantumChapters['dualite-onde-corpuscule'].lesson.sections = [
  'À une particule de quantité de mouvement p est associée une longueur d’onde λ = h/p. Cette onde de matière n’est pas une vague matérielle : la mécanique quantique utilise une fonction d’onde pour calculer des probabilités. Les interférences et la diffraction d’électrons en révèlent le caractère ondulatoire, tandis que des détections localisées révèlent leur aspect corpusculaire.',
  'Pour une particule lente devant la lumière, p ≈ mv ; lorsque la vitesse approche c, il faut utiliser la quantité de mouvement relativiste p = γmv. La formule de de Broglie reste λ = h/p dans les deux cas : c’est l’approximation utilisée pour calculer p qui change.',
  'Une particule localisée est décrite par un paquet d’ondes. Réduire la dispersion de ses positions exige une plus grande dispersion des quantités de mouvement possibles. La relation d’incertitude donne une borne minimale intrinsèque aux écarts-types ; ce n’est pas simplement une imperfection des instruments de mesure.',
  'Dans le modèle semi-classique de Bohr, l’onde associée à l’électron doit se refermer sur son orbite : un nombre entier de longueurs d’onde tient sur la circonférence. Cette condition explique la quantification des orbites dans ce modèle historique ; en mécanique quantique moderne, l’électron n’est pas décrit comme une bille parcourant une trajectoire circulaire déterminée.'
];
quantumChapters['dualite-onde-corpuscule'].lesson.formula = {
  label: 'LONGUEUR D’ONDE DE DE BROGLIE',
  text: 'λ = h/p'
};
quantumChapters['dualite-onde-corpuscule'].lesson.example = {
  statement: 'Estimer la longueur d’onde de de Broglie d’un électron de vitesse 1,00 × 10⁶ m·s⁻¹.',
  calculation: 'Comme v ≪ c, p ≈ mv = (9,109 × 10⁻³¹ kg)(1,00 × 10⁶ m·s⁻¹) = 9,109 × 10⁻²⁵ kg·m·s⁻¹. Alors λ = h/p.',
  answer: 'λ ≈ 7,27 × 10⁻¹⁰ m, soit 0,727 nm.'
};
quantumChapters['dualite-onde-corpuscule'].lesson.exercise = {
  question: 'Un électron est localisé avec un écart-type Δx = 0,10 nm. Quelle est la plus petite valeur permise de Δp par la relation de Heisenberg ?',
  answer: 'Δp ≥ ℏ/(2Δx) = (1,055 × 10⁻³⁴ J·s)/(2 × 1,0 × 10⁻¹⁰ m) ≈ 5,27 × 10⁻²⁵ kg·m·s⁻¹.'
};
quantumChapters['dualite-onde-corpuscule'].lesson.equationDetails = [
  {
    title: 'Longueur d’onde de de Broglie',
    formula: 'λ = h/p ; p = mv si v ≪ c',
    explanation: 'La longueur d’onde associée à la matière est inversement proportionnelle à sa quantité de mouvement. Pour une particule non relativiste, on calcule p avec la mécanique classique ; à vitesse relativiste, p = γmv avec γ = 1/√(1 − v²/c²).',
    parameters: 'λ : longueur d’onde de matière (m) ; h = 6,62607015 × 10⁻³⁴ J·s : constante de Planck ; p : norme de la quantité de mouvement (kg·m·s⁻¹) ; m : masse (kg) ; v : vitesse (m·s⁻¹) ; c : vitesse de la lumière ; γ : facteur de Lorentz.',
    example: 'Pour un électron de masse mₑ = 9,109 × 10⁻³¹ kg se déplaçant à v = 1,00 × 10⁶ m·s⁻¹, v/c ≈ 0,0033, donc p ≈ mₑv = 9,109 × 10⁻²⁵ kg·m·s⁻¹ et λ = h/p.',
    result: 'λ ≈ 7,27 × 10⁻¹⁰ m = 0,727 nm. L’approximation non relativiste est justifiée ici car v est très inférieure à c.'
  },
  {
    title: 'Principe d’incertitude position-impulsion',
    formula: 'Δx Δp ≥ ℏ/2',
    explanation: 'Δx et Δp représentent les écarts-types de position et de quantité de mouvement dans un même état quantique. Leur produit ne peut pas être inférieur à ℏ/2 ; certaines fonctions d’onde, comme une gaussienne, atteignent cette borne. La limite est intrinsèque à l’état quantique, pas une erreur de fabrication de l’appareil.',
    parameters: 'Δx : incertitude-type de position (m) ; Δp : incertitude-type de quantité de mouvement (kg·m·s⁻¹) ; ℏ = h/(2π) ≈ 1,055 × 10⁻³⁴ J·s : constante de Planck réduite.',
    example: 'Si Δx = 0,10 nm = 1,0 × 10⁻¹⁰ m, alors Δp ≥ ℏ/(2Δx) ≈ (1,055 × 10⁻³⁴)/(2,0 × 10⁻¹⁰).',
    result: 'Δp ≥ 5,27 × 10⁻²⁵ kg·m·s⁻¹.'
  },
  {
    title: 'Onde stationnaire dans le modèle de Bohr',
    formula: '2πrₙ = nλ ; Lₙ = nℏ',
    explanation: 'Dans l’image semi-classique de Bohr, l’onde de de Broglie se referme sans rupture après un tour : la circonférence contient n longueurs d’onde. En remplaçant λ par h/p, on retrouve la quantification du moment cinétique orbital de ce modèle.',
    parameters: 'rₙ : rayon de l’orbite n (m) ; n : entier positif (indice d’orbite) ; λ : longueur d’onde de de Broglie (m) ; Lₙ : moment cinétique orbital (J·s) ; ℏ = h/(2π).',
    example: 'Pour l’état fondamental n = 1 de l’hydrogène dans le modèle de Bohr, r₁ = a₀ = 0,529 Å. La condition donne λ = 2πr₁.',
    result: 'λ ≈ 3,32 Å. Cette représentation est celle du modèle de Bohr, pas une trajectoire réelle dans la description quantique moderne.'
  }
];
quantumChapters['dualite-onde-corpuscule'].lesson.sources = [
  { title: 'OpenStax University Physics, vol. 3 — De Broglie’s Matter Waves', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves' },
  { title: 'OpenStax University Physics, vol. 3 — Wave-Particle Duality', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality' },
  { title: 'OpenStax University Physics, vol. 3 — The Heisenberg Uncertainty Principle', url: 'https://openstax.org/books/university-physics-volume-3/pages/7-2-the-heisenberg-uncertainty-principle' },
  { title: 'OpenStax University Physics, vol. 3 — Bohr’s Model of the Hydrogen Atom', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-4-bohrs-model-of-the-hydrogen-atom' }
];

quantumChapters['atomes-niveaux'].summary = 'Niveaux d’énergie de l’hydrogène, transitions quantiques, photons et raies spectrales.';
quantumChapters['atomes-niveaux'].lesson.sections = [
  'Un atome ne peut occuper que certains états d’énergie. Dans l’atome d’hydrogène, le modèle de Bohr donne des niveaux discrets Eₙ = −13,6 eV/n², avec n entier positif. Cette formule décrit correctement les niveaux principaux de l’hydrogène dans l’approximation non relativiste ; les atomes à plusieurs électrons ont des interactions et des corrections supplémentaires.',
  'Lors d’une transition, l’énergie de l’atome change de ΔE_atome = E_final − E_initial. Le photon émis emporte l’énergie perdue par l’atome ; un photon absorbé doit apporter exactement l’écart vers un état supérieur. Les raies spectrales correspondent ainsi à des longueurs d’onde bien déterminées.',
  'Pour l’émission dans l’hydrogène, un électron descend d’un niveau nᵢ vers un niveau plus bas n_f. La série de Balmer correspond à n_f = 2 ; la transition nᵢ = 3 vers n_f = 2 produit la raie Hα rouge vers 656 nm. Le modèle de Bohr est un modèle semi-classique utile pour l’hydrogène, tandis que la mécanique quantique décrit les états par des fonctions d’onde plutôt que par des orbites planétaires.'
];
quantumChapters['atomes-niveaux'].lesson.formula = {
  label: 'ÉNERGIE D’UNE TRANSITION',
  text: '|ΔE| = hf = hc/λ'
};
quantumChapters['atomes-niveaux'].lesson.example = {
  statement: 'Un atome émet un photon lors d’une transition d’énergie 3,00 eV. Calculer sa fréquence et sa longueur d’onde.',
  calculation: 'λ = hc/|ΔE| ≈ 1239,84 eV·nm/3,00 eV = 413,28 nm ; f = |ΔE|/h ≈ 3,00/(4,13567 × 10⁻¹⁵) Hz.',
  answer: 'λ ≈ 413 nm et f ≈ 7,25 × 10¹⁴ Hz.'
};
quantumChapters['atomes-niveaux'].lesson.exercise = {
  question: 'Dans le modèle de Bohr de l’hydrogène, quelle énergie faut-il fournir pour faire passer l’électron de n = 1 à n = 2 ?',
  answer: 'E₁ = −13,6 eV et E₂ = −13,6/4 = −3,40 eV. Il faut fournir ΔE = E₂ − E₁ = 10,2 eV.'
};
quantumChapters['atomes-niveaux'].lesson.equationDetails = [
  {
    title: 'Niveaux d’énergie de l’hydrogène',
    formula: 'Eₙ = −13,6 eV/n², n = 1, 2, 3, …',
    explanation: 'Dans le modèle de Bohr, l’énergie liée de l’électron est négative et ne prend que ces valeurs discrètes ; E = 0 correspond à l’électron libre, juste ionisé. Cette expression vaut pour l’hydrogène dans l’approximation usuelle ; elle ne s’applique pas telle quelle à un atome neutre à plusieurs électrons.',
    parameters: 'Eₙ : énergie totale de l’état n (eV) ; n : nombre quantique principal, entier positif ; −13,6 eV : énergie fondamentale de l’hydrogène dans ce modèle. Les petites corrections de structure fine et de masse réduite ne sont pas incluses.',
    example: 'Pour n = 2, E₂ = −13,6/2² eV.',
    result: 'E₂ = −3,40 eV. L’électron est moins lié qu’au niveau fondamental E₁ = −13,6 eV.'
  },
  {
    title: 'Énergie et longueur d’onde d’une transition',
    formula: '|ΔE| = hf = hc/λ',
    explanation: 'La valeur absolue de la variation d’énergie atomique est égale à l’énergie du photon émis ou absorbé. À l’émission, l’atome perd cette énergie ; à l’absorption, il la reçoit. Le signe de ΔE_atome dépend donc du sens de la transition, contrairement à l’énergie du photon qui est positive.',
    parameters: '|ΔE| : écart d’énergie (J ou eV) ; h = 6,62607015 × 10⁻³⁴ J·s ; f : fréquence du photon (Hz) ; c = 299 792 458 m·s⁻¹ dans le vide ; λ : longueur d’onde (m). En unités pratiques, hc ≈ 1239,84 eV·nm.',
    example: 'Pour |ΔE| = 3,00 eV, λ ≈ 1239,84/3,00 nm et f ≈ 3,00/(4,13567 × 10⁻¹⁵) Hz.',
    result: 'Le photon a λ ≈ 413 nm et f ≈ 7,25 × 10¹⁴ Hz.'
  },
  {
    title: 'Raies de l’hydrogène (formule de Rydberg)',
    formula: '1/λ = R_H(1/n_f² − 1/n_i²), n_i > n_f',
    explanation: 'Cette relation donne les longueurs d’onde émises lorsqu’un électron de l’hydrogène passe du niveau initial supérieur nᵢ au niveau final inférieur n_f. Elle découle de la différence entre les niveaux d’énergie et de |ΔE| = hc/λ. Pour une absorption, les niveaux sont parcourus dans le sens inverse et on prend la valeur absolue de la différence.',
    parameters: 'λ : longueur d’onde dans le vide (m) ; R_H ≈ 1,09737 × 10⁷ m⁻¹ : constante de Rydberg pour l’hydrogène ; nᵢ et n_f : nombres quantiques principaux entiers positifs ; nᵢ > n_f pour l’émission.',
    example: 'Pour la raie Hα, nᵢ = 3 et n_f = 2 : 1/λ = R_H(1/2² − 1/3²) = R_H(5/36).',
    result: 'Avec R_H ≈ 1,09737 × 10⁷ m⁻¹, λ ≈ 656,1 nm, dans le rouge visible ; cette transition appartient à la série de Balmer.'
  }
];
quantumChapters['atomes-niveaux'].lesson.sources = [
  { title: 'OpenStax University Physics, vol. 3 — Bohr’s Model of the Hydrogen Atom', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-4-bohrs-model-of-the-hydrogen-atom' },
  { title: 'OpenStax University Physics, vol. 3 — The Hydrogen Atom', url: 'https://openstax.org/books/university-physics-volume-3/pages/8-1-the-hydrogen-atom' },
  { title: 'OpenStax University Physics, vol. 3 — Atomic Spectra and X-rays', url: 'https://openstax.org/books/university-physics-volume-3/pages/8-5-atomic-spectra-and-x-rays' },
  { title: 'NIST — CODATA recommended values of the fundamental constants', url: 'https://physics.nist.gov/cuu/Constants/' }
];

const additionalPhysicsDetails = {
  cinematique: {
    equations: [
      { title: 'Vitesse à accélération constante', formula: 'v(t) = v₀ + at', explanation: 'Cette relation donne la vitesse après une durée t lorsque l’accélération a reste constante.', parameters: 'v(t) : vitesse à l’instant t (m·s⁻¹) ; v₀ : vitesse initiale (m·s⁻¹) ; a : accélération algébrique constante (m·s⁻²) ; t : durée (s). Les signes dépendent de l’axe orienté choisi.', example: 'Un véhicule part du repos avec a = 2 m·s⁻² pendant 5 s : v = 0 + 2 × 5.', result: 'v = 10 m·s⁻¹.' },
      { title: 'Position à accélération constante', formula: 'x(t) = x₀ + v₀t + ½at²', explanation: 'La position résulte de la position initiale, du déplacement dû à la vitesse initiale et du déplacement dû à l’accélération constante.', parameters: 'x(t), x₀ : position et position initiale sur l’axe (m) ; v₀ : vitesse initiale (m·s⁻¹) ; a : accélération constante (m·s⁻²) ; t : durée (s).', example: 'Pour x₀ = 0, v₀ = 0, a = 2 m·s⁻² et t = 5 s : x = ½ × 2 × 5².', result: 'Le déplacement est 25 m.' },
      { title: 'Vitesse instantanée', formula: 'v(t) = dx/dt', explanation: 'La vitesse instantanée est la limite de la vitesse moyenne lorsque l’intervalle de temps tend vers zéro ; elle se lit comme la pente de la courbe x(t), le déplacement étant l’aire sous cette courbe.', parameters: 'v(t) : vitesse à l’instant t (m·s⁻¹) ; x(t) : position (m) ; t : date (s).', example: 'Pour x(t) = 2t², la dérivée est dx/dt = 4t ; à t = 3 s la vitesse vaut 12 m·s⁻¹.', result: 'v(3 s) = 12 m·s⁻¹.' },
      { title: 'Accélération instantanée', formula: 'a(t) = dv/dt', explanation: 'L’accélération mesure une variation de vitesse, non une vitesse : un objet peut avoir une vitesse constante et une accélération non nulle, par exemple en mouvement circulaire uniforme.', parameters: 'a(t) : accélération (m·s⁻²) ; v(t) : vitesse (m·s⁻¹) ; t : date (s). L’accélération est la pente de la courbe v(t).', example: 'Pour v(t) = 5 − 3t, l’accélération vaut dv/dt = −3 m·s⁻² pendant tout le mouvement.', result: 'a = −3 m·s⁻² : la vitesse décroît linéairement.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Position, Displacement, and Average Velocity', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-1-position-displacement-and-average-velocity' },
      { title: 'OpenStax University Physics, vol. 1 — Instantaneous Velocity and Speed', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-2-instantaneous-velocity-and-speed' },
      { title: 'OpenStax University Physics, vol. 1 — Average and Instantaneous Acceleration', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-3-average-and-instantaneous-acceleration' },
      { title: 'OpenStax University Physics, vol. 1 — Motion with Constant Acceleration', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration' },
      { title: 'OpenStax University Physics, vol. 1 — Free Fall', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-5-free-fall' }
    ]
  },
  'lois-newton': {
    equations: [
      { title: 'Deuxième loi de Newton', formula: 'Σ F⃗ₑₓₜ = m a⃗', explanation: 'Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un système est égale à sa masse fois son accélération. Seule la résultante détermine l’accélération.', parameters: 'Σ F⃗ₑₓₜ : résultante des forces extérieures (N) ; m : masse inertielle (kg) ; a⃗ : accélération du centre de masse (m·s⁻²). 1 N = 1 kg·m·s⁻².', example: 'Une résultante de 12 N agit sur une masse de 4 kg : a = F/m = 12/4.', result: 'L’accélération vaut 3 m·s⁻² dans la direction de la résultante.' },
      { title: 'Poids d’un corps', formula: 'w⃗ = m g⃗', explanation: 'Le poids est la force de attraction terrestre : il dépend du lieu, alors que la masse ne varie pas. OpenStax donne g = 9,80 m·s⁻² sur Terre et 1,62 m·s⁻² sur la Lune.', parameters: 'w⃗ : poids (N) ; m : masse (kg) ; g⃗ : accélération de la pesanteur (m·s⁻²). Le poids apparent, mesuré par une balance, vaut N = m(g ± a) dans un référentiel accéléré.', example: 'Une masse de 5,0 kg pèse 5,0 × 9,81 ≈ 49 N sur Terre.', result: 'w ≈ 49 N ; le même corps pèse environ 8,1 N sur la Lune.' },
      { title: 'Frottement statique et cinétique', formula: 'fₛ ≤ μₛ N  et  fₖ = μₖ N', explanation: 'Le frottement statique s’adapte exactement à la force qui tend à faire glisser, jusqu’à sa valeur maximale ; le frottement cinétique a une intensité fixe une fois le glissement commencé. On a toujours μₛ > μₖ.', parameters: 'fₛ : frottement statique (N) ; fₖ : frottement cinétique (N) ; μₛ, μₖ : coefficients de frottement des deux matériaux ; N : réaction normale (N).', example: 'Un bloc de 4,0 kg sur un sol horizontal avec μₖ = 0,30 : N = 4,0 × 9,81 = 39,2 N donc fₖ = 11,8 N.', result: 'fₖ ≈ 11,8 N, opposée au mouvement.' },
      { title: 'Force centripète', formula: 'F꜀ = m v²/r', explanation: 'Dans un mouvement circulaire, la force centripète est le nom donné à la résultante des forces lorsqu’elle pointe vers le centre ; elle est perpendiculaire à la vitesse et ne modifie que sa direction.', parameters: 'F꜀ : force centripète (N) ; m : masse (kg) ; v : vitesse (m·s⁻¹) ; r : rayon de la trajectoire (m). Également F꜀ = m r ω².', example: 'Pour m = 900 kg, r = 500 m et v = 25,0 m·s⁻¹ (OpenStax, vol. 1, exemple 6.15).', result: 'F꜀ = 900 × 25,0² / 500 = 1 125 N.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Newton’s First Law', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-2-newtons-first-law' },
      { title: 'OpenStax University Physics, vol. 1 — Newton’s Second Law', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law' },
      { title: 'OpenStax University Physics, vol. 1 — Mass and Weight', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-4-mass-and-weight' },
      { title: 'OpenStax University Physics, vol. 1 — Drawing Free-Body Diagrams', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-7-drawing-free-body-diagrams' },
      { title: 'OpenStax University Physics, vol. 1 — Friction', url: 'https://openstax.org/books/university-physics-volume-1/pages/6-2-friction' },
      { title: 'OpenStax University Physics, vol. 1 — Centripetal Force', url: 'https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force' }
    ]
  },
  'energie-mecanique': {
    equations: [
      { title: 'Énergie cinétique', formula: 'E꜀ = ½mv²', explanation: 'L’énergie cinétique est l’énergie associée au mouvement de translation d’un corps dans le cadre classique.', parameters: 'E꜀ : énergie cinétique (J) ; m : masse (kg) ; v : vitesse par rapport au référentiel choisi (m·s⁻¹).', example: 'Pour m = 2 kg et v = 5 m·s⁻¹ : E꜀ = ½ × 2 × 5².', result: 'E꜀ = 25 J.' },
      { title: 'Théorème de l’énergie cinétique', formula: 'ΔE꜀ = ΣW(F)', explanation: 'La variation d’énergie cinétique entre deux positions égale le travail total des forces appliquées au système ponctuel, ou au centre de masse dans les conditions usuelles du cours.', parameters: 'ΔE꜀ : énergie cinétique finale moins initiale (J) ; W(F) : travail d’une force sur le trajet (J) ; la somme porte sur les forces considérées.', example: 'Si le travail total des forces sur un trajet vaut 16 J, alors la variation d’énergie cinétique sur ce trajet vaut 16 J.', result: 'L’énergie cinétique augmente de 16 J.' },
      { title: 'Énergie mécanique', formula: 'Eₘ = E꜀ + Eₚ', explanation: 'L’énergie mécanique est la somme de l’énergie cinétique et des énergies potentielles associées aux interactions conservatives retenues. Elle se conserve si le travail des forces non conservatives est nul.', parameters: 'Eₘ, E꜀, Eₚ : énergies mécanique, cinétique et potentielle (J) ; le zéro de l’énergie potentielle dépend du choix de référence.', example: 'Un objet possède E꜀ = 12 J et Eₚ = 8 J : Eₘ = 12 + 8.', result: 'Eₘ = 20 J. Cette valeur reste constante uniquement si les forces dissipatives ne fournissent pas de travail net.' },
      { title: 'Travail d’une force', formula: 'W = F⃗ · Δr⃗ = F Δr cos θ', explanation: 'Le travail est le produit scalaire de la force par le déplacement de son point d’application, projeté sur la force. Il est nul lorsque le déplacement est perpendiculaire à la force.', parameters: 'W : travail (J) ; F : force (N) ; Δr : déplacement (m) ; θ : angle entre la force et le déplacement. 1 J = 1 N·m.', example: 'Une force de 100 N déplace un objet de 5,0 m à 60° de sa direction : W = 100 × 5,0 × cos 60°.', result: 'W = 250 J : le travail est positif, l’énergie est fournie au système.' },
      { title: 'Puissance', formula: 'P = dW/dt = F⃗ · v⃗', explanation: 'La puissance mesure la rapidité avec laquelle une énergie est transférée ; elle peut être négative lors d’un freinage, ou nulle si la force est perpendiculaire à la vitesse.', parameters: 'P : puissance (W) ; W : travail (J) ; t : durée (s). 1 W = 1 J·s⁻¹.', example: 'Un moteur de 2 000 kg élève une charge de 4,0 m en 10 s : W = mgh ≈ 78 500 J.', result: 'P ≈ 7,8 × 10³ W ; à durée égale, plus la montée est rapide, plus la puissance est élevée.' },
      { title: 'Énergie potentielle de pesanteur', formula: 'Eₚ = m g y', explanation: 'L’énergie potentielle n’est définie qu’à une constante près : le zéro est conventionnel, mais les différences d’énergie potentielle sont indépendantes de ce choix.', parameters: 'Eₚ : énergie potentielle (J) ; m : masse (kg) ; g = 9,81 m·s⁻² ; y : hauteur au-dessus du point de référence (m).', example: 'Un objet de 2,0 kg placé 3,0 m au-dessus du niveau de référence : Eₚ = 2,0 × 9,81 × 3,0.', result: 'Eₚ ≈ 58,9 J.' },
      { title: 'Quantité de mouvement', formula: 'p⃗ = m v⃗', explanation: 'La quantité de mouvement est l’analogue vectoriel de la deuxième loi : dans un système fermé, la quantité de mouvement totale se conserve, quelle que soit l’évolution du mouvement.', parameters: 'p⃗ : quantité de mouvement (kg·m·s⁻¹) ; m : masse (kg) ; v⃗ : vitesse (m·s⁻¹).', example: 'Une balle de 0,20 kg à 30 m·s⁻¹ percute un chariot de 1,80 kg au repos ; ils restent solidaires.', result: 'v = 6,0 / 2,0 = 3,0 m·s⁻¹ ; l’énergie cinétique passe de 90 J à 9 J, la différence étant dissipée.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Work', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-1-work' },
      { title: 'OpenStax University Physics, vol. 1 — Kinetic Energy', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-2-kinetic-energy' },
      { title: 'OpenStax University Physics, vol. 1 — Work-Energy Theorem', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem' },
      { title: 'OpenStax University Physics, vol. 1 — Power', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-4-power' },
      { title: 'OpenStax University Physics, vol. 1 — Potential Energy of a System', url: 'https://openstax.org/books/university-physics-volume-1/pages/8-1-potential-energy-of-a-system' },
      { title: 'OpenStax University Physics, vol. 1 — Conservation of Energy', url: 'https://openstax.org/books/university-physics-volume-1/pages/8-3-conservation-of-energy' },
      { title: 'OpenStax University Physics, vol. 1 — Linear Momentum', url: 'https://openstax.org/books/university-physics-volume-1/pages/9-1-linear-momentum' },
      { title: 'OpenStax University Physics, vol. 1 — Types of Collisions', url: 'https://openstax.org/books/university-physics-volume-1/pages/9-4-types-of-collisions' }
    ]
  },
  'gaz-parfaits': {
    equations: [
      { title: 'Équation d’état du gaz parfait', formula: 'PV = nRT', explanation: 'Le modèle du gaz parfait relie pression, volume, quantité de matière et température absolue. Il est une approximation adaptée notamment aux gaz peu denses et suffisamment éloignés de la liquéfaction.', parameters: 'P : pression absolue (Pa) ; V : volume (m³) ; n : quantité de matière (mol) ; R = 8,314462618 J·mol⁻¹·K⁻¹ : constante des gaz parfaits ; T : température absolue (K).', example: 'Pour n = 1,00 mol, T = 300 K et V = 24,0 L = 0,0240 m³ : P = nRT/V.', result: 'P ≈ 1,04 × 10⁵ Pa.' },
      { title: 'Conversion Celsius-kelvin', formula: 'T(K) = θ(°C) + 273,15', explanation: 'L’échelle kelvin et l’échelle Celsius ont la même taille de degré ; leurs origines diffèrent de 273,15 degrés.', parameters: 'T : température thermodynamique (K) ; θ : température Celsius (°C) ; un écart de 1 K équivaut à un écart de 1 °C.', example: 'Pour θ = 20,00 °C : T = 20,00 + 273,15.', result: 'T = 293,15 K.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 2 — Molecular Model of an Ideal Gas', url: 'https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas' },
      { title: 'OpenStax University Physics, vol. 2 — Pressure, Temperature, and RMS Speed', url: 'https://openstax.org/books/university-physics-volume-2/pages/2-2-pressure-temperature-and-rms-speed' },
      { title: 'NIST — CODATA recommended values of the fundamental constants', url: 'https://physics.nist.gov/cuu/Constants/' }
    ]
  },
  'premier-principe': {
    equations: [
      { title: 'Premier principe de la thermodynamique', formula: 'ΔU = Q + W', explanation: 'Pour un système fermé, la variation d’énergie interne égale la chaleur reçue plus le travail reçu. Cette écriture utilise la convention « reçue par le système positive ».', parameters: 'ΔU : variation d’énergie interne (J) ; Q : transfert thermique reçu (J) ; W : travail reçu (J). Si le système fournit du travail, W est négatif avec cette convention.', example: 'Le système reçoit Q = +500 J et fournit 120 J de travail, donc W = −120 J : ΔU = 500 − 120.', result: 'ΔU = +380 J.' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 2 — First Law of Thermodynamics', url: 'https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics' }]
  },
  'second-principe': {
    equations: [
      { title: 'Second principe pour un système isolé', formula: 'ΔS ≥ 0', explanation: 'L’entropie totale d’un système isolé ne diminue pas. Elle reste constante dans une évolution réversible idéale et augmente lors d’une évolution irréversible.', parameters: 'ΔS : variation d’entropie du système isolé (J·K⁻¹) ; l’inégalité porte sur l’évolution complète entre les états initial et final.', example: 'Deux corps à températures différentes échangent spontanément de la chaleur dans un ensemble isolé : cette évolution est irréversible, donc ΔS_total > 0.', result: 'L’entropie totale augmente ; le transfert inverse ne se produit pas spontanément.' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 2 — Entropy', url: 'https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy' }]
  },
  'circuits-electriques': {
    equations: [
      { title: 'Loi d’Ohm', formula: 'U = RI', explanation: 'Pour un dipôle ohmique à température et conditions physiques fixées, la tension est proportionnelle au courant.', parameters: 'U : tension aux bornes (V) ; R : résistance (Ω) ; I : courant (A). La loi n’est pas universelle pour tout composant ni tout régime.', example: 'Pour R = 6 Ω traversée par I = 2 A : U = RI = 6 × 2.', result: 'U = 12 V.' },
      { title: 'Puissance électrique', formula: 'P = UI', explanation: 'La puissance électrique transférée à un dipôle est le produit de la tension par le courant selon la convention récepteur. Pour une résistance ohmique, la loi d’Ohm permet d’écrire les formes équivalentes.', parameters: 'P : puissance (W) ; U : tension (V) ; I : courant (A) ; R : résistance (Ω). Avec la convention générateur, le signe dépend du sens choisi pour courant et tension.', example: 'Pour U = 12 V et I = 2 A : P = UI = 24 W ; avec R = 6 Ω, RI² = 24 W également.', result: 'Le dipôle dissipe 24 W dans cette situation résistive.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 2 — Ohm’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law' },
      { title: 'OpenStax University Physics, vol. 2 — Electrical Energy and Power', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power' }
    ]
  },
  'champ-electrique': {
    equations: [
      { title: 'Loi de Coulomb', formula: 'F = k|q₁q₂|/r²', explanation: 'Cette forme donne la norme de la force électrostatique entre deux charges ponctuelles dans le vide. La force est portée par la droite joignant les charges ; son sens est répulsif pour deux charges de même signe et attractif pour des signes opposés.', parameters: 'F : norme de la force (N) ; q₁, q₂ : charges (C) ; r : distance entre charges (m) ; k = 1/(4πε₀) ≈ 8,988 × 10⁹ N·m²·C⁻² dans le vide.', example: 'Deux charges de module 1,0 μC séparées de 0,10 m subissent une force de norme F = k(1,0 × 10⁻⁶)²/(0,10)².', result: 'F ≈ 0,90 N ; le sens dépend des signes des deux charges.' },
      { title: 'Définition du champ électrique', formula: 'E⃗ = F⃗/qₜ', explanation: 'Le champ électrique en un point est la force électrique par unité de charge test positive placée en ce point, dans la limite où cette charge ne perturbe pas les sources.', parameters: 'E⃗ : champ électrique (N·C⁻¹ ou V·m⁻¹) ; F⃗ : force électrique (N) ; qₜ : charge test signée (C). La force sur une charge q vaut F⃗ = qE⃗.', example: 'Une charge q = +2,0 μC placée dans un champ uniforme E = 300 N·C⁻¹ subit F = qE.', result: 'La norme de la force est 6,0 × 10⁻⁴ N, dans le sens du champ.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 2 — Coulomb’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law' },
      { title: 'OpenStax University Physics, vol. 2 — Electric Field', url: 'https://openstax.org/books/university-physics-volume-2/pages/5-4-electric-field' }
    ]
  },
  induction: {
    equations: [
      { title: 'Loi de Faraday-Lenz', formula: 'e = −N dΦ/dt', explanation: 'Une variation du flux magnétique à travers une bobine induit une force électromotrice. Le signe moins traduit la loi de Lenz : l’effet induit s’oppose à la variation de flux qui le produit.', parameters: 'e : force électromotrice induite (V) ; N : nombre de spires ; Φ : flux magnétique par spire (Wb) ; t : temps (s). Pour une seule spire, N = 1 ; pour des variations moyennes, e_moy = −NΔΦ/Δt.', example: 'Une bobine de 20 spires subit une variation de flux par spire de 0,040 Wb en 0,20 s : |e_moy| = 20 × 0,040/0,20.', result: 'La valeur absolue de la f.é.m. moyenne est 4,0 V ; son signe dépend de l’orientation choisie.' },
      { title: 'Flux d’un champ uniforme', formula: 'Φ = BA cos θ', explanation: 'Le flux mesure la composante du champ magnétique traversant la surface. L’angle θ est entre le champ et la normale à la surface, non entre le champ et le plan lui-même.', parameters: 'Φ : flux magnétique (Wb) ; B : champ magnétique uniforme (T) ; A : aire de la surface (m²) ; θ : angle champ-normale.', example: 'Pour B = 0,50 T, A = 0,020 m² et θ = 60° : Φ = 0,50 × 0,020 × cos 60°.', result: 'Φ = 5,0 × 10⁻³ Wb par spire.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 2 — Faraday’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law' },
      { title: 'OpenStax University Physics, vol. 2 — Lenz’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/13-2-lenzs-law' }
    ]
  },
  oscillations: {
    equations: [
      { title: 'Période et fréquence', formula: 'f = 1/T ; ω = 2πf', explanation: 'La fréquence compte le nombre de cycles par seconde ; la pulsation exprime la vitesse angulaire de phase de l’oscillation.', parameters: 'T : période (s) ; f : fréquence (Hz = s⁻¹) ; ω : pulsation (rad·s⁻¹).', example: 'Pour T = 4,0 ms = 0,0040 s : f = 1/T = 250 Hz, puis ω = 2π × 250.', result: 'f = 250 Hz et ω ≈ 1,57 × 10³ rad·s⁻¹.' },
      { title: 'Position harmonique', formula: 'x(t) = A cos(ωt + φ)', explanation: 'Cette fonction décrit un oscillateur harmonique idéal, sans amortissement, autour de sa position d’équilibre.', parameters: 'x(t) : déplacement (m) ; A : amplitude maximale (m) ; ω : pulsation (rad·s⁻¹) ; t : temps (s) ; φ : phase initiale (rad).', example: 'Avec A = 0,050 m, f = 250 Hz et φ = 0, à t = 0 : x(0) = A cos 0.', result: 'x(0) = 0,050 m, à l’extrémité positive de l’oscillation.' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 1 — Simple Harmonic Motion', url: 'https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion' }]
  },
  interferences: {
    equations: [
      { title: 'Interfrange de Young', formula: 'i = λD/a', explanation: 'Pour deux fentes proches, des petits angles et un écran suffisamment éloigné, l’écart entre franges successives est proportionnel à la longueur d’onde et à la distance écran-fentes, et inversement proportionnel à l’écartement des fentes.', parameters: 'i : interfrange (m) ; λ : longueur d’onde dans le milieu (m) ; D : distance fentes-écran (m) ; a : écartement des fentes (m).', example: 'Pour λ = 600 nm, D = 2,0 m et a = 0,50 mm : i = (600 × 10⁻⁹ × 2,0)/(0,50 × 10⁻³).', result: 'i = 2,4 mm.' },
      { title: 'Minimum de diffraction par une fente', formula: 'a sin θ = mλ, m = 1, 2, …', explanation: 'Pour une fente de largeur a, les minima de diffraction se produisent selon cette condition. Le premier minimum est m = 1 ; pour petits angles, sin θ ≈ θ en radians.', parameters: 'a : largeur de la fente (m) ; θ : angle du minimum par rapport à l’axe central ; λ : longueur d’onde dans le milieu (m) ; m : ordre entier non nul.', example: 'Avec a = 0,50 mm et λ = 600 nm, le premier minimum vérifie sin θ = 600 × 10⁻⁹/(0,50 × 10⁻³).', result: 'θ ≈ 1,2 × 10⁻³ rad, soit environ 0,069°.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Interference of Waves', url: 'https://openstax.org/books/university-physics-volume-1/pages/16-5-interference-of-waves' },
      { title: 'OpenStax University Physics, vol. 3 — Young’s Double-Slit Interference', url: 'https://openstax.org/books/university-physics-volume-3/pages/3-1-youngs-double-slit-interference' },
      { title: 'OpenStax University Physics, vol. 3 — Single-Slit Diffraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/4-1-single-slit-diffraction' }
    ]
  },
  acoustique: {
    equations: [
      { title: 'Niveau d’intensité sonore', formula: 'L = 10 log₁₀(I/I₀) dB', explanation: 'Le niveau sonore est une échelle logarithmique comparant l’intensité mesurée à une intensité de référence. Chaque augmentation de 10 dB correspond à une intensité multipliée par 10.', parameters: 'L : niveau sonore (dB) ; I : intensité acoustique (W·m⁻²) ; I₀ = 10⁻¹² W·m⁻² : intensité de référence usuelle dans l’air.', example: 'Pour I = 10⁻⁶ W·m⁻² : I/I₀ = 10⁶, donc L = 10 log₁₀(10⁶).', result: 'L = 60 dB.' },
      { title: 'Effet Doppler du son', formula: 'fₒ = fₛ (v ± vₒ)/(v ∓ vₛ)', explanation: 'Cette forme classique s’applique à une onde sonore dans un milieu au repos. Les signes du numérateur et du dénominateur sont coordonnés : utiliser le signe supérieur pour un rapprochement et le signe inférieur pour un éloignement.', parameters: 'fₒ : fréquence observée (Hz) ; fₛ : fréquence émise (Hz) ; v : vitesse du son dans le milieu (m·s⁻¹) ; vₒ : vitesse de l’observateur par rapport au milieu ; vₛ : vitesse de la source par rapport au milieu. Cette formule sonore n’est pas la formule Doppler relativiste de la lumière.', example: 'Un klaxon de 150 Hz s’approche d’un observateur fixe à 35 m·s⁻¹ dans l’air où v = 340 m·s⁻¹ : fₒ = 150 × 340/(340 − 35).', result: 'La fréquence reçue est environ 167 Hz.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Sound Intensity', url: 'https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity' },
      { title: 'OpenStax University Physics, vol. 1 — The Doppler Effect', url: 'https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect' }
    ]
  },
  'optique-geometrique': {
    equations: [
      { title: 'Relation de conjugaison d’une lentille mince', formula: '1/OA′ − 1/OA = 1/OF′', explanation: 'Cette relation de Descartes relie les positions orientées de l’objet et de son image par rapport au centre optique à la distance focale image. Elle s’emploie dans l’approximation des lentilles minces et des rayons paraxiaux.', parameters: 'OA : abscisse orientée de l’objet (m ou cm) ; OA′ : abscisse orientée de l’image ; OF′ = f′ : distance focale image ; pour une lentille convergente f′ > 0 ; un objet réel placé avant la lentille a généralement OA < 0 avec cette convention.', example: 'Pour f′ = 10 cm et OA = −30 cm : 1/OA′ − 1/(−30) = 1/10, donc 1/OA′ = 1/10 − 1/30 = 1/15.', result: 'OA′ = +15 cm : l’image se forme à 15 cm derrière la lentille et elle est réelle.' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 3 — Thin Lenses', url: 'https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses' }]
  },
  refraction: {
    equations: [
      { title: 'Loi de Snell-Descartes', formula: 'n₁ sin i₁ = n₂ sin i₂', explanation: 'À une interface plane entre deux milieux transparents isotropes, le rayon transmis change de direction selon cette relation. Les angles d’incidence et de réfraction sont mesurés depuis la normale à l’interface.', parameters: 'n₁, n₂ : indices de réfraction des milieux, sans unité ; i₁, i₂ : angles mesurés depuis la normale ; n = c/v_phase dans le modèle usuel.', example: 'De l’air (n₁ ≈ 1,00) vers le verre (n₂ = 1,50), avec i₁ = 30° : sin i₂ = (1,00/1,50) sin 30° = 1/3.', result: 'i₂ ≈ 19,5°.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 3 — The Law of Reflection', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-2-the-law-of-reflection' },
      { title: 'OpenStax University Physics, vol. 3 — Refraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-3-refraction' }
    ]
  },
  'optique-ondulatoire': {
    equations: [
      { title: 'Interférences lumineuses', formula: 'δ = kλ : constructive ; δ = (k + ½)λ : destructive', explanation: 'Deux ondes cohérentes interfèrent de manière constructive lorsque leur différence de marche est un multiple entier de la longueur d’onde, et destructive pour un multiple demi-entier.', parameters: 'δ : différence de marche (m) ; λ : longueur d’onde dans le milieu (m) ; k : entier relatif. Les deux sources doivent conserver une différence de phase stable pour observer des franges.', example: 'Pour δ = 2λ, on a k = 2, un entier.', result: 'L’interférence est constructive.' },
      { title: 'Polarisation par un analyseur (loi de Malus)', formula: 'I = I₀ cos² θ', explanation: 'Pour une lumière déjà polarisée linéairement qui traverse un analyseur idéal, l’intensité transmise suit cette loi.', parameters: 'I₀ : intensité incidente polarisée (W·m⁻²) ; I : intensité transmise ; θ : angle entre la direction de polarisation incidente et l’axe de transmission de l’analyseur.', example: 'Si θ = 60° et I₀ = 8 W·m⁻², alors I = 8 cos²60°.', result: 'I = 2 W·m⁻².' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 3 — Young’s Double-Slit Interference', url: 'https://openstax.org/books/university-physics-volume-3/pages/3-1-youngs-double-slit-interference' },
      { title: 'OpenStax University Physics, vol. 3 — Polarization', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization' }
    ]
  },
  hydrostatique: {
    equations: [
      { title: 'Pression hydrostatique', formula: 'p = p₀ + ρgh', explanation: 'Dans un fluide homogène au repos, la pression augmente avec la profondeur h sous une surface où la pression vaut p₀. La relation suppose g et la masse volumique constantes sur la hauteur considérée.', parameters: 'p : pression à la profondeur h (Pa) ; p₀ : pression à la surface (Pa) ; ρ : masse volumique du fluide (kg·m⁻³) ; g : accélération de la pesanteur (m·s⁻²) ; h : profondeur verticale (m).', example: 'Dans l’eau, à h = 2,0 m, avec ρ = 1000 kg·m⁻³, g = 9,81 m·s⁻² et p₀ = 1,013 × 10⁵ Pa : p = p₀ + ρgh.', result: 'p ≈ 1,21 × 10⁵ Pa en pression absolue ; la surpression vaut environ 1,96 × 10⁴ Pa.' },
      { title: 'Poussée d’Archimède', formula: 'Fₐ = ρfluide g Vdéplacé', explanation: 'La poussée exercée par un fluide sur un corps immergé est égale au poids du fluide déplacé et dirigée vers le haut.', parameters: 'Fₐ : norme de la poussée (N) ; ρfluide : masse volumique du fluide (kg·m⁻³) ; g : pesanteur (m·s⁻²) ; Vdéplacé : volume de fluide déplacé (m³), égal au volume immergé.', example: 'Un corps déplace 2,0 L d’eau, soit 0,0020 m³ : Fₐ = 1000 × 9,81 × 0,0020.', result: 'Fₐ = 19,62 N.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Fluids, Density, and Pressure', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure' },
      { title: 'OpenStax University Physics, vol. 1 — Archimedes’ Principle and Buoyancy', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy' }
    ]
  },
  bernoulli: {
    equations: [
      { title: 'Conservation du débit pour un fluide incompressible', formula: 'Q = Sv ; S₁v₁ = S₂v₂', explanation: 'Dans un écoulement permanent d’un fluide incompressible sans fuite, le débit volumique se conserve entre les sections du conduit.', parameters: 'Q : débit volumique (m³·s⁻¹) ; S : aire de section (m²) ; v : vitesse moyenne normale à la section (m·s⁻¹).', example: 'Un conduit passe de S₁ = 4 cm² à S₂ = 1 cm², avec v₁ = 1 m·s⁻¹ : v₂ = S₁v₁/S₂.', result: 'v₂ = 4 m·s⁻¹.' },
      { title: 'Équation de Bernoulli', formula: 'p + ½ρv² + ρgz = constante', explanation: 'Le long d’une ligne de courant, cette somme de pression statique, pression dynamique et énergie potentielle volumique se conserve pour un fluide parfait, incompressible et en écoulement permanent. Des pertes visqueuses exigent un terme supplémentaire.', parameters: 'p : pression (Pa) ; ρ : masse volumique (kg·m⁻³) ; v : vitesse (m·s⁻¹) ; g : pesanteur (m·s⁻²) ; z : altitude (m). Chaque terme s’exprime en Pa = J·m⁻³.', example: 'Dans un conduit horizontal à même altitude, si v passe de 2 à 4 m·s⁻¹ dans l’eau (ρ = 1000 kg·m⁻³), alors p₂ − p₁ = ½ρ(v₁² − v₂²).', result: 'La pression baisse de 6000 Pa dans ce modèle idéal.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Fluid Dynamics', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-5-fluid-dynamics' },
      { title: 'OpenStax University Physics, vol. 1 — Bernoulli’s Equation', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation' }
    ]
  },
  viscosite: {
    equations: [
      { title: 'Nombre de Reynolds', formula: 'Re = ρvL/μ', explanation: 'Ce nombre sans dimension compare les effets inertiels aux effets visqueux. Il aide à caractériser un écoulement, mais la valeur de transition dépend de la géométrie et des conditions.', parameters: 'Re : nombre de Reynolds (sans unité) ; ρ : masse volumique (kg·m⁻³) ; v : vitesse caractéristique (m·s⁻¹) ; L : longueur caractéristique (m) ; μ : viscosité dynamique (Pa·s).', example: 'Pour l’eau, ρ = 1000 kg·m⁻³, v = 0,10 m·s⁻¹, L = 0,010 m et μ = 10⁻³ Pa·s : Re = 1000 × 0,10 × 0,010/10⁻³.', result: 'Re = 1000. Dans un tube circulaire lisse, c’est généralement un régime laminaire, mais les seuils sont indicatifs et propres à la configuration.' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 1 — Viscosity and Turbulence', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-7-viscosity-and-turbulence' }]
  }
};

for (const [chapterId, details] of Object.entries(additionalPhysicsDetails)) {
  const chapter = window.courseCatalog.flatMap((branch) => branch.chapters || []).find((item) => item.id === chapterId);
  chapter.lesson.equationDetails = details.equations;
  chapter.lesson.sources = details.sources;
}

const remainingPhysicsDetails = {
  radioactivite: {
    equations: [
      { title: 'Loi de décroissance radioactive', formula: 'N(t) = N₀ exp(−λt)', explanation: 'Pour un grand ensemble de noyaux identiques, le nombre moyen de noyaux non désintégrés suit une décroissance exponentielle, si la constante de désintégration reste constante.', parameters: 'N(t) : nombre moyen de noyaux non désintégrés à la date t ; N₀ : nombre initial ; λ : constante de désintégration (s⁻¹ ou autre inverse de temps) ; t : durée dans l’unité cohérente avec λ.', example: 'Pour N₀ = 800 et une demi-vie de 5 jours, après 10 jours deux demi-vies se sont écoulées : N = 800 exp(−λt) = 800/4.', result: 'Il reste en moyenne 200 noyaux.' },
      { title: 'Lien entre demi-vie et constante de désintégration', formula: 't₁/₂ = ln(2)/λ', explanation: 'La demi-vie est le temps nécessaire pour que l’effectif moyen ou l’activité d’un échantillon soit divisée par deux.', parameters: 't₁/₂ : demi-vie (s, min, jours, etc.) ; λ : constante de désintégration dans l’unité réciproque ; ln(2) ≈ 0,693.', example: 'Si λ = 0,20 jour⁻¹ : t₁/₂ = 0,693/0,20.', result: 't₁/₂ ≈ 3,47 jours.' },
      { title: 'Activité radioactive', formula: 'A = λN', explanation: 'L’activité est le nombre moyen de désintégrations par unité de temps. Elle est positive ; la variation de population est dN/dt = −λN.', parameters: 'A : activité (becquerels, Bq = s⁻¹) ; λ : constante (s⁻¹) ; N : nombre moyen de noyaux radioactifs présents.', example: 'Pour λ = 1,0 × 10⁻⁶ s⁻¹ et N = 1,0 × 10⁹ noyaux : A = λN.', result: 'A = 1,0 × 10³ Bq, soit 1000 désintégrations par seconde en moyenne.' }
    ],
    sources: [
      { title: 'OpenStax Chemistry 2e — Radioactive Decay', url: 'https://openstax.org/books/chemistry-2e/pages/21-3-radioactive-decay' },
      { title: 'OpenStax Chemistry 2e — Nuclear Structure and Stability', url: 'https://openstax.org/books/chemistry-2e/pages/21-1-nuclear-structure-and-stability' }
    ]
  },
  'energie-nucleaire': {
    equations: [
      { title: 'Équivalence masse-énergie', formula: 'ΔE = Δm c²', explanation: 'Une variation de masse au repos Δm correspond à une variation d’énergie ΔE. Dans une réaction nucléaire, le bilan d’énergie doit inclure les énergies de masse et les énergies cinétiques des produits.', parameters: 'ΔE : énergie (J) ; Δm : variation de masse (kg), avec le signe défini par le bilan ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide. Une masse perdue par les produits correspond à une énergie libérée.', example: 'Un défaut de masse de 1,0 × 10⁻²⁹ kg correspond à E = Δm c² = 1,0 × 10⁻²⁹ × (2,998 × 10⁸)².', result: 'L’énergie correspondante vaut environ 8,99 × 10⁻¹³ J.' },
      { title: 'Énergie de liaison d’un noyau', formula: 'B = [Zmₚ + (A − Z)mₙ − m_noyau]c²', explanation: 'L’énergie de liaison est l’énergie minimale à fournir pour séparer un noyau en nucléons libres ; elle est égale à l’énergie libérée lors de leur assemblage. La masse des constituants doit être comparée à celle du noyau avec une convention cohérente.', parameters: 'B : énergie de liaison (J ou eV) ; Z : nombre de protons ; A : nombre total de nucléons ; A − Z : nombre de neutrons ; mₚ, mₙ et m_noyau : masses des protons, neutrons et du noyau ; c : vitesse de la lumière.', example: 'Pour l’hélium ⁴He, la différence entre la masse de deux protons et deux neutrons libres et celle du noyau correspond à un défaut de masse d’environ 0,0305 u ; la conversion par c² donne l’énergie de liaison.', result: 'L’énergie de liaison de ⁴He est environ 28,4 MeV, soit 7,10 MeV par nucléon.' }
    ],
    sources: [
      { title: 'OpenStax Chemistry 2e — Nuclear Structure and Stability', url: 'https://openstax.org/books/chemistry-2e/pages/21-1-nuclear-structure-and-stability' },
      { title: 'OpenStax Chemistry 2e — Transmutation and Nuclear Energy', url: 'https://openstax.org/books/chemistry-2e/pages/21-4-transmutation-and-nuclear-energy' },
      { title: 'OpenStax University Physics, vol. 3 — Relativistic Energy', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-9-relativistic-energy' }
    ]
  },
  'relativite-restreinte': {
    equations: [
      { title: 'Facteur de Lorentz', formula: 'γ = 1/√(1 − v²/c²)', explanation: 'Ce facteur relie certaines mesures faites dans deux référentiels inertiels en mouvement relatif. Il est défini pour une vitesse relative v inférieure à c.', parameters: 'γ : facteur sans unité ; v : vitesse relative des référentiels (m·s⁻¹) ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide.', example: 'Pour v = 0,60c : γ = 1/√(1 − 0,60²) = 1/0,80.', result: 'γ = 1,25.' },
      { title: 'Dilatation du temps', formula: 'Δt = γΔτ', explanation: 'Δτ est le temps propre mesuré dans le référentiel où les deux événements ont lieu au même endroit ; Δt est le temps mesuré dans un référentiel où ce dispositif est en mouvement uniforme.', parameters: 'Δt, Δτ : intervalles de temps (s) ; γ : facteur de Lorentz ; v : vitesse relative ; la formule s’applique à des référentiels inertiels en mouvement relatif.', example: 'Si une horloge en mouvement mesure Δτ = 2,0 s à v = 0,60c, alors Δt = 1,25 × 2,0.', result: 'L’intervalle mesuré dans l’autre référentiel vaut 2,5 s.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 3 — Time Dilation', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation' },
      { title: 'OpenStax University Physics, vol. 3 — Length Contraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-4-length-contraction' }
    ]
  },
  'espace-temps': {
    equations: [
      { title: 'Intervalle d’espace-temps', formula: 's² = c²Δt² − Δx² − Δy² − Δz²', explanation: 'Avec la convention de signe +--- utilisée ici, l’intervalle est invariant par transformation de Lorentz. Il permet de classer la séparation de deux événements : s² > 0 de type temps, s² = 0 de type lumière, s² < 0 de type espace. Certains ouvrages utilisent la convention de signe opposée.', parameters: 's² : intervalle au carré (m²) ; Δt : différence de temps coordonnée (s) ; Δx, Δy, Δz : différences de coordonnées spatiales (m) ; c : vitesse de la lumière (m·s⁻¹).', example: 'Pour Δt = 2,0 μs, Δx = 300 m et Δy = Δz = 0 : cΔt ≈ 600 m, donc s² = 600² − 300².', result: 's² = 270 000 m² > 0 : la séparation est de type temps avec cette convention.' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 3 — The Lorentz Transformation and Spacetime', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-5-the-lorentz-transformation' }]
  },
  'relativite-generale': {
    equations: [
      { title: 'Champ gravitationnel newtonien, limite faible', formula: 'g = GM/r²', explanation: 'Cette relation est la norme de l’accélération gravitationnelle newtonienne créée par une masse sphérique, à l’extérieur de celle-ci. Elle sert ici de limite d’approximation faible de la relativité générale ; ce n’est pas l’équation complète d’Einstein.', parameters: 'g : accélération gravitationnelle (m·s⁻²) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² ; M : masse de l’astre (kg) ; r : distance au centre (m).', example: 'À la surface terrestre, avec M ≈ 5,97 × 10²⁴ kg et r ≈ 6,37 × 10⁶ m : g = GM/r².', result: 'g ≈ 9,82 m·s⁻².' }
    ],
    sources: [
      { title: 'Einstein Online, Max Planck Institute — Einstein’s geometric gravity', url: 'https://www.einstein-online.info/en/GeomGravity/' },
      { title: 'Einstein Online, Max Planck Institute — The equivalence principle', url: 'https://www.einstein-online.info/en/spotlight/equivalence_principle/' },
      { title: 'OpenStax University Physics, vol. 1 — Newton’s Law of Universal Gravitation', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-introduction' }
    ]
  },
  'structures-cristallines': {
    equations: [
      { title: 'Loi de Bragg', formula: 'mλ = 2d sin θ', explanation: 'Cette condition donne les maxima d’interférence des rayons X réfléchis par des familles de plans cristallins parallèles. L’angle θ est mesuré entre le rayon et le plan cristallin, comme dans la convention de Bragg.', parameters: 'm : ordre entier positif ; λ : longueur d’onde des rayons X (m) ; d : distance entre plans cristallins (m) ; θ : angle de Bragg.', example: 'Pour m = 1, d = 0,252 nm et θ = 18,1° : λ = 2d sin θ.', result: 'λ ≈ 0,157 nm.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 3 — X-Ray Diffraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/4-6-x-ray-diffraction' },
      { title: 'OpenStax University Physics, vol. 3 — Bonding in Crystalline Solids', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-3-bonding-in-crystalline-solids' }
    ]
  },
  'bandes-energie': {
    equations: [
      { title: 'Énergie du photon et seuil de bande interdite', formula: 'Eγ = hf ; Eγ ≥ E_g', explanation: 'Un photon a l’énergie hf. Dans le modèle simplifié, cette énergie doit atteindre au moins la largeur Eg de la bande interdite pour qu’une excitation de valence vers conduction soit énergétiquement possible. Cette condition d’énergie seule ne garantit pas une transition : dans un semi-conducteur à gap indirect, la conservation de quantité de mouvement peut aussi faire intervenir un phonon.', parameters: 'Eγ : énergie du photon (J ou eV) ; h : constante de Planck ; f : fréquence (Hz) ; Eg : largeur de la bande interdite (J ou eV). Comparer des énergies exprimées dans la même unité.', example: 'Pour Eg = 1,1 eV et Eγ = 2,0 eV, on a Eγ > Eg.', result: 'L’énergie suffit au franchissement du gap dans le modèle direct simplifié ; la probabilité réelle dépend aussi de la structure des bandes et des règles de transition.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 3 — Band Theory of Solids', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-5-band-theory-of-solids' },
      { title: 'OpenStax University Physics, vol. 3 — Semiconductors and Doping', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping' }
    ]
  },
  supraconductivite: {
    equations: [
      { title: 'Résistivité sous la température critique', formula: 'T < T꜀ ⇒ ρ = 0 (état supraconducteur idéal)', explanation: 'Sous sa température critique, un matériau peut entrer dans l’état supraconducteur. La condition ne suffit pas à elle seule : le champ magnétique et le courant doivent aussi rester dans les limites critiques du matériau.', parameters: 'T : température du matériau (K) ; Tc : température critique propre au matériau (K) ; ρ : résistivité (Ω·m). Pour un échantillon homogène, ρ = 0 implique une résistance R nulle dans le modèle idéal.', example: 'Un matériau de Tc = 9,2 K est refroidi à T = 4,2 K et soumis à un champ inférieur à son champ critique : T < Tc.', result: 'Il peut être supraconducteur ; si ses limites critiques ne sont pas dépassées, sa résistivité est nulle dans le modèle.' },
      { title: 'Puissance Joule', formula: 'P = RI²', explanation: 'Dans un dipôle résistif, la puissance dissipée par effet Joule est le produit de sa résistance par le carré du courant.', parameters: 'P : puissance dissipée (W) ; R : résistance (Ω) ; I : courant efficace en régime continu ou résistance instantanée et courant instantané selon l’usage. En régime alternatif, la puissance moyenne nécessite généralement les valeurs efficaces et le facteur de puissance.', example: 'Dans le modèle idéal, si R = 0 Ω et I = 10 A, alors P = 0 × 10².', result: 'La dissipation Joule est nulle dans l’idéal. Les conducteurs réels et leurs connexions peuvent toutefois avoir des pertes.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 3 — Superconductivity', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-8-superconductivity' },
      { title: 'OpenStax University Physics, vol. 2 — Superconductors', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-6-superconductors' }
    ]
  },
  'gravitation-orbites': {
    equations: [
      { title: 'Loi de gravitation universelle', formula: 'F = GMm/r²', explanation: 'Deux masses ponctuelles s’attirent avec une force dirigée selon la droite qui les relie. Pour une distribution sphérique, la formule s’applique à l’extérieur en remplaçant la distribution par sa masse totale au centre.', parameters: 'F : norme de la force (N) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² ; M, m : masses (kg) ; r : distance entre leurs centres (m).', example: 'À la surface terrestre, une masse m = 1,0 kg subit F ≈ GMₑm/Rₑ² avec Mₑ = 5,97 × 10²⁴ kg et Rₑ = 6,37 × 10⁶ m.', result: 'F ≈ 9,82 N.' },
      { title: 'Troisième loi de Kepler', formula: 'T²/a³ = constante', explanation: 'Pour des corps orbitant autour du même astre central dominant, le carré de la période est proportionnel au cube du demi-grand axe. Pour une masse centrale M et des masses orbitales négligeables devant M, la constante vaut 4π²/(GM).', parameters: 'T : période orbitale (s) ; a : demi-grand axe (m) ; la constante dépend de la masse centrale M et vaut 4π²/(GM) dans l’approximation képlérienne.', example: 'Autour du Soleil, si a passe de 1 UA à 2 UA, T₂ = T₁ × (2)³⁄². En prenant T₁ = 1 an, T₂ ≈ 2,83 ans.', result: 'La période orbitale est environ 2,83 ans.' },
      { title: 'Vitesse sur une orbite circulaire', formula: 'v = √(GM/r)', explanation: 'Cette vitesse s’obtient en égalant l’accélération centripète à l’accélération gravitationnelle. Elle vaut pour une orbite circulaire autour d’une masse centrale M, en négligeant les autres corps.', parameters: 'v : vitesse orbitale (m·s⁻¹) ; G : constante gravitationnelle ; M : masse centrale (kg) ; r : rayon orbital depuis le centre (m).', example: 'Si r est multiplié par 4 à M constant, v₂/v₁ = √(r₁/(4r₁)).', result: 'La vitesse circulaire est divisée par 2.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Newton’s Law of Universal Gravitation', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation' },
      { title: 'OpenStax University Physics, vol. 1 — Kepler’s Laws of Planetary Motion', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-5-keplers-laws-of-planetary-motion' }
    ]
  },
  cosmologie: {
    equations: [
      { title: 'Loi de Hubble-Lemaître à faible distance cosmologique', formula: 'v ≈ H₀d', explanation: 'Pour des galaxies suffisamment proches, leur vitesse de récession moyenne est approximativement proportionnelle à leur distance. La relation est une approximation locale ; à grand décalage vers le rouge, il faut utiliser un modèle d’expansion cosmologique, et les vitesses particulières des galaxies ajoutent des écarts.', parameters: 'v : vitesse de récession estimée (km·s⁻¹) ; H₀ : constante de Hubble actuelle (km·s⁻¹·Mpc⁻¹) ; d : distance (Mpc). La valeur de H₀ dépend des méthodes et données utilisées.', example: 'Avec la valeur pédagogique H₀ = 70 km·s⁻¹·Mpc⁻¹ et d = 10 Mpc : v ≈ 70 × 10.', result: 'v ≈ 700 km·s⁻¹ dans cette approximation locale.' }
    ],
    sources: [
      { title: 'NASA — The Universe Is Expanding Faster These Days', url: 'https://science.nasa.gov/universe/the-universe-is-expanding-faster-these-days-and-dark-energy-is-responsible-so-what-is-dark-energy/' },
      { title: 'NASA — Galaxy Basics', url: 'https://science.nasa.gov/universe/galaxies/' }
    ]
  },
  'unites-dimensions': {
    equations: [
      { title: 'Dimension d’une vitesse', formula: '[v] = L·T⁻¹', explanation: 'La dimension indique la nature physique d’une grandeur indépendamment des unités choisies. Une vitesse est une longueur parcourue par unité de temps.', parameters: '[v] : dimension de la vitesse ; L : dimension longueur ; T : dimension temps.', example: 'Pour v = d/t, on a [v] = L/T.', result: '[v] = L·T⁻¹, cohérent avec une vitesse.' },
      { title: 'Dimension d’une accélération', formula: '[a] = L·T⁻²', explanation: 'L’accélération est la variation de vitesse par unité de temps.', parameters: '[a] : dimension de l’accélération ; L : longueur ; T : temps.', example: 'Pour a = Δv/Δt, [a] = (L·T⁻¹)/T.', result: '[a] = L·T⁻².' },
      { title: 'Dimension d’une force', formula: '[F] = M·L·T⁻²', explanation: 'Par la deuxième loi de Newton, une force a la dimension d’une masse multipliée par une accélération.', parameters: '[F] : dimension de la force ; M : masse ; L : longueur ; T : temps.', example: 'Avec F = ma : [F] = M × (L·T⁻²).', result: '[F] = M·L·T⁻² ; l’unité SI équivalente est le newton, kg·m·s⁻².' }
    ],
    sources: [{ title: 'OpenStax University Physics, vol. 1 — Dimensional Analysis', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis' }]
  },
  incertitudes: {
    equations: [
      { title: 'Incertitude relative', formula: 'uᵣ(x) = u(x)/|x|', explanation: 'L’incertitude relative compare l’incertitude absolue à la valeur mesurée. Elle est sans dimension et s’exprime souvent en pourcentage.', parameters: 'uᵣ(x) : incertitude relative (sans unité) ; u(x) : incertitude absolue ou incertitude-type, dans la même unité que x ; x : valeur mesurée, non nulle.', example: 'Une longueur vaut x = 20,0 cm avec u(x) = 0,2 cm : uᵣ = 0,2/20,0.', result: 'uᵣ = 0,010 = 1,0 %.' },
      { title: 'Écriture d’une mesure avec incertitude', formula: 'x = x_mesurée ± u(x)', explanation: 'Cette notation communique une valeur mesurée et une incertitude associée ; son interprétation dépend de la méthode et du niveau de couverture utilisés pour déterminer u.', parameters: 'x_mesurée : estimation de la grandeur ; u(x) : incertitude avec la même unité que x. Les chiffres conservés doivent être cohérents avec la précision annoncée.', example: 'Pour une longueur mesurée x = 20,0 cm avec u(x) = 0,2 cm, on écrit x = (20,0 ± 0,2) cm.', result: 'L’incertitude relative correspondante est 1,0 %.' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Units and Standards', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-2-units-and-standards' },
      { title: 'OpenStax University Physics, vol. 1 — Significant Figures', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures' }
    ]
  },
  'experimentation-modelisation': {
    equations: [
      { title: 'Résidu d’un modèle', formula: 'r = valeur mesurée − valeur prédite', explanation: 'Le résidu est l’écart signé entre une observation et la prédiction du modèle pour les mêmes conditions. Son analyse aide à repérer biais, dispersion et inadéquation du modèle ; elle ne suffit pas seule à établir une causalité.', parameters: 'r : résidu, dans l’unité de la grandeur ; valeur mesurée : résultat expérimental ; valeur prédite : résultat du modèle pour les mêmes paramètres et unités.', example: 'Le modèle prédit 9,8 m·s⁻² et la mesure donne 9,7 m·s⁻² : r = 9,7 − 9,8.', result: 'r = −0,1 m·s⁻².' }
    ],
    sources: [
      { title: 'OpenStax University Physics, vol. 1 — Solving Problems in Physics', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-7-solving-problems-in-physics' },
      { title: 'NIST — Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results', url: 'https://www.nist.gov/pml/nist-technical-note-1297' }
    ]
  }
};

for (const [chapterId, details] of Object.entries(remainingPhysicsDetails)) {
  const chapter = window.courseCatalog.flatMap((branch) => branch.chapters || []).find((item) => item.id === chapterId);
  chapter.lesson.equationDetails = details.equations;
  chapter.lesson.sources = details.sources;
}

const unicodeFormulaChapters = Object.fromEntries(
  window.courseCatalog.flatMap((branch) => branch.chapters || []).map((chapter) => [chapter.id, chapter])
);

unicodeFormulaChapters['lois-newton'].lesson.formula.text = 'Σ F⃗ₑₓₜ = m a⃗';
unicodeFormulaChapters['lois-newton'].lesson.formula.mathML = 'newton-second-law';
unicodeFormulaChapters['lois-newton'].lesson.equationDetails[0].formula = 'Σ F⃗ₑₓₜ = m a⃗';
unicodeFormulaChapters['lois-newton'].lesson.equationDetails[0].mathML = 'newton-second-law';
unicodeFormulaChapters.radioactivite.lesson.formula.mathML = 'radioactive-decay-summary';
unicodeFormulaChapters.radioactivite.lesson.equationDetails.find((equation) => equation.title === 'Loi de décroissance radioactive').mathML = 'radioactive-decay-law';
unicodeFormulaChapters.radioactivite.lesson.equationDetails.find((equation) => equation.title === 'Lien entre demi-vie et constante de désintégration').mathML = 'radioactive-half-life';

const energyLesson = unicodeFormulaChapters['energie-mecanique'].lesson;
energyLesson.formula.text = 'E꜀ = ½mv²  |  ΔE꜀ = ΣW(F)  |  Eₘ = E꜀ + Eₚ';
for (const key of ['sections', 'example', 'exercise']) {
  const value = energyLesson[key];
  if (Array.isArray(value)) {
    energyLesson[key] = value.map((text) => text.replaceAll('ΔEc', 'ΔE꜀').replaceAll('Ec', 'E꜀').replaceAll('Em', 'Eₘ').replaceAll('Ep', 'Eₚ'));
  } else {
    for (const field of Object.keys(value)) {
      value[field] = value[field].replaceAll('ΔEc', 'ΔE꜀').replaceAll('Ec', 'E꜀').replaceAll('Em', 'Eₘ').replaceAll('Ep', 'Eₚ');
    }
  }
}

unicodeFormulaChapters.hydrostatique.lesson.formula.text = 'p = p₀ + ρgh  |  Fₐ = ρ (fluide) g V (déplacé)';
unicodeFormulaChapters.hydrostatique.lesson.equationDetails.find((equation) => equation.title === 'Poussée d’Archimède').formula = 'Fₐ = ρ (fluide) g V (déplacé)';
unicodeFormulaChapters.hydrostatique.lesson.example.calculation = 'V = 0,002 m³ ; Fₐ = 1000 × 9,81 × 0,002.';
unicodeFormulaChapters.radioactivite.lesson.formula.text = 'N(t) = N₀ exp(−λt)  |  t₁/₂ = ln(2)/λ';

const hydrogenLesson = unicodeFormulaChapters['atomes-niveaux'].lesson;
hydrogenLesson.sections = hydrogenLesson.sections.map((paragraph) => paragraph.replaceAll('nᵢ', 'n₁').replaceAll('n_f', 'n₂'));
const rydbergEquation = hydrogenLesson.equationDetails.find((equation) => equation.title === 'Raies de l’hydrogène (formule de Rydberg)');
rydbergEquation.formula = '1/λ = Rₕ(1/n₂² − 1/n₁²), n₁ > n₂';
for (const field of ['explanation', 'parameters', 'example', 'result']) {
  rydbergEquation[field] = rydbergEquation[field].replaceAll('R_H', 'Rₕ').replaceAll('nᵢ', 'n₁').replaceAll('n_f', 'n₂').replaceAll('nᵢ', 'n₁');
}

const photonLesson = unicodeFormulaChapters.photons.lesson;
photonLesson.exercise.answer = photonLesson.exercise.answer.replaceAll('Kmax', 'Kₘₐₓ');
for (const equation of photonLesson.equationDetails) {
  for (const field of ['formula', 'explanation', 'parameters', 'example', 'result']) {
    equation[field] = equation[field].replaceAll('Kmax', 'Kₘₐₓ');
  }
}

const nuclearBindingEquation = unicodeFormulaChapters['energie-nucleaire'].lesson.equationDetails.find((equation) => equation.title === 'Énergie de liaison d’un noyau');
nuclearBindingEquation.formula = 'B = [Zmₚ + (A − Z)mₙ − m(noyau)]c²';
const bandGapEquation = unicodeFormulaChapters['bandes-energie'].lesson.equationDetails[0];
bandGapEquation.formula = 'Eγ = hf ; Eγ ≥ E(gap)';
unicodeFormulaChapters['bandes-energie'].lesson.formula.text = 'E = hf ; absorption possible si E ≥ E(gap)';
unicodeFormulaChapters.supraconductivite.lesson.formula.text = 'T < T꜀  ⇒  R = 0 (dans le modèle idéal)';
unicodeFormulaChapters.incertitudes.lesson.equationDetails.find((equation) => equation.title === 'Écriture d’une mesure avec incertitude').formula = 'x = xₘ ± u(x)';

const buoyancyEquation = unicodeFormulaChapters.hydrostatique.lesson.equationDetails.find((equation) => equation.title === 'Poussée d’Archimède');
buoyancyEquation.parameters = buoyancyEquation.parameters.replaceAll('ρfluide', 'ρ (fluide)').replaceAll('Vdéplacé', 'V (déplacé)');
unicodeFormulaChapters.hydrostatique.lesson.equationDetails[1].example = 'Un corps déplace 2,0 L d’eau, soit 0,0020 m³ : Fₐ = 1000 × 9,81 × 0,0020.';

const nuclearBinding = unicodeFormulaChapters['energie-nucleaire'].lesson.equationDetails.find((equation) => equation.title === 'Énergie de liaison d’un noyau');
nuclearBinding.parameters = nuclearBinding.parameters.replace('m_noyau', 'm(noyau)');

for (const equation of unicodeFormulaChapters.supraconductivite.lesson.equationDetails) {
  for (const field of ['formula', 'explanation', 'parameters', 'example', 'result']) {
    equation[field] = equation[field].replaceAll('Tc', 'T꜀');
  }
}

const measurementEquation = unicodeFormulaChapters.incertitudes.lesson.equationDetails.find((equation) => equation.title === 'Écriture d’une mesure avec incertitude');
measurementEquation.parameters = measurementEquation.parameters.replace('x_mesurée', 'xₘ');

const generalRelativityLesson = unicodeFormulaChapters['relativite-generale'].lesson;
unicodeFormulaChapters['relativite-generale'].summary = 'Géométrie dynamique de l’espace-temps, principe d’équivalence et équation d’Einstein reliant courbure et énergie-impulsion.';
generalRelativityLesson.sections = [
  'En relativité générale, la gravitation n’est pas décrite comme une force newtonienne fondamentale : matière et énergie sont liées à la géométrie de l’espace-temps, et les corps en chute libre suivent ses géodésiques. L’analogie du « drap creusé » peut aider à visualiser une courbure spatiale, mais ne représente pas littéralement la géométrie quadridimensionnelle.',
  'Le principe d’équivalence affirme localement qu’un laboratoire en chute libre reproduit les lois de la relativité restreinte, tant que les effets de marée dus à la variation du champ sur sa taille et sa durée d’observation sont négligeables. Les effets de marée sont précisément une manifestation de la courbure qu’on ne peut pas éliminer dans une région étendue.',
  'L’équation d’Einstein des champs relie, à chaque événement, le tenseur de courbure G₍μν₎ et la constante cosmologique Λ au tenseur énergie-impulsion T₍μν₎. C’est une équation tensorielle : μ et ν parcourent les quatre coordonnées de l’espace-temps. En quatre dimensions, la symétrie laisse dix composantes indépendantes, couplées et non linéaires. G₍μν₎ est construit à partir du tenseur de Ricci R₍μν₎, de son scalaire R et du tenseur métrique g₍μν₎.',
  'Le membre droit décrit la densité et les flux d’énergie et de quantité de mouvement, ainsi que les contraintes et pressions. Il ne s’agit donc pas seulement de la masse au repos : pression et flux d’énergie contribuent aussi à la gravitation. La constante Λ représente un terme géométrique uniforme ; dans les applications locales du Système solaire, on la néglige habituellement.',
  'La relativité générale ne remplace pas systématiquement la mécanique de Newton : lorsque le champ est faible, les vitesses sont petites devant c et les mesures sont faites loin d’un horizon, elle retrouve l’approximation newtonienne avec une grande précision. L’exemple de la pesanteur terrestre ci-dessous utilise cette limite, et non une résolution directe de l’équation tensorielle.'
];
generalRelativityLesson.formula = {
  label: 'ÉQUATION D’EINSTEIN DES CHAMPS',
  text: 'G₍μν₎ + Λg₍μν₎ = (8πG/c⁴)T₍μν₎',
  mathML: 'einstein-field-equation'
};
generalRelativityLesson.equationDetails = [
  {
    title: 'Équation d’Einstein des champs',
    formula: 'G₍μν₎ + Λg₍μν₎ = (8πG/c⁴)T₍μν₎',
    mathML: 'einstein-field-equation',
    explanation: 'Cette équation locale décrit comment la géométrie de l’espace-temps est liée à son contenu matériel et énergétique. Le coefficient 8πG/c⁴ fixe le couplage gravitationnel. Certains textes emploient une convention différente pour le signe de la courbure ; l’équation affichée correspond à une convention standard, cohérente avec la limite newtonienne indiquée plus bas.',
    parameters: 'G₍μν₎ : tenseur d’Einstein, grandeur géométrique construite à partir de la courbure ; Λ : constante cosmologique (m⁻²) ; g₍μν₎ : tenseur métrique, qui définit les intervalles d’espace-temps ; G : constante gravitationnelle de Newton, ici à ne pas confondre avec G₍μν₎ ; c : vitesse de la lumière dans le vide ; T₍μν₎ : tenseur énergie-impulsion (densité et flux d’énergie, densité de quantité de mouvement et contraintes). μ, ν = 0, 1, 2, 3 repèrent les coordonnées temporelle et spatiales.',
    example: 'Dans le vide à l’extérieur d’un corps, on peut poser T₍μν₎ = 0. À l’échelle locale, si l’on néglige Λ, l’équation impose G₍μν₎ = 0.',
    result: 'Cela ne signifie pas que l’espace-temps y est plat : à l’extérieur d’une masse sphérique, le tenseur de Ricci peut être nul alors que la courbure de marée (tenseur de Riemann) reste non nulle.'
  },
  {
    title: 'Définition du tenseur d’Einstein',
    formula: 'G₍μν₎ = R₍μν₎ − ½Rg₍μν₎',
    mathML: 'einstein-tensor-definition',
    explanation: 'Le tenseur d’Einstein rassemble le tenseur de Ricci et sa trace de façon à satisfaire une loi locale de conservation. Il constitue la partie géométrique standard de l’équation de champ avec constante cosmologique.',
    parameters: 'R₍μν₎ : tenseur de Ricci, contraction du tenseur de courbure de Riemann (m⁻²) ; R = gᵐⁿR₍μν₎ : scalaire de Ricci, trace de R₍μν₎ (m⁻²) ; g₍μν₎ : métrique ; ½ : facteur numérique. Les indices répétés sont contractés selon la convention d’Einstein.',
    example: 'Pour l’extérieur vide de Schwarzschild, R₍μν₎ = 0, donc R = 0 et la définition donne G₍μν₎ = 0.',
    result: 'Le tenseur d’Einstein s’annule dans cette région, bien que le champ gravitationnel et les effets de marée ne soient pas nuls.'
  },
  {
    title: 'Limite newtonienne : champ d’une masse sphérique',
    formula: 'g ≈ GₙM/r²',
    explanation: 'Dans un champ faible, pour des vitesses lentes et à l’extérieur d’une masse sphérique, la relativité générale redonne la valeur de l’accélération gravitationnelle de Newton. Cette formule est une approximation de la relativité générale, pas son équation fondamentale.',
    parameters: 'g : norme de l’accélération gravitationnelle (m·s⁻²) ; Gₙ = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² : constante de Newton ; M : masse centrale (kg) ; r : distance au centre (m).',
    example: 'À la surface terrestre, prenons M = 5,972 × 10²⁴ kg et r = 6,371 × 10⁶ m : g ≈ GₙM/r².',
    result: 'g ≈ 9,82 m·s⁻², proche de la valeur usuelle 9,81 m·s⁻² ; la valeur locale varie avec l’altitude et la latitude.'
  }
];
generalRelativityLesson.example = {
  statement: 'Estimer l’accélération gravitationnelle à la surface de la Terre à l’aide de la limite newtonienne.',
  calculation: 'g ≈ (6,67430 × 10⁻¹¹ × 5,972 × 10²⁴)/(6,371 × 10⁶)² m·s⁻².',
  answer: 'g ≈ 9,82 m·s⁻². Ce calcul illustre la limite de champ faible ; il ne résout pas directement l’équation tensorielle d’Einstein.'
};
generalRelativityLesson.exercise = {
  question: 'Dans l’approximation newtonienne, comment varie g si l’on double la distance r au centre de la Terre ?',
  answer: 'Comme g ∝ 1/r², doubler r divise g par 2² : g devient environ 9,82/4 ≈ 2,46 m·s⁻².'
};
generalRelativityLesson.sources = [
  { title: 'OpenStax University Physics, vol. 1 — Einstein’s Theory of Gravity', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-7-einsteins-theory-of-gravity' },
  { title: 'Einstein Online, Max Planck Institute — Einstein’s geometric gravity', url: 'https://www.einstein-online.info/en/GeomGravity/' },
  { title: 'Einstein Online, Max Planck Institute — The equivalence principle', url: 'https://www.einstein-online.info/en/spotlight/equivalence_principle/' }
];

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

