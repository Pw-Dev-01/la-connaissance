window.courseCatalog = [
  {
    id: 'structure-matiere',
    title: 'Structure de la matière',
    note: 'L’atome, les électrons, la classification périodique et la mole.',
    chapters: [
      {
        id: 'modele-atomique',
        title: 'Atome, cortège électronique et isotopes',
        field: 'Structure · bases',
        page: 'structure-matiere.html',
        summary: 'Constitution du noyau, cortège électronique, isotopes et nombre de masse.',
        lesson: {
          sections: [
            'L’atome est constitué d’un noyau central chargé positivement, formé de protons et de neutrons (les nucléons), autour duquel gravitent des électrons chargés négativement. Il est électriquement neutre : le nombre de protons Z est égal au nombre d’électrons.',
            'Deux isotopes possèdent le même numéro atomique Z mais un nombre de masse A différent (nombre de neutrons différent). Les configurations électroniques décrivent la répartition des électrons par sous-couches (1s, 2s, 2p, etc.).'
          ],
          formula: {
            label: 'COMPOSITION DU NOYAU',
            text: 'A = Z + N  |  Q(noyau) = +Z·e  |  Q(atome) = 0'
          },
          example: {
            statement: 'Le carbone 14 est noté ¹⁴₆C. Combien de protons, neutrons et électrons possède un atome de carbone 14 ?',
            calculation: 'Z = 6 donc 6 protons et 6 électrons. N = A − Z = 14 − 6 = 8.',
            answer: 'L’atome possède 6 protons, 8 neutrons et 6 électrons.'
          },
          exercise: {
            question: 'Combien de neutrons possède le noyau d’uranium ²³⁵₉₂U ?',
            answer: 'N = 235 − 92 = 143 neutrons.'
          }
        }
      },
      {
        id: 'tableau-periodique',
        title: 'Tableau périodique et périodicité',
        field: 'Structure · intermédiaire',
        summary: 'Périodes, familles d’éléments, électronégativité et électrons de valence.',
        lesson: {
          sections: [
            'Le tableau périodique classe les éléments par numéro atomique Z croissant. Les lignes forment les périodes et les colonnes regroupent les familles d’éléments partageant le même nombre d’électrons de valence et des propriétés chimiques analogues.',
            'L’électronégativité mesure la tendance d’un atome à attirer le doublet électronique d’une liaison covalente. Elle croît globalement de gauche à droite le long d’une période et de bas en haut dans une colonne.'
          ],
          formula: {
            label: 'ÉLECTRONS DE VALENCE',
            text: 'n_valence = e⁻ de la couche externe la plus élevée'
          },
          example: {
            statement: 'À quelle famille et période appartient le sodium Na (Z = 11, configuration 1s² 2s² 2p⁶ 3s¹) ?',
            calculation: 'Couche de valence 3s¹ : n = 3 (3e période) et 1 électron de valence (famille des alcalins, colonne 1).',
            answer: 'Le sodium appartient à la 3e période et à la colonne 1 (alcalins).'
          },
          exercise: {
            question: 'Quel est le nombre d’électrons de valence du chlore Cl (Z = 17, [Ne] 3s² 3p⁵) ?',
            answer: 'Le chlore possède 2 + 5 = 7 électrons de valence (halogènes).'
          }
        }
      },
      {
        id: 'mole-quantite-matiere',
        title: 'La mole et la masse molaire',
        field: 'Structure · calculs',
        summary: 'Constante d’Avogadro, relation entre masse, quantité de matière et masse molaire.',
        lesson: {
          sections: [
            'La mole est l’unité de quantité de matière du Système international. Une mole contient exactement la constante d’Avogadro N_A entités élémentaires (environ 6,022 × 10²³ entités).',
            'La masse molaire M d’une espèce est la masse d’une mole de cette espèce (en g·mol⁻¹). Elle relie la masse macroscopique m d’un échantillon au nombre de moles n.'
          ],
          formula: {
            label: 'RELATIONS DE LA MOLE',
            text: 'n = m / M  |  N = n · N_A  |  N_A ≈ 6,022 × 10²³ mol⁻¹'
          },
          example: {
            statement: 'Quelle est la quantité de matière contenue dans 36 g d’eau pure H₂O (M = 18,0 g·mol⁻¹) ?',
            calculation: 'n = m / M = 36 / 18,0 = 2,0 mol.',
            answer: 'Il y a 2,0 mol d’eau.'
          },
          exercise: {
            question: 'Quelle masse représentent 0,5 mol de saccharose C₁₂H₂₂O₁₁ (M = 342 g·mol⁻¹) ?',
            answer: 'm = n × M = 0,5 × 342 = 171 g.'
          }
        }
      }
    ]
  ,
  {
    id: 'liaisons-etats',
    title: 'Liaisons chimiques et états de la matière',
    note: 'Liaisons covalentes, forces intermoléculaires et solutions.',
    chapters: [
      {
        id: 'liaisons-covalentes-lewis',
        title: 'Liaison covalente et modèle de Lewis',
        field: 'Liaisons · bases',
        summary: 'Règle de l’octet, doublets liants et non liants, géométrie VSEPR.',
        lesson: {
          sections: [
            'Une liaison covalente résulte de la mise en commun de deux électrons entre deux atomes non métalliques. Les atomes adoptent une configuration stable analogue à celle des gaz nobles (règle du duet ou de l’octet).',
            'Le schéma de Lewis représente les doublets liants et les doublets non liants. La théorie VSEPR permet ensuite de prédire la géométrie spatiale de la molécule à partir de la répulsion des paires électroniques.'
          ],
          formula: {
            label: 'RÈGLE DE L’OCTET',
            text: 'N_doublets = (Σe⁻_souhaités − Σe⁻_valence) / 2'
          },
          example: {
            statement: 'Déterminer le nombre de doublets liants et non liants dans la molécule d’eau H₂O.',
            calculation: 'H apporte 1 e⁻ (x2), O apporte 6 e⁻, total = 8 e⁻ (4 doublets). Deux liaisons O–H (2 liants) et 2 doublets non liants sur O.',
            answer: 'L’oxygène porte 2 liaisons de valence et 2 doublets non liants (forme coudée).'
          },
          exercise: {
            question: 'Combien de doublets liants possède le méthane CH₄ ?',
            answer: '4 liaisons covalentes C–H simples, formant un tétraèdre.'
          }
        }
      },
      {
        id: 'interactions-intermoleculaires',
        title: 'Interactions intermoléculaires et solvatation',
        field: 'Liaisons · intermédiaire',
        summary: 'Forces de Van der Waals, liaisons hydrogène et miscibilité.',
        lesson: {
          sections: [
            'Les molécules interagissent entre elles par des forces intermoléculaires électrostatiques, collectivement appelées forces de Van der Waals (Keesom, Debye, London). Elles expliquent la cohésion des liquides et des solides moléculaires.',
            'La liaison hydrogène est une interaction dipôle-dipôle particulièrement forte, établie entre un atome d’hydrogène lié à un élément très électronégatif (O, N, F) et le doublet non liant d’un autre atome électronégatif.'
          ],
          formula: {
            label: 'ÉNERGIE DE LIAISON HYDROGÈNE',
            text: 'E_H ≈ 10 à 40 kJ·mol⁻¹  (vs ~400 kJ·mol⁻¹ pour covalente)'
          },
          example: {
            statement: 'Pourquoi la température d’ébullition de l’eau (100 °C) est-elle bien supérieure à celle du sulfure d’hydrogène H₂S (−60 °C) ?',
            calculation: 'L’oxygène est plus électronégatif que le soufre, ce qui permet à l’eau de former un réseau étendu de fortes liaisons hydrogène intermoléculaires.',
            answer: 'La présence de nombreuses liaisons hydrogène dans l’eau exige beaucoup plus d’énergie thermique pour passer à l’état gazeux.'
          },
          exercise: {
            question: 'L’éthanol CH₃CH₂OH peut-il former des liaisons hydrogène avec l’eau ?',
            answer: 'Oui, grâce au groupe hydroxyle -OH, ce qui explique sa parfaite miscibilité dans l’eau.'
          }
        }
      },
      {
        id: 'gaz-solutions',
        title: 'Solutions aqueuses et concentrations',
        field: 'Liaisons · calculs',
        summary: 'Concentration molaire, concentration massique et préparation de solutions par dilution.',
        lesson: {
          sections: [
            'Une solution est un mélange homogène obtenu par dissolution d’une ou plusieurs espèces chimiques (les solutés) dans un liquide majoritaire (le solvant). Lorsque le solvant est l’eau, on parle de solution aqueuse.',
            'La concentration molaire C mesure la quantité de matière de soluté dissous par unité de volume de solution. Lors d’une dilution, la quantité de matière de soluté se conserve.'
          ],
          formula: {
            label: 'CONCENTRATION ET DILUTION',
            text: 'C = n / V  |  t = C · M  |  C_mère · V_mère = C_fille · V_fille'
          },
          example: {
            statement: 'On dissout 0,05 mol de NaCl dans de l’eau pour obtenir 250 mL de solution. Quelle est la concentration molaire ?',
            calculation: 'V = 250 mL = 0,250 L. C = 0,05 / 0,250 = 0,20 mol·L⁻¹.',
            answer: 'La concentration est de 0,20 mol·L⁻¹.'
          },
          exercise: {
            question: 'Quel volume d’une solution mère à 1,0 mol·L⁻¹ faut-il prélever pour préparer 100 mL d’une solution à 0,1 mol·L⁻¹ ?',
            answer: 'V_mère = (C_fille × V_fille) / C_mère = (0,1 × 100) / 1,0 = 10 mL.'
          }
        }
      }
    ]
  }
  ,
  {
    id: 'transformations-chimiques',
    title: 'Transformations chimiques et stœchiométrie',
    note: 'Équations-bilans, réactif limitant, thermochimie et cinétique.',
    chapters: [
      {
        id: 'bilan-matiere-avancement',
        title: 'Tableau d’avancement et réactif limitant',
        field: 'Réactions · bases',
        page: 'index.html',
        summary: 'Équilibrage de réaction, avancement ξ, état final et réactif en défaut.',
        lesson: {
          sections: [
            'Une transformation chimique convertit des réactifs en produits avec conservation de la matière et des éléments chimiques (principe de Lavoisier). L’équation chimique s’écrit avec des coefficients stœchiométriques entiers.',
            'Le tableau d’avancement suit l’évolution des quantités de matière au cours de la réaction à l’aide de la variable d’avancement ξ (en moles). Le réactif limitant est celui qui annule le premier l’avancement.'
          ],
          formula: {
            label: 'AVANCEMENT DE RÉACTION',
            text: 'n_i(t) = n_i(0) + ν_i · ξ  |  ξ_max = min(n_réactif(0) / |ν_réactif|)'
          },
          example: {
            statement: 'On fait réagir 2 mol de N₂ et 3 mol de H₂ selon l’équation N₂ + 3 H₂ → 2 NH₃. Quel est le réactif limitant ?',
            calculation: 'Pour N₂ : ξ_max = 2/1 = 2 mol. Pour H₂ : ξ_max = 3/3 = 1 mol. Le minimum correspond à H₂.',
            answer: 'Le réactif limitant est H₂ avec un avancement maximal ξ_max = 1 mol.'
          },
          exercise: {
            question: 'Combien de moles d’ammoniac NH₃ sont produites dans l’exemple précédent ?',
            answer: 'n(NH₃) = 2 × ξ_max = 2 × 1 = 2 mol.'
          }
        }
      },
      {
        id: 'thermochimie-enthalpie',
        title: 'Énergie de réaction et enthalpie',
        field: 'Réactions · intermédiaire',
        summary: 'Réactions endothermiques et exothermiques, enthalpie standard de réaction ΔᵣH°.',
        lesson: {
          sections: [
            'Une transformation chimique s’accompagne d’un échange d’énergie thermique avec le milieu extérieur. Si le système libère de la chaleur, la réaction est dite exothermique (ΔᵣH < 0) ; s’il en absorbe, elle est endothermique (ΔᵣH > 0).',
            'La loi de Hess permet de calculer l’enthalpie standard d’une réaction à partir des enthalpies standards de formation des réactifs et des produits.'
          ],
          formula: {
            label: 'LOI DE HESS',
            text: 'ΔᵣH° = Σ ν_produits Δ_fH°(produits) − Σ ν_réactifs Δ_fH°(réactifs)'
          },
          example: {
            statement: 'La combustion d’une mole de méthane dégage 890 kJ. S’agit-il d’une réaction exo- ou endothermique ? Quelle est la valeur de ΔᵣH° ?',
            calculation: 'La réaction cède de la chaleur au milieu extérieur, donc l’enthalpie du système diminue.',
            answer: 'La réaction est exothermique, et ΔᵣH° = −890 kJ·mol⁻¹.'
          },
          exercise: {
            question: 'Une réaction avec ΔᵣH° = +150 kJ·mol⁻¹ réchauffe-t-elle ou refroidit-elle son environnement si elle est isolée ?',
            answer: 'Elle absorbe de l’énergie thermique du milieu, provoquant un refroidissement (endothermique).'
          }
        }
      },
      {
        id: 'cinetique-chimique',
        title: 'Cinétique et vitesse de réaction',
        field: 'Réactions · dynamique',
        summary: 'Facteurs cinétiques, vitesse de réaction, temps de demi-réaction et catalyse.',
        lesson: {
          sections: [
            'La cinétique chimique étudie la vitesse à laquelle les réactifs disparaissent et les produits apparaissent. Certains facteurs cinétiques accélèrent les réactions : température, concentration des réactifs, surface de contact et catalyseurs.',
            'Un catalyseur augmente la vitesse d’une transformation sans modifier l’état d’équilibre final ni figurer dans le bilan stœchiométrique global.'
          ],
          formula: {
            label: 'VITESSE VOLUMIQUE ET DEMI-RÉACTION',
            text: 'v = (1/V) · (dξ / dt)  |  À t = t₁/₂, [A] = [A]₀ / 2'
          },
          example: {
            statement: 'La décomposition d’un réactif d’ordre 1 a un temps de demi-réaction de 20 minutes. Quelle fraction de réactif reste-t-il après 40 minutes ?',
            calculation: '40 minutes correspondent à 2 demi-vies (2 × 20 min). La quantité restante est (1/2)² = 1/4.',
            answer: 'Il reste un quart (25 %) du réactif initial.'
          },
          exercise: {
            question: 'Pourquoi conserve-t-on les denrées alimentaires au réfrigérateur ?',
            answer: 'L’abaissement de la température diminue l’énergie cinétique moyenne des molécules et ralentit la vitesse des réactions chimiques de dégradation.'
          }
        }
      }
    ]
  }
  ,
  {
    id: 'equilibres-solutions',
    title: 'Équilibres chimiques en solution aqueuse',
    note: 'Acides et bases, pH, oxydoréduction et précipitation.',
    chapters: [
      {
        id: 'acide-base-ph',
        title: 'Réactions acido-basiques et calcul de pH',
        field: 'Solutions · bases',
        page: 'acides-bases.html',
        summary: 'Définition de Brønsted, couples acide/base, produit ionique de l’eau et échelle de pH.',
        lesson: {
          sections: [
            'Selon Brønsted, un acide est une espèce capable de céder au moins un proton H⁺, et une base est capable d’en capter un. Une réaction acide-base consiste en un transfert de proton.',
            'Le pH mesure l’activité des ions oxonium H₃O⁺ en solution diluée. Le pKa d’un couple acide/base caractérise la force de l’acide : plus le pKa est faible, plus l’acide est fort.'
          ],
          formula: {
            label: 'DÉFINITION DU PH ET HENDERSON-HASSELBALCH',
            text: 'pH = −log₁₀[H₃O⁺]  |  pH = pKa + log₁₀([Base] / [Acide])'
          },
          example: {
            statement: 'Une solution d’acide chlorhydrique a une concentration [H₃O⁺] = 1,0 × 10⁻³ mol·L⁻¹. Quel est son pH ?',
            calculation: 'pH = −log₁₀(1,0 × 10⁻³) = 3,0.',
            answer: 'Le pH de la solution est de 3,0.'
          },
          exercise: {
            question: 'Quelle est la concentration en ions H₃O⁺ d’une eau pure à 25 °C dont le pH vaut 7,0 ?',
            answer: '[H₃O⁺] = 10^(−7,0) = 1,0 × 10⁻⁷ mol·L⁻¹.'
          }
        }
      },
      {
        id: 'oxydoreduction-piles',
        title: 'Oxydoréduction et piles électrochimiques',
        field: 'Solutions · intermédiaire',
        summary: 'Nombre d’oxydation, transferts d’électrons, demi-équations et relation de Nernst.',
        lesson: {
          sections: [
            'Une réaction d’oxydoréduction met en jeu un transfert d’électrons entre un réducteur (qui perd des électrons, oxydation) et un oxydant (qui gagne des électrons, réduction).',
            'Dans une pile électrochimique, ce transfert se produit à distance via un circuit électrique extérieur : l’oxydation a lieu à l’anode (pôle négatif de la pile) et la réduction à la cathode (pôle positif).'
          ],
          formula: {
            label: 'COUPLE REDOX ET ÉQUATION DE NERNST',
            text: 'Ox + n e⁻ ⇌ Red  |  E = E° + (0,059 / n) · log₁₀([Ox]ᵃ / [Red]ᵇ)'
          },
          example: {
            statement: 'Écrire la demi-équation électronique du couple Cu²⁺ / Cu(s).',
            calculation: 'L’ion cuivre(II) Cu²⁺ est l’oxydant et gagne deux électrons pour donner le cuivre métallique.',
            answer: 'Cu²⁺(aq) + 2 e⁻ ⇌ Cu(s).'
          },
          exercise: {
            question: 'Dans une pile Daniell (Zn/Cu), l’anode est-elle le siège d’une oxydation ou d’une réduction ?',
            answer: 'L’anode est toujours le siège de l’oxydation (oxydation du zinc métallique Zn → Zn²⁺ + 2e⁻).'
          }
        }
      },
      {
        id: 'solubilite-precipitation',
        title: 'Solubilité et équilibres de précipitation',
        field: 'Solutions · équilibres',
        summary: 'Produit de solubilité Ks, solubilité molaire s et condition de précipitation.',
        lesson: {
          sections: [
            'Certains solides ioniques sont peu solubles dans l’eau. La dissolution s’arrête lorsque la solution est saturée, établissant un équilibre entre le solide non dissous et ses ions en solution.',
            'Le produit de solubilité Ks est la constante d’équilibre de la réaction de dissolution. Un précipité apparaît dès que le quotient de réaction Q_r dépasse Ks.'
          ],
          formula: {
            label: 'PRODUIT DE SOLUBILITÉ',
            text: 'A_m B_n(s) ⇌ m Aⁿ⁺ + n Bᵐ⁻  |  Ks = [Aⁿ⁺]ᵐ · [Bᵐ⁻]ⁿ'
          },
          example: {
            statement: 'Pour le chlorure d’argent AgCl(s) ⇌ Ag⁺ + Cl⁻, exprimer Ks en fonction de la solubilité s.',
            calculation: '[Ag⁺] = s et [Cl⁻] = s, d’où Ks = [Ag⁺][Cl⁻] = s².',
            answer: 'Ks = s², soit une solubilité s = √Ks.'
          },
          exercise: {
            question: 'Si Ks(AgCl) = 1,8 × 10⁻¹⁰ à 25 °C, quelle est la solubilité s en mol·L⁻¹ ?',
            answer: 's = √(1,8 × 10⁻¹⁰) ≈ 1,34 × 10⁻⁵ mol·L⁻¹.'
          }
        }
      }
    ]
  }
  ,
  {
    id: 'chimie-organique',
    title: 'Chimie organique et mécanismes',
    note: 'Familles fonctionnelles, isomérie et grands mécanismes de synthèse.',
    chapters: [
      {
        id: 'familles-fonctionnelles-nomenclature',
        title: 'Groupes fonctionnels et nomenclature IUPAC',
        field: 'Organique · bases',
        summary: 'Alcanes, alcènes, alcools, aldéhydes, cétones, acides carboxyliques et esters.',
        lesson: {
          sections: [
            'La chimie organique est la chimie des composés du carbone. Le squelette carboné est complété par des groupes caractéristiques (ou fonctionnels) qui confèrent à la molécule ses propriétés chimiques.',
            'La nomenclature systématique IUPAC nomme les molécules à partir de la chaîne carbonée la plus longue contenant le groupe prioritaire, numérotée de façon à attribuer les indices les plus faibles aux fonctions et substituants.'
          ],
          formula: {
            label: 'RÈGLE DE FORMULE DES ALCANES',
            text: 'C_n H_{2n+2} (alcanes linéaires et ramifiés acycliques)'
          },
          example: {
            statement: 'Donner le nom IUPAC de la molécule CH₃–CH(OH)–CH₃.',
            calculation: 'Chaîne de 3 carbones (propane) avec une fonction alcool -OH sur le carbone 2.',
            answer: 'Il s’agit du propan-2-ol.'
          },
          exercise: {
            question: 'Quelle est la fonction caractéristique portée par CH₃–COOH ?',
            answer: 'Le groupe carboxyle -COOH (acide carboxylique : l’acide éthanoïque ou acide acétique).'
          }
        }
      },
      {
        id: 'stereochimie-isomeres',
        title: 'Stéréochimie et chiralité',
        field: 'Organique · intermédiaire',
        summary: 'Carbone asymétrique, énantiomères, diastéréoisomères et activité optique.',
        lesson: {
          sections: [
            'Deux isomères partagent la même formule brute mais possèdent des structures ou des agencements spatiaux différents. Les stéréoisomères diffèrent uniquement par la disposition de leurs atomes dans l’espace.',
            'Un carbone asymétrique (noté C*) est lié à quatre substituants différents. Une molécule non superposable à son image dans un miroir plan est dite chirale ; les deux images sont des énantiomères.'
          ],
          formula: {
            label: 'NOMBRE MAXIMAL DE STÉRÉOISOMÈRES',
            text: 'N_max = 2ⁿ  (pour n carbones asymétriques)'
          },
          example: {
            statement: 'Combien de carbones asymétriques possède la molécule de 2-chlorobutane CH₃–C*H(Cl)–CH₂–CH₃ ?',
            calculation: 'Le carbone 2 est lié à : –H, –Cl, –CH₃ et –CH₂CH₃ (4 substituants différents).',
            answer: 'Il possède 1 carbone asymétrique et existe sous forme de 2 énantiomères (R et S).'
          },
          exercise: {
            question: 'Une molécule possédant un plan de symétrie interne peut-elle être chirale ?',
            answer: 'Non, la présence d’un plan de symétrie la rend superposable à son image miroir (molécule achirale).'
          }
        }
      },
      {
        id: 'mecanismes-substitution-elimination',
        title: 'Réactivité et mécanismes réactionnels',
        field: 'Organique · approfondissement',
        summary: 'Nucléophiles, électrophiles, substitution nucléophile et élimination.',
        lesson: {
          sections: [
            'Une réaction organique procède par étapes élémentaires reliant des sites donneurs d’électrons (nucléophiles, riches en électrons) à des sites accepteurs d’électrons (électrophiles, porteurs d’une charge partielle positive ou d’une lacune).',
            'Les flèches courbes modélisent le déplacement des doublets d’électrons. Les mécanismes classiques comprennent l’addition, l’élimination et la substitution nucléophile (SN1 ou SN2 selon l’encombrement stérique et la stabilité des carbocations).'
          ],
          formula: {
            label: 'FLÈCHES COURBES DE MÉCANISME',
            text: 'Site nucléophile (Nu⁻ ou doublet) ──↷──> Site électrophile (E⁺ ou δ+)'
          },
          example: {
            statement: 'Dans l’attaque d’un ion hydroxyde HO⁻ sur le chlorométhane CH₃Cl, identifier le nucléophile et l’électrophile.',
            calculation: 'HO⁻ porte des doublets non liants et une charge négative (nucléophile). Le carbone de CH₃Cl est polarisé δ+ à cause de l’électronégativité du chlore (électrophile).',
            answer: 'HO⁻ est le nucléophile et le carbone du chlorométhane est l’électrophile.'
          },
          exercise: {
            question: 'Quel est le produit majeur de la substitution nucléophile de HO⁻ sur le bromoéthane CH₃CH₂Br ?',
            answer: 'L’éthanol CH₃CH₂OH, avec départ de l’ion bromure Br⁻.'
          }
        }
      }
    ]
  }
  ,
  {
    id: 'chimie-analytique',
    title: 'Chimie analytique et spectroscopie',
    note: 'Dosages, spectroscopies UV-visible, IR et RMN pour identifier et quantifier.',
    chapters: [
      {
        id: 'spectrophotometrie-beer-lambert',
        title: 'Loi de Beer-Lambert et spectrophotométrie',
        field: 'Analytique · optique',
        summary: 'Absorbance, transmittance, coefficient d’extinction molaire et dosage spectrophotométrique.',
        lesson: {
          sections: [
            'La spectrophotométrie mesure l’atténuation d’un faisceau lumineux monochromatique traversant une solution absorbante. Elle permet d’établir un dosage par étalonnage.',
            'La loi de Beer-Lambert indique que l’absorbance A est directement proportionnelle à la concentration molaire de l’espèce colorée et à la longueur de la cuve traversée.'
          ],
          formula: {
            label: 'LOI DE BEER-LAMBERT',
            text: 'A = ε · l · C  |  A = −log₁₀(I / I₀)'
          },
          example: {
            statement: 'Une solution de permanganate présente une absorbance A = 0,60 pour une cuve de l = 1 cm et ε = 2000 L·mol⁻¹·cm⁻¹. Quelle est sa concentration ?',
            calculation: 'C = A / (ε · l) = 0,60 / (2000 × 1) = 3,0 × 10⁻⁴ mol·L⁻¹.',
            answer: 'La concentration est de 3,0 × 10⁻⁴ mol·L⁻¹.'
          },
          exercise: {
            question: 'Que devient l’absorbance d’une solution si on la dilue d’un facteur 2 (dans les limites de validité de Beer-Lambert) ?',
            answer: 'L’absorbance est divisée par 2, car elle est proportionnelle à la concentration.'
          }
        }
      },
      {
        id: 'titrages-directs-colorimetriques',
        title: 'Titrages et équivalence',
        field: 'Analytique · titrages',
        summary: 'Réaction support de titrage, repérage de l’équivalence et calcul de concentration inconnue.',
        lesson: {
          sections: [
            'Un titrage (ou dosage par titrage) permet de déterminer avec précision la quantité de matière ou la concentration d’une espèce en solution en la faisant réagir avec un réactif titrant de concentration connue.',
            'L’équivalence est atteinte lorsque les réactifs titrant et titré ont été mélangés dans des proportions stœchiométriques : ils sont alors tous deux entièrement consommés.'
          ],
          formula: {
            label: 'RELATION À L’ÉQUIVALENCE',
            text: 'n_A(initial) / a = n_B(versé à l’équivalence) / b  =>  C_A · V_A / a = C_B · V_E / b'
          },
          example: {
            statement: 'On titre 20,0 mL d’un acide HA de concentration C_A par de la soude NaOH à C_B = 0,10 mol·L⁻¹ selon HA + HO⁻ → A⁻ + H₂O. L’équivalence est obtenue pour V_E = 12,0 mL. Calculer C_A.',
            calculation: 'C_A × V_A = C_B × V_E  =>  C_A = (0,10 × 12,0) / 20,0 = 0,060 mol·L⁻¹.',
            answer: 'La concentration de l’acide est C_A = 0,060 mol·L⁻¹.'
          },
          exercise: {
            question: 'Quelles sont les trois qualités indispensables d’une réaction support de titrage ?',
            answer: 'Elle doit être rapide, totale (quantitative) et univoque (sans réactions parasites).'
          }
        }
      },
      {
        id: 'spectroscopie-ir-rmn',
        title: 'Spectroscopie infrarouge et RMN du proton',
        field: 'Analytique · structure',
        summary: 'Identification des liaisons par IR, déplacement chimique et multiplicité en RMN ¹H.',
        lesson: {
          sections: [
            'La spectroscopie infrarouge (IR) détecte les vibrations d’élongation et de déformation des liaisons chimiques. Elle identifie rapidement les fonctions chimiques caractéristiques (bandes larges O–H vers 3200-3600 cm⁻¹, bande fine et intense C=O vers 1700 cm⁻¹).',
            'La RMN du proton (¹H) renseigne sur l’environnement des noyaux d’hydrogène : le nombre de signaux donne le nombre de groupes de protons équivalents, le déplacement chimique δ indique leur voisinage électronique, et la multiplicité (règle des n+1 uplets) révèle le nombre de voisins magnétiques.'
          ],
          formula: {
            label: 'RÈGLE DES (N + 1)-UPLETS EN RMN',
            text: 'Multiplicité = n + 1  (avec n protons équivalents portés par les carbones voisins)'
          },
          example: {
            statement: 'Quel signal RMN donne le groupe méthyle –CH₃ dans l’éthanal CH₃–CHO ?',
            calculation: 'Le carbone voisin porte 1 proton (–CHO). Selon la règle des n+1 uplets : 1 + 1 = 2 (doublet).',
            answer: 'Le groupe –CH₃ apparaît sous la forme d’un doublet.'
          },
          exercise: {
            question: 'Combien de signaux RMN distincts observe-t-on pour la molécule de diméthyléther CH₃–O–CH₃ ?',
            answer: '1 seul signal (singulet), car les six protons sont tous magnétiquement équivalents par symétrie.'
          }
        }
      }
    ]
  }
];
