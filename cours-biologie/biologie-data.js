window.courseCatalog = [
// BRANCHE 1 : LES CELLULES VIVANTES

  {
    id: 'cellule-vivante',
    title: 'Les cellules vivantes',
    note: 'Six chapitres sur la théorie cellulaire, les cellules procaryotes et eucaryotes, la membrane plasmique, l’énergie cellulaire et le cycle cellulaire. Les ordres de grandeur sont indicatifs : les tailles et les structures varient selon les types de cellules.',
    chapters: [
      {
        id: 'theorie-cellulaire',
        title: 'La théorie cellulaire et l’étude des cellules',
        field: 'Biologie cellulaire · Histoire et principes de la théorie cellulaire',
        summary: 'Comprendre comment la cellule a été découverte, ce que dit la théorie cellulaire et pourquoi les cellules restent de petite taille.',
        lesson: {
          sections: [
            'En 1665, le scientifique britannique Robert Hooke observe au microscope de fines tranches de liège et y voit de petites logettes régulières qu’il nomme « cellules ». Ce qu’il observe correspond aux parois de cellules végétales mortes, et non à des cellules vivantes avec leur contenu. Dans la seconde moitié du XVIIe siècle, Antoni van Leeuwenhoek, aux Pays-Bas, utilise des microscopes à une seule lentille pour observer des micro-organismes vivants. Ces observations montrent que le monde vivant contient des êtres invisibles à l’œil nu, mais l’importance de la cellule comme unité fondamentale de la vie n’est pas encore comprise.',
            'La théorie cellulaire se construit au XIXe siècle. En 1838, le botaniste allemand Matthias Schleiden décrit les tissus végétaux comme composés de cellules. En 1839, le physiologiste Theodor Schwann étend cette observation aux tissus animaux. En 1855, Rudolf Virchow popularise l’idée que toute cellule provient d’une cellule préexistante (formule latine omnis cellula e cellula), qui corrige l’idée de Schleiden et Schwann selon laquelle les cellules pourraient se former spontanément. Le rôle de Robert Remak, qui avait défendu des idées voisines, fait l’objet d’une controverse historique sur l’attribution du mérite.',
            'La théorie cellulaire moderne s’exprime généralement en trois énoncés : tous les êtres vivants sont composés d’une ou de plusieurs cellules ; la cellule est l’unité de base de la structure et du fonctionnement du vivant ; toute nouvelle cellule provient d’une cellule déjà existante. Ces énoncés ne disent pas que tous les êtres vivants sont semblables : une bactérie est un organisme composé d’une seule cellule, alors qu’un animal ou une plante en comprend un très grand nombre, de types différents.',
            'La plupart des cellules sont petites pour une raison physique : le rapport entre la surface (par laquelle la cellule échange des substances avec son milieu) et le volume (qui détermine ses besoins) diminue quand la taille augmente. Une cellule trop grande aurait une surface insuffisante pour alimenter son volume. L’étude des cellules dépend aussi des instruments : le microscope optique permet de voir la forme générale et certains compartiments, tandis que le microscope électronique, plus résolvant, révèle l’ultrastructure, c’est-à-dire les détails internes comme les membranes et les organites.'
          ],
          example: {
            statement: 'Un cube de 1 unité de côté et un cube de 2 unités de côté modélisent deux cellules de tailles différentes. Comparer leur rapport surface/volume.',
            calculation: 'Cube de côté 1 : surface = 6 × 1² = 6 ; volume = 1³ = 1 ; rapport = 6. Cube de côté 2 : surface = 6 × 2² = 24 ; volume = 2³ = 8 ; rapport = 3.',
            answer: 'Quand le côté double, le rapport surface/volume est divisé par 2 (de 6 à 3). Ce modèle simplifié illustre pourquoi les cellules grandes ont plus de difficulté à échanger avec leur milieu.'
          },
          exercise: {
            question: 'En quoi la formule de Virchow complète-t-elle les travaux de Schleiden et Schwann ?',
            answer: 'Schleiden et Schwann montrent que les tissus végétaux et animaux sont faits de cellules ; Virchow ajoute que toute cellule provient d’une cellule préexistante.'
          },
          exercises: [
            {
              question: 'Quel scientifique a utilisé le mot « cellule » en 1665 après avoir observé du liège ?',
              answer: 'Robert Hooke.'
            },
            {
              question: 'Quels sont les trois énoncés de la théorie cellulaire moderne ?',
              answer: 'Tous les êtres vivants sont composés d’une ou de plusieurs cellules ; la cellule est l’unité de base de la structure et du fonctionnement du vivant ; toute cellule provient d’une cellule préexistante.'
            },
            {
              question: 'Pour un cube de 4 unités de côté, quel est le rapport surface/volume ?',
              answer: 'Surface = 6 × 16 = 96 ; volume = 64 ; rapport = 96 / 64 = 1,5.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 4.1 Studying Cells', url: 'https://openstax.org/books/biology-2e/pages/4-1-studying-cells' },
            { title: 'LibreTexts — Studying Cells: Cell Theory', url: 'https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_(Boundless)/04:_Cell_Structure/4.03:_Studying_Cells_-_Cell_Theory' },
            { title: 'LibreTexts (OpenStax Microbiology) — Foundations of Modern Cell Theory', url: 'https://bio.libretexts.org/Courses/Clinton_College/BIO_403%3A_Microbiology_(Neely)/01%3A_The_Building_Blocks_of_Life__Biological_Macromolecules_and_the_Generation_of_the_Cell/1.03%3A_The_Cell/1.3.02%3A_Foundations_of_Modern_Cell_Theory' }
          ]
        }
      },
      {
        id: 'cellules-procaryotes',
        title: 'Les cellules procaryotes : bactéries et archées',
        field: 'Biologie cellulaire · Cellules sans noyau délimité par une membrane',
        summary: 'Décrire l’organisation des cellules procaryotes, leurs structures principales et leur grande diversité métabolique.',
        lesson: {
          sections: [
            'Les cellules procaryotes n’ont ni noyau délimité par une membrane ni organites entourés de membranes. Leur ADN se trouve dans une région du cytoplasme appelée nucléoïde. Le terme regroupe deux grands domaines du vivant, les Bactéries et les Archées, qui sont des organismes distincts malgré leur aspect cellulaire voisin. Les cellules procaryotes sont en général beaucoup plus petites que les cellules eucaryotes : OpenStax indique des tailles typiques d’environ 0,1 à 5 micromètres pour les procaryotes, contre 10 à 100 micromètres pour les eucaryotes.',
            'Une cellule procaryote typique possède une membrane plasmique, un cytoplasme, des ribosomes et un chromosome le plus souvent circulaire. Les ribosomes procaryotes sont plus petits que ceux des eucaryotes (on parle de ribosomes 70S, contre 80S). Beaucoup de procaryotes portent aussi des plasmides, petites molécules d’ADN circulaires supplémentaires, qui peuvent contenir des gènes utiles comme la résistance à des antibiotiques. La plupart ont une paroi cellulaire ; chez les bactéries, elle contient du peptidoglycane, tandis que la composition de la paroi des archées est différente.',
            'À l’extérieur, certaines cellules procaryotes présentent une capsule, des flagelles qui permettent de se déplacer, ou des pili et fimbriae qui servent à s’attacher à des surfaces ou à échanger de l’ADN. Elles se reproduisent surtout par fission binaire : le chromosome est copié, puis la cellule se divise en deux cellules filles. Les procaryotes échangent aussi des gènes par transfert horizontal (transformation, conjugaison, transduction), ce qui explique en partie la propagation rapide de certains caractères, comme la résistance aux antibiotiques. La transformation est le phénomène observé dans les expériences de Griffith, abordées dans la branche consacrée à l’ADN.',
            'Les procaryotes présentent une grande diversité de modes de vie. Certains utilisent la lumière pour fabriquer leurs molécules organiques (phototrophes, comme les cyanobactéries), d’autres tirent leur énergie de réactions chimiques (chimiotrophes) ; certains ont besoin d’oxygène, d’autres vivent sans oxygène. Parmi les archées, de nombreuses espèces vivent dans des milieux extrêmes (chaleur, salinité élevée, acidité), d’où le nom d’extrêmophiles, mais des archées existent aussi dans des milieux ordinaires. Les procaryotes jouent des rôles essentiels dans la décomposition, les cycles des éléments comme l’azote et les microbiotes associés aux autres organismes.'
          ],
          example: {
            statement: 'Une cellule eucaryote mesure 50 micromètres de diamètre et une bactérie 2 micromètres (valeurs illustratives). Combien de fois la cellule eucaryote est-elle plus large ?',
            calculation: '50 / 2 = 25.',
            answer: 'La cellule eucaryote est 25 fois plus large dans cet exemple. Ces valeurs sont des ordres de grandeur : les tailles réelles varient beaucoup selon les espèces.'
          },
          exercise: {
            question: 'Pourquoi dit-on que les procaryotes n’ont pas de « noyau » alors qu’ils ont de l’ADN ?',
            answer: 'Leur ADN n’est pas entouré d’une enveloppe nucléaire : il se trouve dans une région du cytoplasme appelée nucléoïde.'
          },
          exercises: [
            {
              question: 'Quels sont les deux domaines regroupés sous le terme « procaryotes » ?',
              answer: 'Les Bactéries et les Archées.'
            },
            {
              question: 'Comment se reproduisent la plupart des cellules procaryotes ?',
              answer: 'Par fission binaire : le chromosome est copié puis la cellule se divise en deux cellules filles.'
            },
            {
              question: 'Qu’est-ce qu’un plasmide ?',
              answer: 'Une petite molécule d’ADN, le plus souvent circulaire, distincte du chromosome principal, présente chez de nombreux procaryotes.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 4.2 Prokaryotic Cells', url: 'https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells' },
            { title: 'OpenStax — Biology 2e, 22.2 Structure of Prokaryotes: Bacteria and Archaea', url: 'https://openstax.org/books/biology-2e/pages/22-2-structure-of-prokaryotes-bacteria-and-archaea' }
          ]
        }
      },
      {
        id: 'cellules-eucaryotes',
        title: 'Les cellules eucaryotes et leurs organites',
        field: 'Biologie cellulaire · Noyau, organites et cytosquelette',
        summary: 'Découvrir les compartiments des cellules eucaryotes, leurs fonctions et les différences entre cellules animales et végétales.',
        lesson: {
          sections: [
            'Les cellules eucaryotes possèdent un noyau délimité par une enveloppe nucléaire formée de deux membranes percées de pores, ainsi que des organites entourés de membranes. Le noyau contient l’ADN organisé en chromosomes ; le nucléole, à l’intérieur du noyau, intervient dans la fabrication des sous-unités des ribosomes. Cette compartimentation permet d’exécuter simultanément, dans des espaces séparés, des réactions chimiques qui pourraient interférer entre elles.',
            'Le système endomembranaire regroupe le réticulum endoplasmique (RE), l’appareil de Golgi, les lysosomes et les vésicules. Le RE rugueux, couvert de ribosomes, participe à la fabrication de protéines destinées à être sécrétées ou insérées dans les membranes ; le RE lisse intervient notamment dans la synthèse de lipides. L’appareil de Golgi modifie, trie et emballe les molécules dans des vésicules. Les lysosomes, présents dans les cellules animales, contiennent des enzymes digestives. Les peroxysomes interviennent dans des réactions qui produisent et dégradent du peroxyde d’hydrogène.',
            'Les mitochondries, entourées de deux membranes, sont les principaux sites de la respiration cellulaire dans les cellules eucaryotes ; elles possèdent leur propre ADN. Les cellules végétales présentent en plus des chloroplastes, où a lieu la photosynthèse, une paroi cellulaire contenant de la cellulose et une grande vacuole centrale. Les cellules animales possèdent généralement un centrosome associé à des centrioles. Ces différences expliquent que les cellules végétales aient une forme plus rigide que les cellules animales.',
            'Le cytosquelette est un réseau de filaments protéiques qui maintient la forme de la cellule, ancre les organites et permet les mouvements. On distingue trois grands types : les microfilaments (formés d’actine), les filaments intermédiaires et les microtubules (formés de tubuline). Les microtubules participent notamment au transport de vésicules et à la séparation des chromosomes lors de la division cellulaire. Les cils et flagelles eucaryotes sont aussi construits à partir de microtubules.'
          ],
          example: {
            statement: 'Une protéine sécrétée par une cellule animale est fabriquée sur un ribosome du réticulum endoplasmique rugueux. Dans quel ordre passe-t-elle par les structures suivantes : appareil de Golgi, membrane plasmique, réticulum endoplasmique ?',
            calculation: 'Voie de sécrétion simplifiée : réticulum endoplasmique rugueux → vésicule → appareil de Golgi → vésicule de sécrétion → membrane plasmique.',
            answer: 'Réticulum endoplasmique, puis appareil de Golgi, puis membrane plasmique (où la vésicule fusionne pour libérer la protéine à l’extérieur).'
          },
          exercise: {
            question: 'Citez deux structures présentes dans les cellules végétales mais généralement pas dans les cellules animales.',
            answer: 'Les chloroplastes, la paroi cellulaire de cellulose et la grande vacuole centrale (deux de ces trois réponses suffisent).'
          },
          exercises: [
            {
              question: 'Quel organite est le principal site de la respiration cellulaire chez les eucaryotes ?',
              answer: 'La mitochondrie.'
            },
            {
              question: 'Quels sont les trois grands types de filaments du cytosquelette ?',
              answer: 'Les microfilaments (actine), les filaments intermédiaires et les microtubules (tubuline).'
            },
            {
              question: 'Quel rôle joue l’appareil de Golgi ?',
              answer: 'Il modifie, trie et emballe des molécules (notamment des protéines) dans des vésicules.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 4.3 Eukaryotic Cells', url: 'https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells' },
            { title: 'OpenStax — Biology 2e, 4.4 The Endomembrane System and Proteins', url: 'https://openstax.org/books/biology-2e/pages/4-4-the-endomembrane-system-and-proteins' },
            { title: 'OpenStax — Biology 2e, 4.5 The Cytoskeleton', url: 'https://openstax.org/books/biology-2e/pages/4-5-the-cytoskeleton' }
          ]
        }
      },
      {
        id: 'membrane-plasmique',
        title: 'La membrane plasmique et les échanges avec le milieu',
        field: 'Biologie cellulaire · Structure de la membrane et transports',
        summary: 'Comprendre le modèle de la mosaïque fluide, la perméabilité sélective et les principaux modes de transport.',
        lesson: {
          sections: [
            'La membrane plasmique sépare le contenu de la cellule de son milieu et contrôle ce qui entre et sort. Sa structure de base est une bicouche de phospholipides : chaque phospholipide possède une tête hydrophile (qui interagit avec l’eau) et deux queues hydrophobes, orientées vers l’intérieur de la bicouche. Le modèle de la mosaïque fluide, proposé en 1972 par Singer et Nicolson, décrit la membrane comme une structure dynamique où des protéines sont insérées dans un ensemble de lipides qui se déplacent latéralement.',
            'La membrane contient aussi du cholestérol (dans les cellules animales), qui influence sa fluidité, des protéines intégrales et périphériques, et des glucides liés à des lipides ou à des protéines (glycolipides, glycoprotéines), importants pour la reconnaissance entre cellules. Les protéines membranaires remplissent des fonctions variées : transport, réception de signaux, activité enzymatique, ancrage. La membrane est dite à perméabilité sélective : de petites molécules non polaires la traversent facilement, alors que les ions et les grosses molécules polaires passent surtout par des protéines de transport.',
            'Le transport passif ne demande pas d’énergie métabolique : la diffusion simple et la diffusion facilitée suivent le gradient de concentration, de la zone la plus concentrée vers la moins concentrée. L’osmose est la diffusion de l’eau à travers une membrane sélective, vers la zone où la concentration en solutés est la plus élevée. En milieu hypotonique, une cellule animale peut gonfler et éclater, alors qu’une cellule végétale devient turgescente, la paroi limitant l’augmentation de volume ; en milieu hypertonique, la cellule perd de l’eau.',
            'Le transport actif déplace des substances contre leur gradient et nécessite de l’énergie, souvent fournie par l’ATP. La pompe sodium-potassium (Na+/K+) en est l’exemple classique : à chaque cycle, elle expulse trois ions sodium et fait entrer deux ions potassium. Pour les grosses particules ou de grandes quantités de molécules, la cellule utilise des vésicules : l’endocytose fait entrer des substances en repliant la membrane, l’exocytose les libère en fusionnant des vésicules avec la membrane plasmique.'
          ],
          example: {
            statement: 'La pompe Na+/K+ expulse 3 ions Na+ et fait entrer 2 ions K+ à chaque cycle. Après 10 cycles, combien d’ions de chaque type ont été déplacés ?',
            calculation: 'Sodium expulsé : 3 × 10 = 30. Potassium entré : 2 × 10 = 20.',
            answer: '30 ions Na+ sortent et 20 ions K+ entrent, soit un déplacement net de 10 charges positives vers l’extérieur.'
          },
          exercise: {
            question: 'Pourquoi une cellule animale placée dans l’eau pure risque-t-elle d’éclater alors qu’une cellule végétale résiste mieux ?',
            answer: 'L’eau entre par osmose dans la cellule ; la cellule animale, sans paroi, peut gonfler jusqu’à éclater, alors que la paroi de la cellule végétale limite l’augmentation de volume.'
          },
          exercises: [
            {
              question: 'Qui a proposé le modèle de la mosaïque fluide, et en quelle année ?',
              answer: 'Singer et Nicolson, en 1972.'
            },
            {
              question: 'Quelle est la différence essentielle entre transport passif et transport actif ?',
              answer: 'Le transport passif suit le gradient de concentration sans apport d’énergie métabolique ; le transport actif va contre le gradient et demande de l’énergie, souvent de l’ATP.'
            },
            {
              question: 'Qu’est-ce que l’osmose ?',
              answer: 'La diffusion de l’eau à travers une membrane à perméabilité sélective.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 5.1 Components and Structure', url: 'https://openstax.org/books/biology-2e/pages/5-1-components-and-structure' },
            { title: 'OpenStax — Biology 2e, chapitre 5 : Structure and Function of Plasma Membranes', url: 'https://openstax.org/books/biology-2e/pages/5-introduction' }
          ]
        }
      },
      {
        id: 'energie-cellulaire',
        title: 'L’énergie de la cellule : ATP, respiration et photosynthèse',
        field: 'Biologie cellulaire · Métabolisme énergétique',
        summary: 'Comprendre le rôle de l’ATP et les grandes étapes de la respiration cellulaire et de la photosynthèse.',
        lesson: {
          sections: [
            'Les cellules doivent en permanence disposer d’énergie utilisable pour synthétiser des molécules, transporter des substances et se diviser. La molécule qui sert de monnaie énergétique est l’ATP (adénosine triphosphate) : quand elle est hydrolysée en ADP et phosphate inorganique, de l’énergie est libérée pour des réactions qui en ont besoin. L’ATP est ensuite régénérée à partir de l’ADP grâce à l’énergie tirée de la dégradation des nutriments ou de la lumière.',
            'La respiration cellulaire aérobie dégrade le glucose en présence d’oxygène. L’équation globale s’écrit : C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + énergie (en partie sous forme d’ATP). Elle se déroule en grandes étapes : la glycolyse (dans le cytoplasme), puis, chez les eucaryotes, l’oxydation du pyruvate et le cycle de l’acide citrique dans la matrice mitochondriale, et enfin la phosphorylation oxydative, qui a lieu dans la membrane interne de la mitochondrie et produit la majeure partie de l’ATP.',
            'La glycolyse transforme une molécule de glucose en deux molécules de pyruvate ; elle consomme 2 ATP et en produit 4, soit un gain net de 2 ATP, et elle ne nécessite pas d’oxygène. En l’absence d’oxygène, de nombreuses cellules poursuivent la glycolyse grâce à la fermentation (par exemple lactique ou alcoolique), qui produit beaucoup moins d’ATP que la respiration aérobie.',
            'La photosynthèse, réalisée par les plantes, les algues et les cyanobactéries, convertit l’énergie lumineuse en énergie chimique. L’équation globale simplifiée est : 6 CO2 + 6 H2O + lumière → C6H12O6 + 6 O2. Chez les eucaryotes, elle a lieu dans les chloroplastes : les réactions dépendantes de la lumière, dans les membranes des thylakoïdes, produisent de l’ATP et du NADPH et libèrent de l’oxygène issu de l’eau ; le cycle de Calvin, dans le stroma, utilise ces produits pour fixer le dioxyde de carbone dans des sucres. Respiration et photosynthèse sont ainsi liées par les échanges de carbone et d’oxygène.'
          ],
          example: {
            statement: 'Lors de la glycolyse d’une molécule de glucose, 2 ATP sont consommés et 4 sont produits. Quel est le gain net pour 5 molécules de glucose ?',
            calculation: 'Gain net par glucose : 4 − 2 = 2 ATP. Pour 5 glucoses : 2 × 5 = 10.',
            answer: 'Le gain net est de 10 ATP pour 5 molécules de glucose (2 ATP par molécule).'
          },
          exercise: {
            question: 'Dans quel compartiment de la cellule eucaryote a lieu la glycolyse ?',
            answer: 'Dans le cytoplasme (le cytosol).'
          },
          exercises: [
            {
              question: 'Que signifie ATP et quel est son rôle ?',
              answer: 'Adénosine triphosphate ; c’est la molécule qui fournit l’énergie utilisable à de nombreuses réactions de la cellule.'
            },
            {
              question: 'Où se déroule le cycle de Calvin dans le chloroplaste ?',
              answer: 'Dans le stroma.'
            },
            {
              question: 'Quelle est la conséquence de l’absence d’oxygène pour la production d’ATP à partir du glucose ?',
              answer: 'La respiration aérobie ne peut pas se poursuivre ; la cellule peut continuer la glycolyse suivie d’une fermentation, qui produit beaucoup moins d’ATP.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 7.2 Glycolysis', url: 'https://openstax.org/books/biology-2e/pages/7-2-glycolysis' },
            { title: 'OpenStax — Biology 2e, 8.1 Overview of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis' }
          ]
        }
      },
      {
        id: 'cycle-cellulaire',
        title: 'Le cycle cellulaire et la mitose',
        field: 'Biologie cellulaire · Division des cellules eucaryotes',
        summary: 'Décrire les phases du cycle cellulaire, le déroulement de la mitose et le rôle des points de contrôle.',
        lesson: {
          sections: [
            'Le cycle cellulaire est la suite d’événements qui conduit une cellule eucaryote à croître, copier son ADN, puis se diviser. Il comprend l’interphase et la phase de division (phase M). L’interphase se divise en trois étapes : G1, où la cellule croît et exerce ses fonctions, S, où l’ADN est répliqué, et G2, où la cellule se prépare à la division. Certaines cellules quittent le cycle et entrent dans un état de repos, parfois appelé G0.',
            'La mitose est la division du noyau qui répartit les chromosomes de façon que chaque noyau fils reçoive une copie complète du matériel génétique. Elle est classiquement décrite en prophase (condensation des chromosomes, formation du fuseau), prométaphase (rupture de l’enveloppe nucléaire, fixation des microtubules aux chromosomes), métaphase (alignement des chromosomes au centre), anaphase (séparation des chromatides sœurs vers les pôles) et télophase (reformation des noyaux). La cytocinèse, division du cytoplasme, aboutit à deux cellules filles.',
            'Lors de la phase S, chaque chromosome est répliqué en deux chromatides sœurs identiques, reliées au niveau du centromère. Lors de l’anaphase, ces chromatides se séparent et deviennent des chromosomes à part entière. La mitose produit ainsi deux cellules filles génétiquement identiques entre elles, avec le même nombre de chromosomes que la cellule mère. Chez l’être humain, une cellule somatique contient 46 chromosomes, soit 23 paires.',
            'La progression du cycle est contrôlée par des points de contrôle (par exemple en fin de G1, après G2 et pendant la mitose) qui vérifient notamment l’état de l’ADN et l’attachement des chromosomes. Les cyclines et les kinases dépendantes des cyclines (CDK) participent à cette régulation. Quand ces contrôles sont défaillants, des cellules peuvent se diviser de façon incontrôlée, ce qui est une caractéristique des cancers. Les procaryotes, eux, se divisent par fission binaire, un mécanisme plus simple que la mitose.'
          ],
          example: {
            statement: 'Une cellule humaine possède 46 chromosomes en G1. Combien de chromosomes et de chromatides contient-elle après la phase S ?',
            calculation: 'La réplication ne change pas le nombre de chromosomes : 46. Chaque chromosome possède maintenant 2 chromatides sœurs : 46 × 2 = 92.',
            answer: '46 chromosomes, soit 92 chromatides. Après la mitose, chaque cellule fille contient 46 chromosomes.'
          },
          exercise: {
            question: 'Pourquoi les deux cellules filles issues d’une mitose sont-elles génétiquement identiques ?',
            answer: 'Parce que l’ADN a été copié en phase S, puis les chromatides sœurs identiques sont réparties une à une entre les deux cellules filles lors de l’anaphase.'
          },
          exercises: [
            {
              question: 'Quelles sont les trois étapes de l’interphase ?',
              answer: 'G1, S et G2.'
            },
            {
              question: 'Que se passe-t-il pendant l’anaphase ?',
              answer: 'Les chromatides sœurs se séparent et sont tirées vers les pôles opposés de la cellule.'
            },
            {
              question: 'Combien de chromosomes contient une cellule somatique humaine ?',
              answer: '46 (23 paires).'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 10.2 The Cell Cycle', url: 'https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle' },
            { title: 'OpenStax — Biology 2e, 10.3 Control of the Cell Cycle', url: 'https://openstax.org/books/biology-2e/pages/10-3-control-of-the-cell-cycle' }
          ]
        }
      }
    ]
  },

// BRANCHE 2 : L’ADN

  {
    id: 'adn',
    title: 'L’ADN',
    note: 'Six chapitres sur la découverte du rôle de l’ADN, sa structure, sa réplication, l’expression des gènes, les mutations et la réparation, puis le séquençage. Les repères historiques sont issus de manuels et de sources de référence.',
    chapters: [
      {
        id: 'decouverte-adn',
        title: 'La découverte du rôle de l’ADN',
        field: 'Génétique moléculaire · Des acides nucléiques aux expériences de 1952',
        summary: 'Retracer les expériences qui ont montré que l’ADN est le support de l’information génétique.',
        lesson: {
          sections: [
            'Dans les années 1860, le médecin suisse Friedrich Miescher isole à partir du noyau de cellules une substance riche en phosphore qu’il appelle nucléine : c’est la découverte des acides nucléiques. À cette époque, on ne sait pas encore que cette substance porte l’information héréditaire. Pendant longtemps, de nombreux scientifiques pensent plutôt que ce sont les protéines, plus variées chimiquement, qui constituent le matériel génétique.',
            'En 1928, le bactériologiste britannique Frederick Griffith étudie la bactérie Streptococcus pneumoniae. La souche S (lisse) tue les souris, la souche R (rugueuse) ne les tue pas. Griffith constate que des souris injectées avec un mélange de souche S tuée par la chaleur et de souche R vivante meurent, et qu’on retrouve des bactéries S vivantes : quelque chose est passé de la souche S tuée à la souche R et l’a transformée. Il nomme ce phénomène principe transformant.',
            'En 1944, Oswald Avery, Colin MacLeod et Maclyn McCarty montrent que le principe transformant est l’ADN, en détruisant sélectivement différents composants de l’extrait bactérien. Leurs résultats sont toutefois accueillis avec prudence par une partie de la communauté scientifique. En 1952, Alfred Hershey et Martha Chase étudient un bactériophage, virus qui infecte les bactéries : ils marquent la protéine de l’enveloppe au soufre 35 et l’ADN au phosphore 32. Seul l’ADN du phage pénètre dans la bactérie, ce qui apporte une preuve décisive que l’ADN est le matériel génétique.',
            'Entre-temps, le biochimiste Erwin Chargaff établit des règles sur la composition en bases : la quantité d’adénine est à peu près égale à celle de thymine, et la quantité de guanine à celle de cytosine, alors que la composition globale varie d’une espèce à l’autre. Ces règles de Chargaff deviennent un indice important pour la structure de l’ADN. Cette histoire illustre une démarche scientifique : des expériences successives, parfois limitées au départ, convergent progressivement vers une conclusion solide.'
          ],
          example: {
            statement: 'Griffith publie ses expériences en 1928 et Hershey et Chase les leurs en 1952. Combien d’années séparent ces deux étapes ? Et entre Griffith et Avery (1944) ?',
            calculation: '1952 − 1928 = 24 ; 1944 − 1928 = 16.',
            answer: '24 ans séparent Griffith de Hershey et Chase, et 16 ans le séparent d’Avery, MacLeod et McCarty : la preuve que l’ADN est le matériel génétique s’est construite sur plusieurs décennies.'
          },
          exercise: {
            question: 'Que montre l’expérience de Hershey et Chase de 1952 ?',
            answer: 'Que c’est l’ADN du bactériophage, et non sa protéine, qui entre dans la bactérie et porte l’information nécessaire à la production de nouveaux phages.'
          },
          exercises: [
            {
              question: 'Quel phénomène Griffith a-t-il appelé « principe transformant » ?',
              answer: 'Le transfert d’une substance de la souche S tuée à la souche R vivante, qui la transforme en souche S pathogène.'
            },
            {
              question: 'Quels éléments radioactifs Hershey et Chase ont-ils utilisés pour marquer la protéine et l’ADN ?',
              answer: 'Le soufre 35 (protéine) et le phosphore 32 (ADN).'
            },
            {
              question: 'Que disent les règles de Chargaff ?',
              answer: 'Dans l’ADN, la quantité d’adénine est à peu près égale à celle de thymine, et celle de guanine à celle de cytosine.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 14.1 Historical Basis of Modern Understanding', url: 'https://openstax.org/books/biology-2e/pages/14-1-historical-basis-of-modern-understanding' },
            { title: 'OpenStax — Biology for AP Courses, 14.1 Historical Basis of Modern Understanding', url: 'https://openstax.org/books/biology-ap-courses/pages/14-1-historical-basis-of-modern-understanding' }
          ]
        }
      },
      {
        id: 'structure-adn',
        title: 'La structure de la double hélice',
        field: 'Génétique moléculaire · Nucléotides, bases et appariement',
        summary: 'Décrire les nucléotides, l’appariement des bases et l’histoire du modèle de la double hélice.',
        lesson: {
          sections: [
            'L’ADN est un polymère de nucléotides. Chaque nucléotide comprend un sucre (le désoxyribose), un groupe phosphate et une base azotée. Il existe quatre bases : l’adénine (A) et la guanine (G), appelées purines, qui ont une structure à deux cycles, et la cytosine (C) et la thymine (T), appelées pyrimidines, à un seul cycle. Dans l’ARN, le sucre est le ribose et la thymine est remplacée par l’uracile (U). Les nucléotides sont reliés entre eux par des liaisons phosphodiester, qui forment le squelette sucre-phosphate de chaque brin.',
            'Dans la molécule d’ADN, deux brins s’enroulent l’un autour de l’autre en une double hélice droite. Les bases se font face à l’intérieur : A s’apparie avec T par deux liaisons hydrogène, et G avec C par trois liaisons hydrogène. Cet appariement complémentaire explique les règles de Chargaff. Les deux brins sont antiparallèles : l’un va dans le sens 5′ → 3′, l’autre dans le sens opposé. Cette orientation est essentielle pour comprendre la réplication.',
            'Dans les années 1950, plusieurs équipes cherchent à déterminer la structure de l’ADN. À Londres, Rosalind Franklin utilise la diffraction des rayons X pour obtenir des images de l’ADN dans le laboratoire de Maurice Wilkins ; ses clichés fournissent des indices décisifs sur la forme hélicoïdale. À l’Université de Cambridge, James Watson et Francis Crick proposent en 1953 le modèle de la double hélice, qui s’appuie notamment sur ces données de diffraction et sur les règles de Chargaff. Watson, Crick et Wilkins reçoivent le prix Nobel de physiologie ou médecine en 1962 ; Rosalind Franklin était décédée en 1958.',
            'Ce modèle propose aussi une explication de la fonction de l’ADN : la séquence des bases, qui peut varier sans contrainte le long d’un brin, constitue l’information génétique, et la complémentarité des bases suggère un mécanisme de copie. Chez les procaryotes, l’ADN forme le plus souvent un chromosome circulaire ; chez les eucaryotes, il est linéaire et associé à des protéines appelées histones, ce qui permet de le compacter dans le noyau.'
          ],
          example: {
            statement: 'Un échantillon d’ADN double brin contient 30 % d’adénine. Quels sont les pourcentages des trois autres bases ?',
            calculation: 'Selon les règles de Chargaff, T = A = 30 %. Donc A + T = 60 %. Le reste, 100 − 60 = 40 %, est partagé à égalité entre G et C : 20 % chacune.',
            answer: 'Thymine 30 %, guanine 20 %, cytosine 20 %.'
          },
          exercise: {
            question: 'Quelle différence de liaisons hydrogène existe-t-il entre les paires A–T et G–C ?',
            answer: 'La paire A–T est maintenue par deux liaisons hydrogène, la paire G–C par trois.'
          },
          exercises: [
            {
              question: 'Quelles bases sont des purines et lesquelles sont des pyrimidines dans l’ADN ?',
              answer: 'Les purines sont l’adénine et la guanine ; les pyrimidines sont la cytosine et la thymine.'
            },
            {
              question: 'En quelle année Watson et Crick proposent-ils le modèle de la double hélice ?',
              answer: 'En 1953.'
            },
            {
              question: 'Que signifie que les deux brins d’ADN sont antiparallèles ?',
              answer: 'Ils sont orientés en sens opposés : l’un est orienté 5′ → 3′ et l’autre 3′ → 5′.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 14.2 DNA Structure and Sequencing', url: 'https://openstax.org/books/biology-2e/pages/14-2-dna-structure-and-sequencing' },
            { title: 'OpenStax — Biology for AP Courses, 14.2 DNA Structure and Sequencing', url: 'https://openstax.org/books/biology-ap-courses/pages/14-2-dna-structure-and-sequencing' },
            { title: 'LibreTexts (OpenStax Biology 2e) — DNA Structure and Sequencing', url: 'https://bio.libretexts.org/Courses/Norco_College/OpenStax_Biology_2e_for_Norco_College/14%3A_DNA_Structure_and_Function/14.03%3A_DNA_Structure_and_Sequencing' }
          ]
        }
      },
      {
        id: 'replication-adn',
        title: 'La réplication de l’ADN',
        field: 'Génétique moléculaire · Copie du matériel génétique',
        summary: 'Comprendre le caractère semi-conservatif de la réplication et le rôle des principales enzymes.',
        lesson: {
          sections: [
            'Avant chaque division cellulaire, l’ADN doit être copié pour que chaque cellule fille reçoive une copie complète. Trois modèles étaient possibles : conservatif, semi-conservatif et dispersif. En 1958, Matthew Meselson et Franklin Stahl ont utilisé de l’azote lourd (15N) et de l’azote léger (14N) pour suivre l’ADN de bactéries au fil des générations. Leurs résultats ont confirmé le modèle semi-conservatif : chaque molécule fille contient un brin parental et un brin nouvellement synthétisé.',
            'La réplication commence à des sites appelés origines de réplication, où la double hélice est ouverte par l’hélicase, formant deux fourches de réplication. Des protéines stabilisent les brins séparés, et la topoisomérase relâche les tensions dues à l’enroulement. Un petit segment d’ARN, l’amorce, est synthétisé par la primase, car l’ADN polymérase ne peut pas démarrer une chaîne à partir de rien : elle ne peut qu’ajouter des nucléotides à une extrémité 3′ existante.',
            'L’ADN polymérase ajoute les nucléotides toujours dans le sens 5′ → 3′ en suivant la complémentarité des bases. Comme les deux brins sont antiparallèles, un brin, dit brin précoce (avancé), est synthétisé de façon continue, tandis que l’autre, dit brin tardif (retardé), est synthétisé en courts fragments appelés fragments d’Okazaki. Les amorces d’ARN sont ensuite remplacées par de l’ADN et les fragments sont reliés par l’ADN ligase.',
            'Les procaryotes ont généralement un chromosome circulaire avec une seule origine de réplication, alors que les chromosomes eucaryotes, plus longs, possèdent de nombreuses origines, ce qui permet de répliquer l’ADN en un temps raisonnable. Aux extrémités des chromosomes linéaires eucaryotes se trouvent des télomères, dont le raccourcissement est limité dans certaines cellules par une enzyme, la télomérase. La réplication est aussi accompagnée de mécanismes de vérification qui limitent les erreurs, traités dans le chapitre sur les mutations et la réparation.'
          ],
          example: {
            statement: 'Une molécule d’ADN double brin contenant uniquement de l’azote 15 (15N) est placée dans un milieu avec de l’azote 14 (14N) et se réplique 3 fois (modèle semi-conservatif). Combien de molécules obtient-on, et combien contiennent encore un brin d’origine ?',
            calculation: 'Nombre de molécules : 2³ = 8. Les deux brins parentaux d’origine (15N) ne sont jamais détruits : ils se retrouvent chacun dans une molécule différente, donc 2 molécules contiennent un brin d’origine.',
            answer: '8 molécules, dont 2 contiennent un brin d’origine (15N) et un brin nouveau (14N) ; les 6 autres sont entièrement en 14N.'
          },
          exercise: {
            question: 'Pourquoi dit-on que la réplication de l’ADN est « semi-conservative » ?',
            answer: 'Parce que chaque molécule fille conserve un brin de la molécule parentale et contient un brin nouvellement synthétisé.'
          },
          exercises: [
            {
              question: 'Quelle enzyme ouvre la double hélice au niveau de la fourche de réplication ?',
              answer: 'L’hélicase.'
            },
            {
              question: 'Pourquoi le brin tardif est-il synthétisé en fragments ?',
              answer: 'Parce que l’ADN polymérase ne synthétise que dans le sens 5′ → 3′ et que les deux brins sont antiparallèles : sur le brin tardif, la synthèse se fait par courts fragments (fragments d’Okazaki).'
            },
            {
              question: 'Quelle enzyme relie les fragments d’ADN entre eux ?',
              answer: 'L’ADN ligase.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 14.3 Basics of DNA Replication', url: 'https://openstax.org/books/biology-2e/pages/14-3-basics-of-dna-replication' },
            { title: 'OpenStax — Biology 2e, 14.4 DNA Replication in Prokaryotes', url: 'https://openstax.org/books/biology-2e/pages/14-4-dna-replication-in-prokaryotes' },
            { title: 'OpenStax — Biology 2e, 14.5 DNA Replication in Eukaryotes', url: 'https://openstax.org/books/biology-2e/pages/14-5-dna-replication-in-eukaryotes' }
          ]
        }
      },
      {
        id: 'expression-genes',
        title: 'Des gènes aux protéines : transcription, code génétique et traduction',
        field: 'Génétique moléculaire · Expression de l’information génétique',
        summary: 'Comprendre comment l’information d’un gène est transcrite en ARN puis traduite en protéine.',
        lesson: {
          sections: [
            'Un gène est un segment d’ADN qui contient l’information nécessaire pour fabriquer un produit fonctionnel, le plus souvent une protéine. L’expression des gènes suit un schéma général souvent résumé par le dogme central de la biologie moléculaire : l’information passe de l’ADN à l’ARN (transcription), puis de l’ARN aux protéines (traduction). Il existe des exceptions et des compléments, comme les ARN qui ne sont pas traduits (ARN de transfert, ARN ribosomiques) et certains virus qui copient leur ARN en ADN.',
            'Lors de la transcription, l’ARN polymérase lit un brin d’ADN et synthétise une molécule d’ARN messager (ARNm) complémentaire, dans laquelle la thymine est remplacée par l’uracile. Chez les eucaryotes, l’ARN primaire subit une maturation dans le noyau : ajout d’une coiffe en 5′ et d’une queue poly-A en 3′, et excision des introns (segments non codants) pendant l’épissage, ce qui laisse les exons. L’ARNm mature quitte le noyau pour rejoindre les ribosomes.',
            'Le code génétique fait correspondre les triplets de nucléotides de l’ARNm, appelés codons, aux acides aminés. Il existe 64 codons possibles : 61 codent des acides aminés (il y en a 20 différents) et 3 sont des codons stop (UAA, UAG, UGA). Le codon AUG code la méthionine et sert de codon d’initiation. Le code est dit redondant, car plusieurs codons peuvent désigner le même acide aminé, et il est presque universel : il est très semblable chez la grande majorité des organismes.',
            'La traduction a lieu sur les ribosomes. Les ARN de transfert (ARNt) portent chacun un acide aminé et possèdent un anticodon complémentaire d’un codon de l’ARNm. Le ribosome lit l’ARNm codon par codon et assemble la chaîne d’acides aminés (polypeptide) en formant des liaisons peptidiques, jusqu’à rencontrer un codon stop. La chaîne se replie ensuite pour former une protéine fonctionnelle. Chez les procaryotes, qui n’ont pas de noyau, la traduction peut commencer avant que la transcription soit terminée.'
          ],
          example: {
            statement: 'Un ARNm contient la séquence 5′-AUG GCU UAA-3′. Quelle chaîne d’acides aminés est produite ? (AUG = méthionine, GCU = alanine, UAA = codon stop.)',
            calculation: 'On lit codon par codon : AUG → méthionine ; GCU → alanine ; UAA → arrêt de la traduction.',
            answer: 'La chaîne obtenue est méthionine–alanine (deux acides aminés). Le codon UAA arrête la traduction sans ajouter d’acide aminé.'
          },
          exercise: {
            question: 'Pourquoi dit-on que le code génétique est redondant ?',
            answer: 'Parce que 61 codons codent seulement 20 acides aminés : plusieurs codons différents peuvent correspondre au même acide aminé.'
          },
          exercises: [
            {
              question: 'Combien de codons possibles existe-t-il, et combien sont des codons stop ?',
              answer: '64 codons au total, dont 3 codons stop (UAA, UAG, UGA).'
            },
            {
              question: 'Quelle différence principale y a-t-il entre les bases de l’ADN et celles de l’ARN ?',
              answer: 'L’ARN contient de l’uracile (U) à la place de la thymine (T) et son sucre est le ribose.'
            },
            {
              question: 'Quel est le rôle de l’ARN de transfert ?',
              answer: 'Il apporte un acide aminé spécifique au ribosome et reconnaît le codon de l’ARNm grâce à son anticodon.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 15.1 The Genetic Code', url: 'https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code' },
            { title: 'OpenStax — Biology 2e, 15.5 Ribosomes and Protein Synthesis', url: 'https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis' }
          ]
        }
      },
      {
        id: 'mutations-reparation',
        title: 'Les mutations et la réparation de l’ADN',
        field: 'Génétique moléculaire · Variations et stabilité du génome',
        summary: 'Distinguer les types de mutations, comprendre leurs conséquences et les systèmes de réparation de l’ADN.',
        lesson: {
          sections: [
            'Une mutation est une modification de la séquence de l’ADN. Elle peut apparaître spontanément (erreur de réplication) ou être provoquée par des agents mutagènes, comme les rayons ultraviolets ou certaines substances chimiques. Les mutations qui touchent les cellules reproductrices peuvent être transmises à la descendance, alors que celles qui touchent les cellules somatiques ne concernent que l’individu. Beaucoup de mutations n’ont pas d’effet notable ; d’autres sont nuisibles ou, plus rarement, avantageuses selon le contexte.',
            'On distingue les mutations ponctuelles, qui changent une seule paire de bases (substitutions), et les insertions ou délétions de nucléotides. Une substitution peut être silencieuse (le codon modifié code le même acide aminé), faux-sens (un autre acide aminé est introduit) ou non-sens (un codon stop apparaît). Si le nombre de nucléotides insérés ou supprimés n’est pas un multiple de trois, le cadre de lecture est décalé : c’est une mutation par décalage du cadre de lecture, qui modifie en général tous les codons situés après la mutation.',
            'Un exemple classique est la drépanocytose : une substitution dans le gène de la chaîne bêta de l’hémoglobine remplace, à la sixième position de la protéine, l’acide glutamique (codon GAG) par la valine (codon GUG). Ce seul changement d’acide aminé modifie les propriétés de l’hémoglobine et déforme les globules rouges dans certaines conditions. Cet exemple montre qu’une mutation ponctuelle peut avoir des conséquences importantes sur le fonctionnement d’une protéine.',
            'Les cellules disposent de plusieurs mécanismes de protection. L’ADN polymérase corrige elle-même certaines erreurs pendant la réplication (relecture). La réparation des mésappariements repère et remplace les bases mal appariées après la réplication. La réparation par excision de nucléotides élimine des lésions volumineuses, comme les dimères de thymine formés par les ultraviolets. Les personnes atteintes de xeroderma pigmentosum, une maladie génétique rare, ont une réparation par excision déficiente et sont très sensibles aux ultraviolets.'
          ],
          example: {
            statement: 'Dans l’ARNm, le codon GAG (acide glutamique) devient GUG (valine). De quel type de mutation s’agit-il, et combien de nucléotides sont modifiés ?',
            calculation: 'GAG → GUG : seule la deuxième base change (A → U dans l’ARNm). Un nucléotide est modifié et l’acide aminé change.',
            answer: 'Il s’agit d’une substitution faux-sens : un seul nucléotide est modifié et un acide aminé différent est incorporé.'
          },
          exercise: {
            question: 'Pourquoi une délétion d’un seul nucléotide dans la région codante a-t-elle souvent des effets plus graves qu’une substitution ?',
            answer: 'Elle décale le cadre de lecture : tous les codons situés après la délétion sont modifiés, alors qu’une substitution ne modifie qu’un codon.'
          },
          exercises: [
            {
              question: 'Qu’est-ce qu’une mutation silencieuse ?',
              answer: 'Une substitution qui change un codon en un autre codon codant le même acide aminé, donc sans changement de la protéine.'
            },
            {
              question: 'Quelle lésion de l’ADN les rayons ultraviolets peuvent-ils provoquer ?',
              answer: 'Des dimères de thymine (liaisons anormales entre thymines voisines).'
            },
            {
              question: 'Quel est le rôle de la réparation par excision de nucléotides ?',
              answer: 'Éliminer des segments d’ADN endommagés (comme ceux qui contiennent des dimères de thymine) et les remplacer par de l’ADN correct.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 14.6 DNA Repair', url: 'https://openstax.org/books/biology-2e/pages/14-6-dna-repair' },
            { title: 'OpenStax — Biology 2e, 15.1 The Genetic Code', url: 'https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code' }
          ]
        }
      },
      {
        id: 'sequencage-genome',
        title: 'Le séquençage de l’ADN et du génome',
        field: 'Génétique moléculaire · Lire la séquence de l’ADN',
        summary: 'Comprendre la méthode de Sanger, l’idée de séquençage du génome et ses enjeux.',
        lesson: {
          sections: [
            'Séquencer l’ADN consiste à déterminer l’ordre des nucléotides le long d’une molécule. Jusqu’aux années 1990, cette opération était longue et coûteuse. Fred Sanger a mis au point une méthode, appelée méthode de terminaison de chaîne ou méthode aux didésoxynucléotides, utilisée pour le projet génome humain et largement employée ensuite ; il a reçu le prix Nobel de chimie en 1980 pour ses travaux sur le séquençage de l’ADN.',
            'La méthode de Sanger repose sur des didésoxynucléotides (ddNTP), qui ressemblent aux nucléotides normaux mais ne permettent pas d’ajouter un nucléotide suivant : quand l’ADN polymérase en incorpore un, la synthèse s’arrête. En mélangeant des nucléotides normaux et une faible proportion de ddNTP marqués, on obtient des fragments de toutes les longueurs, dont la dernière base est connue. Leur séparation selon la taille permet de lire la séquence.',
            'Le Projet génome humain, lancé à l’échelle internationale dans les années 1990, visait à déterminer la séquence complète de l’ADN humain, qui comporte environ trois milliards de paires de bases dans un jeu haploïde de chromosomes. Une version de travail a été publiée en 2001 et l’achèvement du projet a été annoncé en 2003. Des assemblages plus récents ont comblé des régions restées difficiles à séquencer : en 2022, un assemblage de séquence continue d’un génome humain a été publié. Le séquençage moderne ne se limite plus à la méthode de Sanger : des technologies à haut débit lisent de très nombreux fragments en parallèle.',
            'Les applications du séquençage sont nombreuses : comparaison de génomes entre espèces, étude de populations, diagnostic de maladies génétiques, identification de micro-organismes. OpenStax cite aussi l’étude d’ADN ancien, où des méthodes sophistiquées sont nécessaires à cause de la fragilité des échantillons et de la contamination microbienne. Le séquençage soulève aussi des questions éthiques, par exemple sur la confidentialité des données génétiques, qui demandent un encadrement.'
          ],
          example: {
            statement: 'On séquence un génome de 3 milliards de bases avec une couverture de 30× (chaque position est lue en moyenne 30 fois). Quelle quantité de bases lues faut-il produire ?',
            calculation: '3 × 10⁹ × 30 = 90 × 10⁹.',
            answer: 'Environ 90 milliards de bases lues. La couverture élevée permet de corriger les erreurs de lecture individuelles.'
          },
          exercise: {
            question: 'Quel est le principe de la méthode de Sanger ?',
            answer: 'Utiliser des didésoxynucléotides qui arrêtent la synthèse d’ADN : on obtient des fragments de longueurs différentes dont la dernière base est connue, ce qui permet de lire la séquence.'
          },
          exercises: [
            {
              question: 'En quelle année Sanger reçoit-il le prix Nobel de chimie pour ses travaux sur le séquençage de l’ADN ?',
              answer: 'En 1980.'
            },
            {
              question: 'Combien de paires de bases compte approximativement un jeu haploïde de chromosomes humains ?',
              answer: 'Environ trois milliards.'
            },
            {
              question: 'Pourquoi une couverture de séquençage élevée est-elle utile ?',
              answer: 'Parce que chaque position est lue plusieurs fois, ce qui permet de repérer et de corriger les erreurs de lecture.'
            }
          ],
          sources: [
            { title: 'OpenStax — Biology 2e, 14.2 DNA Structure and Sequencing', url: 'https://openstax.org/books/biology-2e/pages/14-2-dna-structure-and-sequencing' },
            { title: 'OpenStax — Biology 2e, 17.3 Whole-Genome Sequencing', url: 'https://openstax.org/books/biology-2e/pages/17-3-whole-genome-sequencing' },
            { title: 'NHGRI — Human Genome Project', url: 'https://www.genome.gov/human-genome-project' }
          ]
        }
      }
    ]
  },

// BRANCHE 3 : LES PREMIERS ORGANISMES VIVANTS

  {
    id: 'premiers-organismes',
    title: 'Les premiers organismes vivants',
    note: 'Six chapitres sur la Terre primitive, les hypothèses sur l’origine de la vie, les plus anciennes traces, l’oxygène, l’origine des eucaryotes et les premiers organismes multicellulaires. Les dates sont approximatives, révisées par de nouvelles découvertes, et plusieurs sujets restent débattus.',
    chapters: [
      {
        id: 'terre-primitive-miller',
        title: 'La Terre primitive et la synthèse prébiotique',
        field: 'Origine de la vie · Hypothèses chimiques et expérience de Miller',
        summary: 'Comprendre les hypothèses sur l’apparition des molécules du vivant et ce que montre l’expérience de Miller.',
        lesson: {
          sections: [
            'La Terre s’est formée il y a environ 4,54 milliards d’années. Les plus anciennes traces de vie reconnues sont beaucoup plus récentes (voir le chapitre suivant), ce qui laisse à la chimie prébiotique, c’est-à-dire antérieure à la vie, un intervalle de plusieurs centaines de millions d’années. L’origine de la vie est un sujet de recherche actif : on dispose d’hypothèses et d’expériences, mais pas d’un scénario unique et prouvé.',
            'Dans les années 1920, le biochimiste russe Alexandre Oparin et le scientifique britannique John B. S. Haldane ont proposé indépendamment que des molécules organiques aient pu se former spontanément dans les conditions de la Terre primitive, dans une sorte de « soupe primitive ». Dans les années 1950, Harold Urey considérait que l’atmosphère primitive était riche en hydrogène, avec de l’eau, de l’ammoniac et du méthane.',
            'En 1952, Stanley Miller, alors étudiant à l’Université de Chicago, met au point une expérience avec ces gaz (eau, hydrogène, méthane, ammoniac) enfermés dans un appareil en verre. Il soumet le mélange à des décharges électriques qui simulent la foudre et fait circuler l’eau par ébullition et condensation. Au bout d’environ une semaine, des composés organiques se sont formés, notamment des acides aminés comme la glycine, l’alanine, l’acide aspartique et l’acide glutamique. Environ 15 % du carbone du méthane s’est retrouvé dans des composés organiques. Le résultat est publié dans la revue Science le 15 mai 1953.',
            'Cette expérience montre qu’il est facile de former des briques élémentaires du vivant à partir de composés simples, mais elle ne montre pas comment la vie est apparue. La composition réelle de l’atmosphère primitive est discutée, et l’expérience ne produit pas de molécules capables de se reproduire. Des analyses menées plus de cinquante ans plus tard sur des échantillons conservés ont détecté un plus grand nombre de composés qu’au départ, avec des méthodes plus sensibles. D’autres sites, comme les sources hydrothermales ou l’apport de matière par des météorites, sont aussi étudiés comme origines possibles de molécules organiques.'
          ],
          example: {
            statement: 'Dans l’expérience de Miller, environ 15 % du carbone du méthane est converti en composés organiques. Si le méthane contenait 200 unités de carbone, combien se retrouve dans des composés organiques ?',
            calculation: '200 × 0,15 = 30.',
            answer: 'Environ 30 unités de carbone sur 200 (valeur approximative).'
          },
          exercise: {
            question: 'Que montre l’expérience de Miller, et que ne montre-t-elle pas ?',
            answer: 'Elle montre que des acides aminés peuvent se former à partir de gaz simples sous l’effet d’une énergie ; elle ne prouve pas comment la vie est apparue, ni quelle était exactement l’atmosphère primitive.'
          },
          exercises: [
            {
              question: 'Quels gaz Miller a-t-il utilisés dans son expérience ?',
              answer: 'De l’eau (vapeur), de l’hydrogène, du méthane et de l’ammoniac.'
            },
            {
              question: 'Quelle source d’énergie simulait la foudre dans l’expérience ?',
              answer: 'Des décharges électriques (étincelles).'
            },
            {
              question: 'Dans quelle revue et en quelle année Miller a-t-il publié son résultat ?',
              answer: 'Dans Science, le 15 mai 1953.'
            }
          ],
          sources: [
            { title: 'PBS — A Science Odyssey : Amino acids are created in laboratory, 1953', url: 'https://www.pbs.org/wgbh/aso/databank/entries/do53am.html' },
            { title: 'NASA NTRS — The 1953 Stanley L. Miller Experiment: Fifty Years of Prebiotic Organic Chemistry', url: 'https://ntrs.nasa.gov/api/citations/20050139759/downloads/20050139759.pdf' },
            { title: 'NPR — Scientists Revisit Experiment About Life Formation (2008)', url: 'https://www.npr.org/2008/10/17/95814155/scientists-revisit-experiment-about-life-formation' },
            { title: 'EBSCO Research Starters — Miller Reports the Synthesis of Amino Acids', url: 'https://www.ebsco.com/research-starters/biology/miller-reports-synthesis-amino-acids' }
          ]
        }
      },
      {
        id: 'arn-premieres-cellules',
        title: 'Le monde à ARN, les premières cellules et l’ancêtre commun',
        field: 'Origine de la vie · Molécules auto-réplicatives et ancêtre commun universel',
        summary: 'Découvrir l’hypothèse du monde à ARN, la notion de dernier ancêtre commun universel et les trois domaines du vivant.',
        lesson: {
          sections: [
            'Dans les cellules actuelles, l’ADN conserve l’information, les protéines catalysent la plupart des réactions et l’ARN joue un rôle d’intermédiaire. Cette organisation pose un problème d’origine : l’ADN a besoin de protéines pour être copié et les protéines ont besoin de l’ADN pour être fabriquées. Une hypothèse envisage donc une étape où l’ARN aurait assuré à la fois le rôle de support d’information et celui de catalyseur.',
            'Dans les années 1980, Sidney Altman et Thomas Cech découvrent séparément que certaines molécules d’ARN peuvent catalyser des réactions chimiques : ce sont les ribozymes. Ils reçoivent le prix Nobel de chimie en 1989. L’expression « monde à ARN » est employée par Walter Gilbert en 1986 dans un commentaire publié dans Nature, à propos de ces propriétés catalytiques. Un autre argument est que le cœur catalytique du ribosome, qui fabrique les protéines, est constitué d’ARN.',
            'L’hypothèse du monde à ARN reste une hypothèse. Des difficultés sont discutées, comme la synthèse prébiotique des composants de l’ARN et la stabilité de cette molécule. Il est possible aussi que les premiers systèmes auto-réplicatifs aient utilisé un matériel génétique chimiquement différent de l’ARN actuel. Pour devenir une cellule, de tels systèmes auraient aussi dû s’entourer d’une membrane, une étape de l’évolution chimique encore étudiée expérimentalement.',
            'Les organismes actuels partagent des traits fondamentaux : un matériel génétique en ADN, une transcription en ARN, des ribosomes et un code génétique presque universel. On en déduit qu’ils descendent d’une population ancestrale commune, le dernier ancêtre commun universel (LUCA, de l’anglais Last Universal Common Ancestor). Il ne s’agit pas de « la première cellule » : LUCA est le dernier ancêtre commun de tous les organismes actuels, et il a pu coexister avec d’autres lignées aujourd’hui éteintes. Depuis les travaux de Carl Woese, on classe le vivant en trois domaines : Bactéries, Archées et Eucaryotes.'
          ],
          example: {
            statement: 'Gilbert emploie l’expression « monde à ARN » en 1986 et Altman et Cech reçoivent le prix Nobel de chimie en 1989. Combien d’années séparent ces deux repères ?',
            calculation: '1989 − 1986 = 3.',
            answer: '3 ans. La découverte des ribozymes (dans les années 1980) a rendu l’hypothèse plausible, sans pour autant la démontrer.'
          },
          exercise: {
            question: 'Pourquoi la découverte des ribozymes a-t-elle renforcé l’intérêt pour l’hypothèse du monde à ARN ?',
            answer: 'Parce qu’elle a montré que l’ARN peut catalyser des réactions chimiques, donc qu’une même molécule pourrait à la fois porter l’information et catalyser.'
          },
          exercises: [
            {
              question: 'Qu’est-ce qu’un ribozyme ?',
              answer: 'Une molécule d’ARN capable de catalyser une réaction chimique.'
            },
            {
              question: 'Que signifie LUCA ?',
              answer: 'Last Universal Common Ancestor : le dernier ancêtre commun universel de tous les organismes actuels.'
            },
            {
              question: 'Quels sont les trois domaines du vivant ?',
              answer: 'Les Bactéries, les Archées et les Eucaryotes.'
            }
          ],
          sources: [
            { title: 'Nobel Prize — Sidney Altman, The RNA world', url: 'https://www.nobelprize.org/prizes/chemistry/1989/altman/article/' },
            { title: 'Biophysical Society — Ribozymes', url: 'https://www.biophysics.org/education-careers/education-resources/covid-19-science-stories-and-resources/science-articles/ribozymes' },
            { title: 'OpenStax — Biology 2e, 20.1 Organizing Life on Earth', url: 'https://openstax.org/books/biology-2e/pages/20-1-organizing-life-on-earth' }
          ]
        }
      },
      {
        id: 'premiers-fossiles',
        title: 'Les plus anciennes traces de vie : les stromatolithes',
        field: 'Origine de la vie · Archéen, environ 3,5 milliards d’années',
        summary: 'Comprendre ce que sont les stromatolithes, les traces de vie de la formation de Dresser et les débats sur leur interprétation.',
        lesson: {
          sections: [
            'Les stromatolithes sont des structures sédimentaires laminées, formées par l’activité de communautés microbiennes (tapis microbiens) qui piègent des sédiments et favorisent la précipitation de minéraux. Ce sont des fossiles de structures et non de cellules individuelles. Leur interprétation comme traces de vie est parfois difficile, car des processus non biologiques peuvent aussi produire des structures laminées.',
            'La formation de Dresser, dans le craton de Pilbara en Australie-Occidentale, est datée d’environ 3,5 milliards d’années (3,48 milliards selon des travaux récents). Elle contient des stromatolithes et d’autres indices considérés comme parmi les plus anciens éléments convaincants de vie sur Terre, notamment des signatures isotopiques et des microfossiles. L’origine biologique de ces structures a longtemps fait l’objet de débats.',
            'En 2019, une équipe de l’Université de Nouvelle-Galles du Sud (UNSW) a annoncé avoir trouvé de la matière organique et des restes microbiens exceptionnellement bien conservés dans des stromatolithes de cette formation, un résultat présenté comme un argument fort en faveur de leur origine biologique. D’autres hypothèses non biologiques avaient été avancées auparavant, ce qui montre que l’interprétation des traces anciennes se fait par accumulation d’indices.',
            'En 2017, des chercheurs ont décrit dans la même formation des dépôts de sources chaudes (geysérite) hébergeant des stromatolithes et d’autres biosignatures microbiennes. Cette découverte repousse d’environ 3 milliards d’années le plus ancien enregistrement de sources chaudes habitées et de 580 millions d’années environ la date de colonisation de la terre ferme par la vie, d’après les auteurs. Des affirmations plus anciennes existent pour d’autres sites, mais elles restent débattues ; la date des plus anciennes traces de vie est donc susceptible d’être révisée.'
          ],
          example: {
            statement: 'La Terre a environ 4,54 milliards d’années et les stromatolithes de Dresser environ 3,5 milliards d’années. Combien de temps sépare la formation de la Terre de ces traces de vie ?',
            calculation: '4,54 − 3,5 = 1,04 milliard d’années.',
            answer: 'Environ 1 milliard d’années (valeur approximative, car les datations évoluent).'
          },
          exercise: {
            question: 'Pourquoi faut-il être prudent avant d’interpréter une structure laminée ancienne comme un stromatolithe d’origine biologique ?',
            answer: 'Parce que des processus non biologiques peuvent produire des structures semblables ; il faut des indices complémentaires (matière organique, microfossiles, géochimie) pour conclure.'
          },
          exercises: [
            {
              question: 'Où se trouve la formation de Dresser ?',
              answer: 'Dans le craton de Pilbara, en Australie-Occidentale.'
            },
            {
              question: 'Qu’est-ce qu’un stromatolithe ?',
              answer: 'Une structure laminée formée par des communautés microbiennes qui piègent des sédiments et induisent la précipitation de minéraux.'
            },
            {
              question: 'Quel âge approximatif a la formation de Dresser ?',
              answer: 'Environ 3,5 milliards d’années (3,48 selon des travaux récents).'
            }
          ],
          sources: [
            { title: 'UNSW Newsroom — Earliest signs of life: scientists find microbial remains in ancient rocks (2019)', url: 'https://www.unsw.edu.au/newsroom/news/2019/09/earliest-signs-of-life--scientists-find-microbial-remains-in-anc' },
            { title: 'Djokic et al., Nature Communications (2017) — Earliest signs of life on land preserved in ca. 3.5 Ga hot spring deposits', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5436104' },
            { title: 'Baumgartner et al. (2019) — Nano-porous pyrite and organic matter in 3.5-billion-year-old stromatolites record primordial life', url: 'https://discovery-pp.ucl.ac.uk/10087275/1/Baumgartner%20et%20al%202019%20accepted.pdf' }
          ]
        }
      },
      {
        id: 'cyanobacteries-oxygene',
        title: 'Les cyanobactéries et la Grande Oxydation',
        field: 'Origine de la vie · Photosynthèse oxygénique et atmosphère',
        summary: 'Comprendre comment la photosynthèse oxygénique a transformé l’atmosphère et le monde vivant.',
        lesson: {
          sections: [
            'Pendant une longue partie de l’histoire de la Terre, l’atmosphère contenait très peu de dioxygène libre. Les cyanobactéries sont des bactéries photosynthétiques qui utilisent l’eau comme source d’électrons et libèrent du dioxygène (photosynthèse oxygénique). Les stromatolithes actuels sont souvent associés à des communautés de cyanobactéries, ce qui a servi de modèle pour interpréter certains fossiles anciens, même si l’identité exacte des organismes d’il y a 3,5 milliards d’années reste débattue.',
            'La date d’apparition de la photosynthèse oxygénique est discutée. Des estimations la placent entre 3,4 et 2,9 milliards d’années, d’autres plus tard ; il peut s’être écoulé un long délai entre l’apparition des premiers producteurs d’oxygène et l’augmentation durable de l’oxygène atmosphérique. Les fortes quantités d’oxygène produites ont d’abord été consommées par des réactions chimiques, en particulier avec le fer dissous dans les océans, ce qui a formé des dépôts de fer oxydé en couches, les formations de fer rubanées.',
            'Le Grand Événement d’Oxydation (GOE) désigne l’augmentation marquée du dioxygène dans l’atmosphère il y a environ 2,4 milliards d’années (2,45 selon certaines synthèses). Il est lié à l’activité biologique, et ses causes précises restent discutées. Des traces d’oxygénation locales ont été détectées avant cet événement, ce qui suggère une transition progressive plutôt qu’un instant unique.',
            'Pour les organismes qui vivaient sans oxygène, le dioxygène était toxique, et cet événement a probablement entraîné la disparition de nombreuses lignées anaérobies, tandis que les organismes capables de tolérer et d’utiliser l’oxygène ont pu se développer. La respiration aérobie extrait beaucoup plus d’énergie des molécules organiques que les processus anaérobies, ce qui a élargi les possibilités de développement de cellules plus complexes. Plus tard, des cellules eucaryotes ont acquis des chloroplastes dérivés de cyanobactéries (voir chapitre suivant).'
          ],
          example: {
            statement: 'Les premières traces microbiennes datent d’environ 3,5 milliards d’années et le Grand Événement d’Oxydation d’environ 2,4 milliards d’années. Quel est l’écart ?',
            calculation: '3,5 − 2,4 = 1,1 milliard d’années.',
            answer: 'Environ 1,1 milliard d’années séparent ces deux repères : la vie microbienne a existé longtemps avant que l’oxygène devienne abondant dans l’atmosphère.'
          },
          exercise: {
            question: 'Pourquoi l’oxygène produit par les cyanobactéries n’a-t-il pas immédiatement augmenté dans l’atmosphère ?',
            answer: 'Parce qu’il a d’abord été consommé par des réactions chimiques, notamment avec le fer dissous dans les océans ; l’oxygène n’a pu s’accumuler qu’après la saturation de ces « puits ».'
          },
          exercises: [
            {
              question: 'Que désigne le Grand Événement d’Oxydation ?',
              answer: 'L’augmentation marquée du dioxygène atmosphérique il y a environ 2,4 milliards d’années, liée à l’activité biologique.'
            },
            {
              question: 'Quelle molécule les cyanobactéries utilisent-elles comme source d’électrons dans la photosynthèse oxygénique ?',
              answer: 'L’eau.'
            },
            {
              question: 'Comment les formations de fer rubanées se sont-elles formées ?',
              answer: 'Par réaction entre l’oxygène libéré et le fer dissous dans l’eau, formant des oxydes de fer insolubles qui se déposent en couches.'
            }
          ],
          sources: [
            { title: 'Encyclopedia.pub — Great Oxygenation Event', url: 'https://encyclopedia.pub/entry/33251' },
            { title: 'Universe Today — When Did Photosynthesis Begin?', url: 'https://universetoday.com/152808/when-did-photosynthesis-begin' },
            { title: 'JoVE — Early Earth and the Origin of Life (cyanobactéries, GOE, formations de fer rubanées)', url: 'https://www.jove.com/v/40720' }
          ]
        }
      },
      {
        id: 'origine-eucaryotes',
        title: 'L’origine des cellules eucaryotes : l’endosymbiose',
        field: 'Origine de la vie · Mitochondries, chloroplastes et premières cellules complexes',
        summary: 'Comprendre la théorie endosymbiotique et les arguments qui la soutiennent.',
        lesson: {
          sections: [
            'Les cellules eucaryotes, plus grandes et plus complexes que les cellules procaryotes, ont un noyau et des organites. Leur origine est l’un des grands problèmes de l’histoire de la vie. La plupart des spécialistes admettent que les premières cellules eucaryotes sont apparues plusieurs centaines de millions d’années après le Grand Événement d’Oxydation : des estimations les situent autour de 2 milliards d’années, avec une forte incertitude due à un registre fossile limité.',
            'La théorie endosymbiotique propose que les mitochondries et les chloroplastes descendent de bactéries autrefois libres, englobées par une cellule hôte et devenues des organites. Cette idée est associée à la biologiste Lynn Margulis, qui l’a défendue dès 1967. Les mitochondries dériveraient de bactéries aérobies de type alpha-protéobactérie, et les plastes, dont les chloroplastes, de cyanobactéries. L’hôte présente par certains aspects des similitudes avec les archées, tandis que d’autres aspects des cellules eucaryotes rappellent les bactéries, ce que l’endosymbiose permet d’expliquer.',
            'Plusieurs observations soutiennent cette théorie : les mitochondries et les chloroplastes sont entourés de deux membranes, possèdent leur propre ADN, le plus souvent circulaire, et des ribosomes proches de ceux des bactéries, et se multiplient par un processus qui ressemble à la fission binaire. Au cours de l’évolution, une partie de leurs gènes a été transférée vers le noyau de la cellule hôte. Des endosymbioses secondaires, où une cellule eucaryote en englobe une autre qui contient déjà un chloroplaste, expliquent la diversité de certaines algues et protistes.',
            'La théorie ne répond pas à toutes les questions : l’origine du noyau, du système de membranes internes et du cytosquelette, ainsi que l’ordre des événements (l’hôte avait-il déjà un noyau avant l’acquisition de la mitochondrie ?), restent discutés. Elle illustre toutefois un mécanisme important de l’évolution : des associations entre organismes peuvent donner naissance à des entités nouvelles et plus complexes.'
          ],
          example: {
            statement: 'Le Grand Événement d’Oxydation date d’environ 2,4 milliards d’années et les premiers eucaryotes sont estimés autour de 2,0 milliards d’années. Quel intervalle cela représente-t-il ?',
            calculation: '2,4 − 2,0 = 0,4 milliard d’années, soit 400 millions d’années.',
            answer: 'Environ 400 millions d’années. Il s’agit d’une estimation incertaine, à utiliser comme ordre de grandeur.'
          },
          exercise: {
            question: 'Citez deux arguments en faveur de l’origine endosymbiotique des mitochondries.',
            answer: 'Elles sont entourées de deux membranes, possèdent leur propre ADN circulaire et des ribosomes proches de ceux des bactéries, et se multiplient par un processus semblable à la fission binaire (deux de ces arguments suffisent).'
          },
          exercises: [
            {
              question: 'De quel type de bactéries les plastes (chloroplastes) seraient-ils issus ?',
              answer: 'De cyanobactéries.'
            },
            {
              question: 'Quelle biologiste a défendu l’hypothèse endosymbiotique dès 1967 ?',
              answer: 'Lynn Margulis.'
            },
            {
              question: 'Qu’est-ce qu’une endosymbiose secondaire ?',
              answer: 'Une cellule eucaryote en englobe une autre cellule eucaryote qui contient déjà un plaste, et la conserve comme organite.'
            }
          ],
          sources: [
            { title: 'OpenStax — Concepts of Biology, 13.2 Eukaryotic Origins', url: 'https://openstax.org/books/concepts-biology/pages/13-2-eukaryotic-origins' },
            { title: 'OpenStax — Biology 2e, 23.1 Eukaryotic Origins', url: 'https://openstax.org/books/biology-2e/pages/23-1-eukaryotic-origins' },
            { title: 'LibreTexts (Boundless) — Endosymbiosis and the Evolution of Eukaryotes', url: 'https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_(Boundless)/23%3A_Protists/23.01%3A_Eukaryotic_Origins/23.1C%3A_Endosymbiosis_and_the_Evolution_of_Eukaryotes' }
          ]
        }
      },
      {
        id: 'premiers-multicellulaires',
        title: 'Les premiers organismes multicellulaires : la biote de l’Édiacarien',
        field: 'Origine de la vie · Édiacarien, environ 635 à 538,8 millions d’années',
        summary: 'Découvrir les plus anciens organismes macroscopiques et complexes connus et leur place dans l’histoire de la vie.',
        lesson: {
          sections: [
            'Pendant plus de trois milliards d’années, la vie a surtout été microscopique et unicellulaire. Les premiers organismes macroscopiques, à corps mou et multicellulaires, apparaissent dans le registre fossile à l’Édiacarien, période qui s’étend d’environ 635 à 538,8 millions d’années. Elle porte le nom des collines d’Ediacara, en Australie-Méridionale. Des fossiles de cette biote ont été retrouvés sur une trentaine de sites dans le monde.',
            'Les organismes de l’Édiacarien avaient des formes variées, souvent en tubes, frondes ou disques, et la plupart étaient fixés (sessiles). Les assemblages sont classés en trois grands groupes : Avalon (environ 575 à 560 millions d’années), Mer Blanche (environ 560 à 550) et Nama (environ 550 à 538 millions d’années). Selon une étude, les fossiles d’Ediacara montrent des innovations comme la mobilité, l’hétérotrophie chez des organismes multicellulaires, la squelettisation et des écosystèmes complexes.',
            'La nature biologique de beaucoup de ces organismes reste énigmatique. Pour certains, des affinités avec des éponges, des cnidaires, des cténophores ou des animaux à symétrie bilatérale ont été proposées. Pour d’autres, ils pourraient former des lignées éteintes sans descendants. Une analyse chimique de 2018 a montré que le fossile Dickinsonia contenait du cholestérol, ce qui suggère des affinités avec les animaux, les champignons ou les algues rouges, sans trancher.',
            'À la fin de l’Édiacarien, avec le début du Cambrien vers 538,8 millions d’années, ces communautés disparaissent presque entièrement des archives fossiles, alors que la diversité des animaux augmente rapidement : c’est l’explosion cambrienne. Les fossiles de l’Édiacarien précèdent cette explosion d’environ 40 millions d’années. La multicellularité est apparue plusieurs fois de façon indépendante dans l’histoire du vivant (chez les animaux, les plantes, les champignons et plusieurs groupes d’algues), mais les plus anciens fossiles macroscopiques ne permettent pas de dire de quel groupe actuel descendent tous les organismes de l’Édiacarien.'
          ],
          example: {
            statement: 'Le groupe Avalon de la biote d’Ediacara commence vers 575 millions d’années, et le Cambrien débute vers 538,8 millions d’années. Quelle durée sépare ces deux repères ?',
            calculation: '575 − 538,8 = 36,2.',
            answer: 'Environ 36 millions d’années : un intervalle cohérent avec l’idée que les fossiles d’Ediacara précèdent l’explosion cambrienne d’environ 40 millions d’années.'
          },
          exercise: {
            question: 'Pourquoi dit-on que les organismes de l’Édiacarien sont « énigmatiques » ?',
            answer: 'Parce que leur place dans l’arbre du vivant est discutée : certains pourraient être des animaux ou apparentés, d’autres des lignées éteintes sans descendants connus.'
          },
          exercises: [
            {
              question: 'Entre quelles dates (approximatives) s’étend l’Édiacarien ?',
              answer: 'D’environ 635 à 538,8 millions d’années.'
            },
            {
              question: 'D’où vient le nom « Édiacarien » ?',
              answer: 'Des collines d’Ediacara, dans les chaînes de Flinders, en Australie-Méridionale.'
            },
            {
              question: 'Quel événement marque le début du Cambrien dans le registre fossile ?',
              answer: 'Une augmentation rapide de la diversité des animaux, appelée explosion cambrienne.'
            }
          ],
          sources: [
            { title: 'Flinders University — Ediacaran fossils (Botha et García-Bellido)', url: 'https://sites.flinders.edu.au/vamp/fossils/early-life/ediacaran-fauna/' },
            { title: 'PNAS (PMC) — Ediacara Biota: patterns of evolution and ecosystem complexity', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4413262' },
            { title: 'Wikipedia — Ediacaran biota', url: 'https://en.wikipedia.org/wiki/Ediacaran_biota' }
          ]
        }
      }
    ]
  },
{
    id: 'biologie-evolutive',
    title: 'Biologie évolutive',
    note: 'Six chapitres sur la théorie de Darwin et Wallace, la variation génétique, la dérive et l’équilibre de Hardy-Weinberg, la sélection observée (pinsons de Daphne Major, expérience de Lenski), la spéciation et la phylogénie. Les exemples chiffrés des chapitres sont des exercices simplifiés ; les résultats de recherche cités sont arrondis.',
    chapters: [
      {
        id: 'darwin-wallace-selection-naturelle',
        title: 'Darwin, Wallace et le principe de sélection naturelle',
        field: 'Biologie évolutive · Origines de la théorie (1858-1859) et conditions de la sélection naturelle',
        summary: 'Comprendre comment Darwin et Wallace ont formulé la sélection naturelle, quelles sont ses trois conditions et ce que signifient réellement les termes évolution, adaptation et valeur sélective.',
        lesson: {
          sections: [
            'La théorie de l’évolution par sélection naturelle a été formulée de façon indépendante par deux naturalistes britanniques, Charles Darwin et Alfred Russel Wallace. Darwin travaillait sur la question depuis une vingtaine d’années lorsqu’il reçoit, en juin 1858, une lettre de Wallace qui décrivait une idée très proche de la sienne. Sur les conseils de Charles Lyell et de Joseph Hooker, des extraits d’un manuscrit de Darwin, un résumé d’une lettre de 1857 à Asa Gray et l’essai de Wallace sont lus devant la Linnean Society de Londres le 1er juillet 1858, en l’absence des deux auteurs. Le livre On the Origin of Species by Means of Natural Selection paraît ensuite le 24 novembre 1859.',
            'L’évolution désigne, au sens biologique, le changement des caractéristiques héritables d’une population au fil des générations. La sélection naturelle est un mécanisme possible de cette évolution, pas un synonyme. Elle se produit lorsque trois conditions sont réunies : il existe une variation d’un trait entre les individus, ce trait est héritable, et les individus porteurs de certaines variantes laissent en moyenne plus de descendants que les autres (reproduction différentielle). Si l’une de ces trois conditions manque, la sélection naturelle sur ce trait ne peut pas avoir lieu.',
            'En biologie évolutive, la valeur sélective (fitness en anglais) mesure le succès reproducteur : c’est le nombre de descendants viables d’un individu comparé à celui des autres individus de la population. Elle ne se confond donc ni avec la force physique ni avec la longévité. L’expression « survie du plus apte » est souvent mal comprise : être « apte » signifie laisser plus de descendants dans un environnement donné, et non être supérieur de façon absolue. Un trait favorable dans un milieu peut devenir neutre ou défavorable si le milieu change.',
            'Deux précisions évitent des contresens fréquents. D’abord, la sélection naturelle agit sur des individus, mais c’est la population qui évolue : un individu ne change pas ses gènes au cours de sa vie en réponse à la sélection. Ensuite, la sélection naturelle n’a ni but ni direction à long terme : elle trie des variations déjà présentes sans les créer. L’origine de ces variations (mutations, brassage génétique, flux de gènes) est étudiée au chapitre suivant. Enfin, le mot « théorie » désigne ici un cadre explicatif solidement étayé par de nombreuses observations, et non une simple supposition.'
          ],
          example: {
            statement: 'Dans une population de coléoptères, certains individus sont verts et d’autres bruns. La couleur est héritable et des oiseaux mangent plus souvent les coléoptères verts, plus visibles sur le sol. Les trois conditions de la sélection naturelle sont-elles réunies ?',
            calculation: 'Variation : il existe deux couleurs. Hérédité : la couleur est transmise aux descendants. Reproduction différentielle : les bruns, moins consommés, survivent plus souvent jusqu’à la reproduction et laissent plus de descendants.',
            answer: 'Oui. Les trois conditions sont réunies : la proportion de coléoptères bruns devrait augmenter au fil des générations. C’est un exemple pédagogique simplifié, pas une mesure réelle.'
          },
          exercise: {
            question: 'Pourquoi la sélection naturelle n’agit-elle pas sur un trait qui n’est pas héritable ?',
            answer: 'Parce que, même si les porteurs du trait survivent mieux, leurs descendants ne reçoivent pas ce trait : la composition génétique de la population ne change donc pas d’une génération à l’autre.'
          },
          exercises: [
            {
              question: 'À quelle date On the Origin of Species a-t-il été publié ?',
              answer: 'Le 24 novembre 1859.'
            },
            {
              question: 'Quelles sont les trois conditions nécessaires à la sélection naturelle ?',
              answer: 'Une variation d’un trait, l’hérédité de ce trait et une reproduction différentielle entre les individus.'
            },
            {
              question: 'Que mesure la valeur sélective (fitness) en biologie évolutive ?',
              answer: 'Le succès reproducteur : le nombre de descendants viables d’un individu, comparé à celui des autres individus de la population.'
            }
          ],
          sources: [
            { title: 'UC Berkeley, Understanding Evolution — Natural selection', url: 'https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection/' },
            { title: 'UC Berkeley, Understanding Evolution — Natural selection: the basics', url: 'https://evolution.berkeley.edu/teach-resources/natural-selection-the-basics' },
            { title: 'Natural History Museum (Google Arts & Culture) — Darwin and Wallace’s joint paper on evolution', url: 'https://artsandculture.google.com/asset/LQGdurk5NKd6sA' },
            { title: 'University of Otago Library — Darwin exhibition', url: 'https://www.otago.ac.nz/library/exhibitions/darwin/cabinet8.html' }
          ]
        }
      },
      {
        id: 'variation-genetique-mutations',
        title: 'La variation génétique : mutations, recombinaison et fréquences alléliques',
        field: 'Biologie évolutive · Matière première de l’évolution',
        summary: 'Identifier les sources de variation héritable, comprendre le caractère aléatoire des mutations et savoir calculer une fréquence allélique.',
        lesson: {
          sections: [
            'Sans variation héritable, il n’y a rien sur quoi la sélection naturelle puisse agir. La variation génétique d’une population provient principalement de trois sources : les mutations, le flux de gènes (migration d’individus ou de gamètes entre populations) et le brassage lié à la reproduction sexuée. Associée à la sélection naturelle, cette variation rend l’évolution possible. Les trois sources n’agissent pas de la même façon : la mutation crée de nouveaux allèles, tandis que le flux de gènes et la reproduction sexuée les déplacent ou les combinent différemment.',
            'Une mutation est une modification de la séquence d’ADN. Elle peut résulter d’une erreur lors de la copie de l’ADN ou d’un dommage causé par des agents chimiques ou des rayonnements. Pour avoir un effet évolutif, une mutation doit survenir dans la lignée germinale, c’est-à-dire dans des cellules reproductrices, afin d’être transmise à la descendance : une mutation d’une cellule de la peau disparaît avec l’individu. Beaucoup de mutations sont neutres ou défavorables ; les mutations favorables sont plus rares, mais ce sont celles que la sélection peut faire augmenter en fréquence.',
            'On dit que les mutations sont aléatoires au sens précis où elles ne surviennent pas parce qu’elles seraient utiles à l’organisme : leur apparition ne dépend pas d’un « besoin ». Cela ne signifie pas que l’évolution soit entièrement due au hasard. La sélection naturelle, elle, n’est pas aléatoire : elle trie les variants selon leurs effets sur la survie et la reproduction dans un environnement donné. Le biologiste Richard Lenski décrit ainsi l’intérêt de son expérience à long terme : observer comment l’évolution se déroule quand on combine le caractère aléatoire des mutations et le caractère prévisible de la sélection.',
            'Pour décrire l’évolution d’une population, on suit les fréquences alléliques, c’est-à-dire la proportion de chaque variante (allèle) d’un gène parmi toutes les copies de ce gène dans la population. Pour un gène à deux allèles, on note p et q les fréquences, avec p + q = 1. Dans une population diploïde de N individus, il y a 2N copies du gène. L’évolution, au sens de la génétique des populations, correspond à un changement de ces fréquences d’une génération à l’autre. La reproduction sexuée brasse les allèles existants sans en créer : lors de la formation des gamètes, l’assortiment indépendant des chromosomes et le crossing-over produisent de nouvelles combinaisons.'
          ],
          example: {
            statement: 'Chez l’être humain (23 paires de chromosomes), combien de combinaisons différentes de chromosomes un individu peut-il produire dans ses gamètes par le seul assortiment indépendant, sans tenir compte du crossing-over ?',
            calculation: 'Chaque paire de chromosomes se répartit indépendamment : 2 possibilités par paire. Pour 23 paires : 2^23 = 2 × 2 × … × 2 (23 fois) = 8 388 608.',
            answer: 'Environ 8,4 millions de combinaisons (8 388 608). Le crossing-over augmente encore ce nombre, ce qui explique l’importance de la reproduction sexuée pour la variation.'
          },
          exercise: {
            question: 'Pourquoi dit-on que les mutations sont aléatoires alors que la sélection naturelle ne l’est pas ?',
            answer: 'Parce que les mutations n’apparaissent pas en fonction de leur utilité pour l’organisme, alors que la sélection trie ensuite les variants selon leur effet sur la survie et la reproduction dans un environnement donné.'
          },
          exercises: [
            {
              question: 'Dans une population de 50 individus diploïdes (100 copies d’un gène), 30 copies portent l’allèle A, les autres portent l’allèle a. Quelle est la fréquence de A et celle de a ?',
              answer: 'La fréquence de A est 30/100 = 0,30 et celle de a est 0,70.'
            },
            {
              question: 'Une mutation survenue dans une cellule de la peau est-elle transmise à la descendance ?',
              answer: 'En général non : seules les mutations survenant dans la lignée germinale (cellules reproductrices) peuvent être transmises.'
            },
            {
              question: 'Citez trois sources de variation génétique dans une population.',
              answer: 'Les mutations, le flux de gènes (migration) et le brassage génétique de la reproduction sexuée.'
            }
          ],
          sources: [
            { title: 'EBSCO Research Starters — Genetic variation', url: 'https://ebsco.com/research-starters/biology/genetic-variation' },
            { title: 'UC Berkeley, Understanding Evolution — Natural selection', url: 'https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection/' },
            { title: 'UC Berkeley, Understanding Evolution — The rules of natural selection: it’s all about the genes', url: 'https://evolution.berkeley.edu/the-rules-of-natural-selection-its-all-about-the-genes' },
            { title: 'LiveScience / NSF — E. coli Offers Insight to Evolution', url: 'https://www.livescience.com/14557-coli-offers-insight-evolution-bts.html' }
          ]
        }
      },
      {
        id: 'derive-flux-genes-hardy-weinberg',
        title: 'Dérive génétique, flux de gènes et équilibre de Hardy-Weinberg',
        field: 'Biologie évolutive · Génétique des populations',
        summary: 'Distinguer les mécanismes qui modifient les fréquences alléliques et utiliser le modèle de Hardy-Weinberg comme référence pour détecter l’évolution.',
        lesson: {
          sections: [
            'Quatre mécanismes principaux modifient les fréquences alléliques d’une population : la mutation, le flux de gènes, la dérive génétique et la sélection naturelle. Seule la sélection naturelle est directionnelle au sens où elle dépend de l’effet d’un allèle sur la valeur sélective. Les changements dus au flux de gènes ou à la dérive sont aléatoires par rapport à cet effet. Les distinguer est essentiel : une population peut évoluer sans qu’aucune sélection ne soit à l’œuvre.',
            'La dérive génétique correspond aux fluctuations aléatoires des fréquences alléliques d’une génération à l’autre, parce que seule une partie des gamètes d’une génération donne des descendants. Ces effets d’échantillonnage sont d’autant plus marqués que la population est petite. La dérive peut éliminer un allèle ou le fixer indépendamment de son effet sur la valeur sélective, et elle tend à réduire la variation génétique au sein d’une population. Deux situations la renforcent : le goulot d’étranglement, lorsqu’une population subit une forte réduction d’effectif, et l’effet fondateur, lorsqu’un petit groupe fonde une nouvelle population.',
            'Le flux de gènes est le déplacement d’allèles entre populations, par migration d’individus ou de gamètes. Lorsqu’il est important, il tend à homogénéiser les fréquences alléliques des populations concernées et peut les amener à partager le même pool génétique. Il peut aussi introduire de nouveaux allèles dans une population. À l’inverse, l’absence de flux de gènes entre populations isolées favorise leur divergence, ce qui joue un rôle central dans la spéciation (chapitre 5).',
            'Le modèle de Hardy-Weinberg décrit les fréquences génotypiques attendues pour un gène à deux allèles lorsqu’aucun mécanisme évolutif n’agit. Si p et q sont les fréquences des deux allèles (p + q = 1), les fréquences des génotypes homozygotes et hétérozygote sont p², 2pq et q², avec p² + 2pq + q² = 1. Les conditions habituelles sont l’absence de mutation, de migration et de sélection, une population de grande taille et des accouplements aléatoires. Ce modèle sert de référence : un écart par rapport aux proportions attendues indique que l’une de ces hypothèses n’est pas respectée.'
          ],
          example: {
            statement: 'Dans une population supposée à l’équilibre de Hardy-Weinberg, 4 % des individus sont homozygotes récessifs (aa). Quelle est la fréquence des hétérozygotes (Aa) ?',
            calculation: 'q² = 0,04 donc q = 0,2. Comme p + q = 1, p = 0,8. La fréquence des hétérozygotes est 2pq = 2 × 0,8 × 0,2 = 0,32. Vérification : p² + 2pq + q² = 0,64 + 0,32 + 0,04 = 1.',
            answer: 'Les hétérozygotes représentent 32 % de la population, soit huit fois plus que les homozygotes récessifs. Ce résultat vaut seulement si les conditions du modèle sont respectées.'
          },
          exercise: {
            question: 'Pourquoi la dérive génétique est-elle plus marquée dans une petite population que dans une grande ?',
            answer: 'Parce que, lorsque peu d’individus se reproduisent, le hasard de l’échantillonnage des gamètes pèse davantage sur les fréquences alléliques de la génération suivante.'
          },
          exercises: [
            {
              question: 'Pour un gène à deux allèles, si p = 0,6, que vaut q ?',
              answer: 'q = 1 − 0,6 = 0,4.'
            },
            {
              question: 'Avec p = 0,6 et q = 0,4, quelle est la fréquence attendue des hétérozygotes à l’équilibre de Hardy-Weinberg ?',
              answer: '2pq = 2 × 0,6 × 0,4 = 0,48, soit 48 %.'
            },
            {
              question: 'Un flux de gènes important entre deux populations les rend-il plus semblables ou plus différentes génétiquement ?',
              answer: 'Plus semblables : le flux de gènes tend à homogénéiser leurs fréquences alléliques.'
            }
          ],
          sources: [
            { title: 'UC Berkeley, Understanding Evolution — Bottlenecks and founder effects', url: 'https://evolution.berkeley.edu/bottlenecks-and-founder-effects/' },
            { title: 'EBSCO Research Starters — Genetic variation', url: 'https://ebsco.com/research-starters/biology/genetic-variation' },
            { title: 'University of Utah (cours d’anthropologie) — Selection', url: 'https://content.csbs.utah.edu/~rogers/tch/ant5221/lecture/selection.pdf' },
            { title: 'UC Berkeley, Understanding Evolution — The rules of natural selection: it’s all about the genes', url: 'https://evolution.berkeley.edu/the-rules-of-natural-selection-its-all-about-the-genes' }
          ]
        }
      },
      {
        id: 'selection-observee-pinsons-lenski',
        title: 'La sélection naturelle observée : pinsons de Daphne Major et expérience de Lenski',
        field: 'Biologie évolutive · Études de terrain et expériences de laboratoire',
        summary: 'Analyser deux cas où l’évolution a été mesurée directement et comprendre ce qu’ils démontrent et ce qu’ils ne démontrent pas.',
        lesson: {
          sections: [
            'Peter et Rosemary Grant ont étudié pendant des décennies les pinsons de l’île de Daphne Major, dans l’archipel des Galápagos, en particulier le géospize à bec moyen (Geospiza fortis), qui se nourrit de graines. En 1977, une sécheresse sévère réduit fortement la production de graines. La population passe d’environ 1 400 individus à quelques centaines en un peu plus de deux ans, et plus de la moitié de la population initiale meurt. Les oiseaux à bec plus profond se nourrissent plus efficacement de graines grosses et dures, alors que les oiseaux à bec plus petit exploitent mieux les petites graines tendres, devenues rares : ce sont donc surtout les oiseaux à gros bec qui survivent.',
            'Ce cas réunit les trois conditions de la sélection naturelle. Il existe une variation de la profondeur du bec, cette variation est héritable (la taille du bec des descendants est liée à celle de leurs parents) et la survie diffère selon le bec. Les descendants nés après la sécheresse, en 1978, ont en moyenne un bec plus profond que la population d’avant la sécheresse : la population a donc évolué. Les Grant ont également observé une sélection forte lors de la sécheresse de 1985. Lorsque l’environnement change, la sélection peut favoriser un autre trait : une adaptation n’est jamais « meilleure » dans l’absolu.',
            'L’expérience d’évolution à long terme (LTEE) menée par Richard Lenski a débuté en février 1988 à partir de 12 populations d’Escherichia coli issues de la même souche. Chaque jour, 1 % de chaque population est transféré dans un milieu neuf contenant du glucose comme principale source de nourriture. Des échantillons sont régulièrement congelés : cette collection joue le rôle d’un registre fossile vivant, car les bactéries ancestrales peuvent être ranimées et comparées à leurs descendantes. L’expérience a été transférée en 2022 au laboratoire de Jeffrey Barrick, à l’Université du Texas à Austin, et a dépassé 80 000 générations.',
            'Un résultat marquant de la LTEE est survenu vers 31 000 générations : dans une seule des 12 populations, les bactéries ont acquis la capacité d’utiliser le citrate en présence d’oxygène, ce qu’E. coli ne fait normalement pas. Ce cas illustre le rôle conjoint du hasard (l’apparition de mutations) et de la sélection (le tri de ces mutations), ainsi que la contingence historique : les 11 autres populations n’ont pas acquis cette capacité dans la même durée. Ces études ont des limites : les pinsons sont observés dans un milieu naturel complexe mais sur une espèce précise, et la LTEE se déroule dans un milieu de laboratoire volontairement simplifié. Leur valeur tient à la convergence entre observation de terrain et expérience contrôlée.'
          ],
          example: {
            statement: 'Exemple fictif simplifié : dans une population, les individus du type A laissent en moyenne 8 descendants viables et ceux du type B en laissent 6. Quelle est la valeur sélective relative de B et le coefficient de sélection contre B ?',
            calculation: 'On prend le type le plus performant comme référence : w(A) = 8/8 = 1. Pour B : w(B) = 6/8 = 0,75. Le coefficient de sélection est s = 1 − w(B) = 1 − 0,75 = 0,25.',
            answer: 'La valeur sélective relative de B est 0,75 et le coefficient de sélection contre B est 0,25 : B laisse 25 % de descendants viables en moins que A.'
          },
          exercise: {
            question: 'Pourquoi les données de Daphne Major constituent-elles une démonstration de sélection naturelle et pas seulement un effet du hasard ?',
            answer: 'Parce que la survie dépendait d’un trait mesurable (la profondeur du bec) en lien avec la disponibilité des graines, et que ce trait est héritable : les descendants de 1978 avaient en moyenne un bec plus profond.'
          },
          exercises: [
            {
              question: 'En quelle année la sécheresse majeure a-t-elle frappé Daphne Major lors de l’étude des Grant ?',
              answer: 'En 1977.'
            },
            {
              question: 'Combien de populations d’E. coli ont été lancées au début de la LTEE, et en quelle année ?',
              answer: 'Douze populations, en 1988.'
            },
            {
              question: 'Qu’a-t-on observé dans l’une des populations de la LTEE vers 31 000 générations ?',
              answer: 'Elle a acquis la capacité d’utiliser le citrate en présence d’oxygène, ce qu’E. coli ne fait normalement pas.'
            }
          ],
          sources: [
            { title: 'Open University (OpenLearn) — Natural selection in Darwin’s finches', url: 'https://www.open.edu/openlearn/science-maths-technology/migration/content-section-3.4' },
            { title: 'HHMI BioInteractive — The Beak of the Finch (quiz)', url: 'https://media.hhmi.org/biointeractive/interactivevideo/finchquiz' },
            { title: 'NSF — E. coli Offers Insight to Evolution', url: 'https://www.nsf.gov/news/e-coli-offers-insight-evolution' },
            { title: 'Michigan State University — Evolution under a microscope going strong at MSU', url: 'https://msutoday.msu.edu/news/2025/11/evolution-under-a-microscope-going-strong-at-msu' },
            { title: 'Wikipedia — E. coli long-term evolution experiment', url: 'https://en.wikipedia.org/wiki/E._coli_long-term_evolution_experiment' }
          ]
        }
      },
      {
        id: 'speciation-isolement-reproducteur',
        title: 'Espèces, isolement reproducteur et spéciation',
        field: 'Biologie évolutive · Origine de nouvelles espèces',
        summary: 'Définir la spéciation, distinguer les barrières à la reproduction et comparer les modes allopatrique et sympatrique.',
        lesson: {
          sections: [
            'La spéciation est le processus évolutif par lequel de nouvelles espèces (taxons descendants) apparaissent à partir d’espèces existantes (taxons ancestraux). Le concept biologique d’espèce, souvent associé à Ernst Mayr, définit une espèce comme un ensemble de populations qui peuvent se reproduire entre elles et qui sont isolées sur le plan reproductif d’autres ensembles. Ce concept est très utile mais imparfait : il s’applique mal aux organismes à reproduction asexuée ou aux fossiles. Les biologistes discutent toujours des processus qui ont le plus contribué aux motifs de spéciation observés, mais personne ne remet en cause le fait que des espèces descendent de formes antérieures.',
            'L’isolement reproductif regroupe les barrières qui limitent le flux de gènes entre espèces. Les barrières prézygotiques empêchent l’accouplement ou la fécondation : reproduction à des périodes différentes de l’année, chants nuptiaux différents, anatomie reproductrice incompatible. Les barrières postzygotiques agissent après l’accouplement : la descendance hybride est peu viable ou stérile, comme la mule, issue du croisement entre un cheval et un âne. Ces barrières peuvent apparaître comme conséquence indirecte de la divergence génétique accumulée entre populations séparées.',
            'Dans la spéciation allopatrique, une barrière géographique (rivière, montagne, bras de mer, etc.) sépare une population en deux groupes ou isole une petite population. Le flux de gènes est interrompu ; mutations, dérive génétique et sélection naturelle agissent alors indépendamment dans chaque groupe. Si la divergence est suffisante, les groupes ne se reproduisent plus entre eux même si la barrière disparaît. Une source universitaire présente ce mode comme le plus important, avec une estimation de 90 à 95 % des événements de spéciation. On distingue notamment la vicariance (une barrière divise une population) et la spéciation péripatrique (une petite population isolée au bord de l’aire de répartition).',
            'La spéciation sympatrique se produit sans séparation géographique : des barrières écologiques ou comportementales créent l’isolement au sein d’une même aire. Elle est plus difficile à établir, car le flux de gènes tend à homogénéiser les populations. Les preuves sont plus rares, au point que certains scientifiques ont douté de son existence, mais plusieurs exemples solides sont cités, notamment les cichlidés du lac Victoria en Afrique. Il existe aussi la spéciation parapatrique, entre populations adjacentes. Retenir cette typologie ne doit pas faire oublier qu’elle simplifie un continuum de situations.'
          ],
          example: {
            statement: 'Une rivière apparue dans une région divise une population de souris en deux groupes qui ne peuvent plus se croiser. Après de très nombreuses générations, lorsque les deux groupes se retrouvent, ils ne s’accouplent plus. De quel mode de spéciation s’agit-il ?',
            calculation: 'Étape 1 : une barrière géographique interrompt le flux de gènes. Étape 2 : mutations, dérive et sélection agissent séparément dans chaque groupe. Étape 3 : la divergence aboutit à un isolement reproductif, constaté lors du nouveau contact.',
            answer: 'Il s’agit d’une spéciation allopatrique. Le critère décisif est l’isolement reproductif, pas seulement l’existence de différences visibles entre les groupes.'
          },
          exercise: {
            question: 'Pourquoi la spéciation sympatrique est-elle plus difficile à démontrer que la spéciation allopatrique ?',
            answer: 'Parce que, sans barrière géographique, le flux de gènes tend à homogénéiser les populations : il faut montrer que des facteurs écologiques ou comportementaux ont créé l’isolement et exclure un ancien isolement géographique.'
          },
          exercises: [
            {
              question: 'Donnez un exemple de barrière prézygotique.',
              answer: 'Une reproduction à des périodes différentes, des chants nuptiaux différents ou une anatomie reproductrice incompatible.'
            },
            {
              question: 'Pourquoi la mule illustre-t-elle une barrière postzygotique ?',
              answer: 'Le croisement cheval × âne a lieu mais produit une descendance stérile.'
            },
            {
              question: 'Quel mode de spéciation implique une barrière géographique séparant la population ancestrale ?',
              answer: 'La spéciation allopatrique.'
            }
          ],
          sources: [
            { title: 'Digital Atlas of Ancient Life — Speciation', url: 'https://www.digitalatlasofancientlife.org/learn/evolution/speciation/' },
            { title: 'Discover Magazine — How Does Speciation Drive Evolution?', url: 'https://www.discovermagazine.com/the-sciences/how-does-speciation-drive-evolution' },
            { title: 'CK-12 / LibreTexts — Origin of Species', url: 'https://k12.libretexts.org/Bookshelves/Science_and_Technology/Biology/05%3A_Evolution/5.14%3A_Origin_of_Species' },
            { title: 'Université de Grenade (R. Navajas-Pérez) — Macroevolution and Speciation', url: 'https://wpd.ugr.es/~rnavajas/PDFs/DOCENCIA/UNIT_8.pdf' }
          ]
        }
      },
      {
        id: 'phylogenie-arbre-du-vivant',
        title: 'Phylogénie : lire l’arbre du vivant et comprendre les preuves de l’évolution',
        field: 'Biologie évolutive · Systématique et reconstruction des relations de parenté',
        summary: 'Lire correctement un arbre phylogénétique, distinguer les groupes monophylétiques des autres groupes et différencier homologie et analogie.',
        lesson: {
          sections: [
            'Un arbre phylogénétique représente les relations évolutives entre des organismes : il montre, à travers le temps, le chemin qui mène d’un ancêtre commun à ses descendants. Il comporte une racine, des nœuds (chacun correspondant à un ancêtre commun des lignées qui en sont issues), des branches et des extrémités qui représentent les taxons étudiés. Darwin a développé la métaphore de l’arbre du vivant pour exprimer que les espèces actuelles descendent d’ancêtres communs avec modification. Un arbre montre des relations historiques, et non des degrés de ressemblance entre les extrémités.',
            'L’erreur de lecture la plus fréquente consiste à interpréter l’ordre des extrémités : on lit alors l’arbre « de gauche à droite » comme une échelle de progrès, ou on juge la parenté d’après la proximité sur le dessin. Or les branches peuvent pivoter autour d’un nœud sans changer les relations, et dans un arbre dessiné avec un axe vertical pour le temps, l’axe horizontal n’a aucune signification. La bonne méthode consiste à lire les groupes emboîtés (clades) définis par les nœuds. Toutes les espèces actuelles sont également éloignées, dans le temps, de leur ancêtre commun le plus récent : parler d’espèces « primitives » et « avancées » est donc trompeur.',
            'Un groupe monophylétique (clade) comprend un ancêtre commun et tous ses descendants. Un groupe paraphylétique exclut un ou plusieurs descendants de cet ancêtre. Un groupe polyphylétique exclut l’ancêtre commun de ses membres. Depuis les travaux de Willi Hennig, la classification moderne vise à ne nommer que des groupes monophylétiques, afin de refléter l’histoire évolutive. Cette approche a des conséquences concrètes : par exemple, les champignons sont plus étroitement apparentés aux animaux qu’aux plantes.',
            'Les arbres sont construits à partir de caractères, morphologiques ou moléculaires. Il faut distinguer l’homologie, qui désigne une ressemblance héritée d’un ancêtre commun, de l’analogie (ou homoplasie), qui désigne une ressemblance apparue indépendamment dans des lignées différentes, par exemple par convergence. Seuls les caractères dérivés partagés (synapomorphies) renseignent sur les clades. Les phylogénies fournissent l’un des cadres dans lesquels les preuves de l’évolution sont évaluées, aux côtés des fossiles, de l’anatomie comparée et de la génétique moléculaire : toutes ces lignes d’étude convergent vers l’idée que les êtres vivants sont liés par une ascendance commune.'
          ],
          example: {
            statement: 'Un arbre est écrit en notation parenthésée : (((A,B),C),D). Quel taxon est le plus proche parent de A ?',
            calculation: 'On lit les groupes emboîtés de l’intérieur vers l’extérieur : (A,B) forme le plus petit clade, puis (A,B) + C, puis l’ensemble avec D. A et B partagent donc un ancêtre commun plus récent que celui qu’ils partagent avec C ou D.',
            answer: 'B est le groupe frère de A. C et D sont des parents plus éloignés, quelle que soit leur position dans un dessin de l’arbre.'
          },
          exercise: {
            question: 'Pourquoi ne faut-il pas déduire la parenté de la seule proximité des extrémités dans un dessin d’arbre ?',
            answer: 'Parce que les branches peuvent pivoter autour des nœuds sans modifier les relations : seuls les nœuds, c’est-à-dire les ancêtres communs, et les clades emboîtés renseignent sur la parenté.'
          },
          exercises: [
            {
              question: 'Que représente un nœud sur un arbre phylogénétique ?',
              answer: 'Un ancêtre commun aux lignées qui en sont issues, c’est-à-dire un point de divergence.'
            },
            {
              question: 'Un groupe qui exclut un ou plusieurs descendants de l’ancêtre commun est-il monophylétique, paraphylétique ou polyphylétique ?',
              answer: 'Il est paraphylétique.'
            },
            {
              question: 'Les champignons sont-ils plus proches des animaux ou des plantes ?',
              answer: 'Des animaux.'
            }
          ],
          sources: [
            { title: 'UC Berkeley, Understanding Evolution — Tree thinking: the basics', url: 'https://evolution.berkeley.edu/teach-resources/tree-thinking-basics' },
            { title: 'Georgia Tech, Principles of Biology — Phylogenetic trees', url: 'https://bioprinciples.biosci.gatech.edu/module-1-evolution/phylogenetic-trees' },
            { title: 'PLOS Biology / PMC — Walking and talking the tree of life', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5358732/' },
            { title: 'LiveScience — What is taxonomy?', url: 'https://livescience.com/taxonomy.html' },
            { title: 'Evolution: Education and Outreach — Understanding the tree of life: tree-reading skill frameworks', url: 'https://doi.org/10.1186/s12052-019-0104-3' }
          ]
        }
      }
    ]
  },

];

