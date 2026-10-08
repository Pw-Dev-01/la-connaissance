window.paleontologyCatalog = [
  {
    id: 'discipline', branch: 'archives', number: '01', title: 'La discipline et ses archives', field: 'Introduction',
    summary: 'Définir la paléontologie et comprendre ce que le registre fossile peut documenter.',
    lesson: {
      heading: 'Étudier les organismes du passé',
      content: `<p>La <strong>paléontologie</strong> étudie la vie passée grâce aux restes et aux traces conservés dans les archives géologiques. Un fossile est un vestige physique d’un organisme ancien ou une trace de son activité. L’objet isolé n’est qu’une partie de l’observation : son âge relatif, la couche qui le contient, la roche et les autres fossiles associés apportent des informations indispensables à son interprétation.</p><p>Le <strong>registre fossile</strong> désigne l’ensemble des fossiles connus dans les roches étudiées. Il permet de documenter quels organismes sont observés dans différentes périodes, et de comparer leurs formes à travers le temps. Il ne constitue pas un inventaire exhaustif de toute la vie qui a existé : la fossilisation est rare et les roches comme les fossiles peuvent être détruits ou rester enfouis.</p><p>Les questions paléontologiques varient selon les données disponibles : identifier un organisme, décrire sa morphologie, établir des ressemblances, dater relativement une couche ou étudier un milieu ancien. Une conclusion robuste distingue l’observation de son interprétation, puis précise les éléments qui soutiennent cette interprétation.</p>`,
      example: { statement: 'Un fossile est trouvé isolé, sans indication de la couche où il a été découvert. Quelle information importante manque pour l’interpréter ?', calculation: 'Sans contexte stratigraphique et géologique documenté, il est difficile d’établir sa position dans une succession de couches ou de le comparer à d’autres observations locales.', answer: 'La provenance et la position géologique du spécimen doivent être documentées.' },
      exercises: [{ question: 'Pourquoi un fossile doit-il être étudié avec la roche et la couche qui l’entourent ?', answer: 'Le contexte géologique aide à établir son âge relatif, les conditions de dépôt et les liens avec d’autres fossiles. Un spécimen isolé ne fournit pas à lui seul ces informations.' }],
      sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }, { title: 'OpenStax Biology 2e — 18.1 Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }]
    }
  },
  {
    id: 'types', branch: 'archives', number: '02', title: 'Les catégories de fossiles', field: 'Fossiles corporels et traces',
    summary: 'Distinguer les restes corporels, les traces fossiles, les microfossiles et les moulages.',
    lesson: {
      heading: 'Restes, traces et microfossiles',
      content: `<p>Les <strong>fossiles corporels</strong> sont des parties du corps conservées : os, dents, coquilles, feuilles ou bois. Ils peuvent préserver tout ou partie d’une structure anatomique. Une coquille fossile renseigne sur sa forme et sa taille, mais pas nécessairement sur les tissus mous qui l’entouraient.</p><p>Les <strong>traces fossiles</strong> (ou ichnofossiles) enregistrent une activité plutôt qu’une partie du corps. Les empreintes, pistes, terriers, traces de perforation et coprolithes en sont des exemples. Elles renseignent sur une interaction ou un comportement à un moment donné, mais leur producteur peut rester incertain en l’absence de restes corporels associés.</p><p>Le terme <strong>microfossile</strong> désigne les fossiles de très petite taille, qui nécessitent souvent une observation instrumentale. Ils peuvent correspondre à des organismes entiers ou à des fragments. Certains contribuent à comparer les couches et à étudier les environnements passés.</p><p>Si une coquille se dissout après son enfouissement, elle peut laisser une cavité qui reproduit sa forme : le moule. Si cette cavité est ensuite remplie par des minéraux ou des sédiments, le remplissage forme un moulage. L’objet obtenu reproduit une géométrie, sans être nécessairement constitué de la matière d’origine.</p>`,
      example: { statement: 'Une dalle conserve une piste d’empreintes, mais aucun os. Quelle catégorie de fossile observe-t-on ?', calculation: 'La piste enregistre une activité de l’organisme sur un substrat, et non une partie de son corps.', answer: 'Il s’agit d’une trace fossile.' },
      exercises: [{ question: 'Un coprolithe est-il un fossile corporel ou une trace fossile ?', answer: 'C’est une trace fossile : il témoigne d’une activité biologique plutôt que de conserver une partie du corps.' }],
      sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }, { title: 'Natural History Museum — How are dinosaur fossils formed?', url: 'https://www.nhm.ac.uk/discover/how-are-fossils-formed.html' }]
    }
  },
  {
    id: 'fossilisation', branch: 'archives', number: '03', title: 'La fossilisation et ses biais', field: 'Conservation',
    summary: 'Comprendre les conditions de conservation et les biais du registre fossile.',
    lesson: {
      heading: 'Une conservation exceptionnelle',
      content: `<p>La fossilisation n’est pas l’issue habituelle après la mort. Décomposition, consommation par des charognards, érosion et transformations géologiques peuvent faire disparaître les restes. Un enfouissement assez rapide peut limiter certaines destructions et donner aux restes une chance d’être préservés; le contexte sédimentaire influe donc fortement sur les fossiles que l’on peut découvrir.</p><p>Dans la <strong>perminéralisation</strong>, des eaux qui circulent dans les pores déposent des minéraux dans les espaces d’un os ou d’un bois. Les structures internes peuvent ainsi rester reconnaissables tandis que la composition change. La dissolution d’une coquille ou d’un os peut aussi former un moule, qui sera éventuellement rempli pour produire un moulage.</p><p>La conservation est <strong>sélective</strong>. Les parties dures, comme les coquilles et les os, ont davantage de chances d’être fossilisées que les tissus mous. Le registre fossile est donc un échantillon incomplet et biaisé de la vie passée. L’absence d’un fossile dans une couche ne prouve pas, à elle seule, que l’organisme n’existait pas à cette époque ou dans cette région.</p>`,
      example: { statement: 'Pourquoi les parties dures d’un organisme sont-elles souvent mieux représentées dans le registre fossile ?', calculation: 'Elles résistent généralement mieux à la décomposition et ont davantage de chances d’être préservées que les tissus mous.', answer: 'La conservation différentielle crée un biais en faveur des parties dures.' },
      exercises: [{ question: 'Une espèce n’est pas retrouvée dans une couche. Peut-on conclure qu’elle n’existait pas à cette époque ?', answer: 'Non. La fossilisation est rare et le registre est incomplet; l’absence observée peut résulter d’un défaut de conservation ou d’échantillonnage.' }],
      sources: [{ title: 'Natural History Museum — How are dinosaur fossils formed?', url: 'https://www.nhm.ac.uk/discover/how-are-fossils-formed.html' }, { title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }]
    }
  },
  {
    id: 'terrain', branch: 'terrain-et-temps', number: '04', title: 'Du terrain à la collection', field: 'Méthodes de terrain',
    summary: 'Documenter le lieu, la couche et les conditions de découverte d’un spécimen.',
    lesson: {
      heading: 'Conserver le contexte de découverte',
      content: `<p>Les fossiles se trouvent le plus souvent dans les roches sédimentaires. Les cartes géologiques renseignent sur les roches visibles dans une région; elles aident à orienter la recherche vers des formations d’un âge et d’un type susceptibles de contenir certains fossiles. Cette préparation ne garantit pas une découverte.</p><p>Une observation de terrain gagne à documenter le <strong>contexte stratigraphique</strong> : formation ou couche, position du fossile dans cette couche, association à d’autres fossiles, nature de la roche et relations avec les couches voisines. Des données de localisation et des notes de terrain permettent de relier l’échantillon à son lieu et à sa position d’origine.</p><p>Au laboratoire, la préparation vise à rendre les caractères observables sans confondre dégagement et reconstitution. Les observations peuvent inclure des mesures, des descriptions et des images. La collection conserve ces informations avec le spécimen; sans provenance fiable, une pièce isolée ne peut pas être replacée avec assurance dans une succession de couches ou dans un environnement local.</p>`,
      example: { statement: 'Deux fossiles identiques sont trouvés, mais un seul possède une position stratigraphique documentée. Lequel est le plus utile pour une étude de corrélation ?', calculation: 'La position dans la couche et son contexte géologique permettent de rattacher l’échantillon à une succession et de comparer cette observation à d’autres sites.', answer: 'Le spécimen documenté fournit une donnée stratigraphique interprétable.' },
      exercises: [{ question: 'Quelles informations minimales relier à un fossile collecté sur le terrain ?', answer: 'Sa localisation, la formation ou couche, sa position dans cette couche, la nature de la roche et les associations observées.' }],
      sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }]
    }
  },
  {
    id: 'stratigraphie', branch: 'terrain-et-temps', number: '05', title: 'Stratigraphie et corrélations', field: 'Datation relative',
    summary: 'Ordonner les couches et comparer les successions fossiles entre sites.',
    lesson: {
      heading: 'Ordonner les couches et comparer les sites',
      content: `<p>Dans une succession sédimentaire non renversée, le <strong>principe de superposition</strong> place en général les couches les plus anciennes sous les couches plus récentes. Il fournit un ordre relatif, pas un âge en années. Les plis, les failles, l’érosion et les lacunes de sédimentation peuvent compliquer cet ordre.</p><p>Les paléontologues et les stratigraphes peuvent corréler des couches éloignées en comparant leur contenu fossilifère, leur succession et d’autres caractères géologiques. Un <strong>fossile stratigraphique</strong> est particulièrement utile lorsqu’il est répandu géographiquement, reconnaissable et limité à un intervalle de temps relativement court. Une corrélation biostratigraphique n’est pas nécessairement une équivalence temporelle exacte.</p><p>Un fossile remanié, érodé d’une couche ancienne puis redéposé dans une couche plus récente, peut être plus ancien que la roche qui l’entoure. Les discordances signalent des intervalles manquants dans l’enregistrement local. Ces limites doivent être prises en compte avant d’interpréter une succession comme continue.</p>`,
      example: { statement: 'Dans une succession non renversée, une couche fossilifère se trouve sous une seconde couche. Quelle relation d’âge peut-on proposer ?', calculation: 'Le principe de superposition établit un ordre relatif entre couches superposées, sous réserve que la succession n’ait pas été renversée ou perturbée.', answer: 'La couche inférieure est généralement plus ancienne; ce principe ne donne pas son âge numérique.' },
      exercises: [{ question: 'Deux couches éloignées contiennent un fossile stratigraphique commun. Quelle réserve accompagne leur corrélation ?', answer: 'La corrélation biostratigraphique ne garantit pas à elle seule une équivalence temporelle exacte; il faut considérer les lacunes, les faciès et le remaniement.' }],
      sources: [{ title: 'International Commission on Stratigraphy — International Stratigraphic Guide, chapitre 7', url: 'https://stratigraphy.org/guide/bio' }, { title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }]
    }
  },
  {
    id: 'datation', branch: 'terrain-et-temps', number: '06', title: 'Datations et échelles de temps', field: 'Datation numérique',
    summary: 'Distinguer datation relative et datation radiométrique, et lire une demi-vie.',
    lesson: {
      heading: 'Relier les fossiles au temps géologique',
      content: `<p>La <strong>datation relative</strong> établit qu’une couche est antérieure ou postérieure à une autre. La <strong>datation radiométrique</strong> mesure les proportions d’isotopes radioactifs et de produits de désintégration dans un matériau adéquat. Elle ne date pas directement tous les fossiles : on date souvent des roches ou des minéraux associés, puis on encadre l’âge de la couche fossilifère.</p><p>Pour un isotope radioactif donné, le nombre de noyaux parents restants diminue au cours du temps. La relation de décroissance est :</p><div class="formula-block"><span class="formula-label">DÉCROISSANCE RADIOACTIVE</span><math class="mathml-display" display="block" aria-label="N de t égale N zéro multiplié par exponentielle de moins lambda t"><mrow><mi>N</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><mo>·</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math><span class="math-display">N(t) = N₀ · e<sup>−λt</sup></span></div><p>N(t) est le nombre de noyaux parents restants, N₀ le nombre initial et λ la constante de désintégration. La demi-vie vaut t<sub>1/2</sub> = ln(2)/λ. La datation au carbone 14 s’applique aux matières carbonées récentes à l’échelle géologique; elle n’est pas adaptée aux fossiles très anciens.</p><p>Les limites et les noms des unités géologiques sont définis dans la <strong>Charte chronostratigraphique internationale</strong>. Les âges numériques associés aux limites peuvent être révisés; une valeur doit être rapportée avec la version de la charte utilisée.</p>`,
      example: { statement: 'Après deux demi-vies, quelle fraction des noyaux parents radioactifs reste dans l’échantillon ?', calculation: 'Après une demi-vie, il en reste la moitié; après la deuxième, la moitié de cette moitié.', answer: 'Un quart des noyaux parents reste.' },
      exercises: [{ question: 'Pourquoi la datation d’un minéral voisin ne donne-t-elle pas automatiquement l’âge exact du fossile ?', answer: 'Il faut établir que le matériau est adapté à la méthode et préciser sa relation stratigraphique avec la couche fossilifère.' }],
      sources: [{ title: 'OpenStax Chemistry 2e — 21.3 Radioactive Decay', url: 'https://openstax.org/books/chemistry-2e/pages/21-3-radioactive-decay' }, { title: 'International Commission on Stratigraphy — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' }]
    }
  },
  {
    id: 'evolution', branch: 'histoire-vivant', number: '07', title: 'Fossiles et évolution', field: 'Parentés et caractères',
    summary: 'Comparer les caractères fossiles et comprendre leur rôle dans l’étude de l’évolution.',
    lesson: {
      heading: 'Comparer les formes au cours du temps',
      content: `<p>Les fossiles montrent que les organismes du passé diffèrent de ceux observés aujourd’hui et documentent des changements de formes à travers le temps. Les paléontologues comparent les caractères anatomiques conservés entre fossiles et organismes actuels, tout en considérant leur âge relatif et leur contexte.</p><p>Une ressemblance anatomique ne suffit pas toujours à établir une parenté. Les caractères <strong>homologues</strong> correspondent à des similitudes liées à une histoire évolutive commune; les caractères <strong>analogues</strong> ont une fonction ou une apparence comparable sans être hérités d’une structure commune récente. Les os des ailes des oiseaux et des chauves-souris sont homologues; les ailes d’insectes et celles des vertébrés sont analogues comme organes du vol.</p><p>Les fossiles dits <strong>transitionnels</strong> combinent des caractères observés dans des groupes ancestraux et dans des groupes apparus plus tard. Ils documentent des combinaisons de caractères; ils ne sont pas nécessairement des ancêtres directs des espèces actuelles. Les lacunes du registre fossile et la convergence de caractères peuvent limiter les inférences.</p>`,
      example: { statement: 'Des structures ont une fonction similaire chez deux groupes, mais une anatomie et une origine différentes. Quel terme décrit cette ressemblance ?', calculation: 'Une fonction commune n’établit pas à elle seule une parenté évolutive étroite.', answer: 'Il s’agit d’une analogie, et non d’une homologie.' },
      exercises: [{ question: 'Les ailes d’un insecte et d’un oiseau sont-elles homologues comme organes du vol ?', answer: 'Elles sont analogues pour la fonction de vol, car elles ne partagent pas la même structure anatomique héritée.' }],
      sources: [{ title: 'OpenStax Biology 2e — 18.1 Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }, { title: 'OpenStax Biology 2e — 20.2 Determining Evolutionary Relationships', url: 'https://openstax.org/books/biology-2e/pages/20-2-determining-evolutionary-relationships' }]
    }
  },
  {
    id: 'paleoenvironnements', branch: 'histoire-vivant', number: '08', title: 'Paléoécologie', field: 'Milieux anciens',
    summary: 'Associer fossiles et données géologiques pour étudier les environnements du passé.',
    lesson: {
      heading: 'Reconstituer les milieux anciens',
      content: `<p>La <strong>paléoécologie</strong> étudie les relations entre les organismes fossiles et les environnements anciens. Elle combine des observations sur les fossiles avec celles de la roche qui les contient. Un assemblage de fossiles et son contexte sédimentaire apportent des indices complémentaires; un seul organisme ne suffit pas nécessairement à caractériser tout un milieu.</p><p>Les fossiles corporels renseignent sur les caractères préservés et les traces fossiles peuvent documenter des activités. Des empreintes indiquent qu’un organisme s’est déplacé sur un substrat à un moment donné; un terrier témoigne d’une activité de creusement. Sans restes associés, l’attribution d’une trace à une espèce peut demeurer indéterminée.</p><p>Des microfossiles, notamment certaines coquilles, peuvent aider à étudier les milieux et les climats passés. Ces conclusions nécessitent d’identifier le fossile, d’examiner son contexte géologique et de comparer plusieurs indices. La préservation sélective impose de tenir compte des biais avant de généraliser une observation à un écosystème entier.</p>`,
      example: { statement: 'Une couche marine contient plusieurs fossiles d’organismes marins et des sédiments déposés en milieu marin. Pourquoi ces indices sont-ils plus solides ensemble ?', calculation: 'Les fossiles et les caractéristiques de la roche fournissent des éléments indépendants qui convergent sur le contexte de dépôt.', answer: 'La convergence des indices soutient mieux l’interprétation du milieu ancien.' },
      exercises: [{ question: 'Une empreinte fossile prouve-t-elle à elle seule l’identité de l’espèce qui l’a laissée ?', answer: 'Non. La trace documente une activité, mais son producteur peut rester indéterminé sans caractères diagnostiques ou fossiles corporels associés.' }],
      sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }, { title: 'International Commission on Stratigraphy — International Stratigraphic Guide, chapitre 7', url: 'https://stratigraphy.org/guide/bio' }]
    }
  },
  {
    id: 'biodiversite', branch: 'histoire-vivant', number: '09', title: 'Biodiversité et extinctions', field: 'Registre fossile',
    summary: 'Interpréter les apparitions et disparitions observées dans un registre incomplet.',
    lesson: {
      heading: 'Apparitions, disparitions et registre incomplet',
      content: `<p>À l’échelle des couches et des régions, les fossiles permettent de suivre la présence connue de groupes au cours du temps. Une première ou dernière occurrence dans un affleurement marque une limite d’observation du registre local : elle ne correspond pas automatiquement au moment exact de l’apparition ou de l’extinction biologique. Les lacunes de sédimentation, l’érosion, le faible potentiel de fossilisation et l’inégale exploration des roches peuvent déplacer ces limites apparentes.</p><p>Une <strong>extinction</strong> est la disparition d’un groupe vivant. Pour évaluer si un changement observé reflète une disparition biologique ou un défaut d’enregistrement, les chercheurs comparent des successions de couches, des régions et des groupes différents.</p><p>L’interprétation des grandes transitions de la biodiversité combine le registre fossile, la chronologie stratigraphique et les datations numériques disponibles. La simple succession de deux événements ne démontre pas à elle seule un lien de causalité.</p>`,
      example: { statement: 'Un groupe fossile disparaît d’une succession locale, mais des roches de l’intervalle suivant manquent. Quelle conclusion faut-il éviter ?', calculation: 'L’absence de couches laisse une lacune dans l’enregistrement; la dernière occurrence locale ne fixe pas à elle seule le moment de l’extinction.', answer: 'Il faut éviter de dater l’extinction à partir de cette seule absence.' },
      exercises: [{ question: 'Quelles observations aident à distinguer une extinction d’un défaut local d’enregistrement ?', answer: 'Comparer des successions de couches, plusieurs régions et plusieurs groupes, en tenant compte des lacunes, de l’érosion et des biais de fossilisation.' }],
      sources: [{ title: 'OpenStax Biology 2e — 18.1 Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }, { title: 'International Commission on Stratigraphy — International Stratigraphic Guide, chapitre 7', url: 'https://stratigraphy.org/guide/bio' }]
    }
  },
  {
    id: "cuvier-ossemens-fossiles", branch: 'grands-livres', number: '10', title: "Recherches sur les ossemens fossiles de quadrupèdes", field: 'Grands livres',
    summary: "Georges Cuvier, 1812.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Georges Cuvier</p><p><strong>Édition :</strong> Deterville (Paris)</p><p><strong>Parution :</strong> 1812</p><p>Fondateur de la paléontologie des vertébrés, Cuvier applique l’anatomie comparée pour reconstituer des animaux disparus à partir d’ossements. Il établit la réalité des extinctions.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Un organisme est un tout cohérent : à partir de quelques os, on peut déduire le reste de l’animal.", answer: "L’extinction d’espèces est un fait réel, démontré par l’anatomie comparée." },
      exercises: [{ question: "Quelle méthode permet à Cuvier de reconstituer un animal à partir de quelques os ?", answer: "L’anatomie comparée : on met en relation la forme des os avec ceux d’espèces actuelles." }],
      sources: []
    }
  },
  {
    id: "darwin-origine-des-especes", branch: 'grands-livres', number: '11', title: "On the Origin of Species (L’Origine des espèces)", field: 'Grands livres',
    summary: "Charles Darwin, 1859.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Charles Darwin</p><p><strong>Édition :</strong> John Murray (Londres)</p><p><strong>Parution :</strong> 1859</p><p>Darwin y expose la sélection naturelle. Il discute aussi les lacunes de l’archive fossile, débat qui nourrit encore la paléontologie.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Les espèces descendent d’ancêtres communs et se modifient par sélection naturelle.", answer: "Les fossiles sont des témoins de la descendance avec modification, malgré une archive incomplète." },
      exercises: [{ question: "Pourquoi Darwin insiste-t-il sur les lacunes de l’archive fossile ?", answer: "Parce que la fossilisation est rare : l’absence de formes intermédiaires s’explique en partie par ce biais de conservation." }],
      sources: []
    }
  },
  {
    id: "simpson-tempo-and-mode", branch: 'grands-livres', number: '12', title: "Tempo and Mode in Evolution", field: 'Grands livres',
    summary: "George Gaylord Simpson, 1944.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> George Gaylord Simpson</p><p><strong>Édition :</strong> Columbia University Press</p><p><strong>Parution :</strong> 1944</p><p>Simpson rapproche paléontologie et génétique des populations. Il analyse rythmes et modes de l’évolution à partir des fossiles et contribue à la théorie synthétique.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Les fossiles montrent des rythmes d’évolution variables (lents, rapides) que la génétique doit expliquer.", answer: "La paléontologie est une source de données indispensable à la théorie synthétique de l’évolution." },
      exercises: [{ question: "Que signifient « tempo » et « mode » dans le titre ?", answer: "Le tempo est la vitesse de l’évolution ; le mode est la manière dont elle se déroule (types de changements, ramifications)." }],
      sources: []
    }
  },
  {
    id: "gould-wonderful-life", branch: 'grands-livres', number: '13', title: "Wonderful Life: The Burgess Shale and the Nature of History", field: 'Grands livres',
    summary: "Stephen Jay Gould, 1989.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Stephen Jay Gould</p><p><strong>Édition :</strong> W. W. Norton (trad. fr. : La Vie est belle, Seuil, 1991)</p><p><strong>Parution :</strong> 1989</p><p>À partir de la faune cambrienne des schistes de Burgess, Gould défend le rôle de la contingence : rejouer le film de l’évolution donnerait un autre résultat.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "L’histoire de la vie dépend de hasards : la contingence compte autant que la sélection.", answer: "Les schistes de Burgess révèlent une grande diversité de plans d’organisation au Cambrien." },
      exercises: [{ question: "Quelle idée résume la « rejouée du film de la vie » ?", answer: "Si l’on repartait des mêmes conditions de départ, de petits hasards produiraient une histoire différente." }],
      sources: []
    }
  },
  {
    id: "benton-vertebrate-palaeontology", branch: 'grands-livres', number: '14', title: "Vertebrate Palaeontology", field: 'Grands livres',
    summary: "Michael J. Benton, 1990.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Michael J. Benton</p><p><strong>Édition :</strong> Chapman & Hall (Londres) ; 4e éd. Wiley-Blackwell, 2015</p><p><strong>Parution :</strong> 1990</p><p>Manuel universitaire de référence sur l’histoire des vertébrés, des premiers poissons aux mammifères, avec méthodes de classification et de datation.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Un manuel suit l’histoire des vertébrés en combinant fossiles, phylogénie et datation.", answer: "C’est l’ouvrage de base pour une vue d’ensemble des vertébrés fossiles." },
      exercises: [{ question: "Quels grands groupes de vertébrés ce manuel couvre-t-il ?", answer: "Des poissons aux tétrapodes, puis reptiles, dinosaures, oiseaux et mammifères." }],
      sources: []
    }
  },
  {
    id: "alvarez-t-rex-crater-of-doom", branch: 'grands-livres', number: '15', title: "T. rex and the Crater of Doom", field: 'Grands livres',
    summary: "Walter Alvarez, 1997.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Walter Alvarez</p><p><strong>Édition :</strong> Princeton University Press</p><p><strong>Parution :</strong> 1997</p><p>Le géologue raconte comment l’équipe Alvarez a mis en évidence l’impact d’un astéroïde à l’origine de l’extinction de la fin du Crétacé, il y a 66 millions d’années.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Une couche riche en iridium à la limite Crétacé-Paléogène signe un impact extraterrestre.", answer: "Un impact d’astéroïde est une cause majeure de l’extinction de la fin du Crétacé." },
      exercises: [{ question: "Quel indice géochimique est au cœur de l’hypothèse de l’impact ?", answer: "Une anomalie en iridium dans l’argile de la limite Crétacé-Paléogène." }],
      sources: []
    }
  },
  {
    id: "fortey-trilobite", branch: 'grands-livres', number: '16', title: "Trilobite! Eyewitness to Evolution", field: 'Grands livres',
    summary: "Richard Fortey, 2000.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Richard Fortey</p><p><strong>Édition :</strong> HarperCollins (Londres)</p><p><strong>Parution :</strong> 2000</p><p>Un paléontologue du Natural History Museum retrace l’histoire des trilobites, arthropodes marins du Paléozoïque, et montre ce qu’ils révèlent de l’évolution et du travail de terrain.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Les trilobites, très diversifiés et bien conservés, sont d’excellents témoins de l’évolution.", answer: "Un groupe fossile abondant permet d’étudier l’évolution et de dater les roches." },
      exercises: [{ question: "Pourquoi les trilobites sont-ils utiles aux paléontologues ?", answer: "Ils sont nombreux, variés et bien conservés dans les roches paléozoïques, ce qui en fait des marqueurs d’évolution et de datation." }],
      sources: []
    }
  },
  {
    id: "benton-when-life-nearly-died", branch: 'grands-livres', number: '17', title: "When Life Nearly Died: The Greatest Mass Extinction of All Time", field: 'Grands livres',
    summary: "Michael J. Benton, 2003.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Michael J. Benton</p><p><strong>Édition :</strong> Thames & Hudson</p><p><strong>Parution :</strong> 2003</p><p>Synthèse sur l’extinction du Permien-Trias, il y a environ 252 millions d’années, la plus grave de l’histoire de la vie, avec ses causes possibles et la reconstruction des écosystèmes.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "La crise du Permien-Trias a éliminé la grande majorité des espèces marines.", answer: "La vie met des millions d’années à se reconstruire après une extinction de masse." },
      exercises: [{ question: "À quelle époque se situe la plus grande extinction de masse décrite par Benton ?", answer: "À la limite Permien-Trias, il y a environ 252 millions d’années." }],
      sources: []
    }
  },
  {
    id: "rudwick-bursting-the-limits-of-time", branch: 'grands-livres', number: '18', title: "Bursting the Limits of Time", field: 'Grands livres',
    summary: "Martin J. S. Rudwick, 2005.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Martin J. S. Rudwick</p><p><strong>Édition :</strong> University of Chicago Press</p><p><strong>Parution :</strong> 2005</p><p>Histoire de la découverte du temps profond et de la naissance de la géologie et de la paléontologie, de la fin du XVIIIe siècle aux années 1820.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "La Terre est ancienne : le temps profond a été reconnu grâce aux strates et aux fossiles.", answer: "La paléontologie est née en même temps que l’idée d’un passé de la Terre très long." },
      exercises: [{ question: "Qu’appelle-t-on « temps profond » ?", answer: "L’idée que l’histoire de la Terre se compte en millions d’années, bien au-delà de l’histoire humaine." }],
      sources: []
    }
  },
  {
    id: "shubin-your-inner-fish", branch: 'grands-livres', number: '19', title: "Your Inner Fish", field: 'Grands livres',
    summary: "Neil Shubin, 2008.",
    lesson: {
      heading: 'Présentation de l’ouvrage',
      content: "<p><strong>Auteur :</strong> Neil Shubin</p><p><strong>Édition :</strong> Pantheon Books</p><p><strong>Parution :</strong> 2008</p><p>Le codécouvreur de Tiktaalik, forme de transition entre poissons et tétrapodes, montre comment fossiles et anatomie humaine révèlent nos origines lointaines.</p>",
      example: { statement: 'Ce qu’il faut retenir de ce livre.', calculation: "Notre anatomie conserve des traces de nos ancêtres poissons.", answer: "Les fossiles de transition comme Tiktaalik éclairent le passage de l’eau à la terre." },
      exercises: [{ question: "Quel fossile illustre le passage des poissons aux tétrapodes ?", answer: "Tiktaalik, découvert dans l’Arctique canadien, qui a des caractères de poisson et de tétrapode." }],
      sources: []
    }
  }
];

