window.courseCatalog = [
  {
    id: 'structure-matiere',
    title: 'Structure de la matière',
    note: 'L’atome, les électrons, la classification périodique et la mole.',
    source: 'https://www.pccl.fr/programme_2e_physique_chimie_seconde_BO_gouv_reforme_2019.htm',
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
  },
  {
    id: 'liaisons-etats',
    title: 'Liaisons chimiques et états de la matière',
    note: 'Liaisons covalentes, forces intermoléculaires et solutions.',
    source: 'https://www.pccl.fr/programme_1e_specialite_physique_chimie_premiere_BO_gouv_reforme_2019.htm',
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
    source: 'https://www.pccl.fr/programme_1e_specialite_physique_chimie_premiere_BO_gouv_reforme_2019.htm',
    chapters: [
      {
        id: 'bilan-matiere-avancement',
        title: 'Tableau d’avancement et réactif limitant',
        field: 'Réactions · bases',
        page: 'reaction-avancement.html',
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
    source: 'https://www.pccl.fr/terminale_programme_physique_chimie.pdf',
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
    id: 'chimie-organique-mecanismes',
    title: 'Chimie organique et mécanismes',
    note: 'Familles fonctionnelles, isomérie et grands mécanismes de synthèse.',
    source: 'https://www.pccl.fr/terminale_programme_physique_chimie.pdf',
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

  ,
  {
    id: 'tableau-element',
    title: 'Les éléments du tableau périodique',
    note: 'Les 118 éléments classés par famille : hydrogène, alcalins, alcalino-terreux, métaux de transition, lanthanides, actinides, métaux pauvres, métalloïdes, non-métaux, halogènes et gaz nobles.',
    source: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity',
    chapters: [
      {
        id: 'organisation-tableau',
        title: 'Lire le tableau : périodes, groupes et blocs',
        field: 'Éléments · bases',
        summary: 'Organisation en 7 périodes et 18 groupes, blocs s, p, d et f, et répartition des 118 éléments en familles.',
        lesson: {
          sections: [
            'Le tableau périodique classe les 118 éléments connus par numéro atomique Z croissant. Les 18 colonnes sont les groupes (numérotés de 1 à 18 selon la convention de l’IUPAC) et les 7 lignes sont les périodes. Les périodes comptent respectivement 2, 8, 8, 18, 18, 32 et 32 éléments.',
            'On distingue quatre blocs selon la sous-couche en cours de remplissage : le bloc s (groupes 1 et 2, plus l’hélium), le bloc p (groupes 13 à 18), le bloc d (groupes 3 à 12) et le bloc f (lanthanides et actinides). Les éléments où se remplissent les orbitales s et p sont dits représentatifs. OpenStax range les éléments du groupe 12 (Zn, Cd, Hg, Cn) parmi les éléments représentatifs, car leur dernier électron entre dans une orbitale s, tout en précisant que certains chimistes les traitent comme des métaux de transition.',
            'Les éléments d’une même famille ont le même nombre d’électrons de valence et des propriétés chimiques voisines. L’électronégativité croît globalement de gauche à droite dans une période et de bas en haut dans un groupe. Les métaux forment typiquement des cations, les non-métaux des anions ou des composés moléculaires ; les métalloïdes ont un comportement intermédiaire et sont typiquement des semi-conducteurs.',
            'Plusieurs symboles viennent du latin : Na (natrium), K (kalium), Fe (ferrum), Cu (cuprum), Ag (argentum), Sn (stannum), Sb (stibium), Au (aurum), Hg (hydrargyrum) et Pb (plumbum). Le symbole W vient de wolfram, nom allemand du tungstène.',
            'Les frontières entre catégories varient selon les ouvrages (place de H, de Po, d’At, du groupe 3 ou du groupe 12). L’IUPAC ne recommande pas de forme unique du tableau périodique. Cette branche suit la classification usuelle d’OpenStax et de la Royal Society of Chemistry et signale les cas ambigus.',
            'Répartition des 118 éléments dans les chapitres suivants : hydrogène (1), alcalins (6), alcalino-terreux (6), série 3d (10), série 4d (10), série 5d (9), série 6d (9), lanthanides (15), actinides (15), métaux pauvres (12), métalloïdes (6), non-métaux réactifs (6), halogènes (6) et gaz nobles (7), soit 118 éléments au total.'
          ],
          formula: {
            label: 'COMPTAGE DES ÉLÉMENTS PAR PÉRIODE',
            text: 'N = 2 + 8 + 8 + 18 + 18 + 32 + 32 = 118  |  Z : 1–2, 3–10, 11–18, 19–36, 37–54, 55–86, 87–118'
          },
          example: {
            statement: 'Situer le fer Fe (Z = 26, configuration [Ar] 3d⁶ 4s²) dans le tableau périodique.',
            calculation: 'Z = 26 est compris entre 19 et 36 : 4e période. La sous-couche 3d est en cours de remplissage : bloc d. Le potassium (Z = 19) ouvre la période dans le groupe 1, donc groupe = Z − 18 = 8.',
            answer: 'Le fer est en 4e période, groupe 8, bloc d.'
          },
          exercise: {
            question: 'Situer le brome Br (Z = 35, configuration [Ar] 3d¹⁰ 4s² 4p⁵) dans le tableau périodique.',
            answer: 'Période 4 (19 ≤ Z ≤ 36), bloc p. Avec 4s² 4p⁵, il a 7 électrons de valence : groupe 17 (halogènes).'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'OpenStax Chemistry — 19.1 Occurrence, Preparation, and Properties of Transition Metals and Their Compounds', url: 'https://openstax.org/books/chemistry/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'hydrogene',
        title: 'L’hydrogène, un élément à part',
        field: 'Éléments · hydrogène',
        summary: 'Isotopes, degrés d’oxydation +1 et −1, préparation et réactivité du dihydrogène.',
        lesson: {
          sections: [
            'L’hydrogène possède un unique électron (1s¹). C’est l’élément le plus abondant de l’Univers : selon les astronomes cités par OpenStax, environ 90 % des atomes de l’Univers sont des atomes d’hydrogène. Il entre dans plus de composés que n’importe quel autre élément, et l’eau en est le composé le plus abondant sur Terre.',
            'H (Z = 1, hydrogène) : placé en tête du groupe 1, c’est pourtant un non-métal, que certains tableaux placent aussi au-dessus des halogènes ; OpenStax le traite à part. Il existe sous forme du gaz diatomique H₂. Ses isotopes sont le protium ¹H (sans neutron), le deutérium ²H ou D (1 neutron) et le tritium ³H ou T (2 neutrons, radioactif).',
            'Degrés d’oxydation : avec les métaux actifs, l’hydrogène forme des hydrures ioniques contenant l’ion hydrure H⁻ (degré −1), un réducteur et une base forts qui réagissent vivement avec l’eau en libérant du dihydrogène. Avec les non-métaux plus électronégatifs, il forme des composés covalents où son degré d’oxydation est +1, souvent acides.',
            'Préparation : le dihydrogène doit être obtenu à partir de composés en rompant des liaisons chimiques, par exemple par électrolyse de l’eau (il se forme deux fois plus de volume de H₂ à la cathode que de O₂ à l’anode) ou par action d’un métal sur un acide dilué (fer et acide chlorhydrique donnent H₂ et du chlorure de fer(II)). Le dihydrogène brûle sans explosion en conditions contrôlées ; un mélange H₂ et O₂ explose s’il est enflammé. L’hydrogène liquide est un carburant de fusée.'
          ],
          formula: {
            label: 'ÉLECTROLYSE DE L’EAU ET DEGRÉS D’OXYDATION',
            text: '2 H₂O(l) → 2 H₂(g) + O₂(g)  |  n(H₂) = 2 · n(O₂)  |  n.o.(H) = +1 (HCl) ou −1 (NaH)'
          },
          example: {
            statement: 'Une électrolyse de l’eau produit 0,60 mol de dihydrogène. Quelle quantité de dioxygène se forme en même temps ?',
            calculation: 'D’après l’équation, n(H₂) = 2 · n(O₂), donc n(O₂) = n(H₂) / 2 = 0,60 / 2 = 0,30 mol.',
            answer: 'Il se forme 0,30 mol de dioxygène.'
          },
          exercise: {
            question: 'Quel est le degré d’oxydation de l’hydrogène dans l’hydrure de sodium NaH et dans l’eau H₂O ?',
            answer: 'Dans NaH, le sodium (alcalin) est à +1, donc H est à −1 (ion hydrure). Dans H₂O, l’oxygène est plus électronégatif, donc H est à +1.'
          },
          sources: [
            { title: 'OpenStax Chemistry — 18.5 Occurrence, Preparation, and Compounds of Hydrogen', url: 'https://openstax.org/books/chemistry/pages/18-5-occurrence-preparation-and-compounds-of-hydrogen' },
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'OpenStax Chemistry 2e — 18.4 Structure and General Properties of the Nonmetals', url: 'https://openstax.org/books/chemistry-2e/pages/18-4-structure-and-general-properties-of-the-nonmetals' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'metaux-alcalins',
        title: 'Les métaux alcalins (groupe 1)',
        field: 'Éléments · groupe 1',
        summary: 'Li, Na, K, Rb, Cs et Fr : configuration ns¹, réactivité croissante, réaction avec l’eau et couleurs de flamme.',
        lesson: {
          sections: [
            'Les métaux alcalins (lithium, sodium, potassium, rubidium, césium et francium) forment le groupe 1. Leur configuration de valence est ns¹ : ils ont les plus grands rayons atomiques et la plus faible première énergie d’ionisation de leur période, d’où la formation facile de cations M⁺. Leur réactivité augmente avec le numéro atomique.',
            'Tous réagissent vivement avec l’eau en donnant du dihydrogène et une solution basique d’hydroxyde (nom « alcalin »). Ils sont mous, trop réactifs pour servir de matériaux de structure, conservés sous huile minérale ou en récipients scellés, et préparés par électrolyse de leurs composés. Leurs sels colorent la flamme : jaune vif pour le sodium, cramoisi pour le lithium, violet pâle pour les autres.',
            'Li (Z = 3, lithium) : [He] 2s¹. C’est le métal de plus faible masse volumique (environ 0,5 g·cm⁻³) : il flotte sur l’huile de paraffine. Il est utilisé dans les batteries lithium-ion.',
            'Na (Z = 11, sodium) : [Ne] 3s¹. Ses composés colorent la flamme en jaune, couleur des lampes à vapeur de sodium. Il sert de réducteur dans la production de métaux tels que le titane et le zirconium. Il est préparé par électrolyse du chlorure de sodium fondu.',
            'K (Z = 19, potassium) : [Ar] 4s¹. Stocké sous kérosène ou huile minérale. L’ion K⁺ est indispensable aux organismes vivants. Son isotope naturel ⁴⁰K est radioactif, de période d’environ 1,25 × 10⁹ ans.',
            'Rb (Z = 37, rubidium) : [Kr] 5s¹. Découvert en 1861 par spectroscopie (Bunsen et Kirchhoff) ; son nom vient du latin rubidus, « rouge foncé », d’après ses raies spectrales. Son isotope naturel ⁸⁷Rb est radioactif, de période d’environ 4,9 × 10¹⁰ ans.',
            'Cs (Z = 55, césium) : [Xe] 6s¹. Le plus réactif des alcalins non radioactifs ; il fond vers 28,5 °C. La seconde du Système international est définie à partir d’une transition de l’isotope ¹³³Cs, de fréquence 9 192 631 770 Hz.',
            'Fr (Z = 87, francium) : [Rn] 7s¹. Radioactif, sans isotope stable ; son isotope le plus stable, ²²³Fr, a une période d’environ 22 minutes. Découvert en 1939 par Marguerite Perey à l’Institut Curie, il doit son nom à la France. Il n’existe qu’à l’état de traces dans la nature.'
          ],
          formula: {
            label: 'RÉACTION D’UN ALCALIN AVEC L’EAU',
            text: '2 M(s) + 2 H₂O(l) → 2 MOH(aq) + H₂(g)  |  M → M⁺ + e⁻'
          },
          example: {
            statement: 'On fait réagir 0,23 g de sodium (M = 23 g·mol⁻¹) avec un large excès d’eau. Quelles quantités de NaOH et de H₂ se forment ?',
            calculation: 'n(Na) = 0,23 / 23 = 0,010 mol. D’après 2 Na + 2 H₂O → 2 NaOH + H₂ : n(NaOH) = n(Na) = 0,010 mol et n(H₂) = n(Na) / 2 = 0,0050 mol.',
            answer: 'Il se forme 0,010 mol de NaOH (soit 0,40 g, avec M = 40 g·mol⁻¹) et 0,0050 mol de H₂.'
          },
          exercise: {
            question: 'Pourquoi la réactivité des alcalins augmente-t-elle du lithium au césium ?',
            answer: 'Quand Z augmente, le rayon atomique croît et la première énergie d’ionisation diminue : l’électron de valence est de plus en plus facile à perdre.'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (Group 1: The Alkali Metals)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' }
          ]
        }
      },
      {
        id: 'alcalino-terreux',
        title: 'Les métaux alcalino-terreux (groupe 2)',
        field: 'Éléments · groupe 2',
        summary: 'Be, Mg, Ca, Sr, Ba et Ra : configuration ns², cations M²⁺, couleurs de flamme et réactivité.',
        lesson: {
          sections: [
            'Les métaux alcalino-terreux (béryllium, magnésium, calcium, strontium, baryum et radium) forment le groupe 2. Leur configuration de valence est ns² et ils donnent des cations M²⁺. Leurs atomes sont plus petits et leurs premières énergies d’ionisation plus élevées que celles des alcalins de la même période : ils sont moins réactifs, mais restent très réactifs. Leur réactivité augmente avec la taille de l’atome.',
            'Magnésium, calcium, strontium et baryum réagissent avec l’eau et l’air ; à température ambiante, le baryum réagit le plus vivement. Contrairement à la plupart des sels d’alcalins, beaucoup de sels d’alcalino-terreux sont insolubles dans l’eau, à cause des énergies réticulaires élevées. Béryllium et magnésium forment des composés à caractère partiellement covalent. Ces métaux sont préparés par électrolyse.',
            'Be (Z = 4, béryllium) : [He] 2s². Métal léger dont le nom vient du minéral béryl. Le béryllium et ses composés sont toxiques, ce qui limite son usage.',
            'Mg (Z = 12, magnésium) : [Ne] 3s². C’est le plus léger des métaux structuraux largement utilisés : l’essentiel de sa production sert à fabriquer des alliages légers. Il brûle en émettant une lumière blanche éclatante (feux d’artifice, fusées éclairantes) et un feu de magnésium ne s’éteint pas avec du CO₂. Le magnésium est l’atome central de la chlorophylle.',
            'Ca (Z = 20, calcium) : [Ar] 4s². Ses sels colorent la flamme en rouge. Il est présent dans le calcaire CaCO₃, et dans les os et les dents. La chaux vive CaO réagit avec l’eau en donnant la chaux éteinte Ca(OH)₂, réaction très exothermique.',
            'Sr (Z = 38, strontium) : [Kr] 5s². Ses sels colorent la flamme en rouge. Son nom vient de Strontian, village d’Écosse. L’isotope artificiel ⁹⁰Sr, produit de fission, a une période d’environ 28,8 ans.',
            'Ba (Z = 56, baryum) : [Xe] 6s². Ses sels colorent la flamme en vert. Les sels de baryum solubles sont toxiques, alors que le sulfate de baryum BaSO₄, très peu soluble, est utilisé comme produit de contraste en radiologie.',
            'Ra (Z = 88, radium) : [Rn] 7s². Radioactif, découvert en 1898 par Pierre et Marie Curie avec Gustave Bémont ; son nom vient du latin radius, « rayon ». Son isotope ²²⁶Ra a une période d’environ 1600 ans et se désintègre en radon ²²²Rn.'
          ],
          formula: {
            label: 'CHAUX VIVE ET ÉQUATIONS DES ALCALINO-TERREUX',
            text: 'CaO(s) + H₂O(l) → Ca(OH)₂(s)  |  M → M²⁺ + 2 e⁻  |  2 Mg + CO₂ → 2 MgO + C'
          },
          example: {
            statement: 'Un feu de magnésium peut-il être éteint avec un extincteur à dioxyde de carbone ?',
            calculation: 'Le magnésium a une telle affinité pour l’oxygène qu’il réduit le dioxyde de carbone : 2 Mg(s) + CO₂(g) → 2 MgO(s) + C(s).',
            answer: 'Non : le CO₂ alimenterait la combustion. Il ne convient pas pour un feu de magnésium.'
          },
          exercise: {
            question: 'On fait réagir 28 g de chaux vive CaO (M = 56 g·mol⁻¹) avec un excès d’eau. Quelle masse de Ca(OH)₂ (M = 74 g·mol⁻¹) obtient-on ?',
            answer: 'n(CaO) = 28 / 56 = 0,50 mol ; n(Ca(OH)₂) = 0,50 mol ; m = 0,50 × 74 = 37 g.'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (Group 2: The Alkaline Earth Metals)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' }
          ]
        }
      },
      {
        id: 'transition-3d',
        title: 'Métaux de transition de la 1re série (3d) : du scandium au zinc',
        field: 'Éléments · bloc d',
        summary: 'Sc à Zn (Z = 21 à 30) : sous-couche 3d, degrés d’oxydation multiples, composés colorés et exceptions Cr et Cu.',
        lesson: {
          sections: [
            'Les métaux de transition sont les éléments qui possèdent (ou forment facilement) des orbitales d partiellement remplies. Leur grande variété de propriétés tient à leur couche de valence complexe : ils présentent plusieurs degrés d’oxydation stables et leurs composés sont souvent colorés. La première série, de Sc à Zn, remplit la sous-couche 3d ; pour les ions, les électrons 4s sont perdus avant les 3d.',
            'Selon la définition stricte, le groupe 12 (Zn, Cd, Hg) n’est pas formé de métaux de transition, car la sous-couche d y est complète ; beaucoup d’auteurs l’incluent cependant, et c’est la convention suivie dans ce chapitre.',
            'Sc (Z = 21, scandium) : [Ar] 3d¹ 4s², ion Sc³⁺. Premier élément du bloc d ; son nom vient de la Scandinavie. Il entre dans des alliages aluminium-scandium.',
            'Ti (Z = 22, titane) : [Ar] 3d² 4s². Métal résistant, léger et résistant à la corrosion, employé dans les cadres de vélos et les prothèses de hanche. Le dioxyde TiO₂ est un pigment blanc.',
            'V (Z = 23, vanadium) : [Ar] 3d³ 4s². Il présente des degrés d’oxydation de +2 à +5, aux couleurs différentes en solution. Son nom vient de Vanadis, surnom de la déesse nordique Freyja. Il sert d’additif dans les aciers.',
            'Cr (Z = 24, chrome) : [Ar] 3d⁵ 4s¹ (exception à la règle de remplissage). Il protège par chromage les robinetteries et pièces automobiles ; son nom vient du grec chrôma, « couleur ». Les composés du chrome(VI) sont toxiques.',
            'Mn (Z = 25, manganèse) : [Ar] 3d⁵ 4s². Ses degrés d’oxydation vont de +2 à +7 ; l’ion permanganate MnO₄⁻ (Mn à +7) est violet.',
            'Fe (Z = 26, fer) : [Ar] 3d⁶ 4s². On le trouve partout, des automobiles à l’hémoglobine du sang. L’acier est un alliage de fer et de carbone. Il donne les ions Fe²⁺ et Fe³⁺ et réagit avec l’acide chlorhydrique dilué pour former du dihydrogène et du chlorure de fer(II). Fe, Co et Ni sont ferromagnétiques.',
            'Co (Z = 27, cobalt) : [Ar] 3d⁷ 4s². Ferromagnétique. Il est au centre de la vitamine B₁₂. L’isotope artificiel ⁶⁰Co, de période d’environ 5,3 ans, a été utilisé en radiothérapie.',
            'Ni (Z = 28, nickel) : [Ar] 3d⁸ 4s². Ferromagnétique ; très utilisé dans les aciers inoxydables et les alliages.',
            'Cu (Z = 29, cuivre) : [Ar] 3d¹⁰ 4s¹ (exception). Excellent conducteur électrique. Le laiton est un alliage de cuivre et de zinc, le bronze de cuivre et d’étain. Les ions Cu²⁺ colorent l’eau en bleu. Le couple Cu²⁺/Cu intervient dans la pile Daniell.',
            'Zn (Z = 30, zinc) : [Ar] 3d¹⁰ 4s². Il ne donne que l’ion Zn²⁺. Environ la moitié de sa production sert à protéger le fer de la corrosion (acier galvanisé) ; il constitue l’anode des piles salines et alcalines. C’est un oligo-élément essentiel du vivant.'
          ],
          formula: {
            label: 'CONFIGURATION ÉLECTRONIQUE DE LA SÉRIE 3d',
            text: '[Ar] 3dⁿ 4s²  (exceptions : Cr [Ar] 3d⁵ 4s¹ et Cu [Ar] 3d¹⁰ 4s¹)  |  les ions perdent d’abord les électrons 4s'
          },
          example: {
            statement: 'Donner les configurations de Fe, Fe²⁺ et Fe³⁺.',
            calculation: 'Fe : [Ar] 3d⁶ 4s². Fe²⁺ perd les deux électrons 4s : [Ar] 3d⁶. Fe³⁺ perd en plus un électron 3d : [Ar] 3d⁵.',
            answer: 'Fe : [Ar] 3d⁶ 4s² ; Fe²⁺ : [Ar] 3d⁶ ; Fe³⁺ : [Ar] 3d⁵.'
          },
          exercise: {
            question: 'Donner les configurations du cuivre Cu (Z = 29) et des ions Cu⁺ et Cu²⁺.',
            answer: 'Cu : [Ar] 3d¹⁰ 4s¹ ; Cu⁺ : [Ar] 3d¹⁰ ; Cu²⁺ : [Ar] 3d⁹.'
          },
          sources: [
            { title: 'OpenStax Chemistry — 19.1 Occurrence, Preparation, and Properties of Transition Metals and Their Compounds', url: 'https://openstax.org/books/chemistry/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (Group 12)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'transition-4d',
        title: 'Métaux de transition de la 2e série (4d) : de l’yttrium au cadmium',
        field: 'Éléments · bloc d',
        summary: 'Y à Cd (Z = 39 à 48) : sous-couche 4d, métaux du platine (Ru, Rh, Pd), argent et technétium radioactif.',
        lesson: {
          sections: [
            'La deuxième série de transition, de Y à Cd, remplit la sous-couche 4d ; le cœur électronique est celui du krypton ([Kr]). Plusieurs éléments s’écartent de la règle de remplissage simple : Nb, Mo, Ru, Rh et Ag ont une configuration 5s¹, et le palladium est 4d¹⁰ sans électron 5s. Le technétium est le seul élément radioactif de cette série.',
            'Y (Z = 39, yttrium) : [Kr] 4d¹ 5s². Son nom vient d’Ytterby, village suédois qui a aussi donné son nom à l’ytterbium, au terbium et à l’erbium. Il est utilisé dans les lasers YAG (grenat d’yttrium et d’aluminium).',
            'Zr (Z = 40, zirconium) : [Kr] 4d² 5s². Les alliages de zirconium servent de gaines de combustible nucléaire. Le zirconium est chimiquement très proche du hafnium. Le silicate de zirconium intervient dans les garnitures de freins.',
            'Nb (Z = 41, niobium) : [Kr] 4d⁴ 5s¹. Son nom vient de Niobé, fille de Tantale. Des alliages niobium-titane servent à fabriquer les aimants supraconducteurs, notamment ceux des appareils d’IRM.',
            'Mo (Z = 42, molybdène) : [Kr] 4d⁵ 5s¹. Additif d’aciers spéciaux et lubrifiant sous forme de disulfure MoS₂. C’est un oligo-élément présent dans plusieurs enzymes.',
            'Tc (Z = 43, technétium) : [Kr] 4d⁵ 5s². Aucun isotope stable : premier élément produit artificiellement (1937, Perrier et Segrè), son nom vient du grec technêtos, « artificiel ». Le ⁹⁹ᵐTc, de période d’environ 6 heures, est très utilisé en imagerie médicale.',
            'Ru (Z = 44, ruthénium) : [Kr] 4d⁷ 5s¹. Métal du platine, utilisé comme catalyseur. Son nom vient de Ruthenia, nom latin de la Russie.',
            'Rh (Z = 45, rhodium) : [Kr] 4d⁸ 5s¹. Métal du platine, rare et dur, utilisé dans les pots catalytiques.',
            'Pd (Z = 46, palladium) : [Kr] 4d¹⁰. Métal du platine, utilisé dans les pots catalytiques et comme catalyseur d’hydrogénation. Le prix Nobel de chimie 2010 a récompensé les réactions de couplage catalysées par le palladium.',
            'Ag (Z = 47, argent) : [Kr] 4d¹⁰ 5s¹. Il possède la plus grande conductivité électrique et thermique de tous les métaux. Le nitrate d’argent AgNO₃ sert à fabriquer des miroirs. Les amalgames dentaires contiennent de l’argent.',
            'Cd (Z = 48, cadmium) : [Kr] 4d¹⁰ 5s². Il ne donne que l’ion Cd²⁺ ; le cadmium élémentaire et ses composés sont toxiques. Il était utilisé dans les accumulateurs nickel-cadmium.'
          ],
          formula: {
            label: 'CONFIGURATION ÉLECTRONIQUE DE LA SÉRIE 4d',
            text: '[Kr] 4dⁿ 5s²  (exceptions : Nb, Mo, Ru, Rh, Ag en 5s¹ ; Pd en 4d¹⁰)  |  Z(Kr) = 36'
          },
          example: {
            statement: 'Donner la configuration du molybdène Mo (Z = 42) et son nombre d’électrons de valence (4d et 5s).',
            calculation: 'Z − 36 = 6 électrons au-delà du krypton, répartis selon l’exception 4d⁵ 5s¹ : [Kr] 4d⁵ 5s¹.',
            answer: 'Mo : [Kr] 4d⁵ 5s¹, soit 6 électrons de valence (4d et 5s).'
          },
          exercise: {
            question: 'Donner la configuration du palladium Pd (Z = 46) et vérifier le nombre total d’électrons.',
            answer: 'Pd : [Kr] 4d¹⁰, soit 36 + 10 = 46 électrons (aucun électron 5s).'
          },
          sources: [
            { title: 'OpenStax Chemistry — 19.1 Occurrence, Preparation, and Properties of Transition Metals and Their Compounds', url: 'https://openstax.org/books/chemistry/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (groupe 12, amalgames)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' }
          ]
        }
      },
      {
        id: 'transition-5d',
        title: 'Métaux de transition de la 3e série (5d) : du hafnium au mercure',
        field: 'Éléments · bloc d',
        summary: 'Hf à Hg (Z = 72 à 80) : métaux denses et réfractaires, métaux nobles (Pt, Au) et mercure liquide.',
        lesson: {
          sections: [
            'La troisième série de transition, de Hf à Hg, remplit la sous-couche 5d après le remplissage de la sous-couche 4f des lanthanides ; son cœur électronique s’écrit [Xe] 4f¹⁴. Elle comprend des métaux très denses et très réfractaires ainsi que les métaux les moins réactifs (platine, or).',
            'Hf (Z = 72, hafnium) : [Xe] 4f¹⁴ 5d² 6s². Découvert en 1923 à Copenhague, son nom vient de Hafnia, nom latin de cette ville. Il est très proche du zirconium et sert dans des barres de commande de réacteurs nucléaires.',
            'Ta (Z = 73, tantale) : [Xe] 4f¹⁴ 5d³ 6s². Très résistant à la corrosion ; utilisé dans les condensateurs. Il ne forme pas d’amalgame avec le mercure. Son nom vient de Tantale.',
            'W (Z = 74, tungstène) : [Xe] 4f¹⁴ 5d⁴ 6s². Il a le point de fusion le plus élevé de tous les métaux (3422 °C), d’où son emploi en filaments de lampes à incandescence. Son symbole W vient de wolfram.',
            'Re (Z = 75, rhénium) : [Xe] 4f¹⁴ 5d⁵ 6s². Découvert en 1925, c’est le dernier élément stable identifié ; son nom vient du Rhin. Il est utilisé dans les superalliages de turbines.',
            'Os (Z = 76, osmium) : [Xe] 4f¹⁴ 5d⁶ 6s². Avec l’iridium, c’est l’élément le plus dense (environ 22,6 g·cm⁻³). Son tétroxyde OsO₄ est volatil et toxique.',
            'Ir (Z = 77, iridium) : [Xe] 4f¹⁴ 5d⁷ 6s². Très résistant à la corrosion. L’enrichissement en iridium d’une couche géologique à la limite Crétacé-Paléogène a servi d’argument à l’hypothèse d’un impact d’astéroïde.',
            'Pt (Z = 78, platine) : [Xe] 4f¹⁴ 5d⁹ 6s¹ (exception). Peu réactif, il sert de catalyseur (pots catalytiques). Le cisplatine, composé du platine, est un agent anticancéreux. Il ne forme pas d’amalgame avec le mercure. Le prototype international du kilogramme était en alliage platine-iridium.',
            'Au (Z = 79, or) : [Xe] 4f¹⁴ 5d¹⁰ 6s¹ (exception). Métal noble qui ne s’oxyde pas à l’air ; 24 carats correspondent à l’or pur. Son symbole vient d’aurum. Les orpailleurs utilisaient l’amalgame avec le mercure pour collecter l’or divisé.',
            'Hg (Z = 80, mercure) : [Xe] 4f¹⁴ 5d¹⁰ 6s². Seul métal liquide à 25 °C (fusion à −38,8 °C). Il est peu réactif : il ne réagit pas avec HCl mais est attaqué par l’acide nitrique. Il donne Hg²⁺ et l’ion Hg₂²⁺ (mercure à +1). Il forme des amalgames avec la plupart des métaux ; il est toxique. Son symbole vient d’hydrargyrum.'
          ],
          formula: {
            label: 'CONFIGURATION ÉLECTRONIQUE DE LA SÉRIE 5d',
            text: '[Xe] 4f¹⁴ 5dⁿ 6s²  (exceptions : Pt [Xe] 4f¹⁴ 5d⁹ 6s¹ ; Au [Xe] 4f¹⁴ 5d¹⁰ 6s¹)  |  Z(Xe) = 54'
          },
          example: {
            statement: 'Donner la configuration de l’or Au (Z = 79) et celle de l’ion Au³⁺.',
            calculation: 'Au : [Xe] 4f¹⁴ 5d¹⁰ 6s¹ (54 + 14 + 10 + 1 = 79). Pour Au³⁺, on retire l’électron 6s puis deux électrons 5d : [Xe] 4f¹⁴ 5d⁸.',
            answer: 'Au : [Xe] 4f¹⁴ 5d¹⁰ 6s¹ ; Au³⁺ : [Xe] 4f¹⁴ 5d⁸.'
          },
          exercise: {
            question: 'Quel est le degré d’oxydation du mercure dans l’ion Hg₂²⁺ ?',
            answer: 'La charge totale +2 est portée par deux atomes de mercure liés entre eux : chacun est au degré +1.'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (Group 12 et amalgames)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'OpenStax Chemistry — 19.1 Occurrence, Preparation, and Properties of Transition Metals and Their Compounds', url: 'https://openstax.org/books/chemistry/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'transition-6d-superlourds',
        title: 'Éléments superlourds de la 4e série (6d) : du rutherfordium au copernicium',
        field: 'Éléments · superlourds',
        summary: 'Rf à Cn (Z = 104 à 112) : éléments artificiels transactinides, noms IUPAC et synthèse atome par atome.',
        lesson: {
          sections: [
            'Les éléments de numéro atomique supérieur à 92 sont dits transuraniens. Ils ont tous été obtenus par réactions nucléaires de transmutation. Les éléments Rf à Cn (Z = 104 à 112) prolongent le bloc d dans la 7e période : on attend une configuration [Rn] 5f¹⁴ 6dⁿ 7s², mais ces éléments ne sont obtenus qu’en quelques atomes à la fois, avec des durées de vie très courtes, si bien que leur chimie expérimentale est très limitée.',
            'Rf (Z = 104, rutherfordium) : nommé d’après Ernest Rutherford. Sa découverte a été revendiquée par des équipes de Doubna et de Berkeley.',
            'Db (Z = 105, dubnium) : nommé d’après Doubna (Russie), siège de l’Institut commun de recherches nucléaires (JINR).',
            'Sg (Z = 106, seaborgium) : nommé d’après Glenn Seaborg, de son vivant. Il a été synthétisé à Berkeley en 1974.',
            'Bh (Z = 107, bohrium) : nommé d’après Niels Bohr. Synthétisé en 1981 au GSI de Darmstadt (Allemagne).',
            'Hs (Z = 108, hassium) : son nom vient de Hassia, nom latin du Land allemand de Hesse. Synthétisé en 1984 au GSI de Darmstadt.',
            'Mt (Z = 109, meitnérium) : nommé d’après Lise Meitner. Synthétisé en 1982 au GSI de Darmstadt.',
            'Ds (Z = 110, darmstadtium) : nommé d’après Darmstadt, ville du GSI, où il a été synthétisé en 1994.',
            'Rg (Z = 111, roentgenium) : nommé d’après Wilhelm Conrad Röntgen. Synthétisé en 1994 au GSI de Darmstadt.',
            'Cn (Z = 112, copernicium) : nommé d’après Nicolas Copernic. Synthétisé en 1996 au GSI de Darmstadt ; son nom officiel date de 2010. Il est placé dans le groupe 12, sous le mercure.'
          ],
          formula: {
            label: 'COMPOSITION D’UN NOYAU SUPERLOURD',
            text: 'N = A − Z  |  Z(Rn) = 86  |  [Rn] 5f¹⁴ 6dⁿ 7s² (attendue)'
          },
          example: {
            statement: 'Le seaborgium (Z = 106) possède un isotope de nombre de masse A = 271. Combien de neutrons contient son noyau ?',
            calculation: 'N = A − Z = 271 − 106 = 165.',
            answer: 'Le noyau compte 106 protons et 165 neutrons.'
          },
          exercise: {
            question: 'Un isotope du copernicium (Z = 112) a pour nombre de masse A = 285. Combien de neutrons contient son noyau, et combien d’électrons possède l’atome neutre ?',
            answer: 'N = 285 − 112 = 173 neutrons ; l’atome neutre possède 112 électrons.'
          },
          sources: [
            { title: 'OpenStax Chemistry — 21.4 Transmutation and Nuclear Energy', url: 'https://openstax.org/books/chemistry/pages/21-4-transmutation-and-nuclear-energy' },
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (tableau périodique, éléments 104 à 112)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'lanthanides',
        title: 'Les lanthanides (Z = 57 à 71)',
        field: 'Éléments · bloc f',
        summary: 'La à Lu : remplissage de la sous-couche 4f, degré +3 dominant, contraction des lanthanides et usages technologiques.',
        lesson: {
          sections: [
            'Les lanthanides (de La à Lu, 15 éléments) sont les éléments où se remplit la sous-couche 4f ; avec Sc et Y, on les appelle souvent « terres rares ». Leur degré d’oxydation le plus courant est +3. Leurs rayons ioniques diminuent régulièrement de La³⁺ à Lu³⁺ (contraction des lanthanides). Leurs propriétés chimiques sont très voisines, ce qui rend leur séparation difficile. Réactifs, ils ne se trouvent pas à l’état élémentaire dans la nature. Le prométhium est le seul lanthanide radioactif.',
            'La composition exacte du groupe 3 (Sc, Y, puis La et Ac ou Lu et Lr) fait l’objet d’un projet de l’IUPAC ; ce cours adopte la définition courante : lanthanides de La à Lu et actinides de Ac à Lr.',
            'La (Z = 57, lanthane) : [Xe] 5d¹ 6s². Son nom vient du grec lanthanein, « se cacher ». Il entre dans des alliages d’accumulateurs nickel-métal hydrure et dans des verres optiques.',
            'Ce (Z = 58, cérium) : [Xe] 4f¹ 5d¹ 6s². Le plus abondant des lanthanides dans la croûte terrestre. Il existe aux degrés +3 et +4, et Ce⁴⁺ est un oxydant fort. Il doit son nom à la planète naine Cérès. Son oxyde CeO₂ sert dans les pots catalytiques et au polissage du verre.',
            'Pr (Z = 59, praséodyme) : [Xe] 4f³ 6s². Son nom signifie « jumeau vert ». Il a été séparé du néodyme par Carl Auer von Welsbach en 1885, à partir du « didyme ». Il colore les verres en jaune-vert.',
            'Nd (Z = 60, néodyme) : [Xe] 4f⁴ 6s². Les aimants néodyme-fer-bore sont les aimants permanents les plus puissants du commerce ; le néodyme dope aussi les lasers Nd:YAG.',
            'Pm (Z = 61, prométhium) : [Xe] 4f⁵ 6s². Aucun isotope stable ; l’isotope le plus stable, ¹⁴⁵Pm, a une période d’environ 17,7 ans. Identifié en 1945 à Oak Ridge dans des produits de fission ; son nom vient de Prométhée.',
            'Sm (Z = 62, samarium) : [Xe] 4f⁶ 6s². Il sert aux aimants samarium-cobalt. Son nom vient du minéral samarskite.',
            'Eu (Z = 63, europium) : [Xe] 4f⁷ 6s². Son nom vient de l’Europe. Il existe aux degrés +2 et +3 ; l’ion Eu³⁺ est le luminophore rouge des lampes fluorescentes et des écrans.',
            'Gd (Z = 64, gadolinium) : [Xe] 4f⁷ 5d¹ 6s². Nommé d’après le chimiste Johan Gadolin. Les complexes de Gd³⁺ sont utilisés comme agents de contraste en IRM. Il est ferromagnétique en dessous d’environ 20 °C.',
            'Tb (Z = 65, terbium) : [Xe] 4f⁹ 6s². Nommé d’après Ytterby (Suède). Le Tb³⁺ est un luminophore vert.',
            'Dy (Z = 66, dysprosium) : [Xe] 4f¹⁰ 6s². Son nom vient du grec dysprositos, « difficile à obtenir ». Il est ajouté aux aimants néodyme-fer-bore pour qu’ils résistent mieux à la chaleur.',
            'Ho (Z = 67, holmium) : [Xe] 4f¹¹ 6s². Son nom vient de Holmia, nom latin de Stockholm. Il a l’un des moments magnétiques les plus élevés parmi les éléments.',
            'Er (Z = 68, erbium) : [Xe] 4f¹² 6s². Nommé d’après Ytterby. L’erbium dope les fibres optiques des amplificateurs des télécommunications.',
            'Tm (Z = 69, thulium) : [Xe] 4f¹³ 6s². Nommé d’après Thulé. C’est le moins abondant des lanthanides non radioactifs dans la croûte terrestre.',
            'Yb (Z = 70, ytterbium) : [Xe] 4f¹⁴ 6s². Nommé d’après Ytterby. Il existe aux degrés +2 et +3 et est utilisé dans des horloges atomiques optiques.',
            'Lu (Z = 71, lutécium) : [Xe] 4f¹⁴ 5d¹ 6s². Dernier lanthanide, découvert en 1907 à Paris par Georges Urbain ; son nom vient de Lutetia, nom latin de Paris. L’isotope ¹⁷⁷Lu est employé en radiothérapie ciblée.'
          ],
          formula: {
            label: 'CONFIGURATION DES LANTHANIDES',
            text: '[Xe] 4fⁿ 6s²  (La : 5d¹ ; Ce : 4f¹ 5d¹ ; Gd : 4f⁷ 5d¹ ; Lu : 4f¹⁴ 5d¹)  |  Ln³⁺ : perte de 6s² et d’un électron 4f ou 5d'
          },
          example: {
            statement: 'Donner la configuration de l’ion Nd³⁺ (Nd, Z = 60 : [Xe] 4f⁴ 6s²).',
            calculation: 'Nd perd les deux électrons 6s puis un électron 4f : le nombre d’électrons 4f passe de 4 à 3.',
            answer: 'Nd³⁺ : [Xe] 4f³.'
          },
          exercise: {
            question: 'Donner la configuration de l’ion Eu³⁺ (Eu, Z = 63 : [Xe] 4f⁷ 6s²).',
            answer: 'Eu perd 6s² puis un électron 4f : Eu³⁺ : [Xe] 4f⁶.'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (tableau périodique, éléments 57 à 71)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'OpenStax Chemistry — 19.1 Occurrence, Preparation, and Properties of Transition Metals and Their Compounds (métaux de transition interne)', url: 'https://openstax.org/books/chemistry/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'actinides',
        title: 'Les actinides (Z = 89 à 103)',
        field: 'Éléments · bloc f',
        summary: 'Ac à Lr : éléments tous radioactifs, uranium et thorium naturels, transuraniens artificiels et période radioactive.',
        lesson: {
          sections: [
            'Les actinides (de Ac à Lr, 15 éléments) sont les éléments où se remplit la sous-couche 5f. Ils sont tous radioactifs. Le thorium et l’uranium existent en quantités notables dans la nature. Les éléments au-delà de l’uranium (Z > 92) sont dits transuraniens ; ils ont été obtenus par transmutation, mais le neptunium et le plutonium ont été retrouvés à l’état de traces dans la nature comme produits de désintégration de l’uranium.',
            'Ac (Z = 89, actinium) : radioactif. Découvert en 1899 par André Debierne ; son nom vient du grec aktis, « rayon ». L’isotope ²²⁷Ac a une période d’environ 21,8 ans.',
            'Th (Z = 90, thorium) : nommé d’après Thor. L’isotope ²³²Th, de période d’environ 1,4 × 10¹⁰ ans, est quasi la totalité du thorium naturel. Il pourrait servir de combustible nucléaire fertile.',
            'Pa (Z = 91, protactinium) : son nom signifie « avant l’actinium », car l’isotope ²³¹Pa se désintègre en ²²⁷Ac. C’est un élément très rare.',
            'U (Z = 92, uranium) : nommé d’après la planète Uranus. L’uranium naturel contient environ 0,72 % de l’isotope fissile ²³⁵U ; l’isotope ²³⁸U a une période d’environ 4,47 × 10⁹ ans. C’est avec des sels d’uranium que Becquerel a découvert la radioactivité en 1896.',
            'Np (Z = 93, neptunium) : nommé d’après Neptune. Premier élément transuranien, synthétisé en 1940 à Berkeley (McMillan et Abelson) par irradiation de l’uranium 238 avec des neutrons. L’isotope ²³⁷Np a une période d’environ 2,1 × 10⁶ ans.',
            'Pu (Z = 94, plutonium) : nommé d’après Pluton. Identifié en 1940-1941 à Berkeley (équipe de Seaborg). Il est formé principalement dans les réacteurs nucléaires à partir de l’uranium. L’isotope fissile ²³⁹Pu a une période d’environ 24 100 ans.',
            'Am (Z = 95, américium) : nommé d’après les Amériques. L’isotope ²⁴¹Am (période d’environ 432 ans) équipe les détecteurs de fumée à ionisation.',
            'Cm (Z = 96, curium) : nommé en l’honneur de Pierre et Marie Curie. Synthétisé en 1944 par l’équipe de Seaborg.',
            'Bk (Z = 97, berkélium) : nommé d’après Berkeley (Californie), où il a été obtenu en 1949. Le ²⁴⁹Bk a servi de cible pour synthétiser l’élément 117.',
            'Cf (Z = 98, californium) : nommé d’après la Californie, obtenu en 1950. L’isotope ²⁵²Cf est une source intense de neutrons.',
            'Es (Z = 99, einsteinium) : nommé d’après Albert Einstein. Identifié dans les retombées du premier essai de bombe à hydrogène (1952).',
            'Fm (Z = 100, fermium) : nommé d’après Enrico Fermi. Identifié lui aussi dans les retombées de l’essai de 1952.',
            'Md (Z = 101, mendélévium) : nommé d’après Dmitri Mendeleïev. Synthétisé en 1955 à Berkeley en quantités de quelques atomes.',
            'No (Z = 102, nobélium) : nommé d’après Alfred Nobel. Sa découverte a donné lieu à des revendications concurrentes avant que l’IUPAC ne conserve ce nom.',
            'Lr (Z = 103, lawrencium) : nommé d’après Ernest Lawrence, inventeur du cyclotron. Synthétisé en 1961 à Berkeley ; c’est le dernier actinide.'
          ],
          formula: {
            label: 'LOI DE DÉCROISSANCE RADIOACTIVE',
            text: 'N(t) = N₀ · (1/2)^(t / t½)  |  ²³⁸₉₂U + ¹₀n → ²³⁹₉₂U → ²³⁹₉₃Np + ⁰₋₁e'
          },
          example: {
            statement: 'L’américium 241 a une période d’environ 432 ans. Quelle fraction d’un échantillon reste-t-elle après 864 ans ?',
            calculation: '864 ans = 2 × 432 ans, soit 2 périodes. Fraction restante = (1/2)² = 1/4.',
            answer: 'Il reste un quart (25 %) des noyaux d’américium 241.'
          },
          exercise: {
            question: 'Compléter la désintégration β⁻ de l’uranium 239 : ²³⁹₉₂U → ? + ⁰₋₁e.',
            answer: 'La conservation de A (239) et de Z (92 = Z′ − 1) donne Z′ = 93 : ²³⁹₉₃Np (neptunium 239).'
          },
          sources: [
            { title: 'OpenStax Chemistry — 21.4 Transmutation and Nuclear Energy', url: 'https://openstax.org/books/chemistry/pages/21-4-transmutation-and-nuclear-energy' },
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (tableau périodique, éléments 89 à 103)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'metaux-pauvres',
        title: 'Les métaux pauvres (post-transition)',
        field: 'Éléments · blocs p',
        summary: 'Al, Ga, In, Sn, Tl, Pb, Bi, Po, Nh, Fl, Mc et Lv : métaux des groupes 13 à 16, effet de paire inerte, amphotérisme.',
        lesson: {
          sections: [
            'Les métaux pauvres (ou post-transition) sont les métaux du bloc p, situés à droite des métaux de transition : Al, Ga, In, Tl (groupe 13), Sn, Pb, Fl (groupe 14), Bi, Mc (groupe 15), Po, Lv (groupe 16) et Nh (groupe 13). Leur caractère métallique est moins marqué que celui des métaux alcalins. Les plus lourds présentent l’effet de paire inerte : formation d’un ion de degré d’oxydation inférieur de deux unités au degré maximal du groupe. Beaucoup sont protégés par une fine couche d’oxyde (passivation).',
            'Al (Z = 13, aluminium) : [Ne] 3s² 3p¹, ion Al³⁺. C’est le métal le plus abondant de la croûte terrestre. Il est amphotère : il réagit avec les acides et avec les bases en libérant du dihydrogène. Léger, solide, bon conducteur thermique et résistant à la corrosion grâce à sa couche d’oxyde, il est utilisé dans la construction, les transports, les canettes et les feuilles d’emballage.',
            'Ga (Z = 31, gallium) : [Ar] 3d¹⁰ 4s² 4p¹. Son point de fusion est très bas (environ 30 °C) : il fond dans la main. Découvert en 1875 par Lecoq de Boisbaudran, il correspond à l’« éka-aluminium » prévu par Mendeleïev. Ses composés (GaAs, GaN) sont des semi-conducteurs.',
            'In (Z = 49, indium) : [Kr] 4d¹⁰ 5s² 5p¹. Degrés +1 et +3. Les oxydes et hydroxydes d’indium et de thallium ont un comportement uniquement basique. L’oxyde d’indium-étain (ITO) forme les électrodes transparentes des écrans tactiles.',
            'Sn (Z = 50, étain) : [Kr] 4d¹⁰ 5s² 5p². Il donne Sn²⁺ et Sn⁴⁺. L’étain blanc, malléable, est stable au-dessus de 13,2 °C ; en dessous, l’étain gris, cassant, tend à tomber en poudre (« peste de l’étain »). L’étain sert à étamer l’acier (fer-blanc) et entre dans le bronze et les soudures.',
            'Tl (Z = 81, thallium) : [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹. En solution aqueuse, l’ion Tl⁺ est plus stable que Tl³⁺ (effet de paire inerte). Il est très toxique. Son nom vient du grec thallos, « rameau vert », d’après sa raie spectrale verte.',
            'Pb (Z = 82, plomb) : [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p². Il donne l’ion stable Pb²⁺ et des composés covalents où il est à +4. Il est à peine plus facile à oxyder que l’hydrogène. Il est utilisé dans les accumulateurs au plomb et il est toxique. Son symbole vient de plumbum.',
            'Bi (Z = 83, bismuth) : [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³. Élément le plus lourd du groupe 15 traité par OpenStax, c’est un métal peu réactif qui forme facilement l’ion Bi³⁺. Son isotope ²⁰⁹Bi, longtemps tenu pour stable, est en fait radioactif avec une période de l’ordre de 10¹⁹ ans.',
            'Po (Z = 84, polonium) : radioactif, découvert en 1898 par Pierre et Marie Curie et nommé d’après la Pologne, pays natal de Marie Curie. L’isotope ²¹⁰Po a une période d’environ 138 jours.',
            'Nh (Z = 113, nihonium) : élément synthétique du groupe 13, dont le nom, approuvé par l’IUPAC le 28 novembre 2016, vient de Nihon, « Japon » ; il a été découvert au RIKEN. Sa chimie est très mal connue.',
            'Fl (Z = 114, flérovium) : élément synthétique du groupe 14 (OpenStax cite l’étain, le plomb et le flérovium parmi les membres métalliques du groupe). Son nom rend hommage au laboratoire Flerov de réactions nucléaires de Doubna.',
            'Mc (Z = 115, moscovium) : élément synthétique du groupe 15, nommé d’après la région de Moscou ; il a été produit à Doubna en bombardant de l’américium 243 avec des ions calcium 48.',
            'Lv (Z = 116, livermorium) : élément synthétique du groupe 16, nommé d’après le Lawrence Livermore National Laboratory (Californie). Pour Nh, Fl, Mc et Lv, seuls quelques atomes de durée de vie très brève ont été observés, et les propriétés indiquées reposent en grande partie sur la position dans le tableau.'
          ],
          formula: {
            label: 'ALUMINIUM AMPHOTÈRE',
            text: '2 Al + 6 HCl → 2 AlCl₃ + 3 H₂  |  2 Al + 2 NaOH + 6 H₂O → 2 Na[Al(OH)₄] + 3 H₂'
          },
          example: {
            statement: 'On fait réagir 2,7 g d’aluminium (M = 27 g·mol⁻¹) avec un excès d’acide chlorhydrique. Quelle quantité de dihydrogène se forme ?',
            calculation: 'n(Al) = 2,7 / 27 = 0,10 mol. D’après 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂ : n(H₂) = (3/2) × n(Al) = 1,5 × 0,10 = 0,15 mol.',
            answer: 'Il se forme 0,15 mol de dihydrogène.'
          },
          exercise: {
            question: 'Pourquoi l’étain et le plomb forment-ils facilement les cations Sn²⁺ et Pb²⁺ alors que leur groupe est le groupe 14 ?',
            answer: 'Effet de paire inerte : les deux électrons ns² restent liés au noyau, d’où un degré d’oxydation +2, inférieur de deux unités au degré maximal +4 du groupe.'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity (Groups 12 to 15)', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'IUPAC — IUPAC Announces the Names of the Elements 113, 115, 117, and 118', url: 'https://iupac.org/iupac-announces-the-names-of-the-elements-113-115-117-and-118/' },
            { title: 'IUPAC — Periodic Table of Elements', url: 'https://iupac.org/what-we-do/periodic-table-of-elements/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'metalloides',
        title: 'Les métalloïdes',
        field: 'Éléments · frontière',
        summary: 'B, Si, Ge, As, Sb et Te : semi-conducteurs, cristaux covalents et propriétés intermédiaires entre métaux et non-métaux.',
        lesson: {
          sections: [
            'Six éléments, appelés métalloïdes, séparent les métaux des non-métaux dans le tableau : le bore, le silicium, le germanium, l’arsenic, l’antimoine et le tellure. Ils ont un aspect métallique mais conduisent moins bien l’électricité que les métaux : ce sont des semi-conducteurs. Leurs cristaux sont covalents comme ceux des non-métaux, mais comme les métaux ils ne forment généralement pas d’anions monoatomiques. Leur électronégativité est intermédiaire. D’autres éléments (Po, At) sont parfois classés dans cette catégorie selon les auteurs.',
            'B (Z = 5, bore) : [He] 2s² 2p¹. Avec un électron de valence de moins que d’orbitales de valence, il est déficient en électrons ; il est à +3 dans la plupart de ses composés. Le bore cristallin est formé d’icosaèdres de 12 atomes (liaisons B–B d’environ 176 pm). Il représente moins de 0,001 % de la masse de la croûte terrestre et se trouve sous forme de borates (borax Na₂B₄O₇·10H₂O) et d’acide borique B(OH)₃. L’oxyde B₂O₃ sert à fabriquer le verre borosilicaté.',
            'Si (Z = 14, silicium) : [Ne] 3s² 3p². Il représente près du quart de la masse de la croûte terrestre, derrière l’oxygène. Il cristallise avec la structure du diamant et forme des liaisons Si–O–Si à la base des minéraux (silice SiO₂, silicates). Le silicium ultrapur, obtenu par fusion de zone, est la base des transistors, puces et cellules solaires. Seul l’acide fluorhydrique attaque la silice parmi les acides usuels.',
            'Ge (Z = 32, germanium) : [Ar] 3d¹⁰ 4s² 4p². Cristallise avec la structure du diamant et se comporte chimiquement comme le silicium. Découvert en 1886 par Clemens Winkler, il correspond à l’« éka-silicium » prévu par Mendeleïev ; son nom vient de l’Allemagne.',
            'As (Z = 33, arsenic) : [Ar] 3d¹⁰ 4s² 4p³. Degrés d’oxydation +3, +5 et −3 (arséniures). La forme stable est en feuillets plissés semblables à ceux du graphite. L’arsenic et ses composés sont toxiques.',
            'Sb (Z = 51, antimoine) : [Kr] 4d¹⁰ 5s² 5p³. Structure en feuillets analogue à celle de l’arsenic ; caractère métallique plus marqué. Il donne des trihalogénures et, avec un excès de fluor ou de chlore, SbF₅ et SbCl₅. Chauffé avec du soufre, il forme Sb₂S₃ ou Sb₂S₅. Son symbole vient de stibium.',
            'Te (Z = 52, tellure) : [Kr] 4d¹⁰ 5s² 5p⁴. Ses cristaux contiennent des chaînes en spirale d’atomes. Il forme des tellurures (Te²⁻) avec les métaux actifs et des composés où il est à +2 ou +4 ; TeF₆ (+6) existe mais le tellure résiste à l’oxydation maximale. Il sert dans des cellules solaires au tellurure de cadmium. Son nom vient de Tellus, « la Terre ».'
          ],
          formula: {
            label: 'PRODUCTION DU SILICIUM ET DU BORE',
            text: 'SiO₂ + 2 C → Si + 2 CO  |  SiO₂ + 2 Mg → Si + 2 MgO  |  B₂O₃ + 3 Mg → 2 B + 3 MgO'
          },
          example: {
            statement: 'Quelle masse de silicium (M = 28 g·mol⁻¹) obtient-on par réduction de 60 g de silice SiO₂ (M = 60 g·mol⁻¹) par le carbone, avec rendement de 100 % ?',
            calculation: 'n(SiO₂) = 60 / 60 = 1,0 mol. D’après SiO₂ + 2 C → Si + 2 CO : n(Si) = 1,0 mol. m(Si) = 1,0 × 28 = 28 g.',
            answer: 'On obtient 28 g de silicium.'
          },
          exercise: {
            question: 'Pourquoi ne conserve-t-on pas l’acide fluorhydrique dans un flacon de verre, alors qu’on y conserve les autres acides usuels ?',
            answer: 'Le verre contient de la silice SiO₂ : l’acide fluorhydrique est le seul acide usuel qui l’attaque (SiO₂ + 4 HF → SiF₄ + 2 H₂O), car la liaison Si–F est plus forte que la liaison Si–O.'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.3 Structure and General Properties of the Metalloids', url: 'https://openstax.org/books/chemistry-2e/pages/18-3-structure-and-general-properties-of-the-metalloids' },
            { title: 'OpenStax Chemistry 2e — 18.1 Periodicity', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'non-metaux-reactifs',
        title: 'Les non-métaux réactifs : C, N, O, P, S et Se',
        field: 'Éléments · non-métaux',
        summary: 'Carbone, azote, oxygène, phosphore, soufre et sélénium : liaisons covalentes, allotropes et degrés d’oxydation.',
        lesson: {
          sections: [
            'Les non-métaux occupent la partie supérieure droite du tableau. Ils ont une électronégativité plus élevée que les métaux ; avec les métaux, ils forment des composés généralement ioniques ; entre eux, des composés covalents moléculaires. Dans les conditions usuelles, plus de la moitié sont des gaz, un est liquide, les autres sont des solides parmi les plus mous et les plus durs. Ils ne forment pas de cations monoatomiques en chimie courante. Le premier élément de chaque groupe (C, N, O) se distingue des suivants : il ne dispose que de quatre orbitales de valence et forme plus facilement des liaisons π ; ainsi l’azote ne donne que NF₃ alors que le phosphore donne PF₃ et PF₅.',
            'C (Z = 6, carbone) : [He] 2s² 2p². Il existe sous de nombreuses formes (allotropes) : le diamant (sp³, très dur, fusion vers 4400 °C), le graphite (couches sp², mou, conducteur électrique, utilisé comme « mine » de crayon et lubrifiant), le fullerène C₆₀, les nanotubes et le graphène. Le graphène a valu le prix Nobel de physique 2010 à Geim et Novoselov. Ses liaisons C–C sont à la base de la chimie organique. L’isotope ¹⁴C est utilisé en datation.',
            'N (Z = 7, azote) : [He] 2s² 2p³. Le diazote N₂ (triple liaison) est le principal constituant de l’air (environ 78 % en volume). Ses degrés d’oxydation vont de +5 à −3. C’est un mauvais oxydant. Ses composés hydrogénés comptent l’ammoniac NH₃, produit à l’échelle industrielle par le procédé Haber.',
            'O (Z = 8, oxygène) : [He] 2s² 2p⁴. Deux allotropes : le dioxygène O₂ (environ 21 % de l’air) et l’ozone O₃. Avec le fluor, c’est le plus fort oxydant connu ; il n’a de degré d’oxydation positif que combiné au fluor (OF₂). C’est l’élément le plus abondant de la croûte terrestre en masse, devant le silicium.',
            'P (Z = 15, phosphore) : [Ne] 3s² 3p³. Son nom vient du grec « porteur de lumière ». Seul élément de son groupe absent à l’état libre dans la nature, il présente plusieurs allotropes : le phosphore blanc (molécules P₄ tétraédriques, fusion à 44,2 °C, s’enflamme à l’air, conservé sous eau, très toxique), le phosphore rouge (obtenu en chauffant le blanc à 270–300 °C, bien moins réactif) et le phosphore noir. Il est indispensable au vivant (ADN, ATP).',
            'S (Z = 16, soufre) : [Ne] 3s² 3p⁴. Il possède la plus riche variété d’allotropes. Sa forme la plus stable est le soufre orthorhombique jaune, formé de molécules S₈ en couronne ; il fond vers 113 °C, bout à 445 °C et donne par refroidissement rapide du soufre plastique. Il brûle en dioxyde SO₂, anhydride de l’acide sulfureux H₂SO₃. Son hydrure est H₂S.',
            'Se (Z = 34, sélénium) : [Ar] 3d¹⁰ 4s² 4p⁴. Degrés d’oxydation +6, +4 et −2 (séléniure Se²⁻). C’est un oligo-élément essentiel. Il doit son nom à Séléné, la Lune, et a été découvert par Berzelius en 1817.'
          ],
          formula: {
            label: 'COMBUSTION DU SOUFRE',
            text: 'S(s) + O₂(g) → SO₂(g)  |  SO₂(g) + H₂O(l) → H₂SO₃(aq)  |  n.o.(S) : 0 → +4'
          },
          example: {
            statement: 'On brûle 3,2 g de soufre (M = 32 g·mol⁻¹) dans un excès de dioxygène. Quelle masse de SO₂ (M = 64 g·mol⁻¹) se forme ?',
            calculation: 'n(S) = 3,2 / 32 = 0,10 mol. D’après S + O₂ → SO₂ : n(SO₂) = 0,10 mol, donc m = 0,10 × 64 = 6,4 g.',
            answer: 'Il se forme 6,4 g de dioxyde de soufre.'
          },
          exercise: {
            question: 'Donner le degré d’oxydation de l’azote dans NH₃, N₂ et HNO₃.',
            answer: 'NH₃ : −3 (H à +1) ; N₂ : 0 (corps simple) ; HNO₃ : +5 (H à +1, O à −2 : +1 + x − 6 = 0 donne x = +5).'
          },
          sources: [
            { title: 'OpenStax Chemistry 2e — 18.4 Structure and General Properties of the Nonmetals', url: 'https://openstax.org/books/chemistry-2e/pages/18-4-structure-and-general-properties-of-the-nonmetals' },
            { title: 'OpenStax Chemistry 2e — 18.3 Structure and General Properties of the Metalloids (comparaison C et Si)', url: 'https://openstax.org/books/chemistry-2e/pages/18-3-structure-and-general-properties-of-the-metalloids' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'halogenes',
        title: 'Les halogènes (groupe 17)',
        field: 'Éléments · groupe 17',
        summary: 'F, Cl, Br, I, At et Ts : molécules diatomiques, pouvoir oxydant décroissant, déplacements entre halogènes.',
        lesson: {
          sections: [
            'Les halogènes (fluor, chlore, brome, iode, astate et tennesse) forment le groupe 17 ; leur configuration de valence est ns² np⁵. Trop réactifs pour exister libres dans la nature, ils se trouvent dans l’eau de mer sous forme d’ions halogénures. Leurs corps simples sont des molécules diatomiques : F₂ et Cl₂ sont des gaz, Br₂ est un liquide et I₂ un solide ; cette évolution traduit l’augmentation des forces de London avec la masse moléculaire et la polarisabilité.',
            'Leur pouvoir oxydant décroît du fluor à l’iode : le fluor oxyde généralement un élément à son degré d’oxydation maximal, et l’iode est le moins réactif. Les composés binaires d’un métal avec un halogène sont les halogénures. Dans l’eau, HCl, HBr et HI sont des acides forts.',
            'F (Z = 9, fluor) : [He] 2s² 2p⁵. C’est l’élément le plus électronégatif ; il ne présente jamais de degré d’oxydation positif (seulement −1) et c’est l’oxydant le plus puissant. Isolé en 1886 par Henri Moissan. L’acide fluorhydrique attaque le verre.',
            'Cl (Z = 17, chlore) : [Ne] 3s² 3p⁵. Le dichlore est un gaz jaune-vert pâle. Le chlorure de sodium est la source principale de chlore. Le chlore sert à la désinfection de l’eau et oxyde le phosphore en PCl₅.',
            'Br (Z = 35, brome) : [Ar] 3d¹⁰ 4s² 4p⁵. Le dibrome est un liquide rouge-brun à forte pression de vapeur, dont les vapeurs orange sont visibles. Il est préparé industriellement par oxydation des ions bromure par le dichlore ; il se trouve notamment dans la mer Morte et dans les saumures souterraines. Son nom vient du grec bromos, « puanteur », et il a été découvert par Balard en 1826.',
            'I (Z = 53, iode) : [Kr] 4d¹⁰ 5s² 5p⁵. Le diiode est un solide à vapeur violette. C’est le moins réactif des halogènes, et il réagit seulement faiblement avec l’eau. Il est préparé à partir de l’iodate de sodium NaIO₃ du salpêtre du Chili, réduit par l’hydrogénosulfite de sodium. Il est indispensable à la synthèse des hormones thyroïdiennes. Son nom vient du grec ioeidês, « violet ».',
            'At (Z = 85, astate) : radioactif, sans isotope stable ; c’est l’un des éléments les plus rares de la croûte terrestre. L’isotope le plus durable, ²¹⁰At, a une période d’environ 8,1 heures. Synthétisé en 1940 à Berkeley (Corson, MacKenzie et Segrè) en bombardant du bismuth 209 avec des particules alpha ; son nom vient du grec astatos, « instable ».',
            'Ts (Z = 117, tennesse) : élément synthétique approuvé par l’IUPAC le 28 novembre 2016 et nommé en reconnaissance de la région du Tennessee. Il a été obtenu à Doubna par la réaction d’ions calcium 48 avec une cible de berkélium 249. Le suffixe -ine marque son appartenance au groupe 17. Sa chimie n’a pas pu être étudiée en détail.'
          ],
          formula: {
            label: 'DÉPLACEMENT D’UN HALOGÈNE PAR UN AUTRE',
            text: 'Cl₂(g) + 2 I⁻(aq) → I₂(s) + 2 Cl⁻(aq)  |  Cl₂ + 2 Br⁻ → Br₂ + 2 Cl⁻'
          },
          example: {
            statement: 'On fait barboter du dichlore dans une solution de bromure de sodium. Que se passe-t-il ?',
            calculation: 'Le dichlore est un oxydant plus fort que le dibrome : il oxyde les ions bromure, selon Cl₂ + 2 Br⁻ → Br₂ + 2 Cl⁻ (principe de la préparation industrielle du brome).',
            answer: 'Du dibrome se forme (solution orangée) et le dichlore est réduit en ions chlorure.'
          },
          exercise: {
            question: 'Pourquoi F₂ et Cl₂ sont-ils des gaz alors que I₂ est un solide dans les conditions usuelles ?',
            answer: 'Les forces de London augmentent avec la masse moléculaire et la polarisabilité : elles sont assez fortes pour maintenir I₂ à l’état solide, mais trop faibles pour F₂ et Cl₂.'
          },
          sources: [
            { title: 'OpenStax Chemistry: Atoms First — 18.11 Occurrence, Preparation, and Properties of Halogens', url: 'https://openstax.org/books/chemistry-atoms-first/pages/18-11-occurrence-preparation-and-properties-of-halogens' },
            { title: 'OpenStax Chemistry 2e — 18.4 Structure and General Properties of the Nonmetals', url: 'https://openstax.org/books/chemistry-2e/pages/18-4-structure-and-general-properties-of-the-nonmetals' },
            { title: 'IUPAC — IUPAC Announces the Names of the Elements 113, 115, 117, and 118', url: 'https://iupac.org/iupac-announces-the-names-of-the-elements-113-115-117-and-118/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      },
      {
        id: 'gaz-nobles',
        title: 'Les gaz nobles (groupe 18)',
        field: 'Éléments · groupe 18',
        summary: 'He, Ne, Ar, Kr, Xe, Rn et Og : couche de valence complète, inertie chimique relative et composés du xénon.',
        lesson: {
          sections: [
            'Les gaz nobles (hélium, néon, argon, krypton, xénon, radon et oganesson) forment le groupe 18. Ils doivent leur nom à leur inertie supposée, due à leur couche de valence complète : ns² np⁶ (1s² pour l’hélium). Ce sont des gaz monoatomiques, dont les points de fusion et d’ébullition sont extrêmement bas par rapport à ceux de substances de masses comparables. Dans chaque période, ils ont la plus haute première énergie d’ionisation.',
            'En 1962, Neil Bartlett (Université de la Colombie-Britannique) a montré que cette inertie n’était pas absolue. Les trois gaz nobles les plus lourds réagissent avec le fluor ; les fluorures de xénon sont les mieux caractérisés et servent de point de départ à d’autres composés. Des composés instables de l’argon se forment à basse température ; on ne connaît pas de composés stables de l’hélium ni du néon.',
            'He (Z = 2, hélium) : 1s². Découvert dans le spectre solaire en 1868, isolé sur Terre par Ramsay en 1895 ; son nom vient du grec hélios. Il a le plus bas point d’ébullition de tous les éléments (environ 4,2 K). Certains gaz naturels en contiennent 1 à 2 % en masse ; on l’isole par liquéfaction des autres constituants. L’hélium liquide refroidit les aimants supraconducteurs.',
            'Ne (Z = 10, néon) : [He] 2s² 2p⁶. Découvert en 1898 par Ramsay et Travers. Une décharge électrique dans le néon produit une lumière rouge-orangé (enseignes lumineuses).',
            'Ar (Z = 18, argon) : [Ne] 3s² 3p⁶. Environ 0,93 % de l’air, après l’azote et l’oxygène. Découvert en 1894 par Rayleigh et Ramsay ; son nom vient du grec argos, « inactif ». Une grande partie de l’argon de l’air provient de la désintégration du ⁴⁰K. Il sert d’atmosphère inerte (soudage).',
            'Kr (Z = 36, krypton) : [Ar] 3d¹⁰ 4s² 4p⁶. Découvert en 1898 par Ramsay et Travers ; son nom vient du grec kryptos, « caché ». Il forme un fluorure, KrF₂.',
            'Xe (Z = 54, xénon) : [Kr] 4d¹⁰ 5s² 5p⁶. Ses composés stables se forment avec le fluor (XeF₂, XeF₄, XeF₆) ; les composés oxygénés sont obtenus en remplaçant des atomes de fluor des fluorures par de l’oxygène. Le tétrafluorure XeF₄, premier composé simple du xénon, a été annoncé en 1962 au laboratoire d’Argonne. Son nom vient du grec xenos, « étranger ».',
            'Rn (Z = 86, radon) : [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶. Radioactif, il provient de la désintégration d’autres éléments radioactifs : ²²²Rn (période d’environ 3,8 jours) naît de ²²⁶Ra. Il s’accumule dans certains bâtiments et constitue un risque de cancer du poumon. Découvert en 1900 par Friedrich Ernst Dorn.',
            'Og (Z = 118, oganesson) : élément synthétique le plus lourd connu, approuvé par l’IUPAC le 28 novembre 2016. Son nom rend hommage à Iouri Oganessian, pionnier de la recherche sur les éléments superlourds. Il a été produit à Doubna avec des ions calcium 48 sur une cible de californium. Le suffixe -on marque son appartenance au groupe 18 ; seuls quelques atomes ont été observés, et son comportement chimique reste inconnu expérimentalement.'
          ],
          formula: {
            label: 'COUCHE DE VALENCE DES GAZ NOBLES',
            text: 'ns² np⁶  (He : 1s²)  |  8 électrons de valence (2 pour He)  |  XeF₂, XeF₄, XeF₆'
          },
          example: {
            statement: 'Donner la configuration électronique de l’argon Ar (Z = 18) et son nombre d’électrons de valence.',
            calculation: 'Z = 18 : 1s² 2s² 2p⁶ 3s² 3p⁶, soit 2 + 2 + 6 + 2 + 6 = 18 électrons. La couche externe (n = 3) contient 3s² 3p⁶.',
            answer: 'Ar : 1s² 2s² 2p⁶ 3s² 3p⁶ ; 8 électrons de valence (octet complet).'
          },
          exercise: {
            question: 'Combien d’électrons de valence possède l’hélium, et pourquoi est-il pourtant un gaz noble ?',
            answer: '2 électrons (1s²) : sa sous-couche 1s est pleine (règle du duet), ce qui lui donne la stabilité des gaz nobles.'
          },
          sources: [
            { title: 'OpenStax Chemistry — 18.12 Occurrence, Preparation, and Properties of the Noble Gases', url: 'https://openstax.org/books/chemistry/pages/18-12-occurrence-preparation-and-properties-of-the-noble-gases' },
            { title: 'OpenStax Chemistry (Lumen Learning) — Occurrence, Preparation, and Properties of the Noble Gases', url: 'https://courses.lumenlearning.com/chemistryformajors/chapter/occurrence-preparation-and-properties-of-the-noble-gases/' },
            { title: 'IUPAC — IUPAC Announces the Names of the Elements 113, 115, 117, and 118', url: 'https://iupac.org/iupac-announces-the-names-of-the-elements-113-115-117-and-118/' },
            { title: 'Royal Society of Chemistry — Periodic Table', url: 'https://periodic-table.rsc.org/' }
          ]
        }
      }
    ]
  },

{
  id: 'chimie-organique',
  title: 'Chimie organique',
  note: 'Six chapitres approfondis consacrés aux fondements structuraux de la chimie organique, à la nomenclature et à la stéréochimie, aux hydrocarbures, aux fonctions organiques, aux mécanismes réactionnels et à la détermination des structures. Les notions sont présentées dans un ordre pédagogique ; les exemples sont illustratifs et les propriétés dépendent des structures et des conditions considérées.',
  chapters: [
    {
      id: 'fondements-structure-liaisons',
      title: 'Fondements de la chimie organique : structure, liaisons et représentation des molécules',
      field: 'Chimie organique · Structure moléculaire et liaison chimique',
      summary: 'Étudier le rôle du carbone, les liaisons covalentes, la géométrie moléculaire, l’hybridation, la polarité et les différentes représentations utilisées pour décrire les molécules organiques.',
      lesson: {
        sections: [
          'La chimie organique étudie principalement les composés du carbone. La capacité du carbone à former quatre liaisons covalentes et à établir des liaisons C–C stables permet de construire des chaînes, des ramifications et des cycles. Cette diversité structurale explique le très grand nombre de molécules organiques connues. La définition pratique ne signifie toutefois pas que tout composé contenant du carbone est classé comme organique : certains composés simples du carbone, comme les oxydes de carbone et les carbonates, sont habituellement étudiés en chimie minérale. Les molécules organiques peuvent être naturelles ou synthétiques.',
          'Une liaison covalente correspond à la mise en commun d’une ou plusieurs paires d’électrons entre des atomes. Une liaison simple comporte une liaison sigma (σ), tandis qu’une double liaison comporte une liaison sigma et une liaison pi (π), et une triple liaison une liaison sigma et deux liaisons pi. Les liaisons pi limitent généralement la rotation libre autour de l’axe internucléaire, ce qui contribue à l’existence de certaines formes géométriques distinctes. Les électrons ne sont pas toujours partagés de manière égale : une différence d’électronégativité peut rendre une liaison polarisée et produire des charges partielles notées δ+ et δ−.',
          'Les modèles d’hybridation sp3, sp2 et sp sont des descriptions utiles de la géométrie locale des atomes. Un carbone sp3 présente généralement une géométrie tétraédrique, avec des angles proches de 109,5° ; un carbone sp2 est généralement trigonal plan, avec des angles proches de 120° ; un carbone sp est généralement linéaire, avec un angle proche de 180°. Ces modèles permettent de relier la structure à la réactivité, mais ils ne doivent pas être considérés comme des objets physiques indépendants : ils constituent un modèle de description des orbitales et des liaisons.',
          'Les molécules peuvent être représentées par des formules brutes, développées, semi-développées ou topologiques. La formule brute indique uniquement le nombre de chaque type d’atome et ne suffit pas toujours à identifier une structure. Dans une formule topologique, chaque sommet et chaque extrémité de segment représente généralement un atome de carbone ; les hydrogènes liés aux carbones sont implicites, tandis que les hétéroatomes et les hydrogènes qui leur sont liés sont écrits. Une lecture rigoureuse de ces représentations est indispensable pour reconnaître les liaisons, les cycles, les ramifications et les groupes fonctionnels.'
        ],
        example: {
          statement: 'Comparer la géométrie locale du carbone dans le méthane CH4, l’éthène CH2=CH2 et l’éthyne HC≡CH.',
          calculation: 'Dans CH4, le carbone forme quatre liaisons simples : modèle sp3 et géométrie tétraédrique. Dans CH2=CH2, chaque carbone participe à une double liaison : modèle sp2 et géométrie trigonale plane autour de chaque carbone. Dans HC≡CH, chaque carbone participe à une triple liaison : modèle sp et géométrie linéaire autour de chaque carbone.',
          answer: 'Les géométries locales sont respectivement tétraédrique, trigonale plane et linéaire. Les angles idéalisés associés sont environ 109,5°, 120° et 180°.'
        },
        exercise: {
          question: 'Pourquoi la formule brute C2H6O ne permet-elle pas, à elle seule, de distinguer l’éthanol du méthoxyméthane ?',
          answer: 'Parce que ces deux molécules ont la même formule brute mais des enchaînements d’atomes différents : ce sont des isomères de constitution.'
        },
        exercises: [
          {
            question: 'Combien de liaisons covalentes forme habituellement un atome de carbone neutre dans les molécules organiques usuelles ?',
            answer: 'Il forme habituellement quatre liaisons covalentes.'
          },
          {
            question: 'Quelle est la composition d’une double liaison covalente entre deux carbones ?',
            answer: 'Une liaison sigma et une liaison pi.'
          },
          {
            question: 'Quelle géométrie est généralement associée à un carbone sp2 ?',
            answer: 'Une géométrie trigonale plane, avec des angles proches de 120°.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Organic Chemistry, chapitre 1 : Structure and Bonding',
            url: 'https://openstax.org/books/organic-chemistry/pages/1-introduction'
          },
          {
            title: 'OpenStax — Chemistry 2e, chapitre 20 : Introduction to Organic Chemistry',
            url: 'https://openstax.org/books/chemistry-2e/pages/20-introduction'
          },
          {
            title: 'IUPAC Gold Book — Functional group',
            url: 'https://goldbook.iupac.org/terms/view/F02555'
          }
        ]
      }
    },
    {
      id: 'nomenclature-isomerie-stereochimie',
      title: 'Nomenclature, isomérie et stéréochimie',
      field: 'Chimie organique · Nomenclature systématique et organisation spatiale',
      summary: 'Apprendre à nommer les molécules selon les principes IUPAC, à reconnaître les isomères de constitution et les stéréoisomères, et à décrire la configuration et la conformation.',
      lesson: {
        sections: [
          'La nomenclature systématique permet d’associer à une structure chimique un nom non ambigu. La méthode substitutive de l’IUPAC repose notamment sur le choix d’une structure parentale, l’identification du groupe caractéristique principal, la numérotation qui respecte les règles de priorité et l’indication des substituants. Le nom doit renseigner sur la chaîne ou le cycle parent, les insaturations, les groupes caractéristiques et leurs positions. Les règles détaillées dépendent de la classe de composés ; il faut donc appliquer les recommandations de nomenclature plutôt que retenir une simple règle universelle de numérotation.',
          'Des molécules qui possèdent la même formule brute peuvent présenter des structures différentes. Les isomères de constitution diffèrent par la connectivité des atomes : la chaîne carbonée peut être organisée différemment, la position d’un groupe peut changer ou la fonction chimique peut être différente. Les stéréoisomères ont la même connectivité mais diffèrent par l’organisation spatiale des atomes. Cette distinction est essentielle, car des isomères peuvent présenter des propriétés physiques, chimiques ou biologiques différentes.',
          'La stéréochimie décrit l’organisation tridimensionnelle des molécules. Un centre stéréogène tétraédrique, souvent un carbone lié à quatre substituants différents, peut donner lieu à deux configurations. Les descripteurs R et S sont attribués selon les règles de priorité de Cahn–Ingold–Prelog ; ils décrivent une configuration et ne prédisent pas à eux seuls le sens de rotation du plan de la lumière polarisée. Deux énantiomères sont des images l’un de l’autre dans un miroir et non superposables. Les diastéréoisomères sont des stéréoisomères qui ne sont pas énantiomères.',
          'La conformation correspond aux dispositions spatiales accessibles par rotation autour de liaisons simples, sans rupture de liaison. Dans l’éthane, les conformations décalée et éclipsée n’ont pas la même énergie ; la conformation décalée est plus stable dans le modèle usuel. Dans le cyclohexane, les conformations chaise sont particulièrement importantes et permettent de distinguer les positions axiales et équatoriales. Une inversion de chaise échange ces positions, sans changer la connectivité de la molécule. Il faut distinguer cette mobilité conformationnelle d’un changement de configuration, qui ne se produit pas par une simple rotation autour d’une liaison simple.'
        ],
        example: {
          statement: 'L’éthanol et le méthoxyméthane ont tous deux la formule brute C2H6O. Déterminer leur relation structurale.',
          calculation: 'L’éthanol possède l’enchaînement CH3–CH2–OH et une fonction alcool. Le méthoxyméthane possède l’enchaînement CH3–O–CH3 et une fonction éther. Les connexions entre les atomes ne sont donc pas identiques.',
          answer: 'Ce sont des isomères de constitution, plus précisément des isomères de fonction.'
        },
        exercise: {
          question: 'Deux molécules ont la même formule brute et la même connectivité, mais ne sont pas superposables et sont images l’une de l’autre dans un miroir. Comment les nomme-t-on ?',
          answer: 'Ce sont des énantiomères.'
        },
        exercises: [
          {
            question: 'Que décrit la formule brute d’une molécule ?',
            answer: 'Le nombre de chaque type d’atome, mais pas leur connectivité ni leur disposition spatiale.'
          },
          {
            question: 'Quelle différence existe-t-il entre isomères de constitution et stéréoisomères ?',
            answer: 'Les premiers diffèrent par la connectivité ; les seconds ont la même connectivité mais diffèrent par l’organisation spatiale.'
          },
          {
            question: 'Les descripteurs R et S indiquent-ils directement le signe de la rotation optique ?',
            answer: 'Non. R et S décrivent la configuration selon les règles CIP, pas le signe de la rotation optique.'
          }
        ],
        sources: [
          {
            title: 'IUPAC — Brief Guide to the Nomenclature of Organic Chemistry',
            url: 'https://iupac.qmul.ac.uk/BriefGuide/organic.html'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 3 : Alkanes and Their Stereochemistry',
            url: 'https://openstax.org/books/organic-chemistry/pages/3-introduction'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 5 : Stereochemistry',
            url: 'https://openstax.org/books/organic-chemistry/pages/5-introduction'
          },
          {
            title: 'IUPAC Gold Book — Stereochemistry terminology',
            url: 'https://goldbook.iupac.org/'
          }
        ]
      }
    },
    {
      id: 'hydrocarbures',
      title: 'Hydrocarbures : alcanes, alcènes, alcynes et composés aromatiques',
      field: 'Chimie organique · Hydrocarbures aliphatiques et aromatiques',
      summary: 'Étudier les familles d’hydrocarbures, leurs structures, leurs propriétés générales, leurs représentations et les grandes catégories de transformations qui leur sont associées.',
      lesson: {
        sections: [
          'Les hydrocarbures sont des composés constitués uniquement de carbone et d’hydrogène. Les alcanes sont saturés : ils ne comportent que des liaisons simples C–C. Pour un alcane acyclique comportant une seule chaîne et sans insaturation, la formule moléculaire générale est CnH2n+2. Les chaînes peuvent être linéaires ou ramifiées. Les propriétés physiques, comme les températures de changement d’état, varient notamment avec la taille et la forme des molécules ; il ne faut pas attribuer une valeur unique à toute une famille.',
          'Les alcènes possèdent au moins une double liaison carbone-carbone. Pour un alcène acyclique comportant une seule double liaison et aucune autre insaturation ni cycle, la formule générale est CnH2n. La double liaison comprend une liaison sigma et une liaison pi, ce qui limite la rotation autour de l’axe C=C. Lorsque les substituants le permettent, cette contrainte peut conduire à une isomérie géométrique décrite notamment par les descripteurs E et Z. Les réactions d’addition sur la double liaison sont une catégorie importante de la chimie des alcènes.',
          'Les alcynes possèdent au moins une triple liaison carbone-carbone. Pour un alcyne acyclique comportant une seule triple liaison et aucune autre insaturation ni cycle, la formule générale est CnH2n−2. Les carbones de la triple liaison sont généralement décrits par un modèle sp et présentent une géométrie locale linéaire. Les alcynes peuvent participer à des réactions d’addition ; la nature du produit dépend de la transformation considérée et du degré de transformation de la triple liaison.',
          'Les composés aromatiques possèdent un système électronique délocalisé qui leur confère une stabilité particulière. Le benzène est le modèle classique : ses six électrons π sont délocalisés sur le cycle. Il est donc trompeur de le représenter comme une simple alternance figée de trois doubles et de trois simples liaisons indépendantes. Les réactions caractéristiques du noyau benzénique conservent souvent l’aromaticité, notamment par substitution électrophile aromatique, plutôt que par addition qui détruirait le système aromatique. Le terme aromatique désigne ici une propriété électronique et structurale, non une odeur.'
        ],
        example: {
          statement: 'Classer les molécules suivantes : propane C3H8, propène C3H6 et propyne C3H4.',
          calculation: 'Le propane ne possède que des liaisons simples C–C : alcane. Le propène possède une double liaison C=C : alcène. Le propyne possède une triple liaison C≡C : alcyne.',
          answer: 'Propane : alcane ; propène : alcène ; propyne : alcyne. Les formules correspondent aux relations générales des hydrocarbures acycliques ne comportant qu’une seule chaîne et, pour les deux dernières molécules, une seule insaturation.'
        },
        exercise: {
          question: 'Pourquoi le benzène ne se comporte-t-il pas simplement comme un alcène ordinaire possédant trois doubles liaisons indépendantes ?',
          answer: 'Parce que ses électrons π sont délocalisés sur l’ensemble du cycle, ce qui confère au système aromatique une stabilité particulière.'
        },
        exercises: [
          {
            question: 'Quelle famille d’hydrocarbures ne possède que des liaisons simples C–C ?',
            answer: 'Les alcanes.'
          },
          {
            question: 'Quel type de liaison caractérise les alcènes ?',
            answer: 'Une double liaison carbone-carbone C=C.'
          },
          {
            question: 'Que signifie le caractère aromatique du benzène ?',
            answer: 'Il désigne un système cyclique conjugué à électrons π délocalisés présentant une stabilité particulière.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 20.1 : Hydrocarbons',
            url: 'https://openstax.org/books/chemistry-2e/pages/20-1-hydrocarbons'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 7 : Alkenes',
            url: 'https://openstax.org/books/organic-chemistry/pages/7-introduction'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 8 : Alkynes',
            url: 'https://openstax.org/books/organic-chemistry/pages/8-introduction'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 16 : Chemistry of Benzene',
            url: 'https://openstax.org/books/organic-chemistry/pages/16-introduction'
          }
        ]
      }
    },
    {
      id: 'groupes-fonctionnels-familles',
      title: 'Groupes fonctionnels et grandes familles de composés organiques',
      field: 'Chimie organique · Fonctions oxygénées, azotées et dérivés halogénés',
      summary: 'Identifier les groupes fonctionnels et relier leur structure aux propriétés physiques, à l’acidité ou à la basicité et aux transformations typiques des familles organiques.',
      lesson: {
        sections: [
          'Un groupe fonctionnel est un atome ou un ensemble d’atomes qui confère à une famille de composés des propriétés chimiques caractéristiques. Une molécule peut comporter plusieurs groupes fonctionnels ; ses propriétés résultent alors de leur présence, de leur position et de leurs interactions. L’identification des fonctions constitue une étape centrale de l’analyse d’une formule topologique et de la prévision qualitative de la réactivité. Le groupe fonctionnel est un outil de classification : il ne garantit pas que toutes les molécules d’une famille réagissent à la même vitesse ou dans les mêmes conditions.',
          'Les alcools possèdent un groupe hydroxyle –OH lié à un carbone saturé ; les éthers comportent un atome d’oxygène lié à deux groupes carbonés. Les alcools peuvent former des liaisons hydrogène entre molécules, ce qui influence notamment leurs températures d’ébullition et leur miscibilité avec l’eau. Les phénols possèdent un groupe –OH directement lié à un cycle aromatique et ne doivent pas être confondus avec les alcools ordinaires. Les éthers présentent une structure différente et ne possèdent pas de liaison O–H.',
          'Les composés carbonylés contiennent une liaison C=O. Les aldéhydes portent un groupe carbonyle en bout de chaîne, lié à au moins un hydrogène sur le carbone carbonylé ; les cétones possèdent un carbone carbonylé lié à deux groupes carbonés. Les acides carboxyliques portent le groupe –COOH, tandis que les esters possèdent le motif –COOR. Les aldéhydes et les cétones donnent notamment lieu à des réactions d’addition nucléophile sur le carbone du carbonyle. Les acides carboxyliques et leurs dérivés présentent une chimie distincte, notamment des réactions de substitution nucléophile acyle.',
          'Les amines sont des dérivés de l’ammoniac dans lesquels un ou plusieurs hydrogènes sont remplacés par des groupes carbonés ; elles présentent généralement un caractère basique lié au doublet libre de l’azote, avec une basicité qui dépend de leur structure et du milieu. Les amides possèdent un azote lié à un carbone carbonylé ; leur doublet est délocalisé par résonance, ce qui modifie fortement leur basicité et la réactivité de la liaison C–N. Les nitriles comportent le groupe –C≡N. Les dérivés halogénés possèdent une liaison carbone-halogène polarisée, qui peut intervenir dans des réactions de substitution ou d’élimination selon la structure et les conditions.'
        ],
        example: {
          statement: 'Identifier les fonctions présentes dans CH3CH2OH, CH3OCH3, CH3CHO et CH3COOH.',
          calculation: 'CH3CH2OH contient –OH lié à un carbone saturé : alcool. CH3OCH3 contient un oxygène entre deux groupes carbonés : éther. CH3CHO contient un groupe terminal –CHO : aldéhyde. CH3COOH contient –COOH : acide carboxylique.',
          answer: 'Les fonctions sont respectivement alcool, éther, aldéhyde et acide carboxylique.'
        },
        exercise: {
          question: 'Quelle différence structurale distingue un aldéhyde d’une cétone ?',
          answer: 'Dans un aldéhyde, le carbone du carbonyle est lié à au moins un hydrogène ; dans une cétone, il est lié à deux groupes carbonés.'
        },
        exercises: [
          {
            question: 'Quel groupe fonctionnel caractérise un alcool ?',
            answer: 'Le groupe hydroxyle –OH lié à un carbone saturé.'
          },
          {
            question: 'Quel motif caractérise un ester ?',
            answer: 'Le motif –COOR.'
          },
          {
            question: 'Pourquoi une amide est-elle généralement moins basique qu’une amine comparable ?',
            answer: 'Parce que le doublet libre de l’azote de l’amide est délocalisé par résonance vers le groupe carbonyle.'
          }
        ],
        sources: [
          {
            title: 'IUPAC Gold Book — Functional group',
            url: 'https://goldbook.iupac.org/terms/view/F02555'
          },
          {
            title: 'OpenStax — Chemistry 2e, 20.2 : Alcohols and Ethers',
            url: 'https://openstax.org/books/chemistry-2e/pages/20-2-alcohols-and-ethers'
          },
          {
            title: 'OpenStax — Chemistry 2e, 20.3 : Aldehydes, Ketones, Carboxylic Acids, and Esters',
            url: 'https://openstax.org/books/chemistry-2e/pages/20-3-aldehydes-ketones-carboxylic-acids-and-esters'
          },
          {
            title: 'OpenStax — Chemistry 2e, 20.4 : Amines and Amides',
            url: 'https://openstax.org/books/chemistry-2e/pages/20-4-amines-and-amides'
          },
          {
            title: 'IUPAC — Brief Guide to Organic Nomenclature',
            url: 'https://iupac.qmul.ac.uk/BriefGuide/organic.html'
          }
        ]
      }
    },
    {
      id: 'mecanismes-reactionnels',
      title: 'Réactivité et mécanismes des réactions organiques',
      field: 'Chimie organique · Mécanismes, cinétique et transformations',
      summary: 'Comprendre comment les liaisons se rompent et se forment, reconnaître les grandes catégories de réactions et interpréter les mécanismes polaires et radicalaires.',
      lesson: {
        sections: [
          'Une équation-bilan indique les réactifs et les produits d’une transformation, mais ne décrit pas nécessairement les étapes microscopiques qui conduisent aux produits. Le mécanisme réactionnel précise quelles liaisons sont rompues et formées, dans quel ordre, et quels intermédiaires ou états de transition interviennent. Un mécanisme cohérent doit respecter la conservation des atomes et de la charge et rendre compte des produits observés. Les flèches courbes représentent le déplacement de doublets électroniques : une flèche à deux pointes correspond au déplacement d’une paire d’électrons, tandis qu’une flèche à une pointe représente le déplacement d’un électron dans un mécanisme radicalaire.',
          'Les transformations organiques sont souvent classées en additions, éliminations, substitutions et réarrangements. Une addition combine des fragments sur une structure insaturée ou un centre réactif ; une élimination retire des groupes et conduit fréquemment à la formation d’une liaison multiple ; une substitution remplace un groupe par un autre ; un réarrangement réorganise les liaisons au sein d’une même structure moléculaire. Cette classification décrit le bilan de la transformation et ne suffit pas à déterminer son mécanisme détaillé.',
          'Dans les mécanismes polaires, les doublets électroniques se déplacent entre des régions riches et pauvres en électrons. Un nucléophile est une espèce qui fournit un doublet pour former une liaison ; un électrophile accepte un doublet. La polarité des liaisons, les charges formelles, la stabilisation par résonance et l’encombrement stérique influencent la réactivité. Les réactions de substitution nucléophile peuvent suivre des mécanismes SN1 ou SN2. Dans un modèle SN2, la substitution se déroule en une étape concertée et conduit, dans le cas d’un centre stéréogène concerné, à une inversion de configuration. Dans un modèle SN1, le départ du groupe partant précède l’attaque du nucléophile et forme un intermédiaire carbocationique ; la stéréochimie observée dépend du contexte moléculaire et ne doit pas être résumée par une règle absolue de racémisation.',
          'Les réactions d’élimination peuvent notamment suivre des mécanismes E1 ou E2. E1 comporte la formation préalable d’un carbocation, tandis que E2 se déroule en une étape concertée avec intervention simultanée de la base et du groupe partant. Les réactions radicalaires impliquent des espèces possédant un électron célibataire et sont décrites par des étapes d’initiation, de propagation et parfois de terminaison. Pour comparer des mécanismes, il faut examiner la structure du substrat, la nature des réactifs, le solvant, la température et les données cinétiques disponibles ; une seule caractéristique ne permet pas toujours de trancher.'
        ],
        example: {
          statement: 'Classer les transformations suivantes selon leur bilan : CH2=CH2 + H2 → CH3CH3 ; CH3CH2Br → CH2=CH2 + HBr ; CH3Br + OH− → CH3OH + Br−.',
          calculation: 'La première ajoute des atomes d’hydrogène sur une double liaison : addition. La deuxième élimine HBr et forme une double liaison : élimination. La troisième remplace Br par OH : substitution.',
          answer: 'Les trois transformations sont respectivement une addition, une élimination et une substitution. Cette classification ne suffit pas, à elle seule, à préciser les mécanismes ni les conditions expérimentales.'
        },
        exercise: {
          question: 'Quelle information supplémentaire un mécanisme apporte-t-il par rapport à une équation-bilan ?',
          answer: 'Il décrit les étapes de rupture et de formation des liaisons, les déplacements électroniques, les intermédiaires éventuels et l’ordre des étapes.'
        },
        exercises: [
          {
            question: 'Que représente une flèche courbe à deux pointes dans un mécanisme polaire ?',
            answer: 'Le déplacement d’un doublet d’électrons.'
          },
          {
            question: 'Quelle différence fondamentale distingue SN1 de SN2 ?',
            answer: 'SN1 comporte une étape préalable de départ du groupe partant ; SN2 est une substitution concertée en une étape.'
          },
          {
            question: 'Quel est le rôle d’un nucléophile ?',
            answer: 'Il fournit un doublet électronique pour former une nouvelle liaison.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Organic Chemistry, 6.1 : Kinds of Organic Reactions',
            url: 'https://openstax.org/books/organic-chemistry/pages/6-1-kinds-of-organic-reactions'
          },
          {
            title: 'OpenStax — Organic Chemistry, 6.2 : How Organic Reactions Occur: Mechanisms',
            url: 'https://openstax.org/books/organic-chemistry/pages/6-2-how-organic-reactions-occur-mechanisms'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 11 : Nucleophilic Substitution and Elimination Reactions',
            url: 'https://openstax.org/books/organic-chemistry/pages/11-introduction'
          },
          {
            title: 'Royal Society of Chemistry — Investigate Organic Reaction Mechanisms',
            url: 'https://edu.rsc.org/resources/investigate-organic-reaction-mechanisms/383.article'
          }
        ]
      }
    },
    {
      id: 'analyse-spectroscopique-structure',
      title: 'Analyse des molécules : spectroscopies et détermination structurale',
      field: 'Chimie organique · Spectrométrie de masse et spectroscopies IR, RMN et UV-visible',
      summary: 'Découvrir comment les données spectrales permettent de déterminer une formule, d’identifier des groupes fonctionnels et de reconstruire progressivement une structure moléculaire.',
      lesson: {
        sections: [
          'La détermination d’une structure organique repose sur la combinaison de plusieurs informations complémentaires. La formule brute et la masse moléculaire contraignent les structures possibles, tandis que les spectres renseignent sur les groupes fonctionnels, les environnements atomiques et les systèmes électroniques. Une méthode isolée fournit rarement une preuve complète : l’interprétation fiable consiste à confronter les résultats de plusieurs techniques avec une structure candidate et à vérifier que toutes les données sont compatibles.',
          'La spectrométrie de masse mesure le rapport masse/charge des ions produits à partir d’un échantillon. Selon la méthode d’ionisation, on peut observer un ion moléculaire ou des ions associés à la molécule, ainsi que des fragments issus de sa dissociation. La masse exacte, lorsque l’instrumentation le permet, peut aider à distinguer des formules élémentaires possibles ; les motifs de fragmentation apportent des indices structuraux. Il faut cependant tenir compte de la méthode d’ionisation, de la charge des ions et des incertitudes de mesure : un pic isolé ne suffit pas à identifier sans ambiguïté une molécule.',
          'La spectroscopie infrarouge (IR) étudie l’absorption d’un rayonnement associée à des transitions vibrationnelles. Les bandes observées renseignent sur certains types de liaisons et groupes fonctionnels. La région dite des groupes fonctionnels permet notamment de rechercher des signaux caractéristiques de liaisons O–H, N–H ou C=O ; la région d’empreinte digitale contient de nombreuses bandes qui peuvent aider à comparer un spectre à une référence. Les positions et intensités des bandes dépendent de l’environnement moléculaire et des conditions de mesure : les valeurs doivent être interprétées comme des indices et non comme des identifiants infaillibles.',
          'La résonance magnétique nucléaire (RMN) renseigne sur les environnements chimiques de noyaux possédant un spin, notamment 1H et 13C. Le déplacement chimique dépend de l’environnement électronique du noyau. En RMN du proton, le nombre de signaux indique le nombre d’environnements de protons distinguables dans les conditions de l’expérience ; l’intégration donne des informations sur leurs proportions relatives et la multiplicité peut renseigner sur les couplages avec des noyaux voisins. En RMN du carbone 13, les signaux aident à distinguer les environnements carbonés. L’interprétation complète doit tenir compte de la symétrie, de l’équivalence des noyaux et des paramètres expérimentaux.',
          'La spectroscopie UV-visible étudie l’absorption de rayonnements associée à des transitions électroniques. En chimie organique, elle est particulièrement utile pour examiner certains chromophores et systèmes conjugués. Une absorption peut être influencée par la structure électronique, le solvant et les substituants. En pratique, on confronte les données UV-visible aux informations de RMN, d’IR et de spectrométrie de masse. La cohérence globale de l’ensemble est plus probante qu’une attribution fondée sur une seule bande ou un seul signal.'
        ],
        example: {
          statement: 'Un composé inconnu présente une bande IR intense compatible avec un groupe carbonyle. Expliquer ce que cette observation permet de conclure et ce qu’elle ne permet pas de conclure.',
          calculation: 'Une absorption compatible avec une vibration C=O constitue un indice en faveur d’un composé contenant un carbonyle. Il faut ensuite examiner les autres bandes, la formule brute et les données de RMN ou de spectrométrie de masse pour distinguer, par exemple, un aldéhyde, une cétone, un ester, un acide carboxylique ou un amide.',
          answer: 'Le signal suggère la présence d’un carbonyle, mais ne permet pas à lui seul d’identifier la molécule ni de déterminer précisément sa famille. Une attribution fiable nécessite plusieurs données concordantes.'
        },
        exercise: {
          question: 'Quelle technique est particulièrement adaptée à l’identification des environnements des protons et des carbones dans une molécule ?',
          answer: 'La résonance magnétique nucléaire (RMN), notamment la RMN du 1H et du 13C.'
        },
        exercises: [
          {
            question: 'Quelle information fournit principalement la spectrométrie de masse ?',
            answer: 'Des informations sur le rapport masse/charge des ions, la masse moléculaire ou exacte selon la méthode, et des indices de fragmentation.'
          },
          {
            question: 'À quoi sert principalement un spectre infrarouge en chimie organique ?',
            answer: 'À repérer des vibrations caractéristiques et à obtenir des indices sur les liaisons et les groupes fonctionnels.'
          },
          {
            question: 'Pourquoi faut-il combiner plusieurs techniques spectroscopiques ?',
            answer: 'Parce que chaque technique apporte des informations partielles ; leur concordance permet de réduire les structures possibles et de renforcer l’identification.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Organic Chemistry, chapitre 12 : Structure Determination',
            url: 'https://openstax.org/books/organic-chemistry/pages/12-why-this-chapter'
          },
          {
            title: 'OpenStax — Organic Chemistry, 12.6 : Infrared Spectroscopy',
            url: 'https://openstax.org/books/organic-chemistry/pages/12-6-infrared-spectroscopy'
          },
          {
            title: 'OpenStax — Organic Chemistry, chapitre 13 : Nuclear Magnetic Resonance Spectroscopy',
            url: 'https://openstax.org/books/organic-chemistry/pages/13-why-this-chapter'
          },
          {
            title: 'OpenStax — Organic Chemistry, 12 Summary : Mass Spectrometry and Infrared Spectroscopy',
            url: 'https://openstax.org/books/organic-chemistry/pages/12-summary'
          }
        ]
      }
    }
  ]
},

{
  id: 'equations-chimiques',
  title: 'Équations chimiques',
  note: 'Six chapitres approfondis consacrés à l’écriture et à l’interprétation des équations chimiques, à la conservation de la matière, à l’ajustement stœchiométrique, aux états physiques et conditions réactionnelles, à la classification des transformations, aux équations ioniques et aux réactions d’oxydoréduction. Les exemples utilisent des réactions représentatives et des équations équilibrées. Les coefficients stœchiométriques sont distingués des indices des formules chimiques ; les états physiques et les charges sont explicités lorsque cela est pertinent.',
  chapters: [
    {
      id: 'fondements-equations-chimiques',
      title: 'Fondements des équations chimiques : écriture, lecture et signification',
      field: 'Chimie générale · Écriture symbolique des transformations chimiques',
      summary: 'Comprendre la structure d’une équation chimique, reconnaître les réactifs et les produits, interpréter les coefficients stœchiométriques et distinguer une équation symbolique d’une transformation réellement observée.',
      lesson: {
        sections: [
          'Une équation chimique est une représentation symbolique d’une transformation chimique. Les espèces consommées, appelées réactifs, sont généralement écrites à gauche de la flèche ; les espèces formées, appelées produits, sont écrites à droite. Les formules chimiques identifient les espèces et les coefficients placés devant ces formules indiquent les proportions stœchiométriques. Selon la signification recherchée, la flèche peut représenter une transformation nette dans un sens, tandis que le symbole d’équilibre indique une réaction réversible à l’équilibre. Une équation chimique ne décrit pas nécessairement le mécanisme microscopique complet : elle représente principalement le bilan global de la transformation.',
          'Une formule chimique indique la composition d’une espèce. Dans H2O, l’indice 2 signifie qu’une entité d’eau contient deux atomes d’hydrogène pour un atome d’oxygène. Dans 2 H2O, le coefficient 2 indique deux entités d’eau. Il faut impérativement distinguer le coefficient de l’indice : modifier un indice change la nature de l’espèce chimique, tandis que modifier un coefficient change uniquement la quantité représentée. C’est pourquoi l’ajustement d’une équation s’effectue en modifiant les coefficients et non les formules des substances.',
          'Les coefficients d’une équation équilibrée expriment des rapports entre nombres d’entités et, à l’échelle macroscopique, entre quantités de matière exprimées en moles. Dans l’équation 2 H2 + O2 → 2 H2O, deux entités de dihydrogène réagissent avec une entité de dioxygène pour former deux entités d’eau. À l’échelle molaire, 2 mol de H2 réagissent avec 1 mol de O2 pour former 2 mol de H2O, si la transformation suit cette stœchiométrie. Ces coefficients ne donnent pas directement les masses des substances : celles-ci doivent être calculées à partir des masses molaires.',
          'Les symboles associés aux équations apportent des informations supplémentaires. La flèche → représente une transformation nette dans le sens indiqué ; le symbole ⇌ peut représenter une réaction en équilibre. Les indications (s), (l), (g) et (aq) désignent respectivement l’état solide, liquide, gazeux et une espèce en solution aqueuse. Une notation telle que Δ au-dessus de la flèche indique un apport de chaleur, tandis qu’un catalyseur peut être indiqué au-dessus ou au-dessous de la flèche. Ces indications décrivent des conditions ou des états et ne doivent pas être confondues avec les coefficients.',
          'Une équation correctement écrite doit respecter la conservation des éléments chimiques et, lorsque des espèces chargées apparaissent, la conservation de la charge électrique. Elle doit également correspondre à une transformation chimiquement plausible dans les conditions indiquées. L’écriture d’une équation suppose donc de connaître les formules des réactifs et des produits, leurs états physiques lorsque ceux-ci sont connus, ainsi que le sens de la transformation. Une équation équilibrée n’est pas à elle seule une preuve expérimentale que la réaction se produit spontanément ou rapidement.'
        ],
        formula: {
          label: 'STRUCTURE GÉNÉRALE D’UNE ÉQUATION CHIMIQUE',
          text: 'a A + b B → c C + d D'
        },
        equationDetails: [
          {
            title: 'Écriture générale d’une équation chimique',
            formula: 'a A + b B → c C + d D',
            explanation: 'Les espèces A et B sont les réactifs ; C et D sont les produits. Les nombres a, b, c et d sont les coefficients stœchiométriques. Ils indiquent les proportions dans lesquelles les entités chimiques interviennent dans le bilan réactionnel.',
            parameters: 'A, B, C, D : espèces chimiques ; a, b, c, d : coefficients stœchiométriques entiers dans l’écriture usuelle ; → : sens net de la transformation représentée.',
            example: '2 H2(g) + O2(g) → 2 H2O(l).',
            result: 'Le rapport stœchiométrique est 2 : 1 : 2 entre le dihydrogène, le dioxygène et l’eau.'
          },
          {
            title: 'Distinction entre coefficient et indice',
            formula: '2 H2O ≠ H2O2',
            explanation: 'Le coefficient 2 placé devant H2O représente deux entités d’eau. L’indice 2 dans H2O2 appartient à la formule et décrit une autre espèce chimique, le peroxyde d’hydrogène.',
            parameters: '2 : coefficient multiplicatif ; indice 2 : nombre d’atomes de l’élément concerné dans une entité de la formule.',
            example: '2 H2O représente 4 atomes d’hydrogène et 2 atomes d’oxygène au total.',
            result: 'Un coefficient multiplie toute la formule ; un indice définit la composition de l’espèce.'
          }
        ],
        example: {
          statement: 'Interpréter l’équation de formation de l’eau : 2 H2(g) + O2(g) → 2 H2O(l).',
          calculation: 'À gauche : 2 molécules de H2 contiennent 4 atomes d’hydrogène et 1 molécule de O2 contient 2 atomes d’oxygène. À droite : 2 molécules de H2O contiennent 4 atomes d’hydrogène et 2 atomes d’oxygène.',
          answer: 'L’équation représente la réaction de 2 molécules de dihydrogène avec 1 molécule de dioxygène pour former 2 molécules d’eau. Les nombres d’atomes de chaque élément sont identiques des deux côtés.'
        },
        exercise: {
          question: 'Dans l’équation 3 CO2 + 2 H2O → C3H6O3 + 3 O2, que représente le coefficient 3 placé devant CO2 ?',
          answer: 'Il représente trois entités de dioxyde de carbone ou, à l’échelle macroscopique, une proportion de 3 mol de CO2 pour les autres espèces selon les coefficients de l’équation.'
        },
        exercises: [
          {
            question: 'Comment appelle-t-on les substances présentes à gauche de la flèche ?',
            answer: 'Les réactifs.'
          },
          {
            question: 'Que signifie l’indication (aq) ?',
            answer: 'L’espèce est présente en solution aqueuse.'
          },
          {
            question: 'Pourquoi ne doit-on pas modifier les indices d’une formule lors de l’équilibrage ?',
            answer: 'Parce que les indices définissent la composition et l’identité chimique de l’espèce.'
          }
        ],
        sources: [
          {
            title: 'IUPAC Gold Book — Chemical reaction equation',
            url: 'https://goldbook.iupac.org/terms/view/C01034'
          },
          {
            title: 'IUPAC Gold Book — Stoichiometry',
            url: 'https://goldbook.iupac.org/terms/view/S06026'
          },
          {
            title: 'OpenStax — Chemistry 2e, 4.1 : Writing and Balancing Chemical Equations',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations'
          }
        ]
      }
    },
    {
      id: 'conservation-matiere-equilibrage',
      title: 'Conservation de la matière et équilibrage des équations chimiques',
      field: 'Chimie générale · Conservation des éléments et ajustement stœchiométrique',
      summary: 'Maîtriser les principes de conservation des atomes et des charges, apprendre à ajuster les coefficients et vérifier mathématiquement une équation chimique.',
      lesson: {
        sections: [
          'L’équilibrage d’une équation chimique repose sur la conservation des éléments chimiques. Dans une transformation chimique ordinaire, les atomes ne sont ni créés ni détruits : ils sont réorganisés pour former de nouvelles espèces. Pour chaque élément, le nombre total d’atomes présents dans les réactifs doit donc être égal au nombre total d’atomes présents dans les produits. Pour une équation ionique, il faut également conserver la charge électrique totale. Ces règles constituent des contraintes fondamentales de l’écriture stœchiométrique.',
          'L’équilibrage consiste à déterminer des coefficients placés devant les formules chimiques. On commence généralement par écrire correctement les formules des réactifs et des produits, puis on compte les atomes de chaque élément. On ajuste les coefficients afin d’obtenir le même nombre d’atomes de chaque élément des deux côtés. Il est souvent pratique de commencer par les éléments présents dans le moins grand nombre d’espèces, puis de traiter l’hydrogène et l’oxygène lorsque cela simplifie le calcul. Cette stratégie est une méthode de travail et non une règle absolue.',
          'Les coefficients obtenus doivent être ramenés aux plus petits entiers possibles. Une équation peut être équilibrée avec plusieurs ensembles proportionnels de coefficients ; la forme conventionnelle utilise les plus petits nombres entiers. Pour vérifier le résultat, on recompte chaque élément à gauche et à droite. Une vérification supplémentaire est nécessaire pour les équations ioniques : la somme algébrique des charges doit également être identique des deux côtés. L’équilibrage ne consiste donc pas à rendre les molécules identiques de part et d’autre, mais à respecter les bilans atomiques et électriques.',
          'Certaines équations simples peuvent être équilibrées par inspection, mais les réactions plus complexes peuvent nécessiter une méthode algébrique. On attribue alors une variable à chaque coefficient, on écrit une équation de conservation pour chaque élément et on résout le système obtenu. Si les espèces sont chargées, une contrainte supplémentaire de conservation de la charge est ajoutée. Cette approche permet de traiter systématiquement les équations comportant plusieurs réactifs et produits.',
          'Il faut distinguer la conservation des atomes de la conservation des molécules. Une transformation chimique modifie les associations entre atomes, mais conserve les noyaux atomiques dans les réactions chimiques ordinaires. Les réactions nucléaires relèvent d’un autre domaine et peuvent modifier la nature des noyaux. Enfin, une équation équilibrée exprime un bilan de matière cohérent ; elle ne précise pas nécessairement les étapes intermédiaires ni la vitesse de réaction.'
        ],
        formula: {
          label: 'PRINCIPE DE CONSERVATION DES ATOMES',
          text: 'N(élément, réactifs) = N(élément, produits)'
        },
        equationDetails: [
          {
            title: 'Conservation du nombre d’atomes',
            formula: 'Σ nᵢ(élément, réactifs) = Σ nᵢ(élément, produits)',
            explanation: 'Pour chaque élément chimique, le nombre total d’atomes compté en tenant compte des coefficients doit être identique dans les réactifs et dans les produits.',
            parameters: 'nᵢ : nombre d’atomes de l’élément considéré dans une formule ; les coefficients stœchiométriques multiplient le nombre d’atomes de chaque formule.',
            example: 'Dans 2 H2 + O2 → 2 H2O : hydrogène = 2 × 2 = 4 à gauche et 2 × 2 = 4 à droite ; oxygène = 2 à gauche et 2 × 1 = 2 à droite.',
            result: 'Les bilans atomiques de l’hydrogène et de l’oxygène sont égaux.'
          },
          {
            title: 'Conservation de la charge électrique',
            formula: 'Σ q(réactifs) = Σ q(produits)',
            explanation: 'Dans une équation ionique, la somme algébrique des charges électriques doit être identique de chaque côté. Les coefficients multiplient également les charges des ions concernés.',
            parameters: 'q : charge électrique algébrique totale des espèces représentées, exprimée en charge élémentaire e ou en coulombs selon le contexte.',
            example: 'Fe²⁺ → Fe³⁺ + e⁻ : charge à gauche = +2 ; charge à droite = +3 − 1 = +2.',
            result: 'La demi-équation conserve la charge totale.'
          }
        ],
        example: {
          statement: 'Équilibrer l’équation de combustion du méthane : CH4 + O2 → CO2 + H2O.',
          calculation: 'Le carbone est déjà équilibré : 1 atome de chaque côté. Le méthane contient 4 hydrogènes : il faut donc 2 H2O. Les produits contiennent alors 2 atomes d’oxygène dans CO2 et 2 dans 2 H2O, soit 4 atomes au total. Il faut donc 2 O2.',
          answer: 'CH4 + 2 O2 → CO2 + 2 H2O. Le bilan comporte 1 carbone, 4 hydrogènes et 4 oxygènes de chaque côté.'
        },
        exercise: {
          question: 'Pourquoi l’équation H2 + O2 → H2O n’est-elle pas équilibrée ?',
          answer: 'Parce qu’elle présente 2 atomes d’oxygène à gauche et seulement 1 à droite. La forme équilibrée est 2 H2 + O2 → 2 H2O.'
        },
        exercises: [
          {
            question: 'Quelle grandeur doit être conservée pour chaque élément dans une équation chimique équilibrée ?',
            answer: 'Le nombre total d’atomes de cet élément.'
          },
          {
            question: 'Quelle autre conservation faut-il vérifier dans une équation ionique ?',
            answer: 'La conservation de la charge électrique totale.'
          },
          {
            question: 'Pourquoi utilise-t-on les plus petits coefficients entiers ?',
            answer: 'Pour exprimer le rapport stœchiométrique dans sa forme entière la plus simple.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 4.1 : Writing and Balancing Chemical Equations',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations'
          },
          {
            title: 'OpenStax — Chemistry 2e, 4.2 : Classifying Chemical Reactions',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions'
          },
          {
            title: 'IUPAC Gold Book — Stoichiometry',
            url: 'https://goldbook.iupac.org/terms/view/S06026'
          }
        ]
      }
    },
    {
      id: 'etats-physiques-conditions-reactionnelles',
      title: 'États physiques, conditions expérimentales et représentation des réactions',
      field: 'Chimie générale · États de la matière et conditions de transformation',
      summary: 'Lire les symboles d’état, représenter les espèces dissoutes, comprendre les conditions inscrites sur les flèches et distinguer les transformations complètes des réactions à l’équilibre.',
      lesson: {
        sections: [
          'Les états physiques indiqués dans une équation apportent des informations sur les conditions dans lesquelles les espèces sont représentées. Le symbole (s) correspond à un solide, (l) à un liquide, (g) à un gaz et (aq) à une espèce en solution aqueuse. Une espèce notée (aq) est présente dans l’eau sous une forme dissoute ; selon sa nature, elle peut être constituée d’ions ou de molécules. Ces symboles ne changent pas la composition de la formule chimique, mais précisent l’état de l’espèce dans le système étudié.',
          'La présence d’un solide formé au cours d’une réaction en solution peut être représentée par une flèche accompagnée de la notation (s). La formation d’un précipité est une transformation dans laquelle une espèce peu soluble apparaît sous forme solide à partir d’espèces initialement dissoutes. À l’inverse, une espèce soluble peut rester en solution sous forme d’ions. Il est donc important de connaître les propriétés de solubilité et les conditions expérimentales avant de choisir les états physiques dans l’équation.',
          'Les conditions réactionnelles peuvent être indiquées au-dessus ou au-dessous de la flèche. Le symbole Δ signale généralement un chauffage ; hν peut indiquer une irradiation lumineuse ; un catalyseur peut être mentionné à proximité de la flèche. Ces indications ne sont pas des réactifs consommés dans le bilan, sauf si la substance intervient effectivement dans l’équation. Un catalyseur modifie la vitesse d’une réaction en proposant un chemin réactionnel différent et est régénéré au cours du cycle catalytique global.',
          'La flèche simple et la flèche d’équilibre ne sont pas interchangeables. Une flèche simple représente le sens net d’une transformation dans l’écriture choisie, tandis que le symbole ⇌ représente une réaction réversible ou un état d’équilibre selon le contexte. À l’équilibre chimique, les réactions directe et inverse continuent à se produire à des vitesses égales ; les concentrations des espèces restent alors constantes dans le temps si les conditions macroscopiques ne changent pas. Cela ne signifie pas que les quantités de réactifs et de produits sont nécessairement égales.',
          'La représentation d’une réaction doit rester fidèle au système réel. Une équation moléculaire peut être suffisante pour décrire un bilan global, mais une équation ionique peut être plus informative lorsque des électrolytes sont dissous dans l’eau. Les états physiques, la température, le solvant et les conditions de pression peuvent influencer les espèces présentes et la position d’un équilibre. Une écriture rigoureuse doit donc préciser les informations utiles sans ajouter des conditions qui ne sont pas connues.'
        ],
        formula: {
          label: 'NOTATION DES ÉTATS PHYSIQUES',
          text: '(s) solide ; (l) liquide ; (g) gaz ; (aq) solution aqueuse'
        },
        equationDetails: [
          {
            title: 'Formation d’un précipité',
            formula: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)',
            explanation: 'Les ions argent et chlorure dissous forment du chlorure d’argent solide. L’équation ionique nette représente directement les espèces qui participent à la formation du précipité.',
            parameters: 'Ag⁺ : ion argent(I) en solution ; Cl⁻ : ion chlorure en solution ; AgCl(s) : chlorure d’argent solide.',
            example: 'Le mélange de solutions contenant Ag⁺ et Cl⁻ peut conduire à la formation d’un solide AgCl lorsque les conditions de concentration permettent la précipitation.',
            result: 'Un précipité de chlorure d’argent est représenté par AgCl(s).'
          },
          {
            title: 'Représentation d’une réaction à l’équilibre',
            formula: 'N2(g) + 3 H2(g) ⇌ 2 NH3(g)',
            explanation: 'La double flèche indique que la réaction peut se produire dans les deux sens. À l’équilibre, les vitesses des réactions directe et inverse sont égales.',
            parameters: 'N2 : diazote ; H2 : dihydrogène ; NH3 : ammoniac ; ⇌ : représentation d’un équilibre chimique.',
            example: 'La synthèse de l’ammoniac est une réaction réversible dont la composition à l’équilibre dépend notamment de la température et de la pression.',
            result: 'L’équilibre ne signifie pas que les concentrations de N2, H2 et NH3 sont égales.'
          }
        ],
        example: {
          statement: 'Interpréter l’équation AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq).',
          calculation: 'Les réactifs AgNO3 et NaCl sont dissous dans l’eau. Le produit AgCl est indiqué comme solide, ce qui signale la formation d’un précipité. Le nitrate de sodium reste représenté en solution aqueuse.',
          answer: 'La réaction conduit à la formation de chlorure d’argent solide à partir d’ions présents dans deux solutions aqueuses. L’équation moléculaire est équilibrée avec un rapport 1 : 1 : 1 : 1.'
        },
        exercise: {
          question: 'Que signifie le symbole (g) dans une équation chimique ?',
          answer: 'Il indique que l’espèce est à l’état gazeux.'
        },
        exercises: [
          {
            question: 'Que représente le symbole (s) ?',
            answer: 'L’état solide.'
          },
          {
            question: 'Que signifie la notation (aq) ?',
            answer: 'L’espèce est dissoute dans l’eau et présente en solution aqueuse.'
          },
          {
            question: 'À l’équilibre chimique, les concentrations des réactifs et des produits sont-elles nécessairement égales ?',
            answer: 'Non. Elles restent constantes à l’équilibre, mais leurs valeurs ne sont pas nécessairement égales.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 4.1 : Writing and Balancing Chemical Equations',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations'
          },
          {
            title: 'OpenStax — Chemistry 2e, 13.1 : Chemical Equilibria',
            url: 'https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria'
          },
          {
            title: 'OpenStax — Chemistry 2e, 13.2 : Equilibrium Constants',
            url: 'https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants'
          }
        ]
      }
    },
    {
      id: 'classification-transformations-chimiques',
      title: 'Classification des réactions et écriture des équations correspondantes',
      field: 'Chimie générale · Types de transformations chimiques',
      summary: 'Reconnaître les réactions de synthèse, de décomposition, de déplacement, de combustion, de précipitation, de neutralisation et de formation de gaz.',
      lesson: {
        sections: [
          'Les réactions chimiques peuvent être classées selon la transformation globale des espèces. Une réaction de synthèse conduit à la formation d’un composé à partir de plusieurs réactifs ; une réaction de décomposition transforme une espèce en plusieurs produits. Une réaction de déplacement simple implique le remplacement d’un élément dans un composé par un autre élément. Une réaction de double déplacement correspond à un échange de partenaires entre deux espèces ioniques. Ces catégories sont des outils pédagogiques de classement et ne décrivent pas nécessairement le mécanisme moléculaire.',
          'La combustion est une réaction d’oxydation impliquant un combustible et un oxydant, souvent le dioxygène. Pour un hydrocarbure qui subit une combustion complète en présence d’un excès suffisant de dioxygène, les produits carbonés sont le dioxyde de carbone et l’eau. Une combustion incomplète peut produire notamment du monoxyde de carbone ou du carbone solide, selon les conditions. Il est donc incorrect de supposer que toute combustion d’un composé carboné produit exclusivement du dioxyde de carbone et de l’eau.',
          'Les réactions acide-base peuvent être représentées par un transfert de proton selon la définition de Brønsted-Lowry. Dans le cas d’une neutralisation entre un acide fort et une base forte en solution aqueuse, l’équation ionique nette usuelle est H3O⁺ + OH⁻ → 2 H2O. L’équation moléculaire dépend des acides et des bases employés. Les espèces spectatrices peuvent être présentes dans l’équation moléculaire sans participer directement à la transformation ionique nette.',
          'Les réactions de précipitation se produisent lorsque des ions en solution forment un composé solide suffisamment peu soluble pour apparaître dans les conditions considérées. Les réactions de dégagement gazeux peuvent conduire à la formation de gaz tels que CO2 ou H2. Pour prévoir les produits, il faut connaître la nature des réactifs, les règles de solubilité et les conditions de réaction. Une classification ne remplace donc pas l’analyse chimique des espèces.',
          'Les réactions peuvent appartenir à plusieurs catégories simultanément. Une combustion est également une réaction d’oxydoréduction ; une réaction de déplacement simple est souvent une transformation redox ; certaines réactions de précipitation sont des échanges ioniques sans changement des nombres d’oxydation. Il est donc préférable de décrire la transformation à partir de ses caractéristiques pertinentes plutôt que d’imposer une seule étiquette exclusive.'
        ],
        formula: {
          label: 'EXEMPLE DE RÉACTION DE SYNTHÈSE',
          text: '2 H2(g) + O2(g) → 2 H2O(l)'
        },
        equationDetails: [
          {
            title: 'Réaction de synthèse',
            formula: '2 H2(g) + O2(g) → 2 H2O(l)',
            explanation: 'Deux réactifs se combinent pour former un composé. Cette équation représente la formation de l’eau à partir de dihydrogène et de dioxygène.',
            parameters: 'H2 : dihydrogène ; O2 : dioxygène ; H2O : eau ; les coefficients indiquent le rapport stœchiométrique.',
            example: '2 mol de H2 réagissent avec 1 mol de O2 pour former 2 mol de H2O dans le cadre de cette équation.',
            result: 'La transformation est une réaction de synthèse et une réaction d’oxydoréduction.'
          },
          {
            title: 'Combustion complète du méthane',
            formula: 'CH4(g) + 2 O2(g) → CO2(g) + 2 H2O(g)',
            explanation: 'Dans le modèle de combustion complète, le carbone du méthane est transformé en dioxyde de carbone et l’hydrogène en eau. L’état physique de l’eau dépend des conditions de température et de pression ; la notation vapeur est utilisée ici pour une représentation à haute température.',
            parameters: 'CH4 : méthane ; O2 : dioxygène ; CO2 : dioxyde de carbone ; H2O : eau ; les coefficients assurent la conservation des atomes.',
            example: 'Le bilan comporte 1 carbone, 4 hydrogènes et 4 oxygènes de chaque côté.',
            result: 'L’équation est équilibrée pour une combustion complète du méthane.'
          }
        ],
        example: {
          statement: 'Classer la réaction suivante : Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s).',
          calculation: 'Le zinc métallique devient Zn2+ en solution et les ions Cu2+ deviennent du cuivre métallique. Le zinc remplace le cuivre dans le composé ionique. Les nombres d’oxydation changent également.',
          answer: 'Il s’agit d’une réaction de déplacement simple et d’une réaction d’oxydoréduction.'
        },
        exercise: {
          question: 'Quelle différence existe-t-il entre une réaction de synthèse et une réaction de décomposition ?',
          answer: 'Une synthèse forme un composé à partir de plusieurs réactifs ; une décomposition transforme une espèce en plusieurs produits.'
        },
        exercises: [
          {
            question: 'Quel est le produit carboné principal d’une combustion complète d’un hydrocarbure en présence d’un excès suffisant de dioxygène ?',
            answer: 'Le dioxyde de carbone CO2.'
          },
          {
            question: 'Comment appelle-t-on une réaction qui forme un solide à partir d’ions dissous ?',
            answer: 'Une réaction de précipitation.'
          },
          {
            question: 'Une réaction de déplacement simple peut-elle être une réaction redox ?',
            answer: 'Oui. Elle implique fréquemment un transfert d’électrons et un changement des nombres d’oxydation.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 4.2 : Classifying Chemical Reactions',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions'
          },
          {
            title: 'OpenStax — Chemistry 2e, 4.3 : Reaction Stoichiometry',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry'
          },
          {
            title: 'OpenStax — Chemistry 2e, 14.7 : Acid-Base Titrations',
            url: 'https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations'
          }
        ]
      }
    },
    {
      id: 'equations-ioniques-precipitation',
      title: 'Équations moléculaires, ioniques et réactions en solution aqueuse',
      field: 'Chimie en solution · Dissociation, ions spectateurs et équations ioniques nettes',
      summary: 'Passer de l’équation moléculaire à l’équation ionique complète, identifier les ions spectateurs et établir l’équation ionique nette des transformations en solution.',
      lesson: {
        sections: [
          'En solution aqueuse, certains composés ioniques solubles se dissocient en ions. Une équation moléculaire représente les composés avec leurs formules globales, tandis qu’une équation ionique complète représente explicitement les ions présents en solution. Ces deux écritures décrivent le même bilan à des niveaux de détail différents. Les espèces solides, les liquides purs et les gaz ne sont généralement pas séparés en ions dans une équation ionique, sauf si leur comportement chimique le justifie.',
          'Les ions spectateurs sont des ions qui apparaissent sous la même forme des deux côtés d’une équation ionique complète. Ils ne participent pas directement à la transformation nette représentée. Pour obtenir l’équation ionique nette, on retire les ions spectateurs présents en quantités identiques des deux côtés. L’équation obtenue met en évidence les espèces qui subissent effectivement la transformation. Cette simplification ne doit être effectuée qu’après avoir écrit et équilibré l’équation ionique complète.',
          'Les réactions de précipitation constituent un exemple classique. Lorsque des solutions contenant des ions compatibles sont mélangées, un composé peu soluble peut se former sous forme solide. L’équation moléculaire indique les composés initiaux et les produits ; l’équation ionique complète détaille les ions dissous ; l’équation ionique nette ne conserve que les ions qui forment le solide. Les règles de solubilité permettent de prévoir de nombreuses situations, mais la précipitation dépend des concentrations et du produit ionique par rapport au produit de solubilité.',
          'Les équations ioniques servent également à représenter certaines réactions acide-base et réactions redox en solution. Dans une neutralisation entre un acide fort et une base forte, les ions hydronium et hydroxyde sont les espèces réactives nettes, tandis que certains ions issus des électrolytes restent spectateurs. Dans les réactions redox, l’équation ionique permet de suivre explicitement les charges et les électrons. Le choix de l’écriture dépend donc de la question scientifique étudiée.',
          'La vérification d’une équation ionique nette comporte deux contrôles indépendants : le nombre d’atomes de chaque élément doit être conservé et la charge totale doit être identique des deux côtés. Une équation qui conserve les atomes mais pas la charge est incorrecte. De même, une équation qui conserve la charge mais pas les atomes est incorrecte. Cette double vérification est particulièrement importante lorsque des ions polyatomiques, des protons, des ions hydroxyde ou des électrons sont présents.'
        ],
        formula: {
          label: 'ÉQUATION IONIQUE NETTE DE PRÉCIPITATION',
          text: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)'
        },
        equationDetails: [
          {
            title: 'Équation moléculaire de précipitation',
            formula: 'AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq)',
            explanation: 'Le nitrate d’argent et le chlorure de sodium sont représentés sous forme de composés dissous ; le chlorure d’argent est formé sous forme solide. Le nitrate de sodium reste en solution.',
            parameters: 'AgNO3 : nitrate d’argent ; NaCl : chlorure de sodium ; AgCl : chlorure d’argent ; NaNO3 : nitrate de sodium.',
            example: 'Les ions Ag+ et Cl− réagissent pour former AgCl solide.',
            result: 'L’équation moléculaire est équilibrée avec des coefficients égaux à 1.'
          },
          {
            title: 'Équation ionique complète',
            formula: 'Ag⁺(aq) + NO3⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO3⁻(aq)',
            explanation: 'Les composés solubles sont représentés par les ions qui les constituent en solution. Les ions sodium et nitrate apparaissent inchangés des deux côtés.',
            parameters: 'Ag+ et Cl− : ions réactifs ; Na+ et NO3− : ions spectateurs ; AgCl(s) : précipité.',
            example: 'Les ions sodium et nitrate sont présents dans l’équation complète mais ne sont pas consommés dans la transformation nette.',
            result: 'La charge totale vaut zéro de chaque côté et les atomes sont conservés.'
          },
          {
            title: 'Élimination des ions spectateurs',
            formula: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)',
            explanation: 'Les ions sodium et nitrate, présents sous la même forme des deux côtés, sont supprimés. L’équation restante décrit directement la formation du précipité.',
            parameters: 'Ag+ : ion argent ; Cl− : ion chlorure ; AgCl : chlorure d’argent solide.',
            example: 'Charge à gauche : +1 − 1 = 0. Charge à droite : 0.',
            result: 'L’équation ionique nette conserve les atomes et la charge.'
          }
        ],
        example: {
          statement: 'Établir l’équation ionique nette de la réaction entre AgNO3(aq) et NaCl(aq).',
          calculation: 'Équation moléculaire : AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq). Équation ionique complète : Ag+(aq) + NO3−(aq) + Na+(aq) + Cl−(aq) → AgCl(s) + Na+(aq) + NO3−(aq). Les ions Na+ et NO3− sont spectateurs et sont supprimés.',
          answer: 'Ag+(aq) + Cl−(aq) → AgCl(s). Le bilan des atomes et des charges est respecté.'
        },
        exercise: {
          question: 'Dans l’équation ionique complète d’une précipitation, comment reconnaît-on un ion spectateur ?',
          answer: 'Il apparaît des deux côtés avec la même formule, le même état et la même charge, sans être transformé.'
        },
        exercises: [
          {
            question: 'Pourquoi écrit-on les composés ioniques solubles sous forme d’ions dans une équation ionique complète ?',
            answer: 'Parce qu’ils sont dissociés en ions dans la solution aqueuse, selon leur comportement en solution.'
          },
          {
            question: 'Quel est le produit solide de la réaction entre Ag+ et Cl− ?',
            answer: 'Le chlorure d’argent AgCl(s).'
          },
          {
            question: 'Quelles deux conservations faut-il vérifier dans une équation ionique nette ?',
            answer: 'La conservation du nombre d’atomes de chaque élément et la conservation de la charge électrique totale.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 4.1 : Writing and Balancing Chemical Equations, Equations for Ionic Reactions',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations'
          },
          {
            title: 'OpenStax — Chemistry 2e, 4.2 : Classifying Chemical Reactions',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions'
          },
          {
            title: 'OpenStax — Chemistry 2e, 13.3 : Shifting Equilibria',
            url: 'https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria'
          }
        ]
      }
    },
    {
      id: 'equilibrage-redox-stoechiometrie',
      title: 'Équations d’oxydoréduction et applications stœchiométriques',
      field: 'Chimie générale · Transfert électronique et relations quantitatives',
      summary: 'Équilibrer les réactions redox par demi-équations, utiliser les nombres d’oxydation, interpréter les coefficients en moles et relier les équations aux calculs stœchiométriques.',
      lesson: {
        sections: [
          'Une réaction d’oxydoréduction implique un transfert d’électrons entre espèces chimiques. L’oxydation correspond à une perte d’électrons et la réduction à un gain d’électrons. L’espèce qui cède les électrons est le réducteur ; l’espèce qui les accepte est l’oxydant. Les deux processus se produisent simultanément, car les électrons libérés par une espèce doivent être captés par une autre. Une équation redox équilibrée doit conserver les éléments et la charge totale.',
          'Les nombres d’oxydation sont des nombres formels attribués aux atomes selon des règles conventionnelles. Ils permettent de suivre les changements électroniques dans une réaction. Une augmentation du nombre d’oxydation correspond à une oxydation ; une diminution correspond à une réduction. Les nombres d’oxydation ne sont pas nécessairement des charges réelles portées par les atomes : ils constituent un outil de comptabilité électronique. Leur variation permet d’identifier les éléments oxydés et réduits.',
          'La méthode des demi-équations consiste à séparer formellement l’oxydation et la réduction. On équilibre d’abord les éléments autres que l’hydrogène et l’oxygène, puis on ajuste l’oxygène avec H2O et l’hydrogène avec H+ en milieu acide. On équilibre ensuite les charges avec des électrons. Les demi-équations sont multipliées de manière à faire apparaître le même nombre d’électrons échangés, puis elles sont additionnées et simplifiées. En milieu basique, les ions OH− servent à neutraliser les ions H+ et à obtenir une équation adaptée au milieu.',
          'Une fois l’équation équilibrée, ses coefficients donnent les rapports molaires entre les réactifs et les produits. Pour exploiter ce rapport, on convertit les masses en quantités de matière à l’aide de la masse molaire, ou les volumes gazeux à l’aide d’une relation d’état lorsque les conditions sont précisées. Le réactif limitant est celui qui est entièrement consommé en premier selon la stœchiométrie ; les autres réactifs peuvent rester en excès. La quantité maximale de produit théorique se déduit du réactif limitant.',
          'Le rendement d’une transformation compare la quantité de produit réellement obtenue à la quantité théorique maximale, pour une même grandeur de comparaison. Il s’exprime généralement en pourcentage. Un rendement inférieur à 100 % peut résulter de réactions secondaires, de transformations incomplètes, de pertes lors de l’isolement ou de limites expérimentales. Il ne faut pas confondre rendement chimique, conversion d’un réactif et sélectivité d’une réaction : ces grandeurs répondent à des questions différentes.'
        ],
        formula: {
          label: 'PRINCIPE D’ÉQUILIBRAGE D’UNE RÉACTION REDOX',
          text: 'Oxydation : perte d’électrons ; réduction : gain d’électrons'
        },
        equationDetails: [
          {
            title: 'Demi-équation d’oxydation du fer(II)',
            formula: 'Fe²⁺(aq) → Fe³⁺(aq) + e⁻',
            explanation: 'L’ion fer(II) perd un électron et devient un ion fer(III). Le nombre d’oxydation du fer passe de +2 à +3 : il augmente, ce qui caractérise une oxydation.',
            parameters: 'Fe2+ : ion fer(II) ; Fe3+ : ion fer(III) ; e− : électron ; les charges sont exprimées en multiples de la charge élémentaire.',
            example: 'Charge à gauche : +2. Charge à droite : +3 − 1 = +2.',
            result: 'La demi-équation conserve la charge et l’atome de fer.'
          },
          {
            title: 'Demi-équation de réduction du cuivre(II)',
            formula: 'Cu²⁺(aq) + 2 e⁻ → Cu(s)',
            explanation: 'L’ion cuivre(II) gagne deux électrons et devient du cuivre métallique. Le nombre d’oxydation du cuivre passe de +2 à 0 : il diminue, ce qui caractérise une réduction.',
            parameters: 'Cu2+ : ion cuivre(II) ; e− : électron ; Cu(s) : cuivre métallique.',
            example: 'Charge à gauche : +2 − 2 = 0. Charge à droite : 0.',
            result: 'La demi-équation conserve les atomes et la charge.'
          },
          {
            title: 'Bilan de la réaction entre le fer(II) et le cuivre(II)',
            formula: '2 Fe²⁺(aq) + Cu(s) → 2 Fe³⁺(aq) + Cu²⁺(aq)',
            explanation: 'Deux ions fer(II) cèdent chacun un électron ; le cuivre métallique fournit les deux électrons nécessaires à la formation de Cu2+. Les électrons n’apparaissent plus dans l’équation globale car ils sont échangés entre les deux demi-réactions.',
            parameters: 'Fe2+ : réducteur ; Cu(s) : réducteur dans le couple Cu2+/Cu ; Fe3+ et Cu2+ : formes oxydées correspondantes. La réaction globale écrite est équilibrée en atomes et en charge.',
            example: 'Charge à gauche : 2 × (+2) = +4. Charge à droite : 2 × (+3) + (+2) = +8. Cette écriture n’est donc pas équilibrée en charge et ne constitue pas le bilan correct.',
            result: 'Le bilan correct de cette réaction doit être établi en tenant compte du sens réel des couples redox et des électrons échangés ; il ne faut pas déduire une réaction spontanée de la seule possibilité d’écrire des demi-équations.'
          },
          {
            title: 'Relation entre quantité de matière et coefficient stœchiométrique',
            formula: 'n(A) / a = n(B) / b',
            explanation: 'Pour une équation a A + b B → produits, les quantités de matière consommées à l’avancement considéré respectent le rapport des coefficients. Cette relation permet de calculer les quantités de réactifs et de produits.',
            parameters: 'n(A), n(B) : quantités de matière en moles ; a, b : coefficients stœchiométriques de l’équation équilibrée.',
            example: 'Pour 2 H2 + O2 → 2 H2O, 2 mol de H2 correspondent à 1 mol de O2 et permettent théoriquement de former 2 mol de H2O.',
            result: 'Le rapport molaire H2 : O2 : H2O est 2 : 1 : 2.'
          },
          {
            title: 'Rendement d’une transformation',
            formula: 'η = (quantité expérimentale obtenue / quantité théorique maximale) × 100 %',
            explanation: 'Le rendement compare la quantité de produit effectivement obtenue à la quantité maximale calculée à partir de la stœchiométrie. Les deux quantités doivent être exprimées avec la même grandeur et dans les mêmes unités.',
            parameters: 'η : rendement en pourcentage ; quantité expérimentale : quantité réellement isolée ou mesurée ; quantité théorique : quantité maximale prévue par l’équation et le réactif limitant.',
            example: 'Si une transformation permet théoriquement d’obtenir 10,0 g de produit et que 8,0 g sont réellement obtenus, η = (8,0 / 10,0) × 100 %.',
            result: 'Le rendement est de 80 %.'
          }
        ],
        example: {
          statement: 'Dans la réaction 2 H2(g) + O2(g) → 2 H2O(l), on dispose de 4 mol de H2 et de 1 mol de O2. Déterminer le réactif limitant et la quantité théorique d’eau formée.',
          calculation: 'L’équation exige 2 mol de H2 pour 1 mol de O2. Pour consommer 1 mol de O2, il faut 2 mol de H2. On dispose de 4 mol de H2 : le dihydrogène est donc en excès et le dioxygène est limitant. Le rapport O2 : H2O vaut 1 : 2.',
          answer: 'Le dioxygène est le réactif limitant. La quantité théorique d’eau formée est de 2 mol. Il reste théoriquement 2 mol de H2 si la réaction est complète et si aucun autre processus ne consomme les réactifs.'
        },
        exercise: {
          question: 'Dans une réaction redox, que signifie une augmentation du nombre d’oxydation d’un élément ?',
          answer: 'Elle correspond à une oxydation, c’est-à-dire à une perte formelle d’électrons.'
        },
        exercises: [
          {
            question: 'Quel est le rôle d’un oxydant dans une réaction redox ?',
            answer: 'Il accepte des électrons et se réduit.'
          },
          {
            question: 'Comment identifie-t-on le réactif limitant ?',
            answer: 'On compare les quantités disponibles aux proportions exigées par les coefficients de l’équation équilibrée.'
          },
          {
            question: 'Quelle quantité doit être utilisée au dénominateur dans le calcul du rendement ?',
            answer: 'La quantité théorique maximale de produit prévue par la stœchiométrie.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 4.3 : Reaction Stoichiometry',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry'
          },
          {
            title: 'OpenStax — Chemistry 2e, 4.4 : Reaction Yields',
            url: 'https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields'
          },
          {
            title: 'OpenStax — Chemistry 2e, 17.1 : Review of Redox Chemistry',
            url: 'https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry'
          },
          {
            title: 'OpenStax — Chemistry 2e, 17.2 : Galvanic Cells',
            url: 'https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells'
          },
          {
            title: 'IUPAC Gold Book — Stoichiometry',
            url: 'https://goldbook.iupac.org/terms/view/S06026'
          }
        ]
      }
    }
  ]
},

{
  id: 'cinetique-chimique',
  title: 'Cinétique chimique',
  note: 'Six chapitres pour comprendre la vitesse des transformations chimiques, les facteurs qui la modifient, les lois de vitesse, les modèles intégrés, l’énergie d’activation, les mécanismes réactionnels et la catalyse. Les lois cinétiques et leurs paramètres doivent être établis dans les conditions expérimentales considérées ; les exemples numériques sont des applications pédagogiques.',
  chapters: [
    {
      id: 'vitesse-reaction-chimique',
      title: 'La vitesse d’une réaction chimique : définition et mesure',
      field: 'Chimie · Cinétique chimique · Mesure de l’évolution temporelle',
      summary: 'Définir la vitesse de réaction, distinguer vitesse moyenne et vitesse instantanée, relier les variations de concentration aux coefficients stœchiométriques et comprendre les méthodes de suivi expérimental.',
      lesson: {
        sections: [
          'La cinétique chimique étudie l’évolution des systèmes réactionnels au cours du temps. Elle cherche notamment à déterminer à quelle vitesse les réactifs sont consommés, à quelle vitesse les produits apparaissent et comment les conditions du milieu influencent ces évolutions. Elle complète la thermodynamique : une transformation peut être thermodynamiquement favorable sans être rapide à l’échelle de temps considérée. La thermodynamique renseigne sur la possibilité et l’état d’équilibre ; la cinétique renseigne sur la vitesse à laquelle le système évolue.',

          'Pour une espèce chimique A, la concentration molaire est notée [A] et s’exprime couramment en mol·L⁻¹. Entre deux instants t1 et t2, la variation de concentration vaut [A]2 − [A]1. La vitesse moyenne de disparition d’un réactif A est définie positivement par −Δ[A]/Δt ; la vitesse moyenne d’apparition d’un produit P est Δ[P]/Δt. Le signe négatif pour un réactif compense la diminution habituelle de sa concentration. Une vitesse volumique de concentration s’exprime par exemple en mol·L⁻¹·s⁻¹.',

          'La vitesse instantanée correspond à la limite de la vitesse moyenne lorsque l’intervalle de temps devient très petit. Mathématiquement, elle est décrite par une dérivée : pour un réactif A, la vitesse de disparition instantanée est −d[A]/dt ; pour un produit P, la vitesse d’apparition est d[P]/dt. Sur un graphique concentration-temps, elle correspond à la valeur opposée de la pente de la tangente pour un réactif, ou à la pente de la tangente pour un produit. La vitesse peut donc varier au cours d’une même transformation.',

          'Pour une équation a A + b B → p P + q Q, la vitesse de réaction normalisée tient compte des coefficients stœchiométriques : v = −(1/a)d[A]/dt = −(1/b)d[B]/dt = (1/p)d[P]/dt = (1/q)d[Q]/dt, dans les conditions où cette définition est applicable. Cette normalisation permet d’attribuer une même vitesse de réaction à chaque espèce, malgré des variations de concentration différentes. Il ne faut donc pas confondre la vitesse de réaction normalisée et la vitesse de disparition d’une espèce particulière.',

          'La vitesse peut être suivie sans mesurer directement toutes les concentrations. Selon le système, on peut mesurer une absorbance si une espèce absorbe la lumière, une pression ou un volume pour une réaction impliquant des gaz, une conductivité si les ions évoluent, un pH dans certains systèmes acido-basiques, ou prélever des échantillons à des instants déterminés puis les analyser. Chaque méthode nécessite une relation établie entre le signal mesuré et la quantité de l’espèce suivie. Les conditions expérimentales, notamment le volume, la température et le mode de prélèvement, doivent être contrôlées.',

          'Une mesure expérimentale fournit des données qui comportent une incertitude. La détermination d’une pente sur un graphique dépend de la qualité des mesures et de l’intervalle choisi. Une pente calculée entre deux points donne une vitesse moyenne ; une tangente locale estime une vitesse instantanée. Il faut préciser l’espèce suivie, le signe retenu, l’unité et, lorsque cela est nécessaire, la normalisation stœchiométrique.'
        ],
        example: {
          statement: 'Pour une réaction A → P, la concentration de A passe de 0,80 mol·L⁻¹ à 0,50 mol·L⁻¹ en 30 s. Calculer la vitesse moyenne de disparition de A.',
          calculation: 'v_moy = −Δ[A]/Δt. La variation est Δ[A] = 0,50 − 0,80 = −0,30 mol·L⁻¹. Donc v_moy = −(−0,30)/30 = 0,010 mol·L⁻¹·s⁻¹.',
          answer: 'La vitesse moyenne de disparition de A sur cet intervalle est 1,0 × 10⁻² mol·L⁻¹·s⁻¹. Il s’agit d’une moyenne sur 30 s, et non nécessairement de la vitesse instantanée à un instant précis.'
        },
        exercise: {
          question: 'Pourquoi la vitesse de disparition d’un réactif est-elle généralement écrite avec un signe négatif ?',
          answer: 'Parce que la concentration du réactif diminue au cours du temps. Sa dérivée est donc généralement négative ; le signe moins permet de définir une vitesse de disparition positive.'
        },
        exercises: [
          {
            question: 'Une concentration de produit passe de 0,10 à 0,34 mol·L⁻¹ en 12 s. Quelle est sa vitesse moyenne d’apparition ?',
            answer: 'v_moy = (0,34 − 0,10)/12 = 0,020 mol·L⁻¹·s⁻¹.'
          },
          {
            question: 'Pour 2 A → B, quelle relation relie la vitesse de réaction v à la vitesse de disparition de A ?',
            answer: 'v = −(1/2)d[A]/dt. La vitesse de disparition de A vaut donc −d[A]/dt = 2v.'
          },
          {
            question: 'Citer deux grandeurs physiques pouvant servir au suivi cinétique d’une réaction.',
            answer: 'Par exemple, l’absorbance, la pression, le volume gazeux, la conductivité ou le pH, à condition que la grandeur mesurée soit reliée à l’avancement ou à la concentration d’une espèce.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 12.1 Chemical Reaction Rates',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates'
          },
          {
            title: 'IUPAC Gold Book — Rate of reaction',
            url: 'https://goldbook.iupac.org/terms/view/R05156'
          }
        ]
      }
    },

    {
      id: 'facteurs-cinetiques',
      title: 'Les facteurs qui influencent la vitesse de réaction',
      field: 'Chimie · Cinétique chimique · Conditions expérimentales',
      summary: 'Analyser l’influence de la nature des réactifs, de la concentration, de la température, de la surface de contact, de la pression pour les gaz et de la présence d’un catalyseur.',
      lesson: {
        sections: [
          'La vitesse d’une réaction dépend de la nature chimique des espèces qui réagissent. Des substances différentes ne présentent pas les mêmes liaisons, structures électroniques, états physiques ni possibilités de transformation. Même lorsque deux réactions ont des équations qui semblent comparables, leurs vitesses peuvent être très différentes. Il n’existe donc pas de règle unique permettant de déduire la rapidité d’une réaction à partir de sa seule équation-bilan.',

          'La concentration d’un réactif peut influencer la fréquence des rencontres entre les espèces réactives. Dans de nombreuses réactions homogènes, une augmentation de concentration entraîne une augmentation de vitesse. Cependant, la relation quantitative n’est pas universelle : elle est décrite par la loi de vitesse propre à la réaction et doit être déterminée expérimentalement. Une espèce présente dans l’équation-bilan peut même ne pas apparaître dans la loi de vitesse observée, selon le mécanisme réactionnel.',

          'Pour les réactions entre phases différentes, la surface de contact peut être déterminante. Un solide divisé en petites particules présente généralement une surface exposée plus grande qu’un même solide regroupé en un seul morceau. Si la réaction se déroule à l’interface entre le solide et un liquide ou un gaz, cette augmentation de surface accessible peut accélérer la transformation. Cet effet dépend du système et ne doit pas être confondu avec une modification de la nature chimique du solide.',

          'Une augmentation de température accélère souvent les réactions. À température plus élevée, l’énergie cinétique moyenne des particules augmente et une fraction plus importante des collisions peut atteindre l’énergie nécessaire pour franchir la barrière d’activation. L’ampleur de l’effet dépend de l’énergie d’activation et du domaine de température. La règle approximative selon laquelle une hausse de 10 °C peut multiplier certaines vitesses par environ 2 n’est qu’un ordre de grandeur pédagogique : elle ne constitue pas une loi universelle.',

          'Pour les réactions impliquant des gaz, une augmentation de pression obtenue en diminuant le volume peut augmenter les concentrations molaires des gaz et modifier la vitesse. Il faut toutefois distinguer pression totale et pression partielle de chaque réactif. L’effet cinétique dépend de la loi de vitesse et des conditions de l’expérience ; une pression exercée sans modification des concentrations pertinentes n’a pas nécessairement le même effet.',

          'Un catalyseur modifie la vitesse en offrant un chemin réactionnel différent. Il intervient dans le mécanisme, puis est régénéré au cours du cycle catalytique idéal ; il n’est pas consommé globalement selon le bilan net. Un catalyseur peut accélérer l’établissement de l’équilibre en accélérant les transformations directe et inverse, mais il ne modifie pas la constante d’équilibre ni la composition de l’équilibre à température donnée.'
        ],
        example: {
          statement: 'On compare deux échantillons de même masse d’un solide réactif : le premier est constitué d’un seul morceau et le second de petits grains. Pourquoi le second peut-il réagir plus rapidement avec une solution ?',
          calculation: 'À masse identique, la division du solide en grains augmente généralement la surface totale accessible au liquide. La réaction hétérogène peut alors se produire sur une interface plus étendue.',
          answer: 'Le solide divisé peut réagir plus rapidement parce que sa surface de contact avec la solution est plus grande. Cette explication suppose que la surface accessible constitue bien un facteur limitant dans le système étudié.'
        },
        exercise: {
          question: 'Pourquoi faut-il éviter de présenter la règle « +10 °C double la vitesse » comme une loi exacte ?',
          answer: 'Parce que l’effet de la température dépend notamment de l’énergie d’activation et du système considéré. Le facteur 2 est une approximation empirique utile dans certains cas, pas une relation universelle.'
        },
        exercises: [
          {
            question: 'Quel est l’effet habituel d’une hausse de concentration sur la vitesse ?',
            answer: 'Elle augmente souvent la vitesse en augmentant la fréquence des rencontres réactives, mais l’effet précis dépend de la loi de vitesse expérimentale.'
          },
          {
            question: 'Pourquoi une poudre peut-elle réagir plus vite qu’un bloc de même solide dans une réaction hétérogène ?',
            answer: 'Parce que la poudre expose généralement une surface totale plus importante au réactif de l’autre phase.'
          },
          {
            question: 'Un catalyseur change-t-il la constante d’équilibre à température constante ?',
            answer: 'Non. Il modifie la vitesse d’accès à l’équilibre, pas la constante d’équilibre.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 12.2 Factors Affecting Reaction Rates',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-2-factors-affecting-reaction-rates'
          },
          {
            title: 'OpenStax — Chemistry 2e, 12.7 Catalysis',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-7-catalysis'
          },
          {
            title: 'IUPAC Gold Book — Catalyst',
            url: 'https://goldbook.iupac.org/terms/view/C00876'
          }
        ]
      }
    },

    {
      id: 'lois-vitesse-ordres-reaction',
      title: 'Les lois de vitesse et les ordres de réaction',
      field: 'Chimie · Cinétique chimique · Modélisation expérimentale',
      summary: 'Établir une loi de vitesse, déterminer les ordres partiels et global, calculer une constante de vitesse et comprendre pourquoi les coefficients stœchiométriques ne donnent généralement pas les exposants cinétiques.',
      lesson: {
        sections: [
          'Une loi de vitesse, également appelée loi cinétique différentielle, exprime la vitesse d’une réaction en fonction des concentrations des espèces et de paramètres constants dans les conditions étudiées. Pour une réaction faisant intervenir A et B, une forme courante est v = k[A]^m[B]^n. La constante k est appelée constante de vitesse ; m et n sont les ordres partiels par rapport à A et B. L’ordre global est la somme m + n lorsque cette loi est un produit de puissances de ce type.',

          'Les ordres de réaction sont des paramètres expérimentaux. Ils peuvent être entiers, nuls, fractionnaires ou, dans certains modèles, négatifs. Ils ne doivent pas être assimilés automatiquement aux coefficients de l’équation-bilan. Pour une réaction globale, écrire a A + b B → produits ne permet généralement pas de conclure que v = k[A]^a[B]^b. Cette déduction directe est justifiée pour une étape élémentaire selon sa molecularité, mais pas pour une réaction globale dont le mécanisme comporte plusieurs étapes.',

          'La méthode des vitesses initiales consiste à mesurer la vitesse au début de plusieurs expériences où les concentrations initiales sont modifiées de manière contrôlée. On compare deux expériences dans lesquelles une seule concentration varie, les autres conditions étant maintenues constantes. Si doubler [A] multiplie la vitesse par 4, alors l’ordre partiel en A vaut 2 dans le domaine étudié. Si doubler [B] ne change pas la vitesse, l’ordre partiel en B vaut 0. Des séries de mesures permettent ainsi de déterminer les exposants.',

          'Une fois les ordres déterminés, la constante k se calcule en isolant k dans la loi de vitesse. Ses unités dépendent de l’ordre global et des unités utilisées pour la vitesse et les concentrations. Si la vitesse s’exprime en mol·L⁻¹·s⁻¹ et si l’ordre global est p, les unités de k sont (mol·L⁻¹)^(1−p)·s⁻¹. Ainsi, pour un ordre global 1, k s’exprime en s⁻¹ ; pour un ordre global 2, en L·mol⁻¹·s⁻¹.',

          'La loi de vitesse est valable dans le domaine expérimental où elle a été établie. Une variation importante de température, de solvant, de pH, de force ionique ou de mécanisme peut changer la constante apparente ou la forme de la loi. Il faut donc toujours préciser les conditions expérimentales et ne pas traiter k comme une constante universelle indépendante du milieu.',

          'Les données cinétiques peuvent être analysées par comparaison des vitesses initiales, par ajustement de modèles intégrés ou par régression de mesures adaptées. Une bonne démarche vérifie la cohérence des unités, la reproductibilité des mesures et la compatibilité du modèle avec l’ensemble des données, plutôt que de retenir une loi sur la base d’un seul couple de mesures.'
        ],
        example: {
          statement: 'Une réaction suit la loi v = k[A]^m[B]^n. Lorsque [A] est doublée à [B] constante, la vitesse est multipliée par 4. Lorsque [B] est doublée à [A] constante, la vitesse est multipliée par 2. Déterminer m, n et l’ordre global.',
          calculation: 'À [B] constante, 4 = 2^m, donc m = 2. À [A] constante, 2 = 2^n, donc n = 1. L’ordre global vaut m + n = 2 + 1 = 3.',
          answer: 'La loi est v = k[A]^2[B]. L’ordre partiel en A est 2, celui en B est 1 et l’ordre global est 3. Cette conclusion repose sur les variations expérimentales décrites.'
        },
        exercise: {
          question: 'Pourquoi ne peut-on généralement pas lire les ordres de réaction directement dans l’équation-bilan ?',
          answer: 'Parce que l’équation-bilan décrit le bilan global et non nécessairement les étapes élémentaires du mécanisme. Les ordres de la loi de vitesse doivent donc être déterminés expérimentalement.'
        },
        exercises: [
          {
            question: 'Pour v = k[A]^2, quel est l’ordre global ?',
            answer: 'L’ordre global est 2.'
          },
          {
            question: 'Si doubler [A] multiplie la vitesse par 8, quel ordre partiel cela indique-t-il pour A ?',
            answer: '8 = 2^m, donc m = 3.'
          },
          {
            question: 'Quelle est l’unité de k pour une loi de vitesse d’ordre global 1 si la vitesse est en mol·L⁻¹·s⁻¹ ?',
            answer: 'L’unité de k est s⁻¹.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 12.3 Rate Laws',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws'
          },
          {
            title: 'IUPAC Gold Book — Rate law',
            url: 'https://goldbook.iupac.org/terms/view/R05141'
          }
        ]
      }
    },

    {
      id: 'lois-integrees-demi-vie',
      title: 'Les lois intégrées et le temps de demi-réaction',
      field: 'Chimie · Cinétique chimique · Évolution des concentrations avec le temps',
      summary: 'Relier concentration et durée, reconnaître les cinétiques d’ordre 0, 1 et 2, utiliser les représentations linéaires et calculer un temps de demi-réaction.',
      lesson: {
        sections: [
          'Une loi de vitesse différentielle relie la vitesse instantanée aux concentrations. Une loi intégrée relie directement la concentration d’un réactif au temps écoulé. Elle est obtenue en intégrant mathématiquement la loi différentielle, avec une condition initiale. Les expressions intégrées dépendent de l’ordre cinétique et du modèle considéré ; les formes simples présentées ici concernent des réactions dont la vitesse dépend d’un seul réactif A selon un ordre 0, 1 ou 2.',

          'Pour une cinétique d’ordre 0, la loi différentielle est −d[A]/dt = k et la loi intégrée est [A]t = [A]0 − kt. La représentation de [A] en fonction du temps est une droite de pente −k. Cette situation peut apparaître dans des conditions particulières, par exemple lorsque certains sites actifs sont saturés ; elle ne doit pas être extrapolée au-delà du domaine où le modèle est valable.',

          'Pour une cinétique d’ordre 1, la loi différentielle est −d[A]/dt = k[A]. La loi intégrée est ln([A]t) = ln([A]0) − kt, ou [A]t = [A]0 e^(−kt). La représentation de ln([A]) en fonction du temps est une droite de pente −k. La constante de vitesse a pour unité s⁻¹ si le temps est exprimé en secondes. Le temps de demi-réaction ne dépend alors pas de la concentration initiale.',

          'Pour une cinétique d’ordre 2 portant sur un seul réactif A, la loi différentielle est −d[A]/dt = k[A]^2 et la loi intégrée est 1/[A]t = 1/[A]0 + kt. La représentation de 1/[A] en fonction du temps est une droite de pente k. Dans ce cas simple, l’unité de k est L·mol⁻¹·s⁻¹ si les concentrations sont en mol·L⁻¹ et le temps en secondes. D’autres lois d’ordre 2, notamment celles faisant intervenir deux réactifs distincts, peuvent avoir des formes intégrées différentes.',

          'Le temps de demi-réaction t1/2 est la durée nécessaire pour que la concentration du réactif considéré atteigne la moitié de sa valeur initiale, dans le modèle étudié. Pour l’ordre 0, t1/2 = [A]0/(2k). Pour l’ordre 1, t1/2 = ln(2)/k. Pour l’ordre 2 simple, t1/2 = 1/(k[A]0). Ces relations montrent que la dépendance à la concentration initiale varie selon l’ordre : elle est directe pour l’ordre 0, absente pour l’ordre 1 et inverse pour l’ordre 2 simple.',

          'Pour identifier un ordre à partir de données concentration-temps, on peut examiner quelle transformation des données donne la meilleure relation linéaire : [A] en fonction du temps pour l’ordre 0, ln([A]) pour l’ordre 1, ou 1/[A] pour l’ordre 2 simple. En pratique, il faut examiner la qualité de l’ajustement et les incertitudes, et ne pas décider uniquement à partir d’un graphique visuellement approximatif.'
        ],
        example: {
          statement: 'Une réaction suit une cinétique d’ordre 1 avec k = 0,020 s⁻¹. Calculer son temps de demi-réaction.',
          calculation: 'Pour un ordre 1, t1/2 = ln(2)/k. Donc t1/2 = 0,693/0,020 s⁻¹ = 34,65 s.',
          answer: 'Le temps de demi-réaction vaut environ 34,7 s. Dans le modèle d’ordre 1, cette durée ne dépend pas de la concentration initiale.'
        },
        exercise: {
          question: 'Quelle représentation graphique permet de tester une cinétique d’ordre 1 ?',
          answer: 'La représentation de ln([A]) en fonction du temps. Le modèle prévoit une droite de pente −k.'
        },
        exercises: [
          {
            question: 'Pour une cinétique d’ordre 0, quelle est l’expression de [A] en fonction du temps ?',
            answer: '[A]t = [A]0 − kt.'
          },
          {
            question: 'Pour une cinétique d’ordre 1, quelle est l’expression du temps de demi-réaction ?',
            answer: 't1/2 = ln(2)/k.'
          },
          {
            question: 'Pour une cinétique d’ordre 2 simple, quelle grandeur doit être représentée en fonction du temps pour obtenir une droite ?',
            answer: 'La grandeur 1/[A] doit être représentée en fonction du temps.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 12.4 Integrated Rate Laws',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws'
          },
          {
            title: 'OpenStax — Chemistry 2e, 12 Key Terms',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-key-terms'
          }
        ]
      }
    },

    {
      id: 'collisions-energie-activation-arrhenius',
      title: 'Théorie des collisions, énergie d’activation et loi d’Arrhenius',
      field: 'Chimie · Cinétique chimique · Interprétation énergétique des réactions',
      summary: 'Expliquer les collisions efficaces, l’orientation des réactifs, l’état de transition, l’énergie d’activation et la dépendance de la constante de vitesse à la température.',
      lesson: {
        sections: [
          'La théorie des collisions propose un modèle microscopique pour comprendre la vitesse de nombreuses réactions. Les entités réactives doivent se rencontrer, mais toute collision ne conduit pas à une transformation chimique. Pour être efficace, une collision doit généralement présenter une orientation compatible avec la réorganisation des liaisons et une énergie suffisante pour franchir la barrière énergétique associée au processus.',

          'L’énergie d’activation Ea est la barrière énergétique caractéristique du chemin réactionnel considéré. Dans un diagramme d’énergie en fonction de l’avancement de la réaction, elle correspond à la différence entre le niveau énergétique des réactifs et celui de l’état de transition pour le sens direct. L’état de transition est une configuration très fugace située au voisinage du sommet de la barrière ; il ne doit pas être confondu avec un intermédiaire réactionnel, qui correspond à une espèce située dans un minimum local d’énergie et pouvant intervenir dans les étapes suivantes.',

          'À température plus élevée, la distribution des énergies moléculaires est modifiée et une fraction plus grande des particules possède une énergie suffisante pour franchir une barrière donnée. Cela explique pourquoi la constante de vitesse augmente généralement avec la température pour de nombreuses réactions. La fréquence et l’orientation des collisions interviennent également dans la probabilité qu’une rencontre soit efficace.',

          'La loi d’Arrhenius s’écrit k = A exp(−Ea/(RT)). Dans cette expression, k est la constante de vitesse, A le facteur préexponentiel, Ea l’énergie d’activation en J·mol⁻¹, R la constante des gaz parfaits égale à 8,314 J·mol⁻¹·K⁻¹ et T la température absolue en kelvins. Le facteur A regroupe notamment des contributions liées à la fréquence des rencontres et à leur orientation dans le modèle considéré. Les unités de A sont les mêmes que celles de k.',

          'La forme logarithmique est ln(k) = ln(A) − Ea/(RT). Si le comportement suit la loi d’Arrhenius sur l’intervalle de température étudié, le graphique de ln(k) en fonction de 1/T est approximativement une droite de pente −Ea/R et d’ordonnée à l’origine ln(A). La pente permet donc d’estimer Ea à partir de mesures de k à différentes températures. Une estimation à deux températures est possible avec ln(k2/k1) = (Ea/R)(1/T1 − 1/T2), en utilisant les températures en kelvins.',

          'La loi d’Arrhenius est un modèle largement utilisé, mais son application suppose que le mécanisme et le régime cinétique restent suffisamment comparables sur le domaine étudié. Des changements de mécanisme, des équilibres préalables, des limitations de transport ou des phénomènes complexes peuvent conduire à des écarts à une droite d’Arrhenius. Une énergie d’activation apparente obtenue par ajustement ne doit donc pas toujours être interprétée comme une barrière élémentaire unique.'
        ],
        example: {
          statement: 'Une réaction suit une loi d’Arrhenius avec A = 1,0 × 10¹⁰ s⁻¹, Ea = 50 000 J·mol⁻¹ et T = 300 K. Estimer k avec R = 8,314 J·mol⁻¹·K⁻¹.',
          calculation: 'k = A exp(−Ea/(RT)) = 1,0 × 10¹⁰ × exp(−50 000/(8,314 × 300)). Le rapport Ea/(RT) vaut environ 20,05. Ainsi k ≈ 1,0 × 10¹⁰ × exp(−20,05) ≈ 1,96 × 10¹ s⁻¹.',
          answer: 'La constante de vitesse estimée est k ≈ 19,6 s⁻¹. Le résultat dépend des valeurs supposées de A et Ea et de la validité du modèle d’Arrhenius à 300 K.'
        },
        exercise: {
          question: 'Pourquoi toutes les collisions entre réactifs ne sont-elles pas efficaces ?',
          answer: 'Parce qu’une collision doit généralement avoir une énergie suffisante pour franchir la barrière d’activation et une orientation compatible avec la transformation des liaisons.'
        },
        exercises: [
          {
            question: 'Quelle température faut-il utiliser dans la loi d’Arrhenius ?',
            answer: 'La température absolue en kelvins.'
          },
          {
            question: 'Quelle est la pente du graphique ln(k) en fonction de 1/T dans le modèle d’Arrhenius ?',
            answer: 'La pente vaut −Ea/R.'
          },
          {
            question: 'Que représente l’état de transition ?',
            answer: 'Une configuration très fugace située au voisinage du sommet de la barrière énergétique du chemin réactionnel.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 12.5 Collision Theory',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory'
          },
          {
            title: 'IUPAC Gold Book — Activation',
            url: 'https://goldbook.iupac.org/terms/view/A00093'
          }
        ]
      }
    },

    {
      id: 'mecanismes-reactionnels-catalyse',
      title: 'Mécanismes réactionnels et catalyse',
      field: 'Chimie · Cinétique chimique · Étapes élémentaires et chemins réactionnels',
      summary: 'Décrire un mécanisme en étapes élémentaires, distinguer intermédiaire et catalyseur, utiliser la molecularité avec prudence et expliquer les catalyses homogène et hétérogène.',
      lesson: {
        sections: [
          'Une équation-bilan indique les réactifs et les produits nets d’une transformation, mais elle ne décrit pas nécessairement le chemin suivi à l’échelle moléculaire. Un mécanisme réactionnel propose une succession d’étapes élémentaires dont la somme redonne l’équation globale. Chaque étape élémentaire représente un événement microscopique modélisé séparément. Un mécanisme proposé doit être compatible avec les observations expérimentales, notamment la loi de vitesse, mais aussi avec d’autres données disponibles.',

          'La molecularité d’une étape élémentaire est le nombre d’entités réactives qui y participent. Une étape unimoléculaire met en jeu une entité réactive ; une étape bimoléculaire en met en jeu deux ; une étape trimoléculaire en met en jeu trois et est moins fréquente. Pour une étape élémentaire, la loi de vitesse peut être déduite de son écriture selon les règles de la cinétique élémentaire. Cette règle ne s’applique pas automatiquement à l’équation-bilan d’une réaction globale.',

          'Un intermédiaire réactionnel est formé lors d’une étape puis consommé lors d’une étape ultérieure. Il apparaît donc dans le mécanisme détaillé, mais s’élimine lorsqu’on additionne les étapes pour retrouver le bilan global. Un catalyseur intervient également dans le mécanisme, mais il est régénéré au cours du cycle global idéal. Il ne figure donc pas dans l’équation-bilan nette, même s’il peut être consommé dans une étape puis reformé dans une autre. Il faut distinguer le catalyseur de l’intermédiaire à partir de son rôle dans le cycle complet.',

          'Dans un mécanisme à plusieurs étapes, certaines étapes peuvent être beaucoup plus rapides que d’autres. Une étape lente peut limiter le débit global du processus ; on parle alors d’étape déterminante de la vitesse dans le cadre du modèle considéré. Toutefois, l’identification de l’étape lente ne suffit pas toujours à écrire directement la loi de vitesse globale : des prééquilibres, des intermédiaires ou des approximations d’état quasi stationnaire peuvent intervenir. La loi proposée doit être cohérente avec les mesures.',

          'La catalyse homogène se produit lorsque le catalyseur et les réactifs appartiennent à la même phase. La catalyse hétérogène met en jeu un catalyseur dans une phase différente ; la réaction peut alors se dérouler à sa surface. Dans ce dernier cas, l’adsorption des réactifs, les transformations de surface et la désorption des produits peuvent participer au mécanisme. La surface accessible et l’état du catalyseur peuvent influencer l’activité observée.',

          'Un catalyseur fournit un chemin réactionnel alternatif dont la barrière cinétique pertinente est généralement plus faible que celle du chemin non catalysé. Il augmente ainsi la vitesse d’établissement de l’équilibre, sans modifier la variation d’énergie libre globale de la réaction ni la constante d’équilibre à température fixée. Il accélère les processus direct et inverse ; il ne déplace donc pas, à lui seul, la position de l’équilibre. L’activité catalytique peut être affectée par la température, la composition du milieu, l’empoisonnement ou la désactivation du catalyseur.'
        ],
        example: {
          statement: 'On propose le mécanisme suivant : étape 1, A + B → X ; étape 2, X + C → A + D. Identifier l’intermédiaire et écrire le bilan global.',
          calculation: 'L’espèce X est produite à l’étape 1 puis consommée à l’étape 2 : c’est un intermédiaire. L’espèce A est consommée à la première étape puis régénérée à la seconde. En additionnant les deux étapes et en simplifiant X et A des deux côtés, il reste B + C → D.',
          answer: 'X est l’intermédiaire réactionnel. A est régénérée dans le bilan global et joue ici le rôle d’une espèce intervenant dans le cycle, ce qui est compatible avec un rôle catalytique dans ce mécanisme schématique. Le bilan net est B + C → D.'
        },
        exercise: {
          question: 'Quelle différence essentielle distingue un intermédiaire réactionnel d’un catalyseur dans un mécanisme ?',
          answer: 'Un intermédiaire est formé puis consommé au cours des étapes. Un catalyseur participe au mécanisme mais est régénéré dans le bilan global du cycle catalytique.'
        },
        exercises: [
          {
            question: 'Une étape élémentaire A + B → produits est de quelle molecularité ?',
            answer: 'Elle est bimoléculaire, car deux entités réactives participent à cette étape.'
          },
          {
            question: 'Une espèce apparaît dans une étape puis disparaît dans la suivante. Comment la nomme-t-on ?',
            answer: 'Un intermédiaire réactionnel.'
          },
          {
            question: 'Un catalyseur modifie-t-il la position de l’équilibre chimique à température constante ?',
            answer: 'Non. Il accélère l’établissement de l’équilibre sans modifier la constante d’équilibre ni la composition de l’état d’équilibre.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Chemistry 2e, 12.6 Reaction Mechanisms',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-6-reaction-mechanisms'
          },
          {
            title: 'OpenStax — Chemistry 2e, 12.7 Catalysis',
            url: 'https://openstax.org/books/chemistry-2e/pages/12-7-catalysis'
          },
          {
            title: 'IUPAC Gold Book — Rate law',
            url: 'https://goldbook.iupac.org/terms/view/R05141'
          }
        ]
      }
    }
  ]
},

]

