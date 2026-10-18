Cours en ligne : dépôt principal

Site statique publié avec GitHub Pages. Le dépôt contient un portail d'accueil et plusieurs disciplines (mathématiques, physique, histoire, philosophie, etc.).

Nouvelle fonctionnalité : détection automatique des cours et mise à jour du portail. Lorsqu'un nouveau dossier de cours est ajouté au dépôt et respecte la structure attendue, le workflow de scan peut le détecter, lire ses métadonnées et ses données pédagogiques, puis mettre à jour la liste des cours affichés sur le portail. Les pages des cours s'appuient sur des modèles HTML communs et sur les moteurs JavaScript partagés.

L'objectif est de faciliter l'ajout de nouvelles disciplines sans devoir modifier manuellement le portail à chaque création.

1. Architecture du dépôt

Les fichiers sont organisés en trois catégories :

- Portail principal : page d'accueil et présentation des cours disponibles.
- Moteurs communs : scripts qui affichent les catalogues, les leçons et la navigation.
- Dossiers de cours : métadonnées, données pédagogiques et pages HTML associées à chaque discipline.

Fichiers principaux de la racine

Fichier| Rôle
"index.html"| Page d'accueil du dépôt et point d'entrée du portail
"portal.js"| Logique JavaScript du portail
"portal.css"| Styles propres au portail
"scan-courses.mjs"| Script de détection et de lecture des dossiers de cours
"courses-render.js"| Rendu de la liste des cours détectés dans le portail
"catalogue.js"| Moteur commun d'affichage des catalogues de branches et de chapitres
"cours.js"| Moteur commun d'affichage des leçons
"navigation.js"| Navigation secondaire partagée entre les pages
"styles.css"| Styles communs des pages de catalogue et de leçon
"cours-backup.js"| Sauvegarde d'une ancienne version du moteur des leçons
"meta-backup.json"| Sauvegarde de métadonnées, selon le processus de sauvegarde du projet

Les fichiers de sauvegarde ne doivent pas être chargés comme des moteurs actifs par les pages.

«Principe important : le scan détecte les cours, le rendu construit leur présentation dans le portail et les moteurs communs affichent les catalogues et les leçons. Ces rôles sont complémentaires et ne doivent pas être confondus.»

2. Nouvelle fonctionnalité : automatisation du portail

Fonctionnement général

Le workflow est conçu pour réduire les opérations manuelles nécessaires à l'ajout d'un cours.

1. Un nouveau dossier de cours est ajouté au dépôt.
2. "scan-courses.mjs" parcourt les dossiers et recherche les éléments attendus.
3. Le script identifie les métadonnées du cours dans "meta.json".
4. Il repère le fichier de données pédagogiques associé, par exemple "philosophie-data.js".
5. Les informations détectées servent à alimenter ou à actualiser la liste des cours disponibles.
6. "courses-render.js" et "portal.js" participent à l'affichage des cours dans le portail.
7. Le cours utilise les pages HTML du modèle et les moteurs communs pour afficher son catalogue et ses leçons.

Le résultat recherché est qu'un nouveau cours correctement structuré puisse être découvert et référencé automatiquement, sans ajout manuel d'un lien dans le portail pour chaque nouvelle discipline.

Attention : la détection d'un dossier et l'actualisation des fichiers ne signifient pas automatiquement que GitHub Pages a déjà publié la modification. La publication dépend également du déclenchement du workflow, de la génération des fichiers éventuels, de leur présence dans le dépôt publié et du déploiement.

3. Ajouter un nouveau cours

Structure attendue

Un nouveau dossier doit contenir les métadonnées, les données pédagogiques et, selon le mode de génération utilisé, les pages HTML requises.

Exemple de structure logique :

nouvelle-discipline/
├── meta.json
├── nouvelle-discipline-data.js
├── index.html
└── cours.html

Les fichiers "index.html" et "cours.html" peuvent être fournis par le modèle du projet ou préparés à partir de celui-ci. Leur création automatique doit dépendre du fonctionnement réel du script de scan.

Rôle des fichiers

Fichier| Fonction
"meta.json"| Décrit le cours et fournit les métadonnées nécessaires à sa détection
"nouvelle-discipline-data.js"| Contient les branches, les chapitres et les contenus pédagogiques
"index.html"| Page du catalogue de la discipline
"cours.html"| Page affichant une leçon à partir de son identifiant

