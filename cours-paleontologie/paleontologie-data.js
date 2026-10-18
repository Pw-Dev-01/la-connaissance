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
    title: 'Les grands livres',
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

];

 