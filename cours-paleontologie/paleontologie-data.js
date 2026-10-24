// Data PALÉONTOLOGIE — structure commune à toutes les disciplines :
// window.courseCatalog = [ { id, title, note, chapters: [ { id, number, title, field, summary, lesson } ] } ]
// Lu tel quel par catalogue.js et cours.js (fichiers communs, à ne plus modifier).
//
// Format d'une leçon (tous les champs sont facultatifs) :
//   heading + content (HTML)  |  sections (paragraphes)  |  fiche [[libellé, valeur]]
//   formula {label, text}  |  equationDetails [...]  |  example {statement, calculation, answer}
//   exercises [{question, answer}]  |  sources [{title, url}]  |  sourcesHeading

window.courseDiscipline = 'paléontologie';

window.courseCatalog = [

  /* =====================================================================
     BRANCHE 1 — LES ARCHIVES FOSSILES
     ===================================================================== */
  {
    id: 'archives',
    title: 'Les archives fossiles',
    note: 'Ce que sont les fossiles, comment ils se forment et ce que le registre fossile permet de conclure.',
    chapters: [
      {
        id: 'discipline', number: '01', title: 'La discipline et ses archives', field: 'Introduction',
        summary: 'Définir la paléontologie et comprendre ce que le registre fossile peut documenter.',
        lesson: {
          heading: 'Étudier les organismes du passé',
          content: `<p>La <strong>paléontologie</strong> étudie la vie passée grâce aux restes et aux traces conservés dans les archives géologiques. Un fossile est un vestige physique d’un organisme ancien ou une trace de son activité. L’objet isolé n’est qu’une partie de l’observation : son âge relatif, la couche qui le contient, la roche et les autres fossiles associés apportent des informations indispensables à son interprétation.</p><p>Le <strong>registre fossile</strong> désigne l’ensemble des fossiles connus dans les roches étudiées. Il permet de documenter quels organismes sont observés dans différentes périodes, et de comparer leurs formes à travers le temps. Il ne constitue pas un inventaire exhaustif de toute la vie qui a existé : la fossilisation est rare et les roches comme les fossiles peuvent être détruits ou rester enfouis.</p><p>Les questions paléontologiques varient selon les données disponibles : identifier un organisme, décrire sa morphologie, établir des ressemblances, dater relativement une couche ou étudier un milieu ancien. Une conclusion robuste distingue l’observation (par exemple une empreinte à trois doigts) de son interprétation (l’organisme qui l’a produite), puis précise les éléments qui soutiennent cette interprétation.</p><p><strong>Fossile et preuve.</strong> Un fossile documente directement une partie de l’organisme ou une trace de son activité. Il ne révèle pas à lui seul toutes les caractéristiques de l’être vivant : une empreinte, un os et un contenu digestif conservé n’apportent pas les mêmes informations.</p>`,
          example: { statement: 'Un fossile est trouvé isolé, sans indication de la couche où il a été découvert. Quelle information importante manque pour l’interpréter ?', calculation: 'Sans contexte stratigraphique et géologique documenté, il est difficile d’établir sa position dans une succession de couches ou de le comparer à d’autres observations locales.', answer: 'La provenance et la position géologique du spécimen doivent être documentées.' },
          exercises: [{ question: 'Pourquoi un fossile doit-il être étudié avec la roche et la couche qui l’entourent ?', answer: 'Le contexte géologique aide à établir son âge relatif, les conditions de dépôt et les liens avec d’autres fossiles. Un spécimen isolé ne fournit pas à lui seul ces informations.' }],
          sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }, { title: 'OpenStax Biology 2e — 18.1 Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }]
        }
      },
      {
        id: 'types', number: '02', title: 'Les catégories de fossiles', field: 'Fossiles corporels et traces',
        summary: 'Distinguer les restes corporels, les traces fossiles, les microfossiles et les moulages.',
        lesson: {
          heading: 'Restes, traces et microfossiles',
          content: `<p>Les <strong>fossiles corporels</strong> sont des parties du corps conservées : os, dents, coquilles, feuilles ou bois. Ils peuvent préserver tout ou partie d’une structure anatomique. Une coquille fossile renseigne sur sa forme et sa taille, mais pas nécessairement sur les tissus mous qui l’entouraient.</p><p>Les <strong>traces fossiles</strong> (ou ichnofossiles) enregistrent une activité plutôt qu’une partie du corps. Les empreintes, pistes, terriers, traces de perforation et coprolithes (excréments fossilisés) en sont des exemples. Elles renseignent sur une interaction ou un comportement à un moment donné, mais leur producteur peut rester incertain en l’absence de restes corporels associés. Une piste ne permet donc pas toujours d’identifier l’espèce qui l’a laissée.</p><p>Le terme <strong>microfossile</strong> désigne ici les fossiles de très petite taille, qui nécessitent souvent une observation instrumentale. Ils peuvent correspondre à des organismes entiers ou à des fragments. Les fossiles microscopiques sont utiles lorsque les fossiles visibles sont rares et peuvent contribuer à comparer les couches et à étudier les environnements passés.</p><p>On rencontre aussi des <strong>moules</strong> et des <strong>moulages</strong>. Si une coquille se dissout après son enfouissement, elle peut laisser une cavité qui reproduit sa forme : le moule. Si cette cavité est ensuite remplie par des minéraux ou des sédiments, le remplissage forme un moulage. L’objet obtenu reproduit une géométrie, sans être nécessairement constitué de la matière d’origine.</p><p><strong>Types de fossiles et informations directement observables</strong></p><table><thead><tr><th>Type</th><th>Exemple</th><th>Information accessible</th><th>Prudence</th></tr></thead><tbody><tr><td>Corporel</td><td>Os, coquille, feuille</td><td>Forme et caractères préservés</td><td>Les parties molles manquent souvent</td></tr><tr><td>Trace</td><td>Empreinte, terrier, coprolithe</td><td>Activité ou interaction</td><td>Le producteur n’est pas toujours identifiable</td></tr><tr><td>Microfossile</td><td>Coquille ou fragment microscopique</td><td>Caractères observables au microscope</td><td>La petite taille ne garantit pas une identification certaine</td></tr><tr><td>Moule / moulage</td><td>Empreinte externe ou remplissage</td><td>Forme externe, relief ou cavité</td><td>La matière originale peut avoir disparu</td></tr></tbody></table>`,
          example: { statement: 'Une dalle conserve une piste d’empreintes, mais aucun os. Quelle catégorie de fossile observe-t-on ?', calculation: 'La piste enregistre une activité de l’organisme sur un substrat, et non une partie de son corps.', answer: 'Il s’agit d’une trace fossile.' },
          exercises: [
            { question: 'Un coprolithe est-il un fossile corporel ou une trace fossile ?', answer: 'C’est une trace fossile : il témoigne d’une activité biologique plutôt que de conserver une partie du corps.' },
            { question: 'Une dalle porte des empreintes, mais aucun os. S’agit-il de fossiles corporels ou de traces fossiles ? Quelle limite faut-il indiquer dans l’identification du producteur ?', answer: 'Ce sont des traces fossiles, car elles enregistrent une activité (des pas) et non une partie du corps. Sans reste corporel associé ni caractères diagnostiques suffisants, l’espèce productrice peut rester indéterminée.' }
          ],
          sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }, { title: 'Natural History Museum — How are dinosaur fossils formed?', url: 'https://www.nhm.ac.uk/discover/how-are-fossils-formed.html' }]
        }
      },
      {
        id: 'fossilisation', number: '03', title: 'La fossilisation et ses biais', field: 'Conservation',
        summary: 'Comprendre les conditions de conservation et les biais du registre fossile.',
        lesson: {
          heading: 'Une conservation exceptionnelle',
          content: `<p>La fossilisation n’est pas l’issue habituelle après la mort. Décomposition, consommation par des charognards, érosion et transformations géologiques peuvent faire disparaître les restes. Un enfouissement assez rapide peut limiter certaines destructions et donner aux restes une chance d’être préservés; le contexte sédimentaire influe donc fortement sur les fossiles que l’on peut découvrir.</p><p>Dans la <strong>perminéralisation</strong>, des eaux qui circulent dans les pores déposent des minéraux dans les espaces d’un os ou d’un bois. Les structures internes peuvent ainsi rester reconnaissables tandis que la composition change. Une autre issue possible est la dissolution de la coquille ou de l’os, suivie de la formation d’un moule; le remplissage ultérieur peut produire un moulage. Ces processus ne sont pas universels : les chemins de conservation dépendent du matériau et de son environnement.</p><p>La conservation est <strong>sélective</strong>. Les parties dures, comme les coquilles et les os, ont davantage de chances d’être fossilisées que les tissus mous; les milieux où les sédiments enfouissent rapidement les restes sont mieux représentés que ceux où ils restent exposés. Le registre fossile est donc un échantillon incomplet et biaisé de la vie passée. L’absence d’un fossile dans une couche ne prouve pas, à elle seule, que l’organisme n’existait pas à cette époque ou dans cette région.</p><p><strong>Chaîne de conservation.</strong> Mort, décomposition, transport, enfouissement, transformations dans la roche, exposition par l’érosion, découverte : chacune de ces étapes peut modifier ou éliminer l’information. L’état final du fossile n’est pas une copie parfaite de l’organisme vivant.</p>`,
          example: { statement: 'Pourquoi les parties dures d’un organisme sont-elles souvent mieux représentées dans le registre fossile ?', calculation: 'Elles résistent généralement mieux à la décomposition et ont davantage de chances d’être préservées que les tissus mous.', answer: 'La conservation différentielle crée un biais en faveur des parties dures.' },
          exercises: [
            { question: 'Une espèce n’est pas retrouvée dans une couche. Peut-on conclure qu’elle n’existait pas à cette époque ?', answer: 'Non. La fossilisation est rare et le registre est incomplet; l’absence observée peut résulter d’un défaut de conservation ou d’échantillonnage.' },
            { question: 'Une couche ne contient pas le fossile recherché. Pourquoi cela ne suffit-il pas à démontrer que l’organisme avait disparu ?', answer: 'Le registre est incomplet : l’organisme a pu ne pas être conservé, la couche peut être lacunaire, l’échantillon limité ou la roche peu propice à la fossilisation. Il faut comparer plusieurs couches, lieux et indices avant d’inférer une extinction.' }
          ],
          sources: [{ title: 'Natural History Museum — How are dinosaur fossils formed?', url: 'https://www.nhm.ac.uk/discover/how-are-fossils-formed.html' }, { title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }]
        }
      },


{
  id: 'anciens-fossiles',
  number: '04',
  title: 'Les plus anciens fossiles',
  field: 'Origines de la vie',

  summary: 'Étudier les plus anciennes traces de vie connues, distinguer les fossiles des indices géochimiques et comprendre pourquoi leur interprétation exige plusieurs preuves indépendantes.',

  lesson: {
    heading: 'Rechercher les premières traces de vie',

    content: `<p>Les plus anciens indices de vie connus sont conservés dans des roches très anciennes, principalement formées au cours de l’Archéen. Leur étude est difficile : la croûte terrestre a été déformée, chauffée, altérée et parfois métamorphisée depuis leur formation. Ces transformations peuvent effacer les structures d’origine ou produire des formes et des compositions qui ressemblent à des traces biologiques. Il faut donc distinguer l’âge de la roche, l’âge de la structure observée et l’interprétation de son origine. Un âge très ancien ne suffit pas, à lui seul, à démontrer qu’une structure est un fossile.</p>

<p><strong>Les stromatolites.</strong> Les stromatolites sont des structures rocheuses souvent stratifiées, formées par l’activité de communautés microbiennes qui piègent ou lient des sédiments et peuvent favoriser la précipitation de minéraux. Des stromatolites anciens sont connus dans des roches d’environ 3,5 milliards d’années. Des recherches publiées en 2022 ont présenté des analyses convergentes en faveur de l’origine biologique de stromatolites de la formation de Dresser, en Australie-Occidentale, datée d’environ 3,48 milliards d’années. L’identification ne repose pas seulement sur leur silhouette : les chercheurs examinent aussi les microstructures, les relations avec la roche environnante et les indices géochimiques. Des structures qui ressemblent à des stromatolites peuvent cependant avoir une origine non biologique ; la morphologie seule n’est donc pas une preuve suffisante.</p>

<p><strong>Les microfossiles et les signatures chimiques.</strong> Certains échantillons archéens contiennent de minuscules formes filamenteuses ou sphériques interprétées par des chercheurs comme des microfossiles. D’autres travaux recherchent des signatures chimiques compatibles avec une activité biologique, par exemple des rapports entre isotopes du carbone ou du soufre. Ces indices ne sont pas équivalents à un fossile morphologiquement identifiable : une forme microscopique peut être produite par des processus minéraux, et des réactions abiotiques peuvent parfois générer des signatures chimiques qui ressemblent à celles du vivant. Une interprétation solide combine plusieurs méthodes indépendantes et vérifie le contexte géologique, la conservation de l’échantillon ainsi que les explications non biologiques possibles.</p>

<p><strong>Le cas discuté d’Isua, au Groenland.</strong> En 2016, une étude a interprété des structures dans des roches d’environ 3,7 milliards d’années comme de possibles stromatolites. Une analyse publiée dans la revue <em>Nature</em> en 2018 a ensuite conclu que les structures étudiées s’expliquaient plus vraisemblablement par des déformations postérieures à la formation des roches que par une activité microbienne. Ce débat montre pourquoi il est imprudent de présenter les structures d’Isua comme des fossiles incontestés. Il illustre aussi une démarche scientifique normale : une hypothèse est évaluée à partir de nouvelles observations, de méthodes plus précises et de la comparaison avec des processus géologiques non biologiques.</p>

<p><strong>Ce que les plus anciens fossiles permettent de conclure.</strong> Les traces anciennes indiquent que la vie microbienne existait déjà très tôt dans l’histoire de la Terre, mais elles ne révèlent pas directement le lieu exact ni le mécanisme de son apparition. Les stromatolites témoignent de communautés microbiennes et de leurs interactions avec leur environnement ; ils ne permettent pas, à eux seuls, d’identifier toutes les espèces impliquées ou de conclure que ces organismes produisaient de l’oxygène. Il faut éviter de confondre les premières preuves conservées avec l’origine réelle de la vie : les roches disponibles ne constituent qu’un échantillon incomplet de l’histoire terrestre, et les traces les plus anciennes ont pu être détruites ou ne jamais se fossiliser.</p>`,

    example: {
      statement: 'Une roche âgée d’environ 3,7 milliards d’années contient des formes arrondies qui ressemblent à des stromatolites. Peut-on conclure immédiatement qu’elles ont été produites par des êtres vivants ?',

      calculation: 'Non. Il faut étudier la géométrie en trois dimensions, les microstructures, la composition minérale et chimique, les relations avec les structures de la roche et les transformations subies après sa formation. Il faut également comparer les observations à des mécanismes géologiques non biologiques capables de produire des formes similaires.',

      answer: 'Non. L’âge et la ressemblance ne suffisent pas ; l’origine biologique doit être étayée par plusieurs indices indépendants et par l’examen des explications abiotiques.'
    },

    exercises: [
      {
        question: 'Pourquoi les stromatolites de la formation de Dresser sont-ils importants pour l’étude des plus anciennes traces de vie ?',

        answer: 'Ils datent d’environ 3,48 milliards d’années et des analyses de leurs structures, microstructures et contextes géologiques ont été présentées comme des preuves convergentes d’une origine biologique. Ils constituent donc un exemple majeur de traces anciennes, tout en montrant qu’une interprétation doit s’appuyer sur plusieurs types d’observations.'
      },
      {
        question: 'Pourquoi les structures d’Isua, au Groenland, ne doivent-elles pas être présentées comme des fossiles incontestés ?',

        answer: 'Une étude de 2018 a réévalué les structures proposées comme stromatolites de 3,7 milliards d’années et a conclu qu’elles s’expliquaient plus vraisemblablement par des déformations géologiques postérieures. Leur origine biologique est donc contestée par cette étude.'
      },
      {
        question: 'Quelle différence existe-t-il entre un fossile morphologique et une signature géochimique ?',

        answer: 'Un fossile morphologique est une forme ou une structure conservée interprétée comme le reste d’un organisme ou le produit de son activité. Une signature géochimique est une caractéristique de la composition ou des isotopes d’un matériau pouvant être compatible avec une activité biologique. Les deux demandent une interprétation et peuvent être ambiguës lorsqu’elles sont considérées isolément.'
      }
    ],

    sources: [
      {
        title: 'Natural History Museum — The oldest evidence of life on Earth could help us discover ancient life on Mars',
        url: 'https://www.nhm.ac.uk/discover/news/2022/november/oldest-evidence-life-earth-could-help-discover-ancient-life-mars.html'
      },
      {
        title: 'Natural History Museum — The origin of life on Earth: From basic chemicals to complex organisms',
        url: 'https://www.nhm.ac.uk/discover/origin-of-life-on-earth.html'
      },
      {
        title: 'Nature — Reassessing evidence of life in 3,700-million-year-old rocks of Greenland (2018)',
        url: 'https://www.nature.com/articles/s41586-018-0610-4'
      },
      {
        title: 'Nature Communications — Earliest signs of life on land preserved in ca. 3.5 Ga hot spring deposits (2017)',
        url: 'https://www.nature.com/articles/ncomms15263'
      },
      {
        title: 'Smithsonian National Museum of Natural History — History of Life on Earth',
        url: 'https://naturalhistory.si.edu/education/teaching-resources/life-science/early-life-earth-animal-origins'
      }
    ]
  }
},

    ]
  },

  /* =====================================================================
     BRANCHE 2 — TERRAIN ET TEMPS
     ===================================================================== */
  {
    id: 'terrain-et-temps',
    title: 'Terrain et temps',
    note: 'Documenter les découvertes, ordonner les couches et situer les fossiles dans le temps géologique.',
    chapters: [
      {
        id: 'terrain', number: '01', title: 'Du terrain à la collection', field: 'Méthodes de terrain',
        summary: 'Documenter le lieu, la couche et les conditions de découverte d’un spécimen.',
        lesson: {
          heading: 'Conserver le contexte de découverte',
          content: `<p>Les fossiles se trouvent le plus souvent dans les roches sédimentaires. Les cartes géologiques renseignent sur les roches visibles dans une région; elles aident à orienter la recherche vers des formations d’un âge et d’un type susceptibles de contenir certains fossiles. Cette préparation ne garantit pas une découverte : la roche peut être masquée, l’affleurement incomplet ou les conditions de conservation défavorables.</p><p>Une observation de terrain gagne à documenter le <strong>contexte stratigraphique</strong> : formation ou couche, position du fossile dans cette couche, association à d’autres fossiles, nature de la roche et relations avec les couches voisines. Des données de localisation et des notes de terrain permettent de relier l’échantillon à son lieu et à sa position d’origine. Sans ce contexte, une pièce isolée perd une partie de sa valeur scientifique.</p><p>Au laboratoire, la préparation vise à rendre les caractères observables sans confondre dégagement et reconstitution. Les observations peuvent inclure des mesures, des descriptions, des images et la comparaison avec des spécimens de référence. Les conclusions doivent préciser ce qui est directement conservé et ce qui relève d’une interprétation. La fragilité varie selon les matériaux et les fossiles : la collecte et la préparation nécessitent des pratiques adaptées, et le prélèvement peut être réglementé selon le lieu.</p><p>La collection scientifique garde trace de ces informations avec le spécimen. Un numéro d’inventaire, une provenance documentée et une description rendent possible la vérification ultérieure d’une identification ou d’une interprétation. Un fossile sans provenance fiable ne peut pas être replacé avec assurance dans une succession de couches ou dans un environnement local.</p>`,
          example: { statement: 'Deux fossiles identiques sont trouvés, mais un seul possède une position stratigraphique documentée. Lequel est le plus utile pour une étude de corrélation ?', calculation: 'La position dans la couche et son contexte géologique permettent de rattacher l’échantillon à une succession et de comparer cette observation à d’autres sites.', answer: 'Le spécimen documenté fournit une donnée stratigraphique interprétable.' },
          exercises: [{ question: 'Quelles informations minimales relier à un fossile collecté sur le terrain ?', answer: 'Sa localisation, la formation ou couche, sa position dans cette couche, la nature de la roche et les associations observées.' }],
          sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }]
        }
      },
      {
        id: 'stratigraphie', number: '02', title: 'Stratigraphie et corrélations', field: 'Datation relative',
        summary: 'Ordonner les couches et comparer les successions fossiles entre sites.',
        lesson: {
          heading: 'Ordonner les couches et comparer les sites',
          content: `<p>Dans une succession sédimentaire non renversée, le <strong>principe de superposition</strong> place en général les couches les plus anciennes sous les couches plus récentes. Il fournit un ordre relatif, pas un âge en années. Les plis, les failles, l’érosion et les lacunes de sédimentation peuvent compliquer cet ordre; il faut donc décrire les relations observées avant de tirer une conclusion chronologique.</p><p>Les paléontologues et les stratigraphes peuvent corréler des couches éloignées en comparant leur contenu fossilifère, leur succession et d’autres caractères géologiques. Un <strong>fossile stratigraphique</strong> (ou fossile-guide) est particulièrement utile lorsqu’il est répandu géographiquement, reconnaissable et limité à un intervalle de temps relativement court. Une corrélation biostratigraphique établit une correspondance fondée sur le contenu fossilifère; elle n’est pas nécessairement une équivalence temporelle exacte. Les lacunes peuvent tronquer les répartitions observées et un même faciès peut se retrouver à des âges différents.</p><p>La corrélation paléontologique dépend de l’identification et de la préservation. Un fossile remanié, érodé d’une couche ancienne puis redéposé dans une couche plus récente, peut être plus ancien que la roche qui l’entoure. Les discordances signalent des intervalles manquants dans l’enregistrement local. Ces limites doivent être prises en compte avant d’interpréter une succession comme continue.</p><p><strong>Relatif et numérique.</strong> La stratigraphie et les fossiles établissent des relations d’ordre et de corrélation. Les méthodes radiométriques peuvent fournir des âges numériques à des matériaux adaptés. Ces deux approches répondent à des questions différentes et se complètent.</p>`,
          example: { statement: 'Dans une succession non renversée, une couche fossilifère se trouve sous une seconde couche. Quelle relation d’âge peut-on proposer ?', calculation: 'Le principe de superposition établit un ordre relatif entre couches superposées, sous réserve que la succession n’ait pas été renversée ou perturbée.', answer: 'La couche inférieure est généralement plus ancienne; ce principe ne donne pas son âge numérique.' },
          exercises: [
            { question: 'Deux couches éloignées contiennent un fossile stratigraphique commun. Quelle réserve accompagne leur corrélation ?', answer: 'La corrélation biostratigraphique ne garantit pas à elle seule une équivalence temporelle exacte; il faut considérer les lacunes, les faciès et le remaniement.' },
            { question: 'Dans une succession non renversée, la couche X se trouve sous la couche Y. Quelle conclusion relative est permise par le principe de superposition, et quelle information ne donne-t-il pas ?', answer: 'Sous réserve que la succession ne soit pas renversée et que les relations observées soient intactes, X est plus ancienne que Y. Cette relation ne donne pas leur âge en années ni la durée séparant les deux dépôts.' },
            { question: 'Un fossile stratigraphique est reconnu dans deux régions éloignées. Que peut-on proposer sur les couches et quelle réserve faut-il garder ?', answer: 'Si l’identification est correcte, si le fossile n’a pas été remanié et si sa durée d’existence est suffisamment limitée, les couches peuvent être corrélées à un intervalle de temps comparable. Cela ne fournit pas à lui seul un âge numérique précis.' }
          ],
          sources: [{ title: 'International Commission on Stratigraphy — International Stratigraphic Guide, chapitre 7', url: 'https://stratigraphy.org/guide/bio' }, { title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }]
        }
      },
      {
        id: 'datation', number: '03', title: 'Datations et échelles de temps', field: 'Datation numérique',
        summary: 'Distinguer datation relative et datation radiométrique, et lire une demi-vie.',
        lesson: {
          heading: 'Relier les fossiles au temps géologique',
          content: `<p>La <strong>datation relative</strong> établit qu’un événement ou une couche est antérieur ou postérieur à un autre. Elle s’appuie sur les relations entre les strates et sur leur contenu fossilifère. La <strong>datation radiométrique</strong> mesure les proportions d’isotopes radioactifs et de produits de désintégration dans un matériau adéquat. Elle ne date pas directement tous les fossiles : on date souvent des roches ou des minéraux associés, puis on encadre l’âge de la couche fossilifère avec les relations géologiques.</p><p>Pour un isotope radioactif donné, le nombre de noyaux parents restants diminue au cours du temps. La relation suivante exprime cette décroissance; la demi-vie est le temps nécessaire pour que la moitié des noyaux parents d’un échantillon se désintègrent.</p><div class="formula-block"><span class="formula-label">DÉCROISSANCE RADIOACTIVE</span><math class="mathml-display" display="block" aria-label="N de t égale N zéro multiplié par exponentielle de moins lambda t"><mrow><mi>N</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><mo>·</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math><span class="math-display">N(t) = N₀ · e<sup>−λt</sup></span></div><p>Paramètres : N(t) est le nombre de noyaux parents restants au temps t; N₀ est le nombre initial; λ est la constante de désintégration, propre à l’isotope. La demi-vie vaut t<sub>1/2</sub> = ln(2)/λ. Cette équation décrit la décroissance, mais ne suffit pas à dater un fossile : il faut connaître le matériau analysé, le système isotopique, les conditions de conservation et la relation entre l’échantillon daté et la couche contenant le fossile.</p><p>La datation au carbone 14 concerne des matières carbonées issues d’organismes et sert aux âges récents à l’échelle géologique. Elle n’est pas adaptée à des fossiles très anciens comme ceux de l’ère des dinosaures. Des couples isotopiques à demi-vies plus longues sont employés pour dater des roches et minéraux plus anciens. Le choix de la méthode dépend de l’âge visé et du matériau disponible.</p><p>Les limites et les noms des unités géologiques sont définis dans la <strong>Charte chronostratigraphique internationale</strong>, tenue à jour par la Commission internationale de stratigraphie. Les âges numériques associés aux limites sont révisés au fur et à mesure que les calibrations s’améliorent; une valeur doit donc être rapportée avec la version de la charte utilisée.</p>`,
          example: { statement: 'Après deux demi-vies, quelle fraction des noyaux parents radioactifs reste dans l’échantillon ?', calculation: 'Après une demi-vie, il en reste la moitié; après la deuxième, la moitié de cette moitié.', answer: 'Un quart des noyaux parents reste.' },
          exercises: [
            { question: 'Pourquoi la datation d’un minéral voisin ne donne-t-elle pas automatiquement l’âge exact du fossile ?', answer: 'Il faut établir que le matériau est adapté à la méthode et préciser sa relation stratigraphique avec la couche fossilifère.' },
            { question: 'Après deux demi-vies, quelle fraction des noyaux radioactifs parents reste-t-il ? Pourquoi cette réponse ne date-t-elle pas automatiquement le fossile voisin ?', answer: 'Il reste un quart des noyaux parents : la moitié après une demi-vie, puis la moitié de ce reste après la deuxième. Pour dater le fossile, il faut établir que le matériau analysé est adapté et déterminer sa relation géologique avec la couche fossilifère.' }
          ],
          sources: [{ title: 'OpenStax Chemistry 2e — 21.3 Radioactive Decay', url: 'https://openstax.org/books/chemistry-2e/pages/21-3-radioactive-decay' }, { title: 'International Commission on Stratigraphy — International Chronostratigraphic Chart', url: 'https://stratigraphy.org/chart' }]
        }
      }
    ]
  },

  /* =====================================================================
     BRANCHE 3 — HISTOIRE DU VIVANT
     ===================================================================== */
  {
    id: 'histoire-vivant',
    title: 'Histoire du vivant',
    note: 'Évolution, milieux anciens, biodiversité et extinctions lus à travers les fossiles.',
    chapters: [
      {
        id: 'evolution', number: '01', title: 'Fossiles et évolution', field: 'Parentés et caractères',
        summary: 'Comparer les caractères fossiles et comprendre leur rôle dans l’étude de l’évolution.',
        lesson: {
          heading: 'Comparer les formes au cours du temps',
          content: `<p>Les fossiles montrent que les organismes du passé diffèrent de ceux observés aujourd’hui et documentent des changements de formes à travers le temps. Les paléontologues comparent les caractères anatomiques conservés entre fossiles et organismes actuels, tout en considérant leur âge relatif et leur contexte. Cette comparaison est une des lignes de preuve mobilisées pour étudier l’évolution; OpenStax souligne que le registre fossile documente les transformations au cours du temps.</p><p>Une ressemblance anatomique ne suffit pas toujours à établir une parenté. Les caractères <strong>homologues</strong> correspondent à des similitudes liées à une histoire évolutive commune; les caractères <strong>analogues</strong> ont une fonction ou une apparence comparable sans être hérités d’une structure commune récente. OpenStax illustre cette distinction avec les os des ailes des oiseaux et des chauves-souris, homologues, tandis que les ailes d’insectes et celles des vertébrés sont analogues comme organes du vol.</p><p>Les fossiles dits <strong>transitionnels</strong> combinent des caractères observés dans des groupes ancestraux et dans des groupes apparus plus tard. Ils documentent des combinaisons de caractères; ils ne sont pas nécessairement des ancêtres directs des espèces actuelles. Par exemple, le Natural History Museum décrit Archaeopteryx comme un fossile possible de transition entre dinosaures non aviens et oiseaux, en s’appuyant sur la coexistence de caractères aviens et dinosauriens.</p><p>Une reconstruction phylogénétique compare plusieurs caractères et, lorsque cela est possible, des données moléculaires provenant d’organismes actuels. Les relations proposées sont des hypothèses scientifiques qui doivent être confrontées aux données disponibles. Les lacunes du registre fossile, la convergence de caractères et les identifications incertaines peuvent limiter les inférences.</p>`,
          example: { statement: 'Des structures ont une fonction similaire chez deux groupes, mais une anatomie et une origine différentes. Quel terme décrit cette ressemblance ?', calculation: 'Une fonction commune n’établit pas à elle seule une parenté évolutive étroite.', answer: 'Il s’agit d’une analogie, et non d’une homologie.' },
          exercises: [{ question: 'Les ailes d’un insecte et d’un oiseau sont-elles homologues comme organes du vol ?', answer: 'Elles sont analogues pour la fonction de vol, car elles ne partagent pas la même structure anatomique héritée.' }],
          sources: [{ title: 'OpenStax Biology 2e — 18.1 Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }, { title: 'OpenStax Biology 2e — 20.2 Determining Evolutionary Relationships', url: 'https://openstax.org/books/biology-2e/pages/20-2-determining-evolutionary-relationships' }]
        }
      },
      {
        id: 'paleoenvironnements', number: '02', title: 'Paléoécologie', field: 'Milieux anciens',
        summary: 'Associer fossiles et données géologiques pour étudier les environnements du passé.',
        lesson: {
          heading: 'Reconstituer les milieux anciens',
          content: `<p>La <strong>paléoécologie</strong> étudie les relations entre les organismes fossiles et les environnements anciens. Elle combine des observations sur les fossiles avec celles de la roche qui les contient. Une association de fossiles marins dans une roche déposée en milieu marin, par exemple, fournit une indication convergente sur le contexte de dépôt; un seul organisme ne suffit pas nécessairement à caractériser tout un milieu.</p><p>Les fossiles corporels renseignent sur les caractères préservés et les traces fossiles peuvent documenter des activités. Des empreintes indiquent qu’un organisme s’est déplacé sur un substrat à un moment donné; un terrier témoigne d’une activité de creusement. L’interprétation écologique doit rester proportionnée à la trace : sans restes associés, l’attribution à une espèce peut demeurer indéterminée.</p><p>Des microfossiles, notamment certaines coquilles, peuvent aider à étudier les milieux et les climats passés. Ces conclusions nécessitent d’identifier le fossile, d’examiner son contexte géologique et de comparer plusieurs indices. La préservation sélective des espèces et des parties dures impose de tenir compte des biais avant de généraliser une observation à un écosystème entier.</p><p>Les fossiles peuvent également documenter des interactions : contenu digestif conservé, dommages sur un os, ou traces d’activité associées. Une interprétation de régime alimentaire ou de comportement se fonde sur ces observations et leur comparaison avec d’autres éléments; elle doit préciser le degré d’incertitude lorsque plusieurs explications restent possibles.</p>`,
          example: { statement: 'Une couche marine contient plusieurs fossiles d’organismes marins et des sédiments déposés en milieu marin. Pourquoi ces indices sont-ils plus solides ensemble ?', calculation: 'Les fossiles et les caractéristiques de la roche fournissent des éléments indépendants qui convergent sur le contexte de dépôt.', answer: 'La convergence des indices soutient mieux l’interprétation du milieu ancien.' },
          exercises: [{ question: 'Une empreinte fossile prouve-t-elle à elle seule l’identité de l’espèce qui l’a laissée ?', answer: 'Non. La trace documente une activité, mais son producteur peut rester indéterminé sans caractères diagnostiques ou fossiles corporels associés.' }],
          sources: [{ title: 'Natural History Museum — What is a fossil?', url: 'https://www.nhm.ac.uk/discover/what-is-a-fossil.html' }, { title: 'International Commission on Stratigraphy — International Stratigraphic Guide, chapitre 7', url: 'https://stratigraphy.org/guide/bio' }]
        }
      },
      {
        id: 'biodiversite', number: '03', title: 'Biodiversité et extinctions', field: 'Registre fossile',
        summary: 'Interpréter les apparitions et disparitions observées dans un registre incomplet.',
        lesson: {
          heading: 'Apparitions, disparitions et registre incomplet',
          content: `<p>À l’échelle des couches et des régions, les fossiles permettent de suivre la présence connue de groupes au cours du temps. Une première ou dernière occurrence dans un affleurement marque une limite d’observation du registre local : elle ne correspond pas automatiquement au moment exact de l’apparition ou de l’extinction biologique. Les lacunes de sédimentation, l’érosion, le faible potentiel de fossilisation et l’inégale exploration des roches peuvent déplacer ces limites apparentes.</p><p>Une <strong>extinction</strong> est la disparition d’un groupe vivant. Pour évaluer si un changement observé reflète une disparition biologique ou un défaut d’enregistrement, les chercheurs comparent des successions de couches, des régions et des groupes différents. Les extinctions rapides à l’échelle géologique peuvent être distinguées des fluctuations locales lorsqu’un signal concordant apparaît dans plusieurs archives indépendantes.</p><p>L’interprétation des grandes transitions de la biodiversité combine le registre fossile, la chronologie stratigraphique et les datations numériques disponibles. Les causes proposées doivent être évaluées avec les indices géologiques et paléontologiques associés; la simple succession de deux événements ne démontre pas à elle seule un lien de causalité.</p><p><strong>Absence observée, absence réelle.</strong> Ne pas trouver un fossile dans une couche signifie d’abord qu’il n’est pas observé dans l’échantillon étudié. Pour conclure à une extinction ou à une absence régionale, il faut examiner les lacunes et les biais de conservation et rechercher des observations indépendantes.</p>`,
          example: { statement: 'Un groupe fossile disparaît d’une succession locale, mais des roches de l’intervalle suivant manquent. Quelle conclusion faut-il éviter ?', calculation: 'L’absence de couches laisse une lacune dans l’enregistrement; la dernière occurrence locale ne fixe pas à elle seule le moment de l’extinction.', answer: 'Il faut éviter de dater l’extinction à partir de cette seule absence.' },
          exercises: [{ question: 'Quelles observations aident à distinguer une extinction d’un défaut local d’enregistrement ?', answer: 'Comparer des successions de couches, plusieurs régions et plusieurs groupes, en tenant compte des lacunes, de l’érosion et des biais de fossilisation.' }],
          sources: [{ title: 'OpenStax Biology 2e — 18.1 Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }, { title: 'International Commission on Stratigraphy — International Stratigraphic Guide, chapitre 7', url: 'https://stratigraphy.org/guide/bio' }]
        }
      }
    ]
  },

  /* =====================================================================
     BRANCHE 4 — OUTILS ET MÉTHODES
     Sources de référence : MNHN / CR2P, AMNH, Smithsonian NMNH, National Park Service.
     ===================================================================== */
  {
    id: 'outils',
    title: 'Outils et méthodes',
    note: 'Du terrain au laboratoire : découvrir, préparer, observer et documenter les fossiles.',
    chapters: [
      {
        id: 'preparation-des-fossiles', number: '01', title: 'Dégager et préparer un fossile', field: 'Préparation mécanique et chimique',
        summary: 'Documenter, extraire puis dégager un fossile de sa gangue : techniques mécaniques, chimiques et précautions.',
        lesson: {
          sections: [
            'La découverte d’un fossile ne suffit pas à permettre son étude. Le spécimen doit être documenté, extrait avec précaution si nécessaire, puis préparé pour rendre ses caractères observables. Les fossiles sont fréquemment conservés dans une roche appelée gangue ou matrice. Au laboratoire, les spécialistes choisissent les techniques de dégagement en fonction de la nature du fossile, de la roche et des objectifs scientifiques. Le Centre de recherche en paléontologie de Paris, rattaché au MNHN, au CNRS et à Sorbonne Université, décrit notamment les techniques mécaniques, les traitements chimiques, la préparation des microfossiles et la réalisation de moulages. La préparation doit préserver autant que possible les informations anatomiques et les traces de conservation.',
            'La préparation mécanique consiste à retirer progressivement la roche qui entoure le fossile à l’aide d’outils adaptés. Selon le spécimen, les spécialistes peuvent employer des aiguilles, des outils de précision, des micrograveurs ou des dispositifs d’abrasion. La préparation chimique repose sur des différences de comportement entre le fossile et sa matrice : elle n’est donc pas adaptée à tous les matériaux. Le choix d’une méthode exige de connaître les propriétés du spécimen et de la roche. Le Natural History Museum de Londres souligne que la préparation peut demander un travail prolongé et que des gestes mal adaptés risquent d’endommager le fossile. La préparation est une opération scientifique de conservation et d’observation, pas seulement une opération esthétique.'
          ],
          exercises: [
            { question: 'Pourquoi la préparation chimique n’est-elle pas adaptée à tous les fossiles ?', answer: 'Elle repose sur des différences de comportement entre le fossile et sa matrice. Le choix d’une méthode exige donc de connaître les propriétés du spécimen et de la roche.' },
            { question: 'La préparation d’un fossile est-elle seulement une opération esthétique ?', answer: 'Non. C’est une opération scientifique de conservation et d’observation : elle vise à rendre les caractères observables en préservant autant que possible les informations anatomiques et les traces de conservation.' }
          ],
          sources: [
            { title: 'MNHN / CNRS / Sorbonne Université — Dégagement, préparation et moulage', url: 'https://paleo.mnhn.fr/fr/degagement-preparation-et-moulage-373' },
            { title: 'American Museum of Natural History — Fossil Preparation', url: 'https://www.amnh.org/research/paleontology/vertebrate/fossil-preparation' },
            { title: 'Natural History Museum — Fossil preparation', url: 'https://www.nhm.ac.uk/discover/fossil-preparation.html' },
            { title: 'Smithsonian National Museum of Natural History — Fossil Preparation from Field to Museum', url: 'https://naturalhistory.si.edu/education/teaching-resources/paleontology/fossil-preparation-field-museum' }
          ]
        }
      },
      {
        id: 'microtomographie', number: '02', title: 'La microtomographie aux rayons X', field: 'Imagerie de l’anatomie interne',
        summary: 'Observer l’intérieur d’un fossile sans le découper : principe, intérêt et limites du micro-CT.',
        lesson: {
          sections: [
            'La microtomographie aux rayons X, souvent appelée micro-CT ou microtomographie X, permet d’obtenir des images de sections internes d’un objet sans devoir le découper systématiquement. Une série de projections radiographiques acquises sous différents angles est reconstruite informatiquement pour produire un volume numérique. Ce volume peut ensuite être exploré en coupes et servir à reconstruire certaines structures en trois dimensions. L’American Museum of Natural History décrit son intérêt pour l’étude de l’anatomie interne, notamment lorsque le dégagement mécanique risquerait d’endommager le spécimen. Cette technique ne fonctionne cependant pas aussi bien pour tous les fossiles : la géométrie, la composition des matériaux et le contraste entre le fossile et la roche influencent la qualité des images.'
          ],
          exercises: [
            { question: 'Un fossile est enfermé dans une gangue et sa structure interne doit être étudiée sans le dégager entièrement. Quelle méthode d’imagerie peut être envisagée ?', answer: 'La microtomographie aux rayons X peut être envisagée si les propriétés du fossile et de la matrice permettent d’obtenir un contraste suffisant. Son efficacité doit être évaluée pour le spécimen concerné.' }
          ],
          sources: [
            { title: 'American Museum of Natural History — Digital Preparation', url: 'https://www.amnh.org/research/paleontology/vertebrate/fossil-preparation/revealing/techniques/digital-preparation' },
            { title: 'MNHN / CR2P — Imagerie 3D', url: 'https://paleo.mnhn.fr/en/node/375' }
          ]
        }
      },
      {
        id: 'photogrammetrie', number: '03', title: 'La photogrammétrie', field: 'Documentation des surfaces',
        summary: 'Reconstruire la surface 3D d’un fossile ou d’une empreinte à partir de photographies.',
        lesson: {
          sections: [
            'La photogrammétrie permet de reconstruire la surface tridimensionnelle d’un objet à partir de plusieurs photographies prises depuis des points de vue différents. Des logiciels repèrent des caractéristiques communes entre les images et estiment leur géométrie pour calculer un modèle 3D. Le National Park Service décrit l’utilisation de cette méthode pour documenter des os, des dents, des empreintes et d’autres traces fossiles. La qualité du modèle dépend notamment des photographies, de la couverture des surfaces, de l’éclairage, de la texture de l’objet et de l’échelle de référence. Un modèle photogrammétrique représente les surfaces effectivement documentées ; il ne révèle pas, à lui seul, les structures internes cachées dans la roche.'
          ],
          exercises: [
            { question: 'Quel est l’intérêt d’un modèle photogrammétrique d’une empreinte fossile ?', answer: 'Il permet de documenter la géométrie de la surface, de réaliser certaines mesures et de partager une représentation numérique. Il ne révèle pas automatiquement les structures internes et sa précision dépend de l’acquisition et de l’échelle.' }
          ],
          sources: [
            { title: 'U.S. National Park Service — Photogrammetry: Fossils in 3D', url: 'https://www.nps.gov/subjects/fossils/photogrammetry.htm' }
          ]
        }
      },
      {
        id: 'numerisation-impression-3d', number: '04', title: 'Numérisation et impression 3D', field: 'Modèles numériques et répliques',
        summary: 'Visualiser, mesurer et reproduire un spécimen : apports et limites des modèles 3D et des répliques.',
        lesson: {
          sections: [
            'La numérisation 3D et l’impression 3D complètent ces méthodes. Un modèle numérique peut être utilisé pour visualiser un spécimen, effectuer certaines mesures, préparer une comparaison morphologique ou produire une réplique. Le modèle imprimé n’est toutefois pas le fossile original : il dépend des données d’acquisition, du traitement informatique et des capacités de l’imprimante. L’AMNH décrit l’emploi de modèles issus de scans de surface ou de microtomographies pour reproduire des formes fossiles et faciliter leur étude. Les répliques sont particulièrement utiles lorsque la manipulation de l’original doit être limitée. Il faut néanmoins distinguer les informations réellement enregistrées par le scan des éléments reconstitués ou interprétés lors du traitement.'
          ],
          exercises: [
            { question: 'Une réplique imprimée en 3D peut-elle remplacer le fossile original dans une étude ?', answer: 'Non. Le modèle imprimé dépend des données d’acquisition, du traitement informatique et des capacités de l’imprimante. Il est utile pour limiter la manipulation de l’original, mais il faut distinguer ce que le scan a réellement enregistré de ce qui a été reconstitué ou interprété.' }
          ],
          sources: [
            { title: 'American Museum of Natural History — Digital Preparation', url: 'https://www.amnh.org/research/paleontology/vertebrate/fossil-preparation/revealing/techniques/digital-preparation' },
            { title: 'MNHN / CR2P — Imagerie 3D', url: 'https://paleo.mnhn.fr/en/node/375' }
          ]
        }
      },
      {
        id: 'mesure-et-echelle', number: '05', title: 'Mesurer sur une image : l’échelle', field: 'Mesure et calibration',
        summary: 'Retrouver une dimension réelle à partir d’une image calibrée et éviter les erreurs de mesure.',
        lesson: {
          formula: {
            label: 'ÉCHELLE D’UNE IMAGE',
            text: 'échelle = dimension sur l’image / dimension réelle'
          },
          equationDetails: [
            {
              title: 'Déterminer une dimension réelle à partir d’une image calibrée',
              formula: 'dimension réelle = dimension mesurée sur l’image / échelle',
              explanation: 'Lorsqu’une image possède une échelle connue et que les deux dimensions sont mesurées dans la même unité sur l’image, le rapport permet de retrouver la dimension réelle. Pour une photographie numérique, il faut connaître la calibration ou utiliser une échelle de référence présente dans des conditions de prise de vue appropriées.',
              parameters: 'Dimension sur l’image : longueur mesurée dans l’image ; dimension réelle : longueur correspondante sur le spécimen ; échelle : rapport entre la dimension sur l’image et la dimension réelle.',
              example: 'Exemple pédagogique : une structure mesure 30 mm sur une représentation dont l’échelle vaut 3. Sa dimension réelle est 30 / 3 = 10 mm.',
              result: 'Une mesure sur image n’est exploitable quantitativement que si l’échelle et les conditions de mesure sont connues. Une image redimensionnée sans calibration peut rendre la mesure incorrecte.'
            }
          ],
          exercises: [
            { question: 'Une structure fossile mesure 24 mm sur une image calibrée à l’échelle 4. Quelle est sa dimension réelle ?', answer: 'Dimension réelle = 24 / 4 = 6 mm.' },
            { question: 'Deux photographies montrent le même fossile, mais la seconde a été redimensionnée. Peut-on comparer directement les longueurs mesurées en pixels ?', answer: 'Non. Il faut calibrer chaque image ou utiliser une référence d’échelle fiable. Le nombre de pixels ne correspond pas à une longueur réelle constante lorsque le grossissement ou le redimensionnement varie.' }
          ],
          sources: [
            { title: 'U.S. National Park Service — Photogrammetry: Fossils in 3D', url: 'https://www.nps.gov/subjects/fossils/photogrammetry.htm' }
          ]
        }
      },
      {
        id: 'tracabilite-et-documentation', number: '06', title: 'Traçabilité et documentation', field: 'Valeur scientifique du spécimen',
        summary: 'Pourquoi le lieu, le niveau géologique et l’historique de préparation comptent autant que le fossile.',
        lesson: {
          sections: [
            'La valeur scientifique d’un fossile dépend aussi des informations qui accompagnent le spécimen. Le lieu et les conditions de découverte, le niveau géologique lorsqu’il est connu, les photographies de terrain, les numéros d’inventaire et l’historique de préparation contribuent à sa traçabilité. Un modèle 3D ne remplace donc pas automatiquement les observations de terrain ni la documentation de la collection. Les méthodes doivent être choisies selon la question scientifique : dégager une structure anatomique, observer l’intérieur d’un objet, mesurer une surface ou conserver une trace numérique. Une étude rigoureuse indique les limites de la méthode, les transformations appliquées aux données et les incertitudes pertinentes.'
          ],
          exercises: [
            { question: 'Un modèle 3D remplace-t-il les observations de terrain et la documentation de la collection ?', answer: 'Non. La valeur scientifique d’un fossile dépend aussi du lieu et des conditions de découverte, du niveau géologique, des photographies de terrain, des numéros d’inventaire et de l’historique de préparation.' }
          ],
          sources: [
            { title: 'Smithsonian National Museum of Natural History — Fossil Preparation from Field to Museum', url: 'https://naturalhistory.si.edu/education/teaching-resources/paleontology/fossil-preparation-field-museum' },
            { title: 'MNHN / CNRS / Sorbonne Université — Dégagement, préparation et moulage', url: 'https://paleo.mnhn.fr/fr/degagement-preparation-et-moulage-373' }
          ]
        }
      }
    ]
  },

  /* =====================================================================
     BRANCHE 5 — LES GRANDS LIVRES
     ===================================================================== */
  {
    id: 'grands-livres',
    title: 'Les grands livres de la paléontologie',
    note: 'Dix ouvrages qui ont marqué la paléontologie, présentés sous forme de fiches.',
    chapters: [
      {
        id: 'cuvier-ossemens-fossiles', number: '01', title: 'Recherches sur les ossemens fossiles de quadrupèdes', field: 'Les grands livres',
        summary: 'Georges Cuvier, 1812.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Recherches sur les ossemens fossiles de quadrupèdes, où l’on rétablit les caractères de plusieurs espèces d’animaux que les révolutions du globe paroissent avoir détruites</p><p><strong>Auteur :</strong> Georges Cuvier (l’essai sur la géographie minéralogique des environs de Paris est écrit en collaboration avec Alexandre Brongniart)</p><p><strong>Édition :</strong> Paris, chez Deterville. Édition originale en quatre volumes in-quarto, illustrée de planches gravées.</p><p><strong>Date de parution :</strong> 1812</p><p><strong>Résumé :</strong> Cuvier y réunit ses travaux sur les ossements fossiles de quadrupèdes (éléphants, mammouths, rhinocéros, ruminants, carnivores…), mêlant paléontologie, ostéologie et stratigraphie. En comparant les fossiles aux squelettes des espèces vivantes, il établit que des espèces ont disparu, et il avance que des « révolutions » naturelles du globe ont pu les détruire.</p><p>Dans le discours qui ouvre le premier volume, Cuvier exprime l’ambition de franchir les limites du temps pour retrouver l’histoire de la Terre avant l’humanité. L’ouvrage est considéré comme l’un des textes fondateurs de la paléontologie des vertébrés.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Whipple Library (Université de Cambridge) — Cuvier, Recherches sur les ossemens fossiles', url: 'https://www.whipplelib.hps.cam.ac.uk/special/exhibitions-and-displays/exploring-deep-history/cuvier' }, { title: 'Smithsonian Libraries — exemplaire numérisé (tome 3)', url: 'https://library.si.edu/es/digital-library/book/recherchessurles31812cuvi' }]
        }
      },
      {
        id: 'darwin-origine-des-especes', number: '02', title: 'On the Origin of Species', field: 'Les grands livres',
        summary: 'Charles Darwin, 1859.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life</p><p><strong>Auteur :</strong> Charles Darwin</p><p><strong>Édition :</strong> Londres, John Murray. Première édition, tirée à 1 250 exemplaires. Traduction française : <em>De l’origine des espèces</em>, par Clémence Royer, Paris, Guillaumin et Masson, 1862 (première édition française).</p><p><strong>Date de parution :</strong> Novembre 1859</p><p><strong>Résumé :</strong> Darwin y présente sa théorie de l’évolution : les espèces ne sont pas fixes, elles se transforment au fil des générations, et la sélection naturelle est le mécanisme principal de ces transformations. Il présente lui-même le livre comme un résumé de ses vues.</p><p>Deux chapitres concernent directement les fossiles : le chapitre IX sur l’imperfection des archives géologiques (<em>On the Imperfection of the Geological Record</em>) et le chapitre X sur la succession géologique des êtres organisés (<em>On the Geological Succession of Organic Beings</em>).</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Darwin Correspondence Project — l’édition française de 1862 (Royer)', url: 'https://www.darwinproject.ac.uk/view/letters/DCP-LETT-3250' }, { title: 'Darwin Correspondence Project — John Murray, éditeur de l’Origin', url: 'https://www.darwinproject.ac.uk/taxonomy/term/63' }]
        }
      },
      {
        id: 'simpson-tempo-and-mode', number: '03', title: 'Tempo and Mode in Evolution', field: 'Les grands livres',
        summary: 'George Gaylord Simpson, 1944.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Tempo and Mode in Evolution</p><p><strong>Auteur :</strong> George Gaylord Simpson</p><p><strong>Édition :</strong> New York, Columbia University Press, collection « Columbia Biological Series », n° 15 (xviii + 237 pages). Réédité en 1984 par Columbia University Press avec une nouvelle introduction de l’auteur.</p><p><strong>Date de parution :</strong> 1944</p><p><strong>Résumé :</strong> Simpson confronte les données de la paléontologie à celles de la génétique. Il distingue le « tempo » de l’évolution (vitesses d’évolution, accélérations et ralentissements) de son « mode » (la manière et le schéma selon lesquels elle se déroule).</p><p>Il soutient que les mécanismes étudiés par la génétique des populations suffisent à expliquer les grands schémas observés dans les fossiles. L’ouvrage est une contribution majeure à la théorie synthétique de l’évolution.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Wellcome Collection — notice bibliographique', url: 'https://works.wellcomecollection.org/works/nej9t35x' }, { title: 'Notice de la réédition de 1984 (UC San Diego, Anthropogeny)', url: 'https://carta.anthropogeny.org/node/1472' }]
        }
      },
      {
        id: 'gould-wonderful-life', number: '04', title: 'Wonderful Life: The Burgess Shale and the Nature of History', field: 'Les grands livres',
        summary: 'Stephen Jay Gould, 1989.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Wonderful Life: The Burgess Shale and the Nature of History</p><p><strong>Auteur :</strong> Stephen Jay Gould</p><p><strong>Édition :</strong> New York, W. W. Norton &amp; Company, première édition (347 pages). Traduction française : <em>La Vie est belle</em>, Éditions du Seuil, 1991.</p><p><strong>Date de parution :</strong> 1989</p><p><strong>Résumé :</strong> Le Burgess Shale est un gisement des Rocheuses canadiennes (Colombie-Britannique) qui a livré des animaux du Cambrien. Il a été découvert en 1909 par Charles D. Walcott, qui avait rattaché ses fossiles à des groupes d’animaux actuels. Plus de soixante ans plus tard, trois chercheurs britanniques les ont réexaminés, avec des résultats qui ont modifié la vision de l’histoire de la vie.</p><p>Gould s’appuie sur ce réexamen pour défendre le rôle de la contingence dans l’histoire de la vie : si l’on pouvait « rembobiner la bande de la vie » et la rejouer, le résultat pourrait être très différent.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Publishers Weekly — notice du livre', url: 'https://www.publishersweekly.com/9780393027051' }, { title: 'Notice de bibliothèque (1re éd., Norton, 1989)', url: 'https://library.usi.edu/record/129953' }]
        }
      },
      {
        id: 'benton-vertebrate-palaeontology', number: '05', title: 'Vertebrate Palaeontology', field: 'Les grands livres',
        summary: 'Michael J. Benton, 1990.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Vertebrate Palaeontology: Biology and Evolution (titre de la 1re édition)</p><p><strong>Auteur :</strong> Michael J. Benton (Université de Bristol)</p><p><strong>Édition :</strong> Londres, Unwin Hyman, 1re édition (xii + 377 pages). Le manuel a connu cinq éditions successives, de 1990 à 2024.</p><p><strong>Date de parution :</strong> 1990 (1re édition)</p><p><strong>Résumé :</strong> Manuel universitaire de paléontologie des vertébrés, destiné aux cours de biologie et de géologie. Il présente l’histoire évolutive des vertébrés avec une approche fortement phylogénétique, et montre comment les paléontologues obtiennent leurs informations.</p><p>Les éditions successives ont été mises à jour avec les découvertes et les travaux publiés depuis la précédente.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Notice de bibliothèque (Unwin Hyman, 1990)', url: 'https://lib.ecu.edu/catalog-preview/catalog/474688' }, { title: 'Wikipédia (en) — Vertebrate Palaeontology (book)', url: 'https://en.wikipedia.org/wiki/Vertebrate_Palaeontology_(book)' }]
        }
      },
      {
        id: 'alvarez-t-rex-crater-of-doom', number: '06', title: 'T. rex and the Crater of Doom', field: 'Les grands livres',
        summary: 'Walter Alvarez, 1997.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> T. rex and the Crater of Doom</p><p><strong>Auteur :</strong> Walter Alvarez (géologue, Université de Californie à Berkeley)</p><p><strong>Édition :</strong> Princeton (New Jersey), Princeton University Press (xii + 185 pages).</p><p><strong>Date de parution :</strong> 1997</p><p><strong>Résumé :</strong> Walter Alvarez, l’un des scientifiques de Berkeley qui ont découvert les premiers indices d’un impact, raconte comment l’hypothèse d’un impact d’astéroïde ou de comète à la fin du Crétacé (environ 65 millions d’années dans le livre) s’est construite pour expliquer l’extinction des dinosaures. Controversée dans les années 1980, elle a été confirmée par la découverte du cratère de Chicxulub, au nord de la péninsule du Yucatán.</p><p>Ce cratère avait été repéré en 1950 par des géologues mexicains, mais il est resté presque inconnu des autres scientifiques jusqu’en 1991. Le livre a figuré parmi les « Notable Books » du New York Times en 1997.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Princeton University Press — présentation du livre', url: 'https://press.princeton.edu/node/57521' }, { title: 'Notice de bibliothèque (Princeton University Press, 1997)', url: 'https://library.usi.edu/record/192911' }]
        }
      },
      {
        id: 'fortey-trilobite', number: '07', title: 'Trilobite! Eyewitness to Evolution', field: 'Les grands livres',
        summary: 'Richard Fortey, 2000.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Trilobite! Eyewitness to Evolution</p><p><strong>Auteur :</strong> Richard Fortey (paléontologue, Natural History Museum, Londres)</p><p><strong>Édition :</strong> Londres, HarperCollins, 2000 (édition britannique). Édition américaine : New York, Alfred A. Knopf, parue le 6 novembre 2000.</p><p><strong>Date de parution :</strong> 2000</p><p><strong>Résumé :</strong> Richard Fortey, spécialiste des trilobites, consacre ce livre à ces arthropodes marins du Paléozoïque, qui ont duré environ trois cents millions d’années. Il évoque l’histoire de leur recherche, leur anatomie (leurs yeux étaient faits de calcite), son parcours de chercheur et de voyageur, et ce que ces fossiles apprennent sur l’évolution et sur la géographie des anciens océans et continents.</p><p>Le titre fait des trilobites des « témoins oculaires de l’évolution », dont l’abondance, la longévité et la variété sont centrales pour comprendre comment l’évolution s’est déroulée.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Kirkus Reviews — Trilobite!', url: 'https://www.kirkusreviews.com/book-reviews/richard-fortey/trilobite' }, { title: 'Notice de bibliothèque (Knopf, 2000)', url: 'https://library.usi.edu/record/245633' }]
        }
      },
      {
        id: 'benton-when-life-nearly-died', number: '08', title: 'When Life Nearly Died: The Greatest Mass Extinction of All Time', field: 'Les grands livres',
        summary: 'Michael J. Benton, 2003.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> When Life Nearly Died: The Greatest Mass Extinction of All Time</p><p><strong>Auteur :</strong> Michael J. Benton (Université de Bristol)</p><p><strong>Édition :</strong> Londres, Thames &amp; Hudson, 1re édition (336 pages).</p><p><strong>Date de parution :</strong> 2003</p><p><strong>Résumé :</strong> Le livre est consacré à l’extinction de masse de la fin du Permien, il y a environ 251 millions d’années (date retenue dans le livre), au cours de laquelle environ 90 % des espèces auraient disparu, sur terre comme en mer. Benton retrace l’histoire des idées sur le catastrophisme, puis les recherches menées du terrain (Groenland, Russie) au laboratoire.</p><p>Il examine les causes possibles — impact d’une météorite ou d’une comète, ou longue activité volcanique en Sibérie — et donne son verdict à la fin du livre. Le dernier chapitre s’interroge sur une éventuelle « sixième extinction de masse ».</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Notice de bibliothèque (Thames & Hudson, 2003)', url: 'https://library.usi.edu/record/267414' }, { title: 'SERC (Carleton College) — résumé de l’ouvrage', url: 'https://serc.carleton.edu/resources/1321.html' }]
        }
      },
      {
        id: 'rudwick-bursting-the-limits-of-time', number: '09', title: 'Bursting the Limits of Time', field: 'Les grands livres',
        summary: 'Martin J. S. Rudwick, 2005.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Bursting the Limits of Time: The Reconstruction of Geohistory in the Age of Revolution</p><p><strong>Auteur :</strong> Martin J. S. Rudwick</p><p><strong>Édition :</strong> Chicago et Londres, University of Chicago Press (xxiv + 708 pages). Livre issu des Tarner Lectures données au Trinity College (Cambridge) en 1996.</p><p><strong>Date de parution :</strong> 2005</p><p><strong>Résumé :</strong> Étude historique sur la manière dont les savants de la fin du XVIIIe et du début du XIXe siècle ont reconstruit l’histoire de la Terre (la « géohistoire ») et reconnu ce que l’on appelle aujourd’hui le temps profond. Le récit part de la création datée de 4004 av. J.-C. par l’archevêque Ussher en 1650, croyance qui n’a été définitivement abandonnée qu’au cours de cette période.</p><p>L’ouvrage couvre environ quarante ans autour de la Révolution française et des guerres napoléoniennes, et montre comment des géologues et des paléontologues ont assemblé peu à peu cette histoire.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Wellcome Collection — notice bibliographique', url: 'https://identity.wellcomecollection.org/works/tb7zmwz4' }, { title: 'Notice de bibliothèque (University of Chicago Press, 2005)', url: 'https://library.usi.edu/record/326986' }]
        }
      },
      {
        id: 'shubin-your-inner-fish', number: '10', title: 'Your Inner Fish', field: 'Les grands livres',
        summary: 'Neil Shubin, 2008.',
        lesson: {
          heading: 'Fiche du livre',
          content: "<p><strong>Titre complet :</strong> Your Inner Fish: A Journey into the 3.5-Billion-Year History of the Human Body</p><p><strong>Auteur :</strong> Neil Shubin (paléontologue et professeur d’anatomie, Université de Chicago)</p><p><strong>Édition :</strong> New York, Pantheon Books, 1re édition (229 pages).</p><p><strong>Date de parution :</strong> 2008</p><p><strong>Résumé :</strong> Neil Shubin, codécouvreur de <em>Tiktaalik</em> (un poisson fossile d’environ 375 millions d’années découvert en 2004 au Nunavut, dans l’Arctique canadien, et annoncé en avril 2006), raconte l’histoire de l’évolution en suivant les organes du corps humain.</p><p>En s’appuyant sur les fossiles et sur l’ADN, il montre que nos mains rappellent des nageoires de poissons, que l’organisation de notre tête évoque celle d’un poisson sans mâchoire disparu et que des parties importantes de notre génome ressemblent à celles de vers et de bactéries.</p>",
          sourcesHeading: 'Notices bibliographiques',
          sources: [{ title: 'Notice de bibliothèque (Pantheon Books, 2008)', url: 'https://lib.ecu.edu/catalog-preview/catalog/1345623' }, { title: 'Canadian Medical Association Journal — compte rendu', url: 'https://www.cmaj.ca/content/180/4/434' }]
        }
      }
    ]
  },
