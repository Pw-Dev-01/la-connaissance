window.courseCatalog = [
  {
    id: 'premiere',
    title: 'Première · spécialité mathématiques',
    note: 'Programme en vigueur à la rentrée 2026-2027.',
    source: 'https://www.education.gouv.fr/bo/2026/Hebdo14/MENE2602917A',
    chapters: [
      {
        id: 'regles-puissances',
        title: 'Règles des puissances',
        field: 'Algèbre',
        summary: 'Produits, quotients, exposants négatifs et fractionnaires, racines et conditions d’existence dans ℝ.',
        lesson: {
          sections: [
            'Pour une base a > 0, on additionne les exposants dans un produit de même base et on les soustrait dans un quotient ; élever une puissance à une autre puissance revient à multiplier les exposants. Pour n entier positif, a⁻ⁿ = 1/aⁿ si a ≠ 0 ; a⁰ = 1 si a ≠ 0.',
            'Pour p/q irréductible avec q > 0 et a > 0, aᵖ⁄ᑫ est l’unique nombre positif dont la puissance q-ième vaut aᵖ ; si p < 0, c’est l’inverse correspondant. Pour a = 0, aʳ = 0 seulement si r > 0 ; les exposants nuls ou négatifs ne sont pas définis pour 0. Pour a < 0, aᵖ⁄ᑫ est réel exactement lorsque q est impair ; son signe est négatif si p est impair, positif si p est pair.',
            'Une racine d’indice pair exige un radicande positif ou nul ; une racine d’indice impair existe pour tout réel. En particulier, √(a²) = |a|. Attention aux parenthèses : (−2)⁴ = 16, mais −2⁴ = −16.'
          ],
          formula: {
            label: 'RÈGLES POUR a, b > 0 (m, n ∈ ℚ)',
            text: 'aᵐ × aⁿ = aᵐ⁺ⁿ  |  aᵐ/aⁿ = aᵐ⁻ⁿ  |  (aᵐ)ⁿ = aᵐⁿ  |  (ab)ⁿ = aⁿbⁿ  |  a¹⁄² = √a  |  a⁻¹⁄² = 1/√a'
          },
          example: {
            statement: 'Simplifier 16³⁄⁴, 8⁻²⁄³ et √((−5)²).',
            calculation: '16³⁄⁴ = 2³ = 8 ; 8⁻²⁄³ = 1/(∛8)² = 1/4 ; √((−5)²) = |−5| = 5.',
            answer: 'Les résultats sont 8, 1/4 et 5.'
          },
          exercise: {
            question: 'Simplifier 27⁻²⁄³ et √((−4)²).',
            answer: '27⁻²⁄³ = 1/(∛27)² = 1/9 ; √((−4)²) = |−4| = 4.'
          }
        }
      },
      {
        id: 'premiere-suites',
        title: 'Suites numériques',
        field: 'Algèbre',
        summary: 'Modéliser une évolution à partir de termes successifs ; reconnaître les suites arithmétiques et géométriques, calculer des termes et des sommes.',
        lesson: {
          sections: [
            'Une suite est une liste ordonnée de nombres notés u₀, u₁, u₂, ... ou u₁, u₂, ... selon l’indice de départ. Son indice n représente souvent le temps ou le rang d’une étape.',
            'Une suite explicite donne directement uₙ en fonction de n. Une suite récurrente donne un premier terme et une règle pour calculer le suivant, par exemple uₙ₊₁ = uₙ + 4.'
          ],
          formula: {
            label: 'TERMES ET SOMMES',
            text: 'Arithmétique : uₙ = u₀ + nr ; Sₙ = (n + 1)(u₀ + uₙ)/2  |  Géométrique : vₙ = v₀qⁿ'
          },
          example: {
            statement: 'Une suite arithmétique commence à u₀ = 4 et augmente de 3 à chaque rang. Calculer u₅ et la somme de u₀ à u₅.',
            calculation: 'u₅ = 4 + 5 × 3 = 19. Il y a 6 termes, donc S = 6 × (4 + 19) / 2.',
            answer: 'u₅ = 19 et S = 69.'
          },
          exercise: {
            question: 'Une suite géométrique vérifie v₀ = 80 et vₙ₊₁ = 0,5vₙ. Calculer v₃.',
            answer: 'v₃ = 80 × 0,5³ = 80 × 0,125 = 10.'
          }
        }
      },
      {
        id: 'second-degre',
        title: 'Équations et inéquations du second degré',
        field: 'Algèbre',
        page: 'index.html',
        summary: 'Forme canonique, discriminant, résolution, factorisation, somme et produit des racines, signe du trinôme et résolution d’inéquations.',
        lesson: {
          sections: [
            'Une fonction polynôme du second degré s’écrit f(x) = ax² + bx + c avec a ≠ 0. Sa courbe est une parabole : tournée vers le haut si a > 0, vers le bas si a < 0. Résoudre l’équation ax² + bx + c = 0, c’est chercher les abscisses où la parabole coupe l’axe des abscisses : les racines.',
            'La forme canonique f(x) = a(x − α)² + β met en évidence le sommet S(α ; β) de la parabole. Elle s’obtient en complétant le carré, et c’est elle qui permet de démontrer toutes les formules de résolution.',
            'Le discriminant Δ = b² − 4ac décide du nombre de racines réelles : deux si Δ > 0, une (dite double) si Δ = 0, aucune si Δ < 0. Le signe de Δ détermine donc l’allure de la parabole par rapport à l’axe des abscisses.',
            'Quand les racines existent, le trinôme se factorise et son signe se déduit d’une règle simple : il a le signe de a à l’extérieur des racines et le signe contraire de a entre les racines. Cette règle permet de résoudre toute inéquation ax² + bx + c > 0, ≥ 0, < 0 ou ≤ 0.',
            'Méthode pour une inéquation : 1) se ramener à un second membre nul ; 2) calculer Δ et les racines éventuelles ; 3) déterminer le signe de a ; 4) lire l’ensemble solution dans le tableau de signes en choisissant des intervalles ouverts ou fermés selon que l’inégalité est stricte ou large.',
            'Erreurs fréquentes : oublier que a doit être non nul ; se tromper de signe en calculant −b quand b est négatif ; écrire √Δ alors que Δ < 0 ; oublier de ramener l’inéquation à un second membre nul avant d’étudier le signe ; fermer les crochets sur des racines pour une inégalité stricte.'
          ],
          formula: {
            label: 'DISCRIMINANT ET RACINES',
            text: 'Δ = b² − 4ac  |  Si Δ > 0 : x₁,₂ = (−b ± √Δ) / 2a  |  Si Δ = 0 : x₀ = −b / 2a  |  Si Δ < 0 : aucune racine réelle'
          },
          example: {
            statement: 'Résoudre dans ℝ l’équation x² − 4x − 5 = 0.',
            calculation: 'Ici a = 1, b = −4, c = −5. Δ = (−4)² − 4 × 1 × (−5) = 16 + 20 = 36, donc √Δ = 6. Alors x₁ = (4 − 6)/2 = −1 et x₂ = (4 + 6)/2 = 5.',
            answer: 'L’ensemble des solutions est S = {−1 ; 5}.'
          },
          exercise: {
            question: 'Résoudre dans ℝ l’inéquation x² − 2x − 8 < 0.',
            answer: 'Δ = 4 + 32 = 36 ; les racines sont (2 − 6)/2 = −2 et (2 + 6)/2 = 4. Comme a = 1 > 0, le trinôme est négatif strictement entre les racines : S = ]−2 ; 4[.'
          },
          equationDetails: [
            {
              title: 'Forme canonique',
              formula: 'ax² + bx + c = a[(x + b/2a)² − Δ/4a²] = a(x − α)² + β',
              explanation: 'On complète le carré : a(x² + (b/a)x) + c = a[(x + b/2a)² − b²/4a²] + c. La forme canonique donne le sommet de la parabole et conduit directement à la formule des racines.',
              parameters: 'α = −b/2a : abscisse du sommet ; β = f(α) = −Δ/4a : ordonnée du sommet ; a : coefficient dominant, non nul.',
              example: 'Pour x² − 6x + 5 : x² − 6x + 5 = (x − 3)² − 9 + 5.',
              result: 'x² − 6x + 5 = (x − 3)² − 4 ; le sommet est S(3 ; −4).'
            },
            {
              title: 'Discriminant',
              formula: 'Δ = b² − 4ac',
              explanation: 'Le discriminant est le nombre qui apparaît dans la forme canonique. Son signe indique combien la parabole coupe l’axe des abscisses : deux fois (Δ > 0), une fois en son sommet (Δ = 0) ou jamais (Δ < 0).',
              parameters: 'a, b, c : coefficients du trinôme ax² + bx + c avec a ≠ 0 ; Δ : discriminant, un réel.',
              example: 'Pour 2x² − 3x − 2 : Δ = (−3)² − 4 × 2 × (−2) = 9 + 16.',
              result: 'Δ = 25 > 0 : deux racines réelles distinctes.'
            },
            {
              title: 'Racines réelles',
              formula: 'Δ > 0 : x₁ = (−b − √Δ)/2a et x₂ = (−b + √Δ)/2a  |  Δ = 0 : x₀ = −b/2a',
              explanation: 'Si Δ > 0, l’équation a deux solutions distinctes ; si Δ = 0, elle a une unique solution, la racine double, qui est l’abscisse du sommet ; si Δ < 0, elle n’a aucune solution réelle car un carré ne peut valoir un nombre négatif.',
              parameters: 'a, b : coefficients de l’équation ; Δ : discriminant ; x₁, x₂ : racines réelles.',
              example: 'Pour 2x² − 3x − 2 = 0 : √Δ = 5, donc x₁ = (3 − 5)/4 et x₂ = (3 + 5)/4. Pour x² + x + 1 : Δ = 1 − 4 = −3.',
              result: 'Pour la première, S = {−1/2 ; 2}. Pour x² + x + 1 = 0, Δ < 0 : S = ∅ dans ℝ.'
            },
            {
              title: 'Factorisation du trinôme',
              formula: 'ax² + bx + c = a(x − x₁)(x − x₂)  si Δ > 0  |  a(x − x₀)²  si Δ = 0',
              explanation: 'Lorsque le trinôme a des racines réelles, il se factorise grâce à elles. Si Δ < 0, il ne se factorise pas dans ℝ. La factorisation permet d’étudier le signe d’un produit de facteurs du premier degré.',
              parameters: 'a : coefficient dominant ; x₁, x₂ : racines ; x₀ : racine double.',
              example: '2x² − 3x − 2 a pour racines −1/2 et 2 : 2(x + 1/2)(x − 2).',
              result: '2x² − 3x − 2 = (2x + 1)(x − 2).'
            },
            {
              title: 'Somme et produit des racines',
              formula: 'x₁ + x₂ = −b/a  et  x₁ × x₂ = c/a',
              explanation: 'Ces relations relient les racines aux coefficients sans calculer Δ. Elles servent à trouver une racine quand l’autre est connue, à repérer une racine évidente ou à construire une équation de racines données.',
              parameters: 'x₁, x₂ : racines de ax² + bx + c = 0 ; a, b, c : coefficients, a ≠ 0.',
              example: 'Pour x² − 5x + 6 = 0, on cherche deux nombres de somme 5 et de produit 6.',
              result: 'Les racines sont 2 et 3 : S = {2 ; 3}.'
            },
            {
              title: 'Signe du trinôme',
              formula: 'Δ > 0 : signe de a hors des racines, signe de −a entre elles  |  Δ = 0 : signe de a (nul en x₀)  |  Δ < 0 : signe de a pour tout réel x',
              explanation: 'Le tableau de signes se déduit de la position de la parabole par rapport à l’axe des abscisses. Il permet de résoudre toutes les inéquations du second degré sans développement supplémentaire.',
              parameters: 'a : coefficient dominant ; x₁ < x₂ : racines ; Δ : discriminant.',
              example: 'Résoudre −x² + x + 2 ≥ 0 : Δ = 1 + 8 = 9 ; racines −1 et 2 ; a = −1 < 0, donc le trinôme est positif entre les racines.',
              result: 'S = [−1 ; 2].'
            },
            {
              title: 'Sommet et extremum',
              formula: 'α = −b/2a  |  β = f(α)  |  a > 0 : minimum β  |  a < 0 : maximum β',
              explanation: 'La fonction f(x) = ax² + bx + c atteint son extremum au sommet de la parabole, en x = α. Elle est décroissante puis croissante si a > 0, et croissante puis décroissante si a < 0.',
              parameters: 'α : abscisse de l’extremum ; β : valeur de l’extremum ; a : signe qui détermine le sens de variation.',
              example: 'Pour f(x) = x² − 4x + 3 : α = 4/2 = 2 et f(2) = 4 − 8 + 3.',
              result: 'f admet un minimum égal à −1, atteint en x = 2.'
            }
          ],
          sourcesHeading: 'Sources et programme',
          sources: [
            {
              title: 'Programme de la classe de première, spécialité mathématiques (BOEN, rentrée 2026)',
              url: 'https://www.education.gouv.fr/bo/2026/Hebdo14/MENE2602917A'
            },
            {
              title: 'Wikipédia — Équation du second degré',
              url: 'https://fr.wikipedia.org/wiki/%C3%89quation_du_second_degr%C3%A9'
            }
          ]
        }
      },
      {
        id: 'premiere-derivee-locale',
        title: 'Dérivation : point de vue local',
        field: 'Analyse',
        summary: 'Taux de variation, nombre dérivé, tangente et approximation affine au voisinage d’un point.',
        lesson: {
          sections: [
            'Le taux de variation entre a et a + h est le quotient [f(a+h) − f(a)]/h. Lorsque h se rapproche de 0, si ce quotient tend vers un réel, sa limite est le nombre dérivé f′(a).',
            'Géométriquement, f′(a) est la pente de la tangente à la courbe au point d’abscisse a. Il permet aussi d’approcher f(a+h) lorsque h est petit.'
          ],
          formula: {
            label: 'NOMBRE DÉRIVÉ ET APPROXIMATION LOCALE',
            text: 'f′(a) = limₕ→₀ [f(a+h) − f(a)]/h  |  f(a+h) ≈ f(a) + hf′(a)'
          },
          example: {
            statement: 'Pour f(x) = x², calculer f′(3) puis l’équation de la tangente en x = 3.',
            calculation: 'f′(x) = 2x, donc f′(3) = 6 et f(3) = 9. La tangente est y = 6(x − 3) + 9.',
            answer: 'La pente vaut 6 et la tangente a pour équation y = 6x − 9.'
          },
          exercise: {
            question: 'Pour f(x) = x² + 1, donner la pente de la tangente en x = 2.',
            answer: 'f′(x) = 2x, donc f′(2) = 4.'
          }
        }
      },
      {
        id: 'premiere-derivee-variations',
        title: 'Dérivation : applications et variations',
        field: 'Analyse',
        summary: 'Dérivées usuelles, opérations, signe de la dérivée, variations, extremums et optimisation.',
        lesson: {
          sections: [
            'Le signe de f′ indique les variations de f : une dérivée positive correspond à une fonction croissante, une dérivée négative à une fonction décroissante.',
            'Si le signe de f′ passe de − à +, la fonction atteint un minimum local. S’il passe de + à −, elle atteint un maximum local. Une dérivée nulle seule ne suffit pas à conclure.'
          ],
          formula: {
            label: 'LIEN ENTRE DÉRIVÉE ET VARIATIONS',
            text: 'f′ > 0 ⇒ f croît  |  f′ < 0 ⇒ f décroît'
          },
          example: {
            statement: 'Étudier les variations de f(x) = x² − 4x + 1.',
            calculation: 'f′(x) = 2x − 4 = 2(x − 2). Elle est négative avant 2, nulle en 2 et positive après 2. f(2) = −3.',
            answer: 'f décroît puis croît ; son minimum vaut −3 en x = 2.'
          },
          exercise: {
            question: 'Étudier les variations de g(x) = x² − 6x + 8.',
            answer: 'g′(x) = 2(x − 3) : g décroît jusqu’à 3 puis croît. Son minimum est g(3) = −1.'
          }
        }
      },
      {
        id: 'premiere-exponentielle',
        title: 'Fonction exponentielle',
        field: 'Analyse',
        summary: 'Définition et propriétés de la fonction exponentielle, nombre e, croissance et dérivée.',
        lesson: {
          sections: [
            'La fonction exponentielle, notée exp, est l’unique fonction dérivable qui vérifie (eˣ)′ = eˣ et e⁰ = 1. On note e = e¹, avec e environ égal à 2,718.',
            'Elle est strictement positive et strictement croissante. Elle transforme une somme en produit, ce qui la rend utile pour modéliser une croissance proportionnelle.'
          ],
          formula: {
            label: 'PROPRIÉTÉS ET DÉRIVÉE',
            text: 'eᵃ⁺ᵇ = eᵃeᵇ  |  e⁻ᵃ = 1/eᵃ  |  (eˣ)′ = eˣ'
          },
          example: {
            statement: 'Étudier les variations de f(x) = eˣ − 2x.',
            calculation: 'f′(x) = eˣ − 2. Il existe un unique nombre α tel que e^α = 2. La dérivée est négative avant α, puis positive après.',
            answer: 'f décroît jusqu’à α, puis croît. Elle atteint son minimum en α.'
          },
          exercise: {
            question: 'Dériver g(x) = 3e²ˣ.',
            answer: 'La dérivée de e²ˣ est 2e²ˣ. Donc g′(x) = 3 × 2e²ˣ = 6e²ˣ.'
          }
        }
      },
      {
        id: 'premiere-trigonometrie',
        title: 'Trigonométrie',
        field: 'Analyse',
        summary: 'Cercle trigonométrique, radian, cosinus, sinus et valeurs remarquables.',
        lesson: {
          sections: [
            'Sur le cercle trigonométrique de rayon 1, l’angle est mesuré en radians. À l’angle x correspond le point de coordonnées (cos x ; sin x). Le sens positif est le sens inverse des aiguilles d’une montre.',
            'Un tour complet mesure 2π radians et un demi-tour π. Les coordonnées du cercle donnent immédiatement les valeurs de cos et sin pour les angles usuels.'
          ],
          formula: {
            label: 'IDENTITÉ FONDAMENTALE',
            text: 'cos²(x) + sin²(x) = 1  |  180° = π radians'
          },
          example: {
            statement: 'Résoudre cos(x) = 1/2 sur l’intervalle [0 ; 2π].',
            calculation: 'Sur le cercle, l’abscisse vaut 1/2 aux angles π/3 et 5π/3.',
            answer: 'Les solutions sont x = π/3 et x = 5π/3.'
          },
          exercise: {
            question: 'Donner les valeurs de cos(π/6) et sin(π/6).',
            answer: 'Sur le cercle trigonométrique, cos(π/6) = √3/2 et sin(π/6) = 1/2.'
          }
        }
      },
      {
        id: 'premiere-produit-scalaire',
        title: 'Calcul vectoriel et produit scalaire',
        field: 'Géométrie',
        summary: 'Projection orthogonale, angle entre vecteurs, bilinéarité et calculs dans une base orthonormée.',
        lesson: {
          sections: [
            'Le produit scalaire de deux vecteurs mesure leur alignement. Il est positif si l’angle est aigu, nul s’ils sont perpendiculaires, et négatif si l’angle est obtus.',
            'Dans un repère orthonormé, on peut calculer le produit scalaire avec les coordonnées. Cette méthode est souvent plus rapide que de calculer une longueur ou un angle.'
          ],
          formula: {
            label: 'DEUX FORMULES À CONNAÎTRE',
            text: 'u · v = ||u|| ||v|| cos(θ)  |  (x ; y) · (x′ ; y′) = xx′ + yy′'
          },
          example: {
            statement: 'Les vecteurs u = (3 ; 1) et v = (2 ; −6) sont-ils perpendiculaires ?',
            calculation: 'u · v = 3 × 2 + 1 × (−6) = 6 − 6 = 0.',
            answer: 'Le produit scalaire est nul : les deux vecteurs sont orthogonaux.'
          },
          exercise: {
            question: 'Calculer le produit scalaire de a = (1 ; 4) et b = (2 ; 3).',
            answer: 'a · b = 1 × 2 + 4 × 3 = 14.'
          }
        }
      },
      {
        id: 'premiere-geometrie-reperee',
        title: 'Géométrie repérée',
        field: 'Géométrie',
        summary: 'Vecteur normal à une droite, équation de cercle et projection orthogonale.',
        lesson: {
          sections: [
            'Une équation cartésienne de droite s’écrit ax + by + c = 0. Le vecteur n = (a ; b) est normal à la droite : il lui est perpendiculaire.',
            'Un cercle de centre Ω(h ; k) et de rayon r regroupe les points M(x ; y) dont la distance à Ω vaut r. La formule de distance donne directement son équation.'
          ],
          formula: {
            label: 'ÉQUATIONS REPÉRÉES',
            text: 'Droite : ax + by + c = 0  |  Cercle : (x − h)² + (y − k)² = r²'
          },
          example: {
            statement: 'Écrire l’équation du cercle de centre Ω(1 ; −2) et de rayon 3.',
            calculation: 'On remplace h par 1, k par −2 et r par 3 dans la formule du cercle.',
            answer: '(x − 1)² + (y + 2)² = 9.'
          },
          exercise: {
            question: 'Donner un vecteur normal à la droite 2x − 3y + 5 = 0.',
            answer: 'Les coefficients de x et y donnent le vecteur normal n = (2 ; −3).'
          }
        }
      },
      {
        id: 'premiere-probabilites-conditionnelles',
        title: 'Probabilités conditionnelles et indépendance',
        field: 'Probabilités',
        summary: 'Conditionnement, indépendance, formule des probabilités totales et répétition d’épreuves.',
        lesson: {
          sections: [
            'La probabilité de B sachant A se note P_A(B). Elle décrit la probabilité de B lorsqu’on sait déjà que A est réalisé. Dans un arbre, on multiplie les probabilités le long d’une branche.',
            'Deux événements A et B sont indépendants si le fait de connaître la réalisation de l’un ne change pas la probabilité de l’autre. Un arbre pondéré aide à organiser les cas et à totaliser les probabilités.'
          ],
          formula: {
            label: 'CONDITIONNEMENT, INDÉPENDANCE ET TOTALES',
            text: 'P_A(B) = P(A ∩ B) / P(A)  |  Indépendance : P(A ∩ B) = P(A)P(B)  |  P(B) = P(A)P_A(B) + P(non A)P_non A(B)'
          },
          example: {
            statement: 'Une usine produit 60 % des pièces sur A avec 2 % de défauts, et le reste sur B avec 5 % de défauts. Quelle est la proportion totale de défauts ?',
            calculation: 'P(D) = 0,60 × 0,02 + 0,40 × 0,05 = 0,012 + 0,020.',
            answer: '3,2 % des pièces sont défectueuses.'
          },
          exercise: {
            question: 'Avec ces données, calculer la probabilité qu’une pièce défectueuse vienne de A.',
            answer: 'P(A sachant D) = P(A ∩ D)/P(D) = 0,012/0,032 = 0,375, soit 37,5 %.'
          }
        }
      },
      {
        id: 'premiere-variables-aleatoires',
        title: 'Variables aléatoires réelles',
        field: 'Probabilités',
        summary: 'Loi, espérance, variance, écart-type et interprétation de ces indicateurs.',
        lesson: {
          sections: [
            'Une variable aléatoire associe un nombre à chaque issue d’une expérience. Sa loi donne les valeurs possibles et la probabilité de chacune ; la somme des probabilités vaut 1.',
            'L’espérance représente une moyenne théorique à long terme. La variance et l’écart-type mesurent la dispersion autour de cette moyenne.'
          ],
          formula: {
            label: 'ESPÉRANCE ET VARIANCE',
            text: 'E(X) = Σ xᵢpᵢ  |  V(X) = Σ (xᵢ − E(X))²pᵢ  |  σ(X) = √V(X)'
          },
          example: {
            statement: 'On lance un dé équilibré à six faces. Calculer son espérance.',
            calculation: 'Chaque valeur de 1 à 6 a la probabilité 1/6 : E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6.',
            answer: 'E(X) = 3,5.'
          },
          exercise: {
            question: 'Une variable vaut 0 avec probabilité 0,7 et 10 avec probabilité 0,3. Calculer son espérance.',
            answer: 'E(X) = 0 × 0,7 + 10 × 0,3 = 3.'
          }
        }
      },
      {
        id: 'premiere-echantillonnage',
        title: 'Échantillonnage et simulation',
        field: 'Probabilités',
        summary: 'Simuler une expérience, étudier une fréquence et interpréter la fluctuation d’échantillonnage.',
        lesson: {
          sections: [
            'Une fréquence observée dans un échantillon varie d’un échantillon à l’autre, même si la probabilité théorique p reste la même. Plus la taille n de l’échantillon augmente, plus la fréquence tend à se rapprocher de p.',
            'Une simulation informatique répète l’expérience un grand nombre de fois. Elle aide à observer cette fluctuation, mais ne remplace pas une justification mathématique.'
          ],
          formula: {
            label: 'ORDRE DE GRANDEUR DE LA FLUCTUATION',
            text: 'Écart-type de la fréquence : σ = √(p(1 − p) / n)'
          },
          example: {
            statement: 'Une pièce équilibrée est lancée 100 fois. Quelle est l’échelle de variation attendue de la fréquence de piles ?',
            calculation: 'p = 0,5 et n = 100, donc σ = √(0,5 × 0,5 / 100) = 0,05. Deux écarts-types valent environ 0,10.',
            answer: 'Une fréquence proche de 0,5, souvent entre 0,4 et 0,6, est cohérente avec ce modèle.'
          },
          exercise: {
            question: 'Pour p = 0,4 et n = 100, calculer l’écart-type de la fréquence.',
            answer: 'σ = √(0,4 × 0,6 / 100) ≈ 0,049.'
          }
        }
      }
    ]
  },
  {
    id: 'terminale',
    title: 'Terminale · spécialité mathématiques',
    note: 'Programme 2019 en vigueur en 2026-2027 ; nouveau programme à partir de 2027-2028.',
    source: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921246A.htm',
    chapters: [
      {
        id: 'terminale-denombrement',
        title: 'Combinatoire et dénombrement',
        field: 'Algèbre et géométrie',
        summary: 'Principes additif et multiplicatif, arrangements, combinaisons, factorielle et triangle de Pascal.',
        lesson: {
          sections: [
            'Le principe additif sert à compter des choix incompatibles : on additionne leurs nombres de possibilités. Le principe multiplicatif sert aux choix successifs : on multiplie les nombres de possibilités à chaque étape.',
            'Choisir k objets parmi n sans tenir compte de l’ordre se compte avec un coefficient binomial. Ne confonds pas ce choix avec un arrangement, où l’ordre compte.'
          ],
          formula: {
            label: 'COMBINAISONS',
            text: 'C(n, k) = n! / (k!(n − k)!)'
          },
          example: {
            statement: 'Combien de comités de 3 personnes peut-on former avec 8 candidats ?',
            calculation: 'L’ordre des personnes dans le comité ne compte. On calcule C(8, 3) = 8 × 7 × 6 / (3 × 2 × 1).',
            answer: 'Il existe 56 comités.'
          },
          exercise: {
            question: 'Combien de paires distinctes peut-on choisir parmi 10 personnes ?',
            answer: 'L’ordre ne compte : C(10, 2) = 10 × 9 / 2 = 45 paires.'
          }
        }
      },
      {
        id: 'terminale-vecteurs-espace',
        title: 'Vecteurs, droites et plans de l’espace',
        field: 'Algèbre et géométrie',
        summary: 'Combinaisons linéaires, bases, repères et positions relatives dans l’espace.',
        lesson: {
          sections: [
            'Dans l’espace, un vecteur se décrit par trois coordonnées. Une droite est définie par un point et un vecteur directeur ; un plan peut être décrit par un point et deux directions non colinéaires.',
            'Les combinaisons linéaires permettent de tester l’alignement ou la coplanarité et de comparer les directions.'
          ],
          formula: {
            label: 'DROITE PARAMÉTRIQUE',
            text: 'M = A + t u, avec t ∈ ℝ'
          },
          example: {
            statement: 'Écrire une représentation paramétrique de la droite passant par A(1 ; 0 ; 2) et dirigée par u = (2 ; −1 ; 3).',
            calculation: 'On ajoute à A un multiple t du vecteur directeur : (x ; y ; z) = (1 ; 0 ; 2) + t(2 ; −1 ; 3).',
            answer: 'x = 1 + 2t, y = −t, z = 2 + 3t, avec t réel.'
          },
          exercise: {
            question: 'Donner un vecteur directeur de la droite x = 3 − t, y = 2 + 4t, z = 5t.',
            answer: 'Les coefficients de t donnent le vecteur directeur (−1 ; 4 ; 5).'
          }
        }
      },
      {
        id: 'terminale-orthogonalite',
        title: 'Orthogonalité et distances dans l’espace',
        field: 'Algèbre et géométrie',
        summary: 'Produit scalaire, vecteur normal, projection orthogonale et distance.',
        lesson: {
          sections: [
            'Un vecteur normal à un plan est perpendiculaire à toutes les directions de ce plan. Il permet d’écrire l’équation cartésienne du plan et de vérifier si une droite lui est perpendiculaire.',
            'La distance d’un point à un plan est la longueur du segment perpendiculaire allant du point au plan. La formule avec le vecteur normal évite de construire explicitement le projeté.'
          ],
          formula: {
            label: 'DISTANCE D’UN POINT À UN PLAN',
            text: 'Pour ax + by + cz + d = 0 : dist(P, plan) = |axₚ + byₚ + czₚ + d| / √(a² + b² + c²)'
          },
          example: {
            statement: 'Calculer la distance du point P(1 ; 0 ; 0) au plan 2x − y + 2z − 4 = 0.',
            calculation: 'Le numérateur vaut |2 − 4| = 2. La norme du vecteur normal (2 ; −1 ; 2) vaut √9 = 3.',
            answer: 'La distance est 2/3.'
          },
          exercise: {
            question: 'Quel est un vecteur normal au plan 3x + 2y − z + 7 = 0 ?',
            answer: 'Les coefficients de x, y et z forment un vecteur normal : (3 ; 2 ; −1).'
          }
        }
      },
      {
        id: 'terminale-equations-espace',
        title: 'Représentations paramétriques et équations cartésiennes',
        field: 'Algèbre et géométrie',
        summary: 'Équations de droites et de plans, intersections et résolution de systèmes.',
        lesson: {
          sections: [
            'Une représentation paramétrique décrit les coordonnées d’un point à l’aide d’un ou plusieurs paramètres. Une équation cartésienne décrit un ensemble de points par une relation entre x, y et z.',
            'Pour trouver une intersection, on remplace les coordonnées paramétriques dans l’équation cartésienne. On obtient une équation à résoudre sur le paramètre.'
          ],
          formula: {
            label: 'PLAN DE VECTEUR NORMAL n = (a ; b ; c)',
            text: 'ax + by + cz + d = 0'
          },
          example: {
            statement: 'La droite x = t, y = 1, z = 2t rencontre-t-elle le plan x + y + z = 4 ?',
            calculation: 'On substitue les coordonnées de la droite dans le plan : t + 1 + 2t = 4, donc 3t = 3 et t = 1.',
            answer: 'Oui. Le point d’intersection est (1 ; 1 ; 2).'
          },
          exercise: {
            question: 'Le point (1 ; 2 ; 1) appartient-il au plan 2x − y + z = 1 ?',
            answer: 'On calcule 2 × 1 − 2 + 1 = 1 : le point appartient au plan.'
          }
        }
      },
      {
        id: 'terminale-suites',
        title: 'Suites : limites et récurrence',
        field: 'Analyse',
        summary: 'Récurrence, limites, opérations, théorème des gendarmes et convergence monotone.',
        lesson: {
          sections: [
            'Une preuve par récurrence comporte trois temps : vérifier la propriété au premier rang, montrer que sa validité au rang n entraîne celle au rang n + 1, puis conclure.',
            'Pour prouver qu’une suite converge, on peut établir qu’elle est monotone et bornée. Une fois la convergence démontrée, si uₙ₊₁ = f(uₙ) et si f est continue, la limite L vérifie L = f(L).'
          ],
          formula: {
            label: 'THÉORÈME DE CONVERGENCE MONOTONE',
            text: 'Suite croissante et majorée ⇒ convergente  |  Suite décroissante et minorée ⇒ convergente'
          },
          example: {
            statement: 'On définit u₀ = 0 et uₙ₊₁ = (uₙ + 2)/2. Déterminer sa limite.',
            calculation: 'On montre par récurrence que 0 ≤ uₙ ≤ 2 et que uₙ₊₁ − uₙ = (2 − uₙ)/2 ≥ 0. La suite est croissante et majorée par 2, donc elle converge. Sa limite L vérifie L = (L + 2)/2.',
            answer: 'La limite est L = 2.'
          },
          exercise: {
            question: 'La suite uₙ = 1 − (1/3)ⁿ est-elle convergente ?',
            answer: '(1/3)ⁿ tend vers 0 quand n tend vers l’infini. Donc uₙ tend vers 1.'
          }
        }
      },
      {
        id: 'limites-fonctions',
        title: 'Limites de fonctions',
        field: 'Analyse',
        page: 'limites.html',
        summary: 'Limites en un point et à l’infini, asymptotes, opérations et croissances comparées.'
      },
      {
        id: 'terminale-convexite',
        title: 'Compléments de dérivation et convexité',
        field: 'Analyse',
        summary: 'Dérivée de fonctions composées, dérivée seconde, convexité et points d’inflexion.',
        lesson: {
          sections: [
            'La dérivée seconde f′′ décrit la variation de la pente. Si f′′ est positive sur un intervalle, la dérivée f′ y croît et f est convexe ; si f′′ est négative, f est concave.',
            'Un point d’inflexion est un point où la courbe change de convexité. Pour le repérer, on étudie le changement de signe de f′′, pas seulement son annulation.'
          ],
          formula: {
            label: 'CONVEXITÉ',
            text: 'f′′ ≥ 0 ⇒ f convexe  |  f′′ ≤ 0 ⇒ f concave'
          },
          example: {
            statement: 'Étudier la convexité de f(x) = x⁴.',
            calculation: 'f′(x) = 4x³ et f′′(x) = 12x², qui est positive ou nulle sur ℝ.',
            answer: 'La fonction x⁴ est convexe sur ℝ.'
          },
          exercise: {
            question: 'La fonction x³ a-t-elle un point d’inflexion ?',
            answer: 'Sa dérivée seconde est 6x, qui change de signe en 0 ; le point d’abscisse 0 est un point d’inflexion.'
          }
        }
      },
      {
        id: 'terminale-continuite',
        title: 'Continuité',
        field: 'Analyse',
        summary: 'Continuité, théorème des valeurs intermédiaires, dichotomie et suites récurrentes.',
        lesson: {
          sections: [
            'Une fonction continue ne présente pas de saut sur son intervalle. Le théorème des valeurs intermédiaires garantit qu’elle prend toutes les valeurs comprises entre deux valeurs déjà atteintes.',
            'Pour prouver qu’une équation f(x) = k admet une solution, encadre k entre f(a) et f(b). Si f est en plus strictement monotone, cette solution est unique.'
          ],
          formula: {
            label: 'THÉORÈME DES VALEURS INTERMÉDIAIRES',
            text: 'Si f est continue sur [a ; b], toute valeur entre f(a) et f(b) est atteinte.'
          },
          example: {
            statement: 'Montrer que l’équation x³ + x − 1 = 0 admet une solution dans [0 ; 1].',
            calculation: 'La fonction f(x) = x³ + x − 1 est continue. f(0) = −1 et f(1) = 1 : zéro est entre ces deux valeurs. De plus, f′(x) = 3x² + 1 > 0, donc f est strictement croissante.',
            answer: 'L’équation admet une unique solution dans [0 ; 1].'
          },
          exercise: {
            question: 'Une fonction continue vérifie f(2) = −3 et f(5) = 4. Que peut-on conclure sur f(x) = 0 ?',
            answer: 'Le nombre 0 est compris entre −3 et 4. Le théorème des valeurs intermédiaires garantit au moins une solution dans [2 ; 5].'
          }
        }
      },
      {
        id: 'terminale-logarithme',
        title: 'Fonction logarithme népérien',
        field: 'Analyse',
        summary: 'Fonction réciproque de l’exponentielle, propriétés, dérivée et limites.',
        lesson: {
          sections: [
            'Le logarithme népérien ln est la fonction réciproque de l’exponentielle. Il est défini uniquement pour x > 0 et vérifie ln(eˣ) = x ainsi que e^(ln x) = x.',
            'Le logarithme transforme les produits en sommes. Sa dérivée 1/x permet d’étudier ses variations et de résoudre des équations où l’inconnue apparaît dans un logarithme.'
          ],
          formula: {
            label: 'PROPRIÉTÉS À CONNAÎTRE',
            text: 'ln(ab) = ln(a) + ln(b)  |  ln(a/b) = ln(a) − ln(b)  |  (ln x)′ = 1/x'
          },
          example: {
            statement: 'Résoudre ln(x) = 2.',
            calculation: 'On applique l’exponentielle aux deux membres. Comme exp et ln sont réciproques, x = e².',
            answer: 'La solution est x = e², qui est bien strictement positive.'
          },
          exercise: {
            question: 'Calculer ln(√e).',
            answer: '√e = e^(1/2), donc ln(√e) = 1/2.'
          }
        }
      },
      {
        id: 'terminale-sinus-cosinus',
        title: 'Fonctions sinus et cosinus',
        field: 'Analyse',
        summary: 'Dérivées, variations, représentations graphiques et équations trigonométriques.',
        lesson: {
          sections: [
            'Les fonctions sinus et cosinus sont périodiques de période 2π. Leurs valeurs restent comprises entre −1 et 1, et leurs courbes se répètent à intervalles réguliers.',
            'Leurs dérivées sont liées : la dérivée de sin est cos et celle de cos est −sin. Les variations se déduisent du signe de ces dérivées sur les intervalles étudiés.'
          ],
          formula: {
            label: 'DÉRIVÉES ET IDENTITÉ',
            text: '(sin x)′ = cos x  |  (cos x)′ = −sin x  |  sin²x + cos²x = 1'
          },
          example: {
            statement: 'Résoudre sin(x) = √3/2 sur [−π ; π].',
            calculation: 'L’angle de référence est π/3. Sur le cercle trigonométrique, le sinus est positif dans les premier et deuxième quadrants.',
            answer: 'Les solutions sont π/3 et 2π/3.'
          },
          exercise: {
            question: 'Résoudre cos(x) = 0 sur [0 ; 2π].',
            answer: 'Le cosinus est nul aux deux intersections du cercle avec l’axe vertical : x = π/2 et x = 3π/2.'
          }
        }
      },
      {
        id: 'terminale-primitives',
        title: 'Primitives et équations différentielles',
        field: 'Analyse',
        summary: 'Primitives usuelles et résolution d’équations différentielles linéaires simples.',
        lesson: {
          sections: [
            'Une primitive F de f sur un intervalle vérifie F′ = f. Si F est une primitive, toutes les autres s’obtiennent en ajoutant une constante.',
            'L’équation y′ = ay décrit une grandeur dont le taux de variation est proportionnel à sa valeur. Sa solution générale est une exponentielle ; une condition initiale détermine la constante.'
          ],
          formula: {
            label: 'ÉQUATIONS DIFFÉRENTIELLES USUELLES',
            text: 'y′ = ay  ⇒  y = Ceᵃˣ  |  (eᵃˣ)′ = aeᵃˣ'
          },
          example: {
            statement: 'Résoudre y′ = 2y avec y(0) = 3.',
            calculation: 'La solution générale est y(x) = Ce²ˣ. La condition initiale donne y(0) = C = 3.',
            answer: 'y(x) = 3e²ˣ.'
          },
          exercise: {
            question: 'Résoudre y′ = 4y avec y(0) = 1.',
            answer: 'La solution générale est Ce⁴ˣ. Comme y(0) = C = 1, la solution est y(x) = e⁴ˣ.'
          }
        }
      },
      {
        id: 'terminale-integrales',
        title: 'Calcul intégral',
        field: 'Analyse',
        summary: 'Intégrale, aire, relation de Chasles, valeur moyenne et intégration par parties.',
        lesson: {
          sections: [
            'L’intégrale de f entre a et b représente l’aire algébrique sous sa courbe. Si f est positive, cette intégrale correspond à l’aire géométrique.',
            'Le théorème fondamental relie intégrale et primitive : pour trouver une intégrale, on cherche une primitive puis on calcule la différence de ses valeurs aux bornes.'
          ],
          formula: {
            label: 'THÉORÈME FONDAMENTAL',
            text: 'Si F′ = f, alors ∫ₐᵇ f(x) dx = F(b) − F(a)'
          },
          example: {
            statement: 'Calculer l’intégrale de x entre 0 et 2.',
            calculation: 'Une primitive de x est F(x) = x²/2. Donc F(2) − F(0) = 4/2 − 0.',
            answer: '∫₀² x dx = 2.'
          },
          exercise: {
            question: 'Calculer ∫₀¹ (2x + 1) dx.',
            answer: 'Une primitive est x² + x. La différence entre 1 et 0 vaut 2.'
          }
        }
      },
      {
        id: 'terminale-binomiale',
        title: 'Schéma de Bernoulli et loi binomiale',
        field: 'Probabilités',
        summary: 'Répétitions indépendantes, loi binomiale, espérance et problèmes de seuil.',
        lesson: {
          sections: [
            'Une épreuve de Bernoulli a deux issues : succès, de probabilité p, ou échec, de probabilité 1 − p. On répète la même épreuve n fois de façon indépendante.',
            'La variable X compte le nombre de succès. Elle suit une loi binomiale ; pour obtenir exactement k succès, on choisit les k positions des succès puis on multiplie les probabilités correspondantes.'
          ],
          formula: {
            label: 'LOI BINOMIALE B(n ; p)',
            text: 'P(X = k) = C(n,k)pᵏ(1 − p)ⁿ⁻ᵏ  |  E(X) = np  |  V(X) = np(1 − p)'
          },
          example: {
            statement: 'On lance trois fois une pièce équilibrée. Quelle est la probabilité d’obtenir exactement deux piles ?',
            calculation: 'Il y a C(3,2) façons de choisir les deux succès. Chaque suite a une probabilité (1/2)³.',
            answer: 'P(X = 2) = C(3,2)(1/2)³ = 3/8.'
          },
          exercise: {
            question: 'Une épreuve de probabilité de succès 0,25 est répétée 4 fois. Quelle est la probabilité de n’obtenir aucun succès ?',
            answer: 'P(X = 0) = (1 − 0,25)⁴ = 0,75⁴ ≈ 0,316.'
          }
        }
      },
      {
        id: 'terminale-sommes-variables',
        title: 'Sommes de variables aléatoires',
        field: 'Probabilités',
        summary: 'Linéarité de l’espérance, variance et sommes de variables indépendantes.',
        lesson: {
          sections: [
            'L’espérance est linéaire : pour additionner les moyennes de plusieurs variables, l’indépendance n’est pas nécessaire.',
            'En revanche, pour additionner les variances, il faut que les variables soient indépendantes. Cela permet notamment d’étudier la somme de plusieurs gains ou de plusieurs mesures aléatoires.'
          ],
          formula: {
            label: 'SOMMES',
            text: 'E(X + Y) = E(X) + E(Y)  |  Si X et Y indépendantes : V(X + Y) = V(X) + V(Y)'
          },
          example: {
            statement: 'Deux dés équilibrés indépendants sont lancés. Donner l’espérance et la variance de leur somme.',
            calculation: 'Chaque dé a une espérance 3,5 et une variance 35/12. Les dés étant indépendants, on additionne les espérances et les variances.',
            answer: 'E(X + Y) = 7 et V(X + Y) = 35/6.'
          },
          exercise: {
            question: 'Deux variables indépendantes ont pour variances 2 et 5. Quelle est la variance de leur somme ?',
            answer: 'Par indépendance, V(X + Y) = 2 + 5 = 7.'
          }
        }
      },
      {
        id: 'terminale-grands-nombres',
        title: 'Concentration et loi des grands nombres',
        field: 'Probabilités',
        summary: 'Inégalités de concentration et interprétation de la loi des grands nombres.',
        lesson: {
          sections: [
            'La loi des grands nombres explique pourquoi la moyenne d’un grand échantillon se rapproche de l’espérance théorique. Elle donne un résultat de convergence, pas une garantie exacte sur chaque échantillon.',
            'L’inégalité de Bienaymé-Tchebychev majore la probabilité qu’une variable s’écarte fortement de son espérance à partir de sa variance.'
          ],
          formula: {
            label: 'INÉGALITÉ DE BIENAYMÉ-TCHEBYCHEV',
            text: 'P(|X − E(X)| ≥ a) ≤ V(X) / a²  pour a > 0'
          },
          example: {
            statement: 'Pour la moyenne de 100 lancers d’une pièce équilibrée, majorer la probabilité que la fréquence de piles s’écarte de 0,5 d’au moins 0,2.',
            calculation: 'La variance de la fréquence vaut 0,25/100 = 0,0025. Tchebychev donne une borne 0,0025/(0,2²) = 0,0625.',
            answer: 'La probabilité de cet écart est au plus 6,25 %.'
          },
          exercise: {
            question: 'Une variable a pour variance 9. Majorer P(|X − E(X)| ≥ 6).',
            answer: 'Tchebychev donne P ≤ 9/6² = 1/4.'
          }
        }
      }
    ]
  },
  {
    id: 'mpsi-mp2i',
    title: 'MPSI / MP2I · première année',
    note: 'Le programme de mathématiques de première année est commun aux deux filières.',
    source: 'https://www.education.gouv.fr/bo/21/Special1/ESRS2035779A.htm',
    chapters: [
      {
        id: 'sup-logique',
        title: 'Raisonnement et vocabulaire ensembliste',
        field: 'Algèbre',
        summary: 'Quantificateurs, raisonnement, récurrence, ensembles, applications et relations.',
        lesson: {
          sections: [
            'Une implication P ⇒ Q dit que toute situation où P est vraie rend Q vraie. Sa réciproque Q ⇒ P doit être démontrée séparément.',
            'Une preuve par contraposée remplace P ⇒ Q par non Q ⇒ non P. Une récurrence comporte une initialisation, une hérédité et une conclusion.'
          ],
          formula: {
            label: 'CONTRAPOSÉE',
            text: 'P ⇒ Q équivaut à non Q ⇒ non P'
          },
          example: {
            statement: 'Montrer que n² + n est pair pour tout entier n.',
            calculation: 'n² + n = n(n + 1). Parmi deux entiers consécutifs, l’un est pair.',
            answer: 'Le produit est pair, donc n² + n est pair.'
          },
          exercise: {
            question: 'Nier « pour tout réel x, x² ≥ 0 ».',
            answer: '« Il existe un réel x tel que x² < 0. » Cette proposition est fausse.'
          }
        }
      },
      {
        id: 'sup-calcul-trigo',
        title: 'Compléments de calcul algébrique et de trigonométrie',
        field: 'Algèbre',
        summary: 'Sommes, produits, formule du binôme, inégalités et formules trigonométriques.',
        lesson: {
          sections: [
            'La formule du binôme développe une puissance de somme grâce aux coefficients C(n,k). Les formules d’addition expriment les fonctions trigonométriques d’une somme à l’aide de celles des angles.',
            'Avant un calcul, repère si l’ordre compte et choisis entre somme, produit, arrangement ou combinaison.'
          ],
          formula: {
            label: 'BINÔME ET ADDITION',
            text: '(a + b)ⁿ = Σ C(n,k)aⁿ⁻ᵏbᵏ  |  cos(a + b) = cos a cos b − sin a sin b'
          },
          example: {
            statement: 'Développer (x + 2)⁴.',
            calculation: 'Les coefficients binomiaux sont 1, 4, 6, 4, 1 ; on multiplie chaque terme par la puissance correspondante de 2.',
            answer: 'x⁴ + 8x³ + 24x² + 32x + 16.'
          },
          exercise: {
            question: 'Quel est le coefficient de x² dans (x + 1)⁵ ?',
            answer: 'C(5,2) = 10.'
          }
        }
      },
      {
        id: 'sup-complexes',
        title: 'Nombres complexes',
        field: 'Algèbre',
        summary: 'Formes algébrique et trigonométrique, module, racines et transformations du plan.',
        lesson: {
          sections: [
            'Un complexe s’écrit z = a + ib avec i² = −1. Son conjugué est a − ib et son module vaut √(a² + b²).',
            'La forme trigonométrique z = r(cos θ + i sin θ) facilite les produits : les modules se multiplient et les arguments s’additionnent.'
          ],
          formula: {
            label: 'PRODUIT DE COMPLEXES',
            text: '|zw| = |z||w|  |  arg(zw) = arg(z) + arg(w) [2π]'
          },
          example: {
            statement: 'Résoudre z² + 1 = 0 dans ℂ.',
            calculation: 'L’équation équivaut à z² = −1. Les deux racines carrées de −1 sont opposées.',
            answer: 'z = i ou z = −i.'
          },
          exercise: {
            question: 'Donner le module et un argument de 1 + i.',
            answer: '|1 + i| = √2 et un argument est π/4.'
          }
        }
      },
      {
        id: 'sup-calcul-differentiel',
        title: 'Techniques fondamentales de calcul différentiel et intégral',
        field: 'Analyse',
        summary: 'Fonctions usuelles, dérivation, primitives et équations différentielles linéaires.',
        lesson: {
          sections: [
            'Les règles de dérivation de somme, produit, quotient et composition permettent de calculer une dérivée puis d’étudier les variations.',
            'Une primitive F de f vérifie F′ = f. Les équations différentielles se résolvent en tenant compte de leurs conditions initiales.'
          ],
          formula: {
            label: 'RÈGLES USUELLES',
            text: '(uv)′ = u′v + uv′  |  (f∘g)′ = (f′∘g)g′  |  (eˣ)′ = eˣ'
          },
          example: {
            statement: 'Dériver f(x) = xeˣ.',
            calculation: 'Par la règle du produit, f′(x) = 1 × eˣ + x × eˣ.',
            answer: 'f′(x) = (x + 1)eˣ.'
          },
          exercise: {
            question: 'Dériver (x² + 1)³.',
            answer: 'Par composition : 3(x² + 1)² × 2x = 6x(x² + 1)².'
          }
        }
      },
      {
        id: 'sup-reels-suites',
        title: 'Nombres réels et suites numériques',
        field: 'Analyse',
        summary: 'Borne supérieure, limites, suites monotones, suites extraites et suites récurrentes.',
        lesson: {
          sections: [
            'La propriété de la borne supérieure garantit qu’un ensemble non vide et majoré de réels possède une plus petite borne supérieure.',
            'Une suite monotone et bornée converge. Pour une suite récurrente, étudie d’abord un intervalle stable et le sens de variation.'
          ],
          formula: {
            label: 'CONVERGENCE MONOTONE',
            text: 'Croissante et majorée ⇒ convergente  |  Décroissante et minorée ⇒ convergente'
          },
          example: {
            statement: 'Étudier la limite de uₙ = 1 − 3⁻ⁿ.',
            calculation: 'La suite 3⁻ⁿ tend vers 0 lorsque n tend vers l’infini.',
            answer: 'uₙ tend vers 1.'
          },
          exercise: {
            question: 'Calculer la limite de uₙ = 2 + 1/(n + 1).',
            answer: 'Le terme 1/(n + 1) tend vers 0 ; la limite est 2.'
          }
        }
      },
      {
        id: 'sup-fonctions',
        title: 'Fonctions d’une variable réelle : limites et continuité, dérivabilité, convexité',
        field: 'Analyse',
        summary: 'Continuité, théorèmes de Rolle et des accroissements finis, dérivation et convexité.',
        lesson: {
          sections: [
            'Le théorème des accroissements finis relie la pente entre deux points à une valeur de la dérivée. Le théorème de Rolle en est un cas particulier.',
            'Une fonction deux fois dérivable est convexe sur un intervalle lorsque sa dérivée seconde y est positive.'
          ],
          formula: {
            label: 'ACCROISSEMENTS FINIS',
            text: 'Il existe c ∈ ]a ; b[ tel que f(b) − f(a) = f′(c)(b − a)'
          },
          example: {
            statement: 'Étudier la convexité de f(x) = x².',
            calculation: 'f′(x) = 2x et f′′(x) = 2, donc f′′ est positive sur ℝ.',
            answer: 'La fonction carré est convexe sur ℝ.'
          },
          exercise: {
            question: 'Que déduire si f′′(x) < 0 sur un intervalle ?',
            answer: 'La fonction f est concave sur cet intervalle.'
          }
        }
      },
      {
        id: 'sup-arithmetique',
        title: 'Arithmétique dans l’ensemble des entiers relatifs',
        field: 'Algèbre',
        summary: 'Division euclidienne, PGCD, Bézout, nombres premiers et congruences.',
        lesson: {
          sections: [
            'L’algorithme d’Euclide calcule le PGCD par divisions successives. Le théorème de Bézout exprime ce PGCD comme combinaison linéaire des deux entiers.',
            'Les congruences comparent les restes de divisions et simplifient les calculs de divisibilité et de puissances.'
          ],
          formula: {
            label: 'DIVISION EUCLIDIENNE',
            text: 'a = bq + r  |  au + bv = PGCD(a,b) pour certains u,v ∈ ℤ'
          },
          example: {
            statement: 'Calculer le PGCD de 84 et 30.',
            calculation: '84 = 2×30 + 24 ; 30 = 24 + 6 ; 24 = 4×6.',
            answer: 'PGCD(84,30) = 6.'
          },
          exercise: {
            question: 'Donner le reste de 38 dans la division par 7.',
            answer: '38 = 5×7 + 3, le reste est 3.'
          }
        }
      },
      {
        id: 'sup-structures',
        title: 'Structures algébriques usuelles',
        field: 'Algèbre',
        summary: 'Lois de composition, groupes, sous-groupes, anneaux, corps et morphismes.',
        lesson: {
          sections: [
            'Un groupe est un ensemble muni d’une opération associative, d’un élément neutre et d’inverses. Un groupe est abélien si l’opération est commutative.',
            'Un anneau possède deux opérations compatibles ; dans un corps, chaque élément non nul possède un inverse multiplicatif.'
          ],
          formula: {
            label: 'STRUCTURE DE GROUPE',
            text: 'Associativité · élément neutre · inverse · stabilité de l’opération'
          },
          example: {
            statement: 'Les entiers relatifs munis de l’addition forment-ils un groupe ?',
            calculation: 'L’addition est associative, 0 est neutre et chaque n possède l’opposé −n.',
            answer: 'Oui, (ℤ, +) est un groupe abélien.'
          },
          exercise: {
            question: 'Quel est l’inverse de 7 dans (ℤ, +) ?',
            answer: '−7, car 7 + (−7) = 0.'
          }
        }
      },
      {
        id: 'sup-matrices-systemes',
        title: 'Calcul matriciel et systèmes linéaires',
        field: 'Algèbre',
        summary: 'Opérations matricielles, systèmes, inversion et méthode du pivot.',
        lesson: {
          sections: [
            'Les opérations élémentaires sur les lignes transforment un système linéaire sans modifier ses solutions. Le pivot de Gauss élimine successivement les inconnues.',
            'Une matrice carrée inversible permet de résoudre AX = B de manière unique pour tout second membre B.'
          ],
          formula: {
            label: 'ÉCRITURE MATRICIELLE',
            text: 'AX = B  |  Si A est inversible, X = A⁻¹B'
          },
          example: {
            statement: 'Résoudre x + y = 5 et x − y = 1.',
            calculation: 'En additionnant, 2x = 6, donc x = 3 ; puis y = 2.',
            answer: 'La solution est (3 ; 2).'
          },
          exercise: {
            question: 'Combien de solutions ont x + y = 2 et 2x + 2y = 4 ?',
            answer: 'Les équations sont dépendantes ; il existe une infinité de solutions.'
          }
        }
      },
      {
        id: 'sup-polynomes',
        title: 'Polynômes et fractions rationnelles',
        field: 'Algèbre',
        summary: 'Division euclidienne, racines, multiplicité, factorisation et éléments simples.',
        lesson: {
          sections: [
            'La division euclidienne écrit A = BQ + R avec deg(R) < deg(B). Si a est une racine d’un polynôme P, alors X − a est un facteur de P.',
            'La décomposition en éléments simples réécrit une fraction rationnelle comme somme de fractions plus faciles à étudier ou intégrer.'
          ],
          formula: {
            label: 'THÉORÈME FACTEUR',
            text: 'P(a) = 0 ⇔ P(X) = (X − a)Q(X) pour un polynôme Q'
          },
          example: {
            statement: 'Factoriser X² − 1.',
            calculation: 'C’est une différence de deux carrés.',
            answer: 'X² − 1 = (X − 1)(X + 1).'
          },
          exercise: {
            question: 'Vérifier si 2 est une racine de X² − 3X + 2.',
            answer: '2² − 3×2 + 2 = 0 : 2 est une racine.'
          }
        }
      },
      {
        id: 'sup-asymptotique',
        title: 'Analyse asymptotique',
        field: 'Analyse',
        summary: 'Comparaisons, équivalents, négligeabilité et développements limités.',
        lesson: {
          sections: [
            'Les relations de comparaison décrivent la taille relative de deux fonctions ou suites près d’une limite. L’équivalence f ~ g signifie que leur quotient tend vers 1.',
            'Ces outils simplifient les limites et permettent de remplacer localement une expression par une autre de même comportement dominant.'
          ],
          formula: {
            label: 'ÉQUIVALENT ET DÉVELOPPEMENT LIMITÉ',
            text: 'f ~ g si f/g → 1  |  sin(x) ~ x quand x → 0'
          },
          example: {
            statement: 'Déterminer un équivalent de x² + 3x quand x tend vers +∞.',
            calculation: '(x² + 3x)/x² = 1 + 3/x, et ce quotient tend vers 1.',
            answer: 'x² + 3x ~ x² quand x → +∞.'
          },
          exercise: {
            question: 'Donner un équivalent de 5x³ − 2x quand x tend vers +∞.',
            answer: 'Le terme dominant est 5x³ : 5x³ − 2x ~ 5x³.'
          }
        }
      },
      {
        id: 'sup-espaces-vectoriels',
        title: 'Espaces vectoriels et applications linéaires',
        field: 'Algèbre linéaire',
        summary: 'Sous-espaces, familles, bases, dimension, noyau, image et théorème du rang.',
        lesson: {
          sections: [
            'Un espace vectoriel est un ensemble où l’on peut additionner des vecteurs et les multiplier par un scalaire. Une base est une famille libre et génératrice ; elle permet d’écrire chaque vecteur de façon unique.',
            'Une application linéaire respecte les combinaisons linéaires. Son noyau regroupe les vecteurs envoyés sur 0, son image les valeurs atteintes.'
          ],
          formula: {
            label: 'THÉORÈME DU RANG EN DIMENSION FINIE',
            text: 'dim(E) = dim(ker f) + dim(Im f)'
          },
          example: {
            statement: 'Pour f(x,y) = (x + y, 0), déterminer le noyau.',
            calculation: 'f(x,y) = (0,0) équivaut à x + y = 0. Les vecteurs du noyau sont donc t(1,−1).',
            answer: 'ker f = Vect((1 ; −1)), de dimension 1.'
          },
          exercise: {
            question: 'Une application linéaire de ℝ³ dans ℝ² peut-elle être injective ?',
            answer: 'Non : le rang est au plus 2, donc le noyau a une dimension au moins égale à 1.'
          }
        }
      },
      {
        id: 'sup-matrices',
        title: 'Matrices',
        field: 'Algèbre linéaire',
        summary: 'Matrices d’applications, changements de bases, rang, trace et similitude.',
        lesson: {
          sections: [
            'Une matrice représente une application linéaire dans des bases données. Changer de base modifie sa matrice, mais pas l’application elle-même.',
            'Deux matrices semblables représentent le même endomorphisme dans deux bases différentes ; elles ont notamment le même déterminant et le même polynôme caractéristique.'
          ],
          formula: {
            label: 'CHANGEMENT DE BASE',
            text: 'A′ = P⁻¹AP'
          },
          example: {
            statement: 'Que représente une matrice diagonale diag(2,3) ?',
            calculation: 'Elle multiplie la première coordonnée par 2 et la seconde par 3.',
            answer: '(x ; y) est envoyé sur (2x ; 3y).'
          },
          exercise: {
            question: 'Quel est le rang de la matrice identité de taille 3 ?',
            answer: 'Ses trois colonnes sont indépendantes : son rang est 3.'
          }
        }
      },
      {
        id: 'sup-determinants',
        title: 'Groupe symétrique et déterminants',
        field: 'Algèbre linéaire',
        summary: 'Permutations, signature, déterminants, propriétés et calcul pratique.',
        lesson: {
          sections: [
            'Le déterminant est un nombre associé à une matrice carrée. Il détecte l’inversibilité : une matrice est inversible exactement lorsque son déterminant est non nul.',
            'Pour un système carré, un déterminant non nul garantit une solution unique. En dimension 2, le calcul se fait directement avec les quatre coefficients.'
          ],
          formula: {
            label: 'DÉTERMINANT 2 × 2',
            text: 'det([[a,b],[c,d]]) = ad − bc'
          },
          example: {
            statement: 'Calculer le déterminant de [[2,1],[3,4]].',
            calculation: 'On applique ad − bc : 2 × 4 − 1 × 3 = 8 − 3.',
            answer: 'Le déterminant vaut 5 ; la matrice est inversible.'
          },
          exercise: {
            question: 'La matrice [[1,2],[2,4]] est-elle inversible ?',
            answer: 'Son déterminant vaut 1×4 − 2×2 = 0 : elle n’est pas inversible.'
          }
        }
      },
      {
        id: 'sup-integration',
        title: 'Intégration',
        field: 'Analyse',
        summary: 'Intégrale sur un segment, sommes de Riemann et lien avec les primitives.',
        lesson: {
          sections: [
            'L’intégrale d’une fonction continue sur un segment peut être approchée par des sommes d’aires de rectangles. Les sommes de Riemann convergent vers cette intégrale lorsque le pas devient petit.',
            'Le théorème fondamental relie l’intégrale à une primitive. L’intégration par parties transforme parfois une intégrale difficile en une plus simple.'
          ],
          formula: {
            label: 'INTÉGRATION PAR PARTIES',
            text: '∫ₐᵇ u′v = [uv]ₐᵇ − ∫ₐᵇ uv′'
          },
          example: {
            statement: 'Calculer ∫₀¹ 2x dx.',
            calculation: 'Une primitive de 2x est x². On évalue x² entre 0 et 1.',
            answer: 'L’intégrale vaut 1.'
          },
          exercise: {
            question: 'Calculer ∫₀² 3 dx.',
            answer: 'Une primitive est 3x ; 3×2 − 3×0 = 6.'
          }
        }
      },
      {
        id: 'sup-denombrement',
        title: 'Dénombrement',
        field: 'Probabilités',
        summary: 'Cardinaux, arrangements, combinaisons et coefficients binomiaux.',
        lesson: {
          sections: [
            'Le dénombrement compte des possibilités sans les énumérer une à une. Le principe multiplicatif s’applique lorsque plusieurs choix successifs sont indépendants.',
            'Une combinaison choisit k objets parmi n sans tenir compte de l’ordre ; un arrangement tient compte de l’ordre.'
          ],
          formula: {
            label: 'COMBINAISONS',
            text: 'C(n,k) = n! / (k!(n − k)!)'
          },
          example: {
            statement: 'Combien de groupes de 3 personnes peut-on former parmi 10 ?',
            calculation: 'L’ordre n’importe pas : C(10,3) = 10×9×8/(3×2×1).',
            answer: 'Il existe 120 groupes.'
          },
          exercise: {
            question: 'Combien de façons d’ordonner 4 livres différents ?',
            answer: 'Il y a 4! = 24 ordres.'
          }
        }
      },
      {
        id: 'sup-probabilites',
        title: 'Probabilités',
        field: 'Probabilités',
        summary: 'Univers fini, conditionnement, indépendance, lois, espérance et variance.',
        lesson: {
          sections: [
            'Dans un univers fini équiprobable, la probabilité d’un événement est le nombre de cas favorables divisé par le nombre de cas possibles.',
            'Le conditionnement restreint l’univers à une information connue. L’indépendance signifie que cette information ne modifie pas les probabilités.'
          ],
          formula: {
            label: 'PROBABILITÉ CONDITIONNELLE',
            text: 'P_A(B) = P(A ∩ B) / P(A)'
          },
          example: {
            statement: 'On lance un dé équilibré. Sachant que le résultat est pair, quelle est la probabilité qu’il soit supérieur à 3 ?',
            calculation: 'Les issues paires sont {2,4,6}. Parmi elles, 4 et 6 sont supérieures à 3.',
            answer: 'La probabilité conditionnelle vaut 2/3.'
          },
          exercise: {
            question: 'Deux événements indépendants ont chacun une probabilité 1/2. Quelle est la probabilité de leur intersection ?',
            answer: 'Par indépendance, P(A∩B) = P(A)P(B) = 1/4.'
          }
        }
      },
      {
        id: 'sup-prehilbertiens',
        title: 'Espaces préhilbertiens réels',
        field: 'Algèbre linéaire',
        summary: 'Produit scalaire, orthogonalité, Gram-Schmidt et projection orthogonale.',
        lesson: {
          sections: [
            'Un produit scalaire généralise la notion de perpendicularité. Il définit une norme, une distance et un angle entre vecteurs.',
            'La projection orthogonale décompose un vecteur en une composante parallèle à un sous-espace et une composante perpendiculaire.'
          ],
          formula: {
            label: 'PROJECTION SUR UNE DROITE VECTORIELLE',
            text: 'projᵥ(u) = (u·v / v·v)v'
          },
          example: {
            statement: 'Projeter u = (3,2) sur la droite dirigée par v = (1,0).',
            calculation: 'u·v = 3 et v·v = 1 ; la projection vaut 3(1,0).',
            answer: 'projᵥ(u) = (3,0).'
          },
          exercise: {
            question: 'Les vecteurs (1,2) et (2,−1) sont-ils orthogonaux ?',
            answer: 'Le produit scalaire vaut 1×2 + 2×(−1) = 0 : ils sont orthogonaux.'
          }
        }
      },
      {
        id: 'sup-series',
        title: 'Procédés sommatoires discrets',
        field: 'Analyse',
        summary: 'Séries numériques, convergence, séries à termes positifs et convergence absolue.',
        lesson: {
          sections: [
            'Une série Σuₙ converge lorsque la suite de ses sommes partielles converge. La convergence absolue, obtenue si Σ|uₙ| converge, garantit la convergence de la série.',
            'Pour une série géométrique de raison q, la série converge si et seulement si |q| < 1. Les critères de comparaison permettent ensuite d’étudier d’autres séries.'
          ],
          formula: {
            label: 'SÉRIE GÉOMÉTRIQUE',
            text: 'Si |q| < 1, Σₙ₌₀∞ qⁿ = 1/(1 − q)'
          },
          example: {
            statement: 'Calculer la somme de la série géométrique Σₙ₌₀∞ (1/2)ⁿ.',
            calculation: 'Sa raison est q = 1/2, donc |q| < 1 et la somme vaut 1/(1 − 1/2).',
            answer: 'La somme vaut 2.'
          },
          exercise: {
            question: 'La série Σ(3/2)ⁿ converge-t-elle ?',
            answer: 'Non, car sa raison a une valeur absolue supérieure à 1 ; ses termes ne tendent même pas vers 0.'
          }
        }
      },
      {
        id: 'sup-fonctions-deux-variables',
        title: 'Fonctions de deux variables',
        field: 'Analyse',
        summary: 'Dérivées partielles, gradient, points critiques et recherche d’extremums.',
        lesson: {
          sections: [
            'Pour une fonction f(x,y), les dérivées partielles mesurent les variations lorsque l’on fait varier une coordonnée en gardant l’autre fixe.',
            'Un point critique annule le gradient. Il peut être un minimum, un maximum ou un point selle ; il faut donc examiner le comportement de la fonction autour de lui.'
          ],
          formula: {
            label: 'GRADIENT',
            text: '∇f(x,y) = (∂f/∂x ; ∂f/∂y)'
          },
          example: {
            statement: 'Chercher le minimum de f(x,y) = x² + y².',
            calculation: 'Les dérivées partielles sont 2x et 2y. Elles s’annulent ensemble uniquement en (0,0).',
            answer: 'f(x,y) ≥ 0, avec minimum 0 atteint en (0,0).'
          },
          exercise: {
            question: 'Calculer le gradient de f(x,y) = 3x² + y.',
            answer: '∂f/∂x = 6x et ∂f/∂y = 1, donc ∇f = (6x ; 1).'
          }
        }
      }
    ]
  },
  {
    id: 'pcsi',
    title: 'PCSI · première année',
    note: 'Programme de mathématiques de la filière PCSI, organisé en deux semestres.',
    source: 'https://www.education.gouv.fr/bo/21/Special1/ESRS2035780A.htm',
    chapters: [
      {
        id: 'pcsi-ensembliste',
        title: 'Raisonnement et vocabulaire ensembliste',
        field: 'Algèbre',
        summary: 'Logique, quantificateurs, raisonnements, ensembles et applications.',
        lesson: {
          sections: [
            'Une implication P ⇒ Q dit que toute situation où P est vraie rend Q vraie. Sa réciproque Q ⇒ P doit être démontrée séparément.',
            'Une preuve par contraposée remplace P ⇒ Q par non Q ⇒ non P. Une récurrence comporte une initialisation, une hérédité et une conclusion.'
          ],
          formula: {
            label: 'CONTRAPOSÉE',
            text: 'P ⇒ Q équivaut à non Q ⇒ non P'
          },
          example: {
            statement: 'Montrer que n² + n est pair pour tout entier n.',
            calculation: 'n² + n = n(n + 1). Parmi deux entiers consécutifs, l’un est pair.',
            answer: 'Le produit est pair, donc n² + n est pair.'
          },
          exercise: {
            question: 'Nier « pour tout réel x, x² ≥ 0 ».',
            answer: '« Il existe un réel x tel que x² < 0. » Cette proposition est fausse.'
          }
        }
      },
      {
        id: 'pcsi-calcul-trigo',
        title: 'Compléments de calcul algébrique et de trigonométrie',
        field: 'Algèbre',
        summary: 'Sommes, produits, formule du binôme, inégalités et cercle trigonométrique.',
        lesson: {
          sections: [
            'La formule du binôme développe une puissance de somme grâce aux coefficients C(n,k). Les formules d’addition expriment les fonctions trigonométriques d’une somme à l’aide de celles des angles.',
            'Avant un calcul, repère si l’ordre compte et choisis entre somme, produit, arrangement ou combinaison.'
          ],
          formula: {
            label: 'BINÔME ET ADDITION',
            text: '(a + b)ⁿ = Σ C(n,k)aⁿ⁻ᵏbᵏ  |  cos(a + b) = cos a cos b − sin a sin b'
          },
          example: {
            statement: 'Développer (x + 2)⁴.',
            calculation: 'Les coefficients binomiaux sont 1, 4, 6, 4, 1 ; on multiplie chaque terme par la puissance correspondante de 2.',
            answer: 'x⁴ + 8x³ + 24x² + 32x + 16.'
          },
          exercise: {
            question: 'Quel est le coefficient de x² dans (x + 1)⁵ ?',
            answer: 'C(5,2) = 10.'
          }
        }
      },
      {
        id: 'pcsi-complexes',
        title: 'Nombres complexes',
        field: 'Algèbre',
        summary: 'Conjugaison, module, formes trigonométrique et exponentielle, racines.',
        lesson: {
          sections: [
            'Un complexe s’écrit z = a + ib avec i² = −1. Son conjugué est a − ib et son module vaut √(a² + b²).',
            'La forme trigonométrique z = r(cos θ + i sin θ) facilite les produits : les modules se multiplient et les arguments s’additionnent.'
          ],
          formula: {
            label: 'PRODUIT DE COMPLEXES',
            text: '|zw| = |z||w|  |  arg(zw) = arg(z) + arg(w) [2π]'
          },
          example: {
            statement: 'Résoudre z² + 1 = 0 dans ℂ.',
            calculation: 'L’équation équivaut à z² = −1. Les deux racines carrées de −1 sont opposées.',
            answer: 'z = i ou z = −i.'
          },
          exercise: {
            question: 'Donner le module et un argument de 1 + i.',
            answer: '|1 + i| = √2 et un argument est π/4.'
          }
        }
      },
      {
        id: 'pcsi-calcul-diff',
        title: 'Techniques fondamentales de calcul différentiel et intégral',
        field: 'Analyse',
        summary: 'Fonctions d’une variable, dérivation, primitives et équations différentielles.',
        lesson: {
          sections: [
            'Les règles de dérivation de somme, produit, quotient et composition permettent de calculer une dérivée puis d’étudier les variations.',
            'Une primitive F de f vérifie F′ = f. Les équations différentielles se résolvent en tenant compte de leurs conditions initiales.'
          ],
          formula: {
            label: 'RÈGLES USUELLES',
            text: '(uv)′ = u′v + uv′  |  (f∘g)′ = (f′∘g)g′  |  (eˣ)′ = eˣ'
          },
          example: {
            statement: 'Dériver f(x) = xeˣ.',
            calculation: 'Par la règle du produit, f′(x) = 1 × eˣ + x × eˣ.',
            answer: 'f′(x) = (x + 1)eˣ.'
          },
          exercise: {
            question: 'Dériver (x² + 1)³.',
            answer: 'Par composition : 3(x² + 1)² × 2x = 6x(x² + 1)².'
          }
        }
      },
      {
        id: 'pcsi-reels-suites',
        title: 'Nombres réels et suites numériques',
        field: 'Analyse',
        summary: 'Limites, suites monotones, suites extraites et suites récurrentes.',
        lesson: {
          sections: [
            'La propriété de la borne supérieure garantit qu’un ensemble non vide et majoré de réels possède une plus petite borne supérieure.',
            'Une suite monotone et bornée converge. Pour une suite récurrente, étudie d’abord un intervalle stable et le sens de variation.'
          ],
          formula: {
            label: 'CONVERGENCE MONOTONE',
            text: 'Croissante et majorée ⇒ convergente  |  Décroissante et minorée ⇒ convergente'
          },
          example: {
            statement: 'Étudier la limite de uₙ = 1 − 3⁻ⁿ.',
            calculation: 'La suite 3⁻ⁿ tend vers 0 lorsque n tend vers l’infini.',
            answer: 'uₙ tend vers 1.'
          },
          exercise: {
            question: 'Calculer la limite de uₙ = 2 + 1/(n + 1).',
            answer: 'Le terme 1/(n + 1) tend vers 0 ; la limite est 2.'
          }
        }
      },
      {
        id: 'pcsi-fonctions',
        title: 'Fonctions d’une variable réelle : limites, continuité, dérivabilité',
        field: 'Analyse',
        summary: 'Limites, continuité, théorèmes de Rolle et des accroissements finis.',
        lesson: {
          sections: [
            'Le théorème des accroissements finis relie la pente entre deux points à une valeur de la dérivée. Le théorème de Rolle en est un cas particulier.',
            'Une fonction deux fois dérivable est convexe sur un intervalle lorsque sa dérivée seconde y est positive.'
          ],
          formula: {
            label: 'ACCROISSEMENTS FINIS',
            text: 'Il existe c ∈ ]a ; b[ tel que f(b) − f(a) = f′(c)(b − a)'
          },
          example: {
            statement: 'Étudier la convexité de f(x) = x².',
            calculation: 'f′(x) = 2x et f′′(x) = 2, donc f′′ est positive sur ℝ.',
            answer: 'La fonction carré est convexe sur ℝ.'
          },
          exercise: {
            question: 'Que déduire si f′′(x) < 0 sur un intervalle ?',
            answer: 'La fonction f est concave sur cet intervalle.'
          }
        }
      },
      {
        id: 'pcsi-matrices-systemes',
        title: 'Calcul matriciel et systèmes linéaires',
        field: 'Algèbre',
        summary: 'Opérations matricielles, systèmes linéaires et inversibilité.',
        lesson: {
          sections: [
            'Les opérations élémentaires sur les lignes transforment un système linéaire sans modifier ses solutions. Le pivot de Gauss élimine successivement les inconnues.',
            'Une matrice carrée inversible permet de résoudre AX = B de manière unique pour tout second membre B.'
          ],
          formula: {
            label: 'ÉCRITURE MATRICIELLE',
            text: 'AX = B  |  Si A est inversible, X = A⁻¹B'
          },
          example: {
            statement: 'Résoudre x + y = 5 et x − y = 1.',
            calculation: 'En additionnant, 2x = 6, donc x = 3 ; puis y = 2.',
            answer: 'La solution est (3 ; 2).'
          },
          exercise: {
            question: 'Combien de solutions ont x + y = 2 et 2x + 2y = 4 ?',
            answer: 'Les équations sont dépendantes ; il existe une infinité de solutions.'
          }
        }
      },
      {
        id: 'pcsi-polynomes',
        title: 'Polynômes',
        field: 'Algèbre',
        summary: 'Degré, division euclidienne, racines, multiplicité et factorisation.',
        lesson: {
          sections: [
            'La division euclidienne écrit A = BQ + R avec deg(R) < deg(B). Si a est une racine d’un polynôme P, alors X − a est un facteur de P.',
            'La décomposition en éléments simples réécrit une fraction rationnelle comme somme de fractions plus faciles à étudier ou intégrer.'
          ],
          formula: {
            label: 'THÉORÈME FACTEUR',
            text: 'P(a) = 0 ⇔ P(X) = (X − a)Q(X) pour un polynôme Q'
          },
          example: {
            statement: 'Factoriser X² − 1.',
            calculation: 'C’est une différence de deux carrés.',
            answer: 'X² − 1 = (X − 1)(X + 1).'
          },
          exercise: {
            question: 'Vérifier si 2 est une racine de X² − 3X + 2.',
            answer: '2² − 3×2 + 2 = 0 : 2 est une racine.'
          }
        }
      },
      {
        id: 'pcsi-asymptotique',
        title: 'Analyse asymptotique',
        field: 'Analyse',
        summary: 'Comparaisons, équivalents, développements limités et Taylor-Young.',
        lesson: {
          sections: [
            'Les relations de comparaison décrivent la taille relative de deux fonctions ou suites près d’une limite. L’équivalence f ~ g signifie que leur quotient tend vers 1.',
            'Ces outils simplifient les limites et permettent de remplacer localement une expression par une autre de même comportement dominant.'
          ],
          formula: {
            label: 'ÉQUIVALENT ET DÉVELOPPEMENT LIMITÉ',
            text: 'f ~ g si f/g → 1  |  sin(x) ~ x quand x → 0'
          },
          example: {
            statement: 'Déterminer un équivalent de x² + 3x quand x tend vers +∞.',
            calculation: '(x² + 3x)/x² = 1 + 3/x, et ce quotient tend vers 1.',
            answer: 'x² + 3x ~ x² quand x → +∞.'
          },
          exercise: {
            question: 'Donner un équivalent de 5x³ − 2x quand x tend vers +∞.',
            answer: 'Le terme dominant est 5x³ : 5x³ − 2x ~ 5x³.'
          }
        }
      },
      {
        id: 'pcsi-espaces-vectoriels',
        title: 'Espaces vectoriels et applications linéaires',
        field: 'Algèbre linéaire',
        summary: 'Familles, dimension, applications linéaires, noyau, image et rang.',
        lesson: {
          sections: [
            'Un espace vectoriel est un ensemble où l’on peut additionner des vecteurs et les multiplier par un scalaire. Une base est une famille libre et génératrice ; elle permet d’écrire chaque vecteur de façon unique.',
            'Une application linéaire respecte les combinaisons linéaires. Son noyau regroupe les vecteurs envoyés sur 0, son image les valeurs atteintes.'
          ],
          formula: {
            label: 'THÉORÈME DU RANG EN DIMENSION FINIE',
            text: 'dim(E) = dim(ker f) + dim(Im f)'
          },
          example: {
            statement: 'Pour f(x,y) = (x + y, 0), déterminer le noyau.',
            calculation: 'f(x,y) = (0,0) équivaut à x + y = 0. Les vecteurs du noyau sont donc t(1,−1).',
            answer: 'ker f = Vect((1 ; −1)), de dimension 1.'
          },
          exercise: {
            question: 'Une application linéaire de ℝ³ dans ℝ² peut-elle être injective ?',
            answer: 'Non : le rang est au plus 2, donc le noyau a une dimension au moins égale à 1.'
          }
        }
      },
      {
        id: 'pcsi-matrices-determinants',
        title: 'Matrices et déterminants',
        field: 'Algèbre linéaire',
        summary: 'Rang, changement de base, matrices semblables et déterminants.',
        lesson: {
          sections: [
            'Une matrice peut représenter une application linéaire dans une base. Son rang mesure le nombre de directions indépendantes de son image.',
            'Le déterminant d’une matrice carrée teste son inversibilité. Pour une matrice 2 × 2, un calcul direct suffit ; en dimension supérieure, on utilise les opérations et propriétés du déterminant.'
          ],
          formula: {
            label: 'DÉTERMINANT EN DIMENSION 2',
            text: 'det([[a,b],[c,d]]) = ad − bc'
          },
          example: {
            statement: 'La matrice A = [[1,2],[3,4]] est-elle inversible ?',
            calculation: 'det(A) = 1×4 − 2×3 = −2, qui est non nul.',
            answer: 'A est inversible.'
          },
          exercise: {
            question: 'Calculer le déterminant de la matrice diagonale [[2,0],[0,−3]].',
            answer: 'Le déterminant vaut 2×(−3) = −6.'
          }
        }
      },
      {
        id: 'pcsi-integration',
        title: 'Intégration',
        field: 'Analyse',
        summary: 'Intégrale sur un segment, sommes de Riemann et lien intégrale-primitive.',
        lesson: {
          sections: [
            'L’intégrale d’une fonction continue sur un segment peut être approchée par des sommes d’aires de rectangles. Les sommes de Riemann convergent vers cette intégrale lorsque le pas devient petit.',
            'Le théorème fondamental relie l’intégrale à une primitive. L’intégration par parties transforme parfois une intégrale difficile en une plus simple.'
          ],
          formula: {
            label: 'INTÉGRATION PAR PARTIES',
            text: '∫ₐᵇ u′v = [uv]ₐᵇ − ∫ₐᵇ uv′'
          },
          example: {
            statement: 'Calculer ∫₀¹ 2x dx.',
            calculation: 'Une primitive de 2x est x². On évalue x² entre 0 et 1.',
            answer: 'L’intégrale vaut 1.'
          },
          exercise: {
            question: 'Calculer ∫₀² 3 dx.',
            answer: 'Une primitive est 3x ; 3×2 − 3×0 = 6.'
          }
        }
      },
      {
        id: 'pcsi-denombrement',
        title: 'Dénombrement',
        field: 'Probabilités',
        summary: 'Cardinaux, permutations, arrangements, combinaisons et coefficients binomiaux.',
        lesson: {
          sections: [
            'Le dénombrement compte des possibilités sans les énumérer une à une. Le principe multiplicatif s’applique lorsque plusieurs choix successifs sont indépendants.',
            'Une combinaison choisit k objets parmi n sans tenir compte de l’ordre ; un arrangement tient compte de l’ordre.'
          ],
          formula: {
            label: 'COMBINAISONS',
            text: 'C(n,k) = n! / (k!(n − k)!)'
          },
          example: {
            statement: 'Combien de groupes de 3 personnes peut-on former parmi 10 ?',
            calculation: 'L’ordre n’importe pas : C(10,3) = 10×9×8/(3×2×1).',
            answer: 'Il existe 120 groupes.'
          },
          exercise: {
            question: 'Combien de façons d’ordonner 4 livres différents ?',
            answer: 'Il y a 4! = 24 ordres.'
          }
        }
      },
      {
        id: 'pcsi-probabilites',
        title: 'Probabilités',
        field: 'Probabilités',
        summary: 'Conditionnement, indépendance, lois usuelles, espérance et variance.',
        lesson: {
          sections: [
            'Dans un univers fini équiprobable, la probabilité d’un événement est le nombre de cas favorables divisé par le nombre de cas possibles.',
            'Le conditionnement restreint l’univers à une information connue. L’indépendance signifie que cette information ne modifie pas les probabilités.'
          ],
          formula: {
            label: 'PROBABILITÉ CONDITIONNELLE',
            text: 'P_A(B) = P(A ∩ B) / P(A)'
          },
          example: {
            statement: 'On lance un dé équilibré. Sachant que le résultat est pair, quelle est la probabilité qu’il soit supérieur à 3 ?',
            calculation: 'Les issues paires sont {2,4,6}. Parmi elles, 4 et 6 sont supérieures à 3.',
            answer: 'La probabilité conditionnelle vaut 2/3.'
          },
          exercise: {
            question: 'Deux événements indépendants ont chacun une probabilité 1/2. Quelle est la probabilité de leur intersection ?',
            answer: 'Par indépendance, P(A∩B) = P(A)P(B) = 1/4.'
          }
        }
      },
      {
        id: 'pcsi-prehilbertiens',
        title: 'Espaces préhilbertiens réels',
        field: 'Algèbre linéaire',
        summary: 'Produit scalaire, orthogonalité, bases orthonormées et projections.',
        lesson: {
          sections: [
            'Un produit scalaire généralise la notion de perpendicularité. Il définit une norme, une distance et un angle entre vecteurs.',
            'La projection orthogonale décompose un vecteur en une composante parallèle à un sous-espace et une composante perpendiculaire.'
          ],
          formula: {
            label: 'PROJECTION SUR UNE DROITE VECTORIELLE',
            text: 'projᵥ(u) = (u·v / v·v)v'
          },
          example: {
            statement: 'Projeter u = (3,2) sur la droite dirigée par v = (1,0).',
            calculation: 'u·v = 3 et v·v = 1 ; la projection vaut 3(1,0).',
            answer: 'projᵥ(u) = (3,0).'
          },
          exercise: {
            question: 'Les vecteurs (1,2) et (2,−1) sont-ils orthogonaux ?',
            answer: 'Le produit scalaire vaut 1×2 + 2×(−1) = 0 : ils sont orthogonaux.'
          }
        }
      },
      {
        id: 'pcsi-series',
        title: 'Séries numériques',
        field: 'Analyse',
        summary: 'Convergence, séries géométriques, séries de Riemann et convergence absolue.',
        lesson: {
          sections: [
            'Une série Σuₙ converge lorsque la suite de ses sommes partielles converge. La convergence absolue, obtenue si Σ|uₙ| converge, garantit la convergence de la série.',
            'Pour une série géométrique de raison q, la série converge si et seulement si |q| < 1. Les critères de comparaison permettent ensuite d’étudier d’autres séries.'
          ],
          formula: {
            label: 'SÉRIE GÉOMÉTRIQUE',
            text: 'Si |q| < 1, Σₙ₌₀∞ qⁿ = 1/(1 − q)'
          },
          example: {
            statement: 'Calculer la somme de la série géométrique Σₙ₌₀∞ (1/2)ⁿ.',
            calculation: 'Sa raison est q = 1/2, donc |q| < 1 et la somme vaut 1/(1 − 1/2).',
            answer: 'La somme vaut 2.'
          },
          exercise: {
            question: 'La série Σ(3/2)ⁿ converge-t-elle ?',
            answer: 'Non, car sa raison a une valeur absolue supérieure à 1 ; ses termes ne tendent même pas vers 0.'
          }
        }
      },
      {
        id: 'pcsi-fonctions-deux-variables',
        title: 'Fonctions de deux variables',
        field: 'Analyse',
        summary: 'Continuité, dérivées partielles, gradient et extremums.',
        lesson: {
          sections: [
            'Pour une fonction f(x,y), les dérivées partielles mesurent les variations lorsque l’on fait varier une coordonnée en gardant l’autre fixe.',
            'Un point critique annule le gradient. Il peut être un minimum, un maximum ou un point selle ; il faut donc examiner le comportement de la fonction autour de lui.'
          ],
          formula: {
            label: 'GRADIENT',
            text: '∇f(x,y) = (∂f/∂x ; ∂f/∂y)'
          },
          example: {
            statement: 'Chercher le minimum de f(x,y) = x² + y².',
            calculation: 'Les dérivées partielles sont 2x et 2y. Elles s’annulent ensemble uniquement en (0,0).',
            answer: 'f(x,y) ≥ 0, avec minimum 0 atteint en (0,0).'
          },
          exercise: {
            question: 'Calculer le gradient de f(x,y) = 3x² + y.',
            answer: '∂f/∂x = 6x et ∂f/∂y = 1, donc ∇f = (6x ; 1).'
          }
        }
      }
    ]
  },
  {
    id: 'mp-mpi',
    title: 'MP / MPI · deuxième année',
    note: 'Les programmes de mathématiques MP et MPI sont communs.',
    source: 'https://www.education.gouv.fr/bo/21/Hebdo31/ESRS2111702A.htm',
    chapters: [
      {
        id: 'spe-structures',
        title: 'Structures algébriques usuelles',
        field: 'Algèbre',
        summary: 'Groupes, anneaux, idéaux et algèbres.',
        lesson: {
          sections: [
            'En deuxième année, les structures algébriques servent à organiser les opérations sur les ensembles de nombres et de polynômes. On étudie notamment les sous-groupes, les idéaux et les morphismes.',
            'Un idéal permet de construire un anneau quotient ; les classes modulo n donnent l’anneau ℤ/nℤ.'
          ],
          formula: {
            label: 'CONGRUENCE MODULO n',
            text: 'a ≡ b [n] ⇔ n divise (a − b)'
          },
          example: {
            statement: 'Calculer 17 modulo 5.',
            calculation: '17 = 3×5 + 2, donc le reste de la division est 2.',
            answer: '17 ≡ 2 [5].'
          },
          exercise: {
            question: 'À quelle classe modulo 4 appartient −1 ?',
            answer: '−1 = 3 − 4, donc −1 ≡ 3 [4].'
          }
        }
      },
      {
        id: 'spe-reduction',
        title: 'Réduction des endomorphismes et des matrices carrées',
        field: 'Algèbre linéaire',
        summary: 'Valeurs propres, diagonalisation, polynômes annulateurs et théorème de Cayley-Hamilton.',
        lesson: {
          sections: [
            'Une valeur propre λ de f est un scalaire pour lequel il existe un vecteur non nul x tel que f(x) = λx. Les vecteurs associés forment le sous-espace propre.',
            'Une base de vecteurs propres permet de représenter l’endomorphisme par une matrice diagonale. La réduction simplifie alors les puissances et l’étude de l’évolution d’un système.'
          ],
          formula: {
            label: 'CONDITION DE VALEUR PROPRE',
            text: 'det(A − λI) = 0'
          },
          example: {
            statement: 'Diagonaliser la matrice diagonale A = diag(2,3).',
            calculation: 'Les vecteurs de la base canonique sont déjà des vecteurs propres, associés respectivement à 2 et 3.',
            answer: 'A est déjà diagonale ; ses valeurs propres sont 2 et 3.'
          },
          exercise: {
            question: 'Quelles sont les valeurs propres de diag(−1,4,4) ?',
            answer: 'Les valeurs propres sont −1 et 4 ; 4 est de multiplicité 2.'
          }
        }
      },
      {
        id: 'spe-euclidien',
        title: 'Endomorphismes d’un espace euclidien',
        field: 'Algèbre linéaire',
        summary: 'Isométries, matrices orthogonales, théorème spectral et endomorphismes autoadjoints.',
        lesson: {
          sections: [
            'Un endomorphisme orthogonal conserve le produit scalaire et les longueurs. Sa matrice dans une base orthonormée est une matrice orthogonale.',
            'Le théorème spectral affirme qu’un endomorphisme autoadjoint possède une base orthonormée de vecteurs propres. Cette base rend la matrice diagonale réelle.'
          ],
          formula: {
            label: 'MATRICE ORTHOGONALE',
            text: 'AᵀA = I  |  A⁻¹ = Aᵀ'
          },
          example: {
            statement: 'La matrice identité est-elle orthogonale ?',
            calculation: 'IᵀI = I×I = I.',
            answer: 'Oui ; elle conserve les produits scalaires et les normes.'
          },
          exercise: {
            question: 'Que vaut le déterminant d’une matrice orthogonale ?',
            answer: 'Son déterminant vaut 1 ou −1.'
          }
        }
      },
      {
        id: 'spe-topologie',
        title: 'Topologie des espaces vectoriels normés',
        field: 'Analyse',
        summary: 'Normes, ouverts, fermés, continuité, compacité et équivalence des normes.',
        lesson: {
          sections: [
            'Une norme mesure la taille d’un vecteur et induit une distance. Elle permet de définir les boules, les suites convergentes, les ouverts et les fermés.',
            'En dimension finie, toutes les normes sont équivalentes : elles définissent les mêmes notions de convergence et de continuité. La compacité transforme ensuite des propriétés locales en résultats globaux.'
          ],
          formula: {
            label: 'DISTANCE INDUITE PAR UNE NORME',
            text: 'd(x,y) = ||x − y||'
          },
          example: {
            statement: 'Dans ℝ² muni de la norme usuelle, décrire la boule de centre (0,0) et de rayon 1.',
            calculation: 'La condition est √(x² + y²) < 1, soit x² + y² < 1.',
            answer: 'C’est le disque ouvert unité.'
          },
          exercise: {
            question: 'La suite (1/n) converge-t-elle vers 0 dans ℝ ?',
            answer: 'Oui : sa distance à 0 vaut 1/n, qui tend vers 0.'
          }
        }
      },
      {
        id: 'spe-series-vectorielles',
        title: 'Séries numériques et vectorielles',
        field: 'Analyse',
        summary: 'Convergence, comparaisons, séries vectorielles et théorème de Cesàro.',
        lesson: {
          sections: [
            'Une série Σuₙ dans un espace vectoriel normé converge lorsque ses sommes partielles convergent. En dimension finie, on peut étudier la convergence coordonnée par coordonnée.',
            'La convergence absolue, obtenue lorsque Σ||uₙ|| converge, implique la convergence de la série. Les comparaisons et les séries de référence sont les outils usuels.'
          ],
          formula: {
            label: 'CRITÈRE DE CONVERGENCE ABSOLUE',
            text: 'Σ ||uₙ|| converge ⇒ Σ uₙ converge'
          },
          example: {
            statement: 'La série vectorielle de terme uₙ = (2⁻ⁿ, 3⁻ⁿ) converge-t-elle ?',
            calculation: 'Chacune des deux coordonnées est une série géométrique convergente, de raison 1/2 et 1/3.',
            answer: 'La série converge coordonnée par coordonnée dans ℝ².'
          },
          exercise: {
            question: 'Que peut-on conclure si la série des normes Σ||uₙ|| converge ?',
            answer: 'La série vectorielle Σuₙ converge absolument, donc converge.'
          }
        }
      },
      {
        id: 'spe-series-fonctions',
        title: 'Suites et séries de fonctions, séries entières',
        field: 'Analyse',
        summary: 'Convergences simple, uniforme et normale, régularité et séries entières.',
        lesson: {
          sections: [
            'La convergence simple signifie que, pour chaque x fixé, la série numérique converge. La convergence uniforme contrôle l’erreur simultanément pour tous les x de l’ensemble.',
            'Une série entière Σaₙxⁿ converge à l’intérieur de son rayon R ; dans cet intervalle, elle définit une fonction que l’on peut souvent dériver terme à terme.'
          ],
          formula: {
            label: 'SÉRIE GÉOMÉTRIQUE EN x',
            text: 'Σₙ₌₀∞ xⁿ = 1/(1 − x) si |x| < 1'
          },
          example: {
            statement: 'Pour quelles valeurs de x la série Σxⁿ converge-t-elle ?',
            calculation: 'C’est une série géométrique de raison x ; elle converge si et seulement si |x| < 1.',
            answer: 'Son rayon de convergence vaut 1.'
          },
          exercise: {
            question: 'Quelle fonction représente Σₙ₌₀∞ (x/2)ⁿ pour |x| < 2 ?',
            answer: 'La somme vaut 1/(1 − x/2) = 2/(2 − x).'
          }
        }
      },
      {
        id: 'spe-fonctions-vectorielles',
        title: 'Fonctions vectorielles',
        field: 'Analyse',
        summary: 'Dérivation, intégration et formules de Taylor pour les fonctions à valeurs vectorielles.',
        lesson: {
          sections: [
            'Une fonction vectorielle associe à chaque réel un vecteur. Sa dérivée se calcule coordonnée par coordonnée dans une base.',
            'L’intégrale d’une fonction vectorielle se calcule également coordonnée par coordonnée ; elle représente le déplacement cumulé lorsque la fonction décrit une vitesse.'
          ],
          formula: {
            label: 'DÉRIVATION COORDONNÉE',
            text: 'Si f(t) = (x(t), y(t)), alors f′(t) = (x′(t), y′(t))'
          },
          example: {
            statement: 'Dériver f(t) = (t ; t²).',
            calculation: 'On dérive chaque coordonnée : (t)′ = 1 et (t²)′ = 2t.',
            answer: 'f′(t) = (1 ; 2t).'
          },
          exercise: {
            question: 'Dériver g(t) = (cos t ; eᵗ).',
            answer: 'g′(t) = (−sin t ; eᵗ).'
          }
        }
      },
      {
        id: 'spe-integrales',
        title: 'Intégration sur un intervalle quelconque',
        field: 'Analyse',
        summary: 'Intégrales généralisées, convergence dominée et intégration à paramètre.',
        lesson: {
          sections: [
            'Une intégrale sur un intervalle non borné est la limite d’intégrales sur des segments lorsque la borne tend vers l’infini. Elle converge si cette limite est finie.',
            'Les comparaisons avec des fonctions positives de référence aident à décider si une intégrale impropre converge.'
          ],
          formula: {
            label: 'INTÉGRALE IMPROPRE',
            text: '∫ₐ∞ f(x)dx = limᵦ→∞ ∫ₐᵇ f(x)dx'
          },
          example: {
            statement: 'Étudier ∫₁∞ 1/x² dx.',
            calculation: 'Une primitive de 1/x² est −1/x. L’intégrale jusqu’à b vaut 1 − 1/b.',
            answer: 'La limite vaut 1 ; l’intégrale converge.'
          },
          exercise: {
            question: 'L’intégrale ∫₁∞ 1/x dx converge-t-elle ?',
            answer: 'Non : l’intégrale jusqu’à b vaut ln(b), qui tend vers +∞.'
          }
        }
      },
      {
        id: 'spe-variables',
        title: 'Variables aléatoires discrètes',
        field: 'Probabilités',
        summary: 'Lois discrètes, espérance, variance, lois géométrique et de Poisson.',
        lesson: {
          sections: [
            'Une variable aléatoire discrète peut prendre un ensemble fini ou dénombrable de valeurs. Sa loi associe une probabilité à chaque valeur possible.',
            'L’espérance est définie lorsque la somme des valeurs absolues pondérées converge. Les lois géométrique et de Poisson modélisent des situations de comptage distinctes.'
          ],
          formula: {
            label: 'LOI GÉOMÉTRIQUE',
            text: 'P(X = k) = p(1 − p)ᵏ⁻¹ pour k ≥ 1  |  E(X) = 1/p'
          },
          example: {
            statement: 'On répète une épreuve de succès p = 1/4 jusqu’au premier succès. Quelle est l’attente moyenne ?',
            calculation: 'Le rang du premier succès suit une loi géométrique de paramètre p = 1/4.',
            answer: 'E(X) = 1/p = 4 essais.'
          },
          exercise: {
            question: 'Quelle est la probabilité que le premier succès arrive au troisième essai si p = 1/2 ?',
            answer: 'Il faut deux échecs puis un succès : (1/2)² × (1/2) = 1/8.'
          }
        }
      },
      {
        id: 'spe-equations-diff',
        title: 'Équations différentielles linéaires',
        field: 'Analyse',
        summary: 'Systèmes différentiels linéaires et exponentielle de matrice.',
        lesson: {
          sections: [
            'Un système différentiel linéaire s’écrit X′ = AX + B(t). Pour le système homogène à coefficients constants, la matrice exponentielle joue le rôle de l’exponentielle scalaire.',
            'La solution générale contient des constantes déterminées par les conditions initiales.'
          ],
          formula: {
            label: 'SYSTÈME HOMOGÈNE À COEFFICIENTS CONSTANTS',
            text: 'X′ = AX  ⇒  X(t) = eᵗᴬX(0)'
          },
          example: {
            statement: 'Résoudre y′ = 3y avec y(0) = 2.',
            calculation: 'L’équation homogène a pour solutions y(t) = Ce³ᵗ. La condition initiale impose C = 2.',
            answer: 'y(t) = 2e³ᵗ.'
          },
          exercise: {
            question: 'Quelle est la solution de y′ = −2y avec y(0) = 5 ?',
            answer: 'y(t) = 5e⁻²ᵗ.'
          }
        }
      },
      {
        id: 'spe-optimisation',
        title: 'Calcul différentiel et optimisation',
        field: 'Analyse',
        summary: 'Différentielle, gradient, règle de la chaîne et recherche d’extremums.',
        lesson: {
          sections: [
            'Le gradient regroupe les dérivées partielles et indique la direction de variation la plus forte. Un extremum intérieur d’une fonction différentiable se trouve parmi les points où le gradient s’annule.',
            'La matrice hessienne permet d’étudier la nature du point critique : minimum, maximum ou point selle.'
          ],
          formula: {
            label: 'CONDITION NÉCESSAIRE D’EXTREMUM INTÉRIEUR',
            text: '∇f(a) = 0'
          },
          example: {
            statement: 'Chercher le minimum de f(x,y) = x² + y².',
            calculation: 'Le gradient vaut (2x,2y) et s’annule en (0,0). Comme f(x,y) ≥ 0 partout, ce point est un minimum global.',
            answer: 'Le minimum vaut 0 en (0,0).'
          },
          exercise: {
            question: 'Trouver le point critique de f(x,y) = (x − 1)² + (y + 2)².',
            answer: 'Le gradient s’annule en (1,−2), où f atteint son minimum 0.'
          }
        }
      }
    ]
  },
  {
    id: 'pc',
    title: 'PC · deuxième année',
    note: 'Sept sections dans le programme de mathématiques de la filière PC.',
    source: 'https://www.education.gouv.fr/bo/21/Hebdo31/ESRS2111703A.htm',
    chapters: [
      {
        id: 'pc-algebre-lineaire',
        title: 'Algèbre linéaire',
        field: 'Algèbre',
        summary: 'Espaces vectoriels, réduction des endomorphismes, diagonalisation et trigonalisation.',
        lesson: {
          sections: [
            'Une valeur propre λ de f est un scalaire pour lequel il existe un vecteur non nul x tel que f(x) = λx. Les vecteurs associés forment le sous-espace propre.',
            'Une base de vecteurs propres permet de représenter l’endomorphisme par une matrice diagonale. La réduction simplifie alors les puissances et l’étude de l’évolution d’un système.'
          ],
          formula: {
            label: 'CONDITION DE VALEUR PROPRE',
            text: 'det(A − λI) = 0'
          },
          example: {
            statement: 'Diagonaliser la matrice diagonale A = diag(2,3).',
            calculation: 'Les vecteurs de la base canonique sont déjà des vecteurs propres, associés respectivement à 2 et 3.',
            answer: 'A est déjà diagonale ; ses valeurs propres sont 2 et 3.'
          },
          exercise: {
            question: 'Quelles sont les valeurs propres de diag(−1,4,4) ?',
            answer: 'Les valeurs propres sont −1 et 4 ; 4 est de multiplicité 2.'
          }
        }
      },
      {
        id: 'pc-espaces-euclidiens',
        title: 'Endomorphismes des espaces euclidiens',
        field: 'Algèbre',
        summary: 'Isométries, théorème spectral et endomorphismes autoadjoints.',
        lesson: {
          sections: [
            'Un endomorphisme orthogonal conserve le produit scalaire et les longueurs. Sa matrice dans une base orthonormée est une matrice orthogonale.',
            'Le théorème spectral affirme qu’un endomorphisme autoadjoint possède une base orthonormée de vecteurs propres. Cette base rend la matrice diagonale réelle.'
          ],
          formula: {
            label: 'MATRICE ORTHOGONALE',
            text: 'AᵀA = I  |  A⁻¹ = Aᵀ'
          },
          example: {
            statement: 'La matrice identité est-elle orthogonale ?',
            calculation: 'IᵀI = I×I = I.',
            answer: 'Oui ; elle conserve les produits scalaires et les normes.'
          },
          exercise: {
            question: 'Que vaut le déterminant d’une matrice orthogonale ?',
            answer: 'Son déterminant vaut 1 ou −1.'
          }
        }
      },
      {
        id: 'pc-evn',
        title: 'Espaces vectoriels normés',
        field: 'Analyse',
        summary: 'Normes, ouverts, fermés, limites, continuité et équivalence des normes.',
        lesson: {
          sections: [
            'Une norme mesure la taille d’un vecteur et induit une distance. Elle permet de définir les boules, les suites convergentes, les ouverts et les fermés.',
            'En dimension finie, toutes les normes sont équivalentes : elles définissent les mêmes notions de convergence et de continuité. La compacité transforme ensuite des propriétés locales en résultats globaux.'
          ],
          formula: {
            label: 'DISTANCE INDUITE PAR UNE NORME',
            text: 'd(x,y) = ||x − y||'
          },
          example: {
            statement: 'Dans ℝ² muni de la norme usuelle, décrire la boule de centre (0,0) et de rayon 1.',
            calculation: 'La condition est √(x² + y²) < 1, soit x² + y² < 1.',
            answer: 'C’est le disque ouvert unité.'
          },
          exercise: {
            question: 'La suite (1/n) converge-t-elle vers 0 dans ℝ ?',
            answer: 'Oui : sa distance à 0 vaut 1/n, qui tend vers 0.'
          }
        }
      },
      {
        id: 'pc-series-fonctions',
        title: 'Suites et séries de fonctions',
        field: 'Analyse',
        summary: 'Convergences de suites et séries, régularité et séries entières.',
        lesson: {
          sections: [
            'La convergence simple signifie que, pour chaque x fixé, la série numérique converge. La convergence uniforme contrôle l’erreur simultanément pour tous les x de l’ensemble.',
            'Une série entière Σaₙxⁿ converge à l’intérieur de son rayon R ; dans cet intervalle, elle définit une fonction que l’on peut souvent dériver terme à terme.'
          ],
          formula: {
            label: 'SÉRIE GÉOMÉTRIQUE EN x',
            text: 'Σₙ₌₀∞ xⁿ = 1/(1 − x) si |x| < 1'
          },
          example: {
            statement: 'Pour quelles valeurs de x la série Σxⁿ converge-t-elle ?',
            calculation: 'C’est une série géométrique de raison x ; elle converge si et seulement si |x| < 1.',
            answer: 'Son rayon de convergence vaut 1.'
          },
          exercise: {
            question: 'Quelle fonction représente Σₙ₌₀∞ (x/2)ⁿ pour |x| < 2 ?',
            answer: 'La somme vaut 1/(1 − x/2) = 2/(2 − x).'
          }
        }
      },
      {
        id: 'pc-integrales',
        title: 'Intégration sur un intervalle quelconque',
        field: 'Analyse',
        summary: 'Intégrales généralisées, convergence dominée et intégration à paramètre.',
        lesson: {
          sections: [
            'Une intégrale sur un intervalle non borné est la limite d’intégrales sur des segments lorsque la borne tend vers l’infini. Elle converge si cette limite est finie.',
            'Les comparaisons avec des fonctions positives de référence aident à décider si une intégrale impropre converge.'
          ],
          formula: {
            label: 'INTÉGRALE IMPROPRE',
            text: '∫ₐ∞ f(x)dx = limᵦ→∞ ∫ₐᵇ f(x)dx'
          },
          example: {
            statement: 'Étudier ∫₁∞ 1/x² dx.',
            calculation: 'Une primitive de 1/x² est −1/x. L’intégrale jusqu’à b vaut 1 − 1/b.',
            answer: 'La limite vaut 1 ; l’intégrale converge.'
          },
          exercise: {
            question: 'L’intégrale ∫₁∞ 1/x dx converge-t-elle ?',
            answer: 'Non : l’intégrale jusqu’à b vaut ln(b), qui tend vers +∞.'
          }
        }
      },
      {
        id: 'pc-variables',
        title: 'Variables aléatoires discrètes',
        field: 'Probabilités',
        summary: 'Lois discrètes, espérance, variance et loi faible des grands nombres.',
        lesson: {
          sections: [
            'Une variable aléatoire discrète peut prendre un ensemble fini ou dénombrable de valeurs. Sa loi associe une probabilité à chaque valeur possible.',
            'L’espérance est définie lorsque la somme des valeurs absolues pondérées converge. Les lois géométrique et de Poisson modélisent des situations de comptage distinctes.'
          ],
          formula: {
            label: 'LOI GÉOMÉTRIQUE',
            text: 'P(X = k) = p(1 − p)ᵏ⁻¹ pour k ≥ 1  |  E(X) = 1/p'
          },
          example: {
            statement: 'On répète une épreuve de succès p = 1/4 jusqu’au premier succès. Quelle est l’attente moyenne ?',
            calculation: 'Le rang du premier succès suit une loi géométrique de paramètre p = 1/4.',
            answer: 'E(X) = 1/p = 4 essais.'
          },
          exercise: {
            question: 'Quelle est la probabilité que le premier succès arrive au troisième essai si p = 1/2 ?',
            answer: 'Il faut deux échecs puis un succès : (1/2)² × (1/2) = 1/8.'
          }
        }
      },
      {
        id: 'pc-calcul-differentiel',
        title: 'Calcul différentiel',
        field: 'Analyse',
        summary: 'Dérivées partielles, gradient, matrice hessienne et optimisation.',
        lesson: {
          sections: [
            'Le gradient regroupe les dérivées partielles et indique la direction de variation la plus forte. Un extremum intérieur d’une fonction différentiable se trouve parmi les points où le gradient s’annule.',
            'La matrice hessienne permet d’étudier la nature du point critique : minimum, maximum ou point selle.'
          ],
          formula: {
            label: 'CONDITION NÉCESSAIRE D’EXTREMUM INTÉRIEUR',
            text: '∇f(a) = 0'
          },
          example: {
            statement: 'Chercher le minimum de f(x,y) = x² + y².',
            calculation: 'Le gradient vaut (2x,2y) et s’annule en (0,0). Comme f(x,y) ≥ 0 partout, ce point est un minimum global.',
            answer: 'Le minimum vaut 0 en (0,0).'
          },
          exercise: {
            question: 'Trouver le point critique de f(x,y) = (x − 1)² + (y + 2)².',
            answer: 'Le gradient s’annule en (1,−2), où f atteint son minimum 0.'
          }
        }
      }
    ]
  },
  {
    id: 'psi',
    title: 'PSI · deuxième année',
    note: 'La filière PSI suit un programme distinct de PC ; ces intitulés sont organisés en grands thèmes de mathématiques.',
    chapters: [
      {
        id: 'psi-algebre-lineaire',
        title: 'Algèbre linéaire et réduction',
        field: 'Algèbre',
        summary: 'Applications linéaires, matrices, valeurs propres et réduction.',
        lesson: {
          sections: [
            'Une valeur propre λ de f est un scalaire pour lequel il existe un vecteur non nul x tel que f(x) = λx. Les vecteurs associés forment le sous-espace propre.',
            'Une base de vecteurs propres permet de représenter l’endomorphisme par une matrice diagonale. La réduction simplifie alors les puissances et l’étude de l’évolution d’un système.'
          ],
          formula: {
            label: 'CONDITION DE VALEUR PROPRE',
            text: 'det(A − λI) = 0'
          },
          example: {
            statement: 'Diagonaliser la matrice diagonale A = diag(2,3).',
            calculation: 'Les vecteurs de la base canonique sont déjà des vecteurs propres, associés respectivement à 2 et 3.',
            answer: 'A est déjà diagonale ; ses valeurs propres sont 2 et 3.'
          },
          exercise: {
            question: 'Quelles sont les valeurs propres de diag(−1,4,4) ?',
            answer: 'Les valeurs propres sont −1 et 4 ; 4 est de multiplicité 2.'
          }
        }
      },
      {
        id: 'psi-espaces-euclidiens',
        title: 'Espaces euclidiens',
        field: 'Algèbre',
        summary: 'Produit scalaire, orthogonalité, isométries et théorème spectral.',
        lesson: {
          sections: [
            'Un endomorphisme orthogonal conserve le produit scalaire et les longueurs. Sa matrice dans une base orthonormée est une matrice orthogonale.',
            'Le théorème spectral affirme qu’un endomorphisme autoadjoint possède une base orthonormée de vecteurs propres. Cette base rend la matrice diagonale réelle.'
          ],
          formula: {
            label: 'MATRICE ORTHOGONALE',
            text: 'AᵀA = I  |  A⁻¹ = Aᵀ'
          },
          example: {
            statement: 'La matrice identité est-elle orthogonale ?',
            calculation: 'IᵀI = I×I = I.',
            answer: 'Oui ; elle conserve les produits scalaires et les normes.'
          },
          exercise: {
            question: 'Que vaut le déterminant d’une matrice orthogonale ?',
            answer: 'Son déterminant vaut 1 ou −1.'
          }
        }
      },
      {
        id: 'psi-topologie',
        title: 'Espaces vectoriels normés et topologie',
        field: 'Analyse',
        summary: 'Normes, convergence, continuité et compacité.',
        lesson: {
          sections: [
            'Une norme mesure la taille d’un vecteur et induit une distance. Elle permet de définir les boules, les suites convergentes, les ouverts et les fermés.',
            'En dimension finie, toutes les normes sont équivalentes : elles définissent les mêmes notions de convergence et de continuité. La compacité transforme ensuite des propriétés locales en résultats globaux.'
          ],
          formula: {
            label: 'DISTANCE INDUITE PAR UNE NORME',
            text: 'd(x,y) = ||x − y||'
          },
          example: {
            statement: 'Dans ℝ² muni de la norme usuelle, décrire la boule de centre (0,0) et de rayon 1.',
            calculation: 'La condition est √(x² + y²) < 1, soit x² + y² < 1.',
            answer: 'C’est le disque ouvert unité.'
          },
          exercise: {
            question: 'La suite (1/n) converge-t-elle vers 0 dans ℝ ?',
            answer: 'Oui : sa distance à 0 vaut 1/n, qui tend vers 0.'
          }
        }
      },
      {
        id: 'psi-series',
        title: 'Séries et suites de fonctions',
        field: 'Analyse',
        summary: 'Convergence de suites et séries, séries entières et régularité.',
        lesson: {
          sections: [
            'La convergence simple signifie que, pour chaque x fixé, la série numérique converge. La convergence uniforme contrôle l’erreur simultanément pour tous les x de l’ensemble.',
            'Une série entière Σaₙxⁿ converge à l’intérieur de son rayon R ; dans cet intervalle, elle définit une fonction que l’on peut souvent dériver terme à terme.'
          ],
          formula: {
            label: 'SÉRIE GÉOMÉTRIQUE EN x',
            text: 'Σₙ₌₀∞ xⁿ = 1/(1 − x) si |x| < 1'
          },
          example: {
            statement: 'Pour quelles valeurs de x la série Σxⁿ converge-t-elle ?',
            calculation: 'C’est une série géométrique de raison x ; elle converge si et seulement si |x| < 1.',
            answer: 'Son rayon de convergence vaut 1.'
          },
          exercise: {
            question: 'Quelle fonction représente Σₙ₌₀∞ (x/2)ⁿ pour |x| < 2 ?',
            answer: 'La somme vaut 1/(1 − x/2) = 2/(2 − x).'
          }
        }
      },
      {
        id: 'psi-integration',
        title: 'Intégration et intégrales généralisées',
        field: 'Analyse',
        summary: 'Intégrales sur un intervalle quelconque et convergence.',
        lesson: {
          sections: [
            'Une intégrale sur un intervalle non borné est la limite d’intégrales sur des segments lorsque la borne tend vers l’infini. Elle converge si cette limite est finie.',
            'Les comparaisons avec des fonctions positives de référence aident à décider si une intégrale impropre converge.'
          ],
          formula: {
            label: 'INTÉGRALE IMPROPRE',
            text: '∫ₐ∞ f(x)dx = limᵦ→∞ ∫ₐᵇ f(x)dx'
          },
          example: {
            statement: 'Étudier ∫₁∞ 1/x² dx.',
            calculation: 'Une primitive de 1/x² est −1/x. L’intégrale jusqu’à b vaut 1 − 1/b.',
            answer: 'La limite vaut 1 ; l’intégrale converge.'
          },
          exercise: {
            question: 'L’intégrale ∫₁∞ 1/x dx converge-t-elle ?',
            answer: 'Non : l’intégrale jusqu’à b vaut ln(b), qui tend vers +∞.'
          }
        }
      },
      {
        id: 'psi-equations-diff',
        title: 'Équations différentielles',
        field: 'Analyse',
        summary: 'Équations linéaires et systèmes différentiels.',
        lesson: {
          sections: [
            'Un système différentiel linéaire s’écrit X′ = AX + B(t). Pour le système homogène à coefficients constants, la matrice exponentielle joue le rôle de l’exponentielle scalaire.',
            'La solution générale contient des constantes déterminées par les conditions initiales.'
          ],
          formula: {
            label: 'SYSTÈME HOMOGÈNE À COEFFICIENTS CONSTANTS',
            text: 'X′ = AX  ⇒  X(t) = eᵗᴬX(0)'
          },
          example: {
            statement: 'Résoudre y′ = 3y avec y(0) = 2.',
            calculation: 'L’équation homogène a pour solutions y(t) = Ce³ᵗ. La condition initiale impose C = 2.',
            answer: 'y(t) = 2e³ᵗ.'
          },
          exercise: {
            question: 'Quelle est la solution de y′ = −2y avec y(0) = 5 ?',
            answer: 'y(t) = 5e⁻²ᵗ.'
          }
        }
      },
      {
        id: 'psi-probabilites',
        title: 'Probabilités et variables aléatoires',
        field: 'Probabilités',
        summary: 'Lois discrètes, espérance et variance.',
        lesson: {
          sections: [
            'Une variable aléatoire discrète peut prendre un ensemble fini ou dénombrable de valeurs. Sa loi associe une probabilité à chaque valeur possible.',
            'L’espérance est définie lorsque la somme des valeurs absolues pondérées converge. Les lois géométrique et de Poisson modélisent des situations de comptage distinctes.'
          ],
          formula: {
            label: 'LOI GÉOMÉTRIQUE',
            text: 'P(X = k) = p(1 − p)ᵏ⁻¹ pour k ≥ 1  |  E(X) = 1/p'
          },
          example: {
            statement: 'On répète une épreuve de succès p = 1/4 jusqu’au premier succès. Quelle est l’attente moyenne ?',
            calculation: 'Le rang du premier succès suit une loi géométrique de paramètre p = 1/4.',
            answer: 'E(X) = 1/p = 4 essais.'
          },
          exercise: {
            question: 'Quelle est la probabilité que le premier succès arrive au troisième essai si p = 1/2 ?',
            answer: 'Il faut deux échecs puis un succès : (1/2)² × (1/2) = 1/8.'
          }
        }
      },
      {
        id: 'psi-calcul-differentiel',
        title: 'Calcul différentiel et optimisation',
        field: 'Analyse',
        summary: 'Gradient, dérivées partielles et extremums.',
        lesson: {
          sections: [
            'Le gradient regroupe les dérivées partielles et indique la direction de variation la plus forte. Un extremum intérieur d’une fonction différentiable se trouve parmi les points où le gradient s’annule.',
            'La matrice hessienne permet d’étudier la nature du point critique : minimum, maximum ou point selle.'
          ],
          formula: {
            label: 'CONDITION NÉCESSAIRE D’EXTREMUM INTÉRIEUR',
            text: '∇f(a) = 0'
          },
          example: {
            statement: 'Chercher le minimum de f(x,y) = x² + y².',
            calculation: 'Le gradient vaut (2x,2y) et s’annule en (0,0). Comme f(x,y) ≥ 0 partout, ce point est un minimum global.',
            answer: 'Le minimum vaut 0 en (0,0).'
          },
          exercise: {
            question: 'Trouver le point critique de f(x,y) = (x − 1)² + (y + 2)².',
            answer: 'Le gradient s’annule en (1,−2), où f atteint son minimum 0.'
          }
        }
      }
    ]
  },
  {
    id: 'analyse-limites-derivees',
    title: 'Analyse · limites et dérivées',
    note: 'Deux cours complets d’analyse : comprendre les limites de fonctions (en un point, à l’infini, formes indéterminées, asymptotes), puis les dérivées (taux de variation, tangente, formules, variations).',
    chapters: [
      {
        id: 'limites-notion',
        title: 'Comprendre une limite',
        field: 'Analyse · limites',
        summary: 'Étudier la limite de f(x) quand x tend vers un nombre a, c’est observer les valeurs de f(x) lorsque x se rapproche de a.',
        lesson: {
          sections: [
            'Étudier la limite de f(x) quand x tend vers un nombre a, c’est observer les valeurs de f(x) lorsque x se rapproche de a. On ne demande pas forcément ce que vaut f(a) : la fonction peut même ne pas être définie en a.',
            'Cette écriture signifie que les valeurs de f(x) se rapprochent autant que l’on veut de L quand x se rapproche de a. Par exemple, si f(x) = x + 2, alors quand x tend vers 3, f(x) tend vers 5.',
            'On peut aussi étudier une limite à gauche, notée x → a⁻, ou à droite, notée x → a⁺. Les deux comportements peuvent être différents. Pour f(x) = 1 / (x − 2), quand x approche 2 par la gauche, le dénominateur est négatif et proche de zéro : la fonction tend vers −∞. Par la droite, elle tend vers +∞.',
            'Limite et valeur de la fonction : Une limite décrit un comportement autour d’un point, pas nécessairement la valeur de la fonction en ce point. Par exemple, (x² − 1) / (x − 1) n’est pas défini en 1, mais sa limite quand x → 1 existe.'
          ],
          formula: {
            label: 'LIMITE FINIE EN a',
            text: 'lim(x → a) f(x) = L'
          }
        }
      },
      {
        id: 'limites-infini',
        title: 'Les limites à l’infini',
        field: 'Analyse · limites',
        summary: 'Quand x devient très grand en valeur absolue, les termes d’une expression n’ont pas tous la même importance.',
        lesson: {
          sections: [
            'Quand x devient très grand en valeur absolue, les termes d’une expression n’ont pas tous la même importance. Pour un polynôme, le terme de plus haut degré finit par dominer les autres.',
            'Ainsi, pour f(x) = 2x³ − 5x + 1, le terme dominant est 2x³. Quand x → +∞, ce terme tend vers +∞, donc f(x) tend vers +∞. Quand x → −∞, 2x³ tend vers −∞, donc f(x) aussi.',
            'Quelques limites de référence — x → +∞Si n > 0, alors xⁿ → +∞.',
            'x → −∞Pour une puissance paire, xⁿ → +∞ ; pour une puissance impaire, xⁿ → −∞.',
            'x → ±∞Pour n > 0, 1 / xⁿ → 0. La fraction se rapproche de zéro sans nécessairement l’atteindre.',
            'Le cas d’un quotient de polynômes — Pour une fraction rationnelle, compare les degrés du numérateur et du dénominateur. À l’infini, les termes de plus haut degré dominent. Si les degrés sont égaux, la limite est le quotient des coefficients dominants. Si le degré du numérateur est plus petit, la limite vaut zéro.',
            '(3x² + x) / (2x² − 1)→ 3 / 2 quand x → ±∞',
            'Si le degré du numérateur est plus grand, la fraction peut tendre vers l’infini ; il faut alors étudier le signe et l’écart des degrés.'
          ],
          formula: {
            label: 'TERMES DOMINANTS',
            text: 'Quand |x| grandit, x³ domine x², qui domine x, qui domine 1.'
          }
        }
      },
      {
        id: 'limites-calculs',
        title: 'Les règles de calcul',
        field: 'Analyse · limites',
        summary: 'Quand les limites des fonctions u et v sont connues, on peut souvent en déduire la limite de leur somme, produit ou quotient.',
        lesson: {
          sections: [
            'Quand les limites des fonctions u et v sont connues, on peut souvent en déduire la limite de leur somme, produit ou quotient. Les règles suivantes s’appliquent lorsque les opérations ont un sens ; les cas indéterminés demandent une étude supplémentaire.',
            'SOMMEUne limite finie s’ajoute terme à terme. Une quantité qui tend vers +∞, additionnée à un nombre fixe, tend encore vers +∞.',
            'PRODUITOn multiplie les limites finies. Le produit d’une quantité qui tend vers +∞ par une constante positive tend vers +∞ ; si la constante est négative, il tend vers −∞.',
            'QUOTIENTSi le dénominateur tend vers une limite non nulle M, le quotient tend vers L / M. Si le dénominateur tend vers zéro, il faut étudier son signe.',
            'Exemple : quand x → 2, x² + 3x tend vers 2² + 3 × 2 = 10. Pour les polynômes, on peut remplacer directement x par la valeur vers laquelle il tend.',
            'Autre exemple : quand x → +∞, (5x + 1) / (x − 2) tend vers 5, car les deux polynômes sont de même degré et le quotient des coefficients dominants vaut 5 / 1.'
          ],
          formula: {
            label: 'LIMITE FINIE ET SOMME',
            text: 'Si u → L et v → M, alors u + v → L + M.'
          }
        }
      },
      {
        id: 'limites-indeterminations',
        title: 'Les formes indéterminées',
        field: 'Analyse · limites',
        summary: 'Une forme indéterminée signifie que les règles usuelles ne permettent pas, à elles seules, de conclure.',
        lesson: {
          sections: [
            'Une forme indéterminée signifie que les règles usuelles ne permettent pas, à elles seules, de conclure. Ce n’est pas le résultat de la limite : c’est un signal qu’il faut transformer ou simplifier l’expression.',
            'FORME INDETERMINÉE : 0 / 0',
            'FORME INDETERMINÉE : ∞ / ∞',
            'FORME INDETERMINÉE : 0 × ∞',
            'Exemple : lever une forme 0 / 0 — Quand x → 1, le numérateur x² − 1 tend vers zéro et le dénominateur x − 1 aussi. On obtient la forme 0 / 0 : impossible de conclure tout de suite. On factorise le numérateur :',
            'FACTORISER, PUIS SIMPLIFIER POUR x ≠ 1 : (x² − 1) / (x − 1) = (x − 1)(x + 1) / (x − 1) = x + 1',
            'Pour x ≠ 1, la fraction vaut donc x + 1, qui tend vers 2 lorsque x → 1. La limite cherchée est 2, même si la fraction de départ n’est pas définie en 1.',
            'Les bons réflexes — Pour une différence de polynômes, factorise par le terme dominant ou mets les expressions au même dénominateur.',
            'Pour une fraction en 0 / 0, factorise et simplifie, ou utilise une identité remarquable.',
            'Pour une fraction en ∞ / ∞, divise le numérateur et le dénominateur par la plus grande puissance de x.',
            'Ne simplifie jamais en un point où le dénominateur est nul sans préciser que l’égalité vaut pour les valeurs autorisées autour de ce point.'
          ],
          formula: {
            label: 'FORME INDETERMINÉE',
            text: '∞ − ∞'
          }
        }
      },
      {
        id: 'limites-asymptotes',
        title: 'Les asymptotes',
        field: 'Analyse · limites',
        summary: 'Une asymptote est une droite dont la courbe se rapproche indéfiniment.',
        lesson: {
          sections: [
            'Une asymptote est une droite dont la courbe se rapproche indéfiniment. Les limites permettent de les repérer et d’écrire leur équation.',
            'Asymptote verticale — Si f(x) tend vers +∞ ou −∞ quand x → a (à gauche, à droite ou des deux côtés), la droite d’équation x = a est une asymptote verticale. Par exemple, pour f(x) = 1 / (x − 2), la droite x = 2 est une asymptote verticale.',
            'Figure — Près de 2, la courbe s’approche de la droite pointillée sans jamais la couper. À gauche elle descend vers −∞ ; à droite elle monte vers +∞.',
            'Asymptote horizontale — Si f(x) → L quand x → +∞ (ou quand x → −∞), la droite y = L est une asymptote horizontale dans cette direction. Comme (3x² + x) / (2x² − 1) → 3 / 2, sa courbe admet la droite y = 3 / 2 comme asymptote horizontale aux deux infinis.',
            'Attention : Une fonction peut avoir des limites différentes en +∞ et en −∞. Il faut donc étudier séparément les deux directions avant de conclure.'
          ]
        }
      },
      {
        id: 'limites-exercices',
        title: 'À toi de jouer',
        field: 'Analyse · limites',
        summary: 'Commence par identifier la situation : substitution directe, comportement à l’infini, ou forme indéterminée ?',
        lesson: {
          sections: [
            'Commence par identifier la situation : substitution directe, comportement à l’infini, ou forme indéterminée ? Ouvre ensuite la correction pour comparer ta démarche.',
            'Exercice A — Calculer lim(x → 2) (x² + 3x − 1). Correction : Un polynôme est défini et continu en 2 : on remplace x par 2. 2² + 3 × 2 − 1 = 4 + 6 − 1 = 9. La limite vaut 9.',
            'Exercice B — Calculer lim(x → 1) (x² − 1) / (x − 1). Correction : La substitution donne 0 / 0, une forme indéterminée. Pour x ≠ 1, on factorise : (x² − 1) / (x − 1) = x + 1. La limite de x + 1 en 1 vaut 2. La limite vaut 2.',
            'Exercice C — Calculer lim(x → +∞) (4x² − x) / (2x² + 5). Correction : Les degrés du numérateur et du dénominateur sont égaux. Le quotient tend vers le quotient des coefficients dominants : 4 / 2 = 2. La limite vaut 2.',
            'Exercice D — Quelle est l’asymptote verticale de f(x) = 3 / (x + 4) ? Correction : Le dénominateur s’annule en x = −4. À proximité, la fonction devient infiniment grande en valeur absolue. La droite x = −4 est l’asymptote verticale.'
          ],
          exercise: {
            question: 'Calculer lim(x → 2) (x² + 3x − 1).',
            answer: 'Un polynôme est défini et continu en 2 : on remplace x par 2. 2² + 3 × 2 − 1 = 4 + 6 − 1 = 9. La limite vaut 9.'
          }
        }
      },
      {
        id: 'derivees-sens',
        title: 'Du taux de variation à la dérivée',
        field: 'Analyse · dérivées',
        summary: 'Entre deux points d’abscisses a et a + h, le taux de variation de f est la variation des ordonnées divisée par la variation des abscisses.',
        lesson: {
          sections: [
            'Entre deux points d’abscisses a et a + h, le taux de variation de f est la variation des ordonnées divisée par la variation des abscisses. Il correspond à la pente de la droite sécante à la courbe.',
            'Pour obtenir la pente au point d’abscisse a, on rapproche le deuxième point du premier : h tend vers zéro. Si le quotient se rapproche d’un nombre réel, ce nombre est la dérivée de f en a, notée f′(a).',
            'NOMBRE DÉRIVÉ EN a : f′(a) = lim(h → 0) [f(a + h) − f(a)] / h',
            'Exemple avec la fonction carré — Pour f(x) = x², calculons le taux de variation entre a et a + h :',
            'ON DÉVELOPPE ET ON SIMPLIFIE : [(a + h)² − a²] / h = (2ah + h²) / h = 2a + h',
            'Quand h → 0, l’expression 2a + h tend vers 2a. La fonction carré est donc dérivable et f′(a) = 2a. En un point d’abscisse 3, sa pente vaut 6.',
            'Vocabulaire : f′(a) est le nombre dérivé au point a. f′ désigne la fonction dérivée, qui associe à chaque x le nombre dérivé f′(x).'
          ],
          formula: {
            label: 'TAUX DE VARIATION ENTRE a ET a + h',
            text: '[f(a + h) − f(a)] / h avec h ≠ 0'
          }
        }
      },
      {
        id: 'derivees-tangente',
        title: 'L’équation de la tangente',
        field: 'Analyse · dérivées',
        summary: 'Au point de la courbe d’abscisse a, la tangente est la droite qui approche le mieux la courbe autour de ce point.',
        lesson: {
          sections: [
            'Au point de la courbe d’abscisse a, la tangente est la droite qui approche le mieux la courbe autour de ce point. Son coefficient directeur est le nombre dérivé f′(a), et elle passe par le point de coordonnées (a ; f(a)).',
            'Exemple : tangente à une parabole — Soit f(x) = x² et a = 3. On a f(3) = 9 et, puisque f′(x) = 2x, f′(3) = 6. La tangente passe par (3 ; 9) et a pour pente 6 :',
            'y = 6(x − 3) + 9Équation : y = 6x − 9',
            'Figure — Au point de contact (3 ; 9), la courbe et sa tangente ont la même pente : f′(3) = 6.',
            'Vérification : pour x = 3, l’équation de la tangente donne y = 9, comme la courbe. La droite et la courbe ont aussi la même pente au point de contact.',
            'Signe de la pente : Si f′(a) > 0, la tangente monte de gauche à droite. Si f′(a) < 0, elle descend. Si f′(a) = 0, elle est horizontale.'
          ],
          formula: {
            label: 'TANGENTE À LA COURBE AU POINT D’ABSCISSE a',
            text: 'y = f′(a)(x − a) + f(a)'
          }
        }
      },
      {
        id: 'derivees-formules',
        title: 'Les formules de dérivation',
        field: 'Analyse · dérivées',
        summary: 'Les fonctions usuelles ont des dérivées de référence.',
        lesson: {
          sections: [
            'Les fonctions usuelles ont des dérivées de référence. Les règles de somme, de produit et de quotient permettent ensuite de dériver des expressions plus complexes. Dans les formules, u et v sont des fonctions dérivables.',
            'Fonctions usuelles et leurs dérivées',
            'Fonction f(x) | Dérivée f′(x) | Condition',
            'k, constante | 0 | k réel',
            'x | 1 | ',
            'xⁿ | n xⁿ ⁻ ¹ | n entier positif',
            '1 / x | −1 / x² | x ≠ 0',
            '√x | 1 / (2√x) | x > 0',
            'SOMME(u + v)′ = u′ + v′. On dérive chaque terme séparément. Plus généralement, (ku)′ = ku′ pour une constante k.',
            'PRODUIT(uv)′ = u′v + uv′. On dérive le premier facteur en gardant le second, puis on ajoute le premier multiplié par la dérivée du second.',
            'QUOTIENT(u / v)′ = (u′v − uv′) / v², lorsque v ≠ 0. Au numérateur, retiens : « dérivée du haut fois le bas, moins le haut fois dérivée du bas ».',
            'Une erreur fréquente : La dérivée d’un produit n’est pas u′v′. Il faut appliquer la formule u′v + uv′.'
          ]
        }
      },
      {
        id: 'derivees-calculer',
        title: 'Calculer une dérivée',
        field: 'Analyse · dérivées',
        summary: 'Commence par repérer la structure de l’expression : somme, produit ou quotient.',
        lesson: {
          sections: [
            'Commence par repérer la structure de l’expression : somme, produit ou quotient. Applique la règle correspondante, puis simplifie. Pour un polynôme, dérive chaque terme ; un terme constant disparaît et la puissance descend devant le x.',
            'Exemple : un polynôme — Soit f(x) = 3x⁴ − 2x² + 5x − 7. On dérive terme à terme :',
            'Le terme constant −7 a pour dérivée zéro. Pour 3x⁴, on multiplie 3 par 4 et on diminue l’exposant d’une unité : 12x³.',
            'Exemple : un produit — Pour g(x) = (x² + 1)(2x − 3), posons u = x² + 1 et v = 2x − 3. Alors u′ = 2x et v′ = 2. La règle du produit donne :',
            'APPLIQUER (uv)′ = u′v + uv′ : g′(x) = 2x(2x − 3) + 2(x² + 1) = 6x² − 6x + 2',
            'On pouvait aussi développer d’abord g, puis dériver le polynôme obtenu. Les deux méthodes donnent le même résultat.'
          ],
          formula: {
            label: 'PUISSANCE, SOMME ET CONSTANTE',
            text: 'f′(x) = 12x³ − 4x + 5'
          }
        }
      },
      {
        id: 'derivees-variations',
        title: 'Du signe de f′ aux variations',
        field: 'Analyse · dérivées',
        summary: 'Sur un intervalle, le signe de la dérivée donne le sens de variation de la fonction.',
        lesson: {
          sections: [
            'Sur un intervalle, le signe de la dérivée donne le sens de variation de la fonction. Cette propriété transforme le calcul de f′(x) en outil pour décrire le comportement de f.',
            'f′ > 0La fonction f est strictement croissante : quand x augmente, f(x) augmente.',
            'f′ < 0La fonction f est strictement décroissante : quand x augmente, f(x) diminue.',
            'f′ = 0Si la dérivée est nulle sur tout un intervalle, la fonction y est constante. Si elle s’annule en un seul point, il faut regarder son signe avant et après pour déterminer s’il y a un extremum.',
            'Exemple : trouver un minimum — Soit f(x) = x² − 4x + 1. Sa dérivée est f′(x) = 2x − 4 = 2(x − 2). Elle est négative quand x < 2, nulle en 2, puis positive quand x > 2. La fonction décroît donc jusqu’à 2, puis croît : elle atteint un minimum en 2.',
            'f(2) = 4 − 8 + 1 = −3Minimum : −3 atteint pour x = 2',
            'Le signe avant et après compte : Une dérivée nulle ne suffit pas à prouver qu’il y a un maximum ou un minimum. Il faut vérifier que son signe change : de − à + pour un minimum, de + à − pour un maximum.'
          ]
        }
      },
      {
        id: 'derivees-exercices',
        title: 'À toi de jouer',
        field: 'Analyse · dérivées',
        summary: 'Pour chaque exercice, annonce d’abord la règle utilisée.',
        lesson: {
          sections: [
            'Pour chaque exercice, annonce d’abord la règle utilisée. Pour les variations, étudie le signe de la dérivée avant de conclure.',
            'Exercice A — Dériver f(x) = 5x³ − 2x + 4. Correction : On dérive terme à terme : (5x³)′ = 15x², (−2x)′ = −2 et 4′ = 0. Donc f′(x) = 15x² − 2.',
            'Exercice B — Déterminer l’équation de la tangente à f(x) = x² + 1 au point d’abscisse 2. Correction : On a f′(x) = 2x, donc f′(2) = 4, et f(2) = 5. La tangente vérifie y = 4(x − 2) + 5. Son équation est y = 4x − 3.',
            'Exercice C — Étudier les variations de g(x) = x² − 6x + 8. Correction : g′(x) = 2x − 6 = 2(x − 3). La dérivée est négative si x < 3, nulle en 3 et positive si x > 3. g décroît puis croît ; son minimum vaut g(3) = 9 − 18 + 8 = −1. Minimum : −1 atteint en x = 3.',
            'Exercice D — Dériver h(x) = (x + 1)(x² − 2). Correction : Avec la règle du produit, u = x + 1 et v = x² − 2, donc u′ = 1 et v′ = 2x. Alors h′ = x² − 2 + 2x(x + 1) = 3x² + 2x − 2. h′(x) = 3x² + 2x − 2.'
          ],
          exercise: {
            question: 'Dériver f(x) = 5x³ − 2x + 4.',
            answer: 'On dérive terme à terme : (5x³)′ = 15x², (−2x)′ = −2 et 4′ = 0. Donc f′(x) = 15x² − 2.'
          }
        }
      }
    ]
  },
  {
    id: 'grands-mathematiciens',
    title: 'Les grands mathématiciens',
    note: 'Vingt mathématiciens classés par date de naissance, d’Euclide à Grothendieck, avec leurs contributions et leurs dates vérifiées.',
    chapters: [
      {
        id: 'math-methode-selection',
        title: 'Comment peut-on classer des mathématiciens ?',
        field: 'Les grands mathématiciens',
        summary: 'Il n’existe pas de liste canonique des « plus grands mathématiciens ».',
        lesson: {
          sections: [
            'Il n’existe pas de liste canonique des « plus grands mathématiciens ». Aucune académie, aucun manuel de référence n’en publie une : un tel classement engage un jugement de valeur, non un fait, et il dépend de ce qu’on entend par « grand ». Présenter un classement comme allant de soi serait donc une affirmation non sourcée.',
            'Ce cours assume l’opération : il déclare les critères, et il les applique de façon vérifiable.',
            'Une contribution durable et formulable.Le candidat doit avoir produit un résultat que les mathématiques actuelles utilisent encore, exprimable en définition, en théorème ou en formule. Ce critère écarte ceux dont l’apport fut ensuite absorbé par un cadre plus général.',
            'Une innovation conceptuelle, pas seulement technique.Il ne suffit pas de mieux calculer : le personnage retenu doit avoir changé la façon de poser le problème — une notion, une structure ou un formalisme nouveau.',
            'Un rôle de chef de file.Le personnage a dirigé une école ou un groupe qui a formé d’autres chercheurs. Ce critère valorise la constitution d’un domaine, pas seulement un résultat isolé.',
            'Une présence dans le lectorat francophone.La liste privilégie les travaux décrits dans les manuels du site : c’est une contrainte éditoriale assumée, qui explique par exemple la présence de Fermat, dont l’œuvre est enseignée en terminale.',
            'Ce que ce critère exclut, et pourquoi c’est un choix : La liste ne comporte ni Archimède, ni Apollonius, ni Diophante, ni Ramanujan, ni Bourbaki. Ce sont des travaux fondamentaux — mais dont les résultats ont été progressivement intégrés dans des cadres plus généraux, ou dont l promovida reste inachevée. Écarter Ramanujan alors qu’on retient Gauss est discutable, et c’est discutable explicitement : c’est l’objet de la présente section.',
            'Les règles effectivement appliquées — Ordre chronologique de naissance : la liste est triée par date de naissance, ce qui n’a rien à voir avec une évaluation de valeur et ne doit pas être lu comme telle.',
            'Pas de classement par mérite : l’ordre des sections est un ordre de survenance, pas un podium. Aucune section ne prétend être plus importante qu’une autre.',
            'Dates vérifiées : chaque date de naissance et de décès provient de la source citée en section 24, et non de mémoire.',
            'Un fait par nom : chaque personnage est rattaché à une contribution précise et attribuée, jamais à une appréciation globale.'
          ]
        }
      },
      {
        id: 'math-euclide',
        title: 'Euclide d’Alexandrie (vers 325 av. J.-C. – vers 265 av. J.-C.)',
        field: 'Euclide — les Éléments',
        summary: 'Né vers 325 av. J.-C. à Alexandrie en Égypte et mort vers 265 av.',
        lesson: {
          sections: [
            'Né vers 325 av. J.-C. à Alexandrie en Égypte et mort vers 265 av. J.-C., Euclide est le mathématicien le plus prominent de l’Antiquité (MacTutor, Euclid of Alexandria). MacTutor précise que ses dates sont approximatives : la source indique « environ 325 av. J.-C. (probablement) » et « environ 265 av. J.-C. », et signale qu’il existe plusieurs personnages appelés Euclide dans les sources antiques.',
            'Son traité The Elements a influencé le développement des mathématiques occidentales pendant plus de deux mille ans (MacTutor). L’ouvrage ne se limite pas à la géométrie : il comprend l’arithmétique, la théorie des proportions, la théorie des nombres et les principes de la géométrie de solide. Le texte y distingue définition, postulat et axiome — trois notions que la logique moderne retrouvera.',
            'LES CINQ POSTULATS, DANS LEUR ÉNONCÉ LE PLUS COURANT : Par un point donné, on peut mener une droite.Il existe au moins une droite passant par ce point. ; Un segment peut être prolongé indéfiniment.La droite est sans fin dans les deux sens. ; Un cercle a un centre et un rayon.On peut tracer un cercle de centre et de rayon quelconques. ; Les angles droits sont tous égaux entre eux.Ce postulat fixe la notion d’angle droit. ; Si une droite coupe deux droites, les angles opposés valent.Les angles alternes-internes sont égaux : c’est le postulat qui, plus tard, sera remplacé par la géométrie non euclidienne.',
            'Une anecdote, et sa limite : Proclus rapporte que Ptolémée aurait demandé à Euclide un chemin plus court pour apprendre la géométrie, et qu’Euclide aurait répondu qu’il n’y a pas de « voie royale vers la géométrie » (MacTutor). Proclus vivait vers 450 apr. J.-C., soit bien après Euclide : ce sont ses paroles, rapportées des siècles plus tard. Le cours les cite comme témoignage ancien, non comme un fait contemporain vérifié.',
            'La portée du geste est méthodologique autant que géométrique : Euclide ne pose pas un résultat nouveau, il organise un savoir existant en une chaîne de définitions et de démonstrations. C’est cette architecture — et non la liste des théorèmes — qui a fait de lui, selon MacTutor, le principal professeur de mathématiques de tous les temps.'
          ]
        }
      },
      {
        id: 'math-al-khwarizmi',
        title: 'Al-Khwarizmi (vers 780 – vers 850)',
        field: 'Al-Khwarizmi — l’algèbre',
        summary: 'Né vers 780, possiblement à Baghdad, et mort vers 850, Abu Ja’far Muhammad ibn Musa al-Khwarizmi est un mathématicien musulman.',
        lesson: {
          sections: [
            'Né vers 780, possiblement à Baghdad, et mort vers 850, Abu Ja’far Muhammad ibn Musa al-Khwarizmi est un mathématicien musulman. MacTutor note que nous connaissons très peu de détails de sa vie et avertit que cette paucité a donné lieu à de nombreuses spéculations.',
            'Son traité d’algèbre, Hisab al-jabr w’al-muqabala, « donne le mot algèbre et peut être considéré comme le premier livre écrit sur l’algèbre » (MacTutor). Il y présentait une classification des équations du second degré en trois types, selon le signe des coefficients — classification qui n’a de sens que si l’on distingue « positif » et « négatif », donc si le zéro et les signes sont manipulés comme nombres.',
            'Deux mots qui viennent de lui : MacTutor indique que le mot algorithme dérive de son nom, et que son traité d’algèbre a fourni le mot algèbre. Ces deux entrées lexicales, toujours employées, sont un fait de langue, pas une appréciation : elles disent la diffusion de l’œuvre, non sa valeur.',
            'Al-Khwarizmi a travaillé au sein de la « Maison de la Sagesse » de Baghdad, où les manuscrits grecs étaient traduits (MacTutor). Ce contexte compte : la transmission des mathématiques grecques vers l’arabe, puis vers l’Europe latine, passe par ce milieu. Le cours ne conclut pas qu’il « a inventé l’algèbre » au sens strict, mais il retient l’attribution que la source sustain : son traité est le premier livre spécifiquement consacré à l’algèbre.'
          ],
          formula: {
            label: 'LES TROIS TYPES D’ÉQUATIONS CHEZ AL-KHWARIZMI',
            text: 'x² = c racines carrées | x² + ax = c racines | x² + ax = b aucune racine'
          }
        }
      },
      {
        id: 'math-omar-khayyam',
        title: 'Omar Khayyam (1048 – 1131)',
        field: 'Omar Khayyam — les cubiques',
        summary: 'Né le 18 mai 1048 à Nishapur (actuel Iran) et mort le 4 décembre 1131 à Nishapur, Omar Khayyam est un savant musulman, poète et mathématicien (MacTutor, Omar Khayyam).',
        lesson: {
          sections: [
            'Né le 18 mai 1048 à Nishapur (actuel Iran) et mort le 4 décembre 1131 à Nishapur, Omar Khayyam est un savant musulman, poète et mathématicien (MacTutor, Omar Khayyam). Son nom signifie littéralement « fabricant de tentes ».',
            'MacTutor résume sa contribution mathématique en une phrase : il « a découvert une méthode géométrique pour résoudre les équations cubiques en intersectant une parabole et un cercle ». Ses Problèmes d’algèbre, rédigés avant 25 ans, classent les équations cubiques par type — un travail qu’il jugeait lui-même inachevé.',
            'Ce que cette méthode ne fait pas : Résoudre graphiquement une cubique par intersection de courbes ne donne pas de formule explicite valable partout, et ne se généralise pas au-delà du degré trois. C’est précisément pourquoi cette limite a motivé la formulation des formules de Cardano, puis l’arbitrage Abel-Ruffini : au-delà du troisième degré, certaines équations n’ont pas de solution radicale. Présenter Khayyam comme ayant « résolu les cubiques » serait donc une formulation trop large (voir la section 19 pour la logique de cette limite).',
            'Khayyam a également travaillé sur la réforme du calendrier et sur des tables astronomiques (MacTutor). Son œuvre mathématique est cependant restée peu connue en Europe : ses manuscrits n’ont été étudiés qu’à partir du XIX^(e) siècle. Le cours retient de lui une contribution précise et vérifiable — la résolution géométrique des cubiques — plutôt qu’une réputation générale de « grand savant ».'
          ],
          formula: {
            label: 'RÉSOUDRE UNE CUBIQUE PAR L’INTERSECTION DE DEUX COURBES',
            text: 'parabole : y = x³ | cercle : y = c − x | abscisse } x'
          }
        }
      },
      {
        id: 'math-fibonacci',
        title: 'Léonard de Pise, dit Fibonacci (vers 1170 – vers 1250)',
        field: 'Fibonacci — le Liber abaci',
        summary: 'Né vers 1170 à Pise et mort vers 1250 — MacTutor qualifie les deux dates de « probablement » et « possiblement » —, Léonard Pisano est plus connu sous le surnom de Fibonacci (MacTutor, Fibonacci).',
        lesson: {
          sections: [
            'Né vers 1170 à Pise et mort vers 1250 — MacTutor qualifie les deux dates de « probablement » et « possiblement » —, Léonard Pisano est plus connu sous le surnom de Fibonacci (MacTutor, Fibonacci).',
            'MacTutor indique que le Liber abaci (livre de l’abaque), écrit en 1202, « a introduit en Europe le système décimal positionnel à base dix et l’usage des chiffres arabes ». Le mot « chiffre » vient en effet de l’arabe ṣifr, « zéro » : l’essentiel du gain n’est pas le nombre nouveau mais la base positionnelle et le zéro.',
            'Le problème des oiseaux de Fibonacci — combien de couples de lapins en un an — n’est qu’une des applications de cette récurrence ; la généralisation est linéaire et se traite au niveau terminal dans le chapitre suites numériques.',
            'Pourquoi le zéro compte plus que le chiffre : Sans 0 comme chiffre, on ne peut pas distinguer « rien » de « il n’y a pas de nombre à cette position », et le calcul s’arrête. Avec le zéro et la base dix positionnelle, une addition se fait par report dans une seule colonne. L’introduction du Liber abaci a donc apporté une méthode de calcul avant d’apporter des nombres nouveaux.',
            'MacTutor souligne le caractère novateur du Liber abaci dans un contexte européen où l’arithmétique antique était largement oubliée. Le cours retient cette contribution précise — l’introduction effective du calcul décimal positionnel en Europe — et non une appréciation générale.'
          ],
          formula: {
            label: 'LA DÉFINITION RÉCURRENTE DE LA SUITE DE FIBONACCI',
            text: 'u(n + 2) = u(n + 1) + u_n | u₀ = 0, u₁ = 1'
          }
        }
      },
      {
        id: 'math-descartes',
        title: 'René Descartes (1596 – 1650)',
        field: 'Descartes — la géométrie analytique',
        summary: 'Né le 31 mars 1596 à La Haye (près de Tours, France) et mort le 11 février 1650 à Stockholm, en Suède, René Descartes est un philosophe et mathématicien français (MacTutor, René Descartes).',
        lesson: {
          sections: [
            'Né le 31 mars 1596 à La Haye (près de Tours, France) et mort le 11 février 1650 à Stockholm, en Suède, René Descartes est un philosophe et mathématicien français (MacTutor, René Descartes).',
            'MacTutor indique que son ouvrage La Géométrie contient « son application de l’algèbre à la géométrie, d’où la géométrie cartésienne qui nous est familière ». L’idée tient en une opération : associer un symbole à chaque grandeur, puis traiter les figures comme des relations entre ces symboles.',
            'Ce que la méthode ne fait pas : La « règle des signes » que Descartes formule pour classer les courbes ne donne pas une méthode générale de résolution de toutes les équations : au-delà du quatrième degré, elle échoue. C’est la même limite qu’on rencontre chez Khayyam (section 04), et elle prépare le terrain à l’arbitrage Abel-Ruffini (section 19).',
            'La notation moderne des puissances et des variables lui doit beaucoup ; MacTutor signale d’ailleurs qu’il exista plusieurs usages de la variable avant lui. Le cours retient la géométrie analytique comme contribution attribuée, sans lui attribuer l’invention exclusive de chaque symbole utilisé aujourd’hui.'
          ],
          formula: {
            label: 'UNE DROITE, PUIS UN CERCLE, EN COORDONNÉES',
            text: 'droite :} y = ax + b | cercle } x² + y² = r²'
          }
        }
      },
      {
        id: 'math-fermat',
        title: 'Pierre de Fermat (1601 – 1665)',
        field: 'Fermat — le dernier théorème',
        summary: 'Né le 17 août 1601 à Beaumont-de-Lomagne et mort le 12 janvier 1665 à Castres, Pierre de Fermat est un juriste et fonctionnaire français, surtout connu pour ses travaux de théorie des nombres et pour le « dernier théorème de…',
        lesson: {
          sections: [
            'Né le 17 août 1601 à Beaumont-de-Lomagne et mort le 12 janvier 1665 à Castres, Pierre de Fermat est un juriste et fonctionnaire français, surtout connu pour ses travaux de théorie des nombres et pour le « dernier théorème de Fermat » (MacTutor, Pierre de Fermat).',
            'Une date de naissance contestée : MacTutor signale lui-même un désaccord sur l’année : « il y a un litige [14] sur la date de naissance de Pierre telle qu’elle est donnée ci-dessus, puisqu’il est possible qu’il ait eu un frère aîné, également nommé Pierre, mais mort jeune. » Le cours retient la date de la source (1601) et signale le désaccord plutôt que de trancher.',
            'Le théorème est une conjecture, écrite en marge d’un ouvrage de Diophante : il n’existe pas d’entiers non nuls x, y, z et n tels que…',
            'La démonstration n’est venue qu’en 1995, par Andrew Wiles (MacTutor, Andrew Wiles). Il a reçu le prix Abel 2016 « for his stunning proof of Fermat’s Last Theorem by way of the modularity conjecture for semistable elliptic curves, opening a new era in number theory » (Abel Prize), et le Clay Research Award 1999 pour son rôle dans le développement de la théorie des nombres (Clay Mathematics Institute).',
            'Un prix partagé par la recherche collective : La démonstration de Wiles ne fut possible qu’elle s’appuie sur des résultats de modularité établis par de nombreux mathématiciens depuis les années 1970 (dont la conjecture de Taniyama-Ibukawa, démontré par Gross et Zagier). Attribuer cette preuve à un seul nom serait factuellement faux : la formule « Wiles a démontré Fermat » décrit un résultat, pas une performance solitaire.',
            'Fermat a par ailleurs travaillé sur les maxima et minima et sur la méthode de descente, fondement de son approche arithmétique. Le cours retient de lui le dernier théorème — parce qu’il est enseigné au lycée et parce que son statut, longtemps conjecturé, documente la différence entre un énoncé non résolu et un énoncé faux.'
          ],
          formula: {
            label: 'LE DERNIER THÉORÈME DE FERMAT',
            text: 'x,y,z,n∈ℕ^(*) : xⁿ + yⁿ = zⁿ'
          }
        }
      },
      {
        id: 'math-pascal',
        title: 'Blaise Pascal (1623 – 1662)',
        field: 'Pascal — le calcul des probabilités',
        summary: 'Né le 19 juin 1623 à Clermont (aujourd’hui Clermont-Ferrand) et mort le 19 août 1662 à Paris, Blaise Pascal est un mathématicien et philosophe français (MacTutor, Blaise Pascal).',
        lesson: {
          sections: [
            'Né le 19 juin 1623 à Clermont (aujourd’hui Clermont-Ferrand) et mort le 19 août 1662 à Paris, Blaise Pascal est un mathématicien et philosophe français (MacTutor, Blaise Pascal).',
            'MacTutor indique qu’« en correspondance avec Fermat, il a posé les fondements de la théorie des probabilités ». Le point de départ est concret : comment répartir les gains d’un jeu de hasard qui s’interrompt en cours de partie. C’est le premier vrai calcul de probabilités, et il se fait par combinatoire — dénombrer des cas et compter des cas favorables.',
            'Ce triangle, déjà connu en Inde et dans le monde islamique, fut publié par Pascal en 1654 comme outil de calcul (MacTutor, Pascal’s Mystic Hexagram). Il est aujourd’hui au programme de terminale spécialité mathématiques, en lien avec le chapitre règles des puissances.',
            'Deux contributions, deux domaines : Pascal est aussi l’inventeur de la Pascaline, première machine à calculer mécanique, construite vers 1642–1645 pour son père collecteur d’impôts (MacTutor, Pascal’s calculator). Elle n’a pas d’affichage — les résultats se lisaient sur un cadran — et il n’en fut produit qu’une cinquantaine d’exemplaires (MacTutor). Confondre la Pascaline avec le triangle de Pascal serait confondre deux objets sans rapport.'
          ],
          formula: {
            label: 'LE COEFFICIENT BINOMIAL, LU SUR LE TRIANGLE DE PASCAL',
            text: '((n) / (k)) = (n!) / (k!(n − k)!), 0 ≤ k ≤ n | ((n − 1) / (k − 1)) + ((n − 1) / (k)) = ((n) / (k))'
          }
        }
      },
      {
        id: 'math-leibniz',
        title: 'Gottfried Wilhelm Leibniz (1646 – 1716)',
        field: 'Leibniz — le calcul différentiel',
        summary: 'Né le 1^(er) juillet 1646 à Leipzig et mort le 14 novembre 1716 à Hanovre, Gottfried Leibniz est un mathématicien et philosophe allemand (MacTutor, Gottfried Leibniz).',
        lesson: {
          sections: [
            'Né le 1^(er) juillet 1646 à Leipzig et mort le 14 novembre 1716 à Hanovre, Gottfried Leibniz est un mathématicien et philosophe allemand (MacTutor, Gottfried Leibniz).',
            'MacTutor note avec précision qu’il « a développé la notation actuelle du calcul différentiel et intégral, bien qu’il n’ait jamais pensé la dérivée comme une limite ». Cette nuance compte : Leibniz justifiait ses infinitésimaux par la tradition scolastique, et non par le concept moderne de limite ; la rigueur de celui-ci viendra plus tard, avec Cauchy et Weierstrass.',
            'Leibniz a aussi construit une machine à calculer à rouages, et il est à l’origine de l’écriture binaire utilisée par les machines modernes (MacTutor, Leibniz’s calculating machine). Comme Pascal, il unifie le calcul automatique et le calcul abstrait : l’un sert à exécuter des multiplications, l’autre à organiser un raisonnement.',
            'Pourquoi les deux notations diffèrent : dy/dx se lit comme un quotient de grandeurs : une image qui conduit naturellement à la notion de dérivée. ∫ f dx présente une somme continue de « petits morceaux » : c’est l’image du fills — l’inverse de la différence — qui motive la notation. Ce ne sont pas des détails graphiques : la notation oriente ce que le calculateur croit qu’il fait.'
          ],
          formula: {
            label: 'LES DEUX OPÉRATEURS, ET LE THÉORÈME FONDAMENTAL',
            text: 'dérivée :} f′(x) = (df) / (dx) | intégrale } ∫f(x) dx | si } F′ = f, alors } ∫f = F + K'
          }
        }
      },
      {
        id: 'math-euler',
        title: 'Leonhard Euler (1707 – 1783)',
        field: 'Euler — l’identité et la méthode',
        summary: 'Né le 15 avril 1707 à Bâle et mort le 18 septembre 1783 à Saint-Pétersbourg, Leonhard Euler est un mathématicien suisse qui a apporté des contributions considérables à la géométrie analytique, à la trigonométrie, à l’analyse et…',
        lesson: {
          sections: [
            'Né le 15 avril 1707 à Bâle et mort le 18 septembre 1783 à Saint-Pétersbourg, Leonhard Euler est un mathématicien suisse qui a apporté des contributions considérables à la géométrie analytique, à la trigonométrie, à l’analyse et à la théorie des nombres (MacTutor, Leonhard Euler).',
            'Euler a produit plus de 800 travaux (MacTutor). Sa manière de travailler — se concentrer sur un problème plutôt que d’avancer par étapes, quitte à laisser des calculs inachevés — est devenue un modèle de méthode.',
            'L’identité ne se justifie pas par l’intuition : L’identité d’Euler est une conséquence de la périodicité de l’exponentielle complexe, et non un fait qui la fonde. La présenter comme une évidence intuitive — « puisque π est le demi-tour » — revient à inverser l’ordre du raisonnement. On peut la démontrer par plusieurs voies ; dire laquelle est « évidente » relève du goût, non des mathématiques.',
            'Euler a aussi résolu le problème des ponts de Königsberg (1736), fondement de la théorie des graphes : il montre que le problème se résout par des degrés et non par la géométrie (MacTutor, The Königsberg Bridges Problem). Cette formalisation est à la base de l’informatique moderne : un graphe est un ensemble de sommets reliés par des arêtes.',
            'MacTutor signale qu’Euler a introduit la notation e pour la base des logarithmes népériens et a popularisé i pour l’unité imaginaire. Le cours retient de lui ces trois apports — l’identité, la notation, les graphes — tous vérifiables, plutôt qu’une appréciation générale de son acuité.'
          ],
          formula: {
            label: 'L’IDENTITÉ D’EULER, ET LE LIEN AVEC LE NOMBRE e',
            text: 'e^(iπ) + 1 = 0 | d’où } e^(iθ) = f(θ) + ig(θ), e = e · 1'
          }
        }
      },
      {
        id: 'math-lagrange',
        title: 'Joseph-Louis Lagrange (1736 – 1813)',
        field: 'Lagrange — la mécanique analytique',
        summary: 'Né le 25 janvier 1736 à Turin et mort le 10 avril 1813 à Paris, Joseph-Louis Lagrange est un mathématicien franco-italien.',
        lesson: {
          sections: [
            'Né le 25 janvier 1736 à Turin et mort le 10 avril 1813 à Paris, Joseph-Louis Lagrange est un mathématicien franco-italien. MacTutor précise qu’il a été baptisé sous le nom de Giuseppe Lodovico Lagrangia, et que l’encyclopédie italienne le compte parmi les mathématiciens italiens.',
            'Sa Mécanique analytique (1788) fonde la mécanique classique : il montre que les équations du mouvement s’écrivent à partir d’une seule fonction, sans avoir à dessiner la figure du système — d’où le nom d’« analytique ».',
            'Pourquoi « T − V » et non « T + V » ? : Le signe moins dans le lagrangien n’est pas un détail de notation : les équations du mouvement sont invariantes par translation dans le temps. C’est cette symétrie qui fait que les équations ne contiennent pas explicitement le temps. Le lien entre symétries et grandeurs conservées sera systématisé par Emmy Noether (section 17).',
            'Lagrange a aussi fondé la méthode des variations, qui donne les conditions d’extremum d’une quantité dépendant d’une fonction à optimiser. MacTutor souligne qu’il fut en grande partie autodidacte : certains de ses résultats apparurent d’abord dans sa correspondance avant d’être publiés. Le cours retient de lui l’idée structurante : passer du dessin à la seule fonction d’énergie.'
          ],
          formula: {
            label: 'LES ÉQUATIONS DE LAGRANGE, POUR UN SYSTÈME À UN LIEN',
            text: 'L = T − V, T = (1) / (2)mq^(˙)² | (d) / (dt)((∂L) / (∂q^(˙))) − (∂L) / (∂q) = 0'
          }
        }
      },
      {
        id: 'math-sophie-germain',
        title: 'Sophie Germain (1776 – 1831)',
        field: 'Sophie Germain — la première preuve',
        summary: 'Née le 1^(er) avril 1776 à Paris et morte le 27 juin 1831 à Paris, Marie-Sophie Germain est une mathématicienne française (MacTutor, Sophie Germain).',
        lesson: {
          sections: [
            'Née le 1^(er) avril 1776 à Paris et morte le 27 juin 1831 à Paris, Marie-Sophie Germain est une mathématicienne française (MacTutor, Sophie Germain). MacTutor indique qu’elle a apporté « une contribution majeure à la théorie des nombres (en particulier à la théorie des nombres premiers), à l’acoustique et à l’élasticité ».',
            'Élève de Lagrange — elle lui écrit à 16 ans — elle reste sans contact avec lui pendant des années : il ignore qu’il correspond avec une jeune femme. Elle travaille sur le théorème de Sophie Germain, qui porte sur la divisibilité des solutions de x^(p) + y^(p) = z^(p) lorsque l’exposant p est un nombre premier impair.',
            'Ce que le théorème ne fait pas : Il ne démontre pas le dernier théorème de Fermat : il traite le premier cas, où l’exposant est premier. Wikipedia précise qu’elle a identifié un nombre premier auxiliaire q pour tout nombre premier inférieur à 100, et que Legendre lui a attribué en 1823 le théorème ainsi que son application aux exposants inférieurs à 100. Le passage de « un cas particulier établi » à « démonstration complète » a demandé plus de deux siècles.',
            '« Première » ne veut pas dire « première femme » : Son théorème est surtout le premier résultat significatif obtenu sur le dernier théorème de Fermat : c’est dans ce sens précis que le cours emploie le mot « première », et c’est le sens qu’atteste la formule ci-dessus. Présenter Sophie Germain comme celle qui a « résolu » le dernier théorème serait doublement faux — le problème ne fut résolu qu’en 1995 (section 07).',
            'Elle a également travaillé sur la courbure des surfaces — anticipant les résultats de Gauss sur les surfaces à courbure constante — et sur la propagation des ondes sonores. Sa correspondance avec Gauss porte sur la mécanique et sur les probabilités ; MacTutor note qu’elle trouva dans les travaux de Gauss un renforcement de ses propres idées sur la probabilité. Le cours retient le théorème ci-dessus comme sa contribution mathématique principale et vérifiable.'
          ],
          formula: {
            label: 'LE THÉORÈME DE SOPHIE GERMAIN, ÉNONCÉ OFFICIEL',
            text: 'x^(p) + y^(p) = z^(p), p premier } | p²∣x, p²∣y, p²∣z'
          }
        }
      },
      {
        id: 'math-gauss',
        title: 'Carl Friedrich Gauss (1777 – 1855)',
        field: 'Gauss — la géométrie des nombres',
        summary: 'Né le 30 avril 1777 à Brunswick (aujourd’hui Brunswick, Allemagne) et mort le 23 février 1855 à Göttingen, Carl Friedrich Gauss est un mathématicien et physicien allemand (MacTutor, Carl Friedrich Gauss).',
        lesson: {
          sections: [
            'Né le 30 avril 1777 à Brunswick (aujourd’hui Brunswick, Allemagne) et mort le 23 février 1855 à Göttingen, Carl Friedrich Gauss est un mathématicien et physicien allemand (MacTutor, Carl Friedrich Gauss).',
            'MacTutor signale que, dès l’Académie, il a découvert la loi de Bode, le binôme de Newton, la moyenne arithmético-géométrique, la loi de réciprocité quadratique et le théorème des nombres premiers. Ses Disquisitiones Arithmeticae, publiées à l’été de 1801, comportent sept sections dont six consacrées à la théorie des nombres.',
            'LA RÉCIPROCITÉ QUADRATIQUE (LEI DE GAUSS) : ((p) / (q)) = (−1)^(((p − 1)(q − 1)) / (4))',
            'Une contribution séparée : la construction du 17-gon : MacTutor signale que Gauss a construit, à la règle et au compas, un polygone régulier à 17 côtés — la plus grande avancée dans ce domaine depuis l’Antiquité grecque. Le résultat a été publié comme section VII des Disquisitiones. Il illustre le critère de la section 01 : la contribution est durable parce qu’elle est vérifiable par une construction, pas parce qu’elle serait plus importante qu’une autre.',
            'MacTutor souligne aussi que Gauss a utilisé sa méthode des moindres carrés — sans la publier — pour retrouver la planète Cérès : « lorsque Cérès a été redécouverte par Zach le 7 décembre 1801, elle était presque exactement là où Gauss l’avait prédite ». Le cours retient de lui trois apports attribués et documentés : la loi normale, la réciprocité quadratique et la construction du 17-gon.'
          ],
          formula: {
            label: 'LA LOI NORMALE',
            text: 'f(x) = (1) / (σ√(2π))e^(− ((x − μ)²) / (2σ²))'
          }
        }
      },
      {
        id: 'math-boole',
        title: 'George Boole (1815 – 1864)',
        field: 'Boole — l’algèbre de la logique',
        summary: 'Né le 2 novembre 1815 à Lincoln (Angleterre) et mort le 8 décembre 1864 à Ballintemple (comté de Cork, Irlande), George Boole est un mathématicien et logicien anglais (MacTutor, George Boole).',
        lesson: {
          sections: [
            'Né le 2 novembre 1815 à Lincoln (Angleterre) et mort le 8 décembre 1864 à Ballintemple (comté de Cork, Irlande), George Boole est un mathématicien et logicien anglais (MacTutor, George Boole).',
            'MacTutor indique qu’il « a approché la logique d’une manière nouvelle, en la réduisant à une simple algèbre, en incorporant la logique dans les mathématiques ». Son ouvrage Investigation of the Laws of Thought paraît en 1854 (MacTutor).',
            'L’addition booléenne n’est pas l’addition ordinaire : En algèbre booléenne, 1 + 1 = 1 et non 2. Une proposition « P ou Q » est vraie dès que l’une des deux l’est : compter les occurrences ne compte rien. Le passage des tables de ℕ aux tables de {0, 1} est précisément ce qui rend la logique calculable — et c’est ce qui fonde les circuits logiques modernes.',
            'MacTutor note que Boole a également travaillé sur les équations différentielles, le calcul des différences finies et les méthodes générales de probabilité. Le cours retient de lui l’algèbre booléenne comme contribution principale : elle est utilisée quotidiennement, de la conception des circuits à l’analyse de la logique propositionnelle.'
          ],
          formula: {
            label: 'L’ALGÈBRE BOOLÉENNE, ET LA CORRESPONDANCE AVEC LES ENSEMBLES',
            text: 'x∨y = 1 si } x = 1 ou }y = 1 | x∧y = 1 si } x = 1 et }y = 1 | en ensembles : } A∪B, A∩B, ℙ∖A'
          }
        }
      },
      {
        id: 'math-cantor',
        title: 'Georg Cantor (1845 – 1918)',
        field: 'Cantor — l’infini dénombrable',
        summary: 'Né le 3 mars 1845 à Saint-Pétersbourg et mort le 6 janvier 1918 à Halle (Allemagne), Georg Cantor est un mathématicien d’origine russe (MacTutor, Georg Cantor).',
        lesson: {
          sections: [
            'Né le 3 mars 1845 à Saint-Pétersbourg et mort le 6 janvier 1918 à Halle (Allemagne), Georg Cantor est un mathématicien d’origine russe (MacTutor, Georg Cantor).',
            'MacTutor le présente comme « le fondateur de la théorie des ensembles » et note qu’il a introduit la notion de nombres cardinaux infinis. Son résultat de 1874 démontre que l’ensemble des réels n’est pas dénombrable, en montrant que l’ensemble des nombres réels algébriques — donc la plupart d’entre eux — est dénombrable.',
            'L’argument diagonal, en une ligne : Énumérons les réels sous forme de tableau décimal infini. Construisons ensuite un nombre dont la première décimale diffère de la première ligne, la deuxième de la deuxième ligne, etc. Ce nombre n’est dans aucune ligne du tableau — donc il n’y a pas d’énumération. MacTutor signale que Cantor a lui-même publié en 1874 la première démonstration de l’indénombrabilité des réels ; l’argument diagonal est la forme moderne de ce résultat.',
            'MacTutor précise qu’à Halle, la direction de ses recherches s’est tournée de la théorie des nombres vers l’analyse, à la suite d’un défi de Heine sur l’unicité de développement en série trigonométrique. Cantor est aussi à l’origine de la topologie des espaces de dimension infinie — des espaces abstraits dont le nombre de points varie —, dont l’idée est au cœur de l’informatique théorique. Le cours retient de lui la théorie des ensembles comme contribution structurante, sans lui attribuer l’invention du concept d’infini, qui existait avant lui.'
          ],
          formula: {
            label: 'LA HIÉRARCHIE DES CARDINAUX INFINIS',
            text: 'ℵ0 = ℕ = ℤ = ℚ≺ℝ≺℘^((ℕ)) | en général } A≺℘^((A)) pour tout }A'
          }
        }
      },
      {
        id: 'math-hilbert',
        title: 'David Hilbert (1862 – 1943)',
        field: 'Hilbert — les fondations',
        summary: 'Né le 23 janvier 1862 à Wehlau, près de Königsberg (aujourd’hui Kaliningrad, Russie), et mort le 14 février 1943 à Göttingen, David Hilbert est l’un des mathématiciens les plus influents du XX^(e) siècle (MacTutor, David Hilbert).',
        lesson: {
          sections: [
            'Né le 23 janvier 1862 à Wehlau, près de Königsberg (aujourd’hui Kaliningrad, Russie), et mort le 14 février 1943 à Göttingen, David Hilbert est l’un des mathématiciens les plus influents du XX^(e) siècle (MacTutor, David Hilbert).',
            'MacTutor indique que « son travail en géométrie a eu la plus grande influence dans ce domaine après Euclide » et qu’« une étude systématique des axiomes de la géométrie euclidienne a conduit Hilbert à proposer 21 axiomes », dont il a ensuite analysé la signification.',
            'LES 23 PROBLÈMES, ET LE PROGRAMME DE FONDATIONS : Mettre les entiers naturels en axiomes.Ne pas les définir à partir des nombres réels, mais les poser au fondement. ; Symboliser le fini par le fini seul.N’introduire ni infini, ni limite, ni nombre transcendant dans les définitions de départ.',
            'Le 23e problème, dérivé de la 19e conjecture de Riemann, a été résolu par Kolmogorov et Arnold dans les années 1950 (MacTutor, Hilbert’s 24 Problems).',
            'Ce qui est résolu, et ce qui ne l’est pas : La liste de Hilbert n’est pas un catalogue de problèmes résolus : plusieurs restent ouverts à ce jour, dont la conjecture de Riemann, qui figure aussi parmi les sept problèmes du prix Millennium de la Clay (Clay Mathematics Institute). La Clay signale d’ailleurs que l’une des sept liste aussi dans les vingt-trois problèmes de Hilbert — le lien est ainsi daté et documenté, non supposé.',
            'Hilbert a également axiomatisé la géométrie, défini les espaces de Hilbert et formulé des principes de minimisation. MacTutor relève qu’il était un mauvais élève dans sa jeunesse, et qu’il décrivait l’enfant qu’il avait été comme « dull and silly » : le cours retient cette information parce qu’elle est documentée par la source, et non parce qu’elle flatte le récit.'
          ]
        }
      },
      {
        id: 'math-emmy-noether',
        title: 'Emmy Noether (1882 – 1935)',
        field: 'Emmy Noether — les symétries',
        summary: 'Née le 23 mars 1882 à Erlangen (Bavière) et morte le 14 avril 1935 à Bryn Mawr (Pennsylvanie), Emmy Amalie Noether est une mathématicienne allemande (MacTutor, Emmy Noether).',
        lesson: {
          sections: [
            'Née le 23 mars 1882 à Erlangen (Bavière) et morte le 14 avril 1935 à Bryn Mawr (Pennsylvanie), Emmy Amalie Noether est une mathématicienne allemande (MacTutor, Emmy Noether).',
            'MacTutor indique qu’elle est « surtout connue pour ses contributions à l’algèbre abstraite, en particulier son étude des conditions de chaîne sur les idéaux d’anneaux » — ce qui définit la structure noethérienne, notion centrale de l’algèbre commutative moderne.',
            'LE THÉORÈME DE NOETHER, ET SON LIEN AVEC LAGRANGE : À toute symétrie continue du système correspond une grandeur conservée.Le groupe de symétries G associe une grandeur C, conservée au cours du mouvement. ; Cas particulier : l’énergie.Pour L = T − V, l’indépendance du temps — symétrie temporelle — équivaut à la conservation de l’énergie. C’est le lagrangien de la section 11.',
            'MacTutor situe ses résultats sur les problèmes variationnels invariants à 1918 (Siegmund-Schultze 2011, cité dans la notice). Son théorème fait le lien entre deux cours du site : l’analyse (section 11) et la physique — il explique pourquoi l’énergie se conserve, et non seulement qu’elle se conserve.',
            'Un parcours dont le cours ne peut pas tout dire : MacTutor rapporte que le père d’Emmy Noether était un mathématicien distingué, qu’elle fut refusée comme doctorante par plusieurs universités parce qu’elle était femme, et qu’elle ne put obtenir un poste universitaire qu’en étant non rémunérée. Le cours retient ce fait institutionnel parce qu’il est documenté : il explique les conditions dans lesquelles le travail a été fait, et non la valeur du travail lui-même.',
            'Émigrée en 1933, elle meurt à 53 ans, deux ans avant la publication de ses Selected Papers. Le cours retient d’elle deux contributions distinctes et vérifiables : la structure noethérienne en algèbre et le théorème de Noether en physique théorique.'
          ]
        }
      },
      {
        id: 'math-kolmogorov',
        title: 'Andrei Kolmogorov (1903 – 1987)',
        field: 'Kolmogorov — le hasard axiomatisé',
        summary: 'Né le 25 avril 1903 à Tambov (Russie) et mort le 20 octobre 1987 à Moscou, Andrei Nikolaïevitch Kolmogorov est un mathématicien soviétique (MacTutor, Andrei Kolmogorov).',
        lesson: {
          sections: [
            'Né le 25 avril 1903 à Tambov (Russie) et mort le 20 octobre 1987 à Moscou, Andrei Nikolaïevitch Kolmogorov est un mathématicien soviétique (MacTutor, Andrei Kolmogorov).',
            'MacTutor indique qu’il fut « l’un des développeurs de la théorie des probabilités » et qu’il utilisa ensuite ces travaux pour étudier le mouvement des planètes et l’écoulement turbulent de l’air d’un moteur à réaction.',
            'Ce que l’axiomatisation change : Avant Kolmogorov, la probabilité reposait sur des interprétations contradictoires : fréquence à long terme, degré de certitude subjective, mesure. En posant trois axiomes, il transforme la probabilité en fonction sur un ensemble, calculable indépendamment de l’interprétation. On peut ensuite comparer deux théories au lieu de se demander laquelle est « la bonne ».',
            'MacTutor signale qu’étudiant, Kolmogorov construisit dès 1922 une fonction sommable divergant presque partout, ce qui surprit les spécialistes et rendit son nom connu internationalement. Il reçut notamment le prix Balzan en 1962 et le prix Wolf en 1980 (MacTutor). Le cours retient de lui les trois axiomes : c’est le cadre encore utilisé dans tous les cours de probabilité du site.'
          ],
          formula: {
            label: 'LES TROIS AXIOMES DE LA PROBABILITÉ',
            text: 'P(Ω) = 1 | P(A) ≥ 0 | P(⋃_nA_n) = ∑^(∞)P(A_n), si les }A_n, disjoints}'
          }
        }
      },
      {
        id: 'math-godel',
        title: 'Kurt Gödel (1906 – 1978)',
        field: 'Gödel — l’incomplétude',
        summary: 'Né le 28 avril 1906 à Brünn (aujourd’hui Brno, République tchèque) et mort le 14 janvier 1978 à Princeton (New Jersey), Kurt Gödel est un logicien et mathématicien austro-allemand puis américain (MacTutor, Kurt Gödel).',
        lesson: {
          sections: [
            'Né le 28 avril 1906 à Brünn (aujourd’hui Brno, République tchèque) et mort le 14 janvier 1978 à Princeton (New Jersey), Kurt Gödel est un logicien et mathématicien austro-allemand puis américain (MacTutor, Kurt Gödel).',
            'MacTutor résume son apport en une phrase : « Gödel a démontré des résultats fondamentaux sur les systèmes axiomatiques montrant que dans tout système axiomatique mathématique il existe des propositions qui ne peuvent être ni démontrées ni réfutées à partir des axiomes du système ». Sa thèse de doctorat, soutenue en 1929 sous la direction de Hahn, portait sur la complétude du calcul fonctionnel du premier ordre.',
            'Ce que le théorème ne dit pas : L’incomplétude ne signifie pas que les mathématiques seraient « vraies » ou « fausses ». Elle dit qu’aucun système formel assez puissant ne peut prouver toutes les propositions qu’il affirme, et cela ne coûte rien à la mathématique : on travaille depuis toujours avec des systèmes partiels. Comme le formule MacTutor, la conclusion porte sur les systèmes axiomatiques, non sur la vérité.',
            'MacTutor rapporte aussi que Gödel appartenait au cercle du positivisme logique de Vienne jusqu’en 1938, avant de se rendre à Princeton. Le cours retient de lui le premier théorème d’incomplétude (1931), seule contribution retenue ici — les autres résultats, plus techniques, ne sont pas nécessaires à la progression du cours.'
          ],
          formula: {
            label: 'CE QUE DIT LE PREMIER THÉORÈME D’INCOMPLÉTUDE',
            text: 'S⊬G, G∈ℕ'
          }
        }
      },
      {
        id: 'math-turing',
        title: 'Alan Turing (1912 – 1954)',
        field: 'Turing — la machine',
        summary: 'Né le 23 juin 1912 à Londres et mort le 7 juin 1954 à Wilmslow (Cheshire), Alan Mathison Turing est un mathématicien britannique (MacTutor, Alan Turing).',
        lesson: {
          sections: [
            'Né le 23 juin 1912 à Londres et mort le 7 juin 1954 à Wilmslow (Cheshire), Alan Mathison Turing est un mathématicien britannique (MacTutor, Alan Turing).',
            'MacTutor indique que « le travail de Turing a été fondamental pour les fondations théoriques de l’informatique ». En 1936, il définit une machine abstraite — un automate lisant sur un ruban — et montre qu’il existe des fonctions qu’aucune machine ne peut calculer.',
            'Pourquoi cela concerne les mathématiques, pas seulement l’informatique : Avant Turing, on disait d’une suite « convergente » sans savoir dire ce qu’une machine peut ou non calculer. En réduisant le calcul à une manipulation de symboles, il rend cette question précise : la suite de Liouville converge-t-elle ? Question qui était jusque-là sans formulation mathématique claire.',
            'MacTutor signale que Turing s’intéressait au bridge et aux échecs, qu’il fut un coureur de fond et qu’il reçut le prix Smith en 1951. Le cours retient de lui la définition de la machine universelle et le problème de l’arrêt — un problème indécidable, c’est-à-dire qu’aucun algorithme ne peut décider si un programme donné s’arrête ou s’exécute indéfiniment.'
          ],
          formula: {
            label: 'LA DÉFINITION D’UN ENSEMBLE DÉNOMBRABLE',
            text: 'A dénombrable } ⇔ φ:ℕ → A, φ∈ℬ, φ∈ℬ ⇒ φ∘φ⁻¹ = id_A'
          }
        }
      },
      {
        id: 'math-grothendieck',
        title: 'Alexander Grothendieck (1928 – 2014)',
        field: 'Grothendieck — les schémas',
        summary: 'Né le 28 mars 1928 à Berlin et mort le 13 novembre 2014 à Saint-Girons (France), Alexander Grothendieck est un mathématicien né à l’étranger, d’origine allemande (MacTutor, Alexander Grothendieck).',
        lesson: {
          sections: [
            'Né le 28 mars 1928 à Berlin et mort le 13 novembre 2014 à Saint-Girons (France), Alexander Grothendieck est un mathématicien né à l’étranger, d’origine allemande (MacTutor, Alexander Grothendieck).',
            'MacTutor indique qu’il est un mathématicien d’origine allemande, lauréat de la médaille Fields en 1966, et qu’il a apporté d’importantes contributions en topologie, en algèbre et en logique.',
            'Pourquoi les schémas ont changé la géométrie : L’idée fondatrice : on définit un objet localement, sur de petits morceaux, et l’objet global se recolle seul. Cela remplace les définitions par équations globales par des définitions locales — plus flexibles, et valables dans des contextes où les équations ne suffisent pas. C’est le passage d’une géométrie qui « calcule des courbes » à une géométrie qui « organise des espaces ».',
            'MacTutor rapporte aussi que Grothendieck a refusé toute distinction honorifique à partir de la fin des années 1970 et s’est retiré de la vie publique. Le cours retient ce fait parce qu’il est documenté par la source, et précise qu’il n’a aucun effet sur la valeur de l’œuvre : les schémas sont aujourd’hui le langage standard de la géométrie algébrique, et la médaille Fields de 1966 est un fait daté et attribué.'
          ],
          formula: {
            label: 'LE PRINCIPE DE L’IDÉE : DÉFINIR SUR TOUT, DÉFINIR LOCALEMENT',
            text: 'Hom(F_A,F_B) = lim(u → X)Hom(F_u,G)'
          }
        }
      },
      {
        id: 'math-tableau-chronologique',
        title: 'Les vingt, dans l’ordre de naissance',
        field: 'Les grands mathématiciens',
        summary: 'Le tableau ci-dessous récapitule la liste.',
        lesson: {
          sections: [
            'Le tableau ci-dessous récapitule la liste. Il est trié par date de naissance, ce qui ne constitue pas un classement par mérite. Chaque ligne renvoie à la section détaillée.',
            'Les vingt mathématiciens retenus, triés par date de naissance. Les dates proviennent des sources citées en section 24.',
            '# | Nom | Naissance | Décès | Contribution principale',
            '01 | Euclide | vers 325 av. J.-C. | vers 265 av. J.-C. | Les Éléments, organisation axiomatique',
            '02 | Al-Khwarizmi | vers 780 | vers 850 | Premier traité d’algèbre',
            '03 | Omar Khayyam | 18 mai 1048 | 4 déc. 1131 | Résolution géométrique des cubiques',
            '04 | Fibonacci | vers 1170 | vers 1250 | Liber abaci, calcul décimal positionnel',
            '05 | René Descartes | 31 mars 1596 | 11 fév. 1650 | Géométrie analytique',
            '06 | Pierre de Fermat | 17 août 1601 | 12 janv. 1665 | Dernier théorème',
            '07 | Blaise Pascal | 19 juin 1623 | 19 août 1662 | Probabilités, triangle de Pascal',
            '08 | Gottfried Leibniz | 1^(er) juil. 1646 | 14 nov. 1716 | Calcul différentiel et intégral, notation',
            '09 | Leonhard Euler | 15 avr. 1707 | 18 sept. 1783 | Identité d’Euler, théorie des graphes',
            '10 | Joseph-Louis Lagrange | 25 janv. 1736 | 10 avr. 1813 | Mécanique analytique, lagrangien',
            '11 | Sophie Germain | 1^(er) avr. 1776 | 27 juin 1831 | Premier cas du dernier théorème',
            '12 | Carl Friedrich Gauss | 30 avr. 1777 | 23 fév. 1855 | Loi normale, réciprocité quadratique',
            '13 | George Boole | 2 nov. 1815 | 8 déc. 1864 | Algèbre booléenne',
            '14 | Georg Cantor | 3 mars 1845 | 6 janv. 1918 | Théorie des ensembles, infinis',
            '15 | David Hilbert | 23 janv. 1862 | 14 fév. 1943 | Axiomatique, 23 problèmes',
            '16 | Emmy Noether | 23 mars 1882 | 14 avr. 1935 | Théorèmes de Noether, structures noethériennes',
            '17 | Andrei Kolmogorov | 25 avr. 1903 | 20 oct. 1987 | Axiomes de la probabilité',
            '18 | Kurt Gödel | 28 avr. 1906 | 14 janv. 1978 | Théorèmes d’incomplétude',
            '19 | Alan Turing | 23 juin 1912 | 7 juin 1954 | Machine de Turing, problème de l’arrêt',
            '20 | Alexander Grothendieck | 28 mars 1928 | 13 nov. 2014 | Schémas, géométrie algébrique',
            'Lecture : la liste couvre vingt-quatre siècles, de l’Alexandrie ptolémaïque au XXI^(e). Elle comporte deux mathématiciennes — Sophie Germain et Emmy Noether — et quatre contributions non-européennes : al-Khwarizmi et Omar Khayyam (monde islamique), Kolmogorov (Russie), Grothendieck (né à Berlin, actif en France). Un seul prix Abel apparaît dans la liste : celui d’Andrew Wiles en 2016, pour la démonstration du dernier théorème de Fermat (Abel Prize) — et il n’appartient pas à un membre des vingt, précisément parce que la démonstration est collective.'
          ]
        }
      },
      {
        id: 'math-exercices',
        title: 'Exercices corrigés',
        field: 'Les grands mathématiciens',
        summary: 'Douze exercices portant sur les faits établis dans ce cours : dates, attributions et formules.',
        lesson: {
          sections: [
            'Douze exercices portant sur les faits établis dans ce cours : dates, attributions et formules. Essaie de répondre avant d’ouvrir la correction.',
            'Exercice A — Quel est le plus ancien des vingt mathématiciens, et quelle œuvre a-t-il écrite ? Correction : Euclide, né vers 325 av. J.-C. à Alexandrie et mort vers 265 av. J.-C. (MacTutor). Réponse : Euclide, auteur des Éléments. L’ouvrage a influencé les mathématiques occidentales pendant plus de deux mille ans (section 02).',
            'Exercice B — Quel mot français vient du nom d’al-Khwarizmi ? Lequel vient de son traité d’algèbre ? Correction : Deux mots : algorithme, qui dérive de son nom, et algèbre, qui vient du titre de son traité Hisab al-jabr w’al-muqabala (MacTutor). Réponse : algorithme et algèbre. Ce sont des faits de langue, qui disent la diffusion de l’œuvre, non sa valeur (section 03).',
            'Exercice C — Écrire la relation de récurrence de la suite de Fibonacci et ses deux premiers termes. Correction : uₙ₊₂ = uₙ₊₁ + uₙ, avec u₀ = 0 et u₁ = 1, soit la suite 0, 1, 1, 2, 3, 5, 8, 13, … Réponse : la relation ci-dessus. Elle est linéaire, donc du type traité dans le chapitre suites numériques (section 05).',
            'Exercice D — Quel mathématicien de la liste est à l’origine de la première machine à calculer mécanique, et laquelle ? Correction : Blaise Pascal, pour la Pascaline, construite vers 1642–1645 (MacTutor). Elle n’a pas d’affichage — les résultats se lisaient sur un cadran — et il n’en fut produit qu’une cinquantaine d’exemplaires. Réponse : Pascal et la Pascaline. À ne pas confondre avec le triangle de Pascal, qui est une table combinatoire (section 08).',
            'Exercice E — Qui a démontré le dernier théorème de Fermat, et en quelle année ? Quel prix a-t-il reçu, avec quel motif exact ? Correction : Andrew Wiles, en 1995 (MacTutor, Andrew Wiles). Il a reçu le prix Abel 2016 « for his stunning proof of Fermat’s Last Theorem by way of the modularity conjecture for semistable elliptic curves, opening a new era in number theory » (Abel Prize). Il avait aussi reçu le Clay Research Award 1999 pour son rôle dans le développement de la théorie des nombres (Clay Mathematics Institute). Réponse : Andrew Wiles. La démonstration s’appuie sur des résultats de modularité établis collectivement depuis les années 1970 (section 07).',
            'Exercice G — Résoudre l’équation x² + 5x = 6 et dire dans quel type elle entre chez al-Khwarizmi. Correction : On factorise : (x − 1)(x + 6) = 0, donc x = 1 ou x = −6. Ou, par le discriminant : Δ = 25 + 24 = 49 > 0, deux racines. Réponse : x = 1 et x = −6. C’est le deuxième type d’al-Khwarizmi, x² + ax = c avec a = 5 et c = 6, les deux coefficients étant positifs (section 03).',
            'Exercice H — Quel mathématicien est volontairement absent de cette liste ? Justifiez l’exclusion par le critère de la section 01. Correction : Plusieurs réponses sont défendables ; le cours cite explicitement Archimède, Apollonius, Diophante, Ramanujan et le groupe Bourbaki parmi les exclus. Ramanujan (1887–1920) est l’exemple le plus discutable : ses résultats en théorie des nombres sont fondamentaux, mais son œuvre n’a pas été achevée — ce qui le distingue des mathématiciens retenus, dont les contributions sont closes et utilisables. Réponse : toute figure dont l’apport fut absorbé par un cadre plus général ou resta inachevé. L’exclusion est un choix déclaré, non un oubli (section 01).',
            'Exercice I — Dans quel ordre chronologique se placent Sophie Germain, Gauss, Boole et Cantor ? Correction : Par date de naissance : Sophie Germain (1776), Gauss (1777), Boole (1815), Cantor (1845). Réponse : cet ordre correspond aux sections 12, 13, 14 et 15. C’est un ordre de survenance, non de mérite : Sophie Germain n’est pas « moins grande » que Gauss, née un an avant elle (section 01).',
            'Exercice J — Écrire l’identité d’Euler et expliquer ce qu’elle fixe. Correction : e^(iπ) + 1 = 0 Elle découle de la périodicité de l’exponentielle complexe : e^(iθ) = f(θ) + i·g(θ). Réponse : l’identité ci-dessus. Ce n’est pas une évidence intuitive mais une conséquence de la périodicité ; la présenter comme « allant de soi » inverse l’ordre du raisonnement (section 10).',
            'Exercice K — Énoncer les trois axiomes de Kolmogorov et dire ce que l’axiomatisation a changé. Correction : P(Ω) = 1 ; P(A) ≥ 0 ; P(⋃Aₙ) = Σ P(Aₙ) pour des événements deux à deux disjoints, publiés en 1933 (MacTutor). Réponse : ces trois axiomes. Ils transforment la probabilité en fonction sur un ensemble, indépendamment de toute interprétation — on peut alors comparer deux théories (section 18).',
            'Exercice L — Quel résultat de Gödel est le plus célèbre, et que dit-il exactement ? Correction : Le premier théorème d’incomplétude (1931) : dans tout système axiomatique cohérent et assez riche, il existe une phrase indémontrable dans ce système (MacTutor). Attention : le théorème ne dit pas que les mathématiques sont fausses, mais que les mathématiques contiennent plus de vérités que tout système formel ne peut en démontrer. Aucun système axiomatique complet ne peut prouver toutes les vérités arithmétiques. Réponse : le premier théorème d’incomplétude. L’incomplétude porte sur les systèmes et non sur la vérité : elle fixe une limite à la démonstration, pas au savoir.'
          ],
          exercise: {
            question: 'Quel est le plus ancien des vingt mathématiciens, et quelle œuvre a-t-il écrite ?',
            answer: 'Euclide, né vers 325 av. J.-C. à Alexandrie et mort vers 265 av. J.-C. (MacTutor). Réponse : Euclide, auteur des Éléments. L’ouvrage a influencé les mathématiques occidentales pendant plus de deux mille ans (section 02).'
          }
        }
      },
      {
        id: 'math-sources',
        title: 'Sources vérifiées',
        field: 'Les grands mathématiciens',
        summary: 'Chaque date de naissance, date de décès et attribution de ce cours provient d’une des sources ci-dessous, toutes consultées en ligne.',
        lesson: {
          sections: [
            'Chaque date de naissance, date de décès et attribution de ce cours provient d’une des sources ci-dessous, toutes consultées en ligne.',
            'Euclide, al-Khwarizmi, Omar Khayyam, Fibonacci, Descartes, Fermat, Pascal, Leibniz, Euler, Lagrange, Sophie Germain, Gauss, Boole, Cantor, Hilbert, Emmy Noether, Kolmogorov, Gödel, Turing, Grothendieck : fiches biographiques de MacTutor History of Mathematics, University of St Andrews — articles Euclid of Alexandria, Al-Khwarizmi, Omar Khayyam, Fibonacci, René Descartes, Pierre de Fermat, Blaise Pascal, Gottfried Leibniz, Leonhard Euler, Joseph-Louis Lagrange, Sophie Germain, Carl Friedrich Gauss, George Boole, Georg Cantor, David Hilbert, Emmy Noether, Andrei Kolmogorov, Kurt Gödel, Alan Turing et Alexander Grothendieck.',
            'Sophie Germain : énoncé du théorème : Wikipédia (anglais), Sophie Germain’s theorem — divisibilité par p² dès qu’un nombre premier auxiliaire q existe, identification d’un tel q pour tout premier inférieur à 100, attribution par Legendre en 1823.',
            'Wiles et le dernier théorème de Fermat : MacTutor, Andrew Wiles (date de la preuve : 1995) et The Abel Prize, Sir Andrew J. Wiles (motif exact du prix 2016).',
            'Prix Clay et problèmes du millénaire : Clay Mathematics Institute, Andrew Wiles (Clay Research Award 1999) et Clay Mathematics Institute, The Millennium Prize Problems (sept problèmes, conjecture de Riemann incluse dans la liste de Hilbert).',
            'Limites déclarées. Aucune source ne publie de liste canonique des « plus grands mathématiciens » : la section 01 expose donc des critères explicites, et le tableau de la section 22 est un ordre de naissance, non un classement par mérite. Les dates d’Euclide, d’al-Khwarizmi et de Fibonacci sont incertaines et la source les donne avec les mentions « environ », « probablement » et « possiblement ». Pour Fermat, MacTutor signale lui-même un litige sur l’année de naissance. L’anecdote des « ponts de Königsberg » et celle de la « voie royale vers la géométrie » ne sont retenues que comme résultats résolus et comme témoignage antique rapporté, jamais comme faits contemporains. Enfin, plusieurs formules de ce cours — identité d’Euler, axiomes de Kolmogorov, théorème de Sophie Germain, CTSC de Grothendieck — sont énoncées en version condensée et sans démonstration, ce qui est adapté à un cours de synthèse et ne remplace pas l’étude de la preuve complète.'
          ],
          sourcesHeading: 'Sources',
          sources: [
            {
              title: 'MacTutor History of Mathematics',
              url: 'https://mathshistory.st-andrews.ac.uk/'
            },
            {
              title: 'Wikipédia (anglais), Sophie Germain’s theorem',
              url: 'https://en.wikipedia.org/wiki/Sophie_Germain%27s_theorem'
            },
            {
              title: 'MacTutor, Andrew Wiles',
              url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Wiles/'
            },
            {
              title: 'The Abel Prize, Sir Andrew J. Wiles',
              url: 'https://abelprize.no/abel-prize-laureates/2016'
            },
            {
              title: 'Clay Mathematics Institute, Andrew Wiles',
              url: 'https://www.claymath.org/people/andrew-wiles/'
            },
            {
              title: 'Clay Mathematics Institute, The Millennium Prize Problems',
              url: 'https://www.claymath.org/millennium-problems/'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'grands-livres-mathematiques',
    title: 'Les grands livres de mathématiques',
    note: 'Dix ouvrages de référence, d’Euclide à Bourbaki : titre, auteur, édition, date de parution et résumé de chaque livre.',
    chapters: [
      {
        id: 'euclide-elements',
        title: 'Les Éléments (Elementa geometriae)',
        field: 'Euclide · 1482 (première édition imprimée)',
        summary: 'Euclide, première édition imprimée : Venise, 1482.',
        lesson: {
          fiche: [
            [
              'Titre',
              'Elementa geometriae (le texte s’ouvre par : « Preclarissimus liber elementorum Euclidis perspicacissimi in artem geometrie… »)'
            ],
            [
              'Auteur',
              'Euclide (texte compilé vers 300 av. J.-C.) ; traduction latine d’Adélard de Bath, établie à partir de l’arabe, éditée par Campanus de Novare'
            ],
            [
              'Édition',
              'Venise, Erhard Ratdolt. Première édition imprimée (editio princeps), en latin, avec une lettre dédicatoire de Ratdolt à Giovanni Mocenigo.'
            ],
            [
              'Date de parution',
              '25 mai 1482 (date du colophon : « octauis Calen. Iun. »)'
            ]
          ],
          sections: [
            'Les Éléments d’Euclide sont présentés par les bibliographes comme le plus ancien manuel de mathématiques encore en usage. L’édition de Ratdolt est la première version imprimée de l’ouvrage : elle reproduit le texte latin d’Adélard de Bath (XIIe siècle), traduit de l’arabe, revu au XIIIe siècle par Campanus de Novare.',
            'Ratdolt y résout le problème de l’impression des figures géométriques : le volume en contient plus de quatre cents, et on ignore encore s’il les a obtenues par des bois gravés ou par des moules métalliques. Le texte, très dépendant de Campanus, n’est pas fidèle à l’original grec, et Ratdolt y appelle Euclide « de Mégare », une confusion avec un autre philosophe grec. Selon la Linda Hall Library, cette édition compte quinze livres au lieu de treize.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Smithsonian Libraries — Euclide, Elementa geometriae (Venise, Ratdolt, 1482)',
              url: 'https://library.si.edu/es/digital-library/book/preclarissimusl00eucl'
            },
            {
              title: 'Bibliothèque de l’Université Keio — Euclide, Elementa geometriae (Venise, 25 mai 1482)',
              url: 'https://dcollections.lib.keio.ac.jp/en/node/205697'
            },
            {
              title: 'Linda Hall Library (MAA Convergence) — Euclid’s Elementa geometriae printed by Ratdolt',
              url: 'https://old.maa.org/node/841544'
            },
            {
              title: 'St John’s College, Cambridge — Euclid, Elementa geometriae (Venise, 1482)',
              url: 'https://www.joh.cam.ac.uk/node/2281'
            }
          ]
        }
      },
      {
        id: 'cardano-ars-magna',
        title: 'Ars magna (Artis magnae, sive de regulis algebraicis)',
        field: 'Girolamo Cardano · 1545',
        summary: 'Girolamo Cardano, Nuremberg, 1545.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Artis magnae, sive de regulis algebraicis, Lib. unus (« Le Grand Art, ou les règles de l’algèbre »)'
            ],
            [
              'Auteur',
              'Girolamo Cardano (1501-1576)'
            ],
            [
              'Édition',
              'Nuremberg, Johann Petreius, in-folio, 82 feuillets foliotés. Édition originale ; une seconde édition paraît du vivant de Cardano, en 1570.'
            ],
            [
              'Date de parution',
              '1545'
            ]
          ],
          sections: [
            'L’Ars magna est le grand traité d’algèbre de Cardano. Il expose la résolution des équations du troisième degré, par une méthode que Cardano avait obtenue de Niccolò Tartaglia et qu’il publie sans l’accord de celui-ci, ainsi que celle des équations du quatrième degré. Cardano y reconnaît aussi que Scipione del Ferro avait découvert la même formule que Tartaglia.',
            'Cardano ne se contente pas de chercher une solution : il observe les relations entre les racines d’une équation et ses coefficients, ce qui lui vaut d’être considéré comme l’un des fondateurs de la théorie des équations algébriques. Il distingue treize types d’équations du troisième degré, étudiés aux chapitres XI à XXIII. L’ouvrage est imprimé à Nuremberg par Johann Petreius, l’éditeur du De revolutionibus de Copernic.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Christie’s — Cardano, Artis magnae (Nuremberg, Petreius, 1545)',
              url: 'https://www.christies.com.cn/lot/lot-923991'
            },
            {
              title: 'Wikipédia (anglais) — Ars Magna (Cardano book)',
              url: 'https://en.wikipedia.org/wiki/Ars_Magna_(Cardano_book)'
            },
            {
              title: 'German Medical Science — Cardano et Johannes Petreius',
              url: 'https://www.egms.de/static/en/meetings/dgnc2008/08dgnc320.shtml'
            }
          ]
        }
      },
      {
        id: 'diophante-arithmetica',
        title: 'Arithmeticorum libri sex (Arithmétiques de Diophante)',
        field: 'Diophante d’Alexandrie, éd. Bachet de Méziriac · 1621',
        summary: 'Diophante, édité par Claude-Gaspard Bachet de Méziriac, Paris, 1621.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Diophanti Alexandrini Arithmeticorum libri sex, et de numeris multangulis liber unus. Nunc primum Graece & Latine editi, atque absolutissimis commentariis illustrati'
            ],
            [
              'Auteur',
              'Diophante d’Alexandrie (actif vers le milieu du IIIe siècle) ; texte grec, traduction latine et commentaires établis par Claude-Gaspard Bachet de Méziriac (1581-1638)'
            ],
            [
              'Édition',
              'Paris, 1621, in-folio, texte grec et latin en colonnes parallèles. Il existe deux adresses, Sébastien Cramoisy et Hieronymus Drouart, identiques sauf pour la page de titre. Première édition du texte grec.'
            ],
            [
              'Date de parution',
              '1621'
            ]
          ],
          sections: [
            'Les Arithmétiques de Diophante sont un traité antique sur la résolution d’équations en nombres. L’édition de Bachet est la première à donner le texte grec ; elle l’accompagne de la traduction latine de Wilhelm Xylander, parue en 1575, et de commentaires de Bachet.',
            'Cette édition attire l’attention de Pierre de Fermat sur la théorie des nombres : c’est dans sa copie que Fermat a écrit en marge l’énoncé de son célèbre « dernier théorème ». Une autre édition, avec les commentaires de Fermat, publiée par son fils Samuel de Fermat, paraît à Toulouse en 1670 chez Bernard Bosc.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Thomas Jefferson’s Libraries — Catalogue Sowerby : Diophanti Arithmeticorum (Paris, 1621)',
              url: 'https://tjlibraries.monticello.org/transcripts/sowerby/IV_1.html'
            },
            {
              title: 'Université de Kyoto — Diophanti Alexandrini Arithmeticorum libri sex (1621)',
              url: 'https://rmda.kulib.kyoto-u.ac.jp/en/item/RB00028884'
            },
            {
              title: 'Christie’s — Diophante, Arithmeticorum libri sex (Paris, 1621)',
              url: 'https://www.christies.com.cn/lot/lot-6352308'
            },
            {
              title: 'Bibliorare — Diophante, édition de Toulouse (1670) avec les commentaires de Fermat',
              url: 'https://www.bibliorare.com/lot/516943/'
            }
          ]
        }
      },
      {
        id: 'descartes-geometrie',
        title: 'La Géométrie (dans le Discours de la méthode)',
        field: 'René Descartes · 1637',
        summary: 'René Descartes, Leyde, 1637.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Discours de la méthode pour bien conduire sa raison, & chercher la vérité dans les sciences. Plus la Dioptrique. Les Météores. Et la Géométrie. Qui sont des essais de cette Méthode (La Géométrie est le troisième essai)'
            ],
            [
              'Auteur',
              'René Descartes (1596-1650) ; le volume paraît sans nom d’auteur'
            ],
            [
              'Édition',
              'Leyde, Jan Maire, in-4. Édition originale : 78 pages pour le Discours, puis 413 pages pour les essais. Descartes reçoit 200 exemplaires pour toute rémunération.'
            ],
            [
              'Date de parution',
              '8 juin 1637 (fin de l’impression ; privilège français du 4 mai 1637)'
            ]
          ],
          sections: [
            'La Géométrie est le troisième et dernier essai du volume, après la Dioptrique et les Météores. C’est le seul ouvrage de mathématiques que Descartes ait publié. Le Livre premier occupe les pages 297 à 314 de l’édition originale et passe pour le texte où Descartes introduit les coordonnées dites cartésiennes. Il y traite notamment le problème de Pappus, présenté comme la naissance de la géométrie analytique.',
            'Descartes écrit en français plutôt qu’en latin, pour toucher ceux qui ne se servent que de leur raison naturelle. Une traduction latine de La Géométrie, accompagnée de notes de Florimond de Beaune, paraît du vivant de Descartes.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Bibliorare — Descartes, Discours de la méthode (Leyde, Jean Maire, 1637)',
              url: 'https://www.bibliorare.com/lot/134946/'
            },
            {
              title: 'Gazette Drouot — Descartes, Discours de la méthode (Leyde, 1637)',
              url: 'https://gazette-drouot.com/en/lots/13345563--c2-a7-descartes-rene---discours---'
            },
            {
              title: 'BibNum (OpenEdition) — Le Livre premier de La Géométrie de Descartes',
              url: 'https://journals.openedition.org/bibnum/635'
            },
            {
              title: 'Source Library — Descartes, Discours de la méthode et Essais (édition originale de 1637)',
              url: 'https://ficino.sourcelibrary.org/book/6953e52177f38f6761beffa2/page/6953e52277f38f6761beffaf'
            }
          ]
        }
      },
      {
        id: 'newton-principia',
        title: 'Principia (Philosophiae naturalis principia mathematica)',
        field: 'Isaac Newton · 1687',
        summary: 'Isaac Newton, Londres, 1687.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Philosophiae naturalis principia mathematica'
            ],
            [
              'Auteur',
              'Isaac Newton (1642-1727), édité par Edmond Halley'
            ],
            [
              'Édition',
              'Londres, « jussu Societatis Regiae ac typis Josephi Streater », in-4. Édition originale, imprimée par ordre de la Royal Society ; Halley en suit l’impression et en supporte le coût.'
            ],
            [
              'Date de parution',
              '1687 (le 5 juillet 1687, Halley annonce à Newton l’achèvement de l’impression)'
            ]
          ],
          sections: [
            'Les Principia exposent les trois lois du mouvement et la loi de la gravitation universelle, et résolvent le problème du mouvement des planètes. L’ouvrage établit aussi les bases mathématiques du mouvement des corps, ainsi que celui des fluides et l’effet des frottements.',
            'Le manuscrit, copié par Humphrey Newton, est conservé à la Royal Society. Le tirage de la première édition est petit : peut-être 250 exemplaires selon Bonhams. Une deuxième édition, très révisée avec la collaboration de Roger Cotes, paraît en 1713 et est considérée comme l’édition de référence.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Boston Public Library — Newton, Principia (Londres, 1687)',
              url: 'https://ark.digitalcommonwealth.org/ark:/50959/1n79hq60p'
            },
            {
              title: 'Cambridge Digital Library — Manuscrit des Principia (Royal Society MS/69)',
              url: 'https://cudl.lib.cam.ac.uk/view/MS-ROYALSOCIETY-00069'
            },
            {
              title: 'Université de Glasgow — Newton, Principia (Londres, 1687)',
              url: 'https://www.gla.ac.uk/myglasgow/archivespecialcollections/digitisedcollections/revolutionsinastronomy/sirisaacnewtonprincipia'
            },
            {
              title: 'Bonhams — Newton, Principia, première édition (1687)',
              url: 'https://www.bonhams.com/auction/22714/lot/165/newton-isaac-philosophiae-naturalis-principia-mathematica-first-edition-joseph-streater-1687'
            }
          ]
        }
      },
      {
        id: 'euler-introductio',
        title: 'Introductio in analysin infinitorum',
        field: 'Leonhard Euler · 1748',
        summary: 'Leonhard Euler, Lausanne, 1748.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Introductio in analysin infinitorum, auctore Leonhardo Eulero. Tomus primus [secundus]'
            ],
            [
              'Auteur',
              'Leonhard Euler (1707-1783)'
            ],
            [
              'Édition',
              'Lausanne, Marc-Michel Bousquet et associés, 2 volumes in-4, avec frontispice gravé, portrait du dédicataire Jean-Jacques Dortous de Mairan et 40 planches dépliantes. Édition originale.'
            ],
            [
              'Date de parution',
              '1748 (texte rédigé en 1745)'
            ]
          ],
          sections: [
            'Le premier tome rassemble les travaux d’Euler sur les séries infinies, les produits infinis et les fractions continues. Euler y fait de la fonction le concept central de l’analyse, introduit la notation f(x) et souligne le rôle fondamental du nombre e et de l’exponentielle.',
            'Le second tome porte sur la géométrie analytique et l’étude des courbes algébriques. Les bibliographes comparent le rôle de l’ouvrage pour l’analyse moderne à celui des Éléments d’Euclide pour la géométrie antique.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Euler Archive — E101 : Introductio in analysin infinitorum, volume 1',
              url: 'https://scholarlycommons.pacific.edu/euler-works/101/'
            },
            {
              title: 'Euler Archive — E102 : Introductio in analysin infinitorum, volume 2',
              url: 'https://scholarlycommons.pacific.edu/euler-works/102/'
            },
            {
              title: 'Bibliothèques numériques de la Défense (notice d’après la BnF) — Introductio in analysin infinitorum',
              url: 'https://bibliotheques-numeriques.defense.gouv.fr/impression/document/a2dbdb7c-4859-4d87-8b0d-88abc23df17c'
            },
            {
              title: 'Université de Kyoto — Introductio in analysin infinitorum (1748)',
              url: 'https://rmda.kulib.kyoto-u.ac.jp/en/item/rb00028899'
            },
            {
              title: 'Christie’s — Euler, Introductio in analysin infinitorum (Lausanne, 1748)',
              url: 'https://www.christies.com.cn/lot/lot-933528'
            }
          ]
        }
      },
      {
        id: 'gauss-disquisitiones',
        title: 'Disquisitiones arithmeticae',
        field: 'Carl Friedrich Gauss · 1801',
        summary: 'Carl Friedrich Gauss, Leipzig, 1801.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Disquisitiones arithmeticae, auctore Carolo Friderico Gauss'
            ],
            [
              'Auteur',
              'Carl Friedrich Gauss (1777-1855)'
            ],
            [
              'Édition',
              'Leipzig, « in commissis apud Gerh. Fleischer, jun. », in-8 (XVIII pages, 668 pages, 10 feuillets). Édition originale, en latin.'
            ],
            [
              'Date de parution',
              '1801 (la dédicace au duc de Brunswick est datée de juillet 1801)'
            ]
          ],
          sections: [
            'Gauss rédige l’ouvrage en 1798, à 21 ans, et le publie en 1801. Il comprend sept sections et 366 articles. Les trois premières rassemblent des résultats connus (congruences, théorème fondamental de l’arithmétique, racines primitives…) ; la section V, plus de la moitié du volume, est consacrée aux formes quadratiques.',
            'On y trouve la démonstration par Gauss de la loi de réciprocité quadratique, que ni Euler ni Legendre n’avaient obtenue, ainsi que la construction du polygone régulier à dix-sept côtés. Les typographes ayant mal compris ces mathématiques nouvelles, le volume contient un erratum de quatre pages et des feuillets de remplacement. Une seconde édition paraît en 1870, après la mort de Gauss ; la traduction anglaise d’Arthur Clarke est publiée en 1966.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Bibliothèque de l’ETH Zurich (swisscollections) — Disquisitiones arithmeticae (Leipzig, 1801)',
              url: 'https://swisscollections.k8s-001.unibas.ch/Record/991085527879705501'
            },
            {
              title: 'MacTutor (Université de St Andrews) — Gauss : Disquisitiones Arithmeticae',
              url: 'https://mathshistory.st-andrews.ac.uk/Extras/Gauss_Disquisitiones'
            },
            {
              title: 'Christie’s — Gauss, Disquisitiones arithmeticae (Leipzig, 1801)',
              url: 'https://onlineonly.christies.com.cn/s/printed-manuscript-americana-science/disquisitiones-arithmeticae-33/173673'
            },
            {
              title: 'Smithsonian Libraries — Disquisitiones arithmeticae',
              url: 'https://library.si.edu/digital-library/book/disquisitionesa00gaus'
            },
            {
              title: 'Wikipédia (anglais) — Disquisitiones Arithmeticae',
              url: 'https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae'
            }
          ]
        }
      },
      {
        id: 'cauchy-cours-d-analyse',
        title: 'Cours d’analyse de l’École royale polytechnique',
        field: 'Augustin-Louis Cauchy · 1821',
        summary: 'Augustin-Louis Cauchy, Paris, 1821.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Cours d’analyse de l’École royale polytechnique ; Ire partie. Analyse algébrique'
            ],
            [
              'Auteur',
              'Augustin-Louis Cauchy (1789-1857)'
            ],
            [
              'Édition',
              'Paris, de l’Imprimerie royale, Debure frères, libraires du Roi et de la Bibliothèque du Roi. Édition originale.'
            ],
            [
              'Date de parution',
              '1821'
            ]
          ],
          sections: [
            'Ce livre est tiré de l’enseignement de Cauchy à l’École polytechnique. Le Cours d’analyse devait comprendre plusieurs parties, mais seule la première, l’Analyse algébrique, a été publiée ; on désigne donc par ce nom l’ouvrage entier.',
            'On y trouve des définitions de la limite et de la continuité d’une fonction. L’ouvrage est devenu très influent comme une des premières tentatives pour fonder l’analyse sur une base rigoureuse.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Internet Archive — Cauchy, Cours d’analyse (1821), exemplaire numérisé',
              url: 'https://archive.org/details/coursdanalysedel00cauc'
            },
            {
              title: 'Université de Lille — Œuvres complètes de Cauchy, 2e série, tome III (Cours d’analyse)',
              url: 'https://lillonum.univ-lille.fr/files/original/8673b36cd9bbcf5f58ebc81873b56b692ff29c1e.pdf'
            },
            {
              title: 'Société mathématique du Canada (Notes) — Taking a cue from Cauchy',
              url: 'https://notes.math.ca/en/article/taking-a-cue-from-cauchy/'
            },
            {
              title: 'Wikipédia (anglais) — Cours d’analyse',
              url: 'https://en.wikipedia.org/wiki/Cours_d%27analyse'
            }
          ]
        }
      },
      {
        id: 'whitehead-russell-principia-mathematica',
        title: 'Principia Mathematica',
        field: 'Alfred North Whitehead et Bertrand Russell · 1910-1913',
        summary: 'Alfred North Whitehead et Bertrand Russell, Cambridge, 1910-1913.',
        lesson: {
          fiche: [
            [
              'Titre',
              'Principia Mathematica'
            ],
            [
              'Auteurs',
              'Alfred North Whitehead (1861-1947) et Bertrand Russell (1872-1970)'
            ],
            [
              'Édition',
              'Cambridge, at the University Press, 3 volumes grand in-8. Édition originale. Tirage : 750 exemplaires du premier volume, réduit à 500 pour les volumes II et III.'
            ],
            [
              'Date de parution',
              'Volume I : 1910 ; volume II : 1912 ; volume III : 1913 (seconde édition : 1925 pour le volume I, 1927 pour les volumes II et III)'
            ]
          ],
          sections: [
            'Les Principia Mathematica sont un ouvrage sur les fondements des mathématiques. Les auteurs y tentent de déduire l’ensemble des mathématiques d’un petit nombre d’idées primitives et de principes d’inférence logique, à l’aide d’une notation symbolique très précise. L’ouvrage fait suite aux Principles of Mathematics de Russell (1903).',
            'Les auteurs n’ont pas atteint pleinement leur objectif, certaines de leurs théories et axiomes s’étant révélés insatisfaisants. Mais ces échecs ont stimulé la recherche, et l’ouvrage a profondément marqué la logique mathématique, la théorie des ensembles et la philosophie analytique.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Project Gutenberg — Principia Mathematica, vol. 1 (Cambridge, 1910-1913)',
              url: 'https://www.gutenberg.org/ebooks/78050'
            },
            {
              title: 'Christie’s — Whitehead et Russell, Principia mathematica (Cambridge, 1910-1913)',
              url: 'https://onlineonly.christies.com.cn/s/valuable-books-manuscripts/alfred-north-whitehead-1861-1947-bertrand-russell-1872-1970-152/93457'
            },
            {
              title: 'History of Information — Russell et Whitehead, Principia Mathematica',
              url: 'https://historyofinformation.com/detail.php?id=1729'
            }
          ]
        }
      },
      {
        id: 'bourbaki-elements-de-mathematique',
        title: 'Éléments de mathématique',
        field: 'Nicolas Bourbaki · 1939',
        summary: 'Nicolas Bourbaki, Paris, 1939.',
        lesson: {
          fiche: [
            [
              'Titre',
              'Éléments de mathématique (« mathématique » est écrit volontairement au singulier)'
            ],
            [
              'Auteur',
              'Nicolas Bourbaki, pseudonyme collectif d’un groupe de mathématiciens, principalement français, dont Henri Cartan, Claude Chevalley, Jean Dieudonné et André Weil'
            ],
            [
              'Édition',
              'Paris, Hermann, collection « Actualités scientifiques et industrielles ». Le premier volume paru est le fascicule de résultats de la Théorie des ensembles (ASI 846).'
            ],
            [
              'Date de parution',
              '1939 (début de la publication)'
            ]
          ],
          sections: [
            'Les Éléments de mathématique sont un traité qui vise à présenter les mathématiques de façon rigoureuse et systématique à partir de leurs fondements. Le livre I, Théorie des ensembles, ouvre le traité ; l’ouvrage est composé de dix livres, divisés en chapitres. Le titre rend hommage à Euclide, et le singulier exprime l’idée de rétablir l’unité des mathématiques.',
            'Les éditions Hermann reçoivent le projet en 1937, auprès de leur directeur Enrique Freymann, et publient dès 1939 les premiers fascicules sans indiquer l’identité des rédacteurs. Les volumes ne sont pas parus dans l’ordre du traité : le premier à paraître est un fascicule de résultats, c’est-à-dire des définitions et des énoncés sans démonstration.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            {
              title: 'Bibliothèque nationale de France — Communiqué : archives de Nicolas Bourbaki (éditions Hermann)',
              url: 'https://www.bnf.fr/sites/default/files/2018-11/cp_bourbaki.pdf'
            },
            {
              title: 'Institut Élie Cartan de Lorraine — Premières éditions françaises des Éléments de mathématique',
              url: 'https://dev-iecl.univ-lorraine.fr/wp-content/uploads/2021/04/BOURBAKI_depouillement_chapitre_premieres_editions_fr_des_elements_de_mathematique_par_Nicolas_Bourbaki.pdf'
            },
            {
              title: 'Springer — Bourbaki, Théorie des ensembles (réimpression de l’édition de 1970)',
              url: 'https://link.springer.com/10.1007/978-3-540-34035-5'
            },
            {
              title: 'LibraryThing — Nicolas Bourbaki',
              url: 'https://www.librarything.com/author/bourbakinicolas'
            }
          ]
        }
      }
    ]
  },

