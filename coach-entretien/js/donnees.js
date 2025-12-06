const qs = [
  {
    "t": "Qu'est-ce que le DOM en JavaScript ?",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Une base de données",
      "Une interface pour manipuler la page HTML",
      "Un serveur distant",
      "Un fichier CSS"
    ],
    "bon": 1,
    "exp": "Le DOM est la représentation de la page pour permettre les manipulations par JavaScript.",
    "c": "Technique",
    "id": 1
  },
  {
    "t": "Différence entre let et const ?",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aucune",
      "const bloque la réaffectation",
      "let bloque le scope",
      "const est pour les nombres"
    ],
    "bon": 1,
    "exp": "const empêche la réaffectation tandis que let permet une nouvelle valeur.",
    "c": "Technique",
    "id": 2
  },
  {
    "t": "À quoi sert flexbox en CSS ?",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aligner et distribuer des éléments",
      "Créer des bases de données",
      "Compiler du code",
      "Optimiser le SEO"
    ],
    "bon": 0,
    "exp": "Flexbox permet d'aligner et distribuer des éléments dans un conteneur.",
    "c": "Technique",
    "id": 3
  },
  {
    "t": "Que signifie HTTP 404 ?",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Succès",
      "Ressource non trouvée",
      "Serveur en erreur",
      "Redirection"
    ],
    "bon": 1,
    "exp": "404 indique qu'aucune ressource n'a été trouvée.",
    "c": "Technique",
    "id": 4
  },
  {
    "t": "Qu'est-ce qu'une promesse en JavaScript ?",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Un style CSS",
      "Un objet pour gérer l'asynchrone",
      "Une base SQL",
      "Une fonction DOM"
    ],
    "bon": 1,
    "exp": "Une promesse représente une valeur future pour gérer l'asynchrone.",
    "c": "Technique",
    "id": 5
  },
  {
    "t": "Pourquoi utiliser aria-label en HTML ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Améliorer l'accessibilité pour les lecteurs d'écran.",
    "c": "Technique",
    "id": 6
  },
  {
    "t": "Qu'est-ce qu'un debounce en JS ?",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un délai pour limiter les appels",
      "Un hook",
      "Un style CSS",
      "Un type SQL"
    ],
    "bon": 0,
    "exp": "Le debounce retarde l'exécution pour éviter les appels trop fréquents.",
    "c": "Technique",
    "id": 7
  },
  {
    "t": "À quoi sert localStorage ?",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Stockage côté serveur",
      "Stockage persistant côté navigateur",
      "Compilation",
      "SEO"
    ],
    "bon": 1,
    "exp": "localStorage garde des données dans le navigateur.",
    "c": "Technique",
    "id": 8
  },
  {
    "t": "Quelle différence entre PUT et PATCH ?",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Aucune",
      "PUT remplace, PATCH met à jour partiellement",
      "PUT supprime",
      "PATCH supprime"
    ],
    "bon": 1,
    "exp": "PUT remplace la ressource, PATCH modifie partiellement.",
    "c": "Technique",
    "id": 9
  },
  {
    "t": "Qu'est-ce qu'un token JWT ?",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un cookie",
      "Un jeton signé pour l'auth",
      "Un script",
      "Un type de base"
    ],
    "bon": 1,
    "exp": "Un JWT transporte des claims signés.",
    "c": "Technique",
    "id": 10
  },
  {
    "t": "Décrire le fonctionnement d'un service worker.",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script en arrière-plan qui gère cache et requêtes pour le mode offline.",
    "c": "Technique",
    "id": 11
  },
  {
    "t": "Qu'est-ce qu'une attaque XSS ?",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Injection de scripts",
      "Perte de données serveur",
      "Erreur 500",
      "Bug CSS"
    ],
    "bon": 0,
    "exp": "XSS est l'injection de scripts malicieux.",
    "c": "Technique",
    "id": 12
  },
  {
    "t": "Qu'est-ce que le throttling ?",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Bloquer un flux",
      "Limiter la fréquence d'exécution",
      "Augmenter le cache",
      "Changer le thème"
    ],
    "bon": 1,
    "exp": "Limiter l'exécution à intervalles réguliers.",
    "c": "Technique",
    "id": 13
  },
  {
    "t": "Pourquoi minifier JS/CSS ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réduire la taille, accélérer le chargement.",
    "c": "Technique",
    "id": 14
  },
  {
    "t": "Qu'est-ce que responsive design ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Adapter l'interface aux écrans via media queries, flex, grid.",
    "c": "Technique",
    "id": 15
  },
  {
    "t": "Qu'est-ce que le DOM en JavaScript ? (cas produit)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Une base de données",
      "Une interface pour manipuler la page HTML",
      "Un serveur distant",
      "Un fichier CSS"
    ],
    "bon": 1,
    "exp": "Le DOM est la représentation de la page pour permettre les manipulations par JavaScript.",
    "c": "Technique",
    "id": 16
  },
  {
    "t": "Différence entre let et const ? (cas produit)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aucune",
      "const bloque la réaffectation",
      "let bloque le scope",
      "const est pour les nombres"
    ],
    "bon": 1,
    "exp": "const empêche la réaffectation tandis que let permet une nouvelle valeur.",
    "c": "Technique",
    "id": 17
  },
  {
    "t": "À quoi sert flexbox en CSS ? (cas produit)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aligner et distribuer des éléments",
      "Créer des bases de données",
      "Compiler du code",
      "Optimiser le SEO"
    ],
    "bon": 0,
    "exp": "Flexbox permet d'aligner et distribuer des éléments dans un conteneur.",
    "c": "Technique",
    "id": 18
  },
  {
    "t": "Que signifie HTTP 404 ? (cas produit)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Succès",
      "Ressource non trouvée",
      "Serveur en erreur",
      "Redirection"
    ],
    "bon": 1,
    "exp": "404 indique qu'aucune ressource n'a été trouvée.",
    "c": "Technique",
    "id": 19
  },
  {
    "t": "Qu'est-ce qu'une promesse en JavaScript ? (cas produit)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Un style CSS",
      "Un objet pour gérer l'asynchrone",
      "Une base SQL",
      "Une fonction DOM"
    ],
    "bon": 1,
    "exp": "Une promesse représente une valeur future pour gérer l'asynchrone.",
    "c": "Technique",
    "id": 20
  },
  {
    "t": "Pourquoi utiliser aria-label en HTML ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Améliorer l'accessibilité pour les lecteurs d'écran.",
    "c": "Technique",
    "id": 21
  },
  {
    "t": "Qu'est-ce qu'un debounce en JS ? (cas produit)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un délai pour limiter les appels",
      "Un hook",
      "Un style CSS",
      "Un type SQL"
    ],
    "bon": 0,
    "exp": "Le debounce retarde l'exécution pour éviter les appels trop fréquents.",
    "c": "Technique",
    "id": 22
  },
  {
    "t": "À quoi sert localStorage ? (cas produit)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Stockage côté serveur",
      "Stockage persistant côté navigateur",
      "Compilation",
      "SEO"
    ],
    "bon": 1,
    "exp": "localStorage garde des données dans le navigateur.",
    "c": "Technique",
    "id": 23
  },
  {
    "t": "Quelle différence entre PUT et PATCH ? (cas produit)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Aucune",
      "PUT remplace, PATCH met à jour partiellement",
      "PUT supprime",
      "PATCH supprime"
    ],
    "bon": 1,
    "exp": "PUT remplace la ressource, PATCH modifie partiellement.",
    "c": "Technique",
    "id": 24
  },
  {
    "t": "Qu'est-ce qu'un token JWT ? (cas produit)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un cookie",
      "Un jeton signé pour l'auth",
      "Un script",
      "Un type de base"
    ],
    "bon": 1,
    "exp": "Un JWT transporte des claims signés.",
    "c": "Technique",
    "id": 25
  },
  {
    "t": "Décrire le fonctionnement d'un service worker. (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script en arrière-plan qui gère cache et requêtes pour le mode offline.",
    "c": "Technique",
    "id": 26
  },
  {
    "t": "Qu'est-ce qu'une attaque XSS ? (cas produit)",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Injection de scripts",
      "Perte de données serveur",
      "Erreur 500",
      "Bug CSS"
    ],
    "bon": 0,
    "exp": "XSS est l'injection de scripts malicieux.",
    "c": "Technique",
    "id": 27
  },
  {
    "t": "Qu'est-ce que le throttling ? (cas produit)",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Bloquer un flux",
      "Limiter la fréquence d'exécution",
      "Augmenter le cache",
      "Changer le thème"
    ],
    "bon": 1,
    "exp": "Limiter l'exécution à intervalles réguliers.",
    "c": "Technique",
    "id": 28
  },
  {
    "t": "Pourquoi minifier JS/CSS ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réduire la taille, accélérer le chargement.",
    "c": "Technique",
    "id": 29
  },
  {
    "t": "Qu'est-ce que responsive design ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Adapter l'interface aux écrans via media queries, flex, grid.",
    "c": "Technique",
    "id": 30
  },
  {
    "t": "Qu'est-ce que le DOM en JavaScript ? (cas start-up)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Une base de données",
      "Une interface pour manipuler la page HTML",
      "Un serveur distant",
      "Un fichier CSS"
    ],
    "bon": 1,
    "exp": "Le DOM est la représentation de la page pour permettre les manipulations par JavaScript.",
    "c": "Technique",
    "id": 31
  },
  {
    "t": "Différence entre let et const ? (cas start-up)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aucune",
      "const bloque la réaffectation",
      "let bloque le scope",
      "const est pour les nombres"
    ],
    "bon": 1,
    "exp": "const empêche la réaffectation tandis que let permet une nouvelle valeur.",
    "c": "Technique",
    "id": 32
  },
  {
    "t": "À quoi sert flexbox en CSS ? (cas start-up)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aligner et distribuer des éléments",
      "Créer des bases de données",
      "Compiler du code",
      "Optimiser le SEO"
    ],
    "bon": 0,
    "exp": "Flexbox permet d'aligner et distribuer des éléments dans un conteneur.",
    "c": "Technique",
    "id": 33
  },
  {
    "t": "Que signifie HTTP 404 ? (cas start-up)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Succès",
      "Ressource non trouvée",
      "Serveur en erreur",
      "Redirection"
    ],
    "bon": 1,
    "exp": "404 indique qu'aucune ressource n'a été trouvée.",
    "c": "Technique",
    "id": 34
  },
  {
    "t": "Qu'est-ce qu'une promesse en JavaScript ? (cas start-up)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Un style CSS",
      "Un objet pour gérer l'asynchrone",
      "Une base SQL",
      "Une fonction DOM"
    ],
    "bon": 1,
    "exp": "Une promesse représente une valeur future pour gérer l'asynchrone.",
    "c": "Technique",
    "id": 35
  },
  {
    "t": "Pourquoi utiliser aria-label en HTML ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Améliorer l'accessibilité pour les lecteurs d'écran.",
    "c": "Technique",
    "id": 36
  },
  {
    "t": "Qu'est-ce qu'un debounce en JS ? (cas start-up)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un délai pour limiter les appels",
      "Un hook",
      "Un style CSS",
      "Un type SQL"
    ],
    "bon": 0,
    "exp": "Le debounce retarde l'exécution pour éviter les appels trop fréquents.",
    "c": "Technique",
    "id": 37
  },
  {
    "t": "À quoi sert localStorage ? (cas start-up)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Stockage côté serveur",
      "Stockage persistant côté navigateur",
      "Compilation",
      "SEO"
    ],
    "bon": 1,
    "exp": "localStorage garde des données dans le navigateur.",
    "c": "Technique",
    "id": 38
  },
  {
    "t": "Quelle différence entre PUT et PATCH ? (cas start-up)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Aucune",
      "PUT remplace, PATCH met à jour partiellement",
      "PUT supprime",
      "PATCH supprime"
    ],
    "bon": 1,
    "exp": "PUT remplace la ressource, PATCH modifie partiellement.",
    "c": "Technique",
    "id": 39
  },
  {
    "t": "Qu'est-ce qu'un token JWT ? (cas start-up)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un cookie",
      "Un jeton signé pour l'auth",
      "Un script",
      "Un type de base"
    ],
    "bon": 1,
    "exp": "Un JWT transporte des claims signés.",
    "c": "Technique",
    "id": 40
  },
  {
    "t": "Décrire le fonctionnement d'un service worker. (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script en arrière-plan qui gère cache et requêtes pour le mode offline.",
    "c": "Technique",
    "id": 41
  },
  {
    "t": "Qu'est-ce qu'une attaque XSS ? (cas start-up)",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Injection de scripts",
      "Perte de données serveur",
      "Erreur 500",
      "Bug CSS"
    ],
    "bon": 0,
    "exp": "XSS est l'injection de scripts malicieux.",
    "c": "Technique",
    "id": 42
  },
  {
    "t": "Qu'est-ce que le throttling ? (cas start-up)",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Bloquer un flux",
      "Limiter la fréquence d'exécution",
      "Augmenter le cache",
      "Changer le thème"
    ],
    "bon": 1,
    "exp": "Limiter l'exécution à intervalles réguliers.",
    "c": "Technique",
    "id": 43
  },
  {
    "t": "Pourquoi minifier JS/CSS ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réduire la taille, accélérer le chargement.",
    "c": "Technique",
    "id": 44
  },
  {
    "t": "Qu'est-ce que responsive design ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Adapter l'interface aux écrans via media queries, flex, grid.",
    "c": "Technique",
    "id": 45
  },
  {
    "t": "Qu'est-ce que le DOM en JavaScript ? (cas data)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Une base de données",
      "Une interface pour manipuler la page HTML",
      "Un serveur distant",
      "Un fichier CSS"
    ],
    "bon": 1,
    "exp": "Le DOM est la représentation de la page pour permettre les manipulations par JavaScript.",
    "c": "Technique",
    "id": 46
  },
  {
    "t": "Différence entre let et const ? (cas data)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aucune",
      "const bloque la réaffectation",
      "let bloque le scope",
      "const est pour les nombres"
    ],
    "bon": 1,
    "exp": "const empêche la réaffectation tandis que let permet une nouvelle valeur.",
    "c": "Technique",
    "id": 47
  },
  {
    "t": "À quoi sert flexbox en CSS ? (cas data)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Aligner et distribuer des éléments",
      "Créer des bases de données",
      "Compiler du code",
      "Optimiser le SEO"
    ],
    "bon": 0,
    "exp": "Flexbox permet d'aligner et distribuer des éléments dans un conteneur.",
    "c": "Technique",
    "id": 48
  },
  {
    "t": "Que signifie HTTP 404 ? (cas data)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Succès",
      "Ressource non trouvée",
      "Serveur en erreur",
      "Redirection"
    ],
    "bon": 1,
    "exp": "404 indique qu'aucune ressource n'a été trouvée.",
    "c": "Technique",
    "id": 49
  },
  {
    "t": "Qu'est-ce qu'une promesse en JavaScript ? (cas data)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Un style CSS",
      "Un objet pour gérer l'asynchrone",
      "Une base SQL",
      "Une fonction DOM"
    ],
    "bon": 1,
    "exp": "Une promesse représente une valeur future pour gérer l'asynchrone.",
    "c": "Technique",
    "id": 50
  },
  {
    "t": "Pourquoi utiliser aria-label en HTML ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Améliorer l'accessibilité pour les lecteurs d'écran.",
    "c": "Technique",
    "id": 51
  },
  {
    "t": "Qu'est-ce qu'un debounce en JS ? (cas data)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un délai pour limiter les appels",
      "Un hook",
      "Un style CSS",
      "Un type SQL"
    ],
    "bon": 0,
    "exp": "Le debounce retarde l'exécution pour éviter les appels trop fréquents.",
    "c": "Technique",
    "id": 52
  },
  {
    "t": "À quoi sert localStorage ? (cas data)",
    "d": "facile",
    "type": "qcm",
    "opt": [
      "Stockage côté serveur",
      "Stockage persistant côté navigateur",
      "Compilation",
      "SEO"
    ],
    "bon": 1,
    "exp": "localStorage garde des données dans le navigateur.",
    "c": "Technique",
    "id": 53
  },
  {
    "t": "Quelle différence entre PUT et PATCH ? (cas data)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Aucune",
      "PUT remplace, PATCH met à jour partiellement",
      "PUT supprime",
      "PATCH supprime"
    ],
    "bon": 1,
    "exp": "PUT remplace la ressource, PATCH modifie partiellement.",
    "c": "Technique",
    "id": 54
  },
  {
    "t": "Qu'est-ce qu'un token JWT ? (cas data)",
    "d": "moyen",
    "type": "qcm",
    "opt": [
      "Un cookie",
      "Un jeton signé pour l'auth",
      "Un script",
      "Un type de base"
    ],
    "bon": 1,
    "exp": "Un JWT transporte des claims signés.",
    "c": "Technique",
    "id": 55
  },
  {
    "t": "Décrire le fonctionnement d'un service worker. (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script en arrière-plan qui gère cache et requêtes pour le mode offline.",
    "c": "Technique",
    "id": 56
  },
  {
    "t": "Qu'est-ce qu'une attaque XSS ? (cas data)",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Injection de scripts",
      "Perte de données serveur",
      "Erreur 500",
      "Bug CSS"
    ],
    "bon": 0,
    "exp": "XSS est l'injection de scripts malicieux.",
    "c": "Technique",
    "id": 57
  },
  {
    "t": "Qu'est-ce que le throttling ? (cas data)",
    "d": "difficile",
    "type": "qcm",
    "opt": [
      "Bloquer un flux",
      "Limiter la fréquence d'exécution",
      "Augmenter le cache",
      "Changer le thème"
    ],
    "bon": 1,
    "exp": "Limiter l'exécution à intervalles réguliers.",
    "c": "Technique",
    "id": 58
  },
  {
    "t": "Pourquoi minifier JS/CSS ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réduire la taille, accélérer le chargement.",
    "c": "Technique",
    "id": 59
  },
  {
    "t": "Qu'est-ce que responsive design ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Adapter l'interface aux écrans via media queries, flex, grid.",
    "c": "Technique",
    "id": 60
  },
  {
    "t": "Parlez de vos motivations pour ce poste.",
    "d": "facile",
    "type": "ouvert",
    "rep": "Intérêt pour la mission, l'équipe et les valeurs.",
    "c": "RH",
    "id": 61
  },
  {
    "t": "Comment décririez-vous votre style de travail ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Collaboratif, organisé, autonome.",
    "c": "RH",
    "id": 62
  },
  {
    "t": "Quelle est votre plus grande force professionnelle ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Choisir une force liée au poste et un exemple.",
    "c": "RH",
    "id": 63
  },
  {
    "t": "Comment gérez-vous le stress ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Prioriser, communiquer, routines saines.",
    "c": "RH",
    "id": 64
  },
  {
    "t": "Pourquoi rejoindre cette entreprise ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Alignement valeurs, projets, apprentissage.",
    "c": "RH",
    "id": 65
  },
  {
    "t": "Quel type de management vous convient ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Management clair avec feedback et autonomie.",
    "c": "RH",
    "id": 66
  },
  {
    "t": "Comment réagissez-vous aux feedbacks négatifs ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, questionner, plan d'action.",
    "c": "RH",
    "id": 67
  },
  {
    "t": "Décrivez un échec et ce que vous en avez appris.",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, leçon, changements appliqués.",
    "c": "RH",
    "id": 68
  },
  {
    "t": "Préférez-vous travailler seul ou en équipe ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Valoriser la collaboration et l'autonomie.",
    "c": "RH",
    "id": 69
  },
  {
    "t": "Comment gérez-vous les priorités multiples ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer impact, négocier, structurer.",
    "c": "RH",
    "id": 70
  },
  {
    "t": "Comment décririez-vous votre communication ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Clair, synthétique, écoute active.",
    "c": "RH",
    "id": 71
  },
  {
    "t": "Quelle est votre principale zone d'amélioration ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Point réel avec actions pour progresser.",
    "c": "RH",
    "id": 72
  },
  {
    "t": "Comment gérez-vous un désaccord avec votre manager ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Dialoguer, faits, compromis.",
    "c": "RH",
    "id": 73
  },
  {
    "t": "Comment réagissez-vous à un changement de priorités soudain ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Analyser l'impact, réorganiser, communiquer.",
    "c": "RH",
    "id": 74
  },
  {
    "t": "Quelles sont vos attentes en matière de feedback ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Feedback régulier, clair, actionnable.",
    "c": "RH",
    "id": 75
  },
  {
    "t": "Parlez de vos motivations pour ce poste. (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Intérêt pour la mission, l'équipe et les valeurs.",
    "c": "RH",
    "id": 76
  },
  {
    "t": "Comment décririez-vous votre style de travail ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Collaboratif, organisé, autonome.",
    "c": "RH",
    "id": 77
  },
  {
    "t": "Quelle est votre plus grande force professionnelle ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Choisir une force liée au poste et un exemple.",
    "c": "RH",
    "id": 78
  },
  {
    "t": "Comment gérez-vous le stress ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Prioriser, communiquer, routines saines.",
    "c": "RH",
    "id": 79
  },
  {
    "t": "Pourquoi rejoindre cette entreprise ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Alignement valeurs, projets, apprentissage.",
    "c": "RH",
    "id": 80
  },
  {
    "t": "Quel type de management vous convient ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Management clair avec feedback et autonomie.",
    "c": "RH",
    "id": 81
  },
  {
    "t": "Comment réagissez-vous aux feedbacks négatifs ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, questionner, plan d'action.",
    "c": "RH",
    "id": 82
  },
  {
    "t": "Décrivez un échec et ce que vous en avez appris. (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, leçon, changements appliqués.",
    "c": "RH",
    "id": 83
  },
  {
    "t": "Préférez-vous travailler seul ou en équipe ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Valoriser la collaboration et l'autonomie.",
    "c": "RH",
    "id": 84
  },
  {
    "t": "Comment gérez-vous les priorités multiples ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer impact, négocier, structurer.",
    "c": "RH",
    "id": 85
  },
  {
    "t": "Comment décririez-vous votre communication ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Clair, synthétique, écoute active.",
    "c": "RH",
    "id": 86
  },
  {
    "t": "Quelle est votre principale zone d'amélioration ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Point réel avec actions pour progresser.",
    "c": "RH",
    "id": 87
  },
  {
    "t": "Comment gérez-vous un désaccord avec votre manager ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Dialoguer, faits, compromis.",
    "c": "RH",
    "id": 88
  },
  {
    "t": "Comment réagissez-vous à un changement de priorités soudain ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Analyser l'impact, réorganiser, communiquer.",
    "c": "RH",
    "id": 89
  },
  {
    "t": "Quelles sont vos attentes en matière de feedback ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Feedback régulier, clair, actionnable.",
    "c": "RH",
    "id": 90
  },
  {
    "t": "Parlez de vos motivations pour ce poste. (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Intérêt pour la mission, l'équipe et les valeurs.",
    "c": "RH",
    "id": 91
  },
  {
    "t": "Comment décririez-vous votre style de travail ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Collaboratif, organisé, autonome.",
    "c": "RH",
    "id": 92
  },
  {
    "t": "Quelle est votre plus grande force professionnelle ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Choisir une force liée au poste et un exemple.",
    "c": "RH",
    "id": 93
  },
  {
    "t": "Comment gérez-vous le stress ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Prioriser, communiquer, routines saines.",
    "c": "RH",
    "id": 94
  },
  {
    "t": "Pourquoi rejoindre cette entreprise ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Alignement valeurs, projets, apprentissage.",
    "c": "RH",
    "id": 95
  },
  {
    "t": "Quel type de management vous convient ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Management clair avec feedback et autonomie.",
    "c": "RH",
    "id": 96
  },
  {
    "t": "Comment réagissez-vous aux feedbacks négatifs ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, questionner, plan d'action.",
    "c": "RH",
    "id": 97
  },
  {
    "t": "Décrivez un échec et ce que vous en avez appris. (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, leçon, changements appliqués.",
    "c": "RH",
    "id": 98
  },
  {
    "t": "Préférez-vous travailler seul ou en équipe ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Valoriser la collaboration et l'autonomie.",
    "c": "RH",
    "id": 99
  },
  {
    "t": "Comment gérez-vous les priorités multiples ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer impact, négocier, structurer.",
    "c": "RH",
    "id": 100
  },
  {
    "t": "Comment décririez-vous votre communication ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Clair, synthétique, écoute active.",
    "c": "RH",
    "id": 101
  },
  {
    "t": "Quelle est votre principale zone d'amélioration ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Point réel avec actions pour progresser.",
    "c": "RH",
    "id": 102
  },
  {
    "t": "Comment gérez-vous un désaccord avec votre manager ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Dialoguer, faits, compromis.",
    "c": "RH",
    "id": 103
  },
  {
    "t": "Comment réagissez-vous à un changement de priorités soudain ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Analyser l'impact, réorganiser, communiquer.",
    "c": "RH",
    "id": 104
  },
  {
    "t": "Quelles sont vos attentes en matière de feedback ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Feedback régulier, clair, actionnable.",
    "c": "RH",
    "id": 105
  },
  {
    "t": "Parlez de vos motivations pour ce poste. (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Intérêt pour la mission, l'équipe et les valeurs.",
    "c": "RH",
    "id": 106
  },
  {
    "t": "Comment décririez-vous votre style de travail ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Collaboratif, organisé, autonome.",
    "c": "RH",
    "id": 107
  },
  {
    "t": "Quelle est votre plus grande force professionnelle ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Choisir une force liée au poste et un exemple.",
    "c": "RH",
    "id": 108
  },
  {
    "t": "Comment gérez-vous le stress ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Prioriser, communiquer, routines saines.",
    "c": "RH",
    "id": 109
  },
  {
    "t": "Pourquoi rejoindre cette entreprise ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Alignement valeurs, projets, apprentissage.",
    "c": "RH",
    "id": 110
  },
  {
    "t": "Quel type de management vous convient ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Management clair avec feedback et autonomie.",
    "c": "RH",
    "id": 111
  },
  {
    "t": "Comment réagissez-vous aux feedbacks négatifs ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, questionner, plan d'action.",
    "c": "RH",
    "id": 112
  },
  {
    "t": "Décrivez un échec et ce que vous en avez appris. (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, leçon, changements appliqués.",
    "c": "RH",
    "id": 113
  },
  {
    "t": "Préférez-vous travailler seul ou en équipe ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Valoriser la collaboration et l'autonomie.",
    "c": "RH",
    "id": 114
  },
  {
    "t": "Comment gérez-vous les priorités multiples ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer impact, négocier, structurer.",
    "c": "RH",
    "id": 115
  },
  {
    "t": "Comment décririez-vous votre communication ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Clair, synthétique, écoute active.",
    "c": "RH",
    "id": 116
  },
  {
    "t": "Quelle est votre principale zone d'amélioration ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Point réel avec actions pour progresser.",
    "c": "RH",
    "id": 117
  },
  {
    "t": "Comment gérez-vous un désaccord avec votre manager ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Dialoguer, faits, compromis.",
    "c": "RH",
    "id": 118
  },
  {
    "t": "Comment réagissez-vous à un changement de priorités soudain ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Analyser l'impact, réorganiser, communiquer.",
    "c": "RH",
    "id": 119
  },
  {
    "t": "Quelles sont vos attentes en matière de feedback ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Feedback régulier, clair, actionnable.",
    "c": "RH",
    "id": 120
  },
  {
    "t": "Décrivez une situation de conflit dans l'équipe.",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, médiation, résultat.",
    "c": "Comportemental",
    "id": 121
  },
  {
    "t": "Comment donnez-vous un feedback difficile ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Faits, bienveillance, plan d'action.",
    "c": "Comportemental",
    "id": 122
  },
  {
    "t": "Parlez d'une décision rapide prise sous pression.",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos disponibles, décision, effets.",
    "c": "Comportemental",
    "id": 123
  },
  {
    "t": "Comment gérez-vous un membre d'équipe moins impliqué ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Comprendre la cause, clarifier, accompagner.",
    "c": "Comportemental",
    "id": 124
  },
  {
    "t": "Donnez un exemple d'amélioration continue.",
    "d": "facile",
    "type": "ouvert",
    "rep": "Petit processus optimisé et effet.",
    "c": "Comportemental",
    "id": 125
  },
  {
    "t": "Comment vous organisez-vous face à plusieurs urgences ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Hiérarchiser selon impact, communiquer.",
    "c": "Comportemental",
    "id": 126
  },
  {
    "t": "Comment réagissez-vous face à l'incertitude ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Tester, itérer, rester flexible.",
    "c": "Comportemental",
    "id": 127
  },
  {
    "t": "Comment accueillez-vous un nouveau collègue ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Présenter l'équipe, outils, rester disponible.",
    "c": "Comportemental",
    "id": 128
  },
  {
    "t": "Comment gérez-vous une critique devant l'équipe ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Calme, exemples, échange privé.",
    "c": "Comportemental",
    "id": 129
  },
  {
    "t": "Comment répartissez-vous les tâches dans une équipe ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer compétences, charge, clarifier.",
    "c": "Comportemental",
    "id": 130
  },
  {
    "t": "Parlez d'une prise de risque calculée.",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Risque identifié, mitigation, résultat.",
    "c": "Comportemental",
    "id": 131
  },
  {
    "t": "Comment gardez-vous la motivation de l'équipe ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs clairs, reconnaissance, feedback.",
    "c": "Comportemental",
    "id": 132
  },
  {
    "t": "Comment soutenez-vous un collègue en difficulté ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Écoute, aide concrète, ressources.",
    "c": "Comportemental",
    "id": 133
  },
  {
    "t": "Comment vérifiez-vous que votre message est compris ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Reformulation, questions, test.",
    "c": "Comportemental",
    "id": 134
  },
  {
    "t": "Comment réagissez-vous face à un planning en retard ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réévaluer portée, communiquer, prioriser.",
    "c": "Comportemental",
    "id": 135
  },
  {
    "t": "Décrivez une situation de conflit dans l'équipe. (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, médiation, résultat.",
    "c": "Comportemental",
    "id": 136
  },
  {
    "t": "Comment donnez-vous un feedback difficile ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Faits, bienveillance, plan d'action.",
    "c": "Comportemental",
    "id": 137
  },
  {
    "t": "Parlez d'une décision rapide prise sous pression. (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos disponibles, décision, effets.",
    "c": "Comportemental",
    "id": 138
  },
  {
    "t": "Comment gérez-vous un membre d'équipe moins impliqué ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Comprendre la cause, clarifier, accompagner.",
    "c": "Comportemental",
    "id": 139
  },
  {
    "t": "Donnez un exemple d'amélioration continue. (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Petit processus optimisé et effet.",
    "c": "Comportemental",
    "id": 140
  },
  {
    "t": "Comment vous organisez-vous face à plusieurs urgences ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Hiérarchiser selon impact, communiquer.",
    "c": "Comportemental",
    "id": 141
  },
  {
    "t": "Comment réagissez-vous face à l'incertitude ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Tester, itérer, rester flexible.",
    "c": "Comportemental",
    "id": 142
  },
  {
    "t": "Comment accueillez-vous un nouveau collègue ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Présenter l'équipe, outils, rester disponible.",
    "c": "Comportemental",
    "id": 143
  },
  {
    "t": "Comment gérez-vous une critique devant l'équipe ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Calme, exemples, échange privé.",
    "c": "Comportemental",
    "id": 144
  },
  {
    "t": "Comment répartissez-vous les tâches dans une équipe ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer compétences, charge, clarifier.",
    "c": "Comportemental",
    "id": 145
  },
  {
    "t": "Parlez d'une prise de risque calculée. (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Risque identifié, mitigation, résultat.",
    "c": "Comportemental",
    "id": 146
  },
  {
    "t": "Comment gardez-vous la motivation de l'équipe ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs clairs, reconnaissance, feedback.",
    "c": "Comportemental",
    "id": 147
  },
  {
    "t": "Comment soutenez-vous un collègue en difficulté ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Écoute, aide concrète, ressources.",
    "c": "Comportemental",
    "id": 148
  },
  {
    "t": "Comment vérifiez-vous que votre message est compris ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Reformulation, questions, test.",
    "c": "Comportemental",
    "id": 149
  },
  {
    "t": "Comment réagissez-vous face à un planning en retard ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réévaluer portée, communiquer, prioriser.",
    "c": "Comportemental",
    "id": 150
  },
  {
    "t": "Décrivez une situation de conflit dans l'équipe. (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, médiation, résultat.",
    "c": "Comportemental",
    "id": 151
  },
  {
    "t": "Comment donnez-vous un feedback difficile ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Faits, bienveillance, plan d'action.",
    "c": "Comportemental",
    "id": 152
  },
  {
    "t": "Parlez d'une décision rapide prise sous pression. (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos disponibles, décision, effets.",
    "c": "Comportemental",
    "id": 153
  },
  {
    "t": "Comment gérez-vous un membre d'équipe moins impliqué ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Comprendre la cause, clarifier, accompagner.",
    "c": "Comportemental",
    "id": 154
  },
  {
    "t": "Donnez un exemple d'amélioration continue. (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Petit processus optimisé et effet.",
    "c": "Comportemental",
    "id": 155
  },
  {
    "t": "Comment vous organisez-vous face à plusieurs urgences ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Hiérarchiser selon impact, communiquer.",
    "c": "Comportemental",
    "id": 156
  },
  {
    "t": "Comment réagissez-vous face à l'incertitude ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Tester, itérer, rester flexible.",
    "c": "Comportemental",
    "id": 157
  },
  {
    "t": "Comment accueillez-vous un nouveau collègue ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Présenter l'équipe, outils, rester disponible.",
    "c": "Comportemental",
    "id": 158
  },
  {
    "t": "Comment gérez-vous une critique devant l'équipe ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Calme, exemples, échange privé.",
    "c": "Comportemental",
    "id": 159
  },
  {
    "t": "Comment répartissez-vous les tâches dans une équipe ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer compétences, charge, clarifier.",
    "c": "Comportemental",
    "id": 160
  },
  {
    "t": "Parlez d'une prise de risque calculée. (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Risque identifié, mitigation, résultat.",
    "c": "Comportemental",
    "id": 161
  },
  {
    "t": "Comment gardez-vous la motivation de l'équipe ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs clairs, reconnaissance, feedback.",
    "c": "Comportemental",
    "id": 162
  },
  {
    "t": "Comment soutenez-vous un collègue en difficulté ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Écoute, aide concrète, ressources.",
    "c": "Comportemental",
    "id": 163
  },
  {
    "t": "Comment vérifiez-vous que votre message est compris ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Reformulation, questions, test.",
    "c": "Comportemental",
    "id": 164
  },
  {
    "t": "Comment réagissez-vous face à un planning en retard ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réévaluer portée, communiquer, prioriser.",
    "c": "Comportemental",
    "id": 165
  },
  {
    "t": "Décrivez une situation de conflit dans l'équipe. (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Contexte, médiation, résultat.",
    "c": "Comportemental",
    "id": 166
  },
  {
    "t": "Comment donnez-vous un feedback difficile ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Faits, bienveillance, plan d'action.",
    "c": "Comportemental",
    "id": 167
  },
  {
    "t": "Parlez d'une décision rapide prise sous pression. (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos disponibles, décision, effets.",
    "c": "Comportemental",
    "id": 168
  },
  {
    "t": "Comment gérez-vous un membre d'équipe moins impliqué ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Comprendre la cause, clarifier, accompagner.",
    "c": "Comportemental",
    "id": 169
  },
  {
    "t": "Donnez un exemple d'amélioration continue. (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Petit processus optimisé et effet.",
    "c": "Comportemental",
    "id": 170
  },
  {
    "t": "Comment vous organisez-vous face à plusieurs urgences ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Hiérarchiser selon impact, communiquer.",
    "c": "Comportemental",
    "id": 171
  },
  {
    "t": "Comment réagissez-vous face à l'incertitude ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Tester, itérer, rester flexible.",
    "c": "Comportemental",
    "id": 172
  },
  {
    "t": "Comment accueillez-vous un nouveau collègue ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Présenter l'équipe, outils, rester disponible.",
    "c": "Comportemental",
    "id": 173
  },
  {
    "t": "Comment gérez-vous une critique devant l'équipe ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Calme, exemples, échange privé.",
    "c": "Comportemental",
    "id": 174
  },
  {
    "t": "Comment répartissez-vous les tâches dans une équipe ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Évaluer compétences, charge, clarifier.",
    "c": "Comportemental",
    "id": 175
  },
  {
    "t": "Parlez d'une prise de risque calculée. (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Risque identifié, mitigation, résultat.",
    "c": "Comportemental",
    "id": 176
  },
  {
    "t": "Comment gardez-vous la motivation de l'équipe ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs clairs, reconnaissance, feedback.",
    "c": "Comportemental",
    "id": 177
  },
  {
    "t": "Comment soutenez-vous un collègue en difficulté ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Écoute, aide concrète, ressources.",
    "c": "Comportemental",
    "id": 178
  },
  {
    "t": "Comment vérifiez-vous que votre message est compris ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Reformulation, questions, test.",
    "c": "Comportemental",
    "id": 179
  },
  {
    "t": "Comment réagissez-vous face à un planning en retard ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Réévaluer portée, communiquer, prioriser.",
    "c": "Comportemental",
    "id": 180
  },
  {
    "t": "Décrivez votre recherche de stage actuelle.",
    "d": "facile",
    "type": "ouvert",
    "rep": "Domaines ciblés, période, objectifs.",
    "c": "Stage",
    "id": 181
  },
  {
    "t": "Pourquoi ce stage vous intéresse-t-il ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Lien avec formation et missions.",
    "c": "Stage",
    "id": 182
  },
  {
    "t": "Que souhaitez-vous apprendre pendant ce stage ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Compétences techniques et humaines.",
    "c": "Stage",
    "id": 183
  },
  {
    "t": "Comment préparez-vous votre arrivée en stage ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos équipe, outils, révisions.",
    "c": "Stage",
    "id": 184
  },
  {
    "t": "Que feriez-vous si vous ne comprenez pas une consigne ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Demander précisions, reformuler.",
    "c": "Stage",
    "id": 185
  },
  {
    "t": "Comment montrez-vous votre autonomie en stage ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Chercher, proposer, valider.",
    "c": "Stage",
    "id": 186
  },
  {
    "t": "Comment abordez-vous une technologie inconnue ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Lire doc, tutoriel, prototype.",
    "c": "Stage",
    "id": 187
  },
  {
    "t": "Que faites-vous si vous terminez une tâche en avance ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Tester, documenter, proposer de l'aide.",
    "c": "Stage",
    "id": 188
  },
  {
    "t": "Comment réagissez-vous à un retour critique pendant le stage ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, clarifier, corriger.",
    "c": "Stage",
    "id": 189
  },
  {
    "t": "Comment suivez-vous votre progression pendant le stage ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs hebdo, points tuteur.",
    "c": "Stage",
    "id": 190
  },
  {
    "t": "Comment prouver votre fiabilité en début de stage ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Respect des délais, communication.",
    "c": "Stage",
    "id": 191
  },
  {
    "t": "Que faites-vous si vos études prennent trop de temps ?",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Prévenir tôt, planifier avec tuteur.",
    "c": "Stage",
    "id": 192
  },
  {
    "t": "Quel outil utilisez-vous pour gérer vos tâches ?",
    "d": "facile",
    "type": "ouvert",
    "rep": "Kanban, to-do list ou outil équipe.",
    "c": "Stage",
    "id": 193
  },
  {
    "t": "Comment expliquez-vous un concept technique à un non-technique ?",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Analogies simples, vérifier la compréhension.",
    "c": "Stage",
    "id": 194
  },
  {
    "t": "Donnez un exemple de tâche répétitive automatisée.",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script de rapport, tests auto, imports.",
    "c": "Stage",
    "id": 195
  },
  {
    "t": "Décrivez votre recherche de stage actuelle. (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Domaines ciblés, période, objectifs.",
    "c": "Stage",
    "id": 196
  },
  {
    "t": "Pourquoi ce stage vous intéresse-t-il ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Lien avec formation et missions.",
    "c": "Stage",
    "id": 197
  },
  {
    "t": "Que souhaitez-vous apprendre pendant ce stage ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Compétences techniques et humaines.",
    "c": "Stage",
    "id": 198
  },
  {
    "t": "Comment préparez-vous votre arrivée en stage ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos équipe, outils, révisions.",
    "c": "Stage",
    "id": 199
  },
  {
    "t": "Que feriez-vous si vous ne comprenez pas une consigne ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Demander précisions, reformuler.",
    "c": "Stage",
    "id": 200
  },
  {
    "t": "Comment montrez-vous votre autonomie en stage ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Chercher, proposer, valider.",
    "c": "Stage",
    "id": 201
  },
  {
    "t": "Comment abordez-vous une technologie inconnue ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Lire doc, tutoriel, prototype.",
    "c": "Stage",
    "id": 202
  },
  {
    "t": "Que faites-vous si vous terminez une tâche en avance ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Tester, documenter, proposer de l'aide.",
    "c": "Stage",
    "id": 203
  },
  {
    "t": "Comment réagissez-vous à un retour critique pendant le stage ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, clarifier, corriger.",
    "c": "Stage",
    "id": 204
  },
  {
    "t": "Comment suivez-vous votre progression pendant le stage ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs hebdo, points tuteur.",
    "c": "Stage",
    "id": 205
  },
  {
    "t": "Comment prouver votre fiabilité en début de stage ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Respect des délais, communication.",
    "c": "Stage",
    "id": 206
  },
  {
    "t": "Que faites-vous si vos études prennent trop de temps ? (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Prévenir tôt, planifier avec tuteur.",
    "c": "Stage",
    "id": 207
  },
  {
    "t": "Quel outil utilisez-vous pour gérer vos tâches ? (cas produit)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Kanban, to-do list ou outil équipe.",
    "c": "Stage",
    "id": 208
  },
  {
    "t": "Comment expliquez-vous un concept technique à un non-technique ? (cas produit)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Analogies simples, vérifier la compréhension.",
    "c": "Stage",
    "id": 209
  },
  {
    "t": "Donnez un exemple de tâche répétitive automatisée. (cas produit)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script de rapport, tests auto, imports.",
    "c": "Stage",
    "id": 210
  },
  {
    "t": "Décrivez votre recherche de stage actuelle. (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Domaines ciblés, période, objectifs.",
    "c": "Stage",
    "id": 211
  },
  {
    "t": "Pourquoi ce stage vous intéresse-t-il ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Lien avec formation et missions.",
    "c": "Stage",
    "id": 212
  },
  {
    "t": "Que souhaitez-vous apprendre pendant ce stage ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Compétences techniques et humaines.",
    "c": "Stage",
    "id": 213
  },
  {
    "t": "Comment préparez-vous votre arrivée en stage ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos équipe, outils, révisions.",
    "c": "Stage",
    "id": 214
  },
  {
    "t": "Que feriez-vous si vous ne comprenez pas une consigne ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Demander précisions, reformuler.",
    "c": "Stage",
    "id": 215
  },
  {
    "t": "Comment montrez-vous votre autonomie en stage ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Chercher, proposer, valider.",
    "c": "Stage",
    "id": 216
  },
  {
    "t": "Comment abordez-vous une technologie inconnue ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Lire doc, tutoriel, prototype.",
    "c": "Stage",
    "id": 217
  },
  {
    "t": "Que faites-vous si vous terminez une tâche en avance ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Tester, documenter, proposer de l'aide.",
    "c": "Stage",
    "id": 218
  },
  {
    "t": "Comment réagissez-vous à un retour critique pendant le stage ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, clarifier, corriger.",
    "c": "Stage",
    "id": 219
  },
  {
    "t": "Comment suivez-vous votre progression pendant le stage ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs hebdo, points tuteur.",
    "c": "Stage",
    "id": 220
  },
  {
    "t": "Comment prouver votre fiabilité en début de stage ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Respect des délais, communication.",
    "c": "Stage",
    "id": 221
  },
  {
    "t": "Que faites-vous si vos études prennent trop de temps ? (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Prévenir tôt, planifier avec tuteur.",
    "c": "Stage",
    "id": 222
  },
  {
    "t": "Quel outil utilisez-vous pour gérer vos tâches ? (cas start-up)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Kanban, to-do list ou outil équipe.",
    "c": "Stage",
    "id": 223
  },
  {
    "t": "Comment expliquez-vous un concept technique à un non-technique ? (cas start-up)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Analogies simples, vérifier la compréhension.",
    "c": "Stage",
    "id": 224
  },
  {
    "t": "Donnez un exemple de tâche répétitive automatisée. (cas start-up)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script de rapport, tests auto, imports.",
    "c": "Stage",
    "id": 225
  },
  {
    "t": "Décrivez votre recherche de stage actuelle. (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Domaines ciblés, période, objectifs.",
    "c": "Stage",
    "id": 226
  },
  {
    "t": "Pourquoi ce stage vous intéresse-t-il ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Lien avec formation et missions.",
    "c": "Stage",
    "id": 227
  },
  {
    "t": "Que souhaitez-vous apprendre pendant ce stage ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Compétences techniques et humaines.",
    "c": "Stage",
    "id": 228
  },
  {
    "t": "Comment préparez-vous votre arrivée en stage ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Infos équipe, outils, révisions.",
    "c": "Stage",
    "id": 229
  },
  {
    "t": "Que feriez-vous si vous ne comprenez pas une consigne ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Demander précisions, reformuler.",
    "c": "Stage",
    "id": 230
  },
  {
    "t": "Comment montrez-vous votre autonomie en stage ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Chercher, proposer, valider.",
    "c": "Stage",
    "id": 231
  },
  {
    "t": "Comment abordez-vous une technologie inconnue ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Lire doc, tutoriel, prototype.",
    "c": "Stage",
    "id": 232
  },
  {
    "t": "Que faites-vous si vous terminez une tâche en avance ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Tester, documenter, proposer de l'aide.",
    "c": "Stage",
    "id": 233
  },
  {
    "t": "Comment réagissez-vous à un retour critique pendant le stage ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Écouter, clarifier, corriger.",
    "c": "Stage",
    "id": 234
  },
  {
    "t": "Comment suivez-vous votre progression pendant le stage ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Objectifs hebdo, points tuteur.",
    "c": "Stage",
    "id": 235
  },
  {
    "t": "Comment prouver votre fiabilité en début de stage ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Respect des délais, communication.",
    "c": "Stage",
    "id": 236
  },
  {
    "t": "Que faites-vous si vos études prennent trop de temps ? (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Prévenir tôt, planifier avec tuteur.",
    "c": "Stage",
    "id": 237
  },
  {
    "t": "Quel outil utilisez-vous pour gérer vos tâches ? (cas data)",
    "d": "facile",
    "type": "ouvert",
    "rep": "Kanban, to-do list ou outil équipe.",
    "c": "Stage",
    "id": 238
  },
  {
    "t": "Comment expliquez-vous un concept technique à un non-technique ? (cas data)",
    "d": "moyen",
    "type": "ouvert",
    "rep": "Analogies simples, vérifier la compréhension.",
    "c": "Stage",
    "id": 239
  },
  {
    "t": "Donnez un exemple de tâche répétitive automatisée. (cas data)",
    "d": "difficile",
    "type": "ouvert",
    "rep": "Script de rapport, tests auto, imports.",
    "c": "Stage",
    "id": 240
  }
];
