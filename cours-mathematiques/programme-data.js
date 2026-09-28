window.courseCatalog = [
  {
    id: 'premiere',
    title: 'Première · spécialité mathématiques',
    note: 'Programme en vigueur à la rentrée 2026-2027.',
    source: 'https://www.education.gouv.fr/bo/2026/Hebdo14/MENE2602917A',
    chapters: [
      { id: 'premiere-suites', title: 'Suites numériques', field: 'Algèbre', summary: 'Modéliser une évolution à partir de termes successifs ; reconnaître les suites arithmétiques et géométriques, calculer des termes et des sommes.', lesson: { sections: ['Une suite est une liste ordonnée de nombres notés u₀, u₁, u₂, ... ou u₁, u₂, ... selon l’indice de départ. Son indice n représente souvent le temps ou le rang d’une étape.', 'Une suite explicite donne directement uₙ en fonction de n. Une suite récurrente donne un premier terme et une règle pour calculer le suivant, par exemple uₙ₊₁ = uₙ + 4.'], formula: { label: 'TERMES ET SOMMES', text: 'Arithmétique : uₙ = u₀ + nr ; Sₙ = (n + 1)(u₀ + uₙ)/2  |  Géométrique : vₙ = v₀qⁿ' }, example: { statement: 'Une suite arithmétique commence à u₀ = 4 et augmente de 3 à chaque rang. Calculer u₅ et la somme de u₀ à u₅.', calculation: 'u₅ = 4 + 5 × 3 = 19. Il y a 6 termes, donc S = 6 × (4 + 19) / 2.', answer: 'u₅ = 19 et S = 69.' }, exercise: { question: 'Une suite géométrique vérifie v₀ = 80 et vₙ₊₁ = 0,5vₙ. Calculer v₃.', answer: 'v₃ = 80 × 0,5³ = 80 × 0,125 = 10.' } } },
      { id: 'second-degre', title: 'Équations et inéquations du second degré', field: 'Algèbre', page: 'index.html', summary: 'Forme développée, discriminant, racines, factorisation, signe et lien entre le trinôme et sa parabole.' },
      { id: 'premiere-derivee-locale', title: 'Dérivation : point de vue local', field: 'Analyse', summary: 'Taux de variation, nombre dérivé, tangente et approximation affine au voisinage d’un point.', lesson: { sections: ['Le taux de variation entre a et a + h est le quotient [f(a+h) − f(a)]/h. Lorsque h se rapproche de 0, si ce quotient tend vers un réel, sa limite est le nombre dérivé f′(a).', 'Géométriquement, f′(a) est la pente de la tangente à la courbe au point d’abscisse a. Il permet aussi d’approcher f(a+h) lorsque h est petit.'], formula: { label: 'NOMBRE DÉRIVÉ ET APPROXIMATION LOCALE', text: 'f′(a) = limₕ→₀ [f(a+h) − f(a)]/h  |  f(a+h) ≈ f(a) + hf′(a)' }, example: { statement: 'Pour f(x) = x², calculer f′(3) puis l’équation de la tangente en x = 3.', calculation: 'f′(x) = 2x, donc f′(3) = 6 et f(3) = 9. La tangente est y = 6(x − 3) + 9.', answer: 'La pente vaut 6 et la tangente a pour équation y = 6x − 9.' }, exercise: { question: 'Pour f(x) = x² + 1, donner la pente de la tangente en x = 2.', answer: 'f′(x) = 2x, donc f′(2) = 4.' } } },
      { id: 'premiere-derivee-variations', title: 'Dérivation : applications et variations', field: 'Analyse', summary: 'Dérivées usuelles, opérations, signe de la dérivée, variations, extremums et optimisation.', lesson: { sections: ['Le signe de f′ indique les variations de f : une dérivée positive correspond à une fonction croissante, une dérivée négative à une fonction décroissante.', 'Si le signe de f′ passe de − à +, la fonction atteint un minimum local. S’il passe de + à −, elle atteint un maximum local. Une dérivée nulle seule ne suffit pas à conclure.'], formula: { label: 'LIEN ENTRE DÉRIVÉE ET VARIATIONS', text: 'f′ > 0 ⇒ f croît  |  f′ < 0 ⇒ f décroît' }, example: { statement: 'Étudier les variations de f(x) = x² − 4x + 1.', calculation: 'f′(x) = 2x − 4 = 2(x − 2). Elle est négative avant 2, nulle en 2 et positive après 2. f(2) = −3.', answer: 'f décroît puis croît ; son minimum vaut −3 en x = 2.' }, exercise: { question: 'Étudier les variations de g(x) = x² − 6x + 8.', answer: 'g′(x) = 2(x − 3) : g décroît jusqu’à 3 puis croît. Son minimum est g(3) = −1.' } } },
      { id: 'premiere-exponentielle', title: 'Fonction exponentielle', field: 'Analyse', summary: 'Définition et propriétés de la fonction exponentielle, nombre e, croissance et dérivée.', lesson: { sections: ['La fonction exponentielle, notée exp, est l’unique fonction dérivable qui vérifie (eˣ)′ = eˣ et e⁰ = 1. On note e = e¹, avec e environ égal à 2,718.', 'Elle est strictement positive et strictement croissante. Elle transforme une somme en produit, ce qui la rend utile pour modéliser une croissance proportionnelle.'], formula: { label: 'PROPRIÉTÉS ET DÉRIVÉE', text: 'eᵃ⁺ᵇ = eᵃeᵇ  |  e⁻ᵃ = 1/eᵃ  |  (eˣ)′ = eˣ' }, example: { statement: 'Étudier les variations de f(x) = eˣ − 2x.', calculation: 'f′(x) = eˣ − 2. Il existe un unique nombre α tel que e^α = 2. La dérivée est négative avant α, puis positive après.', answer: 'f décroît jusqu’à α, puis croît. Elle atteint son minimum en α.' }, exercise: { question: 'Dériver g(x) = 3e²ˣ.', answer: 'La dérivée de e²ˣ est 2e²ˣ. Donc g′(x) = 3 × 2e²ˣ = 6e²ˣ.' } } },
      { id: 'premiere-trigonometrie', title: 'Trigonométrie', field: 'Analyse', summary: 'Cercle trigonométrique, radian, cosinus, sinus et valeurs remarquables.', lesson: { sections: ['Sur le cercle trigonométrique de rayon 1, l’angle est mesuré en radians. À l’angle x correspond le point de coordonnées (cos x ; sin x). Le sens positif est le sens inverse des aiguilles d’une montre.', 'Un tour complet mesure 2π radians et un demi-tour π. Les coordonnées du cercle donnent immédiatement les valeurs de cos et sin pour les angles usuels.'], formula: { label: 'IDENTITÉ FONDAMENTALE', text: 'cos²(x) + sin²(x) = 1  |  180° = π radians' }, example: { statement: 'Résoudre cos(x) = 1/2 sur l’intervalle [0 ; 2π].', calculation: 'Sur le cercle, l’abscisse vaut 1/2 aux angles π/3 et 5π/3.', answer: 'Les solutions sont x = π/3 et x = 5π/3.' }, exercise: { question: 'Donner les valeurs de cos(π/6) et sin(π/6).', answer: 'Sur le cercle trigonométrique, cos(π/6) = √3/2 et sin(π/6) = 1/2.' } } },
      { id: 'premiere-produit-scalaire', title: 'Calcul vectoriel et produit scalaire', field: 'Géométrie', summary: 'Projection orthogonale, angle entre vecteurs, bilinéarité et calculs dans une base orthonormée.', lesson: { sections: ['Le produit scalaire de deux vecteurs mesure leur alignement. Il est positif si l’angle est aigu, nul s’ils sont perpendiculaires, et négatif si l’angle est obtus.', 'Dans un repère orthonormé, on peut calculer le produit scalaire avec les coordonnées. Cette méthode est souvent plus rapide que de calculer une longueur ou un angle.'], formula: { label: 'DEUX FORMULES À CONNAÎTRE', text: 'u · v = ||u|| ||v|| cos(θ)  |  (x ; y) · (x′ ; y′) = xx′ + yy′' }, example: { statement: 'Les vecteurs u = (3 ; 1) et v = (2 ; −6) sont-ils perpendiculaires ?', calculation: 'u · v = 3 × 2 + 1 × (−6) = 6 − 6 = 0.', answer: 'Le produit scalaire est nul : les deux vecteurs sont orthogonaux.' }, exercise: { question: 'Calculer le produit scalaire de a = (1 ; 4) et b = (2 ; 3).', answer: 'a · b = 1 × 2 + 4 × 3 = 14.' } } },
      { id: 'premiere-geometrie-reperee', title: 'Géométrie repérée', field: 'Géométrie', summary: 'Vecteur normal à une droite, équation de cercle et projection orthogonale.', lesson: { sections: ['Une équation cartésienne de droite s’écrit ax + by + c = 0. Le vecteur n = (a ; b) est normal à la droite : il lui est perpendiculaire.', 'Un cercle de centre Ω(h ; k) et de rayon r regroupe les points M(x ; y) dont la distance à Ω vaut r. La formule de distance donne directement son équation.'], formula: { label: 'ÉQUATIONS REPÉRÉES', text: 'Droite : ax + by + c = 0  |  Cercle : (x − h)² + (y − k)² = r²' }, example: { statement: 'Écrire l’équation du cercle de centre Ω(1 ; −2) et de rayon 3.', calculation: 'On remplace h par 1, k par −2 et r par 3 dans la formule du cercle.', answer: '(x − 1)² + (y + 2)² = 9.' }, exercise: { question: 'Donner un vecteur normal à la droite 2x − 3y + 5 = 0.', answer: 'Les coefficients de x et y donnent le vecteur normal n = (2 ; −3).' } } },
      { id: 'premiere-probabilites-conditionnelles', title: 'Probabilités conditionnelles et indépendance', field: 'Probabilités', summary: 'Conditionnement, indépendance, formule des probabilités totales et répétition d’épreuves.', lesson: { sections: ['La probabilité de B sachant A se note P_A(B). Elle décrit la probabilité de B lorsqu’on sait déjà que A est réalisé. Dans un arbre, on multiplie les probabilités le long d’une branche.', 'Deux événements A et B sont indépendants si le fait de connaître la réalisation de l’un ne change pas la probabilité de l’autre. Un arbre pondéré aide à organiser les cas et à totaliser les probabilités.'], formula: { label: 'CONDITIONNEMENT, INDÉPENDANCE ET TOTALES', text: 'P_A(B) = P(A ∩ B) / P(A)  |  Indépendance : P(A ∩ B) = P(A)P(B)  |  P(B) = P(A)P_A(B) + P(non A)P_non A(B)' }, example: { statement: 'Une usine produit 60 % des pièces sur A avec 2 % de défauts, et le reste sur B avec 5 % de défauts. Quelle est la proportion totale de défauts ?', calculation: 'P(D) = 0,60 × 0,02 + 0,40 × 0,05 = 0,012 + 0,020.', answer: '3,2 % des pièces sont défectueuses.' }, exercise: { question: 'Avec ces données, calculer la probabilité qu’une pièce défectueuse vienne de A.', answer: 'P(A sachant D) = P(A ∩ D)/P(D) = 0,012/0,032 = 0,375, soit 37,5 %.' } } },
      { id: 'premiere-variables-aleatoires', title: 'Variables aléatoires réelles', field: 'Probabilités', summary: 'Loi, espérance, variance, écart-type et interprétation de ces indicateurs.', lesson: { sections: ['Une variable aléatoire associe un nombre à chaque issue d’une expérience. Sa loi donne les valeurs possibles et la probabilité de chacune ; la somme des probabilités vaut 1.', 'L’espérance représente une moyenne théorique à long terme. La variance et l’écart-type mesurent la dispersion autour de cette moyenne.'], formula: { label: 'ESPÉRANCE ET VARIANCE', text: 'E(X) = Σ xᵢpᵢ  |  V(X) = Σ (xᵢ − E(X))²pᵢ  |  σ(X) = √V(X)' }, example: { statement: 'On lance un dé équilibré à six faces. Calculer son espérance.', calculation: 'Chaque valeur de 1 à 6 a la probabilité 1/6 : E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6.', answer: 'E(X) = 3,5.' }, exercise: { question: 'Une variable vaut 0 avec probabilité 0,7 et 10 avec probabilité 0,3. Calculer son espérance.', answer: 'E(X) = 0 × 0,7 + 10 × 0,3 = 3.' } } },
      { id: 'premiere-echantillonnage', title: 'Échantillonnage et simulation', field: 'Probabilités', summary: 'Simuler une expérience, étudier une fréquence et interpréter la fluctuation d’échantillonnage.', lesson: { sections: ['Une fréquence observée dans un échantillon varie d’un échantillon à l’autre, même si la probabilité théorique p reste la même. Plus la taille n de l’échantillon augmente, plus la fréquence tend à se rapprocher de p.', 'Une simulation informatique répète l’expérience un grand nombre de fois. Elle aide à observer cette fluctuation, mais ne remplace pas une justification mathématique.'], formula: { label: 'ORDRE DE GRANDEUR DE LA FLUCTUATION', text: 'Écart-type de la fréquence : σ = √(p(1 − p) / n)' }, example: { statement: 'Une pièce équilibrée est lancée 100 fois. Quelle est l’échelle de variation attendue de la fréquence de piles ?', calculation: 'p = 0,5 et n = 100, donc σ = √(0,5 × 0,5 / 100) = 0,05. Deux écarts-types valent environ 0,10.', answer: 'Une fréquence proche de 0,5, souvent entre 0,4 et 0,6, est cohérente avec ce modèle.' }, exercise: { question: 'Pour p = 0,4 et n = 100, calculer l’écart-type de la fréquence.', answer: 'σ = √(0,4 × 0,6 / 100) ≈ 0,049.' } } }
    ]
  },
  {
    id: 'terminale',
    title: 'Terminale · spécialité mathématiques',
    note: 'Programme 2019 en vigueur en 2026-2027 ; nouveau programme à partir de 2027-2028.',
    source: 'https://www.education.gouv.fr/bo/19/Special8/MENE1921246A.htm',
    chapters: [
      { id: 'terminale-denombrement', title: 'Combinatoire et dénombrement', field: 'Algèbre et géométrie', summary: 'Principes additif et multiplicatif, arrangements, combinaisons, factorielle et triangle de Pascal.', lesson: { sections: ['Le principe additif sert à compter des choix incompatibles : on additionne leurs nombres de possibilités. Le principe multiplicatif sert aux choix successifs : on multiplie les nombres de possibilités à chaque étape.', 'Choisir k objets parmi n sans tenir compte de l’ordre se compte avec un coefficient binomial. Ne confonds pas ce choix avec un arrangement, où l’ordre compte.'], formula: { label: 'COMBINAISONS', text: 'C(n, k) = n! / (k!(n − k)!)' }, example: { statement: 'Combien de comités de 3 personnes peut-on former avec 8 candidats ?', calculation: 'L’ordre des personnes dans le comité ne compte. On calcule C(8, 3) = 8 × 7 × 6 / (3 × 2 × 1).', answer: 'Il existe 56 comités.' }, exercise: { question: 'Combien de paires distinctes peut-on choisir parmi 10 personnes ?', answer: 'L’ordre ne compte : C(10, 2) = 10 × 9 / 2 = 45 paires.' } } },
      { id: 'terminale-vecteurs-espace', title: 'Vecteurs, droites et plans de l’espace', field: 'Algèbre et géométrie', summary: 'Combinaisons linéaires, bases, repères et positions relatives dans l’espace.', lesson: { sections: ['Dans l’espace, un vecteur se décrit par trois coordonnées. Une droite est définie par un point et un vecteur directeur ; un plan peut être décrit par un point et deux directions non colinéaires.', 'Les combinaisons linéaires permettent de tester l’alignement ou la coplanarité et de comparer les directions.'], formula: { label: 'DROITE PARAMÉTRIQUE', text: 'M = A + t u, avec t ∈ ℝ' }, example: { statement: 'Écrire une représentation paramétrique de la droite passant par A(1 ; 0 ; 2) et dirigée par u = (2 ; −1 ; 3).', calculation: 'On ajoute à A un multiple t du vecteur directeur : (x ; y ; z) = (1 ; 0 ; 2) + t(2 ; −1 ; 3).', answer: 'x = 1 + 2t, y = −t, z = 2 + 3t, avec t réel.' }, exercise: { question: 'Donner un vecteur directeur de la droite x = 3 − t, y = 2 + 4t, z = 5t.', answer: 'Les coefficients de t donnent le vecteur directeur (−1 ; 4 ; 5).' } } },
      { id: 'terminale-orthogonalite', title: 'Orthogonalité et distances dans l’espace', field: 'Algèbre et géométrie', summary: 'Produit scalaire, vecteur normal, projection orthogonale et distance.', lesson: { sections: ['Un vecteur normal à un plan est perpendiculaire à toutes les directions de ce plan. Il permet d’écrire l’équation cartésienne du plan et de vérifier si une droite lui est perpendiculaire.', 'La distance d’un point à un plan est la longueur du segment perpendiculaire allant du point au plan. La formule avec le vecteur normal évite de construire explicitement le projeté.'], formula: { label: 'DISTANCE D’UN POINT À UN PLAN', text: 'Pour ax + by + cz + d = 0 : dist(P, plan) = |axₚ + byₚ + czₚ + d| / √(a² + b² + c²)' }, example: { statement: 'Calculer la distance du point P(1 ; 0 ; 0) au plan 2x − y + 2z − 4 = 0.', calculation: 'Le numérateur vaut |2 − 4| = 2. La norme du vecteur normal (2 ; −1 ; 2) vaut √9 = 3.', answer: 'La distance est 2/3.' }, exercise: { question: 'Quel est un vecteur normal au plan 3x + 2y − z + 7 = 0 ?', answer: 'Les coefficients de x, y et z forment un vecteur normal : (3 ; 2 ; −1).' } } },
      { id: 'terminale-equations-espace', title: 'Représentations paramétriques et équations cartésiennes', field: 'Algèbre et géométrie', summary: 'Équations de droites et de plans, intersections et résolution de systèmes.', lesson: { sections: ['Une représentation paramétrique décrit les coordonnées d’un point à l’aide d’un ou plusieurs paramètres. Une équation cartésienne décrit un ensemble de points par une relation entre x, y et z.', 'Pour trouver une intersection, on remplace les coordonnées paramétriques dans l’équation cartésienne. On obtient une équation à résoudre sur le paramètre.'], formula: { label: 'PLAN DE VECTEUR NORMAL n = (a ; b ; c)', text: 'ax + by + cz + d = 0' }, example: { statement: 'La droite x = t, y = 1, z = 2t rencontre-t-elle le plan x + y + z = 4 ?', calculation: 'On substitue les coordonnées de la droite dans le plan : t + 1 + 2t = 4, donc 3t = 3 et t = 1.', answer: 'Oui. Le point d’intersection est (1 ; 1 ; 2).' }, exercise: { question: 'Le point (1 ; 2 ; 1) appartient-il au plan 2x − y + z = 1 ?', answer: 'On calcule 2 × 1 − 2 + 1 = 1 : le point appartient au plan.' } } },
      { id: 'terminale-suites', title: 'Suites : limites et récurrence', field: 'Analyse', summary: 'Récurrence, limites, opérations, théorème des gendarmes et convergence monotone.', lesson: { sections: ['Une preuve par récurrence comporte trois temps : vérifier la propriété au premier rang, montrer que sa validité au rang n entraîne celle au rang n + 1, puis conclure.', 'Pour prouver qu’une suite converge, on peut établir qu’elle est monotone et bornée. Une fois la convergence démontrée, si uₙ₊₁ = f(uₙ) et si f est continue, la limite L vérifie L = f(L).'], formula: { label: 'THÉORÈME DE CONVERGENCE MONOTONE', text: 'Suite croissante et majorée ⇒ convergente  |  Suite décroissante et minorée ⇒ convergente' }, example: { statement: 'On définit u₀ = 0 et uₙ₊₁ = (uₙ + 2)/2. Déterminer sa limite.', calculation: 'On montre par récurrence que 0 ≤ uₙ ≤ 2 et que uₙ₊₁ − uₙ = (2 − uₙ)/2 ≥ 0. La suite est croissante et majorée par 2, donc elle converge. Sa limite L vérifie L = (L + 2)/2.', answer: 'La limite est L = 2.' }, exercise: { question: 'La suite uₙ = 1 − (1/3)ⁿ est-elle convergente ?', answer: '(1/3)ⁿ tend vers 0 quand n tend vers l’infini. Donc uₙ tend vers 1.' } } },
      { id: 'limites-fonctions', title: 'Limites de fonctions', field: 'Analyse', page: 'limites.html', summary: 'Limites en un point et à l’infini, asymptotes, opérations et croissances comparées.' },
      { id: 'terminale-convexite', title: 'Compléments de dérivation et convexité', field: 'Analyse', summary: 'Dérivée de fonctions composées, dérivée seconde, convexité et points d’inflexion.', lesson: { sections: ['La dérivée seconde f′′ décrit la variation de la pente. Si f′′ est positive sur un intervalle, la dérivée f′ y croît et f est convexe ; si f′′ est négative, f est concave.', 'Un point d’inflexion est un point où la courbe change de convexité. Pour le repérer, on étudie le changement de signe de f′′, pas seulement son annulation.'], formula: { label: 'CONVEXITÉ', text: 'f′′ ≥ 0 ⇒ f convexe  |  f′′ ≤ 0 ⇒ f concave' }, example: { statement: 'Étudier la convexité de f(x) = x⁴.', calculation: 'f′(x) = 4x³ et f′′(x) = 12x², qui est positive ou nulle sur ℝ.', answer: 'La fonction x⁴ est convexe sur ℝ.' }, exercise: { question: 'La fonction x³ a-t-elle un point d’inflexion ?', answer: 'Sa dérivée seconde est 6x, qui change de signe en 0 ; le point d’abscisse 0 est un point d’inflexion.' } } },
      { id: 'terminale-continuite', title: 'Continuité', field: 'Analyse', summary: 'Continuité, théorème des valeurs intermédiaires, dichotomie et suites récurrentes.', lesson: { sections: ['Une fonction continue ne présente pas de saut sur son intervalle. Le théorème des valeurs intermédiaires garantit qu’elle prend toutes les valeurs comprises entre deux valeurs déjà atteintes.', 'Pour prouver qu’une équation f(x) = k admet une solution, encadre k entre f(a) et f(b). Si f est en plus strictement monotone, cette solution est unique.'], formula: { label: 'THÉORÈME DES VALEURS INTERMÉDIAIRES', text: 'Si f est continue sur [a ; b], toute valeur entre f(a) et f(b) est atteinte.' }, example: { statement: 'Montrer que l’équation x³ + x − 1 = 0 admet une solution dans [0 ; 1].', calculation: 'La fonction f(x) = x³ + x − 1 est continue. f(0) = −1 et f(1) = 1 : zéro est entre ces deux valeurs. De plus, f′(x) = 3x² + 1 > 0, donc f est strictement croissante.', answer: 'L’équation admet une unique solution dans [0 ; 1].' }, exercise: { question: 'Une fonction continue vérifie f(2) = −3 et f(5) = 4. Que peut-on conclure sur f(x) = 0 ?', answer: 'Le nombre 0 est compris entre −3 et 4. Le théorème des valeurs intermédiaires garantit au moins une solution dans [2 ; 5].' } } },
      { id: 'terminale-logarithme', title: 'Fonction logarithme népérien', field: 'Analyse', summary: 'Fonction réciproque de l’exponentielle, propriétés, dérivée et limites.', lesson: { sections: ['Le logarithme népérien ln est la fonction réciproque de l’exponentielle. Il est défini uniquement pour x > 0 et vérifie ln(eˣ) = x ainsi que e^(ln x) = x.', 'Le logarithme transforme les produits en sommes. Sa dérivée 1/x permet d’étudier ses variations et de résoudre des équations où l’inconnue apparaît dans un logarithme.'], formula: { label: 'PROPRIÉTÉS À CONNAÎTRE', text: 'ln(ab) = ln(a) + ln(b)  |  ln(a/b) = ln(a) − ln(b)  |  (ln x)′ = 1/x' }, example: { statement: 'Résoudre ln(x) = 2.', calculation: 'On applique l’exponentielle aux deux membres. Comme exp et ln sont réciproques, x = e².', answer: 'La solution est x = e², qui est bien strictement positive.' }, exercise: { question: 'Calculer ln(√e).', answer: '√e = e^(1/2), donc ln(√e) = 1/2.' } } },
      { id: 'terminale-sinus-cosinus', title: 'Fonctions sinus et cosinus', field: 'Analyse', summary: 'Dérivées, variations, représentations graphiques et équations trigonométriques.', lesson: { sections: ['Les fonctions sinus et cosinus sont périodiques de période 2π. Leurs valeurs restent comprises entre −1 et 1, et leurs courbes se répètent à intervalles réguliers.', 'Leurs dérivées sont liées : la dérivée de sin est cos et celle de cos est −sin. Les variations se déduisent du signe de ces dérivées sur les intervalles étudiés.'], formula: { label: 'DÉRIVÉES ET IDENTITÉ', text: '(sin x)′ = cos x  |  (cos x)′ = −sin x  |  sin²x + cos²x = 1' }, example: { statement: 'Résoudre sin(x) = √3/2 sur [−π ; π].', calculation: 'L’angle de référence est π/3. Sur le cercle trigonométrique, le sinus est positif dans les premier et deuxième quadrants.', answer: 'Les solutions sont π/3 et 2π/3.' }, exercise: { question: 'Résoudre cos(x) = 0 sur [0 ; 2π].', answer: 'Le cosinus est nul aux deux intersections du cercle avec l’axe vertical : x = π/2 et x = 3π/2.' } } },
      { id: 'terminale-primitives', title: 'Primitives et équations différentielles', field: 'Analyse', summary: 'Primitives usuelles et résolution d’équations différentielles linéaires simples.', lesson: { sections: ['Une primitive F de f sur un intervalle vérifie F′ = f. Si F est une primitive, toutes les autres s’obtiennent en ajoutant une constante.', 'L’équation y′ = ay décrit une grandeur dont le taux de variation est proportionnel à sa valeur. Sa solution générale est une exponentielle ; une condition initiale détermine la constante.'], formula: { label: 'ÉQUATIONS DIFFÉRENTIELLES USUELLES', text: 'y′ = ay  ⇒  y = Ceᵃˣ  |  (eᵃˣ)′ = aeᵃˣ' }, example: { statement: 'Résoudre y′ = 2y avec y(0) = 3.', calculation: 'La solution générale est y(x) = Ce²ˣ. La condition initiale donne y(0) = C = 3.', answer: 'y(x) = 3e²ˣ.' }, exercise: { question: 'Résoudre y′ = 4y avec y(0) = 1.', answer: 'La solution générale est Ce⁴ˣ. Comme y(0) = C = 1, la solution est y(x) = e⁴ˣ.' } } },
      { id: 'terminale-integrales', title: 'Calcul intégral', field: 'Analyse', summary: 'Intégrale, aire, relation de Chasles, valeur moyenne et intégration par parties.', lesson: { sections: ['L’intégrale de f entre a et b représente l’aire algébrique sous sa courbe. Si f est positive, cette intégrale correspond à l’aire géométrique.', 'Le théorème fondamental relie intégrale et primitive : pour trouver une intégrale, on cherche une primitive puis on calcule la différence de ses valeurs aux bornes.'], formula: { label: 'THÉORÈME FONDAMENTAL', text: 'Si F′ = f, alors ∫ₐᵇ f(x) dx = F(b) − F(a)' }, example: { statement: 'Calculer l’intégrale de x entre 0 et 2.', calculation: 'Une primitive de x est F(x) = x²/2. Donc F(2) − F(0) = 4/2 − 0.', answer: '∫₀² x dx = 2.' }, exercise: { question: 'Calculer ∫₀¹ (2x + 1) dx.', answer: 'Une primitive est x² + x. La différence entre 1 et 0 vaut 2.' } } },
      { id: 'terminale-binomiale', title: 'Schéma de Bernoulli et loi binomiale', field: 'Probabilités', summary: 'Répétitions indépendantes, loi binomiale, espérance et problèmes de seuil.', lesson: { sections: ['Une épreuve de Bernoulli a deux issues : succès, de probabilité p, ou échec, de probabilité 1 − p. On répète la même épreuve n fois de façon indépendante.', 'La variable X compte le nombre de succès. Elle suit une loi binomiale ; pour obtenir exactement k succès, on choisit les k positions des succès puis on multiplie les probabilités correspondantes.'], formula: { label: 'LOI BINOMIALE B(n ; p)', text: 'P(X = k) = C(n,k)pᵏ(1 − p)ⁿ⁻ᵏ  |  E(X) = np  |  V(X) = np(1 − p)' }, example: { statement: 'On lance trois fois une pièce équilibrée. Quelle est la probabilité d’obtenir exactement deux piles ?', calculation: 'Il y a C(3,2) façons de choisir les deux succès. Chaque suite a une probabilité (1/2)³.', answer: 'P(X = 2) = C(3,2)(1/2)³ = 3/8.' }, exercise: { question: 'Une épreuve de probabilité de succès 0,25 est répétée 4 fois. Quelle est la probabilité de n’obtenir aucun succès ?', answer: 'P(X = 0) = (1 − 0,25)⁴ = 0,75⁴ ≈ 0,316.' } } },
      { id: 'terminale-sommes-variables', title: 'Sommes de variables aléatoires', field: 'Probabilités', summary: 'Linéarité de l’espérance, variance et sommes de variables indépendantes.', lesson: { sections: ['L’espérance est linéaire : pour additionner les moyennes de plusieurs variables, l’indépendance n’est pas nécessaire.', 'En revanche, pour additionner les variances, il faut que les variables soient indépendantes. Cela permet notamment d’étudier la somme de plusieurs gains ou de plusieurs mesures aléatoires.'], formula: { label: 'SOMMES', text: 'E(X + Y) = E(X) + E(Y)  |  Si X et Y indépendantes : V(X + Y) = V(X) + V(Y)' }, example: { statement: 'Deux dés équilibrés indépendants sont lancés. Donner l’espérance et la variance de leur somme.', calculation: 'Chaque dé a une espérance 3,5 et une variance 35/12. Les dés étant indépendants, on additionne les espérances et les variances.', answer: 'E(X + Y) = 7 et V(X + Y) = 35/6.' }, exercise: { question: 'Deux variables indépendantes ont pour variances 2 et 5. Quelle est la variance de leur somme ?', answer: 'Par indépendance, V(X + Y) = 2 + 5 = 7.' } } },
      { id: 'terminale-grands-nombres', title: 'Concentration et loi des grands nombres', field: 'Probabilités', summary: 'Inégalités de concentration et interprétation de la loi des grands nombres.', lesson: { sections: ['La loi des grands nombres explique pourquoi la moyenne d’un grand échantillon se rapproche de l’espérance théorique. Elle donne un résultat de convergence, pas une garantie exacte sur chaque échantillon.', 'L’inégalité de Bienaymé-Tchebychev majore la probabilité qu’une variable s’écarte fortement de son espérance à partir de sa variance.'], formula: { label: 'INÉGALITÉ DE BIENAYMÉ-TCHEBYCHEV', text: 'P(|X − E(X)| ≥ a) ≤ V(X) / a²  pour a > 0' }, example: { statement: 'Pour la moyenne de 100 lancers d’une pièce équilibrée, majorer la probabilité que la fréquence de piles s’écarte de 0,5 d’au moins 0,2.', calculation: 'La variance de la fréquence vaut 0,25/100 = 0,0025. Tchebychev donne une borne 0,0025/(0,2²) = 0,0625.', answer: 'La probabilité de cet écart est au plus 6,25 %.' }, exercise: { question: 'Une variable a pour variance 9. Majorer P(|X − E(X)| ≥ 6).', answer: 'Tchebychev donne P ≤ 9/6² = 1/4.' } } }
    ]
  },
  {
    id: 'mpsi-mp2i',
    title: 'MPSI / MP2I · première année',
    note: 'Le programme de mathématiques de première année est commun aux deux filières.',
    source: 'https://www.education.gouv.fr/bo/21/Special1/ESRS2035779A.htm',
    chapters: [
      { id: 'sup-logique', title: 'Raisonnement et vocabulaire ensembliste', field: 'Algèbre', summary: 'Quantificateurs, raisonnement, récurrence, ensembles, applications et relations.' },
      { id: 'sup-calcul-trigo', title: 'Compléments de calcul algébrique et de trigonométrie', field: 'Algèbre', summary: 'Sommes, produits, formule du binôme, inégalités et formules trigonométriques.' },
      { id: 'sup-complexes', title: 'Nombres complexes', field: 'Algèbre', summary: 'Formes algébrique et trigonométrique, module, racines et transformations du plan.' },
      { id: 'sup-calcul-differentiel', title: 'Techniques fondamentales de calcul différentiel et intégral', field: 'Analyse', summary: 'Fonctions usuelles, dérivation, primitives et équations différentielles linéaires.' },
      { id: 'sup-reels-suites', title: 'Nombres réels et suites numériques', field: 'Analyse', summary: 'Borne supérieure, limites, suites monotones, suites extraites et suites récurrentes.' },
      { id: 'sup-fonctions', title: 'Fonctions d’une variable réelle : limites et continuité, dérivabilité, convexité', field: 'Analyse', summary: 'Continuité, théorèmes de Rolle et des accroissements finis, dérivation et convexité.' },
      { id: 'sup-arithmetique', title: 'Arithmétique dans l’ensemble des entiers relatifs', field: 'Algèbre', summary: 'Division euclidienne, PGCD, Bézout, nombres premiers et congruences.' },
      { id: 'sup-structures', title: 'Structures algébriques usuelles', field: 'Algèbre', summary: 'Lois de composition, groupes, sous-groupes, anneaux, corps et morphismes.' },
      { id: 'sup-matrices-systemes', title: 'Calcul matriciel et systèmes linéaires', field: 'Algèbre', summary: 'Opérations matricielles, systèmes, inversion et méthode du pivot.' },
      { id: 'sup-polynomes', title: 'Polynômes et fractions rationnelles', field: 'Algèbre', summary: 'Division euclidienne, racines, multiplicité, factorisation et éléments simples.' },
      { id: 'sup-asymptotique', title: 'Analyse asymptotique', field: 'Analyse', summary: 'Comparaisons, équivalents, négligeabilité et développements limités.' },
      { id: 'sup-espaces-vectoriels', title: 'Espaces vectoriels et applications linéaires', field: 'Algèbre linéaire', summary: 'Sous-espaces, familles, bases, dimension, noyau, image et théorème du rang.' },
      { id: 'sup-matrices', title: 'Matrices', field: 'Algèbre linéaire', summary: 'Matrices d’applications, changements de bases, rang, trace et similitude.' },
      { id: 'sup-determinants', title: 'Groupe symétrique et déterminants', field: 'Algèbre linéaire', summary: 'Permutations, signature, déterminants, propriétés et calcul pratique.' },
      { id: 'sup-integration', title: 'Intégration', field: 'Analyse', summary: 'Intégrale sur un segment, sommes de Riemann et lien avec les primitives.' },
      { id: 'sup-denombrement', title: 'Dénombrement', field: 'Probabilités', summary: 'Cardinaux, arrangements, combinaisons et coefficients binomiaux.' },
      { id: 'sup-probabilites', title: 'Probabilités', field: 'Probabilités', summary: 'Univers fini, conditionnement, indépendance, lois, espérance et variance.' },
      { id: 'sup-prehilbertiens', title: 'Espaces préhilbertiens réels', field: 'Algèbre linéaire', summary: 'Produit scalaire, orthogonalité, Gram-Schmidt et projection orthogonale.' },
      { id: 'sup-series', title: 'Procédés sommatoires discrets', field: 'Analyse', summary: 'Séries numériques, convergence, séries à termes positifs et convergence absolue.' },
      { id: 'sup-fonctions-deux-variables', title: 'Fonctions de deux variables', field: 'Analyse', summary: 'Dérivées partielles, gradient, points critiques et recherche d’extremums.' }
    ]
  },
  {
    id: 'pcsi',
    title: 'PCSI · première année',
    note: 'Programme de mathématiques de la filière PCSI, organisé en deux semestres.',
    source: 'https://www.education.gouv.fr/bo/21/Special1/ESRS2035780A.htm',
    chapters: [
      { id: 'pcsi-ensembliste', title: 'Raisonnement et vocabulaire ensembliste', field: 'Algèbre', summary: 'Logique, quantificateurs, raisonnements, ensembles et applications.' },
      { id: 'pcsi-calcul-trigo', title: 'Compléments de calcul algébrique et de trigonométrie', field: 'Algèbre', summary: 'Sommes, produits, formule du binôme, inégalités et cercle trigonométrique.' },
      { id: 'pcsi-complexes', title: 'Nombres complexes', field: 'Algèbre', summary: 'Conjugaison, module, formes trigonométrique et exponentielle, racines.' },
      { id: 'pcsi-calcul-diff', title: 'Techniques fondamentales de calcul différentiel et intégral', field: 'Analyse', summary: 'Fonctions d’une variable, dérivation, primitives et équations différentielles.' },
      { id: 'pcsi-reels-suites', title: 'Nombres réels et suites numériques', field: 'Analyse', summary: 'Limites, suites monotones, suites extraites et suites récurrentes.' },
      { id: 'pcsi-fonctions', title: 'Fonctions d’une variable réelle : limites, continuité, dérivabilité', field: 'Analyse', summary: 'Limites, continuité, théorèmes de Rolle et des accroissements finis.' },
      { id: 'pcsi-matrices-systemes', title: 'Calcul matriciel et systèmes linéaires', field: 'Algèbre', summary: 'Opérations matricielles, systèmes linéaires et inversibilité.' },
      { id: 'pcsi-polynomes', title: 'Polynômes', field: 'Algèbre', summary: 'Degré, division euclidienne, racines, multiplicité et factorisation.' },
      { id: 'pcsi-asymptotique', title: 'Analyse asymptotique', field: 'Analyse', summary: 'Comparaisons, équivalents, développements limités et Taylor-Young.' },
      { id: 'pcsi-espaces-vectoriels', title: 'Espaces vectoriels et applications linéaires', field: 'Algèbre linéaire', summary: 'Familles, dimension, applications linéaires, noyau, image et rang.' },
      { id: 'pcsi-matrices-determinants', title: 'Matrices et déterminants', field: 'Algèbre linéaire', summary: 'Rang, changement de base, matrices semblables et déterminants.' },
      { id: 'pcsi-integration', title: 'Intégration', field: 'Analyse', summary: 'Intégrale sur un segment, sommes de Riemann et lien intégrale-primitive.' },
      { id: 'pcsi-denombrement', title: 'Dénombrement', field: 'Probabilités', summary: 'Cardinaux, permutations, arrangements, combinaisons et coefficients binomiaux.' },
      { id: 'pcsi-probabilites', title: 'Probabilités', field: 'Probabilités', summary: 'Conditionnement, indépendance, lois usuelles, espérance et variance.' },
      { id: 'pcsi-prehilbertiens', title: 'Espaces préhilbertiens réels', field: 'Algèbre linéaire', summary: 'Produit scalaire, orthogonalité, bases orthonormées et projections.' },
      { id: 'pcsi-series', title: 'Séries numériques', field: 'Analyse', summary: 'Convergence, séries géométriques, séries de Riemann et convergence absolue.' },
      { id: 'pcsi-fonctions-deux-variables', title: 'Fonctions de deux variables', field: 'Analyse', summary: 'Continuité, dérivées partielles, gradient et extremums.' }
    ]
  },
  {
    id: 'mp-mpi',
    title: 'MP / MPI · deuxième année',
    note: 'Les programmes de mathématiques MP et MPI sont communs.',
    source: 'https://www.education.gouv.fr/bo/21/Hebdo31/ESRS2111702A.htm',
    chapters: [
      { id: 'spe-structures', title: 'Structures algébriques usuelles', field: 'Algèbre', summary: 'Groupes, anneaux, idéaux et algèbres.' },
      { id: 'spe-reduction', title: 'Réduction des endomorphismes et des matrices carrées', field: 'Algèbre linéaire', summary: 'Valeurs propres, diagonalisation, polynômes annulateurs et théorème de Cayley-Hamilton.' },
      { id: 'spe-euclidien', title: 'Endomorphismes d’un espace euclidien', field: 'Algèbre linéaire', summary: 'Isométries, matrices orthogonales, théorème spectral et endomorphismes autoadjoints.' },
      { id: 'spe-topologie', title: 'Topologie des espaces vectoriels normés', field: 'Analyse', summary: 'Normes, ouverts, fermés, continuité, compacité et équivalence des normes.' },
      { id: 'spe-series-vectorielles', title: 'Séries numériques et vectorielles', field: 'Analyse', summary: 'Convergence, comparaisons, séries vectorielles et théorème de Cesàro.' },
      { id: 'spe-series-fonctions', title: 'Suites et séries de fonctions, séries entières', field: 'Analyse', summary: 'Convergences simple, uniforme et normale, régularité et séries entières.' },
      { id: 'spe-fonctions-vectorielles', title: 'Fonctions vectorielles', field: 'Analyse', summary: 'Dérivation, intégration et formules de Taylor pour les fonctions à valeurs vectorielles.' },
      { id: 'spe-integrales', title: 'Intégration sur un intervalle quelconque', field: 'Analyse', summary: 'Intégrales généralisées, convergence dominée et intégration à paramètre.' },
      { id: 'spe-variables', title: 'Variables aléatoires discrètes', field: 'Probabilités', summary: 'Lois discrètes, espérance, variance, lois géométrique et de Poisson.' },
      { id: 'spe-equations-diff', title: 'Équations différentielles linéaires', field: 'Analyse', summary: 'Systèmes différentiels linéaires et exponentielle de matrice.' },
      { id: 'spe-optimisation', title: 'Calcul différentiel et optimisation', field: 'Analyse', summary: 'Différentielle, gradient, règle de la chaîne et recherche d’extremums.' }
    ]
  },
  {
    id: 'pc',
    title: 'PC · deuxième année',
    note: 'Sept sections dans le programme de mathématiques de la filière PC.',
    source: 'https://www.education.gouv.fr/bo/21/Hebdo31/ESRS2111703A.htm',
    chapters: [
      { id: 'pc-algebre-lineaire', title: 'Algèbre linéaire', field: 'Algèbre', summary: 'Espaces vectoriels, réduction des endomorphismes, diagonalisation et trigonalisation.' },
      { id: 'pc-espaces-euclidiens', title: 'Endomorphismes des espaces euclidiens', field: 'Algèbre', summary: 'Isométries, théorème spectral et endomorphismes autoadjoints.' },
      { id: 'pc-evn', title: 'Espaces vectoriels normés', field: 'Analyse', summary: 'Normes, ouverts, fermés, limites, continuité et équivalence des normes.' },
      { id: 'pc-series-fonctions', title: 'Suites et séries de fonctions', field: 'Analyse', summary: 'Convergences de suites et séries, régularité et séries entières.' },
      { id: 'pc-integrales', title: 'Intégration sur un intervalle quelconque', field: 'Analyse', summary: 'Intégrales généralisées, convergence dominée et intégration à paramètre.' },
      { id: 'pc-variables', title: 'Variables aléatoires discrètes', field: 'Probabilités', summary: 'Lois discrètes, espérance, variance et loi faible des grands nombres.' },
      { id: 'pc-calcul-differentiel', title: 'Calcul différentiel', field: 'Analyse', summary: 'Dérivées partielles, gradient, matrice hessienne et optimisation.' }
    ]
  },
  {
    id: 'psi',
    title: 'PSI · deuxième année',
    note: 'La filière PSI suit un programme distinct de PC ; ces intitulés sont organisés en grands thèmes de mathématiques.',
    chapters: [
      { id: 'psi-algebre-lineaire', title: 'Algèbre linéaire et réduction', field: 'Algèbre', summary: 'Applications linéaires, matrices, valeurs propres et réduction.' },
      { id: 'psi-espaces-euclidiens', title: 'Espaces euclidiens', field: 'Algèbre', summary: 'Produit scalaire, orthogonalité, isométries et théorème spectral.' },
      { id: 'psi-topologie', title: 'Espaces vectoriels normés et topologie', field: 'Analyse', summary: 'Normes, convergence, continuité et compacité.' },
      { id: 'psi-series', title: 'Séries et suites de fonctions', field: 'Analyse', summary: 'Convergence de suites et séries, séries entières et régularité.' },
      { id: 'psi-integration', title: 'Intégration et intégrales généralisées', field: 'Analyse', summary: 'Intégrales sur un intervalle quelconque et convergence.' },
      { id: 'psi-equations-diff', title: 'Équations différentielles', field: 'Analyse', summary: 'Équations linéaires et systèmes différentiels.' },
      { id: 'psi-probabilites', title: 'Probabilités et variables aléatoires', field: 'Probabilités', summary: 'Lois discrètes, espérance et variance.' },
      { id: 'psi-calcul-differentiel', title: 'Calcul différentiel et optimisation', field: 'Analyse', summary: 'Gradient, dérivées partielles et extremums.' }
    ]
  }
];

