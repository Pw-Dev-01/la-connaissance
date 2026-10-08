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
    id: 'terrain', branch: 'terrain-et-temps', number: '01', title: 'Du terrain à la collection', field: 'Méthodes de terrain',
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
    id: 'stratigraphie', branch: 'terrain-et-temps', number: '02', title: 'Stratigraphie et corrélations', field: 'Datation relative',
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
    id: 'datation', branch: 'terrain-et-temps', number: '03', title: 'Datations et échelles de temps', field: 'Datation numérique',
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
    id: 'evolution', branch: 'histoire-vivant', number: '01', title: 'Fossiles et évolution', field: 'Parentés et caractères',
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
    id: 'paleoenvironnements', branch: 'histoire-vivant', number: '02', title: 'Paléoécologie', field: 'Milieux anciens',
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
    id: 'biodiversite', branch: 'histoire-vivant', number: '03', title: 'Biodiversité et extinctions', field: 'Registre fossile',
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
    id: "cuvier-ossemens-fossiles", branch: 'grands-livres', number: '01', title: "Recherches sur les ossemens fossiles de quadrupèdes", field: 'Les grands livres',
    summary: "Georges Cuvier, 1812.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Recherches sur les ossemens fossiles de quadrupèdes, où l’on rétablit les caractères de plusieurs espèces d’animaux que les révolutions du globe paroissent avoir détruites</p><p><strong>Auteur :</strong> Georges Cuvier (l’essai sur la géographie minéralogique des environs de Paris est écrit en collaboration avec Alexandre Brongniart)</p><p><strong>Édition :</strong> Paris, chez Deterville. Édition originale en quatre volumes in-quarto, illustrée de planches gravées.</p><p><strong>Date de parution :</strong> 1812</p><p><strong>Résumé :</strong> Cuvier y réunit ses travaux sur les ossements fossiles de quadrupèdes (éléphants, mammouths, rhinocéros, ruminants, carnivores…), mêlant paléontologie, ostéologie et stratigraphie. En comparant les fossiles aux squelettes des espèces vivantes, il établit que des espèces ont disparu, et il avance que des « révolutions » naturelles du globe ont pu les détruire.</p><p>Dans le discours qui ouvre le premier volume, Cuvier exprime l’ambition de franchir les limites du temps pour retrouver l’histoire de la Terre avant l’humanité. L’ouvrage est considéré comme l’un des textes fondateurs de la paléontologie des vertébrés.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Whipple Library (Université de Cambridge) — Cuvier, Recherches sur les ossemens fossiles", url: "https://www.whipplelib.hps.cam.ac.uk/special/exhibitions-and-displays/exploring-deep-history/cuvier" }, { title: "Smithsonian Libraries — exemplaire numérisé (tome 3)", url: "https://library.si.edu/es/digital-library/book/recherchessurles31812cuvi" }]
    }
  },
  {
    id: "darwin-origine-des-especes", branch: 'grands-livres', number: '02', title: "On the Origin of Species", field: 'Les grands livres',
    summary: "Charles Darwin, 1859.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life</p><p><strong>Auteur :</strong> Charles Darwin</p><p><strong>Édition :</strong> Londres, John Murray. Première édition, tirée à 1 250 exemplaires. Traduction française : <em>De l’origine des espèces</em>, par Clémence Royer, Paris, Guillaumin et Masson, 1862 (première édition française).</p><p><strong>Date de parution :</strong> Novembre 1859</p><p><strong>Résumé :</strong> Darwin y présente sa théorie de l’évolution : les espèces ne sont pas fixes, elles se transforment au fil des générations, et la sélection naturelle est le mécanisme principal de ces transformations. Il présente lui-même le livre comme un résumé de ses vues.</p><p>Deux chapitres concernent directement les fossiles : le chapitre IX sur l’imperfection des archives géologiques (<em>On the Imperfection of the Geological Record</em>) et le chapitre X sur la succession géologique des êtres organisés (<em>On the Geological Succession of Organic Beings</em>).</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Darwin Correspondence Project — l’édition française de 1862 (Royer)", url: "https://www.darwinproject.ac.uk/view/letters/DCP-LETT-3250" }, { title: "Darwin Correspondence Project — John Murray, éditeur de l’Origin", url: "https://www.darwinproject.ac.uk/taxonomy/term/63" }]
    }
  },
  {
    id: "simpson-tempo-and-mode", branch: 'grands-livres', number: '03', title: "Tempo and Mode in Evolution", field: 'Les grands livres',
    summary: "George Gaylord Simpson, 1944.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Tempo and Mode in Evolution</p><p><strong>Auteur :</strong> George Gaylord Simpson</p><p><strong>Édition :</strong> New York, Columbia University Press, collection « Columbia Biological Series », n° 15 (xviii + 237 pages). Réédité en 1984 par Columbia University Press avec une nouvelle introduction de l’auteur.</p><p><strong>Date de parution :</strong> 1944</p><p><strong>Résumé :</strong> Simpson confronte les données de la paléontologie à celles de la génétique. Il distingue le « tempo » de l’évolution (vitesses d’évolution, accélérations et ralentissements) de son « mode » (la manière et le schéma selon lesquels elle se déroule).</p><p>Il soutient que les mécanismes étudiés par la génétique des populations suffisent à expliquer les grands schémas observés dans les fossiles. L’ouvrage est une contribution majeure à la théorie synthétique de l’évolution.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Wellcome Collection — notice bibliographique", url: "https://works.wellcomecollection.org/works/nej9t35x" }, { title: "Notice de la réédition de 1984 (UC San Diego, Anthropogeny)", url: "https://carta.anthropogeny.org/node/1472" }]
    }
  },
  {
    id: "gould-wonderful-life", branch: 'grands-livres', number: '04', title: "Wonderful Life: The Burgess Shale and the Nature of History", field: 'Les grands livres',
    summary: "Stephen Jay Gould, 1989.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Wonderful Life: The Burgess Shale and the Nature of History</p><p><strong>Auteur :</strong> Stephen Jay Gould</p><p><strong>Édition :</strong> New York, W. W. Norton &amp; Company, première édition (347 pages). Traduction française : <em>La Vie est belle</em>, Éditions du Seuil, 1991.</p><p><strong>Date de parution :</strong> 1989</p><p><strong>Résumé :</strong> Le Burgess Shale est un gisement des Rocheuses canadiennes (Colombie-Britannique) qui a livré des animaux du Cambrien. Il a été découvert en 1909 par Charles D. Walcott, qui avait rattaché ses fossiles à des groupes d’animaux actuels. Plus de soixante ans plus tard, trois chercheurs britanniques les ont réexaminés, avec des résultats qui ont modifié la vision de l’histoire de la vie.</p><p>Gould s’appuie sur ce réexamen pour défendre le rôle de la contingence dans l’histoire de la vie : si l’on pouvait « rembobiner la bande de la vie » et la rejouer, le résultat pourrait être très différent.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Publishers Weekly — notice du livre", url: "https://www.publishersweekly.com/9780393027051" }, { title: "Notice de bibliothèque (1re éd., Norton, 1989)", url: "https://library.usi.edu/record/129953" }]
    }
  },
  {
    id: "benton-vertebrate-palaeontology", branch: 'grands-livres', number: '05', title: "Vertebrate Palaeontology", field: 'Les grands livres',
    summary: "Michael J. Benton, 1990.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Vertebrate Palaeontology: Biology and Evolution (titre de la 1re édition)</p><p><strong>Auteur :</strong> Michael J. Benton (Université de Bristol)</p><p><strong>Édition :</strong> Londres, Unwin Hyman, 1re édition (xii + 377 pages). Le manuel a connu cinq éditions successives, de 1990 à 2024.</p><p><strong>Date de parution :</strong> 1990 (1re édition)</p><p><strong>Résumé :</strong> Manuel universitaire de paléontologie des vertébrés, destiné aux cours de biologie et de géologie. Il présente l’histoire évolutive des vertébrés avec une approche fortement phylogénétique, et montre comment les paléontologues obtiennent leurs informations.</p><p>Les éditions successives ont été mises à jour avec les découvertes et les travaux publiés depuis la précédente.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Notice de bibliothèque (Unwin Hyman, 1990)", url: "https://lib.ecu.edu/catalog-preview/catalog/474688" }, { title: "Wikipédia (en) — Vertebrate Palaeontology (book)", url: "https://en.wikipedia.org/wiki/Vertebrate_Palaeontology_(book)" }]
    }
  },
  {
    id: "alvarez-t-rex-crater-of-doom", branch: 'grands-livres', number: '06', title: "T. rex and the Crater of Doom", field: 'Les grands livres',
    summary: "Walter Alvarez, 1997.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> T. rex and the Crater of Doom</p><p><strong>Auteur :</strong> Walter Alvarez (géologue, Université de Californie à Berkeley)</p><p><strong>Édition :</strong> Princeton (New Jersey), Princeton University Press (xii + 185 pages).</p><p><strong>Date de parution :</strong> 1997</p><p><strong>Résumé :</strong> Walter Alvarez, l’un des scientifiques de Berkeley qui ont découvert les premiers indices d’un impact, raconte comment l’hypothèse d’un impact d’astéroïde ou de comète à la fin du Crétacé (environ 65 millions d’années dans le livre) s’est construite pour expliquer l’extinction des dinosaures. Controversée dans les années 1980, elle a été confirmée par la découverte du cratère de Chicxulub, au nord de la péninsule du Yucatán.</p><p>Ce cratère avait été repéré en 1950 par des géologues mexicains, mais il est resté presque inconnu des autres scientifiques jusqu’en 1991. Le livre a figuré parmi les « Notable Books » du New York Times en 1997.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Princeton University Press — présentation du livre", url: "https://press.princeton.edu/node/57521" }, { title: "Notice de bibliothèque (Princeton University Press, 1997)", url: "https://library.usi.edu/record/192911" }]
    }
  },
  {
    id: "fortey-trilobite", branch: 'grands-livres', number: '07', title: "Trilobite! Eyewitness to Evolution", field: 'Les grands livres',
    summary: "Richard Fortey, 2000.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Trilobite! Eyewitness to Evolution</p><p><strong>Auteur :</strong> Richard Fortey (paléontologue, Natural History Museum, Londres)</p><p><strong>Édition :</strong> Londres, HarperCollins, 2000 (édition britannique). Édition américaine : New York, Alfred A. Knopf, parue le 6 novembre 2000.</p><p><strong>Date de parution :</strong> 2000</p><p><strong>Résumé :</strong> Richard Fortey, spécialiste des trilobites, consacre ce livre à ces arthropodes marins du Paléozoïque, qui ont duré environ trois cents millions d’années. Il évoque l’histoire de leur recherche, leur anatomie (leurs yeux étaient faits de calcite), son parcours de chercheur et de voyageur, et ce que ces fossiles apprennent sur l’évolution et sur la géographie des anciens océans et continents.</p><p>Le titre fait des trilobites des « témoins oculaires de l’évolution », dont l’abondance, la longévité et la variété sont centrales pour comprendre comment l’évolution s’est déroulée.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Kirkus Reviews — Trilobite!", url: "https://www.kirkusreviews.com/book-reviews/richard-fortey/trilobite" }, { title: "Notice de bibliothèque (Knopf, 2000)", url: "https://library.usi.edu/record/245633" }]
    }
  },
  {
    id: "benton-when-life-nearly-died", branch: 'grands-livres', number: '08', title: "When Life Nearly Died: The Greatest Mass Extinction of All Time", field: 'Les grands livres',
    summary: "Michael J. Benton, 2003.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> When Life Nearly Died: The Greatest Mass Extinction of All Time</p><p><strong>Auteur :</strong> Michael J. Benton (Université de Bristol)</p><p><strong>Édition :</strong> Londres, Thames &amp; Hudson, 1re édition (336 pages).</p><p><strong>Date de parution :</strong> 2003</p><p><strong>Résumé :</strong> Le livre est consacré à l’extinction de masse de la fin du Permien, il y a environ 251 millions d’années (date retenue dans le livre), au cours de laquelle environ 90 % des espèces auraient disparu, sur terre comme en mer. Benton retrace l’histoire des idées sur le catastrophisme, puis les recherches menées du terrain (Groenland, Russie) au laboratoire.</p><p>Il examine les causes possibles — impact d’une météorite ou d’une comète, ou longue activité volcanique en Sibérie — et donne son verdict à la fin du livre. Le dernier chapitre s’interroge sur une éventuelle « sixième extinction de masse ».</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Notice de bibliothèque (Thames & Hudson, 2003)", url: "https://library.usi.edu/record/267414" }, { title: "SERC (Carleton College) — résumé de l’ouvrage", url: "https://serc.carleton.edu/resources/1321.html" }]
    }
  },
  {
    id: "rudwick-bursting-the-limits-of-time", branch: 'grands-livres', number: '09', title: "Bursting the Limits of Time", field: 'Les grands livres',
    summary: "Martin J. S. Rudwick, 2005.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Bursting the Limits of Time: The Reconstruction of Geohistory in the Age of Revolution</p><p><strong>Auteur :</strong> Martin J. S. Rudwick</p><p><strong>Édition :</strong> Chicago et Londres, University of Chicago Press (xxiv + 708 pages). Livre issu des Tarner Lectures données au Trinity College (Cambridge) en 1996.</p><p><strong>Date de parution :</strong> 2005</p><p><strong>Résumé :</strong> Étude historique sur la manière dont les savants de la fin du XVIIIe et du début du XIXe siècle ont reconstruit l’histoire de la Terre (la « géohistoire ») et reconnu ce que l’on appelle aujourd’hui le temps profond. Le récit part de la création datée de 4004 av. J.-C. par l’archevêque Ussher en 1650, croyance qui n’a été définitivement abandonnée qu’au cours de cette période.</p><p>L’ouvrage couvre environ quarante ans autour de la Révolution française et des guerres napoléoniennes, et montre comment des géologues et des paléontologues ont assemblé peu à peu cette histoire.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Wellcome Collection — notice bibliographique", url: "https://identity.wellcomecollection.org/works/tb7zmwz4" }, { title: "Notice de bibliothèque (University of Chicago Press, 2005)", url: "https://library.usi.edu/record/326986" }]
    }
  },
  {
    id: "shubin-your-inner-fish", branch: 'grands-livres', number: '10', title: "Your Inner Fish", field: 'Les grands livres',
    summary: "Neil Shubin, 2008.",
    lesson: {
      heading: 'Fiche du livre',
      content: "<p><strong>Titre complet :</strong> Your Inner Fish: A Journey into the 3.5-Billion-Year History of the Human Body</p><p><strong>Auteur :</strong> Neil Shubin (paléontologue et professeur d’anatomie, Université de Chicago)</p><p><strong>Édition :</strong> New York, Pantheon Books, 1re édition (229 pages).</p><p><strong>Date de parution :</strong> 2008</p><p><strong>Résumé :</strong> Neil Shubin, codécouvreur de <em>Tiktaalik</em> (un poisson fossile d’environ 375 millions d’années découvert en 2004 au Nunavut, dans l’Arctique canadien, et annoncé en avril 2006), raconte l’histoire de l’évolution en suivant les organes du corps humain.</p><p>En s’appuyant sur les fossiles et sur l’ADN, il montre que nos mains rappellent des nageoires de poissons, que l’organisation de notre tête évoque celle d’un poisson sans mâchoire disparu et que des parties importantes de notre génome ressemblent à celles de vers et de bactéries.</p>",
      sourcesHeading: 'Notices bibliographiques',
      sources: [{ title: "Notice de bibliothèque (Pantheon Books, 2008)", url: "https://lib.ecu.edu/catalog-preview/catalog/1345623" }, { title: "Canadian Medical Association Journal — compte rendu", url: "https://www.cmaj.ca/content/180/4/434" }]
    }
  }
];
