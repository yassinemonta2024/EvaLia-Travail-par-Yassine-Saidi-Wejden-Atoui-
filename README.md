# 🎯 Evalia – Plateforme moderne de préparation aux entretiens  
Projet réalisé par **Yassine Saidi** et **Wejden Atoui**

Evalia est une application web interactive conçue pour aider les utilisateurs à se préparer efficacement à leurs entretiens d’embauche.  
Elle propose des outils modernes, une expérience fluide et une interface soignée pour rendre l’entraînement simple, complet et motivant.

---

## 🚀 Objectifs du projet

- Permettre aux étudiants et candidats de s’entraîner aux questions d’entretien.  
- Offrir une interface moderne, responsive et agréable d’utilisation.  
- Intégrer plusieurs modes d’apprentissage : QCM, réponses ouvertes, simulation chronométrée.  
- Ajouter un suivi personnalisé pour visualiser les progrès.  
- Respecter les contraintes du module : **HTML, CSS, JavaScript** (sans frameworks), et un code clair.

---

## 🧩 Fonctionnalités principales

### 🔹 1. Accueil  
- Présentation claire de la plateforme  
- CTA : démarrer une session ou consulter la banque de questions  
- Design moderne en mode sombre

### 🔹 2. Pratiquer (Simulation d’entretien)  
- Sélection de la catégorie, du nombre de questions et du temps par question  
- Timer animé avec changement de couleur (bleu → jaune → rouge)  
- Affichage des questions :  
  - QCM interactifs  
  - Questions ouvertes avec champ de réponse  
- Passage automatique à la question suivante  
- Message “Temps écoulé”

### 🔹 3. Banque de questions  
- Plus de 300 questions réparties en plusieurs catégories :  
  - Technique  
  - RH  
  - Comportemental  
  - Stage  
- Filtrage par mots-clés, catégorie et difficulté  
- Affichage des réponses :  
  - Bonne réponse pour les QCM  
  - Exemple de réponse pour les questions ouvertes  
  - Explication pour approfondir  
- Possibilité d’ajouter des notes personnelles (stockées en localStorage)

### 🔹 4. Suivi  
- Historique local des sessions réalisées  
- Moyennes, score, nombre de bonnes réponses  
- Visualisation simple et intuitive

### 🔹 5. Design & UX  
- Mode sombre moderne inspiré des interfaces SaaS  
- Icônes, animations légères, dégradés violet/bleu  
- Illustrations personnalisées créées pour le projet  
- Responsive pour tablette & desktop

---

## 🛠️ Technologies et choix techniques

### 🌐 Front-End
- **HTML5** pour la structure des pages  
- **CSS3** (Flexbox, animations, mode sombre)  
- **JavaScript Vanilla** pour la logique :
  - Gestion des timers  
  - Navigation entre questions  
  - Randomisation des séries  
  - Chargement dynamique du contenu  
  - Sauvegarde locale via `localStorage`  

### 📁 Organisation du code

/
├── index.html # Page d’accueil
├── pratiquer.html # Simulation d’entretien
├── banque.html # Banque de questions
├── suivi.html # Historique et statistiques
├── conseils.html # Astuces (optionnel)
│
├── css/
│ └── style.css # Styles globaux + thème sombre
│
├── js/
│ ├── donnees.js # Toutes les questions + réponses
│ ├── pratiquer.js # Logique de la simulation (timer, navigation…)
│ ├── banque.js # Filtrage, affichage des réponses, notes perso
│ ├── suivi.js # Enregistrement et affichage de l’historique
│ └── ui.js # Composants UI (menus, animations…)
│
└── assets/ # Logos, illustrations, icônes




---

## 🔍 Pourquoi ces choix ?

### ✔ Pas de frameworks  
Le cahier des charges impose **HTML, CSS et JavaScript natif**.  
Nous avons donc choisi des structures simples mais propres pour assurer lisibilité et efficacité.

### ✔ Données séparées  
Toutes les questions sont dans `donnees.js`, ce qui facilite :
- l’ajout de nouvelles questions  
- la maintenance  
- la réutilisation des données dans plusieurs pages

### ✔ UX centrée sur l’utilisateur  
Le projet vise à reproduire une vraie session d’entretien, d’où :
- timer animé  
- retour visuel clair  
- navigation fluide  
- affichage immédiat des corrections

### ✔ Stockage local et confidentialité  
Les notes personnelles et l’historique ne quittent jamais l’appareil de l’utilisateur (localStorage).

---

## 🌐 Déploiement

Le site est déployé via **GitHub Pages** :  
- Branche : `main`  
- Dossier : `root`  
- Fichier d’entrée : `index.html`

Lien du projet :  
👉 *(à ajouter après activation de GitHub Pages)*

---

## 👨‍💻 Auteurs

- **Yassine Saidi**  
- **Wejden Atoui**

---

## 📜 Licence

Projet académique – utilisation non commerciale.

