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
{
  id: 'Macroéconomie',
  title: 'La macroéconomie',
  note: 'Six chapitres approfondis sur les agrégats macroéconomiques, la croissance, les fluctuations et le marché du travail, les prix, les politiques économiques et les échanges extérieurs. Les indicateurs sont des mesures construites selon des conventions statistiques : ils éclairent l’économie sans résumer à eux seuls le bien-être, les inégalités ou toutes les dimensions de l’activité.',
  chapters: [
    {
      id: 'mesurer-activite-economique',
      title: 'Mesurer l’activité économique : PIB, valeur ajoutée et revenu',
      field: 'Macroéconomie · Comptabilité nationale et principaux agrégats',
      summary: 'Définir le produit intérieur brut, comprendre ses trois approches comptables et distinguer PIB nominal, PIB en volume et limites de cet indicateur.',
      lesson: {
        sections: [
          'La macroéconomie étudie l’économie à l’échelle agrégée : production totale, revenus, dépenses, emploi, niveau général des prix et relations avec le reste du monde. Elle s’appuie notamment sur la comptabilité nationale, un système cohérent de définitions et de comptes qui permet de comparer des périodes et, avec prudence, des économies. Les agrégats dépendent de conventions statistiques explicites ; ils ne sont pas des observations directes et exhaustives de chaque activité.',
          'Le produit intérieur brut (PIB) mesure la valeur de la production finale réalisée sur le territoire économique pendant une période donnée. Dans l’approche par la production, il correspond à la somme des valeurs ajoutées brutes des unités productrices résidentes, augmentée des impôts sur les produits et diminuée des subventions sur les produits. La valeur ajoutée d’une unité est la valeur de sa production diminuée de ses consommations intermédiaires. Cette méthode évite de compter plusieurs fois les biens intermédiaires incorporés dans les produits finaux.',
          'Le PIB peut aussi être calculé par les dépenses : consommation finale + formation brute de capital + exportations − importations, avec les composantes et ajustements prévus par la comptabilité nationale. Les importations sont soustraites parce qu’elles peuvent déjà être incluses dans la consommation, l’investissement ou les dépenses publiques, alors qu’elles ne sont pas produites sur le territoire. Dans l’approche par les revenus, le PIB correspond aux revenus primaires engendrés par la production, notamment la rémunération des salariés, l’excédent brut d’exploitation, le revenu mixte et les impôts nets de subventions sur la production et les importations. En pratique, les estimations issues des trois approches sont rapprochées à partir de sources statistiques distinctes.',
          'Le PIB nominal évalue la production aux prix de la période observée : il peut augmenter parce que les quantités produites progressent, parce que les prix montent, ou pour ces deux raisons à la fois. Le PIB en volume vise à isoler l’évolution des quantités en neutralisant les variations de prix selon les méthodes de comptabilité nationale. Le taux de croissance réel se calcule à partir de l’évolution du PIB en volume entre deux périodes comparables. Les séries trimestrielles peuvent être corrigées des variations saisonnières et des effets calendaires ; il faut donc vérifier la définition de la série avant de comparer des chiffres.',
          'Le PIB est un indicateur de production, pas une mesure complète du bien-être. Il ne décrit pas à lui seul la répartition des revenus, la qualité des services, le travail domestique non rémunéré, les loisirs, la sécurité économique ou les dommages environnementaux. Le PIB par habitant divise le PIB par la population et fournit un repère moyen, mais il ne dit pas comment le revenu est réparti. Pour une analyse plus complète, on le complète avec des indicateurs de revenu disponible, de pauvreté, d’inégalités, de santé, d’éducation et d’environnement.'
        ],
        example: {
          statement: 'Une économie produit 1 000 unités d’un bien à 10 euros l’unité en année 1, puis 1 000 unités à 12 euros en année 2. Que devient la valeur nominale de cette production et que peut-on conclure sur le volume produit ?',
          calculation: 'Année 1 : 1 000 × 10 = 10 000 euros. Année 2 : 1 000 × 12 = 12 000 euros. La valeur nominale augmente de 2 000 euros, soit 20 %. La quantité reste égale à 1 000 unités.',
          answer: 'La valeur nominale augmente de 20 %, mais la quantité produite ne change pas dans cet exemple. On ne peut donc pas interpréter la hausse nominale comme une hausse du volume réel : elle provient ici uniquement de la hausse du prix.'
        },
        exercise: {
          question: 'Pourquoi les consommations intermédiaires sont-elles déduites de la production pour calculer la valeur ajoutée ?',
          answer: 'Pour ne pas compter plusieurs fois la valeur des biens et services utilisés dans les étapes successives de production. La valeur ajoutée mesure la contribution propre de chaque producteur.'
        },
        exercises: [
          {
            question: 'Que mesure le PIB ?',
            answer: 'La valeur de la production finale réalisée par les unités productrices résidentes sur le territoire économique pendant une période donnée, selon les conventions de la comptabilité nationale.'
          },
          {
            question: 'Pourquoi les importations sont-elles soustraites dans l’approche du PIB par les dépenses ?',
            answer: 'Parce que les biens et services importés peuvent déjà être comptés dans les dépenses intérieures, mais ne sont pas produits sur le territoire national.'
          },
          {
            question: 'Une hausse du PIB nominal garantit-elle une hausse de la production réelle ?',
            answer: 'Non. Elle peut provenir d’une hausse des prix, d’une hausse des volumes ou des deux. Il faut examiner le PIB en volume pour suivre l’évolution réelle de la production.'
          }
        ],
        sources: [
          {
            title: 'Insee — Produit intérieur brut (PIB) et ses composantes',
            url: 'https://www.insee.fr/fr/statistiques/8682030'
          },
          {
            title: 'Insee — Principaux indicateurs économiques',
            url: 'https://www.insee.fr/fr/statistiques/4277765'
          },
          {
            title: 'Bureau of Economic Analysis — What to Know About GDP',
            url: 'https://www.bea.gov/resources/learning-center/what-to-know-gdp'
          },
          {
            title: 'Nations unies — System of National Accounts',
            url: 'https://unstats.un.org/unsd/nationalaccount/sna.asp'
          }
        ]
      }
    },
    {
      id: 'croissance-productivite-cycles',
      title: 'Croissance économique, productivité et fluctuations conjoncturelles',
      field: 'Macroéconomie · Croissance de long terme et cycles de court terme',
      summary: 'Distinguer croissance et fluctuations, expliquer le rôle du travail, du capital et de la productivité, puis analyser les limites et les incertitudes des explications de la croissance.',
      lesson: {
        sections: [
          'La croissance économique désigne généralement l’augmentation durable de la production réelle d’une économie, mesurée notamment par le taux de croissance du PIB en volume. Il faut distinguer cette tendance de long terme des fluctuations conjoncturelles, qui correspondent aux variations de l’activité autour de sa trajectoire. Une économie peut connaître une croissance positive tout en ralentissant ; inversement, une reprise peut survenir après une contraction sans que le niveau de production ait immédiatement retrouvé sa trajectoire antérieure.',
          'La production dépend de plusieurs facteurs. Le travail renvoie à la quantité de travail mobilisée et à ses caractéristiques ; le capital comprend les équipements, les bâtiments et d’autres actifs utilisés pour produire. Les compétences, l’organisation, les infrastructures et les connaissances influencent également la production. La productivité mesure le rapport entre une production et les ressources mobilisées. La productivité du travail peut être mesurée par la production par heure travaillée ou par personne en emploi ; ces deux mesures ne sont pas identiques si la durée moyenne du travail varie.',
          'La productivité globale des facteurs est une mesure résiduelle de l’efficacité avec laquelle le travail et le capital sont combinés dans un cadre de comptabilité de la croissance. Elle peut refléter le progrès technique, mais aussi des changements d’organisation, la qualité des facteurs, l’utilisation des capacités, des erreurs de mesure ou des éléments omis par le modèle. Il serait donc incorrect de l’interpréter automatiquement comme une mesure pure de l’innovation. L’investissement peut accroître le capital productif, tandis que la recherche, la diffusion des connaissances, la formation et la concurrence peuvent contribuer à la productivité, selon les institutions et les secteurs concernés.',
          'À court terme, la demande globale — consommation, investissement, dépenses publiques et demande extérieure nette — peut varier rapidement. Une baisse de confiance, un resserrement du crédit, un choc énergétique ou une chute de la demande étrangère peut réduire la production et l’emploi. À l’inverse, une hausse des dépenses ou des exportations peut soutenir l’activité, si les capacités de production et les conditions de financement le permettent. L’ampleur des effets dépend de la situation initiale, des réactions des ménages et des entreprises, des importations, de la politique économique et des anticipations.',
          'Les cycles économiques ne suivent pas un calendrier fixe et les données sont révisées lorsque de nouvelles informations arrivent. Une récession est souvent décrite comme une baisse significative de l’activité, mais les organismes statistiques et les pays n’utilisent pas tous une définition opérationnelle identique. Deux trimestres consécutifs de recul du PIB réel constituent une règle pratique fréquemment citée, mais ne forment pas une définition universelle suffisante. Pour analyser la conjoncture, il faut croiser le PIB avec l’emploi, les heures travaillées, la consommation, l’investissement, la production industrielle et les enquêtes de confiance.'
        ],
        example: {
          statement: 'Le PIB en volume passe de 500 milliards d’euros à 510 milliards d’euros entre deux années. Quel est son taux de croissance sur cette période ?',
          calculation: 'Taux de croissance = ((510 − 500) / 500) × 100 = 2 %.',
          answer: 'Le PIB en volume a augmenté de 2 %. Cette variation décrit la croissance mesurée sur la période considérée ; elle ne permet pas, à elle seule, d’identifier les causes de cette hausse ni sa répartition entre les habitants.'
        },
        exercise: {
          question: 'Pourquoi faut-il distinguer la croissance de long terme des fluctuations conjoncturelles ?',
          answer: 'La croissance de long terme concerne l’évolution durable des capacités productives et de la production réelle, tandis que les fluctuations conjoncturelles correspondent aux variations plus courtes de l’activité autour de sa trajectoire.'
        },
        exercises: [
          {
            question: 'Comment peut-on mesurer la productivité du travail ?',
            answer: 'Par exemple en divisant la production réelle par le nombre d’heures travaillées, ou par le nombre de personnes en emploi. Il faut préciser la mesure utilisée.'
          },
          {
            question: 'La productivité globale des facteurs mesure-t-elle uniquement le progrès technique ?',
            answer: 'Non. C’est une mesure résiduelle qui peut refléter le progrès technique, mais aussi la qualité des facteurs, l’organisation, l’utilisation des capacités et des erreurs de mesure.'
          },
          {
            question: 'Deux trimestres consécutifs de baisse du PIB constituent-ils une définition universelle de la récession ?',
            answer: 'Non. C’est une règle pratique souvent utilisée, mais les définitions opérationnelles peuvent varier selon les organismes et les pays.'
          }
        ],
        sources: [
          {
            title: 'OCDE — Measuring productivity',
            url: 'https://www.oecd.org/en/topics/measuring-productivity.html'
          },
          {
            title: 'Banque mondiale — World Development Indicators',
            url: 'https://databank.worldbank.org/source/world-development-indicators'
          },
          {
            title: 'FMI — World Economic Outlook',
            url: 'https://www.imf.org/en/Publications/WEO'
          },
          {
            title: 'Insee — Comptes nationaux',
            url: 'https://www.insee.fr/fr/information/2417794'
          }
        ]
      }
    },
    {
      id: 'emploi-chomage-marche-travail',
      title: 'Emploi, chômage et fonctionnement du marché du travail',
      field: 'Macroéconomie · Population active, emploi et sous-utilisation du travail',
      summary: 'Comprendre les catégories statistiques du marché du travail, calculer les taux principaux et expliquer pourquoi le chômage dépend de facteurs conjoncturels et structurels.',
      lesson: {
        sections: [
          'Le marché du travail met en relation les personnes qui offrent leur travail et les organisations qui souhaitent recruter. Les résultats observés dépendent de la demande de travail des employeurs, des compétences disponibles, des salaires, des conditions de travail, des institutions, de la démographie et de la conjoncture. Il ne s’agit pas d’un marché parfaitement homogène : les métiers, les régions, les qualifications et les conditions d’emploi diffèrent, ce qui peut créer des difficultés de recrutement et de recherche d’emploi simultanées.',
          'Dans les définitions statistiques internationales, la population en âge de travailler est répartie selon des critères précis entre personnes en emploi, personnes au chômage et personnes hors de la population active. Le chômage ne désigne donc pas toutes les personnes sans emploi. Selon la définition du Bureau international du Travail, une personne au chômage n’a pas d’emploi, est disponible pour travailler et a effectué des démarches de recherche d’emploi pendant la période de référence, sous réserve des règles statistiques applicables. Les personnes qui souhaitent travailler mais ne satisfont pas à tous ces critères peuvent être classées parmi les personnes hors population active, notamment dans le halo autour du chômage en France.',
          'Le taux de chômage correspond au nombre de chômeurs rapporté à la population active, multiplié par 100. Le taux d’emploi rapporte le nombre de personnes en emploi à une population de référence définie, souvent la population d’un groupe d’âge. Le taux d’activité rapporte la population active à cette même population de référence. Ces indicateurs répondent à des questions différentes. Le taux de chômage peut baisser parce que des personnes trouvent un emploi, mais aussi parce que certaines cessent de chercher et sortent de la population active ; il doit donc être interprété avec le taux d’emploi et le taux d’activité.',
          'Le chômage conjoncturel est lié aux variations de l’activité économique : lorsque les entreprises vendent moins, elles peuvent réduire les recrutements ou l’emploi. Le chômage structurel renvoie notamment aux décalages entre les compétences recherchées et disponibles, à la localisation des emplois, aux institutions et au fonctionnement des appariements entre offres et demandes. La distinction est analytique : dans les faits, plusieurs mécanismes peuvent agir ensemble et leur importance varie selon les périodes. Les politiques de formation, d’accompagnement, de mobilité, de développement de l’activité et les règles du marché du travail peuvent avoir des effets différents selon les publics et les contextes.',
          'Les statistiques du chômage ne décrivent pas entièrement la qualité de l’emploi. Le sous-emploi, le temps partiel subi, la précarité, les heures travaillées, les rémunérations et les conditions de travail apportent des informations complémentaires. Les comparaisons internationales exigent de vérifier les définitions, les tranches d’âge, les méthodes d’enquête et les périodes. Les données administratives d’inscription auprès d’un service public de l’emploi ne sont pas équivalentes au chômage mesuré par enquête selon la définition internationale.'
        ],
        example: {
          statement: 'Une population active compte 2 000 personnes, dont 160 chômeurs selon la définition statistique retenue. Quel est le taux de chômage ?',
          calculation: 'Taux de chômage = (160 / 2 000) × 100 = 8 %.',
          answer: 'Le taux de chômage est de 8 %. Le dénominateur est la population active, et non l’ensemble de la population en âge de travailler.'
        },
        exercise: {
          question: 'Pourquoi le taux de chômage doit-il être analysé avec le taux d’emploi et le taux d’activité ?',
          answer: 'Parce que le taux de chômage peut évoluer lorsque des personnes entrent dans la population active ou en sortent, sans que toutes ces variations correspondent à une création ou une destruction d’emploi. Les autres taux donnent une vision complémentaire.'
        },
        exercises: [
          {
            question: 'Une personne sans emploi est-elle toujours comptée comme chômeuse ?',
            answer: 'Non. Il faut satisfaire aux critères statistiques retenus, notamment concernant la recherche d’emploi et la disponibilité. Sinon, la personne peut être classée hors de la population active.'
          },
          {
            question: 'Quelle est la différence entre taux de chômage et taux d’emploi ?',
            answer: 'Le taux de chômage rapporte les chômeurs à la population active ; le taux d’emploi rapporte les personnes en emploi à une population de référence définie.'
          },
          {
            question: 'Le chômage conjoncturel et le chômage structurel sont-ils toujours indépendants ?',
            answer: 'Non. Ils distinguent des mécanismes, mais plusieurs facteurs peuvent se combiner et se renforcer selon la situation économique.'
          }
        ],
        sources: [
          {
            title: 'Insee — Chômeur au sens du Bureau international du Travail',
            url: 'https://www.insee.fr/fr/metadonnees/definition/c1129'
          },
          {
            title: 'Insee — Taux de chômage (BIT)',
            url: 'https://www.insee.fr/fr/metadonnees/definition/c1475'
          },
          {
            title: 'Eurostat — Labour market',
            url: 'https://ec.europa.eu/eurostat/web/labour-market'
          },
          {
            title: 'OCDE — Employment',
            url: 'https://www.oecd.org/en/topics/employment.html'
          }
        ]
      }
    },
    {
      id: 'inflation-prix-pouvoir-achat',
      title: 'Inflation, niveau des prix et pouvoir d’achat',
      field: 'Macroéconomie · Indices de prix, inflation et anticipations',
      summary: 'Définir l’inflation, distinguer variation des prix et niveau des prix, étudier les mécanismes de transmission et comprendre les limites des indices moyens.',
      lesson: {
        sections: [
          'L’inflation est une hausse du niveau général des prix sur une période donnée, mesurée à l’aide d’un indice de prix. Elle ne signifie pas que tous les prix augmentent au même rythme : certains peuvent monter, d’autres rester stables ou diminuer. Une baisse du taux d’inflation correspond à une hausse des prix plus lente ; elle ne signifie pas nécessairement que le niveau général des prix baisse. Une diminution durable du niveau général des prix est appelée déflation. Il faut aussi distinguer l’inflation annuelle, qui compare un mois à celui de l’année précédente, de l’évolution mensuelle.',
          'L’indice des prix à la consommation suit l’évolution des prix d’un panier de biens et services consommés par les ménages, pondérés selon leur importance dans la consommation. En France, l’Insee publie l’indice des prix à la consommation (IPC) ; pour les comparaisons harmonisées dans l’Union européenne, l’indice des prix à la consommation harmonisé (IPCH) applique une méthodologie commune. Ces indices sont des moyennes statistiques. L’inflation effectivement ressentie par un ménage peut différer en fonction de ses dépenses, de sa situation géographique, de son logement et de ses habitudes de consommation.',
          'L’inflation peut avoir plusieurs origines qui se combinent. Une demande globale supérieure aux capacités de production peut exercer une pression à la hausse sur les prix. Une augmentation des coûts de production — énergie, matières premières, transport ou salaires si elle dépasse durablement les gains de productivité — peut également se transmettre aux prix. Les variations du taux de change influencent le prix en monnaie nationale des biens importés. Les marges, les contrats, les anticipations et le degré de concurrence affectent la vitesse et l’ampleur de la transmission ; aucun facteur unique n’explique tous les épisodes inflationnistes.',
          'Le pouvoir d’achat dépend du revenu disponible et du niveau des prix. Si le revenu nominal augmente moins vite que les prix du panier consommé, le pouvoir d’achat correspondant diminue ; s’il augmente plus vite, il progresse, toutes choses égales par ailleurs. Il faut distinguer les évolutions moyennes de la situation de chaque ménage et tenir compte des prélèvements, prestations et dépenses contraintes. L’inflation redistribue également le pouvoir d’achat entre agents selon leurs revenus, leur capacité à ajuster les prix ou les salaires, et la nature des contrats nominaux qu’ils détiennent.',
          'Les banques centrales cherchent généralement à maintenir l’inflation faible et stable, mais leur mandat et leur stratégie diffèrent selon les juridictions. La Banque centrale européenne vise une inflation de 2 % à moyen terme, mesurée par l’IPCH pour la zone euro ; cet objectif est symétrique, c’est-à-dire que des écarts durables à la hausse comme à la baisse sont considérés comme indésirables. Cet objectif n’implique pas que l’inflation soit exactement égale à 2 % chaque mois. Les décisions monétaires tiennent compte des délais de transmission, des anticipations, de l’activité et des risques entourant les perspectives de prix.'
        ],
        example: {
          statement: 'Un indice de prix passe de 120 à 126 entre deux périodes. Quel est le taux d’inflation sur cette période, si ces indices sont comparables ?',
          calculation: 'Taux de variation = ((126 − 120) / 120) × 100 = 5 %.',
          answer: 'L’indice a augmenté de 5 %. Cela signifie que le niveau de prix représenté par cet indice a augmenté de 5 % sur la période ; cela ne signifie pas que chaque prix individuel a progressé de 5 %.'
        },
        exercise: {
          question: 'Quelle est la différence entre une baisse de l’inflation et une déflation ?',
          answer: 'Une baisse de l’inflation signifie que les prix augmentent moins vite qu’auparavant. La déflation correspond à une baisse du niveau général des prix.'
        },
        exercises: [
          {
            question: 'Pourquoi l’inflation ressentie par un ménage peut-elle différer de l’indice moyen ?',
            answer: 'Parce que la composition de ses dépenses et les pondérations de son panier peuvent différer de ceux du panier moyen utilisé pour calculer l’indice.'
          },
          {
            question: 'Si le revenu nominal augmente de 3 % et que les prix du panier pertinent augmentent de 5 %, que peut-on conclure approximativement ?',
            answer: 'Le pouvoir d’achat associé à ce panier diminue approximativement de 2 % en points de pourcentage. Le calcul exact du taux réel est (1,03 / 1,05 − 1) × 100, soit environ −1,90 %.'
          },
          {
            question: 'Quel objectif d’inflation la BCE vise-t-elle à moyen terme pour la zone euro ?',
            answer: 'La BCE vise une inflation de 2 % à moyen terme, mesurée par l’indice des prix à la consommation harmonisé.'
          }
        ],
        sources: [
          {
            title: 'Insee — Indice des prix à la consommation',
            url: 'https://www.insee.fr/fr/metadonnees/source/serie/s1004'
          },
          {
            title: 'Banque centrale européenne — Objectif d’inflation de 2 %',
            url: 'https://www.ecb.europa.eu/mopo/strategy/pricestab/html/index.fr.html'
          },
          {
            title: 'Eurostat — Harmonised Index of Consumer Prices',
            url: 'https://ec.europa.eu/eurostat/web/hicp'
          },
          {
            title: 'FMI — Inflation: Prices on the Rise',
            url: 'https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/Inflation'
          }
        ]
      }
    },
    {
      id: 'politiques-budgetaire-et-monetaire',
      title: 'Politiques budgétaire et monétaire : objectifs, instruments et limites',
      field: 'Macroéconomie · Stabilisation de l’activité et stabilité des prix',
      summary: 'Comparer les instruments budgétaires et monétaires, expliquer leurs canaux de transmission et identifier les délais, arbitrages et contraintes qui limitent leurs effets.',
      lesson: {
        sections: [
          'La politique budgétaire relève des décisions publiques concernant les dépenses, les recettes fiscales et les transferts. Une impulsion budgétaire expansionniste peut soutenir la demande à court terme, par exemple par une hausse de certaines dépenses ou une baisse d’impôts. Une politique restrictive peut ralentir la demande ou contribuer à stabiliser les finances publiques. Les effets dépendent de la composition des mesures, de leur calendrier, de la réaction des ménages et des entreprises, des importations, de la situation conjoncturelle et du cadre institutionnel. Une même mesure peut avoir des effets différents selon que l’économie dispose de capacités inutilisées ou rencontre des contraintes d’offre.',
          'Le solde budgétaire est la différence entre les recettes et les dépenses publiques sur une période, selon le périmètre et les règles comptables retenus. Un déficit apparaît lorsque les dépenses dépassent les recettes ; un excédent apparaît dans le cas inverse. La dette publique est un stock d’engagements financiers, alors que le déficit est un flux sur une période. Le déficit peut augmenter la dette, mais leur évolution ne se confond pas mécaniquement : les opérations financières, les variations de trésorerie, les ajustements de valorisation et d’autres facteurs peuvent intervenir. Pour apprécier la soutenabilité des finances publiques, on examine notamment le niveau de dette, les taux d’intérêt, la croissance nominale, le solde primaire et les besoins de financement, sans qu’un seuil unique suffise à déterminer la situation de tous les pays.',
          'La politique monétaire est conduite par une banque centrale. Ses instruments peuvent inclure les taux directeurs, les opérations de refinancement, les achats d’actifs et la communication sur l’orientation future de la politique. Une baisse des taux directeurs tend à réduire certains coûts de financement et peut soutenir le crédit, la consommation et l’investissement ; une hausse tend à freiner la demande et à réduire les pressions inflationnistes, avec des délais et une ampleur incertains. La transmission passe par les taux de marché, le crédit, les prix des actifs, le taux de change et les anticipations. Les effets ne sont ni instantanés ni identiques pour tous les agents.',
          'Dans la zone euro, la Banque centrale européenne définit la politique monétaire commune et son objectif principal est la stabilité des prix. Son objectif d’inflation est de 2 % à moyen terme, mesuré par l’IPCH. La politique monétaire ne peut pas fixer directement tous les prix ni garantir une trajectoire précise de l’activité : elle influence les conditions financières et la demande, tandis que des chocs d’offre peuvent faire monter les prix tout en affaiblissant la production. Les décisions doivent donc tenir compte de l’origine des chocs, de leur persistance et des risques que les hausses de prix se diffusent aux salaires et aux anticipations.',
          'La politique budgétaire et la politique monétaire interagissent, mais elles ne sont pas interchangeables. Un soutien budgétaire peut renforcer la demande au moment où la banque centrale cherche à la modérer ; inversement, une politique monétaire accommodante peut faciliter le financement de l’activité, sans supprimer les contraintes budgétaires. La coordination doit respecter les mandats et les institutions en vigueur. Les politiques économiques comportent des délais de décision et de mise en œuvre, des effets distributifs et des incertitudes de mesure. Toute évaluation sérieuse compare les objectifs annoncés aux résultats observés, tient compte du scénario contrefactuel et évite d’attribuer automatiquement un changement économique à une seule décision.'
        ],
        example: {
          statement: 'Un gouvernement augmente ses achats de biens et services de 10 milliards d’euros. Peut-on affirmer que le PIB augmentera exactement de 10 milliards d’euros ?',
          calculation: 'La dépense publique supplémentaire augmente directement la composante correspondante de la demande, toutes choses égales par ailleurs. L’effet total dépend ensuite des réactions de la production, des prix, des importations, de la consommation, de l’investissement et des autres politiques.',
          answer: 'Non. Les 10 milliards constituent une impulsion initiale de dépense, pas une garantie d’augmentation finale exactement égale du PIB. L’effet global dépend du contexte et des mécanismes de transmission.'
        },
        exercise: {
          question: 'Quelle différence fondamentale existe entre le déficit public et la dette publique ?',
          answer: 'Le déficit est un flux mesuré sur une période ; la dette est un stock d’engagements financiers évalué à une date donnée.'
        },
        exercises: [
          {
            question: 'Citez deux instruments de politique monétaire.',
            answer: 'Les taux directeurs et les opérations de refinancement sont deux exemples. Les banques centrales peuvent aussi utiliser d’autres instruments selon leur cadre opérationnel.'
          },
          {
            question: 'Pourquoi les effets d’une hausse des taux directeurs ne sont-ils pas immédiats ?',
            answer: 'Parce que la transmission passe par les contrats de crédit, les décisions de consommation et d’investissement, les anticipations et d’autres canaux qui s’ajustent avec des délais variables.'
          },
          {
            question: 'Quel objectif d’inflation la BCE vise-t-elle à moyen terme ?',
            answer: 'Un taux d’inflation de 2 % à moyen terme pour la zone euro, mesuré par l’IPCH.'
          }
        ],
        sources: [
          {
            title: 'Banque centrale européenne — Stratégie de politique monétaire',
            url: 'https://www.ecb.europa.eu/mopo/strategy/html/index.en.html'
          },
          {
            title: 'FMI — Fiscal Monitor',
            url: 'https://www.imf.org/en/Publications/FM'
          },
          {
            title: 'OCDE — Fiscal policy',
            url: 'https://www.oecd.org/en/topics/fiscal-policy.html'
          },
          {
            title: 'Banque de France — Publications et statistiques',
            url: 'https://www.banque-france.fr/fr/publications-et-statistiques/publications'
          }
        ]
      }
    },
    {
      id: 'economie-ouverte-echanges-taux-change',
      title: 'Économie ouverte : échanges extérieurs, taux de change et interdépendances',
      field: 'Macroéconomie · Balance des paiements et relations avec le reste du monde',
      summary: 'Lire les exportations et importations, distinguer solde commercial et compte courant, expliquer les taux de change et analyser les transmissions internationales.',
      lesson: {
        sections: [
          'Une économie ouverte échange des biens, des services, des revenus et des actifs financiers avec le reste du monde. Les exportations sont les ventes de biens et services aux non-résidents ; les importations sont les achats de biens et services auprès de non-résidents. Dans l’approche par les dépenses du PIB, le solde des exportations et importations intervient parce que le PIB mesure la production sur le territoire, et non la totalité des dépenses des résidents. Une importation n’est pas en elle-même une perte économique : elle peut fournir des biens de consommation, des équipements ou des intrants nécessaires à la production.',
          'Le solde commercial désigne généralement la différence entre exportations et importations de biens, même si les usages statistiques peuvent varier. Il ne doit pas être confondu avec le solde des biens et services, ni avec le solde du compte courant de la balance des paiements. Le compte courant comprend notamment les échanges de biens et services, les revenus primaires transfrontaliers et les transferts courants. La balance des paiements enregistre les transactions entre résidents et non-résidents selon un cadre comptable cohérent ; elle comprend aussi les comptes de capital et financier. Son interprétation exige donc de préciser le poste observé et la période.',
          'Le taux de change exprime le prix d’une monnaie dans une autre. Une appréciation de la monnaie nationale rend, toutes choses égales par ailleurs, les importations libellées en devises moins coûteuses en monnaie nationale, mais peut rendre les exportations plus chères pour les acheteurs étrangers. Une dépréciation peut produire les effets inverses, mais les quantités échangées ne s’ajustent pas nécessairement immédiatement : les contrats, les monnaies de facturation, les marges, les capacités de production et les réactions de la demande influencent le résultat. Le taux de change effectif résume la valeur d’une monnaie par rapport à un panier de monnaies partenaires, avec des pondérations déterminées par la méthodologie.',
          'Les échanges internationaux peuvent permettre la spécialisation, l’accès à des marchés plus vastes, la diffusion de technologies et l’importation d’intrants qui améliorent la productivité. Ils exposent aussi les économies aux variations de la demande étrangère, aux prix mondiaux, aux perturbations logistiques et aux tensions commerciales. Les effets de l’ouverture sont hétérogènes selon les secteurs, les régions, les compétences et la capacité des travailleurs et des entreprises à s’adapter. Les gains agrégés éventuels ne signifient donc pas que chaque secteur ou chaque ménage bénéficie de la même façon ; les politiques de formation, d’accompagnement et de redistribution peuvent influencer la répartition des effets.',
          'Les déséquilibres extérieurs doivent être analysés avec prudence. Un déficit courant peut refléter, entre autres, un investissement intérieur supérieur à l’épargne nationale, une forte demande intérieure ou des revenus versés à l’étranger ; il n’est pas automatiquement synonyme de crise. Sa soutenabilité dépend notamment de son financement, de la structure des engagements extérieurs, de la devise d’endettement, de la maturité des dettes, de la capacité à générer des revenus futurs et de la confiance des investisseurs. De même, un excédent courant ne suffit pas à établir qu’une économie se porte mieux sur tous les plans. Les comptes extérieurs sont des identités comptables qui doivent être interprétées à l’aide d’informations économiques et institutionnelles supplémentaires.'
        ],
        example: {
          statement: 'Une économie exporte pour 240 milliards d’euros de biens et importe pour 275 milliards d’euros de biens pendant une année. Quel est son solde commercial de biens selon cette définition ?',
          calculation: 'Solde commercial = exportations − importations = 240 − 275 = −35 milliards d’euros.',
          answer: 'Le solde commercial de biens est déficitaire de 35 milliards d’euros. Ce résultat ne suffit pas à déterminer le solde du compte courant, qui comprend aussi les services, les revenus primaires et les transferts courants.'
        },
        exercise: {
          question: 'Pourquoi un déficit commercial de biens ne suffit-il pas à connaître le solde du compte courant ?',
          answer: 'Parce que le compte courant inclut également les échanges de services, les revenus primaires et les transferts courants. Ces composantes peuvent réduire ou augmenter le déficit observé sur les seuls biens.'
        },
        exercises: [
          {
            question: 'Que signifie une appréciation de la monnaie nationale, toutes choses égales par ailleurs ?',
            answer: 'La monnaie nationale gagne de la valeur par rapport à une autre monnaie. Les importations en devises peuvent devenir moins coûteuses en monnaie nationale, tandis que les exportations peuvent devenir plus chères pour les acheteurs étrangers.'
          },
          {
            question: 'Un déficit courant est-il toujours synonyme de crise économique ?',
            answer: 'Non. Son interprétation dépend notamment de sa cause, de son financement, de la structure des engagements extérieurs et de la capacité future à générer des revenus.'
          },
          {
            question: 'Pourquoi les effets du commerce international peuvent-ils différer selon les groupes de travailleurs ?',
            answer: 'Les secteurs, les régions et les qualifications ne sont pas exposés de la même façon à la concurrence et aux débouchés internationaux, et les possibilités de reconversion ou de mobilité varient.'
          }
        ],
        sources: [
          {
            title: 'FMI — Balance of Payments and International Investment Position Manual, Sixth Edition',
            url: 'https://www.imf.org/external/pubs/ft/bop/2007/bopman6.htm'
          },
          {
            title: 'OCDE — International trade',
            url: 'https://www.oecd.org/en/topics/international-trade.html'
          },
          {
            title: 'Banque mondiale — World Integrated Trade Solution',
            url: 'https://wits.worldbank.org/'
          },
          {
            title: 'Eurostat — International trade in goods',
            url: 'https://ec.europa.eu/eurostat/web/international-trade-in-goods'
          }
        ]
      }
    }
  ]
},

