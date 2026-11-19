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

{
  id: 'politique-monetaire',
  title: 'La politique monétaire : objectifs, instruments, transmission et limites',
  note: 'Six chapitres sur les objectifs des banques centrales, les taux directeurs, la transmission, les mesures non conventionnelles, l’histoire des stratégies et les limites actuelles. Les niveaux de taux cités sont datés et peuvent avoir changé : vérifier les sites officiels des banques centrales pour les valeurs en vigueur.',
  chapters: [
    {
      id: 'definition-objectifs-mandats',
      title: 'Définition, objectifs et mandats des banques centrales',
      field: 'Politique monétaire · Stabilité des prix, BCE et Réserve fédérale',
      summary: 'Comprendre ce qu’est la politique monétaire, qui la conduit et quels objectifs la loi assigne à la BCE et à la Réserve fédérale.',
      lesson: {
        sections: [
          'La politique monétaire désigne l’ensemble des décisions par lesquelles une banque centrale agit sur les conditions de financement de l’économie, principalement le niveau des taux d’intérêt et la quantité de liquidité disponible, afin d’atteindre des objectifs macroéconomiques, au premier rang desquels la stabilité des prix. Son levier repose sur un monopole : la banque centrale est l’unique émettrice de billets et de réserves bancaires, les deux composantes de la monnaie centrale (la base monétaire). Comme l’explique la BCE, grâce à ce monopole, elle peut déterminer pleinement le taux d’intérêt auquel elle fournit des fonds au système bancaire. C’est le point de départ de toute la chaîne de transmission étudiée au chapitre 3.',
          'Dans la zone euro, l’objectif principal de l’Eurosystème est d’assurer la stabilité des prix, en vertu de l’article 127 du traité sur le fonctionnement de l’Union européenne. Sans préjudice de cet objectif, le Système européen de banques centrales (SEBC) apporte son soutien aux politiques économiques générales de l’Union. Les décisions de stratégie monétaire pour l’ensemble de l’Eurosystème sont prises par le Conseil des gouverneurs de la BCE ; les banques centrales nationales, dont la Banque de France, participent à la formulation de la stratégie et à la préparation des décisions.',
          'Le traité ne chiffre pas la stabilité des prix : c’est la BCE qui la définit. En 1998, le Conseil des gouverneurs l’a définie comme une hausse annuelle de l’indice des prix à la consommation harmonisé (IPCH) inférieure à 2 % dans la zone euro. En mai 2003, à l’issue de sa première évaluation approfondie, il a précisé qu’il viserait des taux d’inflation proches de 2 % à moyen terme (formule usuelle : « inférieure à, mais proche de 2 % »). Le 8 juillet 2021, à l’issue de la revue stratégique lancée en janvier 2020, il a retenu une cible d’inflation symétrique de 2 % à moyen terme : les écarts à la cible, à la hausse comme à la baisse, sont jugés également indésirables. La déclaration relative à la stratégie publiée en 2025 confirme cette cible.',
          'Aux États-Unis, le mandat de la Réserve fédérale résulte d’un amendement de 1977 au Federal Reserve Act : promouvoir efficacement les objectifs de plein emploi (maximum employment), de stabilité des prix et de taux d’intérêt à long terme modérés. Comme les deux premiers objectifs sont les plus souvent mis en avant, on parle usuellement de « double mandat ». La formulation diffère donc de celle de la BCE, qui place la stabilité des prix au premier rang, même si les deux institutions partagent l’idée qu’une inflation basse et stable favorise une croissance durable.'
        ],
        example: {
          statement: 'L’IPCH d’une économie passe de 110,0 à 112,2 en un an. Quelle est l’inflation annuelle et est-elle compatible avec une cible de 2 % ?',
          calculation: 'Inflation = (112,2 / 110,0) − 1 = 1,02 − 1 = 0,02, soit 2 %.',
          answer: 'L’inflation annuelle est de 2 %, ce qui correspond exactement à la cible. La BCE raisonne toutefois « à moyen terme » : un écart ponctuel sur une année ne remet pas à lui seul en cause l’objectif.'
        },
        exercise: {
          question: 'Que signifie le caractère « symétrique » de la cible d’inflation de 2 % de la BCE ?',
          answer: 'Les écarts à la cible sont jugés également indésirables, qu’ils soient au-dessus ou au-dessous de 2 %.'
        },
        exercises: [
          {
            question: 'Quelle disposition du droit de l’Union européenne confie à l’Eurosystème l’objectif principal de stabilité des prix ?',
            answer: 'L’article 127 du traité sur le fonctionnement de l’Union européenne (TFUE).'
          },
          {
            question: 'Quelle cible d’inflation la BCE a-t-elle adoptée à l’issue de sa revue stratégique de juillet 2021 ?',
            answer: 'Une cible symétrique de 2 % à moyen terme, mesurée par l’IPCH.'
          },
          {
            question: 'Quels sont les trois objectifs inscrits dans le Federal Reserve Act depuis l’amendement de 1977 ?',
            answer: 'Le plein emploi (maximum employment), la stabilité des prix et des taux d’intérêt à long terme modérés. On parle de « double mandat » car les deux premiers sont les plus cités.'
          }
        ],
        sources: [
          { title: 'BCE — Déclaration relative à la stratégie de politique monétaire de la BCE (2025)', url: 'https://www.ecb.europa.eu/mopo/strategy/strategy-review/ecb.strategyreview202506_strategy_statement.fr.html' },
          { title: 'Banque de France — Assurer la stabilité des prix et lutter contre l’inflation', url: 'https://www.banque-france.fr/politique-monetaire/cadre-operationnel-de-la-politique-monetaire/les-mesures-conventionnelles' },
          { title: 'Banque de France — La BCE adopte une cible d’inflation claire et symétrique de 2 %', url: 'https://www.banque-france.fr/fr/publications-et-statistiques/publications/la-bce-adopte-une-cible-dinflation-claire-et-symetrique-de-2' },
          { title: 'BCE — La stratégie de politique monétaire de la BCE (communiqué du 8 mai 2003)', url: 'https://www.ecb.europa.eu/press/pr/date/2003/html/pr030508_2.fr.html' },
          { title: 'Federal Reserve — What economic goals does the Federal Reserve seek to achieve through its monetary policy?', url: 'https://www.federalreserve.gov/faqs/what-economic-goals-does-federal-reserve-seek-to-achieve-through-monetary-policy.htm' },
          { title: 'Federal Reserve History — Full Employment and Balanced Growth Act of 1978 (Humphrey-Hawkins)', url: 'https://www.federalreservehistory.org/essay/humphrey-hawkins-act' }
        ]
      }
    },
    {
      id: 'taux-directeurs-instruments',
      title: 'Les taux directeurs et les instruments conventionnels',
      field: 'Politique monétaire · Corridor de taux de la BCE et taux administrés de la Fed',
      summary: 'Distinguer les trois taux directeurs de la BCE, le rôle du taux de la facilité de dépôt et les outils de la Réserve fédérale.',
      lesson: {
        sections: [
          'Le Conseil des gouverneurs de la BCE fixe trois taux directeurs. Le taux de la facilité de dépôt rémunère les dépôts à un jour que les banques placent auprès de l’Eurosystème. Le taux des opérations principales de refinancement s’applique aux prêts hebdomadaires consentis aux banques contre garanties. Le taux de la facilité de prêt marginal s’applique au crédit à un jour contre garanties. Classés du plus bas au plus haut, ces trois taux forment un « corridor » : le taux de prêt marginal fait office de plafond, le taux de dépôt de plancher. Les décisions sont prises lors de réunions de politique monétaire tenues environ toutes les six semaines.',
          'Avant la crise financière de 2008, le taux des opérations principales était au centre du dispositif et les taux du marché monétaire évoluaient autour de lui, à l’intérieur du corridor. Les injections massives de liquidité réalisées depuis 2008 ont créé une abondance durable de liquidité : les taux du marché monétaire se sont rapprochés du taux de la facilité de dépôt, devenu de fait le principal taux directeur. En mars 2024, à l’issue de la revue de son cadre opérationnel, le Conseil des gouverneurs a décidé de continuer à orienter la politique monétaire par ce taux, et de ramener de 50 à 15 points de base l’écart entre le taux des opérations principales et le taux de la facilité de dépôt, à partir du 18 septembre 2024. L’écart entre le taux de prêt marginal et le taux des opérations principales est resté fixé à 25 points de base.',
          'Aux États-Unis, le Comité fédéral de l’open market (FOMC) fixe une fourchette cible pour le taux des fonds fédéraux, c’est-à-dire le taux auquel les institutions de dépôt se prêtent des réserves au jour le jour. Pour maintenir ce taux de marché dans la fourchette, la Réserve fédérale utilise des taux administrés. L’intérêt sur les réserves (IORB) est son outil principal : une banque n’a pas intérêt à prêter à un taux inférieur à ce que la Fed lui verse, ce qui établit un plancher. Le taux d’escompte est celui auquel les banques peuvent emprunter auprès de la Fed. Les opérations d’open market restent nécessaires pour que ces taux soient efficaces.',
          'Toutes les institutions actives sur le marché des fonds fédéraux ne perçoivent pas l’IORB. La Fed propose donc aussi la facilité de prise en pension à un jour (ON RRP, overnight reverse repurchase agreement facility), ouverte à un plus large éventail de grandes institutions financières : le taux offert sert de plancher complémentaire au taux des fonds fédéraux. L’ON RRP a été utilisé pour la première fois comme outil supplémentaire lors de la normalisation de la politique monétaire engagée en décembre 2015. Avant 2008, la Fed pilotait surtout le taux des fonds fédéraux en ajustant l’offre de réserves par des opérations d’open market ; le dispositif actuel dit d’abondance de réserves (ample reserves) repose, lui, sur les taux administrés.'
        ],
        example: {
          statement: 'Le 18 septembre 2024, le taux de la facilité de dépôt de la BCE a été abaissé à 3,50 %. Sachant que l’écart avec le taux des opérations principales est de 15 points de base et que l’écart entre le taux de prêt marginal et le taux des opérations principales est de 25 points de base, quels sont les deux autres taux directeurs ?',
          calculation: 'Opérations principales : 3,50 % + 0,15 point = 3,65 %. Prêt marginal : 3,65 % + 0,25 point = 3,90 %.',
          answer: 'Le taux des opérations principales est de 3,65 % et celui de la facilité de prêt marginal de 3,90 %, ce qui correspond aux niveaux annoncés par la BCE pour cette date.'
        },
        exercise: {
          question: 'Par quel taux la BCE oriente-t-elle sa politique monétaire depuis la revue de son cadre opérationnel de mars 2024 ?',
          answer: 'Par le taux de la facilité de dépôt.'
        },
        exercises: [
          {
            question: 'Quel est l’outil principal utilisé par la Réserve fédérale pour piloter le taux des fonds fédéraux dans le régime actuel d’abondance de réserves ?',
            answer: 'L’intérêt sur les réserves (IORB, interest on reserve balances).'
          },
          {
            question: 'Quel est l’écart entre le taux des opérations principales et le taux de la facilité de dépôt de la BCE depuis le 18 septembre 2024 ?',
            answer: '15 points de base (il était de 50 points de base auparavant).'
          },
          {
            question: 'Pourquoi la Fed a-t-elle ajouté la facilité de prise en pension à un jour (ON RRP) ?',
            answer: 'Parce que l’IORB n’est versé qu’aux banques et à quelques institutions : l’ON RRP permet à un plus large éventail de grandes institutions financières de placer des fonds à un taux fixé par la Fed, ce qui renforce le plancher du taux des fonds fédéraux.'
          }
        ],
        sources: [
          { title: 'BCE — Key ECB interest rates', url: 'https://www.ecb.europa.eu/stats/monetary/rates/html/index.en.html' },
          { title: 'Banco de España — ECB cuts rates by 25 basis points in September', url: 'https://www.bde.es/wbe/en/noticias-eventos/actualidad-bce/el-bce-baja-los-tipos-25-puntos-basicos-en-septiembre.html' },
          { title: 'BSI Economics — How the ECB implements its monetary policy: yesterday, today, and tomorrow', url: 'https://bsi-economics.org/comment-la-bce-met-en-oeuvre-sa-politique-monetaire-hier-aujourdhui-et-demain-note/' },
          { title: 'Federal Reserve — Policy Tools', url: 'https://federalreserve.gov/monetarypolicy/policytools.htm' },
          { title: 'Federal Reserve Bank of St. Louis — How the Fed Implements Monetary Policy with Its Tools', url: 'https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy' },
          { title: 'Federal Reserve Bank of St. Louis — How Does the Fed Use Its Monetary Policy Tools to Influence the Economy?', url: 'https://www.stlouisfed.org/publications/page-one-economics/2022/05/02/how-does-the-fed-use-its-monetary-policy-tools-to-influence-the-economy' }
        ]
      }
    },
    {
      id: 'mecanisme-transmission',
      title: 'Le mécanisme de transmission de la politique monétaire',
      field: 'Politique monétaire · Canaux de transmission, anticipations et délais',
      summary: 'Suivre le chemin entre une décision sur les taux directeurs et son effet sur la demande, les salaires et les prix.',
      lesson: {
        sections: [
          'Le mécanisme de transmission désigne le processus par lequel les décisions de politique monétaire affectent l’économie en général et le niveau des prix en particulier. La BCE souligne qu’il est caractérisé par des délais longs, variables et incertains : il est donc difficile de prévoir l’effet précis d’une décision. Cette incertitude a une conséquence pratique évoquée dans le Bulletin mensuel de la BCE de juillet 2000 : en raison de ces délais, la politique monétaire doit être orientée vers l’avenir et ne peut pas se contenter de réagir à l’inflation observée.',
          'Le premier maillon est financier. Une modification des taux directeurs agit directement sur les taux du marché monétaire et, indirectement, sur les taux débiteurs et créditeurs fixés par les banques pour leurs clients. Les taux à moyen et long terme dépendent en partie des anticipations de trajectoire des taux courts : l’annonce de futures décisions les influence donc aussi. Dans un second temps, ces conditions de financement modifient les décisions d’épargne, de consommation et d’investissement : toutes choses égales par ailleurs, des taux plus élevés rendent le crédit moins attractif pour financer une consommation ou un investissement.',
          'Les variations de consommation et d’investissement modifient la demande intérieure par rapport à l’offre. Lorsque la demande excède l’offre, des tensions haussières sur les prix sont probables ; la demande globale peut aussi resserrer ou détendre les conditions sur les marchés du travail et des produits intermédiaires, ce qui influence la formation des salaires et des prix. D’autres canaux opèrent en parallèle : le canal des prix d’actifs (effet de richesse lorsque les actions montent, valeur des garanties qui facilite l’accès au crédit), le canal du taux de change (qui joue sur les prix des biens importés) et le canal du crédit bancaire, particulièrement important en période de crise lorsque le capital des banques est plus rare.',
          'Les anticipations d’inflation constituent un canal à part entière. Une banque centrale très crédible ancre les anticipations de stabilité des prix : les agents n’ont alors pas à relever leurs prix par crainte d’une inflation plus forte, ni à les baisser par crainte d’une déflation. La BCE décrit aussi un canal de la prise de risque : des taux très bas peuvent gonfler la valeur des actifs et des garanties et rendre les actifs risqués plus attractifs, ce qui peut conduire à un assouplissement des critères d’octroi de crédit. Enfin, l’importance relative des canaux varie : le Bulletin de la BCE de 2000 relevait que, dans une grande économie relativement fermée comme la zone euro, le canal du taux de change est vraisemblablement moins important que dans de petites économies très ouvertes.'
        ],
        example: {
          statement: 'Une entreprise a un prêt de 100 000 € à taux variable, remboursé uniquement en intérêts sur un an. Son taux passe de 3 % à 4 % après un relèvement des taux directeurs. De combien ses intérêts annuels augmentent-ils ?',
          calculation: 'Intérêts à 3 % : 100 000 × 0,03 = 3 000 €. Intérêts à 4 % : 100 000 × 0,04 = 4 000 €. Écart : 4 000 − 3 000 = 1 000 €.',
          answer: 'Les intérêts annuels augmentent de 1 000 €. Cet exemple isole un seul maillon (le coût du crédit) ; l’effet global sur l’économie passe par l’ensemble des canaux et se manifeste avec des délais variables.'
        },
        exercise: {
          question: 'Pourquoi la crédibilité d’une banque centrale est-elle importante pour la transmission de la politique monétaire ?',
          answer: 'Parce qu’une banque centrale crédible ancre les anticipations d’inflation : les entreprises et les ménages n’ont pas à relever leurs prix ou leurs salaires par crainte d’une inflation plus forte.'
        },
        exercises: [
          {
            question: 'Comment la BCE qualifie-t-elle les délais du mécanisme de transmission ?',
            answer: 'Longs, variables et incertains.'
          },
          {
            question: 'Citez deux canaux de transmission, autres que celui des taux d’intérêt, décrits par la BCE.',
            answer: 'Par exemple le canal des anticipations, celui des prix d’actifs, celui du taux de change et celui du crédit bancaire (ainsi que le canal de la prise de risque).'
          },
          {
            question: 'Pourquoi le canal du taux de change est-il, selon le Bulletin de la BCE de 2000, vraisemblablement moins important pour la zone euro que pour de petites économies ouvertes ?',
            answer: 'Parce que la zone euro est une grande économie relativement fermée.'
          }
        ],
        sources: [
          { title: 'BCE — Transmission mechanism of monetary policy', url: 'https://www.ecb.europa.eu/mopo/intro/transmission' },
          { title: 'BCE — Bulletin mensuel de juillet 2000 : Monetary policy transmission in the euro area', url: 'https://www.ecb.europa.eu/pub/pdf/other/pp43_58_mb200007en.pdf' },
          { title: 'Banco de España — How does monetary policy act?', url: 'https://www.bde.es/wbe/en/areas-actuacion/politica-monetaria/preguntas-frecuentes/politica-monetaria-y-estabilidad-precios/como-actua-politica-monetaria.html' },
          { title: 'Bank of Lithuania — How monetary policy works', url: 'https://www.lb.lt/en/how-monetary-policy-works' }
        ]
      }
    },
    {
      id: 'mesures-non-conventionnelles',
      title: 'Les mesures non conventionnelles : assouplissement quantitatif et taux négatifs',
      field: 'Politique monétaire · APP, PEPP, TLTRO et taux de dépôt négatifs de la BCE',
      summary: 'Comprendre pourquoi et comment la BCE a recouru aux achats d’actifs et à d’autres mesures lorsque les taux directeurs seuls ne suffisaient plus.',
      lesson: {
        sections: [
          'Lorsque les taux directeurs sont proches de leur plancher effectif, ou lorsque la transmission de la politique monétaire est perturbée, les banques centrales peuvent recourir à des mesures dites non conventionnelles. L’assouplissement quantitatif (quantitative easing, QE) en est la plus connue : selon la Banque de France, il s’agit d’une intervention massive et prolongée sur les marchés financiers, par l’achat de grandes quantités d’actifs financiers. La BCE a aussi mis en place, depuis 2014, plusieurs opérations de refinancement à plus long terme ciblées (TLTRO) afin de soutenir le financement de l’économie.',
          'Le programme d’achats d’actifs (APP, asset purchase programme) est le premier programme de QE de la BCE. Le 22 janvier 2015, le Conseil des gouverneurs a annoncé un programme élargi incluant des achats de titres publics ; les achats effectifs de titres publics (PSPP) ont débuté en mars 2015. L’APP comprend quatre sous-programmes : le programme d’achat de titres publics (PSPP), le programme d’achat de titres adossés à des actifs (ABSPP, lancé en novembre 2014), le troisième programme d’achat d’obligations sécurisées (CBPP3) et, depuis la décision du 10 mars 2016, le programme d’achat d’obligations d’entreprises (CSPP). Les achats nets mensuels ont été de 60 milliards d’euros de mars 2015 à mars 2016, 80 milliards d’avril 2016 à mars 2017, 60 milliards d’avril à décembre 2017, puis 30 milliards de janvier à septembre 2018.',
          'Les achats nets de l’APP ont pris fin à la fin de 2018, avant une phase de réinvestissement intégral du principal des titres arrivant à échéance. Les achats nets ont repris en novembre 2019, puis, à partir de mars 2023, la BCE a cessé les achats nets et réduit les réinvestissements ; depuis juillet 2023, le principal des titres arrivant à échéance n’est plus réinvesti. Le portefeuille de l’APP décroît donc au fil des échéances.',
          'Le 18 mars 2020, en réponse à la crise sanitaire, le Conseil des gouverneurs a annoncé un programme d’achats d’urgence face à la pandémie (PEPP, pandemic emergency purchase programme), doté d’une enveloppe initiale de 750 milliards d’euros, afin de contrer les risques pesant sur la transmission de la politique monétaire et sur les perspectives de la zone euro. Les achats ont commencé le 26 mars 2020 ; les achats nets ont été interrompus à la fin de mars 2022, et les remboursements de principal ont été réinvestis intégralement durant le premier semestre 2024. Pour traiter les risques de fragmentation de la transmission au sein de la zone euro, la BCE a créé en 2022 l’instrument de protection de la transmission (TPI). Enfin, le taux de la facilité de dépôt a été négatif à partir de juin 2014, jusqu’à ce que le relèvement de juillet 2022 le ramène à zéro.'
        ],
        example: {
          statement: 'Les achats nets mensuels de l’APP ont été de 60 milliards d’euros d’avril à décembre 2017, puis de 30 milliards d’euros de janvier à septembre 2018. Quel montant cumulé d’achats nets mensuels cela représente-t-il sur ces 18 mois ?',
          calculation: 'Avril–décembre 2017 : 9 mois × 60 = 540 milliards. Janvier–septembre 2018 : 9 mois × 30 = 270 milliards. Total : 540 + 270 = 810 milliards d’euros.',
          answer: 'Environ 810 milliards d’euros, en additionnant les rythmes mensuels annoncés. Ce calcul est une approximation fondée sur le rythme mensuel cible, non sur les montants réellement exécutés mois par mois.'
        },
        exercise: {
          question: 'Pourquoi parle-t-on de mesures « non conventionnelles » ?',
          answer: 'Parce qu’elles s’ajoutent aux outils habituels de pilotage des taux directeurs : achats massifs d’actifs, refinancements à long terme ciblés, instruments de protection de la transmission.'
        },
        exercises: [
          {
            question: 'Quelle était l’enveloppe initiale du PEPP annoncé le 18 mars 2020 ?',
            answer: '750 milliards d’euros.'
          },
          {
            question: 'Quand les achats nets du PEPP ont-ils été interrompus ?',
            answer: 'À la fin de mars 2022.'
          },
          {
            question: 'Citez les quatre sous-programmes de l’APP.',
            answer: 'Le PSPP (titres publics), l’ABSPP (titres adossés à des actifs), le CBPP3 (obligations sécurisées) et le CSPP (obligations d’entreprises).'
          }
        ],
        sources: [
          { title: 'BCE — Asset purchase programmes', url: 'https://www.ecb.europa.eu/mopo/implement/app' },
          { title: 'Suomen Pankki — Monetary policy purchase programmes', url: 'https://www.suomenpankki.fi/en/Monetary-policy/implementation-of-monetary-policy/monetary-policy-purchase-programmes/' },
          { title: 'Banque de France — The asset purchase programme (APP), the ECB’s first quantitative easing programme', url: 'https://banque-france.fr/en/monetary-strategy/operational-framework/asset-purchase-programmes' },
          { title: 'Banque de France — Non-standard monetary policy measures to improve the financing of the economy', url: 'https://www.banque-france.fr/en/monetary-policy/monitoring-and-development-market-financing/lending-facilities' },
          { title: 'Deutsche Bundesbank — Asset purchase programme (APP)', url: 'https://bundesbank.de/en/tasks/monetary-policy/outright-transactions/asset-purchase-programme-app--831134' },
          { title: 'BCE — Taux d’intérêt directeurs de la BCE (historique)', url: 'https://www.ecb.europa.eu/stats/monetary/rates/html/index.fr.html' }
        ]
      }
    },
    {
      id: 'histoire-strategies',
      title: 'Histoire des stratégies : Grande Inflation, ciblage d’inflation et règles',
      field: 'Politique monétaire · Années 1960-1990 : Volcker, Nouvelle-Zélande et règle de Taylor',
      summary: 'Retracer comment l’expérience de l’inflation des années 1970 a conduit au ciblage d’inflation et aux règles de politique monétaire.',
      lesson: {
        sections: [
          'On appelle Grande Inflation la période de forte inflation, large et volatile, vécue par les États-Unis entre le milieu des années 1960 et le début des années 1980. Dans la décennie précédente, l’inflation américaine moyenne se situait autour de 2 à 2,5 %. Les causes de la Grande Inflation restent discutées : certains économistes l’attribuent principalement à des erreurs de politique monétaire, d’autres mettent aussi en avant les prix du pétrole ou les dépenses liées à la guerre du Vietnam. Une des leçons généralement retenues par la Fed de Saint-Louis est que la stabilité des prix est essentielle à une économie solide et en croissance.',
          'En octobre 1979, le président de la Réserve fédérale, Paul Volcker, nommé en août de la même année, a annoncé de nouvelles mesures du FOMC destinées à enrayer l’inflation : la Fed accordait davantage de poids au contrôle des quantités de monnaie. La désinflation qui a suivi a été coûteuse : deux récessions au début des années 1980, une production stagnante de 1979 à 1982, un chômage supérieur à 10 % et de nombreuses faillites d’entreprises dues à des taux d’intérêt élevés. L’inflation a en revanche nettement reculé, de niveaux à deux chiffres à environ 3 à 4 % vers 1982-1983 selon les mesures. Cet épisode a montré qu’une banque centrale peut ramener l’inflation à un niveau bas, mais que cela peut coûter cher en activité et en emploi.',
          'La Nouvelle-Zélande a été le premier pays à adopter formellement le ciblage d’inflation. Le Reserve Bank of New Zealand Act, adopté en 1989, est entré en vigueur le 1er février 1990. Il reposait sur quatre idées : l’indépendance opérationnelle de la banque centrale, un objectif unique de stabilité des prix, un gouverneur seul décideur et la transparence. Le premier accord sur les objectifs de politique monétaire (Policy Targets Agreement) a été signé en mars 1990, alors que l’inflation de l’indice des prix à la consommation était d’un peu plus de 5 % et que l’économie était en récession. La cible initiale était une inflation annuelle de 0 à 2 % à atteindre d’ici décembre 1992. Par la suite, de nombreux pays, dont le Royaume-Uni et le Canada, ont ciblé l’inflation dans les années 1990.',
          'Parallèlement, la réflexion sur les règles a progressé. En 1993, l’économiste John Taylor a proposé, dans l’article « Discretion versus Policy Rules in Practice » (Carnegie-Rochester Conference Series on Public Policy, vol. 39), une formule simple reliant le taux des fonds fédéraux à l’écart d’inflation et à l’écart de production : taux = (taux d’équilibre réel R + inflation I) + 0,5 × écart de production + 0,5 × (I − cible), avec R et la cible fixés à 2 % dans la version originale. Cette règle sert de repère, non de recette mécanique : elle ne considère que l’inflation et l’écart de production et ne peut donc pas prendre en compte d’autres facteurs, comme une turbulence financière.'
        ],
        example: {
          statement: 'Selon la règle de Taylor de 1993 (R = 2 %, cible = 2 %), quel taux des fonds fédéraux la règle indique-t-elle si l’inflation est de 3 % et l’écart de production de +1 % ?',
          calculation: 'Taux = (R + I) + 0,5 × écart de production + 0,5 × (I − cible) = (2 + 3) + 0,5 × 1 + 0,5 × (3 − 2) = 5 + 0,5 + 0,5 = 6,0 %.',
          answer: 'La règle indique un taux de 6,0 %. À inflation de 2 % et écart de production nul, elle donnerait 4 % (2 % de taux réel d’équilibre + 2 % d’inflation).'
        },
        exercise: {
          question: 'Pourquoi la désinflation menée par Volcker est-elle qualifiée de coûteuse ?',
          answer: 'Elle s’est accompagnée de deux récessions au début des années 1980, d’une production stagnante de 1979 à 1982 et d’un chômage supérieur à 10 %.'
        },
        exercises: [
          {
            question: 'Quelle banque centrale a été la première à adopter formellement le ciblage d’inflation, et en quelle année ?',
            answer: 'La Reserve Bank of New Zealand, en 1990 (loi de 1989 entrée en vigueur le 1er février 1990).'
          },
          {
            question: 'En quelle année Taylor a-t-il publié l’article proposant sa règle, et quel coefficient affecte l’écart d’inflation ?',
            answer: 'En 1993 ; le coefficient est de 0,5 (de même que pour l’écart de production).'
          },
          {
            question: 'Quels sont les quatre principes sur lesquels reposait la loi néo-zélandaise de 1989 ?',
            answer: 'L’indépendance opérationnelle de la banque centrale, un objectif unique de stabilité des prix, un gouverneur seul décideur et la transparence.'
          }
        ],
        sources: [
          { title: 'Federal Reserve History — Volcker’s Announcement of Anti-Inflation Measures', url: 'https://www.federalreservehistory.org/essays/anti-inflation-measures' },
          { title: 'Federal Reserve Bank of St. Louis — The Great Inflation: A Historical Overview and Lessons Learned', url: 'https://www.stlouisfed.org/publications/page-one-economics/2012/10/01/the-great-inflation-a-historical-overview-and-lessons-learned' },
          { title: 'Federal Reserve Bank of St. Louis Review — The Volcker Tightening Cycle: Explaining the 1982 Course Reversal', url: 'https://www.stlouisfed.org/publications/review/2025/jan/volcker-tightening-cycle-explaining-1982-course-reversal' },
          { title: 'Te Ara — Reserve Bank : Central bank independence', url: 'https://teara.govt.nz/en/reserve-bank/page-3' },
          { title: 'FMI — Sherwin, Strategic Choices in Inflation Targeting: The New Zealand Experience', url: 'https://www.imf.org/external/pubs/ft/seminar/2000/Targets/strach3.pdf' },
          { title: 'LSE — Transparent Monetary Policy: A History of Inflation Targeting in New Zealand', url: 'https://www.lse.ac.uk/iga/assets/documents/research-and-publications/Transparent-Monetary-Policy-a-history-of-inflation-targeting-in-New-Zealand.pdf' },
          { title: 'Congressional Research Service — Taylor rule (RS21821)', url: 'https://www.everycrsreport.com/files/20080630_RS21821_00ac0e7257139eddd9110c8fdac9219e882b90f9.html' }
        ]
      }
    },
    {
      id: 'limites-defis-contemporains',
      title: 'Limites, risques et défis contemporains de la politique monétaire',
      field: 'Politique monétaire · Déflation, inflation post-pandémie, fragmentation et prise de risque',
      summary: 'Identifier les limites de l’action des banques centrales et les débats ouverts depuis la crise de 2008 et le choc inflationniste post-pandémique.',
      lesson: {
        sections: [
          'La première limite tient à l’incertitude. Les délais de transmission étant longs, variables et incertains, une banque centrale décide sans connaître avec précision l’effet de ses décisions sur l’activité et les prix. D’où l’importance accordée à la crédibilité et aux anticipations d’inflation : une cible claire, comme la cible symétrique de 2 % de la BCE, fournit un point d’ancrage pour ces anticipations. La déclaration relative à la stratégie de 2025 note que la période de faible inflation, puis la flambée des prix observée après la pandémie, soulignent l’importance d’une stratégie qui permette de réagir efficacement à des changements majeurs de l’environnement économique.',
          'La deuxième limite est le plancher des taux d’intérêt. Selon l’économiste Panicos Demetriades, les banques centrales redoutent particulièrement la déflation, car la marge de baisse des taux est limitée lorsque l’inflation est négative ; des taux négatifs sur l’épargne peuvent, en incitant à détenir des espèces ou des actifs réels plutôt que des dépôts, entraîner une désintermédiation préjudiciable au financement des PME et des ménages. C’est dans ce contexte que la BCE a eu recours à des taux de dépôt négatifs à partir de 2014 et aux programmes d’achats d’actifs étudiés au chapitre 4.',
          'La troisième limite apparaît quand l’inflation dépasse la cible. En juillet 2022, la BCE a relevé ses taux directeurs de 50 points de base, soit la première hausse depuis 2011, mettant fin aux taux de dépôt négatifs. Le taux de la facilité de dépôt a ensuite atteint 4,00 % en septembre 2023, avant une première baisse à 3,75 % le 12 juin 2024 puis à 3,50 % le 18 septembre 2024. Selon la BCE, une politique qui stabilise l’inflation autour de 2 % à moyen terme contribue à une croissance pérenne et à la création d’emplois, et limite les inégalités accentuées par une vive inflation.',
          'Enfin, les mesures prises en période de crise soulèvent des risques propres. La fragmentation de la transmission au sein de la zone euro, c’est-à-dire des conditions de financement très différentes d’un pays à l’autre, a conduit à la création de l’instrument de protection de la transmission (TPI), conçu pour une transmission plus efficace de la politique monétaire. La BCE décrit aussi un canal de la prise de risque : des taux très bas peuvent conduire à un assouplissement des critères d’octroi de crédit et à une offre de prêts excessive. Ces débats expliquent que les banques centrales réexaminent périodiquement leur stratégie : la BCE l’avait fait en 2003, puis de 2020 à 2021, et a publié une nouvelle déclaration en 2025.'
        ],
        example: {
          statement: 'Un taux directeur nominal est de 4,00 % alors que l’inflation annuelle est de 6,00 %. Quel est le taux réel approximatif et que peut-on en conclure ?',
          calculation: 'Taux réel ≈ taux nominal − inflation = 4,00 − 6,00 = −2,00 points.',
          answer: 'Le taux réel approximatif est d’environ −2 points : malgré un taux nominal apparemment élevé, le coût réel de l’emprunt est négatif, ce qui est favorable aux emprunteurs. C’est pourquoi les banques centrales raisonnent en taux réels et en anticipations plutôt qu’en taux nominaux seuls.'
        },
        exercise: {
          question: 'Pourquoi des taux d’intérêt négatifs sur l’épargne peuvent-ils poser problème selon Panicos Demetriades ?',
          answer: 'Ils peuvent inciter ménages et entreprises à détenir des espèces ou des actifs réels plutôt que des dépôts bancaires, d’où une désintermédiation préjudiciable au financement de l’économie.'
        },
        exercises: [
          {
            question: 'Quel événement de juillet 2022 a mis fin aux taux de dépôt négatifs de la BCE ?',
            answer: 'Un relèvement de 50 points de base des taux directeurs, le premier depuis 2011.'
          },
          {
            question: 'À quoi sert l’instrument de protection de la transmission (TPI) de la BCE ?',
            answer: 'À assurer une transmission plus efficace de la politique monétaire, notamment face aux risques de fragmentation au sein de la zone euro.'
          },
          {
            question: 'Quel risque la BCE associe-t-elle au « canal de la prise de risque » lorsque les taux sont très bas ?',
            answer: 'Un assouplissement des critères d’octroi de crédit pouvant conduire à une offre de prêts excessive.'
          }
        ],
        sources: [
          { title: 'BCE — Déclaration relative à la stratégie de politique monétaire de la BCE (2025)', url: 'https://www.ecb.europa.eu/mopo/strategy/strategy-review/ecb.strategyreview202506_strategy_statement.fr.html' },
          { title: 'BCE — Transmission mechanism of monetary policy', url: 'https://www.ecb.europa.eu/mopo/intro/transmission' },
          { title: 'BCE — Retour d’information sur les contributions du Parlement européen (avril 2024)', url: 'https://www.ecb.europa.eu/press/feedbackar/html/ecb.20240418_feedback_on_the_input_provided_by_the_european_parliament~c6c356ed09.fr.html' },
          { title: 'Cambridge University Press — Demetriades, Central Bank Independence and the Future of the Euro (chapitre sur les politiques de la BCE pendant la crise)', url: 'https://cambridge.org/core/books/central-bank-independence-and-the-future-of-the-euro/european-central-banks-policies-during-the-crisis/A39343DFA1ABFD49B841CA564FD200AA' },
          { title: 'Banque de France — The asset purchase programme (APP), the ECB’s first quantitative easing programme', url: 'https://banque-france.fr/en/monetary-strategy/operational-framework/asset-purchase-programmes' },
          { title: 'De Nederlandsche Bank — ECB interest rates', url: 'https://dnb.nl/en/the-euro-and-europe/the-ecb-s-monetary-policy/ecb-interest-rates' },
          { title: 'Banco de España — ECB cuts rates by 25 basis points in September', url: 'https://www.bde.es/wbe/en/noticias-eventos/actualidad-bce/el-bce-baja-los-tipos-25-puntos-basicos-en-septiembre.html' }
        ]
      }
    }
  ]
},


{
  id: 'grandes-crises',
  title: 'Les grandes crises économiques',
  note: 'Six chapitres consacrés à six crises majeures de l’époque contemporaine : la Grande Dépression, les chocs pétroliers des années 1970, la crise de la dette latino-américaine, la crise asiatique, la crise financière mondiale de 2007-2009 et la crise des dettes souveraines de la zone euro. Chaque crise est étudiée à travers ses causes, ses mécanismes de propagation, ses conséquences et les réponses publiques. Les crises ont des causes multiples : les repères chronologiques ne signifient pas qu’un événement unique explique à lui seul l’ensemble du phénomène.',
  chapters: [
    {
      id: 'grande-depression-1929',
      title: 'La Grande Dépression : du krach de 1929 à la crise économique mondiale',
      field: 'Histoire économique · 1929-1941',
      summary: 'Distinguer le krach boursier de 1929 de la dépression qui s’étend ensuite, comprendre les paniques bancaires, la contraction du crédit, la déflation et la transmission internationale de la crise.',
      lesson: {
        sections: [
          'La Grande Dépression commence aux États-Unis en 1929 et devient une crise internationale durable. Le krach boursier d’octobre 1929 constitue un événement majeur, mais il ne suffit pas à expliquer à lui seul la profondeur et la durée de la dépression. L’activité économique américaine avait déjà atteint un sommet en août 1929 selon la chronologie étudiée par la Federal Reserve History. Les fragilités bancaires, la contraction du crédit, la baisse des dépenses et les difficultés de coordination des politiques économiques contribuent à transformer le ralentissement en effondrement prolongé.',
          'Après le krach, plusieurs vagues de paniques bancaires se produisent, notamment en 1930 et 1931, puis une crise bancaire nationale et internationale s’aggrave entre 1931 et 1933. Les retraits de dépôts et les faillites bancaires réduisent la capacité des banques à accorder des crédits. Aux États-Unis, la masse monétaire diminue fortement entre l’automne 1930 et l’hiver 1933. La déflation augmente le poids réel des dettes : lorsque les prix et les revenus baissent alors que la dette nominale demeure, ménages et entreprises doivent consacrer une part plus importante de leurs ressources au remboursement. Les dépenses, la production et l’emploi reculent à leur tour.',
          'La crise se diffuse à l’étranger par les liens commerciaux et financiers ainsi que par les contraintes du système monétaire international de l’époque. Le recul de la demande américaine affecte les exportateurs ; les tensions bancaires et monétaires fragilisent d’autres économies. Les politiques protectionnistes et les réponses économiques nationales ont également contribué au contexte international défavorable, mais les historiens débattent du poids relatif de chaque facteur. Aux États-Unis, le système bancaire atteint un point critique en mars 1933, lorsque Franklin D. Roosevelt déclare une suspension temporaire des opérations bancaires. Des réformes financières suivent. La reprise est irrégulière, avec une nouvelle récession en 1937-1938 ; le retour à une mobilisation productive complète intervient pendant la Seconde Guerre mondiale.',
          'La leçon centrale n’est pas qu’un krach boursier provoque toujours une dépression. Le risque devient beaucoup plus grave lorsque les pertes financières se combinent avec des faillites bancaires, une contraction du crédit, la déflation et des réponses publiques insuffisantes ou mal coordonnées. Les analyses historiques soulignent notamment l’importance de préserver le fonctionnement du système de paiement et d’éviter qu’une crise bancaire ne réduise brutalement la monnaie et le crédit disponibles dans l’économie.'
        ],
        example: {
          statement: 'Un indice boursier atteint 100 points avant une crise puis tombe à 20 points. Quelle est sa baisse par rapport à son niveau initial, et que permet-elle de conclure sur l’ensemble de l’économie ?',
          calculation: 'Baisse en pourcentage = ((100 - 20) / 100) × 100 = 80 %.',
          answer: 'L’indice a baissé de 80 %. Ce résultat décrit uniquement l’évolution de l’indice considéré. Il ne prouve pas que le PIB, les revenus ou la production ont eux aussi diminué de 80 % ; ces indicateurs doivent être mesurés séparément.'
        },
        exercise: {
          question: 'Pourquoi le krach boursier d’octobre 1929 ne suffit-il pas à expliquer toute la Grande Dépression ?',
          answer: 'Parce que la dépression résulte d’un enchaînement de facteurs, dont les paniques bancaires, la contraction du crédit et de la monnaie, la déflation, la baisse de la demande et la propagation internationale. Le ralentissement économique avait commencé avant le krach.'
        },
        exercises: [
          {
            question: 'À quelle période la Grande Dépression est-elle généralement située dans l’histoire économique des États-Unis ?',
            answer: 'La Federal Reserve History la présente comme une dépression allant de 1929 à 1941, avec une reprise irrégulière et une récession supplémentaire en 1937-1938.'
          },
          {
            question: 'Comment la déflation peut-elle aggraver une crise de la dette ?',
            answer: 'Si les prix et les revenus diminuent tandis que la somme nominale à rembourser reste inchangée, la dette représente une charge réelle plus lourde pour les emprunteurs.'
          },
          {
            question: 'Quel rôle les paniques bancaires ont-elles joué ?',
            answer: 'Elles ont fragilisé les banques, réduit l’offre de crédit et contribué à la contraction de la monnaie et de l’activité économique.'
          }
        ],
        sources: [
          {
            title: 'Federal Reserve History — The Great Depression',
            url: 'https://www.federalreservehistory.org/essays/great-depression'
          },
          {
            title: 'Federal Reserve History — Stock Market Crash of 1929',
            url: 'https://www.federalreservehistory.org/essays/stock-market-crash-of-1929'
          },
          {
            title: 'Federal Reserve Bank of St. Louis — What Caused the Great Depression?',
            url: 'https://www.stlouisfed.org/the-great-depression/curriculum/economic-episodes-in-american-history-part-5'
          },
          {
            title: 'OpenStax — The Stock Market Crash of 1929',
            url: 'https://openstax.org/books/us-history/pages/25-1-the-stock-market-crash-of-1929'
          }
        ]
      }
    },
    {
      id: 'chocs-petroliers-stagflation',
      title: 'Les chocs pétroliers des années 1970 : inflation, récession et stagflation',
      field: 'Économie internationale · 1973-1982',
      summary: 'Expliquer comment les hausses du prix du pétrole ont renchéri les coûts de production, aggravé l’inflation et contribué aux récessions, sans réduire toute la stagflation à une cause unique.',
      lesson: {
        sections: [
          'Les économies industrialisées des années 1970 sont confrontées à une inflation élevée et à un ralentissement de l’activité. Le premier choc pétrolier intervient en 1973-1974. Le 19 octobre 1973, dans le contexte de la guerre du Kippour et du soutien américain à Israël, l’Organisation des pays arabes exportateurs de pétrole annonce un embargo visant les États-Unis et des réductions de production. Selon la Federal Reserve History, le prix du pétrole passe d’environ 2,90 dollars le baril avant l’embargo à 11,65 dollars en janvier 1974, soit près de quatre fois plus. L’embargo est levé en mars 1974, mais les prix restent élevés.',
          'Le pétrole est un intrant important pour les transports, le chauffage, l’industrie et l’agriculture. Une hausse rapide de son prix augmente directement la facture énergétique et renchérit indirectement de nombreux biens et services. Les entreprises doivent absorber ces coûts, réduire leurs marges ou relever leurs prix ; les ménages consacrent davantage de revenus à l’énergie et peuvent réduire d’autres achats. Les pays importateurs voient aussi leur facture extérieure augmenter. Ces effets peuvent freiner la production tout en poussant les prix à la hausse. Le choc pétrolier se superpose toutefois à d’autres facteurs : inflation déjà présente, évolution du système monétaire international, politiques macroéconomiques et tensions sur d’autres matières premières.',
          'Un second choc énergétique se développe en 1978-1979, dans le contexte de la révolution iranienne et d’une forte demande mondiale. La baisse de la production iranienne contribue à l’inquiétude sur l’offre, tandis que les anticipations et la demande de précaution accentuent la hausse des cours. La stagflation désigne la coexistence d’une inflation élevée et d’une activité faible ou d’un chômage élevé ; elle complique les décisions de politique économique. Une relance de la demande peut soutenir l’emploi mais aggraver les pressions sur les prix, alors qu’un resserrement monétaire peut réduire l’inflation au prix d’un ralentissement supplémentaire à court terme.',
          'À partir de 1979, la Réserve fédérale américaine sous la présidence de Paul Volcker adopte une politique monétaire fortement restrictive pour faire reculer l’inflation. Les taux d’intérêt augmentent nettement et l’inflation américaine diminue au début des années 1980, mais le resserrement contribue aussi à une récession sévère. Cette politique et les chocs pétroliers n’expliquent pas seuls les difficultés de toutes les économies : leurs effets dépendent de la dépendance énergétique, des institutions, des politiques nationales et de la situation initiale. Les réponses à long terme comprennent les économies d’énergie, la diversification des approvisionnements et une politique monétaire visant à stabiliser les anticipations de prix.'
        ],
        example: {
          statement: 'Le prix du baril passe de 2,90 dollars à 11,65 dollars. Calcule le facteur de multiplication et l’augmentation en pourcentage à partir de ces deux valeurs historiques.',
          calculation: 'Facteur = 11,65 / 2,90 ≈ 4,02. Augmentation = ((11,65 - 2,90) / 2,90) × 100 ≈ 301,7 %.',
          answer: 'Le prix a été multiplié par environ 4,02, soit une hausse d’environ 301,7 %. Le calcul concerne le prix cité par la Federal Reserve History entre les deux repères indiqués ; il ne mesure pas directement l’inflation générale ni la hausse du coût de la vie.'
        },
        exercise: {
          question: 'Pourquoi un choc pétrolier peut-il provoquer à la fois une hausse des prix et un ralentissement économique ?',
          answer: 'Le pétrole plus cher augmente les coûts de production et de transport, ce qui pousse les prix à la hausse. En même temps, il réduit le pouvoir d’achat des ménages et les marges des entreprises, ce qui peut freiner la consommation, l’investissement et la production.'
        },
        exercises: [
          {
            question: 'Quel événement déclenche le premier choc pétrolier de 1973 ?',
            answer: 'L’embargo pétrolier annoncé par des pays arabes exportateurs de pétrole dans le contexte de la guerre du Kippour, accompagné de réductions de production.'
          },
          {
            question: 'Que signifie le terme « stagflation » ?',
            answer: 'Il désigne la coexistence d’une inflation élevée et d’une activité économique faible, souvent accompagnée d’un chômage élevé.'
          },
          {
            question: 'Pourquoi la hausse des taux d’intérêt peut-elle réduire l’inflation tout en aggravant temporairement une récession ?',
            answer: 'Des taux plus élevés renchérissent le crédit et freinent certaines dépenses et certains investissements. Cela peut modérer la demande et les prix, mais aussi ralentir l’activité et l’emploi à court terme.'
          }
        ],
        sources: [
          {
            title: 'Federal Reserve History — Oil Shock of 1973-74',
            url: 'https://www.federalreservehistory.org/essays/oil-shock-of-1973-74'
          },
          {
            title: 'Federal Reserve History — Oil Shock of 1978-79',
            url: 'https://www.federalreservehistory.org/essays/oil-shock-of-1978-79'
          },
          {
            title: 'Federal Reserve History — The Great Inflation',
            url: 'https://www.federalreservehistory.org/essays/great-inflation'
          },
          {
            title: 'Federal Reserve Bank of Cleveland — The 1970s: The Great Inflation',
            url: 'https://www.clevelandfed.org/-/media/project/clevelandfedtenant/clevelandfedsite/publications/working-papers/2019/wp-1913-federal-reserve-structure-economic-ideas-and-monetary-and-financial-policy-pdf.pdf'
          }
        ]
      }
    },
    {
      id: 'crise-dette-amerique-latine',
      title: 'La crise de la dette latino-américaine : la « décennie perdue »',
      field: 'Finance internationale · 1970-1989',
      summary: 'Comprendre l’accumulation de dettes extérieures, la hausse des taux d’intérêt internationaux, le défaut de paiement annoncé par le Mexique en 1982 et les conséquences sociales des ajustements.',
      lesson: {
        sections: [
          'Durant les années 1970, plusieurs pays d’Amérique latine empruntent massivement à l’étranger. Les banques internationales recyclent notamment une partie des fonds placés par les pays exportateurs de pétrole après les chocs pétroliers. Selon la Federal Reserve History, la dette totale de l’Amérique latine provenant de l’ensemble des sources passe de 29 milliards de dollars à la fin de 1970 à 159 milliards à la fin de 1978, puis à 327 milliards en 1982. Ces montants décrivent l’encours agrégé cité par cette source ; ils ne signifient pas que chaque pays a emprunté dans les mêmes proportions ni que tous les emprunts ont été utilisés de la même manière.',
          'Le modèle devient vulnérable lorsque les conditions financières changent. À la fin des années 1970 et au début des années 1980, les banques centrales des économies avancées resserrent leur politique monétaire afin de combattre l’inflation. Les taux d’intérêt internationaux augmentent, la récession mondiale réduit certains revenus d’exportation et les prêteurs raccourcissent parfois les échéances ou limitent les nouveaux crédits. Pour les emprunteurs ayant une dette en devises étrangères, le remboursement dépend de leur capacité à obtenir des devises grâce aux exportations, aux réserves ou à de nouveaux financements. Une dette contractée à taux variable peut également coûter plus cher lorsque les taux de référence augmentent.',
          'En août 1982, le Mexique informe ses interlocuteurs internationaux qu’il ne peut plus assurer le service normal de sa dette extérieure, alors estimée à 80 milliards de dollars par la Federal Reserve History. D’autres pays rencontrent ensuite des difficultés et des rééchelonnements de dette sont négociés. Les banques réduisent leurs nouveaux prêts et cherchent à restructurer les créances existantes. Cette interruption du financement extérieur pèse sur l’investissement, l’activité et les finances publiques. Dans plusieurs pays, les ajustements budgétaires, l’inflation, la baisse des salaires réels et le recul de l’investissement contribuent à une longue période de difficultés souvent appelée « décennie perdue », même si les trajectoires nationales ne sont pas identiques.',
          'Les institutions internationales, les gouvernements débiteurs et les banques créancières négocient des programmes de stabilisation et des restructurations. Le plan Brady, lancé à la fin des années 1980, contribue ensuite à restructurer certaines dettes bancaires commerciales au moyen d’échanges de créances et de garanties, mais il ne résout pas instantanément tous les problèmes de croissance et de pauvreté. L’épisode met en évidence les risques d’un endettement extérieur élevé, notamment lorsque les recettes en devises sont incertaines, les échéances sont courtes et le coût du crédit dépend de taux internationaux. Il montre aussi que la gestion d’une crise de dette implique un arbitrage entre rétablissement de la solvabilité, continuité du financement et protection de l’activité économique.'
        ],
        example: {
          statement: 'L’encours de dette latino-américaine cité par la Federal Reserve History passe de 159 milliards de dollars en 1978 à 327 milliards en 1982. De combien a-t-il augmenté en valeur absolue et en pourcentage, à partir de ces deux valeurs ?',
          calculation: 'Augmentation = 327 - 159 = 168 milliards de dollars. Taux d’augmentation = (168 / 159) × 100 ≈ 105,7 %.',
          answer: 'L’encours a augmenté de 168 milliards de dollars, soit environ 105,7 %. Ce calcul porte sur les valeurs agrégées rapportées par la source et ne permet pas, à lui seul, de mesurer la capacité de remboursement ou le niveau d’endettement de chaque pays.'
        },
        exercise: {
          question: 'Pourquoi une hausse des taux d’intérêt internationaux peut-elle provoquer une crise dans un pays fortement endetté en devises ?',
          answer: 'Elle augmente le coût des dettes à taux variable et peut rendre plus difficile le refinancement des dettes arrivant à échéance. Si les recettes en devises ne progressent pas assez, le pays peut manquer des ressources nécessaires au service de sa dette.'
        },
        exercises: [
          {
            question: 'Quel pays annonce en août 1982 qu’il ne peut plus assurer normalement le service de sa dette extérieure ?',
            answer: 'Le Mexique.'
          },
          {
            question: 'Pourquoi la dette en devises étrangères crée-t-elle un risque de change ?',
            answer: 'Parce que le débiteur doit rembourser dans une monnaie qui peut s’apprécier par rapport à sa monnaie nationale, augmentant ainsi le montant du remboursement exprimé en monnaie locale.'
          },
          {
            question: 'Que signifie restructurer une dette ?',
            answer: 'Modifier les conditions de remboursement, par exemple les échéances, les taux, le calendrier des paiements ou, selon l’accord, le montant effectivement dû.'
          }
        ],
        sources: [
          {
            title: 'Federal Reserve History — Latin American Debt Crisis of the 1980s',
            url: 'https://www.federalreservehistory.org/essays/latin-american-debt-crisis'
          },
          {
            title: 'Federal Deposit Insurance Corporation — History of the Eighties: Lessons for the Future, Volume 1',
            url: 'https://www.fdic.gov/publications/history-eighties-lessons-future-volume-1'
          }
        ]
      }
    },
    {
      id: 'crise-financiere-asiatique-1997',
      title: 'La crise financière asiatique de 1997-1998 : change, crédit et contagion',
      field: 'Finance internationale · Juillet 1997-décembre 1998',
      summary: 'Analyser la crise partie de Thaïlande, les fragilités des banques et des entreprises, les dettes en devises, les sorties de capitaux et la propagation régionale.',
      lesson: {
        sections: [
          'La crise financière asiatique commence en Thaïlande le 2 juillet 1997, lorsque les autorités laissent flotter le baht après des pressions spéculatives et une forte diminution des réserves de change. Avant la crise, plusieurs économies de la région avaient connu une croissance rapide, une hausse de l’investissement et des entrées importantes de capitaux étrangers. Ces résultats favorables masquaient néanmoins des vulnérabilités : expansion rapide du crédit, supervision financière insuffisante, investissements immobiliers risqués et emprunts extérieurs élevés, parfois à court terme.',
          'Le maintien de taux de change relativement stables par rapport au dollar avait donné à certains emprunteurs l’impression que le risque de change était limité. Mais lorsqu’une monnaie se déprécie, la valeur en monnaie locale d’une dette libellée en dollars augmente. Les entreprises qui gagnent surtout en monnaie nationale mais remboursent en dollars peuvent alors voir leur situation financière se détériorer brutalement. Si les banques détiennent des prêts devenus douteux et que les prêteurs étrangers refusent de renouveler leurs crédits, les tensions de change se transforment en crise bancaire et en crise de financement.',
          'Les pressions s’étendent à l’Indonésie, à la Malaisie, aux Philippines et à la Corée du Sud, avec des trajectoires et des réponses différentes selon les pays. Les investisseurs retirent des capitaux d’économies qu’ils jugent comparables, ce qui amplifie la contagion. La baisse des monnaies, des cours boursiers et des prix immobiliers fragilise les bilans, tandis que les banques limitent le crédit. L’investissement et la production chutent ; le chômage augmente et les revenus réels sont touchés. Le Fonds monétaire international et d’autres acteurs apportent des financements et accompagnent des programmes de réforme, dont les effets et les conditions font l’objet de débats économiques et politiques.',
          'Après la crise, plusieurs économies renforcent la supervision bancaire, restructurent des entreprises et des établissements financiers, développent les marchés de capitaux locaux et accumulent davantage de réserves de change. Certaines adoptent des régimes de change plus flexibles. Ces changements n’éliminent pas le risque financier, mais réduisent certaines vulnérabilités observées en 1997. La crise rappelle qu’une croissance rapide n’est pas une garantie de stabilité si l’endettement, les échéances et les risques de change sont mal maîtrisés. Elle montre aussi qu’une crise peut se propager par les anticipations des investisseurs et les liens entre bilans bancaires, entreprises et financement extérieur.'
        ],
        example: {
          statement: 'Une entreprise doit 1 million de dollars. Le taux de change passe de 10 unités de monnaie locale par dollar à 15 unités par dollar. Quel est le montant de la dette en monnaie locale avant et après la dépréciation ?',
          calculation: 'Avant : 1 000 000 × 10 = 10 000 000 unités. Après : 1 000 000 × 15 = 15 000 000 unités. Hausse = 5 000 000 unités, soit 50 %.',
          answer: 'La dette passe de 10 millions à 15 millions d’unités de monnaie locale, soit une hausse de 50 % en monnaie locale. Le montant dû en dollars reste de 1 million ; c’est sa contre-valeur locale qui augmente.'
        },
        exercise: {
          question: 'Comment une dépréciation de la monnaie peut-elle fragiliser une entreprise endettée en dollars ?',
          answer: 'Si ses recettes sont principalement en monnaie locale, elle doit mobiliser davantage de monnaie nationale pour acheter les dollars nécessaires au remboursement. Le poids de la dette augmente alors dans ses comptes locaux.'
        },
        exercises: [
          {
            question: 'Quel événement marque le début de la crise asiatique en juillet 1997 selon la Federal Reserve History ?',
            answer: 'La Thaïlande laisse flotter le baht le 2 juillet 1997 après des pressions sur sa monnaie et ses réserves de change.'
          },
          {
            question: 'Pourquoi les dettes extérieures à court terme peuvent-elles accroître la vulnérabilité d’un pays ?',
            answer: 'Elles doivent être refinancées rapidement. Si les prêteurs refusent de renouveler leurs prêts, les banques et les entreprises peuvent manquer de liquidités même si elles possèdent des actifs à plus long terme.'
          },
          {
            question: 'Que désigne la contagion financière ?',
            answer: 'La propagation des tensions d’un marché ou d’un pays à d’autres, notamment parce que les investisseurs retirent leurs capitaux ou réévaluent simultanément des risques jugés similaires.'
          }
        ],
        sources: [
          {
            title: 'Federal Reserve History — Asian Financial Crisis',
            url: 'https://www.federalreservehistory.org/essays/asian-financial-crisis'
          },
          {
            title: 'International Monetary Fund — What We Have Seen and Learned 20 Years After the Asian Financial Crisis',
            url: 'https://www.imf.org/en/blogs/articles/2017/07/13/what-we-have-seen-and-learned-20-years-after-the-asian-financial-crisis'
          },
          {
            title: 'International Monetary Fund — Financial Sector Crisis and Restructuring: Lessons from Asia',
            url: 'https://www.imf.org/external/pubs/ft/op/opfinsec/index.htm'
          }
        ]
      }
    },
    {
      id: 'crise-financiere-mondiale-2008',
      title: 'La crise financière mondiale de 2007-2009 : crédit immobilier et risque systémique',
      field: 'Finance et macroéconomie · 2007-2009',
      summary: 'Comprendre la fragilité du crédit immobilier américain, la titrisation, l’interconnexion des institutions financières, la faillite de Lehman Brothers et la transmission à l’économie réelle.',
      lesson: {
        sections: [
          'La crise financière mondiale se développe à partir des tensions apparues sur le marché immobilier américain et dans le crédit hypothécaire, notamment les prêts accordés à des emprunteurs plus risqués. Pendant plusieurs années, la hausse des prix immobiliers et l’accès au crédit ont encouragé l’endettement et la prise de risque. Une partie des prêts est regroupée dans des titres financiers vendus à des investisseurs. La titrisation peut répartir le financement et les risques, mais elle peut aussi rendre plus difficile l’identification de la qualité des prêts sous-jacents, surtout lorsque les produits sont complexes et que les évaluations des risques sont trop optimistes.',
          'Lorsque les défauts de paiement augmentent et que les prix immobiliers baissent, la valeur de nombreux actifs liés aux prêts hypothécaires est révisée à la baisse. Les institutions financières ne savent pas toujours quelle est l’exposition réelle de leurs contreparties ; la confiance se dégrade et le financement de court terme devient difficile. L’interconnexion entre banques, courtiers, assureurs et marchés transforme les pertes sur un segment du crédit en problème systémique. Des établissements subissent des pertes, cherchent à vendre des actifs ou réduisent les prêts, ce qui amplifie la contraction du crédit. Les tensions sont visibles dès 2007 et deviennent particulièrement aiguës en 2008.',
          'La faillite de Lehman Brothers en septembre 2008 marque un moment décisif de la crise, sans être l’unique cause de celle-ci. Les marchés financiers se tendent fortement et la confiance se détériore. Les ménages réduisent certaines dépenses, les entreprises reportent leurs investissements et l’accès au financement se contracte. La crise devient une récession internationale par les échanges commerciaux, les expositions financières et le recul de la demande. Les conséquences incluent des pertes d’emplois, des saisies immobilières, des faillites et une forte pression sur les finances publiques dans les pays qui soutiennent leur système financier ou leur économie.',
          'Les autorités répondent par des baisses de taux directeurs, des facilités de liquidité, des garanties et des recapitalisations de certaines institutions, ainsi que par des mesures budgétaires. Aux États-Unis, la Réserve fédérale abaisse sa cible de taux des fonds fédéraux jusqu’à une fourchette proche de zéro en décembre 2008 et utilise ensuite des achats d’actifs à grande échelle. Après la phase aiguë, les règles de supervision et de fonds propres sont renforcées dans plusieurs juridictions, notamment par les réformes internationales associées à Bâle III. Ces interventions limitent certains risques immédiats mais soulèvent aussi des débats sur l’aléa moral, le coût public des sauvetages et la répartition des pertes. La leçon est qu’une stabilité apparente peut masquer une accumulation de risques lorsque le levier financier, les produits opaques et les dépendances de financement à court terme deviennent excessifs.'
        ],
        example: {
          statement: 'Une institution financière possède 100 milliards d’unités d’actifs et 5 milliards de fonds propres. Si la valeur de ses actifs baisse de 5 %, en supposant que ses autres passifs restent inchangés, quel est l’effet sur ses fonds propres ?',
          calculation: 'Perte sur actifs = 100 × 0,05 = 5 milliards. Fonds propres après perte = 5 - 5 = 0 milliard.',
          answer: 'Une baisse de 5 % des actifs absorbe les 5 milliards de fonds propres dans cet exemple simplifié. Cela illustre l’effet de levier : une baisse modérée des actifs peut effacer le capital disponible lorsque celui-ci est faible par rapport au bilan. Ce calcul pédagogique n’est pas une description du bilan d’une institution précise.'
        },
        exercise: {
          question: 'Comment des pertes sur des prêts immobiliers peuvent-elles provoquer une crise économique mondiale ?',
          answer: 'Les prêts sont détenus ou transformés en titres par des institutions interconnectées. Les pertes et l’incertitude fragilisent leur financement, provoquent une contraction du crédit et réduisent les dépenses des ménages et des entreprises. Les échanges commerciaux et les expositions transfrontalières transmettent ensuite le ralentissement à d’autres pays.'
        },
        exercises: [
          {
            question: 'Qu’est-ce que la titrisation ?',
            answer: 'C’est une opération qui consiste à regrouper des créances, par exemple des prêts, puis à émettre des titres financiers adossés aux flux de remboursement de ces créances.'
          },
          {
            question: 'Pourquoi la faillite de Lehman Brothers est-elle un repère important sans être la cause unique de la crise ?',
            answer: 'Elle a intensifié une crise déjà en cours en aggravant la défiance et les tensions de financement, mais les fragilités du crédit immobilier et du système financier s’étaient développées auparavant.'
          },
          {
            question: 'Pourquoi une banque centrale abaisse-t-elle ses taux directeurs en période de crise ?',
            answer: 'Pour réduire le coût du financement, soutenir le crédit et la demande globale et limiter l’aggravation du ralentissement, dans la mesure où les mécanismes de transmission fonctionnent.'
          }
        ],
        sources: [
          {
            title: 'Federal Reserve Board — Monetary Policy: What Are Its Goals? How Does It Work?',
            url: 'https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm'
          },
          {
            title: 'International Monetary Fund — IMF Timeline: Global Financial Crisis',
            url: 'https://www.imf.org/external/about/timeline/index.htm'
          },
          {
            title: 'Financial Crisis Inquiry Commission — The Financial Crisis Inquiry Report',
            url: 'https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf'
          }
        ]
      }
    },
    {
      id: 'crise-dettes-souveraines-zone-euro',
      title: 'La crise des dettes souveraines de la zone euro : dette publique, banques et austérité',
      field: 'Économie européenne · 2010-2012',
      summary: 'Étudier la propagation des tensions depuis la Grèce, les écarts de taux obligataires, la boucle entre banques et États, et les réponses des gouvernements et de l’Eurosystème.',
      lesson: {
        sections: [
          'La crise des dettes souveraines de la zone euro atteint une phase aiguë entre 2010 et 2012. Elle concerne d’abord la Grèce, puis touche notamment l’Irlande et le Portugal, tandis que Chypre, l’Italie et l’Espagne sont également confrontés à de fortes tensions en 2012. Une dette souveraine est une dette contractée par un État. Les marchés évaluent notamment la capacité du pays à rembourser, la trajectoire de ses recettes et dépenses, sa croissance et les institutions qui encadrent son financement. Lorsque les investisseurs jugent le risque plus élevé, ils peuvent exiger un rendement supérieur pour acheter ou conserver les obligations de cet État.',
          'La crise a plusieurs causes qui se renforcent mutuellement. La croissance relativement faible dans certaines économies limite les recettes publiques, tandis que les déficits et les dettes accumulés rendent les finances publiques plus sensibles à une hausse des taux. Après l’introduction de l’euro, les flux de capitaux ont financé des emprunteurs publics et privés dans plusieurs pays. La crise financière de 2008 a ensuite réduit les recettes fiscales, conduit à des mesures de soutien économique et, dans certains cas, entraîné des soutiens publics aux banques. La situation n’est pas identique dans tous les pays : en Irlande, les difficultés bancaires ont joué un rôle central dans la détérioration des finances publiques, alors que la Grèce avait notamment des problèmes de finances publiques et de crédibilité statistique.',
          'Une boucle de rétroaction peut apparaître entre les États et les banques. Les banques détiennent des obligations souveraines et peuvent subir des pertes lorsque leur valeur ou la confiance dans leur remboursement diminue. En parallèle, les États peuvent être appelés à soutenir des banques fragiles, ce qui accroît leurs engagements ou leurs besoins de financement. Les rendements obligataires plus élevés renchérissent les nouveaux emprunts publics et peuvent influencer les taux auxquels les entreprises et les ménages empruntent. Les politiques de consolidation budgétaire adoptées dans plusieurs pays réduisent certains déficits, mais la baisse des dépenses ou l’augmentation des prélèvements peut aussi freiner la demande à court terme et approfondir la récession lorsque l’économie est déjà faible.',
          'Les réponses incluent des programmes d’assistance financière, des mesures nationales, la création et le renforcement de mécanismes européens de stabilité, ainsi que des interventions de la Banque centrale européenne destinées à préserver la transmission de la politique monétaire et à limiter les risques de fragmentation financière. En 2012, l’annonce du programme potentiel d’opérations monétaires sur titres de la BCE, soumis à des conditions et jamais activé sous cette forme, contribue à modifier les anticipations de marché. La crise conduit aussi à renforcer la coordination budgétaire et la surveillance économique au sein de l’Union européenne. Elle montre qu’une union monétaire peut être vulnérable lorsque les marchés financiers sont intégrés mais que les responsabilités budgétaires et les mécanismes de soutien restent partagés entre plusieurs niveaux de décision.'
        ],
        example: {
          statement: 'Un État doit refinancer 10 milliards d’euros de dette. Le taux d’intérêt applicable passe de 2 % à 5 % pour un nouvel emprunt de même montant et d’une durée d’un an. Quelle est la différence d’intérêts annuels, en supposant que le principal ne change pas ?',
          calculation: 'À 2 % : 10 000 000 000 × 0,02 = 200 000 000 euros. À 5 % : 10 000 000 000 × 0,05 = 500 000 000 euros. Différence = 300 000 000 euros.',
          answer: 'Le coût annuel des intérêts serait supérieur de 300 millions d’euros dans cet exemple simplifié. Cela ne signifie pas que toute la dette existante est immédiatement refinancée au nouveau taux : l’effet réel dépend des échéances, de la structure de la dette et des conditions des nouveaux emprunts.'
        },
        exercise: {
          question: 'Comment une crise bancaire peut-elle aggraver la dette publique, et comment une crise de la dette publique peut-elle fragiliser les banques ?',
          answer: 'Un État qui soutient des banques ou subit une baisse de recettes peut voir ses besoins de financement augmenter. Inversement, les banques qui détiennent des obligations de cet État peuvent subir des pertes ou perdre l’accès à certains financements si la confiance dans la dette souveraine se détériore.'
        },
        exercises: [
          {
            question: 'Que désigne le terme « dette souveraine » ?',
            answer: 'La dette contractée par un État auprès de créanciers, par exemple au moyen d’obligations publiques.'
          },
          {
            question: 'Pourquoi les taux d’intérêt exigés par les marchés peuvent-ils augmenter pendant une crise de dette ?',
            answer: 'Les investisseurs peuvent demander une rémunération plus élevée s’ils estiment que le risque de remboursement augmente ou que la liquidité des titres se dégrade.'
          },
          {
            question: 'Pourquoi la crise de 2008 a-t-elle contribué à la crise des dettes souveraines ?',
            answer: 'La récession a réduit les recettes publiques, les mesures de soutien ont accru les besoins de financement et certains États ont assumé des coûts liés au sauvetage de banques.'
          }
        ],
        sources: [
          {
            title: 'Banque de France — La crise des dettes souveraines de la zone euro (2010-2012)',
            url: 'https://www.banque-france.fr/fr/publications-et-statistiques/publications/la-crise-des-dettes-souveraines-de-la-zone-euro-2010-2012'
          },
          {
            title: 'Banque centrale européenne — Technical features of Outright Monetary Transactions',
            url: 'https://www.ecb.europa.eu/press/pr/date/2012/html/pr120906_1.en.html'
          },
          {
            title: 'Commission européenne — Financial assistance in EU Member States',
            url: 'https://economy-finance.ec.europa.eu/eu-financial-assistance_en'
          }
        ]
      }
    }
  ]
},

{
  id: 'economie-internationale',
  title: 'Économie internationale',
  note: 'Six chapitres sur les théories du commerce international, la politique commerciale, la balance des paiements, les taux de change et l’histoire du système monétaire international. Les modèles sont des simplifications : les exemples chiffrés sont pédagogiques, sauf indication contraire, et les données historiques renvoient aux sources citées.',
  chapters: [
    {
      id: 'avantage-comparatif',
      title: 'Avantage absolu, avantage comparatif et gains à l’échange',
      field: 'Économie internationale · Théorie du commerce · Smith (1776) et Ricardo (1817)',
      summary: 'Comprendre pourquoi un pays gagne à commercer même s’il est plus productif que ses partenaires dans tous les biens, et comment le coût d’opportunité détermine la spécialisation.',
      lesson: {
        sections: [
          'L’économie internationale étudie les échanges de biens, de services et de capitaux entre pays, ainsi que les politiques qui les encadrent. Sa première question est simple : pourquoi les pays commercent-ils, et qui y gagne ? Adam Smith (La Richesse des nations, 1776), puis David Ricardo (Des principes de l’économie politique et de l’impôt, 1817), ont établi les bases économiques du libre-échange. Un pays possède un avantage absolu dans un bien lorsqu’il peut le produire en utilisant moins d’intrants (travail, capital) que les autres pays pour la même production.',
          'L’apport décisif de Ricardo est de montrer que le commerce n’est pas gouverné par les coûts absolus mais par les coûts comparatifs. Un pays plus productif que ses partenaires dans tous les biens a néanmoins intérêt à échanger : il se spécialise dans les produits où son avantage absolu est le plus grand et importe ceux où cet avantage est comparativement moins grand, même s’il reste positif. Son partenaire exporte les biens où il est le moins désavantagé. Le raisonnement ne se limite pas aux biens physiques : il s’applique aussi aux services, comme l’écriture de code informatique ou la fourniture de produits financiers.',
          'La notion clé est le coût d’opportunité : la quantité d’un autre bien à laquelle il faut renoncer pour produire un bien donné. Dans l’exemple pédagogique d’Econlib, Ann peut produire soit 100 régimes de bananes, soit 200 poissons par mois ; Bob soit 50 bananes, soit 50 poissons. Chaque poisson coûte une demi-banane à Ann, mais une banane entière à Bob : Ann a un avantage comparatif dans la pêche, Bob dans la cueillette. Tout prix du poisson compris entre une demi-banane et une banane procure des gains aux deux : Ann accepte de vendre au-dessus de son coût (0,5 banane) et Bob d’acheter en dessous du sien (1 banane). L’échange est donc possible dès que les coûts d’opportunité diffèrent.',
          'Selon le FMI, grâce à l’avantage comparatif, le commerce élève le niveau de vie des deux pays. Econlib rappelle aussi que les étrangers n’exportent que parce qu’ils veulent importer : le commerce est un échange de biens contre des biens. Le modèle a toutefois ses limites. Dans sa version de base, il attribue les différences de coûts d’opportunité aux seules différences de productivité du travail ; les chapitres suivants ajoutent d’autres sources de commerce (dotations en facteurs, économies d’échelle). Enfin, tout le monde ne gagne pas : une entreprise qui perd une vente face à un concurrent étranger moins cher subit une perte, même si, en général, l’acheteur gagne plus que le producteur national ne perd (FMI).'
        ],
        example: {
          statement: 'Pays A : une heure de travail produit soit 3 kg d’acier, soit 2 chemises. Pays B : une heure de travail produit soit 1 kg d’acier, soit 1 chemise. Quel pays a un avantage comparatif dans les chemises ? (Exemple repris du FMI.)',
          calculation: 'Coût d’opportunité d’une chemise : pays A = 3 / 2 = 1,5 kg d’acier ; pays B = 1 / 1 = 1 kg d’acier. Coût d’opportunité d’1 kg d’acier : pays A = 2 / 3 ≈ 0,67 chemise ; pays B = 1 chemise. Le coût d’opportunité des chemises est le plus faible en B ; celui de l’acier est le plus faible en A.',
          answer: 'Le pays B a l’avantage comparatif dans les chemises, bien que A soit plus productif dans les deux biens. Si B vend 2 chemises à A contre 2,5 kg d’acier : A consacre une heure de moins aux chemises (−2 chemises) et produit 3 kg d’acier de plus ; B consacre deux heures de moins à l’acier (−2 kg) et produit 2 chemises de plus. La production de chemises est inchangée et celle d’acier augmente de 1 kg. Après l’échange, chaque pays dispose de 0,5 kg d’acier supplémentaire.'
        },
        exercise: {
          question: 'Dans l’exemple d’Ann et Bob, pourquoi Ann a-t-elle un avantage comparatif dans la pêche ?',
          answer: 'Pour chaque poisson pêché, Ann renonce à 0,5 banane (100 bananes pour 200 poissons), alors que Bob renonce à 1 banane (50 pour 50). Son coût d’opportunité de la pêche est plus faible.'
        },
        exercises: [
          {
            question: 'Qui a formulé le principe de l’avantage comparatif et dans quel ouvrage ?',
            answer: 'David Ricardo, dans Des principes de l’économie politique et de l’impôt (1817).'
          },
          {
            question: 'Un pays plus productif que ses partenaires dans tous les biens peut-il gagner à l’échange ?',
            answer: 'Oui. Il gagne en se spécialisant selon son avantage comparatif, c’est-à-dire dans les biens où son avantage absolu est le plus grand.'
          },
          {
            question: 'Un producteur peut fabriquer soit 40 unités de X, soit 20 unités de Y ; un autre soit 30 unités de X, soit 10 unités de Y. Lequel a l’avantage comparatif dans Y ?',
            answer: 'Le premier : une unité de Y lui coûte 40 / 20 = 2 unités de X, contre 30 / 10 = 3 unités de X pour le second. Le premier a l’avantage absolu dans les deux biens, mais le second a l’avantage comparatif dans X.'
          }
        ],
        sources: [
          { title: 'FMI, Finance & Development — International Trade: Commerce among Nations', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/40-international-trade.htm' },
          { title: 'Econlib — Comparative Advantage (Donald J. Boudreaux)', url: 'https://www.econlib.org/library/Enc/ComparativeAdvantage.html' },
          { title: 'Econlib — Tariffs (Douglas A. Irwin)', url: 'https://www.econlib.org/library/enc/tariffs.html' }
        ]
      }
    },
    {
      id: 'dotations-factorielles',
      title: 'Dotations en facteurs : le modèle Heckscher-Ohlin et le paradoxe de Leontief',
      field: 'Économie internationale · Théorie du commerce · Heckscher, Ohlin, Stolper-Samuelson, Leontief',
      summary: 'Comprendre comment les différences de dotations en capital et en travail expliquent une partie du commerce, quels effets elles ont sur les revenus, et pourquoi les tests empiriques ont nuancé la théorie.',
      lesson: {
        sections: [
          'Le modèle ricardien explique le commerce par des différences de productivité. Au début du XXe siècle, les économistes suédois Eli Heckscher et Bertil Ohlin ont proposé une autre source d’avantage comparatif : les dotations en facteurs de production, c’est-à-dire les quantités relatives de travail, de capital (usines, machines) ou de terre dont dispose un pays. Selon Britannica, la théorie a été développée par Ohlin à partir des travaux de son professeur Heckscher.',
          'La proposition de Heckscher-Ohlin affirme qu’un pays tend à exporter les biens dont la production utilise intensivement le facteur qui lui est relativement abondant, et à importer ceux qui utilisent intensivement son facteur relativement rare (FMI). Un pays bien doté en capital exporte donc des produits intensifs en capital, un pays bien doté en travail des produits intensifs en travail. L’abondance est relative : ce qui compte n’est pas le stock total de capital, mais le capital par travailleur. Britannica l’illustre ainsi : le Luxembourg possède moins de capital que l’Inde au total, mais davantage par travailleur ; il devrait donc exporter des produits intensifs en capital vers l’Inde et importer des produits intensifs en travail.',
          'Le modèle a aussi des conséquences sur la répartition des revenus. Dans un cadre simple à deux biens et deux facteurs, Wolfgang Stolper et Paul Samuelson (1941) montrent qu’un tarif augmente la rémunération d’un facteur et réduit celle de l’autre : si le tarif relève le prix relatif du bien intensif en travail non qualifié, il augmente le salaire réel des travailleurs non qualifiés et diminue celui des travailleurs qualifiés (Econlib). Ce résultat explique en partie pourquoi la politique commerciale suscite des débats : le libre-échange comme la protection font des gagnants et des perdants selon le facteur que l’on détient. Il ne tient pas compte d’autres effets, comme la croissance ou l’élargissement de la gamme de produits disponibles.',
          'Le premier test empirique majeur est celui de Wassily Leontief, réalisé en 1953 avec des données américaines de 1947. Les États-Unis étant alors considérés comme le pays le plus abondant en capital, la théorie prédisait qu’ils exporteraient des biens intensifs en capital. Leontief a trouvé l’inverse : les États-Unis exportaient plutôt des biens intensifs en travail. Ce résultat, opposé à celui que prédit la théorie, est connu comme le paradoxe de Leontief. Plusieurs explications ont été avancées : les technologies diffèrent d’un pays à l’autre alors que le modèle les suppose identiques ; Leontief n’a considéré que le travail et le capital en ignorant la terre, dont les États-Unis sont bien dotés ; ou encore les États-Unis exportaient surtout des biens utilisant du travail qualifié (Feenstra et Taylor). Le FMI note qu’on admet aujourd’hui d’autres influences importantes sur les échanges, et que l’approche par les dotations ignore le commerce intra-branche, objet du chapitre suivant.'
        ],
        example: {
          statement: 'Pays X : 200 unités de capital et 100 unités de travail. Pays Y : 300 unités de capital et 300 unités de travail (chiffres fictifs). Quel pays est abondant en capital selon le critère de Heckscher-Ohlin, et que devrait-il exporter ?',
          calculation: 'Capital par travailleur : X = 200 / 100 = 2 ; Y = 300 / 300 = 1. Y possède plus de capital au total (300 > 200), mais le critère est le ratio capital / travail.',
          answer: 'X est abondant en capital (2 > 1) et devrait exporter le bien intensif en capital ; Y, relativement abondant en travail, devrait exporter le bien intensif en travail. Il s’agit d’une prédiction théorique que le paradoxe de Leontief a confrontée aux données.'
        },
        exercise: {
          question: 'Pourquoi le Luxembourg est-il considéré comme abondant en capital par rapport à l’Inde, alors qu’il possède moins de capital au total ?',
          answer: 'Parce que le critère est le capital par travailleur et non le stock total de capital : le Luxembourg a davantage de capital par travailleur que l’Inde.'
        },
        exercises: [
          {
            question: 'Quels économistes suédois sont à l’origine du modèle des dotations en facteurs ?',
            answer: 'Eli Heckscher et Bertil Ohlin.'
          },
          {
            question: 'Que prédit la proposition de Heckscher-Ohlin ?',
            answer: 'Un pays tend à exporter les biens qui utilisent intensivement son facteur relativement abondant et à importer ceux qui utilisent intensivement son facteur relativement rare.'
          },
          {
            question: 'En quoi consiste le paradoxe de Leontief ?',
            answer: 'Les États-Unis, considérés comme abondants en capital, exportaient des biens plutôt intensifs en travail, ce qui est l’opposé de la prédiction du modèle.'
          }
        ],
        sources: [
          { title: 'FMI, Finance & Development — International Trade: Commerce among Nations', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/40-international-trade.htm' },
          { title: 'Britannica — Heckscher-Ohlin theory', url: 'https://www.britannica.com/topic/Heckscher-Ohlin-theory' },
          { title: 'Feenstra et Taylor, International Economics (3e éd.) — Testing the Heckscher-Ohlin Model', url: 'https://digfir-published.macmillanusa.com/feenstrataylorintlecon3/feenstrataylorintlecon3_ch4_3.html' },
          { title: 'Econlib — Tariffs (Douglas A. Irwin)', url: 'https://www.econlib.org/library/enc/tariffs.html' }
        ]
      }
    },
    {
      id: 'nouvelle-theorie-commerce',
      title: 'La nouvelle théorie du commerce : économies d’échelle et commerce intra-branche',
      field: 'Économie internationale · Théorie du commerce · Krugman et la concurrence monopolistique',
      summary: 'Comprendre pourquoi des pays semblables échangent des produits semblables, le rôle des économies d’échelle et de la variété, et la contribution de Paul Krugman.',
      lesson: {
        sections: [
          'Les modèles précédents expliquent le commerce par des différences entre pays : de productivité (Ricardo) ou de dotations en facteurs (Heckscher-Ohlin). À la fin des années 1970, Paul Krugman constate que ce modèle s’ajuste mal aux données : l’essentiel du commerce international a lieu entre des pays dont le rapport capital / travail est à peu près semblable (Econlib). Un pays exporte en outre des biens de la même catégorie que ceux qu’il importe : c’est le commerce intra-branche. Le FMI donne l’exemple de pays qui exportent des réfrigérateurs domestiques et importent des refroidisseurs industriels, un phénomène que l’approche par les dotations en facteurs ignore.',
          'Krugman part de l’idée que de nombreux biens et services peuvent être produits à moindre coût en grandes séries : ce sont les économies d’échelle. Parallèlement, les consommateurs demandent une offre variée (comité Nobel). L’ouverture au commerce élargit le marché : la production à petite échelle pour un marché local est remplacée par une production à grande échelle pour le marché mondial, où des entreprises aux produits semblables se font concurrence. Ce type d’échange permet la spécialisation et la production en grande série, d’où des prix plus bas et une plus grande diversité de produits. Le comité Nobel cite l’exemple d’un pays comme la Suède, qui exporte et importe des voitures.',
          'Le modèle de Krugman repose sur la concurrence monopolistique : chaque entreprise vend un produit différencié de celui de ses concurrentes, mais la concurrence entre entreprises ramène leurs profits économiques à zéro (Econlib). Sa référence est l’article de 1979 « Increasing Returns, Monopolistic Competition, and International Trade », paru dans le Journal of International Economics (vol. 9, pp. 469-479). Krugman attribue lui-même l’intuition de départ à des travaux antérieurs de Béla Balassa, Herbert Grubel et Irving Kravis. Dans ce cadre, des pays semblables ont intérêt à commercer entre eux, car l’échange donne accès à des marchés plus grands, donc à une production moins coûteuse, et à une plus grande variété.',
          'Selon le FMI, les gains tiennent à davantage de produits, pas seulement à davantage de quantités : les États-Unis importent quatre fois plus de variétés (par exemple de types de voitures) que dans les années 1970, et le nombre de pays fournisseurs de chaque bien a doublé. L’accès à une plus grande variété et à une meilleure qualité de biens intermédiaires et d’équipements peut aussi rendre l’investissement plus efficace et soutenir l’innovation et la croissance. L’ouverture entraîne des ajustements au sein même des branches : la concurrence étrangère pousse les entreprises les moins efficaces à se contracter et laisse de la place aux plus efficaces. Combinées à la baisse des coûts de transport, les économies d’échelle contribuent aussi à expliquer la concentration des activités dans les villes et la division possible des régions entre un cœur urbanisé de haute technologie et une « périphérie » moins développée. C’est pour l’analyse des modèles d’échanges et de la localisation de l’activité économique que Krugman a reçu en 2008 le prix de la Banque de Suède en sciences économiques en mémoire d’Alfred Nobel.'
        ],
        example: {
          statement: 'Une entreprise a un coût fixe F = 1 000 et un coût variable c = 10 par unité (chiffres fictifs). Calculer son coût moyen si elle vend 100 unités sur son marché national, puis 500 unités en ajoutant l’exportation.',
          calculation: 'Coût total = F + c × Q, donc coût moyen = F / Q + c. Pour Q = 100 : 1 000 / 100 + 10 = 20. Pour Q = 500 : 1 000 / 500 + 10 = 12.',
          answer: 'Le coût moyen passe de 20 à 12, soit une baisse de 40 %, parce que le coût fixe est réparti sur davantage d’unités. C’est le mécanisme des économies d’échelle que l’ouverture au commerce permet d’exploiter.'
        },
        exercise: {
          question: 'Quel phénomène la nouvelle théorie du commerce explique-t-elle mieux que le modèle des dotations en facteurs ?',
          answer: 'Le commerce entre pays semblables portant sur des produits semblables (commerce intra-branche), fondé sur les économies d’échelle et la demande de variété.'
        },
        exercises: [
          {
            question: 'Pour quelle contribution Paul Krugman a-t-il reçu le prix de la Banque de Suède en sciences économiques en 2008 ?',
            answer: 'Pour son analyse des modèles d’échanges et de la localisation de l’activité économique.'
          },
          {
            question: 'Qu’est-ce que le commerce intra-branche ?',
            answer: 'Un commerce dans lequel un pays exporte et importe des produits d’une même branche, par exemple des voitures ou des réfrigérateurs de types différents.'
          },
          {
            question: 'Quelle est la caractéristique de la concurrence monopolistique dans le modèle de Krugman ?',
            answer: 'Chaque entreprise vend un produit différencié, mais la concurrence entre entreprises ramène les profits économiques à zéro.'
          }
        ],
        sources: [
          { title: 'Nobel Prize — The Prize in Economic Sciences 2008 (Press release)', url: 'https://www.nobelprize.org/prizes/economic-sciences/2008/press-release/' },
          { title: 'Econlib — Paul Krugman', url: 'https://www.econlib.org/library/Enc/bios/Krugman.html' },
          { title: 'FMI, Finance & Development — International Trade: Commerce among Nations', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/40-international-trade.htm' }
        ]
      }
    },
    {
      id: 'politique-commerciale',
      title: 'Politique commerciale : tarifs, quotas et système commercial multilatéral',
      field: 'Économie internationale · Politique commerciale · Droits de douane, quotas, GATT et OMC',
      summary: 'Comprendre pourquoi les États taxent ou limitent les importations, qui gagne et qui perd, et comment le GATT puis l’OMC encadrent ces politiques.',
      lesson: {
        sections: [
          'Un tarif (ou droit de douane) est une taxe, le plus souvent sur les importations. Presque tous les pays taxent les importations, alors que les taxes à l’exportation sont rares : certains pays riches en ressources naturelles y recourent, par exemple l’Argentine pour le soja et le blé (Econlib). Pour Douglas Irwin, trois raisons expliquent les tarifs : le revenu, la restriction et la réciprocité. Avant l’impôt sur le revenu, les droits de douane financent largement l’État : avant la guerre de Sécession, ils fournissaient environ 90 % des recettes du gouvernement fédéral américain. La restriction vise à protéger les producteurs nationaux de la concurrence étrangère. La réciprocité consiste soit à négocier des baisses mutuelles de tarifs, soit à riposter contre un pays qui relève les siens.',
          'Prenons un tarif sur le sucre importé. Le prix intérieur monte : les consommateurs demandent moins, les producteurs nationaux offrent davantage, et les importations diminuent. Le tarif équivaut à une subvention à la production et à une taxe sur la consommation. Les consommateurs perdent ; leur perte va en partie aux producteurs (prix plus élevé) et en partie à l’État (recettes), mais ils perdent plus que les producteurs et l’État ne gagnent. Il en résulte des pertes sèches : celle de production (coûts supplémentaires pour produire localement davantage) et celle de consommation (avantages perdus par ceux qui n’achètent plus). Ces pertes sont des gains à l’échange non réalisés (Econlib).',
          'Qui paie le tarif ? Si le prix mondial ne change pas, les consommateurs du pays supportent tout le droit : avec un prix mondial de 100 $ la tonne et un droit de 20 %, le prix intérieur passe à 120 $. Si le pays est assez grand pour faire baisser le prix mondial (par exemple de 100 à 90 $), le droit de 20 % représente 18 $ et le prix intérieur ne monte qu’à 108 $ : le coût est partagé avec les exportateurs étrangers. Le tarif n’agit pas non plus seulement dans le secteur protégé. Selon le théorème de symétrie de Lerner, un tarif à l’importation équivaut à une taxe à l’exportation, notamment parce qu’il tend à faire apprécier la monnaie, ce qui pénalise les exportations. Protéger l’acier renchérit aussi les intrants des secteurs qui en utilisent, comme les machines, l’automobile ou le matériel agricole (Econlib).',
          'Un quota limite les importations en volume. Ses effets ressemblent à ceux d’un tarif, avec deux différences. Le tarif rapporte des recettes à l’État, alors que le quota crée une rente (la marge entre prix mondial et prix intérieur) qui ne va à l’État que si les licences sont vendues aux enchères. Et si la concurrence intérieure est faible, le quota donne aux producteurs nationaux un pouvoir de marché qu’un tarif ne leur donne pas, car avec un tarif la menace d’importations supplémentaires subsiste. Deux cas retiennent surtout l’attention des économistes comme situations où un tarif pourrait être bénéfique : le tarif optimal (un pays assez grand améliore ses termes de l’échange aux dépens des autres) et les externalités positives, dont l’argument de l’industrie naissante, selon lequel des producteurs nationaux pourraient devenir compétitifs grâce à une protection temporaire. Cet argument est difficile à vérifier ; Robert Baldwin (1969) a mis en doute que le tarif soit l’outil adapté, et les économistes préfèrent en général des subventions. Enfin, les tarifs réduisent peu un déficit commercial, qui dépend de facteurs macroéconomiques (épargne, investissement, mobilité des capitaux).',
          'Depuis 1948, les accords du GATT puis de l’OMC, créée en 1995, favorisent la non-discrimination et la libéralisation : droits de douane, subventions, procédures douanières, services, propriété intellectuelle (FMI). Deux principes sont au cœur du système : la clause de la nation la plus favorisée (un membre ne doit pas discriminer entre ses partenaires commerciaux ; article I du GATT) et le traitement national (ne pas discriminer entre produits nationaux et étrangers ; article III). Ces règles sont assorties d’un mécanisme de règlement des différends. Selon le FMI, le système fondé sur des règles rend les politiques commerciales plus stables, plus transparentes et plus ouvertes, et l’OMC est l’une des raisons pour lesquelles la crise financière mondiale n’a pas déclenché de protectionnisme généralisé. Des politiques restrictives et discriminatoires subsistent néanmoins, et les tarifs restent plus élevés dans certains secteurs (agriculture, habillement) et pour certains groupes de pays, notamment les moins développés.'
        ],
        example: {
          statement: 'Le prix mondial du sucre est de 100 $ la tonne. Un pays impose un droit de douane de 20 %. Quel est le prix intérieur (a) si le prix mondial ne change pas ; (b) si le prix mondial tombe à 90 $ ? (Exemple repris d’Econlib.)',
          calculation: '(a) 100 × 1,20 = 120. (b) Le droit vaut 20 % × 90 = 18 ; le prix intérieur est 90 + 18 = 108.',
          answer: '(a) 120 $ : les consommateurs paient la totalité du droit. (b) 108 $ : le prix intérieur augmente de 8 % alors que le prix mondial baisse de 10 %, donc le coût du tarif est partagé entre consommateurs nationaux et exportateurs étrangers.'
        },
        exercise: {
          question: 'Pourquoi un tarif engendre-t-il une perte sèche ?',
          answer: 'Parce que les consommateurs perdent plus que les producteurs nationaux et l’État ne gagnent : produire localement coûte plus cher qu’importer, et des consommateurs renoncent à des achats dont ils tiraient un avantage.'
        },
        exercises: [
          {
            question: 'Quelles sont les trois raisons d’imposer des tarifs selon Douglas Irwin ?',
            answer: 'Le revenu, la restriction (protéger les producteurs nationaux) et la réciprocité.'
          },
          {
            question: 'Quelle différence essentielle y a-t-il entre un tarif et un quota ?',
            answer: 'Le tarif rapporte des recettes à l’État ; le quota crée une rente qui ne revient à l’État que si les licences sont vendues aux enchères.'
          },
          {
            question: 'Que signifient la clause de la nation la plus favorisée et le traitement national ?',
            answer: 'Ne pas discriminer entre ses partenaires commerciaux (nation la plus favorisée) et ne pas discriminer entre produits nationaux et produits étrangers (traitement national).'
          }
        ],
        sources: [
          { title: 'Econlib — Tariffs (Douglas A. Irwin)', url: 'https://www.econlib.org/library/enc/tariffs.html' },
          { title: 'FMI, Finance & Development — International Trade: Commerce among Nations', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/40-international-trade.htm' },
          { title: 'OMC — Rapport annuel 2023, chapitre 2 : What we stand for', url: 'https://www.wto.org/english/res_e/booksp_e/anrep_e/ar23_chap2_e.pdf' }
        ]
      }
    },
    {
      id: 'balance-paiements-change',
      title: 'Balance des paiements et taux de change',
      field: 'Économie internationale · Macroéconomie ouverte · Comptes extérieurs et marché des changes',
      summary: 'Comprendre comment sont enregistrées les transactions d’un pays avec le reste du monde, et comment les taux de change se forment et se mesurent.',
      lesson: {
        sections: [
          'La balance des paiements enregistre les transactions économiques entre résidents et non-résidents sur une période donnée. Dans la sixième édition du manuel du FMI (BPM6), elle comprend trois grands comptes. Le compte des transactions courantes retrace les échanges de biens et de services ainsi que les revenus primaires et secondaires. Le compte de capital, de faible ampleur, couvre notamment les transferts en capital (comme les remises de dettes) et l’acquisition ou la cession d’actifs non financiers non produits. Le compte financier retrace les placements : investissements directs, investissements de portefeuille, produits dérivés financiers et options sur titres des salariés, autres investissements et avoirs de réserve.',
          'Le solde des comptes courant et de capital correspond à la capacité (+) ou au besoin (−) de financement de l’économie vis-à-vis du reste du monde ; le compte financier montre comment ce solde est financé. Dans la convention du BPM6, où le solde financier net est l’acquisition nette d’actifs financiers moins l’accroissement net des engagements, ces comptes sont liés par la relation : compte courant + compte de capital − compte financier net + erreurs et omissions = 0. Les erreurs et omissions peuvent être importantes parce que le compte financier est difficile à mesurer. Un déficit courant doit donc être financé par un endettement net vis-à-vis de l’étranger ou par un prélèvement sur les réserves, qui figurent dans le compte financier. Le manuel du FMI traite explicitement du financement d’un déficit courant, de l’ajustement de la balance des paiements et des implications d’un excédent.',
          'Le taux de change est le prix d’une monnaie étrangère. Selon la convention d’Econlib, le taux livre-dollar est coté en dollars par livre ($/£) : une hausse de 1,80 à 1,83 est une dépréciation du dollar. Le taux yen-dollar est coté en yens par dollar (¥/$) : une hausse de 108 à 110 est une appréciation du dollar. Un pays peut laisser flotter sa monnaie : la banque centrale n’achète ni ne vend de devises et le prix se détermine sur le marché par l’offre et la demande. Il peut aussi la fixer, ce qui oblige la banque centrale à acheter ou à vendre des devises pour tenir la parité. Entre les deux existent des régimes intermédiaires (bandes de fluctuation, paniers de monnaies, parités glissantes) ainsi que le flottement dirigé, où la banque centrale intervient pour freiner les mouvements (« leaning against the wind »).',
          'Le taux de change réel est le taux nominal déflaté par les niveaux de prix (étranger relativement au national) : c’est lui qui compte le plus pour l’économie réelle, car une monnaie à forte valeur réelle rend les produits nationaux moins compétitifs et tend à décourager les exportations et à encourager les importations. Si le taux réel était constant, la parité de pouvoir d’achat (PPA) s’appliquerait ; elle ne se vérifie pas à court terme, même approximativement, mais tend à se vérifier à long terme. Dans le modèle de surréaction de Rudiger Dornbusch, une hausse du taux d’intérêt réel fait s’apprécier la monnaie davantage à court terme qu’à long terme. Prévoir les taux de change à court terme est extrêmement difficile, et les économistes les assimilent souvent à une marche aléatoire. La volatilité est élevée : jusqu’en 2004, depuis le flottement des grandes monnaies en 1971, le taux dollar / livre a varié de plus de 5 % en 36 mois (12,7 % des mois), contre un seul mois (0,5 %) en 1955-1970 sous Bretton Woods. Enfin, selon Econlib, les transactions financières dominent désormais l’offre et la demande de devises, alors que jusqu’aux années 1970 les échanges de marchandises en étaient la source principale.'
        ],
        example: {
          statement: 'Le taux de change passe de 1,80 $/£ à 1,83 $/£. Que se passe-t-il pour le dollar et pour la livre ? Calculer la variation de la valeur de la livre en dollars. (Valeurs reprises d’Econlib.)',
          calculation: 'Il faut plus de dollars pour obtenir une livre (1,83 > 1,80). Variation de la livre en dollars : 1,83 / 1,80 − 1 ≈ 0,0167, soit +1,67 %. Valeur du dollar en livres : 1 / 1,80 ≈ 0,5556 £ devient 1 / 1,83 ≈ 0,5464 £, soit environ −1,64 %.',
          answer: 'Le dollar se déprécie (il s’échange contre moins de livres) et la livre s’apprécie d’environ 1,67 % par rapport au dollar.'
        },
        exercise: {
          question: 'Pourquoi le taux de change réel est-il important pour la compétitivité d’un pays ?',
          answer: 'Parce qu’une monnaie à forte valeur réelle rend les produits nationaux moins compétitifs sur les marchés mondiaux, ce qui tend à décourager les exportations et à encourager les importations.'
        },
        exercises: [
          {
            question: 'Quels sont les trois grands comptes de la balance des paiements selon le BPM6 ?',
            answer: 'Le compte des transactions courantes, le compte de capital et le compte financier.'
          },
          {
            question: 'Qu’est-ce qu’un régime de change flottant ?',
            answer: 'Un régime dans lequel la banque centrale n’achète ni ne vend de devises et où le taux est déterminé sur le marché par l’offre et la demande.'
          },
          {
            question: 'Un pays a un solde courant de −50, un solde du compte de capital de +2 et des erreurs et omissions nulles (unités fictives). Quel est son solde financier net, et que signifie-t-il ?',
            answer: 'Avec compte courant + compte de capital − compte financier net + erreurs et omissions = 0 : −50 + 2 − FA + 0 = 0, donc FA = −48. Le pays emprunte net 48 au reste du monde : l’accroissement de ses engagements dépasse son acquisition d’actifs, ou ses réserves diminuent.'
          }
        ],
        sources: [
          { title: 'FMI — Balance of Payments and International Investment Position Manual, 6th edition (BPM6)', url: 'https://www.imf.org/external/pubs/ft/bop/2007/bopman6.htm' },
          { title: 'Harvard — Notes on the Balance of Payments', url: 'https://sites.harvard.edu/bgie-data/bop' },
          { title: 'Econlib — Foreign Exchange (Jeffrey A. Frankel)', url: 'https://www.econlib.org/library/Enc/ForeignExchange.html' }
        ]
      }
    },
    {
      id: 'systeme-monetaire-international',
      title: 'Systèmes monétaires internationaux : de Bretton Woods au flottement et au trilemme',
      field: 'Économie internationale · Finance internationale · Bretton Woods, accords de la Jamaïque, Mundell-Fleming',
      summary: 'Comprendre l’organisation du système de changes fixes de Bretton Woods, sa fin en 1971-1973, l’évolution vers le flottement et les contraintes de politique économique en économie ouverte.',
      lesson: {
        sections: [
          'En juillet 1944, une conférence réunissant quarante-quatre pays à Bretton Woods (New Hampshire) a établi l’ordre monétaire de l’après-guerre. Les pays ont convenu de maintenir leurs monnaies fixes par rapport au dollar, avec des ajustements possibles dans des situations exceptionnelles, et le dollar était lui-même convertible en or à 35 dollars l’once. Le système est devenu opérationnel en 1958 (Federal Reserve History). Le FMI et la Banque mondiale ont été créés dans ce cadre. Les monnaies étant fixées par rapport au dollar, elles l’étaient implicitement par rapport à l’or (FMI).',
          'Les règles étaient strictes. Un pays ne pouvait modifier la parité de sa monnaie qu’en cas de « déséquilibre fondamental » ; seul le pays concerné pouvait proposer un changement, que le FMI approuvait ou non. Le FMI prêtait des réserves, le plus souvent des dollars, pour permettre aux banques centrales de défendre la parité. L’objectif était d’éviter les dévaluations compétitives, les restrictions de change et les barrières commerciales qui, selon l’analyse dominante en 1944, avaient aggravé, voire causé, la Grande Dépression (FMI).',
          'Le système a souffert de plusieurs tensions. Les gouvernements des pays déficitaires dont la monnaie était surévaluée retardaient souvent les dévaluations, tandis que les pays excédentaires avaient peu d’incitations à réévaluer. Avec l’essor des capitaux privés, la rumeur d’une dévaluation pouvait provoquer des fuites de capitaux. Les États-Unis ont connu une crise de balance des paiements au début des années 1970 et leurs réserves d’or diminuaient. Le 15 août 1971, le président Richard Nixon a fermé la « fenêtre de l’or » : les gouvernements étrangers ne pouvaient plus échanger leurs dollars contre de l’or, et le système monétaire international est devenu en pratique un système de monnaie fiduciaire. Le même plan comprenait un gel des salaires et des prix de 90 jours et une surtaxe de 10 % sur les importations (Federal Reserve History). L’accord Smithsonian a ensuite cherché à maintenir des changes fixes avec une dévaluation du dollar, mais la parité du dollar a de nouveau été ajustée le 12 février 1973 (Economic History Society).',
          'Les accords de la Jamaïque, conclus en janvier 1976 lors d’une réunion du Comité intérimaire du FMI, ont donné lieu à une révision complète des statuts du FMI. Ils ont notamment aboli le prix officiel de l’or et réduit son rôle dans le système monétaire (Banque de réserve d’Australie). Les pays n’étaient plus tenus de déclarer et de maintenir une parité fixe, mais le FMI recevait la charge d’exercer une « surveillance ferme » des politiques de change pour prévenir les dévaluations compétitives et les manipulations de change (FMI). Les principaux taux de change flottent depuis le début des années 1970 (Econlib).',
          'Robert Mundell a analysé, au début des années 1960, les politiques monétaire et budgétaire en économie ouverte ; Marcus Fleming a développé un modèle voisin à la même époque (modèle de Mundell-Fleming). Il a montré le rôle déterminant du régime de change : sous change flottant, la politique monétaire devient puissante et la politique budgétaire impuissante ; sous change fixe, c’est l’inverse (comité Nobel, 1999). Sous change fixe, la banque centrale doit fournir la monnaie demandée au taux fixé, ce qui rend la politique monétaire essentiellement passive (Econlib). Mundell a aussi souligné ce qu’on appelle la « trinité incompatible » : libre mobilité des capitaux, taux de change fixe et niveau de prix particulier ne peuvent être atteints ensemble, deux au plus étant possibles. Dans la formulation usuelle du trilemme, change fixe, ouverture aux flux de capitaux et politique monétaire indépendante sont incompatibles : un gouvernement qui veut une inflation basse et la libre circulation des capitaux doit accepter un change flottant. Mundell est enfin l’auteur d’une théorie des zones monétaires optimales (1961), dans laquelle la mobilité du travail est essentielle pour qu’une zone partageant une monnaie fonctionne.'
        ],
        example: {
          statement: 'Dans un système de type Bretton Woods, la parité d’une monnaie fictive M est fixée à 4 M pour 1 dollar, et le dollar vaut 35 $ l’once d’or. Quel est le prix implicite de l’once d’or en M ?',
          calculation: 'Prix de l’once en M = 35 $ × 4 M par dollar = 140 M.',
          answer: 'L’once d’or vaut implicitement 140 M : fixer la monnaie au dollar la fixait aussi, implicitement, en or. Si la monnaie était dévaluée à 5 M pour 1 $, l’once vaudrait implicitement 35 × 5 = 175 M ; sous Bretton Woods, un tel changement de parité n’était admis qu’en cas de déséquilibre fondamental.'
        },
        exercise: {
          question: 'Selon l’analyse de Mundell, que deviennent les politiques monétaire et budgétaire sous change flottant, puis sous change fixe ?',
          answer: 'Sous change flottant, la politique monétaire devient puissante et la politique budgétaire impuissante ; sous change fixe, c’est l’inverse.'
        },
        exercises: [
          {
            question: 'Combien de pays étaient réunis à Bretton Woods en juillet 1944 et quelles institutions ont été créées dans ce cadre ?',
            answer: 'Quarante-quatre pays ; le FMI et la Banque mondiale.'
          },
          {
            question: 'Quel événement du 15 août 1971 a marqué la fin effective de Bretton Woods ?',
            answer: 'Le président Nixon a suspendu la convertibilité du dollar en or en fermant la « fenêtre de l’or ».'
          },
          {
            question: 'Quels éléments sont incompatibles dans le trilemme de l’économie ouverte ?',
            answer: 'Le change fixe, la libre circulation des capitaux et une politique monétaire indépendante : on ne peut en réunir que deux à la fois.'
          }
        ],
        sources: [
          { title: 'FMI — From the History Books: The Rethinking of the International Monetary System', url: 'https://www.imf.org/en/blogs/articles/2021/08/16/from-the-history-books-the-rethinking-of-the-international-monetary-system' },
          { title: 'Federal Reserve History — Nixon Ends Convertibility of U.S. Dollars to Gold', url: 'https://www.federalreservehistory.org/essays/gold-convertibility-ends' },
          { title: 'Economic History Society — Ending Bretton Woods', url: 'https://ehs.org.uk/ending-bretton-woods/' },
          { title: 'Reserve Bank of Australia — Annual Report 1976 : Australia and the World Economy', url: 'https://www.rba.gov.au/publications/annual-reports/rba/1976/australia-and-the-world-economy.html' },
          { title: 'Nobel Prize — The Prize in Economic Sciences 1999 (Press release)', url: 'https://www.nobelprize.org/prizes/economic-sciences/1999/press-release/' },
          { title: 'Econlib — Robert A. Mundell', url: 'https://www.econlib.org/library/Enc/bios/Mundell.html' }
        ]
      }
    }
  ]
},

{
  id: 'mecanisme-dette',
  title: 'Le mécanisme de la dette',
  note: 'Six chapitres pour comprendre la formation de la dette publique, les emprunts obligataires, les intérêts, le refinancement, la dynamique du ratio dette/PIB, le rôle des marchés financiers et les critères de soutenabilité. Le périmètre statistique et les règles peuvent varier selon les pays et évoluer dans le temps. Les exemples chiffrés sont pédagogiques et ne décrivent pas une situation nationale réelle.',
  chapters: [
    {
      id: 'origine-et-definition-dette-publique',
      title: 'L’origine de la dette publique : recettes, dépenses et déficit',
      field: 'Économie publique · Comptabilité nationale et finances publiques',
      summary: 'Distinguer dette, déficit et besoin de financement, comprendre quelles administrations sont concernées et identifier pourquoi un État emprunte.',
      lesson: {
        sections: [
          'La dette publique est un stock : elle correspond aux engagements financiers qui restent dus par les administrations publiques à une date donnée. Le déficit public est un flux mesuré sur une période, généralement une année : il apparaît lorsque les dépenses publiques dépassent les recettes publiques. Un déficit peut donc accroître la dette, mais les deux notions ne sont pas interchangeables. La dette résulte de l’accumulation des emprunts passés non encore remboursés, à laquelle peuvent s’ajouter certains ajustements comptables et financiers.',

          'Dans les statistiques européennes, le secteur des administrations publiques comprend les administrations centrales, les administrations locales et les administrations de sécurité sociale. Il ne se limite donc pas au seul budget de l’État. La dette dite « de Maastricht » est une dette brute, consolidée et évaluée à sa valeur nominale ; elle couvre principalement les numéraires et dépôts, les titres de dette et les prêts. La consolidation évite notamment de compter comme dette publique une créance détenue par une administration publique sur une autre administration publique du même périmètre.',

          'Lorsqu’une collectivité ou une administration dépense davantage qu’elle ne reçoit sur une période, elle doit couvrir cet écart par des ressources de financement : emprunt, mobilisation de trésorerie ou autres opérations financières. Pour l’État français, l’Agence France Trésor gère la dette et la trésorerie de l’État, mais elle ne gère pas à elle seule toute la dette des administrations publiques. Les organismes de sécurité sociale et les collectivités ont leurs propres circuits de financement.',

          'L’emprunt n’est pas nécessairement lié à une dépense exceptionnelle : il peut financer un déficit courant, un investissement public ou le remboursement d’emprunts arrivant à échéance. Il permet de répartir dans le temps le financement de certaines dépenses, mais crée en contrepartie une obligation de payer des intérêts et de rembourser le capital selon les conditions prévues. L’analyse économique doit donc examiner à la fois l’utilité des dépenses financées, leur rendement collectif éventuel et le coût futur du financement.'
        ],
        example: {
          statement: 'Une administration reçoit 100 milliards d’euros de recettes et engage 112 milliards d’euros de dépenses sur une année. En supposant qu’il n’existe aucun autre ajustement, quel est son déficit sur cette période ?',
          calculation: 'Déficit = dépenses - recettes. Déficit = 112 - 100 = 12 milliards d’euros.',
          answer: 'Le déficit est de 12 milliards d’euros. Il s’agit d’un flux annuel. Si ce déficit est financé par emprunt et qu’aucun autre facteur ne modifie l’encours, la dette augmente de 12 milliards d’euros.'
        },
        exercise: {
          question: 'Quelle est la différence fondamentale entre le déficit public et la dette publique ?',
          answer: 'Le déficit est un flux mesuré sur une période, tandis que la dette est un stock d’engagements financiers restant dus à une date donnée.'
        },
        exercises: [
          {
            question: 'La dette publique au sens de Maastricht concerne-t-elle uniquement l’État central ?',
            answer: 'Non. Elle couvre l’ensemble des administrations publiques entrant dans le périmètre statistique : administrations centrales, locales et de sécurité sociale.'
          },
          {
            question: 'Pourquoi parle-t-on d’une dette publique consolidée ?',
            answer: 'Parce que les dettes et créances entre unités appartenant au secteur des administrations publiques sont neutralisées afin d’éviter les doubles comptes.'
          },
          {
            question: 'Un déficit annuel et un encours de dette représentent-ils la même grandeur ?',
            answer: 'Non. Le déficit mesure un besoin net de financement sur une période ; l’encours de dette mesure les engagements restant dus à une date donnée.'
          }
        ],
        sources: [
          {
            title: 'Banque de France — La dette publique',
            url: 'https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/la-dette-publique'
          },
          {
            title: 'Agence France Trésor — Gestion de la dette de l’État',
            url: 'https://www.aft.gouv.fr/fr/definition-perimetre'
          },
          {
            title: 'Eurostat — Excessive deficit procedure : concepts et définitions',
            url: 'https://ec.europa.eu/eurostat/web/government-finance-statistics/excessive-deficit-procedure'
          },
          {
            title: 'Ministère de l’Économie — 5 minutes pour comprendre la dette publique',
            url: 'https://www.economie.gouv.fr/decryptage-5-minutes-pour-comprendre-la-dette-publique'
          }
        ]
      }
    },

    {
      id: 'emprunts-obligations-et-emissions',
      title: 'Comment un État emprunte : obligations et émissions de dette',
      field: 'Marchés financiers · Titres souverains et financement de l’État',
      summary: 'Comprendre le rôle des obligations, des bons du Trésor, des adjudications, des investisseurs et des caractéristiques contractuelles d’un emprunt.',
      lesson: {
        sections: [
          'Un État peut emprunter en émettant des titres de dette. Une obligation représente une créance : l’investisseur qui l’achète prête des fonds à l’émetteur et reçoit en contrepartie des paiements définis par les caractéristiques du titre. Dans le cas d’une obligation à taux fixe classique, l’émetteur verse généralement des intérêts périodiques, appelés coupons, puis rembourse le principal à l’échéance. Les modalités exactes dépendent du titre : certains instruments ont un taux variable, une indexation ou une structure différente.',

          'En France, les obligations assimilables du Trésor (OAT) constituent les principaux titres négociables de moyen et long terme émis par l’État. Les bons du Trésor à taux fixe et à intérêts précomptés (BTF) sont des instruments de court terme. La maturité désigne la durée restant jusqu’au remboursement final du principal. Une maturité longue permet de répartir les échéances dans le temps, mais le taux demandé par les investisseurs peut intégrer davantage d’incertitude sur l’inflation, les taux futurs et la situation budgétaire.',

          'L’émission de titres souverains s’effectue notamment par adjudication : l’émetteur annonce une opération et les participants soumettent des offres selon les règles du marché. Le prix ou le rendement obtenu dépend de la demande, des conditions monétaires, de la maturité, de la liquidité du titre et de l’évaluation du risque par les investisseurs. L’État ne choisit donc pas librement un taux arbitraire : le coût de financement résulte des conditions auxquelles les investisseurs acceptent de prêter.',

          'Les acheteurs peuvent être des banques, des fonds d’investissement, des assureurs, des fonds de pension, des banques centrales ou d’autres investisseurs, selon les marchés et les périodes. Une fois émis, les titres peuvent être échangés sur le marché secondaire. Ces transactions modifient leur détenteur, mais ne fournissent pas directement de nouveaux fonds à l’État émetteur : les fonds reçus par l’État proviennent de l’émission initiale ou d’une réémission, et non de chaque revente ultérieure.'
        ],
        example: {
          statement: 'Un investisseur achète à l’émission une obligation d’une valeur nominale de 1 000 euros, assortie d’un coupon annuel fixe de 3 % et d’une échéance dans 5 ans. Quel coupon annuel est prévu, en supposant que le titre est détenu pendant toute l’année ?',
          calculation: 'Coupon annuel = valeur nominale × taux du coupon. Coupon annuel = 1 000 × 0,03 = 30 euros.',
          answer: 'Le coupon annuel prévu est de 30 euros. Le remboursement des 1 000 euros de principal intervient à l’échéance, selon les conditions de cette obligation. Le rendement réellement obtenu par l’investisseur peut différer du taux du coupon s’il a acheté le titre à un prix différent de sa valeur nominale.'
        },
        exercise: {
          question: 'Quelle différence existe entre le marché primaire et le marché secondaire des obligations ?',
          answer: 'Sur le marché primaire, l’émetteur place les titres et reçoit les fonds. Sur le marché secondaire, les investisseurs échangent des titres déjà émis entre eux.'
        },
        exercises: [
          {
            question: 'Que représente la valeur nominale d’une obligation ?',
            answer: 'C’est le montant de principal auquel se réfèrent les conditions du titre et qui doit être remboursé selon les modalités prévues.'
          },
          {
            question: 'Que signifie la maturité d’un titre de dette ?',
            answer: 'Elle désigne la durée restant jusqu’à son échéance finale, date à laquelle le principal doit être remboursé selon le contrat.'
          },
          {
            question: 'Une revente d’une OAT entre deux investisseurs apporte-t-elle automatiquement de l’argent frais à l’État ?',
            answer: 'Non. La revente sur le marché secondaire transfère le titre entre investisseurs ; elle ne constitue pas une nouvelle émission par l’État.'
          }
        ],
        sources: [
          {
            title: 'Agence France Trésor — Gestion de la dette de l’État',
            url: 'https://www.aft.gouv.fr/fr/definition-perimetre'
          },
          {
            title: 'Agence France Trésor — Glossaire',
            url: 'https://www.aft.gouv.fr/fr/glossaire-accord%C3%A9on'
          },
          {
            title: 'Ministère de l’Économie — 5 minutes pour comprendre la dette publique',
            url: 'https://www.economie.gouv.fr/decryptage-5-minutes-pour-comprendre-la-dette-publique'
          }
        ]
      }
    },

    {
      id: 'interets-charge-et-refinancement',
      title: 'Les intérêts, le remboursement et le refinancement de la dette',
      field: 'Finances publiques · Coût de financement et gestion de trésorerie',
      summary: 'Étudier la charge d’intérêts, les échéances de remboursement, le refinancement et la différence entre coût moyen de la dette et taux des nouvelles émissions.',
      lesson: {
        sections: [
          'L’intérêt est le prix contractuel payé pour disposer temporairement de fonds empruntés. Pour une obligation à taux fixe, le coupon est déterminé par les conditions du titre et calculé à partir de sa valeur nominale. La charge d’intérêts d’une administration sur une année dépend de l’ensemble des emprunts en circulation, de leurs taux, de leurs échéances et de leurs caractéristiques. Elle ne se confond pas avec le montant total de dette : deux États ayant le même encours peuvent supporter des charges d’intérêts différentes.',

          'Il faut distinguer le taux des nouvelles émissions du taux moyen payé sur l’ensemble de la dette existante. Si les taux de marché augmentent, les nouveaux emprunts deviennent généralement plus coûteux, mais les obligations anciennes à taux fixe conservent leurs coupons contractuels jusqu’à leur échéance. La hausse du coût moyen se diffuse donc progressivement à mesure que les titres arrivent à échéance et sont remplacés ou que la dette à taux variable est révisée.',

          'À l’échéance d’un titre, le principal doit être remboursé selon le contrat. Pour assurer la continuité du financement, un État peut émettre de nouveaux titres afin de couvrir une partie des remboursements arrivant à échéance : c’est le refinancement. Cette opération ne signifie pas nécessairement que le stock de dette augmente du montant remboursé. Si un nouvel emprunt de même montant remplace exactement l’ancien, le principal total reste inchangé ; en revanche, le coût, la maturité et la composition de la dette peuvent changer.',

          'Le besoin de financement annuel peut comprendre le déficit à financer et les remboursements de principal arrivant à échéance, ainsi que d’autres opérations de trésorerie ou financières. Il est donc souvent supérieur au seul déficit public. Une gestion prudente cherche à répartir les échéances, à limiter les risques de refinancement et à conserver un accès régulier au marché. Le refinancement expose néanmoins l’émetteur aux conditions qui prévalent au moment où il doit renouveler ses emprunts.'
        ],
        example: {
          statement: 'Un titre de 500 millions d’euros arrive à échéance. L’État émet un nouveau titre de 500 millions d’euros pour financer le remboursement du premier. Quel est l’effet mécanique sur le principal total de dette, en faisant abstraction des autres opérations ?',
          calculation: 'Variation nette du principal = nouvel emprunt - principal remboursé. Variation nette = 500 - 500 = 0 million d’euros.',
          answer: 'Le principal total reste inchangé dans cet exemple simplifié. L’opération renouvelle la dette ; elle ne l’augmente pas mécaniquement. Le nouveau titre peut toutefois avoir un taux d’intérêt ou une maturité différents.'
        },
        exercise: {
          question: 'Pourquoi une hausse des taux de marché ne fait-elle pas immédiatement augmenter dans la même proportion la charge d’intérêts de toute la dette à taux fixe déjà émise ?',
          answer: 'Parce que les coupons des obligations anciennes à taux fixe sont contractuellement déterminés. Le coût moyen augmente progressivement lorsque ces titres arrivent à échéance et sont refinancés à de nouvelles conditions.'
        },
        exercises: [
          {
            question: 'Le besoin de financement annuel est-il toujours égal au déficit public ?',
            answer: 'Non. Il peut aussi inclure les remboursements de principal arrivant à échéance et d’autres opérations financières ou de trésorerie.'
          },
          {
            question: 'Que signifie refinancer une dette ?',
            answer: 'Cela consiste à obtenir de nouveaux financements, par exemple en émettant de nouveaux titres, afin notamment de rembourser des emprunts arrivant à échéance.'
          },
          {
            question: 'Une obligation à taux fixe voit-elle automatiquement son coupon augmenter lorsque les taux de marché montent ?',
            answer: 'Non. Son coupon contractuel reste normalement inchangé jusqu’à l’échéance. Le prix auquel elle s’échange sur le marché secondaire peut en revanche varier.'
          }
        ],
        sources: [
          {
            title: 'Agence France Trésor — Gestion de la dette de l’État',
            url: 'https://www.aft.gouv.fr/fr/definition-perimetre'
          },
          {
            title: 'Agence France Trésor — Glossaire',
            url: 'https://www.aft.gouv.fr/fr/glossaire-accord%C3%A9on'
          },
          {
            title: 'Ministère de l’Économie — 5 minutes pour comprendre la dette publique',
            url: 'https://www.economie.gouv.fr/decryptage-5-minutes-pour-comprendre-la-dette-publique'
          },
          {
            title: 'Banque des règlements internationaux — Annual Economic Report 2026, chapitre sur la dette publique',
            url: 'https://www.bis.org/publications/aer-2026/high-public-debt-shifting-financial-markets'
          }
        ]
      }
    },

    {
      id: 'dynamique-dette-et-ratio-pib',
      title: 'La dynamique de la dette : déficit primaire, croissance et taux d’intérêt',
      field: 'Macroéconomie · Dynamique de la dette et ratio dette/PIB',
      summary: 'Expliquer les facteurs qui font évoluer l’encours et le ratio de dette, notamment le solde primaire, le taux d’intérêt, la croissance nominale et les ajustements stock-flux.',
      lesson: {
        sections: [
          'L’évolution de la dette publique dépend du solde budgétaire, des intérêts dus et d’autres opérations qui peuvent modifier l’encours. Le solde primaire correspond à la différence entre les recettes publiques et les dépenses publiques hors intérêts de la dette. Un excédent primaire signifie que les recettes dépassent les dépenses hors intérêts ; un déficit primaire signifie l’inverse. Un excédent primaire peut contribuer à stabiliser ou réduire la dette, mais son effet doit être comparé au coût des intérêts et à la croissance de l’économie.',

          'Le ratio dette/PIB rapporte l’encours de dette au produit intérieur brut nominal. Il permet de mettre la dette en perspective avec la taille de l’économie, mais ne mesure pas à lui seul la capacité exacte de remboursement. Lorsque le PIB nominal augmente, le ratio peut diminuer même si le montant nominal de dette ne baisse pas. À l’inverse, une contraction du PIB nominal peut faire monter le ratio, y compris si l’encours de dette reste stable.',

          'Dans une représentation simplifiée, la dynamique du ratio dépend de l’écart entre le taux d’intérêt nominal moyen de la dette et le taux de croissance nominal du PIB, ainsi que du solde primaire rapporté au PIB. Si le coût moyen de la dette est supérieur à la croissance nominale, la charge héritée de la dette tend à exercer une pression à la hausse sur le ratio, sauf compensation par le solde primaire ou d’autres facteurs. Si la croissance nominale dépasse le taux d’intérêt moyen, cet effet mécanique est plus favorable, mais cela ne garantit pas à lui seul la soutenabilité.',

          'La relation complète doit aussi tenir compte des ajustements stock-flux : opérations financières, variations de valorisation, effets de change pour les dettes en devises, changements de périmètre ou écarts entre les données de caisse et les comptes nationaux. C’est pourquoi la variation annuelle de l’encours de dette ne correspond pas toujours exactement au déficit public de la même année. Les analyses sérieuses distinguent les mécanismes récurrents des opérations ponctuelles.'
        ],
        example: {
          statement: 'Dans un exemple simplifié, le taux d’intérêt nominal moyen de la dette est de 2 % et la croissance nominale du PIB est de 4 %. Quel est l’écart entre ces deux taux ?',
          calculation: 'Écart taux-croissance = taux d’intérêt - croissance nominale. Écart = 2 % - 4 % = -2 points de pourcentage.',
          answer: 'L’écart est de -2 points de pourcentage. Dans ce scénario, l’effet boule de neige lié au différentiel taux-croissance est favorable au ratio de dette, toutes choses égales par ailleurs. Il ne suffit toutefois pas à conclure que la dette est soutenable : le solde primaire et les autres ajustements comptent également.'
        },
        exercise: {
          question: 'Pourquoi le ratio dette/PIB peut-il diminuer sans que le montant nominal de dette baisse ?',
          answer: 'Parce que le PIB nominal, qui constitue le dénominateur du ratio, peut augmenter plus rapidement que l’encours nominal de dette.'
        },
        exercises: [
          {
            question: 'Qu’appelle-t-on solde primaire ?',
            answer: 'C’est le solde des recettes et des dépenses publiques hors charges d’intérêts de la dette.'
          },
          {
            question: 'Que signifie un différentiel taux d’intérêt moins croissance nominale négatif ?',
            answer: 'Cela signifie que le taux d’intérêt nominal moyen est inférieur à la croissance nominale du PIB ; cet écart tend, toutes choses égales par ailleurs, à alléger la dynamique du ratio dette/PIB.'
          },
          {
            question: 'Pourquoi la variation de dette peut-elle différer du déficit public ?',
            answer: 'Parce que des ajustements stock-flux, des opérations financières, des effets de change ou des changements de périmètre peuvent également modifier l’encours.'
          }
        ],
        sources: [
          {
            title: 'FMI — A Guide and Tool for Projecting Public Debt and Fiscal Adjustment Paths (2021)',
            url: 'https://www.imf.org/-/media/files/publications/tnm/2021/english/tnmea2021005.pdf'
          },
          {
            title: 'Banque de France — La dette publique',
            url: 'https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/la-dette-publique'
          },
          {
            title: 'Eurostat — Excessive deficit procedure : concepts et définitions',
            url: 'https://ec.europa.eu/eurostat/web/government-finance-statistics/excessive-deficit-procedure'
          },
          {
            title: 'Banque des règlements internationaux — Annual Economic Report 2023, politique monétaire et budgétaire',
            url: 'https://www.bis.org/publications/aer-2023/monetary-fiscal-policy-safeguarding-stability-trust'
          }
        ]
      }
    },

    {
      id: 'marches-financiers-et-risque-souverain',
      title: 'Les marchés financiers, les taux et la confiance des investisseurs',
      field: 'Économie financière · Marché obligataire et risque souverain',
      summary: 'Analyser comment se forme le coût de financement, pourquoi le prix des obligations varie et quels risques peuvent affecter un État emprunteur.',
      lesson: {
        sections: [
          'Le rendement demandé sur une obligation souveraine dépend de plusieurs éléments : le niveau général des taux d’intérêt, les anticipations d’inflation, la durée du prêt, la liquidité du titre et l’évaluation du risque de crédit. Les investisseurs comparent les rendements disponibles sur des titres de maturité et de caractéristiques proches. Un État perçu comme plus risqué peut devoir offrir un rendement plus élevé pour attirer les acheteurs, mais cette relation dépend aussi des conditions monétaires et de la situation globale des marchés.',

          'Le prix d’une obligation à taux fixe évolue généralement en sens inverse de son rendement de marché. Lorsque les taux exigés par le marché augmentent, les coupons fixes d’une obligation ancienne deviennent relativement moins attractifs ; son prix tend donc à baisser. Lorsque les rendements de marché diminuent, le prix de cette obligation tend à augmenter. Cette variation affecte la valeur de marché du titre pour son détenteur, sans modifier automatiquement le coupon contractuel que l’émetteur doit verser.',

          'Le risque souverain ne se résume pas à un chiffre unique de dette/PIB. Les investisseurs et les analystes examinent notamment la capacité de l’État à percevoir des recettes, la croissance, la structure des échéances, la part de dette à taux variable ou en devises, la profondeur du marché domestique, la stabilité institutionnelle et la crédibilité de la politique économique. Une forte concentration de remboursements à court terme peut accroître le risque de refinancement, car une grande quantité de dette doit être renouvelée dans un délai réduit.',

          'Les taux souverains peuvent également être influencés par les décisions de politique monétaire et les conditions financières internationales. Une hausse des taux directeurs ou des rendements de référence peut renchérir le financement de nombreux emprunteurs. Dans une union monétaire, les États partagent une monnaie mais restent responsables de leurs finances publiques ; leurs rendements peuvent donc diverger en fonction de leur situation budgétaire, de la liquidité de leurs titres et de l’évaluation des risques. Il serait incorrect d’attribuer toute variation des taux à une seule cause.'
        ],
        example: {
          statement: 'Une obligation à taux fixe verse un coupon annuel de 20 euros. Après son émission, les nouvelles obligations comparables offrent un rendement plus élevé. Que peut-il se passer sur le marché secondaire ?',
          calculation: 'Le coupon de 20 euros reste fixé par le contrat. Pour rendre l’ancienne obligation plus attractive face aux nouveaux titres, son prix de marché tend à baisser, ce qui augmente son rendement courant et son rendement à l’échéance, selon les modalités du titre.',
          answer: 'Le prix de marché de l’ancienne obligation tend à diminuer. Son coupon contractuel ne change pas. Cette distinction sépare le coût contractuel de l’emprunt pour l’émetteur de la valeur de marché du titre pour l’investisseur.'
        },
        exercise: {
          question: 'Pourquoi le prix d’une obligation à taux fixe baisse-t-il généralement lorsque les rendements de marché augmentent ?',
          answer: 'Parce que ses paiements fixes deviennent moins attractifs par rapport aux rendements offerts par les nouvelles obligations ; son prix doit généralement baisser pour compenser cette différence.'
        },
        exercises: [
          {
            question: 'Que mesure le rendement d’une obligation ?',
            answer: 'Il exprime le rapport entre les revenus et le prix payé, ou le rendement calculé jusqu’à l’échéance selon les hypothèses retenues. Il ne se confond pas nécessairement avec le taux du coupon.'
          },
          {
            question: 'Qu’est-ce que le risque de refinancement ?',
            answer: 'C’est le risque de ne pas pouvoir renouveler des emprunts arrivant à échéance à des conditions acceptables, voire de rencontrer des difficultés pour obtenir les fonds nécessaires.'
          },
          {
            question: 'Une dette élevée suffit-elle à déterminer à elle seule le risque souverain ?',
            answer: 'Non. Il faut aussi analyser les taux, la croissance, les échéances, la monnaie d’émission, la base d’investisseurs, les recettes publiques et les institutions.'
          }
        ],
        sources: [
          {
            title: 'Banque des règlements internationaux — Annual Economic Report 2026, dette publique et marchés financiers',
            url: 'https://www.bis.org/publications/aer-2026/high-public-debt-shifting-financial-markets'
          },
          {
            title: 'Banque des règlements internationaux — Annual Economic Report 2023, politique monétaire et budgétaire',
            url: 'https://www.bis.org/publications/aer-2023/monetary-fiscal-policy-safeguarding-stability-trust'
          },
          {
            title: 'Agence France Trésor — Glossaire',
            url: 'https://www.aft.gouv.fr/fr/glossaire-accord%C3%A9on'
          },
          {
            title: 'FMI — A Guide and Tool for Projecting Public Debt and Fiscal Adjustment Paths (2021)',
            url: 'https://www.imf.org/-/media/files/publications/tnm/2021/english/tnmea2021005.pdf'
          }
        ]
      }
    },

    {
      id: 'soutenabilite-regles-et-choix-publics',
      title: 'La soutenabilité de la dette : limites, règles européennes et choix économiques',
      field: 'Économie publique · Soutenabilité budgétaire et gouvernance européenne',
      summary: 'Évaluer la capacité à servir la dette dans la durée, comprendre les repères européens et examiner les arbitrages entre financement, stabilisation économique et maîtrise des risques.',
      lesson: {
        sections: [
          'La soutenabilité de la dette désigne la capacité d’une administration à honorer ses engagements dans la durée sans devoir adopter des ajustements économiquement ou socialement intenables, ni dépendre d’un refinancement constamment incertain. Elle ne se déduit pas d’un seuil isolé. L’analyse combine la trajectoire de dette, les besoins bruts de financement, les charges d’intérêts, la croissance, les recettes mobilisables, la structure des échéances et la capacité institutionnelle à mettre en œuvre des décisions budgétaires.',

          'Dans l’Union européenne, le cadre des déficits excessifs retient des valeurs de référence de 3 % du PIB pour le déficit public et de 60 % du PIB pour la dette publique. Ces valeurs sont des références inscrites dans le cadre européen, et non une preuve automatique qu’une dette située juste en dessous serait sans risque ou qu’une dette située au-dessus serait immédiatement impossible à financer. Le traité prévoit aussi, pour le critère de dette, la possibilité de satisfaire au critère lorsque le ratio diminue suffisamment et se rapproche de la valeur de référence à un rythme satisfaisant, selon les règles applicables.',

          'Une dette peut financer des dépenses qui soutiennent l’activité, protègent les ménages en période de crise ou développent des infrastructures et des équipements collectifs. Mais l’emprunt reporte une partie du financement dans le temps et impose des paiements futurs. Si les intérêts augmentent fortement, une part croissante des recettes peut être consacrée au service de la dette, réduisant les marges de manœuvre pour d’autres politiques publiques. L’évaluation doit donc comparer les coûts, les bénéfices attendus, les risques et la répartition des effets entre générations.',

          'Les trajectoires de dette sont incertaines. Une récession, une hausse durable des taux, une crise financière, une dépréciation de la monnaie pour une dette en devises ou la matérialisation de garanties publiques peuvent dégrader les comptes. À l’inverse, une croissance plus forte, une meilleure efficacité des dépenses ou des recettes plus élevées peuvent améliorer la trajectoire. Les institutions utilisent donc des projections et des scénarios de stress plutôt qu’une prévision unique présentée comme certaine. Une conclusion sérieuse expose les hypothèses, les risques et les marges d’incertitude.'
        ],
        example: {
          statement: 'Un pays affiche une dette publique égale à 80 % de son PIB. Peut-on conclure, à partir de ce seul ratio, que sa dette est insoutenable ?',
          calculation: 'Le ratio dette/PIB est un indicateur de taille relative. Pour évaluer la soutenabilité, il faut aussi étudier le coût moyen de la dette, la croissance nominale, le solde primaire, les échéances, les besoins de refinancement, la monnaie d’émission et la capacité de financement de l’État.',
          answer: 'Non. Le ratio de 80 % ne suffit pas à conclure. Il dépasse la valeur de référence européenne de 60 %, mais l’analyse doit porter sur la trajectoire et l’ensemble des facteurs de soutenabilité. La valeur de référence ne constitue pas à elle seule un diagnostic de défaut ou de solvabilité.'
        },
        exercise: {
          question: 'Pourquoi la soutenabilité d’une dette publique ne peut-elle pas être évaluée uniquement à partir du ratio dette/PIB ?',
          answer: 'Parce qu’elle dépend également du coût de financement, de la croissance, du solde primaire, des échéances, de la structure de la dette, des recettes publiques et des risques économiques et institutionnels.'
        },
        exercises: [
          {
            question: 'Quelles sont les deux valeurs de référence du cadre européen traditionnel de surveillance des déficits excessifs ?',
            answer: '3 % du PIB pour le déficit public et 60 % du PIB pour la dette publique. Ce sont des valeurs de référence du cadre européen.'
          },
          {
            question: 'Une dette supérieure à 60 % du PIB signifie-t-elle automatiquement qu’un État ne peut plus emprunter ?',
            answer: 'Non. Ce dépassement ne signifie pas automatiquement une impossibilité d’emprunter. L’évaluation européenne et économique tient compte de la trajectoire de dette et d’autres facteurs prévus par les règles applicables.'
          },
          {
            question: 'Pourquoi les économistes utilisent-ils des scénarios de stress pour étudier la dette ?',
            answer: 'Pour examiner comment la trajectoire pourrait évoluer en cas de chocs défavorables, par exemple une croissance plus faible, des taux plus élevés ou des besoins de financement inattendus.'
          }
        ],
        sources: [
          {
            title: 'Eurostat — Excessive deficit procedure',
            url: 'https://ec.europa.eu/eurostat/web/government-finance-statistics/excessive-deficit-procedure'
          },
          {
            title: 'Conseil de l’Union européenne — Economic governance framework',
            url: 'https://www.consilium.europa.eu/en/policies/economic-governance-framework/'
          },
          {
            title: 'FMI — A Guide and Tool for Projecting Public Debt and Fiscal Adjustment Paths (2021)',
            url: 'https://www.imf.org/-/media/files/publications/tnm/2021/english/tnmea2021005.pdf'
          },
          {
            title: 'Banque de France — La dette publique',
            url: 'https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/la-dette-publique'
          },
          {
            title: 'Banque des règlements internationaux — Annual Economic Report 2026, dette publique et marchés financiers',
            url: 'https://www.bis.org/publications/aer-2026/high-public-debt-shifting-financial-markets'
          }
        ]
      }
    }
  ]
},


{
  id: 'banques-centrales',
  title: 'Banques Centrales : Rôles et fonctionnement',
  note: 'Six chapitres approfondis consacrés aux institutions de banque centrale, à leurs mandats, à la politique monétaire, à ses instruments et à sa transmission, à la monnaie centrale et aux paiements, à la stabilité financière ainsi qu’à l’indépendance et à la responsabilité démocratique. Les mandats et les instruments varient selon les pays : les exemples de la BCE et de la Réserve fédérale ne doivent pas être généralisés à toutes les banques centrales.',
  chapters: [
    {
      id: 'institution-et-missions',
      title: 'La banque centrale : institution, statut et missions fondamentales',
      field: 'Économie monétaire · Institutions financières et architecture monétaire',
      summary: 'Définir une banque centrale, distinguer son rôle de celui des banques commerciales et comprendre les principales missions qui lui sont confiées par le droit de chaque pays.',
      lesson: {
        sections: [
          'Une banque centrale est une institution située au cœur du système monétaire d’un pays ou d’une union monétaire. Elle émet la monnaie de banque centrale, conduit ou participe à la conduite de la politique monétaire et contribue au fonctionnement des systèmes de paiement. Dans la plupart des économies avancées, son objectif monétaire principal est la stabilité des prix. D’autres missions peuvent lui être attribuées par la loi, notamment la contribution à la stabilité financière, la gestion de réserves officielles ou certaines responsabilités de supervision bancaire. Il n’existe cependant pas un modèle institutionnel unique : le statut juridique, les compétences et les priorités diffèrent d’un pays à l’autre.',
          'La banque centrale ne fonctionne pas comme une banque commerciale destinée au grand public. Les ménages et les entreprises détiennent généralement leurs dépôts auprès de banques commerciales ou d’autres prestataires autorisés. Les banques commerciales, elles, peuvent détenir des comptes de réserves auprès de la banque centrale. Ces réserves constituent de la monnaie de banque centrale et servent notamment au règlement des paiements entre établissements. La banque centrale est donc au centre de l’infrastructure monétaire, sans pour autant gérer les comptes courants ordinaires de l’ensemble de la population.',
          'Il faut distinguer trois niveaux. La banque centrale définit ou met en œuvre les conditions monétaires conformément à son mandat. Les banques commerciales accordent des crédits, collectent des dépôts et fournissent des services bancaires. Les autorités publiques définissent le cadre légal et budgétaire dans lequel les institutions opèrent. Dans une union monétaire, la répartition des responsabilités peut être partagée : dans la zone euro, la BCE et les banques centrales nationales composent l’Eurosystème pour les missions liées à la monnaie unique. Les banques centrales nationales participent à l’exécution opérationnelle de nombreuses décisions communes.',
          'La banque centrale exerce aussi une fonction institutionnelle de confiance. La monnaie est utile parce que les agents économiques peuvent l’accepter comme moyen de paiement, unité de compte et réserve de valeur. Cette confiance dépend de la stabilité du cadre monétaire, de la solidité des infrastructures de paiement, de la qualité des institutions et de la capacité à préserver la convertibilité des différentes formes de monnaie à leur valeur nominale. La banque centrale contribue à cette confiance, mais elle ne peut pas garantir à elle seule la prospérité, l’emploi ou l’absence de crises.'
        ],
        example: {
          statement: 'Dans la zone euro, quelle institution prend les décisions de politique monétaire communes et quel rôle les banques centrales nationales peuvent-elles jouer ?',
          calculation: 'Il faut distinguer la décision commune de sa mise en œuvre opérationnelle. Le Conseil des gouverneurs de la BCE prend les décisions de politique monétaire pour la zone euro. Les banques centrales nationales de l’Eurosystème participent notamment à leur mise en œuvre, par exemple au moyen d’opérations de refinancement.',
          answer: 'Le Conseil des gouverneurs de la BCE décide de l’orientation de la politique monétaire de la zone euro. Les banques centrales nationales contribuent à l’exécution des opérations et aux autres missions de l’Eurosystème.'
        },
        exercise: {
          question: 'Pourquoi une banque centrale ne doit-elle pas être confondue avec une banque commerciale ?',
          answer: 'Parce que leurs fonctions principales sont différentes : la banque centrale émet la monnaie centrale et pilote la politique monétaire selon son mandat, tandis que la banque commerciale fournit des services aux clients, collecte des dépôts et accorde des crédits.'
        },
        exercises: [
          {
            question: 'Citez deux missions courantes d’une banque centrale.',
            answer: 'La conduite de la politique monétaire et l’émission de monnaie de banque centrale. La supervision ou la surveillance des paiements constitue une autre mission fréquente.'
          },
          {
            question: 'Les particuliers détiennent-ils généralement leurs comptes courants auprès de la banque centrale ?',
            answer: 'Non. Ils détiennent généralement leurs dépôts auprès de banques commerciales ou de prestataires autorisés. Les banques commerciales détiennent, elles, des réserves auprès de la banque centrale.'
          },
          {
            question: 'Toutes les banques centrales ont-elles exactement le même mandat ?',
            answer: 'Non. Leurs objectifs et leurs compétences dépendent du cadre juridique et institutionnel de chaque pays ou union monétaire.'
          }
        ],
        sources: [
          { title: 'Banque de France — Qu’est-ce qu’une banque centrale ?', url: 'https://www.banque-france.fr/fr/actualites/quest-ce-quune-banque-centrale' },
          { title: 'BCE — Introduction à la politique monétaire', url: 'https://www.ecb.europa.eu/mopo/intro/html/index.en.html' },
          { title: 'BIS — Central banking: embracing change', url: 'https://www.bis.org/speeches/20240522-central-banking-embracing-change.htm' }
        ]
      }
    },
    {
      id: 'mandat-et-stabilite-des-prix',
      title: 'Le mandat monétaire et la stabilité des prix',
      field: 'Économie monétaire · Inflation, objectifs et diagnostic macroéconomique',
      summary: 'Comprendre la stabilité des prix, mesurer l’inflation, distinguer les objectifs selon les institutions et analyser les arbitrages auxquels une banque centrale est confrontée.',
      lesson: {
        sections: [
          'La stabilité des prix est l’objectif principal de nombreuses banques centrales, mais sa définition opérationnelle dépend de leur mandat. Elle ne signifie pas que chaque prix reste immobile. Elle signifie plutôt que le niveau général des prix évolue à un rythme faible, stable et prévisible. Une hausse isolée du prix d’un produit ne suffit donc pas à caractériser l’inflation générale. Les banques centrales suivent des indices agrégés, notamment des indices des prix à la consommation, pour évaluer l’évolution moyenne des prix d’un panier de biens et de services.',
          'L’inflation correspond à une augmentation durable du niveau général des prix. Son taux mesure la variation de cet indice sur une période donnée. Une inflation positive signifie que le niveau moyen des prix augmente ; une désinflation désigne un ralentissement du rythme de cette hausse ; une déflation correspond à une baisse durable du niveau général des prix. Ces notions ne sont pas interchangeables. Une baisse du taux d’inflation ne signifie donc pas nécessairement que les prix reviennent à leur niveau antérieur : elle indique seulement que leur progression ralentit.',
          'Dans la zone euro, la BCE vise une inflation de 2 % à moyen terme, mesurée par l’indice des prix à la consommation harmonisé pour la zone euro. La cible est symétrique : les écarts à la hausse comme à la baisse sont considérés comme indésirables. L’horizon de moyen terme tient compte du fait que les décisions monétaires ne peuvent pas corriger instantanément les chocs économiques. La Réserve fédérale des États-Unis possède un mandat différent, qui inclut la recherche du plein emploi maximal et de prix stables. Cet exemple montre qu’il faut toujours lire le mandat juridique de l’institution étudiée avant de décrire ses objectifs.',
          'Pour établir son diagnostic, une banque centrale observe de nombreux indicateurs : inflation globale et sous-jacente, salaires, coûts de production, demande intérieure, activité, emploi, crédit, conditions financières, taux de change et anticipations d’inflation. Aucun indicateur isolé ne donne une image complète. Une hausse des prix due à une augmentation temporaire du coût de l’énergie n’a pas nécessairement les mêmes causes ni les mêmes implications qu’une inflation généralisée alimentée par une demande durablement supérieure aux capacités de production.',
          'La stabilité des prix favorise la lisibilité des contrats, la planification des investissements et la préservation du pouvoir d’achat nominal. Une inflation élevée et instable rend les décisions économiques plus difficiles et peut redistribuer les revenus et patrimoines de manière imprévisible. À l’inverse, une inflation trop faible ou une déflation persistante peuvent inciter certains agents à différer leurs dépenses, accroître le poids réel de dettes nominales et compliquer l’ajustement économique. La politique monétaire cherche donc à éviter les déséquilibres durables, sans prétendre supprimer toute variation des prix relatifs.'
        ],
        example: {
          statement: 'Un indice des prix passe de 100 à 102 entre deux périodes comparables. Quel est le taux d’inflation sur la période ?',
          calculation: 'Taux d’inflation = ((indice final - indice initial) / indice initial) × 100. Donc ((102 - 100) / 100) × 100 = 2 %.',
          answer: 'Le taux d’inflation est de 2 % sur la période considérée. Cela signifie que le niveau de l’indice a augmenté de 2 %, et non que chaque prix individuel a nécessairement augmenté de 2 %.'
        },
        exercise: {
          question: 'Quelle différence existe-t-il entre désinflation et déflation ?',
          answer: 'La désinflation est un ralentissement de l’inflation : les prix continuent globalement d’augmenter, mais moins vite. La déflation est une baisse durable du niveau général des prix.'
        },
        exercises: [
          {
            question: 'Quel est l’objectif d’inflation à moyen terme de la BCE ?',
            answer: 'La BCE vise une inflation de 2 % à moyen terme pour la zone euro.'
          },
          {
            question: 'Une inflation de 4 % qui passe à 2 % signifie-t-elle que les prix ont baissé ?',
            answer: 'Non. Si l’inflation reste positive, les prix augmentent encore, mais moins rapidement.'
          },
          {
            question: 'Pourquoi une banque centrale observe-t-elle les anticipations d’inflation ?',
            answer: 'Parce que les anticipations peuvent influencer les négociations salariales, la fixation des prix et les décisions de consommation et d’investissement. Leur ancrage contribue à la crédibilité de la politique monétaire.'
          }
        ],
        sources: [
          { title: 'BCE — Introduction : objectif de stabilité des prix et cible de 2 %', url: 'https://www.ecb.europa.eu/mopo/intro/html/index.en.html' },
          { title: 'Banque de France — Qu’est-ce qu’une banque centrale ?', url: 'https://www.banque-france.fr/fr/actualites/quest-ce-quune-banque-centrale' },
          { title: 'Réserve fédérale — Monetary Policy: What Are Its Goals? How Does It Work?', url: 'https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm' }
        ]
      }
    },
    {
      id: 'instruments-et-transmission',
      title: 'Les instruments de politique monétaire et leur transmission à l’économie',
      field: 'Politique monétaire · Taux directeurs, refinancement et transmission',
      summary: 'Étudier les principaux instruments conventionnels et non conventionnels, puis suivre les canaux par lesquels les décisions monétaires influencent le crédit, la demande et l’inflation.',
      lesson: {
        sections: [
          'Les taux directeurs constituent un instrument central de la politique monétaire dans de nombreuses économies. Ils influencent les conditions auxquelles les banques peuvent obtenir des liquidités auprès de la banque centrale et contribuent à orienter les taux du marché monétaire. Leur modification se répercute, avec des délais et une intensité variables, sur les taux des crédits et des dépôts proposés aux ménages et aux entreprises. Il faut toutefois éviter de présenter un taux directeur comme le taux appliqué automatiquement à tous les emprunteurs : les banques ajoutent notamment des marges qui tiennent compte du risque, de leurs coûts et de la concurrence.',
          'Les opérations d’open market et les opérations de refinancement permettent à la banque centrale de fournir ou d’absorber des liquidités selon les modalités de son cadre opérationnel. Lorsqu’une banque obtient un refinancement, elle reçoit des réserves en contrepartie d’un engagement et, généralement, de garanties éligibles. Les facilités permanentes encadrent les conditions auxquelles les établissements peuvent placer des liquidités auprès de la banque centrale ou en obtenir à très court terme. Les réserves obligatoires, lorsqu’elles existent, imposent aux établissements concernés de maintenir un certain niveau de réserves selon les règles applicables.',
          'Les achats d’actifs constituent un instrument non conventionnel utilisé notamment lorsque les taux directeurs sont proches de leur borne effective ou lorsque le fonctionnement des marchés est perturbé. En achetant des titres, la banque centrale peut réduire certains rendements, soutenir la liquidité des marchés et assouplir les conditions financières. L’assouplissement quantitatif, ou quantitative easing, désigne généralement des programmes d’achats d’actifs à grande échelle. Leur effet dépend de la nature des titres achetés, de la durée du programme, des anticipations des marchés et de la situation économique. Ils ne consistent pas à distribuer directement une somme identique à chaque ménage.',
          'La communication prospective, appelée forward guidance, consiste à expliquer les intentions ou les conditions susceptibles d’orienter les décisions futures. Elle agit sur les anticipations et peut influencer les taux à moyen et long terme avant même qu’un changement de taux directeur soit décidé. Cette communication n’est pas une promesse immuable : elle dépend du mandat de la banque centrale et des informations économiques disponibles. Les autorités monétaires doivent donc préciser les hypothèses et les risques qui encadrent leurs annonces.',
          'Le mécanisme de transmission décrit le passage d’une décision monétaire aux variables économiques. Une hausse des taux peut augmenter le coût des emprunts, encourager l’épargne rémunérée, freiner certains achats financés à crédit et réduire l’investissement. Une demande moins dynamique peut ensuite atténuer les tensions sur les prix. Une baisse des taux peut produire des effets inverses, sous réserve que les banques prêtent, que les emprunteurs souhaitent s’endetter et que les perspectives économiques soutiennent les dépenses. Les canaux des taux, du crédit, des prix d’actifs, du taux de change et des anticipations interagissent entre eux.',
          'La transmission est lente, variable et incertaine. Les contrats de crédit n’ont pas tous la même durée ni le même mode de révision ; les ménages et les entreprises réagissent différemment ; les banques peuvent durcir leurs critères de prêt en période de risque. Les chocs d’offre, les tensions géopolitiques ou les ruptures d’approvisionnement peuvent également modifier l’inflation indépendamment de la demande intérieure. La banque centrale ne contrôle donc pas mécaniquement chaque prix : elle agit sur les conditions monétaires et financières afin d’influencer l’évolution générale de l’économie.'
        ],
        example: {
          statement: 'Une banque commerciale accorde un prêt à taux variable dont le taux suit un indice de marché. Si les conditions monétaires provoquent une hausse de cet indice, quel effet peut apparaître ?',
          calculation: 'Si l’indice de référence augmente et que le contrat prévoit sa répercussion, le taux appliqué au prêt peut augmenter à la date de révision. Le montant exact dépend du contrat, de sa marge et de la fréquence de révision.',
          answer: 'Le coût du crédit peut augmenter pour l’emprunteur. Cette hausse peut réduire sa capacité de dépense et contribuer au ralentissement de la demande. L’effet n’est ni immédiat pour tous les prêts ni identique pour tous les agents.'
        },
        exercise: {
          question: 'Pourquoi une hausse des taux directeurs peut-elle contribuer à ralentir l’inflation ?',
          answer: 'Elle peut renchérir le crédit, modérer la consommation et l’investissement financés par emprunt, ralentir la demande globale et réduire progressivement les pressions sur les prix. La transmission dépend toutefois du contexte économique et prend du temps.'
        },
        exercises: [
          {
            question: 'Que désigne le refinancement des banques par la banque centrale ?',
            answer: 'Une opération par laquelle la banque centrale fournit des liquidités ou des réserves à des établissements éligibles, selon des conditions et contre des garanties définies par son cadre opérationnel.'
          },
          {
            question: 'Que signifie quantitative easing ?',
            answer: 'Il s’agit de programmes d’achats d’actifs à grande échelle destinés à assouplir les conditions financières et à soutenir la transmission de la politique monétaire.'
          },
          {
            question: 'Pourquoi les effets d’une décision monétaire ne sont-ils pas instantanés ?',
            answer: 'Parce que les taux des contrats, les décisions de financement, les dépenses, les salaires et les prix s’ajustent progressivement. Les délais varient selon les agents et les conditions économiques.'
          }
        ],
        sources: [
          { title: 'BCE — Transmission mechanism of monetary policy', url: 'https://www.ecb.europa.eu/mopo/intro/transmission/html/index.en.html' },
          { title: 'BCE — Introduction à la politique monétaire', url: 'https://www.ecb.europa.eu/mopo/intro/html/index.en.html' },
          { title: 'Réserve fédérale — The Fed Explained: Monetary Policy', url: 'https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm' },
          { title: 'Banque de France — Les programmes d’achats de titres par les banques centrales', url: 'https://www.banque-france.fr/fr/publications-et-statistiques/publications/les-programmes-dachats-de-titres-par-les-banques-centrales-par-quels-mecanismes-la-monnaie-est-elle' }
        ]
      }
    },
    {
      id: 'monnaie-centrale-et-paiements',
      title: 'La monnaie de banque centrale, le bilan et les systèmes de paiement',
      field: 'Monnaie et finance · Base monétaire, réserves bancaires et règlement interbancaire',
      summary: 'Distinguer monnaie centrale et monnaie commerciale, lire les grandes catégories du bilan d’une banque centrale et comprendre le rôle des réserves dans les paiements.',
      lesson: {
        sections: [
          'La monnaie de banque centrale existe principalement sous deux formes : les billets et les réserves détenues sur les comptes des établissements éligibles auprès de la banque centrale. Les billets sont accessibles au public et utilisés pour les paiements en espèces. Les réserves sont des avoirs en monnaie centrale détenus par les banques et certains autres établissements autorisés. Elles servent notamment au règlement des obligations entre banques et à la gestion de leurs besoins de liquidité. La composition exacte des comptes accessibles dépend du cadre institutionnel concerné.',
          'La monnaie commerciale correspond principalement aux dépôts inscrits sur les comptes des clients auprès des banques commerciales. Lorsqu’une banque accorde un crédit, elle inscrit généralement simultanément une créance à son actif et un dépôt au passif : le crédit crée ainsi un dépôt. Cette création est encadrée par la réglementation, les exigences de fonds propres et de liquidité, le risque de crédit, la rentabilité et la demande de financement. Elle ne signifie pas que les banques peuvent prêter sans limite. Les paiements entre clients de banques différentes entraînent ensuite des règlements entre établissements, généralement en monnaie de banque centrale.',
          'Le bilan d’une banque centrale présente à l’actif des éléments tels que les réserves de change, les prêts aux établissements financiers et les titres détenus. Au passif figurent notamment les billets en circulation et les réserves des banques. Les postes précis dépendent de l’institution et de ses opérations. Lorsqu’une banque centrale prête à une banque commerciale, elle inscrit une créance à son actif et crédite généralement le compte de réserves de cette banque au passif. Lorsqu’elle achète un titre, elle inscrit le titre à son actif et règle l’opération en monnaie centrale selon le circuit de paiement utilisé.',
          'Les systèmes de paiement permettent de transférer de la valeur entre particuliers, entreprises, banques et administrations. Les infrastructures de règlement assurent le transfert final des fonds entre participants. Pour les paiements interbancaires importants, le règlement en monnaie de banque centrale réduit le risque que les participants dépendent uniquement de créances privées les uns envers les autres. Les banques centrales peuvent exploiter certaines infrastructures, les surveiller ou contribuer à leur évolution. Le secteur privé joue également un rôle essentiel dans la fourniture des instruments de paiement et l’innovation des services.',
          'La convertibilité à parité signifie que les différentes formes de monnaie libellées dans une même unité monétaire sont normalement échangeables à leur valeur nominale : un dépôt bancaire de 1 euro est conçu pour être convertible en 1 euro de monnaie centrale, sous réserve du fonctionnement normal du système et des règles applicables. La monnaie centrale contribue à ancrer cette confiance. Elle ne supprime toutefois pas le risque de défaillance d’une banque commerciale : la protection des déposants, la réglementation prudentielle et les dispositifs de résolution complètent l’architecture monétaire.',
          'La taille du bilan d’une banque centrale peut évoluer fortement selon les besoins de liquidité, les achats de titres, les prêts et les autres opérations. Une hausse du bilan n’est pas un objectif autonome : elle résulte d’opérations conduites pour atteindre des objectifs définis. Les achats d’actifs peuvent accroître les réserves bancaires ; leur remboursement ou la réduction des portefeuilles peut contribuer à les diminuer. Il faut donc distinguer la monnaie centrale créée lors d’une opération et la monnaie commerciale détenue par les ménages et les entreprises : les deux agrégats sont liés, mais ne sont pas identiques.'
        ],
        example: {
          statement: 'Une banque A doit transférer 500 euros à une banque B pour régler un paiement entre leurs clients. Quel rôle peuvent jouer les réserves ?',
          calculation: 'Dans un règlement interbancaire utilisant les comptes de réserves, le compte de réserves de la banque A est débité de 500 euros et celui de la banque B est crédité de 500 euros. Le transfert de réserves règle l’obligation entre les deux banques.',
          answer: 'Les réserves servent au règlement interbancaire en monnaie de banque centrale. Le client voit le mouvement sur son compte commercial, tandis que les banques règlent entre elles au moyen de leurs comptes auprès de la banque centrale.'
        },
        exercise: {
          question: 'Quelle différence fondamentale existe entre les réserves bancaires et les dépôts des ménages ?',
          answer: 'Les réserves sont de la monnaie de banque centrale détenue par les établissements autorisés sur leurs comptes auprès de la banque centrale. Les dépôts des ménages sont des engagements des banques commerciales envers leurs clients et constituent de la monnaie commerciale.'
        },
        exercises: [
          {
            question: 'Quelles sont les deux grandes formes de monnaie de banque centrale ?',
            answer: 'Les billets en circulation et les réserves détenues par les banques et autres institutions autorisées auprès de la banque centrale.'
          },
          {
            question: 'Lorsqu’une banque accorde un crédit, quel dépôt est généralement créé ?',
            answer: 'Un dépôt est inscrit sur le compte de l’emprunteur. La banque inscrit simultanément une créance de prêt à son actif et un dépôt à son passif.'
          },
          {
            question: 'Pourquoi le règlement en monnaie centrale est-il important pour les paiements interbancaires ?',
            answer: 'Il fournit un actif de règlement sûr et liquide qui permet aux établissements de régler leurs obligations dans la monnaie émise par la banque centrale.'
          }
        ],
        sources: [
          { title: 'Banque de France — La monnaie et ses contreparties : instruments et reflets de la politique monétaire', url: 'https://www.banque-france.fr/fr/publications-et-statistiques/publications/la-monnaie-et-ses-contreparties-instruments-et-reflets-de-la-politique-monetaire' },
          { title: 'Banque de France — Les programmes d’achats de titres par les banques centrales', url: 'https://www.banque-france.fr/fr/publications-et-statistiques/publications/les-programmes-dachats-de-titres-par-les-banques-centrales-par-quels-mecanismes-la-monnaie-est-elle' },
          { title: 'BIS — The roles of central banks and central bank money in the evolving payment system', url: 'https://www.bis.org/publications/roles-central-banks-and-central-bank-money-evolving-payment-system.htm' },
          { title: 'Réserve fédérale — Monetary Policy: What Are Its Goals? How Does It Work?', url: 'https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm' }
        ]
      }
    },
    {
      id: 'stabilite-financiere-et-crises',
      title: 'La stabilité financière, la supervision et le rôle de prêteur en dernier ressort',
      field: 'Stabilité financière · Risques systémiques, liquidité et gestion des crises',
      summary: 'Identifier les risques qui menacent le système financier, distinguer illiquidité et insolvabilité et expliquer les interventions possibles d’une banque centrale en période de tension.',
      lesson: {
        sections: [
          'La stabilité financière désigne une situation dans laquelle le système financier peut continuer à fournir ses services essentiels — paiements, financement, épargne et gestion des risques — même lorsqu’il subit des perturbations. Un système financier est composé d’établissements, de marchés, d’infrastructures et de liens entre acteurs. Une difficulté locale peut devenir systémique si elle se propage par les expositions communes, les retraits de financement, les ventes forcées d’actifs ou la perte de confiance. La stabilité financière ne signifie donc pas l’absence de faillites ou de fluctuations, mais la capacité du système à absorber les chocs sans interrompre durablement ses fonctions essentielles.',
          'Il faut distinguer le risque de liquidité du risque d’insolvabilité. Un établissement illiquide peut manquer temporairement de moyens de paiement immédiatement disponibles alors que la valeur de ses actifs demeure supérieure à celle de ses engagements. Un établissement insolvable présente, au contraire, une insuffisance de valeur de ses actifs par rapport à ses dettes, selon les règles comptables et prudentielles applicables. Cette distinction est importante : un prêt de liquidité peut aider un établissement solvable confronté à une tension temporaire, mais il ne répare pas automatiquement des pertes structurelles qui rendent l’établissement insolvable.',
          'La fonction de prêteur en dernier ressort permet, dans certains cadres, à une banque centrale de fournir des liquidités à des établissements confrontés à des tensions de financement. Les modalités varient selon le droit et les règles de chaque banque centrale. Les interventions peuvent être soumises à des conditions, à des garanties et à une évaluation de l’éligibilité de l’emprunteur. L’objectif est d’éviter qu’un manque temporaire de liquidité ne provoque des perturbations plus larges. Cette fonction ne constitue pas une garantie générale de sauvetage des actionnaires, des dirigeants ou de tout établissement en difficulté.',
          'La supervision microprudentielle porte principalement sur la solidité de chaque établissement : qualité des fonds propres, liquidité, gouvernance, gestion des risques et respect des exigences réglementaires. La politique macroprudentielle examine les risques qui touchent l’ensemble du système, par exemple une croissance excessive du crédit, une concentration d’expositions ou des interconnexions susceptibles d’amplifier un choc. Selon les pays, ces fonctions sont réparties entre banque centrale, superviseur spécialisé, autorités de marché et autres organismes publics. Dans la zone euro, la BCE exerce des missions de supervision prudentielle dans le cadre du mécanisme de surveillance unique, avec les autorités nationales compétentes.',
          'Les banques centrales participent aussi à la surveillance des infrastructures de marché et des systèmes de paiement, car une interruption de règlement peut transmettre rapidement des tensions au reste du système financier. Elles analysent les risques opérationnels, les risques de liquidité, les dépendances entre participants et la résilience des infrastructures. La coopération entre autorités est indispensable, car les grands groupes bancaires et les marchés financiers sont souvent transfrontaliers. La gestion d’une crise peut mobiliser plusieurs institutions : banque centrale, superviseur, autorité de résolution, ministère des finances et dispositifs de garantie des dépôts.',
          'Une intervention de crise doit arbitrer entre la prévention de la contagion et le risque d’aléa moral. Si les acteurs pensent qu’ils seront systématiquement secourus, ils peuvent être incités à prendre davantage de risques. C’est pourquoi les cadres de résolution cherchent à organiser le traitement des établissements défaillants tout en préservant les fonctions critiques et en limitant le recours aux ressources publiques. La banque centrale apporte une expertise monétaire et de liquidité, mais elle n’est pas nécessairement l’autorité chargée de décider de la résolution ou de protéger les dépôts : ces compétences dépendent de l’organisation institutionnelle nationale.'
        ],
        example: {
          statement: 'Une banque dispose d’actifs dont la valeur dépasse ses dettes, mais elle ne peut pas obtenir assez rapidement les liquidités nécessaires pour régler ses paiements du jour. Quel problème rencontre-t-elle ?',
          calculation: 'La situation décrite correspond à une tension de liquidité : l’établissement manque de moyens de paiement immédiatement disponibles. Elle ne prouve pas, à elle seule, une insolvabilité. Il faut examiner séparément la valeur des actifs, les engagements et les échéances.',
          answer: 'Il s’agit d’un problème potentiel d’illiquidité. Selon le cadre applicable et l’évaluation de l’établissement, un soutien temporaire de liquidité peut être envisagé. Il ne serait pas justifié de conclure automatiquement que la banque est solvable sans analyse complète de son bilan.'
        },
        exercise: {
          question: 'Pourquoi un prêt de liquidité ne suffit-il pas toujours à sauver un établissement en difficulté ?',
          answer: 'Parce qu’un prêt apporte des liquidités mais ne compense pas nécessairement des pertes qui rendent les actifs insuffisants pour couvrir les engagements. Une insolvabilité exige un traitement distinct, notamment au moyen des procédures de supervision ou de résolution prévues par le droit applicable.'
        },
        exercises: [
          {
            question: 'Qu’est-ce que le risque systémique ?',
            answer: 'C’est le risque qu’une perturbation se propage dans le système financier et compromette la fourniture de fonctions essentielles comme les paiements et le financement.'
          },
          {
            question: 'Quelle est la différence entre supervision microprudentielle et politique macroprudentielle ?',
            answer: 'La supervision microprudentielle examine la solidité d’un établissement individuel. La politique macroprudentielle vise les risques qui menacent le système financier dans son ensemble.'
          },
          {
            question: 'Pourquoi le prêteur en dernier ressort peut-il être soumis à des garanties et à des conditions ?',
            answer: 'Pour encadrer le risque pris par la banque centrale, limiter l’aléa moral et s’assurer que l’aide répond aux règles applicables, notamment en matière d’éligibilité et de garanties.'
          }
        ],
        sources: [
          { title: 'BIS — Central banking: embracing change', url: 'https://www.bis.org/speeches/20240522-central-banking-embracing-change.htm' },
          { title: 'BCE — Banking supervision', url: 'https://www.bankingsupervision.europa.eu/home/html/index.en.html' },
          { title: 'BCE — Transmission channels of monetary, macro- and microprudential policies', url: 'https://www.ecb.europa.eu/pub/pdf/scpops/ecb.op191.en.pdf' },
          { title: 'BIS — Committee on the Global Financial System', url: 'https://www.bis.org/cgfs/index.htm' }
        ]
      }
    },
    {
      id: 'independance-gouvernance-et-cooperation',
      title: 'L’indépendance, la gouvernance, la responsabilité et la coopération internationale',
      field: 'Institutions monétaires · Cadre juridique, transparence et coordination internationale',
      summary: 'Étudier les fondements et les limites de l’indépendance des banques centrales, les mécanismes de responsabilité, la prise de décision et la coopération entre autorités monétaires.',
      lesson: {
        sections: [
          'L’indépendance d’une banque centrale désigne la protection institutionnelle qui lui permet d’exercer les compétences confiées par la loi sans recevoir d’instructions politiques dans les domaines où cette indépendance est prévue. Elle vise notamment à éviter que les décisions monétaires soient dominées par des objectifs politiques de très court terme incompatibles avec la stabilité des prix à moyen terme. Cette indépendance n’est ni identique partout ni illimitée : son contenu dépend des textes juridiques, du mandat, des procédures de nomination et des règles applicables. Elle ne signifie pas que la banque centrale choisit librement ses objectifs en dehors du cadre démocratiquement établi.',
          'Dans l’Union européenne, l’article 130 du Traité sur le fonctionnement de l’Union européenne protège l’indépendance de la BCE et des banques centrales nationales lorsqu’elles accomplissent les missions relevant du Système européen de banques centrales. Elles ne doivent ni solliciter ni recevoir d’instructions des institutions de l’Union, des gouvernements des États membres ou d’autres organismes dans l’exercice de ces missions. Le traité impose également aux institutions et gouvernements de respecter ce principe. Ce cadre juridique est spécifique à l’Union européenne et ne doit pas être présenté comme une règle universelle applicable à toutes les banques centrales.',
          'L’indépendance doit avoir pour contrepartie la responsabilité institutionnelle, souvent désignée par le terme anglais accountability. Une banque centrale doit expliquer ses décisions, publier des analyses, rendre compte de ses résultats et permettre aux institutions compétentes ainsi qu’au public d’évaluer son action. Dans le cas de la BCE, le Parlement européen constitue un interlocuteur central de cette responsabilité : la BCE présente notamment un rapport annuel et participe à des auditions régulières. Rendre compte ne signifie pas que les élus fixent directement chaque taux directeur ; cela signifie que l’institution doit justifier la manière dont elle exerce le mandat qui lui a été confié.',
          'La gouvernance organise la répartition des compétences entre organes de décision, organes exécutifs et services opérationnels. Dans l’Eurosystème, le Conseil des gouverneurs est l’organe principal de décision de politique monétaire pour la zone euro. Il réunit les membres du directoire de la BCE et les gouverneurs des banques centrales nationales des pays de la zone euro. Les décisions s’appuient sur l’analyse économique, monétaire et financière. Dans d’autres pays, les structures peuvent être différentes : certains systèmes reposent sur un comité de politique monétaire, d’autres sur un conseil ou un dispositif institutionnel propre.',
          'La transparence renforce la compréhension et l’évaluation des décisions. Elle passe par la publication des objectifs, des analyses, des décisions, des comptes rendus ou des rapports, selon les règles de l’institution. Elle doit néanmoins être conciliée avec des besoins légitimes de confidentialité, par exemple lorsque la divulgation immédiate d’informations individuelles pourrait fragiliser un établissement ou un marché. Le Code de transparence des banques centrales du Fonds monétaire international propose un cadre de référence structuré autour de la gouvernance, des politiques, des opérations, de leurs résultats et des relations officielles avec les autorités.',
          'Les banques centrales coopèrent à l’échelle internationale parce que les marchés financiers, les flux de capitaux, les systèmes de paiement et les chocs économiques traversent les frontières. La Banque des règlements internationaux (BRI/BIS) facilite les échanges entre banques centrales et accueille plusieurs comités spécialisés. Le Fonds monétaire international contribue à la surveillance macroéconomique et à l’assistance aux pays membres. Cette coopération ne crée pas une banque centrale mondiale : les décisions de politique monétaire restent prises par les institutions compétentes dans leur juridiction, conformément à leurs mandats respectifs.'
        ],
        example: {
          statement: 'Pourquoi l’indépendance de la banque centrale et sa responsabilité démocratique ne sont-elles pas contradictoires ?',
          calculation: 'L’indépendance concerne la liberté d’exercer les instruments et les compétences prévus par le mandat sans instruction politique dans les domaines protégés. La responsabilité concerne l’obligation d’expliquer et de justifier l’usage de ces compétences auprès des institutions prévues par le droit.',
          answer: 'Les deux principes sont complémentaires. L’indépendance protège la conduite de la politique monétaire contre les pressions de court terme, tandis que la responsabilité impose transparence, explication et contrôle institutionnel du respect du mandat.'
        },
        exercise: {
          question: 'Pourquoi l’indépendance d’une banque centrale ne signifie-t-elle pas qu’elle échappe à tout contrôle ?',
          answer: 'Parce qu’elle reste soumise à son mandat légal, au droit applicable et à des obligations de transparence et de responsabilité. L’indépendance protège certaines décisions contre les instructions politiques ; elle ne supprime pas l’obligation de rendre compte.'
        },
        exercises: [
          {
            question: 'Quel article du traité européen protège l’indépendance de la BCE dans l’exercice de ses missions ?',
            answer: 'L’article 130 du Traité sur le fonctionnement de l’Union européenne.'
          },
          {
            question: 'Quelle institution représente les citoyens de l’Union européenne dans le cadre principal de responsabilité de la BCE ?',
            answer: 'Le Parlement européen, auquel la BCE rend notamment compte de ses activités et de sa politique monétaire.'
          },
          {
            question: 'La Banque des règlements internationaux est-elle une banque centrale mondiale qui fixe les taux de tous les pays ?',
            answer: 'Non. La BRI facilite la coopération entre banques centrales et accueille des travaux internationaux, mais elle ne fixe pas les taux directeurs des pays.'
          }
        ],
        sources: [
          { title: 'BCE — Independence', url: 'https://www.ecb.europa.eu/ecb/our-values/independence/html/index.en.html' },
          { title: 'BCE — Accountability', url: 'https://www.ecb.europa.eu/ecb/our-values/accountability/html/index.en.html' },
          { title: 'FMI — Central Bank Transparency Code: Principles', url: 'https://www.imf.org/en/data/cbt/principles' },
          { title: 'FMI — Central Bank Transparency Code', url: 'https://www.imf.org/en/data/cbt' },
          { title: 'BRI — About the BIS', url: 'https://www.bis.org/about/index.htm' }
        ]
      }
    }
  ]
},


{
  id: 'energie-matieres-premieres',
  title: 'Énergie et matières premières : ressources, marchés, sécurité et transitions',
  note: 'Six chapitres approfondis pour comprendre les systèmes énergétiques, les combustibles fossiles, l’électricité bas-carbone, les minerais stratégiques, la formation des prix et les enjeux géopolitiques et climatiques. Les données chiffrées sont datées et les scénarios sont des trajectoires conditionnelles, non des prédictions certaines.',
  chapters: [
    {
      id: 'fondamentaux-systemes-energetiques',
      title: 'Les fondamentaux des systèmes énergétiques et des matières premières',
      field: 'Économie de l’énergie · Ressources naturelles · Chaînes de valeur',
      summary: 'Distinguer énergie primaire, énergie secondaire et énergie finale, comprendre les conversions physiques et identifier les contraintes économiques qui relient ressources, infrastructures et usages.',
      lesson: {
        sections: [
          'L’énergie est une capacité à produire un changement ou un travail. Dans l’analyse économique, il faut distinguer l’énergie primaire, présente dans une ressource avant transformation, l’énergie secondaire, obtenue après conversion, et l’énergie finale livrée à l’utilisateur. Le pétrole brut est une énergie primaire ; l’essence issue du raffinage est un produit énergétique transformé ; l’électricité produite dans une centrale est une énergie secondaire. Cette distinction évite de comparer directement des grandeurs qui ne se situent pas au même stade de la chaîne énergétique. Les sources peuvent être renouvelables ou non renouvelables, mais cette classification ne dit pas à elle seule si une énergie est pilotable, stockable, transportable ou disponible en permanence.',
          'Un système énergétique comprend l’extraction ou la captation des ressources, leur transformation, le transport, le stockage, la distribution et les équipements qui fournissent les services recherchés : chaleur, mobilité, éclairage ou force motrice. Chaque étape entraîne des coûts, des pertes et des besoins d’investissement. Une ressource abondante dans le sous-sol ne devient pas automatiquement une énergie disponible : il faut des capitaux, des compétences, des infrastructures, des autorisations, de l’eau et des débouchés. De même, une capacité de production électrique installée ne garantit pas que toute cette capacité produira à chaque instant. La disponibilité dépend notamment de la technologie, de la maintenance, de la météo, de l’approvisionnement en combustible et de l’état du réseau.',
          'Les matières premières sont des intrants physiques de l’économie. Certaines sont énergétiques, comme le charbon, le pétrole et le gaz naturel ; d’autres sont minérales ou agricoles, comme le cuivre, le lithium, le nickel, le phosphate ou les céréales. Il faut distinguer ressources géologiques, ressources identifiées et réserves économiquement exploitables selon des hypothèses techniques, économiques et réglementaires. Les réserves ne représentent donc pas une quantité fixe et éternelle : elles peuvent évoluer avec les prix, les connaissances, les technologies et les règles environnementales. Les statistiques de production, de réserves et de commerce doivent toujours être lues avec leur définition, leur unité et leur année de référence.',
          'L’intensité énergétique mesure la quantité d’énergie utilisée par unité d’activité économique, souvent par unité de PIB. Elle peut diminuer grâce à l’efficacité technique, à la transformation de la structure productive ou à des changements de comportement. Une baisse de l’intensité énergétique ne signifie pas nécessairement une baisse de la consommation totale : si la production et les usages augmentent plus vite que l’efficacité, la demande totale peut continuer à croître. L’analyse doit donc séparer efficacité énergétique, sobriété, électrification et croissance de l’activité. Ces notions sont complémentaires, mais elles ne sont pas interchangeables.'
        ],
        example: {
          statement: 'Une chaîne énergétique commence avec 100 unités d’énergie primaire. Après transformation et transport, 70 unités sont livrées à l’utilisateur. Quelle est la quantité d’énergie finale et quelle est la perte totale en unités ?',
          calculation: 'Énergie finale = 70 unités. Perte = énergie primaire - énergie finale = 100 - 70 = 30 unités. Rendement global simplifié = 70 / 100 = 0,70, soit 70 %.',
          answer: 'L’utilisateur reçoit 70 unités d’énergie finale. La chaîne a perdu 30 unités sous forme de pertes de conversion, de transport ou de distribution. Cet exemple simplifie volontairement le bilan : dans les statistiques réelles, les conventions de comptabilisation varient selon les filières.'
        },
        exercise: {
          question: 'Pourquoi faut-il distinguer énergie primaire, énergie secondaire et énergie finale lorsqu’on compare deux systèmes énergétiques ?',
          answer: 'Parce que ces grandeurs décrivent des étapes différentes de la chaîne énergétique. Les comparer sans tenir compte des conversions, des pertes et des conventions statistiques peut conduire à des conclusions erronées.'
        },
        exercises: [
          {
            question: 'Le pétrole brut est-il une énergie primaire ou secondaire ?',
            answer: 'C’est une énergie primaire, car il est extrait avant transformation.'
          },
          {
            question: 'L’électricité produite dans une centrale est-elle une énergie primaire ?',
            answer: 'Non. Elle est généralement considérée comme une énergie secondaire, produite par conversion d’une source primaire.'
          },
          {
            question: 'Une hausse des réserves déclarées prouve-t-elle nécessairement qu’un nouveau gisement a été découvert ?',
            answer: 'Non. Les réserves peuvent aussi augmenter à la suite d’une réévaluation économique, technique ou géologique de ressources déjà connues.'
          }
        ],
        sources: [
          {
            title: 'U.S. Energy Information Administration — What is energy? Sources of energy',
            url: 'https://www.eia.gov/energyexplained/what-is-energy/sources-of-energy.php'
          },
          {
            title: 'U.S. Energy Information Administration — Energy Explained',
            url: 'https://www.eia.gov/energyexplained/'
          },
          {
            title: 'U.S. Geological Survey — Mineral Commodity Summaries 2026',
            url: 'https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries'
          },
          {
            title: 'International Energy Agency — World Energy Outlook 2025',
            url: 'https://www.iea.org/reports/world-energy-outlook-2025'
          }
        ]
      }
    },
    {
      id: 'combustibles-fossiles-marches',
      title: 'Pétrole, gaz naturel et charbon : ressources, industrie et marchés',
      field: 'Hydrocarbures · Charbon · Extraction, transport et raffinage',
      summary: 'Étudier la chaîne industrielle des combustibles fossiles, les usages du pétrole, du gaz et du charbon, ainsi que les déterminants économiques de leur offre et de leur demande.',
      lesson: {
        sections: [
          'Le pétrole, le gaz naturel et le charbon sont des combustibles fossiles formés à partir de matière organique transformée sur de très longues périodes géologiques. Le pétrole est extrait sous forme brute puis généralement transporté vers des raffineries, où il est séparé et transformé en produits tels que carburants, combustibles et matières premières pétrochimiques. Le gaz naturel est composé principalement de méthane, mais sa composition varie selon les gisements. Il peut être transporté par gazoduc ou, après liquéfaction, sous forme de gaz naturel liquéfié (GNL), puis regazéifié à destination. Le charbon est extrait en mines souterraines ou à ciel ouvert et sert notamment à la production d’électricité, à la sidérurgie et à certains usages industriels.',
          'La chaîne pétrolière comprend l’amont, qui regroupe l’exploration et la production, le transport et le stockage intermédiaires, puis l’aval, qui comprend le raffinage, la distribution et la commercialisation. Les coûts et les risques diffèrent selon les gisements : profondeur, géologie, qualité du brut, distance aux marchés, infrastructures et contraintes environnementales. Le prix de marché ne correspond donc pas au coût de production de chaque producteur. Un producteur à bas coût peut rester rentable à un prix auquel un projet plus coûteux ne couvre plus ses dépenses. Les décisions d’investissement sont également sensibles au délai entre la découverte, le développement du champ et le début de la production.',
          'Les marchés du pétrole sont internationaux et les prix de référence, comme le Brent, servent de repères pour de nombreuses transactions, avec des ajustements liés à la qualité et au lieu de livraison. L’offre dépend de la production des pays et entreprises, des capacités disponibles, des investissements et des décisions de certains producteurs coordonnés. La demande dépend notamment de l’activité économique, des transports, de la pétrochimie, de l’efficacité énergétique et des substitutions possibles. Les stocks amortissent temporairement les déséquilibres entre offre et demande, mais leur niveau et leur disponibilité sont eux-mêmes des facteurs de marché. Un événement géopolitique peut provoquer une hausse des prix s’il menace effectivement des volumes, des routes maritimes ou des infrastructures ; l’effet dépend de la durée et de l’ampleur du risque.',
          'Le marché du gaz est plus régionalisé que celui du pétrole, même si le GNL a renforcé les échanges intercontinentaux. Les prix peuvent diverger fortement entre régions en raison des capacités de liquéfaction, des gazoducs, des terminaux, des contrats et des contraintes de transport. Le charbon est également marqué par les coûts logistiques et la qualité du produit, notamment son pouvoir calorifique et sa teneur en soufre. Pour les trois combustibles, les prix observés ne résument pas les coûts sociaux et environnementaux : les émissions de gaz à effet de serre, la pollution atmosphérique, les impacts locaux et les coûts de remise en état peuvent ne pas être intégralement reflétés dans le prix payé par l’acheteur.'
        ],
        example: {
          statement: 'Une raffinerie achète 1 000 barils de pétrole brut à 75 unités monétaires par baril. Le coût d’achat du brut est-il égal à 75 000 unités monétaires, hors autres coûts ?',
          calculation: 'Coût du brut = quantité × prix unitaire = 1 000 × 75 = 75 000 unités monétaires.',
          answer: 'Oui. Le coût d’achat du pétrole brut est de 75 000 unités monétaires. Ce montant ne représente pas le coût complet des produits raffinés : il faut encore intégrer l’énergie consommée, l’exploitation, la maintenance, le transport, les pertes, les coûts financiers et les autres charges.'
        },
        exercise: {
          question: 'Pourquoi une hausse du prix international du pétrole ne se traduit-elle pas toujours par une hausse identique et immédiate du prix payé par tous les consommateurs ?',
          answer: 'Les prix finaux dépendent aussi des taxes, des marges de raffinage et de distribution, des coûts logistiques, des taux de change, des contrats et du délai de transmission des variations de marché.'
        },
        exercises: [
          {
            question: 'Quelle est la fonction principale d’une raffinerie ?',
            answer: 'Transformer le pétrole brut en produits pétroliers utilisables et en matières premières pour la pétrochimie.'
          },
          {
            question: 'Quelle différence logistique distingue principalement le gaz transporté par gazoduc du GNL ?',
            answer: 'Le GNL est refroidi pour être liquéfié, transporté par navire dans des méthaniers, puis regazéifié à destination ; le gaz par gazoduc circule sous forme gazeuse dans une conduite.'
          },
          {
            question: 'Pourquoi le coût de production d’un gisement n’est-il pas égal au prix mondial du pétrole ?',
            answer: 'Le prix de marché résulte de l’équilibre global de l’offre et de la demande, tandis que le coût de production varie d’un gisement à l’autre.'
          }
        ],
        sources: [
          {
            title: 'U.S. Energy Information Administration — Oil and petroleum products explained',
            url: 'https://www.eia.gov/energyexplained/oil-and-petroleum-products/index.php'
          },
          {
            title: 'U.S. Energy Information Administration — Natural gas explained',
            url: 'https://www.eia.gov/energyexplained/natural-gas/index.php'
          },
          {
            title: 'U.S. Energy Information Administration — Coal explained',
            url: 'https://www.eia.gov/energyexplained/coal/index.php'
          },
          {
            title: 'International Energy Agency — World Energy Outlook 2025, Executive Summary',
            url: 'https://www.iea.org/reports/world-energy-outlook-2025/executive-summary'
          },
          {
            title: 'World Bank — Commodity Markets Outlook, October 2025',
            url: 'https://thedocs.worldbank.org/en/doc/55ed8b04df8228fea1607a97b5561f73-0050012025/original/CMO-October-2025.pdf'
          }
        ]
      }
    },
    {
      id: 'electricite-renouvelables-nucleaire',
      title: 'Électricité et production bas-carbone : renouvelables, nucléaire et réseaux',
      field: 'Électricité · Solaire, éolien, hydraulique, nucléaire · Réseaux et stockage',
      summary: 'Comprendre la production électrique, les coûts comparés, l’intégration des énergies variables, le rôle des réseaux et les conditions physiques et économiques de la décarbonation.',
      lesson: {
        sections: [
          'L’électricité est un vecteur énergétique : elle doit être produite à partir d’une source, transportée par un réseau et utilisée par des équipements. À la différence de nombreux combustibles, elle est difficile à stocker directement à grande échelle ; son équilibre doit donc être assuré en permanence entre production, consommation, échanges et stockage. Les centrales thermiques et nucléaires peuvent, sous certaines conditions techniques, ajuster leur production, tandis que le solaire photovoltaïque dépend de l’ensoleillement et l’éolien de la disponibilité du vent. L’hydraulique avec réservoir peut apporter de la flexibilité, mais dépend de la géographie, des apports en eau et des contraintes d’usage. Il faut ainsi distinguer puissance installée, production réelle, facteur de charge et capacité disponible lors des périodes de pointe.',
          'Le coût actualisé de l’électricité (LCOE) rapporte les coûts actualisés d’un moyen de production à l’électricité qu’il produit sur sa durée de vie, selon des hypothèses de financement, de fonctionnement et de production. C’est un indicateur utile pour comparer des projets, mais il ne représente pas à lui seul le coût complet d’un système électrique. Il ne mesure pas automatiquement la valeur de l’électricité selon l’heure, les coûts de réseau, les besoins de stockage, les moyens de secours ou les effets sur la stabilité du système. L’IRENA indique que, dans son analyse mondiale des projets mis en service en 2024, 91 % des nouvelles capacités renouvelables à grande échelle avaient un coût actualisé inférieur à celui de l’option fossile neuve la moins coûteuse dans leur marché. Ce résultat porte sur les projets et la méthode étudiés ; il ne signifie pas que toute installation renouvelable est moins chère dans chaque pays et à chaque heure.',
          'L’intégration de parts croissantes de solaire et d’éolien nécessite des réseaux suffisamment développés, des interconnexions, des prévisions météorologiques, une gestion de la demande et différentes formes de flexibilité. Les batteries peuvent déplacer une partie de l’électricité dans le temps, surtout sur des durées courtes ; les stations de transfert d’énergie par pompage, les réservoirs hydrauliques, l’hydrogène et d’autres solutions peuvent répondre à d’autres besoins, avec des coûts et des rendements différents. Le réseau doit également gérer les congestions, les pertes, les contraintes de tension et de fréquence et la résilience face aux événements météorologiques ou techniques. Une production bon marché à la centrale ne garantit donc pas, à elle seule, un approvisionnement fiable et peu coûteux pour tous les consommateurs.',
          'Le nucléaire produit de l’électricité à partir de la chaleur issue de réactions de fission contrôlées. Il fournit une production pilotable à faibles émissions directes de CO2 pendant l’exploitation, mais ses projets nécessitent des capitaux importants, des délais de construction, une réglementation exigeante, une gestion du combustible et des déchets ainsi qu’une planification du démantèlement. L’hydraulique, la géothermie et la bioénergie ont des profils spécifiques, liés aux ressources locales et aux impacts sur les écosystèmes ou les usages des sols. Une stratégie électrique robuste compare donc les technologies à l’échelle du système, en tenant compte des coûts complets, de la disponibilité, de la flexibilité, des délais, de l’acceptabilité et des contraintes territoriales.'
        ],
        example: {
          statement: 'Une installation solaire de 100 MW fonctionne avec un facteur de charge annuel de 20 %. Quelle énergie produit-elle approximativement en un an de 8 760 heures ?',
          calculation: 'Énergie annuelle = puissance × durée × facteur de charge = 100 MW × 8 760 h × 0,20 = 175 200 MWh, soit 175,2 GWh.',
          answer: 'La production théorique annuelle est d’environ 175,2 GWh. Le facteur de charge est une moyenne sur la période ; il ne signifie pas que l’installation fonctionne à 20 % de sa puissance à chaque instant.'
        },
        exercise: {
          question: 'Pourquoi le LCOE ne suffit-il pas pour décider seul de la composition d’un système électrique ?',
          answer: 'Parce qu’il ne reflète pas entièrement la valeur temporelle de la production, les coûts de réseau, de flexibilité, de stockage, de réserve et les contraintes de fiabilité du système.'
        },
        exercises: [
          {
            question: 'Quelle différence existe entre puissance installée et production annuelle ?',
            answer: 'La puissance installée mesure une capacité instantanée, généralement en MW ou GW ; la production annuelle mesure une quantité d’énergie sur une durée, en MWh ou GWh.'
          },
          {
            question: 'Pourquoi les batteries sont-elles utiles dans un réseau comportant beaucoup de solaire et d’éolien ?',
            answer: 'Elles peuvent stocker temporairement l’électricité disponible et la restituer lorsque la production variable baisse ou que la demande augmente.'
          },
          {
            question: 'Le résultat mondial de l’IRENA sur les coûts renouvelables signifie-t-il que chaque projet renouvelable est toujours le moins cher ?',
            answer: 'Non. Il s’agit d’un résultat agrégé sur les projets étudiés et une comparaison donnée ; les coûts dépendent des sites, du financement, des réseaux et des conditions locales.'
          }
        ],
        sources: [
          {
            title: 'IRENA — Renewable Power Generation Costs in 2024',
            url: 'https://www.irena.org/Publications/2025/Jun/Renewable-Power-Generation-Costs-in-2024'
          },
          {
            title: 'IEA — Electricity 2025, Executive Summary',
            url: 'https://www.iea.org/reports/electricity-2025/executive-summary'
          },
          {
            title: 'IPCC — AR6 Working Group III, Chapter 6: Energy Systems',
            url: 'https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-6/'
          },
          {
            title: 'U.S. Energy Information Administration — Electricity explained',
            url: 'https://www.eia.gov/energyexplained/electricity/index.php'
          }
        ]
      }
    },
    {
      id: 'minerais-critiques-metaux-strategiques',
      title: 'Métaux et minerais critiques : extraction, raffinage et chaînes d’approvisionnement',
      field: 'Géologie économique · Cuivre, lithium, nickel, cobalt, graphite et terres rares',
      summary: 'Analyser le rôle des minerais dans les infrastructures énergétiques et numériques, la concentration des chaînes de valeur, les risques d’approvisionnement et les possibilités de recyclage et de substitution.',
      lesson: {
        sections: [
          'Les technologies énergétiques mobilisent des matières premières en quantités et sous des formes différentes. Le cuivre est essentiel aux réseaux électriques, aux moteurs et aux équipements de puissance ; le lithium, le nickel, le cobalt, le graphite et d’autres matériaux interviennent dans certaines chimies de batteries ; les terres rares sont utilisées dans plusieurs applications, notamment certains aimants permanents. Les besoins varient selon les technologies, les choix de conception et les évolutions industrielles. Le terme « minerai critique » n’a pas une définition universelle : les listes nationales combinent généralement l’importance économique ou stratégique d’une matière et le risque de rupture d’approvisionnement. Une matière peut donc être critique pour un pays et moins prioritaire pour un autre.',
          'La chaîne de valeur minérale ne se limite pas à l’extraction. Elle comprend l’exploration, le développement de la mine, l’extraction, le traitement, la concentration, le raffinage, la transformation chimique ou métallurgique, la fabrication de composants et leur intégration dans les produits finis. Une région peut disposer de ressources géologiques sans posséder les capacités industrielles nécessaires pour produire des matériaux de qualité adaptée aux batteries, aux aimants ou aux composants électriques. Les étapes de traitement et de raffinage peuvent être concentrées dans un nombre limité de pays. Cette concentration crée une vulnérabilité lorsqu’un choc commercial, politique, logistique, énergétique ou environnemental affecte un acteur dominant ou une route d’approvisionnement.',
          'L’Agence internationale de l’énergie souligne que les marchés de plusieurs minerais liés à l’énergie présentent des concentrations géographiques importantes et que les perturbations peuvent provenir d’événements météorologiques, de problèmes techniques ou de restrictions commerciales. Le risque ne dépend pas uniquement de la part du premier producteur : il faut également examiner la concentration du raffinage, la possibilité de remplacer un fournisseur, les stocks, les délais nécessaires pour ouvrir une nouvelle mine et le fait que certains métaux sont produits comme sous-produits d’autres activités minières. Une hausse des prix ne déclenche donc pas toujours une réponse rapide de l’offre. Les projets miniers ont souvent des délais longs et doivent franchir des étapes techniques, financières, réglementaires et sociales.',
          'Le recyclage peut réduire le besoin de matières premières primaires, mais son potentiel dépend de la durée de vie des produits, de la collecte, de la qualité du tri, des procédés disponibles et de la quantité de matériaux arrivant effectivement en fin de vie. Dans une phase de croissance rapide du parc de batteries ou d’infrastructures, le recyclage des produits anciens peut ne pas suffire à couvrir la demande nouvelle. La substitution et l’éco-conception peuvent aussi réduire la dépendance à certains matériaux, mais elles impliquent parfois des compromis de coût, de performance, de durabilité ou de disponibilité. Une politique de sécurité d’approvisionnement combine donc diversification, transparence des données, stocks adaptés, innovation, recyclage, substitution et coopération internationale.'
        ],
        example: {
          statement: 'Un pays importe 80 tonnes d’un métal donné et en consomme 100 tonnes sur une année. Quel est son taux de dépendance aux importations si la production nationale et les variations de stocks sont ignorées ?',
          calculation: 'Taux de dépendance simplifié = importations / consommation × 100 = 80 / 100 × 100 = 80 %.',
          answer: 'Le taux de dépendance simplifié est de 80 %. Cet indicateur ne renseigne pas à lui seul sur la diversité des fournisseurs, la concentration du raffinage, la qualité des stocks ou la possibilité de substituer le matériau.'
        },
        exercise: {
          question: 'Pourquoi un pays qui possède des gisements de lithium ou de cuivre peut-il rester dépendant d’importations de matériaux transformés ?',
          answer: 'Parce que l’extraction et la transformation sont des étapes distinctes. Le pays peut manquer de capacités de concentration, de raffinage, de conversion chimique ou de fabrication répondant aux spécifications industrielles.'
        },
        exercises: [
          {
            question: 'Quelle différence existe entre une ressource minérale et une réserve ?',
            answer: 'Une ressource correspond à une concentration naturelle identifiée ou estimée ; une réserve est la partie considérée comme économiquement exploitable dans des conditions techniques, économiques et réglementaires données.'
          },
          {
            question: 'Pourquoi le raffinage est-il stratégique dans l’analyse des minerais critiques ?',
            answer: 'Parce qu’une forte concentration des capacités de raffinage peut créer une dépendance même lorsque l’extraction est répartie entre plusieurs pays.'
          },
          {
            question: 'Le recyclage peut-il immédiatement remplacer toute extraction minière nouvelle ?',
            answer: 'Non. Le volume recyclable dépend des produits arrivant en fin de vie et peut être insuffisant lorsque la demande augmente rapidement.'
          }
        ],
        sources: [
          {
            title: 'IEA — Global Critical Minerals Outlook 2025',
            url: 'https://www.iea.org/reports/global-critical-minerals-outlook-2025/'
          },
          {
            title: 'IEA — Global Critical Minerals Outlook 2025, Executive Summary',
            url: 'https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary'
          },
          {
            title: 'U.S. Geological Survey — Mineral Commodity Summaries 2026',
            url: 'https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries'
          },
          {
            title: 'European Commission — Critical Raw Materials Act',
            url: 'https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials/critical-raw-materials-act_en'
          }
        ]
      }
    },
    {
      id: 'marches-prix-matieres-premieres',
      title: 'Marchés, prix et économie des matières premières',
      field: 'Économie industrielle · Marchés au comptant · Contrats à terme · Couverture des risques',
      summary: 'Comprendre la formation des prix, les cycles de matières premières, les stocks, les contrats physiques et financiers, ainsi que les risques de volatilité pour les producteurs et les consommateurs.',
      lesson: {
        sections: [
          'Une matière première est souvent négociée sur des marchés où les caractéristiques physiques du produit comptent autant que le prix : qualité, teneur, pureté, localisation, calendrier de livraison et conditions contractuelles. Le prix au comptant correspond à une transaction pour une livraison proche selon les conventions du marché. Les contrats à terme fixent aujourd’hui les conditions d’une livraison future standardisée ou permettent un règlement financier. Les marchés organisés et les contrats de gré à gré remplissent des fonctions différentes. Les contrats à terme peuvent servir à transférer ou gérer le risque de prix, mais ils ne suppriment pas le risque économique : ils peuvent introduire des besoins de marge, un risque de base et un risque de contrepartie selon le contrat.',
          'Les prix dépendent de l’offre et de la demande, mais l’ajustement est souvent lent. Dans les secteurs miniers et énergétiques, les capacités de production ne peuvent pas toujours être augmentées rapidement. Les investissements sont lourds, les projets longs et les ressources ne sont pas toutes exploitables au même coût. À court terme, les stocks, les capacités inutilisées, les conditions météorologiques, les interruptions de transport et les décisions de production peuvent donc avoir un effet important. À long terme, les prix influencent les investissements, l’innovation, la substitution, l’efficacité et parfois la localisation des activités. Les cycles de matières premières peuvent ainsi alterner périodes de prix élevés, investissements supplémentaires, arrivée de nouvelles capacités et phases de surabondance.',
          'Les stocks jouent un rôle d’amortisseur et de signal économique. Lorsque les stocks sont élevés, ils peuvent absorber une partie d’une hausse de la demande ou d’une interruption de l’offre ; lorsqu’ils sont faibles, un choc limité peut provoquer une variation de prix plus marquée. Sur certains marchés, la structure de la courbe des contrats à terme renseigne sur les conditions de stockage et de disponibilité. Le contango désigne généralement une situation où les prix à terme sont supérieurs au prix au comptant ; le backwardation désigne l’inverse. Ces configurations ne sont pas des prédictions certaines du prix futur : elles reflètent notamment le coût de portage, les taux, le stockage et la valeur de disponibilité immédiate du produit.',
          'Les entreprises exposées aux matières premières peuvent utiliser des contrats d’approvisionnement à long terme, des clauses d’indexation, des stocks physiques, des contrats à terme ou des options pour réduire certaines incertitudes. Une couverture protège contre une variation défavorable définie, mais peut aussi limiter le bénéfice d’une variation favorable. Le risque de base apparaît lorsque le prix de l’instrument de couverture ne suit pas exactement le prix réellement payé ou reçu par l’entreprise. Il faut aussi surveiller les risques de change, de transport, de qualité, de liquidité et de crédit. Les rapports du FMI et de la Banque mondiale montrent l’intérêt de suivre les groupes de produits séparément : énergie, métaux, agriculture et engrais peuvent évoluer différemment selon les chocs et les conditions d’offre.'
        ],
        example: {
          statement: 'Une entreprise doit acheter 500 tonnes d’un métal. Le prix passe de 8 000 à 8 600 unités monétaires par tonne. Quel est le surcoût d’achat si la quantité reste inchangée ?',
          calculation: 'Surcoût unitaire = 8 600 - 8 000 = 600. Surcoût total = 500 × 600 = 300 000 unités monétaires.',
          answer: 'Le surcoût est de 300 000 unités monétaires. Ce calcul suppose que la qualité, les frais de transport, le taux de change et les autres conditions commerciales restent identiques.'
        },
        exercise: {
          question: 'Pourquoi une entreprise industrielle peut-elle chercher à couvrir le prix d’un métal même si elle pense que son cours va baisser ?',
          answer: 'La couverture vise d’abord à réduire l’incertitude sur les coûts ou les marges, pas à spéculer sur la direction du marché. Elle peut sécuriser un budget et faciliter la planification, même si elle renonce à une partie du bénéfice potentiel d’une baisse.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’un marché au comptant ?',
            answer: 'Un marché où l’achat ou la vente porte sur une livraison proche, selon les règles et délais propres au produit et au marché.'
          },
          {
            question: 'Le prix d’un contrat à terme est-il une certitude sur le prix au comptant futur ?',
            answer: 'Non. Il dépend des conditions de marché, du coût de portage, des stocks, des taux et d’autres facteurs ; il ne garantit pas le prix futur au comptant.'
          },
          {
            question: 'Quel est le risque de base ?',
            answer: 'C’est le risque que le prix de l’instrument de couverture évolue différemment du prix réel auquel l’entreprise achète ou vend son produit.'
          }
        ],
        sources: [
          {
            title: 'World Bank — Commodity Markets Outlook, October 2025',
            url: 'https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099756111072525099'
          },
          {
            title: 'World Bank — Commodity Markets',
            url: 'https://www.worldbank.org/en/research/commodity-markets'
          },
          {
            title: 'U.S. Commodity Futures Trading Commission — Basics of Futures Trading',
            url: 'https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/FuturesMarketBasics/index.htm'
          },
          {
            title: 'International Monetary Fund — Primary Commodity Prices',
            url: 'https://www.imf.org/en/Research/commodity-prices'
          }
        ]
      }
    },
    {
      id: 'geopolitique-transition-securite-energetique',
      title: 'Géopolitique, sécurité énergétique et transition climatique',
      field: 'Géopolitique de l’énergie · Sécurité d’approvisionnement · Climat et politiques publiques',
      summary: 'Étudier les dépendances entre États, les risques géopolitiques, les infrastructures stratégiques, les émissions et les choix économiques associés à la transformation des systèmes énergétiques.',
      lesson: {
        sections: [
          'La sécurité énergétique désigne la capacité à accéder de manière fiable et abordable aux ressources et services énergétiques. Elle ne se réduit pas à l’autonomie nationale : un pays peut importer une grande partie de son énergie tout en disposant d’approvisionnements diversifiés, de stocks, d’infrastructures robustes et de relations commerciales stables. À l’inverse, une forte dépendance envers un fournisseur unique, une route maritime, un gazoduc ou une installation de traitement peut accroître la vulnérabilité. L’analyse doit distinguer sécurité à court terme — continuité de l’approvisionnement en cas de crise — et résilience à long terme — capacité d’adaptation aux changements technologiques, climatiques, économiques et géopolitiques.',
          'Les infrastructures énergétiques sont stratégiques : terminaux GNL, oléoducs, gazoducs, ports, raffineries, centrales, lignes à haute tension, transformateurs, câbles sous-marins et installations de stockage. Elles peuvent être exposées aux conflits, aux sanctions, aux accidents, aux cyberattaques, aux événements météorologiques extrêmes et aux défaillances techniques. La résilience repose sur la redondance, la maintenance, la diversité des routes et des fournisseurs, les stocks adaptés, les plans d’urgence et la capacité de réparer rapidement les équipements. Le rapport World Energy Outlook 2025 de l’AIE souligne que les enjeux de sécurité concernent désormais à la fois les combustibles traditionnels, les minerais critiques et les réseaux électriques, de plus en plus sollicités par l’électrification et les usages numériques.',
          'La transition énergétique modifie les dépendances plutôt qu’elle ne les fait disparaître automatiquement. Une économie moins dépendante des importations de combustibles peut devenir davantage dépendante de certains matériaux transformés, composants, logiciels ou équipements. Les risques peuvent donc se déplacer de la chaîne d’approvisionnement des hydrocarbures vers les chaînes minières, industrielles et numériques. La diversification des fournisseurs, le développement de capacités de recyclage, la coopération commerciale et la transparence des chaînes de valeur sont des leviers possibles. Ils doivent être évalués au regard des coûts, des délais, des impacts locaux et de la compétitivité industrielle.',
          'Les combustibles fossiles émettent du dioxyde de carbone lors de leur combustion ; les chaînes de production et de transport peuvent aussi entraîner des émissions de méthane et d’autres polluants. Les technologies bas-carbone ont généralement des profils d’émissions sur le cycle de vie différents, car leur fabrication, leur construction, leur combustible éventuel et leur fin de vie doivent être pris en compte. Le GIEC conclut que limiter le réchauffement nécessite des transformations profondes des systèmes énergétiques, notamment une réduction de l’usage des combustibles fossiles, une progression des sources à faibles émissions, l’électrification, l’efficacité et des infrastructures adaptées. Les trajectoires présentées dans les rapports sont des scénarios conditionnels dépendant d’hypothèses ; elles ne doivent pas être présentées comme des prévisions certaines.',
          'Les politiques publiques influencent les choix d’investissement par les normes, la tarification du carbone, les aides, les marchés de capacité, les règles de réseau, les obligations d’efficacité, les politiques industrielles et les accords internationaux. Chaque instrument comporte des effets distributifs : les ménages, les entreprises et les territoires ne supportent pas les coûts de la même manière. Une politique énergétique doit donc arbitrer entre sécurité, prix, compétitivité, accès universel, santé publique et objectifs climatiques. Les évaluations économiques doivent expliciter les hypothèses, les horizons temporels, les coûts de financement et les incertitudes technologiques plutôt que réduire le débat à une opposition simple entre une technologie et une autre.'
        ],
        example: {
          statement: 'Un pays importe 60 % de son gaz d’un seul fournisseur. Il diversifie ses achats et réduit cette part à 35 %. De combien de points de pourcentage sa dépendance envers ce fournisseur diminue-t-elle ?',
          calculation: 'Diminution en points = 60 - 35 = 25 points de pourcentage.',
          answer: 'La dépendance envers ce fournisseur diminue de 25 points de pourcentage. Cela améliore la diversification, mais ne suffit pas à mesurer toute la sécurité énergétique : les autres fournisseurs, les infrastructures, les stocks et la demande doivent aussi être étudiés.'
        },
        exercise: {
          question: 'Pourquoi la transition énergétique peut-elle créer de nouvelles dépendances géopolitiques même si elle réduit la consommation de combustibles fossiles ?',
          answer: 'Parce que les équipements bas-carbone nécessitent des minerais, des matériaux transformés, des composants et des technologies dont la production ou le raffinage peuvent être concentrés dans un nombre limité de pays.'
        },
        exercises: [
          {
            question: 'La sécurité énergétique signifie-t-elle nécessairement qu’un pays doit produire toute son énergie sur son territoire ?',
            answer: 'Non. La diversification des fournisseurs, les stocks, les infrastructures et la fiabilité des échanges peuvent assurer une sécurité élevée malgré des importations.'
          },
          {
            question: 'Pourquoi faut-il étudier les émissions sur l’ensemble du cycle de vie ?',
            answer: 'Parce que l’extraction des matériaux, la fabrication, la construction, l’exploitation et la fin de vie peuvent toutes générer des émissions.'
          },
          {
            question: 'Les scénarios énergétiques de l’AIE et du GIEC sont-ils des prédictions certaines ?',
            answer: 'Non. Ce sont des trajectoires conditionnelles construites à partir d’hypothèses sur les politiques, les technologies, les coûts et les comportements.'
          }
        ],
        sources: [
          {
            title: 'IEA — World Energy Outlook 2025, Executive Summary',
            url: 'https://www.iea.org/reports/world-energy-outlook-2025/executive-summary'
          },
          {
            title: 'IPCC — AR6 Working Group III, Chapter 6: Energy Systems',
            url: 'https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-6/'
          },
          {
            title: 'IPCC — AR6 Synthesis Report, Longer Report',
            url: 'https://www.ipcc.ch/report/ar6/syr/longer-report/'
          },
          {
            title: 'IEA — Global Critical Minerals Outlook 2025',
            url: 'https://www.iea.org/reports/global-critical-minerals-outlook-2025/'
          },
          {
            title: 'European Commission — Energy Security',
            url: 'https://energy.ec.europa.eu/topics/energy-security_en'
          }
        ]
      }
    }
  ]
},



{
  id: 'monnaies-internationales',
  title: 'Monnaies internationales : devises, marchés des changes et système monétaire mondial',
  note: 'Six chapitres approfondis sur les fonctions de la monnaie, les taux de change, les marchés des devises, le système monétaire international, les monnaies de réserve, les politiques de change et les infrastructures de paiement. Les statistiques sont datées et les conventions de cotation sont explicitées ; les scénarios ne sont pas présentés comme des certitudes.',
  chapters: [
    {
      id: 'fonctions-monnaie-taux-change',
      title: 'Les monnaies et les mécanismes fondamentaux des taux de change',
      field: 'Économie monétaire internationale · Devises · Taux de change',
      summary: 'Comprendre les fonctions de la monnaie, les cotations de change, les appréciations et dépréciations, ainsi que les facteurs économiques qui influencent la valeur relative des devises.',
      lesson: {
        sections: [
          'Une monnaie remplit classiquement trois fonctions : unité de compte, moyen de paiement et réserve de valeur. À l’échelle internationale, une devise peut également servir à facturer le commerce, régler des transactions transfrontières, libeller des dettes, investir et constituer des réserves officielles. Ces usages ne coïncident pas nécessairement : une monnaie peut être largement utilisée dans les échanges commerciaux sans être détenue dans les mêmes proportions par les banques centrales. La confiance dans les institutions, la stabilité macroéconomique, la convertibilité, la profondeur des marchés financiers et la disponibilité d’actifs liquides contribuent à son utilisation internationale.',
          'Le taux de change exprime le prix d’une monnaie dans une autre. Il faut toujours préciser la convention de cotation. Si EUR/USD = 1,10, cela signifie qu’un euro vaut 1,10 dollar. Si USD/EUR = 0,9091, un dollar vaut environ 0,9091 euro. Ces deux cotations décrivent la même relation sous forme réciproque, à l’arrondi près. Une appréciation de l’euro signifie qu’il faut davantage de dollars pour acheter un euro lorsque la cotation est EUR/USD ; une dépréciation signifie l’inverse. Les variations doivent être interprétées en fonction de la monnaie de référence et de la convention utilisée.',
          'À court terme, les taux de change réagissent aux anticipations de taux d’intérêt, aux annonces des banques centrales, aux données économiques, aux flux de capitaux, au risque géopolitique et à la liquidité des marchés. À plus long terme, l’inflation relative, la productivité, la compétitivité, la situation extérieure et la crédibilité des institutions contribuent aussi à leur évolution. Il n’existe toutefois pas de formule simple permettant de prévoir précisément un taux de change à partir d’un seul indicateur. Les marchés incorporent des anticipations qui peuvent changer rapidement et les mouvements observés peuvent s’écarter durablement de certaines estimations de valeur fondamentale.',
          'Le taux de change nominal bilatéral compare deux monnaies. Le taux de change effectif nominal agrège plusieurs taux bilatéraux en les pondérant selon l’importance des partenaires commerciaux. Le taux de change effectif réel ajuste cet indice des différences de prix ou de coûts entre le pays et ses partenaires. Il donne ainsi une indication de la compétitivité-prix relative. Une appréciation réelle peut rendre les produits nationaux relativement plus chers, toutes choses égales par ailleurs, mais son effet concret dépend aussi de la qualité, de la productivité, des marges, des contrats et de la composition des échanges. Les indices de la BRI utilisent des pondérations commerciales et des méthodes documentées.'
        ],
        example: {
          statement: 'La cotation EUR/USD passe de 1,08 à 1,14. Quelle est la valeur en dollars de 500 euros avant et après la variation, et de combien augmente-t-elle ?',
          calculation: 'Valeur initiale = 500 × 1,08 = 540 USD. Valeur finale = 500 × 1,14 = 570 USD. Variation = 570 - 540 = 30 USD.',
          answer: 'Les 500 euros valent d’abord 540 USD puis 570 USD. Leur valeur en dollars augmente de 30 USD. Selon cette convention, l’euro s’est apprécié face au dollar.'
        },
        exercise: {
          question: 'Pourquoi faut-il préciser la convention de cotation avant de dire qu’une monnaie s’apprécie ?',
          answer: 'Parce qu’un taux peut exprimer le nombre d’unités de monnaie étrangère pour une unité de monnaie nationale, ou l’inverse. Le sens numérique de la variation dépend de cette convention.'
        },
        exercises: [
          {
            question: 'Quelles sont les trois fonctions classiques de la monnaie ?',
            answer: 'Unité de compte, moyen de paiement et réserve de valeur.'
          },
          {
            question: 'Que signifie une cotation EUR/USD de 1,20 ?',
            answer: 'Un euro s’échange contre 1,20 dollar, selon cette cotation.'
          },
          {
            question: 'Quelle différence existe entre un taux de change nominal bilatéral et un taux de change effectif réel ?',
            answer: 'Le premier compare deux monnaies. Le second agrège plusieurs partenaires commerciaux et ajuste le taux nominal effectif des différences de prix ou de coûts.'
          }
        ],
        sources: [
          {
            title: 'BIS — Effective exchange rates: overview and methodology',
            url: 'https://data.bis.org/topics/EER'
          },
          {
            title: 'ECB — Exchange rates: methodology',
            url: 'https://data.ecb.europa.eu/methodology/exchange-rates'
          },
          {
            title: 'IMF — Balance of Payments and International Investment Position Manual, BPM6',
            url: 'https://www.imf.org/external/pubs/ft/bop/2007/pdf/bpm6.pdf'
          }
        ]
      }
    },
    {
      id: 'marche-des-changes-instruments',
      title: 'Le marché des changes : acteurs, liquidité et instruments financiers',
      field: 'Marchés financiers internationaux · Forex · Contrats de change',
      summary: 'Étudier le fonctionnement décentralisé du marché des changes, les principaux intervenants, les opérations au comptant et à terme, les swaps, les options et la gestion du risque de change.',
      lesson: {
        sections: [
          'Le marché des changes, souvent désigné par l’acronyme FX, permet de convertir une monnaie en une autre et de gérer les risques liés aux variations de devises. Il fonctionne principalement de gré à gré, à travers un réseau mondial de banques, d’établissements financiers, de plateformes et d’entreprises. Il n’existe pas une bourse mondiale unique qui centraliserait toutes les transactions. Les banques et teneurs de marché fournissent des prix d’achat et de vente ; les entreprises convertissent les recettes et dépenses liées au commerce ; les investisseurs rééquilibrent leurs portefeuilles ; les banques centrales peuvent intervenir dans le cadre de leur politique de change ou de réserves.',
          'Une opération au comptant (spot) échange deux monnaies pour une livraison proche, selon les conventions de marché et les jours ouvrés concernés. Un contrat à terme ferme (forward) fixe aujourd’hui un taux pour un échange à une date future. Il permet à une entreprise de connaître à l’avance le montant en monnaie nationale qu’elle recevra ou devra payer, mais il l’engage contractuellement et peut l’empêcher de profiter d’une évolution favorable. Un swap de change combine généralement une opération au comptant et une opération inverse à terme ; il est fréquemment utilisé pour gérer des besoins temporaires de financement en devises. Un swap de devises peut, quant à lui, organiser des échanges de principal et d’intérêts sur une durée plus longue.',
          'Les options de change donnent à leur acheteur un droit, et non une obligation, d’acheter ou de vendre une devise à un taux déterminé selon les conditions du contrat. Cette flexibilité a un coût : la prime. Les contrats à terme et les swaps n’ont pas la même structure de risque qu’une option. Le choix d’un instrument dépend de l’exposition réelle, de l’horizon, de la tolérance au risque, de la liquidité et du coût. Une couverture ne supprime pas tous les risques : elle peut laisser subsister un risque de base, un risque de contrepartie, un risque de liquidité ou un décalage entre la date du contrat et celle du paiement commercial.',
          'L’enquête triennale de la BRI mesure l’activité des marchés de change et des dérivés de gré à gré. Pour avril 2025, elle estime le chiffre d’affaires quotidien moyen des opérations de change de gré à gré à 9 600 milliards de dollars. Le dollar américain se trouvait d’un côté de 89,2 % des transactions recensées, et l’euro de 28,9 %. Ces parts ne s’additionnent pas à 100 %, car chaque transaction implique deux monnaies et chaque devise est comptabilisée lorsqu’elle figure sur l’un des deux côtés de l’opération. Les chiffres décrivent un volume de transactions, pas la valeur nette des échanges commerciaux ni les réserves des banques centrales.'
        ],
        example: {
          statement: 'Une entreprise française doit recevoir 200 000 USD dans 3 mois. Elle conclut un contrat à terme au taux de 1 EUR = 1,10 USD. Quel montant en euros verrouille-t-elle, hors frais et ajustements contractuels ?',
          calculation: 'Montant en EUR = 200 000 / 1,10 = 181 818,18 EUR environ.',
          answer: 'L’entreprise verrouille environ 181 818,18 euros. Le contrat réduit son incertitude de change, mais l’empêche aussi de bénéficier d’un taux plus favorable à l’échéance, selon les modalités du contrat.'
        },
        exercise: {
          question: 'Pourquoi une entreprise exportatrice peut-elle utiliser un contrat de change à terme ?',
          answer: 'Pour fixer à l’avance le taux auquel ses recettes en devise seront converties et réduire l’incertitude sur ses revenus en monnaie nationale.'
        },
        exercises: [
          {
            question: 'Quel est le rôle principal d’un marché des changes ?',
            answer: 'Permettre l’échange de devises et la gestion des expositions liées aux variations des taux de change.'
          },
          {
            question: 'Quelle différence essentielle existe entre un contrat à terme ferme et une option de change ?',
            answer: 'Le contrat à terme engage les parties à effectuer l’échange prévu ; l’option donne à son acheteur un droit qu’il peut choisir de ne pas exercer.'
          },
          {
            question: 'Pourquoi les parts de devises dans le chiffre d’affaires mondial du marché FX peuvent-elles dépasser 100 % au total ?',
            answer: 'Parce que chaque transaction comporte deux monnaies et que chacune est comptabilisée lorsqu’elle apparaît sur l’un des côtés de l’échange.'
          }
        ],
        sources: [
          {
            title: 'BIS — OTC foreign exchange turnover in April 2025',
            url: 'https://www.bis.org/statistics/rpfx25_fx.pdf'
          },
          {
            title: 'BIS — Triennial Central Bank Survey 2025',
            url: 'https://www.bis.org/publications/triennial-central-bank-survey-foreign-exchange-and-over-the-counter-otc-derivatives-markets-2025'
          },
          {
            title: 'CFTC — Futures Market Basics',
            url: 'https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/FuturesMarketBasics/index.htm'
          }
        ]
      }
    },
    {
      id: 'systeme-monetaire-international-histoire',
      title: 'L’histoire du système monétaire international : de l’étalon-or à l’après-Bretton Woods',
      field: 'Histoire monétaire · Institutions internationales · Régimes de change',
      summary: 'Retracer les grandes architectures monétaires internationales, leurs règles, leurs crises et les institutions qui encadrent la coopération financière entre États.',
      lesson: {
        sections: [
          'Un système monétaire international regroupe les règles, institutions et pratiques qui organisent les paiements entre pays, les taux de change, les réserves officielles et les ajustements des déséquilibres extérieurs. Au XIXe siècle et au début du XXe siècle, plusieurs pays ont adopté des formes d’étalon-or dans lesquelles la valeur de leur monnaie était définie par rapport à une quantité d’or. Ce système favorisait des parités relativement stables entre monnaies participantes, mais limitait la marge de manœuvre monétaire et pouvait transmettre les tensions financières et économiques entre pays. Son fonctionnement historique a varié selon les périodes et les pays ; il ne faut pas le réduire à un régime parfaitement uniforme.',
          'Les accords de Bretton Woods de 1944 ont établi un système de parités fixes mais ajustables, centré sur le dollar convertible en or pour les autorités monétaires étrangères selon les règles de l’époque. Le Fonds monétaire international a été créé pour soutenir la coopération monétaire et aider les pays confrontés à des difficultés de balance des paiements. La Banque internationale pour la reconstruction et le développement, devenue le noyau du Groupe de la Banque mondiale, avait initialement pour mission de contribuer à la reconstruction et au développement. Le système a subi des tensions croissantes, notamment en raison des déséquilibres extérieurs américains et des contraintes liées à la convertibilité du dollar en or.',
          'En août 1971, les États-Unis ont suspendu la convertibilité officielle du dollar en or. Les accords de la Jamaïque de 1976 ont ensuite reconnu la possibilité de régimes de change plus flexibles dans le cadre des règles du FMI. Depuis, les régimes de change sont divers : flottement indépendant, flottement administré, ancrage à une autre monnaie, caisse d’émission ou union monétaire. Il n’existe donc pas un régime unique pour tous les pays. Les choix dépendent notamment de la structure économique, de la crédibilité des institutions, de l’ouverture financière, des chocs subis et des objectifs de politique économique.',
          'Les droits de tirage spéciaux (DTS) ont été créés par le FMI en 1969 comme actif de réserve international complémentaire. Ils ne constituent pas une monnaie utilisée directement par les ménages dans les paiements ordinaires. Leur valeur repose sur un panier de grandes monnaies et ils peuvent être échangés entre participants au département des DTS selon les mécanismes du FMI. Les allocations de DTS augmentent les avoirs de réserve des membres, mais leur utilisation et leurs effets dépendent des règles institutionnelles et des opérations réalisées. Les DTS illustrent la différence entre une monnaie nationale, un actif de réserve international et un instrument de coopération monétaire.'
        ],
        example: {
          statement: 'Un pays annonce une parité fixe de 5 unités de sa monnaie pour 1 euro. Combien d’unités nationales correspondent à 200 euros à cette parité, en supposant qu’elle est maintenue ?',
          calculation: 'Montant = 200 × 5 = 1 000 unités monétaires nationales.',
          answer: 'À la parité annoncée, 200 euros correspondent à 1 000 unités de monnaie nationale. Ce calcul ne prouve pas que la parité soit soutenable : il faut aussi examiner les réserves, la politique économique et la confiance dans l’engagement de change.'
        },
        exercise: {
          question: 'Pourquoi le système de Bretton Woods est-il qualifié de système de parités fixes mais ajustables ?',
          answer: 'Parce que les monnaies participantes maintenaient des parités officielles, mais qu’une modification pouvait être décidée dans certaines circonstances, notamment en cas de déséquilibre fondamental, selon le cadre institutionnel de l’époque.'
        },
        exercises: [
          {
            question: 'En quelle année les accords de Bretton Woods ont-ils été conclus ?',
            answer: 'En 1944.'
          },
          {
            question: 'Quel événement américain de 1971 a marqué la fin de la convertibilité officielle du dollar en or pour les autorités monétaires étrangères ?',
            answer: 'La suspension de la convertibilité du dollar en or annoncée par les États-Unis en août 1971.'
          },
          {
            question: 'Les droits de tirage spéciaux sont-ils une monnaie nationale ?',
            answer: 'Non. Ce sont des actifs de réserve internationaux créés par le FMI et évalués à partir d’un panier de monnaies.'
          }
        ],
        sources: [
          {
            title: 'IMF — Articles of Agreement',
            url: 'https://www.imf.org/external/pubs/ft/aa/'
          },
          {
            title: 'IMF — Special Drawing Rights (SDR)',
            url: 'https://www.imf.org/en/About/Factsheets/Sheets/2023/special-drawing-rights-sdr'
          },
          {
            title: 'Federal Reserve History — Nixon Ends Convertibility of U.S. Dollars to Gold',
            url: 'https://www.federalreservehistory.org/essays/gold-convertibility-ends'
          },
          {
            title: 'World Bank — History',
            url: 'https://www.worldbank.org/en/about/history'
          }
        ]
      }
    },
    {
      id: 'monnaies-reserve-internationalisation',
      title: 'Les monnaies de réserve et la hiérarchie monétaire mondiale',
      field: 'Monnaies internationales · Réserves de change · Dollar, euro et renminbi',
      summary: 'Analyser pourquoi certaines devises sont détenues par les banques centrales et utilisées dans le commerce, la finance et les réserves, en comparant le dollar, l’euro, le renminbi et les autres monnaies majeures.',
      lesson: {
        sections: [
          'Une monnaie de réserve est une devise détenue par les autorités monétaires dans leurs réserves officielles, généralement sous forme de dépôts, de titres ou d’autres créances liquides sur des non-résidents. Les réserves permettent notamment de répondre à des besoins de paiements extérieurs, de contribuer à la gestion du taux de change et de renforcer la confiance dans la capacité d’un pays à honorer ses engagements internationaux. La composition des réserves est publiée par le FMI dans la base COFER sous forme d’agrégats mondiaux. Les données COFER ne révèlent pas la composition détaillée des réserves de chaque pays, car les informations individuelles sont confidentielles.',
          'Le dollar américain occupe une place centrale dans le système monétaire international. Cette position s’explique par plusieurs facteurs complémentaires : taille de l’économie américaine, profondeur et liquidité des marchés financiers, disponibilité de titres publics très échangés, rôle des banques et infrastructures de paiement, ainsi que l’usage historique du dollar dans la facturation et le financement du commerce. La domination d’une devise crée des effets de réseau : plus les entreprises et institutions l’utilisent, plus il devient pratique pour d’autres acteurs de l’utiliser à leur tour. Cette position dominante ne signifie pas que le dollar soit sans risque, ni que son rôle soit immuable.',
          'L’euro est la deuxième grande monnaie internationale selon de nombreux indicateurs. Son rôle repose sur la taille de la zone euro, l’ouverture commerciale et financière, les institutions européennes et l’importance des marchés de capitaux libellés en euros. L’existence de plusieurs marchés nationaux de dette et l’absence d’un actif fédéral unique comparable au marché des titres du Trésor américain constituent toutefois des différences structurelles importantes. La BCE suit le rôle international de l’euro à travers un ensemble d’indicateurs portant notamment sur les réserves, les émissions de dette, les prêts, les dépôts et les transactions. Un indicateur composite ne doit pas être confondu avec une part unique valable pour tous les usages.',
          'Le renminbi chinois a gagné en importance dans certains échanges commerciaux, financements et infrastructures de paiement. Son internationalisation reste néanmoins contrainte par les contrôles de capitaux, le cadre institutionnel, la convertibilité et la profondeur des marchés financiers accessibles aux investisseurs internationaux. D’autres monnaies, comme le yen, la livre sterling et le franc suisse, conservent des rôles significatifs dans certains segments. Les données du FMI COFER publiées pour le quatrième trimestre 2025 indiquaient des parts d’environ 56,77 % pour le dollar, 20,25 % pour l’euro et 1,95 % pour le renminbi dans les réserves de change mondiales déclarées et ventilées. Ces proportions concernent les réserves de change couvertes par COFER, pas l’ensemble des actifs mondiaux ni l’or monétaire.'
        ],
        example: {
          statement: 'Un portefeuille de réserves de change ventilées représente 10 000 milliards USD. Si une devise en représente 56,77 %, quelle valeur lui correspond ?',
          calculation: 'Valeur = 10 000 milliards × 0,5677 = 5 677 milliards USD.',
          answer: 'La devise représente 5 677 milliards USD dans cet exemple. Le calcul applique une part statistique à un total fictif ; il ne constitue pas une estimation du montant réel des réserves mondiales.'
        },
        exercise: {
          question: 'Pourquoi la part d’une monnaie dans les réserves officielles ne suffit-elle pas à mesurer entièrement son rôle international ?',
          answer: 'Parce que le rôle international comprend aussi la facturation du commerce, les paiements, les transactions de change, les émissions de dette, les prêts et les dépôts transfrontières.'
        },
        exercises: [
          {
            question: 'Que mesure la base COFER du FMI ?',
            answer: 'La composition en devises des réserves officielles de change à partir de données agrégées communiquées au FMI.'
          },
          {
            question: 'Pourquoi la liquidité des marchés financiers favorise-t-elle l’internationalisation d’une monnaie ?',
            answer: 'Elle facilite l’achat et la vente de grands volumes d’actifs, réduit généralement les coûts de transaction et permet aux investisseurs de gérer leurs positions plus facilement.'
          },
          {
            question: 'Les chiffres COFER incluent-ils l’or monétaire dans les réserves de change ventilées par devise ?',
            answer: 'Non. L’or monétaire fait partie des actifs de réserve au sens large, mais il n’est pas inclus dans les réserves de change ventilées par devise de COFER.'
          }
        ],
        sources: [
          {
            title: 'IMF — Currency Composition of Official Foreign Exchange Reserves (COFER)',
            url: 'https://data.imf.org/en/datasets/IMF.STA:COFER'
          },
          {
            title: 'IMF — COFER Frequently Asked Questions',
            url: 'https://data.imf.org/en/Datasets/COFER/Frequently-Asked-Questions'
          },
          {
            title: 'Federal Reserve — The International Role of the U.S. Dollar, 2025 Edition',
            url: 'https://www.federalreserve.gov/econres/notes/feds-notes/the-international-role-of-the-u-s-dollar-2025-edition-20250718.html'
          },
          {
            title: 'ECB — The international role of the euro, June 2026',
            url: 'https://www.ecb.europa.eu/press/other-publications/ire/html/ecb.ire202606.en.html'
          }
        ]
      }
    },
    {
      id: 'politiques-change-balance-paiements',
      title: 'Politiques de change, banques centrales et équilibre extérieur',
      field: 'Politique monétaire · Balance des paiements · Régimes de change et crises',
      summary: 'Étudier les régimes de change, les interventions des banques centrales, les liens entre taux d’intérêt et devises, la balance des paiements et les contraintes auxquelles font face les économies ouvertes.',
      lesson: {
        sections: [
          'Un régime de change décrit la manière dont la valeur d’une monnaie est déterminée ou encadrée. Dans un régime flottant, le taux varie principalement selon l’offre et la demande sur le marché, même si les autorités peuvent intervenir dans certaines circonstances. Dans un ancrage fixe, les autorités s’engagent à maintenir une parité ou une bande de fluctuation par rapport à une autre monnaie ou à un panier. Entre ces deux extrêmes existent des régimes intermédiaires, des flottements administrés et des dispositifs institutionnels spécifiques. Le choix d’un régime implique des arbitrages entre stabilité du taux de change, autonomie monétaire et mobilité des capitaux.',
          'La politique monétaire influence les conditions financières et peut agir sur le taux de change par les taux d’intérêt, les anticipations et la confiance. Une hausse des taux directeurs peut rendre certains placements dans la monnaie plus rémunérateurs, mais l’effet sur le change n’est pas mécanique : les marchés anticipent les décisions, évaluent l’inflation, le risque, la croissance et la trajectoire future des taux. Une banque centrale peut aussi acheter ou vendre des devises, modifier les conditions de liquidité ou utiliser d’autres instruments. L’efficacité d’une intervention dépend de son ampleur, de sa crédibilité, des réserves disponibles, du régime de change et des conditions de marché.',
          'La balance des paiements enregistre les transactions entre résidents et non-résidents. Elle comprend notamment le compte courant, le compte de capital et le compte financier, selon les conventions statistiques internationales. Le compte courant retrace les échanges de biens et services, les revenus primaires et les transferts courants. Le compte financier enregistre les investissements directs, les investissements de portefeuille, les produits financiers dérivés, les autres investissements et les avoirs de réserve. Les soldes sont liés par les identités comptables de la balance des paiements, sous réserve des erreurs et omissions et des conventions de présentation. Un déficit courant n’implique pas automatiquement une crise : il doit être analysé avec son financement, la maturité des engagements, la devise de la dette et la capacité productive du pays.',
          'Une crise de change peut apparaître lorsqu’un régime fixe perd sa crédibilité, lorsque les réserves deviennent insuffisantes pour défendre une parité, ou lorsque les investisseurs anticipent une dévaluation. Les crises peuvent être amplifiées par des dettes en devises, des échéances courtes, des sorties de capitaux et des fragilités bancaires. La dépréciation d’une monnaie peut soutenir certains secteurs exportateurs, mais elle renchérit les importations et peut augmenter le poids des dettes libellées en monnaie étrangère. L’effet dépend de la structure des échanges, de la réaction des prix, des contrats, de la capacité des entreprises à substituer les intrants et de la crédibilité de la politique économique.'
        ],
        example: {
          statement: 'Une entreprise doit rembourser une dette de 1 000 000 USD. Le taux passe de 1 EUR = 1,20 USD à 1 EUR = 1,00 USD. Quel est le coût de cette dette en euros avant et après la variation ?',
          calculation: 'Avant : 1 000 000 / 1,20 = 833 333,33 EUR. Après : 1 000 000 / 1,00 = 1 000 000 EUR. Hausse du coût en euros = 166 666,67 EUR environ.',
          answer: 'Le remboursement passe d’environ 833 333,33 euros à 1 000 000 euros. L’euro s’étant déprécié face au dollar selon les cotations indiquées, la dette en dollars devient plus coûteuse en euros.'
        },
        exercise: {
          question: 'Pourquoi une dette libellée en devise étrangère peut-elle devenir plus lourde après une dépréciation de la monnaie nationale ?',
          answer: 'Parce qu’il faut davantage d’unités de monnaie nationale pour acheter la devise nécessaire au remboursement de la dette.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’un régime de change flottant ?',
            answer: 'Un régime dans lequel le taux de change est principalement déterminé par l’offre et la demande sur le marché, sans parité fixe garantie par les autorités.'
          },
          {
            question: 'Quels grands éléments figurent dans le compte courant de la balance des paiements ?',
            answer: 'Les biens, les services, les revenus primaires et les transferts courants.'
          },
          {
            question: 'Une hausse des taux directeurs entraîne-t-elle toujours une appréciation immédiate de la monnaie ?',
            answer: 'Non. Le taux de change dépend aussi des anticipations, de l’inflation, du risque, de la croissance et des décisions déjà intégrées dans les prix de marché.'
          }
        ],
        sources: [
          {
            title: 'IMF — Annual Report on Exchange Arrangements and Exchange Restrictions',
            url: 'https://www.imf.org/en/Publications/Annual-Report-on-Exchange-Arrangements-and-Exchange-Restrictions'
          },
          {
            title: 'IMF — Balance of Payments and International Investment Position Manual, BPM6',
            url: 'https://www.imf.org/external/pubs/ft/bop/2007/pdf/bpm6.pdf'
          },
          {
            title: 'BIS — Effective exchange rates',
            url: 'https://data.bis.org/topics/EER'
          },
          {
            title: 'ECB — Exchange rates and foreign exchange operations',
            url: 'https://www.ecb.europa.eu/mopo/eaec/fx/html/index.en.html'
          }
        ]
      }
    },
    {
      id: 'paiements-numeriques-monnaies-avenir',
      title: 'Paiements internationaux, monnaies numériques et évolutions du système monétaire',
      field: 'Infrastructures de paiement · Monnaies numériques de banque centrale · Stablecoins et innovation financière',
      summary: 'Comprendre les infrastructures de paiements transfrontières, les monnaies numériques de banque centrale, les stablecoins, les enjeux de règlement et les limites des innovations monétaires.',
      lesson: {
        sections: [
          'Un paiement transfrontière implique généralement plusieurs établissements, systèmes de paiement, devises et cadres réglementaires. Le transfert peut mobiliser des banques correspondantes, des comptes de règlement, des mécanismes de compensation et des infrastructures nationales ou internationales. Les délais, les frais, la transparence et l’accessibilité dépendent du parcours du paiement, des contrôles réglementaires, des horaires d’ouverture et des accords entre institutions. Les banques correspondantes permettent notamment à des établissements de détenir des comptes auprès d’autres banques afin d’effectuer des paiements dans des juridictions où ils ne disposent pas de présence directe. La modernisation des paiements vise à améliorer la rapidité, le coût, l’accès et la traçabilité, tout en respectant les exigences de sécurité et de conformité.',
          'Une monnaie numérique de banque centrale (MNBC ou CBDC) est une forme numérique de monnaie émise par une banque centrale et libellée dans l’unité de compte nationale. Elle se distingue d’un dépôt bancaire commercial, qui constitue une créance sur une banque commerciale, et d’un actif privé tel qu’un stablecoin. Une MNBC de détail serait destinée au grand public ; une MNBC de gros serait réservée aux institutions financières pour certains règlements. Les projets diffèrent selon les pays et ne signifient pas qu’une monnaie numérique a été adoptée ou mise en circulation. Les autorités étudient notamment les effets sur la stabilité financière, la confidentialité, la résilience, l’inclusion et le rôle des intermédiaires bancaires.',
          'Les stablecoins sont des crypto-actifs conçus pour chercher à maintenir une valeur stable par rapport à une référence, souvent une monnaie comme le dollar. Leur stabilité dépend de la qualité et de la liquidité des réserves, des droits des détenteurs, de la gouvernance, des mécanismes de remboursement et des risques opérationnels. Ils ne sont pas automatiquement équivalents à de la monnaie de banque centrale ni à un dépôt bancaire garanti. Leur utilisation peut faciliter certains transferts numériques, mais elle soulève des questions de protection des utilisateurs, de blanchiment, de stabilité financière, de concentration et de souveraineté monétaire. Le terme « stable » décrit un objectif de conception, pas une garantie absolue de valeur.',
          'Les innovations de paiement peuvent modifier les infrastructures sans remplacer immédiatement les monnaies nationales ni les banques. Les systèmes de règlement instantané, les registres distribués, la tokenisation d’actifs et les dispositifs de paiement interopérables répondent à des problèmes différents. La tokenisation représente des droits ou actifs sous forme de jetons numériques ; elle ne supprime pas les règles juridiques qui déterminent la propriété, le règlement et les recours. À l’échelle internationale, les enjeux incluent l’interopérabilité, la cybersécurité, la gouvernance, les standards techniques, la protection des données et la coopération entre autorités. Les travaux de la BRI et du Conseil de stabilité financière soulignent la nécessité d’évaluer les risques systémiques et les dépendances opérationnelles avant un déploiement à grande échelle.'
        ],
        example: {
          statement: 'Un paiement international coûte 20 euros de frais fixes et 1,5 % du montant transféré. Quel est le coût total pour un transfert de 2 000 euros, hors frais de change ?',
          calculation: 'Frais variables = 2 000 × 0,015 = 30 euros. Coût total = 20 + 30 = 50 euros.',
          answer: 'Le coût total est de 50 euros, hors éventuelle marge de change et autres frais facturés par les intermédiaires.'
        },
        exercise: {
          question: 'Quelle différence fondamentale existe entre une monnaie numérique de banque centrale et un stablecoin privé ?',
          answer: 'La MNBC est une créance numérique sur la banque centrale. Le stablecoin est un passif ou un actif émis dans un cadre privé, dont la valeur dépend de ses réserves, de ses droits contractuels et de son mécanisme de stabilisation.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’une banque correspondante dans un paiement international ?',
            answer: 'Une banque qui fournit des services à une autre banque, notamment au moyen de comptes permettant d’effectuer des paiements dans une devise ou une juridiction donnée.'
          },
          {
            question: 'Une MNBC de détail et une MNBC de gros visent-elles les mêmes utilisateurs ?',
            answer: 'Non. La MNBC de détail vise le grand public, tandis que la MNBC de gros vise les institutions financières et certains règlements entre professionnels.'
          },
          {
            question: 'Un stablecoin garantit-il nécessairement le remboursement à parité à tout moment ?',
            answer: 'Non. Cela dépend des réserves, des droits juridiques, des conditions de remboursement, de la liquidité et de la solidité de l’émetteur et de ses dispositifs.'
          }
        ],
        sources: [
          {
            title: 'BIS — Annual Economic Report 2025, The next-generation monetary and financial system',
            url: 'https://www.bis.org/publ/arpdf/ar2025e.htm'
          },
          {
            title: 'BIS — Central bank digital currencies',
            url: 'https://www.bis.org/about/bisih/topics/cbdc.htm'
          },
          {
            title: 'Financial Stability Board — High-level recommendations for the regulation, supervision and oversight of global stablecoin arrangements',
            url: 'https://www.fsb.org/2023/07/high-level-recommendations-for-the-regulation-supervision-and-oversight-of-global-stablecoin-arrangements-final-report/'
          },
          {
            title: 'CPMI — Enhancing cross-border payments',
            url: 'https://www.bis.org/cpmi/topics/cross_border.htm'
          }
        ]
      }
    }
  ]
},

{
  id: 'crises-petrolieres',
  title: 'Les crises pétrolières',
  note: 'Six chapitres consacrés aux grands chocs pétroliers de 1973-1974, 1978-1986, 1990-1991, 2007-2009, 2014-2016 et 2020-2022. La branche distingue les ruptures physiques d’approvisionnement, les chocs de demande, les anticipations géopolitiques et les déséquilibres de stocks. Les prix cités sont nominaux et les références de marché (Brent ou WTI, spot ou contrats à terme) sont précisées lorsque cela est nécessaire ; ils ne sont donc pas directement comparables sans ajustement.',
  chapters: [
    {
      id: 'choc-petrolier-1973-1974',
      title: 'Le premier choc pétrolier : embargo arabe et bouleversement du marché (1973-1974)',
      field: 'Histoire économique · Moyen-Orient · Marché mondial du pétrole · 1973-1974',
      summary: 'Étudier la rupture du système pétrolier du début des années 1970, les décisions de l’OAPEC pendant la guerre du Kippour, la hausse rapide des prix et les conséquences macroéconomiques pour les pays importateurs.',
      lesson: {
        sections: [
          'Avant 1973, le marché international du pétrole est déjà en transformation : la consommation des économies industrialisées augmente rapidement et les pays producteurs cherchent à reprendre davantage de contrôle sur leurs ressources et sur la fixation des prix. La crise ne naît donc pas uniquement d’un embargo soudain. Elle survient dans un contexte de dépendance croissante des pays consommateurs aux importations, de tensions entre États producteurs et compagnies pétrolières, et de marges de capacité de production limitées dans certains pays importateurs. Ces fragilités rendent le système plus sensible à une décision politique ou à une interruption d’approvisionnement.',
          'La guerre du Kippour commence le 6 octobre 1973. Le 17 octobre, les membres arabes de l’Organisation des pays arabes exportateurs de pétrole (OAPEC) annoncent des réductions de production. À partir du 19 octobre, plusieurs producteurs arabes mettent en place un embargo visant notamment les États-Unis, en réaction au soutien américain à Israël ; d’autres pays sont également visés ou soumis à des restrictions. Il faut distinguer l’OAPEC de l’OPEP : l’OAPEC est l’organisation des producteurs arabes, tandis que l’OPEP regroupe des pays producteurs qui ne sont pas tous arabes. L’embargo et les réductions de production sont deux mesures liées mais distinctes.',
          'La hausse des prix est très rapide. Selon la Federal Reserve History, le prix de référence cité passe d’environ 2,90 dollars le baril avant l’embargo à 11,65 dollars en janvier 1974, soit près de quatre fois son niveau initial. L’impact ne dépend pas seulement du volume effectivement bloqué : les acheteurs anticipent d’autres restrictions, cherchent des cargaisons alternatives et acceptent des prix plus élevés. Les délais de transport, la répartition géographique des raffineries et les difficultés à remplacer immédiatement certains bruts contribuent à transmettre le choc aux marchés des produits pétroliers.',
          'Pour les économies importatrices, le renchérissement du pétrole augmente les coûts de transport, de chauffage, d’électricité et de production industrielle. Il alimente l’inflation tout en réduisant le revenu réel disponible des ménages et les marges de nombreuses entreprises. Cette combinaison d’inflation et de ralentissement économique contribue à la stagflation. Les réponses publiques comprennent des mesures de sobriété, des politiques de diversification énergétique, la recherche de nouvelles sources d’approvisionnement et le renforcement progressif des dispositifs de sécurité énergétique. La fin officielle de l’embargo en mars 1974 ne ramène pas automatiquement les prix à leur niveau antérieur.',
          'La leçon économique essentielle est qu’un marché peut connaître une crise majeure même si l’interruption ne touche pas uniformément tous les pays. Les flux commerciaux se réorganisent, les cargaisons sont redirigées et les anticipations peuvent amplifier le choc initial. Pour analyser un épisode de ce type, il faut donc examiner simultanément les volumes produits, les exportations réellement interrompues, les stocks disponibles, les capacités inutilisées chez les autres producteurs et la réaction de la demande.'
        ],
        example: {
          statement: 'Le prix de référence passe de 2,90 dollars le baril avant l’embargo à 11,65 dollars en janvier 1974. Quel est le multiplicateur approximatif et le pourcentage de hausse ?',
          calculation: 'Multiplicateur = 11,65 / 2,90 = 4,02. Hausse en pourcentage = ((11,65 - 2,90) / 2,90) × 100 = 301,7 %.',
          answer: 'Le prix a été multiplié par environ 4,02, ce qui correspond à une hausse d’environ 302 %. Il s’agit des valeurs nominales rapportées par la Federal Reserve History, et non d’une comparaison corrigée de l’inflation.'
        },
        exercise: {
          question: 'Pourquoi est-il inexact de présenter la crise de 1973 comme un simple embargo sans tenir compte du contexte du marché pétrolier ?',
          answer: 'Parce que l’embargo intervient dans un marché déjà tendu, marqué par une forte dépendance aux importations, des tensions sur la fixation des prix et une capacité de remplacement limitée. Les anticipations, les réductions de production et la réorganisation des flux ont également contribué à la hausse.'
        },
        exercises: [
          {
            question: 'Quelle organisation a annoncé les réductions de production d’octobre 1973 ?',
            answer: 'L’OAPEC, l’Organisation des pays arabes exportateurs de pétrole. Elle ne doit pas être confondue avec l’OPEP.'
          },
          {
            question: 'Quel conflit régional constitue le contexte immédiat de l’embargo ?',
            answer: 'La guerre du Kippour, commencée le 6 octobre 1973.'
          },
          {
            question: 'Pourquoi la fin de l’embargo en mars 1974 n’a-t-elle pas fait revenir immédiatement les prix à leur niveau antérieur ?',
            answer: 'Parce que le marché avait été réorganisé autour de prix plus élevés et que les conditions structurelles, les coûts d’approvisionnement et les anticipations avaient changé.'
          }
        ],
        sources: [
          { title: 'Federal Reserve History — Oil Shock of 1973-74', url: 'https://www.federalreservehistory.org/essays/oil-shock-of-1973-74' },
          { title: 'U.S. Department of State, Office of the Historian — Oil Embargo, 1973-1974', url: 'https://history.state.gov/milestones/1969-1976/oil-embargo' },
          { title: 'U.S. Department of State — Foreign Relations of the United States, 1969-1976, volume XXXVI, document 223', url: 'https://history.state.gov/historicaldocuments/frus1969-76v36/d223' }
        ]
      }
    },
    {
      id: 'revolution-iranienne-et-choc-1979',
      title: 'La révolution iranienne, la guerre Iran-Irak et le contre-choc des années 1980 (1978-1986)',
      field: 'Histoire économique · Iran · Golfe persique · OPEP · 1978-1986',
      summary: 'Comprendre le second choc pétrolier, le rôle de la révolution iranienne et de la guerre Iran-Irak, puis le retournement du marché provoqué par le ralentissement de la demande, la progression de l’offre hors OPEP et le changement de stratégie saoudienne.',
      lesson: {
        sections: [
          'La seconde grande crise pétrolière des années 1970 se développe dans un marché déjà marqué par le premier choc. La révolution iranienne, engagée en 1978 et aboutissant au renversement du Shah au début de 1979, désorganise fortement la production et les exportations iraniennes. La Federal Reserve History rapporte une baisse de la production iranienne de 4,8 millions de barils par jour en janvier 1979, équivalant alors à environ 7 % de la production mondiale. Cette interruption est majeure, mais elle ne suffit pas à expliquer seule la hausse des cours : la demande mondiale reste soutenue et la crainte de nouvelles ruptures pousse certains acteurs à constituer des stocks de précaution.',
          'Les prix accélèrent au cours de 1979 et continuent de progresser jusqu’en 1980. La Federal Reserve History souligne que les prix ont plus que doublé entre avril 1979 et avril 1980. La demande de précaution joue un rôle important : lorsque les acheteurs redoutent une pénurie future, ils peuvent chercher à acheter plus tôt que prévu, ce qui renforce temporairement la tension sur le marché. Les pays producteurs voisins de l’Iran augmentent une partie de leur production, mais cette compensation ne neutralise pas instantanément l’incertitude ni les perturbations logistiques et politiques.',
          'En septembre 1980, la guerre entre l’Iran et l’Irak ouvre une nouvelle période de perturbations dans le Golfe. Les deux pays sont des producteurs importants et le conflit affecte les installations, les exportations et la perception du risque régional. Dans le même temps, les prix élevés des années précédentes encouragent les économies importatrices à réduire leur consommation de pétrole, à améliorer l’efficacité énergétique et à développer d’autres sources d’énergie. La production de pays non membres de l’OPEP, notamment en mer du Nord et en Amérique du Nord, progresse également. Le marché se transforme donc progressivement : la demande croît moins vite tandis que l’offre concurrente augmente.',
          'Au début des années 1980, l’OPEP tente de soutenir les prix en limitant sa production. L’Arabie saoudite joue le rôle de producteur d’ajustement, ou swing producer : elle réduit davantage sa propre production afin de compenser les dépassements de quotas d’autres membres et de défendre le niveau de prix visé. Cette stratégie devient de plus en plus coûteuse pour Riyad, dont la production recule fortement. En 1985, l’Arabie saoudite abandonne ce rôle et cherche à reconquérir des parts de marché. La hausse de sa production, associée à une offre mondiale abondante et à une demande affaiblie, contribue à l’effondrement des prix en 1986.',
          'Le contre-choc de 1986 montre qu’une crise pétrolière peut aussi prendre la forme d’une chute brutale des prix. Les pays importateurs bénéficient alors d’une facture énergétique allégée, tandis que les États producteurs fortement dépendants des recettes pétrolières subissent une contraction de leurs revenus budgétaires et extérieurs. Pour l’analyse, il faut distinguer la cause initiale de la hausse de 1979 — perturbation de l’offre et anticipations — des causes du retournement de 1985-1986 — demande moins dynamique, progression de l’offre non-OPEP et changement de stratégie des producteurs.'
        ],
        example: {
          statement: 'La production iranienne diminue de 4,8 millions de barils par jour en janvier 1979, ce qui représente environ 7 % de la production mondiale de l’époque. Quelle production mondiale approximative cela implique-t-il ?',
          calculation: 'Production mondiale approximative = 4,8 / 0,07 = 68,57 millions de barils par jour.',
          answer: 'L’ordre de grandeur implicite est d’environ 68,6 millions de barils par jour. Il s’agit d’une estimation obtenue à partir des deux chiffres arrondis rapportés par la Federal Reserve History, et non d’une mesure statistique indépendante.'
        },
        exercise: {
          question: 'Comment expliquer que le marché soit passé d’une forte hausse des prix à un effondrement en 1986 ?',
          answer: 'Les prix élevés ont favorisé les économies d’énergie, la substitution et l’augmentation de la production hors OPEP. La demande a perdu de son dynamisme, tandis que l’Arabie saoudite a abandonné son rôle de producteur d’ajustement et augmenté sa production pour regagner des parts de marché.'
        },
        exercises: [
          {
            question: 'Quel événement politique a provoqué la forte interruption initiale de la production iranienne ?',
            answer: 'La révolution iranienne de 1978-1979.'
          },
          {
            question: 'Que signifie l’expression « swing producer » dans le contexte de l’OPEP ?',
            answer: 'Un producteur qui ajuste sa propre production pour compenser les variations de l’offre des autres producteurs et contribuer à stabiliser le marché ou les prix.'
          },
          {
            question: 'Quel changement de stratégie saoudienne a contribué au contre-choc de 1986 ?',
            answer: 'L’abandon du rôle de producteur d’ajustement et la priorité donnée à la reconquête des parts de marché par une augmentation de la production.'
          }
        ],
        sources: [
          { title: 'Federal Reserve History — Oil Shock of 1978-79', url: 'https://www.federalreservehistory.org/essays/oil-shock-of-1978-79' },
          { title: 'U.S. Energy Information Administration — Oil (petroleum) timeline', url: 'https://www.eia.gov/kids/history-of-energy/timelines/oil-petroleum.php' },
          { title: 'U.S. Energy Information Administration — Short-Term Energy Outlook, 2nd Quarter 1986', url: 'https://www.eia.gov/outlooks/steo/archives/2Q86.pdf' },
          { title: 'International Monetary Fund — The Middle East and North Africa in a Changing Oil Market', url: 'https://www.elibrary.imf.org/display/book/9781589062344/ch01.xml' }
        ]
      }
    },
    {
      id: 'guerre-golfe-1990-1991',
      title: 'La crise du Golfe : invasion du Koweït et prime de risque géopolitique (1990-1991)',
      field: 'Histoire économique · Irak · Koweït · Marché pétrolier mondial · 1990-1991',
      summary: 'Analyser le choc de prix provoqué par l’invasion du Koweït, la mise hors marché des exportations irakiennes et koweïtiennes, la compensation par d’autres producteurs et la détente rapide des cours lorsque le scénario de pénurie généralisée s’éloigne.',
      lesson: {
        sections: [
          'Le 2 août 1990, l’Irak envahit le Koweït. La réaction internationale conduit à un embargo sur les exportations pétrolières des deux pays. Selon le Government Accountability Office des États-Unis, environ 4,3 millions de barils par jour de production combinée irakienne et koweïtienne sont alors retirés du marché, soit environ 9 % de la production quotidienne destinée aux économies de marché selon la mesure retenue dans son rapport. Cette perte physique est importante, mais son effet sur les prix dépend aussi des stocks commerciaux, des capacités de production disponibles dans d’autres pays et de la vitesse à laquelle ces volumes peuvent être mobilisés.',
          'Les prix du pétrole brut augmentent rapidement après l’invasion. Une analyse publiée par le Fonds monétaire international indique que le prix moyen passe d’environ 16 dollars le baril en juillet 1990 à plus de 38 dollars en octobre. Le marché intègre non seulement les exportations interrompues d’Irak et du Koweït, mais aussi le risque que le conflit s’étende à d’autres producteurs ou endommage des infrastructures supplémentaires. Cette prime de risque géopolitique peut faire monter les prix avant même qu’une pénurie physique plus large ne se matérialise.',
          'La hausse ne se prolonge pas au même rythme. D’autres producteurs augmentent leur production et contribuent à remplacer une partie des volumes perdus. Les stocks permettent également d’amortir temporairement le choc. En décembre 1990, le prix moyen cité par le FMI est revenu autour de 25,70 dollars le baril. Le 17 janvier 1991, au début des opérations militaires de la coalition, les prix enregistrent une forte baisse, les marchés estimant alors que les installations pétrolières situées hors d’Irak et du Koweït ne subiraient pas de dommages majeurs. Le risque anticipé se réduit donc plus vite que ne disparaissent toutes les conséquences matérielles du conflit.',
          'Cet épisode illustre la différence entre une interruption effective de l’offre et une anticipation de contagion régionale. Les cours peuvent intégrer une probabilité de rupture future, puis corriger rapidement lorsque les informations nouvelles réduisent cette probabilité. Il rappelle aussi que les stocks et les capacités inutilisées sont des amortisseurs essentiels : ils ne suppriment pas le choc, mais peuvent limiter sa durée et son ampleur. Pour un analyste, il est donc insuffisant de connaître le volume de production perdu ; il faut également mesurer la capacité de compensation du système pétrolier mondial.',
          'Sur le plan macroéconomique, une hausse rapide des prix de l’énergie renchérit les coûts des entreprises et le budget des ménages, particulièrement dans les pays importateurs. Elle peut aussi peser sur la confiance et les anticipations d’inflation. Toutefois, l’épisode de 1990-1991 est plus bref que les chocs des années 1970, précisément parce que les marchés disposent de mécanismes de remplacement et parce que le scénario d’une destruction durable des capacités pétrolières régionales ne se réalise pas à l’échelle redoutée.'
        ],
        example: {
          statement: 'Le prix moyen du pétrole passe d’environ 16 dollars le baril en juillet 1990 à plus de 38 dollars en octobre 1990. Quelle hausse minimale cela représente-t-il si l’on retient 38 dollars comme borne basse ?',
          calculation: 'Hausse minimale = ((38 - 16) / 16) × 100 = 137,5 %. Multiplicateur minimal = 38 / 16 = 2,375.',
          answer: 'La hausse est supérieure à 137,5 %, et le prix a été multiplié par plus de 2,375. Le calcul utilise 38 dollars comme borne basse, puisque la source indique un sommet supérieur à 38 dollars.'
        },
        exercise: {
          question: 'Pourquoi les prix ont-ils pu baisser fortement au début de la guerre de janvier 1991 alors que le conflit n’était pas terminé ?',
          answer: 'Parce que les marchés ont révisé à la baisse le risque d’une extension des destructions aux installations pétrolières situées hors d’Irak et du Koweït. Les anticipations de disponibilité future se sont améliorées, ce qui a réduit la prime de risque intégrée dans les prix.'
        },
        exercises: [
          {
            question: 'À quelle date l’Irak envahit-il le Koweït ?',
            answer: 'Le 2 août 1990.'
          },
          {
            question: 'Quel volume de production combinée irakienne et koweïtienne est donné comme interrompu dans le rapport du GAO ?',
            answer: 'Environ 4,3 millions de barils par jour.'
          },
          {
            question: 'Quel rôle jouent les stocks et les capacités de production disponibles chez les autres producteurs ?',
            answer: 'Ils permettent de compenser une partie des volumes indisponibles et peuvent limiter la durée de la tension sur les prix.'
          }
        ],
        sources: [
          { title: 'U.S. Energy Information Administration — Effects of crude oil supply disruptions: how long can they last?', url: 'https://www.eia.gov/Todayinenergy/detail.php?id=730' },
          { title: 'U.S. Government Accountability Office — Energy Security and Policy: Analysis of the Pricing of Crude Oil and Petroleum Products', url: 'https://www.gao.gov/assets/rced-93-17.pdf' },
          { title: 'International Monetary Fund — The World Economy, 1990', url: 'https://www.elibrary.imf.org/display/book/9781451944822/ch001.xml' }
        ]
      }
    },
    {
      id: 'choc-petrolier-2007-2009',
      title: 'Le supercycle pétrolier et l’effondrement de 2008 (2007-2009)',
      field: 'Économie internationale · Demande mondiale · Capacité de production · Crise financière · 2007-2009',
      summary: 'Étudier la forte progression des cours jusqu’à l’été 2008, liée à une demande mondiale dynamique face à une offre peu élastique à court terme, puis leur chute lors de la récession mondiale et de la contraction de la demande.',
      lesson: {
        sections: [
          'La hausse des prix qui précède le sommet de 2008 se distingue des chocs des années 1970. Elle ne résulte pas d’un embargo mondial comparable à celui de 1973, mais d’une confrontation entre une demande internationale vigoureuse et une offre qui peine à augmenter au même rythme. La croissance des économies émergentes, notamment en Asie, contribue à l’augmentation de la consommation. En parallèle, la capacité de production disponible à court terme est limitée et les nouvelles capacités demandent du temps et des investissements avant d’entrer en service. Dans un marché où l’offre et la demande réagissent lentement aux prix à court terme, de faibles déséquilibres peuvent entraîner de fortes variations.',
          'Selon le rapport annuel 2008 de la Réserve fédérale américaine, le WTI termine l’année 2007 autour de 95 dollars le baril et dépasse 145 dollars à la mi-juillet 2008. La Réserve fédérale relie cette progression à la vigueur de la demande, particulièrement dans les économies émergentes, et à la retenue de l’offre à court terme. Les stocks relativement faibles et les tensions géopolitiques renforcent la sensibilité du marché aux nouvelles. Le sommet observé en juillet ne doit pas être confondu avec une moyenne annuelle : il s’agit d’un prix spot du WTI à un moment précis.',
          'À partir de l’été 2008, la dynamique s’inverse. La crise financière internationale s’aggrave, le crédit se contracte et l’activité économique ralentit fortement. Les perspectives de consommation de carburants et de produits pétroliers sont révisées à la baisse. La demande diminue alors que l’offre ne peut pas s’ajuster instantanément. Le rapport de la Réserve fédérale indique que le prix spot du WTI perd environ 75 % entre son sommet de juillet et janvier 2009, pour revenir près de 40 dollars le baril. Les décisions de réduction de production de l’OPEP ne compensent pas immédiatement la chute de la demande.',
          'La séquence 2007-2009 révèle que les crises pétrolières ne sont pas nécessairement déclenchées par une guerre ou une fermeture de terminal. Un choc de demande peut provoquer une envolée lorsque la croissance mondiale dépasse les capacités disponibles, puis une chute lorsque l’activité se contracte brutalement. Il faut aussi éviter une explication monocausale : les tensions sur l’offre, les anticipations, les stocks, la demande émergente et les conditions financières interagissent. Les analyses de James D. Hamilton publiées par la Federal Reserve Bank of Atlanta soulignent le caractère principalement lié à la demande forte confrontée à une production mondiale stagnante dans la montée des prix de 2007-2008.',
          'Les conséquences économiques sont asymétriques dans le temps. Avant le retournement, les importateurs subissent une facture énergétique croissante, une pression sur le pouvoir d’achat et des coûts de production plus élevés. Après l’effondrement, les consommateurs et certaines industries bénéficient de prix plus faibles, mais les producteurs et les entreprises pétrolières voient leurs revenus, leurs investissements et parfois leur solvabilité fragilisés. La volatilité rend la planification des investissements difficile, car les projets pétroliers nécessitent souvent plusieurs années avant de produire.'
        ],
        example: {
          statement: 'Le WTI passe d’environ 95 dollars le baril à la fin de 2007 à plus de 145 dollars à la mi-juillet 2008. En prenant 145 dollars comme seuil minimal, quelle est la hausse minimale ?',
          calculation: 'Hausse minimale = ((145 - 95) / 95) × 100 = 52,63 %. Le multiplicateur minimal est 145 / 95 = 1,526.',
          answer: 'La hausse est supérieure à environ 52,6 %. Le calcul est une borne minimale puisque le cours a dépassé 145 dollars. Il concerne le WTI spot, pas le Brent ni une moyenne annuelle.'
        },
        exercise: {
          question: 'Pourquoi le prix du pétrole a-t-il pu monter fortement avant de s’effondrer en 2008 ?',
          answer: 'La hausse a été soutenue par une demande mondiale robuste confrontée à une offre peu élastique à court terme. La crise financière et la récession ont ensuite réduit les perspectives de consommation, provoquant une baisse rapide de la demande et des cours.'
        },
        exercises: [
          {
            question: 'Quel indice de référence est utilisé pour les prix cités par le rapport annuel 2008 de la Réserve fédérale ?',
            answer: 'Le West Texas Intermediate (WTI), un brut de référence américain.'
          },
          {
            question: 'Pourquoi une offre pétrolière peu élastique à court terme amplifie-t-elle les variations de prix ?',
            answer: 'Parce que les producteurs ne peuvent pas augmenter rapidement les volumes lorsque la demande accélère, ni réduire instantanément toute la production lorsque la demande chute.'
          },
          {
            question: 'Quel événement macroéconomique a contribué à la chute des cours après juillet 2008 ?',
            answer: 'L’aggravation de la crise financière mondiale et le ralentissement marqué de l’activité économique, qui ont réduit la demande de pétrole.'
          }
        ],
        sources: [
          { title: 'Board of Governors of the Federal Reserve System — 95th Annual Report, 2008, Monetary Policy Report of February 2009', url: 'https://www.federalreserve.gov/boarddocs/rptcongress/annual08/pdf/ar08.pdf' },
          { title: 'Federal Reserve Bank of Atlanta — Causes and Consequences of the Oil Shock of 2007-08', url: 'https://www.frbatlanta.org/-/media/documents/cqer/publications/workingpapers/cqerwp0902.pdf' },
          { title: 'National Bureau of Economic Research — Historical Oil Shocks, James D. Hamilton', url: 'https://www.nber.org/papers/w16790' }
        ]
      }
    },
    {
      id: 'chute-prix-petrole-2014-2016',
      title: 'La chute des prix de 2014-2016 : pétrole de schiste, surabondance et stratégie de l’OPEP',
      field: 'Économie de l’énergie · Pétrole de schiste · Offre mondiale · OPEP · 2014-2016',
      summary: 'Analyser la baisse prolongée des cours provoquée par la croissance de l’offre, notamment américaine, le ralentissement de la demande mondiale, la décision de l’OPEP de maintenir sa production et l’accumulation des stocks.',
      lesson: {
        sections: [
          'Au début de 2014, le marché pétrolier paraît relativement stable malgré des perturbations géopolitiques dans plusieurs pays producteurs. La hausse de la production américaine, notamment de pétrole de formations compactes — souvent désigné par l’expression tight oil — modifie progressivement l’équilibre du marché. Les techniques de forage horizontal et de fracturation hydraulique rendent économiquement exploitables des ressources auparavant difficiles d’accès. Cette progression de l’offre américaine permet de compenser certaines interruptions dans d’autres régions et augmente la quantité de pétrole disponible sur le marché international.',
          'À partir de l’été 2014, les cours baissent rapidement. L’EIA indique que le Brent atteint 115,06 dollars le baril le 19 juin 2014, puis clôture à 57,33 dollars le 31 décembre. La baisse d’environ 50 % au second semestre résulte de plusieurs facteurs combinés : croissance de la production américaine, retour d’une partie de la production libyenne, perturbations d’approvisionnement moins importantes que prévu, ralentissement des perspectives de croissance mondiale et maintien des niveaux de production de l’OPEP. Il serait donc inexact d’attribuer toute la baisse à une seule décision de l’OPEP ou au seul pétrole de schiste.',
          'La décision de l’OPEP de ne pas réduire immédiatement sa production lors de sa réunion de novembre 2014 est importante pour les anticipations du marché. Elle indique que l’organisation ne cherche pas à compenser intégralement la croissance de l’offre concurrente par une baisse de ses propres volumes. L’arbitrage porte notamment sur la défense des parts de marché et sur le coût d’une réduction de production qui profiterait aussi aux producteurs concurrents. Les stocks mondiaux augmentent lorsque la production dépasse durablement la consommation, ce qui prolonge la pression baissière sur les cours.',
          'En 2015, les prix restent faibles. L’EIA rapporte que le Brent spot moyen s’établit à environ 52 dollars le baril, soit 53 % de moins qu’en 2014, et que les cours terminent l’année sous 40 dollars. Les producteurs à coûts élevés sont particulièrement exposés : certains réduisent les investissements, reportent des projets ou ferment les installations les moins rentables. Les producteurs à coûts plus faibles peuvent mieux résister, mais les pays dont les budgets publics dépendent fortement des exportations pétrolières subissent une baisse des recettes fiscales et des entrées de devises.',
          'La période 2014-2016 est un cas d’école de crise d’excès d’offre. Elle rappelle qu’un prix bas ne signifie pas nécessairement que la demande s’effondre : la hausse de la production peut être le facteur dominant, tandis qu’un ralentissement de la demande accentue le déséquilibre. Elle montre également le rôle des anticipations sur la politique des grands producteurs, du dollar américain et des stocks. Pour comparer correctement les prix, il faut préciser le benchmark utilisé, la date, la fréquence de mesure et la nature du prix — spot, contrat à terme ou moyenne annuelle.'
        ],
        example: {
          statement: 'Le Brent front-month passe de 115,06 dollars le 19 juin 2014 à 57,33 dollars le 31 décembre 2014. Quel est le pourcentage de baisse ?',
          calculation: 'Baisse en pourcentage = ((115,06 - 57,33) / 115,06) × 100 = 50,17 %.',
          answer: 'Le Brent front-month a baissé d’environ 50,2 % entre ces deux dates, ce qui correspond à l’ordre de grandeur de 50 % indiqué par l’EIA pour le second semestre 2014.'
        },
        exercise: {
          question: 'Pourquoi la hausse de la production américaine a-t-elle contribué à la baisse des prix en 2014 ?',
          answer: 'Elle a ajouté des volumes importants à un marché déjà bien approvisionné, compensé certaines interruptions dans d’autres pays et contribué à faire dépasser l’offre mondiale par rapport à la demande. Le maintien de la production de l’OPEP a renforcé ce déséquilibre.'
        },
        exercises: [
          {
            question: 'Quel était le cours du Brent front-month le 19 juin 2014 selon l’EIA ?',
            answer: '115,06 dollars le baril.'
          },
          {
            question: 'Quel mécanisme de marché apparaît lorsque la production dépasse durablement la consommation ?',
            answer: 'Les stocks s’accumulent, ce qui augmente la disponibilité immédiate du pétrole et exerce généralement une pression à la baisse sur les prix.'
          },
          {
            question: 'Pourquoi les conséquences d’un prix bas diffèrent-elles selon les producteurs ?',
            answer: 'Parce que leurs coûts d’extraction, leur endettement, leur fiscalité, leurs besoins d’investissement et leur dépendance budgétaire aux recettes pétrolières ne sont pas identiques.'
          }
        ],
        sources: [
          { title: 'U.S. Energy Information Administration — Year in Review: Crude Oil Prices 2014', url: 'https://www.eia.gov/finance/review/annual/' },
          { title: 'U.S. Energy Information Administration — Lower demand, higher supply drive oil prices to lowest level since 2012', url: 'https://www.eia.gov/Todayinenergy/detail.php?id=18311' },
          { title: 'U.S. Energy Information Administration — Crude oil prices started 2015 relatively low, ended the year lower', url: 'https://www.eia.gov/TODAYinENERGY/detail.php?id=24432' },
          { title: 'European Central Bank — Economic Bulletin, Issue 2/2016, Box 2: Current oil price trends', url: 'https://www.ecb.europa.eu/press/economic-bulletin/html/eb201602.pt.html' },
          { title: 'U.S. Bureau of Labor Statistics — The 2014 plunge in import petroleum prices: What happened?', url: 'https://www.bls.gov/opub/btn/volume-4/the-2014-plunge-in-import-petroleum-prices-what-happened.htm' }
        ]
      }
    },
    {
      id: 'crise-petroliere-pandemie-ukraine-2020-2022',
      title: 'De l’effondrement de la demande en 2020 au choc géopolitique de 2022',
      field: 'Économie mondiale · Pandémie de COVID-19 · OPEP+ · Russie · Ukraine · 2020-2022',
      summary: 'Comparer deux chocs de nature différente : l’effondrement exceptionnel de la demande pendant la pandémie, puis la forte prime de risque géopolitique apparue après l’invasion russe de l’Ukraine, dans un marché déjà tendu.',
      lesson: {
        sections: [
          'En 2020, les restrictions de déplacement, la fermeture de nombreuses activités et le recul du transport aérien provoquent une chute exceptionnelle de la demande mondiale de pétrole. Les producteurs et les raffineries ne peuvent pas adapter instantanément leurs volumes à cette rupture. Les stocks augmentent rapidement, notamment dans les centres de stockage et de livraison. La crise est d’abord un choc de demande, même si les désaccords de production entre pays producteurs au début de mars 2020 compliquent temporairement l’ajustement de l’offre.',
          'Le 20 avril 2020, le contrat à terme WTI de première échéance passe en territoire négatif. L’EIA précise que ce prix concerne le contrat futures arrivant à échéance et non l’ensemble du pétrole physique dans le monde. La baisse de la demande, l’accumulation des stocks à Cushing dans l’Oklahoma et la disponibilité limitée de capacités de stockage contribuent à cette situation exceptionnelle. Le contrat concerné portait sur une livraison proche, ce qui rendait particulièrement coûteuse la détention d’une obligation de réception physique pour certains opérateurs. Le Brent reste, lui, positif et tombe à 9,12 dollars le baril le 21 avril 2020. Il faut donc éviter de résumer l’événement en affirmant que « le pétrole mondial a été vendu à prix négatif » : c’est une formulation trop générale et trompeuse.',
          'À partir du printemps 2020, les réductions de production décidées par les pays de l’OPEP et leurs partenaires, regroupés sous l’appellation OPEP+, contribuent à rééquilibrer le marché. La reprise progressive de la mobilité et de l’activité soutient ensuite la demande. La vitesse de redressement reste toutefois inégale selon les régions et les secteurs. Les stocks, les capacités de raffinage, les décisions de production et l’évolution de la pandémie influencent ensemble la trajectoire des prix. Cette phase démontre qu’un choc de demande peut créer une crise de stockage et de logistique, même lorsque les ressources pétrolières souterraines n’ont pas disparu.',
          'Le 24 février 2022, la Russie lance son invasion à grande échelle de l’Ukraine. La Russie occupe une place majeure dans l’offre et les exportations mondiales de pétrole. L’Agence internationale de l’énergie indique que, dans les premières heures suivant l’invasion, l’approvisionnement physique mondial n’avait pas encore subi de perte attribuable à l’événement, mais que les prix ont bondi en raison des anticipations de sanctions et de perturbations possibles des flux commerciaux. Cette distinction est fondamentale : les marchés peuvent réagir au risque d’une interruption avant que celle-ci ne soit constatée dans les volumes livrés.',
          'En 2022, le Brent spot affiche une moyenne annuelle d’environ 100 dollars le baril et le WTI d’environ 95 dollars selon l’EIA. Les cours augmentent nettement au premier semestre, dans un contexte de stocks mondiaux faibles, de reprise de la demande après les restrictions sanitaires et d’incertitude sur les exportations russes. Ils diminuent ensuite à partir de juin, lorsque les craintes de ralentissement économique pèsent sur la demande, que les mesures sanitaires en Chine limitent l’activité et que des volumes supplémentaires arrivent sur le marché, notamment grâce aux prélèvements dans les réserves stratégiques. La crise de 2022 combine donc risque géopolitique, tensions sur l’offre disponible, stocks réduits et inquiétudes sur la croissance.'
        ],
        example: {
          statement: 'Le Brent spot atteint 9,12 dollars le baril le 21 avril 2020, tandis que le contrat à terme WTI de première échéance a affiché un prix négatif le 20 avril. Pourquoi ces deux observations ne sont-elles pas contradictoires ?',
          calculation: 'Les deux chiffres concernent des références et des échéances différentes : Brent spot observé le 21 avril, d’une part, et contrat futures WTI de première échéance le 20 avril, d’autre part. Un prix négatif sur un contrat proche de son échéance ne signifie pas que tous les bruts physiques ont un prix négatif.',
          answer: 'Il n’y a pas de contradiction : le WTI futures de première échéance était soumis à une contrainte immédiate de livraison et de stockage à Cushing, tandis que le Brent est un autre benchmark et que le chiffre cité est un prix spot observé le lendemain.'
        },
        exercise: {
          question: 'Quelle différence fondamentale distingue le choc pétrolier de 2020 de celui de 2022 ?',
          answer: 'En 2020, la crise est principalement provoquée par l’effondrement de la demande lié à la pandémie et par la saturation des capacités de stockage. En 2022, la hausse des prix est largement alimentée par le risque géopolitique pesant sur les exportations russes, dans un marché déjà tendu et marqué par des stocks faibles.'
        },
        exercises: [
          {
            question: 'Quel événement explique principalement la chute de la demande pétrolière au premier semestre 2020 ?',
            answer: 'Les mesures sanitaires et les restrictions de mobilité prises face à la pandémie de COVID-19.'
          },
          {
            question: 'Pourquoi le prix négatif du WTI du 20 avril 2020 ne signifie-t-il pas que tout le pétrole mondial avait une valeur négative ?',
            answer: 'Il concernait un contrat à terme WTI de première échéance, proche de sa date d’expiration et associé à une livraison physique dans un lieu où les capacités de stockage disponibles étaient fortement contraintes.'
          },
          {
            question: 'Pourquoi les cours ont-ils augmenté après l’invasion russe de l’Ukraine en février 2022, même avant qu’une perte physique d’approvisionnement soit constatée ?',
            answer: 'Les opérateurs ont intégré le risque de sanctions, de refus d’achat et de perturbations futures des exportations russes, ce qui a augmenté la prime de risque géopolitique.'
          }
        ],
        sources: [
          { title: 'U.S. Energy Information Administration — Crude oil prices briefly traded below $0 in spring 2020', url: 'https://www.eia.gov/todayinenergy/detail.php?id=46336' },
          { title: 'OPEC — Monthly Oil Market Report, August 2020', url: 'https://www.opec.org/opec_web/static_files_project/media/downloads/publications/OPEC_MOMR_August-2020.pdf' },
          { title: 'International Energy Agency — Russian supplies to global energy markets: Oil Market and Russian Supply', url: 'https://www.iea.org/reports/russian-supplies-to-global-energy-markets/oil-market-and-russian-supply-2' },
          { title: 'U.S. Energy Information Administration — Crude oil prices rise above $100 per barrel after Russia’s further invasion into Ukraine', url: 'https://www.eia.gov/TodayinEnergy/detail.php?id=51498' },
          { title: 'U.S. Energy Information Administration — Crude oil prices increased in first-half 2022 and declined in second-half 2022', url: 'https://www.eia.gov/todayinenergy/detail.php?id=55079' },
          { title: 'International Energy Agency — Oil Market Report, March 2022', url: 'https://www.iea.org/reports/oil-market-report-march-2022' }
        ]
      }
    }
  ]
},

{
  id: 'croissance-pib',
  title: 'Croissance du PIB : mesure, moteurs, cycles et limites',
  note: 'Six chapitres approfondis pour comprendre ce que mesure le produit intérieur brut, comment sa croissance est calculée, quels facteurs la déterminent à court et à long terme, comment les cycles économiques et les politiques publiques l’influencent, et pourquoi le PIB ne résume pas le bien-être. Les définitions suivent principalement le Système de comptabilité nationale, le SEC 2010 et les méthodes des instituts statistiques. Les exemples chiffrés sont pédagogiques et ne décrivent pas une économie réelle.',
  chapters: [
    {
      id: 'definition-et-perimetre-du-pib',
      title: '1. Définition du PIB et périmètre de la production',
      field: 'Macroéconomie · Comptabilité nationale · Agrégats économiques',
      summary: 'Définir précisément le produit intérieur brut, distinguer production, revenu et richesse, comprendre les notions de territoire économique, de période et de production finale.',
      lesson: {
        sections: [
          'Le produit intérieur brut (PIB) est un agrégat de comptabilité nationale qui mesure la valeur de la production finale réalisée par les unités productrices résidentes sur un territoire économique pendant une période donnée. Il est généralement calculé sur une année ou un trimestre. Le terme « intérieur » renvoie au territoire économique et non à la nationalité des propriétaires des entreprises : la production d’une filiale étrangère implantée dans le pays entre dans le PIB de ce pays, tandis que la production d’une entreprise nationale réalisée dans une autre économie relève du PIB de cette autre économie. Le PIB est dit « brut » parce que la consommation de capital fixe, c’est-à-dire l’usure économique des équipements et bâtiments, n’en est pas déduite.',
          'Le PIB porte sur la production de biens et de services, et non sur la simple circulation de monnaie ou sur la totalité des transactions financières. Une vente d’un bien neuf produit pendant la période contribue à la production mesurée ; la revente d’un bien d’occasion ne constitue généralement pas une nouvelle production et n’est donc pas comptée une seconde fois. Les services associés à la transaction, comme une commission d’intermédiation, correspondent en revanche à une production de service. De même, l’achat d’une action existante est une transaction financière et non une production courante. Les transferts tels que les allocations sociales ne sont pas directement comptés comme production : ils redistribuent un revenu déjà créé. Les services non marchands des administrations publiques sont toutefois inclus, généralement évalués à partir de leurs coûts de production lorsque leur prix de marché n’existe pas.',
          'La distinction entre production intermédiaire et production finale évite le double comptage. Une entreprise qui vend de la farine à un boulanger fournit un bien intermédiaire ; le pain vendu au consommateur final incorpore déjà la valeur de la farine. Additionner le prix de la farine et le prix complet du pain compterait deux fois une partie de la production. La comptabilité nationale résout ce problème en additionnant les valeurs ajoutées : pour chaque producteur, la valeur ajoutée brute est égale à la valeur de la production diminuée des consommations intermédiaires. Le PIB aux prix du marché correspond à la somme des valeurs ajoutées brutes, augmentée des impôts sur les produits et diminuée des subventions sur les produits.',
          'Le PIB est un flux mesuré pendant une période, alors que le patrimoine est un stock évalué à une date. Une hausse du PIB signifie que le flux de production augmente en volume ou en valeur selon l’indicateur utilisé ; elle ne signifie pas automatiquement que le patrimoine net du pays progresse dans les mêmes proportions. Le PIB ne doit pas non plus être confondu avec le revenu national brut : ce dernier ajoute au PIB les revenus primaires nets reçus du reste du monde. Ces distinctions sont indispensables pour interpréter correctement les comparaisons économiques.'
        ],
        example: {
          statement: 'Une économie produit pendant une année 500 milliards d’euros de biens et services. Les consommations intermédiaires utilisées pour cette production valent 210 milliards d’euros et les impôts sur les produits nets des subventions valent 20 milliards d’euros. Quelle est la valeur du PIB aux prix du marché dans cet exemple simplifié ?',
          calculation: 'Valeur ajoutée totale = 500 - 210 = 290 milliards d’euros. PIB = valeur ajoutée totale + impôts sur les produits nets des subventions = 290 + 20.',
          answer: 'Le PIB est égal à 310 milliards d’euros. Le calcul soustrait les consommations intermédiaires pour éviter le double comptage, puis ajoute les impôts nets sur les produits pour passer aux prix du marché.'
        },
        exercise: {
          question: 'Pourquoi la valeur des consommations intermédiaires ne doit-elle pas être ajoutée une seconde fois à la valeur des biens finaux ?',
          answer: 'Parce que la valeur des intrants est déjà incorporée dans le prix des biens finaux. Additionner les ventes intermédiaires et les ventes finales sans correction conduirait à compter plusieurs fois une même production.'
        },
        exercises: [
          {
            question: 'La production d’une usine appartenant à un groupe étranger, mais située dans le pays, entre-t-elle dans le PIB de ce pays ?',
            answer: 'Oui. Le PIB repose sur le territoire économique où la production est réalisée, et non sur la nationalité de l’actionnaire.'
          },
          {
            question: 'La revente d’une voiture d’occasion est-elle intégralement comptée comme une nouvelle production ?',
            answer: 'Non. La voiture a été produite lors d’une période antérieure. Seuls les services nouveaux liés à la revente, comme une commission, constituent une production de la période.'
          },
          {
            question: 'Quelle différence fondamentale existe entre le PIB et le patrimoine ?',
            answer: 'Le PIB est un flux de production mesuré sur une période ; le patrimoine est un stock d’actifs et de passifs évalué à une date.'
          }
        ],
        sources: [
          { title: 'INSEE — Produit intérieur brut (PIB) et ses composantes', url: 'https://www.insee.fr/fr/statistiques/8605476' },
          { title: 'OCDE — Annual National Accounts: Frequently Asked Questions', url: 'https://www.oecd.org/en/data/insights/data-explainers/2024/03/annual-national-accounts-frequently-asked-questions.html' },
          { title: 'FMI — Gross Domestic Product: An Economy’s All', url: 'https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/gross-domestic-product-gdp' },
          { title: 'Eurostat — Gross domestic product (GDP)', url: 'https://ec.europa.eu/eurostat/web/european-statistics-learning-hub/statistics-for-beginners/gross-domestic-product' }
        ]
      }
    },
    {
      id: 'calcul-du-pib-trois-approches',
      title: '2. Calcul du PIB : production, dépenses et revenus',
      field: 'Macroéconomie · Comptabilité nationale · Identités comptables',
      summary: 'Maîtriser les trois approches équivalentes du PIB et comprendre la consommation, l’investissement, les dépenses publiques, les échanges extérieurs et les valeurs ajoutées.',
      lesson: {
        sections: [
          'La comptabilité nationale mesure le PIB selon trois approches conceptuellement équivalentes. L’approche par la production additionne les valeurs ajoutées brutes des unités productrices, puis ajoute les impôts sur les produits et retranche les subventions sur les produits. L’approche par les dépenses additionne les dépenses finales consacrées à la production intérieure. L’approche par les revenus additionne les revenus générés par la production : rémunérations des salariés, excédents d’exploitation, revenus mixtes et impôts nets liés à la production et aux importations. En pratique, les sources statistiques diffèrent et les estimations peuvent présenter des écarts provisoires ; les instituts statistiques procèdent alors à des rapprochements et à des ajustements.',
          'Dans l’approche par les dépenses, l’identité usuelle s’écrit : PIB = C + I + G + X - M. C représente la consommation finale des ménages et des institutions sans but lucratif au service des ménages ; I représente la formation brute de capital et les variations de stocks ; G représente la consommation finale des administrations publiques ; X désigne les exportations de biens et services ; M désigne les importations. Selon les présentations détaillées des comptes, la formation brute de capital inclut notamment la formation brute de capital fixe, les variations de stocks et les acquisitions nettes d’objets de valeur. Cette identité est une relation comptable, pas une théorie selon laquelle chaque dépense provoquerait mécaniquement une hausse identique de la production.',
          'Les importations sont soustraites parce que la consommation, l’investissement et les dépenses publiques peuvent porter sur des produits fabriqués à l’étranger. Leur valeur ne correspond pas à la production intérieure. Les exportations sont ajoutées car elles correspondent à une demande adressée à la production réalisée sur le territoire, même si l’acheteur est non-résident. Un déficit commercial ne signifie donc pas à lui seul que le PIB diminue : son effet dépend de l’évolution de toutes les composantes et de la production intérieure. De même, une hausse des importations peut accompagner une croissance vigoureuse lorsque les entreprises importent des machines ou lorsque les ménages consomment davantage.',
          'L’investissement au sens de la comptabilité nationale n’est pas l’achat d’actions ou d’obligations. Il désigne principalement l’acquisition d’actifs fixes produits, tels que bâtiments, machines, logiciels et certains actifs de propriété intellectuelle, ainsi que les variations de stocks. Il augmente ou renouvelle la capacité productive, mais son efficacité dépend de la qualité des projets, de leur utilisation et de leur rendement économique. La dépense publique incluse dans G correspond à la consommation finale des administrations publiques ; les transferts monétaires aux ménages ne sont pas directement ajoutés au PIB comme une production publique, même s’ils peuvent influencer la consommation privée.'
        ],
        example: {
          statement: 'Dans une économie simplifiée, la consommation finale vaut 600 milliards d’euros, l’investissement 180 milliards, la consommation publique 220 milliards, les exportations 150 milliards et les importations 170 milliards. Calculez le PIB par l’approche des dépenses.',
          calculation: 'PIB = C + I + G + X - M = 600 + 180 + 220 + 150 - 170.',
          answer: 'Le PIB est égal à 980 milliards d’euros. Les importations sont retranchées pour ne retenir que la production réalisée sur le territoire.'
        },
        exercise: {
          question: 'Pourquoi les importations sont-elles soustraites dans l’identité du PIB par les dépenses ?',
          answer: 'Parce que les importations peuvent déjà être incluses dans C, I ou G, alors qu’elles ne correspondent pas à une production intérieure. Leur soustraction permet de mesurer la production réalisée sur le territoire.'
        },
        exercises: [
          {
            question: 'L’achat d’une machine neuve produite dans le pays par une entreprise est-il compté dans l’investissement ?',
            answer: 'Oui. Il s’agit d’une formation brute de capital fixe, qui fait partie de l’investissement au sens des comptes nationaux.'
          },
          {
            question: 'L’achat d’une action déjà existante constitue-t-il une formation brute de capital fixe ?',
            answer: 'Non. Il s’agit d’une transaction financière portant sur un actif existant, et non de la production d’un actif fixe nouveau.'
          },
          {
            question: 'Les trois approches du PIB doivent-elles donner le même résultat en théorie ?',
            answer: 'Oui. Elles observent la même activité économique sous l’angle de la production, des dépenses finales et des revenus générés.'
          }
        ],
        sources: [
          { title: 'Eurostat — GDP and main components: annual data, methodology', url: 'https://ec.europa.eu/eurostat/cache/metadata/en/nama_10_gdp_esms.htm' },
          { title: 'OCDE — GDP and Non-financial Accounts', url: 'https://www.oecd.org/en/data/datasets/gdp-and-non-financial-accounts.html' },
          { title: 'Nations unies — System of National Accounts, chapter on measuring GDP', url: 'https://unstats.un.org/unsd/nationalaccount/RAdocs/2025SNA_CH20_V7_GC.pdf' },
          { title: 'INSEE — Contribution à la croissance du PIB', url: 'https://www.insee.fr/fr/metadonnees/definition/c1207' }
        ]
      }
    },
    {
      id: 'croissance-reelle-nominale-et-prix',
      title: '3. Croissance nominale, croissance réelle et effets des prix',
      field: 'Macroéconomie · Inflation · Comptes nationaux en volume',
      summary: 'Distinguer la hausse des prix de la hausse des quantités produites, calculer un taux de croissance et interpréter les déflateurs et les volumes chaînés.',
      lesson: {
        sections: [
          'Le PIB en valeur, ou PIB nominal, évalue la production aux prix de la période considérée. Il peut augmenter parce que les quantités produites progressent, parce que les prix augmentent, ou pour ces deux raisons à la fois. Pour mesurer l’évolution de l’activité productive indépendamment de la variation générale des prix, les statisticiens utilisent le PIB en volume, souvent appelé PIB réel. La croissance économique est habituellement commentée à partir du taux de variation du PIB en volume, et non de la seule variation du PIB nominal. Il faut toujours vérifier la série utilisée, son unité, sa période et son éventuelle correction des variations saisonnières.',
          'Le taux de croissance entre 2 périodes se calcule ainsi : taux de croissance = ((PIB de la période 2 / PIB de la période 1) - 1) × 100. Si le PIB en volume passe de 2 000 à 2 040 milliards d’euros, la croissance est de 2 %. Une hausse de 5 % du PIB nominal ne signifie donc pas nécessairement une croissance réelle de 5 %. Si les prix augmentent de 3 % et que les volumes progressent approximativement de 2 %, la hausse nominale avoisine 5,06 %, car les effets de prix et de volume se composent : 1,03 × 1,02 = 1,0506. L’addition des taux n’est qu’une approximation lorsque les taux sont faibles.',
          'Le déflateur du PIB est un indice de prix implicite qui relie le PIB nominal au PIB en volume. Sous une forme simplifiée, déflateur du PIB = PIB nominal / PIB réel × 100 lorsque l’indice de volume est exprimé avec une base 100 cohérente. Il couvre les prix de la production intérieure finale, ce qui le distingue de l’indice des prix à la consommation, lequel suit le prix d’un panier de consommation des ménages et inclut des biens importés. Les 2 indices répondent donc à des questions différentes et peuvent évoluer à des rythmes différents.',
          'Les comptes modernes utilisent souvent des volumes chaînés. Les pondérations de prix sont actualisées régulièrement afin de mieux refléter l’évolution de la structure de l’économie et des prix relatifs. Cette méthode évite certains biais des séries calculées durablement à prix fixes d’une année de base ancienne. En contrepartie, les composantes chaînées ne sont généralement pas additives : leur somme ne reconstitue pas nécessairement exactement le total, sauf dans des cas particuliers ou à l’année de référence. Les contributions à la croissance publiées par les instituts statistiques doivent donc être privilégiées plutôt que de recomposer naïvement le total à partir de niveaux chaînés.'
        ],
        example: {
          statement: 'Le PIB en volume passe de 2 000 milliards d’euros à 2 060 milliards d’euros entre 2 années. Calculez la croissance réelle. Dans le même temps, le PIB nominal augmente de 5 %.',
          calculation: 'Croissance réelle = ((2 060 / 2 000) - 1) × 100 = 3 %. L’écart entre la croissance nominale de 5 % et la croissance réelle de 3 % reflète principalement l’évolution des prix, avec une composition exacte qui dépend des indices utilisés.',
          answer: 'La croissance réelle est de 3 %. La hausse nominale de 5 % ne doit pas être interprétée comme une hausse de 5 % de la production en volume.'
        },
        exercise: {
          question: 'Une hausse du PIB nominal de 6 % prouve-t-elle que les quantités produites ont augmenté de 6 % ?',
          answer: 'Non. Une partie de la hausse peut provenir de l’augmentation des prix. Il faut examiner le PIB en volume pour isoler l’évolution de la production réelle.'
        },
        exercises: [
          {
            question: 'Un PIB en volume passe de 500 à 510 milliards d’euros. Quel est son taux de croissance ?',
            answer: '((510 / 500) - 1) × 100 = 2 %.'
          },
          {
            question: 'Le déflateur du PIB et l’indice des prix à la consommation mesurent-ils exactement le même panier ?',
            answer: 'Non. Le déflateur porte sur les prix de la production intérieure mesurée par le PIB, tandis que l’indice des prix à la consommation suit les prix d’un panier de consommation des ménages.'
          },
          {
            question: 'Pourquoi les composantes en volumes chaînés ne sont-elles pas toujours directement additives ?',
            answer: 'Parce que les pondérations de prix changent au fil du chaînage. La somme des composantes chaînées peut donc différer du total chaîné.'
          }
        ],
        sources: [
          { title: 'INSEE — Comptes nationaux : évolution en volume et en valeur', url: 'https://www.insee.fr/fr/metadonnees/source/serie/s1182' },
          { title: 'Eurostat — GDP metadata: units of measure and chain-linked volumes', url: 'https://ec.europa.eu/eurostat/cache/metadata/en/namq_10_gdp_esms.htm' },
          { title: 'FMI — Gross Domestic Product: real and nominal GDP', url: 'https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/gross-domestic-product-gdp' },
          { title: 'INSEE — Produit intérieur brut et ses composantes', url: 'https://www.insee.fr/fr/statistiques/8605476' }
        ]
      }
    },
    {
      id: 'moteurs-de-la-croissance-a-long-terme',
      title: '4. Les moteurs de la croissance à long terme',
      field: 'Macroéconomie · Croissance potentielle · Productivité et facteurs de production',
      summary: 'Analyser le rôle du travail, du capital, de la productivité globale des facteurs, du progrès technique, du capital humain et des institutions.',
      lesson: {
        sections: [
          'À long terme, la croissance du PIB dépend notamment de la quantité de travail mobilisée, du stock de capital productif et de l’efficacité avec laquelle ces facteurs sont combinés. Le travail peut augmenter avec la population active, le taux d’emploi, le nombre moyen d’heures travaillées ou les compétences. Le capital productif comprend les bâtiments, les machines, les infrastructures, les logiciels et d’autres actifs utilisés pour produire. L’investissement accroît ou renouvelle ce capital, mais son effet sur la production dépend des délais de mise en service, de l’entretien, de l’utilisation et de la qualité des projets. Une hausse du nombre d’heures travaillées peut accroître le PIB total sans augmenter nécessairement la production par heure.',
          'La productivité du travail mesure le volume de production rapporté au travail mobilisé. Elle est fréquemment mesurée par le PIB ou la valeur ajoutée en volume par heure travaillée. Elle peut progresser grâce à un équipement plus performant, une meilleure organisation, la formation, la spécialisation, l’innovation ou une réallocation des ressources vers des entreprises et des secteurs plus productifs. Elle ne mesure pas uniquement l’effort individuel des salariés : elle dépend également du capital, des technologies, de l’organisation et des intrants disponibles. Pour analyser le niveau de vie matériel, la productivité par heure est donc informative, mais elle doit être mise en regard du taux d’emploi, des heures travaillées par personne et de la répartition des revenus.',
          'La productivité globale des facteurs (PGF), appelée aussi productivité multifactorielle dans les publications de l’OCDE, mesure l’efficacité globale avec laquelle le travail et le capital sont combinés. Dans la comptabilité de la croissance, elle correspond à la part de la croissance de la production qui n’est pas expliquée par la variation mesurée des facteurs de production. Elle peut refléter le progrès technique, les améliorations de gestion, les changements organisationnels, les économies d’échelle, la diffusion des connaissances et la réallocation des ressources. Mais elle constitue aussi un résidu statistique : les erreurs de mesure, les facteurs omis et les hypothèses du modèle peuvent influencer son estimation. Il serait donc incorrect d’interpréter toute hausse de PGF comme une mesure pure et directe de l’innovation technologique.',
          'Le capital humain, les infrastructures, la qualité des institutions, la concurrence, la stabilité juridique, l’accès au financement, l’ouverture commerciale et la capacité d’innovation influencent les conditions dans lesquelles le travail et le capital produisent. L’éducation et la formation peuvent améliorer les compétences ; les infrastructures réduisent certains coûts de transport et de coordination ; des institutions fiables facilitent les contrats et l’investissement. Ces facteurs agissent souvent sur plusieurs années et leurs effets dépendent du contexte. Enfin, la croissance du PIB total doit être distinguée de celle du PIB par habitant : si la population augmente plus vite que la production, le PIB total peut croître alors que le PIB par habitant stagne ou diminue.'
        ],
        example: {
          statement: 'Une économie augmente ses heures travaillées de 1 %, son stock de services du capital de 2 % et sa productivité multifactorielle de 1 %. Dans un modèle pédagogique où les pondérations du travail et du capital sont respectivement de 60 % et 40 %, estimez la croissance expliquée par ces 3 contributions.',
          calculation: 'Contribution du travail = 1 % × 0,60 = 0,6 point. Contribution du capital = 2 % × 0,40 = 0,8 point. En ajoutant une croissance de PGF de 1 point, la croissance estimée est 0,6 + 0,8 + 1 = 2,4 %.',
          answer: 'La croissance estimée est de 2,4 %. Il s’agit d’une décomposition simplifiée de comptabilité de la croissance ; les pondérations et les mesures empiriques doivent être établies à partir des comptes et des données du pays étudié.'
        },
        exercise: {
          question: 'Pourquoi une hausse de la productivité du travail ne signifie-t-elle pas nécessairement que les salariés travaillent plus intensément ?',
          answer: 'Parce que la production par heure dépend aussi du capital disponible, des technologies, des compétences, de l’organisation, des intrants et de l’efficacité globale du processus de production.'
        },
        exercises: [
          {
            question: 'Quelle différence existe entre productivité du travail et productivité multifactorielle ?',
            answer: 'La productivité du travail rapporte la production au travail mobilisé. La productivité multifactorielle rapporte la production à un ensemble de facteurs, principalement le travail et le capital, et mesure leur efficacité combinée.'
          },
          {
            question: 'Le PIB total et le PIB par habitant peuvent-ils évoluer différemment ?',
            answer: 'Oui. Le PIB total peut augmenter plus lentement que la population, auquel cas le PIB par habitant peut diminuer.'
          },
          {
            question: 'La productivité multifactorielle est-elle une mesure directe et parfaite du progrès technique ?',
            answer: 'Non. C’est un résidu de comptabilité de la croissance qui peut refléter le progrès technique et l’efficacité, mais aussi des erreurs de mesure, des facteurs omis et des hypothèses statistiques.'
          }
        ],
        sources: [
          { title: 'OCDE — Labour productivity and utilisation', url: 'https://www.oecd.org/en/data/indicators/labour-productivity-and-utilisation.html' },
          { title: 'OCDE — Multifactor productivity', url: 'https://www.oecd.org/en/data/indicators/multifactor-productivity.html' },
          { title: 'OCDE — Productivity and economic growth, Compendium 2025', url: 'https://www.oecd.org/en/publications/oecd-compendium-of-productivity-indicators-2025_b024d9e1-en/full-report/productivity-and-economic-growth_f9b839d7.html' },
          { title: 'Banque mondiale — GDP per capita growth indicator', url: 'https://data.worldbank.org/indicator/NY.GDP.PCAP.KD.ZG' }
        ]
      }
    },
    {
      id: 'cycles-economiques-et-croissance-conjoncturelle',
      title: '5. Cycles économiques, croissance conjoncturelle et politiques publiques',
      field: 'Macroéconomie · Fluctuations · Politique budgétaire et monétaire',
      summary: 'Comprendre les variations de court terme du PIB, les phases du cycle, les écarts de production, les chocs et les mécanismes de transmission des politiques économiques.',
      lesson: {
        sections: [
          'La croissance observée varie autour d’une trajectoire de long terme. Les fluctuations de l’activité sont souvent décrites par les phases d’expansion, de ralentissement, de contraction et de reprise. Une expansion correspond à une progression de l’activité ; un ralentissement signifie que le taux de croissance baisse, sans que le PIB diminue nécessairement ; une contraction correspond à une baisse de l’activité en volume. Les définitions opérationnelles d’une récession peuvent varier selon les organismes : la règle médiatique de 2 trimestres consécutifs de baisse du PIB réel est un repère courant, mais elle ne constitue pas une définition universelle et suffisante de toutes les récessions. L’analyse doit tenir compte d’un ensemble d’indicateurs, de leur ampleur et de leur diffusion dans l’économie.',
          'La croissance effective dépend de la demande globale à court terme, mais aussi de l’offre disponible. Une baisse de la confiance peut conduire les ménages à différer certains achats et les entreprises à reporter leurs investissements. Une hausse des taux d’intérêt peut renchérir le crédit et réduire certaines dépenses sensibles au financement. À l’inverse, une demande extérieure plus forte peut soutenir les exportations. Des chocs d’offre, comme une rupture d’approvisionnement ou une hausse du coût de l’énergie, peuvent limiter la production et augmenter les prix. Les effets ne sont pas uniformes : ils dépendent de la situation financière des agents, de la structure productive, des anticipations et de la réaction des politiques économiques.',
          'La croissance potentielle désigne le rythme auquel une économie peut accroître sa production de manière soutenable à moyen terme, compte tenu de ses facteurs de production et de leur productivité, sans tensions inflationnistes persistantes liées à une demande excessivement forte. Elle n’est pas directement observable : elle est estimée à l’aide de méthodes statistiques et économiques, qui comportent une incertitude importante et peuvent être révisées. L’écart de production, ou output gap, compare le PIB effectif à une estimation du PIB potentiel. Un écart positif indique une activité supérieure à son potentiel estimé ; un écart négatif indique une activité inférieure. Cet indicateur ne doit pas être traité comme une mesure certaine ou directement observable.',
          'La politique monétaire agit notamment par les taux directeurs, les conditions de crédit, les anticipations et les prix d’actifs. Un resserrement monétaire vise généralement à réduire les pressions inflationnistes en modérant la demande, mais ses effets se transmettent avec des délais et varient selon les secteurs. La politique budgétaire agit par les dépenses publiques, les prélèvements et les transferts. Une hausse de dépenses ou une baisse d’impôts peut soutenir la demande, mais l’effet final dépend de la conjoncture, de la capacité productive, des importations, du financement et des réactions des agents. Les politiques structurelles, comme la formation, la concurrence, la recherche ou les infrastructures, cherchent plutôt à améliorer les capacités productives à moyen et long terme. Il faut distinguer ces mécanismes théoriques de l’évaluation empirique d’une mesure précise.'
        ],
        example: {
          statement: 'Le PIB réel d’un pays vaut 1 000 milliards d’euros au premier trimestre et 995 milliards au deuxième trimestre. Calculez la variation trimestrielle et qualifiez le mouvement observé.',
          calculation: 'Variation = ((995 / 1 000) - 1) × 100 = -0,5 %.',
          answer: 'Le PIB réel recule de 0,5 % sur le trimestre : il s’agit d’une contraction trimestrielle. Cette seule observation ne suffit pas à caractériser à elle seule l’ensemble du cycle ni à établir une définition complète de la récession.'
        },
        exercise: {
          question: 'Pourquoi une croissance plus faible ne signifie-t-elle pas nécessairement une baisse du PIB ?',
          answer: 'Parce qu’un ralentissement est une baisse du taux de croissance. Si le taux reste positif, le niveau du PIB continue d’augmenter, mais moins rapidement.'
        },
        exercises: [
          {
            question: 'Le PIB potentiel est-il directement observable dans les statistiques comme le PIB mesuré ?',
            answer: 'Non. Il s’agit d’une estimation construite à partir de méthodes économiques et statistiques, avec une incertitude et des révisions possibles.'
          },
          {
            question: 'Quel est l’objectif général d’un resserrement de la politique monétaire en période de pressions inflationnistes ?',
            answer: 'Modérer les conditions monétaires et la demande afin de réduire les pressions inflationnistes, en sachant que les effets se transmettent avec des délais.'
          },
          {
            question: 'Une politique de formation agit-elle exactement par le même canal qu’une baisse immédiate des impôts ?',
            answer: 'Non. Une baisse d’impôts peut soutenir la demande à court terme ; la formation vise principalement à améliorer les compétences et la capacité productive à plus long terme.'
          }
        ],
        sources: [
          { title: 'FMI — World Economic Outlook: concepts and analysis', url: 'https://www.imf.org/en/Publications/WEO' },
          { title: 'Banque centrale européenne — Monetary policy', url: 'https://www.ecb.europa.eu/mopo/html/index.en.html' },
          { title: 'OCDE — Economic Outlook', url: 'https://www.oecd.org/en/topics/economic-outlook.html' },
          { title: 'INSEE — Comptes nationaux trimestriels', url: 'https://www.insee.fr/fr/statistiques?debut=0&theme=30' }
        ]
      }
    },
    {
      id: 'comparaisons-limites-et-interpretation-du-pib',
      title: '6. Comparaisons internationales, limites du PIB et interprétation du niveau de vie',
      field: 'Économie du développement · Comparaisons internationales · Mesure du bien-être',
      summary: 'Comparer les économies sans confondre taille et niveau de vie, utiliser les parités de pouvoir d’achat et identifier ce que le PIB ne mesure pas.',
      lesson: {
        sections: [
          'Le PIB total renseigne sur la taille d’une économie, mais il ne suffit pas pour comparer le niveau de vie moyen. Le PIB par habitant rapporte le PIB à la population et constitue un indicateur moyen de production par personne. Il ne décrit toutefois ni la distribution des revenus, ni les inégalités de patrimoine, ni les différences de coût de la vie entre ménages. Une moyenne peut progresser alors que certains groupes voient leur situation stagner ou se dégrader. Pour étudier les conditions matérielles, il est utile de compléter le PIB par habitant avec le revenu disponible des ménages, la consommation réelle, les indicateurs de pauvreté, la distribution des revenus et l’accès aux services essentiels.',
          'Les comparaisons internationales en dollars ou en euros au taux de change du marché peuvent être trompeuses pour mesurer les volumes de biens et services accessibles dans chaque pays. Les parités de pouvoir d’achat (PPA) sont conçues pour comparer les niveaux de prix et convertir les agrégats dans une unité commune de pouvoir d’achat. Elles permettent de comparer plus utilement les volumes économiques et le PIB par habitant en volume entre pays, mais elles reposent sur des enquêtes de prix, des choix méthodologiques et des paniers représentatifs qui peuvent être difficiles à établir. Le taux de change du marché reste pertinent pour d’autres questions, notamment la capacité à acheter des biens échangés internationalement ou à rembourser une dette en devises.',
          'Le PIB présente des limites importantes comme indicateur de bien-être. Il ne mesure pas directement la santé, l’éducation, la sécurité, le temps libre, la qualité des relations sociales, la qualité démocratique ou la satisfaction de vie. Le travail domestique non rémunéré et une partie des activités bénévoles ne sont pas enregistrés comme production marchande, même si certaines productions non marchandes sont incluses selon les règles de la comptabilité nationale. Le PIB ne déduit pas automatiquement les dommages environnementaux ou l’épuisement de ressources naturelles associés à la production. Une catastrophe peut même être suivie de dépenses de reconstruction qui augmentent l’activité mesurée, sans que cela signifie que le bien-être s’est amélioré par rapport à la situation antérieure.',
          'Il est donc préférable d’utiliser le PIB comme un indicateur central de l’activité productive, et non comme une mesure exhaustive du progrès social. Pour une analyse complète, il faut l’associer à des indicateurs complémentaires : PIB par habitant en PPA, revenu disponible médian, pauvreté, inégalités, emploi, santé, éducation, empreinte carbone, qualité de l’environnement et comptes de patrimoine. Le choix des indicateurs dépend de la question posée. Pour mesurer la production, le PIB en volume est essentiel ; pour étudier le niveau de vie matériel, le revenu et la consommation des ménages sont utiles ; pour évaluer le développement humain et la soutenabilité, un tableau de bord multidimensionnel est nécessaire.'
        ],
        example: {
          statement: 'Le PIB d’un pays augmente de 4 % en volume alors que sa population augmente de 5 %. En utilisant une approximation simple, que devient le PIB réel par habitant ?',
          calculation: 'Facteur de croissance du PIB par habitant = 1,04 / 1,05 = 0,990476. Variation = (0,990476 - 1) × 100, soit environ -0,95 %.',
          answer: 'Le PIB réel par habitant diminue d’environ 0,95 %. Le PIB total progresse, mais moins vite que la population. Le calcul est une approximation fondée sur les taux fournis.'
        },
        exercise: {
          question: 'Pourquoi le PIB par habitant ne suffit-il pas à mesurer le bien-être de toute la population ?',
          answer: 'Parce qu’il s’agit d’une moyenne qui ne renseigne pas sur la répartition des revenus et qu’il ne mesure pas directement la santé, l’éducation, la sécurité, le temps libre ou la qualité de l’environnement.'
        },
        exercises: [
          {
            question: 'Quel est l’intérêt des parités de pouvoir d’achat pour comparer les PIB par habitant ?',
            answer: 'Elles corrigent les différences de niveaux de prix entre pays et permettent de comparer plus utilement les volumes de biens et services accessibles.'
          },
          {
            question: 'Une hausse du PIB après des dépenses de dépollution prouve-t-elle que l’environnement s’est amélioré ?',
            answer: 'Non. Les dépenses de dépollution peuvent contribuer à la production mesurée, mais le PIB ne résume pas l’état de l’environnement ni les dommages qui ont précédé ces dépenses.'
          },
          {
            question: 'Quel indicateur peut compléter le PIB pour examiner la répartition des ressources entre les ménages ?',
            answer: 'Le revenu disponible médian, les indicateurs de pauvreté et les mesures d’inégalités complètent utilement le PIB moyen par habitant.'
          }
        ],
        sources: [
          { title: 'OCDE — Measuring well-being and progress', url: 'https://www.oecd.org/en/topics/measuring-well-being-and-progress.html' },
          { title: 'OCDE — Economic Policy Making to Pursue Economic Welfare', url: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/05/economic-policy-making-to-pursue-economic-welfare_7a77b55b/ccc5634c-en.pdf' },
          { title: 'Banque mondiale — GDP per capita growth indicator', url: 'https://data.worldbank.org/indicator/NY.GDP.PCAP.KD.ZG' },
          { title: 'Eurostat — Purchasing power parities methodology', url: 'https://ec.europa.eu/eurostat/en/web/purchasing-power-parities/methodology' }
        ]
      }
    }
  ]
},

{
  id: 'semi-conducteurs',
  title: 'Semi-conducteurs : physique, conception, fabrication et industrie mondiale',
  note: 'Six chapitres approfondis consacrés aux matériaux semi-conducteurs, aux composants et architectures électroniques, à la conception des puces, aux procédés de fabrication, au packaging et aux tests, puis à l’économie et à la chaîne de valeur mondiale. Les exemples numériques sont pédagogiques. Les dimensions dites nanométriques correspondent à des générations technologiques et ne désignent pas nécessairement une dimension physique unique du transistor.',
  chapters: [
    {
      id: 'physique-materiaux-semi-conducteurs',
      title: '1. Physique des semi-conducteurs et matériaux',
      field: 'Électronique · Physique du solide · Matériaux semi-conducteurs',
      summary: 'Comprendre la conductivité contrôlable des semi-conducteurs, les bandes d’énergie, les porteurs de charge, le dopage et les principaux matériaux utilisés dans l’industrie.',
      lesson: {
        sections: [
          'Un semi-conducteur est un matériau dont la conductivité électrique peut être contrôlée et modifiée par sa composition, sa température, son éclairage ou les champs électriques appliqués. Il se distingue d’un conducteur, qui laisse circuler les charges relativement facilement, et d’un isolant, dans lequel leur transport est fortement limité dans les conditions ordinaires. Le silicium cristallin est le matériau de base le plus répandu pour les circuits intégrés, notamment parce qu’il forme un oxyde de bonne qualité, possède des propriétés électriques maîtrisables et bénéficie d’une filière industrielle extrêmement développée. Les semi-conducteurs ne sont donc pas simplement des matériaux « entre » conducteurs et isolants : leur intérêt industriel vient surtout de la possibilité de contrôler finement leur comportement électrique.',
          'Dans un solide, les électrons occupent des états d’énergie organisés en bandes. La bande de valence contient les états électroniques liés aux liaisons du matériau, tandis que la bande de conduction contient des états dans lesquels les électrons peuvent contribuer au transport électrique. L’intervalle énergétique entre ces bandes est appelé bande interdite, ou band gap. Dans un semi-conducteur, cet intervalle permet de contrôler la population de porteurs disponibles. Lorsqu’un électron acquiert suffisamment d’énergie pour rejoindre la bande de conduction, il laisse derrière lui un trou dans la bande de valence. Électrons et trous sont les deux types de porteurs de charge mobiles considérés dans le modèle usuel. La température, la lumière et le dopage influencent leur concentration et donc la conductivité.',
          'Le dopage consiste à introduire volontairement une faible quantité d’atomes étrangers dans le cristal afin de modifier la concentration de porteurs. Dans le silicium, des dopants donneurs comme le phosphore apportent des électrons supplémentaires et produisent un matériau de type n. Des dopants accepteurs comme le bore favorisent la présence de trous et produisent un matériau de type p. Les régions de type p et n peuvent être mises en contact pour former une jonction p-n, élément fondamental de nombreuses diodes et structures de transistors. Le dopage doit être contrôlé avec précision : sa concentration, sa profondeur et sa distribution influencent la tension de seuil, les courants de fuite, la résistance et la tenue en tension des dispositifs.',
          'Le silicium domine la microélectronique numérique, mais il n’est pas le seul matériau utilisé. L’arséniure de gallium et d’autres composés III-V sont employés dans certaines applications optoélectroniques et radiofréquences grâce à leurs propriétés électroniques et optiques. Le carbure de silicium (SiC) et le nitrure de gallium (GaN) sont des semi-conducteurs à large bande interdite particulièrement intéressants pour l’électronique de puissance, où ils peuvent permettre des composants adaptés à des tensions, fréquences ou températures élevées selon leur conception. Le choix d’un matériau dépend donc de l’application, du coût, du rendement de fabrication, de la fiabilité et de la maturité de la filière, et non d’un classement universel où un matériau serait toujours supérieur aux autres.'
        ],
        example: {
          statement: 'Un matériau de silicium est dopé au phosphore. Quel type de semi-conducteur obtient-on et quel porteur devient majoritaire dans le modèle usuel ?',
          calculation: 'Le phosphore possède un électron de valence de plus que le silicium. Dans le cristal, il agit comme dopant donneur. Le dopage augmente la concentration d’électrons disponibles pour la conduction.',
          answer: 'On obtient un semi-conducteur de type n. Les électrons sont les porteurs majoritaires et les trous restent des porteurs minoritaires.'
        },
        exercise: {
          question: 'Quelle est la fonction du dopage dans un semi-conducteur ?',
          answer: 'Le dopage modifie de manière contrôlée la concentration de porteurs de charge afin d’ajuster les propriétés électriques du matériau et de réaliser des régions de type n ou p.'
        },
        exercises: [
          {
            question: 'Comment appelle-t-on l’intervalle énergétique séparant la bande de valence de la bande de conduction ?',
            answer: 'La bande interdite, également appelée band gap.'
          },
          {
            question: 'Quel type de dopage le bore produit-il généralement dans le silicium ?',
            answer: 'Un dopage de type p, dans lequel les trous sont les porteurs majoritaires.'
          },
          {
            question: 'Pourquoi le SiC et le GaN sont-ils utilisés dans certaines applications de puissance ?',
            answer: 'Ce sont des matériaux à large bande interdite qui peuvent convenir à des composants de puissance fonctionnant à des tensions, fréquences ou températures élevées, selon leur architecture et leurs conditions d’utilisation.'
          }
        ],
        sources: [
          { title: 'Semiconductor Industry Association — What are Semiconductors?', url: 'https://www.semiconductors.org/semiconductors-101/what-are-semiconductors/' },
          { title: 'U.S. Department of Energy — Power Electronics Research and Development', url: 'https://www.energy.gov/cmei/vehicles/power-electronics-research-and-development' },
          { title: 'ARPA-E — Properties of silicon and wide-bandgap semiconductors', url: 'https://arpa-e-foa.energy.gov/FileContent.aspx?FileID=c31a63a3-a094-4992-ad9d-3bb77e0d7acf' }
        ]
      }
    },
    {
      id: 'transistors-circuits-integres-architectures',
      title: '2. Transistors, circuits intégrés et architectures électroniques',
      field: 'Microélectronique · Composants · Architectures logiques et mémoire',
      summary: 'Étudier le transistor comme élément de commutation ou d’amplification, les technologies MOSFET et CMOS, ainsi que les grandes familles de puces logiques, mémoire, analogiques et de puissance.',
      lesson: {
        sections: [
          'Le transistor est un composant semi-conducteur qui permet de contrôler un courant électrique à l’aide d’un signal. Selon sa structure et son régime de fonctionnement, il peut servir d’interrupteur électronique ou d’élément d’amplification. Dans les circuits numériques, les transistors sont principalement utilisés pour représenter et manipuler des états logiques. L’intégration de très nombreux transistors sur une même puce permet de réaliser des processeurs, des mémoires, des contrôleurs et des circuits spécialisés. Un circuit intégré associe des composants actifs, des éléments passifs et des interconnexions fabriqués sur un substrat commun, généralement à partir d’un wafer de silicium.',
          'Le transistor MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) contrôle la conduction dans un canal au moyen d’un champ électrique appliqué par la grille. Dans un MOSFET à canal n, une tension de grille appropriée peut créer ou renforcer un canal conducteur entre la source et le drain. Les dispositifs à canal p utilisent une polarité et des porteurs différents. La technologie CMOS associe des transistors MOS à canal n et à canal p dans une même logique complémentaire. Dans de nombreuses portes logiques CMOS, cette complémentarité permet une faible consommation statique idéale, même si les circuits réels consomment de l’énergie lors des commutations, à cause notamment de la charge des capacités et des courants non idéaux.',
          'Les puces logiques réalisent des opérations de calcul, de contrôle et de traitement de données. Les processeurs centraux (CPU) sont conçus pour exécuter une grande variété d’instructions ; les processeurs graphiques (GPU) comportent de nombreuses unités adaptées au traitement parallèle ; les accélérateurs spécialisés, dont certains ASIC, sont optimisés pour des tâches ciblées. Les FPGA offrent une logique configurable après fabrication. Les microcontrôleurs réunissent généralement un cœur de calcul, de la mémoire et des périphériques sur une même puce. Ces catégories ne sont pas interchangeables : leur intérêt dépend des charges de travail, des contraintes de puissance, de latence, de coût et de flexibilité.',
          'Les mémoires se distinguent notamment par leur vitesse, leur densité, leur coût par bit et leur capacité à conserver les données sans alimentation. La DRAM stocke les bits dans des cellules qui nécessitent un rafraîchissement périodique ; elle est largement utilisée comme mémoire principale. La SRAM conserve son état tant qu’elle est alimentée et sert notamment aux caches, mais elle occupe généralement davantage de surface par bit. La mémoire NAND flash est non volatile et est utilisée dans les SSD et de nombreux appareils. Les circuits analogiques traitent des signaux continus, par exemple pour amplifier, filtrer ou convertir des signaux. Les composants de puissance commandent ou convertissent l’énergie électrique, tandis que les capteurs et composants optoélectroniques assurent l’interface avec le monde physique.'
        ],
        example: {
          statement: 'Un appareil électronique doit exécuter un système d’exploitation, conserver temporairement les données utilisées et stocker des fichiers même lorsqu’il est éteint. Associez une famille de mémoire à chaque fonction.',
          calculation: 'La mémoire principale de travail est généralement réalisée en DRAM. Les caches proches du processeur utilisent souvent de la SRAM. Le stockage persistant peut utiliser de la NAND flash.',
          answer: 'La DRAM sert généralement de mémoire principale, la SRAM de mémoire cache rapide et la NAND flash de stockage non volatil. Les choix exacts dépendent de l’architecture de l’appareil.'
        },
        exercise: {
          question: 'Pourquoi la technologie CMOS est-elle largement utilisée dans les circuits numériques ?',
          answer: 'Parce que l’association complémentaire de transistors nMOS et pMOS permet de réaliser des fonctions logiques avec une faible consommation statique idéale et une bonne densité d’intégration.'
        },
        exercises: [
          {
            question: 'Quelle est la fonction générale d’un transistor dans un circuit électronique ?',
            answer: 'Il contrôle un courant électrique et peut notamment servir d’interrupteur ou d’élément d’amplification.'
          },
          {
            question: 'Quelle différence essentielle existe entre DRAM et NAND flash concernant la conservation des données ?',
            answer: 'La DRAM est volatile et perd son contenu lorsque l’alimentation est coupée ; la NAND flash est non volatile et conserve les données sans alimentation.'
          },
          {
            question: 'À quoi sert principalement un circuit analogique ?',
            answer: 'À traiter des signaux continus, par exemple en les amplifiant, filtrant ou convertissant.'
          }
        ],
        sources: [
          { title: 'IEEE Technology Navigator — CMOS Technology', url: 'https://technav.ieee.org/topic/cmos-technology/' },
          { title: 'Semiconductor Industry Association — What are Semiconductors?', url: 'https://www.semiconductors.org/semiconductors-101/what-are-semiconductors/' },
          { title: 'Semiconductor Industry Association — Semiconductor product taxonomy', url: 'https://www.semiconductors.org/wp-content/uploads/2025/05/SIA-Comments-Section-232-Investigation.pdf' }
        ]
      }
    },
    {
      id: 'conception-puces-modeles-industriels',
      title: '3. Conception des puces et modèles industriels',
      field: 'Conception électronique · EDA · Propriété intellectuelle · Organisation industrielle',
      summary: 'Décrire les étapes de conception d’un circuit, les outils EDA, la vérification, les blocs IP et les différences entre entreprises fabless, fondeurs et fabricants intégrés.',
      lesson: {
        sections: [
          'La conception d’une puce commence par la définition d’un besoin : fonction attendue, performances, consommation électrique, coût, dimensions, conditions thermiques et exigences de fiabilité. Les architectes définissent ensuite les grands blocs fonctionnels et leurs interactions. Les concepteurs décrivent la logique, réalisent la conception des circuits, puis transforment cette description en une implantation physique comprenant les transistors, les cellules, les connexions et les contraintes de fabrication. Le travail doit intégrer très tôt le boîtier et les interfaces avec le système final : une puce performante isolément peut être limitée par sa mémoire, son alimentation, son refroidissement ou ses connexions.',
          'Les outils EDA (Electronic Design Automation) assistent la conception, la simulation, la vérification et la préparation des données nécessaires à la fabrication. Ils couvrent notamment la saisie ou la description matérielle, la synthèse logique, le placement des cellules, le routage des interconnexions, l’analyse temporelle et la vérification des règles de conception. La vérification fonctionnelle cherche à déterminer si le circuit se comporte conformément à ses spécifications ; l’analyse temporelle vérifie que les signaux respectent les contraintes de synchronisation ; les contrôles physiques vérifient que le dessin est compatible avec les règles du procédé. Les erreurs découvertes après fabrication peuvent être extrêmement coûteuses, car une nouvelle version de masque et une nouvelle campagne de fabrication peuvent être nécessaires.',
          'Les blocs de propriété intellectuelle, ou IP cores, sont des éléments de conception réutilisables : interfaces, contrôleurs, cœurs de processeur ou autres fonctions. Leur réutilisation peut réduire le temps de développement, mais elle impose de vérifier leur compatibilité, leurs licences, leur sécurité, leur consommation et leur comportement dans le système complet. Les masques photolithographiques traduisent ensuite les motifs du circuit en dessins qui seront transférés sur les wafers. Les conceptions les plus avancées exigent des équipes spécialisées, des outils logiciels complexes, des bibliothèques de cellules et une coordination étroite avec le fabricant qui maîtrise le procédé choisi.',
          'L’industrie utilise plusieurs modèles d’entreprise. Une société fabless conçoit et commercialise ses puces sans exploiter elle-même les usines de fabrication principales ; elle sous-traite la fabrication à des fondeurs. Un foundry ou fondeur fabrique des circuits pour des clients externes. Une entreprise IDM (Integrated Device Manufacturer) conçoit et fabrique tout ou partie de ses produits dans ses propres installations, même si les modèles réels peuvent inclure des sous-traitances. Les entreprises OSAT (Outsourced Semiconductor Assembly and Test) se spécialisent dans l’assemblage, le packaging et les tests externalisés. Ces modèles répartissent les investissements, les compétences et les risques différemment, et structurent la chaîne de valeur mondiale.'
        ],
        example: {
          statement: 'Une jeune entreprise conçoit un processeur spécialisé mais ne possède aucune usine de fabrication. Elle confie la production des wafers à un fabricant spécialisé, puis fait assembler et tester les puces par un prestataire. Quel modèle industriel décrit cette organisation ?',
          calculation: 'L’entreprise conserve la conception et la commercialisation du produit. La fabrication des wafers est réalisée par un fondeur et les opérations de fin de chaîne sont confiées à un prestataire d’assemblage et de test.',
          answer: 'Il s’agit d’un modèle fabless associé à un fondeur et à un prestataire OSAT. Cette organisation sépare conception, fabrication front-end et assemblage/test.'
        },
        exercise: {
          question: 'Quelle différence principale existe entre une entreprise fabless et un fondeur ?',
          answer: 'Une entreprise fabless conçoit et commercialise des puces sans exploiter nécessairement ses propres usines de fabrication ; un fondeur fabrique des puces pour le compte de clients.'
        },
        exercises: [
          {
            question: 'À quoi servent les outils EDA ?',
            answer: 'Ils assistent la conception, la simulation, la vérification, le placement, le routage et la préparation des circuits intégrés pour la fabrication.'
          },
          {
            question: 'Pourquoi la vérification intervient-elle avant la fabrication ?',
            answer: 'Elle permet de détecter les erreurs fonctionnelles, temporelles et physiques avant une étape de production coûteuse et difficile à corriger.'
          },
          {
            question: 'Que signifie OSAT dans la chaîne de valeur des semi-conducteurs ?',
            answer: 'Outsourced Semiconductor Assembly and Test : prestataire spécialisé dans l’assemblage, le packaging et les tests externalisés.'
          }
        ],
        sources: [
          { title: 'Semiconductor Industry Association — Stage 2: Chip Design', url: 'https://www.semiconductors.org/semiconductors-101/how-are-semiconductors-made/stage-2-chip-design/' },
          { title: 'Semiconductor Industry Association — How are Semiconductors Made?', url: 'https://www.semiconductors.org/semiconductors-101/how-are-semiconductors-made/' },
          { title: 'OECD — Semiconductors', url: 'https://www.oecd.org/en/topics/semiconductors.html' }
        ]
      }
    },
    {
      id: 'fabrication-wafers-lithographie-procedes',
      title: '4. Fabrication : wafers, lithographie et procédés industriels',
      field: 'Microfabrication · Lithographie · Dépôt · Gravure · Contrôle des procédés',
      summary: 'Suivre la fabrication d’un circuit sur wafer, comprendre les opérations répétées de dépôt, lithographie, gravure et dopage, ainsi que le contrôle des défauts et du rendement.',
      lesson: {
        sections: [
          'La fabrication front-end commence avec un wafer, disque mince de matériau semi-conducteur, le plus souvent du silicium monocristallin pour les circuits intégrés conventionnels. La surface doit être préparée avec une propreté et une planéité extrêmement élevées. Les wafers passent ensuite par une succession de traitements physiques et chimiques réalisés dans des salles blanches où les particules, la température, l’humidité et les vibrations sont contrôlées. La fabrication complète comporte de nombreuses étapes répétées pour former les régions actives, les isolants, les grilles, les contacts et les interconnexions métalliques. Le procédé exact varie selon le type de puce et la technologie du fabricant.',
          'La lithographie transfère un motif sur une couche photosensible déposée sur le wafer. Un système optique projette l’image d’un masque ou réticule sur la résine, qui est ensuite développée afin de faire apparaître les zones à traiter. La gravure retire sélectivement une partie des matériaux exposés, tandis que les dépôts ajoutent des couches conductrices, isolantes ou semi-conductrices. Le dopage peut être réalisé notamment par implantation ionique et traitements thermiques qui permettent d’obtenir les propriétés électriques recherchées. La planarisation mécano-chimique (CMP) sert à rendre certaines surfaces suffisamment planes pour les étapes suivantes. Nettoyage, métrologie et inspection interviennent régulièrement pour maîtriser la contamination et les variations du procédé.',
          'La lithographie DUV utilise des longueurs d’onde ultraviolettes profondes ; la lithographie EUV utilise un rayonnement ultraviolet extrême de longueur d’onde beaucoup plus courte, autour de 13,5 nm. L’EUV permet de former certains motifs très fins avec une stratégie de fabrication adaptée, mais elle exige des équipements complexes, des optiques réfléchissantes et un environnement sous vide sur le trajet optique. Elle ne remplace pas toutes les autres techniques : les différentes couches d’une puce peuvent utiliser des procédés lithographiques distincts en fonction de leurs dimensions et de leurs exigences. Les noms commerciaux des générations technologiques, exprimés en nanomètres, ne doivent pas être interprétés comme une mesure unique et directe de la longueur de grille ou de toutes les dimensions physiques d’un transistor.',
          'Le contrôle du procédé est essentiel car une particule, une variation d’épaisseur, un défaut d’alignement ou une imperfection de gravure peut rendre une zone de la puce inutilisable. Le rendement de fabrication, ou yield, désigne la proportion de dies fonctionnels obtenus parmi ceux fabriqués ou testés, selon la définition retenue. Il dépend de la densité et de la nature des défauts, de la taille des dies, de la maturité du procédé et des critères de test. Un grand wafer ne garantit pas automatiquement un meilleur rendement par puce : la taille du die, la disposition des défauts et la complexité du produit comptent également. L’amélioration du rendement est un enjeu majeur de coût, de capacité industrielle et de compétitivité.'
        ],
        example: {
          statement: 'Un wafer contient 600 dies théoriquement fabricables. Après découpe et test, 510 dies répondent aux critères fonctionnels retenus. Quel est le rendement fonctionnel observé dans cet exemple ?',
          calculation: 'Rendement = (nombre de dies fonctionnels / nombre de dies théoriquement fabricables) × 100 = (510 / 600) × 100.',
          answer: 'Le rendement observé est de 85 %. Ce calcul simplifié suppose que les 600 dies constituent bien le dénominateur pertinent et que les critères de test sont identiques pour tous.'
        },
        exercise: {
          question: 'Quel est le rôle de la lithographie dans la fabrication d’un circuit intégré ?',
          answer: 'Elle transfère des motifs définis par le dessin du circuit sur une couche photosensible du wafer, afin de délimiter les zones qui seront ensuite traitées.'
        },
        exercises: [
          {
            question: 'Quelle différence générale existe entre dépôt et gravure ?',
            answer: 'Le dépôt ajoute une couche de matériau sur le wafer ; la gravure retire sélectivement de la matière pour former les motifs souhaités.'
          },
          {
            question: 'Pourquoi les salles blanches sont-elles indispensables ?',
            answer: 'Elles limitent les particules et contaminants susceptibles de provoquer des défauts dans des structures de dimensions très réduites.'
          },
          {
            question: 'Le nombre inscrit dans le nom d’un nœud technologique correspond-il toujours à une dimension physique unique du transistor ?',
            answer: 'Non. Il s’agit d’une appellation de génération technologique ; elle ne correspond pas nécessairement à une seule dimension physique mesurable du transistor.'
          }
        ],
        sources: [
          { title: 'ASML — How microchips are made', url: 'https://www.asml.com/en/technology/all-about-microchips/how-microchips-are-made' },
          { title: 'ASML — Lithography principles', url: 'https://www.asml.com/en/technology/lithography-principles' },
          { title: 'NIST — Final Programmatic Environmental Assessment for Semiconductor Fabs', url: 'https://www.nist.gov/system/files/documents/2024/06/28/Final%20PEA%20for%20Modernization%20and%20Expansion%20of%20Semiconductor%20Fabs%206-28-2024%20-%20OGC-508C.pdf' },
          { title: 'Semiconductor Industry Association — How are Semiconductors Made?', url: 'https://www.semiconductors.org/semiconductors-101/how-are-semiconductors-made/' }
        ]
      }
    },
    {
      id: 'packaging-tests-memoire-fiabilite',
      title: '5. Packaging avancé, mémoire, tests et fiabilité',
      field: 'Assemblage électronique · Packaging avancé · Test · Fiabilité thermique et électrique',
      summary: 'Comprendre les opérations après fabrication du wafer, le rôle du boîtier, les architectures multi-puces, les mémoires à large bande passante et les contrôles de fiabilité.',
      lesson: {
        sections: [
          'Après la fabrication front-end, le wafer est soumis à des contrôles électriques, puis les dies sont séparés par découpe. Les puces sélectionnées sont assemblées dans un boîtier qui assure leur protection mécanique, leur connexion électrique au système et une partie de la gestion thermique. Le packaging n’est pas une simple enveloppe : il influence les performances, la consommation, la dissipation de chaleur, la taille et le coût du composant. Les connexions peuvent utiliser des fils métalliques, des bosses de connexion ou d’autres technologies d’interconnexion. Les choix dépendent du nombre de connexions, de la fréquence, de la puissance dissipée, de la fiabilité et du coût de production.',
          'Le packaging avancé regroupe plusieurs approches permettant de rapprocher ou d’intégrer plusieurs dies. Les architectures 2.5D utilisent notamment un interposeur ou une structure d’interconnexion dense pour relier plusieurs composants dans un même ensemble. Les empilements 3D placent des dies les uns au-dessus des autres et utilisent des connexions verticales adaptées. Les chiplets consistent à répartir les fonctions d’un système sur plusieurs petites puces spécialisées réunies dans un même boîtier. Cette approche peut améliorer la modularité et permettre de combiner des dies fabriqués avec des procédés différents. Elle introduit toutefois des défis de communication entre dies, de dissipation thermique, de test, de rendement global et de standardisation des interfaces.',
          'Les mémoires à large bande passante, ou HBM, empilent plusieurs dies mémoire et les connectent au moyen d’interconnexions verticales, généralement intégrées à une solution de packaging avancé avec un processeur ou un accélérateur. L’objectif est d’offrir une bande passante élevée dans un encombrement maîtrisé, ce qui est particulièrement utile pour les accélérateurs de calcul intensif. La performance d’un système ne dépend toutefois pas seulement de la mémoire : elle dépend aussi de la capacité, de la latence, de la consommation, du contrôleur mémoire, des interconnexions et du logiciel. Le packaging devient ainsi un élément de l’architecture du système, et non une étape secondaire.',
          'Les tests sont réalisés à plusieurs étapes : sur wafer, après découpe, après assemblage et parfois lors de contrôles de qualification. Ils cherchent à détecter les défauts électriques, fonctionnels, thermiques ou mécaniques et à vérifier que le composant respecte ses spécifications. La qualification de fiabilité peut inclure des essais accélérés de température, d’humidité, de cycles thermiques, de vibrations ou de durée de fonctionnement, selon la catégorie de produit et les normes applicables. Les résultats servent à estimer les mécanismes de défaillance et à vérifier la robustesse, mais un essai accéléré ne garantit jamais à lui seul une durée de vie exacte dans toutes les conditions réelles. Le contrôle qualité doit donc être adapté à l’usage final, notamment dans l’automobile, l’industrie, le médical ou les infrastructures critiques.'
        ],
        example: {
          statement: 'Un lot de 1 000 puces assemblées est soumis à un test final. 970 puces passent les critères fonctionnels. Calculez le taux de réussite au test final.',
          calculation: 'Taux de réussite = (970 / 1 000) × 100.',
          answer: 'Le taux de réussite au test final est de 97 %. Ce taux ne doit pas être confondu automatiquement avec le rendement global depuis le wafer, car des pertes peuvent avoir eu lieu aux étapes précédentes.'
        },
        exercise: {
          question: 'Pourquoi le packaging influence-t-il directement les performances d’un semi-conducteur ?',
          answer: 'Il conditionne les connexions électriques, la dissipation thermique, les distances entre composants, la protection mécanique et donc certaines limites de fréquence, de puissance et de fiabilité.'
        },
        exercises: [
          {
            question: 'Qu’est-ce qu’un chiplet ?',
            answer: 'Un die spécialisé qui est combiné avec d’autres dies dans un même boîtier pour former un système plus complet.'
          },
          {
            question: 'Quel est l’intérêt général de la mémoire HBM ?',
            answer: 'Elle vise à fournir une bande passante mémoire élevée grâce à l’empilement de dies et à des interconnexions adaptées.'
          },
          {
            question: 'Un test accéléré permet-il de connaître avec certitude la durée de vie exacte d’une puce dans tous les usages ?',
            answer: 'Non. Il aide à caractériser certains mécanismes de défaillance et à qualifier la robustesse, mais l’extrapolation dépend des conditions et des modèles utilisés.'
          }
        ],
        sources: [
          { title: 'Semiconductor Industry Association — How are Semiconductors Made?', url: 'https://www.semiconductors.org/semiconductors-101/how-are-semiconductors-made/' },
          { title: 'Semiconductor Industry Association and Deloitte — Powering AI: The Semiconductor Ecosystem at the Foundation of Data Centers', url: 'https://www.semiconductors.org/powering-ai-the-semiconductor-ecosystem-at-the-foundation-of-data-centers/' },
          { title: 'imec — Silicon interposer technology and chiplet integration', url: 'https://www.imec-int.com/en/press/imec-advances-europes-silicon-interposer-technology-capabilities-through-nanoic-pilot-line' }
        ]
      }
    },
    {
      id: 'economie-chaine-valeur-semi-conducteurs',
      title: '6. Économie mondiale, chaîne de valeur et enjeux stratégiques',
      field: 'Économie industrielle · Commerce international · Géopolitique technologique · Marché des semi-conducteurs',
      summary: 'Analyser les coûts, les cycles de marché, les concentrations géographiques, les dépendances industrielles, les applications et les indicateurs permettant de suivre le secteur.',
      lesson: {
        sections: [
          'L’industrie des semi-conducteurs est une chaîne de valeur internationale fortement spécialisée. Elle comprend la recherche, la conception, les logiciels EDA, les blocs de propriété intellectuelle, les matériaux, les équipements de fabrication, les fondeurs, l’assemblage, les tests et la distribution. Une même puce peut mobiliser des compétences, des équipements et des fournisseurs situés dans plusieurs économies. Cette spécialisation permet des gains d’efficacité et une progression rapide des performances, mais elle crée aussi des dépendances. L’OCDE souligne la complexité de la chaîne et le nombre important d’étapes et d’intrants nécessaires à la production. Une perturbation d’un fournisseur, d’un équipement ou d’une matière critique peut donc avoir des conséquences au-delà de son lieu d’origine.',
          'La fabrication avancée exige des investissements très élevés dans les bâtiments, les équipements, les procédés, la recherche et les compétences. Les coûts fixes sont importants et les usines doivent fonctionner avec des taux d’utilisation suffisants pour amortir les installations. La rentabilité dépend du rendement de fabrication, du mix de produits, du prix moyen de vente, de la durée de vie des générations technologiques et du niveau de demande. Les coûts ne sont pas identiques selon les familles de puces : une mémoire standard, un processeur avancé, un composant analogique et un semi-conducteur de puissance suivent des économies industrielles différentes. Il faut donc éviter de traiter tous les fabricants comme s’ils avaient le même modèle économique.',
          'Le marché des semi-conducteurs est cyclique. Les commandes peuvent accélérer lorsque les fabricants d’électronique, les centres de données ou les constructeurs automobiles anticipent une hausse de la demande. Les producteurs investissent alors dans les capacités, mais les délais de construction et de qualification sont longs. Si l’offre devient supérieure à la demande, les stocks peuvent augmenter, les prix baisser et les taux d’utilisation des usines reculer. Les segments ne suivent pas toujours le même cycle : les mémoires sont particulièrement sensibles aux variations de prix et de capacité, tandis que certains composants industriels ou automobiles peuvent suivre des rythmes différents. Pour analyser le secteur, il faut distinguer ventes, commandes, stocks, capacités installées, utilisation des usines et dépenses d’investissement.',
          'Les semi-conducteurs sont devenus des composants stratégiques pour les télécommunications, les véhicules, l’industrie, les équipements médicaux, les infrastructures numériques, les systèmes énergétiques et le calcul lié à l’intelligence artificielle. Les tensions commerciales, les restrictions à l’exportation, les subventions publiques et les politiques de souveraineté technologique influencent les décisions d’investissement et la localisation des capacités. La résilience ne signifie pas nécessairement produire chaque composant dans un seul pays : elle peut reposer sur la diversification des fournisseurs, des stocks adaptés, des capacités de remplacement, des coopérations internationales et une meilleure visibilité sur les dépendances. Les politiques publiques doivent arbitrer entre sécurité d’approvisionnement, coût, innovation, concurrence et efficacité économique.',
          'Pour suivre la conjoncture du secteur, les ventes mondiales publiées par WSTS et relayées par la Semiconductor Industry Association constituent des indicateurs de référence. Il faut lire attentivement la période, la devise, le périmètre et la méthode : les ventes trimestrielles, les ventes mensuelles calculées en moyenne mobile sur trois mois et les prévisions annuelles ne sont pas directement interchangeables. Les données de marché mesurent les ventes de semi-conducteurs, pas nécessairement les bénéfices des fabricants ni la valeur totale des équipements électroniques qui les utilisent. Pour analyser une entreprise, il faut également examiner son exposition aux différents segments, sa capacité productive, ses dépenses de recherche, ses marges, ses investissements, sa dette, ses clients et sa position concurrentielle. Une forte croissance du marché ne garantit pas automatiquement la hausse du bénéfice ou du cours de chaque société.'
        ],
        example: {
          statement: 'Les ventes mondiales de semi-conducteurs passent de 600 milliards de dollars une année à 660 milliards l’année suivante. Calculez le taux de croissance annuel des ventes.',
          calculation: 'Taux de croissance = ((660 / 600) - 1) × 100 = 10 %.',
          answer: 'Les ventes mondiales augmentent de 10 %. Ce calcul décrit la croissance du chiffre d’affaires sectoriel agrégé ; il ne permet pas, à lui seul, de déduire la croissance des bénéfices ou des valorisations boursières.'
        },
        exercise: {
          question: 'Pourquoi une hausse des ventes mondiales de semi-conducteurs ne garantit-elle pas une hausse identique des bénéfices de toutes les entreprises du secteur ?',
          answer: 'Parce que les entreprises ont des produits, des coûts, des marges, des clients, des capacités et des positions concurrentielles différents. Les ventes sectorielles ne se transforment pas uniformément en bénéfices.'
        },
        exercises: [
          {
            question: 'Pourquoi la chaîne de valeur mondiale des semi-conducteurs est-elle vulnérable aux ruptures ?',
            answer: 'Parce qu’elle repose sur de nombreuses étapes spécialisées, des fournisseurs parfois concentrés et des équipements ou matériaux difficiles à remplacer rapidement.'
          },
          {
            question: 'Quel phénomène peut apparaître après une phase d’investissement industriel trop rapide par rapport à la demande ?',
            answer: 'Une surcapacité, qui peut entraîner une hausse des stocks, une baisse des prix et une diminution de l’utilisation des usines.'
          },
          {
            question: 'Quelle source sectorielle publie des statistiques mondiales de ventes de semi-conducteurs ?',
            answer: 'World Semiconductor Trade Statistics (WSTS), dont les données sont notamment relayées par la Semiconductor Industry Association (SIA).'
          }
        ],
        sources: [
          { title: 'OCDE — Semiconductors', url: 'https://www.oecd.org/en/topics/semiconductors.html' },
          { title: 'Semiconductor Industry Association — Understanding dependencies in the U.S. semiconductor supply chain', url: 'https://www.semiconductors.org/understanding-dependencies-in-the-u-s-semiconductor-supply-chain/' },
          { title: 'World Semiconductor Trade Statistics — Market statistics and forecasts', url: 'https://www.wsts.org/' },
          { title: 'Semiconductor Industry Association — Market Data', url: 'https://www.semiconductors.org/data-resources/market-data/' },
          { title: 'European Commission — European Chips Act', url: 'https://digital-strategy.ec.europa.eu/en/policies/european-chips-act' }
        ]
      }
    }
  ]
},

]
