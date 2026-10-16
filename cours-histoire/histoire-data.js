// Données du cours d'histoire (histoire-data.js) : x branches , x ch
// Même format que le cours de géologie (voir cours.js) : sections, exemple guidé,
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
    title: 'L’Antiquité : empires et monde méditerranéen',
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
  }
];
