// Données du cours d'histoire (histoire-data.js) : 1 branche « Histoire des civilisations », 6 chapitres.
// Même format que le cours de géologie (voir cours.js) : sections, exemple guidé,
// exercices et bloc « RÉFÉRENCES » en bas de chaque leçon.
// Convention de datation : les dates avant J.-C. sont données avec « vers » dès
// qu'elles dépendent d'une chronologie discutée par les historiens ; les écarts
// entre sources sont signalés dans le texte plutôt que tranchés.
// Rappel : en av. J.-C., plus le nombre est grand, plus l'événement est ancien.
// ⚠️ Dans cours.js, remplacer : const DISCIPLINE = 'histoire';
window.courseCatalog = [
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
  } // FIN BRANCHE 1
];
