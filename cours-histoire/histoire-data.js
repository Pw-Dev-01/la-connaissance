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
,

// ============================================================================
// BRANCHE 2 : « L’Antiquité : empires et monde méditerranéen » (5 chapitres)
// À COLLER dans histoire-data.js, juste après la ligne :
//     } // FIN BRANCHE 1
// et AVANT la ligne finale :
//     ];
// Ne pas oublier la virgule : la ligne « } // FIN BRANCHE 1 » doit être suivie
// d’une virgule (le bloc ci-dessous commence par « , » pour cela).
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
  } // FIN BRANCHE 2

];
