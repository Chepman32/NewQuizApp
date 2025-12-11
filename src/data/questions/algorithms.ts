import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const algorithmsQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'alg1',
    text: 'What is an algorithm?',
    answers: A('alg1', 'Step-by-step procedure to solve a problem', [
      'Programming language',
      'Data structure',
      'Computer hardware',
    ]),
    level: 1,
  },
  {
    id: 'alg2',
    text: 'What is sorting?',
    answers: A('alg2', 'Arranging elements in order', [
      'Searching elements',
      'Deleting elements',
      'Adding elements',
    ]),
    level: 1,
  },
  {
    id: 'alg3',
    text: 'What is searching?',
    answers: A('alg3', 'Finding an element', [
      'Sorting elements',
      'Deleting elements',
      'Adding elements',
    ]),
    level: 1,
  },
  {
    id: 'alg4',
    text: 'What is linear search?',
    answers: A('alg4', 'Checking each element one by one', [
      'Binary search',
      'Hash search',
      'Tree search',
    ]),
    level: 1,
  },
  {
    id: 'alg5',
    text: 'What is the time complexity of linear search?',
    answers: A('alg5', 'O(n)', ['O(1)', 'O(log n)', 'O(n²)']),
    level: 1,
  },
  {
    id: 'alg6',
    text: 'What is binary search?',
    answers: A('alg6', 'Dividing sorted array in half', [
      'Linear search',
      'Hash search',
      'Tree search',
    ]),
    level: 1,
  },
  {
    id: 'alg7',
    text: 'What is the time complexity of binary search?',
    answers: A('alg7', 'O(log n)', ['O(n)', 'O(1)', 'O(n²)']),
    level: 1,
  },
  {
    id: 'alg8',
    text: 'What is required for binary search?',
    answers: A('alg8', 'Sorted array', [
      'Unsorted array',
      'Linked list',
      'Tree',
    ]),
    level: 1,
  },
  {
    id: 'alg9',
    text: 'What is bubble sort?',
    answers: A('alg9', 'Repeatedly swapping adjacent elements', [
      'Dividing and conquering',
      'Using heap',
      'Using pivot',
    ]),
    level: 1,
  },
  {
    id: 'alg10',
    text: 'What is the time complexity of bubble sort?',
    answers: A('alg10', 'O(n²)', ['O(n)', 'O(log n)', 'O(n log n)']),
    level: 1,
  },
  {
    id: 'alg11',
    text: 'What is selection sort?',
    answers: A('alg11', 'Finding minimum and placing at beginning', [
      'Swapping adjacent',
      'Dividing array',
      'Using heap',
    ]),
    level: 2,
  },
  {
    id: 'alg12',
    text: 'What is insertion sort?',
    answers: A('alg12', 'Inserting elements into sorted portion', [
      'Swapping adjacent',
      'Finding minimum',
      'Using pivot',
    ]),
    level: 2,
  },
  {
    id: 'alg13',
    text: 'What is the best case for insertion sort?',
    answers: A('alg13', 'O(n) - already sorted', [
      'O(n²)',
      'O(log n)',
      'O(n log n)',
    ]),
    level: 2,
  },
  {
    id: 'alg14',
    text: 'What is merge sort?',
    answers: A('alg14', 'Divide, sort, and merge', [
      'Swap adjacent',
      'Find minimum',
      'Use pivot',
    ]),
    level: 2,
  },
  {
    id: 'alg15',
    text: 'What is the time complexity of merge sort?',
    answers: A('alg15', 'O(n log n)', ['O(n²)', 'O(n)', 'O(log n)']),
    level: 2,
  },
  {
    id: 'alg16',
    text: 'What is quick sort?',
    answers: A('alg16', 'Partition around pivot', [
      'Divide and merge',
      'Swap adjacent',
      'Find minimum',
    ]),
    level: 2,
  },
  {
    id: 'alg17',
    text: 'What is the average time complexity of quick sort?',
    answers: A('alg17', 'O(n log n)', ['O(n²)', 'O(n)', 'O(log n)']),
    level: 2,
  },
  {
    id: 'alg18',
    text: 'What is the worst case for quick sort?',
    answers: A('alg18', 'O(n²) - already sorted with bad pivot', [
      'O(n log n)',
      'O(n)',
      'O(log n)',
    ]),
    level: 2,
  },
  {
    id: 'alg19',
    text: 'What is heap sort?',
    answers: A('alg19', 'Using heap data structure', [
      'Using pivot',
      'Merging',
      'Swapping adjacent',
    ]),
    level: 2,
  },
  {
    id: 'alg20',
    text: 'What is the time complexity of heap sort?',
    answers: A('alg20', 'O(n log n)', ['O(n²)', 'O(n)', 'O(log n)']),
    level: 2,
  },
  {
    id: 'alg21',
    text: 'What is a stable sorting algorithm?',
    answers: A('alg21', 'Preserves order of equal elements', [
      'Fastest algorithm',
      'Uses least memory',
      'In-place algorithm',
    ]),
    level: 2,
  },
  {
    id: 'alg22',
    text: 'Is merge sort stable?',
    answers: A('alg22', 'Yes', [
      'No',
      'Sometimes',
      'Depends on implementation',
    ]),
    level: 2,
  },
  {
    id: 'alg23',
    text: 'Is quick sort stable?',
    answers: A('alg23', 'No (typically)', ['Yes', 'Always', 'Never']),
    level: 2,
  },
  {
    id: 'alg24',
    text: 'What is in-place sorting?',
    answers: A('alg24', 'Sorting with O(1) extra space', [
      'Sorting with O(n) space',
      'Stable sorting',
      'Fast sorting',
    ]),
    level: 2,
  },
  {
    id: 'alg25',
    text: 'Is merge sort in-place?',
    answers: A('alg25', 'No - needs O(n) extra space', [
      'Yes',
      'Sometimes',
      'Depends',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'alg26',
    text: 'What is counting sort?',
    answers: A('alg26', 'Counting occurrences of each element', [
      'Comparison-based sort',
      'Divide and conquer',
      'Using heap',
    ]),
    level: 3,
  },
  {
    id: 'alg27',
    text: 'What is the time complexity of counting sort?',
    answers: A('alg27', 'O(n + k) where k is range', [
      'O(n log n)',
      'O(n²)',
      'O(log n)',
    ]),
    level: 3,
  },
  {
    id: 'alg28',
    text: 'What is radix sort?',
    answers: A('alg28', 'Sorting by digits', [
      'Comparison-based sort',
      'Divide and conquer',
      'Using heap',
    ]),
    level: 3,
  },
  {
    id: 'alg29',
    text: 'What is bucket sort?',
    answers: A('alg29', 'Distributing elements into buckets', [
      'Comparison-based sort',
      'Divide and conquer',
      'Using heap',
    ]),
    level: 3,
  },
  {
    id: 'alg30',
    text: 'What is the lower bound for comparison-based sorting?',
    answers: A('alg30', 'O(n log n)', ['O(n)', 'O(n²)', 'O(log n)']),
    level: 3,
  },
  {
    id: 'alg31',
    text: 'What is depth-first search (DFS)?',
    answers: A('alg31', 'Exploring as far as possible before backtracking', [
      'Exploring level by level',
      'Random exploration',
      'Shortest path',
    ]),
    level: 3,
  },
  {
    id: 'alg32',
    text: 'What is breadth-first search (BFS)?',
    answers: A('alg32', 'Exploring level by level', [
      'Exploring depth first',
      'Random exploration',
      'Longest path',
    ]),
    level: 3,
  },
  {
    id: 'alg33',
    text: 'What data structure does DFS typically use?',
    answers: A('alg33', 'Stack', ['Queue', 'Heap', 'Array']),
    level: 3,
  },
  {
    id: 'alg34',
    text: 'What data structure does BFS typically use?',
    answers: A('alg34', 'Queue', ['Stack', 'Heap', 'Array']),
    level: 3,
  },
  {
    id: 'alg35',
    text: "What is Dijkstra's algorithm for?",
    answers: A('alg35', 'Shortest path in weighted graph', [
      'Minimum spanning tree',
      'Topological sort',
      'Cycle detection',
    ]),
    level: 4,
  },
  {
    id: 'alg36',
    text: 'What is the time complexity of Dijkstra with binary heap?',
    answers: A('alg36', 'O((V + E) log V)', [
      'O(V²)',
      'O(E log V)',
      'O(V + E)',
    ]),
    level: 4,
  },
  {
    id: 'alg37',
    text: 'Can Dijkstra handle negative weights?',
    answers: A('alg37', 'No', ['Yes', 'Sometimes', 'Only with modification']),
    level: 4,
  },
  {
    id: 'alg38',
    text: 'What is Bellman-Ford algorithm for?',
    answers: A('alg38', 'Shortest path with negative weights', [
      'Only positive weights',
      'Minimum spanning tree',
      'Topological sort',
    ]),
    level: 4,
  },
  {
    id: 'alg39',
    text: 'What is the time complexity of Bellman-Ford?',
    answers: A('alg39', 'O(VE)', ['O(V²)', 'O(E log V)', 'O(V + E)']),
    level: 4,
  },
  {
    id: 'alg40',
    text: 'What is Floyd-Warshall algorithm for?',
    answers: A('alg40', 'All-pairs shortest paths', [
      'Single-source shortest path',
      'Minimum spanning tree',
      'Topological sort',
    ]),
    level: 4,
  },
  {
    id: 'alg41',
    text: 'What is the time complexity of Floyd-Warshall?',
    answers: A('alg41', 'O(V³)', ['O(V²)', 'O(VE)', 'O(V + E)']),
    level: 4,
  },
  {
    id: 'alg42',
    text: "What is Prim's algorithm for?",
    answers: A('alg42', 'Minimum spanning tree', [
      'Shortest path',
      'Topological sort',
      'Cycle detection',
    ]),
    level: 4,
  },
  {
    id: 'alg43',
    text: "What is Kruskal's algorithm for?",
    answers: A('alg43', 'Minimum spanning tree', [
      'Shortest path',
      'Topological sort',
      'Cycle detection',
    ]),
    level: 4,
  },
  {
    id: 'alg44',
    text: "What data structure does Kruskal's use?",
    answers: A('alg44', 'Union-Find/Disjoint Set', ['Heap', 'Stack', 'Queue']),
    level: 4,
  },
  {
    id: 'alg45',
    text: 'What is topological sort?',
    answers: A('alg45', 'Linear ordering of DAG vertices', [
      'Sorting numbers',
      'Shortest path',
      'Cycle detection',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'alg46',
    text: 'What is dynamic programming?',
    answers: A('alg46', 'Solving by breaking into overlapping subproblems', [
      'Divide and conquer',
      'Greedy approach',
      'Brute force',
    ]),
    level: 5,
  },
  {
    id: 'alg47',
    text: 'What is memoization?',
    answers: A('alg47', 'Caching results of subproblems', [
      'Sorting',
      'Searching',
      'Hashing',
    ]),
    level: 5,
  },
  {
    id: 'alg48',
    text: 'What is the difference between memoization and tabulation?',
    answers: A('alg48', 'Top-down vs bottom-up', [
      'Same thing',
      'Different problems',
      'Different languages',
    ]),
    level: 5,
  },
  {
    id: 'alg49',
    text: 'What is the knapsack problem?',
    answers: A('alg49', 'Maximizing value with weight constraint', [
      'Shortest path',
      'Minimum spanning tree',
      'Sorting',
    ]),
    level: 5,
  },
  {
    id: 'alg50',
    text: 'What is the longest common subsequence problem?',
    answers: A('alg50', 'Finding longest subsequence in two sequences', [
      'Shortest path',
      'Sorting',
      'Searching',
    ]),
    level: 5,
  },
  {
    id: 'alg51',
    text: 'What is the edit distance problem?',
    answers: A(
      'alg51',
      'Minimum operations to transform one string to another',
      ['String matching', 'Sorting strings', 'Hashing strings'],
    ),
    level: 6,
  },
  {
    id: 'alg52',
    text: 'What is the traveling salesman problem?',
    answers: A('alg52', 'Shortest route visiting all cities', [
      'Shortest path between two cities',
      'Minimum spanning tree',
      'Maximum flow',
    ]),
    level: 6,
  },
  {
    id: 'alg53',
    text: 'Is TSP NP-hard?',
    answers: A('alg53', 'Yes', ['No', 'Unknown', 'Depends']),
    level: 6,
  },
  {
    id: 'alg54',
    text: 'What is the maximum flow problem?',
    answers: A('alg54', 'Maximum flow through network', [
      'Shortest path',
      'Minimum spanning tree',
      'Topological sort',
    ]),
    level: 6,
  },
  {
    id: 'alg55',
    text: 'What is the Ford-Fulkerson algorithm?',
    answers: A('alg55', 'Finding maximum flow', [
      'Shortest path',
      'Minimum spanning tree',
      'Sorting',
    ]),
    level: 6,
  },
  {
    id: 'alg56',
    text: 'What is the A* algorithm?',
    answers: A('alg56', 'Heuristic-guided shortest path', [
      'Uninformed search',
      'Brute force',
      'Random search',
    ]),
    level: 7,
  },
  {
    id: 'alg57',
    text: 'What makes A* optimal?',
    answers: A('alg57', 'Admissible heuristic', [
      'Any heuristic',
      'No heuristic',
      'Overestimating heuristic',
    ]),
    level: 7,
  },
  {
    id: 'alg58',
    text: 'What is an admissible heuristic?',
    answers: A('alg58', 'Never overestimates cost', [
      'Always overestimates',
      'Exact cost',
      'Random cost',
    ]),
    level: 7,
  },
  {
    id: 'alg59',
    text: 'What is the KMP algorithm?',
    answers: A('alg59', 'String matching with failure function', [
      'Sorting',
      'Searching in array',
      'Graph traversal',
    ]),
    level: 7,
  },
  {
    id: 'alg60',
    text: 'What is the time complexity of KMP?',
    answers: A('alg60', 'O(n + m)', ['O(nm)', 'O(n²)', 'O(n log n)']),
    level: 7,
  },
  {
    id: 'alg61',
    text: 'What is the Rabin-Karp algorithm?',
    answers: A('alg61', 'String matching with hashing', [
      'Sorting',
      'Graph traversal',
      'Tree traversal',
    ]),
    level: 8,
  },
  {
    id: 'alg62',
    text: 'What is the suffix array?',
    answers: A('alg62', 'Sorted array of all suffixes', [
      'Array of prefixes',
      'Hash table',
      'Binary tree',
    ]),
    level: 8,
  },
  {
    id: 'alg63',
    text: 'What is the suffix tree?',
    answers: A('alg63', 'Compressed trie of all suffixes', [
      'Binary search tree',
      'Heap',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'alg64',
    text: 'What is the Aho-Corasick algorithm?',
    answers: A('alg64', 'Multiple pattern string matching', [
      'Single pattern matching',
      'Sorting',
      'Graph traversal',
    ]),
    level: 8,
  },
  {
    id: 'alg65',
    text: 'What is the FFT algorithm?',
    answers: A(
      'alg65',
      'Fast Fourier Transform - O(n log n) polynomial multiplication',
      ['Sorting', 'Searching', 'Graph algorithm'],
    ),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'alg66',
    text: 'What is an algorithm?',
    answers: A('alg66', 'Step-by-step instructions to solve a problem', [
      'Random actions',
      'Single step',
      'No instructions',
    ]),
    level: 1,
  },
  {
    id: 'alg67',
    text: 'What is sorting?',
    answers: A('alg67', 'Arranging items in order', [
      'Random arrangement',
      'Removing items',
      'Adding items',
    ]),
    level: 1,
  },
  {
    id: 'alg68',
    text: 'What is searching?',
    answers: A('alg68', 'Finding an item in a collection', [
      'Adding items',
      'Removing items',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'alg69',
    text: 'What is a loop?',
    answers: A('alg69', 'Repeating instructions', [
      'Single instruction',
      'No instruction',
      'Random instruction',
    ]),
    level: 1,
  },
  {
    id: 'alg70',
    text: 'What is a condition?',
    answers: A('alg70', 'Decision point in algorithm', [
      'Loop',
      'Variable',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'alg71',
    text: 'What is input?',
    answers: A('alg71', 'Data given to algorithm', [
      'Data produced',
      'Data stored',
      'Data deleted',
    ]),
    level: 1,
  },
  {
    id: 'alg72',
    text: 'What is output?',
    answers: A('alg72', 'Result produced by algorithm', [
      'Data given',
      'Data stored',
      'Data deleted',
    ]),
    level: 1,
  },
  {
    id: 'alg73',
    text: 'What is a variable?',
    answers: A('alg73', 'Named storage for data', [
      'Unnamed storage',
      'No storage',
      'Random storage',
    ]),
    level: 1,
  },
  {
    id: 'alg74',
    text: 'What is counting?',
    answers: A('alg74', 'Keeping track of number of items', [
      'Random numbers',
      'No numbers',
      'Negative numbers',
    ]),
    level: 1,
  },
  {
    id: 'alg75',
    text: 'What is comparing?',
    answers: A('alg75', 'Checking if values are equal or different', [
      'Adding values',
      'Removing values',
      'Storing values',
    ]),
    level: 1,
  },
  {
    id: 'alg76',
    text: 'What is linear search?',
    answers: A('alg76', 'Checking each item one by one', [
      'Checking half at a time',
      'Random checking',
      'No checking',
    ]),
    level: 2,
  },
  {
    id: 'alg77',
    text: 'What is binary search?',
    answers: A('alg77', 'Dividing search space in half', [
      'Checking one by one',
      'Random checking',
      'No checking',
    ]),
    level: 2,
  },
  {
    id: 'alg78',
    text: 'What is bubble sort?',
    answers: A('alg78', 'Swapping adjacent elements', [
      'Dividing and conquering',
      'Random swapping',
      'No swapping',
    ]),
    level: 2,
  },
  {
    id: 'alg79',
    text: 'What is selection sort?',
    answers: A('alg79', 'Finding minimum and placing it', [
      'Swapping adjacent',
      'Random placement',
      'No placement',
    ]),
    level: 2,
  },
  {
    id: 'alg80',
    text: 'What is insertion sort?',
    answers: A('alg80', 'Inserting elements in sorted position', [
      'Swapping adjacent',
      'Random insertion',
      'No insertion',
    ]),
    level: 2,
  },
  {
    id: 'alg81',
    text: 'What is recursion?',
    answers: A('alg81', 'Function calling itself', [
      'Function calling others',
      'No function calls',
      'Random calls',
    ]),
    level: 2,
  },
  {
    id: 'alg82',
    text: 'What is iteration?',
    answers: A('alg82', 'Repeating with loops', [
      'Repeating with recursion',
      'No repeating',
      'Random repeating',
    ]),
    level: 2,
  },
  {
    id: 'alg83',
    text: 'What is a base case?',
    answers: A('alg83', 'Stopping condition for recursion', [
      'Starting condition',
      'No condition',
      'Random condition',
    ]),
    level: 2,
  },
  {
    id: 'alg84',
    text: 'What is time complexity?',
    answers: A('alg84', 'How runtime grows with input size', [
      'How memory grows',
      'How code grows',
      'How output grows',
    ]),
    level: 2,
  },
  {
    id: 'alg85',
    text: 'What is space complexity?',
    answers: A('alg85', 'How memory grows with input size', [
      'How runtime grows',
      'How code grows',
      'How output grows',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'alg86',
    text: 'What is O(1)?',
    answers: A('alg86', 'Constant time complexity', [
      'Linear time',
      'Quadratic time',
      'Logarithmic time',
    ]),
    level: 3,
  },
  {
    id: 'alg87',
    text: 'What is O(n)?',
    answers: A('alg87', 'Linear time complexity', [
      'Constant time',
      'Quadratic time',
      'Logarithmic time',
    ]),
    level: 3,
  },
  {
    id: 'alg88',
    text: 'What is O(n^2)?',
    answers: A('alg88', 'Quadratic time complexity', [
      'Linear time',
      'Constant time',
      'Logarithmic time',
    ]),
    level: 3,
  },
  {
    id: 'alg89',
    text: 'What is O(log n)?',
    answers: A('alg89', 'Logarithmic time complexity', [
      'Linear time',
      'Quadratic time',
      'Constant time',
    ]),
    level: 3,
  },
  {
    id: 'alg90',
    text: 'What is O(n log n)?',
    answers: A('alg90', 'Linearithmic time complexity', [
      'Linear time',
      'Quadratic time',
      'Constant time',
    ]),
    level: 3,
  },
  {
    id: 'alg91',
    text: 'What is merge sort?',
    answers: A('alg91', 'Divide and conquer sorting', [
      'Bubble sorting',
      'Selection sorting',
      'Insertion sorting',
    ]),
    level: 3,
  },
  {
    id: 'alg92',
    text: 'What is quick sort?',
    answers: A('alg92', 'Partition-based sorting', [
      'Merge-based sorting',
      'Bubble sorting',
      'Selection sorting',
    ]),
    level: 3,
  },
  {
    id: 'alg93',
    text: 'What is a pivot?',
    answers: A('alg93', 'Element used for partitioning', [
      'First element always',
      'Last element always',
      'Random element',
    ]),
    level: 3,
  },
  {
    id: 'alg94',
    text: 'What is divide and conquer?',
    answers: A('alg94', 'Breaking problem into smaller parts', [
      'Solving all at once',
      'Random solving',
      'No solving',
    ]),
    level: 3,
  },
  {
    id: 'alg95',
    text: 'What is greedy algorithm?',
    answers: A('alg95', 'Making locally optimal choices', [
      'Making globally optimal',
      'Random choices',
      'No choices',
    ]),
    level: 3,
  },
  {
    id: 'alg96',
    text: 'What is dynamic programming?',
    answers: A('alg96', 'Solving by storing subproblem results', [
      'Solving without storage',
      'Random solving',
      'No solving',
    ]),
    level: 4,
  },
  {
    id: 'alg97',
    text: 'What is memoization?',
    answers: A('alg97', 'Caching function results', [
      'Deleting results',
      'Random results',
      'No results',
    ]),
    level: 4,
  },
  {
    id: 'alg98',
    text: 'What is tabulation?',
    answers: A('alg98', 'Bottom-up dynamic programming', [
      'Top-down approach',
      'Random approach',
      'No approach',
    ]),
    level: 4,
  },
  {
    id: 'alg99',
    text: 'What is BFS?',
    answers: A('alg99', 'Breadth-First Search', [
      'Depth-First Search',
      'Random Search',
      'No Search',
    ]),
    level: 4,
  },
  {
    id: 'alg100',
    text: 'What is DFS?',
    answers: A('alg100', 'Depth-First Search', [
      'Breadth-First Search',
      'Random Search',
      'No Search',
    ]),
    level: 4,
  },
  {
    id: 'alg101',
    text: 'What is Dijkstra algorithm?',
    answers: A('alg101', 'Shortest path algorithm', [
      'Longest path',
      'Random path',
      'No path',
    ]),
    level: 4,
  },
  {
    id: 'alg102',
    text: 'What is a spanning tree?',
    answers: A('alg102', 'Tree connecting all vertices', [
      'Tree with some vertices',
      'No tree',
      'Random tree',
    ]),
    level: 4,
  },
  {
    id: 'alg103',
    text: 'What is Prim algorithm?',
    answers: A('alg103', 'Minimum spanning tree algorithm', [
      'Maximum spanning tree',
      'Random tree',
      'No tree',
    ]),
    level: 4,
  },
  {
    id: 'alg104',
    text: 'What is Kruskal algorithm?',
    answers: A('alg104', 'Minimum spanning tree using edges', [
      'Maximum spanning tree',
      'Random tree',
      'No tree',
    ]),
    level: 4,
  },
  {
    id: 'alg105',
    text: 'What is topological sort?',
    answers: A('alg105', 'Ordering of directed acyclic graph', [
      'Ordering of cyclic graph',
      'Random ordering',
      'No ordering',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'alg106',
    text: 'What is the Bellman-Ford algorithm?',
    answers: A('alg106', 'Shortest path with negative weights', [
      'Only positive weights',
      'No weights',
      'Random weights',
    ]),
    level: 5,
  },
  {
    id: 'alg107',
    text: 'What is Floyd-Warshall algorithm?',
    answers: A('alg107', 'All pairs shortest paths', [
      'Single source shortest',
      'No paths',
      'Random paths',
    ]),
    level: 5,
  },
  {
    id: 'alg108',
    text: 'What is A* algorithm?',
    answers: A('alg108', 'Heuristic pathfinding', [
      'Non-heuristic pathfinding',
      'Random pathfinding',
      'No pathfinding',
    ]),
    level: 5,
  },
  {
    id: 'alg109',
    text: 'What is the knapsack problem?',
    answers: A('alg109', 'Optimization with weight constraint', [
      'No constraint',
      'Random constraint',
      'No problem',
    ]),
    level: 5,
  },
  {
    id: 'alg110',
    text: 'What is the traveling salesman problem?',
    answers: A('alg110', 'Finding shortest route visiting all cities', [
      'Longest route',
      'Random route',
      'No route',
    ]),
    level: 5,
  },
  {
    id: 'alg111',
    text: 'What is NP-complete?',
    answers: A('alg111', 'Problems verifiable but not quickly solvable', [
      'Quickly solvable',
      'Not verifiable',
      'No problems',
    ]),
    level: 6,
  },
  {
    id: 'alg112',
    text: 'What is P vs NP?',
    answers: A('alg112', 'Question if P equals NP', [
      'Proven equal',
      'Proven not equal',
      'No question',
    ]),
    level: 6,
  },
  {
    id: 'alg113',
    text: 'What is amortized analysis?',
    answers: A('alg113', 'Average time over sequence of operations', [
      'Worst case only',
      'Best case only',
      'No analysis',
    ]),
    level: 6,
  },
  {
    id: 'alg114',
    text: 'What is the master theorem?',
    answers: A('alg114', 'Solving divide and conquer recurrences', [
      'Solving iterative',
      'No solving',
      'Random solving',
    ]),
    level: 6,
  },
  {
    id: 'alg115',
    text: 'What is randomized algorithm?',
    answers: A('alg115', 'Algorithm using random choices', [
      'Deterministic algorithm',
      'No algorithm',
      'Fixed algorithm',
    ]),
    level: 6,
  },
  {
    id: 'alg116',
    text: 'What is the union-find algorithm?',
    answers: A('alg116', 'Disjoint set data structure operations', [
      'Sorting',
      'Searching',
      'Hashing',
    ]),
    level: 7,
  },
  {
    id: 'alg117',
    text: 'What is path compression?',
    answers: A('alg117', 'Optimization for union-find', [
      'Optimization for sorting',
      'No optimization',
      'Random optimization',
    ]),
    level: 7,
  },
  {
    id: 'alg118',
    text: 'What is the KMP algorithm?',
    answers: A('alg118', 'String matching algorithm', [
      'Sorting algorithm',
      'Graph algorithm',
      'Number algorithm',
    ]),
    level: 7,
  },
  {
    id: 'alg119',
    text: 'What is the Rabin-Karp algorithm?',
    answers: A('alg119', 'Hash-based string matching', [
      'Non-hash matching',
      'Sorting',
      'Graphing',
    ]),
    level: 7,
  },
  {
    id: 'alg120',
    text: 'What is suffix array?',
    answers: A('alg120', 'Sorted array of all suffixes', [
      'Sorted prefixes',
      'Random array',
      'No array',
    ]),
    level: 7,
  },
  {
    id: 'alg121',
    text: 'What is the Aho-Corasick algorithm?',
    answers: A('alg121', 'Multiple pattern string matching', [
      'Single pattern',
      'No pattern',
      'Random pattern',
    ]),
    level: 8,
  },
  {
    id: 'alg122',
    text: 'What is the Z-algorithm?',
    answers: A('alg122', 'Linear time string matching', [
      'Quadratic time',
      'Exponential time',
      'No time',
    ]),
    level: 8,
  },
  {
    id: 'alg123',
    text: 'What is the Manacher algorithm?',
    answers: A('alg123', 'Finding longest palindromic substring', [
      'Finding shortest',
      'Random finding',
      'No finding',
    ]),
    level: 8,
  },
  {
    id: 'alg124',
    text: 'What is segment tree?',
    answers: A('alg124', 'Tree for range queries', [
      'Tree for single queries',
      'No tree',
      'Random tree',
    ]),
    level: 8,
  },
  {
    id: 'alg125',
    text: 'What is Fenwick tree?',
    answers: A('alg125', 'Binary indexed tree for prefix sums', [
      'Suffix sums',
      'No sums',
      'Random sums',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'alg126',
    text: 'What is an algorithm?',
    answers: A('alg126', 'Step-by-step instructions', [
      'Random actions',
      'Single action',
      'No actions',
    ]),
    level: 1,
  },
  {
    id: 'alg127',
    text: 'What is a step in an algorithm?',
    answers: A('alg127', 'Single instruction', [
      'Multiple instructions',
      'No instruction',
      'Random instruction',
    ]),
    level: 1,
  },
  {
    id: 'alg128',
    text: 'What is input?',
    answers: A('alg128', 'Data given to algorithm', [
      'Data produced',
      'No data',
      'Random data',
    ]),
    level: 1,
  },
  {
    id: 'alg129',
    text: 'What is output?',
    answers: A('alg129', 'Result produced by algorithm', [
      'Data given',
      'No result',
      'Random result',
    ]),
    level: 1,
  },
  {
    id: 'alg130',
    text: 'What is a loop?',
    answers: A('alg130', 'Repeating instructions', [
      'Single instruction',
      'No instruction',
      'Random instruction',
    ]),
    level: 1,
  },
  {
    id: 'alg131',
    text: 'What is a condition?',
    answers: A('alg131', 'Test that is true or false', [
      'Always true',
      'Always false',
      'No test',
    ]),
    level: 1,
  },
  {
    id: 'alg132',
    text: 'What is an if statement?',
    answers: A('alg132', 'Conditional execution', [
      'Always execute',
      'Never execute',
      'Random execute',
    ]),
    level: 1,
  },
  {
    id: 'alg133',
    text: 'What is sorting?',
    answers: A('alg133', 'Arranging items in order', [
      'Random arrangement',
      'No arrangement',
      'Removing items',
    ]),
    level: 1,
  },
  {
    id: 'alg134',
    text: 'What is searching?',
    answers: A('alg134', 'Finding a specific item', [
      'Adding items',
      'Removing items',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'alg135',
    text: 'What is counting?',
    answers: A('alg135', 'Determining number of items', [
      'Adding items',
      'Removing items',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'alg136',
    text: 'What is comparing?',
    answers: A('alg136', 'Checking if items are equal or different', [
      'Adding items',
      'Removing items',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'alg137',
    text: 'What is swapping?',
    answers: A('alg137', 'Exchanging positions of two items', [
      'Adding items',
      'Removing items',
      'Copying items',
    ]),
    level: 1,
  },
  {
    id: 'alg138',
    text: 'What is copying?',
    answers: A('alg138', 'Making duplicate of item', [
      'Removing item',
      'Swapping items',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'alg139',
    text: 'What is a minimum?',
    answers: A('alg139', 'Smallest value', [
      'Largest value',
      'Average value',
      'Random value',
    ]),
    level: 1,
  },
  {
    id: 'alg140',
    text: 'What is a maximum?',
    answers: A('alg140', 'Largest value', [
      'Smallest value',
      'Average value',
      'Random value',
    ]),
    level: 1,
  },
  {
    id: 'alg141',
    text: 'What is an average?',
    answers: A('alg141', 'Sum divided by count', [
      'Maximum',
      'Minimum',
      'Random',
    ]),
    level: 1,
  },
  {
    id: 'alg142',
    text: 'What is a sum?',
    answers: A('alg142', 'Total of all values', [
      'Single value',
      'Average',
      'Maximum',
    ]),
    level: 1,
  },
  {
    id: 'alg143',
    text: 'What is incrementing?',
    answers: A('alg143', 'Adding one to value', [
      'Subtracting one',
      'Multiplying',
      'Dividing',
    ]),
    level: 1,
  },
  {
    id: 'alg144',
    text: 'What is decrementing?',
    answers: A('alg144', 'Subtracting one from value', [
      'Adding one',
      'Multiplying',
      'Dividing',
    ]),
    level: 1,
  },
  {
    id: 'alg145',
    text: 'What is a counter?',
    answers: A('alg145', 'Variable that counts', [
      'Variable that stores text',
      'Constant',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'alg146',
    text: 'What is a flag?',
    answers: A('alg146', 'Boolean variable for status', [
      'Number variable',
      'Text variable',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'alg147',
    text: 'What is initialization?',
    answers: A('alg147', 'Setting starting value', [
      'Ending value',
      'No value',
      'Random value',
    ]),
    level: 1,
  },
  {
    id: 'alg148',
    text: 'What is termination?',
    answers: A('alg148', 'Ending the algorithm', [
      'Starting',
      'Continuing',
      'Looping',
    ]),
    level: 1,
  },
  {
    id: 'alg149',
    text: 'What is iteration?',
    answers: A('alg149', 'One pass through loop', [
      'No loop',
      'End of loop',
      'Start of loop',
    ]),
    level: 1,
  },
  {
    id: 'alg150',
    text: 'What is a sequence?',
    answers: A('alg150', 'Ordered list of steps', [
      'Unordered steps',
      'Single step',
      'No steps',
    ]),
    level: 1,
  },
  {
    id: 'alg151',
    text: 'What is linear search?',
    answers: A('alg151', 'Checking each item one by one', [
      'Jumping to middle',
      'Random checking',
      'No checking',
    ]),
    level: 1,
  },
  {
    id: 'alg152',
    text: 'What is the simplest sorting method?',
    answers: A('alg152', 'Bubble sort', [
      'Quick sort',
      'Merge sort',
      'Heap sort',
    ]),
    level: 1,
  },
  {
    id: 'alg153',
    text: 'What does bubble sort do?',
    answers: A('alg153', 'Swaps adjacent elements', [
      'Divides array',
      'Uses heap',
      'Random swaps',
    ]),
    level: 1,
  },
  {
    id: 'alg154',
    text: 'What is ascending order?',
    answers: A('alg154', 'Smallest to largest', [
      'Largest to smallest',
      'Random order',
      'No order',
    ]),
    level: 1,
  },
  {
    id: 'alg155',
    text: 'What is descending order?',
    answers: A('alg155', 'Largest to smallest', [
      'Smallest to largest',
      'Random order',
      'No order',
    ]),
    level: 1,
  },
  {
    id: 'alg156',
    text: 'What is a sorted array?',
    answers: A('alg156', 'Array in order', [
      'Random array',
      'Empty array',
      'Single element',
    ]),
    level: 1,
  },
  {
    id: 'alg157',
    text: 'What is an unsorted array?',
    answers: A('alg157', 'Array not in order', [
      'Sorted array',
      'Empty array',
      'Single element',
    ]),
    level: 1,
  },
  {
    id: 'alg158',
    text: 'What is finding?',
    answers: A('alg158', 'Locating specific item', [
      'Adding item',
      'Removing item',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'alg159',
    text: 'What is a match?',
    answers: A('alg159', 'Item that equals search target', [
      'Different item',
      'No item',
      'Random item',
    ]),
    level: 1,
  },
  {
    id: 'alg160',
    text: 'What is not found?',
    answers: A('alg160', 'Item does not exist', [
      'Item exists',
      'Item is first',
      'Item is last',
    ]),
    level: 1,
  },
  {
    id: 'alg161',
    text: 'What is the first element?',
    answers: A('alg161', 'Element at index 0', [
      'Last element',
      'Middle element',
      'Random element',
    ]),
    level: 1,
  },
  {
    id: 'alg162',
    text: 'What is the last element?',
    answers: A('alg162', 'Element at highest index', [
      'First element',
      'Middle element',
      'Random element',
    ]),
    level: 1,
  },
  {
    id: 'alg163',
    text: 'What is the middle element?',
    answers: A('alg163', 'Element at center position', [
      'First element',
      'Last element',
      'Random element',
    ]),
    level: 1,
  },
  {
    id: 'alg164',
    text: 'What is a pass in sorting?',
    answers: A('alg164', 'One complete scan of data', [
      'Single comparison',
      'Final result',
      'No scan',
    ]),
    level: 1,
  },
  {
    id: 'alg165',
    text: 'What is efficiency?',
    answers: A('alg165', 'How well algorithm uses resources', [
      'How slow it is',
      'How much memory',
      'How complex',
    ]),
    level: 1,
  },
  {
    id: 'alg166',
    text: 'What is a fast algorithm?',
    answers: A('alg166', 'Algorithm that finishes quickly', [
      'Slow algorithm',
      'No algorithm',
      'Random algorithm',
    ]),
    level: 1,
  },
  {
    id: 'alg167',
    text: 'What is a slow algorithm?',
    answers: A('alg167', 'Algorithm that takes long time', [
      'Fast algorithm',
      'No algorithm',
      'Random algorithm',
    ]),
    level: 1,
  },
  {
    id: 'alg168',
    text: 'What is correctness?',
    answers: A('alg168', 'Algorithm gives right answer', [
      'Wrong answer',
      'No answer',
      'Random answer',
    ]),
    level: 1,
  },
  {
    id: 'alg169',
    text: 'What is a bug?',
    answers: A('alg169', 'Error in algorithm', [
      'Correct code',
      'Feature',
      'Improvement',
    ]),
    level: 1,
  },
  {
    id: 'alg170',
    text: 'What is debugging?',
    answers: A('alg170', 'Finding and fixing errors', [
      'Adding errors',
      'Ignoring errors',
      'Creating errors',
    ]),
    level: 1,
  },
  {
    id: 'alg171',
    text: 'What is testing?',
    answers: A('alg171', 'Checking if algorithm works', [
      'Writing algorithm',
      'Deleting algorithm',
      'Ignoring algorithm',
    ]),
    level: 1,
  },
  {
    id: 'alg172',
    text: 'What is a test case?',
    answers: A('alg172', 'Input to verify algorithm', [
      'Output only',
      'No input',
      'Random data',
    ]),
    level: 1,
  },
  {
    id: 'alg173',
    text: 'What is expected output?',
    answers: A('alg173', 'Correct result for test', [
      'Wrong result',
      'No result',
      'Random result',
    ]),
    level: 1,
  },
  {
    id: 'alg174',
    text: 'What is actual output?',
    answers: A('alg174', 'Result algorithm produces', [
      'Expected result',
      'No result',
      'Input',
    ]),
    level: 1,
  },
  {
    id: 'alg175',
    text: 'What is a function?',
    answers: A('alg175', 'Reusable block of code', [
      'Single line',
      'Variable',
      'Constant',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'alg176',
    text: 'What is binary search?',
    answers: A('alg176', 'Search by dividing in half', [
      'Linear search',
      'Random search',
      'No search',
    ]),
    level: 2,
  },
  {
    id: 'alg177',
    text: 'What is required for binary search?',
    answers: A('alg177', 'Sorted array', [
      'Unsorted array',
      'Empty array',
      'Any array',
    ]),
    level: 2,
  },
  {
    id: 'alg178',
    text: 'What is selection sort?',
    answers: A('alg178', 'Find minimum and swap to front', [
      'Swap adjacent',
      'Divide and conquer',
      'Random swap',
    ]),
    level: 2,
  },
  {
    id: 'alg179',
    text: 'What is insertion sort?',
    answers: A('alg179', 'Insert each element in correct position', [
      'Swap adjacent',
      'Find minimum',
      'Divide array',
    ]),
    level: 2,
  },
  {
    id: 'alg180',
    text: 'What is merge sort?',
    answers: A('alg180', 'Divide, sort, and merge', [
      'Swap adjacent',
      'Find minimum',
      'Random sort',
    ]),
    level: 2,
  },
  {
    id: 'alg181',
    text: 'What is quick sort?',
    answers: A('alg181', 'Partition around pivot', [
      'Merge halves',
      'Swap adjacent',
      'Find minimum',
    ]),
    level: 2,
  },
  {
    id: 'alg182',
    text: 'What is a pivot?',
    answers: A('alg182', 'Element used for partitioning', [
      'First element always',
      'Last element always',
      'No element',
    ]),
    level: 2,
  },
  {
    id: 'alg183',
    text: 'What is partitioning?',
    answers: A('alg183', 'Dividing into smaller and larger', [
      'Combining',
      'Sorting',
      'Searching',
    ]),
    level: 2,
  },
  {
    id: 'alg184',
    text: 'What is merging?',
    answers: A('alg184', 'Combining sorted arrays', [
      'Dividing arrays',
      'Searching arrays',
      'Random combining',
    ]),
    level: 2,
  },
  {
    id: 'alg185',
    text: 'What is divide and conquer?',
    answers: A('alg185', 'Break problem into smaller parts', [
      'Solve all at once',
      'No division',
      'Random approach',
    ]),
    level: 2,
  },
  {
    id: 'alg186',
    text: 'What is recursion?',
    answers: A('alg186', 'Function calling itself', [
      'Function calling other',
      'No calling',
      'Loop',
    ]),
    level: 2,
  },
  {
    id: 'alg187',
    text: 'What is a base case?',
    answers: A('alg187', 'Condition to stop recursion', [
      'Condition to continue',
      'No condition',
      'Random condition',
    ]),
    level: 2,
  },
  {
    id: 'alg188',
    text: 'What is a recursive case?',
    answers: A('alg188', 'Case that calls function again', [
      'Case that stops',
      'No case',
      'Random case',
    ]),
    level: 2,
  },
  {
    id: 'alg189',
    text: 'What is time complexity?',
    answers: A('alg189', 'How time grows with input size', [
      'Actual time',
      'Memory used',
      'Code length',
    ]),
    level: 2,
  },
  {
    id: 'alg190',
    text: 'What is space complexity?',
    answers: A('alg190', 'How memory grows with input size', [
      'Actual memory',
      'Time used',
      'Code length',
    ]),
    level: 2,
  },
  {
    id: 'alg191',
    text: 'What is O(1)?',
    answers: A('alg191', 'Constant time', [
      'Linear time',
      'Quadratic time',
      'Logarithmic time',
    ]),
    level: 2,
  },
  {
    id: 'alg192',
    text: 'What is O(n)?',
    answers: A('alg192', 'Linear time', [
      'Constant time',
      'Quadratic time',
      'Logarithmic time',
    ]),
    level: 2,
  },
  {
    id: 'alg193',
    text: 'What is O(n²)?',
    answers: A('alg193', 'Quadratic time', [
      'Linear time',
      'Constant time',
      'Logarithmic time',
    ]),
    level: 2,
  },
  {
    id: 'alg194',
    text: 'What is O(log n)?',
    answers: A('alg194', 'Logarithmic time', [
      'Linear time',
      'Quadratic time',
      'Constant time',
    ]),
    level: 2,
  },
  {
    id: 'alg195',
    text: 'What is O(n log n)?',
    answers: A('alg195', 'Linearithmic time', [
      'Linear time',
      'Quadratic time',
      'Constant time',
    ]),
    level: 2,
  },
  {
    id: 'alg196',
    text: 'What is best case?',
    answers: A('alg196', 'Fastest possible execution', [
      'Slowest execution',
      'Average execution',
      'No execution',
    ]),
    level: 2,
  },
  {
    id: 'alg197',
    text: 'What is worst case?',
    answers: A('alg197', 'Slowest possible execution', [
      'Fastest execution',
      'Average execution',
      'No execution',
    ]),
    level: 2,
  },
  {
    id: 'alg198',
    text: 'What is average case?',
    answers: A('alg198', 'Typical execution time', [
      'Best case',
      'Worst case',
      'No case',
    ]),
    level: 2,
  },
  {
    id: 'alg199',
    text: 'What is a stable sort?',
    answers: A('alg199', 'Preserves order of equal elements', [
      'Changes order',
      'No order',
      'Random order',
    ]),
    level: 2,
  },
  {
    id: 'alg200',
    text: 'What is an in-place algorithm?',
    answers: A('alg200', 'Uses constant extra space', [
      'Uses linear space',
      'Uses quadratic space',
      'No space',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-4: More Intermediate Questions =====
  {
    id: 'alg201',
    text: 'What is heap sort?',
    answers: A('alg201', 'Sort using heap data structure', [
      'Using stack',
      'Using queue',
      'Using array only',
    ]),
    level: 3,
  },
  {
    id: 'alg202',
    text: 'What is counting sort?',
    answers: A('alg202', 'Sort by counting occurrences', [
      'By comparing',
      'By dividing',
      'By merging',
    ]),
    level: 3,
  },
  {
    id: 'alg203',
    text: 'What is radix sort?',
    answers: A('alg203', 'Sort by digits', [
      'By comparing',
      'By dividing',
      'By merging',
    ]),
    level: 3,
  },
  {
    id: 'alg204',
    text: 'What is bucket sort?',
    answers: A('alg204', 'Sort by distributing into buckets', [
      'By comparing',
      'By dividing',
      'By merging',
    ]),
    level: 3,
  },
  {
    id: 'alg205',
    text: 'What is a greedy algorithm?',
    answers: A('alg205', 'Makes locally optimal choices', [
      'Makes global choices',
      'Random choices',
      'No choices',
    ]),
    level: 3,
  },
  {
    id: 'alg206',
    text: 'What is dynamic programming?',
    answers: A('alg206', 'Solving by breaking into subproblems', [
      'Solving all at once',
      'Random solving',
      'No solving',
    ]),
    level: 3,
  },
  {
    id: 'alg207',
    text: 'What is memoization?',
    answers: A('alg207', 'Caching computed results', [
      'Recomputing always',
      'No caching',
      'Random caching',
    ]),
    level: 3,
  },
  {
    id: 'alg208',
    text: 'What is tabulation?',
    answers: A('alg208', 'Bottom-up dynamic programming', [
      'Top-down',
      'Random order',
      'No order',
    ]),
    level: 3,
  },
  {
    id: 'alg209',
    text: 'What is backtracking?',
    answers: A('alg209', 'Try and undo if wrong', [
      'Never undo',
      'Random trying',
      'No trying',
    ]),
    level: 3,
  },
  {
    id: 'alg210',
    text: 'What is BFS?',
    answers: A('alg210', 'Explore level by level', [
      'Explore depth first',
      'Random exploration',
      'No exploration',
    ]),
    level: 3,
  },
  {
    id: 'alg211',
    text: 'What is DFS?',
    answers: A('alg211', 'Explore as deep as possible first', [
      'Explore level by level',
      'Random exploration',
      'No exploration',
    ]),
    level: 3,
  },
  {
    id: 'alg212',
    text: 'What is Dijkstras algorithm?',
    answers: A('alg212', 'Shortest path with non-negative weights', [
      'Any weights',
      'No weights',
      'Random path',
    ]),
    level: 3,
  },
  {
    id: 'alg213',
    text: 'What is Bellman-Ford?',
    answers: A('alg213', 'Shortest path with negative weights', [
      'Only positive weights',
      'No weights',
      'Random path',
    ]),
    level: 4,
  },
  {
    id: 'alg214',
    text: 'What is Floyd-Warshall?',
    answers: A('alg214', 'All pairs shortest paths', [
      'Single source',
      'No paths',
      'Random paths',
    ]),
    level: 4,
  },
  {
    id: 'alg215',
    text: 'What is Prims algorithm?',
    answers: A('alg215', 'Minimum spanning tree', [
      'Maximum spanning tree',
      'Shortest path',
      'Random tree',
    ]),
    level: 3,
  },
  {
    id: 'alg216',
    text: 'What is Kruskals algorithm?',
    answers: A('alg216', 'Minimum spanning tree using edges', [
      'Using vertices',
      'Shortest path',
      'Random tree',
    ]),
    level: 3,
  },
  {
    id: 'alg217',
    text: 'What is topological sort?',
    answers: A('alg217', 'Linear ordering of DAG', [
      'Sorting array',
      'Random ordering',
      'No ordering',
    ]),
    level: 3,
  },
  {
    id: 'alg218',
    text: 'What is a spanning tree?',
    answers: A('alg218', 'Tree connecting all vertices', [
      'Partial tree',
      'Forest',
      'Cycle',
    ]),
    level: 3,
  },
  {
    id: 'alg219',
    text: 'What is the knapsack problem?',
    answers: A('alg219', 'Maximize value within weight limit', [
      'Minimize value',
      'No limit',
      'Random selection',
    ]),
    level: 4,
  },
  {
    id: 'alg220',
    text: 'What is the traveling salesman problem?',
    answers: A('alg220', 'Shortest route visiting all cities', [
      'Longest route',
      'Random route',
      'No route',
    ]),
    level: 4,
  },
  {
    id: 'alg221',
    text: 'What is the coin change problem?',
    answers: A('alg221', 'Minimum coins for amount', [
      'Maximum coins',
      'Random coins',
      'No coins',
    ]),
    level: 4,
  },
  {
    id: 'alg222',
    text: 'What is longest common subsequence?',
    answers: A('alg222', 'Longest sequence in both strings', [
      'Shortest sequence',
      'Random sequence',
      'No sequence',
    ]),
    level: 4,
  },
  {
    id: 'alg223',
    text: 'What is edit distance?',
    answers: A('alg223', 'Minimum operations to transform string', [
      'Maximum operations',
      'Random operations',
      'No operations',
    ]),
    level: 4,
  },
  {
    id: 'alg224',
    text: 'What is the Fibonacci sequence?',
    answers: A('alg224', 'Each number is sum of previous two', [
      'Sum of all previous',
      'Product of previous',
      'Random numbers',
    ]),
    level: 3,
  },
  {
    id: 'alg225',
    text: 'What is binary exponentiation?',
    answers: A('alg225', 'Fast power calculation', [
      'Slow power',
      'No power',
      'Random power',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'alg226',
    text: 'What is A* algorithm?',
    answers: A('alg226', 'Heuristic pathfinding', [
      'Blind search',
      'Random search',
      'No search',
    ]),
    level: 5,
  },
  {
    id: 'alg227',
    text: 'What is the Euclidean algorithm?',
    answers: A('alg227', 'Finding GCD', [
      'Finding LCM',
      'Finding sum',
      'Finding product',
    ]),
    level: 5,
  },
  {
    id: 'alg228',
    text: 'What is the sieve of Eratosthenes?',
    answers: A('alg228', 'Finding prime numbers', [
      'Finding composites',
      'Finding factors',
      'Finding multiples',
    ]),
    level: 5,
  },
  {
    id: 'alg229',
    text: 'What is KMP algorithm?',
    answers: A('alg229', 'String pattern matching', [
      'Sorting strings',
      'Comparing strings',
      'Concatenating strings',
    ]),
    level: 5,
  },
  {
    id: 'alg230',
    text: 'What is Rabin-Karp?',
    answers: A('alg230', 'String matching with hashing', [
      'Without hashing',
      'Sorting',
      'Searching numbers',
    ]),
    level: 5,
  },
  {
    id: 'alg231',
    text: 'What is the Z algorithm?',
    answers: A('alg231', 'String matching using Z array', [
      'Using hash',
      'Using tree',
      'Random matching',
    ]),
    level: 6,
  },
  {
    id: 'alg232',
    text: 'What is Manacher algorithm?',
    answers: A('alg232', 'Finding palindromes in linear time', [
      'Quadratic time',
      'Cubic time',
      'Random time',
    ]),
    level: 6,
  },
  {
    id: 'alg233',
    text: 'What is the convex hull?',
    answers: A('alg233', 'Smallest convex polygon containing points', [
      'Largest polygon',
      'Random polygon',
      'No polygon',
    ]),
    level: 5,
  },
  {
    id: 'alg234',
    text: 'What is Graham scan?',
    answers: A('alg234', 'Convex hull algorithm', [
      'Sorting algorithm',
      'Searching algorithm',
      'Graph algorithm',
    ]),
    level: 6,
  },
  {
    id: 'alg235',
    text: 'What is line sweep?',
    answers: A('alg235', 'Processing events in order', [
      'Random processing',
      'No processing',
      'Parallel processing',
    ]),
    level: 6,
  },
  {
    id: 'alg236',
    text: 'What is the Ford-Fulkerson method?',
    answers: A('alg236', 'Maximum flow algorithm', [
      'Minimum flow',
      'Shortest path',
      'Spanning tree',
    ]),
    level: 6,
  },
  {
    id: 'alg237',
    text: 'What is the Edmonds-Karp algorithm?',
    answers: A('alg237', 'Max flow using BFS', [
      'Using DFS',
      'Using random',
      'No search',
    ]),
    level: 6,
  },
  {
    id: 'alg238',
    text: 'What is bipartite matching?',
    answers: A('alg238', 'Matching in bipartite graph', [
      'In any graph',
      'In tree',
      'No matching',
    ]),
    level: 6,
  },
  {
    id: 'alg239',
    text: 'What is the Hungarian algorithm?',
    answers: A('alg239', 'Optimal assignment problem', [
      'Random assignment',
      'No assignment',
      'Suboptimal assignment',
    ]),
    level: 7,
  },
  {
    id: 'alg240',
    text: 'What is strongly connected components?',
    answers: A('alg240', 'Maximal strongly connected subgraphs', [
      'Weakly connected',
      'Not connected',
      'Random subgraphs',
    ]),
    level: 6,
  },
  {
    id: 'alg241',
    text: 'What is Tarjans algorithm?',
    answers: A('alg241', 'Finding SCCs', [
      'Finding shortest path',
      'Finding MST',
      'Sorting',
    ]),
    level: 7,
  },
  {
    id: 'alg242',
    text: 'What is Kosarajus algorithm?',
    answers: A('alg242', 'Finding SCCs using two DFS', [
      'One DFS',
      'BFS',
      'Random search',
    ]),
    level: 7,
  },
  {
    id: 'alg243',
    text: 'What is articulation point?',
    answers: A('alg243', 'Vertex whose removal disconnects graph', [
      'Edge removal',
      'No disconnection',
      'Random vertex',
    ]),
    level: 7,
  },
  {
    id: 'alg244',
    text: 'What is a bridge in graph?',
    answers: A('alg244', 'Edge whose removal disconnects graph', [
      'Vertex removal',
      'No disconnection',
      'Random edge',
    ]),
    level: 7,
  },
  {
    id: 'alg245',
    text: 'What is the FFT?',
    answers: A('alg245', 'Fast Fourier Transform', [
      'Slow transform',
      'No transform',
      'Random transform',
    ]),
    level: 8,
  },
  {
    id: 'alg246',
    text: 'What is NTT?',
    answers: A('alg246', 'Number Theoretic Transform', [
      'FFT variant',
      'Sorting algorithm',
      'Graph algorithm',
    ]),
    level: 8,
  },
  {
    id: 'alg247',
    text: 'What is Mo algorithm?',
    answers: A('alg247', 'Query processing with sqrt decomposition', [
      'Linear processing',
      'Random processing',
      'No processing',
    ]),
    level: 8,
  },
  {
    id: 'alg248',
    text: 'What is centroid decomposition?',
    answers: A('alg248', 'Tree decomposition for path queries', [
      'Graph decomposition',
      'Array decomposition',
      'No decomposition',
    ]),
    level: 8,
  },
  {
    id: 'alg249',
    text: 'What is heavy-light decomposition?',
    answers: A('alg249', 'Tree decomposition into chains', [
      'Into nodes',
      'Into edges',
      'Random decomposition',
    ]),
    level: 8,
  },
  {
    id: 'alg250',
    text: 'What is the Aho-Corasick algorithm?',
    answers: A('alg250', 'Multiple pattern string matching', [
      'Single pattern',
      'Sorting',
      'Graph algorithm',
    ]),
    level: 8,
  },
];
