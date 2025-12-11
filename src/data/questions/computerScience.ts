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
];