// BRANCHE : LES LICHENS
// À coller à la suite des autres branches du tableau window.courseCatalog (après la virgule de la branche précédente).

  {
    id: 'lichens',
    title: 'Les Lichens',
    note: 'Sept chapitres sur la nature symbiotique des lichens, l’histoire de leur découverte, leur structure, leur reproduction, leur écologie, leur usage comme bioindicateurs et leur histoire fossile. Les nombres d’espèces et les âges fossiles sont des estimations qui varient selon les sources et les méthodes.',
    chapters: [
      {
        id: 'lichens-symbiose',
        title: 'Qu’est-ce qu’un lichen ? Une symbiose entre un champignon et un photobionte',
        field: 'Biologie · Symbiose, mycobionte et photobionte',
        summary: 'Comprendre pourquoi un lichen n’est pas un organisme unique, quels sont ses partenaires et ce que chacun apporte à l’association.',
        lesson: {
          sections: [
            'Un lichen n’est pas un organisme unique : c’est une symbiose entre un champignon et une algue ou une cyanobactérie. Le partenaire qui contient de la chlorophylle s’appelle le photobionte ; le partenaire fongique s’appelle le mycobionte. Les cyanobactéries, parfois appelées « algues bleues », sont en réalité des bactéries, distinctes des algues. La plupart des lichens associent un mycobionte et un photobionte, mais certains possèdent plus d’un photobionte.',
            'Au microscope, le champignon apparaît formé de filaments cellulaires appelés hyphes, qui poussent par extension et se ramifient en gardant un diamètre constant. Les photobiontes peuvent être eux aussi filamenteux, ou formés de chaînes ou d’amas de cellules plus ou moins sphériques. Le thalle, c’est-à-dire le corps du lichen, résulte de l’association de ces deux types de cellules, si étroitement unies qu’on a l’impression de regarder un seul organisme.',
            'Les échanges reposent d’abord sur le carbone. Grâce à la photosynthèse, l’algue ou la cyanobactérie fabrique des glucides à partir de la lumière ; un champignon, lui, ne fabrique pas ses propres glucides et doit puiser son carbone dans de la matière organique déjà existante. Dans un lichen, une partie des glucides du photobionte est donc « récoltée » par le mycobionte. En contrepartie, selon la note de Taylor et de ses collègues publiée dans Nature en 1995, le photobionte reçoit protection, nutriments et eau. Cette relation va du mutualisme au parasitisme contrôlé : elle n’est pas toujours équilibrée.',
            'Les lichens sont classés avec les champignons, c’est pourquoi on parle de champignons lichénisés. Les champignons impliqués sont en très grande majorité des ascomycètes, avec très peu de basidiomycètes. On connaît entre 18 000 et un peu plus de 20 000 espèces de lichens dans le monde selon les sources, dont plus de 3 000 en Australie. D’après l’Australian National Botanic Gardens, les champignons qui forment des lichens ne se rencontrent pas dans la nature comme organismes indépendants, alors que plusieurs photobiontes, en particulier des algues, vivent à l’état libre.',
            'Un lichen est plus que la somme de ses parties. Il possède des structures qu’aucun des deux partenaires ne forme seul et il produit des substances généralement absentes quand le champignon et le photobionte sont cultivés séparément : les lichens synthétisent plus de 800 substances, dont beaucoup ne se trouvent nulle part ailleurs dans la nature. On sait cultiver séparément les deux partenaires, mais il est difficile de refaire un lichen en laboratoire. La resynthèse a réussi lorsque le champignon et le photobionte étaient soumis à un stress (eau et nutriments réduits), ce qui suggère, selon l’ANBG, que ces associations se sont formées à l’origine pour surmonter l’adversité.',
            'Plusieurs noms trompent. La « mousse d’Islande » (Cetraria islandica) et la « mousse des rennes » (Cladina rangifera) sont des lichens et non des mousses : les mousses sont des végétaux, alors que les lichens sont classés avec les champignons. Les maladies de peau dont le nom contient « lichen » (le lichen plan, par exemple) n’ont aucun lien avec les lichens, hormis le nom : le mot vient d’un terme grec qui désignait déjà à la fois des organismes poussant sur les arbres et une affection cutanée pustuleuse.'
          ],
          example: {
            statement: 'Un lichen est formé d’un champignon et d’une cyanobactérie. Est-ce un seul organisme ? Quel partenaire fabrique les glucides par photosynthèse ?',
            calculation: 'On distingue les rôles : le mycobionte (le champignon) ne fabrique pas ses propres glucides ; le photobionte (algue ou cyanobactérie) contient de la chlorophylle et réalise la photosynthèse.',
            answer: 'Non : un lichen est une symbiose entre plusieurs organismes. Les glucides sont fabriqués par le photobionte (ici la cyanobactérie), et une partie est utilisée par le champignon.'
          },
          exercise: {
            question: 'Pourquoi appelle-t-on les lichens des « champignons lichénisés » ?',
            answer: 'Parce qu’ils sont classés avec les champignons : le partenaire fongique détermine leur classification, et ce champignon vit associé à une algue ou à une cyanobactérie.'
          },
          exercises: [
            {
              question: 'Comment s’appellent le partenaire fongique et le partenaire photosynthétique d’un lichen ?',
              answer: 'Le mycobionte (le champignon) et le photobionte (l’algue ou la cyanobactérie).'
            },
            {
              question: 'Un lichen contient-il toujours un seul photobionte ?',
              answer: 'Non. La plupart des lichens associent un mycobionte et un photobionte, mais certains possèdent plus d’un photobionte.'
            },
            {
              question: 'D’après l’Australian National Botanic Gardens, les champignons lichénisés vivent-ils librement dans la nature ? Et les photobiontes ?',
              answer: 'Les champignons qui forment des lichens ne se rencontrent pas dans la nature comme organismes indépendants, alors que plusieurs photobiontes, notamment des algues, vivent à l’état libre.'
            },
            {
              question: 'La « mousse d’Islande » est-elle une mousse ?',
              answer: 'Non. C’est un lichen (Cetraria islandica). Les mousses sont des végétaux, alors que les lichens sont classés avec les champignons.'
            }
          ],
          sources: [
            { title: 'Australian National Botanic Gardens — What is a lichen?', url: 'https://anbg.gov.au/lichen/what-is-lichen.html' },
            { title: 'Taylor, Hass, Remy & Kerp (1995), Nature 378 : 244 — The oldest fossil lichen', url: 'https://www-archiv.fdm.uni-hamburg.de/b-online/kerp/nature.html' },
            { title: 'Botany Brisbane — Lichen basics', url: 'https://www.botanybrisbane.com/?p=16574' },
            { title: 'Hawksworth & Grube — Lichens redefined as complex ecosystems (New Phytologist, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7497170' }
          ]
        }
      },

      {
        id: 'lichens-decouverte',
        title: 'De Schwendener à la levure : l’histoire d’une découverte',
        field: 'Histoire des sciences · De 1867 à aujourd’hui',
        summary: 'Retracer comment la nature composite des lichens a été reconnue, puis comment la découverte de partenaires supplémentaires a remis en question la définition classique.',
        lesson: {
          sections: [
            'Pendant longtemps, les lichens ont été classés comme des êtres vivants uniques. La reconnaissance de leur nature double, une association entre un champignon et une algue, est attribuée au botaniste suisse Simon Schwendener, en 1867 (certaines sources citent 1868).',
            'Le mot « symbiose » est lui-même né de l’étude des lichens. Albert Bernhard Frank l’a employé au sens biologique, sous la forme « Symbiotismus », après avoir étudié au microscope cinq lichens crustacés, au milieu des années 1870 (1876 ou 1877 selon les publications). Anton de Bary est souvent cité comme l’inventeur du terme à cause d’une conférence donnée à la fin des années 1870, mais il connaissait le travail de Frank. Le sens général de « vie en commun d’organismes différents » est donc issu de ces débats sur les lichens.',
            'L’image d’un duo champignon-photobionte reste utile, mais elle est aujourd’hui considérée comme une simplification. On a trouvé dans les thalles des lichens d’autres organismes : des champignons lichénicoles, des levures et des bactéries associées. Cette diversité est l’une des raisons pour lesquelles des auteurs ont proposé de revoir la définition même du mot « lichen ».',
            'En 2016, une équipe dirigée par Toby Spribille publie dans Science (volume 353, pages 488-492) un article intitulé « Basidiomycete yeasts in the cortex of ascomycete macrolichens ». L’enquête était partie d’une différence entre deux lichens du genre Bryoria, Bryoria fremontii et Bryoria tortuosa, que l’on avait regroupés comme « espèces » synonymes mais qui diffèrent par leur production d’acide vulpinique. Une analyse des transcriptomes a révélé des séquences d’un champignon basidiomycète. Des sondes d’hybridation (FISH) ont ensuite montré que ce champignon était abondant, sous forme de levures, dans le cortex du lichen.',
            'Les auteurs ont détecté ce groupe de levures dans une grande variété de lichens grâce à des amorces PCR spécifiques. Ils en ont conclu qu’il constitue un composant intégral du cortex supérieur, et ils ont proposé que chaque espèce de lichen porte une souche génétiquement distincte. Cette lignée a été rattachée à un nouvel ordre de basidiomycètes, les Cyphobasidiales ; le genre Cyphobasidium n’était auparavant connu que comme champignon formant des galles sur des lichens.',
            'Le rôle exact de cette levure reste incertain et plusieurs spécialistes discutent encore de sa place dans l’association : en faire un « troisième partenaire » est une hypothèse, pas un fait établi. En 2020, David Hawksworth et Martin Grube ont proposé de considérer le lichen comme un écosystème complexe (un holobionte), qui inclut le mycobionte, le photobionte et d’autres organismes associés.'
          ],
          example: {
            statement: 'La nature double des lichens est reconnue en 1867. Frank étudie la symbiose chez cinq lichens crustacés en 1876. Combien d’années séparent ces deux dates ?',
            calculation: 'On soustrait les deux années : 1876 − 1867 = 9.',
            answer: 'Neuf ans (dix ans si l’on retient la date de 1877, que certaines publications donnent pour le travail de Frank).'
          },
          exercise: {
            question: 'Pourquoi la découverte de 2016 a-t-elle remis en cause la définition classique du lichen ?',
            answer: 'Parce qu’elle a montré la présence, dans le cortex de nombreux macrolichens, d’une levure de basidiomycète en plus du champignon ascomycète et du photobionte, ce qui suggérait un partenaire supplémentaire.'
          },
          exercises: [
            {
              question: 'Quel botaniste est associé à la reconnaissance de la nature double des lichens en 1867 ?',
              answer: 'Simon Schwendener.'
            },
            {
              question: 'Sur quel type de lichens Albert Bernhard Frank a-t-il étudié la symbiose ?',
              answer: 'Sur cinq lichens crustacés, étudiés au microscope.'
            },
            {
              question: 'Dans quels lichens la levure basidiomycète a-t-elle d’abord été découverte en 2016 ?',
              answer: 'Dans deux macrolichens du genre Bryoria, Bryoria fremontii et Bryoria tortuosa, avant d’être détectée dans de nombreux autres lichens.'
            },
            {
              question: 'Le rôle de cette levure dans le lichen est-il établi ?',
              answer: 'Non. Son rôle exact reste incertain et sa place dans l’association est encore discutée.'
            }
          ],
          sources: [
            { title: 'Hawksworth & Grube — Lichens redefined as complex ecosystems (New Phytologist, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7497170' },
            { title: 'IMA Fungus — Transcriptomics leads to discovery of basidiomycete yeasts on lichen cortices', url: 'https://imafungus.biomedcentral.com/articles/10.1007/BF03449421' },
            { title: 'Botany One — Lichens now 50% bigger…', url: 'https://botany.one/2016/11/lichens-now-50-bigger/' },
            { title: 'Science Notes — What is a lichen? Definition and facts', url: 'https://sciencenotes.org/what-is-a-lichen-definition-and-facts/' }
          ]
        }
      },

      {
        id: 'lichens-structure',
        title: 'Structure du thalle et formes de croissance',
        field: 'Biologie · Morphologie des lichens',
        summary: 'Reconnaître les grandes formes de croissance des lichens et comprendre l’organisation interne d’un thalle.',
        lesson: {
          sections: [
            'On décrit les lichens par leur forme de croissance, c’est-à-dire par la forme de leur thalle. Trois types sont très courants. Les lichens fruticuleux sont dressés ou pendants et nettement tridimensionnels (le genre Usnea en est un exemple). Les lichens crustacés sont nettement bidimensionnels et fixés au substrat par toute leur face inférieure, ce qui empêche de voir celle-ci : ils ressemblent à une fine croûte (le genre orange Caloplaca en est un exemple). Les lichens foliacés se situent entre les deux : tridimensionnels mais étalés en feuillets souvent lobés, ils ne sont pas fixés par toute leur face inférieure, et certains ne sont attachés que par le centre (Xanthoparmelia substrigosa en est un exemple).',
            'D’autres termes complètent cette liste. Un lichen squamuleux ressemble à un semis de petites écailles sur le substrat : c’est souvent le cas du genre Cladonia, dont les espèces produisent aussi des structures dressées appelées podétions. Un lichen byssoïde a un aspect laineux, comme du coton légèrement étiré. Un lichen lépreux est poudreux ou granuleux. Un lichen placodioïde est crustacé au centre et un peu foliacé sur les bords (Placopsis perrugosa en est un exemple). Ces termes sont utiles mais imprécis : on discute encore de leurs limites, et certains spécialistes considèrent les formes squamuleuses et placodioïdes comme de simples variantes de lichens crustacés.',
            'Les termes macrolichen et microlichen ne désignent pas la taille. Grosso modo, un macrolichen est un lichen foliacé ou fruticuleux, et tous les autres sont des microlichens. Une espèce foliacée qui atteint un centimètre de diamètre est un macrolichen, alors qu’une espèce crustacée dépassant 10 centimètres de diamètre reste un microlichen.',
            'Examinons la coupe d’un lichen foliacé. La face supérieure est formée d’hyphes serrées, le cortex supérieur. Juste en dessous se trouve une couche de cellules du photobionte, puis la médulle, une zone d’hyphes lâches où le champignon stocke les nutriments qu’il a récoltés. La face inférieure est un second cortex, d’où partent les rhizines : des faisceaux d’hyphes en forme de racines qui ancrent le thalle au substrat. Les lichens n’ont ni racines, ni tiges, ni feuilles au sens des plantes.',
            'Cette organisation varie selon les formes. Un lichen crustacé n’a pas de cortex inférieur. Chez un lichen fruticuleux, on ne peut pas parler de face supérieure ou inférieure : le cortex forme la couche externe de chaque branche, les cellules du photobionte sont juste en dessous et la médulle occupe le centre. Certaines espèces n’ont pas de rhizines, comme Xanthoparmelia convoluta, un lichen vagabond qui repose librement sur le sol et peut être déplacé par le vent ou par l’eau. Dans quelques genres seulement, les cellules du photobionte sont dispersées dans tout le thalle au lieu de former une seule bande.',
            'Il faut distinguer le thalle, partie végétative du lichen, des organes de reproduction du champignon. Les apothécies, par exemple, sont des disques où le champignon produit ses spores ; elles ne font pas partie du thalle. En général, une espèce garde la même forme de croissance partout où elle pousse, mais on observe parfois des variations. Siphula coriacea est ainsi formée de lobes dressés gris-bleu, de plus d’un centimètre dans les endroits humides et abrités, et de quelques millimètres seulement dans les zones plus sèches de l’intérieur de l’Australie ; une forme à thalles en disques a même été trouvée dans le parc national d’Idalia (Queensland).'
          ],
          example: {
            statement: 'On observe un lichen plat, lobé, attaché au rocher par un seul point central. On voit facilement ses deux faces. De quelle forme de croissance s’agit-il ?',
            calculation: 'Un lichen crustacé adhère par toute sa face inférieure, donc on ne voit pas celle-ci. Un lichen fruticuleux est dressé ou pendant. Un lichen plat et lobé, dont on voit les deux faces, correspond au type intermédiaire.',
            answer: 'Il s’agit d’un lichen foliacé.'
          },
          exercise: {
            question: 'Pourquoi ne peut-on pas voir la face inférieure d’un lichen crustacé ?',
            answer: 'Parce qu’il est fixé au substrat par toute sa face inférieure : il ressemble à une croûte collée à la surface et n’a pas de cortex inférieur.'
          },
          exercises: [
            {
              question: 'Quel est le rôle des rhizines ?',
              answer: 'Ce sont des faisceaux d’hyphes en forme de racines qui ancrent le thalle au substrat. Ce ne sont pas de vraies racines, car les lichens n’en ont pas.'
            },
            {
              question: 'Un microlichen est-il forcément petit ?',
              answer: 'Non. Les termes macrolichen et microlichen ne désignent pas la taille : un lichen crustacé de plus de 10 centimètres reste un microlichen, alors qu’un lichen foliacé d’un centimètre est un macrolichen.'
            },
            {
              question: 'Dans quelle zone du thalle d’un lichen foliacé le champignon stocke-t-il les nutriments récoltés ?',
              answer: 'Dans la médulle, une zone d’hyphes lâches située sous la couche des cellules du photobionte.'
            },
            {
              question: 'Que montre l’exemple de Siphula coriacea ?',
              answer: 'Qu’une espèce peut changer de forme selon le milieu : ses lobes dressés sont plus longs dans les zones humides et abritées et très courts dans les zones plus sèches, et une forme en disques a été observée dans un milieu particulier.'
            }
          ],
          sources: [
            { title: 'Australian National Botanic Gardens — What is a lichen?', url: 'https://anbg.gov.au/lichen/what-is-lichen.html' },
            { title: 'Botany Brisbane — Lichen basics', url: 'https://www.botanybrisbane.com/?p=16574' },
            { title: 'Science Notes — What is a lichen? Definition and facts', url: 'https://sciencenotes.org/what-is-a-lichen-definition-and-facts/' }
          ]
        }
      },

      {
        id: 'lichens-reproduction',
        title: 'Reproduction et dispersion des lichens',
        field: 'Biologie · Reproduction végétative et sexuée',
        summary: 'Distinguer les modes de reproduction des lichens, comprendre pourquoi une spore ne suffit pas à former un lichen et voir comment les lichens se dispersent.',
        lesson: {
          sections: [
            'Les lichens peuvent se reproduire de façon asexuée (on dit aussi végétative) par plusieurs moyens. Un fragment détaché d’un thalle peut donner un nouveau thalle, génétiquement identique à celui dont il provient. Beaucoup de lichens sont cassants lorsqu’ils sont secs, et se fragmentent facilement, par exemple quand un animal marche dessus ; cela vaut surtout pour les formes foliacées et crustacées. Cette fragmentation est une forme « accidentelle » de reproduction végétative.',
            'D’autres moyens sont plus spécialisés. Les sorédies sont de minuscules granules poudreux visibles à la surface du thalle, chacune formée de quelques cellules du photobionte entourées de filaments fongiques. Les isidies sont de petites excroissances simples ou ramifiées du thalle, elles aussi faites de cellules fongiques et de cellules du photobionte. Sorédies et isidies se détachent et se dispersent facilement, et contiennent tout ce qui est nécessaire pour former un nouveau thalle. Certaines espèces ne produisent ni les unes ni les autres, d’autres produisent les deux, d’autres une seule des deux sortes.',
            'Seul le partenaire fongique se reproduit de façon sexuée. Les spores sont souvent produites dans une structure durable en forme de soucoupe, l’apothécie, visible à l’œil nu chez beaucoup d’espèces. Certains lichens produisent leurs spores dans des périthèces, de petites pustules hémisphériques, en général noires, à l’intérieur desquelles se forment les asques. Les lichens graphidés ont des apothécies allongées et étroites, les lirelles, qui ressemblent à de courts traits d’écriture sur le thalle : le nom « graphidé » vient d’un mot grec qui désigne l’écriture.',
            'Une spore de lichen ne contient que le champignon. Pour former un lichen, elle doit rencontrer un photobionte compatible dans son environnement. À l’inverse, les fragments, les sorédies et les isidies emportent déjà les deux partenaires. Selon une synthèse du Département indien des sciences et technologies, un lichen qui se reproduit par fragments conserve probablement la même espèce de photobionte partout où on le trouve, tandis que les lichens qui se reproduisent par spores doivent « choisir » leur photobionte dans le milieu environnant.',
            'Les spores fongiques sont très petites et, une fois éjectées dans l’air, elles peuvent être emportées par le moindre souffle. L’eau est un autre agent de dispersion, et les animaux en sont un troisième : des oiseaux migrateurs peuvent ramasser par inadvertance des propagules végétatives et les transporter sur de longues distances.',
            'Il en résulte divers types de répartition géographique : espèces endémiques d’une région, espèces gondwaniennes, espèces bipolaires, espèces pratiquement cosmopolites et bien d’autres modèles. Certaines espèces à large répartition le sont naturellement, d’autres ont été dispersées involontairement par l’être humain.'
          ],
          example: {
            statement: 'Un lichen produit des sorédies. Cette reproduction est-elle sexuée ? Pourquoi une sorédie peut-elle donner un nouveau lichen à elle seule ?',
            calculation: 'Une sorédie est faite de quelques cellules du photobionte entourées de filaments fongiques : elle contient donc les deux partenaires et n’a pas besoin de rencontrer un photobionte.',
            answer: 'La reproduction par sorédies est végétative (asexuée). Une sorédie porte déjà le champignon et le photobionte, donc elle contient tout ce qu’il faut pour former un nouveau thalle.'
          },
          exercise: {
            question: 'Quel partenaire du lichen se reproduit de façon sexuée ?',
            answer: 'Seul le partenaire fongique (le champignon) : il produit des spores, souvent dans des apothécies.'
          },
          exercises: [
            {
              question: 'Quelle est la différence entre une sorédie et une isidie ?',
              answer: 'Une sorédie est un minuscule granule poudreux formé de quelques cellules du photobionte entourées de filaments fongiques ; une isidie est une petite excroissance du thalle, simple ou ramifiée. Les deux contiennent des cellules des deux partenaires.'
            },
            {
              question: 'Qu’est-ce qu’une apothécie ?',
              answer: 'Une structure fongique durable, souvent en forme de soucoupe ou de disque, où le champignon produit ses spores. Elle est visible à l’œil nu chez beaucoup d’espèces.'
            },
            {
              question: 'Pourquoi une spore de lichen ne suffit-elle pas à former un lichen ?',
              answer: 'Parce qu’une spore ne contient que le champignon : elle doit rencontrer un photobionte compatible dans son environnement.'
            },
            {
              question: 'Que signifie le terme « graphidé » ?',
              answer: 'Il vient d’un mot grec qui désigne l’écriture : les apothécies allongées de ces lichens (les lirelles) ressemblent à de courts traits sur le thalle.'
            }
          ],
          sources: [
            { title: 'Australian National Botanic Gardens — What is a lichen?', url: 'https://anbg.gov.au/lichen/what-is-lichen.html' },
            { title: 'Science Notes — What is a lichen? Definition and facts', url: 'https://sciencenotes.org/what-is-a-lichen-definition-and-facts/' },
            { title: 'India Science, Technology & Innovation — Photobiont diversity in lichens occurring in varied ecological conditions', url: 'https://www.indiascienceandtechnology.gov.in/research/photobiont-diversity-lichens-occurring-varied-ecological-conditions-india' }
          ]
        }
      },

      {
        id: 'lichens-ecologie',
        title: 'Écologie : habitats, pionniers et résistance aux conditions extrêmes',
        field: 'Écologie · Lichens et milieux',
        summary: 'Comprendre où vivent les lichens, quel est leur rôle dans les écosystèmes et pourquoi ils tolèrent des conditions que peu d’organismes supportent.',
        lesson: {
          sections: [
            'On trouve des lichens dans presque toutes les régions terrestres, des zones polaires libres de glace jusqu’aux tropiques, des forêts tropicales aux déserts sans dunes mobiles. Quelques espèces sont aquatiques. Les substrats sont très variés : sol, roche, bois, os, mais aussi bitume, béton, verre, toile ou métal. Il faut penser non seulement aux grands habitats, mais aussi aux microhabitats : en forêt tropicale, certaines espèces ne poussent que sur les feuilles de plantes à fleurs, d’autres seulement sur l’écorce.',
            'Les lichens font partie des premiers organismes à coloniser des surfaces nues, comme des talus de route, des affleurements rocheux ou des cendres volcaniques. Ils retiennent l’humidité et les débris organiques apportés par le vent, puis contribuent aux dépôts organiques quand ils meurent et se décomposent, préparant ainsi l’installation de plantes ultérieures. Il s’agit d’un rôle actuel dans les écosystèmes, qu’il ne faut pas confondre avec l’histoire ancienne des lichens, abordée au dernier chapitre.',
            'L’azote représente environ 80 % du volume de l’atmosphère, mais la plupart des organismes ne peuvent pas l’utiliser directement. Les cyanobactéries en sont capables : on dit qu’elles fixent l’azote atmosphérique. Les lichens dont le photobionte est une cyanobactérie fixent donc de l’azote, qui devient disponible pour les plantes après la mort et la décomposition du thalle, ou par les excréments des herbivores qui en consomment. Même sans fixer l’azote, les lichens contribuent aux cycles des nutriments : ils absorbent des éléments minéraux par leur thalle, et dans les forêts où les arbres sont couverts de lichens épiphytes, leur grande surface capte efficacement la brume et la pluie.',
            'Les lichens jouent d’autres rôles. Des vertébrés en mangent : le renne et le caribou, en Amérique du Nord et en Eurasie, se nourrissent de Cladina rangifera pendant l’hiver, quand la végétation est rare ; ils maigrissent quand même en hiver, mais ce lichen est essentiel à leur survie. Certains lichens fixent le sable et le sol et aident à stabiliser les dunes et à limiter l’érosion. Dans les régions arides et semi-arides, associés à des bryophytes, ils forment de vastes croûtes biologiques qui maintiennent la structure du sol. Les colonies de lichens offrent aussi des niches à de nombreux invertébrés, souvent minuscules, qui sont mangés par d’autres animaux.',
            'Beaucoup de lichens tolèrent des conditions extrêmes. L’un des traits de cette résistance est la poïkilohydrie : le lichen n’a pas de mécanisme pour réguler sa teneur en eau, et il supporte donc une dessiccation extrême tout en tolérant aussi de forts rayonnements ultraviolets (UV). Quand les conditions sont très dures, il peut rester en état latent ; si l’humidité revient et que la température se rapproche de l’optimum (autour de 10 °C selon un résumé de la mission Foton M-2), le lichen déshydraté reprend la photosynthèse.',
            'Cette résistance a été testée dans l’espace. Dans l’expérience LICHENS (2005), des échantillons de Rhizocarpon geographicum et de Xanthoria elegans, récoltés à plus de 2 000 m d’altitude dans les montagnes d’Espagne centrale, ainsi que des communautés endolithiques des Vallées sèches de l’Antarctique, ont été exposés sur la plate-forme BIOPAN-5 du satellite russe Foton-M2, lancé depuis Baïkonour le 31 mai 2005. Après 16 jours dans l’espace, tous les lichens exposés montraient une activité photosynthétique presque identique à celle d’avant le vol, et après une déshydratation extrême provoquée par le vide, ils ont retrouvé toute leur activité métabolique en 24 heures. Les auteurs en concluent que la plupart des cellules de champignons et d’algues lichénisés peuvent survivre dans l’espace, sous des conditions d’UV et de rayonnement cosmique létales pour les bactéries et d’autres micro-organismes. Il s’agit d’une exposition de 16 jours, et non d’une preuve d’invulnérabilité.'
          ],
          example: {
            statement: 'L’expérience LICHENS (2005) a duré 16 jours en orbite. L’expérience LIFE, sur la plate-forme EXPOSE-E de la Station spatiale internationale, a duré environ un an et demi. Environ combien de fois la seconde est-elle plus longue que la première ?',
            calculation: 'Un an et demi correspond à environ 1,5 × 365 = 547 jours. On calcule 547 ÷ 16 ≈ 34.',
            answer: 'Environ 34 fois plus longue.'
          },
          exercise: {
            question: 'Que signifie « poïkilohydrie » et pourquoi cette propriété est-elle utile à un lichen ?',
            answer: 'Le lichen ne régule pas sa teneur en eau : il peut supporter une dessiccation extrême en restant en état latent, puis reprendre son activité quand l’humidité revient. Cela lui permet de vivre dans des milieux très secs, froids ou exposés aux UV.'
          },
          exercises: [
            {
              question: 'Pourquoi les lichens à cyanobactéries enrichissent-ils les milieux en azote ?',
              answer: 'Parce que les cyanobactéries fixent l’azote atmosphérique. Cet azote devient disponible pour les plantes après la mort et la décomposition du thalle, ou par les excréments des herbivores qui mangent le lichen.'
            },
            {
              question: 'Quel lichen est mangé par les rennes et les caribous en hiver ?',
              answer: 'Cladina rangifera. Les animaux maigrissent malgré tout, mais ce lichen est essentiel à leur survie hivernale.'
            },
            {
              question: 'Pourquoi dit-on que les lichens sont des organismes pionniers ?',
              answer: 'Parce qu’ils figurent parmi les premiers organismes à coloniser des surfaces nues (talus, affleurements rocheux, cendres volcaniques) : ils retiennent l’humidité et les débris organiques, puis contribuent aux dépôts organiques en mourant, ce qui prépare l’arrivée de plantes.'
            },
            {
              question: 'Qu’a montré l’expérience LICHENS de 2005 sur Foton-M2 ?',
              answer: 'Que Rhizocarpon geographicum et Xanthoria elegans, exposés 16 jours dans l’espace, retrouvaient une activité photosynthétique presque identique à celle d’avant le vol, et reprenaient toute leur activité métabolique en 24 heures après déshydratation par le vide.'
            }
          ],
          sources: [
            { title: 'Australian National Botanic Gardens — What is a lichen?', url: 'https://anbg.gov.au/lichen/what-is-lichen.html' },
            { title: 'Sancho et al. (2007), Astrobiology 7 : 443-454 — Lichens survive in space: results from the 2005 LICHENS experiment (DLR)', url: 'https://elib.dlr.de/52968/' },
            { title: 'de la Torre, Horneck, Sancho — The Lichens experiment at Foton M-2 mission: survival capacity in space (COSPAR 2006)', url: 'https://meetings.copernicus.org/www.cosis.net/abstracts/COSPAR2006/03636/COSPAR2006-A-03636.pdf' },
            { title: 'Springer — Morphological and anatomical traits of lichens used in astrobiological research (Origins of Life and Evolution of Biospheres)', url: 'https://link.springer.com/doi/10.1007/s11084-013-9337-2' },
            { title: 'Astronomy.com — Antarctic fungi survive Martian conditions on ISS', url: 'https://www.astronomy.com/science/antarctic-fungi-survive-martian-conditions-on-iss/' }
          ]
        }
      },

      {
        id: 'lichens-bioindicateurs',
        title: 'Les lichens, témoins de l’air et du temps : bioindication et lichénométrie',
        field: 'Environnement et géologie · Pollution de l’air et datation',
        summary: 'Voir comment les lichens servent à surveiller la qualité de l’air et à estimer l’âge de surfaces rocheuses, et pourquoi ces méthodes ont des limites.',
        lesson: {
          sections: [
            'Les lichens concentrent des nutriments à partir de sources très diluées et absorbent sans distinction de nombreuses substances toxiques de l’atmosphère, comme le dioxyde de soufre, les fluorures et les métaux lourds. Beaucoup d’espèces sont très sensibles à la pollution de l’air, en particulier au dioxyde de soufre. Le soufre endommage la chlorophylle ; si le niveau est assez élevé, le photobionte meurt, ce qui entraîne la mort du champignon, incapable de survivre seul. En règle générale, les lichens fruticuleux sont les moins résistants à la pollution et les lichens crustacés les plus résistants.',
            'Comme les espèces diffèrent par leur sensibilité, noter celles qui poussent dans une zone et leur état de santé permet de surveiller les niveaux de pollution. L’idée d’utiliser les lichens ainsi a été formulée dès 1859 au moins, puis développée plus systématiquement en 1866 par le lichénologue finlandais William Nylander, à la suite de ses études autour de Paris. Selon l’Encyclopédie de l’environnement, Nylander a constaté entre 1866 et 1896 la disparition totale des lichens du jardin du Luxembourg, alors qu’une trentaine d’espèces y étaient présentes au départ.',
            'En 1970, David Hawksworth et Francis Rose publient dans Nature (volume 227, pages 145-148) une échelle qualitative pour estimer la pollution de l’air par le dioxyde de soufre en Angleterre et au pays de Galles à partir des lichens épiphytes. C’est une échelle à dix niveaux, testée lors d’enquêtes pilotes en Angleterre et au pays de Galles, dans le sud-est de l’Angleterre et dans la ville de Leicester. C’était la méthode la plus utilisée de ce type.',
            'À la fin des années 1980, les niveaux de dioxyde de soufre dans l’air ont fortement baissé et les lichens ont recommencé à apparaître sur les arbres du jardin du Luxembourg, puis dans d’autres villes françaises. La méthode de Hawksworth et Rose ne pouvait donc plus être utilisée telle quelle. Un indice fondé sur la biodiversité des lichens épiphytes (calculé à partir de la présence ou de l’absence, de la fréquence et du recouvrement des espèces) l’a remplacée. D’autres polluants sont étudiés de la même façon : autour de Grenoble, on a ainsi établi trois classes de sensibilité des lichens au dioxyde d’azote émis par la circulation.',
            'Les lichens servent aussi à estimer l’âge de surfaces : c’est la lichénométrie. Le principe est de mesurer le diamètre du plus grand thalle d’une espèce donnée sur une roche et d’en déduire depuis combien de temps cette roche est exposée, d’après une vitesse de croissance radiale supposée. On utilise surtout des lichens du groupe Rhizocarpon geographicum (le lichen cartographique). La méthode est associée à Roland Beschel, qui publie en 1950, à propos des Alpes, le premier article consacré exclusivement à ce sujet. Elle a surtout servi à dater des formes glaciaires de l’Holocène récent (environ les derniers 1 000 ans), notamment les moraines du « Petit Âge glaciaire ».',
            'La lichénométrie a de sérieuses limites. Il faut construire pour chaque région une courbe de croissance à partir de surfaces d’âge connu. Les vitesses de croissance varient dans l’espace et dans le temps, et celle de Rhizocarpon diminue avec l’âge du thalle. Une courbe de croissance construite dans la chaîne des Cascades (États-Unis) montre ainsi trois phases de croissance de plus en plus lentes : rapide de 8 à 20 ans, linéaire de 20 à 145 ans, lente au-delà, avec une incertitude sur les très vieux thalles. Des lichens peuvent aussi avoir commencé à pousser avant que le bloc soit déposé dans une moraine (problème d’héritage). Des valeurs de 0,12 mm par an et de 0,14 mm par an ont été obtenues en Alaska à partir d’une pierre tombale de 1950 et d’un engin immobile depuis 30 ans, et ne donnent que des âges minimaux. L’article « Lichenometric dating: science or pseudo-science? » (Quaternary Research, 2015) montre que la méthode reste débattue.'
          ],
          example: {
            statement: 'Sur un bloc de moraine, le plus grand thalle de Rhizocarpon geographicum mesure 18 mm de diamètre. On suppose, de façon simplifiée, une croissance constante de 0,12 mm par an (valeur obtenue localement en Alaska). Quel âge minimal obtient-on ?',
            calculation: 'Âge = diamètre ÷ vitesse de croissance = 18 ÷ 0,12 = 150 ans.',
            answer: 'Environ 150 ans, comme âge minimal. Ce calcul est très simplifié : la vitesse de croissance varie et le lichen a mis un certain temps à s’installer sur la roche.'
          },
          exercise: {
            question: 'Pourquoi la mort du photobionte entraîne-t-elle celle du champignon d’un lichen exposé au dioxyde de soufre ?',
            answer: 'Parce que le soufre endommage la chlorophylle du photobionte. Quand celui-ci meurt, le champignon ne reçoit plus de glucides et il est incapable de survivre seul.'
          },
          exercises: [
            {
              question: 'Qui a développé l’usage des lichens comme moniteurs de la pollution de l’air en 1866, et à partir de quelle ville ?',
              answer: 'Le lichénologue finlandais William Nylander, à la suite de ses études des lichens autour de Paris.'
            },
            {
              question: 'Qu’ont publié Hawksworth et Rose en 1970 ?',
              answer: 'Une échelle qualitative à dix niveaux, publiée dans Nature, pour estimer la pollution de l’air par le dioxyde de soufre à partir des lichens épiphytes, testée en Angleterre et au pays de Galles, dans le sud-est de l’Angleterre et à Leicester.'
            },
            {
              question: 'Pourquoi les lichens sont-ils revenus sur les arbres du jardin du Luxembourg à la fin des années 1980 ?',
              answer: 'Parce que les niveaux de dioxyde de soufre dans l’air avaient fortement baissé.'
            },
            {
              question: 'Citez deux limites de la lichénométrie.',
              answer: 'Les vitesses de croissance varient dans l’espace et dans le temps (et celle de Rhizocarpon diminue avec l’âge) ; des lichens peuvent avoir commencé à pousser avant le dépôt du bloc (héritage). Il faut aussi une courbe d’étalonnage propre à chaque région.'
            }
          ],
          sources: [
            { title: 'Australian National Botanic Gardens — What is a lichen?', url: 'https://anbg.gov.au/lichen/what-is-lichen.html' },
            { title: 'Hawksworth & Rose (1970), Nature 227 : 145-148 — Qualitative scale for estimating sulphur dioxide air pollution using epiphytic lichens', url: 'https://www.nature.com/articles/227145a0' },
            { title: 'Encyclopédie de l’environnement — Lichens and environmental quality', url: 'https://www.encyclopedie-environnement.org/en/life/lichens-environmental-quality/' },
            { title: 'Antarctic Glaciers — Lichenometry', url: 'https://www.antarcticglaciers.org/glacial-geology/dating-glacial-sediments-2/cryospheric-geomorphology-dating-glacial-landforms/lichenometry/' },
            { title: 'Quaternary Research — A Rhizocarpon geographicum growth curve for the Cascade Range of Washington and northern Oregon', url: 'https://resolve.cambridge.org/core/journals/quaternary-research/article/rhizocarpon-geographicum-growth-curve-for-the-cascade-range-of-washington-and-northern-oregon-usa/35DFED8C0006E3464F5527886D186B79' },
            { title: 'GSA 2002 — Dating of glacial landforms using lichenometry, Matanuska Glacier, Alaska', url: 'https://gsa.confex.com/gsa/2002NC/webprogram/Paper32236.html' },
            { title: 'EPFL Graph Search — Lichenometry (concept)', url: 'https://graphsearch.epfl.ch/en/concept/1354256' },
            { title: 'Land (2023) — Lichenometric dating and its limitations and problems: a guide for practitioners', url: 'https://doi.org/10.3390/land12030611' }
          ]
        }
      },

      {
        id: 'lichens-fossiles',
        title: 'Origine et fossiles des lichens : ce que disent les archives géologiques',
        field: 'Paléontologie · Du Précambrien au Cénozoïque',
        summary: 'Situer les plus anciens lichens connus, comprendre pourquoi leur registre fossile est rare et distinguer les fossiles certains des interprétations discutées.',
        lesson: {
          sections: [
            'Les registres fossiles de lichens sont rares. D’après le Musée de paléontologie de l’Université de Californie à Berkeley (UCMP), la plupart des habitats où les lichens dominent (toundra, montagnes, déserts) ont très peu de chances de fournir des fossiles. Cela explique que l’on dispose de peu de fossiles, et que leur interprétation soit souvent discutée.',
            'Des microfossiles filamenteux du Protérozoïque inférieur, trouvés dans le Witwatersrand (Afrique du Sud) et datés de 2,2 à 2,7 milliards d’années, ont été interprétés comme des associations de type lichen entre deux microbes différents. Mais les filaments ne mesurent que 1 à 2 micromètres de diamètre, ce qui est plus petit que la plupart des champignons et proche de la taille de bactéries filamenteuses. De plus, des microstructures similaires peuvent être produites en laboratoire par des réactions chimiques, et certains paléontologues doutent qu’il s’agisse de vrais fossiles. S’ils sont réels, ils ne sont peut-être pas des lichens au sens habituel du terme.',
            'Le plus ancien fossile de lichen certain date du Dévonien inférieur, il y a environ 400 millions d’années, dans le Rhynie Chert près d’Aberdeen, en Écosse (Taylor, Hass, Remy et Kerp, Nature, 1995). Dans leur note, les auteurs le décrivent comme le plus ancien lichen fossile sans équivoque. Le thalle fossile forme des bandes d’environ 1 à 2 mm d’épaisseur où les hyphes sont étroitement serrées ; à la surface, de nombreuses poches contiennent un réseau tridimensionnel d’hyphes, d’environ 25 micromètres de diamètre en moyenne. Les hyphes, sans cloisons, mesurent 1 à 4 micromètres de diamètre. Le photobionte fossile, une cyanobactérie, partage de nombreux traits avec des cyanobactéries actuelles comme Gloeocapsa ou Chroococcidiopsis.',
            'Ce fossile a été nommé Winfrenatia reticulata par Taylor, Hass et Kerp en 1997 ; le genre ne contient qu’une seule espèce, dont le nom fait référence à l’aspect réticulé de sa surface. Un réexamen de lames minces du Rhynie Chert, publié dans Paleontological Journal en 2009, a conduit à une interprétation plus complexe : deux cyanobactéries distinctes partageraient l’association avec un seul champignon, ce qui ferait de Winfrenatia une symbiose à trois partenaires plutôt qu’un lichen classique. Selon l’article Wikipédia consacré à ce fossile, aucun lichen actuel n’associe un champignon de type glomeromycète à la fois à des cyanobactéries filamenteuses et à des cyanobactéries coccoïdes.',
            'À peu près à la même époque vivaient sur terre plusieurs organismes énigmatiques : les nématophytes (en tapis), les spongiophytes (en croûtes) et le gigantesque Prototaxites, d’abord décrit comme un tronc de conifère. Ils sont constitués de filaments entremêlés, et certains paléontologues ont proposé que ce soient des lichens inhabituels. Selon l’UCMP, les spongiophytes pourraient plausiblement être des lichens (Stein et coll., 1993), alors que les filaments des nématophytes et de Prototaxites n’ont pas le type de ramification des hyphes de champignons, et représenteraient plutôt des branches isolées d’une lignée d’algues, des « expériences ratées » de colonisation terrestre. La nature de ces organismes reste un sujet de discussion.',
            'Quelques fossiles de lichens sont connus dans des roches du Mésozoïque et du Cénozoïque. Ils comprennent au moins deux genres dans l’ambre de la Baltique, et un fossile de Lobaria dans des roches du Miocène de Redding Creek (Californie), que l’UCMP rapproche d’un Lobaria pulmonaria actuel.',
            'Il existe aussi des indices plus anciens et plus discutés. En 2005, Yuan, Xiao et Taylor ont décrit dans Science une « symbiose de type lichen » vieille d’environ 600 millions d’années, dans la formation de Doushantuo, au sud de la Chine. Trois spécimens marins, issus d’un milieu sous-marin peu profond riche en algues, montrent des partenaires fongiques et algaux ; selon Shuhai Xiao, il s’agit d’une association « de type lichen » lâche. Il n’est pas certain que cette association soit l’ancêtre direct des lichens de 400 millions d’années. Enfin, l’hypothèse de Retallack (1994), qui voyait dans les fossiles de l’Édiacarien des lichens ou des organismes proches, a été critiquée par Waggoner (1995) et n’a pas été largement acceptée.'
          ],
          example: {
            statement: 'Le lichen de Rhynie date d’environ 400 millions d’années et l’association de Doushantuo d’environ 600 millions d’années. Quelle est la différence d’âge, en millions d’années ?',
            calculation: 'On soustrait : 600 − 400 = 200.',
            answer: 'Environ 200 millions d’années. Ces chiffres sont des estimations, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi le fossile de Rhynie est-il qualifié de « plus ancien lichen sans équivoque » alors que d’autres structures sont plus anciennes ?',
            answer: 'Parce que les structures plus anciennes (Witwatersrand, Doushantuo, Édiacarien) sont des interprétations discutées, ou ont été décrites comme associations « de type lichen », alors que le fossile de Rhynie montre clairement un champignon et un photobionte cyanobactérien dans un même thalle.'
          },
          exercises: [
            {
              question: 'Quel est l’âge du plus ancien lichen fossile certain, et où a-t-il été trouvé ?',
              answer: 'Environ 400 millions d’années (Dévonien inférieur), dans le Rhynie Chert près d’Aberdeen, en Écosse.'
            },
            {
              question: 'Pourquoi le registre fossile des lichens est-il pauvre ?',
              answer: 'Parce que les habitats où les lichens dominent (toundra, montagnes, déserts) ont très peu de chances de produire des fossiles.'
            },
            {
              question: 'L’hypothèse selon laquelle les fossiles de l’Édiacarien seraient des lichens est-elle acceptée ?',
              answer: 'Non. Proposée par Retallack en 1994, elle a été critiquée par Waggoner en 1995 et n’a pas été largement acceptée.'
            },
            {
              question: 'Pourquoi Winfrenatia est-il un cas particulier selon le réexamen de 2009 ?',
              answer: 'Parce que deux cyanobactéries distinctes partageraient l’association avec un seul champignon : ce serait une symbiose à trois partenaires plutôt qu’un lichen classique.'
            }
          ],
          sources: [
            { title: 'UCMP Berkeley — Lichens: fossil record', url: 'https://ucmp.berkeley.edu/fungi/lichens/lichenfr.html' },
            { title: 'Taylor, Hass, Remy & Kerp (1995), Nature 378 : 244 — The oldest fossil lichen', url: 'https://www-archiv.fdm.uni-hamburg.de/b-online/kerp/nature.html' },
            { title: 'Wikipedia — Winfrenatia', url: 'https://en.wikipedia.org/wiki/Winfrenatia' },
            { title: 'Virginia Tech — Evidence of 600-million-year old fungi-algae symbiosis discovered in marine fossils', url: 'https://vtechworks.lib.vt.edu/handle/10919/21808' },
            { title: 'University of Aberdeen — Evidence for plant-animal interactions (Rhynie chert)', url: 'https://abdn.ac.uk/geosciences/departments/geology/evidence-for-plantanimal-interactions-1903.php' }
          ]
        }
      }
    ]
  },

