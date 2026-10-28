// Données du cours d'histoire (histoire-data.js) : x branches , x chapitres.
// exercices et bloc « RÉFÉRENCES » en bas de chaque leçon.
// Convention de datation : les dates avant J.-C. sont données avec « vers » dès
// qu'elles dépendent d'une chronologie discutée par les historiens ; les écarts
// entre sources sont signalés dans le texte plutôt que tranchés.
// Rappel : en av. J.-C., plus le nombre est grand, plus l'événement est ancien.
// ⚠️ Dans cours.js, remplacer : const DISCIPLINE = 'histoire';
window.courseCatalog = [

// BRANCHE 1 

  {
    id: 'prehistoire',
    sortYear: -2600000,
    title: 'Préhistoire : des premiers outils aux premières sociétés agricoles',
    note: 'Six chapitres sur les origines humaines, les outils de pierre, Homo sapiens, l’art préhistorique, le Mésolithique et le Néolithique. Les dates sont approximatives et les évolutions varient selon les régions.',
    chapters: [
      {
        id: 'origines-humaines',
        title: 'Les origines humaines et les premiers outils',
        field: 'Préhistoire · Premiers hominines à plusieurs millions d’années avant le présent',
        summary: 'Comprendre les premières techniques, la fabrication des outils de pierre et les limites des repères chronologiques.',
        lesson: {
          sections: [
            'La Préhistoire désigne conventionnellement la période antérieure aux premières sources écrites dans une société donnée. Elle ne commence donc pas partout au même moment. Pour les périodes les plus anciennes, les chercheurs s’appuient surtout sur les fossiles, les outils, les traces d’occupation et les autres vestiges archéologiques.',
            'Les plus anciens outils de pierre largement reconnus dans les chronologies de World History Encyclopedia remontent à environ 2,6 millions d’années. Ils sont associés à des hominines vivant en Afrique. Ces outils taillés pouvaient servir à couper, racler ou traiter des matières animales et végétales.',
            'Les techniques évoluent progressivement. L’Oldowayen est notamment associé à des outils de pierre relativement simples. L’Acheuléen se caractérise entre autres par des bifaces. Il ne faut cependant pas imaginer une évolution identique et simultanée dans toutes les régions : plusieurs traditions techniques ont coexisté.'
          ],
          example: {
            statement: 'Une chronologie situe les premiers outils de pierre vers 2,6 millions d’années avant le présent. Un autre vestige est daté d’environ 1,76 million d’années avant le présent. Quel est le plus ancien repère ?',
            calculation: 'Pour des durées exprimées en années avant le présent, le nombre le plus grand correspond au repère le plus ancien.',
            answer: 'Le repère de 2,6 millions d’années est le plus ancien. Ces chiffres sont des estimations chronologiques, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi les outils de pierre sont-ils importants pour étudier les périodes sans écriture ?',
            answer: 'Ils constituent des vestiges matériels permettant d’étudier les techniques et certaines activités des populations anciennes.'
          },
          exercises: [
            {
              question: 'Vers combien d’années avant le présent les premiers outils de pierre largement reconnus sont-ils datés dans la chronologie de World History Encyclopedia ?',
              answer: 'Vers 2,6 millions d’années avant le présent.'
            },
            {
              question: 'Qu’est-ce qu’un biface ?',
              answer: 'Un outil de pierre travaillé sur ses deux faces.'
            },
            {
              question: 'Les mêmes techniques apparaissent-elles nécessairement au même moment partout dans le monde ?',
              answer: 'Non. Les traditions techniques et leur chronologie varient selon les régions.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Paleolithic', url: 'https://www.worldhistory.org/Paleolithic/' },
            { title: 'World History Encyclopedia — Stone Age', url: 'https://www.worldhistory.org/Stone_Age/' },
            { title: 'World History Encyclopedia — Stone Age Tools', url: 'https://www.worldhistory.org/article/998/stone-age-tools/' },
            { title: 'World History Encyclopedia — Oldowan Tools', url: 'https://www.worldhistory.org/timeline/Oldowan_Tools/' }
          ]
        }
      },
      {
        id: 'paleolithique',
        title: 'Le Paléolithique : chasse, cueillette et adaptation',
        field: 'Préhistoire · Paléolithique, jusqu’à la fin de la dernière période glaciaire',
        summary: 'Découvrir les modes de vie des groupes de chasseurs-cueilleurs, les outils et l’adaptation à des environnements changeants.',
        lesson: {
          sections: [
            'Le Paléolithique, ou âge de la pierre ancienne, constitue la première grande période de l’âge de pierre. La chronologie de World History Encyclopedia le fait commencer avec les premiers outils de pierre connus, vers 2,6 millions d’années avant le présent, et le relie à la fin de la dernière période glaciaire, vers 12 000 ans avant le présent.',
            'Les populations paléolithiques vivent notamment de la chasse, de la pêche et de la collecte de ressources sauvages. Leurs activités dépendent des milieux, des saisons et des ressources disponibles. Les groupes peuvent se déplacer pour trouver de la nourriture, mais les modes de vie ne sont pas uniformes et peuvent varier selon les lieux et les époques.',
            'Les outils sont fabriqués à partir de matériaux disponibles, dont la pierre, le bois et l’os. Les vestiges archéologiques permettent d’étudier certaines techniques, mais ils ne révèlent pas tous les aspects de la vie quotidienne. Les subdivisions du Paléolithique correspondent à des cadres archéologiques utiles, et non à des frontières chronologiques universelles.'
          ],
          example: {
            statement: 'Une chronologie place la fin de la dernière période glaciaire vers 12 000 ans avant le présent. Un outil est daté d’environ 40 000 ans avant le présent. Quel repère est le plus ancien ?',
            calculation: 'Pour des repères exprimés en années avant le présent, 40 000 est supérieur à 12 000.',
            answer: 'L’outil daté d’environ 40 000 ans avant le présent est plus ancien que le repère de 12 000 ans.'
          },
          exercise: {
            question: 'Pourquoi les chasseurs-cueilleurs devaient-ils adapter leurs activités à leur environnement ?',
            answer: 'Parce que les ressources alimentaires, le climat et les milieux disponibles variaient selon les saisons et les régions.'
          },
          exercises: [
            {
              question: 'Que signifie le terme Paléolithique ?',
              answer: 'Âge de la pierre ancienne.'
            },
            {
              question: 'Cite deux activités permettant aux chasseurs-cueilleurs d’obtenir des ressources.',
              answer: 'Par exemple, la chasse et la collecte de plantes sauvages. La pêche est également possible.'
            },
            {
              question: 'Les subdivisions du Paléolithique sont-elles des frontières exactes et universelles ?',
              answer: 'Non. Elles servent à organiser les vestiges et les traditions techniques, dont la chronologie varie selon les régions.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Paleolithic', url: 'https://www.worldhistory.org/Paleolithic/' },
            { title: 'World History Encyclopedia — Stone Age', url: 'https://www.worldhistory.org/Stone_Age/' },
            { title: 'World History Encyclopedia — Paleolithic Timeline', url: 'https://www.worldhistory.org/timeline/Paleolithic/' }
          ]
        }
      },
      {
        id: 'homo-sapiens',
        title: 'Homo sapiens : origines et peuplement du monde',
        field: 'Préhistoire · Évolution humaine et migrations préhistoriques',
        summary: 'Étudier l’apparition de Homo sapiens en Afrique, les migrations et les interactions entre différentes populations humaines.',
        lesson: {
          sections: [
            'Homo sapiens est l’espèce humaine actuelle. La chronologie de World History Encyclopedia situe l’apparition de formes reconnaissables de Homo sapiens en Afrique vers 200 000 ans avant le présent. Cette date est un repère approximatif : les origines de notre espèce résultent d’une histoire évolutive qui ne se résume pas à un événement unique.',
            'Au cours de la Préhistoire, des populations humaines se déplacent hors d’Afrique et gagnent différentes régions du monde. La chronologie citée situe vers 55 000 ans avant le présent une migration majeure dont descendent la plupart des populations non africaines actuelles. D’autres déplacements ont eu lieu et les itinéraires, les dates et les relations entre groupes font l’objet de recherches.',
            'Homo sapiens a coexisté avec d’autres groupes humains, notamment les Néandertaliens et les Dénisoviens. Les recherches génétiques ont mis en évidence des métissages entre certaines de ces populations. Les fossiles, l’archéologie et la génétique apportent des informations complémentaires, mais certaines questions demeurent débattues.'
          ],
          example: {
            statement: 'La chronologie de World History Encyclopedia situe l’apparition de formes reconnaissables de Homo sapiens vers 200 000 ans avant le présent et une migration majeure hors d’Afrique vers 55 000 ans avant le présent. Quel repère est le plus ancien ?',
            calculation: '200 000 est supérieur à 55 000 lorsqu’on exprime les deux repères en années avant le présent.',
            answer: 'Le repère d’environ 200 000 ans avant le présent est le plus ancien. Les deux dates sont approximatives.'
          },
          exercise: {
            question: 'Pourquoi faut-il éviter de présenter l’apparition de Homo sapiens comme un événement survenu à une date exacte ?',
            answer: 'Parce que l’évolution humaine est un processus long et complexe, reconstruit à partir de fossiles et d’autres indices dont les dates sont estimées.'
          },
          exercises: [
            {
              question: 'Sur quel continent les formes anciennes de Homo sapiens sont-elles situées dans la chronologie citée ?',
              answer: 'En Afrique.'
            },
            {
              question: 'Vers quand cette chronologie situe-t-elle une migration majeure hors d’Afrique ?',
              answer: 'Vers 55 000 ans avant le présent.'
            },
            {
              question: 'Quels types de données aident à étudier le peuplement humain ancien ?',
              answer: 'Les fossiles, les vestiges archéologiques et les données génétiques, entre autres.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Homo Sapiens', url: 'https://www.worldhistory.org/Homo_Sapiens/' },
            { title: 'World History Encyclopedia — Homo Sapiens Timeline', url: 'https://www.worldhistory.org/timeline/Homo_Sapiens/' },
            { title: 'World History Encyclopedia — Prehistoric Period', url: 'https://www.worldhistory.org/index/period/1/prehistoric/' }
          ]
        }
      },
      {
        id: 'art-prehistorique',
        title: 'L’art préhistorique : peintures, gravures et représentations',
        field: 'Préhistoire · Art du Paléolithique supérieur',
        summary: 'Découvrir les peintures et gravures préhistoriques, les vestiges de Lascaux et les limites de leur interprétation.',
        lesson: {
          sections: [
            'L’art préhistorique est connu grâce à des vestiges comme les peintures, les gravures et certaines figurines. Ces objets et représentations témoignent de pratiques culturelles anciennes. Leur conservation dépend notamment des matériaux employés et des conditions dans lesquelles ils ont été préservés.',
            'La grotte de Lascaux, dans le sud-ouest de la France, est célèbre pour ses peintures et ses gravures, principalement des représentations animales. World History Encyclopedia situe les peintures de Lascaux vers 17 000 à 15 000 av. J.-C. Il s’agit d’une datation approximative présentée dans sa chronologie.',
            'La signification exacte des images préhistoriques est souvent difficile à établir. Des interprétations rituelles ou symboliques ont été proposées, mais il faut distinguer les vestiges observables des hypothèses sur leur sens. Les chercheurs confrontent les images à leur contexte archéologique et aux autres traces disponibles.'
          ],
          example: {
            statement: 'Les peintures de Lascaux sont datées approximativement de 17 000 à 15 000 av. J.-C. Quelle borne est la plus ancienne ?',
            calculation: 'Pour les dates av. J.-C., plus le nombre est grand, plus la date est ancienne.',
            answer: '17 000 av. J.-C. est la borne la plus ancienne. La fourchette ne signifie pas que toutes les peintures ont été réalisées la même année.'
          },
          exercise: {
            question: 'Pourquoi ne peut-on pas toujours affirmer avec certitude ce que signifiait une peinture préhistorique ?',
            answer: 'Parce que les images ne sont pas accompagnées d’explications écrites contemporaines et que plusieurs interprétations peuvent être proposées à partir des vestiges.'
          },
          exercises: [
            {
              question: 'Dans quelle région de France se trouve la grotte de Lascaux ?',
              answer: 'Dans le sud-ouest de la France, en Dordogne.'
            },
            {
              question: 'Quels animaux sont notamment représentés dans les peintures de Lascaux ?',
              answer: 'Des chevaux, des cervidés, des aurochs, des bisons et d’autres animaux.'
            },
            {
              question: 'Quelle différence faut-il faire entre une observation archéologique et une interprétation ?',
              answer: 'L’observation décrit ce qui est conservé et étudié ; l’interprétation propose une explication qui peut rester incertaine.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Lascaux Cave Timeline', url: 'https://www.worldhistory.org/timeline/Lascaux_Cave/' },
            { title: 'World History Encyclopedia — Stone Age', url: 'https://www.worldhistory.org/Stone_Age/' },
            { title: 'World History Encyclopedia — Prehistoric Period', url: 'https://www.worldhistory.org/index/period/1/prehistoric/' }
          ]
        }
      },
      {
        id: 'mesolithique',
        title: 'Le Mésolithique : s’adapter à un monde qui se réchauffe',
        field: 'Préhistoire · Fin de la dernière période glaciaire et Holocène',
        summary: 'Comprendre les changements environnementaux, l’adaptation des chasseurs-cueilleurs et la diversité des transitions vers l’agriculture.',
        lesson: {
          sections: [
            'Le Mésolithique est généralement associé à la période qui suit la dernière période glaciaire et précède l’adoption de l’agriculture dans une région. World History Encyclopedia situe le début du réchauffement marquant la fin de la dernière grande phase glaciaire autour de 12 000 ans avant le présent, avec des repères calendaires proches de 10 000 av. J.-C. selon les conventions utilisées.',
            'Le réchauffement modifie les paysages et les ressources. Les forêts s’étendent dans certaines régions, les littoraux évoluent avec la montée du niveau marin et des populations humaines s’adaptent à de nouveaux environnements. Les activités de chasse, de pêche et de collecte continuent, mais leur organisation varie selon les milieux.',
            'Le Mésolithique ne se termine pas partout au même moment. Dans certaines régions du Proche-Orient, l’adoption de l’agriculture commence tôt ; en Europe du Nord, la transition vers l’agriculture se produit plus tard. Le terme est donc utile pour décrire certaines trajectoires régionales, mais ne constitue pas une période universelle aux limites fixes.'
          ],
          example: {
            statement: 'Une chronologie place la fin de la dernière grande phase glaciaire vers 12 000 ans avant le présent. Pourquoi ne peut-on pas donner une date unique de fin du Mésolithique pour le monde entier ?',
            calculation: 'La fin du Mésolithique est généralement liée à la transition vers l’agriculture, dont les dates varient selon les régions.',
            answer: 'Parce que les sociétés ont adopté l’agriculture à des moments différents. Le Mésolithique est un cadre régional, pas une période qui se termine partout simultanément.'
          },
          exercise: {
            question: 'Quel changement environnemental a influencé les populations après la dernière période glaciaire ?',
            answer: 'Le réchauffement climatique a transformé les paysages, les écosystèmes et la disponibilité des ressources.'
          },
          exercises: [
            {
              question: 'À quelle grande transformation climatique le Mésolithique est-il souvent associé ?',
              answer: 'À la fin de la dernière période glaciaire et au réchauffement qui suit.'
            },
            {
              question: 'Les populations mésolithiques abandonnent-elles partout immédiatement la chasse et la collecte ?',
              answer: 'Non. Les modes de vie et les transitions varient selon les régions.'
            },
            {
              question: 'Pourquoi les dates du Mésolithique varient-elles selon les régions ?',
              answer: 'Parce que les environnements, les traditions et le passage à l’agriculture n’évoluent pas partout au même rythme.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Stone Age Tools', url: 'https://www.worldhistory.org/article/998/stone-age-tools/' },
            { title: 'World History Encyclopedia — Paleolithic', url: 'https://www.worldhistory.org/Paleolithic/' },
            { title: 'World History Encyclopedia — Homo Sapiens Timeline', url: 'https://www.worldhistory.org/timeline/Homo_Sapiens/' }
          ]
        }
      },
      {
        id: 'neolithique',
        title: 'Le Néolithique : agriculture, élevage et villages',
        field: 'Préhistoire · Débuts de l’agriculture à des dates variables selon les régions',
        summary: 'Étudier la domestication des plantes et des animaux, la sédentarisation et la diversité des sociétés néolithiques.',
        lesson: {
          sections: [
            'Le Néolithique est notamment associé au développement de l’agriculture, à la domestication de certains animaux et à l’utilisation d’outils de pierre polie. Dans plusieurs régions, des populations commencent à cultiver des plantes et à gérer des troupeaux. Ces changements se déroulent sur de longues périodes et ne constituent pas une révolution instantanée.',
            'World History Encyclopedia situe les débuts de l’agriculture au Proche-Orient autour de 10 000 av. J.-C., avec des étapes ultérieures comme la culture de céréales et la domestication de plusieurs espèces animales. D’autres régions du monde développent aussi des pratiques agricoles, avec des plantes, des animaux et des chronologies qui leur sont propres.',
            'La production de nourriture favorise dans certaines régions des installations plus durables et des villages. Elle ne remplace cependant pas immédiatement toutes les activités de chasse, de pêche et de collecte. Les sociétés néolithiques sont diverses et leurs évolutions diffèrent selon les ressources, les milieux et les échanges.'
          ],
          example: {
            statement: 'La chronologie de World History Encyclopedia situe des débuts de l’agriculture au Proche-Orient autour de 10 000 av. J.-C. et la culture de céréales sauvages dans le Croissant fertile vers 9 000 av. J.-C. Quel repère est le plus ancien ?',
            calculation: 'Pour les dates av. J.-C., plus le nombre est grand, plus la date est ancienne.',
            answer: '10 000 av. J.-C. est le repère le plus ancien. Ces repères décrivent des étapes différentes et approximatives.'
          },
          exercise: {
            question: 'Pourquoi le développement de l’agriculture ne signifie-t-il pas que toutes les sociétés deviennent immédiatement sédentaires ?',
            answer: 'Parce que les transitions sont graduelles et régionales ; certaines populations continuent à combiner agriculture, chasse, pêche et collecte, ou conservent d’autres modes de vie.'
          },
          exercises: [
            {
              question: 'Cite deux transformations souvent associées au Néolithique.',
              answer: 'Le développement de l’agriculture et la domestication de certains animaux. L’usage d’outils de pierre polie est également caractéristique.'
            },
            {
              question: 'Vers quelle date la chronologie citée situe-t-elle les débuts de l’agriculture au Proche-Orient ?',
              answer: 'Autour de 10 000 av. J.-C.'
            },
            {
              question: 'L’agriculture est-elle apparue partout au même moment ?',
              answer: 'Non. Les pratiques agricoles se développent à des dates différentes selon les régions.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neolithic', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'World History Encyclopedia — Neolithic Timeline', url: 'https://www.worldhistory.org/timeline/Neolithic/' },
            { title: 'World History Encyclopedia — Dynamics of the Neolithic Revolution', url: 'https://www.worldhistory.org/article/1937/dynamics-of-the-neolithic-revolution/' },
            { title: 'World History Encyclopedia — Agriculture Timeline', url: 'https://www.worldhistory.org/timeline/Agriculture/' }
          ]
        }
      }
    ]
  }, // FIN BRANCHE 1

// BRANCHE 2 
  {
    id: 'histoire-des-civilisations',
    sortYear: -3500,
    title: 'Histoire des civilisations',
    note: 'De la Mésopotamie à la Chine des Han : six grandes civilisations de l’Antiquité, leurs repères chronologiques, leurs sources et les dates discutées.',
    chapters: [
      {
        id: 'mesopotamie',
        title: 'Mésopotamie : villes, écriture et lois',
        field: 'Proche-Orient ancien · IVe–Ier millénaire av. J.-C.',
        summary: 'Sumer, Akkad, Babylone : de la première écriture à la prise de Babylone par Cyrus.',
        lesson: {
          sections: [
            'Le mot « Mésopotamie » vient du grec et signifie « entre les fleuves » : le Tigre et l’Euphrate, dans l’Irak actuel. Les terres fertiles qui les bordent ont vu naître des cités-États comme Uruk, Ur, Lagash, Akkad, Assur, Ninive et, plus tard, Babylone. Au sud, Sumer compte parmi les plus anciennes civilisations urbaines connues ; Uruk y est, à la fin du IVe millénaire av. J.-C., une ville exceptionnellement vaste pour son époque (plus de 50 000 habitants selon certaines estimations).',
            'L’écriture cunéiforme (du latin cuneus, « coin ») naît à Sumer au IVe millénaire av. J.-C. ; les premiers signes se placent au milieu ou à la fin de ce millénaire selon les auteurs. Elle note d’abord le sumérien, passe de pictogrammes à des signes en forme de coins imprimés dans l’argile, et combine des signes de mots (logogrammes) et de syllabes : ce n’est donc pas un alphabet. Elle est ensuite adaptée à d’autres langues, dont l’akkadien.',
            'Vers 2334-2279 av. J.-C. (chronologie la plus citée ; certaines la placent un peu plus tard), Sargon d’Akkad unifie une grande partie de la Mésopotamie : c’est le premier empire de la région. L’akkadien, langue sémitique, remplace peu à peu le sumérien comme langue parlée, tandis que le sumérien reste une langue de culture. Le code d’Ur-Nammu (vers 2100-2050 av. J.-C.) est le plus ancien recueil de lois conservé ; Hammurabi, sixième roi de la première dynastie de Babylone, règne d’environ 1792 à 1750 av. J.-C. (chronologie dite « moyenne »).',
            'La stèle de Hammurabi, bloc de basalte noir de 2,25 m de haut (certaines notices parlent de diorite), porte 282 jugements en akkadien cunéiforme. Retrouvée à Suse (Iran actuel) en 1901-1902, elle est exposée au Louvre depuis 1904 ; elle y aurait été emportée de Babylonie vers le XIIe siècle av. J.-C. par un roi élamite. Le Louvre précise que ce n’est pas un « code » au sens moderne du terme, mais un vaste recueil de jurisprudence organisé par thèmes : famille, propriété, commerce, travail.',
            'En 539 av. J.-C., le roi perse Cyrus II prend Babylone au dernier roi babylonien, Nabonide. Le cylindre de Cyrus, retrouvé à Babylone en 1879 et conservé au British Museum, raconte cet événement. La Mésopotamie entre alors dans l’empire achéménide. Retenir : avant le Ier millénaire, les dates dépendent de chronologies (haute, moyenne, basse) qui divergent de plusieurs décennies ; on écrit donc « vers ».'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : prise de Babylone par Cyrus (539 av. J.-C.), règne de Hammurabi (1792-1750), règne de Sargon d’Akkad (vers 2334-2279), code d’Ur-Nammu (vers 2100-2050).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 2334 > 2100 > 1792 > 539.',
            answer: 'Sargon d’Akkad, puis le code d’Ur-Nammu, puis Hammurabi, puis la prise de Babylone par Cyrus.'
          },
          exercise: {
            question: 'Hammurabi règne de 1792 à 1750 av. J.-C. Combien d’années dure son règne ?',
            answer: '42 ans (1792 − 1750).'
          },
          exercises: [
            {
              question: 'Hammurabi règne de 1792 à 1750 av. J.-C. Combien d’années dure son règne ?',
              answer: '42 ans (1792 − 1750).'
            },
            {
              question: 'Pourquoi dit-on que la « loi de Hammurabi » n’est pas un code au sens moderne ?',
              answer: 'Parce que c’est un recueil de 282 jugements, c’est-à-dire de la jurisprudence organisée par thèmes, et non un texte de loi systématique ; le mot « code » est d’ailleurs une appellation moderne.'
            },
            {
              question: 'Le cunéiforme est-il un alphabet ?',
              answer: 'Non : c’est un système mixte qui combine des signes de mots (logogrammes) et des signes de syllabes. Il a été adapté à plusieurs langues, dont l’akkadien.'
            }
          ],
          sources: [
            { title: 'Musée du Louvre — The Code of Hammurabi', url: 'https://www.louvre.fr/en/the-code-of-hammurabi' },
            { title: 'World History Encyclopedia — Code of Hammurabi', url: 'https://worldhistory.org/The_Code_of_Hammurabi' },
            { title: 'Smarthistory (British Museum) — The Cyrus Cylinder and Ancient Persia', url: 'https://smarthistory.org/cyrus-cylinder/' },
            { title: 'UTSA — Introduction to the Humanities, chapitre 3 : Mesopotamia', url: 'https://utsa.pressbooks.pub/introductiontohumanities1/chapter/chapter-3-mesopotamia/' }
          ]
        }
      } // FIN CHAPITRE mesopotamie
      ,
      {
        id: 'egypte-ancienne',
        title: 'Égypte ancienne : du Nil à Rome',
        field: 'Afrique du Nord-Est · vers 3100–30 av. J.-C.',
        summary: 'Unification, Empires, pyramides, Ptolémées et pierre de Rosette.',
        lesson: {
          sections: [
            'L’Égypte ancienne se développe le long du Nil et dure environ trois millénaires : de l’unification de la Haute et de la Basse-Égypte, vers 3100 av. J.-C., à l’annexion par Rome en 30 av. J.-C. Le premier à avoir classé les rois par dynasties est Manéthon, prêtre égyptien du IIIe siècle av. J.-C. ; les historiens modernes regroupent ces dynasties en grandes périodes.',
            'On distingue l’Ancien Empire (vers 2686-2181 av. J.-C.), le Moyen Empire (vers 2055-1650) et le Nouvel Empire (vers 1550-1070), séparés par des périodes intermédiaires de fragmentation politique. Les bornes varient de quelques décennies selon les chronologies : le début de l’Ancien Empire est placé vers 2686 ou vers 2613, celui du Nouvel Empire vers 1570 ou vers 1550. On écrit donc « vers », et ces écarts ne sont pas des erreurs mais des reconstructions différentes.',
            'Les trois grandes pyramides de Gizeh sont construites pour Khéops, son fils Khéphren et son petit-fils Mykérinos, sous la IVe dynastie (Ancien Empire). Les sources situent la Grande Pyramide entre 2600 et 2500 av. J.-C. environ (on trouve 2580 ou 2560 selon les ouvrages). Au Nouvel Empire, les rois ne se font plus enterrer dans des pyramides mais dans la Vallée des Rois.',
            'En 332 av. J.-C., Alexandre le Grand conquiert l’Égypte, alors province perse. Une dynastie macédonienne, les Ptolémées, y règne ensuite ; les sources datent son début de 323 ou de 305 av. J.-C. (mort d’Alexandre, ou prise du titre de roi par Ptolémée Ier). Cléopâtre VII, dernière souveraine de la dynastie, est vaincue avec Marc Antoine face à Octave ; en 30 av. J.-C., l’Égypte devient une province romaine.',
            'La pierre de Rosette porte un décret de 196 av. J.-C. en l’honneur de Ptolémée V, écrit en trois versions : hiéroglyphes (langue des prêtres), démotique (écriture courante) et grec (administration). Trouvée en juillet 1799 près de Rosette par l’officier Pierre-François Bouchard, pendant l’expédition de Bonaparte, elle est au British Museum depuis 1802. Le grec, que l’on savait lire, a servi de clé : Thomas Young montre en 1814 que les cartouches contiennent des noms royaux, et Jean-François Champollion annonce le déchiffrement en 1822, en établissant que les hiéroglyphes mêlent signes phonétiques et signes de sens.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : décret de la pierre de Rosette (196 av. J.-C.), conquête d’Alexandre (332 av. J.-C.), unification de l’Égypte (vers 3100 av. J.-C.), Égypte province romaine (30 av. J.-C.).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 3100 > 332 > 196 > 30.',
            answer: 'Unification, conquête d’Alexandre, décret de Rosette, province romaine.'
          },
          exercise: {
            question: 'Combien d’années séparent la découverte de la pierre de Rosette (1799) de l’annonce du déchiffrement par Champollion (1822) ?',
            answer: '23 ans (1822 − 1799).'
          },
          exercises: [
            {
              question: 'Combien d’années séparent la découverte de la pierre de Rosette (1799) de l’annonce du déchiffrement par Champollion (1822) ?',
              answer: '23 ans (1822 − 1799).'
            },
            {
              question: 'Pourquoi la pierre de Rosette porte-t-elle le même texte en trois écritures, et à quoi servait chacune ?',
              answer: 'C’est un décret destiné à plusieurs publics : les hiéroglyphes pour les prêtres, le démotique pour l’usage courant, le grec pour l’administration. Comme le grec était lisible, il a servi de clé pour les deux autres.'
            },
            {
              question: 'Deux ouvrages placent le début de l’Ancien Empire en 2686 et en 2613 av. J.-C. L’un des deux est-il faux ?',
              answer: 'Pas nécessairement : ce sont deux chronologies reconstruites différemment. C’est pourquoi on écrit « vers » et qu’on indique l’écart plutôt que de trancher.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Kingdoms and Periods of Ancient Egypt', url: 'https://www.worldhistory.org/collection/235/kingdoms-and-periods-of-ancient-egypt' },
            { title: 'World History Encyclopedia — Rosetta Stone', url: 'https://www.worldhistory.org/Rosetta_Stone/' },
            { title: 'Wikipédia (en) — Rosetta Stone', url: 'https://en.wikipedia.org/wiki/Rosetta_Stone' },
            { title: 'TheCollector — Timeline of Ancient Egypt', url: 'https://thecollector.com/timeline-ancient-egypt' }
          ]
        }
      } // FIN CHAPITRE egypte
      ,
      {
        id: 'vallee-de-l-indus',
        title: 'Vallée de l’Indus : les villes sans histoire écrite',
        field: 'Asie du Sud · vers 3300–1300 av. J.-C.',
        summary: 'Harappa, Mohenjo-daro, Dholavira : une civilisation urbaine dont l’écriture reste indéchiffrée.',
        lesson: {
          sections: [
            'La civilisation de l’Indus, dite aussi harappéenne, est une civilisation urbaine de l’âge du bronze, répartie sur le Pakistan actuel, le nord-ouest de l’Inde et le nord-est de l’Afghanistan. On distingue généralement trois phases : Harappéen ancien (vers 3300-2600 av. J.-C.), phase mature urbaine (vers 2600-1900) et Harappéen tardif (vers 1900-1300). Ces bornes sont conventionnelles : certains auteurs placent le début de la phase ancienne vers 3200, et l’UNESCO donne pour la civilisation la fourchette 2500-1500.',
            'La civilisation porte le nom de Harappa, premier de ses sites fouillé, dans les années 1920 ; Mohenjo-daro est fouillé à partir de 1922. Classé au patrimoine mondial de l’UNESCO en 1980, Mohenjo-daro couvre 240 hectares dont environ un tiers seulement a été fouillé ; l’UNESCO le décrit comme la mieux conservée des villes d’Asie du Sud remontant au début du IIIe millénaire av. J.-C.',
            'Les villes harappéennes se distinguent par leur urbanisme : plan régulier, acropole surélevée dominant une ville basse, maisons en brique, systèmes de drainage et d’approvisionnement en eau, poids et mesures standardisés. À Dholavira (Gujarat, inscrit au patrimoine mondial en 2021), la ville compte trois parties et de grands réservoirs d’eau. Le Grand Bain de Mohenjo-daro mesure environ 12 m sur 7 m ; sa fonction relève de l’interprétation. Des échanges avec la Mésopotamie sont attestés pour la phase mature.',
            'L’écriture de l’Indus, connue par des sceaux et de courtes inscriptions (de l’ordre de cinq signes en moyenne), compte plusieurs centaines de signes (400 à 600 selon les estimations) et n’est toujours pas déchiffrée. Faute de textes lus, on ignore les noms des rois, les événements politiques et la langue : tout ce que l’on sait vient de l’archéologie.',
            'Les grandes villes déclinent vers 1900 av. J.-C., de façon progressive selon la plupart des auteurs. Ses causes ne font pas consensus : l’UNESCO lui-même parle d’une énigme. Retenir qu’une civilisation peut être très bien connue matériellement (villes, outils, échanges) tout en restant muette sur son histoire politique.'
          ],
          example: {
            statement: 'Ordonner les trois phases de la civilisation de l’Indus : Harappéen tardif (vers 1900-1300), phase mature (vers 2600-1900), Harappéen ancien (vers 3300-2600).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 3300 > 2600 > 1900.',
            answer: 'Harappéen ancien, puis phase mature, puis Harappéen tardif.'
          },
          exercise: {
            question: 'La phase mature dure de 2600 à 1900 av. J.-C. Quelle est sa durée approximative ?',
            answer: 'Environ 700 ans (2600 − 1900).'
          },
          exercises: [
            {
              question: 'La phase mature dure de 2600 à 1900 av. J.-C. Quelle est sa durée approximative ?',
              answer: 'Environ 700 ans (2600 − 1900).'
            },
            {
              question: 'Pourquoi ne peut-on pas écrire l’histoire politique de la civilisation de l’Indus ?',
              answer: 'Parce que son écriture n’est pas déchiffrée : on n’a ni listes de rois, ni récits, ni textes administratifs lus. Seule l’archéologie renseigne.'
            },
            {
              question: 'L’UNESCO donne 2500-1500 av. J.-C. pour la civilisation de l’Indus, d’autres sources 2600-1900 pour sa phase mature. Y a-t-il contradiction ?',
              answer: 'Pas nécessairement : les deux fourchettes ne désignent pas forcément la même chose et reposent sur des conventions de datation différentes. Il faut toujours préciser de quelle phase on parle.'
            }
          ],
          sources: [
            { title: 'UNESCO — Archaeological Ruins at Moenjodaro (n° 138)', url: 'https://whc.unesco.org/en/list/138' },
            { title: 'Harappa.com — The Indus Civilization and the Indus script', url: 'https://www.harappa.com/sites/default/files/pdf/indusscript%282%29.pdf' },
            { title: 'Bharat Notes — Indus Valley Civilization (synthèse de cours, à recouper)', url: 'https://bharatnotes.com/subjects/history-culture/ancient-india/indus-valley-civilization/' }
          ]
        }
      } // FIN CHAPITRE indus
      ,
      {
        id: 'grece-antique',
        title: 'Grèce antique : cités, démocratie et guerres',
        field: 'Méditerranée orientale · vers 1200–146 av. J.-C.',
        summary: 'Cités-États, démocratie athénienne, guerres médiques et du Péloponnèse, conquête romaine.',
        lesson: {
          sections: [
            'La Grèce de l’âge du bronze connaît les palais minoens (Crète) puis mycéniens (continent) ; les palais mycéniens sont détruits vers 1200 av. J.-C. Aux siècles suivants se forment les cités-États (poleis) : à partir du milieu du VIIIe siècle av. J.-C. environ, les Grecs fondent des colonies en Sicile et en Italie du Sud. Les premiers Jeux olympiques sont traditionnellement placés en 776 av. J.-C. : c’est une date de tradition.',
            'À Athènes, Solon réforme les lois vers 594 av. J.-C. En 508-507 av. J.-C., Clisthène remanie les institutions et pose les bases de la démocratie athénienne (les sources donnent 509, 508 ou 507 selon les ouvrages). Cette démocratie est directe, mais réservée aux citoyens : elle exclut notamment les femmes, les étrangers et les esclaves.',
            'Les Perses, battus par les Athéniens à Marathon en 490 av. J.-C., reviennent en 480 sous Xerxès : bataille des Thermopyles, puis victoire navale grecque à Salamine (480) et victoire terrestre à Platées (479). Athènes prend la tête de la ligue de Délos (fondée en 478-477). La guerre du Péloponnèse (431-404) oppose l’empire athénien à la ligue du Péloponnèse menée par Sparte ; une peste frappe Athènes dès 430, Périclès meurt en 429, et Athènes capitule en 404.',
            'En 338 av. J.-C., à Chéronée, Philippe II de Macédoine bat les cités grecques coalisées. Son fils Alexandre vainc ensuite le roi perse Darius à Issos puis à Gaugamèles, ce qui met fin à l’empire achéménide. La Grèce passe enfin sous domination romaine : en 146 av. J.-C., les Romains détruisent Corinthe après la défaite de la ligue achéenne.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : fin de la guerre du Péloponnèse (404), bataille de Salamine (480), réformes de Clisthène (508), bataille de Chéronée (338).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 508 > 480 > 404 > 338.',
            answer: 'Clisthène, Salamine, fin de la guerre du Péloponnèse, Chéronée.'
          },
          exercise: {
            question: 'La guerre du Péloponnèse dure de 431 à 404 av. J.-C. Combien d’années ?',
            answer: '27 ans (431 − 404).'
          },
          exercises: [
            {
              question: 'La guerre du Péloponnèse dure de 431 à 404 av. J.-C. Combien d’années ?',
              answer: '27 ans (431 − 404).'
            },
            {
              question: 'Combien d’années séparent les réformes de Clisthène (508) de la bataille de Marathon (490) ?',
              answer: '18 ans (508 − 490).'
            },
            {
              question: 'Un ouvrage date la réforme de Clisthène de 509, un autre de 508-507. Que faire ?',
              answer: 'Ne pas trancher à l’aveugle : écrire « vers 508-507 » et signaler que les sources diffèrent d’un an ou deux sur cette date.'
            }
          ],
          sources: [
            { title: 'Wikipédia (en) — Classical Athens', url: 'https://en.wikipedia.org/wiki/Classical_Athens' },
            { title: 'Heritage History — Timelines of Ancient Greece', url: 'https://www.heritage-history.com/ssl/cds/ancient_greece/html/guide_timeline.html' },
            { title: 'University of Richmond — Fact Sheet, History 221 (dates de l’histoire grecque)', url: 'https://facultystaff.richmond.edu/~wstevens/History221/hist221facts.html' },
            { title: 'Timetrips — Timeline of Greek history before and after Marathon', url: 'https://timetrips.co.uk/marathon%20timeline.htm' }
          ]
        }
      } // FIN CHAPITRE grece
      ,
      {
        id: 'rome-antique',
        title: 'Rome antique : de la Royauté à la chute de l’Occident',
        field: 'Méditerranée · 753 av. J.-C.–476 ap. J.-C.',
        summary: 'Royauté, République, guerres puniques, Empire, partage et chute de l’Empire d’Occident.',
        lesson: {
          sections: [
            'Les Romains attribuent la fondation de leur ville à Romulus en 753 av. J.-C. : c’est une date traditionnelle, issue de la légende. Selon la tradition, sept rois se succèdent ; le dernier, Tarquin le Superbe, est chassé en 509 av. J.-C. et la République est instaurée. On parle donc de trois grandes périodes : la Royauté (753-509), la République (509-27 av. J.-C.) et l’Empire (à partir de 27 av. J.-C.).',
            'Pendant la République, Rome s’impose à la Méditerranée en affrontant Carthage : première guerre punique (264-241 av. J.-C., Rome conquiert la Sicile), deuxième (218-201, Hannibal traverse les Alpes) et troisième (149-146, Carthage est détruite). En 146 av. J.-C. également, Corinthe est détruite et la Grèce passe sous domination romaine.',
            'La République s’achève dans les guerres civiles : Jules César franchit le Rubicon contre Pompée, devient dictateur, puis est assassiné aux ides de mars, en 44 av. J.-C. Octavien l’emporte sur Marc Antoine à Actium en 31 ; l’Égypte devient romaine en 30. En 27 av. J.-C., il reçoit le titre d’Auguste : c’est le début du régime impérial, qu’il dirige jusqu’en 14 ap. J.-C.',
            'En 330 ap. J.-C., Byzance est refondée comme Constantinople. En 395, l’Empire est partagé en deux : l’Empire d’Occident, capitale Rome, et l’Empire d’Orient. En 476, le dernier empereur d’Occident, Romulus Augustule, est déposé par le chef germanique Odoacre : c’est la date traditionnelle de la chute de l’Empire d’Occident. L’Empire d’Orient, dit byzantin, subsiste jusqu’à la prise de Constantinople par les Ottomans en 1453.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : bataille d’Actium (31 av. J.-C.), assassinat de César (44 av. J.-C.), destruction de Carthage (146 av. J.-C.), début de la République (509 av. J.-C.).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 509 > 146 > 44 > 31.',
            answer: 'Début de la République, destruction de Carthage, assassinat de César, Actium.'
          },
          exercise: {
            question: 'La République romaine dure de 509 à 27 av. J.-C. Combien d’années ?',
            answer: '482 ans (509 − 27).'
          },
          exercises: [
            {
              question: 'La République romaine dure de 509 à 27 av. J.-C. Combien d’années ?',
              answer: '482 ans (509 − 27).'
            },
            {
              question: 'Les guerres puniques vont de 264 à 146 av. J.-C. Combien de temps s’écoule entre la première et la fin de la troisième ?',
              answer: '118 ans (264 − 146).'
            },
            {
              question: 'Pourquoi dit-on que 476 est la date « traditionnelle » de la chute de Rome et non la fin de l’Empire romain ?',
              answer: 'Parce que 476 marque la chute de l’Empire d’Occident seulement ; l’Empire d’Orient, ou byzantin, continue jusqu’en 1453.'
            }
          ],
          sources: [
            { title: 'History Hit — Timeline of Ancient Rome', url: 'https://www.historyhit.com/a-concise-chronology-of-ancient-rome-1229-years-of-significant-events/' },
            { title: 'Hands Up Education — Timeline (Suburani)', url: 'https://hands-up-education.org/suburani_full/pdfs/timeline2.pdf' },
            { title: 'Madain Project — Timeline of Ancient Rome', url: 'https://madainproject.com/timeline_of_ancient_rome' }
          ]
        }
      } // FIN CHAPITRE rome
      ,
      {
        id: 'chine-ancienne',
        title: 'Chine ancienne : des Shang aux Han',
        field: 'Asie de l’Est · vers 1600 av. J.-C.–220 ap. J.-C.',
        summary: 'Os oracles, Mandat du Ciel, Confucius, premier empire Qin et dynastie Han.',
        lesson: {
          sections: [
            'La dynastie Shang (vers 1600-1046 av. J.-C.) est la première dynastie chinoise dont l’existence est attestée. La dynastie Xia, qui la précède selon la tradition, reste légendaire pour une partie des sources. Les Shang pratiquent la divination sur des os et des carapaces de tortue : leurs inscriptions comptent parmi les plus anciens témoignages de l’écriture chinoise.',
            'Vers 1046 av. J.-C., le roi Wu de Zhou bat le dernier roi Shang à la bataille de Muye. Les Zhou justifient cette victoire par le Mandat du Ciel : le pouvoir revient à qui gouverne bien et peut être retiré à celui qui gouverne mal. On distingue les Zhou occidentaux (1046-771), puis les Zhou orientaux (770-256), période de morcellement politique qui comprend les époques dites « des Printemps et Automnes » et « des Royaumes combattants » (leurs bornes varient d’un ouvrage à l’autre : 476, 475 ou 481 av. J.-C.). Confucius (551-479 av. J.-C.), né dans le royaume de Lu, vit sous les Zhou orientaux. C’est aussi sous les Zhou qu’apparaît le fer.',
            'En 221 av. J.-C., Ying Zheng, roi de Qin, a vaincu les six autres royaumes : il devient Qin Shi Huang, « premier empereur ». La dynastie Qin (221-206 av. J.-C.) dure moins de vingt ans. Qin Shi Huang meurt en 210 av. J.-C. ; son mausolée comprend l’armée de terre cuite, des milliers de soldats grandeur nature (les estimations varient autour de 7 000 à 8 000).',
            'La dynastie Han suit les Qin : Liu Bang prend le pouvoir et devient l’empereur Gaozu en 202 av. J.-C. (la date de fondation officielle est 206 selon certains ouvrages, 202 selon d’autres). On distingue les Han occidentaux (jusqu’en 9 ap. J.-C.), un intermède de l’usurpateur Wang Mang, puis les Han orientaux (25-220 ap. J.-C.). Au IIe siècle av. J.-C., les Han ouvrent des échanges commerciaux avec l’Ouest, dont celui de la soie. En 220 ap. J.-C., le dernier empereur Han abdique et la Chine entre dans la période des Trois Royaumes.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : conquête des Shang par les Zhou (vers 1046 av. J.-C.), naissance de Confucius (551 av. J.-C.), unification par Qin (221 av. J.-C.), début de la dynastie Han (202 av. J.-C.).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 1046 > 551 > 221 > 202.',
            answer: 'Conquête des Shang, naissance de Confucius, unification par Qin, début des Han.'
          },
          exercise: {
            question: 'La dynastie Qin dure de 221 à 206 av. J.-C. Combien d’années ?',
            answer: '15 ans (221 − 206), soit moins de vingt ans.'
          },
          exercises: [
            {
              question: 'La dynastie Qin dure de 221 à 206 av. J.-C. Combien d’années ?',
              answer: '15 ans (221 − 206), soit moins de vingt ans.'
            },
            {
              question: 'Quelle est la durée de la dynastie Zhou (1046-256 av. J.-C.) ?',
              answer: 'Environ 790 ans (1046 − 256).'
            },
            {
              question: 'Pourquoi trouve-t-on 206 et 202 av. J.-C. pour le début des Han ?',
              answer: 'Parce que les ouvrages ne retiennent pas le même événement : 206 est la date de fondation officielle, 202 celle où Liu Bang prend le contrôle et devient l’empereur Gaozu.'
            }
          ],
          sources: [
            { title: 'Indiana University — Chronologie de l’histoire chinoise', url: 'https://chinatxt.sitehost.iu.edu/History/Time.html' },
            { title: 'World History Edu — Timeline of Ancient China: From the Xia to the Han Dynasty', url: 'https://worldhistoryedu.com/timeline-of-ancient-china-from-the-xia-to-the-han-dynasty/' },
            { title: 'National Gallery of Victoria — Terracotta Warriors, ressource pédagogique', url: 'https://www.ngv.vic.gov.au/wp-content/uploads/2019/05/NGV-RESOURCE-BEFORE_TCW_STUDENT-ACTIVITIES.pdf' }
          ]
        }
      } // FIN CHAPITRE chine
    ] // FIN BRANCHE histoire-des-civilisations
  }, // FIN BRANCHE 2


// ============================================================================
// BRANCHE 3 : « L’Antiquité : empires et monde méditerranéen » (5 chapitres)
// Convention : av. J.-C., plus le nombre est grand, plus la date est ancienne ;
// ap. J.-C., c’est l’inverse. Il n’y a pas d’année 0 (1 av. J.-C. est suivi de 1 ap. J.-C.).
// Les écarts entre sources sont signalés dans le texte plutôt que tranchés.
// ============================================================================
  
  {
    id: 'antiquite',
    sortYear: -800,
    title: 'Empires et monde méditerranéen durant l’antiquité',
    note: 'De l’empire perse à la fin de l’Antiquité tardive : cinq chapitres sur les grands empires, leurs repères chronologiques, leurs sources et les dates discutées.',
    chapters: [
      {
        id: 'empire-achemenide',
        title: 'Empire achéménide : le premier empire perse',
        field: 'Iran et Proche-Orient · 550–330 av. J.-C.',
        summary: 'Cyrus, Darius, satrapies et Persépolis : un empire multiethnique jusqu’à Alexandre.',
        lesson: {
          sections: [
            'L’empire achéménide, ou premier empire perse, est fondé par Cyrus II, dit « le Grand ». Son nom vient d’Achéménès, ancêtre de la dynastie. Les Perses s’installent en Perside, au sud-ouest du plateau iranien, vers le VIIe siècle av. J.-C. Selon la version officielle, Cyrus devient roi de Perside en 559 av. J.-C. et bat son suzerain, le roi des Mèdes Astyage, en 550 : on date donc l’empire de 550 (la date la plus citée) ou de 559 (début du règne). Cyrus soumet ensuite la Lydie et la Babylonie (prise de Babylone en 539, voir le chapitre « Mésopotamie ») ; il meurt vers 530 av. J.-C. (530 ou 529 selon les ouvrages).',
            'Son fils Cambyse II conquiert l’Égypte en 525 av. J.-C. À la mort de Cambyse en 522, Darius Ier, un parent éloigné, prend le trône et règne jusqu’en 486, soit 36 ans : l’empire atteint alors son apogée. Darius l’organise en satrapies, provinces qui servent aussi de circonscriptions fiscales, et standardise poids et mesures. Il fait graver vers 520 av. J.-C. l’inscription de Behistun, grand relief rupestre multilingue (vieux-perse, élamite, babylonien) dont le déchiffrement a servi de clé pour lire le cunéiforme.',
            'Darius fait bâtir Persépolis, capitale cérémonielle de l’empire, et un palais à Suse. Les travaux de Persépolis commencent en 518 av. J.-C. selon la World History Encyclopedia ; d’autres sources placent ses plus anciens vestiges vers 515 : les sources divergent de quelques années. Le site est inscrit au patrimoine mondial de l’UNESCO en 1979.',
            'Sous Darius puis son fils Xerxès Ier (roi dès 486), l’empire affronte les cités grecques : défaite perse à Marathon en 490, puis expédition de Xerxès en 480-479 (voir le chapitre « Grèce antique »). L’expansion de l’empire s’arrête sous le règne de Xerxès.',
            'Alexandre le Grand envahit l’empire en 334 av. J.-C. Le roi Darius III (336-330) est vaincu à Issos en 333 puis à Gaugamèles en 331, et il est assassiné en 330 : cette date marque la fin de l’empire achéménide. Après la mort d’Alexandre, l’essentiel de ses territoires passe aux Ptolémées et aux Séleucides. Retenir : l’empire a duré environ 220 ans (550-330) et rassemblait des peuples très divers ; « perse » désigne ici une dynastie et un empire, pas seulement un peuple.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : bataille de Gaugamèles (331 av. J.-C.), accession de Darius Ier (522), fondation de l’empire par Cyrus (550), conquête de l’Égypte par Cambyse II (525).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 550 > 525 > 522 > 331.',
            answer: 'Fondation par Cyrus, conquête de l’Égypte, accession de Darius Ier, Gaugamèles.'
          },
          exercise: {
            question: 'Darius Ier règne de 522 à 486 av. J.-C. Combien d’années dure son règne ?',
            answer: '36 ans (522 − 486).'
          },
          exercises: [
            {
              question: 'Darius Ier règne de 522 à 486 av. J.-C. Combien d’années dure son règne ?',
              answer: '36 ans (522 − 486).'
            },
            {
              question: 'L’empire achéménide existe de 550 à 330 av. J.-C. Quelle est sa durée approximative ?',
              answer: 'Environ 220 ans (550 − 330).'
            },
            {
              question: 'Une source date le début de Persépolis de 518, une autre ses plus anciens vestiges de 515. Faut-il en retenir une seule ?',
              answer: 'Non : on écrit « vers 518-515 » et on signale que les sources diffèrent de quelques années, au lieu de trancher.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Timeline : Darius I', url: 'https://www.worldhistory.org/timeline/Darius_I/' },
            { title: 'Livius.org — The Achaemenid Empire', url: 'https://www.livius.org/articles/dynasty/achaemenids' },
            { title: 'World History Edu — Achaemenid Empire : Timeline and Major Facts', url: 'https://worldhistoryedu.com/achaemenid-empire-timeline/' }
          ]
        }
      } // FIN CHAPITRE empire-achemenide
      ,
      {
        id: 'pheniciens-et-carthage',
        title: 'Phéniciens et Carthage : marins, alphabet et guerres puniques',
        field: 'Méditerranée · XIe siècle–146 av. J.-C.',
        summary: 'Cités phéniciennes, alphabet de 22 lettres, fondation de Carthage et lutte contre Rome.',
        lesson: {
          sections: [
            'Les Phéniciens occupent la bande côtière entre la Méditerranée et les montagnes du Liban. Ils ne forment pas un État unique mais un ensemble de cités concurrentes, dont Tyr, Byblos et Sidon, et sont surtout des commerçants et des navigateurs. Les mots grecs et latins qui désignent leurs descendants de Carthage (Phoinix, Punicus) ont donné l’adjectif « punique ».',
            'Selon l’Encyclopaedia Britannica, l’alphabet phénicien dérive de l’alphabet nord-sémitique : il compte 22 lettres, s’écrit de droite à gauche et ne note que les consonnes (c’est un abjad). Chaque signe note un son, et non un mot ou une syllabe, ce qui le distingue du cunéiforme. La plus ancienne inscription phénicienne conservée est l’épitaphe d’Ahiram, à Byblos (XIe siècle av. J.-C.). Cet alphabet est l’ancêtre probable de l’alphabet grec, donc de tous les alphabets occidentaux ; il est employé en Phénicie jusque vers le Ier siècle av. J.-C.',
            'Selon la tradition romaine, Carthage (en phénicien Qart-hadasht, « ville nouvelle ») est fondée vers 814 av. J.-C. par des colons de Tyr conduits par la reine Élissa, dite Didon. La date de 814 est traditionnelle et l’historicité de Didon est discutée, mais la fondation est située à cette époque. La ville grandit surtout après la destruction de Tyr, sa métropole, par Alexandre en 332 av. J.-C. : des réfugiés phéniciens y affluent. Elle domine des colonies en Afrique du Nord, en Sicile et en Espagne.',
            'Rome et Carthage s’affrontent dans trois guerres, dites puniques (264-146 av. J.-C.). Première guerre (264-241) : Carthage cède la Sicile, première province romaine hors d’Italie. Deuxième guerre (218-201) : Hannibal, qui commande l’armée de Carthage en Espagne depuis 221, envahit l’Italie par les Alpes et l’emporte à Cannes en 216 ; Scipion l’Africain porte la guerre en Afrique (204) et le bat à Zama le 19 octobre 202 (on trouve 218-202 ou 218-201 pour cette guerre ; la bataille de Zama est bien de 202). Troisième guerre (149-146) : Carthage, assiégée, est détruite en 146.',
            'Après 146, le territoire de Carthage devient la province romaine d’Afrique ; History.com indique qu’environ 50 000 survivants sont vendus comme esclaves. La ville est ensuite refondée par les Romains et reste une grande cité de l’Empire (Carthage romaine, de 146 av. J.-C. à 439 ap. J.-C. selon la World History Encyclopedia). Le punique, lui, continue d’être écrit jusque vers le IIIe siècle ap. J.-C.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : bataille de Zama (202 av. J.-C.), destruction de Tyr par Alexandre (332), destruction de Carthage (146), fondation traditionnelle de Carthage (vers 814).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 814 > 332 > 202 > 146.',
            answer: 'Fondation de Carthage, destruction de Tyr, bataille de Zama, destruction de Carthage.'
          },
          exercise: {
            question: 'La première guerre punique dure de 264 à 241 av. J.-C. Combien d’années ?',
            answer: '23 ans (264 − 241).'
          },
          exercises: [
            {
              question: 'La première guerre punique dure de 264 à 241 av. J.-C. Combien d’années ?',
              answer: '23 ans (264 − 241).'
            },
            {
              question: 'Combien d’années séparent la fondation traditionnelle de Carthage (vers 814) de sa destruction (146) ?',
              answer: 'Environ 668 ans (814 − 146).'
            },
            {
              question: 'Pourquoi trouve-t-on 218-202 et 218-201 pour la deuxième guerre punique ?',
              answer: 'Les ouvrages ne s’accordent pas sur la borne de fin ; la bataille décisive de Zama est de 202. On signale l’écart au lieu de trancher.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Timeline : Carthage', url: 'https://worldhistory.org/timeline/carthage' },
            { title: 'History.com — Punic Wars', url: 'https://www.history.com/articles/punic-wars' },
            { title: 'Encyclopaedia Britannica — Phoenician alphabet', url: 'https://www.britannica.com/print/article/457154' },
            { title: 'Vikidia — Phéniciens (synthèse pédagogique, à recouper)', url: 'https://fr.vikidia.org/wiki/Ph%C3%A9niciens' }
          ]
        }
      } // FIN CHAPITRE pheniciens-et-carthage
      ,
      {
        id: 'alexandre-et-hellenisme',
        title: 'Alexandre le Grand et le monde hellénistique',
        field: 'Méditerranée orientale et Asie · 336–30 av. J.-C.',
        summary: 'Conquête de l’empire perse, Diadoques, royaumes hellénistiques et Alexandrie.',
        lesson: {
          sections: [
            'Alexandre III de Macédoine naît en juillet 356 av. J.-C. à Pella, fils de Philippe II et d’Olympias ; Aristote est son précepteur. Il devient roi en 336 av. J.-C., à 20 ans, après l’assassinat de son père (voir le chapitre « Grèce antique » pour Chéronée, en 338).',
            'Au printemps 334, Alexandre passe en Asie. Il bat les Perses au Granique (mai 334), puis Darius III à Issos (333) et à Gaugamèles (1er octobre 331). Il assiège Tyr en 332 et passe en Égypte (332-331 selon les sources), où il fonde Alexandrie en 331. Darius est assassiné en 330 ; Alexandre poursuit jusqu’en Inde, où il bat le roi Poros à l’Hydaspe (326). Il meurt à Babylone en juin 323 av. J.-C., à 32 ans : les sources donnent le 10, 11, 12 ou 13 juin.',
            'À sa mort, son empire éclate entre ses généraux, les Diadoques (« successeurs »), qui se font la guerre pendant des décennies. En 312, Séleucos prend Babylone et fonde la dynastie séleucide. En 301, à Ipsos (Phrygie), Lysimaque et Séleucos battent Antigone Ier, qui est tué : l’espoir de réunifier l’empire disparaît. Trois grands royaumes dominent alors : les Ptolémées en Égypte (305-30), les Séleucides au Proche-Orient (312-63) et les Antigonides en Macédoine et en Grèce (276-168).',
            'Ces monarchies mêlent traditions grecques et locales, et la culture grecque se diffuse sur la Méditerranée et en Asie occidentale. Alexandrie, capitale des Ptolémées, devient un centre intellectuel avec le Mouseion et sa Bibliothèque, au IIIe siècle av. J.-C. Selon la World History Encyclopedia, l’idée vient de Ptolémée Ier Sôter et la construction date de Ptolémée II Philadelphe ; d’autres sources attribuent la fondation à Ptolémée Ier, et les dates de règne varient de quelques années. Zénodote en est le premier bibliothécaire ; Pergame, sous les Attalides, a sa propre bibliothèque.',
            'On date l’époque hellénistique de 323 (mort d’Alexandre) à 31 av. J.-C. (bataille d’Actium) ou 30 (mort de Cléopâtre VII et annexion de l’Égypte par Rome). D’autres bornes sont proposées : 146 (Corinthe détruite), 330 ap. J.-C. (Constantinople), voire 138 ap. J.-C. (mort d’Hadrien). « Hellénistique » ne désigne pas la seule Grèce, mais tous les territoires sous influence grecque, en particulier le Proche-Orient hellénisé après les conquêtes d’Alexandre.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : bataille d’Ipsos (301 av. J.-C.), mort d’Alexandre (323), bataille du Granique (334), bataille de Gaugamèles (331).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 334 > 331 > 323 > 301.',
            answer: 'Granique, Gaugamèles, mort d’Alexandre, Ipsos.'
          },
          exercise: {
            question: 'Alexandre règne de 336 à 323 av. J.-C. Combien d’années dure son règne ?',
            answer: '13 ans (336 − 323).'
          },
          exercises: [
            {
              question: 'Alexandre règne de 336 à 323 av. J.-C. Combien d’années dure son règne ?',
              answer: '13 ans (336 − 323).'
            },
            {
              question: 'Combien d’années séparent la bataille d’Issos (333) de celle d’Ipsos (301) ?',
              answer: '32 ans (333 − 301).'
            },
            {
              question: 'Pourquoi trouve-t-on 31 et 30 av. J.-C. pour la fin de l’époque hellénistique ?',
              answer: '31 est la date de la bataille d’Actium, 30 celle de l’annexion de l’Égypte par Rome après la mort de Cléopâtre VII. Les deux marquent la fin de l’époque selon l’événement choisi.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Timeline : Alexander the Great', url: 'https://www.worldhistory.org/timeline/Alexander_the_Great' },
            { title: 'University of Warwick — Chronology of Alexander’s Reign', url: 'https://warwick.ac.uk/fac/arts/classics/intranets/students/modules/alex/chronology' },
            { title: 'World History Encyclopedia — Timeline : Hellenistic Period', url: 'https://worldhistory.org/timeline/Hellenistic_Period' },
            { title: 'Penn Museum — Hellenistic Period (323-31 av. J.-C.)', url: 'https://penn.museum/sites/greek_world/time-06.html' },
            { title: 'World History Encyclopedia — Library of Alexandria', url: 'https://www.worldhistory.org/audioplayer/en/1-10883/' }
          ]
        }
      } // FIN CHAPITRE alexandre-et-hellenisme
      ,
      {
        id: 'empire-romain-principat',
        title: 'Empire romain : du Principat à la crise du IIIe siècle',
        field: 'Empire romain · 27 av. J.-C.–284 ap. J.-C.',
        summary: 'Auguste, Julio-Claudiens, apogée sous Trajan, citoyenneté de 212 et crise du IIIe siècle.',
        lesson: {
          sections: [
            'En 27 av. J.-C., Octavien reçoit le titre d’Auguste : c’est le début du régime impérial, ou Principat (voir le chapitre « Rome antique »). Les provinces sont réparties entre Auguste et le Sénat ; Auguste garde notamment l’Espagne, la Gaule, la Syrie et l’Égypte. Il meurt en 14 ap. J.-C. et son beau-fils Tibère lui succède. Les Julio-Claudiens règnent jusqu’en 68 : Tibère (14-37), Caligula (37-41, assassiné), Claude (41-54), Néron (54-68).',
            'Claude lance en 43 ap. J.-C. la conquête de la Bretagne (l’Angleterre actuelle). Une révolte menée par la reine Boudicca éclate vers 60-61. En 64, un grand incendie ravage Rome sous Néron. Néron est chassé en 68 ; l’année 69 est celle des quatre empereurs (Galba, Othon, Vitellius, Vespasien) et Vespasien l’emporte. En 79, sous Titus, l’éruption du Vésuve détruit Pompéi et Herculanum.',
            'Le IIe siècle est celui de l’apogée : Nerva, Trajan, Hadrien, Antonin le Pieux et Marc Aurèle se succèdent. Sous Trajan (98-117), l’Empire atteint sa plus grande extension en 117, avec la Dacie, l’Arménie et la Mésopotamie ; Hadrien (117-138) rend l’Arménie et la Mésopotamie aux Parthes et consolide les frontières. Le mur d’Hadrien, en Bretagne, est commencé en 122 (les travaux sont datés de 122-127 dans certains atlas) ; sous Antonin le Pieux, le mur d’Antonin est bâti plus au nord, en Écosse (vers 142).',
            'En 212, Caracalla accorde la citoyenneté romaine à tous les hommes libres de l’Empire (édit appelé Constitutio Antoniniana). La distinction entre citoyens et sujets des provinces s’efface ainsi presque entièrement.',
            'De 235 à 284 ap. J.-C., l’Empire traverse une période d’instabilité, dite crise du IIIe siècle ou anarchie militaire : empereurs qui se succèdent, guerres civiles et menaces extérieures. L’empereur Valérien est capturé par les Perses vers 259-260. Deux sécessions apparaissent : l’empire gaulois (260-274) et l’empire de Palmyre (260-272). L’ordre est rétabli sous Dioclétien, qui prend le pouvoir en 284 (voir le chapitre « Antiquité tardive »).'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : édit de Caracalla (212 ap. J.-C.), mur d’Hadrien (122), éruption du Vésuve (79), mort d’Auguste (14).',
            calculation: 'Après J.-C., c’est l’inverse de l’avant J.-C. : plus le nombre est petit, plus la date est ancienne : 14 < 79 < 122 < 212.',
            answer: 'Mort d’Auguste, Vésuve, mur d’Hadrien, édit de Caracalla.'
          },
          exercise: {
            question: 'Trajan règne de 98 à 117 ap. J.-C. Combien d’années dure son règne ?',
            answer: '19 ans (117 − 98).'
          },
          exercises: [
            {
              question: 'Trajan règne de 98 à 117 ap. J.-C. Combien d’années dure son règne ?',
              answer: '19 ans (117 − 98).'
            },
            {
              question: 'Combien d’années séparent le titre d’Auguste (27 av. J.-C.) de sa mort (14 ap. J.-C.) ?',
              answer: '40 ans : 27 + 14 − 1, car il n’y a pas d’année 0 entre 1 av. J.-C. et 1 ap. J.-C.'
            },
            {
              question: 'La crise du IIIe siècle dure de 235 à 284. Quelle est sa durée ?',
              answer: '49 ans (284 − 235).'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Timeline : Roman Empire', url: 'https://worldhistory.org/timeline/Roman_Empire' },
            { title: 'Heritage History — Height of the Empire, timeline 14 à 235 ap. J.-C. (PDF)', url: 'https://catholic.heritage-history.com/site/hclass/ancient_rome/empire/timeline.pdf' },
            { title: 'Tacitus.nu — Historical Atlas of Rome', url: 'https://www.tacitus.nu/historical-atlas/rome2.htm' },
            { title: 'Classics Unveiled — Roman Historical Timelines (à recouper)', url: 'https://www.classicsunveiled.com/romeh/html/timelines2.html' }
          ]
        }
      } // FIN CHAPITRE empire-romain-principat
      ,
      {
        id: 'antiquite-tardive',
        title: 'Antiquité tardive : de Dioclétien à Justinien',
        field: 'Empire romain tardif · 284–565 ap. J.-C.',
        summary: 'Tétrarchie, Constantin, christianisme, invasions, chute de l’Occident et Justinien.',
        lesson: {
          sections: [
            'Dioclétien règne de 284 à 305 ap. J.-C. et met fin à la crise du IIIe siècle. Il établit vers 293 la tétrarchie, un gouvernement à plusieurs empereurs, et persécute les chrétiens ; il abdique en 305. En 311, l’empereur Galerius publie à Nicomédie un édit de tolérance qui met fin à ces persécutions.',
            'Constantin, proclamé Auguste par ses légions en 306, bat Maxence au pont Milvius en 312, puis devient seul empereur en 324 ; il meurt en 337. En 313, un texte appelé traditionnellement « édit de Milan » accorde la liberté religieuse aux chrétiens. Mais les historiens notent qu’il ne s’agit pas d’un édit : la version conservée est une lettre de l’empereur Licinius aux gouverneurs de l’Orient, affichée à Nicomédie le 13 juin 313. Le texte légalise le culte chrétien sans faire du christianisme la religion de l’État. Le concile de Nicée (325) traite de la querelle arienne et produit le Credo de Nicée ; Constantinople est inaugurée comme capitale en 330.',
            'En 378, à Andrinople, les Goths battent l’armée romaine et tuent l’empereur Valens. Théodose Ier règne de 379 à 395. Par l’édit de Thessalonique, le 27 février 380, il fait du christianisme nicéen la religion de l’État ; un concile à Constantinople confirme le Credo de Nicée en 381. À sa mort, en 395, l’Empire est partagé de façon durable entre Orient et Occident.',
            'En Occident, les invasions se multiplient. Les Wisigoths d’Alaric pillent Rome en 410 ; les Vandales commencent en 429 la conquête de l’Afrique du Nord, puis pillent Rome en 455. Le 4 septembre 476, selon la date traditionnelle, le chef germanique Odoacre dépose Romulus Augustule, dernier empereur d’Occident (seule l’année 476 est à retenir). En 493, Théodoric fonde un royaume ostrogoth en Italie.',
            'En Orient, Justinien Ier règne de 527 à 565. Son Code (Codex Justinianus) paraît en première version en 529 et en version définitive en 534 ; le Digeste, recueil de textes juridiques plus anciens, date de 533, et l’ensemble forme le Corpus iuris civilis. Il fait reconquérir l’Afrique vandale en 533-534 et construire Sainte-Sophie à Constantinople de 532 à 537. Comme pour d’autres périodes, les bornes de l’Antiquité tardive sont discutées : on retient 476 comme date traditionnelle, mais certains historiens prolongent la période jusqu’à la fin du VIe siècle, avec Justinien.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : sac de Rome par Alaric (410 ap. J.-C.), concile de Nicée (325), bataille d’Andrinople (378), publication du Code de Justinien (529), chute de l’Empire d’Occident (476).',
            calculation: 'Après J.-C., plus le nombre est petit, plus la date est ancienne : 325 < 378 < 410 < 476 < 529.',
            answer: 'Nicée, Andrinople, sac de Rome, chute de l’Occident, Code de Justinien.'
          },
          exercise: {
            question: 'Combien d’années séparent l’inauguration de Constantinople (330) de la chute de l’Empire d’Occident (476) ?',
            answer: '146 ans (476 − 330).'
          },
          exercises: [
            {
              question: 'Combien d’années séparent l’inauguration de Constantinople (330) de la chute de l’Empire d’Occident (476) ?',
              answer: '146 ans (476 − 330).'
            },
            {
              question: 'Combien d’années séparent la lettre de Licinius, dite « édit de Milan » (313), de l’édit de Thessalonique (380) ?',
              answer: '67 ans (380 − 313).'
            },
            {
              question: 'Pourquoi dit-on que l’« édit de Milan » n’a pas fait du christianisme la religion de l’État ?',
              answer: 'Parce qu’il accorde seulement la liberté de culte, sans privilège officiel. C’est l’édit de Thessalonique, en 380, qui fait du christianisme nicéen la religion de l’État.'
            }
          ],
          sources: [
            { title: 'Wikipédia (en) — Edict of Milan', url: 'https://en.wikipedia.org/wiki/Edict_of_Milan' },
            { title: 'Wikipédia (en) — Edict of Thessalonica', url: 'https://en.wikipedia.org/wiki/Edict_of_Thessalonica' },
            { title: 'Heritage History — Fall of the West, timeline 235 à 565 (PDF)', url: 'https://catholic.heritage-history.com/site/hclass/ancient_rome/fall/timeline.pdf' },
            { title: 'McKay, A History of Western Society — Chronologie du chapitre 7', url: 'https://digfir-published.macmillanusa.com/mckaywest12e/asset/chrono/chrono_ch7.html' },
            { title: 'SparkNotes — Timeline : la chute de Rome', url: 'https://sparknotes.com/history/european/rome4/timeline' },
            { title: 'Vikidia — Justinien Ier (synthèse pédagogique, à recouper)', url: 'https://fr.vikidia.org/wiki/Justinien_Ier' }
          ]
        }
      } // FIN CHAPITRE antiquite-tardive
    ] // FIN BRANCHE antiquite
  }, // FIN BRANCHE 3 

// ============================================================================
// BRANCHE 4 : « Asie centrale et routes de la soie » (6 chapitres)

// Convention : av. J.-C., plus le nombre est grand, plus la date est ancienne ;
// ap. J.-C., c’est l’inverse. Toute date av. J.-C. précède toute date ap. J.-C.
// Il n’y a pas d’année 0 (1 av. J.-C. est suivi de 1 ap. J.-C.).
// Les écarts entre sources sont signalés dans le texte plutôt que tranchés.
// ============================================================================

  {
    id: 'asie-centrale',
    sortYear: -130,
    title: 'Asie centrale et routes de la soie',
    note: 'Des Scythes à Timur : six chapitres sur l’Asie centrale (steppes, oasis et routes de la soie), leurs repères chronologiques, leurs sources et les dates discutées.',
    chapters: [
      {
        id: 'asie-centrale-alexandre',
        title: 'Asie centrale : d’Alexandre aux Mongols et à Timur',
        field: 'Asie centrale · IVe siècle av. J.-C.–XVe siècle ap. J.-C.',
        summary: 'Alexandre en Sogdiane, royaume gréco-bactrien, mission de Zhang Qian, routes de la soie, empire mongol et Timur.',
        lesson: {
          sections: [
            'L’Asie centrale est un vaste espace de steppes, de déserts, de montagnes et d’oasis, situé entre la Chine, l’Inde, l’Iran et la Méditerranée. Ses limites varient selon les époques et les auteurs ; ce chapitre suit surtout la Bactriane (Afghanistan actuel), la Sogdiane et la vallée de Ferghana (Ouzbékistan et Tadjikistan actuels) et la Transoxiane, région à peu près équivalente à l’Ouzbékistan actuel selon la World History Encyclopedia. Il court d’Alexandre à Timur : il couvre donc l’Antiquité et le Moyen Âge, d’où des dates avant et après J.-C. dans la même leçon.',
            'La Sogdiane est l’angle nord-est de l’empire achéménide quand Alexandre arrive (voir les chapitres « Empire achéménide » et « Alexandre le Grand et le monde hellénistique »). En 329 av. J.-C., il atteint le Iaxarte (Syr-Daria) et bat en octobre les Saces, nomades de l’autre rive. Il fonde alors Alexandrie Eschaté (« Alexandrie la Plus Lointaine »), près de Khodjent, dans le Tadjikistan actuel, sur le site de la ville de Cyropolis. L’année 329 est bien établie, mais le mois varie (juillet dans la chronologie de la World History Encyclopedia, août selon Wikipédia). Le texte de cet article donne même 339, ce qui est impossible : Alexandre n’entre en Asie qu’en 334.',
            'Vers 250 av. J.-C., Diodote, satrape de Bactriane, se révolte contre le pouvoir séleucide : c’est le début du royaume gréco-bactrien, qui dure jusque vers 130 av. J.-C. Vers 230, Euthydème renverse la dynastie de Diodote et étend son territoire vers la Sogdiane et la Ferghana. Le séleucide Antiochos III assiège Bactres, puis reconnaît Euthydème comme roi en 206 (la World History Encyclopedia place le siège vers 208-206 dans sa chronologie, vers 210 dans le texte de l’article, et date ailleurs le règne d’Euthydème de 260 à 195 : on écrit donc « vers »). Vers 171, Eucratide renverse le roi en place ; il est assassiné par son fils en 145, et les Yuezhi, nomades, prennent le contrôle de la Bactriane vers 130. Des rois gréco-bactriens règnent aussi plus au sud-est, en Inde du Nord-Ouest : ce sont les royaumes indo-grecs, qui apparaissent vers 190.',
            'Les Han (voir le chapitre « Chine ancienne ») sont harcelés par les Xiongnu, nomades du nord et de l’ouest. En 138 av. J.-C., l’empereur Wu envoie Zhang Qian chez les Yuezhi chercher une alliance contre eux. Capturé et retenu une dizaine d’années par les Xiongnu, Zhang Qian revient après treize ans d’absence, selon l’Encyclopaedia Britannica, avec le premier récit fiable sur la Ferghana, la Bactriane et la Sogdiane ; ses informations ouvrent la voie à des échanges d’ambassades entre les Han et ces États. La World History Encyclopedia fixe l’ouverture officielle des routes de la soie à 130 av. J.-C. : c’est une convention, car des routes existaient déjà (la route royale perse sous les Achéménides, par exemple). Les Parthes, maîtres de la Mésopotamie vers 129 selon cette encyclopédie, deviennent les principaux intermédiaires entre la Chine et l’Occident, et la soie est très recherchée à Rome sous Auguste. L’expression elle-même est récente : « Seidenstrasse » est forgée en 1877 par le géographe allemand Ferdinand von Richthofen, et les historiens préfèrent le pluriel (« routes de la soie »), car il ne s’agit pas d’une route unique.',
            'Né vers 1162, Temüdjin est reconnu Gengis Khan, « souverain universel », par une assemblée de chefs (kurultai) en 1206 : c’est la date de naissance de l’empire mongol (1206-1368). Son armée attaque l’empire khorezmien, en Asie centrale, à partir de 1218 (World History Encyclopedia) ou de 1219 (autres sources) ; Boukhara et Samarcande sont prises au début de 1220, et l’empire khorezmien s’effondre en 1220-1221. Gengis Khan meurt en 1227. Il avait partagé son empire entre ses fils : le khanat de Djaghataï (vers 1227-1363), le plus resté fidèle à ses racines nomades selon la World History Encyclopedia, domine l’Asie centrale. Tamerlan naît en 1336 près de Samarcande, alors dans ce khanat : il prend la Transoxiane avec Amir Husayn en 1366, puis en détient seul le pouvoir vers 1370, date de la fondation de l’empire timouride (1370-1507), dont Samarcande est la capitale. Il bat la Horde d’Or sur le Terek le 14 avril 1395, pille Delhi en 1398-1399, et meurt à Otrar (Kazakhstan actuel) le 19 février 1405, en route pour attaquer la Chine des Ming. Son tombeau, le Gur-e Mir, est à Samarcande. Retenir : l’Asie centrale est un carrefour dont l’histoire se lit à travers ses conquérants, ses routes et ses villes, et les dates anciennes y dépendent de chronologies qui divergent de quelques années.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : mort de Timur (1405 ap. J.-C.), fondation d’Alexandrie Eschaté (329 av. J.-C.), mission de Zhang Qian (138 av. J.-C.), proclamation de Gengis Khan (1206 ap. J.-C.).',
            calculation: 'Toute date avant J.-C. précède toute date après J.-C. Avant J.-C., plus le nombre est grand, plus la date est ancienne : 329 > 138. Après J.-C., plus le nombre est petit, plus la date est ancienne : 1206 < 1405.',
            answer: 'Alexandrie Eschaté, mission de Zhang Qian, proclamation de Gengis Khan, mort de Timur.'
          },
          exercise: {
            question: 'Le khanat de Djaghataï dure d’environ 1227 à 1363 ap. J.-C. Quelle est sa durée approximative ?',
            answer: 'Environ 136 ans (1363 − 1227).'
          },
          exercises: [
            {
              question: 'Le khanat de Djaghataï dure d’environ 1227 à 1363 ap. J.-C. Quelle est sa durée approximative ?',
              answer: 'Environ 136 ans (1363 − 1227).'
            },
            {
              question: 'Combien d’années séparent le départ de Zhang Qian (138 av. J.-C.) de la proclamation de Gengis Khan (1206 ap. J.-C.) ?',
              answer: '1 343 ans : 138 + 1206 − 1, car il n’y a pas d’année 0 entre 1 av. J.-C. et 1 ap. J.-C.'
            },
            {
              question: 'Un article donne 339 av. J.-C. pour la fondation d’Alexandrie Eschaté, d’autres sources 329. Laquelle retenir et pourquoi ?',
              answer: '329 av. J.-C. : c’est la date donnée par la chronologie de l’encyclopédie elle-même et par les autres sources, et 339 est impossible, car Alexandre n’entre en Asie qu’en 334. Quand une source se contredit, on le signale plutôt que de recopier la date.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Silk Road', url: 'https://www.worldhistory.org/Silk_Road/' },
            { title: 'World History Encyclopedia — Greco-Bactrian Kingdom', url: 'https://www.worldhistory.org/Greco-Bactria/' },
            { title: 'World History Encyclopedia — Mongol Empire', url: 'https://www.worldhistory.org/Mongol_Empire/' },
            { title: 'World History Encyclopedia — Timur', url: 'https://www.worldhistory.org/Timur/' },
            { title: 'Encyclopaedia Britannica — Zhang Qian', url: 'https://www.britannica.com/biography/Zhang-Qian' },
            { title: 'Wikipédia (en) — Alexandria Eschate', url: 'https://en.wikipedia.org/wiki/Alexandria_Eschate' },
            { title: 'Wikipédia (en) — Syr Darya', url: 'https://en.wikipedia.org/wiki/Syr_Darya' },
            { title: 'Wikipédia (en) — Mongol invasion of Khorasan', url: 'https://en.wikipedia.org/wiki/Mongol_invasion_of_Khorasan' }
          ]
        }
      } // FIN CHAPITRE alexandre
      ,
      {
        id: 'scythes-et-saces',
        title: 'Scythes et Saces : les nomades de la steppe',
        field: 'Steppe eurasiatique · VIIe siècle av. J.-C.–IVe siècle ap. J.-C.',
        summary: 'Cavaliers-archers, kurgans, art animalier, Alexandre au Iaxarte et migrations des Saces.',
        lesson: {
          sections: [
            'Les Scythes sont un peuple nomade dont la culture s’épanouit du VIIe au IIIe siècle av. J.-C. (World History Encyclopedia), sur un territoire qui va de la Thrace aux monts Altaï, soit environ 4 000 km de long. Éleveurs et cavaliers, ils vivent surtout dans des chariots couverts et forment une confédération de tribus et de chefs plutôt qu’un État. On distingue en général quatre groupes : les Scythes pontiques, autour de la mer Noire ; les Sarmates, entre la Caspienne, le Don et la Volga ; les Massagètes, dans la steppe désertique d’Asie centrale ; et les Saces (Sakā), dans l’est de l’Asie centrale. Leurs origines sont discutées : Hérodote les fait venir d’Asie, Diodore de Sicile d’Arménie, et des fouilles à Touva (Altaï) datent un habitat scythe de la fin du IXe siècle av. J.-C.',
            'Archers à cheval, les Scythes passent pour insaisissables et leurs services sont recherchés. Des archers saces combattent avec les Perses à Marathon (490 av. J.-C.) et à Platées (479), et des Scythes figurent dans l’armée de Darius III à Gaugamèles (331) (voir les chapitres « Empire achéménide » et « Grèce antique »). Ils tiennent aussi tête à Darius Ier, qui les poursuit sans parvenir à les affronter en bataille et doit se retirer. La chronologie de la World History Encyclopedia donne 520 av. J.-C. dans une entrée et vers 513-512 dans une autre pour les campagnes de Darius contre les Scythes : on écrit « vers » et on signale l’écart. Le roi des Scythes pontiques Ateas, dont l’encyclopédie donne les dates de vie 429-339, meurt en 339 face à Philippe II de Macédoine.',
            'En 329 av. J.-C., Alexandre atteint le Iaxarte (Syr-Daria) et y bat les Scythes (Saces) : la World History Encyclopedia parle d’une bataille décisive, et Wikipédia la date d’octobre 329 (voir le chapitre « Asie centrale : d’Alexandre aux Mongols et à Timur »). Après la mort d’Ateas, cette défaite entame leur réputation d’invincibilité. Vers 300 av. J.-C., selon la chronologie de l’encyclopédie, les Sarmates conquièrent les Scythes.',
            'Ce que l’on sait des Scythes vient d’auteurs antiques, surtout Hérodote, et des fouilles de kurgans (tertres funéraires). On y trouve de l’or travaillé, un art animalier (cerfs, félins, scènes de proie), des textiles et des instruments de musique ; la chronologie de l’encyclopédie situe les riches sépultures vers 500-300 av. J.-C. Dans les tombes gelées de l’Altaï (Pazyryk), on a retrouvé des vêtements et des tatouages d’animaux sur la peau. En 1993, une tombe de femme riche, entourée de six chevaux sellés, est fouillée à Ak-Alakha, sur le plateau d’Oukok. Barry Cunliffe, cité par l’encyclopédie, compte plus de quarante tombes de guerrières en territoire scythe.',
            'Au IIe siècle av. J.-C., la confédération des Yuezhi quitte l’ouest de la Mongolie et de la Chine actuelles et repousse les Saces hors des steppes du Kazakhstan actuel. Les Saces migrent alors vers les domaines parthe et grec ; certains atteignent l’Inde, où ils forment la culture dite indo-scythe. Vers 145 av. J.-C., Eucratidie est prise par les Saces, puis détruite vers 139 par les Yuezhi (chronologie de l’encyclopédie). Les Scythes disparaissent des sources au IVe siècle ap. J.-C., après les coups des Huns et leur assimilation par les Goths ; il n’y a pas de consensus savant sur leurs descendants. Retenir : « Scythes » désigne un ensemble de peuples nomades (pontiques, sarmates, massagètes, saces), pas un seul peuple.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : bataille du Iaxarte (329 av. J.-C.), bataille de Marathon (490), mort d’Ateas (339), campagne de Darius Ier contre les Scythes (vers 513-512).',
            calculation: 'Avant J.-C., plus le nombre est grand, plus la date est ancienne : 513 > 490 > 339 > 329.',
            answer: 'Campagne de Darius Ier, Marathon, mort d’Ateas, bataille du Iaxarte.'
          },
          exercise: {
            question: 'La World History Encyclopedia donne à Ateas les dates de vie 429-339 av. J.-C. Quel âge aurait-il eu à sa mort ?',
            answer: 'Environ 90 ans (429 − 339).'
          },
          exercises: [
            {
              question: 'La World History Encyclopedia donne à Ateas les dates de vie 429-339 av. J.-C. Quel âge aurait-il eu à sa mort ?',
              answer: 'Environ 90 ans (429 − 339).'
            },
            {
              question: 'La culture scythe s’épanouit du VIIe au IIIe siècle av. J.-C. (vers 700-300). Quelle est sa durée approximative ?',
              answer: 'Environ 400 ans (700 − 300).'
            },
            {
              question: 'Une même encyclopédie date la campagne de Darius contre les Scythes de 520 puis de vers 513-512. Que faire, et quel est l’écart ?',
              answer: 'L’écart est d’environ 7 ans (520 − 513). On n’en retient pas une seule à l’aveugle : on écrit « vers 513-512 » et on signale que la chronologie donne aussi 520.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Scythians', url: 'https://www.worldhistory.org/Scythians/' },
            { title: 'World History Encyclopedia — Ancient Afghanistan', url: 'https://www.worldhistory.org/Ancient_Afghanistan/' },
            { title: 'Wikipédia (en) — Syr Darya', url: 'https://en.wikipedia.org/wiki/Syr_Darya' }
          ]
        }
      } // FIN CHAPITRE scythes-et-saces
      ,
      {
        id: 'kouchans',
        title: 'Kouchans : des Yuezhi à l’empire de Kanishka',
        field: 'Bactriane, Gandhara, nord de l’Inde · IIe siècle av. J.-C.–IVe siècle ap. J.-C.',
        summary: 'Yuezhi, Kujula Kadphises, Kanishka, bouddhisme et débat sur la date de l’ère de Kanishka.',
        lesson: {
          sections: [
            'Les Yuezhi sont une confédération de tribus nomades qui, au début du IIe siècle av. J.-C., quittent l’ouest de la Mongolie et de la Chine actuelles. En route vers le sud-ouest, ils repoussent les Saces hors des steppes du Kazakhstan (voir le chapitre « Scythes et Saces »). En 138 av. J.-C., l’empereur Wu de Han envoie Zhang Qian les chercher (voir le chapitre « Asie centrale : d’Alexandre aux Mongols et à Timur »). Les Yuezhi prennent le contrôle de la Bactriane vers 130 av. J.-C. ; selon la World History Encyclopedia, l’autorité grecque dans la région cède vers 10 ap. J.-C. face aux Yuezhi, aux (Indo-)Scythes et aux (Indo-)Parthes.',
            'Les Kouchans sont l’une des tribus yuezhi ; l’une d’elles finit par dominer les autres. Pour l’empire kouchan, la World History Encyclopedia part du règne de Kujula Kadphises (vers 30-80 ap. J.-C.) et date l’empire de 30 à 375 ap. J.-C. Elle précise que l’essentiel de ce que l’on sait vient des monnaies et des sources chinoises. Les Kouchans adoptent des éléments de la culture hellénistique de Bactriane ; dans leur empire coexistent zoroastrisme, cultes grecs, religions iraniennes, hindouisme et bouddhisme.',
            'Kanishka le Grand règne vers 127-150 ap. J.-C. : c’est l’apogée de l’empire, qui s’étend du Gandhara jusqu’à la plaine du Gange (Pataliputra) selon Wikipédia, et peut-être jusqu’en Chine selon la World History Encyclopedia. Mécène du bouddhisme, il remplace vers 127 le grec par le bactrien comme langue de l’administration, mais ses monnaies gardent une écriture grecque modifiée. À son apogée, l’empire est un lieu d’échanges entre la Chine des Han et l’Empire romain par les routes de la soie.',
            'La date de Kanishka est l’un des grands débats de la chronologie kouchane : ses inscriptions comptent les années à partir de son avènement (« ère de Kanishka »), et le point de départ de cette ère est discuté. Trois solutions principales ont été proposées : 78 ap. J.-C. (longtemps admise, mais que les historiens ne retiennent plus d’après Wikipédia), 127-128 (de plus en plus admise, depuis les travaux de Harry Falk) et une date au IIIe siècle (vers 227-230), défendue par certains numismates. Le chapitre retient donc « vers 127 », en signalant le débat.',
            'L’empire kouchan se maintient jusqu’au IIIe siècle. Vasudeva Ier (règne vers 191-232 selon la World History Encyclopedia), considéré comme le dernier « Grand Kouchan », voit l’empire se scinder vers 230 en une partie occidentale et une partie orientale. Les Sassanides, qui ont renversé les Parthes en 224 (voir le chapitre « Sassanides, Kidarites, Hephtalites et Turcs »), soumettent les Kouchans occidentaux au milieu du IIIe siècle, probablement sous Shapur Ier ; ils placent à leur tête des vassaux, les Kouchano-Sassanides. Les Kouchans orientaux restent au pouvoir jusqu’à leur défaite face aux Gupta, au IVe siècle. Retenir : plusieurs dates kouchanes sont approximatives, d’où le « vers ».'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : avènement de Kanishka (vers 127 ap. J.-C.), les Sassanides renversent les Parthes (224 ap. J.-C.), les Yuezhi prennent la Bactriane (vers 130 av. J.-C.), début du règne de Kujula Kadphises (vers 30 ap. J.-C.).',
            calculation: 'Toute date avant J.-C. précède toute date après J.-C. : vers 130 av. J.-C. est la plus ancienne. Après J.-C., plus le nombre est petit, plus la date est ancienne : 30 < 127 < 224.',
            answer: 'Les Yuezhi prennent la Bactriane, Kujula Kadphises, Kanishka, les Sassanides renversent les Parthes.'
          },
          exercise: {
            question: 'Kanishka règne vers 127-150 ap. J.-C. Quelle est la durée approximative de son règne ?',
            answer: 'Environ 23 ans (150 − 127).'
          },
          exercises: [
            {
              question: 'Kanishka règne vers 127-150 ap. J.-C. Quelle est la durée approximative de son règne ?',
              answer: 'Environ 23 ans (150 − 127).'
            },
            {
              question: 'Combien d’années séparent la prise de la Bactriane par les Yuezhi (vers 130 av. J.-C.) du début du règne de Kujula Kadphises (vers 30 ap. J.-C.) ?',
              answer: 'Environ 159 ans : 130 + 30 − 1, car il n’y a pas d’année 0 entre 1 av. J.-C. et 1 ap. J.-C.'
            },
            {
              question: 'Pour l’avènement de Kanishka, on propose 78 et 127 ap. J.-C. Quel est l’écart, et laquelle retenir ?',
              answer: 'L’écart est de 49 ans (127 − 78). Les historiens ne retiennent plus 78 ; 127 est de plus en plus admise, mais une minorité propose une date au IIIe siècle. On écrit « vers 127 » et on signale le débat.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Ancient Afghanistan', url: 'https://www.worldhistory.org/Ancient_Afghanistan/' },
            { title: 'World History Encyclopedia — Greco-Bactrian Kingdom', url: 'https://www.worldhistory.org/Greco-Bactria/' },
            { title: 'Wikipédia (en) — Kanishka', url: 'https://en.wikipedia.org/wiki/Kanishka' },
            { title: 'Academia.edu — Introduction : chronologie kouchane (78, 127/8 ou 227 ap. J.-C., à recouper)', url: 'https://www.academia.edu/36165070/Introduction' }
          ]
        }
      } // FIN CHAPITRE kouchans
      ,
      {
        id: 'sassanides-kidarites-hephtalites-turcs',
        title: 'Sassanides, Kidarites, Hephtalites et Turcs',
        field: 'Asie centrale et Iran oriental · 224–vers 560 ap. J.-C.',
        summary: 'Les Sassanides face aux nomades du nord : Kidarites, Hephtalites, puis alliance avec le khaganat turc.',
        lesson: {
          sections: [
            'En 224 ap. J.-C., les Sassanides, dynastie perse dont le fondateur est Ardachir Ier, renversent l’empire parthe (la World History Encyclopedia donne 224, et 225 pour la conquête du sud de l’Afghanistan sur les derniers Indo-Parthes). Le zoroastrisme redevient religion d’État. Vers le milieu du IIIe siècle, ils soumettent les Kouchans occidentaux, probablement sous Shapur Ier (240-270), et placent à leur tête des vassaux, les Kouchano-Sassanides (voir le chapitre « Kouchans »).',
            'À partir de vers 350, sous le règne de Shapur II (309-379), des attaques venues du nord visent la région de la Bactriane. Les envahisseurs portent des noms variés dans les sources (Xionites, Kidarites, « Huns kidarites ») et leurs origines, comme leur éventuelle identité, ne sont pas claires. Selon des sources chinoises, les Kidarites s’établissent à Balkh au milieu ou à la fin du IVe siècle, en remplaçant les Kouchano-Sassanides.',
            'Les Hephtalites, ou « Huns blancs », apparaissent dans la région vers 442. D’abord en conflit avec les Sassanides, ils s’allient à eux : Peroz Ier (459-484) s’appuie sur eux pour l’emporter dans une lutte de pouvoir, et vers 467 les Sassanides ont repris la plupart des provinces perdues. Les anciens alliés s’affrontent ensuite. En 484, Peroz est vaincu et tué : la World History Encyclopedia parle de la bataille de Hérat, alors que d’autres sources placent le combat près de Balkh, après une marche de Hérat vers Balkh. Les Hephtalites s’emparent de grandes parties de l’est sassanide.',
            'Vers le milieu du VIe siècle, les Sassanides, revigorés, s’allient au premier khaganat turc, fondé par des nomades, les Göktürks. Leur coalition écrase les Hephtalites : la World History Encyclopedia date l’événement vers 560, et Wikipédia donne 557 pour la défaite décisive et vers 560 pour la bataille de Gol-Zarriun, près de Boukhara. Les régions au nord de l’Oxus passent aux Turcs ; le sud revient aux Sassanides. Les Hephtalites restants se fragmentent en petits royaumes.',
            'Cette période est mal documentée : on la reconstitue à partir de monnaies, d’inscriptions et de quelques textes, souvent fragmentaires. Selon la World History Encyclopedia, les Hephtalites semblent avoir eu un impact culturel limité. Pour l’Afghanistan, elle ajoute que, moins d’un siècle plus tard, les premiers Arabes deviennent la puissance dominante et que l’islam s’y impose. Retenir : de 224 au VIe siècle, l’Asie centrale passe des Parthes et des Kouchans aux Sassanides, puis à des nomades (Kidarites, Hephtalites) et aux Turcs.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : mort de Peroz Ier (484), arrivée des Hephtalites (vers 442), les Sassanides renversent les Parthes (224), premières attaques kidarites (vers 350).',
            calculation: 'Après J.-C., plus le nombre est petit, plus la date est ancienne : 224 < 350 < 442 < 484.',
            answer: 'Les Sassanides renversent les Parthes, attaques kidarites, arrivée des Hephtalites, mort de Peroz Ier.'
          },
          exercise: {
            question: 'Peroz Ier règne de 459 à 484 ap. J.-C. Combien d’années dure son règne ?',
            answer: '25 ans (484 − 459).'
          },
          exercises: [
            {
              question: 'Peroz Ier règne de 459 à 484 ap. J.-C. Combien d’années dure son règne ?',
              answer: '25 ans (484 − 459).'
            },
            {
              question: 'Combien d’années séparent la chute des Parthes (224) de la mort de Peroz Ier (484) ?',
              answer: '260 ans (484 − 224).'
            },
            {
              question: 'Pourquoi trouve-t-on 224 et 225 pour la fin du pouvoir parthe et indo-parthe ?',
              answer: 'La World History Encyclopedia donne 224 pour la chute des Parthes et 225 pour la conquête du sud de l’Afghanistan sur les derniers Indo-Parthes : ce ne sont pas les mêmes événements, et l’écart d’un an illustre l’incertitude des dates de cette période.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Ancient Afghanistan', url: 'https://www.worldhistory.org/Ancient_Afghanistan/' },
            { title: 'Wikipédia (en) — Peroz I', url: 'https://en.wikipedia.org/wiki/Peroz_I' },
            { title: 'Wikipédia (en) — Hephthalite–Sasanian Wars', url: 'https://en.wikipedia.org/wiki/Hephthalite%E2%80%93Sasanian_Wars' },
            { title: 'Wikipédia (en) — Hephthalite–Sasanian War of 484', url: 'https://en.wikipedia.org/wiki/Hephthalite%E2%80%93Sasanian_War_of_484' }
          ]
        }
      } // FIN CHAPITRE sassanides-kidarites-hephtalites-turcs
      ,
      {
        id: 'asie-centrale-mongols',
        title: 'Empire mongol en Asie centrale : de Gengis Khan au khanat de Djaghataï',
        field: 'Asie centrale et Eurasie · 1206–1368',
        summary: 'Gengis Khan, conquête du Khwarezm, Karakorum, partage en khanats et khanat de Djaghataï.',
        lesson: {
          sections: [
            'Les Mongols sont des nomades pastoraux de la steppe, éleveurs de moutons, de chèvres, de chevaux, de chameaux et de yacks, qui vivent sous des tentes de feutre (yourtes). Temüdjin, né vers 1162, unifie les tribus entre 1195 et 1205 environ ; en 1206, une assemblée de chefs (kurultai) le reconnaît Gengis Khan, « souverain universel ». Il fait écrire la langue mongole avec l’alphabet des Turcs ouïghours, promulgue un code, le Yasa, et crée un réseau de relais pour les messagers, le Yam. La meilleure source ancienne est l’Histoire secrète des Mongols, chronique du XIIIe siècle.',
            'Gengis Khan attaque d’abord le nord de la Chine, puis se tourne vers l’ouest. L’attaque contre l’empire khorezmien commence en 1218 selon la World History Encyclopedia, en 1219 selon Wikipédia et d’autres sources. Boukhara et Samarcande sont prises au début de 1220 ; le nord de l’Afghanistan est atteint en 1221 ; en 1223, une armée russe est vaincue à Kalka. La World History Encyclopedia décrit des villes détruites, des civils massacrés et des systèmes d’irrigation ruinés. Gengis Khan meurt en 1227.',
            'Selon la volonté de Gengis Khan, l’empire est réparti entre ses fils ; Ögödei devient Grand Khan (1229-1241). En 1235, il choisit Karakorum comme capitale, organise un recensement et un système d’impôt, et étend le Yam. De 1236 à 1242, les armées mongoles attaquent l’Europe orientale (Kiev en 1240, Cracovie et Buda en 1241) ; la mort d’Ögödei en 1241 oblige les chefs à rentrer élire un nouveau khan.',
            'Après 1260, l’empire est en fait divisé en quatre khanats autonomes : Kubilaï règne de 1260 à 1294 et fonde en 1271 la dynastie chinoise des Yuan ; l’Ilkhanat de Perse dure de 1260 à 1335 et la Horde d’Or vers 1227-1480. Le khanat de Djaghataï, fondé par le deuxième fils de Gengis Khan (vers 1227-1363), domine l’Asie centrale et reste le plus attaché au mode de vie nomade ; Qaidu domine la région de 1272 à 1301 et nomme les khans de Djaghataï. Les trois khanats occidentaux adoptent l’islam. Le dernier khan de Djaghataï, Tughlugh Timur, règne de 1347 à 1363 ; à sa mort, l’État se désagrège.',
            'Selon la World History Encyclopedia, l’empire mongol (1206-1368) est le plus vaste empire terrestre d’un seul tenant jusque-là. Il relie l’Est et l’Ouest : ambassadeurs, missionnaires et marchands, comme Marco Polo (1254-1324), circulent à travers l’Asie. La peste noire (1347-1352) serait passée d’un foyer reculé de Chine à la mer Noire, puis à l’Europe. En 1368, les Ming prennent le pouvoir en Chine. Retenir : « Mongol » désigne ici un empire et ses khanats, et les dates de fondation des khanats (vers 1227, vers 1260) sont approximatives.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : mort de Gengis Khan (1227), prise de Boukhara et de Samarcande (1220), Karakorum devient capitale (1235), kurultai de 1206.',
            calculation: 'Après J.-C., plus le nombre est petit, plus la date est ancienne : 1206 < 1220 < 1227 < 1235.',
            answer: 'Kurultai de 1206, prise de Boukhara et de Samarcande, mort de Gengis Khan, Karakorum capitale.'
          },
          exercise: {
            question: 'Ögödei est Grand Khan de 1229 à 1241. Combien d’années dure son règne ?',
            answer: '12 ans (1241 − 1229).'
          },
          exercises: [
            {
              question: 'Ögödei est Grand Khan de 1229 à 1241. Combien d’années dure son règne ?',
              answer: '12 ans (1241 − 1229).'
            },
            {
              question: 'Gengis Khan règne de 1206 à 1227. Combien d’années dure son règne ?',
              answer: '21 ans (1227 − 1206).'
            },
            {
              question: 'La guerre contre l’empire khorezmien commence en 1218 selon une source et en 1219 selon d’autres. Quel est l’écart et que faire ?',
              answer: 'L’écart est de 1 an. On n’en retient pas une seule à l’aveugle : on écrit « 1218-1219 » et on signale que les sources diffèrent.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Mongol Empire', url: 'https://www.worldhistory.org/Mongol_Empire/' },
            { title: 'World History Encyclopedia — Timur (contexte du khanat de Djaghataï)', url: 'https://www.worldhistory.org/Timur/' },
            { title: 'Wikipédia (en) — Mongol invasion of Khorasan', url: 'https://en.wikipedia.org/wiki/Mongol_invasion_of_Khorasan' }
          ]
        }
      } // FIN CHAPITRE mongols-asie-centrale
      ,
      {
        id: 'timur-et-timourides',
        title: 'Timur et les Timourides : Samarcande, capitale d’un empire',
        field: 'Transoxiane, Iran, Inde · 1336–1507',
        summary: 'Naissance près de Samarcande, prise de la Transoxiane, grandes campagnes, mort à Otrar et héritage timouride.',
        lesson: {
          sections: [
            'Timur naît en 1336 près de Samarcande, dans la Transoxiane, alors dans le khanat de Djaghataï. Son nom, souvent donné sous la forme Tamerlan, vient du persan Timür-i Leng, « Timur le boiteux », à cause d’une infirmité à la jambe et au bras droits. Turc et mongol par ses origines, musulman, il met plus tard en avant ses liens avec les grands souverains mongols, grâce à l’une de ses épouses.',
            'Timur sert brièvement comme ministre auprès d’Ilyas Khoja, gouverneur de la Transoxiane (mort en 1368). Allié à son beau-frère Amir Husayn, il prend la Transoxiane en 1366 ; après la mort de Husayn, il en détient seul le pouvoir vers 1370, date de la fondation de l’empire timouride (1370-1507).',
            'À partir des années 1370, Timur s’attaque aux anciens territoires du khanat de Djaghataï et de l’Ilkhanat. Il emploie une cavalerie légère armée d’arcs et une cavalerie lourde, et dirige presque toujours ses troupes lui-même. En 1387, il saccage Van, en Anatolie orientale. Le 14 avril 1395, il écrase la Horde d’Or sur le Terek, dans le sud de la Russie actuelle. En 1398-1399, il envahit l’Inde et pille Delhi, puis saccage Alep en 1399 et Bagdad en 1401. Le 28 juillet 1402, il bat le sultan ottoman Bayezid Ier à Ankara. La World History Encyclopedia souligne la brutalité de ses méthodes et l’absence d’institutions durables dans ses conquêtes.',
            'Samarcande, étape majeure des routes de la soie, devient la capitale de Timur. Il y fait venir de force savants, artistes, architectes et artisans des régions conquises, et fait construire de grands édifices religieux. Il en reste la Grande Mosquée, le complexe funéraire timouride de Shah-i-Zinda et le Gur-e Mir, tombeau à dôme où repose Timur.',
            'Timur meurt à Otrar (Kazakhstan actuel) le 19 février 1405, en route pour attaquer la Chine des Ming. Son fils Shahrukh (1377-1447) lui succède. Son empire se réduit vite, mais la dynastie timouride domine le Turkestan et les régions voisines jusqu’au XVIe siècle, et Samarcande reste un centre savant, notamment en astronomie. Son descendant Babur (1483-1530) fonde l’empire moghol d’Inde (1526-1857). Retenir : l’« empire timouride » est daté de 1370 à 1507, bien au-delà de la mort de Timur : les dates désignent la dynastie, pas le seul règne du conquérant.'
          ],
          example: {
            statement: 'Ordonner du plus ancien au plus récent : bataille d’Ankara (1402), naissance de Timur (1336), Babur fonde l’empire moghol (1526), pillage de Delhi (1398-1399).',
            calculation: 'Après J.-C., plus le nombre est petit, plus la date est ancienne : 1336 < 1398 < 1402 < 1526.',
            answer: 'Naissance de Timur, pillage de Delhi, bataille d’Ankara, empire moghol.'
          },
          exercise: {
            question: 'Timur naît en 1336 et meurt en 1405. Quel âge a-t-il à sa mort ?',
            answer: 'Environ 69 ans (1405 − 1336).'
          },
          exercises: [
            {
              question: 'Timur naît en 1336 et meurt en 1405. Quel âge a-t-il à sa mort ?',
              answer: 'Environ 69 ans (1405 − 1336).'
            },
            {
              question: 'L’empire timouride est daté de 1370 à 1507. Quelle est sa durée approximative ?',
              answer: 'Environ 137 ans (1507 − 1370).'
            },
            {
              question: 'Timur meurt en 1405, mais l’empire timouride est daté jusqu’en 1507. Y a-t-il contradiction ?',
              answer: 'Non : la date de fin désigne la dynastie, qui se maintient après Timur, et non son seul règne. L’empire de Timur lui-même se réduit vite après sa mort.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Timur', url: 'https://www.worldhistory.org/Timur/' },
            { title: 'World History Encyclopedia — Mongol Empire', url: 'https://www.worldhistory.org/Mongol_Empire/' },
            { title: 'World History Encyclopedia — Silk Road', url: 'https://www.worldhistory.org/Silk_Road/' }
          ]
        }
      } // FIN CHAPITRE timur-et-timourides
    ] // FIN BRANCHE asie-centrale-et-routes-de-la-soie
  },  // FIN BRANCHE 4

// BRANCHE 5

{
  id: 'egypte-antique',
  sortYear: -3100,
  title: 'Égypte antique : le Nil, les pharaons et une civilisation millénaire',
  note: 'Six chapitres approfondis sur la formation de l’État égyptien, le Nil et l’économie, le pouvoir royal, l’architecture, les croyances religieuses et l’écriture. Les dates sont approximatives. Les chronologies peuvent différer selon les spécialistes et les périodes ne se sont pas toutes caractérisées par le même degré d’unité politique.',
  chapters: [
    {
      id: 'naissance-egypte-antique',
      title: 'La naissance de la civilisation égyptienne',
      field: 'Égypte antique · Période prédynastique et formation de l’État, vers 4500-3100 av. J.-C.',
      summary: 'Étudier les sociétés prédynastiques, l’importance du Nil, les premières formes de pouvoir et la formation progressive d’un État égyptien unifié.',
      lesson: {
        sections: [
          'L’Égypte antique se développe dans le nord-est de l’Afrique, autour de la vallée et du delta du Nil. Le contraste entre le fleuve et les régions désertiques environnantes a profondément marqué l’organisation du territoire. Les terres cultivables se concentraient surtout le long du cours du fleuve et dans son delta, tandis que les déserts orientaux et occidentaux constituaient des milieux difficiles à exploiter pour l’agriculture. Ils n’étaient cependant pas infranchissables : des pistes permettaient d’accéder à des carrières, à des ressources minérales et à des routes commerciales.',
          'Bien avant l’apparition de l’État pharaonique, des populations vivaient dans la région et exploitaient les ressources du fleuve. À partir du Néolithique, des communautés pratiquaient progressivement l’agriculture et l’élevage. La période prédynastique, conventionnellement située vers 4500-3100 av. J.-C. dans certaines chronologies, voit se développer des villages, des productions artisanales, des échanges à longue distance et des différences croissantes de richesse. Les objets déposés dans certaines tombes témoignent de ces transformations. Les sociétés de Haute-Égypte et de Basse-Égypte ne se sont toutefois pas développées partout au même rythme.',
          'La Haute-Égypte correspond principalement à la vallée méridionale du Nil, en amont du delta. La Basse-Égypte désigne la région septentrionale du delta. Ces noms peuvent surprendre : la Haute-Égypte se trouve plus au sud parce que le fleuve descend vers le nord. La vallée et le delta possédaient des caractéristiques géographiques différentes, mais entretenaient des relations économiques et culturelles. Leur rapprochement politique a été un processus historique plutôt qu’un événement dont tous les détails seraient connus.',
          'Vers la fin du IVe millénaire av. J.-C., certains centres régionaux deviennent particulièrement importants, notamment Hiérakonpolis, Abydos et Nagada. Des objets cérémoniels, des tombes et des inscriptions témoignent de l’affirmation de dirigeants. La palette de Narmer, généralement datée du début de l’époque dynastique, représente un souverain portant des couronnes associées à la Haute-Égypte et à la Basse-Égypte. Elle est une source majeure pour étudier l’idéologie royale et la représentation de l’unification. Elle ne constitue cependant pas un récit complet et neutre des événements historiques.',
          'Le nom de Narmer est solidement attesté dans les sources archéologiques. L’identification de Narmer au personnage traditionnellement appelé Ménès, auquel des traditions ultérieures attribuent l’unification, reste discutée. Les spécialistes ne disposent pas d’un récit contemporain détaillé permettant de reconstituer avec certitude toutes les étapes de la formation de l’État. Une date proche de 3100 av. J.-C. est donc un repère conventionnel utile pour situer les débuts de l’époque dynastique, et non une date exacte démontrant qu’une unification complète aurait eu lieu en une seule journée.',
          'L’apparition de l’écriture accompagne la formation de structures politiques plus complexes. Les premières inscriptions égyptiennes connues remontent à la fin du IVe millénaire av. J.-C. Elles sont notamment associées à des objets cérémoniels et à des marques administratives. L’écriture permet progressivement d’enregistrer des noms, des ressources et des informations institutionnelles. Son développement s’inscrit dans un ensemble de transformations comprenant la centralisation du pouvoir, les échanges, la spécialisation des métiers et la construction de monuments.'
        ],
        example: {
          statement: 'Une frise chronologique indique le début conventionnel de l’époque dynastique vers 3100 av. J.-C. et le début du Nouvel Empire vers 1570 av. J.-C. Combien d’années environ séparent ces deux repères ?',
          calculation: '3100 - 1570 = 1530',
          answer: 'Environ 1530 ans séparent ces repères. Il s’agit d’une durée approximative calculée à partir de dates conventionnelles.'
        },
        exercise: {
          question: 'Explique pourquoi la naissance de l’État égyptien doit être comprise comme un processus historique et non comme un événement parfaitement connu.',
          answer: 'Les données archéologiques montrent une évolution progressive des communautés, des centres régionaux, des échanges et du pouvoir. Les sources contemporaines sont limitées et ne permettent pas de reconstituer avec certitude toutes les étapes de l’unification ni d’attribuer l’ensemble du processus à un seul souverain.'
        },
        exercises: [
          {
            question: 'Dans quelle partie du continent africain la civilisation égyptienne s’est-elle développée ?',
            answer: 'Dans le nord-est de l’Afrique, principalement le long de la vallée et du delta du Nil.'
          },
          {
            question: 'Quelle différence géographique distingue la Haute-Égypte de la Basse-Égypte ?',
            answer: 'La Haute-Égypte correspond principalement à la vallée méridionale du Nil, tandis que la Basse-Égypte correspond à la région septentrionale du delta.'
          },
          {
            question: 'Pourquoi le Nil a-t-il favorisé l’installation de communautés agricoles ?',
            answer: 'Il fournissait de l’eau, des terres cultivables et une voie de circulation. Les dépôts de sédiments liés aux crues contribuaient à la fertilité de certaines terres.'
          },
          {
            question: 'Que représente la palette de Narmer pour les historiens ?',
            answer: 'C’est un objet cérémoniel important pour étudier la royauté et les représentations de l’unification de l’Égypte.'
          },
          {
            question: 'Peut-on affirmer que Narmer et Ménès sont certainement une seule et même personne ?',
            answer: 'Non. Cette identification est discutée par les spécialistes.'
          },
          {
            question: 'Quel lien peut-on établir entre l’écriture et la formation de l’État ?',
            answer: 'L’écriture a notamment permis d’enregistrer des noms, des ressources et des informations administratives, contribuant au fonctionnement d’institutions de plus en plus complexes.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Ancient Egypt', url: 'https://www.worldhistory.org/egypt/' },
          { title: 'The Metropolitan Museum of Art — Egypt, 8000–2000 B.C.', url: 'https://www.metmuseum.org/de/toah/ht/02/afe' },
          { title: 'The Metropolitan Museum of Art — Egypt, 8000–2000 B.C. (chronologie)', url: 'https://www.metmuseum.org/toah/ht/02/afe' }
        ]
      }
    },
    {
      id: 'nil-agriculture-societe',
      title: 'Le Nil, l’agriculture et la société égyptienne',
      field: 'Égypte antique · Environnement, économie, métiers et organisation sociale',
      summary: 'Comprendre les effets du milieu naturel sur l’agriculture, les échanges, la collecte des ressources, les métiers et les conditions de vie des habitants.',
      lesson: {
        sections: [
          'Le Nil constitue l’un des principaux axes de la civilisation égyptienne. Il relie des régions éloignées et facilite les déplacements de personnes, de marchandises et d’informations. Le courant du fleuve s’écoule généralement vers le nord, tandis que les vents dominants permettent souvent aux embarcations à voile de remonter le cours du fleuve. Cette complémentarité a favorisé les circulations, sans supprimer les difficultés liées aux distances, aux saisons et aux conditions de navigation.',
          'Les crues du Nil ont longtemps joué un rôle majeur dans l’agriculture. Lorsque les eaux se retiraient, elles laissaient des sédiments qui contribuaient à la fertilité des terres. Les résultats agricoles dépendaient toutefois de plusieurs facteurs : la hauteur et le calendrier de la crue, les sols, les techniques d’irrigation, les semences, la main-d’œuvre et le stockage. Il serait donc inexact de présenter le fleuve comme une garantie automatique de récoltes abondantes chaque année.',
          'Les habitants cultivaient notamment des céréales, dont le blé amidonnier et l’orge, ainsi que d’autres plantes utiles à l’alimentation et à la production de matériaux. Les récoltes pouvaient servir à nourrir les familles, à payer certaines obligations en nature, à approvisionner des institutions et à constituer des réserves. La gestion des greniers et des ressources demandait des opérations de mesure, d’enregistrement et de redistribution. Les pratiques variaient selon les lieux, les époques et les institutions concernées.',
          'L’économie égyptienne ne reposait pas uniquement sur l’agriculture. L’élevage, la pêche, la chasse, l’artisanat, la construction, l’exploitation des carrières et les échanges contribuaient aussi à la vie économique. Les artisans travaillaient notamment la pierre, le bois, les métaux, le textile et la céramique. Certaines matières premières étaient disponibles localement ; d’autres provenaient de régions extérieures. Le cuivre, les pierres dures, le bois de qualité et diverses matières précieuses pouvaient faire l’objet d’approvisionnements organisés à différentes échelles.',
          'La société était hiérarchisée, mais elle ne se résumait pas à une pyramide sociale uniforme valable pendant trois millénaires. Le roi occupait le sommet de l’ordre politique. Les hauts responsables, les administrateurs, les scribes et les prêtres pouvaient disposer de fonctions et de ressources importantes. Les soldats, les artisans, les commerçants, les paysans et les travailleurs assuraient des activités diverses. Le statut, les droits, les obligations et les possibilités d’accès aux ressources variaient selon les individus et les périodes.',
          'Les scribes occupaient une place importante parce que la maîtrise de l’écriture demandait une formation spécialisée. Ils pouvaient rédiger des documents, tenir des comptes, enregistrer des livraisons ou participer à l’administration des domaines. Leur travail ne signifie pas que tous les habitants étaient incapables de communiquer ou de compter, mais que les institutions avaient besoin de personnes formées pour produire et conserver certains documents. Les sources écrites disponibles reflètent donc particulièrement les activités des institutions et des groupes capables de laisser des archives.',
          'La vie quotidienne dépendait fortement du statut social et du contexte local. Les maisons, les vêtements, l’alimentation et l’accès aux biens différaient. Les données archéologiques provenant des villages de travailleurs, des habitations et des cimetières permettent de compléter les textes officiels. Elles rappellent que l’histoire de l’Égypte ne concerne pas seulement les souverains et les monuments : elle comprend aussi le travail, les familles, les besoins matériels et les adaptations des populations.'
        ],
        example: {
          statement: 'Un grenier fictif reçoit 480 sacs de céréales. L’administration en réserve 120 pour une période ultérieure et affecte 90 sacs à un autre usage. Combien de sacs restent disponibles ?',
          calculation: '480 - 120 - 90 = 270',
          answer: 'Il reste 270 sacs disponibles. Cet exemple illustre un calcul de gestion des réserves ; les quantités sont fictives et ne correspondent pas à un document historique précis.'
        },
        exercise: {
          question: 'Montre comment le Nil, l’agriculture et l’administration étaient liés dans le fonctionnement de l’Égypte antique.',
          answer: 'Le Nil fournissait de l’eau et facilitait les transports. L’agriculture produisait une partie importante des ressources alimentaires. Les récoltes pouvaient être stockées, mesurées et redistribuées par des familles et des institutions. L’administration utilisait notamment des documents et des scribes pour suivre certaines ressources et organiser des obligations.'
        },
        exercises: [
          {
            question: 'Dans quelle direction le Nil s’écoule-t-il généralement ?',
            answer: 'Du sud vers le nord, en direction de la Méditerranée.'
          },
          {
            question: 'Pourquoi les crues du Nil étaient-elles importantes pour l’agriculture ?',
            answer: 'Elles apportaient de l’eau et pouvaient déposer des sédiments favorables à la fertilité des terres.'
          },
          {
            question: 'Les crues garantissaient-elles toujours une bonne récolte ?',
            answer: 'Non. Les résultats dépendaient aussi de l’importance de la crue, des sols, du travail, de l’irrigation et d’autres conditions.'
          },
          {
            question: 'Cite trois activités économiques autres que la culture des céréales.',
            answer: 'Par exemple, l’élevage, la pêche, la poterie, le travail des métaux, le textile, la construction ou le commerce.'
          },
          {
            question: 'Pourquoi les scribes étaient-ils utiles à l’administration ?',
            answer: 'Ils pouvaient enregistrer des ressources, rédiger des documents et tenir des comptes.'
          },
          {
            question: 'Pourquoi faut-il étudier les habitations et les cimetières en plus des textes royaux ?',
            answer: 'Ces vestiges permettent de mieux connaître les conditions de vie et les activités de populations souvent moins visibles dans les inscriptions officielles.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Ancient Egypt', url: 'https://www.worldhistory.org/egypt/' },
          { title: 'The Metropolitan Museum of Art — Egyptian Tombs: Life Along the Nile', url: 'https://www.metmuseum.org/fr/essays/egyptian-tombs-life-along-the-nile' },
          { title: 'The Metropolitan Museum of Art — The Art of Ancient Egypt: A Resource for Educators', url: 'https://resources.metmuseum.org/resources/metpublications/pdf/The_Art_of_Ancient_Egypt_A_Resource_for_Educators.pdf' }
        ]
      }
    },
    {
      id: 'pharaons-royaute',
      title: 'Les pharaons, le pouvoir et les grandes périodes historiques',
      field: 'Égypte antique · Institutions royales, administration et évolution politique, vers 3100-30 av. J.-C.',
      summary: 'Étudier les responsabilités du roi, l’administration, les périodes d’unité et de fragmentation, les relations extérieures et les principales transformations politiques.',
      lesson: {
        sections: [
          'Le roi occupe une place centrale dans l’organisation politique de l’Égypte antique. Il est présenté dans les textes et les images royales comme un garant de l’ordre du pays et de l’équilibre cosmique. Le concept de maât exprime notamment l’ordre, la justice, l’équilibre et la régularité qui doivent structurer le monde. Cette conception religieuse du pouvoir ne signifie pas que le roi gérait seul toutes les affaires : son autorité dépendait d’administrateurs, de responsables locaux, de prêtres et d’autres agents.',
          'Le vizir est l’un des hauts responsables de l’administration royale. Selon les périodes, les fonctionnaires supervisent différentes tâches : gestion des terres et des ressources, organisation de travaux, contrôle de certaines activités, justice et transmission des décisions. Les institutions n’étaient pas identiques durant toute l’histoire égyptienne. Il faut donc éviter de projeter un modèle administratif unique sur trois millénaires d’évolution.',
          'L’histoire est généralement divisée en grandes périodes pour faciliter son étude. L’époque dynastique ancienne suit la formation de l’État, vers 3100 av. J.-C. L’Ancien Empire, souvent daté approximativement de 2613 à 2181 av. J.-C. dans une chronologie courante, est associé à la construction des grandes pyramides royales. Le Moyen Empire, situé autour de 2040-1782 av. J.-C. dans la chronologie de World History Encyclopedia, est marqué par une nouvelle consolidation du pouvoir. Les bornes exactes varient selon les spécialistes.',
          'Entre les périodes de royaume, l’Égypte connaît des phases dites intermédiaires. Ces phases sont associées à des changements de pouvoir, à la montée de dirigeants régionaux et parfois à plusieurs centres politiques concurrents. Le terme « période intermédiaire » est une catégorie moderne utilisée par les historiens. Il ne signifie pas nécessairement que toute activité économique ou culturelle s’est arrêtée. Les sources témoignent au contraire de continuités et de transformations qui diffèrent selon les régions.',
          'Le Nouvel Empire, conventionnellement situé vers 1570-1069 av. J.-C. dans certaines chronologies, est une période de forte puissance internationale. Des souverains comme Thoutmôsis III mènent des campagnes militaires et étendent l’influence égyptienne. Hatchepsout développe notamment les relations commerciales et les grands programmes de construction. Sous Amenhotep III, l’art royal et la diplomatie connaissent un développement important. Ramsès II, connu pour son long règne et ses monuments, participe également à des conflits et à des négociations diplomatiques.',
          'Les relations extérieures sont essentielles à l’histoire égyptienne. L’Égypte entretient des contacts avec la Nubie au sud, le Levant au nord-est et d’autres régions de la Méditerranée orientale. Ces relations comprennent le commerce, les échanges diplomatiques, les mariages dynastiques, les expéditions et les guerres. Elles ne peuvent pas être résumées à une opposition permanente entre l’Égypte et tous ses voisins : les formes de relation évoluent selon les intérêts politiques et les circonstances.',
          'Au cours du Ier millénaire av. J.-C., l’autorité politique est parfois exercée par des dynasties d’origine libyenne ou nubienne, puis l’Égypte connaît notamment des dominations assyrienne et perse. En 332 av. J.-C., Alexandre le Grand conquiert l’Égypte. Après sa mort, la dynastie des Ptolémées gouverne le pays. Cléopâtre VII est la dernière souveraine de cette dynastie à exercer le pouvoir avant l’annexion romaine de 30 av. J.-C. Cette date marque la fin conventionnelle de l’Égypte ptolémaïque indépendante, et non la disparition immédiate de la culture égyptienne.'
        ],
        example: {
          statement: 'Une chronologie situe l’Ancien Empire vers 2613-2181 av. J.-C. et le Moyen Empire vers 2040-1782 av. J.-C. Quel intervalle approximatif sépare la fin de l’Ancien Empire du début du Moyen Empire ?',
          calculation: '2181 - 2040 = 141',
          answer: 'Les repères conventionnels indiquent un intervalle d’environ 141 ans. Cette estimation ne signifie pas que l’Égypte aurait été dépourvue de pouvoir ou d’activité pendant toute cette période.'
        },
        exercise: {
          question: 'Explique pourquoi l’histoire politique de l’Égypte antique ne correspond pas à une succession continue de souverains disposant toujours du même pouvoir.',
          answer: 'Le pays a connu des périodes de centralisation, de fragmentation et de domination par des pouvoirs régionaux ou étrangers. Les institutions, les frontières et les relations extérieures ont changé au cours des siècles.'
        },
        exercises: [
          {
            question: 'Que signifie le concept de maât dans la pensée égyptienne ?',
            answer: 'Il renvoie notamment à l’ordre, à la justice et à l’équilibre que le roi et la société doivent contribuer à préserver.'
          },
          {
            question: 'Quel rôle le vizir pouvait-il exercer ?',
            answer: 'Il faisait partie des hauts responsables de l’administration royale et supervisait des domaines administratifs selon les institutions de son époque.'
          },
          {
            question: 'À quelle grande période associe-t-on les pyramides royales de Gizeh ?',
            answer: 'À l’Ancien Empire.'
          },
          {
            question: 'Pourquoi les périodes intermédiaires ne doivent-elles pas être décrites comme des périodes sans histoire ?',
            answer: 'Elles comprennent des transformations politiques, des pouvoirs régionaux et des continuités culturelles et économiques.'
          },
          {
            question: 'Cite deux souverains du Nouvel Empire.',
            answer: 'Par exemple, Hatchepsout, Thoutmôsis III, Amenhotep III ou Ramsès II.'
          },
          {
            question: 'En quelle année Alexandre le Grand conquiert-il l’Égypte ?',
            answer: 'En 332 av. J.-C.'
          },
          {
            question: 'Quelle date marque la fin conventionnelle de l’Égypte ptolémaïque indépendante ?',
            answer: '30 av. J.-C., lorsque l’Égypte est annexée par Rome.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Kingdoms and Periods of Ancient Egypt', url: 'https://www.worldhistory.org/collection/235/kingdoms-and-periods-of-ancient-egypt/' },
          { title: 'World History Encyclopedia — Egyptian Government', url: 'https://www.worldhistory.org/timeline/Egyptian_Government/' },
          { title: 'The Metropolitan Museum of Art — Egypt in the Middle Kingdom', url: 'https://www.metmuseum.org/fr/essays/egypt-in-the-middle-kingdom-2030-1640-b-c' },
          { title: 'World History Encyclopedia — New Kingdom of Egypt', url: 'https://www.worldhistory.org/New_Kingdom_of_Egypt/' }
        ]
      }
    },
    {
      id: 'pyramides-monuments',
      title: 'Les pyramides, les temples et les monuments',
      field: 'Égypte antique · Architecture, techniques, travail et pratiques funéraires',
      summary: 'Comprendre les fonctions des monuments, les moyens mobilisés pour les construire, les techniques architecturales et les informations apportées par l’archéologie.',
      lesson: {
        sections: [
          'L’architecture monumentale égyptienne est étroitement liée au pouvoir royal et aux croyances religieuses. Les tombeaux, les temples et les complexes funéraires sont des constructions différentes, même s’ils peuvent être réunis dans un même ensemble. Les tombeaux accueillent les sépultures et les dispositifs liés au culte funéraire. Les temples sont consacrés au culte des divinités et à des cérémonies. Les monuments royaux peuvent remplir plusieurs fonctions symboliques et politiques.',
          'Avant les grandes pyramides de Gizeh, des souverains ont fait construire des monuments funéraires dont la forme et les techniques ont évolué. Sous le roi Djéser, la pyramide à degrés de Saqqarah constitue un jalon important de l’architecture monumentale en pierre. Elle est traditionnellement associée à l’architecte et haut responsable Imhotep. Les pyramides de Dahchour témoignent ensuite d’expérimentations architecturales, avant la construction des grandes pyramides de Gizeh sous Khéops, Khéphren et Mykérinos, durant l’Ancien Empire.',
          'La Grande Pyramide de Gizeh est associée au roi Khéops. Les pyramides de Khéphren et de Mykérinos font partie du même paysage funéraire royal. Ces monuments ne sont pas isolés : ils appartiennent à des complexes comprenant notamment des temples, des chaussées et d’autres aménagements. Leur implantation, leur orientation, leur maçonnerie et leurs inscriptions fournissent des informations sur les capacités techniques et les choix symboliques des bâtisseurs.',
          'La construction d’un grand monument nécessitait une organisation du travail, l’extraction et le transport des matériaux, l’approvisionnement en eau et en nourriture, ainsi que la coordination de nombreux métiers. Les outils, les traces de carrière, les restes de logements et les inscriptions permettent aux archéologues d’étudier ces activités. Les chercheurs débattent encore de certains détails des méthodes utilisées pour déplacer et mettre en place les blocs. Il est donc nécessaire de distinguer les données archéologiques établies des hypothèses concernant des procédés précis.',
          'Il est inexact d’affirmer sans nuance que les pyramides ont été construites uniquement par des esclaves. Les découvertes archéologiques, notamment les installations liées aux travailleurs de Gizeh, témoignent de groupes de travailleurs organisés, nourris et logés. Les modalités du recrutement, les obligations de travail et les conditions variaient selon les époques et les statuts. Ces données ne permettent pas pour autant d’affirmer que tous les travailleurs avaient les mêmes conditions de vie ou qu’aucune forme de contrainte n’existait.',
          'Les temples de Karnak et de Louxor illustrent l’importance des sanctuaires dans la religion et la représentation du pouvoir. Le complexe de Karnak s’est développé pendant de nombreux siècles : il ne résulte pas d’un chantier unique. Des souverains successifs ont ajouté des bâtiments, des obélisques, des statues et des inscriptions. Les temples étaient des espaces religieux, mais aussi des institutions disposant de terres, de personnels et de ressources. Leur rôle économique et politique variait selon les périodes.',
          'Les tombes royales et privées nous renseignent sur les conceptions de l’au-delà et sur la place des morts dans la société. Certaines tombes contiennent des peintures, des textes, des objets et des offrandes. Les décors représentent des activités quotidiennes, des cérémonies, des divinités ou des scènes idéalisées. Ils constituent des sources précieuses, mais leur interprétation doit tenir compte des conventions artistiques et des intentions religieuses. Une image funéraire ne doit pas être lue comme une photographie exacte de la vie réelle.',
          'La conservation des monuments est inégale. Les temples ont parfois été transformés, démontés ou réutilisés par des souverains postérieurs. Les tombes ont été pillées à différentes époques et certaines ont subi des dégradations naturelles. L’absence d’un objet dans une tombe ne prouve donc pas qu’il n’a jamais existé. L’archéologie confronte les vestiges matériels, les inscriptions et les données environnementales pour reconstruire, avec des degrés de certitude variables, l’histoire des constructions.'
        ],
        example: {
          statement: 'Une équipe fictive doit transporter 360 blocs. Elle en déplace 45 par jour à rythme constant. Combien de jours lui faut-il pour achever cette tâche ?',
          calculation: '360 / 45 = 8',
          answer: 'Il faut 8 jours dans cet exemple mathématique. Ce résultat n’est pas une estimation historique du temps nécessaire à la construction d’une pyramide.'
        },
        exercise: {
          question: 'Explique comment l’étude des monuments permet de connaître à la fois les techniques, la société et les croyances de l’Égypte antique.',
          answer: 'Les matériaux et les traces de construction renseignent sur les techniques et l’organisation du travail. Les inscriptions et les décors renseignent sur le pouvoir et la religion. Les installations de travailleurs, les objets et les tombes apportent des informations sur l’approvisionnement, les métiers et certaines conditions de vie.'
        },
        exercises: [
          {
            question: 'À quel roi associe-t-on la Grande Pyramide de Gizeh ?',
            answer: 'Au roi Khéops.'
          },
          {
            question: 'Pourquoi la pyramide à degrés de Saqqarah est-elle importante ?',
            answer: 'Elle constitue un jalon majeur de l’architecture monumentale en pierre et est associée au roi Djéser.'
          },
          {
            question: 'Quelle différence générale existe entre une tombe et un temple ?',
            answer: 'Une tombe accueille une sépulture et des dispositifs funéraires, tandis qu’un temple est consacré au culte des divinités et aux cérémonies religieuses.'
          },
          {
            question: 'Quelles données permettent d’étudier l’organisation du travail sur les grands chantiers ?',
            answer: 'Les traces de carrières, les outils, les installations de travailleurs, les inscriptions et les restes archéologiques liés à l’approvisionnement.'
          },
          {
            question: 'Peut-on affirmer que tous les travailleurs des pyramides étaient des esclaves ?',
            answer: 'Non. Les données archéologiques témoignent de groupes de travailleurs organisés. Les conditions de recrutement et de travail doivent être étudiées selon les périodes et les contextes.'
          },
          {
            question: 'Pourquoi faut-il interpréter les peintures funéraires avec prudence ?',
            answer: 'Elles suivent des conventions artistiques et religieuses et ne représentent pas nécessairement les activités quotidiennes de manière neutre ou exhaustive.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Ancient Egypt', url: 'https://www.worldhistory.org/egypt/' },
          { title: 'World History Encyclopedia — Old Kingdom of Egypt', url: 'https://www.worldhistory.org/timeline/Old_Kingdom_of_Egypt/' },
          { title: 'The Metropolitan Museum of Art — Egyptian Tombs: Life Along the Nile', url: 'https://www.metmuseum.org/fr/essays/egyptian-tombs-life-along-the-nile' },
          { title: 'The Metropolitan Museum of Art — The Art of Ancient Egypt: A Resource for Educators', url: 'https://resources.metmuseum.org/resources/metpublications/pdf/The_Art_of_Ancient_Egypt_A_Resource_for_Educators.pdf' }
        ]
      }
    },
    {
      id: 'religion-momification',
      title: 'Les dieux, les croyances et la vie après la mort',
      field: 'Égypte antique · Polythéisme, maât, rites funéraires et pratiques de momification',
      summary: 'Étudier les divinités, les conceptions de l’ordre cosmique, les rites funéraires et les transformations des croyances religieuses.',
      lesson: {
        sections: [
          'La religion égyptienne antique comprend de nombreuses divinités dont les fonctions, les formes et les relations varient selon les lieux et les époques. Rê est associé au Soleil, Osiris au monde des morts et à la renaissance, Isis à la protection et à la maternité, tandis qu’Anubis est étroitement lié aux rites funéraires. Ces associations constituent des repères utiles, mais les divinités peuvent posséder plusieurs fonctions et être rapprochées d’autres dieux dans des traditions différentes.',
          'Les temples jouent un rôle essentiel dans les pratiques religieuses. Ils sont considérés comme des lieux où les divinités sont honorées par des rites, des offrandes et des cérémonies. Les prêtres accomplissent des fonctions rituelles et participent à l’entretien des cultes. Les temples possèdent aussi des terres, des ateliers et des ressources dans certains contextes. Leur rôle ne se limite donc pas à celui d’un lieu de rassemblement comparable à une institution religieuse moderne.',
          'Le concept de maât exprime un ordre juste et équilibré auquel le roi et les humains doivent contribuer. Il concerne notamment la justice, la vérité et l’harmonie du monde. Dans l’idéologie royale, le souverain doit préserver cet ordre contre le désordre. La maât possède une dimension religieuse et politique : elle aide à comprendre comment les Égyptiens représentaient la responsabilité du roi et l’organisation idéale de la société.',
          'Les croyances concernant l’existence après la mort évoluent au cours de l’histoire. Les tombes, les inscriptions et les textes funéraires témoignent de représentations complexes du devenir du défunt. La préservation du corps, les rites, les offrandes et les formules écrites pouvaient contribuer à assurer une existence posthume favorable. Les pratiques et les ressources mises en œuvre variaient selon les périodes, les moyens des familles et les traditions funéraires.',
          'La momification vise à préserver le corps du défunt. Les techniques ont changé au cours du temps et ne peuvent pas être décrites comme une procédure identique pendant toute l’histoire égyptienne. La préparation pouvait comprendre des traitements du corps, l’emploi de substances desséchantes, des textiles et des résines. Les méthodes exactes différaient selon les périodes et les moyens disponibles. Les analyses modernes des momies permettent de mieux comprendre ces pratiques et d’étudier également la santé, l’alimentation et certaines conditions de vie.',
          'Les tombes pouvaient contenir des objets personnels, des amulettes, des récipients, des meubles, des aliments ou des textes. Ces dépôts répondaient à différentes fonctions religieuses, symboliques et sociales. Ils ne doivent pas être interprétés comme une liste universelle d’objets obligatoires. Certaines sépultures sont très riches, tandis que d’autres comprennent peu de biens. Les différences peuvent refléter le statut social, les ressources, les choix rituels et l’état de conservation des vestiges.',
          'Les textes funéraires ont changé au fil des siècles. Les Textes des pyramides sont associés à des monuments royaux de l’Ancien Empire. Les Textes des sarcophages apparaissent dans des contextes funéraires ultérieurs, notamment au Moyen Empire. Ce que l’on appelle aujourd’hui le Livre des morts rassemble des formules funéraires utilisées sur des supports tels que des papyrus à partir du Nouvel Empire et durant les périodes suivantes. Il ne s’agit pas d’un livre unique, rédigé une fois pour toutes, avec un contenu identique dans toutes les tombes.',
          'L’étude de la religion égyptienne exige enfin de croiser les sources. Les textes royaux, les images de temples, les objets funéraires et les vestiges humains n’apportent pas le même type d’information. Les inscriptions officielles présentent souvent une vision idéalisée de l’ordre et du pouvoir. Les restes archéologiques permettent de compléter cette vision, mais leur interprétation demeure parfois incertaine. Les chercheurs doivent donc distinguer ce qui est directement attesté de ce qui constitue une reconstruction probable.'
        ],
        example: {
          statement: 'Un archéologue découvre une tombe avec des amulettes, des inscriptions et des restes de textiles. Peut-il conclure que tous les Égyptiens étaient enterrés exactement de cette manière ?',
          calculation: 'Une conclusion historique exige de comparer plusieurs tombes, périodes, régions et contextes sociaux.',
          answer: 'Non. La découverte fournit des informations sur cette sépulture précise. Il faut la comparer à d’autres données avant de proposer une généralisation.'
        },
        exercise: {
          question: 'Pourquoi les pratiques funéraires sont-elles essentielles à l’étude des croyances égyptiennes, et quelles limites faut-il respecter dans leur interprétation ?',
          answer: 'Les tombes conservent des textes, des objets, des décors et parfois des restes humains qui renseignent sur les rites et les conceptions de l’au-delà. Cependant, les pratiques varient selon les époques et les statuts sociaux. Les vestiges ne permettent pas toujours de connaître les convictions personnelles de chaque défunt.'
        },
        exercises: [
          {
            question: 'Quel dieu est notamment associé au monde des morts et à la renaissance ?',
            answer: 'Osiris.'
          },
          {
            question: 'À quelles fonctions associe-t-on couramment Anubis ?',
            answer: 'Aux rites funéraires et à la protection des défunts.'
          },
          {
            question: 'Que désigne la maât ?',
            answer: 'Un principe d’ordre, de justice, de vérité et d’équilibre.'
          },
          {
            question: 'Quel était l’objectif principal de la momification ?',
            answer: 'Préserver le corps du défunt selon les pratiques et les croyances funéraires de l’époque.'
          },
          {
            question: 'Le Livre des morts était-il un ouvrage identique dans toutes les tombes ?',
            answer: 'Non. Il s’agit d’un ensemble de formules funéraires dont la sélection et la présentation pouvaient varier.'
          },
          {
            question: 'Pourquoi les objets trouvés dans une tombe doivent-ils être interprétés dans leur contexte ?',
            answer: 'Leur sens dépend notamment de la période, du statut du défunt, des pratiques funéraires et de leur association avec d’autres vestiges.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Ancient Egypt', url: 'https://www.worldhistory.org/egypt/' },
          { title: 'The Metropolitan Museum of Art — Egyptian Tombs: Life Along the Nile', url: 'https://www.metmuseum.org/fr/essays/egyptian-tombs-life-along-the-nile' },
          { title: 'The Metropolitan Museum of Art — Egypt in the Middle Kingdom', url: 'https://www.metmuseum.org/fr/essays/egypt-in-the-middle-kingdom-2030-1640-b-c' }
        ]
      }
    },
    {
      id: 'ecriture-savoirs',
      title: 'Les hiéroglyphes, les scribes et les savoirs',
      field: 'Égypte antique · Écriture, administration, littérature et connaissances',
      summary: 'Comprendre les systèmes d’écriture égyptiens, le travail des scribes, les supports écrits et la transmission des connaissances.',
      lesson: {
        sections: [
          'Les premières attestations de l’écriture égyptienne remontent à la fin du IVe millénaire av. J.-C. Leur apparition accompagne la formation de structures politiques et administratives plus complexes. Les signes servent à noter des noms, des informations et des textes de différentes natures. Les premières inscriptions connues ne permettent pas de reconstituer toutes les étapes de l’invention de l’écriture : il est donc préférable de parler de traces anciennes attestées plutôt que d’un jour précis où les hiéroglyphes auraient été inventés.',
          'Les hiéroglyphes constituent un système d’écriture combinant plusieurs types de signes. Certains représentent des sons, d’autres peuvent représenter des mots, et des déterminatifs précisent le sens d’un terme sans nécessairement se prononcer. L’écriture hiéroglyphique est employée notamment sur les monuments, les objets cérémoniels et les supports religieux. Sa disposition peut varier : les signes peuvent être organisés en lignes ou en colonnes et se lire selon leur orientation.',
          'Les Égyptiens ont également employé des écritures cursives. Le hiératique est une forme liée aux hiéroglyphes, adaptée à des usages manuscrits. Le démotique apparaît plus tard, au cours du Ier millénaire av. J.-C., et devient important dans divers documents administratifs et privés. Ces écritures ne remplacent pas nécessairement les hiéroglyphes dans tous les contextes : les choix dépendent de la période, du support, de la fonction du texte et des habitudes des scribes.',
          'Les supports écrits sont variés. Les inscriptions monumentales sont gravées ou peintes sur la pierre. Le papyrus, fabriqué à partir d’une plante poussant notamment dans les zones humides du Nil, sert à produire des feuilles pouvant être assemblées en rouleaux. Des textes sont également écrits sur des ostraca, c’est-à-dire des fragments de pierre ou de céramique, qui peuvent servir de supports pratiques. Les documents conservés représentent seulement une partie de la production écrite ancienne, car de nombreux supports ont disparu.',
          'Les scribes apprennent à lire et à écrire grâce à une formation spécialisée. Leur travail peut inclure la rédaction de documents administratifs, le calcul de quantités, l’enregistrement de livraisons, la copie de textes et la préparation d’inscriptions. L’écriture ne sert donc pas seulement à transmettre des idées religieuses : elle intervient aussi dans la gestion des ressources, la diplomatie, la littérature et l’exercice du pouvoir. Les compétences et les responsabilités des scribes diffèrent selon leur formation et leur position.',
          'Les textes égyptiens conservés comprennent des hymnes, des récits, des instructions, des documents juridiques, des lettres, des listes administratives et des textes funéraires. Les textes littéraires ne doivent pas être considérés comme des comptes rendus directs de la vie quotidienne. Ils possèdent des conventions, des objectifs et des contextes de composition propres. Les documents administratifs, quant à eux, peuvent éclairer la gestion des ressources, mais ils ne décrivent pas toujours l’ensemble de la société.',
          'Les Égyptiens ont développé des connaissances pratiques en mathématiques, en médecine, en observation du ciel et en mesure des terres. Les besoins administratifs et les activités artisanales favorisaient notamment le calcul des quantités, des surfaces et des volumes. Des papyrus médicaux conservés présentent des observations, des diagnostics et des traitements. Il faut cependant éviter d’attribuer à tous les Égyptiens un savoir uniforme : les connaissances variaient selon les spécialistes, les époques et les domaines étudiés.',
          'La pierre de Rosette joue un rôle majeur dans le déchiffrement moderne des hiéroglyphes. Elle porte un décret de 196 av. J.-C. présenté en trois versions : en écriture hiéroglyphique, en démotique et en grec ancien. La présence du grec, que les chercheurs pouvaient lire, permet de comparer les versions. Jean-François Champollion publie une avancée décisive dans le déchiffrement en 1822. Ce résultat repose aussi sur des travaux antérieurs et sur l’étude d’autres inscriptions : la pierre de Rosette n’a pas, à elle seule, livré instantanément toutes les règles de l’écriture.',
          'Le déchiffrement a transformé l’étude de l’Égypte antique. Les chercheurs peuvent désormais lire de nombreux textes anciens et comparer les informations écrites avec les objets et les monuments. Il reste néanmoins des difficultés d’interprétation, car les mots, les expressions, les institutions et les croyances doivent être replacés dans leur contexte historique. La traduction d’un texte ne suffit pas toujours à établir le sens exact d’un passage ou l’intention de son auteur.'
        ],
        example: {
          statement: 'La pierre de Rosette date de 196 av. J.-C. et Champollion annonce une avancée majeure dans le déchiffrement des hiéroglyphes en 1822 apr. J.-C. Combien d’années séparent ces deux repères en tenant compte de l’absence d’année zéro ?',
          calculation: '196 + 1822 - 1 = 2017',
          answer: 'Les deux repères sont séparés de 2017 ans. Le calcul tient compte du passage direct de 1 av. J.-C. à 1 apr. J.-C.'
        },
        exercise: {
          question: 'Explique comment l’écriture a contribué au fonctionnement de la civilisation égyptienne et pourquoi le déchiffrement des hiéroglyphes a transformé son étude moderne.',
          answer: 'L’écriture permettait notamment d’enregistrer des ressources, de rédiger des documents, de transmettre des textes et de réaliser des inscriptions monumentales. Le déchiffrement a rendu accessibles de nombreuses sources anciennes, qui peuvent être comparées aux vestiges archéologiques pour mieux comprendre les institutions, les croyances et la vie quotidienne.'
        },
        exercises: [
          {
            question: 'À quelle période remontent les premières attestations de l’écriture égyptienne ?',
            answer: 'À la fin du IVe millénaire av. J.-C.'
          },
          {
            question: 'Quels types de signes peuvent apparaître dans l’écriture hiéroglyphique ?',
            answer: 'Des signes phonétiques, des signes représentant des mots et des déterminatifs.'
          },
          {
            question: 'Qu’est-ce que le hiératique ?',
            answer: 'Une écriture cursive apparentée aux hiéroglyphes, utilisée notamment pour des documents manuscrits.'
          },
          {
            question: 'Sur quels supports les Égyptiens écrivaient-ils ?',
            answer: 'Entre autres sur la pierre, le papyrus et des fragments de céramique ou de pierre appelés ostraca.'
          },
          {
            question: 'Pourquoi les scribes occupaient-ils une place importante dans les institutions ?',
            answer: 'Leurs compétences permettaient de rédiger des textes, de tenir des comptes et d’enregistrer des informations utiles à l’administration et à d’autres activités.'
          },
          {
            question: 'Pourquoi la pierre de Rosette a-t-elle été déterminante ?',
            answer: 'Elle présente un décret en hiéroglyphes, en démotique et en grec ancien, ce qui a permis de comparer les versions et de progresser dans le déchiffrement.'
          },
          {
            question: 'Quel chercheur est associé à une avancée majeure du déchiffrement en 1822 ?',
            answer: 'Jean-François Champollion.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Egyptian Hieroglyphs', url: 'https://www.worldhistory.org/Egyptian_Hieroglyphs/' },
          { title: 'World History Encyclopedia — Rosetta Stone', url: 'https://www.worldhistory.org/Rosetta_Stone/' },
          { title: 'World History Encyclopedia — Writing in Ancient Egypt', url: 'https://www.worldhistory.org/collection/245/writing-in-ancient-egypt/' },
          { title: 'The British Museum — The Rosetta Stone', url: 'https://www.britishmuseum.org/collection/egypt/rosetta-stone' }
        ]
      }
    }
  ]
}, // FIN BRANCHE 5


  // BRANCHE — LA RÉVOLUTION SCIENTIFIQUE
  {
    id: 'revolution-scientifique',
    sortYear: 1550,
    title: 'La révolution scientifique',
    note: 'Six chapitres sur les transformations des savoirs en Europe aux XVIe et XVIIe siècles : astronomie, instruments, méthodes d’enquête, anatomie, physique et circulation des connaissances. Les dates sont des repères ; les historiens discutent les limites et l’unité de cette « révolution », qui fut progressive et incomplète.',
    chapters: [
      {
        id: 'nouvelle-vision-univers',
        title: 'Une nouvelle vision de l’Univers : Copernic, Kepler et Galilée',
        field: 'Histoire des sciences · Astronomie · XVIe-XVIIe siècles',
        summary: 'Comprendre comment l’héliocentrisme et les observations astronomiques ont remis en question des modèles anciens sans faire disparaître immédiatement toutes les conceptions antérieures.',
        lesson: {
          sections: [
            'Pendant des siècles, le modèle géocentrique de Ptolémée a servi de cadre majeur aux calculs astronomiques : la Terre y occupe une position centrale. Ce modèle s’inscrivait dans des traditions antiques et médiévales diverses. Il ne faut toutefois pas réduire les savoirs du Moyen Âge à une simple répétition des Anciens : les astronomes ont aussi développé des techniques de calcul et des observations précises.',
            'En 1543, Nicolas Copernic publie De revolutionibus orbium coelestium. Il y présente un modèle dans lequel la Terre tourne sur elle-même et effectue une révolution annuelle autour du Soleil. Cette proposition héliocentrique ne s’impose pas immédiatement : elle soulève des difficultés d’observation, de physique et d’interprétation, et ses premières versions ne résolvent pas toutes les questions astronomiques.',
            'Johannes Kepler exploite notamment les observations très précises de Tycho Brahe. Il établit que les planètes suivent des orbites elliptiques, et non des cercles parfaits. Cette conclusion améliore les prédictions astronomiques et rompt avec un idéal ancien de mouvements célestes nécessairement circulaires.',
            'À partir de 1609, Galilée utilise une lunette astronomique améliorée pour observer le ciel. Il décrit notamment des reliefs lunaires, les satellites de Jupiter et les phases de Vénus. Ces observations fragilisent plusieurs éléments de la cosmologie traditionnelle et soutiennent certains aspects du modèle copernicien, mais elles ne démontrent pas à elles seules toutes ses propositions.',
            'L’affaire Galilée montre que les débats ne se résument pas à une opposition simple entre science et religion. Galilée est jugé par l’Inquisition romaine en 1633 et contraint d’abjurer la défense du copernicianisme. Les convictions religieuses, les interprétations des textes, les enjeux institutionnels et les arguments scientifiques interagissent dans ce conflit.'
          ],
          example: {
            statement: 'Une planète est observée à plusieurs moments de son parcours. Quel modèle décrit mieux les résultats de Kepler : une orbite circulaire ou une orbite elliptique ?',
            calculation: 'Il faut comparer les positions calculées à partir de chaque modèle avec les observations disponibles, plutôt que choisir un modèle uniquement parce qu’il paraît plus parfait.',
            answer: 'Le modèle elliptique de Kepler décrit mieux les observations. Ses lois précisent la forme des orbites et les variations du mouvement planétaire.'
          },
          exercise: {
            question: 'Pourquoi les observations de Galilée ont-elles compté dans les débats sur le modèle géocentrique ?',
            answer: 'Elles ont révélé des phénomènes difficiles à concilier avec certaines conceptions traditionnelles, notamment les satellites de Jupiter et les phases de Vénus.'
          },
          exercises: [
            {
              question: 'Que signifie « héliocentrique » ?',
              answer: 'Un modèle dans lequel le Soleil occupe la position centrale du système planétaire considéré, autour duquel la Terre et les autres planètes orbitent.'
            },
            {
              question: 'Quelle forme Kepler attribue-t-il aux orbites des planètes ?',
              answer: 'Des ellipses.'
            },
            {
              question: 'Les observations télescopiques de Galilée ont-elles, à elles seules, réglé tous les débats astronomiques ?',
              answer: 'Non. Elles ont apporté des preuves importantes, mais les interprétations et les modèles ont continué à être discutés.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution scientifique', url: 'https://www.worldhistory.org/trans/fr/1-21157/revolution-scientifique/' },
            { title: 'World History Encyclopedia — Astronomy in the Scientific Revolution', url: 'https://www.worldhistory.org/article/2306/astronomy-in-the-scientific-revolution/' },
            { title: 'Stanford Encyclopedia of Philosophy — Galileo Galilei', url: 'https://plato.stanford.edu/entries/galileo/' }
          ]
        }
      },
      {
        id: 'instruments-et-observation',
        title: 'Voir autrement : télescope, microscope et instruments de mesure',
        field: 'Histoire des sciences · Instruments · XVIIe siècle',
        summary: 'Étudier comment les instruments ont élargi les observations et rendu possibles de nouvelles comparaisons, tout en posant des questions sur la fiabilité des mesures.',
        lesson: {
          sections: [
            'La révolution scientifique s’appuie sur des instruments qui étendent les capacités des sens et rendent certains phénomènes mesurables. Le télescope permet d’observer des objets célestes avec davantage de détails ; le microscope révèle des structures trop petites pour être vues à l’œil nu. Ces instruments ne donnent pas automatiquement une vérité incontestable : il faut apprendre à les fabriquer, les régler, interpréter leurs images et comparer les observations.',
            'Les premiers télescopes connus apparaissent aux Pays-Bas vers 1608. Galilée en construit et en améliore des modèles, puis les utilise pour l’astronomie. Les observations des reliefs de la Lune et des satellites de Jupiter montrent que le ciel présente des phénomènes plus variés que ne le suggéraient certaines représentations héritées.',
            'Le microscope ouvre un autre domaine d’observation. En 1665, Robert Hooke publie Micrographia, ouvrage illustré d’observations microscopiques. Antonie van Leeuwenhoek réalise ensuite des observations remarquables de micro-organismes et de cellules sanguines à l’aide de microscopes qu’il perfectionne. Les mots et les catégories scientifiques se développent progressivement à partir de ces pratiques.',
            'Les instruments de mesure évoluent aussi. Le baromètre, associé aux travaux d’Evangelista Torricelli au XVIIe siècle, permet d’étudier la pression atmosphérique. Blaise Pascal contribue à établir que cette pression varie avec l’altitude. Les thermomètres et les horloges plus précises favorisent des mesures répétables et la comparaison de résultats.',
            'Un instrument n’est utile que dans un ensemble de pratiques : étalonnage, description des conditions d’observation, répétition et communication des résultats. Les scientifiques doivent aussi débattre des artefacts, des erreurs de mesure et des limites des appareils. La confiance dans l’observation instrumentale se construit donc par un travail collectif.'
          ],
          example: {
            statement: 'Deux observateurs examinent le même phénomène avec des microscopes différents et obtiennent des images légèrement différentes. Quelle démarche est la plus fiable ?',
            calculation: 'Comparer les instruments, répéter les observations, décrire les conditions et vérifier si d’autres observateurs obtiennent des résultats compatibles.',
            answer: 'Il faut comparer et répéter les observations, vérifier les instruments et publier les conditions de l’expérience. Une image isolée ne suffit pas à établir une conclusion générale.'
          },
          exercise: {
            question: 'Pourquoi un instrument scientifique ne garantit-il pas automatiquement une observation exacte ?',
            answer: 'Il peut présenter des limites ou des défauts, et les résultats dépendent aussi du réglage, de la méthode et de l’interprétation.'
          },
          exercises: [
            {
              question: 'Quel est l’apport principal du télescope dans l’astronomie du XVIIe siècle ?',
              answer: 'Il permet d’observer des détails et des objets célestes auparavant invisibles à l’œil nu.'
            },
            {
              question: 'Quel ouvrage de Robert Hooke, publié en 1665, présente des observations microscopiques ?',
              answer: 'Micrographia.'
            },
            {
              question: 'Cite deux pratiques qui rendent une mesure plus fiable.',
              answer: 'Par exemple : répéter les mesures, vérifier l’instrument, décrire les conditions et comparer les résultats avec ceux d’autres observateurs.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution scientifique', url: 'https://www.worldhistory.org/trans/fr/1-21157/revolution-scientifique/' },
            { title: 'World History Encyclopedia — Astronomy in the Scientific Revolution', url: 'https://www.worldhistory.org/article/2306/astronomy-in-the-scientific-revolution/' },
            { title: 'Royal Society — History of the Royal Society', url: 'https://royalsociety.org/about-us/history/' }
          ]
        }
      },
      {
        id: 'methodes-scientifiques',
        title: 'Expérimenter, raisonner, démontrer : de Bacon à Descartes',
        field: 'Histoire des sciences · Méthodes et philosophie naturelle · XVIIe siècle',
        summary: 'Distinguer l’observation, l’expérimentation, l’induction, la déduction et la formalisation mathématique sans réduire la science à une recette unique.',
        lesson: {
          sections: [
            'La transformation des sciences ne correspond pas à l’invention soudaine d’une méthode universelle. Les savants combinent des pratiques anciennes et nouvelles : observation, mesure, expérience, raisonnement logique, calcul mathématique et discussion des résultats. Les méthodes varient selon les problèmes étudiés.',
            'Francis Bacon défend une enquête organisée sur la nature. Dans Novum Organum, publié en 1620, il critique les raisonnements qui s’appuient trop vite sur des idées reçues et encourage la collecte méthodique d’observations et d’expériences. Son programme vise notamment à construire des connaissances utiles, en évitant de généraliser à partir de trop peu de cas.',
            'René Descartes accorde une place majeure au raisonnement, à l’analyse des problèmes et aux mathématiques. Son approche ne se confond pas avec celle de Bacon : les débats du XVIIe siècle opposent et combinent diverses façons de produire du savoir. Il serait donc inexact de dire que tous les savants adoptent une méthode unique ou que la science moderne repose uniquement sur l’expérience ou uniquement sur la raison.',
            'L’expérience devient particulièrement importante lorsqu’elle permet de départager des explications concurrentes. Pour être convaincante, elle doit être décrite avec assez de précision pour que d’autres puissent l’examiner, la répéter ou en discuter les limites. Les échanges écrits, les démonstrations publiques et les publications contribuent à cette évaluation collective.',
            'Les mathématiques jouent un rôle croissant dans la formulation des régularités naturelles. Elles permettent d’exprimer des relations quantitatives et de comparer des prédictions aux mesures. L’idéal d’une connaissance démontrée évolue toutefois au fil des disciplines : l’astronomie, la mécanique, la médecine et l’histoire naturelle ne disposent pas toutes des mêmes types de preuves.'
          ],
          example: {
            statement: 'Un chercheur pense qu’un phénomène se produit toujours dans les mêmes conditions. Comment peut-il examiner cette idée de façon rigoureuse ?',
            calculation: 'Il formule clairement l’affirmation, définit ce qu’il peut observer ou mesurer, répète les essais dans des conditions décrites et compare les résultats à l’affirmation initiale.',
            answer: 'Il doit confronter son idée à des observations et des expériences répétées, décrire sa démarche et accepter de modifier sa conclusion si les résultats la contredisent.'
          },
          exercise: {
            question: 'Quelle différence générale peut-on faire entre l’induction et la déduction ?',
            answer: 'L’induction part de cas observés pour proposer une généralisation ; la déduction tire une conséquence particulière à partir de prémisses ou d’un modèle général.'
          },
          exercises: [
            {
              question: 'Quel ouvrage de Francis Bacon paraît en 1620 ?',
              answer: 'Novum Organum.'
            },
            {
              question: 'Pourquoi faut-il rendre compte des conditions d’une expérience ?',
              answer: 'Pour permettre aux autres d’évaluer la démarche, de comprendre ses limites et, si possible, de la répéter.'
            },
            {
              question: 'La révolution scientifique a-t-elle imposé une méthode identique dans toutes les disciplines ?',
              answer: 'Non. Les méthodes se sont diversifiées et combinent, selon les domaines, observation, expérimentation, raisonnement et mathématiques.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution scientifique', url: 'https://www.worldhistory.org/trans/fr/1-21157/revolution-scientifique/' },
            { title: 'Stanford Encyclopedia of Philosophy — Scientific Revolutions', url: 'https://plato.stanford.edu/entries/scientific-revolutions/' }
          ]
        }
      },
      {
        id: 'anatomie-et-circulation',
        title: 'Observer le corps : anatomie et circulation sanguine',
        field: 'Histoire des sciences · Médecine et anatomie · XVIe-XVIIe siècles',
        summary: 'Découvrir comment les dissections, les observations et les raisonnements sur la circulation ont contribué à réviser des autorités médicales anciennes.',
        lesson: {
          sections: [
            'La médecine européenne de la Renaissance s’appuie largement sur des textes antiques, notamment ceux de Galien, mais les praticiens poursuivent aussi leurs propres observations. Les connaissances médicales ne changent pas d’un seul coup : les nouvelles descriptions coexistent longtemps avec des traditions anciennes, et les progrès anatomiques ne signifient pas que les médecins savent déjà traiter efficacement toutes les maladies.',
            'En 1543, André Vésale publie De humani corporis fabrica, ouvrage fondé sur une étude anatomique détaillée du corps humain. Il corrige plusieurs descriptions héritées de Galien, dont certaines reposaient sur la dissection d’animaux plutôt que sur celle de corps humains. L’importance de Vésale tient notamment à la place donnée à l’observation anatomique directe.',
            'William Harvey expose en 1628, dans De Motu Cordis, son argumentation en faveur de la circulation du sang. Il s’appuie sur des observations et des calculs concernant le cœur et le mouvement du sang. Sa proposition contredit des éléments importants de la physiologie traditionnelle et suscite des discussions.',
            'Au XVIIe siècle, le microscope permet d’observer des structures trop petites pour être distinguées à l’œil nu. En 1661, Marcello Malpighi décrit des capillaires dans les poumons de la grenouille. Ces observations aident à comprendre la continuité entre les artères et les veines et apportent un élément important à l’explication de la circulation proposée par Harvey.',
            'Ces changements illustrent l’importance de confronter les textes aux observations, sans supposer que les livres anciens sont toujours faux ou que les nouvelles observations suffisent immédiatement à résoudre toutes les questions. La médecine de cette période reste limitée par les techniques disponibles et par une compréhension encore partielle des maladies.'
          ],
          example: {
            statement: 'Une description anatomique ancienne ne correspond pas à ce qu’un observateur constate lors d’une dissection. Quelle attitude est la plus rigoureuse ?',
            calculation: 'Décrire précisément l’observation, vérifier les conditions et la répétabilité, puis comparer le résultat aux descriptions antérieures et aux observations d’autres praticiens.',
            answer: 'Il faut examiner la différence et la documenter. Une autorité ancienne ne remplace pas la vérification, mais une observation isolée doit elle aussi être contrôlée.'
          },
          exercise: {
            question: 'Pourquoi l’observation anatomique a-t-elle joué un rôle important dans l’évolution de la médecine ?',
            answer: 'Elle a permis de comparer directement les descriptions du corps avec les structures observées et de corriger certaines erreurs transmises par les textes.'
          },
          exercises: [
            {
              question: 'Quel ouvrage anatomique Vésale publie-t-il en 1543 ?',
              answer: 'De humani corporis fabrica.'
            },
            {
              question: 'Quelle idée majeure William Harvey défend-il dans son ouvrage de 1628 ?',
              answer: 'La circulation du sang dans le corps.'
            },
            {
              question: 'Pourquoi les observations microscopiques de Malpighi sont-elles importantes ?',
              answer: 'La description des capillaires contribue à expliquer la continuité entre les artères et les veines.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution scientifique', url: 'https://www.worldhistory.org/trans/fr/1-21157/revolution-scientifique/' },
            { title: 'Encyclopaedia Britannica — Andreas Vesalius', url: 'https://www.britannica.com/biography/Andreas-Vesalius' },
            { title: 'Encyclopaedia Britannica — William Harvey', url: 'https://www.britannica.com/biography/William-Harvey' }
          ]
        }
      },
      {
        id: 'physique-mathematiques-newton',
        title: 'Mesurer la nature : Pascal, Boyle, Huygens et Newton',
        field: 'Histoire des sciences · Physique et mathématiques · XVIIe siècle',
        summary: 'Suivre l’essor des mesures quantitatives, de l’étude de la pression atmosphérique et du vide à la mécanique et à la gravitation de Newton.',
        lesson: {
          sections: [
            'Au XVIIe siècle, de nombreux chercheurs cherchent à expliquer les phénomènes naturels par des relations mesurables. Cette approche ne remplace pas immédiatement toutes les autres formes de raisonnement, mais elle permet de formuler des modèles qui peuvent être confrontés à des observations et à des expériences.',
            'Evangelista Torricelli met au point en 1643 une expérience à la colonne de mercure qui conduit au développement du baromètre. Blaise Pascal contribue à montrer que la pression atmosphérique varie avec l’altitude. Ces travaux aident à comprendre que l’air exerce une pression et que les phénomènes observés ne s’expliquent pas seulement par des idées héritées.',
            'Robert Boyle et Robert Hooke utilisent une pompe à air pour étudier le comportement des gaz. Les expériences de Boyle conduisent à une relation entre pression et volume pour une quantité donnée de gaz à température constante : lorsque la pression augmente, le volume diminue, dans les conditions décrites par cette loi. La formulation exacte dépend des conditions expérimentales.',
            'Christiaan Huygens contribue à la mécanique et à la mesure du temps, notamment avec l’horloge à pendule mise au point en 1656-1657. Une mesure plus régulière du temps aide à comparer des mouvements et à améliorer certaines observations. La précision des instruments constitue donc une condition importante du progrès expérimental.',
            'En 1687, Isaac Newton publie les Principia, où il formule les lois du mouvement et la loi de la gravitation universelle. Son travail réunit des résultats de mécanique et d’astronomie dans un cadre mathématique commun. Il permet d’expliquer à l’aide des mêmes principes des mouvements terrestres et célestes, sans pour autant répondre à toutes les questions sur la nature profonde de la gravité.'
          ],
          example: {
            statement: 'À température constante, une quantité donnée de gaz occupe un volume plus petit quand sa pression augmente. Quelle relation générale cela illustre-t-il ?',
            calculation: 'Pour une quantité fixe de gaz dans les conditions de la loi de Boyle, la pression et le volume varient en sens inverse : P × V reste constant dans le modèle idéal considéré.',
            answer: 'Il s’agit de la loi de Boyle : à température constante, la pression est inversement proportionnelle au volume pour une quantité donnée de gaz.'
          },
          exercise: {
            question: 'Pourquoi la formulation mathématique des phénomènes est-elle importante pour la physique de cette période ?',
            answer: 'Elle permet d’exprimer précisément des relations, de comparer les modèles aux mesures et de produire des prédictions vérifiables.'
          },
          exercises: [
            {
              question: 'Que permet de mesurer un baromètre ?',
              answer: 'La pression atmosphérique.'
            },
            {
              question: 'Quelle condition est essentielle à l’énoncé usuel de la loi de Boyle ?',
              answer: 'La température doit rester constante et la quantité de gaz considérée doit être fixe.'
            },
            {
              question: 'Quel ouvrage majeur Newton publie-t-il en 1687 ?',
              answer: 'Les Philosophiae Naturalis Principia Mathematica, généralement appelés les Principia.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution scientifique', url: 'https://www.worldhistory.org/trans/fr/1-21157/revolution-scientifique/' },
            { title: 'Encyclopaedia Britannica — Isaac Newton', url: 'https://www.britannica.com/biography/Isaac-Newton' },
            { title: 'Royal Society — History of the Royal Society', url: 'https://royalsociety.org/about-us/history/' }
          ]
        }
      },
      {
        id: 'institutions-diffusion-limites',
        title: 'Faire circuler les savoirs : académies, livres et controverses',
        field: 'Histoire des sciences · Institutions et sociétés savantes · XVIIe siècle',
        summary: 'Comprendre comment les sociétés savantes, les publications et les correspondances ont contribué à la circulation des résultats, tout en gardant à l’esprit les limites sociales et géographiques de cette transformation.',
        lesson: {
          sections: [
            'Les progrès scientifiques reposent aussi sur des réseaux de personnes, de livres, d’instruments et d’institutions. Les correspondances permettent aux chercheurs de partager des observations, de demander des avis et de discuter des résultats à distance. L’imprimerie facilite la diffusion des textes, même si leur accès demeure inégal selon les lieux, les langues, les ressources et le niveau d’instruction.',
            'Des sociétés savantes se structurent au XVIIe siècle. L’Accademia del Cimento est fondée à Florence en 1657 ; la Royal Society se constitue à Londres dans les années 1660, avec une charte royale en 1662 ; l’Académie royale des sciences est créée à Paris en 1666. Ces institutions organisent des réunions, des démonstrations, des échanges et la conservation de comptes rendus.',
            'La publication et la discussion des résultats favorisent l’examen critique, mais il serait anachronique d’assimiler directement les pratiques du XVIIe siècle aux systèmes contemporains d’évaluation par les pairs. Les formes de contrôle, les critères de preuve et les possibilités d’accès aux institutions varient selon les périodes et les milieux.',
            'La révolution scientifique est principalement étudiée à partir des transformations en Europe, mais les savoirs circulent dans un monde plus vaste. Les échanges commerciaux, les voyages, les traductions et les entreprises impériales mettent en contact des connaissances issues de différentes régions. Il faut éviter de raconter l’histoire comme si les sciences européennes s’étaient développées dans un isolement complet, ou comme si tous les groupes avaient bénéficié de manière égale de ces échanges.',
            'Enfin, l’expression « révolution scientifique » est une catégorie historiographique. Beaucoup d’historiens reconnaissent des transformations majeures entre le XVIe et le XVIIe siècle, mais discutent leur rythme, leur cohérence et leurs limites. Des continuités avec les périodes précédentes subsistent, et les nouvelles méthodes ne remplacent pas partout et immédiatement les pratiques anciennes.'
          ],
          example: {
            statement: 'Un savant publie une observation dans un ouvrage, puis d’autres chercheurs la répètent et discutent leurs résultats. En quoi cette circulation peut-elle renforcer les connaissances ?',
            calculation: 'La comparaison entre plusieurs observations permet de repérer les erreurs possibles, de préciser les conditions et d’identifier les résultats qui résistent à la vérification.',
            answer: 'La circulation rend les résultats accessibles à la critique et à la vérification collective. Elle ne garantit pas l’absence d’erreur, mais permet de mieux les détecter et de corriger les conclusions.'
          },
          exercise: {
            question: 'Pourquoi faut-il présenter la révolution scientifique comme une transformation progressive plutôt que comme une rupture instantanée ?',
            answer: 'Parce que les changements se sont étalés sur plusieurs générations, que les anciennes et nouvelles approches ont coexisté et que les historiens débattent de ses limites.'
          },
          exercises: [
            {
              question: 'Cite une institution scientifique fondée au XVIIe siècle et son lieu.',
              answer: 'Par exemple : l’Accademia del Cimento à Florence, la Royal Society à Londres ou l’Académie royale des sciences à Paris.'
            },
            {
              question: 'Quel rôle les correspondances et les publications jouent-elles dans les sciences ?',
              answer: 'Elles permettent de diffuser des résultats, de confronter les observations et de discuter les méthodes.'
            },
            {
              question: 'Pourquoi le terme « révolution scientifique » est-il discuté par les historiens ?',
              answer: 'Parce qu’il peut donner l’impression d’une rupture unique et complète, alors que les changements furent progressifs, divers et liés à des continuités.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution scientifique', url: 'https://www.worldhistory.org/trans/fr/1-21157/revolution-scientifique/' },
            { title: 'Stanford Encyclopedia of Philosophy — Scientific Revolutions', url: 'https://plato.stanford.edu/entries/scientific-revolutions/' },
            { title: 'Royal Society — History of the Royal Society', url: 'https://royalsociety.org/about-us/history/' }
          ]
        }
      }
    ]
  },

// BRANCHE — LA RÉVOLUTION INDUSTRIELLE
  {
    id: 'revolution-industrielle',
    sortYear: 1760,
    title: 'La révolution industrielle',
    note: 'Six chapitres sur les transformations économiques, techniques et sociales amorcées en Grande-Bretagne au XVIIIe siècle puis diffusées, à des rythmes différents, dans d’autres régions : mécanisation, vapeur, usines, transports, conditions de travail et nouvelles formes de production. Les dates sont des repères conventionnels : l’industrialisation fut un processus progressif et inégal, non un événement instantané.',
    chapters: [
      {
        id: 'origines-industrialisation',
        title: 'Pourquoi l’industrialisation commence-t-elle en Grande-Bretagne ?',
        field: 'Histoire économique et sociale · Grande-Bretagne · XVIIIe siècle',
        summary: 'Étudier plusieurs facteurs combinés — charbon, production agricole, capitaux, marchés, travail et savoir-faire — sans attribuer l’industrialisation à une cause unique.',
        lesson: {
          sections: [
            'La révolution industrielle désigne la transformation progressive d’économies principalement agricoles et artisanales en économies où la production mécanisée et l’industrie occupent une place croissante. Le processus commence en Grande-Bretagne au XVIIIe siècle, puis se diffuse ailleurs à des dates et à des rythmes différents. Les historiens discutent les limites exactes de cette période, car les changements ne se produisent ni partout au même moment ni dans tous les secteurs à la fois.',
            'La Grande-Bretagne possède plusieurs conditions favorables. Des gisements de charbon accessibles fournissent une source d’énergie importante, tandis que le fer est nécessaire à la fabrication de machines et d’équipements. L’usage du coke dans la production du fer se développe au début du XVIIIe siècle ; Abraham Darby joue un rôle notable dans l’emploi du coke dans un haut fourneau à Coalbrookdale en 1709. Ces ressources ne suffisent pas à elles seules : elles prennent de l’importance avec les compétences techniques, les investissements et la demande.',
            'Les changements agricoles, la croissance démographique, les réseaux commerciaux et l’existence de marchés contribuent également à transformer l’économie. La hausse de la demande pour les textiles et d’autres biens incite certains entrepreneurs à accroître la production. Le commerce britannique et l’empire colonial ont aussi participé à cette expansion ; ils sont liés à des rapports de pouvoir et à l’exploitation, notamment dans des économies atlantiques marquées par l’esclavage. Une explication historique complète doit tenir compte de ces dimensions plutôt que raconter l’industrialisation comme un progrès isolé.',
            'Les inventeurs, artisans, entrepreneurs et ouvriers apportent des savoir-faire complémentaires. Une invention ne devient pas automatiquement une technologie largement utilisée : elle doit être construite avec des matériaux disponibles, financée, entretenue et adaptée aux besoins des producteurs. Les améliorations techniques résultent souvent de plusieurs contributions successives, et non du travail d’une seule personne.',
            'La Grande-Bretagne n’est pas le seul territoire à connaître des activités manufacturières ou des innovations avant le XVIIIe siècle. Ce qui change progressivement, c’est la combinaison de plusieurs facteurs et l’extension de la production mécanisée. Il faut donc éviter d’expliquer le phénomène par une prétendue supériorité naturelle d’une population : les conditions économiques, politiques, énergétiques et commerciales ont une importance centrale.'
          ],
          example: {
            statement: 'Pourquoi la présence de charbon n’explique-t-elle pas, à elle seule, le début de la révolution industrielle en Grande-Bretagne ?',
            calculation: 'Pour expliquer un phénomène historique, il faut comparer plusieurs facteurs : ressources énergétiques, capitaux, compétences, marchés, organisation du travail et décisions d’investissement.',
            answer: 'Le charbon fournit une énergie utile, mais il faut aussi des machines, des travailleurs formés, des investissements, des réseaux de transport et une demande suffisante pour développer une industrie mécanisée.'
          },
          exercise: {
            question: 'Cite trois facteurs qui ont favorisé l’industrialisation britannique.',
            answer: 'Par exemple : l’accès au charbon, des savoir-faire techniques, les investissements, les marchés commerciaux, les transformations agricoles ou la demande de produits manufacturés.'
          },
          exercises: [
            {
              question: 'Dans quel pays la première industrialisation a-t-elle commencé au XVIIIe siècle ?',
              answer: 'En Grande-Bretagne.'
            },
            {
              question: 'À quoi sert le charbon dans les premières industries mécanisées ?',
              answer: 'Il fournit un combustible, notamment pour produire de la vapeur et pour certains procédés métallurgiques.'
            },
            {
              question: 'Pourquoi est-il trompeur de présenter l’industrialisation comme le résultat d’une invention unique ?',
              answer: 'Parce qu’elle résulte de plusieurs innovations, investissements, ressources, marchés et changements sociaux qui se renforcent mutuellement.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution industrielle britannique', url: 'https://www.worldhistory.org/trans/fr/1-21828/revolution-industrielle-britannique/' },
            { title: 'World History Encyclopedia — Why the Industrial Revolution Started in Britain', url: 'https://www.worldhistory.org/article/2221/why-the-industrial-revolution-started-in-britain/' },
            { title: 'Encyclopaedia Britannica — Industrial Revolution', url: 'https://www.britannica.com/event/Industrial-Revolution' }
          ]
        }
      },
      {
        id: 'textile-machines-usines',
        title: 'Le textile et la naissance de l’usine mécanisée',
        field: 'Histoire des techniques et du travail · Textile · XVIIIe-XIXe siècles',
        summary: 'Comprendre comment les machines de filage et de tissage augmentent la production et favorisent la concentration du travail dans des établissements spécialisés.',
        lesson: {
          sections: [
            'Avant l’industrialisation, une grande partie des textiles est fabriquée dans des foyers, de petits ateliers ou des manufactures. Le travail peut être réparti entre plusieurs étapes : préparation des fibres, filage, tissage et finition. La production domestique et artisanale ne disparaît pas dès l’apparition des usines ; pendant longtemps, différents systèmes coexistent.',
            'Au XVIIIe siècle, plusieurs inventions transforment le filage et le tissage en Grande-Bretagne. La spinning jenny, associée à James Hargreaves dans les années 1760, permet de filer plusieurs fils à la fois. Richard Arkwright contribue au développement et à la diffusion de machines de filage actionnées par une source d’énergie mécanique. La water frame utilise d’abord la force de l’eau dans des installations adaptées. Ces innovations augmentent la capacité de production, mais leur diffusion dépend des coûts, des compétences et de l’organisation des entreprises.',
            'Le métier à tisser mécanique de Edmund Cartwright, breveté à partir de 1785 puis amélioré, participe à la mécanisation du tissage. Les innovations ne sont pas toujours immédiatement efficaces : des ajustements techniques et des investissements sont nécessaires avant une utilisation rentable à grande échelle. Les progrès dans le filage et le tissage peuvent aussi se produire à des rythmes différents, ce qui crée des déséquilibres dans la chaîne de production.',
            'L’usine rassemble machines, énergie, matières premières et travailleurs dans un même lieu. Cette organisation facilite la surveillance de la production, l’entretien des équipements et la coordination des tâches. Elle impose aussi des horaires plus réguliers, une discipline de travail et un rythme souvent déterminé par la machine. Le passage à l’usine est donc une transformation de l’organisation du travail, pas seulement un changement d’outillage.',
            'La mécanisation accroît la quantité de textiles pouvant être fabriqués et contribue à réduire certains coûts unitaires. Ses bénéfices et ses effets sont toutefois inégalement répartis. Les entrepreneurs peuvent gagner en productivité, tandis que certains travailleurs qualifiés voient leur métier transformé ou leur rémunération fragilisée. Les conditions varient selon les entreprises, les régions, les périodes et les groupes de travailleurs.'
          ],
          example: {
            statement: 'Une machine peut filer plusieurs fils en même temps alors qu’un outil manuel n’en file qu’un à la fois. Quel changement économique cela peut-il favoriser ?',
            calculation: 'Si les autres conditions restent comparables, une machine capable de traiter plusieurs fils simultanément peut augmenter la quantité produite par unité de temps. Le gain réel dépend cependant des arrêts, de la qualité, de l’énergie et du coût de la machine.',
            answer: 'Elle peut accroître la productivité du filage et encourager une production plus concentrée dans des ateliers ou des usines mécanisés.'
          },
          exercise: {
            question: 'En quoi l’usine change-t-elle l’organisation du travail par rapport à la production domestique ?',
            answer: 'Elle rassemble les travailleurs et les machines dans un même lieu, coordonne les étapes de production et impose souvent des horaires et des rythmes communs.'
          },
          exercises: [
            {
              question: 'Quel secteur joue un rôle majeur dans les premières phases de l’industrialisation britannique ?',
              answer: 'L’industrie textile, notamment le coton.'
            },
            {
              question: 'Quel est l’intérêt général d’une machine de filage multipliant le nombre de fils traités simultanément ?',
              answer: 'Elle augmente la capacité de filage par unité de temps.'
            },
            {
              question: 'Les ateliers domestiques disparaissent-ils immédiatement avec les usines ?',
              answer: 'Non. Les formes de production domestique, artisanale et industrielle coexistent pendant une longue période.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution industrielle britannique', url: 'https://www.worldhistory.org/trans/fr/1-21828/revolution-industrielle-britannique/' },
            { title: 'Musée des Arts et Métiers — Dossier de l’enseignant : La Révolution industrielle', url: 'https://www.arts-et-metiers.net/musee/dossier-de-lenseignant-la-revolution-industrielle' },
            { title: 'Encyclopaedia Britannica — Industrial Revolution', url: 'https://www.britannica.com/event/Industrial-Revolution' }
          ]
        }
      },
      {
        id: 'vapeur-charbon-fer',
        title: 'Charbon, fer et machine à vapeur',
        field: 'Histoire des techniques · Énergie et métallurgie · XVIIIe siècle',
        summary: 'Suivre le rôle de la vapeur dans les mines et les usines, et distinguer les contributions de Newcomen et de Watt.',
        lesson: {
          sections: [
            'Les mines de charbon et de métaux sont essentielles à l’industrialisation, mais elles posent des difficultés techniques, notamment l’infiltration d’eau dans les galeries. Au début du XVIIIe siècle, Thomas Newcomen met au point une machine atmosphérique efficace pour pomper l’eau des mines. Une machine de ce type est installée près de Dudley en 1712. Elle consomme beaucoup de combustible, mais répond à un besoin industriel important.',
            'James Watt ne crée pas la machine à vapeur à partir de rien. Dans les années 1760, il travaille à améliorer les machines existantes et développe un condenseur séparé, qui réduit certaines pertes d’énergie. Son partenariat commercial avec Matthew Boulton contribue à la fabrication et à la diffusion de machines améliorées. Des perfectionnements ultérieurs permettent d’utiliser la vapeur pour produire un mouvement rotatif adapté à diverses machines industrielles.',
            'La vapeur transforme les possibilités d’implantation des usines. Les premières installations mécanisées peuvent dépendre de cours d’eau pour obtenir de l’énergie hydraulique. Une machine à vapeur permet davantage de flexibilité, même si elle exige du charbon, de l’eau, des capitaux, des réparations et une infrastructure appropriée. La transition vers la vapeur est progressive et ne remplace pas immédiatement l’énergie hydraulique.',
            'Le charbon joue également un rôle dans la métallurgie. Le coke, obtenu en chauffant le charbon pour en réduire les impuretés volatiles, peut servir de combustible dans les hauts fourneaux. L’amélioration de la production du fer fournit des matériaux pour les machines, les rails, les ponts et les outils. Les besoins des mines, des usines et des transports stimulent ainsi les secteurs les uns les autres.',
            'La vapeur et le charbon ont un coût environnemental. La combustion du charbon émet des fumées et des polluants ; l’extraction minière transforme les paysages et comporte des risques pour les travailleurs. Ces conséquences font partie de l’histoire industrielle et rappellent que les gains de production s’accompagnent de coûts sociaux et écologiques.'
          ],
          example: {
            statement: 'Pourquoi le condenseur séparé développé par James Watt a-t-il été important pour la machine à vapeur ?',
            calculation: 'Dans les machines antérieures, le cylindre devait être refroidi puis réchauffé au cours du cycle. Séparer la condensation du cylindre permet de réduire une partie de cette dépense thermique.',
            answer: 'Le condenseur séparé améliore l’efficacité de la machine en limitant les pertes de chaleur liées au refroidissement répété du cylindre.'
          },
          exercise: {
            question: 'Quelle différence faut-il faire entre les contributions de Thomas Newcomen et de James Watt ?',
            answer: 'Newcomen a mis au point une machine atmosphérique pratique au début du XVIIIe siècle ; Watt a ensuite apporté des améliorations importantes, notamment le condenseur séparé.'
          },
          exercises: [
            {
              question: 'À quel problème les premières machines de Newcomen répondent-elles notamment ?',
              answer: 'Au pompage de l’eau dans les mines.'
            },
            {
              question: 'Pourquoi la machine à vapeur facilite-t-elle l’implantation de certaines usines ?',
              answer: 'Elle réduit leur dépendance à la proximité immédiate d’un cours d’eau, à condition de disposer de combustible et d’infrastructures.'
            },
            {
              question: 'Cite une conséquence environnementale de l’usage massif du charbon.',
              answer: 'La pollution de l’air liée à la combustion ou les transformations des paysages provoquées par l’extraction minière.'
            }
          ],
          sources: [
            { title: 'Science Museum Group — Newcomen Atmospheric Engine', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co50900/newcomen-atmospheric-engine' },
            { title: 'Science Museum Group — Haydock Colliery Steam Engine', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co8404624/haydock-colliery-steam-engine' },
            { title: 'World History Encyclopedia — Révolution industrielle britannique', url: 'https://www.worldhistory.org/trans/fr/1-21828/revolution-industrielle-britannique/' }
          ]
        }
      },
      {
        id: 'transports-chemins-fer',
        title: 'Révolutionner les transports : canaux, chemins de fer et vapeur',
        field: 'Histoire des transports · Infrastructures · XVIIIe-XIXe siècles',
        summary: 'Expliquer comment les nouvelles infrastructures et la locomotive à vapeur facilitent le transport des matières premières, des marchandises et des personnes.',
        lesson: {
          sections: [
            'L’industrialisation dépend de la capacité à transporter charbon, minerais, matières premières et produits finis. Avant le développement du chemin de fer, les routes, les rivières et les canaux jouent des rôles complémentaires. Les canaux peuvent réduire le coût du transport de marchandises lourdes, mais leur construction exige des capitaux, des travaux importants et des conditions géographiques favorables.',
            'Au début du XIXe siècle, des ingénieurs perfectionnent les locomotives à vapeur et les voies ferrées. Le chemin de fer relie des mines, des villes industrielles, des ports et des marchés. La ligne entre Stockton et Darlington, ouverte en 1825, est célèbre pour son usage de locomotives à vapeur dans un service ferroviaire public, même si le transport de marchandises et de passagers s’organise alors selon des modalités différentes de celles des réseaux modernes.',
            'La ligne Liverpool-Manchester, ouverte en 1830, est une étape majeure du transport ferroviaire régulier de passagers et de marchandises. Les chemins de fer réduisent souvent les durées de trajet et permettent des flux plus prévisibles. Ils stimulent aussi la demande de charbon, de fer et de travaux de construction, ce qui renforce les liens entre les secteurs industriels.',
            'Les bateaux à vapeur se développent également au XIXe siècle et modifient certains transports fluviaux et maritimes. Leur adoption varie selon les routes, les coûts, les technologies et les conditions de navigation. Le rail et la vapeur n’effacent pas les autres modes de transport ; ils les complètent ou les concurrencent selon les usages.',
            'Les infrastructures transforment la géographie économique et sociale. Les régions mieux reliées peuvent attirer des entreprises, tandis que les villes et les ports changent avec l’augmentation des échanges. Ces transformations ne profitent pas de façon identique à tous les territoires : certaines régions s’industrialisent rapidement, d’autres restent davantage rurales ou sont intégrées aux réseaux selon des rapports économiques inégaux.'
          ],
          example: {
            statement: 'Une usine doit acheminer régulièrement de grandes quantités de charbon. Pourquoi un canal ou une ligne ferroviaire peut-il modifier son coût de production ?',
            calculation: 'Le coût total dépend notamment du prix du transport, du temps nécessaire et de la régularité des livraisons. Une infrastructure efficace peut réduire le coût par tonne et limiter les retards.',
            answer: 'Un canal ou un chemin de fer peut rendre le transport de grandes quantités de charbon moins coûteux ou plus fiable, ce qui facilite l’approvisionnement de l’usine.'
          },
          exercise: {
            question: 'Comment les chemins de fer contribuent-ils au développement industriel ?',
            answer: 'Ils transportent les matières premières, les produits et les personnes, relient les marchés et stimulent la demande de charbon, de fer et de matériel.'
          },
          exercises: [
            {
              question: 'Quelle ligne ferroviaire britannique est ouverte en 1830 entre Liverpool et Manchester ?',
              answer: 'La ligne Liverpool-Manchester.'
            },
            {
              question: 'Pourquoi les canaux sont-ils importants avant l’extension des chemins de fer ?',
              answer: 'Ils facilitent le transport de marchandises lourdes, notamment le charbon et les matières premières.'
            },
            {
              question: 'Les nouveaux transports profitent-ils de manière identique à toutes les régions ?',
              answer: 'Non. Les effets dépendent de la présence d’infrastructures, des activités économiques et de l’intégration aux réseaux.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Révolution industrielle britannique', url: 'https://www.worldhistory.org/trans/fr/1-21828/revolution-industrielle-britannique/' },
            { title: 'Musée des Arts et Métiers — Dossier de l’enseignant : La Révolution industrielle', url: 'https://www.arts-et-metiers.net/musee/dossier-de-lenseignant-la-revolution-industrielle' },
            { title: 'Encyclopaedia Britannica — Industrial Revolution', url: 'https://www.britannica.com/event/Industrial-Revolution' }
          ]
        }
      },
      {
        id: 'conditions-vie-travail',
        title: 'Usines, villes et conditions de vie ouvrières',
        field: 'Histoire sociale · Travail et urbanisation · XVIIIe-XIXe siècles',
        summary: 'Étudier les transformations de la vie quotidienne, l’urbanisation rapide, les risques du travail industriel et la diversité des expériences ouvrières.',
        lesson: {
          sections: [
            'L’industrialisation transforme l’organisation du travail. Dans de nombreuses usines, les horaires sont fixés par l’employeur et le rythme dépend des machines. Les journées peuvent être longues, les salaires faibles et les conditions dangereuses, particulièrement dans certaines mines et usines. Toutefois, les expériences diffèrent selon les métiers, les régions, les entreprises, le sexe, l’âge et la période.',
            'Les enfants travaillent dans plusieurs secteurs, notamment dans les mines et les filatures, parce que les employeurs peuvent leur confier certaines tâches pour des salaires bas. Les dangers comprennent les accidents, la fatigue et l’exposition à des environnements malsains. Des enquêtes publiques, des campagnes de réforme et des lois viennent progressivement limiter certains abus, mais les protections sont incomplètes et leur application varie.',
            'La croissance des villes industrielles est liée à la recherche d’emploi et à la concentration des activités. Les logements peuvent être construits rapidement et manquer d’espace, d’eau potable ou d’assainissement. La surpopulation et les infrastructures insuffisantes favorisent certaines maladies. Il ne faut cependant pas supposer que toutes les villes ou tous les quartiers connaissent exactement les mêmes conditions.',
            'Les travailleurs ne restent pas passifs face aux changements. Ils développent des solidarités, des sociétés d’entraide, des mouvements de protestation et des organisations collectives. Les premières revendications portent notamment sur les salaires, la durée du travail, la sécurité et le droit de s’organiser. Les formes de mobilisation et leur légalité évoluent selon les pays et les périodes.',
            'À long terme, l’industrialisation contribue à transformer la structure sociale, avec l’expansion des groupes ouvriers et bourgeois. Les améliorations du niveau de vie ne sont ni immédiates ni uniformes : elles dépendent des salaires, du coût des biens, des conditions sanitaires, des droits politiques et des politiques publiques. Une analyse historique doit considérer à la fois les augmentations de production et les inégalités qui les accompagnent.'
          ],
          example: {
            statement: 'Pourquoi l’augmentation de la production industrielle ne signifie-t-elle pas nécessairement une amélioration immédiate des conditions de vie de tous les travailleurs ?',
            calculation: 'Pour évaluer le niveau de vie, il faut examiner ensemble les revenus, les prix, la durée du travail, la santé, le logement, la sécurité et la stabilité de l’emploi.',
            answer: 'La production peut augmenter alors que les salaires restent bas, que les journées sont longues et que les logements ou les conditions de travail demeurent dangereux. Les bénéfices sont répartis de manière inégale.'
          },
          exercise: {
            question: 'Cite deux difficultés rencontrées par une partie des ouvriers au début de l’industrialisation.',
            answer: 'Par exemple : longues journées, faibles salaires, accidents, travail des enfants, logements surpeuplés ou manque d’assainissement.'
          },
          exercises: [
            {
              question: 'Pourquoi de nombreuses villes industrielles grandissent-elles rapidement ?',
              answer: 'Parce que les usines et les activités connexes attirent des personnes en quête de travail, tandis que les populations se déplacent vers les régions industrielles.'
            },
            {
              question: 'Comment les travailleurs tentent-ils d’améliorer leurs conditions ?',
              answer: 'Par des protestations, des sociétés d’entraide, des pétitions et des organisations collectives, selon les contextes.'
            },
            {
              question: 'Les conditions ouvrières sont-elles identiques dans tous les pays et à toutes les époques ?',
              answer: 'Non. Elles varient selon les secteurs, les lieux, les périodes, les lois et les groupes de travailleurs.'
            }
          ],
          sources: [
            { title: 'OpenStax — World History, Inventions, Innovations, and Mechanization', url: 'https://openstax.org/books/world-history-volume-2/pages/10-1-inventions-innovations-and-mechanization' },
            { title: 'Larousse — Révolution industrielle', url: 'https://www.larousse.fr/encyclopedie/divers/r%C3%A9volution_industrielle/61047' },
            { title: 'Musée des Arts et Métiers — Dossier de l’enseignant : La Révolution industrielle', url: 'https://www.arts-et-metiers.net/musee/dossier-de-lenseignant-la-revolution-industrielle' }
          ]
        }
      },
      {
        id: 'diffusion-deuxieme-revolution',
        title: 'La diffusion de l’industrialisation et la deuxième révolution industrielle',
        field: 'Histoire mondiale et économique · XIXe siècle-début du XXe siècle',
        summary: 'Comprendre la diffusion inégale de l’industrie hors de Grande-Bretagne et les nouvelles sources d’énergie, matériaux et secteurs de la fin du XIXe siècle.',
        lesson: {
          sections: [
            'L’industrialisation se diffuse progressivement hors de Grande-Bretagne au cours du XIXe siècle. La Belgique, certaines régions françaises, les territoires allemands et les États-Unis connaissent des développements industriels importants, mais à des rythmes différents. La proximité du charbon et du fer, les infrastructures, les investissements, les politiques publiques, les compétences et l’accès aux marchés influencent cette diffusion.',
            'Le développement industriel ne suit pas un modèle unique. Certaines régions s’appuient d’abord sur le textile, d’autres sur le charbon, la métallurgie, les machines ou les chemins de fer. Les États et les entrepreneurs investissent dans les infrastructures et l’éducation technique, tandis que les réseaux commerciaux relient les économies nationales et internationales. Les avantages et les coûts de l’industrialisation restent inégalement répartis.',
            'À partir de la seconde moitié du XIXe siècle, de nouvelles technologies et industries prennent de l’importance. L’acier devient plus facile à produire en grande quantité grâce à des procédés comme celui de Bessemer, breveté en 1856. La chimie industrielle progresse, notamment dans les colorants et les produits chimiques. Ces changements complètent les industries plus anciennes du charbon, du fer et du textile.',
            'L’électricité et le pétrole jouent un rôle croissant dans les transformations de la fin du XIXe siècle et du début du XXe siècle. Les réseaux électriques permettent de nouvelles formes d’éclairage et d’entraînement des machines, tandis que les moteurs à combustion interne favorisent le développement de nouveaux véhicules. Ces changements sont souvent désignés par l’expression « deuxième révolution industrielle », même si les historiens discutent aussi la pertinence de cette division en étapes distinctes.',
            'L’industrialisation modifie profondément les échanges mondiaux et les rapports de puissance. Les pays industrialisés demandent des matières premières et cherchent des débouchés, dans un contexte marqué par le colonialisme et des inégalités internationales. Les nouvelles technologies créent des biens et des emplois, mais entraînent aussi des pollutions, des conflits sociaux et des transformations du travail. Les effets doivent donc être étudiés à l’échelle locale et mondiale.'
          ],
          example: {
            statement: 'Pourquoi les historiens distinguent-ils parfois une première et une deuxième révolution industrielle ?',
            calculation: 'Ils comparent les principales sources d’énergie, les matériaux, les secteurs dominants et les techniques qui se diffusent selon les périodes.',
            answer: 'La distinction souligne le rôle croissant de l’acier, de la chimie, de l’électricité et du pétrole à partir de la seconde moitié du XIXe siècle. Elle reste une convention utile, mais ne décrit pas une rupture simultanée partout.'
          },
          exercise: {
            question: 'Cite deux innovations ou secteurs associés à l’industrialisation de la fin du XIXe siècle.',
            answer: 'Par exemple : la production d’acier en grande quantité, la chimie industrielle, l’électricité ou les moteurs à combustion interne.'
          },
          exercises: [
            {
              question: 'L’industrialisation se diffuse-t-elle à la même vitesse dans toutes les régions ?',
              answer: 'Non. Les rythmes dépendent notamment des ressources, des investissements, des infrastructures, des politiques et des marchés.'
            },
            {
              question: 'Quel procédé, breveté par Henry Bessemer en 1856, contribue à produire de l’acier à grande échelle ?',
              answer: 'Le procédé Bessemer.'
            },
            {
              question: 'Pourquoi l’histoire de l’industrialisation doit-elle aussi prendre en compte les relations mondiales ?',
              answer: 'Parce que les échanges de matières premières, de produits, de capitaux et de main-d’œuvre, ainsi que les rapports coloniaux, ont contribué à façonner les économies industrielles.'
            }
          ],
          sources: [
            { title: 'Musée des Arts et Métiers — Dossier de l’enseignant : La Révolution industrielle', url: 'https://www.arts-et-metiers.net/musee/dossier-de-lenseignant-la-revolution-industrielle' },
            { title: 'Encyclopaedia Britannica — Industrial Revolution', url: 'https://www.britannica.com/event/Industrial-Revolution' },
            { title: 'World History Encyclopedia — Révolution industrielle britannique', url: 'https://www.worldhistory.org/trans/fr/1-21828/revolution-industrielle-britannique/' }
          ]
        }
      }
    ]
  },

// BRANCHE — HISTOIRE DE L’ÉCOSSE (à coller à la suite de la dernière branche du catalogue)

  {
    id: 'histoire-ecosse',
    sortYear: -10000,
    title: 'Écosse : des premiers peuplements à la dévolution',
    note: 'Six chapitres sur le peuplement ancien, les Romains et les Pictes, les guerres d’indépendance, la Réforme et l’Union des couronnes, l’Union de 1707 avec le jacobitisme, puis la dévolution. Les dates anciennes sont approximatives et certains récits fondateurs restent débattus.',
    chapters: [
      {
        id: 'ecosse-peuplement-ancien',
        title: 'Les premiers peuplements et les sociétés néolithiques',
        field: 'Écosse ancienne · Du Paléolithique supérieur à l’âge du fer',
        summary: 'Comprendre comment l’archéologie éclaire l’Écosse avant l’écriture : campements saisonniers, villages de pierre des Orcades, âge du bronze et âge du fer.',
        lesson: {
          sections: [
            'L’Écosse correspond aujourd’hui à la partie nord de la Grande-Bretagne et comprend aussi des îles comme les Hébrides et les Orcades. Selon World History Encyclopedia, il n’existe pas d’histoire écrite locale avant l’arrivée des Romains, à la fin du Ier siècle de notre ère. Le passé plus ancien est connu par les pierres dressées, les campements et les sépultures. Le site de Howburn Farm, près de Biggar, est présenté comme la plus ancienne preuve d’occupation humaine de la fin du Paléolithique supérieur, vers 12 000 av. J.-C. Il s’agit d’un camp de chasse saisonnier. Au Mésolithique, les habitants sont considérés comme des chasseurs-pêcheurs nomades qui utilisaient notamment le silex, l’os et le bois de cerf.',
            'Au Néolithique, les installations deviennent plus durables. Sur l’île de Papa Westray, dans les Orcades, le site de Knap of Howar a été occupé entre 3700 et 2800 av. J.-C. et abrite ce que World History Encyclopedia décrit comme la plus ancienne maison en pierre d’Europe du Nord. Le village de Skara Brae est daté d’environ 3100 av. J.-C. et le complexe du Ness of Brodgar d’environ 3500 av. J.-C. ; ce dernier est fouillé depuis 2003. Les matériaux dépendent de la région : pierre dans le nord, bois plus au sud, comme à Balbridie, dans l’Aberdeenshire. Les sépultures en pierre sèche (cairns, tombes à chambre) se retrouvent dans tout le pays.',
            'Vers 2500 av. J.-C., des migrants appelés Beaker People arrivent sur la côte est selon World History Encyclopedia ; le bronze est introduit depuis l’Irlande vers 2000 av. J.-C. Le fer arrive ensuite et l’article l’associe à des migrations celtiques, dont l’origine exacte est débattue. Cette période voit apparaître des structures défensives : crannogs (habitations bâties sur des îlots artificiels de lac), forts de colline et brochs, tours circulaires en pierre sèche à une seule entrée. Le Mousa Broch, dans les Shetland, en est l’exemple le plus célèbre et pouvait atteindre une douzaine de mètres de haut.'
          ],
          example: {
            statement: 'Knap of Howar a été occupé entre 3700 et 2800 av. J.-C. Pendant combien de temps environ ?',
            calculation: 'Pour des dates avant notre ère, les années décroissent vers le présent : on soustrait la date la plus récente de la plus ancienne. 3700 − 2800 = 900.',
            answer: 'Environ 900 ans. Il s’agit d’une estimation fondée sur des datations archéologiques, pas d’une durée exacte.'
          },
          exercise: {
            question: 'Pourquoi l’histoire de l’Écosse ancienne repose-t-elle surtout sur l’archéologie ?',
            answer: 'Parce qu’il n’existe pas de sources écrites locales avant l’arrivée des Romains : on s’appuie donc sur les sites, les sépultures, les pierres dressées et d’autres vestiges matériels.'
          },
          exercises: [
            {
              question: 'Quel site des Orcades est présenté comme abritant la plus ancienne maison en pierre d’Europe du Nord ?',
              answer: 'Knap of Howar, sur l’île de Papa Westray.'
            },
            {
              question: 'Qu’est-ce qu’un broch ?',
              answer: 'Une tour circulaire en pierre sèche, à murs creux et à entrée unique, typique de l’âge du fer. Le Mousa Broch, dans les Shetland, est le plus célèbre.'
            },
            {
              question: 'Pourquoi la position actuelle de Skara Brae, près de la mer, ne prouve-t-elle pas qu’il a été construit sur le rivage ?',
              answer: 'Parce que l’érosion a modifié le trait de côte : selon World History Encyclopedia, ces sites se trouvaient à l’origine plus à l’intérieur des terres.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Écosse Ancienne', url: 'https://www.worldhistory.org/trans/fr/1-103/ecosse-ancienne/' },
            { title: 'World History Encyclopedia — Knap of Howar', url: 'https://www.worldhistory.org/trans/fr/1-11444/knap-of-howar/' },
            { title: 'World History Encyclopedia — Ness of Brodgar', url: 'https://www.worldhistory.org/trans/fr/1-11445/ness-of-brodgar/' },
            { title: 'World History Encyclopedia — Skara Brae', url: 'https://www.worldhistory.org/trans/fr/1-11449/skara-brae/' }
          ]
        }
      },
      {
        id: 'ecosse-romains-pictes-royaumes',
        title: 'Romains, Pictes, Scots et naissance du royaume',
        field: 'Écosse · Ier–IXe siècle apr. J.-C.',
        summary: 'Comprendre les incursions romaines au nord du mur d’Hadrien, le rôle des Pictes et de Dál Riata, l’arrivée du christianisme et la tradition de Kenneth MacAlpin.',
        lesson: {
          sections: [
            'Au nord du mur d’Hadrien, les Romains connaissaient le territoire sous le nom de Calédonie. Selon World History Encyclopedia, Julius Agricola, gouverneur de la Bretagne romaine, envahit l’Écosse en 79/80 apr. J.-C. et affronte en 83 le chef picte Calgacus à la bataille du Mons Graupius. L’historien Tacite relate ces événements dans l’Agricola, en 98, ce qui en fait le premier récit écrit de l’histoire écossaise. Rome ne parvient pas à conserver durablement ces territoires : le mur d’Hadrien est construit en 122, puis le mur d’Antonin en 142, entre les rivières Clyde et Forth. Les Romains se replient ensuite vers le sud.',
            'Selon la même source, la tribu irlandaise des Scotti s’installe avant et après le départ de Rome et fonde le royaume de Dál Riata, qui inclut Argyll. Il atteint son apogée sous Áedán mac Gabráin (574–608). Le nord reste dominé par les Pictes. Le christianisme se diffuse par l’Irlande : Bède attribue à Ninian une mission chez les Pictes en 397, et saint Columba est associé à la conversion vers 563. Il faut rappeler que ces récits mêlent faits historiques et traditions hagiographiques.',
            'World History Encyclopedia présente Kenneth MacAlpin (843–858) comme celui qui aurait uni les Scots de Dál Riata et les Pictes et serait devenu le premier roi d’Écosse. Elle précise que son existence est certaine mais que son histoire a été enjolivée au fil des siècles, au point qu’il est souvent considéré comme semi-légendaire. La formation du royaume est donc un processus progressif, que les sources anciennes ne permettent de reconstituer que partiellement.'
          ],
          example: {
            statement: 'Le Mons Graupius est daté de 83 apr. J.-C. et le mur d’Hadrien de 122. Combien d’années les séparent ?',
            calculation: 'Pour des dates après J.-C., on soustrait la plus ancienne de la plus récente : 122 − 83 = 39.',
            answer: '39 ans. Ces repères sont ceux de World History Encyclopedia ; certaines datations antiques peuvent varier selon les sources.'
          },
          exercise: {
            question: 'Pourquoi peut-on dire que l’Agricola de Tacite est un texte important pour l’histoire de l’Écosse ?',
            answer: 'Parce que, selon World History Encyclopedia, il contient le premier compte rendu écrit de l’histoire écossaise, avec le récit de la bataille du Mons Graupius.'
          },
          exercises: [
            {
              question: 'Entre quelles rivières le mur d’Antonin a-t-il été construit, et en quelle année ?',
              answer: 'Entre la Clyde et le Forth, en 142 apr. J.-C.'
            },
            {
              question: 'Qui était Calgacus ?',
              answer: 'Un chef picte affronté par Agricola à la bataille du Mons Graupius, en 83 apr. J.-C., d’après Tacite.'
            },
            {
              question: 'Quel royaume les Scotti, venus d’Irlande, ont-ils établi en Écosse ?',
              answer: 'Le royaume de Dál Riata, qui incluait notamment Argyll.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Écosse Ancienne', url: 'https://www.worldhistory.org/trans/fr/1-103/ecosse-ancienne/' },
            { title: 'World History Encyclopedia — Scotland (Ancient)', url: 'https://www.worldhistory.org/Scotland_(Ancient)/' },
            { title: 'World History Encyclopedia — Mur d’Hadrien', url: 'https://www.worldhistory.org/trans/fr/1-11580/mur-dhadrien/' },
            { title: 'World History Encyclopedia — Mur d’Antonin', url: 'https://www.worldhistory.org/trans/fr/1-11459/mur-dantonin/' }
          ]
        }
      },
      {
        id: 'ecosse-guerres-independance-arbroath',
        title: 'Les guerres d’indépendance et la Déclaration d’Arbroath',
        field: 'Écosse médiévale · 1296–1357 et 1320',
        summary: 'Comprendre le conflit avec l’Angleterre d’Édouard Ier, les victoires de Stirling Bridge et de Bannockburn, et la lettre des barons écossais au pape en 1320.',
        lesson: {
          sections: [
            'Les guerres d’indépendance écossaises naissent de la crise dynastique qui suit la mort du roi Alexandre III, en 1286. En 1292, Édouard Ier d’Angleterre se proclame suzerain de l’Écosse et accorde la couronne à John Balliol. Face à ses prétentions, la noblesse écossaise prend le pouvoir à Balliol en 1295. En 1296, Édouard Ier intervient militairement et Balliol renonce à la couronne : c’est le début de la longue guerre.',
            'En 1297, la rébellion menée par William Wallace et Andrew Murray remporte la bataille de Stirling Bridge. Édouard Ier n’abandonne pas pour autant sa campagne : il envahit de nouveau l’Écosse en 1303-1304, prend le château de Stirling et obtient la soumission de la plupart des nobles. En 1306, Robert Bruce tue John Comyn et s’empare du trône. Sa victoire de Bannockburn, en juin 1314, contre l’armée d’Édouard II, renforce sa position, mais l’Angleterre ne reconnaît pas pour autant l’indépendance écossaise ni son titre royal.',
            'Le 6 avril 1320, des barons écossais envoient depuis l’abbaye d’Arbroath une lettre au pape Jean XXII. Elle répond à l’excommunication de Robert Ier et demande au pape de reconnaître l’indépendance de l’Écosse et Robert Bruce comme roi légitime. D’après les Archives nationales d’Écosse, elle a probablement été rédigée par Bernard, abbé d’Arbroath. Le texte affirme, en substance, que l’on combat non pour la gloire, la richesse ou les honneurs, mais pour la liberté seule. Les guerres s’achèvent avec le traité de Berwick, en 1357, qui permet la libération de David II, capturé par les Anglais en 1346.'
          ],
          example: {
            statement: 'La bataille de Bannockburn a eu lieu en 1314 et la Déclaration d’Arbroath date de 1320. Combien d’années les séparent ?',
            calculation: '1320 − 1314 = 6.',
            answer: '6 ans. La Déclaration est donc postérieure à Bannockburn, mais elle est envoyée alors que la guerre et le conflit diplomatique se poursuivent.'
          },
          exercise: {
            question: 'Pourquoi la Déclaration d’Arbroath a-t-elle été adressée au pape ?',
            answer: 'Elle faisait partie d’une offensive diplomatique après l’excommunication de Robert Ier : les Écossais demandaient au pape de reconnaître leur indépendance et Robert Bruce comme roi légitime.'
          },
          exercises: [
            {
              question: 'Qui dirige la rébellion victorieuse à Stirling Bridge en 1297 ?',
              answer: 'William Wallace et Andrew Murray.'
            },
            {
              question: 'Quelle bataille de 1314 renforce la position de Robert Bruce, et contre quelle armée ?',
              answer: 'La bataille de Bannockburn, contre une armée anglaise commandée par Édouard II.'
            },
            {
              question: 'À qui la Déclaration d’Arbroath est-elle adressée et à quelle date ?',
              answer: 'Au pape Jean XXII, le 6 avril 1320.'
            }
          ],
          sources: [
            { title: 'National Records of Scotland — The Declaration of Arbroath', url: 'https://www.nrscotland.gov.uk/learning-and-events/the-declaration-of-arbroath/' },
            { title: 'Historic Environment Scotland — Declaration of Arbroath Trail', url: 'https://www.historicenvironment.scot/media/6123/declaration-arbroath-trail.pdf' },
            { title: 'University of Guelph — Wars of Scottish Independence', url: 'https://scottishcharters.lib.uoguelph.ca/exhibits/show/signedsealed/wars-of-scottish-independence/overview' },
            { title: 'Wikipedia — Declaration of Arbroath', url: 'https://en.wikipedia.org/wiki/Declaration_of_Arbroath' }
          ]
        }
      },
      {
        id: 'ecosse-reforme-marie-stuart-union-couronnes',
        title: 'La Réforme, Marie Stuart et l’Union des couronnes',
        field: 'Écosse moderne · 1542–1603',
        summary: 'Comprendre le tournant protestant de 1560, le règne de Marie Stuart et l’accession de Jacques VI au trône d’Angleterre en 1603.',
        lesson: {
          sections: [
            'Marie Stuart devient reine d’Écosse en 1542, alors qu’elle est encore un nourrisson. Sa mère, Marie de Guise, assure la régence de 1554 à 1560. En avril 1558, Marie épouse le dauphin François, ce qui renforce l’alliance entre l’Écosse et la France. Au même moment, le mouvement réformateur progresse, avec des figures comme John Knox, qui revient en Écosse en 1559 après un séjour sur le continent.',
            'En 1560, après la mort de Marie de Guise et la défaite des forces françaises au siège de Leith, les Lords de la Congrégation, favorables à la Réforme, dominent la scène politique. Le Parlement se réunit à Édimbourg le 1er août 1560. Il approuve la Confession de foi écossaise (27 août), abolit l’autorité du pape sur l’Église d’Écosse et interdit la messe. La Confession est le fruit d’un travail collectif de six réformateurs, même si son écriture est traditionnellement attribuée à Knox. Marie, catholique, revient en Écosse en août 1561 et refuse de ratifier ces lois.',
            'En juillet 1567, des nobles contraignent Marie à abdiquer en faveur de son fils Jacques VI. Elle meurt en 1587. Le 24 mars 1603, Jacques VI hérite du trône d’Angleterre à la mort d’Élisabeth Ire et devient aussi Jacques Ier d’Angleterre. C’est l’Union des couronnes. Les deux royaumes restent toutefois distincts, avec des parlements séparés, jusqu’en 1707.'
          ],
          example: {
            statement: 'Marie Stuart règne de 1542 à 1567. Combien d’années dure son règne ?',
            calculation: '1567 − 1542 = 25.',
            answer: '25 ans, dont une grande partie sous régence ou en dehors d’Écosse : elle ne revient en Écosse qu’en 1561.'
          },
          exercise: {
            question: 'Pourquoi l’Union des couronnes de 1603 ne crée-t-elle pas un royaume unique ?',
            answer: 'Parce qu’il s’agit d’une union personnelle : un même souverain règne sur deux royaumes qui conservent chacun leur parlement et leur gouvernement jusqu’en 1707.'
          },
          exercises: [
            {
              question: 'À quelle date le Parlement écossais se réunit-il pour consacrer la Réforme ?',
              answer: 'Le 1er août 1560, à Édimbourg.'
            },
            {
              question: 'Qui est traditionnellement considéré comme l’auteur de la Confession de foi écossaise de 1560 ?',
              answer: 'John Knox, même si le texte est le résultat du travail de six réformateurs.'
            },
            {
              question: 'Qui devient roi d’Écosse après l’abdication de Marie Stuart en 1567 ?',
              answer: 'Son fils, Jacques VI.'
            }
          ],
          sources: [
            { title: 'EBSCO Research Starters — Scottish Reformation', url: 'https://ebsco.com/research-starters/history/scottish-reformation' },
            { title: 'Scottish Storytelling Centre — John Knox House', url: 'https://www.scottishstorytellingcentre.com/john-knox-house/history-of-the-house/' },
            { title: 'Wikipedia — Book of Discipline (Church of Scotland)', url: 'https://en.wikipedia.org/wiki/Book_of_Discipline_(Church_of_Scotland)' },
            { title: 'New World Encyclopedia — Acts of Union 1707', url: 'https://www.newworldencyclopedia.org/entry/Acts_of_Union_1707' }
          ]
        }
      },
      {
        id: 'ecosse-union-1707-jacobitisme',
        title: 'L’Union de 1707 et le jacobitisme',
        field: 'Écosse · 1707–1746',
        summary: 'Comprendre la naissance de la Grande-Bretagne en 1707, le sens du mot « jacobite » et la bataille de Culloden en 1746.',
        lesson: {
          sections: [
            'Les Actes d’Union sont deux lois : l’Union with Scotland Act 1706, votée par le Parlement d’Angleterre, et l’Union with England Act 1707, votée par le Parlement d’Écosse. Elles mettent en œuvre un traité négocié en 1706 par des commissaires des deux pays et entrent en vigueur le 1er mai 1707. Les deux parlements fusionnent alors en un Parlement de Grande-Bretagne, siégeant à Westminster, et les deux royaumes forment un seul royaume. Trois tentatives d’union antérieures, en 1606, 1667 et 1689, n’avaient pas abouti. En 1705, le Parlement anglais avait adopté l’Alien Act, qui menaçait d’imposer des sanctions économiques à l’Écosse.',
            'Le terme « jacobite » vient de Jacobus, la forme latine de Jacques. Il désigne les partisans du rétablissement de la maison Stuart sur le trône. L’Act of Settlement de 1701 réservait la couronne aux protestants et la reine Anne, dernière souveraine Stuart, meurt en 1714. En juillet 1745, Charles Édouard Stuart, surnommé « Bonnie Prince Charlie », débarque à Eriskay, dans les Hébrides, pour tenter de reconquérir le trône au nom de son père.',
            'Le 16 avril 1746, à Culloden, sur la lande de Drummossie près d’Inverness, l’armée jacobite est battue de manière décisive par les troupes gouvernementales du duc de Cumberland, fils de George II. Cette défaite met fin au soulèvement de 1745. Charles Édouard doit se cacher dans les Highlands avant de regagner la France. Le gouvernement britannique adopte ensuite des mesures de désarmement et de répression qui touchent la société des Highlands, notamment les armes et le costume traditionnel.'
          ],
          example: {
            statement: 'L’Union des couronnes date de 1603 et les Actes d’Union de 1707. Pendant combien d’années les deux royaumes ont-ils partagé un souverain avant de fusionner leurs parlements ?',
            calculation: '1707 − 1603 = 104.',
            answer: '104 ans. Pendant cette période, les deux royaumes avaient le même monarque mais des parlements séparés.'
          },
          exercise: {
            question: 'Quels changements les Actes d’Union de 1707 introduisent-ils ?',
            answer: 'Ils fusionnent les parlements d’Écosse et d’Angleterre en un Parlement de Grande-Bretagne siégeant à Westminster et unissent les deux royaumes en un seul.'
          },
          exercises: [
            {
              question: 'À quelle date les Actes d’Union prennent-ils effet ?',
              answer: 'Le 1er mai 1707.'
            },
            {
              question: 'Que désigne le mot « jacobite » ?',
              answer: 'Un partisan du rétablissement de la maison Stuart sur le trône ; le mot vient de Jacobus, forme latine de Jacques.'
            },
            {
              question: 'Quel événement met fin au soulèvement jacobite de 1745 ?',
              answer: 'La bataille de Culloden, le 16 avril 1746.'
            }
          ],
          sources: [
            { title: 'New World Encyclopedia — Acts of Union 1707', url: 'https://www.newworldencyclopedia.org/entry/Acts_of_Union_1707' },
            { title: 'Royal Collection Trust — The Battle of Culloden', url: 'https://rct.uk/collection/exhibitions/the-first-georgians/the-queens-gallery-buckingham-palace/explore-the-exhibition/the-early-georgians-at-war/the-jacobite-rising-of-1745/the-battle-of-culloden' },
            { title: 'Wikipedia — Battle of Culloden', url: 'https://en.wikipedia.org/wiki/Battle_of_Culloden' },
            { title: 'Wikipedia — Union of the Crowns (Simple English)', url: 'https://simple.wikipedia.com/wiki/Union_of_the_Crowns' }
          ]
        }
      },
      {
        id: 'ecosse-devolution-referendum-2014',
        title: 'La dévolution et le référendum de 2014',
        field: 'Écosse contemporaine · 1997–2014',
        summary: 'Comprendre le rétablissement d’un Parlement écossais en 1999 et le référendum sur l’indépendance du 18 septembre 2014.',
        lesson: {
          sections: [
            'Un premier référendum sur la dévolution, en 1979, n’atteint pas le seuil requis. Après la victoire travailliste aux élections générales de mai 1997, un nouveau référendum a lieu le 11 septembre 1997. Environ 74,3 % des votants approuvent la création d’un Parlement écossais et environ 63,5 % approuvent qu’il dispose de pouvoirs fiscaux. Le Parlement britannique adopte ensuite le Scotland Act 1998, qui crée le Parlement et l’exécutif écossais.',
            'Les premières élections ont lieu le 6 mai 1999 et le Parlement tient sa première séance le 12 mai 1999. Il compte 129 membres et dispose de compétences étendues dans des domaines comme la santé ou l’éducation, tandis que certaines matières restent réservées au Parlement du Royaume-Uni. Le Scotland Act 2012 puis le Scotland Act 2016 élargissent ensuite ses pouvoirs.',
            'Le Scottish National Party remporte la majorité des sièges en 2011 avec un engagement à organiser un référendum. En octobre 2012, les gouvernements britannique et écossais s’accordent pour que le Parlement écossais ait le pouvoir de l’organiser. Le référendum a lieu le 18 septembre 2014 ; la question posée est « Should Scotland be an independent country? ». Les jeunes de 16 et 17 ans peuvent voter. Le non l’emporte avec environ 55,3 % des voix ; le oui recueille environ 44,7 %. La Commission Smith publie ensuite des recommandations de nouveaux transferts de pouvoirs.'
          ],
          example: {
            statement: 'Le Parlement d’Écosse est dissous en 1707 et se réunit de nouveau en 1999. Combien d’années séparent ces deux dates ?',
            calculation: '1999 − 1707 = 292.',
            answer: 'Environ 292 ans. Le calcul est approximatif car il ne tient pas compte des mois et jours exacts.'
          },
          exercise: {
            question: 'Quelle différence y a-t-il entre l’issue du référendum de 1979 et celle de 1997 ?',
            answer: 'En 1979, le résultat n’atteint pas le seuil fixé par la loi de 1978. En 1997, une majorité nette approuve le Parlement et ses pouvoirs fiscaux, ce qui conduit au Scotland Act 1998.'
          },
          exercises: [
            {
              question: 'Quelle loi crée le Parlement écossais actuel ?',
              answer: 'Le Scotland Act 1998.'
            },
            {
              question: 'Quel est le résultat approximatif du référendum du 18 septembre 2014 ?',
              answer: 'Le non l’emporte avec environ 55,3 % des voix, contre environ 44,7 % pour le oui.'
            },
            {
              question: 'Quelle question était posée lors du référendum de 2014 ?',
              answer: '« Should Scotland be an independent country? », c’est-à-dire : « L’Écosse doit-elle être un pays indépendant ? »'
            }
          ],
          sources: [
            { title: 'Scottish Government — Scotland’s Future', url: 'https://www.gov.scot/publications/scotlands-future/pages/16/' },
            { title: 'Wikipedia — Scottish devolution', url: 'https://en.wikipedia.org/wiki/Scottish_devolution' },
            { title: 'Wikipedia — 2014 Scottish independence referendum', url: 'https://en.wikipedia.org/wiki/2014_Scottish_independence_referendum' },
            { title: 'Parliament of Australia — Scottish referendum (FlagPost)', url: 'https://www.aph.gov.au/About_Parliament/Parliamentary_Departments/Parliamentary_Library/FlagPost/2014/September/Scottish_referendum' }
          ]
        }
      }
    ]
  },

// BRANCHE LE SIECLE DES LUMIÈRES

  {
    id: 'siecle-des-lumieres',
    sortYear: 1715,
    title: 'Le siècle des Lumières',
    note: 'Huit chapitres sur les origines scientifiques et intellectuelles des Lumières, leurs idées, leurs grandes figures, l’Encyclopédie, la circulation des idées, les combats concrets, le despotisme éclairé, puis les Révolutions et les débats sur l’héritage. Les bornes chronologiques des Lumières varient selon les auteurs et les pays : les dates données sont des repères.',
    chapters: [
      {
        id: 'racines-des-lumieres',
        title: 'Aux origines des Lumières : révolution scientifique et pensée critique',
        field: 'Lumières · Du dernier quart du XVIIe siècle au XVIIIe siècle',
        summary: 'Situer les Lumières dans le temps, identifier leurs précurseurs (Bacon, Descartes, Locke, Newton) et comprendre pourquoi leurs bornes chronologiques sont une convention.',
        lesson: {
          sections: [
            'Les Lumières désignent un mouvement de pensée qui a transformé la philosophie, la science et la politique en Europe et en Amérique du Nord. World History Encyclopedia le date généralement du dernier quart du XVIIe siècle au dernier quart du XVIIIe siècle. Le nom vient d’une image : selon Larousse, les philosophes européens du XVIIIe siècle voulaient combattre « les ténèbres de l’ignorance » par la diffusion du savoir. Le mouvement existe sous des noms différents selon les pays, Enlightenment en Angleterre et Aufklärung en Allemagne, et il a connu une intensité particulière en France, en Angleterre et en Allemagne. Il s’agit donc d’un mouvement européen et non d’une école unique : ses penseurs ne sont presque jamais d’accord entre eux, et il n’y a jamais eu de consensus sur les réponses aux questions qu’ils posaient.',
            'Les Lumières ne surgissent pas de rien. World History Encyclopedia rappelle qu’elles se développent à partir de l’humanisme de la Renaissance (1400-1600), qui tournait intellectuels et artistes vers l’Antiquité et mettait en avant la vertu civique. Elles profitent aussi de la Réforme protestante (1517-1648), qui a réduit le pouvoir traditionnel de l’Église chrétienne dans la vie quotidienne. Il faut éviter un contresens : la plupart des penseurs éclairés ne voulaient pas supprimer l’Église, mais obtenir plus de liberté religieuse et de tolérance. L’image d’un Moyen Âge « sombre », que les Lumières aiment utiliser pour se valoriser, est aujourd’hui nuancée par les historiens : la période médiévale n’était sans doute pas aussi obscure qu’on l’a dit.',
            'Un groupe de penseurs, souvent appelés « pré-Lumières », a posé des fondations essentielles. Selon World History Encyclopedia, Francis Bacon (1561-1626) défend une méthode fondée sur l’observation et l’expérience ; Thomas Hobbes (1588-1679) imagine un état de nature et un contrat social, et affirme la nécessité d’une autorité politique très forte, son « Léviathan » ; René Descartes (1596-1650) soumet toute connaissance au doute et aboutit à « Je pense, donc je suis » ; Baruch Spinoza (1632-1677) critique les superstitions et réclame la tolérance religieuse ; John Locke (1632-1704) veut limiter le pouvoir de l’État pour protéger certaines libertés, dont le droit de propriété, et soutient que le gouvernement repose sur le consentement du peuple. Les philosophes des Lumières reprennent, discutent ou combattent ces idées, mais ils partent d’elles.',
            'La science joue un rôle moteur. World History Encyclopedia présente les Principia Mathematica d’Isaac Newton (1687) comme l’un des premiers textes du siècle des Lumières et comme le point culminant de la révolution scientifique : le monde peut être compris, et les mathématiques et l’observation sont les meilleurs outils pour y parvenir. Newton montre aussi qu’il existe de l’ordre et de l’harmonie dans la nature, ce que les philosophes cherchent ensuite à retrouver dans la société humaine. Larousse insiste sur l’attitude d’esprit commune aux hommes des Lumières, inspirée de l’expérimentalisme de Newton et de Locke : chercher par l’enquête empirique les rapports et les lois que les préjugés masquaient. Le CNRS rappelle qu’Émilie du Châtelet fut la première traductrice de Newton en français.',
            'Le contexte politique compte aussi. Larousse souligne que l’Angleterre offre l’image d’un pays libre : deux révolutions (1642-1649, puis 1688-1689 avec la Déclaration des droits, ou Bill of Rights) y ont détruit le régime de l’absolutisme et de l’intolérance. Les philosophes français, fascinés par ce libéralisme, en diffusent les idées sur le continent. Dès la fin du XVIIe siècle apparaît aussi une pensée critique en France : Fontenelle publie ses Entretiens sur la pluralité des mondes en 1686, et Pierre Bayle son Dictionnaire historique et critique en 1697. Ces œuvres montrent que le goût du doute et de la vulgarisation scientifique précède de plusieurs décennies la grande période des Lumières.'
          ],
          example: {
            statement: 'Les Principia de Newton sont publiés en 1687 et la réponse de Kant à la question « Qu’est-ce que les Lumières ? » en 1784. Combien d’années séparent ces deux textes ?',
            calculation: 'On soustrait les deux années : 1784 − 1687 = 97.',
            answer: '97 ans. Ces deux textes se situent à l’intérieur de la période généralement attribuée aux Lumières, du dernier quart du XVIIe siècle au dernier quart du XVIIIe siècle.'
          },
          exercise: {
            question: 'Pourquoi ne peut-on pas donner une date exacte de début et de fin des Lumières ?',
            answer: 'Parce qu’il s’agit d’un mouvement progressif et européen, dont les bornes sont des conventions. World History Encyclopedia le situe généralement du dernier quart du XVIIe siècle au dernier quart du XVIIIe siècle, et propose ailleurs la fourchette approximative c. 1675 – c. 1825.'
          },
          exercises: [
            {
              question: 'Quel ouvrage de Newton, publié en 1687, est présenté comme l’un des premiers textes du siècle des Lumières ?',
              answer: 'Les Principia Mathematica (Principes mathématiques de la philosophie naturelle).'
            },
            {
              question: 'Quel philosophe « pré-Lumières » aboutit à la formule « Je pense, donc je suis » en appliquant le doute à toute connaissance ?',
              answer: 'René Descartes (1596-1650).'
            },
            {
              question: 'Quelle révolution anglaise de 1688-1689 a produit la Déclaration des droits (Bill of Rights) et nourri l’image d’une Angleterre libre ?',
              answer: 'La révolution de 1688-1689, qui a mis fin à l’absolutisme et à l’intolérance selon Larousse.'
            },
            {
              question: 'Les penseurs éclairés voulaient-ils tous supprimer l’Église ?',
              answer: 'Non. Selon World History Encyclopedia, la plupart ne voulaient pas la remplacer, mais obtenir plus de liberté religieuse et de tolérance.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'Larousse — Siècle des Lumières', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'CNRS Le journal — Les Lumières brillent-elles encore au XXIe siècle ?', url: 'https://lejournal.cnrs.fr/articles/les-lumieres-brillent-elles-encore-au-xxie-siecle' },
            { title: 'Le Robert — Les Lumières (fiche de synthèse)', url: 'https://passeurs-de-textes-lycee.lerobert.com/9782321014058/asset/04_Les_Lumieres.pdf' }
          ]
        }
      },
      {
        id: 'raison-progres-tolerance',
        title: 'Raison, progrès, tolérance : les idées centrales des Lumières',
        field: 'Lumières · Idées et valeurs · XVIIIe siècle',
        summary: 'Comprendre la confiance dans la raison, la méthode expérimentale, le déisme, la recherche du bonheur et l’idée de progrès, ainsi que les désaccords entre philosophes.',
        lesson: {
          sections: [
            'Pour World History Encyclopedia, l’idée centrale des Lumières est que la raison, plutôt que la superstition et le dogme, est le meilleur outil pour accroître la connaissance, la liberté et le bonheur. Larousse décrit la même démarche sous l’angle de la méthode : la connaissance passe par l’observation, l’analyse et la comparaison. D’où l’importance du voyage, le souci de classer les faits et de construire des tableaux. Buffon en donne un exemple avec son Histoire naturelle en trente-six volumes. La raison étant jugée universelle, les sciences humaines se développent à côté des sciences naturelles : ethnologie, psychologie, linguistique, démographie. Montesquieu, dans L’Esprit des lois, invente selon Larousse une sociologie politique en étudiant le lien entre les mœurs d’un peuple et la forme de son gouvernement.',
            'En 1784, Emmanuel Kant répond à la question « Qu’est-ce que les Lumières ? » dans la revue allemande Berlinische Monatsschrift. Il les définit comme la sortie de l’homme hors de la « minorité » dont il est lui-même responsable, c’est-à-dire de l’incapacité à se servir de son intelligence sans la direction d’autrui. Cette minorité vient, dit-il, non d’un manque d’intelligence mais d’un manque de décision et de courage. Sa devise, Sapere aude, « aie le courage de te servir de ta propre intelligence », est empruntée au poète latin Horace. Larousse rappelle que, pour Kant, la philosophie est « l’usage public de la raison » : à la fois un débat ouvert et contradictoire, et un effort pour convaincre et répandre les idées nouvelles.',
            'Sur la religion, les Lumières ne se confondent pas avec l’athéisme. Larousse explique qu’elles rejettent les dogmes et refusent la prétention de la religion à tout expliquer, mais que la plupart des intellectuels éclairés restent déistes : l’Univers leur apparaît comme une mécanique si bien réglée qu’il suppose une intelligence ordonnatrice. Voltaire en donne l’image fameuse d’une horloge qui suppose un horloger. Les Lumières distinguent aussi les sphères de la réalité (naturelle, politique, domestique, religieuse), chacune avec ses lois et ses méthodes. Des positions plus radicales existent cependant : Larousse oppose le déisme de Voltaire au matérialisme de Diderot et de d’Holbach. World History Encyclopedia ajoute que les penseurs éclairés étaient appelés « libres penseurs » parce qu’ils remettaient en question les croyances reçues.',
            'Le bonheur et le progrès forment l’autre pilier. Selon Larousse, les Lumières remplacent la recherche chrétienne du salut dans l’au-delà par la quête du bonheur individuel ici-bas, et jugent utile ce qui fait le bien des autres. Elles reposent sur un optimisme : la science, croient-elles, fait avancer l’humanité. Ce sentiment s’appuie sur des changements réels : Larousse mentionne un recul de la famine, de la guerre et de la peste, une baisse générale de la mortalité et un allongement de la durée de vie d’environ dix ans en moyenne dans la seconde moitié du XVIIIe siècle. World History Encyclopedia résume trois idées : la raison comprend mieux le monde que les sens et les émotions, tous les hommes sont égaux et les gouvernements doivent protéger la liberté et promouvoir le bonheur, et les citoyens ont des droits naturels que l’État ne doit pas supprimer.',
            'Ces idées n’ont jamais formé un système unique. Larousse note des lignes de partage : entre déisme et matérialisme, mais aussi entre une revendication générale de liberté (Voltaire) et un souci d’égalité et de justice sociale (Rousseau). Rousseau se distingue encore en défendant, face à la raison collective, les droits du « moi sensible ». Hume élargit la notion de raison pour y inclure l’émotion, et Burke souligne le rôle de l’histoire et de l’intuition, selon World History Encyclopedia. Kant, enfin, limite la prétention de la raison en montrant que certaines connaissances, comme l’espace et le temps, sont indépendantes de l’expérience. Étudier les Lumières, c’est donc étudier un débat permanent et non une doctrine figée.'
          ],
          example: {
            statement: 'L’Esprit des lois de Montesquieu paraît en 1748 et la réponse de Kant à « Qu’est-ce que les Lumières ? » en 1784. Quel intervalle sépare ces deux dates ?',
            calculation: 'On soustrait les deux années : 1784 − 1748 = 36.',
            answer: '36 ans. Entre ces deux dates, la réflexion sur la raison et la liberté s’est étendue de la France à l’Allemagne, ce qui illustre le caractère européen du mouvement.'
          },
          exercise: {
            question: 'Que signifie la devise « Sapere aude » dans le texte de Kant de 1784 ?',
            answer: 'Elle signifie « aie le courage de te servir de ta propre intelligence » : sortir de la minorité en pensant par soi-même plutôt qu’en dépendant de la direction d’autrui.'
          },
          exercises: [
            {
              question: 'Que signifie être « déiste » à l’époque des Lumières ?',
              answer: 'C’est croire en une intelligence ordonnatrice de l’Univers tout en rejetant les dogmes et les vérités révélées.'
            },
            {
              question: 'Quelle opposition Larousse relève-t-il entre Voltaire et Rousseau ?',
              answer: 'Voltaire met surtout en avant la liberté, tandis que Rousseau insiste sur l’égalité et la justice sociale.'
            },
            {
              question: 'Quel changement démographique Larousse associe-t-il à l’optimisme des Lumières ?',
              answer: 'Une baisse générale de la mortalité, avec un allongement de la durée de vie d’environ dix ans en moyenne dans la seconde moitié du XVIIIe siècle.'
            },
            {
              question: 'Les philosophes des Lumières pensaient-ils tous la même chose ?',
              answer: 'Non. Ils s’opposaient sur la religion (déisme ou matérialisme), sur la liberté ou l’égalité, sur la place de la raison et de l’émotion.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'Larousse — Siècle des Lumières', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'Universalis — Qu’est-ce que les Lumières ? (Kant), fiche de lecture', url: 'https://www.universalis.fr/encyclopedie/qu-est-ce-que-les-lumieres/' },
            { title: 'SchoolMouv — Qu’est-ce que les Lumières ? (Kant), fiche œuvre', url: 'https://www.schoolmouv.fr/fiches-de-lecture/qu-est-ce-que-les-lumieres-emmanuel-kant/fiche-oeuvre' }
          ]
        }
      },
      {
        id: 'philosophes-et-oeuvres',
        title: 'Montesquieu, Voltaire, Rousseau, Diderot : penseurs et œuvres majeures',
        field: 'Lumières · Philosophes français · 1721-1784',
        summary: 'Connaître les principales œuvres et idées de Montesquieu, Voltaire, Rousseau et Diderot, et situer d’autres penseurs européens comme Hume, Smith, Kant ou Beccaria.',
        lesson: {
          sections: [
            'Charles de Montesquieu (1689-1757) s’inquiète avant tout du risque de gouvernement autoritaire. Il publie les Lettres persanes en 1721, puis De l’esprit des lois en 1748. Selon Larousse, il y analyse tous les régimes politiques et établit les rapports qui unissent les lois d’un pays à ses mœurs, à son climat et à son économie. World History Encyclopedia le crédite d’avoir formulé la séparation des pouvoirs exécutif, législatif et judiciaire. Larousse précise qu’il admire la monarchie modérée de type anglais, où la loi protège le citoyen contre l’arbitraire. Son libéralisme reste toutefois limité aux élites : il propose que clergé, noblesse et parlements servent de « pouvoirs intermédiaires » face au roi. L’Esprit des lois fut mis à l’Index des livres interdits de l’Église catholique en 1751.',
            'Voltaire (1694-1778) est, selon l’historien cité par World History Encyclopedia, celui qui incarnait le plus les Lumières aux yeux de ses contemporains. Il critique le pouvoir de l’Église catholique, réclame plus de liberté individuelle et de tolérance religieuse, et défend la capacité de la raison. Il reproche aussi aux philosophes de ne pas proposer de solutions pratiques. Son œuvre est abondante : le conte Zadig (1747), Le Siècle de Louis XIV (1751), le conte Candide (1759), le Traité sur la tolérance (1763) écrit à l’occasion de l’affaire Calas. Larousse le range parmi les déistes. Il écrit en 1765 qu’une « révolution dans les esprits » s’est faite et que la lumière s’étend de tous côtés.',
            'Jean-Jacques Rousseau (1712-1778), penseur de langue française né à Genève, occupe une place à part. Dans le Discours sur l’origine et les fondements de l’inégalité parmi les hommes (1755), il soutient que la vie sociale, en créant des inégalités, a corrompu une nature humaine bonne à l’origine. Il publie La Nouvelle Héloïse (1761), puis Du contrat social et Émile ou De l’éducation (1762), et rédige Les Confessions (1782-1789 selon la chronologie de Larousse). Selon World History Encyclopedia, il imagine des hommes libres et égaux à l’état de nature, et une communauté fondée sur le consentement et orientée vers le bien commun, où la « volonté générale » prime. Larousse souligne que son souci d’égalité et de justice sociale le distingue de Voltaire.',
            'Denis Diderot (1713-1784) est le maître d’œuvre de l’Encyclopédie, dont le chapitre suivant retrace l’histoire. World History Encyclopedia résume sa pensée comme une croyance humaniste en l’autonomie individuelle et dans l’usage d’arguments modernes, non religieux et, si possible, scientifiques pour mettre en cause les connaissances fondées sur la foi seule. Larousse le classe parmi les matérialistes et cite sa Lettre sur les aveugles (1749), ainsi que son drame Le Fils naturel (1757). Diderot a aussi travaillé comme conseiller de Catherine II de Russie, ce qui l’a confronté de près aux limites du « despotisme éclairé » étudié plus loin.',
            'Le mouvement dépasse largement la France. World History Encyclopedia évoque David Hume (1711-1776), pour qui nous possédons un sens moral naturel et qui reste sceptique sur l’utilité de la religion ; Adam Smith (1723-1790), qui fait de l’économie une science et défend le libre-échange ; Emmanuel Kant (1724-1804) ; Edmund Burke (1729-1797) ; Thomas Paine (1737-1809) ; Cesare Beccaria (1738-1794), qui réclame une réforme des prisons et la fin des punitions excessives ; Jeremy Bentham (1748-1832) et son principe du plus grand bonheur pour le plus grand nombre ; Mary Wollstonecraft (1759-1797), qui demande l’égalité des chances en matière d’éducation. Larousse ajoute Condillac (Traité des sensations, 1754) et Helvétius (De l’esprit, 1758). Il faut retenir que ces penseurs se contredisent souvent : le mouvement vit de ses débats.'
          ],
          example: {
            statement: 'De l’esprit des lois de Montesquieu paraît en 1748 et Du contrat social de Rousseau en 1762. Combien d’années séparent ces deux publications ?',
            calculation: 'On soustrait les deux années : 1762 − 1748 = 14.',
            answer: '14 ans. Le Discours sur l’inégalité de Rousseau (1755) paraît entre les deux, ce qui montre que Rousseau réfléchit aux fondements de la société pendant les années où l’Encyclopédie sort.'
          },
          exercise: {
            question: 'Quelle idée politique célèbre est associée à Montesquieu dans L’Esprit des lois ?',
            answer: 'La séparation des pouvoirs en trois : exécutif, législatif et judiciaire, pour protéger la liberté contre l’arbitraire.'
          },
          exercises: [
            {
              question: 'Quels deux grands auteurs des Lumières meurent en 1778 ?',
              answer: 'Voltaire et Jean-Jacques Rousseau.'
            },
            {
              question: 'Quelles œuvres Rousseau publie-t-il en 1762 ?',
              answer: 'Du contrat social et Émile ou De l’éducation.'
            },
            {
              question: 'Quelle œuvre de Voltaire de 1763 fait suite à l’affaire Calas ?',
              answer: 'Le Traité sur la tolérance.'
            },
            {
              question: 'En quelle année L’Esprit des lois a-t-il été mis à l’Index par l’Église catholique ?',
              answer: 'En 1751, selon World History Encyclopedia.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'Larousse — Siècle des Lumières (dont chronologie)', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'Larousse — Affaire Calas (1762-1765)', url: 'https://www.larousse.fr/encyclopedie/divers/affaire_Calas/110852' }
          ]
        }
      },
      {
        id: 'encyclopedie-diderot-dalembert',
        title: 'L’Encyclopédie de Diderot et d’Alembert (1751-1772)',
        field: 'Lumières · France · 1751-1772',
        summary: 'Comprendre l’origine, l’organisation, les obstacles et le succès de l’Encyclopédie, entreprise emblématique des Lumières.',
        lesson: {
          sections: [
            'L’Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers, est considérée par Larousse comme le meilleur symbole de la volonté des Lumières de rassembler toutes les connaissances disponibles et de les diffuser auprès d’un public éclairé. Dirigée par Diderot et d’Alembert, elle est précédée d’un Discours préliminaire de d’Alembert. World History Encyclopedia la décrit comme souvent surnommée la « Bible des Lumières ». Diderot en résume le but : rassembler les connaissances éparses sur la Terre, en exposer le système à ses contemporains et le transmettre aux générations futures, afin que leurs descendants soient plus instruits, plus vertueux et plus heureux. C’est donc à la fois une entreprise de savoir et un combat intellectuel.',
            'Le projet naît de la traduction et de l’adaptation en français de la Cyclopaedia (1728) de l’Anglais Ephraim Chambers, confiée à Diderot et d’Alembert par le libraire Le Breton. Rapidement, l’idée de traduire est abandonnée : une œuvre originale s’annonce. Pour atteindre une exactitude technique irréprochable, l’équipe s’adresse à des spécialistes de chaque question. Larousse parle d’environ 150 savants, philosophes et spécialistes divers, parmi lesquels Rousseau, Voltaire, l’architecte Blondel, l’astronome Le Roy ou le juriste Toussaint. Diderot reste le maître d’œuvre : il relit, corrige et coordonne plus de 71 000 articles. D’Alembert l’assiste surtout pendant les premières années.',
            'La publication s’étend sur une vingtaine d’années. Les volumes paraissent de 1751 à 1772, soit vingt et un ans entre la sortie du premier et celle du dernier. L’ouvrage comprend au final 17 volumes de textes et 11 volumes de planches, auxquels s’ajoutent 2 volumes d’index et 5 volumes de suppléments, soit 35 volumes au total. Les illustrations ont pris une importance plus grande que prévu : lors de la première offre aux souscripteurs en 1750, on annonçait seulement 2 volumes de planches pour 8 volumes de texte. Elles montrent des machines démontées et des outils expliqués, et participent à un éloge du génie humain à travers les métiers et les techniques.',
            'Cette aventure éditoriale fut loin d’être tranquille. Larousse explique que les atteintes à la religion et les professions de foi matérialistes présentes dans l’ouvrage ont provoqué des procès, des demandes d’interdiction, des pamphlets et un arrêt du Conseil d’État. La parution des volumes a été plusieurs fois interrompue et menacée, et l’imprimeur, craignant la Bastille, a supprimé de sa propre initiative des passages jugés dangereux. L’entreprise bénéficie pourtant de hautes protections : dans l’entourage de Louis XV, Mme de Pompadour et Malesherbes, directeur de la Librairie et responsable de la censure royale, la soutiennent, tandis que la reine et les jésuites cherchent à la ruiner. L’Encyclopédie montre ainsi que la censure de l’Ancien Régime était réelle mais pas toujours efficace.',
            'Le succès commercial est considérable pour l’époque. Larousse indique qu’au moment où paraît le premier volume, environ 1 000 personnes s’engagent à acheter l’ouvrage et avancent 20 % du prix. Le nombre de souscripteurs augmente ensuite jusqu’à se stabiliser autour de 2 500. L’Encyclopédie est imprimée à plus de 4 000 exemplaires, et un peu plus de la moitié du tirage est vendue ferme avant d’arriver en librairie. Des imitations et des traductions diffusent ensuite l’ouvrage dans toute l’Europe, ce qui contribue à propager l’esprit des Lumières. Au total, l’Encyclopédie est à la fois un grand succès de librairie et un instrument de diffusion des idées nouvelles auprès d’un public cultivé.'
          ],
          example: {
            statement: 'L’Encyclopédie comprend 17 volumes de textes, 11 volumes de planches, 2 volumes d’index et 5 volumes de suppléments. Combien de volumes compte-t-elle au total ? Et combien d’années séparent la parution du premier volume (1751) de celle du dernier (1772) ?',
            calculation: 'Total des volumes : 17 + 11 + 2 + 5 = 35. Durée : 1772 − 1751 = 21.',
            answer: '35 volumes, publiés sur 21 ans.'
          },
          exercise: {
            question: 'Pourquoi l’Encyclopédie est-elle considérée comme le symbole des Lumières ?',
            answer: 'Parce qu’elle rassemble les connaissances de son temps, y compris scientifiques et techniques, pour les diffuser auprès d’un public large, et qu’elle défend la raison face à l’autorité et à la superstition.'
          },
          exercises: [
            {
              question: 'Quel ouvrage anglais de 1728 est à l’origine du projet de l’Encyclopédie ?',
              answer: 'La Cyclopaedia d’Ephraim Chambers.'
            },
            {
              question: 'Qui sont les deux directeurs de l’Encyclopédie ?',
              answer: 'Denis Diderot et Jean Le Rond d’Alembert.'
            },
            {
              question: 'Pourquoi les planches ont-elles posé un problème financier ?',
              answer: 'Parce que leur abondance et leur qualité d’exécution ont entraîné des frais importants, alors que l’on avait prévu au départ 2 volumes de planches pour 8 volumes de textes.'
            },
            {
              question: 'Qui, dans l’entourage de Louis XV, soutenait l’entreprise ?',
              answer: 'Notamment Mme de Pompadour et Malesherbes, directeur de la Librairie.'
            }
          ],
          sources: [
            { title: 'Larousse — Siècle des Lumières, partie « L’Encyclopédie »', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'CNRS Le journal — Les Lumières brillent-elles encore au XXIe siècle ?', url: 'https://lejournal.cnrs.fr/articles/les-lumieres-brillent-elles-encore-au-xxie-siecle' }
          ]
        }
      },
      {
        id: 'espace-public-salons-presse',
        title: 'Salons, cafés, académies, loges et presse : la circulation des idées',
        field: 'Lumières · Sociabilité et espace public · XVIIIe siècle',
        summary: 'Comprendre comment les idées des Lumières circulent grâce à l’imprimerie, aux salons, aux cafés, aux académies, aux loges maçonniques et à la presse, malgré la censure.',
        lesson: {
          sections: [
            'Les Lumières se distinguent des mouvements intellectuels précédents par leur destinataire : l’opinion publique. Larousse explique que Voltaire, Diderot et leurs amis sont des « agitateurs d’idées » qui veulent discuter et convaincre. Les progrès de l’alphabétisation et de la lecture favorisent l’apparition d’un « espace public » : les débats intellectuels et politiques sortent du cercle restreint de l’administration et des élites pour toucher peu à peu des milieux plus larges. World History Encyclopedia ajoute que l’imprimerie permet de diffuser à bas prix non seulement des livres, mais aussi des traités, des pamphlets et des magazines. Les idées, et surtout les réactions critiques qu’elles suscitent, circulent plus vite qu’avant.',
            'Les cafés et les salons sont des lieux majeurs de discussion. Larousse cite le café Procope, à Paris, où se réunissent notamment Fontenelle, Voltaire, Diderot et Marmontel. Les salons sont tenus par des femmes qui reçoivent artistes, savants et philosophes : Larousse mentionne l’hôtel de la marquise de Lambert au début du siècle, puis Mme de Tencin, Mme Geoffrin, Mme du Deffand, Julie de Lespinasse et Mme Necker. Chaque hôtesse a son jour, sa spécialité et ses invités. World History Encyclopedia souligne que ces salons mélangent des couches sociales qui se croisaient peu : intellectuels, artistes, aristocrates et personnes fortunées, ce qui débouche souvent sur du mécénat.',
            'Les académies sont des sociétés savantes qui diffusent le savoir. Larousse rappelle les fondations monarchiques du XVIIe siècle en France : Académie française (1634), Académie des inscriptions et belles-lettres (1663), Académie royale des sciences (1666), Académie royale d’architecture (1671). Au XVIIIe siècle naissent notamment l’Académie royale de chirurgie (1731) et la Société royale de médecine (1776). Les académies de province passent de 9 en 1710 à 35 en 1789 ; leurs membres sont à 37 % des nobles, à 20 % des gens d’Église et à 43 % des roturiers, ce qui montre que les privilégiés y sont moins dominants qu’à Paris. Ces sociétés échangent livres, correspondance et concours de recherche, et forment des réseaux à l’échelle de l’Europe.',
            'La franc-maçonnerie est, selon Larousse, le réseau éclairé le plus développé, bien que réservé aux couches supérieures et aux hommes. Née en Angleterre et en Écosse, elle est théiste, tolérante, libérale et humaniste, et compte des milliers de loges en Europe en 1789. À cette époque, elle n’est ni anticléricale (elle le sera au XIXe siècle) ni révolutionnaire, mais elle contribue à diffuser l’esprit de réforme dans des milieux politiquement stratégiques. Les élites y font l’apprentissage de l’égalité des talents et de l’élévation par le mérite plutôt que par la naissance. S’y ajoutent les bibliothèques publiques, les chambres de lecture et la presse (Journal des savants, Mercure de France), qui diffusent comptes rendus et débats, même éloignés des centres de création.',
            'Cette circulation a des limites. Larousse note que la censure reste toujours active. Le français devient la langue des Lumières et remplace le latin comme langue internationale de communication pour les élites cultivées, mais le mouvement n’atteint dans beaucoup d’États européens qu’une partie des élites. Le CNRS rappelle aussi que les femmes étaient exclues des académies et des universités, hormis quelques cas exceptionnels comme Laura Bassi à Bologne, même si certaines participaient à des cercles de discussion savants. L’espace public des Lumières est donc ouvert pour l’époque, mais loin d’être universel.'
          ],
          example: {
            statement: 'Dans les académies de province, les membres sont à 37 % des nobles, 20 % des gens d’Église et 43 % des roturiers. Quelle part des membres appartient à la noblesse et au clergé réunis ? Et combien d’académies de province ont été créées entre 1710 (9 académies) et 1789 (35 académies) ?',
            calculation: 'Noblesse et clergé : 37 + 20 = 57 %. Contrôle : 57 + 43 = 100 %. Académies : 35 − 9 = 26.',
            answer: '57 % des membres sont nobles ou gens d’Église, et 26 académies de province de plus existent en 1789 qu’en 1710.'
          },
          exercise: {
            question: 'Pourquoi les salons ont-ils joué un rôle important dans la diffusion des Lumières ?',
            answer: 'Parce qu’ils permettaient à des philosophes, des artistes, des aristocrates et des gens fortunés de se rencontrer, de discuter et de tester leurs idées, souvent sous l’impulsion de femmes qui recevaient.'
          },
          exercises: [
            {
              question: 'Quel café parisien Larousse cite-t-il comme lieu de rencontre de Voltaire et de Diderot ?',
              answer: 'Le Procope.'
            },
            {
              question: 'Quelle langue remplace le latin comme langue internationale des élites au XVIIIe siècle ?',
              answer: 'Le français.'
            },
            {
              question: 'Quelles institutions diffusent le savoir et forment des réseaux entre villes européennes ?',
              answer: 'Les académies et les sociétés savantes, ainsi que les loges maçonniques.'
            },
            {
              question: 'Les femmes pouvaient-elles entrer dans les académies ?',
              answer: 'Non, en général. Selon le CNRS, elles étaient exclues des académies, même si certaines animaient des salons ou participaient à des cercles savants.'
            }
          ],
          sources: [
            { title: 'Larousse — Siècle des Lumières, partie « La diffusion des Lumières »', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'CNRS Le journal — Les Lumières brillent-elles encore au XXIe siècle ?', url: 'https://lejournal.cnrs.fr/articles/les-lumieres-brillent-elles-encore-au-xxie-siecle' }
          ]
        }
      },
      {
        id: 'combats-des-lumieres',
        title: 'Justice, tolérance, esclavage : les combats concrets des Lumières',
        field: 'Lumières · Affaire Calas, réforme de la justice, débats sur l’esclavage · XVIIIe siècle',
        summary: 'Étudier comment les philosophes passent de la théorie à l’action : affaire Calas, critique de la torture, débat sur l’esclavage, place des femmes, et limites de ces combats.',
        lesson: {
          sections: [
            'Les Lumières ne se limitent pas à des idées abstraites. Larousse indique que certains philosophes interviennent dans des affaires judiciaires et militent pour l’abolition des peines infamantes, de la torture et de l’esclavage. World History Encyclopedia résume cette orientation : penser un monde meilleur était la priorité au début, mais au fil du siècle c’est sa construction concrète qui devient l’enjeu. Parmi les résultats pratiques cités à long terme figurent la fin de la persécution des hérétiques, la fin des bûchers pour les sorcières, la fin du servage et la suppression de la torture dans les procédures judiciaires. Il faut cependant lire ces listes comme des tendances de long terme, qui varient selon les États et ne se réalisent pas partout au même moment.',
            'L’affaire Calas est l’exemple le plus célèbre. D’après Larousse, en 1761, Jean Calas, marchand protestant de Toulouse, découvre son fils aîné Marc-Antoine, 29 ans, pendu dans son magasin ; il cache le suicide pour sauver l’honneur de sa famille. La rumeur, nourrie par le fanatisme religieux, l’accuse d’avoir tué son fils pour l’empêcher de se convertir au catholicisme. Le parlement de Toulouse le condamne au supplice de la roue et il est exécuté le 10 mars 1762. Voltaire se mobilise : il accueille la veuve et deux enfants à Ferney, lance une campagne d’opinion, écrit le Traité sur la tolérance (1763) et sollicite des personnalités influentes. Le 4 juin 1764, le Conseil du roi casse l’arrêt du parlement de Toulouse, et Calas est réhabilité en 1765.',
            'La réflexion sur la justice dépasse l’affaire Calas. Cesare Beccaria publie Des délits et des peines en 1764, ouvrage cité par Larousse pour sa dénonciation des vices de la justice criminelle ; World History Encyclopedia retient son appel à réformer les prisons et à mettre fin aux punitions excessives. Larousse précise que des souverains inspirés par les Lumières ont humanisé la justice dans le sens voulu par Beccaria, Voltaire et Montesquieu, avec des peines moins sévères et la suppression de la torture. Ces réformes se font souvent par l’action de l’État et non par une démocratisation du pouvoir, ce que le chapitre sur le despotisme éclairé permet de mieux comprendre.',
            'L’esclavage et le système colonial sont objet de critiques, mais aussi de contradictions. Larousse cite l’abbé Raynal, dont l’Histoire philosophique et politique des établissements et du commerce des Européens dans les deux Indes (1770) condamne le despotisme, le fanatisme et le système colonial, ainsi que Condorcet, qui publie des brochures contre l’esclavage et pour les droits des femmes. World History Encyclopedia précise que Thomas Paine dénonçait l’esclavage. Le CNRS apporte un regard critique : une partie de la révolution scientifique a été financée par de l’argent issu de la traite négrière, et le siècle a produit à la fois des savants abolitionnistes comme Condorcet et des savants qui ont défendu une hiérarchie des races. Il y a donc un débat entre une vision universaliste de la raison et une hiérarchisation raciale.',
            'La place des femmes illustre les mêmes tensions. Mary Wollstonecraft (1759-1797) réclame l’égalité des chances en matière d’éducation entre hommes et femmes, et souligne les bénéfices que la société tirerait de leur situation améliorée (World History Encyclopedia). Les salons donnent un rôle essentiel à de nombreuses femmes (Larousse), mais le CNRS note qu’elles restent exclues des académies et souvent invisibles dans les livres de science. Émilie du Châtelet, première traductrice de Newton en français, montre pourtant qu’elles participaient à la production du savoir. Pour étudier les Lumières, il faut donc tenir ensemble les principes proclamés et les exclusions réelles de l’époque.'
          ],
          example: {
            statement: 'Jean Calas est exécuté le 10 mars 1762. Le Conseil du roi casse l’arrêt du parlement de Toulouse le 4 juin 1764. Combien de temps s’écoule entre ces deux dates ?',
            calculation: 'Du 10 mars 1762 au 10 mars 1764 : 2 ans. Du 10 mars 1764 au 10 mai 1764 : 2 mois. Du 10 mai au 4 juin 1764 : 25 jours.',
            answer: '2 ans, 2 mois et 25 jours, soit un peu plus de deux ans. L’arrêt est cassé quand Calas est déjà mort : la réhabilitation (1765) corrige une erreur judiciaire, sans pouvoir réparer l’exécution.'
          },
          exercise: {
            question: 'Quel rôle Voltaire joue-t-il dans l’affaire Calas ?',
            answer: 'Il sensibilise l’opinion publique, accueille la famille de Calas à Ferney, écrit le Traité sur la tolérance (1763) et sollicite des personnalités influentes, ce qui contribue à la cassation de l’arrêt en 1764.'
          },
          exercises: [
            {
              question: 'Quelle religion pratiquait Jean Calas et pourquoi cela a-t-il compté dans l’accusation ?',
              answer: 'Il était protestant ; la rumeur, attisée par le fanatisme religieux, l’accusait d’avoir tué son fils pour l’empêcher de devenir catholique.'
            },
            {
              question: 'Quel ouvrage de Beccaria paraît en 1764 ?',
              answer: 'Des délits et des peines.'
            },
            {
              question: 'Quels deux auteurs Larousse cite-t-il comme critiques de l’esclavage ou du système colonial ?',
              answer: 'L’abbé Raynal (Histoire des deux Indes, 1770) et Condorcet.'
            },
            {
              question: 'Quelle nuance le CNRS apporte-t-il sur le rapport des Lumières à l’esclavage ?',
              answer: 'Une partie de la révolution scientifique a été financée par l’argent de la traite, et les savants étaient divisés entre abolitionnistes et défenseurs de hiérarchies raciales.'
            }
          ],
          sources: [
            { title: 'Larousse — Affaire Calas (1762-1765)', url: 'https://www.larousse.fr/encyclopedie/divers/affaire_Calas/110852' },
            { title: 'Larousse — Siècle des Lumières', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'Larousse — Despotisme éclairé', url: 'https://www.larousse.fr/encyclopedie/divers/despotisme_%C3%A9clair%C3%A9/42561' },
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'CNRS Le journal — Les Lumières brillent-elles encore au XXIe siècle ?', url: 'https://lejournal.cnrs.fr/articles/les-lumieres-brillent-elles-encore-au-xxie-siecle' }
          ]
        }
      },
      {
        id: 'despotisme-eclaire',
        title: 'Le despotisme éclairé : réformer par le pouvoir d’un souverain',
        field: 'Lumières · Prusse, Russie, Autriche, Espagne · XVIIIe siècle',
        summary: 'Comprendre l’alliance entre les philosophes et certains souverains, les réformes menées, leurs limites et la fin du modèle après 1789.',
        lesson: {
          sections: [
            'Larousse définit le despotisme éclairé comme un régime où le souverain se conduit en maître absolu tout en pratiquant une politique inspirée des Lumières. Il s’agit de subordonner les intérêts privilégiés et les coutumes à un État censé représenter le bien public, de favoriser le progrès économique, de diffuser l’enseignement et de combattre les préjugés. Frédéric II, roi de Prusse de 1740 à 1786, est présenté comme le premier monarque à se proclamer disciple des Lumières. D’autres souverains se réclament d’une doctrine semblable : Catherine II, tsarine de 1762 à 1796 ; Marie-Thérèse (1740-1780) puis Joseph II (1780-1790) à la tête des États autrichiens ; Charles III, à Naples puis en Espagne (1759-1788).',
            'Pourquoi les philosophes acceptent-ils un pouvoir fort ? Larousse explique qu’ils veulent libérer, instruire et améliorer l’homme, et qu’au service de cette liberté ils admettent un pouvoir fort dans les grands États. Frédéric II déclare à Wolff que les philosophes enseignent ce qui doit être et que les rois sont là pour l’exécuter. Il estime aussi que le souverain doit voir, penser et agir pour toute la communauté. Voltaire a conseillé Frédéric II ; Diderot a conseillé Catherine II, selon Larousse et World History Encyclopedia. Les souverains ont, de leur côté, intérêt à flatter les intellectuels français, qui sont des maîtres de l’opinion européenne.',
            'Les réformes sont réelles. Larousse cite la proclamation de la tolérance religieuse, le contrôle de l’Église romaine, la suppression d’ordres monastiques, notamment de la Compagnie de Jésus, la réduction des privilèges de la noblesse, la centralisation de l’administration, le développement de l’instruction, la création de manufactures et de banques nationales, et une justice plus humaine (peines moins sévères, suppression de la torture). Ces monarques s’appuient sur le progrès de l’idée d’État : l’obéissance et le dévouement à l’État deviennent un devoir suprême. Même de petits États suivent ce modèle, comme le Portugal de Pombal, la Toscane du grand-duc Léopold, le Danemark de Struensee ou la Suède de Gustave III.',
            'Mais ce modèle comporte des limites importantes. Larousse note que le servage est parfois étendu, à rebours des idéaux émancipateurs des Lumières, et que l’État, mieux obéi, lève davantage d’impôts et de soldats, ce qui permet de nouvelles conquêtes. Les philosophes qui croyaient jouer un rôle positif auprès des princes, comme Voltaire auprès de Frédéric II ou Diderot auprès de Catherine II, perdent vite leurs illusions : ce qu’ils avaient pris pour l’avènement de la raison est en réalité celui de la raison d’État. Le despotisme éclairé réalise une émancipation contrôlée : il libère l’homme des cadres traditionnels pour mieux le soumettre à l’État.',
            'Il existe une autre voie. Montesquieu défend une monarchie modérée de type anglais, avec séparation des pouvoirs, et non un monarque réformateur (Larousse). Larousse relève le paradoxe suivant : le despotisme éclairé n’a pas pu s’imposer en France ni en Angleterre, berceaux idéologiques des Lumières, où les structures en place et les privilèges acquis ont résisté, alors qu’il a trouvé plus de liberté d’action en Europe centrale, orientale et méditerranéenne, où la bourgeoisie était peu nombreuse. Larousse place la fin du despotisme éclairé immédiatement après 1789 : les rois rejettent alors l’esprit philosophique, jugé en partie responsable de la Révolution française.'
          ],
          example: {
            statement: 'Frédéric II règne de 1740 à 1786, Catherine II de 1762 à 1796 et Joseph II de 1780 à 1790. Lequel de ces trois souverains a régné le plus longtemps, et combien d’années ?',
            calculation: 'Frédéric II : 1786 − 1740 = 46. Catherine II : 1796 − 1762 = 34. Joseph II : 1790 − 1780 = 10.',
            answer: 'Frédéric II, pendant environ 46 ans (calcul sur les années civiles).'
          },
          exercise: {
            question: 'Pourquoi parle-t-on de « despotisme » éclairé et non de démocratie éclairée ?',
            answer: 'Parce que les réformes inspirées des Lumières sont décidées par un souverain qui garde un pouvoir absolu et ne partage pas le pouvoir avec les sujets : l’avis des sujets compte moins que la volonté de l’État.'
          },
          exercises: [
            {
              question: 'Quel roi de Prusse (1740-1786) est présenté par Larousse comme le premier monarque à se proclamer disciple des Lumières ?',
              answer: 'Frédéric II.'
            },
            {
              question: 'Citez deux réformes menées par des despotes éclairés selon Larousse.',
              answer: 'Par exemple : tolérance religieuse, suppression de la torture, réduction des privilèges de la noblesse, développement de l’instruction, suppression de l’ordre des jésuites.'
            },
            {
              question: 'Quelle limite majeure Larousse relève-t-il à propos du servage ?',
              answer: 'Il est parfois étendu, à rebours des idéaux émancipateurs des Lumières.'
            },
            {
              question: 'Quel modèle politique Montesquieu préfère-t-il au despotisme éclairé ?',
              answer: 'Une monarchie modérée de type anglais, avec séparation des pouvoirs exécutif, législatif et judiciaire.'
            }
          ],
          sources: [
            { title: 'Larousse — Despotisme éclairé', url: 'https://www.larousse.fr/encyclopedie/divers/despotisme_%C3%A9clair%C3%A9/42561' },
            { title: 'Larousse — Siècle des Lumières, partie « Pour un despotisme éclairé… »', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' }
          ]
        }
      },
      {
        id: 'revolutions-limites-heritage',
        title: 'Des Lumières aux Révolutions : critiques et héritage',
        field: 'Lumières · Fin du XVIIIe siècle et regards actuels',
        summary: 'Comprendre le rapport entre les Lumières et les Révolutions américaine et française, les critiques adressées au mouvement, et les débats actuels sur son héritage.',
        lesson: {
          sections: [
            'Après 1775, le mouvement atteint, selon Larousse, sa diffusion maximale, géographique et sociale. Les grands écrivains disparaissent (Voltaire et Rousseau en 1778, Diderot en 1784), mais l’opinion se politise et prend leurs idées au mot : « la philosophie est sur la place publique ». L’Histoire des deux Indes de Raynal (1770) rencontre un grand succès, et Condorcet allie réflexion scientifique, combat politique et réflexion sur le progrès. Une nouvelle génération, les Idéologues, tente à la fin du siècle d’articuler théorie et pratique, en cherchant une science de l’homme au service de réformes politiques et culturelles. Les Lumières passent ainsi de la discussion à l’action.',
            'World History Encyclopedia voit dans la Révolution française et la guerre d’indépendance des États-Unis les deux exemples les plus nets d’action en faveur d’un monde meilleur. Dans les deux cas, les révolutionnaires s’inspirent d’œuvres de philosophes éclairés et les citent souvent ; la Déclaration des droits française et la Déclaration d’indépendance américaine reprennent des expressions comme « droits inaliénables » et « recherche du bonheur ». Thomas Paine, dans Le Sens commun, appelle les colonies américaines à se rebeller contre la domination britannique. Il serait toutefois excessif de dire que les Lumières « causent » les révolutions : elles fournissent un vocabulaire et des arguments, dans un contexte politique et social plus large.',
            'Dès le XVIIIe siècle, les Lumières sont critiquées. Le CNRS rappelle que les réactionnaires leur reprochaient de perturber l’ordre social, politique et religieux de l’absolutisme, et que les « anti-Lumières » jugeaient la rationalité trop réductrice. Burke estimait que les institutions étaient le fruit d’une longue histoire qu’une génération ne devait pas rejeter. World History Encyclopedia évoque aussi le romantisme (1775-1830) comme réaction à la domination de la raison, avec des formes d’expression plus émotionnelles et spontanées. Les Lumières ont également eu une réflexion critique sur les limites de la raison, notamment chez Kant dans la Critique de la raison pure (1781).',
            'Les historiens contemporains sont critiques mais nuancés. Le CNRS souligne que l’on s’éloigne d’une vision triomphaliste des Lumières : la science de l’époque a été en partie financée par l’argent de la traite négrière, les femmes étaient largement exclues des académies, et le siècle a connu une tension entre hiérarchisation raciale et visée universaliste d’une « commune humanité ». Le CNRS mentionne aussi des critiques actuelles qui reprochent aux Lumières d’avoir ouvert la voie à un usage incontrôlé de la science, tout en précisant qu’il s’agit d’interprétations qui changent selon les époques. World History Encyclopedia note que certains penseurs éclairés avaient déjà perçu le « côté sombre » du progrès, comme l’individualisme excessif ou la technologie contrôlée par des minorités.',
            'L’héritage est durable mais pas automatique. World History Encyclopedia attribue aux Lumières l’idée que certains domaines de la vie ne relèvent pas de l’État, base des démocraties libérales modernes, ainsi que des progrès pratiques à long terme : plus d’universités et de bibliothèques, une Église séparée de l’État dans certaines régions, notamment en France, et des systèmes électoraux plus équitables. L’historien Chisick, cité par la même source, rappelle que les valeurs des Lumières ne sont pas acquises une fois pour toutes : chaque génération doit se les approprier pour qu’elles ne se perdent pas. Il convient donc d’étudier les Lumières à la fois comme une source de libertés et comme un objet de débat historique.'
          ],
          example: {
            statement: 'Voltaire et Rousseau meurent en 1778, et Diderot en 1784. La Révolution française commence en 1789. Combien d’années séparent la mort de Voltaire de 1789 ? Et celle de Diderot ?',
            calculation: 'Voltaire : 1789 − 1778 = 11. Diderot : 1789 − 1784 = 5.',
            answer: '11 ans pour Voltaire et 5 ans pour Diderot. Aucun de ces trois auteurs n’a donc vécu la Révolution française : ses acteurs ont lu leurs œuvres et les ont réinterprétées.'
          },
          exercise: {
            question: 'Pourquoi ne faut-il pas dire que les Lumières « ont causé » la Révolution française ?',
            answer: 'Parce que les révolutionnaires ont utilisé et cité les idées des Lumières, mais la Révolution résulte d’un contexte politique, social et économique plus large. Les Lumières ont fourni des idées et un vocabulaire, pas une cause unique.'
          },
          exercises: [
            {
              question: 'Quelles expressions des déclarations américaine et française World History Encyclopedia relie-t-elle au vocabulaire des philosophes éclairés ?',
              answer: '« Droits inaliénables » et « recherche du bonheur ».'
            },
            {
              question: 'Quel mouvement artistique et littéraire (1775-1830) est présenté comme une réaction à la domination de la raison ?',
              answer: 'Le romantisme.'
            },
            {
              question: 'Citez deux critiques actuelles que le CNRS rapporte à propos des Lumières.',
              answer: 'Par exemple : le financement de la science par la traite négrière, l’exclusion des femmes des académies, la tension entre hiérarchie raciale et universalisme.'
            },
            {
              question: 'Que veut dire Chisick quand il affirme que les valeurs des Lumières ne sont pas acquises une fois pour toutes ?',
              answer: 'Que chaque génération doit se les approprier ; sinon, elles peuvent être submergées ou perdues.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Siècle des Lumières (Mark Cartwright)', url: 'https://www.worldhistory.org/trans/fr/1-22613/siecle-des-lumieres/' },
            { title: 'Larousse — Siècle des Lumières', url: 'https://www.larousse.fr/encyclopedie/divers/si%C3%A8cle_des_Lumi%C3%A8res/130660' },
            { title: 'Larousse — Despotisme éclairé', url: 'https://www.larousse.fr/encyclopedie/divers/despotisme_%C3%A9clair%C3%A9/42561' },
            { title: 'CNRS Le journal — Les Lumières brillent-elles encore au XXIe siècle ?', url: 'https://lejournal.cnrs.fr/articles/les-lumieres-brillent-elles-encore-au-xxie-siecle' },
            { title: 'Universalis — Qu’est-ce que les Lumières ? (Kant), fiche de lecture', url: 'https://www.universalis.fr/encyclopedie/qu-est-ce-que-les-lumieres/' }
          ]
        }
      }
    ]
  },

// BRANCHE — HISTOIRE DE L’ÉCRITURE

  {
    id: 'histoire-ecriture',
    sortYear: -3500,
    title: 'Histoire de l’écriture',
    note: 'Neuf chapitres sur l’invention de l’écriture en Mésopotamie, son déchiffrement, les hiéroglyphes égyptiens, l’écriture chinoise, la naissance de l’alphabet, l’écriture maya et l’imprimerie. Les dates sont approximatives, les sources n’emploient pas toujours les mêmes repères et certaines origines restent débattues.',
    chapters: [
      {
        id: 'invention-ecriture-uruk',
        title: 'L’invention de l’écriture en Mésopotamie : Uruk et la comptabilité',
        field: 'Mésopotamie · Fin du IVe millénaire av. J.-C.',
        summary: 'Comprendre pourquoi les premiers signes écrits sont nés dans l’administration des grandes cités et comment le principe du rébus a permis de noter des sons.',
        lesson: {
          sections: [
            'Dans le sud de la Mésopotamie, la seconde moitié du IVe millénaire av. J.-C. voit une très forte augmentation du nombre de sites habités. Selon le Metropolitan Museum of Art, la ville d’Uruk dépasse alors tous les autres centres urbains : elle couvre environ 250 hectares et a été qualifiée de « première ville de l’histoire du monde ». Elle est dominée par de grands domaines liés aux temples, qui ont besoin de comptabiliser et de distribuer des revenus. C’est ce besoin qui conduit à enregistrer des données économiques sur des tablettes d’argile.',
            'Les plus anciens signes sont des pictogrammes tracés avec un roseau ou un bâtonnet dans l’argile humide. Certains représentent des denrées à compter, comme des céréales, des poissons ou divers animaux. On connaît aujourd’hui environ 6 000 tablettes proto-cunéiformes, qui totalisent plus de 38 000 lignes de texte, dans les zones associées à la culture d’Uruk. L’argile s’est imposée parce qu’elle était abondante, peu coûteuse et durable par rapport à d’autres supports. Un des plus anciens textes d’Uruk est une liste de 120 fonctionnaires, dont le chef de la cité.',
            'Un progrès décisif survient lorsqu’un signe ne représente plus seulement l’objet dessiné, mais aussi un son ou un groupe de sons : c’est le principe du rébus. Le Met donne un exemple moderne : en anglais, le dessin d’un œil peut noter à la fois « eye » (œil) et le pronom « I », qui se prononcent de la même façon. Les premiers usages du rébus datent d’entre 3200 et 3000 av. J.-C. ; son emploi systématique n’apparaît nettement qu’après 2600 av. J.-C. Vers le milieu du IIIe millénaire, le cunéiforme est employé pour des documents économiques, religieux, politiques, littéraires et savants.',
            'Les datations varient selon les sources. World History Encyclopedia situe les débuts du cunéiforme vers 3600/3500 av. J.-C. et son développement à Uruk vers 3200 av. J.-C., alors que les tablettes proto-cunéiformes de la collection du Met sont datées d’environ 3100–2900 av. J.-C. Le Met précise aussi que l’identification des tablettes d’Uruk avec les Sumériens est la théorie la plus répandue, mais qu’elle n’est pas unanimement acceptée. Enfin, des recherches récentes suggèrent que des systèmes proto-cunéiformes ont pu exister en Syrie et en Turquie dès le milieu du IVe millénaire, hypothèse que de nouvelles fouilles devront confirmer.'
          ],
          example: {
            statement: 'Selon le Met, les premiers exemples de rébus apparaissent dès 3200 av. J.-C. et son usage systématique n’est net qu’après 2600 av. J.-C. Combien d’années séparent ces deux repères ?',
            calculation: 'Les deux dates sont avant notre ère : le nombre le plus grand est le plus ancien, et on soustrait directement : 3200 − 2600 = 600.',
            answer: 'Environ 600 ans. Ce sont des repères approximatifs, pas des dates exactes.'
          },
          exercise: {
            question: 'Pourquoi les premières écritures sont-elles liées à l’administration ?',
            answer: 'Parce que les grands domaines de temples d’Uruk devaient compter et distribuer des biens : l’écriture a d’abord servi d’outil de comptabilité.'
          },
          exercises: [
            {
              question: 'Qu’est-ce que le principe du rébus ?',
              answer: 'Un signe note non seulement l’objet qu’il représente, mais aussi un son ou un groupe de sons, ce qui permet d’écrire des noms, des verbes et des idées abstraites.'
            },
            {
              question: 'Pourquoi l’argile est-elle devenue le support privilégié des premiers scribes mésopotamiens ?',
              answer: 'Elle était abondante, peu coûteuse et durable par rapport à d’autres supports.'
            },
            {
              question: 'Pourquoi les dates données pour les débuts du cunéiforme diffèrent-elles selon les sources ?',
              answer: 'Parce que ce sont des estimations : les sources retiennent des repères différents, et le Met rappelle que de nouvelles fouilles pourraient modifier le tableau.'
            }
          ],
          sources: [
            { title: 'The Metropolitan Museum of Art — The Origins of Writing (Ira Spar)', url: 'https://www.metmuseum.org/essays/the-origins-of-writing' },
            { title: 'World History Encyclopedia — Cuneiform', url: 'https://www.worldhistory.org/cuneiform/' }
          ]
        }
      },
      {
        id: 'cuneiforme-ecoles-litterature',
        title: 'Le cunéiforme : écoles de scribes, langues et littérature',
        field: 'Mésopotamie · Vers 2900 av. J.-C. – après 100 av. J.-C.',
        summary: 'Comprendre comment le cunéiforme s’est enrichi, a été enseigné dans les écoles de scribes et a servi à écrire plusieurs langues et des textes littéraires.',
        lesson: {
          sections: [
            'Le mot « cunéiforme » vient du latin cuneus, « coin » : un stylet taillé est enfoncé dans l’argile molle et laisse des empreintes en forme de coin. Le Met précise que ce terme a été donné par des savants du XIXe siècle. D’après World History Encyclopedia (WHE), les pictogrammes sont remplacés par des phonogrammes à Uruk vers 3200 av. J.-C., et l’écriture gagne en complexité à l’époque des dynasties archaïques (vers 2900 – vers 2350/2334 av. J.-C.). Toujours selon WHE, le nombre de signes aurait été ramené de plus de 1 000 à environ 600 pour simplifier l’écriture.',
            'Les premières tablettes sont administratives : listes de fournitures, reçus, comptes de transactions. Le spécialiste Jeremy Black, cité par WHE, souligne que pendant des siècles l’écriture a eu une fonction exclusivement administrative, au service des comptables et des fonctionnaires plutôt que de la grande littérature. Paul Kriwaczek donne un exemple : une note du type « deux moutons, temple, dieu Inanna » ne dit pas si les moutons sont livrés au temple ou reçus de lui, ni s’ils sont vivants ou morts. Pour exprimer ces relations, l’écriture a dû se perfectionner.',
            'Selon WHE, des écoles de scribes, les edubba (« maisons des tablettes »), apparaissent pendant la période des dynasties archaïques. D’abord installées dans des maisons privées, elles occupent ensuite des bâtiments spécialement destinés à l’enseignement, avec un programme standardisé. Les garçons de famille aisée (parfois des filles) y entraient vers huit ans pour des études d’environ douze ans. Les élèves apprenaient d’abord à tracer les différents types de traits en coin, puis des signes, des mots et des phrases, tout en étudiant les mathématiques, la comptabilité, l’histoire et la religion. Samuel Noah Kramer note que l’enseignement reposait sur des listes de mots classés par thèmes (arbres, animaux, pays, villes, pierres) que les élèves devaient mémoriser et copier.',
            'Le cunéiforme n’a pas servi à une seule langue. WHE cite parmi les langues qui l’ont utilisé le sumérien, l’akkadien, l’élamite, le hittite et le hourrite, entre autres. Selon la même source, il a été abandonné au profit de l’écriture alphabétique à un moment situé après 100 av. J.-C.',
            'Dans la chronologie de WHE, la prêtresse-poétesse Enheduanna (vers 2300 av. J.-C.), fille de Sargon d’Akkad, est présentée comme la première autrice connue par son nom. Les récits qui ont nourri l’Épopée de Gilgamesh sont datés d’environ 2100 à 1400 av. J.-C., et une vaste collection de tablettes, la bibliothèque d’Assurbanipal à Ninive, est constituée vers 647–629 av. J.-C. Ces textes montrent que le cunéiforme pouvait exprimer bien plus que des comptes : hymnes, mythes, récits et textes savants.'
          ],
          example: {
            statement: 'Selon WHE, un élève entre à l’edubba vers 8 ans et y étudie pendant environ douze ans. À quel âge termine-t-il approximativement ses études ?',
            calculation: 'On additionne l’âge d’entrée et la durée des études : 8 + 12 = 20.',
            answer: 'Vers 20 ans. Il s’agit d’un ordre de grandeur donné par WHE, pas d’une règle valable pour tous les lieux et toutes les époques.'
          },
          exercise: {
            question: 'Que signifie edubba ?',
            answer: 'Maison des tablettes : c’est le nom de l’école de scribes en Mésopotamie.'
          },
          exercises: [
            {
              question: 'D’où vient le mot « cunéiforme » ?',
              answer: 'Du latin cuneus, « coin », à cause de la forme des empreintes laissées par le stylet dans l’argile.'
            },
            {
              question: 'Pourquoi une note « deux moutons, temple, dieu Inanna » est-elle insuffisante, selon Kriwaczek ?',
              answer: 'Elle ne précise pas si les moutons sont livrés au temple ou reçus de lui, ni leur état.'
            },
            {
              question: 'Quelle fonction l’écriture a-t-elle eue pendant les premiers siècles, selon Jeremy Black ?',
              answer: 'Une fonction exclusivement administrative : aider les comptables et les fonctionnaires.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Cuneiform', url: 'https://www.worldhistory.org/cuneiform/' },
            { title: 'The Metropolitan Museum of Art — The Origins of Writing (Ira Spar)', url: 'https://www.metmuseum.org/essays/the-origins-of-writing' }
          ]
        }
      },
      {
        id: 'dechiffrement-cuneiforme',
        title: 'Le déchiffrement du cunéiforme au XIXe siècle',
        field: 'Proche-Orient ancien · XIXe siècle',
        summary: 'Comprendre comment plusieurs savants ont rendu lisibles les tablettes cunéiformes et comment ces lectures ont renouvelé la connaissance de l’Antiquité.',
        lesson: {
          sections: [
            'Selon World History Encyclopedia (WHE), la découverte et le déchiffrement des tablettes cunéiformes au XIXe siècle ont profondément transformé la compréhension de l’histoire. Avant cela, la Bible était considérée comme le plus ancien livre et l’on ne savait rien de la civilisation sumérienne. Les grandes œuvres littéraires de Mésopotamie, comme Atrahasis, la Descente d’Inanna, l’Enuma Elish ou l’Épopée de Gilgamesh, étaient restées inconnues jusqu’au milieu du XIXe siècle.',
            'WHE cite plusieurs savants. Georg Friedrich Grotefend (1775–1853) a déchiffré du cunéiforme avant 1823. Henry Creswicke Rawlinson (1810–1895) a travaillé sur l’inscription de Behistun : ses traductions de textes mésopotamiens sont présentées à la Royal Asiatic Society de Londres en 1837 puis en 1839. Edward Hincks (1792–1866) s’est consacré au cunéiforme perse, dont il a établi des régularités et identifié des voyelles. Jules Oppert (1825–1905) a établi la grammaire du cunéiforme assyrien. Ces attributions sont simplifiées : le déchiffrement a été un travail collectif étalé sur plusieurs décennies.',
            'En 1846, Rawlinson collabore avec l’archéologue Austen Henry Layard aux fouilles de Ninive et se charge des premières traductions de la bibliothèque d’Assurbanipal découverte sur ce site (WHE). George Smith (1840–1876), traducteur autodidacte, publie en 1872 la traduction de la version mésopotamienne du récit du déluge, que l’on croyait jusque-là propre au Livre de la Genèse. Cette traduction a permis d’interpréter plus justement d’autres tablettes et a ouvert la voie à une étude plus objective de l’histoire du Proche-Orient.',
            'WHE présente aussi Le Chant d’amour de Shu-Sin, daté d’environ 2000 av. J.-C., comme le plus ancien poème d’amour reconnu, bien antérieur au Cantique des cantiques. La même source rapproche les récits mésopotamiens de certains récits bibliques, dans des formulations parfois très tranchées : ces comparaisons relèvent de l’interprétation des historiens et il convient de les lire avec prudence. Le fait établi est que les textes cunéiformes, une fois lus, ont fourni une immense documentation écrite sur des civilisations jusque-là presque inconnues.'
          ],
          example: {
            statement: 'George Smith est né en 1840 et a publié en 1872 la traduction du récit mésopotamien du déluge. Quel âge avait-il environ à ce moment-là ?',
            calculation: 'On soustrait l’année de naissance à l’année de publication : 1872 − 1840 = 32.',
            answer: 'Environ 32 ans (31 ou 32 selon son jour de naissance, qui n’est pas donné ici).'
          },
          exercise: {
            question: 'Pourquoi l’Épopée de Gilgamesh est-elle restée inconnue jusqu’au XIXe siècle ?',
            answer: 'Parce qu’elle était écrite en cunéiforme, une écriture que l’on ne savait plus lire : elle n’a pu être connue qu’après son déchiffrement.'
          },
          exercises: [
            {
              question: 'Quel savant est associé à l’inscription de Behistun dans l’article de WHE ?',
              answer: 'Henry Creswicke Rawlinson.'
            },
            {
              question: 'Quel site Rawlinson a-t-il fouillé avec Layard en 1846 ?',
              answer: 'Ninive, d’où provient la bibliothèque d’Assurbanipal.'
            },
            {
              question: 'Pourquoi ne peut-on pas attribuer le déchiffrement du cunéiforme à une seule personne ?',
              answer: 'Parce que plusieurs savants (Grotefend, Hincks, Rawlinson, Oppert, Smith…) y ont contribué à des étapes différentes et sur différentes formes de cunéiforme.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Cuneiform', url: 'https://www.worldhistory.org/cuneiform/' },
            { title: 'The Metropolitan Museum of Art — The Origins of Writing (Ira Spar)', url: 'https://www.metmuseum.org/essays/the-origins-of-writing' }
          ]
        }
      },
      {
        id: 'hieroglyphes-egyptiens',
        title: 'Les hiéroglyphes égyptiens, le hiératique et le démotique',
        field: 'Égypte ancienne · Vers 3300 av. J.-C. – IVe siècle apr. J.-C.',
        summary: 'Comprendre l’apparition de l’écriture en Égypte, ses trois formes principales et sa disparition progressive.',
        lesson: {
          sections: [
            'Les plus anciens exemples connus d’écriture égyptienne proviennent d’Abydos, sous forme d’étiquettes d’os et d’ivoire, de vases et d’empreintes de sceaux. La tombe U-j, découverte en 1988 par une équipe de l’Institut archéologique allemand dirigée par Günter Dreyer, date de la fin de la période prédynastique, vers 3100 av. J.-C. selon The Past et World History Encyclopedia. Elle contenait environ 150 étiquettes gravées de signes. Selon les sources, les inscriptions sont datées de 3320–3150 av. J.-C. ou d’environ 3250 av. J.-C. : les datations varient.',
            'Les étiquettes de la tombe U-j attestent déjà des signes phonétiques et l’emploi du principe du rébus. L’écriture égyptienne avait donc connu des étapes de développement antérieures, qui n’ont pas été retrouvées. Une étude paléographique consacrée aux débuts de l’écriture en Égypte souligne que l’on a souvent supposé une influence de l’écriture mésopotamienne, mais que les premiers témoignages égyptiens sont différents des mésopotamiens et plus nettement figuratifs, ce qui suggère un développement indépendant.',
            'Le mot « hiéroglyphe » vient du grec hieros (« sacré ») et glyphos (« signe »). Les Égyptiens appelaient leur écriture mdju netjer, « paroles des dieux » (Virginia Museum of Fine Arts). Le système combine des phonogrammes, qui notent des sons, et des idéogrammes, qui représentent des objets ou des idées ; le même musée évalue le nombre de signes à 700–800. Les hiéroglyphes demandaient beaucoup de temps et de compétence : ils étaient surtout maîtrisés par les scribes, les prêtres et les fonctionnaires.',
            'Deux écritures cursives dérivent des hiéroglyphes. Selon WHE, le hiératique (« sacerdotal ») naît de la volonté de prêtres et de scribes de temple de simplifier l’écriture, et garde des traces de l’aspect imagé des hiéroglyphes. Le démotique (« populaire »), encore plus abrégé et sans trace pictographique, est employé à partir du VIIe siècle av. J.-C. ; il remplace progressivement le hiératique, sauf pour les textes religieux et funéraires. Le papyrus apparaît sous la Ire dynastie (vers 3000–2890 av. J.-C.). La dernière inscription hiéroglyphique connue date du 23 août 394 apr. J.-C. ; l’écriture copte a fini par remplacer les hiéroglyphes, dont la lecture s’est perdue jusqu’en 1822.'
          ],
          example: {
            statement: 'Les plus anciens signes de la tombe U-j datent d’environ 3100 av. J.-C. et la dernière inscription hiéroglyphique connue de 394 apr. J.-C. Combien d’années d’usage cela représente-t-il environ ?',
            calculation: 'Une date av. J.-C. et une date apr. J.-C. : on additionne, puis on retire 1 car il n’y a pas d’année zéro : 3100 + 394 − 1 = 3493.',
            answer: 'Environ 3 500 ans, soit plus de trois millénaires. Les dates de départ restent approximatives.'
          },
          exercise: {
            question: 'Quelle différence y a-t-il entre le hiératique et le démotique ?',
            answer: 'Le hiératique est une écriture cursive « sacerdotale » qui garde des traces des hiéroglyphes ; le démotique, apparu vers le VIIe siècle av. J.-C., est plus abrégé encore et n’a plus de trace pictographique.'
          },
          exercises: [
            {
              question: 'Où a-t-on trouvé les plus anciens exemples connus d’écriture égyptienne ?',
              answer: 'À Abydos, notamment dans la tombe U-j.'
            },
            {
              question: 'Que veut dire l’expression égyptienne mdju netjer ?',
              answer: '« Paroles des dieux » : c’est le nom que les Égyptiens donnaient à leur écriture.'
            },
            {
              question: 'Quelle écriture a fini par remplacer les hiéroglyphes ?',
              answer: 'L’écriture copte.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Egyptian Hieroglyphs', url: 'https://www.worldhistory.org/hieroglyphics/' },
            { title: 'The Past — The discovery of Tomb U-j', url: 'https://the-past.com/shorts/the-picture-desk/the-discovery-of-tomb-u-j' },
            { title: 'History of Information — The Earliest Known Egyptian Writing', url: 'https://historyofinformation.com/detail.php?id=3428' },
            { title: 'Virginia Museum of Fine Arts — Egyptian writing', url: 'https://vmfa.museum/learn-archive/?p=2882' },
            { title: 'History of Information — The Rosetta Stone', url: 'https://historyofinformation.com/detail.php?id=438' }
          ]
        }
      },
      {
        id: 'rosette-champollion',
        title: 'La pierre de Rosette et le déchiffrement des hiéroglyphes',
        field: 'Égypte · 196 av. J.-C. – 1822',
        summary: 'Comprendre le rôle de la pierre de Rosette, le travail de Champollion et le caractère collectif du déchiffrement des hiéroglyphes.',
        lesson: {
          sections: [
            'La pierre de Rosette porte un décret daté de 196 av. J.-C., sous Ptolémée V, rédigé en hiéroglyphes (langue des prêtres), en démotique (écriture usuelle) et en grec (langue de l’administration hellénistique). Elle est découverte en juillet 1799 à Rosette (aujourd’hui Rachid) par des soldats de l’armée de Napoléon Bonaparte. Elle passe aux Britanniques en 1801, après la défaite française en Égypte (traité d’Alexandrie), et forme le noyau de la collection égyptienne du British Museum.',
            'Le grec pouvait être lu : la pierre est donc devenue un point d’appui pour comprendre les deux écritures égyptiennes. Mais les trois textes ne sont qu’à peu près parallèles. Antoine-Isaac Silvestre de Sacy, Johan David Åkerblad et Thomas Young ont mené des recherches sur le texte. Young a notamment compris que les noms enfermés dans des cartouches s’écrivaient phonétiquement. En 1819, il publie un long article « Egypt » dans un supplément de l’Encyclopaedia Britannica.',
            'Jean-François Champollion émet l’hypothèse que les hiéroglyphes combinent des mots, des signes simples et des syllabes ou phonèmes. Cela lui permet de lire les noms de « Ptolémée » et de « Cléopâtre », puis d’autres souverains. Il présente ses résultats à l’Académie des inscriptions et belles-lettres le 27 septembre 1822 dans sa Lettre à M. Dacier. Deux ans plus tard, son Précis du système hiéroglyphique des anciens Égyptiens (1824) étend son système jusqu’aux premiers pharaons. National Geographic souligne que sa connaissance du copte, descendant de l’égyptien ancien, l’a aidé à l’emporter sur ses rivaux britanniques.',
            'Le déchiffrement n’est pas l’œuvre d’un seul homme. Le Guinness World Records rappelle que Champollion s’appuie sur le travail de dizaines de figures : Ibn Wahshiyya, Abu al-Qasim, Athanasius Kircher, William Warburton, Carsten Niebuhr, Jørgen Zoëga, Silvestre de Sacy, Åkerblad et Thomas Young. D’autres documents bilingues grec-égyptien, comme l’obélisque de Philae (dit « de Bankes ») et le papyrus Casati, l’ont aidé à franchir l’étape finale. La date de 1822 marque donc un tournant décisif, pas un commencement à partir de zéro.'
          ],
          example: {
            statement: 'Le décret de la pierre de Rosette date de 196 av. J.-C. et Champollion présente sa lecture en 1822. Combien d’années séparent ces deux dates ?',
            calculation: 'Une date av. J.-C. et une date apr. J.-C. : on additionne et on retire 1 car il n’y a pas d’année zéro : 196 + 1822 − 1 = 2017.',
            answer: 'Environ 2 017 ans, soit un peu plus de deux millénaires.'
          },
          exercise: {
            question: 'Pourquoi la présence du grec sur la pierre de Rosette a-t-elle été décisive ?',
            answer: 'Le grec pouvait être lu : il servait de point d’appui pour comprendre les deux écritures égyptiennes du même décret.'
          },
          exercises: [
            {
              question: 'Quelles sont les trois écritures de la pierre de Rosette ?',
              answer: 'Les hiéroglyphes, le démotique et le grec.'
            },
            {
              question: 'Quand et devant quelle institution Champollion a-t-il présenté sa lecture en 1822 ?',
              answer: 'Le 27 septembre 1822, devant l’Académie des inscriptions et belles-lettres à Paris.'
            },
            {
              question: 'Pourquoi ne peut-on pas attribuer le déchiffrement des hiéroglyphes à une seule personne ?',
              answer: 'Parce que Champollion s’appuyait sur les travaux de nombreux savants (Silvestre de Sacy, Åkerblad, Young, Kircher…) et sur d’autres documents bilingues.'
            }
          ],
          sources: [
            { title: 'History of Information — The Rosetta Stone: Key to the Decipherment of Egyptian Hieroglyphs', url: 'https://historyofinformation.com/detail.php?id=438' },
            { title: 'History of Information — Champollion Deciphers Egyptian Hieroglyphs', url: 'https://historyofinformation.com/detail.php?id=452' },
            { title: 'Guinness World Records — First deciphered Egyptian hieroglyphs', url: 'https://www.guinnessworldrecords.com/world-records/740489-first-deciphered-egyptian-hieroglyphs' },
            { title: 'National Geographic — Hieroglyphics were a mystery until this man solved the riddle of the Rosetta Stone', url: 'https://www.nationalgeographic.com/history/history-magazine/article/hieroglyphics-were-a-mystery-until-he-solved-the-rosetta-stone' },
            { title: 'BBC Science Focus — Rosetta Stone: A history of translating ancient Egyptian hieroglyphs', url: 'https://www.sciencefocus.com/science/rosetta-stone-a-history-of-translating-ancient-egyptian-hieroglyphs' }
          ]
        }
      },
      {
        id: 'ecriture-chinoise-os-oraculaires',
        title: 'L’écriture chinoise : les os oraculaires de la dynastie Shang',
        field: 'Chine · Vers 1250–1050 av. J.-C.',
        summary: 'Comprendre ce que sont les os oraculaires, pourquoi ils constituent les plus anciens témoignages connus d’écriture chinoise et quelles limites doivent être gardées en tête.',
        lesson: {
          sections: [
            'Les plus anciens exemples connus d’écriture chinoise sont gravés sur des os oraculaires : omoplates de bovidés et plastrons de tortue datés de la fin de la dynastie Shang, d’environ 1250 à 1050 av. J.-C. Ils proviennent surtout d’Anyang, dans la province du Henan, dernière capitale des Shang. Ils servaient à des rituels de divination de la maison royale.',
            'On a reconnu en 1899 que les marques de ces os étaient une forme d’écriture. Des villageois des environs d’Anyang, qui les prenaient pour des « os de dragon », en avaient déterré au XIXe siècle, et beaucoup avaient été broyés pour la médecine traditionnelle avant que les antiquaires ne s’y intéressent. Les recherches menées dans les années 1920 et 1930 pour retrouver leur origine ont conduit à la découverte, à Anyang, de fondations en terre damée d’un grand complexe palatial de l’âge du bronze.',
            'Ces inscriptions consignent des divinations liées aux derniers rois Shang, à partir de Wu Ding, dont l’avènement est daté de 1250 ou de 1200 av. J.-C. selon les spécialistes. Avec quelques inscriptions de style différent coulées sur des bronzes, elles forment le plus ancien corpus significatif d’écriture chinoise. L’écriture sur os oraculaires est considérée comme l’ancêtre direct de l’écriture chinoise et d’une douzaine d’autres écritures d’Asie orientale ; les inscriptions sur bronzes rituels deviennent abondantes sous la dynastie Zhou.',
            'Il faut rester prudent sur trois points. D’abord, l’écriture chinoise est probablement plus ancienne que ces exemples : les os d’Anyang sont les plus anciens témoignages conservés, pas nécessairement le tout début. Ensuite, des signes gravés trouvés sur des sites néolithiques de Chine n’ont pas été démontrés comme ancêtres de l’écriture des os d’Anyang. Enfin, les décomptes des fragments varient fortement selon les sources (environ 13 000 pour certains, environ 150 000 pour d’autres), ce qui rappelle que ces chiffres sont des estimations.'
          ],
          example: {
            statement: 'Les os oraculaires de la fin des Shang sont datés d’environ 1250–1050 av. J.-C. Quelle durée couvre cette période ?',
            calculation: 'Les deux dates sont avant notre ère : on soustrait directement 1250 − 1050 = 200.',
            answer: 'Environ 200 ans. Les spécialistes constatent d’ailleurs une évolution de l’écriture au cours de cette période.'
          },
          exercise: {
            question: 'À quoi servaient les os oraculaires ?',
            answer: 'À des rituels de divination de la maison royale Shang ; les inscriptions gardent la trace de ces divinations.'
          },
          exercises: [
            {
              question: 'Pourquoi les os oraculaires sont-ils importants pour l’histoire de l’écriture ?',
              answer: 'Ils contiennent les plus anciens exemples connus d’écriture chinoise.'
            },
            {
              question: 'En quelle année a-t-on reconnu que les marques des « os de dragon » étaient une forme d’écriture ?',
              answer: 'En 1899.'
            },
            {
              question: 'Peut-on conclure que l’écriture chinoise est apparue exactement vers 1250 av. J.-C. ?',
              answer: 'Non. Ce sont les plus anciens exemples conservés ; l’écriture est probablement plus ancienne.'
            }
          ],
          sources: [
            { title: 'History.com — 7 Everyday Objects From the Shang Dynasty', url: 'https://www.history.com/news/everyday-objects-shang-dynasty' },
            { title: 'Live Science — Oracle bones: 3,250-year-old engraved bones and tortoise shells from ancient China', url: 'https://livescience.com/archaeology/oracle-bones-3-250-year-old-engraved-bones-and-tortoise-shells-from-ancient-china-were-used-to-foretell-the-future' },
            { title: 'Wikipedia — Oracle bone script', url: 'https://en.wikipedia.org/wiki/Oracle_bone_script' }
          ]
        }
      },
      {
        id: 'alphabet-phenicien-grec-latin',
        title: 'De l’alphabet phénicien aux alphabets grec et latin',
        field: 'Méditerranée orientale · Vers 1700 av. J.-C. – VIIe siècle av. J.-C.',
        summary: 'Comprendre comment un système de signes consonantiques a été adapté par les Grecs, puis transmis aux Étrusques et aux Romains.',
        lesson: {
          sections: [
            'World History Encyclopedia (WHE) rappelle que, dès 2700 av. J.-C., l’écriture égyptienne comptait environ 22 hiéroglyphes notant une consonne initiale, la voyelle éventuelle étant fournie par le locuteur. Un système apparemment « alphabétique », dit proto-sinaïtique, aurait été élaboré vers 1700 av. J.-C. en Égypte centrale pour ou par des travailleurs sémites ; mais un seul de ces écrits a été déchiffré et leur nature reste discutée. Cette écriture a donné l’alphabet proto-cananéen, puis l’alphabet phénicien. Aucun de ces systèmes n’est considéré comme un alphabet au sens strict, car ils ne notent pas les voyelles.',
            'L’alphabet phénicien compte 22 signes consonantiques et s’écrit de droite à gauche ; WHE y voit la première grande écriture phonémique. Selon les sources, il est daté d’environ 1200 av. J.-C. (Deutsche Nationalbibliothek) ou de 1100 av. J.-C. (chronologie de WHE) ; le sarcophage d’Ahiram, roi de Byblos, vers 1000 av. J.-C., porte la plus ancienne inscription phénicienne connue de cette chronologie. Les marchands phéniciens l’ont diffusé en Méditerranée. Comme il note des sons et non des mots, il pouvait servir à écrire de nombreuses langues.',
            'Les Grecs adaptent l’alphabet phénicien à leur langue. Selon WHE, ils réaffectent des lettres qui notaient des consonnes absentes du grec pour représenter les voyelles. Cette innovation est datée vers 800 av. J.-C. par la Deutsche Nationalbibliothek et par l’université Brown, et du VIIIe siècle av. J.-C. par History.com. Beaucoup de spécialistes y voient le premier alphabet « véritable », avec voyelles et consonnes notées explicitement. Le grec s’écrit d’abord de droite à gauche, puis en boustrophédon, où le sens alterne à chaque ligne.',
            'La forme grecque dite de Cumes est transportée en Italie par des colons venus d’Eubée et donne naissance à des alphabets utilisés pour les langues italiques (WHE). Selon la Deutsche Nationalbibliothek, l’alphabet grec passe par les Étrusques jusqu’aux Romains au VIIe siècle av. J.-C. ; les Romains adoptent la lecture de gauche à droite et mettent au point les majuscules latines. Le grec a aussi donné le cyrillique (History.com). Une nuance importante : selon Peter Stein, cité par la Deutsche Nationalbibliothek, il n’existe pas « l’alphabet », mais trois types distincts (syllabaire, écriture consonantique, alphabet véritable), qui ne forment pas une évolution linéaire.'
          ],
          example: {
            statement: 'Selon la chronologie de WHE, la mort d’Ahiram de Byblos se situe vers 1000 av. J.-C. et les plus anciens exemples d’écriture alphabétique grecque vers 800 av. J.-C. Combien d’années séparent ces deux repères ?',
            calculation: 'Les deux dates sont avant notre ère : le nombre le plus grand est le plus ancien, et on soustrait directement : 1000 − 800 = 200.',
            answer: 'Environ 200 ans. Ce sont des repères approximatifs.'
          },
          exercise: {
            question: 'Quelle innovation les Grecs ont-ils apportée à l’alphabet phénicien ?',
            answer: 'Ils ont noté les voyelles, en réaffectant des lettres phéniciennes qui représentaient des consonnes absentes du grec.'
          },
          exercises: [
            {
              question: 'Combien de signes comptait l’alphabet phénicien et que notaient-ils ?',
              answer: '22 signes, qui notaient des consonnes.'
            },
            {
              question: 'Dans quel sens l’alphabet phénicien s’écrivait-il ?',
              answer: 'De droite à gauche.'
            },
            {
              question: 'Pourquoi l’alphabet phénicien pouvait-il servir à écrire plusieurs langues ?',
              answer: 'Parce qu’il note des sons (phonèmes) et non des mots ou des idées, ce qui permet de l’adapter à d’autres langues.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Alphabet', url: 'https://www.worldhistory.org/alphabet/' },
            { title: 'World History Encyclopedia — Alphabet (chronologie)', url: 'https://worldhistory.org/timeline/alphabet' },
            { title: 'History.com — Who Created the First Alphabet?', url: 'https://www.history.com/articles/who-created-the-first-alphabet' },
            { title: 'Deutsche Nationalbibliothek — Alphabet', url: 'https://mediengeschichte.dnb.de/DBSMZBN/Content/EN/SoundsSymbolsScript/01-alphabet-en.html' },
            { title: 'Brown University (Joukowsky Institute) — Greek Alphabet', url: 'https://webhelper.brown.edu/joukowsky/courses/greekpast/4739.html' }
          ]
        }
      },
      {
        id: 'ecriture-maya',
        title: 'L’écriture maya : un système de glyphes déchiffré au XXe siècle',
        field: 'Mésoamérique · Vers 300 av. J.-C. – XVIe siècle apr. J.-C.',
        summary: 'Comprendre les premières traces de l’écriture maya, la méprise de Diego de Landa et l’apport de Knorozov au déchiffrement.',
        lesson: {
          sections: [
            'En 2006, William Saturno, David Stuart et Boris Beltrán ont publié dans la revue Science la découverte, à San Bartolo (Guatemala), de glyphes peints. Les datations au radiocarbone, croisées avec celles des couches du site, indiquent qu’ils ont été peints entre 300 et 200 av. J.-C. : c’est l’un des plus anciens exemples d’écriture maya solidement datés. La salle des peintures murales voisine est datée d’environ 100 av. J.-C. Saturno a toutefois précisé que cette découverte ne résout pas l’origine de l’écriture en Mésoamérique : une écriture plus ancienne a été signalée dans la vallée d’Oaxaca (vers 600 av. J.-C.), datation encore débattue.',
            'L’écriture maya est faite de glyphes, qui combinent des logogrammes (signes notant des mots) et des signes syllabiques (signes notant des syllabes). Selon World History Encyclopedia, les Mayas lisaient leurs glyphes de gauche à droite et de haut en bas. Les glyphes sont souvent regroupés en blocs : la « conflation » combine deux glyphes ou plus en simplifiant certains éléments, pour obtenir un ensemble lisible qui tienne dans l’espace disponible.',
            'Au XVIe siècle, l’évêque du Yucatán Diego de Landa a demandé à un scribe maya d’écrire un « alphabet » : il dictait des lettres espagnoles et le scribe traçait un glyphe. Landa croyait que l’écriture maya était alphabétique, ce qui n’est pas le cas. Cette hypothèse erronée a longtemps égaré les chercheurs. Landa est aussi connu pour avoir fait détruire de nombreux livres mayas.',
            'Le tournant a lieu en 1952. D’après l’exposition de la bibliothèque de l’université de Caroline du Nord, le linguiste soviétique Yuri Knorozov affirme alors que les glyphes ont une composante phonétique et que la liste de Landa recense des syllabes plutôt que des lettres. Cela contredisait l’opinion admise selon laquelle les glyphes représentaient des mots. L’opposition du grand mayaniste J. Eric S. Thompson et la méfiance de la guerre froide envers un chercheur soviétique ont ralenti l’acceptation de ses idées. Elles ont néanmoins été reprises et prolongées par Tatiana Proskouriakoff, Michael Coe, Linda Schele et David Stuart.'
          ],
          example: {
            statement: 'Les glyphes de San Bartolo sont datés d’environ 300–200 av. J.-C. En prenant le milieu de cette fourchette (250 av. J.-C.), combien d’années le séparent de l’article de Knorozov, publié en 1952 ?',
            calculation: 'Une date av. J.-C. et une date apr. J.-C. : on additionne et on retire 1 car il n’y a pas d’année zéro : 250 + 1952 − 1 = 2201.',
            answer: 'Environ 2 200 ans. Les datations de San Bartolo sont des estimations issues d’analyses au radiocarbone.'
          },
          exercise: {
            question: 'Pourquoi l’« alphabet » de Landa a-t-il d’abord induit les chercheurs en erreur ?',
            answer: 'Landa supposait que l’écriture maya était alphabétique ; or ses signes notent surtout des syllabes ou des mots.'
          },
          exercises: [
            {
              question: 'Quel chercheur a affirmé en 1952 que les glyphes mayas avaient une composante phonétique ?',
              answer: 'Yuri Knorozov.'
            },
            {
              question: 'Dans quel sens lit-on un bloc de glyphes mayas, d’après World History Encyclopedia ?',
              answer: 'De gauche à droite et de haut en bas.'
            },
            {
              question: 'Que montre l’exemple du mot maya cutz (« dinde ») ?',
              answer: 'Que les signes notent des syllabes : le signe cu suivi du signe tzu donne cutz.'
            }
          ],
          sources: [
            { title: 'Mesoweb — Early Maya Writing at San Bartolo', url: 'https://www.mesoweb.org/reports/SanBartoloWriting.html' },
            { title: 'Science News — Getting a read on early Maya writing', url: 'https://www.sciencenews.org/?p=407' },
            { title: 'World History Encyclopedia — How to Read a Maya Glyph', url: 'https://www.worldhistory.org/article/789/how-to-read-a-maya-glyph/' },
            { title: 'University of North Carolina — Yuri V. Knorozov (1922–1999)', url: 'https://exhibits.lib.unc.edu/exhibits/show/maya/decipherment/sistema-pisma-drevnikh-maiia' },
            { title: 'Maya Archaeologist — Maya writing system', url: 'https://www.mayaarchaeologist.co.uk/school-resources/maya-world/maya-writing-system/' }
          ]
        }
      },
      {
        id: 'imprimerie-xylographie-gutenberg',
        title: 'De la xylographie à l’imprimerie à caractères mobiles',
        field: 'Asie orientale et Europe · IXe–XVe siècle',
        summary: 'Comprendre les étapes de l’imprimerie, du Sûtra du Diamant de 868 aux caractères mobiles chinois, coréens et européens.',
        lesson: {
          sections: [
            'Le Sûtra du Diamant est un texte bouddhique de Dunhuang, en Chine. Le 11 mai 868, un scribe nommé Wang Jie en publie une édition : comme il y a inscrit la date, cet exemplaire est le plus ancien livre imprimé complet et daté connu. Il a été imprimé par xylographie, avec des planches de bois gravées à l’envers. Scellé dans une grotte près de Dunhuang avant l’an 1000, il a été retrouvé dans la grotte 17 de Mogao vers 1900 par Wang Yuanlu, vendu en 1907 à l’archéologue Aurel Stein et conservé aujourd’hui à la British Library.',
            'Les caractères mobiles remplacent les planches gravées par des signes individuels réutilisables. Ils sont attribués à Bi Sheng, de Yingshan (Hubei), qui a vécu approximativement de 970 à 1051. La plus ancienne mention de son procédé figure dans les Notes du ruisseau des rêves (Dream Pool Essays), écrites en 1086 par le savant Shen Kuo, qui rapporte que ses neveux avaient hérité des caractères de Bi Sheng après sa mort. Certaines synthèses datent cette invention d’environ 1040 et précisent que les caractères étaient d’abord en argile.',
            'Le nombre très élevé de caractères chinois rendait la composition en caractères mobiles difficile : la xylographie est restée très employée en Chine. En Corée, le Jikji, anthologie d’enseignements bouddhiques zen, a été imprimé en 1377 avec des caractères mobiles en métal, soit près de quatre-vingts ans avant la Bible de Gutenberg selon l’article cité en source.',
            'En Europe, Johannes Gutenberg, à Mayence, remplace le bois par le métal pour fabriquer les lettres : c’est la version européenne des caractères mobiles. Son livre le plus célèbre, la Bible dite à 42 lignes, est imprimé vers 1455. Il faut éviter une idée trop simple : l’imprimerie n’est pas née d’un seul coup en Europe au XVe siècle. Le Sûtra du Diamant n’est d’ailleurs pas le plus ancien imprimé connu (un sûtra coréen sur bois, le Mugujeonggwang Dharani, est daté entre 704 et 751), mais le plus ancien imprimé complet qui porte une date.'
          ],
          example: {
            statement: 'Le Sûtra du Diamant est daté de 868 apr. J.-C. et la Bible de Gutenberg a été imprimée vers 1455. Combien d’années séparent ces deux repères ?',
            calculation: 'Les deux dates sont après notre ère : on soustrait directement 1455 − 868 = 587.',
            answer: 'Environ 587 ans, soit plus de cinq siècles. La date de la Bible de Gutenberg est approximative.'
          },
          exercise: {
            question: 'Quelle différence y a-t-il entre la xylographie et les caractères mobiles ?',
            answer: 'La xylographie grave toute une page sur une planche de bois ; les caractères mobiles sont des signes individuels réutilisables que l’on assemble pour composer chaque page.'
          },
          exercises: [
            {
              question: 'Pourquoi le Sûtra du Diamant est-il célèbre ?',
              answer: 'Daté du 11 mai 868, c’est le plus ancien livre imprimé complet et daté connu.'
            },
            {
              question: 'Qui est associé à l’invention des caractères mobiles en Chine, et où en trouve-t-on la plus ancienne mention ?',
              answer: 'Bi Sheng (vers 970–1051), mentionné en 1086 par Shen Kuo dans les Notes du ruisseau des rêves.'
            },
            {
              question: 'Pourquoi la xylographie est-elle restée très utilisée en Chine ?',
              answer: 'Parce que le très grand nombre de caractères chinois rendait la composition en caractères mobiles difficile.'
            }
          ],
          sources: [
            { title: 'Linda Hall Library — The Diamond Sutra', url: 'https://www.lindahall.org/about/news/scientist-of-the-day/the-diamond-sutra/' },
            { title: 'History.com — Printing Press', url: 'https://www.history.com/topics/renaissance/printing-press' },
            { title: 'Rosenbach — Another Installment About Old, Old Books', url: 'https://wpsite.rosenbach.org/?p=1336' },
            { title: 'Book printing before Gutenberg: The Asian roots of printing technology', url: 'https://fabriziomusacchio.com/weekend_stories/told/2024/2024-12-22-chinese_and_korean_bookprinting' },
            { title: 'The very first Printed Book (Diamond Sutra, 868)', url: 'https://knowledgestore2.fbk.eu/pikes-demo/eswc2016/wes2015.d169.naf.html' }
          ]
        }
      }
    ]
  },

// BRANCHE CELTE

{
  id: 'histoire-celte',
  sortYear: -1300,
  title: 'La civilisation Celte',
  note: 'Sept chapitres sur les origines des cultures associées aux Celtes, Hallstatt et La Tène, les langues, la société, les échanges, les arts, les croyances et les transformations liées à Rome. Les dates sont approximatives et les réalités celtiques varient selon les régions. Les Celtes ne formaient pas un État unifié et les cultures archéologiques ne correspondent pas exactement à des peuples définis.',
  chapters: [
    {
      id: 'origines-des-celtes',
      title: 'Les origines des Celtes : des Champs d’urnes à Hallstatt',
      field: 'Europe centrale et occidentale · Fin de l’âge du bronze et âge du fer · À partir d’environ 1300 av. J.-C.',
      summary: 'Comprendre les origines progressives des cultures associées aux Celtes, le rôle des Champs d’urnes et de Hallstatt, et les limites des preuves archéologiques.',
      lesson: {
        sections: [
          'Le mot « Celtes » désigne un ensemble diversifié de peuples et de communautés de l’Europe ancienne, surtout connus pour les langues celtiques et pour certaines ressemblances dans les objets, les pratiques et les formes artistiques. Ils ne formaient pas un royaume unique et toutes les communautés auxquelles les chercheurs associent des objets celtiques ne partageaient pas nécessairement la même identité. Les sources écrites sont souvent extérieures à ces sociétés, notamment grecques et romaines ; l’archéologie est donc essentielle, mais elle ne permet pas toujours de connaître le nom ou la langue des personnes qui ont fabriqué un objet.',
          'Parmi les cultures antérieures souvent mises en relation avec les origines celtiques figure la culture des Champs d’urnes, présente autour du Danube supérieur à partir d’environ 1300 av. J.-C. Son nom vient d’une pratique funéraire répandue : après la crémation, les restes étaient placés dans des urnes et enterrés. Cette pratique constitue un indice archéologique important, mais elle ne prouve pas à elle seule que toutes les communautés concernées parlaient une langue celtique. Les liens entre les Champs d’urnes et les populations celtiques ultérieures doivent donc être présentés comme une reconstruction historique, et non comme une filiation parfaitement démontrée.',
          'La culture de Hallstatt, nommée d’après un site situé en Autriche actuelle, est généralement associée à la première partie de l’âge du fer en Europe centrale. Les chronologies de référence la situent approximativement entre 1200 et 450 av. J.-C., avec un développement particulièrement important entre les 8e et 6e siècles av. J.-C. Les régions concernées comprennent notamment l’Autriche, le sud de l’Allemagne, la Suisse et l’est de la France, avec des variations selon les phases et les classifications archéologiques. Il est plus exact de parler de cultures et de réseaux en évolution que d’une migration unique qui aurait créé partout une civilisation homogène.',
          'Les ressources naturelles ont contribué à la prospérité de certains centres. Le sel, le cuivre et le fer pouvaient être exploités, transformés ou échangés, tandis que les cours d’eau facilitaient le déplacement des personnes et des marchandises. Des objets importés du monde méditerranéen, notamment des productions grecques et étrusques, retrouvés dans des tombes riches montrent que certaines élites participaient à des réseaux commerciaux étendus. Ces échanges transmettaient aussi des techniques, des styles et des idées ; ils ne signifient pas que les communautés locales étaient simplement des copies des sociétés méditerranéennes.'
        ],
        example: {
          statement: 'Un repère situe l’apparition de la culture des Champs d’urnes vers 1300 av. J.-C. et un autre situe la période de La Tène vers 450 av. J.-C. Quel repère est le plus ancien ?',
          calculation: 'Pour des dates avant notre ère, le nombre le plus grand correspond au repère le plus ancien : 1300 est antérieur à 450.',
          answer: 'Le repère d’environ 1300 av. J.-C. est le plus ancien. Ces dates sont des estimations utilisées pour situer des cultures archéologiques, et non les dates de naissance d’un peuple celte unifié.'
        },
        exercise: {
          question: 'Pourquoi la culture des Champs d’urnes ne suffit-elle pas à prouver que toutes les personnes qui la pratiquaient étaient celtes ?',
          answer: 'Parce qu’une pratique funéraire identifiée par l’archéologie ne permet pas, à elle seule, de déterminer la langue ou l’identité de chaque communauté. Le lien avec les Celtes est une hypothèse historique fondée sur plusieurs indices.'
        },
        exercises: [
          {
            question: 'Pourquoi appelle-t-on cette culture les Champs d’urnes ?',
            answer: 'En raison de l’usage fréquent d’urnes pour déposer les restes incinérés des défunts.'
          },
          {
            question: 'Où se trouve le site qui a donné son nom à la culture de Hallstatt ?',
            answer: 'En Autriche actuelle, dans la région du Salzkammergut.'
          },
          {
            question: 'Les Celtes ont-ils formé un État unique ?',
            answer: 'Non. Ils étaient répartis en communautés et groupes politiques distincts, dont les alliances et les relations variaient.'
          }
        ],
        sources: [
          {
            title: 'Encyclopédie de l’Histoire du Monde — Anciens Celtes',
            url: 'https://www.worldhistory.org/trans/fr/1-140/anciens-celtes/'
          },
          {
            title: 'World History Encyclopedia — La Tène Culture',
            url: 'https://www.worldhistory.org/La_Tene_Culture_/'
          },
          {
            title: 'British Museum — La Tène',
            url: 'https://www.britishmuseum.org/collection/term/x111161'
          }
        ]
      }
    },
    {
      id: 'hallstatt-et-la-tene',
      title: 'Hallstatt et La Tène : cultures, territoires et échanges',
      field: 'Europe centrale et occidentale · Âge du fer · Environ 1200 à 50 av. J.-C.',
      summary: 'Distinguer les cultures archéologiques de Hallstatt et de La Tène et comprendre leur diffusion sans les confondre avec une identité celtique uniforme.',
      lesson: {
        sections: [
          'Hallstatt et La Tène sont des noms archéologiques tirés de sites où des objets caractéristiques ont été découverts. Ils servent à classer des assemblages matériels et des évolutions culturelles dans le temps. Hallstatt est généralement associé à une phase ancienne de l’âge du fer en Europe centrale, tandis que La Tène correspond à une phase plus récente, souvent datée d’environ 450 à 50 av. J.-C. Les limites exactes peuvent varier selon les régions et les systèmes de classement utilisés.',
          'La culture de La Tène est reconnue par des formes d’objets et des décors particuliers, notamment des motifs courbes, végétaux, géométriques et entrelacés sur des pièces métalliques. Des objets associés à cette culture ont été retrouvés dans un vaste espace allant de l’Europe occidentale à l’Europe centrale. Cependant, cette distribution ne signifie pas que tous les habitants de ces régions parlaient une langue celtique : les styles artistiques et les techniques pouvaient être adoptés par le commerce, l’imitation, les alliances ou les déplacements de population.',
          'Les contacts avec les sociétés grecques, étrusques puis romaines ont contribué à transformer les communautés de l’âge du fer. Les objets importés pouvaient être des biens prestigieux, utilisés dans les échanges diplomatiques, les festins ou les pratiques funéraires. Les artisans locaux ne se contentaient pas de reproduire les modèles étrangers : ils les adaptaient à leurs propres traditions. Le résultat fut une grande diversité régionale, visible dans les bijoux, les armes, les récipients, les monnaies et les décors.',
          'Les oppida, grands sites souvent fortifiés qui se développent particulièrement aux 2e et 1er siècles av. J.-C., illustrent la complexité croissante de certains territoires. Selon les lieux, ils pouvaient servir de centres d’artisanat, d’échanges, de stockage et de rassemblement. Tous les peuples celtiques ne vivaient cependant pas dans des oppida : les habitats ruraux et les fermes demeuraient essentiels. Il faut donc éviter de présenter ces centres comme des villes identiques ou comme une organisation commune à l’ensemble du monde celte.'
        ],
        example: {
          statement: 'La Tène est généralement datée d’environ 450 à 50 av. J.-C. Combien d’années séparent approximativement ces deux repères ?',
          calculation: '450 - 50 = 400 ans.',
          answer: 'Ces repères couvrent environ 400 ans. Il s’agit d’une durée conventionnelle : les changements culturels ne se sont pas produits partout aux mêmes dates.'
        },
        exercise: {
          question: 'Pourquoi les archéologues évitent-ils d’assimiler automatiquement La Tène à tous les Celtes ?',
          answer: 'Parce que des objets et des styles de La Tène apparaissent aussi dans des régions où l’identité ou la langue celtique n’est pas établie. Une culture matérielle ne correspond pas nécessairement à un peuple unique.'
        },
        exercises: [
          {
            question: 'Quel site a donné son nom à la culture de La Tène ?',
            answer: 'Un site situé au bord du lac de Neuchâtel, en Suisse actuelle.'
          },
          {
            question: 'Quel type de décor est fréquemment associé à l’art de La Tène ?',
            answer: 'Des motifs courbes, végétaux, géométriques et entrelacés.'
          },
          {
            question: 'À quoi pouvaient servir certains oppida ?',
            answer: 'À concentrer des activités artisanales et commerciales, à stocker des ressources et à offrir un lieu défendable.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — La Tène Culture',
            url: 'https://www.worldhistory.org/La_Tene_Culture_/'
          },
          {
            title: 'British Museum — La Tène',
            url: 'https://www.britishmuseum.org/collection/term/x111161'
          },
          {
            title: 'Encyclopédie de l’Histoire du Monde — Anciens Celtes',
            url: 'https://www.worldhistory.org/trans/fr/1-140/anciens-celtes/'
          }
        ]
      }
    },
    {
      id: 'langues-et-societes-celtiques',
      title: 'Langues celtiques et organisation des sociétés',
      field: 'Europe occidentale et centrale · Âge du fer et Antiquité',
      summary: 'Découvrir les langues celtiques, les communautés politiques diverses et les limites des sources écrites disponibles.',
      lesson: {
        sections: [
          'Les langues celtiques appartiennent à la famille indo-européenne. Les spécialistes distinguent habituellement les langues celtiques continentales, comme le gaulois, et les langues celtiques insulaires, parlées dans les îles Britanniques et en Bretagne à des périodes différentes. Le gaulois est connu grâce à des inscriptions, à des noms propres et à des témoignages gréco-romains ; le corpus reste limité par rapport à celui du latin. Les langues celtiques continentales ont progressivement cessé d’être largement parlées, tandis que plusieurs langues celtiques insulaires ont perduré.',
          'Il n’existait pas une société celte identique partout. Les communautés étaient organisées autour de tribus, de chefferies, de royaumes ou d’alliances, selon les régions et les époques. Les relations entre groupes pouvaient prendre la forme d’échanges, de mariages, de rivalités, de dépendance ou de guerre. Les dirigeants s’appuyaient parfois sur des élites guerrières et sur des réseaux de fidélité. Il serait inexact de décrire ces peuples comme une fédération permanente ou comme une société dotée d’un gouvernement commun.',
          'Les vestiges archéologiques indiquent une différenciation sociale dans plusieurs communautés : certaines sépultures contiennent des objets prestigieux, des équipements importés ou des bijoux qui témoignent de la richesse et du statut du défunt. Les agriculteurs et les éleveurs formaient une part importante de nombreuses populations rurales ; les artisans spécialisés et les commerçants contribuaient aux échanges. Les détails de cette organisation varient et les objets funéraires ne permettent pas, à eux seuls, de reconstituer précisément la vie de chaque individu.',
          'Les informations écrites doivent être utilisées avec prudence. Une grande partie des récits antiques sur les Celtes provient d’auteurs grecs et romains qui écrivaient depuis leur propre contexte politique et culturel. Leurs descriptions peuvent être sélectives, stéréotypées ou liées à des conflits. Les confronter aux données archéologiques et épigraphiques permet de réduire le risque de prendre un récit extérieur pour une description valable de toutes les communautés celtiques.'
        ],
        example: {
          statement: 'Un historien dispose d’un texte romain et d’une inscription gauloise. Pourquoi est-il utile de comparer ces deux types de sources ?',
          calculation: 'Aucun calcul numérique n’est nécessaire : il s’agit de confronter des sources de nature, d’origine et de fonction différentes.',
          answer: 'Le texte romain apporte un regard extérieur, tandis que l’inscription fournit une trace directe de l’usage écrit d’une langue locale. Leur comparaison aide à repérer les biais et les limites de chaque témoignage.'
        },
        exercise: {
          question: 'Pourquoi ne peut-on pas appliquer à toutes les sociétés celtiques la description d’un seul auteur antique ?',
          answer: 'Parce que les auteurs observaient des groupes précis à des moments donnés et depuis un point de vue extérieur. Les sociétés celtiques étaient diverses et changeaient selon les régions et les époques.'
        },
        exercises: [
          {
            question: 'À quelle famille linguistique appartiennent les langues celtiques ?',
            answer: 'À la famille des langues indo-européennes.'
          },
          {
            question: 'Quelle langue celtique continentale est particulièrement bien documentée ?',
            answer: 'Le gaulois.'
          },
          {
            question: 'Les sociétés celtiques avaient-elles toutes le même système politique ?',
            answer: 'Non. Les formes d’organisation politique variaient selon les communautés et les périodes.'
          }
        ],
        sources: [
          {
            title: 'Encyclopédie de l’Histoire du Monde — Anciens Celtes',
            url: 'https://www.worldhistory.org/trans/fr/1-140/anciens-celtes/'
          },
          {
            title: 'World History Encyclopedia — The Celts of Ancient Europe',
            url: 'https://www.worldhistory.org/collection/117/the-celts-of-ancient-europe/'
          },
          {
            title: 'British Museum — La Tène',
            url: 'https://www.britishmuseum.org/collection/term/x111161'
          }
        ]
      }
    },
    {
      id: 'economie-et-commerce-celtes',
      title: 'Agriculture, artisanat et commerce dans le monde celte',
      field: 'Europe centrale et occidentale · Âge du fer · Surtout du 8e au 1er siècle av. J.-C.',
      summary: 'Comprendre la place de l’agriculture, des ressources naturelles, des artisans et des réseaux commerciaux dans les sociétés celtiques.',
      lesson: {
        sections: [
          'L’agriculture et l’élevage formaient la base matérielle de nombreuses communautés de l’âge du fer. Les récoltes, les animaux domestiques et les produits fabriqués localement soutenaient les familles et permettaient de dégager des surplus dans certaines régions. Les pratiques dépendaient des sols, du climat, des ressources et des traditions locales ; il ne faut donc pas imaginer un système agricole identique dans toute l’Europe celtique.',
          'Les ressources minérales jouaient un rôle important dans certaines économies. Le sel était notamment exploité dans la région de Hallstatt, tandis que le fer et le cuivre servaient à produire des outils, des équipements et des objets de prestige. Les artisans travaillaient aussi le bronze, l’or, le verre et d’autres matériaux. La qualité des objets métalliques témoigne de compétences techniques spécialisées, mais les techniques et l’accès aux matières premières variaient d’un centre à l’autre.',
          'Les échanges reliaient des communautés celtiques entre elles et avec des partenaires méditerranéens. Les données archéologiques montrent des contacts avec les colonies grecques du sud de la Gaule et avec les sociétés étrusques d’Italie. Le sel, les métaux, les animaux, les tissus et d’autres produits circulaient selon les réseaux et les périodes. Des récipients, des céramiques et des objets de luxe importés pouvaient être échangés contre des ressources locales. Les voies fluviales facilitaient une partie du transport, sans être les seules routes utilisées.',
          'Le commerce ne concernait pas seulement les biens : il favorisait aussi la circulation de techniques, de styles artistiques et de pratiques monétaires. Certaines communautés celtiques ont frappé leurs propres monnaies, notamment dans des contextes où les échanges et les relations politiques le rendaient utile. Les monnaies ne doivent cependant pas être interprétées comme la preuve d’une économie uniforme ou d’un usage généralisé dans toutes les communautés. La richesse issue des échanges pouvait renforcer certaines élites et accentuer la compétition pour les ressources et les itinéraires commerciaux.'
        ],
        example: {
          statement: 'Des objets grecs sont retrouvés dans une sépulture de l’âge du fer en Europe centrale. Que permet raisonnablement d’en déduire ?',
          calculation: 'Il s’agit d’une interprétation archéologique, sans calcul numérique : on examine le contexte de découverte, la datation et la provenance des objets.',
          answer: 'Ces objets constituent un indice de contacts ou d’échanges à longue distance. À eux seuls, ils ne prouvent ni la présence d’une colonie grecque ni l’identité ethnique de la personne enterrée.'
        },
        exercise: {
          question: 'Comment le commerce a-t-il pu transformer les sociétés celtiques ?',
          answer: 'Il a facilité l’accès aux matières premières et aux produits importés, favorisé la circulation des techniques et des styles, et contribué dans certains lieux à renforcer la richesse et le pouvoir de certaines élites.'
        },
        exercises: [
          {
            question: 'Cite une ressource importante exploitée dans la région de Hallstatt.',
            answer: 'Le sel, notamment, ainsi que des ressources métalliques comme le fer et le cuivre.'
          },
          {
            question: 'Quels partenaires méditerranéens sont attestés dans les échanges avec les communautés de l’âge du fer ?',
            answer: 'Notamment les Grecs et les Étrusques.'
          },
          {
            question: 'Les échanges commerciaux transportaient-ils uniquement des marchandises ?',
            answer: 'Non. Ils favorisaient aussi la circulation de techniques, de motifs artistiques et de pratiques comme la frappe monétaire.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Trade in Ancient Celtic Europe',
            url: 'https://www.worldhistory.org/article/1719/trade-in-ancient-celtic-europe/'
          },
          {
            title: 'Encyclopédie de l’Histoire du Monde — Anciens Celtes',
            url: 'https://www.worldhistory.org/trans/fr/1-140/anciens-celtes/'
          },
          {
            title: 'British Museum — La Tène',
            url: 'https://www.britishmuseum.org/collection/term/x111161'
          }
        ]
      }
    },
    {
      id: 'artisanat-et-art-celte',
      title: 'L’art celtique : métal, parures et motifs décoratifs',
      field: 'Europe occidentale et centrale · Âge du fer · Hallstatt et La Tène',
      summary: 'Étudier les savoir-faire artisanaux et les styles décoratifs sans réduire l’art celtique à un ensemble de motifs identiques.',
      lesson: {
        sections: [
          'L’expression « art celtique » regroupe des productions variées qui se sont développées dans plusieurs régions et à différentes périodes. Les artisans travaillaient notamment le fer, le bronze, l’or, la pierre, le bois et la céramique. Les objets pouvaient être utilitaires, cérémoniels, funéraires ou liés à l’affichage du statut. Le contexte archéologique est essentiel pour comprendre leur fonction : un objet déposé dans une tombe ne remplissait pas nécessairement le même rôle qu’un objet utilisé au quotidien.',
          'Les objets métalliques témoignent de techniques spécialisées : moulage, gravure, martelage, incrustation et autres procédés de décoration. Les torques, les fibules, les récipients et certains équipements sont parmi les objets souvent associés aux cultures de l’âge du fer. Les matériaux importés, comme le verre ou l’ambre dans certains contextes, montrent également l’existence de réseaux d’échange. Les techniques et les formes variaient selon les ateliers, les ressources et les influences régionales.',
          'L’art de La Tène est particulièrement connu pour ses lignes courbes, ses formes végétales stylisées, ses compositions géométriques et ses motifs entrelacés. Les représentations animales et humaines apparaissent aussi sur divers objets. Les artisans celtiques ont entretenu des contacts avec des traditions artistiques grecques, étrusques, scythes et romaines, entre autres. Ces influences ont été réinterprétées localement : les objets ne sont donc pas de simples copies de modèles étrangers.',
          'Les objets décorés pouvaient avoir plusieurs fonctions simultanées. Une parure pouvait indiquer une position sociale, servir de cadeau, participer à une cérémonie ou être déposée dans une tombe. Certains objets étaient offerts dans des lieux considérés comme sacrés. Il faut néanmoins éviter d’attribuer automatiquement une signification religieuse à chaque motif : l’interprétation dépend des comparaisons archéologiques, du lieu de découverte et des informations disponibles.'
        ],
        example: {
          statement: 'Une fibule décorée est découverte dans une tombe avec d’autres objets. Quelles informations faut-il étudier avant de lui attribuer une fonction précise ?',
          calculation: 'Aucun calcul n’est requis. Il faut examiner la datation, la position de l’objet, son état, les autres vestiges et les comparaisons avec des découvertes similaires.',
          answer: 'Ces indices permettent de proposer une interprétation prudente, par exemple un usage vestimentaire ou une fonction de prestige. La présence dans une tombe ne suffit pas à déterminer avec certitude tous les usages de l’objet.'
        },
        exercise: {
          question: 'Pourquoi faut-il étudier le contexte de découverte d’un objet d’art celtique ?',
          answer: 'Parce que sa matière, sa datation, son emplacement et les autres vestiges aident à distinguer les fonctions possibles : usage quotidien, parure, échange, cérémonie ou dépôt funéraire.'
        },
        exercises: [
          {
            question: 'Cite 2 matériaux utilisés par les artisans de l’âge du fer associés aux Celtes.',
            answer: 'Par exemple le bronze et l’or ; le fer, la pierre, le bois et la céramique étaient également utilisés.'
          },
          {
            question: 'Quels motifs sont fréquents dans l’art de La Tène ?',
            answer: 'Des motifs courbes, végétaux stylisés, géométriques et entrelacés.'
          },
          {
            question: 'Un objet importé prouve-t-il que la communauté qui le possédait était étrangère ?',
            answer: 'Non. Il peut témoigner d’un échange, d’un cadeau, d’un déplacement ou d’une réutilisation.'
          }
        ],
        sources: [
          {
            title: 'Encyclopédie de l’Histoire du Monde — Anciens Celtes',
            url: 'https://www.worldhistory.org/trans/fr/1-140/anciens-celtes/'
          },
          {
            title: 'World History Encyclopedia — La Tène Culture',
            url: 'https://www.worldhistory.org/La_Tene_Culture_/'
          },
          {
            title: 'British Museum — La Tène',
            url: 'https://www.britishmuseum.org/collection/term/x111161'
          }
        ]
      }
    },
    {
      id: 'religion-et-druides',
      title: 'Croyances, lieux sacrés et druides',
      field: 'Europe celtique · Âge du fer et période romaine · Chronologies variables selon les régions',
      summary: 'Présenter les croyances et les pratiques religieuses connues par l’archéologie et les auteurs antiques, en signalant les incertitudes documentaires.',
      lesson: {
        sections: [
          'Les communautés celtiques de l’Antiquité pratiquaient des formes de polythéisme, mais leurs croyances n’étaient pas uniformes. Les noms et les fonctions des divinités pouvaient varier selon les régions et les périodes. Notre connaissance repose sur des inscriptions, des objets, des sanctuaires et des textes gréco-romains, complétés avec prudence par des traditions littéraires plus tardives. Il ne subsiste pas de corpus complet de textes sacrés celtiques antiques permettant de reconstituer une doctrine commune à tous les groupes.',
          'Des sources, des rivières, des confluents, des bosquets et d’autres espaces naturels semblent avoir eu une importance religieuse dans certaines communautés. Des objets précieux et des armes ont été déposés dans des eaux ou dans des lieux particuliers, ce qui peut correspondre à des offrandes rituelles. L’interprétation dépend toutefois du contexte : tous les dépôts ne peuvent pas être expliqués de la même manière, et les pratiques ont changé avec le temps et les contacts culturels.',
          'Les druides sont décrits par les auteurs antiques comme des spécialistes religieux et des dépositaires de savoirs. Les sources leur attribuent des fonctions rituelles, juridiques ou éducatives dans certaines sociétés. Mais ces descriptions sont limitées et souvent extérieures ; elles ne permettent pas de supposer que les druides avaient partout les mêmes responsabilités. La transmission orale est généralement considérée comme importante, mais les détails de leur formation et de leur organisation restent difficiles à établir précisément.',
          'À partir des contacts avec Rome, les pratiques religieuses ont pu se transformer et certains dieux locaux ont été identifiés ou associés à des divinités romaines. Dans les territoires intégrés à l’Empire, des sanctuaires ont évolué et des inscriptions ont conservé des noms divins locaux. L’expansion du christianisme a ensuite profondément transformé les pratiques religieuses en Europe occidentale. Les traditions ne disparaissent pas partout au même moment et les continuités doivent être établies au cas par cas plutôt que supposées automatiquement.'
        ],
        example: {
          statement: 'Des objets métalliques sont retrouvés dans une source. Quelle conclusion est la plus prudente ?',
          calculation: 'Aucun calcul numérique n’est nécessaire. Il faut comparer le contexte du dépôt avec d’autres sites et examiner la datation des objets.',
          answer: 'Le dépôt peut avoir une fonction rituelle, mais cette interprétation doit être étayée par le contexte archéologique et ne peut pas être généralisée à tous les dépôts en milieu aquatique.'
        },
        exercise: {
          question: 'Pourquoi les historiens restent-ils prudents lorsqu’ils décrivent la religion des anciens Celtes ?',
          answer: 'Parce que les sources écrites directes sont rares et que beaucoup de récits viennent d’auteurs extérieurs. L’archéologie fournit des indices, mais le sens exact de nombreuses pratiques demeure incertain.'
        },
        exercises: [
          {
            question: 'Quel type de religion pratiquaient de nombreuses communautés celtiques de l’Antiquité ?',
            answer: 'Des formes de polythéisme, avec des variations régionales et chronologiques.'
          },
          {
            question: 'Quelles sources permettent d’étudier les pratiques religieuses celtiques ?',
            answer: 'Les vestiges archéologiques, les inscriptions, les sanctuaires et les textes antiques, en tenant compte de leurs limites.'
          },
          {
            question: 'Peut-on supposer que tous les druides avaient exactement les mêmes fonctions ?',
            answer: 'Non. Les informations sont limitées et les rôles ont pu varier selon les lieux et les époques.'
          }
        ],
        sources: [
          {
            title: 'Encyclopédie de l’Histoire du Monde — Ancienne religion celtique',
            url: 'https://www.worldhistory.org/trans/fr/1-19451/ancienne-religion-celtique/'
          },
          {
            title: 'Encyclopédie de l’Histoire du Monde — Sites sacrés et rituels dans l’ancienne religion celte',
            url: 'https://www.worldhistory.org/trans/fr/2-1710/sites-sacres-et-rituels-dans-lancienne-religion-ce/'
          },
          {
            title: 'World History Encyclopedia — The Celts of Ancient Europe',
            url: 'https://www.worldhistory.org/collection/117/the-celts-of-ancient-europe/'
          }
        ]
      }
    },
    {
      id: 'conflits-rome-et-heritages',
      title: 'Conflits, conquêtes romaines et héritages celtiques',
      field: 'Europe occidentale et centrale · Du 4e siècle av. J.-C. à l’Antiquité tardive et au Moyen Âge',
      summary: 'Comprendre les migrations, les conflits avec Rome, la conquête de la Gaule et la persistance de langues et de traditions celtiques dans certaines régions.',
      lesson: {
        sections: [
          'À partir du 4e siècle av. J.-C., des groupes celtiques se déplacent vers différentes régions d’Europe, dans des mouvements qui ne constituent pas une migration unique et coordonnée. Les causes pouvaient comprendre la recherche de terres, de ressources, de nouvelles possibilités commerciales ou des conflits régionaux. Certains groupes s’installèrent dans le nord de l’Italie et dans les Balkans ; d’autres atteignirent l’Anatolie, où des populations connues sous le nom de Galates sont attestées. Ces déplacements s’inscrivent dans une histoire complexe de contacts, d’alliances et d’affrontements.',
          'Les relations entre les peuples celtiques et Rome alternèrent entre guerre, diplomatie, commerce et service militaire. Des récits antiques rapportent notamment le sac de Rome par des Gaulois au début du 4e siècle av. J.-C., traditionnellement daté de 390 av. J.-C., même si les détails dépendent des sources anciennes. Des groupes celtiques servirent aussi comme mercenaires dans différentes armées. Il faut éviter de réduire ces relations à une opposition permanente entre 2 blocs homogènes : les alliances et les intérêts politiques variaient.',
          'Au 2e et au 1er siècle av. J.-C., Rome étendit son contrôle sur plusieurs territoires de Gaule. Jules César mena les campagnes qui aboutirent à la conquête romaine de la majeure partie de la Gaule indépendante entre 58 et 50 av. J.-C. La résistance menée par Vercingétorix culmina avec le siège d’Alésia en 52 av. J.-C. Cette conquête transforma les structures politiques, l’armée, les échanges et les villes. Les changements furent progressifs et variables ; les populations locales ne perdirent pas instantanément toutes leurs pratiques ou leurs langues.',
          'L’intégration à l’Empire romain entraîna dans de nombreuses régions continentales une diffusion du latin, des institutions romaines et de nouveaux modes de vie urbains. Des traditions locales persistèrent ou furent transformées, notamment dans les pratiques religieuses et l’art. En Irlande et dans certaines parties de la Grande-Bretagne, des langues celtiques ont perduré et se sont développées au fil des siècles. Le breton, le gallois, le cornique, l’irlandais, le gaélique écossais et le mannois appartiennent à des histoires linguistiques distinctes ; ils ne doivent pas être présentés comme des langues inchangées depuis l’âge du fer.'
        ],
        example: {
          statement: 'La conquête romaine de la Gaule indépendante est généralement située entre 58 et 50 av. J.-C. Quel est l’écart entre ces 2 repères ?',
          calculation: '58 - 50 = 8 ans.',
          answer: 'Les campagnes principales s’étendent sur environ 8 ans selon ces repères conventionnels. La romanisation et les transformations sociales se poursuivirent bien après les opérations militaires.'
        },
        exercise: {
          question: 'Pourquoi la conquête romaine ne signifie-t-elle pas la disparition immédiate de toutes les traditions celtiques ?',
          answer: 'Parce que les changements linguistiques, religieux et sociaux se déroulent sur des durées différentes. Certaines pratiques furent transformées ou intégrées, tandis que des langues celtiques continuèrent à être parlées dans plusieurs régions.'
        },
        exercises: [
          {
            question: 'Quel chef gaulois est associé à la résistance contre César en 52 av. J.-C. ?',
            answer: 'Vercingétorix.'
          },
          {
            question: 'Les relations entre Rome et les peuples celtiques se limitaient-elles à la guerre ?',
            answer: 'Non. Elles comprenaient aussi le commerce, la diplomatie, les alliances et le service militaire.'
          },
          {
            question: 'Donne 2 langues celtiques encore parlées aujourd’hui.',
            answer: 'Par exemple le gallois et l’irlandais ; le breton, le gaélique écossais et le mannois en sont d’autres.'
          }
        ],
        sources: [
          {
            title: 'Encyclopédie de l’Histoire du Monde — Anciens Celtes',
            url: 'https://www.worldhistory.org/trans/fr/1-140/anciens-celtes/'
          },
          {
            title: 'World History Encyclopedia — The Celts of Ancient Europe',
            url: 'https://www.worldhistory.org/collection/117/the-celts-of-ancient-europe/'
          },
          {
            title: 'World History Encyclopedia — La Tène Culture',
            url: 'https://www.worldhistory.org/La_Tene_Culture_/'
          }
        ]
      }
    }
  ]
},

// BRANCHE HISTOIRE NÉOLITHIQUE

  {
    id: 'histoire-neolithique',
    sortYear: -10000,
    title: 'Le Néolithique',
    note: 'Neuf chapitres sur la définition du Néolithique, la transition vers l’agriculture au Proche-Orient, la domestication, les premiers monuments et villages, les techniques, la diffusion en Europe, les mégalithes, puis les sociétés, la santé et la fin de la période. Les dates sont approximatives, varient selon les régions et selon les sources.',
    chapters: [
      {
        id: 'definition-neolithique',
        title: 'Définir le Néolithique : un terme, plusieurs chronologies',
        field: 'Néolithique · Définition et chronologie · vers 10 000 – 2 000 av. J.-C. selon les régions',
        summary: 'Comprendre ce que désigne le terme Néolithique, pourquoi il n’a pas de date de début unique et pourquoi l’idée de « révolution » est aujourd’hui nuancée.',
        lesson: {
          sections: [
            'Le Néolithique, ou « nouvel âge de pierre », est le dernier stade de l’âge de la pierre dans une classification forgée par des chercheurs à la fin du XIXe siècle, qui distingue le Paléolithique, le Mésolithique et le Néolithique. Le terme est surtout associé à l’agriculture, c’est-à-dire à la culture des céréales et à la domestication des animaux, mais aussi à l’usage d’outils en pierre polie et, dans plusieurs régions, à une architecture mégalithique.',
            'Il n’existe pas de date de début unique. D’après World History Encyclopedia, l’agriculture se développe vers 9 000 av. J.-C. au Proche-Orient, vers 7 000 av. J.-C. dans le sud-est de l’Europe, puis plus tard ailleurs. À l’intérieur même de l’Europe, elle apparaît vers 7 000 av. J.-C. au sud-est, vers 5 500 av. J.-C. au centre et vers 4 000 av. J.-C. au nord. En Asie de l’Est, le Néolithique s’étend de 6 000 à 2 000 av. J.-C. Britannica retient un repère général d’environ 10 000 av. J.-C., qui coïncide avec le recul des glaciers après les glaciations du Pléistocène et le début de l’Holocène, et indique que les premières traces de culture et de domestication en Asie du Sud-Ouest datent d’environ 9 500 av. J.-C., ce qui suggère que ces pratiques ont pu commencer plus tôt. Ces chiffres diffèrent selon les critères choisis : ce sont des ordres de grandeur, pas des dates exactes.',
            'Aucun critère unique ne suffit à définir le Néolithique. La poterie en est un bon exemple : au Japon, elle apparaît avant l’agriculture, alors qu’au Proche-Orient l’agriculture précède la production de poterie. Les archéologues s’appuient donc sur un ensemble d’indices (plantes et animaux domestiqués, villages permanents, outils en pierre polie, céramique) dont l’ordre d’apparition n’est pas le même partout.',
            'L’expression « révolution néolithique » a été popularisée par l’archéologue australien Gordon Childe pour souligner l’impact de l’agriculture. Elle est aujourd’hui nuancée : l’adoption de l’agriculture apparaît plutôt comme le résultat de petits changements graduels. Avant l’agriculture, les groupes pouvaient déjà mener une vie semi-nomade avec un réseau de campements, puis exploiter des plantes sauvages à partir d’un campement de base. Chasse-cueillette et agriculture ne sont pas totalement incompatibles : un même groupe pouvait pratiquer l’une pendant une partie de l’année et l’autre le reste du temps. Là où l’agriculture s’est imposée, les économies de chasse ne subsistent aujourd’hui que dans des zones marginales où l’on ne peut pas cultiver, comme les régions arctiques gelées, les forêts denses ou les déserts arides.'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, l’agriculture se développe vers 9 000 av. J.-C. au Proche-Orient et vers 5 500 av. J.-C. en Europe centrale. Quel décalage sépare ces deux repères ?',
            calculation: 'Pour des dates avant J.-C., on soustrait la plus récente de la plus ancienne : 9 000 − 5 500 = 3 500.',
            answer: 'Environ 3 500 ans séparent ces deux repères approximatifs : le Néolithique n’a pas de date de début unique.'
          },
          exercise: {
            question: 'Pourquoi la poterie ne suffit-elle pas à définir le Néolithique ?',
            answer: 'Parce que son apparition n’est pas liée partout à l’agriculture : au Japon, elle précède l’agriculture, alors qu’au Proche-Orient l’agriculture précède la poterie.'
          },
          exercises: [
            {
              question: 'Qui a popularisé l’expression « révolution néolithique » ?',
              answer: 'L’archéologue australien Gordon Childe.'
            },
            {
              question: 'Pourquoi préfère-t-on aujourd’hui parler d’un processus graduel plutôt que d’une révolution ?',
              answer: 'Parce que les données archéologiques montrent souvent une période de vie semi-nomade avant l’agriculture, puis de petits changements successifs ; chasse-cueillette et agriculture peuvent aussi coexister.'
            },
            {
              question: 'Quel repère général Britannica donne-t-il pour le début du Néolithique ?',
              answer: 'Environ 10 000 av. J.-C., en rappelant que ce point de départ est débattu et varie selon les régions du monde.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'Britannica — When did the Neolithic Period begin?', url: 'https://britannica.com/question/When-did-the-Neolithic-Period-begin' }
          ]
        }
      },
      {
        id: 'neolithisation-proche-orient',
        title: 'Le Proche-Orient : de la chasse-cueillette à l’agriculture',
        field: 'Néolithique · Proche-Orient · du Xe au VIIe millénaire av. J.-C.',
        summary: 'Suivre la transition progressive de la chasse-cueillette à l’agriculture au Proche-Orient, de la période natoufienne au Néolithique précéramique.',
        lesson: {
          sections: [
            'Le Proche-Orient est la région où les premiers indices de culture et d’élevage sont les mieux documentés. Les recherches situent le début du processus au Xe millénaire av. J.-C., et World History Encyclopedia place la fin du dernier épisode glaciaire vers 11 700 av. J.-C. Dès le Natoufien, des chasseurs-cueilleurs du Levant fréquentent des sites comme Jéricho (vers 10 000 av. J.-C. selon WHE) : certains éléments du mode de vie néolithique apparaissent donc avant l’agriculture elle-même.',
            'On distingue un Néolithique précéramique, du Xe millénaire à environ 7 500 – 7 000 av. J.-C., caractérisé par l’absence de poterie mais par la présence de l’agriculture, de l’élevage et d’une sédentarisation largement répandue. Il se divise en Néolithique précéramique A (PPNA) puis B (PPNB) : à Göbekli Tepe, l’UNESCO rattache les premiers niveaux au PPNA (Xe millénaire) et les suivants au PPNB (IXe millénaire). Vient ensuite le Néolithique avec céramique.',
            'Le site de Tell Abu Hureyra, dans le nord de la Syrie, montre que la transition fut lente : elle a pris plusieurs siècles. Les premiers habitants chassaient des gazelles, des ânes sauvages et des bovins sauvages ; la consommation de gazelle diminue ensuite tandis que celle du mouton augmente (sauvage au début, domestiqué à la fin), jusqu’à ce que l’élevage ovin devienne la principale source de viande. L’usure marquée des dents des adultes reflète la place des céréales moulues dans l’alimentation. Après l’introduction de la poterie, l’usure diminue mais les dents abîmées deviennent plus fréquentes, ce qui suggère que les aliments cuits à partir de farine moulue à la meule ont été largement remplacés par des plats bouillis, comme les bouillies, préparés dans des récipients.',
            'Vivre en groupe permanent oblige à organiser le stockage. Au début du Néolithique, les maisons n’avaient pas d’installations de stockage individuelles : le stockage, et les activités de préparation des aliments destinés à être conservés, étaient gérés à l’échelle du village. À Jarf el Ahmar, dans le nord de la Syrie, une grande structure souterraine servait de lieu de stockage communautaire. Située au centre, parmi les habitations, elle porte aussi des traces de rituels, ce qui suggère que la gestion des réserves et la vie rituelle étaient liées.'
          ],
          example: {
            statement: 'World History Encyclopedia évoque des innovations dans les pointes de flèche au Proche-Orient entre 9 600 et 6 900 av. J.-C. Quelle durée cette période représente-t-elle ?',
            calculation: 'On soustrait la date la plus récente de la plus ancienne : 9 600 − 6 900 = 2 700.',
            answer: 'Cette période couvre environ 2 700 ans, une durée très longue qui est incompatible avec l’idée d’un changement brutal.'
          },
          exercise: {
            question: 'Que montre le site de Tell Abu Hureyra sur la transition vers l’agriculture ?',
            answer: 'Qu’elle fut graduelle et prit plusieurs siècles : la chasse à la gazelle devient secondaire tandis que le mouton, d’abord sauvage puis domestiqué, devient la principale source de viande.'
          },
          exercises: [
            {
              question: 'Que désignent les sigles PPNA et PPNB ?',
              answer: 'Le Néolithique précéramique A et le Néolithique précéramique B, deux phases du Néolithique du Proche-Orient avant la généralisation de la poterie.'
            },
            {
              question: 'À quoi servait la grande structure souterraine de Jarf el Ahmar ?',
              answer: 'C’était un lieu de stockage communautaire, situé au centre des habitations, où des rituels ont aussi été pratiqués.'
            },
            {
              question: 'Que suggère l’évolution de l’usure dentaire à Abu Hureyra après l’apparition de la poterie ?',
              answer: 'L’usure diminue mais les dents abîmées deviennent plus fréquentes : les aliments à base de farine moulue ont été largement remplacés par des plats bouillis, comme les bouillies.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'World History Encyclopedia — Early Jericho', url: 'https://www.worldhistory.org/article/951/early-jericho/' },
            { title: 'UNESCO — Göbekli Tepe', url: 'https://whc.unesco.org/en/list/1572' },
            { title: 'Wikipedia — Neolithic in the Near East', url: 'https://en.wikipedia.org/wiki/Neolithic_in_the_Near_East' }
          ]
        }
      },
      {
        id: 'domestication-centres-independants',
        title: 'Domestication des plantes et des animaux : des centres indépendants',
        field: 'Néolithique · Agriculture et élevage · plusieurs régions du monde',
        summary: 'Comprendre que l’agriculture est apparue indépendamment dans plusieurs régions, à partir d’espèces locales différentes.',
        lesson: {
          sections: [
            'L’agriculture n’a pas une origine unique. Selon World History Encyclopedia, elle s’est développée de façon indépendante dans plusieurs régions : la vallée de l’Indus, deux centres en Asie de l’Est (la vallée du Yangzi Jiang et le cours du fleuve Jaune), le plateau andin et le Mexique, le Proche et le Moyen-Orient, la côte est des futurs États-Unis et l’Afrique subsaharienne. Dans chacune, elle s’est construite autour de plantes et d’animaux locaux.',
            'Au Proche-Orient, les plantes dont on a retrouvé des restes comprennent des céréales comme l’orge, plusieurs espèces d’amidonnier et le blé, des légumineuses comme les pois et les lentilles, ainsi que des figues, des dattes et peut-être des caroubes. Pour les animaux, des restes de porcs, de chèvres, de moutons et de bovins ont été découverts. La domestication des ovins, des caprins, des porcs et peut-être des bovins a pu être la première étape vers la vie sédentaire, suivie de celle de quelques céréales et légumineuses. Les datations exactes varient selon les études ; Britannica indique que les premières preuves de culture et de domestication en Asie du Sud-Ouest remontent à environ 9 500 av. J.-C.',
            'En Chine, deux grands centres sont distingués : au sud, le long du Yangzi Jiang, où l’on cultivait le riz, et au nord, le long du fleuve Jaune, où se développent la culture du millet et l’élevage de chiens, de porcs et de volailles. Pour l’Asie de l’Est, World History Encyclopedia situe le Néolithique entre 6 000 et 2 000 av. J.-C.',
            'Dans les Amériques, la vallée d’Oaxaca, dans le sud du Mexique, est traditionnellement considérée comme le lieu où le maïs a été domestiqué à partir de son ancêtre sauvage, la téosinte ; les données archéologiques et moléculaires suggèrent une domestication il y a environ 9 000 ans. La pomme de terre aurait été domestiquée à partir de Solanum brevicaule dans le sud du Pérou il y a environ 7 000 ans. Ces estimations sont approximatives et peuvent être révisées par de nouvelles recherches.'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, le maïs aurait été domestiqué il y a environ 9 000 ans et la pomme de terre il y a environ 7 000 ans. Quel écart sépare ces deux repères ?',
            calculation: 'On soustrait : 9 000 − 7 000 = 2 000.',
            answer: 'Environ 2 000 ans séparent ces deux estimations, qui restent approximatives.'
          },
          exercise: {
            question: 'Pourquoi dit-on que l’agriculture a été inventée de façon indépendante dans plusieurs régions ?',
            answer: 'Parce que, dans chaque région, elle s’est développée à partir d’espèces locales différentes (orge et blé au Proche-Orient, riz et millet en Chine, maïs au Mexique, pomme de terre dans les Andes), sans dériver d’un centre unique.'
          },
          exercises: [
            {
              question: 'Quelles plantes sont associées au sud et au nord de la Chine néolithique ?',
              answer: 'Le riz au sud, le long du Yangzi Jiang, et le millet au nord, le long du fleuve Jaune.'
            },
            {
              question: 'Quelle plante sauvage est l’ancêtre du maïs ?',
              answer: 'La téosinte ; la vallée d’Oaxaca, au Mexique, est traditionnellement considérée comme le lieu de cette domestication.'
            },
            {
              question: 'Quels animaux dont les restes ont été retrouvés sont associés à l’élevage au Proche-Orient ?',
              answer: 'Les porcs, les chèvres, les moutons et les bovins.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — First Agricultural Revolution', url: 'https://www.worldhistory.org/First_Agricultural_Revolution/' },
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'Britannica — When did the Neolithic Period begin?', url: 'https://britannica.com/question/When-did-the-Neolithic-Period-begin' }
          ]
        }
      },
      {
        id: 'jericho-gobekli-tepe',
        title: 'Jéricho et Göbekli Tepe : premières architectures monumentales',
        field: 'Néolithique · Levant et Anatolie · Xe – VIIIe millénaires av. J.-C.',
        summary: 'Étudier deux sites du Néolithique précéramique : un établissement fortifié et des enceintes de piliers dressés par des chasseurs-cueilleurs.',
        lesson: {
          sections: [
            'Tell es-Sultan, à environ 2 km au nord de la ville actuelle de Jéricho, est l’un des plus anciens habitats permanents connus. Des chasseurs-cueilleurs natoufiens y campaient vers 10 000 av. J.-C. ; selon l’UNESCO, aux IXe et VIIIe millénaires av. J.-C., le site néolithique était déjà un établissement permanent important, doté d’un mur accompagné d’un fossé et d’une tour. Le site, qui comprend la source voisine de ’Ain es-Sultan, est inscrit au patrimoine mondial sous le nom d’Ancient Jericho/Tell es-Sultan.',
            'Vers 8 000 av. J.-C., Jéricho était entouré d’un mur de pierre d’environ 3,6 m de haut et 1,8 m de large. À l’intérieur se dressait une tour de pierre d’environ 8,5 m de haut et 9 m de large à la base, dotée d’un escalier intérieur de 22 marches. La fonction de ces ouvrages est discutée : protection contre les crues, défense, usage cérémoniel de la tour. World History Encyclopedia relève par ailleurs que, entre 9 600 et 6 900 av. J.-C., des squelettes portent des pointes de flèche fichées dans les os et que des sites comme Jéricho sont entourés d’un mur et d’un fossé : ces indices témoignent de conflits entre communautés, sans doute pas très éloignés d’une guerre organisée.',
            'Göbekli Tepe, dans les monts Germuş du sud-est de l’Anatolie, abrite des structures mégalithiques monumentales, rondes-ovales et rectangulaires, érigées entre 9 600 et 8 200 av. J.-C. par des groupes de chasseurs-cueilleurs du Néolithique précéramique. Les piliers en forme de T sont gravés d’animaux sauvages. Selon l’UNESCO, ces monuments ont probablement servi à des rituels, sans doute de nature funéraire, et renseignent sur les croyances de populations de Haute Mésopotamie d’il y a environ 11 500 ans. Le site est inscrit au patrimoine mondial depuis 2018.',
            'Ces deux sites montrent que construire des ouvrages monumentaux ne suppose pas toujours une économie agricole déjà installée : à Göbekli Tepe, ce sont des chasseurs-cueilleurs qui ont bâti. Certains ont parlé de « premiers temples du monde », mais les interprétations restent débattues et les recherches se poursuivent. Il faut donc distinguer ce que les vestiges établissent (la date, l’architecture, les motifs gravés) de ce qui relève de l’hypothèse (la fonction exacte des enceintes).'
          ],
          example: {
            statement: 'L’UNESCO date les structures de Göbekli Tepe entre 9 600 et 8 200 av. J.-C. Quelle durée cette période représente-t-elle ?',
            calculation: 'On soustrait : 9 600 − 8 200 = 1 400.',
            answer: 'Les structures ont été édifiées sur environ 1 400 ans, ce qui montre un site utilisé et transformé pendant une très longue période.'
          },
          exercise: {
            question: 'En quoi Göbekli Tepe remet-il en question l’idée que les monuments n’apparaissent qu’après l’agriculture ?',
            answer: 'Parce que, d’après l’UNESCO, ses structures monumentales ont été érigées par des groupes de chasseurs-cueilleurs du Néolithique précéramique.'
          },
          exercises: [
            {
              question: 'Quels types d’images sont gravés sur les piliers en T de Göbekli Tepe ?',
              answer: 'Des animaux sauvages, selon l’UNESCO.'
            },
            {
              question: 'Quelles sont les dimensions approximatives du mur de Jéricho vers 8 000 av. J.-C. ?',
              answer: 'Environ 3,6 m de haut et 1,8 m de large, selon World History Encyclopedia.'
            },
            {
              question: 'Depuis quelle année Göbekli Tepe est-il inscrit au patrimoine mondial de l’UNESCO ?',
              answer: 'Depuis 2018.'
            }
          ],
          sources: [
            { title: 'UNESCO — Göbekli Tepe', url: 'https://whc.unesco.org/en/list/1572' },
            { title: 'UNESCO — Ancient Jericho/Tell es-Sultan', url: 'https://whc.unesco.org/en/list/1687' },
            { title: 'World History Encyclopedia — Early Jericho', url: 'https://www.worldhistory.org/article/951/early-jericho/' },
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' }
          ]
        }
      },
      {
        id: 'catalhoyuk',
        title: 'Çatalhöyük : un village de maisons serrées',
        field: 'Néolithique · Anatolie · VIIIe – VIe millénaires av. J.-C.',
        summary: 'Observer un grand établissement néolithique d’Anatolie : son plan sans rues, ses décors, ses échanges et ce que révèlent les restes humains.',
        lesson: {
          sections: [
            'Çatalhöyük, sur la plaine de Konya, dans le plateau d’Anatolie méridionale (Turquie), est formé de deux tells qui s’élèvent jusqu’à 20 m au-dessus de la plaine, sur un site de 37 ha. Le tertre oriental, le plus haut, comprend dix-huit niveaux d’occupation néolithique entre 7 400 et 6 200 av. J.-C. Le tertre occidental montre l’évolution des pratiques culturelles au Chalcolithique, de 6 200 à 5 200 av. J.-C. Le site est inscrit au patrimoine mondial depuis 2012.',
            'Son trait le plus remarquable est un habitat sans rues : les maisons sont groupées dos à dos et l’on y accède par le toit. L’UNESCO souligne aussi la présence de peintures murales, de reliefs et de sculptures qui représentent le monde symbolique des habitants. Selon le ministère turc de la Culture et du Tourisme, les maisons étaient en briques crues et les morts pouvaient être enterrés sous les habitations, ce qui rattache la vie quotidienne aux pratiques rituelles et à la mémoire des défunts.',
            'Le site a été découvert en 1958 et fouillé par l’archéologue britannique James Mellaart entre 1961 et 1965. Les habitants semblent avoir vécu de façon relativement égalitaire, car aucune maison aux caractéristiques distinctives (par exemple celle d’un roi ou d’un prêtre) n’a été trouvée jusqu’ici. Cette conclusion repose sur l’état actuel des fouilles et peut évoluer.',
            'La bioarchéologie, qui étudie les restes humains, éclaire aussi la vie des habitants. Une étude publiée dans les PNAS en 2019 décrit à Çatalhöyük une hausse des maladies infectieuses liées à la densité de population et une forte baisse de la robustesse squelettique liée à l’activité. Ces observations s’inscrivent dans un schéma général où les premiers agriculteurs présentent souvent plus de pathologies squelettiques et dentaires que leurs ancêtres chasseurs-cueilleurs, avec des variations selon les régions.'
          ],
          example: {
            statement: 'Le tertre oriental de Çatalhöyük compte dix-huit niveaux d’occupation néolithique entre 7 400 et 6 200 av. J.-C. Quelle durée moyenne correspond à un niveau ?',
            calculation: 'Durée totale : 7 400 − 6 200 = 1 200 ans. Durée moyenne : 1 200 / 18 ≈ 67 ans.',
            answer: 'Environ 67 ans par niveau en moyenne. Ce n’est qu’un ordre de grandeur : les niveaux n’ont pas forcément tous la même durée.'
          },
          exercise: {
            question: 'Comment entrait-on dans une maison de Çatalhöyük ?',
            answer: 'Par le toit : les maisons étaient serrées dos à dos, sans rues, et l’accès se faisait depuis les toits.'
          },
          exercises: [
            {
              question: 'Qui a dirigé les fouilles de Çatalhöyük entre 1961 et 1965 ?',
              answer: 'L’archéologue britannique James Mellaart.'
            },
            {
              question: 'Quelle différence l’UNESCO fait-il entre le tertre oriental et le tertre occidental ?',
              answer: 'Le tertre oriental correspond à l’occupation néolithique (7 400 – 6 200 av. J.-C.), le tertre occidental à la période chalcolithique (6 200 – 5 200 av. J.-C.).'
            },
            {
              question: 'Pourquoi dit-on que les habitants semblent avoir vécu de façon relativement égalitaire ?',
              answer: 'Parce qu’aucune maison aux caractéristiques distinctives, comme celle d’un roi ou d’un prêtre, n’a été trouvée jusqu’ici ; c’est une conclusion provisoire.'
            }
          ],
          sources: [
            { title: 'UNESCO — Neolithic Site of Çatalhöyük', url: 'https://whc.unesco.org/en/list/1405' },
            { title: 'Ministère turc de la Culture et du Tourisme — Çatalhöyük', url: 'https://www.ktb.gov.tr/EN-395420/catalhoyuk.html' },
            { title: 'New World Encyclopedia — Catal Huyuk', url: 'https://www.newworldencyclopedia.org/entry/Catal_Huyuk' },
            { title: 'PNAS (2019) — Bioarchaeology of Neolithic Çatalhöyük reveals fundamental transitions in health, mobility, and lifestyle in early farmers', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6601267' }
          ]
        }
      },
      {
        id: 'techniques-poterie-echanges',
        title: 'Pierre polie, poterie et échanges : les techniques néolithiques',
        field: 'Néolithique · Techniques et échanges · plusieurs régions',
        summary: 'Distinguer les techniques associées au Néolithique, rappeler que certaines (comme la poterie) sont plus anciennes, et comprendre le rôle des échanges.',
        lesson: {
          sections: [
            'La pierre polie est l’un des marqueurs traditionnels du Néolithique : au lieu d’être seulement taillés, certains outils, comme les haches, sont façonnés puis polis. D’après World History Encyclopedia, des innovations dans les pointes de flèche apparaissent au Proche-Orient entre 9 600 et 6 900 av. J.-C., et d’autres innovations dans la fabrication des outils de pierre se répandent et sont adoptées par des groupes éloignés, ce qui est interprété comme la preuve de réseaux d’échanges et d’interactions culturelles importants. Plus tard, en Europe méditerranéenne, la culture cardiale se caractérise par un ensemble associant céramique, haches en pierre polie et espèces domestiquées.',
            'La poterie n’est pas une invention propre au Néolithique. Dans la grotte de Xianrendong (province du Jiangxi, Chine), des fragments de céramique datés d’environ 20 000 à 19 000 ans avant le présent ont été produits par des chasseurs-cueilleurs mobiles pendant le dernier maximum glaciaire ; ils ont probablement servi à la cuisson et précèdent l’agriculture d’au moins dix millénaires (étude publiée dans Science en 2012). Au Japon aussi, la céramique précède l’agriculture, alors qu’au Proche-Orient l’agriculture est antérieure à la production de poterie.',
            'L’agriculture entraîne de nouvelles techniques : défrichement des forêts, culture de céréales pouvant être stockées longtemps, puis charrues et systèmes d’irrigation. Les repères de la chronologie de World History Encyclopedia situent les premiers textiles de lin vers 6 500 av. J.-C., le début de l’irrigation et de l’agriculture « sérieuse » en Mésopotamie vers 5 000 av. J.-C., l’invention de la charrue vers 4 500 av. J.-C. et l’usage de la laine pour les textiles vers 4 000 av. J.-C. Ces dates sont approximatives et ne valent pas pour toutes les régions.',
            'Les matières premières circulent sur de longues distances. La chronologie de World History Encyclopedia place vers 7 500 av. J.-C. le début du commerce à longue distance de l’obsidienne, un verre volcanique qui sert à fabriquer des outils tranchants. À Çatalhöyük, la présence d’obsidienne et d’autres matériaux atteste, selon le ministère turc de la Culture et du Tourisme, des réseaux d’échanges à longue distance.'
          ],
          example: {
            statement: 'Les auteurs de l’étude de Xianrendong estiment que la poterie y précède l’agriculture d’au moins 10 000 ans. Elle date d’environ 20 000 ans avant le présent. Vers quand l’agriculture apparaît-elle au plus tôt dans cette région selon cette estimation ?',
            calculation: 'On soustrait l’écart minimal à l’âge de la poterie : 20 000 − 10 000 = 10 000.',
            answer: 'Pas avant environ 10 000 ans avant le présent : la poterie y précède de très loin l’agriculture.'
          },
          exercise: {
            question: 'La poterie est-elle une invention du Néolithique ?',
            answer: 'Pas uniquement : elle est attestée chez des chasseurs-cueilleurs mobiles en Chine il y a environ 20 000 ans (grotte de Xianrendong) et, au Japon, avant l’agriculture.'
          },
          exercises: [
            {
              question: 'Pourquoi la présence d’obsidienne loin de son lieu d’origine intéresse-t-elle les archéologues ?',
              answer: 'Parce que ce verre volcanique ne se trouve qu’à certains endroits : sa présence ailleurs témoigne de déplacements ou d’échanges.'
            },
            {
              question: 'Que devient l’usure des dents à Abu Hureyra après l’introduction de la poterie ?',
              answer: 'Elle diminue, mais les dents abîmées deviennent plus fréquentes, ce qui suggère le remplacement d’aliments à base de farine moulue par des plats bouillis.'
            },
            {
              question: 'Que contient l’ensemble caractéristique de la culture cardiale, d’après l’étude de 2015 ?',
              answer: 'Une céramique distinctive, des haches en pierre polie et des espèces domestiquées.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'Science (2012) — Early Pottery at 20,000 Years Ago in Xianrendong Cave, China', url: 'https://ui.adsabs.harvard.edu/abs/2012Sci...336.1696W/abstract' },
            { title: 'Ministère turc de la Culture et du Tourisme — Çatalhöyük', url: 'https://www.ktb.gov.tr/EN-395420/catalhoyuk.html' },
            { title: 'Molecular Biology and Evolution (2015) — A Common Genetic Origin for Early Farmers from Mediterranean Cardial and Central European LBK Cultures', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4652622' }
          ]
        }
      },
      {
        id: 'neolithique-europe',
        title: 'La diffusion du Néolithique en Europe',
        field: 'Néolithique · Europe · VIIe – IVe millénaires av. J.-C.',
        summary: 'Retracer l’arrivée de l’agriculture en Europe : chronologie, routes danubienne et méditerranéenne, et apport de l’ADN ancien.',
        lesson: {
          sections: [
            'L’agriculture n’arrive pas en Europe d’un seul coup. D’après World History Encyclopedia, elle se développe vers 7 000 av. J.-C. dans le sud-est de l’Europe, vers 5 500 av. J.-C. en Europe centrale et vers 4 000 av. J.-C. en Europe du Nord. Une étude d’ADN ancien publiée en 2010 a montré que les premiers agriculteurs d’Europe centrale, de culture rubanée (Linearbandkeramik, LBK, datée de 5 500 à 4 900 av. J.-C. calibrés), présentaient une affinité avec les populations actuelles du Proche-Orient et de l’Anatolie, ce qui indique un apport génétique majeur de cette région.',
            'Les premiers agriculteurs se sont d’abord installés dans la péninsule balkanique, où se développe la culture Starčevo–Kőrös–Criş. À partir de là, la diffusion a suivi deux grandes routes : une expansion représentée par les traditions Impressa puis cardiale, le long du littoral nord de la Méditerranée, et une autre représentée par la culture rubanée (LBK), le long du Danube vers l’Europe centrale. L’expansion méditerranéenne commence vers 5 900 av. J.-C. Selon une étude de 2015, les peuples cardiaux et rubanés descendent d’une population ancestrale commune située dans la péninsule balkanique ou autour d’elle.',
            'La céramique cardiale doit son nom au décor imprimé réalisé avec le bord dentelé de coquillages (coques). Le génome d’une femme de la grotte de Cova Bonica, près de Barcelone, datée d’environ 7 400 ans, a été séquencé : il se regroupe avec ceux des autres premiers agriculteurs européens connus. Il porte aussi une signature génétique de chasseurs-cueilleurs qui ne semble pas provenir d’un mélange avec les chasseurs-cueilleurs ibériques locaux.',
            'Ces travaux reposent sur un nombre limité d’échantillons (un jeu de données de 42 individus rubanés pour l’étude de 2010, six individus ibériques pour celle de 2015) : ils éclairent des régions précises et ne décrivent pas à eux seuls tout le continent. Dans le nord-ouest de l’Europe, les traces néolithiques sont parfois exceptionnellement bien conservées : World History Encyclopedia date de 3807 – 3806 av. J.-C. la construction du Sweet Track, chemin de bois du Somerset, et de 3300 – 2600 av. J.-C. l’occupation du village de Barnhouse, aux Orcades.'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, l’agriculture apparaît vers 5 500 av. J.-C. en Europe centrale et vers 4 000 av. J.-C. en Europe du Nord. Quel délai sépare ces deux repères ?',
            calculation: 'On soustrait : 5 500 − 4 000 = 1 500.',
            answer: 'Environ 1 500 ans séparent ces deux repères : la diffusion de l’agriculture en Europe s’étale sur plusieurs millénaires.'
          },
          exercise: {
            question: 'Quelles sont les deux grandes routes de diffusion de l’agriculture depuis les Balkans ?',
            answer: 'Une route méditerranéenne (traditions Impressa et cardiale, le long du littoral nord de la Méditerranée) et une route danubienne (culture rubanée, LBK, vers l’Europe centrale).'
          },
          exercises: [
            {
              question: 'Pourquoi la céramique cardiale porte-t-elle ce nom ?',
              answer: 'Parce que son décor est imprimé avec le bord dentelé de coquillages (coques).'
            },
            {
              question: 'Que révèle l’ADN ancien des agriculteurs de la culture rubanée ?',
              answer: 'Une affinité avec les populations actuelles du Proche-Orient et de l’Anatolie, donc un apport génétique majeur venu de cette région.'
            },
            {
              question: 'Le Néolithique commence-t-il partout en Europe au même moment ?',
              answer: 'Non : vers 7 000 av. J.-C. au sud-est, vers 5 500 av. J.-C. au centre et vers 4 000 av. J.-C. au nord, d’après World History Encyclopedia.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'PLoS Biology (2010) — Ancient DNA from European Early Neolithic Farmers Reveals Their Near Eastern Affinities', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2976717' },
            { title: 'Molecular Biology and Evolution (2015) — A Common Genetic Origin for Early Farmers from Mediterranean Cardial and Central European LBK Cultures', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4652622' }
          ]
        }
      },
      {
        id: 'megalithes-villages',
        title: 'Mégalithes et villages : Carnac, Stonehenge et les Orcades',
        field: 'Néolithique · Europe de l’Ouest · Ve – IIIe millénaires av. J.-C.',
        summary: 'Découvrir trois grands ensembles néolithiques d’Europe occidentale, leurs dates approximatives et les limites de leur interprétation.',
        lesson: {
          sections: [
            'Le terme mégalithe désigne un monument de grandes pierres (du grec megas, « grand », et lithos, « pierre »). World History Encyclopedia compte l’architecture mégalithique parmi les traits marquants du Néolithique. Elle prend la forme de tombes, d’alignements, de cercles de pierres ou d’enceintes. Göbekli Tepe, plus ancien, montre déjà que des groupes de chasseurs-cueilleurs du Néolithique précéramique dressaient de grands piliers.',
            'En Bretagne, entre la presqu’île de Quiberon et le golfe du Morbihan, les mégalithes de Carnac et des rives du Morbihan forment un ensemble de quatre éléments, inscrit au patrimoine mondial en 2025. L’UNESCO y voit des structures érigées successivement pendant plus de deux millénaires, d’environ 5 000 à 2 300 av. J.-C., en relation avec le relief et l’hydrographie. Selon l’AFP, l’ensemble couvre environ 1 000 km² et compte plus de 550 monuments ; l’origine et la fonction des alignements de menhirs (« longues pierres » en breton) restent mystérieuses.',
            'Dans le Wiltshire (Angleterre), Stonehenge, Avebury et leurs sites associés, inscrits en 1986, illustrent environ 2 000 ans d’usage continu et de construction de monuments entre environ 3 700 et 1 600 av. J.-C., du Néolithique ancien à l’âge du bronze. World History Encyclopedia place vers 3 100 av. J.-C. la première phase de Stonehenge (une enceinte de terre), vers 3 000 av. J.-C. le creusement des trous d’Aubrey et vers 2 550 av. J.-C. la transformation en monument de pierre. L’UNESCO précise que la finalité de ce monument remarquablement construit reste obscure.',
            'Aux Orcades (Écosse), le Cœur du Néolithique des Orcades réunit quatre monuments : la tombe à chambres de Maeshowe, deux cercles de pierres cérémoniels (les pierres de Stenness et l’anneau de Brodgar) et le village de Skara Brae. L’UNESCO y voit le témoignage d’une tradition culturelle qui s’épanouit entre environ 3 000 et 2 000 av. J.-C., et juge l’état de conservation de Skara Brae sans équivalent parmi les sites d’habitat néolithiques du nord de l’Europe. D’après World History Encyclopedia, Skara Brae est occupé vers 3 100 av. J.-C. puis abandonné vers 2 500 av. J.-C. pour des raisons inconnues ; il est mis au jour par une tempête en 1850.'
          ],
          example: {
            statement: 'L’UNESCO date les mégalithes de Carnac et du Morbihan d’environ 5 000 à 2 300 av. J.-C. Quelle durée cette période représente-t-elle ?',
            calculation: 'On soustrait : 5 000 − 2 300 = 2 700.',
            answer: 'Environ 2 700 ans, soit plus de deux millénaires, ce qui correspond à la formule de l’UNESCO sur des monuments érigés successivement.'
          },
          exercise: {
            question: 'Quels sont les quatre monuments du Cœur du Néolithique des Orcades ?',
            answer: 'La tombe à chambres de Maeshowe, les pierres de Stenness, l’anneau de Brodgar et le village de Skara Brae.'
          },
          exercises: [
            {
              question: 'Que signifie le mot « menhir » en breton, selon l’AFP ?',
              answer: '« Longue pierre ».'
            },
            {
              question: 'En quelle année Stonehenge, Avebury et leurs sites associés ont-ils été inscrits au patrimoine mondial ?',
              answer: 'En 1986.'
            },
            {
              question: 'Pourquoi Skara Brae est-il exceptionnel selon l’UNESCO ?',
              answer: 'Son état de conservation est sans équivalent parmi les sites d’habitat néolithiques du nord de l’Europe.'
            }
          ],
          sources: [
            { title: 'UNESCO — Megaliths of Carnac and of the Shores of Morbihan', url: 'https://whc.unesco.org/en/list/1725' },
            { title: 'UNESCO — Stonehenge, Avebury and Associated Sites', url: 'https://whc.unesco.org/en/list/373' },
            { title: 'UNESCO — Heart of Neolithic Orkney', url: 'https://whc.unesco.org/en/list/514' },
            { title: 'AFP / The Local — French prehistoric site makes UNESCO world heritage list', url: 'https://www.thelocal.fr/20250712/french-prehistoric-site-makes-unesco-world-heritage-list' },
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' }
          ]
        }
      },
      {
        id: 'societes-sante-fin',
        title: 'Sociétés, santé et fin du Néolithique',
        field: 'Néolithique · Sociétés et transition · Ve – IIe millénaires av. J.-C. selon les régions',
        summary: 'Examiner les conséquences sociales et sanitaires de la sédentarisation, puis la transition vers la métallurgie du cuivre et l’âge du bronze.',
        lesson: {
          sections: [
            'Vivre dans des villages permanents change l’organisation sociale. D’après World History Encyclopedia, qui s’appuie sur des travaux d’anthropologie, plus un groupe est nombreux, moins il est égalitaire et plus il est hiérarchisé ; l’importance de ceux qui gèrent et répartissent les ressources alimentaires augmente. Une agriculture plus intensive permet de nourrir davantage de personnes et favorise l’apparition de villages plus nombreux, puis d’une organisation sociale et politique plus complexe. Les situations varient toutefois : Çatalhöyük semble avoir été relativement égalitaire selon les observations actuelles.',
            'Les chercheurs parlent de « transition démographique néolithique » pour désigner l’augmentation de la population qui accompagne l’agriculture. Elle a aussi des conséquences sur la santé. Selon l’étude des PNAS sur Çatalhöyük, le bilan bioarchéologique de nombreuses régions montre un schéma général de pathologies squelettiques et dentaires plus fréquentes chez les premiers agriculteurs que chez leurs ancêtres chasseurs-cueilleurs, avec par exemple davantage d’infections.',
            'Ce schéma n’est pourtant pas universel. Une étude sur le Levant sud montre, entre le Natoufien et le Néolithique, des effets différents selon le sexe (l’âge moyen au décès diminue chez les femmes et augmente chez les hommes), aucun changement majeur de la santé dentaire, mais une nette augmentation des maladies infectieuses dans la seconde partie du Néolithique précéramique. Il faut donc éviter les généralisations : la santé des premiers agriculteurs dépend du lieu, de l’époque et du régime alimentaire.',
            'Vers la fin du Néolithique, la métallurgie du cuivre est introduite, ce qui marque une période de transition vers l’âge du bronze, parfois appelée Chalcolithique ou Énéolithique. Le bronze, mélange de cuivre et d’étain, est plus dur que le cuivre, se coule mieux et fond à une température plus basse. Il permet de fabriquer des armes, ce que le cuivre seul ne permet pas, car il n’est pas assez dur. Avec le temps, le bronze devient le matériau principal des outils et des armes, une grande partie de la technologie de la pierre devient obsolète et la fin du Néolithique est atteinte. Les dates varient : l’âge du bronze commence vers 2 000 av. J.-C. en Europe du Nord, alors que le tertre occidental de Çatalhöyük illustre une phase chalcolithique dès 6 200 – 5 200 av. J.-C.'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, l’agriculture apparaît vers 4 000 av. J.-C. en Europe du Nord et l’âge du bronze y commence vers 2 000 av. J.-C. Quel ordre de grandeur donne la durée du Néolithique dans cette région ?',
            calculation: 'On soustrait : 4 000 − 2 000 = 2 000.',
            answer: 'Environ 2 000 ans. C’est un ordre de grandeur, car les dates de début et de fin sont approximatives et varient selon les sites.'
          },
          exercise: {
            question: 'Pourquoi le bronze remplace-t-il peu à peu la pierre ?',
            answer: 'Parce que le bronze, mélange de cuivre et d’étain, est plus dur que le cuivre, se coule mieux et fond à une température plus basse ; il permet notamment de fabriquer des armes.'
          },
          exercises: [
            {
              question: 'Que désigne le terme Chalcolithique ?',
              answer: 'Une période de transition marquée par la métallurgie du cuivre entre le Néolithique et l’âge du bronze, aussi appelée Énéolithique.'
            },
            {
              question: 'La santé des premiers agriculteurs se dégrade-t-elle partout ?',
              answer: 'Non : de nombreuses études montrent davantage de pathologies, mais les résultats varient ; dans le Levant sud, la santé dentaire ne change pas de façon majeure alors que les maladies infectieuses augmentent plus tard.'
            },
            {
              question: 'Pourquoi un groupe plus nombreux est-il en général plus hiérarchisé, selon World History Encyclopedia ?',
              answer: 'Parce que, d’après les travaux d’anthropologie cités, plus le groupe est grand, moins il est égalitaire ; ceux qui gèrent et répartissent les ressources alimentaires gagnent en importance.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Neolithic Period', url: 'https://www.worldhistory.org/Neolithic/' },
            { title: 'PNAS (2019) — Bioarchaeology of Neolithic Çatalhöyük reveals fundamental transitions in health, mobility, and lifestyle in early farmers', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6601267' },
            { title: 'Demographic, biological and cultural aspects of the Neolithic revolution: a view from the southern Levant', url: 'https://cris.tau.ac.il/en/publications/demographic-biological-and-cultural-aspects-of-the-neolithic-revo/' },
            { title: 'UNESCO — Neolithic Site of Çatalhöyük', url: 'https://whc.unesco.org/en/list/1405' }
          ]
        }
      }
    ]
  },

// BRANCHE HISTOIRE DE L’AGRICULTURE

  {
    id: 'histoire-agriculture',
    sortYear: -9500,
    title: 'Histoire de l’agriculture',
    note: 'Dix chapitres sur les origines de l’agriculture, les foyers du Proche-Orient, d’Afrique, d’Asie et des Amériques, la diffusion des cultures, l’irrigation antique, l’échange colombien, la révolution agricole britannique et la révolution verte. Les dates sont approximatives et diffèrent parfois selon les sources.',
    chapters: [
      {
        id: 'origines-agriculture',
        title: 'Qu’est-ce que l’agriculture ? Origines et définitions',
        field: 'Agriculture · Origines · à partir d’environ 12 000 ans avant aujourd’hui',
        summary: 'Comprendre ce qu’est la domestication, quand et où l’agriculture est apparue de façon indépendante, et pourquoi les dates varient selon les sources.',
        lesson: {
          sections: [
            'D’après World History Encyclopedia, l’agriculture est apparue de façon indépendante en plusieurs endroits du monde, à partir d’environ 12 000 ans avant aujourd’hui. Les premières plantes cultivées et les premiers animaux d’élevage ont été domestiqués dans six zones plutôt diffuses : le Proche-Orient, la Chine, l’Asie du Sud-Est et l’Afrique dans l’Ancien Monde ; la Mésoamérique, l’Amérique du Sud et le nord-est de l’Amérique du Nord dans le Nouveau Monde. Domestiquer une espèce, au sens large, c’est la faire évoluer par sélection humaine pour qu’elle réponde à des besoins : nourriture, fibres, force de travail.',
            'Comment l’agriculture a-t-elle pu commencer ? Pour le Proche-Orient, World History Encyclopedia propose une explication probable : des chasseurs-cueilleurs qui récoltaient des céréales sauvages devaient les rapporter au camp pour séparer le grain de la balle. Des graines tombaient inévitablement au sol, et l’année suivante des céréales poussaient autour du campement. Les groupes restaient plus longtemps pour récolter, devenant peu à peu semi-nomades avec des villages saisonniers, comme la culture natoufienne, qui a prospéré d’environ 12 500 à 9 500 av. J.-C. Vers 8 500 av. J.-C., le Moyen-Orient comptait de nombreux villages permanents dont les habitants étaient surtout des agriculteurs. Il s’agit d’une explication plausible, pas d’une certitude.',
            'On a longtemps cru que l’agriculture s’était diffusée depuis un seul foyer du Moyen-Orient vers le reste du monde. Les spécialistes s’accordent aujourd’hui sur des apparitions indépendantes : en Amérique centrale, des populations ont domestiqué le maïs et les haricots sans rien savoir de la culture du blé et du pois au Moyen-Orient ; en Chine, ce sont le riz, le millet et le porc ; en Amérique du Sud, la pomme de terre et le lama. Chaque foyer s’est donc construit sur des espèces locales différentes, ce qui explique la diversité des agricultures du monde.',
            'Les dates varient selon les sources, car elles dépendent de ce que l’on date : les premières plantes cultivées, les formes domestiquées, les restes retrouvés sur un site. Par exemple, World History Encyclopedia situe dans un article la domestication des plantes il y a environ 12 000 ans, et donne dans un autre des repères plus précis, comme des figuiers cultivés en Jordanie vers 11 300 av. J.-C. et le blé et la chèvre domestiqués dans le Levant vers 9 000 av. J.-C. Ces chiffres ne coïncident pas exactement : il faut les lire comme des ordres de grandeur, et non comme des dates précises.'
          ],
          example: {
            statement: 'Une source situe le début de la domestication des plantes il y a environ 12 000 ans. En arrondissant l’année actuelle à 2 000, à quelle date av. J.-C. cela correspond-il ?',
            calculation: 'On soustrait l’année arrondie : 12 000 − 2 000 = 10 000.',
            answer: 'Vers 10 000 av. J.-C., un ordre de grandeur et non une date exacte.'
          },
          exercise: {
            question: 'Dans combien de zones du monde les premières plantes et les premiers animaux ont-ils été domestiqués, selon World History Encyclopedia ?',
            answer: 'Dans six zones plutôt diffuses : le Proche-Orient, la Chine, l’Asie du Sud-Est et l’Afrique dans l’Ancien Monde ; la Mésoamérique, l’Amérique du Sud et le nord-est de l’Amérique du Nord dans le Nouveau Monde.'
          },
          exercises: [
            {
              question: 'Quelle explication probable World History Encyclopedia donne-t-elle au début de l’agriculture au Proche-Orient ?',
              answer: 'Des chasseurs-cueilleurs rapportaient des céréales sauvages au camp pour séparer le grain de la balle ; des graines tombaient au sol et repoussaient l’année suivante, ce qui a conduit les groupes à rester plus longtemps, puis à cultiver.'
            },
            {
              question: 'Pourquoi ne peut-on pas parler d’un foyer d’origine unique de l’agriculture ?',
              answer: 'Parce que des populations ont domestiqué des espèces locales différentes de façon indépendante : maïs et haricots en Amérique centrale, riz, millet et porc en Chine, pomme de terre et lama en Amérique du Sud.'
            },
            {
              question: 'Pourquoi faut-il lire les dates de domestication comme des ordres de grandeur ?',
              answer: 'Parce qu’elles dépendent de ce que l’on date et que les sources ne donnent pas exactement les mêmes repères pour une même espèce.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'World History Encyclopedia — Agriculture in the Fertile Crescent & Mesopotamia', url: 'https://www.worldhistory.org/article/9/agriculture-in-the-fertile-crescent--mesopotamia/' },
            { title: 'World History Encyclopedia — First Agricultural Revolution', url: 'https://www.worldhistory.org/First_Agricultural_Revolution/' }
          ]
        }
      },
      {
        id: 'proche-orient-croissant-fertile',
        title: 'Le Proche-Orient et le Croissant fertile',
        field: 'Agriculture · Proche-Orient · du XIIe au IIIe millénaire av. J.-C.',
        summary: 'Découvrir pourquoi le Proche-Orient est un foyer majeur de l’agriculture et quelles plantes et quels animaux y ont été domestiqués.',
        lesson: {
          sections: [
            'World History Encyclopedia décrit des débuts graduels dans les collines du sud-est de la Turquie, de l’ouest de l’Iran et du Levant, probablement parce que cette région abritait une grande variété de plantes et d’animaux se prêtant à la domestication. Les sites agricoles anciens y sont si nombreux que certains chercheurs proposent d’y voir une « zone nucléaire », où des événements survenus en un lieu en ont influencé d’autres.',
            'Le Croissant fertile comprend trois grandes zones géographiques : la Mésopotamie, plaine alluviale de l’Euphrate et du Tigre, surtout située dans l’Irak actuel ; la haute Mésopotamie, au pied des monts Taurus et Zagros ; et le Levant, sur la côte méditerranéenne, dans la Syrie, le Liban, Israël, la Jordanie et la Palestine actuels. Cette diversité de milieux explique la variété des ressources agricoles, des rendements et des précipitations.',
            'Un article de World History Encyclopedia sur les origines de l’agriculture mondiale indique que les premiers animaux d’élevage, moutons et chèvres, ont probablement été domestiqués au nord et à l’est du cœur de la domestication des plantes. Il y a environ 11 000 ans, l’orge, le blé, les chèvres et les moutons sont domestiqués au Proche-Orient, puis les porcs et les bovins il y a 10 000 ans, les pois et les lentilles il y a 8 000 ans, et les olives et le raisin il y a environ 6 000 ans. Parmi les plantes citées figurent aussi le pois chiche, le palmier dattier, le figuier et le lin.',
            'Un autre article de la même encyclopédie donne des repères légèrement différents : des figuiers cultivés en Jordanie vers 11 300 av. J.-C., le blé et la chèvre dans le Levant vers 9 000 av. J.-C., les pois et les lentilles vers 8 000 av. J.-C., les bovins vers 8 500 av. J.-C. (probablement à partir de l’aurochs), l’olivier en Méditerranée orientale vers 5 000 av. J.-C. et la vigne en Iran vers 3 500 av. J.-C. Des analyses génétiques d’anciens ossements de bovins suggèrent que tous les bovins actuels descendent d’un très petit nombre d’animaux domestiqués, de l’ordre de 80, issus d’un petit troupeau domestiqué il y a environ 10 500 ans. Selon la même source, environ 90 % de nos calories proviennent aujourd’hui d’aliments domestiqués lors de cette première vague de la révolution agricole.'
          ],
          example: {
            statement: 'World History Encyclopedia place la culture des figuiers en Jordanie vers 11 300 av. J.-C. et celle de l’olivier en Méditerranée orientale vers 5 000 av. J.-C. Quel intervalle sépare ces deux repères ?',
            calculation: 'On soustrait : 11 300 − 5 000 = 6 300.',
            answer: 'Environ 6 300 ans : la domestication des plantes du Proche-Orient s’étale sur plusieurs millénaires, elle n’est pas un événement unique.'
          },
          exercise: {
            question: 'Quels animaux ont probablement été domestiqués en premier au Proche-Orient, selon World History Encyclopedia ?',
            answer: 'Les moutons et les chèvres, probablement au nord et à l’est du cœur de la domestication des plantes.'
          },
          exercises: [
            {
              question: 'Quelles sont les trois grandes zones géographiques du Croissant fertile ?',
              answer: 'La Mésopotamie (plaine alluviale de l’Euphrate et du Tigre), la haute Mésopotamie (au pied du Taurus et du Zagros) et le Levant (côte méditerranéenne).'
            },
            {
              question: 'Que signifie l’expression « zone nucléaire » appliquée au Proche-Orient ?',
              answer: 'Qu’en raison du très grand nombre de sites agricoles anciens, des événements survenus en un lieu pourraient avoir influencé d’autres lieux de la région.'
            },
            {
              question: 'Quelles céréales ont été domestiquées parmi les premières au Proche-Orient ?',
              answer: 'L’orge et le blé.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'World History Encyclopedia — Agriculture in the Fertile Crescent & Mesopotamia', url: 'https://www.worldhistory.org/article/9/agriculture-in-the-fertile-crescent--mesopotamia/' },
            { title: 'UCL News — DNA traces cattle back to a small herd domesticated around 10,500 years ago', url: 'https://www.ucl.ac.uk/news/2012/mar/dna-traces-cattle-back-small-herd-domesticated-around-10500-years-ago' }
          ]
        }
      },
      {
        id: 'afrique-chine-asie-sud-est',
        title: 'Afrique, Chine et Asie du Sud-Est : d’autres foyers de l’Ancien Monde',
        field: 'Agriculture · Afrique et Asie · du Xe au IVe millénaire av. J.-C. environ',
        summary: 'Découvrir les foyers agricoles africains, chinois et sud-est asiatiques, leurs espèces domestiquées et les nuances de datation.',
        lesson: {
          sections: [
            'Selon World History Encyclopedia, l’agriculture commence aussi très tôt dans les marges forestières de l’Afrique de l’Ouest, en Éthiopie et dans le Sahel, la zone de transition écoclimatique entre le Sahara et la savane. L’Éthiopie fournit les plus anciennes preuves africaines d’agriculture, datées d’environ 6 000 ans, mais les autres origines sont probablement tout aussi anciennes.',
            'Les Éthiopiens ont domestiqué le café, l’éleusine et le teff. Dans le Sahel, ce sont le sorgho, le mil perlé, le riz africain et la pintade. Les Africains de l’Ouest sont à l’origine de l’igname africaine, du niébé, de la pastèque et du palmier à huile. L’Afrique est donc un foyer à part entière, avec des plantes qui n’ont pas de lien avec celles du Proche-Orient.',
            'En Chine, deux zones ont commencé l’agriculture il y a environ 8 000 ans : les bassins du fleuve Jaune et de la Wei au nord, et la vallée du Yangzi au sud. Parmi les premières espèces domestiquées en Chine figurent le millet commun (broomcorn) et le millet des oiseaux (foxtail), le riz, le soja et le porc ; la pêche et le thé sont aussi attribués à la Chine. D’autres indices de culture, datés de 8 000 à 10 000 ans, existent en Thaïlande et en Nouvelle-Guinée.',
            'En Asie du Sud-Est ont d’abord été domestiqués la banane, le taro, les agrumes et la canne à sucre ; l’igname et le taro y comptent parmi les légumes cités. Le poulet a été domestiqué dans une zone englobant le nord de l’Inde sub-himalayen, le sud de la Chine et l’Asie du Sud-Est. Un autre article de World History Encyclopedia signale que les plus anciens phytolithes de riz trouvés le long du Yangzi remontent à environ 13 900 ans ; or un phytolithe, microrestes végétal de silice, ne suffit pas à lui seul à établir une culture : c’est une raison de plus de rester prudent sur les dates.'
          ],
          example: {
            statement: 'World History Encyclopedia date les plus anciennes preuves d’agriculture en Éthiopie d’environ 6 000 ans, et le début de l’agriculture dans deux zones de Chine d’environ 8 000 ans. Quel écart sépare ces deux repères ?',
            calculation: 'On soustrait : 8 000 − 6 000 = 2 000.',
            answer: 'Environ 2 000 ans. Comme l’article précise que d’autres origines africaines sont probablement tout aussi anciennes, cet écart n’est qu’indicatif.'
          },
          exercise: {
            question: 'Quelles espèces ont été domestiquées dans le Sahel, selon World History Encyclopedia ?',
            answer: 'Le sorgho, le mil perlé, le riz africain et la pintade.'
          },
          exercises: [
            {
              question: 'Quelles sont les deux zones de Chine où l’agriculture commence il y a environ 8 000 ans ?',
              answer: 'Les bassins du fleuve Jaune et de la Wei au nord, et la vallée du Yangzi au sud.'
            },
            {
              question: 'Quelles espèces sont associées à l’Asie du Sud-Est ?',
              answer: 'La banane, le taro, les agrumes et la canne à sucre, ainsi que l’igname ; le poulet vient d’une zone englobant l’Asie du Sud-Est, le sud de la Chine et le nord de l’Inde.'
            },
            {
              question: 'Pourquoi la présence de phytolithes de riz ne suffit-elle pas à prouver une culture ?',
              answer: 'Parce qu’un phytolithe est seulement un microreste végétal de silice : sa présence peut indiquer une plante, mais pas à elle seule que celle-ci était cultivée.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'World History Encyclopedia — First Agricultural Revolution', url: 'https://www.worldhistory.org/First_Agricultural_Revolution/' }
          ]
        }
      },
      {
        id: 'ameriques-origines-agricoles',
        title: 'Les Amériques : Mésoamérique, Andes et Amérique du Nord',
        field: 'Agriculture · Nouveau Monde · à partir du IXe millénaire av. J.-C. environ',
        summary: 'Étudier les trois foyers agricoles du Nouveau Monde, leurs plantes et leurs animaux domestiques.',
        lesson: {
          sections: [
            'D’après World History Encyclopedia, l’agriculture a probablement commencé de façon indépendante dans le Nouveau Monde, 1 000 à 2 000 ans plus tard que dans l’Ancien Monde. Trois grands centres sont décrits : un centre mésoaméricain relativement compact, de l’actuelle Mexico jusqu’au Honduras ; des cultures sud-américaines apparues sur une vaste zone couvrant la majeure partie de l’Amérique du Sud côtière et centrale ; et un centre indépendant dans l’est de l’Amérique du Nord.',
            'En Mésoamérique, l’amarante, l’avocat, les haricots, le chénopode, le coton, les piments, la citrouille et la courge ont été domestiqués, ainsi que le maïs ; la dinde l’a été au Mexique. Un autre article de World History Encyclopedia indique que la vallée d’Oaxaca, dans le sud du Mexique, est traditionnellement considérée comme le lieu où le maïs a été domestiqué à partir de la téosinte, son ancêtre sauvage ; les données archéologiques et moléculaires suggèrent une domestication il y a environ 9 000 ans.',
            'En Amérique du Sud, quatre régions de domestication sont distinguées : les Andes centrales d’altitude moyenne (quinoa et amarante) ; le nord et le centre des Andes, d’altitude moyenne et haute (pomme de terre, oca et cañihua) ; la basse Amazonie du sud (manioc et arachide) ; et l’Équateur et le nord-ouest du Pérou (haricots communs et courge). Les lamas et les cobayes y ont été apprivoisés. La pomme de terre aurait été domestiquée dans le sud du Pérou il y a environ 7 000 ans.',
            'En Amérique du Nord, des populations ont domestiqué le tournesol, l’ansérine (goosefoot) et le sumpweed, ainsi que probablement une autre espèce de courge. Les animaux domestiques américains cités par World History Encyclopedia sont la dinde au Mexique, le lama, l’alpaga, le cobaye et le canard musqué en Amérique du Sud. Ces foyers sont indépendants de ceux de l’Ancien Monde : jusqu’à 1492, les agriculteurs des deux hémisphères cultivaient des ensembles de plantes complètement différents.'
          ],
          example: {
            statement: 'World History Encyclopedia indique que l’agriculture débute dans le Nouveau Monde 1 000 à 2 000 ans après l’Ancien Monde (environ 12 000 ans). Quelle fourchette cela donne-t-il ?',
            calculation: 'On soustrait : 12 000 − 1 000 = 11 000 et 12 000 − 2 000 = 10 000.',
            answer: 'Entre 10 000 et 11 000 ans environ. Le même site donne pourtant 9 000 ans pour le maïs : ces valeurs sont approximatives et diffèrent selon les articles.'
          },
          exercise: {
            question: 'Quelles sont les quatre régions de domestication d’Amérique du Sud distinguées par World History Encyclopedia ?',
            answer: 'Les Andes centrales d’altitude moyenne, le nord et le centre des Andes (moyenne et haute altitude), la basse Amazonie du sud, et l’Équateur avec le nord-ouest du Pérou.'
          },
          exercises: [
            {
              question: 'De quelle plante sauvage le maïs est-il issu ?',
              answer: 'De la téosinte ; la vallée d’Oaxaca, au Mexique, est traditionnellement considérée comme le lieu de cette domestication.'
            },
            {
              question: 'Quel animal a été domestiqué au Mexique, selon World History Encyclopedia ?',
              answer: 'La dinde.'
            },
            {
              question: 'Quelles espèces ont été domestiquées dans l’est de l’Amérique du Nord ?',
              answer: 'Le tournesol, l’ansérine et le sumpweed, ainsi que probablement une autre espèce de courge.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'World History Encyclopedia — First Agricultural Revolution', url: 'https://www.worldhistory.org/First_Agricultural_Revolution/' }
          ]
        }
      },
      {
        id: 'diffusion-europe-mediterranee',
        title: 'La diffusion des cultures vers l’Europe et la Méditerranée',
        field: 'Agriculture · Europe et Méditerranée · VIIIe – IIIe millénaires av. J.-C. environ',
        summary: 'Retracer comment les plantes et les animaux du Proche-Orient se sont diffusés par terre et par mer, et comment les chercheurs distinguent diffusion culturelle et migration.',
        lesson: {
          sections: [
            'Selon World History Encyclopedia, la culture des céréales du Proche-Orient s’est diffusée rapidement : il y a environ 8 000 ans, les plantes cultivées du Proche-Orient étaient arrivées en Grèce, en Égypte, le long de la mer Caspienne et au Pakistan. L’Europe centrale était intensivement cultivée moins de 1 000 ans plus tard, et il y a 5 000 ans, des communautés agricoles s’étendaient de la côte espagnole à l’Angleterre et à la Scandinavie.',
            'La plupart des plantes fondatrices du Proche-Orient (amidonnier, engrain, orge, lentille, pois et lin) ont traversé l’Europe en ensemble, ce qui a stimulé la domestication d’autres plantes en chemin. L’avoine et le lin ont d’abord accompagné l’ensemble comme des mauvaises herbes avant d’être exploités et de devenir des cultures secondaires au moment d’atteindre la péninsule Ibérique. De nombreux légumes domestiqués il y a environ 5 000 ans sont aussi apparus comme des cultures secondaires, notamment les choux, les oignons et les radis.',
            'Cette diffusion peut s’expliquer par la diffusion culturelle, où les techniques se transmettent de personne à personne par simple apprentissage, ou par la migration, où le transfert s’accompagne d’une expansion de population. D’après World History Encyclopedia, l’essentiel des preuves soutient l’hypothèse de la migration. Les études d’ADN ancien vont dans ce sens : des agriculteurs de culture rubanée, datée de 5 500 à 4 900 av. J.-C. calibrés, étaient génétiquement proches du Proche-Orient et de l’Anatolie, et une étude de 2015 montre que les agriculteurs cardiaux de la Méditerranée et les agriculteurs rubanés d’Europe centrale descendent d’une population ancestrale commune, située dans la péninsule balkanique ou autour d’elle.',
            'La diffusion s’est aussi faite par la mer. World History Encyclopedia cite Melinda Zeder (2008) : des vagues successives de colons marins auraient établi des enclaves agricoles côtières autour de la Méditerranée. Chypre a été colonisée il y a environ 10 500 à 9 000 ans par des pionniers néolithiques venus du continent, probablement en bateau, avec moutons, chèvres, bovins, porcs, engrain, orge, amidonnier, lentilles, pistaches, lin et figues. Depuis la mer Égée, des colons maritimes sont arrivés il y a 9 000 à 8 000 ans ; l’Italie a été touchée il y a environ 8 000 ans, avec des villages agricoles installés dans la région des Pouilles ; et une colonie d’agriculteurs venus d’Italie a été identifiée dans le sud de la France, occupée il y a 7 700 à 7 600 ans.'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, Chypre est colonisée il y a environ 10 500 à 9 000 ans et la péninsule italienne il y a environ 8 000 ans. Quel est l’écart entre Chypre et l’Italie ?',
            calculation: 'Écart minimal : 9 000 − 8 000 = 1 000. Écart maximal : 10 500 − 8 000 = 2 500.',
            answer: 'Entre 1 000 et 2 500 ans environ : la diffusion en Méditerranée s’étale sur plusieurs millénaires et progresse de proche en proche.'
          },
          exercise: {
            question: 'Quelles sont les deux hypothèses pour expliquer la diffusion de l’agriculture ?',
            answer: 'La diffusion culturelle, où les techniques se transmettent par simple apprentissage, et la migration, où le transfert s’accompagne d’une expansion de population ; l’essentiel des preuves soutient la migration selon World History Encyclopedia.'
          },
          exercises: [
            {
              question: 'Quelles plantes fondatrices du Proche-Orient ont traversé l’Europe en ensemble ?',
              answer: 'L’amidonnier, l’engrain, l’orge, la lentille, le pois et le lin.'
            },
            {
              question: 'Comment Chypre a-t-elle été colonisée par les premiers agriculteurs ?',
              answer: 'Par des pionniers néolithiques venus du continent, probablement en bateau, qui ont apporté moutons, chèvres, bovins, porcs et plusieurs plantes cultivées.'
            },
            {
              question: 'Que montre l’étude génétique de 2015 sur les agriculteurs cardiaux et rubanés ?',
              answer: 'Qu’ils descendent d’une population ancestrale commune située dans la péninsule balkanique ou autour d’elle.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'PLoS Biology (2010) — Ancient DNA from European Early Neolithic Farmers Reveals Their Near Eastern Affinities', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2976717' },
            { title: 'Molecular Biology and Evolution (2015) — A Common Genetic Origin for Early Farmers from Mediterranean Cardial and Central European LBK Cultures', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4652622' }
          ]
        }
      },
      {
        id: 'ocean-indien-echanges-cultures',
        title: 'L’océan Indien : un pont pour les plantes et les animaux',
        field: 'Agriculture · Océan Indien · IIIe – Ier millénaires av. J.-C.',
        summary: 'Comprendre comment des cultures et des animaux ont circulé entre l’Afrique, l’Inde et l’Asie du Sud-Est avant l’Antiquité classique.',
        lesson: {
          sections: [
            'Selon World History Encyclopedia, des navigateurs de l’océan Indien ont transmis plusieurs cultures asiatiques importantes à Madagascar, à l’Afrique de l’Est et à l’Inde au plus tard au IIe millénaire av. J.-C. : canne à sucre, agrumes, riz d’Asie, ignames d’Asie, taro, banane et plantain, noix de coco, mangue, arbre à pain, et peut-être plusieurs épices (gingembre, clous de girofle, cardamome). Plusieurs de ces cultures ont ensuite traversé le continent africain jusqu’en Afrique de l’Ouest.',
            'À la fin du IIIe millénaire av. J.-C., un réseau commercial s’est mis en place entre les populations côtières du sud de l’Arabie et les navigateurs du Gujarat, en Inde. Peu après, des cultures africaines ont été transportées vers l’Asie du Sud : le mil perlé, le sorgho, le niébé et l’éleusine. Dans l’autre sens, le millet commun d’origine chinoise voyageait vers l’ouest par des routes commerciales dès 2 200 av. J.-C. Le zébu a peut-être été transporté de l’Inde vers le Yémen et l’Afrique de l’Est à la même époque ; il s’est ensuite croisé avec les bovins africains, ce qui a donné des hybrides importants pour les éleveurs de l’Est africain.',
            'La banane d’Indonésie a probablement atteint l’Inde et l’Afrique dès 2 000 av. J.-C. ; elle est arrivée en Afrique de l’Ouest vers 500 av. J.-C. Vers 5 000 ans avant aujourd’hui, plusieurs cultures ont été domestiquées en Inde, probablement stimulées par l’introduction de plantes d’Afrique et d’Asie du Sud-Est : aubergine, concombre, pois d’Angole, haricot mungo, poivre, gingembre, sésame, coton et riz de type indica. Un commerce régulier entre l’Inde et la péninsule malaise est attesté dès 1 500 av. J.-C.',
            'Le poulet illustre la complexité de ces échanges. Il aurait probablement atteint l’Afrique depuis l’Inde par plusieurs routes : les données de linguistique historique suggèrent trois introductions distinctes, dont deux depuis le nord à travers le Sahara et une depuis l’océan Indien et la côte est de l’Afrique. Une étude publiée dans Antiquity en 2011 par Dorian Fuller et ses collègues décrit ces échanges préhistoriques de plantes et d’animaux entre l’Afrique et l’Inde et soutient que les principaux acteurs étaient non pas de grands empires, mais une multitude de petits entrepreneurs.'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, la banane atteint l’Inde et l’Afrique vers 2 000 av. J.-C. et l’Afrique de l’Ouest vers 500 av. J.-C. Quel intervalle sépare ces deux étapes ?',
            calculation: 'On soustrait : 2 000 − 500 = 1 500.',
            answer: 'Environ 1 500 ans : la progression d’une plante à travers le continent africain est lente, de proche en proche.'
          },
          exercise: {
            question: 'Quelles cultures africaines ont été transportées vers l’Asie du Sud après la mise en place du réseau Inde–Golfe ?',
            answer: 'Le mil perlé, le sorgho, le niébé et l’éleusine.'
          },
          exercises: [
            {
              question: 'Quelle céréale d’origine chinoise voyage vers l’ouest dès 2 200 av. J.-C. ?',
              answer: 'Le millet commun (Panicum miliaceum).'
            },
            {
              question: 'Combien d’introductions distinctes du poulet en Afrique suggèrent les données linguistiques ?',
              answer: 'Trois : deux depuis le nord à travers le Sahara et une depuis l’océan Indien et la côte est de l’Afrique.'
            },
            {
              question: 'Selon l’étude d’Antiquity de 2011, qui étaient les principaux acteurs de ces échanges ?',
              answer: 'Une multitude de petits entrepreneurs plutôt que de grands empires.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'Antiquity (2011) — Across the Indian Ocean: the prehistoric movement of plants and animals', url: 'https://www.cambridge.org/core/product/57B5B5285CDFC6151DD7A92EE8851734' },
            { title: 'UCL — SEALINKS project', url: 'https://www.ucl.ac.uk/archaeology/research/directory/sealinks' }
          ]
        }
      },
      {
        id: 'mesopotamie-egypte-irrigation',
        title: 'Irrigation et charrue : l’agriculture en Mésopotamie et en Égypte',
        field: 'Agriculture · Antiquité · IVe – Ier millénaires av. J.-C.',
        summary: 'Voir comment l’irrigation, la charrue et le surplus de céréales ont soutenu les premières villes et les premiers États en Mésopotamie et en Égypte.',
        lesson: {
          sections: [
            'D’après World History Encyclopedia, l’agriculture du Croissant fertile suit deux modèles : une agriculture sèche, sans irrigation, surtout pratiquée dans les collines de la haute Mésopotamie et du Levant, où l’on cultive surtout des céréales dépendant de la pluie ; et une agriculture irriguée, centrée sur les plaines alluviales de la basse Mésopotamie. Beaucoup de récoltes étaient détruites par la sécheresse ou les inondations. Les premiers agriculteurs se sont installés dans les collines plus arrosées, où les pluies sont réparties plus régulièrement dans l’année ; dans les plaines inondables, de nouvelles techniques sont devenues nécessaires.',
            'L’irrigation artificielle est une innovation clé. Au début, l’eau était prélevée directement dans le système Tigre-Euphrate par de petits canaux et des chadoufs, des engins de levage de l’eau en forme de grue, connus en Mésopotamie depuis environ 3 000 av. J.-C. À partir du milieu du Ier millénaire av. J.-C., on trouve des réseaux de canaux et des réservoirs plus vastes, probablement organisés par l’État. L’aqueduc de Jerwan, le plus ancien connu, a été construit par le roi Sennachérib d’Assyrie entre 703 et 690 av. J.-C. L’agriculture irriguée reste toutefois constamment menacée par la salinisation des sols.',
            'La charrue était connue et largement utilisée vers 3 000 av. J.-C. ; les charrues en bois ont probablement été inventées au IVe millénaire av. J.-C., et des charrues qui semaient en même temps les graines l’ont été au plus tard au IIe millénaire av. J.-C. Les champs étaient travaillés avec des bœufs et une équipe de travailleurs. Un « almanach du fermier » sumérien daté de 1700 av. J.-C. montre que les Mésopotamiens connaissaient déjà la rotation des cultures et laissaient les champs en jachère pour maintenir la fertilité du sol, mais l’usage du fumier ne semble pas encore connu. En Babylonie, en Assyrie et chez les Hittites, l’orge était la principale céréale pour l’alimentation humaine, surtout parce qu’elle tolère assez bien le sel, ce qui compte pour l’irrigation sous la chaleur de l’été.',
            'Un surplus agricole était essentiel à la création des premières villes : ce n’est que lorsque les rendements dépassaient les besoins de subsistance qu’il devenait possible d’entretenir des populations urbaines. Des études récentes suggèrent que l’essor des États centralisés en Mésopotamie, comme ailleurs, dépendait de l’abondance de céréales pouvant être prélevées en impôt, transportées, stockées et redistribuées. Là où la culture principale était composée de racines ou de tubercules périssables, l’État centralisé est apparu beaucoup plus tard.',
            'En Égypte, World History Encyclopedia souligne que la crue annuelle du Nil était l’aspect le plus important de l’agriculture, mais que des canaux d’irrigation restaient nécessaires pour amener l’eau aux fermes et aux villages éloignés et pour maintenir une saturation régulière des cultures près du fleuve. Les cultures de base comprenaient l’amidonnier, les pois chiches, les lentilles, la laitue, les oignons, l’ail, le sésame, le blé, l’orge, le papyrus et le lin, utilisé pour les cordes et les vêtements. L’année agricole suivait trois saisons : Akhet (la crue), Peret (la croissance) et Shemu (la récolte).'
          ],
          example: {
            statement: 'Selon World History Encyclopedia, les chadoufs existent en Mésopotamie depuis environ 3 000 av. J.-C. et l’aqueduc de Jerwan est construit à partir de 703 av. J.-C. Quel intervalle approximatif sépare ces deux repères ?',
            calculation: 'On soustrait : 3 000 − 703 = 2 297.',
            answer: 'Environ 2 300 ans : les techniques d’irrigation se sont perfectionnées très lentement.'
          },
          exercise: {
            question: 'Pourquoi l’orge était-elle la principale céréale en Babylonie, en Assyrie et chez les Hittites ?',
            answer: 'Parce qu’elle tolère assez bien le sel, ce qui est important pour les cultures irriguées sous la chaleur de l’été.'
          },
          exercises: [
            {
              question: 'Qu’est-ce qu’un chadouf ?',
              answer: 'Un engin de levage de l’eau en forme de grue, utilisé en Mésopotamie depuis environ 3 000 av. J.-C. pour irriguer les champs.'
            },
            {
              question: 'Quelles sont les trois saisons agricoles de l’Égypte ancienne ?',
              answer: 'Akhet (la crue), Peret (la croissance) et Shemu (la récolte).'
            },
            {
              question: 'Pourquoi un surplus agricole est-il indispensable aux premières villes ?',
              answer: 'Parce que les rendements doivent dépasser les besoins de subsistance des cultivateurs pour pouvoir nourrir une population urbaine et des spécialistes qui ne produisent pas leur nourriture.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Agriculture in the Fertile Crescent & Mesopotamia', url: 'https://www.worldhistory.org/article/9/agriculture-in-the-fertile-crescent--mesopotamia/' },
            { title: 'World History Encyclopedia — Ancient Egyptian Agriculture', url: 'https://www.worldhistory.org/article/997' },
            { title: 'History on the Net — Egyptian farming', url: 'https://www.historyonthenet.com/egyptian-farming' }
          ]
        }
      },
      {
        id: 'echange-colombien-cultures',
        title: 'L’échange colombien : un bouleversement de l’agriculture mondiale',
        field: 'Agriculture · Échanges mondiaux · à partir de 1492',
        summary: 'Comprendre comment, après 1492, les cultures des deux hémisphères ont été mélangées, et quelles en ont été les conséquences.',
        lesson: {
          sections: [
            'Jusqu’à il y a environ 500 ans, presque toutes les dispersions de cultures se faisaient à l’intérieur des continents et non entre eux. D’après World History Encyclopedia, il y eut une diffusion vers l’Océanie depuis l’Asie du Sud-Est, mais peu de mouvements entre les hémisphères. Lorsque Christophe Colomb arrive dans le Nouveau Monde en 1492, les agriculteurs des deux hémisphères cultivent des ensembles de plantes complètement différents.',
            'L’homogénéisation des cultures du monde commence avec Colomb et d’autres explorateurs espagnols et portugais, qui rapportent en Europe la pomme de terre, le piment et le maïs, ainsi que la tomate, les haricots, le manioc, le cacao et l’arachide. Les colons européens tentent de transférer tout le système agricole européen dans le Nouveau Monde.',
            'En Mésoamérique, en Amérique centrale et dans la région andine, les Espagnols introduisent l’orge, le pois chiche, le concombre, la figue et le blé, domestiqués au Proche-Orient, la canne à sucre et les agrumes d’Asie du Sud-Est, la pêche de Chine, les melons d’Afrique, ainsi que le chou, la laitue, la vigne et l’oignon de Méditerranée. Au Brésil, les Portugais introduisent le pois chiche, la fève, la figue et le blé du Proche-Orient, la canne à sucre et la banane d’Asie du Sud-Est, la pêche de Chine, le sorgho d’Afrique et la vigne de Méditerranée.',
            'Aujourd’hui, les peuples du monde dépendent souvent de cultures domestiquées loin de chez eux. L’Europe et l’Amérique du Nord s’appuient sur un ensemble de plantes du monde entier, dont le blé et l’orge du Proche-Orient, le maïs de Mésoamérique, la pomme de terre d’Amérique du Sud et le soja de Chine. En Afrique, le sorgho, le mil et l’igname d’origine ont été en grande partie remplacés par le maïs, le manioc, la patate douce et la banane. Selon World History Encyclopedia, l’agriculture mondiale a été bouleversée au cours des 500 dernières années. Un autre article de la même encyclopédie rappelle aussi des conséquences négatives de ces transferts : déforestation, traite des esclaves, et standardisation des pratiques agricoles autour de quelques espèces.'
          ],
          example: {
            statement: 'Christophe Colomb arrive dans le Nouveau Monde en 1492. Combien d’années se sont écoulées jusqu’en 2026 ?',
            calculation: 'On soustrait : 2 026 − 1 492 = 534.',
            answer: '534 ans, soit plus de 500 ans, ce qui correspond à l’expression « les 500 dernières années » utilisée par World History Encyclopedia.'
          },
          exercise: {
            question: 'Pourquoi l’année 1492 marque-t-elle un tournant pour les cultures du monde ?',
            answer: 'Parce que, avant cette date, les agriculteurs des deux hémisphères cultivaient des ensembles de plantes complètement différents ; après l’arrivée de Colomb, les cultures et les animaux ont circulé entre l’Ancien et le Nouveau Monde.'
          },
          exercises: [
            {
              question: 'Citez trois plantes que les Européens rapportent des Amériques.',
              answer: 'Par exemple la pomme de terre, le maïs et le piment (ou encore la tomate, les haricots, le manioc, le cacao, l’arachide).'
            },
            {
              question: 'Quelles céréales du Proche-Orient les Espagnols introduisent-ils dans les Amériques ?',
              answer: 'L’orge et le blé, avec aussi le pois chiche, le concombre et la figue.'
            },
            {
              question: 'Quelles conséquences négatives World History Encyclopedia cite-t-elle pour ces transferts de cultures ?',
              answer: 'La déforestation, la traite des esclaves et la standardisation des pratiques agricoles autour de quelques espèces.'
            }
          ],
          sources: [
            { title: 'World History Encyclopedia — Origins of World Agriculture', url: 'https://www.worldhistory.org/article/1886/origins-of-world-agriculture/' },
            { title: 'World History Encyclopedia — First Agricultural Revolution', url: 'https://www.worldhistory.org/First_Agricultural_Revolution/' }
          ]
        }
      },
      {
        id: 'revolution-agricole-britannique',
        title: 'La révolution agricole britannique : rotation des cultures et semoir',
        field: 'Agriculture · Europe moderne · XVIIIe – XIXe siècles',
        summary: 'Étudier la transformation de l’agriculture britannique, le système de Norfolk, le semoir de Jethro Tull et les limites de l’histoire des « grands hommes ».',
        lesson: {
          sections: [
            'Selon Britannica, la révolution agricole est la transformation graduelle du système agricole traditionnel qui a commencé en Grande-Bretagne au XVIIIe siècle et qui n’était pas achevée avant le XIXe siècle. Elle comprend la redistribution des propriétés foncières pour rendre les exploitations plus compactes, des investissements accrus dans des améliorations techniques (nouvelles machines, meilleur drainage), des méthodes scientifiques d’élevage et l’expérimentation de nouvelles cultures et de nouveaux systèmes de rotation. Britannica la qualifie de prélude essentiel à la révolution industrielle.',
            'Parmi ces nouveaux systèmes figure la rotation de Norfolk à quatre ans, qui mettait l’accent sur les plantes fourragères et supprimait l’année de jachère jusque-là habituelle. Le blé était cultivé la première année et les navets la deuxième, puis l’orge la troisième, avec du trèfle et du ray-grass semés sous couvert. Le trèfle et le ray-grass étaient fauchés pour le fourrage ou pâturés la quatrième année ; en hiver, bovins et moutons étaient nourris avec les navets. L’élevage sélectif est illustré par la création des bovins Shorthorn à partir du bétail local du district de Teeswater, dans le comté de Durham.',
            'Jethro Tull (1674–1741) est un agriculteur et écrivain anglais. Vers 1701, sur la ferme de son père dans l’Oxfordshire, il perfectionne un semoir tiré par un cheval qui sème économiquement les graines en lignes bien nettes, ce qui constitue un progrès notable par rapport à la pratique courante de les disperser à la main. Il a aussi mis au point une houe tirée par un cheval, et publié en 1731 un ouvrage sur la culture avec ces outils. Ses méthodes ont d’abord été violemment attaquées, puis adoptées par de grands propriétaires, selon Britannica.',
            'Britannica note que l’historiographie qui mettait l’accent sur les contributions de « grands hommes » a perdu beaucoup de son influence, même si les noms de Jethro Tull et d’Arthur Young sont encore souvent évoqués pour comprendre l’importance de cette révolution. Il faut donc éviter d’attribuer ces changements à quelques inventeurs : il s’agit d’un processus long et complexe, mêlant organisation foncière, techniques, élevage et expérimentation, plutôt que d’une rupture soudaine.'
          ],
          example: {
            statement: 'Jethro Tull perfectionne son semoir vers 1701 et publie son ouvrage sur la culture à la houe tirée par un cheval en 1731. Combien d’années séparent ces deux dates ?',
            calculation: 'On soustrait : 1 731 − 1 701 = 30.',
            answer: '30 ans : l’invention et la diffusion de ses idées s’étalent sur une génération.'
          },
          exercise: {
            question: 'Quelles cultures composaient la rotation de Norfolk à quatre ans, et que supprimait-elle ?',
            answer: 'Blé, navets, orge avec trèfle et ray-grass semés sous couvert, puis trèfle et ray-grass fauchés ou pâturés ; la rotation supprimait la jachère.'
          },
          exercises: [
            {
              question: 'Quand la révolution agricole britannique commence-t-elle, et quand s’achève-t-elle, selon Britannica ?',
              answer: 'Elle commence au XVIIIe siècle en Grande-Bretagne et n’est pas achevée avant le XIXe siècle.'
            },
            {
              question: 'Quel progrès apporte le semoir de Jethro Tull ?',
              answer: 'Il sème économiquement les graines en lignes régulières, alors que l’usage courant était de les disperser à la main.'
            },
            {
              question: 'Pourquoi l’histoire des « grands hommes » est-elle aujourd’hui critiquée pour cette période ?',
              answer: 'Parce que la révolution agricole fut un processus complexe et graduel qui ne se réduit pas aux contributions de quelques personnes comme Tull ou Young.'
            }
          ],
          sources: [
            { title: 'Britannica — Agricultural revolution', url: 'https://www.britannica.com/print/article/1364342' },
            { title: 'Britannica — Jethro Tull', url: 'https://www.britannica.com/biography/Jethro-Tull' }
          ]
        }
      },
      {
        id: 'revolution-verte',
        title: 'La révolution verte : blés et riz à haut rendement',
        field: 'Agriculture · Époque contemporaine · 1944 – années 1970',
        summary: 'Comprendre les variétés semi-naines, le rôle de Norman Borlaug, les résultats au Mexique, en Inde et au Pakistan, et les conditions de ce succès.',
        lesson: {
          sections: [
            'La révolution verte désigne l’augmentation notable de la production de céréales au Mexique, en Inde, au Pakistan, aux Philippines et dans d’autres pays en développement dans les années 1960 et 1970, selon Encyclopedia.com. Elle repose sur la sélection de variétés à haut rendement et sur de nouvelles pratiques agricoles. Elle est associée à l’agronome américain Norman Borlaug (1914–2009), souvent appelé le père de la révolution verte.',
            'En 1944, Borlaug prend la tête d’un programme de recherche sur le blé au Mexique, soutenu par la Fondation Rockefeller. Lui et son équipe passent près de 20 ans à sélectionner un blé semi-nain, à haut rendement et résistant aux maladies. Selon la notice biographique de la National Academy of Sciences, ces plantes semi-naines restent debout sous des apports accrus d’engrais et d’irrigation, ce qui augmente nettement les rendements. Le Mexique devient exportateur de blé en 1963.',
            'À partir de 1965, une campagne massive expédie ce blé en Inde et au Pakistan, où les agriculteurs locaux sont formés aux bonnes méthodes de culture. Entre 1965 et 1970, les rendements de blé ont presque doublé dans ces deux pays, d’après la même notice. Encyclopedia.com chiffre la production de blé du Pakistan à 4,6 millions de tonnes en 1965 et à 8,4 millions de tonnes en 1970, et celle de l’Inde à 12,3 puis 20 millions de tonnes.',
            'La révolution verte concerne aussi le riz. À l’Institut international de recherche sur le riz (IRRI), une lignée de riz semi-nain devient en 1966 la variété IR8, surnommée « riz miracle » et créditée de doubler les rendements. Norman Borlaug reçoit le prix Nobel de la paix en 1970, la seule fois où ce prix a été attribué pour l’agriculture et la production alimentaire. Les sources soulignent toutefois les conditions de ce succès : les variétés exigeaient plus d’engrais et d’irrigation, et les pays bénéficiaires avaient des gouvernements relativement stables et des infrastructures assez développées.'
          ],
          example: {
            statement: 'Encyclopedia.com indique que la production de blé du Pakistan passe de 4,6 millions de tonnes en 1965 à 8,4 millions de tonnes en 1970. Quel est le rapport entre ces deux valeurs ?',
            calculation: 'On divise : 8,4 / 4,6 ≈ 1,8.',
            answer: 'La production est multipliée par environ 1,8, soit presque un doublement.'
          },
          exercise: {
            question: 'Pourquoi les variétés de blé semi-naines étaient-elles importantes pour la révolution verte ?',
            answer: 'Parce que leurs plantes courtes restent debout sous des apports accrus d’engrais et d’irrigation, ce qui permet d’augmenter nettement les rendements.'
          },
          exercises: [
            {
              question: 'En quelle année le Mexique devient-il exportateur de blé, selon la notice de la National Academy of Sciences ?',
              answer: 'En 1963.'
            },
            {
              question: 'En quelle année Norman Borlaug reçoit-il le prix Nobel de la paix ?',
              answer: 'En 1970.'
            },
            {
              question: 'De quelles conditions le succès de la révolution verte dépendait-il aussi ?',
              answer: 'D’apports d’engrais et d’irrigation, et d’une certaine stabilité politique et d’infrastructures relativement développées dans les pays bénéficiaires.'
            }
          ],
          sources: [
            { title: 'National Academy of Sciences — Norman E. Borlaug (Biographical Memoir)', url: 'https://www.nasonline.org/wp-content/uploads/2024/06/borlaug-norman.pdf' },
            { title: 'Auburn University — Norman E. Borlaug, Nobel Peace Prize Laureate', url: 'https://iqla.auburn.edu/borlaug.php' },
            { title: 'Encyclopedia.com — Green Revolution', url: 'https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/green-revolution' },
            { title: 'Banglapedia — Green Revolution', url: 'https://en.banglapedia.org/index.php/Green_Revolution' }
          ]
        }
      }
    ]
  },

{
  id: 'Commerce-ocean-indien',
  sortYear: -3000,
  title: 'Le commerce dans l’océan Indien',
  note: 'Cinq chapitres retracent les échanges maritimes de l’océan Indien, des premiers contacts entre les sociétés riveraines aux réseaux commerciaux de la fin du Moyen Âge et à l’arrivée des puissances européennes. Le repère sortYear = -3000 sert uniquement au classement chronologique : il ne date pas la naissance simultanée d’un réseau commercial unifié. Les itinéraires, les marchandises et les acteurs changent selon les périodes et les régions.',
  chapters: [
    {
      id: 'premiers-echanges-ocean-indien',
      title: 'Les premiers échanges entre l’Arabie, la Mésopotamie et l’Indus',
      field: 'Histoire ancienne · IIIe millénaire av. J.-C. et périodes suivantes, selon les régions',
      summary: 'Étudier les contacts anciens entre les sociétés riveraines et comprendre pourquoi il faut distinguer les échanges attestés de l’existence d’un réseau maritime continu.',
      lesson: {
        sections: [
          'L’océan Indien n’a pas été parcouru dès l’origine par un système commercial unique reliant toutes ses côtes. Les échanges se sont construits progressivement, à partir de relations régionales entre les communautés de la péninsule Arabique, de la Mésopotamie et de la vallée de l’Indus. Les sources de synthèse de l’UNESCO situent les liens maritimes entre ces espaces parmi les racines anciennes des routes commerciales reliant ensuite des régions plus éloignées. Il faut cependant éviter de transformer ce constat en une date de naissance précise valable pour tout l’océan Indien.',
          'Les marchandises circulaient par plusieurs étapes : un produit pouvait être transporté depuis son lieu de production vers un port, échangé avec des marchands d’une autre région, puis revendu ailleurs. Les routes maritimes étaient ainsi reliées aux circuits terrestres et aux marchés locaux. Un objet retrouvé loin de sa région d’origine peut témoigner d’un échange direct, mais aussi d’une succession d’intermédiaires ; l’archéologie ne permet pas toujours de déterminer le parcours exact.',
          'Pour reconstituer ces échanges, les historiens confrontent les vestiges archéologiques, les objets importés, les inscriptions et les textes anciens. Chaque type de source a ses limites : les textes ne décrivent qu’une partie des activités, tandis qu’un objet isolé ne prouve pas nécessairement l’existence d’un commerce régulier. Une chronologie prudente distingue donc les contacts possibles, les échanges attestés et les réseaux dont l’ampleur est mieux documentée.'
        ],
        example: {
          statement: 'Un objet fabriqué dans une région est découvert dans un port éloigné. Que peut-on en conclure ?',
          calculation: 'On compare sa matière, sa fabrication, son contexte archéologique et les autres objets retrouvés. On recherche ensuite des textes ou d’autres découvertes qui confirment l’existence d’échanges.',
          answer: 'La découverte peut indiquer un contact ou une circulation de biens, mais elle ne prouve pas à elle seule un trajet direct ni un commerce permanent entre les deux lieux.'
        },
        exercise: {
          question: 'Pourquoi faut-il éviter de donner une date unique à la naissance du commerce dans tout l’océan Indien ?',
          answer: 'Parce que les échanges se sont développés progressivement et différemment selon les régions ; les preuves disponibles ne permettent pas de dater un réseau unique apparu partout au même moment.'
        },
        exercises: [
          {
            question: 'Quelles régions sont citées par l’UNESCO parmi les espaces liés par d’anciens échanges maritimes ?',
            answer: 'La péninsule Arabique, la Mésopotamie et la civilisation de la vallée de l’Indus.'
          },
          {
            question: 'Un objet importé prouve-t-il nécessairement un voyage direct entre son lieu de fabrication et son lieu de découverte ?',
            answer: 'Non. Il a pu passer par plusieurs ports et intermédiaires.'
          },
          {
            question: 'Pourquoi les historiens croisent-ils les données archéologiques et les textes ?',
            answer: 'Parce que chaque source apporte des informations différentes et possède ses propres limites ; leur comparaison permet de tester les interprétations.'
          }
        ],
        sources: [
          {
            title: 'UNESCO — About the Silk Roads',
            url: 'https://www.unesco.org/en/silk-roads/about-silk-roads'
          },
          {
            title: 'Oxford Academic — The Archaeological Record of Indian Ocean Engagements: Bay of Bengal (5000 BC–500 AD)',
            url: 'https://academic.oup.com/edited-volume/43506/chapter/364133129'
          }
        ]
      }
    },
    {
      id: 'moussons-navigation-routes',
      title: 'Les moussons, la navigation et les itinéraires maritimes',
      field: 'Histoire maritime · Antiquité et périodes médiévales',
      summary: 'Comprendre comment les vents saisonniers, les connaissances nautiques et les escales rendaient possibles les traversées entre les rives de l’océan Indien.',
      lesson: {
        sections: [
          'Les moussons sont des régimes de vents saisonniers qui influencent les conditions de navigation dans l’océan Indien. En choisissant le moment du départ en fonction des vents, les marins pouvaient effectuer certaines traversées plus efficacement. Le rôle de ces conditions climatiques est documenté dans les recherches consacrées au commerce de l’âge du Fer, notamment par l’étude des routes décrites dans le Périple de la mer Érythrée. Cela ne signifie pas que chaque voyage était simple ou sans danger : les délais, les vents, l’état des navires et les risques de mer continuaient de compter.',
          'Les navigateurs s’appuyaient sur l’expérience accumulée, l’observation du ciel, des côtes et des conditions météorologiques, ainsi que sur les caractéristiques des navires. Les techniques et les connaissances n’étaient pas identiques partout et ont évolué au fil des siècles. Il faut donc éviter d’attribuer à toutes les sociétés maritimes une méthode de navigation unique ou de supposer que les mêmes instruments étaient disponibles à toutes les époques.',
          'Les ports et les escales étaient essentiels à l’organisation des voyages. Ils permettaient de charger et décharger les marchandises, d’obtenir des provisions, de réparer les navires et de rencontrer des partenaires commerciaux. Les itinéraires formaient un réseau flexible plutôt qu’une seule route fixe : les marchands pouvaient vendre une cargaison dans un port intermédiaire et en acheter une autre pour la suite du voyage. La circulation maritime reliait ainsi des économies locales sans que chaque navire parcoure nécessairement toute la distance entre l’Afrique orientale et l’Asie.'
        ],
        example: {
          statement: 'Pourquoi un marchand devait-il tenir compte de la saison avant de traverser une partie de l’océan Indien ?',
          calculation: 'Il devait comparer la période du voyage aux vents saisonniers attendus, tout en tenant compte de la durée de navigation, des escales possibles et des risques météorologiques.',
          answer: 'Parce que les moussons pouvaient favoriser certains sens de navigation à certaines périodes. Le choix du départ influençait la durée et la faisabilité du voyage, sans garantir une traversée sans danger.'
        },
        exercise: {
          question: 'Comment les moussons ont-elles contribué au développement du commerce maritime ?',
          answer: 'Leur caractère saisonnier permettait aux navigateurs de planifier des traversées en profitant de vents favorables, ce qui rendait certains échanges à longue distance plus praticables.'
        },
        exercises: [
          {
            question: 'Quel document antique est utilisé dans des recherches récentes pour étudier les routes et les produits du commerce de l’océan Indien ?',
            answer: 'Le Périple de la mer Érythrée, un texte antique qui décrit des côtes, des ports et des marchandises.'
          },
          {
            question: 'Les moussons supprimaient-elles tous les risques en mer ?',
            answer: 'Non. Elles influençaient les conditions de navigation, mais les voyages restaient exposés aux dangers et aux incertitudes.'
          },
          {
            question: 'Pourquoi les escales étaient-elles utiles aux marchands ?',
            answer: 'Elles permettaient notamment de ravitailler les navires, de réparer, de vendre ou d’acheter des marchandises et de nouer des relations commerciales.'
          }
        ],
        sources: [
          {
            title: 'Economic History Review — Riding the monsoon: Geography and Iron Age trade in the Indian Ocean (2025)',
            url: 'https://onlinelibrary.wiley.com/doi/10.1111/ehr.70016'
          },
          {
            title: 'UNESCO — About the Silk Roads',
            url: 'https://www.unesco.org/en/silk-roads/about-silk-roads'
          }
        ]
      }
    },
    {
      id: 'marchandises-ports-antiquite',
      title: 'Les marchandises et les grands ports de l’Antiquité',
      field: 'Antiquité · En particulier Ier siècle av. J.-C. au VIe siècle apr. J.-C.',
      summary: 'Identifier les produits échangés et le rôle des ports dans les relations entre l’Afrique orientale, l’Arabie, l’Inde et les mondes méditerranéens.',
      lesson: {
        sections: [
          'À l’époque antique, le commerce de l’océan Indien reliait des régions aux ressources et aux productions différentes. Les sources mentionnent notamment des textiles, des épices, des aromates, des pierres précieuses, de l’ivoire, des métaux et des produits alimentaires. La répartition exacte des marchandises dépendait du port et de la période : une liste générale ne doit pas être comprise comme un inventaire valable pour chaque lieu ou chaque siècle.',
          'Le Périple de la mer Érythrée, texte grec généralement daté du Ier siècle apr. J.-C., décrit des itinéraires côtiers et des échanges autour de la mer Rouge, de l’Afrique orientale et de l’Inde. Il est particulièrement utile parce qu’il associe des ports à des produits importés ou exportés. Il reste toutefois un témoignage situé, rédigé dans un contexte commercial particulier ; il ne décrit pas toutes les sociétés de l’océan Indien et ses indications ne permettent pas toujours de mesurer précisément les volumes ou la valeur des échanges.',
          'Les échanges entre le monde romain et l’Inde ont pris une ampleur notable durant les premiers siècles de notre ère, mais il est réducteur de raconter cette histoire comme si Rome en avait été le seul moteur. Les producteurs, navigateurs, négociants et autorités des régions africaines, arabiques et asiatiques avaient leurs propres intérêts et participaient activement aux échanges. Les travaux récents recommandent de replacer les acteurs de l’océan Indien au centre de l’analyse plutôt que de considérer le commerce uniquement depuis le point de vue romain.'
        ],
        example: {
          statement: 'Un historien veut connaître les marchandises échangées dans un port antique. Quelle source écrite peut-il comparer aux découvertes archéologiques ?',
          calculation: 'Il peut examiner les descriptions de ports et de marchandises dans le Périple de la mer Érythrée, puis les confronter aux objets et aux contextes archéologiques locaux.',
          answer: 'Le Périple est une source utile, mais ses informations doivent être confrontées à l’archéologie et à d’autres travaux, car il ne décrit qu’une partie des échanges.'
        },
        exercise: {
          question: 'Pourquoi faut-il éviter de présenter le commerce antique de l’océan Indien comme une activité contrôlée uniquement par Rome ?',
          answer: 'Parce que les sociétés riveraines, les producteurs, les marins et les marchands d’Afrique, d’Arabie et d’Asie jouaient eux aussi des rôles essentiels dans la production, le transport et la redistribution des biens.'
        },
        exercises: [
          {
            question: 'Quel est l’intérêt principal du Périple de la mer Érythrée pour les historiens du commerce ?',
            answer: 'Il décrit des routes côtières, des ports et des marchandises échangées dans une partie de l’océan Indien antique.'
          },
          {
            question: 'Cite trois catégories de produits mentionnées dans les sources sur ces échanges antiques.',
            answer: 'Par exemple : textiles, épices et aromates. D’autres produits attestés comprennent l’ivoire, les pierres précieuses et certains métaux.'
          },
          {
            question: 'Pourquoi une source écrite antique ne suffit-elle pas à reconstruire tout le réseau commercial ?',
            answer: 'Elle reflète un point de vue et un contexte particuliers et peut omettre des régions, des acteurs ou des échanges.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Indian Ocean Trade before the European Conquest',
            url: 'https://www.worldhistory.org/article/1800/indian-ocean-trade-before-the-european-conquest/'
          },
          {
            title: 'Economic History Review — Riding the monsoon: Geography and Iron Age trade in the Indian Ocean (2025)',
            url: 'https://onlinelibrary.wiley.com/doi/10.1111/ehr.70016'
          },
          {
            title: 'Cambridge University Press — Indian Ocean Trade in the First Millennium c.e.: Taking the Romans out of Indo-Roman? (2025)',
            url: 'https://www.cambridge.org/core/journals/journal-of-roman-studies/article/abs/indian-ocean-trade-in-the-first-millennium-ce-taking-the-romans-out-of-indoroman/6254877B05C32F83C6CC9B1F93BF5C7F'
          }
        ]
      }
    },
    {
      id: 'reseaux-medievaux-afrique-asie',
      title: 'Les réseaux médiévaux : côte swahilie, Inde et Asie du Sud-Est',
      field: 'Moyen Âge · Du IXe au XVe siècle, avec des évolutions selon les ports',
      summary: 'Étudier l’essor de villes portuaires africaines et asiatiques et les échanges de marchandises, de populations et de pratiques culturelles.',
      lesson: {
        sections: [
          'À partir du Moyen Âge, plusieurs villes de la côte orientale de l’Afrique participent activement au commerce de l’océan Indien. Kilwa Kisiwani et Songo Mnara, sur le littoral de l’actuelle Tanzanie, témoignent de la prospérité de villes swahilies dont les échanges reliaient l’arrière-pays africain à l’Arabie, à l’Inde et à la Chine. L’UNESCO situe l’occupation de Kilwa Kisiwani du IXe au XIXe siècle et souligne l’importance de son activité commerciale, particulièrement aux XIIIe et XIVe siècles.',
          'Les marchandises issues de l’intérieur du continent pouvaient rejoindre les ports avant d’être échangées contre des produits importés. Pour Kilwa, l’UNESCO mentionne notamment l’or et l’ivoire provenant de l’arrière-pays, ainsi que l’argent, les parfums, des céramiques persanes et la porcelaine chinoise parmi les biens associés aux échanges. Ces flux dépendaient de réseaux terrestres, de producteurs et de communautés locales autant que de la navigation au large. Les ports n’étaient donc pas de simples escales : ils étaient des centres urbains, politiques et économiques.',
          'Plus à l’est, les ports de l’Inde et de l’Asie du Sud-Est reliaient les échanges de l’océan Indien à ceux de la mer de Chine méridionale. Le détroit de Malacca était un passage stratégique entre ces espaces, tandis que les ports de la côte indienne redistribuaient des textiles, des épices et d’autres marchandises. Les routes changeaient selon les saisons, les pouvoirs politiques, les besoins des marchés et la sécurité des passages. Il est donc plus juste de parler d’un ensemble de réseaux reliés entre eux que d’une seule route uniforme.',
          'Les relations commerciales favorisaient aussi la circulation des langues, des croyances et des savoir-faire. Des communautés de marchands s’établissaient parfois loin de leur région d’origine et participaient à la vie des villes portuaires. L’islam s’est implanté dans plusieurs sociétés de l’océan Indien par des processus historiques variés, parmi lesquels les échanges et les migrations. Ces transformations ne doivent pas être réduites à une conversion uniforme ou exclusivement provoquée par le commerce : les trajectoires différaient selon les sociétés et les périodes.'
        ],
        example: {
          statement: 'Les fouilles d’une ville portuaire révèlent des céramiques importées, des bâtiments religieux et des traces de production locale. Que peut suggérer cet ensemble ?',
          calculation: 'On examine la datation des objets et des bâtiments, leur provenance probable et leur contexte, puis on compare ces indices aux sources historiques.',
          answer: 'Ces vestiges peuvent montrer que la ville était connectée à des réseaux commerciaux et culturels, tout en possédant une activité locale. Les conclusions précises dépendent de la datation et du contexte archéologique.'
        },
        exercise: {
          question: 'Que nous apprennent les ruines de Kilwa Kisiwani et de Songo Mnara sur le commerce médiéval ?',
          answer: 'Elles témoignent de villes swahilies prospères, reliées par le commerce à l’arrière-pays africain ainsi qu’à l’Arabie, à l’Inde et à la Chine.'
        },
        exercises: [
          {
            question: 'Sur quel littoral se trouvent Kilwa Kisiwani et Songo Mnara ?',
            answer: 'Sur la côte de l’actuelle Tanzanie, en Afrique orientale.'
          },
          {
            question: 'Cite deux marchandises provenant de l’arrière-pays africain et échangées par Kilwa selon l’UNESCO.',
            answer: 'L’or et l’ivoire.'
          },
          {
            question: 'Pourquoi les ports médiévaux étaient-ils aussi des centres culturels ?',
            answer: 'Parce que marchands, marins et migrants s’y rencontraient, favorisant les échanges de langues, de croyances, de techniques et de pratiques.'
          }
        ],
        sources: [
          {
            title: 'UNESCO World Heritage Centre — Ruins of Kilwa Kisiwani and Ruins of Songo Mnara',
            url: 'https://whc.unesco.org/en/list/144/'
          },
          {
            title: 'World History Encyclopedia — Indian Ocean Trade before the European Conquest',
            url: 'https://www.worldhistory.org/article/1800/indian-ocean-trade-before-the-european-conquest/'
          },
          {
            title: 'UNESCO — About the Silk Roads',
            url: 'https://www.unesco.org/en/silk-roads/about-silk-roads'
          }
        ]
      }
    },
    {
      id: 'arrivee-europeens-transformations',
      title: 'L’arrivée des Européens et les transformations du commerce',
      field: 'Fin du XVe siècle et XVIe siècle · Expansion maritime européenne',
      summary: 'Distinguer l’existence ancienne des réseaux de l’océan Indien des tentatives européennes pour s’y insérer, les contrôler ou en détourner une partie des échanges.',
      lesson: {
        sections: [
          'Lorsque les navigateurs portugais atteignent l’océan Indien à la fin du XVe siècle, ils rencontrent des réseaux marchands déjà actifs et anciens. L’article de World History Encyclopedia rappelle que les ports et les marchands d’Afrique orientale, d’Arabie, d’Inde et d’Asie du Sud-Est entretenaient déjà des échanges étendus. L’arrivée européenne ne marque donc pas le commencement du commerce dans cet océan ; elle constitue une nouvelle phase dans l’histoire de réseaux préexistants.',
          'Les Portugais cherchent notamment à accéder directement aux marchandises recherchées en Europe et à peser sur les routes maritimes. Au XVIe siècle, ils établissent des positions dans plusieurs ports, dont Cochin et Goa en Inde. L’usage de la force navale et la construction de places fortifiées leur permettent d’imposer certaines contraintes à la navigation et au commerce. Toutefois, ces interventions ne signifient pas que les Européens ont immédiatement contrôlé l’ensemble de l’océan Indien : les marchands et les pouvoirs locaux continuent d’y jouer des rôles importants.',
          'Les conséquences varient selon les régions et les périodes. Certains ports gagnent ou perdent de l’importance, les autorités négocient ou combattent, et les commerçants adaptent leurs itinéraires. Il ne faut donc pas résumer cette histoire à un remplacement instantané des réseaux asiatiques par un système européen. Pour analyser cette période, les historiens examinent les continuités, les changements de pouvoir, les formes de coercition et la capacité des acteurs locaux à maintenir ou réorganiser leurs activités.'
        ],
        example: {
          statement: 'Un manuel affirme que les Européens ont créé le commerce de l’océan Indien à la fin du XVe siècle. Comment corriger cette affirmation ?',
          calculation: 'On compare cette affirmation aux témoignages sur les échanges anciens, aux sources médiévales et aux vestiges des ports antérieurs à l’arrivée portugaise.',
          answer: 'L’affirmation est incorrecte : les réseaux commerciaux de l’océan Indien existaient bien avant l’arrivée des Portugais. Leur arrivée a modifié certains rapports de force et itinéraires, sans créer ces échanges.'
        },
        exercise: {
          question: 'Pourquoi l’arrivée des Portugais ne doit-elle pas être présentée comme le début du commerce dans l’océan Indien ?',
          answer: 'Parce que des réseaux maritimes et portuaires reliant l’Afrique orientale, l’Arabie, l’Inde et l’Asie existaient depuis longtemps ; les Portugais sont intervenus dans ces réseaux déjà établis.'
        },
        exercises: [
          {
            question: 'Quel objectif commercial important poussait les Portugais à rechercher une route maritime vers l’océan Indien ?',
            answer: 'Accéder aux marchandises recherchées en Europe, notamment aux épices, et participer plus directement à leur commerce.'
          },
          {
            question: 'Cite deux ports indiens où les Portugais ont établi des positions au début de leur expansion dans l’océan Indien.',
            answer: 'Cochin et Goa.'
          },
          {
            question: 'L’intervention européenne a-t-elle fait disparaître immédiatement tous les réseaux marchands préexistants ?',
            answer: 'Non. Les effets ont varié selon les régions ; les marchands et pouvoirs locaux ont continué à participer aux échanges et à adapter leurs stratégies.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Indian Ocean Trade before the European Conquest',
            url: 'https://www.worldhistory.org/article/1800/indian-ocean-trade-before-the-european-conquest/'
          },
          {
            title: 'UNESCO World Heritage Centre — Ruins of Kilwa Kisiwani and Ruins of Songo Mnara',
            url: 'https://whc.unesco.org/en/list/144/'
          },
          {
            title: 'Cambridge University Press — Indian Ocean Trade in the First Millennium c.e.: Taking the Romans out of Indo-Roman? (2025)',
            url: 'https://www.cambridge.org/core/journals/journal-of-roman-studies/article/abs/indian-ocean-trade-in-the-first-millennium-ce-taking-the-romans-out-of-indoroman/6254877B05C32F83C6CC9B1F93BF5C7F'
          }
        ]
      }
    }
  ]
},

{
  id: 'histoire-chine-ancienne',
  sortYear: -2070,
  title: 'Chine ancienne',
  note: 'Six chapitres sur les sociétés anciennes de Chine, des premières dynasties aux Han (vers 2070 av. J.-C. à 220 apr. J.-C.). Les dates des Xia sont traditionnelles et leur identification historique demeure discutée ; les dates des Shang et des Zhou sont également approximatives selon les chronologies retenues. La Chine ancienne ne constitue pas une histoire uniforme : les pouvoirs, les pratiques et les cultures varient selon les régions.',
  chapters: [
    {
      id: 'premieres-societes-et-dynastie-xia',
      title: 'Des premières sociétés agricoles à la dynastie Xia',
      field: 'Chine ancienne · Néolithique et premières traditions dynastiques, avant environ 1600 av. J.-C.',
      summary: 'Étudier la diversité des sociétés néolithiques, l’essor de l’agriculture et des villages, puis distinguer les traditions relatives aux Xia des preuves archéologiques disponibles.',
      lesson: {
        sections: [
          'Le territoire correspondant à la Chine actuelle a accueilli, dès la préhistoire, des sociétés différentes selon les milieux et les régions. Dans le nord, le bassin du fleuve Jaune a notamment favorisé la culture de céréales comme le millet ; dans plusieurs régions du sud, les populations ont développé des systèmes agricoles adaptés à des environnements plus humides, dont la riziculture. Ces évolutions ne se sont pas produites partout au même moment et ne résultent pas d’un unique centre culturel. Les communautés pratiquaient aussi l’élevage, la chasse, la pêche, la collecte et des échanges de matières premières.',
          'Au Néolithique, certains villages deviennent plus importants et les vestiges montrent des activités spécialisées : fabrication de poteries, outils de pierre, travail des matières premières, stockage et pratiques funéraires. Le site de Banpo, près de l’actuelle Xi’an, est un exemple de village néolithique associé à la culture de Yangshao, généralement datée du Ve millénaire av. J.-C. Il renseigne sur l’habitat, la céramique et les activités agricoles d’une communauté, mais ne représente pas à lui seul l’ensemble des sociétés de la Chine préhistorique. Les différences régionales doivent rester au centre de l’interprétation.',
          'La dynastie Xia est traditionnellement placée vers 2070–1600 av. J.-C. dans certaines chronologies chinoises. Les récits anciens associent notamment Yu le Grand à la maîtrise des crues et à la fondation de la dynastie. Cependant, aucun ensemble d’inscriptions contemporaines unanimement identifié ne permet de relier de manière certaine la dynastie Xia des textes à une entité politique précise. Le site d’Erlitou, dans le bassin du fleuve Jaune et daté approximativement du IIe millénaire av. J.-C., révèle une société hiérarchisée avec des bâtiments, des ateliers et des objets de prestige. Certains chercheurs le rapprochent des Xia, mais cette identification n’est pas un fait définitivement établi.',
          'Pour étudier cette période, il faut comparer les récits rédigés plus tard avec les données matérielles : habitats, sépultures, objets, restes alimentaires et organisation des sites. Un récit traditionnel est une source importante pour comprendre la mémoire historique et les idées politiques d’époques ultérieures, mais il ne constitue pas automatiquement une preuve contemporaine des événements qu’il décrit. Cette distinction entre tradition, hypothèse archéologique et fait solidement documenté est essentielle pour construire une chronologie fiable.'
        ],
        example: {
          statement: 'Une frise indique la date traditionnelle de 2070 av. J.-C. pour le début des Xia et une date d’environ 1600 av. J.-C. pour leur fin. Comment faut-il interpréter ces repères ?',
          calculation: 'En chronologie av. J.-C., une date portant un nombre plus élevé est plus ancienne. L’écart arithmétique entre 2070 et 1600 est de 470 ans, mais les deux bornes restent des repères traditionnels approximatifs.',
          answer: 'La chronologie traditionnelle situe les Xia avant les Shang et leur attribue environ 470 ans. Cette durée ne doit pas être présentée comme une mesure historique certaine, car l’identification des Xia demeure discutée.'
        },
        exercise: {
          question: 'Pourquoi faut-il distinguer les récits traditionnels sur les Xia des données archéologiques ?',
          answer: 'Parce que les récits conservés ont été rédigés ou transmis dans des contextes ultérieurs, tandis que l’archéologie étudie les vestiges matériels. Les deux types de sources peuvent être comparés, mais ils ne prouvent pas automatiquement la même chose.'
        },
        exercises: [
          {
            question: 'Quel fleuve est particulièrement associé aux premières sociétés agricoles du nord de la Chine ?',
            answer: 'Le fleuve Jaune, même si d’autres régions et bassins fluviaux ont aussi développé leurs propres sociétés agricoles.'
          },
          {
            question: 'Le site d’Erlitou est-il identifié avec certitude comme la capitale des Xia ?',
            answer: 'Non. Erlitou est un site archéologique majeur, parfois rapproché des Xia, mais cette identification reste discutée.'
          },
          {
            question: 'Pourquoi Banpo ne suffit-il pas à représenter toutes les sociétés néolithiques de Chine ?',
            answer: 'Parce que les sociétés anciennes étaient diverses et que les pratiques agricoles, les habitats et les cultures matérielles variaient selon les régions.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Chine antique',
            url: 'https://www.worldhistory.org/trans/fr/1-467/chine-antique/'
          },
          {
            title: 'World History Encyclopedia — Chronologie visuelle des dynasties impériales de Chine',
            url: 'https://www.worldhistory.org/trans/fr/3-16125/chronologie-visuelle-des-dynasties-imperiales-de-c/'
          },
          {
            title: 'Encyclopaedia Britannica — Erlitou',
            url: 'https://www.britannica.com/place/Erlitou'
          }
        ]
      }
    },
    {
      id: 'dynastie-shang-ecriture-bronze-rituels',
      title: 'La dynastie Shang : écriture, bronze et pouvoir royal',
      field: 'Chine ancienne · Dynastie Shang, vers 1600–1046 av. J.-C.',
      summary: 'Comprendre ce que les inscriptions, les bronzes rituels et les sites archéologiques révèlent sur le pouvoir, la religion et l’organisation sociale des Shang.',
      lesson: {
        sections: [
          'La dynastie Shang est la première dynastie chinoise attestée de manière solide par des sources écrites et archéologiques convergentes. Elle est généralement datée d’environ 1600 à 1046 av. J.-C., avec des variations selon les chronologies. Son pouvoir était centré dans le nord de la Chine, dans la vallée du fleuve Jaune, et la cour changea plusieurs fois de résidence avant de s’établir à Anyang vers la fin de la période. Les fouilles y ont révélé des espaces palatiaux, des ateliers, des sépultures et des objets rituels qui indiquent une organisation politique hiérarchisée.',
          'Les inscriptions sur os et carapaces, souvent appelées os oraculaires, constituent une source capitale. Des spécialistes gravaient des questions destinées à la divination, notamment sur les récoltes, la météo, les campagnes militaires, les sacrifices ou la santé du souverain. Les inscriptions conservées documentent les préoccupations de la cour et certaines formes anciennes de l’écriture chinoise. Elles ne constituent toutefois pas un récit complet de la société : elles privilégient les intérêts royaux et religieux et ne donnent qu’un accès indirect à la vie quotidienne de la majorité de la population.',
          'La métallurgie du bronze atteint un haut niveau technique et artistique. Les artisans fabriquaient des récipients employés lors de cérémonies, ainsi que des armes et d’autres objets. La production nécessitait l’accès aux matières premières, des savoir-faire spécialisés et une organisation du travail. Les bronzes décorés témoignent à la fois d’une maîtrise technique et d’un système rituel dans lequel les ancêtres et les cérémonies royales occupaient une place importante. Il ne faut cependant pas supposer que tous les habitants possédaient ces objets : les pièces les plus élaborées sont surtout liées aux élites et aux contextes rituels.',
          'La royauté Shang associait le gouvernement, la guerre et les relations avec les puissances spirituelles. Les inscriptions mentionnent Di, des esprits et les ancêtres royaux, auxquels on attribuait une influence sur les événements. Les rites contribuaient à légitimer le souverain et à maintenir des liens entre la famille royale et ses ancêtres. Vers 1046 av. J.-C., les Zhou vainquirent les Shang selon la chronologie conventionnelle. Les récits ultérieurs expliquent ce changement par la perte de vertu du dernier roi Shang ; ils doivent être lus comme des traditions politiques, en les confrontant aux éléments matériels disponibles.'
        ],
        example: {
          statement: 'Une inscription Shang pose une question sur la réussite d’une récolte. Que peut-on raisonnablement en déduire ?',
          calculation: 'Il faut séparer l’observation de l’interprétation : l’inscription atteste que la récolte était une préoccupation de la cour et qu’une pratique divinatoire était utilisée. Elle ne prouve pas à elle seule que la récolte fut bonne ou mauvaise.',
          answer: 'L’inscription renseigne sur les préoccupations agricoles et religieuses du pouvoir Shang, mais sa réponse éventuelle doit être examinée avant de conclure sur l’issue réelle de la récolte.'
        },
        exercise: {
          question: 'Pourquoi les os oraculaires sont-ils essentiels à l’étude de la dynastie Shang ?',
          answer: 'Ils fournissent des inscriptions contemporaines qui documentent notamment la divination, les activités royales et une forme ancienne de l’écriture chinoise.'
        },
        exercises: [
          {
            question: 'Quels supports étaient couramment utilisés pour les inscriptions divinatoires Shang ?',
            answer: 'Des os d’animaux et des carapaces de tortue.'
          },
          {
            question: 'À quoi servaient notamment les récipients en bronze Shang ?',
            answer: 'À des usages rituels et cérémoniels, en particulier dans les pratiques liées aux ancêtres.'
          },
          {
            question: 'Les inscriptions royales décrivent-elles de façon complète la vie de tous les habitants ?',
            answer: 'Non. Elles reflètent principalement les préoccupations de la cour et ne documentent qu’indirectement la plupart des habitants.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Chine antique',
            url: 'https://www.worldhistory.org/trans/fr/1-467/chine-antique/'
          },
          {
            title: 'The Metropolitan Museum of Art — Oracle bone, Shang dynasty',
            url: 'https://www.metmuseum.org/art/collection/search/60696'
          },
          {
            title: 'Smithsonian National Museum of Asian Art — Shang dynasty',
            url: 'https://asia.si.edu/education/educator-resources/teaching-china-with-the-smithsonian/explore-by-dynasty/shang-dynasty-2/'
          },
          {
            title: 'The Metropolitan Museum of Art — The Arts of Ancient China',
            url: 'https://resources.metmuseum.org/resources/metpublications/pdf/The_Arts_of_Ancient_China_The_Metropolitan_Museum_of_Art_Bulletin_v_32_no_2_1973_1974.pdf'
          }
        ]
      }
    },
    {
      id: 'dynastie-zhou-mandat-du-ciel',
      title: 'La dynastie Zhou et le Mandat du Ciel',
      field: 'Chine ancienne · Zhou occidentaux vers 1046–771 av. J.-C. ; Zhou orientaux vers 771–256 av. J.-C.',
      summary: 'Étudier la légitimité politique des Zhou, l’évolution de leur autorité et les transformations qui conduisent à la fragmentation du pouvoir.',
      lesson: {
        sections: [
          'La dynastie Zhou succède aux Shang vers 1046 av. J.-C. et reste, selon la chronologie conventionnelle, la plus longue dynastie de la Chine ancienne. On distingue les Zhou occidentaux, dont le centre politique se trouvait dans la région de la vallée de la Wei, et les Zhou orientaux, après le déplacement de la cour vers l’est en 771 av. J.-C. Cette division est utile pour la chronologie, mais elle ne signifie pas que toutes les structures politiques et sociales changèrent brutalement à ces dates.',
          'Les Zhou développèrent la notion de Mandat du Ciel, selon laquelle le souverain tient sa légitimité du Ciel tant qu’il gouverne de manière convenable. Cette doctrine permettait d’expliquer le remplacement des Shang par les Zhou et pouvait ensuite servir à justifier la chute d’une dynastie. Elle ne doit pas être comprise comme une constitution au sens moderne : il s’agissait d’un principe moral et politique transmis dans des textes et réinterprété au fil des siècles. Les souverains et les lettrés pouvaient invoquer le comportement du gouvernement, les désordres ou les catastrophes pour débattre de la légitimité dynastique.',
          'Au début de la période Zhou, le pouvoir s’appuyait sur la famille royale et sur des lignages alliés ou apparentés auxquels des territoires et des responsabilités étaient confiés. Au fil du temps, les dirigeants régionaux renforcèrent leur autonomie. Pendant la période des Printemps et Automnes, traditionnellement datée d’environ 770 à 476 av. J.-C., la cour Zhou conserva un prestige rituel mais ne contrôlait plus efficacement tous les États. Pendant la période des Royaumes combattants, souvent datée d’environ 475 à 221 av. J.-C., plusieurs États rivaux développèrent des administrations, des armées et des stratégies visant à accroître leur puissance.',
          'Les transformations politiques s’accompagnèrent d’évolutions économiques et techniques : extension de l’usage du fer, développement de l’agriculture, travaux hydrauliques, croissance de centres urbains et nouvelles formes de mobilisation de la population. Ces changements ne se produisirent pas partout de manière identique. Les guerres entre États provoquèrent des destructions et des déplacements, mais stimulèrent également les débats sur la conduite du gouvernement, l’ordre social et les méthodes permettant de stabiliser un royaume. Les réformes de l’État Qin s’inscrivent dans ce contexte de compétition politique.'
        ],
        example: {
          statement: 'Pourquoi un souverain Zhou pouvait-il invoquer le Mandat du Ciel pour légitimer le remplacement des Shang ?',
          calculation: 'Le raisonnement associait la légitimité politique à la conduite du souverain : si une dynastie était jugée injuste ou incapable de gouverner, ses adversaires pouvaient prétendre que le Ciel lui avait retiré son mandat.',
          answer: 'Le Mandat du Ciel fournissait une justification morale au changement dynastique. Il s’agit d’une doctrine politique ancienne, et non d’une preuve objective que des forces surnaturelles avaient déterminé l’issue d’une guerre.'
        },
        exercise: {
          question: 'Comment l’autorité des Zhou a-t-elle évolué entre le début de la dynastie et la période des Royaumes combattants ?',
          answer: 'L’autorité royale s’est progressivement affaiblie au profit d’États régionaux plus autonomes, qui se sont affrontés pour le contrôle du territoire.'
        },
        exercises: [
          {
            question: 'Que signifie le Mandat du Ciel dans la pensée politique Zhou ?',
            answer: 'La légitimité du souverain dépend de sa conduite et peut être considérée comme perdue si son gouvernement est jugé indigne.'
          },
          {
            question: 'Quelle différence générale distingue les Zhou occidentaux des Zhou orientaux ?',
            answer: 'La période des Zhou occidentaux précède le déplacement de la cour vers l’est, traditionnellement situé en 771 av. J.-C.'
          },
          {
            question: 'Pourquoi les Royaumes combattants sont-ils une période de concurrence entre États ?',
            answer: 'Parce que plusieurs États disposaient de pouvoirs militaires et administratifs renforcés et cherchaient à dominer leurs rivaux.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Dynastie Zhou',
            url: 'https://www.worldhistory.org/trans/fr/1-12403/dynastie-zhou/'
          },
          {
            title: 'World History Encyclopedia — Chine antique',
            url: 'https://www.worldhistory.org/trans/fr/1-467/chine-antique/'
          },
          {
            title: 'Encyclopaedia Britannica — Zhou dynasty',
            url: 'https://www.britannica.com/topic/Zhou-dynasty'
          }
        ]
      }
    },
    {
      id: 'philosophies-chinoises-anciennes',
      title: 'Confucianisme, taoïsme et débats philosophiques',
      field: 'Chine ancienne · Écoles de pensée des Zhou orientaux, surtout du VIe au IIIe siècle av. J.-C.',
      summary: 'Présenter les principaux courants intellectuels de la période, leurs réponses aux crises politiques et les précautions nécessaires pour interpréter les textes anciens.',
      lesson: {
        sections: [
          'L’affaiblissement de l’autorité Zhou et les guerres entre États s’accompagnèrent d’une intense activité intellectuelle. Les traditions historiques parlent des « Cent Écoles de pensée » pour désigner la diversité des débats, sans qu’il faille comprendre ce terme comme un décompte littéral d’écoles organisées. Des penseurs et des maîtres proposaient des réponses aux questions de l’ordre politique, de la conduite personnelle, des rites, de la guerre et de la nature humaine. Les textes conservés ont souvent été transmis, compilés ou remaniés après l’époque à laquelle sont associés leurs auteurs ; leur datation et leur attribution peuvent donc être discutées.',
          'Confucius, traditionnellement daté de 551 à 479 av. J.-C., accordait une grande importance à l’apprentissage, à la conduite morale, aux rites et aux responsabilités liées aux relations humaines. Dans la tradition confucéenne, un dirigeant doit donner l’exemple par sa vertu et favoriser une société ordonnée. Confucius ne fonda pas immédiatement une religion d’État au sens moderne ; son enseignement fut transmis et développé par des générations de disciples et de commentateurs. Son influence sur l’administration impériale se renforça à des époques ultérieures, notamment sous les Han, et ne doit pas être projetée sans nuance sur toute la Chine ancienne.',
          'Le taoïsme ancien est associé notamment au texte appelé Daodejing, traditionnellement lié à Laozi, personnage dont l’existence historique et la biographie restent incertaines. Le texte valorise le Dao, notion complexe souvent traduite par « voie », et le wu wei, que l’on peut expliquer comme une action qui n’impose pas inutilement sa volonté au cours des choses. Il serait réducteur de présenter le taoïsme uniquement comme une doctrine de passivité : les textes contiennent des réflexions sur le pouvoir, la simplicité, les limites du langage et les rapports entre l’être humain et le monde. Les traditions philosophiques taoïstes se sont développées sur une longue durée.',
          'D’autres courants ont proposé des réponses différentes. Mozi et les Mohistes défendaient notamment l’attention impartiale aux personnes et critiquaient certaines dépenses rituelles jugées excessives. Les penseurs associés au légisme, dont Shang Yang et Han Fei dans les traditions textuelles, insistaient sur les institutions, les lois, les méthodes de gouvernement et les mécanismes de contrôle. Ces catégories ne résument pas toutes les positions et les auteurs ne formaient pas toujours des écoles homogènes. Leur importance historique tient au fait que les États en compétition cherchaient des moyens concrets d’administrer la population, de renforcer leurs ressources et de limiter les conflits internes.'
        ],
        example: {
          statement: 'Un responsable ancien doit choisir entre gouverner par l’exemple moral et renforcer l’application de règles administratives. Comment les traditions confucéenne et légiste aborderaient-elles différemment ce problème ?',
          calculation: 'La comparaison doit identifier les priorités des textes : la tradition confucéenne met l’accent sur la vertu, les rites et l’exemplarité ; les courants légistes privilégient davantage les lois, les procédures et les mécanismes de contrôle. Cette opposition est une distinction générale, pas une description exhaustive de chaque auteur.',
          answer: 'Les deux approches insistent sur l’ordre politique, mais elles n’accordent pas le même rôle à la vertu personnelle et aux institutions coercitives. Les gouvernements historiques ont pu combiner différentes méthodes.'
        },
        exercise: {
          question: 'Pourquoi faut-il éviter de présenter les philosophies anciennes comme des doctrines parfaitement fixes dès leur origine ?',
          answer: 'Parce que les textes ont été transmis, commentés et parfois compilés sur plusieurs générations, et que les traditions ont évolué dans des contextes historiques différents.'
        },
        exercises: [
          {
            question: 'Quels thèmes sont centraux dans la pensée confucéenne ancienne ?',
            answer: 'L’apprentissage, la conduite morale, les rites, les relations humaines et la responsabilité du dirigeant.'
          },
          {
            question: 'Que désigne approximativement le wu wei dans les textes taoïstes ?',
            answer: 'Une manière d’agir sans imposer inutilement sa volonté, en accord avec le cours des choses ; la notion possède plusieurs interprétations.'
          },
          {
            question: 'Quel problème les courants légistes cherchaient-ils notamment à résoudre ?',
            answer: 'Comment organiser un pouvoir efficace grâce aux lois, aux procédures administratives et aux mécanismes de contrôle.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Chine antique',
            url: 'https://www.worldhistory.org/trans/fr/1-467/chine-antique/'
          },
          {
            title: 'Encyclopaedia Britannica — Confucius',
            url: 'https://www.britannica.com/biography/Confucius'
          },
          {
            title: 'Encyclopaedia Britannica — Taoism',
            url: 'https://www.britannica.com/topic/Taoism'
          },
          {
            title: 'Stanford Encyclopedia of Philosophy — Confucius',
            url: 'https://plato.stanford.edu/entries/confucius/'
          },
          {
            title: 'Stanford Encyclopedia of Philosophy — Daoism',
            url: 'https://plato.stanford.edu/entries/daoism/'
          }
        ]
      }
    },
    {
      id: 'unification-qin-premier-empire',
      title: 'Les Qin : l’unification et la construction impériale',
      field: 'Chine ancienne · Dynastie Qin, 221–206 av. J.-C.',
      summary: 'Expliquer comment l’État Qin unifie plusieurs royaumes, met en place des réformes administratives et laisse un héritage monumental malgré la brièveté de la dynastie.',
      lesson: {
        sections: [
          'À la fin de la période des Royaumes combattants, l’État Qin dispose d’une organisation militaire et administrative qui lui permet de vaincre ses rivaux. Ying Zheng achève la conquête des autres grands États et proclame l’unification en 221 av. J.-C., prenant le titre de Qin Shi Huang, généralement traduit par « Premier Empereur ». Cette unification met fin à la pluralité des royaumes indépendants, mais ne signifie pas que toutes les régions adoptent instantanément les mêmes pratiques ni que les tensions locales disparaissent.',
          'Le gouvernement Qin cherche à renforcer le contrôle central. Il développe une administration territoriale placée sous l’autorité de fonctionnaires, harmonise certains standards administratifs et favorise la standardisation de l’écriture officielle, des poids et mesures et de certains éléments monétaires. Ces mesures facilitent les échanges et l’exercice du pouvoir, mais leur application exacte a pu varier et les réformes ne doivent pas être décrites comme une uniformisation totale de toutes les langues ou de toutes les coutumes. Le système repose aussi sur une fiscalité, des obligations de travail et des sanctions qui peuvent peser lourdement sur les populations.',
          'Les grands travaux servent à relier le territoire et à affirmer le pouvoir impérial. Des routes, des infrastructures et des ouvrages défensifs sont entretenus ou développés ; certaines fortifications antérieures sont reliées ou réorganisées. La Grande Muraille visible aujourd’hui est le résultat de constructions et de reconstructions de plusieurs périodes : il serait inexact de l’attribuer dans son ensemble à Qin Shi Huang. Le mausolée de l’empereur, près de l’actuelle Xi’an, comprend un vaste ensemble funéraire et les célèbres figures en terre cuite découvertes en 1974. L’UNESCO souligne leur valeur exceptionnelle pour l’étude de l’organisation militaire et des techniques artistiques de la période.',
          'La dynastie Qin s’effondre quelques années après la mort de Qin Shi Huang en 210 av. J.-C. Les révoltes, les conflits de succession et la fragilité du nouveau régime contribuent à sa chute en 206 av. J.-C. La brièveté de la dynastie n’efface pas son importance : elle fournit un précédent institutionnel majeur pour l’empire unifié. Les Han reprennent certaines structures, tout en modifiant les pratiques de gouvernement. L’histoire des Qin montre ainsi que la centralisation peut laisser un héritage durable sans garantir la stabilité immédiate du régime qui l’a instaurée.'
        ],
        example: {
          statement: 'Pourquoi la standardisation des poids et mesures peut-elle renforcer un État unifié ?',
          calculation: 'Si les administrations et les commerçants utilisent des unités communes, il devient plus facile de comparer des quantités, de calculer les taxes, de gérer les approvisionnements et de contrôler certaines transactions. Cela ne signifie pas que toutes les difficultés de mesure disparaissent immédiatement.',
          answer: 'Des standards communs facilitent l’administration, la fiscalité et les échanges entre régions. Ils constituent un instrument de gouvernement autant qu’une mesure pratique.'
        },
        exercise: {
          question: 'Quelles sont deux conséquences durables de l’unification Qin malgré la chute rapide de la dynastie ?',
          answer: 'L’établissement d’un modèle impérial centralisé et la diffusion de standards administratifs communs, repris ou adaptés par les dynasties suivantes.'
        },
        exercises: [
          {
            question: 'En quelle année l’unification Qin est-elle traditionnellement datée ?',
            answer: 'En 221 av. J.-C.'
          },
          {
            question: 'Peut-on attribuer toute la Grande Muraille actuelle à Qin Shi Huang ?',
            answer: 'Non. Les fortifications ont été construites, reliées et reconstruites au cours de plusieurs périodes historiques.'
          },
          {
            question: 'Quand l’armée en terre cuite du mausolée Qin a-t-elle été découverte ?',
            answer: 'En 1974, selon la documentation de l’UNESCO.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Chine antique',
            url: 'https://www.worldhistory.org/trans/fr/1-467/chine-antique/'
          },
          {
            title: 'UNESCO — Mausolée du premier empereur Qin',
            url: 'https://whc.unesco.org/fr/list/441/'
          },
          {
            title: 'Encyclopaedia Britannica — Qin dynasty',
            url: 'https://www.britannica.com/topic/Qin-dynasty'
          }
        ]
      }
    },
    {
      id: 'dynastie-han-societe-echanges-heritage',
      title: 'Les Han : administration, société et échanges à longue distance',
      field: 'Chine ancienne · Han occidentaux, 202 av. J.-C.–9 apr. J.-C. ; interruption Xin, 9–23 ; Han orientaux, 25–220 apr. J.-C.',
      summary: 'Étudier la consolidation de l’empire Han, son administration, ses échanges eurasiens, ses réalisations techniques et les facteurs de fragmentation du pouvoir.',
      lesson: {
        sections: [
          'Après les conflits qui suivent la chute des Qin, Liu Bang fonde la dynastie Han et devient l’empereur Gaozu. Les Han conservent l’idée d’un empire unifié, mais ajustent les politiques de leurs prédécesseurs. La période est habituellement divisée en Han occidentaux ou antérieurs, interrompus par le régime Xin de Wang Mang, puis Han orientaux. Cette périodisation facilite l’étude d’un long règne dynastique, mais les institutions et les conditions régionales changent au fil du temps. Les souverains s’appuient sur des fonctionnaires, des ressources fiscales et des systèmes locaux de pouvoir dont l’efficacité n’est jamais identique partout.',
          'Le confucianisme prend une place croissante dans la culture officielle et dans la formation des élites, sans faire disparaître toutes les autres traditions intellectuelles. Les textes classiques, l’éducation et les conseils moraux contribuent à définir l’image du bon fonctionnaire et du souverain responsable. Il serait cependant exagéré d’affirmer que l’administration Han reposait exclusivement sur la philosophie confucéenne : elle utilisait aussi des lois, des procédures, des contrôles et des pratiques héritées des États antérieurs. Le fonctionnement réel de l’empire combinait donc des idéaux moraux et des instruments administratifs concrets.',
          'Les échanges à longue distance se développent entre la Chine et les régions d’Asie centrale, notamment à travers des réseaux que l’on regroupe aujourd’hui sous le nom de Routes de la soie. Ces routes n’étaient pas un itinéraire unique ni une autoroute commerciale contrôlée intégralement par l’État Han : elles formaient un ensemble de chemins terrestres et, à plus longue échelle, de liaisons maritimes dont l’importance variait. Des marchandises, des techniques, des personnes et des informations circulaient par étapes entre de nombreuses sociétés. Les missions diplomatiques et les campagnes vers l’ouest ont contribué à intensifier certains contacts, mais les échanges dépendaient aussi des intermédiaires et des conditions politiques régionales.',
          'L’époque Han est associée à des avancées dans plusieurs domaines, notamment la production du papier attestée à l’époque impériale ancienne, les outils agricoles, la métallurgie, les instruments de mesure et les savoirs médicaux et astronomiques. Il faut dater chaque innovation avec prudence : certaines techniques ont des antécédents plus anciens et leur diffusion s’étale dans le temps. La prospérité de certaines régions coexiste avec des inégalités foncières, des obligations fiscales et des tensions sociales. À la fin de la période, les rivalités à la cour, la puissance de grands propriétaires, les rébellions et les conflits entre chefs militaires affaiblissent le pouvoir central. En 220 apr. J.-C., la fin des Han ouvre la période des Trois Royaumes, sans effacer les institutions et les références culturelles héritées de la dynastie.'
        ],
        example: {
          statement: 'Pourquoi l’expression « Routes de la soie » ne doit-elle pas être comprise comme le nom d’une seule route commerciale ?',
          calculation: 'Les échanges reliaient plusieurs régions par des itinéraires terrestres et maritimes, avec des intermédiaires et des tronçons qui pouvaient changer selon les périodes et les conditions politiques.',
          answer: 'L’expression désigne un réseau de routes et de contacts entre sociétés. Elle ne signifie pas que toutes les marchandises empruntaient un seul trajet ni que l’empire Han contrôlait tout le réseau.'
        },
        exercise: {
          question: 'Citez deux facteurs qui ont contribué à l’affaiblissement des Han à la fin de la dynastie.',
          answer: 'Parmi les facteurs importants figurent les rivalités de cour, l’influence de grands propriétaires, les rébellions et la montée en puissance de chefs militaires régionaux.'
        },
        exercises: [
          {
            question: 'Comment la période Han est-elle généralement divisée ?',
            answer: 'En Han occidentaux, suivis de l’interruption Xin, puis en Han orientaux.'
          },
          {
            question: 'Les Routes de la soie formaient-elles un itinéraire unique entièrement contrôlé par les Han ?',
            answer: 'Non. Elles constituaient un réseau d’itinéraires et d’échanges impliquant de nombreuses sociétés et des intermédiaires.'
          },
          {
            question: 'Quelle période commence traditionnellement après la fin des Han en 220 apr. J.-C. ?',
            answer: 'La période des Trois Royaumes.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Chine antique',
            url: 'https://www.worldhistory.org/trans/fr/1-467/chine-antique/'
          },
          {
            title: 'Encyclopaedia Britannica — Han dynasty',
            url: 'https://www.britannica.com/topic/Han-dynasty'
          },
          {
            title: 'Encyclopaedia Britannica — Silk Road',
            url: 'https://www.britannica.com/topic/Silk-Road-trade-route'
          },
          {
            title: 'The Metropolitan Museum of Art — China, 200–900 A.D.',
            url: 'https://www.metmuseum.org/toah/hd/chin/hd_chin.htm'
          }
        ]
      }
    }
  ]
},

{
  id: 'histoire-ouest-afrique',
  sortYear: 500,
  title: 'Empires de l’Afrique de l’ouest',
  note: 'Six chapitres consacrés aux réseaux commerciaux sahariens, à l’Empire du Ghana, à la formation du Mali, au règne de Mansa Musa, à l’Empire songhaï et aux transformations politiques de la région. Les dates anciennes sont parfois approximatives : les sources écrites sont inégalement réparties et doivent être confrontées aux données archéologiques et aux traditions orales.',
  chapters: [
    {
      id: 'routes-commerciales-sahel',
      title: 'Le Sahel, les échanges et les conditions d’émergence des empires',
      field: 'Histoire de l’Afrique de l’Ouest · Environ 500–1500',
      summary: 'Comprendre comment les milieux sahéliens, l’agriculture, les ressources et les échanges à longue distance ont favorisé la croissance de villes et d’États, sans réduire leur histoire au seul commerce de l’or.',
      lesson: {
        sections: [
          'Le Sahel est une zone de transition entre le Sahara au nord et les régions plus humides au sud. Les sociétés y ont développé des activités diverses : agriculture adaptée aux pluies, élevage, pêche dans les zones fluviales, artisanat et commerce. Le fleuve Niger et ses affluents, comme le Sénégal dans l’ouest, facilitaient les déplacements et reliaient des zones écologiques différentes. Les conditions naturelles n’expliquent pas à elles seules la formation des États : les choix politiques, les alliances et les organisations locales ont également compté.',
          'Les routes transsahariennes reliaient l’Afrique de l’Ouest à l’Afrique du Nord. Les caravanes transportaient notamment du sel vers le sud et de l’or, de l’ivoire et d’autres marchandises vers le nord. Les échanges portaient aussi sur les textiles, les chevaux, le cuivre, les céréales et divers produits artisanaux. Le commerce transsaharien n’était pas un système unique contrôlé par un seul souverain : plusieurs villes, communautés marchandes et pouvoirs politiques intervenaient dans les circuits. Les taxes prélevées sur les marchandises pouvaient procurer des revenus aux autorités qui sécurisaient ou contrôlaient certains passages.',
          'Les échanges ont favorisé la croissance de centres urbains et la circulation de pratiques religieuses, de langues et de savoirs. L’islam s’est implanté progressivement, notamment grâce aux commerçants et aux lettrés, mais son adoption a varié selon les lieux et les groupes sociaux. Les traditions religieuses locales ont continué d’exister et les formes de coexistence ont changé avec le temps. Les sources disponibles sont de nature différente : récits de voyageurs et de géographes, traditions orales, chroniques plus tardives, vestiges archéologiques et manuscrits. Aucune source isolée ne suffit à reconstituer toute l’histoire de la région.'
        ],
        example: {
          statement: 'Pourquoi les échanges entre le Sahara et les régions situées au sud ont-ils pu favoriser l’essor de pouvoirs politiques ?',
          calculation: 'Les autorités pouvaient tirer des revenus de certaines taxes, protéger des marchés ou des routes et nouer des alliances avec des communautés marchandes. Ces mécanismes variaient selon les lieux et les périodes.',
          answer: 'Le commerce a pu soutenir les revenus, les villes et les réseaux diplomatiques de certains États. Il n’est cependant pas l’unique cause de leur développement : l’agriculture, les institutions, les conflits et les alliances comptaient également.'
        },
        exercise: {
          question: 'Cite deux marchandises importantes dans les échanges transsahariens et explique pourquoi ces échanges ne suffisent pas à expliquer seuls la naissance des empires.',
          answer: 'L’or et le sel sont deux marchandises importantes. Les empires dépendaient aussi de facteurs comme l’agriculture, les institutions politiques, les alliances, les capacités militaires et les relations entre populations.'
        },
        exercises: [
          {
            question: 'Quelle grande zone désertique les caravanes traversaient-elles pour relier l’Afrique de l’Ouest à l’Afrique du Nord ?',
            answer: 'Le Sahara.'
          },
          {
            question: 'Quel grand fleuve a joué un rôle important dans les échanges et les villes de la région ?',
            answer: 'Le fleuve Niger, notamment dans les régions centrales de l’Afrique de l’Ouest.'
          },
          {
            question: 'Pourquoi faut-il confronter les récits écrits aux données archéologiques et aux traditions orales ?',
            answer: 'Parce que chaque type de source a ses limites et ne documente qu’une partie du passé.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Empires de l’Afrique de l’Ouest',
            url: 'https://www.worldhistory.org/trans/fr/9-61/empires-de-lafrique-de-louest/'
          },
          {
            title: 'The Metropolitan Museum of Art — Western Sudan, 500–1000 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/06/afu.html'
          },
          {
            title: 'The Metropolitan Museum of Art — Western and Central Sudan, 1000–1400 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/07/afu.html'
          }
        ]
      }
    },
    {
      id: 'empire-ghana-wagadu',
      title: 'L’Empire du Ghana : pouvoir soninké, or et commerce',
      field: 'Histoire médiévale de l’Afrique de l’Ouest · Au moins du 6e siècle au 13e siècle, selon les synthèses historiques',
      summary: 'Étudier la formation et la puissance de l’Empire du Ghana, son rôle dans les échanges, la place de Koumbi Saleh et les incertitudes qui entourent son déclin.',
      lesson: {
        sections: [
          'L’Empire du Ghana historique ne correspond pas au territoire de l’actuelle République du Ghana. Il se situait dans la zone de savane de l’ouest du Sahel, principalement dans des régions aujourd’hui situées au sud-est de la Mauritanie et à l’ouest du Mali. Il était étroitement associé aux populations soninké. Les traditions orales emploient notamment le nom de Wagadu. La date exacte de fondation n’est pas connue : des synthèses situent son émergence au cours du premier millénaire, mais les informations sur ses premières phases demeurent limitées.',
          'La puissance du Ghana reposait en partie sur sa position entre les régions productrices d’or au sud et les zones sahariennes où le sel était disponible. Les souverains tiraient des revenus du commerce et de taxes appliquées aux marchandises entrant dans le territoire ou en sortant. Le fer, le cuivre, l’ivoire et d’autres produits participaient aussi aux économies régionales. Les récits de géographes musulmans, dont al-Bakri au 11e siècle, donnent des renseignements précieux sur le pouvoir royal et les marchands, mais ces auteurs dépendaient souvent de témoignages rapportés et ne décrivent pas nécessairement tout le territoire de façon directe.',
          'Koumbi Saleh est couramment associé à la capitale ou à un grand centre du Ghana, mais l’organisation exacte du site et ses rapports avec le siège royal restent discutés. Les descriptions médiévales évoquent une présence musulmane marchande et une autorité royale qui conservait des pratiques religieuses locales. L’islam était donc présent dans certains milieux sans que cela prouve une conversion uniforme de toute la population ou de tous les souverains. À partir du 11e siècle, puis surtout du 12e, le pouvoir du Ghana s’affaiblit. Les facteurs proposés comprennent la concurrence commerciale, les conflits internes, les changements environnementaux et la montée de puissances rivales. L’idée d’une conquête almoravide unique et décisive en 1076 est débattue et ne doit pas être présentée comme un fait certain.'
        ],
        example: {
          statement: 'Pourquoi la position géographique du Ghana pouvait-elle procurer des revenus à ses souverains ?',
          calculation: 'Des marchandises circulaient entre les régions aurifères au sud et les réseaux sahariens au nord. Les autorités pouvaient taxer certains échanges et tirer parti de leur contrôle sur des marchés ou des itinéraires.',
          answer: 'La position du Ghana favorisait la perception de taxes et le développement des échanges. Elle ne signifie pas que le souverain contrôlait toutes les mines d’or ni toutes les routes commerciales.'
        },
        exercise: {
          question: 'Explique pourquoi il est incorrect de confondre l’Empire du Ghana médiéval avec l’État moderne du Ghana.',
          answer: 'L’Empire du Ghana se trouvait principalement dans des régions correspondant aujourd’hui au sud-est de la Mauritanie et à l’ouest du Mali. L’État moderne du Ghana est situé plus à l’est, sur le golfe de Guinée.'
        },
        exercises: [
          {
            question: 'Quel peuple est particulièrement associé à l’Empire du Ghana ?',
            answer: 'Les Soninké.'
          },
          {
            question: 'Quel centre archéologique est couramment associé à l’Empire du Ghana ?',
            answer: 'Koumbi Saleh, même si les détails de son rôle politique et urbain restent discutés.'
          },
          {
            question: 'La conquête almoravide de 1076 explique-t-elle à elle seule le déclin du Ghana avec certitude ?',
            answer: 'Non. Le rôle exact des Almoravides est débattu ; plusieurs facteurs politiques, économiques et environnementaux sont envisagés.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Ghana Empire',
            url: 'https://www.worldhistory.org/Ghana_Empire/'
          },
          {
            title: 'The Metropolitan Museum of Art — Western Sudan, 500–1000 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/06/afu.html'
          },
          {
            title: 'The Metropolitan Museum of Art — Western and Central Sudan, 1000–1400 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/07/afu.html'
          }
        ]
      }
    },
    {
      id: 'fondation-empire-mali',
      title: 'Sundiata Keita et la formation de l’Empire du Mali',
      field: 'Histoire médiévale de l’Afrique de l’Ouest · 13e siècle et développement ultérieur',
      summary: 'Comprendre l’essor du Mali après la puissance du Sosso, le rôle attribué à Sundiata Keita et les mécanismes d’expansion et d’administration impériales.',
      lesson: {
        sections: [
          'Au début du 13e siècle, le royaume du Sosso, dirigé dans les traditions historiques par Sumanguru Kanté, occupait une place importante dans les territoires issus du recul du Ghana. Sundiata Keita, chef mandingue, est associé à la victoire contre le Sosso, traditionnellement datée de 1235. Cette victoire constitue un repère majeur dans les récits de fondation du Mali. Les traditions orales, notamment l’épopée de Soundiata, ont transmis des mémoires politiques et culturelles essentielles, mais elles ne doivent pas être lues comme des comptes rendus contemporains mot à mot. Les détails biographiques et certains épisodes restent difficiles à vérifier indépendamment.',
          'Le Mali s’est développé à partir de territoires mandingues et a progressivement étendu son influence sur des régions et des routes commerciales importantes. Son expansion ne s’explique pas uniquement par une bataille fondatrice : elle dépendait aussi de la capacité à nouer des alliances, à intégrer des pouvoirs locaux et à organiser la collecte de ressources. Les structures impériales combinaient l’autorité du souverain avec des responsables locaux et des liens de dépendance variables. L’étendue du contrôle pouvait changer selon les régions et les périodes ; une carte de l’empire à son apogée ne signifie pas que chaque zone était administrée de façon identique.',
          'Le Mali a profité des échanges de l’or, du sel et d’autres marchandises, ainsi que de villes comme Djenné et Tombouctou, qui devinrent des centres commerciaux majeurs. Les commerçants musulmans et les savants ont renforcé les liens avec l’Afrique du Nord, tandis que les pratiques religieuses locales ont continué à façonner les sociétés. Les sources médiévales et les chroniques plus tardives montrent un État important, mais les frontières, les successions et les formes de gouvernement évoluaient. Le Mali ne fut donc pas un ensemble immuable : son pouvoir dépendait de la capacité de ses souverains à maintenir les relations entre des régions éloignées.'
        ],
        example: {
          statement: 'Quelle différence faut-il faire entre une victoire fondatrice et la construction durable d’un empire ?',
          calculation: 'Une victoire peut renverser un rival, mais un empire durable exige ensuite des alliances, des ressources, des responsables politiques et des relations stables avec les territoires intégrés.',
          answer: 'La victoire attribuée à Sundiata Keita contre le Sosso est un repère important, mais la consolidation du Mali fut un processus politique et territorial qui s’est poursuivi après cette victoire.'
        },
        exercise: {
          question: 'Pourquoi les traditions orales sont-elles importantes pour l’histoire de Sundiata Keita, et pourquoi faut-il les confronter à d’autres sources ?',
          answer: 'Elles transmettent des mémoires historiques et des représentations politiques absentes de nombreux documents écrits. Leur transmission au fil du temps impose toutefois de les comparer aux chroniques, aux données archéologiques et aux autres sources disponibles.'
        },
        exercises: [
          {
            question: 'Quel dirigeant est associé à la fondation de l’Empire du Mali ?',
            answer: 'Sundiata Keita.'
          },
          {
            question: 'Quelle date est traditionnellement associée à la victoire de Sundiata contre le Sosso ?',
            answer: '1235, date conventionnelle couramment retenue dans les chronologies.'
          },
          {
            question: 'Pourquoi les frontières de l’Empire du Mali ne doivent-elles pas être considérées comme fixes ?',
            answer: 'Parce que l’influence politique, les alliances et le contrôle des territoires changeaient au cours du temps.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Mali Empire',
            url: 'https://www.worldhistory.org/Mali_Empire/'
          },
          {
            title: 'World History Encyclopedia — Timeline: Mali Empire',
            url: 'https://www.worldhistory.org/timeline/Mali_Empire/'
          },
          {
            title: 'The Metropolitan Museum of Art — Western and Central Sudan, 1000–1400 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/07/afu.html'
          }
        ]
      }
    },
    {
      id: 'mansa-musa-tombouctou',
      title: 'Mansa Musa, Tombouctou et les savoirs du Mali',
      field: 'Histoire médiévale de l’Afrique de l’Ouest · Début du 14e siècle et après',
      summary: 'Étudier le règne de Mansa Musa, son pèlerinage à La Mecque, les réseaux diplomatiques et commerciaux, ainsi que le rôle de Tombouctou dans les échanges et l’enseignement islamique.',
      lesson: {
        sections: [
          'Mansa Musa régna sur le Mali au 14e siècle ; les chronologies donnent généralement 1312–1337 pour son règne, tout en signalant que les dates médiévales peuvent varier selon les reconstructions. Sous son autorité, l’empire contrôlait un vaste ensemble de territoires et bénéficiait des revenus tirés des échanges. Son pèlerinage à La Mecque en 1324–1325 est particulièrement connu grâce aux récits qui soulignent les dons d’or effectués lors du passage au Caire. Ces récits témoignent de la réputation internationale du souverain, mais les anecdotes sur les quantités d’or et leurs effets économiques doivent être traitées avec prudence.',
          'Le pèlerinage de Mansa Musa avait une dimension religieuse, diplomatique et politique. Il mettait en relation le souverain avec des centres du monde musulman et renforçait la visibilité du Mali dans les récits d’Afrique du Nord et du Moyen-Orient. Le pouvoir royal encouragea des constructions religieuses et l’activité de lettrés. Les traditions associent notamment Mansa Musa à la grande mosquée de Djingareyber à Tombouctou, mais l’histoire des édifices de la région comprend plusieurs phases de construction, de restauration et de transformation ; il faut donc éviter d’attribuer sans nuance chaque élément visible aujourd’hui à un seul commanditaire médiéval.',
          'Tombouctou se développa grâce à sa situation proche du Niger et des routes caravanières du Sahara. La ville reliait des réseaux fluviaux et terrestres et accueillait marchands, artisans, savants et voyageurs. Elle devint un centre important d’enseignement islamique, où l’on étudiait notamment le droit, la théologie, la grammaire et d’autres disciplines savantes de l’époque. Cette vie intellectuelle ne signifie pas que toute la population avait accès au même enseignement : les institutions savantes étaient liées à des milieux et à des pratiques spécifiques. L’histoire de Tombouctou se poursuivit après le recul du Mali, sous d’autres pouvoirs, dont le Songhaï.'
        ],
        example: {
          statement: 'Pourquoi le pèlerinage de Mansa Musa est-il un événement important pour l’histoire du Mali ?',
          calculation: 'Il reliait le souverain à des réseaux religieux et diplomatiques au-delà de l’Afrique de l’Ouest et a contribué à la diffusion de récits sur les ressources et la puissance du Mali.',
          answer: 'Le pèlerinage de 1324–1325 est un repère documenté de l’histoire du Mali. Il illustre les relations transrégionales de l’empire, sans permettre à lui seul de mesurer précisément toute sa richesse ou son fonctionnement.'
        },
        exercise: {
          question: 'Explique comment la situation de Tombouctou pouvait favoriser à la fois le commerce et la circulation des savoirs.',
          answer: 'Sa position reliait les itinéraires du Niger aux caravanes transsahariennes. Les échanges attiraient marchands et voyageurs, tandis que la présence de lettrés et d’institutions religieuses favorisait l’enseignement et la circulation des manuscrits.'
        },
        exercises: [
          {
            question: 'À quelles dates le pèlerinage de Mansa Musa à La Mecque est-il généralement situé ?',
            answer: 'En 1324–1325.'
          },
          {
            question: 'Cite une fonction de Tombouctou en plus du commerce.',
            answer: 'La ville fut un centre d’enseignement et d’études islamiques.'
          },
          {
            question: 'Le développement intellectuel de Tombouctou s’est-il arrêté avec le déclin du Mali ?',
            answer: 'Non. La ville continua à jouer un rôle important sous d’autres pouvoirs, notamment sous l’Empire songhaï.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Mali Empire',
            url: 'https://www.worldhistory.org/Mali_Empire/'
          },
          {
            title: 'World History Encyclopedia — Timbuktu: West Africa’s Great Trading Centre',
            url: 'https://www.worldhistory.org/Timbuktu/'
          },
          {
            title: 'The Metropolitan Museum of Art — Western and Central Sudan, 1000–1400 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/07/afu.html'
          }
        ]
      }
    },
    {
      id: 'empire-songhai-askia',
      title: 'L’Empire songhaï : Sonni Ali, Askia Muhammad et la puissance du Niger',
      field: 'Histoire médiévale de l’Afrique de l’Ouest · Environ 15e siècle–1591',
      summary: 'Analyser la montée du Songhaï, la conquête de centres commerciaux, les réformes associées à Askia Muhammad et les fragilités d’un vaste empire.',
      lesson: {
        sections: [
          'Le Songhaï s’est développé autour de Gao, un centre situé sur le Niger et bien placé pour les échanges entre le Sahel et les régions sahariennes. Un État songhaï existait avant son expansion impériale du 15e siècle. Alors que l’autorité du Mali diminuait dans plusieurs régions, les souverains songhaï renforcèrent leur autonomie et étendirent leur contrôle. Sonni Ali, au pouvoir dans la seconde moitié du 15e siècle, est associé à une expansion militaire qui permit notamment de prendre Tombouctou en 1468 ou 1469 selon les chronologies, puis Djenné après un siège prolongé.',
          'Le contrôle des villes et des voies fluviales contribuait aux ressources de l’empire. Les forces songhaï combinaient différentes capacités militaires, dont la cavalerie et des embarcations sur le Niger. Toutefois, conquérir une ville ne garantissait pas une obéissance permanente : il fallait maintenir des relations avec les élites locales, les commerçants et les populations. Les politiques religieuses des souverains ne furent pas identiques. Sonni Ali conserva des rapports avec des traditions religieuses locales, tandis qu’Askia Muhammad, qui prit le pouvoir en 1493, favorisa davantage les relations avec les savants et les institutions musulmanes.',
          'Askia Muhammad développa l’administration et les liens religieux et diplomatiques avec le monde musulman. Tombouctou demeura un centre intellectuel important, mais l’empire ne doit pas être réduit à cette seule ville. Gao, Djenné et d’autres centres participaient à des réseaux économiques et politiques divers. En 1591, une armée envoyée par le sultan marocain Ahmad al-Mansur envahit le Songhaï. La bataille de Tondibi et les affrontements qui suivirent contribuèrent à la rupture de l’autorité impériale. Les armes à feu marocaines ont compté, mais les divisions internes, les difficultés logistiques et la résistance qui continua après la campagne font également partie de l’explication.'
        ],
        example: {
          statement: 'Pourquoi le contrôle de Gao, Tombouctou et Djenné était-il stratégique pour le Songhaï ?',
          calculation: 'Ces centres reliaient des routes commerciales, des axes fluviaux et des réseaux politiques. Leur contrôle pouvait procurer des revenus et renforcer l’autorité du souverain, mais exigeait une administration et des alliances durables.',
          answer: 'Ces villes avaient une importance économique et politique. Leur conquête renforçait la puissance songhaï, sans rendre automatiquement toutes les régions de l’empire faciles à gouverner.'
        },
        exercise: {
          question: 'Compare brièvement les orientations religieuses attribuées à Sonni Ali et à Askia Muhammad sans supposer que toute la population partageait les mêmes croyances.',
          answer: 'Sonni Ali est généralement présenté comme ayant conservé des liens avec des traditions religieuses locales. Askia Muhammad favorisa davantage les relations avec les institutions et les savants musulmans. Ces orientations des souverains ne décrivent pas à elles seules les croyances de toutes les populations.'
        },
        exercises: [
          {
            question: 'Quelle ville fut un centre politique important du Songhaï ?',
            answer: 'Gao.'
          },
          {
            question: 'Quel souverain songhaï prit le pouvoir en 1493 et favorisa les relations avec les savants musulmans ?',
            answer: 'Askia Muhammad.'
          },
          {
            question: 'En quelle année l’invasion marocaine porta-t-elle un coup décisif à l’empire ?',
            answer: 'En 1591.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Songhai Empire',
            url: 'https://www.worldhistory.org/Songhai_Empire/'
          },
          {
            title: 'The Metropolitan Museum of Art — Western and Central Sudan, 1400–1600 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/08/afu.html'
          },
          {
            title: 'The Metropolitan Museum of Art — Sahel: Art and Empires on the Shores of the Sahara',
            url: 'https://www.metmuseum.org/exhibitions/sahel-art-empire-sahara/inside-the-exhibition'
          }
        ]
      }
    },
    {
      id: 'transformations-heritages',
      title: 'Après 1591 : recompositions politiques, héritages et limites des sources',
      field: 'Histoire de l’Afrique de l’Ouest · Fin du 16e siècle et périodes suivantes',
      summary: 'Comprendre pourquoi la fin de la domination songhaï ne signifie pas la disparition des sociétés ouest-africaines, et examiner les héritages commerciaux, intellectuels et artistiques des empires.',
      lesson: {
        sections: [
          'La campagne marocaine de 1591 affaiblit fortement le pouvoir impérial songhaï, mais ne met pas fin à l’histoire politique de la région. Des autorités locales, des groupes militaires, des communautés marchandes et des pouvoirs régionaux continuèrent d’agir. Les structures issues de l’ancien empire se recomposèrent de différentes manières et les relations entre Gao, Tombouctou, Djenné et les régions voisines changèrent. Les États ne doivent pas être envisagés comme des entités qui apparaissent puis disparaissent sans laisser de continuités sociales ou institutionnelles.',
          'À partir de l’époque moderne, les routes commerciales se transformèrent avec l’augmentation des échanges atlantiques et les changements des circuits transsahariens. Cette évolution fut progressive et différente selon les régions. Les échanges maritimes avec les marchands européens se développèrent le long de la côte, tandis que les réseaux intérieurs conservèrent des rôles importants. La traite des personnes réduites en esclavage eut des conséquences profondes et durables sur de nombreuses sociétés africaines. Il faut éviter de présenter les échanges comme un processus uniquement pacifique ou bénéfique : ils pouvaient aussi s’accompagner de coercition, de conflits et de déplacements forcés.',
          'Les héritages des empires sont visibles dans les traditions orales, les langues, les manuscrits, les architectures en terre, les pratiques savantes et les mémoires politiques. Les chroniques écrites à Tombouctou, comme le Tarikh al-Sudan et le Tarikh al-Fattash, sont des sources majeures pour l’histoire de la région, mais elles furent rédigées après plusieurs des événements qu’elles rapportent et doivent être replacées dans leur contexte. L’histoire s’écrit en croisant les récits, les manuscrits, l’archéologie et l’histoire de l’art. Les dates et les frontières doivent rester prudentes lorsque les preuves sont incomplètes ou contradictoires.'
        ],
        example: {
          statement: 'Pourquoi la défaite du Songhaï en 1591 ne signifie-t-elle pas la fin des sociétés politiques de la région ?',
          calculation: 'La défaite a brisé la domination d’un empire, mais les populations, les villes, les réseaux marchands, les élites locales et les traditions savantes ont continué d’exister et de se transformer.',
          answer: '1591 marque une rupture majeure dans l’histoire du pouvoir songhaï, non la disparition de la vie sociale, culturelle et politique de l’Afrique de l’Ouest.'
        },
        exercise: {
          question: 'Donne deux types de sources permettant d’étudier les empires ouest-africains et indique une limite de chacune.',
          answer: 'Les chroniques écrites peuvent refléter le point de vue de leurs auteurs et avoir été rédigées après les événements. Les traditions orales transmettent des mémoires collectives mais changent au fil des générations. L’archéologie fournit des traces matérielles, dont l’interprétation dépend du contexte et des fouilles.'
        },
        exercises: [
          {
            question: 'Quel événement militaire majeur est associé à l’année 1591 ?',
            answer: 'L’invasion marocaine du Songhaï et la bataille de Tondibi.'
          },
          {
            question: 'Cite un héritage intellectuel associé à Tombouctou.',
            answer: 'Les manuscrits et les traditions d’enseignement savant, notamment en études islamiques.'
          },
          {
            question: 'Pourquoi faut-il éviter d’expliquer les transformations commerciales uniquement par les échanges atlantiques ?',
            answer: 'Parce que les réseaux intérieurs et transsahariens ont continué d’évoluer et que les effets différaient selon les régions.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Empires de l’Afrique de l’Ouest',
            url: 'https://www.worldhistory.org/trans/fr/9-61/empires-de-lafrique-de-louest/'
          },
          {
            title: 'The Metropolitan Museum of Art — Western and Central Sudan, 1600–1800 A.D.',
            url: 'https://www.metmuseum.org/toah/ht/09/afu.html'
          },
          {
            title: 'World History Encyclopedia — Timbuktu: West Africa’s Great Trading Centre',
            url: 'https://www.worldhistory.org/Timbuktu/'
          }
        ]
      }
    }
  ]
},

{
  id: 'perse-ancienne',
  sortYear: -4395,
  title: 'Perse ancienne : des Élamites et des Mèdes à la chute des Sassanides',
  note: 'Six chapitres sur les origines de la Perse, Cyrus II, Darius Ier, les guerres gréco-perses et Alexandre, les Séleucides et les Parthes, puis les Sassanides. Les dates sont approximatives, plusieurs sont débattues, et les sources antiques (grecques surtout) reflètent souvent un point de vue extérieur.',
  chapters: [
    {
      id: 'plateau-iranien-elam-medes',
      title: 'Le plateau iranien, l’Élam, les Mèdes et les premiers Perses',
      field: 'Perse ancienne · Du Paléolithique au VIIe siècle av. J.-C.',
      summary: 'Comprendre le cadre géographique, les peuples et les royaumes qui précèdent l’Empire achéménide.',
      lesson: {
        sections: [
          'La Perse antique correspond approximativement à l’Iran actuel, l’une des plus anciennes régions habitées du monde. Selon la World History Encyclopedia, des vestiges attestent une présence humaine remontant à environ 100 000 ans, au Paléolithique, et des établissements semi-permanents, probablement liés à la chasse, existent avant 10000 av. J.-C. Le site de Chogha Bonut (daté d’environ 7200 av. J.-C. par cette source) et la ville de Suse (dont la fondation est située vers 4395 av. J.-C.) montrent un peuplement très précoce. Ces dates sont des estimations qui varient selon les auteurs et les méthodes de datation.',
          'L’Élam, à l’ouest et au sud-ouest du plateau, fut l’un des royaumes les plus avancés de la région. Il ne faut pas le confondre avec Suse : ce sont deux entités distinctes, même si Suse fut ensuite intégrée à l’espace élamite puis perse. Selon la World History Encyclopedia, l’Élam fut en partie conquis par les Sumériens, puis entièrement par les Assyriens, avant de passer sous domination mède. Quand les Perses s’installent à l’est de l’Élam, ils se marient avec des Élamites et absorbent une partie de leur culture, ce qui éclaire le rôle de l’élamite dans l’administration achéménide ultérieure.',
          'Les Perses, les Mèdes, les Parthes, les Bactriens et d’autres peuples parlent des langues iraniennes. La date de leur arrivée sur le plateau est débattue : la World History Encyclopedia évoque des migrations avant le IIIe millénaire av. J.-C., alors que de nombreuses chronologies la situent entre le IIe et le début du Ier millénaire av. J.-C. Le mot « aryen » vient de l’Avesta, où il signifie plutôt « noble », « civilisé » ou « homme libre » ; son interprétation raciale date du XIXe siècle. Leur religion ancienne vénérait Ahura Mazda, Mithra et Anahita. Zoroastre, dont l’époque est très discutée (la World History Encyclopedia propose 1500-1000 av. J.-C.), insiste sur le choix entre l’ordre, associé à Ahura Mazda, et le désordre, associé à Angra Mainyu.',
          'Les Mèdes s’unissent, selon la tradition rapportée par la World History Encyclopedia, sous Dayukku (Déjocès pour les Grecs) et font d’Ecbatane leur centre. Son petit-fils Cyaxare étend leur territoire, et l’Empire assyrien s’effondre en 612 av. J.-C. sous les coups d’une coalition incluant Mèdes et Babyloniens. L’ampleur réelle d’un « empire mède » (678-550 av. J.-C. selon cette source) reste discutée par les historiens modernes, car il est surtout connu par Hérodote et par des textes assyriens et babyloniens. Les Perses s’installent en Persis (Parsa, le Fars actuel) autour d’Anshan : la tradition dynastique cite Achéménès, Teispès, Cyrus Ier et Cambyse Ier parmi les ancêtres de Cyrus II, dont le royaume est d’abord un vassal des Mèdes.'
        ],
        example: {
          statement: 'La World History Encyclopedia date l’Empire mède de 678 à 550 av. J.-C. Quelle durée cela représente-t-il ?',
          calculation: 'Pour des dates avant notre ère, on soustrait la date la plus récente à la plus ancienne : 678 − 550 = 128.',
          answer: 'Environ 128 ans. C’est une estimation : la durée et l’extension de l’empire mède sont discutées par les historiens.'
        },
        exercise: {
          question: 'Pourquoi ne faut-il pas confondre Suse et l’Élam ?',
          answer: 'Ce sont deux entités politiques différentes : Suse, fondée avant la période proto-élamite, était contemporaine de la culture élamite mais n’est pas synonyme d’Élam.'
        },
        exercises: [
          {
            question: 'Quelle région porte le nom ancien de Persis (Parsa) et à quoi correspond-elle aujourd’hui ?',
            answer: 'Elle correspond au Fars, dans le sud-ouest de l’Iran. C’est de là que vient le nom des Perses.'
          },
          {
            question: 'Que signifie le terme « aryen » dans l’Avesta ?',
            answer: 'Il signifie « noble », « civilisé » ou « homme libre ». Il n’a pas de sens racial ; cette interprétation date du XIXe siècle.'
          },
          {
            question: 'Quel événement de 612 av. J.-C. modifie l’équilibre des puissances dans la région ?',
            answer: 'La chute de l’Empire assyrien, provoquée par une coalition incluant les Mèdes et les Babyloniens.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18563/perse-ancienne/' },
          { title: 'World History Encyclopedia — Élam', url: 'https://www.worldhistory.org/trans/fr/1-275/elam/' },
          { title: 'World History Encyclopedia — Mèdes', url: 'https://www.worldhistory.org/trans/fr/1-22524/medes/' },
          { title: 'World History Encyclopedia — Suse', url: 'https://www.worldhistory.org/trans/fr/1-276/suse/' }
        ]
      }
    },
    {
      id: 'cyrus-ii-empire-achemenide',
      title: 'Cyrus II et la naissance de l’Empire achéménide',
      field: 'Perse ancienne · Vers 550-522 av. J.-C.',
      summary: 'Étudier les conquêtes de Cyrus II, le Cylindre de Cyrus et les débuts de l’organisation de l’empire.',
      lesson: {
        sections: [
          'Cyrus II (Cyrus le Grand), fils de Cambyse Ier et petit-fils du roi mède Astyage, renverse celui-ci vers 550 av. J.-C. Il soumet ensuite la Lydie en 546 av. J.-C. puis Babylone en 539 av. J.-C. D’après la World History Encyclopedia, son empire s’étend à la fin de son règne de la région de la Syrie actuelle jusqu’aux frontières de l’Inde, en passant par l’actuelle Turquie. Il porte le nom d’Achéménès, ancêtre de la dynastie. Cyrus meurt en 530 av. J.-C. : la World History Encyclopedia évoque une mort probable au combat, et la tradition grecque d’Hérodote la situe lors d’une campagne contre les Massagètes.',
          'Le Cylindre de Cyrus est un cylindre d’argile cuite en cunéiforme babylonien, découvert en 1879 à Babylone et conservé au British Museum. Il relate l’entrée de Cyrus à Babylone en 539 av. J.-C. : le dieu Marduk l’aurait choisi pour remplacer Nabonide, accusé d’avoir négligé les cultes babyloniens. Cyrus y affirme avoir restauré des sanctuaires et permis à des populations déplacées de rentrer chez elles. Le British Museum précise que le texte ne parle pas de droits de l’homme et que cette notion aurait été étrangère à l’époque de Cyrus, tout en soulignant que le retour des peuples déportés rompt avec les pratiques assyriennes et babyloniennes antérieures. Les Juifs n’y sont pas mentionnés : leur retour en Judée est connu par la tradition biblique, que la World History Encyclopedia rapporte.',
          'La World History Encyclopedia attribue à Cyrus une organisation en provinces (satrapies) dirigées par des satrapes, avec un commandement militaire distinct. D’autres historiens associent plutôt la structuration systématique des satrapies à Darius Ier : il faut donc distinguer l’héritage de Cyrus des réformes ultérieures. Cyrus fonde Pasargades, et l’empire s’appuie aussi sur Babylone, Ecbatane et Suse. Le qanat, galerie en pente jalonnée de puits verticaux, n’est pas une invention de Cyrus : il est déjà attesté sous Sargon II d’Assyrie, lors de la campagne de 714 av. J.-C. contre l’Urartu, autour d’Ulhu. Les Perses en étendent l’usage. Les jardins royaux, pairi-daeza, sont à l’origine du mot « paradis ».',
          'Cambyse II (r. 530-522 av. J.-C.) succède à son père et conquiert l’Égypte vers 525 av. J.-C. À sa mort en 522, la succession est contestée. La version officielle de Darius parle d’un usurpateur mède, Gaumata, qui se serait fait passer pour Bardiya, frère de Cambyse. Les spécialistes continuent de débattre de ces événements, et de nombreux historiens modernes y voient un récit favorable à Darius. Cette crise ouvre la voie à l’arrivée de Darius Ier, objet du chapitre suivant.'
        ],
        example: {
          statement: 'Cyrus II renverse Astyage vers 550 av. J.-C. et prend Babylone en 539 av. J.-C. Combien d’années séparent ces deux événements ?',
          calculation: 'Avant notre ère, on compte à rebours : 550 − 539 = 11.',
          answer: 'Environ 11 ans. La date de 550 av. J.-C. est approximative (« vers 550 »).'
        },
        exercise: {
          question: 'Pourquoi l’expression « première charte des droits de l’homme » appliquée au Cylindre de Cyrus est-elle discutée ?',
          answer: 'Parce que le texte, rédigé dans le style royal babylonien, ne parle pas de droits de l’homme. Il présente Cyrus comme choisi par Marduk et relève en partie de la légitimation politique, même si le retour des peuples déportés est une politique notable.'
        },
        exercises: [
          {
            question: 'En quelle année Cyrus II conquiert-il Babylone ?',
            answer: 'En 539 av. J.-C.'
          },
          {
            question: 'Cyrus II a-t-il inventé le qanat ?',
            answer: 'Non. Le qanat est déjà attesté sous Sargon II d’Assyrie, en 714 av. J.-C. ; les Perses en ont développé l’usage sur un territoire beaucoup plus vaste.'
          },
          {
            question: 'Quelle ville Cyrus II fonde-t-il comme capitale ?',
            answer: 'Pasargades.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18563/perse-ancienne/' },
          { title: 'World History Encyclopedia — Empire achéménide', url: 'https://www.worldhistory.org/trans/fr/1-322/empire-achemenide/' },
          { title: 'World History Encyclopedia — Cylindre de Cyrus', url: 'https://www.worldhistory.org/trans/fr/2-166/cylindre-de-cyrus/' },
          { title: 'British Museum — The Cyrus Cylinder', url: 'https://www.britishmuseum.org/collection/object/W_1880-0617-1941' }
        ]
      }
    },
    {
      id: 'darius-ier-administration-persepolis',
      title: 'Darius Ier : Behistun, administration et Persépolis',
      field: 'Perse ancienne · 522-486 av. J.-C.',
      summary: 'Comprendre comment Darius Ier prend le pouvoir, organise l’empire et fait construire Persépolis.',
      lesson: {
        sections: [
          'Après la mort de Cambyse II en 522 av. J.-C., Darius Ier (r. 522-486 av. J.-C.) prend le pouvoir et doit affronter de nombreuses révoltes. Il les raconte dans l’inscription de Behistun (Bisotoun), un relief et un texte monumentaux gravés sur une falaise de la province de Kermanshah, en vieux perse, en élamite et en babylonien. L’UNESCO y compte environ 1 200 lignes d’inscriptions relatant les batailles livrées en 521-520 av. J.-C. Beaucoup d’historiens y voient aussi un texte de légitimation politique. L’inscription a joué un rôle central dans le déchiffrement du cunéiforme au XIXe siècle, notamment grâce à Henry Rawlinson ; le site est inscrit au patrimoine mondial depuis 2006.',
          'L’empire est découpé en provinces, les satrapies. Selon la World History Encyclopedia, les satrapes assurent l’administration tandis qu’un commandant militaire distinct supervise l’armée et la police de la région : cette séparation réduit le risque qu’un gouverneur concentre trop de pouvoir. Les ordres circulent sur un réseau routier dont la Route royale, qui relie Suse à Sardes, capitale de la satrapie de Lydie ; des relais permettent aux messagers de se reposer et de changer de monture. Hérodote admirait ce système postal. L’araméen sert de langue administrative à l’échelle de l’empire, tandis que les inscriptions royales emploient souvent le vieux perse, l’élamite et le babylonien.',
          'Persépolis est fondée par Darius Ier vers 518 av. J.-C., selon l’UNESCO, sur une vaste terrasse en partie artificielle. Le site sert de capitale cérémonielle de l’empire. L’Apadana, grande salle d’audience, est commencée sous Darius et achevée sous son fils Xerxès Ier ; la construction se poursuit sous d’autres souverains. Les reliefs représentent notamment des délégations de peuples de l’empire. Le site est inscrit au patrimoine mondial depuis 1979 et sera détruit en partie par un incendie après l’arrivée d’Alexandre en 330 av. J.-C. (voir le chapitre suivant).',
          'Dans ses inscriptions, Darius attribue ses victoires à la faveur d’Ahura Mazda. Cette référence religieuse accompagne une politique de continuité avec Cyrus II, que la World History Encyclopedia décrit comme tolérante, même si l’empire reste traversé de révoltes, fréquentes dans l’Antiquité après la mort d’un souverain. Les spécialistes débattent de la place exacte du zoroastrisme sous les Achéménides : les inscriptions royales citent Ahura Mazda sans nommer Zoroastre.'
        ],
        example: {
          statement: 'Darius Ier règne de 522 à 486 av. J.-C. Quelle est la durée approximative de son règne ?',
          calculation: 'Avant notre ère, on soustrait la date la plus récente à la plus ancienne : 522 − 486 = 36.',
          answer: 'Environ 36 ans.'
        },
        exercise: {
          question: 'Pourquoi l’inscription de Behistun est-elle importante pour les historiens et les linguistes ?',
          answer: 'Elle rapporte les événements du début du règne de Darius en trois langues cunéiformes (vieux perse, élamite, babylonien), ce qui a joué un rôle essentiel dans le déchiffrement du cunéiforme ; c’est aussi un texte de légitimation politique.'
        },
        exercises: [
          {
            question: 'Quelles villes la Route royale relie-t-elle selon la World History Encyclopedia ?',
            answer: 'Suse, capitale de l’empire, et Sardes, capitale de la satrapie de Lydie.'
          },
          {
            question: 'Dans quelles trois langues l’inscription de Behistun est-elle rédigée ?',
            answer: 'En vieux perse, en élamite et en babylonien.'
          },
          {
            question: 'Vers quelle date Persépolis est-elle fondée, d’après l’UNESCO ?',
            answer: 'Vers 518 av. J.-C., par Darius Ier.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18563/perse-ancienne/' },
          { title: 'World History Encyclopedia — Gouvernement de Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18564/gouvernement-de-perse-ancienne/' },
          { title: 'World History Encyclopedia — Persépolis', url: 'https://www.worldhistory.org/trans/fr/1-235/persepolis/' },
          { title: 'UNESCO — Bisotun', url: 'https://whc.unesco.org/en/list/1222' },
          { title: 'UNESCO — Persépolis', url: 'https://whc.unesco.org/en/list/114' }
        ]
      }
    },
    {
      id: 'guerres-greco-perses-alexandre',
      title: 'Les guerres gréco-perses et la chute des Achéménides',
      field: 'Perse ancienne · 499-330 av. J.-C.',
      summary: 'Suivre les conflits avec les Grecs, la conquête d’Alexandre et apprendre à croiser des sources de points de vue différents.',
      lesson: {
        sections: [
          'Les cités grecques d’Ionie, en Asie Mineure, se révoltent contre la domination perse (révolte ionienne, 499-494 av. J.-C.) avec le soutien d’Athènes. Darius Ier envoie ensuite une expédition contre la Grèce, arrêtée à Marathon en 490 av. J.-C. Darius meurt en 486 av. J.-C. Ce récit repose largement sur Hérodote, un auteur grec, ce qui impose de tenir compte de son point de vue.',
          'Xerxès Ier (r. 486-465 av. J.-C.) lance une nouvelle invasion en 480 av. J.-C. La World History Encyclopedia parle de la plus grande armée levée jusqu’alors ; les chiffres d’Hérodote (plus de deux millions de combattants) sont jugés très exagérés par les historiens modernes. Après les combats des Thermopyles et de l’Artémision, la flotte perse est battue à Salamine (480 av. J.-C.), puis l’armée est défaite à Platées (479 av. J.-C.). L’invasion échoue, mais l’Empire achéménide n’est pas détruit : Xerxès poursuit ensuite les grands chantiers, notamment à Persépolis.',
          'Selon la World History Encyclopedia, l’empire reste stable sous les souverains suivants jusqu’à Darius III (336-330 av. J.-C.). Alexandre le Grand franchit l’Hellespont en 334 av. J.-C. et bat les Perses au Granique (334), à Issos (333) puis à Gaugamela (331 av. J.-C.). Persépolis est prise puis incendiée en 330 av. J.-C. ; les raisons de l’incendie sont discutées. Darius III est assassiné par Bessos, qui se proclame Artaxerxès V avant d’être exécuté par Alexandre. Alexandre se présente alors comme le successeur de Darius.',
          'L’histoire achéménide est connue par des auteurs grecs (Hérodote, Xénophon, Ctésias), des inscriptions royales (Behistun, Persépolis), des textes bibliques et des archives administratives, comme les tablettes de fortification de Persépolis, surtout en élamite et datées d’environ 509-493 av. J.-C. Les auteurs grecs écrivent souvent à distance et avec un point de vue hostile ; les inscriptions royales sont des textes officiels. Croiser ces sources est donc indispensable, d’autant que les Perses ont laissé peu de récits historiques narratifs de leur propre point de vue.'
        ],
        example: {
          statement: 'Darius Ier est arrêté à Marathon en 490 av. J.-C. ; Xerxès Ier envahit la Grèce en 480 av. J.-C. Combien d’années séparent ces deux expéditions ?',
          calculation: 'Avant notre ère, on compte à rebours : 490 − 480 = 10.',
          answer: '10 ans.'
        },
        exercise: {
          question: 'Pourquoi faut-il être prudent avec les chiffres d’Hérodote sur l’armée de Xerxès ?',
          answer: 'Parce qu’Hérodote est un auteur grec écrivant du point de vue des vainqueurs, et que les historiens modernes jugent ses chiffres très exagérés.'
        },
        exercises: [
          {
            question: 'Quelle bataille arrête l’invasion de la Grèce lancée par Darius Ier en 490 av. J.-C. ?',
            answer: 'La bataille de Marathon.'
          },
          {
            question: 'Qui assassine Darius III selon la World History Encyclopedia ?',
            answer: 'Son confident et garde du corps Bessos, qui se proclame ensuite Artaxerxès V.'
          },
          {
            question: 'Quelle grande bataille de 331 av. J.-C. oppose Alexandre à Darius III ?',
            answer: 'La bataille de Gaugamela.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18563/perse-ancienne/' },
          { title: 'World History Encyclopedia — Bataille de Marathon', url: 'https://www.worldhistory.org/trans/fr/1-333/bataille-de-marathon/' },
          { title: 'World History Encyclopedia — Xerxès Ier', url: 'https://www.worldhistory.org/trans/fr/1-359/xerxes-ier/' },
          { title: 'World History Encyclopedia — Alexandre le Grand', url: 'https://www.worldhistory.org/trans/fr/1-265/alexandre-le-grand/' }
        ]
      }
    },
    {
      id: 'seleucides-parthes',
      title: 'Les Séleucides et les Parthes',
      field: 'Perse ancienne · 323 av. J.-C. - 224 ap. J.-C.',
      summary: 'Comprendre la période hellénistique en Iran, la montée de la Parthie et ses conflits avec Rome.',
      lesson: {
        sections: [
          'Alexandre meurt en 323 av. J.-C. et son empire est partagé entre ses généraux. Séleucos Ier Nicator (r. 305-281 av. J.-C.) fonde l’Empire séleucide (312-63 av. J.-C. selon la World History Encyclopedia), qui couvre notamment la Mésopotamie et une partie de l’Asie centrale. Il conserve en grande partie le modèle perse de gouvernement et la tolérance religieuse, mais confie les plus hauts postes à des Grecs. Le grec devient la langue de la cour, et Grecs et Perses se marient entre eux.',
          'La Parthie et la Bactriane s’éloignent peu à peu du pouvoir séleucide. En 247 av. J.-C., Arsace Ier fonde un royaume indépendant, qui devient l’Empire parthe. Antiochos III reprend brièvement la Parthie vers 209 av. J.-C., puis il est vaincu par Rome à Magnésie (190 av. J.-C.) ; le traité d’Apamée (188 av. J.-C.) réduit fortement l’empire séleucide. Les rois parthes Mithridate Ier (r. 171-132 av. J.-C.) puis Mithridate II (r. 124-88 av. J.-C.) étendent leur domination. Les Séleucides ne subsistent plus que comme petit royaume tampon en Syrie jusqu’à leur défaite face à Pompée en 63 av. J.-C.',
          'Les Parthes laissent aux rois des régions conquises leur position, à condition qu’ils versent un tribut, et réduisent la taille des satrapies. Leur art et leur architecture mêlent traditions perses et hellénistiques. Leur armée s’appuie sur la cavalerie et sur le « tir parthe » : des archers à cheval feignent la retraite puis se retournent pour tirer. En 53 av. J.-C., une armée parthe commandée par Suréna écrase les légions de Crassus à Carrhes, où Crassus trouve la mort ; en 36 av. J.-C., la campagne de Marc Antoine contre les Parthes échoue aussi.',
        'Les campagnes romaines affaiblissent les Parthes ; la World History Encyclopedia indique que l’empire parthe est sévèrement affaibli vers 165 ap. J.-C. par les campagnes romaines. L’empire parthe prend fin en 224 ap. J.-C., quand le dernier roi, Artaban IV, est renversé par son vassal Ardashir Ier, fondateur de l’empire sassanide. Les sources écrites parthes sont rares : notre connaissance repose beaucoup sur des auteurs grecs et romains, ce qui limite et oriente cette connaissance.'
        ],
        example: {
          statement: 'L’Empire parthe est daté de 247 av. J.-C. à 224 ap. J.-C. Quelle est sa durée approximative ?',
          calculation: 'Il n’existe pas d’année 0 entre 1 av. J.-C. et 1 ap. J.-C. : 247 + 224 − 1 = 470.',
          answer: 'Environ 470 ans. Ce calcul reste une estimation, les dates étant des repères conventionnels.'
        },
        exercise: {
          question: 'Comment les Parthes réduisent-ils le risque de rébellion dans leurs provinces ?',
          answer: 'Selon la World History Encyclopedia, ils réduisent la taille des satrapies et laissent aux rois des régions conquises leur position, à condition qu’ils versent un tribut.'
        },
        exercises: [
          {
            question: 'Qui fonde l’Empire séleucide ?',
            answer: 'Séleucos Ier Nicator, un des généraux d’Alexandre.'
          },
          {
            question: 'En quoi consiste le « tir parthe » ?',
            answer: 'Des archers à cheval feignent la retraite, puis se retournent pour tirer sur leurs adversaires qui avancent.'
          },
          {
            question: 'Quelle bataille de 53 av. J.-C. oppose les Parthes à Rome ?',
            answer: 'La bataille de Carrhes, où Crassus est vaincu et tué.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18563/perse-ancienne/' },
          { title: 'World History Encyclopedia — Empire séleucide', url: 'https://www.worldhistory.org/trans/fr/1-246/empire-seleucide/' },
          { title: 'World History Encyclopedia — Parthie (Empire)', url: 'https://www.worldhistory.org/trans/fr/1-18370/parthie-empire/' },
          { title: 'World History Encyclopedia — Bataille de Carrhes', url: 'https://www.worldhistory.org/trans/fr/2-1406/bataille-de-carrhes/' }
        ]
      }
    },
    {
      id: 'sassanides-fin-perse-antique',
      title: 'L’Empire sassanide et la fin de la Perse antique',
      field: 'Perse ancienne · 224-651 ap. J.-C.',
      summary: 'Étudier la fondation, les sommets et la chute de l’Empire sassanide, dernière puissance perse avant la conquête arabe.',
      lesson: {
        sections: [
          'Vers 224 ap. J.-C., Ardashir Ier, issu de Persis, bat le dernier roi parthe, Artaban IV, à la bataille d’Hormozgan et fonde l’empire sassanide, nommé d’après l’ancêtre Sasan. L’empire se désigne lui-même Ērānšahr, « empire des Iraniens » ; Shapur Ier se dit « seigneur de l’empire des Iraniens » dans sa grande inscription trilingue. La capitale est Ctésiphon, ancien siège parthe près de l’actuelle Bagdad. Selon la World History Encyclopedia, Ardashir cherche à bâtir un royaume stable fondé sur le zoroastrisme.',
          'Shapur Ier (r. vers 240-270 ap. J.-C.) mène des campagnes contre Rome, profitant de la crise du IIIe siècle. Vers 260 ap. J.-C., il capture l’empereur Valérien près d’Édesse, épisode célébré par des reliefs rupestres, notamment à Naqsh-e Rostam. À la fin de son règne, l’empire s’étend de l’Euphrate à l’Indus, d’après le Metropolitan Museum. Le prophète Mani, fondateur du manichéisme, est accueilli à sa cour. La World History Encyclopedia décrit une politique de tolérance religieuse ; la situation des minorités a toutefois varié selon les règnes et l’influence du clergé zoroastrien.',
          'Khosro Ier (r. 531-579 ap. J.-C.) est considéré comme l’un des plus grands souverains sassanides. La World History Encyclopedia lui attribue une réforme fiscale, la division de l’empire en quatre grands commandements militaires et la fondation de l’Académie de Gondichapour, grand centre savant et médical ; l’ampleur exacte de cette institution est débattue. L’arche de Taq Kasra, encore visible à Ctésiphon, est attribuée par la World History Encyclopedia à Shapur Ier ou, selon certains spécialistes, à Khosro Ier.',
          'La World History Encyclopedia cite comme facteurs d’affaiblissement la faiblesse de certains souverains, la corruption du clergé et la peste de 627-628 ; les guerres répétées avec Byzance, dont celle de 602-628, épuisent aussi l’empire. Les armées arabes musulmanes battent les Sassanides à al-Qadisiyya (636) puis à Nahavand (642). Le dernier souverain, Yazdgard III, meurt en 651 ap. J.-C., date retenue par la World History Encyclopedia comme fin de la Perse antique. La langue, la culture et de nombreuses pratiques administratives et artistiques iraniennes survivent à la conquête.'
        ],
        example: {
          statement: 'L’Empire sassanide est daté de 224 à 651 ap. J.-C. Quelle est sa durée approximative ?',
          calculation: 'Les deux dates sont après J.-C. : 651 − 224 = 427.',
          answer: 'Environ 427 ans.'
        },
        exercise: {
          question: 'Pourquoi 651 ap. J.-C. est-elle une date repère pour la Perse antique ?',
          answer: 'C’est l’année de la mort du dernier souverain sassanide, Yazdgard III, après la conquête arabe musulmane ; la World History Encyclopedia la retient comme fin de la Perse antique.'
        },
        exercises: [
          {
            question: 'Quel empereur romain Shapur Ier capture-t-il vers 260 ap. J.-C. ?',
            answer: 'Valérien, près d’Édesse.'
          },
          {
            question: 'Quelle était la capitale de l’Empire sassanide ?',
            answer: 'Ctésiphon, près de l’actuelle Bagdad.'
          },
          {
            question: 'Quelle bataille de 642 marque une défaite décisive des Sassanides face aux armées arabes ?',
            answer: 'La bataille de Nahavand.'
          }
        ],
        sources: [
          { title: 'World History Encyclopedia — Perse ancienne', url: 'https://www.worldhistory.org/trans/fr/1-18563/perse-ancienne/' },
          { title: 'World History Encyclopedia — Empire sassanide', url: 'https://www.worldhistory.org/trans/fr/1-690/empire-sassanide/' },
          { title: 'World History Encyclopedia — Chapour Ier', url: 'https://www.worldhistory.org/trans/fr/1-689/chapour-ier/' },
          { title: 'World History Encyclopedia — Khosro Ier', url: 'https://www.worldhistory.org/trans/fr/1-18809/khosro-ier/' },
          { title: 'Metropolitan Museum of Art — The Sasanian Empire (224–651 A.D.)', url: 'https://www.metmuseum.org/essays/the-sasanian-empire-224-651-a-d' }
        ]
      }
    }
  ]
},

{
  id: 'mesopotamie-antique',
  sortYear: -3500,
  title: 'Mésopotamie : des premières villes aux empires du Proche-Orient',
  note: 'Six chapitres sur les milieux mésopotamiens, les cités sumériennes, l’écriture cunéiforme, les royaumes d’Akkad et d’Ur, Babylone et ses traditions juridiques, puis l’Assyrie et la Babylonie tardive. Les dates sont approximatives, les chronologies peuvent varier selon les spécialistes et les régions ne suivent pas toutes la même évolution.',
  chapters: [
    {
      id: 'milieux-agriculture-villes',
      title: 'Entre le Tigre et l’Euphrate : agriculture, irrigation et naissance des villes',
      field: 'Mésopotamie · Du Néolithique au IVe millénaire av. n. è.',
      summary: 'Étudier les milieux du Proche-Orient, les transformations agricoles et les conditions qui favorisent l’urbanisation sans réduire celle-ci à une cause unique.',
      lesson: {
        sections: [
          'Le mot Mésopotamie vient du grec et signifie « entre les fleuves ». Il désigne une région historique structurée notamment par le Tigre et l’Euphrate, correspondant surtout à l’Irak actuel et à des zones voisines de la Syrie, de la Turquie, de l’Iran et du Koweït. Ses limites varient selon les périodes : il ne s’agit ni d’un État unique ni d’une civilisation homogène. Les populations, les langues et les pouvoirs politiques y ont changé au fil des millénaires.',
          'Les fleuves et leurs affluents fournissaient de l’eau et des voies de circulation, mais leurs régimes étaient variables et les pluies insuffisantes dans certaines zones méridionales. Des canaux, des digues et des travaux d’entretien permettaient d’acheminer l’eau vers les champs et de limiter certains risques. L’irrigation exigeait une coordination collective et un travail régulier ; elle ne suffit toutefois pas, à elle seule, à expliquer la formation des États. Les ressources, les échanges, les conflits, les institutions et les choix des communautés comptaient également.',
          'Les communautés du Proche-Orient pratiquaient l’agriculture et l’élevage bien avant l’apparition des grandes villes. Au sud de la Mésopotamie, l’agriculture céréalière, l’élevage, la pêche et l’exploitation des marais s’inscrivaient dans des économies diverses. L’orge jouait un rôle important dans plusieurs systèmes agricoles, notamment parce qu’elle supportait relativement bien certaines conditions locales. La production pouvait être stockée, redistribuée ou échangée, ce qui contribua à la spécialisation de certaines activités.',
          'Au IVe millénaire av. n. è., des centres urbains comme Uruk prennent une ampleur remarquable. Les grands bâtiments, les ateliers, les objets importés et les premières archives administratives témoignent d’une organisation sociale plus complexe. Cette transformation fut progressive et inégale : les villages ne disparurent pas, et les villes ne se développèrent pas toutes au même rythme. La croissance urbaine s’explique par une combinaison de facteurs économiques, politiques, religieux et environnementaux.'
        ],
        example: {
          statement: 'Un document situe l’essor urbain d’Uruk au IVe millénaire av. n. è. et un autre décrit des communautés agricoles plus anciennes. Quel phénomène est antérieur ?',
          calculation: 'Dans une chronologie av. n. è., une date dont le nombre est plus grand est plus ancienne : 7000 av. n. è. précède 3500 av. n. è.',
          answer: 'Les communautés agricoles plus anciennes précèdent l’essor urbain d’Uruk. La transition n’a pas été instantanée et les dates varient selon les sites étudiés.'
        },
        exercise: {
          question: 'Pourquoi l’irrigation a-t-elle été importante dans certaines régions de Mésopotamie, et pourquoi ne suffit-elle pas à expliquer à elle seule la naissance des villes ?',
          answer: 'Elle permettait d’acheminer l’eau vers les cultures dans des zones où les précipitations pouvaient être insuffisantes. La formation des villes dépendait aussi des échanges, des institutions, de la spécialisation du travail, des pratiques religieuses et des rapports de pouvoir.'
        },
        exercises: [
          {
            question: 'Quels sont les deux fleuves associés au nom de la Mésopotamie ?',
            answer: 'Le Tigre et l’Euphrate.'
          },
          {
            question: 'La Mésopotamie a-t-elle toujours constitué un seul État ?',
            answer: 'Non. La région a abrité de nombreuses cités, royaumes et empires à différentes époques.'
          },
          {
            question: 'Citer deux activités économiques importantes dans la région ancienne.',
            answer: 'Par exemple, l’agriculture et l’élevage ; la pêche, l’artisanat et le commerce étaient également importants selon les lieux et les périodes.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Mesopotamia',
            url: 'https://www.worldhistory.org/Mesopotamia/'
          },
          {
            title: 'World History Encyclopedia — Agriculture in the Ancient World',
            url: 'https://www.worldhistory.org/article/9/agriculture-in-the-ancient-world/'
          },
          {
            title: 'The Metropolitan Museum of Art — Art of the First Cities',
            url: 'https://www.metmuseum.org/toah/hd/uruk/hd_uruk.htm'
          }
        ]
      }
    },
    {
      id: 'sumer-et-cites',
      title: 'Sumer et les cités-États : temples, pouvoir et échanges',
      field: 'Sumer · IVe–IIIe millénaires av. n. è.',
      summary: 'Comprendre le rôle des cités sumériennes, des institutions religieuses et politiques, des métiers spécialisés et des réseaux d’échange.',
      lesson: {
        sections: [
          'Sumer désigne principalement le sud de la Mésopotamie où le sumérien était parlé et écrit dans l’Antiquité. À partir de la fin du IVe et surtout au IIIe millénaire av. n. è., des cités comme Uruk, Ur, Lagash et Nippur occupent une place majeure. Elles ne formaient pas continuellement un royaume unifié : chacune possédait ses institutions, ses territoires et ses intérêts, et elles pouvaient coopérer, commercer ou entrer en conflit.',
          'Le temple était un centre religieux, mais aussi une institution économique importante. Des terres, des troupeaux, des ateliers et des réserves pouvaient être administrés par des institutions liées aux temples ou aux palais. Les modalités exactes différaient selon les villes et les périodes ; il serait donc inexact de décrire toute l’économie mésopotamienne comme un système unique contrôlé exclusivement par les prêtres. Les textes administratifs montrent des distributions de produits, des rations, des livraisons et des obligations de travail.',
          'Le pouvoir politique changea au cours du temps. Les textes sumériens emploient différents titres pour des dirigeants, dont lugal et ensi, mais leur sens précis dépend du contexte et de la période. Les souverains commandaient des travaux, conduisaient des campagnes militaires, entretenaient des relations diplomatiques et finançaient des constructions. Leur légitimité était fréquemment exprimée en termes religieux : les inscriptions présentent les dieux comme protecteurs de la ville et comme garants de l’autorité du souverain.',
          'Les ressources locales ne suffisaient pas à produire tous les matériaux recherchés. Le sud mésopotamien manquait notamment de pierre et de bois de construction en quantité comparable à certaines régions voisines. Les échanges reliaient donc les cités à des zones d’approvisionnement plus lointaines. Les sceaux-cylindres, les tablettes et les objets archéologiques témoignent de transactions, d’identités administratives et de contacts avec d’autres régions du Proche-Orient. Les itinéraires et les partenaires variaient selon les époques.'
        ],
        example: {
          statement: 'Une tablette administrative mentionne des quantités d’orge distribuées à des travailleurs. Que peut-on raisonnablement en déduire ?',
          calculation: 'On distingue l’observation directe — des quantités et des bénéficiaires sont enregistrés — de l’interprétation historique, qui doit être confrontée à d’autres textes et aux données archéologiques.',
          answer: 'La tablette indique qu’une institution enregistrait une distribution de produits. À elle seule, elle ne permet pas de décrire toute l’économie de la cité ni de conclure que tous les habitants recevaient les mêmes rations.'
        },
        exercise: {
          question: 'Pourquoi parle-t-on de cités-États pour plusieurs villes sumériennes ?',
          answer: 'Parce que plusieurs villes disposaient de leur propre centre politique et religieux, administraient leur territoire et pouvaient agir indépendamment, même si des périodes d’unification ont aussi existé.'
        },
        exercises: [
          {
            question: 'Citer deux cités importantes de Sumer.',
            answer: 'Uruk et Ur, par exemple ; Lagash et Nippur sont également des exemples.'
          },
          {
            question: 'Les temples avaient-ils uniquement une fonction religieuse ?',
            answer: 'Non. Ils pouvaient aussi gérer des terres, des réserves, des ateliers et des activités de redistribution.'
          },
          {
            question: 'Pourquoi les échanges à longue distance étaient-ils utiles ?',
            answer: 'Ils permettaient d’obtenir des matières premières et des biens qui étaient rares ou absents dans certaines régions, notamment dans le sud mésopotamien.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Sumer',
            url: 'https://www.worldhistory.org/sumer/'
          },
          {
            title: 'World History Encyclopedia — Uruk',
            url: 'https://www.worldhistory.org/uruk/'
          },
          {
            title: 'The Metropolitan Museum of Art — Art of the First Cities',
            url: 'https://www.metmuseum.org/toah/hd/uruk/hd_uruk.htm'
          },
          {
            title: 'The Metropolitan Museum of Art — Cylinder seal and modern impression, Early Dynastic I',
            url: 'https://www.metmuseum.org/art/collection/search/325481'
          }
        ]
      }
    },
    {
      id: 'ecriture-cuneiforme-savoirs',
      title: 'L’écriture cunéiforme : administration, littérature et savoirs',
      field: 'Mésopotamie · Premières écritures à la fin du IVe millénaire av. n. è. et usages ultérieurs',
      summary: 'Étudier la naissance de l’écriture, son support matériel, la diversité des langues écrites et la transmission des connaissances.',
      lesson: {
        sections: [
          'Les premiers systèmes d’écriture attestés en Mésopotamie apparaissent à la fin du IVe millénaire av. n. è., notamment dans les archives d’Uruk. Les premières tablettes connues sont en grande partie liées à l’enregistrement de biens, de quantités et d’activités administratives. L’écriture ne fut pas inventée partout au même moment ni sous une forme identique : plusieurs régions du monde ont développé leurs propres traditions écrites. Il faut donc éviter de présenter la Mésopotamie comme l’unique lieu d’invention de toute écriture.',
          'Le terme « cunéiforme » décrit l’aspect en forme de coins de nombreux signes. Le scribe pressait généralement un calame, souvent taillé dans un roseau, dans l’argile encore humide. La forme des signes dépendait du geste, du support et de la période. Une fois séchées, les tablettes pouvaient être conservées ; certaines étaient cuites accidentellement ou volontairement, ce qui a favorisé leur survie. Le cunéiforme n’était pas une langue : c’était un système d’écriture adapté à plusieurs langues au cours de sa longue histoire.',
          'Le sumérien et l’akkadien sont deux langues différentes. Le sumérien n’est pas classé dans une famille linguistique connue, tandis que l’akkadien est une langue sémitique, avec notamment des variétés babylonienne et assyrienne. Le cunéiforme fut adapté à l’akkadien et à d’autres langues du Proche-Orient. Dans certains contextes, le sumérien continua d’être appris et utilisé pour les textes savants et religieux après qu’il eut cessé d’être une langue couramment parlée. Les scribes devaient donc maîtriser des signes, des conventions et parfois plusieurs langues.',
          'Les tablettes conservées couvrent des domaines très variés : comptes, contrats, lettres, listes lexicales, textes juridiques, hymnes, récits mythologiques, textes médicaux et observations astronomiques. Les écoles de scribes utilisaient notamment des listes de signes et de mots pour transmettre les savoirs. Les textes littéraires, dont les traditions associées à Gilgamesh, furent copiés et remaniés sur de longues périodes. La documentation est cependant inégale : les archives conservées reflètent surtout les institutions et les milieux capables de produire et de préserver des tablettes.'
        ],
        example: {
          statement: 'Une tablette cunéiforme est rédigée en akkadien. Peut-on conclure que le cunéiforme est la langue akkadienne ?',
          calculation: 'Il faut distinguer le système graphique, c’est-à-dire l’écriture cunéiforme, de la langue exprimée par les signes, ici l’akkadien.',
          answer: 'Non. Le cunéiforme est un système d’écriture qui a servi à noter plusieurs langues, notamment le sumérien et l’akkadien.'
        },
        exercise: {
          question: 'Pourquoi les tablettes cunéiformes sont-elles des sources essentielles pour les historiens, tout en ayant des limites ?',
          answer: 'Elles documentent directement des transactions, des institutions, des langues et des représentations anciennes. Mais elles proviennent souvent de contextes administratifs, savants ou élitaires et ne donnent pas automatiquement accès à l’expérience de toutes les catégories de population.'
        },
        exercises: [
          {
            question: 'Sur quel matériau écrivait-on souvent en cunéiforme ?',
            answer: 'Sur des tablettes d’argile, même si le cunéiforme a aussi été inscrit sur d’autres supports.'
          },
          {
            question: 'Quelle différence faut-il faire entre le sumérien et le cunéiforme ?',
            answer: 'Le sumérien est une langue ; le cunéiforme est un système d’écriture.'
          },
          {
            question: 'Citer deux types de textes cunéiformes autres que les comptes.',
            answer: 'Par exemple, des lettres, des contrats, des textes juridiques, des hymnes, des récits littéraires ou des observations astronomiques.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Cuneiform',
            url: 'https://www.worldhistory.org/cuneiform/'
          },
          {
            title: 'ORACC, University of Pennsylvania — Introduction to Cuneiform Sign Lists',
            url: 'https://oracc.museum.upenn.edu/dcclt/signlists/SignLists/index.html'
          },
          {
            title: 'ORACC, University of Pennsylvania — Introduction to lexical texts',
            url: 'https://oracc.museum.upenn.edu/dcclt/intro/lexical_intro.html'
          },
          {
            title: 'The British Museum — Babylon: Myth and Reality, teachers’ resource',
            url: 'https://www.britishmuseum.org/sites/default/files/2019-10/Babylon_Teachers_Resource.pdf'
          }
        ]
      }
    },
    {
      id: 'akkad-ur-troisieme-dynastie',
      title: 'Akkad et Ur III : unifications, administration et recompositions politiques',
      field: 'Mésopotamie · Vers 2334–2004 av. n. è., dates conventionnelles',
      summary: 'Comparer l’expansion du royaume d’Akkad et l’organisation de la troisième dynastie d’Ur, en tenant compte des incertitudes chronologiques.',
      lesson: {
        sections: [
          'Au milieu du IIIe millénaire av. n. è., les rivalités entre cités s’inscrivent dans un paysage politique changeant. Sargon d’Akkad, dont le règne est traditionnellement placé au XXIVe siècle av. n. è., est associé à la formation d’un vaste royaume couvrant une partie importante de la Mésopotamie et des territoires voisins. Les limites exactes et les modalités de contrôle de cet ensemble restent discutées. Le terme « empire » est utile pour décrire son expansion, mais ne doit pas faire imaginer un appareil administratif identique aux États modernes.',
          'L’empire d’Akkad associait des centres de pouvoir, des dirigeants locaux, des campagnes militaires et des relations de tribut ou de dépendance. Les inscriptions royales mettent en avant les victoires du souverain et la protection divine ; elles sont aussi des textes politiques destinés à présenter le pouvoir sous un jour favorable. Il faut les confronter aux archives administratives, aux vestiges archéologiques et aux traditions littéraires plus tardives. Les explications de la fin de la dynastie sont multiples et les sources ne permettent pas toujours d’isoler une cause unique.',
          'Après la période d’Akkad et une phase de recomposition, la troisième dynastie d’Ur, souvent appelée Ur III, domine une grande partie du sud mésopotamien vers 2112–2004 av. n. è. selon une chronologie courante. Ses souverains, dont Ur-Nammu et Shulgi, sont associés à une administration abondamment documentée par des milliers de tablettes. Ces documents enregistrent des produits agricoles, du bétail, des travailleurs, des livraisons et des déplacements. Cette documentation permet d’étudier les mécanismes administratifs, mais son abondance ne signifie pas que chaque région et chaque habitant soient également documentés.',
          'Les rois d’Ur III ont soutenu des constructions religieuses et des projets publics, et leur pouvoir s’exprimait dans des inscriptions et des rituels. La fin de la dynastie s’inscrit dans un contexte de tensions et de changements politiques, avec notamment des attaques venues de l’est et la montée d’autres pouvoirs régionaux. Après Ur III, plusieurs royaumes continuent de partager des traditions administratives, littéraires et religieuses mésopotamiennes. Les changements de dynastie ne correspondent donc pas à une disparition soudaine de la culture de la région.'
        ],
        example: {
          statement: 'Une chronologie donne pour Ur III un intervalle approximatif de 2112 à 2004 av. n. è. Quel est le repère le plus ancien ?',
          calculation: 'Pour les dates av. n. è., 2112 est antérieur à 2004, car le nombre d’années avant notre ère est plus grand.',
          answer: 'Le repère le plus ancien est 2112 av. n. è. Cet intervalle est conventionnel et peut varier légèrement selon les chronologies utilisées.'
        },
        exercise: {
          question: 'Pourquoi les tablettes administratives d’Ur III sont-elles utiles, et que ne permettent-elles pas de conclure à elles seules ?',
          answer: 'Elles montrent comment certaines institutions enregistraient les biens, les travailleurs et les livraisons. Elles ne décrivent pas nécessairement toute l’économie ni l’expérience de toutes les populations de l’État.'
        },
        exercises: [
          {
            question: 'À quel souverain associe-t-on traditionnellement la fondation de l’empire d’Akkad ?',
            answer: 'À Sargon d’Akkad.'
          },
          {
            question: 'Que signifie l’expression Ur III ?',
            answer: 'Elle désigne la troisième dynastie d’Ur, qui domina une grande partie du sud mésopotamien vers 2112–2004 av. n. è. dans une chronologie courante.'
          },
          {
            question: 'Pourquoi faut-il lire les inscriptions royales avec prudence ?',
            answer: 'Elles sont des sources historiques importantes, mais elles présentent souvent les victoires et la légitimité du souverain selon une perspective politique officielle.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Akkadian Empire',
            url: 'https://www.worldhistory.org/Akkadian_Empire/'
          },
          {
            title: 'World History Encyclopedia — Sargon of Akkad',
            url: 'https://www.worldhistory.org/Sargon_of_Akkad/'
          },
          {
            title: 'World History Encyclopedia — Ur-Nammu',
            url: 'https://www.worldhistory.org/Ur-Nammu/'
          },
          {
            title: 'ORACC — Royal Inscriptions of Mesopotamia',
            url: 'https://oracc.museum.upenn.edu/rinap/'
          }
        ]
      }
    },
    {
      id: 'babylone-droit-societe',
      title: 'Babylone : droit, société, religion et vie quotidienne',
      field: 'Babylonie · Début du IIe millénaire av. n. è. et traditions ultérieures',
      summary: 'Examiner le règne d’Hammurabi, les textes juridiques, les hiérarchies sociales et la place de Babylone dans les traditions mésopotamiennes.',
      lesson: {
        sections: [
          'Babylone devient un centre politique majeur au début du IIe millénaire av. n. è. Sous Hammurabi, dont le règne est souvent daté de 1792 à 1750 av. n. è. dans la chronologie moyenne, le royaume étend son influence sur une partie importante de la Mésopotamie. Les dates exactes dépendent de la chronologie adoptée. La puissance de Babylone s’appuyait sur la guerre, la diplomatie, l’administration et la légitimation religieuse du souverain. L’histoire de la ville ne se limite toutefois pas au règne d’Hammurabi : elle reste un centre politique et culturel pendant de nombreux siècles.',
          'Le texte connu sous le nom de Code d’Hammurabi est une collection de décisions et de dispositions juridiques gravées sur une stèle, et non un code moderne couvrant systématiquement tout le droit. Le prologue et l’épilogue présentent l’image du roi comme garant de la justice. Les dispositions abordent notamment les litiges, les contrats, la famille, les dommages, les rémunérations et les statuts sociaux. Les sanctions varient selon les situations et les catégories de personnes. Il faut donc éviter de résumer ce document à une égalité devant la loi au sens contemporain.',
          'Les sources montrent une société hiérarchisée, où le statut, la famille, la richesse, le genre et la dépendance juridique influençaient les possibilités et les obligations des individus. Les femmes pouvaient, dans certains contextes et sous certaines conditions, posséder des biens, participer à des transactions ou recourir à des procédures juridiques ; leurs droits n’étaient pas identiques à ceux des hommes dans toutes les situations. Les contrats, lettres et archives judiciaires révèlent des pratiques concrètes, mais ils ne représentent pas uniformément l’ensemble de la population.',
          'La religion structurait les calendriers, les fêtes, les temples et la représentation du pouvoir. Les habitants honoraient de nombreuses divinités dont l’importance variait selon les villes et les périodes. Marduk devint particulièrement associé à Babylone, tandis que d’autres centres avaient leurs propres divinités tutélaires. Les récits mythologiques, les hymnes et les rituels expliquaient l’ordre du monde selon des traditions diverses. Les pratiques religieuses ne doivent pas être traitées comme un système parfaitement uniforme pendant toute l’histoire mésopotamienne.',
          'La vie économique associait agriculture, élevage, artisanat, commerce, prêts et contrats. Les tablettes enregistrent des achats, des locations, des mariages, des héritages et des dettes. Les sceaux-cylindres pouvaient identifier une personne ou authentifier une opération en imprimant une image sur l’argile. Ces traces rendent visibles des aspects concrets de la vie quotidienne, tout en rappelant que les archives disponibles sont incomplètes et souvent liées à des activités institutionnelles ou commerciales.'
        ],
        example: {
          statement: 'Un article du texte juridique d’Hammurabi prévoit une sanction qui varie selon le statut des personnes concernées. Quelle conclusion historique est la plus prudente ?',
          calculation: 'On compare le texte à d’autres dispositions et à des documents de pratique, puis on distingue la norme prescrite des comportements réellement observés.',
          answer: 'Le texte montre que le statut social pouvait influencer la sanction juridique. Il ne prouve pas, à lui seul, que chaque jugement réel appliquait toujours la règle de manière identique.'
        },
        exercise: {
          question: 'Pourquoi le Code d’Hammurabi doit-il être étudié comme une source historique plutôt que comme un code moderne ?',
          answer: 'Il associe des dispositions juridiques à une présentation politique et religieuse du roi ; il ne couvre pas systématiquement tout le droit et ne prouve pas à lui seul la manière dont chaque affaire était jugée.'
        },
        exercises: [
          {
            question: 'Quel souverain est associé au célèbre texte juridique babylonien ?',
            answer: 'Hammurabi, roi de Babylone.'
          },
          {
            question: 'Le Code d’Hammurabi établit-il une égalité juridique identique à la conception moderne ?',
            answer: 'Non. Certaines sanctions et dispositions varient selon le statut des personnes et le type d’affaire.'
          },
          {
            question: 'À quoi servaient notamment les sceaux-cylindres ?',
            answer: 'Ils pouvaient identifier des personnes ou des institutions et authentifier des documents ou fermer des contenants.'
          }
        ],
        sources: [
          {
            title: 'World History Encyclopedia — Hammurabi',
            url: 'https://www.worldhistory.org/Hammurabi/'
          },
          {
            title: 'World History Encyclopedia — Code of Hammurabi',
            url: 'https://www.worldhistory.org/Code_of_Hammurabi/'
          },
          {
            title: 'The Metropolitan Museum of Art — Babylon',
            url: 'https://www.metmuseum.org/fr/essays/babylon'
          },
          {
            title: 'The Metropolitan Museum of Art — Cylinder seal, Old Babylonian',
            url: 'https://www.metmuseum.org/art/collection/search/327242'
          }
        ]
      }
    },
    {
      id: 'assyrie-babylonie-tardive',
      title: 'L’Assyrie, la Babylonie néo-babylonienne et les héritages mésopotamiens',
      field: 'Mésopotamie · XIVe–VIe siècles av. n. è., puis continuités culturelles ultérieures',
      summary: 'Suivre l’expansion de l’Assyrie, la chute de Ninive, le renouveau néo-babylonien et la persistance des traditions savantes mésopotamiennes.',
      lesson: {
        sections: [
          'L’Assyrie se développe dans le nord de la Mésopotamie autour de villes comme Assur, Kalhu, Dur-Sharrukin et Ninive. À partir du IIe millénaire av. n. è., les royaumes assyriens construisent progressivement une puissance régionale ; l’Empire néo-assyrien atteint une extension considérable entre le IXe et le VIIe siècle av. n. è. Son pouvoir s’appuie sur l’armée, les gouverneurs, les tributs, les déplacements de populations et la communication royale. L’empire n’était pas immuable : il devait gérer des révoltes, des frontières étendues et des relations complexes avec Babylone et les États voisins.',
          'Les palais assyriens sont connus pour leurs reliefs sculptés, leurs inscriptions royales et leurs programmes monumentaux. Les scènes de chasse, de cérémonie et de guerre construisent une image officielle du souverain et de l’ordre impérial. Ces œuvres constituent des sources précieuses, mais elles ne sont pas des reportages neutres : elles mettent en scène la puissance du roi et doivent être interprétées dans leur contexte. Les archives de tablettes révèlent aussi une administration développée et des activités savantes, notamment dans les domaines de la médecine, des présages et de l’observation du ciel.',
          'Au VIIe siècle av. n. è., l’empire assyrien connaît une crise et s’effondre sous les attaques de forces coalisées, notamment les Babyloniens et les Mèdes. Ninive tombe en 612 av. n. è. Cette chute met fin à la domination impériale assyrienne, mais elle ne signifie pas la disparition immédiate des populations, des langues ou des traditions culturelles assyriennes. Comme pour d’autres changements politiques de l’Antiquité, la fin d’un empire et la continuité des sociétés sont deux phénomènes distincts.',
          'Après la domination assyrienne, Babylone retrouve une position impériale sous la dynastie néo-babylonienne. Nabopolassar puis Nabuchodonosor II sont associés à cette période, notamment aux grands travaux de la capitale. Le royaume est conquis par le roi perse Cyrus II en 539 av. n. è. La conquête modifie l’autorité politique, mais les pratiques scribales et les traditions savantes mésopotamiennes continuent sous les empires ultérieurs. Le cunéiforme demeure utilisé dans certains milieux pendant des siècles, bien après la fin des royaumes indépendants de la région.',
          'L’héritage mésopotamien ne se résume pas à une liste d’« inventions » attribuées à un seul peuple. Il comprend des traditions d’écriture et d’archivage, des formes d’administration, des œuvres littéraires, des méthodes mathématiques, des observations astronomiques et des pratiques juridiques. Ces savoirs furent transmis, adaptés et parfois traduits au fil des contacts entre sociétés. Pour les étudier avec rigueur, il faut distinguer les faits attestés, les interprétations discutées et les récits modernes qui simplifient parfois des histoires longues et diverses.'
        ],
        example: {
          statement: 'Ninive tombe en 612 av. n. è. et Babylone est conquise par Cyrus II en 539 av. n. è. Quel événement est le plus ancien ?',
          calculation: 'Pour les dates av. n. è., 612 est plus ancien que 539, car il se situe plus loin dans le passé.',
          answer: 'La chute de Ninive en 612 av. n. è. est antérieure à la conquête de Babylone en 539 av. n. è.'
        },
        exercise: {
          question: 'Pourquoi la chute d’un empire ne signifie-t-elle pas nécessairement la disparition de sa culture ?',
          answer: 'Les populations, les langues, les pratiques religieuses, les techniques et les traditions savantes peuvent se poursuivre ou être adaptées sous de nouveaux pouvoirs politiques.'
        },
        exercises: [
          {
            question: 'Quelle ville assyrienne tombe en 612 av. n. è. ?',
            answer: 'Ninive.'
          },
          {
            question: 'Quel roi perse conquiert Babylone en 539 av. n. è. ?',
            answer: 'Cyrus II.'
          },
          {
            question: 'Pourquoi les reliefs des palais assyriens doivent-ils être interprétés avec prudence ?',
            answer: 'Ils expriment une représentation officielle du pouvoir et de la victoire ; ils ne sont pas des descriptions neutres de tous les événements.'
          }
        ],
        sources: [
          {
            title: 'The Metropolitan Museum of Art — Assyria, 1365–609 B.C.',
            url: 'https://www.metmuseum.org/es/essays/assyria-1365-609-b-c'
          },
          {
            title: 'The Metropolitan Museum of Art — Babylon',
            url: 'https://www.metmuseum.org/fr/essays/babylon'
          },
          {
            title: 'World History Encyclopedia — Neo-Babylonian Empire',
            url: 'https://www.worldhistory.org/Neo-Babylonian_Empire/'
          },
          {
            title: 'World History Encyclopedia — Cyrus the Great',
            url: 'https://www.worldhistory.org/Cyrus_the_Great/'
          },
          {
            title: 'ORACC — Introduction to Cuneiform Sign Lists',
            url: 'https://oracc.museum.upenn.edu/dcclt/signlists/SignLists/index.html'
          }
        ]
      }
    }
  ]
},

]



