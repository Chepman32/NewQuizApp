import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const dataStructuresQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'ds1',
    text: 'What is an array?',
    answers: A('ds1', 'Collection of elements at contiguous memory', [
      'Linked list',
      'Tree',
      'Graph',
    ]),
    level: 1,
  },
  {
    id: 'ds2',
    text: 'What is the time complexity to access array element by index?',
    answers: A('ds2', 'O(1)', ['O(n)', 'O(log n)', 'O(n²)']),
    level: 1,
  },
  {
    id: 'ds3',
    text: 'What is a linked list?',
    answers: A('ds3', 'Elements connected by pointers', [
      'Contiguous memory',
      'Tree structure',
      'Graph structure',
    ]),
    level: 1,
  },
  {
    id: 'ds4',
    text: 'What is the time complexity to access linked list element?',
    answers: A('ds4', 'O(n)', ['O(1)', 'O(log n)', 'O(n²)']),
    level: 1,
  },
  {
    id: 'ds5',
    text: 'What is a stack?',
    answers: A('ds5', 'LIFO data structure', [
      'FIFO data structure',
      'Random access',
      'Sorted structure',
    ]),
    level: 1,
  },
  {
    id: 'ds6',
    text: 'What does LIFO stand for?',
    answers: A('ds6', 'Last In First Out', [
      'First In First Out',
      'Last In Last Out',
      'First In Last Out',
    ]),
    level: 1,
  },
  {
    id: 'ds7',
    text: 'What is a queue?',
    answers: A('ds7', 'FIFO data structure', [
      'LIFO data structure',
      'Random access',
      'Sorted structure',
    ]),
    level: 1,
  },
  {
    id: 'ds8',
    text: 'What does FIFO stand for?',
    answers: A('ds8', 'First In First Out', [
      'Last In First Out',
      'First In Last Out',
      'Last In Last Out',
    ]),
    level: 1,
  },
  {
    id: 'ds9',
    text: 'What operation adds to a stack?',
    answers: A('ds9', 'Push', ['Pop', 'Enqueue', 'Dequeue']),
    level: 1,
  },
  {
    id: 'ds10',
    text: 'What operation removes from a stack?',
    answers: A('ds10', 'Pop', ['Push', 'Enqueue', 'Dequeue']),
    level: 1,
  },
  {
    id: 'ds11',
    text: 'What operation adds to a queue?',
    answers: A('ds11', 'Enqueue', ['Dequeue', 'Push', 'Pop']),
    level: 1,
  },
  {
    id: 'ds12',
    text: 'What operation removes from a queue?',
    answers: A('ds12', 'Dequeue', ['Enqueue', 'Push', 'Pop']),
    level: 1,
  },
  {
    id: 'ds13',
    text: 'What is a tree?',
    answers: A('ds13', 'Hierarchical data structure', [
      'Linear structure',
      'Circular structure',
      'Random structure',
    ]),
    level: 1,
  },
  {
    id: 'ds14',
    text: 'What is the root of a tree?',
    answers: A('ds14', 'Topmost node', [
      'Bottom node',
      'Middle node',
      'Any node',
    ]),
    level: 1,
  },
  {
    id: 'ds15',
    text: 'What is a leaf node?',
    answers: A('ds15', 'Node with no children', [
      'Node with children',
      'Root node',
      'Middle node',
    ]),
    level: 1,
  },
  {
    id: 'ds16',
    text: 'What is a binary tree?',
    answers: A('ds16', 'Tree with at most 2 children per node', [
      'Tree with any children',
      'Tree with 3 children',
      'Linear structure',
    ]),
    level: 2,
  },
  {
    id: 'ds17',
    text: 'What is a binary search tree?',
    answers: A('ds17', 'Binary tree with ordered nodes', [
      'Unordered binary tree',
      'Balanced tree',
      'Complete tree',
    ]),
    level: 2,
  },
  {
    id: 'ds18',
    text: 'In BST, where are smaller values?',
    answers: A('ds18', 'Left subtree', ['Right subtree', 'Root', 'Anywhere']),
    level: 2,
  },
  {
    id: 'ds19',
    text: 'In BST, where are larger values?',
    answers: A('ds19', 'Right subtree', ['Left subtree', 'Root', 'Anywhere']),
    level: 2,
  },
  {
    id: 'ds20',
    text: 'What is the time complexity of BST search (average)?',
    answers: A('ds20', 'O(log n)', ['O(n)', 'O(1)', 'O(n²)']),
    level: 2,
  },
  {
    id: 'ds21',
    text: 'What is a hash table?',
    answers: A('ds21', 'Key-value storage using hash function', [
      'Sorted array',
      'Linked list',
      'Tree',
    ]),
    level: 2,
  },
  {
    id: 'ds22',
    text: 'What is the average time complexity of hash table lookup?',
    answers: A('ds22', 'O(1)', ['O(n)', 'O(log n)', 'O(n²)']),
    level: 2,
  },
  {
    id: 'ds23',
    text: 'What is a collision in hash table?',
    answers: A('ds23', 'Two keys hash to same index', [
      'No keys hash',
      'All keys same',
      'Empty table',
    ]),
    level: 2,
  },
  {
    id: 'ds24',
    text: 'What is chaining in hash tables?',
    answers: A('ds24', 'Storing collisions in linked list', [
      'Rehashing',
      'Linear probing',
      'Quadratic probing',
    ]),
    level: 2,
  },
  {
    id: 'ds25',
    text: 'What is a graph?',
    answers: A('ds25', 'Nodes connected by edges', [
      'Linear structure',
      'Hierarchical structure',
      'Sequential structure',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'ds26',
    text: 'What is a heap?',
    answers: A('ds26', 'Complete binary tree with heap property', [
      'BST',
      'Linked list',
      'Hash table',
    ]),
    level: 3,
  },
  {
    id: 'ds27',
    text: 'What is a min-heap?',
    answers: A('ds27', 'Parent smaller than children', [
      'Parent larger than children',
      'Sorted array',
      'BST',
    ]),
    level: 3,
  },
  {
    id: 'ds28',
    text: 'What is a max-heap?',
    answers: A('ds28', 'Parent larger than children', [
      'Parent smaller than children',
      'Sorted array',
      'BST',
    ]),
    level: 3,
  },
  {
    id: 'ds29',
    text: 'What is the time complexity of heap insert?',
    answers: A('ds29', 'O(log n)', ['O(1)', 'O(n)', 'O(n²)']),
    level: 3,
  },
  {
    id: 'ds30',
    text: 'What is the time complexity of heap extract-min/max?',
    answers: A('ds30', 'O(log n)', ['O(1)', 'O(n)', 'O(n²)']),
    level: 3,
  },
  {
    id: 'ds31',
    text: 'What is a priority queue?',
    answers: A('ds31', 'Queue where elements have priorities', [
      'Regular queue',
      'Stack',
      'Linked list',
    ]),
    level: 3,
  },
  {
    id: 'ds32',
    text: 'What data structure typically implements priority queue?',
    answers: A('ds32', 'Heap', ['Array', 'Linked list', 'Hash table']),
    level: 3,
  },
  {
    id: 'ds33',
    text: 'What is a trie?',
    answers: A('ds33', 'Tree for storing strings', [
      'Binary tree',
      'Heap',
      'Graph',
    ]),
    level: 3,
  },
  {
    id: 'ds34',
    text: 'What is the time complexity of trie search?',
    answers: A('ds34', 'O(m) where m is string length', [
      'O(n)',
      'O(log n)',
      'O(1)',
    ]),
    level: 3,
  },
  {
    id: 'ds35',
    text: 'What is a doubly linked list?',
    answers: A('ds35', 'Nodes with next and previous pointers', [
      'Only next pointer',
      'Only previous pointer',
      'No pointers',
    ]),
    level: 3,
  },
  {
    id: 'ds36',
    text: 'What is a circular linked list?',
    answers: A('ds36', 'Last node points to first', [
      'Last points to null',
      'First points to null',
      'No connections',
    ]),
    level: 3,
  },
  {
    id: 'ds37',
    text: 'What is an AVL tree?',
    answers: A('ds37', 'Self-balancing BST', [
      'Unbalanced BST',
      'Heap',
      'Trie',
    ]),
    level: 4,
  },
  {
    id: 'ds38',
    text: 'What is the balance factor in AVL tree?',
    answers: A('ds38', 'Height difference of subtrees', [
      'Number of nodes',
      'Depth of tree',
      'Width of tree',
    ]),
    level: 4,
  },
  {
    id: 'ds39',
    text: 'What is a Red-Black tree?',
    answers: A('ds39', 'Self-balancing BST with color property', [
      'AVL tree',
      'Heap',
      'Trie',
    ]),
    level: 4,
  },
  {
    id: 'ds40',
    text: 'What is a B-tree?',
    answers: A('ds40', 'Self-balancing tree for disk storage', [
      'Binary tree',
      'AVL tree',
      'Heap',
    ]),
    level: 4,
  },
  {
    id: 'ds41',
    text: 'What is a segment tree?',
    answers: A('ds41', 'Tree for range queries', ['BST', 'Heap', 'Trie']),
    level: 4,
  },
  {
    id: 'ds42',
    text: 'What is a Fenwick tree (BIT)?',
    answers: A('ds42', 'Tree for prefix sums', ['BST', 'Heap', 'Trie']),
    level: 4,
  },
  {
    id: 'ds43',
    text: 'What is Union-Find?',
    answers: A('ds43', 'Data structure for disjoint sets', [
      'Sorting structure',
      'Searching structure',
      'Hashing structure',
    ]),
    level: 4,
  },
  {
    id: 'ds44',
    text: 'What is path compression in Union-Find?',
    answers: A('ds44', 'Making nodes point directly to root', [
      'Making longer paths',
      'Removing nodes',
      'Adding nodes',
    ]),
    level: 4,
  },
  {
    id: 'ds45',
    text: 'What is union by rank?',
    answers: A('ds45', 'Attaching smaller tree under larger', [
      'Random attachment',
      'Always left',
      'Always right',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'ds46',
    text: 'What is a skip list?',
    answers: A('ds46', 'Probabilistic data structure with multiple levels', [
      'Linked list',
      'Array',
      'Tree',
    ]),
    level: 5,
  },
  {
    id: 'ds47',
    text: 'What is the expected time complexity of skip list search?',
    answers: A('ds47', 'O(log n)', ['O(n)', 'O(1)', 'O(n²)']),
    level: 5,
  },
  {
    id: 'ds48',
    text: 'What is a bloom filter?',
    answers: A('ds48', 'Probabilistic set membership test', [
      'Exact set',
      'Sorted set',
      'Hash table',
    ]),
    level: 5,
  },
  {
    id: 'ds49',
    text: 'Can bloom filter have false positives?',
    answers: A('ds49', 'Yes', ['No', 'Sometimes', 'Never']),
    level: 5,
  },
  {
    id: 'ds50',
    text: 'Can bloom filter have false negatives?',
    answers: A('ds50', 'No', ['Yes', 'Sometimes', 'Always']),
    level: 5,
  },
  {
    id: 'ds51',
    text: 'What is a splay tree?',
    answers: A('ds51', 'Self-adjusting BST', ['Static BST', 'Heap', 'Trie']),
    level: 6,
  },
  {
    id: 'ds52',
    text: 'What is the amortized time complexity of splay tree operations?',
    answers: A('ds52', 'O(log n)', ['O(n)', 'O(1)', 'O(n²)']),
    level: 6,
  },
  {
    id: 'ds53',
    text: 'What is a treap?',
    answers: A('ds53', 'Tree + heap combination', [
      'Just tree',
      'Just heap',
      'Hash table',
    ]),
    level: 6,
  },
  {
    id: 'ds54',
    text: 'What is a rope data structure?',
    answers: A('ds54', 'Binary tree for string operations', [
      'Linked list',
      'Array',
      'Hash table',
    ]),
    level: 6,
  },
  {
    id: 'ds55',
    text: 'What is a van Emde Boas tree?',
    answers: A('ds55', 'Tree with O(log log u) operations', [
      'O(log n) tree',
      'O(n) tree',
      'O(1) tree',
    ]),
    level: 6,
  },
  {
    id: 'ds56',
    text: 'What is a persistent data structure?',
    answers: A('ds56', 'Preserves previous versions', [
      'Destroys previous versions',
      'Mutable only',
      'No versions',
    ]),
    level: 7,
  },
  {
    id: 'ds57',
    text: 'What is a finger tree?',
    answers: A(
      'ds57',
      'Functional data structure with efficient access at ends',
      ['Binary tree', 'Heap', 'Hash table'],
    ),
    level: 7,
  },
  {
    id: 'ds58',
    text: 'What is a Fibonacci heap?',
    answers: A('ds58', 'Heap with O(1) amortized insert and decrease-key', [
      'Binary heap',
      'Binomial heap',
      'Pairing heap',
    ]),
    level: 7,
  },
  {
    id: 'ds59',
    text: 'What is a binomial heap?',
    answers: A('ds59', 'Collection of binomial trees', [
      'Single tree',
      'Array',
      'Linked list',
    ]),
    level: 7,
  },
  {
    id: 'ds60',
    text: 'What is a pairing heap?',
    answers: A('ds60', 'Simple heap with good amortized bounds', [
      'Binary heap',
      'Fibonacci heap',
      'Binomial heap',
    ]),
    level: 7,
  },
  {
    id: 'ds61',
    text: 'What is a link-cut tree?',
    answers: A('ds61', 'Data structure for dynamic trees', [
      'Static tree',
      'Heap',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'ds62',
    text: 'What is a top tree?',
    answers: A('ds62', 'Data structure for path queries on trees', [
      'Binary tree',
      'Heap',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'ds63',
    text: 'What is a wavelet tree?',
    answers: A('ds63', 'Tree for range queries on sequences', [
      'Binary tree',
      'Heap',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'ds64',
    text: 'What is a succinct data structure?',
    answers: A('ds64', 'Uses space close to information-theoretic minimum', [
      'Uses maximum space',
      'Uses average space',
      'Uses no space',
    ]),
    level: 8,
  },
  {
    id: 'ds65',
    text: 'What is a rank-select data structure?',
    answers: A('ds65', 'Supports rank and select queries on bit vectors', [
      'Sorting structure',
      'Searching structure',
      'Hashing structure',
    ]),
    level: 8,
  },
];