const mpsiLessons = {
  'sup-logique': {
    sections: ['Une implication P ⇒ Q dit que toute situation où P est vraie rend Q vraie. Sa réciproque Q ⇒ P doit être démontrée séparément.', 'Une preuve par contraposée remplace P ⇒ Q par non Q ⇒ non P. Une récurrence comporte une initialisation, une hérédité et une conclusion.'],
    formula: { label: 'CONTRAPOSÉE', text: 'P ⇒ Q équivaut à non Q ⇒ non P' },
    example: { statement: 'Montrer que n² + n est pair pour tout entier n.', calculation: 'n² + n = n(n + 1). Parmi deux entiers consécutifs, l’un est pair.', answer: 'Le produit est pair, donc n² + n est pair.' },
    exercise: { question: 'Nier « pour tout réel x, x² ≥ 0 ».', answer: '« Il existe un réel x tel que x² < 0. » Cette proposition est fausse.' }
  },
  'sup-calcul-trigo': {
    sections: ['La formule du binôme développe une puissance de somme grâce aux coefficients C(n,k). Les formules d’addition expriment les fonctions trigonométriques d’une somme à l’aide de celles des angles.', 'Avant un calcul, repère si l’ordre compte et choisis entre somme, produit, arrangement ou combinaison.'],
    formula: { label: 'BINÔME ET ADDITION', text: '(a + b)ⁿ = Σ C(n,k)aⁿ⁻ᵏbᵏ  |  cos(a + b) = cos a cos b − sin a sin b' },
    example: { statement: 'Développer (x + 2)⁴.', calculation: 'Les coefficients binomiaux sont 1, 4, 6, 4, 1 ; on multiplie chaque terme par la puissance correspondante de 2.', answer: 'x⁴ + 8x³ + 24x² + 32x + 16.' },
    exercise: { question: 'Quel est le coefficient de x² dans (x + 1)⁵ ?', answer: 'C(5,2) = 10.' }
  },
  'sup-complexes': {
    sections: ['Un complexe s’écrit z = a + ib avec i² = −1. Son conjugué est a − ib et son module vaut √(a² + b²).', 'La forme trigonométrique z = r(cos θ + i sin θ) facilite les produits : les modules se multiplient et les arguments s’additionnent.'],
    formula: { label: 'PRODUIT DE COMPLEXES', text: '|zw| = |z||w|  |  arg(zw) = arg(z) + arg(w) [2π]' },
    example: { statement: 'Résoudre z² + 1 = 0 dans ℂ.', calculation: 'L’équation équivaut à z² = −1. Les deux racines carrées de −1 sont opposées.', answer: 'z = i ou z = −i.' },
    exercise: { question: 'Donner le module et un argument de 1 + i.', answer: '|1 + i| = √2 et un argument est π/4.' }
  },
  'sup-calcul-differentiel': {
    sections: ['Les règles de dérivation de somme, produit, quotient et composition permettent de calculer une dérivée puis d’étudier les variations.', 'Une primitive F de f vérifie F′ = f. Les équations différentielles se résolvent en tenant compte de leurs conditions initiales.'],
    formula: { label: 'RÈGLES USUELLES', text: '(uv)′ = u′v + uv′  |  (f∘g)′ = (f′∘g)g′  |  (eˣ)′ = eˣ' },
    example: { statement: 'Dériver f(x) = xeˣ.', calculation: 'Par la règle du produit, f′(x) = 1 × eˣ + x × eˣ.', answer: 'f′(x) = (x + 1)eˣ.' },
    exercise: { question: 'Dériver (x² + 1)³.', answer: 'Par composition : 3(x² + 1)² × 2x = 6x(x² + 1)².' }
  },
  'sup-reels-suites': {
    sections: ['La propriété de la borne supérieure garantit qu’un ensemble non vide et majoré de réels possède une plus petite borne supérieure.', 'Une suite monotone et bornée converge. Pour une suite récurrente, étudie d’abord un intervalle stable et le sens de variation.'],
    formula: { label: 'CONVERGENCE MONOTONE', text: 'Croissante et majorée ⇒ convergente  |  Décroissante et minorée ⇒ convergente' },
    example: { statement: 'Étudier la limite de uₙ = 1 − 3⁻ⁿ.', calculation: 'La suite 3⁻ⁿ tend vers 0 lorsque n tend vers l’infini.', answer: 'uₙ tend vers 1.' },
    exercise: { question: 'Calculer la limite de uₙ = 2 + 1/(n + 1).', answer: 'Le terme 1/(n + 1) tend vers 0 ; la limite est 2.' }
  },
  'sup-fonctions': {
    sections: ['Le théorème des accroissements finis relie la pente entre deux points à une valeur de la dérivée. Le théorème de Rolle en est un cas particulier.', 'Une fonction deux fois dérivable est convexe sur un intervalle lorsque sa dérivée seconde y est positive.'],
    formula: { label: 'ACCROISSEMENTS FINIS', text: 'Il existe c ∈ ]a ; b[ tel que f(b) − f(a) = f′(c)(b − a)' },
    example: { statement: 'Étudier la convexité de f(x) = x².', calculation: 'f′(x) = 2x et f′′(x) = 2, donc f′′ est positive sur ℝ.', answer: 'La fonction carré est convexe sur ℝ.' },
    exercise: { question: 'Que déduire si f′′(x) < 0 sur un intervalle ?', answer: 'La fonction f est concave sur cet intervalle.' }
  },
  'sup-arithmetique': {
    sections: ['L’algorithme d’Euclide calcule le PGCD par divisions successives. Le théorème de Bézout exprime ce PGCD comme combinaison linéaire des deux entiers.', 'Les congruences comparent les restes de divisions et simplifient les calculs de divisibilité et de puissances.'],
    formula: { label: 'DIVISION EUCLIDIENNE', text: 'a = bq + r  |  au + bv = PGCD(a,b) pour certains u,v ∈ ℤ' },
    example: { statement: 'Calculer le PGCD de 84 et 30.', calculation: '84 = 2×30 + 24 ; 30 = 24 + 6 ; 24 = 4×6.', answer: 'PGCD(84,30) = 6.' },
    exercise: { question: 'Donner le reste de 38 dans la division par 7.', answer: '38 = 5×7 + 3, le reste est 3.' }
  },
  'sup-structures': {
    sections: ['Un groupe est un ensemble muni d’une opération associative, d’un élément neutre et d’inverses. Un groupe est abélien si l’opération est commutative.', 'Un anneau possède deux opérations compatibles ; dans un corps, chaque élément non nul possède un inverse multiplicatif.'],
    formula: { label: 'STRUCTURE DE GROUPE', text: 'Associativité · élément neutre · inverse · stabilité de l’opération' },
    example: { statement: 'Les entiers relatifs munis de l’addition forment-ils un groupe ?', calculation: 'L’addition est associative, 0 est neutre et chaque n possède l’opposé −n.', answer: 'Oui, (ℤ, +) est un groupe abélien.' },
    exercise: { question: 'Quel est l’inverse de 7 dans (ℤ, +) ?', answer: '−7, car 7 + (−7) = 0.' }
  },
  'sup-matrices-systemes': {
    sections: ['Les opérations élémentaires sur les lignes transforment un système linéaire sans modifier ses solutions. Le pivot de Gauss élimine successivement les inconnues.', 'Une matrice carrée inversible permet de résoudre AX = B de manière unique pour tout second membre B.'],
    formula: { label: 'ÉCRITURE MATRICIELLE', text: 'AX = B  |  Si A est inversible, X = A⁻¹B' },
    example: { statement: 'Résoudre x + y = 5 et x − y = 1.', calculation: 'En additionnant, 2x = 6, donc x = 3 ; puis y = 2.', answer: 'La solution est (3 ; 2).' },
    exercise: { question: 'Combien de solutions ont x + y = 2 et 2x + 2y = 4 ?', answer: 'Les équations sont dépendantes ; il existe une infinité de solutions.' }
  },
  'sup-polynomes': {
    sections: ['La division euclidienne écrit A = BQ + R avec deg(R) < deg(B). Si a est une racine d’un polynôme P, alors X − a est un facteur de P.', 'La décomposition en éléments simples réécrit une fraction rationnelle comme somme de fractions plus faciles à étudier ou intégrer.'],
    formula: { label: 'THÉORÈME FACTEUR', text: 'P(a) = 0 ⇔ P(X) = (X − a)Q(X) pour un polynôme Q' },
    example: { statement: 'Factoriser X² − 1.', calculation: 'C’est une différence de deux carrés.', answer: 'X² − 1 = (X − 1)(X + 1).' },
    exercise: { question: 'Vérifier si 2 est une racine de X² − 3X + 2.', answer: '2² − 3×2 + 2 = 0 : 2 est une racine.' }
  }
};

