// French translations for Programming questions
// Traductions françaises pour les questions de Programmation

import type { CategoryTranslations } from '../index';

export const programming: CategoryTranslations = {
  prog1: {
    text: 'Que signifie HTML ?',
    correct: 'Langage de balisage hypertexte',
    wrong: [
      'Langage de texte haute technologie',
      'Langage de transfert hypertexte',
      'Langage de lien hypertexte',
    ],
  },
  prog2: {
    text: 'Que signifie CSS ?',
    correct: 'Feuilles de style en cascade',
    wrong: [
      'Système de style informatique',
      'Style de code créatif',
      'Feuilles de style de code',
    ],
  },
  prog3: {
    text: 'Quel langage est utilisé pour le scripting web côté client ?',
    correct: 'JavaScript',
    wrong: ['Python', 'Java', 'C++'],
  },
  prog4: {
    text: "Qu'est-ce qu'une variable ?",
    correct: 'Conteneur pour stocker des données',
    wrong: ['Type de fonction', 'Boucle', 'Condition'],
  },
  prog5: {
    text: "Qu'est-ce qu'une fonction ?",
    correct: 'Bloc de code réutilisable',
    wrong: ['Type de variable', 'Boucle', 'Condition'],
  },
  prog6: {
    text: "Qu'est-ce qu'une boucle ?",
    correct: 'Code qui se répète',
    wrong: [
      "Code qui s'exécute une fois",
      'Type de variable',
      'Type de fonction',
    ],
  },
  prog7: {
    text: "Qu'est-ce qu'un tableau ?",
    correct: "Collection ordonnée d'éléments",
    wrong: ['Variable unique', 'Type de fonction', 'Type de boucle'],
  },
  prog8: {
    text: "Qu'est-ce qu'un objet en programmation ?",
    correct: 'Collection de propriétés et méthodes',
    wrong: ['Type de variable', 'Type de fonction', 'Type de boucle'],
  },
  prog9: {
    text: "Qu'est-ce que la POO ?",
    correct: 'Programmation orientée objet',
    wrong: [
      'Programmation orientée processus',
      'Programmation orientée procédure',
      'Programmation orientée performance',
    ],
  },
  prog10: {
    text: "Qu'est-ce qu'une classe ?",
    correct: 'Modèle pour créer des objets',
    wrong: ["Instance d'un objet", 'Type de fonction', 'Type de variable'],
  },
  prog11: {
    text: "Qu'est-ce que l'héritage ?",
    correct: "Classe qui hérite d'une autre",
    wrong: ['Copie de code', 'Duplication', 'Référence'],
  },
  prog12: {
    text: "Qu'est-ce que l'encapsulation ?",
    correct: 'Cacher les détails internes',
    wrong: [
      'Montrer tous les détails',
      'Copier les données',
      'Supprimer les données',
    ],
  },
  prog13: {
    text: "Qu'est-ce que le polymorphisme ?",
    correct: 'Même interface, comportements différents',
    wrong: ['Même comportement', 'Interface unique', 'Comportement fixe'],
  },
  prog14: {
    text: "Qu'est-ce qu'une API ?",
    correct: "Interface de programmation d'application",
    wrong: [
      "Programme d'application",
      'Installation de programme',
      'Information de programme',
    ],
  },
  prog15: {
    text: "Qu'est-ce que JSON ?",
    correct: "Notation d'objet JavaScript",
    wrong: ['Langage de programmation', 'Base de données', 'Protocole réseau'],
  },
  prog16: {
    text: "Qu'est-ce que XML ?",
    correct: 'Langage de balisage extensible',
    wrong: ['Langage de programmation', 'Base de données', 'Protocole réseau'],
  },
  prog17: {
    text: "Qu'est-ce qu'une base de données relationnelle ?",
    correct: 'Base de données avec tables liées',
    wrong: [
      'Base de données sans structure',
      'Base de données de fichiers',
      'Base de données en mémoire',
    ],
  },
  prog18: {
    text: 'Que signifie SQL ?',
    correct: 'Langage de requête structuré',
    wrong: [
      'Langage de question simple',
      'Logique de requête système',
      'Langage de qualité standard',
    ],
  },
  prog19: {
    text: "Qu'est-ce qu'une requête SELECT ?",
    correct: "Récupérer des données d'une base",
    wrong: [
      'Insérer des données',
      'Supprimer des données',
      'Modifier des données',
    ],
  },
  prog20: {
    text: "Qu'est-ce qu'une clé primaire ?",
    correct: "Identifiant unique d'un enregistrement",
    wrong: ['Premier champ', 'Champ important', 'Mot de passe'],
  },
  prog21: {
    text: "Qu'est-ce que Git ?",
    correct: 'Système de contrôle de version',
    wrong: ['Langage de programmation', 'Base de données', 'Éditeur de code'],
  },
  prog22: {
    text: "Qu'est-ce qu'un commit ?",
    correct: 'Enregistrement des modifications',
    wrong: ['Suppression des modifications', 'Annulation', 'Copie'],
  },
  prog23: {
    text: "Qu'est-ce qu'une branche Git ?",
    correct: 'Ligne de développement indépendante',
    wrong: ['Copie du projet', 'Sauvegarde', 'Version finale'],
  },
  prog24: {
    text: "Qu'est-ce qu'un merge ?",
    correct: 'Fusion de branches',
    wrong: [
      'Séparation de branches',
      'Suppression de branche',
      'Création de branche',
    ],
  },
  prog25: {
    text: "Qu'est-ce que GitHub ?",
    correct: "Plateforme d'hébergement de code",
    wrong: [
      'Langage de programmation',
      'Éditeur de code',
      "Système d'exploitation",
    ],
  },
  prog26: {
    text: "Qu'est-ce que le débogage ?",
    correct: "Recherche et correction d'erreurs",
    wrong: ['Écriture de code', 'Test de code', 'Compilation'],
  },
  prog27: {
    text: "Qu'est-ce qu'un bug ?",
    correct: 'Erreur dans un programme',
    wrong: ['Fonctionnalité', 'Amélioration', 'Mise à jour'],
  },
  prog28: {
    text: "Qu'est-ce qu'une exception ?",
    correct: "Erreur pendant l'exécution",
    wrong: ['Erreur de syntaxe', 'Avertissement', 'Information'],
  },
  prog29: {
    text: "Qu'est-ce que try-catch ?",
    correct: 'Gestion des exceptions',
    wrong: ['Boucle', 'Condition', 'Fonction'],
  },
  prog30: {
    text: "Qu'est-ce que null ?",
    correct: 'Absence de valeur',
    wrong: ['Zéro', 'Vide', 'Faux'],
  },
  prog31: {
    text: "Qu'est-ce que undefined ?",
    correct: 'Variable non initialisée',
    wrong: ['Null', 'Zéro', 'Erreur'],
  },
  prog32: {
    text: 'Quelle est la différence entre == et === ?',
    correct: '=== vérifie aussi le type',
    wrong: ['Aucune différence', '== est plus strict', '=== est plus rapide'],
  },
  prog33: {
    text: "Qu'est-ce qu'une fonction récursive ?",
    correct: "Fonction qui s'appelle elle-même",
    wrong: ['Fonction répétée', 'Fonction en boucle', 'Fonction imbriquée'],
  },
  prog34: {
    text: "Qu'est-ce qu'une fonction callback ?",
    correct: 'Fonction passée en argument',
    wrong: ['Fonction de retour', 'Fonction principale', "Fonction d'erreur"],
  },
  prog35: {
    text: "Qu'est-ce qu'une promesse (Promise) ?",
    correct: 'Objet représentant une opération asynchrone',
    wrong: ['Type de fonction', 'Type de variable', 'Type de boucle'],
  },
  prog36: {
    text: "Qu'est-ce que async/await ?",
    correct: 'Syntaxe pour le code asynchrone',
    wrong: ['Type de boucle', 'Type de condition', 'Type de fonction'],
  },
  prog37: {
    text: "Qu'est-ce que le DOM ?",
    correct: 'Modèle objet du document',
    wrong: [
      'Type de base de données',
      'Langage de programmation',
      'Protocole réseau',
    ],
  },
  prog38: {
    text: "Qu'est-ce qu'un événement en JavaScript ?",
    correct: 'Action détectée par le navigateur',
    wrong: ['Type de variable', 'Type de fonction', 'Type de boucle'],
  },
  prog39: {
    text: "Qu'est-ce que React ?",
    correct: 'Bibliothèque JavaScript pour les interfaces',
    wrong: [
      'Langage de programmation',
      'Base de données',
      "Système d'exploitation",
    ],
  },
  prog40: {
    text: "Qu'est-ce qu'un composant React ?",
    correct: "Élément d'interface réutilisable",
    wrong: ['Type de variable', 'Type de fonction', 'Type de boucle'],
  },
  prog41: {
    text: "Qu'est-ce que le state en React ?",
    correct: 'Données qui changent dans un composant',
    wrong: ['Données fixes', 'Propriétés', 'Méthodes'],
  },
  prog42: {
    text: "Qu'est-ce que les props en React ?",
    correct: 'Données passées à un composant',
    wrong: ['Données internes', 'État', 'Méthodes'],
  },
  prog43: {
    text: "Qu'est-ce que Node.js ?",
    correct: 'Environnement JavaScript côté serveur',
    wrong: ['Navigateur', 'Base de données', 'Langage de programmation'],
  },
  prog44: {
    text: "Qu'est-ce que npm ?",
    correct: 'Gestionnaire de paquets Node',
    wrong: ['Langage de programmation', 'Base de données', 'Éditeur de code'],
  },
  prog45: {
    text: "Qu'est-ce qu'un package.json ?",
    correct: 'Fichier de configuration du projet',
    wrong: ['Code source', 'Base de données', 'Image'],
  },
  prog46: {
    text: "Qu'est-ce que TypeScript ?",
    correct: 'JavaScript avec typage statique',
    wrong: ['Nouveau langage', 'Base de données', 'Framework'],
  },
  prog47: {
    text: "Qu'est-ce qu'un type en TypeScript ?",
    correct: 'Définition de la forme des données',
    wrong: ['Variable', 'Fonction', 'Classe'],
  },
  prog48: {
    text: "Qu'est-ce qu'une interface en TypeScript ?",
    correct: "Contrat pour la structure d'un objet",
    wrong: ['Type de classe', 'Type de fonction', 'Type de variable'],
  },
  prog49: {
    text: "Qu'est-ce que REST ?",
    correct: "Style d'architecture pour les API",
    wrong: ['Langage de programmation', 'Base de données', 'Protocole'],
  },
  prog50: {
    text: "Qu'est-ce qu'une requête GET ?",
    correct: 'Demande de données',
    wrong: [
      'Envoi de données',
      'Suppression de données',
      'Modification de données',
    ],
  },

  prog51: {
    text: "Qu'est-ce qu'une requête POST ?",
    correct: 'Envoi de données',
    wrong: [
      'Demande de données',
      'Suppression de données',
      'Modification de données',
    ],
  },
  prog52: {
    text: "Qu'est-ce qu'une requête PUT ?",
    correct: 'Mise à jour de données',
    wrong: ['Demande de données', 'Envoi de données', 'Suppression de données'],
  },
  prog53: {
    text: "Qu'est-ce qu'une requête DELETE ?",
    correct: 'Suppression de données',
    wrong: [
      'Demande de données',
      'Envoi de données',
      'Modification de données',
    ],
  },
  prog54: {
    text: "Qu'est-ce que HTTP ?",
    correct: 'Protocole de transfert hypertexte',
    wrong: [
      'Langage de programmation',
      'Base de données',
      "Système d'exploitation",
    ],
  },
  prog55: {
    text: "Qu'est-ce que HTTPS ?",
    correct: 'HTTP sécurisé',
    wrong: ['HTTP rapide', 'HTTP simple', 'HTTP avancé'],
  },
  prog56: {
    text: "Qu'est-ce qu'un cookie ?",
    correct: 'Données stockées par le navigateur',
    wrong: ['Type de fichier', 'Langage de programmation', 'Protocole'],
  },
  prog57: {
    text: "Qu'est-ce que le localStorage ?",
    correct: 'Stockage persistant dans le navigateur',
    wrong: ['Stockage serveur', 'Base de données', 'Cache'],
  },
  prog58: {
    text: "Qu'est-ce que le sessionStorage ?",
    correct: 'Stockage temporaire dans le navigateur',
    wrong: ['Stockage permanent', 'Base de données', 'Cookie'],
  },
  prog59: {
    text: "Qu'est-ce que CORS ?",
    correct: 'Partage de ressources entre origines',
    wrong: ['Type de requête', 'Langage de programmation', 'Base de données'],
  },
  prog60: {
    text: "Qu'est-ce que le responsive design ?",
    correct: 'Design adaptatif aux écrans',
    wrong: ['Design rapide', 'Design réactif', 'Design moderne'],
  },
  prog61: {
    text: "Qu'est-ce que Flexbox ?",
    correct: 'Système de mise en page CSS',
    wrong: ['Langage de programmation', 'Framework', 'Bibliothèque'],
  },
  prog62: {
    text: "Qu'est-ce que CSS Grid ?",
    correct: 'Système de grille CSS',
    wrong: ['Langage de programmation', 'Framework', 'Bibliothèque'],
  },
  prog63: {
    text: "Qu'est-ce qu'un media query ?",
    correct: 'Règle CSS conditionnelle',
    wrong: ['Requête de base de données', 'Requête API', 'Requête serveur'],
  },
  prog64: {
    text: "Qu'est-ce que Bootstrap ?",
    correct: 'Framework CSS',
    wrong: [
      'Langage de programmation',
      'Base de données',
      "Système d'exploitation",
    ],
  },
  prog65: {
    text: "Qu'est-ce que Sass ?",
    correct: 'Préprocesseur CSS',
    wrong: ['Langage de programmation', 'Framework', 'Base de données'],
  },
  prog66: {
    text: "Qu'est-ce que Webpack ?",
    correct: 'Bundler de modules',
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog67: {
    text: "Qu'est-ce que Babel ?",
    correct: 'Transpileur JavaScript',
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog68: {
    text: "Qu'est-ce que ESLint ?",
    correct: "Outil d'analyse de code",
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog69: {
    text: "Qu'est-ce que Prettier ?",
    correct: 'Formateur de code',
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog70: {
    text: "Qu'est-ce que Jest ?",
    correct: 'Framework de test JavaScript',
    wrong: ['Langage de programmation', 'Base de données', 'Éditeur de code'],
  },
  prog71: {
    text: "Qu'est-ce qu'un test unitaire ?",
    correct: "Test d'une unité de code isolée",
    wrong: [
      'Test du système entier',
      "Test d'interface",
      'Test de performance',
    ],
  },
  prog72: {
    text: "Qu'est-ce qu'un test d'intégration ?",
    correct: 'Test de plusieurs composants ensemble',
    wrong: ["Test d'une unité", "Test d'interface", 'Test de performance'],
  },
  prog73: {
    text: "Qu'est-ce que le TDD ?",
    correct: 'Développement piloté par les tests',
    wrong: ['Type de test', 'Framework de test', 'Outil de test'],
  },
  prog74: {
    text: "Qu'est-ce que Docker ?",
    correct: 'Plateforme de conteneurisation',
    wrong: [
      'Langage de programmation',
      'Base de données',
      "Système d'exploitation",
    ],
  },
  prog75: {
    text: "Qu'est-ce qu'un conteneur Docker ?",
    correct: 'Environnement isolé pour une application',
    wrong: ['Machine virtuelle', 'Serveur', 'Base de données'],
  },
  prog76: {
    text: "Qu'est-ce qu'une image Docker ?",
    correct: 'Modèle pour créer des conteneurs',
    wrong: ['Photo', 'Fichier graphique', "Capture d'écran"],
  },
  prog77: {
    text: "Qu'est-ce que Kubernetes ?",
    correct: 'Orchestrateur de conteneurs',
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog78: {
    text: "Qu'est-ce que CI/CD ?",
    correct: 'Intégration et déploiement continus',
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog79: {
    text: "Qu'est-ce que AWS ?",
    correct: 'Amazon Web Services',
    wrong: ['Langage de programmation', 'Base de données', 'Framework'],
  },
  prog80: {
    text: "Qu'est-ce que le cloud computing ?",
    correct: 'Services informatiques sur Internet',
    wrong: ['Stockage local', 'Serveur physique', 'Ordinateur personnel'],
  },
  prog81: {
    text: "Qu'est-ce qu'une fonction lambda ?",
    correct: 'Fonction anonyme',
    wrong: ['Fonction nommée', 'Fonction principale', 'Fonction de classe'],
  },
  prog82: {
    text: "Qu'est-ce que la programmation fonctionnelle ?",
    correct: 'Paradigme basé sur les fonctions pures',
    wrong: [
      'Programmation orientée objet',
      'Programmation procédurale',
      'Programmation impérative',
    ],
  },
  prog83: {
    text: "Qu'est-ce qu'une fonction pure ?",
    correct: 'Fonction sans effets de bord',
    wrong: ['Fonction propre', 'Fonction simple', 'Fonction rapide'],
  },
  prog84: {
    text: "Qu'est-ce que l'immutabilité ?",
    correct: 'Données qui ne changent pas',
    wrong: [
      'Données qui changent',
      'Données temporaires',
      'Données permanentes',
    ],
  },
  prog85: {
    text: "Qu'est-ce que map en programmation ?",
    correct: "Transformer chaque élément d'un tableau",
    wrong: ['Carte géographique', 'Plan', 'Schéma'],
  },
  prog86: {
    text: "Qu'est-ce que filter en programmation ?",
    correct: 'Sélectionner des éléments selon un critère',
    wrong: ['Trier', 'Transformer', 'Supprimer tout'],
  },
  prog87: {
    text: "Qu'est-ce que reduce en programmation ?",
    correct: 'Réduire un tableau à une valeur',
    wrong: ['Agrandir', 'Dupliquer', 'Trier'],
  },
  prog88: {
    text: "Qu'est-ce que le spread operator ?",
    correct: 'Opérateur pour étendre des éléments',
    wrong: [
      'Opérateur de multiplication',
      'Opérateur de division',
      "Opérateur d'addition",
    ],
  },
  prog89: {
    text: "Qu'est-ce que la déstructuration ?",
    correct: "Extraire des valeurs d'objets ou tableaux",
    wrong: [
      'Détruire des données',
      'Supprimer des données',
      'Modifier des données',
    ],
  },
  prog90: {
    text: "Qu'est-ce qu'un template literal ?",
    correct: 'Chaîne avec interpolation',
    wrong: ['Modèle de code', 'Template HTML', 'Fichier modèle'],
  },
  prog91: {
    text: "Qu'est-ce que le hoisting ?",
    correct: 'Remontée des déclarations',
    wrong: ['Levage de code', 'Optimisation', 'Compilation'],
  },
  prog92: {
    text: "Qu'est-ce que le scope ?",
    correct: 'Portée des variables',
    wrong: ['Type de variable', 'Valeur de variable', 'Nom de variable'],
  },
  prog93: {
    text: "Qu'est-ce qu'une closure ?",
    correct: 'Fonction avec son environnement',
    wrong: ['Fermeture de programme', 'Fin de fonction', 'Arrêt de boucle'],
  },
  prog94: {
    text: "Qu'est-ce que this en JavaScript ?",
    correct: "Référence au contexte d'exécution",
    wrong: ['Variable globale', 'Mot réservé', 'Type de données'],
  },
  prog95: {
    text: "Qu'est-ce que le prototype en JavaScript ?",
    correct: "Mécanisme d'héritage",
    wrong: ['Premier objet', 'Modèle de base', 'Version initiale'],
  },
  prog96: {
    text: "Qu'est-ce que l'event loop ?",
    correct: 'Boucle de gestion des événements',
    wrong: ['Type de boucle', 'Événement répété', 'Boucle infinie'],
  },
  prog97: {
    text: "Qu'est-ce que le garbage collection ?",
    correct: 'Libération automatique de mémoire',
    wrong: ['Suppression de fichiers', 'Nettoyage de code', 'Optimisation'],
  },
  prog98: {
    text: "Qu'est-ce que le Big O notation ?",
    correct: 'Notation de complexité algorithmique',
    wrong: ['Grand zéro', 'Notation mathématique', 'Type de variable'],
  },
  prog99: {
    text: "Qu'est-ce que O(1) ?",
    correct: 'Complexité constante',
    wrong: [
      'Complexité linéaire',
      'Complexité quadratique',
      'Complexité logarithmique',
    ],
  },
  prog100: {
    text: "Qu'est-ce que O(n) ?",
    correct: 'Complexité linéaire',
    wrong: [
      'Complexité constante',
      'Complexité quadratique',
      'Complexité logarithmique',
    ],
  },
};

export default programming;
