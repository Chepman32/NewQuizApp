// French translations for Data Structures questions
// Traductions françaises pour les questions de Structures de données

import type { CategoryTranslations } from '../index';

export const dataStructures: CategoryTranslations = {
  ds1: {
    text: "Qu'est-ce qu'un tableau ?",
    correct: "Collection d'éléments à indices",
    wrong: ['Liste chaînée', 'Arbre', 'Graphe'],
  },
  ds2: {
    text: "Quelle est la complexité d'accès à un élément de tableau ?",
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds3: {
    text: "Qu'est-ce qu'une liste chaînée ?",
    correct: 'Éléments connectés par des pointeurs',
    wrong: ['Tableau', 'Pile', 'File'],
  },
  ds4: {
    text: "Quelle est la complexité d'insertion au début d'une liste chaînée ?",
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds5: {
    text: "Qu'est-ce qu'une pile ?",
    correct: 'Structure LIFO (dernier entré, premier sorti)',
    wrong: ['Structure FIFO', 'Tableau', 'Arbre'],
  },
  ds6: {
    text: "Qu'est-ce qu'une file ?",
    correct: 'Structure FIFO (premier entré, premier sorti)',
    wrong: ['Structure LIFO', 'Tableau', 'Arbre'],
  },
  ds7: {
    text: 'Que signifie LIFO ?',
    correct: 'Dernier entré, premier sorti',
    wrong: [
      'Premier entré, premier sorti',
      'Dernier entré, dernier sorti',
      'Premier entré, dernier sorti',
    ],
  },
  ds8: {
    text: 'Que signifie FIFO ?',
    correct: 'Premier entré, premier sorti',
    wrong: [
      'Dernier entré, premier sorti',
      'Premier entré, dernier sorti',
      'Dernier entré, dernier sorti',
    ],
  },
  ds9: {
    text: "Qu'est-ce qu'un arbre binaire ?",
    correct: 'Arbre où chaque nœud a au plus deux enfants',
    wrong: [
      'Arbre avec deux nœuds',
      'Liste avec deux éléments',
      'Graphe avec deux sommets',
    ],
  },
  ds10: {
    text: "Qu'est-ce qu'un arbre binaire de recherche ?",
    correct: 'Arbre binaire ordonné pour la recherche',
    wrong: ['Arbre quelconque', 'Liste triée', 'Tableau trié'],
  },
  ds11: {
    text: 'Quelle est la complexité de recherche dans un ABR équilibré ?',
    correct: 'O(log n)',
    wrong: ['O(1)', 'O(n)', 'O(n²)'],
  },
  ds12: {
    text: "Qu'est-ce qu'un tas (heap) ?",
    correct: 'Arbre binaire complet avec propriété de tas',
    wrong: ['Pile', 'File', 'Liste chaînée'],
  },
  ds13: {
    text: "Qu'est-ce qu'un tas max ?",
    correct: 'Tas où le parent est plus grand que les enfants',
    wrong: [
      'Tas où le parent est plus petit',
      "Tas avec maximum d'éléments",
      'Tas trié',
    ],
  },
  ds14: {
    text: "Qu'est-ce qu'un tas min ?",
    correct: 'Tas où le parent est plus petit que les enfants',
    wrong: [
      'Tas où le parent est plus grand',
      "Tas avec minimum d'éléments",
      'Tas trié',
    ],
  },
  ds15: {
    text: "Qu'est-ce qu'une table de hachage ?",
    correct: 'Structure utilisant une fonction de hachage',
    wrong: ['Tableau trié', 'Liste chaînée', 'Arbre'],
  },
  ds16: {
    text: 'Quelle est la complexité moyenne de recherche dans une table de hachage ?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds17: {
    text: "Qu'est-ce qu'une collision dans une table de hachage ?",
    correct: 'Deux clés avec le même indice',
    wrong: ['Erreur de programme', 'Débordement de mémoire', 'Clé invalide'],
  },
  ds18: {
    text: "Qu'est-ce qu'un graphe ?",
    correct: "Ensemble de sommets et d'arêtes",
    wrong: ['Tableau', 'Arbre seulement', 'Liste'],
  },
  ds19: {
    text: "Qu'est-ce qu'un graphe orienté ?",
    correct: 'Graphe avec des arêtes directionnelles',
    wrong: ['Graphe sans direction', 'Graphe avec poids', 'Graphe sans cycles'],
  },
  ds20: {
    text: "Qu'est-ce qu'un graphe non orienté ?",
    correct: 'Graphe avec des arêtes bidirectionnelles',
    wrong: ['Graphe avec direction', 'Graphe avec poids', 'Graphe avec cycles'],
  },
  ds21: {
    text: "Qu'est-ce qu'un graphe pondéré ?",
    correct: 'Graphe avec des poids sur les arêtes',
    wrong: ['Graphe sans poids', 'Graphe orienté', 'Graphe complet'],
  },
  ds22: {
    text: "Qu'est-ce qu'une liste d'adjacence ?",
    correct: 'Représentation de graphe avec des listes',
    wrong: ["Matrice d'adjacence", 'Liste chaînée', 'Tableau'],
  },
  ds23: {
    text: "Qu'est-ce qu'une matrice d'adjacence ?",
    correct: 'Représentation de graphe avec une matrice',
    wrong: ["Liste d'adjacence", 'Tableau simple', 'Arbre'],
  },
  ds24: {
    text: "Qu'est-ce qu'un arbre AVL ?",
    correct: 'Arbre binaire de recherche auto-équilibré',
    wrong: ['Arbre quelconque', 'Liste', 'Graphe'],
  },
  ds25: {
    text: "Qu'est-ce qu'un arbre rouge-noir ?",
    correct: 'Arbre binaire de recherche équilibré avec couleurs',
    wrong: [
      'Arbre avec des couleurs aléatoires',
      'Graphe coloré',
      'Liste colorée',
    ],
  },
  ds26: {
    text: "Qu'est-ce qu'un B-tree ?",
    correct: 'Arbre équilibré pour les bases de données',
    wrong: ['Arbre binaire', 'Arbre AVL', 'Arbre rouge-noir'],
  },
  ds27: {
    text: "Qu'est-ce qu'un trie ?",
    correct: 'Arbre pour stocker des chaînes',
    wrong: ['Arbre binaire', 'Graphe', 'Table de hachage'],
  },
  ds28: {
    text: "Qu'est-ce qu'une file de priorité ?",
    correct: 'File où les éléments ont des priorités',
    wrong: ['File normale', 'Pile', 'Liste'],
  },
  ds29: {
    text: 'Quelle structure est souvent utilisée pour implémenter une file de priorité ?',
    correct: 'Tas',
    wrong: ['Tableau', 'Liste chaînée', 'Pile'],
  },
  ds30: {
    text: "Qu'est-ce qu'une liste doublement chaînée ?",
    correct: 'Liste avec pointeurs avant et arrière',
    wrong: ['Liste avec deux éléments', 'Deux listes', 'Liste circulaire'],
  },
  ds31: {
    text: "Qu'est-ce qu'une liste circulaire ?",
    correct: 'Liste où le dernier pointe vers le premier',
    wrong: [
      'Liste en forme de cercle',
      'Liste doublement chaînée',
      'Liste avec boucle',
    ],
  },
  ds32: {
    text: "Qu'est-ce qu'un deque ?",
    correct: 'File à double extrémité',
    wrong: ['Pile double', 'Deux files', 'Liste double'],
  },
  ds33: {
    text: "Qu'est-ce qu'un ensemble (set) ?",
    correct: 'Collection sans doublons',
    wrong: ['Collection avec doublons', 'Liste ordonnée', 'Tableau'],
  },
  ds34: {
    text: "Qu'est-ce qu'un multiset ?",
    correct: 'Ensemble permettant les doublons',
    wrong: [
      'Ensemble sans doublons',
      'Plusieurs ensembles',
      'Ensemble ordonné',
    ],
  },
  ds35: {
    text: "Qu'est-ce qu'une map (dictionnaire) ?",
    correct: 'Collection de paires clé-valeur',
    wrong: ['Tableau', 'Liste', 'Ensemble'],
  },
  ds36: {
    text: "Qu'est-ce qu'un arbre de segments ?",
    correct: "Arbre pour les requêtes d'intervalle",
    wrong: ['Arbre binaire simple', 'Liste de segments', 'Graphe'],
  },
  ds37: {
    text: "Qu'est-ce qu'un arbre de Fenwick ?",
    correct: 'Structure pour les sommes préfixes',
    wrong: ['Arbre binaire', 'Graphe', 'Liste'],
  },
  ds38: {
    text: "Qu'est-ce qu'un union-find ?",
    correct: 'Structure pour les ensembles disjoints',
    wrong: ['Opération de recherche', 'Type de tri', 'Algorithme de graphe'],
  },
  ds39: {
    text: "Qu'est-ce que la compression de chemin ?",
    correct: 'Optimisation de union-find',
    wrong: ['Compression de données', 'Algorithme de tri', 'Type de hachage'],
  },
  ds40: {
    text: "Qu'est-ce qu'un skip list ?",
    correct: 'Liste chaînée avec plusieurs niveaux',
    wrong: ['Liste qui saute des éléments', 'Liste triée', 'Liste circulaire'],
  },
  ds41: {
    text: 'Quelle est la complexité de recherche dans un skip list ?',
    correct: 'O(log n) en moyenne',
    wrong: ['O(1)', 'O(n)', 'O(n²)'],
  },
  ds42: {
    text: "Qu'est-ce qu'un bloom filter ?",
    correct: "Structure probabiliste pour tester l'appartenance",
    wrong: ['Filtre de données', 'Type de tri', 'Algorithme de recherche'],
  },
  ds43: {
    text: "Qu'est-ce qu'un LRU cache ?",
    correct: 'Cache qui évince le moins récemment utilisé',
    wrong: ['Cache le plus récent', 'Cache aléatoire', 'Cache FIFO'],
  },
  ds44: {
    text: 'Quelle structure combine liste et table de hachage pour LRU ?',
    correct: 'Liste doublement chaînée + HashMap',
    wrong: ['Tableau + Pile', 'Arbre + File', 'Graphe + Ensemble'],
  },
  ds45: {
    text: "Qu'est-ce qu'un arbre suffixe ?",
    correct: "Arbre contenant tous les suffixes d'une chaîne",
    wrong: ['Arbre de préfixes', 'Trie', 'Arbre binaire'],
  },
  ds46: {
    text: "Qu'est-ce qu'un tableau de suffixes ?",
    correct: "Tableau trié des suffixes d'une chaîne",
    wrong: ['Tableau de préfixes', 'Tableau trié', 'Liste de chaînes'],
  },
  ds47: {
    text: "Qu'est-ce qu'un arbre k-d ?",
    correct: 'Arbre pour les données multidimensionnelles',
    wrong: [
      'Arbre avec k enfants',
      'Arbre de dimension k',
      'Graphe k-dimensionnel',
    ],
  },
  ds48: {
    text: "Qu'est-ce qu'un quadtree ?",
    correct: 'Arbre où chaque nœud a quatre enfants',
    wrong: ['Arbre avec quatre niveaux', 'Graphe carré', 'Matrice'],
  },
  ds49: {
    text: "Qu'est-ce qu'un octree ?",
    correct: 'Arbre où chaque nœud a huit enfants',
    wrong: ['Arbre avec huit niveaux', 'Graphe 3D', 'Cube de données'],
  },
  ds50: {
    text: "Qu'est-ce qu'une structure de données persistante ?",
    correct: 'Structure qui préserve les versions précédentes',
    wrong: [
      'Structure stockée sur disque',
      'Structure permanente',
      'Structure immuable',
    ],
  },

  ds51: {
    text: "Qu'est-ce qu'une structure de données immuable ?",
    correct: 'Structure qui ne peut pas être modifiée',
    wrong: [
      'Structure persistante',
      'Structure constante',
      'Structure statique',
    ],
  },
  ds52: {
    text: "Qu'est-ce qu'un tableau dynamique ?",
    correct: 'Tableau qui peut changer de taille',
    wrong: ['Tableau fixe', 'Liste chaînée', 'Pile'],
  },
  ds53: {
    text: 'Comment un ArrayList gère-t-il le redimensionnement ?',
    correct: 'Doubler la capacité quand plein',
    wrong: [
      'Ajouter un élément',
      'Créer un nouveau tableau',
      'Utiliser une liste chaînée',
    ],
  },
  ds54: {
    text: "Qu'est-ce que le facteur de charge d'une table de hachage ?",
    correct: 'Ratio éléments/capacité',
    wrong: ["Nombre d'éléments", 'Taille de la table', 'Nombre de collisions'],
  },
  ds55: {
    text: "Qu'est-ce que le chaînage dans une table de hachage ?",
    correct: 'Utiliser des listes pour les collisions',
    wrong: ['Lier les tables', 'Connecter les clés', 'Fusionner les valeurs'],
  },
  ds56: {
    text: "Qu'est-ce que l'adressage ouvert ?",
    correct: 'Trouver un autre emplacement lors de collision',
    wrong: ['Ouvrir une nouvelle table', 'Adresse publique', 'Accès direct'],
  },
  ds57: {
    text: "Qu'est-ce que le sondage linéaire ?",
    correct: 'Chercher le prochain emplacement libre',
    wrong: ['Recherche linéaire', 'Tri linéaire', 'Complexité linéaire'],
  },
  ds58: {
    text: "Qu'est-ce que le sondage quadratique ?",
    correct: 'Chercher avec des sauts quadratiques',
    wrong: ['Recherche quadratique', 'Quatre sondes', 'Complexité quadratique'],
  },
  ds59: {
    text: "Qu'est-ce que le double hachage ?",
    correct: 'Utiliser deux fonctions de hachage',
    wrong: ['Hacher deux fois', 'Deux tables de hachage', 'Double collision'],
  },
  ds60: {
    text: "Qu'est-ce qu'un parcours en profondeur (DFS) ?",
    correct: 'Explorer aussi loin que possible avant de revenir',
    wrong: [
      'Explorer niveau par niveau',
      'Parcours aléatoire',
      'Parcours trié',
    ],
  },
  ds61: {
    text: "Qu'est-ce qu'un parcours en largeur (BFS) ?",
    correct: 'Explorer niveau par niveau',
    wrong: ['Explorer en profondeur', 'Parcours aléatoire', 'Parcours trié'],
  },
  ds62: {
    text: 'Quelle structure est utilisée pour BFS ?',
    correct: 'File',
    wrong: ['Pile', 'Tas', 'Arbre'],
  },
  ds63: {
    text: 'Quelle structure est utilisée pour DFS itératif ?',
    correct: 'Pile',
    wrong: ['File', 'Tas', 'Arbre'],
  },
  ds64: {
    text: "Qu'est-ce qu'un parcours préordre ?",
    correct: 'Racine, gauche, droite',
    wrong: [
      'Gauche, racine, droite',
      'Gauche, droite, racine',
      'Droite, gauche, racine',
    ],
  },
  ds65: {
    text: "Qu'est-ce qu'un parcours inordre ?",
    correct: 'Gauche, racine, droite',
    wrong: [
      'Racine, gauche, droite',
      'Gauche, droite, racine',
      'Droite, gauche, racine',
    ],
  },
  ds66: {
    text: "Qu'est-ce qu'un parcours postordre ?",
    correct: 'Gauche, droite, racine',
    wrong: [
      'Racine, gauche, droite',
      'Gauche, racine, droite',
      'Droite, gauche, racine',
    ],
  },
  ds67: {
    text: "Quel parcours donne les éléments triés d'un ABR ?",
    correct: 'Inordre',
    wrong: ['Préordre', 'Postordre', 'Par niveau'],
  },
  ds68: {
    text: "Qu'est-ce qu'un arbre complet ?",
    correct: 'Tous les niveaux remplis sauf le dernier',
    wrong: ['Arbre avec tous les nœuds', 'Arbre équilibré', 'Arbre parfait'],
  },
  ds69: {
    text: "Qu'est-ce qu'un arbre parfait ?",
    correct: 'Tous les niveaux complètement remplis',
    wrong: ['Arbre complet', 'Arbre équilibré', 'Arbre optimal'],
  },
  ds70: {
    text: "Qu'est-ce qu'un arbre équilibré ?",
    correct: "Hauteurs des sous-arbres diffèrent d'au plus 1",
    wrong: [
      'Arbre avec même nombre de nœuds',
      'Arbre symétrique',
      'Arbre complet',
    ],
  },
  ds71: {
    text: "Quelle est la hauteur d'un arbre équilibré avec n nœuds ?",
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds72: {
    text: "Qu'est-ce qu'une rotation dans un arbre AVL ?",
    correct: "Opération pour rééquilibrer l'arbre",
    wrong: ["Tourner l'arbre", "Inverser l'arbre", "Trier l'arbre"],
  },
  ds73: {
    text: 'Combien de types de rotations y a-t-il dans un AVL ?',
    correct: '4 (LL, RR, LR, RL)',
    wrong: ['2', '3', '6'],
  },
  ds74: {
    text: "Qu'est-ce que le facteur d'équilibre d'un nœud AVL ?",
    correct: 'Hauteur gauche moins hauteur droite',
    wrong: ["Nombre d'enfants", 'Profondeur du nœud', 'Nombre de descendants'],
  },
  ds75: {
    text: "Quelles sont les valeurs valides du facteur d'équilibre AVL ?",
    correct: '-1, 0, 1',
    wrong: ['0, 1, 2', '-2, -1, 0, 1, 2', 'Tout entier'],
  },
  ds76: {
    text: "Qu'est-ce qu'un nœud sentinelle ?",
    correct: 'Nœud factice pour simplifier le code',
    wrong: ['Nœud de garde', 'Nœud racine', 'Nœud feuille'],
  },
  ds77: {
    text: "Qu'est-ce qu'un arbre binaire dégénéré ?",
    correct: 'Arbre où chaque nœud a un seul enfant',
    wrong: ['Arbre vide', 'Arbre avec erreurs', 'Arbre non valide'],
  },
  ds78: {
    text: 'Quelle est la complexité de recherche dans un arbre dégénéré ?',
    correct: 'O(n)',
    wrong: ['O(log n)', 'O(1)', 'O(n²)'],
  },
  ds79: {
    text: "Qu'est-ce qu'un arbre de décision ?",
    correct: 'Arbre pour la prise de décision',
    wrong: ['Arbre binaire', 'Arbre de recherche', 'Arbre équilibré'],
  },
  ds80: {
    text: "Qu'est-ce qu'un arbre de syntaxe abstraite ?",
    correct: 'Représentation arborescente du code',
    wrong: ['Arbre de fichiers', 'Arbre de données', 'Arbre de recherche'],
  },
  ds81: {
    text: "Qu'est-ce qu'un graphe acyclique dirigé (DAG) ?",
    correct: 'Graphe orienté sans cycles',
    wrong: ['Graphe avec cycles', 'Graphe non orienté', 'Arbre'],
  },
  ds82: {
    text: "Qu'est-ce qu'un tri topologique ?",
    correct: "Ordre linéaire des sommets d'un DAG",
    wrong: ['Tri de graphe', "Tri d'arbre", 'Tri de liste'],
  },
  ds83: {
    text: "Qu'est-ce qu'un graphe biparti ?",
    correct: 'Graphe divisible en deux ensembles indépendants',
    wrong: [
      'Graphe avec deux sommets',
      'Graphe avec deux arêtes',
      'Graphe divisé en deux',
    ],
  },
  ds84: {
    text: "Qu'est-ce qu'un graphe complet ?",
    correct: 'Graphe où tous les sommets sont connectés',
    wrong: ['Graphe avec tous les sommets', 'Graphe sans trous', 'Graphe fini'],
  },
  ds85: {
    text: "Qu'est-ce qu'un arbre couvrant ?",
    correct: 'Sous-graphe connectant tous les sommets sans cycle',
    wrong: ['Arbre qui couvre', 'Grand arbre', 'Arbre complet'],
  },
  ds86: {
    text: "Qu'est-ce qu'un arbre couvrant minimum ?",
    correct: 'Arbre couvrant avec poids total minimum',
    wrong: [
      'Plus petit arbre',
      'Arbre avec moins de nœuds',
      'Arbre le plus court',
    ],
  },
  ds87: {
    text: "Qu'est-ce qu'un cycle dans un graphe ?",
    correct: 'Chemin qui revient au point de départ',
    wrong: ['Boucle infinie', 'Cercle de sommets', 'Répétition'],
  },
  ds88: {
    text: "Qu'est-ce qu'un chemin dans un graphe ?",
    correct: 'Séquence de sommets connectés par des arêtes',
    wrong: ['Route', 'Direction', 'Ligne'],
  },
  ds89: {
    text: "Qu'est-ce que le degré d'un sommet ?",
    correct: "Nombre d'arêtes connectées au sommet",
    wrong: ['Position du sommet', 'Valeur du sommet', 'Importance du sommet'],
  },
  ds90: {
    text: "Qu'est-ce qu'un sommet isolé ?",
    correct: 'Sommet sans arêtes',
    wrong: ['Sommet seul', 'Sommet éloigné', 'Sommet spécial'],
  },
  ds91: {
    text: "Qu'est-ce qu'une clique dans un graphe ?",
    correct: 'Sous-ensemble de sommets tous connectés',
    wrong: ['Groupe de graphes', 'Type de cycle', 'Chemin spécial'],
  },
  ds92: {
    text: "Qu'est-ce qu'un graphe planaire ?",
    correct: "Graphe dessinable sans croisement d'arêtes",
    wrong: ['Graphe 2D', 'Graphe plat', 'Graphe simple'],
  },
  ds93: {
    text: "Qu'est-ce qu'un multigraphe ?",
    correct: 'Graphe avec plusieurs arêtes entre deux sommets',
    wrong: ['Plusieurs graphes', 'Grand graphe', 'Graphe complexe'],
  },
  ds94: {
    text: "Qu'est-ce qu'un hypergraphe ?",
    correct: 'Graphe où une arête peut connecter plus de deux sommets',
    wrong: ['Super graphe', 'Graphe 3D', 'Graphe complexe'],
  },
  ds95: {
    text: "Qu'est-ce qu'une file monotone ?",
    correct: 'File où les éléments sont ordonnés',
    wrong: ['File simple', 'File constante', 'File unique'],
  },
  ds96: {
    text: "Qu'est-ce qu'une pile monotone ?",
    correct: 'Pile où les éléments sont ordonnés',
    wrong: ['Pile simple', 'Pile constante', 'Pile unique'],
  },
  ds97: {
    text: "Qu'est-ce qu'un arbre de Merkle ?",
    correct: 'Arbre de hachages pour vérification',
    wrong: ['Arbre de données', 'Arbre binaire', 'Arbre de recherche'],
  },
  ds98: {
    text: "Qu'est-ce qu'un rope (corde) ?",
    correct: 'Structure pour les longues chaînes',
    wrong: ['Type de liste', 'Type de tableau', 'Type de graphe'],
  },
  ds99: {
    text: "Qu'est-ce qu'un treap ?",
    correct: "Combinaison d'arbre et de tas",
    wrong: ['Type de tri', 'Type de graphe', 'Type de liste'],
  },
  ds100: {
    text: "Qu'est-ce qu'un splay tree ?",
    correct: 'Arbre qui déplace les éléments accédés vers la racine',
    wrong: ['Arbre étalé', 'Arbre large', 'Arbre plat'],
  },
};

export default dataStructures;
