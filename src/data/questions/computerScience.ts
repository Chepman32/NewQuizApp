import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const computerScienceQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'cs1',
    text: 'What does CPU stand for?',
    answers: A('cs1', 'Central Processing Unit', [
      'Computer Personal Unit',
      'Central Program Unit',
      'Computer Processing Unit',
    ]),
    level: 1,
  },
  {
    id: 'cs2',
    text: 'What does RAM stand for?',
    answers: A('cs2', 'Random Access Memory', [
      'Read Access Memory',
      'Random Application Memory',
      'Read Application Memory',
    ]),
    level: 1,
  },
  {
    id: 'cs3',
    text: 'What is the binary number system based on?',
    answers: A('cs3', '0 and 1', ['0 to 9', '0 to 7', '0 to 15']),
    level: 1,
  },
  {
    id: 'cs4',
    text: 'What is a bit?',
    answers: A('cs4', 'Binary digit (0 or 1)', ['8 bits', '1000 bits', 'Byte']),
    level: 1,
  },
  {
    id: 'cs5',
    text: 'How many bits are in a byte?',
    answers: A('cs5', '8', ['4', '16', '32']),
    level: 1,
  },
  {
    id: 'cs6',
    text: 'What is software?',
    answers: A('cs6', 'Programs and data', [
      'Physical components',
      'Monitor',
      'Keyboard',
    ]),
    level: 1,
  },
  {
    id: 'cs7',
    text: 'What is hardware?',
    answers: A('cs7', 'Physical components', ['Programs', 'Data', 'Software']),
    level: 1,
  },
  {
    id: 'cs8',
    text: 'What is an operating system?',
    answers: A('cs8', 'Software that manages computer resources', [
      'Hardware component',
      'Type of memory',
      'Input device',
    ]),
    level: 1,
  },
  {
    id: 'cs9',
    text: 'What is an algorithm?',
    answers: A('cs9', 'Step-by-step procedure to solve a problem', [
      'Type of computer',
      'Programming language',
      'Hardware component',
    ]),
    level: 1,
  },
  {
    id: 'cs10',
    text: 'What is a program?',
    answers: A('cs10', 'Set of instructions for a computer', [
      'Type of hardware',
      'Operating system',
      'Memory type',
    ]),
    level: 1,
  },
  {
    id: 'cs11',
    text: 'What is input?',
    answers: A('cs11', 'Data entered into computer', [
      'Data output by computer',
      'Data stored',
      'Data processed',
    ]),
    level: 1,
  },
  {
    id: 'cs12',
    text: 'What is output?',
    answers: A('cs12', 'Data produced by computer', [
      'Data entered',
      'Data stored',
      'Data deleted',
    ]),
    level: 1,
  },
  {
    id: 'cs13',
    text: 'What is a keyboard?',
    answers: A('cs13', 'Input device', [
      'Output device',
      'Storage device',
      'Processing device',
    ]),
    level: 1,
  },
  {
    id: 'cs14',
    text: 'What is a monitor?',
    answers: A('cs14', 'Output device', [
      'Input device',
      'Storage device',
      'Processing device',
    ]),
    level: 1,
  },
  {
    id: 'cs15',
    text: 'What is a hard drive?',
    answers: A('cs15', 'Storage device', [
      'Input device',
      'Output device',
      'Processing device',
    ]),
    level: 1,
  },
  {
    id: 'cs16',
    text: 'What does USB stand for?',
    answers: A('cs16', 'Universal Serial Bus', [
      'United System Bus',
      'Universal System Byte',
      'United Serial Byte',
    ]),
    level: 2,
  },
  {
    id: 'cs17',
    text: 'What is the Internet?',
    answers: A('cs17', 'Global network of computers', [
      'Single computer',
      'Operating system',
      'Programming language',
    ]),
    level: 2,
  },
  {
    id: 'cs18',
    text: 'What is a browser?',
    answers: A('cs18', 'Software to access websites', [
      'Operating system',
      'Hardware',
      'Programming language',
    ]),
    level: 2,
  },
  {
    id: 'cs19',
    text: 'What is a URL?',
    answers: A('cs19', 'Web address', [
      'Email address',
      'IP address',
      'MAC address',
    ]),
    level: 2,
  },
  {
    id: 'cs20',
    text: 'What is HTML?',
    answers: A('cs20', 'HyperText Markup Language', [
      'High Text Markup Language',
      'Hyper Transfer Markup Language',
      'High Transfer Markup Language',
    ]),
    level: 2,
  },
  {
    id: 'cs21',
    text: 'What is a database?',
    answers: A('cs21', 'Organized collection of data', [
      'Type of program',
      'Type of hardware',
      'Type of network',
    ]),
    level: 2,
  },
  {
    id: 'cs22',
    text: 'What is a file?',
    answers: A('cs22', 'Collection of data stored together', [
      'Type of hardware',
      'Type of network',
      'Type of program',
    ]),
    level: 2,
  },
  {
    id: 'cs23',
    text: 'What is a folder/directory?',
    answers: A('cs23', 'Container for files', [
      'Type of file',
      'Type of program',
      'Type of hardware',
    ]),
    level: 2,
  },
  {
    id: 'cs24',
    text: 'What is a virus in computing?',
    answers: A('cs24', 'Malicious software', [
      'Helpful program',
      'Operating system',
      'Hardware component',
    ]),
    level: 2,
  },
  {
    id: 'cs25',
    text: 'What is encryption?',
    answers: A('cs25', 'Converting data to secure form', [
      'Deleting data',
      'Copying data',
      'Compressing data',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'cs26',
    text: 'What is Big O notation?',
    answers: A('cs26', 'Algorithm complexity measure', [
      'Programming language',
      'Data structure',
      'Operating system',
    ]),
    level: 3,
  },
  {
    id: 'cs27',
    text: 'What is O(1)?',
    answers: A('cs27', 'Constant time complexity', [
      'Linear time',
      'Quadratic time',
      'Logarithmic time',
    ]),
    level: 3,
  },
  {
    id: 'cs28',
    text: 'What is O(n)?',
    answers: A('cs28', 'Linear time complexity', [
      'Constant time',
      'Quadratic time',
      'Logarithmic time',
    ]),
    level: 3,
  },
  {
    id: 'cs29',
    text: 'What is O(log n)?',
    answers: A('cs29', 'Logarithmic time complexity', [
      'Linear time',
      'Constant time',
      'Quadratic time',
    ]),
    level: 3,
  },
  {
    id: 'cs30',
    text: 'What is O(n²)?',
    answers: A('cs30', 'Quadratic time complexity', [
      'Linear time',
      'Constant time',
      'Logarithmic time',
    ]),
    level: 3,
  },
  {
    id: 'cs31',
    text: 'What is a compiler?',
    answers: A('cs31', 'Translates source code to machine code', [
      'Runs code directly',
      'Edits code',
      'Debugs code',
    ]),
    level: 3,
  },
  {
    id: 'cs32',
    text: 'What is an interpreter?',
    answers: A('cs32', 'Executes code line by line', [
      'Compiles all at once',
      'Edits code',
      'Debugs code',
    ]),
    level: 3,
  },
  {
    id: 'cs33',
    text: 'What is recursion?',
    answers: A('cs33', 'Function calling itself', [
      'Loop',
      'Condition',
      'Variable',
    ]),
    level: 3,
  },
  {
    id: 'cs34',
    text: 'What is a stack overflow?',
    answers: A('cs34', 'Too many function calls', [
      'Memory leak',
      'Infinite loop',
      'Syntax error',
    ]),
    level: 3,
  },
  {
    id: 'cs35',
    text: 'What is a memory leak?',
    answers: A('cs35', 'Memory not freed after use', [
      'Stack overflow',
      'Infinite loop',
      'Syntax error',
    ]),
    level: 4,
  },
  {
    id: 'cs36',
    text: 'What is garbage collection?',
    answers: A('cs36', 'Automatic memory management', [
      'Manual memory management',
      'File deletion',
      'Data compression',
    ]),
    level: 4,
  },
  {
    id: 'cs37',
    text: 'What is a pointer?',
    answers: A('cs37', 'Variable storing memory address', [
      'Variable storing value',
      'Function',
      'Loop',
    ]),
    level: 4,
  },
  {
    id: 'cs38',
    text: 'What is a reference?',
    answers: A('cs38', 'Alias for another variable', [
      'Copy of variable',
      'Pointer',
      'Function',
    ]),
    level: 4,
  },
  {
    id: 'cs39',
    text: 'What is pass by value?',
    answers: A('cs39', 'Passing copy of data', [
      'Passing reference',
      'Passing pointer',
      'Passing address',
    ]),
    level: 4,
  },
  {
    id: 'cs40',
    text: 'What is pass by reference?',
    answers: A('cs40', 'Passing reference to data', [
      'Passing copy',
      'Passing value',
      'Passing nothing',
    ]),
    level: 4,
  },
  {
    id: 'cs41',
    text: 'What is a thread?',
    answers: A('cs41', 'Unit of execution within process', [
      'Type of process',
      'Type of memory',
      'Type of file',
    ]),
    level: 4,
  },
  {
    id: 'cs42',
    text: 'What is a process?',
    answers: A('cs42', 'Running instance of program', [
      'Type of thread',
      'Type of memory',
      'Type of file',
    ]),
    level: 4,
  },
  {
    id: 'cs43',
    text: 'What is concurrency?',
    answers: A('cs43', 'Multiple tasks making progress', [
      'Single task',
      'Sequential execution',
      'No execution',
    ]),
    level: 4,
  },
  {
    id: 'cs44',
    text: 'What is parallelism?',
    answers: A('cs44', 'Multiple tasks executing simultaneously', [
      'Sequential execution',
      'Single task',
      'Concurrency only',
    ]),
    level: 4,
  },
  {
    id: 'cs45',
    text: 'What is a deadlock?',
    answers: A('cs45', 'Processes waiting for each other indefinitely', [
      'Memory leak',
      'Stack overflow',
      'Infinite loop',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'cs46',
    text: 'What is the halting problem?',
    answers: A('cs46', 'Undecidable problem about program termination', [
      'Decidable problem',
      'Optimization problem',
      'Sorting problem',
    ]),
    level: 5,
  },
  {
    id: 'cs47',
    text: 'What is a Turing machine?',
    answers: A('cs47', 'Abstract model of computation', [
      'Physical computer',
      'Programming language',
      'Operating system',
    ]),
    level: 5,
  },
  {
    id: 'cs48',
    text: 'What is NP-complete?',
    answers: A('cs48', 'Problems verifiable in polynomial time', [
      'Problems solvable in polynomial time',
      'Unsolvable problems',
      'Simple problems',
    ]),
    level: 5,
  },
  {
    id: 'cs49',
    text: 'What is P vs NP?',
    answers: A('cs49', 'Whether P equals NP class', [
      'Proven P = NP',
      'Proven P ≠ NP',
      'Not a real problem',
    ]),
    level: 5,
  },
  {
    id: 'cs50',
    text: 'What is the Church-Turing thesis?',
    answers: A('cs50', 'Turing machines capture computability', [
      'Computers are limited',
      'All problems solvable',
      'Nothing is computable',
    ]),
    level: 5,
  },
  {
    id: 'cs51',
    text: 'What is lambda calculus?',
    answers: A('cs51', 'Formal system for computation', [
      'Programming language',
      'Operating system',
      'Data structure',
    ]),
    level: 6,
  },
  {
    id: 'cs52',
    text: 'What is a finite automaton?',
    answers: A('cs52', 'Machine with finite states', [
      'Infinite machine',
      'Turing machine',
      'Quantum computer',
    ]),
    level: 6,
  },
  {
    id: 'cs53',
    text: 'What is a context-free grammar?',
    answers: A('cs53', 'Grammar with production rules', [
      'Regular grammar',
      'Context-sensitive grammar',
      'Unrestricted grammar',
    ]),
    level: 6,
  },
  {
    id: 'cs54',
    text: 'What is the Chomsky hierarchy?',
    answers: A('cs54', 'Classification of formal grammars', [
      'Programming paradigms',
      'Data structures',
      'Algorithms',
    ]),
    level: 6,
  },
  {
    id: 'cs55',
    text: 'What is a regular expression?',
    answers: A('cs55', 'Pattern for string matching', [
      'Programming language',
      'Data structure',
      'Algorithm',
    ]),
    level: 6,
  },
  {
    id: 'cs56',
    text: 'What is the pumping lemma?',
    answers: A('cs56', 'Tool to prove languages non-regular', [
      'Sorting algorithm',
      'Data structure',
      'Programming technique',
    ]),
    level: 7,
  },
  {
    id: 'cs57',
    text: "What is Rice's theorem?",
    answers: A('cs57', 'Non-trivial properties of programs undecidable', [
      'All properties decidable',
      'Some properties decidable',
      'No properties exist',
    ]),
    level: 7,
  },
  {
    id: 'cs58',
    text: 'What is the Cook-Levin theorem?',
    answers: A('cs58', 'SAT is NP-complete', [
      'SAT is in P',
      'SAT is undecidable',
      'SAT is trivial',
    ]),
    level: 7,
  },
  {
    id: 'cs59',
    text: 'What is a reduction in complexity theory?',
    answers: A('cs59', 'Transforming one problem to another', [
      'Simplifying problem',
      'Solving problem',
      'Ignoring problem',
    ]),
    level: 7,
  },
  {
    id: 'cs60',
    text: 'What is space complexity?',
    answers: A('cs60', 'Memory used by algorithm', [
      'Time used',
      'Code length',
      'Number of operations',
    ]),
    level: 7,
  },
  {
    id: 'cs61',
    text: 'What is PSPACE?',
    answers: A('cs61', 'Problems solvable with polynomial space', [
      'Problems solvable with polynomial time',
      'Exponential space',
      'Constant space',
    ]),
    level: 8,
  },
  {
    id: 'cs62',
    text: 'What is BPP?',
    answers: A('cs62', 'Bounded-error probabilistic polynomial time', [
      'Deterministic polynomial time',
      'Exponential time',
      'Constant time',
    ]),
    level: 8,
  },
  {
    id: 'cs63',
    text: 'What is the PCP theorem?',
    answers: A('cs63', 'Probabilistically checkable proofs characterize NP', [
      'P = NP',
      'P ≠ NP',
      'NP = PSPACE',
    ]),
    level: 8,
  },
  {
    id: 'cs64',
    text: 'What is interactive proof?',
    answers: A('cs64', 'Proof system with prover and verifier', [
      'Written proof',
      'Automated proof',
      'No proof',
    ]),
    level: 8,
  },
  {
    id: 'cs65',
    text: 'What is IP = PSPACE?',
    answers: A('cs65', 'Interactive proofs equal PSPACE', [
      'IP equals P',
      'IP equals NP',
      'IP equals EXP',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'cs66',
    text: 'What is computer science?',
    answers: A('cs66', 'Study of computation and information', [
      'Study of computers only',
      'Study of hardware only',
      'Study of software only',
    ]),
    level: 1,
  },
  {
    id: 'cs67',
    text: 'What is a computer?',
    answers: A('cs67', 'Machine that processes information', [
      'Machine that only stores',
      'Machine that only displays',
      'Machine that only prints',
    ]),
    level: 1,
  },
  {
    id: 'cs68',
    text: 'What is data?',
    answers: A('cs68', 'Information stored or processed', [
      'Hardware',
      'Software',
      'Electricity',
    ]),
    level: 1,
  },
  {
    id: 'cs69',
    text: 'What is a program?',
    answers: A('cs69', 'Set of instructions for computer', [
      'Single instruction',
      'Hardware component',
      'Data only',
    ]),
    level: 1,
  },
  {
    id: 'cs70',
    text: 'What is binary?',
    answers: A('cs70', 'Number system with 0 and 1', [
      'Number system with 0-9',
      'Number system with letters',
      'No number system',
    ]),
    level: 1,
  },
  {
    id: 'cs71',
    text: 'What is a bit?',
    answers: A('cs71', 'Single binary digit', [
      'Eight binary digits',
      'Sixteen binary digits',
      'No digits',
    ]),
    level: 1,
  },
  {
    id: 'cs72',
    text: 'What is a byte?',
    answers: A('cs72', 'Eight bits', [
      'One bit',
      'Sixteen bits',
      'Thirty-two bits',
    ]),
    level: 1,
  },
  {
    id: 'cs73',
    text: 'What is memory?',
    answers: A('cs73', 'Storage for data and programs', [
      'Processing unit',
      'Display unit',
      'Input unit',
    ]),
    level: 1,
  },
  {
    id: 'cs74',
    text: 'What is a CPU?',
    answers: A('cs74', 'Central Processing Unit', [
      'Central Power Unit',
      'Computer Processing Unit',
      'Central Program Unit',
    ]),
    level: 1,
  },
  {
    id: 'cs75',
    text: 'What is input?',
    answers: A('cs75', 'Data entering computer', [
      'Data leaving computer',
      'Data stored',
      'Data processed',
    ]),
    level: 1,
  },
  {
    id: 'cs76',
    text: 'What is output?',
    answers: A('cs76', 'Data leaving computer', [
      'Data entering computer',
      'Data stored',
      'Data processed',
    ]),
    level: 2,
  },
  {
    id: 'cs77',
    text: 'What is storage?',
    answers: A('cs77', 'Keeping data for later', [
      'Processing data',
      'Displaying data',
      'Deleting data',
    ]),
    level: 2,
  },
  {
    id: 'cs78',
    text: 'What is RAM?',
    answers: A('cs78', 'Random Access Memory', [
      'Read Access Memory',
      'Run Access Memory',
      'Real Access Memory',
    ]),
    level: 2,
  },
  {
    id: 'cs79',
    text: 'What is ROM?',
    answers: A('cs79', 'Read Only Memory', [
      'Random Only Memory',
      'Run Only Memory',
      'Real Only Memory',
    ]),
    level: 2,
  },
  {
    id: 'cs80',
    text: 'What is a hard drive?',
    answers: A('cs80', 'Permanent storage device', [
      'Temporary storage',
      'Processing device',
      'Display device',
    ]),
    level: 2,
  },
  {
    id: 'cs81',
    text: 'What is an operating system?',
    answers: A('cs81', 'Software managing computer resources', [
      'Hardware component',
      'Application program',
      'Data file',
    ]),
    level: 2,
  },
  {
    id: 'cs82',
    text: 'What is a file system?',
    answers: A('cs82', 'Organization of files on storage', [
      'Random file placement',
      'No organization',
      'Hardware component',
    ]),
    level: 2,
  },
  {
    id: 'cs83',
    text: 'What is a network?',
    answers: A('cs83', 'Connected computers', [
      'Single computer',
      'No computers',
      'Hardware only',
    ]),
    level: 2,
  },
  {
    id: 'cs84',
    text: 'What is the internet?',
    answers: A('cs84', 'Global network of networks', [
      'Single network',
      'Local network',
      'No network',
    ]),
    level: 2,
  },
  {
    id: 'cs85',
    text: 'What is a website?',
    answers: A('cs85', 'Collection of web pages', [
      'Single page',
      'Program',
      'Hardware',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'cs86',
    text: 'What is an algorithm?',
    answers: A('cs86', 'Step-by-step problem-solving procedure', [
      'Random steps',
      'Single step',
      'No steps',
    ]),
    level: 3,
  },
  {
    id: 'cs87',
    text: 'What is complexity?',
    answers: A('cs87', 'Resource requirements of algorithm', [
      'Simplicity',
      'Speed only',
      'Memory only',
    ]),
    level: 3,
  },
  {
    id: 'cs88',
    text: 'What is Big O notation?',
    answers: A('cs88', 'Describing algorithm efficiency', [
      'Describing algorithm correctness',
      'Describing algorithm size',
      'No description',
    ]),
    level: 3,
  },
  {
    id: 'cs89',
    text: 'What is a compiler?',
    answers: A('cs89', 'Translates code to machine language', [
      'Runs code directly',
      'Stores code',
      'Deletes code',
    ]),
    level: 3,
  },
  {
    id: 'cs90',
    text: 'What is an interpreter?',
    answers: A('cs90', 'Executes code line by line', [
      'Translates all at once',
      'Stores code',
      'Deletes code',
    ]),
    level: 3,
  },
  {
    id: 'cs91',
    text: 'What is machine code?',
    answers: A('cs91', 'Instructions CPU understands', [
      'Human-readable code',
      'High-level code',
      'No code',
    ]),
    level: 3,
  },
  {
    id: 'cs92',
    text: 'What is assembly language?',
    answers: A('cs92', 'Low-level programming language', [
      'High-level language',
      'Machine code',
      'No language',
    ]),
    level: 3,
  },
  {
    id: 'cs93',
    text: 'What is a database?',
    answers: A('cs93', 'Organized collection of data', [
      'Random data',
      'Single data item',
      'No data',
    ]),
    level: 3,
  },
  {
    id: 'cs94',
    text: 'What is SQL?',
    answers: A('cs94', 'Structured Query Language', [
      'Simple Query Language',
      'Standard Query Language',
      'System Query Language',
    ]),
    level: 3,
  },
  {
    id: 'cs95',
    text: 'What is encryption?',
    answers: A('cs95', 'Converting data to unreadable form', [
      'Making data readable',
      'Deleting data',
      'Copying data',
    ]),
    level: 3,
  },
  {
    id: 'cs96',
    text: 'What is a process?',
    answers: A('cs96', 'Running program instance', [
      'Stored program',
      'Deleted program',
      'No program',
    ]),
    level: 4,
  },
  {
    id: 'cs97',
    text: 'What is a thread?',
    answers: A('cs97', 'Unit of execution within process', [
      'Entire process',
      'No execution',
      'Random execution',
    ]),
    level: 4,
  },
  {
    id: 'cs98',
    text: 'What is scheduling?',
    answers: A('cs98', 'Deciding which process runs', [
      'Running all processes',
      'Stopping all processes',
      'No decision',
    ]),
    level: 4,
  },
  {
    id: 'cs99',
    text: 'What is virtual memory?',
    answers: A('cs99', 'Using disk as extended RAM', [
      'Using RAM only',
      'Using disk only',
      'No memory',
    ]),
    level: 4,
  },
  {
    id: 'cs100',
    text: 'What is paging?',
    answers: A('cs100', 'Dividing memory into fixed blocks', [
      'Continuous memory',
      'No division',
      'Random division',
    ]),
    level: 4,
  },
  {
    id: 'cs101',
    text: 'What is caching?',
    answers: A('cs101', 'Storing frequently used data nearby', [
      'Storing all data far',
      'No storage',
      'Random storage',
    ]),
    level: 4,
  },
  {
    id: 'cs102',
    text: 'What is a protocol?',
    answers: A('cs102', 'Rules for communication', [
      'Random communication',
      'No rules',
      'Hardware',
    ]),
    level: 4,
  },
  {
    id: 'cs103',
    text: 'What is TCP/IP?',
    answers: A('cs103', 'Internet communication protocols', [
      'Single protocol',
      'No protocol',
      'Hardware',
    ]),
    level: 4,
  },
  {
    id: 'cs104',
    text: 'What is HTTP?',
    answers: A('cs104', 'Web communication protocol', [
      'Email protocol',
      'File protocol',
      'No protocol',
    ]),
    level: 4,
  },
  {
    id: 'cs105',
    text: 'What is an API?',
    answers: A('cs105', 'Application Programming Interface', [
      'Application Program Interface',
      'Automatic Programming Interface',
      'No interface',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'cs106',
    text: 'What is a Turing machine?',
    answers: A('cs106', 'Abstract model of computation', [
      'Physical machine',
      'Programming language',
      'No model',
    ]),
    level: 5,
  },
  {
    id: 'cs107',
    text: 'What is computability?',
    answers: A('cs107', 'What can be computed', [
      'What cannot be computed',
      'Speed of computation',
      'No computation',
    ]),
    level: 5,
  },
  {
    id: 'cs108',
    text: 'What is the halting problem?',
    answers: A('cs108', 'Undecidable problem about program termination', [
      'Decidable problem',
      'Easy problem',
      'No problem',
    ]),
    level: 5,
  },
  {
    id: 'cs109',
    text: 'What is P complexity class?',
    answers: A('cs109', 'Problems solvable in polynomial time', [
      'Exponential time',
      'Constant time',
      'No time',
    ]),
    level: 5,
  },
  {
    id: 'cs110',
    text: 'What is NP complexity class?',
    answers: A('cs110', 'Problems verifiable in polynomial time', [
      'Problems solvable in polynomial time',
      'No verification',
      'Random verification',
    ]),
    level: 5,
  },
  {
    id: 'cs111',
    text: 'What is a finite automaton?',
    answers: A('cs111', 'Machine with finite states', [
      'Machine with infinite states',
      'No machine',
      'Random machine',
    ]),
    level: 6,
  },
  {
    id: 'cs112',
    text: 'What is a regular language?',
    answers: A('cs112', 'Language recognized by finite automaton', [
      'Language recognized by Turing machine',
      'No language',
      'Random language',
    ]),
    level: 6,
  },
  {
    id: 'cs113',
    text: 'What is a context-free grammar?',
    answers: A('cs113', 'Grammar with single non-terminal on left', [
      'Grammar with multiple on left',
      'No grammar',
      'Random grammar',
    ]),
    level: 6,
  },
  {
    id: 'cs114',
    text: 'What is a pushdown automaton?',
    answers: A('cs114', 'Automaton with stack', [
      'Automaton without stack',
      'No automaton',
      'Random automaton',
    ]),
    level: 6,
  },
  {
    id: 'cs115',
    text: 'What is the Church-Turing thesis?',
    answers: A('cs115', 'Turing machines capture computability', [
      'Turing machines are limited',
      'No thesis',
      'Random thesis',
    ]),
    level: 6,
  },
  {
    id: 'cs116',
    text: 'What is NP-complete?',
    answers: A('cs116', 'Hardest problems in NP', [
      'Easiest problems',
      'No problems',
      'Random problems',
    ]),
    level: 7,
  },
  {
    id: 'cs117',
    text: 'What is reduction?',
    answers: A('cs117', 'Transforming one problem to another', [
      'Solving problem directly',
      'No transformation',
      'Random transformation',
    ]),
    level: 7,
  },
  {
    id: 'cs118',
    text: 'What is SAT problem?',
    answers: A('cs118', 'Boolean satisfiability problem', [
      'Sorting problem',
      'Searching problem',
      'No problem',
    ]),
    level: 7,
  },
  {
    id: 'cs119',
    text: 'What is Cook-Levin theorem?',
    answers: A('cs119', 'SAT is NP-complete', [
      'SAT is in P',
      'SAT is undecidable',
      'No theorem',
    ]),
    level: 7,
  },
  {
    id: 'cs120',
    text: 'What is space complexity?',
    answers: A('cs120', 'Memory required by algorithm', [
      'Time required',
      'Code size',
      'No requirement',
    ]),
    level: 7,
  },
  {
    id: 'cs121',
    text: 'What is PSPACE?',
    answers: A('cs121', 'Problems solvable with polynomial space', [
      'Polynomial time',
      'Exponential space',
      'No space',
    ]),
    level: 8,
  },
  {
    id: 'cs122',
    text: 'What is EXPTIME?',
    answers: A('cs122', 'Problems solvable in exponential time', [
      'Polynomial time',
      'Constant time',
      'No time',
    ]),
    level: 8,
  },
  {
    id: 'cs123',
    text: 'What is BPP?',
    answers: A('cs123', 'Bounded-error probabilistic polynomial time', [
      'Deterministic polynomial',
      'No error',
      'Random class',
    ]),
    level: 8,
  },
  {
    id: 'cs124',
    text: 'What is the complexity zoo?',
    answers: A('cs124', 'Collection of complexity classes', [
      'Single class',
      'No classes',
      'Random classes',
    ]),
    level: 8,
  },
  {
    id: 'cs125',
    text: 'What is quantum computing?',
    answers: A('cs125', 'Computing using quantum mechanics', [
      'Classical computing',
      'No computing',
      'Random computing',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'cs126',
    text: 'What is a computer?',
    answers: A('cs126', 'Electronic device that processes data', [
      'Mechanical device',
      'Musical instrument',
      'Vehicle',
    ]),
    level: 1,
  },
  {
    id: 'cs127',
    text: 'What is hardware?',
    answers: A('cs127', 'Physical parts of computer', [
      'Programs',
      'Data',
      'Internet',
    ]),
    level: 1,
  },
  {
    id: 'cs128',
    text: 'What is software?',
    answers: A('cs128', 'Programs that run on computer', [
      'Physical parts',
      'Cables',
      'Keyboard',
    ]),
    level: 1,
  },
  {
    id: 'cs129',
    text: 'What is a keyboard?',
    answers: A('cs129', 'Device for typing', [
      'Device for clicking',
      'Device for viewing',
      'Device for printing',
    ]),
    level: 1,
  },
  {
    id: 'cs130',
    text: 'What is a mouse?',
    answers: A('cs130', 'Device for pointing and clicking', [
      'Device for typing',
      'Device for viewing',
      'Device for printing',
    ]),
    level: 1,
  },
  {
    id: 'cs131',
    text: 'What is a monitor?',
    answers: A('cs131', 'Screen that displays output', [
      'Device for typing',
      'Device for clicking',
      'Device for printing',
    ]),
    level: 1,
  },
  {
    id: 'cs132',
    text: 'What is a printer?',
    answers: A('cs132', 'Device that prints documents', [
      'Device for typing',
      'Device for clicking',
      'Device for viewing',
    ]),
    level: 1,
  },
  {
    id: 'cs133',
    text: 'What is a CPU?',
    answers: A('cs133', 'Brain of the computer', [
      'Memory',
      'Storage',
      'Screen',
    ]),
    level: 1,
  },
  {
    id: 'cs134',
    text: 'What is RAM?',
    answers: A('cs134', 'Temporary memory', [
      'Permanent storage',
      'Processor',
      'Screen',
    ]),
    level: 1,
  },
  {
    id: 'cs135',
    text: 'What is a hard drive?',
    answers: A('cs135', 'Permanent storage device', [
      'Temporary memory',
      'Processor',
      'Screen',
    ]),
    level: 1,
  },
  {
    id: 'cs136',
    text: 'What is a file?',
    answers: A('cs136', 'Collection of data with a name', [
      'Folder',
      'Program',
      'Hardware',
    ]),
    level: 1,
  },
  {
    id: 'cs137',
    text: 'What is a folder?',
    answers: A('cs137', 'Container for files', [
      'Single file',
      'Program',
      'Hardware',
    ]),
    level: 1,
  },
  {
    id: 'cs138',
    text: 'What is an icon?',
    answers: A('cs138', 'Small picture representing file or program', [
      'Large picture',
      'Text',
      'Sound',
    ]),
    level: 1,
  },
  {
    id: 'cs139',
    text: 'What is a desktop?',
    answers: A('cs139', 'Main screen of computer', [
      'Keyboard',
      'Mouse',
      'Printer',
    ]),
    level: 1,
  },
  {
    id: 'cs140',
    text: 'What is a window?',
    answers: A('cs140', 'Rectangular area showing program', [
      'Physical window',
      'Door',
      'Wall',
    ]),
    level: 1,
  },
  {
    id: 'cs141',
    text: 'What is clicking?',
    answers: A('cs141', 'Pressing mouse button', [
      'Pressing keyboard',
      'Looking at screen',
      'Printing',
    ]),
    level: 1,
  },
  {
    id: 'cs142',
    text: 'What is double-clicking?',
    answers: A('cs142', 'Clicking twice quickly', [
      'Clicking once',
      'Right-clicking',
      'Dragging',
    ]),
    level: 1,
  },
  {
    id: 'cs143',
    text: 'What is dragging?',
    answers: A('cs143', 'Moving while holding mouse button', [
      'Clicking',
      'Double-clicking',
      'Right-clicking',
    ]),
    level: 1,
  },
  {
    id: 'cs144',
    text: 'What is scrolling?',
    answers: A('cs144', 'Moving up or down in document', [
      'Clicking',
      'Typing',
      'Printing',
    ]),
    level: 1,
  },
  {
    id: 'cs145',
    text: 'What is typing?',
    answers: A('cs145', 'Entering text with keyboard', [
      'Clicking mouse',
      'Looking at screen',
      'Printing',
    ]),
    level: 1,
  },
  {
    id: 'cs146',
    text: 'What is saving?',
    answers: A('cs146', 'Storing work to disk', [
      'Deleting work',
      'Printing work',
      'Closing work',
    ]),
    level: 1,
  },
  {
    id: 'cs147',
    text: 'What is opening?',
    answers: A('cs147', 'Loading file to view or edit', [
      'Saving file',
      'Deleting file',
      'Printing file',
    ]),
    level: 1,
  },
  {
    id: 'cs148',
    text: 'What is closing?',
    answers: A('cs148', 'Shutting a window or program', [
      'Opening',
      'Saving',
      'Printing',
    ]),
    level: 1,
  },
  {
    id: 'cs149',
    text: 'What is deleting?',
    answers: A('cs149', 'Removing file or data', [
      'Saving',
      'Opening',
      'Printing',
    ]),
    level: 1,
  },
  {
    id: 'cs150',
    text: 'What is copying?',
    answers: A('cs150', 'Making duplicate of data', [
      'Deleting data',
      'Moving data',
      'Saving data',
    ]),
    level: 1,
  },
  {
    id: 'cs151',
    text: 'What is pasting?',
    answers: A('cs151', 'Inserting copied data', [
      'Copying data',
      'Deleting data',
      'Saving data',
    ]),
    level: 1,
  },
  {
    id: 'cs152',
    text: 'What is cutting?',
    answers: A('cs152', 'Removing data to paste elsewhere', [
      'Copying',
      'Deleting permanently',
      'Saving',
    ]),
    level: 1,
  },
  {
    id: 'cs153',
    text: 'What is undo?',
    answers: A('cs153', 'Reversing last action', [
      'Doing again',
      'Saving',
      'Deleting',
    ]),
    level: 1,
  },
  {
    id: 'cs154',
    text: 'What is redo?',
    answers: A('cs154', 'Repeating undone action', [
      'Undoing',
      'Saving',
      'Deleting',
    ]),
    level: 1,
  },
  {
    id: 'cs155',
    text: 'What is the internet?',
    answers: A('cs155', 'Global network of computers', [
      'Single computer',
      'Local network',
      'Software',
    ]),
    level: 1,
  },
  {
    id: 'cs156',
    text: 'What is a website?',
    answers: A('cs156', 'Collection of web pages', [
      'Single page',
      'Email',
      'File',
    ]),
    level: 1,
  },
  {
    id: 'cs157',
    text: 'What is a web browser?',
    answers: A('cs157', 'Program to view websites', [
      'Program to edit text',
      'Program to play music',
      'Program to draw',
    ]),
    level: 1,
  },
  {
    id: 'cs158',
    text: 'What is a URL?',
    answers: A('cs158', 'Web address', [
      'Email address',
      'Phone number',
      'File name',
    ]),
    level: 1,
  },
  {
    id: 'cs159',
    text: 'What is email?',
    answers: A('cs159', 'Electronic mail', [
      'Physical mail',
      'Website',
      'File',
    ]),
    level: 1,
  },
  {
    id: 'cs160',
    text: 'What is downloading?',
    answers: A('cs160', 'Getting file from internet', [
      'Sending file',
      'Deleting file',
      'Creating file',
    ]),
    level: 1,
  },
  {
    id: 'cs161',
    text: 'What is uploading?',
    answers: A('cs161', 'Sending file to internet', [
      'Getting file',
      'Deleting file',
      'Creating file',
    ]),
    level: 1,
  },
  {
    id: 'cs162',
    text: 'What is a password?',
    answers: A('cs162', 'Secret code for access', [
      'Username',
      'Email',
      'Website',
    ]),
    level: 1,
  },
  {
    id: 'cs163',
    text: 'What is a username?',
    answers: A('cs163', 'Name identifying user', [
      'Password',
      'Email',
      'Website',
    ]),
    level: 1,
  },
  {
    id: 'cs164',
    text: 'What is logging in?',
    answers: A('cs164', 'Entering account with credentials', [
      'Logging out',
      'Creating account',
      'Deleting account',
    ]),
    level: 1,
  },
  {
    id: 'cs165',
    text: 'What is logging out?',
    answers: A('cs165', 'Exiting account', [
      'Logging in',
      'Creating account',
      'Deleting account',
    ]),
    level: 1,
  },
  {
    id: 'cs166',
    text: 'What is a virus?',
    answers: A('cs166', 'Harmful program', [
      'Helpful program',
      'Hardware',
      'Website',
    ]),
    level: 1,
  },
  {
    id: 'cs167',
    text: 'What is antivirus?',
    answers: A('cs167', 'Program that protects from viruses', [
      'Virus itself',
      'Hardware',
      'Website',
    ]),
    level: 1,
  },
  {
    id: 'cs168',
    text: 'What is a backup?',
    answers: A('cs168', 'Copy of data for safety', [
      'Original data',
      'Deleted data',
      'Virus',
    ]),
    level: 1,
  },
  {
    id: 'cs169',
    text: 'What is Wi-Fi?',
    answers: A('cs169', 'Wireless internet connection', [
      'Wired connection',
      'Software',
      'Hardware',
    ]),
    level: 1,
  },
  {
    id: 'cs170',
    text: 'What is Bluetooth?',
    answers: A('cs170', 'Wireless connection for devices', [
      'Wired connection',
      'Internet',
      'Software',
    ]),
    level: 1,
  },
  {
    id: 'cs171',
    text: 'What is a USB?',
    answers: A('cs171', 'Universal Serial Bus connector', [
      'Wireless connection',
      'Software',
      'Website',
    ]),
    level: 1,
  },
  {
    id: 'cs172',
    text: 'What is a flash drive?',
    answers: A('cs172', 'Portable storage device', [
      'Internal storage',
      'RAM',
      'CPU',
    ]),
    level: 1,
  },
  {
    id: 'cs173',
    text: 'What is a laptop?',
    answers: A('cs173', 'Portable computer', [
      'Desktop computer',
      'Tablet',
      'Phone',
    ]),
    level: 1,
  },
  {
    id: 'cs174',
    text: 'What is a tablet?',
    answers: A('cs174', 'Touchscreen portable device', [
      'Laptop',
      'Desktop',
      'Phone',
    ]),
    level: 1,
  },
  {
    id: 'cs175',
    text: 'What is a smartphone?',
    answers: A('cs175', 'Phone with computer features', [
      'Basic phone',
      'Laptop',
      'Tablet',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'cs176',
    text: 'What is an operating system?',
    answers: A('cs176', 'Software managing computer resources', [
      'Hardware',
      'Application',
      'Website',
    ]),
    level: 2,
  },
  {
    id: 'cs177',
    text: 'What is Windows?',
    answers: A('cs177', 'Operating system by Microsoft', [
      'Web browser',
      'Application',
      'Hardware',
    ]),
    level: 2,
  },
  {
    id: 'cs178',
    text: 'What is macOS?',
    answers: A('cs178', 'Operating system by Apple', [
      'Web browser',
      'Application',
      'Hardware',
    ]),
    level: 2,
  },
  {
    id: 'cs179',
    text: 'What is Linux?',
    answers: A('cs179', 'Open-source operating system', [
      'Closed-source OS',
      'Application',
      'Hardware',
    ]),
    level: 2,
  },
  {
    id: 'cs180',
    text: 'What is an application?',
    answers: A('cs180', 'Program for specific task', [
      'Operating system',
      'Hardware',
      'Website',
    ]),
    level: 2,
  },
  {
    id: 'cs181',
    text: 'What is a database?',
    answers: A('cs181', 'Organized collection of data', [
      'Single file',
      'Program',
      'Hardware',
    ]),
    level: 2,
  },
  {
    id: 'cs182',
    text: 'What is a server?',
    answers: A('cs182', 'Computer providing services', [
      'Personal computer',
      'Printer',
      'Monitor',
    ]),
    level: 2,
  },
  {
    id: 'cs183',
    text: 'What is a client?',
    answers: A('cs183', 'Computer requesting services', [
      'Server',
      'Printer',
      'Monitor',
    ]),
    level: 2,
  },
  {
    id: 'cs184',
    text: 'What is a network?',
    answers: A('cs184', 'Connected computers', [
      'Single computer',
      'Software',
      'Website',
    ]),
    level: 2,
  },
  {
    id: 'cs185',
    text: 'What is LAN?',
    answers: A('cs185', 'Local Area Network', [
      'Wide Area Network',
      'Internet',
      'Intranet',
    ]),
    level: 2,
  },
  {
    id: 'cs186',
    text: 'What is WAN?',
    answers: A('cs186', 'Wide Area Network', [
      'Local Area Network',
      'Personal Network',
      'Home Network',
    ]),
    level: 2,
  },
  {
    id: 'cs187',
    text: 'What is an IP address?',
    answers: A('cs187', 'Unique identifier for device on network', [
      'Email address',
      'Web address',
      'Physical address',
    ]),
    level: 2,
  },
  {
    id: 'cs188',
    text: 'What is HTTP?',
    answers: A('cs188', 'Protocol for web communication', [
      'Email protocol',
      'File protocol',
      'Security protocol',
    ]),
    level: 2,
  },
  {
    id: 'cs189',
    text: 'What is HTTPS?',
    answers: A('cs189', 'Secure HTTP', [
      'Insecure HTTP',
      'Email protocol',
      'File protocol',
    ]),
    level: 2,
  },
  {
    id: 'cs190',
    text: 'What is HTML?',
    answers: A('cs190', 'Language for web pages', [
      'Programming language',
      'Database language',
      'Style language',
    ]),
    level: 2,
  },
  {
    id: 'cs191',
    text: 'What is CSS?',
    answers: A('cs191', 'Language for styling web pages', [
      'Programming language',
      'Database language',
      'Markup language',
    ]),
    level: 2,
  },
  {
    id: 'cs192',
    text: 'What is JavaScript?',
    answers: A('cs192', 'Programming language for web', [
      'Markup language',
      'Style language',
      'Database language',
    ]),
    level: 2,
  },
  {
    id: 'cs193',
    text: 'What is a bit?',
    answers: A('cs193', 'Smallest unit of data (0 or 1)', [
      '8 bits',
      '1000 bits',
      'Large unit',
    ]),
    level: 2,
  },
  {
    id: 'cs194',
    text: 'What is a byte?',
    answers: A('cs194', '8 bits', ['1 bit', '1000 bits', '1 million bits']),
    level: 2,
  },
  {
    id: 'cs195',
    text: 'What is a kilobyte?',
    answers: A('cs195', 'About 1000 bytes', [
      '1 byte',
      '1 million bytes',
      '1 billion bytes',
    ]),
    level: 2,
  },
  {
    id: 'cs196',
    text: 'What is a megabyte?',
    answers: A('cs196', 'About 1 million bytes', [
      '1000 bytes',
      '1 billion bytes',
      '1 byte',
    ]),
    level: 2,
  },
  {
    id: 'cs197',
    text: 'What is a gigabyte?',
    answers: A('cs197', 'About 1 billion bytes', [
      '1 million bytes',
      '1000 bytes',
      '1 byte',
    ]),
    level: 2,
  },
  {
    id: 'cs198',
    text: 'What is binary?',
    answers: A('cs198', 'Number system with 0 and 1', [
      'Decimal system',
      'Hexadecimal',
      'Octal',
    ]),
    level: 2,
  },
  {
    id: 'cs199',
    text: 'What is encryption?',
    answers: A('cs199', 'Converting data to secret code', [
      'Decrypting data',
      'Deleting data',
      'Copying data',
    ]),
    level: 2,
  },
  {
    id: 'cs200',
    text: 'What is decryption?',
    answers: A('cs200', 'Converting secret code back to data', [
      'Encrypting',
      'Deleting',
      'Copying',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-8: More Advanced Questions =====
  {
    id: 'cs201',
    text: 'What is cloud computing?',
    answers: A('cs201', 'Computing services over internet', [
      'Local computing',
      'No computing',
      'Hardware',
    ]),
    level: 3,
  },
  {
    id: 'cs202',
    text: 'What is virtualization?',
    answers: A('cs202', 'Creating virtual versions of resources', [
      'Physical resources only',
      'No resources',
      'Hardware',
    ]),
    level: 3,
  },
  {
    id: 'cs203',
    text: 'What is a virtual machine?',
    answers: A('cs203', 'Software emulating computer', [
      'Physical computer',
      'Network',
      'Website',
    ]),
    level: 3,
  },
  {
    id: 'cs204',
    text: 'What is containerization?',
    answers: A('cs204', 'Packaging applications with dependencies', [
      'Virtual machines',
      'Physical servers',
      'Networks',
    ]),
    level: 4,
  },
  {
    id: 'cs205',
    text: 'What is Docker?',
    answers: A('cs205', 'Container platform', [
      'Virtual machine',
      'Operating system',
      'Programming language',
    ]),
    level: 4,
  },
  {
    id: 'cs206',
    text: 'What is Kubernetes?',
    answers: A('cs206', 'Container orchestration', [
      'Container creation',
      'Virtual machine',
      'Operating system',
    ]),
    level: 5,
  },
  {
    id: 'cs207',
    text: 'What is microservices?',
    answers: A('cs207', 'Architecture of small independent services', [
      'Monolithic architecture',
      'Single service',
      'No services',
    ]),
    level: 4,
  },
  {
    id: 'cs208',
    text: 'What is API?',
    answers: A('cs208', 'Application Programming Interface', [
      'User interface',
      'Hardware interface',
      'Network interface',
    ]),
    level: 3,
  },
  {
    id: 'cs209',
    text: 'What is REST?',
    answers: A('cs209', 'Architectural style for APIs', [
      'Programming language',
      'Database',
      'Operating system',
    ]),
    level: 4,
  },
  {
    id: 'cs210',
    text: 'What is JSON?',
    answers: A('cs210', 'Data format for exchange', [
      'Programming language',
      'Database',
      'Operating system',
    ]),
    level: 3,
  },
  {
    id: 'cs211',
    text: 'What is XML?',
    answers: A('cs211', 'Markup language for data', [
      'Programming language',
      'Style language',
      'Database',
    ]),
    level: 3,
  },
  {
    id: 'cs212',
    text: 'What is SQL?',
    answers: A('cs212', 'Language for databases', [
      'Programming language',
      'Markup language',
      'Style language',
    ]),
    level: 3,
  },
  {
    id: 'cs213',
    text: 'What is NoSQL?',
    answers: A('cs213', 'Non-relational databases', [
      'Relational databases',
      'No databases',
      'SQL variant',
    ]),
    level: 4,
  },
  {
    id: 'cs214',
    text: 'What is machine learning?',
    answers: A('cs214', 'Computers learning from data', [
      'Manual programming',
      'No learning',
      'Hardware',
    ]),
    level: 4,
  },
  {
    id: 'cs215',
    text: 'What is artificial intelligence?',
    answers: A('cs215', 'Machines simulating intelligence', [
      'Human intelligence',
      'No intelligence',
      'Hardware',
    ]),
    level: 3,
  },
  {
    id: 'cs216',
    text: 'What is deep learning?',
    answers: A('cs216', 'ML using neural networks', [
      'Shallow learning',
      'No learning',
      'Manual programming',
    ]),
    level: 5,
  },
  {
    id: 'cs217',
    text: 'What is a neural network?',
    answers: A('cs217', 'Computing system inspired by brain', [
      'Traditional algorithm',
      'Database',
      'Network cable',
    ]),
    level: 5,
  },
  {
    id: 'cs218',
    text: 'What is big data?',
    answers: A('cs218', 'Very large datasets', [
      'Small data',
      'No data',
      'Single file',
    ]),
    level: 4,
  },
  {
    id: 'cs219',
    text: 'What is data mining?',
    answers: A('cs219', 'Discovering patterns in data', [
      'Storing data',
      'Deleting data',
      'Creating data',
    ]),
    level: 4,
  },
  {
    id: 'cs220',
    text: 'What is blockchain?',
    answers: A('cs220', 'Distributed ledger technology', [
      'Centralized database',
      'Single server',
      'No storage',
    ]),
    level: 5,
  },
  {
    id: 'cs221',
    text: 'What is cryptography?',
    answers: A('cs221', 'Secure communication techniques', [
      'Insecure communication',
      'No communication',
      'Hardware',
    ]),
    level: 4,
  },
  {
    id: 'cs222',
    text: 'What is hashing?',
    answers: A('cs222', 'Converting data to fixed-size value', [
      'Encrypting',
      'Compressing',
      'Deleting',
    ]),
    level: 4,
  },
  {
    id: 'cs223',
    text: 'What is a firewall?',
    answers: A('cs223', 'Network security system', [
      'Physical wall',
      'Software application',
      'Hardware only',
    ]),
    level: 3,
  },
  {
    id: 'cs224',
    text: 'What is malware?',
    answers: A('cs224', 'Malicious software', [
      'Helpful software',
      'Hardware',
      'Website',
    ]),
    level: 3,
  },
  {
    id: 'cs225',
    text: 'What is phishing?',
    answers: A('cs225', 'Fraudulent attempt to get information', [
      'Legitimate request',
      'Fishing',
      'Programming',
    ]),
    level: 3,
  },
];
  // ===== LEVEL 6-8: More Advanced Questions =====
  { id: 'cs226', text: 'What is ransomware?', answers: A('cs226', 'Malware that encrypts files for ransom', ['Helpful software', 'Antivirus', 'Firewall']), level: 4 },
  { id: 'cs227', text: 'What is two-factor authentication?', answers: A('cs227', 'Security using two verification methods', ['Single password', 'No security', 'Random security']), level: 3 },
  { id: 'cs228', text: 'What is a VPN?', answers: A('cs228', 'Virtual Private Network', ['Physical network', 'Public network', 'No network']), level: 3 },
  { id: 'cs229', text: 'What is SSH?', answers: A('cs229', 'Secure Shell protocol', ['Insecure protocol', 'No protocol', 'Random protocol']), level: 4 },
  { id: 'cs230', text: 'What is FTP?', answers: A('cs230', 'File Transfer Protocol', ['Email protocol', 'Web protocol', 'No protocol']), level: 3 },
  { id: 'cs231', text: 'What is DNS?', answers: A('cs231', 'Domain Name System', ['File system', 'Operating system', 'No system']), level: 3 },
  { id: 'cs232', text: 'What is TCP/IP?', answers: A('cs232', 'Internet communication protocols', ['Single protocol', 'No protocol', 'Random protocol']), level: 4 },
  { id: 'cs233', text: 'What is a router?', answers: A('cs233', 'Device directing network traffic', ['Computer', 'Monitor', 'Keyboard']), level: 3 },
  { id: 'cs234', text: 'What is a switch?', answers: A('cs234', 'Device connecting network devices', ['Router', 'Computer', 'Monitor']), level: 4 },
  { id: 'cs235', text: 'What is bandwidth?', answers: A('cs235', 'Data transfer capacity', ['Physical width', 'Height', 'Weight']), level: 3 },
  { id: 'cs236', text: 'What is latency?', answers: A('cs236', 'Delay in data transfer', ['Speed', 'Bandwidth', 'No delay']), level: 4 },
  { id: 'cs237', text: 'What is a packet?', answers: A('cs237', 'Unit of data in network', ['Physical package', 'File', 'Program']), level: 4 },
  { id: 'cs238', text: 'What is a protocol?', answers: A('cs238', 'Rules for communication', ['Random rules', 'No rules', 'Physical rules']), level: 3 },
  { id: 'cs239', text: 'What is open source?', answers: A('cs239', 'Software with public source code', ['Closed source', 'No source', 'Random source']), level: 3 },
  { id: 'cs240', text: 'What is version control?', answers: A('cs240', 'Tracking changes to code', ['No tracking', 'Random changes', 'Deleting code']), level: 4 },
  { id: 'cs241', text: 'What is Git?', answers: A('cs241', 'Version control system', ['Programming language', 'Operating system', 'Database']), level: 4 },
  { id: 'cs242', text: 'What is a repository?', answers: A('cs242', 'Storage for code and history', ['Single file', 'No storage', 'Random storage']), level: 4 },
  { id: 'cs243', text: 'What is a commit?', answers: A('cs243', 'Saved change in version control', ['Deleted change', 'No change', 'Random change']), level: 4 },
  { id: 'cs244', text: 'What is a branch?', answers: A('cs244', 'Parallel version of code', ['Single version', 'No version', 'Random version']), level: 5 },
  { id: 'cs245', text: 'What is merging?', answers: A('cs245', 'Combining code branches', ['Separating code', 'Deleting code', 'No action']), level: 5 },
  { id: 'cs246', text: 'What is CI/CD?', answers: A('cs246', 'Continuous Integration/Deployment', ['Manual deployment', 'No deployment', 'Random deployment']), level: 5 },
  { id: 'cs247', text: 'What is DevOps?', answers: A('cs247', 'Development and operations practices', ['Only development', 'Only operations', 'No practices']), level: 5 },
  { id: 'cs248', text: 'What is agile?', answers: A('cs248', 'Iterative development methodology', ['Waterfall', 'No methodology', 'Random methodology']), level: 5 },
  { id: 'cs249', text: 'What is scrum?', answers: A('cs249', 'Agile framework with sprints', ['Waterfall', 'No framework', 'Random framework']), level: 5 },
  { id: 'cs250', text: 'What is a sprint?', answers: A('cs250', 'Short development cycle', ['Long cycle', 'No cycle', 'Random cycle']), level: 5 },
];
