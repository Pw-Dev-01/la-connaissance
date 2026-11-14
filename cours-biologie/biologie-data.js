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

{
  id: 'chimie-vivant',
  title: 'Chimie du vivant: Comment fonctionne les cellules',
  note: 'Six chapitres approfondis sur les bases chimiques du vivant, les biomolécules, les membranes cellulaires, les enzymes, la respiration cellulaire et la photosynthèse. La propriété sortYear est volontairement absente, car le classement chronologique est désactivé pour cette branche.',
  chapters: [
    {
      id: 'composition-chimique-cellules',
      title: 'La composition chimique des cellules : atomes, eau et ions',
      field: 'Chimie du vivant · Constituants chimiques et milieu cellulaire',
      summary: 'Identifier les éléments chimiques du vivant et comprendre comment l’eau, les ions et les interactions moléculaires rendent possibles les réactions cellulaires.',
      lesson: {
        sections: [
          'Une cellule est un système chimique organisé. Elle contient de l’eau, des ions minéraux et de nombreuses molécules carbonées. Les éléments les plus abondants dans les molécules biologiques sont le carbone (C), l’hydrogène (H), l’oxygène (O), l’azote (N), le phosphore (P) et le soufre (S), souvent regroupés sous le sigle CHNOPS. Le carbone peut former quatre liaisons covalentes, ce qui permet de construire des squelettes moléculaires variés : chaînes, ramifications et cycles. Les propriétés d’une molécule dépendent de ses atomes, de leur organisation et des liaisons qui les relient.',
          'Les liaisons covalentes résultent du partage de paires d’électrons entre atomes. Elles constituent l’ossature de nombreuses molécules biologiques. Les interactions non covalentes sont généralement plus faibles individuellement, mais leur accumulation joue un rôle majeur dans la forme des macromolécules et leur reconnaissance mutuelle. Les liaisons hydrogène, les interactions électrostatiques, les forces de dispersion et l’effet hydrophobe contribuent par exemple au repliement des protéines, à l’association des deux brins d’ADN et à l’organisation des membranes. La structure biologique résulte donc d’un équilibre d’interactions plutôt que d’une seule liaison isolée.',
          'L’eau est le principal constituant de nombreuses cellules. Sa molécule est polaire : l’oxygène attire davantage les électrons de liaison que l’hydrogène, ce qui crée des charges partielles. Les molécules d’eau peuvent ainsi établir des liaisons hydrogène entre elles et avec des groupes polaires. L’eau dissout efficacement de nombreux ions et composés polaires, ce qui facilite leur transport et leurs réactions. À l’inverse, les molécules majoritairement apolaires sont souvent peu solubles dans l’eau. Cette différence de comportement est fondamentale pour comprendre l’assemblage des membranes et le regroupement de certaines molécules.',
          'Les ions sont des atomes ou des groupes d’atomes qui portent une charge électrique. Le sodium (Na+), le potassium (K+), le calcium (Ca2+), le magnésium (Mg2+) et le chlorure (Cl−) remplissent des fonctions distinctes. Ils participent à l’équilibre osmotique, à l’activité de protéines, à la signalisation et aux propriétés électriques des cellules. Leur répartition de part et d’autre de la membrane plasmique est contrôlée par des mécanismes de transport. Les concentrations intracellulaires ne sont donc pas simplement identiques à celles du milieu extérieur.',
          'Le pH caractérise l’acidité d’une solution et dépend de l’activité des ions hydrogène. De nombreuses protéines sont sensibles au pH, car la charge de certains groupes chimiques de leurs acides aminés peut changer lorsque le milieu devient plus acide ou plus basique. Les systèmes tampons limitent les variations de pH en captant ou en libérant des protons selon les conditions. Ils contribuent à maintenir un environnement compatible avec les réactions métaboliques. Les valeurs de pH optimales varient selon les compartiments cellulaires et les organismes : il n’existe pas une valeur universelle pour toutes les cellules.'
        ],
        example: {
          statement: 'Une molécule possède plusieurs groupes chargés ou polaires et se trouve dans un milieu aqueux. Quel comportement peut-on généralement prévoir ?',
          calculation: 'L’eau est polaire. Les groupes chargés ou polaires peuvent établir avec elle des interactions électrostatiques ou des liaisons hydrogène. La solubilité dépend cependant aussi de la taille de la partie apolaire et de la structure complète de la molécule.',
          answer: 'La molécule peut être hydrophile et présenter une bonne interaction avec l’eau. Il s’agit d’une prévision générale : la solubilité exacte dépend de toute sa structure chimique.'
        },
        exercise: {
          question: 'Pourquoi l’eau est-elle un milieu essentiel aux réactions chimiques des cellules ?',
          answer: 'Sa polarité permet de dissoudre de nombreux ions et composés polaires. Elle facilite leur diffusion, leur rencontre et les réactions chimiques dans le milieu cellulaire.'
        },
        exercises: [
          {
            question: 'Que signifie le sigle CHNOPS ?',
            answer: 'Carbone, hydrogène, azote, oxygène, phosphore et soufre.'
          },
          {
            question: 'Quelle propriété de l’eau favorise la dissolution de nombreux ions ?',
            answer: 'Sa polarité, qui permet des interactions électrostatiques favorables avec les ions.'
          },
          {
            question: 'À quoi servent les systèmes tampons ?',
            answer: 'Ils limitent les variations de pH en captant ou en libérant des protons.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 2.1 Atoms, Isotopes, Ions, and Molecules', url: 'https://openstax.org/books/biology-2e/pages/2-1-atoms-isotopes-ions-and-molecules-the-building-blocks' },
          { title: 'OpenStax — Biology 2e, 2.2 Water', url: 'https://openstax.org/books/biology-2e/pages/2-2-water' },
          { title: 'OpenStax — Biology 2e, 2.3 Carbon', url: 'https://openstax.org/books/biology-2e/pages/2-3-carbon' },
          { title: 'NCBI Bookshelf — Molecular Biology of the Cell, The Chemical Components of a Cell', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/' }
        ]
      }
    },
    {
      id: 'biomolecules-cellulaires',
      title: 'Les biomolécules : glucides, lipides, protéines et acides nucléiques',
      field: 'Chimie du vivant · Molécules organiques et macromolécules',
      summary: 'Étudier les grandes familles de molécules biologiques, leurs unités constitutives, leurs liaisons et leurs fonctions dans les cellules.',
      lesson: {
        sections: [
          'Les glucides sont des molécules organiques constituées principalement de carbone, d’hydrogène et d’oxygène. Les monosaccharides, comme le glucose et le fructose, sont des sucres simples. Deux monosaccharides peuvent être reliés par une liaison glycosidique pour former un disaccharide. Des assemblages plus importants forment des polysaccharides. Le glucose est un substrat important de nombreuses voies métaboliques. L’amidon est une forme de réserve glucidique chez les plantes, tandis que le glycogène joue un rôle de réserve chez les animaux et les champignons. La cellulose est un polysaccharide structural majeur de la paroi des cellules végétales.',
          'Les lipides constituent une famille hétérogène de molécules généralement peu solubles dans l’eau. Les triglycérides sont formés d’un glycérol lié à trois acides gras et représentent une forme importante de stockage énergétique. Les phospholipides possèdent une région hydrophile et une région hydrophobe : ils sont amphiphiles. Dans l’eau, cette propriété favorise leur organisation en bicouches, structure de base des membranes biologiques. D’autres lipides, comme les stéroïdes, possèdent une structure en cycles carbonés. Le cholestérol contribue notamment aux propriétés physiques de nombreuses membranes animales.',
          'Les protéines sont des polymères d’acides aminés reliés par des liaisons peptidiques. La séquence des acides aminés constitue la structure primaire. Les interactions entre les groupes du squelette et des chaînes latérales contribuent à former des structures secondaires, comme les hélices alpha et les feuillets bêta, puis une structure tridimensionnelle. Certaines protéines sont constituées de plusieurs sous-unités associées. La forme tridimensionnelle conditionne largement leur fonction : catalyse enzymatique, transport, signalisation, défense, mouvement ou soutien structural. Une modification des conditions chimiques peut perturber leur conformation et leur activité.',
          'Les acides nucléiques sont l’ADN et l’ARN. Ils sont constitués de nucléotides, chaque nucléotide comprenant un sucre à cinq carbones, un groupement phosphate et une base azotée. L’ADN stocke l’information génétique dans une séquence de nucléotides. L’ARN intervient dans l’expression de cette information et dans d’autres fonctions, notamment catalytiques ou régulatrices pour certains ARN. Les nucléotides ont également des fonctions énergétiques et de signalisation : l’ATP, par exemple, est un nucléotide utilisé dans de nombreux transferts d’énergie.',
          'Les cellules construisent et dégradent continuellement leurs biomolécules. La formation de liaisons entre unités moléculaires peut être décrite, dans les cas classiques, comme une réaction de condensation avec libération d’eau. L’hydrolyse est une réaction qui utilise l’eau pour rompre certaines liaisons. Ces termes décrivent des transformations chimiques et non des mécanismes identiques pour toutes les familles. En particulier, les lipides ne sont généralement pas des polymères réguliers constitués d’une répétition d’un monomère unique, contrairement aux protéines, aux acides nucléiques et à de nombreux polysaccharides.'
        ],
        example: {
          statement: 'Une cellule assemble plusieurs acides aminés pour former une chaîne polypeptidique. Quel type de liaison relie ces unités ?',
          calculation: 'Le groupe carboxyle d’un acide aminé peut réagir avec le groupe amine d’un autre. La liaison formée entre les deux résidus est une liaison peptidique.',
          answer: 'Les acides aminés sont reliés par des liaisons peptidiques pour former une chaîne polypeptidique.'
        },
        exercise: {
          question: 'Pourquoi les phospholipides peuvent-ils former spontanément une bicouche dans un milieu aqueux ?',
          answer: 'Parce qu’ils sont amphiphiles : leurs têtes hydrophiles interagissent avec l’eau tandis que leurs queues hydrophobes se regroupent à l’écart de l’eau.'
        },
        exercises: [
          {
            question: 'Quel polysaccharide constitue une réserve glucidique importante chez les végétaux ?',
            answer: 'L’amidon.'
          },
          {
            question: 'Quels sont les trois constituants d’un nucléotide ?',
            answer: 'Un sucre à cinq carbones, un groupement phosphate et une base azotée.'
          },
          {
            question: 'Quelle liaison relie les acides aminés dans une protéine ?',
            answer: 'La liaison peptidique.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 3.2 Carbohydrates', url: 'https://openstax.org/books/biology-2e/pages/3-2-carbohydrates' },
          { title: 'OpenStax — Biology 2e, 3.3 Lipids', url: 'https://openstax.org/books/biology-2e/pages/3-3-lipids' },
          { title: 'OpenStax — Biology 2e, 3.4 Proteins', url: 'https://openstax.org/books/biology-2e/pages/3-4-proteins' },
          { title: 'OpenStax — Biology 2e, 3.5 Nucleic Acids', url: 'https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids' },
          { title: 'NCBI Bookshelf — Molecular Biology of the Cell, The Chemical Components of a Cell', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/' }
        ]
      }
    },
    {
      id: 'membrane-et-echanges',
      title: 'La membrane plasmique : structure, perméabilité et échanges',
      field: 'Biologie cellulaire · Bicouche lipidique et transport membranaire',
      summary: 'Comprendre la membrane plasmique, sa perméabilité sélective et les mécanismes qui contrôlent les échanges entre la cellule et son environnement.',
      lesson: {
        sections: [
          'La membrane plasmique délimite la cellule et sépare le cytoplasme du milieu extracellulaire. Le modèle de la mosaïque fluide décrit une bicouche de lipides dans laquelle se trouvent des protéines et d’autres constituants. Les têtes hydrophiles des phospholipides sont orientées vers les milieux aqueux, tandis que leurs queues hydrophobes se font face au centre de la bicouche. Certaines protéines traversent la membrane et d’autres sont associées à l’une de ses faces. Des glucides liés à des lipides ou à des protéines participent notamment à la reconnaissance et aux interactions cellulaires.',
          'La membrane est sélectivement perméable. De petites molécules apolaires comme le dioxygène et le dioxyde de carbone peuvent traverser la bicouche par diffusion simple. Les ions et de nombreuses molécules polaires ne traversent pas facilement son cœur hydrophobe. Ils utilisent des protéines de transport : les canaux forment des voies de passage sélectives et les transporteurs changent de conformation pour déplacer leurs molécules cibles. Les aquaporines sont des canaux qui facilitent le passage de l’eau. La perméabilité dépend donc de la nature de la substance et des protéines présentes dans la membrane.',
          'La diffusion correspond au déplacement net de particules selon leur gradient de concentration. La diffusion simple ne nécessite pas de protéine de transport. La diffusion facilitée suit également un gradient favorable, mais elle nécessite un canal ou un transporteur. Ces deux mécanismes sont passifs : ils ne demandent pas de dépense directe d’ATP pour le passage considéré. L’osmose désigne le déplacement net de l’eau à travers une membrane sélectivement perméable. Le sens du flux dépend des différences de potentiel chimique de l’eau, souvent présentées à un niveau introductif en fonction des concentrations en solutés non perméants.',
          'Le transport actif permet de déplacer une substance contre son gradient électrochimique. Le transport actif primaire utilise directement une source d’énergie, souvent l’hydrolyse de l’ATP, comme dans le cas de la pompe sodium-potassium. Le transport actif secondaire exploite un gradient ionique préalablement établi pour entraîner le déplacement d’une autre substance. Un symport déplace deux substances dans le même sens ; un antiport les déplace en sens opposés. Ces mécanismes contribuent à maintenir les concentrations ioniques, le volume cellulaire et l’approvisionnement en nutriments.',
          'Les cellules transportent aussi des matériaux dans des vésicules. L’endocytose fait entrer des substances en formant des vésicules à partir de la membrane plasmique. L’exocytose permet la libération de substances lorsqu’une vésicule fusionne avec la membrane. Ces transports en masse sont distincts du passage individuel d’ions ou de petites molécules à travers des protéines membranaires. Ils participent notamment à l’absorption de particules, au renouvellement de composants membranaires et à la sécrétion de molécules.'
        ],
        example: {
          statement: 'Un ion traverse la membrane par un canal, dans le sens de son gradient électrochimique. Le passage ne consomme pas directement d’ATP. Comment nomme-t-on ce mécanisme ?',
          calculation: 'Le déplacement suit un gradient favorable et utilise une protéine membranaire. Il ne nécessite pas d’apport énergétique direct pour le passage de l’ion.',
          answer: 'Il s’agit d’une diffusion facilitée, qui est un transport passif.'
        },
        exercise: {
          question: 'Quelle est la différence entre diffusion facilitée et transport actif ?',
          answer: 'La diffusion facilitée suit un gradient favorable sans dépense directe d’énergie. Le transport actif peut déplacer une substance contre son gradient et nécessite une source d’énergie.'
        },
        exercises: [
          {
            question: 'Comment les phospholipides s’orientent-ils dans une bicouche membranaire ?',
            answer: 'Les têtes hydrophiles sont tournées vers les milieux aqueux et les queues hydrophobes vers l’intérieur de la bicouche.'
          },
          {
            question: 'Quel phénomène décrit le déplacement net de l’eau à travers une membrane sélectivement perméable ?',
            answer: 'L’osmose.'
          },
          {
            question: 'Quelle source d’énergie alimente directement la pompe sodium-potassium ?',
            answer: 'L’énergie libérée par l’hydrolyse de l’ATP.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 5.1 Components and Structure', url: 'https://openstax.org/books/biology-2e/pages/5-1-components-and-structure' },
          { title: 'OpenStax — Biology 2e, 5.2 Passive Transport', url: 'https://openstax.org/books/biology-2e/pages/5-2-passive-transport' },
          { title: 'OpenStax — Biology 2e, 5.3 Active Transport', url: 'https://openstax.org/books/biology-2e/pages/5-3-active-transport' },
          { title: 'OpenStax — Biology 2e, 5.4 Bulk Transport', url: 'https://openstax.org/books/biology-2e/pages/5-4-bulk-transport' },
          { title: 'NCBI Bookshelf — Molecular Biology of the Cell, Membrane Transport', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/' }
        ]
      }
    },
    {
      id: 'enzymes-et-metabolisme',
      title: 'Les enzymes et le métabolisme : contrôler les réactions cellulaires',
      field: 'Biochimie · Catalyse, énergie libre et régulation métabolique',
      summary: 'Expliquer le rôle des enzymes, l’énergie d’activation, les facteurs qui modifient leur activité et l’organisation des voies métaboliques.',
      lesson: {
        sections: [
          'Le métabolisme regroupe l’ensemble des réactions chimiques qui se déroulent dans une cellule ou un organisme. Les réactions cataboliques dégradent des molécules et peuvent libérer de l’énergie utilisable. Les réactions anaboliques construisent des molécules plus complexes et nécessitent généralement un apport d’énergie. Ces réactions sont organisées en voies métaboliques : le produit d’une étape devient le substrat de l’étape suivante. Cette organisation permet de contrôler les transformations de matière et les transferts d’énergie.',
          'Une réaction chimique peut nécessiter de franchir une barrière énergétique appelée énergie d’activation. Une enzyme est un catalyseur biologique qui accélère une réaction en abaissant cette barrière. La plupart des enzymes sont des protéines, mais certains ARN possèdent aussi une activité catalytique. Une enzyme n’est pas consommée dans le bilan global de la réaction. Elle accélère l’atteinte de l’équilibre sans modifier à elle seule la variation d’énergie libre entre les réactifs et les produits.',
          'Le substrat se lie à une région de l’enzyme appelée site actif. Les propriétés chimiques et la forme de ce site favorisent certaines interactions avec le substrat. Le modèle de l’ajustement induit décrit le fait que la liaison peut entraîner un changement de conformation de l’enzyme. La catalyse peut reposer sur plusieurs contributions : rapprocher et orienter les substrats, stabiliser l’état de transition ou participer temporairement à certaines étapes chimiques. La spécificité enzymatique dépend de l’ensemble de ces propriétés moléculaires.',
          'L’activité enzymatique dépend des conditions du milieu. La température influence la vitesse des mouvements moléculaires et donc la fréquence des rencontres entre enzyme et substrat. Une température trop élevée peut déstabiliser la structure de nombreuses enzymes. Le pH modifie l’état de protonation de groupes chimiques et peut affecter la liaison au substrat ou les étapes catalytiques. Chaque enzyme possède une plage de conditions favorables qui dépend de son environnement biologique ; il n’existe pas une température ou un pH optimal unique pour toutes les enzymes.',
          'Les cellules régulent l’activité enzymatique selon leurs besoins. Un inhibiteur compétitif entre en compétition avec le substrat pour le site actif. Des inhibiteurs allostériques se fixent sur un autre site et modifient l’activité par un changement de conformation. Des molécules peuvent également activer certaines enzymes. Dans une voie métabolique, le produit final peut réduire l’activité d’une enzyme située en amont : cette rétro-inhibition limite la production lorsque le produit est déjà suffisamment abondant. La régulation peut aussi dépendre de modifications covalentes, comme la phosphorylation, ou de la quantité d’enzyme produite.'
        ],
        example: {
          statement: 'Une enzyme devient beaucoup moins active lorsque le pH de son milieu change fortement. Quelle explication moléculaire peut rendre compte de cette observation ?',
          calculation: 'Le pH modifie l’état de charge de certains groupes chimiques des acides aminés. Cela peut perturber les interactions qui stabilisent la structure de l’enzyme ou celles qui interviennent directement dans son site actif.',
          answer: 'Le changement de pH peut modifier la conformation ou les propriétés chimiques du site actif, ce qui diminue l’activité catalytique.'
        },
        exercise: {
          question: 'Comment une enzyme accélère-t-elle une réaction sans modifier le bilan énergétique global entre réactifs et produits ?',
          answer: 'Elle fournit un chemin réactionnel dont l’énergie d’activation est plus faible. Elle accélère la réaction sans changer la variation d’énergie libre globale entre les réactifs et les produits.'
        },
        exercises: [
          {
            question: 'Comment s’appelle la région de l’enzyme où se lie le substrat ?',
            answer: 'Le site actif.'
          },
          {
            question: 'Une enzyme est-elle consommée définitivement pendant la réaction qu’elle catalyse ?',
            answer: 'Non. Elle peut catalyser plusieurs cycles réactionnels si elle conserve sa structure et son activité.'
          },
          {
            question: 'Quel est le principe de la rétro-inhibition ?',
            answer: 'Le produit final d’une voie métabolique diminue l’activité d’une enzyme située plus tôt dans cette voie.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 6.1 Energy and Metabolism', url: 'https://openstax.org/books/biology-2e/pages/6-1-energy-and-metabolism' },
          { title: 'OpenStax — Biology 2e, 6.5 Enzymes', url: 'https://openstax.org/books/biology-2e/pages/6-5-enzymes' },
          { title: 'NCBI Bookshelf — Molecular Biology of the Cell, Catalysis and the Use of Energy by Cells', url: 'https://www.ncbi.nlm.nih.gov/books/NBK26838/' }
        ]
      }
    },
    {
      id: 'atp-respiration-cellulaire',
      title: 'L’ATP et la respiration cellulaire : produire de l’énergie utilisable',
      field: 'Bioénergétique · Glycolyse, cycle de l’acide citrique et phosphorylation oxydative',
      summary: 'Suivre les étapes de la respiration cellulaire et comprendre comment l’énergie des molécules organiques contribue à la synthèse d’ATP.',
      lesson: {
        sections: [
          'L’ATP, ou adénosine triphosphate, est un nucléotide formé d’adénine, de ribose et de trois groupements phosphate. Son hydrolyse en ADP et phosphate inorganique peut libérer de l’énergie libre, qui est couplée à des processus nécessitant un apport énergétique. L’ATP intervient notamment dans la biosynthèse, le transport actif et certains mouvements cellulaires. Il ne constitue pas une réserve énergétique à long terme : les cellules le consomment et le régénèrent continuellement à partir d’ADP et de phosphate.',
          'La respiration cellulaire aérobie permet d’extraire une partie de l’énergie chimique des molécules organiques en transférant des électrons vers des accepteurs successifs, jusqu’au dioxygène. Chez les cellules eucaryotes, la glycolyse se déroule dans le cytosol. Elle transforme une molécule de glucose en deux molécules de pyruvate et produit un gain net de deux ATP ainsi que deux NADH par glucose. La glycolyse ne nécessite pas directement de dioxygène, même si le devenir du pyruvate et du NADH dépend des conditions métaboliques.',
          'Lorsque la respiration aérobie se poursuit dans une cellule eucaryote, le pyruvate est généralement transporté dans la mitochondrie et converti en acétyl-CoA. Cette transformation libère du CO2 et produit du NADH. L’acétyl-CoA entre ensuite dans le cycle de l’acide citrique, dans la matrice mitochondriale. Au cours de ce cycle, les groupes acétyle sont oxydés et du CO2 est libéré. Des coenzymes réduits, principalement NADH et FADH2, recueillent une partie de l’énergie sous forme d’électrons à haut potentiel de transfert.',
          'Les électrons du NADH et du FADH2 alimentent la chaîne de transport d’électrons située dans la membrane interne mitochondriale. Les transferts successifs libèrent de l’énergie qui permet à certains complexes de déplacer des protons de la matrice vers l’espace intermembranaire. Il se forme ainsi un gradient électrochimique de protons. Le dioxygène est l’accepteur final des électrons dans la respiration aérobie ; sa réduction contribue à la formation d’eau. Si le transfert des électrons est interrompu, le maintien du gradient et la production d’ATP par phosphorylation oxydative sont compromis.',
          'L’ATP synthase utilise l’énergie du retour des protons vers la matrice pour produire de l’ATP à partir d’ADP et de phosphate inorganique. Ce mécanisme est appelé chimiosmose. La majeure partie de l’ATP de la respiration aérobie est produite par phosphorylation oxydative. Le rendement total en ATP par glucose n’est pas une constante universelle : il varie selon le type de cellule, les navettes qui transfèrent les électrons du NADH cytosolique, les fuites de protons et les besoins de transport mitochondrial.',
          'Lorsque la chaîne respiratoire ne peut pas réoxyder suffisamment le NADH, certaines cellules utilisent la fermentation pour régénérer le NAD+. La fermentation lactique transforme le pyruvate en lactate ; la fermentation alcoolique, présente chez certaines levures et certains microorganismes, produit de l’éthanol et du CO2. La fermentation ne fournit pas d’ATP supplémentaire au-delà du gain de la glycolyse, mais elle permet à cette dernière de continuer en régénérant le NAD+ nécessaire.'
        ],
        example: {
          statement: 'Une molécule de glucose subit la glycolyse dans le cytosol. Combien de molécules de pyruvate et quel gain net direct en ATP sont produits ?',
          calculation: 'Une molécule de glucose à six carbones est transformée en deux molécules de pyruvate à trois carbones. La glycolyse consomme deux ATP dans sa phase préparatoire et en produit quatre dans sa phase de rendement.',
          answer: 'La glycolyse produit deux molécules de pyruvate et un gain net de deux molécules d’ATP par molécule de glucose.'
        },
        exercise: {
          question: 'Quel est le rôle du gradient de protons dans la production mitochondriale d’ATP ?',
          answer: 'Le gradient stocke une énergie électrochimique. Le retour des protons à travers l’ATP synthase fournit l’énergie nécessaire à la synthèse d’ATP.'
        },
        exercises: [
          {
            question: 'Dans quel compartiment cellulaire se déroule la glycolyse ?',
            answer: 'Dans le cytosol.'
          },
          {
            question: 'Quel est l’accepteur final des électrons dans la chaîne respiratoire aérobie ?',
            answer: 'Le dioxygène (O2), qui est réduit et contribue à la formation d’eau.'
          },
          {
            question: 'Pourquoi la fermentation permet-elle à la glycolyse de continuer ?',
            answer: 'Elle régénère le NAD+ à partir du NADH, ce qui permet la poursuite des réactions de glycolyse.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 6.4 ATP: Adenosine Triphosphate', url: 'https://openstax.org/books/biology-2e/pages/6-4-atp-adenosine-triphosphate' },
          { title: 'OpenStax — Biology 2e, 7.2 Glycolysis', url: 'https://openstax.org/books/biology-2e/pages/7-2-glycolysis' },
          { title: 'OpenStax — Biology 2e, 7.3 Oxidation of Pyruvate and the Citric Acid Cycle', url: 'https://openstax.org/books/biology-2e/pages/7-3-oxidation-of-pyruvate-and-the-citric-acid-cycle' },
          { title: 'OpenStax — Biology 2e, 7.4 Oxidative Phosphorylation', url: 'https://openstax.org/books/biology-2e/pages/7-4-oxidative-phosphorylation' },
          { title: 'OpenStax — Biology 2e, 7.5 Metabolism without Oxygen', url: 'https://openstax.org/books/biology-2e/pages/7-5-metabolism-without-oxygen' },
          { title: 'NCBI Bookshelf — Molecular Biology of the Cell, How Cells Obtain Energy from Food', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/' }
        ]
      }
    },
    {
      id: 'photosynthese-cellulaire',
      title: 'La photosynthèse : convertir l’énergie lumineuse en énergie chimique',
      field: 'Bioénergétique · Chloroplastes, réactions lumineuses et fixation du carbone',
      summary: 'Comprendre comment les organismes photosynthétiques utilisent la lumière pour produire de l’ATP et du NADPH, puis incorporer le carbone du CO2 dans des molécules organiques.',
      lesson: {
        sections: [
          'La photosynthèse est un processus de conversion d’énergie réalisé par les plantes, les algues et certains microorganismes. Chez les plantes, elle se déroule dans les chloroplastes. Les membranes des thylakoïdes contiennent les pigments photosynthétiques, les photosystèmes et une chaîne de transport d’électrons. Le stroma est le compartiment aqueux qui entoure les thylakoïdes. La photosynthèse oxygénique utilise l’énergie lumineuse pour contribuer à la synthèse de molécules organiques à partir de CO2 et d’eau, avec libération de dioxygène.',
          'Les réactions dépendantes de la lumière ont lieu dans les membranes des thylakoïdes. Les pigments absorbent des photons et l’énergie lumineuse permet d’exciter des électrons dans les photosystèmes. Dans la photosynthèse oxygénique, le photosystème II est associé à l’oxydation de l’eau. Cette réaction fournit des électrons, libère des protons et produit du dioxygène. Le transfert des électrons le long de la chaîne contribue à établir un gradient de protons à travers la membrane thylakoïdienne.',
          'Le gradient de protons est utilisé par l’ATP synthase pour produire de l’ATP dans le stroma. Au niveau du photosystème I, les électrons sont réénergisés par la lumière et permettent finalement la réduction du NADP+ en NADPH. L’ATP et le NADPH sont donc des produits énergétiques et réducteurs des réactions lumineuses. Ils seront utilisés dans les réactions de fixation du carbone. Les détails du transfert d’électrons et les proportions d’ATP et de NADPH peuvent varier selon les conditions et les voies photochimiques mobilisées.',
          'Le cycle de Calvin se déroule dans le stroma du chloroplaste. Il utilise l’ATP et le NADPH pour incorporer le carbone du dioxyde de carbone dans des molécules organiques. L’enzyme Rubisco catalyse la fixation du CO2 sur le ribulose-1,5-bisphosphate. Les réactions qui suivent produisent du glycéraldéhyde-3-phosphate, un triose phosphate dont une partie peut servir à fabriquer des glucides et d’autres molécules. Le reste contribue à régénérer l’accepteur de CO2. Le cycle ne libère pas directement une molécule de glucose à chaque tour.',
          'L’équation-bilan simplifiée de la photosynthèse oxygénique peut s’écrire : 6 CO2 + 6 H2O + énergie lumineuse → C6H12O6 + 6 O2. Cette équation résume le bilan global et ne décrit pas les étapes intermédiaires ni les coûts détaillés en ATP et NADPH. Les atomes d’oxygène libérés sous forme de dioxygène proviennent de l’eau oxydée lors des réactions lumineuses. Cette origine a été établie par des expériences utilisant des isotopes de l’oxygène.',
          'La vitesse de la photosynthèse dépend de plusieurs facteurs, notamment l’intensité et la qualité de la lumière, la disponibilité en CO2, la température et l’état hydrique de la plante. Les stomates régulent les échanges gazeux entre la feuille et l’atmosphère. Leur fermeture limite les pertes d’eau, mais réduit aussi l’entrée de CO2 et peut donc limiter la fixation du carbone. Les plantes C3, C4 et CAM présentent des adaptations différentes à leurs environnements ; ces voies ne modifient pas le principe général des réactions photochimiques, mais organisent différemment l’approvisionnement en CO2.'
        ],
        example: {
          statement: 'Dans la photosynthèse oxygénique, quelle molécule fournit les électrons qui alimentent la chaîne de transport photosynthétique ?',
          calculation: 'Au niveau du photosystème II, un complexe enzymatique associé oxyde l’eau. Cette réaction fournit des électrons, libère des protons et forme du dioxygène.',
          answer: 'L’eau (H2O) est la source des électrons dans la photosynthèse oxygénique ; son oxydation contribue à la libération de O2.'
        },
        exercise: {
          question: 'Comment les réactions lumineuses et le cycle de Calvin sont-ils complémentaires ?',
          answer: 'Les réactions lumineuses convertissent l’énergie lumineuse en ATP et NADPH. Le cycle de Calvin utilise ces molécules pour incorporer le CO2 dans des composés organiques.'
        },
        exercises: [
          {
            question: 'Dans quel organite des cellules végétales se déroule la photosynthèse ?',
            answer: 'Dans le chloroplaste.'
          },
          {
            question: 'Où se déroulent les réactions dépendantes de la lumière ?',
            answer: 'Dans les membranes des thylakoïdes.'
          },
          {
            question: 'Quelle enzyme catalyse la fixation du CO2 dans le cycle de Calvin ?',
            answer: 'La Rubisco, ou ribulose-1,5-bisphosphate carboxylase/oxygénase.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 8.1 Overview of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, 8.2 The Light-Dependent Reactions of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, 8.3 The Calvin Cycle', url: 'https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules' },
          { title: 'NCBI Bookshelf — Molecular Biology of the Cell, Chloroplasts and Photosynthesis', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/' }
        ]
      }
    }
  ]
},


{
  id: 'relations-especes',
  sortYear: 'false',
  title: 'Relations entre les espèces : interactions, coexistence et évolution des communautés',
  note: 'Six chapitres approfondis pour comprendre les relations entre espèces dans les communautés écologiques : effets positifs, négatifs ou neutres, compétition, prédation, parasitisme, mutualisme, commensalisme et réseaux d’interactions. Les effets décrits sont des tendances générales : leur intensité dépend du contexte écologique, des individus et des conditions du milieu.',
  chapters: [
    {
      id: 'fondements-relations-interespecifiques',
      title: 'Les fondements des relations entre les espèces',
      field: 'Écologie · Écologie des communautés et interactions interspécifiques',
      summary: 'Définir une communauté biologique, distinguer les interactions entre espèces et interpréter leurs effets sur la survie, la croissance et la reproduction.',
      lesson: {
        sections: [
          'L’écologie étudie les relations des organismes entre eux et avec leur environnement. Une communauté biologique rassemble les populations de différentes espèces qui vivent dans une même zone et à une même période. Les espèces d’une communauté ne sont donc pas indépendantes : elles peuvent partager des ressources, se nourrir les unes des autres, se protéger ou modifier réciproquement leurs conditions de vie. L’étude de ces relations permet de comprendre pourquoi certaines espèces coexistent, pourquoi d’autres régressent et comment se structure la biodiversité locale.',
          'Une interaction interspécifique est une relation écologique entre des organismes appartenant à des espèces différentes. On décrit souvent son effet sur chaque partenaire avec les signes +, − et 0. Le signe + indique un effet favorable mesurable sur la survie, la croissance ou la reproduction ; le signe − indique un effet défavorable ; le signe 0 signifie qu’aucun effet net significatif n’est mis en évidence dans le cadre étudié. Ces signes résument les effets moyens ou observés : ils ne signifient pas que chaque individu subit exactement la même conséquence.',
          'Les principales catégories sont la compétition (−/−), la prédation (+/−), l’herbivorie (+/−), le parasitisme (+/−), le mutualisme (+/+), le commensalisme (+/0) et l’amensalisme (−/0). La prédation et l’herbivorie sont des interactions de consommation, tandis que le parasitisme implique généralement une association durable entre un parasite et son hôte. Le terme symbiose est employé au sens large pour désigner une association intime et durable entre espèces dans de nombreux manuels, mais certains domaines l’emploient dans un sens plus restreint : il faut donc préciser la définition utilisée.',
          'Une interaction peut être directe, lorsque les organismes agissent l’un sur l’autre, ou indirecte, lorsqu’une troisième espèce ou une ressource intermédiaire transmet l’effet. Par exemple, deux consommateurs peuvent être en compétition parce qu’ils exploitent la même ressource limitée, même s’ils ne se rencontrent jamais. Les interactions peuvent aussi changer avec le contexte : une espèce peut être bénéfique dans une situation et devenir défavorable dans une autre, selon la disponibilité des ressources ou les conditions du milieu.',
          'Pour étudier une relation, les écologues mesurent notamment l’abondance des populations, le taux de survie, le succès reproducteur, la croissance et l’utilisation des ressources. Une simple observation de proximité ne suffit pas à prouver une interaction bénéfique ou nuisible. Il faut comparer les organismes exposés à la relation avec des situations de référence, tout en tenant compte des autres facteurs possibles, comme la température, l’humidité, la nourriture et la présence de prédateurs.'
        ],
        example: {
          statement: 'Dans une communauté, une espèce A profite de la présence d’une espèce B, tandis que les mesures ne révèlent pas d’effet net détectable sur B. Comment classer provisoirement cette interaction ?',
          calculation: 'On traduit les effets observés par des signes : espèce A = + ; espèce B = 0. La combinaison est donc +/0.',
          answer: 'Il s’agit d’un commensalisme au sens de la classification écologique classique. Cette conclusion reste liée aux mesures et aux conditions étudiées : l’absence d’effet détecté ne prouve pas toujours une absence absolue d’effet.'
        },
        exercise: {
          question: 'Pourquoi les signes +, − et 0 ne suffisent-ils pas, à eux seuls, à expliquer complètement une relation écologique ?',
          answer: 'Ils résument l’effet net sur chaque partenaire, mais ne décrivent ni le mécanisme, ni la durée, ni l’intensité de l’interaction, ni ses variations selon l’environnement.'
        },
        exercises: [
          {
            question: 'Que désigne une communauté biologique ?',
            answer: 'L’ensemble des populations de différentes espèces vivant dans une même zone et à une même période.'
          },
          {
            question: 'Que signifie une interaction notée −/− ?',
            answer: 'Les deux partenaires subissent un effet défavorable ; c’est la notation classique de la compétition.'
          },
          {
            question: 'Une proximité entre deux espèces prouve-t-elle un mutualisme ?',
            answer: 'Non. Il faut montrer que chacune tire un bénéfice de l’interaction, et non simplement constater qu’elles coexistent.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, The Scope of Ecology', url: 'https://openstax.org/books/biology-2e/pages/44-1-the-scope-of-ecology' },
          { title: 'OpenStax — Biology 2e, Community Ecology', url: 'https://openstax.org/books/biology-2e/pages/45-6-community-ecology' },
          { title: 'Michigan State University — Species Interactions', url: 'https://openbooks.lib.msu.edu/isb202/chapter/species-interactions/' }
        ]
      }
    },
    {
      id: 'competition-niches-ecologiques',
      title: 'La compétition interspécifique et les niches écologiques',
      field: 'Écologie · Compétition, ressources limitantes et coexistence',
      summary: 'Comprendre comment le partage de ressources limitées influence la croissance des populations, la répartition des espèces et leur coexistence.',
      lesson: {
        sections: [
          'La compétition interspécifique apparaît lorsque des individus d’espèces différentes utilisent une même ressource qui limite leur croissance, leur survie ou leur reproduction. Cette ressource peut être alimentaire, comme des graines ou du plancton, mais aussi un espace, un abri, un site de nidification, de la lumière ou de l’eau. La compétition ne suppose pas nécessairement un affrontement : elle peut être indirecte, lorsque l’exploitation d’une ressource par une espèce en laisse moins à disposition d’une autre.',
          'On distingue classiquement la compétition par exploitation et la compétition par interférence. Dans la compétition par exploitation, chaque espèce prélève une ressource commune et réduit ainsi sa disponibilité pour l’autre. Dans la compétition par interférence, les organismes limitent directement l’accès de concurrents à une ressource, par exemple en défendant un territoire ou en occupant un site. Ces mécanismes peuvent se combiner dans un même milieu.',
          'La niche écologique ne se réduit pas à l’endroit où vit une espèce. Elle correspond à l’ensemble des conditions, ressources et interactions nécessaires à son maintien, ainsi qu’à la manière dont elle les utilise. La niche fondamentale décrit les conditions dans lesquelles une espèce pourrait théoriquement se maintenir en l’absence de certaines contraintes biotiques. La niche réalisée correspond à la partie effectivement occupée dans la nature, compte tenu notamment des compétiteurs, prédateurs, parasites et partenaires. Ces notions sont des modèles écologiques qui aident à analyser la distribution des espèces.',
          'Le principe d’exclusion compétitive, associé aux travaux expérimentaux de Georgy Gause, indique que deux espèces ayant des besoins trop similaires et exploitant durablement la même ressource limitante ne peuvent généralement pas coexister indéfiniment dans un environnement stable si aucune différenciation ne réduit la compétition. Ce principe n’affirme pas que toute compétition conduit automatiquement à la disparition d’une espèce. La coexistence est possible lorsque les espèces utilisent des ressources différentes, exploitent la même ressource à des moments ou dans des lieux différents, ou sont soumises à des conditions environnementales variables.',
          'La différenciation des niches, parfois appelée partage des ressources, peut réduire le chevauchement écologique entre espèces. Deux oiseaux insectivores d’un même arbre peuvent, par exemple, rechercher leurs proies dans des zones différentes ou à des hauteurs différentes. La compétition peut ainsi contribuer à modifier les comportements, les habitats utilisés et, sur de nombreuses générations, les caractères soumis à la sélection naturelle. Pour établir qu’elle explique une répartition observée, il faut toutefois écarter d’autres facteurs, comme le climat, la disponibilité des habitats ou la prédation.'
        ],
        example: {
          statement: 'Deux espèces d’oiseaux consomment les mêmes insectes dans une forêt. L’une recherche surtout ses proies dans les branches hautes et l’autre dans les branches basses. Quel mécanisme peut faciliter leur coexistence ?',
          calculation: 'On compare les zones de recherche alimentaire : les deux espèces utilisent une ressource de même nature, mais dans des microhabitats différents. Le chevauchement de leurs niches alimentaires et spatiales peut donc diminuer.',
          answer: 'Le partage des ressources, qui correspond à une différenciation de niche, peut réduire la compétition. Il ne garantit pas à lui seul la coexistence : d’autres facteurs écologiques interviennent également.'
        },
        exercise: {
          question: 'Quelle différence existe-t-il entre compétition par exploitation et compétition par interférence ?',
          answer: 'Dans la compétition par exploitation, une espèce réduit indirectement la ressource disponible en la consommant. Dans la compétition par interférence, elle limite directement l’accès du concurrent à cette ressource.'
        },
        exercises: [
          {
            question: 'Pourquoi une ressource doit-elle être limitante pour provoquer une compétition écologique ?',
            answer: 'Parce que si elle est suffisamment disponible pour tous, son utilisation par une espèce ne réduit pas nécessairement les possibilités de l’autre.'
          },
          {
            question: 'Que décrit la niche réalisée ?',
            answer: 'Les conditions et ressources effectivement utilisées par une espèce dans la nature, en tenant compte des contraintes écologiques, notamment des interactions biotiques.'
          },
          {
            question: 'Le principe d’exclusion compétitive signifie-t-il que deux espèces proches ne peuvent jamais coexister ?',
            answer: 'Non. Elles peuvent coexister si leurs niches diffèrent suffisamment ou si les conditions écologiques empêchent l’exclusion durable.'
          }
        ],
        sources: [
          { title: 'OpenStax — Concepts of Biology, Community Ecology', url: 'https://openstax.org/books/concepts-biology/pages/19-4-community-ecology' },
          { title: 'Oxford University Press — Interactions between Species: Mutualisms and Competition', url: 'https://academic.oup.com/book/44483/chapter-abstract/376657542' },
          { title: 'OpenStax — Biology 2e, Community Ecology', url: 'https://openstax.org/books/biology-2e/pages/45-6-community-ecology' }
        ]
      }
    },
    {
      id: 'predation-herbivorie-defenses',
      title: 'La prédation, l’herbivorie et les stratégies de défense',
      field: 'Écologie · Relations trophiques et interactions de consommation',
      summary: 'Étudier les relations entre prédateurs et proies, la consommation des végétaux et les réponses défensives des organismes.',
      lesson: {
        sections: [
          'La prédation est une interaction dans laquelle un organisme, le prédateur, capture et consomme un autre organisme, la proie. Elle transfère de la matière et de l’énergie entre niveaux trophiques et peut influencer l’abondance, la distribution et le comportement des populations. La prédation ne se limite pas aux grands animaux : elle concerne aussi des organismes microscopiques, comme certains protistes qui consomment des bactéries.',
          'L’herbivorie est une forme de consommation dans laquelle un animal prélève des tissus ou des parties d’un végétal ou d’une algue. Contrairement à la prédation classique, l’organisme consommé n’est pas nécessairement tué : une plante peut survivre à la perte de feuilles ou de parties de ses tissus et produire de nouvelles pousses. L’intensité des dommages dépend de la quantité consommée, de la partie touchée, de l’état de la plante et de sa capacité de récupération.',
          'Les relations entre prédateurs et proies peuvent influencer leurs effectifs réciproques. Lorsque les proies deviennent plus abondantes, les prédateurs peuvent disposer de davantage de nourriture et leur population peut augmenter avec un certain décalage. Une hausse de la prédation peut ensuite contribuer à faire diminuer les proies, puis la raréfaction de celles-ci peut entraîner une baisse des prédateurs. Ces cycles ne sont cependant ni automatiques ni toujours réguliers : le climat, les maladies, les refuges, les autres aliments et les activités humaines peuvent modifier leur dynamique.',
          'Les proies possèdent différentes défenses. Certaines sont morphologiques, comme les épines ou les coquilles ; d’autres sont chimiques, comme des substances dissuasives. Le camouflage réduit parfois la probabilité d’être détecté, tandis que les colorations aposématiques signalent à certains prédateurs une toxicité ou une défense. Le mimétisme peut également réduire le risque d’attaque lorsqu’une espèce ressemble à une autre espèce défendue. L’efficacité de ces stratégies dépend du prédateur, du contexte et de l’expérience de celui-ci.',
          'Les prédateurs présentent eux aussi des adaptations : organes sensoriels performants, vitesse, discrétion, coopération ou structures permettant de capturer les proies. Les interactions évoluent souvent comme un jeu de réponses réciproques : une amélioration des défenses chez les proies peut favoriser des capacités de détection ou de capture chez les prédateurs. Ces changements ne sont pas nécessairement synchrones et ne résultent pas d’une intention des organismes ; ils peuvent être favorisés par la sélection naturelle au fil des générations.'
        ],
        example: {
          statement: 'Dans une population de proies, l’effectif augmente pendant plusieurs saisons. La nourriture devient alors plus accessible aux prédateurs, dont l’effectif augmente ensuite. Quelle relation explique ce lien ?',
          calculation: 'La variation des proies modifie la quantité de nourriture disponible pour les prédateurs. L’effet sur la population de prédateurs peut apparaître avec un décalage temporel.',
          answer: 'Il s’agit d’une dynamique prédateur-proie. L’augmentation des prédateurs peut ensuite contribuer à réduire les proies, mais les autres facteurs du milieu doivent aussi être pris en compte.'
        },
        exercise: {
          question: 'Pourquoi une plante consommée par un herbivore n’est-elle pas nécessairement tuée ?',
          answer: 'L’herbivore peut ne consommer qu’une partie de la plante, qui peut survivre et parfois renouveler ses tissus selon l’organe touché et ses capacités de récupération.'
        },
        exercises: [
          {
            question: 'Quelle est la différence principale entre prédation et herbivorie ?',
            answer: 'La prédation implique généralement la capture et la consommation d’une proie animale ou d’un autre organisme, tandis que l’herbivorie correspond à la consommation de tissus végétaux ou d’algues sans tuer nécessairement l’organisme.'
          },
          {
            question: 'À quoi sert une coloration aposématique ?',
            answer: 'Elle constitue un signal visuel pouvant avertir certains prédateurs d’une défense, par exemple chimique ou liée à un mauvais goût.'
          },
          {
            question: 'Les effectifs des prédateurs et des proies suivent-ils toujours des cycles réguliers ?',
            answer: 'Non. Le climat, les maladies, les ressources alternatives, les refuges et les perturbations peuvent modifier ou masquer ces cycles.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Community Ecology', url: 'https://openstax.org/books/biology-2e/pages/45-6-community-ecology' },
          { title: 'Khan Academy — Interactions in Communities', url: 'https://www.khanacademy.org/science/ap-biology/ecology-ap/community-ecology/a/interactions-in-communities' },
          { title: 'OpenStax — Biology for AP Courses, Community Ecology', url: 'https://openstax.org/books/biology-ap-courses/pages/36-6-community-ecology' }
        ]
      }
    },
    {
      id: 'parasitisme-parasitoidisme',
      title: 'Le parasitisme et le parasitoïdisme',
      field: 'Écologie · Parasitologie et relations hôte-parasite',
      summary: 'Comprendre comment les parasites exploitent leurs hôtes, leurs cycles biologiques et les effets écologiques de ces relations.',
      lesson: {
        sections: [
          'Le parasitisme est une interaction dans laquelle un organisme, le parasite, tire des ressources d’un autre organisme, l’hôte, en lui causant un effet défavorable. Le parasite peut vivre à la surface de son hôte : on parle alors d’ectoparasite ; ou à l’intérieur : il s’agit d’un endoparasite. Les parasites peuvent être microscopiques ou visibles, et leurs modes de vie sont très divers. Le parasitisme ne conduit pas systématiquement à la mort de l’hôte : de nombreux parasites dépendent de sa survie pendant une partie importante de leur cycle.',
          'Un parasite utilise son hôte comme source de nourriture, milieu de développement ou lieu de reproduction. Cette relation peut réduire la croissance, la condition physique ou le succès reproducteur de l’hôte. Les conséquences varient selon l’espèce, la charge parasitaire, l’âge et l’état de l’hôte, ainsi que les conditions environnementales. Un hôte peut aussi développer des réponses immunitaires, comportementales ou physiologiques qui limitent l’installation et la multiplication du parasite.',
          'Les cycles de vie parasitaires sont parfois simples, avec un seul hôte nécessaire à la réalisation du cycle, ou complexes, avec plusieurs hôtes successifs. Un hôte définitif héberge le stade adulte ou la reproduction sexuée du parasite, tandis qu’un hôte intermédiaire héberge généralement un stade larvaire ou une phase de développement. Les définitions précises dépendent du groupe parasitaire étudié. La transmission peut se faire par contact, ingestion, vecteur ou voie environnementale, selon le parasite.',
          'Le parasitoïdisme est une stratégie particulière, fréquente chez certains insectes, dans laquelle le développement d’un jeune parasitoïde se fait aux dépens d’un hôte et conduit généralement à la mort de celui-ci. Cela le distingue du parasitisme classique, où l’hôte survit souvent pendant une partie ou la totalité de l’association. Il faut également distinguer les parasitoïdes des prédateurs : un parasitoïde individuel se développe généralement sur ou dans un hôte individuel, tandis qu’un prédateur consomme souvent plusieurs proies au cours de sa vie.',
          'Les parasites jouent un rôle écologique important. Ils peuvent modifier les effectifs des populations hôtes, influencer les relations entre espèces et participer aux réseaux trophiques. Ils peuvent également affecter la compétition : une espèce fortement parasitée peut perdre un avantage face à une autre. Toutefois, l’effet d’un parasite sur une communauté dépend de sa spécificité, de sa transmission, de la sensibilité des hôtes et des autres interactions présentes. Il ne faut donc pas considérer tous les parasites comme des régulateurs identiques des populations.'
        ],
        example: {
          statement: 'Un organisme vit dans l’intestin d’un hôte, prélève des nutriments et peut réduire l’état de santé de celui-ci sans le tuer immédiatement. Comment qualifier cette relation ?',
          calculation: 'Le parasite obtient un bénéfice (+) et l’hôte subit un effet défavorable (−). La relation correspond à une interaction +/− durable.',
          answer: 'C’est un parasitisme. Le maintien temporaire de l’hôte est fréquent dans ce type de relation, mais certains parasites peuvent aussi provoquer sa mort.'
        },
        exercise: {
          question: 'Quelle différence essentielle sépare un parasite classique d’un parasitoïde ?',
          answer: 'Un parasitoïde se développe aux dépens d’un hôte et entraîne généralement sa mort au terme du développement, alors qu’un parasite classique ne tue généralement pas son hôte de manière systématique ou immédiate.'
        },
        exercises: [
          {
            question: 'Quelle est la différence entre un ectoparasite et un endoparasite ?',
            answer: 'Un ectoparasite vit à la surface de son hôte ; un endoparasite vit à l’intérieur de celui-ci.'
          },
          {
            question: 'Qu’est-ce qu’un hôte intermédiaire ?',
            answer: 'Un organisme qui héberge une phase de développement du parasite, souvent larvaire, sans être nécessairement le lieu de sa reproduction sexuée.'
          },
          {
            question: 'Pourquoi les effets du parasitisme varient-ils selon les situations ?',
            answer: 'Ils dépendent notamment du parasite, de la quantité de parasites, de l’état de l’hôte, de son âge et des conditions du milieu.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Community Ecology', url: 'https://openstax.org/books/biology-2e/pages/45-6-community-ecology' },
          { title: 'Cambridge University Press — Parasites in Ecological Communities', url: 'https://assets.cambridge.org/97805218/89704/excerpt/9780521889704_excerpt.pdf' },
          { title: 'Michigan State University — Species Interactions', url: 'https://openbooks.lib.msu.edu/isb202/chapter/species-interactions/' }
        ]
      }
    },
    {
      id: 'mutualisme-cooperation-especes',
      title: 'Le mutualisme et les associations bénéfiques',
      field: 'Écologie · Mutualisme, symbiose et services écologiques',
      summary: 'Explorer les relations dans lesquelles les deux partenaires bénéficient de l’interaction, leurs formes et leur importance écologique.',
      lesson: {
        sections: [
          'Le mutualisme est une interaction interspécifique dans laquelle les deux partenaires tirent un bénéfice de leur association. Les bénéfices peuvent concerner l’alimentation, la protection, le transport, la reproduction ou l’accès à des ressources. Le mutualisme est noté +/+, mais cette notation ne signifie pas que les bénéfices sont égaux ou constants. Ils peuvent varier selon les individus, les saisons, la disponibilité des ressources et les conditions du milieu.',
          'Certaines relations mutualistes sont étroites et durables, tandis que d’autres sont plus facultatives ou ponctuelles. Dans une relation obligatoire, au moins un partenaire dépend fortement de l’association pour accomplir une fonction essentielle de son cycle de vie. Dans un mutualisme facultatif, les partenaires peuvent généralement vivre sans cette association, même si elle leur procure un avantage. Ces catégories décrivent un continuum plutôt qu’une séparation absolue dans tous les systèmes écologiques.',
          'La pollinisation constitue un exemple important de mutualisme : un animal visite une fleur pour obtenir une ressource, souvent du nectar ou du pollen, et transporte des grains de pollen qui peuvent permettre la fécondation d’autres fleurs compatibles. Les plantes bénéficient du transfert de pollen et les pollinisateurs obtiennent une ressource alimentaire. Toutes les visites florales ne sont toutefois pas mutualistes : certains visiteurs peuvent consommer une ressource sans assurer un transfert efficace de pollen.',
          'Les mycorhizes sont des associations entre des champignons et les racines de nombreuses plantes. Le champignon reçoit des composés carbonés produits par la plante grâce à la photosynthèse ; en retour, il peut améliorer l’acquisition de certains éléments minéraux et de l’eau. L’importance de l’échange varie selon les espèces partenaires et les conditions du sol. Les associations entre termites et micro-organismes digestifs constituent un autre exemple : les micro-organismes contribuent à la dégradation de la cellulose et trouvent dans l’intestin un habitat et des ressources.',
          'Les mutualismes peuvent influencer la biodiversité et le fonctionnement des écosystèmes. La disparition d’un partenaire peut réduire le succès d’un autre, modifier la reproduction des plantes ou perturber certains flux de matière. Ces relations peuvent aussi évoluer : les partenaires peuvent développer des traits qui améliorent l’échange, mais les intérêts des deux espèces ne sont pas nécessairement parfaitement identiques. Les conflits d’intérêts et les comportements opportunistes peuvent limiter les bénéfices réciproques.'
        ],
        example: {
          statement: 'Une abeille récolte du nectar sur une fleur et transporte du pollen vers une autre fleur de la même espèce végétale. Quels bénéfices les deux partenaires peuvent-ils obtenir ?',
          calculation: 'L’abeille obtient une ressource alimentaire (+). La plante peut bénéficier du transfert de pollen et augmenter ses possibilités de reproduction (+). La relation est donc susceptible d’être +/+. ',
          answer: 'Il s’agit d’un mutualisme de pollinisation lorsque le transport de pollen contribue effectivement à la reproduction de la plante. Une simple visite sans pollinisation efficace ne suffit pas à établir ce bénéfice.'
        },
        exercise: {
          question: 'Pourquoi ne peut-on pas affirmer que toute visite d’un insecte sur une fleur est nécessairement mutualiste ?',
          answer: 'Parce que l’insecte peut prélever une ressource sans transporter de pollen utile. Il faut vérifier que l’insecte bénéficie de la visite et que la plante reçoit effectivement un service de pollinisation.'
        },
        exercises: [
          {
            question: 'Quelle notation représente le mutualisme ?',
            answer: '+/+ : les deux partenaires bénéficient de l’interaction.'
          },
          {
            question: 'Que reçoit généralement le champignon dans une association mycorhizienne ?',
            answer: 'Des composés carbonés issus de la photosynthèse de la plante.'
          },
          {
            question: 'Un mutualisme est-il toujours obligatoire pour les deux espèces ?',
            answer: 'Non. Certaines associations sont facultatives ; d’autres sont très étroites et peuvent être indispensables à au moins un partenaire.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Community Ecology', url: 'https://openstax.org/books/biology-2e/pages/45-6-community-ecology' },
          { title: 'OpenStax — The Scope of Ecology', url: 'https://openstax.org/books/biology-2e/pages/44-1-the-scope-of-ecology' },
          { title: 'Oxford University Press — Interactions between Species: Mutualisms and Competition', url: 'https://academic.oup.com/book/44483/chapter-abstract/376657542' }
        ]
      }
    },
    {
      id: 'commensalisme-amensalisme-reseaux-coevolution',
      title: 'Le commensalisme, l’amensalisme et les réseaux de coévolution',
      field: 'Écologie · Interactions neutres, effets indirects et réseaux écologiques',
      summary: 'Distinguer les interactions +/0 et −/0, comprendre les effets indirects et découvrir comment les relations entre espèces peuvent influencer leur évolution.',
      lesson: {
        sections: [
          'Le commensalisme est une interaction dans laquelle une espèce bénéficie de la relation tandis que l’autre ne subit pas d’effet net détectable. Il est noté +/0. Un exemple classique est celui d’oiseaux qui installent leur nid dans un arbre sans effet mesurable important sur celui-ci : l’oiseau bénéficie d’un abri, tandis que l’arbre n’est pas sensiblement affecté dans les conditions considérées. En pratique, démontrer une absence totale d’effet est difficile ; le terme décrit donc souvent l’absence d’effet détectable avec les méthodes utilisées.',
          'L’amensalisme est une interaction notée −/0 : une espèce est défavorisée, tandis que l’autre ne présente pas de bénéfice ou de dommage net détectable. Certaines substances libérées dans l’environnement peuvent inhiber la croissance d’autres organismes. Ce type d’effet est parfois désigné par le terme allélopathie lorsqu’il concerne des substances produites par des plantes ou d’autres organismes qui influencent la germination ou la croissance de voisins. Il faut cependant démontrer l’effet dans les conditions naturelles, car une inhibition observée en laboratoire ne se traduit pas toujours de la même manière dans un écosystème.',
          'Les interactions écologiques ne fonctionnent pas uniquement par paires isolées. Dans un réseau d’interactions, une espèce peut être liée à plusieurs partenaires par la prédation, la compétition, le parasitisme ou le mutualisme. Une modification de l’abondance d’une espèce peut alors avoir des conséquences indirectes sur d’autres espèces. Par exemple, la diminution d’un prédateur peut modifier l’abondance d’un herbivore, qui peut à son tour modifier la végétation. Ce type d’enchaînement montre qu’un effet écologique peut se transmettre à travers plusieurs relations.',
          'La coévolution désigne des changements évolutifs réciproques entre espèces qui exercent l’une sur l’autre des pressions de sélection. Une relation entre plante et herbivore peut, par exemple, favoriser des défenses chez la plante et des adaptations alimentaires chez l’herbivore. Des interactions entre parasites et hôtes peuvent également conduire à des changements réciproques des mécanismes d’infection et de défense. Il ne suffit toutefois pas que deux espèces évoluent dans le même milieu pour parler de coévolution : il faut des éléments montrant que chacune exerce une pression de sélection sur l’autre.',
          'L’étude des réseaux écologiques permet de mieux comprendre la stabilité et les transformations des communautés. La disparition d’une espèce peut entraîner la perte de certaines interactions, mais les conséquences dépendent de la structure du réseau et de l’existence éventuelle de partenaires alternatifs. Les espèces dites clés peuvent avoir un effet disproportionné sur la communauté par rapport à leur abondance, mais cette importance doit être établie dans chaque écosystème. Les réseaux rappellent ainsi que la biodiversité ne se résume pas au nombre d’espèces : elle comprend également les relations qui les relient.'
        ],
        example: {
          statement: 'Une plante libère dans le sol une substance qui réduit la germination d’une autre espèce végétale. Aucune conséquence nette n’est mesurée sur la plante qui libère la substance. Quelle interaction cette situation peut-elle illustrer ?',
          calculation: 'L’espèce qui reçoit la substance est défavorisée (−). L’espèce qui la libère n’a pas d’effet net détecté (0). La combinaison est −/0.',
          answer: 'Cette situation peut illustrer un amensalisme, et plus précisément un effet allélopathique si la substance végétale est bien responsable de l’inhibition. Il faut vérifier que le phénomène se produit aussi dans les conditions naturelles.'
        },
        exercise: {
          question: 'Quelle condition doit être vérifiée pour conclure à une coévolution entre deux espèces ?',
          answer: 'Il faut montrer que les changements évolutifs d’une espèce résultent en partie de pressions de sélection exercées par l’autre, et réciproquement.'
        },
        exercises: [
          {
            question: 'Quelle notation correspond au commensalisme ?',
            answer: '+/0 : une espèce bénéficie de l’interaction et aucun effet net n’est détecté chez l’autre.'
          },
          {
            question: 'Pourquoi les effets indirects sont-ils importants en écologie ?',
            answer: 'Parce qu’une espèce peut influencer une autre par l’intermédiaire d’une troisième espèce ou d’une ressource, ce qui modifie l’ensemble du réseau écologique.'
          },
          {
            question: 'La coévolution signifie-t-elle simplement que deux espèces changent au cours du temps ?',
            answer: 'Non. Elle implique des pressions de sélection réciproques entre les espèces concernées.'
          }
        ],
        sources: [
          { title: 'OpenStax — Concepts of Biology, Community Ecology', url: 'https://openstax.org/books/concepts-biology/pages/19-4-community-ecology' },
          { title: 'Michigan State University — Species Interactions', url: 'https://openbooks.lib.msu.edu/isb202/chapter/species-interactions/' },
          { title: 'Cambridge University Press — Parasites in Ecological Communities', url: 'https://assets.cambridge.org/97805218/89704/excerpt/9780521889704_excerpt.pdf' },
          { title: 'Oxford University Press — Interactions between Species: Mutualisms and Competition', url: 'https://academic.oup.com/book/44483/chapter-abstract/376657542' }
        ]
      }
    }
  ]
},


{
  id: 'biologie-photosynthese',
  sortYear: 'false',
  title: 'La photosynthèse : conversion de l’énergie lumineuse en énergie chimique',
  note: 'Six chapitres approfondis consacrés aux bases de la photosynthèse, aux pigments et aux réactions photochimiques, au cycle de Calvin-Benson, aux facteurs environnementaux, aux adaptations C3/C4/CAM et au rôle écologique et planétaire de ce processus. La description porte principalement sur la photosynthèse oxygénique des plantes, tout en signalant que des bactéries réalisent aussi des formes de photosynthèse différentes.',
  chapters: [
    {
      id: 'fondements-structures-photosynthese',
      title: 'Les fondements de la photosynthèse et les structures impliquées',
      field: 'Biologie végétale · Physiologie végétale et organisation du chloroplaste',
      summary: 'Définir la photosynthèse, identifier les organismes qui la réalisent et localiser les structures cellulaires impliquées dans la conversion de l’énergie lumineuse.',
      lesson: {
        sections: [
          'La photosynthèse est un ensemble de réactions biochimiques par lesquelles des organismes photoautotrophes captent une partie de l’énergie lumineuse et l’utilisent pour fabriquer de la matière organique à partir de matière minérale. Chez les plantes, les algues et les cyanobactéries réalisant une photosynthèse oxygénique, l’eau fournit les électrons nécessaires aux réactions photochimiques et du dioxygène est libéré. Le carbone incorporé dans les molécules organiques provient principalement du dioxyde de carbone. L’énergie lumineuse n’est donc pas transformée directement en glucose en une seule réaction : elle est convertie en énergie chimique intermédiaire, puis utilisée dans des voies de fixation du carbone.',
          'L’équation-bilan simplifiée souvent utilisée pour représenter la photosynthèse oxygénique est : 6 CO2 + 6 H2O + énergie lumineuse → C6H12O6 + 6 O2. Cette écriture résume un bilan global et ne décrit pas les étapes réelles ni tous les intermédiaires. Le premier produit carboné exportable du cycle de Calvin est le glycéraldéhyde-3-phosphate (G3P), qui peut servir à fabriquer différents glucides et d’autres molécules organiques. Le glucose indiqué dans l’équation est une représentation simplifiée du bilan de matière, et non le produit direct d’une réaction unique.',
          'Chez les plantes, la photosynthèse se déroule principalement dans les cellules chlorophylliennes des feuilles, notamment dans le mésophylle. Ces cellules contiennent des chloroplastes, organites entourés d’une enveloppe constituée de deux membranes. À l’intérieur, le stroma est un compartiment aqueux contenant notamment les enzymes du cycle de Calvin-Benson. Il contient aussi un système membranaire formé de thylakoïdes, souvent empilés en grana et reliés par des lamelles. Les réactions photochimiques se déroulent dans les membranes des thylakoïdes, tandis que la fixation du carbone par le cycle de Calvin a lieu dans le stroma.',
          'Les stomates sont des ouvertures microscopiques de l’épiderme des feuilles, bordées par deux cellules de garde. Leur ouverture permet l’entrée du CO2 nécessaire à la fixation du carbone et la sortie de l’O2 produit par les réactions photochimiques. Mais cette ouverture entraîne aussi une perte d’eau sous forme de vapeur, appelée transpiration. La plante doit donc réguler ses échanges gazeux en fonction de l’éclairement, de l’état hydrique, de la concentration en CO2 et des conditions atmosphériques. La photosynthèse est ainsi liée à la physiologie hydrique de la plante.',
          'La photosynthèse oxygénique n’est pas propre aux plantes terrestres. Les algues et les cyanobactéries utilisent également l’eau comme donneur d’électrons et libèrent de l’oxygène. D’autres bactéries réalisent une photosynthèse anoxygénique : elles utilisent d’autres donneurs d’électrons et ne produisent pas nécessairement de dioxygène. Cette distinction est essentielle pour ne pas généraliser le fonctionnement des chloroplastes à tous les organismes photosynthétiques. Les chloroplastes des eucaryotes photosynthétiques ont une origine évolutive liée à l’endosymbiose d’une cyanobactérie ancestrale.'
        ],
        example: {
          statement: 'Dans une cellule de feuille, on observe des chloroplastes contenant des thylakoïdes et un stroma. Où se déroulent les réactions photochimiques et où se déroule le cycle de Calvin-Benson ?',
          calculation: 'On associe chaque étape à son compartiment : les photosystèmes et la chaîne de transport d’électrons sont insérés dans la membrane des thylakoïdes ; les enzymes de fixation du carbone, dont la Rubisco, se trouvent dans le stroma.',
          answer: 'Les réactions photochimiques ont lieu dans la membrane des thylakoïdes. Le cycle de Calvin-Benson se déroule dans le stroma du chloroplaste.'
        },
        exercise: {
          question: 'Pourquoi l’ouverture des stomates favorise-t-elle la photosynthèse tout en pouvant augmenter les pertes en eau ?',
          answer: 'Les stomates permettent au CO2 atmosphérique de diffuser vers les cellules photosynthétiques, mais leur ouverture facilite aussi la diffusion de vapeur d’eau vers l’extérieur. La plante doit donc équilibrer l’approvisionnement en CO2 et la limitation de la transpiration.'
        },
        exercises: [
          {
            question: 'Quel compartiment du chloroplaste contient les enzymes du cycle de Calvin-Benson ?',
            answer: 'Le stroma.'
          },
          {
            question: 'Dans quelle structure membranaire se trouvent les photosystèmes des plantes ?',
            answer: 'Dans la membrane des thylakoïdes.'
          },
          {
            question: 'Quelle molécule fournit les électrons dans la photosynthèse oxygénique ?',
            answer: 'L’eau, dont l’oxydation libère aussi des protons et du dioxygène.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 8.1 Overview of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, 8.2 The Light-Dependent Reactions of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, 8.3 Using Light Energy to Make Organic Molecules', url: 'https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules' }
        ]
      }
    },
    {
      id: 'pigments-photosystem-reactions-lumineuses',
      title: 'Les pigments, les photosystèmes et les réactions photochimiques',
      field: 'Biochimie · Photobiologie et transport photosynthétique des électrons',
      summary: 'Comprendre l’absorption de la lumière par les pigments, le fonctionnement des photosystèmes II et I, la photolyse de l’eau et la production d’ATP et de NADPH.',
      lesson: {
        sections: [
          'La lumière est un rayonnement électromagnétique composé de photons. Les pigments photosynthétiques absorbent certaines longueurs d’onde et participent à la capture de l’énergie lumineuse. La chlorophylle a est le pigment central des centres réactionnels des photosystèmes. La chlorophylle b et les caroténoïdes élargissent les domaines de lumière absorbés par les complexes collecteurs. Les pigments n’absorbent pas toutes les longueurs d’onde avec la même efficacité : la lumière verte est moins absorbée par les chlorophylles et une partie est réfléchie ou transmise, ce qui contribue à l’aspect vert de nombreuses feuilles.',
          'Dans les membranes thylakoïdiennes, les pigments sont organisés avec des protéines au sein de complexes antennes et de centres réactionnels. Les pigments antennes absorbent les photons et transfèrent l’énergie d’excitation vers le centre réactionnel. Cette énergie permet à une molécule de chlorophylle particulière de céder un électron à un accepteur primaire. Il s’agit d’un transfert d’énergie entre pigments, puis d’un transfert d’électron dans le centre réactionnel : ces deux phénomènes doivent être distingués.',
          'Dans le schéma du transport non cyclique des électrons, le photosystème II intervient avant le photosystème I. Le photosystème II, dont le centre réactionnel est appelé P680, utilise l’énergie lumineuse pour arracher des électrons à l’eau grâce à un complexe d’oxydation de l’eau. Cette réaction libère des électrons, des protons et du dioxygène. Les électrons passent ensuite par une chaîne de transport, notamment le complexe cytochrome b6f, qui contribue à établir un gradient électrochimique de protons à travers la membrane thylakoïdienne.',
          'Le gradient de protons constitue une réserve d’énergie potentielle. Lorsque les protons retournent vers le stroma en traversant l’ATP synthase, l’énergie de ce flux permet la synthèse d’ATP à partir d’ADP et de phosphate inorganique. Ce mécanisme est une photophosphorylation. Les électrons atteignent ensuite le photosystème I, dont le centre réactionnel est appelé P700. Une nouvelle absorption de lumière les porte à un niveau énergétique élevé ; ils sont transférés à la ferrédoxine, puis utilisés par la ferrédoxine-NADP+ réductase pour réduire le NADP+ en NADPH.',
          'Le transport non cyclique fournit donc de l’ATP et du NADPH, utilisés ensuite dans le cycle de Calvin-Benson. Il existe également un transport cyclique autour du photosystème I : les électrons excités retournent vers la chaîne de transport au lieu de réduire le NADP+. Cette voie augmente la production relative d’ATP sans produire directement de NADPH ni de dioxygène. Elle aide la plante à ajuster l’approvisionnement en ATP et en pouvoir réducteur aux besoins métaboliques du chloroplaste.'
        ],
        example: {
          statement: 'Une expérience montre que l’éclairement de thylakoïdes isolés permet la formation d’ATP et de NADPH en présence des composants nécessaires. Quel est le rôle du gradient de protons dans cette production ?',
          calculation: 'Les transferts d’électrons et l’oxydation de l’eau contribuent à l’accumulation de protons dans le lumen thylakoïdien. Le retour des protons vers le stroma à travers l’ATP synthase fournit l’énergie nécessaire à la phosphorylation de l’ADP.',
          answer: 'Le gradient électrochimique de protons alimente l’ATP synthase et permet la production d’ATP. Le NADPH est formé séparément par réduction du NADP+ grâce aux électrons issus du photosystème I.'
        },
        exercise: {
          question: 'Pourquoi le transport cyclique des électrons autour du photosystème I ne libère-t-il pas directement de dioxygène ?',
          answer: 'Parce qu’il recycle les électrons vers la chaîne de transport sans utiliser la photolyse de l’eau au photosystème II. Il contribue surtout à produire un supplément d’ATP.'
        },
        exercises: [
          {
            question: 'Quel pigment occupe une place centrale dans les centres réactionnels des photosystèmes des plantes ?',
            answer: 'La chlorophylle a.'
          },
          {
            question: 'Quel photosystème oxyde l’eau dans la photosynthèse oxygénique ?',
            answer: 'Le photosystème II.'
          },
          {
            question: 'Quel est le rôle principal de l’ATP synthase dans les thylakoïdes ?',
            answer: 'Elle utilise l’énergie du retour des protons selon leur gradient électrochimique pour synthétiser de l’ATP à partir d’ADP et de phosphate inorganique.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 8.2 The Light-Dependent Reactions of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis' },
          { title: 'OpenStax — Biology for AP Courses, 8.2 The Light-Dependent Reaction of Photosynthesis', url: 'https://openstax.org/books/biology-ap-courses/pages/8-2-the-light-dependent-reaction-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, Chapter 8 Summary', url: 'https://openstax.org/books/biology-2e/pages/8-chapter-summary' }
        ]
      }
    },
    {
      id: 'cycle-calvin-benson-fixation-carbone',
      title: 'Le cycle de Calvin-Benson et la fixation du carbone',
      field: 'Biochimie végétale · Assimilation du CO2 et métabolisme carboné',
      summary: 'Étudier les trois phases du cycle de Calvin-Benson, le rôle de la Rubisco, l’utilisation de l’ATP et du NADPH et la production de trioses phosphates.',
      lesson: {
        sections: [
          'Le cycle de Calvin-Benson est une voie métabolique qui permet d’incorporer le carbone du CO2 dans des molécules organiques. Chez les plantes, il se déroule dans le stroma des chloroplastes. Il utilise l’ATP et le NADPH produits par les réactions photochimiques pour fournir l’énergie et le pouvoir réducteur nécessaires à la réduction du carbone. On parle parfois de réactions indépendantes de la lumière parce que les photons ne sont pas des réactifs directs de chaque étape du cycle. Cette expression ne signifie pas que le cycle fonctionne normalement sans les produits des réactions lumineuses : plusieurs de ses enzymes sont aussi régulées par l’éclairement.',
          'La première phase est la fixation du carbone. L’enzyme ribulose-1,5-bisphosphate carboxylase/oxygénase, appelée Rubisco, catalyse l’ajout du CO2 sur le ribulose-1,5-bisphosphate (RuBP), un composé à cinq carbones. Le produit intermédiaire à six carbones est instable et se scinde en deux molécules de 3-phosphoglycérate (3-PGA), chacune contenant trois carbones. La Rubisco est une enzyme très abondante dans la biosphère, mais sa vitesse catalytique et sa capacité à distinguer CO2 et O2 présentent des limites qui influencent le rendement de la photosynthèse.',
          'La deuxième phase est la réduction. Les molécules de 3-PGA sont phosphorylées grâce à l’ATP, puis réduites grâce au NADPH pour former du glycéraldéhyde-3-phosphate (G3P), un triose phosphate. Une partie du G3P peut quitter le cycle et servir de précurseur à la synthèse des glucides, des acides organiques et d’autres composés carbonés. Il est important de noter que le cycle ne produit pas directement une molécule de glucose à chaque tour : la formation d’un hexose nécessite l’assemblage de précurseurs carbonés issus de plusieurs tours.',
          'La troisième phase est la régénération du RuBP. La majeure partie du G3P produit reste dans le cycle et est réorganisée par plusieurs réactions enzymatiques. Cette réorganisation consomme de l’ATP et permet de reformer le RuBP, accepteur du CO2, afin que le cycle puisse recommencer. Pour un bilan net de trois molécules de CO2 fixées, le cycle consomme neuf ATP et six NADPH et permet la sortie nette d’un G3P à trois carbones. Deux G3P nets sont nécessaires pour fournir le squelette carboné d’un hexose.',
          'Le cycle de Calvin-Benson relie donc les réactions photochimiques à la synthèse de matière organique. L’ATP apporte de l’énergie chimique et le NADPH fournit des électrons pour les réactions de réduction. Les molécules produites ne sont pas toutes transformées en amidon ou en saccharose de la même manière : leur devenir dépend du type de cellule, de l’état physiologique de la plante et de ses besoins. Une partie du carbone est utilisée pour la croissance et la respiration, une autre peut être stockée temporairement ou transportée vers d’autres organes.'
        ],
        example: {
          statement: 'Pour un bilan net de trois molécules de CO2 fixées par le cycle de Calvin-Benson, combien d’ATP et de NADPH sont consommés et quel produit carboné net est obtenu ?',
          calculation: 'Bilan classique du cycle pour trois CO2 : 9 ATP et 6 NADPH consommés. Une molécule de G3P à trois carbones sort avec un bilan net, tandis que les autres intermédiaires servent à régénérer le RuBP.',
          answer: 'Le cycle consomme 9 ATP et 6 NADPH et fournit un G3P net à trois carbones. Il faut deux G3P nets pour disposer du carbone nécessaire à la synthèse d’un hexose.'
        },
        exercise: {
          question: 'Pourquoi le cycle de Calvin-Benson ne peut-il pas être décrit comme une fabrication directe de glucose à partir de CO2 en une seule étape ?',
          answer: 'Il comporte plusieurs réactions enzymatiques organisées en trois phases : fixation du CO2, réduction du 3-PGA et régénération du RuBP. Le produit net exporté est un triose phosphate, le G3P, qui sert ensuite de précurseur à la synthèse des glucides.'
        },
        exercises: [
          {
            question: 'Quelle enzyme catalyse la fixation du CO2 sur le RuBP ?',
            answer: 'La Rubisco.'
          },
          {
            question: 'Quel est le premier produit stable formé après la carboxylation du RuBP chez les plantes C3 ?',
            answer: 'Deux molécules de 3-phosphoglycérate (3-PGA), chacune à trois carbones.'
          },
          {
            question: 'Quel est le bilan net classique pour trois CO2 fixés ?',
            answer: 'La consommation de 9 ATP et de 6 NADPH, avec la production nette d’un G3P à trois carbones.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 8.3 Using Light Energy to Make Organic Molecules', url: 'https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules' },
          { title: 'OpenStax — Concepts of Biology, 5.3 The Calvin Cycle', url: 'https://openstax.org/books/concepts-biology/pages/5-3-the-calvin-cycle' },
          { title: 'OpenStax — Biology for AP Courses, 8.3 Using Light to Make Organic Molecules', url: 'https://openstax.org/books/biology-ap-courses/pages/8-3-using-light-to-make-organic-molecules' }
        ]
      }
    },
    {
      id: 'facteurs-influencant-photosynthese',
      title: 'Les facteurs qui influencent l’intensité de la photosynthèse',
      field: 'Physiologie végétale · Écophysiologie et facteurs limitants',
      summary: 'Analyser les effets de l’éclairement, du CO2, de la température, de l’eau et des éléments minéraux sur la vitesse de photosynthèse.',
      lesson: {
        sections: [
          'L’intensité photosynthétique correspond à une vitesse de fonctionnement que l’on peut estimer, par exemple, par l’absorption nette de CO2 ou le dégagement net d’O2 dans des conditions expérimentales définies. Cette mesure dépend de nombreux paramètres et ne doit pas être confondue avec la quantité totale de matière organique accumulée sur toute la vie de la plante. Les résultats peuvent aussi varier selon que l’on mesure une feuille isolée, une plante entière ou un écosystème.',
          'L’éclairement influence la vitesse des réactions photochimiques. Lorsque l’intensité lumineuse est faible, une augmentation de la lumière disponible peut augmenter la photosynthèse. Au-delà d’un certain niveau, la vitesse atteint une saturation : d’autres facteurs deviennent limitants et un supplément de lumière n’augmente plus nécessairement la fixation du carbone. Une lumière excessivement intense peut provoquer une photoinhibition, c’est-à-dire une diminution de l’efficacité photosynthétique liée à un excès d’énergie absorbée et à des dommages ou mécanismes de régulation des photosystèmes.',
          'La concentration en CO2 influence la disponibilité du substrat utilisé par la Rubisco. Chez de nombreuses plantes C3, une augmentation du CO2 peut stimuler l’assimilation du carbone lorsque ce facteur est limitant et peut réduire la photorespiration relative. La réponse dépend cependant de la lumière, de la température, de l’eau, des nutriments et de l’acclimatation de la plante. Une hausse de CO2 ne garantit donc pas une augmentation illimitée de la croissance : d’autres ressources ou contraintes peuvent devenir limitantes.',
          'La température agit sur les vitesses des réactions enzymatiques, la fluidité des membranes et les échanges gazeux. Chaque espèce et chaque type de plante présentent une plage thermique dans laquelle la photosynthèse fonctionne efficacement. À température trop élevée, la fermeture des stomates pour limiter les pertes d’eau peut réduire l’entrée du CO2. Chez les plantes C3, une température élevée peut aussi accroître la compétition de l’oxygène avec le CO2 au niveau de la Rubisco et favoriser la photorespiration. Les effets précis dépendent de l’espèce et de son acclimatation.',
          'L’eau est indispensable au fonctionnement des cellules et constitue le donneur d’électrons de la photosynthèse oxygénique. Un déficit hydrique peut entraîner la fermeture des stomates, limiter l’entrée du CO2 et ralentir la fixation du carbone. Les éléments minéraux sont également nécessaires : l’azote intervient dans la constitution des protéines et de la chlorophylle, le magnésium entre dans la structure de la chlorophylle et le phosphore participe notamment au métabolisme de l’ATP. Une carence peut donc limiter la capacité photosynthétique, même si la lumière et le CO2 sont disponibles.'
        ],
        example: {
          statement: 'Une feuille reçoit de plus en plus de lumière, mais sa vitesse d’assimilation du CO2 finit par ne plus augmenter. Comment interpréter ce résultat ?',
          calculation: 'Au début, la lumière peut être le facteur limitant. Lorsque la courbe atteint un plateau, un autre facteur, comme la disponibilité en CO2, la capacité enzymatique ou la température, peut limiter davantage le processus.',
          answer: 'La photosynthèse a atteint une zone de saturation lumineuse dans les conditions de l’expérience. Augmenter encore l’éclairement ne suffit plus à augmenter la vitesse mesurée.'
        },
        exercise: {
          question: 'Pourquoi une augmentation de la concentration en CO2 ne provoque-t-elle pas nécessairement une hausse continue de la croissance végétale ?',
          answer: 'Parce que la croissance dépend aussi de la lumière, de l’eau, de la température, des éléments minéraux et de la capacité de la plante à utiliser les produits de la photosynthèse. Un autre facteur peut devenir limitant.'
        },
        exercises: [
          {
            question: 'Que signifie la saturation lumineuse ?',
            answer: 'C’est une situation dans laquelle une augmentation supplémentaire de l’éclairement n’augmente plus significativement la vitesse photosynthétique dans les conditions étudiées.'
          },
          {
            question: 'Comment un déficit hydrique peut-il diminuer l’assimilation du CO2 ?',
            answer: 'Il peut provoquer la fermeture des stomates, ce qui réduit la diffusion du CO2 vers les tissus photosynthétiques.'
          },
          {
            question: 'Pourquoi la température modifie-t-elle la photosynthèse ?',
            answer: 'Elle influence les réactions enzymatiques, les membranes, les échanges gazeux et, selon les conditions, la photorespiration.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 8.2 The Light-Dependent Reactions of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, 8.3 Using Light Energy to Make Organic Molecules', url: 'https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules' },
          { title: 'OpenStax — Biology 2e, 44.1 The Scope of Ecology', url: 'https://openstax.org/books/biology-2e/pages/44-1-the-scope-of-ecology' }
        ]
      }
    },
    {
      id: 'adaptations-c3-c4-cam-photorespiration',
      title: 'Les plantes C3, C4 et CAM : adaptations et photorespiration',
      field: 'Physiologie végétale · Métabolisme photosynthétique et adaptation aux milieux',
      summary: 'Comparer les voies C3, C4 et CAM, comprendre la photorespiration et expliquer les adaptations qui améliorent l’utilisation du CO2 dans différents environnements.',
      lesson: {
        sections: [
          'La majorité des plantes utilisent le cycle de Calvin-Benson avec une première fixation du CO2 par la Rubisco : on les appelle plantes C3 parce que le premier produit stable de cette fixation est le 3-phosphoglycérate, qui possède trois carbones. Cette voie fonctionne efficacement dans de nombreuses conditions, mais la Rubisco peut aussi réagir avec l’O2. Cette activité oxygénase déclenche la photorespiration, une voie de récupération métabolique qui consomme de l’énergie et libère du CO2, réduisant ainsi le gain net de carbone dans certaines conditions.',
          'La photorespiration devient particulièrement importante lorsque la température est élevée et que les stomates se ferment partiellement en réponse au manque d’eau. La concentration interne en CO2 diminue alors relativement à celle de l’O2, ce qui augmente la probabilité que la Rubisco fixe l’oxygène plutôt que le dioxyde de carbone. La photorespiration n’est pas simplement une respiration mitochondriale : elle implique une coopération métabolique entre chloroplastes, peroxysomes et mitochondries. Elle récupère une partie du carbone issu de la réaction oxygénase de la Rubisco, mais avec un coût énergétique et une perte nette de CO2.',
          'Les plantes C4 possèdent un mécanisme de concentration du CO2 qui réduit la photorespiration. Dans les cellules du mésophylle, une enzyme appelée phosphoénolpyruvate carboxylase (PEP-carboxylase) fixe d’abord le bicarbonate sur le phosphoénolpyruvate, formant un composé à quatre carbones. Ces composés sont ensuite transportés vers les cellules de la gaine périvasculaire, où ils sont décarboxylés. Le CO2 libéré est alors concentré près de la Rubisco et entre dans le cycle de Calvin-Benson. Cette séparation spatiale entre fixation initiale et cycle de Calvin nécessite de l’énergie supplémentaire, mais peut être avantageuse dans les environnements chauds et fortement éclairés.',
          'Les plantes CAM, ou plantes à métabolisme acide crassulacéen, séparent principalement les étapes de fixation du carbone dans le temps. Leurs stomates s’ouvrent généralement la nuit, lorsque la température et le déficit de pression de vapeur sont souvent plus faibles. Le CO2 est fixé par la PEP-carboxylase et stocké temporairement sous forme d’acides organiques, notamment de malate, dans les vacuoles. Pendant le jour, les stomates sont souvent fermés pour limiter les pertes d’eau ; le malate est décarboxylé et libère du CO2 qui alimente le cycle de Calvin. Cette stratégie est fréquente chez des plantes adaptées à des milieux secs, mais elle n’est pas limitée à un seul type d’habitat.',
          'Les voies C3, C4 et CAM représentent différentes solutions physiologiques à des contraintes environnementales. Les plantes C4 sont souvent avantagées dans des conditions chaudes et lumineuses où la photorespiration des C3 est élevée. Les plantes CAM économisent particulièrement l’eau grâce à l’ouverture nocturne des stomates, mais leur croissance peut être lente selon les espèces et les conditions. Ces voies ne sont pas des degrés de perfection : chacune présente des coûts et des avantages. Leur répartition dépend de l’histoire évolutive, du climat, de l’eau disponible, de la lumière et des caractéristiques propres à chaque espèce.'
        ],
        example: {
          statement: 'Une plante de milieu aride ouvre principalement ses stomates la nuit, stocke du carbone sous forme de malate, puis utilise ce carbone pendant la journée lorsque ses stomates sont fermés. De quelle voie photosynthétique s’agit-il ?',
          calculation: 'La fixation initiale nocturne et l’utilisation diurne du CO2 stocké indiquent une séparation temporelle des étapes. C’est la caractéristique centrale du métabolisme CAM.',
          answer: 'Il s’agit d’une plante CAM. Cette stratégie permet de limiter les pertes d’eau en décalant principalement l’entrée du CO2 vers la nuit.'
        },
        exercise: {
          question: 'Quelle différence fondamentale distingue la séparation du carbone chez les plantes C4 et chez les plantes CAM ?',
          answer: 'Les plantes C4 séparent spatialement la fixation initiale du CO2 et le cycle de Calvin, principalement entre mésophylle et gaine périvasculaire. Les plantes CAM séparent principalement ces étapes dans le temps, avec une fixation nocturne et une utilisation diurne du CO2 stocké.'
        },
        exercises: [
          {
            question: 'Pourquoi les plantes C3 peuvent-elles subir une photorespiration importante par temps chaud ?',
            answer: 'La fermeture partielle des stomates peut diminuer le CO2 interne et la température favorise, dans certaines conditions, l’activité oxygénase de la Rubisco par rapport à son activité carboxylase.'
          },
          {
            question: 'Quelle enzyme réalise la fixation initiale du carbone chez les plantes C4 et CAM ?',
            answer: 'La phosphoénolpyruvate carboxylase (PEP-carboxylase), avant l’intervention de la Rubisco dans le cycle de Calvin.'
          },
          {
            question: 'Quelle stratégie caractérise les plantes CAM ?',
            answer: 'Elles ouvrent généralement leurs stomates la nuit, fixent le carbone sous forme d’acides organiques et utilisent le CO2 libéré pendant la journée.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 8.3 Using Light Energy to Make Organic Molecules', url: 'https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules' },
          { title: 'OpenStax — Biology 2e, Chapter 8 Summary', url: 'https://openstax.org/books/biology-2e/pages/8-chapter-summary' },
          { title: 'OpenStax — Biology for AP Courses, 8.3 Using Light to Make Organic Molecules', url: 'https://openstax.org/books/biology-ap-courses/pages/8-3-using-light-to-make-organic-molecules' }
        ]
      }
    },
    {
      id: 'photosynthese-ecosystemes-cycle-carbone',
      title: 'La photosynthèse dans les écosystèmes et le cycle du carbone',
      field: 'Écologie · Production primaire, cycles biogéochimiques et biosphère',
      summary: 'Relier la photosynthèse à la production primaire, aux réseaux trophiques, au cycle du carbone, à l’oxygénation de l’atmosphère et aux méthodes de mesure.',
      lesson: {
        sections: [
          'La photosynthèse constitue la base énergétique de la plupart des écosystèmes. Les organismes photosynthétiques convertissent une partie de l’énergie lumineuse en énergie chimique stockée dans la matière organique. Cette production est appelée production primaire. La production primaire brute correspond à la quantité totale de carbone fixé par photosynthèse sur une période donnée. Une partie de cette matière organique est utilisée par les organismes photosynthétiques eux-mêmes pour leur respiration ; la production primaire nette correspond à la production brute moins cette respiration autotrophe. Elle représente la matière organique qui peut contribuer à la croissance, au stockage et à l’alimentation des autres organismes.',
          'Les végétaux, les algues et les cyanobactéries constituent des producteurs primaires dans de nombreux réseaux trophiques. Les herbivores consomment une partie de leur biomasse, puis les consommateurs secondaires et les décomposeurs utilisent la matière organique issue des autres niveaux trophiques. Toute la production végétale n’est pas consommée directement : une fraction devient de la litière ou de la matière organique morte, ensuite transformée par les décomposeurs. La photosynthèse contribue ainsi au transfert de matière et d’énergie dans les écosystèmes, mais l’énergie disponible diminue généralement d’un niveau trophique au suivant en raison des pertes métaboliques et thermiques.',
          'À l’échelle planétaire, la photosynthèse participe au cycle du carbone en transférant du carbone inorganique, notamment le CO2, vers la matière organique. Ce carbone peut être consommé, respiré, décomposé, stocké dans les sols ou transporté vers les milieux aquatiques. Une partie peut être enfouie sur de longues périodes géologiques. La photosynthèse et la respiration sont donc deux processus complémentaires du cycle du carbone : la première fixe du carbone dans la matière organique, tandis que la respiration et la décomposition en restituent une partie sous forme de CO2.',
          'Le dioxygène libéré par la photosynthèse oxygénique provient de l’oxydation de l’eau au photosystème II. L’accumulation d’oxygène dans l’atmosphère terrestre est liée à l’évolution ancienne de la photosynthèse oxygénique chez les microorganismes, notamment les cyanobactéries, puis à l’histoire des échanges entre biosphère, océans, roches et atmosphère. Il serait donc incorrect d’attribuer l’oxygène atmosphérique uniquement aux forêts actuelles ou de considérer que toute la production d’oxygène photosynthétique s’accumule : une grande partie est consommée par la respiration et les processus d’oxydation.',
          'La photosynthèse peut être étudiée par différentes méthodes. À l’échelle d’une feuille, les échanges gazeux permettent de mesurer l’absorption de CO2 ou le dégagement net d’O2 sous des conditions contrôlées. La fluorescence de la chlorophylle renseigne sur certains aspects du fonctionnement des photosystèmes, sans mesurer à elle seule toute la production de matière organique. À l’échelle des écosystèmes, les mesures de flux de CO2, les observations satellitaires et les estimations de biomasse permettent d’étudier la production primaire. Chaque méthode possède ses limites et doit être interprétée selon l’échelle spatiale, temporelle et biologique étudiée.'
        ],
        example: {
          statement: 'Une prairie fixe 1 000 unités de carbone par photosynthèse pendant une période. Les organismes photosynthétiques en utilisent 400 unités pour leur respiration. Quelle est la production primaire nette sur cette période ?',
          calculation: 'Production primaire nette = production primaire brute − respiration autotrophe. Donc 1 000 − 400 = 600 unités de carbone.',
          answer: 'La production primaire nette est de 600 unités de carbone pour la période considérée. Cette quantité peut contribuer à la croissance, au stockage et à l’alimentation des autres organismes.'
        },
        exercise: {
          question: 'Pourquoi la production primaire nette est-elle inférieure à la production primaire brute ?',
          answer: 'Parce qu’une partie du carbone fixé par photosynthèse est utilisée par les organismes producteurs pour leur propre respiration. La production nette correspond au bilan après cette dépense.'
        },
        exercises: [
          {
            question: 'Que représente la production primaire brute ?',
            answer: 'La quantité totale de matière organique ou de carbone fixée par les producteurs primaires grâce à la photosynthèse pendant une période donnée.'
          },
          {
            question: 'D’où provient le dioxygène libéré par la photosynthèse oxygénique ?',
            answer: 'De l’oxydation de l’eau pendant les réactions photochimiques au photosystème II.'
          },
          {
            question: 'Pourquoi toute la matière organique produite par les plantes n’est-elle pas directement consommée par les herbivores ?',
            answer: 'Une partie reste dans les tissus, est stockée, tombe sous forme de litière ou rejoint la matière organique morte qui sera transformée par les décomposeurs.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, 44.1 The Scope of Ecology', url: 'https://openstax.org/books/biology-2e/pages/44-1-the-scope-of-ecology' },
          { title: 'OpenStax — Biology 2e, 8.1 Overview of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis' },
          { title: 'OpenStax — Biology 2e, 8.3 Using Light Energy to Make Organic Molecules', url: 'https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules' }
        ]
      }
    }
  ]
},


{
  id: 'theorie-evolution',
  sortYear: 'false',
  title: 'Théorie de l’évolution : mécanismes, diversité et histoire du vivant',
  note: 'Six chapitres approfondis pour comprendre la construction historique de la théorie de l’évolution, les sources de variation héréditaire, la sélection naturelle et sexuelle, les autres mécanismes évolutifs, la formation des espèces et les preuves de la parenté du vivant. L’évolution est étudiée à l’échelle des populations au fil des générations : elle n’implique ni progrès obligatoire, ni transformation orientée vers un objectif.',
  chapters: [
    {
      id: 'fondements-histoire-theorie-evolution',
      title: 'Les fondements historiques et scientifiques de la théorie de l’évolution',
      field: 'Biologie évolutive · Histoire des sciences et concepts fondamentaux',
      summary: 'Retracer la construction de la théorie de l’évolution, distinguer les idées historiques des connaissances actuelles et définir l’évolution comme un changement héréditaire des populations.',
      lesson: {
        sections: [
          'L’évolution biologique désigne les changements des caractéristiques héréditaires des populations au cours des générations. En génétique des populations, elle peut être définie précisément comme une modification des fréquences alléliques au fil du temps. Elle ne signifie pas qu’un individu se transforme génétiquement au cours de sa vie, ni qu’une espèce cherche consciemment à s’améliorer. Les variations observées entre générations résultent de mécanismes comme la mutation, la sélection naturelle, la dérive génétique et le flux de gènes.',
          'Avant le XIXe siècle, plusieurs naturalistes avaient proposé que les espèces puissent changer au cours du temps, mais les mécanismes de ces transformations restaient débattus. Jean-Baptiste de Lamarck défendit une théorie transformiste dans laquelle l’usage et le non-usage des organes ainsi que l’hérédité des caractères acquis jouaient un rôle central. Cette explication historique n’est pas celle retenue par la biologie évolutive moderne. Elle demeure importante pour comprendre l’histoire des idées, mais ne doit pas être confondue avec les mécanismes génétiques actuellement établis.',
          'Au XIXe siècle, Charles Darwin et Alfred Russel Wallace développèrent indépendamment une explication de l’évolution par sélection naturelle. Leurs travaux furent présentés conjointement en 1858 à la Linnean Society de Londres. En 1859, Darwin publia On the Origin of Species, ouvrage qui argumentait notamment que les espèces descendent d’ancêtres communs et que la sélection naturelle peut conduire à l’adaptation. Darwin ne connaissait pas les mécanismes moléculaires de l’hérédité ; ceux-ci furent clarifiés plus tard grâce aux travaux de la génétique.',
          'Au début du XXe siècle, la redécouverte des travaux de Gregor Mendel et le développement de la génétique des populations permirent de relier l’hérédité particulaire aux changements évolutifs. La synthèse moderne, construite principalement entre les années 1930 et 1940, associa la sélection naturelle darwinienne, la génétique mendélienne et l’étude mathématique des populations. Les développements ultérieurs de la biologie moléculaire, de la génomique, de la paléontologie et de l’écologie ont enrichi ce cadre sans abandonner son principe central : les populations changent au fil des générations.',
          'Une théorie scientifique n’est pas une simple supposition : c’est un cadre explicatif construit à partir d’observations, d’expériences et de prédictions confrontées aux données. La théorie de l’évolution explique à la fois l’unité du vivant par la descendance avec modification et sa diversité par la divergence des lignées. Elle ne prétend pas que chaque détail de chaque histoire évolutive est déjà connu. Les relations précises entre certaines lignées peuvent rester discutées, car les données fossiles et génétiques sont incomplètes ou parfois difficiles à interpréter.'
        ],
        example: {
          statement: 'Dans une population de coléoptères, la fréquence d’un allèle passe de 0,20 à 0,35 en plusieurs générations. Peut-on parler d’évolution au sens de la génétique des populations ?',
          calculation: 'On compare la fréquence du même allèle à deux moments : 0,35 − 0,20 = 0,15. La fréquence a donc augmenté de 0,15, soit 15 points de pourcentage.',
          answer: 'Oui. Une modification de la fréquence allélique dans une population au fil des générations constitue une évolution au sens de la génétique des populations. Cette observation seule ne permet toutefois pas d’identifier le mécanisme responsable.'
        },
        exercise: {
          question: 'Pourquoi est-il incorrect de dire qu’un individu évolue génétiquement parce qu’il en a besoin ?',
          answer: 'L’évolution concerne les populations sur plusieurs générations. Les mécanismes évolutifs modifient la fréquence des variantes héréditaires ; les besoins d’un individu ne provoquent pas directement l’apparition ciblée d’une mutation utile.'
        },
        exercises: [
          {
            question: 'Quelle définition de l’évolution est utilisée en génétique des populations ?',
            answer: 'Un changement des fréquences alléliques dans une population au fil des générations.'
          },
          {
            question: 'Qui a présenté avec Darwin des travaux sur la sélection naturelle en 1858 ?',
            answer: 'Alfred Russel Wallace.'
          },
          {
            question: 'Quel apport majeur la génétique mendélienne a-t-elle fourni à la théorie de l’évolution ?',
            answer: 'Elle a permis de comprendre comment les caractères héréditaires sont transmis sous forme de facteurs génétiques et comment la variation peut être maintenue entre générations.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' },
          { title: 'OpenStax — Biology 2e, Population Evolution', url: 'https://openstax.org/books/biology-2e/pages/19-1-population-evolution' },
          { title: 'Natural History Museum — What is natural selection?', url: 'https://www.nhm.ac.uk/discover/what-is-natural-selection.html' }
        ]
      }
    },
    {
      id: 'variation-genetique-mutations-heredite',
      title: 'La variation génétique, les mutations et l’hérédité',
      field: 'Génétique · Génétique des populations et transmission héréditaire',
      summary: 'Comprendre l’origine de la diversité génétique, les mutations, la recombinaison et la transmission des variantes héréditaires.',
      lesson: {
        sections: [
          'La variation génétique désigne les différences de séquences d’ADN et de combinaisons d’allèles présentes entre les individus d’une population. Elle constitue une matière première de l’évolution, car les mécanismes évolutifs peuvent modifier la fréquence des variantes héréditaires. Une différence de phénotype n’est cependant pas toujours génétique : l’alimentation, la température, l’activité ou d’autres facteurs environnementaux peuvent modifier les caractères observables sans changer la séquence d’ADN transmise aux descendants.',
          'Une mutation est une modification de la séquence de l’ADN. Elle peut résulter d’erreurs de réplication ou de dommages à l’ADN, parfois liés à des agents mutagènes. Les conséquences varient : certaines mutations n’ont pas d’effet détectable sur le phénotype ou la valeur sélective, d’autres sont défavorables dans un environnement donné, et certaines peuvent être avantageuses. Une mutation n’apparaît pas parce que l’organisme en a besoin ; son effet dépend du contexte génétique et environnemental dans lequel elle se trouve.',
          'Pour être transmise à la génération suivante chez les organismes à reproduction sexuée, une mutation doit généralement toucher la lignée germinale, c’est-à-dire les cellules à l’origine des gamètes. Une mutation limitée à une cellule somatique peut se transmettre aux cellules filles de cette cellule dans l’organisme, mais elle n’est normalement pas héritée par la descendance. Chez les organismes unicellulaires qui se reproduisent par division, les mutations peuvent être transmises directement aux cellules descendantes.',
          'La reproduction sexuée crée de nouvelles combinaisons d’allèles grâce à la méiose et à la fécondation. Le brassage interchromosomique répartit aléatoirement les chromosomes homologues dans les gamètes, tandis que le crossing-over échange des segments entre chromosomes homologues. Ces mécanismes recombinent des variantes existantes, mais ne créent pas à eux seuls de nouveaux allèles. La mutation reste la source ultime de nouveaux allèles dans les populations, alors que la recombinaison renouvelle les combinaisons génétiques.',
          'La diversité génétique peut être décrite par le nombre d’allèles, leur fréquence, l’hétérozygotie ou la diversité des séquences. Elle est importante pour le potentiel évolutif d’une population, mais une diversité élevée ne garantit pas automatiquement sa survie. Les effets d’une variante dépendent du milieu et des autres gènes présents. La sélection, la dérive, les migrations et les systèmes de reproduction peuvent faire varier cette diversité au cours du temps.'
        ],
        example: {
          statement: 'Dans une population diploïde, un gène possède deux allèles, A et a. Un individu a le génotype Aa. Quels allèles peut-il transmettre à ses gamètes pour ce gène ?',
          calculation: 'Lors de la méiose, les deux copies homologues se séparent. Chaque gamète reçoit une seule copie du gène : A ou a. Dans le cas d’une ségrégation mendélienne sans distorsion, chaque type est produit avec une probabilité de 0,5.',
          answer: 'L’individu peut produire des gamètes portant A ou des gamètes portant a, avec une probabilité théorique de 0,5 pour chacun dans les conditions indiquées.'
        },
        exercise: {
          question: 'Quelle différence faut-il faire entre mutation et recombinaison génétique ?',
          answer: 'Une mutation modifie la séquence d’ADN et peut créer un nouvel allèle. La recombinaison réorganise des allèles déjà présents en nouvelles combinaisons.'
        },
        exercises: [
          {
            question: 'Une mutation est-elle nécessairement défavorable ?',
            answer: 'Non. Son effet peut être neutre, défavorable ou avantageux selon le contexte.'
          },
          {
            question: 'Quelle partie du génome doit généralement être touchée pour qu’une mutation soit transmise à la descendance d’un animal ou d’une plante à reproduction sexuée ?',
            answer: 'La lignée germinale, qui produit les gamètes.'
          },
          {
            question: 'Le crossing-over crée-t-il généralement de nouveaux allèles ?',
            answer: 'Non. Il échange des segments entre chromosomes homologues et crée de nouvelles combinaisons d’allèles existants.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Population Genetics', url: 'https://openstax.org/books/biology-2e/pages/19-2-population-genetics' },
          { title: 'OpenStax — Biology 2e, The Process of Meiosis', url: 'https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis' },
          { title: 'OpenStax — Biology 2e, Population Evolution', url: 'https://openstax.org/books/biology-2e/pages/19-1-population-evolution' }
        ]
      }
    },
    {
      id: 'selection-naturelle-selection-sexuelle',
      title: 'La sélection naturelle et la sélection sexuelle',
      field: 'Biologie évolutive · Adaptation et succès reproducteur',
      summary: 'Étudier comment les différences héréditaires de survie et de reproduction modifient les populations, et distinguer les principaux modes de sélection.',
      lesson: {
        sections: [
          'La sélection naturelle se produit lorsque des différences héréditaires entre individus entraînent des différences de survie ou de reproduction dans un environnement donné. Les individus qui contribuent davantage à la génération suivante transmettent plus fréquemment certaines variantes héréditaires. La sélection agit sur les phénotypes des individus, mais ses conséquences évolutives se mesurent dans les populations, par la variation des fréquences alléliques et des caractères au fil des générations.',
          'La valeur sélective, ou fitness au sens évolutif, désigne la contribution relative d’un individu ou d’un génotype à la génération suivante. Elle ne correspond pas simplement à la force, à la longévité ou à la santé apparente. Un caractère peut améliorer la survie mais réduire le succès reproducteur, ou l’inverse. La valeur sélective est relative à l’environnement et au contexte de comparaison : un trait avantageux dans un milieu peut devenir défavorable lorsque les conditions changent.',
          'La sélection directionnelle favorise un phénotype situé vers une extrémité de la variation et peut déplacer la moyenne de la population. La sélection stabilisante favorise les phénotypes intermédiaires et réduit souvent la fréquence des extrêmes. La sélection diversifiante favorise plusieurs phénotypes distincts dans certaines conditions et peut augmenter la différenciation au sein d’une population. Ces modèles décrivent des effets statistiques sur la distribution des caractères ; ils ne sont pas des étapes obligatoires de l’évolution.',
          'La sélection sexuelle est une forme de sélection liée aux différences de succès dans l’accès aux partenaires et à la reproduction. Elle peut résulter de la compétition entre individus pour l’accès aux partenaires ou de préférences de choix du partenaire. Des caractères comme les ornements, les chants ou les comportements de parade peuvent être favorisés même s’ils ont un coût pour la survie. Leur évolution dépend de l’équilibre entre avantages reproductifs, coûts et conditions écologiques.',
          'La sélection naturelle ne produit pas nécessairement des organismes parfaits. Elle agit sur la variation disponible et peut être limitée par l’histoire évolutive, les contraintes du développement, les compromis entre fonctions et les changements de l’environnement. Elle ne crée pas directement les mutations adaptées aux besoins : les mutations apparaissent sans direction liée à leur utilité future, puis leurs effets peuvent être triés par la sélection et d’autres mécanismes.'
        ],
        example: {
          statement: 'Dans une population de papillons, les individus plus sombres sont moins repérés par les prédateurs sur des troncs assombris. Si la couleur est héréditaire et que ces individus laissent en moyenne plus de descendants, quel mécanisme peut modifier la population ?',
          calculation: 'Le phénotype sombre est associé à une contribution moyenne plus importante à la génération suivante. Si cette différence est liée à des variantes héréditaires, leur fréquence peut augmenter au fil des générations.',
          answer: 'Il s’agit d’un cas de sélection naturelle directionnelle, si les données confirment que la sélection favorise durablement les phénotypes plus sombres dans cet environnement.'
        },
        exercise: {
          question: 'Pourquoi la sélection naturelle ne doit-elle pas être confondue avec la survie du plus fort ?',
          answer: 'La valeur sélective dépend du succès reproducteur relatif dans un environnement donné. Un individu peut survivre longtemps mais laisser peu de descendants ; un autre, moins robuste en apparence, peut contribuer davantage à la génération suivante.'
        },
        exercises: [
          {
            question: 'Sur quoi la sélection naturelle agit-elle directement ?',
            answer: 'Sur les phénotypes des individus, en fonction de leurs effets sur la survie et la reproduction.'
          },
          {
            question: 'Quel type de sélection favorise les phénotypes intermédiaires ?',
            answer: 'La sélection stabilisante.'
          },
          {
            question: 'Quel est le lien entre sélection sexuelle et sélection naturelle ?',
            answer: 'La sélection sexuelle est une composante de la sélection liée aux différences de succès reproducteur, particulièrement celles qui concernent l’accès aux partenaires.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Adaptive Evolution', url: 'https://openstax.org/books/biology-2e/pages/19-3-adaptive-evolution' },
          { title: 'Natural History Museum — What is natural selection?', url: 'https://www.nhm.ac.uk/discover/what-is-natural-selection.html' },
          { title: 'OpenStax — Biology 2e, Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' }
        ]
      }
    },
    {
      id: 'derive-genetique-flux-genes-equilibre',
      title: 'La dérive génétique, le flux de gènes et les autres forces évolutives',
      field: 'Génétique des populations · Forces évolutives et équilibre de Hardy-Weinberg',
      summary: 'Comprendre les changements aléatoires de fréquences alléliques, les migrations, les effets fondateur et goulot d’étranglement, ainsi que le modèle de Hardy-Weinberg.',
      lesson: {
        sections: [
          'La dérive génétique correspond aux fluctuations aléatoires des fréquences alléliques d’une génération à l’autre, dues au fait que les individus qui transmettent leurs allèles ne représentent pas exactement la population précédente. Elle peut entraîner la disparition ou la fixation d’allèles sans que ces variantes soient nécessairement avantageuses ou défavorables. Son effet est généralement plus marqué dans les petites populations, où le hasard de la reproduction représente une fraction plus importante du patrimoine génétique.',
          'L’effet fondateur apparaît lorsqu’un petit nombre d’individus établit une nouvelle population. Les allèles présents chez ces fondateurs peuvent ne pas représenter fidèlement ceux de la population d’origine ; les fréquences alléliques de la nouvelle population peuvent donc être différentes dès le départ. Le goulot d’étranglement correspond à une réduction importante et souvent rapide de l’effectif d’une population. Les survivants ne représentent pas nécessairement toute la diversité initiale, ce qui peut réduire la diversité génétique et modifier les fréquences alléliques par hasard.',
          'Le flux de gènes correspond au transfert d’allèles entre populations, par déplacement d’individus ou de gamètes suivis de reproduction. Il peut introduire des variantes dans une population et réduire les différences génétiques entre populations lorsque les échanges sont suffisants. À l’inverse, une réduction du flux de gènes peut favoriser la divergence. Les barrières géographiques, comportementales ou écologiques peuvent limiter ces échanges, sans les supprimer nécessairement complètement.',
          'La mutation introduit de nouveaux allèles, tandis que la sélection naturelle, la dérive génétique et le flux de gènes modifient leur fréquence. Les systèmes d’accouplement non aléatoire peuvent aussi modifier les fréquences génotypiques et la structure génétique d’une population. Il est important de distinguer fréquence allélique et fréquence génotypique : un changement dans la proportion des génotypes ne signifie pas toujours qu’il y a eu changement des fréquences alléliques.',
          'Le principe de Hardy-Weinberg fournit un modèle de référence pour une population idéale dans laquelle les fréquences alléliques et génotypiques restent constantes d’une génération à l’autre en l’absence de forces évolutives particulières. Pour un gène à deux allèles A et a, avec des fréquences p et q, p + q = 1 et les fréquences génotypiques attendues sont p² pour AA, 2pq pour Aa et q² pour aa. Le modèle suppose notamment une population très grande, des accouplements aléatoires, l’absence de mutation, de migration et de sélection. Dans les populations réelles, il sert surtout de comparaison pour détecter des écarts et formuler des hypothèses.'
        ],
        example: {
          statement: 'Dans une population à deux allèles, la fréquence de A est p = 0,7 et celle de a est q = 0,3. Quelles fréquences génotypiques attend-on selon Hardy-Weinberg ?',
          calculation: 'AA = p² = 0,7 × 0,7 = 0,49. Aa = 2pq = 2 × 0,7 × 0,3 = 0,42. aa = q² = 0,3 × 0,3 = 0,09. La somme vaut 0,49 + 0,42 + 0,09 = 1.',
          answer: 'Les fréquences génotypiques attendues sont 0,49 pour AA, 0,42 pour Aa et 0,09 pour aa, soit respectivement 49 %, 42 % et 9 %, si les conditions du modèle sont respectées.'
        },
        exercise: {
          question: 'Pourquoi la dérive génétique peut-elle être particulièrement importante dans une petite population ?',
          answer: 'Parce que le hasard de la reproduction peut représenter une proportion importante des copies d’allèles transmises. Les fréquences peuvent donc fluctuer fortement d’une génération à l’autre.'
        },
        exercises: [
          {
            question: 'Qu’est-ce que l’effet fondateur ?',
            answer: 'Une modification des fréquences alléliques lorsqu’un petit groupe fonde une nouvelle population dont le patrimoine génétique ne représente pas exactement celui de la population d’origine.'
          },
          {
            question: 'Quel processus permet le transfert d’allèles entre populations ?',
            answer: 'Le flux de gènes, par migration d’individus ou de gamètes suivie de reproduction.'
          },
          {
            question: 'Quelle est la relation de Hardy-Weinberg pour deux allèles ?',
            answer: 'p + q = 1 et p² + 2pq + q² = 1, avec p², 2pq et q² comme fréquences génotypiques attendues.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Population Evolution', url: 'https://openstax.org/books/biology-2e/pages/19-1-population-evolution' },
          { title: 'OpenStax — Biology 2e, Population Genetics', url: 'https://openstax.org/books/biology-2e/pages/19-2-population-genetics' },
          { title: 'OpenStax — Biology 2e, Adaptive Evolution', url: 'https://openstax.org/books/biology-2e/pages/19-3-adaptive-evolution' }
        ]
      }
    },
    {
      id: 'speciation-adaptation-diversification',
      title: 'La spéciation, les adaptations et la diversification du vivant',
      field: 'Biologie évolutive · Isolement reproducteur et origine des espèces',
      summary: 'Expliquer comment des populations divergent, comment apparaissent les barrières reproductives et comment la diversification évolutive produit de nouvelles lignées.',
      lesson: {
        sections: [
          'La spéciation est le processus évolutif par lequel des populations donnent naissance à des lignées devenant des espèces distinctes selon les critères biologiques utilisés. Chez les organismes à reproduction sexuée, le concept biologique de l’espèce met l’accent sur l’interfécondité et l’isolement reproducteur. Cette définition ne s’applique pas directement aux organismes asexués et ne suffit pas toujours pour les fossiles ou les populations dont les limites sont difficiles à établir. Les biologistes utilisent donc plusieurs concepts d’espèce selon les organismes et les données disponibles.',
          'La spéciation allopatrique commence généralement par une séparation géographique qui réduit ou interrompt le flux de gènes entre des populations. Les populations isolées peuvent accumuler des différences sous l’effet des mutations, de la dérive génétique et de la sélection naturelle. Si des barrières reproductives apparaissent, elles peuvent rester distinctes même si un contact secondaire devient possible. Une rivière, une chaîne montagneuse, une fragmentation d’habitat ou la colonisation d’une île peuvent contribuer à l’isolement géographique.',
          'La spéciation sympatrique se produit sans séparation géographique initiale complète. Elle peut être favorisée par une spécialisation écologique, des préférences d’accouplement ou des changements chromosomiques. Chez certaines plantes, la polyploïdie, c’est-à-dire la présence de jeux supplémentaires de chromosomes, peut créer rapidement un isolement reproducteur avec la population d’origine. Les mécanismes varient selon les groupes et la spéciation sympatrique ne doit pas être considérée comme la voie la plus fréquente dans tous les organismes.',
          'Les barrières reproductives sont dites prézygotiques lorsqu’elles empêchent la rencontre des gamètes ou la fécondation : différences de période de reproduction, de comportement, de signaux, d’habitat ou incompatibilités mécaniques et gamétiques. Les barrières postzygotiques agissent après la fécondation, par exemple lorsque les hybrides ont une viabilité réduite ou sont stériles. L’isolement reproducteur peut être progressif et incomplet ; des zones hybrides existent chez certains groupes et leur étude renseigne sur le degré de divergence des populations.',
          'La radiation adaptative désigne la diversification d’une lignée ancestrale en plusieurs lignées qui exploitent des niches écologiques différentes. Elle peut survenir lorsqu’un groupe colonise un nouvel environnement, lorsque des ressources deviennent disponibles ou après l’apparition de nouvelles possibilités écologiques. Les pinsons des Galápagos sont souvent utilisés comme exemple pédagogique de diversification des formes de bec associées à des ressources alimentaires différentes. L’adaptation ne signifie pas perfection : elle correspond à une adéquation relative entre certains caractères héréditaires et un environnement donné.'
        ],
        example: {
          statement: 'Une population d’insectes est séparée en deux groupes par la formation d’un canyon. Après une longue période, les deux groupes ne se reproduisent plus entre eux même lorsqu’ils se retrouvent en contact. Quel processus peut expliquer cette situation ?',
          calculation: 'La séparation géographique a réduit le flux de gènes. Les deux groupes ont ensuite accumulé des différences évolutives ; l’apparition de barrières reproductives indique une divergence pouvant aboutir à une spéciation allopatrique.',
          answer: 'La situation est compatible avec une spéciation allopatrique : l’isolement géographique a favorisé la divergence, puis un isolement reproducteur s’est établi.'
        },
        exercise: {
          question: 'Quelle différence existe-t-il entre une barrière prézygotique et une barrière postzygotique ?',
          answer: 'Une barrière prézygotique empêche la fécondation ou la rencontre des gamètes. Une barrière postzygotique agit après la fécondation et réduit par exemple la viabilité ou la fertilité des hybrides.'
        },
        exercises: [
          {
            question: 'Qu’est-ce que la spéciation allopatrique ?',
            answer: 'Une formation de nouvelles espèces associée à une séparation géographique qui réduit le flux de gènes entre populations.'
          },
          {
            question: 'Pourquoi la polyploïdie peut-elle contribuer à la spéciation chez les plantes ?',
            answer: 'Un changement du nombre de jeux chromosomiques peut entraîner une incompatibilité de reproduction avec la population d’origine.'
          },
          {
            question: 'Que désigne une radiation adaptative ?',
            answer: 'La diversification d’une lignée ancestrale en plusieurs lignées adaptées à des niches écologiques différentes.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Formation of New Species', url: 'https://openstax.org/books/biology-2e/pages/18-2-formation-of-new-species' },
          { title: 'OpenStax — Biology 2e, Reconnection and Speciation Rates', url: 'https://openstax.org/books/biology-2e/pages/18-3-reconnection-and-speciation-rates' },
          { title: 'OpenStax — Biology 2e, Determining Evolutionary Relationships', url: 'https://openstax.org/books/biology-2e/pages/20-2-determining-evolutionary-relationships' }
        ]
      }
    },
    {
      id: 'preuves-evolution-phylogenie-vivant',
      title: 'Les preuves de l’évolution, la phylogénie et l’histoire du vivant',
      field: 'Biologie évolutive · Paléontologie, anatomie comparée et phylogénétique moléculaire',
      summary: 'Examiner les preuves indépendantes de l’évolution, lire les arbres phylogénétiques et comprendre les limites de la reconstruction des parentés.',
      lesson: {
        sections: [
          'Les preuves de l’évolution proviennent de domaines indépendants qui convergent vers une même conclusion : les espèces actuelles descendent de populations ancestrales et les lignées se sont diversifiées au cours du temps. Le registre fossile documente des organismes anciens, des extinctions et des changements de formes. Il est incomplet, car la fossilisation est rare et dépend des conditions de conservation, mais il fournit une chronologie précieuse lorsqu’il est associé aux méthodes de datation et aux données géologiques.',
          'L’anatomie comparée permet d’identifier des structures homologues, c’est-à-dire des caractères hérités d’un ancêtre commun même lorsqu’ils remplissent aujourd’hui des fonctions différentes. Le membre antérieur des humains, des chauves-souris, des oiseaux et des baleines présente un plan osseux comparable malgré des adaptations différentes. À l’inverse, des structures analogues peuvent se ressembler parce qu’elles répondent à des contraintes fonctionnelles similaires, sans provenir de la même structure chez un ancêtre commun récent. Cette distinction permet de différencier homologie et convergence évolutive.',
          'Les données moléculaires apportent une source majeure d’information sur les parentés. Les séquences d’ADN et de protéines peuvent être comparées entre espèces ; les ressemblances héritées de séquences homologues soutiennent des hypothèses de parenté. Plus les données concordent sur plusieurs gènes et avec d’autres caractères, plus une relation phylogénétique peut être solidement étayée. Les résultats doivent néanmoins tenir compte des duplications de gènes, des transferts horizontaux chez certains organismes, des hybridations et des différences entre l’histoire d’un gène et celle des espèces.',
          'La biogéographie étudie la distribution géographique des organismes et aide à reconstruire leur histoire. Les espèces insulaires présentent souvent des parentés avec des espèces de régions voisines, ce qui peut s’expliquer par la colonisation, l’isolement et la diversification. Les mouvements des continents et les changements climatiques ont également influencé la répartition des lignées. La distribution actuelle n’est donc pas seulement liée aux conditions écologiques présentes : elle conserve la trace de processus géologiques et évolutifs anciens.',
          'Un arbre phylogénétique représente une hypothèse de relations de parenté entre des lignées. Les nœuds représentent des ancêtres communs hypothétiques ou des événements de divergence, et les branches représentent des lignées évolutives. Deux espèces sont dites groupes frères lorsqu’elles partagent entre elles un ancêtre commun plus récent qu’avec les autres groupes représentés. La proximité visuelle des noms à l’extrémité des branches ne suffit pas à mesurer la parenté ; il faut lire les nœuds et la structure de l’arbre. Les arbres sont révisables lorsque de nouvelles données apparaissent et ne constituent pas une échelle de progrès allant du simple au complexe.'
        ],
        example: {
          statement: 'Sur un arbre phylogénétique, les espèces A et B partagent un ancêtre commun plus récent entre elles que chacune avec l’espèce C. Quelle relation peut-on déduire ?',
          calculation: 'On compare les nœuds de divergence : le nœud commun à A et B est plus récent que leur ancêtre commun avec C. A et B sont donc des groupes frères dans cet arbre.',
          answer: 'A et B sont les groupes les plus étroitement apparentés parmi les trois espèces représentées. Cela ne signifie pas que l’une descend de l’autre : elles partagent un ancêtre commun.'
        },
        exercise: {
          question: 'Pourquoi les arbres phylogénétiques ne doivent-ils pas être interprétés comme une échelle allant des organismes inférieurs aux organismes supérieurs ?',
          answer: 'Un arbre représente des relations de parenté et des divergences, pas une hiérarchie de valeur ou de progrès. Toutes les lignées actuelles ont évolué pendant la même durée depuis leurs ancêtres communs respectifs.'
        },
        exercises: [
          {
            question: 'Que sont des structures homologues ?',
            answer: 'Des structures dont les similitudes s’expliquent par une origine évolutive commune, même si leurs fonctions actuelles peuvent différer.'
          },
          {
            question: 'Que représente un nœud dans un arbre phylogénétique ?',
            answer: 'Un ancêtre commun hypothétique ou un point de divergence entre lignées.'
          },
          {
            question: 'Pourquoi les séquences d’ADN sont-elles utiles pour établir les parentés ?',
            answer: 'Parce que les similitudes et différences entre séquences homologues fournissent des indices mesurables sur l’histoire commune et la divergence des lignées.'
          }
        ],
        sources: [
          { title: 'OpenStax — Biology 2e, Understanding Evolution', url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution' },
          { title: 'OpenStax — Biology 2e, Determining Evolutionary Relationships', url: 'https://openstax.org/books/biology-2e/pages/20-2-determining-evolutionary-relationships' },
          { title: 'OpenStax — Concepts of Biology, Evidence of Evolution', url: 'https://openstax.org/books/concepts-biology/pages/11-3-evidence-of-evolution' }
        ]
      }
    }
  ]
},




]

