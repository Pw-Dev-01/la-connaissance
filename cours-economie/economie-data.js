window.courseCatalog = [
  {
    id: 'economie',
    title: 'Économie',
    note: 'Des choix sous contrainte aux indicateurs de l’activité économique.',
    chapters: [
      {
        id: 'rareté-choix',
        branch: 'microeconomie',
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
        branch: 'microeconomie',
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
        branch: 'microeconomie',
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
        branch: 'macroeconomie',
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
  },
  {
    id: 'grands-economistes',
    title: 'Les grands économistes',
    note: 'Une sélection de penseurs et de contributions qui ont marqué l’histoire de la pensée économique. Cette sélection n’est pas exhaustive.',
    chapters: [
      {
        id: 'adam-smith',
        branch: 'grands-economistes',
        title: 'Adam Smith : division du travail et société commerciale',
        field: 'Pensée économique · économie classique',
        summary: 'Relier spécialisation, échanges, richesse et réflexion morale sans réduire Smith à une formule unique.',
        lesson: {
          sections: [
            'Adam Smith (1723–1790) publie An Inquiry into the Nature and Causes of the Wealth of Nations en 1776. OpenStax situe la publication de cet ouvrage dans les débuts de l’étude systématique de l’économie. Smith écrit également The Theory of Moral Sentiments (1759), ouvrage essentiel pour comprendre son intérêt pour les jugements moraux et les relations sociales.',
            'La division du travail désigne la décomposition d’une production en tâches spécialisées. OpenStax reprend l’exemple de la manufacture d’épingles : des personnes se consacrent à différentes opérations plutôt qu’à fabriquer seules un objet de bout en bout. Smith relie cette spécialisation à l’habileté acquise, au gain de temps et aux possibilités d’organisation de la production.',
            'La spécialisation suppose des échanges : personne ne produit seul tout ce qu’il consomme. Les marchés coordonnent une partie de ces échanges par les prix et les décisions décentralisées. Cette analyse n’équivaut pas à dire que tous les résultats du marché sont justes, ni que Smith défend l’absence complète de règles ou de fonctions publiques.',
            'Dans The Theory of Moral Sentiments, Smith analyse la sympathie et la figure du spectateur impartial comme éléments du jugement moral. La Stanford Encyclopedia of Philosophy souligne que ses travaux mêlent réflexion morale, politique et économique. Réduire sa pensée à la seule « main invisible » efface une partie de ce corpus et de ses débats.',
            'Les explications attribuées à Smith doivent être rapportées à un texte et à une question précise. La division du travail aide à examiner l’organisation de la production; les écrits sur les sentiments moraux concernent un autre ensemble de problèmes. Ils appartiennent à une œuvre plus large, mais ne se substituent pas les uns aux autres.'
          ],
          example: {
            statement: 'Un atelier confie à différentes personnes la préparation, l’assemblage et le contrôle d’un produit.',
            calculation: 'Pour étudier la division du travail, on compare l’organisation de ces opérations avec une organisation où chaque personne réalise tout le processus. Il faut relever le temps, les tâches, les compétences et la coordination nécessaires; sans données, on ne peut pas chiffrer le gain de production.',
            answer: 'L’exemple illustre une spécialisation des tâches; il ne démontre pas à lui seul que toute spécialisation augmente toujours la production ou le bien-être.'
          },
          exercise: {
            question: 'Pourquoi la division du travail s’accompagne-t-elle d’échanges entre producteurs ?',
            answer: 'La spécialisation conduit chacun à produire une partie des biens ou services. Les échanges permettent ensuite d’obtenir les autres produits nécessaires ou souhaités.'
          },
          sources: [
            { title: 'OpenStax Principles of Economics 3e — 1.1 What Is Economics, and Why Is It Important?', url: 'https://openstax.org/books/principles-economics-3e/pages/1-1-what-is-economics-and-why-is-it-important' },
            { title: 'Stanford Encyclopedia of Philosophy — Adam Smith’s Moral and Political Philosophy', url: 'https://plato.stanford.edu/entries/smith-moral-political/' }
          ]
        }
      },
      {
        id: 'david-ricardo',
        branch: 'grands-economistes',
        title: 'David Ricardo : avantage comparatif et rente',
        field: 'Pensée économique · économie classique',
        summary: 'Comprendre l’avantage comparatif à partir des coûts d’opportunité et distinguer rente et production.',
        lesson: {
          sections: [
            'David Ricardo (1772–1823) publie On the Principles of Political Economy and Taxation en 1817. Ses travaux portent notamment sur la répartition des revenus, la rente foncière et le commerce. Cette leçon se concentre sur deux contributions souvent associées à son nom : l’avantage comparatif et l’analyse de la rente différentielle.',
            'L’avantage comparatif concerne le coût d’opportunité relatif, pas le fait qu’un pays soit absolument plus productif dans tous les biens. Dans l’exemple pédagogique présenté par Econlib, Poorland consacre cinq heures de travail au vin et dix au pain, tandis que Richland en consacre trois au vin et une au pain. Le coût relatif du vin, exprimé en pain abandonné, est plus faible à Poorland; l’exemple illustre donc un avantage comparatif différent pour les deux productions.',
            'Dans ce modèle, la spécialisation et l’échange peuvent permettre aux deux pays d’accéder à des combinaisons de biens différentes de celles qu’ils produiraient sans échange. Ce résultat dépend des hypothèses du modèle et des termes de l’échange. Il ne signifie pas que chaque personne ou chaque secteur gagne de la même façon, ni qu’un exemple stylisé décrit automatiquement les effets d’une politique commerciale réelle.',
            'Ricardo analyse aussi la rente liée aux différences de productivité des terres. Lorsque des terres moins productives deviennent cultivées, une terre plus productive peut générer une rente parce que son rendement est supérieur dans des conditions comparables. Cette explication appartient au modèle ricardien de la rente; son application à une situation contemporaine nécessite des données sur les terres, les coûts et les institutions.',
            'L’intérêt pédagogique de Ricardo tient à la distinction entre productivité absolue et coût relatif. Pour évaluer un cas, on calcule les quantités de chaque bien auxquelles il faut renoncer, plutôt que de comparer uniquement les heures ou les volumes produits.'
          ],
          example: {
            statement: 'Reprenons l’exemple documenté par Econlib : Poorland produit une bouteille de vin en cinq heures ou un pain en dix heures; Richland produit une bouteille de vin en trois heures ou un pain en une heure.',
            calculation: 'À Poorland, une bouteille de vin coûte en travail l’équivalent d’un demi-pain (5/10). À Richland, elle coûte trois pains (3/1). Inversement, un pain coûte deux bouteilles de vin à Poorland et un tiers de bouteille à Richland.',
            answer: 'Dans cet exemple, Poorland a un avantage comparatif pour le vin et Richland pour le pain, même si Richland utilise moins de travail pour produire chacun des deux biens.'
          },
          exercise: {
            question: 'Quelle donnée faut-il comparer pour identifier un avantage comparatif ?',
            answer: 'Le coût d’opportunité de chaque bien dans chaque économie, c’est-à-dire la quantité de l’autre bien à laquelle la production oblige à renoncer.'
          },
          sources: [
            { title: 'Econlib — David Ricardo', url: 'https://www.econlib.org/library/Enc/bios/Ricardo.html' },
            { title: 'OpenStax Principles of Economics 3e — 1.1 What Is Economics, and Why Is It Important?', url: 'https://openstax.org/books/principles-economics-3e/pages/1-1-what-is-economics-and-why-is-it-important' }
          ]
        }
      },
      {
        id: 'karl-marx',
        branch: 'grands-economistes',
        title: 'Karl Marx : travail, capital et critique du capitalisme',
        field: 'Pensée économique · critique politique',
        summary: 'Présenter des notions associées à Marx en distinguant son analyse des débats d’interprétation.',
        lesson: {
          sections: [
            'Karl Marx (1818–1883) est un philosophe et analyste social dont les écrits comprennent une analyse de la production capitaliste. La Stanford Encyclopedia of Philosophy souligne la diversité des fils de sa pensée : travail aliéné, théorie de l’histoire, analyse économique, idéologie, politique et critique de la société. Il est donc préférable d’étudier une notion déterminée plutôt que de traiter « le marxisme » comme un bloc sans débats internes.',
            'Dans ses textes sur l’aliénation, Marx décrit plusieurs séparations qui peuvent caractériser le travail salarié : séparation du produit, de l’activité productive, des autres personnes et des capacités humaines. La SEP précise que les interprétations de ces dimensions et de leurs fondements font l’objet de discussions savantes.',
            'Dans Le Capital, Marx analyse les marchandises, le travail et les rapports de production. La SEP présente la théorie de la valeur-travail comme l’une des lectures traditionnelles de son analyse, tout en détaillant les objections et les controverses qui l’entourent. Dans ce cours, cette théorie est exposée comme une proposition de Marx, non comme une loi économique admise par consensus.',
            'Marx s’intéresse aussi aux classes sociales, à la répartition du pouvoir économique et aux transformations historiques. Les termes de classe, exploitation et idéologie ont des sens particuliers dans ses écrits; ils ne doivent pas être employés comme de simples synonymes d’inégalité ou d’opinion.',
            'Les économistes et philosophes interprètent encore la portée de ces notions, leur cohérence et leur valeur explicative. Une lecture rigoureuse sépare ce que Marx affirme dans un texte donné, la reconstruction proposée par un commentateur et l’évaluation empirique ou normative de ces propositions.'
          ],
          example: {
            statement: 'Dans une enquête sur le travail, des employés disent ne pas contrôler l’organisation de leurs tâches ni l’usage du produit final.',
            calculation: 'Une analyse inspirée de la notion marxienne d’aliénation peut examiner séparément le contrôle du processus, le rapport au produit, les relations de travail et la possibilité d’exprimer des compétences. Elle compare ces observations à des textes définissant le concept.',
            answer: 'Les propos peuvent être analysés à l’aide de cette notion; ils ne suffisent pas seuls à établir que toutes les dimensions de l’aliénation sont présentes.'
          },
          exercise: {
            question: 'Pourquoi faut-il présenter la théorie de la valeur-travail avec une attribution explicite à Marx et une mention des débats ?',
            answer: 'Parce qu’il s’agit d’une théorie proposée dans son analyse du capitalisme dont les interprétations et la validité sont contestées; elle ne constitue pas une définition consensuelle de la valeur en économie.'
          },
          sources: [
            { title: 'Stanford Encyclopedia of Philosophy — Karl Marx', url: 'https://plato.stanford.edu/entries/marx/' },
            { title: 'Econlib — Karl Marx', url: 'https://www.econlib.org/library/Enc/bios/Marx.html' }
          ]
        }
      },
      {
        id: 'john-maynard-keynes',
        branch: 'grands-economistes',
        title: 'John Maynard Keynes : demande globale et activité',
        field: 'Pensée économique · macroéconomie',
        summary: 'Étudier le rôle de la demande globale dans une analyse keynésienne des récessions.',
        lesson: {
          sections: [
            'John Maynard Keynes est associé à une approche macroéconomique centrée sur la demande globale. OpenStax présente une analyse keynésienne selon laquelle les entreprises produisent en fonction des ventes qu’elles anticipent et où une demande insuffisante peut maintenir l’activité sous le niveau potentiel.',
            'Dans le modèle agrégé présenté par OpenStax, une baisse de la consommation ou de l’investissement réduit la demande adressée aux entreprises. Si les salaires et certains prix s’ajustent lentement, la baisse de la demande peut se traduire par une production et un emploi plus faibles plutôt que par un ajustement immédiat de tous les prix.',
            'Cette analyse sert à formuler une question de politique économique : dans quelles conditions une dépense autonome supplémentaire peut-elle accroître les revenus et les dépenses au-delà de son effet initial ? Le mécanisme du multiplicateur dépend d’hypothèses sur la consommation, l’épargne, les importations, les capacités de production et la réponse des prix.',
            'Un modèle keynésien est un outil d’analyse, non la description complète de toute économie. Les mécanismes peuvent différer selon la période, les institutions, les capacités inutilisées et les anticipations. OpenStax distingue les résultats du modèle et les controverses sur l’efficacité de mesures particulières.',
            'La leçon porte sur le courant d’analyse macroéconomique enseigné sous le nom de perspective keynésienne; elle ne prétend pas résumer l’ensemble des écrits de Keynes ni les différents courants qui se sont développés ensuite.'
          ],
          example: {
            statement: 'Dans un modèle simplifié, des ménages deviennent plus prudents et réduisent leurs dépenses, tandis que les salaires ne diminuent pas immédiatement.',
            calculation: 'La baisse des ventes anticipées conduit certaines entreprises à réduire leur production et leurs embauches. La baisse des revenus peut alors réduire les dépenses d’autres ménages, créant un effet en chaîne; son ampleur dépend des paramètres du modèle.',
            answer: 'Ce scénario illustre le mécanisme keynésien de demande globale et de propagation des dépenses, sans fournir de prévision chiffrée pour une économie réelle.'
          },
          exercise: {
            question: 'Pourquoi une diminution de la demande peut-elle réduire la production dans un modèle keynésien à prix et salaires rigides ?',
            answer: 'Si les entreprises ne parviennent pas à vendre leur production au prix courant et que les ajustements de prix ou de salaires sont lents, elles peuvent réduire les quantités produites et l’emploi.'
          },
          sources: [
            { title: 'OpenStax Principles of Economics 3e — 25.1 Aggregate Demand in Keynesian Analysis', url: 'https://openstax.org/books/principles-economics-3e/pages/25-1-aggregate-demand-in-keynesian-analysis' },
            { title: 'OpenStax Principles of Economics 3e — 25.2 The Building Blocks of Keynesian Analysis', url: 'https://openstax.org/books/principles-economics-3e/pages/25-2-the-building-blocks-of-keynesian-analysis' }
          ]
        }
      },
      {
        id: 'friedrich-hayek',
        branch: 'grands-economistes',
        title: 'Friedrich Hayek : information et coordination',
        field: 'Pensée économique · institutions',
        summary: 'Examiner son analyse du rôle des connaissances dispersées, des prix et de la coordination décentralisée.',
        lesson: {
          sections: [
            'Friedrich August von Hayek (1899–1992) reçoit, avec Gunnar Myrdal, le prix de la Banque de Suède en sciences économiques en mémoire d’Alfred Nobel en 1974. La notice Nobel rappelle ses travaux sur les cycles économiques dans les années 1920 puis sur l’interdépendance des phénomènes économiques, sociaux et institutionnels.',
            'La notice Nobel résume sa critique de la planification économique centralisée : des informations et des connaissances sont détenues par différents acteurs, et Hayek estime qu’un système décentralisé de marchés, de concurrence et de prix peut mobiliser ces connaissances. Il s’agit d’une thèse de Hayek, non d’un résultat disant que tout marché coordonne toujours parfaitement.',
            'Une grande partie du problème tient à la nature des informations locales : elles peuvent concerner des ressources, des préférences ou des circonstances particulières, changer rapidement et être difficiles à transmettre à une autorité centrale. Dans son analyse, le système de prix synthétise une partie de ces informations sans qu’un participant connaisse l’ensemble des conditions.',
            'Cette perspective conduit à étudier les institutions et les mécanismes de coordination, pas seulement les préférences individuelles. Elle ne signifie pas que les prix résolvent toutes les questions économiques; les objectifs, les règles et les effets distributifs restent des sujets d’analyse distincts.',
            'L’œuvre de Hayek couvre également les cycles économiques et des questions sociales et politiques. Cette leçon isole la contribution relative aux connaissances dispersées afin d’éviter de ramener l’ensemble de ses travaux à une seule thèse.'
          ],
          example: {
            statement: 'Une sécheresse réduit localement la disponibilité d’une matière première utilisée par de nombreuses entreprises.',
            calculation: 'Comparer les informations possédées par les producteurs locaux, les acheteurs et une administration centrale, puis analyser comment un changement de prix peut inciter différents acteurs à économiser la ressource ou à chercher des solutions de remplacement.',
            answer: 'L’exemple illustre l’argument de coordination par l’information; il ne démontre pas à lui seul quel dispositif institutionnel produit le meilleur résultat dans chaque cas.'
          },
          exercise: {
            question: 'Quelle difficulté de connaissance la critique hayékienne de la planification centrale met-elle en avant ?',
            answer: 'Des connaissances utiles sont dispersées entre de nombreux acteurs et peuvent être locales ou changeantes; une autorité ne les possède pas nécessairement toutes au moment de décider.'
          },
          sources: [
            { title: 'NobelPrize.org — Friedrich August von Hayek, Facts', url: 'https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/facts/' }
          ]
        }
      },
      {
        id: 'elinor-ostrom',
        branch: 'grands-economistes',
        title: 'Elinor Ostrom : règles et ressources communes',
        field: 'Pensée économique · gouvernance',
        summary: 'Comprendre son étude empirique des règles locales de gestion de ressources partagées.',
        lesson: {
          sections: [
            'Elinor Ostrom reçoit en 2009 le prix de la Banque de Suède en sciences économiques en mémoire d’Alfred Nobel, conjointement avec Oliver Williamson; la motivation du prix mentionne l’analyse de la gouvernance économique, en particulier des communs. La page Nobel sur son travail résume ses études de terrain sur la gestion collective de pâturages, de zones de pêche et de forêts.',
            'Ces études contestent l’idée qu’une ressource utilisée collectivement serait nécessairement surexploitée. Ostrom observe que les usagers peuvent établir des règles concernant l’usage et l’entretien de ressources partagées. Cela ne signifie pas que l’action collective réussit toujours : les résultats dépendent des ressources, des acteurs, des règles et du contexte étudié.',
            'L’approche empirique examine les institutions en pratique : qui participe aux décisions, comment les règles sont définies, comment elles sont suivies et comment les conflits sont traités. Décrire ces mécanismes est différent de supposer qu’une seule solution — privatisation ou contrôle central — convient à tous les cas.',
            'La comparaison de cas permet de repérer des ressemblances et des différences, mais l’analyse doit conserver le contexte local. Les catégories de ressource, les droits d’accès, les usages et les relations entre groupes doivent être documentés avant de comparer les résultats.',
            'Le travail d’Ostrom relie l’économie à la science politique et à l’étude des institutions. Il montre la valeur d’observations de terrain pour éprouver des modèles, tout en laissant ouverte l’analyse des conditions dans lesquelles une forme particulière de gouvernance fonctionne.'
          ],
          example: {
            statement: 'Des usagers partagent une zone de pêche et constatent une baisse des prises.',
            calculation: 'Une enquête documente d’abord les règles d’accès, les pratiques de prélèvement, les saisons, les groupes concernés et les changements observés. Elle compare ensuite l’évolution des usages et de la ressource avec les règles effectivement appliquées.',
            answer: 'Le cas permet d’étudier une gouvernance locale; il ne suffit pas à garantir qu’une règle similaire conviendra à toutes les pêcheries.'
          },
          exercise: {
            question: 'Quelle conclusion faut-il éviter de tirer des travaux d’Ostrom sur les communs ?',
            answer: 'Il faut éviter de conclure que toutes les ressources communes sont toujours bien gérées localement. Ses résultats s’appuient sur des études de cas et invitent à examiner les règles et conditions propres à chaque situation.'
          },
          sources: [
            { title: 'NobelPrize.org — Elinor Ostrom, Facts', url: 'https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/' },
            { title: 'NobelPrize.org — Elinor Ostrom, Prize Lecture: Beyond Markets and States', url: 'https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/lecture/' }
          ]
        }
      },
      {
        id: 'amartya-sen',
        branch: 'grands-economistes',
        title: 'Amartya Sen : bien-être et capabilités',
        field: 'Pensée économique · bien-être',
        summary: 'Distinguer ressources, possibilités réelles et accomplissements dans l’évaluation du bien-être.',
        lesson: {
          sections: [
            'Amartya Sen reçoit le prix de la Banque de Suède en sciences économiques en mémoire d’Alfred Nobel en 1998 pour ses contributions à l’économie du bien-être. La notice Nobel situe une partie de ses recherches dans les questions de répartition, de pauvreté, de famines et de décision collective.',
            'L’approche par les capabilités déplace l’évaluation des seuls moyens — revenu ou ressources — vers ce que les personnes ont réellement la possibilité de faire et d’être. La Stanford Encyclopedia of Philosophy distingue les « fonctionnements », accomplissements réalisés, des « capabilités », possibilités ou libertés réelles d’atteindre ces accomplissements.',
            'Des ressources identiques ne créent pas nécessairement les mêmes possibilités pour chacun. La conversion des ressources dépend de facteurs personnels, sociaux et environnementaux. Un objet, un droit formel ou un revenu ne suffit donc pas à mesurer ce qu’une personne peut effectivement accomplir.',
            'Le cadre par les capabilités est ouvert et utilisé à des fins différentes; le choix des dimensions pertinentes et leur pondération font l’objet de discussions. Il faut toujours préciser le but de l’évaluation, les indicateurs retenus et les raisons de ces choix plutôt que présenter une liste unique comme universellement admise.',
            'Sen a aussi travaillé sur le choix social et la mesure de la pauvreté. Ces travaux étudient comment évaluer des situations collectives en tenant compte de plusieurs informations, au lieu de réduire automatiquement le bien-être à une seule variable.'
          ],
          example: {
            statement: 'Deux personnes ont le même revenu, mais l’une vit loin des services essentiels et l’autre dispose d’un transport accessible.',
            calculation: 'Comparer le seul revenu ne décrit pas toutes leurs possibilités. Une analyse inspirée des capabilités examine les ressources, les obstacles personnels et sociaux ainsi que l’environnement qui influe sur leur conversion en possibilités réelles.',
            answer: 'L’exemple distingue ressources et possibilités effectives; il n’attribue pas une valeur numérique aux capabilités.'
          },
          exercise: {
            question: 'Quelle différence l’approche par les capabilités établit-elle entre une capabilité et un fonctionnement ?',
            answer: 'Le fonctionnement décrit un accomplissement réalisé; la capabilité désigne la possibilité réelle ou la liberté substantielle d’atteindre certains états ou activités.'
          },
          sources: [
            { title: 'Stanford Encyclopedia of Philosophy — The Capability Approach', url: 'https://plato.stanford.edu/entries/capability-approach/' },
            { title: 'NobelPrize.org — Amartya Sen, Facts', url: 'https://www.nobelprize.org/prizes/economic-sciences/1998/sen/facts/' },
            { title: 'NobelPrize.org — Amartya Sen, Prize Lecture: The Possibility of Social Choice', url: 'https://www.nobelprize.org/prizes/economic-sciences/1998/sen/lecture/' }
          ]
        }
      }
    ]
  },

// ====================================================
// Chaque chapitre utilise lesson.fiche, que cours.js affiche déjà
// au format « 01 / FICHE — Fiche de l’ouvrage ».
// ====================================================
  {
    id: 'grands-livres',
    title: 'Les grands livres de l’économie',
    note: 'Dix ouvrages de référence de la pensée économique, présentés par leur fiche bibliographique vérifiée. Cette sélection n’est pas exhaustive.',
    chapters: [
      {
        id: 'ouvrage-smith-richesse-des-nations',
        branch: 'grands-ouvrages',
        title: 'La Richesse des nations (Smith, 1776)',
        field: 'Ouvrages de référence · économie classique',
        summary: 'Le grand ouvrage d’Adam Smith sur les sources de la richesse d’une nation.',
        lesson: {
          fiche: [
            ['Titre complet', 'An Inquiry into the Nature and Causes of the Wealth of Nations (en deux volumes)'],
            ['Auteur', 'Adam Smith (1723-1790)'],
            ['Édition', 'Londres, W. Strahan et T. Cadell, 2 vol. in-4°'],
            ['Date de parution', '9 mars 1776']
          ],
          sections: [
            'L’ouvrage examine comment une nation crée de la richesse : il traite notamment de la division du travail, des échanges et du rôle des prix dans l’allocation des ressources.',
            'Le livre a connu cinq éditions du vivant de Smith, mort en 1790.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Université de St Andrews — première édition de The Wealth of Nations', url: 'https://university-collections.wp.st-andrews.ac.uk/2015/12/15/where-we-find-new-old-books-chapter-4-william-creech-and-a-new-first-edition-of-adam-smiths-wealth-of-nations/' },
            { title: 'Internet Archive — exemplaire numérisé de la première édition (1776)', url: 'https://archive.org/details/inquiryintonatur02smit_0' }
          ]
        }
      },
      {
        id: 'ouvrage-malthus-essai-population',
        branch: 'grands-ouvrages',
        title: 'Essai sur le principe de population (Malthus, 1798)',
        field: 'Ouvrages de référence · économie classique',
        summary: 'L’essai de Malthus sur la croissance de la population et les subsistances.',
        lesson: {
          fiche: [
            ['Titre complet', 'An Essay on the Principle of Population, as it affects the Future Improvement of Society, with Remarks on the Speculations of Mr. Godwin, M. Condorcet, and other Writers'],
            ['Auteur', 'Thomas Robert Malthus (1766-1834), publié anonymement'],
            ['Édition', 'Londres, J. Johnson, St Paul’s Church-Yard, in-8° (396 pages)'],
            ['Date de parution', '1798']
          ],
          sections: [
            'Malthus soutient que la population tend à croître plus vite que les subsistances : selon lui, la première augmente de façon géométrique et les secondes de façon arithmétique. Il en déduit un risque de famine et de maladie pour les plus pauvres. Il s’agit de la thèse de Malthus, qui a été largement discutée.',
            'Le titre indique que l’essai répond aux spéculations de Godwin et de Condorcet sur l’amélioration de la société. Malthus publie en 1803 une seconde édition profondément remaniée ; six éditions paraissent entre 1798 et 1826.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'New York Public Library — notice de la première édition (1798)', url: 'https://www.nypl.org/research/research-catalog/bib/b14096146' },
            { title: 'Econlib — textes des première et sixième éditions', url: 'https://www.econlib.org/library/Malthus/malPop.html' }
          ]
        }
      },
      {
        id: 'ouvrage-ricardo-principes',
        branch: 'grands-ouvrages',
        title: 'Principes de l’économie politique et de l’impôt (Ricardo, 1817)',
        field: 'Ouvrages de référence · économie classique',
        summary: 'L’ouvrage de Ricardo sur la rente, le profit, les salaires, le commerce et l’impôt.',
        lesson: {
          fiche: [
            ['Titre complet', 'On the Principles of Political Economy, and Taxation'],
            ['Auteur', 'David Ricardo (1772-1823)'],
            ['Édition', 'Londres, John Murray, in-8° (viii-589 pages). Tirage de 750 exemplaires.'],
            ['Date de parution', '19 avril 1817']
          ],
          sections: [
            'Ricardo cherche à déterminer les lois qui règlent le cours naturel de la rente, du profit et des salaires. Le livre traite aussi de la théorie de la valeur-travail, de l’avantage comparatif dans le commerce international, de la monnaie et des effets de l’impôt.',
            'Il a été rédigé en un peu plus de six mois, à l’instigation d’amis dont James Mill.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'New York Public Library — notice de la première édition (1817)', url: 'https://catalog.nypl.org/record=b13613582~S1' },
            { title: 'Wikipédia (anglais) — On the Principles of Political Economy and Taxation', url: 'https://en.wikipedia.org/wiki/On_the_Principles_of_Political_Economy_and_Taxation' }
          ]
        }
      },
      {
        id: 'ouvrage-mill-principes',
        branch: 'grands-ouvrages',
        title: 'Principes d’économie politique (Mill, 1848)',
        field: 'Ouvrages de référence · économie classique',
        summary: 'Le traité de John Stuart Mill, manuel de référence de l’économie anglophone au XIXe siècle.',
        lesson: {
          fiche: [
            ['Titre complet', 'Principles of Political Economy, with some of their Applications to Social Philosophy (en deux volumes)'],
            ['Auteur', 'John Stuart Mill (1806-1873)'],
            ['Édition', 'Londres, John W. Parker, 2 vol. in-8° (xvi-593 et xv-549 pages)'],
            ['Date de parution', '1848']
          ],
          sections: [
            'Le traité est organisé en livres consacrés à la production, à la répartition, à l’échange, puis aux effets du progrès de la société sur la production et la répartition. Mill y aborde aussi le rôle de l’État dans les affaires économiques.',
            'L’ouvrage est resté la référence de l’enseignement de l’économie dans le monde anglophone jusqu’à la publication des Principles of Economics de Marshall, en 1890.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Morgan Library — notice de la première édition (1848)', url: 'https://www.themorgan.org/printed-books/79658' },
            { title: 'WorldCat — Principles of political economy, 1848', url: 'https://search.worldcat.org/title/948263597' }
          ]
        }
      },
      {
        id: 'ouvrage-marx-le-capital',
        branch: 'grands-ouvrages',
        title: 'Le Capital, livre I (Marx, 1867)',
        field: 'Ouvrages de référence · critique politique',
        summary: 'Le premier livre du Capital, seul publié du vivant de Karl Marx.',
        lesson: {
          fiche: [
            ['Titre complet', 'Das Kapital. Kritik der politischen Oekonomie. Erster Band. Buch I : Der Produktionsprocess des Kapitals'],
            ['Auteur', 'Karl Marx (1818-1883)'],
            ['Édition', 'Hambourg, Otto Meissner, in-8°. Imprimé à Leipzig, tirage de 1 000 exemplaires.'],
            ['Date de parution', 'Septembre 1867']
          ],
          sections: [
            'Le livre I est consacré au « processus de production du capital », selon les termes de Marx dans une lettre d’avril 1867. Seul ce premier volume paraît du vivant de l’auteur.',
            'Les notions qu’il analyse, comme la marchandise, le travail et la valeur, restent discutées : la théorie de la valeur-travail doit être présentée comme une proposition de Marx, dont la validité est contestée.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Marx-Engels-Gesamtausgabe (BBAW) — lettre de Marx, 30 avril 1867', url: 'https://megadigital.bbaw.de/store/M0000258.pdf' },
            { title: 'German History in Documents and Images — page de titre de la première édition', url: 'https://germanhistorydocs.org/de/reichsgruendung-bismarcks-deutschland-1866-1890/karl-marx-das-kapital-titel-der-ersten-ausgabe-1867' }
          ]
        }
      },
      {
        id: 'ouvrage-marshall-principles',
        branch: 'grands-ouvrages',
        title: 'Principles of Economics (Marshall, 1890)',
        field: 'Ouvrages de référence · économie néoclassique',
        summary: 'Le traité d’Alfred Marshall, longtemps ouvrage de référence de l’économie.',
        lesson: {
          fiche: [
            ['Titre complet', 'Principles of Economics, Volume I'],
            ['Auteur', 'Alfred Marshall (1842-1924)'],
            ['Édition', 'Londres, Macmillan, in-8° (xxviii-754 pages)'],
            ['Date de parution', '18 juillet 1890']
          ],
          sections: [
            'Le volume I est publié le 18 juillet 1890. Un second volume, prévu à l’origine, a été formellement abandonné au moment de la sixième édition (1910). Huit éditions se succèdent jusqu’en 1920.',
            'Marshall est réputé avoir introduit des graphiques simples pour expliquer l’offre et la demande.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Bibliothèque nationale d’Irlande — notice de la première édition', url: 'https://catalogue.nli.ie/Record/vtls000446410' },
            { title: 'Groenewegen, « Writing and Revising the Principles » (Palgrave Macmillan)', url: 'https://link.springer.com/chapter/10.1057/9780230593060_6' }
          ]
        }
      },
      {
        id: 'ouvrage-keynes-theorie-generale',
        branch: 'grands-ouvrages',
        title: 'Théorie générale de l’emploi, de l’intérêt et de la monnaie (Keynes, 1936)',
        field: 'Ouvrages de référence · macroéconomie',
        summary: 'L’ouvrage de Keynes sur le niveau d’emploi, l’épargne, l’investissement et la monnaie.',
        lesson: {
          fiche: [
            ['Titre complet', 'The General Theory of Employment, Interest and Money'],
            ['Auteur', 'John Maynard Keynes (1883-1946)'],
            ['Édition', 'Londres, Macmillan, in-8° (xii-403 pages)'],
            ['Date de parution', 'Février 1936']
          ],
          sections: [
            'Keynes soutient que le niveau d’emploi n’est pas déterminé par le prix du travail, comme dans le schéma classique, et que le plein-emploi n’est pas le résultat naturel de marchés concurrentiels en équilibre.',
            'Le livre étudie l’interaction entre l’épargne, l’investissement et la liquidité, c’est-à-dire la monnaie. Beaucoup de ses innovations restent centrales en macroéconomie.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Wikipédia (anglais) — The General Theory of Employment, Interest and Money', url: 'https://en.wikipedia.org/wiki/The_General_Theory_of_Employment,_Interest_and_Money' },
            { title: 'Shapero Rare Books — première édition, Macmillan, 1936', url: 'https://shapero.com/products/keynes-general-theory-employment-1936-first-edition-109128' }
          ]
        }
      },
      {
        id: 'ouvrage-hayek-route-servitude',
        branch: 'grands-ouvrages',
        title: 'La Route de la servitude (Hayek, 1944)',
        field: 'Ouvrages de référence · institutions',
        summary: 'L’essai de Hayek sur les risques de la planification économique centralisée.',
        lesson: {
          fiche: [
            ['Titre complet', 'The Road to Serfdom'],
            ['Auteur', 'Friedrich August von Hayek (1899-1992)'],
            ['Édition', 'Londres, Routledge, première édition britannique. L’édition américaine suit chez University of Chicago Press en septembre 1944.'],
            ['Date de parution', 'Mars 1944']
          ],
          sections: [
            'Hayek soutient que la planification économique centralisée donne à l’État un pouvoir sur l’individu et menace les libertés ; il voit dans cette planification une racine commune au fascisme et au socialisme. Ces affirmations sont des thèses de Hayek, discutées depuis la parution du livre.',
            'Publié pendant la Seconde Guerre mondiale, en période de rationnement du papier, le livre fut très demandé. Une version abrégée parue dans le Reader’s Digest en avril 1945 l’a fait connaître d’un public plus large.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Wikipédia (anglais) — The Road to Serfdom', url: 'https://en.wikipedia.org/wiki/The_Road_to_Serfdom' },
            { title: 'Raptis Rare Books — première édition britannique, Routledge, 1944', url: 'https://www.raptisrarebooks.com/product/the-road-to-serfdom-friedrich-a-hayek-british-first-edition' }
          ]
        }
      },
      {
        id: 'ouvrage-friedman-schwartz-monetary-history',
        branch: 'grands-ouvrages',
        title: 'A Monetary History of the United States (Friedman et Schwartz, 1963)',
        field: 'Ouvrages de référence · économie monétaire',
        summary: 'L’histoire monétaire américaine de 1867 à 1960 par Friedman et Schwartz.',
        lesson: {
          fiche: [
            ['Titre complet', 'A Monetary History of the United States, 1867-1960'],
            ['Auteurs', 'Milton Friedman (1912-2006) et Anna Jacobson Schwartz (1915-2012)'],
            ['Édition', 'Princeton, Princeton University Press, pour le National Bureau of Economic Research (xxiv-860 pages)'],
            ['Date de parution', '1963']
          ],
          sections: [
            'Les auteurs s’appuient sur de longues séries historiques pour soutenir que les variations de la masse monétaire ont profondément influencé l’économie américaine, en particulier ses fluctuations.',
            'Le chapitre 7, « The Great Contraction », consacré à la Grande Dépression, a été publié séparément en 1965.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Princeton University Press — A Monetary History of the United States', url: 'https://press.princeton.edu/node/21811' },
            { title: 'East Carolina University — notice catalographique (1963)', url: 'https://lib.ecu.edu/catalog-preview/catalog/229811' }
          ]
        }
      },
      {
        id: 'ouvrage-piketty-capital-xxie',
        branch: 'grands-ouvrages',
        title: 'Le Capital au XXIe siècle (Piketty, 2013)',
        field: 'Ouvrages de référence · inégalités',
        summary: 'L’ouvrage de Thomas Piketty sur la dynamique du capital et des inégalités.',
        lesson: {
          fiche: [
            ['Titre complet', 'Le Capital au XXIe siècle'],
            ['Auteur', 'Thomas Piketty (né en 1971)'],
            ['Édition', 'Paris, Éditions du Seuil, coll. « Les livres du Nouveau Monde » (970 pages)'],
            ['Date de parution', 'Septembre 2013']
          ],
          sections: [
            'Piketty soutient que la divergence des niveaux de revenu et de capital l’emporte mécaniquement lorsque la croissance de l’économie est plus faible que le rendement du capital. Il propose un impôt progressif sur le capital à l’échelle mondiale.',
            'Ses thèses et ses méthodes ont suscité de nombreuses critiques et discussions parmi les économistes.'
          ],
          sourcesHeading: 'Sources bibliographiques',
          sources: [
            { title: 'Lectures (OpenEdition) — compte rendu, Seuil, 2013', url: 'https://journals.openedition.org/lectures/12931' },
            { title: 'La finance pour tous — fiche de lecture, Seuil, 2013', url: 'https://www.lafinancepourtous.com/outils/bibliotheque/le-capital-au-xxie-siecle/' }
          ]
        }
      }
    ]
  },