// BRANCHE — LES PREMIERS HOMMES

  {
    id: 'hominides',
    title: 'Les premiers hommes',
    note: 'Sept chapitres sur les australopithèques, Homo habilis, les premiers outils de pierre, Homo erectus, les Néandertaliens, Homo sapiens et la diversité des hominines. Les dates sont des estimations en années avant le présent et la classification des espèces reste débattue.',
    chapters: [
      {
        id: 'australopitheques-lucy',
        title: 'Avant le genre Homo : les australopithèques et la marche debout',
        field: 'Afrique · Vers 4,4 à 2,9 millions d’années avant le présent',
        summary: 'Comprendre ce que sont les hominines, ce que Lucy a montré sur la marche debout et pourquoi elle n’est pas le début de l’histoire.',
        lesson: {
          sections: [
            'Les paléoanthropologues emploient le mot « hominine » (hominin en anglais) pour désigner un groupe qui comprend les humains et leurs parents fossiles. Les australopithèques en font partie. Australopithecus afarensis, l’espèce de la célèbre « Lucy », a vécu il y a environ 3,8 à 2,9 millions d’années dans la région correspondant aujourd’hui à l’Éthiopie, au Kenya et à la Tanzanie, selon un essai de la chercheuse Denise Su publié par Sapiens. Il ne faut pas confondre ces espèces avec le genre Homo, qui apparaît plus tard.',
            'Lucy a été découverte le 24 novembre 1974 à Hadar, en Éthiopie. Elle est datée d’environ 3,2 millions d’années et était, au moment de sa découverte, l’ancêtre humain le plus ancien et le plus complet connu. Elle mesurait environ 110 cm, d’après World History Encyclopedia (WHE). Selon le Smithsonian, ses pieds compacts pouvaient supporter tout son poids pendant la marche debout, mais ses os d’orteils longs et courbes ressemblent à ceux d’un singe grimpeur : elle pouvait marcher debout au sol et grimper aux arbres, ce qui lui donnait accès à des milieux variés.',
            'La marche debout précède l’augmentation du volume du cerveau : d’après Sapiens, de grands cerveaux n’apparaissent dans notre lignée que plus d’un million d’années après Lucy. Des pistes d’empreintes fossiles de 3,6 millions d’années, découvertes en 1978 en Tanzanie et attribuées à son espèce, vont dans le même sens. Par ailleurs, un os de pied fossile de 3,2 millions d’années trouvé à Hadar indique, selon l’Arizona State University, la présence d’une voûte plantaire permanente chez Australopithecus afarensis.',
            'Lucy n’est pas le début de l’histoire. Selon l’Arizona State University, Ardipithecus ramidus (4,4 millions d’années, Éthiopie) est le plus ancien ancêtre humain bien représenté par des restes squelettiques, et Australopithecus anamensis est présent au Kenya et en Éthiopie il y a 4,2 à 4 millions d’années. History.com rappelle que certains scientifiques pensent avoir trouvé des fragments d’os qui feraient remonter les origines de l’humanité jusqu’à 7 millions d’années. Enfin, le site de Hadar a livré plus de 370 spécimens d’Australopithecus afarensis, l’une des plus grandes collections d’une seule espèce d’hominine fossile en Afrique.'
          ],
          example: {
            statement: 'Ardipithecus ramidus est daté d’environ 4,4 millions d’années et Lucy d’environ 3,2 millions d’années. Quel écart sépare ces deux repères ?',
            calculation: 'Pour des durées exprimées en années avant le présent, on soustrait : 4,4 − 3,2 = 1,2 million d’années.',
            answer: 'Environ 1,2 million d’années, soit 1 200 000 ans. Ces chiffres sont des estimations, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi Lucy est-elle importante pour comprendre l’évolution humaine ?',
            answer: 'Son squelette relativement complet montre une locomotion bipède bien avant l’apparition de grands cerveaux : la marche debout a précédé l’augmentation du volume cérébral.'
          },
          exercises: [
            {
              question: 'Où et quand Lucy a-t-elle été découverte ?',
              answer: 'À Hadar, en Éthiopie, le 24 novembre 1974.'
            },
            {
              question: 'Quel âge approximatif a Lucy ?',
              answer: 'Environ 3,2 millions d’années.'
            },
            {
              question: 'Que révèlent les pieds et les os d’orteils de Lucy, d’après le Smithsonian ?',
              answer: 'Qu’elle pouvait marcher debout au sol tout en étant capable de grimper aux arbres.'
            }
          ],
          sources: [
            { title: 'Sapiens — Lessons From Lucy (Denise Su)', url: 'https://sapiens.org/biology/lucy-australopithecus-afarensis-lessons' },
            { title: 'Smithsonian (via Google Arts & Culture) — Australopithecus afarensis skeleton (« Lucy »)', url: 'https://artsandculture.google.com/asset/australopithecus-afarensis-skeleton-lucy/0wHswJvC_I0gtw' },
            { title: 'Arizona State University — On their own 2 feet: Fossil reveals early human bipedalism', url: 'https://news.asu.edu/content/their-own-2-feet-fossil-reveals-early-human-bipedalism' },
            { title: 'History.com — How the « Lucy » Fossil Rewrote the Story of Human Origins', url: 'https://www.history.com/articles/lucy-fossil-discovery-human-origins' },
            { title: 'World History Encyclopedia — Homo Erectus', url: 'https://www.worldhistory.org/Homo_Erectus/' }
          ]
        }
      },
      {
        id: 'homo-habilis',
        title: 'Homo habilis : un des plus anciens représentants du genre Homo ?',
        field: 'Afrique de l’Est et du Sud · Vers 2,3 à 1,5 million d’années avant le présent',
        summary: 'Comprendre ce que l’on sait d’Homo habilis, pourquoi sa place dans l’arbre évolutif est discutée et ce que cela dit de la diversité des premiers humains.',
        lesson: {
          sections: [
            'Homo habilis (« l’homme habile ») est une espèce humaine éteinte qui a vécu en Afrique de l’Est et du Sud entre 2,3 et 1,5 million d’années, d’après World History Encyclopedia (WHE). Le genre Homo serait apparu vers 2,5 millions d’années. Longtemps, habilis a été vu comme l’un des premiers membres du genre et comme l’ancêtre d’Homo erectus, donc de notre propre espèce. Cette idée est aujourd’hui débattue. History.com signale d’ailleurs une mâchoire de 2,8 millions d’années attribuée au genre Homo, ce qui rappelle que l’origine du genre n’est pas figée.',
            'Homo habilis a été décrit en 1964 par Louis Leakey et ses collègues. Avec sa femme Mary, il explore depuis le début des années 1950 les gorges d’Olduvai, en Tanzanie, et y a déjà trouvé des outils de pierre de ce qu’il appelle l’Oldowayen. Au début des années 1960, leur fils Jonathan découvre dans la même couche des fragments de crâne, de mâchoire et des os de main. L’équipe juge ces restes plus proches du genre Homo que des australopithèques : posture verticale, marche bipède et dextérité suffisante pour fabriquer des outils. Le cerveau est toutefois plus petit que celui des Homo connus alors, et elle propose d’assouplir ce critère. Le nom vient du latin pour « habile ».',
            'Le cerveau d’Homo habilis a une capacité crânienne moyenne d’environ 640 cm³, nettement supérieure à celle des australopithèques mais inférieure à celle d’Homo erectus. Le registre fossile est fragmentaire : on dispose de crânes et de fragments de crâne, mais seulement de trois squelettes postcrâniens, tous incomplets, et le fémur est inconnu. Les restes mêlent des traits d’Australopithecus et d’Homo. Homo habilis marchait debout, probablement plus efficacement que les australopithèques Australopithecus afarensis et A. africanus, mais il restait un bon grimpeur, aux mains fortes.',
            'Le classement d’Homo habilis est l’objet d’un débat. Homo rudolfensis, autre espèce précoce (vers 2,5 à 1,8 million d’années) aux dents plus robustes, complique le tableau. Certains scientifiques regroupent tous les premiers Homo en une seule espèce ; la majorité des chercheurs maintient aujourd’hui la distinction habilis/rudolfensis. D’autres proposent de rattacher habilis aux australopithèques ou à un nouveau genre. Sur la filiation, Bernard Wood estime que l’espèce est trop différente d’Homo erectus pour en être l’ancêtre immédiat : un schéma linéaire simple devient de moins en moins probable. Enfin, WHE rappelle que le volume du cerveau n’est qu’un critère parmi d’autres, comme le montrent Homo floresiensis (découvert en 2003) et Homo naledi (2013), tous deux de petit cerveau.',
            'Les restes d’Homo habilis ont été trouvés à Olduvai, à Koobi Fora (Kenya), en Éthiopie et à Sterkfontein (Afrique du Sud), peut-être aussi à Swartkrans. Vers 1,8 million d’années, Olduvai ressemblait à l’actuel Serengeti : une savane avec des buissons et un couvert végétal arboré. Les prédateurs étaient nombreux : un pied d’habilis découvert à Olduvai porte les traces d’un crocodile, et un os de jambe attribué à habilis ou à Paranthropus boisei a été mâché par un léopard. Le régime alimentaire était varié : insectes ou herbivores, fruits, aliments durs et fibreux, et de la viande, comme l’indiquent des os portant des traces de découpe. Un usage délibéré du feu reste incertain : des traces de feu existent sur quelques sites oldowayens, mais elles peuvent venir de la foudre ou d’incendies naturels.'
          ],
          example: {
            statement: 'Les ossements attribués à Homo habilis sont datés d’entre 2,3 et 1,5 million d’années. Quelle durée couvre cette fourchette ?',
            calculation: 'Pour des durées exprimées en années avant le présent, on soustrait : 2,3 − 1,5 = 0,8 million d’années.',
            answer: 'Environ 800 000 ans. Ces chiffres sont des estimations chronologiques, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi le classement d’Homo habilis dans le genre Homo est-il débattu ?',
            answer: 'Ses restes mêlent des traits d’Homo et d’Australopithecus, son cerveau est relativement petit et le registre fossile est fragmentaire.'
          },
          exercises: [
            {
              question: 'Qui a décrit Homo habilis en 1964 et où ses premiers restes ont-ils été découverts ?',
              answer: 'Louis Leakey et ses collègues ; dans les gorges d’Olduvai, en Tanzanie.'
            },
            {
              question: 'Quelle est la capacité crânienne moyenne d’Homo habilis selon World History Encyclopedia ?',
              answer: 'Environ 640 cm³.'
            },
            {
              question: 'Peut-on affirmer aujourd’hui qu’Homo habilis est l’ancêtre direct d’Homo erectus ?',
              answer: 'Non. Cette idée, longtemps répandue, est aujourd’hui débattue.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Homo Habilis', url: 'https://www.worldhistory.org/Homo_Habilis/' },
            { title: 'World History Encyclopedia — Homo Erectus', url: 'https://www.worldhistory.org/Homo_Erectus/' },
            { title: 'History.com — How the « Lucy » Fossil Rewrote the Story of Human Origins', url: 'https://www.history.com/articles/lucy-fossil-discovery-human-origins' }
          ]
        }
      },
      {
        id: 'premiers-outils-de-pierre',
        title: 'Les premiers outils de pierre : de Lomekwi à l’Oldowayen',
        field: 'Afrique · Vers 3,4 à 1 million d’années avant le présent',
        summary: 'Comprendre comment les premiers outils ont été fabriqués, ce qu’ils permettaient et pourquoi leur fabrication n’a pas été uniquement humaine.',
        lesson: {
          sections: [
            'L’Oldowayen (Oldowan en anglais) est l’industrie de pierre taillée la plus connue des débuts de la technologie. World History Encyclopedia (WHE) le date d’environ 2,6 à 1 million d’années. Il se superpose à plusieurs espèces : Homo habilis, Homo rudolfensis, Homo erectus et des australopithèques tardifs ont pu employer des outils de pierre à des degrés divers. La plupart des scientifiques pensent pourtant que les Homo, dont habilis, fabriquaient et utilisaient des outils plus habituellement, car leurs dents ont diminué et leur cerveau a presque doublé de volume au cours du premier million d’années de l’Oldowayen. Découper la nourriture réduit en effet le besoin de dents massives.',
            'Les outils oldowayens étaient obtenus de deux façons. La percussion directe dure consiste à détacher des éclats d’un bloc de pierre avec une autre pierre. La technique bipolaire consiste à poser le bloc sur une enclume de pierre et à le frapper avec un percuteur. Les matières les plus courantes étaient la lave volcanique, le quartz et le quartzite. Les éclats ont pu servir à dépecer des animaux, à travailler le bois ou à couper des végétaux tendres ; les percuteurs, à casser des os pour atteindre la moelle ; les galets aménagés (choppers), peut-être comme bâtons à fouir ou pour couper des branches. WHE souligne toutefois qu’il est difficile d’attribuer un usage direct à un outil.',
            'Des os portant des traces de découpe attestent que des carcasses ont été traitées, depuis de petits mammifères jusqu’à de très gros animaux, de la taille d’un éléphant. On ignore si ces animaux étaient charognés ou chassés. Des concentrations de pierres et d’os à certains endroits ont aussi été relevées sur des sites oldowayens ; leur origine est difficile à établir : campements de base, lieux de collecte, caches de pierres, accumulations de carnivores ou lieux choisis pour l’ombre, l’eau ou la nourriture. Il s’agit d’hypothèses. WHE ajoute que l’usage d’outils a rendu l’espèce moins dépendante de son environnement et plus tournée vers la culture.',
            'L’Oldowayen n’est pas la plus ancienne industrie connue. En 2010, des fouilles à Dikika (Éthiopie) ont révélé des traces de découpe sur des os, laissées par des outils de pierre il y a 3,39 millions d’années. En 2015, le site de Lomekwi 3, à l’ouest du lac Turkana (Kenya), a livré des artefacts de pierre datés de 3,3 millions d’années. Ces dates sont antérieures à l’apparition du genre Homo : la fabrication d’outils n’a donc jamais été une activité uniquement humaine, selon WHE. Plus tard, Homo erectus est associé à l’Acheuléen et aux premiers bifaces, considérés comme la première grande innovation de la technologie lithique ; l’Arizona State University signale par ailleurs d’abondants outils oldowayens d’environ 2,3 millions d’années à Hadar.'
          ],
          example: {
            statement: 'Les artefacts de Lomekwi 3 sont datés de 3,3 millions d’années avant le présent et le début de l’Oldowayen de 2,6 millions d’années. Quel écart sépare ces deux repères ?',
            calculation: 'Pour des durées exprimées en années avant le présent, on soustrait : 3,3 − 2,6 = 0,7 million d’années.',
            answer: 'Environ 700 000 ans. Ces chiffres sont des estimations chronologiques, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi la découverte de Lomekwi 3 change-t-elle l’image de la fabrication d’outils ?',
            answer: 'Ses artefacts de 3,3 millions d’années sont antérieurs au genre Homo : la fabrication d’outils n’a pas été uniquement une activité humaine.'
          },
          exercises: [
            {
              question: 'Comment fabriquait-on les outils oldowayens ?',
              answer: 'Par percussion dure, en détachant des éclats d’un bloc avec une autre pierre, ou par la technique bipolaire sur une enclume.'
            },
            {
              question: 'Les traces de découpe sur les os permettent-elles de savoir si les animaux étaient chassés ou charognés ?',
              answer: 'Non. Elles montrent que des carcasses ont été traitées, mais pas si les animaux ont été chassés ou charognés.'
            },
            {
              question: 'Un outil oldowayen prouve-t-il qu’une espèce précise l’a fabriqué ?',
              answer: 'Non. L’Oldowayen recoupe plusieurs espèces, dont Homo habilis, Homo rudolfensis, Homo erectus et des australopithèques tardifs.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Homo Habilis', url: 'https://www.worldhistory.org/Homo_Habilis/' },
            { title: 'World History Encyclopedia — Homo Erectus', url: 'https://www.worldhistory.org/Homo_Erectus/' },
            { title: 'Arizona State University — On their own 2 feet: Fossil reveals early human bipedalism', url: 'https://news.asu.edu/content/their-own-2-feet-fossil-reveals-early-human-bipedalism' }
          ]
        }
      },
      {
        id: 'homo-erectus',
        title: 'Homo erectus : le premier grand voyageur',
        field: 'Afrique et Eurasie · Vers 1,9 million d’années avant le présent jusqu’au Pléistocène moyen',
        summary: 'Comprendre l’expansion, l’anatomie, le mode de vie et les débats de classification autour d’Homo erectus.',
        lesson: {
          sections: [
            'Homo erectus (« l’homme debout ») est une espèce humaine éteinte dont les premiers restes apparaissent il y a environ 1,9 million d’années et dont les derniers ont survécu jusqu’au Pléistocène moyen, selon World History Encyclopedia (WHE). Les premiers fossiles classés comme Pithecanthropus (aujourd’hui Homo) erectus sont ceux d’Eugène Dubois, trouvés dans les années 1890 à Trinil, à Java. D’autres fossiles ont ensuite été découverts en Indonésie, puis en Chine, et à partir des années 1960 en Afrique. L’espèce descend probablement d’une espèce plus ancienne de Homo, le plus souvent Homo habilis, en Afrique de l’Est ou peut-être en Eurasie.',
            'La classification d’Homo erectus est débattue. Les fossiles attribués à l’espèce s’étendent sur une très longue durée et sur un vaste espace, avec de fortes variations. Certains défendent une définition large, avec une seule espèce de l’Asie du Sud-Est à l’Afrique. D’autres proposent de réserver le nom d’Homo erectus aux fossiles asiatiques et de nommer Homo ergaster les fossiles africains, que cette thèse relie à la lignée menant à Homo sapiens. À ce jour, selon WHE, l’hypothèse d’une espèce unique, au sens large, tient encore, mais l’espèce ne doit pas devenir une catégorie « fourre-tout ». Les fossiles de Dmanisi (Géorgie) brouillent particulièrement les frontières entre habilis, rudolfensis et erectus.',
            'On pense qu’Homo erectus a quitté l’Afrique il y a environ 1,9 à 1,8 million d’années, traversé le Moyen-Orient et le Caucase, puis atteint l’Asie de l’Est, avec l’Indonésie et la Chine atteintes vers 1,7 à 1,6 million d’années. Une étude de 2016 propose que l’espèce suivait les grands herbivores et les gisements de silex, en évitant au début les zones très peuplées de carnivores. Comme erectus apparaît à peu près au même moment en Afrique de l’Est et en Eurasie, son origine pourrait aussi être eurasiatique. Certains fossiles d’Europe occidentale ont été rangés parmi les erectus, mais ils correspondent plutôt à Homo heidelbergensis.',
            'Homo erectus était plus grand et plus intelligent que les humains précédents. Son squelette est pratiquement moderne, plus trapu. Il est le premier à présenter des proportions des membres et du tronc proches des nôtres, et il avait perdu les adaptations à l’escalade. Sa taille variait d’environ 145 à 185 cm pour un poids de 40 à 68 kg ; la moyenne atteint 170 cm pour la partie africaine. Lucy, une Australopithecus afarensis, ne mesurait que 110 cm. La capacité crânienne des premiers erectus est de 600 à 800 cm³, mais la plupart des plus récents dépassent 1 000 cm³. Les arcades sourcilières sont épaisses et la voûte crânienne basse.',
            'Homo erectus vivait de chasse et de cueillette. Des os portant des traces de boucherie montrent qu’il accédait régulièrement à des carcasses, sans doute par charognage et par chasse, depuis au moins 1,75 million d’années. Les plus anciennes traces d’usage du feu par des hominines remontent à environ 1,8 million d’années ; la cuisson se répand à partir d’environ 500 000 ans, et il y a 400 000 ans les humains manipulent visiblement et délibérément le feu. Homo erectus est associé à l’Oldowayen, mais plus souvent à l’Acheuléen (environ 1,7 million à 250 000 ans), et souvent à l’invention des premiers bifaces. Quant au langage, on ne peut ni le prouver ni l’exclure : les indices anatomiques sont insuffisants et, faute d’ADN, le gène FOXP2 ne peut être testé.'
          ],
          example: {
            statement: 'Selon la chronologie de WHE, l’industrie acheuléenne s’étend d’environ 1 700 000 ans à 250 000 ans avant le présent. Quelle durée cela représente-t-il ?',
            calculation: 'Pour des durées exprimées en années avant le présent, on soustrait : 1 700 000 − 250 000 = 1 450 000.',
            answer: 'Environ 1 450 000 ans. Ces chiffres sont des estimations chronologiques, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi la classification d’Homo erectus est-elle discutée ?',
            answer: 'Les fossiles attribués à l’espèce couvrent un temps et un espace très vastes et montrent de fortes variations ; certains proposent donc de séparer les fossiles africains sous le nom d’Homo ergaster.'
          },
          exercises: [
            {
              question: 'Qui a découvert les premiers fossiles classés comme Homo erectus et où ?',
              answer: 'Eugène Dubois, dans les années 1890, à Trinil, sur l’île de Java (Indonésie).'
            },
            {
              question: 'Quelle industrie de pierre est surtout associée à Homo erectus ?',
              answer: 'L’Acheuléen, souvent associé aux premiers bifaces.'
            },
            {
              question: 'Peut-on affirmer qu’Homo erectus parlait ?',
              answer: 'Non. Les indices anatomiques ne permettent ni de le prouver ni de l’exclure, et l’absence d’ADN empêche de tester le gène FOXP2.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Homo Erectus', url: 'https://www.worldhistory.org/Homo_Erectus/' },
            { title: 'World History Encyclopedia — Homo Habilis', url: 'https://www.worldhistory.org/Homo_Habilis/' },
            { title: 'World History Encyclopedia — Neanderthal', url: 'https://www.worldhistory.org/Neanderthal/' }
          ]
        }
      },
      {
        id: 'neandertaliens',
        title: 'Les Néandertaliens : des humains adaptés à l’Europe glaciaire',
        field: 'Eurasie occidentale · Environ 400 000 à 40 000 ans avant le présent',
        summary: 'Comprendre qui étaient les Néandertaliens, ce que l’on sait de leur culture et pourquoi leur disparition a plusieurs causes.',
        lesson: {
          sections: [
            'Les Néandertaliens sont un groupe humain éteint apparu en Eurasie occidentale au Pléistocène moyen. Ils ont côtoyé les premiers humains modernes arrivés en Europe vers 45 000 ans, puis ont disparu des archives fossiles vers 40 000 ans, selon World History Encyclopedia (WHE). Il n’y a pas de date précise d’apparition : les premiers traits néandertaliens apparaissent entre environ 600 000 et 400 000 ans, sont nets entre 200 000 et 100 000 ans, et le Néandertalien « classique » n’apparaît qu’il y a environ 70 000 ans. Ils partagent avec Homo sapiens un ancêtre commun en Afrique il y a environ 550 000 à 765 000 ans selon les estimations, et les Dénisoviens sont leur groupe frère.',
            'Les premiers fossiles ont été exhumés au XIXe siècle : l’enfant d’Engis en 1830 et l’adulte de Forbes Quarry en 1848. On ne les a pas reconnus d’emblée comme des humains archaïques : on a expliqué leur anatomie particulière par des maladies comme le rachitisme. Après la découverte d’un squelette dans la vallée de Neander, en Allemagne, en 1856, et la parution de L’Origine des espèces de Darwin en 1859, la recherche a progressé. En 1864, ces restes sont rattachés à l’espèce Homo neanderthalensis.',
            'Les Néandertaliens étaient petits et trapus : environ 169 cm pour les hommes et 160 cm pour les femmes, avec un thorax large et profond, de fortes arcades sourcilières, un grand visage et pas de menton. Ils avaient de grands cerveaux, même plus volumineux que les nôtres. La plupart des squelettes d’adultes bien conservés portent des traces de traumatismes, souvent à la tête ou au cou, probablement liées à une chasse de près. Comme beaucoup de lésions sont cicatrisées, les individus blessés ont été soignés par le groupe. L’espérance de vie moyenne à l’âge adulte était pourtant faible.',
            'Les Néandertaliens étaient d’actifs chasseurs, consommant surtout de la viande d’herbivores (bison, bovidés sauvages, renne, cerf, bouquetin, sanglier), parfois même des mammouths et des rhinocéros laineux, complétée par des végétaux. Ils cuisaient leurs aliments. Leurs outils relèvent le plus souvent de la technologie moustérienne : des éclats de silex transformés en racloirs, en pointes retouchées et en petits bifaces. Ils maîtrisaient le feu depuis au moins 200 000 ans, âge où il sert à produire du brai d’écorce de bouleau. Leurs foyers éclairaient surtout des grottes ou d’autres abris naturels.',
            'L’image de brutes primitives est aujourd’hui abandonnée. Les Néandertaliens chassaient de façon coordonnée, soignaient leurs blessés, utilisaient le feu de façon élaborée, enterraient intentionnellement leurs morts, perforaient et coloraient des coquillages marins, et auraient utilisé l’ocre rouge à Maastricht-Belvédère il y a 200 000 à 250 000 ans. Les anneaux de stalagmites de la grotte de Bruniquel, en France, datés de 176 500 ans, témoignent de planification et peut-être d’un usage symbolique.',
            'Vers 55 000 ans, la principale vague d’humains modernes sortis d’Afrique rencontre les Néandertaliens au Proche et au Moyen-Orient, où des croisements ont lieu. Les humains modernes atteignent l’Europe au plus tôt vers 45 000 ans, en plus grand nombre que les Néandertaliens, et ceux-ci disparaissent vers 40 000 ans. Plusieurs facteurs ont pu jouer : la concurrence pour les ressources, un climat très instable et des croisements qui auraient en partie « absorbé » les Néandertaliens. Les humains non africains portent en moyenne environ 2 % d’ADN néandertalien. La disparition ne s’explique donc pas par une seule cause.'
          ],
          example: {
            statement: 'Selon WHE, les humains modernes arrivent en Europe vers 45 000 ans avant le présent et les Néandertaliens disparaissent des archives fossiles vers 40 000 ans. Quelle durée de coexistence cela représente-t-il environ ?',
            calculation: 'Pour des durées exprimées en années avant le présent, on soustrait : 45 000 − 40 000 = 5 000.',
            answer: 'Environ 5 000 ans. Ces chiffres sont des estimations chronologiques, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi l’image de Néandertaliens « brutes primitives » est-elle remise en cause ?',
            answer: 'Parce que les Néandertaliens chassaient de façon coordonnée, soignaient leurs blessés, utilisaient le feu de façon élaborée, enterraient leurs morts et laissent des traces d’usage de l’ocre, de coquillages parés et de constructions comme à Bruniquel.'
          },
          exercises: [
            {
              question: 'Dans quelle vallée a-t-on découvert en 1856 un squelette qui a donné son nom aux Néandertaliens ?',
              answer: 'Dans la vallée de Neander, en Allemagne.'
            },
            {
              question: 'Quelle proportion d’ADN néandertalien portent en moyenne les humains non africains ?',
              answer: 'Environ 2 %.'
            },
            {
              question: 'Peut-on expliquer la disparition des Néandertaliens par une seule cause ?',
              answer: 'Non. WHE évoque une combinaison de facteurs : concurrence, environnement difficile et, en partie, croisements avec les humains modernes.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neanderthal', url: 'https://www.worldhistory.org/Neanderthal/' },
            { title: 'World History Encyclopedia — Homo Sapiens', url: 'https://www.worldhistory.org/Homo_Sapiens/' }
          ]
        }
      },
      {
        id: 'homo-sapiens',
        title: 'Homo sapiens : origines, migrations et comportements modernes',
        field: 'Afrique puis monde entier · Environ 200 000 ans avant le présent et après',
        summary: 'Comprendre d’où vient notre espèce, comment elle s’est répandue sur la planète et pourquoi la « modernité » est apparue progressivement.',
        lesson: {
          sections: [
            'Homo sapiens (« l’homme sage ») est la seule espèce humaine encore présente aujourd’hui. Selon World History Encyclopedia (WHE), elle est apparue en Afrique il y a environ 200 000 ans. L’Afrique a longtemps été négligée à cause du manque de fossiles, mais de nouvelles découvertes, de meilleures datations et la génétique ont montré que notre origine commune s’y trouve. L’opinion dominante est que des humains archaïques, le plus souvent Homo heidelbergensis, lui-même issu d’Homo erectus, ont évolué progressivement vers Homo sapiens en Afrique de l’Est ou du Sud. Le crâne haut et arrondi caractéristique des humains modernes apparaît à Omo Kibish (Omo 1), en Éthiopie, il y a environ 195 000 ans.',
            'Les humains modernes ont un squelette plus gracile que leurs prédécesseurs, un cerveau très volumineux (environ 1 300 cm³ en moyenne), un front haut et vertical, presque pas d’arcades sourcilières, un menton marqué et un visage placé sous la boîte crânienne. Après l’apparition des premiers traits vers 200 000 ans, les crânes de l’époque ont déjà adopté la forme moderne vers 150 000 ans. WHE souligne que notre définition d’espèce reste difficile : les humains modernes continuent d’évoluer, et le volume du cerveau a diminué depuis 20 000 ans.',
            'Les premiers Homo sapiens connus hors d’Afrique se trouvent à Skhul et à Qafzeh, en Israël, avec des sépultures datées de plus de 100 000 ans, peut-être jusqu’à 130 000 ans. La principale vague de migration hors d’Afrique n’a lieu que vers 55 000 ans, avec des groupes plus nombreux. L’Eurasie orientale est atteinte il y a au moins 40 000 ans ; l’Australie il y a 53 000 à 41 000 ans (un groupe plus ancien aurait peut-être atteint le nord de l’Australie dès 65 000 ans) ; l’Europe vers 45 000 ans ; les Amériques il y a environ 15 000 à 14 000 ans. Sur la route, Homo sapiens a rencontré d’autres espèces humaines, dont les Néandertaliens et les Dénisoviens, avec lesquels il s’est croisé.',
            'Quand sommes-nous devenus des humains au comportement moderne ? WHE explique qu’aucune définition universelle n’existe, mais qu’un élément central est la communication dans un monde organisé par des symboles. La modernité n’est pas apparue d’un coup : des sépultures symboliques existent dès environ 115 000 ans (grotte de Skhul, Israël), avec peut-être un usage symbolique de l’ocre rouge peu après. Vers 60 000 ans, la plupart des aspects associés à la modernité (outils complexes, rituels, traitement élaboré des morts) sont apparus, en des combinaisons variables. Vers 40 000 ans au moins, un comportement pleinement moderne, avec art figuratif, imagerie rituelle ou mythique et instruments de musique, est visible dans tout l’Ancien Monde. Les grottes ornées d’Europe, comme Chauvet et Lascaux, en sont des exemples.',
            'Les premiers Homo sapiens étaient des chasseurs-cueilleurs. Environ 9 000 ans avant le présent, le Néolithique voit naître l’agriculture et un mode de vie plus sédentaire. Les outils sont passés des éclats retouchés du Paléolithique moyen aux outils en os, en bois de cervidé et en ivoire du Paléolithique supérieur (aiguilles à coudre, propulseurs), puis aux outils agricoles. Les Néandertaliens eux aussi ont montré certains aspects de la modernité ; mais après environ 30 000 ans, Homo sapiens est la seule espèce humaine restante. Le moment exact d’apparition du langage reste très difficile à établir.'
          ],
          example: {
            statement: 'Homo sapiens apparaît en Afrique vers 200 000 ans avant le présent et arrive en Europe vers 45 000 ans. Combien de temps sépare ces deux repères ?',
            calculation: 'Pour des durées exprimées en années avant le présent, on soustrait : 200 000 − 45 000 = 155 000.',
            answer: 'Environ 155 000 ans. Ces chiffres sont des estimations chronologiques, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi considère-t-on aujourd’hui l’Afrique comme le berceau de notre espèce ?',
            answer: 'Parce que de nouvelles découvertes archéologiques, de meilleures datations et des données génétiques convergent vers une origine africaine commune.'
          },
          exercises: [
            {
              question: 'Où et vers quand Homo sapiens est-il apparu ?',
              answer: 'En Afrique, vers 200 000 ans avant le présent.'
            },
            {
              question: 'Vers quand la principale vague de migration hors d’Afrique a-t-elle eu lieu ?',
              answer: 'Vers 55 000 ans avant le présent.'
            },
            {
              question: 'Les comportements « modernes » sont-ils apparus partout en même temps ?',
              answer: 'Non. Ils sont apparus progressivement, selon les lieux et les époques, comme le montrent les sépultures symboliques d’environ 115 000 ans puis l’art figuratif d’au moins 40 000 ans.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Homo Sapiens', url: 'https://www.worldhistory.org/Homo_Sapiens/' },
            { title: 'World History Encyclopedia — Neanderthal', url: 'https://www.worldhistory.org/Neanderthal/' },
            { title: 'World History Encyclopedia — Homo Erectus', url: 'https://www.worldhistory.org/Homo_Erectus/' }
          ]
        }
      },
      {
        id: 'diversite-et-metissages',
        title: 'Une évolution en réseau : diversité des hominines et métissages',
        field: 'Afrique, Asie et Europe · Du Pléistocène ancien à la fin du Pléistocène',
        summary: 'Comprendre pourquoi l’évolution humaine ne se résume pas à une ligne droite : espèces contemporaines, nouvelles découvertes et croisements entre populations.',
        lesson: {
          sections: [
            'L’évolution humaine n’est pas une échelle qui mènerait d’une espèce à la suivante. World History Encyclopedia (WHE) rappelle qu’Homo habilis partageait son monde avec Australopithecus africanus, Homo rudolfensis, Paranthropus boisei et Homo erectus. Le registre fossile de cette époque est encore trop mince pour régler tous les débats, mais il montre que plusieurs espèces d’hominines ont coexisté.',
            'Depuis une vingtaine d’années, plusieurs espèces ont été découvertes qui compliquent l’histoire. Homo floresiensis, surnommé « hobbit » parce qu’il ne mesurait qu’environ un mètre, a été découvert en 2003. Homo naledi, trouvé en 2013 dans la grotte de Rising Star, en Afrique du Sud, a lui aussi un petit cerveau. Ces découvertes illustrent, selon WHE, que le volume du cerveau n’est qu’une partie de l’histoire : l’organisation du cerveau, la vie en groupe et l’usage d’outils comptent aussi.',
            'Les Dénisoviens sont un groupe humain éteint, connu à ce jour seulement à partir de la grotte de Denisova, dans les montagnes de l’Altaï, en Sibérie. Ils sont le groupe frère des Néandertaliens, dont ils se sont séparés il y a plus de 390 000 ans, peut-être entre 430 000 et 473 000 ans. En 2012, un fragment d’os long daté d’entre 80 000 et 120 000 ans environ y a été trouvé : il appartenait à une femme dont la mère était néandertalienne et le père dénisovien. La chronologie de WHE situe aussi un croisement entre Dénisoviens et ancêtres des Mélanésiens actuels, probablement en Asie du Sud-Est, entre 54 000 et 44 000 ans.',
            'Les croisements entre populations humaines ont été fréquents. Les humains non africains portent en moyenne environ 2 % d’ADN néandertalien, et nous nous sommes aussi croisés avec les Dénisoviens. WHE signale des échanges génétiques avec les Néandertaliens vers 100 000 ans, probablement au Proche-Orient, puis vers 55 000 ans, qui a laissé la plus forte empreinte. Ces croisements ont aidé les humains modernes à s’adapter au climat plus froid de l’Europe en influençant la peau et les cheveux, mais des recherches indiquent aussi une fertilité réduite et des fausses couches lorsque des garçons possédaient un chromosome Y néandertalien.',
            'Pour WHE, la leçon principale est la diversité des premiers hominines. Le paléoanthropologue Ian Tattersall estime qu’on ne comprendra la situation qu’en admettant que cette diversité dépasse ce que les genres Homo et Australopithecus peuvent contenir. L’image d’un arbre évolutif est donc de plus en plus abandonnée au profit d’un modèle plus fluide, comparable à un ruisseau tressé (avec en plus des impasses pour les populations éteintes) : les espèces se sont croisées, se sont séparées et ont été reliées dans leur développement.'
          ],
          example: {
            statement: 'Un fragment d’os long trouvé dans la grotte de Denisova est daté d’entre 80 000 et 120 000 ans environ. Quelle est la largeur de cette fourchette de datation ?',
            calculation: 'On soustrait la borne basse à la borne haute : 120 000 − 80 000 = 40 000.',
            answer: 'La fourchette est de 40 000 ans. Une datation donne un intervalle d’estimation, pas une date exacte.'
          },
          exercise: {
            question: 'Pourquoi remplace-t-on l’image d’un arbre évolutif par celle d’un ruisseau tressé ?',
            answer: 'Parce que les espèces humaines ne forment pas une ligne droite : elles ont coexisté, se sont croisées et ont été interconnectées, avec aussi des impasses pour les populations éteintes.'
          },
          exercises: [
            {
              question: 'Dans quelle grotte a-t-on découvert en 2012 un os d’un individu dont la mère était néandertalienne et le père dénisovien ?',
              answer: 'Dans la grotte de Denisova, dans les montagnes de l’Altaï, en Sibérie.'
            },
            {
              question: 'En quelle année Homo naledi a-t-il été découvert et dans quel pays ?',
              answer: 'En 2013, dans la grotte de Rising Star, en Afrique du Sud.'
            },
            {
              question: 'Que montrent Homo floresiensis et Homo naledi à propos du volume du cerveau ?',
              answer: 'Qu’un petit corps et un petit cerveau n’empêchent pas d’être humain : le volume du cerveau n’est qu’un critère parmi d’autres.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Homo Habilis', url: 'https://www.worldhistory.org/Homo_Habilis/' },
            { title: 'World History Encyclopedia — Neanderthal', url: 'https://www.worldhistory.org/Neanderthal/' },
            { title: 'World History Encyclopedia — Homo Sapiens', url: 'https://www.worldhistory.org/Homo_Sapiens/' }
          ]
        }
      }
    ]
  },

