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
    id: 'chimie-organique',
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


];
