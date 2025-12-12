// French translations for Computer Science questions
// Traductions françaises pour les questions d'Informatique

import type { CategoryTranslations } from '../index';

export const computerScience: CategoryTranslations = {
  cs1: {
    text: 'Que signifie CPU ?',
    correct: 'Unité centrale de traitement',
    wrong: [
      'Unité de traitement de code',
      'Unité de programme central',
      'Unité de processus de calcul',
    ],
  },
  cs2: {
    text: 'Que signifie RAM ?',
    correct: 'Mémoire à accès aléatoire',
    wrong: [
      'Mémoire à accès rapide',
      "Module d'accès aléatoire",
      'Mémoire à lecture aléatoire',
    ],
  },
  cs3: {
    text: "Qu'est-ce qu'un algorithme ?",
    correct: "Ensemble d'instructions étape par étape",
    wrong: [
      'Langage de programmation',
      "Type d'ordinateur",
      'Composant matériel',
    ],
  },
  cs4: {
    text: "Qu'est-ce que le binaire ?",
    correct: 'Système numérique en base 2',
    wrong: [
      'Système numérique en base 10',
      'Système numérique en base 16',
      'Système numérique en base 8',
    ],
  },
  cs5: {
    text: "Qu'est-ce qu'un bit ?",
    correct: 'Plus petite unité de données',
    wrong: ['8 octets', '1000 octets', 'Type de processeur'],
  },
  cs6: {
    text: 'Combien de bits dans un octet ?',
    correct: '8',
    wrong: ['4', '16', '32'],
  },
  cs7: {
    text: "Qu'est-ce qu'un système d'exploitation ?",
    correct: 'Logiciel qui gère le matériel et les logiciels',
    wrong: ['Langage de programmation', 'Composant matériel', 'Navigateur web'],
  },
  cs8: {
    text: "Qu'est-ce qu'un compilateur ?",
    correct: 'Programme qui traduit le code en langage machine',
    wrong: [
      'Programme qui exécute le code ligne par ligne',
      'Type de processeur',
      'Outil de débogage',
    ],
  },
  cs9: {
    text: "Qu'est-ce qu'un interpréteur ?",
    correct: 'Programme qui exécute le code ligne par ligne',
    wrong: [
      "Programme qui traduit tout le code d'abord",
      'Type de mémoire',
      'Outil de débogage',
    ],
  },
  cs10: {
    text: "Qu'est-ce qu'une variable ?",
    correct: 'Emplacement de stockage nommé pour les données',
    wrong: ['Type de fonction', 'Boucle', 'Condition'],
  },
  cs11: {
    text: "Qu'est-ce qu'une fonction ?",
    correct: 'Bloc de code réutilisable',
    wrong: ['Type de variable', 'Boucle', 'Condition'],
  },
  cs12: {
    text: "Qu'est-ce qu'une boucle ?",
    correct: 'Code qui se répète',
    wrong: [
      "Code qui s'exécute une fois",
      'Type de variable',
      'Type de fonction',
    ],
  },
  cs13: {
    text: "Qu'est-ce qu'une instruction conditionnelle ?",
    correct: "Code qui s'exécute selon une condition",
    wrong: ['Code qui se répète', 'Type de variable', 'Type de fonction'],
  },
  cs14: {
    text: "Qu'est-ce que la récursivité ?",
    correct: "Fonction qui s'appelle elle-même",
    wrong: ['Boucle', 'Variable', 'Condition'],
  },
  cs15: {
    text: "Qu'est-ce qu'un tableau ?",
    correct: "Collection d'éléments du même type",
    wrong: ['Variable unique', 'Type de fonction', 'Type de boucle'],
  },
  cs16: {
    text: "Qu'est-ce qu'une chaîne de caractères ?",
    correct: 'Séquence de caractères',
    wrong: ['Séquence de nombres', 'Type de tableau', 'Type de fonction'],
  },
  cs17: {
    text: "Qu'est-ce qu'un booléen ?",
    correct: 'Type de données vrai/faux',
    wrong: ['Type de nombre', 'Type de texte', 'Type de tableau'],
  },
  cs18: {
    text: "Qu'est-ce qu'un entier ?",
    correct: 'Nombre entier',
    wrong: ['Nombre décimal', 'Texte', 'Vrai/Faux'],
  },
  cs19: {
    text: "Qu'est-ce qu'un nombre à virgule flottante ?",
    correct: 'Nombre avec décimales',
    wrong: ['Nombre entier', 'Texte', 'Vrai/Faux'],
  },
  cs20: {
    text: "Qu'est-ce que la programmation orientée objet ?",
    correct: 'Paradigme utilisant des objets et des classes',
    wrong: [
      'Programmation avec des fonctions seulement',
      'Programmation avec des boucles seulement',
      'Programmation sans variables',
    ],
  },
  cs21: {
    text: "Qu'est-ce qu'une classe ?",
    correct: 'Modèle pour créer des objets',
    wrong: ["Instance d'un objet", 'Type de fonction', 'Type de variable'],
  },
  cs22: {
    text: "Qu'est-ce qu'un objet ?",
    correct: "Instance d'une classe",
    wrong: [
      'Modèle pour créer des classes',
      'Type de fonction',
      'Type de variable',
    ],
  },
  cs23: {
    text: "Qu'est-ce que l'héritage ?",
    correct: "Classe qui hérite des propriétés d'une autre",
    wrong: [
      'Classe qui crée des objets',
      "Fonction qui s'appelle elle-même",
      'Variable qui change',
    ],
  },
  cs24: {
    text: "Qu'est-ce que l'encapsulation ?",
    correct: "Cacher les détails internes d'un objet",
    wrong: [
      'Montrer tous les détails',
      'Hériter des propriétés',
      'Créer des objets',
    ],
  },
  cs25: {
    text: "Qu'est-ce que le polymorphisme ?",
    correct: 'Objets de types différents traités de la même façon',
    wrong: ['Objets du même type', 'Héritage', 'Encapsulation'],
  },
  cs26: {
    text: "Qu'est-ce qu'une base de données ?",
    correct: 'Collection organisée de données',
    wrong: [
      'Langage de programmation',
      'Type de matériel',
      "Système d'exploitation",
    ],
  },
  cs27: {
    text: 'Que signifie SQL ?',
    correct: 'Langage de requête structuré',
    wrong: [
      'Langage de question simple',
      'Logique de requête système',
      'Langage de qualité standard',
    ],
  },
  cs28: {
    text: "Qu'est-ce qu'une clé primaire ?",
    correct: 'Identifiant unique pour un enregistrement',
    wrong: [
      "Premier champ d'une table",
      'Champ le plus important',
      'Mot de passe',
    ],
  },
  cs29: {
    text: "Qu'est-ce qu'une clé étrangère ?",
    correct: "Champ qui référence une clé primaire d'une autre table",
    wrong: ["Clé d'un autre pays", 'Clé de sauvegarde', 'Clé secondaire'],
  },
  cs30: {
    text: "Qu'est-ce que la normalisation ?",
    correct: 'Organisation des données pour réduire la redondance',
    wrong: [
      'Rendre les données normales',
      'Supprimer toutes les données',
      'Copier les données',
    ],
  },
  cs31: {
    text: "Qu'est-ce qu'une API ?",
    correct: "Interface de programmation d'application",
    wrong: [
      "Programme d'application",
      'Installation de programme',
      'Information de programme',
    ],
  },
  cs32: {
    text: 'Que signifie HTTP ?',
    correct: 'Protocole de transfert hypertexte',
    wrong: [
      'Programme de transfert hypertexte',
      'Processus de transfert hypertexte',
      'Protocole de texte haute technologie',
    ],
  },
  cs33: {
    text: 'Que signifie HTML ?',
    correct: 'Langage de balisage hypertexte',
    wrong: [
      'Langage de texte haute technologie',
      'Langage de transfert hypertexte',
      'Langage de lien hypertexte',
    ],
  },
  cs34: {
    text: 'Que signifie CSS ?',
    correct: 'Feuilles de style en cascade',
    wrong: [
      'Système de style informatique',
      'Style de code créatif',
      'Feuilles de style de code',
    ],
  },
  cs35: {
    text: "Qu'est-ce que JavaScript ?",
    correct: 'Langage de programmation pour le web',
    wrong: ['Version de Java', 'Langage de balisage', 'Langage de style'],
  },
  cs36: {
    text: "Qu'est-ce que le DOM ?",
    correct: 'Modèle objet du document',
    wrong: [
      "Module d'objet de données",
      "Méthode d'objet de document",
      'Modèle de données direct',
    ],
  },
  cs37: {
    text: "Qu'est-ce qu'un serveur ?",
    correct: "Ordinateur qui fournit des services à d'autres",
    wrong: ['Ordinateur personnel', 'Type de logiciel', 'Composant matériel'],
  },
  cs38: {
    text: "Qu'est-ce qu'un client ?",
    correct: 'Ordinateur qui demande des services',
    wrong: [
      'Ordinateur qui fournit des services',
      'Type de serveur',
      'Type de réseau',
    ],
  },
  cs39: {
    text: "Qu'est-ce que le cloud computing ?",
    correct: 'Services informatiques sur Internet',
    wrong: [
      'Informatique dans les nuages',
      'Type de matériel',
      "Système d'exploitation",
    ],
  },
  cs40: {
    text: "Qu'est-ce que la virtualisation ?",
    correct: 'Création de versions virtuelles de ressources',
    wrong: [
      'Création de ressources physiques',
      'Type de programmation',
      'Type de réseau',
    ],
  },
  cs41: {
    text: "Qu'est-ce qu'une machine virtuelle ?",
    correct: "Émulation logicielle d'un ordinateur",
    wrong: ['Ordinateur physique', 'Type de processeur', 'Type de mémoire'],
  },
  cs42: {
    text: "Qu'est-ce que Docker ?",
    correct: 'Plateforme de conteneurisation',
    wrong: [
      'Langage de programmation',
      "Système d'exploitation",
      'Type de base de données',
    ],
  },
  cs43: {
    text: "Qu'est-ce que Git ?",
    correct: 'Système de contrôle de version',
    wrong: [
      'Langage de programmation',
      'Base de données',
      "Système d'exploitation",
    ],
  },
  cs44: {
    text: "Qu'est-ce qu'un commit dans Git ?",
    correct: 'Enregistrement des modifications',
    wrong: [
      'Suppression des modifications',
      "Création d'une branche",
      'Fusion de branches',
    ],
  },
  cs45: {
    text: "Qu'est-ce qu'une branche dans Git ?",
    correct: 'Ligne de développement indépendante',
    wrong: ['Copie du dépôt', 'Type de commit', 'Type de fusion'],
  },
  cs46: {
    text: "Qu'est-ce que le débogage ?",
    correct: "Processus de recherche et correction d'erreurs",
    wrong: ['Écriture de code', 'Test de code', 'Compilation de code'],
  },
  cs47: {
    text: "Qu'est-ce qu'un bug ?",
    correct: 'Erreur dans un programme',
    wrong: ['Fonctionnalité', 'Type de variable', 'Type de fonction'],
  },
  cs48: {
    text: "Qu'est-ce que le test unitaire ?",
    correct: 'Test de composants individuels',
    wrong: [
      'Test du système entier',
      "Test d'interface",
      'Test de performance',
    ],
  },
  cs49: {
    text: "Qu'est-ce que l'intégration continue ?",
    correct: 'Fusion fréquente du code avec tests automatiques',
    wrong: ['Déploiement manuel', 'Test manuel', 'Développement sans tests'],
  },
  cs50: {
    text: "Qu'est-ce que le déploiement continu ?",
    correct: 'Déploiement automatique après les tests',
    wrong: ['Déploiement manuel', 'Test continu', 'Intégration continue'],
  },

  cs51: {
    text: "Qu'est-ce que l'Agile ?",
    correct: 'Méthodologie de développement itérative',
    wrong: ['Langage de programmation', 'Type de test', 'Outil de déploiement'],
  },
  cs52: {
    text: "Qu'est-ce que Scrum ?",
    correct: 'Framework Agile avec sprints',
    wrong: [
      'Langage de programmation',
      'Type de base de données',
      'Outil de test',
    ],
  },
  cs53: {
    text: "Qu'est-ce qu'un sprint ?",
    correct: 'Période de travail fixe dans Scrum',
    wrong: ['Type de test', 'Type de déploiement', 'Type de code'],
  },
  cs54: {
    text: "Qu'est-ce que DevOps ?",
    correct: 'Pratiques combinant développement et opérations',
    wrong: [
      'Langage de programmation',
      'Type de base de données',
      "Système d'exploitation",
    ],
  },
  cs55: {
    text: "Qu'est-ce que le chiffrement ?",
    correct: 'Conversion de données en code secret',
    wrong: [
      'Compression de données',
      'Suppression de données',
      'Copie de données',
    ],
  },
  cs56: {
    text: "Qu'est-ce que le hachage ?",
    correct: 'Conversion de données en valeur fixe',
    wrong: ['Chiffrement réversible', 'Compression', 'Copie'],
  },
  cs57: {
    text: "Qu'est-ce que SSL/TLS ?",
    correct: 'Protocoles de sécurité pour Internet',
    wrong: [
      'Langages de programmation',
      'Types de bases de données',
      "Systèmes d'exploitation",
    ],
  },
  cs58: {
    text: "Qu'est-ce qu'un pare-feu ?",
    correct: 'Système de sécurité réseau',
    wrong: ['Type de virus', 'Langage de programmation', 'Type de matériel'],
  },
  cs59: {
    text: "Qu'est-ce qu'un malware ?",
    correct: 'Logiciel malveillant',
    wrong: [
      'Logiciel de sécurité',
      'Type de matériel',
      "Système d'exploitation",
    ],
  },
  cs60: {
    text: "Qu'est-ce que le phishing ?",
    correct: "Tentative frauduleuse d'obtenir des informations",
    wrong: ['Type de virus', 'Méthode de programmation', 'Type de réseau'],
  },
  cs61: {
    text: "Qu'est-ce que l'authentification à deux facteurs ?",
    correct: 'Vérification avec deux méthodes différentes',
    wrong: [
      'Deux mots de passe',
      "Deux noms d'utilisateur",
      'Deux ordinateurs',
    ],
  },
  cs62: {
    text: "Qu'est-ce qu'une adresse IP ?",
    correct: "Identifiant numérique d'un appareil sur un réseau",
    wrong: ['Adresse physique', 'Adresse email', 'Adresse web'],
  },
  cs63: {
    text: "Qu'est-ce que le DNS ?",
    correct: 'Système qui traduit les noms de domaine en IP',
    wrong: ['Type de réseau', 'Langage de programmation', 'Type de serveur'],
  },
  cs64: {
    text: "Qu'est-ce qu'un routeur ?",
    correct: 'Appareil qui dirige le trafic réseau',
    wrong: ['Type de câble', 'Type de serveur', 'Type de logiciel'],
  },
  cs65: {
    text: "Qu'est-ce que le TCP/IP ?",
    correct: 'Protocoles de communication Internet',
    wrong: [
      'Langages de programmation',
      'Types de matériel',
      "Systèmes d'exploitation",
    ],
  },
  cs66: {
    text: "Qu'est-ce que le Wi-Fi ?",
    correct: 'Technologie de réseau sans fil',
    wrong: ['Type de câble', 'Langage de programmation', 'Type de serveur'],
  },
  cs67: {
    text: "Qu'est-ce que le Bluetooth ?",
    correct: 'Technologie sans fil courte portée',
    wrong: ['Type de Wi-Fi', 'Langage de programmation', 'Type de câble'],
  },
  cs68: {
    text: "Qu'est-ce que l'IoT ?",
    correct: 'Internet des objets',
    wrong: ['Type de réseau', 'Langage de programmation', 'Type de serveur'],
  },
  cs69: {
    text: "Qu'est-ce que l'intelligence artificielle ?",
    correct: "Simulation de l'intelligence humaine par des machines",
    wrong: ['Type de robot', 'Langage de programmation', 'Type de matériel'],
  },
  cs70: {
    text: "Qu'est-ce que l'apprentissage automatique ?",
    correct: 'Systèmes qui apprennent à partir de données',
    wrong: [
      'Programmation manuelle',
      'Type de base de données',
      'Type de réseau',
    ],
  },
  cs71: {
    text: "Qu'est-ce que l'apprentissage profond ?",
    correct: 'Apprentissage automatique avec réseaux de neurones',
    wrong: [
      'Apprentissage superficiel',
      'Type de base de données',
      'Type de réseau',
    ],
  },
  cs72: {
    text: "Qu'est-ce qu'un réseau de neurones ?",
    correct: 'Modèle inspiré du cerveau humain',
    wrong: [
      'Type de réseau informatique',
      'Type de base de données',
      'Type de serveur',
    ],
  },
  cs73: {
    text: "Qu'est-ce que le Big Data ?",
    correct: 'Ensembles de données très volumineux',
    wrong: [
      'Type de base de données',
      'Langage de programmation',
      'Type de serveur',
    ],
  },
  cs74: {
    text: "Qu'est-ce que la blockchain ?",
    correct: 'Registre distribué et immuable',
    wrong: [
      'Type de base de données',
      'Langage de programmation',
      'Type de réseau',
    ],
  },
  cs75: {
    text: "Qu'est-ce qu'une cryptomonnaie ?",
    correct: 'Monnaie numérique utilisant la cryptographie',
    wrong: [
      'Type de base de données',
      'Langage de programmation',
      'Type de réseau',
    ],
  },
  cs76: {
    text: "Qu'est-ce que la réalité virtuelle ?",
    correct: 'Environnement simulé par ordinateur',
    wrong: ['Type de jeu vidéo', 'Type de réseau', 'Type de matériel'],
  },
  cs77: {
    text: "Qu'est-ce que la réalité augmentée ?",
    correct: "Superposition d'éléments virtuels sur le réel",
    wrong: ['Réalité virtuelle', 'Type de jeu vidéo', 'Type de réseau'],
  },
  cs78: {
    text: "Qu'est-ce que le responsive design ?",
    correct: "Design qui s'adapte à différents écrans",
    wrong: ['Design fixe', 'Type de programmation', 'Type de base de données'],
  },
  cs79: {
    text: "Qu'est-ce que l'UX ?",
    correct: 'Expérience utilisateur',
    wrong: ['Interface utilisateur', 'Type de design', 'Type de programmation'],
  },
  cs80: {
    text: "Qu'est-ce que l'UI ?",
    correct: 'Interface utilisateur',
    wrong: [
      'Expérience utilisateur',
      'Type de design',
      'Type de programmation',
    ],
  },
  cs81: {
    text: "Qu'est-ce qu'un framework ?",
    correct: 'Structure de base pour le développement',
    wrong: [
      'Langage de programmation',
      'Type de base de données',
      'Type de serveur',
    ],
  },
  cs82: {
    text: "Qu'est-ce qu'une bibliothèque ?",
    correct: 'Collection de code réutilisable',
    wrong: ['Framework', 'Langage de programmation', 'Type de base de données'],
  },
  cs83: {
    text: 'Quelle est la différence entre framework et bibliothèque ?',
    correct: 'Le framework contrôle le flux, la bibliothèque est appelée',
    wrong: [
      'Aucune différence',
      'La bibliothèque est plus grande',
      'Le framework est plus petit',
    ],
  },
  cs84: {
    text: "Qu'est-ce que Node.js ?",
    correct: "Environnement d'exécution JavaScript côté serveur",
    wrong: [
      'Langage de programmation',
      'Base de données',
      'Framework frontend',
    ],
  },
  cs85: {
    text: "Qu'est-ce que React ?",
    correct: 'Bibliothèque JavaScript pour les interfaces',
    wrong: ['Langage de programmation', 'Base de données', 'Serveur web'],
  },
  cs86: {
    text: "Qu'est-ce que Python ?",
    correct: 'Langage de programmation polyvalent',
    wrong: ['Type de serpent', 'Base de données', "Système d'exploitation"],
  },
  cs87: {
    text: "Qu'est-ce que Java ?",
    correct: 'Langage de programmation orienté objet',
    wrong: ['JavaScript', 'Base de données', "Système d'exploitation"],
  },
  cs88: {
    text: 'Quelle est la différence entre Java et JavaScript ?',
    correct: 'Langages différents malgré le nom similaire',
    wrong: [
      'JavaScript est une version de Java',
      'Java est une version de JavaScript',
      'Aucune différence',
    ],
  },
  cs89: {
    text: "Qu'est-ce que C++ ?",
    correct: 'Langage de programmation de bas niveau',
    wrong: ['Version de C', 'Base de données', "Système d'exploitation"],
  },
  cs90: {
    text: "Qu'est-ce que le code open source ?",
    correct: 'Code accessible et modifiable par tous',
    wrong: ['Code secret', 'Code payant', 'Code compilé'],
  },
  cs91: {
    text: "Qu'est-ce que Linux ?",
    correct: "Système d'exploitation open source",
    wrong: ['Langage de programmation', 'Base de données', 'Navigateur web'],
  },
  cs92: {
    text: "Qu'est-ce que le terminal ?",
    correct: 'Interface en ligne de commande',
    wrong: ['Interface graphique', 'Type de matériel', 'Type de réseau'],
  },
  cs93: {
    text: "Qu'est-ce qu'un IDE ?",
    correct: 'Environnement de développement intégré',
    wrong: [
      'Langage de programmation',
      'Type de base de données',
      'Type de serveur',
    ],
  },
  cs94: {
    text: "Qu'est-ce que le refactoring ?",
    correct: 'Restructuration du code sans changer son comportement',
    wrong: [
      'Réécriture complète',
      'Ajout de fonctionnalités',
      'Suppression de code',
    ],
  },
  cs95: {
    text: "Qu'est-ce que la dette technique ?",
    correct: 'Coût futur des raccourcis de développement',
    wrong: ['Argent dû', 'Type de bug', 'Type de test'],
  },
  cs96: {
    text: "Qu'est-ce que le pair programming ?",
    correct: 'Deux développeurs travaillant ensemble',
    wrong: ['Développement solo', 'Type de test', 'Type de déploiement'],
  },
  cs97: {
    text: "Qu'est-ce que le code review ?",
    correct: "Examen du code par d'autres développeurs",
    wrong: ['Test automatique', 'Déploiement', 'Documentation'],
  },
  cs98: {
    text: "Qu'est-ce que la documentation ?",
    correct: 'Explication écrite du code et des systèmes',
    wrong: ['Type de test', 'Type de déploiement', 'Type de code'],
  },
  cs99: {
    text: "Qu'est-ce qu'un README ?",
    correct: "Fichier d'introduction d'un projet",
    wrong: ['Type de code', 'Type de test', 'Type de déploiement'],
  },
  cs100: {
    text: "Qu'est-ce que le versioning sémantique ?",
    correct: 'Système de numérotation des versions (MAJOR.MINOR.PATCH)',
    wrong: ['Numérotation aléatoire', 'Dates de version', 'Noms de version'],
  },
};

export default computerScience;