// BRANCHE PREMIERS INSECTES

  {
    id: 'premiers-insectes',
    sortYear: -400000000,
    title: 'Les premiers insectes',
    note: 'Sept chapitres sur l’origine des insectes, les plus anciens fossiles du Dévonien, la conquête du vol au Carbonifère, les insectes géants, la métamorphose complète, la fin du Permien et les insectes du Crétacé. Les dates sont des estimations ; les datations moléculaires et fossiles diffèrent, et plusieurs identifications de fossiles restent débattues.',
    chapters: [
      {
        id: 'origine-des-insectes',
        title: 'Qu’est-ce qu’un insecte, et quand sont-ils apparus ?',
        field: 'Paléontologie · Origine des insectes · Ordovicien à Dévonien (estimations moléculaires)',
        summary: 'Comprendre ce qu’est un insecte, comment les dates d’origine sont estimées par les gènes et pourquoi elles diffèrent de celles des fossiles.',
        lesson: {
          sections: [
            'Un insecte est un arthropode de la classe des Insecta : à l’état adulte, son corps est divisé en tête, thorax et abdomen, et il porte six pattes. Les insectes font partie des hexapodes, un ensemble qui comprend aussi des groupes voisins comme les collemboles, souvent distingués des insectes au sens strict. Les analyses génétiques les rattachent à la grande lignée des arthropodes proches des crustacés.',
            'En 2014, un consortium international (projet 1KITE) dirigé notamment par Bernhard Misof a reconstruit l’arbre généalogique des insectes à partir de 1 478 gènes codant des protéines, dans un article publié par la revue Science. Les auteurs datent l’origine des insectes de l’Ordovicien inférieur, vers 479 millions d’années, l’origine du vol du Dévonien inférieur, vers 406 millions d’années, celle des grandes lignées actuelles du Mississippien, vers 345 millions d’années, et la grande diversification des insectes à métamorphose complète du Crétacé inférieur.',
            'Ces dates proviennent d’une « horloge moléculaire » calibrée à l’aide de fossiles (37 dans cette étude). Elles indiquent à quel moment des lignées se sont séparées, et non l’âge d’un fossile précis. Les chercheurs ont d’ailleurs indiqué une marge d’incertitude de l’ordre de plus ou moins 30 millions d’années pour l’origine des insectes. Selon cette reconstruction, les premiers insectes auraient quitté la mer pour des milieux côtiers en même temps que les premières plantes terrestres.',
            'Les estimations génétiques sont plus anciennes que les fossiles : les plus anciens restes souvent discutés comme insectes datent d’environ 400 millions d’années, et les fossiles d’insectes ailés n’apparaissent qu’au Carbonifère. Certains auteurs, comme Schachat et ses collègues en 2023, jugent que l’origine très précoce des insectes ailés pourrait en partie être un artefact des méthodes d’analyse (choix des taxons et des fossiles de calibration). Il s’agit donc d’un débat scientifique ouvert, et non d’une contradiction à trancher en faveur d’une seule méthode.',
            'Aujourd’hui, les insectes sont le groupe animal le plus diversifié : environ un million d’espèces sont décrites, soit plus de la moitié des espèces décrites tous organismes confondus. Les estimations de Nigel Stork et de ses collègues situent le nombre total d’espèces d’insectes autour de 5,5 millions (fourchette de 2,6 à 7,8 millions), ce qui signifie qu’environ 80 % restent à découvrir. Les coléoptères à eux seuls représentent environ 25 % des espèces décrites tous organismes confondus.'
          ],
          example: {
            statement: 'Une étude génétique date l’origine des insectes à 479 millions d’années, et le plus ancien fossile souvent cité date d’environ 400 millions d’années. Quel est l’écart entre les deux ?',
            calculation: 'Pour deux dates exprimées en millions d’années avant le présent, on soustrait la plus récente de la plus ancienne : 479 − 400 = 79.',
            answer: 'L’écart est d’environ 79 millions d’années. Il faut y voir une différence entre deux méthodes (gènes et fossiles) et des estimations avec marge d’incertitude, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi une date obtenue par horloge moléculaire n’est-elle pas la même chose que l’âge d’un fossile ?',
            answer: 'L’horloge moléculaire estime le moment où des lignées se sont séparées à partir de différences génétiques et de fossiles de calibration. Un fossile donne seulement l’âge minimal d’une lignée, car les premiers représentants n’ont pas forcément été fossilisés.'
          },
          exercises: [
            {
              question: 'Quelles dates l’étude de Misof et collègues (Science, 2014) propose-t-elle pour l’origine des insectes et pour l’origine du vol ?',
              answer: 'Environ 479 millions d’années (Ordovicien inférieur) pour l’origine des insectes et environ 406 millions d’années (Dévonien inférieur) pour l’origine du vol.'
            },
            {
              question: 'Combien d’espèces d’insectes sont décrites aujourd’hui, et combien en existerait-il selon les estimations de Stork ?',
              answer: 'Environ un million d’espèces sont décrites ; l’estimation moyenne est d’environ 5,5 millions d’espèces, avec une fourchette de 2,6 à 7,8 millions.'
            },
            {
              question: 'Les collemboles sont-ils des insectes au sens strict ?',
              answer: 'Ce sont des hexapodes proches des insectes, mais ils sont souvent distingués des insectes au sens strict dans la classification.'
            }
          ],
          sources: [
            { title: 'Misof et al. (2014) — Phylogenomics resolves the timing and pattern of insect evolution, Science', url: 'https://digitalcollections.anu.edu.au/handle/1885/66648' },
            { title: 'Nature Reviews Genetics — Building the insect tree-of-life', url: 'https://www.nature.com/articles/nrg3870' },
            { title: 'The Scientist — Genetic data clarify insect evolution', url: 'https://www.the-scientist.com/daily-news/genetic-data-clarify-insect-evolution-36457' },
            { title: 'Schachat et al. (2023) — Illusion of flight? Absence, evidence and the age of winged insects', url: 'https://repository.si.edu/items/eadb097e-b3a2-4e3b-a134-fee627eb85e0' },
            { title: 'Stork et al. (2015) — New approaches narrow global species estimates for beetles, insects, and terrestrial arthropods, PNAS', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4475949' },
            { title: 'Stork (2018) — How many species of insects and other terrestrial arthropods are there on Earth?', url: 'https://research-repository.griffith.edu.au/handle/10072/376764' }
          ]
        }
      },
      {
        id: 'fossiles-devoniens',
        title: 'Les plus anciens fossiles du Dévonien : Rhynie, Rhyniognatha et Strudiella',
        field: 'Paléontologie · Dévonien · Environ 400 à 360 millions d’années',
        summary: 'Découvrir les rares fossiles du Dévonien présentés comme insectes et comprendre pourquoi leur identification fait débat.',
        lesson: {
          sections: [
            'Le Rhynie chert est un gisement de l’Aberdeenshire, en Écosse, qui date du Dévonien inférieur, vers 400 millions d’années. Il conserve des organismes des tout premiers écosystèmes terrestres. Dès 1926, Stanley Hirst et S. Maulik y décrivirent des restes d’arthropodes, dont Rhyniella praecursor, un collembole (« springtail ») aujourd’hui largement accepté comme un fossile authentique d’environ 400 millions d’années.',
            'Parmi les pièces du Rhynie chert se trouvait une tête partielle dont les pièces buccales sont conservées. En 1928, Robin J. Tillyard montra qu’elle n’appartenait pas à un collembole et la nomma Rhyniognatha hirsti. En 2004, Michael Engel et David Grimaldi publièrent dans Nature une réanalyse concluant que les mandibules étaient celles d’un véritable insecte, comparables à celles des éphémères, ce qui suggérait un insecte ailé. L’animal, de la taille d’un grain de riz selon la presse de l’époque, était daté entre 396 et 407 millions d’années.',
            'Cette interprétation a été remise en cause. En 2017, Carolin et Joachim Haug ont réexaminé l’unique spécimen, conservé au Natural History Museum de Londres, avec des techniques d’imagerie récentes. Ils ont conclu qu’une interprétation comme myriapode, plus précisément comme un scutigéromorphe (un type de chilopode, ou mille-pattes carnivore), était mieux soutenue, sans pouvoir exclure complètement un insecte. Le statut de Rhyniognatha comme plus ancien insecte reste donc discuté.',
            'En 2012, Romain Garrouste et ses collègues décrivirent dans Nature Strudiella devonica, un petit fossile d’environ 8 millimètres découvert à Strud (Gesves, Belgique) dans des sédiments d’eau douce du Famennien supérieur, vers 360 millions d’années. Ils y voyaient un insecte complet, avec six pattes, de longues antennes, des mandibules triangulaires et un abdomen de dix segments. En 2013, Thomas Hörnschemeyer et ses collègues contestèrent cette identification dans la même revue, et Garrouste et al. répondirent en maintenant leur interprétation. De nombreuses études parlent depuis d’« insecte putatif ».',
            'Le registre dévonien des insectes est donc très pauvre et très débattu. Haug et Haug (2017) dressent la liste des fossiles dévoniens présentés comme insectes : certains ont été réinterprétés comme autres arthropodes, d’autres restent mal conservés ou controversés (par exemple Leverhulmia mariae, du Rhynie chert, d’abord décrit comme myriapode puis comme possible insecte primitif sans ailes). Dans leur réponse de 2013, Garrouste et al. reconnaissent eux-mêmes que, depuis le XIXe siècle, des « insectes » dévoniens se sont souvent révélés être autre chose.'
          ],
          example: {
            statement: 'Rhyniognatha hirsti est datée d’environ 400 millions d’années et Strudiella devonica d’environ 360 millions d’années. Laquelle est la plus ancienne, et de combien ?',
            calculation: 'On compare les deux durées : le nombre le plus grand correspond au fossile le plus ancien. Puis on calcule la différence : 400 − 360 = 40.',
            answer: 'Rhyniognatha est la plus ancienne, d’environ 40 millions d’années. Ces valeurs sont arrondies et, dans les deux cas, l’identification comme insecte est débattue.'
          },
          exercise: {
            question: 'Pourquoi ne peut-on pas affirmer que Rhyniognatha hirsti est le plus ancien insecte connu ?',
            answer: 'Parce que le fossile est une tête partielle unique et que sa réanalyse en 2017 a conclu qu’une interprétation comme myriapode (centipède) était mieux soutenue, sans exclure totalement un insecte.'
          },
          exercises: [
            {
              question: 'Où et à quelle époque a été trouvé Rhyniognatha hirsti ?',
              answer: 'Dans le Rhynie chert, en Aberdeenshire (Écosse), dans des roches du Dévonien inférieur datées d’environ 400 millions d’années.'
            },
            {
              question: 'Qu’est-ce que Strudiella devonica et pourquoi est-elle contestée ?',
              answer: 'C’est un petit arthropode du Famennien de Belgique, décrit en 2012 comme un insecte complet. Sa conservation est incomplète et Hörnschemeyer et al. (2013) ont contesté cette interprétation.'
            },
            {
              question: 'Qui a nommé Rhyniognatha hirsti et en quelle année ?',
              answer: 'Robin J. Tillyard, en 1928.'
            }
          ],
          sources: [
            { title: 'Wikipedia — Rhyniognatha', url: 'https://en.wikipedia.org/wiki/Rhyniognatha' },
            { title: 'Haug & Haug (2017) — The presumed oldest flying insect: more likely a myriapod? PeerJ', url: 'https://peerj.com/articles/3402' },
            { title: 'Wikipedia — Strudiella', url: 'https://en.wikipedia.org/wiki/Strudiella' },
            { title: 'Hörnschemeyer et al. (2013) — Is Strudiella a Devonian insect? Nature', url: 'https://www.nature.com/articles/nature11887' },
            { title: 'Garrouste et al. (2013) — Garrouste et al. reply, Nature', url: 'https://ideas.repec.org/a/nat/nature/v494y2013i7437d10.1038_nature11888.html' },
            { title: 'Denayer et al. (2016) — Stratigraphy of the Late Famennian of Southern Belgium and the Strud locality, Geological Magazine', url: 'https://www.cambridge.org/core/journals/geological-magazine/article/stratigraphy-and-depositional-environments-of-the-late-famennian-late-devonian-of-southern-belgium-and-characterization-of-the-strud-locality/BAFD866A0B080EAFA24836F73F437EBD' }
          ]
        }
      },
      {
        id: 'conquete-du-vol',
        title: 'La conquête du vol au Carbonifère',
        field: 'Paléontologie · Carbonifère · Environ 359 à 299 millions d’années',
        summary: 'Comprendre quand apparaissent les premiers insectes ailés dans les fossiles, pourquoi ils semblent plus récents que les estimations génétiques et comment ils se diversifient.',
        lesson: {
          sections: [
            'Les plus anciens fossiles d’insectes ailés (ptérygotes) datent du milieu du Carbonifère : Schachat et ses collègues (2023) les situent à la fin du Mississippien, entre 328 et 324 millions d’années. L’espèce la plus ancienne connue citée dans la littérature est Delitzschala bitterfeldensis, un paléodictyoptère d’environ 2,5 cm d’envergure découvert dans la région de Bitterfeld/Delitzsch, en Allemagne, dans des couches du Namurien A inférieur (Arnsbergien). Ses ailes portaient un motif de taches encore visible sur le fossile.',
            'Il existe donc un décalage d’environ 80 millions d’années entre l’origine du vol estimée par les gènes (vers 406 millions d’années selon Misof et al.) et les premiers insectes ailés fossiles. Schachat et ses collègues ont testé plusieurs explications possibles de cette lacune (biais d’échantillonnage, de conservation, taille du corps) et n’ont pas trouvé de soutien pour elles. Ils suggèrent que l’âge très ancien déduit des gènes pourrait résulter d’un artefact d’analyse. Le sujet n’est pas tranché.',
            'À partir du début du Carbonifère, avant 325 millions d’années, une vaste radiation commence selon Conrad Labandeira et John Sepkoski (1993), avec des pics de diversité au Carbonifère supérieur et au Permien moyen. D’après les synthèses paléontologiques de l’équipe d’André Nel, cette explosion de diversité touche les insectes ailés mais pas les lignées d’hexapodes sans ailes : l’aile apparaît comme une innovation décisive.',
            'Parmi les premiers groupes ailés figurent les Palaeodictyoptera, un ensemble éteint caractérisé par des pièces buccales de type piqueur-suceur, probablement utilisées pour se nourrir des tissus internes de plantes vasculaires. En 1996, Conrad Labandeira et Tom Phillips documentèrent un cas d’alimentation par piqûre de fluides sur des fougères arborescentes (Marattiales) du Pennsylvanien supérieur. Ces insectes montrent que, dès le Carbonifère, les insectes exploitent déjà des modes d’alimentation variés sur les plantes.'
          ],
          example: {
            statement: 'L’origine du vol est estimée à 406 millions d’années par les gènes, et les plus anciens fossiles d’insectes ailés sont datés de 324 millions d’années. Quel est l’écart ?',
            calculation: 'On soustrait la date des fossiles de l’estimation génétique : 406 − 324 = 82.',
            answer: 'L’écart est d’environ 82 millions d’années, c’est-à-dire de l’ordre de 80 millions d’années. C’est ce décalage que les chercheurs discutent.'
          },
          exercise: {
            question: 'Quelle est la différence entre la date génétique d’origine du vol et la date des plus anciens fossiles d’insectes ailés ?',
            answer: 'La date génétique est une estimation de la séparation des lignées (vers 406 millions d’années), tandis que les fossiles datent de 328 à 324 millions d’années : les fossiles sont plus récents d’environ 80 millions d’années.'
          },
          exercises: [
            {
              question: 'Quel est le plus ancien insecte ailé connu cité dans la littérature, et où a-t-il été trouvé ?',
              answer: 'Delitzschala bitterfeldensis, un paléodictyoptère trouvé dans la région de Bitterfeld/Delitzsch, en Allemagne, dans des couches du Namurien A inférieur.'
            },
            {
              question: 'Que désigne le terme « piqueur-suceur » pour les Palaeodictyoptera ?',
              answer: 'Il désigne des pièces buccales en forme de stylets servant à percer les tissus d’une plante et à en aspirer les fluides.'
            },
            {
              question: 'Les auteurs s’accordent-ils sur la raison de la lacune entre date génétique et fossiles ?',
              answer: 'Non. Schachat et al. (2023) ne trouvent pas de soutien pour les explications classiques (échantillonnage, conservation, taille) et suggèrent un possible artefact d’analyse ; le débat reste ouvert.'
            }
          ],
          sources: [
            { title: 'Schachat et al. (2023) — Illusion of flight? Absence, evidence and the age of winged insects', url: 'https://repository.si.edu/items/eadb097e-b3a2-4e3b-a134-fee627eb85e0' },
            { title: 'Brauckmann et al. — The stratigraphical position of the oldest known Pterygota (Carboniferous, Namurian)', url: 'https://popups.uliege.be/0037-9395/index.php?id=1961' },
            { title: 'Wikipedia — Delitzschala', url: 'https://en.wikipedia.org/wiki/Delitzschala' },
            { title: 'Labandeira & Sepkoski (1993) — Insect diversity in the fossil record, Science', url: 'https://repository.si.edu/bitstream/handle/10088/6563/Science_1993.pdf' },
            { title: 'Labandeira & Phillips (1996) — Insect fluid-feeding on Upper Pennsylvanian tree ferns', url: 'https://repository.si.edu/handle/10088/5978' },
            { title: 'Misof et al. (2014) — Phylogenomics resolves the timing and pattern of insect evolution, Science', url: 'https://digitalcollections.anu.edu.au/handle/1885/66648' }
          ]
        }
      },
      {
        id: 'insectes-geants',
        title: 'Les insectes géants du Paléozoïque : Meganeura et les « griffenflies »',
        field: 'Paléontologie · Carbonifère et Permien · Environ 300 à 250 millions d’années',
        summary: 'Découvrir les plus grands insectes volants connus, leur découverte au XIXe siècle et le débat sur le rôle de l’oxygène.',
        lesson: {
          sections: [
            'En 1880, des fossiles de très grands insectes sont découverts dans les couches houillères du Stéphanien de Commentry, en France. Le paléoentomologiste Charles Brongniart en publie une première description en 1884 grâce à des fossiles fournis par l’ingénieur des mines Henri Fayol, sous le nom de Dictyoneura monyi, en hommage à Stéphane Mony, directeur des mines. En 1885, il crée le genre Meganeura (« à grandes nervures », en référence au réseau de nervures des ailes). L’holotype est conservé au Muséum national d’histoire naturelle de Paris.',
            'Meganeura monyi, du Carbonifère supérieur (vers 300 millions d’années), avait une envergure de l’ordre de 65 à 70 cm selon les spécimens et les estimations. Meganeuropsis permiana, du Permien inférieur, décrit par Frank Carpenter en 1939, est encore plus grand : on lui attribue des envergures allant jusqu’à environ 71 cm, ce qui en fait un des plus grands insectes volants connus. Ces animaux appartiennent à l’ordre éteint des Meganisoptera : ce sont des prédateurs d’aspect proche des libellules, mais pas de vraies libellules, d’où le nom de « griffenflies » (« griffonflies ») proposé par Grimaldi et Engel (2005).',
            'Pourquoi atteignaient-ils de telles tailles ? Une hypothèse ancienne, formulée dès 1911 par Harlé, invoque un air plus riche en oxygène : les reconstitutions situent la teneur de l’atmosphère du Carbonifère et du Permien entre 30 et 35 %, contre environ 21 % aujourd’hui. Cette idée a été développée notamment par Robert Dudley (1998) à propos de l’évolution du vol des insectes paléozoïques.',
            'Cette hypothèse rencontre plusieurs objections. De très grands Meganeuridae, d’environ 45 cm d’envergure, existent encore au Permien supérieur à Lodève (France), à une période où l’oxygène était déjà nettement plus faible. Par ailleurs, leur corps était peu massif : moins lourd que celui de plusieurs coléoptères actuels. Des travaux récents rapportés par Futura Sciences estiment que l’oxygène a pu jouer un rôle, mais probablement pas comme facteur principal ou limitant, et que la disparition des insectes géants fut sans doute multifactorielle.',
            'Les Meganisoptera ne survivent pas à la fin du Permien. Ils font partie des groupes d’insectes du Paléozoïque qui disparaissent avant le Mésozoïque, alors que de nombreux autres ordres d’insectes, plus petits, traversent cette période et donnent les faunes modernes (voir le chapitre sur la fin du Permien).'
          ],
          example: {
            statement: 'Meganeura monyi vit au Carbonifère supérieur (environ 300 millions d’années) et Meganeuropsis permiana au Permien inférieur. Lequel est le plus ancien ?',
            calculation: 'Le Permien suit le Carbonifère : une espèce du Carbonifère supérieur est donc plus ancienne qu’une espèce du Permien inférieur.',
            answer: 'Meganeura monyi est la plus ancienne. Ces deux insectes se situent autour de la limite Carbonifère-Permien, vers 299 millions d’années.'
          },
          exercise: {
            question: 'Pourquoi appelle-t-on parfois ces insectes « griffenflies » plutôt que « libellules géantes » ?',
            answer: 'Parce qu’ils appartiennent à un ordre éteint, les Meganisoptera, qui n’est pas celui des libellules actuelles ; « libellule géante » est donc trompeur selon Grimaldi et Engel (2005).'
          },
          exercises: [
            {
              question: 'Où et quand les premiers fossiles de Meganeura ont-ils été découverts ?',
              answer: 'À Commentry (France), en 1880, dans des couches houillères du Carbonifère supérieur ; Charles Brongniart les décrivit en 1884-1885.'
            },
            {
              question: 'Quel argument montre que l’oxygène n’explique pas à lui seul le gigantisme de ces insectes ?',
              answer: 'De très grands Meganeuridae (environ 45 cm d’envergure) existaient encore au Permien supérieur, quand l’oxygène était déjà plus bas qu’au Carbonifère.'
            },
            {
              question: 'Quel est l’ordre des insectes qui contient Meganeura et Meganeuropsis ?',
              answer: 'L’ordre éteint des Meganisoptera.'
            }
          ],
          sources: [
            { title: 'Wikipedia — Meganeura', url: 'https://en.wikipedia.org/wiki/Meganeura' },
            { title: 'Wikipedia — Meganisoptera', url: 'https://en.wikipedia.org/wiki/Meganisoptera' },
            { title: 'Earth Archives — The biggest insect ever was a huge dragonfly', url: 'https://eartharchives.org/articles/the-biggest-insect-ever-was-a-huge-dragonfly' },
            { title: 'Futura Sciences — When dragons and dragonflies ruled the skies', url: 'https://www.futura-sciences.com/en/?p=29524' },
            { title: 'Discover Wildlife — Why were prehistoric insects so large?', url: 'https://www.discoverwildlife.com/animal-facts/insects-invertebrates/why-were-prehistoric-insects-so-large' }
          ]
        }
      },
      {
        id: 'metamorphose-complete',
        title: 'La métamorphose complète : l’essor des holométaboles',
        field: 'Paléontologie · Carbonifère et Permien · Environ 355 à 250 millions d’années',
        summary: 'Comprendre ce qu’est la métamorphose complète, quand elle apparaît d’après les gènes et d’après les fossiles, et pourquoi les holométaboles dominent aujourd’hui.',
        lesson: {
          sections: [
            'Les holométaboles (ou endoptérygotes) sont les insectes à métamorphose complète : un œuf donne une larve, qui grandit par stades successifs, devient une nymphe (pupe, en général le stade de repos), puis un adulte. Ils regroupent les quatre plus grands ordres d’insectes (coléoptères, hyménoptères, lépidoptères et diptères) et comptent plus d’un million d’espèces vivantes, soit la majorité de la diversité des insectes.',
            'Les estimations moléculaires placent l’origine des holométaboles dans le Carbonifère : environ 355 millions d’années selon Wiegmann et ses collègues. La même synthèse note que les fossiles définitifs n’apparaissent qu’au Permien, entre 299 et 280 millions d’années. En 2007, André Nel et ses collègues avaient décrit en France un fossile d’environ 310 millions d’années, rattaché à la famille des Protomeropidae, qu’ils présentaient comme preuve de la métamorphose complète au Carbonifère. Cependant, une étude de 2013 dans Nature rappelle que le registre fossile du Pennsylvanien reste incomplet et que plusieurs fossiles ont été attribués à tort aux holométaboles.',
            'L’étude de Nel et al. (Nature, 2013), « The earliest known holometabolous insects », conclut que les plus anciens coléoptères indiscutables datent du début du Permien. Les hyménoptères (hyménoptéroïdes) forment le groupe frère de tous les autres holométaboles. Les auteurs estiment par ailleurs que cette lignée n’a rencontré un succès plus net qu’après l’extinction de la fin du Permien.',
            'Pour les coléoptères, une vaste analyse publiée dans PNAS en 2019 par McKenna et ses collègues situe leur origine au Carbonifère, vers 327 millions d’années, et indique que la plupart des groupes actuels de coléoptères seraient apparus avant la fin du Crétacé, il y a 66 millions d’années. Ces dates viennent de calculs moléculaires et sont donc plus anciennes que les fossiles.',
            'Les relations avec les plantes montrent aussi l’ancienneté du groupe. Une étude publiée dans Scientific Reports (2025) réexamine des traces d’alimentation (Asteronomus maeandriformis) du Permien inférieur de Thuringe, en Allemagne. Elle en conclut qu’un comportement d’alimentation à l’intérieur des tissus végétaux existait chez les holométaboles dès le tout début du Permien, soit plus de 40 millions d’années plus tôt qu’on ne l’avait supposé.'
          ],
          example: {
            statement: 'Selon Wiegmann et al., l’origine des holométaboles est estimée à 355 millions d’années, et les fossiles définitifs apparaissent entre 299 et 280 millions d’années. Quel est l’écart ?',
            calculation: 'On soustrait chaque borne des fossiles à l’estimation moléculaire : 355 − 299 = 56 et 355 − 280 = 75.',
            answer: 'L’écart va d’environ 56 à 75 millions d’années. Il traduit l’écart entre horloge moléculaire et fossiles, avec leurs incertitudes respectives.'
          },
          exercise: {
            question: 'Quelles sont les étapes de la vie d’un insecte à métamorphose complète ?',
            answer: 'Œuf, larve (avec plusieurs stades de croissance), nymphe ou pupe, puis adulte.'
          },
          exercises: [
            {
              question: 'Quels sont les quatre plus grands ordres d’insectes holométaboles ?',
              answer: 'Les coléoptères, les hyménoptères, les lépidoptères et les diptères.'
            },
            {
              question: 'Que montre l’étude de Nel et al. (2013) à propos des plus anciens coléoptères ?',
              answer: 'Que les plus anciens coléoptères indiscutables datent du début du Permien.'
            },
            {
              question: 'Pourquoi les dates moléculaires et les dates fossiles des holométaboles diffèrent-elles ?',
              answer: 'Les dates moléculaires donnent le moment de séparation des lignées, souvent plus ancien que les premiers fossiles identifiables ; le registre fossile du Carbonifère est incomplet et certaines attributions sont discutées.'
            }
          ],
          sources: [
            { title: 'Wikipedia — Holometabola', url: 'https://en.wikipedia.org/wiki/Holometabola' },
            { title: 'Wiegmann et al. (2009) — Holometabola, TimeTree of Life', url: 'https://TimeTree.org/public/data/pdf/Wiegmann2009Chap31.pdf' },
            { title: 'Nel et al. (2013) — The earliest known holometabolous insects, Nature', url: 'https://ideas.repec.org/a/nat/nature/v503y2013i7475d10.1038_nature12629.html' },
            { title: 'Labandeira (2011) — Evidence for an earliest Late Carboniferous divergence time of Holometabola', url: 'https://repository.si.edu/server/api/core/bitstreams/2f5447f9-c342-4677-a2cc-87afc42ecb75/content' },
            { title: 'PNAS — In This Issue (McKenna et al., 2019, évolution des coléoptères)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6907388' },
            { title: 'Scientific Reports (2025) — Endophytic feeding in the early Permian (Asteronomus)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12378220' }
          ]
        }
      },
      {
        id: 'fin-du-permien-et-trias',
        title: 'La fin du Permien et les insectes du Trias',
        field: 'Paléontologie · Permien terminal et Trias · Environ 252 à 201 millions d’années',
        summary: 'Comprendre l’effet de la plus grande crise d’extinction sur les insectes, un sujet encore débattu, et la mise en place des faunes modernes.',
        lesson: {
          sections: [
            'L’extinction de la fin du Permien, il y a environ 252 millions d’années, est la crise de biodiversité la plus sévère de l’histoire de la Terre. Pour les insectes, ses effets sont débattus. Labandeira et Sepkoski (1993) relevaient que les Palaeodictyopteroidea sont le seul grand groupe d’insectes (au niveau supra-ordinal) à s’être éteint, et que trois autres ordres, déjà réduits, disparaissent aussi au cours de cette période. Ils jugeaient probable que le minimum de diversité observé au Trias reflétait en partie la crise, tout en reconnaissant qu’il pouvait aussi venir d’un manque de gisements du Trias inférieur.',
            'Les spécialistes soulignent la rareté des gisements exceptionnels proches des extinctions de masse : on ne peut donc pas dire précisément combien de taxons d’insectes ont disparu. Les Palaeodictyopteroidea déclinaient déjà bien avant la limite Permien-Trias. Selon cette lecture, la fin du Permien ressemble pour les insectes à une « éclipse » progressive plutôt qu’à une extinction brutale, même si elle se situe au cœur de la transition entre la faune d’insectes paléozoïque et la faune moderne.',
            'Les études quantitatives donnent des tableaux nuancés. Selon des travaux de Ponomarenko rapportés par Zhang et ses collègues (2022), presque toutes les familles d’insectes permiennes déclinent du Permien moyen au Permien supérieur et environ un tiers des familles disparaissent à la limite Permien-Trias, mais la diversité globale se stabilise grâce à l’apparition de nouvelles familles. Jouault et ses collègues (Nature Communications, 2022) parlent de causes multiples et d’extinctions propres à certaines lignées. Une étude de 2023 (Gui et al.) identifie plusieurs crises d’insectes au Permien et au Trias, correspondant à des crises marines connues.',
            'Au Trias, la faune se modernise. Selon la synthèse de Gui et ses collègues (2023), la diversité des insectes augmente rapidement à l’Anisien (Trias moyen), et des ordres dominants aujourd’hui, comme les coléoptères, les diptères, les hyménoptères et les hémiptères, s’imposent ; les coléoptères deviennent le groupe dominant au Carnien. D’après les synthèses générales, les survivants de la crise évoluent au Trias vers les ordres d’insectes essentiellement modernes, et la plupart des familles modernes apparaissent au Jurassique.'
          ],
          example: {
            statement: 'Les plus anciens fossiles d’insectes ailés datent de 324 millions d’années et la crise de la fin du Permien d’environ 252 millions d’années. Combien de temps les insectes ailés fossiles ont-ils existé avant cette crise ?',
            calculation: 'On soustrait la date de la crise de celle des premiers fossiles : 324 − 252 = 72.',
            answer: 'Environ 72 millions d’années. Les insectes ailés avaient donc déjà une longue histoire fossile avant la crise.'
          },
          exercise: {
            question: 'Pourquoi est-il difficile de mesurer l’effet de la crise de la fin du Permien sur les insectes ?',
            answer: 'Parce que les gisements d’insectes proches de cette période sont rares, que le registre fossile est lacunaire et que certains groupes déclinaient déjà avant la crise.'
          },
          exercises: [
            {
              question: 'Quel groupe d’insectes est, selon Labandeira et Sepkoski (1993), le seul grand groupe supra-ordinal à s’être éteint ?',
              answer: 'Les Palaeodictyopteroidea.'
            },
            {
              question: 'Vers quelle date a lieu l’extinction de la fin du Permien ?',
              answer: 'Vers 252 millions d’années.'
            },
            {
              question: 'Quels ordres dominent la faune d’insectes au Trias d’après Gui et al. (2023) ?',
              answer: 'Des ordres dominants aujourd’hui comme les coléoptères, les diptères, les hyménoptères et les hémiptères, les coléoptères devenant dominants au Carnien.'
            }
          ],
          sources: [
            { title: 'Labandeira & Sepkoski (1993) — Insect diversity in the fossil record, Science', url: 'https://repository.si.edu/bitstream/handle/10088/6563/Science_1993.pdf' },
            { title: 'Entomology Today — What the fossil record tells us about insect extinctions in deep time', url: 'https://entomologytoday.org/2021/02/03/what-fossil-record-tells-about-insect-extinctions-deep-time/' },
            { title: 'Zhang et al. (2022) — Widespread grylloblattid insects after the end-Permian mass extinction, Frontiers in Earth Science', url: 'https://www.frontiersin.org/articles/10.3389/feart.2022.853833/full' },
            { title: 'Gui et al. (2023) — Evolution of insect diversity in the Permian and Triassic, Palaeoentomology', url: 'https://mapress.com/pe/article/view/50342/52145' },
            { title: 'Wikipedia — Evolution of insects', url: 'https://en.wikipedia.org/wiki/Evolution_of_insects' }
          ]
        }
      },
      {
        id: 'cretace-fleurs-et-ambre',
        title: 'Le Crétacé : fleurs, pollinisation et insectes dans l’ambre',
        field: 'Paléontologie · Crétacé · Environ 145 à 66 millions d’années',
        summary: 'Découvrir comment l’ambre du Crétacé révèle la pollinisation des premières plantes à fleurs et les premières fourmis.',
        lesson: {
          sections: [
            'Les plantes à fleurs (angiospermes) commencent à se diversifier au Crétacé, vers 125 millions d’années. Dès l’époque de Darwin, qui parlait d’un « abominable mystère » à propos de leur rapide diversification, beaucoup de scientifiques pensent que la pollinisation par les insectes a joué un rôle important dans cet essor, mais la preuve directe manquait pour le Crétacé.',
            'En 2019, Bao et ses collègues ont décrit dans PNAS un coléoptère de la famille des Mordellidae, Angimordella burmitina, conservé dans de l’ambre birman daté d’environ 99 millions d’années. Il porte de nombreux grains de pollen tricolpés, caractéristiques des eudicotylédones. Les auteurs y voient la plus ancienne preuve directe de pollinisation d’angiospermes par des insectes, repoussant d’au moins 50 millions d’années la plus ancienne preuve antérieure, datée de l’Éocène moyen (vers 48-45 millions d’années). Des insectes pollinisaient déjà des gymnospermes auparavant, avec des preuves directes pour des thrips, des mouches, des coléoptères et des mécoptères.',
            'En 2021, une autre équipe (Nanjing Institute of Geology and Palaeontology et Université de Bristol) a décrit dans Nature Plants un petit coléoptère des fleurs, Pelretes vivificus, également dans l’ambre birman d’environ 99 millions d’années, associé à des coprolithes contenant du pollen d’eudicotylédones. Selon l’un des auteurs, Erik Tihelka, les coléoptères étaient déjà parmi les premiers visiteurs des fleurs, bien avant les abeilles et les papillons pollinisateurs.',
            'L’ambre du Crétacé conserve aussi les plus anciennes fourmis incontestées. Les fourmis de l’ambre birman (Albien-Cénomanien) et de l’ambre de Charente-Maritime (France) comptent parmi les plus anciennes connues, tandis que la première fourmi crétacée décrite, Sphecomyrma freyi (Wilson et Brown, 1967), vient de l’ambre du New Jersey (Turonien, vers 92 millions d’années). Ces fourmis étaient rares à l’époque. Selon Barden et Grimaldi (2016), le genre éteint Gerontoformica avait déjà des castes reproductrices distinctes, et en 2025 une équipe a décrit un fragment de colonie avec une ouvrière et une reine ailée dans le même morceau d’ambre birman.',
            'Les ambres du Crétacé, en particulier celui de la vallée de Hukawng (État Kachin, Myanmar), offrent une abondance exceptionnelle d’insectes préservés, avec un niveau de détail remarquable. Les analyses génétiques de Misof et al. (2014) vont dans le même sens : mouches, coléoptères, papillons, abeilles, fourmis et guêpes ont des origines paléozoïques, mais leur grande diversification date surtout du Crétacé, à l’époque de l’essor des plantes à fleurs.'
          ],
          example: {
            statement: 'Les plantes à fleurs commencent à se diversifier vers 125 millions d’années, et la preuve directe de pollinisation de l’ambre birman date d’environ 99 millions d’années. Quel intervalle les sépare ?',
            calculation: 'On soustrait la date de la preuve de pollinisation de celle du début de la diversification : 125 − 99 = 26.',
            answer: 'Environ 26 millions d’années. Cet intervalle ne dit pas quand la pollinisation a commencé : les fossiles ne donnent qu’une date minimale pour l’interaction.'
          },
          exercise: {
            question: 'Pourquoi l’ambre est-il particulièrement précieux pour étudier les insectes du Crétacé ?',
            answer: 'Parce qu’il peut conserver des insectes avec un grand niveau de détail et parfois des indices de comportement, comme du pollen porté par un coléoptère ou la présence d’une reine et d’une ouvrière ensemble.'
          },
          exercises: [
            {
              question: 'Quel insecte de l’ambre birman fournit en 2019 la plus ancienne preuve directe de pollinisation d’angiospermes ?',
              answer: 'Angimordella burmitina, un coléoptère de la famille des Mordellidae, daté d’environ 99 millions d’années.'
            },
            {
              question: 'Quelle fourmi crétacée fut décrite en 1967 dans l’ambre du New Jersey ?',
              answer: 'Sphecomyrma freyi, décrite par Wilson et Brown, dans de l’ambre du Turonien.'
            },
            {
              question: 'Les fourmis étaient-elles abondantes au Crétacé ?',
              answer: 'Non. Elles étaient rares dans les ambres du Crétacé, et leur diversification majeure date de l’ère suivante, le Cénozoïque.'
            }
          ],
          sources: [
            { title: 'Bao et al. (2019) — Pollination of Cretaceous flowers, PNAS', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6900596/' },
            { title: 'Chinese Academy of Sciences — Amber fossil sheds light on early pollinators (Pelretes vivificus)', url: 'https://english.cas.cn/newsroom/research_news/earth/202104/t20210413_267092.shtml' },
            { title: 'Engel & Grimaldi (2005) — Primitive new ants in Cretaceous amber, American Museum Novitates', url: 'https://digitallibrary.amnh.org/handle/2246/5676' },
            { title: 'Barden & Grimaldi (2016) — Adaptive radiation in socially advanced stem-group ants from the Cretaceous', url: 'https://dictionnaire-amoureux-des-fourmis.fr/F/Fossiles/Barden-ants-cretaceous.pdf' },
            { title: 'Myrmecological News (2025) — Ancient ant colony and male fossil in 99-million-year-old amber', url: 'https://blog.myrmecologicalnews.org/2025/02/25/ancient-ant-colony-and-male-fossil-unveil-evolutionary-secrets-in-99-million-year-old-amber/' },
            { title: 'Nature Reviews Genetics — Building the insect tree-of-life', url: 'https://www.nature.com/articles/nrg3870' }
          ]
        }
      }
    ]
  },

];

 