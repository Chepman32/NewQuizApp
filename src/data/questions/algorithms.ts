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
];