{
  id: 'economie-environnement',
  title: 'Économie et environnement',
  note: 'Six chapitres approfondis sur les liens entre activité économique et environnement : externalités, politiques climatiques, transition énergétique, économie circulaire, biodiversité et adaptation. Les résultats économiques dépendent du contexte, des hypothèses et de la conception des politiques ; les scénarios prospectifs ne sont pas des prédictions certaines.',
  chapters: [
    {
      id: 'externalites-et-defaillances-de-marche',
      title: 'Les externalités environnementales et les limites du marché',
      field: 'Économie de l’environnement · Externalités, biens publics et coûts sociaux',
      summary: 'Comprendre pourquoi les décisions privées de production et de consommation peuvent générer des dommages environnementaux qui ne sont pas entièrement reflétés dans les prix, et comment l’action publique peut corriger ces incitations.',
      lesson: {
        sections: [
          'Une externalité apparaît lorsqu’une activité économique affecte le bien-être ou les possibilités de production d’autres personnes sans que cet effet soit entièrement pris en compte dans la transaction. Une usine peut, par exemple, émettre des polluants qui contribuent à des coûts sanitaires pour les riverains. Si ces dommages ne sont pas payés par le producteur ou l’acheteur, le prix du produit ne reflète pas nécessairement son coût social total. Il ne faut toutefois pas supposer que toute activité polluante a le même impact : les dommages dépendent du polluant, de la quantité émise, du lieu, de l’exposition et des populations concernées.',
          'Les économistes distinguent le coût privé, supporté directement par le producteur ou le consommateur, et le coût externe, imposé à des tiers. Le coût social correspond au coût privé augmenté des coûts externes pertinents. Lorsque les coûts externes ne sont pas intégrés aux décisions, le marché peut conduire à une production ou une consommation plus élevée que celle qui serait souhaitable du point de vue collectif. Cette conclusion dépend des hypothèses utilisées pour évaluer les dommages et ne signifie pas que l’État connaît toujours parfaitement le niveau optimal de pollution.',
          'Les biens environnementaux présentent parfois des caractéristiques de biens publics ou de ressources communes. La stabilité du climat bénéficie à de nombreuses personnes sans qu’il soit facile d’en exclure certaines, tandis que les stocks de poissons peuvent être surexploités lorsque l’accès à une ressource est difficile à contrôler. Ces situations compliquent la coordination entre acteurs. Les réponses possibles comprennent des normes, des taxes, des permis échangeables, des droits clairement définis lorsque cela est adapté, des investissements publics et des accords internationaux. Aucun instrument n’est automatiquement supérieur dans tous les contextes : l’efficacité, le contrôle, l’équité et les coûts administratifs doivent être examinés ensemble.'
        ],
        example: {
          statement: 'Une entreprise vend un produit pour 50 euros. Sa production entraîne, selon une estimation hypothétique, 8 euros de dommages environnementaux par unité, qui ne sont pas inclus dans le prix. Quel est le coût social estimé par unité si le coût privé de production est de 30 euros ?',
          calculation: 'Coût social estimé = coût privé de production + coût externe = 30 + 8 = 38 euros par unité. Le prix de vente de 50 euros ne suffit pas, à lui seul, à déterminer le coût social.',
          answer: 'Le coût social estimé est de 38 euros par unité, sous l’hypothèse que le dommage externe évalué à 8 euros est complet et correctement mesuré. Il s’agit d’un exemple pédagogique, pas d’une estimation réelle.'
        },
        exercise: {
          question: 'Pourquoi un prix de marché peut-il ne pas refléter le coût environnemental total d’un produit ?',
          answer: 'Parce qu’une partie des dommages peut être supportée par des tiers et ne pas être intégrée aux coûts ou aux décisions du producteur et du consommateur.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’une externalité négative ?',
            answer: 'Un effet défavorable d’une activité sur des tiers qui n’est pas entièrement pris en compte dans la transaction économique.'
          },
          {
            question: 'Quelle différence existe entre coût privé et coût social ?',
            answer: 'Le coût privé est supporté par l’agent économique concerné ; le coût social inclut aussi les coûts externes pertinents imposés à la collectivité.'
          },
          {
            question: 'Citer deux moyens de réduire une externalité environnementale.',
            answer: 'Par exemple, une norme d’émission et une taxe environnementale ; des permis échangeables ou des investissements publics peuvent aussi être adaptés selon le problème.'
          }
        ],
        sources: [
          {
            title: 'OCDE — Applying Economic Instruments to International and Global Environmental Problems',
            url: 'https://legalinstruments.oecd.org/en/instruments/41'
          },
          {
            title: 'OCDE — Policy Instruments for the Environment (PINE) Database',
            url: 'https://www.oecd.org/en/data/datasets/policy-instruments-for-the-environment-pine-database.html'
          }
        ]
      }
    },
    {
      id: 'prix-du-carbone-et-politiques-publiques',
      title: 'Le prix du carbone et les politiques environnementales',
      field: 'Économie publique · Fiscalité environnementale et systèmes d’échange de quotas',
      summary: 'Étudier comment les taxes carbone et les systèmes d’échange de quotas peuvent inciter à réduire les émissions, tout en analysant leurs limites distributives, politiques et pratiques.',
      lesson: {
        sections: [
          'La tarification du carbone vise à intégrer une partie du coût climatique des émissions dans les décisions économiques. Deux grandes familles d’instruments sont courantes. Une taxe carbone fixe un prix par unité d’émissions ou de combustible selon son contenu en carbone. Un système d’échange de quotas fixe une limite globale d’émissions pour les entités couvertes et permet l’échange de quotas. Dans le premier cas, le prix est déterminé par la règle fiscale ; dans le second, le prix des quotas résulte notamment de l’offre, de la demande et des règles du marché. Le fonctionnement concret varie selon les juridictions et les secteurs couverts.',
          'Un prix du carbone peut rendre les activités fortement émettrices relativement plus coûteuses et encourager les économies d’énergie, les changements de procédés, l’innovation et l’investissement dans des solutions moins carbonées. Son effet dépend cependant du niveau et de la prévisibilité du prix, des possibilités techniques de réduction, de la couverture des émissions, des exemptions et des politiques complémentaires. Un prix faible ou instable peut envoyer un signal d’investissement limité ; à l’inverse, une hausse rapide peut poser des difficultés aux ménages et entreprises qui ne disposent pas d’alternatives abordables à court terme.',
          'La répartition des coûts est un enjeu essentiel. Une taxe sur les combustibles peut peser proportionnellement davantage sur les ménages modestes si ceux-ci consacrent une part élevée de leur budget au chauffage et aux transports et ne peuvent pas changer rapidement d’équipement ou de logement. Des transferts ciblés, des aides à la rénovation, des transports collectifs et une utilisation transparente des recettes peuvent atténuer ces effets. Les compensations doivent être conçues avec soin pour protéger les ménages sans supprimer complètement l’incitation à réduire les émissions. La tarification du carbone n’est pas une solution isolée : normes, infrastructures, recherche et soutien à l’innovation peuvent être nécessaires.'
        ],
        example: {
          statement: 'Une taxe hypothétique est fixée à 40 euros par tonne de CO2. Une installation émet 250 tonnes de CO2 imposables. Quel est le montant brut de la taxe avant exemptions ou ajustements ?',
          calculation: 'Taxe brute = 40 euros par tonne × 250 tonnes = 10 000 euros.',
          answer: 'Le montant brut est de 10 000 euros. Ce calcul illustre la mécanique d’une taxe ; il ne décrit pas le régime fiscal d’un pays précis.'
        },
        exercise: {
          question: 'Quelle est la différence principale entre une taxe carbone et un système d’échange de quotas ?',
          answer: 'La taxe fixe directement un prix fiscal par unité concernée ; un système de quotas fixe une limite d’émissions couvertes et laisse le marché contribuer à déterminer le prix des quotas.'
        },
        exercises: [
          {
            question: 'Pourquoi la prévisibilité d’un prix du carbone peut-elle compter pour les investissements ?',
            answer: 'Les investissements énergétiques durent souvent de nombreuses années ; un signal prévisible aide les acteurs à comparer les coûts futurs des options disponibles.'
          },
          {
            question: 'Pourquoi une politique carbone peut-elle avoir des effets distributifs inégaux ?',
            answer: 'Les ménages diffèrent par leurs revenus, leurs besoins énergétiques, leur lieu de résidence et leur capacité à accéder à des solutions de remplacement.'
          },
          {
            question: 'Donner un exemple de mesure complémentaire à la tarification du carbone.',
            answer: 'Une aide ciblée à l’isolation des logements, le développement des transports collectifs ou le soutien à la recherche bas-carbone.'
          }
        ],
        sources: [
          {
            title: 'Banque mondiale — State and Trends of Carbon Pricing 2026',
            url: 'https://www.worldbank.org/en/publication/state-and-trends-of-carbon-pricing'
          },
          {
            title: 'Banque mondiale — Carbon Pricing Dashboard',
            url: 'https://carbonpricingdashboard.worldbank.org/'
          },
          {
            title: 'OCDE — Policy Instruments for the Environment (PINE) Database',
            url: 'https://www.oecd.org/en/data/datasets/policy-instruments-for-the-environment-pine-database.html'
          }
        ]
      }
    },
    {
      id: 'transition-energetique-et-investissement',
      title: 'La transition énergétique : coûts, investissements et compétitivité',
      field: 'Économie de l’énergie · Investissements, prix de l’électricité et décarbonation',
      summary: 'Analyser les transformations du système énergétique, les besoins d’investissement et les arbitrages entre coûts de production, réseaux, stockage, sécurité d’approvisionnement et réduction des émissions.',
      lesson: {
        sections: [
          'La transition énergétique désigne la transformation progressive de la production, de la distribution et de l’usage de l’énergie afin de réduire les émissions et d’autres impacts environnementaux. Elle mobilise plusieurs leviers : efficacité énergétique, énergies renouvelables, électrification, réseaux, stockage, flexibilité de la demande et, selon les pays, autres moyens de production bas-carbone. Il n’existe pas de combinaison universelle : le potentiel dépend des ressources locales, de la structure industrielle, des infrastructures, des choix collectifs et des contraintes de sécurité d’approvisionnement.',
          'Comparer les technologies demande de distinguer plusieurs coûts. Le coût actualisé de l’électricité (LCOE) rapporte les coûts d’un projet à sa production électrique estimée sur sa durée de vie, en tenant compte d’hypothèses financières. Il est utile pour comparer certains projets, mais ne représente pas à lui seul le coût total d’un système électrique. L’intégration de productions variables peut nécessiter des réseaux, du stockage, des moyens pilotables ou une gestion plus souple de la demande. Les coûts de financement sont également déterminants : un taux d’intérêt élevé peut rendre plus difficile le financement de projets dont les dépenses sont initiales et les revenus étalés sur de nombreuses années.',
          'La transition peut créer des activités et des emplois dans la construction, l’ingénierie, l’installation, la maintenance et les chaînes d’approvisionnement. Elle peut aussi fragiliser des régions dépendantes de secteurs fossiles ou de certaines industries intensives en énergie. Le bilan économique dépend donc de la vitesse du changement, de la formation, de la localisation des investissements, des importations, de la concurrence et de la qualité des politiques d’accompagnement. Une baisse du coût d’une technologie ne garantit pas automatiquement une baisse identique de la facture finale : les coûts de réseau, les taxes, les contrats, le financement et les règles de marché interviennent également.'
        ],
        example: {
          statement: 'Deux projets produisent chacun 1 000 MWh par an. Le projet A a un coût annuel total estimé de 50 000 euros et le projet B de 65 000 euros. Quel est leur coût annuel moyen par MWh, sans actualisation ni autres ajustements ?',
          calculation: 'Projet A : 50 000 / 1 000 = 50 euros/MWh. Projet B : 65 000 / 1 000 = 65 euros/MWh.',
          answer: 'Dans cet exemple simplifié, le projet A coûte 50 euros/MWh et le projet B 65 euros/MWh. Une comparaison réelle devrait examiner la durée de vie, le financement, la disponibilité, les coûts de système et les hypothèses de production.'
        },
        exercise: {
          question: 'Pourquoi le coût actualisé de l’électricité ne suffit-il pas toujours à comparer le coût total de deux systèmes électriques ?',
          answer: 'Parce qu’il ne représente pas nécessairement tous les coûts d’intégration du système, comme les réseaux, le stockage, la flexibilité et les besoins de capacité.'
        },
        exercises: [
          {
            question: 'Citer trois éléments qui peuvent faciliter l’intégration des énergies renouvelables variables.',
            answer: 'Des réseaux adaptés, du stockage et une demande plus flexible ; des interconnexions et des moyens pilotables peuvent également contribuer.'
          },
          {
            question: 'Comment les taux d’intérêt peuvent-ils influencer un projet énergétique ?',
            answer: 'Ils modifient le coût du financement et donc la rentabilité attendue, particulièrement pour les projets nécessitant de fortes dépenses initiales.'
          },
          {
            question: 'Pourquoi la transition énergétique peut-elle créer à la fois des opportunités et des difficultés économiques ?',
            answer: 'Elle développe de nouvelles activités et compétences, mais peut aussi réduire l’activité de secteurs existants et affecter certaines régions ou catégories de travailleurs.'
          }
        ],
        sources: [
          {
            title: 'Agence internationale de l’énergie — Renewables 2024: Executive Summary',
            url: 'https://www.iea.org/reports/renewables-2024/executive-summary'
          },
          {
            title: 'Agence internationale de l’énergie — World Energy Investment 2024: Overview and Key Findings',
            url: 'https://www.iea.org/reports/world-energy-investment-2024/overview-and-key-findings/'
          },
          {
            title: 'GIEC — AR6 Synthesis Report: Summary for Policymakers',
            url: 'https://www.ipcc.ch/report/ar6/syr/summary-for-policymakers/'
          }
        ]
      }
    },
    {
      id: 'economie-circulaire-et-ressources',
      title: 'L’économie circulaire : réduire l’extraction et repenser la production',
      field: 'Économie des ressources · Écoconception, réparation, réemploi et recyclage',
      summary: 'Étudier les modèles économiques qui cherchent à maintenir les produits et les matériaux en usage plus longtemps, à limiter les déchets et à réduire la dépendance aux matières premières vierges.',
      lesson: {
        sections: [
          'L’économie linéaire est souvent résumée par la séquence extraire, produire, consommer et jeter. L’économie circulaire cherche à limiter les pertes de matières et la production de déchets en agissant sur tout le cycle de vie : conception durable, réduction de la consommation de ressources, entretien, réparation, réemploi, reconditionnement, remanufacturage et recyclage. Ces stratégies ne sont pas équivalentes. Prolonger la durée de vie d’un produit peut éviter de fabriquer un produit neuf ; le recyclage récupère certaines matières, mais nécessite lui-même de l’énergie et ne permet pas toujours de retrouver la qualité initiale.',
          'Les entreprises peuvent développer des modèles économiques fondés sur la réparation, la location, le partage, la reprise des produits ou la vente de services. Ces modèles peuvent réduire les besoins en matières premières et ouvrir de nouvelles activités, mais leur réussite dépend de la demande, de la qualité des produits, de la logistique, du coût du travail, de la réglementation et de la disponibilité de matières récupérées. Les bénéfices environnementaux doivent être évalués sur l’ensemble du cycle de vie : une solution présentée comme circulaire n’est pas nécessairement meilleure si elle exige beaucoup de transport, d’énergie ou de matériaux supplémentaires.',
          'La circularité peut améliorer la résilience économique en diminuant l’exposition à la volatilité de certains marchés de matières premières et en favorisant la réparation ou la récupération locale. Elle ne garantit toutefois ni une baisse absolue de l’extraction ni une réduction automatique des émissions. Un effet rebond est possible : les économies réalisées grâce à un produit plus efficace peuvent être dépensées pour davantage de consommation, ce qui réduit une partie des gains. Il faut donc suivre plusieurs indicateurs, comme la quantité totale de matières utilisées, la durée de vie des produits, les taux de réemploi, la qualité du recyclage, les déchets générés et les impacts environnementaux globaux.'
        ],
        example: {
          statement: 'Une entreprise remplace chaque année 200 équipements par des appareils neufs. Un programme de réparation permet d’en prolonger l’usage pour 60 équipements supplémentaires pendant un an. Quelle part des 200 remplacements annuels cela représente-t-il ?',
          calculation: 'Part prolongée = 60 / 200 × 100 = 30 %.',
          answer: 'Le programme prolonge l’usage de 30 % du nombre d’équipements habituellement remplacés dans cet exemple. Ce chiffre ne permet pas à lui seul de calculer les économies nettes de matières ou d’émissions.'
        },
        exercise: {
          question: 'Pourquoi la réparation et le réemploi peuvent-ils parfois préserver davantage de valeur qu’un recyclage immédiat ?',
          answer: 'Ils peuvent maintenir le produit ou ses composants en service et éviter une partie des ressources nécessaires à la fabrication d’un produit neuf, selon les conditions concrètes.'
        },
        exercises: [
          {
            question: 'Citer quatre stratégies relevant de l’économie circulaire.',
            answer: 'L’écoconception, la réparation, le réemploi et le recyclage ; l’entretien, le reconditionnement et le remanufacturage en sont d’autres.'
          },
          {
            question: 'Qu’est-ce qu’un effet rebond ?',
            answer: 'Une situation dans laquelle les économies ou gains d’efficacité entraînent une hausse d’usage ou de consommation qui réduit une partie des bénéfices attendus.'
          },
          {
            question: 'Pourquoi faut-il évaluer les impacts sur l’ensemble du cycle de vie ?',
            answer: 'Parce qu’une réduction d’impact à une étape peut s’accompagner de coûts ou d’impacts supplémentaires à d’autres étapes, notamment lors de la production, du transport ou du traitement.'
          }
        ],
        sources: [
          {
            title: 'Agence européenne pour l’environnement — The environmental and climate benefits of a circular economy',
            url: 'https://www.eea.europa.eu/en/analysis/publications/the-environmental-and-climate-benefits-of-circular-economy'
          },
          {
            title: 'Agence européenne pour l’environnement — Europe’s circular economy in facts and figures',
            url: 'https://www.eea.europa.eu/en/analysis/publications/europes-circular-economy-in-facts'
          },
          {
            title: 'Agence européenne pour l’environnement — Circular design and sustainable production',
            url: 'https://www.eea.europa.eu/en/europe-environment-2025/thematic-briefings/circular-economy-and-other-enablers-of-transformative-change/circular-design-and-sustainable-production'
          }
        ]
      }
    },
    {
      id: 'biodiversite-capital-naturel-et-croissance',
      title: 'Biodiversité, capital naturel et activité économique',
      field: 'Économie écologique · Services écosystémiques, dépendances et risques',
      summary: 'Comprendre comment les économies dépendent des écosystèmes et pourquoi la perte de biodiversité peut générer des risques pour la production, les chaînes d’approvisionnement et le bien-être collectif.',
      lesson: {
        sections: [
          'Le capital naturel désigne les stocks d’actifs naturels — sols, eau, forêts, zones humides, espèces et écosystèmes — qui contribuent à produire des biens et des services. Les écosystèmes peuvent soutenir la pollinisation, la fertilité des sols, la régulation de l’eau, la protection contre certains risques naturels et des activités culturelles ou récréatives. Ces contributions sont parfois qualifiées de services écosystémiques. Elles n’ont pas toutes un prix de marché, mais leur absence peut entraîner des coûts économiques importants. Les évaluer en termes monétaires peut éclairer certaines décisions, sans pour autant résumer toutes les valeurs écologiques, culturelles ou éthiques de la nature.',
          'La dégradation des écosystèmes peut affecter l’agriculture, la pêche, la foresterie, le tourisme, la santé et des industries dépendantes de ressources naturelles ou de services écologiques. Les risques peuvent se transmettre à travers les chaînes d’approvisionnement : une entreprise peut être exposée à la raréfaction d’une ressource, à la dégradation d’un bassin versant ou à des changements réglementaires liés à la protection de la nature. Les effets sont souvent localisés et inégalement répartis ; les populations qui dépendent directement des ressources naturelles peuvent être particulièrement vulnérables. Il est donc important de préciser le lieu, le secteur, l’horizon temporel et les groupes affectés lorsqu’on estime un risque lié à la biodiversité.',
          'Les politiques de protection et de restauration peuvent inclure des aires protégées, la restauration des habitats, la réduction des pollutions, des règles d’usage des terres, des paiements pour services écosystémiques ou la suppression de mesures qui encouragent des dommages environnementaux. Leur conception doit examiner les droits fonciers, les moyens de subsistance, les coûts d’opportunité, la participation des communautés et le suivi des résultats. Une mesure peut produire des bénéfices collectifs tout en imposant des coûts à certains acteurs ; les mécanismes de compensation et de gouvernance sont alors importants. Les estimations de valeur économique de la nature comportent des incertitudes et ne devraient pas être interprétées comme une autorisation de remplacer tout écosystème détruit par une compensation financière.'
        ],
        example: {
          statement: 'Une exploitation agricole estime qu’une baisse de pollinisation réduirait sa production vendable de 12 000 euros sur une saison, tandis qu’une mesure de restauration coûte 7 000 euros. Quelle est la différence simple entre le dommage estimé évité et le coût de la mesure, si elle évite effectivement ce dommage ?',
          calculation: 'Différence estimée = 12 000 - 7 000 = 5 000 euros.',
          answer: 'La différence est de 5 000 euros dans cette hypothèse simplifiée. Elle ne constitue pas une analyse complète : il faudrait vérifier l’efficacité de la mesure, sa durée, les autres coûts et bénéfices, ainsi que l’incertitude de l’estimation.'
        },
        exercise: {
          question: 'Pourquoi la disparition d’un service écosystémique peut-elle représenter un risque économique même si ce service n’a pas de prix de marché ?',
          answer: 'Parce que des activités peuvent dépendre de ce service et devoir supporter des pertes de production, des coûts de remplacement ou des risques plus élevés lorsqu’il se dégrade.'
        },
        exercises: [
          {
            question: 'Qu’appelle-t-on capital naturel ?',
            answer: 'Les stocks d’actifs naturels, tels que les sols, l’eau, les forêts et les écosystèmes, qui contribuent au bien-être et à l’activité économique.'
          },
          {
            question: 'Donner deux exemples de services écosystémiques.',
            answer: 'La pollinisation des cultures et la régulation de l’eau ; la protection des sols et le stockage du carbone en sont d’autres.'
          },
          {
            question: 'Pourquoi une estimation monétaire de la biodiversité doit-elle être interprétée avec prudence ?',
            answer: 'Elle dépend des méthodes et des hypothèses et ne capture pas nécessairement toutes les valeurs écologiques, sociales, culturelles ou éthiques de la nature.'
          }
        ],
        sources: [
          {
            title: 'IPBES — Global Assessment Report on Biodiversity and Ecosystem Services',
            url: 'https://ipbes.net/global-assessment'
          },
          {
            title: 'OCDE — Biodiversity: Finance and the Economic and Business Case for Action',
            url: 'https://www.oecd.org/environment/resources/biodiversity/'
          },
          {
            title: 'Agence européenne pour l’environnement — Economy and resources',
            url: 'https://www.eea.europa.eu/en/topics/at-a-glance/economy-and-resources'
          }
        ]
      }
    },
    {
      id: 'adaptation-climatique-et-justice-economique',
      title: 'Adaptation climatique, dommages économiques et transition juste',
      field: 'Économie du climat · Adaptation, résilience, répartition des coûts et bénéfices',
      summary: 'Examiner les coûts des risques climatiques, l’intérêt économique de l’adaptation et les enjeux d’équité lorsque les impacts et les moyens d’y répondre sont inégalement répartis.',
      lesson: {
        sections: [
          'Le changement climatique peut affecter l’économie par les vagues de chaleur, les sécheresses, les inondations, l’élévation du niveau de la mer et d’autres évolutions des risques physiques. Les effets peuvent toucher la santé et la productivité du travail, les infrastructures, l’agriculture, l’assurance, les chaînes logistiques et les finances publiques. Les dommages observés ou projetés varient selon l’exposition, la vulnérabilité, la capacité d’adaptation et le scénario climatique. Il est donc trompeur de présenter un chiffre unique comme le coût certain du changement climatique pour tous les pays et toutes les périodes.',
          'L’adaptation regroupe les mesures qui réduisent les dommages ou améliorent la capacité à faire face aux effets climatiques : systèmes d’alerte, plans contre les fortes chaleurs, gestion de l’eau, restauration de zones humides, infrastructures adaptées et évolution des pratiques agricoles. Une analyse économique peut comparer les coûts d’une mesure aux dommages qu’elle pourrait éviter, mais elle doit tenir compte de l’incertitude, de la durée de vie, de l’entretien, des effets secondaires et des personnes qui bénéficient de la protection. Une infrastructure peut aussi déplacer le risque vers une autre zone ou encourager de nouvelles constructions dans un secteur exposé ; les politiques d’adaptation doivent donc être réévaluées dans le temps.',
          'La transition juste s’intéresse à la distribution des coûts, des bénéfices et des possibilités de participation pendant la transformation de l’économie. Les travailleurs, territoires et ménages ne sont pas affectés de la même façon par les changements d’emploi, les prix de l’énergie ou les investissements. La formation professionnelle, les services publics, le dialogue social, l’aide ciblée et les stratégies de reconversion peuvent contribuer à répartir les opportunités et à soutenir les personnes concernées. Le financement de l’adaptation est également un enjeu de justice : les communautés les plus exposées ne disposent pas toujours des ressources nécessaires. Les décisions doivent articuler efficacité économique, réduction des risques, droits sociaux et objectifs environnementaux.'
        ],
        example: {
          statement: 'Une commune envisage une mesure d’adaptation qui coûte 2 millions d’euros et estime, dans un scénario hypothétique, qu’elle évitera 3 millions d’euros de dommages cumulés. Quelle est la différence entre les dommages évités estimés et le coût initial ?',
          calculation: 'Différence simple = 3 millions - 2 millions = 1 million d’euros.',
          answer: 'La différence simple est de 1 million d’euros. Pour conclure qu’il s’agit d’un investissement économiquement avantageux, il faudrait aussi préciser l’horizon temporel, actualiser les flux si nécessaire, intégrer l’entretien et examiner l’incertitude des dommages évités.'
        },
        exercise: {
          question: 'Pourquoi une politique d’adaptation peut-elle être économiquement utile même si elle ne supprime pas tous les risques climatiques ?',
          answer: 'Elle peut réduire la probabilité ou l’ampleur de certains dommages et améliorer la préparation, même si une part du risque demeure.'
        },
        exercises: [
          {
            question: 'Quelle différence existe entre atténuation et adaptation au changement climatique ?',
            answer: 'L’atténuation réduit les émissions de gaz à effet de serre ou renforce les absorptions ; l’adaptation réduit la vulnérabilité et les dommages liés aux effets climatiques.'
          },
          {
            question: 'Citer deux mesures d’adaptation.',
            answer: 'Des systèmes d’alerte aux inondations et des plans de prévention des risques liés aux fortes chaleurs ; la gestion de l’eau et l’adaptation des infrastructures sont d’autres exemples.'
          },
          {
            question: 'Que cherche à prendre en compte la notion de transition juste ?',
            answer: 'La répartition des coûts et bénéfices de la transition, les besoins des travailleurs et des territoires concernés, et la participation des personnes affectées.'
          }
        ],
        sources: [
          {
            title: 'GIEC — AR6 Synthesis Report: Summary for Policymakers',
            url: 'https://www.ipcc.ch/report/ar6/syr/summary-for-policymakers/'
          },
          {
            title: 'GIEC — Climate Change 2022: Impacts, Adaptation and Vulnerability',
            url: 'https://www.ipcc.ch/report/ar6/wg2/'
          },
          {
            title: 'Agence internationale de l’énergie — World Energy Investment 2024: Overview and Key Findings',
            url: 'https://www.iea.org/reports/world-energy-investment-2024/overview-and-key-findings/'
          }
        ]
      }
    }
  ]
},