const mpsiSecondSemesterProgramme = window.courseCatalog.find((programme) => programme.id === 'mpsi-mp2i');
mpsiSecondSemesterProgramme.chapters.forEach((chapter) => {
  if (mpsiLessons[chapter.id]) chapter.lesson = mpsiLessons[chapter.id];
});

const mpsiSecondSemesterLessons = {
  'sup-asymptotique': {
    sections: ['Les relations de comparaison décrivent la taille relative de deux fonctions ou suites près d’une limite. L’équivalence f ~ g signifie que leur quotient tend vers 1.', 'Ces outils simplifient les limites et permettent de remplacer localement une expression par une autre de même comportement dominant.'],
    formula: { label: 'ÉQUIVALENT ET DÉVELOPPEMENT LIMITÉ', text: 'f ~ g si f/g → 1  |  sin(x) ~ x quand x → 0' },
    example: { statement: 'Déterminer un équivalent de x² + 3x quand x tend vers +∞.', calculation: '(x² + 3x)/x² = 1 + 3/x, et ce quotient tend vers 1.', answer: 'x² + 3x ~ x² quand x → +∞.' },
    exercise: { question: 'Donner un équivalent de 5x³ − 2x quand x tend vers +∞.', answer: 'Le terme dominant est 5x³ : 5x³ − 2x ~ 5x³.' }
  },
  'sup-espaces-vectoriels': {
    sections: ['Un espace vectoriel est un ensemble où l’on peut additionner des vecteurs et les multiplier par un scalaire. Une base est une famille libre et génératrice ; elle permet d’écrire chaque vecteur de façon unique.', 'Une application linéaire respecte les combinaisons linéaires. Son noyau regroupe les vecteurs envoyés sur 0, son image les valeurs atteintes.'],
    formula: { label: 'THÉORÈME DU RANG EN DIMENSION FINIE', text: 'dim(E) = dim(ker f) + dim(Im f)' },
    example: { statement: 'Pour f(x,y) = (x + y, 0), déterminer le noyau.', calculation: 'f(x,y) = (0,0) équivaut à x + y = 0. Les vecteurs du noyau sont donc t(1,−1).', answer: 'ker f = Vect((1 ; −1)), de dimension 1.' },
    exercise: { question: 'Une application linéaire de ℝ³ dans ℝ² peut-elle être injective ?', answer: 'Non : le rang est au plus 2, donc le noyau a une dimension au moins égale à 1.' }
  },
  'sup-matrices': {
    sections: ['Une matrice représente une application linéaire dans des bases données. Changer de base modifie sa matrice, mais pas l’application elle-même.', 'Deux matrices semblables représentent le même endomorphisme dans deux bases différentes ; elles ont notamment le même déterminant et le même polynôme caractéristique.'],
    formula: { label: 'CHANGEMENT DE BASE', text: 'A′ = P⁻¹AP' },
    example: { statement: 'Que représente une matrice diagonale diag(2,3) ?', calculation: 'Elle multiplie la première coordonnée par 2 et la seconde par 3.', answer: '(x ; y) est envoyé sur (2x ; 3y).' },
    exercise: { question: 'Quel est le rang de la matrice identité de taille 3 ?', answer: 'Ses trois colonnes sont indépendantes : son rang est 3.' }
  },
  'sup-determinants': {
    sections: ['Le déterminant est un nombre associé à une matrice carrée. Il détecte l’inversibilité : une matrice est inversible exactement lorsque son déterminant est non nul.', 'Pour un système carré, un déterminant non nul garantit une solution unique. En dimension 2, le calcul se fait directement avec les quatre coefficients.'],
    formula: { label: 'DÉTERMINANT 2 × 2', text: 'det([[a,b],[c,d]]) = ad − bc' },
    example: { statement: 'Calculer le déterminant de [[2,1],[3,4]].', calculation: 'On applique ad − bc : 2 × 4 − 1 × 3 = 8 − 3.', answer: 'Le déterminant vaut 5 ; la matrice est inversible.' },
    exercise: { question: 'La matrice [[1,2],[2,4]] est-elle inversible ?', answer: 'Son déterminant vaut 1×4 − 2×2 = 0 : elle n’est pas inversible.' }
  },
  'sup-integration': {
    sections: ['L’intégrale d’une fonction continue sur un segment peut être approchée par des sommes d’aires de rectangles. Les sommes de Riemann convergent vers cette intégrale lorsque le pas devient petit.', 'Le théorème fondamental relie l’intégrale à une primitive. L’intégration par parties transforme parfois une intégrale difficile en une plus simple.'],
    formula: { label: 'INTÉGRATION PAR PARTIES', text: '∫ₐᵇ u′v = [uv]ₐᵇ − ∫ₐᵇ uv′' },
    example: { statement: 'Calculer ∫₀¹ 2x dx.', calculation: 'Une primitive de 2x est x². On évalue x² entre 0 et 1.', answer: 'L’intégrale vaut 1.' },
    exercise: { question: 'Calculer ∫₀² 3 dx.', answer: 'Une primitive est 3x ; 3×2 − 3×0 = 6.' }
  },
  'sup-denombrement': {
    sections: ['Le dénombrement compte des possibilités sans les énumérer une à une. Le principe multiplicatif s’applique lorsque plusieurs choix successifs sont indépendants.', 'Une combinaison choisit k objets parmi n sans tenir compte de l’ordre ; un arrangement tient compte de l’ordre.'],
    formula: { label: 'COMBINAISONS', text: 'C(n,k) = n! / (k!(n − k)!)' },
    example: { statement: 'Combien de groupes de 3 personnes peut-on former parmi 10 ?', calculation: 'L’ordre n’importe pas : C(10,3) = 10×9×8/(3×2×1).', answer: 'Il existe 120 groupes.' },
    exercise: { question: 'Combien de façons d’ordonner 4 livres différents ?', answer: 'Il y a 4! = 24 ordres.' }
  },
  'sup-probabilites': {
    sections: ['Dans un univers fini équiprobable, la probabilité d’un événement est le nombre de cas favorables divisé par le nombre de cas possibles.', 'Le conditionnement restreint l’univers à une information connue. L’indépendance signifie que cette information ne modifie pas les probabilités.'],
    formula: { label: 'PROBABILITÉ CONDITIONNELLE', text: 'P_A(B) = P(A ∩ B) / P(A)' },
    example: { statement: 'On lance un dé équilibré. Sachant que le résultat est pair, quelle est la probabilité qu’il soit supérieur à 3 ?', calculation: 'Les issues paires sont {2,4,6}. Parmi elles, 4 et 6 sont supérieures à 3.', answer: 'La probabilité conditionnelle vaut 2/3.' },
    exercise: { question: 'Deux événements indépendants ont chacun une probabilité 1/2. Quelle est la probabilité de leur intersection ?', answer: 'Par indépendance, P(A∩B) = P(A)P(B) = 1/4.' }
  },
  'sup-prehilbertiens': {
    sections: ['Un produit scalaire généralise la notion de perpendicularité. Il définit une norme, une distance et un angle entre vecteurs.', 'La projection orthogonale décompose un vecteur en une composante parallèle à un sous-espace et une composante perpendiculaire.'],
    formula: { label: 'PROJECTION SUR UNE DROITE VECTORIELLE', text: 'projᵥ(u) = (u·v / v·v)v' },
    example: { statement: 'Projeter u = (3,2) sur la droite dirigée par v = (1,0).', calculation: 'u·v = 3 et v·v = 1 ; la projection vaut 3(1,0).', answer: 'projᵥ(u) = (3,0).' },
    exercise: { question: 'Les vecteurs (1,2) et (2,−1) sont-ils orthogonaux ?', answer: 'Le produit scalaire vaut 1×2 + 2×(−1) = 0 : ils sont orthogonaux.' }
  },
  'sup-series': {
    sections: ['Une série Σuₙ converge lorsque la suite de ses sommes partielles converge. La convergence absolue, obtenue si Σ|uₙ| converge, garantit la convergence de la série.', 'Pour une série géométrique de raison q, la série converge si et seulement si |q| < 1. Les critères de comparaison permettent ensuite d’étudier d’autres séries.'],
    formula: { label: 'SÉRIE GÉOMÉTRIQUE', text: 'Si |q| < 1, Σₙ₌₀∞ qⁿ = 1/(1 − q)' },
    example: { statement: 'Calculer la somme de la série géométrique Σₙ₌₀∞ (1/2)ⁿ.', calculation: 'Sa raison est q = 1/2, donc |q| < 1 et la somme vaut 1/(1 − 1/2).', answer: 'La somme vaut 2.' },
    exercise: { question: 'La série Σ(3/2)ⁿ converge-t-elle ?', answer: 'Non, car sa raison a une valeur absolue supérieure à 1 ; ses termes ne tendent même pas vers 0.' }
  },
  'sup-fonctions-deux-variables': {
    sections: ['Pour une fonction f(x,y), les dérivées partielles mesurent les variations lorsque l’on fait varier une coordonnée en gardant l’autre fixe.', 'Un point critique annule le gradient. Il peut être un minimum, un maximum ou un point selle ; il faut donc examiner le comportement de la fonction autour de lui.'],
    formula: { label: 'GRADIENT', text: '∇f(x,y) = (∂f/∂x ; ∂f/∂y)' },
    example: { statement: 'Chercher le minimum de f(x,y) = x² + y².', calculation: 'Les dérivées partielles sont 2x et 2y. Elles s’annulent ensemble uniquement en (0,0).', answer: 'f(x,y) ≥ 0, avec minimum 0 atteint en (0,0).' },
    exercise: { question: 'Calculer le gradient de f(x,y) = 3x² + y.', answer: '∂f/∂x = 6x et ∂f/∂y = 1, donc ∇f = (6x ; 1).' }
  }
};