// BRANCHE INFLATION ET DÉFLATION

  {
    id: 'inflation-deflation',
    title: 'L’inflation et la déflation',
    note: 'Sept chapitres sur la définition et la mesure des prix, les causes et les effets de l’inflation, les hyperinflations, la déflation, puis les outils pour lutter contre l’inflation et contre la déflation. Les chiffres sont des ordres de grandeur issus de sources officielles ou de travaux de recherche, et les explications économiques font parfois l’objet de débats entre économistes.',
    chapters: [
      {
        id: 'definitions-mesure',
        title: 'Définitions et mesure : inflation, désinflation, déflation',
        field: 'Économie · Niveau général des prix, indice des prix à la consommation (IPC) et IPCH',
        summary: 'Distinguer inflation, désinflation et déflation, comprendre comment on mesure les prix et connaître les limites des indices.',
        lesson: {
          sections: [
            'L’inflation désigne une hausse générale et durable des prix des biens et services. Elle ne se confond ni avec la hausse du prix d’un seul produit, ni avec une hausse ponctuelle : ce qui compte est l’évolution du niveau général des prix, qui entraîne une diminution du pouvoir d’achat de la monnaie. La déflation est l’inverse : une baisse générale et durable des prix. Il faut aussi la distinguer de la désinflation, qui désigne un ralentissement de la hausse des prix. Quand l’inflation passe de 5 % à 2 %, les prix continuent d’augmenter, mais moins vite : il y a désinflation et non déflation.',
            'En France, l’outil de référence est l’indice des prix à la consommation (IPC), calculé et publié chaque mois par l’Insee. Il suit l’évolution des prix d’un très large éventail de biens et de services représentatifs de la consommation des ménages. L’Insee rappelle que l’IPC n’est pas un indice du coût de la vie : il mesure l’effet des variations de prix sur le coût d’achat des produits consommés par les ménages, à structure de consommation donnée. Pour comparer les pays européens, on utilise l’indice des prix à la consommation harmonisé (IPCH), que la Banque centrale européenne (BCE) a confirmé en 2021 comme sa mesure de référence des prix.',
            'Le taux d’inflation est la variation en pourcentage d’un indice de prix entre deux dates, le plus souvent sur douze mois. Si l’indice passe de 120 à 126, le taux d’inflation est de (126 − 120) ÷ 120 = 5 %. D’autres mesures existent : le déflateur du PIB, égal au PIB nominal divisé par le PIB réel et multiplié par 100, qui couvre l’ensemble de la production et non seulement la consommation des ménages, ou l’inflation dite sous-jacente, qui exclut les composantes les plus volatiles comme l’énergie, l’alimentation, l’alcool et le tabac pour mieux repérer la tendance de fond.',
            'Un indice de prix reste une moyenne. Les ménages n’ont pas tous le même panier de consommation : le poids du logement, de l’énergie ou de l’alimentation varie selon les revenus, si bien que l’inflation ressentie par un ménage peut différer de l’inflation moyenne mesurée. L’IPC sert pourtant de repère à de nombreuses décisions : il intervient dans la formule du taux du Livret A et dans l’indexation du Smic, des minima sociaux ou des pensions de retraite. Sa mesure suscite donc depuis longtemps des débats, notamment sur la prise en compte des changements de qualité des produits.'
          ],
          example: {
            statement: 'L’indice des prix à la consommation d’un pays passe de 120 à 126 en un an. Quel est le taux d’inflation, et un taux qui passerait ensuite de 5 % à 2 % serait-il de la déflation ?',
            calculation: 'Taux d’inflation = (126 − 120) ÷ 120 × 100 = 5 %. Si l’inflation tombe ensuite à 2 %, l’indice continue d’augmenter, mais plus lentement.',
            answer: 'Le taux d’inflation est de 5 %. Le passage à 2 % est une désinflation : les prix augmentent encore. Il n’y a déflation que si le niveau général des prix baisse de façon durable.'
          },
          exercise: {
            question: 'Pourquoi l’Insee précise-t-il que l’IPC n’est pas un indice du coût de la vie ?',
            answer: 'Parce que l’IPC mesure l’effet des variations de prix sur le coût d’achat d’un panier de produits consommés par les ménages, et non l’ensemble des dépenses nécessaires pour maintenir un niveau de vie donné.'
          },
          exercises: [
            {
              question: 'Quelle est la différence entre déflation et désinflation ?',
              answer: 'La déflation est une baisse générale et durable des prix. La désinflation est un ralentissement de la hausse des prix : l’inflation reste positive mais diminue.'
            },
            {
              question: 'Quel organisme calcule l’indice des prix à la consommation en France, et à quel rythme ?',
              answer: 'L’Insee, chaque mois.'
            },
            {
              question: 'À quoi sert l’IPCH ?',
              answer: 'À comparer l’inflation entre les pays européens avec une méthode harmonisée. C’est aussi l’indice de référence de la BCE pour sa cible d’inflation.'
            }
          ],
          sources: [
            { title: 'Insee — Définition : indice des prix à la consommation (IPC)', url: 'https://www.insee.fr/fr/metadonnees/definition/c1557' },
            { title: 'Banque de France — L’inflation et la déflation (ABC de l’économie)', url: 'https://banque-france.fr/system/files/2024-08/eeb-inflation-deflation.pdf' },
            { title: 'Banque de France — Inflation et déflation, une voie étroite pour la stabilité des prix', url: 'https://www.banque-france.fr/system/files/2026-02/EEC_S1_E12_FR.pdf' },
            { title: 'BCE — Communiqué du 8 juillet 2021 : nouvelle stratégie de politique monétaire (IPCH)', url: 'https://www.ecb.europa.eu/press/pr/date/2021/html/ecb.pr210708%7Edc78cc4b0d.en.html' }
          ]
        }
      },
      {
        id: 'causes-inflation',
        title: 'Les causes de l’inflation',
        field: 'Économie · Inflation par la demande, par les coûts, facteurs monétaires et anticipations',
        summary: 'Comprendre les grandes explications de l’inflation et la manière dont elles se combinent dans les épisodes historiques.',
        lesson: {
          sections: [
            'Les économistes distinguent schématiquement deux grandes familles d’explications. La première attribue l’inflation à l’augmentation des coûts de production : hausse du prix de l’énergie ou des matières premières, hausse des salaires non compensée par la productivité, coûts d’importation liés à une monnaie qui se déprécie. Les entreprises répercutent ces coûts dans leurs prix de vente pour maintenir leurs marges. Lorsque la hausse provient de prix mondiaux, comme lors d’un choc pétrolier, on parle d’inflation importée.',
            'La seconde famille voit l’origine de l’inflation dans la demande. Si la demande de biens et de services augmente plus vite que la capacité de production de l’économie, par exemple parce que des ménages puisent dans leur épargne, que les impôts baissent ou que l’État dépense davantage, les entreprises peuvent relever leurs prix. L’écart entre la demande et l’offre disponible joue alors un rôle central. Dans la pratique, les deux types de causes se combinent, ce qui rend difficile d’isoler la part de chacune, comme l’ont montré les travaux de la Banque de France sur l’épisode de 2021-2023.',
            'Une troisième lecture est monétaire. Selon la théorie quantitative de la monnaie, résumée par l’équation MV = PQ (masse monétaire × vitesse de circulation = niveau des prix × volume des transactions), une création monétaire durablement plus rapide que la croissance de la production tend à se traduire par une hausse des prix. Cette tradition est associée à Milton Friedman, qui a dirigé en 1956 l’ouvrage Studies in the Quantity Theory of Money, dans lequel Philip Cagan a analysé les hyperinflations. Les anticipations d’inflation jouent aussi un rôle : si les agents s’attendent à des prix plus élevés, ils réclament des salaires plus élevés, ce qui alimente la boucle prix-salaires.',
            'Plusieurs épisodes illustrent ces mécanismes. Aux États-Unis, la « Grande Inflation » de 1965 à 1982 a vu le taux d’inflation annuel passer de 1,6 % en 1965 à 13,5 % en 1980, dans un contexte de politique monétaire jugée trop accommodante et de chocs pétroliers. En zone euro, l’inflation a atteint 10,6 % en octobre 2022, le niveau le plus élevé depuis le début de la série harmonisée de 1997 ; l’énergie y contribuait pour 4,44 points de pourcentage, devant l’alimentation (2,74 points). La Banque de France relève que cette inflation post-pandémie n’a pas déclenché de spirale prix-salaires en France, grâce notamment à un faible degré d’indexation des salaires et à des anticipations d’inflation restées ancrées.'
          ],
          example: {
            statement: 'Un pays importe du pétrole. Son prix mondial augmente fortement, et les entreprises de transport relèvent leurs tarifs. S’agit-il d’une inflation par la demande ou par les coûts ?',
            calculation: 'La hausse vient d’abord d’un renchérissement d’un intrant (le carburant), répercuté dans les prix de vente, et non d’une demande excédentaire.',
            answer: 'Il s’agit d’une inflation par les coûts, et plus précisément d’une inflation importée. Elle peut ensuite s’amplifier si les salaires sont relevés en réaction.'
          },
          exercise: {
            question: 'Pourquoi est-il souvent difficile d’attribuer une inflation à une seule cause ?',
            answer: 'Parce que les chocs de coûts, la demande, la politique monétaire et les anticipations interagissent. Les travaux empiriques utilisent des modèles pour estimer leurs contributions, avec une part d’incertitude.'
          },
          exercises: [
            {
              question: 'Quelles sont les deux grandes familles d’explications de l’inflation présentées par la Banque de France ?',
              answer: 'L’inflation liée à la hausse des coûts de production et l’inflation liée à la demande de biens et de services.'
            },
            {
              question: 'Que représente la boucle prix-salaires ?',
              answer: 'Un enchaînement où la hausse des prix conduit à des hausses de salaires, qui augmentent les coûts des entreprises et donc les prix, et ainsi de suite.'
            },
            {
              question: 'Quel niveau l’inflation annuelle a-t-elle atteint dans la zone euro en octobre 2022 selon Eurostat ?',
              answer: '10,6 %.'
            }
          ],
          sources: [
            { title: 'Banque de France — Inflation et déflation, une voie étroite pour la stabilité des prix', url: 'https://www.banque-france.fr/system/files/2026-02/EEC_S1_E12_FR.pdf' },
            { title: 'Banque de France — Quelles sont les causes de l’inflation post-pandémie en France ? (Billet 363)', url: 'https://banque-france.fr/system/files/2024-08/Billet_363_FR.pdf' },
            { title: 'Eurostat — Inflation annuelle de la zone euro, octobre 2022', url: 'https://ec.europa.eu/eurostat/documents/2995521/15265521/2-17112022-AP-EN.pdf/' },
            { title: 'Federal Reserve Bank of St. Louis — The Great Inflation: A Historical Overview and Lessons Learned', url: 'https://www.stlouisfed.org/publications/page-one-economics/2012/10/01/the-great-inflation-a-historical-overview-and-lessons-learned' },
            { title: 'NBER Working Paper 8930 — Modern hyper- and high inflations (Cagan, 1956)', url: 'https://www.nber.org/papers/w8930.pdf' }
          ]
        }
      },
      {
        id: 'effets-inflation',
        title: 'Les effets de l’inflation : pouvoir d’achat, dettes et indexation',
        field: 'Économie · Taux d’intérêt réel, redistribution et boucle prix-salaires',
        summary: 'Comprendre qui gagne et qui perd quand les prix augmentent, et pourquoi les anticipations et l’indexation comptent.',
        lesson: {
          sections: [
            'Le premier effet de l’inflation est la baisse du pouvoir d’achat de la monnaie : pour un même revenu nominal, on achète moins de biens. Ce qui compte pour un ménage est donc l’évolution de son revenu réel, c’est-à-dire de son revenu nominal corrigé de l’inflation. En 2022, la Banque de France indique que l’inflation annuelle a atteint 8,4 % en zone euro et 5,9 % en France, et que le pouvoir d’achat des ménages français a reculé de 0,6 %. L’effet varie selon les ménages : les plus modestes consacrent une part plus grande de leur budget à l’énergie et à l’alimentation, et les revenus qui s’ajustent avec retard sont les plus exposés.',
            'L’inflation redistribue aussi des richesses, car de nombreux contrats sont fixés en valeur nominale. Le taux d’intérêt réel, approximativement égal au taux nominal moins l’inflation, indique le véritable rendement d’un placement ou le véritable coût d’un emprunt. Quand l’inflation est supérieure au taux versé sur un livret, l’épargnant perd du pouvoir d’achat. À l’inverse, un emprunteur dont le taux est fixé à l’avance voit la valeur réelle de sa dette diminuer, à condition que ses revenus suivent les prix. Une inflation plus forte que prévu avantage donc les débiteurs et pénalise les créanciers.',
            'Certains revenus sont protégés par des mécanismes d’indexation. En France, le Smic, les minima sociaux, les pensions de retraite et les loyers sont notamment revalorisés en fonction des prix. Mais l’indexation généralisée a un risque : si les salaires suivent automatiquement les prix, une hausse initiale des prix peut se transformer en spirale, la boucle prix-salaires. Pour cette raison, l’ancrage des anticipations d’inflation sur l’objectif de la banque centrale est considéré comme une condition importante de la stabilité des prix, car il limite l’amplification des chocs temporaires.',
            'Les effets de l’inflation ne sont pas tous négatifs dans l’analyse économique. Une inflation modérée et anticipée allège le poids des dettes et abaisse les taux d’intérêt réels, ce qui peut stimuler l’investissement. Mais une inflation forte et volatile rend les prix moins lisibles, complique les décisions de long terme, et peut dégrader la compétitivité-prix d’un pays, toutes choses égales par ailleurs. C’est pourquoi les banques centrales visent une inflation basse et stable plutôt que nulle : l’objectif n’est ni de supprimer toute hausse des prix, ni de laisser l’inflation s’emballer.'
          ],
          example: {
            statement: 'Un salarié obtient une hausse de salaire de 3 % alors que l’inflation est de 5 %. Que devient son pouvoir d’achat ?',
            calculation: 'Variation du salaire réel ≈ (1,03 ÷ 1,05) − 1 ≈ −0,019, soit environ −1,9 %.',
            answer: 'Son pouvoir d’achat baisse d’environ 1,9 %. L’approximation 3 % − 5 % = −2 % donne un résultat proche.'
          },
          exercise: {
            question: 'Pourquoi un épargnant peut-il perdre du pouvoir d’achat même si son livret lui verse des intérêts ?',
            answer: 'Parce que si l’inflation est supérieure au taux d’intérêt nominal, le taux réel est négatif : la valeur de l’épargne, exprimée en biens et services, diminue.'
          },
          exercises: [
            {
              question: 'Comment calcule-t-on approximativement le taux d’intérêt réel ?',
              answer: 'En soustrayant le taux d’inflation du taux d’intérêt nominal.'
            },
            {
              question: 'Qui est avantagé par une inflation plus forte que prévu : un emprunteur à taux fixe ou son prêteur ?',
              answer: 'L’emprunteur, car la valeur réelle de sa dette diminue, alors que le prêteur est remboursé en monnaie qui a perdu du pouvoir d’achat.'
            },
            {
              question: 'Pourquoi l’ancrage des anticipations d’inflation est-il important ?',
              answer: 'Parce qu’il limite la formation d’une boucle prix-salaires après un choc temporaire : si les agents croient que l’inflation reviendra à l’objectif, ils ne réclament pas de hausses durables.'
            }
          ],
          sources: [
            { title: 'Banque de France — L’inflation et la déflation (ABC de l’économie)', url: 'https://banque-france.fr/system/files/2024-08/eeb-inflation-deflation.pdf' },
            { title: 'Terra Nova — Pourquoi l’indexation des salaires sur les prix est un piège', url: 'https://tnova.fr/site/assets/files/43323/terra-nova_la-grande-conversation_pourquoi-lindexation-des-salaires-sur-les-prix-est-un-piege_281022.pdf?kxaee' },
            { title: 'Le Grand Continent — Indexation des salaires sur l’inflation : structurer un débat', url: 'https://legrandcontinent.eu/fr/2024/06/19/indexation-des-salaires-sur-linflation-structurer-un-debat/' },
            { title: 'Banque de France — Quelles sont les causes de l’inflation post-pandémie en France ? (Billet 363)', url: 'https://banque-france.fr/system/files/2024-08/Billet_363_FR.pdf' }
          ]
        }
      },
      {
        id: 'hyperinflations',
        title: 'Les hyperinflations : quand la monnaie perd sa valeur',
        field: 'Économie · Seuil de Cagan, Allemagne 1923, Hongrie 1946, Zimbabwe 2008',
        summary: 'Connaître la définition de l’hyperinflation, quelques épisodes historiques, leurs mécanismes et leurs issues.',
        lesson: {
          sections: [
            'Une hyperinflation est une inflation extrême. La définition la plus utilisée en économie est celle de Philip Cagan, publiée en 1956 : un épisode d’hyperinflation commence le mois où la hausse des prix atteint 50 % sur un mois, et se termine lorsque ce taux mensuel retombe sous 50 % et y reste au moins un an. À 50 % par mois, les prix sont multipliés par 1,5 douze fois dans l’année, soit environ 130, ce qui correspond à une hausse annuelle d’environ 12 875 %. Cette définition est donc très éloignée des taux d’inflation observés dans les économies avancées, même en période de forte inflation.',
            'L’histoire en compte des dizaines d’épisodes. Le premier est généralement situé en France pendant la Révolution, en 1795-1796, avec l’émission des assignats puis des mandats territoriaux. L’épisode le plus célèbre est celui de l’Allemagne de 1922-1923, dont le pic se situe en octobre 1923, avec une hausse des prix d’environ 29 500 % sur un mois selon Steve Hanke. L’épisode le plus extrême jamais documenté est celui de la Hongrie en 1945-1946 : en juillet 1946, les prix doublaient environ toutes les 15 heures, ce qui correspond à une hausse mensuelle de l’ordre de 41,9 quadrillions de pour cent. Le Zimbabwe (2007-2008) arrive en deuxième position, avec un doublement des prix toutes les 24,7 heures environ en novembre 2008.',
            'Les hyperinflations sont généralement associées à de très gros déficits publics financés par création monétaire, souvent dans un contexte de guerre, de sortie de guerre ou d’effondrement des institutions. Lorsque la population anticipe la perte de valeur de la monnaie, elle s’en débarrasse plus vite, ce qui accélère encore la hausse des prix. Steve Hanke souligne que le taux de change entre la monnaie locale et le dollar est un des prix les plus révélateurs pendant ces épisodes. Beaucoup d’épisodes se situent après la Seconde Guerre mondiale ou après l’éclatement de l’Union soviétique, au début des années 1990.',
            'Ces épisodes prennent fin par une stabilisation, qui associe en général un retour à l’équilibre budgétaire et un changement de régime monétaire : réforme monétaire, nouvelle monnaie, arrimage à une monnaie étrangère ou caisse d’émission (currency board). La Bulgarie, par exemple, a connu un pic de 242 % par mois en février 1997 et adopté ensuite un régime de currency board. Il faut enfin distinguer l’hyperinflation d’une inflation à deux ou trois chiffres sur l’année : des pays ont connu des inflations annuelles très élevées sans franchir le seuil de Cagan.'
          ],
          example: {
            statement: 'Une économie connaît une inflation de 50 % par mois pendant douze mois. De combien les prix sont-ils multipliés sur l’année ?',
            calculation: 'Facteur annuel = 1,5^12 ≈ 129,7. Hausse annuelle ≈ (129,7 − 1) × 100 ≈ 12 875 %.',
            answer: 'Les prix sont multipliés par environ 130 en un an, soit une hausse d’environ 12 875 %.'
          },
          exercise: {
            question: 'Pourquoi l’hyperinflation allemande de 1923 est-elle célèbre sans être la plus forte de l’histoire ?',
            answer: 'Parce qu’elle a eu un impact historique majeur, mais son taux de pic mensuel est inférieur à celui d’autres épisodes. Selon la table de Hanke et Krus, l’Allemagne se classe cinquième, derrière la Hongrie de 1946, le Zimbabwe de 2008 et d’autres épisodes.'
          },
          exercises: [
            {
              question: 'Quelle est la définition de l’hyperinflation selon Cagan (1956) ?',
              answer: 'Une hausse des prix d’au moins 50 % sur un mois. L’épisode se termine quand le taux mensuel passe sous 50 % pendant au moins un an.'
            },
            {
              question: 'Quel est l’épisode d’hyperinflation le plus extrême documenté, et à quelle vitesse les prix doublaient-ils ?',
              answer: 'La Hongrie, en juillet 1946, avec un doublement des prix environ toutes les 15 heures.'
            },
            {
              question: 'Quelles mesures accompagnent habituellement la sortie d’une hyperinflation ?',
              answer: 'Un retour à l’équilibre budgétaire et une réforme du régime monétaire (nouvelle monnaie, arrimage à une devise ou currency board).'
            }
          ],
          sources: [
            { title: 'Hanke, S. — Hyperinflation: a kaleidoscope of uses and abuses (Cato Institute)', url: 'https://cato.org/commentary/hyperinflation-kaleidoscope-uses-abuses' },
            { title: 'Hanke, S. — World Hyperinflation Table (Cato Institute)', url: 'https://clips.cato.org/sites/default/files/Hanke_MarketOracle_hyperinflation.pdf' },
            { title: 'NBER Working Paper 8930 — Modern hyper- and high inflations', url: 'https://www.nber.org/papers/w8930.pdf' },
            { title: 'Interview de Steve Hanke — Hyperinflation en Allemagne, en Hongrie et au Zimbabwe (TR Monitor)', url: 'https://www.trmonitor.net/steve-hanke-suggests-currency-board-for-turkeys-high-inflation/' }
          ]
        }
      },
      {
        id: 'deflation',
        title: 'La déflation : mécanismes, Grande Dépression et Japon',
        field: 'Économie · Dette-déflation de Fisher, États-Unis 1929-1933, déflation japonaise',
        summary: 'Comprendre pourquoi une baisse générale des prix peut être dangereuse et ce que montrent la Grande Dépression et l’expérience japonaise.',
        lesson: {
          sections: [
            'La déflation est une baisse générale et durable du niveau des prix. Elle n’est pas la même chose que la baisse du prix d’un produit, qui peut provenir de gains de productivité ou d’une technologie, ni qu’une désinflation. Elle peut sembler favorable aux consommateurs, car l’argent permet d’acheter davantage. Mais la Banque de France la qualifie de forme extrême d’une économie en manque de demande : lorsque les ménages s’attendent à des prix plus bas, ils reportent leurs achats, la demande baisse, les entreprises réduisent leur production ou leurs prix, et la spirale peut se renforcer.',
            'L’économiste américain Irving Fisher a formalisé en 1933 la théorie de la « dette-déflation ». Quand les prix baissent, la valeur réelle des dettes, fixées en monnaie, augmente, alors que les revenus nominaux diminuent. Les emprunteurs ont plus de mal à rembourser, les faillites et les défauts se multiplient, les banques sont fragilisées et le crédit se contracte, ce qui accentue la baisse des prix. Par exemple, si les prix baissent de 10 %, une dette de 100 000 € pèse en réalité environ 111 000 € de biens et de services mesurés au niveau de prix initial.',
            'La Grande Dépression en fournit le cas de référence. Aux États-Unis, l’indice des prix à la consommation a baissé pendant 40 mois consécutifs, de décembre 1929 à mars 1933 ; selon les indices, le niveau des prix a reculé d’environ 20 à 25 % sur 1929-1932. À la fin de 1933, le nombre de banques en activité avait diminué de près de moitié par rapport à 1929. Les économistes débattent cependant du rôle exact de la déflation : une étude de la Réserve fédérale de Minneapolis relève qu’une baisse des prix comparable, d’environ 20 %, en 1920-1922 s’était accompagnée d’un recul de la production bien moindre, ce qui invite à considérer aussi les faillites bancaires et la contraction monétaire.',
            'Le Japon est l’autre grand cas. Après l’éclatement de la bulle financière du début des années 1990, l’inflation sous-jacente y est passée sous 1 % dès 1994, et le pays a connu pendant une longue période des prix stagnants ou en légère baisse. Dans un discours de 2017, un représentant de la Banque du Japon décrit une déflation qui avait duré près de quinze ans avant le lancement des grandes mesures d’assouplissement de 2013. L’expérience japonaise montre qu’une déflation modérée peut s’installer durablement avec une croissance faible, et que les politiques conventionnelles de baisse des taux se heurtent à la borne zéro, ce qui a conduit à des politiques non conventionnelles détaillées dans les chapitres suivants.'
          ],
          example: {
            statement: 'Une famille a une dette de 100 000 € à taux fixe. Les prix baissent de 10 % et les revenus nominaux baissent aussi. Pourquoi la dette devient-elle plus lourde en termes réels ?',
            calculation: 'Avec des prix à 90 % de leur niveau initial, 100 000 € permettent d’acheter ce qui valait 100 000 ÷ 0,9 ≈ 111 111 € auparavant. Si les revenus baissent, il faut en plus consacrer une plus grande part du revenu au remboursement.',
            answer: 'La dette nominale ne change pas, mais sa valeur réelle augmente d’environ 11 %, alors que le revenu diminue : c’est le mécanisme de la dette-déflation de Fisher.'
          },
          exercise: {
            question: 'Pourquoi les ménages reportent-ils leurs achats lorsqu’ils anticipent une baisse des prix ?',
            answer: 'Parce qu’ils peuvent acheter moins cher plus tard. Mais si tout le monde attend, la demande baisse, ce qui pèse sur les revenus des entreprises et peut encourager de nouvelles baisses de prix.'
          },
          exercises: [
            {
              question: 'Que désigne la « dette-déflation » d’Irving Fisher ?',
              answer: 'Le mécanisme par lequel la baisse des prix alourdit la valeur réelle des dettes, ce qui provoque des défauts, fragilise les banques et accentue la contraction de l’activité et des prix.'
            },
            {
              question: 'Pendant combien de mois l’indice des prix à la consommation américain a-t-il baissé entre décembre 1929 et mars 1933 ?',
              answer: 'Pendant 40 mois consécutifs.'
            },
            {
              question: 'Une étude de la Réserve fédérale de Minneapolis compare 1920-1922 et 1929-1932. Que cherche-t-elle à montrer ?',
              answer: 'Que des baisses de prix d’ampleur comparable (environ 20 %) n’ont pas eu les mêmes effets sur la production, ce qui suggère que la déflation seule n’explique pas la gravité de la Grande Dépression.'
            }
          ],
          sources: [
            { title: 'Texas A&M Real Estate Research Center — Deflation and the Great Depression', url: 'https://trerc.tamu.edu/?p=20749' },
            { title: 'NBER Working Paper 3174 — Was the deflation of the Great Depression unanticipated? (Cecchetti)', url: 'https://www.nber.org/system/files/working_papers/w3174/w3174.pdf' },
            { title: 'Federal Reserve Bank of Minneapolis — Cole & Ohanian, Money and banking shocks in the Great Depression', url: 'https://www.minneapolisfed.org:443/research/sr/sr270.pdf' },
            { title: 'Federal Reserve Bank of New York — Japan’s Experience with Yield Curve Control', url: 'https://libertystreeteconomics.newyorkfed.org/2020/06/japans-experience-with-yield-curve-control/' },
            { title: 'Banque du Japon (via BRI) — Japan’s Economy and Monetary Policy (2017)', url: 'https://www.bis.org/review/r170316a.pdf' }
          ]
        }
      },
      {
        id: 'outils-contre-inflation',
        title: 'Les outils pour lutter contre l’inflation',
        field: 'Économie · Taux directeurs, Volcker, BCE 2022-2023, désindexation et blocage des prix',
        summary: 'Comprendre comment les banques centrales et les États freinent l’inflation, et quels sont les coûts et les limites de ces outils.',
        lesson: {
          sections: [
            'L’outil principal contre l’inflation est la politique monétaire. La banque centrale relève ses taux directeurs : le crédit devient plus coûteux, la consommation et l’investissement ralentissent, la demande diminue et la pression sur les prix se réduit. L’action sur les taux agit aussi sur les anticipations, car une banque centrale crédible convainc les agents que l’inflation reviendra vers son objectif. La BCE a confirmé en 2021 que l’ensemble de ses taux d’intérêt directeurs reste son principal instrument de politique monétaire, avec une cible d’inflation de 2 % à moyen terme.',
            'L’épisode de référence est le choc Volcker. À partir d’août 1979, Paul Volcker, président de la Réserve fédérale américaine, relève fortement les taux : le taux des fonds fédéraux passe d’environ 10 % début 1979 à près de 19 % mi-1981. L’inflation, qui avait atteint 13,5 % en moyenne annuelle en 1980, retombe à environ 3,7 % en 1983. Le coût est lourd : la récession de 1981-1982 est la plus sévère depuis la Grande Dépression, avec un chômage de 10,8 % fin 1982. Plus récemment, la BCE a mis fin à ses achats nets d’actifs puis relevé ses taux de 450 points de base en dix réunions consécutives, ce qui a contribué à ramener l’inflation vers la cible, atteinte en juin 2025 selon un discours publié par la Banque des règlements internationaux.',
            'D’autres outils agissent sur les coûts et les revenus. En France, face à une inflation de l’ordre de 12 % en 1982, le gouvernement décide en juin 1982 un blocage des prix et des salaires, puis engage une politique de rigueur et de désindexation des salaires pour casser la boucle prix-salaires ; l’inflation tombe à 3,1 % en 1988. La politique budgétaire peut aussi freiner la demande, par une baisse des dépenses publiques ou une hausse des impôts. Lors de la crise énergétique de 2021-2023, la France a utilisé un bouclier tarifaire sur les prix de l’énergie, qui a limité la hausse des prix à la consommation.',
            'Ces outils ont des limites. Une hausse des taux agit avec retard et pèse sur l’emploi et sur les emprunteurs. Face à un choc d’offre, comme la flambée de l’énergie, elle ne produit pas davantage de pétrole ou de gaz : elle ne peut que freiner la demande. Les blocages de prix et la désindexation ont un coût social et perdent leur efficacité si les agents anticipent leur fin. Enfin, l’indépendance de la banque centrale est un élément de crédibilité : la Banque de France n’était pas indépendante en 1982, alors qu’elle fait partie aujourd’hui d’une union monétaire gérée par la BCE.'
          ],
          example: {
            statement: 'Un taux directeur est fixé à 3 % alors que l’inflation est de 5 %. La politique monétaire est-elle restrictive ? Que faudrait-il pour qu’elle le devienne ?',
            calculation: 'Taux réel ≈ 3 % − 5 % = −2 %. Un taux réel négatif signifie que le crédit reste peu coûteux en termes réels.',
            answer: 'Elle reste plutôt favorable à la demande. Pour devenir restrictive, il faudrait un taux nominal supérieur à l’inflation attendue, ou une baisse de l’inflation. Ce raisonnement ne tient pas compte des autres effets de la politique monétaire.'
          },
          exercise: {
            question: 'Pourquoi une hausse des taux est-elle moins efficace face à un choc d’offre que face à un excès de demande ?',
            answer: 'Parce qu’elle freine la demande, mais ne réduit pas directement le coût de l’énergie ou des matières premières à l’origine de la hausse des prix. Elle peut alors coûter de l’activité sans traiter la cause.'
          },
          exercises: [
            {
              question: 'Quelle est la hausse des taux de la BCE entre 2022 et 2023 selon la Banque des règlements internationaux ?',
              answer: '450 points de base, en dix réunions consécutives.'
            },
            {
              question: 'Que s’est-il passé aux États-Unis en 1981-1982 après la politique de Volcker ?',
              answer: 'Une récession sévère, avec un chômage de 10,8 % fin 1982, mais aussi une baisse nette de l’inflation, revenue autour de 3,7 % en 1983.'
            },
            {
              question: 'Qu’est-ce que la désindexation des salaires ?',
              answer: 'La rupture du lien automatique entre l’évolution des salaires et celle des prix, destinée à limiter la boucle prix-salaires. En France, elle a été engagée en 1982-1983.'
            }
          ],
          sources: [
            { title: 'BCE — Communiqué du 8 juillet 2021 : nouvelle stratégie de politique monétaire', url: 'https://www.ecb.europa.eu/press/pr/date/2021/html/ecb.pr210708%7Edc78cc4b0d.en.html' },
            { title: 'Federal Reserve History — Anti-inflation measures (1979-1982)', url: 'https://federalreservehistory.org/essay/anti-inflation-measures' },
            { title: 'Federal Reserve Bank of St. Louis — The Great Inflation: A Historical Overview and Lessons Learned', url: 'https://www.stlouisfed.org/publications/page-one-economics/2012/10/01/the-great-inflation-a-historical-overview-and-lessons-learned' },
            { title: 'BRI — Discours sur la politique monétaire de la BCE depuis la révision stratégique de 2021', url: 'https://www.bis.org/review/r250710i.pdf' },
            { title: 'Encyclopædia Universalis — Le revirement des années 1980 (rigueur, blocage et désindexation)', url: 'https://www.universalis.fr/encyclopedie/france-le-territoire-et-les-hommes-un-siecle-de-politique-economique/4-le-revirement-des-annees-1980-et-ses-suites/' },
            { title: 'Banque de France — Billet 363 : bouclier tarifaire et inflation post-pandémie', url: 'https://banque-france.fr/system/files/2024-08/Billet_363_FR.pdf' }
          ]
        }
      },
      {
        id: 'outils-contre-deflation',
        title: 'Les outils pour lutter contre la déflation',
        field: 'Économie · Cible de 2 %, taux négatifs, assouplissement quantitatif, forward guidance',
        summary: 'Comprendre pourquoi les banques centrales visent une inflation positive et quels outils non conventionnels elles utilisent près de la borne zéro.',
        lesson: {
          sections: [
            'La première protection contre la déflation est préventive : les banques centrales ne visent pas une inflation nulle, mais une inflation positive et modérée. La Réserve fédérale a adopté en janvier 2012 un objectif explicite de 2 % pour l’inflation mesurée par l’indice des dépenses de consommation personnelle. La BCE a adopté en juillet 2021 une cible de 2 % à moyen terme, qualifiée de symétrique, c’est-à-dire que les écarts à la hausse comme à la baisse sont jugés également indésirables. Une inflation cible de 2 % laisse une marge qui limite le risque de tomber en déflation.',
            'Lorsque l’économie s’affaiblit, la banque centrale baisse d’abord ses taux directeurs. Mais ils rencontrent une borne inférieure effective : on ne peut pas les baisser sans limite, car les agents pourraient préférer détenir des espèces. Si les prix sont attendus en baisse de 1 %, un taux nominal de 0 % correspond à un taux réel de +1 %, ce qui reste restrictif. C’est pourquoi certaines banques centrales ont franchi le seuil de zéro. La BCE a abaissé son taux de la facilité de dépôt à −0,1 % le 11 juin 2014 puis à −0,2 % en septembre 2014, devenant la première banque centrale d’une grande zone monétaire à adopter des taux négatifs, et la Banque du Japon a appliqué un taux de −0,1 % à une partie des réserves en janvier 2016.',
            'Quand les taux sont proches de zéro, les banques centrales utilisent des instruments non conventionnels. L’assouplissement quantitatif consiste à acheter massivement des titres, notamment des obligations publiques, pour injecter des liquidités et faire baisser les taux à long terme. La Banque du Japon l’a mis en œuvre de mars 2001 à mars 2006, puis, à partir d’avril 2013, avec le programme QQE assorti d’un engagement sur la cible de 2 %. S’y ajoutent la forward guidance (l’engagement sur la trajectoire future des taux), les opérations de refinancement à plus long terme de la BCE et, au Japon, le contrôle de la courbe des taux introduit en septembre 2016 pour cibler le rendement des obligations à dix ans autour de zéro.',
            'La politique budgétaire peut compléter la politique monétaire en soutenant la demande par des dépenses ou des baisses d’impôts, notamment quand les taux ne peuvent plus baisser. Ces outils ont des limites. Au Japon, ces politiques ont duré de nombreuses années avant que l’inflation ne s’éloigne durablement de zéro, et la Banque du Japon n’a mis fin aux taux négatifs, au contrôle de la courbe des taux et aux achats d’actifs risqués qu’en mars 2024. Ils ne garantissent pas non plus que les anticipations d’inflation remontent. D’où l’intérêt de la crédibilité de la cible : plus les agents croient à un retour de l’inflation autour de 2 %, plus la déflation est improbable.'
          ],
          example: {
            statement: 'Les agents s’attendent à une baisse des prix de 1 % par an et le taux directeur est à 0 %. Quel est le taux d’intérêt réel, et pourquoi cela pose-t-il problème ?',
            calculation: 'Taux réel ≈ taux nominal − inflation attendue = 0 % − (−1 %) = +1 %.',
            answer: 'Le taux réel est de +1 %, donc plutôt restrictif alors que l’économie manque de demande. C’est un des motifs de recours aux taux négatifs et aux mesures non conventionnelles près de la borne inférieure.'
          },
          exercise: {
            question: 'Pourquoi les banques centrales visent-elles environ 2 % d’inflation et non 0 % ?',
            answer: 'Pour garder une marge de sécurité face à la déflation et à la borne inférieure des taux : avec une inflation cible positive, les taux directeurs disposent de plus de latitude à la baisse, et les coûts d’une déflation sont jugés plus élevés que ceux d’une faible inflation.'
          },
          exercises: [
            {
              question: 'Que signifie qu’une cible d’inflation est « symétrique » dans la stratégie de la BCE de 2021 ?',
              answer: 'Que les écarts à la hausse et à la baisse par rapport à 2 % sont jugés également indésirables.'
            },
            {
              question: 'Quel pays a lancé un programme d’assouplissement quantitatif en mars 2001, et jusqu’à quand ?',
              answer: 'Le Japon, par la Banque du Japon, jusqu’en mars 2006.'
            },
            {
              question: 'Qu’est-ce que la forward guidance ?',
              answer: 'Un engagement de la banque centrale sur la trajectoire future de ses taux, destiné à influencer les anticipations des agents et les taux à long terme.'
            }
          ],
          sources: [
            { title: 'Federal Reserve — Déclaration du 25 janvier 2012 sur les objectifs de long terme (2 %)', url: 'https://www.federalreserve.gov/newsevents/pressreleases/monetary20120125c.htm' },
            { title: 'Federal Reserve Bank of St. Louis — The Fed’s Inflation Target: Why 2 Percent?', url: 'https://www.stlouisfed.org/open-vault/2019/january/fed-inflation-target-2-percent' },
            { title: 'BCE — Communiqué du 8 juillet 2021 : cible symétrique de 2 % et instruments', url: 'https://www.ecb.europa.eu/press/pr/date/2021/html/ecb.pr210708%7Edc78cc4b0d.en.html' },
            { title: 'Banque nationale de Belgique — Le taux négatif de la facilité de dépôt (2014)', url: 'https://nbb.be/en/node/11203' },
            { title: 'Banque du Japon — Unconventional monetary policy measures from the late 1990s', url: 'https://www.boj.or.jp/en/mopo/outline/bpreview/ref.htm' },
            { title: 'Federal Reserve Bank of New York — Japan’s Experience with Yield Curve Control', url: 'https://libertystreeteconomics.newyorkfed.org/2020/06/japans-experience-with-yield-curve-control/' }
          ]
        }
      }
    ]
  },

]
