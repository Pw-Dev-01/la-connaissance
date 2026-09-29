window.courseCatalog = [
  {
    id: 'economie',
    title: 'Économie',
    note: 'Des choix sous contrainte aux indicateurs de l’activité économique.',
    chapters: [
      {
        id: 'rareté-choix',
        title: 'Rareté, choix et coût d’opportunité',
        field: 'Microéconomie · bases',
        summary: 'Ressources limitées, arbitrages individuels et contrainte budgétaire.',
        lesson: {
          sections: [
            'L’économie étudie les choix que les personnes, les entreprises et les sociétés font face à des ressources limitées. La rareté signifie que les ressources disponibles ne suffisent pas à satisfaire tous les usages souhaités ; elle concerne aussi le temps et ne se confond pas avec la pauvreté.',
            'Choisir une option signifie renoncer à d’autres options. Le coût d’opportunité est la valeur de la meilleure solution à laquelle on renonce, pas nécessairement une dépense d’argent. Une contrainte budgétaire décrit les combinaisons de biens qu’un budget permet d’acheter à des prix donnés.',
            'Les calculs ci-dessous reprennent l’exemple pédagogique d’OpenStax : un budget de 10 dollars, des burgers à 2 dollars et des tickets de bus à 0,50 dollar. Ces montants sont les données de cet exercice, pas des prix actuels.'
          ],
          formula: { label: 'CONTRAINTE BUDGÉTAIRE', text: 'B = p₁q₁ + p₂q₂' },
          equationDetails: [
            {
              title: 'Contrainte budgétaire à deux biens',
              formula: 'B = p₁q₁ + p₂q₂',
              explanation: 'Le budget est entièrement dépensé en deux biens. Les paniers dont le coût est inférieur au budget sont aussi accessibles ; l’égalité décrit la frontière de la contrainte.',
              parameters: 'B : budget disponible (monnaie) ; p₁, p₂ : prix unitaires (monnaie par unité) ; q₁, q₂ : quantités achetées (unités). Chaque produit prix × quantité s’exprime en monnaie.',
              example: 'Avec B = 10 $, p₁ = 2 $ par burger, p₂ = 0,50 $ par ticket et q₂ = 12 tickets : q₁ = (10 − 0,50 × 12)/2.',
              result: 'q₁ = 2 burgers.'
            },
            {
              title: 'Coût d’opportunité le long du budget',
              formula: 'Δq₂/Δq₁ = −p₁/p₂',
              explanation: 'À budget et prix constants, la pente négative de la contrainte donne le nombre d’unités du bien 2 auxquelles il faut renoncer pour acheter une unité supplémentaire du bien 1. C’est le coût d’opportunité dans cette contrainte, pas une règle générale pour toutes les décisions.',
              parameters: 'Δq₁, Δq₂ : variations des quantités ; p₁, p₂ : prix unitaires ; le signe négatif indique le compromis entre les deux biens.',
              example: 'Pour un burger à 2 $ et un ticket à 0,50 $, le nombre de tickets sacrifiés par burger supplémentaire vaut p₁/p₂ = 2/0,50.',
              result: 'Le coût d’opportunité budgétaire d’un burger est de 4 tickets de bus.'
            }
          ],
          example: {
            statement: 'Avec 10 $, combien de burgers peut-on acheter si l’on achète d’abord 12 tickets de bus à 0,50 $ chacun et que chaque burger coûte 2 $ ?',
            calculation: 'Les 12 tickets coûtent 12 × 0,50 = 6 $. Il reste 10 − 6 = 4 $, donc 4/2 = 2 burgers.',
            answer: 'Le budget permet d’acheter 2 burgers et 12 tickets.'
          },
          exercise: {
            question: 'Avec le même budget et les mêmes prix, combien de tickets peut-on acheter si l’on prend 3 burgers ?',
            answer: 'Les burgers coûtent 3 × 2 = 6 $. Il reste 4 $, soit 4/0,50 = 8 tickets.'
          },
          sources: [
            { title: 'OpenStax Principles of Economics 3e — What Is Economics, and Why Is It Important?', url: 'https://openstax.org/books/principles-economics-3e/pages/1-1-what-is-economics-and-why-is-it-important' },
            { title: 'OpenStax Principles of Economics 3e — How Individuals Make Choices Based on Their Budget Constraint', url: 'https://openstax.org/books/principles-economics-3e/pages/2-1-how-individuals-make-choices-based-on-their-budget-constraint' },
            { title: 'OpenStax Principles of Economics 3e — The Production Possibilities Frontier and Social Choices', url: 'https://openstax.org/books/principles-economics-3e/pages/2-2-the-production-possibilities-frontier-and-social-choices' }
          ]
        }
      },
      {
        id: 'offre-demande',
        title: 'Offre, demande et équilibre',
        field: 'Microéconomie · bases',
        summary: 'Prix, quantités demandées et offertes, équilibre et déséquilibres de marché.',
        lesson: {
          sections: [
            'La demande décrit la relation entre les prix possibles et les quantités que les acheteurs souhaitent et peuvent acheter, toutes choses pertinentes égales par ailleurs. L’offre décrit de même les quantités que les producteurs souhaitent vendre. Une variation du prix provoque un déplacement le long d’une courbe ; un changement d’un autre déterminant peut déplacer la courbe elle-même.',
            'Dans le modèle concurrentiel élémentaire, le prix d’équilibre est celui auquel la quantité demandée égale la quantité offerte. Au-dessus de ce prix apparaît un excès d’offre dans le modèle ; en dessous, un excès de demande. Cette représentation simplifie des marchés réels qui peuvent comporter frictions, pouvoir de marché et ajustements lents.',
            'Les fonctions linéaires ci-dessous sont un exemple construit pour apprendre à résoudre l’équilibre ; leurs nombres ne décrivent aucun marché observé.'
          ],
          formula: { label: 'CONDITION D’ÉQUILIBRE', text: 'Qᵈ(P*) = Qˢ(P*)' },
          equationDetails: [
            {
              title: 'Équilibre de marché',
              formula: 'Qᵈ(P*) = Qˢ(P*)',
              explanation: 'Le prix d’équilibre P* égalise la quantité demandée et la quantité offerte dans ce modèle de marché. Ce résultat décrit un équilibre du modèle, pas nécessairement un prix constaté ni une situation socialement optimale.',
              parameters: 'Qᵈ : quantité demandée par période ; Qˢ : quantité offerte pour la même période ; P* : prix d’équilibre, exprimé dans la même monnaie et unité que les fonctions d’offre et de demande.',
              example: 'Exemple pédagogique : Qᵈ = 100 − 2P et Qˢ = 20 + 2P, avec P en euros par unité et Q en unités par période. À l’équilibre, 100 − 2P = 20 + 2P.',
              result: 'P* = 20 €/unité et Q* = 60 unités par période.'
            },
            {
              title: 'Paniers représentés par les fonctions linéaires',
              formula: 'Qᵈ(P) = 100 − 2P ; Qˢ(P) = 20 + 2P',
              explanation: 'Dans cet exemple artificiel, la demande baisse avec le prix et l’offre augmente avec le prix. Les coefficients traduisent les pentes de ces fonctions dans les unités choisies.',
              parameters: 'P : prix en euros par unité ; Qᵈ, Qˢ : quantités par période ; les constantes 100 et 20 ainsi que les coefficients 2 sont propres à cet exemple et ne sont pas des estimations empiriques.',
              example: 'Au prix P = 20 €/unité : Qᵈ = 100 − 40 et Qˢ = 20 + 40.',
              result: 'Les deux quantités valent 60 unités par période, ce qui confirme l’équilibre calculé.'
            }
          ],
          example: {
            statement: 'Avec Qᵈ = 100 − 2P et Qˢ = 20 + 2P, trouver le prix et la quantité d’équilibre.',
            calculation: 'À l’équilibre, 100 − 2P = 20 + 2P, donc 80 = 4P et P = 20. En remplaçant : Q = 100 − 2 × 20 = 60.',
            answer: 'L’équilibre illustratif est P* = 20 €/unité et Q* = 60 unités par période.'
          },
          exercise: {
            question: 'Dans un autre exemple linéaire, Qᵈ = 120 − 4P et Qˢ = 20 + P. Trouver l’équilibre.',
            answer: '120 − 4P = 20 + P, donc P = 20. La quantité d’équilibre vaut Q = 20 + 20 = 40 unités par période.'
          },
          sources: [
            { title: 'OpenStax Principles of Economics 3e — Demand, Supply, and Equilibrium in Markets for Goods and Services', url: 'https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services' },
            { title: 'OpenStax Principles of Economics 3e — Shifts in Demand and Supply for Goods and Services', url: 'https://openstax.org/books/principles-economics-3e/pages/3-2-shifts-in-demand-and-supply-for-goods-and-services' }
          ]
        }
      },
      {
        id: 'elasticite-prix',
        title: 'Élasticité-prix',
        field: 'Microéconomie · intermédiaire',
        summary: 'Mesure de la réaction des quantités demandées ou offertes à une variation de prix.',
        lesson: {
          sections: [
            'L’élasticité-prix mesure une variation relative de quantité rapportée à une variation relative de prix. Pour la demande, elle est habituellement négative car prix et quantité demandée évoluent en sens opposés ; de nombreux cours présentent sa valeur absolue pour classer la demande comme élastique ou inélastique.',
            'Pour comparer deux observations, la méthode du point milieu utilise les moyennes des prix et des quantités comme base. Elle donne la même valeur absolue lorsque l’on parcourt les deux points dans un sens ou dans l’autre. L’élasticité n’est pas la pente : elle est sans unité et dépend de la position sur la courbe.',
            'L’exemple numérique reprend les points de demande de l’exemple OpenStax, avec prix en dollars et quantités en unités du tableau.'
          ],
          formula: { label: 'ÉLASTICITÉ-PRIX DE LA DEMANDE', text: 'εᵈ = (%ΔQᵈ)/(%ΔP)' },
          equationDetails: [
            {
              title: 'Élasticité-prix, méthode du point milieu',
              formula: 'εᵈ = [(Q₂ − Q₁)/Q̄] / [(P₂ − P₁)/P̄]',
              explanation: 'Le quotient des variations relatives mesure la sensibilité de la quantité à une variation de prix. Pour la demande, le signe usuel est négatif ; l’analyse pédagogique classe souvent l’élasticité selon sa valeur absolue.',
              parameters: 'εᵈ : élasticité-prix de la demande, sans unité ; Q₁, Q₂ : quantités initiale et finale ; Q̄ = (Q₁ + Q₂)/2 ; P₁, P₂ : prix initial et final ; P̄ = (P₁ + P₂)/2. Le résultat signé est négatif si la demande décroît avec le prix.',
              example: 'OpenStax donne P₁ = 70 $, P₂ = 60 $, Q₁ = 2800, Q₂ = 3000. Alors Q̄ = 2900, P̄ = 65, εᵈ = (200/2900)/(−10/65).',
              result: 'εᵈ ≈ −0,45 ; sa valeur absolue vaut 0,45, donc la demande est inélastique sur cet intervalle.'
            }
          ],
          example: {
            statement: 'Entre 70 $ et 60 $, la quantité demandée passe de 2800 à 3000 unités. Calculer l’élasticité avec la méthode du point milieu.',
            calculation: 'Variation relative de Q : 200/2900 ≈ 6,90 %. Variation relative de P : −10/65 ≈ −15,38 %. Leur quotient vaut environ −0,448.',
            answer: 'L’élasticité signée vaut environ −0,45 ; en valeur absolue, 0,45 (< 1), la demande est inélastique sur cet intervalle.'
          },
          exercise: {
            question: 'Une quantité passe de 100 à 120 lorsque le prix passe de 10 € à 12 €. Calculer l’élasticité-point-milieu signée.',
            answer: 'Q̄ = 110 et P̄ = 11. Variation relative de Q = 20/110 ; variation relative de P = 2/11. Le quotient vaut 1 : l’élasticité signée est +1 pour ces données.'
          },
          sources: [
            { title: 'OpenStax Principles of Economics 3e — Introduction to Elasticity', url: 'https://openstax.org/books/principles-economics-3e/pages/5-introduction-to-elasticity' },
            { title: 'OpenStax Principles of Economics 3e — Price Elasticity of Demand and Price Elasticity of Supply', url: 'https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply' }
          ]
        }
      },
      {
        id: 'pib-croissance',
        title: 'PIB, prix et croissance',
        field: 'Macroéconomie · bases',
        summary: 'Composantes du PIB, distinction entre valeurs nominales et réelles, et croissance réelle.',
        lesson: {
          sections: [
            'Le produit intérieur brut (PIB) mesure la valeur monétaire des biens et services finaux produits à l’intérieur d’un territoire pendant une période donnée. Il peut être calculé par les dépenses finales, en évitant de compter deux fois les biens intermédiaires. L’identité par les dépenses regroupe consommation, investissement productif, achats publics de biens et services, et exportations nettes.',
            'Le PIB nominal valorise la production aux prix de la période considérée. Le PIB réel ajuste le PIB nominal à l’aide d’un indice de prix afin de distinguer une hausse de la production d’une hausse générale des prix. Le déflateur du PIB est un indice construit à partir de la production intérieure finale ; son année de base et sa méthode doivent être précisées pour comparer des valeurs réelles.',
            'Le PIB réel par habitant et sa croissance sont des indicateurs de production moyenne, non une mesure complète du bien-être, de la répartition des revenus ou des activités non marchandes. Les nombres des exemples ci-dessous sont fictifs et servent uniquement à montrer les calculs.'
          ],
          formula: { label: 'PIB PAR LES DÉPENSES', text: 'PIB = C + I + G + (X − M)' },
          equationDetails: [
            {
              title: 'Identité comptable du PIB',
              formula: 'PIB = C + I + G + (X − M)',
              explanation: 'Cette identité additionne les dépenses finales en biens et services produits dans le pays. Les importations sont retranchées car elles sont incluses dans certaines dépenses intérieures mais produites à l’étranger.',
              parameters: 'PIB : produit intérieur brut pour la période ; C : consommation finale ; I : investissement en capital physique et variations de stocks, pas l’achat d’actions ; G : achats publics de biens et services, hors transferts ; X : exportations ; M : importations. Toutes les composantes sont des valeurs monétaires pour la même période.',
              example: 'Exemple fictif : C = 120, I = 30, G = 40, X = 25 et M = 15 milliards d’euros. PIB = 120 + 30 + 40 + (25 − 15).',
              result: 'PIB = 200 milliards d’euros pour la période de l’exemple.'
            },
            {
              title: 'Déflateur et PIB réel',
              formula: 'Déflateur = 100 × PIB nominal / PIB réel',
              explanation: 'Le déflateur compare le PIB nominal au PIB réel. S’il est publié sur une base 100, on retrouve le PIB réel en divisant le PIB nominal par le déflateur exprimé en points puis par 100.',
              parameters: 'Déflateur : indice de prix du PIB, base 100 ; PIB nominal et PIB réel : valeurs monétaires pour une même période ; le PIB réel est exprimé aux prix de l’année de référence.',
              example: 'Exemple fictif : PIB nominal = 250 milliards d’euros et déflateur = 125. PIB réel = 250/(125/100).',
              result: 'PIB réel = 200 milliards d’euros aux prix de l’année de base.'
            },
            {
              title: 'Taux de croissance du PIB réel',
              formula: 'g = [(PIB réel₂ − PIB réel₁)/PIB réel₁] × 100 %',
              explanation: 'Le taux de croissance compare la variation du PIB réel à sa valeur de départ. Employer le PIB réel vise à retirer l’effet de la hausse des prix ; des séries officielles peuvent utiliser des indices chaînés et faire l’objet de révisions.',
              parameters: 'g : taux de croissance entre deux périodes (%) ; PIB réel₁ : valeur de la première période ; PIB réel₂ : valeur de la période suivante. Les deux valeurs doivent utiliser une méthode et une unité comparables.',
              example: 'Exemple fictif : le PIB réel passe de 200 à 206 milliards d’euros, aux prix de l’année de référence : g = [(206 − 200)/200] × 100.',
              result: 'La croissance réelle sur la période est de 3 %.'
            }
          ],
          example: {
            statement: 'Une économie fictive a un PIB nominal de 250 milliards d’euros et un déflateur du PIB de 125 (base 100). Estimer le PIB réel.',
            calculation: 'PIB réel = PIB nominal/(déflateur/100) = 250/(125/100).',
            answer: 'Le PIB réel vaut 200 milliards d’euros aux prix de l’année de base.'
          },
          exercise: {
            question: 'Le PIB réel passe de 500 à 515 milliards d’euros entre deux périodes comparables. Quel est son taux de croissance ?',
            answer: 'g = [(515 − 500)/500] × 100 = 3 %.'
          },
          sources: [
            { title: 'OpenStax Principles of Economics 3e — Measuring the Size of the Economy: Gross Domestic Product', url: 'https://openstax.org/books/principles-economics-3e/pages/19-1-measuring-the-size-of-the-economy-gross-domestic-product' },
            { title: 'OpenStax Principles of Economics 3e — Adjusting Nominal Values to Real Values', url: 'https://openstax.org/books/principles-economics-3e/pages/19-2-adjusting-nominal-values-to-real-values' },
            { title: 'OpenStax Principles of Economics 3e — Labor Productivity and Economic Growth', url: 'https://openstax.org/books/principles-economics-3e/pages/20-2-labor-productivity-and-economic-growth' }
          ]
        }
      }
    ]
  }
];