const mpsiProgramme = window.courseCatalog.find((programme) => programme.id === 'mpsi-mp2i');
mpsiProgramme.chapters.forEach((chapter) => {
  if (mpsiSecondSemesterLessons[chapter.id]) chapter.lesson = mpsiSecondSemesterLessons[chapter.id];
});

const pcsiLessonSources = {
  'pcsi-ensembliste': 'sup-logique',
  'pcsi-calcul-trigo': 'sup-calcul-trigo',
  'pcsi-complexes': 'sup-complexes',
  'pcsi-calcul-diff': 'sup-calcul-differentiel',
  'pcsi-reels-suites': 'sup-reels-suites',
  'pcsi-fonctions': 'sup-fonctions',
  'pcsi-matrices-systemes': 'sup-matrices-systemes',
  'pcsi-polynomes': 'sup-polynomes',
  'pcsi-asymptotique': 'sup-asymptotique',
  'pcsi-espaces-vectoriels': 'sup-espaces-vectoriels',
  'pcsi-integration': 'sup-integration',
  'pcsi-denombrement': 'sup-denombrement',
  'pcsi-probabilites': 'sup-probabilites',
  'pcsi-prehilbertiens': 'sup-prehilbertiens',
  'pcsi-series': 'sup-series',
  'pcsi-fonctions-deux-variables': 'sup-fonctions-deux-variables'
};
const pcsiProgramme = window.courseCatalog.find((programme) => programme.id === 'pcsi');
pcsiProgramme.chapters.forEach((chapter) => {
  const sourceId = pcsiLessonSources[chapter.id];
  const sourceChapter = mpsiProgramme.chapters.find((source) => source.id === sourceId);
  if (sourceChapter?.lesson) chapter.lesson = sourceChapter.lesson;
});

