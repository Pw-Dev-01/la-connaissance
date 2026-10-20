window.courseCatalog = [
  {
    id: 'mecanique',
    title: 'Mécanique',
    note: 'Décrire le mouvement, ses causes et les échanges d’énergie.',
    chapters: [
      {
        id: 'cinematique',
        title: 'Cinématique du point',
        field: 'Classique · bases',
        summary: 'Position, vitesse et accélération en une et plusieurs dimensions.',
        lesson: {
          sections: [
            'La cinématique décrit un mouvement sans chercher ses causes. On choisit un référentiel, une origine des dates et un repère ; la position devient alors une fonction du temps.',
            'La vitesse est la dérivée de la position et l’accélération la dérivée de la vitesse. En mouvement rectiligne uniformément accéléré, l’accélération est constante.'
          ],
          formula: {
            label: 'MOUVEMENT À ACCÉLÉRATION CONSTANTE',
            text: 'v(t) = v₀ + at  |  x(t) = x₀ + v₀t + ½at²'
          },
          example: {
            statement: 'Un véhicule part du repos et accélère à 2 m·s⁻² pendant 5 s. Quelle distance parcourt-il ?',
            calculation: 'Avec v₀ = 0 et x₀ = 0, x(5) = ½ × 2 × 5².',
            answer: 'Il parcourt 25 m.'
          },
          exercise: {
            question: 'Un objet a v₀ = 3 m·s⁻¹ et a = 2 m·s⁻² pendant 4 s. Quelle est sa vitesse finale ?',
            answer: 'v = 3 + 2 × 4 = 11 m·s⁻¹.'
          },
          equationDetails: [
            {
              title: 'Vitesse à accélération constante',
              formula: 'v(t) = v₀ + at',
              explanation: 'Cette relation donne la vitesse après une durée t lorsque l’accélération a reste constante.',
              parameters: 'v(t) : vitesse à l’instant t (m·s⁻¹) ; v₀ : vitesse initiale (m·s⁻¹) ; a : accélération algébrique constante (m·s⁻²) ; t : durée (s). Les signes dépendent de l’axe orienté choisi.',
              example: 'Un véhicule part du repos avec a = 2 m·s⁻² pendant 5 s : v = 0 + 2 × 5.',
              result: 'v = 10 m·s⁻¹.'
            },
            {
              title: 'Position à accélération constante',
              formula: 'x(t) = x₀ + v₀t + ½at²',
              explanation: 'La position résulte de la position initiale, du déplacement dû à la vitesse initiale et du déplacement dû à l’accélération constante.',
              parameters: 'x(t), x₀ : position et position initiale sur l’axe (m) ; v₀ : vitesse initiale (m·s⁻¹) ; a : accélération constante (m·s⁻²) ; t : durée (s).',
              example: 'Pour x₀ = 0, v₀ = 0, a = 2 m·s⁻² et t = 5 s : x = ½ × 2 × 5².',
              result: 'Le déplacement est 25 m.'
            },
            {
              title: 'Vitesse instantanée',
              formula: 'v(t) = dx/dt',
              explanation: 'La vitesse instantanée est la limite de la vitesse moyenne lorsque l’intervalle de temps tend vers zéro ; elle se lit comme la pente de la courbe x(t), le déplacement étant l’aire sous cette courbe.',
              parameters: 'v(t) : vitesse à l’instant t (m·s⁻¹) ; x(t) : position (m) ; t : date (s).',
              example: 'Pour x(t) = 2t², la dérivée est dx/dt = 4t ; à t = 3 s la vitesse vaut 12 m·s⁻¹.',
              result: 'v(3 s) = 12 m·s⁻¹.'
            },
            {
              title: 'Accélération instantanée',
              formula: 'a(t) = dv/dt',
              explanation: 'L’accélération mesure une variation de vitesse, non une vitesse : un objet peut avoir une vitesse constante et une accélération non nulle, par exemple en mouvement circulaire uniforme.',
              parameters: 'a(t) : accélération (m·s⁻²) ; v(t) : vitesse (m·s⁻¹) ; t : date (s). L’accélération est la pente de la courbe v(t).',
              example: 'Pour v(t) = 5 − 3t, l’accélération vaut dv/dt = −3 m·s⁻² pendant tout le mouvement.',
              result: 'a = −3 m·s⁻² : la vitesse décroît linéairement.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Position, Displacement, and Average Velocity', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-1-position-displacement-and-average-velocity' },
            { title: 'OpenStax University Physics, vol. 1 — Instantaneous Velocity and Speed', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-2-instantaneous-velocity-and-speed' },
            { title: 'OpenStax University Physics, vol. 1 — Average and Instantaneous Acceleration', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-3-average-and-instantaneous-acceleration' },
            { title: 'OpenStax University Physics, vol. 1 — Motion with Constant Acceleration', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration' },
            { title: 'OpenStax University Physics, vol. 1 — Free Fall', url: 'https://openstax.org/books/university-physics-volume-1/pages/3-5-free-fall' }
          ]
        }
      },
      {
        id: 'lois-newton',
        title: 'Lois de Newton et forces',
        field: 'Classique · bases',
        summary: 'Bilan des forces, inertie, dynamique et action-réaction.',
        lesson: {
          sections: [
            'Une force modélise une interaction. Pour étudier un objet, on isole le système, on dresse le bilan des forces extérieures puis on applique la deuxième loi de Newton.',
            'Dans un référentiel galiléen, la somme vectorielle des forces détermine l’accélération. Si la résultante est nulle, la vitesse reste constante : c’est le principe d’inertie.'
          ],
          formula: {
            label: 'DEUXIÈME LOI DE NEWTON',
            text: 'Σ F⃗ₑₓₜ = m a⃗',
            mathML: 'newton-second-law'
          },
          example: {
            statement: 'Une masse de 4 kg subit une force horizontale résultante de 12 N. Quelle est son accélération ?',
            calculation: 'a = F/m = 12/4.',
            answer: 'a = 3 m·s⁻² dans la direction de la résultante.'
          },
          exercise: {
            question: 'Quelle résultante faut-il pour accélérer une masse de 2 kg à 5 m·s⁻² ?',
            answer: 'F = ma = 2 × 5 = 10 N.'
          },
          equationDetails: [
            {
              title: 'Deuxième loi de Newton',
              formula: 'Σ F⃗ₑₓₜ = m a⃗',
              explanation: 'Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un système est égale à sa masse fois son accélération. Seule la résultante détermine l’accélération.',
              parameters: 'Σ F⃗ₑₓₜ : résultante des forces extérieures (N) ; m : masse inertielle (kg) ; a⃗ : accélération du centre de masse (m·s⁻²). 1 N = 1 kg·m·s⁻².',
              example: 'Une résultante de 12 N agit sur une masse de 4 kg : a = F/m = 12/4.',
              result: 'L’accélération vaut 3 m·s⁻² dans la direction de la résultante.',
              mathML: 'newton-second-law'
            },
            {
              title: 'Poids d’un corps',
              formula: 'w⃗ = m g⃗',
              explanation: 'Le poids est la force de attraction terrestre : il dépend du lieu, alors que la masse ne varie pas. OpenStax donne g = 9,80 m·s⁻² sur Terre et 1,62 m·s⁻² sur la Lune.',
              parameters: 'w⃗ : poids (N) ; m : masse (kg) ; g⃗ : accélération de la pesanteur (m·s⁻²). Le poids apparent, mesuré par une balance, vaut N = m(g ± a) dans un référentiel accéléré.',
              example: 'Une masse de 5,0 kg pèse 5,0 × 9,81 ≈ 49 N sur Terre.',
              result: 'w ≈ 49 N ; le même corps pèse environ 8,1 N sur la Lune.'
            },
            {
              title: 'Frottement statique et cinétique',
              formula: 'fₛ ≤ μₛ N  et  fₖ = μₖ N',
              explanation: 'Le frottement statique s’adapte exactement à la force qui tend à faire glisser, jusqu’à sa valeur maximale ; le frottement cinétique a une intensité fixe une fois le glissement commencé. On a toujours μₛ > μₖ.',
              parameters: 'fₛ : frottement statique (N) ; fₖ : frottement cinétique (N) ; μₛ, μₖ : coefficients de frottement des deux matériaux ; N : réaction normale (N).',
              example: 'Un bloc de 4,0 kg sur un sol horizontal avec μₖ = 0,30 : N = 4,0 × 9,81 = 39,2 N donc fₖ = 11,8 N.',
              result: 'fₖ ≈ 11,8 N, opposée au mouvement.'
            },
            {
              title: 'Force centripète',
              formula: 'F꜀ = m v²/r',
              explanation: 'Dans un mouvement circulaire, la force centripète est le nom donné à la résultante des forces lorsqu’elle pointe vers le centre ; elle est perpendiculaire à la vitesse et ne modifie que sa direction.',
              parameters: 'F꜀ : force centripète (N) ; m : masse (kg) ; v : vitesse (m·s⁻¹) ; r : rayon de la trajectoire (m). Également F꜀ = m r ω².',
              example: 'Pour m = 900 kg, r = 500 m et v = 25,0 m·s⁻¹ (OpenStax, vol. 1, exemple 6.15).',
              result: 'F꜀ = 900 × 25,0² / 500 = 1 125 N.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Newton’s First Law', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-2-newtons-first-law' },
            { title: 'OpenStax University Physics, vol. 1 — Newton’s Second Law', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law' },
            { title: 'OpenStax University Physics, vol. 1 — Mass and Weight', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-4-mass-and-weight' },
            { title: 'OpenStax University Physics, vol. 1 — Drawing Free-Body Diagrams', url: 'https://openstax.org/books/university-physics-volume-1/pages/5-7-drawing-free-body-diagrams' },
            { title: 'OpenStax University Physics, vol. 1 — Friction', url: 'https://openstax.org/books/university-physics-volume-1/pages/6-2-friction' },
            { title: 'OpenStax University Physics, vol. 1 — Centripetal Force', url: 'https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force' }
          ]
        }
      },
      {
        id: 'energie-mecanique',
        title: 'Travail, énergie et puissance',
        field: 'Classique · intermédiaire',
        summary: 'Travail d’une force, énergie cinétique, potentielle et conservation.',
        lesson: {
          sections: [
            'L’énergie cinétique dépend de la masse et de la vitesse. Le travail d’une force mesure le transfert d’énergie associé à un déplacement.',
            'Le théorème de l’énergie cinétique relie la variation d’énergie cinétique au travail total des forces. En l’absence de dissipation, l’énergie mécanique se conserve.'
          ],
          formula: {
            label: 'ÉNERGIES ET THÉORÈME',
            text: 'E꜀ = ½mv²  |  ΔE꜀ = ΣW(F)  |  Eₘ = E꜀ + Eₚ'
          },
          example: {
            statement: 'Un objet de 2 kg passe de 3 à 5 m·s⁻¹. Quelle est la variation de son énergie cinétique ?',
            calculation: 'ΔE꜀ = ½ × 2 × (5² − 3²) = 25 − 9.',
            answer: 'ΔE꜀ = 16 J.'
          },
          exercise: {
            question: 'Calculer E꜀ pour m = 0,5 kg et v = 4 m·s⁻¹.',
            answer: 'E꜀ = ½ × 0,5 × 4² = 4 J.'
          },
          equationDetails: [
            {
              title: 'Énergie cinétique',
              formula: 'E꜀ = ½mv²',
              explanation: 'L’énergie cinétique est l’énergie associée au mouvement de translation d’un corps dans le cadre classique.',
              parameters: 'E꜀ : énergie cinétique (J) ; m : masse (kg) ; v : vitesse par rapport au référentiel choisi (m·s⁻¹).',
              example: 'Pour m = 2 kg et v = 5 m·s⁻¹ : E꜀ = ½ × 2 × 5².',
              result: 'E꜀ = 25 J.'
            },
            {
              title: 'Théorème de l’énergie cinétique',
              formula: 'ΔE꜀ = ΣW(F)',
              explanation: 'La variation d’énergie cinétique entre deux positions égale le travail total des forces appliquées au système ponctuel, ou au centre de masse dans les conditions usuelles du cours.',
              parameters: 'ΔE꜀ : énergie cinétique finale moins initiale (J) ; W(F) : travail d’une force sur le trajet (J) ; la somme porte sur les forces considérées.',
              example: 'Si le travail total des forces sur un trajet vaut 16 J, alors la variation d’énergie cinétique sur ce trajet vaut 16 J.',
              result: 'L’énergie cinétique augmente de 16 J.'
            },
            {
              title: 'Énergie mécanique',
              formula: 'Eₘ = E꜀ + Eₚ',
              explanation: 'L’énergie mécanique est la somme de l’énergie cinétique et des énergies potentielles associées aux interactions conservatives retenues. Elle se conserve si le travail des forces non conservatives est nul.',
              parameters: 'Eₘ, E꜀, Eₚ : énergies mécanique, cinétique et potentielle (J) ; le zéro de l’énergie potentielle dépend du choix de référence.',
              example: 'Un objet possède E꜀ = 12 J et Eₚ = 8 J : Eₘ = 12 + 8.',
              result: 'Eₘ = 20 J. Cette valeur reste constante uniquement si les forces dissipatives ne fournissent pas de travail net.'
            },
            {
              title: 'Travail d’une force',
              formula: 'W = F⃗ · Δr⃗ = F Δr cos θ',
              explanation: 'Le travail est le produit scalaire de la force par le déplacement de son point d’application, projeté sur la force. Il est nul lorsque le déplacement est perpendiculaire à la force.',
              parameters: 'W : travail (J) ; F : force (N) ; Δr : déplacement (m) ; θ : angle entre la force et le déplacement. 1 J = 1 N·m.',
              example: 'Une force de 100 N déplace un objet de 5,0 m à 60° de sa direction : W = 100 × 5,0 × cos 60°.',
              result: 'W = 250 J : le travail est positif, l’énergie est fournie au système.'
            },
            {
              title: 'Puissance',
              formula: 'P = dW/dt = F⃗ · v⃗',
              explanation: 'La puissance mesure la rapidité avec laquelle une énergie est transférée ; elle peut être négative lors d’un freinage, ou nulle si la force est perpendiculaire à la vitesse.',
              parameters: 'P : puissance (W) ; W : travail (J) ; t : durée (s). 1 W = 1 J·s⁻¹.',
              example: 'Un moteur de 2 000 kg élève une charge de 4,0 m en 10 s : W = mgh ≈ 78 500 J.',
              result: 'P ≈ 7,8 × 10³ W ; à durée égale, plus la montée est rapide, plus la puissance est élevée.'
            },
            {
              title: 'Énergie potentielle de pesanteur',
              formula: 'Eₚ = m g y',
              explanation: 'L’énergie potentielle n’est définie qu’à une constante près : le zéro est conventionnel, mais les différences d’énergie potentielle sont indépendantes de ce choix.',
              parameters: 'Eₚ : énergie potentielle (J) ; m : masse (kg) ; g = 9,81 m·s⁻² ; y : hauteur au-dessus du point de référence (m).',
              example: 'Un objet de 2,0 kg placé 3,0 m au-dessus du niveau de référence : Eₚ = 2,0 × 9,81 × 3,0.',
              result: 'Eₚ ≈ 58,9 J.'
            },
            {
              title: 'Quantité de mouvement',
              formula: 'p⃗ = m v⃗',
              explanation: 'La quantité de mouvement est l’analogue vectoriel de la deuxième loi : dans un système fermé, la quantité de mouvement totale se conserve, quelle que soit l’évolution du mouvement.',
              parameters: 'p⃗ : quantité de mouvement (kg·m·s⁻¹) ; m : masse (kg) ; v⃗ : vitesse (m·s⁻¹).',
              example: 'Une balle de 0,20 kg à 30 m·s⁻¹ percute un chariot de 1,80 kg au repos ; ils restent solidaires.',
              result: 'v = 6,0 / 2,0 = 3,0 m·s⁻¹ ; l’énergie cinétique passe de 90 J à 9 J, la différence étant dissipée.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Work', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-1-work' },
            { title: 'OpenStax University Physics, vol. 1 — Kinetic Energy', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-2-kinetic-energy' },
            { title: 'OpenStax University Physics, vol. 1 — Work-Energy Theorem', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem' },
            { title: 'OpenStax University Physics, vol. 1 — Power', url: 'https://openstax.org/books/university-physics-volume-1/pages/7-4-power' },
            { title: 'OpenStax University Physics, vol. 1 — Potential Energy of a System', url: 'https://openstax.org/books/university-physics-volume-1/pages/8-1-potential-energy-of-a-system' },
            { title: 'OpenStax University Physics, vol. 1 — Conservation of Energy', url: 'https://openstax.org/books/university-physics-volume-1/pages/8-3-conservation-of-energy' },
            { title: 'OpenStax University Physics, vol. 1 — Linear Momentum', url: 'https://openstax.org/books/university-physics-volume-1/pages/9-1-linear-momentum' },
            { title: 'OpenStax University Physics, vol. 1 — Types of Collisions', url: 'https://openstax.org/books/university-physics-volume-1/pages/9-4-types-of-collisions' }
          ]
        }
      }
    ]
  },
  {
    id: 'mecanique-mouvement',
    title: 'Mécanique et mouvement',
    note: 'Un cours approfondi en vingt-neuf sections : référentiels, cinématique, lois de Newton, énergie, quantité de mouvement, rotation, gravitation et lois de Kepler, avec exercices et sources.',
    chapters: [
      {
        id: 'meca-referentiels-mouvement',
        title: 'Référentiels et mouvement relatif',
        field: 'Cours approfondi',
        summary: 'Décrire un mouvement exige un repère',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un mouvement est une relation entre des positions, non une propriété absolue. Le passager assis dans un train est au repos par rapport au wagon et se déplace à la vitesse du train par rapport au quai : les deux descriptions sont exactes, elles ne sont simplement pas équivalentes. <strong>Le mouvement relatif</strong> est le principe fondateur de toute la cinématique ; sans référentiel choisi, aucune vitesse ni aucune accélération n’a de sens (OpenStax, vol. 1, § 4.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un <strong>référentiel</strong> est le trio qui rend une description possible : un <strong>repère d’espace</strong> (origin, axes, sens et unité), un <strong>repère de temps</strong> (origine des dates, unité, sens de lecture) et un <strong>repère d’orientation</strong>. Solidement lié à des repères fixes, le référentiel terrestre est le plus employé en mécanique classique (OpenStax, vol. 1, § 3.1 et § 4.5).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CHANGEMENT DE RÉFÉRENTIEL EN MOUVEMENT UNIFORME</span>\n<math class="mathml-display" display="block" aria-label="v prime égale v moins la vitesse du référentiel en mouvement ; a prime égale a">\n<mtable>\n<mtr><mtd><mrow><msub><mi>v</mi><mi>R′</mi></msub><mo>=</mo><mover><mi>v</mi><mo>→</mo></mover><mo>−</mo><msub><mover><mi>v</mi><mo>→</mo></mover><mi>R</mi></msub></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>a</mi><mi>R′</mi></msub><mo>=</mo><mover><mi>a</mi><mo>→</mo></mover></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">si le référentiel R′ se déplace à vitesse constante par rapport à R, l’accélération est la même dans les deux référentiels</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ce résultat a une conséquence capitale : si l’accélération est identique dans deux référentiels en mouvement relatif uniforme, alors une force qui vaut <span class="math">m a⃗</span> dans l’un vaut <span class="math">m a⃗</span> dans l’autre. Les <strong>référentiels galiléens</strong> sont précisément les référentiels dans lesquels un corps sur lequel ne s’exerce aucune force conserve un mouvement rectiligne uniforme ; tous les référentiels galiléens sont en mouvement rectiligne uniforme les uns par rapport aux autres (OpenStax, vol. 1, § 5.2).</p>\n<div class="callout"><strong>La première loi de Newton, et le critère qui la définit</strong><p>Newton a formulé la première loi comme un principe d’inertie : un corps au repos ou en mouvement rectiligne uniforme le reste tant qu’aucune force extérieure résultante n’agit sur lui. Mais l’énoncé suppose une notion implicite : celle de référentiel galiléen. Un référentiel est galiléen s’il est possible d’y formuler les lois de Newton sans faire intervenir de forces fictives ; le référentiel terrestre en est une approximation satisfaisante à l’échelle d’un bâtiment, mais pas à celle de la rotation complète de la Terre (OpenStax, vol. 1, § 5.2).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>relativité galiléenne</strong> en découle directement : les lois de la mécanique newtonienne ont la même forme dans tous les référentiels galiléens. Aucune expérience purement mécanique conduite dans un laboratoire en mouvement rectiligne uniforme ne permet donc de détecter ce mouvement lui-même. Pour le détecter, il faudrait une expérience sensible aux vitesses élevées face à celle de la lumière — c’est exactement ce que fait la relativité restreinte, dont la formulation première est un prolongement de la cinématique galiléenne (OpenStax, vol. 1, § 4.5).</p>'
        }
      },
      {
        id: 'meca-position-deplacement',
        title: 'Position, déplacement et vitesse',
        field: 'Cours approfondi',
        summary: 'Position, déplacement et vitesse moyenne',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>position</strong> <span class="math">x(t)</span> est la coordonnée d’un point sur un axe orienté : elle est définie à une longueur près de l’origine, et son unité est le mètre. Le <strong>déplacement</strong> <span class="math">Δx = x(t₂) − x(t₁)</span> est l’intervalle entre deux positions : il se calcule directement par différence. À ne pas confondre avec la <strong>distance parcourue</strong>, qui cumule les longueurs effectivement parcourues et ne peut qu’être supérieure ou égale à la valeur absolue du déplacement (OpenStax, vol. 1, § 3.1).</p>\n<div class="formula-block">\n<span class="formula-label">VITESSE MOYENNE</span>\n<math class="mathml-display" display="block" aria-label="v barre égale delta x sur delta t">\n<mrow><mover><msub><mi>v</mi><mtext>moy</mtext></msub><mo>¯</mo></mover><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>x</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La vitesse moyenne est <em>une moyenne sur un intervalle</em> : elle ne dit rien de ce qui s’est passé entre les deux instants. Un trajet aller-retour sur une distance <span class="math">d</span>, effectué en <span class="math">2d</span> de distance parcourue et <span class="math">T</span> de durée, donne une vitesse moyenne <em>scalaire</em> <span class="math">2d/T</span> mais une vitesse moyenne <em>vectorielle</em> nulle, puisque le déplacement total est nul (OpenStax, vol. 1, § 3.1).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ</strong><span class="math">x₁ = 12,0 m ; x₂ = 12,0 m ; t₁ = 2,0 s ; t₂ = 4,0 s</span><span class="math">Δx = 0 → v̄ = 0 m·s⁻¹</span><span class="math">distance parcourue = 10,0 m → vitesse moyenne scalaire = 5,0 m·s⁻¹</span></div>\n<div class="callout"><strong>Lire une aire, pas une hauteur</strong><p>Sur un graphique <span class="math">x(t)</span>, la vitesse est la <strong>pente</strong> de la courbe ; le déplacement est l’<strong>aire</strong> sous la courbe, signée. Une portion de graphique au-dessus de l’axe correspond à un déplacement positif ; en dessous, à un déplacement négatif. C’est cette lecture d’aire qui permet de traiter graphiquement des mouvements dont aucune expression algébrique n’est connue (OpenStax, vol. 1, § 3.4).</p></div>'
        }
      },
      {
        id: 'meca-vitesse-acceleration',
        title: 'Vitesse et accélération instantanées',
        field: 'Cours approfondi',
        summary: 'Des grandeurs instantanées : dériver pour mesurer l’instant',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La vitesse moyenne lisse le mouvement sur un intervalle. Pour décrire ce qui se passe <em>à un instant précis</em>, on prend la limite de la vitesse moyenne lorsque la durée tend vers zéro : c’est la <strong>vitesse instantanée</strong>, qui s’écrit <span class="math">v(t) = dx/dt</span>. L’accélération instantanée se définit de même comme la dérivée de la vitesse, <span class="math">a(t) = dv/dt</span>. L’accélération mesure donc une <strong>variation de vitesse</strong>, non une vitesse : un objet peut avoir une vitesse constante et une accélération non nulle (OpenStax, vol. 1, § 3.2 et § 3.3).</p>\n<div class="formula-block">\n<span class="formula-label">VITESSE ET ACCÉLÉRATION INSTANTANÉES</span>\n<math class="mathml-display" display="block" aria-label="v égale la dérivée de x par rapport à t ; a égale la dérivée de v par rapport à t">\n<mtable>\n<mtr><mtd><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<div class="formula-block formula-accent">\n<span class="formula-label">GRAPHIQUES DE VITESSE ET D’ACCÉLÉRATION</span>\n<math class="mathml-display" display="block" aria-label="v égale la pente de la courbe x(t) ; a égale la pente de la courbe v(t) ; Delta x égale l’aire sous la courbe v(t)">\n<mtable>\n<mtr><mtd><mrow><mi>v</mi><mo>=</mo><mtext>pente de</mtext><mspace width="0.2em"/><mi>x</mi><mo>(</mo><mi>t</mi><mo>)</mo></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>a</mi><mo>=</mo><mtext>pente de</mtext><mspace width="0.2em"/><mi>v</mi><mo>(</mo><mi>t</mi><mo>)</mo></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>Δ</mi><mi>x</mi><mo>=</mo><mtext>aire sous la courbe</mtext><mspace width="0.2em"/><mi>v</mi><mo>(</mo><mi>t</mi><mo>)</mo></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<div class="callout"><strong>Les quatre graphiques d’un même mouvement</strong><p>À partir de <span class="math">a(t)</span> on obtient <span class="math">v(t)</span> par intégration, puis <span class="math">x(t)</span> par une seconde intégration ; à l’inverse, <span class="math">x(t)</span> se dérive deux fois pour retrouver <span class="math">a(t)</span>. La courbe <span class="math">a(t)</span> est donc le résumé le plus compact d’un mouvement : constante, elle donne une vitesse linéaire et une position parabolique ; rectangulaire, elle donne une vitesse en dents de scie ; sinusoïdale, elle donne une vitesse sinusoïdale — cas de l’oscillateur harmonique (OpenStax, vol. 1, § 3.6).</p></div>'
        }
      },
      {
        id: 'meca-acceleration-constante',
        title: 'Mouvement à accélération constante',
        field: 'Cours approfondi',
        summary: 'Les cinq équations du mouvement uniformément accéléré',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lorsque l’accélération est constante, le mouvement obéit à un système de cinq équations cinématiques, obtenues par intégrations successives de <span class="math">a = dv/dt</span>. Elles ne contiennent ni <span class="math">t</span> sous forme dérivée, ni <span class="math">a</span> ; aucune n’est utilisable si <span class="math">a</span> varie (OpenStax, vol. 1, § 3.4).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">MOUVEMENT À ACCÉLÉRATION CONSTANTE</span>\n<math class="mathml-display" display="block" aria-label="les cinq équations cinématiques du mouvement à accélération constante">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mo>+</mo><mi>a</mi><mi>t</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>v</mi><mtext>moy</mtext></msub><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>+</mo><msub><mi>v</mi><mi>f</mi></msub></mrow><mn>2</mn></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>x</mi><mi>f</mi></msub><mo>=</mo><msub><mi>x</mi><mi>i</mi></msub><mo>+</mo><msub><mi>v</mi><mi>i</mi></msub><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><mi>a</mi><mi>Δ</mi><mi>x</mi></mrow></msqrt></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>Δ</mi><mi>x</mi><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">i : initial (t = 0) ; f : final ; Δx = x<sub>f</sub> − x<sub>i</sub> ; l’accélération est algébrique, son signe suit l’axe choisi</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le choix de l’équation se fait <strong>par élimination</strong> : on repère d’abord la grandeur inconnue, puis on choisit l’équation où elle n’apparaît pas. Pour retrouver une vitesse finale à partir de la position initiale, de la position finale, de la vitesse initiale et de l’accélération — sans le temps — on utilise la quatrième. Les trois dernières équations sont obtenues en éliminant le temps des deux premières ; c’est pourquoi elles ne contiennent pas <span class="math">t</span> (OpenStax, vol. 1, § 3.4).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ</strong><span class="math">v<sub>i</sub> = 12,0 m·s⁻¹ ; a = 3,0 m·s⁻² ; x<sub>i</sub> = 0 ; t = 4,0 s</span><span class="math">x(4) = 12,0 × 4,0 + ½ × 3,0 × 4,0² = 48 + 24 = 72 m</span><span class="math">v(4) = 12,0 + 3,0 × 4,0 = 24,0 m·s⁻¹</span></div>\n<div class="callout"><strong>Le piège de la vitesse moyenne sur un aller-retour</strong><p>L’égalité <span class="math">v̄ = (v<sub>i</sub> + v<sub>f</sub>)/2</span> ne vaut que si l’accélération est constante sur l’intervalle. Pour un aller-retour où la vitesse passe de <span class="math">+10</span> à <span class="math">−10 m·s⁻¹</span>, la vitesse moyenne sur l’intervalle est bien zéro, ce qui est cohérent ; mais l’<em>accélération moyenne</em> n’est pas nulle. C’est le changement de signe de <span class="math">v</span>, source de l’accélération, qui distingue les deux notions (OpenStax, vol. 1, § 3.3).</p></div>'
        }
      },
      {
        id: 'meca-chute-libre',
        title: 'La chute libre',
        field: 'Cours approfondi',
        summary: 'La chute libre : une accélération indépendante de la masse',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>chute libre</strong> est le mouvement d’un corps qui tombe sous l’effet du seul poids, sans frottement ni résistance de l’air. Sa définition contient une négation : est en chute libre un objet qui <em>monte</em> aussi, tant qu’aucune autre force n’agit sur lui. Galilée a établi expérimentalement que tous les corps, quelle que soit leur masse, tombent avec la même accélération en l’absence de résistance ; c’est un des résultats fondateurs de la mécanique moderne (OpenStax, vol. 1, § 3.5).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CHUTE LIBRE — AXE VERTICAL ORIENTÉ VERS LE HAUT</span>\n<math class="mathml-display" display="block" aria-label="y égale y zéro moins g t au carré demi ; v égale v zéro moins g t ; a égale moins g">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mo>−</mo><mi>g</mi><mi>t</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>a</mi><mo>=</mo><mo>−</mo><mi>g</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">g ≈ 9,81 m·s⁻² en moyenne sur la surface terrestre ; l’axe est orienté vers le haut, d’où le signe négatif</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La valeur de <span class="math">g</span> n’est pas rigoureusement la même partout : OpenStax indique <span class="math">g = 9,81 m·s⁻²</span> en moyenne, avec une variation de <span class="math">9,78</span> à <span class="math">9,83 m·s⁻²</span> selon la latitude, l’altitude, la géologie locale et le relief. Sur la Lune, la même source donne <span class="math">1,62 m·s⁻²</span>, soit environ un sixième de la valeur terrestre : c’est ce qu’a démontré l’expérience du marteau et de la plume réalisée en 1971, sans atmosphère, où les deux objets atteignent le sol au même instant (OpenStax, vol. 1, § 3.5 et § 5.4).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · TEMPS DE CHUTE</strong><span class="math">y₀ = 45,0 m ; v₀ = 0</span><span class="math">0 = 45,0 − ½ × 9,81 × t² → t = √(2 × 45,0 / 9,81)</span><span class="math">t ≈ 3,03 s ; v = 9,81 × 3,03 ≈ 29,7 m·s⁻¹</span></div>\n<div class="callout"><strong>Pourquoi une balle et une plume ne tombent-elles pas ensemble ?</strong><p>Parce que la résistance de l’air n’est plus négligeable. La force de frottement fluids croît avec la vitesse et l’aire frontale, et décroît avec la masse : un corps léger et étendu est freiné bien davantage. Dans le vide, en revanche, aucun objet ne tombe plus vite qu’un autre (OpenStax, vol. 1, § 3.5 et § 6.4).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En <strong>chute verticale</strong>, on applique les équations de la section 04 avec <span class="math">a = −g</span> et une vitesse initiale nulle ou donnée. Une <strong>montée verticale</strong> n’est qu’une chute libre en sens inverse : tant que le corps monte, <span class="math">v</span> reste positive puis s’annule au sommet, où l’accélération ne change pas (OpenStax, vol. 1, § 3.5).</p>'
        }
      },
      {
        id: 'meca-vecteurs-composantes',
        title: 'Vecteurs et composantes',
        field: 'Cours approfondi',
        summary: 'Passer d’une dimension à deux : vecteurs et composantes',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une grandeur <strong>vectorielle</strong> possède une direction et un sens : un déplacement, une vitesse, une accélération, une force. Une grandeur <strong>scalaire</strong> n’a qu’une valeur : une durée, une distance, une masse, une énergie. En deux dimensions, une <strong>position</strong> se décrit par un vecteur <span class="math">r⃗ = x î + y ĵ</span>, décomposé sur deux axes orthonormés (OpenStax, vol. 1, § 4.1 et § 4.2).</p>\n<div class="formula-block">\n<span class="formula-label">DÉCOMPOSITION ET RECOMPOSITION</span>\n<math class="mathml-display" display="block" aria-label="module du vecteur A égale racine de Ax au carré plus Ay au carré ; angle égale arctan de Ay sur Ax">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mo>|</mo><mover><mi>A</mi><mo>→</mo></mover><mo>|</mo><mo>=</mo><msqrt><mrow><msubsup><mi>A</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>A</mi><mi>y</mi><mn>2</mn></msubsup></mrow></msqrt></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>θ</mi><mo>=</mo><mi>arctan</mi><mfrac><msub><mi>A</mi><mi>y</mi></msub><msub><mi>A</mi><mi>x</mi></msub></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">â = A⃗/|A⃗| est le vecteur unitaire ; θ est mesuré entre A⃗ et l’axe horizontal, dans le sens trigonométrique</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En deux dimensions, la vitesse est <span class="math">v⃗ = v<sub>x</sub> î + v<sub>y</sub> ĵ</span> et l’accélération <span class="math">a⃗ = a<sub>x</sub> î + a<sub>y</sub> ĵ</span>. Les composantes <span class="math">v<sub>x</sub></span> et <span class="math">v<sub>y</sub></span> ont une évolution <strong>indépendante</strong> l’une de l’autre : c’est le principe de décomposition qui permet de traiter un mouvement plan comme deux mouvements rectilignes distincts, l’un horizontal, l’autre vertical (OpenStax, vol. 1, § 4.2).</p>\n<div class="callout"><strong>L’addition vectorielle n’est pas commutative</strong><p>La somme de deux vecteurs se fait par la règle du parallélogramme, pas en additionnant les normes. Un déplacement de 3 m vers l’est suivi de 4 m vers le nord mesure 5 m (le triplet 3-4-5) et fait un angle de <span class="math">arctan(4/3) ≈ 53°</span> avec l’est. Inverser l’ordre ne change ni la norme ni la direction finale, mais change les positions intermédiaires parcourues — c’est pourquoi l’ordre d’application des forces compte lors d’un bilan (OpenStax, vol. 1, § 4.1).</p></div>'
        }
      },
      {
        id: 'meca-lancer-projectiles',
        title: 'Le lancer de projectiles',
        field: 'Cours approfondi',
        summary: 'Deux mouvements indépendants, une seule trajectoire',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un <strong>projectile</strong> est un corps lancé dans l’air puis soumis à la seule accélération de la pesanteur. En orientant l’axe <em>y</em> vers le haut, OpenStax pose <span class="math">a<sub>y</sub> = −g = −9,8 m·s⁻²</span> et <span class="math">a<sub>x</sub> = 0</span> : faute de résistance de l’air, la composante horizontale de la vitesse reste constante et la composante verticale suit exactement les équations de la chute libre (OpenStax, vol. 1, § 4.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">PORTÉE, TEMPS DE VOL ET HAUTEUR MAXIMALE</span>\n<math class="mathml-display" display="block" aria-label="portée égale v zéro au carré sin de deux alpha sur g ; temps de vol égale deux v zéro sin alpha sur g ; hauteur max égale v zéro au carré sin au carré de alpha sur deux g">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>sin</mo><mn>2</mn><mi>α</mi></mrow><mi>g</mi></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>0</mn></msub><mo>sin</mo><mi>α</mi></mrow><mi>g</mi></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>y</mi><mtext>max</mtext></msub><mo>=</mo><mfrac><mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mo>sin</mo><mi>α</mi></mrow><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">α : angle de tir au-dessus de l’horizontal ; ces résultats supposent un tir et un impact à la même hauteur</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Trois conséquences se lisent immédiatement dans ces expressions. La portée est maximale pour <span class="math">α = 45°</span>, puisque <span class="math">sin 2α</span> est maximal pour <span class="math">2α = 90°</span>. La portée croît comme le <strong>carré</strong> de la vitesse initiale : doubler <span class="math">v₀</span> multiplie la portée par quatre. Enfin, à vitesse fixée, un tir à <span class="math">45° + δ</span> atteint la même portée qu’un tir à <span class="math">45° − δ</span>, mais avec une hauteur et un temps de vol supérieurs : c’est le compromis fondamental du sport (OpenStax, vol. 1, § 4.3).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · LANCER À 45°</strong><span class="math">v₀ = 20,0 m·s⁻¹ ; α = 45° ; g = 9,81 m·s⁻²</span><span class="math">R = 20,0² × sin 90° / 9,81 = 400 / 9,81 ≈ 40,8 m</span><span class="math">y<sub>max</sub> = 400 × 0,5 / (2 × 9,81) ≈ 10,2 m</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La trajectoire est une <strong>parabole</strong> dont l’équation s’obtient en éliminant le temps entre <span class="math">x = v₀ cos α · t</span> et <span class="math">y = v₀ sin α · t − ½ g t²</span>. L’absence de résistance de l’air est l’hypothèse qui la rend exacte ; dès qu’elle intervient, la trajectoire s’aplatit et la portée diminue (OpenStax, vol. 1, § 4.3).</p>'
        }
      },
      {
        id: 'meca-mouvement-circulaire',
        title: 'Le mouvement circulaire',
        field: 'Cours approfondi',
        summary: 'Mouvement circulaire : une accélération qui ne s’éteint jamais',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans le <strong>mouvement circulaire uniforme</strong>, un point se déplace à vitesse constante sur un cercle de rayon <span class="math">r</span>. Sa norme de vitesse est constante, mais la <em>direction</em> de son vecteur vitesse change à chaque instant : l’accélération n’est donc pas nulle. OpenStax montre que deux triangles isocèles semblables conduisent à <span class="math">Δv/v = Δr/r</span>, d’où une accélération de norme <span class="math">v²/r</span> dirigée vers le centre : c’est l’<strong>accélération centripète</strong> (OpenStax, vol. 1, § 4.4).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">GRANDEURS DU MOUVEMENT CIRCULAIRE UNIFORME</span>\n<math class="mathml-display" display="block" aria-label="accélération centripète égale v au carré sur r ; période égale deux pi r sur v ; vitesse angulaire égale deux pi sur T">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>a</mi><mi>c</mi></msub><mo>=</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mi>r</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow><mi>v</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>v</mi><mo>=</mo><mi>r</mi><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mfrac><mi>r</mi><mi>T</mi></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>mouvement circulaire non uniforme</strong> ajoute une <strong>accélération tangentielle</strong> <span class="math">a<sub>t</sub> = r α</span>, due à la variation de la vitesse, à l’accélération centripète. Les deux composantes sont <strong>perpendiculaires</strong> : l’une suit le sens du mouvement, l’autre pointe vers le centre. L’accélération totale est alors l’hypoténuse d’un triangle rectangle, <span class="math">a = √(a<sub>c</sub>² + a<sub>t</sub>²)</span> (OpenStax, vol. 1, § 4.4).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · POINT SUR UNE ROUE</strong><span class="math">r = 0,50 m ; v = 6,0 m·s⁻¹ ; mouvement uniforme</span><span class="math">a<sub>c</sub> = 6,0² / 0,50 = 72,0 m·s⁻²</span><span class="math">T = 2π × 0,50 / 6,0 ≈ 0,52 s</span></div>\n<div class="callout"><strong>Pourquoi l’accélération centripète n’augmente-t-elle pas la vitesse ?</strong><p>Parce que <span class="math">a⃗</span> est <strong>perpendiculaire</strong> à <span class="math">v⃗</span> : son effet est de courber la trajectoire sans composer de vitesse dans le sens du mouvement. Un point en mouvement circulaire uniforme a donc une énergie cinétique constante — sa seule accélération ne change que la <em>direction</em> de la vitesse. Le travail de la force centripète sur un trajet circulaire complet est donc rigoureusement nul (OpenStax, vol. 1, § 4.4 et § 7.1).</p></div>'
        }
      },
      {
        id: 'meca-corps-libre',
        title: 'Forces et diagramme de corps libre',
        field: 'Cours approfondi',
        summary: 'Modéliser par les forces : le diagramme de corps libre',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une <strong>force</strong> est une interaction entre deux objets ; elle agit toujours sur un corps précis et dans une direction précise. À la exception de la pesanteur, toutes les forces étudiées ici supposent un <strong>contact direct</strong> avec l’objet. Leur unité SI est le <strong>newton</strong>, défini par <span class="math">1 N = 1 kg·m·s⁻²</span> (OpenStax, vol. 1, § 5.1 et § 5.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>diagramme de corps libre</strong> est l’outil central de la dynamique : il isole l’objet étudié et n’y figure <em>que</em> les forces qui s’exercent sur lui. OpenStax en énonce les règles — dessiner l’objet, inclure toutes les forces qui agissent sur lui sous forme vectorielle, ne pas inclure la résultante des forces, ne jamais faire figurer les deux forces d’un couple action-réaction sur le même diagramme, ne pas y représenter l’accélération ; si plusieurs objets interviennent, faire un diagramme par objet (OpenStax, vol. 1, § 5.7).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les forces à reconnaître dans un diagramme de corps libre, d’après les « Common Forces » d’OpenStax (vol. 1, § 5.6)</caption>\n<thead><tr><th scope="col">Force</th><th scope="col">Origine</th><th scope="col">Direction</th></tr></thead>\n<tbody>\n<tr><th scope="row">Poids <span class="math">mg</span></th><td>Attraction terrestre</td><td>Vers le centre de la Terre</td></tr>\n<tr><th scope="row">Réaction normale <span class="math">N</span></th><td>Contact avec un support</td><td>Perpendiculaire à la surface</td></tr>\n<tr><th scope="row">Tension <span class="math">T</span></th><td>Câble ou corde tendue</td><td>Le long du câble</td></tr>\n<tr><th scope="row">Force de ressort</th><td>Déformation d’un ressort</td><td>Vers la position de repos</td></tr>\n<tr><th scope="row">Frottement</th><td>Contact entre surfaces</td><td>Opposée au glissement</td></tr>\n<tr><th scope="row">Force appliquée</th><td>Action extérieure directe</td><td>Selon l’action</td></tr>\n</tbody>\n</table>\n</div>\n<div class="callout"><strong>L’erreur la plus fréquente</strong><p>Faire figurer <span class="math">N − mg</span> sur un diagramme : c’est faux, car ce sont deux forces distinctes dont l’effet se combine seulement au moment d’appliquer la deuxième loi. De même, la force de réaction du sol et le poids <em>ne s’annulent pas</em> nécessairement : ils s’annulent si et seulement si l’accélération verticale est nulle (OpenStax, vol. 1, § 5.7).</p></div>'
        }
      },
      {
        id: 'meca-premiere-loi',
        title: 'Première loi : l’inertie',
        field: 'Cours approfondi',
        summary: 'Première loi de Newton : le principe d’inertie',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un corps au repos reste au repos ; un corps en mouvement reste en mouvement rectiligne à vitesse constante, <em>à moins qu’une force extérieure résultante n’intervienne</em>. OpenStax souligne la répétition du verbe « reste » et précise que la vitesse reste constante <em>au sens vectoriel</em> : ni la norme ni la direction ne changent (OpenStax, vol. 1, § 5.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>inertie</strong> est la tendance d’un objet à conserver son état de mouvement, et elle est proportionnelle à sa masse. Plus la masse est grande, plus il faut une force importante pour modifier le mouvement : un piano est plus difficile à déplacer qu’une chaise, non parce qu’il est plus « lourd » au sens courant, mais parce que son <strong>masse inertielle</strong> est plus grande (OpenStax, vol. 1, § 5.2 et § 5.3).</p>\n<div class="callout"><strong>Galilée et l’inertie</strong><p>La formulation de Newton prolonge une intuition qui fut d’abord celle de Galilée : sur un plan parfaitement lisse, un corps en mouvement ne s’arrêterait jamais. Le frottement masque cette idée : un palet de hockey glisse loin sur une table de jeu à air, précisément parce que l’air souffle une couche qui supprime presque tout contact (OpenStax, vol. 1, § 5.2).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>équilibre</strong> est le cas particulier où la résultante des forces est nulle : le corps est alors au repos ou en mouvement rectiligne uniforme. Il peut donc être en mouvement sans qu’aucune force ne le « pousse » — c’est exactement le cas d’un satellite en orbite, où la gravitation fournit justement la force centripète nécessaire (OpenStax, vol. 1, § 5.2).</p>'
        }
      },
      {
        id: 'meca-deuxieme-loi',
        title: 'Deuxième loi : la résultante',
        field: 'Cours approfondi',
        summary: 'Deuxième loi de Newton : la force cause le changement de mouvement',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La deuxième loi établit la relation quantitative entre force et accélération. Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un système est égale à la masse du système multipliée par l’accélération de son centre de masse (OpenStax, vol. 1, § 5.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">DEUXIÈME LOI DE NEWTON — FORME VECTORIELLE</span>\n<math class="mathml-display" display="block" aria-label="somme des forces extérieures égale à la masse multipliée par le vecteur accélération du centre de masse">\n<mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mover><mi>F</mi><mo>→</mo></mover><mrow><mi>i</mi><mo>,</mo><mi>ext</mi></mrow></msub><mo>=</mo><mi>m</mi><msub><mover><mi>a</mi><mo>→</mo></mover><mtext>CM</mtext></msub></mrow>\n</math>\n<span class="formula-label">1 N = 1 kg·m·s⁻² ; « ext » rappelle que seules les forces extérieures au système choisi figurent dans la somme</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Trois lectures en découlent. L’accélération est <strong>proportionnelle</strong> à la résultante des forces. Elle est <strong>inversement proportionnelle</strong> à la masse : doubler la force double l’accélération, doubler la masse la divise par deux. Elle est dirigée dans le sens de la résultante, jamais contre elle. Et comme les forces sont vectorielles, il suffit de choisir deux axes — en général un horizontal et un vertical — et d’écrire une équation scalaire par axe (OpenStax, vol. 1, § 5.3).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ</strong><span class="math">m = 1 500 kg ; ΣF⃗ = 3 000 N ; direction horizontale, pas de frottement</span><span class="math">a = ΣF / m = 3 000 / 1 500 = 2,0 m·s⁻²</span></div>\n<div class="callout"><strong>La masse inertielle n’est pas la masse gravitationnelle</strong><p>Dans <span class="math">F⃗ = ma⃗</span>, <em>m</em> est la <strong>masse inertielle</strong> : elle mesure la résistance au changement de mouvement. La masse qui apparaît dans <span class="math">w = mg</span> est la <strong>masse gravitationnelle</strong> : elle mesure l’intensité de l’attraction terrestre. L’expérience de Pound et de Rebika a établi, par mesure très précise de la période d’un pendule, que ces deux masses sont égales aux mieux métrologiquement — fait remarquable, et non une simple évidence (OpenStax, vol. 1, § 5.3).</p></div>'
        }
      },
      {
        id: 'meca-masse-poids',
        title: 'Masse, poids et poids apparent',
        field: 'Cours approfondi',
        summary: 'Masse et poids : deux grandeurs à ne pas confondre',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Masse et poids sont employés indifféremment dans le langage courant — un dossier médical indique un « poids » en kilogrammes, alors que l’unité correcte serait le newton. En physique, la distinction est fondamentale. Le <strong>poids</strong> est l’attraction de la Terre : il dépend de la distance au centre de la Terre. La <strong>masse</strong> est une quantité de matière : elle ne varie pas avec le lieu (OpenStax, vol. 1, § 5.4).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">MASSE ET POIDS</span>\n<math class="mathml-display" display="block" aria-label="w vecteur égale m g vecteur ; en scalaire w égale m g ; sur la Terre g vaut 9,80 mètres par seconde carrée">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mover><mi>w</mi><mo>→</mo></mover><mo>=</mo><mi>m</mi><mover><mi>g</mi><mo>→</mo></mover></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>w</mi><mo>=</mo><mi>m</mi><mi>g</mi><mspace width="0.2em"/><mo>avec</mo><mspace width="0.2em"/><mi>g</mi><mo>=</mo><mn>9,80</mn><mspace width="0.2em"/><mi mathvariant="normal">m·s⁻²</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">une masse de 1,00 kg pèse 9,80 N sur Terre, et environ 1,6 N sur la Lune, où OpenStax donne g = 1,62 m·s⁻²</span>\n</div>\n<div class="callout"><strong>« Masse » et « poids » : ce que mesure une balance</strong><p>Un poids apparent de zéro est une <strong>apesanteur</strong> : l’astronaute n’est pas devenu plus léger, il a simplement cessé de peser sur le fauteuil (OpenStax, vol. 1, § 5.4).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>poids apparent</strong> — ce que mesure une balance, c’est-à-dire la <em>réaction normale</em> — se calcule dans un référentiel accéléré. Dans un ascenseur : <span class="math">N = m(g ± a)</span>, avec le signe <em>plus</em> pour une montée accélérée, <em>moins</em> pour une descente accélérée et <span class="math">g</span> dans un ascenseur en mouvement uniforme (OpenStax, vol. 1, § 5.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un corps qui tombe dans l’air n’est jamais en chute libre parfaite : la résistance de l’air s’oppose toujours à la chute, et l’accélération obtenue est inférieure à <span class="math">g</span>. C’est le sens du terme <em>chute libre</em> qu’OpenStax rappelle : la seule force agissant doit être le poids (OpenStax, vol. 1, § 5.4).</p>'
        }
      },
      {
        id: 'meca-troisieme-loi',
        title: 'Troisième loi : action et réaction',
        field: 'Cours approfondi',
        summary: 'Troisième loi de Newton : des forces égales sur des corps différents',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Quand deux objets interagissent, la force que le premier exerce sur le second et celle que le second exerce sur le premier sont <strong>égales en module et opposées en direction</strong>. OpenStax formalise cette symétrie par <span class="math">F⃗<sub>21</sub> = −F⃗<sub>12</sub></span> (OpenStax, vol. 1, § 5.5 et § 9.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ACTION ET RÉACTION</span>\n<math class="mathml-display" display="block" aria-label="F deux un égale moins F un deux ; m un a un égale moins m deux a deux">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mover><mi>F</mi><mo>→</mo></mover><mn>21</mn></msub><mo>=</mo><mo>−</mo><msub><mover><mi>F</mi><mo>→</mo></mover><mn>12</mn></msub></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>a</mi><mo>→</mo></mover><mn>1</mn></msub><mo>=</mo><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mover><mi>a</mi><mo>→</mo></mover><mn>2</mn></msub></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">l’indice indique le corps sur lequel la force s’exerce ; 2 sur 1, donc la force subie par le corps 1</span>\n</div>\n<div class="callout"><strong>Pourquoi ces deux forces ne s’annulent-elles pas ?</strong><p>Parce qu’elles ne s’exercent <em>pas sur le même corps</em>. <span class="math">F<sub>21</sub></span> agit sur le corps 1, <span class="math">F<sub>12</sub></span> sur le corps 2 : leur somme vectorielle n’a aucun sens dans un diagramme de corps libre, où l’on ne fait figurer que les forces agissant sur <em>un</em> objet. C’est pour cette raison que la règle du diagramme de corps libre interdit d’y tracer les deux membres d’un couple action-réaction (OpenStax, vol. 1, § 5.7 et § 9.3).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les forces sont égales en module, mais les <strong>accélérations</strong> ne le sont pas : <span class="math">a<sub>1</sub>/a<sub>2</sub> = m<sub>2</sub>/m<sub>1</sub></span>. Une balle de baseball et le ballon qu’elle frappe subissent des forces d’intensités identiques, mais la balle, beaucoup plus légère, acquiert une accélération bien plus grande (OpenStax, vol. 1, § 9.3).</p>'
        }
      },
      {
        id: 'meca-methode-newton',
        title: 'Résoudre un problème newtonien',
        field: 'Cours approfondi',
        summary: 'La méthode en cinq étapes',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">OpenStax propose une stratégie explicite pour appliquer les lois de Newton. Elle est stable, indépendante de l’énoncé, et c’est elle qui évite la majorité des erreurs de raisonnement (OpenStax, vol. 1, § 6.1).</p>\n<ol class="method-list" style="max-width:730px;margin:0 0 16px;padding-left:1.2rem;color:#39453d;line-height:1.7">\n<li style="margin-bottom:.7rem"><strong>Identifier le système étudié.</strong><span>Définir précisément l’objet dont on cherche le mouvement. Si plusieurs objets interagissent, faire <em>un diagramme par objet</em> : c’est cette séparation qui autorise ensuite la conservation de la quantité de mouvement (section 23).</span></li>\n<li style="margin-bottom:.7rem"><strong>Dessiner le diagramme de corps libre.</strong><span>Représenter toutes les forces <em>externes</em> agissant sur cet objet, avec leur sens et, si possible, leur longueur proportionnelle. Ne jamais y tracer la résultante ni l’accélération.</span></li>\n<li style="margin-bottom:.7rem"><strong>Choisir les axes.</strong><span>Un axe vertical et un axe horizontal suffisent dans la quasi-totalité des cas. Orienter l’axe horizontal dans le sens du mouvement attendu simplifie le signe de <span class="math">a<sub>x</sub></span>.</span></li>\n<li style="margin-bottom:.7rem"><strong>Écrire la deuxième loi sur chaque axe.</strong><span>Une équation pour <span class="math">x</span>, une pour <span class="math">y</span>. Décomposer au préalable toute force oblique, par exemple <span class="math">F<sub>x</sub> = F cos θ</span> et <span class="math">F<sub>y</sub> = F sin θ</span>.</span></li>\n<li style="margin-bottom:.7rem"><strong>Résoudre, puis vérifier.</strong><span>Utiliser les équations cinématiques de la section 04 si le temps ou la position interviennent. Contrôler le signe, l’unité et l’ordre de grandeur du résultat, et vérifier que le cas limite attendu est bien retrouvé.</span></li>\n</ol>\n<h3>Les erreurs fréquentes à éviter</h3>\n<ul class="mistake-list" style="max-width:730px;margin:0 0 16px;padding-left:1.2rem;color:#39453d;line-height:1.7">\n<li style="margin-bottom:.7rem"><strong>Ajouter une force qui n’existe pas :</strong> la « force du mouvement » n’est pas une force. C’est le référentiel choisi qui définit la vitesse, pas une force qui la crée.</li>\n<li style="margin-bottom:.7rem"><strong>Faire figurer la résultante sur le diagramme :</strong> <span class="math">ΣF⃗</span> est une <em>somme</em>, elle appartient à l’équation, pas au schéma des forces.</li>\n<li style="margin-bottom:.7rem"><strong>Poser les deux forces d’un couple action-réaction sur le même diagramme :</strong> elles s’exercent sur deux corps différents et ne peuvent ni s’annuler ni figurer ensemble.</li>\n<li style="margin-bottom:.7rem"><strong>Négliger le poids dans un mouvement supposé horizontal :</strong> même « dans le vide », la pesanteur subsiste et modifie la réaction normale du support, donc le frottement disponible.</li>\n<li style="margin-bottom:.7rem"><strong>Oublier les unités :</strong> tonnes, centimètres et kilomètres par heure sont la source d’erreur la plus fréquente ; convertir avant tout calcul.</li>\n</ul>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · PALETTE SUR UN PLAN HORIZONTAL</strong><span class="math">m = 500 kg ; F appliquée = 1 500 N ; μ<sub>k</sub> = 0,20 ; g = 9,81 m·s⁻²</span><span class="math">N = mg = 500 × 9,81 = 4 905 N</span><span class="math">f<sub>k</sub> = μ<sub>k</sub>N = 0,20 × 4 905 = 981 N</span><span class="math">a = (1 500 − 981) / 500 = 1,04 m·s⁻²</span></div>'
        }
      },
      {
        id: 'meca-frottement',
        title: 'Le frottement',
        field: 'Cours approfondi',
        summary: 'Le frottement : statique, cinétique, et une force qui s’ajuste',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le frottement est une force qui s’oppose au <strong>mouvement relatif</strong> entre deux systèmes en contact. Son intensité dépend des surfaces et de la pression exercée entre elles, et non de l’aire de contact apparente. On distingue le frottement <strong>statique</strong>, entre deux systèmes au repos l’un par rapport à l’autre, du frottement <strong>cinétique</strong>, lorsqu’ils glissent l’un sur l’autre (OpenStax, vol. 1, § 6.2).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">FROTTEMENT STATIQUE ET CINÉTIQUE</span>\n<math class="mathml-display" display="block" aria-label="frottement statique inférieur ou égal à mu s fois N ; frottement cinétique égale mu k fois N ; le frottement statique s’ajuste à la valeur demandée">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>f</mi><mi>s</mi></msub><mo>≤</mo><msub><mi>μ</mi><mi>s</mi></msub><mi>N</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>f</mi><mi>k</mi></msub><mo>=</mo><msub><mi>μ</mi><mi>k</mi></msub><mi>N</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">N : réaction normale ; μ<sub>s</sub> et μ<sub>k</sub> : coefficients de frottement, dépendant des deux matériaux en contact</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La différence essentielle entre les deux est une différence de <strong>nature</strong>, non seulement de valeur. Le frottement cinétique a une intensité <em>fixe</em>, <span class="math">μ<sub>k</sub>N</span>. Le frottement statique est une force <em>qui s’adapte</em> : il croît exactement comme nécessaire pour équilibrer la force qui tend à faire glisser, jusqu’à atteindre sa valeur maximale <span class="math">μ<sub>s</sub>N</span>. C’est pourquoi un meuble lourd est difficile à déplacer mais se déplace <em>plus</em> facilement une fois en mouvement, le frottement passant brusquement de <span class="math">μ<sub>s</sub></span> à <span class="math">μ<sub>k</sub></span> avec <span class="math">μ<sub>s</sub> &gt; μ<sub>k</sub></span> (OpenStax, vol. 1, § 6.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ce caractère adaptatif a une conséquence de méthode : dans un problème de statique, si l’on cherche à savoir si le système glisse, on compare la force réellement nécessaire à la force maximale disponible, <span class="math">μ<sub>s</sub>N</span>. Tant que la force appliquée reste inférieure, le corps ne bouge pas et l’accélération est nulle (OpenStax, vol. 1, § 6.2).</p>\n<div class="callout"><strong>La classe des forces dissipatives</strong><p>Frottement sec, résistance de l’air et traînée sont des forces non conservatives : leur travail sur un trajet fermé est <em>négatif et non nul</em>. L’énergie mécanique ne se conserve donc pas en leur présence, et l’on parle de forces dissipatives. Leur intensité dépend en général de la vitesse — d’où une vitesse limite, atteinte quand la force de frottement égale la force motrice (OpenStax, vol. 1, § 6.4 et § 8.2).</p></div>'
        }
      },
      {
        id: 'meca-force-centripete',
        title: 'La force centripète',
        field: 'Cours approfondi',
        summary: 'Force centripète : nommer une force par son effet',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans un mouvement circulaire, l’accélération est dirigée vers le centre : la force qui la produit est donc appelée <strong>force centripète</strong>. OpenStax précise qu’il ne s’agit pas d’une nouvelle force, mais du <em>rôle</em> que joue la résultante des forces réelles. Elle peut être fournie par la tension d’une corde, par la gravitation, par le frottement des patins, ou par la réaction normale d’une route inclinée (OpenStax, vol. 1, § 6.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">FORCE CENTRIPÈTE — DEUX EXPRESSIONS ÉQUIVALENTES</span>\n<math class="mathml-display" display="block" aria-label="force centripète égale m v au carré sur r, égale m r omega au carré">\n<mrow><msub><mover><mi>F</mi><mo>→</mo></mover><mi>c</mi></msub><mo>=</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mi>m</mi><mi>r</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux conséquences sont à retenir. D’abord, la force centripète est <strong>perpendiculaire</strong> à la vitesse : elle ne modifie pas la norme de <span class="math">v⃗</span>, seulement sa direction. Ensuite, à force donnée, le rayon de courbure est d’autant plus petit que la vitesse est grande : <span class="math">r = mv²/F<sub>c</sub></span>. Une courbe serrée à grande vitesse exige donc une force nettement plus importante (OpenStax, vol. 1, § 6.3).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · VIRAGE À PALIER (OpenStax, vol. 1, exemple 6.15)</strong><span class="math">m = 900 kg ; r = 500 m ; v = 25,0 m·s⁻¹ ; route horizontale</span><span class="math">F<sub>c</sub> = 900 × 25,0² / 500 = 1 125 N</span><span class="math">μ<sub>s,min</sub> = F<sub>c</sub> / mg = 1 125 / (900 × 9,81) ≈ 0,127</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Sur une <strong>route inclinée</strong> (« piste déversée »), une partie du poids fournit la force centripète, ce qui réduit la part revenant au frottement : le virage devient possible à plus grande vitesse, ou avec un adhérence plus faible. L’inclinaison d’un virage est donc un choix d’ingénierie directement dicté par cette relation (OpenStax, vol. 1, § 6.3).</p>\n<div class="callout"><strong>« Centripète » n’est pas un nom de force</strong><p>La force centripète n’apparaît jamais dans un bilan de forces comme une force distincte : c’est le nom donné à la résultante lorsqu’elle pointe vers le centre de la trajectoire. Inversement, un satellite n’est pas « tiré » vers la Terre par une force particulière : il tombe simplement en permanence vers le centre, à chaque instant, pendant que son mouvement horizontal le fait dépasser la Terre (section 27).</p></div>'
        }
      },
      {
        id: 'meca-travail-force',
        title: 'Le travail d’une force',
        field: 'Cours approfondi',
        summary: 'Le travail : l’énergie transférée par une force',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le travail d’une force constante est le produit scalaire de cette force par le déplacement <em>de son point d’application</em>, projeté sur la force : <span class="math">W = F⃗ · Δr⃗ = F Δr cos θ</span>. Le travail est une <strong>grandeur scalaire signée</strong>, exprimée en joules ; il est nul si le déplacement est perpendiculaire à la force (OpenStax, vol. 1, § 7.1).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">TRAVAIL D’UNE FORCE CONSTANTE, PUIS D’UNE FORCE VARIABLE</span>\n<math class="mathml-display" display="block" aria-label="travail égale F d r cosinus theta ; pour une force variable, le travail est l’intégrale de F scalaire d r">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mi>W</mi><mo>=</mo><mover><mi>F</mi><mo>→</mo></mover><mo>·</mo><mover><mi>Δ</mi><mo>→</mo></mover><mover><mi>r</mi><mo>→</mo></mover><mo>=</mo><mi>F</mi><mi>Δ</mi><mi>r</mi><mo>cos</mo><mi>θ</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>W</mi><mo>=</mo><munder><mo>∫</mo><mrow><msub><mi>x</mi><mi>i</mi></msub><mi>→</mi><msub><mi>x</mi><mi>f</mi></msub></mrow></munder><msub><mi>F</mi><mi>x</mi></msub><mspace width="0.2em"/><mi>d</mi><mi>x</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">θ est l’angle entre la force et le déplacement ; 1 J = 1 N·m</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le signe du travail porte tout son sens. Un travail <strong>positif</strong> accélère le système ; un travail <strong>négatif</strong> le ralentit ; un travail <strong>nul</strong> ne modifie pas son énergie cinétique. C’est exactement le cas d’une force centripète sur un tour complet, toujours perpendiculaire au déplacement (OpenStax, vol. 1, § 7.1).</p>\n<div class="callout"><strong>Travail d’une force conservative : ne dépend que des extrémités</strong><p>Pour la pesanteur, le travail sur un trajet entre deux points ne dépend pas du chemin suivi : il vaut <span class="math">mg(y<sub>i</sub> − y<sub>f</sub>)</span>. Une montée de 2 m puis une descente de 2 m annule exactement le travail de la pesanteur — le nombre total d’unités de hauteur parcourues n’entre pas en compte, mais leur <em>somme algébrique</em> si (OpenStax, vol. 1, § 8.2).</p></div>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · FORCE À 60°</strong><span class="math">F = 100 N ; Δr = 5,0 m ; θ = 60°</span><span class="math">W = 100 × 5,0 × cos 60° = 100 × 5,0 × 0,50 = 250 J</span></div>'
        }
      },
      {
        id: 'meca-energie-cinetique',
        title: 'Énergie cinétique et théorème du travail',
        field: 'Cours approfondi',
        summary: 'De la vitesse à l’énergie : le théorème du travail-énergie',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>énergie cinétique</strong> d’un corps est l’énergie qu’il possède du fait de son mouvement : <span class="math">E<sub>c</sub> = ½ m v²</span>. Elle est proportionnelle au carré de la vitesse : doubler la vitesse multiplie l’énergie par quatre. Cette relation se déduit du théorème du travail-énergie, énoncé par OpenStax comme la variation d’énergie cinétique égale le travail total des forces (OpenStax, vol. 1, § 7.2 et § 7.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ÉNERGIE CINÉTIQUE ET THÉORÈME DU TRAVAIL-ÉNERGIE</span>\n<math class="mathml-display" display="block" aria-label="E c égale un demi m v au carré ; E c f moins E c i égale le travail total des forces">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>E</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>Δ</mi><msub><mi>E</mi><mi>c</mi></msub><mo>=</mo><msub><mi>E</mi><mrow><mi>c</mi><mo>,</mo><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>E</mi><mrow><mi>c</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>W</mi><mtext>total</mtext></msub><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>W</mi><mi>i</mi></msub></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La force de cette relation est qu’elle <strong>contourne les forces</strong>. Là où la deuxième loi exige de connaître en détail l’évolution de <span class="math">a⃗</span> au fil du trajet, le théorème du travail-énergie relie directement la vitesse finale à la vitesse initiale par l’intermédiaire d’un seul scalaire : le travail total. C’est pourquoi OpenStax le présente comme un outil de calcul « plus modeste » et néanmoins décisif lorsque les forces sont difficiles à expliciter (OpenStax, vol. 1, § 7.3).</p>\n<div class="callout"><strong>L’énergie mécanique se lit dans un bilan</strong><p>Si le travail total des forces <em>non conservatives</em> est nul, alors <span class="math">ΔE<sub>c</sub> = W<sub>conservatif</sub> = −ΔE<sub>p</sub></span>, donc <span class="math">Δ(E<sub>c</sub> + E<sub>p</sub>) = 0</span>. L’énergie mécanique se conserve alors exactement, et l’on peut traiter le mouvement d’un objet autour d’un obstacle sans jamais mentionner de force (section 21).</p></div>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ</strong><span class="math">m = 2,0 kg ; v<sub>i</sub> = 3,0 m·s⁻¹ ; W total = 16 J</span><span class="math">E<sub>c,i</sub> = ½ × 2,0 × 3,0² = 9,0 J</span><span class="math">E<sub>c,f</sub> = 9,0 + 16 = 25 J → v<sub>f</sub> = √(2 × 25 / 2,0) = 5,0 m·s⁻¹</span></div>'
        }
      },
      {
        id: 'meca-puissance',
        title: 'La puissance',
        field: 'Cours approfondi',
        summary: 'La puissance : un travail par unité de temps',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>puissance</strong> mesure la rapidité avec laquelle une énergie est transférée : <span class="math">P = dW/dt</span>. Pour une force constante faisant un déplacement à vitesse constante, elle s’écrit <span class="math">P = F⃗ · v⃗</span>. L’unité SI est le <strong>watt</strong> : <span class="math">1 W = 1 J·s⁻¹</span> (OpenStax, vol. 1, § 7.4).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">PUISSANCE</span>\n<math class="mathml-display" display="block" aria-label="P égale d W sur d t ; P égale F vecteur point v vecteur">\n<mrow><mi>P</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>W</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>F</mi><mo>→</mo></mover><mo>·</mo><mover><mi>v</mi><mo>→</mo></mover></mrow>\n</math>\n<span class="formula-label">1 W = 1 J·s⁻¹ ; 1 kW = 1 000 W</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La puissance est la grandeur qui distingue machines et performances : deux moteurs délivrant le même couple n’ont pas la même puissance si leurs vitesses de rotation diffèrent. La puissance instantanée peut être négative lors d’un freinage, ou nulle — c’est le cas d’une force centripète, dont le travail est nul (OpenStax, vol. 1, § 7.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>puissance moyenne</strong> sur un intervalle est le rapport du travail total à la durée totale : <span class="math">P<sub>moy</sub> = W/Δt</span>. Elle n’a de sens que si l’on précise l’intervalle, puisqu’une machine peut délivrer des pointes de puissance très supérieures à sa puissance moyenne tout en fournissant un travail identique (OpenStax, vol. 1, § 7.4).</p>\n<div class="callout"><strong>Énergie et puissance : deux questions différentes</strong><p>Un ascenseur de 2 000 kg monte à 4,0 m : l’énergie fournie <span class="math">mgh</span> est fixe, identique quelle que soit la vitesse de montée. Sa <em>puissance</em> dépend en revanche de la durée : plus la montée est rapide, plus la puissance est élevée. Un appareil puissant n’est donc pas forcément un appareil économe (OpenStax, vol. 1, § 7.4).</p></div>'
        }
      },
      {
        id: 'meca-energie-potentielle',
        title: 'Énergie potentielle et forces conservatives',
        field: 'Cours approfondi',
        summary: 'L’énergie potentielle, énergie stockée par la configuration',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>énergie potentielle</strong> est l’énergie qu’un système possède du fait de sa configuration. Elle n’est définie qu’à une constante additive près : le zéro est conventionnel, mais les <em>differences</em> d’énergie potentielle — les seules physiquement mesurables — sont indépendantes de ce choix (OpenStax, vol. 1, § 8.1).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ÉNERGIE POTENTIELLE — GRAVITÉ ET RESSORT</span>\n<math class="mathml-display" display="block" aria-label="E p égale m g y pour la pesanteur ; E p égale un demi k x au carré pour un ressort">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mi>m</mi><mi>g</mi><mi>y</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mi>d</mi><msub><mi>E</mi><mi>p</mi></msub></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">y : hauteur au-dessus du point de référence ; k : constante de raideur du ressort (N·m⁻¹), x : allongement par rapport à la position de repos</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une force est <strong>conservative</strong> si le travail qu’elle accomplit entre deux points est indépendant du chemin suivi, ou — équivalemment — si le travail sur un circuit fermé est nul : <span class="math">∮ F⃗<sub>cons</sub> · d r⃗ = 0</span>. OpenStax précise que ces deux définitions sont équivalentes, puisque tout circuit fermé se décompose en deux chemins aller et retour. Les forces dissipatives comme le frottement sont au contraire <strong>non conservatives</strong> : leur travail dépend du trajet (OpenStax, vol. 1, § 8.2).</p>\n<div class="callout"><strong>La relation fondamentale entre force et énergie potentielle</strong><p>Pour toute force conservative unidimensionnelle, <span class="math">F<sub>x</sub> = −dE<sub>p</sub>/dx</span>. Le signe moins est porteur de sens : la force conserve le système ; elle s’oppose donc à l’augmentation de l’énergie potentielle. Un objet qu’on hisse gagne de l’énergie potentielle <em>contre</em> la pesanteur, qui elle fournit un travail négatif (OpenStax, vol. 1, § 8.2).</p></div>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · RESSORT</strong><span class="math">k = 200 N·m⁻¹ ; x = 0,30 m</span><span class="math">E<sub>p</sub> = ½ × 200 × 0,30² = 9,0 J</span><span class="math">F = −k x = −200 × 0,30 = −60 N</span></div>'
        }
      },
      {
        id: 'meca-conservation-energie',
        title: 'Conservation de l’énergie mécanique',
        field: 'Cours approfondi',
        summary: 'La conservation de l’énergie mécanique',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>énergie mécanique</strong> est la somme <span class="math">E<sub>m</sub> = E<sub>c</sub> + E<sub>p</sub></span> des énergies cinétique et potentielle. Lorsque seul le travail des forces conservatives agit, elle se conserve : c’est la conséquence directe du théorème du travail-énergie et de la définition de l’énergie potentielle (OpenStax, vol. 1, § 8.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">BILAN D’ÉNERGIE MÉCANIQUE</span>\n<math class="mathml-display" display="block" aria-label="E c i plus E p i égale E c f plus E p f ; delta E m égale le travail des forces non conservatives">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>E</mi><mrow><mi>c</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi>p</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>E</mi><mrow><mi>c</mi><mo>,</mo><mi>f</mi></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi>p</mi><mo>,</mo><mi>f</mi></mrow></msub></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>Δ</mi><msub><mi>E</mi><mi>m</mi></msub><mo>=</mo><msub><mi>W</mi><mtext>non conserv.</mtext></msub></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La conservation se déduit en une ligne : <span class="math">ΔE<sub>c</sub> = W<sub>total</sub> = W<sub>cons</sub> + W<sub>non cons</sub></span> et <span class="math">W<sub>cons</sub> = −ΔE<sub>p</sub></span>, d’où <span class="math">ΔE<sub>m</sub> = W<sub>non cons</sub></span>. Si le frottement est absent, le second membre est nul et l’énergie mécanique est constante. Cette loi est plus efficace que la deuxième loi dans un cas fréquent : celui où l’on cherche une vitesse en un point du trajet sans connaître le détail du mouvement (OpenStax, vol. 1, § 8.3).</p>\n<div class="callout"><strong>La lecture d’un diagramme d’énergie potentielle</strong><p>Sur un graphique <span class="math">E<sub>p</sub>(x)</span> fermée, l’énergie mécanique est une horizontale : le point d’équilibre est stable lorsque <span class="math">E<sub>p</sub></span> présente un <strong>minimum</strong> (point bas de la courbe), car une petite perturbation fait remonter la courbe et donc l’énergie potentielle, qui repousse vers le minimum. L’équilibre est instable au sommet d’un maximum. Un point d’inflexion est un équilibre <em>indifferent</em> (OpenStax, vol. 1, § 8.4).</p></div>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · CHUTE AVEC FROTTEMENT</strong><span class="math">m = 2,0 kg ; h = 5,0 m ; μ<sub>k</sub> = 0,20 ; départ au repos</span><span class="math">E<sub>p</sub> = 2,0 × 9,81 × 5,0 ≈ 98,1 J ; f<sub>k</sub> = 0,20 × 2,0 × 9,81 ≈ 3,92 N</span><span class="math">E<sub>c,f</sub> = 98,1 − 3,92 × 5,0 ≈ 78,5 J → v<sub>f</sub> ≈ 8,9 m·s⁻¹</span></div>'
        }
      },
      {
        id: 'meca-quantite-mouvement',
        title: 'Quantité de mouvement et impulsion',
        field: 'Cours approfondi',
        summary: 'Quantité de mouvement : l’analogie vectorielle de la deuxième loi',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>quantité de mouvement</strong> d’un système est le produit vectoriel de sa masse par sa vitesse : <span class="math">p⃗ = m v⃗</span>. Son unité SI est le <strong>kilogramme-mètre par seconde</strong>. En dérivant la troisième loi, OpenStax montre que <span class="math">d(p⃗<sub>1</sub>)/dt = −d(p⃗<sub>2</sub>)/dt</span> pendant l’interaction : le taux de variation de la quantité de mouvement est identique et opposé pour les deux corps (OpenStax, vol. 1, § 9.1 et § 9.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">QUANTITÉ DE MOUVEMENT, IMPULSION ET THÉORÈME</span>\n<math class="mathml-display" display="block" aria-label="p égale m v ; impulsion J égale l\'intégrale de F dt ; la variation de p égale l\'impulsion">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mover><mi>p</mi><mo>→</mo></mover><mo>=</mo><mi>m</mi><mover><mi>v</mi><mo>→</mo></mover></mrow></mtd></mtr>\n<mtr><mtd><mrow><mover><mi>J</mi><mo>→</mo></mover><mo>=</mo><munder><mo>∫</mo><mrow><msub><mi>t</mi><mi>i</mi></msub><mi>→</mi><msub><mi>t</mi><mi>f</mi></msub></mrow></munder><mover><mi>F</mi><mo>→</mo></mover><mspace width="0.2em"/><mi>d</mi><mi>t</mi><mo>=</mo><mi>Δ</mi><mover><mi>p</mi><mo>→</mo></mover></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">pour une force constante, J⃗ = F⃗ Δt ; 1 N·s = 1 kg·m·s⁻¹</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>impulsion</strong> d’une force est donc l’aire sous la courbe force-temps. Deux forces de même impulsion produisent le même changement de quantité de mouvement, quelle que soit leur évolution : c’est ce qui rend le concept utile dans les chocs, où les durées d’interaction sont très courtes et les forces très élevées (OpenStax, vol. 1, § 9.2).</p>\n<div class="callout"><strong>Choc bref et allongement de la durée</strong><p>Dans un accident, la tête du passager passe de <span class="math">10</span> à <span class="math">0 m·s⁻¹</span> : la variation de quantité de mouvement est imposée. Si la tête s’arrête en 0,005 s, la force moyenne est vingt fois supérieure à celle qui l’arrêterait en 0,1 s. C’est le principe des <strong>airbags</strong> et des <strong>ceintures</strong>, qui allongent le temps de freinage sans modifier l’impulsion à absorber (OpenStax, vol. 1, § 9.2).</p></div>'
        }
      },
      {
        id: 'meca-collisions',
        title: 'Collisions et types de chocs',
        field: 'Cours approfondi',
        summary: 'Conservation de la quantité de mouvement et types de chocs',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un <strong>système fermé</strong> est un ensemble dont aucune force extérieure résultante n’agit : la quantité de mouvement totale y est alors conservée. L’équation <span class="math">Σp⃗<sub>i,f</sub> = Σp⃗<sub>i,i</sub></span> est la contrainte que doit satisfaire tout choc (OpenStax, vol. 1, § 9.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CONSERVATION DE LA QUANTITÉ DE MOUVEMENT (1D)</span>\n<math class="mathml-display" display="block" aria-label="somme des quantités de mouvement finales égale la somme des quantités de mouvement initiales ; cas de deux corps">\n<mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>m</mi><mi>i</mi></msub><msub><mi>v</mi><mrow><mi>i</mi><mo>,</mo><mi>f</mi></mrow></msub><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>m</mi><mi>i</mi></msub><msub><mi>v</mi><mrow><mi>i</mi><mo>,</mo><mi>i</mi></mrow></msub></mrow>\n</math>\n<span class="formula-label">pour deux corps : m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁꜀ + m₂v₂꜀ ; l’indice affecte le corps, l’indice de droite l’instant</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">OpenStax classe les interactions en quatre catégories. Dans un choc <strong>élastique</strong>, l’énergie cinétique du système est conservée en plus de la quantité de mouvement. Dans un choc <strong>inélastique</strong>, de l’énergie cinétique est perdue ; le cas particulier où les deux corps restent soudés est dit <em>parfaitement inélastique</em>, et il correspond à une perte maximale d’énergie cinétique. Une <strong>explosion</strong> est le processus inverse : un corps se fragmente, la quantité de mouvement reste constante mais l’énergie cinétique augmente, l’énergie d’origine étant une énergie potentielle chimique ou élastique (OpenStax, vol. 1, § 9.4).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Types de collisions d’après OpenStax, <em>University Physics</em> vol. 1, § 9.4 — seule la quantité de mouvement se conserve dans tous les cas</caption>\n<thead><tr><th scope="col">Type</th><th scope="col">Quantité de mouvement</th><th scope="col">Énergie cinétique</th></tr></thead>\n<tbody>\n<tr><th scope="row">Élastique</th><td>Conservée</td><td>Conservée</td></tr>\n<tr><th scope="row">Inélastique</th><td>Conservée</td><td>Diminuée</td></tr>\n<tr><th scope="row">Parfaitement inélastique</th><td>Conservée</td><td>Perte maximale</td></tr>\n<tr><th scope="row">Explosion</th><td>Conservée</td><td>Augmentée</td></tr>\n</tbody>\n</table>\n</div>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · CHOC INÉLASTIQUE</strong><span class="math">m₁ = 2,0 kg à 3,0 m·s⁻¹ ; m₂ = 1,0 kg au repos ; ils restent solidaires</span><span class="math">v = (2,0 × 3,0) / 3,0 = 2,0 m·s⁻¹</span><span class="math">E<sub>c,i</sub> = ½ × 2,0 × 3,0² = 9,0 J ; E<sub>c,f</sub> = ½ × 3,0 × 2,0² = 6,0 J → 3,0 J perdus</span></div>\n<div class="callout"><strong>Pourquoi la conservation s’impose-t-elle ?</strong><p>Parce que les forces d’interaction sont <em>internes</em> au système : elles se compensent deux à deux dans le bilan de la deuxième loi. À l’échelle d’un choc, les forces externes — frottement, résistance de l’air — sont négligeables devant les forces d’interaction. Si l’on choisit l’ensemble des deux corps comme système, aucune force extérieure ne subsiste et la conservation est automatique (OpenStax, vol. 1, § 9.3).</p></div>'
        }
      },
      {
        id: 'meca-rotation',
        title: 'Rotation et moment d’inertie',
        field: 'Cours approfondi',
        summary: 'Le mouvement de rotation et les grandeurs angulaires',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La rotation autour d’un axe fixe se décrit par des grandeurs <strong>angulaires</strong> qui correspondent une à une aux grandeurs linéaires, comme OpenStax le montre en les plaçant côte à côte : <span class="math">x ↔ θ</span>, <span class="math">v = dx/dt ↔ ω = dθ/dt</span>, <span class="math">a = dv/dt ↔ α = dω/dt</span>. La position angulaire s’exprime en radians, grandeur sans dimension puisqu’elle est le rapport de deux longueurs (OpenStax, vol. 1, § 10.1 et § 10.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">RELATION ENTRE GRANDEURS ANGULAIRES ET LINÉAIRES</span>\n<math class="mathml-display" display="block" aria-label="v t égale r omega ; a c égale r omega au carré ; a t égale r alpha">\n<mtable columnalign="left">\n<mtr><mtd><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mi>r</mi><mi>ω</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>a</mi><mi>c</mi></msub><mo>=</mo><mi>r</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>a</mi><mi>t</mi></msub><mo>=</mo><mi>r</mi><mi>α</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">r est la distance au foyer de rotation ; un point double plus loin tourne deux fois plus vite et accélère quatre fois plus</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>moment d’inertie</strong> <span class="math">I</span> est l’analogue rotationnel de la masse : <span class="math">I = ∫ r² dm</span>. Il mesure la résistance d’un corps à changer de vitesse angulaire autour d’un axe donné, et il dépend autant de la répartition de la masse que de la masse elle-même. Deux solides de même masse peuvent avoir des moments d’inertie très différents selon que la masse est concentrée près de l’axe ou au loin (OpenStax, vol. 1, § 10.4 et § 10.5).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Moments d’inertie des solides usuels autour d’un axe de symétrie (OpenStax, vol. 1, § 10.5)</caption>\n<thead><tr><th scope="col">Solide</th><th scope="col">Axe</th><th scope="col">Moment d’inertie</th></tr></thead>\n<tbody>\n<tr><th scope="row">Anneau mince</th><td>perpendiculaire, centre</td><td><span class="math">I = MR²</span></td></tr>\n<tr><th scope="row">Disque plein</th><td>perpendiculaire, centre</td><td><span class="math">I = ½MR²</span></td></tr>\n<tr><th scope="row">Sphère pleine</th><td>axe quelconque, centre</td><td><span class="math">I = ⅖MR²</span></td></tr>\n<tr><th scope="row">Sphère creuse</th><td>axe quelconque, centre</td><td><span class="math">I = ⅔MR²</span></td></tr>\n<tr><th scope="row">Tige mince</th><td>perpendiculaire, centre</td><td><span class="math">I = ¹⁄₁₂ML²</span></td></tr>\n<tr><th scope="row">Tige mince</th><td>perpendiculaire, extrémité</td><td><span class="math">I = ⅓ML²</span></td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>énergie cinétique de rotation</strong> reprend la forme de l’énergie cinétique de translation, avec <span class="math">I</span> à la place de <span class="math">m</span> : <span class="math">E<sub>c</sub> = ½Iω²</span>. Le <strong>théorème de l’axe parallèle</strong> permet d’obtenir le moment d’inertie autour d’un axe décalé à partir d’un axe connu passant par le centre de masse : <span class="math">I = I<sub>CM</sub> + Md²</span> (OpenStax, vol. 1, § 10.4 et § 10.5).</p>'
        }
      },
      {
        id: 'meca-couple-equilibre',
        title: 'Couple, équilibre et moment cinétique',
        field: 'Cours approfondi',
        summary: 'Le couple, l’équilibre et la conservation du moment cinétique',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>couple</strong> <span class="math">τ⃗ = r⃗ × F⃗</span> mesure la tendance d’une force à faire tourner un corps autour d’un axe ; son module vaut <span class="math">τ = r F sin θ</span>. Il est maximal quand la force est perpendiculaire au bras de levier, et nul quand elle passe par l’axe. L’axe du couple est perpendiculaire au plan défini par <span class="math">r⃗</span> et <span class="math">F⃗</span> (OpenStax, vol. 1, § 10.6).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">SECONDE LOI DE NEWTON POUR LA ROTATION ET MOMENT CINÉTIQUE</span>\n<math class="mathml-display" display="block" aria-label="somme des couples égale I alpha ; moment cinétique L égale I omega ; conditions d’équilibre">\n<mtable columnalign="left">\n<mtr><mtd><mrow><munder><mo>∑</mo><mi>k</mi></munder><msub><mover><mi>τ</mi><mo>→</mo></mover><mi>k</mi></msub><mo>=</mo><mi>I</mi><mover><mi>α</mi><mo>→</mo></mover></mrow></mtd></mtr>\n<mtr><mtd><mrow><mover><mi>L</mi><mo>→</mo></mover><mo>=</mo><mi>I</mi><mover><mi>ω</mi><mo>→</mo></mover></mrow></mtd></mtr>\n<mtr><mtd><mrow><munder><mo>∑</mo><mi>k</mi></munder><mover><msub><mi>F</mi><mi>k</mi></msub><mo>→</mo></mover><mo>=</mo><mover><mn>0</mn><mo>→</mo></mover><mspace width="0.3em"/><mo>et</mo><mspace width="0.3em"/><munder><mo>∑</mo><mi>k</mi></munder><msub><mover><mi>τ</mi><mo>→</mo></mover><mi>k</mi></msub><mo>=</mo><mover><mn>0</mn><mo>→</mo></mover></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">l’énergie cinétique de rotation est E<sub>c</sub> = ½Iω² ; L est le moment cinétique</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un solide est en <strong>équilibre</strong> si ses accélérations linéaire et angulaire sont nulles. La deuxième condition d’équilibre, <span class="math">Στ⃗ = 0⃗</span>, se coordonne avec la première <span class="math">ΣF⃗ = 0⃗</span> : OpenStax précise que l’équilibre des couples est valable autour de n’importe quel axe, fixe ou non (OpenStax, vol. 1, § 12.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>moment cinétique</strong> se conserve alors en l’absence de couple extérieur, exactement comme la quantité de mouvement. Cette conservation explique le mouvement du patineur : en écartant les bras il augmente son moment d’inertie, ce qui ralentit sa rotation pour conserver <span class="math">L</span>. Le même principe règle le gyroscope, dont la nutation est un changement d’orientation sans variation de moment cinétique (OpenStax, vol. 1, § 11.3).</p>\n<div class="callout"><strong>Le moment d’inertie dépend de l’axe choisi</strong><p>Une masse identique à la première a un moment d’inertie doublé pour la même distance : <span class="math">I₁ = 2mR²</span> contre <span class="math">I₂ = m(2R)² = 4mR²</span> pour un axe passant par l’extrémité de la même barre. Autour de l’extrémité, la barre est donc deux fois plus difficile à mettre en rotation. C’est l’analogie directe de la deuxième loi, où une force deux fois plus grande donne une accélération deux fois plus faible à masse égale (OpenStax, vol. 1, § 10.5).</p></div>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · DISQUE EN ROTATION</strong><span class="math">M = 2,0 kg ; R = 0,20 m ; ω = 10 rad·s⁻¹</span><span class="math">I = ½ × 2,0 × 0,20² = 0,040 kg·m²</span><span class="math">E<sub>c</sub> = ½ × 0,040 × 10² = 2,0 J</span></div>'
        }
      },
      {
        id: 'meca-gravitation',
        title: 'La gravitation universelle',
        field: 'Cours approfondi',
        summary: 'La gravitation universelle',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux corps ponctuels s’attirent avec une force dirigée selon la droite qui les joint, de module <strong>inversement proportionnel au carré de leur distance</strong>. Cette loi, formulée par Newton, est la première interaction décrite comme agissant <em>à distance</em>, sans contact matériel (OpenStax, vol. 1, § 13.1).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">LOI DE L’UNIVERSALITÉ DE LA GRAVITATION</span>\n<math class="mathml-display" display="block" aria-label="F vecteur égale G m1 m2 sur r au carré, G point un vers le centre ; constante G = 6,674 30 fois 10 puissance moins 11">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mover><mi>F</mi><mo>→</mo></mover><mo>=</mo><mi>G</mi><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r̂</mi><mo>→</mo></mover></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>G</mi><mo>=</mo><mn>6,674</mn><mspace width="0.2em"/><mn>30</mn><mo>×</mo><msup><mn>10</mn><mn>−11</mn></msup><mspace width="0.2em"/><mi mathvariant="normal">N·m²·kg⁻²</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">valeur CODATA 2022 (NIST), incertitude relative 2,2 × 10⁻⁵</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La constante <span class="math">G</span> est la plus petite des constantes fondamentales en valeur numérique et la moins bien connue : son incertitude relative, <span class="math">2,2 × 10⁻⁵</span>, est imposée par la précision des mesures de balance, et non par la théorie. C’est la même raison qui rend la pesanteur <em>très peu</em> précise comme instrument de mesure de masse (OpenStax, vol. 1, § 13.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Près de la surface terrestre, la force gravitationnelle se confond avec le poids : <span class="math">w = m g</span>, d’où <span class="math">g = GM<sub>T</sub>/r²</span> avec <span class="math">M<sub>T</sub></span> la masse terrestre et <span class="math">r</span> la distance au centre. Pour la Lune, l’orbite est une chute libre permanente : la gravitation fournit exactement l’accélération centripète nécessaire, <span class="math">G M<sub>T</sub> m / r² = m v²/r</span>, ce qui permet de simplifier en <span class="math">v = √(GM<sub>T</sub>/r)</span> et conduit aux lois de Kepler (OpenStax, vol. 1, § 13.2).</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ · FORCE ENTRE DEUX MASSES</strong><span class="math">m₁ = m₂ = 1,0 kg ; r = 0,10 m ; G = 6,674 × 10⁻¹¹ N·m²·kg⁻²</span><span class="math">F = 6,674 × 10⁻¹¹ × 1,0 × 1,0 / 0,10² ≈ 6,7 × 10⁻⁹ N</span></div>\n<div class="callout"><strong>Pourquoi un satellite ne tombe-t-il pas ?</strong><p>Un satellite en orbite n’est pas soustrait à la gravitation : il en subit l’effet complet. Il « tombe » continûment vers la Terre, mais sa vitesse latérale lui fait dépasser la chute à chaque instant — c’est ce que signifie la phrase de Newton, dans son <em>Principia</em>, qu’une pierre lancée assez loin tourne indéfiniment autour de la Terre. La gravitation fournit donc bien la force centripète de la section 16 (OpenStax, vol. 1, § 13.4).</p></div>'
        }
      },
      {
        id: 'meca-orbites',
        title: 'Orbites et lois de Kepler',
        field: 'Cours approfondi',
        summary: 'Orbites : de l’énergie potentielle gravitationnelle aux lois de Kepler',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La gravitation est une force <strong>conservative</strong> : son énergie potentielle s’écrit <span class="math">U(r) = −GMm/r</span> avec une constante de gravitation <em>nulle</em> à l’infini. Le signe moins traduit le caractère attractif : plus deux corps sont proches, plus leur énergie potentielle est basse (OpenStax, vol. 1, § 13.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ÉNERGIE D’UNE ORBITE — VERSION EN ÉNERGIE ET EN QUANTITÉ DE MOUVEMENT</span>\n<math class="mathml-display" display="block" aria-label="E égale G M m sur deux r moins ; en orbite circulaire la vitesse est racine de G M sur r ; la période suit la troisième loi de Kepler">\n<mtable columnalign="left">\n<mtr><mtd><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>r</mi></mfrac></msqrt></mrow></mtd></mtr>\n<mtr><mtd><mrow><msup><mi>T</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mrow><mrow><mi>G</mi><mi>M</mi></mrow></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">M : masse de l’astre attracteur ; a : demi-grand axe de l’orbite ; la troisième loi de Kepler ne dépend pas de la masse du satellite</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En combinant <span class="math">E<sub>c</sub> = ½mv²</span> et <span class="math">U = −GMm/r</span>, on obtient l’énergie totale d’une orbite circulaire : <span class="math">E = −GMm/2r</span>. L’énergie est donc <strong>négative</strong>, et sa valeur ne dépend que du demi-grand axe. Il en découle la troisième loi de Kepler : <span class="math">T² = 4π²a³/(GM)</span>, valable pour toute orbite képlérienne. Le satellite de même période orbite donc à la même distance, quelle que soit sa masse (OpenStax, vol. 1, § 13.4).</p>\n<div class="callout"><strong>Ce que l’énergie négative révèle</strong><p>Une énergie négative signifie que le système est <em>lié</em> : il ne peut pas se dissocier spontanément en s’éloignant à l’infini, où son énergie tendrait vers zéro. C’est exactement la condition de stabilité d’une orbite. À l’inverse, un objet d’énergie positive — une comète sur une orbite hyperbolique — est simplement parti : il reviendra peut-être un jour, mais jamais par le mécanisme d’une orbite stable (OpenStax, vol. 1, § 13.4).</p></div>'
        }
      },
      {
        id: 'meca-exercices',
        title: 'S’entraîner',
        field: 'Cours approfondi',
        summary: 'Exercices corrigés',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Douze exercices couvrant l’ensemble du cours, du changement de référentiel aux lois de Kepler. Essaie de répondre avant d’ouvrir la correction : le but est de manipuler les relations, pas de les relire.</p>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">A</span><span>Un train roule à <span class="math">30 m·s⁻¹</span> vers l’est. Un passager marche vers l’avant à <span class="math">2 m·s⁻¹</span>. Quelle est sa vitesse par rapport au quai ? Par rapport au wagon ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Par rapport au wagon, la vitesse du passager est <span class="math">+2 m·s⁻¹</span> : c’est la vitesse mesurée dans le référentiel du wagon.<br>\n<span class="math">v<sub>quai</sub> = v<sub>train</sub> + v<sub>passager</sub> = 30 + 2 = 32 m·s⁻¹</span> vers l’est.<br>\n<strong>Réponse : 32 m·s⁻¹ vers l’est par rapport au quai, 2 m·s⁻¹ vers l’avant par rapport au wagon.</strong> C’est le principe du mouvement relatif (section 01) : les deux valeurs sont exactes, dans deux référentiels différents.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">B</span><span>Un objet est lâché sans vitesse initiale d’une hauteur de <span class="math">20,0 m</span>. Combien de temps met-il à toucher le sol et quelle vitesse atteint-il ? (<span class="math">g = 9,81 m·s⁻²</span>)</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Chute libre, axe orienté vers le haut : <span class="math">y = y₀ − ½gt²</span>.<br>\n<span class="math">0 = 20,0 − ½ × 9,81 × t² → t² = 40,0 / 9,81 = 4,08 → t ≈ 2,02 s</span><br>\n<span class="math">v = g t = 9,81 × 2,02 ≈ 19,8 m·s⁻¹</span><br>\n<strong>Réponse : environ 2,0 s et 19,8 m·s⁻¹.</strong> La vitesse est indépendante de la masse : c’est le résultat de Galilée (section 05).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">C</span><span>Un canon tire un obus à <span class="math">45°</span> avec une vitesse initiale de <span class="math">150 m·s⁻¹</span>, depuis le sol. Quelle est sa portée et sa hauteur maximale ? (<span class="math">g = 9,81 m·s⁻²</span>)</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">R = v₀² sin 2α / g = 150² × sin 90° / 9,81 = 22 500 / 9,81</span><br>\n<span class="math">y<sub>max</sub> = v₀² sin²α / (2g) = 22 500 × 0,5 / (2 × 9,81) ≈ 573 m</span><br>\n<strong>Réponse : portée ≈ 2 294 m et hauteur maximale ≈ 573 m.</strong> L’angle de 45° maximise la portée, mais une vitesse plus élevée donnerait une hauteur bien plus grande (section 07).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">D</span><span>Un objet est en mouvement circulaire uniforme de rayon <span class="math">2,0 m</span> à la vitesse de <span class="math">3,0 m·s⁻¹</span>. Quelle est son accélération centripète et sa période ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">a<sub>c</sub> = v²/r = 3,0² / 2,0 = 4,5 m·s⁻²</span><br>\n<span class="math">T = 2πr/v = 2π × 2,0 / 3,0 ≈ 4,19 s</span><br>\n<strong>Réponse : 4,5 m·s⁻² et ≈ 4,2 s.</strong> La force qui produit cette accélération est la force centripète de la section 16.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">E</span><span>Une masse de <span class="math">5,0 kg</span> est soumise à une résultante de <span class="math">20 N</span>. Quelle est son accélération ? Quel est son poids sur Terre ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">a = ΣF / m = 20 / 5,0 = 4,0 m·s⁻²</span><br>\n<span class="math">w = m g = 5,0 × 9,81 ≈ 49 N</span><br>\n<strong>Réponse : 4,0 m·s⁻² et environ 49 N.</strong> La force qui accélère et le poids sont deux grandeurs distinctes : rien n’impose qu’ils soient égaux (section 12).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">F</span><span>Un bloc de <span class="math">4,0 kg</span> glisse sur un sol horizontal avec <span class="math">μ<sub>k</sub> = 0,30</span> sous l’action d’une force horizontale de <span class="math">30 N</span>. Quelle est son accélération ? (<span class="math">g = 9,81 m·s⁻²</span>)</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Réaction normale : <span class="math">N = mg = 4,0 × 9,81 = 39,2 N</span> (aucune composante verticale de la force appliquée).<br>\n<span class="math">f<sub>k</sub> = μ<sub>k</sub>N = 0,30 × 39,2 = 11,8 N</span><br>\n<span class="math">a = (30 − 11,8) / 4,0 ≈ 4,6 m·s⁻²</span><br>\n<strong>Réponse : ≈ 4,6 m·s⁻².</strong> Il faut d’abord calculer la réaction normale, car c’est elle qui fixe le frottement (section 15).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">G</span><span>Une voiture de <span class="math">1 200 kg</span> negotiate un virage horizontal de rayon <span class="math">100 m</span> à <span class="math">20 m·s⁻¹</span>. Quel est le coefficient de frottement statique minimal ? (<span class="math">g = 9,81 m·s⁻²</span>)</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">F<sub>c</sub> = mv²/r = 1 200 × 20² / 100 = 4 800 N</span><br>\n<span class="math">μ<sub>s,min</sub> = F<sub>c</sub> / (mg) = 4 800 / (1 200 × 9,81) = 4 800 / 11 772 ≈ 0,41</span><br>\n<strong>Réponse : μ<sub>s</sub> ≈ 0,41 au minimum.</strong> En deçà, la voiture glisse vers l’extérieur du virage (section 16).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">H</span><span>Une force de <span class="math">50 N</span> agit à <span class="math">30°</span> au-dessus de l’horizontale sur une caisse déplacée de <span class="math">4,0 m</span> à vitesse constante. Quel est le travail de cette force et celui du frottement ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>À vitesse constante, la variation d’énergie cinétique est nulle, donc <span class="math">W<sub>total</sub> = 0</span>.<br>\n<span class="math">W<sub>appliquée</sub> = F Δr cos 30° = 50 × 4,0 × 0,866 ≈ 173 J</span><br>\n<span class="math">W<sub>frottement</sub> = −173 J</span><br>\n<strong>Réponse : +173 J et −173 J.</strong> Le frottement dissipe exactement l’énergie fournie par la force motrice (section 17).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">I</span><span>Une bille de <span class="math">0,20 kg</span> roule sur un plan horizontal à <span class="math">3,0 m·s⁻¹</span>. Combien de travail faut-il pour l’arrêter ? Quelle est son énergie cinétique initiale ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">E<sub>c</sub> = ½mv² = ½ × 0,20 × 3,0² = 0,90 J</span><br>\nLe théorème du travail-énergie impose <span class="math">W<sub>total</sub> = E<sub>c,f</sub> − E<sub>c,i</sub> = 0 − 0,90 = −0,90 J</span>.<br>\n<strong>Réponse : il faut fournir −0,90 J, c’est-à-dire dissiper 0,90 J d’énergie.</strong> Le signe négatif traduit un freinage, non une accélération (section 18).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">J</span><span>Un objet de <span class="math">2,0 kg</span> part du repos sur un plan incliné. Quelle est sa vitesse après une descente de hauteur <span class="math">3,0 m</span> en l’absence de frottement ? (<span class="math">g = 9,81 m·s⁻²</span>)</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Conservation de l’énergie mécanique : <span class="math">E<sub>p,i</sub> = E<sub>c,f</sub></span>.<br>\n<span class="math">mgh = ½mv² → v = √(2gh) = √(2 × 9,81 × 3,0) = √58,9 ≈ 7,7 m·s⁻¹</span><br>\n<strong>Réponse : ≈ 7,7 m·s⁻¹.</strong> La masse s’élimine : l’énergie potentielle et l’énergie cinétique en contiennent le même facteur (section 21).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">K</span><span>Une balle de <span class="math">0,20 kg</span> à <span class="math">30 m·s⁻¹</span> percute un chariot de <span class="math">1,80 kg</span> au repos ; les deux restent solidaires. Quelle est leur vitesse commune ? L’énergie cinétique est-elle conservée ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Conservation de la quantité de mouvement : <span class="math">v = (0,20 × 30) / (0,20 + 1,80) = 6,0 / 2,0 = 3,0 m·s⁻¹</span><br>\n<span class="math">E<sub>c,i</sub> = ½ × 0,20 × 30² = 90 J</span> ; <span class="math">E<sub>c,f</sub> = ½ × 2,0 × 3,0² = 9 J</span><br>\n<strong>Réponse : 3,0 m·s⁻¹ ; l’énergie cinétique n’est pas conservée — 81 J sont perdus.</strong> C’est un choc parfaitement inélastique, le cas de perte maximale (section 23).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">L</span><span>Un disque de masse <span class="math">3,0 kg</span> et de rayon <span class="math">0,25 m</span> tourne à <span class="math">8,0 rad·s⁻¹</span>. Quel est son moment d’inertie et son énergie cinétique de rotation ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Disque plein : <span class="math">I = ½MR² = ½ × 3,0 × 0,25² = 0,094 kg·m²</span><br>\n<span class="math">E<sub>c</sub> = ½Iω² = ½ × 0,094 × 8,0² ≈ 3,0 J</span><br>\n<strong>Réponse : I ≈ 0,094 kg·m² et E<sub>c</sub> ≈ 3,0 J.</strong> Le moment d’inertie remplace la masse dans la formule de l’énergie cinétique de rotation (section 24).</p></div>\n</details>'
        }
      },
      {
        id: 'meca-sources',
        title: 'Sources',
        field: 'Cours approfondi',
        summary: 'Sources vérifiées',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque affirmation scientifique de ce cours renvoie à l’une des sources ci-dessous. OpenStax est prioritaire, le sujet y figurant pour la totalité des notions traitées. Les valeurs numériques des constantes proviennent du NIST et du CODATA ; les grandeurs planétaires, de la fiche de la NASA.</p>\n<ul style="max-width:730px;margin:0 0 16px;padding-left:1.2rem;color:#39453d;line-height:1.7">\n<li style="margin-bottom:.7rem"><strong>Cinématique et mouvement relatif</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/3-introduction" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 1, chapitre 3 <em>Motion Along a Straight Path</em></a> — § 3.1 <em>Position, Displacement, and Average Velocity</em> ; § 3.2 <em>Instantaneous Velocity and Speed</em> ; § 3.3 <em>Average and Instantaneous Acceleration</em> ; § 3.4 <em>Motion with Constant Acceleration</em> (les cinq équations cinématiques) ; § 3.5 <em>Free Fall</em> (<span class="math">g = 9,81 m·s⁻²</span> en moyenne, de 9,78 à 9,83 m·s⁻², expérience du marteau et de la plume de 1971 sur la Lune) ; § 3.6 <em>Finding Velocity and Displacement from Acceleration</em>.</li>\n<li style="margin-bottom:.7rem"><strong>Vecteurs, projectiles et mouvement circulaire</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/4-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 4 <em>Motion in Two and Three Dimensions</em></a> — § 4.1 <em>Displacement and Velocity Vectors</em> ; § 4.2 <em>Acceleration Vector</em> ; § 4.3 <em>Projectile Motion</em> (<span class="math">a<sub>y</sub> = −g</span>, <span class="math">a<sub>x</sub> = 0</span>, portée, temps de vol, hauteur maximale, portée maximale à 45°) ; § 4.4 <em>Uniform and Nonuniform Circular Motion</em> (accélération centripète <span class="math">v²/r</span>, accélération tangentielle) ; § 4.5 <em>Relative Motion in One and Two Dimensions</em>.</li>\n<li style="margin-bottom:.7rem"><strong>Forces, inertie et diagrammes de corps libre</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/5-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 5 <em>Newton’s Laws of Motion</em></a> — § 5.1 <em>Forces</em> (forces intérieures et extérieures, notion de système) ; § 5.2 <em>Newton’s First Law</em> (principe d’inertie, inertie, référentiels inertiels, équilibre) ; § 5.3 <em>Newton’s Second Law</em> (résultante des forces extérieures, <span class="math">1 N = 1 kg·m·s⁻²</span>) ; § 5.4 <em>Mass and Weight</em> (<span class="math">w⃗ = m g⃗</span>, <span class="math">g = 9,80 m·s⁻²</span> sur Terre et <span class="math">1,62 m·s⁻²</span> sur la Lune, poids apparent, apesanteur) ; § 5.5 <em>Newton’s Third Law</em> ; § 5.6 <em>Common Forces</em> (poids, réaction normale, tension, force de ressort, frottement, force appliquée) ; § 5.7 <em>Drawing Free-Body Diagrams</em> (règles de construction du diagramme).</li>\n<li style="margin-bottom:.7rem"><strong>Méthode de résolution, frottement et force centripète</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/6-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 6 <em>Applications of Newton’s Laws</em></a> — § 6.1 <em>Solving Problems with Newton’s Laws</em> (stratégie en cinq étapes) ; § 6.2 <em>Friction</em> (frottement statique et cinétique, <span class="math">f<sub>s</sub> ≤ μ<sub>s</sub>N</span>, <span class="math">f<sub>k</sub> = μ<sub>k</sub>N</span>) ; § 6.3 <em>Centripetal Force</em> (<span class="math">F<sub>c</sub> = mv²/r = mrω²</span>, exemple 6.15 sur le coefficient de frottement dans un virage) ; § 6.4 <em>Drag Force and Terminal Speed</em>.</li>\n<li style="margin-bottom:.7rem"><strong>Travail, énergie cinétique et puissance</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/7-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 7 <em>Work and Kinetic Energy</em></a> — § 7.1 <em>Work</em> (travail d’une force constante et d’une force variable) ; § 7.2 <em>Kinetic Energy</em> (<span class="math">E<sub>c</sub> = ½mv²</span>) ; § 7.3 <em>Work-Energy Theorem</em> ; § 7.4 <em>Power</em> (<span class="math">P = dW/dt = F⃗ · v⃗</span>, 1 W = 1 J·s⁻¹).</li>\n<li style="margin-bottom:.7rem"><strong>Énergie potentielle et conservation de l’énergie</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/8-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 8 <em>Potential Energy and Conservation of Energy</em></a> — § 8.1 <em>Potential Energy of a System</em> (<span class="math">E<sub>p</sub> = mgy</span>, <span class="math">E<sub>p</sub> = ½kx²</span>) ; § 8.2 <em>Conservative and Non-Conservative Forces</em> (<span class="math">∮F⃗<sub>cons</sub> · dr⃗ = 0</span>, <span class="math">F<sub>x</sub> = −dE<sub>p</sub>/dx</span>) ; § 8.3 <em>Conservation of Energy</em> (<span class="math">ΔE<sub>m</sub> = W<sub>non conserv.</sub></span>) ; § 8.4 <em>Potential Energy Diagrams and Stability</em> (équilibre stable, instable et indifférent).</li>\n<li style="margin-bottom:.7rem"><strong>Quantité de mouvement, impulsion et collisions</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/9-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 9 <em>Linear Momentum and Collisions</em></a> — § 9.1 <em>Linear Momentum</em> (<span class="math">p⃗ = mv⃗</span>) ; § 9.2 <em>Impulse and Collisions</em> ; § 9.3 <em>Conservation of Linear Momentum</em> (système fermé, <span class="math">F⃗<sub>21</sub> = −F⃗<sub>12</sub></span>) ; § 9.4 <em>Types of Collisions</em> (élastique, inélastique, parfaitement inélastique, explosion).</li>\n\n\n<li style="margin-bottom:.7rem"><strong>Rotation, couple et moment d’inertie</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/10-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 10 <em>Rotational Motion</em></a> — § 10.1 <em>Rotational Variables</em> (radian, vitesse et accélération angulaires) ; § 10.3 <em>Relating Angular and Translational Quantities</em> (<span class="math">v<sub>t</sub> = rω</span>, <span class="math">a<sub>c</sub> = rω²</span>, <span class="math">a<sub>t</sub> = rα</span>) ; § 10.4 <em>Moment of Inertia and Rotational Kinetic Energy</em> (<span class="math">I = ∫r²dm</span>, <span class="math">E<sub>c</sub> = ½Iω²</span>) ; § 10.5 <em>Calculating Moments of Inertia</em> (tableau des moments d’inertie des solides usuels, exemple de la barre et de ses deux axes) ; § 10.6 <em>Torque</em> (<span class="math">τ⃗ = r⃗ × F⃗</span>, <span class="math">τ = rF sin θ</span>) ; § 10.7 <em>Newton’s Second Law for Rotation</em> (<span class="math">Στ⃗ = I α⃗</span>).</li>\n<li style="margin-bottom:.7rem"><strong>Moment cinétique et sa conservation</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/11-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 11 <em>Angular Momentum</em></a> — § 11.2 <em>Angular Momentum</em> (<span class="math">L⃗ = I ω⃗</span>) ; § 11.3 <em>Conservation of Angular Momentum</em> (patineur qui écarte les bras, hélicoptère et rotor de queue) ; § 11.4 <em>Precession of a Gyroscope</em>.</li>\n<li style="margin-bottom:.7rem"><strong>Équilibre statique et élasticité</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/12-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 12 <em>Static Equilibrium and Elasticity</em></a> — § 12.1 <em>Conditions for Static Equilibrium</em> (<span class="math">ΣF⃗<sub>k</sub> = 0⃗</span>, <span class="math">Στ⃗<sub>k</sub> = 0⃗</span>, validité de l’équilibre des couples autour de n’importe quel axe) ; § 12.3 <em>Stress, Strain, and Elastic Modulus</em> (contrainte, déformation, <span class="math">1 Pa = 1 N/m²</span>).</li>\n<li style="margin-bottom:.7rem"><strong>Gravitation, énergie potentielle gravitationnelle et orbites</strong> : <a href="https://openstax.org/books/university-physics-volume-1/pages/13-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 1, chapitre 13 <em>Gravitation</em></a> — § 13.1 <em>Newton’s Law of Universal Gravitation</em> (loi en <span class="math">1/r²</span>, historique) ; § 13.2 <em>Gravitation Near Earth’s Surface</em> ; § 13.3 <em>Gravitational Potential Energy and Total Energy</em> (<span class="math">U = −GMm/r</span>) ; § 13.4 <em>Satellite Orbits and Energy</em> (<span class="math">E = −GMm/2r</span> pour une orbite circulaire, énergie négative et système lié) ; § 13.5 <em>Kepler’s Laws of Planetary Motion</em> (<span class="math">T² = 4π²a³/(GM)</span>).</li>\n<li style="margin-bottom:.7rem"><strong>Constante de gravitation</strong> : <a href="https://physics.nist.gov/cgi-bin/cuu/Value?bg|search_for=g" target="_blank" rel="noreferrer">NIST, <em>CODATA Recommended Values of the Fundamental Physical Constants</em></a> (ajustement 2022) — <span class="math">G = 6,674 30(15) × 10⁻¹¹ m³·kg⁻¹·s⁻²</span>, incertitude standard <span class="math">0,000 15 × 10⁻¹¹ m³·kg⁻¹·s⁻²</span>, incertitude relative <span class="math">2,2 × 10⁻⁵</span>.</li>\n<li style="margin-bottom:.7rem"><strong>Grandeurs planétaires</strong> : <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/" target="_blank" rel="noreferrer">NASA / NSSDCA, <em>Planetary Fact Sheet</em></a> (mise à jour du 18 mars 2025) — masses, diamètres, densités et pesanteurs de surface des planètes et de la Lune, période et vitesse orbitales de la Terre.</li>\n</ul>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les valeurs numériques citées dans ce cours et non couvertes par les références ci-dessus — coefficients de frottement pris dans les exercices, constantes de raideur — sont des valeurs usuelles choisies pour illustrer chaque méthode ; elles ne sont pas des données expérimentales citées. Les seuls exemples chiffrés repris d’un énoncé de la source sont ceux qui y sont explicitement attribués : OpenStax, vol. 1, exemple 6.15 (virage à palier), et la valeur de <span class="math">g</span> en section 05.</p>'
        }
      }
    ]
  },
  {
    id: 'thermodynamique',
    title: 'Thermodynamique',
    note: 'Relier température, énergie, chaleur et transformations.',
    chapters: [
      {
        id: 'gaz-parfaits',
        title: 'Température et gaz parfaits',
        field: 'Thermique · bases',
        summary: 'État d’un gaz, pression, volume, température absolue et équation d’état.',
        lesson: {
          sections: [
            'Un gaz parfait est un modèle de particules ponctuelles sans interaction à distance, sauf lors des collisions. Son état macroscopique est décrit par la pression P, le volume V, la température absolue T et la quantité de matière n.',
            'La température dans l’équation d’état s’exprime en kelvins. Une hausse de température à volume constant augmente la pression ; une hausse de volume à température constante la diminue.'
          ],
          formula: {
            label: 'ÉQUATION D’ÉTAT DU GAZ PARFAIT',
            text: 'PV = nRT  |  T(K) = θ(°C) + 273,15'
          },
          example: {
            statement: '1 mol de gaz parfait occupe 24,0 L à 300 K. Estimer sa pression avec R = 8,314 J·mol⁻¹·K⁻¹.',
            calculation: 'P = nRT/V = 1 × 8,314 × 300 / 0,024.',
            answer: 'P ≈ 1,04 × 10⁵ Pa.'
          },
          exercise: {
            question: 'Convertir 20 °C en kelvins.',
            answer: 'T = 20 + 273,15 = 293,15 K.'
          },
          equationDetails: [
            {
              title: 'Équation d’état du gaz parfait',
              formula: 'PV = nRT',
              explanation: 'Le modèle du gaz parfait relie pression, volume, quantité de matière et température absolue. Il est une approximation adaptée notamment aux gaz peu denses et suffisamment éloignés de la liquéfaction.',
              parameters: 'P : pression absolue (Pa) ; V : volume (m³) ; n : quantité de matière (mol) ; R = 8,314462618 J·mol⁻¹·K⁻¹ : constante des gaz parfaits ; T : température absolue (K).',
              example: 'Pour n = 1,00 mol, T = 300 K et V = 24,0 L = 0,0240 m³ : P = nRT/V.',
              result: 'P ≈ 1,04 × 10⁵ Pa.'
            },
            {
              title: 'Conversion Celsius-kelvin',
              formula: 'T(K) = θ(°C) + 273,15',
              explanation: 'L’échelle kelvin et l’échelle Celsius ont la même taille de degré ; leurs origines diffèrent de 273,15 degrés.',
              parameters: 'T : température thermodynamique (K) ; θ : température Celsius (°C) ; un écart de 1 K équivaut à un écart de 1 °C.',
              example: 'Pour θ = 20,00 °C : T = 20,00 + 273,15.',
              result: 'T = 293,15 K.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 2 — Molecular Model of an Ideal Gas', url: 'https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas' },
            { title: 'OpenStax University Physics, vol. 2 — Pressure, Temperature, and RMS Speed', url: 'https://openstax.org/books/university-physics-volume-2/pages/2-2-pressure-temperature-and-rms-speed' },
            { title: 'NIST — CODATA recommended values of the fundamental constants', url: 'https://physics.nist.gov/cuu/Constants/' }
          ]
        }
      },
      {
        id: 'premier-principe',
        title: 'Premier principe et bilans d’énergie',
        field: 'Thermique · intermédiaire',
        summary: 'Énergie interne, chaleur, travail reçu et transformations.',
        lesson: {
          sections: [
            'Le premier principe exprime la conservation de l’énergie pour un système thermodynamique. La variation d’énergie interne est égale aux transferts reçus sous forme de chaleur et de travail.',
            'Il faut annoncer clairement la convention de signe utilisée. Ici, Q et W sont positifs lorsque le système reçoit de l’énergie.'
          ],
          formula: {
            label: 'PREMIER PRINCIPE',
            text: 'ΔU = Q + W'
          },
          example: {
            statement: 'Un système reçoit 500 J de chaleur et fournit 120 J de travail au milieu extérieur. Quelle est la variation de son énergie interne ?',
            calculation: 'Q = +500 J. Comme le système fournit le travail, W = −120 J. Donc ΔU = 500 − 120.',
            answer: 'ΔU = +380 J.'
          },
          exercise: {
            question: 'Un système reçoit 200 J de travail et perd 50 J de chaleur. Calculer ΔU.',
            answer: 'ΔU = Q + W = −50 + 200 = +150 J.'
          },
          equationDetails: [
            {
              title: 'Premier principe de la thermodynamique',
              formula: 'ΔU = Q + W',
              explanation: 'Pour un système fermé, la variation d’énergie interne égale la chaleur reçue plus le travail reçu. Cette écriture utilise la convention « reçue par le système positive ».',
              parameters: 'ΔU : variation d’énergie interne (J) ; Q : transfert thermique reçu (J) ; W : travail reçu (J). Si le système fournit du travail, W est négatif avec cette convention.',
              example: 'Le système reçoit Q = +500 J et fournit 120 J de travail, donc W = −120 J : ΔU = 500 − 120.',
              result: 'ΔU = +380 J.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 2 — First Law of Thermodynamics', url: 'https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics' }
          ]
        }
      },
      {
        id: 'second-principe',
        title: 'Entropie et second principe',
        field: 'Thermique · approfondissement',
        summary: 'Sens d’évolution spontanée, irréversibilité et entropie.',
        lesson: {
          sections: [
            'Le premier principe conserve l’énergie mais ne donne pas le sens d’une évolution. Le second principe introduit l’entropie, une grandeur d’état qui quantifie la dispersion de l’énergie.',
            'Pour un système isolé, l’entropie totale ne diminue pas : elle reste constante dans une transformation réversible idéale et augmente dans une transformation irréversible.'
          ],
          formula: {
            label: 'BILAN D’ENTROPIE D’UN SYSTÈME ISOLÉ',
            text: 'ΔS ≥ 0  |  égalité : transformation réversible'
          },
          example: {
            statement: 'Deux corps à températures différentes sont placés en contact dans un système isolé. Dans quel sens l’échange thermique se produit-il spontanément ?',
            calculation: 'La chaleur se transfère spontanément du corps le plus chaud vers le plus froid, jusqu’à l’équilibre thermique.',
            answer: 'L’entropie totale augmente ; le processus inverse ne se produit pas spontanément.'
          },
          exercise: {
            question: 'Une transformation spontanée d’un système isolé peut-elle diminuer son entropie ?',
            answer: 'Non. Le second principe impose ΔS ≥ 0.'
          },
          equationDetails: [
            {
              title: 'Second principe pour un système isolé',
              formula: 'ΔS ≥ 0',
              explanation: 'L’entropie totale d’un système isolé ne diminue pas. Elle reste constante dans une évolution réversible idéale et augmente lors d’une évolution irréversible.',
              parameters: 'ΔS : variation d’entropie du système isolé (J·K⁻¹) ; l’inégalité porte sur l’évolution complète entre les états initial et final.',
              example: 'Deux corps à températures différentes échangent spontanément de la chaleur dans un ensemble isolé : cette évolution est irréversible, donc ΔS_total > 0.',
              result: 'L’entropie totale augmente ; le transfert inverse ne se produit pas spontanément.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 2 — Entropy', url: 'https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy' }
          ]
        }
      }
    ]
  },
  {
    id: 'thermodynamique-transferts',
    title: 'Thermodynamique et transferts thermiques',
    note: 'Un cours approfondi en vingt-deux sections : température, calorimétrie, transferts thermiques, gaz parfaits, théorie cinétique, premier et second principes, entropie, avec exercices et sources.',
    chapters: [
      {
        id: 'thermo-temperature-equilibre',
        title: 'Température et équilibre thermique',
        field: 'Cours approfondi',
        summary: 'Température et équilibre thermique',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>température</strong> se définit d’abord de façon <em>opérationnelle</em> : c’est la grandeur que mesure un thermomètre. La théorie cinétique lui donne ensuite un sens microscopique : elle est proportionnelle à l’énergie cinétique de translation moyenne des molécules du système (OpenStax, <em>University Physics</em> vol. 2, § 1.1 et § 2.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux objets en contact qui n’échangent plus d’énergie nette sont en <strong>équilibre thermique</strong>. Si l’objet A est en équilibre avec B, et B avec C, alors A est en équilibre avec C : cette propriété de transitivité constitue la <strong>loi zéro de la thermodynamique</strong>. Elle justifie l’usage du thermomètre : placé en équilibre avec un corps, il affiche la température de ce corps. Le nom « zéro » vient de Ralph Fowler, dans les années 1930, parce que la loi est logiquement antérieure aux trois autres, déjà numérotées (OpenStax, vol. 2, § 1.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>transfert thermique</strong> — la chaleur — est le mouvement d’énergie d’un lieu ou d’un matériau vers un autre, provoqué par une différence de température (OpenStax, vol. 2, § 1.4). Il s’arrête dès que l’équilibre thermique est atteint. La chaleur n’est donc pas une substance stockée dans un corps : c’est un transfert, dont l’unité SI est le joule.</p>\n<div class="formula-block">\n<span class="formula-label">ÉNERGIE CINÉTIQUE MOYENNE D’UNE MOLÉCULE</span>\n<math class="mathml-display" display="block" aria-label="Un demi m fois la moyenne de v au carré égale trois demis k B T">\n<mrow>\n<mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo>⟨</mo><msup><mi>v</mi><mn>2</mn></msup><mo>⟩</mo>\n<mo>=</mo>\n<mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi>\n</mrow>\n</math>\n<span class="formula-label">k<sub>B</sub> = 1,380 649 × 10⁻²³ J·K⁻¹ (valeur exacte, SI depuis 2019 — NIST)</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">À 300 K, cette relation donne une énergie cinétique de translation moyenne de <span class="math">1,5 × 1,380 649 × 10⁻²³ × 300 ≈ 6,21 × 10⁻²¹ J</span> par molécule : la température mesure bien une agitation, et non une « quantité de chaleur ».</p>\n<div class="callout"><strong>Le kelvin, redéfini en 2019</strong><p>Depuis la révision du Système international, le kelvin n’est plus défini par le point triple de l’eau (273,16 K, référence de 1954 à 2019) mais par la fixation de la constante de Boltzmann : « le kelvin […] a pour magnitude celle fixée par la valeur numérique de la constante de Boltzmann égale à exactement 1,380 649 × 10⁻²³ J·K⁻¹ » (NIST, <em>Kelvin: Introduction</em>). Le zéro absolu correspond à 0 K = −273,15 °C = −459,67 °F. À cette température, l’agitation thermique disparaît mais un mouvement de point zéro subsiste, d’origine quantique ; il n’entre pas dans la définition de la température thermodynamique.</p></div>'
        }
      },
      {
        id: 'thermo-echelles-temperature',
        title: 'Les échelles de température',
        field: 'Cours approfondi',
        summary: 'Mesurer la température : Celsius, Fahrenheit, Kelvin',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Toute échelle thermométrique se construit sur deux températures reproductibles. Le choix usuel est la fusion de la glace et l’ébullition de l’eau sous pression atmosphérique standard (OpenStax, vol. 2, § 1.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Sur l’échelle <strong>Celsius</strong>, ces repères valent 0 °C et 100 °C. Sur l’échelle <strong>Fahrenheit</strong>, encore utilisée aux États-Unis pour la vie courante, ils valent 32 °F et 212 °F : 100 degrés Celsius couvrent donc 180 degrés Fahrenheit, si bien qu’un écart d’un degré Celsius vaut 1,8 fois un écart d’un degré Fahrenheit (OpenStax, vol. 2, § 1.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’échelle <strong>Kelvin</strong> est absolue : son zéro est le zéro absolu, et un écart de 1 K est identique à un écart de 1 °C. Les lois de la thermodynamique s’écrivent avec cette échelle — c’est elle qui rend proportionnelle la pression d’un gaz à volume constant.</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CONVERSIONS D’ÉCHELLES</span>\n<math class="mathml-display" display="block" aria-label="T en kelvins égale thêta en degrés Celsius plus 273,15 ; thêta en degrés Fahrenheit égale 1,8 thêta en degrés Celsius plus 32">\n<mtable>\n<mtr><mtd><mrow><mi>T</mi><mo>=</mo><mi>θ</mi><mo>+</mo><mn>273,15</mn></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>θ</mi><mi>F</mi></msub><mo>=</mo><mn>1,8</mn><mo>&#x2062;</mo><mi>θ</mi><mo>+</mo><mn>32</mn></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Comme beaucoup de propriétés physiques varient de façon régulière avec la température, les thermomètres sont nombreux : dilatation d’un liquide dans un tube capillaire (alcool coloré, mercure historique), résistance électrique, couleur de cristaux liquides, ou encore émission de rayonnement infrarouge mesurée par un pyromètre, comme les thermomètres auriculaires (OpenStax, vol. 2, § 1.2).</p>\n<div class="callout"><strong>Pourquoi la thermodynamique impose l’échelle absolue</strong><p>Une même élévation de température n’a pas le même effet relatif selon l’échelle : une loi comme <span class="math">pV = nRT</span> n’est linéaire en température qu’en kelvins. Convertir d’abord en kelvins évite les contresens des exercices de gaz et d’entropie.</p></div>'
        }
      },
      {
        id: 'thermo-dilatation-thermique',
        title: 'La dilatation thermique',
        field: 'Cours approfondi',
        summary: 'Pourquoi les corps se dilatent-ils en chauffant ?',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans un solide, les atomes vibrent autour d’une position moyenne. Le potentiel d’interaction qui les relie n’est pas symétrique : il croît plus vite quand deux atomes se rapprochent que quand ils s’écartent (potentiel de type Lennard-Jones). Une élévation de température accroît l’énergie de vibration ; l’atome passe donc plus de temps du côté « éloigné », la distance moyenne entre voisins augmente et le solide se dilate (OpenStax, vol. 2, § 1.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour un solide isotrope, cette dilatation se décrit par le <strong>coefficient de dilatation linéaire</strong> α, propriété du matériau, quasi constant pour des écarts de température modérés. Un écart de température a la même valeur numérique en kelvins et en degrés Celsius : α s’exprime donc en K⁻¹ ou en °C⁻¹, avec la même valeur (OpenStax, vol. 2, § 1.3).</p>\n<div class="formula-block">\n<span class="formula-label">DILATATION LINÉAIRE ET VOLUMIQUE</span>\n<math class="mathml-display" display="block" aria-label="delta L égale alpha fois L fois delta T ; delta V égale bêta fois V fois delta T avec bêta environ égal à trois alpha">\n<mtable>\n<mtr><mtd><mrow><mi>Δ</mi><mi>L</mi><mo>=</mo><mi>α</mi><mo>&#x2062;</mo><mi>L</mi><mo>&#x2062;</mo><mi>Δ</mi><mi>T</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>Δ</mi><mi>V</mi><mo>=</mo><mi>β</mi><mo>&#x2062;</mo><mi>V</mi><mo>&#x2062;</mo><mi>Δ</mi><mi>T</mi><mo>,</mo><mspace width="0.6em"/><mi>β</mi><mo>≈</mo><mn>3</mn><mi>α</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Coefficients de dilatation linéaire α, ordres de grandeur entre 0 °C et 100 °C (K⁻¹) — table Wikipédia <em>Dilatation thermique</em>, valeurs de la littérature</caption>\n<thead><tr><th scope="col">Matériau</th><th scope="col">α (K⁻¹)</th><th scope="col">Matériau</th><th scope="col">α (K⁻¹)</th></tr></thead>\n<tbody>\n<tr><th scope="row">Acier</th><td>12,0 × 10⁻⁶</td><th scope="row">Verre sodo-calcique</th><td>9 × 10⁻⁶</td></tr>\n<tr><th scope="row">Béton</th><td>12 × 10⁻⁶</td><th scope="row">Verre borosilicate (Pyrex)</th><td>4 × 10⁻⁶</td></tr>\n<tr><th scope="row">Cuivre</th><td>17 × 10⁻⁶</td><th scope="row">Quartz</th><td>0,5 × 10⁻⁶</td></tr>\n<tr><th scope="row">Aluminium</th><td>23 × 10⁻⁶</td><th scope="row">Invar (36 % Ni)</th><td>1,2 × 10⁻⁶</td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les conséquences pratiques sont directes. Ponts et rails comportent des <strong>joints de dilatation</strong> qui laissent le matériau s’allonger librement. Quand la dilatation est empêchée, elle se transforme en <strong>contrainte thermique</strong>, de même valeur que la contrainte élastique qui rétablirait la longueur initiale : d’où l’intérêt d’un béton armé dont l’acier (α = 12,0 × 10⁻⁶ K⁻¹) et le béton (12 × 10⁻⁶ K⁻¹) se dilatent presque identiquement (OpenStax, vol. 2, § 1.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple.</strong> Une poutre d’acier de 10,00 m chauffée de 25 °C s’allonge de <span class="math">ΔL = 12,0 × 10⁻⁶ × 10,00 × 25 ≈ 3,0 × 10⁻³ m</span>, soit 3,0 mm ; la même poutre en aluminium s’allongerait de 5,8 mm, deux fois plus.</p>'
        }
      },
      {
        id: 'thermo-chaleur-calorimetrie',
        title: 'Chaleur et calorimétrie',
        field: 'Cours approfondi',
        summary: 'Chaleur, capacité thermique et calorimétrie',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Élever la température d’un corps demande un transfert thermique. Pour un corps de masse <em>m</em> dont la température varie de ΔT sans changement d’état, ce transfert s’écrit <span class="math">Q = m c ΔT</span>, où <em>c</em> est la <strong>capacité thermique massique</strong> du matériau. La capacité thermique du corps entier vaut <span class="math">C = m c</span> (OpenStax, vol. 2, § 1.4).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">TRANSFERT THERMIQUE SANS CHANGEMENT D’ÉTAT</span>\n<math class="mathml-display" display="block" aria-label="Q égale m c delta T">\n<mrow><mi>Q</mi><mo>=</mo><mi>m</mi><mo>&#x2062;</mo><mi>c</mi><mo>&#x2062;</mo><mi>Δ</mi><mi>T</mi></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’unité historique de la chaleur, la <strong>calorie</strong>, est définie comme l’énergie nécessaire pour élever de 1,00 °C la température de 1,00 g d’eau — précisément entre 14,5 °C et 15,5 °C, car la valeur dépend légèrement de la température. La <strong>kilocalorie</strong> correspond à 1,00 kg d’eau ; c’est elle que l’on retrouve, sous le nom trompeur de « calorie », dans l’étiquetage alimentaire. L’unité SI reste le joule (OpenStax, vol. 2, § 1.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’eau possède une capacité thermique massique supérieure à celle de la plupart des substances usuelles : elle s’échauffe donc peu pour un transfert donné. C’est ce qui explique la relative stabilité de la température d’un lac pendant une journée chaude, alors que l’air, bien moins « capacitif », varie beaucoup (OpenStax, vol. 2, § 1.4).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Capacité thermique massique <em>c</em> de quelques substances (J·kg⁻¹·K⁻¹), valeurs usuelles sous pression atmosphérique — table Wikipédia <em>Capacité thermique massique</em>, valeurs de la littérature</caption>\n<thead><tr><th scope="col">Substance</th><th scope="col">Phase</th><th scope="col">c (J·kg⁻¹·K⁻¹)</th><th scope="col">Substance</th><th scope="col">Phase</th><th scope="col">c (J·kg⁻¹·K⁻¹)</th></tr></thead>\n<tbody>\n<tr><th scope="row">Eau</th><td>liquide</td><td>4 185</td><th scope="row">Aluminium</th><td>solide</td><td>897</td></tr>\n<tr><th scope="row">Eau</th><td>glace (0 °C)</td><td>2 060</td><th scope="row">Fer</th><td>solide</td><td>444</td></tr>\n<tr><th scope="row">Eau</th><td>vapeur</td><td>1 850</td><th scope="row">Cuivre</th><td>solide</td><td>385</td></tr>\n<tr><th scope="row">Air sec</th><td>gaz</td><td>1 005</td><th scope="row">Éthanol</th><td>liquide</td><td>2 460</td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>calorimétrie</strong> exploite la conservation de l’énergie dans une enceinte isolée : la somme des transferts échangés entre les corps est nulle, soit <span class="math">Q<sub>froid</sub> + Q<sub>chaud</sub> = 0</span> avec la convention « chaleur reçue positive, chaleur cédée négative » (OpenStax, vol. 2, équation 1.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple (calcul).</strong> On verse 0,250 kg d’eau à 20,0 °C dans une casserole d’aluminium de 0,500 kg à 150 °C, sans autre échange. La conservation de l’énergie donne <span class="math">(m<sub>eau</sub>c<sub>eau</sub> + m<sub>Al</sub>c<sub>Al</sub>)T<sub>f</sub> = m<sub>eau</sub>c<sub>eau</sub>T<sub>eau</sub> + m<sub>Al</sub>c<sub>Al</sub>T<sub>Al</sub></span>. Avec <span class="math">c<sub>eau</sub> = 4 190 J·kg⁻¹·K⁻¹</span> et <span class="math">c<sub>Al</sub> = 900 J·kg⁻¹·K⁻¹</span>, on obtient <span class="math">T<sub>f</sub> ≈ 59 °C</span> : la température finale est bien plus proche de celle de l’eau, car l’eau stocke beaucoup plus d’énergie par degré (OpenStax, vol. 2, § 1.4).</p>\n<div class="callout"><strong>Limite du modèle à basse température</strong><p>La capacité thermique massique n’est constante qu’en première approximation. À basse température, celle des solides décroît comme la puissance troisième de la température. Cette loi, dite loi de Debye, a été établie en 1912 : Peter Debye en a donné la première explication en traitant les vibrations atomiques avec la théorie quantique que Planck venait d’employer pour le rayonnement. Le modèle de la capacité thermique constante ne décrit donc correctement un solide que au-dessus de sa température de Debye (OpenStax, vol. 2, § 1.4).</p></div>'
        }
      },
      {
        id: 'thermo-changements-etat',
        title: 'Les changements d’état',
        field: 'Cours approfondi',
        summary: 'Changements d’état, chaleur latente et diagrammes de phase',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lors d’une <strong>fusion</strong>, un solide devient liquide ; l’inverse est la <strong>solidification</strong>. Lors d’une <strong>vaporisation</strong>, un liquide devient gaz — évaporation lente ou ébullition ; l’inverse est la <strong>condensation</strong>. Ces changements se produisent à des températures qui dépendent de la pression : une pression élevée favorise la phase la plus dense (OpenStax, vol. 2, § 1.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pendant un changement d’état, la température reste constante alors que le corps échange de l’énergie : cette énergie sert à rompre (ou à établir) les liaisons entre molécules, non à accroître l’agitation. Elle se calcule avec la <strong>chaleur latente massique</strong> <em>L</em> du changement d’état considéré (OpenStax, vol. 2, § 1.5).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CHALEUR LATENTE</span>\n<math class="mathml-display" display="block" aria-label="Q égale m L, avec L la chaleur latente massique de fusion ou de vaporisation">\n<mrow><mi>Q</mi><mo>=</mo><mi>m</mi><mo>&#x2062;</mo><mi>L</mi></mrow>\n</math>\n<span class="formula-label">Eau : L<sub>fusion</sub> ≈ 3,34 × 10⁵ J·kg⁻¹ à 0 °C ; L<sub>vaporisation</sub> ≈ 2,26 × 10⁶ J·kg⁻¹ à 100 °C</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ces valeurs ne sont pas anecdotiques : porter 1,0 kg d’eau de 20 °C à 100 °C demande <span class="math">4 185 × 80 ≈ 3,3 × 10⁵ J</span>, alors que vaporiser ce kilogramme déjà bouillant en demande <span class="math">2,26 × 10⁶ J</span>, près de sept fois plus. La vaporisation est donc l’étape la plus coûteuse en énergie d’une cuisine, d’un sèche-linge ou d’une centrale thermique — et, à l’inverse, une condensation restitue une grande quantité d’énergie.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>diagramme de phase</strong> (graphique pression-température) rassemble ces informations : ses courbes sont les lieux où deux phases coexistent. Pour l’eau, la courbe d’ébullition part de 100 °C à 1,00 atm et se prolonge jusqu’au <strong>point critique</strong>, atteint à 374 °C sous 218 atm. Au-delà, liquide et gaz ne se distinguent plus : le fluide est dit <strong>supercritique</strong>. Le dioxyde de carbone est supercritique au-dessus de 31,0 °C (OpenStax, vol. 2, § 1.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’eau présente une anomalie célèbre : la pente de sa courbe de fusion est <em>négative</em>, car la glace est moins dense que l’eau liquide. Augmenter la pression abaisse alors la température de fusion — on peut fondre de la glace en la comprimant — au rebours de la règle générale « haute pression, point de fusion plus élevé » (OpenStax, vol. 2, § 1.5).</p>\n<div class="callout"><strong>Lire un changement d’état sur une courbe de température</strong><p>Chauffé à puissance constante, un morceau de glace se réchauffe jusqu’à 0 °C, puis sa température stagne le temps que toute la glace fonde, remonte jusqu’à 100 °C, stagne de nouveau pendant l’ébullition. Chaque palier correspond à <span class="math">Q = m L</span> ; chacun se traduit aussi par une variation d’entropie <span class="math">ΔS = m L / T</span>, calculable directement puisque la température y est constante (section 19).</p></div>'
        }
      },
      {
        id: 'thermo-conduction',
        title: 'La conduction thermique',
        field: 'Cours approfondi',
        summary: 'La conduction : de proche en proche, sans transport de matière',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Trois mécanismes seulement assurent tout transfert thermique : la <strong>conduction</strong>, la <strong>convection</strong> et le <strong>rayonnement</strong>. Tous trois ont deux traits communs : ils supposent une différence de température, et plus cette différence est grande, plus le transfert est rapide (OpenStax, vol. 2, § 1.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La conduction est le transfert d’énergie à travers de la matière immobile à l’échelle macroscopique, par contact : chaque atome cède une part de son agitation à son voisin. Dans les métaux s’ajoute la contribution des électrons de conduction, ce qui explique leur efficacité. Un carrelage et une moquette à la même température ne procurent pas la même sensation de froid : la peau perd son énergie beaucoup plus vite au contact du carrelage, dont la conductivité est bien supérieure (OpenStax, vol. 2, § 1.6).</p>\n<div class="formula-block">\n<span class="formula-label">CONDUCTION EN RÉGIME PERMANENT</span>\n<math class="mathml-display" display="block" aria-label="débit de chaleur, dQ sur dt, égale k fois A fois delta T divisé par l’épaisseur d">\n<mrow>\n<mfrac><mrow><mi>d</mi><mi>Q</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac>\n<mo>=</mo>\n<mfrac><mrow><mi>k</mi><mo>&#x2062;</mo><mi>A</mi><mo>&#x2062;</mo><mi>Δ</mi><mi>T</mi></mrow><mi>d</mi></mfrac>\n</mrow>\n</math>\n<span class="formula-label">k : conductivité thermique (W·m⁻¹·K⁻¹) ; A : aire traversée ; d : épaisseur ; ΔT : écart de température</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La conductivité thermique <em>k</em> classe les matériaux : les métaux sont les meilleurs conducteurs — 46 W·m⁻¹·K⁻¹ pour l’acier doux, 80 W·m⁻¹·K⁻¹ pour le fer, 237 W·m⁻¹·K⁻¹ pour l’aluminium, 390 W·m⁻¹·K⁻¹ pour le cuivre et 418 W·m⁻¹·K⁻¹ pour l’argent à 20 °C — tandis que les gaz et les mousses isolantes restent à quelques centièmes de watt par mètre-kelvin. Un vêtement ne « produit » pas de chaleur : il emprisonne de l’air, faible conducteur, et ralentit la fuite d’énergie du corps (OpenStax, vol. 2, § 1.6 ; table Wikipédia <em>Conductivité thermique</em>).</p>\n<div class="callout callout-coral"><strong>Mettre en équation, mais aussi dimensionner</strong><p>En régime permanent, le débit <span class="math">dQ/dt</span> est proportionnel à l’aire et à l’écart de température, et inversement proportionnel à l’épaisseur : doubler l’épaisseur d’un isolant divise le débit par deux, doubler la surface vitrée le double. C’est cette loi qui guide le choix d’un double vitrage ou l’isolation d’un chauffe-eau.</p></div>'
        }
      },
      {
        id: 'thermo-convection-rayonnement',
        title: 'Convection et rayonnement',
        field: 'Cours approfondi',
        summary: 'Convection et rayonnement : transporter de la matière, ou n’émettre que de la lumière',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>convection</strong> est le transfert thermique par <em>déplacement macroscopique</em> d’un fluide. L’air chauffé se dilate, devient moins dense et monte : d’où les courants ascendants au-dessus d’un radiateur, la forme des flammes, les mouvements de l’atmosphère et des océans. Le transfert peut être naturel (poussée d’Archimède) ou forcé, lorsqu’un ventilateur ou une pompe impose le mouvement : un four à air pulsé en est l’exemple domestique (OpenStax, vol. 2, § 1.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>rayonnement</strong> n’a pas besoin de matière : tout corps au-dessus du zéro absolu émet un rayonnement électromagnétique, dont le débit croît très vite avec la température. C’est le rayonnement du Soleil qui réchauffe la Terre, comme celui du corps humain que détecte une caméra thermique. La surface émettrice est caractérisée par son <strong>émissivité</strong> e, comprise entre 0 et 1 ; l’objet idéal d’émissivité 1 est le corps noir (OpenStax, vol. 2, § 1.6).</p>\n<div class="formula-block">\n<span class="formula-label">RAYONNEMENT NET D’UNE SURFACE</span>\n<math class="mathml-display" display="block" aria-label="débit de chaleur rayonné net égale e sigma A multiplié par T deux puissance quatre moins T un puissance quatre">\n<mrow>\n<mfrac><mrow><mi>d</mi><mi>Q</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac>\n<mo>=</mo>\n<mi>e</mi><mo>&#x2062;</mo><mi>σ</mi><mo>&#x2062;</mo><mi>A</mi><mo>&#x2062;</mo><mfenced><mrow><msubsup><mi>T</mi><mn>2</mn><mn>4</mn></msubsup><mo>−</mo><msubsup><mi>T</mi><mn>1</mn><mn>4</mn></msubsup></mrow></mfenced>\n</mrow>\n</math>\n<span class="formula-label">σ = 5,670 374 419 × 10⁻⁸ W·m⁻²·K⁻⁴ (constante de Stefan-Boltzmann, CODATA 2022)</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La quatrième puissance explique beaucoup : doubler la température absolue d’une surface multiplie son émission par seize. Deux corps de même température n’échangent rien <em>en valeur nette</em>, même s’ils émettent et absorbent tous les deux — c’est pourquoi la relation ci-dessus s’écrit en différence de <span class="math">T⁴</span> et non en simple écart de température (OpenStax, vol. 2, § 1.6).</p>\n<div class="callout"><strong>Une même scène, trois mécanismes</strong><p>Face à une cheminée, les trois mécanismes coexistent : le rayonnement réchauffe directement la peau, la conduction chauffe l’air au contact des flammes et des pierres, la convection fait monter cet air chaud. À l’inverse, un corps chaud perd de l’énergie par rayonnement et par conduction à travers les vêtements. Identifier le mécanisme dominant est la première étape de tout bilan thermique.</p></div>'
        }
      },
      {
        id: 'thermo-gaz-parfait',
        title: 'Le gaz parfait',
        field: 'Cours approfondi',
        summary: 'Du gaz parfait aux gaz réels',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans un gaz, les molécules sont très éloignées les unes des autres : à la pression ordinaire, la distance moyenne entre deux molécules dépasse largement leur taille. Les forces d’interaction y sont donc négligeables sauf pendant les chocs, et le comportement du gaz dépend surtout du nombre de molécules par unité de volume et de la température, bien plus que de la nature chimique du gaz (OpenStax, vol. 2, § 2.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">C’est ce qui fonde le <strong>modèle du gaz parfait</strong> : des particules ponctuelles, sans interaction à distance, dont les seules rencontres sont des chocs élastiques. L’état macroscopique est décrit par quatre grandeurs : pression <em>p</em>, volume <em>V</em>, quantité de matière <em>n</em> et température absolue <em>T</em> (OpenStax, vol. 2, § 2.1).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ÉQUATION D’ÉTAT DU GAZ PARFAIT</span>\n<math class="mathml-display" display="block" aria-label="p V égale n R T">\n<mrow><mi>p</mi><mo>&#x2062;</mo><mi>V</mi><mo>=</mo><mi>n</mi><mo>&#x2062;</mo><mi>R</mi><mo>&#x2062;</mo><mi>T</mi></mrow>\n</math>\n<span class="formula-label">R = 8,314 462 618 J·mol⁻¹·K⁻¹ (constante des gaz parfaits, valeur exacte CODATA 2022)</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Historiquement, plusieurs régularités expérimentales ont précédé cette équation : à température constante, le produit <span class="math">pV</span> reste constant (relation de Boyle-Mariotte) ; à pression constante, le volume croît proportionnellement à la température absolue ; à pression et température fixées, le volume est proportionnel au nombre de moles. Des travaux de Boyle, Charles, Gay-Lussac et Avogadro, la thermodynamique a tiré une équation d’état unique, valable pour tous les gaz suffisamment dilués (OpenStax, vol. 2, § 2.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple.</strong> Une mole de gaz parfait occupant 24,0 L à 300 K exerce la pression <span class="math">p = nRT/V = 8,314 × 300 / 0,024 ≈ 1,04 × 10⁵ Pa</span>, soit environ une atmosphère : c’est le volume molaire des gaz aux conditions usuelles de température et de pression.</p>\n<h3>Quand le modèle lâche : l’équation de Van der Waals</h3>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Aux pressions élevées ou près de la liquéfaction, deux effets deviennent mesurables : le volume propre des molécules et l’attraction mutuelle qui réduit la pression exercée sur la paroi. Johannes Diderik van der Waals a proposé en 1873 une équation d’état qui les introduit phénoménologiquement (OpenStax, vol. 2, § 2.1).</p>\n<div class="formula-block">\n<span class="formula-label">ÉQUATION D’ÉTAT DE VAN DER WAALS</span>\n<math class="mathml-display" display="block" aria-label="parenthèse P plus a n carré sur V carré, parenthèse V moins n b, égale n R T">\n<mrow>\n<mrow><mo>(</mo><mi>P</mi><mo>+</mo><mfrac><mrow><mi>a</mi><mo>&#x2062;</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><msup><mi>V</mi><mn>2</mn></msup></mfrac><mo>)</mo></mrow>\n<mrow><mo>(</mo><mi>V</mi><mo>−</mo><mi>n</mi><mo>&#x2062;</mo><mi>b</mi><mo>)</mo></mrow>\n<mo>=</mo><mi>n</mi><mo>&#x2062;</mo><mi>R</mi><mo>&#x2062;</mo><mi>T</mi>\n</mrow>\n</math>\n<span class="formula-label">a : terme de cohésion (attraction) ; b : covolume molaire (volume exclu) ; le gaz parfait correspond à a = b = 0</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le terme <span class="math">a n²/V²</span> corrige la pression mesurée de l’attraction entre molécules, et le terme <span class="math">n b</span> retranche du volume offert le volume occupé par les molécules elles-mêmes. Cette équation décrit qualitativement la continuité entre états liquide et gazeux, la surébullition et le point critique ; elle reste néanmoins peu précise pour la phase liquide et le point critique, et n’est plus guère utilisée aujourd’hui qu’à des fins pédagogiques — elle est la première des équations d’état dites cubiques, encore employées en ingénierie (Wikipédia, <em>Équation d’état de van der Waals</em>).</p>\n<div class="callout callout-coral"><strong>La température absolue, condition de validité</strong><p>Dans <span class="math">pV = nRT</span>, la température s’exprime obligatoirement en kelvins. La linéarité de la loi disparaît si l’on utilise des degrés Celsius : une erreur de conversion est l’erreur la plus fréquente dans les exercices de thermodynamique.</p></div>'
        }
      },
      {
        id: 'thermo-theorie-cinetique',
        title: 'La théorie cinétique',
        field: 'Cours approfondi',
        summary: 'La théorie cinétique : la pression comme somme de millions de chocs',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>théorie cinétique des gaz</strong> relie les grandeurs macroscopiques — pression, température — au mouvement des molécules. Sa démarche repose sur un petit nombre d’hypothèses, énoncées explicitement par OpenStax avant tout calcul : un très grand nombre <em>N</em> de molécules identiques de masse <em>m</em> ; des molécules qui obéissent aux lois de Newton et dont le mouvement est désordonné et isotrope ; des molécules beaucoup plus petites que la distance moyenne qui les sépare, si bien que leur volume propre est négligeable devant celui du récipient ; des chocs parfaitement élastiques avec les parois et entre elles ; enfin des forces extérieures (pesanteur, attractions) négligeables (OpenStax, vol. 2, § 2.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une molécule qui frappe une paroi élastique y renverse la composante normale de sa quantité de mouvement, et exerce donc une impulsion <span class="math">2 m v₁</span>. Comme les chocs sont innombrables, la force qu’ils produisent paraît continue : la pression d’un gaz n’est rien d’autre que la moyenne statistique de ces impacts (OpenStax, vol. 2, § 2.2).</p>\n<div class="formula-block">\n<span class="formula-label">PRESSION DANS UN GAZ PARFAIT</span>\n<math class="mathml-display" display="block" aria-label="p V égale un tiers de N m fois la moyenne de v au carré">\n<mrow>\n<mi>p</mi><mo>&#x2062;</mo><mi>V</mi><mo>=</mo>\n<mfrac><mn>1</mn><mn>3</mn></mfrac><mi>N</mi><mo>&#x2062;</mo><mi>m</mi><mo>⟨</mo><msup><mi>v</mi><mn>2</mn></msup><mo>⟩</mo>\n</mrow>\n</math>\n<span class="formula-label">N : nombre de molécules ; m : masse d’une molécule ; ⟨v²⟩ : moyenne des carrés des vitesses</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En comparant ce résultat à l’équation d’état écrite à l’échelle moléculaire, <span class="math">pV = N k<sub>B</sub> T</span>, on obtient la relation centrale de la théorie : <span class="math">⟨v²⟩ = 3 k<sub>B</sub> T / m</span>. La température absolue apparaît donc comme la mesure directe de l’énergie cinétique de translation moyenne — c’est l’interprétation annoncée en section 01 (OpenStax, vol. 2, § 2.2).</p>\n<div class="callout"><strong>Ce que la dérivation ne suppose pas</strong><p>Les chocs entre molécules n’interviennent pas dans le calcul de la pression : soit ils n’ont pas lieu d’être invoqués, soit ils redistribuent des vitesses sans modifier leur distribution. De plus, le calcul est mené d’abord pour un gaz monoatomique, dont les atomes n’ont aucune énergie de rotation ou de vibration : l’hypothèse sera levée en section 11 avec l’équipartition (OpenStax, vol. 2, § 2.2 et § 2.3).</p></div>'
        }
      },
      {
        id: 'thermo-vitesses-moleculaires',
        title: 'Vitesses moléculaires',
        field: 'Cours approfondi',
        summary: 'Vitesses moléculaires et distribution de Maxwell',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans un gaz, toutes les molécules ne vont pas à la même vitesse. Leur mouvement est aléatoire à l’échelle individuelle, mais la répartition des vitesses d’un grand nombre de molécules est parfaitement reproductible : c’est la <strong>distribution de Maxwell-Boltzmann</strong>, calculée à partir de la théorie cinétique et confirmée expérimentalement (OpenStax, vol. 2, § 2.4).</p>\n<div class="formula-block">\n<span class="formula-label">DISTRIBUTION DES VITESSES MOLÉCULAIRES</span>\n<math class="mathml-display" display="block" aria-label="f de v égale quatre pi fois, m sur deux pi k B T, puissance trois demis, fois v carré, fois exponentielle de moins m v carré sur deux k B T">\n<mrow>\n<mi>f</mi><mo>(</mo><mi>v</mi><mo>)</mo><mo>=</mo>\n<mn>4</mn><mi>π</mi><mo>&#x2062;</mo>\n<msup><mfenced><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mfenced><mrow><mn>3</mn><mo>/</mo><mn>2</mn></mrow></msup>\n<msup><mi>v</mi><mn>2</mn></msup>\n<msup><mi>e</mi><mrow><mo>−</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></msup>\n</mrow>\n</math>\n<span class="formula-label">f(v) dv est la probabilité qu’une molécule ait une vitesse comprise entre v et v + dv ; la fonction est normalisée : son intégrale de 0 à l’infini vaut 1</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La forme de la courbe s’explique par le produit de deux facteurs : le terme <span class="math">v²</span>, qui rend f nulle à vitesse nulle et la fait croître comme une parabole, et l’exponentielle décroissante, qui écrase les très grandes vitesses. Il en résulte un unique maximum. Maxwell a établi que la courbe possède une queue exponentielle : quelques molécules peuvent filer à plusieurs fois la vitesse quadratique moyenne (OpenStax, vol. 2, § 2.4).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">LES TROIS VITESSES CARACTÉRISTIQUES</span>\n<math class="mathml-display" display="block" aria-label="vitesse la plus probable égale racine de deux R T sur M ; vitesse moyenne égale racine de huit R T sur pi M ; vitesse quadratique moyenne égale racine de trois R T sur M">\n<mtable>\n<mtr><mtd><mrow><msub><mi>v</mi><mi>p</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>R</mi><mi>T</mi></mrow><mi>M</mi></mfrac></msqrt></mrow></mtd></mtr>\n<mtr><mtd><mrow><mover><mi>v</mi><mo>¯</mo></mover><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><mi>R</mi><mi>T</mi></mrow><mrow><mi>π</mi><mi>M</mi></mrow></mfrac></msqrt></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>v</mi><mi>rms</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>R</mi><mi>T</mi></mrow><mi>M</mi></mfrac></msqrt></mrow></mtd></mtr>\n</mtable>\n</math>\n<span class="formula-label">M : masse molaire (kg·mol⁻¹) ; v<sub>p</sub> &lt; v̄ &lt; v<sub>rms</sub>, dans le rapport √2 ≈ 1,41 ; √(8/π) ≈ 1,60 ; √3 ≈ 1,73</span>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour l’air (masse molaire 28,965 g·mol⁻¹) à 20 °C, la vitesse quadratique moyenne vaut <span class="math">v<sub>rms</sub> = √(3RT/M) ≈ 502 m·s⁻¹</span>. Pour le diazote (28,0 g·mol⁻¹) à 27 °C, le même calcul donne <span class="math">v<sub>rms</sub> = √(3 × 8,314 × 300,15 / 0,028) ≈ 517 m·s⁻¹</span>. Ces vitesses de quelques centaines de mètres par seconde sont de l’ordre de la vitesse du son dans l’air, ce qui n’est pas un hasard : la propagation du son repose sur les collisions entre molécules.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Quand la température augmente, la distribution ne se contente pas de se décaler vers les grandes vitesses : elle s’élargit. Les vitesses très élevées restent rares — seule une infime fraction des molécules dépasse d’un facteur dix la vitesse quadratique moyenne — mais le poids relatif des molécules rapides croît très vite avec la température, ce qui rend les processus « thermiquement activés » extrêmement sensibles à un échauffement (OpenStax, vol. 2, § 2.4).</p>'
        }
      },
      {
        id: 'thermo-energie-interne-equipartition',
        title: 'Énergie interne et équipartition',
        field: 'Cours approfondi',
        summary: 'Énergie interne, degrés de liberté et équipartition',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>énergie interne</strong> d’un système est la somme de toutes ses énergies microscopiques : énergies cinétiques de translation, de rotation et de vibration des molécules, plus les énergies potentielles associées à leurs interactions. Pour un gaz parfait, dont les molécules n’interagissent pas à distance, l’énergie interne ne dépend que de la température — et non du volume occupé (OpenStax, vol. 2, § 2.3 et § 3.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un gaz <strong>monoatomique</strong> (hélium, néon, argon) ne possède que trois degrés de liberté, ceux de la translation, en nombre égal aux dimensions de l’espace. Le calcul cinétique de la section 09 conduit alors à une énergie interne proportionnelle à la température (OpenStax, vol. 2, § 2.3).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ÉNERGIE INTERNE D’UN GAZ PARFAIT MONOATOMIQUE</span>\n<math class="mathml-display" display="block" aria-label="E interne égale trois demis n R T">\n<mrow><msub><mi>E</mi><mi>int</mi></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>n</mi><mo>&#x2062;</mo><mi>R</mi><mo>&#x2062;</mo><mi>T</mi></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Équipartition de l’énergie.</strong> Le théorème d’équipartition attribue à chaque terme <em>quadratique</em> de l’énergie (chaque degré de liberté) la même contribution moyenne, <span class="math">½ k<sub>B</sub> T</span> par molécule, soit <span class="math">½ R T</span> par mole. Le nombre ν de degrés de liberté fixe donc l’énergie interne molaire et le coefficient γ : <span class="math">γ = (ν + 2)/ν</span>, et l’énergie interne peut s’écrire <span class="math">U = pV/(γ − 1)</span> (Wikipédia, <em>Théorie cinétique des gaz</em>).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Degrés de liberté, capacités thermiques molaires et coefficient γ d’un gaz parfait ; C<sub>V</sub> = νR/2 et C<sub>p</sub> = C<sub>V</sub> + R, avec R = 8,314 462 618 J·mol⁻¹·K⁻¹</caption>\n<thead><tr><th scope="col">Type de gaz</th><th scope="col">Degrés de liberté ν</th><th scope="col">C<sub>V</sub> (J·mol⁻¹·K⁻¹)</th><th scope="col">C<sub>p</sub> (J·mol⁻¹·K⁻¹)</th><th scope="col">γ = C<sub>p</sub>/C<sub>V</sub></th></tr></thead>\n<tbody>\n<tr><th scope="row">Monoatomique</th><td>3 (translations)</td><td>12,47</td><td>20,79</td><td>1,67</td></tr>\n<tr><th scope="row">Diatomique</th><td>5 (3 + 2 rotations)</td><td>20,79</td><td>29,10</td><td>1,40</td></tr>\n<tr><th scope="row">Polyatomique</th><td>6 (3 + 3 rotations)</td><td>24,94</td><td>33,26</td><td>1,33</td></tr>\n<tr><th scope="row">Diatomique à haute température</th><td>7 (vibration active)</td><td>29,10</td><td>37,41</td><td>1,29</td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple (d’après OpenStax, exemple 2.8).</strong> Un échantillon de 0,125 kg de xénon (masse molaire 131,3 g·mol⁻¹, donc <span class="math">n = 125 / 131,3 ≈ 0,952 mol</span>) est enfermé à 20,0 °C dans un cylindre rigide. Il reçoit 180 J à travers les parois. Comme le xénon est monoatomique, <span class="math">ΔT = 2Q/(3nR) ≈ 15,2 °C</span> : la température d’équilibre s’établit vers 35,2 °C (OpenStax, vol. 2, exemple 2.8).</p>\n<div class="callout"><strong>Un modèle qui se vérifie sur les métaux aussi</strong><p>Le même raisonnement d’équipartition s’applique aux solides, dont chaque atome vibre selon trois directions : le modèle prévoit une capacité thermique molaire voisine de 25 J·mol⁻¹·K⁻¹, indépendante de la substance. Il échoue à basse température, où la capacité thermique décroît comme T³ — ce qui a précisément motivé la théorie quantique de Debye (OpenStax, vol. 2, § 2.3).</p></div>'
        }
      },
      {
        id: 'thermo-capacites-thermiques-gaz',
        title: 'Capacités thermiques des gaz',
        field: 'Cours approfondi',
        summary: 'Chauffer un gaz à volume constant ou à pression constante',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">On distingue deux façons de chauffer un gaz, et elles ne demandent pas la même quantité d’énergie. La <strong>chaleur molaire à volume constant</strong>, notée <span class="math">C<sub>V</sub></span>, correspond à un échauffement dans un récipient rigide : la pression augmente, et toute l’énergie fournie sert à élever la température. La <strong>chaleur molaire à pression constante</strong>, notée <span class="math">C<sub>p</sub></span>, correspond à un échauffement sous piston chargé d’un poids : le gaz se dilate, et une part de l’énergie reçue est consommée par le travail de dilatation (OpenStax, vol. 2, § 3.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour un gaz parfait, la différence entre ces deux capacités est constante et vaut exactement la constante des gaz parfaits : <span class="math">C<sub>p</sub> − C<sub>V</sub> = R</span>. L’explication est géométrique : lors d’une dilatation, le gaz pousse le piston sur toute la distance traversée, ce qui exige un travail supplémentaire égal à <span class="math">p ΔV = nR ΔT</span> par mole (OpenStax, vol. 2, § 3.5).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CAPACITÉS MOLAIRES D’UN GAZ PARFAIT</span>\n<math class="mathml-display" display="block" aria-label="C p moins C V égale R ; C V égale nu fois R sur deux ; gamma égale C p sur C V">\n<mtable>\n<mtr><mtd><mrow><msub><mi>C</mi><mi>p</mi></msub><mo>−</mo><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><mi>R</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><mfrac><mrow><mi>ν</mi><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>γ</mi><mo>=</mo><mfrac><msub><mi>C</mi><mi>p</mi></msub><msub><mi>C</mi><mi>V</mi></msub></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Lecture des valeurs.</strong> Pour un gaz monoatomique (ν = 3), <span class="math">C<sub>V</sub> = 3R/2 ≈ 12,47 J·mol⁻¹·K⁻¹</span> et <span class="math">C<sub>p</sub> = 5R/2 ≈ 20,79 J·mol⁻¹·K⁻¹</span>, donc <span class="math">γ = 5/3 ≈ 1,67</span>. Pour un gaz diatomique aux températures usuelles (ν = 5), <span class="math">C<sub>V</sub> = 5R/2 ≈ 20,79 J·mol⁻¹·K⁻¹</span> et <span class="math">C<sub>p</sub> = 7R/2 ≈ 29,10 J·mol⁻¹·K⁻¹</span>, donc <span class="math">γ = 7/5 = 1,40</span>. Ces valeurs sont celles du tableau de la section 11.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Chauffage isochore et isobare.</strong> Si <span class="math">n</span> moles de gaz parfait sont chauffées à volume constant, l’énergie reçue vaut <span class="math">Q = nC<sub>V</sub> ΔT</span> ; à pression constante, elle vaut <span class="math">Q = nC<sub>p</sub> ΔT</span>. La différence <span class="math">Q<sub>p</sub> − Q<sub>V</sub> = nR ΔT</span> correspond au travail effectué par le gaz qui se dilate sous la pression constante (OpenStax, vol. 2, § 3.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple (calcul).</strong> Un ballon de foot en caoutchouc, de volume 154 L, contient de l’air à 25,0 °C et à la pression atmosphérique. Sa paroi est souple : la pression reste constante quand le ballon se dilate. Le nombre de moles vaut <span class="math">n = pV/RT ≈ (101 325 × 0,154)/(8,314 × 298,15) ≈ 6,30 mol</span>. Pour élever la température de 25,0 °C à 125 °C, soit <span class="math">ΔT = 100 K</span>, la quantité de chaleur nécessaire est <span class="math">Q = nC<sub>p</sub>ΔT</span>, avec <span class="math">C<sub>p</sub> = 7R/2 ≈ 29,1 J·mol⁻¹·K⁻¹</span> pour l’air assimilé à un gaz diatomique. On obtient <span class="math">Q ≈ 6,30 × 29,1 × 100 ≈ 1,83 × 10⁴ J</span>, soit environ 18 kJ (OpenStax, vol. 2, § 3.5).</p>\n<div class="callout"><strong>Une conséquence quotidienne</strong><p>C’est parce que <span class="math">C<sub>p</sub> &gt; C<sub>V</sub></span> qu’une vapeur surchauffée dans une casserole est plus chaude que l’eau qui l’a produite : le travail de dilatation a absorbé une partie de la chaleur, et la vapeur sort à une température supérieure à 100 °C. À l’inverse, comprimer rapidement un spray refroidit le contenu, car le travail fourni au gaz élève sa température (section 15).</p></div>'
        }
      },
      {
        id: 'thermo-premier-principe',
        title: 'Travail, chaleur, premier principe',
        field: 'Cours approfondi',
        summary: 'L’énergie se conserve : le premier principe',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La thermodynamique distingue deux façons d’échanger de l’énergie entre un système et le milieu : le <strong>travail</strong>, transfert d’énergie associé à une force agissant sur une distance (compression, dilatation), et la <strong>chaleur</strong>, transfert d’énergie dû à une différence de température, par conduction, convection ou rayonnement. Ce sont des mécanismes de transfert, non des contenus : un système « contient » de l’énergie interne, il ne « contient » pas de chaleur (OpenStax, vol. 2, § 3.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>premier principe</strong> énonce la conservation de l’énergie. Avec la convention d’OpenStax — <span class="math">Q &gt; 0</span> si le système reçoit de l’énergie, <span class="math">W &gt; 0</span> si le système fournit du travail — il s’écrit :</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">PREMIER PRINCIPE DE LA THERMODYNAMIQUE</span>\n<math class="mathml-display" display="block" aria-label="Delta E int égale Q moins W">\n<mrow><mi>Δ</mi><msub><mi>E</mi><mi>int</mi></msub><mo>=</mo><mi>Q</mi><mo>−</mo><mi>W</mi></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Cette écriture se lit : la variation d’énergie interne d’un système est égale à la chaleur reçue moins le travail fourni. Elle traduit le bilan d’énergie d’un système fermé, où aucun échange de matière n’a lieu avec l’extérieur (OpenStax, vol. 2, § 3.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Le travail mécanique.</strong> Lorsque la pression exercée sur un gaz varie pendant une transformation, le travail fourni par le gaz est l’aire sous la courbe de pression dans un diagramme pV. Si la pression reste constante, ce travail se calcule algébriquement ; si elle varie, il faut intégrer le produit <span class="math">p dV</span>.</p>\n<div class="formula-block">\n<span class="formula-label">TRAVAIL FOURNI PAR UN GAZ</span>\n<math class="mathml-display" display="block" aria-label="W égale l\'intégrale de p dV ; si p constante W égale p fois Delta V">\n<mtable>\n<mtr><mtd><mrow><mi>W</mi><mo>=</mo><mo>∫</mo><mi>p</mi><mspace width="0.2em"/><mi>d</mi><mi>V</mi></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>p</mi><mspace width="0.3em"/><mtext>constante</mtext><mo>:</mo><mspace width="0.3em"/><mi>W</mi><mo>=</mo><mi>p</mi><mspace width="0.2em"/><mi>Δ</mi><mi>V</mi></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le signe du travail découle de la convention : une <strong>dilatation</strong> (<span class="math">ΔV &gt; 0</span>) fournit du travail (<span class="math">W &gt; 0</span>), une <strong>compression</strong> (<span class="math">ΔV &lt; 0</span>) en consomme (<span class="math">W &lt; 0</span>). Sur le diagramme pV, le travail fourni par le gaz correspond à l’aire <em>sous</em> la courbe de transformation (OpenStax, vol. 2, § 3.2 et § 3.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans le cas particulier d’une <strong>transformation isotherme</strong> d’un gaz parfait, l’énergie interne ne varie pas — elle ne dépend que de la température — donc <span class="math">ΔE<sub>int</sub> = 0</span> et <span class="math">Q = W</span>. Toute l’énergie reçue est convertie en travail (OpenStax, vol. 2, § 3.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>L’enthalpie.</strong> Lorsqu’un système n’est soumis qu’à un travail de pression, on introduit une fonction d’état <strong>enthalpie</strong> <span class="math">H = E<sub>int</sub> + pV</span>, dont la variation à pression constante est égale à la chaleur échangée : <span class="math">ΔH = Q<sub>p</sub></span>. Pour un gaz parfait, <span class="math">ΔH = nC<sub>p</sub> ΔT</span>. Cette grandeur suit les changements d’état à pression atmosphérique : les chaleurs de fusion et de vaporisation sont des variations d’enthalpie (OpenStax, vol. 2, § 3.5).</p>\n<div class="callout"><strong>Un bilan à quatre postes</strong><p>Le premier principe permet de fermer un bilan d’énergie en une seule égalité, <span class="math">E<sub>entrée</sub> = E<sub>sortie</sub></span>, où chaque poste est un travail ou une chaleur. Appliqué à un ballon dans lequel on envoie du travail électrique pour chauffer un gaz contenu à volume constant, il donne <span class="math">W<sub>élec</sub> = ΔE<sub>int</sub> = nC<sub>V</sub> ΔT</span> : c’est exactement le résultat de la section 11.</p></div>'
        }
      },
      {
        id: 'thermo-transformations-pv',
        title: 'Transformations et diagramme pV',
        field: 'Cours approfondi',
        summary: 'Lire une transformation dans un diagramme pV',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un <strong>diagramme pV</strong> représente l’état d’un gaz parfait par un point : l’abscisse est le volume V, l’ordonnée la pression p. Une transformation correspond à une <em>courbe</em> qui relie deux points de ce plan (OpenStax, vol. 2, § 3.4). Quatre transformations usuelles se combinent pour décrire un cycle.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Transformations usuelles d’un gaz parfait : relation dans le diagramme pV, variation d’énergie interne et travail fourni</caption>\n<thead><tr><th scope="col">Transformation</th><th scope="col">Relation</th><th scope="col">ΔE<sub>int</sub></th><th scope="col">Travail W</th></tr></thead>\n<tbody>\n<tr><th scope="row">Isotherme (T = cte)</th><td><span class="math">pV = nRT</span> — hyperbole</td><td>0</td><td><span class="math">nRT ln(V<sub>f</sub>/V<sub>i</sub>)</span></td></tr>\n<tr><th scope="row">Isobare (p = cte)</th><td><span class="math">V ∝ T</span> — horizontale</td><td><span class="math">nC<sub>V</sub>ΔT</span></td><td><span class="math">pΔV = nRΔT</span></td></tr>\n<tr><th scope="row">Isochore (V = cte)</th><td><span class="math">p ∝ T</span> — verticale</td><td><span class="math">nC<sub>V</sub>ΔT</span></td><td>0</td></tr>\n<tr><th scope="row">Adiabatique (Q = 0)</th><td><span class="math">pV<sup>γ</sup> = cte</span> — pente raide</td><td><span class="math">−W</span></td><td><span class="math">(p<sub>i</sub>V<sub>i</sub> − p<sub>f</sub>V<sub>f</sub>)/(γ − 1)</span></td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le tableau se lit directement à partir du premier principe. En isochore, le gaz ne se dilate pas : il ne fournit aucun travail, et toute la chaleur reçue élève son énergie interne. En isobare, une partie de la chaleur est consommée par la dilatation. En isotherme, l’énergie interne ne bouge pas : chaleur et travail se compensent exactement (OpenStax, vol. 2, § 3.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple : détente isothermale.</strong> Une mole de gaz parfait à <span class="math">T = 300 K</span> passe de <span class="math">V = 1 L</span> à <span class="math">V = 3 L</span> par détente isothermale réversible. Le travail fourni vaut <span class="math">W = nRT ln(3/1) = 1 × 8,314 × 300 × ln 3 ≈ 2,74 × 10³ J</span>. Cette énergie est puisée dans l’énergie interne du gaz, qu’un bain-marie à 300 K doit fournir pour maintenir la température constante (OpenStax, vol. 2, § 3.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Le diagramme h–s.</strong> Pour le dimensionnement des machines thermiques, on utilise un diagramme <em>enthalpie–entropie</em> plutôt que le diagramme pV : ces représentations rendent visible l’entropie générée et permettent de lire directement le rendement réel d’un cycle (cours de thermodynamique appliquée).</p>\n<div class="callout"><strong>Pourquoi un diagramme pV ne suffit pas</strong><p>Le diagramme pV donne le travail fourni par le gaz, mais il ne dit rien de la chaleur reçue. Deux cycles peuvent rapport la même aire tout en échangeant des quantités de chaleur différentes. C’est pourquoi le second principe exige de raisonner sur l’entropie (sections 18 à 20), grandeur absente du diagramme pV.</p></div>'
        }
      },
      {
        id: 'thermo-transformations-adiabatiques',
        title: 'Transformations adiabatiques',
        field: 'Cours approfondi',
        summary: 'Se refroidir en fournissant du travail',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une transformation est <strong>adiabatique</strong> lorsqu’aucune chaleur n’échange entre le système et le milieu : <span class="math">Q = 0</span>. Une paroi isolante, un cylindre à piston suffisamment lent, ou une détente si rapide que la chaleur n’a pas le temps de circuler en sont des approximations usuelles (OpenStax, vol. 2, § 3.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le premier principe donne alors <span class="math">ΔE<sub>int</sub> = −W</span> : le travail fourni vient nécessairement de l’énergie interne, qui diminue. Or, pour un gaz parfait, l’énergie interne est fonction croissante de la température (section 11). Il en découle un résultat unique et contre-intuitif : <strong>un gaz qui se dilate en adiabatique se refroidit, et un gaz qu’on comprime en adiabatique s’échauffe.</strong> C’est le principe du moteur à air comprimé, de la pompe à vélo et de la détente de Joule-Thomson (OpenStax, vol. 2, § 3.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour un gaz parfait, l’intégration du premier principe en remplaçant <span class="math">dE<sub>int</sub> = nC<sub>V</sub> dT</span> et <span class="math">p = nRT/V</span> conduit à la <strong>loi de Poisson</strong> :</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">TRANSFORMATION ADIABATIQUE D’UN GAZ PARFAIT</span>\n<math class="mathml-display" display="block" aria-label="p V puissance gamma égale constante ; T V puissance gamma moins un égale constante">\n<mtable>\n<mtr><mtd><mrow><mi>p</mi><msup><mi>V</mi><mi>γ</mi></msup><mo>=</mo><mtext>constante</mtext></mrow></mtd></mtr>\n<mtr><mtd><mrow><mi>T</mi><msup><mi>V</mi><mrow><mi>γ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mtext>constante</mtext></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Sur un diagramme pV, une adiabatique est une courbe <em>plus raide</em> que l’isotherme passant par le même point, puisque <span class="math">dp/dV = −γp/V</span> le long de l’adiabatique, contre <span class="math">−p/V</span> le long de l’isotherme. La compression de l’air dans une pompe à vélo en donne la démonstration directe : la pression monte plus vite qu’en compression isotherme, et l’air s’échauffe assez pour que l’on ne tienne pas la pompe (OpenStax, vol. 2, § 3.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple : détente d’air comprimé.</strong> Un litre d’air à 20 atm et 20 °C se détend adiabatiquement jusqu’à 1 atm. Pour l’air assimilé à un gaz diatomique, <span class="math">γ = 1,40</span>, donc <span class="math">T<sub>f</sub> = T<sub>i</sub>(p<sub>i</sub>/p<sub>f</sub>)<sup>(γ−1)/γ</sup></span>, soit <span class="math">T<sub>f</sub> ≈ 293 × 20<sup>0,286</sup> ≈ 293 × 2,42 ≈ 709 K</span> : l’air sort à environ 436 °C, ce qui explique qu’un compresseur de pneumatique devienne brûlant après usage (OpenStax, vol. 2, § 3.6).</p>\n<div class="callout"><strong>La détente de Joule-Thomson</strong><p>Lorsqu’un gaz s’écoule d’un cylindre à forte pression vers un cylindre à faible pression à travers un tuyau étroit, l’écoulement est adiabatique et le bilan enthalpique est constant : <span class="math">H<sub>initial</sub> = H<sub>final</sub></span>. La variation de température qui en résulte porte le nom d’<em>effet Joule-Thomson</em>. C’est le principe des machines à froid, qui utilisent une vanne de détente pour refroidir un fluide frigorigène, et il explique que le propane d’un camping-gaz reste liquide dans sa bouteille sous pression alors qu’il est gazeux à la pression atmosphérique (OpenStax, vol. 2, § 3.6 ; cours de chimie).</p></div>'
        }
      },
      {
        id: 'thermo-machines-thermiques',
        title: 'Machines thermiques',
        field: 'Cours approfondi',
        summary: 'Convertir de la chaleur en travail : le rendement',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une <strong>machine thermique</strong> est un dispositif qui prélève de la chaleur d’une source chaude, en convertit une partie en travail mécanique, et rejette le reste dans une source froide. Il faut donc au moins deux réservoirs de température : une centrale électrique rejette sa chaleur à l’atmosphère ou dans un cours d’eau, un moteur à combustion interne rejette celle des gaz d’échappement dans l’air ambiant (OpenStax, vol. 2, § 4.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une machine thermique fonctionne par un <strong>cycle</strong> : une substance motrice est ramenée à son état initial après avoir traversé un ensemble de transformations. Sur le diagramme pV, un cycle est une <em>boucle</em> fermée, et le travail total fourni par le gaz est l’aire enclosed par la courbe (OpenStax, vol. 2, § 4.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Sur un cycle complet, l’énergie interne retrouve sa valeur initiale, donc <span class="math">ΔE<sub>int</sub> = 0</span> et le premier principe impose <span class="math">Q<sub>h</sub> = W + Q<sub>c</sub></span>. Le <strong>rendement</strong> est la fraction de la chaleur absorbée qui est effectivement transformée en travail utile :</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">RENDEMENT D’UNE MACHINE THERMIQUE</span>\n<math class="mathml-display" display="block" aria-label="eta égale W divisé par Q h, égale 1 moins Q c divisé par Q h">\n<mrow><mi>η</mi><mo>=</mo><mfrac><mi>W</mi><msub><mi>Q</mi><mi>h</mi></msub></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>Q</mi><mi>c</mi></msub><msub><mi>Q</mi><mi>h</mi></msub></mfrac></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>La question centrale.</strong> Existe-t-il une machine qui convertirait <em>toute</em> la chaleur d’une source en travail ? La réponse thermodynamique est donnée par le principe de Carnot (section 17). On peut noter d’emblée deux raisons pour lesquelles le rendement réel reste inférieur au rendement maximal : les machines réelles sont irréversibles, et elles n’opèrent pas entre deux réservoirs à température uniforme (section 18).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Réfrigérateur et pompe à chaleur.</strong> Les mêmes cycles peuvent être parcourus en sens inverse : on fournit alors du travail pour transférer de la chaleur du froid vers le chaud. Un <strong>réfrigérateur</strong> est conçu pour extraire la chaleur d’une source froide ; une <strong>pompe à chaleur</strong>, pour la rejeter dans une source chaude. On mesure leur performance par un <em>coefficient de performance</em> K, qui n’a pas la même nature que le rendement et peut dépasser 1 (OpenStax, vol. 2, § 4.3).</p>\n<div class="formula-block">\n<span class="formula-label">COEFFICIENTS DE PERFORMANCE</span>\n<math class="mathml-display" display="block" aria-label="K R égale Q c divisé par W ; K P égale Q h divisé par W">\n<mtable>\n<mtr><mtd><mrow><msub><mi>K</mi><mi>R</mi></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mi>c</mi></msub><mi>W</mi></mfrac><mo>=</mo><mfrac><msub><mi>Q</mi><mi>c</mi></msub><mrow><msub><mi>Q</mi><mi>h</mi></msub><mo>−</mo><msub><mi>Q</mi><mi>c</mi></msub></mrow></mfrac></mrow></mtd></mtr>\n<mtr><mtd><mrow><msub><mi>K</mi><mi>P</mi></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mi>h</mi></msub><mi>W</mi></mfrac><mo>=</mo><mfrac><msub><mi>Q</mi><mi>h</mi></msub><mrow><msub><mi>Q</mi><mi>h</mi></msub><mo>−</mo><msub><mi>Q</mi><mi>c</mi></msub></mrow></mfrac></mrow></mtd></mtr>\n</mtable>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">On lit immédiatement que <span class="math">K<sub>P</sub> &gt; K<sub>R</sub></span> : la pompe à chaleur rejette <span class="math">Q<sub>h</sub></span>, plus grand que <span class="math">Q<sub>c</sub></span>, pour un même travail. Une pompe à chaleur qui chauffe un logement restitue à l’intérieur, sous forme de chaleur, une énergie supérieure à celle consommée en électricité : le reste provient de l’air extérieur, extrait gratuitement. C’est pourquoi un climatiseur réversible est plus économique qu’un simple chauffage électrique à résistance, qui n’est qu’un cas particulier de <span class="math">K<sub>P</sub> = 1</span> (OpenStax, vol. 2, § 4.3).</p>\n<div class="callout"><strong>Rendement et coefficient de performance : deux grandeurs à ne pas confondre</strong><p>Le rendement <span class="math">η</span> est strictement inférieur à 1, car une partie de la chaleur doit être rejetée. Le coefficient K d’un réfrigérateur est un rapport de deux flux d’énergie et peut atteindre 4 ou 5 sans qu’aucune loi ne soit violée : cela signifie qu’on extrait quatre fois plus de chaleur du froid que l’énergie investie, non qu’on crée de l’énergie. La différence tient à ce que le travail fourni est un apport d’énergie extérieur, tandis que la chaleur extraite était déjà présente dans le système (OpenStax, vol. 2, § 4.3).</p></div>'
        }
      },
      {
        id: 'thermo-cycle-carnot',
        title: 'Le cycle de Carnot',
        field: 'Cours approfondi',
        summary: 'La machine la plus efficace qui soit',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En 1824, l’ingénieur français Sadi Carnot (1796-1832) chercha à améliorer le rendement des machines à vapeur de son époque. Il construisit un cycle idéal — le <strong>cycle de Carnot</strong> — dont le rendement est le plus élevé possible entre deux réservoirs de températures données (OpenStax, vol. 2, § 4.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le cycle de Carnot est <strong>réversible</strong> : chacune de ses quatre transformations se déroule si lentement et si près de l’équilibre que l’on peut la faire marche arrière sans modifier le milieu. Il est composé de deux transformations isothermes et de deux transformations adiabatiques, avec une substance motrice qui est un gaz parfait (OpenStax, vol. 2, § 4.5).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les quatre transformations du cycle de Carnot, et la relation qui les relie</caption>\n<thead><tr><th scope="col">Étape</th><th scope="col">Type</th><th scope="col">Ce qui se passe</th><th scope="col">Relation</th></tr></thead>\n<tbody>\n<tr><th scope="row">M → N</th><td>Isotherme à T<sub>h</sub></td><td>Le gaz absorbe Q<sub>h</sub> et fournit W<sub>1</sub></td><td><span class="math">Q<sub>h</sub> = nRT<sub>h</sub> ln(V<sub>N</sub>/V<sub>M</sub>)</span></td></tr>\n<tr><th scope="row">N → O</th><td>Adiabatique</td><td>Le gaz se dilate, T tombe de T<sub>h</sub> à T<sub>c</sub></td><td><span class="math">T<sub>h</sub>V<sub>N</sub><sup>γ−1</sup> = T<sub>c</sub>V<sub>O</sub><sup>γ−1</sup></span></td></tr>\n<tr><th scope="row">O → P</th><td>Isotherme à T<sub>c</sub></td><td>Le gaz est comprimé et rejette Q<sub>c</sub></td><td><span class="math">Q<sub>c</sub> = nRT<sub>c</sub> ln(V<sub>O</sub>/V<sub>P</sub>)</span></td></tr>\n<tr><th scope="row">P → M</th><td>Adiabatique</td><td>Le gaz est comprimé, T remonte à T<sub>h</sub></td><td><span class="math">T<sub>c</sub>V<sub>P</sub><sup>γ−1</sup> = T<sub>h</sub>V<sub>M</sub><sup>γ−1</sup></span></td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pendant l’expansion isotherme à <span class="math">T<sub>h</sub></span>, l’énergie interne ne varie pas puisque la température est constante : <span class="math">ΔE<sub>int</sub> = 0</span>, donc <span class="math">Q<sub>h</sub> = W<sub>1</sub></span>. Les deux relations adiabatiques se déduisent de la loi de Poisson de la section 15 (OpenStax, vol. 2, § 4.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En combinant ces quatre relations, on obtient le <strong>rendement de Carnot</strong>, qui ne dépend que des deux températures :</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">RENDEMENT DE CARNOT</span>\n<math class="mathml-display" display="block" aria-label="eta C égale 1 moins T c divisé par T h">\n<mrow><msub><mi>η</mi><mi>C</mi></msub><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>T</mi><mi>c</mi></msub><msub><mi>T</mi><mi>h</mi></msub></mfrac></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Interprétation.</strong> Le rendement est d’autant plus élevé que la source chaude est chaude et la source froide froide. Mais <span class="math">η<sub>C</sub> &lt; 1</span> dès que <span class="math">T<sub>c</sub> &gt; 0 K</span> : <strong>aucune machine thermique ne peut convertir la totalité de la chaleur qu’elle reçoit en travail</strong>. Le second principe est ainsi l’équivalent thermodynamique de l’énoncé de Clausius : il est impossible de construire une machine qui fonctionnerait seule entre deux réservoirs, sans autre effet (OpenStax, vol. 2, § 4.4 et § 4.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple numérique.</strong> Une machine de Carnot opérant entre <span class="math">T<sub>h</sub> = 500 K</span> et <span class="math">T<sub>c</sub> = 300 K</span> a pour rendement <span class="math">η<sub>C</sub> = 1 − 300/500 = 0,40</span>, soit <strong>40 %</strong>. Si elle absorbe <span class="math">Q<sub>h</sub> = 1 000 J</span>, elle fournit <span class="math">W = 400 J</span> et rejette <span class="math">Q<sub>c</sub> = 600 J</span> vers la source froide (OpenStax, vol. 2, § 4.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Machine de Carnot fonctionnant en sens inverse.</strong> Parcouru à l’envers, le cycle devient un <strong>réfrigérateur de Carnot</strong> : on fournit du travail pour extraire <span class="math">Q<sub>c</sub></span> du froid et rejeter <span class="math">Q<sub>h</sub></span> vers le chaud. Le coefficient de performance maximal vaut <span class="math">K<sub>R</sub> = T<sub>c</sub>/(T<sub>h</sub> − T<sub>c</sub>)</span> : à <span class="math">T<sub>c</sub> = 300 K</span> et <span class="math">T<sub>h</sub> = 500 K</span>, on trouve <span class="math">K<sub>R</sub> = 300/200 = 1,5</span> (OpenStax, vol. 2, § 4.5).</p>\n<div class="callout"><strong>Une échelle de température absolue</strong><p>Comme <span class="math">η<sub>C</sub></span> ne dépend que du <em>rapport</em> des températures, la machine de Carnot permet de définir une échelle absolue : il suffit de fixer le zéro à la température de la source froide, ce qui conduit au zéro absolu. C’est ainsi que Lord Kelvin a construit l’échelle thermodynamique, celle que nous utilisons aujourd’hui, et dont la définition a été revisitée en 2019 en termes de constante de Boltzmann (NIST, <em>Kelvin: Introduction</em> ; OpenStax, vol. 2, § 4.5).</p></div>'
        }
      },
      {
        id: 'thermo-second-principe-enonces',
        title: 'Irréversibilité et second principe',
        field: 'Cours approfondi',
        summary: 'Ce que le premier principe ne dit pas',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le premier principe énonce que l’énergie se conserve. Il ne dit rien du <em>sens</em> dans lequel les transformations se produisent. Pourtant, certains échanges d’énergie qui ne violeraient pas la conservation sont impossibles : la chaleur ne passe pas spontanément d’un corps froid vers un corps chaud, et un système isolé n’évolue pas spontanément vers un état plus ordonné (OpenStax, vol. 2, § 4.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La distinction repose sur les <strong>processus réversibles et irréversibles</strong>. Un processus est <strong>réversible</strong> si le système <em>et</em> son environnement peuvent être restitués exactement dans leur état initial en parcourant le chemin inverse. La condition nécessaire est que la transformation soit quasi statique, c’est-à-dire que le système reste à l’équilibre à chaque instant. Retourner le système est toujours possible ; rendre le milieu à son état initial aussi est la partie difficile (OpenStax, vol. 2, § 4.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>L’exemple de la détente libre.</strong> Un gaz parfait est enfermé dans la moitié d’un récipient thermos, l’autre moitié étant sous le vide. On retire la cloison : le gaz remplit tout le volume. Ni chaleur ni travail n’échangent (<span class="math">Q = 0</span>, <span class="math">W = 0</span>, donc <span class="math">ΔE<sub>int</sub> = 0</span> et la température reste constante), le volume double et la pression est divisée par deux. Le premier principe est satisfait. Pourtant, aucune suite de manipulations ne ramènera toutes les molécules dans la moitié initiale sans modifier quoi que ce soit dans l’environnement : la transformation est <strong>irréversible</strong> (OpenStax, vol. 2, § 4.1).</p>\n<div class="formula-block">\n<span class="formula-label">DÉTENTE LIBRE D’UN GAZ PARFAIT</span>\n<math class="mathml-display" display="block" aria-label="p finale égale p initiale divisée par deux">\n<mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mfrac><msub><mi>p</mi><mi>i</mi></msub><mn>2</mn></mfrac><mspace width="0.6em"/><mrow><mi>Δ</mi><msub><mi>E</mi><mi>int</mi></msub><mo>=</mo><mn>0</mn></mrow></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le second principe s’énnonce de plusieurs façons équivalentes. OpenStax en présente deux formes, toutes deux tirées du caractère irréversible des processus spontanés (OpenStax, vol. 2, § 4.4).</p>\n<div class="callout"><strong>Énoncé de Kelvin-Planck</strong><p>« Il est impossible de convertir en travail la chaleur d’une source unique, sans aucune autre effet. » La restriction « sans aucune autre effet » est très forte : un moteur peut absorber de la chaleur et la convertir intégralement en travail s’il n’achève pas un cycle, mais alors la substance motrice n’est pas revenue à son état initial, et un « autre effet » a eu lieu (OpenStax, vol. 2, § 4.4).</p></div>\n<div class="callout"><strong>Énoncé de Clausius</strong><p>« Il est impossible de construire un appareil qui transfère de la chaleur d’un corps froid vers un corps chaud sans apport d’énergie extérieure. » C’est la formulation qui traduit l’observation quotidienne : tout transfert de chaleur dans le sens d’une température croissante exige un apport d’énergie (OpenStax, vol. 2, § 4.4).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ces deux énoncés sont <strong>équivalents</strong> : si l’un est faux, l’autre l’est aussi. OpenStax le démontre en supposant l’existence d’un réfrigérateur parfait qui transférerait une chaleur <span class="math">Q</span> du froid vers le chaud sans travail, et en montrant qu’on pourrait alors coupler cette machine à un moteur réel opérant entre les mêmes deux températures pour obtenir un moteur de rendement 1, ce qui est impossible (OpenStax, vol. 2, § 4.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Une troisième formulation, en termes d’entropie.</strong> L’énoncé le plus fécond énonce que l’entropie de l’Univers augmente dans toute transformation irréversible, et reste constante dans toute transformation réversible. C’est cette forme qui fait le lien entre la thermodynamique macroscopique et la physique statistique (section 20).</p>\n<div class="callout"><strong>Pourquoi cela limite les rendements</strong><p>Le second principe impose <span class="math">η &lt; η<sub>C</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></span> pour toute machine réelle. Trois Contributions s’ajoutent à cet écart : les frottements mécaniques, les échanges thermiques avec l’extérieur à température non uniforme, et les gradients de température internes au moteur. C’est pourquoi le rendement mesuré d’une centrale, d’un moteur d’automobile ou d’un turboréacteur reste nettement inférieur au rendement de Carnot calculé sur ses températures de source et de rejet (OpenStax, vol. 2, § 4.5).</p></div>'
        }
      },
      {
        id: 'thermo-entropie',
        title: 'L’entropie',
        field: 'Cours approfondi',
        summary: 'La grandeur qui rend compte du sens des transformations',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le second principe s’exprime le plus utilement en termes d’une fonction d’état appelée <strong>entropie</strong>, notée <span class="math">S</span>. Comme l’énergie interne, l’entropie est une fonction d’état : la variation <span class="math">ΔS</span> entre deux états ne dépend pas du chemin suivi, mais seulement des variables thermodynamiques de ces deux états (OpenStax, vol. 2, § 4.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour un système subissant une transformation <strong>réversible</strong> à température constante, la variation d’entropie est égale à la chaleur échangée divisée par cette température :</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">ENTROPIE D’UNE TRANSFORMATION RÉVERSIBLE À TEMPÉRATURE CONSTANTE</span>\n<math class="mathml-display" display="block" aria-label="Delta S égale Q sur T">\n<mrow><mi>Δ</mi><mi>S</mi><mo>=</mo><mfrac><mi>Q</mi><mi>T</mi></mfrac></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La température y est obligatoirement exprimée en <strong>kelvins</strong>. Si le système absorbe de la chaleur (<span class="math">Q &gt; 0</span>), son entropie augmente ; s’il en cède (<span class="math">Q &lt; 0</span>), elle diminue. Ainsi, un gaz maintenu à 300 K qui absorbe 10 J de manière réversible gagne <span class="math">ΔS = 10/300 ≈ 0,033 J·K⁻¹</span> ; un gaz à 200 K qui cède 5,0 J perd <span class="math">ΔS = −5,0/200 = −0,025 J·K⁻¹</span> (OpenStax, vol. 2, § 4.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Cas général.</strong> Lorsque la température n’est pas constante, on procède par étapes infinitésimales et on intègre :</p>\n<div class="formula-block">\n<span class="formula-label">VARIATION D’ENTROPIE ENTRE DEUX ÉTATS</span>\n<math class="mathml-display" display="block" aria-label="Delta S égale l\'intégrale de dQ sur T de A a B">\n<mrow><mi>Δ</mi><mi>S</mi><mo>=</mo><msub><mi>S</mi><mi>B</mi></msub><mo>−</mo><msub><mi>S</mi><mi>A</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mi>A</mi><mi>B</mi></msubsup><mfrac><mrow><mi>d</mi><mi>Q</mi></mrow><mi>T</mi></mfrac></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le changement d’état de la section 05 s’applique ici : la température reste constante pendant une fusion ou une vaporisation, donc <span class="math">ΔS = Q/T</span> suffit. Ainsi, pour 50 g de glace fondue lentement à 0 °C, la chaleur latente de fusion de l’eau étant <span class="math">L<sub>f</sub> = 335 J·g⁻¹</span>, la variation d’entropie vaut <span class="math">ΔS = mL<sub>f</sub>/T = 50 × 335/273,15 ≈ 61,3 J·K⁻¹</span> (OpenStax, vol. 2, exemple 4.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Le cas irréversible.</strong> Pour une transformation irréversible, on ne peut pas écrire <span class="math">ΔS = Q/T</span> avec la température du système : cette expression est réservée aux chemins réversibles. Le second principe impose alors une inégalité, qui s’écrit <span class="math">ΔS &gt; ∫dQ/T</span>. Autrement dit, à quantité de chaleur échangée identique, un système initialement plus ordonné aboutit à un état final d’entropie plus élevée (OpenStax, vol. 2, § 4.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Entropie de l’Univers.</strong> En appliquant le bilan d’entropie au système <em>et</em> à son environnement, on obtient le critère central du second principe :</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">CRITÈRE DE SPONTANÉITÉ</span>\n<math class="mathml-display" display="block" aria-label="Delta S de l\'Univers supérieur ou égal à zéro">\n<mrow><mi>Δ</mi><msub><mi>S</mi><mi>Univers</mi></msub><mo>≥</mo><mn>0</mn></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’entropie totale de l’Univers ne peut qu’augmenter ; elle reste constante dans le cas limite d’une transformation réversible. C’est la formulation la plus féconde du second principe, et elle permet de trancher sans calcul : si <span class="math">ΔS<sub>Univers</sub> &gt; 0</span>, la transformation est spontanée ; si <span class="math">ΔS<sub>Univers</sub> &lt; 0</span>, elle est impossible et son inverse l’est (OpenStax, vol. 2, § 4.6 et § 4.7).</p>\n<div class="callout"><strong>Exemple vérifié : la glace qui fond dans un thermostat</strong><p>On place 50 g de glace à 0 °C en contact avec un réservoir à 20 °C. La glace fond puis se réchauffe jusqu’à 20 °C. L’entropie de la glace augmente de <span class="math">ΔS<sub>glace</sub> = mL<sub>f</sub>/T<sub>A</sub> + mc ln(T<sub>B</sub>/T<sub>A</sub>)</span>, soit <span class="math">50 × 335/273 + 50 × 4,19 × ln(293/273) ≈ 76,3 J·K⁻¹</span>. Le réservoir cède au total <span class="math">Q = 2,10 × 10⁴ J</span>, ce qui lui coûte <span class="math">ΔS = −Q/T<sub>B</sub> ≈ −71,7 J·K⁻¹</span>. Bilan : <span class="math">ΔS<sub>Univers</sub> ≈ 76,3 − 71,7 = +4,6 J·K⁻¹</span>, positif comme le doit tout échange spontané de chaleur entre deux corps à des températures différentes (OpenStax, vol. 2, exemple 4.7).</p></div>'
        }
      },
      {
        id: 'thermo-entropie-microscopique',
        title: 'Entropie microscopique',
        field: 'Cours approfondi',
        summary: 'L’entropie comme mesure du nombre de configurations',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Jusqu’ici, l’entropie a été définie par son effet thermique. On peut lui donner un sens <strong>microscopique</strong>, en termes de nombre de configurations compatibles avec l’état macroscopique observé. L’idée fondatrice est la relation de Boltzmann, qui relie l’entropie au nombre de ces configurations (OpenStax, vol. 2, § 4.7).</p>\n<div class="formula-block formula-accent">\n<span class="formula-label">FORMULE DE BOLTZMANN</span>\n<math class="mathml-display" display="block" aria-label="S égale k B fois le logarithme népérien de W">\n<mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mspace width="0.2em"/><mi>ln</mi><mspace width="0.2em"/><mi>W</mi></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ici, <span class="math">k<sub>B</sub></span> est la constante de Boltzmann, <span class="math">k<sub>B</sub> = 1,380 649 × 10⁻²³ J·K⁻¹</span> (NIST, CODATA 2022), et <span class="math">W</span> désigne le nombre de <strong>microétats</strong>, c’est-à-dire le nombre d’agencements distincts des molécules qui correspondent tous au même <strong>macroétat</strong>, c’est-à-dire aux mêmes grandeurs mesurables (pression, température, volume). Comme le logarithme est croissant, <strong>plus W est grand, plus l’entropie est élevée</strong> (OpenStax, vol. 2, § 4.7).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>La détente libre, comptée.</strong> Un gaz enfermé dans la moitié d’un récipient ne peut prendre qu’un petit nombre de positions ; son volume accessible est <span class="math">V/2</span>. Après la détente, il occupe <span class="math">V</span>. Chaque molécule dispose donc du double de volume, et le nombre de microétats est multiplié par <span class="math">2<sup>N</sup></span>, où <span class="math">N</span> est le nombre de molécules. On en déduit :</p>\n<div class="formula-block">\n<span class="formula-label">ENTROPIE DE LA DÉTENTE LIBRE</span>\n<math class="mathml-display" display="block" aria-label="Delta S égale N k B ln 2, soit R ln 2 pour une mole">\n<mrow><mi>Δ</mi><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mspace width="0.2em"/><mi>ln</mi><mspace width="0.2em"/><msup><mn>2</mn><mi>N</mi></msup><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mspace width="0.2em"/><mi>ln</mi><mn>2</mn><mo>=</mo><mi>R</mi><mspace width="0.2em"/><mi>ln</mi><mn>2</mn></mrow>\n</math>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour une mole, <span class="math">ΔS = R ln 2 ≈ 5,76 J·K⁻¹</span>. Ce résultat est remarquable : <span class="math">Q</span> et <span class="math">W</span> sont nuls dans cette transformation, si bien que le premier principe, à lui seul, ne prédit rien. C’est le second principe, via la formule de Boltzmann, qui donne une valeur positive et non nulle (OpenStax, vol. 2, § 4.7).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Une limite importante.</strong> La formule <span class="math">ΔS = R ln(V<sub>f</sub>/V<sub>i</sub>)</span> n’est obtenue par ce raisonnement que pour un gaz <em>idéal</em>, dont les molécules n’interagissent pas et se répartissent uniformément. Pour un gaz réel, les interactions modifient le comptage et l’on doit recourir à des méthodes plus élaborées (OpenStax, vol. 2, § 4.7).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Changements de phase.</strong> La fusion et la vaporisation augmentent elles aussi l’entropie : dans un solide, les molécules occupent des positions quasi fixes ; dans un liquide, elles se déplacent mais restent proches ; dans un gaz, elles se déplacent librement dans tout le volume. Le nombre de microétats, donc l’entropie, augmente à chaque étape (OpenStax, vol. 2, § 4.7).</p>\n<div class="callout"><strong>Le troisième principe</strong><p>Énoncé de Nernst : l’entropie d’un corps parfaitement cristallin tend vers zéro lorsque la température tend vers le zéro absolu. L’entropie ne peut donc pas être négative, et la température zéro kelvin est une limite que l’on ne peut pas atteindre par une suite finie d’étapes (OpenStax, vol. 2, § 4.7).</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Retour sur la détente libre.</strong> Le second principe n’est pas contredit par le fait qu’en théorie statistique, la détente libre puisse être observée à l’envers : la probabilité pour que les molécules se recombassent spontanément dans la moitié initiale est si faible qu’elle est pratiquement nulle. C’est le rôle de la statistique, et non une contradiction, de la thermodynamique (OpenStax, vol. 2, § 4.7).</p>'
        }
      },
      {
        id: 'thermo-exercices',
        title: 'S’entraîner',
        field: 'Cours approfondi',
        summary: 'Exercices corrigés',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Douze exercices couvrant l’ensemble du cours, de la conversion d’échelles au bilan d’entropie. Essaie de répondre avant d’ouvrir la correction : le but est de manipuler les relations, pas de les relire.</p>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">A</span><span>Une température de <span class="math">−40 °C</span> vaut combien en kelvins et en degrés Fahrenheit ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">T = θ + 273,15 = −40 + 273,15 = 233,15 K</span>.<br>\n<span class="math">θ<sub>F</sub> = 1,8 × (−40) + 32 = −72 + 32 = −40 °F</span>.<br>\n<strong>Réponse : 233,15 K, soit −40 °F.</strong> C’est le seul point de coïncidence entre les deux échelles (section 02).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">B</span><span>Une barre d’aluminium de longueur <span class="math">L = 2,00 m</span> à 20 °C est chauffée à 100 °C. Quel est son allongement ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Avec <span class="math">α = 23 × 10⁻⁶ K⁻¹</span> pour l’aluminium et <span class="math">ΔT = 80 K</span> :<br>\n<span class="math">ΔL = αLΔT = 23 × 10⁻⁶ × 2,00 × 80 ≈ 3,7 × 10⁻³ m</span>.<br>\n<strong>Réponse : ΔL ≈ 3,7 mm.</strong> C’est le principe des joints de dilatation d’un pont ferroviaire en plein été (section 03).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">C</span><span>Quelle quantité de chaleur faut-il fournir à 500 g d’eau pour élever sa température de 20 °C à 80 °C ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Avec <span class="math">c = 4,19 J·g⁻¹·K⁻¹</span> et <span class="math">ΔT = 60 K</span> :<br>\n<span class="math">Q = mcΔT = 500 × 4,19 × 60 = 125 700 J</span>.<br>\n<strong>Réponse : Q ≈ 1,26 × 10⁵ J</strong>, soit 0,126 MJ (section 04).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">D</span><span>Quelle quantité de chaleur faut-il pour faire fondre 150 g de glace à 0 °C ? La température change-t-elle pendant la fusion ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>La fusion se produit à température constante, avec <span class="math">L<sub>f</sub> = 335 J·g⁻¹</span> :<br>\n<span class="math">Q<sub>fusion</sub> = mL<sub>f</sub> = 150 × 335 = 50 250 J</span>.<br>\n<strong>Réponse : Q ≈ 5,03 × 10⁴ J.</strong> La température reste à 0 °C pendant toute la fusion : l’énergie absorbée sert à rompre le réseau cristallin, pas à élever la température (section 05).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">E</span><span>Un cube d’aluminium de côté 5 cm est refroidi de 100 °C à 20 °C. Sa chaleur massique vaut <span class="math">896 J·kg⁻¹·K⁻¹</span> et sa masse volumique <span class="math">2700 kg·m⁻³</span>. Quelle chaleur a-t-il perdue ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Volume : <span class="math">V = 0,05³ = 1,25 × 10⁻⁴ m³</span>. Masse : <span class="math">m = ρV = 2700 × 1,25 × 10⁻⁴ = 0,3375 kg</span>.<br>\n<span class="math">Q = mcΔT = 0,3375 × 896 × (−80) ≈ −2,4 × 10⁴ J</span>.<br>\n<strong>Réponse : le cube a perdu environ 24 kJ.</strong> Le signe négatif traduit une perte de chaleur (section 04).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">F</span><span>Un cylindre de 2,00 L contient de l’azote à 20 °C sous 1,00 atm. Combien de moles contient-il ? Quelle est la masse d’azote ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">n = pV/RT = (101 325 × 2,00 × 10⁻³) / (8,314 × 293,15) ≈ 0,0832 mol</span>.<br>\nAvec <span class="math">M = 28,0 g·mol⁻¹</span> : <span class="math">m = nM = 0,0832 × 28,0 ≈ 2,33 g</span>.<br>\n<strong>Réponse : environ 0,083 mol et 2,3 g d’azote.</strong> Attention : la température se saisit en kelvins (section 08).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">G</span><span>Un ballon souple de 1,00 L à 20 °C est chauffé à 50 °C. La pression du gaz varie-t-elle ? Quel volume atteint-il ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>La paroi étant souple, la pression reste égale à la pression atmosphérique : <span class="math">Δp = 0</span>. C’est le volume qui augmente, selon <span class="math">V<sub>f</sub> = V<sub>i</sub>T<sub>f</sub>/T<sub>i</sub></span>.<br>\n<span class="math">V<sub>f</sub> = 1,00 × 323,15/293,15 ≈ 1,10 L</span>.<br>\n<strong>Réponse : la pression ne varie pas et V<sub>f</sub> ≈ 1,10 L.</strong> La contrainte mécanique extérieure l’emporte donc sur le volume (section 14).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">H</span><span>Un gaz monoatomique subit une détente adiabatique. Si la pression est divisée par 8, par quel facteur la température est-elle divisée ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>En adiabatique, <span class="math">T<sub>f</sub> = T<sub>i</sub>(p<sub>i</sub>/p<sub>f</sub>)<sup>(γ−1)/γ</sup></span>, avec <span class="math">γ = 5/3</span> pour un monoatomique, donc <span class="math">(γ−1)/γ = 0,4</span>.<br>\n<span class="math">T<sub>f</sub> = T<sub>i</sub> × 8<sup>−0,4</sup> = T<sub>i</sub>/8<sup>0,4</sup> ≈ T<sub>i</sub>/2,30</span>.<br>\n<strong>Réponse : la température est divisée par environ 2,3.</strong> Le gaz se refroidit en fournissant du travail (section 15).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">I</span><span>Une machine thermique absorbe <span class="math">Q<sub>h</sub> = 500 J</span> à 600 K et rejette <span class="math">Q<sub>c</sub> = 400 J</span> vers une source à 300 K. Quel est son rendement ? Est-elle réversible ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">W = Q<sub>h</sub> − Q<sub>c</sub> = 100 J</span>, donc <span class="math">η = W/Q<sub>h</sub> = 100/500 = 0,20</span>, soit <strong>20 %</strong>.<br>\nRendement de Carnot correspondant : <span class="math">η<sub>C</sub> = 1 − 300/600 = 0,50</span>.<br>\n<strong>Réponse : η = 20 %, inférieur à η<sub>C</sub> = 50 %</strong> : la machine n’est donc pas réversible (sections 16 et 17).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">J</span><span>Un corps à 400 K cède <span class="math">500 J</span> à un corps à 300 K. Quelles sont les variations d’entropie des deux corps et de l’Univers ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Corps chaud : <span class="math">ΔS<sub>c</sub> = −500/400 = −1,25 J·K⁻¹</span>.<br>\nCorps froid : <span class="math">ΔS<sub>f</sub> = +500/300 ≈ +1,67 J·K⁻¹</span>.<br>\n<span class="math">ΔS<sub>Univers</sub> = −1,25 + 1,67 = +0,42 J·K⁻¹</span>.<br>\n<strong>Réponse : ΔS<sub>Univers</sub> ≈ +0,42 J·K⁻¹.</strong> Le transfert du chaud vers le froid est spontané, donc l’entropie totale augmente (section 19).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">K</span><span>Une mole de gaz parfait passe de <span class="math">V = 1 L</span> à <span class="math">V = 2 L</span> par détente libre. Quelle est sa variation d’entropie ? Pourquoi le premier principe ne permet-il pas de la calculer ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">ΔS = R ln(V<sub>f</sub>/V<sub>i</sub>) = 8,314 × ln 2 ≈ 5,76 J·K⁻¹</span>.<br>\nDans une détente libre, <span class="math">Q = 0</span> et <span class="math">W = 0</span>, donc <span class="math">ΔE<sub>int</sub> = 0</span>. Le premier principe ne renseigne que sur l’énergie interne et ne contient aucune information sur l’entropie.<br>\n<strong>Réponse : ΔS = R ln 2 ≈ 5,76 J·K⁻¹</strong>, valeur que seul le second principe permet de fixer (section 20).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">L</span><span>Un litre de dioxygène à 20 °C se détend adiabatiquement jusqu’à ce que son volume soit multiplié par 4. Quelle est sa température finale ? (On prend <span class="math">γ = 1,40</span>.)</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p><span class="math">T<sub>f</sub> = T<sub>i</sub>(V<sub>i</sub>/V<sub>f</sub>)<sup>γ−1</sup> = 293,15 × 4<sup>−0,40</sup></span>.<br>\n<span class="math">4<sup>−0,40</sup> ≈ 0,575</span>, donc <span class="math">T<sub>f</sub> ≈ 293,15 × 0,575 ≈ 169 K</span>.<br>\n<strong>Réponse : environ 169 K, soit −104 °C.</strong> La détente adiabatique refroidit le gaz (section 15).</p></div>\n</details>'
        }
      },
      {
        id: 'thermo-sources',
        title: 'Sources',
        field: 'Cours approfondi',
        summary: 'Sources vérifiées',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque affirmation scientifique de ce cours renvoie à l’une des sources ci-dessous. OpenStax est prioritaire, le sujet y figurant pour la totalité des notions traitées. Les valeurs numériques des constantes proviennent du NIST et du CODATA ; les propriétés des matériaux et les grandeurs thermodynamiques de l’eau viennent des références indiquées.</p>\n<ul style="max-width:730px;margin:0 0 16px;padding-left:1.2rem;color:#39453d;line-height:1.7">\n<li style="margin-bottom:.7rem"><strong>Température, échelles thermométriques, dilatation, changement d’état</strong> : <a href="https://openstax.org/books/university-physics-volume-2/pages/1-introduction" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 2, chapitre 1 <em>Temperature and Heat</em></a> — sections 1.1 à 1.6 : équilibre thermique, thermomètres et conversions Celsius/Fahrenheit/Kelvin, dilatation linéaire, surfacique et volumique, changements d’état et chaleurs latentes, principe de calorimétrie.</li>\n<li style="margin-bottom:.7rem"><strong>Chaleur massique, calorimétrie et changements d’état</strong> : OpenStax, vol. 2, § 1.4 <em>Heat Transfer, Specific Heat, and Calorimetry</em> — chaleur massique, équation calorimétrique et loi de Debye à basse température ; § 1.5 <em>Phase Changes</em> — transitions de phase, diagrammes pT, chaleur latente, point critique et fluide supercritique (CO<sub>2</sub> au-dessus de 31,0 °C).</li>\n<li style="margin-bottom:.7rem"><strong>Conduction, convection et rayonnement</strong> : <a href="https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer" target="_blank" rel="noreferrer">OpenStax, vol. 2, § 1.6 <em>Mechanisms of Heat Transfer</em></a> — les trois mécanismes de transfert thermique, loi de Fourier et conductivité, courants de convection, émissivité, loi du corps noir, loi de Wien et loi de Stefan-Boltzmann.</li>\n<li style="margin-bottom:.7rem"><strong>Gaz parfait et théorie cinétique</strong> : <a href="https://openstax.org/books/university-physics-volume-2/pages/2-introduction" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 2, chapitre 2 <em>The Kinetic Theory of Gases</em></a> — sections 2.1 à 2.4 : loi des gaz parfaits et constante <em>R</em>, pression comme résultat microscopique des chocs moléculaires, énergie interne et théorème d’équipartition, distribution de Maxwell-Boltzmann et vitesses moléculaires.</li>\n<li style="margin-bottom:.7rem"><strong>Premier principe, travail, chaleur et capacités thermiques</strong> : <a href="https://openstax.org/books/university-physics-volume-2/pages/3-introduction" target="_blank" rel="noreferrer">OpenStax, vol. 2, chapitre 3 <em>The First Law of Thermodynamics</em></a> — § 3.1 <em>Thermodynamic Systems</em> (systèmes fermés et isolés) ; § 3.2 <em>Work, Heat, and Internal Energy</em> (travail <span class="math">W = ∫p dV</span>) ; § 3.3 <em>First Law of Thermodynamics</em> (<span class="math">ΔE<sub>int</sub> = Q − W</span>) ; § 3.4 <em>Thermodynamic Processes</em> (diagrammes pV, transformations isothermes et cycliques) ; § 3.5 <em>Heat Capacities of an Ideal Gas</em> (<span class="math">C<sub>p</sub> = C<sub>V</sub> + R</span>, <span class="math">dQ = nC<sub>p</sub>dT</span> à pression constante) ; § 3.6 <em>Adiabatic Processes for an Ideal Gas</em> (loi de Poisson, <span class="math">γ = C<sub>p</sub>/C<sub>V</sub></span>).</li>\n<li style="margin-bottom:.7rem"><strong>Exemples chiffrés repris de la source</strong> : OpenStax, vol. 2, exemple 2.8 <em>Calculating Temperature</em> (xénon de 0,125 kg dans un cylindre rigide recevant 180 J, <span class="math">ΔT ≈ 15,2 °C</span>), exemple 4.4 <em>Entropy Change of Melting Ice</em> (50 g de glace fondus à 0 °C, <span class="math">L<sub>f</sub> = 335 J·g⁻¹</span>), exemple 4.7 <em>Entropy Change of the Universe</em> (glace dans un thermostat à 20 °C, <span class="math">ΔS<sub>Univers</sub> = +4,6 J·K⁻¹</span>). Les autres exemples chiffrés de ce cours sont des calculs originaux, vérifiés et explicités pas à pas.</li>\n<li style="margin-bottom:.7rem"><strong>Second principe, machines thermiques, Carnot et entropie</strong> : <a href="https://openstax.org/books/university-physics-volume-2/pages/4-introduction" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 2, chapitre 4 <em>The Second Law of Thermodynamics</em></a> — § 4.1 <em>Reversible and Irreversible Processes</em> (détente libre, <span class="math">p<sub>f</sub> = p<sub>i</sub>/2</span>) ; § 4.2 <em>Heat Engines</em> (rendement) ; § 4.3 <em>Refrigerators and Heat Pumps</em> (coefficients <span class="math">K<sub>R</sub></span> et <span class="math">K<sub>P</sub></span>) ; § 4.4 <em>Statements of the Second Law</em> (énoncés de Kelvin-Planck et de Clausius, et leur équivalence démontrée) ; § 4.5 <em>The Carnot Cycle</em> (quatre étapes, <span class="math">η<sub>C</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></span>) ; § 4.6 <em>Entropy</em> (<span class="math">ΔS = Q/T</span> et <span class="math">∫dQ/T</span>) ; § 4.7 <em>Entropy on a Microscopic Scale</em> (formule de Boltzmann, troisième principe).</li>\n<li style="margin-bottom:.7rem"><strong>Constantes fondamentales</strong> : <a href="https://physics.nist.gov/cuu/Constants/" target="_blank" rel="noreferrer">NIST, <em>CODATA Recommended Values of the Fundamental Physical Constants</em></a> (ajustement 2022) — <span class="math">k<sub>B</sub> = 1,380 649 × 10⁻²³ J·K⁻¹</span> exactement, <span class="math">R = 8,314 462 618 J·mol⁻¹·K⁻¹</span>, et <span class="math">273,15 K</span> pour la température du point de fusion de la glace.</li>\n<li style="margin-bottom:.7rem"><strong>Définition moderne du kelvin</strong> : <a href="https://www.nist.gov/si-redefinition/kelvin-introduction" target="_blank" rel="noreferrer">NIST SI, <em>Kelvin: Introduction</em></a> — le kelvin est l’unité SI de température thermodynamique, sa magnitude étant fixée par la valeur numérique exacte de la constante de Boltzmann, <span class="math">k<sub>B</sub> = 1,380 649 × 10⁻²³ J·K⁻¹</span> (SI révisé approuvé en novembre 2018) ; <span class="math">0 K = −273,15 °C = −459,67 °F</span>, mouvement de point zéro d’origine quantique, distinct du mouvement thermique.</li>\n<li style="margin-bottom:.7rem"><strong>Grandeurs thermodynamiques de l’eau</strong> : <a href="https://webbook.nist.gov/chemistry/fluid/" target="_blank" rel="noreferrer">NIST Chemistry WebBook, <em>Fluid Properties</em></a> et <a href="https://www.iapws.org/" target="_blank" rel="noreferrer">IAPWS</a> (<em>International Association for the Properties of Water and Steam</em>) — chaleur massique de l’eau, chaleur latente de fusion et de vaporisation, température normale d’ébullition.</li>\n<li style="margin-bottom:.7rem"><strong>Rayonnement et constantes thermiques</strong> : <a href="https://physics.nist.gov/cgi-bin/cuu/Value?sigma" target="_blank" rel="noreferrer">NIST, constante de Stefan-Boltzmann <span class="math">σ</span></a> et <a href="https://physics.nist.gov/cgi-bin/cuu/Value?h" target="_blank" rel="noreferrer">constante de Planck <span class="math">h</span></a>, utilisées pour la loi du corps noir et la loi de Wien.</li>\n<li style="margin-bottom:.7rem"><strong>Effet Joule-Thomson et machines à froid</strong> : <a href="https://fr.wikipedia.org/wiki/Effet_Joule-Thomson" target="_blank" rel="noreferrer">« Effet Joule-Thomson »</a> et <a href="https://fr.wikipedia.org/wiki/Cycle_de_Carnot" target="_blank" rel="noreferrer">« Cycle de Carnot »</a> (Wikipédia) — cycle à quatre étapes, principe de Carnot et machines frigorifiques par détente.</li>\n<li style="margin-bottom:.7rem"><strong>Repères historiques et grandeurs complémentaires</strong> : <a href="https://fr.wikipedia.org/wiki/Entropie_(thermodynamique)" target="_blank" rel="noreferrer">« Entropie (thermodynamique) »</a> (Wikipédia) — <span class="math">C<sub>V</sub> = νR/2</span>, <span class="math">γ = (ν+2)/ν</span> et <span class="math">U = pV/(γ−1)</span> ; <a href="https://fr.wikipedia.org/wiki/Sadi_Carnot" target="_blank" rel="noreferrer">« Sadi Carnot »</a> — dates (1796-1832) et publication des <em>Réflexions sur la puissance motrice du feu</em> en 1824.</li>\n</ul>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les valeurs numériques citées dans ce cours et non couvertes par les références ci-dessus — coefficients de dilatation, masses volumiques, chaleurs massiques, conductivités thermiques — sont des valeurs tabulées usuelles. Elles sont données à titre indicatif, pour situer les ordres de grandeur, comme le fait le manuel dont ce cours est inspiré.</p>'
        }
      }
    ]
  },
  {
    id: 'electromagnetisme',
    title: 'Électricité et électromagnétisme',
    note: 'Des circuits électriques aux champs et à l’induction.',
    chapters: [
      {
        id: 'circuits-electriques',
        title: 'Circuits électriques',
        field: 'Électricité · bases',
        summary: 'Tension, courant, loi d’Ohm, puissance et associations de résistances.',
        lesson: {
          sections: [
            'Le courant électrique est un débit de charges. La tension entre deux points représente une différence d’énergie électrique par charge.',
            'Pour un conducteur ohmique, la tension est proportionnelle au courant. La loi des nœuds traduit la conservation de la charge et la loi des mailles la conservation de l’énergie.'
          ],
          formula: {
            label: 'LOI D’OHM ET PUISSANCE',
            text: 'U = RI  |  P = UI = RI²'
          },
          example: {
            statement: 'Une résistance de 6 Ω est parcourue par un courant de 2 A. Calculer la tension et la puissance.',
            calculation: 'U = RI = 6 × 2 = 12 V. P = UI = 12 × 2.',
            answer: 'U = 12 V et P = 24 W.'
          },
          exercise: {
            question: 'Quel courant traverse une résistance de 10 Ω sous 5 V ?',
            answer: 'I = U/R = 5/10 = 0,5 A.'
          },
          equationDetails: [
            {
              title: 'Loi d’Ohm',
              formula: 'U = RI',
              explanation: 'Pour un dipôle ohmique à température et conditions physiques fixées, la tension est proportionnelle au courant.',
              parameters: 'U : tension aux bornes (V) ; R : résistance (Ω) ; I : courant (A). La loi n’est pas universelle pour tout composant ni tout régime.',
              example: 'Pour R = 6 Ω traversée par I = 2 A : U = RI = 6 × 2.',
              result: 'U = 12 V.'
            },
            {
              title: 'Puissance électrique',
              formula: 'P = UI',
              explanation: 'La puissance électrique transférée à un dipôle est le produit de la tension par le courant selon la convention récepteur. Pour une résistance ohmique, la loi d’Ohm permet d’écrire les formes équivalentes.',
              parameters: 'P : puissance (W) ; U : tension (V) ; I : courant (A) ; R : résistance (Ω). Avec la convention générateur, le signe dépend du sens choisi pour courant et tension.',
              example: 'Pour U = 12 V et I = 2 A : P = UI = 24 W ; avec R = 6 Ω, RI² = 24 W également.',
              result: 'Le dipôle dissipe 24 W dans cette situation résistive.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 2 — Ohm’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law' },
            { title: 'OpenStax University Physics, vol. 2 — Electrical Energy and Power', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power' }
          ]
        }
      },
      {
        id: 'champ-electrique',
        title: 'Électrostatique et champ électrique',
        field: 'Électromagnétisme · intermédiaire',
        summary: 'Charges, loi de Coulomb, champ et potentiel électrostatiques.',
        lesson: {
          sections: [
            'Deux charges électriques exercent l’une sur l’autre une force. Des charges de même signe se repoussent et de signes opposés s’attirent.',
            'Le champ électrique décrit la force par unité de charge positive. Le potentiel électrique est une énergie potentielle par unité de charge.'
          ],
          formula: {
            label: 'FORCE DE COULOMB ET CHAMP',
            text: 'F = k|q₁q₂|/r²  |  E⃗ = F⃗/q'
          },
          example: {
            statement: 'Une charge de 2 μC est placée dans un champ électrique uniforme de 300 N·C⁻¹. Quelle force électrique subit-elle ?',
            calculation: 'F = qE = 2 × 10⁻⁶ × 300.',
            answer: 'F = 6 × 10⁻⁴ N, dans le sens du champ si la charge est positive.'
          },
          exercise: {
            question: 'Quelle force subit une charge −1 μC dans un champ de 200 N·C⁻¹ ?',
            answer: 'La norme vaut 2 × 10⁻⁴ N ; la force est opposée au champ car la charge est négative.'
          },
          equationDetails: [
            {
              title: 'Loi de Coulomb',
              formula: 'F = k|q₁q₂|/r²',
              explanation: 'Cette forme donne la norme de la force électrostatique entre deux charges ponctuelles dans le vide. La force est portée par la droite joignant les charges ; son sens est répulsif pour deux charges de même signe et attractif pour des signes opposés.',
              parameters: 'F : norme de la force (N) ; q₁, q₂ : charges (C) ; r : distance entre charges (m) ; k = 1/(4πε₀) ≈ 8,988 × 10⁹ N·m²·C⁻² dans le vide.',
              example: 'Deux charges de module 1,0 μC séparées de 0,10 m subissent une force de norme F = k(1,0 × 10⁻⁶)²/(0,10)².',
              result: 'F ≈ 0,90 N ; le sens dépend des signes des deux charges.'
            },
            {
              title: 'Définition du champ électrique',
              formula: 'E⃗ = F⃗/qₜ',
              explanation: 'Le champ électrique en un point est la force électrique par unité de charge test positive placée en ce point, dans la limite où cette charge ne perturbe pas les sources.',
              parameters: 'E⃗ : champ électrique (N·C⁻¹ ou V·m⁻¹) ; F⃗ : force électrique (N) ; qₜ : charge test signée (C). La force sur une charge q vaut F⃗ = qE⃗.',
              example: 'Une charge q = +2,0 μC placée dans un champ uniforme E = 300 N·C⁻¹ subit F = qE.',
              result: 'La norme de la force est 6,0 × 10⁻⁴ N, dans le sens du champ.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 2 — Coulomb’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law' },
            { title: 'OpenStax University Physics, vol. 2 — Electric Field', url: 'https://openstax.org/books/university-physics-volume-2/pages/5-4-electric-field' }
          ]
        }
      },
      {
        id: 'induction',
        title: 'Magnétisme et induction',
        field: 'Électromagnétisme · approfondissement',
        summary: 'Champ magnétique, flux, loi de Faraday-Lenz et applications.',
        lesson: {
          sections: [
            'Un courant électrique produit un champ magnétique. Un champ magnétique variable peut induire une tension dans un circuit.',
            'La loi de Lenz fixe le sens du courant induit : ses effets s’opposent à la variation de flux qui lui donne naissance.'
          ],
          formula: {
            label: 'LOI DE FARADAY',
            text: 'e = −dΦ/dt'
          },
          example: {
            statement: 'Le flux magnétique à travers une bobine augmente de 0,04 Wb en 0,02 s. Quelle est la valeur absolue de la tension induite moyenne ?',
            calculation: '|e| = |ΔΦ/Δt| = 0,04/0,02.',
            answer: '|e| = 2 V ; son signe dépend du sens choisi et s’oppose à la variation.'
          },
          exercise: {
            question: 'Que se passe-t-il si le flux magnétique reste constant ?',
            answer: 'dΦ/dt = 0 : aucune tension induite n’est produite.'
          },
          equationDetails: [
            {
              title: 'Loi de Faraday-Lenz',
              formula: 'e = −N dΦ/dt',
              explanation: 'Une variation du flux magnétique à travers une bobine induit une force électromotrice. Le signe moins traduit la loi de Lenz : l’effet induit s’oppose à la variation de flux qui le produit.',
              parameters: 'e : force électromotrice induite (V) ; N : nombre de spires ; Φ : flux magnétique par spire (Wb) ; t : temps (s). Pour une seule spire, N = 1 ; pour des variations moyennes, e_moy = −NΔΦ/Δt.',
              example: 'Une bobine de 20 spires subit une variation de flux par spire de 0,040 Wb en 0,20 s : |e_moy| = 20 × 0,040/0,20.',
              result: 'La valeur absolue de la f.é.m. moyenne est 4,0 V ; son signe dépend de l’orientation choisie.'
            },
            {
              title: 'Flux d’un champ uniforme',
              formula: 'Φ = BA cos θ',
              explanation: 'Le flux mesure la composante du champ magnétique traversant la surface. L’angle θ est entre le champ et la normale à la surface, non entre le champ et le plan lui-même.',
              parameters: 'Φ : flux magnétique (Wb) ; B : champ magnétique uniforme (T) ; A : aire de la surface (m²) ; θ : angle champ-normale.',
              example: 'Pour B = 0,50 T, A = 0,020 m² et θ = 60° : Φ = 0,50 × 0,020 × cos 60°.',
              result: 'Φ = 5,0 × 10⁻³ Wb par spire.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 2 — Faraday’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law' },
            { title: 'OpenStax University Physics, vol. 2 — Lenz’s Law', url: 'https://openstax.org/books/university-physics-volume-2/pages/13-2-lenzs-law' }
          ]
        }
      }
    ]
  },
  {
    id: 'ondes-acoustique',
    title: 'Ondes et acoustique',
    note: 'Propagation, superposition et phénomènes ondulatoires.',
    chapters: [
      {
        id: 'oscillations',
        title: 'Oscillations et signaux périodiques',
        field: 'Ondes · bases',
        summary: 'Période, fréquence, amplitude, phase et oscillateur harmonique.',
        lesson: {
          sections: [
            'Un signal périodique se répète après une durée T, sa période. La fréquence f compte le nombre de périodes par seconde et s’exprime en hertz.',
            'Un oscillateur harmonique idéal suit une évolution sinusoïdale. Sa fréquence dépend des paramètres du système, comme la masse et la raideur pour un ressort.'
          ],
          formula: {
            label: 'PÉRIODE ET FRÉQUENCE',
            text: 'f = 1/T  |  x(t) = A cos(ωt + φ), avec ω = 2πf'
          },
          example: {
            statement: 'Un signal a une période de 4 ms. Quelle est sa fréquence ?',
            calculation: 'T = 0,004 s, donc f = 1/0,004.',
            answer: 'f = 250 Hz.'
          },
          exercise: {
            question: 'Quelle est la période d’un signal de fréquence 500 Hz ?',
            answer: 'T = 1/500 = 0,002 s, soit 2 ms.'
          },
          equationDetails: [
            {
              title: 'Période et fréquence',
              formula: 'f = 1/T ; ω = 2πf',
              explanation: 'La fréquence compte le nombre de cycles par seconde ; la pulsation exprime la vitesse angulaire de phase de l’oscillation.',
              parameters: 'T : période (s) ; f : fréquence (Hz = s⁻¹) ; ω : pulsation (rad·s⁻¹).',
              example: 'Pour T = 4,0 ms = 0,0040 s : f = 1/T = 250 Hz, puis ω = 2π × 250.',
              result: 'f = 250 Hz et ω ≈ 1,57 × 10³ rad·s⁻¹.'
            },
            {
              title: 'Position harmonique',
              formula: 'x(t) = A cos(ωt + φ)',
              explanation: 'Cette fonction décrit un oscillateur harmonique idéal, sans amortissement, autour de sa position d’équilibre.',
              parameters: 'x(t) : déplacement (m) ; A : amplitude maximale (m) ; ω : pulsation (rad·s⁻¹) ; t : temps (s) ; φ : phase initiale (rad).',
              example: 'Avec A = 0,050 m, f = 250 Hz et φ = 0, à t = 0 : x(0) = A cos 0.',
              result: 'x(0) = 0,050 m, à l’extrémité positive de l’oscillation.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Simple Harmonic Motion', url: 'https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion' }
          ]
        }
      },
      {
        id: 'interferences',
        title: 'Interférences et diffraction',
        field: 'Ondes · intermédiaire',
        summary: 'Superposition, cohérence, franges et limite de résolution.',
        lesson: {
          sections: [
            'Lorsque deux ondes cohérentes se superposent, leurs amplitudes s’ajoutent. Selon leur déphasage, elles peuvent se renforcer ou s’annuler.',
            'La diffraction est l’étalement d’une onde lorsqu’elle traverse une ouverture ou contourne un obstacle de taille comparable à sa longueur d’onde.'
          ],
          formula: {
            label: 'INTERFRANGE ET DIFFRACTION',
            text: 'i = λD/a  |  θ ≈ λ/a pour une petite ouverture'
          },
          example: {
            statement: 'Dans une expérience à deux fentes, λ = 600 nm, D = 2 m et l’écartement vaut a = 0,5 mm. Calculer l’interfrange.',
            calculation: 'i = 600×10⁻⁹ × 2 / (0,5×10⁻³).',
            answer: 'i = 2,4 mm.'
          },
          exercise: {
            question: 'Comment varie l’interfrange si la distance D à l’écran double ?',
            answer: 'Comme i est proportionnel à D, l’interfrange double.'
          },
          equationDetails: [
            {
              title: 'Interfrange de Young',
              formula: 'i = λD/a',
              explanation: 'Pour deux fentes proches, des petits angles et un écran suffisamment éloigné, l’écart entre franges successives est proportionnel à la longueur d’onde et à la distance écran-fentes, et inversement proportionnel à l’écartement des fentes.',
              parameters: 'i : interfrange (m) ; λ : longueur d’onde dans le milieu (m) ; D : distance fentes-écran (m) ; a : écartement des fentes (m).',
              example: 'Pour λ = 600 nm, D = 2,0 m et a = 0,50 mm : i = (600 × 10⁻⁹ × 2,0)/(0,50 × 10⁻³).',
              result: 'i = 2,4 mm.'
            },
            {
              title: 'Minimum de diffraction par une fente',
              formula: 'a sin θ = mλ, m = 1, 2, …',
              explanation: 'Pour une fente de largeur a, les minima de diffraction se produisent selon cette condition. Le premier minimum est m = 1 ; pour petits angles, sin θ ≈ θ en radians.',
              parameters: 'a : largeur de la fente (m) ; θ : angle du minimum par rapport à l’axe central ; λ : longueur d’onde dans le milieu (m) ; m : ordre entier non nul.',
              example: 'Avec a = 0,50 mm et λ = 600 nm, le premier minimum vérifie sin θ = 600 × 10⁻⁹/(0,50 × 10⁻³).',
              result: 'θ ≈ 1,2 × 10⁻³ rad, soit environ 0,069°.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Interference of Waves', url: 'https://openstax.org/books/university-physics-volume-1/pages/16-5-interference-of-waves' },
            { title: 'OpenStax University Physics, vol. 3 — Young’s Double-Slit Interference', url: 'https://openstax.org/books/university-physics-volume-3/pages/3-1-youngs-double-slit-interference' },
            { title: 'OpenStax University Physics, vol. 3 — Single-Slit Diffraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/4-1-single-slit-diffraction' }
          ]
        }
      },
      {
        id: 'acoustique',
        title: 'Acoustique et effet Doppler',
        field: 'Ondes · applications',
        summary: 'Son, intensité, niveau sonore et décalage Doppler.',
        lesson: {
          sections: [
            'Le son est une onde mécanique longitudinale : il a besoin d’un milieu matériel pour se propager. Sa fréquence détermine la hauteur perçue et son amplitude est liée à l’intensité.',
            'L’effet Doppler est la variation apparente de fréquence lorsque source et observateur sont en mouvement l’un par rapport à l’autre.'
          ],
          formula: {
            label: 'NIVEAU SONORE',
            text: 'L = 10 log₁₀(I/I₀) dB'
          },
          example: {
            statement: 'L’intensité sonore vaut 10⁻⁶ W·m⁻² et I₀ = 10⁻¹² W·m⁻². Calculer le niveau sonore.',
            calculation: 'I/I₀ = 10⁶, donc L = 10 log₁₀(10⁶).',
            answer: 'L = 60 dB.'
          },
          exercise: {
            question: 'De combien augmente le niveau sonore si l’intensité est multipliée par 10 ?',
            answer: 'Il augmente de 10 dB.'
          },
          equationDetails: [
            {
              title: 'Niveau d’intensité sonore',
              formula: 'L = 10 log₁₀(I/I₀) dB',
              explanation: 'Le niveau sonore est une échelle logarithmique comparant l’intensité mesurée à une intensité de référence. Chaque augmentation de 10 dB correspond à une intensité multipliée par 10.',
              parameters: 'L : niveau sonore (dB) ; I : intensité acoustique (W·m⁻²) ; I₀ = 10⁻¹² W·m⁻² : intensité de référence usuelle dans l’air.',
              example: 'Pour I = 10⁻⁶ W·m⁻² : I/I₀ = 10⁶, donc L = 10 log₁₀(10⁶).',
              result: 'L = 60 dB.'
            },
            {
              title: 'Effet Doppler du son',
              formula: 'fₒ = fₛ (v ± vₒ)/(v ∓ vₛ)',
              explanation: 'Cette forme classique s’applique à une onde sonore dans un milieu au repos. Les signes du numérateur et du dénominateur sont coordonnés : utiliser le signe supérieur pour un rapprochement et le signe inférieur pour un éloignement.',
              parameters: 'fₒ : fréquence observée (Hz) ; fₛ : fréquence émise (Hz) ; v : vitesse du son dans le milieu (m·s⁻¹) ; vₒ : vitesse de l’observateur par rapport au milieu ; vₛ : vitesse de la source par rapport au milieu. Cette formule sonore n’est pas la formule Doppler relativiste de la lumière.',
              example: 'Un klaxon de 150 Hz s’approche d’un observateur fixe à 35 m·s⁻¹ dans l’air où v = 340 m·s⁻¹ : fₒ = 150 × 340/(340 − 35).',
              result: 'La fréquence reçue est environ 167 Hz.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Sound Intensity', url: 'https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity' },
            { title: 'OpenStax University Physics, vol. 1 — The Doppler Effect', url: 'https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect' }
          ]
        }
      }
    ]
  },
  {
    id: 'optique',
    title: 'Optique',
    note: 'Former des images et comprendre la nature ondulatoire de la lumière.',
    chapters: [
      {
        id: 'optique-geometrique',
        title: 'Optique géométrique et lentilles',
        field: 'Optique · bases',
        summary: 'Rayons lumineux, lentilles minces, images réelles et virtuelles.',
        lesson: {
          sections: [
            'Dans l’approximation de Gauss, les rayons proches de l’axe optique sont peu inclinés ; une lentille mince forme alors une image construite par les rayons principaux.',
            'Une image réelle peut être projetée sur un écran ; une image virtuelle est visible en regardant dans le système optique mais ne peut pas être recueillie directement sur un écran.'
          ],
          formula: {
            label: 'RELATION DE CONJUGAISON',
            text: '1/OA′ − 1/OA = 1/OF′'
          },
          example: {
            statement: 'Une lentille convergente a une distance focale f′ = 10 cm. Un objet est à 30 cm devant elle. Où se forme l’image ?',
            calculation: 'Avec OA = −30 cm : 1/OA′ = 1/10 − 1/(−30) = 4/30.',
            answer: 'OA′ = 7,5 cm derrière la lentille ; l’image est réelle.'
          },
          exercise: {
            question: 'Où se forme l’image d’un objet placé au foyer objet d’une lentille convergente ?',
            answer: 'Les rayons émergent parallèlement : l’image est à l’infini.'
          },
          equationDetails: [
            {
              title: 'Relation de conjugaison d’une lentille mince',
              formula: '1/OA′ − 1/OA = 1/OF′',
              explanation: 'Cette relation de Descartes relie les positions orientées de l’objet et de son image par rapport au centre optique à la distance focale image. Elle s’emploie dans l’approximation des lentilles minces et des rayons paraxiaux.',
              parameters: 'OA : abscisse orientée de l’objet (m ou cm) ; OA′ : abscisse orientée de l’image ; OF′ = f′ : distance focale image ; pour une lentille convergente f′ > 0 ; un objet réel placé avant la lentille a généralement OA < 0 avec cette convention.',
              example: 'Pour f′ = 10 cm et OA = −30 cm : 1/OA′ − 1/(−30) = 1/10, donc 1/OA′ = 1/10 − 1/30 = 1/15.',
              result: 'OA′ = +15 cm : l’image se forme à 15 cm derrière la lentille et elle est réelle.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Thin Lenses', url: 'https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses' }
          ]
        }
      },
      {
        id: 'refraction',
        title: 'Réflexion et réfraction',
        field: 'Optique · bases',
        summary: 'Lois de Snell-Descartes et changement de direction à une interface.',
        lesson: {
          sections: [
            'Lorsqu’un rayon lumineux rencontre une interface, une partie peut être réfléchie et une partie réfractée. Les angles se mesurent par rapport à la normale à la surface.',
            'La réfraction change de direction car la lumière ne se propage pas à la même vitesse dans les deux milieux.'
          ],
          formula: {
            label: 'LOI DE SNELL-DESCARTES',
            text: 'n₁ sin(i₁) = n₂ sin(i₂)'
          },
          example: {
            statement: 'Un rayon passe de l’air (n₁ = 1) au verre (n₂ = 1,5) avec i₁ = 30°. Calculer i₂.',
            calculation: 'sin(i₂) = (1/1,5) sin(30°) = 1/3.',
            answer: 'i₂ ≈ 19,5°.'
          },
          exercise: {
            question: 'La lumière passe de l’eau vers l’air. Se rapproche-t-elle ou s’éloigne-t-elle de la normale ?',
            answer: 'Elle s’éloigne de la normale, car l’indice diminue.'
          },
          equationDetails: [
            {
              title: 'Loi de Snell-Descartes',
              formula: 'n₁ sin i₁ = n₂ sin i₂',
              explanation: 'À une interface plane entre deux milieux transparents isotropes, le rayon transmis change de direction selon cette relation. Les angles d’incidence et de réfraction sont mesurés depuis la normale à l’interface.',
              parameters: 'n₁, n₂ : indices de réfraction des milieux, sans unité ; i₁, i₂ : angles mesurés depuis la normale ; n = c/v_phase dans le modèle usuel.',
              example: 'De l’air (n₁ ≈ 1,00) vers le verre (n₂ = 1,50), avec i₁ = 30° : sin i₂ = (1,00/1,50) sin 30° = 1/3.',
              result: 'i₂ ≈ 19,5°.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — The Law of Reflection', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-2-the-law-of-reflection' },
            { title: 'OpenStax University Physics, vol. 3 — Refraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-3-refraction' }
          ]
        }
      },
      {
        id: 'optique-ondulatoire',
        title: 'Optique ondulatoire et polarisation',
        field: 'Optique · approfondissement',
        summary: 'Interférences lumineuses, diffraction et polarisation.',
        lesson: {
          sections: [
            'La lumière présente aussi un comportement ondulatoire. Deux sources cohérentes produisent des franges d’interférences dont la position dépend de la différence de marche.',
            'La polarisation décrit l’orientation du champ électrique d’une onde lumineuse. Un polariseur sélectionne une direction de vibration.'
          ],
          formula: {
            label: 'DIFFÉRENCE DE MARCHE',
            text: 'Constructive : δ = kλ  |  Destructive : δ = (k + ½)λ'
          },
          example: {
            statement: 'La différence de marche vaut 2λ. L’interférence est-elle constructive ou destructive ?',
            calculation: 'δ/λ = 2 est un entier.',
            answer: 'L’interférence est constructive.'
          },
          exercise: {
            question: 'Quelle condition donne une interférence destructive ?',
            answer: 'δ = (k + 1/2)λ, où k est un entier.'
          },
          equationDetails: [
            {
              title: 'Interférences lumineuses',
              formula: 'δ = kλ : constructive ; δ = (k + ½)λ : destructive',
              explanation: 'Deux ondes cohérentes interfèrent de manière constructive lorsque leur différence de marche est un multiple entier de la longueur d’onde, et destructive pour un multiple demi-entier.',
              parameters: 'δ : différence de marche (m) ; λ : longueur d’onde dans le milieu (m) ; k : entier relatif. Les deux sources doivent conserver une différence de phase stable pour observer des franges.',
              example: 'Pour δ = 2λ, on a k = 2, un entier.',
              result: 'L’interférence est constructive.'
            },
            {
              title: 'Polarisation par un analyseur (loi de Malus)',
              formula: 'I = I₀ cos² θ',
              explanation: 'Pour une lumière déjà polarisée linéairement qui traverse un analyseur idéal, l’intensité transmise suit cette loi.',
              parameters: 'I₀ : intensité incidente polarisée (W·m⁻²) ; I : intensité transmise ; θ : angle entre la direction de polarisation incidente et l’axe de transmission de l’analyseur.',
              example: 'Si θ = 60° et I₀ = 8 W·m⁻², alors I = 8 cos²60°.',
              result: 'I = 2 W·m⁻².'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Young’s Double-Slit Interference', url: 'https://openstax.org/books/university-physics-volume-3/pages/3-1-youngs-double-slit-interference' },
            { title: 'OpenStax University Physics, vol. 3 — Polarization', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization' }
          ]
        }
      }
    ]
  },
  {
    id: 'fluides',
    title: 'Mécanique des fluides',
    note: 'Équilibre, écoulement et transport dans les fluides.',
    chapters: [
      {
        id: 'hydrostatique',
        title: 'Hydrostatique et poussée d’Archimède',
        field: 'Fluides · bases',
        summary: 'Pression dans un fluide au repos et poussée exercée sur un corps immergé.',
        lesson: {
          sections: [
            'Dans un fluide au repos, la pression augmente avec la profondeur. Une différence de pression entre le haut et le bas d’un objet immergé produit une force résultante vers le haut.',
            'La poussée d’Archimède est égale au poids du fluide déplacé. Elle explique la flottaison des objets.'
          ],
          formula: {
            label: 'PRESSION ET POUSSÉE D’ARCHIMÈDE',
            text: 'p = p₀ + ρgh  |  Fₐ = ρ (fluide) g V (déplacé)'
          },
          example: {
            statement: 'Quel est le poids de l’eau déplacée par un objet immergé de volume 2 L ? Prendre ρ = 1000 kg·m⁻³ et g = 9,81 m·s⁻².',
            calculation: 'V = 0,002 m³ ; Fₐ = 1000 × 9,81 × 0,002.',
            answer: 'La poussée vaut 19,62 N.'
          },
          exercise: {
            question: 'Comment varie la pression quand on descend de 2 m dans l’eau ?',
            answer: 'Elle augmente de Δp = ρgΔh ≈ 1000×9,81×2 = 19 620 Pa.'
          },
          equationDetails: [
            {
              title: 'Pression hydrostatique',
              formula: 'p = p₀ + ρgh',
              explanation: 'Dans un fluide homogène au repos, la pression augmente avec la profondeur h sous une surface où la pression vaut p₀. La relation suppose g et la masse volumique constantes sur la hauteur considérée.',
              parameters: 'p : pression à la profondeur h (Pa) ; p₀ : pression à la surface (Pa) ; ρ : masse volumique du fluide (kg·m⁻³) ; g : accélération de la pesanteur (m·s⁻²) ; h : profondeur verticale (m).',
              example: 'Dans l’eau, à h = 2,0 m, avec ρ = 1000 kg·m⁻³, g = 9,81 m·s⁻² et p₀ = 1,013 × 10⁵ Pa : p = p₀ + ρgh.',
              result: 'p ≈ 1,21 × 10⁵ Pa en pression absolue ; la surpression vaut environ 1,96 × 10⁴ Pa.'
            },
            {
              title: 'Poussée d’Archimède',
              formula: 'Fₐ = ρ (fluide) g V (déplacé)',
              explanation: 'La poussée exercée par un fluide sur un corps immergé est égale au poids du fluide déplacé et dirigée vers le haut.',
              parameters: 'Fₐ : norme de la poussée (N) ; ρ (fluide) : masse volumique du fluide (kg·m⁻³) ; g : pesanteur (m·s⁻²) ; V (déplacé) : volume de fluide déplacé (m³), égal au volume immergé.',
              example: 'Un corps déplace 2,0 L d’eau, soit 0,0020 m³ : Fₐ = 1000 × 9,81 × 0,0020.',
              result: 'Fₐ = 19,62 N.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Fluids, Density, and Pressure', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure' },
            { title: 'OpenStax University Physics, vol. 1 — Archimedes’ Principle and Buoyancy', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy' }
          ]
        }
      },
      {
        id: 'bernoulli',
        title: 'Écoulement et théorème de Bernoulli',
        field: 'Fluides · intermédiaire',
        summary: 'Débit, conservation du débit et échange entre pression, vitesse et altitude.',
        lesson: {
          sections: [
            'Pour un fluide incompressible en régime permanent, le débit volumique se conserve le long d’un conduit sans fuite.',
            'Le théorème de Bernoulli exprime la conservation de l’énergie mécanique par unité de volume le long d’une ligne de courant, dans les hypothèses du modèle idéal.'
          ],
          formula: {
            label: 'CONTINUITÉ ET BERNOULLI',
            text: 'Q = Sv  |  p + ½ρv² + ρgz = constante'
          },
          example: {
            statement: 'Un conduit passe de 4 cm² à 1 cm². Si la vitesse initiale est 1 m·s⁻¹, quelle est la vitesse dans la partie étroite ?',
            calculation: 'S₁v₁ = S₂v₂, donc v₂ = S₁v₁/S₂ = 4×1/1.',
            answer: 'v₂ = 4 m·s⁻¹.'
          },
          exercise: {
            question: 'Si la section d’un conduit double et que le débit reste constant, que devient la vitesse ?',
            answer: 'Elle est divisée par deux puisque Q = Sv.'
          },
          equationDetails: [
            {
              title: 'Conservation du débit pour un fluide incompressible',
              formula: 'Q = Sv ; S₁v₁ = S₂v₂',
              explanation: 'Dans un écoulement permanent d’un fluide incompressible sans fuite, le débit volumique se conserve entre les sections du conduit.',
              parameters: 'Q : débit volumique (m³·s⁻¹) ; S : aire de section (m²) ; v : vitesse moyenne normale à la section (m·s⁻¹).',
              example: 'Un conduit passe de S₁ = 4 cm² à S₂ = 1 cm², avec v₁ = 1 m·s⁻¹ : v₂ = S₁v₁/S₂.',
              result: 'v₂ = 4 m·s⁻¹.'
            },
            {
              title: 'Équation de Bernoulli',
              formula: 'p + ½ρv² + ρgz = constante',
              explanation: 'Le long d’une ligne de courant, cette somme de pression statique, pression dynamique et énergie potentielle volumique se conserve pour un fluide parfait, incompressible et en écoulement permanent. Des pertes visqueuses exigent un terme supplémentaire.',
              parameters: 'p : pression (Pa) ; ρ : masse volumique (kg·m⁻³) ; v : vitesse (m·s⁻¹) ; g : pesanteur (m·s⁻²) ; z : altitude (m). Chaque terme s’exprime en Pa = J·m⁻³.',
              example: 'Dans un conduit horizontal à même altitude, si v passe de 2 à 4 m·s⁻¹ dans l’eau (ρ = 1000 kg·m⁻³), alors p₂ − p₁ = ½ρ(v₁² − v₂²).',
              result: 'La pression baisse de 6000 Pa dans ce modèle idéal.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Fluid Dynamics', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-5-fluid-dynamics' },
            { title: 'OpenStax University Physics, vol. 1 — Bernoulli’s Equation', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation' }
          ]
        }
      },
      {
        id: 'viscosite',
        title: 'Viscosité et régime d’écoulement',
        field: 'Fluides · approfondissement',
        summary: 'Frottements internes, écoulement laminaire ou turbulent et nombre de Reynolds.',
        lesson: {
          sections: [
            'La viscosité quantifie les frottements internes d’un fluide. Elle dissipe de l’énergie mécanique en chaleur et ralentit l’écoulement.',
            'Le nombre de Reynolds compare les effets d’inertie aux effets visqueux. Il aide à prévoir si un écoulement est plutôt laminaire ou turbulent.'
          ],
          formula: {
            label: 'NOMBRE DE REYNOLDS',
            text: 'Re = ρvL/μ'
          },
          example: {
            statement: 'Calculer Re pour l’eau avec ρ = 1000 kg·m⁻³, v = 0,1 m·s⁻¹, L = 0,01 m et μ = 10⁻³ Pa·s.',
            calculation: 'Re = 1000×0,1×0,01/(10⁻³).',
            answer: 'Re = 1000.'
          },
          exercise: {
            question: 'Comment varie Re si la vitesse double ?',
            answer: 'Re est proportionnel à v, donc il double.'
          },
          equationDetails: [
            {
              title: 'Nombre de Reynolds',
              formula: 'Re = ρvL/μ',
              explanation: 'Ce nombre sans dimension compare les effets inertiels aux effets visqueux. Il aide à caractériser un écoulement, mais la valeur de transition dépend de la géométrie et des conditions.',
              parameters: 'Re : nombre de Reynolds (sans unité) ; ρ : masse volumique (kg·m⁻³) ; v : vitesse caractéristique (m·s⁻¹) ; L : longueur caractéristique (m) ; μ : viscosité dynamique (Pa·s).',
              example: 'Pour l’eau, ρ = 1000 kg·m⁻³, v = 0,10 m·s⁻¹, L = 0,010 m et μ = 10⁻³ Pa·s : Re = 1000 × 0,10 × 0,010/10⁻³.',
              result: 'Re = 1000. Dans un tube circulaire lisse, c’est généralement un régime laminaire, mais les seuils sont indicatifs et propres à la configuration.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Viscosity and Turbulence', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-7-viscosity-and-turbulence' }
          ]
        }
      }
    ]
  },
  {
    id: 'physique-quantique',
    title: 'Physique quantique et atomique',
    note: 'Quand l’énergie et la matière se décrivent à l’échelle microscopique. Un cours approfondi en vingt sections prolonge cette branche, du corps noir au laser.',
    chapters: [
      {
        id: 'photons',
        title: 'Photons et effet photoélectrique',
        field: 'Quantique · bases',
        summary: 'Énergie des photons, effet photoélectrique, fonction de travail et fréquence ou longueur d’onde seuil.',
        lesson: {
          sections: [
            'Un photon de fréquence f transporte une énergie E = hf. À fréquence fixée, augmenter l’intensité d’une lumière augmente surtout le nombre de photons reçus par unité de temps, pas l’énergie de chacun. Dans le vide, la fréquence et la longueur d’onde sont liées par c = fλ.',
            'Dans l’effet photoélectrique, un photon peut céder son énergie à un électron du matériau. Une partie sert à extraire l’électron (fonction de travail φ) ; le reste devient son énergie cinétique. Il existe donc une fréquence seuil propre au matériau. Au seuil idéal, l’électron sort avec une énergie cinétique nulle ; en dessous, augmenter l’intensité ne suffit pas à extraire des électrons.',
            'Le potentiel d’arrêt est la valeur absolue de la tension inverse nécessaire pour empêcher même les photoélectrons les plus énergétiques d’atteindre l’électrode collectrice. Il donne une mesure de leur énergie cinétique maximale. Les équations ci-dessous supposent le modèle photoélectrique à un photon, sans pertes supplémentaires de l’électron dans le matériau.'
          ],
          formula: {
            label: 'ÉNERGIE DU PHOTON',
            text: 'Eγ = hf = hc/λ'
          },
          example: {
            statement: 'Un photon a une fréquence f = 5,00 × 10¹⁴ Hz. Calculer son énergie et sa longueur d’onde dans le vide.',
            calculation: 'Avec h = 6,626 × 10⁻³⁴ J·s et c = 2,998 × 10⁸ m·s⁻¹ : E = hf = 3,313 × 10⁻¹⁹ J ; λ = c/f = 6,00 × 10⁻⁷ m.',
            answer: 'E ≈ 2,07 eV et λ ≈ 600 nm.'
          },
          exercise: {
            question: 'Une surface de travail φ = 2,00 eV reçoit une lumière de longueur d’onde 400 nm. Quelle est l’énergie cinétique maximale des photoélectrons ?',
            answer: 'Eγ = hc/λ ≈ 1239,84/400 = 3,10 eV. Kₘₐₓ = Eγ − φ ≈ 3,10 − 2,00 = 1,10 eV.'
          },
          equationDetails: [
            {
              title: 'Énergie et longueur d’onde du photon',
              formula: 'Eγ = hf = hc/λ ; c = fλ',
              explanation: 'La première égalité donne l’énergie quantique du photon ; la seconde forme utilise la relation de propagation d’une onde électromagnétique dans le vide. Une fréquence plus élevée, donc une longueur d’onde plus courte, correspond à un photon plus énergétique.',
              parameters: 'Eγ : énergie du photon (J ou eV) ; h = 6,62607015 × 10⁻³⁴ J·s : constante de Planck ; f : fréquence (Hz = s⁻¹) ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide ; λ : longueur d’onde dans le vide (m). hc ≈ 1239,84 eV·nm.',
              example: 'Pour f = 5,00 × 10¹⁴ Hz, Eγ = hf = 3,313 × 10⁻¹⁹ J. Avec 1 eV = 1,602176634 × 10⁻¹⁹ J, cela vaut 2,07 eV ; λ = c/f = 600 nm.',
              result: 'Le photon transporte environ 3,31 × 10⁻¹⁹ J, soit 2,07 eV, et sa longueur d’onde dans le vide est 600 nm.'
            },
            {
              title: 'Bilan d’énergie de l’effet photoélectrique',
              formula: 'Kₘₐₓ = hf − φ, si hf ≥ φ',
              explanation: 'Dans le modèle d’Einstein, un photon transfère son énergie à un électron. Le travail nécessaire pour extraire cet électron est la fonction de travail φ ; l’énergie restante est la borne supérieure de l’énergie cinétique des électrons émis. Si hf < φ, aucune émission photoélectrique à un photon n’est possible.',
              parameters: 'Kₘₐₓ : énergie cinétique maximale de l’électron émis (J ou eV) ; h : constante de Planck ; f : fréquence incidente (Hz) ; φ : fonction de travail du matériau, énergie minimale d’extraction (J ou eV). Les énergies doivent être dans les mêmes unités.',
              example: 'Pour une surface hypothétique de φ = 2,00 eV éclairée à λ = 400 nm, Eγ = hc/λ ≈ 1239,84/400 = 3,10 eV, donc Kₘₐₓ ≈ 3,10 − 2,00.',
              result: 'Kₘₐₓ ≈ 1,10 eV. La valeur φ = 2,00 eV est ici une donnée d’exercice, pas l’attribution à un métal particulier.'
            },
            {
              title: 'Fréquence seuil',
              formula: 'f₀ = φ/h',
              explanation: 'La fréquence seuil correspond au cas limite hf₀ = φ : chaque photon apporte juste l’énergie d’extraction. Au seuil idéal, Kₘₐₓ = 0 ; une fréquence strictement supérieure donne des électrons avec une énergie cinétique positive.',
              parameters: 'f₀ : fréquence seuil (Hz) ; φ : fonction de travail (J) ; h : constante de Planck (J·s). Si φ est donnée en eV, utiliser h ≈ 4,135667696 × 10⁻¹⁵ eV·s.',
              example: 'Pour φ = 2,00 eV, f₀ = 2,00/(4,135667696 × 10⁻¹⁵) s⁻¹.',
              result: 'f₀ ≈ 4,84 × 10¹⁴ Hz.'
            },
            {
              title: 'Longueur d’onde seuil',
              formula: 'λ₀ = c/f₀ = hc/φ',
              explanation: 'Cette relation exprime le même seuil en longueur d’onde. Comme f = c/λ dans le vide, le photoeffet est possible pour λ < λ₀ ; à λ = λ₀, le modèle idéal donne Kₘₐₓ = 0.',
              parameters: 'λ₀ : longueur d’onde seuil dans le vide (m ou nm) ; c : vitesse de la lumière (m·s⁻¹) ; f₀ : fréquence seuil (Hz) ; h : constante de Planck ; φ : fonction de travail. Utiliser des unités cohérentes pour hc et φ.',
              example: 'Pour φ = 2,00 eV, λ₀ ≈ (1239,84 eV·nm)/(2,00 eV).',
              result: 'λ₀ ≈ 620 nm. Une longueur d’onde plus grande ne produit pas de photoélectrons dans ce modèle, même si l’intensité augmente.'
            },
            {
              title: 'Mesure par le potentiel d’arrêt',
              formula: 'Kₘₐₓ = eVs',
              explanation: 'Un champ électrique inverse freine les photoélectrons. Au potentiel d’arrêt, le travail électrique compense exactement leur énergie cinétique maximale. Vs désigne ici la valeur positive de la tension de freinage ; le signe de la tension appliquée dépend du branchement.',
              parameters: 'Kₘₐₓ : énergie cinétique maximale (J) ; e = 1,602176634 × 10⁻¹⁹ C : valeur absolue de la charge élémentaire ; Vs : valeur absolue du potentiel d’arrêt (V). Comme 1 eV = e × 1 V, la valeur numérique en eV est égale à celle en volts.',
              example: 'Si le potentiel d’arrêt mesuré vaut Vs = 1,10 V, alors Kₘₐₓ = e × 1,10 V.',
              result: 'Kₘₐₓ = 1,10 eV, soit environ 1,76 × 10⁻¹⁹ J.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Blackbody Radiation and Planck’s hypothesis', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation' },
            { title: 'OpenStax University Physics, vol. 3 — Photoelectric Effect', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect' },
            { title: 'NIST — CODATA recommended values of the fundamental constants', url: 'https://physics.nist.gov/cuu/Constants/' }
          ]
        }
      },
      {
        id: 'dualite-onde-corpuscule',
        title: 'Dualité onde-corpuscule et de Broglie',
        field: 'Quantique · intermédiaire',
        summary: 'Longueur d’onde de de Broglie, limites de localisation et dualité observée par diffraction et interférences.',
        lesson: {
          sections: [
            'À une particule de quantité de mouvement p est associée une longueur d’onde λ = h/p. Cette onde de matière n’est pas une vague matérielle : la mécanique quantique utilise une fonction d’onde pour calculer des probabilités. Les interférences et la diffraction d’électrons en révèlent le caractère ondulatoire, tandis que des détections localisées révèlent leur aspect corpusculaire.',
            'Pour une particule lente devant la lumière, p ≈ mv ; lorsque la vitesse approche c, il faut utiliser la quantité de mouvement relativiste p = γmv. La formule de de Broglie reste λ = h/p dans les deux cas : c’est l’approximation utilisée pour calculer p qui change.',
            'Une particule localisée est décrite par un paquet d’ondes. Réduire la dispersion de ses positions exige une plus grande dispersion des quantités de mouvement possibles. La relation d’incertitude donne une borne minimale intrinsèque aux écarts-types ; ce n’est pas simplement une imperfection des instruments de mesure.',
            'Dans le modèle semi-classique de Bohr, l’onde associée à l’électron doit se refermer sur son orbite : un nombre entier de longueurs d’onde tient sur la circonférence. Cette condition explique la quantification des orbites dans ce modèle historique ; en mécanique quantique moderne, l’électron n’est pas décrit comme une bille parcourant une trajectoire circulaire déterminée.'
          ],
          formula: {
            label: 'LONGUEUR D’ONDE DE DE BROGLIE',
            text: 'λ = h/p'
          },
          example: {
            statement: 'Estimer la longueur d’onde de de Broglie d’un électron de vitesse 1,00 × 10⁶ m·s⁻¹.',
            calculation: 'Comme v ≪ c, p ≈ mv = (9,109 × 10⁻³¹ kg)(1,00 × 10⁶ m·s⁻¹) = 9,109 × 10⁻²⁵ kg·m·s⁻¹. Alors λ = h/p.',
            answer: 'λ ≈ 7,27 × 10⁻¹⁰ m, soit 0,727 nm.'
          },
          exercise: {
            question: 'Un électron est localisé avec un écart-type Δx = 0,10 nm. Quelle est la plus petite valeur permise de Δp par la relation de Heisenberg ?',
            answer: 'Δp ≥ ℏ/(2Δx) = (1,055 × 10⁻³⁴ J·s)/(2 × 1,0 × 10⁻¹⁰ m) ≈ 5,27 × 10⁻²⁵ kg·m·s⁻¹.'
          },
          equationDetails: [
            {
              title: 'Longueur d’onde de de Broglie',
              formula: 'λ = h/p ; p = mv si v ≪ c',
              explanation: 'La longueur d’onde associée à la matière est inversement proportionnelle à sa quantité de mouvement. Pour une particule non relativiste, on calcule p avec la mécanique classique ; à vitesse relativiste, p = γmv avec γ = 1/√(1 − v²/c²).',
              parameters: 'λ : longueur d’onde de matière (m) ; h = 6,62607015 × 10⁻³⁴ J·s : constante de Planck ; p : norme de la quantité de mouvement (kg·m·s⁻¹) ; m : masse (kg) ; v : vitesse (m·s⁻¹) ; c : vitesse de la lumière ; γ : facteur de Lorentz.',
              example: 'Pour un électron de masse mₑ = 9,109 × 10⁻³¹ kg se déplaçant à v = 1,00 × 10⁶ m·s⁻¹, v/c ≈ 0,0033, donc p ≈ mₑv = 9,109 × 10⁻²⁵ kg·m·s⁻¹ et λ = h/p.',
              result: 'λ ≈ 7,27 × 10⁻¹⁰ m = 0,727 nm. L’approximation non relativiste est justifiée ici car v est très inférieure à c.'
            },
            {
              title: 'Principe d’incertitude position-impulsion',
              formula: 'Δx Δp ≥ ℏ/2',
              explanation: 'Δx et Δp représentent les écarts-types de position et de quantité de mouvement dans un même état quantique. Leur produit ne peut pas être inférieur à ℏ/2 ; certaines fonctions d’onde, comme une gaussienne, atteignent cette borne. La limite est intrinsèque à l’état quantique, pas une erreur de fabrication de l’appareil.',
              parameters: 'Δx : incertitude-type de position (m) ; Δp : incertitude-type de quantité de mouvement (kg·m·s⁻¹) ; ℏ = h/(2π) ≈ 1,055 × 10⁻³⁴ J·s : constante de Planck réduite.',
              example: 'Si Δx = 0,10 nm = 1,0 × 10⁻¹⁰ m, alors Δp ≥ ℏ/(2Δx) ≈ (1,055 × 10⁻³⁴)/(2,0 × 10⁻¹⁰).',
              result: 'Δp ≥ 5,27 × 10⁻²⁵ kg·m·s⁻¹.'
            },
            {
              title: 'Onde stationnaire dans le modèle de Bohr',
              formula: '2πrₙ = nλ ; Lₙ = nℏ',
              explanation: 'Dans l’image semi-classique de Bohr, l’onde de de Broglie se referme sans rupture après un tour : la circonférence contient n longueurs d’onde. En remplaçant λ par h/p, on retrouve la quantification du moment cinétique orbital de ce modèle.',
              parameters: 'rₙ : rayon de l’orbite n (m) ; n : entier positif (indice d’orbite) ; λ : longueur d’onde de de Broglie (m) ; Lₙ : moment cinétique orbital (J·s) ; ℏ = h/(2π).',
              example: 'Pour l’état fondamental n = 1 de l’hydrogène dans le modèle de Bohr, r₁ = a₀ = 0,529 Å. La condition donne λ = 2πr₁.',
              result: 'λ ≈ 3,32 Å. Cette représentation est celle du modèle de Bohr, pas une trajectoire réelle dans la description quantique moderne.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — De Broglie’s Matter Waves', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves' },
            { title: 'OpenStax University Physics, vol. 3 — Wave-Particle Duality', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality' },
            { title: 'OpenStax University Physics, vol. 3 — The Heisenberg Uncertainty Principle', url: 'https://openstax.org/books/university-physics-volume-3/pages/7-2-the-heisenberg-uncertainty-principle' },
            { title: 'OpenStax University Physics, vol. 3 — Bohr’s Model of the Hydrogen Atom', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-4-bohrs-model-of-the-hydrogen-atom' }
          ]
        }
      },
      {
        id: 'atomes-niveaux',
        title: 'Atomes et niveaux d’énergie',
        field: 'Quantique · intermédiaire',
        summary: 'Niveaux d’énergie de l’hydrogène, transitions quantiques, photons et raies spectrales.',
        lesson: {
          sections: [
            'Un atome ne peut occuper que certains états d’énergie. Dans l’atome d’hydrogène, le modèle de Bohr donne des niveaux discrets Eₙ = −13,6 eV/n², avec n entier positif. Cette formule décrit correctement les niveaux principaux de l’hydrogène dans l’approximation non relativiste ; les atomes à plusieurs électrons ont des interactions et des corrections supplémentaires.',
            'Lors d’une transition, l’énergie de l’atome change de ΔE_atome = E_final − E_initial. Le photon émis emporte l’énergie perdue par l’atome ; un photon absorbé doit apporter exactement l’écart vers un état supérieur. Les raies spectrales correspondent ainsi à des longueurs d’onde bien déterminées.',
            'Pour l’émission dans l’hydrogène, un électron descend d’un niveau n₁ vers un niveau plus bas n₂. La série de Balmer correspond à n₂ = 2 ; la transition n₁ = 3 vers n₂ = 2 produit la raie Hα rouge vers 656 nm. Le modèle de Bohr est un modèle semi-classique utile pour l’hydrogène, tandis que la mécanique quantique décrit les états par des fonctions d’onde plutôt que par des orbites planétaires.'
          ],
          formula: {
            label: 'ÉNERGIE D’UNE TRANSITION',
            text: '|ΔE| = hf = hc/λ'
          },
          example: {
            statement: 'Un atome émet un photon lors d’une transition d’énergie 3,00 eV. Calculer sa fréquence et sa longueur d’onde.',
            calculation: 'λ = hc/|ΔE| ≈ 1239,84 eV·nm/3,00 eV = 413,28 nm ; f = |ΔE|/h ≈ 3,00/(4,13567 × 10⁻¹⁵) Hz.',
            answer: 'λ ≈ 413 nm et f ≈ 7,25 × 10¹⁴ Hz.'
          },
          exercise: {
            question: 'Dans le modèle de Bohr de l’hydrogène, quelle énergie faut-il fournir pour faire passer l’électron de n = 1 à n = 2 ?',
            answer: 'E₁ = −13,6 eV et E₂ = −13,6/4 = −3,40 eV. Il faut fournir ΔE = E₂ − E₁ = 10,2 eV.'
          },
          equationDetails: [
            {
              title: 'Niveaux d’énergie de l’hydrogène',
              formula: 'Eₙ = −13,6 eV/n², n = 1, 2, 3, …',
              explanation: 'Dans le modèle de Bohr, l’énergie liée de l’électron est négative et ne prend que ces valeurs discrètes ; E = 0 correspond à l’électron libre, juste ionisé. Cette expression vaut pour l’hydrogène dans l’approximation usuelle ; elle ne s’applique pas telle quelle à un atome neutre à plusieurs électrons.',
              parameters: 'Eₙ : énergie totale de l’état n (eV) ; n : nombre quantique principal, entier positif ; −13,6 eV : énergie fondamentale de l’hydrogène dans ce modèle. Les petites corrections de structure fine et de masse réduite ne sont pas incluses.',
              example: 'Pour n = 2, E₂ = −13,6/2² eV.',
              result: 'E₂ = −3,40 eV. L’électron est moins lié qu’au niveau fondamental E₁ = −13,6 eV.'
            },
            {
              title: 'Énergie et longueur d’onde d’une transition',
              formula: '|ΔE| = hf = hc/λ',
              explanation: 'La valeur absolue de la variation d’énergie atomique est égale à l’énergie du photon émis ou absorbé. À l’émission, l’atome perd cette énergie ; à l’absorption, il la reçoit. Le signe de ΔE_atome dépend donc du sens de la transition, contrairement à l’énergie du photon qui est positive.',
              parameters: '|ΔE| : écart d’énergie (J ou eV) ; h = 6,62607015 × 10⁻³⁴ J·s ; f : fréquence du photon (Hz) ; c = 299 792 458 m·s⁻¹ dans le vide ; λ : longueur d’onde (m). En unités pratiques, hc ≈ 1239,84 eV·nm.',
              example: 'Pour |ΔE| = 3,00 eV, λ ≈ 1239,84/3,00 nm et f ≈ 3,00/(4,13567 × 10⁻¹⁵) Hz.',
              result: 'Le photon a λ ≈ 413 nm et f ≈ 7,25 × 10¹⁴ Hz.'
            },
            {
              title: 'Raies de l’hydrogène (formule de Rydberg)',
              formula: '1/λ = Rₕ(1/n₂² − 1/n₁²), n₁ > n₂',
              explanation: 'Cette relation donne les longueurs d’onde émises lorsqu’un électron de l’hydrogène passe du niveau initial supérieur n₁ au niveau final inférieur n₂. Elle découle de la différence entre les niveaux d’énergie et de |ΔE| = hc/λ. Pour une absorption, les niveaux sont parcourus dans le sens inverse et on prend la valeur absolue de la différence.',
              parameters: 'λ : longueur d’onde dans le vide (m) ; Rₕ ≈ 1,09737 × 10⁷ m⁻¹ : constante de Rydberg pour l’hydrogène ; n₁ et n₂ : nombres quantiques principaux entiers positifs ; n₁ > n₂ pour l’émission.',
              example: 'Pour la raie Hα, n₁ = 3 et n₂ = 2 : 1/λ = Rₕ(1/2² − 1/3²) = Rₕ(5/36).',
              result: 'Avec Rₕ ≈ 1,09737 × 10⁷ m⁻¹, λ ≈ 656,1 nm, dans le rouge visible ; cette transition appartient à la série de Balmer.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Bohr’s Model of the Hydrogen Atom', url: 'https://openstax.org/books/university-physics-volume-3/pages/6-4-bohrs-model-of-the-hydrogen-atom' },
            { title: 'OpenStax University Physics, vol. 3 — The Hydrogen Atom', url: 'https://openstax.org/books/university-physics-volume-3/pages/8-1-the-hydrogen-atom' },
            { title: 'OpenStax University Physics, vol. 3 — Atomic Spectra and X-rays', url: 'https://openstax.org/books/university-physics-volume-3/pages/8-5-atomic-spectra-and-x-rays' },
            { title: 'NIST — CODATA recommended values of the fundamental constants', url: 'https://physics.nist.gov/cuu/Constants/' }
          ]
        }
      }
    ]
  },
  {
    id: 'quantique-atomes',
    title: 'Physique quantique et atomes',
    note: 'Un cours approfondi en vingt sections : du corps noir à la mécanique ondulatoire, aux atomes, aux rayons X et au laser, avec exercices et sources.',
    chapters: [
      {
        id: 'quant-corps-noir',
        title: 'Le rayonnement du corps noir',
        field: 'Cours approfondi',
        summary: 'La première fissure dans la physique classique',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un <strong>corps noir</strong> est un objet qui absorbe tout le rayonnement qu\'il reçoit ; il est réalisé physiquement par un petit trou percé dans la paroi d\'un four fermé, car toute onde qui entre par ce trou a très peu de chances d\'en ressortir. Ce corps émet en retour un rayonnement continu, dit <strong>rayonnement du corps noir</strong>, dont l\'intensité <span class="math">I(λ, T)</span> ne dépend que de la longueur d\'onde <span class="math">λ</span> et de la température <span class="math">T</span> (en kelvins). Deux lois empiriques résument les mesures, et elles suffisent à comparer des sources très éloignées, comme des étoiles (OpenStax, <em>University Physics</em> vol. 3, § 6.1).</p>\n<div class="formula-block"><span class="formula-label">LOI DE DÉPLACEMENT DE WIEN</span><math class="mathml-display" display="block" aria-label="Longueur d\'onde du maximum d\'émission multipliée par la température, égale à deux virgule huit neuf huit fois dix puissance moins trois mètre kelvin"><mrow><msub><mi>λ</mi><mi>max</mi></msub><mi>T</mi><mo>=</mo><mn>2.898</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mspace width="0.3em"></mspace><mi mathvariant="normal">m</mi><mo>·</mo><mi mathvariant="normal">K</mi></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> λ<sub>max</sub> : longueur d\'onde du maximum d\'émission (m) ; T : température absolue (K). <strong>Conséquence :</strong> plus un corps est chaud, plus son maximum d\'émission se déplace vers les courtes longueurs d\'onde — d\'où le rougeoiement d\'un métal chauffé, puis le blanc quand il devient très chaud.</p>\n<div class="formula-block"><span class="formula-label">LOI DE STEFAN</span><math class="mathml-display" display="block" aria-label="Intensité totale rayonnée égale à sigma fois la température à la puissance quatre"><mrow><mi>I</mi><mo>=</mo><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> I : intensité rayonnée, c\'est-à-dire la puissance émise par unité de surface (W·m⁻²) ; σ = 5,670 × 10⁻⁸ W·m⁻²·K⁻⁴ (constante de Stefan-Boltzmann) ; T : température (K). Pour un radiateur idéal de surface A, la puissance totale rayonnée s\'écrit P = σAT⁴. <strong>Ordre de grandeur :</strong> doubler la température absolue multiplie la puissance rayonnée par 16.</p>\n<div class="callout"><strong>Le problème qui a tout déclenché</strong><p>La théorie classique prévoyait une intensité croissant sans limite quand λ diminue : c\'est la <em>catastrophe ultraviolette</em>, contredite par l\'expérience de façon flagrante. En 1900, Max Planck propose qu\'un oscillateur de la paroi ne puisse échanger l\'énergie que par paquets d\'énergie hf : l\'énergie rayonnée redevient finie, la courbe calculée se superpose aux mesures, et une énergie élémentaire <span class="math">h = 6,626 × 10⁻³⁴ J·s</span> fait son entrée en physique.</p></div>'
        }
      },
      {
        id: 'quant-photoelectrique',
        title: 'L’effet photoélectrique',
        field: 'Cours approfondi',
        summary: 'Un électron pour un photon',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Quand une surface métallique reçoit une onde électromagnétique de longueur d\'onde suffisamment courte, elle émet des électrons : c\'est l\'<strong>effet photoélectrique</strong>, et les électrons arrachés sont les <strong>photoélectrons</strong>. Dans le dispositif expérimental, la cathode est éclairée dans un tube vidé d\'air et une tension variable entre cathode et anode permet de mesurer le courant photoélectrique. En inversant la tension, on atteint la <strong>tension d\'arrêt</strong> : la valeur pour laquelle le courant s\'annule, qui mesure directement l\'énergie cinétique maximale des photoélectrons (OpenStax, <em>University Physics</em> vol. 3, § 6.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Trois observations résistent à la description ondulatoire classique : l\'énergie cinétique maximale <em>ne dépend pas</em> de l\'intensité lumineuse ; la tension d\'arrêt garde la même valeur quelle que soit l\'intensité ; et le courant s\'établit immédiatement, sans temps d\'accumulation d\'énergie. L\'énergie cinétique maximale se lit sur la tension d\'arrêt par la relation <span class="math">K<sub>max</sub> = eΔV<sub>s</sub></span>.</p>\n<div class="formula-block"><span class="formula-label">ÉQUATION D\'EINSTEIN · 1905</span><math class="mathml-display" display="block" aria-label="Énergie cinétique maximale égale à h f moins phi, et fréquence de coupure égale à phi divisé par h"><mtable><mtr><mtd><mrow><msub><mi>K</mi><mi>max</mi></msub><mo>=</mo><mi>h</mi><mi>f</mi><mo>−</mo><mi>ϕ</mi></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>f</mi><mi>c</mi></msub><mo>=</mo><mfrac><mi>ϕ</mi><mi>h</mi></mfrac></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> K<sub>max</sub> : énergie cinétique maximale de l\'électron éjecté (J ou eV) ; h : constante de Planck ; f : fréquence de la lumière incidente (Hz) ; φ : <strong>travail d\'extraction</strong>, énergie minimale pour détacher l\'électron de la surface (J ou eV) ; f<sub>c</sub> : fréquence de coupure, en dessous de laquelle aucun électron n\'est émis quelle que soit l\'intensité. En divisant par h, on obtient la longueur d\'onde de seuil λ<sub>c</sub> = hc/φ.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Travail d\'extraction de quelques métaux (OpenStax, University Physics vol. 3, tableau 6.1)</caption>\n<thead><tr><th scope="col">Métal</th><th scope="col">φ (eV)</th><th scope="col">Longueur d\'onde de seuil indicative</th></tr></thead>\n<tbody>\n<tr><th scope="row">Sodium (Na)</th><td>2,46</td><td>≈ 504 nm (vert)</td></tr>\n<tr><th scope="row">Aluminium (Al)</th><td>4,08</td><td>≈ 304 nm (ultraviolet A)</td></tr>\n<tr><th scope="row">Plomb (Pb)</th><td>4,14</td><td>≈ 299 nm</td></tr>\n<tr><th scope="row">Zinc (Zn)</th><td>4,31</td><td>≈ 288 nm</td></tr>\n<tr><th scope="row">Fer (Fe)</th><td>4,50</td><td>≈ 276 nm</td></tr>\n<tr><th scope="row">Cuivre (Cu)</th><td>4,70</td><td>≈ 264 nm</td></tr>\n<tr><th scope="row">Argent (Ag)</th><td>4,73</td><td>≈ 262 nm</td></tr>\n<tr><th scope="row">Platine (Pt)</th><td>6,35</td><td>≈ 195 nm</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lecture : les longueurs de seuil sont calculées avec <span class="math">hc ≈ 1 240 eV·nm</span> à partir des valeurs du tableau, par λ<sub>c</sub> = hc/φ. Un métal à fort travail d\'extraction exige donc un photon plus énergétique, c\'est-à-dire plus ultraviolet.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Einstein interprète ces faits en 1905 : l\'échange d\'énergie entre lumière et matière se fait photon par photon, et un photon n\'est efficace que s\'il apporte à lui seul au moins le travail d\'extraction. L\'intensité ne change que le <em>nombre</em> de photons, donc le nombre d\'électrons émis, jamais l\'énergie individuelle de chacun. Les mesures de Robert Millikan, une dizaine d\'années plus tard, confirment la proportionnalité entre énergie cinétique et fréquence, avec une pente égale à h pour tous les métaux.</p>'
        }
      },
      {
        id: 'quant-compton',
        title: 'L’effet Compton',
        field: 'Cours approfondi',
        summary: 'Quand un photon recule en frappant un électron',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En dirigeant un faisceau de rayons X sur une cible de graphite, Arthur Compton observe que la lumière diffusée contient, à côté de la longueur d\'onde incidente λ, une seconde longueur d\'onde λ′ plus grande : une partie du rayonnement ressort « décalée ». Ce <strong>décalage de Compton</strong> Δλ dépend de l\'angle de diffusion θ du photon : il est maximal à 180° et nul dans la direction incidente. Une onde classique ne peut pas changer de longueur d\'onde en se diffusant sur des électrons libres ; un photon, en revanche, subit un choc élastique avec un électron, lui transfère une partie de son énergie et de son impulsion, et voit donc sa longueur d\'onde augmenter (OpenStax, <em>University Physics</em> vol. 3, § 6.3).</p>\n<div class="formula-block"><span class="formula-label">DÉCALAGE DE COMPTON</span><math class="mathml-display" display="block" aria-label="Décalage en longueur d\'onde égal à la longueur d\'onde de Compton de l\'électron fois un moins cosinus thêta"><mrow><mi>Δ</mi><mi>λ</mi><mo>=</mo><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi mathvariant="normal">c</mi></msub><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mi>cos</mi><mi>θ</mi><mo>)</mo></mrow></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> λ : longueur d\'onde du photon incident (m) ; λ′ : longueur d\'onde du photon diffusé (m) ; θ : angle de diffusion du photon ; λ<sub>c</sub> = h/(m₀c) = 0,002 43 nm = 2,43 pm : <strong>longueur d\'onde de Compton</strong> de l\'électron, calculée avec sa masse au repos m₀. <strong>Repères :</strong> à θ = 90°, Δλ = λ<sub>c</sub> = 2,43 pm ; à θ = 180°, Δλ = 2λ<sub>c</sub> = 4,86 pm. Le décalage n\'est donc visible que pour les rayons X ou gamma, dont la longueur d\'onde est de l\'ordre du dixième de nanomètre.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La vérification est double : la formule reproduit précisément les spectres mesurés aux différents angles, et les électrons de recul sont effectivement détectés avec l\'énergie et l\'impulsion que la conservation impose. L\'effet Compton fournit ainsi une preuve directe du caractère corpusculaire des rayons X, complémentaire du photon d\'Einstein dans le visible.</p>'
        }
      },
      {
        id: 'quant-bohr',
        title: 'Le modèle de Bohr',
        field: 'Cours approfondi',
        summary: 'Des orbites autorisées aux raies de l\'hydrogène',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le spectre de l\'hydrogène est discontinu : quatre raies visibles, puis une série ultraviolette et des séries infrarouges. En 1885, Johann Balmer trouve empiriquement la position des raies visibles, puis Johannes Rydberg généralise la formule à toutes les séries : la lumière n\'est émise qu\'à certaines longueurs d\'onde précises, avec <span class="math">1/λ = R<sub>H</sub>(1/n<sub>f</sub>² − 1/n<sub>i</sub>²)</span>, où R<sub>H</sub> = 1,097 37 × 10⁷ m⁻¹ et n<sub>i</sub> = n<sub>f</sub> + 1, n<sub>f</sub> + 2, … (OpenStax, <em>University Physics</em> vol. 3, § 6.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Niels Bohr explique ces formules en 1913 avec trois postulats : l\'électron ne peut occuper que certaines orbites circulaires, dans lesquelles il n\'émet pas de rayonnement ; son moment cinétique y est quantifié, <span class="math">L<sub>n</sub> = nħ</span> avec n = 1, 2, 3, … ; une transition d\'une orbite d\'énergie E<sub>i</sub> vers une orbite d\'énergie E<sub>f</sub> s\'accompagne de l\'absorption ou de l\'émission d\'un photon unique tel que <span class="math">hf = |E<sub>i</sub> − E<sub>f</sub>|</span>.</p>\n<div class="formula-block"><span class="formula-label">NIVEAUX D\'ÉNERGIE DE L\'HYDROGÈNE</span><math class="mathml-display" display="block" aria-label="Énergie du niveau n égale moins E zéro divisé par n au carré, avec E zéro égal à treize virgule six électronvolts"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width="0.5em"></mspace><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>13.6</mn><mspace width="0.3em"></mspace><mtext>eV</mtext></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E<sub>n</sub> : énergie de l\'électron sur l\'orbite n (eV) ; E₀ = 13,6 eV, soit 2,17 × 10⁻¹⁸ J. <strong>Valeurs à connaître :</strong> n = 1 : E₁ = −13,6 eV (état fondamental) ; n = 2 : −3,40 eV ; n = 3 : −1,51 eV ; les niveaux se resserrent quand n grandit et s\'approchent de zéro, où l\'atome est ionisé. Le rayon de la première orbite, appelé <strong>rayon de Bohr</strong>, vaut <span class="math">a₀ = 4πε₀ħ²/(m<sub>e</sub>e²) = 5,29 × 10⁻¹¹ m ≈ 0,0529 nm</span>, et les rayons croissent comme n².</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les séries spectrales de l\'hydrogène (OpenStax, University Physics vol. 3, § 6.4)</caption>\n<thead><tr><th scope="col">Série</th><th scope="col">Niveau final n<sub>f</sub></th><th scope="col">Domaine spectral</th><th scope="col">Exemple</th></tr></thead>\n<tbody>\n<tr><th scope="row">Lyman</th><td>1</td><td>Ultraviolet</td><td>n = 2 → 1 : λ ≈ 122 nm</td></tr>\n<tr><th scope="row">Balmer</th><td>2</td><td>Visible (quatre raies)</td><td>n = 3 → 2 : λ ≈ 656 nm (rouge)</td></tr>\n<tr><th scope="row">Paschen</th><td>3</td><td>Infrarouge</td><td>n = 4 → 3 : λ ≈ 1 875 nm</td></tr>\n<tr><th scope="row">Brackett</th><td>4</td><td>Infrarouge</td><td>n = 5 → 4</td></tr>\n<tr><th scope="row">Pfund</th><td>5</td><td>Infrarouge lointain</td><td>n = 6 → 5</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lecture : la série de Balmer tombe entièrement dans le visible et contient la raie H<sub>α</sub> à 656 nm, que les astronomes utilisent pour repérer l\'hydrogène. L\'énergie d\'ionisation depuis l\'état fondamental vaut 13,6 eV : c\'est la profondeur du puits de potentiel.</p>\n<div class="callout callout-coral"><strong>Une réussite, mais un modèle provisoire</strong><p>Le modèle de Bohr retrouve exactement la formule de Rydberg et prédit la taille de l\'atome, mais il reste incomplet : il décrit bien l\'hydrogène et les ions hydrogénoïdes, échoue pour les atomes à plusieurs électrons, n\'explique pas les intensités relatives des raies et mélange postulats quantiques et mécanique classique. La réponse cohérente viendra avec l\'équation de Schrödinger (section 09), où la quantification n\'est plus postulée mais déduite des conditions aux limites.</p></div>'
        }
      },
      {
        id: 'quant-ondes-matiere',
        title: 'Les ondes de matière',
        field: 'Cours approfondi',
        summary: 'Une longueur d\'onde pour les particules',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La lumière, ondes selon Maxwell, se comporte aussi comme un flux de photons. En 1924, Louis de Broglie propose la symétrie inverse : toute particule de quantité de mouvement p possède une onde associée de longueur d\'onde λ = h/p. Cette hypothèse audacieuse prédit des effets observables, puisque h n\'est pas nulle : un électron accéléré sous quelques dizaines de volts doit diffracter comme un rayonnement de longueur d\'onde comparable aux distances entre atomes d\'un cristal (OpenStax, <em>University Physics</em> vol. 3, § 6.5).</p>\n<div class="formula-block"><span class="formula-label">RELATION DE DE BROGLIE</span><math class="mathml-display" display="block" aria-label="Longueur d\'onde égale à h divisé par la quantité de mouvement, et pour une particule non relativiste, égale à h divisé par la racine carrée de deux m K"><mtable><mtr><mtd><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mn>2</mn><mi>m</mi><mi>K</mi></msqrt></mfrac><mspace width="1em"></mspace><mtext>et, pour un électron accéléré sous</mtext><mspace width="0.3em"></mspace><mi mathvariant="normal">Δ</mi><mi>V</mi><mtext>,</mtext><mspace width="0.4em"></mspace><mi>λ</mi><mo>≈</mo><mfrac><mn>1.226</mn><msqrt><mi mathvariant="normal">Δ</mi><mi>V</mi></msqrt></mfrac><mspace width="0.3em"></mspace><mtext>nm</mtext></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> λ : longueur d\'onde associée (m) ; h : constante de Planck (6,626 × 10⁻³⁴ J·s) ; p : quantité de mouvement (kg·m·s⁻¹) ; m : masse de la particule (kg) ; K : énergie cinétique (J) ; ΔV : tension d\'accélération (V), dans la formule pratique où ΔV est exprimée en volts. Pour un électron, K = eΔV, d\'où la dépendance en 1/√ΔV : plus on accélère, plus l\'onde est courte.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La confirmation expérimentale arrive en 1927 avec l\'expérience de Clinton Davisson et Lester Germer : un faisceau d\'électrons de 54 eV, dirigé normalement sur un cristal de nickel, présente un maximum d\'intensité marqué à un angle de diffusion d\'environ 50°. La diffraction de surface impose alors <span class="math">nλ = a sin φ</span>, avec un pas de réseau mesuré aux rayons X de a = 2,15 Å, ce qui donne λ = 1,64 Å. Or la relation de de Broglie prédit, pour 54 eV, une longueur d\'onde de 1,67 Å : l\'accord à mieux de 2 % est le certificat de naissance de l\'onde de matière.</p>\n<div class="worked-result"><strong>VÉRIFICATION</strong><span class="math">λ = a sin φ = 2,15 Å × sin 50° ≈ 1,64 Å</span><span class="math">λ = h / √(2mK) ≈ 1,67 Å</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les deux chemins vers la même longueur d\'onde se rejoignent à mieux de 2 % : la géométrie de la diffraction donne 1,64 Å à partir du pas de réseau, la relation de de Broglie donne 1,67 Å à partir de 54 eV de tension d\'accélération, avec p = 2,478 × 10⁻⁵ eV·s·m⁻¹. Et le maximum observé ne dépend ni de l\'intensité du faisceau ni d\'un effet collectif dû au grand nombre d\'électrons.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Pourquoi on ne le voit pas dans la vie courante :</strong> une balle de 1 kg lancée à 1 m·s⁻¹ a une quantité de mouvement de 1 kg·m·s⁻¹, donc une longueur d\'onde associée de l\'ordre de 10⁻³⁴ m — trente-quatre ordres de grandeur sous la taille d\'un noyau. Aucune fente, aucun cristal ne peut révéler une telle interférence : c\'est pourquoi la mécanique classique reste valable pour les objets macroscopiques.</p>'
        }
      },
      {
        id: 'quant-dualite',
        title: 'Dualité onde-particule',
        field: 'Cours approfondi',
        summary: 'Ni onde seule, ni particule seule',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le débat sur la nature de la lumière a une longue histoire : à partir de 1670, Isaac Newton défend un faisceau de corpuscules quand Christiaan Huygens défend une onde. En 1803, l\'expérience des deux fentes de Thomas Young tranche en faveur de l\'onde ; en 1873, la théorie électromagnétique de Maxwell paraît achever le débat. Mais ce même modèle ondulatoire est incapable d\'expliquer le rayonnement du corps noir ou l\'effet photoélectrique, où la lumière se comporte comme un faisceau de photons (OpenStax, <em>University Physics</em> vol. 3, § 6.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La matière connaît la même situation, en miroir : l\'électron est une particule dans l\'effet photoélectrique, dans la diffusion Compton et dans les circuits électriques, et une onde quand il traverse un cristal. Le doute se lève en répétant l\'expérience des deux fentes de Young avec des électrons. Si l\'électron est une onde, des franges doivent apparaître, même quand il franchit les fentes un par un ; si c\'est une bille, aucune frange ne se forme. La réponse est expérimentale : Claus Jönsson obtient les premières franges avec un faisceau dès 1961, puis Giulio Pozzi (1974) et Akira Tonomura (1989) réalisent l\'expérience avec des électrons <em>uniques</em>, envoyés un par un. Chaque électron est détecté en un point, comme une particule, mais leur accumulation construit lentement une figure d\'interférence reproductible.</p>\n<div class="worked-result"><strong>EXEMPLE CHIFFRÉ</strong><span class="math">ΔV = 600 V → λ ≈ 0,050 nm</span><span class="math">d = 272 nm → sin θ = λ/d ≈ 1,8 × 10⁻⁴</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans l\'expérience d\'interférence à deux fentes avec des électrons, une membrane de silicium métallisée porte deux fentes de 62 nm de large et 4 µm de long, séparées de d = 272 nm ; le faisceau est produit par un canon à électrons chauffant un filament de tungstène, accéléré sous 600 V. La relation de de Broglie donne alors λ = 1,226/√600 ≈ 0,050 nm, et la condition des franges brillantes <span class="math">d sin θ = nλ</span> place la frange d\'ordre 1 à θ ≈ 1,8 × 10⁻⁴ rad, soit environ un centième de degré.</p>\n<div class="callout"><strong>Ce que la dualité change pour la technologie</strong><p>Les ondes de matière ont des longueurs d\'onde bien plus courtes que la lumière visible, ce qui autorise une résolution inaccessible à l\'optique. Ernst Ruska construit en 1931 le premier prototype de microscope électronique en transmission, en remplaçant les lentilles de verre par des champs magnétiques : les modèles modernes atteignent une résolution meilleure que 0,05 nm, soit un demi-angström, avec des grandissements supérieurs à 50 millions, quand la meilleure microscopie optique plafonne à l\'ordre du dixième de micromètre. C\'est le pouvoir séparateur, et non la nature des particules, qui fixe la finesse d\'observation.</p></div>'
        }
      },
      {
        id: 'quant-fonction-onde',
        title: 'La fonction d’onde',
        field: 'Cours approfondi',
        summary: 'Ce qui « onde » dans la mécanique quantique',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une onde de matière est décrite par une <strong>fonction d\'onde</strong> <span class="math">Ψ(x, t)</span> : une fonction de la position et du temps dont dépend toute la physique de la particule. Mais que représente-t-elle ? La réponse vient d\'une analogie avec la lumière. Dans une expérience d\'interférence, l\'éclairement en un point est proportionnel à <span class="math">|E|²</span>, le carré de l\'amplitude du champ électrique ; or, sous très faible intensité, l\'écran ne reçoit que des impacts isolés de photons, et c\'est la <em>densité</em> de ces impacts qui reproduit la figure d\'interférence. L\'énergie d\'un photon ne dépendant que de sa fréquence, |E|² est donc proportionnel au nombre de photons, c\'est-à-dire à la probabilité qu\'un photon arrive là (OpenStax, <em>University Physics</em> vol. 3, § 7.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour la matière, le même rôle est tenu par <span class="math">|Ψ(x, t)|²</span> : c\'est une <strong>densité de probabilité</strong>, et cette lecture probabiliste s\'appelle l\'<strong>interprétation de Born</strong>. La fonction d\'onde n\'est pas une quantité mesurable comme un déplacement de corde : elle n\'a pas de sens physique direct, mais son module au carré donne la probabilité de trouver la particule à l\'endroit considéré, à l\'instant considéré. Une probabilité étant positive ou nulle, le carré règle aussi le signe.</p>\n<div class="formula-block"><span class="formula-label">PROBABILITÉ ET NORMALISATION</span><math class="mathml-display" display="block" aria-label="Probabilité de trouver la particule dans un intervalle égale à l\'intégrale du module de psi au carré sur cet intervalle, et condition de normalisation égale à un sur tout l\'axe"><mtable><mtr><mtd><mrow><mi>P</mi><mo>(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>x</mi><mo>)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>x</mi></mrow></msubsup><msup><mrow><mo>|</mo><mi mathvariant="normal">Ψ</mi><mo>(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>)</mo><mo>|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi></mrow></mtd></mtr><mtr><mtd><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mo>∞</mo></mrow><mrow><mo>+</mo><mo>∞</mo></mrow></msubsup><msup><mrow><mo>|</mo><mi mathvariant="normal">Ψ</mi><mo>(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>)</mo><mo>|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> Ψ(x, t) : fonction d\'onde, en général à valeurs complexes ; sa dimension dépend du nombre de dimensions d\'espace — en une dimension, |Ψ|² s\'exprime en m⁻¹ ; P : probabilité, sans unité, obtenue comme une aire sous la courbe de |Ψ|². Quand la fonction d\'onde ne varie pas assez lentement pour être approchée par un produit, on passe par l\'intégrale ; en deux dimensions on intègre sur une surface, en trois sur un volume. La <strong>condition de normalisation</strong> traduit simplement que la particule se trouve quelque part : la probabilité totale vaut 1.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Exemple guidé :</strong> une bille contrainte de rester dans un tube de longueur L, également probable partout à un instant donné, s\'écrit <span class="math">Ψ(x, t) = C</span> sur l\'intervalle et 0 ailleurs. La normalisation impose <span class="math">|C|²L = 1</span>, donc C = 1/√L. La probabilité de la trouver dans la moitié gauche du tube vaut alors <span class="math">P = |C|² × (L/2) = 1/2</span>, soit 50 % : la mécanique quantique retrouve l\'intuition, mais par le calcul d\'une intégrale. Quand la particule est dans un état stationnaire, |Ψ|² ne dépend plus du temps, et la densité de probabilité devient elle aussi constante : c\'est le cas des états d\'énergie définie que nous allons construire.</p>'
        }
      },
      {
        id: 'quant-incertitude',
        title: 'Le principe d’incertitude',
        field: 'Cours approfondi',
        summary: 'Ce que la nature interdit de savoir en même temps',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une onde parfaitement sinusoïdale a une longueur d\'onde unique, donc une quantité de mouvement parfaitement définie, mais elle est délocalisée sur tout l\'espace. Pour localiser une particule, il faut superposer des ondes de longueurs d\'onde voisines : ce <em>paquet d\'ondes</em> a une largeur spatiale Δx et une dispersion en longueur d\'onde Δλ, donc en quantité de mouvement Δp. Les deux largeurs sont liées : plus le paquet est étroit dans l\'espace, plus il est large en impulsion. C\'est le contenu du <strong>principe d\'incertitude</strong> de Heisenberg (1927), que la formalisation quantique écrit ainsi (OpenStax, <em>University Physics</em> vol. 3, § 7.2).</p>\n<div class="formula-block"><span class="formula-label">RELATIONS D\'INCERTITUDE DE HEISENBERG</span><math class="mathml-display" display="block" aria-label="Produit de l\'incertitude de position par l\'incertitude de quantité de mouvement supérieur ou égal à h barre sur deux, et produit de l\'incertitude d\'énergie par l\'incertitude de temps supérieur ou égal à h barre sur deux"><mtable><mtr><mtd><mrow><mrow><mi mathvariant="normal">Δ</mi><mi>x</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mo>≥</mo><mfrac><mi>ℏ</mi><mn>2</mn></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mi mathvariant="normal">Δ</mi><mi>E</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow><mo>≥</mo><mfrac><mi>ℏ</mi><mn>2</mn></mfrac></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> Δx : incertitude sur la position (m) ; Δp : incertitude sur la quantité de mouvement (kg·m·s⁻¹) ; ΔE : incertitude sur l\'énergie (J ou eV) ; Δt : durée de la mesure ou durée de vie de l\'état (s) ; <span class="math">ħ = h/2π = 1,055 × 10⁻³⁴ J·s</span>. La valeur exacte du produit dépend de la forme de la fonction d\'onde : une gaussienne réalise le minimum ħ/2, tous les autres paquets donnent davantage.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ce n\'est pas une limite d\'appareillage mais une propriété de la nature : même avec des instruments parfaits, les incertitudes subsistent parce qu\'elles viennent du caractère ondulatoire de la matière. <strong>Exemple chiffré :</strong> on mesure la vitesse d\'un électron avec une incertitude Δu = 1,0 × 10⁻³ m·s⁻¹. Alors Δp = mΔu = 9,1 × 10⁻³⁴ kg·m·s⁻¹, et la relation inverse donne Δx = ħ/(2Δp) ≈ 6 cm : connaître la vitesse de l\'électron à un millimètre par seconde près interdit de savoir où il se trouve à mieux de quelques centimètres. Pour une poussière d\'un gramme, la même incertitude de vitesse rend Δx négligeable : voilà pourquoi la mécanique classique suffit pour les objets massifs.</p>\n<div class="callout callout-coral"><strong>Trois conséquences à retenir</strong><p><strong>1. Pas de repos absolu.</strong> Une particule confinée dans une petite région Δx possède au minimum une quantité de mouvement de l\'ordre de ħ/(2Δx), donc une énergie cinétique non nulle : c\'est l\'énergie de point zéro, que nous retrouverons pour le puits de potentiel et pour l\'oscillateur. <strong>2. Pas d\'atome effondré.</strong> Si l\'électron tombait sur le noyau, Δx deviendrait minuscule, donc son impulsion et son énergie deviendraient énormes : l\'atome est stable parce que le confinement coûte de l\'énergie. <strong>3. Des raies jamais infiniment fines.</strong> Un état excité de durée de vie Δt a une énergie définie à ΔE = ħ/(2Δt) près, ce qui élargit naturellement la raie d\'émission.</p></div>'
        }
      },
      {
        id: 'quant-schrodinger',
        title: 'L’équation de Schrödinger',
        field: 'Cours approfondi',
        summary: 'L\'équation qui gouverne les ondes de matière',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Savoir qu\'une onde de matière existe ne suffit pas : il faut une équation pour la faire évoluer et pour prédire ses formes possibles. En 1926, Erwin Schrödinger propose une équation d\'onde dont les solutions sont les fonctions d\'onde elles-mêmes. Dans un potentiel U(x), la forme la plus générale — dite <strong>équation de Schrödinger dépendante du temps</strong> — fait intervenir la dérivée première par rapport au temps et la dérivée seconde par rapport à l\'espace, avec le nombre imaginaire i. Les solutions qui décrivent des états d\'énergie définie se cherchent en séparant les variables : on écrit la fonction d\'onde comme un produit d\'une partie spatiale et d\'un facteur de modulation temporelle, ce qui conduit à une équation purement spatiale (OpenStax, <em>University Physics</em> vol. 3, § 7.3).</p>\n<div class="formula-block"><span class="formula-label">ÉQUATION DE SCHRÖDINGER STATIONNAIRE</span><math class="mathml-display" display="block" aria-label="Moins h barre carré sur deux m fois la dérivée seconde de psi par rapport à x, plus U de x fois psi, égale E fois psi"><mrow><mo>−</mo><mfrac><msup><mi>ℏ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>U</mi><mo>(</mo><mi>x</mi><mo>)</mo><mi>ψ</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>E</mi><mi>ψ</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> ψ(x) : fonction d\'onde indépendante du temps, appelée « petit psi » (pour la distinguer du « grand psi » Ψ(x, t) qui dépend du temps) ; m : masse de la particule (kg) ; U(x) : énergie potentielle (J) ; E : énergie totale de la particule, un nombre réel (J) ; <span class="math">ħ = 1,055 × 10⁻³⁴ J·s</span>. Résoudre l\'équation, c\'est trouver les fonctions ψ et les valeurs de E pour lesquelles l\'égalité est vraie : ce sont les <strong>états stationnaires</strong> et leurs <strong>niveaux d\'énergie</strong>. La densité de probabilité associée s\'obtient par |ψ(x)|², et pour retrouver la fonction d\'onde complète il faut multiplier ψ(x) par le facteur de modulation temporelle.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L\'équation n\'est pas démontrée à partir d\'un principe plus fondamental : elle se <em>postule</em>, comme les lois de Newton, et sa légitimité vient de ce qu\'elle prédit correctement une immense variété de résultats — spectres atomiques, liaisons chimiques, conduction dans les solides, transitions nucléaires. Deux de ses propriétés méritent d\'être soulignées : la présence de l\'énergie potentielle U(x) y fait entrer la situation physique concrète, et l\'exigence que ψ reste finie, continue et normalisable y impose des conditions aux limites. C\'est précisément de ces conditions aux limites que sortiront les quantifications — sans postulat supplémentaire.</p>\n<div class="callout"><strong>Trois cas d\'école à résoudre</strong><p>Pour comprendre la mécanique quantique, il suffit de traiter trois potentiels, puis un quatrième pour l\'effet tunnel : le <strong>puits de potentiel infini</strong>, où l\'énergie est quantifiée en niveaux qui s\'espacent quand n grandit (section 10) ; l\'<strong>oscillateur harmonique</strong>, qui modélise toute vibration autour d\'un équilibre et donne des niveaux régulièrement espacés (section 11) ; et la <strong>barrière de potentiel</strong>, qui fait apparaître un phénomène impossible en mécanique classique, la traversée d\'un mur d\'énergie (section 12).</p></div>'
        }
      },
      {
        id: 'quant-puits',
        title: 'La particule dans un puits',
        field: 'Cours approfondi',
        summary: 'La quantification sort des conditions aux limites',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Cas le plus simple que l\'on sache résoudre exactement : une particule enfermée entre deux murs infranchissables, distants de L. Dans la région 0 < x < L, l\'énergie potentielle est nulle ; à l\'extérieur, elle est infinie, ce qui impose à la fonction d\'onde de s\'annuler aux parois : <span class="math">ψ(0) = ψ(L) = 0</span>. En cherchant la forme de ψ qui satisfait l\'équation de Schrödinger et ces deux conditions, on ne trouve des solutions acceptables que pour une suite discrète de longueurs d\'onde — celles dont un nombre entier de demi-longueurs d\'onde remplit exactement la largeur du puits. L\'énergie ne peut donc pas prendre n\'importe quelle valeur : elle est <strong>quantifiée</strong> (OpenStax, <em>University Physics</em> vol. 3, § 7.4).</p>\n<div class="formula-block"><span class="formula-label">ÉTATS D\'UN PUITS INFINI</span><math class="mathml-display" display="block" aria-label="Fonction d\'onde égale à racine de deux sur L fois sinus de n pi x sur L, et énergie égale n carré pi carré h barre carré sur deux m L carré"><mtable><mtr><mtd><mrow><msub><mi>ψ</mi><mi>n</mi></msub><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mi>sin</mi><mrow><mo>(</mo><mfrac><mi>n</mi><mi>π</mi><mi>x</mi></mfrac><mo>)</mo></mrow><mo>,</mo><mspace width="1em"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mo>…</mo></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><mfrac><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ℏ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> ψ<sub>n</sub> : fonction d\'onde du niveau n ; L : largeur du puits (m) ; m : masse de la particule (kg) ; E<sub>n</sub> : énergie du niveau n (J ou eV) ; n : nombre quantique principal du puits, entier strictement positif. Le facteur √(2/L) vient de la normalisation : la probabilité totale de trouver la particule dans le puits vaut 1. Les deux écritures de E<sub>n</sub> sont équivalentes puisque ħ = h/2π.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Structure des premiers états d\'un puits infini (OpenStax, University Physics vol. 3, § 7.4)</caption>\n<thead><tr><th scope="col">État</th><th scope="col">Énergie</th><th scope="col">Allure de ψ</th><th scope="col">Densité de probabilité</th></tr></thead>\n<tbody>\n<tr><th scope="row">n = 1 (fondamental)</th><td>E₁ = π²ħ²/(2mL²) &gt; 0</td><td>Aucun nœud, un ventre</td><td>Un maximum central</td></tr>\n<tr><th scope="row">n = 2</th><td>4 E₁</td><td>Un nœud au centre</td><td>Deux lobes symétriques</td></tr>\n<tr><th scope="row">n = 3</th><td>9 E₁</td><td>Deux nœuds</td><td>Trois lobes</td></tr>\n<tr><th scope="row">Écart n → n + 1</th><td>ΔE = (2n + 1) E₁</td><td>—</td><td>Les niveaux s\'espacent</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lecture : les niveaux ne sont pas régulièrement espacés — l\'écart croît comme 2n + 1 — contrairement à l\'oscillateur harmonique (section 11). Les nœuds de ψ sont les points où la probabilité de trouver la particule est nulle : un comportement sans équivalent classique pour une bille qui rebondirait entre deux murs.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Ordres de grandeur :</strong> pour un électron enfermé dans L = 1 nm, <span class="math">E₁ = h²/(8mL²) ≈ 0,38 eV</span> ; en resserrant le puits à L = 0,1 nm — l\'échelle d\'un atome — on obtient E₁ ≈ 38 eV. Les énergies accessibles sont donc de l\'ordre de l\'électronvolt aux échelles atomiques, ce qui se traduit par des photons visibles ou ultraviolets lors des transitions, alors que pour un objet macroscopique dans un puits d\'un mètre, les écarts entre niveaux sont si minuscules que le spectre paraît continu.</p>'
        }
      },
      {
        id: 'quant-oscillateur',
        title: 'L’oscillateur harmonique',
        field: 'Cours approfondi',
        summary: 'Des niveaux régulièrement espacés',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Tout système ramené vers une position d\'équilibre par une force proportionnelle à son écart oscille : masse sur un ressort, atome dans un solide, liaison chimique entre deux noyaux, balancement d\'une branche ou d\'un balancier. En physique classique, l\'énergie potentielle s\'écrit <span class="math">U(x) = ½mω²x²</span> avec <span class="math">ω = √(k/m)</span>, la pulsation propre du ressort de raideur k, et l\'énergie totale vaut ½kA² pour une amplitude A. En mécanique quantique, le même potentiel conduit à une suite de niveaux également espacés, dont le plus bas n\'est pas nul (OpenStax, <em>University Physics</em> vol. 3, § 7.5).</p>\n<div class="formula-block"><span class="formula-label">NIVEAUX DE L\'OSCILLATEUR QUANTIQUE</span><math class="mathml-display" display="block" aria-label="Énergie du niveau n égale n plus un demi fois h barre oméga, et écart entre niveaux voisins égal à h barre oméga, soit h f"><mtable><mtr><mtd><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mi>ℏ</mi><mi>ω</mi><mo>,</mo><mspace width="1em"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mo>…</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">Δ</mi><mi>E</mi><mo>=</mo><mi>ℏ</mi><mi>ω</mi><mo>=</mo><mi>h</mi><mi>f</mi></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E<sub>n</sub> : énergie du niveau n (J ou eV) ; ω : pulsation propre de l\'oscillateur (rad·s⁻¹), reliée à la fréquence par ω = 2πf ; ħ : constante de Planck réduite ; n : nombre quantique de vibration, entier positif ou nul. <strong>Deux conséquences majeures :</strong> les niveaux sont <em>équidistants</em>, contrairement à ceux du puits infini, et l\'état de plus basse énergie n\'est pas zéro mais <span class="math">E₀ = ½ħω</span> ; cet écart avec la mécanique classique est l\'<strong>énergie de point zéro</strong>, le plus petit quantum d\'énergie qu\'un oscillateur puisse échanger. Cela rejoint exactement l\'hypothèse de Planck pour les parois de la cavité du corps noir : la matière échange l\'énergie par multiples de hf.</p>\n<div class="worked-result"><strong>EXEMPLE · MOLÉCULE HCl</strong><span class="math">f = 8,88 × 10¹³ Hz</span><span class="math">ΔE = hf ≈ 0,37 eV</span><span class="math">k = mω² ≈ 5,2 × 10² N·m⁻¹</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La molécule de chlorure d\'hydrogène est un oscillateur modèle : l\'atome de chlore, 35 fois plus lourd que celui d\'hydrogène, peut être considéré comme immobile, et l\'hydrogène oscille sous l\'effet d\'une force élastique. Sa raie de vibration la plus basse se situe à f = 8,88 × 10¹³ Hz, dans l\'infrarouge. L\'écart entre deux niveaux vibratoires voisins vaut alors ΔE = hf ≈ 0,37 eV, et en identifiant ω = 2πf avec la pulsation propre du modèle, la raideur de la liaison se déduit par k = mω² ≈ 520 N·m⁻¹ : la « liaison chimique » se comporte comme un ressort extrêmement raide à l\'échelle atomique. Cette quantification explique pourquoi les spectres infrarouges des molécules sont formés de bandes caractéristiques, utilisées pour identifier des espèces chimiques à distance, jusque dans l\'atmosphère des exoplanètes.</p>\n<div class="callout callout-coral"><strong>L\'énergie de point zéro, une réalité mesurable</strong><p>Un oscillateur quantique ne peut jamais s\'arrêter : son énergie minimale est ½ħω, même au zéro absolu. Cette énergie de mouvement résiduelle a des effets observables, comme le fait que l\'hélium reste liquide à la pression atmosphérique même à très basse température : les atomes, trop légers et jamais immobiles, ne se figent pas en cristal. C\'est aussi l\'un des arguments classiques contre l\'image d\'un électron « posé » sur le noyau.</p></div>'
        }
      },
      {
        id: 'quant-tunnel',
        title: 'L’effet tunnel',
        field: 'Cours approfondi',
        summary: 'Traverser un mur d\'énergie',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Première situation vraiment impossible en physique classique : une barrière de potentiel de hauteur U₀ et de largeur L, franchie par une particule dont l\'énergie E est inférieure à U₀. Une bille arrivant sur une colline trop haute pour elle redescend : sa probabilité de passer est nulle. L\'onde de matière, elle, ne s\'annule pas brutalement à l\'entrée de la barrière : dans la région intermédiaire, la solution de l\'équation de Schrödinger contient une exponentielle décroissante <span class="math">e^(−βx)</span>, avec <span class="math">β² = 2m(U₀ − E)/ħ²</span>. La fonction d\'onde diminue très vite, mais elle reste différente de zéro à la sortie : il existe donc une probabilité non nulle de retrouver la particule de l\'autre côté, sans qu\'elle ait jamais eu l\'énergie de franchir la barrière (OpenStax, <em>University Physics</em> vol. 3, § 7.6).</p>\n<div class="formula-block"><span class="formula-label">COEFFICIENT DE TRANSMISSION</span><math class="mathml-display" display="block" aria-label="Coefficient de transmission égal à seize fois E sur U zéro fois un moins E sur U zéro, multiplié par l\'exponentielle de moins deux bêta L, avec bêta carré égal à deux m fois U zéro moins E sur h barre carré"><mrow><mi>T</mi><mrow><mo>(</mo><mi>L</mi><mo>,</mo><mi>E</mi><mo>)</mo></mrow><mo>=</mo><mn>16</mn><mfrac><mi>E</mi><msub><mi>U</mi><mn>0</mn></msub></mfrac><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>U</mi><mn>0</mn></msub></mfrac><mo>)</mo></mrow><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>β</mi><mi>L</mi></mrow></msup><mo>,</mo><mspace width="0.8em"></mspace><msup><mi>β</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>ℏ</mi><mn>2</mn></msup></mfrac><mrow><mo>(</mo><msub><mi>U</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo>)</mo></mrow></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> T : probabilité de traverser la barrière (sans unité, souvent notée T(L, E)) ; L : largeur de la barrière (m) ; E : énergie de la particule (J ou eV) ; U₀ : hauteur de la barrière (J ou eV) ; β : coefficient d\'atténuation (m⁻¹) ; m : masse de la particule (kg). Cette expression approchée vaut pour une barrière large et haute, qui transmet peu. <strong>Le point crucial est l\'exponentielle :</strong> la probabilité dépend de façon <em>exponentielle</em> de la largeur L et de la racine carrée de l\'écart d\'énergie. Doubler la largeur ne divise pas la probabilité par deux, elle la divise par e^(2βL) — un facteur qui peut atteindre des dizaines d\'ordres de grandeur.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Effet tunnel à travers une barrière de 10,0 eV (OpenStax, University Physics vol. 3, exemple 7.12)</caption>\n<thead><tr><th scope="col">Énergie de l\'électron</th><th scope="col">Largeur de la barrière</th><th scope="col">Coefficient β</th><th scope="col">Probabilité T</th></tr></thead>\n<tbody>\n<tr><th scope="row">7,00 eV</th><td>5,00 nm</td><td>8,875 nm⁻¹</td><td>≈ 2,1 × 10⁻³⁸</td></tr>\n<tr><th scope="row">7,00 eV</th><td>1,00 nm</td><td>8,875 nm⁻¹</td><td>≈ 1,7 × 10⁻⁶</td></tr>\n<tr><th scope="row">9,00 eV</th><td>5,00 nm</td><td>5,124 nm⁻¹</td><td>≈ 8,4 × 10⁻²⁷</td></tr>\n<tr><th scope="row">9,00 eV</th><td>1,00 nm</td><td>5,124 nm⁻¹</td><td>≈ 5,1 × 10⁻⁹</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lecture : diviser la largeur de la barrière par cinq, de 5 nm à 1 nm, fait passer la probabilité de 10⁻³⁸ à 10⁻⁶ pour un électron de 7 eV — une multiplication par 10³². De même, gagner 2 eV d\'énergie multiplie la traversée par près de 10¹². Ce modèle décrit une couche d\'oxyde isolante d\'un nanomètre prise entre deux nanofils de cuivre.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Où l\'effet tunnel se manifeste :</strong> la radioactivité alpha s\'explique par cette traversée, car le noyau présente une barrière coulombienne dont la largeur vaut <span class="math">L = e²Z/(4πε₀E) − R</span> ; plus la particule alpha est énergétique, plus la barrière est étroite et plus la demi-vie du noyau est courte. Les réactions de fusion au cœur du Soleil, la diode tunnel, la mémoire flash et le <strong>microscope à effet tunnel</strong> reposent sur le même mécanisme : dans ce dernier, le courant d\'électrons qui traversent le vide entre la pointe et la surface varie exponentiellement avec la distance, ce qui permet de cartographier des reliefs atome par atome.</p>'
        }
      },
      {
        id: 'quant-nombres-quantiques',
        title: 'Les nombres quantiques',
        field: 'Cours approfondi',
        summary: 'Ce que l\'atome d\'hydrogène révèle',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Résoudre l\'équation de Schrödinger en trois dimensions pour l\'électron d\'un atome d\'hydrogène — un potentiel coulombien <span class="math">U(r) = −e²/(4πε₀r)</span> — produit une fonction d\'onde qui n\'est acceptable, c\'est-à-dire finie, continue et normalisable, que pour certaines valeurs de trois entiers : les <strong>nombres quantiques</strong>. Le nombre quantique principal <span class="math">n</span> fixe l\'énergie, le nombre quantique de moment cinétique orbital <span class="math">l</span> la norme du moment cinétique, et le nombre quantique magnétique <span class="math">m</span> sa projection sur un axe (OpenStax, <em>University Physics</em> vol. 3, § 8.1).</p>\n<div class="formula-block"><span class="formula-label">ÉNERGIE, MOMENT CINÉTIQUE ET ORIENTATION</span><math class="mathml-display" display="block" aria-label="Énergie égale moins E zéro sur n carré, norme du moment cinétique égale racine de l l plus un fois h barre, projection égale m h barre, et cosinus thêta égal m sur racine de l l plus un"><mtable><mtr><mtd><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width="1em"></mspace><mi>L</mi><mo>=</mo><msqrt><mi>l</mi><mrow><mo>(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></msqrt><mi>ℏ</mi></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><mi>ℏ</mi><mo>,</mo><mspace width="1em"></mspace><mi>cos</mi><mi>θ</mi><mo>=</mo><mfrac><mi>m</mi><msqrt><mi>l</mi><mrow><mo>(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></msqrt></mfrac></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E<sub>n</sub> : énergie du niveau (eV), avec E₀ = 13,6 eV ; L : norme du moment cinétique orbital (J·s) ; L<sub>z</sub> : composante de L selon l\'axe z ; θ : angle entre le vecteur L et l\'axe z (appelé <em>axe de quantification</em>, choisi par l\'expérimentateur). <strong>Valeurs permises :</strong> n = 1, 2, 3, … ; l = 0, 1, 2, …, n − 1 ; m = −l, −l + 1, …, 0, …, +l. L\'état fondamental de l\'hydrogène est donc n = 1, l = 0, m = 0.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux différences avec Bohr méritent l\'attention. D\'abord, la norme du moment cinétique est <span class="math">√(l(l+1))ħ</span> et non <span class="math">nħ</span> : l\'électron n\'est jamais tout à fait « dans » un plan, puisque L ne peut pas être confondu avec sa projection L<sub>z</sub>. Ensuite, l\'orientation est quantifiée : pour l = 1, les trois valeurs m = −1, 0, +1 donnent trois angles définis, 135°, 90° et 45° — le vecteur L ne peut pas prendre n\'importe quelle direction, il décrit un cône dont l\'axe est fixé par l\'expérience. Cette <strong>quantification spatiale</strong> est directement observable dans l\'expérience de Stern-Gerlach et dans l\'effet Zeeman.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Dénombrement des états de l\'atome d\'hydrogène (OpenStax, University Physics vol. 3, § 8.1 et 8.4)</caption>\n<thead><tr><th scope="col">Couche n</th><th scope="col">Sous-couches l</th><th scope="col">Notation</th><th scope="col">États (l, m) sans le spin</th><th scope="col">Électrons au maximum (avec le spin)</th></tr></thead>\n<tbody>\n<tr><th scope="row">n = 1</th><td>l = 0</td><td>1s</td><td>1</td><td>2</td></tr>\n<tr><th scope="row">n = 2</th><td>l = 0 et 1</td><td>2s, 2p</td><td>1 + 3 = 4</td><td>8</td></tr>\n<tr><th scope="row">n = 3</th><td>l = 0, 1 et 2</td><td>3s, 3p, 3d</td><td>1 + 3 + 5 = 9</td><td>18</td></tr>\n<tr><th scope="row">n quelconque</th><td>l = 0 … n − 1</td><td>s, p, d, f, …</td><td>n²</td><td>2n²</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lecture : la notation spectroscopique associe une lettre à chaque valeur de l — s pour l = 0, p pour l = 1, d pour l = 2, f pour l = 3, puis g, h, … dans l\'ordre alphabétique. Le chiffre placé devant la lettre est la valeur de n : « 3d » désigne l\'état n = 3, l = 2. Tous ces états d\'une même couche ont la même énergie dans l\'hydrogène ; la dernière colonne annonce déjà le principe d\'exclusion (section 15), qui limite à deux électrons chaque état (l, m) en raison du spin.</p>'
        }
      },
      {
        id: 'quant-spin',
        title: 'Le spin de l’électron',
        field: 'Cours approfondi',
        summary: 'Un moment cinétique sans mouvement',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un électron qui tourne autour du noyau se comporte comme une boucle de courant, donc comme un minuscule aimant : le moment magnétique d\'une spire s\'écrit <span class="math">μ = IA</span>, produit du courant par l\'aire de la boucle. Pour l\'électron en orbite circulaire de rayon r et de vitesse v, ce calcul donne <span class="math">μ⃗ = −(e/2m<sub>e</sub>)L⃗</span> : le moment magnétique est <strong>antiparallèle</strong> au moment cinétique orbital, le signe négatif venant de la charge négative de l\'électron. La plus petite valeur possible de ce moment magnétique définit l\'unité naturelle du magnétisme atomique, le <strong>magneton de Bohr</strong> (OpenStax, <em>University Physics</em> vol. 3, § 8.2).</p>\n<div class="formula-block"><span class="formula-label">MAGNÉTON DE BOHR ET MOMENTS QUANTIQUES</span><math class="mathml-display" display="block" aria-label="Magnéton de Bohr égal e h barre sur deux m e, norme du moment magnétique égale magnéton de Bohr fois racine de l l plus un, et norme du spin égale racine de s s plus un fois h barre"><mtable><mtr><mtd><mrow><msub><mi>μ</mi><mi>B</mi></msub><mo>=</mo><mfrac><mrow><mi>e</mi><mi>ℏ</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><mo>=</mo><mn>9.274</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>24</mn></mrow></msup><mspace width="0.3em"></mspace><mtext>J/T</mtext></mrow></mtd></mtr><mtr><mtd><mrow><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mi>B</mi></msub><msqrt><mi>l</mi><mrow><mo>(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></msqrt><mo>,</mo><mspace width="1em"></mspace><mi>S</mi><mo>=</mo><msqrt><mi>s</mi><mrow><mo>(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></msqrt><mi>ℏ</mi><mo>,</mo><mspace width="1em"></mspace><msub><mi>S</mi><mi>z</mi></msub><mo>=</mo><msub><mi>m</mi><mi>s</mi></msub><mi>ℏ</mi></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> μ<sub>B</sub> : magneton de Bohr = 9,274 × 10⁻²⁴ J·T⁻¹, soit 5,788 × 10⁻⁵ eV·T⁻¹ (OpenStax arrondit à 9,3 × 10⁻²⁴ J·T⁻¹ et 5,8 × 10⁻⁵ eV·T⁻¹) ; μ : norme du moment magnétique orbital ; l : nombre quantique orbital ; S : norme du moment cinétique de spin ; s : nombre quantique de spin, qui vaut 1/2 pour l\'électron ; m<sub>s</sub> : nombre quantique magnétique de spin, égal à ±1/2. Dans un champ magnétique B, l\'énergie magnétique vaut <span class="math">U = −μ<sub>z</sub>B = m μ<sub>B</sub>B</span>, ce qui décale les niveaux : c\'est l\'effet Zeeman, c\'est-à-dire l\'éclatement des raies spectrales en plusieurs composantes quand on place la source dans un champ.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une énigme subsiste pourtant à l\'époque : des raies présentent une structure fine qui exige un degré de liberté supplémentaire, et l\'expérience de Stern-Gerlach, réalisée dès 1922 avec un jet d\'atomes d\'argent, donne la réponse. Contrairement à ce que prédirait une orientation continue, le jet se sépare en <em>deux</em> bandes distinctes. Deux seulement : le moment cinétique qui s\'oriente dans le champ ne peut prendre que deux projections opposées. Ce n\'est pas le moment orbital — les atomes d\'argent sont dans un état de moment orbital nul — mais un moment cinétique intrinsèque, le <strong>spin</strong>, que Samuel Goudsmit et George Uhlenbeck identifient en 1925 : l\'électron se comporte comme une boussole microscopique de moment cinétique <span class="math">S = √(3)/2 ħ ≈ 0,87 ħ</span> et de projection <span class="math">S<sub>z</sub> = ±ħ/2</span>.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux détails achèvent de convaincre que le spin n\'est pas un mouvement de rotation ordinaire. D\'abord, le rapport entre moment magnétique et moment cinétique de spin est deux fois plus grand que pour le mouvement orbital : la théorie relativiste de Dirac l\'explique exactement, et l\'écart au facteur 2 a été mesuré avec une précision spectaculaire en électrodynamique quantique. Ensuite, l\'interaction entre le moment magnétique de spin et le moment magnétique orbital, appelée <strong>couplage spin-orbite</strong>, lève la dégénérescence des niveaux de même n mais de l différents : c\'est elle qui dédouble les niveaux n = 2 en s et p et explique la structure fine du spectre de l\'hydrogène.</p>'
        }
      },
      {
        id: 'quant-exclusion',
        title: 'Le principe d’exclusion',
        field: 'Cours approfondi',
        summary: 'Pourquoi la matière occupe du volume',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Avec quatre nombres quantiques — n, l, m et m<sub>s</sub> — on sait décrire l\'état d\'un électron dans un atome. En 1925, Wolfgang Pauli énonce la règle qui organise tout le reste : <strong>deux électrons d\'un même atome ne peuvent pas avoir les mêmes valeurs pour les quatre nombres quantiques</strong>. Ce principe d\'exclusion n\'est pas une contrainte technique : c\'est une propriété des particules de spin demi-entier, appelées fermions, et elle décide de la structure des atomes, de la stabilité de la matière et du volume qu\'elle occupe (OpenStax, <em>University Physics</em> vol. 3, § 8.4).</p>\n<div class="formula-block"><span class="formula-label">CAPACITÉ D\'UNE SOUS-COUCHE ET D\'UNE COUCHE</span><math class="mathml-display" display="block" aria-label="Nombre maximal d\'électrons dans une sous-couche égal à deux fois deux l plus un, soit quatre l plus deux, et nombre maximal dans une couche égal à deux n carré"><mtable><mtr><mtd><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mrow><mo>(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mo>=</mo><mn>4</mn><mi>l</mi><mo>+</mo><mn>2</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>N</mi><mtext>couche</mtext></msub><mo>=</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> N : nombre maximal d\'électrons dans la sous-couche de nombre quantique orbital l ; n : nombre quantique principal de la couche. Le raisonnement est simple : pour un l donné il existe 2l + 1 valeurs de m, et chacune peut accueillir deux électrons de spins opposés, d\'où 2(2l + 1). Une sous-couche s contient donc 2 électrons, une sous-couche p en contient 6, une sous-couche d en contient 10, une sous-couche f en contient 14. En ajoutant les sous-couches d\'une couche, on retrouve 2n² électrons : 2, 8, 18, 32…</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Remplissage des premières sous-couches et structure du tableau périodique (OpenStax, University Physics vol. 3, § 8.4)</caption>\n<thead><tr><th scope="col">Sous-couche</th><th scope="col">l</th><th scope="col">Nombre d\'états (2l + 1)</th><th scope="col">Électrons au maximum</th></tr></thead>\n<tbody>\n<tr><th scope="row">s</th><td>0</td><td>1</td><td>2</td></tr>\n<tr><th scope="row">p</th><td>1</td><td>3</td><td>6</td></tr>\n<tr><th scope="row">d</th><td>2</td><td>5</td><td>10</td></tr>\n<tr><th scope="row">f</th><td>3</td><td>7</td><td>14</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Lecture : les longueurs des périodes du tableau périodique — 2, 8, 8, 18, 18, 32 — découlent directement de ces capacités et de l\'ordre de remplissage des sous-couches par énergie croissante. Dans une case quantique, on note ↑ un électron célibataire et ↑↓ une paire d\'électrons de spins opposés.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le principe explique aussi la chimie. Les gaz <strong>nobles</strong> — hélium, néon, argon, krypton, xénon — ont leurs couches remplies : leur configuration est stable, ce qui les rend chimiquement inertes. À l\'inverse, les <strong>halogènes</strong> n\'ont qu\'un électron manquant pour compléter une couche, ce qui les rend avides d\'électrons, et les <strong>métaux alcalins</strong> possèdent un électron de valence seul dans une sous-couche s, facilement cédé. Les <strong>électrons de valence</strong>, situés dans la couche la plus externe, sont les acteurs de toutes les liaisons chimiques ; c\'est leur arrangement, et non le détail des couches internes, qui fixe les propriétés chimiques d\'un élément.</p>'
        }
      },
      {
        id: 'quant-atomes',
        title: 'L’hydrogène et les atomes lourds',
        field: 'Cours approfondi',
        summary: 'De un à plusieurs électrons',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L\'atome d\'hydrogène est le seul qu\'on sache résoudre exactement, parce qu\'un électron unique n\'interagit qu\'avec le noyau. Dès qu\'il y a deux électrons, la répulsion coulombienne entre eux s\'ajoute au potentiel du noyau et l\'équation de Schrödinger en trois dimensions perd sa solution analytique. On procède alors par approximations successives : on traite chaque électron comme s\'il se déplaçait dans un potentiel moyen créé par le noyau et par les autres électrons, décrit par sa propre fonction d\'onde <span class="math">ψ<sub>nlm</sub></span>. Les nombres quantiques et la structure des couches survivent à cette complication : ce sont eux qui organisent le tableau périodique (OpenStax, <em>University Physics</em> vol. 3, §§ 8.1 et 8.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un cas intermédiaire se calcule assez bien : les <strong>ions hydrogénoïdes</strong>, comme He⁺ ou Li²⁺, qui ne conservent qu\'un seul électron face à un noyau de charge Ze. Il suffit de remplacer e² par Ze² dans l\'expression du potentiel coulombien pour multiplier toutes les énergies par Z² et diviser les rayons par Z : l\'électron est plus fortement lié et plus proche du noyau. Pour l\'ion He⁺ (Z = 2), par exemple, l\'énergie du niveau fondamental vaut 4 × 13,6 eV ≈ 54,4 eV : il faut donc deux fois plus d\'énergie que dans l\'hydrogène pour arracher l\'électron restant.</p>\n<div class="callout"><strong>Écrantage et ordre de remplissage</strong><p>Dans un atome lourd, les électrons internes <em>écrantent</em> une partie de la charge du noyau : l\'électron de valence ne « voit » qu\'une charge effective réduite, intermédiaire entre 1 et Z. Cet écrantage, combiné à la pénétration des orbitales près du noyau, casse la dégénérescence de l\'hydrogène : les niveaux se séparent en 1s, puis 2s et 2p, puis 3s, 3p et 3d, et leur ordre d\'énergie explique la séquence de remplissage 1s, 2s, 2p, 3s, 3p, 4s, 3d… C\'est ainsi que la chimie — et non seulement la physique atomique — se déduit de l\'équation de Schrödinger approchée.</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Cette structure se lit directement sur les diagrammes de niveaux d\'énergie. Dans l\'hydrogène, si l\'on néglige le spin, tous les états de même n ont la même énergie ; le couplage spin-orbite dédouble ensuite les états n = 2 en deux niveaux de moment cinétique (s et p) d\'énergies légèrement différentes, et sépare les états n = 3 en trois niveaux (s, p et d). Ces écarts restent faibles devant la distance entre couches, ce qui explique qu\'ils ne se voient que sur des spectres très fins. Pour un atome comme le sodium ou le mercure, dont un électron de valence se déplace dans un potentiel écranté, les niveaux diffèrent nettement de ceux de l\'hydrogène tout en restant du même ordre de grandeur — quelques électronvolts — puisque c\'est toujours un électron de valence qui effectue les transitions observées dans le visible.</p>'
        }
      },
      {
        id: 'quant-spectres',
        title: 'Spectres et rayons X',
        field: 'Cours approfondi',
        summary: 'Lire la matière par sa lumière',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La spectroscopie atomique est la principale source d\'information sur les atomes, des galaxies lointaines aux échantillons d\'un laboratoire d\'analyse. Son principe tient en une relation : si un électron passe d\'un niveau d\'énergie E<sub>i</sub> à un niveau E<sub>f</sub>, l\'atome émet ou absorbe un photon dont l\'énergie égale la différence, soit <span class="math">hf = hc/λ = |E<sub>i</sub> − E<sub>f</sub>|</span>. Avec <span class="math">hc ≈ 1 240 eV·nm</span>, on convertit sans effort une énergie de transition en longueur d\'onde : une transition de 3,0 eV correspond à λ ≈ 413 nm, et la transition n = 3 → n = 2 de l\'hydrogène (1,89 eV) donne la raie rouge à environ 656 nm (OpenStax, <em>University Physics</em> vol. 3, § 8.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Toutes les transitions ne sont pas permises. Pour un atome hydrogénoïde, l\'émission ou l\'absorption d\'un photon doit obéir à la <strong>règle de sélection</strong> <span class="math">Δl = ±1</span>. Les transitions qui la violent sont dites interdites : elles ne sont pas impossibles, mais tellement peu probables qu\'elles ne marquent pas les spectres usuels. Cette règle est ce qui permet de reconstituer un diagramme de niveaux à partir d\'un spectre observé, et inversement.</p>\n<div class="worked-result"><strong>EXEMPLE · DOUBLET DU SODIUM</strong><span class="math">λ₁ = 589,00 nm</span><span class="math">λ₂ = 589,59 nm</span><span class="math">ΔE ≈ 2,11 × 10⁻³ eV</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le sodium appartient à la même colonne du tableau périodique que l\'hydrogène : son électron de valence est « hydrogénoïde », et il occupe la sous-couche 3s (l = 0). Son spectre montre deux raies très proches, à 589,00 nm et 589,59 nm. Pour rejoindre le niveau 3s, l\'électron doit venir d\'un état vérifiant Δl = ±1 : les valeurs l = 2, 3, 4… sont exclues, donc l\'état de départ a l = 1, de moment cinétique L = √(1 × 2) ħ ≈ 1,41 ħ. L\'écart d\'énergie entre les deux photons vaut ΔE = hc(1/λ₁ − 1/λ₂) ≈ 2,11 × 10⁻³ eV, à comparer à l\'énergie moyenne des photons, 2,11 eV : le dédoublement représente environ un millième de l\'énergie de la transition. Un spectromètre sensible suffit à le voir, et c\'est la signature du couplage spin-orbite des deux niveaux de départ.</p>\n<div class="callout callout-coral"><strong>Fluorescence et rayons X</strong><p>Un électron peut être porté plusieurs marches au-dessus de l\'état fondamental par un photon ultraviolet, puis redescendre par étapes en émettant plusieurs photons de moindre énergie : c\'est la <strong>fluorescence</strong>, qui convertit de l\'ultraviolet invisible en lumière visible. Les colorants fluorescents des textiles ravivent ainsi les couleurs au soleil, et les lampes fluorescentes convertissent l\'énergie électrique en lumière visible environ quatre fois plus efficacement qu\'un filament incandescent. Les <strong>rayons X</strong> naissent d\'un tout autre processus : un électron de couche externe tombe sur une couche interne profonde en cédant un photon beaucoup plus énergétique. On nomme ces transitions par la couche d\'arrivée : la série K rassemble les transitions vers la couche K (n = 1), la raie K<sub>α</sub> correspondant à une chute depuis la couche L (n = 2) et la raie K<sub>β</sub> depuis la couche M (n = 3). Les niveaux internes étant très liés, ces photons ont des énergies de l\'ordre du keV, mille fois plus que la lumière visible. L\'hydrogène, dont l\'unique électron n\'est retenu que par 13,6 eV, ne peut pas produire de rayons X : il faut un atome lourd, avec des couches internes profondes.</p></div>'
        }
      },
      {
        id: 'quant-laser',
        title: 'Le laser',
        field: 'Cours approfondi',
        summary: 'De l\'émission stimulée à la lumière cohérente',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un laser est un dispositif qui émet une lumière à la fois <strong>cohérente</strong> — les photons qui la composent sont en phase — et <strong>monochromatique</strong> — ils possèdent une seule fréquence, donc une seule couleur. Trois éléments matériels le rendent possible : un <em>milieu amplificateur</em> (gaz, cristal, plasma ou colorant liquide), une <em>source d\'énergie</em> qui l\'excite, et un <em>dispositif de rétroaction optique</em>, le plus souvent deux miroirs (OpenStax, <em>University Physics</em> vol. 3, § 8.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le mécanisme repose sur une situation statistique inhabituelle. Quand le milieu absorbe de l\'énergie, les électrons montent vers des niveaux excités ; la plupart redescendent aussitôt vers l\'état fondamental, mais certains s\'attardent dans un <strong>état métastable</strong>. On peut ainsi installer une <strong>inversion de population</strong> : la majorité des atomes occupent un niveau excité au lieu de l\'état fondamental — configuration impossible à l\'équilibre thermique, et pourtant indispensable. Alors un photon incident d\'énergie <span class="math">hf = ΔE</span> peut provoquer la désexcitation d\'un atome excité en libérant un second photon identique au premier, de même énergie et même phase : c\'est l\'<strong>émission stimulée</strong>. Les deux photons rencontrent à leur tour d\'autres atomes métastables, et la désexcitation se propage en cascade. La lumière qui sort du dispositif est cohérente parce que tous ses photons proviennent de ce même processus, et monochromatique parce que tous les niveaux en jeu sont définis avec précision.</p>\n<div class="callout"><strong>Applications et longueurs d\'onde</strong><p>Les lasers servent aux télécommunications par fibre optique, aux spectacles, à la médecine (ablation de tumeurs, cautérisation de vaisseaux de la rétine), aux lecteurs de codes-barres et à la découpe industrielle. Le stockage numérique en offre un exemple parlant : sur un disque compact, la surface porte des creux et des bosses alignés le long d\'une piste en spirale, et le laser lit l\'information en distinguant la lumière réfléchie (un « 1 ») de la lumière détruite par interférence destructive dans un creux (un « 0 »). Comme la taille du spot focalisé diminue avec la longueur d\'onde, augmenter la capacité de stockage revient à raccourcir λ : les CD et les DVD utilisent une lumière rouge, tandis que le Blu-Ray emploie une lumière bleue à 405 nm, ce qui permet des creux plus de deux fois plus petits et donc davantage de données par disque. Pour les applications de très forte puissance, on ajoute un étage d\'amplification par impulsions étirées puis recompressées, technique dite <em>à dérive de fréquence</em>, qui atteint des intensités de l\'ordre du gigawatt par centimètre carré sans endommager le milieu amplificateur — des lasers désormais utilisés de la chirurgie oculaire à la recherche sur la fusion nucléaire.</p></div>'
        }
      },
      {
        id: 'quant-exercices',
        title: 'S’entraîner',
        field: 'Cours approfondi',
        summary: 'Exercices corrigés',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Huit exercices couvrant tout le cours, du rayonnement du corps noir à la structure atomique. Essaie de répondre avant d\'ouvrir la correction : le but est de manipuler les relations, pas de les relire.</p>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">A</span><span>La surface du Soleil est à environ 5 800 K. Vers quelle longueur d\'onde se situe son maximum d\'émission ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Loi de Wien : λ<sub>max</sub> = 2,898 × 10⁻³ / 5 800 ≈ 5,0 × 10⁻⁷ m, soit environ 500 nm. Le Soleil émet donc son maximum dans le vert-bleu, au cœur du domaine visible : nos yeux se sont adaptés à cette étoile.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">B</span><span>Une lumière de 400 nm éclaire une cathode de sodium (φ = 2,46 eV). Y a-t-il émission d\'électrons, et avec quelle énergie cinétique maximale ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Énergie du photon : E = 1 240 / 400 ≈ 3,10 eV, supérieure au travail d\'extraction, donc oui. K<sub>max</sub> = 3,10 − 2,46 ≈ 0,64 eV. La longueur d\'onde de seuil du sodium vaut 1 240 / 2,46 ≈ 504 nm : une lumière verte ou plus rouge ne produirait plus rien.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">C</span><span>Un photon X de 0,0500 nm est diffusé à 90°. Quelle est sa nouvelle longueur d\'onde et son énergie ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>À 90°, Δλ = λ<sub>c</sub> = 2,43 pm = 0,002 43 nm, donc λ′ = 0,052 43 nm. L\'énergie passe de 1 240 / 0,0500 ≈ 24,8 keV à 1 240 / 0,052 43 ≈ 23,7 keV : le photon cède environ 1 keV à l\'électron de recul.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">D</span><span>Quelle est la longueur d\'onde de la transition n = 4 → n = 2 de l\'hydrogène ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>ΔE = 13,6 × (1/2² − 1/4²) = 13,6 × 0,187 5 ≈ 2,55 eV, d\'où λ = 1 240 / 2,55 ≈ 486 nm : c\'est la raie bleu-vert de la série de Balmer.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">E</span><span>Quelle longueur d\'onde est associée à un électron accéléré sous 100 V ? Et à une balle de tennis de 57 g à 50 m·s⁻¹ ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Pour l\'électron : λ ≈ 1,226 / √100 ≈ 0,123 nm, soit une longueur d\'onde comparable aux distances atomiques d\'un cristal — d\'où la diffraction observée. Pour la balle : p = 0,057 × 50 = 2,85 kg·m·s⁻¹, donc λ = h/p ≈ 2,3 × 10⁻³⁴ m, indétectable ; aucune interférence n\'est observable.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">F</span><span>Un électron est enfermé dans un puits infiniment profond de 0,50 nm. Quelles sont les deux premières énergies et l\'écart entre elles ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Pour L = 1 nm, E₁ = h²/(8mL²) ≈ 0,38 eV ; en divisant L par deux, l\'énergie est multipliée par quatre : E₁ ≈ 1,50 eV et E₂ = 4E₁ ≈ 6,0 eV. L\'écart vaut ΔE = (2n + 1)E₁ = 3E₁ ≈ 4,5 eV, soit un photon d\'environ 275 nm, dans l\'ultraviolet.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">G</span><span>Que prédit le principe d\'incertitude pour un électron confiné dans un noyau de 10⁻¹⁴ m de diamètre ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Δp ≥ ħ/(2Δx) ≈ 1,055 × 10⁻³⁴ / (2 × 10⁻¹⁴) ≈ 5,3 × 10⁻²¹ kg·m·s⁻¹, d\'où une énergie cinétique K = p²/2m de l\'ordre de 10⁻¹¹ J, soit environ 100 MeV. Une telle énergie dépasse de loin les énergies de liaison nucléaire (quelques MeV) : un électron ne peut pas être une particule confinée dans le noyau. C\'est aussi la raison pour laquelle l\'atome ne s\'effondre pas sur son noyau.</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">H</span><span>Combien d\'électrons une sous-couche 3d peut-elle accueillir au maximum ? Et la couche n = 4 ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Pour 3d, l = 2, donc N = 2(2l + 1) = 2 × 5 = 10 électrons. Pour n = 4, la capacité de la couche vaut 2n² = 2 × 16 = 32 électrons, répartis en 4s (2), 4p (6), 4d (10) et 4f (14).</p></div>\n</details>'
        }
      },
      {
        id: 'quant-sources',
        title: 'Sources',
        field: 'Cours approfondi',
        summary: 'Sources scientifiques',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Tous les faits, valeurs numériques et exemples chiffrés de ce cours proviennent de sources ouvertes vérifiables. La référence principale est le manuel ouvert <em>University Physics Volume 3</em> (OpenStax, licence CC BY 4.0), chapitres 6 à 8 ; les constantes physiques sont celles de la liste CODATA 2022 du NIST et des définitions du Système international (BIPM). Les équations sont écrites en MathML natif : aucun moteur de rendu ni bibliothèque externe n\'est chargé par la page.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation" target="_blank" rel="noreferrer">OpenStax, University Physics vol. 3, § 6.1 Blackbody Radiation : loi de Wien (2,898 × 10⁻³ m·K), loi de Stefan (σ = 5,670 × 10⁻⁸), hypothèse des quanta de Planck</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect" target="_blank" rel="noreferrer">OpenStax, § 6.2 Photoelectric Effect : tension d\'arrêt, équation K<sub>max</sub> = hf − φ, fréquence de coupure, tableau 6.1 des travaux d\'extraction (Na, Al, Pb, Zn, Fe, Cu, Ag, Pt)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-3-the-compton-effect" target="_blank" rel="noreferrer">OpenStax, § 6.3 The Compton Effect : décalage Δλ = λ<sub>c</sub>(1 − cos θ), longueur d\'onde de Compton 0,002 43 nm = 2,43 pm</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-4-bohrs-model-of-the-hydrogen-atom" target="_blank" rel="noreferrer">OpenStax, § 6.4 Bohr\'s Model of the Hydrogen Atom : formule de Balmer et de Rydberg (R<sub>H</sub> = 1,097 37 × 10⁷ m⁻¹), quantification L = nħ, énergie E₀ = 13,6 eV, rayon de Bohr a₀ = 5,29 × 10⁻¹¹ m, ions hydrogénoïdes</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves" target="_blank" rel="noreferrer">OpenStax, § 6.5 De Broglie\'s Matter Waves : λ = h/p, énergie cinétique eΔV = p²/2m, expérience Davisson-Germer (a = 2,15 Å, 54 V, φ ≈ 50°, λ = 1,64 Å mesurée contre 1,67 Å calculée)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality" target="_blank" rel="noreferrer">OpenStax, § 6.6 Wave-Particle Duality : Newton et Huygens (1670), Young (1803), Maxwell (1873), Jönsson (1961), Pozzi (1974), Tonomura (1989), exemple 6.15 des deux fentes (d = 272 nm, 600 V), microscope électronique de Ruska (1931)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/7-1-wave-functions" target="_blank" rel="noreferrer">OpenStax, § 7.1 Wave Functions : interprétation de Born, densité de probabilité |Ψ|², condition de normalisation, exemple de la bille dans un tube</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/7-2-the-heisenberg-uncertainty-principle" target="_blank" rel="noreferrer">OpenStax, § 7.2 The Heisenberg Uncertainty Principle : ΔxΔp ≥ ħ/2 et ΔEΔt ≥ ħ/2, minimum atteint par une gaussienne, exemple numérique de l\'électron</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/7-3-the-schrodinger-equation" target="_blank" rel="noreferrer">OpenStax, § 7.3 The Schrödinger Equation : équation dépendante du temps, séparation des variables, équation stationnaire −(ħ²/2m)ψ″ + Uψ = Eψ</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/7-4-the-quantum-particle-in-a-box" target="_blank" rel="noreferrer">OpenStax, § 7.4 The Quantum Particle in a Box : ψ<sub>n</sub> = √(2/L) sin(nπx/L), E<sub>n</sub> = n²π²ħ²/(2mL²), écart ΔE = (2n + 1)E₁</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/7-5-the-quantum-harmonic-oscillator" target="_blank" rel="noreferrer">OpenStax, § 7.5 The Quantum Harmonic Oscillator : E<sub>n</sub> = (n + ½)ħω, niveaux équidistants ΔE = ħω = hf, exemple 7.11 de la molécule HCl (f = 8,88 × 10¹³ Hz)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/7-6-the-quantum-tunneling-of-particles-through-potential-barriers" target="_blank" rel="noreferrer">OpenStax, § 7.6 Quantum Tunneling through Potential Barriers : β² = 2m(U₀ − E)/ħ², T = 16(E/U₀)(1 − E/U₀)e^(−2βL), exemple 7.12 des nanofils de cuivre (U₀ = 10,0 eV), barrière coulombienne et radioactivité alpha, microscope à effet tunnel</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-1-the-hydrogen-atom" target="_blank" rel="noreferrer">OpenStax, § 8.1 The Hydrogen Atom : nombres quantiques n, l, m et leurs domaines, L = √(l(l+1))ħ, L<sub>z</sub> = mħ, notation spectroscopique (s, p, d, f), énergie −13,6 eV/n²</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-2-orbital-magnetic-dipole-moment-of-the-electron" target="_blank" rel="noreferrer">OpenStax, § 8.2 Orbital Magnetic Dipole Moment of the Electron : μ = IA, μ⃗ = −(e/2m<sub>e</sub>)L⃗, magneton de Bohr 9,3 × 10⁻²⁴ J/T (5,8 × 10⁻⁵ eV/T), quantification spatiale, énergie magnétique m μ<sub>B</sub>B</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-3-electron-spin" target="_blank" rel="noreferrer">OpenStax, § 8.3 Electron Spin : S = √(s(s+1))ħ avec s = 1/2, μ⃗ = (e/m<sub>e</sub>)S⃗ (facteur 2 relativiste), expérience de Stern-Gerlach sur les atomes d\'argent, couplage spin-orbite et structure fine</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-4-the-exclusion-principle-and-the-periodic-table" target="_blank" rel="noreferrer">OpenStax, § 8.4 The Exclusion Principle and the Periodic Table : principe de Pauli, capacité N = 2(2l + 1) = 4l + 2, couche 2n², tableaux 8.5 des états électroniques, gaz nobles et électrons de valence</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-5-atomic-spectra-and-x-rays" target="_blank" rel="noreferrer">OpenStax, § 8.5 Atomic Spectra and X-rays : hc = 1 240 eV·nm, règle de sélection Δl = ±1, doublet du sodium (589,00 et 589,59 nm, ΔE = 2,11 × 10⁻³ eV), fluorescence, séries K, K<sub>α</sub> et K<sub>β</sub> des rayons X</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-6-lasers" target="_blank" rel="noreferrer">OpenStax, § 8.6 Lasers : lumière cohérente et monochromatique, milieu amplificateur, état métastable, inversion de population, émission stimulée, disques CD, DVD et Blu-Ray (405 nm), amplification à dérive de fréquence</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://physics.nist.gov/cuu/Constants/" target="_blank" rel="noreferrer">NIST, CODATA Recommended Values of the Fundamental Physical Constants (ajustement 2022) : h = 6,626 070 15 × 10⁻³⁴ J·s, ħ = 1,054 571 817 × 10⁻³⁴ J·s, m<sub>e</sub> = 9,109 383 7139 × 10⁻³¹ kg, e = 1,602 176 634 × 10⁻¹⁹ C, a₀ = 5,291 772 105 44 × 10⁻¹¹ m, μ<sub>B</sub> = 9,274 010 0657 × 10⁻²⁴ J·T⁻¹</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.bipm.org/en/publications/si-brochure" target="_blank" rel="noreferrer">BIPM, Le Système international d\'unités (brochure SI) : définitions exactes des unités et des constantes fixées — seconde, mètre, kilogramme, électronvolt</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Repères historiques cités, tels que les rapporte OpenStax : Planck (1900), Einstein (1905), Millikan (photoelectricité), Compton (diffusion des rayons X), Bohr (1913), Balmer (1885) et Rydberg, de Broglie (1924), Davisson et Germer (1927), Stern et Gerlach (1922), Goudsmit et Uhlenbeck (1925), Pauli (1925), Heisenberg (1927), Schrödinger (1926), Ruska (1931), Jönsson (1961), Pozzi (1974), Tonomura (1989).</p>'
        }
      }
    ]
  },
  {
    id: 'physique-nucleaire',
    title: 'Physique nucléaire et particules',
    note: 'Noyaux, radioactivité, réactions nucléaires et, en cours approfondi, les constituants élémentaires de la matière.',
    chapters: [
      {
        id: 'radioactivite',
        title: 'Radioactivité et décroissance',
        field: 'Nucléaire · bases',
        summary: 'Désintégration spontanée, demi-vie et loi de décroissance radioactive.',
        lesson: {
          sections: [
            'La désintégration radioactive est aléatoire pour un noyau isolé, mais prévisible statistiquement pour un grand ensemble de noyaux.',
            'La demi-vie est la durée au bout de laquelle la moitié des noyaux radioactifs initiaux se sont désintégrés.'
          ],
          formula: {
            label: 'LOI DE DÉCROISSANCE',
            text: 'N(t) = N₀ exp(−λt)  |  t₁/₂ = ln(2)/λ',
            mathML: 'radioactive-decay-summary'
          },
          example: {
            statement: 'Un échantillon contient 800 noyaux radioactifs. Combien en reste-t-il après deux demi-vies ?',
            calculation: 'Après chaque demi-vie, la quantité est divisée par deux : 800 → 400 → 200.',
            answer: 'Il reste en moyenne 200 noyaux.'
          },
          exercise: {
            question: 'Quelle fraction reste après trois demi-vies ?',
            answer: 'Il reste (1/2)³ = 1/8 de la quantité initiale.'
          },
          equationDetails: [
            {
              title: 'Loi de décroissance radioactive',
              formula: 'N(t) = N₀ exp(−λt)',
              explanation: 'Pour un grand ensemble de noyaux identiques, le nombre moyen de noyaux non désintégrés suit une décroissance exponentielle, si la constante de désintégration reste constante.',
              parameters: 'N(t) : nombre moyen de noyaux non désintégrés à la date t ; N₀ : nombre initial ; λ : constante de désintégration (s⁻¹ ou autre inverse de temps) ; t : durée dans l’unité cohérente avec λ.',
              example: 'Pour N₀ = 800 et une demi-vie de 5 jours, après 10 jours deux demi-vies se sont écoulées : N = 800 exp(−λt) = 800/4.',
              result: 'Il reste en moyenne 200 noyaux.',
              mathML: 'radioactive-decay-law'
            },
            {
              title: 'Lien entre demi-vie et constante de désintégration',
              formula: 't₁/₂ = ln(2)/λ',
              explanation: 'La demi-vie est le temps nécessaire pour que l’effectif moyen ou l’activité d’un échantillon soit divisée par deux.',
              parameters: 't₁/₂ : demi-vie (s, min, jours, etc.) ; λ : constante de désintégration dans l’unité réciproque ; ln(2) ≈ 0,693.',
              example: 'Si λ = 0,20 jour⁻¹ : t₁/₂ = 0,693/0,20.',
              result: 't₁/₂ ≈ 3,47 jours.',
              mathML: 'radioactive-half-life'
            },
            {
              title: 'Activité radioactive',
              formula: 'A = λN',
              explanation: 'L’activité est le nombre moyen de désintégrations par unité de temps. Elle est positive ; la variation de population est dN/dt = −λN.',
              parameters: 'A : activité (becquerels, Bq = s⁻¹) ; λ : constante (s⁻¹) ; N : nombre moyen de noyaux radioactifs présents.',
              example: 'Pour λ = 1,0 × 10⁻⁶ s⁻¹ et N = 1,0 × 10⁹ noyaux : A = λN.',
              result: 'A = 1,0 × 10³ Bq, soit 1000 désintégrations par seconde en moyenne.'
            }
          ],
          sources: [
            { title: 'OpenStax Chemistry 2e — Radioactive Decay', url: 'https://openstax.org/books/chemistry-2e/pages/21-3-radioactive-decay' },
            { title: 'OpenStax Chemistry 2e — Nuclear Structure and Stability', url: 'https://openstax.org/books/chemistry-2e/pages/21-1-nuclear-structure-and-stability' }
          ]
        }
      },
      {
        id: 'energie-nucleaire',
        title: 'Énergie de liaison et réactions nucléaires',
        field: 'Nucléaire · intermédiaire',
        summary: 'Défaut de masse, énergie de liaison, fission et fusion.',
        lesson: {
          sections: [
            'La masse d’un noyau lié est inférieure à la somme des masses de ses nucléons libres. La différence correspond à l’énergie de liaison.',
            'Lors d’une réaction nucléaire, la différence de masse entre états initial et final se transforme en énergie. Une réaction libère de l’énergie si les produits sont plus liés.'
          ],
          formula: {
            label: 'ÉQUIVALENCE MASSE-ÉNERGIE',
            text: 'E = Δmc²'
          },
          example: {
            statement: 'Une réaction présente un défaut de masse de 1,0×10⁻²⁹ kg. Estimer l’énergie libérée.',
            calculation: 'E = Δmc² ≈ 1,0×10⁻²⁹ × (3,0×10⁸)².',
            answer: 'E ≈ 9,0×10⁻¹³ J.'
          },
          exercise: {
            question: 'Pourquoi une petite perte de masse peut-elle libérer beaucoup d’énergie ?',
            answer: 'Parce que l’énergie vaut Δmc² et que c² est très grand.'
          },
          equationDetails: [
            {
              title: 'Équivalence masse-énergie',
              formula: 'ΔE = Δm c²',
              explanation: 'Une variation de masse au repos Δm correspond à une variation d’énergie ΔE. Dans une réaction nucléaire, le bilan d’énergie doit inclure les énergies de masse et les énergies cinétiques des produits.',
              parameters: 'ΔE : énergie (J) ; Δm : variation de masse (kg), avec le signe défini par le bilan ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide. Une masse perdue par les produits correspond à une énergie libérée.',
              example: 'Un défaut de masse de 1,0 × 10⁻²⁹ kg correspond à E = Δm c² = 1,0 × 10⁻²⁹ × (2,998 × 10⁸)².',
              result: 'L’énergie correspondante vaut environ 8,99 × 10⁻¹³ J.'
            },
            {
              title: 'Énergie de liaison d’un noyau',
              formula: 'B = [Zmₚ + (A − Z)mₙ − m(noyau)]c²',
              explanation: 'L’énergie de liaison est l’énergie minimale à fournir pour séparer un noyau en nucléons libres ; elle est égale à l’énergie libérée lors de leur assemblage. La masse des constituants doit être comparée à celle du noyau avec une convention cohérente.',
              parameters: 'B : énergie de liaison (J ou eV) ; Z : nombre de protons ; A : nombre total de nucléons ; A − Z : nombre de neutrons ; mₚ, mₙ et m(noyau) : masses des protons, neutrons et du noyau ; c : vitesse de la lumière.',
              example: 'Pour l’hélium ⁴He, la différence entre la masse de deux protons et deux neutrons libres et celle du noyau correspond à un défaut de masse d’environ 0,0305 u ; la conversion par c² donne l’énergie de liaison.',
              result: 'L’énergie de liaison de ⁴He est environ 28,4 MeV, soit 7,10 MeV par nucléon.'
            }
          ],
          sources: [
            { title: 'OpenStax Chemistry 2e — Nuclear Structure and Stability', url: 'https://openstax.org/books/chemistry-2e/pages/21-1-nuclear-structure-and-stability' },
            { title: 'OpenStax Chemistry 2e — Transmutation and Nuclear Energy', url: 'https://openstax.org/books/chemistry-2e/pages/21-4-transmutation-and-nuclear-energy' },
            { title: 'OpenStax University Physics, vol. 3 — Relativistic Energy', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-9-relativistic-energy' }
          ]
        }
      }
    ]
  },
  {
    id: 'particules-elementaires',
    title: 'Particules élémentaires',
    note: 'Un cours approfondi en seize sections : quarks, leptons, bosons, antimatière, interactions fondamentales, boson de Higgs, production et détection, avec exercices et sources.',
    chapters: [
      {
        id: 'part-particules-elementaires',
        title: 'Les particules élémentaires',
        field: 'Cours approfondi',
        summary: 'Ce que l’on appelle une particule élémentaire',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>physique des particules élémentaires</strong> étudie les briques fondamentales de la matière et leurs interactions. Elle ne s’intéresse ni aux cellules, ni aux molécules, ni même aux atomes : ses objets se situent à des échelles plus petites que le noyau atomique, et ses questions vont de la structure de la matière à l’origine des masses (OpenStax, <em>University Physics</em> vol. 3, § 11.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une particule est dite <strong>élémentaire</strong> lorsqu’aucune structure interne n’a été mise en évidence à l’échelle sondée. Toute la matière ordinaire stable se construit avec les particules de la première génération : les quarks up et down, l’électron et le neutrino électronique. Les particules des générations suivantes sont plus massives et se désintègrent rapidement vers la première (CERN, <em>The Standard Model</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Quelques repères fixent la naissance de la discipline : l’électron est identifié par J. J. Thomson dans les rayons cathodiques en 1897 (nobelprize.org, prix de physique 1937) ; l’équation de Dirac de 1928 annonce une antiparticule de même masse mais de charge opposée, le positron, observé par Carl Anderson en 1932 (CERN, <em>Antimatter</em>) ; le neutrino, prédit dans les années 1930, est détecté pour la première fois en 1956 par Clyde Cowan et Frederick Reines (nobelprize.org, parcours Reines) ; les hadrons révèlent leur structure de quarks dans les années 1960 (OpenStax, vol. 3, § 11.3) ; le boson de Higgs, prédit en 1964, est découvert en 2012 (CERN, <em>The Higgs boson</em>).</p>\n<div class="callout"><strong>Voir l’invisible : les rayons cosmiques</strong><p>Avant les grands accélérateurs, ce sont les rayons cosmiques qui ont livré de nouvelles particules. En plaquant des émulsions photographiques au sommet des montagnes, Marietta Blau, puis Cecil Powell et ses collaborateurs ont enregistré des traces de protons et découvert de nouvelles particules, comme le méson — une étape décisive vers la connaissance des hadrons (OpenStax, <em>University Physics</em> vol. 3, § 11.1).</p></div>'
        }
      },
      {
        id: 'part-modele-standard',
        title: 'Le modèle standard',
        field: 'Cours approfondi',
        summary: 'Un modèle pour trois interactions',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>modèle standard</strong>, développé au début des années 1970, réunit la théorie électrofaible — qui fusionne électrodynamique quantique et interaction faible — et la chromodynamique quantique, théorie de l’interaction forte. Il a réussi à expliquer presque tous les résultats expérimentaux et à prédire avec précision une grande variété de phénomènes (CERN, <em>The Standard Model</em> ; OpenStax, <em>University Physics</em> vol. 3, § 11.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La matière s’organise en deux familles de six particules chacune — les <strong>quarks</strong> et les <strong>leptons</strong> — réparties en trois générations de masse croissante : la première contient les particules stables de la matière ordinaire, les deux autres se désintègrent vers la première (CERN). Les interactions sont portées par des bosons : le photon, les huit gluons, les bosons W et Z ; le boson de Higgs, associé au mécanisme qui donne leur masse aux particules, complète l’inventaire. En comptant chaque type une fois — douze fermions, photon, gluons, W et Z, Higgs — on dénombre <strong>dix-sept particules élémentaires</strong>.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Trois des quatre interactions fondamentales sont donc réunies dans le modèle : forte, électromagnétique et faible. La gravitation lui reste étrangère : personne n’a rendu compatible la mécanique quantique du micro monde et la relativité générale du macro monde. D’autres questions restent ouvertes — la nature de la matière noire, le devenir de l’antimatière après le Big Bang, le nombre de générations (CERN, <em>The Standard Model</em>).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Inventaire du modèle standard (CERN, <em>The Standard Model</em> ; OpenStax, <em>University Physics</em> vol. 3, § 11.5)</caption>\n<thead><tr><th scope="col">Famille</th><th scope="col">Particules</th><th scope="col">Charge (e)</th><th scope="col">Rôle</th></tr></thead>\n<tbody>\n<tr><th scope="row">Quarks de type haut</th><td>u, c, t</td><td>+2/3</td><td>composants des hadrons</td></tr>\n<tr><th scope="row">Quarks de type bas</th><td>d, s, b</td><td>−1/3</td><td>composants des hadrons</td></tr>\n<tr><th scope="row">Leptons chargés</th><td>e, μ, τ</td><td>−1</td><td>électromagnétique et faible</td></tr>\n<tr><th scope="row">Neutrinos</th><td>ν<sub>e</sub>, ν<sub>μ</sub>, ν<sub>τ</sub></td><td>0</td><td>interaction faible seulement</td></tr>\n<tr><th scope="row">Photon</th><td>γ</td><td>0</td><td>porte l’interaction électromagnétique</td></tr>\n<tr><th scope="row">Gluons</th><td>g (8 types)</td><td>0</td><td>portent l’interaction forte</td></tr>\n<tr><th scope="row">Bosons W et Z</th><td>W<sup>±</sup>, Z</td><td>±1 ; 0</td><td>portent l’interaction faible</td></tr>\n<tr><th scope="row">Boson de Higgs</th><td>H</td><td>0</td><td>origine des masses des particules</td></tr>\n</tbody>\n</table>\n</div>'
        }
      },
      {
        id: 'part-quarks',
        title: 'Les six quarks',
        field: 'Cours approfondi',
        summary: 'Six saveurs, trois générations, trois couleurs',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans les années 1960, les physiciens réalisent que les hadrons ne sont pas élémentaires : ils sont composés de <strong>quarks</strong>. Murray Gell-Mann trouve ce nom dans <em>Finnegans Wake</em> de James Joyce. Six saveurs suffisent, réparties en trois générations : up (u) et down (d) d’abord, puis charm (c) et strange (s), enfin bottom (b) et top (t) — le même nombre que les leptons (OpenStax, <em>University Physics</em> vol. 3, § 11.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Tous les quarks sont des fermions de spin ½ avec un nombre baryonique B = +1/3 et une charge fractionnaire : +2/3 e pour u, c, t et −1/3 e pour d, s, b. Chacun possède un antiquark de même masse mais de charge opposée (OpenStax, vol. 3, § 11.3). Leurs masses s’étalent sur plus de cinq ordres de grandeur : quelques MeV pour u et d, jusqu’à 172,57 ± 0,29 GeV pour le quark top. Ce dernier se désintègre trop vite pour se lier à d’autres quarks : aucun baryon de quark top n’existe (PDG, tableaux récapitulatifs 2024 ; OpenStax, vol. 3, § 11.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les quarks portent en outre une charge de « couleur », qui intervient dans l’interaction forte ; ils ne se combinent que pour former des objets incolores, ce qui explique pourquoi aucun quark n’est jamais observé isolé (CERN, <em>The Standard Model</em>). Le détail de cette force fait l’objet de la section 09.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les six quarks (charges et nombres : OpenStax, <em>University Physics</em> vol. 3, § 11.3 ; masses : PDG, tableaux récapitulatifs 2024)</caption>\n<thead><tr><th scope="col">Saveur</th><th scope="col">Génération</th><th scope="col">Charge (e)</th><th scope="col">Masse (PDG 2024)</th></tr></thead>\n<tbody>\n<tr><th scope="row">Up (u)</th><td>1<sup>re</sup></td><td>+2/3</td><td>2,16 MeV</td></tr>\n<tr><th scope="row">Down (d)</th><td>1<sup>re</sup></td><td>−1/3</td><td>4,70 MeV</td></tr>\n<tr><th scope="row">Strange (s)</th><td>2<sup>e</sup></td><td>−1/3</td><td>93,5 MeV</td></tr>\n<tr><th scope="row">Charm (c)</th><td>2<sup>e</sup></td><td>+2/3</td><td>1,273 GeV</td></tr>\n<tr><th scope="row">Bottom (b)</th><td>3<sup>e</sup></td><td>−1/3</td><td>4,183 GeV</td></tr>\n<tr><th scope="row">Top (t)</th><td>3<sup>e</sup></td><td>+2/3</td><td>172,57 ± 0,29 GeV</td></tr>\n</tbody>\n</table>\n</div>\n<div class="formula-block"><span class="formula-label">CHARGE DU PROTON</span><math class="mathml-display" display="block" aria-label="Q de p égale deux tiers plus deux tiers moins un tiers égale un"><mrow><mi>Q</mi><mo>(</mo><mi>p</mi><mo>)</mo><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> Q(p) : charge du proton, exprimée en unités de la charge élémentaire e ; u : quark up, d : quark down. La charge du proton est la somme des charges de ses trois quarks de valence ; les antiquarks ont la charge opposée (OpenStax, <em>University Physics</em> vol. 3, § 11.3).</p>\n<div class="worked-result"><strong>EXEMPLE · LA CHARGE DU PROTON</strong><span class="math">proton = uud : deux quarks up à +2/3 e, un quark down à −1/3 e</span><span class="math">2/3 + 2/3 − 1/3 = 1</span><span class="math">le proton porte exactement +e, et le neutron udd porte 0</span></div>\n<div class="callout callout-coral"><strong>Pourquoi parle-t-on de « saveurs » ?</strong><p>Up, down, strange, charm, bottom, top ne sont pas des charges : ce sont des saveurs, comme le sont électron, muon et tau côté leptons. Seule la charge de couleur intervient dans l’interaction forte ; les saveurs se transforment, elles, par l’interaction faible (OpenStax, <em>University Physics</em> vol. 3, § 11.5).</p></div>'
        }
      },
      {
        id: 'part-leptons',
        title: 'Les six leptons',
        field: 'Cours approfondi',
        summary: 'Électrons, muons, taus et neutrinos',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Six leptons complètent les quarks : l’électron et son neutrino, le muon et son neutrino, le tau et son neutrino. Les trois leptons chargés (e, μ, τ) portent la charge −1 e et possèdent une masse appréciable ; les neutrinos sont neutres et leur masse est très faible (CERN, <em>The Standard Model</em>). Aucun lepton n’essuie l’interaction forte : les électrons et les neutrinos n’y participent pas (OpenStax, vol. 3, § 11.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les mesures du Particle Data Group donnent m<sub>e</sub> = 0,510 998 950 69 MeV, m<sub>μ</sub> = 105,658 375 5 MeV et m<sub>τ</sub> = 1 776,86 ± 0,12 MeV. Le muon vit en moyenne 2,196 981 1 µs, le tau seulement 290,3 × 10⁻¹⁵ s (PDG, table des leptons).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les oscillations de neutrinos — prix Nobel de physique 2015 « pour la découverte des oscillations de neutrinos, qui montre que les neutrinos ont une masse » — établissent que les neutrinos sont massifs. Leur masse échappe encore à la mesure directe : l’expérience KATRIN n’a posé en mai 2025 que la limite m(ν<sub>e</sub>) &lt; 0,45 eV au niveau de confiance de 90 %, soit plus d’un million de fois moins que la masse de l’électron (nobelprize.org, prix 2015 ; PDG, table des leptons).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les six leptons (masses, durées de vie et limites : PDG, table des leptons)</caption>\n<thead><tr><th scope="col">Lepton</th><th scope="col">Charge (e)</th><th scope="col">Masse</th><th scope="col">Durée de vie</th></tr></thead>\n<tbody>\n<tr><th scope="row">Électron e</th><td>−1</td><td>0,510 998 950 69 MeV</td><td>aucune désintégration observée</td></tr>\n<tr><th scope="row">Neutrino ν<sub>e</sub></th><td>0</td><td>&lt; 0,45 eV (KATRIN, 2025)</td><td>—</td></tr>\n<tr><th scope="row">Muon μ</th><td>−1</td><td>105,658 375 5 MeV</td><td>2,196 981 1 µs</td></tr>\n<tr><th scope="row">Neutrino ν<sub>μ</sub></th><td>0</td><td>&lt; 0,19 MeV</td><td>—</td></tr>\n<tr><th scope="row">Tau τ</th><td>−1</td><td>1 776,86 ± 0,12 MeV</td><td>290,3 × 10⁻¹⁵ s</td></tr>\n<tr><th scope="row">Neutrino ν<sub>τ</sub></th><td>0</td><td>&lt; 18,2 MeV</td><td>—</td></tr>\n</tbody>\n</table>\n</div>\n<div class="formula-block"><span class="formula-label">DÉCROISSANCE EXPONENTIELLE D’UNE PARTICULE</span><math class="mathml-display" display="block" aria-label="N de t égale N zéro multiplié par exponentielle de moins t sur tau"><mrow><mi>N</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mo>−</mo><mfrac><mi>t</mi><mi>τ</mi></mfrac></mrow></msup></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> N(t) : nombre de particules restantes au temps t ; N₀ : nombre initial ; t : temps (s) ; τ : durée de vie moyenne (s) — 2,196 981 1 µs pour le muon, 290,3 × 10⁻¹⁵ s pour le tau (PDG). Après un temps égal à τ, il reste environ 37 % des particules : la loi est la même que celle de la décroissance radioactive de la branche nucléaire.</p>\n<div class="worked-result"><strong>EXEMPLE · APRÈS TROIS DURÉES DE VIE</strong><span class="math">N/N₀ = e<sup>−3</sup> ≈ 0,051</span><span class="math">environ 5 % des muons produits subsistent encore</span><span class="math">c’est ce même taux de décroissance que mesurent les expériences de durée de vie</span></div>'
        }
      },
      {
        id: 'part-hadrons',
        title: 'Hadrons : baryons et mésons',
        field: 'Cours approfondi',
        summary: 'Des particules faites de quarks',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Protons, neutrons, pions, kaons ne sont pas élémentaires : ce sont des <strong>hadrons</strong>, assemblages de quarks. Un <strong>baryon</strong> réunit trois quarks ; un <strong>méson</strong> associe un quark et un antiquark (OpenStax, <em>University Physics</em> vol. 3, § 11.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le proton est l’état lié <em>uud</em>, le neutron l’état <em>udd</em> ; leurs masses valent 938,3 MeV et 939,6 MeV. Le pion π⁺ se lit <em>u</em> d̄ — un quark up et un antiquark down — et sa charge vaut 2/3 + 1/3 = +1 e (OpenStax, vol. 3, § 11.3 et tableau 11.4 ; PDG). À ces trois quarks de valence s’ajoutent les gluons qui les lient et les paires quark-antiquark qui se créent et s’annihilent en permanence.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La masse surprend : la somme des trois quarks de valence ne vaut que quelques MeV, alors que le proton pèse 938,3 MeV. L’essentiel de la masse hadronique vient de l’énergie de l’interaction forte entre quarks et gluons, convertie en masse par l’équivalence masse-énergie E = mc² (masses des quarks : PDG ; masse du proton : NIST, CODATA ; OpenStax, tableau 11.4).</p>\n<div class="formula-block"><span class="formula-label">MASSE D’UN HADRON</span><math class="mathml-display" display="block" aria-label="masse du proton approximement égale à la somme des masses des quarks u, u et d plus l’énergie d’interaction divisée par c carré"><mrow><msub><mi>m</mi><mi>p</mi></msub><mo>≈</mo><msub><mi>m</mi><mi>u</mi></msub><mo>+</mo><msub><mi>m</mi><mi>u</mi></msub><mo>+</mo><msub><mi>m</mi><mi>d</mi></msub><mo>+</mo><mfrac><msub><mi>E</mi><mtext>int</mtext></msub><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> m<sub>p</sub> : masse du proton (MeV/c²) ; m<sub>u</sub> ≈ 2,16 MeV/c² et m<sub>d</sub> ≈ 4,70 MeV/c² : masses des quarks (PDG) ; E<sub>int</sub> : énergie de l’interaction forte entre quarks et gluons (J). L’égalité est approchée : les masses de quarks dépendent de l’échelle de lecture, tandis que la masse mesurée du proton est une grandeur fixe.</p>\n<div class="worked-result"><strong>EXEMPLE · D’OÙ VIENT LA MASSE DU PROTON</strong><span class="math">somme des quarks de valence : 2,16 + 2,16 + 4,70 ≈ 9,0 MeV/c²</span><span class="math">mesure : m<sub>p</sub> = 938,3 MeV/c²</span><span class="math">la part des quarks est inférieure à 1 % : plus de 99 % de la masse vient de l’énergie d’interaction (E = mc²)</span></div>\n<div class="callout"><strong>Le confinement</strong><p>Les quarks ne sont jamais observés isolés : ils ne se combinent que pour former des objets incolores comme les hadrons, et l’échelle de cette force reste celle du noyau, environ 10⁻¹⁵ m (CERN, <em>The Standard Model</em> ; OpenStax, <em>University Physics</em> vol. 3, ch. 11 et tableau 11.6).</p></div>'
        }
      },
      {
        id: 'part-antimatiere',
        title: 'L’antimatière',
        field: 'Cours approfondi',
        summary: 'Une antiparticule pour chaque particule',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En 1928, Paul Dirac écrit une équation qui réunit théorie quantique et relativité pour décrire l’électron. Comme l’équation x² = 4 admet deux solutions, elle admet deux solutions de charge : l’une décrit l’électron, l’autre une particule de même masse mais de charge positive. Carl Anderson observe le positron en 1932 : l’antimatière existe (CERN, <em>Antimatter</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque particule de matière possède son <strong>antiparticule</strong> : propriétés identiques, charge électrique opposée. Matière et antimatière se créent en paires et s’annihilent au contact, libérant de l’énergie principalement sous forme de photons et de pions — le rendement de cette conversion est presque parfait (CERN, <em>Antimatter</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un électron et un positron au repos ne peuvent donner qu’un seul photon : l’impulsion ne serait pas conservée (OpenStax, vol. 3, § 11.2). Ils produisent donc deux photons dont l’énergie vaut l’énergie de repos de chacun : 0,511 MeV (PDG, masse de l’électron).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Après le Big Bang, un léger excès de matière — environ une particule de matière par milliard d’antiparticules — aurait survécu à l’annihilation généralisée : tout ce que nous observons en est le résidu. Au CERN, l’Antiproton Decelerator ralentit des antiprotons pour fabriquer et étudier de l’antihydrogène (CERN, <em>Antimatter</em>).</p>\n<div class="formula-block"><span class="formula-label">ÉNERGIE DES PHOTONS D’ANNIHILATION</span><math class="mathml-display" display="block" aria-label="énergie du photon égale masse de l\'électron multipliée par c carré"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E<sub>γ</sub> : énergie de chaque photon produit (MeV) ; m<sub>e</sub> = 0,511 MeV/c² : masse de l’électron (PDG) ; c : vitesse de la lumière. L’énergie totale disponible est 2m<sub>e</sub>c², répartie entre les deux photons (OpenStax, vol. 3, § 11.2).</p>\n<div class="worked-result"><strong>EXEMPLE · PAIRE ÉLECTRON-POSITRON AU REPOS</strong><span class="math">énergie totale : 2 × 0,511 MeV = 1,022 MeV</span><span class="math">deux photons de 0,511 MeV chacun</span><span class="math">émis en directions opposées pour conserver l’impulsion nulle du système</span></div>'
        }
      },
      {
        id: 'part-interactions',
        title: 'Les quatre interactions',
        field: 'Cours approfondi',
        summary: 'Force, portée, intensité',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les interactions entre particules s’expriment par quatre <strong>forces fondamentales</strong>. Par ordre d’intensité décroissante : la force nucléaire forte, la force électromagnétique, la force nucléaire faible et la gravitation (OpenStax, <em>University Physics</em> vol. 3, § 11.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque force possède sa portée et son intensité relative. La force forte n’agit qu’à l’échelle du noyau, environ 10⁻¹⁵ m ; l’électromagnétique et la gravitation s’étendent à l’infini ; la faible, elle, reste confinée à environ 10⁻¹⁸ m. Le tableau ci-dessous reprend les valeurs d’OpenStax, où la force forte sert de référence (intensité 1) (OpenStax, vol. 3, tableau 11.6).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les quatre forces fondamentales (OpenStax, <em>University Physics</em> vol. 3, § 11.1 et tableau 11.6)</caption>\n<thead><tr><th scope="col">Interaction</th><th scope="col">Force relative</th><th scope="col">Porteur</th><th scope="col">Portée</th><th scope="col">Particules concernées</th></tr></thead>\n<tbody>\n<tr><th scope="row">Forte</th><td>1</td><td>gluons</td><td>10⁻¹⁵ m</td><td>quarks</td></tr>\n<tr><th scope="row">Électromagnétique</th><td>1/137</td><td>photon</td><td>infinie</td><td>particules chargées</td></tr>\n<tr><th scope="row">Faible</th><td>10⁻¹⁰</td><td>bosons W et Z</td><td>10⁻¹⁸ m</td><td>quarks, leptons, neutrinos</td></tr>\n<tr><th scope="row">Gravitation</th><td>10⁻³⁸</td><td>graviton (non observé)</td><td>infinie</td><td>toutes — hors modèle standard</td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Lecture du tableau :</strong> la force relative compare chaque interaction à l’interaction forte à l’échelle nucléaire ; l’électromagnétique vaut environ 1/137 de la forte — c’est la constante de structure fine — et la gravitation est si faible qu’elle est négligeable dès qu’un seul atome est en jeu (OpenStax, vol. 3, tableau 11.6).</p>\n<div class="callout"><strong>Trois interactions sur quatre</strong><p>Le modèle standard réunit l’électromagnétique, la faible et la forte, avec leurs porteurs. La gravitation lui reste étrangère : ajuster la relativité générale et la mécanique quantique dans un même cadre n’a jamais réussi. Heureusement, à l’échelle des particules, l’effet gravitationnel est si faible qu’il est négligeable (CERN, <em>The Standard Model</em>).</p></div>'
        }
      },
      {
        id: 'part-bosons-porteurs',
        title: 'Les bosons porteurs',
        field: 'Cours approfondi',
        summary: 'Photon, gluons, W et Z',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans le modèle standard, les interactions se transmettent par échange de <strong>bosons</strong> : les photons — sans masse, portée théoriquement infinie — portent l’électromagnétisme ; huit gluons sans masse portent la force forte entre les quarks colorés ; les bosons W et Z, massifs, portent l’interaction faible (OpenStax, vol. 3, § 11.5 ; CERN, <em>The Standard Model</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les mesures du Particle Data Group donnent une masse d’environ 80,4 GeV/c² pour le boson W et 91,2 GeV/c² pour le boson Z, soit près de quatre-vingts fois et quatre-vingt-dix fois la masse du proton — alors que photon et gluons sont sans masse (PDG, tableaux récapitulatifs 2024 ; masse du proton : NIST, CODATA). La masse de ces porteurs explique la très courte portée de l’interaction faible, calculée dans la section 10.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le graviton, porteur hypothétique de la gravitation, figure dans les tableaux pour mémoire mais ne fait pas partie du modèle standard : il n’a jamais été observé (OpenStax, vol. 3, tableau 11.6).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Les bosons de jauge (OpenStax, <em>University Physics</em> vol. 3, § 11.5 et tableau 11.6 ; masses : PDG 2024)</caption>\n<thead><tr><th scope="col">Boson</th><th scope="col">Interaction</th><th scope="col">Masse</th><th scope="col">Portée et remarque</th></tr></thead>\n<tbody>\n<tr><th scope="row">Photon γ</th><td>électromagnétique</td><td>0</td><td>infinie</td></tr>\n<tr><th scope="row">Gluon g</th><td>forte</td><td>0</td><td>8 types ; confinés dans les hadrons</td></tr>\n<tr><th scope="row">Boson W<sup>±</sup></th><td>faible</td><td>≈ 80,4 GeV</td><td>≈ 10⁻¹⁸ m</td></tr>\n<tr><th scope="row">Boson Z</th><td>faible</td><td>≈ 91,2 GeV</td><td>≈ 10⁻¹⁸ m</td></tr>\n<tr><th scope="row">Graviton</th><td>gravitation</td><td>—</td><td>hypothétique, hors modèle standard</td></tr>\n</tbody>\n</table>\n</div>'
        }
      },
      {
        id: 'part-chromodynamique',
        title: 'La chromodynamique quantique',
        field: 'Cours approfondi',
        summary: 'La force de couleur',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La <strong>chromodynamique quantique</strong> (QCD) décrit l’interaction forte : la force qui agit entre les charges de couleur (OpenStax, <em>University Physics</em> vol. 3, § 11.5). Les quarks portent trois « couleurs » et les huit gluons sans masse transportent la force entre quarks : contrairement aux photons, cette force ne faiblit pas avec la distance à l’échelle nucléaire (CERN, <em>The Standard Model</em> ; OpenStax, vol. 3, § 11.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La portée observée de l’interaction forte vaut environ 10⁻¹⁵ m — l’échelle des hadrons et des noyaux (OpenStax, tableau 11.6). À très courte distance, en revanche, l’interaction entre quarks devient faible : c’est la <strong>liberté asymptotique</strong>, découverte par David Gross, David Politzer et Frank Wilczek et récompensée par le prix Nobel de physique 2004 « pour la découverte de la liberté asymptotique dans la théorie de l’interaction forte » (nobelprize.org, prix 2004).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">À l’échelle des hadrons, la force lie les quarks si étroitement qu’aucun quark libre n’a jamais été détecté : les quarks ne se combinent que pour former des objets incolores — protons, neutrons, pions et autres hadrons (CERN, <em>The Standard Model</em> ; OpenStax, vol. 3, ch. 11). C’est le confinement, la propriété la plus visible de la QCD.</p>\n<div class="callout"><strong>L’interaction qui tient les noyaux ensemble</strong><p>Sans l’interaction forte, les protons chargés se repousseraient électromagnétiquement et les noyaux se disloqueraient. La force forte les lie à l’intérieur du noyau — et c’est aussi elle qui lie les quarks à l’intérieur des protons et des neutrons (OpenStax, <em>University Physics</em> vol. 3, § 11.1).</p></div>'
        }
      },
      {
        id: 'part-interaction-faible',
        title: 'L’interaction faible',
        field: 'Cours approfondi',
        summary: 'Changer de saveur, désintégrer',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’<strong>interaction faible</strong> agit sur les quarks, les leptons et les neutrinos ; sa force relative ne vaut que 10⁻¹⁰ de celle de l’interaction forte et sa portée avoisine 10⁻¹⁸ m (OpenStax, <em>University Physics</em> vol. 3, tableau 11.6). Elle est portée par les bosons W et Z massifs — c’est cette masse qui impose la courte portée (OpenStax, vol. 3, § 11.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Sa manifestation la plus familière est la <strong>désintégration bêta</strong> : le neutron se transforme en proton en émettant un électron et un antineutrino électronique, n → p + e⁻ + ν̄<sub>e</sub>. Cette voie représente la totalité des désintégrations du neutron ; la durée de vie moyenne du neutron vaut environ 880 s et l’énergie libérée, égale à la différence de masse neutron-proton, vaut 1,2933 MeV (PDG, pdgLive <em>neutron</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le muon se désintègre lui aussi par échange d’un boson W : μ⁻ → e⁻ + ν̄<sub>e</sub> + ν<sub>μ</sub>, avec une durée de vie de 2,197 µs (OpenStax, vol. 3, § 11.5 ; PDG). Assez longue pour que les muons des rayons cosmiques traversent l’atmosphère et atteignent le sol grâce à la dilatation du temps — l’exemple type des mesures de relativité restreinte (OpenStax, vol. 3, § 5.3).</p>\n<div class="formula-block"><span class="formula-label">PORTRÉE DE L’INTERACTION FAIBLE</span><math class="mathml-display" display="block" aria-label="lambda environ égale à h bar c divisé par la masse du boson W multipliée par c carré"><mrow><mi>λ</mi><mo>≈</mo><mfrac><mrow><mi>ħ</mi><mi>c</mi></mrow><mrow><msub><mi>m</mi><mi>W</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> λ : portée de l’interaction (fm) ; ħc ≈ 197,3 MeV·fm : produit de la constante de Planck réduite par c (NIST, CODATA) ; m<sub>W</sub>c² ≈ 80,4 GeV = 8,04 × 10⁴ MeV : énergie de repos du boson W (PDG). Une masse m du porteur impose une portée de l’ordre de ħ/(mc) : plus le porteur est lourd, plus la portée est courte.</p>\n<div class="worked-result"><strong>EXEMPLE · L’ORDRE DE GRANDEUR DE LA PORTÉE</strong><span class="math">λ ≈ 197,3 MeV·fm / 80 400 MeV ≈ 2,5 × 10⁻³ fm</span><span class="math">soit 2,5 × 10⁻¹⁸ m</span><span class="math">même ordre de grandeur que les 10⁻¹⁸ m d’OpenStax : la portée est fixée par la masse du porteur</span></div>'
        }
      },
      {
        id: 'part-boson-higgs',
        title: 'Le boson de Higgs',
        field: 'Cours approfondi',
        summary: 'Le dernier maillon du modèle',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le <strong>champ de Higgs</strong>, proposé en 1964, remplit l’Univers. Les particules acquièrent leur masse en interagissant avec lui : plus l’interaction est forte, plus la particule est lourde. Le photon n’interagit pas avec ce champ et reste sans masse (CERN, <em>The Higgs boson</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le boson de Higgs est l’excitation de ce champ. Le 4 juillet 2012, les collaborations ATLAS et CMS annoncent la découverte d’une nouvelle particule ; en mars 2013, l’analyse d’un jeu de données deux fois et demi plus important confirme un spin nul, signature attendue. Le prix Nobel de physique 2013 est décerné le 8 octobre 2013 à François Englert et Peter Higgs « pour la découverte théorique d’un mécanisme qui contribue à notre compréhension de l’origine de la masse des particules subatomiques » (CERN, <em>The Standard Model</em> et <em>The Higgs boson</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Sa masse mesurée vaut 125,13 ± 0,11 GeV/c² (PDG, pdgLive <em>H</em>). Le boson de Higgs est rare : environ une collision du LHC sur un milliard en produit un (CERN, <em>The Higgs boson</em>). Une fois produit, il se désintègre presque immédiatement dans d’autres particules, dont les voies principales sont mesurées avec précision.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Principales voies de désintégration du boson de Higgs (PDG, pdgLive <em>H</em>)</caption>\n<thead><tr><th scope="col">Voie de désintégration</th><th scope="col">Fraction</th></tr></thead>\n<tbody>\n<tr><th scope="row">b b̄</th><td>(53 ± 8) %</td></tr>\n<tr><th scope="row">W W*</th><td>(25,7 ± 2,5) %</td></tr>\n<tr><th scope="row">τ⁺ τ⁻</th><td>(6,0 +0,8 −0,7) %</td></tr>\n<tr><th scope="row">Z Z*</th><td>(2,80 ± 0,30) %</td></tr>\n<tr><th scope="row">γ γ</th><td>(2,50 ± 0,20) × 10⁻³</td></tr>\n<tr><th scope="row">μ⁺ μ⁻</th><td>(3,0 ± 0,9) × 10⁻⁴</td></tr>\n</tbody>\n</table>\n</div>\n<div class="callout callout-coral"><strong>Une particule de spin nul</strong><p>Le boson de Higgs est la seule particule fondamentale de spin 0 connue : tous les autres constituents élémentaires sont des fermions de spin ½ ou des bosons de spin 1. C’est cette caractéristique qui a permis de confirmer l’identité de la particule observée en 2013 (CERN, <em>The Higgs boson</em>).</p></div>'
        }
      },
      {
        id: 'part-conservation',
        title: 'Lois de conservation',
        field: 'Cours approfondi',
        summary: 'Ce qui ne change jamais',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Avant toute transformation, une vérification s’impose : l’énergie, l’impulsion et le moment cinétique sont conservés dans toutes les interactions de particules. Ainsi, un électron et un positron au repos ne peuvent s’annihiler en un seul photon — l’impulsion ne serait pas conservée (OpenStax, <em>University Physics</em> vol. 3, § 11.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">À ces grandeurs classiques s’ajoutent des nombres quantiques conservés. La <strong>charge électrique</strong> l’est partout, sans exception. Le <strong>nombre baryonique</strong> B vaut +1 pour les baryons, −1 pour les antibaryons et 0 pour tout le reste : il interdit la désintégration du neutron en paire e⁺e⁻, qui respecterait pourtant la charge, l’énergie et l’impulsion (OpenStax, vol. 3, § 11.2).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les <strong>nombres leptoniques</strong> L<sub>e</sub>, L<sub>μ</sub> et L<sub>τ</sub> se conservent séparément, saveur par saveur ; l’<strong>étrangeté</strong> S compte les quarks strange et explique la longévité des kaons et des lambda. Ces nombres permettent de classer les réactions autorisées et les réactions interdites (OpenStax, vol. 3, § 11.2).</p>\n<div class="formula-block"><span class="formula-label">RÈGLES DE CONSERVATION</span><math class="mathml-display" display="block" aria-label="somme des charges avant égale somme des charges après, somme des nombres baryoniques avant égale après, somme des nombres leptoniques avant égale après"><mtable><mtr><mtd><mrow><munder><mo>∑</mo><mtext>avant</mtext></munder><mi>Q</mi><mo>=</mo><munder><mo>∑</mo><mtext>après</mtext></munder><mi>Q</mi></mrow></mtd></mtr><mtr><mtd><mrow><munder><mo>∑</mo><mtext>avant</mtext></munder><mi>B</mi><mo>=</mo><munder><mo>∑</mo><mtext>après</mtext></munder><mi>B</mi></mrow></mtd></mtr><mtr><mtd><mrow><munder><mo>∑</mo><mtext>avant</mtext></munder><mi>L</mi><mo>=</mo><munder><mo>∑</mo><mtext>après</mtext></munder><mi>L</mi></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> Q : charge électrique (en unités de e) ; B : nombre baryonique (sans dimension) ; L : nombre leptonique, conservé séparément pour chaque saveur (L<sub>e</sub>, L<sub>μ</sub>, L<sub>τ</sub>) (OpenStax, <em>University Physics</em> vol. 3, § 11.2). Une réaction n’a lieu que si ces trois sommes sont identiques avant et après.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Nombres quantiques conservés de quelques particules (OpenStax, <em>University Physics</em> vol. 3, tableau 11.2)</caption>\n<thead><tr><th scope="col">Particule</th><th scope="col">L<sub>e</sub></th><th scope="col">L<sub>μ</sub></th><th scope="col">L<sub>τ</sub></th><th scope="col">B</th><th scope="col">Étrangeté S</th></tr></thead>\n<tbody>\n<tr><th scope="row">Électron e⁻</th><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><th scope="row">Neutrino ν<sub>e</sub></th><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><th scope="row">Muon μ⁻</th><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><th scope="row">Pion π⁺</th><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><th scope="row">Kaon K⁺</th><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><th scope="row">Proton p</th><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>\n<tr><th scope="row">Neutron n</th><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>\n<tr><th scope="row">Lambda Λ⁰</th><td>0</td><td>0</td><td>0</td><td>1</td><td>−1</td></tr>\n<tr><th scope="row">Oméga Ω⁻</th><td>0</td><td>0</td><td>0</td><td>1</td><td>−3</td></tr>\n</tbody>\n</table>\n</div>\n<div class="worked-result"><strong>EXEMPLE · UNE RÉACTION INTERDITE</strong><span class="math">avant : neutron — B = 1, Q = 0</span><span class="math">après : e⁺ + e⁻ — B = 0, Q = 0</span><span class="math">la charge est conservée mais pas le nombre baryonique : n → e⁺ + e⁻ n’a jamais été observée</span></div>\n<div class="callout"><strong>Deux particules de plus, deux nombres de moins</strong><p>Les lois de conservation ne se contentent pas d’interdire : elles imposent aussi des produits. Ainsi, la désintégration bêta du neutron doit produire un électron et une autre particule pour conserver à la fois la charge, le nombre baryonique et le nombre leptonique — c’est ainsi que le neutrino a été postulé avant d’être détecté (OpenStax, <em>University Physics</em> vol. 3, § 11.2).</p></div>'
        }
      },
      {
        id: 'part-production-detection',
        title: 'Production et détection',
        field: 'Cours approfondi',
        summary: 'Créer, suivre, mesurer',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Produire des particules isolées exige des énergies énormes — celles qui régnaient dans les premiers instants de l’Univers. Le Grand collisionneur de hadrons (LHC), installé à plus de 150 m sous terre près de Genève, est la machine la plus puissante jamais construite pour étudier les interactions des particules élémentaires (OpenStax, <em>University Physics</em> vol. 3, ch. 11).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Un accélérateur linéaire fait passer les particules par une succession de cavités accélératrices à radiofréquence qui les poussent comme une vague sur un océan ; les faisceaux circulent ensuite dans un anneau avant d’entrer en collision au cœur du détecteur (OpenStax, vol. 3, § 11.4). ATLAS, l’un des deux grands détecteurs du LHC, est un cylindre de 46 m de long et 25 m de diamètre, de 7 000 tonnes, creusé à 100 m sous terre : six sous-détecteurs concentriques y enregistrent trajectoire, impulsion et énergie, et un puissant système d’aimants courbe les trajectoires des particules chargées pour permettre la mesure de leur impulsion (CERN, ATLAS <em>Detector &amp; Technology</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les collisions sont si denses — plus d’un milliard d’interactions par seconde — qu’une seule sur un million est retenue pour analyse. Le trajectographe interne reconstitue les trajectoires, les calorimètres captent l’énergie, le spectromètre à muons identifie les particules les plus pénétrantes (CERN, ATLAS <em>Detector &amp; Technology</em> ; OpenStax, vol. 3, § 11.4).</p>\n<div class="formula-block"><span class="formula-label">IMPULSION ET COURBURE DE TRAJECTOIRE</span><math class="mathml-display" display="block" aria-label="rayon de courbure égale impulsion divisée par zéro virgule deux neuf neuf huit fois B fois Q"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>0.2998</mn><mspace width="0.25em"></mspace><mi>B</mi><mspace width="0.25em"></mspace><mi>Q</mi></mrow></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> r : rayon de courbure de la trajectoire (m) ; p : impulsion de la particule (GeV/c) ; B : intensité du champ magnétique (T) ; Q : charge de la particule (en unités de e). Le facteur 0,2998 GeV·m⁻¹·T⁻¹ traduit la relation p = qBr dans les unités des physiciens (OpenStax, <em>University Physics</em> vol. 3, § 11.4 : mesure de l’impulsion par la courbure d’une trajectoire chargée).</p>\n<div class="worked-result"><strong>EXEMPLE · TRAJECTOIRE D’UN MUON</strong><span class="math">p = 3,0 GeV/c ; B = 1,0 T ; Q = 1</span><span class="math">r = 3,0 / (0,2998 × 1,0 × 1) ≈ 10,0 m</span><span class="math">plus l’impulsion est grande, plus la trajectoire est peu courbée : les particules les plus énergétiques se reconnaissent à leur rayon</span></div>\n<div class="callout"><strong>ATLAS en quatre chiffres</strong><p>46 m de long, 25 m de diamètre, 7 000 tonnes, 100 m sous terre — et jusqu’à 7 TeV par faisceau. Le détecteur est conçu pour reconstituer l’histoire de chaque collision, particule par particule (CERN, ATLAS <em>Detector &amp; Technology</em>).</p></div>'
        }
      },
      {
        id: 'part-decouvertes',
        title: 'Chronologie des découvertes',
        field: 'Cours approfondi',
        summary: 'De l’électron au boson de Higgs',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque étape de cette chronologie suit le même scénario : une anomalie ou une prédiction théorique, puis une expérience, puis une confirmation. Les dates ci-dessous sont celles rapportées par les sources du cours — CERN, OpenStax et Académie Nobel.</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Repères de la physique des particules (nobelprize.org ; CERN ; OpenStax, <em>University Physics</em> vol. 3, § 11.3)</caption>\n<thead><tr><th scope="col">Date</th><th scope="col">Découverte</th><th scope="col">Où et par qui</th></tr></thead>\n<tbody>\n<tr><th scope="row">1897</th><td>Électron</td><td>J. J. Thomson, rayons cathodiques (nobelprize.org, prix 1937)</td></tr>\n<tr><th scope="row">1932</th><td>Positron</td><td>Carl Anderson, prédit par Dirac en 1928 (CERN, <em>Antimatter</em>)</td></tr>\n<tr><th scope="row">1956</th><td>Neutrino</td><td>Clyde Cowan et Frederick Reines (nobelprize.org, parcours Reines)</td></tr>\n<tr><th scope="row">Années 1960</th><td>Quarks</td><td>postulés parmi les hadrons, Murray Gell-Mann (OpenStax, vol. 3, § 11.3)</td></tr>\n<tr><th scope="row">1983</th><td>Bosons W et Z</td><td>UA1 et UA2 au CERN (CERN, <em>The Standard Model</em>)</td></tr>\n<tr><th scope="row">1990</th><td>Preuves des quarks</td><td>diffusion profondément inélastique — Nobel de Friedman, Kendall et Taylor (nobelprize.org, prix 1990)</td></tr>\n<tr><th scope="row">1995</th><td>Quark top</td><td>détecteur CDF (CERN, <em>The Standard Model</em>)</td></tr>\n<tr><th scope="row">2012</th><td>Boson de Higgs</td><td>ATLAS et CMS au CERN (CERN, <em>The Higgs boson</em>)</td></tr>\n</tbody>\n</table>\n</div>\n<div class="callout"><strong>Un modèle abouti mais incomplet</strong><p>Le modèle standard a réussi presque tous ses tests — mais il reste silencieux sur la matière noire, sur l’asymétrie antimatière-matière, sur l’origine des trois générations et sur la gravitation. Les collisions du LHC continuent de chercher la physique qui le dépasse (CERN, <em>The Standard Model</em>).</p></div>'
        }
      },
      {
        id: 'part-exercices',
        title: 'S’entraîner',
        field: 'Cours approfondi',
        summary: 'Exercices corrigés',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Six exercices couvrant tout le cours, des charges de quarks à la courbure des trajectoires. Essaie de répondre avant d’ouvrir la correction : le but est de manipuler les règles, pas de les relire.</p>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">A</span><span>Quelle est la charge électrique totale des trois quarks du proton (uud) ? Et celle du neutron (udd) ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Proton : 2/3 + 2/3 − 1/3 = +1, soit +e. Neutron : 2/3 − 1/3 − 1/3 = 0. Le proton porte donc exactement une charge élémentaire et le neutron est neutre — c’est la composition en quarks qui l’explique (section 03).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">B</span><span>La réaction n → e⁺ + e⁻ conserve-t-elle la charge, l’énergie et l’impulsion ? Pourquoi n’a-t-elle jamais été observée ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Oui : la charge vaut 0 des deux côtés et les grandeurs énergétiques peuvent s’accorder. Mais le nombre baryonique passe de 1 (neutron) à 0 (paire e⁺e⁻) : il n’est pas conservé, donc la réaction est interdite (section 12 ; OpenStax, vol. 3, § 11.2).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">C</span><span>Le pion π⁺ est composé d’un quark up (u) et d’un antiquark down (d̄). Quelle est sa charge, en unités de e ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Le quark up porte +2/3 e ; l’antiquark down porte l’opposé de −1/3 e, soit +1/3 e. Charge totale : 2/3 + 1/3 = +1 e. Un méson est bien chargé en unités entières, comme toute particule libre (sections 03 et 05).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">D</span><span>Un muon d’impulsion 6,0 GeV/c traverse un champ magnétique de 0,50 T. Quel rayon de courbure décrit sa trajectoire (charge |Q| = 1) ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>r = p / (0,2998 × B × Q) = 6,0 / (0,2998 × 0,50 × 1) ≈ 40 m. Une impulsion deux fois plus grande donnerait un rayon deux fois plus grand : les trajectoires les plus droites correspondent aux particules les plus énergétiques (section 13).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">E</span><span>Estimer la portée de l’interaction faible en prenant m<sub>W</sub>c² ≈ 80,4 GeV et ħc ≈ 197,3 MeV·fm. Que vaut-elle en mètres ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>λ ≈ ħc / (m<sub>W</sub>c²) = 197,3 MeV·fm / 80 400 MeV ≈ 2,5 × 10⁻³ fm, soit 2,5 × 10⁻¹⁸ m. C’est le même ordre de grandeur que les 10⁻¹⁸ m indiqués par OpenStax : la portée d’une interaction est fixée par la masse de son porteur (sections 08 et 10).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">F</span><span>Un électron et un positron au repos s’annihilent. Quelle énergie totale est disponible, et quelle énergie porte chacun des deux photons produits ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>Énergie totale : 2m<sub>e</sub>c² = 2 × 0,511 MeV = 1,022 MeV. La conservation de l’impulsion impose deux photons émis en directions opposées, chacun portant 0,511 MeV — l’énergie de repos de l’électron (section 06 ; OpenStax, vol. 3, § 11.2).</p></div>\n</details>'
        }
      },
      {
        id: 'part-sources',
        title: 'Sources',
        field: 'Cours approfondi',
        summary: 'Sources vérifiées',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque affirmation scientifique de ce cours renvoie à l’une des sources ci-dessous. OpenStax fait référence lorsque le sujet y figure ; les valeurs numériques précises proviennent du Particle Data Group, du CERN et de l’Académie Nobel, qui jalonne l’histoire de la discipline.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/11-introduction" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, ch. 11 <em>Particle Physics and Cosmology</em> : étude des énergies énormes nécessaires pour produire des particules isolées, Grand collisionneur de hadrons (LHC) et détecteur ATLAS</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/11-1-introduction-to-particle-physics" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 11.1 <em>Introduction to Particle Physics</em> : les quatre forces fondamentales et leur ordre d’intensité, fermions et bosons, familles de quarks et de leptons, rayons cosmiques et émulsions nucléaires</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/11-2-particle-conservation-laws" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 11.2 <em>Particle Conservation Laws</em> : conservation de la charge, du nombre baryonique, des nombres leptoniques et de l’étrangeté ; annihilation e⁺e⁻ à un photon impossible ; tableau 11.2</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/11-3-quarks" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 11.3 <em>Quarks</em> : six saveurs et leurs charges, nombre baryonique 1/3, baryons et mésons (tableaux 11.4 et 11.5), proton uud à 0,938 GeV, absence de baryons de quark top</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/11-4-particle-accelerators-and-detectors" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 11.4 <em>Particle Accelerators and Detectors</em> : accélérateurs linéaires et à cavités radiofréquence, collisionneurs, mesure de l’impulsion par la courbure d’une trajectoire chargée</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/11-5-the-standard-model" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 11.5 <em>The Standard Model</em> : théorie électrofaible et chromodynamique quantique, bosons sans masse et bosons massifs, tableau 11.6 des quatre forces (portées 10⁻¹⁵ m et 10⁻¹⁸ m, forces relatives 1, 1/137, 10⁻¹⁰, 10⁻³⁸)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://home.cern/science/physics/standard-model" target="_blank" rel="noreferrer">CERN, <em>The Standard Model</em> : quarks et leptons en trois générations, huit gluons, gravitation exclue, W et Z découverts en 1983 (UA1 et UA2), quark top en 1995 (CDF), boson de Higgs annoncé le 4 juillet 2012, Nobel 2013</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://home.cern/science/physics/antimatter" target="_blank" rel="noreferrer">CERN, <em>Antimatter</em> : équation de Dirac de 1928, découverte du positron par Carl Anderson en 1932, création en paires et annihilation, excès d’environ une particule de matière par milliard, Antiproton Decelerator</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://home.cern/science/physics/higgs-boson" target="_blank" rel="noreferrer">CERN, <em>The Higgs boson</em> : champ proposé en 1964, mécanisme Brout-Englert-Higgs, photon sans masse, annonce du 4 juillet 2012, spin nul confirmé en mars 2013, Nobel du 8 octobre 2013, environ une collision sur un milliard</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://atlas.cern/discover/detector" target="_blank" rel="noreferrer">CERN, ATLAS <em>Detector &amp; Technology</em> : cylindre de 46 m sur 25 m, 7 000 tonnes, cavernes à 100 m sous terre, six sous-détecteurs concentriques, courbure des trajectoires par aimants, plus d’un milliard d’interactions par seconde, une sur un million enregistrée</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://pdg.lbl.gov/2024/tables/tables.html" target="_blank" rel="noreferrer">Particle Data Group, <em>Review of Particle Physics</em> — tableaux récapitulatifs 2024 : masses des six quarks (u 2,16 MeV à t 172,57 ± 0,29 GeV), masses et durées de vie des leptons, limites de masses des neutrinos</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://pdgprod.lbl.gov/pdgprod/pdgLive/Particle.action?home=&amp;node=S126" target="_blank" rel="noreferrer">Particle Data Group, pdgLive, boson de Higgs : masse 125,13 ± 0,11 GeV, fractions de désintégration (b b̄, W W*, τ⁺τ⁻, Z Z*, γ γ, μ⁺μ⁻), couplages et propriétés de spin</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://pdgprod.lbl.gov/pdgprod/pdgLive/Particle.action?home=&amp;node=S017" target="_blank" rel="noreferrer">Particle Data Group, pdgLive, neutron : composition uud et udd, masse 939,565 421 9 MeV, différence de masse n − p = 1,293 332 5 MeV, mode de désintégration p e⁻ ν̄<sub>e</sub> à 100 %</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.nobelprize.org/prizes/physics/1937/summary/" target="_blank" rel="noreferrer">Académie Nobel, prix de physique 1937 : J. J. Thomson et la découverte de l’électron en 1897 dans les rayons cathodiques</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.nobelprize.org/prizes/physics/1995/reines/facts/" target="_blank" rel="noreferrer">Académie Nobel, Frederick Reines : détection du neutrino pour la première fois en 1956 par Clyde Cowan et Frederick Reines</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.nobelprize.org/prizes/physics/1990/summary/" target="_blank" rel="noreferrer">Académie Nobel, prix de physique 1990 : Jerome Friedman, Henry Kendall et Richard Taylor « pour leurs investigations pionnières sur la diffusion profondément inélastique des électrons sur les protons et les neutrons liés », essentielle au modèle des quarks</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.nobelprize.org/prizes/physics/2004/summary/" target="_blank" rel="noreferrer">Académie Nobel, prix de physique 2004 : David Gross, David Politzer et Frank Wilczek « pour la découverte de la liberté asymptotique dans la théorie de l’interaction forte »</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.nobelprize.org/prizes/physics/2015/summary/" target="_blank" rel="noreferrer">Académie Nobel, prix de physique 2015 : Takaaki Kajita et Arthur McDonald « pour la découverte des oscillations de neutrinos, qui montre que les neutrinos ont une masse »</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://physics.nist.gov/cuu/Constants/" target="_blank" rel="noreferrer">NIST, <em>CODATA Recommended Values of the Fundamental Physical Constants</em> : ħ, c, conversion entre joules et électronvolts, produit ħc ≈ 197,3 MeV·fm, masse du proton</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Repères cités, tels que les rapportent ces sources : Thomson (1897), Dirac (1928), Anderson (1932), Cowan et Reines (1956), Gell-Mann et les quarks (années 1960), champ de Higgs (1964), bosons W et Z (1983), quark top (1995), boson de Higgs (2012), limite KATRIN sur la masse du neutrino électronique (2025).</p>'
        }
      }
    ]
  },
  {
    id: 'relativite',
    title: 'Relativité',
    note: 'Espace, temps, mouvement rapide et gravitation.',
    chapters: [
      {
        id: 'relativite-restreinte',
        title: 'Relativité restreinte',
        field: 'Relativité · bases',
        summary: 'Référentiels inertiels, invariance de la vitesse de la lumière et dilatation du temps.',
        lesson: {
          sections: [
            'La relativité restreinte repose sur deux idées : les lois de la physique ont la même forme dans les référentiels inertiels, et la vitesse de la lumière dans le vide est la même pour tous les observateurs inertiels.',
            'Le temps mesuré entre deux événements dépend du mouvement de l’observateur. La différence devient importante lorsque la vitesse approche celle de la lumière.'
          ],
          formula: {
            label: 'FACTEUR DE LORENTZ',
            text: 'γ = 1/√(1 − v²/c²)'
          },
          example: {
            statement: 'Calculer γ pour un objet se déplaçant à 0,6c.',
            calculation: 'γ = 1/√(1 − 0,36) = 1/0,8.',
            answer: 'γ = 1,25.'
          },
          exercise: {
            question: 'Que vaut γ lorsque v est très petit devant c ?',
            answer: 'v²/c² est négligeable, donc γ ≈ 1 : on retrouve l’approximation classique.'
          },
          equationDetails: [
            {
              title: 'Facteur de Lorentz',
              formula: 'γ = 1/√(1 − v²/c²)',
              explanation: 'Ce facteur relie certaines mesures faites dans deux référentiels inertiels en mouvement relatif. Il est défini pour une vitesse relative v inférieure à c.',
              parameters: 'γ : facteur sans unité ; v : vitesse relative des référentiels (m·s⁻¹) ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide.',
              example: 'Pour v = 0,60c : γ = 1/√(1 − 0,60²) = 1/0,80.',
              result: 'γ = 1,25.'
            },
            {
              title: 'Dilatation du temps',
              formula: 'Δt = γΔτ',
              explanation: 'Δτ est le temps propre mesuré dans le référentiel où les deux événements ont lieu au même endroit ; Δt est le temps mesuré dans un référentiel où ce dispositif est en mouvement uniforme.',
              parameters: 'Δt, Δτ : intervalles de temps (s) ; γ : facteur de Lorentz ; v : vitesse relative ; la formule s’applique à des référentiels inertiels en mouvement relatif.',
              example: 'Si une horloge en mouvement mesure Δτ = 2,0 s à v = 0,60c, alors Δt = 1,25 × 2,0.',
              result: 'L’intervalle mesuré dans l’autre référentiel vaut 2,5 s.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Time Dilation', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation' },
            { title: 'OpenStax University Physics, vol. 3 — Length Contraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-4-length-contraction' }
          ]
        }
      },
      {
        id: 'espace-temps',
        title: 'Espace-temps et causalité',
        field: 'Relativité · intermédiaire',
        summary: 'Événements, intervalles relativistes, cônes de lumière et simultanéité.',
        lesson: {
          sections: [
            'Un événement est repéré par trois coordonnées spatiales et une date. Deux observateurs en mouvement relatif ne s’accordent pas nécessairement sur la simultanéité d’événements éloignés.',
            'La causalité reste protégée : aucun signal ne peut transmettre une information plus vite que la lumière.'
          ],
          formula: {
            label: 'INTERVALLE D’ESPACE-TEMPS',
            text: 's² = c²Δt² − Δx² − Δy² − Δz²'
          },
          example: {
            statement: 'Deux événements sont séparés de Δt = 2 μs et Δx = 300 m dans une dimension. Calculer l’intervalle s².',
            calculation: 'cΔt = 3×10⁸ × 2×10⁻⁶ = 600 m. Donc s² = 600² − 300².',
            answer: 's² = 270 000 m² : la séparation est de type temps.'
          },
          exercise: {
            question: 'Peut-on relier causalement deux événements séparés par une distance supérieure à cΔt ?',
            answer: 'Non, il faudrait un signal plus rapide que la lumière.'
          },
          equationDetails: [
            {
              title: 'Intervalle d’espace-temps',
              formula: 's² = c²Δt² − Δx² − Δy² − Δz²',
              explanation: 'Avec la convention de signe +--- utilisée ici, l’intervalle est invariant par transformation de Lorentz. Il permet de classer la séparation de deux événements : s² > 0 de type temps, s² = 0 de type lumière, s² < 0 de type espace. Certains ouvrages utilisent la convention de signe opposée.',
              parameters: 's² : intervalle au carré (m²) ; Δt : différence de temps coordonnée (s) ; Δx, Δy, Δz : différences de coordonnées spatiales (m) ; c : vitesse de la lumière (m·s⁻¹).',
              example: 'Pour Δt = 2,0 μs, Δx = 300 m et Δy = Δz = 0 : cΔt ≈ 600 m, donc s² = 600² − 300².',
              result: 's² = 270 000 m² > 0 : la séparation est de type temps avec cette convention.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — The Lorentz Transformation and Spacetime', url: 'https://openstax.org/books/university-physics-volume-3/pages/5-5-the-lorentz-transformation' }
          ]
        }
      },
      {
        id: 'relativite-generale',
        title: 'Relativité générale et gravitation',
        field: 'Relativité · approfondissement',
        summary: 'Géométrie dynamique de l’espace-temps, principe d’équivalence et équation d’Einstein reliant courbure et énergie-impulsion.',
        lesson: {
          sections: [
            'En relativité générale, la gravitation n’est pas décrite comme une force newtonienne fondamentale : matière et énergie sont liées à la géométrie de l’espace-temps, et les corps en chute libre suivent ses géodésiques. L’analogie du « drap creusé » peut aider à visualiser une courbure spatiale, mais ne représente pas littéralement la géométrie quadridimensionnelle.',
            'Le principe d’équivalence affirme localement qu’un laboratoire en chute libre reproduit les lois de la relativité restreinte, tant que les effets de marée dus à la variation du champ sur sa taille et sa durée d’observation sont négligeables. Les effets de marée sont précisément une manifestation de la courbure qu’on ne peut pas éliminer dans une région étendue.',
            'L’équation d’Einstein des champs relie, à chaque événement, le tenseur de courbure G₍μν₎ et la constante cosmologique Λ au tenseur énergie-impulsion T₍μν₎. C’est une équation tensorielle : μ et ν parcourent les quatre coordonnées de l’espace-temps. En quatre dimensions, la symétrie laisse dix composantes indépendantes, couplées et non linéaires. G₍μν₎ est construit à partir du tenseur de Ricci R₍μν₎, de son scalaire R et du tenseur métrique g₍μν₎.',
            'Le membre droit décrit la densité et les flux d’énergie et de quantité de mouvement, ainsi que les contraintes et pressions. Il ne s’agit donc pas seulement de la masse au repos : pression et flux d’énergie contribuent aussi à la gravitation. La constante Λ représente un terme géométrique uniforme ; dans les applications locales du Système solaire, on la néglige habituellement.',
            'La relativité générale ne remplace pas systématiquement la mécanique de Newton : lorsque le champ est faible, les vitesses sont petites devant c et les mesures sont faites loin d’un horizon, elle retrouve l’approximation newtonienne avec une grande précision. L’exemple de la pesanteur terrestre ci-dessous utilise cette limite, et non une résolution directe de l’équation tensorielle.'
          ],
          formula: {
            label: 'ÉQUATION D’EINSTEIN DES CHAMPS',
            text: 'G₍μν₎ + Λg₍μν₎ = (8πG/c⁴)T₍μν₎',
            mathML: 'einstein-field-equation'
          },
          example: {
            statement: 'Estimer l’accélération gravitationnelle à la surface de la Terre à l’aide de la limite newtonienne.',
            calculation: 'g ≈ (6,67430 × 10⁻¹¹ × 5,972 × 10²⁴)/(6,371 × 10⁶)² m·s⁻².',
            answer: 'g ≈ 9,82 m·s⁻². Ce calcul illustre la limite de champ faible ; il ne résout pas directement l’équation tensorielle d’Einstein.'
          },
          exercise: {
            question: 'Dans l’approximation newtonienne, comment varie g si l’on double la distance r au centre de la Terre ?',
            answer: 'Comme g ∝ 1/r², doubler r divise g par 2² : g devient environ 9,82/4 ≈ 2,46 m·s⁻².'
          },
          equationDetails: [
            {
              title: 'Équation d’Einstein des champs',
              formula: 'G₍μν₎ + Λg₍μν₎ = (8πG/c⁴)T₍μν₎',
              mathML: 'einstein-field-equation',
              explanation: 'Cette équation locale décrit comment la géométrie de l’espace-temps est liée à son contenu matériel et énergétique. Le coefficient 8πG/c⁴ fixe le couplage gravitationnel. Certains textes emploient une convention différente pour le signe de la courbure ; l’équation affichée correspond à une convention standard, cohérente avec la limite newtonienne indiquée plus bas.',
              parameters: 'G₍μν₎ : tenseur d’Einstein, grandeur géométrique construite à partir de la courbure ; Λ : constante cosmologique (m⁻²) ; g₍μν₎ : tenseur métrique, qui définit les intervalles d’espace-temps ; G : constante gravitationnelle de Newton, ici à ne pas confondre avec G₍μν₎ ; c : vitesse de la lumière dans le vide ; T₍μν₎ : tenseur énergie-impulsion (densité et flux d’énergie, densité de quantité de mouvement et contraintes). μ, ν = 0, 1, 2, 3 repèrent les coordonnées temporelle et spatiales.',
              example: 'Dans le vide à l’extérieur d’un corps, on peut poser T₍μν₎ = 0. À l’échelle locale, si l’on néglige Λ, l’équation impose G₍μν₎ = 0.',
              result: 'Cela ne signifie pas que l’espace-temps y est plat : à l’extérieur d’une masse sphérique, le tenseur de Ricci peut être nul alors que la courbure de marée (tenseur de Riemann) reste non nulle.'
            },
            {
              title: 'Définition du tenseur d’Einstein',
              formula: 'G₍μν₎ = R₍μν₎ − ½Rg₍μν₎',
              mathML: 'einstein-tensor-definition',
              explanation: 'Le tenseur d’Einstein rassemble le tenseur de Ricci et sa trace de façon à satisfaire une loi locale de conservation. Il constitue la partie géométrique standard de l’équation de champ avec constante cosmologique.',
              parameters: 'R₍μν₎ : tenseur de Ricci, contraction du tenseur de courbure de Riemann (m⁻²) ; R = gᵐⁿR₍μν₎ : scalaire de Ricci, trace de R₍μν₎ (m⁻²) ; g₍μν₎ : métrique ; ½ : facteur numérique. Les indices répétés sont contractés selon la convention d’Einstein.',
              example: 'Pour l’extérieur vide de Schwarzschild, R₍μν₎ = 0, donc R = 0 et la définition donne G₍μν₎ = 0.',
              result: 'Le tenseur d’Einstein s’annule dans cette région, bien que le champ gravitationnel et les effets de marée ne soient pas nuls.'
            },
            {
              title: 'Limite newtonienne : champ d’une masse sphérique',
              formula: 'g ≈ GₙM/r²',
              explanation: 'Dans un champ faible, pour des vitesses lentes et à l’extérieur d’une masse sphérique, la relativité générale redonne la valeur de l’accélération gravitationnelle de Newton. Cette formule est une approximation de la relativité générale, pas son équation fondamentale.',
              parameters: 'g : norme de l’accélération gravitationnelle (m·s⁻²) ; Gₙ = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² : constante de Newton ; M : masse centrale (kg) ; r : distance au centre (m).',
              example: 'À la surface terrestre, prenons M = 5,972 × 10²⁴ kg et r = 6,371 × 10⁶ m : g ≈ GₙM/r².',
              result: 'g ≈ 9,82 m·s⁻², proche de la valeur usuelle 9,81 m·s⁻² ; la valeur locale varie avec l’altitude et la latitude.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Einstein’s Theory of Gravity', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-7-einsteins-theory-of-gravity' },
            { title: 'Einstein Online, Max Planck Institute — Einstein’s geometric gravity', url: 'https://www.einstein-online.info/en/GeomGravity/' },
            { title: 'Einstein Online, Max Planck Institute — The equivalence principle', url: 'https://www.einstein-online.info/en/spotlight/equivalence_principle/' }
          ]
        }
      }
    ]
  },
  {
    id: 'matiere-condensee',
    title: 'Matière condensée et matériaux',
    note: 'Organisation microscopique des solides et propriétés émergentes.',
    chapters: [
      {
        id: 'structures-cristallines',
        title: 'Structures cristallines',
        field: 'Matériaux · bases',
        summary: 'Réseaux périodiques, maille, compacité et diffraction des rayons X.',
        lesson: {
          sections: [
            'Un cristal est organisé selon une structure périodique. Une maille élémentaire, répétée dans l’espace, décrit le réseau et les positions des atomes.',
            'La diffraction des rayons X révèle les distances interatomiques, car la longueur d’onde des rayons X est du même ordre de grandeur.'
          ],
          formula: {
            label: 'LOI DE BRAGG',
            text: '2d sin(θ) = nλ'
          },
          example: {
            statement: 'Pour n = 1, λ = 0,20 nm et θ = 30°, calculer l’espacement d.',
            calculation: 'd = λ/(2sinθ) = 0,20/(2×0,5).',
            answer: 'd = 0,20 nm.'
          },
          exercise: {
            question: 'Que devient l’angle de diffraction si λ et d restent constants mais que l’ordre n augmente ?',
            answer: 'sinθ augmente, donc l’angle θ augmente tant que la diffraction est possible.'
          },
          equationDetails: [
            {
              title: 'Loi de Bragg',
              formula: 'mλ = 2d sin θ',
              explanation: 'Cette condition donne les maxima d’interférence des rayons X réfléchis par des familles de plans cristallins parallèles. L’angle θ est mesuré entre le rayon et le plan cristallin, comme dans la convention de Bragg.',
              parameters: 'm : ordre entier positif ; λ : longueur d’onde des rayons X (m) ; d : distance entre plans cristallins (m) ; θ : angle de Bragg.',
              example: 'Pour m = 1, d = 0,252 nm et θ = 18,1° : λ = 2d sin θ.',
              result: 'λ ≈ 0,157 nm.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — X-Ray Diffraction', url: 'https://openstax.org/books/university-physics-volume-3/pages/4-6-x-ray-diffraction' },
            { title: 'OpenStax University Physics, vol. 3 — Bonding in Crystalline Solids', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-3-bonding-in-crystalline-solids' }
          ]
        }
      },
      {
        id: 'bandes-energie',
        title: 'Bandes d’énergie et matériaux',
        field: 'Matériaux · intermédiaire',
        summary: 'Bandes de valence et de conduction, isolants, conducteurs et semi-conducteurs.',
        lesson: {
          sections: [
            'Dans un solide, les niveaux d’énergie des atomes se regroupent en bandes. La bande de valence contient les électrons liés ; la bande de conduction permet le transport électrique.',
            'La taille de la bande interdite distingue notamment conducteurs, semi-conducteurs et isolants. La température ou le dopage peuvent modifier la conductivité d’un semi-conducteur.'
          ],
          formula: {
            label: 'ÉNERGIE DU PHOTON',
            text: 'E = hf ; absorption possible si E ≥ E(gap)'
          },
          example: {
            statement: 'Un semi-conducteur a une bande interdite Eg = 1,1 eV. Un photon de 2 eV peut-il créer une excitation ?',
            calculation: 'L’énergie du photon dépasse la bande interdite : 2 eV > 1,1 eV.',
            answer: 'Oui, il peut promouvoir un électron vers la bande de conduction.'
          },
          exercise: {
            question: 'Pourquoi un métal conduit-il bien l’électricité ?',
            answer: 'Il possède des états électroniques disponibles proches en énergie, permettant aux électrons de se déplacer sous l’action d’un champ.'
          },
          equationDetails: [
            {
              title: 'Énergie du photon et seuil de bande interdite',
              formula: 'Eγ = hf ; Eγ ≥ E(gap)',
              explanation: 'Un photon a l’énergie hf. Dans le modèle simplifié, cette énergie doit atteindre au moins la largeur Eg de la bande interdite pour qu’une excitation de valence vers conduction soit énergétiquement possible. Cette condition d’énergie seule ne garantit pas une transition : dans un semi-conducteur à gap indirect, la conservation de quantité de mouvement peut aussi faire intervenir un phonon.',
              parameters: 'Eγ : énergie du photon (J ou eV) ; h : constante de Planck ; f : fréquence (Hz) ; Eg : largeur de la bande interdite (J ou eV). Comparer des énergies exprimées dans la même unité.',
              example: 'Pour Eg = 1,1 eV et Eγ = 2,0 eV, on a Eγ > Eg.',
              result: 'L’énergie suffit au franchissement du gap dans le modèle direct simplifié ; la probabilité réelle dépend aussi de la structure des bandes et des règles de transition.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Band Theory of Solids', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-5-band-theory-of-solids' },
            { title: 'OpenStax University Physics, vol. 3 — Semiconductors and Doping', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping' }
          ]
        }
      },
      {
        id: 'supraconductivite',
        title: 'Magnétisme et supraconductivité',
        field: 'Matériaux · approfondissement',
        summary: 'Réponse magnétique des matériaux et transport sans résistance.',
        lesson: {
          sections: [
            'Les matériaux répondent différemment à un champ magnétique selon leur structure microscopique. La susceptibilité caractérise cette réponse.',
            'Sous une température critique, certains matériaux deviennent supraconducteurs : leur résistance électrique disparaît et ils expulsent le champ magnétique de leur volume, effet Meissner.'
          ],
          formula: {
            label: 'RÉSISTANCE EN ÉTAT SUPRACONDUCTEUR',
            text: 'T < T꜀  ⇒  R = 0 (dans le modèle idéal)'
          },
          example: {
            statement: 'Un fil supraconducteur maintient un courant sans source de tension dans le modèle idéal. Quelle est la puissance Joule ?',
            calculation: 'P = RI². Si R = 0, alors P = 0.',
            answer: 'La dissipation Joule est nulle.'
          },
          exercise: {
            question: 'La supraconductivité apparaît-elle à toute température ?',
            answer: 'Non, elle apparaît sous une température critique propre au matériau.'
          },
          equationDetails: [
            {
              title: 'Résistivité sous la température critique',
              formula: 'T < T꜀ ⇒ ρ = 0 (état supraconducteur idéal)',
              explanation: 'Sous sa température critique, un matériau peut entrer dans l’état supraconducteur. La condition ne suffit pas à elle seule : le champ magnétique et le courant doivent aussi rester dans les limites critiques du matériau.',
              parameters: 'T : température du matériau (K) ; T꜀ : température critique propre au matériau (K) ; ρ : résistivité (Ω·m). Pour un échantillon homogène, ρ = 0 implique une résistance R nulle dans le modèle idéal.',
              example: 'Un matériau de T꜀ = 9,2 K est refroidi à T = 4,2 K et soumis à un champ inférieur à son champ critique : T < T꜀.',
              result: 'Il peut être supraconducteur ; si ses limites critiques ne sont pas dépassées, sa résistivité est nulle dans le modèle.'
            },
            {
              title: 'Puissance Joule',
              formula: 'P = RI²',
              explanation: 'Dans un dipôle résistif, la puissance dissipée par effet Joule est le produit de sa résistance par le carré du courant.',
              parameters: 'P : puissance dissipée (W) ; R : résistance (Ω) ; I : courant efficace en régime continu ou résistance instantanée et courant instantané selon l’usage. En régime alternatif, la puissance moyenne nécessite généralement les valeurs efficaces et le facteur de puissance.',
              example: 'Dans le modèle idéal, si R = 0 Ω et I = 10 A, alors P = 0 × 10².',
              result: 'La dissipation Joule est nulle dans l’idéal. Les conducteurs réels et leurs connexions peuvent toutefois avoir des pertes.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 3 — Superconductivity', url: 'https://openstax.org/books/university-physics-volume-3/pages/9-8-superconductivity' },
            { title: 'OpenStax University Physics, vol. 2 — Superconductors', url: 'https://openstax.org/books/university-physics-volume-2/pages/9-6-superconductors' }
          ]
        }
      }
    ]
  },
  {
    id: 'astrophysique-cosmologie',
    title: 'Astrophysique et cosmologie',
    note: 'Des systèmes planétaires à l’évolution de l’Univers.',
    chapters: [
      {
        id: 'gravitation-orbites',
        title: 'Gravitation et mécanique orbitale',
        field: 'Astrophysique · bases',
        summary: 'Force gravitationnelle, orbites circulaires et lois de Kepler.',
        lesson: {
          sections: [
            'La gravitation est une interaction attractive entre deux masses. Pour un satellite en orbite circulaire, la force gravitationnelle fournit l’accélération centripète.',
            'Les lois de Kepler décrivent les orbites planétaires ; pour des orbites autour du même astre, le carré de la période est proportionnel au cube du demi-grand axe.'
          ],
          formula: {
            label: 'GRAVITATION ET TROISIÈME LOI DE KEPLER',
            text: 'F = GMm/r²  |  T²/a³ = constante'
          },
          example: {
            statement: 'Un satellite orbite à une distance r du centre. Comment varie sa vitesse circulaire si le rayon orbital est multiplié par 4 ?',
            calculation: 'v = √(GM/r). Remplacer r par 4r divise la vitesse par √4.',
            answer: 'La vitesse est divisée par 2.'
          },
          exercise: {
            question: 'Quelle force maintient une planète sur son orbite autour du Soleil ?',
            answer: 'La force gravitationnelle exercée par le Soleil.'
          },
          equationDetails: [
            {
              title: 'Loi de gravitation universelle',
              formula: 'F = GMm/r²',
              explanation: 'Deux masses ponctuelles s’attirent avec une force dirigée selon la droite qui les relie. Pour une distribution sphérique, la formule s’applique à l’extérieur en remplaçant la distribution par sa masse totale au centre.',
              parameters: 'F : norme de la force (N) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² ; M, m : masses (kg) ; r : distance entre leurs centres (m).',
              example: 'À la surface terrestre, une masse m = 1,0 kg subit F ≈ GMₑm/Rₑ² avec Mₑ = 5,97 × 10²⁴ kg et Rₑ = 6,37 × 10⁶ m.',
              result: 'F ≈ 9,82 N.'
            },
            {
              title: 'Troisième loi de Kepler',
              formula: 'T²/a³ = constante',
              explanation: 'Pour des corps orbitant autour du même astre central dominant, le carré de la période est proportionnel au cube du demi-grand axe. Pour une masse centrale M et des masses orbitales négligeables devant M, la constante vaut 4π²/(GM).',
              parameters: 'T : période orbitale (s) ; a : demi-grand axe (m) ; la constante dépend de la masse centrale M et vaut 4π²/(GM) dans l’approximation képlérienne.',
              example: 'Autour du Soleil, si a passe de 1 UA à 2 UA, T₂ = T₁ × (2)³⁄². En prenant T₁ = 1 an, T₂ ≈ 2,83 ans.',
              result: 'La période orbitale est environ 2,83 ans.'
            },
            {
              title: 'Vitesse sur une orbite circulaire',
              formula: 'v = √(GM/r)',
              explanation: 'Cette vitesse s’obtient en égalant l’accélération centripète à l’accélération gravitationnelle. Elle vaut pour une orbite circulaire autour d’une masse centrale M, en négligeant les autres corps.',
              parameters: 'v : vitesse orbitale (m·s⁻¹) ; G : constante gravitationnelle ; M : masse centrale (kg) ; r : rayon orbital depuis le centre (m).',
              example: 'Si r est multiplié par 4 à M constant, v₂/v₁ = √(r₁/(4r₁)).',
              result: 'La vitesse circulaire est divisée par 2.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Newton’s Law of Universal Gravitation', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation' },
            { title: 'OpenStax University Physics, vol. 1 — Kepler’s Laws of Planetary Motion', url: 'https://openstax.org/books/university-physics-volume-1/pages/13-5-keplers-laws-of-planetary-motion' }
          ]
        }
      },
      {
        id: 'etoiles',
        title: 'Étoiles et évolution stellaire',
        field: 'Astrophysique · intermédiaire',
        summary: 'Naissance, structure, types spectraux, durées de vie et évolution jusqu’aux naines blanches, étoiles à neutrons ou trous noirs.',
        lesson: {
          sections: [
            'Une étoile se forme par effondrement d’une région dense d’un nuage moléculaire. Quand son cœur devient assez chaud, la fusion de l’hydrogène démarre : l’étoile entre sur la séquence principale, où elle passe la majeure partie de sa vie. L’équilibre hydrostatique est un équilibre local entre le gradient de pression, dirigé vers l’extérieur, et la gravitation, dirigée vers le centre ; ce n’est pas un équilibre entre fusion et gravité prises comme deux forces ponctuelles.',
            'Dans le cœur, l’hydrogène fusionne en hélium, principalement par la chaîne proton-proton dans les étoiles de masse proche ou inférieure à celle du Soleil, et avec une contribution croissante du cycle CNO dans les étoiles plus chaudes et massives. L’énergie produite est transportée vers l’extérieur puis rayonnée. La luminosité, le rayon et la température effective sont liés par la loi de Stefan-Boltzmann. Les équations de structure ci-dessous expriment, dans le modèle sphérique, l’équilibre de pression et l’accumulation de masse.',
            'Les classes spectrales O, B, A, F, G, K et M classent les étoiles selon leur spectre et leur température de surface, des plus chaudes (O) aux plus froides (M). Elles ne sont pas les étapes successives d’une vie. « Géante rouge » décrit un stade évolutif ; « naine blanche », « étoile à neutrons » et « trou noir » désignent des résidus. La couleur seule ne permet donc pas de prédire la fin d’une étoile.',
            'La masse contrôle fortement la durée de vie : une étoile massive a davantage de combustible, mais sa luminosité et son rythme de fusion sont beaucoup plus élevés. Ordres de grandeur de durée sur la séquence principale, d’après des modèles stellaires : type O5, environ 40 M☉, 1 million d’années ; B0, 16 M☉, 10 millions d’années ; A0, 3,3 M☉, 500 millions d’années ; F0, 1,7 M☉, 2,7 milliards d’années ; G0, 1,1 M☉, 9 milliards d’années ; K0, 0,8 M☉, 14 milliards d’années ; M0, 0,4 M☉, 200 milliards d’années. Ce sont des valeurs représentatives, pas une table universelle : composition, masse exacte et modèle modifient les résultats. Les naines rouges les moins massives peuvent vivre jusqu’à environ 14 000 milliards d’années ; l’Univers étant âgé d’environ 13,8 milliards d’années, aucune n’a encore achevé toute son évolution prévue.',
            'Le Soleil, étoile de type G, a environ 4,6 milliards d’années et devrait rester sur la séquence principale encore environ 5 milliards d’années. Après l’épuisement de l’hydrogène central, son cœur se contractera tandis que ses couches externes gonfleront : il deviendra une géante rouge, puis éjectera une partie de son enveloppe. Le gaz éjecté peut former une nébuleuse planétaire ; le cœur résiduel deviendra une naine blanche, principalement composée de carbone et d’oxygène, qui se refroidira lentement. Une naine blanche stable ne dépasse pas la limite de Chandrasekhar, proche de 1,4 M☉. Le Soleil ne finira pas en supernova ni en trou noir.',
            'Les étoiles suffisamment massives peuvent poursuivre la fusion des éléments dans des couches successives jusqu’à former un cœur riche en fer. La fusion du fer ne fournit plus l’énergie nécessaire pour soutenir le cœur : celui-ci s’effondre et l’étoile peut subir une supernova par effondrement du cœur. Le résidu compact est une étoile à neutrons si la matière du cœur peut être soutenue par la matière nucléaire dense ; si le résidu est trop massif, l’effondrement peut former un trou noir. Les limites dépendent des modèles, de la perte de masse et d’éventuelles interactions dans un système binaire : il n’existe pas de correspondance exacte et universelle entre masse initiale et résidu final. Une étoile à neutrons peut être observée comme pulsar si son rayonnement balaie périodiquement notre ligne de visée.',
            'Un trou noir stellaire est un objet dont l’horizon des événements délimite la région d’où aucun signal ne peut ressortir. Pour un trou noir idéal, non chargé et non rotatif (solution de Schwarzschild), le rayon de cet horizon est Rₛ = 2GM/c². Il vaut environ 2,95 km par masse solaire. C’est un rayon, non un diamètre, et l’horizon n’est pas une surface matérielle. Cette formule n’est pas le rayon d’une étoile ordinaire ni la description complète d’un trou noir en rotation. À grande distance, le champ gravitationnel dépend de la masse comme celui de tout autre objet de même masse : un trou noir n’aspire pas toute matière environnante.',
            'Les astronomes étudient les étoiles par leur spectre, leur luminosité, leur température, leur distance et leur évolution dans le diagramme de Hertzsprung-Russell. La luminosité est la puissance totale émise par l’étoile ; le flux est la puissance reçue par unité de surface et diminue comme le carré de la distance.'
          ],
          formula: {
            label: 'STRUCTURE STELLAIRE ET RAYON DE SCHWARZSCHILD',
            text: 'dP/dr = −G Mᵣρ/r²  |  dMᵣ/dr = 4πr²ρ  |  L = 4πR²σTₑff⁴  |  tₘₛ ≈ 10¹⁰ ans × (M/M☉)/(L/L☉)  |  F = L/(4πd²)  |  Rₛ = 2GM/c² ≈ 2,95 km × (M/M☉)'
          },
          equationDetails: [
            {
              title: 'Équilibre hydrostatique',
              formula: 'dP/dr = −G Mᵣρ/r²',
              explanation: 'Dans une étoile sphérique stable, la pression augmente vers le centre pour soutenir les couches contre la gravitation. Le signe négatif indique que la pression décroît quand le rayon r augmente.',
              parameters: 'P : pression (Pa) ; r : distance au centre (m) ; Mᵣ : masse contenue à l’intérieur du rayon r (kg) ; ρ : masse volumique locale (kg·m⁻³) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻².',
              example: 'Dans un point d’un modèle stellaire, prenons r = 10⁹ m, Mᵣ = 10³⁰ kg et ρ = 10⁵ kg·m⁻³. Alors dP/dr = −(6,67430 × 10⁻¹¹ × 10³⁰ × 10⁵)/(10⁹)².',
              result: 'Le gradient vaut environ −6,67 × 10⁶ Pa·m⁻¹ : la pression diminue vers l’extérieur à ce point.'
            },
            {
              title: 'Masse contenue dans une étoile sphérique',
              formula: 'dMᵣ/dr = 4πr²ρ',
              explanation: 'Une mince coquille sphérique de rayon r et d’épaisseur dr a pour volume environ 4πr²dr. Sa masse vaut donc ρ fois ce volume ; l’équation exprime la masse ajoutée quand on augmente légèrement r.',
              parameters: 'Mᵣ : masse à l’intérieur de r (kg) ; r : rayon mesuré depuis le centre (m) ; ρ : masse volumique de la coquille (kg·m⁻³). La dérivée dMᵣ/dr s’exprime en kg·m⁻¹.',
              example: 'Pour une coquille située à r = 10⁸ m et de masse volumique ρ = 10⁵ kg·m⁻³, dMᵣ/dr = 4π × (10⁸)² × 10⁵.',
              result: 'La masse augmente d’environ 1,26 × 10²² kg par mètre de rayon à cet endroit.'
            },
            {
              title: 'Luminosité et température effective',
              formula: 'L = 4πR²σTₑff⁴',
              explanation: 'C’est la loi de Stefan-Boltzmann appliquée à une étoile sphérique : la puissance émise par unité de surface vaut σTₑff⁴, puis on la multiplie par la surface totale 4πR². Tₑff est la température d’un corps noir qui émettrait le même flux surfacique que l’étoile.',
              parameters: 'L : luminosité, puissance totale rayonnée (W) ; R : rayon de l’étoile (m) ; σ = 5,670374419 × 10⁻⁸ W·m⁻²·K⁻⁴ : constante de Stefan-Boltzmann ; Tₑff : température effective (K).',
              example: 'Pour le Soleil, prenons R = 6,96 × 10⁸ m et Tₑff = 5 772 K. L = 4π(6,96 × 10⁸)² × (5,670374419 × 10⁻⁸) × 5 772⁴.',
              result: 'On obtient L ≈ 3,83 × 10²⁶ W, proche de la luminosité solaire mesurée.'
            },
            {
              title: 'Durée de vie sur la séquence principale',
              formula: 'tₘₛ ≈ 10¹⁰ ans × (M/M☉)/(L/L☉)',
              explanation: 'Cette estimation compare la quantité de combustible disponible, proportionnelle à la masse M, au rythme auquel il est consommé, lié à la luminosité L. Elle donne un ordre de grandeur de la durée de fusion de l’hydrogène au cœur, pas la durée totale incluant les phases de géante et de résidu.',
              parameters: 'tₘₛ : durée sur la séquence principale (ans) ; M : masse de l’étoile ; L : sa luminosité ; M☉ et L☉ : masse et luminosité du Soleil. Les rapports M/M☉ et L/L☉ sont sans unité. La valeur 10¹⁰ ans est une normalisation approximative pour le Soleil.',
              example: 'Pour une étoile modèle de masse M = 2 M☉ et de luminosité L = 16 L☉, tₘₛ ≈ 10¹⁰ × 2/16 ans.',
              result: 'La durée estimée est d’environ 1,25 × 10⁹ ans, soit 1,25 milliard d’années.'
            },
            {
              title: 'Luminosité et flux reçu',
              formula: 'F = L/(4πd²)',
              explanation: 'Si la source rayonne de façon isotrope et que la lumière se propage sans absorption, sa puissance se répartit sur une sphère de rayon d. L’aire de cette sphère est 4πd² ; le flux diminue donc comme l’inverse du carré de la distance.',
              parameters: 'F : flux reçu, puissance par unité de surface (W·m⁻²) ; L : luminosité intrinsèque de la source (W) ; d : distance à la source (m).',
              example: 'À la distance moyenne Terre-Soleil d ≈ 1,496 × 10¹¹ m, avec L☉ ≈ 3,83 × 10²⁶ W, F = 3,83 × 10²⁶/[4π(1,496 × 10¹¹)²].',
              result: 'On trouve environ 1,36 × 10³ W·m⁻², soit 1,36 kW·m⁻², avant les effets de l’atmosphère terrestre.'
            },
            {
              title: 'Rayon de Schwarzschild',
              formula: 'Rₛ = 2GM/c²',
              explanation: 'Pour un trou noir idéal, non chargé et non rotatif, cette solution de la relativité générale donne le rayon de l’horizon des événements. L’horizon est une frontière causale, pas une surface matérielle ; Rₛ est un rayon, et non un diamètre.',
              parameters: 'Rₛ : rayon de l’horizon (m) ; G = 6,67430 × 10⁻¹¹ m³·kg⁻¹·s⁻² ; M : masse du trou noir (kg) ; c = 299 792 458 m·s⁻¹ : vitesse de la lumière dans le vide. Pour M = M☉, Rₛ ≈ 2,95 km.',
              example: 'Pour M = 10 M☉, Rₛ ≈ 2,95 km × 10.',
              result: 'Le rayon est d’environ 29,5 km ; le diamètre correspondant est d’environ 59 km.'
            }
          ],
          example: {
            statement: 'Quel serait le rayon de Schwarzschild d’un trou noir non rotatif de 10 M☉ ?',
            calculation: 'On utilise Rₛ ≈ 2,95 km × (M/M☉). Pour M = 10 M☉, Rₛ ≈ 2,95 × 10 km = 29,5 km.',
            answer: 'Le rayon de l’horizon serait d’environ 29,5 km, soit un diamètre d’environ 59 km.'
          },
          exercise: {
            question: 'Estimer le rayon de Schwarzschild d’un trou noir non rotatif de 4 M☉.',
            answer: 'Rₛ ≈ 2,95 km × 4 = 11,8 km. Cette estimation utilise le modèle de Schwarzschild, pour un objet non chargé et non rotatif.'
          },
          sources: [
            { title: 'NASA — Star Basics', url: 'https://science.nasa.gov/universe/stars/' },
            { title: 'NASA — Star Types', url: 'https://science.nasa.gov/universe/stars/types/' },
            { title: 'OpenStax Astronomy 2e — Lifetimes on the Main Sequence', url: 'https://openstax.org/books/astronomy-2e/pages/22-1-evolution-from-the-main-sequence-to-red-giants' },
            { title: 'OpenStax Astronomy 2e — The Death of Low-Mass Stars', url: 'https://openstax.org/books/astronomy-2e/pages/23-1-the-death-of-low-mass-stars' },
            { title: 'OpenStax Astronomy 2e — Evolution of Massive Stars', url: 'https://openstax.org/books/astronomy-2e/pages/23-2-evolution-of-massive-stars-an-explosive-finish' },
            { title: 'OpenStax Astronomy 2e — Black Holes and Schwarzschild radius', url: 'https://openstax.org/books/astronomy-2e/pages/24-5-black-holes' }
          ]
        }
      },
      {
        id: 'cosmologie',
        title: 'Galaxies et expansion de l’Univers',
        field: 'Cosmologie · approfondissement',
        summary: 'Décalage vers le rouge, expansion cosmique et histoire de l’Univers.',
        lesson: {
          sections: [
            'À grande échelle, les galaxies s’éloignent les unes des autres dans un Univers en expansion. Le décalage vers le rouge de leur lumière renseigne sur leur vitesse d’éloignement.',
            'La loi de Hubble-Lemaître relie approximativement la vitesse d’éloignement à la distance pour les galaxies proches à l’échelle cosmologique.'
          ],
          formula: {
            label: 'LOI DE HUBBLE-Lemaître',
            text: 'v ≈ H₀d'
          },
          example: {
            statement: 'Avec H₀ = 70 km·s⁻¹·Mpc⁻¹, estimer la vitesse d’éloignement d’une galaxie située à 10 Mpc.',
            calculation: 'v ≈ 70 × 10.',
            answer: 'v ≈ 700 km·s⁻¹.'
          },
          exercise: {
            question: 'Dans ce modèle, que devient la vitesse si la distance double ?',
            answer: 'Elle double, car v est proportionnelle à d.'
          },
          equationDetails: [
            {
              title: 'Loi de Hubble-Lemaître à faible distance cosmologique',
              formula: 'v ≈ H₀d',
              explanation: 'Pour des galaxies suffisamment proches, leur vitesse de récession moyenne est approximativement proportionnelle à leur distance. La relation est une approximation locale ; à grand décalage vers le rouge, il faut utiliser un modèle d’expansion cosmologique, et les vitesses particulières des galaxies ajoutent des écarts.',
              parameters: 'v : vitesse de récession estimée (km·s⁻¹) ; H₀ : constante de Hubble actuelle (km·s⁻¹·Mpc⁻¹) ; d : distance (Mpc). La valeur de H₀ dépend des méthodes et données utilisées.',
              example: 'Avec la valeur pédagogique H₀ = 70 km·s⁻¹·Mpc⁻¹ et d = 10 Mpc : v ≈ 70 × 10.',
              result: 'v ≈ 700 km·s⁻¹ dans cette approximation locale.'
            }
          ],
          sources: [
            { title: 'NASA — The Universe Is Expanding Faster These Days', url: 'https://science.nasa.gov/universe/the-universe-is-expanding-faster-these-days-and-dark-energy-is-responsible-so-what-is-dark-energy/' },
            { title: 'NASA — Galaxy Basics', url: 'https://science.nasa.gov/universe/galaxies/' }
          ]
        }
      }
    ],
    deepCourses: [
      {
        title: 'Cosmologie des particules',
        href: 'cosmologie-particules.html',
        sections: [
          {
            anchor: 'introduction',
            title: 'La cosmologie des particules'
          },
          {
            anchor: 'modele-cosmologique',
            title: 'Le modèle standard de la cosmologie'
          },
          {
            anchor: 'modele-particules',
            title: 'Le modèle standard des particules'
          },
          {
            anchor: 'expansion-redshift',
            title: 'Expansion et décalage vers le rouge'
          },
          {
            anchor: 'densite-critique',
            title: 'Densité critique et paramètres'
          },
          {
            anchor: 'histoire-thermique',
            title: 'L’histoire thermique de l’Univers'
          },
          {
            anchor: 'nucleosynthese',
            title: 'La nucléosynthèse primordiale'
          },
          {
            anchor: 'fond-diffus',
            title: 'Recombinaison et fond diffus'
          },
          {
            anchor: 'matiere-noire',
            title: 'La matière noire'
          },
          {
            anchor: 'energie-noire',
            title: 'L’énergie noire'
          },
          {
            anchor: 'plasma-quark-gluon',
            title: 'Le plasma quark-gluon'
          },
          {
            anchor: 'neutrinos-cosmologiques',
            title: 'Les neutrinos cosmologiques'
          },
          {
            anchor: 'baryogenese',
            title: 'La baryogenèse'
          },
          {
            anchor: 'inflation',
            title: 'L’inflation'
          },
          {
            anchor: 'exercices',
            title: 'S’entraîner'
          },
          {
            anchor: 'sources',
            title: 'Sources'
          }
        ]
      }
    ]
  },
  {
    id: 'astrophysique-hautes-energies',
    title: 'Astrophysique des hautes énergies',
    note: 'Rayons X et gamma, rayons cosmiques, pulsars, trous noirs et sursauts : observer l’Univers au-delà du visible. Un cours approfondi en quinze sections, avec exercices et sources vérifiées.',
    chapters: [
      {
        id: 'astro-introduction',
        title: 'Le spectre des hautes énergies',
        field: 'Cours approfondi',
        summary: 'Au-delà du visible : de l’électronvolt au téraélectronvolt',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La lumière se range dans un spectre continu, des ondes radio aux rayons gamma. Par convention, les <strong>rayons X</strong> couvrent les longueurs d’onde comprises entre 0,01 nm et 10 nm ; les <strong>rayons gamma</strong>, celles qui ne dépassent pas 0,01 nm (OpenStax, <em>Astronomy</em> 2e, § 5.2). Le mot « gamma » leur vient de ce qu’ils furent la troisième radiation repérée dans la désintégration des noyaux radioactifs : ils portent beaucoup d’énergie et peuvent endommager les tissus vivants. Dans le ciel, ces photons ne sont pas des curiosités de laboratoire : ils traduisent des températures de millions de degrés, des champs magnétiques extrêmes ou des particules lancées près de la vitesse de la lumière.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour comparer des sources, l’énergie des photons s’exprime en <strong>électronvolts</strong> (eV) plutôt qu’en joules : 1 eV est l’énergie qu’un électron acquiert en franchissant une tension d’un volt, soit 1,602 × 10⁻¹⁹ J. On emploie le kiloélectronvolt (keV) pour les rayons X, le mégaelectronvolt (MeV) et le gigaelectronvolt (GeV) pour les rayons gamma, le téraélectronvolt (TeV) pour les particules les plus énergétiques. L’énergie d’un photon est proportionnelle à sa fréquence et inversement proportionnelle à sa longueur d’onde (OpenStax, <em>University Physics</em> vol. 3, § 6.1 et § 8.5).</p>\n<div class="formula-block"><span class="formula-label">ÉNERGIE DU PHOTON</span><math class="mathml-display" display="block" aria-label="Énergie du photon E égale h fois f égale h c divisé lambda"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>f</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E : énergie du photon (J ou eV) ; h : constante de Planck, 6,626 × 10⁻³⁴ J·s ; f : fréquence (Hz) ; c : vitesse de la lumière dans le vide, 3,00 × 10⁸ m·s⁻¹ ; λ : longueur d’onde (m). Le produit hc vaut 1 240 eV·nm, d’où le raccourci λ (nm) ≈ 1 240 / E (eV), utilisé tout au long de ce cours (OpenStax, <em>University Physics</em> vol. 3, § 8.5).</p>\n<div class="worked-result"><strong>EXEMPLE · UN PHOTON X DE 6 keV</strong><span class="math">E = 6 keV = 6 000 eV</span><span class="math">λ ≈ 1 240 / 6 000 ≈ 0,21 nm</span><span class="math">E = 6 000 × 1,602 × 10⁻¹⁹ ≈ 9,6 × 10⁻¹⁶ J</span></div>\n<div class="callout"><strong>Trois fenêtres, une même physique</strong><p>Un photon de 6 keV (0,21 nm) appartient au domaine des rayons X ; des photons de MeV à GeV sont des rayons gamma ; enfin les <strong>rayons cosmiques</strong> sont des <em>particules</em> — noyaux et électrons — dont l’énergie va bien au-delà (sections 05 et 06). L’astrophysique des hautes énergies étudie les trois ensemble, car une même source — un trou noir en accrétion, un reste de supernova, un jet de galaxie — produit souvent les trois à la fois.</p></div>'
        }
      },
      {
        id: 'astro-telescopes',
        title: 'Observer au-dessus de l’atmosphère',
        field: 'Cours approfondi',
        summary: 'Une atmosphère protectrice… et opaque',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’atmosphère arrête les rayons X : ils « sont stoppés par le grand nombre d’atomes de l’atmosphère terrestre avec lesquels ils interagissent », et l’astronomie X n’a pu se développer qu’après l’envoi d’instruments au-dessus d’elle (OpenStax, <em>Astronomy</em> 2e, § 5.2). Les rayons gamma venant du ciel subissent le même sort : ils ne s’étudient directement que depuis l’espace. Le centre de rayons X Chandra le confirme : les rayons X d’origine spatiale sont presque entièrement absorbés par l’atmosphère, si bien que l’astronomie X n’a commencé qu’avec les fusées et les satellites du milieu du XX<sup>e</sup> siècle (Chandra X-ray Center, <em>X-ray 101</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux conséquences techniques. D’abord, les télescopes X se placent en orbite : Chandra observe depuis l’espace et renvoie ses données via le réseau Deep Space Network. Ensuite, leurs miroirs recueillent les photons en <strong>incidence rasante</strong>, sous de très faibles angles, plutôt que de face (Chandra X-ray Center, <em>X-ray 101</em>). La discipline a progressé très vite : en 36 ans, la sensibilité de l’astronomie X s’est améliorée d’un facteur 100 millions (Chandra X-ray Center, <em>X-ray 101</em>).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Quelques instruments du ciel des hautes énergies (détails vérifiés en section 15)</caption>\n<thead><tr><th scope="col">Instrument</th><th scope="col">Domaine</th><th scope="col">Repère vérifié</th></tr></thead>\n<tbody>\n<tr><th scope="row">CGRO (NASA, 1991)</th><td>Rayons gamma</td><td>Plus de 16 tonnes ; ≈ 1 sursaut détecté par jour</td></tr>\n<tr><th scope="row">BeppoSAX (1996)</th><td>X et gamma</td><td>Premier après-sursaut X en février 1997, 8 h après l’événement</td></tr>\n<tr><th scope="row">Swift</th><td>X et ultraviolet</td><td>Repérage automatique de l’après-sursaut en quelques minutes</td></tr>\n<tr><th scope="row">Fermi (GBM / LAT)</th><td>Rayons gamma</td><td>GBM : ≈ 240 sursauts/an, de 8 keV à 40 MeV ; LAT : ≈ 10/an, de 30 MeV à 300 GeV</td></tr>\n<tr><th scope="row">Pierre Auger (Argentine)</th><td>Rayons cosmiques</td><td>215 030 événements au-dessus de 2,5 × 10¹⁸ eV en 14 ans ; détection hybride</td></tr>\n<tr><th scope="row">IceCube (pôle Sud)</th><td>Neutrinos</td><td>1 km³ de glace, plus de 5 000 modules optiques jusqu’à 2,5 km de profondeur</td></tr>\n</tbody>\n</table>\n</div>\n<p class="table-note" style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Au sol, les télescopes gamma (HAWC, H.E.S.S., MAGIC, VERITAS) et les réseaux de surface comme Pierre Auger ne reçoivent pas directement la particule d’origine : ils observent les effets secondaires produits dans l’atmosphère — gerbes de particules et lumière émise par ces gerbes (NASA/HEASARC ; IceCube, liste des observatoires ayant participé à l’identification de la source de TXS 0506+056).</p>\n<div class="callout callout-coral"><strong>Protéger, c’est aussi masquer</strong><p>Le même rideau d’atmosphère qui nous épargne les rayons gamma cache au sol la majeure partie du ciel des hautes énergies : protection et obstacle sont les deux faces d’un même fait physique, d’où la nécessité d’installer les détecteurs X et gamma dans l’espace (OpenStax, <em>Astronomy</em> 2e, § 5.2 ; Chandra X-ray Center).</p></div>'
        }
      },
      {
        id: 'astro-plasmas-chauds',
        title: 'Chaleur extrême et rayons X',
        field: 'Cours approfondi',
        summary: 'Quand des millions de degrés deviennent visibles en X',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">« Des températures très élevées (des millions de degrés Celsius) produisent des rayons X » : c’est la règle de premier niveau de l’astronomie X (Chandra X-ray Center, <em>Field Guide</em>). Un gaz chauffé émet un spectre de corps noir dont le maximum se déplace vers les courtes longueurs d’onde quand la température monte — c’est la loi de Wien, déjà mobilisée dans le cours de physique quantique et atomique (OpenStax, <em>University Physics</em> vol. 3, § 6.1). L’énergie typique des chocs dans le gaz, elle, vaut k<sub>B</sub>T : elle donne immédiatement l’échelle, en keV, des photons émis.</p>\n<div class="formula-block"><span class="formula-label">MAXIMUM DE WIEN ET ÉNERGIE THERMIQUE</span><math class="mathml-display" display="block" aria-label="Longueur d’onde du maximum égale b divisé par T, et énergie thermique égale k indice B fois T"><mtable><mtr><mtd><mrow><msub><mi>λ</mi><mtext>max</mtext></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi>E</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mtd></mtr></mtable></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> λ<sub>max</sub> : longueur d’onde du maximum (m) ; b = 2,898 × 10⁻³ m·K (loi de Wien, OpenStax vol. 3, § 6.1) ; T : température (K) ; k<sub>B</sub> = 1,381 × 10⁻²³ J·K⁻¹, soit 8,617 × 10⁻⁵ eV·K⁻¹ (constante de Boltzmann, CODATA) ; E : énergie thermique (J ou eV).</p>\n<div class="worked-result"><strong>EXEMPLE · UN DISQUE D’ACCRÉTION À 10⁸ K</strong><span class="math">k<sub>B</sub>T ≈ 8,6 × 10⁻⁵ × 10⁸ eV ≈ 8,6 keV</span><span class="math">λ<sub>max</sub> = 2,898 × 10⁻³ / 10⁸ ≈ 2,9 × 10⁻¹¹ m ≈ 0,03 nm</span><span class="math">=> rayons X durs</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Dans les binaires de rayons X, voici le scénario : le frottement interne de la matière qui tourbillonne vers le centre « la chauffe à des températures de l’ordre de 100 millions de kelvins », et cette matière incandescente émet des rayons X qui scintillent (OpenStax, <em>Astronomy</em> 2e, § 24.6). À l’inverse, lorsqu’une étoile massive explose, son cœur devient si dense que la lumière y reste piégée : c’est par ses <strong>neutrinos</strong>, et non par sa lumière, que l’événement se révèle.</p>\n<div class="callout"><strong>SN 1987A, observée par ses neutrinos</strong><p>Le cœur de la supernova affichait une température d’environ 200 milliards de kelvins. Les détecteurs souterrains ont capté 19 neutrinos seulement, issus des quelque 10⁵⁸ émis par l’événement — soit environ 30 milliards de neutrinos par centimètre carré de surface terrestre. Les neutrinos interagissent si rarement avec la matière qu’ils traversent une étoile entière là où la lumière reste enfermée (OpenStax, <em>Astronomy</em> 2e, § 23.3 ; IceCube sur la faible probabilité d’interaction).</p></div>'
        }
      },
      {
        id: 'astro-mecanismes',
        title: 'Freinage, raies et diffusion Compton',
        field: 'Cours approfondi',
        summary: 'Trois façons de fabriquer un photon X',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Le freinage (Bremsstrahlung).</strong> Quand un électron rapide frôle un noyau — le centre Chandra cite la collision haute vitesse entre un électron et un proton —, son mouvement change brusquement : il décelère et l’énergie perdue part en photon. C’est le « rayonnement de freinage », du mot allemand <em>Bremsstrahlung</em>, l’un des principaux mécanismes d’émission des gaz chauds (Chandra X-ray Center, <em>X-rays &amp; Light</em> et <em>Field Guide</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Les raies atomiques.</strong> Un photon produit à une énergie précise dessine une raie. Lorsqu’un électron comble une lacune d’une couche interne, l’atome se réémet à une énergie propre à l’élément : c’est la fluorescence. Autour des trous noirs, des photons X arrachent un électron interne à des atomes de fer présents dans la poussière voisine, et la raie qui en résulte livre un diagnostic direct du matériau (Chandra X-ray Center, <em>Field Guide</em> ; pour les séries K, K<sub>α</sub> et K<sub>β</sub>, OpenStax, <em>University Physics</em> vol. 3, § 8.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>La diffusion Compton.</strong> Un photon qui se diffuse sur un électron en lui cédant une partie de son énergie ressort plus long : c’est l’effet Compton, dont le décalage dépend seulement de l’angle de diffusion (OpenStax, <em>University Physics</em> vol. 3, § 6.3 ; cours approfondi de physique quantique, section 03).</p>\n<div class="formula-block"><span class="formula-label">DÉCALAGE COMPTON</span><math class="mathml-display" display="block" aria-label="Delta lambda égale h divisé par masse de l’électron fois c, fois ouvert parenthèse un moins cosinus theta, virgule lambda indice c égale deux virgule quatre trois picomètres"><mrow><mi mathvariant="normal">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mo>cos</mo><mi>θ</mi><mo>)</mo></mrow><mo>,</mo><mspace width="0.8em"></mspace><msub><mi>λ</mi><mi>c</mi></msub><mo>=</mo><mn>2.43</mn><mspace width="0.3em"></mspace><mtext>pm</mtext></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> Δλ : allongement du photon (m) ; h : constante de Planck ; m<sub>e</sub> : masse de l’électron, 9,109 × 10⁻³¹ kg ; c : vitesse de la lumière ; θ : angle de diffusion ; λ<sub>c</sub> = h/(m<sub>e</sub>c) = 2,43 pm est la longueur d’onde de Compton de l’électron (OpenStax vol. 3, § 6.3).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>La diffusion Compton inverse.</strong> Si l’électron emporte beaucoup plus d’énergie que le photon, l’échange s’inverse : « si les électrons ont plus d’énergie que les photons, la collision peut augmenter l’énergie des photons ». Ce processus, important autour des trous noirs où la matière est chauffée à des millions de degrés, transforme des photons doux en photons X ou gamma (Chandra X-ray Center, <em>Field Guide</em> et <em>X-rays &amp; Light</em>).</p>\n<div class="worked-result"><strong>EXEMPLE · UN PHOTON DE 100 keV REBROUSSÉ CHEMIN</strong><span class="math">θ = 180° => Δλ = 2λ<sub>c</sub> = 4,86 pm</span><span class="math">λ = 1 240 / 100 000 = 0,0124 nm</span><span class="math">λ′ ≈ 0,0173 nm => E′ ≈ 72 keV</span></div>\n<div class="callout callout-coral"><strong>Chercher la source, c’est choisir son mécanisme</strong><p>Un spectre continu de gaz chaud (freinage), des raies fines (fluorescence), un spectre qui décroît lentement (synchrotron, section 07) : l’analyse spectrale distingue ces mécanismes, comme les empreintes digitales d’un crime selon l’image du centre Chandra — les astronomes parlent de spectres, « les empreintes digitales » de l’Univers (Chandra X-ray Center, <em>X-ray 101</em>).</p></div>'
        }
      },
      {
        id: 'astro-rayons-cosmiques',
        title: 'Les rayons cosmiques',
        field: 'Cours approfondi',
        summary: 'Des particules, pas de la lumière',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les rayons cosmiques furent découverts en 1911 par Victor Hess, qui embarqua ses instruments dans des ballons pour montrer que des particules très rapides arrivent du ciel — un vol de 1912 atteignait l’altitude de 5,3 km (OpenStax, <em>Astronomy</em> 2e, § 20.4). Le mot « rayon » est trompeur : ce sont des <strong>particules</strong>, presque le même mélange que le gaz interstellaire — près de 90 % de protons d’hydrogène dépouillés, environ 9 % d’hélium et de noyaux plus lourds, et environ 1 % de particules de la masse de l’électron (dont 10 à 20 % de positrons, antimatière). Des vitesses proches de 90 % de c sont courantes (OpenStax, § 20.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Deux signatures. D’abord, le lithium, le béryllium et le bore y sont bien plus abondants que dans les étoiles : ils naissent quand des noyaux de carbone, d’azote et d’oxygène percutent des protons interstellaires et se fragmentent. Ensuite, leur direction d’arrivée n’apprend presque rien : les champs magnétiques courbent leurs trajectoires, et de basses énergies peuvent tourner plusieurs fois autour de la Terre avant d’entrer dans l’atmosphère (OpenStax, § 20.4). La force en jeu suit la loi de Lorentz (OpenStax, <em>College Physics</em> 2e, § 22.4).</p>\n<div class="formula-block"><span class="formula-label">FORCE MAGNÉTIQUE SUR UNE PARTICULE CHARGÉE</span><math class="mathml-display" display="block" aria-label="Force magnétique F égale q fois v fois B fois sinus de theta"><mrow><mi>F</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mo>sin</mo><mi>θ</mi></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> F : force magnétique (N) ; q : charge de la particule (C) ; v : vitesse (m·s⁻¹) ; B : champ magnétique (T) ; θ : angle entre v et B. Le champ magnétique terrestre vaut environ 5 × 10⁻⁵ T (OpenStax, <em>College Physics</em> 2e, § 22.4).</p>\n<div class="worked-result"><strong>EXEMPLE · UN PROTON DE 0,9c DANS LE CHAMP TERRESTRE</strong><span class="math">v = 0,9c ≈ 2,7 × 10⁸ m·s⁻¹</span><span class="math">F = 1,6 × 10⁻¹⁹ × 2,7 × 10⁸ × 5 × 10⁻⁵</span><span class="math">F ≈ 2,2 × 10⁻¹⁵ N (θ = 90°)</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Origine.</strong> Les champs magnétiques interstellaires retiennent tous les rayons cosmiques sauf les plus énergétiques : l’essentiel semble donc produit dans la Galaxie, à l’exception des plus énergétiques, qui peuvent s’échapper — et être nés ailleurs. La fragmentation des noyaux donne une horloge : il faut environ 30 tours de la Galaxie, soit 3 à 10 millions d’années à près de la vitesse de la lumière, pour accumuler autant de collisions. Le meilleur candidat comme fabrique est l’<strong>explosion de supernova</strong> : le materiel éjecté lance une onde de choc dans le milieu interstellaire ; des particules chargées y sont piégées, rebondissent de part et d’autre du front de choc et gagnent de l’énergie à chaque passage, jusqu’à s’échapper presque à la vitesse de la lumière (OpenStax, § 20.4).</p>\n<div class="callout"><strong>Une énergie comparable à la lumière des étoiles</strong><p>L’énergie déposée par les rayons cosmiques dans l’atmosphère terrestre n’est qu’environ un milliardième de l’énergie solaire reçue — mais elle est du même ordre que l’énergie apportée par la lumière des étoiles : ces particules font partie du bilan énergétique de la Galaxie (OpenStax, § 20.4).</p></div>'
        }
      },
      {
        id: 'astro-spectre-energie',
        title: 'Le spectre et ses hautes énergies',
        field: 'Cours approfondi',
        summary: 'Une chute vertigineuse du flux, et des records inexpliqués',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le flux de rayons cosmiques décroît très rapidement avec l’énergie : plus l’événement est énergétique, plus il est rare. L’observatoire Pierre Auger a mesuré ce spectre au-dessus de 2,5 × 10¹⁸ eV avec 215 030 événements enregistrés sur plus de 14 ans, calibrés par la lumière de fluorescence des gerbes (Pierre Auger Observatory, 2020). Deux accidents structurent la courbe : un assombrissement vers 10¹⁹ eV, lié à la contribution des différents noyaux accélérés, puis une forte atténuation au-dessus de 5 × 10¹⁹ eV, expliquée par l’épuisement des sources les plus puissantes et par l’<strong>effet Greisen–Zatsepin–Kuzmin</strong> (Pierre Auger Observatory, 2020).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Cet effet tient à un fait simple : les particules les plus énergétiques interagissent avec le fond diffus cosmologique de 3 kelvins — le rayonnement de fond cosmique — et perdent de l’énergie en route ; elles ne peuvent donc pas provenir de très loin, seulement « quelques pourcents de l’horizon de l’Univers » (NASA/HEASARC). De même, le champ magnétique galactique est trop faible pour retenir les plus énergétiques, et aucun mécanisme galactique connu ne les accélère : leur origine est probablement extragalactique (NASA/HEASARC).</p>\n<div class="formula-block"><span class="formula-label">CONVERSION D’ÉNERGIE</span><math class="mathml-display" display="block" aria-label="Énergie en joules égale énergie en électronvolts fois 1,602 exposant moins 19 joules par électronvolt"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mtext>eV</mtext></msub><mo>×</mo><mn>1.602</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mspace width="0.3em"></mspace><mtext>J/eV</mtext></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E : énergie en joules ; E<sub>eV</sub> : même énergie en électronvolts ; 1 eV = 1,602 × 10⁻¹⁹ J (CODATA). Le dossier HEASARC donne un repère saisissant : l’événement le plus énergétique détecté, 3 × 10²⁰ eV, équivaut à « environ 12 calories », plus de dix millions de fois l’énergie maximale des grands accélérateurs terrestres prévus ; sept autres événements au-dessus de 10²⁰ eV seulement y sont recensés.</p>\n<div class="worked-result"><strong>EXEMPLE · 3 × 10²⁰ eV</strong><span class="math">E = 3 × 10²⁰ × 1,602 × 10⁻¹⁹ ≈ 48 J</span><span class="math">48 J / 4,184 ≈ 12 calories</span><span class="math">= énergie cinétique d’une masse de 1 kg lancée à ≈ 9,8 m·s⁻¹</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Détection.</strong> Une particule d’arrivée pénètre l’atmosphère et y produit « une cascade de millions de particules secondaires » qui se propagent à la vitesse de la lumière et émettent une lumière de fluorescence, observable depuis le sol ou l’espace : c’est le principe des observatoires hybrides (NASA/HEASARC). Pierre Auger combine des détecteurs de surface — le signal est mesuré à 1 000 m du centre de la gerbe — et des télescopes de fluorescence, l’échelle d’énergie étant fixée par 3 338 événements hybrides de qualité (Pierre Auger Observatory, 2020).</p>\n<div class="callout callout-coral"><strong>Une direction à peine dessinée</strong><p>Au-dessus de 8 × 10¹⁸ eV, Auger observe une première anisotropie : les arrivées ne sont plus tout à fait uniformes sur le ciel. C’est le début de la cartographie des sources — les rayons gamma (photons) et les neutrinos apportant ensuite des repères directionnels nets (section 13).</p></div>'
        }
      },
      {
        id: 'astro-synchrotron',
        title: 'Le rayonnement synchrotron',
        field: 'Cours approfondi',
        summary: 'Des électrons en spirale qui ne heurtent rien',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Au début des accélérateurs de particules, les physiciens ont découvert que des électrons produisent des photons <em>sans collisionner</em> : le champ magnétique les force à tourner en grandes spirales autour de ses lignes de force, et tout mouvement accéléré rayonne. Ce rayonnement synchrotron est aujourd’hui l’une des signatures majeures du ciel des hautes énergies (Chandra X-ray Center, <em>Field Guide</em> et <em>X-rays &amp; Light</em>).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les électrons cosmiques, accélérés par les champs électriques et magnétiques jusqu’à proches de la vitesse de la lumière, produisent ainsi des photons « allant des ondes radio jusqu’aux énergies X et gamma » (Chandra X-ray Center, <em>Field Guide</em>). Le spectre qui en résulte a une forme particulière : il décroît avec l’énergie <em>moins vite</em> que celui d’un gaz chaud — c’est le critère qui permet de distinguer une source non thermique d’un plasma émetteur thermique (section 03), et de révéler la population d’électrons énergétiques ainsi que les champs magnétiques des restes de supernova et des jets (Chandra X-ray Center, <em>Field Guide</em>).</p>\n<div class="callout"><strong>Le jet de M 87, une image au synchrotron</strong><p>Dans la galaxie géante M 87, la lumière que l’on voit du jet « est produite par des électrons qui tournent le long des lignes de champ magnétique du jet, un processus connu sous le nom de rayonnement synchrotron », d’où sa teinte bleutée ; ce jet s’observe simultanément en radio, en lumière visible et en rayons X (OpenStax, <em>Astronomy</em> 2e, § 27.1). Les mêmes ingrédients — électrons relativistes et champ magnétique — éclairent les restes de supernova et les noyaux actifs étudiés en section 12.</p></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le lien avec la section précédente est direct : la force magnétique qui fait tourner les électrons en spirale est celle de la loi de Lorentz F = qvB sin θ, et le même mécanisme <em>retient</em> les rayons cosmiques dans la Galaxie. L’accélération au choc et le rayonnement qui l’accompagne sont les deux versants d’une même physique des plasmas magnétisés.</p>'
        }
      },
      {
        id: 'astro-binaires-x',
        title: 'Binaires de rayons X',
        field: 'Cours approfondi',
        summary: 'Une étoile normale qui nourrit un objet compact',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Une binaire de rayons X est un couple à deux visages : d’un côté une étoile ordinaire, de l’autre un objet effondré — naine blanche, étoile à neutrons ou trou noir. Lorsque l’étoile compagne s’étend en géante rouge ou perd du vent stellaire, sa matière rejoint l’objet compact ; la révolution mutuelle l’empêche d’aller droit au but, et elle tournoie en <strong>disque d’accrétion</strong>. Dans la partie interne de ce disque, la matière tourne si vite que le frottement interne la chauffe à des températures de l’ordre de 100 millions de kelvins : elle émet des rayons X clignotants (OpenStax, <em>Astronomy</em> 2e, § 24.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Ces sources sont invisibles depuis le sol : « les rayons X ne pénètrent pas l’atmosphère terrestre », il faut donc des télescopes spatiaux pour les localiser et les attribuer à un système binaire (OpenStax, <em>Astronomy</em> 2e, § 24.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Cygne X-1, le premier trou noir binaire.</strong> Le système le plus célèbre fut identifié ainsi : la compagne visible, de type spectral O, montre par effet Doppler qu’elle tourne autour d’un objet invisible ; les rayons X qui scintillent trahissent un objet effondré de masse d’environ 21 fois celle du Soleil — trop lourd pour être une naine blanche (toujours inférieure à 1,4 M<sub>☉</sub>) ou une étoile à neutrons (toujours comprise entre 1,4 et 3 M<sub>☉</sub> selon le tableau d’OpenStax) : la conclusion s’impose, un trou noir (OpenStax, <em>Astronomy</em> 2e, § 24.6 et § 23.4).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Candidats trous noirs en binaires (OpenStax, Astronomy 2e, § 24.6, tableau 24.1)</caption>\n<thead><tr><th scope="col">Système</th><th scope="col">Compagne</th><th scope="col">Période (jours)</th><th scope="col">Masse du trou noir (M<sub>☉</sub>)</th></tr></thead>\n<tbody>\n<tr><th scope="row">LMC X-1</th><td>Géante O</td><td>3,9</td><td>10,9</td></tr>\n<tr><th scope="row">Cygne X-1</th><td>Supergéante O</td><td>5,6</td><td>21</td></tr>\n<tr><th scope="row">LMC X-3</th><td>Naine B</td><td>1,7</td><td>7</td></tr>\n<tr><th scope="row">GRS 1915+105</th><td>Géante K</td><td>33,5</td><td>14</td></tr>\n</tbody>\n</table>\n</div>\n<div class="worked-result"><strong>EXEMPLE · POURQUOI PAS UNE ÉTOILE À NEUTRONS ?</strong><span class="math">Masse mesurée (Cygne X-1) ≈ 21 M<sub>☉</sub></span><span class="math">Limite des étoiles à neutrons : M &lt; 3 M<sub>☉</sub> (OpenStax, § 23.4)</span><span class="math">21 ≫ 3 => objet plus lourd que toute naine blanche ou étoile à neutrons</span></div>'
        }
      },
      {
        id: 'astro-pulsars',
        title: 'Pulsars et étoiles à neutrons',
        field: 'Cours approfondi',
        summary: 'Des horloges de dix kilomètres',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Après l’explosion d’une supernova de type II, il ne reste qu’une étoile à neutrons ou un trou noir. L’étoile à neutrons est l’objet le plus dense connu : la gravité en surface y est 10¹¹ fois celle de la Terre, sa structure est faite d’environ 95 % de neutrons, et sa masse, de l’ordre de 10⁵⁷ masses de proton, tient dans un rayon de 10 km (OpenStax, <em>Astronomy</em> 2e, § 23.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En septembre 1967, Jocelyn Bell repère « un bout de gribouillis » — un signal radio d’une régularité extrême, répété exactement toutes les 1,33728 secondes ; la piste d’un signal artificiel (« little green men ») fut écartée quand d’autres sources semblables apparurent. On les appela <strong>pulsars</strong> ; plus de 4 000 sont connus aujourd’hui, avec des périodes allant de un peu plus d’une milliseconde à près de 10 secondes (OpenStax, § 23.4).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le pulsar du centre de la nébuleuse du Crabe — relique de la supernova de 1054, notée par les astronomes chinois — émet ses impulsions 30 fois par seconde, en radio, en visible et en rayons X. Son énergie vient de la <strong>rotation</strong> de l’étoile à neutrons : au fil des années, le pulsar ralentit, les impulsions s’espacent, et le calcul du ralentissement donne directement l’énergie perdue — « même un ralentissement minuscule représente une perte d’énergie immense » (OpenStax, § 23.4).</p>\n<div class="formula-block"><span class="formula-label">MASSE VOLUMIQUE D’UNE ÉTOILE À NEUTRONS</span><math class="mathml-display" display="block" aria-label="Masse volumique rho égale masse M divisé par quatre tiers pi fois R au cube"><mrow><mi>ρ</mi><mo>=</mo><mfrac><mi>M</mi><mrow><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup></mrow></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> ρ : masse volumique (kg·m⁻³) ; M : masse de l’étoile (kg) ; R : rayon (m). Les valeurs du tableau d’OpenStax (§ 23.4) : masse toujours comprise entre 1,4 et 3 M<sub>☉</sub>, rayon 10 km, densité 10¹⁴ g·cm⁻³.</p>\n<div class="worked-result"><strong>EXEMPLE · 1,4 M<sub>☉</sub> DANS 10 km</strong><span class="math">M = 1,4 × 1,99 × 10³⁰ ≈ 2,8 × 10³⁰ kg</span><span class="math">V = 4/3 × π × (10⁴)³ ≈ 4,2 × 10¹² m³</span><span class="math">ρ ≈ 6,6 × 10¹⁷ kg·m⁻³ ≈ 6,6 × 10¹⁴ g·cm⁻³</span></div>\n<div class="callout callout-coral"><strong>Magnétars : le record de champ</strong><p>Une classe d’étoiles à neutrons, les magnétars, affiche des champs « environ 800 trillions de fois plus forts que le champ de la Terre ». En 2004, la rupture de la croûte d’un tel objet (SGR 1806-20) libéra une telle gerbe de radiation qu’un astronaume situé à 0,1 année-lumière aurait reçu une dose mortelle en moins d’une seconde (OpenStax, § 23.4).</p></div>'
        }
      },
      {
        id: 'astro-trous-noirs',
        title: 'Trous noirs et horizons',
        field: 'Cours approfondi',
        summary: 'Quand la vitesse de fuite dépasse celle de la lumière',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Partons d’une expérience de pensée d’OpenStax (<em>Astronomy</em> 2e, § 24.5) : sur Terre, rien ne s’échappe si l’on lance à moins de 11 km·s⁻¹ ; sur le Soleil, il faut 618 km·s⁻¹. Compressez le Soleil jusqu’au diamètre d’une étoile à neutrons (environ 20 km) : la vitesse de fuite atteint la moitié de celle de la lumière. Compressez encore : elle dépasse c, rien ne s’en échappe, ni la lumière. C’est la définition d’un <strong>trou noir</strong>. Si le cœur effondré d’une étoile dépasse environ 3 M<sub>☉</sub>, rien ne peut arrêter cet effondrement (OpenStax, § 24.5).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">La frontière de l’objet s’appelle l’<strong>horizon des événements</strong> : elle ne dépend que de la masse, et ne rétrécit plus une fois formée. Karl Schwarzschild en donna la première solution exacte des équations d’Einstein en 1916, l’année de sa mort ; son nom a été donné au rayon de l’horizon (OpenStax, § 24.5).</p>\n<div class="formula-block"><span class="formula-label">RAYON DE SCHWARZSCHILD</span><math class="mathml-display" display="block" aria-label="Rayon de Schwarzschild R indice S égale deux G M divisé par c au carré"><mrow><msub><mi>R</mi><mi>S</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>G</mi><mi>M</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> R<sub>S</sub> : rayon de l’horizon (m) ; G : constante de gravitation, 6,67 × 10⁻¹¹ N·m²·kg⁻² ; M : masse du trou noir (kg) ; c : vitesse de la lumière. Seul M varie d’un trou noir à l’autre (OpenStax, § 24.5).</p>\n<div class="worked-result"><strong>EXEMPLE · SGR A*, LE TROU NOIR GALACTIQUE</strong><span class="math">M = 4 × 10⁶ M<sub>☉</sub> = 4 × 10⁶ × 1,99 × 10³⁰ kg</span><span class="math">R<sub>S</sub> = 2GM/c² ≈ 1,18 × 10¹⁰ m (calcul OpenStax)</span><span class="math">Soleil : R<sub>S</sub> ≈ 3 km (doublez la masse => 6 km)</span></div>\n<div class="callout"><strong>Pas d’aspirateur cosmique</strong><p>Loin de l’horizon, la gravitation ne dépend que de la masse et de la distance, exactement comme autour du Soleil : un trou noir n’« aspire » pas davantage qu’une étoile de même masse. Ce qui change à l’horizon, c’est l’issue : retourner vers l’extérieur devient impossible, car il faudrait dépasser c (OpenStax, § 24.5).</p></div>'
        }
      },
      {
        id: 'astro-sursauts-gamma',
        title: 'Sursauts gamma',
        field: 'Cours approfondi',
        summary: 'Les explosions les plus lumineuses de l’Univers',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Les sursauts gamma furent découverts par hasard : les satellites Vela, chargés de surveiller les essais nucléaires dans l’espace, détectèrent des éclairs venus de directions aléatoires — la découverte fut publiée en 1973 (OpenStax, <em>Astronomy</em> 2e, § 23.6). Leur répartition, parfaitement isotrope sur le ciel, exclut une origine dans le plan de la Galaxie ; le Compton Gamma-Ray Observatory (lancé en 1991, plus de 16 tonnes) en détectait à peu près un par jour, des durées allant d’une fraction de seconde à plusieurs centaines de secondes (OpenStax, § 23.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">L’Italo-Néerlandais BeppoSAX (1996) changea tout : en février 1997, en 8 heures il localisa un sursaut et repéra une source X qui s’effaçait — le premier <strong>après-sursaut</strong> (position à ≈ 40 secondes d’arc près) ; en mai, le télescope Keck obtenait en 2 jours un spectre montrant un objet distant de 4 milliards d’années-lumière (OpenStax, § 23.6). On distingue aujourd’hui deux familles, selon la durée : <strong>courts</strong> (moins de 2 secondes, souvent une fraction de seconde) et <strong>longs</strong> (plus de 2 secondes, souvent environ une minute) (OpenStax, § 23.6).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Origines.</strong> Les longs naissent de la mort d’une étoile massive rare, qui produit une supernova de type Ibc dotée de jets relativistes ; les courts viennent de la fusion d’une binaire d’étoiles à neutrons — un processus lent qui explique leur présence dans les vieilles galaxies (OpenStax, § 23.6 ; NASA Fermi). Fermi en tire le profil statistique : le GBM détecte ≈ 240 sursauts par an de 8 keV à 40 MeV, le LAT ≈ 10 par an de 30 MeV à 300 GeV, et les sursauts vont jusqu’au décalage vers le rouge 9,4 (NASA Fermi).</p>\n<div class="formula-block"><span class="formula-label">ÉNERGIE ISOTROPE D’UN SURSAUT BRILLANT</span><math class="mathml-display" display="block" aria-label="Énergie égale masse fois c au carré"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> E : énergie (J) ; m : masse convertie (kg) ; c = 3,00 × 10⁸ m·s⁻¹. Pour un sursaut brillant, l’énergie émise en rayons gamma, si l’on suppose une émission dans toutes les directions, « équivaudrait à celle produite si toute la masse d’une étoile semblable au Soleil était soudain convertie en rayonnement pur » — l’obscurité du problème justifie l’hypothèse d’un <strong>faisceau</strong> (jet collimé) qui réduit l’énergie réelle (OpenStax, § 23.6).</p>\n<div class="worked-result"><strong>EXEMPLE · M<sub>☉</sub> c²</strong><span class="math">E = 1,99 × 10³⁰ × (3 × 10⁸)²</span><span class="math">E ≈ 1,8 × 10⁴⁷ J</span><span class="math">90 % de l’énergie des sursauts courts : premières 2 s (NASA Fermi)</span></div>\n<div class="callout callout-coral"><strong>2017 : le jour où tout s’est accordé</strong><p>Depuis 2015, les ondes gravitationnelles s’observent — les premiers événements venaient de fusions de trous noirs. En 2017, des ondes gravitationnelles furent repérées à la même date et au même endroit qu’un sursaut gamma ; la source contenait deux objets de masse d’étoile à neutrons, une « supernova rouge » (kilonova) fut observée, et le matériel éjecté était riche en éléments lourds : la preuve finale de l’origine des sursauts gamma courts (OpenStax, § 23.6).</p></div>'
        }
      },
      {
        id: 'astro-agn-jets',
        title: 'Noyaux actifs et jets',
        field: 'Cours approfondi',
        summary: 'Des trous noirs géants qui lancent des jets',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">En 1963, à l’observatoire de Palomar, Maarten Schmidt résout le puzzle du spectre de la source radio 3C 273 : les raies de Balmer de l’hydrogène y sont décalées vers le rouge au point que l’effet Doppler donnerait une vitesse d’éloignement de 45 000 km·s⁻¹,≈ 15 % de c — une valeur inimaginable pour une étoile. La lumière met 2,5 milliards d’années à nous parvenir, ce qui en fait pourtant l’un des quasars les plus proches ; son jet s’étend sur 200 000 années-lumière (OpenStax, <em>Astronomy</em> 2e, § 27.1).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Pour un objet très distant, la relativité relie décalage et vitesse par la relation donnée par OpenStax (§ 27.1) :</p>\n<div class="formula-block"><span class="formula-label">DÉCALAGE VERS LE ROUGE RELATIVISTE</span><math class="mathml-display" display="block" aria-label="Vitesse sur c égale ouvert crochets z plus un fermé au carré moins un, sur ouvert crochets z plus un fermé au carré plus un"><mrow><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><msup><mrow><mo>(</mo><mi>z</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mrow><msup><mrow><mo>(</mo><mi>z</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Paramètres et unités :</strong> v : vitesse d’éloignement ; c : vitesse de la lumière ; z : décalage vers le rouge, z = Δλ/λ<sub>émission</sub>. Exemple d’OpenStax : pour z = 3, v/c = (4²−1)/(4²+1) = 15/17 = 0,882.</p>\n<div class="worked-result"><strong>EXEMPLE · UNE SOURCE À z = 3</strong><span class="math">z + 1 = 4</span><span class="math">v/c = (16 −1)/(16 +1) = 15/17</span><span class="math">v ≈ 0,88 c ≈ 264 000 km·s⁻¹</span></div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Les jets.</strong> Dans l’elliptique NGC 4261 (amas de la Vierge,≈ 100 millions d’années-lumière), un trou noir de 1,2 milliard de masses solaires est entouré d’un anneau de poussière et de gaz ; les observations radio montrent deux jets émerger perpendiculairement à ce plan (OpenStax, § 27.2). Les jets contiennent de la matière « se déplaçant à une vitesse proche de celle de la lumière » ; bien que leur formation exacte fasse débat, la matière s’échappe plus facilement perpendiculairement au disque (OpenStax, § 27.2). Dans M 87, la lumière du jet est un rayonnement synchrotron bleuté visible en radio, en visible et en X (section 07 ; OpenStax, § 27.1).</p>\n<div class="callout"><strong>Du trou noir au blazar</strong><p>Les noyaux actifs regroupent quasars, galaxies de Seyfert et blazars — tous alimentés par l’accrétion sur un trou noir supermassif. C’est ainsi qu’une galaxie à noyau actif, TXS 0506+056, est apparue comme source d’un neutrino de haute énergie en 2017 (section 13 ; IceCube).</p></div>'
        }
      },
      {
        id: 'astro-multimessager',
        title: 'Le ciel multimessager',
        field: 'Cours approfondi',
        summary: 'Croiser les témoignages',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Aucun messager n’est suffisant seul. Les <strong>rayons cosmiques</strong>, chargés, ont leurs trajectoires brouillées par les champs magnétiques : impossible de remonter à leur source (OpenStax, § 20.4 ; IceCube). Les <strong>photons</strong> voyagent en ligne droite mais sont absorbés par l’atmosphère aux hautes énergies (section 02). Les <strong>neutrinos</strong>, eux, ne portent pas de charge et interagissent si rarement qu’ils traversent presque tout : ils pointeraient directement vers l’accélérateur. Enfin les <strong>ondes gravitationnelles</strong>, déformations de l’espace-temps elles-mêmes, ouvrent une fenêtre entièrement nouvelle depuis 2015 (OpenStax, § 23.6 ; IceCube).</p>\n<div class="sign-table-wrap">\n<table class="sign-table" style="display:table">\n<caption>Quatre messagers, quatre témoins (sources en section 15)</caption>\n<thead><tr><th scope="col">Messager</th><th scope="col">Nature</th><th scope="col">Détecteur cité</th></tr></thead>\n<tbody>\n<tr><th scope="row">Rayons X et gamma</th><td>Photons</td><td>Télescopes spatiaux (CGRO, Chandra, Fermi)</td></tr>\n<tr><th scope="row">Rayons cosmiques</th><td>Noyaux et électrons chargés</td><td>Réseaux au sol (Pierre Auger)</td></tr>\n<tr><th scope="row">Neutrinos</th><td>Leptons neutres</td><td>Glace (IceCube, ANTARES)</td></tr>\n<tr><th scope="row">Ondes gravitationnelles</th><td>Déformation de l’espace-temps</td><td>Détecteurs depuis 2015</td></tr>\n</tbody>\n</table>\n</div>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><strong>Le cas TXS 0506+056.</strong> Le 22 septembre 2017, IceCube émet une alerte en temps réel à partir d’un événement baptisé IceCube-170922A. Les observations convergent vers une galaxie à noyau actif (blazar) du même nom : deux articles publiés dans <em>Science</em> en 2018 y apportent « la première preuve d’une source connue de neutrinos de haute énergie et de rayons cosmiques ». Environ 20 observatoires, de HAWC à Fermi en passant par H.E.S.S. et MAGIC, ont participé à l’identification (IceCube, communiqué du 12 juillet 2018).</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Le détecteur : un kilomètre cube de glace antarctique, plus de 5 000 modules optiques de 35 cm de diamètre disposés jusqu’à 2,5 km de profondeur, pesant plus d’un milliard de tonnes — chacun capte l’éclair émis quand un neutrino interagit avec la glace (IceCube).</p>\n<div class="callout callout-coral"><strong>« L’ère de l’astrophysique multimessager est là »</strong><p>Francis Halzen, responsable d’IceCube, qualifie de « convaincante » la preuve apportée ; France Córdova, directrice de la NSF, conclut : chaque messager — rayonnement électromagnétique, ondes gravitationnelles et désormais neutrinos — donne une image plus complète de l’Univers (IceCube, 12 juillet 2018). La fusion de 2017 (section 11) avait déjà uni ondes gravitationnelles, sursaut gamma et kilonova.</p></div>'
        }
      },
      {
        id: 'astro-exercices',
        title: 'S’entraîner',
        field: 'Cours approfondi',
        summary: 'Exercices corrigés',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Huit exercices couvrant tout le cours, du spectre des photons aux jets. Essaie de répondre avant d’ouvrir la correction : le but est de manipuler les relations, pas de les relire.</p>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">A</span><span>Un photon X a une énergie de 6 keV. Quelle est sa longueur d’onde ? Et celle d’un photon de 1 keV ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>λ (nm) ≈ 1 240 / E (eV). Pour 6 keV = 6 000 eV : λ ≈ 1 240 /6 000 ≈ 0,21 nm. Pour 1 keV = 1 000 eV : λ ≈ 1,24 nm. Un photon plus énergétique est plus court (section 01).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">B</span><span>Dans un disque d’accrétion à T = 10⁸ K, quelle est l’énergie thermique k<sub>B</sub>T en keV, et où se situe le maximum d’émission selon la loi de Wien ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>k<sub>B</sub>T = 8,617 × 10⁻⁵ eV·K⁻¹ × 10⁸ K ≈ 8,6 × 10³ eV, soit ≈ 8,6 keV. λ<sub>max</sub> = 2,898 × 10⁻³ m·K /10⁸ K ≈ 2,9 × 10⁻¹¹ m ≈ 0,029 nm : au cœur du domaine des rayons X (section 03).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">C</span><span>Un photon de 100 keV est diffusé à 180°. Quelle est sa nouvelle longueur d’onde et sa nouvelle énergie ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>À 180°, Δλ = 2λ<sub>c</sub> = 4,86 pm. λ initial = 1 240 /100 000 = 0,0124 nm, donc λ′ = 0,0124 +0,00486 ≈ 0,0173 nm, et E′ = 1 240 /0,0173 ≈ 72 keV : le photon a cédé ≈ 28 keV à l’électron de recul (section 04).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">D</span><span>Quel est le rayon de Schwarzschild d’un trou noir de masse 21 M<sub>☉</sub> (Cygne X-1) ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>R<sub>S</sub> = 2GM/c² avec G = 6,67 × 10⁻¹¹, M = 21 × 1,99 × 10³⁰ ≈ 4,18 × 10³¹ kg : R<sub>S</sub> = 2 × 6,67 × 10⁻¹¹ × 4,18 × 10³¹ / (9 × 10¹⁶) ≈ 6,2 × 10⁴ m, soit environ 62 km — minuscule face à l’étoile compagne (section 10).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">E</span><span>Convertissez le record de rayon cosmique de 3 × 10²⁰ eV en joules, puis en calories (1 cal = 4,184 J).</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>E = 3 × 10²⁰ × 1,602 × 10⁻¹⁹ ≈ 48 J, soit 48 /4,184 ≈ 12 calories — l’« environ 12 calories » du dossier HEASARC (section 06).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">F</span><span>Quelle énergie correspond à la conversion de toute la masse du Soleil en rayonnement (E = mc²) ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>E = 1,99 × 10³⁰ × (3 × 10⁸)² ≈ 1,8 × 10⁴⁷ J : c’est l’énergie isotrope supposée d’un sursaut gamma brillant, trop grande pour être réelle — d’où l’hypothèse du faisceau (section 11).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">G</span><span>Le pulsar du Crabe émet 30 impulsions par seconde. Quelle est sa période, et combien de tours effectue-t-il en une journée ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>P = 1/30 ≈ 0,033 s (33 ms). En une journée de 86 400 s : N = 86 400 × 30 = 2 592 000 ≈ 2,6 × 10⁶ tours (section 09).</p></div>\n</details>\n<details class="exercise">\n<summary onclick="var l=this.querySelector(\'.reveal-label\');if(l){l.textContent=this.parentNode.open?\'Voir la correction\':\'Masquer la correction\';}"><span class="exercise-number">H</span><span>Quelle force magnétique subit un proton de 0,9c traversant le champ terrestre (5 × 10⁻⁵ T) perpendiculairement ?</span><span class="reveal-label">Voir la correction</span></summary>\n<div class="exercise-answer"><p>F =qvB = 1,6 × 10⁻¹⁹ × 2,7 × 10⁸ × 5 × 10⁻⁵ ≈ 2,2 × 10⁻¹⁵ N : une force minuscule, mais qui dévie sans cesse les particules chargées — et les piège dans les champs de la Galaxie (sections 05 et 07).</p></div>\n</details>'
        }
      },
      {
        id: 'astro-sources',
        title: 'Sources',
        field: 'Cours approfondi',
        summary: 'Sources vérifiées',
        lesson: {
          content: '<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Chaque affirmation scientifique de ce cours renvoie à l’une des sources ci-dessous. OpenStax fait référence lorsque le sujet y figure ; les observatoires et centres de données complètent pour les instruments et les résultats récents.</p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/5-2-the-electromagnetic-spectrum" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 5.2 The Electromagnetic Spectrum : rayons X de 0,01 à 10 nm, rayons gamma au-delà de 0,01 nm, absorption atmosphérique et astronomie spatiale</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/20-4-cosmic-rays" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 20.4 Cosmic Rays : Hess (1911-1912,5,3 km), composition (90 % protons, 9 % hélium et lourds, 1 % masse électronique), Li-Be-B, 30 tours de la Galaxie en 3-10 millions d’années, ondes de choc de supernova</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/23-3-supernova-observations" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 23.3 Supernova Observations : SN 1987A, 19 neutrinos détectés, 10⁵⁸ émis, cœur à 200 milliards de kelvins</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/23-4-pulsars-and-the-discovery-of-neutron-stars" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 23.4 Pulsars : Bell 1967, période 1,33728 s, plus de 4 000 pulsars, Crabe 30 impulsions/s et SN 1054, énergie de rotation, tableau naine blanche/étoile à neutrons, magnétar SGR 1806-20 (27 décembre 2004)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/23-6-the-mystery-of-the-gamma-ray-bursts" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 23.6 The Gamma-Ray Bursts : Vela (1973), CGRO 1991, BeppoSAX et premier après-sursaut 1997, classes &lt; 2 s / &gt; 2 s, fusion de 2017, énergie isotrope et faisceaux</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/24-5-black-holes" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 24.5 Black Holes : vitesses de fuite (11 et 618 km·s⁻¹), R<sub>S</sub> = 2GM/c², Soleil ≈ 3 km, Sgr A* ≈ 1,18 × 10¹⁰ m, Schwarzschild 1916</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/24-6-evidence-for-black-holes" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 24.6 Evidence for Black Holes : disque d’accrétion chauffé à 100 millions de K, Cygne X-1 (O, 5,6 j, 21 M<sub>☉</sub>), tableau des candidats LMC X-1, LMC X-3, GRS 1915+105</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/27-1-quasars" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 27.1 Quasars : 3C 273 (Schmidt 1963,45 000 km·s⁻¹,2,5 milliards d’années, jet de 200 000 années-lumière), relation Doppler relativiste, jet synchrotron de M 87</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/astronomy-2e/pages/27-2-supermassive-black-holes-what-quasars-really-are" target="_blank" rel="noreferrer">OpenStax, <em>Astronomy</em> 2e, § 27.2 Supermassive Black Holes : NGC 4261 (1,2 milliard de M<sub>☉</sub>), jets perpendiculaires au disque, matière relativiste</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 6.1 Blackbody Radiation : corps noir et loi de Wien (b = 2,898 × 10⁻³ m·K)</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/6-3-the-compton-effect" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 6.3 The Compton Effect : Δλ = (h/m<sub>e</sub>c)(1 − cos θ), longueur d’onde de Compton 2,43 pm</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/university-physics-volume-3/pages/8-5-atomic-spectra-and-x-rays" target="_blank" rel="noreferrer">OpenStax, <em>University Physics</em> vol. 3, § 8.5 Atomic Spectra and X-rays : hc = 1 240 eV·nm, séries et raies K, K<sub>α</sub>, K<sub>β</sub></a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://openstax.org/books/college-physics-2e/pages/22-4-magnetic-field-strength-force-on-a-moving-charge-in-a-magnetic-field" target="_blank" rel="noreferrer">OpenStax, <em>College Physics</em> 2e, § 22.4 Force on a Moving Charge : F = qvB sin θ, tesla, champ terrestre ≈ 5 × 10⁻⁵ T</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://physics.nist.gov/cuu/Constants/" target="_blank" rel="noreferrer">NIST, <em>CODATA Recommended Values of the Fundamental Physical Constants</em> : h, c, k<sub>B</sub>, e, G — conversions eV/joule et constante de Boltzmann</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.chandra.harvard.edu/xray_astro/xrays.html" target="_blank" rel="noreferrer">Chandra X-ray Center, <em>Field Guide to X-ray Astronomy — X-rays: Another Form of Light</em> : rayonnement de freinage, raies et fluorescence, diffusion Compton inverse, synchrotron</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://chandra.harvard.edu/resources/illustrations/x-raysLight.html" target="_blank" rel="noreferrer">Chandra X-ray Center, illustrations <em>X-rays &amp; Light</em> : Bremsstrahlung (« braking radiation »), Compton inverse, synchrotron, émission atomique</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://chandra.harvard.edu/edu/xray101/xray101.html" target="_blank" rel="noreferrer">Chandra X-ray Center, <em>X-ray 101</em> : absorption atmosphérique des rayons X, miroirs à incidence rasante, gain de sensibilité × 100 millions en 36 ans, spectres-« empreintes digitales »</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://fermi.gsfc.nasa.gov/science/eteu/grbs/" target="_blank" rel="noreferrer">NASA, <em>Fermi Gamma-ray Space Telescope — Investigating Gamma-Ray Bursts</em> : GBM ≈ 240/an de 8 keV à 40 MeV, LAT ≈ 10/an de 30 MeV à 300 GeV, décalages vers le rouge 0,03 à 9,4,90 % de l’énergie des sursauts courts dans les 2 premières secondes</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://icecube.wisc.edu/news/press-releases/2018/07/icecube-neutrinos-point-to-long-sought-cosmic-ray-accelerator/" target="_blank" rel="noreferrer">IceCube, communiqué du 12 juillet 2018 : IceCube-170922A (22 septembre 2017), blazar TXS 0506+056, détecteur 1 km³ (&gt; 5 000 modules de 35 cm, jusqu’à 2,5 km),≈ 20 observatoires associés</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://www.auger.org/news/scientific-highlights/261-most-precise-measurement-of-the-cosmic-ray-energy-spectrum-at-ultra-high-energies" target="_blank" rel="noreferrer">Pierre Auger Observatory (2020) : spectre au-delà de 2,5 × 10¹⁸ eV, 215 030 événements en 14 ans, assombrissement à 10¹⁹ eV, atténuation au-dessus de 5 × 10¹⁹ eV (accélération maximale + effet GZK), anisotropie au-dessus de 8 × 10¹⁸ eV</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78"><a href="https://heasarc.gsfc.nasa.gov/docs/cgro/epo/brochures/new_win/nw16.html" target="_blank" rel="noreferrer">NASA/HEASARC, <em>Mystery of the Highest Energy Cosmic Rays</em> : record à 3 × 10²⁰ eV (≈ 12 calories), sept événements au-dessus de 10²⁰ eV, absorption par le fond diffus cosmologique, gerbes atmosphériques et fluorescence</a></p>\n<p style="max-width:730px;margin:0 0 16px;color:#39453d;line-height:1.78">Repères historiques cités, tels que les rapportent ces sources : Hess (1911-1912), Bell et Hewish (1967), Schmidt et Sandage (1963), satellites Vela (publication 1973), CGRO (1991), BeppoSAX (1996-1997), Keck (mai 1997), SGR 1806-20 (27 décembre 2004), détection des ondes gravitationnelles (2015), fusion neutron-neutron et sursaut gamma associé (2017), IceCube-170922A (2017, publication 2018), mesure du spectre d’Auger (2020).</p>'
        }
      }
    ]
  },
  {
    id: 'mesures-methodes',
    title: 'Mesures, unités et méthodes expérimentales',
    note: 'Les outils transversaux pour quantifier et confronter les modèles au réel.',
    chapters: [
      {
        id: 'unites-dimensions',
        title: 'Unités et analyse dimensionnelle',
        field: 'Méthodes · bases',
        summary: 'Système international, dimensions et vérification d’équations physiques.',
        lesson: {
          sections: [
            'Une grandeur physique s’exprime avec une valeur numérique et une unité. L’analyse dimensionnelle vérifie que les deux membres d’une relation ont les mêmes dimensions.',
            'Elle permet de repérer une erreur d’unité ou de construire une forme possible pour une loi, mais ne suffit pas à déterminer ses constantes numériques.'
          ],
          formula: {
            label: 'DIMENSIONS FONDAMENTALES',
            text: '[v] = L·T⁻¹  |  [a] = L·T⁻²  |  [F] = M·L·T⁻²'
          },
          example: {
            statement: 'La formule v = d/t est-elle homogène ?',
            calculation: '[d/t] = L/T, qui est bien la dimension d’une vitesse.',
            answer: 'Oui, la relation est dimensionnellement homogène.'
          },
          exercise: {
            question: 'L’expression d = vt + ½at² est-elle homogène ?',
            answer: 'vt a la dimension L ; at² vaut aussi L. Les deux termes sont des longueurs.'
          },
          equationDetails: [
            {
              title: 'Dimension d’une vitesse',
              formula: '[v] = L·T⁻¹',
              explanation: 'La dimension indique la nature physique d’une grandeur indépendamment des unités choisies. Une vitesse est une longueur parcourue par unité de temps.',
              parameters: '[v] : dimension de la vitesse ; L : dimension longueur ; T : dimension temps.',
              example: 'Pour v = d/t, on a [v] = L/T.',
              result: '[v] = L·T⁻¹, cohérent avec une vitesse.'
            },
            {
              title: 'Dimension d’une accélération',
              formula: '[a] = L·T⁻²',
              explanation: 'L’accélération est la variation de vitesse par unité de temps.',
              parameters: '[a] : dimension de l’accélération ; L : longueur ; T : temps.',
              example: 'Pour a = Δv/Δt, [a] = (L·T⁻¹)/T.',
              result: '[a] = L·T⁻².'
            },
            {
              title: 'Dimension d’une force',
              formula: '[F] = M·L·T⁻²',
              explanation: 'Par la deuxième loi de Newton, une force a la dimension d’une masse multipliée par une accélération.',
              parameters: '[F] : dimension de la force ; M : masse ; L : longueur ; T : temps.',
              example: 'Avec F = ma : [F] = M × (L·T⁻²).',
              result: '[F] = M·L·T⁻² ; l’unité SI équivalente est le newton, kg·m·s⁻².'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Dimensional Analysis', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis' }
          ]
        }
      },
      {
        id: 'incertitudes',
        title: 'Incertitudes et chiffres significatifs',
        field: 'Méthodes · intermédiaire',
        summary: 'Précision des mesures, incertitude absolue et relative, propagation.',
        lesson: {
          sections: [
            'Une mesure expérimentale n’est jamais parfaitement exacte. On décrit sa précision par une incertitude, qui dépend de l’instrument et du protocole.',
            'L’incertitude relative compare l’incertitude absolue à la valeur mesurée. Elle permet de comparer la qualité de mesures de tailles différentes.'
          ],
          formula: {
            label: 'INCERTITUDE RELATIVE',
            text: 'uᵣ(x) = u(x)/|x|'
          },
          example: {
            statement: 'Une longueur est mesurée à 20,0 ± 0,2 cm. Calculer l’incertitude relative.',
            calculation: 'uᵣ = 0,2/20,0 = 0,01.',
            answer: 'L’incertitude relative est 1 %.'
          },
          exercise: {
            question: 'Une masse de 50 g est connue à ±1 g. Quelle est l’incertitude relative ?',
            answer: '1/50 = 0,02, soit 2 %.'
          },
          equationDetails: [
            {
              title: 'Incertitude relative',
              formula: 'uᵣ(x) = u(x)/|x|',
              explanation: 'L’incertitude relative compare l’incertitude absolue à la valeur mesurée. Elle est sans dimension et s’exprime souvent en pourcentage.',
              parameters: 'uᵣ(x) : incertitude relative (sans unité) ; u(x) : incertitude absolue ou incertitude-type, dans la même unité que x ; x : valeur mesurée, non nulle.',
              example: 'Une longueur vaut x = 20,0 cm avec u(x) = 0,2 cm : uᵣ = 0,2/20,0.',
              result: 'uᵣ = 0,010 = 1,0 %.'
            },
            {
              title: 'Écriture d’une mesure avec incertitude',
              formula: 'x = xₘ ± u(x)',
              explanation: 'Cette notation communique une valeur mesurée et une incertitude associée ; son interprétation dépend de la méthode et du niveau de couverture utilisés pour déterminer u.',
              parameters: 'xₘ : estimation de la grandeur ; u(x) : incertitude avec la même unité que x. Les chiffres conservés doivent être cohérents avec la précision annoncée.',
              example: 'Pour une longueur mesurée x = 20,0 cm avec u(x) = 0,2 cm, on écrit x = (20,0 ± 0,2) cm.',
              result: 'L’incertitude relative correspondante est 1,0 %.'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Units and Standards', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-2-units-and-standards' },
            { title: 'OpenStax University Physics, vol. 1 — Significant Figures', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures' }
          ]
        }
      },
      {
        id: 'experimentation-modelisation',
        title: 'Expérimentation et modélisation',
        field: 'Méthodes · pratique',
        summary: 'Protocole, variables, ajustement de données et validation d’un modèle.',
        lesson: {
          sections: [
            'Une expérience scientifique précise une question, les grandeurs mesurées, les variables contrôlées et le protocole. Répéter les mesures aide à estimer la dispersion.',
            'Un modèle propose une relation mathématique entre grandeurs. On le confronte aux observations en examinant les résidus, les incertitudes et son domaine de validité.'
          ],
          formula: {
            label: 'RÉSIDU D’UN MODÈLE',
            text: 'résidu = valeur mesurée − valeur prédite'
          },
          example: {
            statement: 'Un modèle prédit 9,8 m·s⁻² et une mesure donne 9,7 m·s⁻². Quel est le résidu ?',
            calculation: 'r = 9,7 − 9,8.',
            answer: 'Le résidu vaut −0,1 m·s⁻².'
          },
          exercise: {
            question: 'Pourquoi répéter une mesure plusieurs fois ?',
            answer: 'Pour estimer la variabilité expérimentale et réduire l’influence d’une erreur aléatoire.'
          },
          equationDetails: [
            {
              title: 'Résidu d’un modèle',
              formula: 'r = valeur mesurée − valeur prédite',
              explanation: 'Le résidu est l’écart signé entre une observation et la prédiction du modèle pour les mêmes conditions. Son analyse aide à repérer biais, dispersion et inadéquation du modèle ; elle ne suffit pas seule à établir une causalité.',
              parameters: 'r : résidu, dans l’unité de la grandeur ; valeur mesurée : résultat expérimental ; valeur prédite : résultat du modèle pour les mêmes paramètres et unités.',
              example: 'Le modèle prédit 9,8 m·s⁻² et la mesure donne 9,7 m·s⁻² : r = 9,7 − 9,8.',
              result: 'r = −0,1 m·s⁻².'
            }
          ],
          sources: [
            { title: 'OpenStax University Physics, vol. 1 — Solving Problems in Physics', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-7-solving-problems-in-physics' },
            { title: 'NIST — Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results', url: 'https://www.nist.gov/pml/nist-technical-note-1297' }
          ]
        }
      }
    ]
  },
  {
    id: 'grands-physiciens',
    title: 'Les grands physiciens',
    note: 'Vingt-six physiciens classés par date de naissance, d’Archimède à Feynman, avec leurs contributions et leurs dates vérifiées.',
    href: 'grands-physiciens-approfondie.html',
    sections: [
      {
        anchor: 'methode-selection',
        title: 'Comment établir une telle liste ?'
      },
      {
        anchor: 'archimede',
        title: 'Archimède — statique et hydrostatique'
      },
      {
        anchor: 'ibn-al-haytham',
        title: 'Ibn al-Haytham — l’optique expérimentale'
      },
      {
        anchor: 'copernic',
        title: 'Copernic — l’héliocentrisme'
      },
      {
        anchor: 'galilee',
        title: 'Galilée — la mécanique mesurée'
      },
      {
        anchor: 'kepler',
        title: 'Kepler — les lois planétaires'
      },
      {
        anchor: 'newton',
        title: 'Newton — mouvement et gravitation'
      },
      {
        anchor: 'volta',
        title: 'Volta — la pile électrique'
      },
      {
        anchor: 'ampere',
        title: 'Ampère — l’électrodynamique'
      },
      {
        anchor: 'faraday',
        title: 'Faraday — le champ et l’induction'
      },
      {
        anchor: 'joule',
        title: 'Joule — l’énergie et la chaleur'
      },
      {
        anchor: 'maxwell',
        title: 'Maxwell — le champ électromagnétique'
      },
      {
        anchor: 'boltzmann',
        title: 'Boltzmann — l’entropie statistique'
      },
      {
        anchor: 'hertz',
        title: 'Hertz — les ondes et l’effet photoélectrique'
      },
      {
        anchor: 'planck',
        title: 'Planck — la quantification de l’énergie'
      },
      {
        anchor: 'marie-curie',
        title: 'Marie Curie — la radioactivité'
      },
      {
        anchor: 'rutherford',
        title: 'Rutherford — le noyau atomique'
      },
      {
        anchor: 'lise-meitner',
        title: 'Lise Meitner — la fission expliquée'
      },
      {
        anchor: 'einstein',
        title: 'Einstein — quanta et relativité'
      },
      {
        anchor: 'noether',
        title: 'Noether — symétries et conservation'
      },
      {
        anchor: 'bohr',
        title: 'Bohr — la quantification de l’atome'
      },
      {
        anchor: 'schrodinger',
        title: 'Schrödinger — la mécanique ondulatoire'
      },
      {
        anchor: 'lemaitre',
        title: 'Lemaître — l’expansion de l’Univers'
      },
      {
        anchor: 'fermi',
        title: 'Fermi — le siècle nucléaire'
      },
      {
        anchor: 'heisenberg',
        title: 'Heisenberg — l’incertitude'
      },
      {
        anchor: 'dirac',
        title: 'Dirac — le positron'
      },
      {
        anchor: 'feynman',
        title: 'Feynman — les diagrammes'
      },
      {
        anchor: 'tableau-chronologique',
        title: 'Tableau chronologique'
      },
      {
        anchor: 'exercices',
        title: 'S’entraîner'
      },
      {
        anchor: 'sources',
        title: 'Sources'
      }
    ]
  },
  {
    id: 'grandes-constantes-physique',
    title: 'Les grandes constantes de la physique',
    note: 'Comprendre les constantes physiques, leurs valeurs CODATA 2022, leur statut métrologique, leurs relations et leurs applications.',
    chapters: [
      {
        id: 'vitesse-lumiere',
        title: 'c — Vitesse de la lumière',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Relativité et définition du mètre.',
        lesson: {
          sections: [
            'c = 299 792 458 m·s⁻¹ (exacte). Dans le vide, c est la vitesse limite de propagation des signaux et définit le mètre.',
            'Une année-lumière vaut environ 9,46073 × 10¹⁵ m. La lumière met environ 8 min 20 s pour parcourir la distance Terre–Soleil.'
          ],
          formula: {
            label: 'Vitesse de la lumière — valeur et relation',
            text: 'c = 299 792 458 m·s⁻¹ (exacte)'
          },
          example: {
            statement: 'Combien de temps met la lumière pour parcourir 3,00 × 10⁸ m ?',
            calculation: 't = d/c',
            answer: 't ≈ 1,00 s.'
          },
          exercise: {
            question: 'Combien de temps met la lumière pour parcourir 3,00 × 10⁸ m ?',
            answer: 't = d/c ≈ 1,00 s.'
          }
        }
      },
      {
        id: 'planck',
        title: 'h — Constante de Planck',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Quanta d’énergie et définition du kilogramme.',
        lesson: {
          sections: [
            'h = 6,626 070 15 × 10⁻³⁴ J·s (exacte). Elle relie l’énergie d’un photon à sa fréquence : E = hν.',
            'Pour λ = 500 nm, E = hc/λ ≈ 3,97 × 10⁻¹⁹ J, soit environ 2,5 eV.'
          ],
          formula: {
            label: 'Constante de Planck — valeur et relation',
            text: 'h = 6,626 070 15 × 10⁻³⁴ J·s ; E = hν'
          },
          example: {
            statement: 'Quelle est l’énergie d’un photon de fréquence 6,0 × 10¹⁴ Hz ?',
            calculation: 'E = hν',
            answer: 'E ≈ 3,98 × 10⁻¹⁹ J.'
          },
          exercise: {
            question: 'Quelle est l’énergie d’un photon de fréquence 6,0 × 10¹⁴ Hz ?',
            answer: 'E = hν ≈ 3,98 × 10⁻¹⁹ J.'
          }
        }
      },
      {
        id: 'planck-reduite',
        title: 'ħ — Constante de Planck réduite',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'La version de h adaptée aux pulsations et à la mécanique quantique.',
        lesson: {
          sections: [
            'ħ = h/(2π) ≈ 1,054 571 817… × 10⁻³⁴ J·s.',
            'Elle apparaît notamment dans les relations formulées avec la pulsation ω : E = ħω. Puisque ω = 2πν, cette relation équivaut à E = hν.'
          ],
          formula: {
            label: 'Constante de Planck réduite',
            text: 'ħ = h/(2π) ; E = ħω'
          },
          example: {
            statement: 'Exprimer ħ à partir de h.',
            calculation: 'On divise h par 2π.',
            answer: 'ħ = h/(2π).'
          },
          exercise: {
            question: 'Exprimer ħ à partir de h.',
            answer: 'ħ = h/(2π).'
          }
        }
      },
      {
        id: 'charge-elementaire',
        title: 'e — Charge élémentaire',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Charge de l’électron et définition de l’ampère.',
        lesson: {
          sections: [
            'e = 1,602 176 634 × 10⁻¹⁹ C (exacte). L’électron porte qₑ = −e et le proton qₚ = +e.',
            'Un coulomb correspond à environ 6,24 × 10¹⁸ charges élémentaires en valeur absolue.'
          ],
          formula: {
            label: 'Charge élémentaire — valeur et relation',
            text: 'e = 1,602 176 634 × 10⁻¹⁹ C'
          },
          example: {
            statement: 'Combien de charges élémentaires correspondent à 1,00 C ?',
            calculation: 'N = Q/e',
            answer: 'N ≈ 6,24 × 10¹⁸.'
          },
          exercise: {
            question: 'Combien de charges élémentaires correspondent à 1,00 C ?',
            answer: 'N = Q/e ≈ 6,24 × 10¹⁸.'
          }
        }
      },
      {
        id: 'avogadro',
        title: 'N_A — Constante d’Avogadro',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Nombre d’entités dans une mole et définition de la mole.',
        lesson: {
          sections: [
            'N_A = 6,022 140 76 × 10²³ mol⁻¹ (exacte). Une mole contient exactement ce nombre d’entités élémentaires.',
            'La relation N = nN_A permet de passer d’une quantité de matière au nombre d’entités.'
          ],
          formula: {
            label: 'Constante d’Avogadro',
            text: 'N_A = 6,022 140 76 × 10²³ mol⁻¹ ; N = nN_A'
          },
          example: {
            statement: 'Combien d’entités contient 0,50 mol ?',
            calculation: 'N = nN_A',
            answer: 'N ≈ 3,01 × 10²³ entités.'
          },
          exercise: {
            question: 'Combien d’entités contient 0,50 mol ?',
            answer: 'N = 0,50 × N_A ≈ 3,01 × 10²³ entités.'
          }
        }
      },
      {
        id: 'const-gaz-parfaits',
        title: 'R — Constante des gaz parfaits',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Lien entre pression, volume, température et quantité de matière.',
        lesson: {
          sections: [
            'R = 8,314 462 618… J·mol⁻¹·K⁻¹, avec R = N_A k_B.',
            'Elle intervient dans l’équation d’état des gaz parfaits : PV = nRT.'
          ],
          formula: {
            label: 'Constante des gaz parfaits',
            text: 'PV = nRT ; R = N_A k_B'
          },
          example: {
            statement: 'Calculer PV pour n = 1,0 mol et T = 300 K.',
            calculation: 'PV = nRT = 1,0 × 8,314 × 300',
            answer: 'PV ≈ 2,49 × 10³ J.'
          },
          exercise: {
            question: 'Calculer PV pour n = 1,0 mol et T = 300 K.',
            answer: 'PV ≈ 2,49 × 10³ J.'
          }
        }
      },
      {
        id: 'faraday',
        title: 'F — Constante de Faraday',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Charge électrique portée par une mole de charges élémentaires.',
        lesson: {
          sections: [
            'F ≈ 96 485,332 12 C·mol⁻¹ et F = N_A e.',
            'En électrolyse, la charge transférée est reliée à la quantité de matière d’électrons par Q = nF.'
          ],
          formula: {
            label: 'Constante de Faraday',
            text: 'F = N_A e ; Q = nF'
          },
          example: {
            statement: 'Quelle charge correspond à 0,10 mol d’électrons ?',
            calculation: 'Q = nF = 0,10 × 96 485',
            answer: 'Q ≈ 9,65 × 10³ C.'
          },
          exercise: {
            question: 'Quelle charge correspond à 0,10 mol d’électrons ?',
            answer: 'Q = nF ≈ 9,65 × 10³ C.'
          }
        }
      },
      {
        id: 'boltzmann',
        title: 'k_B — Constante de Boltzmann',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Relier température thermodynamique et énergie microscopique.',
        lesson: {
          sections: [
            'k_B = 1,380 649 × 10⁻²³ J·K⁻¹ (exacte). Elle définit le kelvin depuis 2019.',
            'Pour un gaz parfait monoatomique, l’énergie cinétique moyenne de translation par molécule vaut ⟨E⟩ = 3/2 k_BT.'
          ],
          formula: {
            label: 'Constante de Boltzmann',
            text: 'k_B = 1,380 649 × 10⁻²³ J·K⁻¹ ; ⟨E⟩ = 3/2 k_BT'
          },
          example: {
            statement: 'Évaluer 3/2 k_BT à T = 300 K.',
            calculation: '⟨E⟩ = 3/2 × k_B × 300',
            answer: '⟨E⟩ ≈ 6,21 × 10⁻²¹ J.'
          },
          exercise: {
            question: 'Évaluer 3/2 k_BT à T = 300 K.',
            answer: '⟨E⟩ ≈ 6,21 × 10⁻²¹ J.'
          }
        }
      },
      {
        id: 'gravitation',
        title: 'G — Constante de gravitation',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Intensité de l’interaction gravitationnelle et loi de Newton.',
        lesson: {
          sections: [
            'G = 6,674 30(15) × 10⁻¹¹ m³·kg⁻¹·s⁻².',
            'La loi de Newton s’écrit F = Gm₁m₂/r². La constante G possède une incertitude de mesure.'
          ],
          formula: {
            label: 'Constante de gravitation',
            text: 'F = Gm₁m₂/r²'
          },
          example: {
            statement: 'Calculer la force entre deux masses de 1 kg séparées de 1 m.',
            calculation: 'F = G × 1 × 1 / 1²',
            answer: 'F ≈ 6,67 × 10⁻¹¹ N.'
          },
          exercise: {
            question: 'Calculer la force entre deux masses de 1 kg séparées de 1 m.',
            answer: 'F ≈ 6,67 × 10⁻¹¹ N.'
          }
        }
      },
      {
        id: 'structure-fine',
        title: 'α — Constante de structure fine',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Constante sans dimension de l’interaction électromagnétique.',
        lesson: {
          sections: [
            'α ≈ 7,297 352 5643 × 10⁻³ ; 1/α ≈ 137,036. C’est un nombre sans unité.',
            'Elle caractérise la force de l’interaction électromagnétique et intervient notamment en physique atomique.'
          ],
          formula: {
            label: 'Constante de structure fine',
            text: 'α = e²/(4πε₀ħc) ; 1/α ≈ 137,036'
          },
          example: {
            statement: 'Donner un ordre de grandeur de l’inverse de α.',
            calculation: '1/α ≈ 1/(7,297 × 10⁻³)',
            answer: '1/α ≈ 137.'
          },
          exercise: {
            question: 'Donner un ordre de grandeur de l’inverse de α.',
            answer: '1/α ≈ 137.'
          }
        }
      },
      {
        id: 'permeabilite-vide',
        title: 'μ₀ — Perméabilité du vide',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Constante magnétique intervenant dans l’électromagnétisme.',
        lesson: {
          sections: [
            'μ₀ ≈ 1,256 637 061 27 × 10⁻⁶ H·m⁻¹ selon les valeurs CODATA 2022.',
            'Depuis la redéfinition du SI, μ₀ n’est plus exacte par définition. Elle est liée à ε₀ et c.'
          ],
          formula: {
            label: 'Perméabilité du vide',
            text: 'ε₀ = 1/(μ₀c²) ; Z₀ = μ₀c'
          },
          example: {
            statement: 'Quelle relation relie μ₀, ε₀ et c ?',
            calculation: 'On utilise la relation électromagnétique entre ces constantes.',
            answer: 'ε₀ = 1/(μ₀c²).'
          },
          exercise: {
            question: 'Quelle relation relie μ₀, ε₀ et c ?',
            answer: 'ε₀ = 1/(μ₀c²).'
          }
        }
      },
      {
        id: 'permittivite-vide',
        title: 'ε₀ — Permittivité du vide',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Constante électrique intervenant dans les lois de l’électrostatique.',
        lesson: {
          sections: [
            'ε₀ ≈ 8,854 187 8188 × 10⁻¹² F·m⁻¹ selon les valeurs CODATA 2022.',
            'Elle apparaît notamment dans la loi de Coulomb et vérifie ε₀ = 1/(μ₀c²).'
          ],
          formula: {
            label: 'Permittivité du vide',
            text: 'ε₀ = 1/(μ₀c²)'
          },
          example: {
            statement: 'Calculer ε₀ avec μ₀ ≈ 1,2566 × 10⁻⁶ H·m⁻¹ et c ≈ 3,00 × 10⁸ m·s⁻¹.',
            calculation: 'ε₀ = 1/(μ₀c²)',
            answer: 'ε₀ ≈ 8,85 × 10⁻¹² F·m⁻¹.'
          },
          exercise: {
            question: 'Quelle relation permet de calculer ε₀ à partir de μ₀ et c ?',
            answer: 'ε₀ = 1/(μ₀c²).'
          }
        }
      },
      {
        id: 'impedance-vide',
        title: 'Z₀ — Impédance caractéristique du vide',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Rapport entre les champs électrique et magnétique d’une onde électromagnétique dans le vide.',
        lesson: {
          sections: [
            'Z₀ ≈ 376,730 313 412 Ω selon les valeurs CODATA 2022.',
            'Elle est reliée aux autres constantes par Z₀ = μ₀c et caractérise la propagation des ondes électromagnétiques dans le vide.'
          ],
          formula: {
            label: 'Impédance caractéristique du vide',
            text: 'Z₀ = μ₀c'
          },
          example: {
            statement: 'Quelles grandeurs permettent de calculer Z₀ ?',
            calculation: 'Z₀ = μ₀c',
            answer: 'La perméabilité du vide μ₀ et la vitesse de la lumière c.'
          },
          exercise: {
            question: 'À l’aide de Z₀ = μ₀c, quelles grandeurs faut-il connaître ?',
            answer: 'μ₀ et c.'
          }
        }
      },
      {
        id: 'stefan-boltzmann',
        title: 'σ — Constante de Stefan-Boltzmann',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Puissance rayonnée par un corps noir.',
        lesson: {
          sections: [
            'σ ≈ 5,670 374 419 × 10⁻⁸ W·m⁻²·K⁻⁴.',
            'La loi de Stefan-Boltzmann s’écrit P = σAT⁴ pour un corps noir idéal.'
          ],
          formula: {
            label: 'Loi de Stefan-Boltzmann',
            text: 'P = σAT⁴'
          },
          example: {
            statement: 'Par quel facteur la puissance surfacique est-elle multipliée si la température double ?',
            calculation: 'P est proportionnelle à T⁴, donc le facteur vaut 2⁴.',
            answer: 'La puissance est multipliée par 16.'
          },
          exercise: {
            question: 'Par quel facteur la puissance surfacique est-elle multipliée si la température double ?',
            answer: 'Par 2⁴ = 16.'
          }
        }
      },
      {
        id: 'wien',
        title: 'b — Constante de déplacement de Wien',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Relier température d’un corps noir au maximum de son spectre.',
        lesson: {
          sections: [
            'b ≈ 2,897 771 955 × 10⁻³ m·K.',
            'La loi de Wien donne λ_max = b/T. Pour T = 3000 K, λ_max ≈ 9,66 × 10⁻⁷ m, soit environ 966 nm.'
          ],
          formula: {
            label: 'Loi de déplacement de Wien',
            text: 'λ_max = b/T'
          },
          example: {
            statement: 'Calculer λ_max pour T = 5800 K.',
            calculation: 'λ_max = 2,898 × 10⁻³ / 5800',
            answer: 'λ_max ≈ 5,00 × 10⁻⁷ m, soit environ 500 nm.'
          },
          exercise: {
            question: 'Calculer λ_max pour T = 5800 K.',
            answer: 'λ_max ≈ 5,00 × 10⁻⁷ m, soit environ 500 nm.'
          }
        }
      },
      {
        id: 'pesanteur-standard',
        title: 'g₀ — Pesanteur standard',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Valeur conventionnelle de référence pour l’accélération de la pesanteur.',
        lesson: {
          sections: [
            'g₀ = 9,806 65 m·s⁻² (exacte par convention).',
            'Contrairement à g, la pesanteur locale mesurée, g₀ ne varie pas selon le lieu. Pour le poids réel, on utilise le g local.'
          ],
          formula: {
            label: 'Pesanteur standard',
            text: 'g₀ = 9,806 65 m·s⁻² ; P = mg'
          },
          example: {
            statement: 'Quel est le poids approximatif d’une masse de 2,0 kg avec g = 9,81 m·s⁻² ?',
            calculation: 'P = mg = 2,0 × 9,81',
            answer: 'P ≈ 19,6 N.'
          },
          exercise: {
            question: 'Quel est le poids approximatif d’une masse de 2,0 kg avec g = 9,81 m·s⁻² ?',
            answer: 'P ≈ 19,6 N.'
          }
        }
      },
      {
        id: 'masse-electron',
        title: 'mₑ — Masse de l’électron',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Masse de la particule légère présente dans les atomes.',
        lesson: {
          sections: [
            'mₑ ≈ 9,109 383 7139 × 10⁻³¹ kg selon les valeurs CODATA 2022.',
            'Le proton est environ 1836 fois plus massif que l’électron.'
          ],
          formula: {
            label: 'Masse de l’électron',
            text: 'mₑ ≈ 9,109 383 7139 × 10⁻³¹ kg'
          },
          example: {
            statement: 'Quelle est la masse approximative de l’électron en unité de masse atomique ?',
            calculation: 'On utilise la conversion entre kilogrammes et u.',
            answer: 'mₑ ≈ 5,486 × 10⁻⁴ u.'
          },
          exercise: {
            question: 'Estimer mₑ en unité de masse atomique u.',
            answer: 'mₑ ≈ 5,486 × 10⁻⁴ u.'
          }
        }
      },
      {
        id: 'masse-proton',
        title: 'mₚ — Masse du proton',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Masse du proton, constituant du noyau atomique.',
        lesson: {
          sections: [
            'mₚ ≈ 1,672 621 925 95 × 10⁻²⁷ kg selon les valeurs CODATA 2022.',
            'Le proton porte une charge +e et constitue, avec le neutron, les nucléons du noyau.'
          ],
          formula: {
            label: 'Masse du proton',
            text: 'mₚ ≈ 1,672 621 925 95 × 10⁻²⁷ kg'
          },
          example: {
            statement: 'Comparer l’ordre de grandeur de mₚ à celui de mₑ.',
            calculation: 'mₚ est de l’ordre de 10⁻²⁷ kg, mₑ de l’ordre de 10⁻³¹ kg.',
            answer: 'Le proton est environ 1836 fois plus massif que l’électron.'
          },
          exercise: {
            question: 'Comparer l’ordre de grandeur de mₚ à celui de mₑ.',
            answer: 'Le proton est environ 1836 fois plus massif que l’électron.'
          }
        }
      },
      {
        id: 'masse-neutron',
        title: 'mₙ — Masse du neutron',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Masse du neutron, particule neutre du noyau atomique.',
        lesson: {
          sections: [
            'mₙ ≈ 1,674 927 500 56 × 10⁻²⁷ kg selon les valeurs CODATA 2022.',
            'La masse du neutron est légèrement supérieure à celle du proton.'
          ],
          formula: {
            label: 'Masse du neutron',
            text: 'mₙ ≈ 1,674 927 500 56 × 10⁻²⁷ kg'
          },
          example: {
            statement: 'Le neutron est-il plus ou moins massif que le proton ?',
            calculation: 'Comparer mₙ et mₚ.',
            answer: 'Le neutron est légèrement plus massif.'
          },
          exercise: {
            question: 'Le neutron est-il plus ou moins massif que le proton ?',
            answer: 'Il est légèrement plus massif.'
          }
        }
      },
      {
        id: 'unite-masse-atomique',
        title: 'u — Unité de masse atomique unifiée',
        field: 'Constantes physiques · CODATA 2022',
        summary: 'Unité pratique pour exprimer les masses des atomes et particules.',
        lesson: {
          sections: [
            'u ≈ 1,660 539 068 92 × 10⁻²⁷ kg selon le tableau CODATA 2022 fourni.',
            'Elle correspond au douzième de la masse d’un atome de carbone 12 et permet d’exprimer les masses atomiques avec des nombres pratiques.'
          ],
          formula: {
            label: 'Unité de masse atomique unifiée',
            text: '1 u ≈ 1,660 539 068 92 × 10⁻²⁷ kg'
          },
          example: {
            statement: 'Pourquoi exprime-t-on souvent les masses atomiques en u plutôt qu’en kilogrammes ?',
            calculation: 'L’unité u est adaptée à l’échelle des atomes et particules.',
            answer: 'Les valeurs numériques sont plus commodes et proches de l’unité.'
          },
          exercise: {
            question: 'Pourquoi exprime-t-on souvent les masses atomiques en u plutôt qu’en kilogrammes ?',
            answer: 'Parce que les valeurs numériques sont plus commodes et proches de l’unité.'
          }
        }
      }
    ]
  },
  {
    id: 'grands-livres-physique',
    title: 'Les grands livres de la physique',
    note: 'Dix ouvrages de référence, de Galilée à Hawking : titre, auteur, édition, date de parution et résumé de chaque livre.',
    chapters: [
      {
        id: 'galilee-deux-sciences-nouvelles',
        title: 'Discorsi e dimostrazioni matematiche intorno a due nuove scienze',
        field: 'Galileo Galilei · 1638',
        summary: 'Galileo Galilei, 1638.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Discorsi e dimostrazioni matematiche, intorno à due nuove scienze attenenti alla mecanica & i movimenti locali (traduction littérale : Discours et démonstrations mathématiques concernant deux sciences nouvelles, relatives à la mécanique et aux mouvements locaux)'
            ],
            [
              'Auteur',
              'Galileo Galilei (1564-1642)'
            ],
            [
              'Édition',
              'Leyde (Pays-Bas), chez Lodewijk (Louis) Elzevir, édition originale. Le livre a été publié hors d’Italie, car l’Inquisition romaine avait interdit la publication de toute œuvre de Galilée.'
            ],
            [
              'Date de parution',
              '1638'
            ]
          ],
          sections: [
            'Dernier livre de Galilée, présenté comme un testament scientifique : il reprend une grande partie de ses travaux de physique des trente années précédentes. Il est écrit en partie en italien et en partie en latin, sous la forme d’un dialogue entre trois personnages, Salviati, Sagredo et Simplicio.',
            'Il fonde deux « sciences nouvelles » : la résistance des matériaux et la cinématique, science mathématique du mouvement. Les deux premières journées portent sur la mécanique des matériaux, les deux dernières sur le mouvement : mouvement uniforme et accéléré, trajectoires paraboliques.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Wikipédia (en) — Two New Sciences', url: 'https://en.wikipedia.org/wiki/Two_New_Sciences' },
            { title: 'Christie’s — notice de l’édition originale (Leyde, Elzevier, 1638)', url: 'https://www.christies.com.cn/lot/lot-1794974' }
          ]
        }
      },
      {
        id: 'newton-principia',
        title: 'Philosophiæ Naturalis Principia Mathematica',
        field: 'Isaac Newton · 1687',
        summary: 'Isaac Newton, 1687.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Philosophiæ Naturalis Principia Mathematica (traduction littérale : Principes mathématiques de la philosophie naturelle)'
            ],
            [
              'Auteur',
              'Isaac Newton (1642-1727)'
            ],
            [
              'Édition',
              'Londres, imprimé par Joseph Streater pour la Royal Society, vendu notamment chez le libraire Samuel Smith. Édition originale, revue et financée par Edmond Halley, la Royal Society n’ayant plus de fonds.'
            ],
            [
              'Date de parution',
              '1687 (la fin de l’impression est signalée par Halley dans une lettre du 5 juillet 1687)'
            ]
          ],
          sections: [
            'Newton y énonce les trois lois de la dynamique et la loi de la gravitation universelle, et montre qu’une même loi mathématique explique le mouvement des corps sur Terre et celui des astres, en prolongeant les travaux de Copernic, de Galilée et de Kepler. L’ouvrage est divisé en trois livres.',
            'Edmond Halley a encouragé Newton à l’écrire, a suivi l’impression et a pris en charge son coût. Le livre n’a pas été un succès de librairie immédiat : Newton a offert des exemplaires à des bibliothèques d’universités et de collèges pour écouler une partie du tirage.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Chetham’s Library — le Principia, première édition', url: 'https://library.chethams.com/?p=1933' },
            { title: 'Christie’s — notice de la première édition (Londres, 1687)', url: 'https://www.christies.com.cn/lot/lot-1640068' }
          ]
        }
      },
      {
        id: 'huygens-traite-de-la-lumiere',
        title: 'Traité de la lumière',
        field: 'Christiaan Huygens · 1690',
        summary: 'Christiaan Huygens, 1690.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Traité de la lumière. Où sont expliquées les causes de ce qui luy arrive dans la reflexion, & dans la refraction. Et particulierement dans l’etrange refraction du cristal d’Islande. Avec un discours de la cause de la pesanteur'
            ],
            [
              'Auteur',
              'Christiaan Huygens (1629-1695)'
            ],
            [
              'Édition',
              'Leyde, chez Pierre (Pieter) van der Aa. Édition originale, en deux parties : le Traité, puis le Discours de la cause de la pesanteur, qui a une page de titre propre.'
            ],
            [
              'Date de parution',
              '1690 (le traité était achevé en 1678)'
            ]
          ],
          sections: [
            'Huygens y expose sa théorie ondulatoire de la lumière : la lumière est une série d’impulsions qui se propage dans l’éther avec une vitesse très grande, mais finie. Il explique la réflexion et la réfraction, y compris la double réfraction du cristal d’Islande.',
            'Achevé en 1678, le traité est resté douze ans sans être publié, jusqu’à ce que Huygens ait étudié les Principia de Newton. La seconde partie, le Discours de la cause de la pesanteur (écrit en 1669), propose une explication mécanique de la gravité par des tourbillons, qui s’oppose à l’idée newtonienne d’une force attractive universelle. La théorie ondulatoire de Huygens est restée négligée pendant plus d’un siècle, jusqu’à ce que Thomas Young la reprenne pour expliquer les interférences lumineuses.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Penn Libraries — notice de l’édition originale', url: 'https://find.library.upenn.edu/catalog/99390953503681' },
            { title: 'History of Information — Huygens et la théorie ondulatoire de la lumière', url: 'https://historyofinformation.com/detail.php?id=2635' }
          ]
        }
      },
      {
        id: 'carnot-puissance-motrice-du-feu',
        title: 'Réflexions sur la puissance motrice du feu',
        field: 'Sadi Carnot · 1824',
        summary: 'Sadi Carnot, 1824.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance'
            ],
            [
              'Auteur',
              'Sadi Carnot (Nicolas Léonard Sadi Carnot, 1796-1832), ancien élève de l’École polytechnique'
            ],
            [
              'Édition',
              'Paris, chez Bachelier, libraire (118 pages). Édition originale, tirée à environ 600 exemplaires ; c’est le seul livre publié par Carnot de son vivant.'
            ],
            [
              'Date de parution',
              '1824'
            ]
          ],
          sections: [
            'Publié alors que Carnot n’avait que 28 ans, ce livre est motivé par l’amélioration des machines à vapeur. Carnot cherche s’il existe une limite à la puissance motrice qu’on peut tirer de la chaleur. Il montre que cette puissance ne dépend pas de la substance qui fait travailler la machine, mais du passage de la chaleur d’un corps chaud vers un corps froid, et il introduit l’idée d’un cycle, où la machine et la substance reviennent à leur état initial. Il raisonne avec la théorie du calorique.',
            'Peu remarqué à sa parution, le livre était oublié en 1845, quand C. Holtzmann l’a redécouvert, suivi en 1848 par William Thomson. Il est considéré comme l’œuvre fondatrice de la thermodynamique.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'ULiège (Donum) — notice de l’édition de 1824', url: 'https://donum.uliege.be/handle/2268.1/13610' },
            { title: 'BibNum (OpenEdition) — Réflexions sur la puissance motrice du feu', url: 'https://journals.openedition.org/bibnum/858' }
          ]
        }
      },
      {
        id: 'maxwell-electricite-magnetisme',
        title: 'A Treatise on Electricity and Magnetism',
        field: 'James Clerk Maxwell · 1873',
        summary: 'James Clerk Maxwell, 1873.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'A Treatise on Electricity and Magnetism (traduction littérale : Traité d’électricité et de magnétisme)'
            ],
            [
              'Auteur',
              'James Clerk Maxwell (1831-1879)'
            ],
            [
              'Édition',
              'Oxford, Clarendon Press, deux volumes. Maxwell préparait une deuxième édition quand il est mort en 1879 ; une troisième édition a été établie après sa mort.'
            ],
            [
              'Date de parution',
              '1873'
            ]
          ],
          sections: [
            'Traité en deux volumes qui rassemble l’essentiel de ce que l’on savait de l’électricité et du magnétisme à l’époque, et qui introduit la théorie électromagnétique de façon méthodique et progressive. Les équations de Maxwell y apparaissent pour la première fois sous une forme pleinement développée.',
            'Maxwell y avance l’hypothèse que la lumière et l’électricité sont de même nature : les ondes électromagnétiques se propagent comme la lumière et à la même vitesse. Le livre n’a eu qu’un impact limité de son vivant ; quelques années après sa mort, la théorie électromagnétique de la lumière a été acceptée comme l’une des théories fondamentales de la physique.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Wikipédia (en) — A Treatise on Electricity and Magnetism', url: 'https://en.wikipedia.org/wiki/A_Treatise_on_Electricity_and_Magnetism' },
            { title: 'Bauman Rare Books — notice de la première édition (Oxford, 1873)', url: 'https://www.baumanrarebooks.com/rare-books/maxwell-james-clerk/treatise-on-electricity-and-magnetism/109587.aspx' }
          ]
        }
      },
      {
        id: 'curie-traite-de-radioactivite',
        title: 'Traité de radioactivité',
        field: 'Marie Curie · 1910',
        summary: 'Marie Curie, 1910.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Traité de radioactivité, par Madame P. Curie'
            ],
            [
              'Auteur',
              'Marie Curie (Marie Sklodowska Curie, 1867-1934), signant « Madame P. Curie »'
            ],
            [
              'Édition',
              'Paris, Gauthier-Villars, deux tomes (tome I : xiii + 426 pages ; tome II : 548 pages), soit près de mille pages. Édition originale.'
            ],
            [
              'Date de parution',
              'Fin 1910'
            ]
          ],
          sections: [
            'Sept ans après sa thèse de 1903 (un volume de 142 pages), Marie Curie présente dans ce traité un exposé ordonné et systématique de la masse de données accumulées sur la radioactivité. Elle y admet sans réserve la théorie des transformations radioactives.',
            'Le livre paraît sept ans après le prix Nobel de physique de 1903 (partagé avec Pierre Curie et Henri Becquerel) et un an avant son prix Nobel de chimie, en 1911, pour l’isolement du radium et du polonium.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Nature — compte rendu du Traité de radioactivité (1911)', url: 'https://www.nature.com/articles/086001a0' },
            { title: 'Wellcome Collection — notice bibliographique', url: 'https://wellcomecollection.org/works/etcf9krh' }
          ]
        }
      },
      {
        id: 'einstein-relativite',
        title: 'Über die spezielle und die allgemeine Relativitätstheorie',
        field: 'Albert Einstein · 1917',
        summary: 'Albert Einstein, 1917.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'Über die spezielle und die allgemeine Relativitätstheorie (gemeinverständlich) (traduction littérale : Sur la théorie de la relativité restreinte et générale, exposé accessible à tous)'
            ],
            [
              'Auteur',
              'Albert Einstein'
            ],
            [
              'Édition',
              'Braunschweig (Brunswick), Friedr. Vieweg & Sohn, collection « Sammlung Vieweg », n° 38. Édition anglaise : Relativity: The Special and the General Theory, traduite par Robert Lawson, Londres, Methuen, 1920.'
            ],
            [
              'Date de parution',
              '1917 (texte daté de décembre 1916)'
            ]
          ],
          sections: [
            'Einstein y présente lui-même la théorie de la relativité à des lecteurs qui s’intéressent à la théorie d’un point de vue scientifique général ou philosophique, sans maîtriser l’appareil mathématique de la physique théorique. Il suppose un niveau d’études secondaires et de la patience.',
            'Le livre comprend une première partie sur la relativité restreinte et une seconde sur la relativité générale. À partir de la troisième édition (1918), une partie intitulée « Considérations sur le monde pris comme un tout » a été ajoutée, ainsi que des annexes dans les éditions suivantes.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Einstein Papers Project (Princeton) — notice du texte', url: 'https://einsteinpapers.press.princeton.edu/vol6-doc/448' },
            { title: 'Notice de bibliothèque (Vieweg, 1917, Sammlung Vieweg 38)', url: 'https://relbib.de/Record/324473729' }
          ]
        }
      },
      {
        id: 'dirac-principes-mecanique-quantique',
        title: 'The Principles of Quantum Mechanics',
        field: 'Paul A. M. Dirac · 1930',
        summary: 'Paul A. M. Dirac, 1930.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'The Principles of Quantum Mechanics (traduction littérale : Les principes de la mécanique quantique)'
            ],
            [
              'Auteur',
              'Paul Adrien Maurice Dirac (1902-1984)'
            ],
            [
              'Édition',
              'Oxford, Clarendon Press, collection « The International Series of Monographs on Physics ». Éditions suivantes : 1935, 1947 et 1958 (4e édition).'
            ],
            [
              'Date de parution',
              '1930'
            ]
          ],
          sections: [
            'Monographie sur les principes fondamentaux de la mécanique quantique, écrite par l’un de ses créateurs. Dirac y traite la mécanique quantique comme un cadre mathématique dont on tire des grandeurs que l’on peut comparer à l’expérience, sans longue discussion philosophique.',
            'L’éditeur la présente, dès la troisième édition (1947), comme un classique de la théorie physique moderne dont l’originalité a été reconnue dès la première édition en 1930.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Wikipédia (en) — The Principles of Quantum Mechanics', url: 'https://en.wikipedia.org/wiki/The_Principles_of_Quantum_Mechanics' },
            { title: 'Notice de bibliothèque (4e édition, Clarendon Press, 1958)', url: 'https://libop-nifs.nifs.ac.jp/opac/opac_link/bibid/1000082189' }
          ]
        }
      },
      {
        id: 'feynman-lectures-on-physics',
        title: 'The Feynman Lectures on Physics',
        field: 'Richard P. Feynman, Robert B. Leighton et Matthew Sands · 1963',
        summary: 'Richard P. Feynman, Robert B. Leighton et Matthew Sands, 1963.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'The Feynman Lectures on Physics (traduction littérale : Le cours de physique de Feynman)'
            ],
            [
              'Auteur',
              'Richard P. Feynman, Robert B. Leighton et Matthew Sands'
            ],
            [
              'Édition',
              'Reading (Massachusetts), Addison-Wesley, trois volumes. Le texte est librement consultable en ligne depuis 2013 (Caltech et The Feynman Lectures Website).'
            ],
            [
              'Date de parution',
              '1963-1965 (trois volumes)'
            ]
          ],
          sections: [
            'Manuel issu du cours de physique que Feynman a donné aux étudiants de première et de deuxième année du California Institute of Technology (Caltech), pendant deux années universitaires à partir de 1961. Le texte n’est pas une transcription mot à mot : il a été édité par Leighton et Sands, avec l’aide de Feynman.',
            'Il est souvent présenté comme l’un des livres de physique les plus populaires jamais écrits, et il a trouvé un public bien au-delà des étudiants.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'The Feynman Lectures on Physics — édition en ligne (Caltech)', url: 'https://feynmanlectures.caltech.edu' },
            { title: 'Wikipédia (en) — The Feynman Lectures on Physics', url: 'https://en.wikipedia.org/wiki/The_Feynman_Lectures_on_Physics' }
          ]
        }
      },
      {
        id: 'hawking-breve-histoire-du-temps',
        title: 'A Brief History of Time',
        field: 'Stephen Hawking · 1988',
        summary: 'Stephen Hawking, 1988.',
        lesson: {
          fiche: [
            [
              'Titre complet',
              'A Brief History of Time: From the Big Bang to Black Holes (traduction littérale : Une brève histoire du temps, du big bang aux trous noirs)'
            ],
            [
              'Auteur',
              'Stephen W. Hawking (1942-2018)'
            ],
            [
              'Édition',
              'Londres (Bantam Press) et New York (Bantam Books), publiés simultanément, avec une introduction de Carl Sagan. Traduction française : Une brève histoire du temps : du big bang aux trous noirs, traduite par Isabelle Naddeo-Souriau, Paris, Flammarion, 1989 (collection « Nouvelle bibliothèque scientifique », 236 pages).'
            ],
            [
              'Date de parution',
              '1988'
            ]
          ],
          sections: [
            'Premier livre que Hawking a écrit pour le grand public. Plutôt que des équations (le livre n’en contient qu’une, E = mc²), il s’appuie sur le récit et les illustrations pour présenter le big bang, l’expansion de l’Univers, la mécanique quantique, les trous noirs, la flèche du temps et la recherche d’une théorie unifiée de la physique.',
            'Les chapitres de l’édition française vont de « Notre vision de l’univers » à « L’unification de la physique ». Le premier tirage comportait des erreurs ; il a été retiré et remplacé.'
          ],
          sourcesHeading: 'Notices bibliographiques',
          sources: [
            { title: 'Notice de l’édition originale (Shapero Rare Books)', url: 'https://shapero.com/products/hawking-brief-history-of-time-first-edition-1988-113271' },
            { title: 'Notice de l’édition française (Flammarion, 1989)', url: 'https://ci.nii.ac.jp/ncid/BA07983066' }
          ]
        }
      }
    ]
  },
﻿{
  id: 'equations-physique',
  sortYear: 1619,
  title: 'Les grandes équations de la physique',
  note: 'Repères historiques présentent des équations majeures de la mécanique, des fluides, de l’électricité, de la chaleur, de l’électromagnétisme et de la physique quantique. Les dates indiquent la publication ou la formulation généralement associée à chaque résultat. Les équations sont accompagnées de leurs conditions d’application, de la définition de leurs paramètres et d’exemples corrigés.',
  chapters: [
    {
      id: 'loi-kepler',
      title: 'La troisième loi de Kepler : période et orbite',
      field: 'Astronomie · Mécanique céleste · 1619',
      summary: 'La troisième loi de Kepler relie la durée d’une révolution orbitale à la taille de l’orbite. Elle décrit les régularités observées dans le mouvement des planètes avant que Newton ne fournisse une théorie gravitationnelle capable de les expliquer.',
      lesson: {

        sections: [
          'Auteur : Johannes Kepler (1571–1630). Sa troisième loi est publiée en 1619 dans Harmonices Mundi. Elle complète ses travaux antérieurs sur les orbites planétaires et établit une relation mathématique entre la période orbitale et la taille de l’orbite.',


          'Équation : T² / a³ = constante. Cette forme comparative s’applique aux corps orbitant autour du même astre central lorsque la masse de cet astre domine. T représente la période orbitale, c’est-à-dire la durée nécessaire pour accomplir une révolution, et a le demi-grand axe de l’orbite elliptique.',


          'Dans le modèle newtonien à deux corps, la relation plus générale est T² = 4π²a³ / [G(M + m)]. M et m représentent les masses des deux corps et G la constante gravitationnelle. Lorsque m est négligeable devant M, cette relation se simplifie en T² ≈ 4π²a³ / (GM). La constante de proportionnalité dépend donc de la masse de l’astre central.'
        ],
            formula: {
            label: 'Troisième loi de Kepler’',
            text: 'k = T² / a³',

parameters: [
          {
            symbol: "T",
            label: "Période orbitale",
            unit: "s"
          },
          {
            symbol: "a",
            label: "Demi-grand axe de l’orbite elliptique",
            unit: "m"
          },
          {
            symbol: "constante",
            label: "Rapport T² / a³ (dépend de la masse de l’astre central : 4π² / (G × M))",
            unit: "s²/m³"
          }
        ]
          },

        example: {
          statement: 'Deux planètes orbitent autour du Soleil. Le demi-grand axe de la seconde orbite est 4 fois celui de la première. Quel est le rapport de leurs périodes orbitales ?',
          calculation: 'T₂² / T₁² = a₂³ / a₁³ = 4³ = 64. Donc T₂ / T₁ = √64 = 8.',
          answer: 'La période orbitale de la seconde planète est 8 fois celle de la première, dans les conditions d’application de la loi.'
        },
        exercise: {
          question: 'Que relie la troisième loi de Kepler ?',
          answer: 'Elle relie le carré de la période orbitale au cube du demi-grand axe de l’orbite.'
        },
        exercises: [
          {
            question: 'Qui a publié cette loi et en quelle année ?',
            answer: 'Johannes Kepler, en 1619.'
          },
          {
            question: 'Que représente T ?',
            answer: 'La période nécessaire pour effectuer une révolution orbitale.'
          },
          {
            question: 'La constante T² / a³ est-elle identique pour des planètes orbitant autour d’étoiles de masses différentes ?',
            answer: 'Non. Dans le modèle newtonien, elle dépend de la masse de l’astre central.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Kepler’s Laws of Planetary Motion',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/13-5-keplers-laws-of-planetary-motion'
          },
          {
            title: 'Encyclopaedia Britannica — Kepler’s Laws of Planetary Motion',
            url: 'https://www.britannica.com/science/Keplers-laws-of-planetary-motion'
          }
        ]
      }
    },


    {
      id: 'gravitation-newton',
      title: 'La loi de la gravitation universelle',
      formula: "F = G × m1 × m2 / r²",
      equationDetails: {
        label: "Loi de gravitation universelle",
        formula: "F = G × m1 × m2 / r²",
        parameters: [
          {
            symbol: "F",
            label: "Force gravitationnelle",
            unit: "N"
          },
          {
            symbol: "G",
            label: "Constante gravitationnelle",
            unit: "N·m²/kg²"
          },
          {
            symbol: "m1 et m2",
            label: "Masses des deux corps",
            unit: "kg"
          },
          {
            symbol: "r",
            label: "Distance entre les centres des deux corps",
            unit: "m"
          }
        ]
      },
      field: 'Mécanique classique · Gravitation · 1687',
      summary: 'Newton unifie dans une même loi l’attraction entre les corps terrestres et le mouvement des astres. La gravitation intervient dans la chute des objets, les orbites planétaires, les mouvements des satellites et de nombreux phénomènes astronomiques.',
      lesson: {
        sections: [
          'Auteur : Isaac Newton (1642–1727 selon le calendrier julien alors utilisé en Angleterre ; 1643–1727 selon le calendrier grégorien). La loi est présentée dans les Principia, publiés en 1687. Elle constitue une étape majeure de la mécanique classique.',


          'Équation : F = G m₁ m₂ / r². F représente la valeur de la force gravitationnelle entre deux corps, G la constante gravitationnelle, m₁ et m₂ leurs masses et r la distance entre leurs centres dans le modèle de masses ponctuelles. La force est attractive et agit selon la droite qui relie les deux corps.',


          'Près de la surface d’un astre sphérique, on utilise également g ≈ GM / R². Dans cette expression, g est l’accélération gravitationnelle, M la masse de l’astre et R la distance entre son centre et le point considéré, approximativement égale à son rayon à la surface. Cette expression ne doit pas être confondue avec la formule de la force universelle.'
        ],
        example: {
          statement: 'La distance entre deux corps est multipliée par 2, tandis que leurs masses restent constantes. Comment évolue la force gravitationnelle ?',
          calculation: 'La force varie comme 1 / r². Le nouveau rapport est F₂ / F₁ = 1 / 2² = 1/4.',
          answer: 'La force gravitationnelle devient 4 fois plus faible.'
        },
        exercise: {
          question: 'Quelle différence existe entre F = G m₁ m₂ / r² et g ≈ GM / R² ?',
          answer: 'La première formule donne la force gravitationnelle entre deux masses. La seconde donne l’accélération gravitationnelle produite par un astre dans l’approximation considérée.'
        },
        exercises: [
          {
            question: 'En quelle année les Principia de Newton sont-ils publiés ?',
            answer: 'En 1687.'
          },
          {
            question: 'Que représente G ?',
            answer: 'La constante gravitationnelle universelle.'
          },
          {
            question: 'Si une des masses double et que la distance reste constante, que devient la force ?',
            answer: 'La force double.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Newton’s Law of Universal Gravitation',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation'
          },
          {
            title: 'OpenStax — Gravitation Near Earth’s Surface',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/13-2-gravitation-near-earths-surface'
          },
          {
            title: 'Encyclopaedia Britannica — Isaac Newton',
            url: 'https://www.britannica.com/biography/Isaac-Newton'
          }
        ]
      }
    },


    {
      id: 'bernoulli-fluides',
      title: 'L’équation de Bernoulli',
      formula: "p + ½ × ρ × v² + ρ × g × h = constante",
      equationDetails: {
        label: "Équation de Bernoulli",
        formula: "p + ½ × ρ × v² + ρ × g × h = constante",
        parameters: [
          {
            symbol: "p",
            label: "Pression statique du fluide",
            unit: "Pa"
          },
          {
            symbol: "ρ",
            label: "Masse volumique du fluide",
            unit: "kg/m³"
          },
          {
            symbol: "v",
            label: "Vitesse du fluide",
            unit: "m/s"
          },
          {
            symbol: "g",
            label: "Accélération gravitationnelle",
            unit: "m/s²"
          },
          {
            symbol: "h",
            label: "Altitude par rapport à un niveau de référence",
            unit: "m"
          },
          {
            symbol: "constante",
            label: "Valeur conservée le long d’une ligne de courant",
            unit: "Pa"
          }
        ]
      },
      field: 'Mécanique des fluides · 1738',
      summary: 'L’équation de Bernoulli exprime une conservation de l’énergie mécanique le long d’une ligne de courant dans un écoulement idéal. Elle permet de comprendre les relations entre pression, vitesse et hauteur dans de nombreux problèmes de mécanique des fluides.',
      lesson: {
        sections: [
          'Auteur : Daniel Bernoulli (1700–1782). Ses travaux sur les fluides sont exposés dans Hydrodynamica, publié en 1738. L’équation associée à son nom est devenue un outil classique pour analyser les écoulements.',


          'Équation : p + ½ρv² + ρgh = constante. p représente la pression du fluide, ρ sa masse volumique, v sa vitesse, g l’accélération gravitationnelle et h son altitude par rapport à un niveau de référence.',


          'Les trois termes correspondent respectivement à la pression, à l’énergie cinétique par unité de volume et à l’énergie potentielle gravitationnelle par unité de volume. La forme simple suppose notamment un écoulement stationnaire, un fluide incompressible et des pertes visqueuses négligeables. Elle ne doit donc pas être appliquée sans précautions aux écoulements fortement dissipatifs.'
        ],
        example: {
          statement: 'Dans un écoulement horizontal idéal, la vitesse du fluide augmente entre deux points. Comment évolue la pression statique ?',
          calculation: 'La hauteur ne change pas, donc le terme ρgh reste constant. Si la masse volumique reste constante, une augmentation de ½ρv² correspond à une diminution de p.',
          answer: 'La pression statique diminue dans les conditions d’application de l’équation de Bernoulli.'
        },
        exercise: {
          question: 'Que représente le terme ½ρv² ?',
          answer: 'L’énergie cinétique du fluide par unité de volume.'
        },
        exercises: [
          {
            question: 'Qui est l’auteur associé à cette équation ?',
            answer: 'Daniel Bernoulli.'
          },
          {
            question: 'Que représente ρ ?',
            answer: 'La masse volumique du fluide.'
          },
          {
            question: 'La forme simple de l’équation tient-elle compte des pertes visqueuses ?',
            answer: 'Non. Ces pertes sont négligées dans le modèle idéal.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Bernoulli’s Equation',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation'
          },
          {
            title: 'Encyclopaedia Britannica — Daniel Bernoulli',
            url: 'https://www.britannica.com/biography/Daniel-Bernoulli'
          }
        ]
      }
    },


    {
      id: 'coulomb-electricite',
      title: 'La loi de Coulomb',
      formula: "F = kₑ × |q1 × q2| / r²",
      equationDetails: {
        label: "Loi de Coulomb",
        formula: "F = kₑ × |q1 × q2| / r²",
        parameters: [
          {
            symbol: "F",
            label: "Valeur de la force électrostatique",
            unit: "N"
          },
          {
            symbol: "kₑ",
            label: "Constante de Coulomb (kₑ = 1 / (4π × ε₀) dans le vide)",
            unit: "N·m²/C²"
          },
          {
            symbol: "q1 et q2",
            label: "Charges électriques ponctuelles",
            unit: "C"
          },
          {
            symbol: "r",
            label: "Distance entre les deux charges",
            unit: "m"
          },
          {
            symbol: "ε₀",
            label: "Permittivité électrique du vide",
            unit: "F/m"
          }
        ]
      },
      field: 'Électrostatique · 1785',
      summary: 'La loi de Coulomb quantifie l’interaction électrostatique entre des charges électriques immobiles. Elle montre que l’intensité de la force dépend du produit des charges et diminue avec le carré de leur distance.',
      lesson: {
        sections: [
          'Auteur : Charles-Augustin de Coulomb (1736–1806). Ses recherches expérimentales sur l’attraction et la répulsion électriques sont publiées dans les années 1780, notamment en 1785. Elles contribuent à établir une description quantitative de l’électrostatique.',


          'Équation : F = kₑ |q₁q₂| / r², avec kₑ = 1 / (4πε₀) dans le vide. F est la valeur de la force, q₁ et q₂ les charges électriques, r la distance entre elles et ε₀ la permittivité électrique du vide.',


          'Des charges de même signe se repoussent, tandis que des charges de signes opposés s’attirent. La formule présentée donne la valeur de la force entre deux charges ponctuelles. Dans un matériau, les propriétés électriques du milieu doivent également être prises en compte.'
        ],
        example: {
          statement: 'La distance entre deux charges ponctuelles est multipliée par 3, sans modification des charges. Comment évolue la force électrostatique ?',
          calculation: 'F₂ / F₁ = 1 / 3² = 1/9.',
          answer: 'La force électrostatique devient 9 fois plus faible.'
        },
        exercise: {
          question: 'Comment déterminer si la force électrostatique est attractive ou répulsive ?',
          answer: 'Elle est répulsive pour deux charges de même signe et attractive pour deux charges de signes opposés.'
        },
        exercises: [
          {
            question: 'Que représente ε₀ ?',
            answer: 'La permittivité électrique du vide.'
          },
          {
            question: 'Comment varie la force avec la distance ?',
            answer: 'Elle est inversement proportionnelle au carré de la distance.'
          },
          {
            question: 'La formule présentée décrit-elle directement les interactions magnétiques entre charges en mouvement ?',
            answer: 'Non. Elle décrit l’interaction électrostatique entre des charges immobiles.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Coulomb’s Law',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law'
          },
          {
            title: 'Encyclopaedia Britannica — Charles-Augustin de Coulomb',
            url: 'https://www.britannica.com/biography/Charles-Augustin-de-Coulomb'
          }
        ]
      }
    },


    {
      id: 'fourier-chaleur',
      title: 'La loi de Fourier de la conduction thermique',
      formula: "q = −k × ∇T",
      equationDetails: {
        label: "Loi de Fourier de la conduction thermique",
        formula: "q = −k × ∇T",
        parameters: [
          {
            symbol: "q",
            label: "Vecteur flux thermique par unité de surface",
            unit: "W/m²"
          },
          {
            symbol: "k",
            label: "Conductivité thermique du matériau",
            unit: "W/(m·K)"
          },
          {
            symbol: "∇T",
            label: "Gradient spatial de température",
            unit: "K/m"
          }
        ]
      },
      field: 'Thermodynamique · Transfert thermique · 1822',
      summary: 'La loi de Fourier décrit le transfert thermique par conduction en reliant le flux de chaleur au gradient de température. Elle joue un rôle essentiel dans l’étude des matériaux, des isolants, des échangeurs thermiques et de la diffusion de chaleur.',
      lesson: {
        sections: [
          'Auteur : Joseph Fourier (1768–1830). Son ouvrage Théorie analytique de la chaleur paraît en 1822 et développe une approche mathématique systématique de la conduction et de la diffusion thermique.',


          'Équation vectorielle : q = −k∇T. q est le vecteur flux thermique par unité de surface, k la conductivité thermique du matériau et ∇T le gradient spatial de température. Le signe négatif indique que le flux est dirigé vers les températures plus basses.',


          'Dans une dimension, la relation s’écrit qₓ = −k dT/dx. Pour un matériau homogène et isotrope, k est une propriété du matériau dont la valeur dépend notamment de la température. Lorsque le flux est uniforme et perpendiculaire à une surface A, la puissance thermique transférée peut s’écrire P = qA en utilisant q comme valeur du flux.'
        ],
        example: {
          statement: 'Dans une paroi, la température augmente lorsque x augmente. Dans quelle direction est orienté le flux thermique selon la loi de Fourier ?',
          calculation: 'Si dT/dx est positif et k positif, alors qₓ = −k dT/dx est négatif.',
          answer: 'Le flux thermique est orienté vers les x décroissants, donc vers la région plus froide.'
        },
        exercise: {
          question: 'Pourquoi la loi de Fourier comporte-t-elle un signe négatif ?',
          answer: 'Parce que le transfert thermique par conduction se produit dans la direction opposée au gradient de température.'
        },
        exercises: [
          {
            question: 'Qui est l’auteur associé à cette loi ?',
            answer: 'Joseph Fourier.'
          },
          {
            question: 'Quelle est l’unité SI de la conductivité thermique ?',
            answer: 'Le watt par mètre-kelvin, noté W·m⁻¹·K⁻¹.'
          },
          {
            question: 'Que prédit la loi si la température est uniforme dans l’espace ?',
            answer: 'Le gradient de température est nul et le flux conductif prédit par cette loi est nul.'
          }
        ],
        sources: [
          {
            title: 'Encyclopaedia Britannica — Joseph Fourier',
            url: 'https://www.britannica.com/biography/Joseph-Baron-Fourier'
          },
          {
            title: 'OpenStax — Heat Transfer Methods',
            url: 'https://openstax.org/books/college-physics-2e/pages/14-7-heat-transfer-methods'
          }
        ]
      }
    },


    {
      id: 'ohm-circuit',
      title: 'La loi d’Ohm',
      formula: "V = R × I",
      equationDetails: {
        label: "Loi d’Ohm",
        formula: "V = R × I",
        parameters: [
          {
            symbol: "V",
            label: "Tension électrique aux bornes du composant",
            unit: "V"
          },
          {
            symbol: "R",
            label: "Résistance électrique",
            unit: "Ω"
          },
          {
            symbol: "I",
            label: "Intensité du courant électrique",
            unit: "A"
          }
        ]
      },
      field: 'Électricité · Circuits électriques · 1827',
      summary: 'La loi d’Ohm relie la tension électrique, l’intensité du courant et la résistance d’un conducteur ohmique. Elle constitue une base de l’analyse des circuits électriques, à condition de vérifier que le composant suit effectivement cette relation.',
      lesson: {
        sections: [
          'Auteur : Georg Simon Ohm (1789–1854). Il publie ses recherches dans Die galvanische Kette, mathematisch bearbeitet en 1827. Ses travaux établissent une relation quantitative entre courant, tension et résistance.',


          'Équation : V = IR. V est la tension électrique aux bornes du composant, I l’intensité du courant qui le traverse et R sa résistance électrique. La tension s’exprime en volts, le courant en ampères et la résistance en ohms.',


          'Pour un conducteur ohmique dont les conditions physiques restent constantes, le rapport V/I est constant. La relation peut être réarrangée sous les formes I = V/R et R = V/I. Tous les composants ne sont pas ohmiques : une diode ou une lampe à filament, par exemple, peut avoir une caractéristique électrique non linéaire.'
        ],
        example: {
          statement: 'Une résistance de 6 Ω est soumise à une tension de 12 V. Quelle intensité la traverse ?',
          calculation: 'I = V/R = 12/6 = 2 A.',
          answer: 'L’intensité du courant vaut 2 A, en supposant que la résistance reste ohmique dans ces conditions.'
        },
        exercise: {
          question: 'Quelle formule permet de calculer le courant à partir de la tension et de la résistance ?',
          answer: 'I = V/R.'
        },
        exercises: [
          {
            question: 'Quelle est l’unité de la résistance électrique ?',
            answer: 'L’ohm, symbole Ω.'
          },
          {
            question: 'Si la tension double et que la résistance reste constante, comment évolue le courant ?',
            answer: 'Le courant double.'
          },
          {
            question: 'Tous les composants électriques suivent-ils la loi d’Ohm ?',
            answer: 'Non. La relation s’applique aux composants ohmiques dans les conditions où leur résistance reste constante.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Ohm’s Law',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law'
          },
          {
            title: 'Encyclopaedia Britannica — Georg Simon Ohm',
            url: 'https://www.britannica.com/biography/Georg-Simon-Ohm'
          }
        ]
      }
    },


    {
      id: 'maxwell-electromagnetisme',
      title: 'Les équations de Maxwell',
      formula: "∮E·dA = Qint / ε₀ ; ∮B·dA = 0 ; ∮E·dl = −dΦB/dt ; ∮B·dl = μ₀ × Iint + μ₀ × ε₀ × dΦE/dt",
      equationDetails: {
        label: "Équations de Maxwell (forme intégrale, dans le vide)",
        formula: "∮E·dA = Qint / ε₀ ; ∮B·dA = 0 ; ∮E·dl = −dΦB/dt ; ∮B·dl = μ₀ × Iint + μ₀ × ε₀ × dΦE/dt",
        parameters: [
          {
            symbol: "E",
            label: "Champ électrique",
            unit: "V/m"
          },
          {
            symbol: "B",
            label: "Champ magnétique",
            unit: "T"
          },
          {
            symbol: "dA",
            label: "Élément de surface orienté d’une surface fermée ou délimitée par un contour",
            unit: "m²"
          },
          {
            symbol: "dl",
            label: "Élément de longueur orienté du contour",
            unit: "m"
          },
          {
            symbol: "Qint",
            label: "Charge électrique enfermée par la surface fermée",
            unit: "C"
          },
          {
            symbol: "Iint",
            label: "Courant traversant la surface délimitée par le contour",
            unit: "A"
          },
          {
            symbol: "ΦB",
            label: "Flux magnétique",
            unit: "Wb"
          },
          {
            symbol: "ΦE",
            label: "Flux électrique",
            unit: "V·m"
          },
          {
            symbol: "ε₀",
            label: "Permittivité électrique du vide",
            unit: "F/m"
          },
          {
            symbol: "μ₀",
            label: "Perméabilité magnétique du vide",
            unit: "H/m"
          },
          {
            symbol: "t",
            label: "Temps",
            unit: "s"
          }
        ]
      },
      field: 'Électromagnétisme · 1865',
      summary: 'Les équations de Maxwell réunissent les lois fondamentales des champs électriques et magnétiques. Elles décrivent les relations entre charges, courants, champs variables et induction électromagnétique, et permettent de comprendre la propagation des ondes électromagnétiques.',
      lesson: {
        sections: [
          'Auteur : James Clerk Maxwell (1831–1879). Il développe sa théorie électromagnétique dans les années 1860. Son traité A Treatise on Electricity and Magnetism paraît en 1873. La présentation moderne des équations diffère de la formulation historique de Maxwell.',


          'Dans le vide, une forme intégrale SI des quatre équations est la suivante : ∮E·dA = Qint/ε₀ ; ∮B·dA = 0 ; ∮E·dl = −dΦB/dt ; ∮B·dl = μ₀Iint + μ₀ε₀ dΦE/dt. Ces relations correspondent respectivement à la loi de Gauss électrique, à la loi de Gauss magnétique, à la loi de Faraday et à la loi d’Ampère-Maxwell.',


          'E représente le champ électrique, B le champ magnétique, Qint la charge enfermée par une surface fermée, ΦB le flux magnétique, ΦE le flux électrique et Iint le courant traversant la surface choisie. ε₀ est la permittivité du vide et μ₀ sa perméabilité. Les intégrales et les flux doivent être interprétés avec les conventions d’orientation appropriées.'
        ],
        example: {
          statement: 'Que signifie le terme −dΦB/dt dans la loi de Faraday ?',
          calculation: 'Il représente l’opposé du taux de variation temporelle du flux magnétique à travers une surface délimitée par le contour considéré.',
          answer: 'Une variation du flux magnétique induit un champ électrique circulant. Le signe négatif exprime la loi de Lenz avec la convention d’orientation choisie.'
        },
        exercise: {
          question: 'Quelle idée centrale exprime la loi de Faraday ?',
          answer: 'Une variation temporelle du flux magnétique est associée à un champ électrique induit.'
        },
        exercises: [
          {
            question: 'Combien d’équations composent la présentation classique des équations de Maxwell ?',
            answer: 'Quatre équations.'
          },
          {
            question: 'Que dit la loi de Gauss magnétique pour une surface fermée ?',
            answer: 'Le flux magnétique net à travers toute surface fermée est nul.'
          },
          {
            question: 'Quel ajout Maxwell a-t-il introduit dans la loi d’Ampère ?',
            answer: 'Un terme associé à la variation temporelle du flux électrique, appelé terme de courant de déplacement dans cette formulation.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Maxwell’s Equations and Electromagnetic Waves',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves'
          },
          {
            title: 'OpenStax — Key Equations, Electromagnetism',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/16-key-equations'
          },
          {
            title: 'Encyclopaedia Britannica — James Clerk Maxwell',
            url: 'https://www.britannica.com/biography/James-Clerk-Maxwell'
          }
        ]
      }
    },


    {
      id: 'planck-quantification',
      title: 'La relation de Planck : énergie d’un photon',
      formula: "E = h × ν",
      equationDetails: {
        label: "Relation de Planck",
        formula: "E = h × ν",
        parameters: [
          {
            symbol: "E",
            label: "Énergie du photon",
            unit: "J"
          },
          {
            symbol: "h",
            label: "Constante de Planck",
            unit: "J·s"
          },
          {
            symbol: "ν",
            label: "Fréquence du rayonnement",
            unit: "Hz"
          }
        ]
      },
      field: 'Physique quantique · 1900',
      summary: 'La relation de Planck associe l’énergie d’un photon à la fréquence de son rayonnement. Elle constitue un repère fondamental de la physique quantique et permet de comprendre pourquoi les rayonnements de fréquences différentes transportent des quanta d’énergie différents.',
      lesson: {
        sections: [
          'Auteur : Max Planck (1858–1947). En 1900, il introduit la quantification de l’énergie dans son étude du rayonnement du corps noir. La relation E = hν est aujourd’hui utilisée pour exprimer l’énergie d’un photon.',


          'Équation : E = hν. E est l’énergie du photon, h la constante de Planck et ν (nu) la fréquence du rayonnement. L’énergie s’exprime en joules et la fréquence en hertz.',


          'Dans le vide, la fréquence et la longueur d’onde sont liées par ν = c/λ. La relation énergétique peut donc aussi s’écrire E = hc/λ, où c est la vitesse de la lumière dans le vide et λ la longueur d’onde dans le vide. À fréquence plus élevée, l’énergie de chaque photon est plus élevée.'
        ],
        example: {
          statement: 'Deux photons possèdent des fréquences ν et 3ν. Quel est le rapport entre leurs énergies ?',
          calculation: 'E₂/E₁ = h(3ν)/(hν) = 3.',
          answer: 'Le second photon possède 3 fois l’énergie du premier.'
        },
        exercise: {
          question: 'Quelle propriété du rayonnement détermine directement l’énergie d’un photon ?',
          answer: 'Sa fréquence, selon la relation E = hν.'
        },
        exercises: [
          {
            question: 'Que représente h ?',
            answer: 'La constante de Planck, dont la valeur exacte dans le SI est 6,62607015 × 10⁻³⁴ J·s.'
          },
          {
            question: 'Si la fréquence d’un photon augmente, que devient son énergie ?',
            answer: 'Elle augmente proportionnellement à la fréquence.'
          },
          {
            question: 'Quel scientifique est associé à l’introduction de la quantification de l’énergie en 1900 ?',
            answer: 'Max Planck.'
          }
        ],
        sources: [
          {
            title: 'Nobel Prize — Max Planck, Nobel Lecture',
            url: 'https://www.nobelprize.org/prizes/physics/1918/planck/lecture/'
          },
          {
            title: 'NIST — Fundamental Physical Constants',
            url: 'https://physics.nist.gov/cuu/Constants/'
          }
        ]
      }
    },


    {
      id: 'einstein-equivalence-masse-energie',
      title: 'L’équivalence masse-énergie',
      formula: "E₀ = m × c²",
      equationDetails: {
        label: "Équivalence masse-énergie",
        formula: "E₀ = m × c²",
        parameters: [
          {
            symbol: "E₀",
            label: "Énergie au repos",
            unit: "J"
          },
          {
            symbol: "m",
            label: "Masse au repos",
            unit: "kg"
          },
          {
            symbol: "c",
            label: "Vitesse de la lumière dans le vide (299 792 458 m/s)",
            unit: "m/s"
          }
        ]
      },
      field: 'Relativité restreinte · 1905',
      summary: 'La relation masse-énergie indique qu’une masse au repos correspond à une énergie au repos. Elle a profondément transformé la compréhension de la matière et de l’énergie, notamment en physique nucléaire et en physique des particules.',
      lesson: {
        sections: [
          'Auteur : Albert Einstein (1879–1955). En 1905, il publie un travail établissant qu’une variation d’énergie d’un corps peut s’accompagner d’une variation de sa masse. L’écriture compacte E₀ = mc² est devenue la forme emblématique de cette équivalence.',


          'Équation : E₀ = mc². E₀ est l’énergie au repos, m la masse au repos et c la vitesse de la lumière dans le vide, exactement égale à 299 792 458 m/s dans le SI.',


          'Le facteur c² explique qu’une petite masse corresponde à une énergie au repos importante. Il faut distinguer l’énergie au repos de l’énergie totale d’un corps en mouvement. Dans la relativité restreinte, la relation générale est E² = (pc)² + (mc²)², où p représente la quantité de mouvement.'
        ],
        example: {
          statement: 'Si la masse au repos d’un système double, comment évolue son énergie au repos ?',
          calculation: 'E₀ = mc². La vitesse de la lumière étant constante, doubler m double E₀.',
          answer: 'L’énergie au repos double.'
        },
        exercise: {
          question: 'Que signifie l’indice 0 dans E₀ = mc² ?',
          answer: 'Il indique que l’énergie considérée est l’énergie au repos.'
        },
        exercises: [
          {
            question: 'En quelle année Einstein publie-t-il son travail fondateur sur cette équivalence ?',
            answer: 'En 1905.'
          },
          {
            question: 'Quelle est la valeur exacte de c dans le SI ?',
            answer: '299 792 458 m/s.'
          },
          {
            question: 'La formule E₀ = mc² donne-t-elle à elle seule l’énergie totale d’un corps en mouvement ?',
            answer: 'Non. Elle donne l’énergie au repos. L’énergie totale relativiste dépend également de la quantité de mouvement.'
          }
        ],
        sources: [
          {
            title: 'American Physical Society — September, 1905: Energy and Mass are Equivalent',
            url: 'https://www.aps.org/apsnews/2005/04/september-1905-energy-mass-equivalent'
          },
          {
            title: 'Stanford Encyclopedia of Philosophy — The Equivalence of Mass and Energy',
            url: 'https://plato.stanford.edu/entries/equivME/'
          },
          {
            title: 'NIST — Fundamental Physical Constants',
            url: 'https://physics.nist.gov/cuu/Constants/'
          }
        ]
      }
    },

    {
      id: 'schrodinger-quantique',
      title: 'L’équation de Schrödinger dépendante du temps',
      formula: "iℏ × ∂ψ/∂t = Ĥψ",
      equationDetails: {
        label: "Équation de Schrödinger dépendante du temps",
        formula: "iℏ × ∂ψ/∂t = Ĥψ",
        parameters: [
          {
            symbol: "i",
            label: "Unité imaginaire",
            unit: "sans unité"
          },
          {
            symbol: "ℏ",
            label: "Constante de Planck réduite (h / 2π)",
            unit: "J·s"
          },
          {
            symbol: "ψ",
            label: "Fonction d’onde (état quantique du système)",
            unit: "m⁻³ᐟ² (particule en 3D)"
          },
          {
            symbol: "t",
            label: "Temps",
            unit: "s"
          },
          {
            symbol: "Ĥ",
            label: "Opérateur hamiltonien (énergie totale du système)",
            unit: "J"
          }
        ]
      },
      field: 'Mécanique quantique · 1926',
      summary: 'L’équation de Schrödinger décrit l’évolution temporelle de l’état quantique dans la formulation non relativiste. Elle constitue un outil fondamental pour étudier les atomes, les molécules et les systèmes quantiques.',
      lesson: {
        sections: [
          'Auteur : Erwin Schrödinger (1887–1961). En 1926, il développe la mécanique ondulatoire dans une série de travaux consacrés à la quantification comme problème de valeurs propres. Cette approche devient l’une des formulations fondamentales de la mécanique quantique.',


          'Équation dépendante du temps : iℏ ∂ψ/∂t = Ĥψ. i est l’unité imaginaire, ℏ la constante de Planck réduite, ψ la fonction d’onde et Ĥ l’opérateur hamiltonien représentant l’énergie totale dans le modèle considéré.',


          'Pour une particule non relativiste de masse m soumise à un potentiel V, l’hamiltonien usuel s’écrit Ĥ = −(ℏ²/2m)∇² + V. La fonction d’onde sert à calculer les probabilités des résultats de mesure. Elle ne représente pas simplement une trajectoire classique. La forme présentée est non relativiste.'
        ],
        example: {
          statement: 'À quoi sert principalement l’équation de Schrödinger dépendante du temps ?',
          calculation: 'Elle relie la variation temporelle de la fonction d’onde à l’action de l’opérateur hamiltonien sur cette fonction.',
          answer: 'Elle permet de déterminer l’évolution temporelle de l’état quantique à partir de son état initial et de l’hamiltonien.'
        },
        exercise: {
          question: 'Que représente ψ dans l’équation de Schrödinger ?',
          answer: 'La fonction d’onde qui représente l’état quantique du système.'
        },
        exercises: [
          {
            question: 'En quelle année Schrödinger développe-t-il ses travaux fondateurs ?',
            answer: 'En 1926.'
          },
          {
            question: 'Que représente Ĥ ?',
            answer: 'L’opérateur hamiltonien, associé à l’énergie totale du système dans le modèle choisi.'
          },
          {
            question: 'La forme présentée est-elle une équation relativiste complète ?',
            answer: 'Non. Il s’agit de la forme standard non relativiste.'
          }
        ],
        sources: [
          {
            title: 'Nobel Prize — Erwin Schrödinger, Nobel Lecture',
            url: 'https://www.nobelprize.org/prizes/physics/1933/schrodinger/lecture/'
          },
          {
            title: 'OpenStax — The Schrödinger Equation',
            url: 'https://openstax.org/books/university-physics-volume-3/pages/7-3-the-schrodinger-equation'
          },
          {
            title: 'Nobel Prize — The Nobel Prize in Physics 1901–2000',
            url: 'https://www.nobelprize.org/prizes/themes/the-nobel-prize-in-physics-1901-2000/'
          }
        ]
      }
    },

  
    {
      id: 'hooke-elasticite',
      title: 'La loi de Hooke : force de rappel d’un ressort',
      formula: "F = −k × x",
      equationDetails: {
        label: "Loi de Hooke",
        formula: "F = −k × x",
        parameters: [
          {
            symbol: "F",
            label: "Force de rappel exercée par le ressort",
            unit: "N"
          },
          {
            symbol: "k",
            label: "Constante de raideur du ressort",
            unit: "N/m"
          },
          {
            symbol: "x",
            label: "Allongement ou compression par rapport à la position d’équilibre",
            unit: "m"
          }
        ]
      },
      field: 'Mécanique · Élasticité · 1678',
      summary: 'La loi de Hooke affirme que la force de rappel d’un ressort est proportionnelle à sa déformation. Elle fournit le modèle de base de l’élasticité linéaire et des oscillations d’un système masse-ressort.',
      lesson: {
        sections: [
          'Auteur : Robert Hooke. Il énonce d’abord sa loi en 1660 sous la forme d’un anagramme latin ; la solution, « Ut tensio, sic vis » (« telle l’extension, telle la force »), est publiée en 1678.',


          'Équation : F = −kx. F est la force de rappel exercée par le ressort, k sa constante de raideur et x le déplacement par rapport à la position d’équilibre. Le signe négatif indique que la force de rappel est de sens opposé au déplacement.',


          'La loi de Hooke est une approximation de la réponse des corps élastiques : elle n’est valable que tant que la déformation reste inférieure à la limite de proportionnalité. L’énergie potentielle élastique stockée dans le ressort s’écrit Ep = ½kx². Plus k est grand, plus le ressort est rigide.'
        ],
        example: {
          statement: 'Un ressort de constante de raideur k = 200 N/m est allongé de 0,05 m par rapport à sa position d’équilibre. Quelle est la norme de la force de rappel ?',
          calculation: '|F| = k × |x| = 200 × 0,05 = 10 N.',
          answer: 'La force de rappel a une norme de 10 N et elle est dirigée vers la position d’équilibre, tant que la limite de proportionnalité n’est pas dépassée.'
        },
        exercise: {
          question: 'Que devient la norme de la force de rappel si l’allongement double, dans le domaine de validité de la loi ?',
          answer: 'Elle double, car la force est proportionnelle à l’allongement.'
        },
        exercises: [
          {
            question: 'Quelle est l’unité SI de la constante de raideur k ?',
            answer: 'Le newton par mètre (N/m).'
          },
          {
            question: 'Quand la loi de Hooke cesse-t-elle de s’appliquer ?',
            answer: 'Lorsque la déformation dépasse la limite de proportionnalité du ressort.'
          },
          {
            question: 'Quelle énergie est stockée dans un ressort de raideur 200 N/m allongé de 0,05 m ?',
            answer: 'Ep = ½kx² = ½ × 200 × 0,05² = 0,25 J.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Hooke’s Law: Stress and Strain Revisited',
            url: 'https://openstax.org/books/college-physics/pages/16-1-hookes-law-stress-and-strain-revisited'
          },
          {
            title: 'LibreTexts (Boundless) — Hooke’s Law',
            url: 'https://phys.libretexts.org/Bookshelves/University_Physics/Physics_%28Boundless%29/15%3A_Waves_and_Vibrations/15.2%3A_Hookes_Law'
          },
          {
            title: 'The Open University — Hooke’s law',
            url: 'https://www.open.edu/openlearncreate/mod/glossary/showentry.php?eid=9922'
          }
        ]
      }
    },


    {
      id: 'newton-deuxieme-loi',
      title: 'La deuxième loi de Newton',
      formula: "ΣF = m × a",
      equationDetails: {
        label: "Deuxième loi de Newton",
        formula: "ΣF = m × a",
        parameters: [
          {
            symbol: "ΣF",
            label: "Somme des forces extérieures appliquées au système (force nette)",
            unit: "N"
          },
          {
            symbol: "m",
            label: "Masse du système",
            unit: "kg"
          },
          {
            symbol: "a",
            label: "Accélération du système",
            unit: "m/s²"
          }
        ]
      },
      field: 'Mécanique classique · Dynamique · 1687',
      summary: 'La deuxième loi de Newton relie la force nette appliquée à un système à son accélération. Elle constitue l’équation centrale de la dynamique classique et permet de prévoir le mouvement à partir des forces.',
      lesson: {
        sections: [
          'Auteur : Isaac Newton. La loi figure dans les Principia, publiés en 1687. Dans sa formulation d’origine, elle fait référence à la variation de la « quantité de mouvement » ; la forme F = ma est l’écriture moderne couramment enseignée.',


          'Équation : ΣF = ma. ΣF est la somme vectorielle des forces extérieures qui s’exercent sur le système, m sa masse et a son accélération. L’accélération a la même direction et le même sens que la force nette, et elle est inversement proportionnelle à la masse.',


          'Une forme équivalente, plus générale, utilise la quantité de mouvement p : ΣF = dp/dt. La loi est valable dans un référentiel inertiel et seules les forces extérieures sont à prendre en compte. Le newton est la force qui communique une accélération de 1 m/s² à une masse de 1 kg.'
        ],
        example: {
          statement: 'Une force nette de 12 N agit sur un objet de masse 3 kg. Quelle est son accélération ?',
          calculation: 'a = ΣF / m = 12 / 3 = 4 m/s².',
          answer: 'L’accélération vaut 4 m/s², dans la direction et le sens de la force nette.'
        },
        exercise: {
          question: 'Si la force nette double et que la masse reste constante, que devient l’accélération ?',
          answer: 'Elle double, car l’accélération est proportionnelle à la force nette.'
        },
        exercises: [
          {
            question: 'En quelle année les Principia de Newton sont-ils publiés ?',
            answer: 'En 1687.'
          },
          {
            question: 'Que vaut l’accélération d’un objet dont la force nette est nulle ?',
            answer: 'Elle est nulle : la vitesse reste constante, ce qui correspond à la première loi de Newton.'
          },
          {
            question: 'Comment s’exprime le newton en unités de base du SI ?',
            answer: '1 N = 1 kg·m/s².'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Newton’s Second Law (University Physics, Volume 1)',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law'
          },
          {
            title: 'OpenStax — Key Equations, Newton’s Laws of Motion (University Physics, Volume 1)',
            url: 'https://openstax.org/books/university-physics-volume-1/pages/5-key-equations'
          },
          {
            title: 'OpenStax — Newton’s Second Law of Motion (Physics)',
            url: 'https://openstax.org/books/physics/pages/4-3-newtons-second-law-of-motion'
          }
        ]
      }
    },


    {
      id: 'faraday-induction',
      title: 'La loi de Faraday de l’induction électromagnétique',
      formula: "ε = −N × dΦm/dt",
      equationDetails: {
        label: "Loi de Faraday de l’induction électromagnétique",
        formula: "ε = −N × dΦm/dt",
        parameters: [
          {
            symbol: "ε",
            label: "Force électromotrice induite dans la boucle fermée",
            unit: "V"
          },
          {
            symbol: "N",
            label: "Nombre de spires de la bobine",
            unit: "sans unité"
          },
          {
            symbol: "Φm",
            label: "Flux magnétique à travers une spire",
            unit: "Wb"
          },
          {
            symbol: "t",
            label: "Temps",
            unit: "s"
          }
        ]
      },
      field: 'Électromagnétisme · Induction · 1831',
      summary: 'La loi de Faraday relie la force électromotrice induite dans un circuit à la vitesse de variation du flux magnétique qui le traverse. Elle est à l’origine du fonctionnement des générateurs, des transformateurs et de nombreux capteurs.',
      lesson: {
        sections: [
          'Auteur : Michael Faraday. Les premières expériences productives sur les effets des champs magnétiques variables dans le temps sont réalisées par Faraday en 1831. Il parvient à interpréter l’ensemble de ces expériences au moyen d’une même loi, que Maxwell intégrera ensuite à sa théorie électromagnétique.',


          'Équation : ε = −N dΦm/dt. ε est la force électromotrice induite dans une boucle fermée, N le nombre de spires et Φm le flux magnétique à travers une spire, défini par Φm = ∫ B·n dA. La force électromotrice est proportionnelle à la vitesse de variation du flux.',


          'Le signe négatif traduit la loi de Lenz : le sens de la force électromotrice induite s’oppose à la variation de flux qui lui donne naissance. Seule la variation du flux compte : en l’absence de variation de flux, aucune force électromotrice n’est induite. Pour un contour fermé, la loi s’écrit aussi ε = ∮E·dl = −dΦm/dt.'
        ],
        example: {
          statement: 'Une bobine de 100 spires est traversée par un flux magnétique qui, par spire, passe uniformément de 5,0 × 10⁻³ Wb à 1,0 × 10⁻³ Wb en 0,20 s. Quelle est la valeur absolue de la force électromotrice induite ?',
          calculation: 'dΦm/dt = (1,0 × 10⁻³ − 5,0 × 10⁻³) / 0,20 = −2,0 × 10⁻² Wb/s. |ε| = N × |dΦm/dt| = 100 × 2,0 × 10⁻² = 2,0 V.',
          answer: 'La force électromotrice induite a une valeur absolue de 2,0 V.'
        },
        exercise: {
          question: 'Que traduit le signe négatif dans la loi de Faraday ?',
          answer: 'Il traduit la loi de Lenz : la force électromotrice induite s’oppose à la variation de flux qui la produit.'
        },
        exercises: [
          {
            question: 'En quelle année Faraday réalise-t-il ses premières expériences productives sur les champs magnétiques variables ?',
            answer: 'En 1831.'
          },
          {
            question: 'Une force électromotrice est-elle induite si le flux magnétique reste constant ?',
            answer: 'Non. Sans variation de flux, aucune force électromotrice n’est induite.'
          },
          {
            question: 'Quelle est l’unité SI du flux magnétique ?',
            answer: 'Le weber (Wb).'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Faraday’s Law (University Physics, Volume 2)',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law'
          },
          {
            title: 'OpenStax — Key Equations, Electromagnetic Induction (University Physics, Volume 2)',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/13-key-equations'
          },
          {
            title: 'OpenStax — Chapter Summary, Electromagnetic Induction (University Physics, Volume 2)',
            url: 'https://openstax.org/books/university-physics-volume-2/pages/13-summary'
          }
        ]
      }
    },


    {
      id: 'clapeyron-gaz-parfait',
      title: 'La loi des gaz parfaits',
      formula: "p × V = n × R × T",
      equationDetails: {
        label: "Loi des gaz parfaits",
        formula: "p × V = n × R × T",
        parameters: [
          {
            symbol: "p",
            label: "Pression du gaz",
            unit: "Pa"
          },
          {
            symbol: "V",
            label: "Volume occupé par le gaz",
            unit: "m³"
          },
          {
            symbol: "n",
            label: "Quantité de matière du gaz",
            unit: "mol"
          },
          {
            symbol: "R",
            label: "Constante universelle des gaz parfaits",
            unit: "J/(mol·K)"
          },
          {
            symbol: "T",
            label: "Température absolue du gaz",
            unit: "K"
          }
        ]
      },
      field: 'Thermodynamique · Gaz parfaits · 1834',
      summary: 'La loi des gaz parfaits relie la pression, le volume, la quantité de matière et la température d’un gaz dans le modèle idéal. Elle regroupe plusieurs lois empiriques en une seule équation d’état et sert de point de départ à de nombreux calculs de thermodynamique.',
      lesson: {
        sections: [
          'Auteur : Émile Clapeyron (1799–1864). En 1834, dans son mémoire sur la puissance motrice de la chaleur, il combine les lois de Boyle–Mariotte et de Gay-Lussac en une équation d’état unique. Il l’écrit alors par unité de masse de gaz, sous la forme pv = RT, la constante R dépendant du gaz considéré. La forme avec la quantité de matière, pV = nRT, s’impose ensuite.',


          'Équation : pV = nRT. p est la pression du gaz, V son volume, n la quantité de matière en moles, T la température absolue en kelvins et R la constante universelle des gaz parfaits, voisine de 8,314 J·mol⁻¹·K⁻¹.',


          'Le modèle du gaz parfait est une bonne description aux basses pressions et aux hautes températures, lorsque les molécules interagissent très peu entre elles. Il décrit mal un gaz proche de son point de condensation. La loi contient comme cas particuliers les lois de Boyle (T et n constants), de Charles (p et n constants) et d’Avogadro (p et T constants).'
        ],
        example: {
          statement: 'Quel volume occupe 1,00 mol de gaz parfait à 273,15 K sous une pression de 101 325 Pa ?',
          calculation: 'V = nRT / p = (1,00 × 8,314 × 273,15) / 101 325 ≈ 2,271 × 10³ / 101 325 ≈ 2,24 × 10⁻² m³.',
          answer: 'Le volume est d’environ 2,24 × 10⁻² m³, soit environ 22,4 L, dans le modèle du gaz parfait.'
        },
        exercise: {
          question: 'À quantité de matière et température constantes, que devient la pression si le volume est divisé par 2 ?',
          answer: 'Elle double, conformément à la loi de Boyle, cas particulier de la loi des gaz parfaits.'
        },
        exercises: [
          {
            question: 'Pourquoi la température doit-elle être exprimée en kelvins dans cette loi ?',
            answer: 'Parce que la loi fait intervenir la température absolue : à volume et quantité de matière constants, la pression est proportionnelle à la température exprimée en kelvins.'
          },
          {
            question: 'Dans quelles conditions un gaz réel se rapproche-t-il du comportement d’un gaz parfait ?',
            answer: 'À basse pression et à haute température.'
          },
          {
            question: 'Quelle est l’unité SI de la constante R ?',
            answer: 'Le joule par mole et par kelvin (J·mol⁻¹·K⁻¹).'
          }
        ],
        sources: [
          {
            title: 'OpenStax — Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law (Chemistry 2e)',
            url: 'https://openstax.org/books/chemistry-2e/pages/9-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law'
          },
          {
            title: 'Encyclopaedia Britannica — Ideal gas law',
            url: 'https://www.britannica.com/print/article/451483'
          },
          {
            title: 'University of Cincinnati (Oesper Collections) — The Universal Gas Constant R',
            url: 'https://homepages.uc.edu/~jensenwb/reprints/100.%20Gas%20Constant.pdf'
          }
        ]
      }
    },


    {
      id: 'stefan-boltzmann-rayonnement',
      title: 'La loi de Stefan–Boltzmann',
      formula: "P = σ × A × T⁴",
      equationDetails: {
        label: "Loi de Stefan–Boltzmann (corps noir)",
        formula: "P = σ × A × T⁴",
        parameters: [
          {
            symbol: "P",
            label: "Puissance rayonnée par le corps noir",
            unit: "W"
          },
          {
            symbol: "σ",
            label: "Constante de Stefan–Boltzmann",
            unit: "W/(m²·K⁴)"
          },
          {
            symbol: "A",
            label: "Aire de la surface rayonnante",
            unit: "m²"
          },
          {
            symbol: "T",
            label: "Température absolue de la surface",
            unit: "K"
          }
        ]
      },
      field: 'Thermodynamique · Rayonnement thermique · 1879',
      summary: 'La loi de Stefan–Boltzmann indique que la puissance rayonnée par un corps noir est proportionnelle à la quatrième puissance de sa température absolue. Elle permet notamment d’estimer la température de surface des étoiles à partir de leur rayonnement.',
      lesson: {
        sections: [
          'Auteurs : Josef Stefan (1835–1893) et Ludwig Boltzmann (1844–1906). Stefan formule la loi en 1879 à partir de résultats expérimentaux, notamment des mesures de Tyndall sur le rayonnement d’un filament de platine. Boltzmann en donne en 1884 une démonstration théorique fondée sur des considérations thermodynamiques.',


          'Équation : P = σAT⁴. P est la puissance rayonnée par la surface d’aire A, T sa température absolue et σ la constante de Stefan–Boltzmann, d’environ 5,670374419 × 10⁻⁸ W·m⁻²·K⁻⁴. Par unité de surface, la loi s’écrit E = σT⁴.',


          'La loi s’applique aux corps noirs, surfaces théoriques qui absorbent tout le rayonnement incident. Pour une surface réelle, on introduit un facteur d’émissivité ε qui caractérise cette surface, et la puissance rayonnée s’écrit P = εσAT⁴. La puissance varie comme la quatrième puissance de la température : un faible écart de température entraîne un écart important de rayonnement.'
        ],
        example: {
          statement: 'La température absolue d’un corps noir double, sa surface restant constante. Comment évolue la puissance rayonnée ?',
          calculation: 'P ∝ T⁴, donc P₂ / P₁ = (2T / T)⁴ = 2⁴ = 16.',
          answer: 'La puissance rayonnée est multipliée par 16.'
        },
        exercise: {
          question: 'Comment la puissance rayonnée par un corps noir varie-t-elle avec sa température absolue ?',
          answer: 'Elle est proportionnelle à la quatrième puissance de la température absolue.'
        },
        exercises: [
          {
            question: 'Quelle puissance rayonne un corps noir de 1,00 m² à 300 K ?',
            answer: 'P = σAT⁴ = 5,670 × 10⁻⁸ × 1,00 × 300⁴ = 5,670 × 10⁻⁸ × 8,1 × 10⁹ ≈ 459 W.'
          },
          {
            question: 'Qui a établi la loi expérimentalement, et qui l’a démontrée théoriquement ?',
            answer: 'Josef Stefan l’a établie expérimentalement en 1879 et Ludwig Boltzmann l’a démontrée théoriquement en 1884.'
          },
          {
            question: 'La loi s’applique-t-elle sans correction à une surface réelle ?',
            answer: 'Non. Elle s’applique aux corps noirs ; pour une surface réelle, on introduit un facteur d’émissivité.'
          }
        ],
        sources: [
          {
            title: 'Encyclopaedia Britannica — Stefan-Boltzmann law',
            url: 'https://www.britannica.com/print/article/564843'
          },
          {
            title: 'Encyclopaedia Britannica — Josef Stefan',
            url: 'https://www.britannica.com/print/article/564834'
          },
          {
            title: 'Comptes Rendus Mécanique (Académie des sciences) — The eponymous, anonymous Joseph Stefan',
            url: 'https://comptes-rendus.academie-sciences.fr/mecanique/item/10.1016/j.crme.2012.03.005.pdf'
          }
        ]
      }
    },


    {
      id: 'rydberg-spectres',
      title: 'La formule de Rydberg : raies spectrales de l’hydrogène',
      formula: "1/λ = RH × (1/n1² − 1/n2²)",
      equationDetails: {
        label: "Formule de Rydberg pour l’hydrogène",
        formula: "1/λ = RH × (1/n1² − 1/n2²)",
        parameters: [
          {
            symbol: "λ",
            label: "Longueur d’onde de la raie spectrale",
            unit: "m"
          },
          {
            symbol: "RH",
            label: "Constante de Rydberg pour l’hydrogène (environ 1,09677583 × 10⁷ m⁻¹)",
            unit: "m⁻¹"
          },
          {
            symbol: "n1",
            label: "Nombre quantique principal du niveau inférieur (entier, n1 < n2)",
            unit: "sans unité"
          },
          {
            symbol: "n2",
            label: "Nombre quantique principal du niveau supérieur (entier)",
            unit: "sans unité"
          }
        ]
      },
      field: 'Physique atomique · Spectroscopie · 1888',
      summary: 'La formule de Rydberg donne les longueurs d’onde des raies d’émission de l’hydrogène à partir de deux nombres entiers. Établie de façon empirique, elle a joué un rôle important dans la mise en place du modèle quantique de l’atome.',
      lesson: {
        sections: [
          'Auteur : Johannes Rydberg (1854–1919), physicien suédois. En 1888, il reformule l’expression établie par Johann Balmer en 1885 pour les raies visibles de l’hydrogène et la généralise à d’autres séries de raies. Cette expression est empirique : elle n’est pas accompagnée d’une explication physique, qui sera apportée par Niels Bohr en 1913.',


          'Équation : 1/λ = RH(1/n1² − 1/n2²). λ est la longueur d’onde de la raie, RH la constante de Rydberg pour l’hydrogène, d’environ 1,09677583 × 10⁷ m⁻¹, et n1 et n2 des nombres entiers tels que n1 < n2.',


          'Pour n1 = 2 et n2 ≥ 3, on obtient la série de Balmer, dans le visible. Pour n1 = 1 et n2 ≥ 2, on obtient la série de Lyman, dans l’ultraviolet, et pour n1 = 3 et n2 ≥ 4 la série de Paschen, dans l’infrarouge. Dans le modèle de Bohr, une raie correspond à la transition d’un électron entre deux niveaux d’énergie. Des formules analogues s’appliquent aux ions hydrogénoïdes, qui ne possèdent qu’un seul électron.'
        ],
        example: {
          statement: 'Calculer la longueur d’onde de la première raie de la série de Balmer (n1 = 2, n2 = 3) avec RH = 1,09677583 × 10⁷ m⁻¹.',
          calculation: '1/λ = RH × (1/2² − 1/3²) = RH × (1/4 − 1/9) = RH × 5/36 ≈ 1,5233 × 10⁶ m⁻¹. Donc λ ≈ 6,565 × 10⁻⁷ m.',
          answer: 'La longueur d’onde est d’environ 656 nm, dans le rouge du spectre visible.'
        },
        exercise: {
          question: 'Quelles valeurs de n1 et n2 correspondent à la série de Balmer ?',
          answer: 'n1 = 2 et n2 est un entier supérieur ou égal à 3.'
        },
        exercises: [
          {
            question: 'En quelle année Rydberg propose-t-il sa formule ?',
            answer: 'En 1888.'
          },
          {
            question: 'Qui fournit une explication théorique de la formule en 1913 ?',
            answer: 'Niels Bohr, avec une forme primitive de mécanique quantique.'
          },
          {
            question: 'Quelle est la limite de la série de Balmer lorsque n2 tend vers l’infini ?',
            answer: '1/λ = RH/4, soit λ = 4/RH ≈ 3,65 × 10⁻⁷ m, environ 365 nm.'
          }
        ],
        sources: [
          {
            title: 'Encyclopaedia Britannica — Spectral line series',
            url: 'https://www.britannica.com/print/article/558836'
          },
          {
            title: 'Spectroscopy Online — The Spectral Lines of Hydrogen',
            url: 'https://www.spectroscopyonline.com/view/spectral-lines-hydrogen'
          },
          {
            title: 'Wikipedia — Rydberg formula',
            url: 'https://en.wikipedia.org/wiki/Rydberg_formula'
          }
        ]
      }
    },


    {
      id: 'lorentz-force',
      title: 'La force de Lorentz',
      formula: "F = q × (E + v × B)",
      equationDetails: {
        label: "Force de Lorentz",
        formula: "F = q × (E + v × B)",
        parameters: [
          {
            symbol: "F",
            label: "Force électromagnétique exercée sur la charge (vecteur)",
            unit: "N"
          },
          {
            symbol: "q",
            label: "Charge électrique de la particule",
            unit: "C"
          },
          {
            symbol: "E",
            label: "Champ électrique (vecteur)",
            unit: "V/m"
          },
          {
            symbol: "v",
            label: "Vitesse de la particule (vecteur)",
            unit: "m/s"
          },
          {
            symbol: "B",
            label: "Champ magnétique (vecteur)",
            unit: "T"
          }
        ]
      },
      field: 'Électromagnétisme · Particules chargées · 1895',
      summary: 'La force de Lorentz donne la force totale exercée par un champ électrique et un champ magnétique sur une charge ponctuelle. Elle relie les champs de Maxwell au mouvement des particules chargées et explique le fonctionnement des cyclotrons, des spectromètres de masse et de nombreux dispositifs.',
      lesson: {
        sections: [
          'Auteur : Hendrik Antoon Lorentz (1853–1928). La contribution magnétique sous forme de produit vectoriel est identifiée par Oliver Heaviside en 1889 ; Lorentz parvient à l’expression complète, incluant la contribution électrique, en 1895. La datation varie selon les sources : certaines mentionnent une première formulation par Lorentz dès 1892, et la loi est parfois considérée comme implicite dans un mémoire de Maxwell de 1865.',


          'Équation : F = q(E + v × B). F est la force exercée sur la charge q, E le champ électrique, v la vitesse de la charge et B le champ magnétique. Le terme qE est la force électrique et le terme qv × B la force magnétique.',


          'La force électrique agit que la charge soit en mouvement ou non. La force magnétique n’existe que si la charge est en mouvement : elle est perpendiculaire à la fois à v et à B. Elle ne travaille donc pas : elle modifie la direction de la vitesse, pas sa norme. Pour une charge de masse m en mouvement perpendiculaire à un champ magnétique uniforme, l’égalité entre la force magnétique et la force centripète donne la trajectoire circulaire de rayon r = mv / (|q|B).'
        ],
        example: {
          statement: 'Une particule de charge q = 2,0 × 10⁻⁶ C se déplace à la vitesse v = 3,0 × 10³ m/s perpendiculairement à un champ magnétique B = 0,50 T, en l’absence de champ électrique. Quelle est la norme de la force subie ?',
          calculation: '|F| = |q| × v × B = 2,0 × 10⁻⁶ × 3,0 × 10³ × 0,50 = 3,0 × 10⁻³ N.',
          answer: 'La force a une norme de 3,0 × 10⁻³ N, perpendiculaire à la vitesse et au champ magnétique.'
        },
        exercise: {
          question: 'La force magnétique agit-elle sur une charge immobile ?',
          answer: 'Non. La force magnétique qv × B est nulle si la vitesse est nulle ; seule la force électrique qE agit sur une charge immobile.'
        },
        exercises: [
          {
            question: 'Quel est l’effet de la force magnétique sur l’énergie cinétique d’une particule chargée ?',
            answer: 'Aucun : elle ne travaille pas. Elle change la direction de la vitesse mais pas sa norme.'
          },
          {
            question: 'Quelle est la direction de la force magnétique ?',
            answer: 'Elle est perpendiculaire au plan formé par v et B, avec un sens donné par la règle de la main droite pour une charge positive.'
          },
          {
            question: 'Qui identifie la contribution magnétique sous forme de produit vectoriel, et en quelle année ?',
            answer: 'Oliver Heaviside, en 1889.'
          }
        ],
        sources: [
          {
            title: 'LibreTexts (OpenStax College Physics) — Magnetic Field Strength: Force on a Moving Charge in a Magnetic Field',
            url: 'https://phys.libretexts.org/Bookshelves/College_Physics/College_Physics_1e_(OpenStax)/22%3A_Magnetism/22.04%3A_Magnetic_Field_Strength-_Force_on_a_Moving_Charge_in_a_Magnetic_Field'
          },
          {
            title: 'NPTEL — Module 3: Electromagnetism, The Lorentz Force',
            url: 'https://archive.nptel.ac.in/content/storage2/courses/122101002/Slides/Module-3/Lec-13/13.1_6.html'
          },
          {
            title: 'Physics Essays 8 (1995) — Weber’s Force versus Lorentz’s Force',
            url: 'https://www.ifi.unicamp.br/~assis/Phys-Essays-V8-p335-341(1995).pdf'
          }
        ]
      }
    },


    {
      id: 'de-broglie-ondes-de-matiere',
      title: 'La relation de de Broglie : ondes de matière',
      formula: "λ = h / p",
      equationDetails: {
        label: "Relation de de Broglie",
        formula: "λ = h / p",
        parameters: [
          {
            symbol: "λ",
            label: "Longueur d’onde associée à la particule",
            unit: "m"
          },
          {
            symbol: "h",
            label: "Constante de Planck",
            unit: "J·s"
          },
          {
            symbol: "p",
            label: "Quantité de mouvement de la particule",
            unit: "kg·m/s"
          }
        ]
      },
      field: 'Physique quantique · Dualité onde-corpuscule · 1924',
      summary: 'La relation de de Broglie associe une longueur d’onde à toute particule possédant une quantité de mouvement. Elle étend aux particules de matière la dualité onde-corpuscule déjà reconnue pour la lumière et prépare la mécanique ondulatoire.',
      lesson: {
        sections: [
          'Auteur : Louis de Broglie (1892–1987). Dans sa thèse de doctorat de 1924, Recherches sur la théorie des quanta, il propose que les électrons et les autres particules de matière puissent se comporter comme des ondes. Il reçoit le prix Nobel de physique en 1929, après la confirmation expérimentale de la nature ondulatoire de la matière en 1927.',


          'Équation : λ = h/p. λ est la longueur d’onde associée à la particule, h la constante de Planck et p la quantité de mouvement. Pour une particule non relativiste de masse m et de vitesse v, p = mv et λ = h/(mv). Pour une particule relativiste, p est la quantité de mouvement relativiste.',


          'La relation généralise celle d’un photon, dont la quantité de mouvement p = hν/c et la longueur d’onde λ = c/ν conduisent à λ = h/p. Plus la quantité de mouvement est grande, plus la longueur d’onde est petite : elle est inobservable pour un objet macroscopique, mais significative pour un électron. En 1926, l’hypothèse de de Broglie, associée à la théorie de Bohr, a conduit au développement de la mécanique quantique ondulatoire.'
        ],
        example: {
          statement: 'Un électron de masse 9,1 × 10⁻³¹ kg se déplace à 1,0 × 10⁶ m/s, vitesse non relativiste. Quelle est sa longueur d’onde de de Broglie, avec h = 6,626 × 10⁻³⁴ J·s ?',
          calculation: 'p = mv = 9,1 × 10⁻³¹ × 1,0 × 10⁶ = 9,1 × 10⁻²⁵ kg·m/s. λ = h/p = 6,626 × 10⁻³⁴ / 9,1 × 10⁻²⁵ ≈ 7,3 × 10⁻¹⁰ m.',
          answer: 'La longueur d’onde est d’environ 7,3 × 10⁻¹⁰ m, soit environ 0,73 nm.'
        },
        exercise: {
          question: 'La vitesse d’une particule non relativiste est multipliée par 4, sa masse restant constante. Que devient sa longueur d’onde de de Broglie ?',
          answer: 'Elle est divisée par 4, car λ = h/(mv) est inversement proportionnelle à la vitesse.'
        },
        exercises: [
          {
            question: 'En quelle année de Broglie présente-t-il l’hypothèse des ondes de matière ?',
            answer: 'En 1924, dans sa thèse de doctorat.'
          },
          {
            question: 'Quelle observation expérimentale confirme les ondes de matière en 1927 ?',
            answer: 'La diffraction d’électrons, observée notamment dans les expériences de Davisson et Germer.'
          },
          {
            question: 'Pourquoi n’observe-t-on pas de comportement ondulatoire pour une balle ?',
            answer: 'Parce que sa longueur d’onde de de Broglie est incommensurablement petite.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — De Broglie’s Matter Waves (University Physics, Volume 3)',
            url: 'https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves'
          },
          {
            title: 'Wikipedia — Louis de Broglie',
            url: 'https://en.wikipedia.org/wiki/Louis_de_Broglie'
          },
          {
            title: 'Chemistry Explained — Louis de Broglie',
            url: 'https://www.chemistryexplained.com/Co-Di/de-Broglie-Louis.html'
          }
        ]
      }
    },


    {
      id: 'heisenberg-incertitude',
      title: 'Le principe d’incertitude de Heisenberg',
      formula: "Δx × Δp ≥ ħ / 2",
      equationDetails: {
        label: "Relation d’incertitude position–quantité de mouvement",
        formula: "Δx × Δp ≥ ħ / 2",
        parameters: [
          {
            symbol: "Δx",
            label: "Incertitude sur la position (écart-type)",
            unit: "m"
          },
          {
            symbol: "Δp",
            label: "Incertitude sur la quantité de mouvement (écart-type)",
            unit: "kg·m/s"
          },
          {
            symbol: "ħ",
            label: "Constante de Planck réduite (h / 2π)",
            unit: "J·s"
          }
        ]
      },
      field: 'Mécanique quantique · 1927',
      summary: 'Le principe d’incertitude fixe une limite fondamentale à la précision avec laquelle la position et la quantité de mouvement d’une particule peuvent être définies simultanément. Il est l’une des pierres angulaires de la mécanique quantique.',
      lesson: {
        sections: [
          'Auteur : Werner Heisenberg. En 1927, il introduit la relation d’incertitude à partir d’une expérience de pensée, le « microscope de Heisenberg », sous la forme d’une inégalité approchée. La même année, Kennard en démontre rigoureusement la forme quantitative actuelle, Δx Δp ≥ ħ/2.',


          'Équation : Δx Δp ≥ ħ/2. Dans la formulation de Kennard, retenue par la plupart des manuels, Δx et Δp sont les écarts-types σx et σp de la position et de la quantité de mouvement. ħ est la constante de Planck réduite, égale à h/2π.',


          'Cette limite ne provient pas de l’imperfection des instruments : elle est liée au caractère ondulatoire des objets quantiques. Réduire Δx augmente nécessairement Δp, et inversement. Pour les objets de la vie courante, ħ est si petit que cette limite est négligeable.'
        ],
        example: {
          statement: 'L’incertitude sur la quantité de mouvement d’une particule est Δp = 1,0 × 10⁻²⁴ kg·m/s. Quelle est la valeur minimale de l’incertitude sur sa position, avec ħ = 1,055 × 10⁻³⁴ J·s ?',
          calculation: 'Δx ≥ ħ / (2Δp) = 1,055 × 10⁻³⁴ / (2 × 1,0 × 10⁻²⁴) ≈ 5,3 × 10⁻¹¹ m.',
          answer: 'L’incertitude sur la position ne peut pas être inférieure à environ 5,3 × 10⁻¹¹ m.'
        },
        exercise: {
          question: 'Si l’incertitude Δx est divisée par 2, que devient la valeur minimale de Δp ?',
          answer: 'Elle double, car le produit Δx Δp doit rester supérieur ou égal à ħ/2.'
        },
        exercises: [
          {
            question: 'En quelle année Heisenberg introduit-il la relation d’incertitude ?',
            answer: 'En 1927.'
          },
          {
            question: 'À quoi correspondent Δx et Δp dans la formulation de Kennard ?',
            answer: 'Aux écarts-types de la position et de la quantité de mouvement.'
          },
          {
            question: 'Le principe d’incertitude signifie-t-il seulement que les instruments de mesure sont imparfaits ?',
            answer: 'Non. Il traduit une propriété des objets quantiques, liée à leur comportement ondulatoire, et non une simple limite technique.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — The Heisenberg Uncertainty Principle (University Physics, Volume 3)',
            url: 'https://openstax.org/books/university-physics-volume-3/pages/7-2-the-heisenberg-uncertainty-principle'
          },
          {
            title: 'arXiv — Uncertainty relations: a small zoo of remarkable inequalities discovered since 1927',
            url: 'https://arxiv.org/pdf/2603.07293'
          },
          {
            title: 'arXiv — Continuous-variable entropic uncertainty relations',
            url: 'https://arxiv.org/pdf/1809.01052'
          }
        ]
      }
    },


    {
      id: 'hubble-lemaitre-expansion',
      title: 'La loi de Hubble–Lemaître : expansion de l’Univers',
      formula: "v = H0 × d",
      equationDetails: {
        label: "Loi de Hubble–Lemaître",
        formula: "v = H0 × d",
        parameters: [
          {
            symbol: "v",
            label: "Vitesse de récession de la galaxie",
            unit: "km/s"
          },
          {
            symbol: "H0",
            label: "Constante de Hubble–Lemaître (taux actuel d’expansion de l’Univers)",
            unit: "km/s/Mpc"
          },
          {
            symbol: "d",
            label: "Distance de la galaxie",
            unit: "Mpc"
          }
        ]
      },
      field: 'Cosmologie · Expansion de l’Univers · 1929',
      summary: 'La loi de Hubble–Lemaître indique que la vitesse de récession des galaxies lointaines est proportionnelle à leur distance. Elle constitue la première base observationnelle de l’expansion de l’Univers.',
      lesson: {
        sections: [
          'Auteurs : Georges Lemaître (1894–1966) et Edwin Hubble (1889–1953). En 1927, Lemaître publie un article en français dans lequel il déduit des équations de la relativité générale que la vitesse de récession des nébuleuses extragalactiques est proportionnelle à leur distance. En 1929, Hubble publie la confirmation observationnelle de cette relation. L’Union astronomique internationale a recommandé l’appellation « loi de Hubble–Lemaître ».',


          'Équation : v = H0d. v est la vitesse de récession de la galaxie, d sa distance et H0 la constante de Hubble–Lemaître, qui correspond au taux actuel d’expansion de l’Univers. Elle est généralement exprimée en km/s/Mpc.',


          'La loi décrit le comportement moyen des galaxies lointaines : les galaxies liées gravitationnellement dans des amas ont des vitesses orbitales plus grandes que celles dues à l’expansion. L’expression « vitesse de récession » est un abus de langage : elle traduit l’expansion de l’espace lui-même plutôt qu’un déplacement des galaxies dans l’espace. La valeur de H0 fait l’objet de débats et de mesures qui évoluent ; la valeur de 70 km/s/Mpc n’est utilisée ici qu’à titre d’illustration.'
        ],
        example: {
          statement: 'Avec H0 = 70 km/s/Mpc, quelle est la vitesse de récession d’une galaxie située à 100 Mpc ?',
          calculation: 'v = H0 × d = 70 × 100 = 7 000 km/s.',
          answer: 'La vitesse de récession est de 7 000 km/s, avec cette valeur illustrative de H0.'
        },
        exercise: {
          question: 'Comment calcule-t-on la distance d’une galaxie à partir de sa vitesse de récession et de H0 ?',
          answer: 'Par la relation d = v / H0.'
        },
        exercises: [
          {
            question: 'Qui publie le premier cette relation, et en quelle année ?',
            answer: 'Georges Lemaître, en 1927. Edwin Hubble publie sa confirmation observationnelle en 1929.'
          },
          {
            question: 'Quelle est l’unité usuelle de la constante H0 ?',
            answer: 'Le kilomètre par seconde et par mégaparsec (km/s/Mpc).'
          },
          {
            question: 'Avec H0 = 70 km/s/Mpc, à quelle distance se trouve une galaxie dont la vitesse de récession est de 3 000 km/s ?',
            answer: 'd = v / H0 = 3 000 / 70 ≈ 43 Mpc.'
          }
        ],
        sources: [
          {
            title: 'OpenStax — The Expanding Universe (Astronomy 2e)',
            url: 'https://openstax.org/books/astronomy-2e/pages/26-5-the-expanding-universe'
          },
          {
            title: 'Wikipedia — Hubble’s law',
            url: 'https://en.wikipedia.org/wiki/Hubble%27s_law'
          },
          {
            title: 'Observatoire de Paris — Etymological Dictionary of Astronomy and Astrophysics: Hubble-Lemaître law',
            url: 'https://dictionary.obspm.fr/terms/hubble-lemaitre-law/'
          },
          {
            title: 'Encyclopædia Universalis — Hubble-Lemaître, constante de',
            url: 'https://www.universalis.fr/encyclopedie/constante-de-hubble-lemaitre/'
          }
        ]
      }
    }
  ]
},
];

