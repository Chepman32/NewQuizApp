// French translations for Algorithms questions
// Traductions en français pour les questions d'Algorithmes

import type { CategoryTranslations } from '../index';

export const algorithms: CategoryTranslations = {
  alg1: {
    text: "Qu'est-ce qu'un algorithme ?",
    correct: 'Procédure étape par étape pour résoudre un problème',
    wrong: [
      'Langage de programmation',
      'Structure de données',
      'Matériel informatique',
    ],
  },
  alg2: {
    text: "Qu'est-ce que le tri ?",
    correct: 'Organiser les éléments dans un ordre',
    wrong: [
      'Rechercher des éléments',
      'Supprimer des éléments',
      'Ajouter des éléments',
    ],
  },
  alg3: {
    text: "Qu'est-ce que la recherche ?",
    correct: 'Trouver un élément',
    wrong: [
      'Trier des éléments',
      'Supprimer des éléments',
      'Ajouter des éléments',
    ],
  },
  alg4: {
    text: "Qu'est-ce que la recherche linéaire ?",
    correct: 'Vérifier chaque élément un par un',
    wrong: [
      'Recherche binaire',
      'Recherche par hachage',
      'Recherche dans un arbre',
    ],
  },
  alg5: {
    text: 'Quelle est la complexité temporelle de la recherche linéaire ?',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  alg6: {
    text: "Qu'est-ce que la recherche binaire ?",
    correct: 'Diviser le tableau trié en deux',
    wrong: [
      'Recherche linéaire',
      'Recherche par hachage',
      'Recherche dans un arbre',
    ],
  },
  alg7: {
    text: 'Quelle est la complexité temporelle de la recherche binaire ?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg8: {
    text: "Qu'est-ce qui est requis pour la recherche binaire ?",
    correct: 'Tableau trié',
    wrong: ['Tableau non trié', 'Liste chaînée', 'Arbre'],
  },
  alg9: {
    text: "Qu'est-ce que le tri à bulles ?",
    correct: 'Échanger répétitivement les éléments adjacents',
    wrong: ['Diviser pour régner', 'Utiliser un tas', 'Utiliser un pivot'],
  },
  alg10: {
    text: 'Quelle est la complexité temporelle du tri à bulles ?',
    correct: 'O(n²)',
    wrong: ['O(n)', 'O(log n)', 'O(n log n)'],
  },
  alg11: {
    text: "Qu'est-ce que le tri par sélection ?",
    correct: 'Trouver le minimum et le placer au début',
    wrong: ['Échanger les adjacents', 'Diviser le tableau', 'Utiliser un tas'],
  },
  alg12: {
    text: "Qu'est-ce que le tri par insertion ?",
    correct: 'Insérer les éléments dans la partie triée',
    wrong: [
      'Échanger les adjacents',
      'Trouver le minimum',
      'Utiliser un pivot',
    ],
  },
  alg13: {
    text: 'Quel est le meilleur cas pour le tri par insertion ?',
    correct: 'O(n) - déjà trié',
    wrong: ['O(n²)', 'O(log n)', 'O(n log n)'],
  },
  alg14: {
    text: "Qu'est-ce que le tri fusion ?",
    correct: 'Diviser, trier et fusionner',
    wrong: [
      'Échanger les adjacents',
      'Trouver le minimum',
      'Utiliser un pivot',
    ],
  },
  alg15: {
    text: 'Quelle est la complexité temporelle du tri fusion ?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg16: {
    text: "Qu'est-ce que le tri rapide ?",
    correct: "Partitionner autour d'un pivot",
    wrong: [
      'Diviser et fusionner',
      'Échanger les adjacents',
      'Trouver le minimum',
    ],
  },
  alg17: {
    text: 'Quelle est la complexité temporelle moyenne du tri rapide ?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg18: {
    text: 'Quel est le pire cas pour le tri rapide ?',
    correct: 'O(n²) - déjà trié avec mauvais pivot',
    wrong: ['O(n log n)', 'O(n)', 'O(log n)'],
  },
  alg19: {
    text: "Qu'est-ce que le tri par tas ?",
    correct: 'Utiliser la structure de données tas',
    wrong: ['Utiliser un pivot', 'Fusionner', 'Échanger les adjacents'],
  },
  alg20: {
    text: 'Quelle est la complexité temporelle du tri par tas ?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg21: {
    text: "Qu'est-ce qu'un algorithme de tri stable ?",
    correct: "Préserve l'ordre des éléments égaux",
    wrong: [
      'Algorithme plus rapide',
      'Utilise moins de mémoire',
      'Algorithme en place',
    ],
  },
  alg22: {
    text: 'Le tri fusion est-il stable ?',
    correct: 'Oui',
    wrong: ['Non', 'Parfois', "Dépend de l'implémentation"],
  },
  alg23: {
    text: 'Le tri rapide est-il stable ?',
    correct: 'Non (typiquement)',
    wrong: ['Oui', 'Toujours', 'Jamais'],
  },
  alg24: {
    text: "Qu'est-ce que le tri en place ?",
    correct: 'Trier avec O(1) espace supplémentaire',
    wrong: ['Trier avec O(n) espace', 'Tri stable', 'Tri rapide'],
  },
  alg25: {
    text: 'Le tri fusion est-il en place ?',
    correct: 'Non - nécessite O(n) espace supplémentaire',
    wrong: ['Oui', 'Parfois', 'Dépend'],
  },
  alg26: {
    text: "Qu'est-ce que le tri par comptage ?",
    correct: 'Compter les occurrences de chaque élément',
    wrong: ['Tri par comparaison', 'Diviser pour régner', 'Utiliser un tas'],
  },
  alg27: {
    text: 'Quelle est la complexité temporelle du tri par comptage ?',
    correct: 'O(n + k) où k est la plage',
    wrong: ['O(n log n)', 'O(n²)', 'O(log n)'],
  },
  alg28: {
    text: "Qu'est-ce que le tri radix ?",
    correct: 'Trier par chiffres',
    wrong: ['Tri par comparaison', 'Diviser pour régner', 'Utiliser un tas'],
  },
  alg29: {
    text: "Qu'est-ce que le tri par paquets ?",
    correct: 'Distribuer les éléments dans des paquets',
    wrong: ['Tri par comparaison', 'Diviser pour régner', 'Utiliser un tas'],
  },
  alg30: {
    text: 'Quelle est la limite inférieure pour le tri par comparaison ?',
    correct: 'O(n log n)',
    wrong: ['O(n)', 'O(n²)', 'O(log n)'],
  },
  alg31: {
    text: "Qu'est-ce que le parcours en profondeur (DFS) ?",
    correct: 'Explorer le plus loin possible avant de revenir',
    wrong: [
      'Explorer niveau par niveau',
      'Exploration aléatoire',
      'Plus court chemin',
    ],
  },
  alg32: {
    text: "Qu'est-ce que le parcours en largeur (BFS) ?",
    correct: 'Explorer niveau par niveau',
    wrong: [
      "Explorer en profondeur d'abord",
      'Exploration aléatoire',
      'Plus long chemin',
    ],
  },
  alg33: {
    text: 'Quelle structure de données utilise typiquement DFS ?',
    correct: 'Pile',
    wrong: ['File', 'Tas', 'Tableau'],
  },
  alg34: {
    text: 'Quelle structure de données utilise typiquement BFS ?',
    correct: 'File',
    wrong: ['Pile', 'Tas', 'Tableau'],
  },
  alg35: {
    text: 'Quelle est la complexité temporelle de DFS ?',
    correct: 'O(V + E)',
    wrong: ['O(V)', 'O(E)', 'O(V × E)'],
  },
  alg36: {
    text: 'Quelle est la complexité temporelle de BFS ?',
    correct: 'O(V + E)',
    wrong: ['O(V)', 'O(E)', 'O(V × E)'],
  },
  alg37: {
    text: "Qu'est-ce que l'algorithme de Dijkstra ?",
    correct: 'Trouver le plus court chemin depuis une source',
    wrong: [
      "Trouver l'arbre couvrant minimum",
      'Trier un graphe',
      'Détecter les cycles',
    ],
  },
  alg38: {
    text: "Qu'est-ce que l'algorithme de Bellman-Ford ?",
    correct: 'Plus court chemin avec arêtes négatives',
    wrong: [
      'Seulement arêtes positives',
      'Arbre couvrant minimum',
      'Tri topologique',
    ],
  },
  alg39: {
    text: "Qu'est-ce que l'algorithme de Floyd-Warshall ?",
    correct: 'Plus courts chemins entre toutes les paires',
    wrong: [
      'Plus court chemin depuis une source',
      'Arbre couvrant minimum',
      'Détection de cycles',
    ],
  },
  alg40: {
    text: "Qu'est-ce que l'algorithme de Kruskal ?",
    correct: 'Arbre couvrant minimum utilisant les arêtes triées',
    wrong: ['Plus court chemin', 'Tri topologique', 'Détection de cycles'],
  },
  alg41: {
    text: "Qu'est-ce que l'algorithme de Prim ?",
    correct: 'Arbre couvrant minimum croissant depuis un sommet',
    wrong: ['Plus court chemin', 'Tri topologique', 'Détection de cycles'],
  },
  alg42: {
    text: "Qu'est-ce que le tri topologique ?",
    correct: 'Ordonner les sommets dans un graphe acyclique dirigé',
    wrong: ['Trier les arêtes', 'Trouver les cycles', 'Plus court chemin'],
  },
  alg43: {
    text: "Qu'est-ce que la programmation dynamique ?",
    correct: 'Résoudre des sous-problèmes qui se chevauchent',
    wrong: ['Diviser pour régner', 'Algorithme glouton', 'Force brute'],
  },
  alg44: {
    text: "Qu'est-ce que la mémoïsation ?",
    correct: 'Stocker les résultats des sous-problèmes',
    wrong: [
      'Toujours recalculer',
      'Utiliser la récursion',
      "Utiliser l'itération",
    ],
  },
  alg45: {
    text: "Qu'est-ce que la tabulation en programmation dynamique ?",
    correct: 'Approche ascendante',
    wrong: ['Approche descendante', 'Récursion', 'Force brute'],
  },
  alg46: {
    text: "Qu'est-ce qu'un algorithme glouton ?",
    correct: "Choisir l'optimum local à chaque étape",
    wrong: [
      'Considérer toutes les options',
      'Utiliser la programmation dynamique',
      'Utiliser la force brute',
    ],
  },
  alg47: {
    text: "Qu'est-ce que diviser pour régner ?",
    correct: 'Diviser le problème, résoudre les parties, combiner',
    wrong: [
      'Résoudre séquentiellement',
      'Utiliser la programmation dynamique',
      'Algorithme glouton',
    ],
  },
  alg48: {
    text: "Qu'est-ce que le retour sur trace (backtracking) ?",
    correct: 'Essayer des solutions et revenir en arrière si elles échouent',
    wrong: [
      'Ne jamais revenir en arrière',
      'Algorithme glouton',
      'Programmation dynamique',
    ],
  },
  alg49: {
    text: "Qu'est-ce que le problème du sac à dos ?",
    correct: 'Maximiser la valeur avec une capacité limitée',
    wrong: [
      'Minimiser le poids',
      'Trier les éléments',
      'Rechercher un élément',
    ],
  },
  alg50: {
    text: "Qu'est-ce que la plus longue sous-séquence commune (LCS) ?",
    correct: 'Trouver la plus longue sous-séquence commune',
    wrong: [
      'Trouver une sous-chaîne',
      'Trier des chaînes',
      'Rechercher un motif',
    ],
  },
  alg51: {
    text: "Qu'est-ce que le problème de la distance d'édition ?",
    correct: 'Opérations minimales pour transformer des chaînes',
    wrong: ['Opérations maximales', 'Trier des chaînes', 'Rechercher un motif'],
  },
  alg52: {
    text: "Qu'est-ce que la suite de Fibonacci ?",
    correct: 'Chaque nombre est la somme des deux précédents',
    wrong: [
      'Chaque nombre est le produit',
      'Nombres premiers',
      'Nombres pairs',
    ],
  },
  alg53: {
    text: 'Quelle est la complexité de Fibonacci récursif naïf ?',
    correct: 'O(2^n)',
    wrong: ['O(n)', 'O(n²)', 'O(log n)'],
  },
  alg54: {
    text: 'Quelle est la complexité de Fibonacci avec programmation dynamique ?',
    correct: 'O(n)',
    wrong: ['O(2^n)', 'O(n²)', 'O(log n)'],
  },
  alg55: {
    text: "Qu'est-ce que l'algorithme de Kadane ?",
    correct: 'Trouver le sous-tableau de somme maximale',
    wrong: ['Trier un tableau', 'Rechercher un élément', 'Trouver le minimum'],
  },
  alg56: {
    text: "Qu'est-ce que le problème du rendu de monnaie ?",
    correct: 'Nombre minimum de pièces pour rendre la monnaie',
    wrong: [
      'Nombre maximum de pièces',
      'Trier les pièces',
      'Compter les pièces',
    ],
  },
  alg57: {
    text: "Qu'est-ce que le problème du voyageur de commerce (TSP) ?",
    correct: 'Plus court chemin visitant toutes les villes',
    wrong: ['Plus long chemin', 'Visiter une ville', 'Trier les villes'],
  },
  alg58: {
    text: 'Quelle est la complexité du TSP par force brute ?',
    correct: 'O(n!)',
    wrong: ['O(n)', 'O(n²)', 'O(2^n)'],
  },
  alg59: {
    text: "Qu'est-ce que le problème des N reines ?",
    correct: "Placer N reines sans qu'elles s'attaquent",
    wrong: ['Déplacer des reines', 'Compter des reines', 'Trier des reines'],
  },
  alg60: {
    text: "Qu'est-ce que le problème du sudoku ?",
    correct: 'Remplir une grille avec des contraintes',
    wrong: ['Vider une grille', 'Trier des nombres', 'Additionner des nombres'],
  },
  alg61: {
    text: "Qu'est-ce qu'un arbre de segments ?",
    correct: 'Structure pour les requêtes de plage',
    wrong: ['Arbre binaire simple', 'Liste chaînée', 'Table de hachage'],
  },
  alg62: {
    text: "Qu'est-ce qu'un arbre de Fenwick (BIT) ?",
    correct: 'Structure pour les sommes de préfixes',
    wrong: ['Arbre binaire de recherche', 'Tas', 'Graphe'],
  },
  alg63: {
    text: "Qu'est-ce qu'un trie ?",
    correct: 'Arbre pour stocker des chaînes',
    wrong: ['Arbre binaire', 'Tas', 'Graphe'],
  },
  alg64: {
    text: "Qu'est-ce que l'algorithme KMP ?",
    correct: 'Recherche de motifs efficace',
    wrong: ['Tri', 'Recherche binaire', 'Parcours de graphe'],
  },
  alg65: {
    text: "Qu'est-ce que l'algorithme de Rabin-Karp ?",
    correct: 'Recherche de motifs avec hachage',
    wrong: ['Tri', 'Recherche binaire', 'Parcours de graphe'],
  },
  alg66: {
    text: "Qu'est-ce que Union-Find ?",
    correct: 'Structure pour ensembles disjoints',
    wrong: ['Arbre binaire', 'Table de hachage', 'File de priorité'],
  },
  alg67: {
    text: "Qu'est-ce que la compression de chemin dans Union-Find ?",
    correct: "Aplatir l'arbre pendant la recherche",
    wrong: [
      "Rendre l'arbre plus profond",
      'Supprimer des nœuds',
      'Ajouter des nœuds',
    ],
  },
  alg68: {
    text: "Qu'est-ce que l'union par rang ?",
    correct: 'Unir le plus petit arbre au plus grand',
    wrong: [
      'Unir aléatoirement',
      'Toujours unir à gauche',
      'Toujours unir à droite',
    ],
  },
  alg69: {
    text: "Qu'est-ce que l'algorithme A* ?",
    correct: 'Recherche de chemin avec heuristique',
    wrong: ['Recherche sans heuristique', 'Tri', 'Recherche binaire'],
  },
  alg70: {
    text: "Qu'est-ce qu'une heuristique admissible ?",
    correct: 'Ne surestime jamais le coût réel',
    wrong: ['Surestime toujours', 'Coût exact', 'Coût aléatoire'],
  },
  alg71: {
    text: "Qu'est-ce que l'algorithme de flot maximum ?",
    correct: 'Trouver le flot maximum dans un réseau',
    wrong: [
      'Trouver le flot minimum',
      'Trier les flots',
      'Supprimer les flots',
    ],
  },
  alg72: {
    text: "Qu'est-ce que l'algorithme de Ford-Fulkerson ?",
    correct: 'Trouver le flot maximum avec chemins augmentants',
    wrong: [
      'Trouver le plus court chemin',
      'Arbre couvrant minimum',
      'Tri topologique',
    ],
  },
  alg73: {
    text: "Qu'est-ce que le théorème coupe min-flot max ?",
    correct: 'Flot maximum égal à la coupe minimum',
    wrong: [
      'Flot maximum supérieur à la coupe minimum',
      'Pas de relation',
      'Flot minimum égal à la coupe maximum',
    ],
  },
  alg74: {
    text: "Qu'est-ce que le couplage biparti ?",
    correct: 'Coupler les sommets de deux ensembles',
    wrong: [
      "Coupler n'importe quels sommets",
      'Trier les sommets',
      'Supprimer les sommets',
    ],
  },
  alg75: {
    text: "Qu'est-ce que l'algorithme hongrois ?",
    correct: 'Couplage de coût minimum',
    wrong: ['Couplage de coût maximum', 'Tri', 'Recherche'],
  },
  alg76: {
    text: "Qu'est-ce que la complexité amortie ?",
    correct: 'Coût moyen par opération dans une séquence',
    wrong: [
      'Toujours le pire cas',
      'Toujours le meilleur cas',
      'Cas aléatoire',
    ],
  },
  alg77: {
    text: "Qu'est-ce que l'analyse compétitive ?",
    correct: "Comparer l'algorithme en ligne avec l'optimum hors ligne",
    wrong: [
      'Comparer deux algorithmes en ligne',
      'Analyse de complexité',
      "Analyse d'espace",
    ],
  },
  alg78: {
    text: "Qu'est-ce qu'un algorithme randomisé ?",
    correct: 'Utilise des décisions aléatoires',
    wrong: [
      'Toujours déterministe',
      "N'utilise jamais l'aléatoire",
      'Seulement pour le tri',
    ],
  },
  alg79: {
    text: "Qu'est-ce que Las Vegas vs Monte Carlo ?",
    correct: 'Toujours correct vs probablement correct',
    wrong: [
      'Les deux toujours corrects',
      'Les deux probablement corrects',
      'Pas de différence',
    ],
  },
  alg80: {
    text: "Qu'est-ce que l'algorithme de sélection rapide ?",
    correct: 'Trouver le k-ième élément en temps espéré O(n)',
    wrong: ['Trier tout le tableau', 'Recherche binaire', 'Trouver le maximum'],
  },
  alg81: {
    text: "Qu'est-ce que le problème de la médiane des médianes ?",
    correct: 'Sélection en temps O(n) garanti',
    wrong: ['Sélection en O(n log n)', 'Tri', 'Recherche'],
  },
  alg82: {
    text: "Qu'est-ce qu'un arbre de suffixes ?",
    correct: "Structure pour tous les suffixes d'une chaîne",
    wrong: ['Arbre binaire', 'Trie simple', 'Graphe'],
  },
  alg83: {
    text: "Qu'est-ce que l'algorithme d'Ukkonen ?",
    correct: 'Construire un arbre de suffixes en temps linéaire',
    wrong: ['Construire en temps quadratique', 'Recherche de motifs', 'Tri'],
  },
  alg84: {
    text: "Qu'est-ce que le tableau de suffixes ?",
    correct: 'Tableau trié des suffixes',
    wrong: ['Tableau de préfixes', 'Arbre de suffixes', 'Table de hachage'],
  },
  alg85: {
    text: "Qu'est-ce que le tableau LCP ?",
    correct: 'Plus long préfixe commun entre suffixes adjacents',
    wrong: [
      'Plus long suffixe commun',
      'Plus longue sous-chaîne',
      'Plus longue sous-séquence',
    ],
  },
  alg86: {
    text: "Qu'est-ce que l'algorithme de Manacher ?",
    correct: 'Trouver tous les palindromes en temps linéaire',
    wrong: [
      'Trouver en temps quadratique',
      'Trier les palindromes',
      'Compter les palindromes',
    ],
  },
  alg87: {
    text: "Qu'est-ce que l'algorithme Z ?",
    correct: 'Calculer le tableau Z pour la correspondance de motifs',
    wrong: ['Tri', 'Recherche binaire', 'Parcours de graphe'],
  },
  alg88: {
    text: "Qu'est-ce que l'algorithme d'Aho-Corasick ?",
    correct: 'Recherche de motifs multiples',
    wrong: ["Recherche d'un motif", 'Tri', 'Parcours de graphe'],
  },
  alg89: {
    text: "Qu'est-ce que la décomposition en racine carrée ?",
    correct: 'Diviser en blocs de taille √n',
    wrong: ['Diviser en moitiés', 'Ne pas diviser', 'Diviser en n parties'],
  },
  alg90: {
    text: "Qu'est-ce que l'algorithme de Mo ?",
    correct: 'Répondre aux requêtes de plage hors ligne',
    wrong: ['Requêtes en ligne', 'Tri', 'Recherche'],
  },
  alg91: {
    text: "Qu'est-ce que la décomposition lourde-légère ?",
    correct: 'Décomposer un arbre en chaînes',
    wrong: [
      'Décomposer en nœuds',
      'Ne pas décomposer',
      'Décomposer en feuilles',
    ],
  },
  alg92: {
    text: "Qu'est-ce que le centroïde d'un arbre ?",
    correct: 'Nœud qui minimise le sous-arbre maximum',
    wrong: ["Racine de l'arbre", "Feuille de l'arbre", 'Nœud aléatoire'],
  },
  alg93: {
    text: "Qu'est-ce que la décomposition par centroïde ?",
    correct: "Diviser l'arbre récursivement par centroïdes",
    wrong: [
      'Diviser par la racine',
      'Ne pas diviser',
      'Diviser par les feuilles',
    ],
  },
  alg94: {
    text: "Qu'est-ce que l'ancêtre commun le plus bas (LCA) ?",
    correct: 'Ancêtre partagé le plus profond',
    wrong: ['Ancêtre le plus haut', 'Descendant commun', 'Frère commun'],
  },
  alg95: {
    text: "Qu'est-ce que le saut binaire pour LCA ?",
    correct: 'Précalculer les ancêtres en puissances de 2',
    wrong: ['Rechercher linéairement', 'Utiliser BFS', 'Utiliser DFS simple'],
  },
  alg96: {
    text: "Qu'est-ce que l'algorithme de Tarjan pour LCA ?",
    correct: 'LCA hors ligne avec Union-Find',
    wrong: ['LCA en ligne', 'Tri', 'Recherche'],
  },
  alg97: {
    text: 'Que sont les composantes fortement connexes ?',
    correct: 'Sous-graphes où chaque paire est atteignable',
    wrong: ['Sous-graphes déconnectés', 'Arbres', 'Cycles simples'],
  },
  alg98: {
    text: "Qu'est-ce que l'algorithme de Kosaraju ?",
    correct: 'Trouver les composantes fortement connexes',
    wrong: [
      'Trouver le plus court chemin',
      'Tri topologique',
      'Arbre couvrant',
    ],
  },
  alg99: {
    text: "Qu'est-ce que l'algorithme de Tarjan pour SCC ?",
    correct: 'SCC en une passe de DFS',
    wrong: ['SCC en deux passes', 'Utilisant BFS', 'Utilisant le tri'],
  },
  alg100: {
    text: "Que sont les points d'articulation ?",
    correct: 'Sommets dont la suppression déconnecte le graphe',
    wrong: ['Sommets qui connectent', 'Arêtes importantes', 'Cycles'],
  },
};

export default algorithms;
