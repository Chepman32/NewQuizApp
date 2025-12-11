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

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'ds66',
    text: 'What is a data structure?',
    answers: A('ds66', 'Way to organize data', [
      'Random data',
      'No organization',
      'Single value',
    ]),
    level: 1,
  },
  {
    id: 'ds67',
    text: 'What is an array?',
    answers: A('ds67', 'Collection of items at indices', [
      'Single item',
      'No items',
      'Random items',
    ]),
    level: 1,
  },
  {
    id: 'ds68',
    text: 'What is a list?',
    answers: A('ds68', 'Ordered collection of items', [
      'Unordered collection',
      'Single item',
      'No items',
    ]),
    level: 1,
  },
  {
    id: 'ds69',
    text: 'What is an index?',
    answers: A('ds69', 'Position in array', [
      'Value in array',
      'Size of array',
      'Type of array',
    ]),
    level: 1,
  },
  {
    id: 'ds70',
    text: 'What is the first index in most arrays?',
    answers: A('ds70', '0', ['1', '-1', '10']),
    level: 1,
  },
  {
    id: 'ds71',
    text: 'What is length of array?',
    answers: A('ds71', 'Number of elements', [
      'First element',
      'Last element',
      'Sum of elements',
    ]),
    level: 1,
  },
  {
    id: 'ds72',
    text: 'What is adding to array?',
    answers: A('ds72', 'Inserting new element', [
      'Removing element',
      'Finding element',
      'Sorting array',
    ]),
    level: 1,
  },
  {
    id: 'ds73',
    text: 'What is removing from array?',
    answers: A('ds73', 'Deleting element', [
      'Adding element',
      'Finding element',
      'Sorting array',
    ]),
    level: 1,
  },
  {
    id: 'ds74',
    text: 'What is accessing array element?',
    answers: A('ds74', 'Getting value at index', [
      'Setting value',
      'Deleting value',
      'Sorting values',
    ]),
    level: 1,
  },
  {
    id: 'ds75',
    text: 'What is a string?',
    answers: A('ds75', 'Array of characters', [
      'Array of numbers',
      'Single character',
      'No characters',
    ]),
    level: 1,
  },
  {
    id: 'ds76',
    text: 'What is a stack?',
    answers: A('ds76', 'Last-in-first-out structure', [
      'First-in-first-out',
      'Random access',
      'No order',
    ]),
    level: 2,
  },
  {
    id: 'ds77',
    text: 'What is push on stack?',
    answers: A('ds77', 'Adding to top', [
      'Removing from top',
      'Adding to bottom',
      'Removing from bottom',
    ]),
    level: 2,
  },
  {
    id: 'ds78',
    text: 'What is pop from stack?',
    answers: A('ds78', 'Removing from top', [
      'Adding to top',
      'Removing from bottom',
      'Adding to bottom',
    ]),
    level: 2,
  },
  {
    id: 'ds79',
    text: 'What is a queue?',
    answers: A('ds79', 'First-in-first-out structure', [
      'Last-in-first-out',
      'Random access',
      'No order',
    ]),
    level: 2,
  },
  {
    id: 'ds80',
    text: 'What is enqueue?',
    answers: A('ds80', 'Adding to back of queue', [
      'Removing from front',
      'Adding to front',
      'Removing from back',
    ]),
    level: 2,
  },
  {
    id: 'ds81',
    text: 'What is dequeue?',
    answers: A('ds81', 'Removing from front of queue', [
      'Adding to back',
      'Removing from back',
      'Adding to front',
    ]),
    level: 2,
  },
  {
    id: 'ds82',
    text: 'What is a linked list?',
    answers: A('ds82', 'Elements connected by pointers', [
      'Elements in contiguous memory',
      'Single element',
      'No elements',
    ]),
    level: 2,
  },
  {
    id: 'ds83',
    text: 'What is a node?',
    answers: A('ds83', 'Element in linked structure', [
      'Entire structure',
      'Connection',
      'Index',
    ]),
    level: 2,
  },
  {
    id: 'ds84',
    text: 'What is head of linked list?',
    answers: A('ds84', 'First node', ['Last node', 'Middle node', 'Any node']),
    level: 2,
  },
  {
    id: 'ds85',
    text: 'What is tail of linked list?',
    answers: A('ds85', 'Last node', ['First node', 'Middle node', 'Any node']),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'ds86',
    text: 'What is a doubly linked list?',
    answers: A('ds86', 'Nodes with next and previous pointers', [
      'Nodes with only next',
      'Nodes with only previous',
      'No pointers',
    ]),
    level: 3,
  },
  {
    id: 'ds87',
    text: 'What is a circular linked list?',
    answers: A('ds87', 'Last node points to first', [
      'Last points to null',
      'First points to null',
      'No connections',
    ]),
    level: 3,
  },
  {
    id: 'ds88',
    text: 'What is a tree?',
    answers: A('ds88', 'Hierarchical structure with root', [
      'Linear structure',
      'Circular structure',
      'No structure',
    ]),
    level: 3,
  },
  {
    id: 'ds89',
    text: 'What is root of tree?',
    answers: A('ds89', 'Top node with no parent', [
      'Bottom node',
      'Any node',
      'Leaf node',
    ]),
    level: 3,
  },
  {
    id: 'ds90',
    text: 'What is a leaf node?',
    answers: A('ds90', 'Node with no children', [
      'Node with children',
      'Root node',
      'Any node',
    ]),
    level: 3,
  },
  {
    id: 'ds91',
    text: 'What is a binary tree?',
    answers: A('ds91', 'Tree with at most 2 children per node', [
      'Tree with any children',
      'Tree with 3 children',
      'No tree',
    ]),
    level: 3,
  },
  {
    id: 'ds92',
    text: 'What is a binary search tree?',
    answers: A('ds92', 'Binary tree with ordering property', [
      'Unordered binary tree',
      'Linear structure',
      'No structure',
    ]),
    level: 3,
  },
  {
    id: 'ds93',
    text: 'What is BST property?',
    answers: A('ds93', 'Left smaller, right larger', [
      'Left larger, right smaller',
      'No order',
      'Random order',
    ]),
    level: 3,
  },
  {
    id: 'ds94',
    text: 'What is tree height?',
    answers: A('ds94', 'Longest path from root to leaf', [
      'Shortest path',
      'Number of nodes',
      'Number of leaves',
    ]),
    level: 3,
  },
  {
    id: 'ds95',
    text: 'What is tree depth?',
    answers: A('ds95', 'Distance from root to node', [
      'Distance from leaf',
      'Height',
      'Width',
    ]),
    level: 3,
  },
  {
    id: 'ds96',
    text: 'What is a hash table?',
    answers: A('ds96', 'Key-value storage with hash function', [
      'Array',
      'Linked list',
      'Tree',
    ]),
    level: 4,
  },
  {
    id: 'ds97',
    text: 'What is a hash function?',
    answers: A('ds97', 'Function mapping keys to indices', [
      'Function sorting keys',
      'Function deleting keys',
      'No function',
    ]),
    level: 4,
  },
  {
    id: 'ds98',
    text: 'What is a collision in hashing?',
    answers: A('ds98', 'Two keys mapping to same index', [
      'No mapping',
      'Unique mapping',
      'Random mapping',
    ]),
    level: 4,
  },
  {
    id: 'ds99',
    text: 'What is chaining?',
    answers: A('ds99', 'Collision resolution with linked lists', [
      'Collision resolution with probing',
      'No resolution',
      'Random resolution',
    ]),
    level: 4,
  },
  {
    id: 'ds100',
    text: 'What is open addressing?',
    answers: A('ds100', 'Collision resolution by probing', [
      'Collision resolution with chaining',
      'No resolution',
      'Random resolution',
    ]),
    level: 4,
  },
  {
    id: 'ds101',
    text: 'What is a heap?',
    answers: A('ds101', 'Tree with heap property', [
      'Tree without property',
      'Linear structure',
      'No structure',
    ]),
    level: 4,
  },
  {
    id: 'ds102',
    text: 'What is max heap?',
    answers: A('ds102', 'Parent greater than children', [
      'Parent less than children',
      'No order',
      'Random order',
    ]),
    level: 4,
  },
  {
    id: 'ds103',
    text: 'What is min heap?',
    answers: A('ds103', 'Parent less than children', [
      'Parent greater than children',
      'No order',
      'Random order',
    ]),
    level: 4,
  },
  {
    id: 'ds104',
    text: 'What is heapify?',
    answers: A('ds104', 'Converting array to heap', [
      'Converting heap to array',
      'Sorting',
      'Searching',
    ]),
    level: 4,
  },
  {
    id: 'ds105',
    text: 'What is a priority queue?',
    answers: A('ds105', 'Queue ordered by priority', [
      'Queue ordered by time',
      'Stack',
      'Array',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'ds106',
    text: 'What is an AVL tree?',
    answers: A('ds106', 'Self-balancing BST', [
      'Unbalanced BST',
      'Linear structure',
      'No structure',
    ]),
    level: 5,
  },
  {
    id: 'ds107',
    text: 'What is balance factor?',
    answers: A('ds107', 'Height difference of subtrees', [
      'Sum of heights',
      'Product of heights',
      'No factor',
    ]),
    level: 5,
  },
  {
    id: 'ds108',
    text: 'What is a red-black tree?',
    answers: A('ds108', 'Self-balancing BST with colors', [
      'Unbalanced tree',
      'AVL tree',
      'No tree',
    ]),
    level: 5,
  },
  {
    id: 'ds109',
    text: 'What is a B-tree?',
    answers: A('ds109', 'Self-balancing tree for databases', [
      'Binary tree',
      'AVL tree',
      'No tree',
    ]),
    level: 5,
  },
  {
    id: 'ds110',
    text: 'What is a trie?',
    answers: A('ds110', 'Tree for string storage', [
      'Tree for numbers',
      'Linear structure',
      'No structure',
    ]),
    level: 5,
  },
  {
    id: 'ds111',
    text: 'What is a graph?',
    answers: A('ds111', 'Vertices connected by edges', [
      'Tree',
      'Array',
      'Stack',
    ]),
    level: 6,
  },
  {
    id: 'ds112',
    text: 'What is a directed graph?',
    answers: A('ds112', 'Graph with directed edges', [
      'Graph with undirected edges',
      'No edges',
      'Random edges',
    ]),
    level: 6,
  },
  {
    id: 'ds113',
    text: 'What is an undirected graph?',
    answers: A('ds113', 'Graph with bidirectional edges', [
      'Graph with one-way edges',
      'No edges',
      'Random edges',
    ]),
    level: 6,
  },
  {
    id: 'ds114',
    text: 'What is adjacency matrix?',
    answers: A('ds114', 'Matrix representing graph edges', [
      'List representing edges',
      'No representation',
      'Random representation',
    ]),
    level: 6,
  },
  {
    id: 'ds115',
    text: 'What is adjacency list?',
    answers: A('ds115', 'List of neighbors for each vertex', [
      'Matrix of edges',
      'No representation',
      'Random representation',
    ]),
    level: 6,
  },
  {
    id: 'ds116',
    text: 'What is a skip list?',
    answers: A('ds116', 'Probabilistic data structure for searching', [
      'Deterministic structure',
      'No structure',
      'Random structure',
    ]),
    level: 7,
  },
  {
    id: 'ds117',
    text: 'What is a bloom filter?',
    answers: A('ds117', 'Probabilistic set membership test', [
      'Exact membership test',
      'No test',
      'Random test',
    ]),
    level: 7,
  },
  {
    id: 'ds118',
    text: 'What is a disjoint set?',
    answers: A('ds118', 'Collection of non-overlapping sets', [
      'Overlapping sets',
      'Single set',
      'No sets',
    ]),
    level: 7,
  },
  {
    id: 'ds119',
    text: 'What is a segment tree?',
    answers: A('ds119', 'Tree for range queries', [
      'Tree for point queries',
      'No tree',
      'Random tree',
    ]),
    level: 7,
  },
  {
    id: 'ds120',
    text: 'What is a Fenwick tree?',
    answers: A('ds120', 'Binary indexed tree', [
      'Regular binary tree',
      'No tree',
      'Random tree',
    ]),
    level: 7,
  },
  {
    id: 'ds121',
    text: 'What is a suffix tree?',
    answers: A('ds121', 'Tree of all suffixes', [
      'Tree of prefixes',
      'No tree',
      'Random tree',
    ]),
    level: 8,
  },
  {
    id: 'ds122',
    text: 'What is a suffix array?',
    answers: A('ds122', 'Sorted array of suffixes', [
      'Unsorted array',
      'No array',
      'Random array',
    ]),
    level: 8,
  },
  {
    id: 'ds123',
    text: 'What is a treap?',
    answers: A('ds123', 'Tree with heap priorities', [
      'Tree without priorities',
      'No tree',
      'Random tree',
    ]),
    level: 8,
  },
  {
    id: 'ds124',
    text: 'What is a splay tree?',
    answers: A('ds124', 'Self-adjusting BST', [
      'Static BST',
      'No tree',
      'Random tree',
    ]),
    level: 8,
  },
  {
    id: 'ds125',
    text: 'What is a van Emde Boas tree?',
    answers: A('ds125', 'Tree with O(log log n) operations', [
      'O(log n) operations',
      'O(n) operations',
      'No operations',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'ds126',
    text: 'What is data?',
    answers: A('ds126', 'Information stored in computer', [
      'Physical objects',
      'Sounds',
      'Colors',
    ]),
    level: 1,
  },
  {
    id: 'ds127',
    text: 'What is a variable?',
    answers: A('ds127', 'Named storage location', [
      'Unnamed storage',
      'Constant',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds128',
    text: 'What is a value?',
    answers: A('ds128', 'Data stored in variable', [
      'Variable name',
      'Data type',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds129',
    text: 'What is an integer?',
    answers: A('ds129', 'Whole number', ['Decimal number', 'Text', 'Boolean']),
    level: 1,
  },
  {
    id: 'ds130',
    text: 'What is a string?',
    answers: A('ds130', 'Sequence of characters', [
      'Sequence of numbers',
      'Single character',
      'Boolean',
    ]),
    level: 1,
  },
  {
    id: 'ds131',
    text: 'What is a boolean?',
    answers: A('ds131', 'True or false value', ['Number', 'Text', 'Array']),
    level: 1,
  },
  {
    id: 'ds132',
    text: 'What is an array?',
    answers: A('ds132', 'Collection of elements', [
      'Single element',
      'Function',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'ds133',
    text: 'What is an index?',
    answers: A('ds133', 'Position in array', [
      'Value in array',
      'Size of array',
      'Type of array',
    ]),
    level: 1,
  },
  {
    id: 'ds134',
    text: 'What is the first index in most arrays?',
    answers: A('ds134', '0', ['1', '-1', '10']),
    level: 1,
  },
  {
    id: 'ds135',
    text: 'What is a list?',
    answers: A('ds135', 'Ordered collection of items', [
      'Unordered collection',
      'Single item',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds136',
    text: 'What is a stack?',
    answers: A('ds136', 'Last-in-first-out structure', [
      'First-in-first-out',
      'Random access',
      'Sorted structure',
    ]),
    level: 1,
  },
  {
    id: 'ds137',
    text: 'What is a queue?',
    answers: A('ds137', 'First-in-first-out structure', [
      'Last-in-first-out',
      'Random access',
      'Sorted structure',
    ]),
    level: 1,
  },
  {
    id: 'ds138',
    text: 'What is push?',
    answers: A('ds138', 'Add to stack', [
      'Remove from stack',
      'Search stack',
      'Sort stack',
    ]),
    level: 1,
  },
  {
    id: 'ds139',
    text: 'What is pop?',
    answers: A('ds139', 'Remove from stack', [
      'Add to stack',
      'Search stack',
      'Sort stack',
    ]),
    level: 1,
  },
  {
    id: 'ds140',
    text: 'What is enqueue?',
    answers: A('ds140', 'Add to queue', [
      'Remove from queue',
      'Search queue',
      'Sort queue',
    ]),
    level: 1,
  },
  {
    id: 'ds141',
    text: 'What is dequeue?',
    answers: A('ds141', 'Remove from queue', [
      'Add to queue',
      'Search queue',
      'Sort queue',
    ]),
    level: 1,
  },
  {
    id: 'ds142',
    text: 'What is a node?',
    answers: A('ds142', 'Element in data structure', [
      'Entire structure',
      'Connection',
      'Index',
    ]),
    level: 1,
  },
  {
    id: 'ds143',
    text: 'What is a tree?',
    answers: A('ds143', 'Hierarchical data structure', [
      'Linear structure',
      'Circular structure',
      'Random structure',
    ]),
    level: 1,
  },
  {
    id: 'ds144',
    text: 'What is the root of a tree?',
    answers: A('ds144', 'Top node', ['Bottom node', 'Middle node', 'Any node']),
    level: 1,
  },
  {
    id: 'ds145',
    text: 'What is a leaf in a tree?',
    answers: A('ds145', 'Node with no children', [
      'Node with children',
      'Root node',
      'Any node',
    ]),
    level: 1,
  },
  {
    id: 'ds146',
    text: 'What is a parent node?',
    answers: A('ds146', 'Node with children', [
      'Node without children',
      'Root only',
      'Leaf only',
    ]),
    level: 1,
  },
  {
    id: 'ds147',
    text: 'What is a child node?',
    answers: A('ds147', 'Node with a parent', [
      'Root node',
      'Isolated node',
      'Any node',
    ]),
    level: 1,
  },
  {
    id: 'ds148',
    text: 'What is a graph?',
    answers: A('ds148', 'Nodes connected by edges', [
      'Linear structure',
      'Single node',
      'No connections',
    ]),
    level: 1,
  },
  {
    id: 'ds149',
    text: 'What is an edge?',
    answers: A('ds149', 'Connection between nodes', [
      'Node itself',
      'Data in node',
      'Index',
    ]),
    level: 1,
  },
  {
    id: 'ds150',
    text: 'What is a key?',
    answers: A('ds150', 'Identifier for data', [
      'Data itself',
      'Index',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds151',
    text: 'What is a value in key-value pair?',
    answers: A('ds151', 'Data associated with key', [
      'Key itself',
      'Index',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds152',
    text: 'What is sorting?',
    answers: A('ds152', 'Arranging in order', [
      'Random arrangement',
      'Removing items',
      'Adding items',
    ]),
    level: 1,
  },
  {
    id: 'ds153',
    text: 'What is searching?',
    answers: A('ds153', 'Finding specific item', [
      'Adding item',
      'Removing item',
      'Sorting items',
    ]),
    level: 1,
  },
  {
    id: 'ds154',
    text: 'What is insertion?',
    answers: A('ds154', 'Adding new element', [
      'Removing element',
      'Finding element',
      'Sorting elements',
    ]),
    level: 1,
  },
  {
    id: 'ds155',
    text: 'What is deletion?',
    answers: A('ds155', 'Removing element', [
      'Adding element',
      'Finding element',
      'Sorting elements',
    ]),
    level: 1,
  },
  {
    id: 'ds156',
    text: 'What is traversal?',
    answers: A('ds156', 'Visiting all elements', [
      'Visiting one element',
      'Adding elements',
      'Removing elements',
    ]),
    level: 1,
  },
  {
    id: 'ds157',
    text: 'What is the size of a data structure?',
    answers: A('ds157', 'Number of elements', [
      'Type of elements',
      'Value of elements',
      'Name of structure',
    ]),
    level: 1,
  },
  {
    id: 'ds158',
    text: 'What is empty?',
    answers: A('ds158', 'Having no elements', [
      'Having one element',
      'Having many elements',
      'Being full',
    ]),
    level: 1,
  },
  {
    id: 'ds159',
    text: 'What is full?',
    answers: A('ds159', 'Cannot add more elements', [
      'Can add more',
      'Empty',
      'Half full',
    ]),
    level: 1,
  },
  {
    id: 'ds160',
    text: 'What is capacity?',
    answers: A('ds160', 'Maximum number of elements', [
      'Current number',
      'Minimum number',
      'Average number',
    ]),
    level: 1,
  },
  {
    id: 'ds161',
    text: 'What is a pointer?',
    answers: A('ds161', 'Reference to memory location', [
      'Data value',
      'Index',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds162',
    text: 'What is null?',
    answers: A('ds162', 'No value or reference', [
      'Zero',
      'Empty string',
      'False',
    ]),
    level: 1,
  },
  {
    id: 'ds163',
    text: 'What is a record?',
    answers: A('ds163', 'Collection of related fields', [
      'Single field',
      'Function',
      'Index',
    ]),
    level: 1,
  },
  {
    id: 'ds164',
    text: 'What is a field?',
    answers: A('ds164', 'Single piece of data in record', [
      'Entire record',
      'Function',
      'Index',
    ]),
    level: 1,
  },
  {
    id: 'ds165',
    text: 'What is a tuple?',
    answers: A('ds165', 'Fixed-size ordered collection', [
      'Variable-size collection',
      'Single element',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds166',
    text: 'What is a set?',
    answers: A('ds166', 'Collection of unique elements', [
      'Collection with duplicates',
      'Ordered list',
      'Single element',
    ]),
    level: 1,
  },
  {
    id: 'ds167',
    text: 'What is a map?',
    answers: A('ds167', 'Key-value pairs', [
      'Single values',
      'Ordered list',
      'Tree',
    ]),
    level: 1,
  },
  {
    id: 'ds168',
    text: 'What is a dictionary?',
    answers: A('ds168', 'Key-value storage', [
      'List storage',
      'Tree storage',
      'Graph storage',
    ]),
    level: 1,
  },
  {
    id: 'ds169',
    text: 'What is iteration?',
    answers: A('ds169', 'Going through elements one by one', [
      'Skipping elements',
      'Random access',
      'No access',
    ]),
    level: 1,
  },
  {
    id: 'ds170',
    text: 'What is an iterator?',
    answers: A('ds170', 'Object for traversing collection', [
      'Collection itself',
      'Single element',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'ds171',
    text: 'What is the head of a list?',
    answers: A('ds171', 'First element', [
      'Last element',
      'Middle element',
      'Any element',
    ]),
    level: 1,
  },
  {
    id: 'ds172',
    text: 'What is the tail of a list?',
    answers: A('ds172', 'Last element or rest of list', [
      'First element',
      'Middle element',
      'Any element',
    ]),
    level: 1,
  },
  {
    id: 'ds173',
    text: 'What is append?',
    answers: A('ds173', 'Add to end', [
      'Add to beginning',
      'Add to middle',
      'Remove',
    ]),
    level: 1,
  },
  {
    id: 'ds174',
    text: 'What is prepend?',
    answers: A('ds174', 'Add to beginning', [
      'Add to end',
      'Add to middle',
      'Remove',
    ]),
    level: 1,
  },
  {
    id: 'ds175',
    text: 'What is concatenation?',
    answers: A('ds175', 'Joining two structures', [
      'Splitting structure',
      'Sorting structure',
      'Searching structure',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'ds176',
    text: 'What is a linked list?',
    answers: A('ds176', 'Nodes connected by pointers', [
      'Array of elements',
      'Tree structure',
      'Graph structure',
    ]),
    level: 2,
  },
  {
    id: 'ds177',
    text: 'What is a singly linked list?',
    answers: A('ds177', 'Each node points to next', [
      'Each node points both ways',
      'Circular connections',
      'No connections',
    ]),
    level: 2,
  },
  {
    id: 'ds178',
    text: 'What is a doubly linked list?',
    answers: A('ds178', 'Each node points to next and previous', [
      'Only points to next',
      'Only points to previous',
      'No pointers',
    ]),
    level: 2,
  },
  {
    id: 'ds179',
    text: 'What is a circular linked list?',
    answers: A('ds179', 'Last node points to first', [
      'Last points to null',
      'No connections',
      'Random connections',
    ]),
    level: 2,
  },
  {
    id: 'ds180',
    text: 'What is a binary tree?',
    answers: A('ds180', 'Tree with at most two children per node', [
      'Any number of children',
      'One child only',
      'No children',
    ]),
    level: 2,
  },
  {
    id: 'ds181',
    text: 'What is a binary search tree?',
    answers: A('ds181', 'Binary tree with ordered nodes', [
      'Unordered binary tree',
      'Linear structure',
      'Graph',
    ]),
    level: 2,
  },
  {
    id: 'ds182',
    text: 'What is the left child in BST?',
    answers: A('ds182', 'Node with smaller value', [
      'Node with larger value',
      'Any node',
      'Root node',
    ]),
    level: 2,
  },
  {
    id: 'ds183',
    text: 'What is the right child in BST?',
    answers: A('ds183', 'Node with larger value', [
      'Node with smaller value',
      'Any node',
      'Root node',
    ]),
    level: 2,
  },
  {
    id: 'ds184',
    text: 'What is tree height?',
    answers: A('ds184', 'Longest path from root to leaf', [
      'Number of nodes',
      'Number of leaves',
      'Number of edges',
    ]),
    level: 2,
  },
  {
    id: 'ds185',
    text: 'What is tree depth?',
    answers: A('ds185', 'Distance from root to node', [
      'Distance from leaf',
      'Total nodes',
      'Total edges',
    ]),
    level: 2,
  },
  {
    id: 'ds186',
    text: 'What is a hash table?',
    answers: A('ds186', 'Array with hash function for indexing', [
      'Linked list',
      'Binary tree',
      'Graph',
    ]),
    level: 2,
  },
  {
    id: 'ds187',
    text: 'What is a hash function?',
    answers: A('ds187', 'Converts key to index', [
      'Converts index to key',
      'Sorts data',
      'Searches data',
    ]),
    level: 2,
  },
  {
    id: 'ds188',
    text: 'What is a collision in hashing?',
    answers: A('ds188', 'Two keys map to same index', [
      'No mapping',
      'Unique mapping',
      'Random mapping',
    ]),
    level: 2,
  },
  {
    id: 'ds189',
    text: 'What is chaining?',
    answers: A('ds189', 'Handling collisions with linked lists', [
      'Handling with arrays',
      'No handling',
      'Random handling',
    ]),
    level: 2,
  },
  {
    id: 'ds190',
    text: 'What is open addressing?',
    answers: A('ds190', 'Finding next empty slot for collision', [
      'Using linked list',
      'Ignoring collision',
      'Random placement',
    ]),
    level: 2,
  },
  {
    id: 'ds191',
    text: 'What is a heap?',
    answers: A('ds191', 'Tree with heap property', [
      'Linear structure',
      'Graph',
      'Hash table',
    ]),
    level: 2,
  },
  {
    id: 'ds192',
    text: 'What is a min heap?',
    answers: A('ds192', 'Parent smaller than children', [
      'Parent larger',
      'Equal values',
      'Random order',
    ]),
    level: 2,
  },
  {
    id: 'ds193',
    text: 'What is a max heap?',
    answers: A('ds193', 'Parent larger than children', [
      'Parent smaller',
      'Equal values',
      'Random order',
    ]),
    level: 2,
  },
  {
    id: 'ds194',
    text: 'What is a priority queue?',
    answers: A('ds194', 'Queue ordered by priority', [
      'Regular queue',
      'Stack',
      'Array',
    ]),
    level: 2,
  },
  {
    id: 'ds195',
    text: 'What is in-order traversal?',
    answers: A('ds195', 'Left, root, right', [
      'Root, left, right',
      'Left, right, root',
      'Right, root, left',
    ]),
    level: 2,
  },
  {
    id: 'ds196',
    text: 'What is pre-order traversal?',
    answers: A('ds196', 'Root, left, right', [
      'Left, root, right',
      'Left, right, root',
      'Right, root, left',
    ]),
    level: 2,
  },
  {
    id: 'ds197',
    text: 'What is post-order traversal?',
    answers: A('ds197', 'Left, right, root', [
      'Root, left, right',
      'Left, root, right',
      'Right, root, left',
    ]),
    level: 2,
  },
  {
    id: 'ds198',
    text: 'What is level-order traversal?',
    answers: A('ds198', 'Visit nodes level by level', [
      'Visit depth first',
      'Random order',
      'Reverse order',
    ]),
    level: 2,
  },
  {
    id: 'ds199',
    text: 'What is BFS?',
    answers: A('ds199', 'Breadth-first search', [
      'Depth-first search',
      'Binary search',
      'Linear search',
    ]),
    level: 2,
  },
  {
    id: 'ds200',
    text: 'What is DFS?',
    answers: A('ds200', 'Depth-first search', [
      'Breadth-first search',
      'Binary search',
      'Linear search',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-4: More Intermediate Questions =====
  {
    id: 'ds201',
    text: 'What is a balanced tree?',
    answers: A('ds201', 'Tree with minimal height difference', [
      'Unbalanced tree',
      'Linear tree',
      'Random tree',
    ]),
    level: 3,
  },
  {
    id: 'ds202',
    text: 'What is an AVL tree?',
    answers: A('ds202', 'Self-balancing BST', [
      'Unbalanced BST',
      'Linear structure',
      'Graph',
    ]),
    level: 3,
  },
  {
    id: 'ds203',
    text: 'What is a red-black tree?',
    answers: A('ds203', 'Self-balancing BST with color property', [
      'Unbalanced tree',
      'AVL tree',
      'B-tree',
    ]),
    level: 3,
  },
  {
    id: 'ds204',
    text: 'What is a B-tree?',
    answers: A('ds204', 'Self-balancing tree for databases', [
      'Binary tree',
      'AVL tree',
      'Red-black tree',
    ]),
    level: 3,
  },
  {
    id: 'ds205',
    text: 'What is a trie?',
    answers: A('ds205', 'Tree for storing strings', [
      'Tree for numbers',
      'Graph',
      'Hash table',
    ]),
    level: 3,
  },
  {
    id: 'ds206',
    text: 'What is a segment tree?',
    answers: A('ds206', 'Tree for range queries', [
      'Tree for single queries',
      'Graph',
      'Hash table',
    ]),
    level: 3,
  },
  {
    id: 'ds207',
    text: 'What is a Fenwick tree?',
    answers: A('ds207', 'Tree for prefix sums', [
      'Tree for sorting',
      'Graph',
      'Hash table',
    ]),
    level: 4,
  },
  {
    id: 'ds208',
    text: 'What is a suffix tree?',
    answers: A('ds208', 'Tree of all suffixes', [
      'Tree of prefixes',
      'Binary tree',
      'Graph',
    ]),
    level: 4,
  },
  {
    id: 'ds209',
    text: 'What is a suffix array?',
    answers: A('ds209', 'Sorted array of suffixes', [
      'Array of prefixes',
      'Hash table',
      'Graph',
    ]),
    level: 4,
  },
  {
    id: 'ds210',
    text: 'What is a disjoint set?',
    answers: A('ds210', 'Collection of non-overlapping sets', [
      'Overlapping sets',
      'Single set',
      'No sets',
    ]),
    level: 3,
  },
  {
    id: 'ds211',
    text: 'What is union-find?',
    answers: A('ds211', 'Data structure for disjoint sets', [
      'Sorting structure',
      'Searching structure',
      'Graph',
    ]),
    level: 3,
  },
  {
    id: 'ds212',
    text: 'What is path compression?',
    answers: A('ds212', 'Optimization for union-find', [
      'Optimization for sorting',
      'Optimization for searching',
      'No optimization',
    ]),
    level: 4,
  },
  {
    id: 'ds213',
    text: 'What is union by rank?',
    answers: A('ds213', 'Optimization for union-find', [
      'Optimization for sorting',
      'Optimization for searching',
      'No optimization',
    ]),
    level: 4,
  },
  {
    id: 'ds214',
    text: 'What is an adjacency matrix?',
    answers: A('ds214', 'Matrix representing graph edges', [
      'List of edges',
      'Tree structure',
      'Hash table',
    ]),
    level: 3,
  },
  {
    id: 'ds215',
    text: 'What is an adjacency list?',
    answers: A('ds215', 'List of neighbors for each node', [
      'Matrix of edges',
      'Tree structure',
      'Hash table',
    ]),
    level: 3,
  },
  {
    id: 'ds216',
    text: 'What is a directed graph?',
    answers: A('ds216', 'Graph with one-way edges', [
      'Graph with two-way edges',
      'No edges',
      'Random edges',
    ]),
    level: 3,
  },
  {
    id: 'ds217',
    text: 'What is an undirected graph?',
    answers: A('ds217', 'Graph with two-way edges', [
      'Graph with one-way edges',
      'No edges',
      'Random edges',
    ]),
    level: 3,
  },
  {
    id: 'ds218',
    text: 'What is a weighted graph?',
    answers: A('ds218', 'Graph with edge weights', [
      'Graph without weights',
      'Tree',
      'Hash table',
    ]),
    level: 3,
  },
  {
    id: 'ds219',
    text: 'What is a sparse graph?',
    answers: A('ds219', 'Graph with few edges', [
      'Graph with many edges',
      'No edges',
      'All edges',
    ]),
    level: 3,
  },
  {
    id: 'ds220',
    text: 'What is a dense graph?',
    answers: A('ds220', 'Graph with many edges', [
      'Graph with few edges',
      'No edges',
      'Tree',
    ]),
    level: 3,
  },
  {
    id: 'ds221',
    text: 'What is a cycle in a graph?',
    answers: A('ds221', 'Path that returns to start', [
      'Path that ends',
      'No path',
      'Random path',
    ]),
    level: 3,
  },
  {
    id: 'ds222',
    text: 'What is a DAG?',
    answers: A('ds222', 'Directed acyclic graph', [
      'Directed cyclic graph',
      'Undirected graph',
      'Tree',
    ]),
    level: 3,
  },
  {
    id: 'ds223',
    text: 'What is topological sort?',
    answers: A('ds223', 'Linear ordering of DAG nodes', [
      'Sorting array',
      'Sorting tree',
      'Random order',
    ]),
    level: 4,
  },
  {
    id: 'ds224',
    text: 'What is a spanning tree?',
    answers: A('ds224', 'Tree connecting all graph nodes', [
      'Partial tree',
      'Forest',
      'Cycle',
    ]),
    level: 4,
  },
  {
    id: 'ds225',
    text: 'What is a minimum spanning tree?',
    answers: A('ds225', 'Spanning tree with minimum weight', [
      'Maximum weight',
      'Random weight',
      'No weight',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'ds226',
    text: 'What is a skip list?',
    answers: A('ds226', 'Probabilistic data structure with layers', [
      'Deterministic structure',
      'Tree',
      'Graph',
    ]),
    level: 5,
  },
  {
    id: 'ds227',
    text: 'What is a bloom filter?',
    answers: A('ds227', 'Probabilistic set membership test', [
      'Exact membership test',
      'Sorting structure',
      'Graph',
    ]),
    level: 5,
  },
  {
    id: 'ds228',
    text: 'What is a count-min sketch?',
    answers: A('ds228', 'Probabilistic frequency estimation', [
      'Exact counting',
      'Sorting',
      'Searching',
    ]),
    level: 6,
  },
  {
    id: 'ds229',
    text: 'What is a rope data structure?',
    answers: A('ds229', 'Binary tree for strings', [
      'Array for strings',
      'Hash table',
      'Graph',
    ]),
    level: 6,
  },
  {
    id: 'ds230',
    text: 'What is a treap?',
    answers: A('ds230', 'Tree with heap priorities', [
      'Pure tree',
      'Pure heap',
      'Graph',
    ]),
    level: 5,
  },
  {
    id: 'ds231',
    text: 'What is a splay tree?',
    answers: A('ds231', 'Self-adjusting BST', [
      'Static BST',
      'AVL tree',
      'B-tree',
    ]),
    level: 5,
  },
  {
    id: 'ds232',
    text: 'What is an interval tree?',
    answers: A('ds232', 'Tree for interval queries', [
      'Tree for point queries',
      'Graph',
      'Hash table',
    ]),
    level: 5,
  },
  {
    id: 'ds233',
    text: 'What is a k-d tree?',
    answers: A('ds233', 'Tree for k-dimensional data', [
      '1D tree',
      'Graph',
      'Hash table',
    ]),
    level: 5,
  },
  {
    id: 'ds234',
    text: 'What is a quadtree?',
    answers: A('ds234', 'Tree for 2D spatial data', [
      '1D tree',
      '3D tree',
      'Graph',
    ]),
    level: 5,
  },
  {
    id: 'ds235',
    text: 'What is an octree?',
    answers: A('ds235', 'Tree for 3D spatial data', [
      '2D tree',
      '1D tree',
      'Graph',
    ]),
    level: 5,
  },
  {
    id: 'ds236',
    text: 'What is a R-tree?',
    answers: A('ds236', 'Tree for spatial indexing', [
      'Tree for text',
      'Graph',
      'Hash table',
    ]),
    level: 6,
  },
  {
    id: 'ds237',
    text: 'What is a persistent data structure?',
    answers: A('ds237', 'Structure preserving old versions', [
      'Destroying old versions',
      'No versions',
      'Random versions',
    ]),
    level: 6,
  },
  {
    id: 'ds238',
    text: 'What is an immutable data structure?',
    answers: A('ds238', 'Structure that cannot be modified', [
      'Modifiable structure',
      'No structure',
      'Random structure',
    ]),
    level: 5,
  },
  {
    id: 'ds239',
    text: 'What is a concurrent data structure?',
    answers: A('ds239', 'Structure safe for multiple threads', [
      'Single thread only',
      'No threads',
      'Random access',
    ]),
    level: 6,
  },
  {
    id: 'ds240',
    text: 'What is a lock-free data structure?',
    answers: A('ds240', 'Concurrent structure without locks', [
      'Uses locks',
      'Single thread',
      'No concurrency',
    ]),
    level: 7,
  },
  {
    id: 'ds241',
    text: 'What is a wait-free data structure?',
    answers: A('ds241', 'Every operation completes in finite steps', [
      'May wait forever',
      'Uses locks',
      'Single thread',
    ]),
    level: 7,
  },
  {
    id: 'ds242',
    text: 'What is a cache-oblivious algorithm?',
    answers: A('ds242', 'Efficient without knowing cache size', [
      'Needs cache size',
      'No caching',
      'Random caching',
    ]),
    level: 7,
  },
  {
    id: 'ds243',
    text: 'What is a succinct data structure?',
    answers: A('ds243', 'Uses space close to information-theoretic minimum', [
      'Uses extra space',
      'No space',
      'Random space',
    ]),
    level: 8,
  },
  {
    id: 'ds244',
    text: 'What is a wavelet tree?',
    answers: A('ds244', 'Tree for sequence queries', [
      'Tree for numbers',
      'Graph',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'ds245',
    text: 'What is a link-cut tree?',
    answers: A('ds245', 'Tree for dynamic tree operations', [
      'Static tree',
      'Graph',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'ds246',
    text: 'What is heavy-light decomposition?',
    answers: A('ds246', 'Tree decomposition for path queries', [
      'Graph decomposition',
      'Array decomposition',
      'No decomposition',
    ]),
    level: 8,
  },
  {
    id: 'ds247',
    text: 'What is centroid decomposition?',
    answers: A('ds247', 'Tree decomposition using centroids', [
      'Using leaves',
      'Using roots',
      'Random decomposition',
    ]),
    level: 8,
  },
  {
    id: 'ds248',
    text: 'What is a Euler tour tree?',
    answers: A('ds248', 'Tree represented by Euler tour', [
      'Tree by edges',
      'Tree by nodes',
      'Graph',
    ]),
    level: 8,
  },
  {
    id: 'ds249',
    text: 'What is a top tree?',
    answers: A('ds249', 'Tree for dynamic tree queries', [
      'Static tree',
      'Graph',
      'Hash table',
    ]),
    level: 8,
  },
  {
    id: 'ds250',
    text: 'What is a fusion tree?',
    answers: A('ds250', 'Tree with word-level parallelism', [
      'Sequential tree',
      'Graph',
      'Hash table',
    ]),
    level: 8,
  },
];