{
  id: 'pensee-economique',
  title: 'Histoire de la pensée économique',
  note: 'Dix chapitres consacrés à l’évolution historique des idées économiques, des premières analyses de la richesse aux débats contemporains sur la monnaie, le développement et l’environnement. Les écoles sont présentées dans leur contexte, en distinguant les textes originaux, les interprétations ultérieures et les résultats des recherches empiriques.',
  chapters: [
    {
      id: 'premieres-pensees-economiques-mercantilisme',
      title: 'Des premières pensées économiques au mercantilisme',
      field: 'Histoire économique · Antiquité à XVIIIe siècle',
      summary: 'Étudier les origines de la réflexion économique, les conceptions anciennes de l’échange et de la monnaie, puis les politiques commerciales et financières associées au mercantilisme.',
      lesson: {
        sections: [
          'Les réflexions économiques précèdent la constitution de l’économie comme discipline autonome. Dans l’Antiquité, Aristote examine notamment la monnaie, l’échange, la propriété et les rapports entre besoins et accumulation. Ces réflexions relèvent principalement de la philosophie morale et politique : elles interrogent la justice des échanges et l’organisation de la cité plutôt qu’elles ne proposent une théorie économique empirique au sens contemporain. Au Moyen Âge, des penseurs scolastiques étudient également le juste prix, le prêt à intérêt et les obligations morales du commerce.',
          'À l’époque moderne, l’expansion des échanges maritimes, la construction des États et le développement des administrations favorisent les écrits consacrés au commerce extérieur, à la monnaie et aux finances publiques. Le terme « mercantilisme » désigne rétrospectivement une famille de doctrines et de politiques diverses, plutôt qu’une école parfaitement unifiée. Plusieurs gouvernements cherchent à développer les manufactures, à soutenir les exportations, à réglementer certaines importations et à renforcer leurs ressources fiscales et commerciales.',
          'Thomas Mun en Angleterre et Jean-Baptiste Colbert dans la France de Louis XIV sont souvent associés à cette période. Mun analyse le commerce extérieur, tandis que Colbert est associé à des politiques de soutien aux manufactures et de réglementation économique. Il faut cependant distinguer les écrits des auteurs des décisions des gouvernements : toutes les mesures de l’époque ne découlent pas d’une doctrine commune. L’accumulation de métaux précieux compte dans plusieurs conceptions mercantilistes, mais la richesse nationale ne se réduit pas de manière identique chez tous les auteurs à la détention d’or et d’argent.',
          'Au XVIIIe siècle, plusieurs auteurs contestent les politiques qui privilégient excessivement les restrictions commerciales. Ils accordent davantage d’attention à la production, à la consommation, à la circulation des revenus et aux mécanismes de création de richesse. Ces débats contribuent à l’émergence de la physiocratie et de l’économie politique classique. Le mercantilisme reste néanmoins un repère utile pour comprendre les liens historiques entre commerce, puissance publique et construction des États.'
        ],
        example: {
          statement: 'Un gouvernement impose des droits de douane sur certains produits importés afin de soutenir les producteurs nationaux. À quelle logique historique cette mesure peut-elle être rapprochée ?',
          calculation: 'Il faut comparer l’objectif de la mesure aux pratiques historiques : protection de certaines productions, réglementation des échanges et recherche de puissance commerciale. Une mesure isolée ne suffit toutefois pas à caractériser une doctrine entière.',
          answer: 'Cette politique peut être rapprochée de certaines pratiques mercantilistes. Le mercantilisme n’étant pas homogène, il faut examiner le contexte et les objectifs précis avant de qualifier une politique.'
        },
        exercise: {
          question: 'Pourquoi le mercantilisme ne doit-il pas être considéré comme une doctrine parfaitement homogène ?',
          answer: 'Parce que cette catégorie regroupe des auteurs, des pays et des politiques différents, qui ne partagent pas nécessairement les mêmes explications de la richesse ni les mêmes instruments économiques.'
        },
        exercises: [
          {
            question: 'Quelle place l’État occupe-t-il généralement dans les politiques mercantilistes ?',
            answer: 'Il intervient activement dans la réglementation des échanges, le soutien à certaines activités productives et la recherche de puissance commerciale et fiscale.'
          },
          {
            question: 'Quel auteur anglais est associé à l’analyse mercantiliste du commerce extérieur ?',
            answer: 'Thomas Mun.'
          },
          {
            question: 'Pourquoi faut-il distinguer mercantilisme et simple accumulation de métaux précieux ?',
            answer: 'Parce que les pratiques et les écrits mercantilistes traitent aussi du commerce, des manufactures, de la fiscalité, de la monnaie et de la puissance de l’État.'
          }
        ],
        sources: [
          { title: 'Stanford Encyclopedia of Philosophy — Economics in Early Modern Philosophy', url: 'https://plato.stanford.edu/archives/sum2022/entries/economics-early-modern/' },
          { title: 'Routledge Historical Resources — History of Economic Thought', url: 'https://www.routledgehistoricalresources.com/economic-thought/' },
          { title: 'Encyclopaedia Britannica — Mercantilism', url: 'https://www.britannica.com/money/mercantilism' }
        ]
      }
    },
    {
      id: 'physiocratie-et-ordre-naturel',
      title: 'La physiocratie et l’idée d’ordre naturel',
      field: 'Économie politique · France · XVIIIe siècle',
      summary: 'Analyser le rôle de l’agriculture dans la théorie physiocratique, le produit net, le Tableau économique et les propositions de réforme fiscale.',
      lesson: {
        sections: [
          'La physiocratie se développe en France au milieu du XVIIIe siècle autour de François Quesnay et de plusieurs auteurs qui cherchent à identifier les principes de fonctionnement de l’économie. Le terme renvoie à l’idée d’un ordre naturel dont les régularités devraient guider l’organisation économique et les décisions publiques. Cette pensée apparaît dans une société encore largement agricole, marquée par des privilèges, des réglementations et des débats sur la fiscalité et le commerce des grains.',
          'Pour Quesnay, l’agriculture est la seule activité qui crée un produit net dans son modèle théorique. Ce produit net correspond au surplus obtenu après prise en compte des avances nécessaires à la production. Les activités manufacturières et commerciales sont alors qualifiées de « stériles » dans la terminologie physiocratique. Ce qualificatif ne signifie pas qu’elles sont inutiles : il exprime une conception particulière de la création de richesse, qui diffère de la mesure contemporaine de la valeur ajoutée.',
          'Le Tableau économique, élaboré par Quesnay à partir de 1758 et diffusé en plusieurs versions, représente la circulation des revenus et des produits entre les catégories de la société. Il cherche à expliquer comment les dépenses d’un groupe deviennent les recettes d’un autre et comment la reproduction annuelle de l’économie dépend de ces flux. Cette représentation constitue un jalon dans l’analyse des interdépendances économiques, même si sa classification des activités repose sur les hypothèses propres aux physiocrates.',
          'Les physiocrates défendent généralement la liberté du commerce des grains et une réforme de la fiscalité, notamment une simplification de l’impôt centrée sur le produit net foncier. Leurs propositions s’appuient sur leur théorie de la richesse agricole et ne doivent pas être assimilées sans nuance au libéralisme contemporain. La physiocratie influence les débats économiques de la fin du XVIIIe siècle et contribue au développement de l’économie politique classique.'
        ],
        example: {
          statement: 'Une exploitation agricole produit une récolte dont la valeur dépasse les avances nécessaires à sa production. Quel concept physiocratique désigne cet excédent ?',
          calculation: 'Produit net = valeur du produit agricole - avances nécessaires à la production, selon le cadre théorique physiocratique.',
          answer: 'Il s’agit du produit net. Cette notion appartient au modèle physiocratique et ne doit pas être confondue automatiquement avec le bénéfice comptable moderne.'
        },
        exercise: {
          question: 'Pourquoi le Tableau économique constitue-t-il une contribution importante à l’histoire de la pensée économique ?',
          answer: 'Il représente les flux de produits et de revenus entre différentes catégories sociales et cherche à expliquer la reproduction et les interdépendances de l’économie.'
        },
        exercises: [
          {
            question: 'Quel économiste est associé au Tableau économique ?',
            answer: 'François Quesnay.'
          },
          {
            question: 'Que signifie le terme « stérile » dans la théorie physiocratique ?',
            answer: 'Il désigne une activité à laquelle le modèle n’attribue pas la création d’un produit net, et non une activité considérée comme socialement inutile.'
          },
          {
            question: 'Quelle réforme fiscale les physiocrates privilégient-ils généralement ?',
            answer: 'Une simplification de l’impôt et une imposition centrée sur le produit net foncier, conformément à leur théorie de la richesse.'
          }
        ],
        sources: [
          { title: 'Bibliothèque nationale de France, Gallica — Théorie économique : physiocratie', url: 'https://gallica.bnf.fr/selections/fr/html/droit-economie/theorie-economique-physiocratie' },
          { title: 'Gallica — L’économie selon Jean-Jacques Rousseau : Rousseau et les physiocrates', url: 'https://gallica.bnf.fr/accueil/fr/html/leconomie-selon-jean-jacques-rousseau' },
          { title: 'Stanford Encyclopedia of Philosophy — Economics in Early Modern Philosophy', url: 'https://plato.stanford.edu/archives/sum2022/entries/economics-early-modern/' }
        ]
      }
    },
    {
      id: 'ecole-classique-smith-ricardo-malthus',
      title: 'L’économie politique classique : Smith, Ricardo et Malthus',
      field: 'Économie politique classique · Fin XVIIIe–XIXe siècle',
      summary: 'Étudier la division du travail, la croissance, la répartition des revenus, la rente foncière et les avantages comparatifs.',
      lesson: {
        sections: [
          'La publication de La Richesse des nations d’Adam Smith en 1776 constitue un repère majeur dans la formation de l’économie politique classique. Smith étudie la division du travail, l’étendue des marchés, l’accumulation du capital et le fonctionnement des institutions qui encadrent les échanges. Il ne défend pas une absence totale d’État : il reconnaît notamment des fonctions publiques liées à la défense, à la justice et à certains travaux collectifs. Sa pensée associe ainsi l’analyse des marchés à une réflexion plus large sur la société et les institutions.',
          'La division du travail peut augmenter la productivité en améliorant l’habileté, en réduisant les changements de tâches et en favorisant l’invention de procédés. Ses effets dépendent cependant de l’étendue du marché et de l’organisation de la production. Smith examine aussi les risques d’appauvrissement intellectuel associés à des tâches excessivement répétitives. Son œuvre ne se réduit donc pas à la métaphore de la « main invisible » : elle traite de croissance, de morale, de justice et de politique économique.',
          'David Ricardo place la répartition des revenus au centre de son analyse. Dans ses Principes de l’économie politique et de l’impôt, publiés en 1817, il étudie les salaires, les profits et la rente foncière. Sa théorie des avantages comparatifs montre, dans un modèle simplifié, que des pays peuvent tirer avantage de la spécialisation et de l’échange même si l’un possède un avantage absolu dans toutes les productions. Ce résultat repose sur les coûts d’opportunité relatifs, et non uniquement sur les niveaux de productivité absolue.',
          'Thomas Robert Malthus analyse les rapports entre population et subsistances, ainsi que certaines limites possibles à la croissance. Ses propositions ont été discutées et doivent être replacées dans leur contexte historique : les technologies, les institutions et les transitions démographiques modifient les relations entre population et ressources. Les économistes classiques ne forment pas un groupe parfaitement homogène. Smith, Ricardo et Malthus divergent sur plusieurs questions, mais contribuent tous à l’analyse systématique de la production, de la croissance et de la distribution.'
        ],
        example: {
          statement: 'Le pays A produit du tissu en 2 heures et du vin en 4 heures. Le pays B produit du tissu en 6 heures et du vin en 8 heures. Quel pays possède un avantage comparatif dans chaque activité ?',
          calculation: 'Dans A, le coût d’opportunité d’une unité de tissu est de 0,5 unité de vin et celui d’une unité de vin est de 2 unités de tissu. Dans B, ces coûts sont respectivement de 0,75 unité de vin et de 1,333... unité de tissu.',
          answer: 'A possède un avantage comparatif dans le tissu, tandis que B possède un avantage comparatif dans le vin. Il s’agit du résultat du modèle simplifié, sous ses hypothèses.'
        },
        exercise: {
          question: 'Quelle différence générale distingue les analyses de Smith et de Ricardo ?',
          answer: 'Smith étudie notamment la division du travail, la productivité et les mécanismes de croissance. Ricardo accorde une place centrale à la répartition du produit entre salaires, profits et rente.'
        },
        exercises: [
          {
            question: 'En quelle année La Richesse des nations a-t-elle été publiée ?',
            answer: '1776.'
          },
          {
            question: 'Quels sont les trois revenus étudiés par Ricardo dans sa préface ?',
            answer: 'Les salaires, les profits et la rente.'
          },
          {
            question: 'Un avantage comparatif exige-t-il qu’un pays soit plus productif dans toutes les activités ?',
            answer: 'Non. Il dépend des coûts d’opportunité relatifs.'
          }
        ],
        sources: [
          { title: 'Econlib — Adam Smith, The Wealth of Nations (1776)', url: 'https://www.econlib.org/library/Smith/smWN.html' },
          { title: 'Econlib — David Ricardo, On the Principles of Political Economy and Taxation', url: 'https://www.econlib.org/library/Ricardo/ricP.html' },
          { title: 'Université Paris 1 Panthéon-Sorbonne — Bibliographie générale et sources primaires', url: 'https://cours.univ-paris1.fr/mod/folder/view.php?id=1620009' },
          { title: 'Stanford Encyclopedia of Philosophy — Economics in Early Modern Philosophy', url: 'https://plato.stanford.edu/archives/sum2022/entries/economics-early-modern/' }
        ]
      }
    },
    {
      id: 'marxisme-et-critique-du-capitalisme',
      title: 'Marxisme : valeur, plus-value et rapports de classe',
      field: 'Critique de l’économie politique · XIXe siècle',
      summary: 'Comprendre la critique marxienne du capitalisme, la valeur, la plus-value, l’accumulation et les crises.',
      lesson: {
        sections: [
          'Karl Marx développe sa critique de l’économie politique au XIXe siècle, dans le contexte de l’industrialisation, de l’urbanisation et de l’extension du salariat. Son analyse dialogue avec les économistes classiques, notamment Smith et Ricardo, tout en présentant les catégories économiques comme liées à des rapports sociaux historiquement déterminés. Le premier volume du Capital paraît en allemand en 1867. Les volumes suivants sont publiés après la mort de Marx par Friedrich Engels à partir de ses manuscrits.',
          'Marx distingue la valeur d’usage d’une marchandise, liée à son utilité, de sa valeur d’échange, exprimée dans les rapports d’échange. Le travail occupe une place centrale dans sa théorie de la valeur. Cette théorie constitue un cadre théorique spécifique et controversé ; elle ne doit pas être présentée comme une méthode universellement admise permettant de déduire directement tous les prix observés. L’analyse marxienne cherche également à expliquer comment les rapports de production structurent les classes sociales.',
          'La plus-value est centrale dans l’explication marxienne du profit. Dans son cadre théorique, le salarié vend sa force de travail, dont la valeur est liée aux conditions sociales de sa reproduction. Le travail effectué pendant la production peut créer une valeur supérieure à celle de cette force de travail. La différence constitue la plus-value, appropriée dans le cadre des rapports capitalistes de production. Ce raisonnement porte sur une relation sociale et théorique ; il ne signifie pas que chaque entreprise réalise nécessairement un profit à chaque période.',
          'Marx étudie également l’accumulation du capital, la concurrence, les transformations techniques et les crises. Les entreprises sont incitées à réinvestir et à modifier les méthodes de production, mais ces dynamiques peuvent générer des tensions sociales et économiques. Les traditions marxistes ultérieures proposent différentes interprétations de ces mécanismes, du rôle de l’État et des transformations du capitalisme. Il faut donc distinguer les textes de Marx, les courants marxistes postérieurs et les résultats de l’analyse empirique.'
        ],
        example: {
          statement: 'Dans un exemple théorique, une journée de travail crée une valeur nouvelle de 120 unités monétaires. La valeur attribuée à la force de travail est de 70 unités. Quel écart correspond à la plus-value dans ce modèle simplifié ?',
          calculation: 'Plus-value = valeur nouvelle créée - valeur de la force de travail = 120 - 70 = 50.',
          answer: 'La plus-value est de 50 unités dans cet exemple. Le calcul illustre la définition théorique de Marx et ne constitue pas une méthode comptable directement applicable à une entreprise réelle.'
        },
        exercise: {
          question: 'Pourquoi la plus-value est-elle centrale dans la critique marxienne du capitalisme ?',
          answer: 'Elle permet à Marx d’expliquer comment, dans son cadre théorique, la production génère une valeur supérieure à celle de la force de travail et comment cet excédent est approprié dans les rapports capitalistes.'
        },
        exercises: [
          {
            question: 'En quelle année le premier volume du Capital a-t-il été publié ?',
            answer: '1867.'
          },
          {
            question: 'Quelle différence existe-t-il entre valeur d’usage et valeur d’échange ?',
            answer: 'La valeur d’usage renvoie à l’utilité d’un bien ; la valeur d’échange renvoie à son rapport d’échange avec d’autres marchandises.'
          },
          {
            question: 'Les traditions marxistes postérieures sont-elles toutes identiques ?',
            answer: 'Non. Elles ont développé des interprétations différentes des textes de Marx et des transformations du capitalisme.'
          }
        ],
        sources: [
          { title: 'Marxists Internet Archive — Karl Marx, Capital, Volume I (1867)', url: 'https://www.marxists.org/archive/marx/works/1867-c1/' },
          { title: 'Routledge Historical Resources — History of Economic Thought', url: 'https://www.routledgehistoricalresources.com/economic-thought/' },
          { title: 'Université Paris 1 Panthéon-Sorbonne — Sources primaires en histoire de la pensée économique', url: 'https://cours.univ-paris1.fr/mod/folder/view.php?id=1620009' }
        ]
      }
    },
    {
      id: 'marginalisme-et-neoclassiques',
      title: 'La révolution marginaliste et la formation de l’économie néoclassique',
      field: 'Théorie économique · Années 1870–début du XXe siècle',
      summary: 'Étudier l’utilité marginale, les décisions à la marge, l’équilibre et les différences entre les principales traditions marginalistes.',
      lesson: {
        sections: [
          'Dans les années 1870, plusieurs économistes renouvellent l’analyse de la valeur et des choix. Carl Menger et William Stanley Jevons publient chacun un ouvrage majeur en 1871, puis Léon Walras publie les Éléments d’économie politique pure en 1874. Ces travaux sont habituellement regroupés sous le nom de révolution marginaliste. Cette appellation désigne une transformation importante de la théorie économique, mais elle ne doit pas masquer les différences entre les méthodes et les projets de ces auteurs.',
          'L’utilité marginale désigne l’utilité attribuée à une unité supplémentaire d’un bien dans une situation donnée. Dans de nombreux modèles, cette utilité diminue lorsque la quantité consommée augmente. Le raisonnement marginal consiste à comparer les coûts et les bénéfices d’une variation : une décision peut être avantageuse tant que son bénéfice marginal dépasse son coût marginal. Cette méthode devient fondamentale dans l’analyse microéconomique, sans supposer que les individus effectuent toujours consciemment des calculs mathématiques.',
          'Les approches marginalistes sont différentes. Menger développe une analyse de la valeur liée aux besoins et à l’importance subjective des biens ; Jevons formalise mathématiquement l’utilité et les échanges ; Walras construit un modèle d’équilibre général dans lequel plusieurs marchés sont interdépendants. Alfred Marshall contribue ensuite au développement de l’équilibre partiel, qui étudie un marché en isolant certains facteurs. Ces distinctions ont durablement influencé les méthodes de la théorie économique.',
          'L’économie néoclassique regroupe une famille d’approches étudiant les choix, les prix, l’allocation des ressources et les équilibres. Les conclusions des modèles dépendent de leurs hypothèses sur la concurrence, l’information, les préférences et les contraintes. Les marchés réels peuvent présenter des externalités, des asymétries d’information ou des pouvoirs de marché que les modèles élémentaires ne représentent pas toujours. Il faut donc distinguer les résultats théoriques conditionnels et leur application à une situation empirique.'
        ],
        example: {
          statement: 'Un consommateur attribue un avantage de 12 unités à une unité supplémentaire d’un produit, dont le coût est de 9 unités. Que suggère le raisonnement marginal ?',
          calculation: 'Gain marginal net = avantage marginal - coût marginal = 12 - 9 = 3.',
          answer: 'Le gain marginal net est positif de 3 unités. Dans ce modèle simplifié, l’achat supplémentaire est avantageux, sous réserve que les coûts et les avantages soient correctement évalués.'
        },
        exercise: {
          question: 'Pourquoi la révolution marginaliste ne doit-elle pas être présentée comme une théorie identique élaborée par trois auteurs ?',
          answer: 'Parce que Menger, Jevons et Walras partagent certains thèmes, mais diffèrent par leurs méthodes, leurs concepts et leurs modèles d’explication.'
        },
        exercises: [
          {
            question: 'Quels sont les trois auteurs habituellement associés à la révolution marginaliste des années 1870 ?',
            answer: 'Carl Menger, William Stanley Jevons et Léon Walras.'
          },
          {
            question: 'Qu’est-ce que l’utilité marginale ?',
            answer: 'L’utilité attribuée à une unité supplémentaire d’un bien dans une situation donnée.'
          },
          {
            question: 'Quelle différence générale existe-t-il entre équilibre partiel et équilibre général ?',
            answer: 'L’équilibre partiel étudie un marché en isolant certains facteurs ; l’équilibre général examine l’interdépendance de plusieurs marchés.'
          }
        ],
        sources: [
          { title: 'Cambridge University Press — The marginalist revolution: the subjective theory of value', url: 'https://www.cambridge.org/core/books/abs/wealth-of-ideas/marginalist-revolution-the-subjective-theory-of-value/77D8F4A126675BA4357C4C3D4A4DC7E2' },
          { title: 'Larousse — Marginalisme', url: 'https://www.larousse.fr/encyclopedie/divers/marginalisme/68246' },
          { title: 'Econlib — William Stanley Jevons', url: 'https://www.econlib.org/library/Enc1/bios/Jevons.html' },
          { title: 'UCLA — History of Economic Thought guided readings', url: 'https://competitionandappropriation.econ.ucla.edu/' }
        ]
      }
    },
    {
      id: 'keynesianisme-et-macroeconomie',
      title: 'Keynésianisme et naissance de la macroéconomie moderne',
      field: 'Macroéconomie · Années 1930 et après',
      summary: 'Comprendre la demande globale, le chômage involontaire, le multiplicateur et les politiques de stabilisation économique.',
      lesson: {
        sections: [
          'La Grande Dépression des années 1930 place au premier plan la persistance du chômage et la chute de la production. John Maynard Keynes publie en 1936 la Théorie générale de l’emploi, de l’intérêt et de la monnaie. Il remet en question l’idée selon laquelle les ajustements spontanés des prix et des salaires garantiraient toujours un retour rapide au plein emploi. Son travail contribue à développer la macroéconomie, qui étudie notamment la production totale, l’emploi, l’investissement et la consommation.',
          'La demande globale regroupe les dépenses de consommation, d’investissement, des administrations publiques et le solde des échanges extérieurs. Dans le raisonnement keynésien, une baisse de l’investissement peut réduire les revenus et provoquer une baisse supplémentaire de la consommation. Les entreprises ajustent alors leur production et leur emploi. Une économie peut atteindre un équilibre de court terme avec un niveau d’activité insuffisant et du chômage involontaire : un équilibre économique ne signifie donc pas nécessairement que toutes les ressources sont employées.',
          'Le multiplicateur décrit la manière dont une variation initiale des dépenses peut entraîner une variation plus importante du revenu total. Dans le modèle élémentaire sans impôts ni importations, avec une propension marginale à consommer constante, le multiplicateur est égal à 1 / (1 - c), où c représente la propension marginale à consommer. Dans les économies réelles, les impôts, les importations, les contraintes d’offre, les anticipations et la politique monétaire modifient l’ampleur de ce mécanisme.',
          'Les politiques inspirées du keynésianisme cherchent à stabiliser l’activité par les dépenses publiques, les transferts, la fiscalité ou la politique monétaire. Leur efficacité dépend du contexte, du calendrier, des capacités de production, du financement et des réactions privées. Les développements ultérieurs, notamment la synthèse néoclassique et les nouveaux modèles keynésiens, ont modifié et formalisé plusieurs mécanismes. Le keynésianisme contemporain ne doit donc pas être assimilé à l’ensemble des politiques économiques mises en œuvre depuis 1945.'
        ],
        example: {
          statement: 'Dans un modèle élémentaire, la propension marginale à consommer est c = 0,8. Calcule le multiplicateur keynésien simple.',
          calculation: 'Multiplicateur = 1 / (1 - c) = 1 / (1 - 0,8) = 1 / 0,2 = 5.',
          answer: 'Le multiplicateur théorique est égal à 5. Ce résultat découle d’hypothèses simplificatrices et ne constitue pas une estimation universelle de l’effet réel d’une dépense publique.'
        },
        exercise: {
          question: 'Comment une baisse de l’investissement peut-elle provoquer une diminution plus large de l’activité dans le raisonnement keynésien ?',
          answer: 'La baisse de l’investissement réduit directement la demande et les revenus. La diminution des revenus peut ensuite réduire la consommation, ce qui entraîne de nouvelles baisses de production et d’emploi.'
        },
        exercises: [
          {
            question: 'En quelle année Keynes publie-t-il la Théorie générale ?',
            answer: '1936.'
          },
          {
            question: 'Que signifie chômage involontaire dans l’analyse keynésienne ?',
            answer: 'Une situation où des personnes souhaitant travailler aux conditions en vigueur ne trouvent pas d’emploi, notamment en raison d’une demande globale insuffisante.'
          },
          {
            question: 'Le multiplicateur théorique de 5 est-il applicable à toutes les économies ?',
            answer: 'Non. Il résulte d’hypothèses simplificatrices et le multiplicateur réel dépend de nombreux paramètres économiques et institutionnels.'
          }
        ],
        sources: [
          { title: 'John Maynard Keynes — The General Theory of Employment, Interest and Money', url: 'https://www.marxists.org/reference/subject/economics/keynes/general-theory/ch01.htm' },
          { title: 'Encyclopaedia Britannica — John Maynard Keynes', url: 'https://www.britannica.com/money/John-Maynard-Keynes' },
          { title: 'Econlib — Library of Economics and Liberty', url: 'https://www.econlib.org/' }
        ]
      }
    },
    {
      id: 'monetarisme-et-nouvelles-approches-liberales',
      title: 'Monétarisme, anticipations et débats sur la politique économique',
      field: 'Macroéconomie et monnaie · XXe siècle',
      summary: 'Examiner les théories monétaires, les causes de l’inflation, le rôle des anticipations et les débats sur les politiques de stabilisation.',
      lesson: {
        sections: [
          'Le monétarisme, associé notamment à Milton Friedman, réaffirme l’importance de la monnaie dans l’analyse des fluctuations économiques et de l’inflation. Friedman reçoit en 1976 le prix de la Banque de Suède en sciences économiques en mémoire d’Alfred Nobel pour ses travaux sur l’analyse de la consommation, l’histoire et la théorie monétaires, ainsi que sur la complexité des politiques de stabilisation. Avec Anna Schwartz, il contribue à l’étude historique de la monnaie et de la Grande Dépression aux États-Unis.',
          'Dans la perspective monétariste, les variations de la quantité de monnaie peuvent influencer l’activité réelle à court terme et le niveau général des prix à plus long terme. Cela ne signifie pas que toute hausse de la masse monétaire provoque immédiatement une hausse proportionnelle des prix. La vitesse de circulation de la monnaie, la production, la demande de monnaie et les conditions financières influencent également les résultats. Les relations observées entre monnaie, crédit, activité et inflation doivent donc être étudiées empiriquement.',
          'Les débats portent aussi sur les règles de politique monétaire, la crédibilité des autorités, les délais de transmission et la prise en compte des anticipations. Certaines approches privilégient des règles prévisibles ; d’autres insistent sur la nécessité de réagir aux chocs économiques. Les banques centrales contemporaines utilisent plusieurs indicateurs et ne pilotent pas toutes leur politique par une cible fixe de croissance de la masse monétaire.',
          'Les nouvelles approches classiques accordent une place importante aux anticipations et étudient les limites de certaines politiques systématiquement anticipées dans leurs modèles. Les nouveaux keynésiens intègrent eux aussi les anticipations, tout en conservant des mécanismes tels que les rigidités nominales. Ces écoles ne partagent pas toutes les mêmes hypothèses. Les résultats des modèles doivent être distingués des conclusions empiriques et ne garantissent pas, à eux seuls, l’efficacité d’une politique dans toutes les situations.'
        ],
        example: {
          statement: 'Une banque centrale observe une inflation élevée. Pourquoi ne peut-elle pas conclure à partir de cette seule observation que la masse monétaire est l’unique cause ?',
          calculation: 'Il faut examiner plusieurs mécanismes : demande globale, coûts de production, contraintes d’offre, anticipations, taux de change, crédit et évolution de la monnaie. Les explications doivent ensuite être confrontées aux données.',
          answer: 'L’inflation peut avoir plusieurs causes et résulter de leurs interactions. Le rôle de la monnaie est important dans la tradition monétariste, mais l’analyse d’un épisode précis exige des données et un examen du contexte.'
        },
        exercise: {
          question: 'Quelle différence existe-t-il entre une théorie monétaire et une règle de politique monétaire ?',
          answer: 'Une théorie propose des mécanismes explicatifs ; une règle définit une méthode de décision. Passer de l’une à l’autre exige des hypothèses, des données et une analyse du contexte.'
        },
        exercises: [
          {
            question: 'À quel économiste le monétarisme est-il particulièrement associé ?',
            answer: 'Milton Friedman.'
          },
          {
            question: 'Pourquoi la relation entre masse monétaire et prix peut-elle varier selon les périodes ?',
            answer: 'Parce que la vitesse de circulation, la production, la demande de monnaie et les conditions de crédit peuvent évoluer.'
          },
          {
            question: 'Les nouveaux keynésiens et les nouvelles approches classiques partagent-ils toutes les mêmes hypothèses ?',
            answer: 'Non. Ils peuvent accorder une place aux anticipations tout en divergeant sur les rigidités, les frictions et les mécanismes des fluctuations.'
          }
        ],
        sources: [
          { title: 'Nobel Prize — Milton Friedman, facts and work', url: 'https://www.nobelprize.org/laureate/688' },
          { title: 'National Bureau of Economic Research — Milton Friedman and monetary policy', url: 'https://www.nber.org/news/milton-friedman-won-1976-nobel-prize-analysis-monetary-policy-and-its-effects' },
          { title: 'Library of Congress — Milton Friedman: A Resource Guide', url: 'https://guides.loc.gov/milton-friedman' }
        ]
      }
    },
    {
      id: 'economie-comportementale-information-et-strategie',
      title: 'Économie comportementale, information et théorie des jeux',
      field: 'Économie contemporaine · XXe–XXIe siècle',
      summary: 'Étudier les limites de certains modèles de rationalité, les asymétries d’information et les interactions stratégiques entre agents.',
      lesson: {
        sections: [
          'L’économie comportementale étudie la façon dont les décisions peuvent s’écarter de modèles de choix parfaitement cohérents. Elle mobilise notamment des expériences et des résultats de psychologie pour analyser les heuristiques, les effets de cadrage, l’aversion aux pertes et les limites de l’attention. Daniel Kahneman, avec Amos Tversky, a joué un rôle majeur dans le développement de ce domaine. Ces recherches ne montrent pas que les individus sont toujours irrationnels : elles identifient des régularités dont l’importance dépend des circonstances.',
          'L’économie de l’information étudie les situations dans lesquelles les acteurs ne disposent pas des mêmes informations. Une asymétrie d’information peut influencer les contrats d’assurance, le crédit, les prix et les décisions d’embauche. La sélection adverse apparaît lorsque des caractéristiques privées influencent la participation ou la composition d’un marché. Le risque moral concerne des actions difficiles à observer, notamment lorsqu’un comportement change après la conclusion d’un contrat. Ces mécanismes sont distincts et leurs conséquences dépendent des institutions.',
          'La théorie des jeux analyse les situations dans lesquelles les résultats dépendent des décisions de plusieurs acteurs. Elle formalise les stratégies, les incitations et les équilibres possibles. Dans un dilemme du prisonnier, des choix individuellement avantageux dans une interaction non coopérative peuvent conduire à un résultat collectif moins favorable que la coopération. Les conclusions changent toutefois selon les règles, l’information, la répétition des interactions et les possibilités d’engagement ou de sanction.',
          'Ces approches complètent les modèles économiques standards plutôt qu’elles ne les remplacent systématiquement. Une analyse rigoureuse doit expliciter le mécanisme étudié, distinguer corrélation et causalité et éviter de généraliser automatiquement une expérience locale à toutes les populations. Les modèles sont utiles pour isoler des mécanismes, mais leur pertinence empirique dépend de la qualité des données et des hypothèses.'
        ],
        example: {
          statement: 'Un assureur ne peut pas observer parfaitement le comportement de tous ses clients après la signature du contrat. Quel problème économique peut apparaître ?',
          calculation: 'Si le comportement change après la signature et reste difficile à observer, le mécanisme peut relever du risque moral. Si des caractéristiques privées influencent surtout le choix de souscrire, il peut s’agir de sélection adverse.',
          answer: 'Le risque moral peut apparaître si la couverture modifie les comportements après la signature et que l’assureur ne peut pas les observer parfaitement. Le diagnostic dépend des faits du cas.'
        },
        exercise: {
          question: 'Pourquoi l’économie comportementale ne permet-elle pas d’affirmer que les individus sont systématiquement irrationnels ?',
          answer: 'Parce qu’elle identifie des biais et des régularités dans certaines situations, mais que les décisions dépendent des personnes, des tâches, des informations et des contextes.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’une asymétrie d’information ?',
            answer: 'Une situation dans laquelle les parties à une interaction ne disposent pas de la même information pertinente.'
          },
          {
            question: 'Quelle différence distingue sélection adverse et risque moral ?',
            answer: 'La sélection adverse concerne des caractéristiques privées influençant la sélection ou la participation ; le risque moral concerne des actions difficiles à observer, souvent après la conclusion d’un contrat.'
          },
          {
            question: 'Que cherche à analyser la théorie des jeux ?',
            answer: 'Les choix stratégiques d’agents dont les résultats dépendent des décisions des autres.'
          }
        ],
        sources: [
          { title: 'Nobel Prize — Daniel Kahneman, facts and work', url: 'https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/' },
          { title: 'Nobel Prize — The 2001 Prize in Economic Sciences', url: 'https://www.nobelprize.org/prizes/economic-sciences/2001/summary/' },
          { title: 'Nobel Prize — The 1994 Prize in Economic Sciences', url: 'https://www.nobelprize.org/prizes/economic-sciences/1994/summary/' }
        ]
      }
    },
    {
      id: 'developpement-inegalites-et-capabilites',
      title: 'Économie du développement, inégalités et capabilités',
      field: 'Économie du développement · XXe–XXIe siècle',
      summary: 'Analyser la croissance, les transformations structurelles, la pauvreté, les inégalités et l’approche du développement par les capabilités.',
      lesson: {
        sections: [
          'L’économie du développement étudie les transformations qui accompagnent l’amélioration durable des conditions de vie : évolution de la productivité, de l’emploi, de l’éducation, de la santé, des infrastructures et des institutions. La croissance du produit intérieur brut peut contribuer à ces transformations, mais elle ne décrit pas à elle seule la répartition des revenus, l’accès aux services ou la sécurité des personnes. Il convient donc de distinguer croissance économique, développement humain et réduction de la pauvreté.',
          'Les théories du développement sont diverses. Certaines mettent l’accent sur l’accumulation du capital, l’industrialisation et le progrès technique ; d’autres insistent sur les institutions, les contraintes extérieures, les structures productives ou les inégalités historiques. Les trajectoires varient selon les pays et les périodes. Les capacités administratives, les conflits, la démographie, les échanges internationaux et les conditions locales influencent les résultats : il n’existe pas de stratégie unique garantissant le développement dans tous les contextes.',
          'Amartya Sen a développé l’approche par les capabilités, qui évalue le développement à partir des libertés réelles dont disposent les personnes pour mener des vies qu’elles ont des raisons de valoriser. Cette approche distingue les ressources possédées des possibilités effectives. Deux personnes disposant d’un revenu comparable peuvent avoir des capacités différentes selon leur santé, leur environnement, l’accès aux services ou les obstacles sociaux rencontrés. Cette conception a influencé les débats sur le bien-être, la pauvreté et le développement humain.',
          'La mesure des inégalités exige de préciser l’indicateur retenu : revenu, patrimoine, consommation, santé, éducation ou accès aux services. Un indicateur moyen peut masquer des différences importantes entre régions, groupes sociaux et générations. L’évaluation des politiques publiques doit distinguer les objectifs annoncés, les moyens mobilisés et les effets effectivement observés. Les données et les méthodes de comparaison sont essentielles pour éviter d’attribuer à une politique des résultats qui peuvent dépendre d’autres facteurs.'
        ],
        example: {
          statement: 'Deux régions ont le même revenu moyen par habitant, mais l’une dispose d’un accès beaucoup plus limité à l’école et aux soins. Pourquoi ne peut-on pas juger leur développement à partir du seul revenu ?',
          calculation: 'Le revenu moyen mesure une dimension économique agrégée. Pour analyser d’autres dimensions, il faut examiner notamment la santé, l’éducation, la distribution des revenus et l’accès effectif aux services.',
          answer: 'Parce que le revenu moyen ne décrit pas suffisamment les possibilités réelles de vivre en bonne santé, d’apprendre et de participer à la société. L’approche par les capabilités prend en compte ces libertés réelles.'
        },
        exercise: {
          question: 'Pourquoi la croissance du PIB ne suffit-elle pas à mesurer toutes les dimensions du développement ?',
          answer: 'Elle ne mesure pas directement la distribution des revenus, la santé, l’éducation, les libertés réelles, la qualité de l’environnement ou l’accès effectif aux services.'
        },
        exercises: [
          {
            question: 'Quel économiste est associé à l’approche par les capabilités ?',
            answer: 'Amartya Sen.'
          },
          {
            question: 'Quelle différence existe-t-il entre revenu et capabilité ?',
            answer: 'Le revenu est une ressource ; la capabilité désigne une possibilité réelle d’accomplir des activités ou des états de vie valorisés.'
          },
          {
            question: 'Pourquoi faut-il préciser l’indicateur lorsqu’on étudie les inégalités ?',
            answer: 'Parce que les inégalités de revenu, de patrimoine, de santé, d’éducation et d’accès aux services sont distinctes et peuvent évoluer différemment.'
          }
        ],
        sources: [
          { title: 'Nobel Prize — Amartya Sen, facts and work', url: 'https://www.nobelprize.org/prizes/economic-sciences/1998/sen/facts/' },
          { title: 'United Nations Development Programme — Human Development Reports', url: 'https://hdr.undp.org/' },
          { title: 'World Bank — Poverty and Equity', url: 'https://www.worldbank.org/en/topic/poverty' }
        ]
      }
    },
    {
      id: 'economie-ecologique-et-debats-contemporains',
      title: 'Économie écologique et débats contemporains',
      field: 'Économie de l’environnement · Fin du XXe–XXIe siècle',
      summary: 'Étudier les externalités, les biens communs, les instruments de politique environnementale et les débats sur la soutenabilité.',
      lesson: {
        sections: [
          'L’économie de l’environnement et l’économie écologique étudient les interactions entre les activités économiques et les systèmes naturels. L’économie de l’environnement mobilise souvent les outils économiques pour analyser la pollution, l’utilisation des ressources et les politiques de protection. L’économie écologique insiste plus explicitement sur l’inscription de l’économie dans les systèmes biophysiques et sur les limites écologiques. Ces domaines comprennent plusieurs approches et des débats méthodologiques ; leurs frontières ne sont pas absolues.',
          'Une externalité apparaît lorsqu’une activité affecte des tiers sans que cet effet soit entièrement pris en compte dans les décisions privées. Une pollution peut imposer des coûts sanitaires ou environnementaux à des personnes qui ne participent pas à la transaction. Les instruments possibles comprennent les normes, les taxes, les permis échangeables et les dispositifs de responsabilité. Leur évaluation nécessite d’examiner les dommages visés, les coûts de mise en œuvre, les effets distributifs et les résultats environnementaux observés.',
          'Les ressources communes, comme certaines pêcheries, forêts ou nappes d’eau, posent des questions de coordination et de gouvernance. Les recherches d’Elinor Ostrom montrent que des communautés peuvent élaborer des règles efficaces de gestion collective dans certaines circonstances. Les mécanismes de participation, de surveillance et de résolution des conflits peuvent contribuer à la coopération. Cela ne signifie toutefois pas que toutes les ressources communes sont toujours gérées durablement : les résultats dépendent des caractéristiques écologiques, des institutions et des conditions locales.',
          'Les débats contemporains portent sur la compatibilité entre croissance, réduction de la pauvreté et respect des limites écologiques. Les indicateurs économiques usuels ne mesurent pas entièrement la dégradation des écosystèmes, la qualité de l’air ou la distribution des coûts environnementaux. Les scénarios de transition doivent distinguer les données observées, les hypothèses des modèles et les choix normatifs. Une analyse rigoureuse précise les horizons temporels, les incertitudes et les mécanismes reliant une politique aux résultats attendus.'
        ],
        example: {
          statement: 'Une usine vend un produit à un prix qui ne tient pas compte des dommages sanitaires provoqués par ses émissions. Quel concept économique permet d’analyser cette situation ?',
          calculation: 'Coût social marginal = coût privé marginal + coût externe marginal. Si le coût externe est positif et n’est pas pris en compte, le coût social marginal dépasse le coût privé marginal.',
          answer: 'Il s’agit d’une externalité négative. La relation exprime le principe d’analyse ; une estimation réelle nécessiterait des données fiables sur les coûts privés et les dommages externes.'
        },
        exercise: {
          question: 'Pourquoi une taxe environnementale ne peut-elle pas être évaluée uniquement à partir de son montant ?',
          answer: 'Il faut également examiner les dommages visés, les réactions des producteurs et consommateurs, les possibilités de substitution, les effets distributifs et les résultats environnementaux effectivement obtenus.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’une externalité négative ?',
            answer: 'Un coût imposé à des tiers qui n’est pas entièrement intégré dans la décision ou le prix privé.'
          },
          {
            question: 'Quelle différence générale existe-t-il entre économie de l’environnement et économie écologique ?',
            answer: 'La première mobilise souvent les outils économiques pour analyser les problèmes environnementaux ; la seconde insiste davantage sur les limites biophysiques et les relations entre économie et écosystèmes.'
          },
          {
            question: 'Les travaux sur les biens communs démontrent-ils que toute ressource partagée est toujours gérée efficacement par les usagers ?',
            answer: 'Non. Ils montrent que des arrangements collectifs peuvent fonctionner dans certaines conditions, sans garantir le succès dans tous les contextes.'
          }
        ],
        sources: [
          { title: 'Nobel Prize — Elinor Ostrom, facts and work', url: 'https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/' },
          { title: 'IPCC — Sixth Assessment Report', url: 'https://www.ipcc.ch/assessment-report/ar6/' },
          { title: 'United Nations Environment Programme — Resources and reports', url: 'https://www.unep.org/resources' },
          { title: 'World Bank — Climate Change', url: 'https://www.worldbank.org/en/topic/climatechange' }
        ]
      }
    }
  ]
},

]