const pcsiMatrices = pcsiProgramme.chapters.find((chapter) => chapter.id === 'pcsi-matrices-determinants');
pcsiMatrices.lesson = {
  sections: ['Une matrice peut représenter une application linéaire dans une base. Son rang mesure le nombre de directions indépendantes de son image.', 'Le déterminant d’une matrice carrée teste son inversibilité. Pour une matrice 2 × 2, un calcul direct suffit ; en dimension supérieure, on utilise les opérations et propriétés du déterminant.'],
  formula: { label: 'DÉTERMINANT EN DIMENSION 2', text: 'det([[a,b],[c,d]]) = ad − bc' },
  example: { statement: 'La matrice A = [[1,2],[3,4]] est-elle inversible ?', calculation: 'det(A) = 1×4 − 2×3 = −2, qui est non nul.', answer: 'A est inversible.' },
  exercise: { question: 'Calculer le déterminant de la matrice diagonale [[2,0],[0,−3]].', answer: 'Le déterminant vaut 2×(−3) = −6.' }
};

const mpLessons = {
  'spe-structures': {
    sections: ['En deuxième année, les structures algébriques servent à organiser les opérations sur les ensembles de nombres et de polynômes. On étudie notamment les sous-groupes, les idéaux et les morphismes.', 'Un idéal permet de construire un anneau quotient ; les classes modulo n donnent l’anneau ℤ/nℤ.'],
    formula: { label: 'CONGRUENCE MODULO n', text: 'a ≡ b [n] ⇔ n divise (a − b)' },
    example: { statement: 'Calculer 17 modulo 5.', calculation: '17 = 3×5 + 2, donc le reste de la division est 2.', answer: '17 ≡ 2 [5].' },
    exercise: { question: 'À quelle classe modulo 4 appartient −1 ?', answer: '−1 = 3 − 4, donc −1 ≡ 3 [4].' }
  },
  'spe-reduction': {
    sections: ['Une valeur propre λ de f est un scalaire pour lequel il existe un vecteur non nul x tel que f(x) = λx. Les vecteurs associés forment le sous-espace propre.', 'Une base de vecteurs propres permet de représenter l’endomorphisme par une matrice diagonale. La réduction simplifie alors les puissances et l’étude de l’évolution d’un système.'],
    formula: { label: 'CONDITION DE VALEUR PROPRE', text: 'det(A − λI) = 0' },
    example: { statement: 'Diagonaliser la matrice diagonale A = diag(2,3).', calculation: 'Les vecteurs de la base canonique sont déjà des vecteurs propres, associés respectivement à 2 et 3.', answer: 'A est déjà diagonale ; ses valeurs propres sont 2 et 3.' },
    exercise: { question: 'Quelles sont les valeurs propres de diag(−1,4,4) ?', answer: 'Les valeurs propres sont −1 et 4 ; 4 est de multiplicité 2.' }
  },
  'spe-euclidien': {
    sections: ['Un endomorphisme orthogonal conserve le produit scalaire et les longueurs. Sa matrice dans une base orthonormée est une matrice orthogonale.', 'Le théorème spectral affirme qu’un endomorphisme autoadjoint possède une base orthonormée de vecteurs propres. Cette base rend la matrice diagonale réelle.'],
    formula: { label: 'MATRICE ORTHOGONALE', text: 'AᵀA = I  |  A⁻¹ = Aᵀ' },
    example: { statement: 'La matrice identité est-elle orthogonale ?', calculation: 'IᵀI = I×I = I.', answer: 'Oui ; elle conserve les produits scalaires et les normes.' },
    exercise: { question: 'Que vaut le déterminant d’une matrice orthogonale ?', answer: 'Son déterminant vaut 1 ou −1.' }
  },
  'spe-topologie': {
    sections: ['Une norme mesure la taille d’un vecteur et induit une distance. Elle permet de définir les boules, les suites convergentes, les ouverts et les fermés.', 'En dimension finie, toutes les normes sont équivalentes : elles définissent les mêmes notions de convergence et de continuité. La compacité transforme ensuite des propriétés locales en résultats globaux.'],
    formula: { label: 'DISTANCE INDUITE PAR UNE NORME', text: 'd(x,y) = ||x − y||' },
    example: { statement: 'Dans ℝ² muni de la norme usuelle, décrire la boule de centre (0,0) et de rayon 1.', calculation: 'La condition est √(x² + y²) < 1, soit x² + y² < 1.', answer: 'C’est le disque ouvert unité.' },
    exercise: { question: 'La suite (1/n) converge-t-elle vers 0 dans ℝ ?', answer: 'Oui : sa distance à 0 vaut 1/n, qui tend vers 0.' }
  },
  'spe-series-vectorielles': {
    sections: ['Une série Σuₙ dans un espace vectoriel normé converge lorsque ses sommes partielles convergent. En dimension finie, on peut étudier la convergence coordonnée par coordonnée.', 'La convergence absolue, obtenue lorsque Σ||uₙ|| converge, implique la convergence de la série. Les comparaisons et les séries de référence sont les outils usuels.'],
    formula: { label: 'CRITÈRE DE CONVERGENCE ABSOLUE', text: 'Σ ||uₙ|| converge ⇒ Σ uₙ converge' },
    example: { statement: 'La série vectorielle de terme uₙ = (2⁻ⁿ, 3⁻ⁿ) converge-t-elle ?', calculation: 'Chacune des deux coordonnées est une série géométrique convergente, de raison 1/2 et 1/3.', answer: 'La série converge coordonnée par coordonnée dans ℝ².' },
    exercise: { question: 'Que peut-on conclure si la série des normes Σ||uₙ|| converge ?', answer: 'La série vectorielle Σuₙ converge absolument, donc converge.' }
  },
  'spe-series-fonctions': {
    sections: ['La convergence simple signifie que, pour chaque x fixé, la série numérique converge. La convergence uniforme contrôle l’erreur simultanément pour tous les x de l’ensemble.', 'Une série entière Σaₙxⁿ converge à l’intérieur de son rayon R ; dans cet intervalle, elle définit une fonction que l’on peut souvent dériver terme à terme.'],
    formula: { label: 'SÉRIE GÉOMÉTRIQUE EN x', text: 'Σₙ₌₀∞ xⁿ = 1/(1 − x) si |x| < 1' },
    example: { statement: 'Pour quelles valeurs de x la série Σxⁿ converge-t-elle ?', calculation: 'C’est une série géométrique de raison x ; elle converge si et seulement si |x| < 1.', answer: 'Son rayon de convergence vaut 1.' },
    exercise: { question: 'Quelle fonction représente Σₙ₌₀∞ (x/2)ⁿ pour |x| < 2 ?', answer: 'La somme vaut 1/(1 − x/2) = 2/(2 − x).' }
  },
  'spe-fonctions-vectorielles': {
    sections: ['Une fonction vectorielle associe à chaque réel un vecteur. Sa dérivée se calcule coordonnée par coordonnée dans une base.', 'L’intégrale d’une fonction vectorielle se calcule également coordonnée par coordonnée ; elle représente le déplacement cumulé lorsque la fonction décrit une vitesse.'],
    formula: { label: 'DÉRIVATION COORDONNÉE', text: 'Si f(t) = (x(t), y(t)), alors f′(t) = (x′(t), y′(t))' },
    example: { statement: 'Dériver f(t) = (t ; t²).', calculation: 'On dérive chaque coordonnée : (t)′ = 1 et (t²)′ = 2t.', answer: 'f′(t) = (1 ; 2t).' },
    exercise: { question: 'Dériver g(t) = (cos t ; eᵗ).', answer: 'g′(t) = (−sin t ; eᵗ).' }
  },
  'spe-integrales': {
    sections: ['Une intégrale sur un intervalle non borné est la limite d’intégrales sur des segments lorsque la borne tend vers l’infini. Elle converge si cette limite est finie.', 'Les comparaisons avec des fonctions positives de référence aident à décider si une intégrale impropre converge.'],
    formula: { label: 'INTÉGRALE IMPROPRE', text: '∫ₐ∞ f(x)dx = limᵦ→∞ ∫ₐᵇ f(x)dx' },
    example: { statement: 'Étudier ∫₁∞ 1/x² dx.', calculation: 'Une primitive de 1/x² est −1/x. L’intégrale jusqu’à b vaut 1 − 1/b.', answer: 'La limite vaut 1 ; l’intégrale converge.' },
    exercise: { question: 'L’intégrale ∫₁∞ 1/x dx converge-t-elle ?', answer: 'Non : l’intégrale jusqu’à b vaut ln(b), qui tend vers +∞.' }
  },
  'spe-variables': {
    sections: ['Une variable aléatoire discrète peut prendre un ensemble fini ou dénombrable de valeurs. Sa loi associe une probabilité à chaque valeur possible.', 'L’espérance est définie lorsque la somme des valeurs absolues pondérées converge. Les lois géométrique et de Poisson modélisent des situations de comptage distinctes.'],
    formula: { label: 'LOI GÉOMÉTRIQUE', text: 'P(X = k) = p(1 − p)ᵏ⁻¹ pour k ≥ 1  |  E(X) = 1/p' },
    example: { statement: 'On répète une épreuve de succès p = 1/4 jusqu’au premier succès. Quelle est l’attente moyenne ?', calculation: 'Le rang du premier succès suit une loi géométrique de paramètre p = 1/4.', answer: 'E(X) = 1/p = 4 essais.' },
    exercise: { question: 'Quelle est la probabilité que le premier succès arrive au troisième essai si p = 1/2 ?', answer: 'Il faut deux échecs puis un succès : (1/2)² × (1/2) = 1/8.' }
  },
  'spe-equations-diff': {
    sections: ['Un système différentiel linéaire s’écrit X′ = AX + B(t). Pour le système homogène à coefficients constants, la matrice exponentielle joue le rôle de l’exponentielle scalaire.', 'La solution générale contient des constantes déterminées par les conditions initiales.'],
    formula: { label: 'SYSTÈME HOMOGÈNE À COEFFICIENTS CONSTANTS', text: 'X′ = AX  ⇒  X(t) = eᵗᴬX(0)' },
    example: { statement: 'Résoudre y′ = 3y avec y(0) = 2.', calculation: 'L’équation homogène a pour solutions y(t) = Ce³ᵗ. La condition initiale impose C = 2.', answer: 'y(t) = 2e³ᵗ.' },
    exercise: { question: 'Quelle est la solution de y′ = −2y avec y(0) = 5 ?', answer: 'y(t) = 5e⁻²ᵗ.' }
  },
  'spe-optimisation': {
    sections: ['Le gradient regroupe les dérivées partielles et indique la direction de variation la plus forte. Un extremum intérieur d’une fonction différentiable se trouve parmi les points où le gradient s’annule.', 'La matrice hessienne permet d’étudier la nature du point critique : minimum, maximum ou point selle.'],
    formula: { label: 'CONDITION NÉCESSAIRE D’EXTREMUM INTÉRIEUR', text: '∇f(a) = 0' },
    example: { statement: 'Chercher le minimum de f(x,y) = x² + y².', calculation: 'Le gradient vaut (2x,2y) et s’annule en (0,0). Comme f(x,y) ≥ 0 partout, ce point est un minimum global.', answer: 'Le minimum vaut 0 en (0,0).' },
    exercise: { question: 'Trouver le point critique de f(x,y) = (x − 1)² + (y + 2)².', answer: 'Le gradient s’annule en (1,−2), où f atteint son minimum 0.' }
  }
};