Le fichier de données définit notamment "window.courseCatalog", tandis que les métadonnées servent à identifier le cours dans le workflow.

Procédure d'ajout

1. Créer un dossier pour la nouvelle discipline.
2. Ajouter un "meta.json" conforme au format attendu par le scanner.
3. Créer le fichier de données, par exemple "philosophie-data.js".
4. Vérifier que les identifiants des chapitres sont uniques dans le catalogue de la discipline.
5. S'assurer que les pages HTML utilisent les bons chemins vers les fichiers communs.
6. Exécuter le scanner et vérifier que le cours est détecté.
7. Contrôler que le portail affiche le cours et que les liens ouvrent les bonnes pages.
8. Tester au moins une leçon avant de publier.

Si le scanner et le générateur prennent en charge la création des pages à partir du modèle, les fichiers HTML n'ont pas nécessairement besoin d'être rédigés à nouveau pour chaque cours. Cette automatisation doit toutefois être confirmée dans le code du workflow.

4. Le modèle HTML commun

Le dossier modèle contient les pages HTML de référence utilisées pour les nouveaux cours :

- "index.html" : structure de la page catalogue ;
- "cours.html" : structure de la page de leçon.

Ces pages partagent les moteurs d'affichage et les styles du dépôt principal.

Chargement des ressources

Dans une discipline dont les pages se trouvent dans un sous-dossier de la racine, les chemins relatifs peuvent suivre ce modèle :

<link rel="stylesheet" href="../styles.css">

<script src="philosophie-data.js?v=1" defer></script>
<script src="../catalogue.js" defer></script>
<script src="../navigation.js" defer></script>

Pour la page de leçon, le moteur commun doit également être chargé :

<script src="philosophie-data.js?v=1" defer></script>
<script src="../cours.js" defer></script>
<script src="../navigation.js" defer></script>

Le fichier de données doit être disponible avant l'exécution du moteur qui l'utilise. Avec "defer", les scripts classiques externes sont exécutés après l'analyse du document et dans leur ordre d'apparition.

Lorsqu'un fichier de données est modifié, le paramètre de version peut être incrémenté pour éviter de réutiliser une ancienne version en cache.

Important : les chemins et le nom exact du modèle doivent correspondre à ceux utilisés par les fichiers réellement générés.

5. Format des données pédagogiques

Le fichier "nouvelle-discipline-data.js" expose le catalogue à travers "window.courseCatalog".

window.courseDiscipline = 'philosophie';

window.courseCatalog = [
  {
    id: 'histoire-philosophie',
    title: 'Histoire de la philosophie',
    note: 'Présentation de la branche.',
    chapters: [
      {
        id: 'philosophie-antique',
        title: 'La philosophie antique',
        field: 'Antiquité',
        summary: 'Présentation du chapitre.',
        lesson: {
          sections: [
            'Premier paragraphe du cours.',
            'Deuxième paragraphe du cours.'
          ],
          example: {
            statement: 'Question ou situation de départ.',
            calculation: 'Étapes du raisonnement.',
            answer: 'Conclusion expliquée.'
          },
          exercise: {
            question: 'Question de compréhension.',
            answer: 'Réponse corrigée.'
          },
          sources: [
            {
              title: 'Source documentaire',
              url: 'https://example.org/'
            }
          ]
        }
      }
    ]
  }
];

Cet exemple illustre le format des données ; "https://example.org/" est une adresse fictive à remplacer par une source réelle.

Les moteurs communs prennent en charge plusieurs champs, selon les formats déjà utilisés dans le dépôt :

- "sections" : paragraphes de la leçon ;
- "content" et "heading" : contenu HTML et titre ;
- "fiche" : paires de libellés et de valeurs ;
- "formula" et "equationDetails" : formules et explications ;
- "example" : exemple détaillé ;
- "exercise" et "exercises" : exercices avec réponses ;
- "sources" et "sourcesHeading" : références documentaires.

La compatibilité avec les anciens formats doit être conservée lors de toute évolution des moteurs communs.

6. Rôle des composants de l'automatisation

"scan-courses.mjs"