{
  id: 'equations-differentielles',
  title: 'Les équations différentielles',
  note: 'Six chapitres progressifs consacrés aux équations différentielles ordinaires : vocabulaire et problèmes de Cauchy, équations du premier ordre, modèles de croissance et méthodes numériques, équations linéaires du second ordre, oscillateurs et applications physiques, puis systèmes différentiels et transformée de Laplace. Les méthodes présentées s’appliquent sous les hypothèses précisées dans chaque chapitre ; une formule de solution ne dispense pas de vérifier le domaine de validité et les conditions initiales.',
  chapters: [
    {
      id: 'fondements-equations-differentielles',
      title: 'Fondements : définition, ordre et problèmes de Cauchy',
      field: 'Mathématiques · Équations différentielles ordinaires · Fondements',
      summary: 'Définir une équation différentielle, reconnaître son ordre, distinguer solution générale et solution particulière, et comprendre le rôle des conditions initiales ainsi que des théorèmes d’existence et d’unicité.',
      lesson: {
        sections: [
          'Une équation différentielle est une relation qui met en jeu une fonction inconnue et une ou plusieurs de ses dérivées. Pour une fonction y dépendant d’une variable indépendante t, une équation peut par exemple relier y, y′ et t. Résoudre l’équation signifie déterminer une fonction qui satisfait cette relation sur un intervalle. Il ne s’agit donc pas de trouver un nombre isolé, mais une fonction entière. Une équation différentielle ordinaire (EDO) ne comporte qu’une variable indépendante ; une équation aux dérivées partielles comporte plusieurs variables indépendantes et relève d’un cadre distinct.',
          'L’ordre d’une EDO est l’ordre de la dérivée la plus élevée qui apparaît. Ainsi, y′ + 3y = 0 est du premier ordre, tandis que y″ − 4y′ + 4y = 0 est du second ordre. Le degré, lorsqu’il est défini, concerne la puissance de la dérivée d’ordre le plus élevé après élimination des éventuels dénominateurs et radicaux portant sur les dérivées ; il ne doit pas être confondu avec l’ordre. Une équation est linéaire si la fonction inconnue et ses dérivées apparaissent à la puissance 1, sans être multipliées entre elles, avec des coefficients qui ne dépendent que de la variable indépendante. Par exemple, y′ + p(t)y = q(t) est linéaire, alors que y′ = y² est non linéaire.',
          'Une solution générale contient habituellement autant de constantes arbitraires que l’ordre de l’équation, dans le cadre régulier d’une EDO ordinaire résolue. Une solution particulière est obtenue en fixant ces constantes à l’aide de données supplémentaires. Pour une équation du premier ordre, une condition initiale y(t₀) = y₀ sélectionne souvent une courbe de la famille générale. Pour une équation du second ordre, il faut généralement deux conditions indépendantes, par exemple y(t₀) et y′(t₀). Ces données forment un problème de Cauchy, aussi appelé problème à valeur initiale.',
          'L’existence et l’unicité ne sont pas automatiques pour toute équation. Pour une équation explicite y′ = f(t,y), une condition suffisante classique est que f et sa dérivée partielle par rapport à y soient continues dans un voisinage du point initial ; le théorème de Picard-Lindelöf garantit alors une solution locale unique. Cette condition est suffisante, mais pas nécessaire. Si les hypothèses échouent, il faut examiner le problème précisément : il peut ne pas avoir de solution, en avoir plusieurs, ou tout de même en avoir une unique. Il faut également distinguer existence locale et prolongement global sur tout l’intervalle souhaité.',
          'La vérification d’une solution est une étape essentielle. On dérive la fonction proposée, on remplace la fonction et ses dérivées dans l’équation, puis on vérifie l’égalité. On contrôle séparément les conditions initiales et le domaine où les expressions sont définies. Cette démarche permet de détecter une constante oubliée, une erreur de signe ou une solution qui ne satisfait qu’une partie du problème.'
        ],
        formula: {
          label: 'FORME GÉNÉRALE D’UNE EDO DU PREMIER ORDRE',
          text: 'y′ = f(t, y)'
        },
        example: {
          statement: 'Résoudre y′ = 2t avec la condition initiale y(0) = 3, puis vérifier la solution.',
          calculation: 'On intègre : y(t) = ∫2t dt = t² + C. La condition y(0) = 3 donne 0 + C = 3, donc C = 3. La dérivée de y(t) = t² + 3 vaut y′(t) = 2t.',
          answer: 'La solution du problème de Cauchy est y(t) = t² + 3. Elle vérifie l’équation puisque y′ = 2t, et la condition initiale puisque y(0) = 3.'
        },
        exercise: {
          question: 'Quel nombre de conditions initiales indépendantes faut-il généralement pour déterminer une solution particulière d’une EDO linéaire du second ordre ?',
          answer: 'Deux conditions indépendantes sont généralement nécessaires, par exemple y(t₀) et y′(t₀), sous réserve que le problème soit bien posé.'
        },
        exercises: [
          {
            question: 'Quel est l’ordre de l’équation y‴ + 2y′ − y = 0 ?',
            answer: 'L’ordre est 3, car la dérivée d’ordre le plus élevé est y‴.'
          },
          {
            question: 'L’équation y′ + t²y = cos(t) est-elle linéaire ?',
            answer: 'Oui. Elle est de la forme y′ + p(t)y = q(t), avec p(t) = t² et q(t) = cos(t).'
          },
          {
            question: 'Pourquoi une condition initiale est-elle utile ?',
            answer: 'Elle permet de sélectionner, parmi les solutions possibles de l’équation, celle qui correspond à la valeur observée ou imposée au temps initial.'
          }
        ],
        equationDetails: [
          {
            title: 'Équation différentielle du premier ordre',
            formula: 'y′ = f(t, y)',
            explanation: 'Cette écriture explicite indique que la pente de la solution au point (t,y) est déterminée par f. Une courbe solution doit avoir en chaque point une pente égale à la valeur de f en ce point.',
            parameters: 't : variable indépendante ; y(t) : fonction inconnue ; y′(t) : dérivée de y par rapport à t ; f : fonction prescrivant la pente.',
            example: 'Pour y′ = 2t, la fonction y(t) = t² + 3 possède bien la dérivée 2t.',
            result: 'La relation est satisfaite sur tout intervalle réel.'
          },
          {
            title: 'Problème de Cauchy',
            formula: 'y′ = f(t, y),  y(t₀) = y₀',
            explanation: 'L’équation décrit l’évolution et la condition initiale fixe la valeur de la solution à l’instant t₀. L’existence et l’unicité dépendent des propriétés de f dans un voisinage du point initial.',
            parameters: 't₀ : valeur initiale de la variable indépendante ; y₀ : valeur initiale de la fonction ; f : second membre de l’EDO.',
            example: 'y′ = 2t avec y(0) = 3 conduit à y(t) = t² + 3.',
            result: 'Une solution particulière est déterminée dans le domaine où le problème possède une solution unique.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Calculus Volume 2, 4.1 Basics of Differential Equations',
            url: 'https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations'
          },
          {
            title: 'MIT OpenCourseWare — 18.03SC Differential Equations, Fall 2011',
            url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/'
          },
          {
            title: 'University of Oxford — A1: Differential Equations 1 (2024–25)',
            url: 'https://courses.maths.ox.ac.uk/course/view.php?id=5511'
          }
        ]
      }
    },
    {
      id: 'equations-premier-ordre',
      title: 'Équations différentielles du premier ordre',
      field: 'Mathématiques · EDO · Séparation des variables et équations linéaires',
      summary: 'Résoudre les équations à variables séparables et les équations linéaires par facteur intégrant, en tenant compte des solutions constantes et des conditions initiales.',
      lesson: {
        sections: [
          'Une équation du premier ordre est dite à variables séparables lorsqu’elle peut s’écrire y′ = g(t)h(y). Lorsque h(y) n’est pas nulle, on sépare les variables sous la forme dy/h(y) = g(t)dt, puis on intègre les deux membres. Il faut toutefois commencer par rechercher les valeurs constantes y = y* telles que h(y*) = 0 : elles peuvent fournir des solutions d’équilibre qui seraient perdues si l’on divisait directement par h(y). Après intégration, on applique les conditions initiales et on précise l’intervalle de validité.',
          'La méthode de séparation conduit souvent à une relation implicite entre t et y. Il n’est pas toujours possible, ni nécessaire, d’isoler y à l’aide de fonctions élémentaires. Une solution implicite reste valable si elle définit une fonction suffisamment régulière et satisfait l’équation sur l’intervalle considéré. Les étapes de calcul doivent conserver les constantes d’intégration et respecter les restrictions de domaine, notamment lorsqu’un logarithme ou une division apparaît.',
          'Une EDO linéaire du premier ordre se met sous la forme standard y′ + p(t)y = q(t). On construit le facteur intégrant μ(t) = exp(∫p(t)dt). En multipliant l’équation par μ, le membre de gauche devient la dérivée du produit μy : (μy)′ = μq. Il suffit alors d’intégrer, puis de diviser par μ, qui est strictement positif lorsqu’il est défini comme une exponentielle réelle. Cette méthode s’applique sur un intervalle où p et q sont continues.',
          'La séparation des variables et le facteur intégrant répondent à des formes différentes. Il faut d’abord reconnaître la structure de l’équation plutôt que choisir une méthode au hasard. Certaines équations peuvent être traitées par plusieurs techniques, tandis que d’autres exigent des substitutions ou des méthodes plus avancées. Il n’existe pas de méthode élémentaire universelle qui résout toutes les EDO du premier ordre.',
          'Les modèles de décroissance et de relaxation conduisent fréquemment à une équation linéaire du type y′ + ky = b, où k est constant. La solution combine un régime transitoire exponentiel et une valeur d’équilibre b/k lorsque k est non nul. Cette lecture permet de comprendre le comportement à long terme sans se limiter à la manipulation algébrique.'
        ],
        formula: {
          label: 'FACTEUR INTÉGRANT',
          text: 'μ(t) = exp(∫p(t)dt),  y′ + p(t)y = q(t)'
        },
        example: {
          statement: 'Résoudre y′ + 2y = 4 avec y(0) = 1.',
          calculation: 'Ici p(t) = 2 et q(t) = 4. Le facteur intégrant est μ(t) = e^(2t). Ainsi (e^(2t)y)′ = 4e^(2t). En intégrant, e^(2t)y = 2e^(2t) + C, donc y = 2 + Ce^(−2t). Avec y(0) = 1, on obtient C = −1.',
          answer: 'La solution est y(t) = 2 − e^(−2t). Elle vérifie y(0) = 1 et tend vers 2 lorsque t tend vers +∞.'
        },
        exercise: {
          question: 'Quelle est la première précaution à prendre avant de séparer les variables dans y′ = g(t)h(y) ?',
          answer: 'Rechercher les solutions constantes h(y) = 0, car une division par h(y) pourrait les éliminer.'
        },
        exercises: [
          {
            question: 'Résoudre y′ = 3t² avec y(0) = 2.',
            answer: 'Une intégration donne y = t³ + C. La condition initiale impose C = 2, donc y(t) = t³ + 2.'
          },
          {
            question: 'Quel facteur intégrant convient à y′ + 5y = q(t) ?',
            answer: 'μ(t) = e^(5t), car μ(t) = exp(∫5dt).'
          },
          {
            question: 'Résoudre y′ = −3y avec y(0) = 4.',
            answer: 'La séparation donne dy/y = −3dt, donc y = Ce^(−3t). La condition initiale impose C = 4 : y(t) = 4e^(−3t).'
          }
        ],
        equationDetails: [
          {
            title: 'Séparation des variables',
            formula: 'y′ = g(t)h(y),  dy/h(y) = g(t)dt',
            explanation: 'La méthode sépare les dépendances en t et en y afin d’intégrer chaque côté. Les solutions constantes issues de h(y) = 0 doivent être examinées à part avant toute division.',
            parameters: 't : variable indépendante ; y : fonction inconnue ; g : fonction de t ; h : fonction de y.',
            example: 'Pour y′ = ty et y ≠ 0 : dy/y = tdt, donc ln|y| = t²/2 + C.',
            result: 'y(t) = C₁ exp(t²/2), avec la solution nulle y(t) = 0 également incluse lorsque C₁ = 0.'
          },
          {
            title: 'Facteur intégrant d’une équation linéaire',
            formula: 'μ(t) = exp(∫p(t)dt),  y(t) = [∫μ(t)q(t)dt + C]/μ(t)',
            explanation: 'Le facteur intégrant transforme le membre de gauche en dérivée d’un produit. La formule est valable sur un intervalle où les coefficients sont continus.',
            parameters: 'p(t), q(t) : coefficients connus ; μ(t) : facteur intégrant ; C : constante déterminée par une condition initiale.',
            example: 'Pour y′ + 2y = 4, μ = e^(2t), puis (e^(2t)y)′ = 4e^(2t).',
            result: 'y(t) = 2 + Ce^(−2t). Avec y(0) = 1, y(t) = 2 − e^(−2t).'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Calculus Volume 2, 4.3 Separable Equations',
            url: 'https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations'
          },
          {
            title: 'OpenStax — Calculus Volume 2, 4.5 First-Order Linear Equations',
            url: 'https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations'
          },
          {
            title: 'MIT OpenCourseWare — 18.03 Differential Equations, Readings',
            url: 'https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/readings/'
          }
        ]
      }
    },
    {
      id: 'modelisation-et-methodes-numeriques',
      title: 'Modélisation, croissance et méthodes numériques',
      field: 'Mathématiques appliquées · Modèles différentiels · Approximation numérique',
      summary: 'Construire des modèles de croissance, de décroissance et de saturation, interpréter les équilibres et approcher numériquement une solution lorsque la résolution exacte est difficile.',
      lesson: {
        sections: [
          'Une EDO sert à traduire une loi d’évolution locale. Si la vitesse de variation d’une quantité y est proportionnelle à cette quantité, le modèle est y′ = ky. Sa solution est exponentielle : y(t) = y₀e^(kt). Pour k positif, la quantité augmente ; pour k négatif, elle décroît. Le paramètre k a l’unité inverse de celle du temps. Le modèle exponentiel est utile sur des intervalles où l’hypothèse de proportionnalité reste pertinente, mais il ne décrit pas nécessairement les contraintes à long terme d’une population ou d’une ressource.',
          'La loi logistique ajoute une capacité limite K : y′ = ry(1 − y/K), avec r positif et K positif. Les équilibres sont y = 0 et y = K. Lorsque la quantité est comprise entre 0 et K, le taux de croissance est positif ; au-dessus de K, le modèle prédit une diminution. La croissance ralentit à mesure que y approche K. Ce modèle constitue une idéalisation : une population réelle peut subir des variations de ressources, de structure d’âge, de migration et d’environnement qui ne sont pas représentées par cette équation.',
          'Les équations différentielles apparaissent aussi dans les phénomènes de refroidissement, de mélange et de relaxation. Une loi de refroidissement de Newton, sous une température ambiante constante Tₐ et un coefficient positif k, s’écrit T′ = −k(T − Tₐ). La différence entre la température du corps et celle du milieu décroît exponentiellement. Le modèle suppose notamment que le coefficient d’échange et la température ambiante restent suffisamment constants.',
          'Quand aucune solution analytique simple n’est disponible, une méthode numérique permet d’estimer la trajectoire. La méthode d’Euler utilise la pente au début de chaque pas : y(n+1) = y(n) + h f(t(n), y(n)), et t(n+1) = t(n) + h. On répète cette opération à partir de la condition initiale. Le pas h contrôle la finesse du calcul : le diminuer améliore souvent l’approximation dans un régime régulier, mais augmente le nombre de calculs et ne garantit pas à lui seul la stabilité ou l’exactitude.',
          'L’erreur numérique dépend de la méthode, du pas et du comportement de la solution. Pour Euler explicite, l’erreur globale est généralement d’ordre 1 en h sur un intervalle régulier : lorsque h est divisé par 2, l’erreur est souvent approximativement divisée par 2 dans le régime asymptotique. Cette observation ne remplace pas une étude de convergence. Pour les calculs scientifiques, on compare souvent plusieurs pas, on contrôle les unités et on confronte si possible le résultat numérique à une solution exacte ou à une méthode plus précise.'
        ],
        formula: {
          label: 'MÉTHODE D’EULER EXPLICITE',
          text: 'y(n+1) = y(n) + h f(t(n), y(n))'
        },
        example: {
          statement: 'Approcher la solution de y′ = −y avec y(0) = 1 par la méthode d’Euler, en utilisant un pas h = 0,1, jusqu’à t = 0,2.',
          calculation: 'Au départ, t₀ = 0 et y₀ = 1. La pente vaut f(0,1) = −1, donc y₁ = 1 + 0,1 × (−1) = 0,9. Au deuxième pas, la pente vaut −0,9, donc y₂ = 0,9 + 0,1 × (−0,9) = 0,81.',
          answer: 'L’approximation d’Euler donne y(0,2) ≈ 0,81. La solution exacte est e^(−0,2) ≈ 0,8187 ; cet écart illustre l’erreur d’approximation numérique.'
        },
        exercise: {
          question: 'Dans la méthode d’Euler explicite, que représente le pas h ?',
          answer: 'C’est l’incrément de la variable indépendante entre deux approximations successives.'
        },
        exercises: [
          {
            question: 'Pour y′ = 0,2y, le taux k est-il associé à une croissance ou à une décroissance ?',
            answer: 'À une croissance exponentielle, car k est positif.'
          },
          {
            question: 'Quels sont les équilibres du modèle logistique y′ = ry(1 − y/K) ?',
            answer: 'Les équilibres sont y = 0 et y = K, car le second membre s’annule pour ces deux valeurs.'
          },
          {
            question: 'Avec Euler, y′ = 2t, y(0) = 0 et h = 0,5, quelle est l’approximation y(0,5) ?',
            answer: 'y₁ = 0 + 0,5 × 0 = 0. La pente initiale est nulle ; l’approximation au premier pas est donc 0, alors que la solution exacte donne 0,125.'
          }
        ],
        equationDetails: [
          {
            title: 'Croissance ou décroissance exponentielle',
            formula: 'y′ = ky,  y(t) = y₀e^(kt)',
            explanation: 'Le taux instantané de variation est proportionnel à la quantité présente. Le signe de k détermine le sens de l’évolution, et la solution suppose k constant.',
            parameters: 'y(t) : quantité à l’instant t ; y₀ : quantité initiale ; k : taux constant (unité inverse du temps) ; t : temps.',
            example: 'Avec y₀ = 100 et k = 0,03 par an, après 1 an : y(1) = 100e^0,03.',
            result: 'y(1) ≈ 103,05. La valeur est une prédiction du modèle exponentiel.'
          },
          {
            title: 'Équation logistique',
            formula: 'y′ = ry(1 − y/K)',
            explanation: 'Le taux de croissance relatif diminue avec y et s’annule à la capacité limite K. Les deux solutions d’équilibre sont 0 et K. Le modèle est une approximation déterministe à paramètres constants.',
            parameters: 'r : taux intrinsèque de croissance ; K : capacité limite ; y : quantité modélisée.',
            example: 'Si r = 0,2, K = 1000 et y = 500, alors y′ = 0,2 × 500 × (1 − 0,5).',
            result: 'y′ = 50 unités de quantité par unité de temps.'
          },
          {
            title: 'Méthode d’Euler explicite',
            formula: 'y(n+1) = y(n) + h f(t(n), y(n))',
            explanation: 'La méthode remplace localement la courbe par sa tangente sur un petit intervalle. Elle fournit une approximation et non une identité exacte.',
            parameters: 'h : pas ; t(n) : temps au pas n ; y(n) : approximation de la solution ; f : second membre de l’EDO.',
            example: 'Pour y′ = −y, y₀ = 1 et h = 0,1 : y₁ = 1 + 0,1(−1) = 0,9.',
            result: 'Après deux pas, y₂ = 0,81 à t = 0,2.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Calculus Volume 2, 4.2 Direction Fields and Numerical Methods',
            url: 'https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods'
          },
          {
            title: 'OpenStax — Calculus Volume 2, 4.4 The Logistic Equation',
            url: 'https://openstax.org/books/calculus-volume-2/pages/4-4-the-logistic-equation'
          },
          {
            title: 'MIT OpenCourseWare — Differential Equations, Unit I: First Order Differential Equations',
            url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/'
          }
        ]
      }
    },
    {
      id: 'equations-lineaires-second-ordre',
      title: 'Équations linéaires du second ordre',
      field: 'Mathématiques · EDO linéaires · Équation caractéristique',
      summary: 'Résoudre les équations linéaires homogènes à coefficients constants, distinguer les cas de racines réelles distinctes, doubles ou complexes, puis traiter certains seconds membres simples.',
      lesson: {
        sections: [
          'Une équation linéaire du second ordre à coefficients constants s’écrit ay″ + by′ + cy = g(t), avec a non nul et a, b, c constants. Elle est homogène lorsque g(t) = 0 et non homogène dans le cas contraire. Pour l’équation homogène, le principe de superposition affirme qu’une combinaison linéaire de solutions est encore une solution. La solution générale nécessite deux solutions linéairement indépendantes, ce qui reflète l’ordre 2 de l’équation.',
          'Pour une équation homogène à coefficients constants, on cherche une solution de la forme y = e^(rt). En substituant, on obtient l’équation caractéristique ar² + br + c = 0. Si elle possède deux racines réelles distinctes r₁ et r₂, la solution générale est y = C₁e^(r₁t) + C₂e^(r₂t). Si la racine réelle r est double, la solution générale devient y = (C₁ + C₂t)e^(rt). Si les racines sont α ± iβ, avec β non nul, une base réelle de solutions est e^(αt)cos(βt) et e^(αt)sin(βt).',
          'Les conditions initiales déterminent les constantes C₁ et C₂. On calcule d’abord y′, puis on remplace t par la valeur initiale dans y et y′. Cela donne un système de deux équations algébriques. Il faut vérifier que les deux fonctions fondamentales sont indépendantes ; dans le cas des racines distinctes ou complexes conjuguées, cette indépendance est garantie par les formes usuelles présentées.',
          'Pour une équation non homogène, la solution générale s’écrit y = y_h + y_p, où y_h est la solution générale de l’équation homogène associée et y_p une solution particulière de l’équation complète. Lorsque g(t) est une combinaison de polynômes, d’exponentielles ou de fonctions sinusoïdales, la méthode des coefficients indéterminés consiste à proposer une forme adaptée pour y_p, puis à déterminer ses coefficients par substitution. Si la forme proposée recoupe une solution homogène, il faut la multiplier par une puissance suffisante de t afin d’obtenir une forme indépendante.',
          'La méthode des coefficients indéterminés ne s’applique pas à un second membre arbitraire. La variation des constantes fournit une méthode plus générale pour les équations linéaires, sous des hypothèses de régularité. Dans tous les cas, on contrôle la solution en la substituant dans l’équation non homogène, puis on applique les conditions initiales ou aux limites.'
        ],
        formula: {
          label: 'ÉQUATION CARACTÉRISTIQUE',
          text: 'ar² + br + c = 0'
        },
        example: {
          statement: 'Résoudre y″ − 3y′ + 2y = 0 avec y(0) = 1 et y′(0) = 0.',
          calculation: 'L’équation caractéristique est r² − 3r + 2 = 0, soit (r − 1)(r − 2) = 0. Les racines sont 1 et 2, donc y = C₁e^t + C₂e^(2t). La première condition donne C₁ + C₂ = 1. La dérivée vaut y′ = C₁e^t + 2C₂e^(2t), donc la seconde donne C₁ + 2C₂ = 0. On obtient C₂ = −1 et C₁ = 2.',
          answer: 'La solution est y(t) = 2e^t − e^(2t). Elle vérifie y(0) = 1 et y′(0) = 0.'
        },
        exercise: {
          question: 'Quelle forme prend la solution générale lorsque l’équation caractéristique possède une racine réelle double r ?',
          answer: 'y(t) = (C₁ + C₂t)e^(rt).'
        },
        exercises: [
          {
            question: 'Résoudre y″ − 5y′ + 6y = 0.',
            answer: 'L’équation caractéristique r² − 5r + 6 = 0 possède les racines 2 et 3. Donc y(t) = C₁e^(2t) + C₂e^(3t).'
          },
          {
            question: 'Quel type de solution obtient-on si les racines sont 1 ± 2i ?',
            answer: 'y(t) = e^t[C₁cos(2t) + C₂sin(2t)].'
          },
          {
            question: 'Quelle décomposition utilise-t-on pour résoudre une équation linéaire non homogène ?',
            answer: 'On écrit la solution générale comme la somme d’une solution générale de l’équation homogène associée et d’une solution particulière de l’équation complète : y = y_h + y_p.'
          }
        ],
        equationDetails: [
          {
            title: 'Équation caractéristique',
            formula: 'ar² + br + c = 0',
            explanation: 'Elle est obtenue en substituant y = e^(rt) dans l’équation homogène ay″ + by′ + cy = 0. Ses racines déterminent la forme de la solution générale.',
            parameters: 'a, b, c : coefficients constants avec a ≠ 0 ; r : racine caractéristique ; t : variable indépendante.',
            example: 'Pour y″ − 3y′ + 2y = 0, l’équation caractéristique est r² − 3r + 2 = 0.',
            result: 'Les racines sont r₁ = 1 et r₂ = 2, d’où y = C₁e^t + C₂e^(2t).'
          },
          {
            title: 'Racines complexes conjuguées',
            formula: 'r = α ± iβ,  y(t) = e^(αt)[C₁cos(βt) + C₂sin(βt)]',
            explanation: 'Les deux solutions exponentielles complexes conjuguées peuvent être recombinées en deux solutions réelles indépendantes. Le facteur exponentiel règle l’amplitude et les fonctions trigonométriques décrivent l’oscillation.',
            parameters: 'α : partie réelle ; β : partie imaginaire positive ; C₁, C₂ : constantes réelles.',
            example: 'Pour y″ + 2y′ + 5y = 0, les racines sont −1 ± 2i.',
            result: 'y(t) = e^(−t)[C₁cos(2t) + C₂sin(2t)].'
          },
          {
            title: 'Superposition pour une équation non homogène',
            formula: 'y = y_h + y_p',
            explanation: 'La différence entre deux solutions de la même équation non homogène satisfait l’équation homogène associée. Toute solution s’obtient donc en ajoutant une solution particulière à la famille homogène.',
            parameters: 'y_h : solution générale de l’équation homogène associée ; y_p : une solution particulière de l’équation complète.',
            example: 'Pour y″ − y = 1, une solution particulière constante est y_p = −1.',
            result: 'La solution générale est y(t) = C₁e^t + C₂e^(−t) − 1.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Calculus Volume 3, 7.1 Second-Order Linear Equations',
            url: 'https://openstax.org/books/calculus-volume-3/pages/7-1-second-order-linear-equations'
          },
          {
            title: 'OpenStax — Calculus Volume 3, Chapter 7 Key Concepts',
            url: 'https://openstax.org/books/calculus-volume-3/pages/7-key-concepts'
          },
          {
            title: 'MIT OpenCourseWare — 18.03SC Differential Equations, Unit II: Second Order Constant Coefficient Linear Equations',
            url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/'
          }
        ]
      }
    },
    {
      id: 'oscillateurs-et-applications-physiques',
      title: 'Oscillateurs et applications physiques',
      field: 'Physique mathématique · Oscillations libres, amorties et forcées',
      summary: 'Relier les EDO du second ordre à la mécanique et aux circuits RLC, distinguer oscillations libres, amortissement, excitation extérieure et résonance.',
      lesson: {
        sections: [
          'La deuxième loi de Newton permet de construire des équations différentielles du mouvement. Pour une masse m attachée à un ressort idéal de raideur k, si x mesure l’écart à la position d’équilibre et si les frottements sont négligés, la force de rappel vaut −kx. L’équation du mouvement est alors mx″ + kx = 0. La solution est sinusoïdale : le système oscille autour de l’équilibre avec une pulsation propre ω₀ = √(k/m). Cette fréquence caractérise le modèle idéal non amorti.',
          'Un amortissement visqueux linéaire ajoute une force opposée à la vitesse, modélisée par −cx′ avec c positif. L’équation du mouvement est alors mx″ + cx′ + kx = 0. Le discriminant du polynôme caractéristique distingue trois régimes : sous-amorti lorsque c² < 4mk, critique lorsque c² = 4mk, et sur-amorti lorsque c² > 4mk. Dans le régime sous-amorti, le mouvement oscille avec une amplitude décroissante ; dans les deux autres régimes, le retour à l’équilibre ne présente pas d’oscillation libre.',
          'Une force extérieure F(t) conduit à mx″ + cx′ + kx = F(t). La réponse combine un régime transitoire, associé à l’équation homogène, et une réponse forcée liée à l’excitation. Pour une excitation sinusoïdale, le régime permanent dépend de la fréquence d’excitation. L’amplitude peut devenir importante lorsque cette fréquence se rapproche d’une fréquence de résonance ; l’amortissement limite généralement le pic. La résonance réelle dépend des paramètres et ne doit pas être confondue systématiquement avec la pulsation propre non amortie.',
          'Les circuits RLC série conduisent à une équation de même structure. En notant q(t) la charge du condensateur, L l’inductance, R la résistance et C la capacité, la loi des mailles donne Lq″ + Rq′ + q/C = E(t). Le courant est i(t) = q′(t). Les termes représentent respectivement les effets inductif, résistif et capacitif. Cette analogie mathématique permet de transférer les méthodes de résolution des oscillateurs mécaniques aux circuits électriques, tout en respectant les unités et la signification physique de chaque paramètre.',
          'La modélisation physique exige de préciser les hypothèses : petites déformations pour un ressort linéaire, frottement proportionnel à la vitesse dans le modèle visqueux, composants idéalisés et paramètres constants dans le circuit RLC. Si ces hypothèses ne sont pas satisfaites, l’équation doit être adaptée. Une solution mathématique n’est interprétable physiquement qu’après vérification des conditions initiales, des unités et du domaine de validité du modèle.'
        ],
        formula: {
          label: 'OSCILLATEUR MÉCANIQUE AMORTI ET FORCÉ',
          text: 'mx″ + cx′ + kx = F(t)'
        },
        example: {
          statement: 'Un oscillateur non amorti possède une masse m = 2 kg et une raideur k = 18 N/m. Déterminer sa pulsation propre et sa période.',
          calculation: 'ω₀ = √(k/m) = √(18/2) = √9 = 3 rad/s. La période vaut T = 2π/ω₀ = 2π/3 s.',
          answer: 'La pulsation propre est ω₀ = 3 rad/s et la période vaut T = 2π/3 ≈ 2,09 s.'
        },
        exercise: {
          question: 'Quel terme de l’équation mx″ + cx′ + kx = F(t) représente l’amortissement visqueux ?',
          answer: 'Le terme cx′, qui modélise une force proportionnelle à la vitesse et opposée au mouvement.'
        },
        exercises: [
          {
            question: 'Pour m = 1 kg et k = 25 N/m, quelle est la pulsation propre de l’oscillateur non amorti ?',
            answer: 'ω₀ = √(k/m) = √25 = 5 rad/s.'
          },
          {
            question: 'Un oscillateur est-il sous-amorti si c² < 4mk ?',
            answer: 'Oui. Les racines caractéristiques sont complexes conjuguées et le mouvement libre est oscillant avec une amplitude décroissante.'
          },
          {
            question: 'Dans un circuit RLC série, quelle grandeur est la dérivée de la charge q(t) ?',
            answer: 'Le courant i(t) = q′(t).'
          }
        ],
        equationDetails: [
          {
            title: 'Oscillateur harmonique non amorti',
            formula: 'mx″ + kx = 0,  ω₀ = √(k/m)',
            explanation: 'La force de rappel du ressort est proportionnelle au déplacement et dirigée vers l’équilibre. Le mouvement idéal est périodique et conserve son énergie mécanique.',
            parameters: 'm : masse (kg) ; k : raideur (N/m) ; x : déplacement (m) ; ω₀ : pulsation propre (rad/s).',
            example: 'Pour m = 2 kg et k = 18 N/m, ω₀ = √(18/2).',
            result: 'ω₀ = 3 rad/s et T = 2π/3 s.'
          },
          {
            title: 'Oscillateur amorti',
            formula: 'mx″ + cx′ + kx = 0',
            explanation: 'Le coefficient c positif représente un amortissement visqueux linéaire. Le rapport entre c² et 4mk détermine le régime sous-amorti, critique ou sur-amorti.',
            parameters: 'm : masse (kg) ; c : coefficient d’amortissement (kg/s) ; k : raideur (N/m) ; x : déplacement (m).',
            example: 'Avec m = 1 kg, c = 2 kg/s et k = 10 N/m, c² = 4 et 4mk = 40.',
            result: 'Comme c² < 4mk, le régime est sous-amorti.'
          },
          {
            title: 'Circuit RLC série',
            formula: 'Lq″ + Rq′ + q/C = E(t),  i(t) = q′(t)',
            explanation: 'La loi des mailles conduit à une EDO du second ordre pour la charge. La résistance dissipe de l’énergie, l’inductance s’oppose aux variations du courant et le condensateur stocke une énergie électrique.',
            parameters: 'L : inductance (H) ; R : résistance (Ω) ; C : capacité (F) ; q : charge (C) ; i : courant (A) ; E(t) : tension imposée (V).',
            example: 'Dans un circuit libre sans source, E(t) = 0 et l’équation devient Lq″ + Rq′ + q/C = 0.',
            result: 'Le comportement dépend de l’amortissement électrique déterminé par R, L et C.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Calculus Volume 3, 7.3 Applications',
            url: 'https://openstax.org/books/calculus-volume-3/pages/7-3-applications'
          },
          {
            title: 'OpenStax — University Physics Volume 1, Simple Harmonic Motion',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion'
          },
          {
            title: 'MIT OpenCourseWare — 18.03SC Differential Equations, Second Order Constant Coefficient Linear Equations',
            url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/'
          }
        ]
      }
    },
    {
      id: 'systemes-differentiels-et-laplace',
      title: 'Systèmes différentiels et transformée de Laplace',
      field: 'Mathématiques avancées · Systèmes linéaires · Matrices · Transformée de Laplace',
      summary: 'Écrire une EDO d’ordre supérieur comme un système du premier ordre, étudier les valeurs propres et les portraits de phase, puis utiliser la transformée de Laplace pour traiter des problèmes à conditions initiales.',
      lesson: {
        sections: [
          'Un système différentiel rassemble plusieurs fonctions inconnues couplées. Un système linéaire autonome s’écrit X′(t) = AX(t), où X est un vecteur de fonctions et A une matrice constante. Les solutions dépendent des valeurs propres et des vecteurs propres de A. Lorsque la matrice est diagonalisable, les modes propres permettent de construire la solution à partir d’exponentielles. Les valeurs propres complexes produisent des composantes oscillantes, tandis que leur partie réelle détermine croissance ou décroissance.',
          'Une EDO scalaire d’ordre n peut être transformée en système du premier ordre en introduisant de nouvelles variables représentant la fonction et ses dérivées successives. Pour une EDO du second ordre, on pose x₁ = y et x₂ = y′ ; le système devient x₁′ = x₂ et x₂′ est obtenu à partir de l’équation initiale. Cette écriture permet d’utiliser les outils matriciels et de représenter le mouvement dans un espace de phase.',
          'Les points d’équilibre d’un système autonome satisfont F(X*) = 0. Pour un système linéaire X′ = AX, l’origine est un équilibre. La nature locale des trajectoires est reliée aux valeurs propres : des parties réelles négatives indiquent une décroissance des modes, des parties réelles positives une croissance, et des parties réelles nulles demandent une analyse plus fine. Pour un système non linéaire, la linéarisation autour d’un équilibre utilise la matrice jacobienne ; elle donne une information locale, mais ne décrit pas nécessairement le comportement global.',
          'La transformée de Laplace associe à une fonction temporelle f(t), définie pour t positif, une fonction F(s) = ∫₀∞ e^(−st)f(t)dt lorsque l’intégrale converge. Elle transforme les dérivées en expressions algébriques faisant intervenir les valeurs initiales : L{y′} = sY(s) − y(0) et L{y″} = s²Y(s) − sy(0) − y′(0). Cette propriété est particulièrement utile pour résoudre des EDO linéaires à coefficients constants avec conditions initiales et des excitations par morceaux.',
          'Pour résoudre un problème par Laplace, on transforme les deux membres, on remplace les transformées des dérivées en intégrant les conditions initiales, puis on isole Y(s). On décompose généralement la fraction rationnelle en éléments simples et on applique la transformée inverse. Il faut vérifier la région de convergence et les hypothèses de croissance des fonctions. La méthode n’est pas un raccourci universel : elle est surtout efficace pour les problèmes linéaires adaptés à cette transformation.'
        ],
        formula: {
          label: 'TRANSFORMÉE DE LAPLACE D’UNE DÉRIVÉE',
          text: 'L{y′}(s) = sY(s) − y(0)'
        },
        example: {
          statement: 'Résoudre y′ + 2y = 0 avec y(0) = 3 par transformée de Laplace.',
          calculation: 'En notant Y(s) = L{y}(s), on obtient sY(s) − 3 + 2Y(s) = 0. Donc (s + 2)Y(s) = 3, puis Y(s) = 3/(s + 2). La transformée inverse donne y(t) = 3e^(−2t).',
          answer: 'La solution est y(t) = 3e^(−2t), qui vérifie l’équation différentielle et la condition initiale.'
        },
        exercise: {
          question: 'Quelle information initiale apparaît dans la transformée de Laplace de y′ ?',
          answer: 'La valeur initiale y(0), selon L{y′}(s) = sY(s) − y(0).'
        },
        exercises: [
          {
            question: 'Comment transforme-t-on une EDO du second ordre en système du premier ordre ?',
            answer: 'On introduit une variable pour y et une autre pour y′, puis on écrit leurs dérivées à partir de l’équation initiale.'
          },
          {
            question: 'Quelle est la transformée de Laplace de la constante 1 pour Re(s) > 0 ?',
            answer: 'L{1}(s) = 1/s.'
          },
          {
            question: 'Résoudre X′ = AX signifie-t-il résoudre une seule équation scalaire ?',
            answer: 'Non. Il faut résoudre un système couplé ; la matrice A et ses valeurs propres structurent les modes de la solution.'
          }
        ],
        equationDetails: [
          {
            title: 'Système linéaire autonome',
            formula: 'X′(t) = AX(t)',
            explanation: 'La matrice A couple les composantes du vecteur d’état. Les valeurs propres de A déterminent les modes exponentiels et contribuent à la classification de la stabilité de l’équilibre.',
            parameters: 'X(t) : vecteur d’état ; A : matrice constante ; X′ : dérivée composante par composante.',
            example: 'Pour A = [[−1, 0], [0, −2]], les deux composantes vérifient x₁′ = −x₁ et x₂′ = −2x₂.',
            result: 'x₁(t) = C₁e^(−t) et x₂(t) = C₂e^(−2t) ; les deux modes décroissent.'
          },
          {
            title: 'Transformée de Laplace',
            formula: 'F(s) = L{f(t)} = ∫₀∞ e^(−st)f(t)dt',
            explanation: 'La transformation est définie lorsque l’intégrale impropre converge. Elle convertit certaines opérations différentielles en opérations algébriques dans le domaine de s.',
            parameters: 't : variable temporelle ; s : variable complexe ; f(t) : fonction originale ; F(s) : transformée de Laplace.',
            example: 'Pour f(t) = 1 et Re(s) > 0, F(s) = ∫₀∞e^(−st)dt = 1/s.',
            result: 'L{1}(s) = 1/s pour Re(s) > 0.'
          },
          {
            title: 'Transformée de Laplace de la dérivée',
            formula: 'L{y′}(s) = sY(s) − y(0)',
            explanation: 'La valeur initiale intervient explicitement. C’est ce qui rend la méthode adaptée aux problèmes à valeur initiale.',
            parameters: 'Y(s) : transformée de y(t) ; y(0) : valeur initiale ; s : variable de Laplace.',
            example: 'Pour y′ + 2y = 0 et y(0) = 3 : sY − 3 + 2Y = 0.',
            result: 'Y(s) = 3/(s + 2), donc y(t) = 3e^(−2t).'
          }
        ],
        sources: [
          {
            title: 'MIT OpenCourseWare — 18.03 Differential Equations, Notes and Exercises',
            url: 'https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/readings/notes_exe/'
          },
          {
            title: 'MIT OpenCourseWare — 18.03 Differential Equations, Readings',
            url: 'https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/readings/'
          },
          {
            title: 'University of Oxford — A1: Differential Equations 1 (2024–25)',
            url: 'https://courses.maths.ox.ac.uk/course/view.php?id=5511'
          }
        ]
      }
    }
  ]
}

]