const mpProgramme = window.courseCatalog.find((programme) => programme.id === 'mp-mpi');
mpProgramme.chapters.forEach((chapter) => {
  if (mpLessons[chapter.id]) chapter.lesson = mpLessons[chapter.id];
});

const secondYearLessonSources = {
  pc: {
    'pc-algebre-lineaire': 'spe-reduction',
    'pc-espaces-euclidiens': 'spe-euclidien',
    'pc-evn': 'spe-topologie',
    'pc-series-fonctions': 'spe-series-fonctions',
    'pc-integrales': 'spe-integrales',
    'pc-variables': 'spe-variables',
    'pc-calcul-differentiel': 'spe-optimisation'
  },
  psi: {
    'psi-algebre-lineaire': 'spe-reduction',
    'psi-espaces-euclidiens': 'spe-euclidien',
    'psi-topologie': 'spe-topologie',
    'psi-series': 'spe-series-fonctions',
    'psi-integration': 'spe-integrales',
    'psi-equations-diff': 'spe-equations-diff',
    'psi-probabilites': 'spe-variables',
    'psi-calcul-differentiel': 'spe-optimisation'
  }
};
['pc', 'psi'].forEach((programmeId) => {
  const programme = window.courseCatalog.find((item) => item.id === programmeId);
  programme.chapters.forEach((chapter) => {
    const sourceId = secondYearLessonSources[programmeId][chapter.id];
    const sourceChapter = mpProgramme.chapters.find((source) => source.id === sourceId);
    if (sourceChapter?.lesson) chapter.lesson = sourceChapter.lesson;
  });
});