Ce script constitue le point de détection des dossiers. Il doit identifier les dossiers admissibles, lire leurs métadonnées et repérer les fichiers de données associés.

Les contrôles utiles comprennent :

- la présence du fichier "meta.json" ;
- la présence du fichier de données attendu ;
- la validité du JSON ;
- la cohérence des informations permettant d'identifier le cours ;
- la détection des dossiers incomplets ou invalides ;
- la prévention des doublons dans la liste des cours.

"courses-render.js"

Ce fichier participe à la génération ou au rendu de la liste des cours du portail. Il doit exploiter les informations disponibles et produire des liens cohérents vers les pages des disciplines.

La source exacte des données du rendu — fichier généré, objet JavaScript ou autre mécanisme — doit rester conforme à l'implémentation du projet.

"portal.js" et "portal.css"

Ces fichiers gèrent respectivement la logique et la présentation du portail. Ils doivent rester indépendants du contenu détaillé des leçons autant que possible.

L'ajout d'une nouvelle discipline ne devrait pas nécessiter de modifier manuellement "portal.js" si le workflow fournit déjà toutes les informations nécessaires au rendu.

"catalogue.js", "cours.js", "navigation.js" et "styles.css"

Ces fichiers restent les composants communs des pages de cours. Une modification de l'un d'eux peut affecter toutes les disciplines et doit donc être testée sur plusieurs cours.

7. Problèmes courants

Symptôme| Cause possible| Vérification
Nouveau dossier absent du portail| Dossier ignoré par le scan ou métadonnées manquantes| Vérifier "meta.json" et le résultat de "scan-courses.mjs"
Cours détecté mais lien incorrect| Métadonnées ou chemin de destination incohérents| Vérifier les chemins générés et la structure du dossier
Catalogue vide| Erreur de syntaxe ou mauvais chargement du fichier de données| Examiner la console du navigateur
« Leçon introuvable »| Identifiant absent ou données non chargées| Vérifier les identifiants et l'ordre des scripts
Page 404| Mauvaise casse dans le nom d'un fichier ou chemin erroné| Vérifier les noms exacts des fichiers et les URL
Anciennes données affichées| Cache du navigateur| Incrémenter le paramètre de version si nécessaire
Le portail ne reflète pas le nouveau cours| Liste non actualisée ou publication non exécutée| Vérifier le résultat du scan, les fichiers générés et le déploiement
Une discipline ne fonctionne plus| Régression dans un moteur commun| Restaurer la sauvegarde si nécessaire et tester plusieurs disciplines

8. Tests et publication

Avant de publier une nouvelle discipline ou une modification du workflow :

- Vérifier la syntaxe des fichiers JavaScript et JSON.
- Exécuter le scanner sur le dépôt.
- Vérifier qu'un dossier valide est détecté.
- Vérifier qu'un dossier incomplet est traité proprement.
- Contrôler l'absence de doublons dans les cours affichés.
- Vérifier les URL générées.
- Ouvrir le catalogue et une leçon.
- Tester au moins deux disciplines après toute modification d'un moteur commun.
- Contrôler le rendu sur mobile.
- Vérifier les journaux du processus de publication.

Pour les scripts Node.js, la syntaxe peut être contrôlée avec :

node --check scan-courses.mjs
node --check courses-render.js
node --check portal.js
node --check catalogue.js
node --check cours.js

Cette vérification ne remplace pas un test fonctionnel du workflow.

9. Principes à conserver

1. Automatisation : un nouveau cours conforme doit pouvoir être détecté sans modification manuelle systématique du portail.
2. Modèle commun : les pages HTML partagent une structure et des moteurs réutilisables.
3. Données séparées : chaque discipline conserve son fichier de données pédagogiques.
4. Compatibilité : les anciens formats de données continuent de fonctionner.
5. Fiabilité : les erreurs de métadonnées et les dossiers incomplets doivent être détectables.
6. Sauvegardes : conserver les anciennes versions des moteurs avant les changements importants.
7. Tests : vérifier le scan, les liens, les pages et le déploiement après chaque évolution.

L'objectif final est de disposer d'un dépôt pédagogique où l'ajout d'une discipline se résume autant que possible à la création d'un dossier correctement structuré, d'un "meta.json" et d'un fichier de données, le reste du workflow prenant en charge la détection et l'intégration au portail.