import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const programmingQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'prg1',
    text: 'What is a variable?',
    answers: A('prg1', 'Named storage for data', [
      'Function',
      'Loop',
      'Condition',
    ]),
    level: 1,
  },
  {
    id: 'prg2',
    text: 'What is a function?',
    answers: A('prg2', 'Reusable block of code', [
      'Variable',
      'Loop',
      'Condition',
    ]),
    level: 1,
  },
  {
    id: 'prg3',
    text: 'What is a loop?',
    answers: A('prg3', 'Code that repeats', [
      'Variable',
      'Function',
      'Condition',
    ]),
    level: 1,
  },
  {
    id: 'prg4',
    text: 'What is a condition/if statement?',
    answers: A('prg4', 'Code that runs based on true/false', [
      'Loop',
      'Variable',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'prg5',
    text: 'What is a string?',
    answers: A('prg5', 'Sequence of characters', [
      'Number',
      'Boolean',
      'Array',
    ]),
    level: 1,
  },
  {
    id: 'prg6',
    text: 'What is an integer?',
    answers: A('prg6', 'Whole number', ['Decimal number', 'String', 'Boolean']),
    level: 1,
  },
  {
    id: 'prg7',
    text: 'What is a boolean?',
    answers: A('prg7', 'True or false value', ['Number', 'String', 'Array']),
    level: 1,
  },
  {
    id: 'prg8',
    text: 'What is an array?',
    answers: A('prg8', 'Collection of elements', [
      'Single value',
      'Function',
      'Loop',
    ]),
    level: 1,
  },
  {
    id: 'prg9',
    text: 'What is a comment in code?',
    answers: A('prg9', 'Text ignored by compiler', [
      'Executable code',
      'Variable',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'prg10',
    text: 'What is debugging?',
    answers: A('prg10', 'Finding and fixing errors', [
      'Writing code',
      'Running code',
      'Deleting code',
    ]),
    level: 1,
  },
  {
    id: 'prg11',
    text: 'What is a syntax error?',
    answers: A('prg11', 'Error in code structure', [
      'Logic error',
      'Runtime error',
      'No error',
    ]),
    level: 1,
  },
  {
    id: 'prg12',
    text: 'What is a runtime error?',
    answers: A('prg12', 'Error during execution', [
      'Syntax error',
      'Logic error',
      'Compile error',
    ]),
    level: 1,
  },
  {
    id: 'prg13',
    text: 'What is a logic error?',
    answers: A('prg13', 'Code runs but gives wrong result', [
      'Syntax error',
      'Runtime error',
      'Compile error',
    ]),
    level: 1,
  },
  {
    id: 'prg14',
    text: 'What is an IDE?',
    answers: A('prg14', 'Integrated Development Environment', [
      'Programming language',
      'Operating system',
      'Database',
    ]),
    level: 1,
  },
  {
    id: 'prg15',
    text: 'What is source code?',
    answers: A('prg15', 'Human-readable program text', [
      'Machine code',
      'Binary code',
      'Compiled code',
    ]),
    level: 1,
  },
  {
    id: 'prg16',
    text: 'What is a parameter?',
    answers: A('prg16', 'Input to a function', [
      'Output of function',
      'Return value',
      'Variable name',
    ]),
    level: 2,
  },
  {
    id: 'prg17',
    text: 'What is a return value?',
    answers: A('prg17', 'Output from a function', [
      'Input to function',
      'Parameter',
      'Variable',
    ]),
    level: 2,
  },
  {
    id: 'prg18',
    text: 'What is scope?',
    answers: A('prg18', 'Where variable is accessible', [
      'Variable type',
      'Variable value',
      'Variable name',
    ]),
    level: 2,
  },
  {
    id: 'prg19',
    text: 'What is a global variable?',
    answers: A('prg19', 'Variable accessible everywhere', [
      'Local variable',
      'Constant',
      'Parameter',
    ]),
    level: 2,
  },
  {
    id: 'prg20',
    text: 'What is a local variable?',
    answers: A('prg20', 'Variable accessible in limited scope', [
      'Global variable',
      'Constant',
      'Parameter',
    ]),
    level: 2,
  },
  {
    id: 'prg21',
    text: 'What is a constant?',
    answers: A('prg21', 'Value that cannot change', [
      'Variable',
      'Function',
      'Loop',
    ]),
    level: 2,
  },
  {
    id: 'prg22',
    text: 'What is concatenation?',
    answers: A('prg22', 'Joining strings together', [
      'Splitting strings',
      'Comparing strings',
      'Deleting strings',
    ]),
    level: 2,
  },
  {
    id: 'prg23',
    text: 'What is an operator?',
    answers: A('prg23', 'Symbol for operation (+, -, etc.)', [
      'Variable',
      'Function',
      'Loop',
    ]),
    level: 2,
  },
  {
    id: 'prg24',
    text: 'What is assignment?',
    answers: A('prg24', 'Giving value to variable', [
      'Comparing values',
      'Adding values',
      'Deleting values',
    ]),
    level: 2,
  },
  {
    id: 'prg25',
    text: 'What is comparison?',
    answers: A('prg25', 'Checking if values are equal', [
      'Assignment',
      'Addition',
      'Deletion',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'prg26',
    text: 'What is object-oriented programming?',
    answers: A('prg26', 'Programming with objects and classes', [
      'Functional programming',
      'Procedural programming',
      'Logic programming',
    ]),
    level: 3,
  },
  {
    id: 'prg27',
    text: 'What is a class?',
    answers: A('prg27', 'Blueprint for objects', [
      'Instance of object',
      'Function',
      'Variable',
    ]),
    level: 3,
  },
  {
    id: 'prg28',
    text: 'What is an object?',
    answers: A('prg28', 'Instance of a class', [
      'Class definition',
      'Function',
      'Variable',
    ]),
    level: 3,
  },
  {
    id: 'prg29',
    text: 'What is inheritance?',
    answers: A('prg29', 'Class inheriting from another', [
      'Encapsulation',
      'Polymorphism',
      'Abstraction',
    ]),
    level: 3,
  },
  {
    id: 'prg30',
    text: 'What is encapsulation?',
    answers: A('prg30', 'Hiding internal details', [
      'Inheritance',
      'Polymorphism',
      'Abstraction',
    ]),
    level: 3,
  },
  {
    id: 'prg31',
    text: 'What is polymorphism?',
    answers: A('prg31', 'Same interface, different implementations', [
      'Inheritance',
      'Encapsulation',
      'Abstraction',
    ]),
    level: 3,
  },
  {
    id: 'prg32',
    text: 'What is abstraction?',
    answers: A('prg32', 'Hiding complexity', [
      'Inheritance',
      'Encapsulation',
      'Polymorphism',
    ]),
    level: 3,
  },
  {
    id: 'prg33',
    text: 'What is a constructor?',
    answers: A('prg33', 'Method to initialize object', [
      'Destructor',
      'Getter',
      'Setter',
    ]),
    level: 3,
  },
  {
    id: 'prg34',
    text: 'What is a destructor?',
    answers: A('prg34', 'Method to clean up object', [
      'Constructor',
      'Getter',
      'Setter',
    ]),
    level: 3,
  },
  {
    id: 'prg35',
    text: 'What is a getter?',
    answers: A('prg35', 'Method to read property', [
      'Setter',
      'Constructor',
      'Destructor',
    ]),
    level: 3,
  },
  {
    id: 'prg36',
    text: 'What is a setter?',
    answers: A('prg36', 'Method to write property', [
      'Getter',
      'Constructor',
      'Destructor',
    ]),
    level: 3,
  },
  {
    id: 'prg37',
    text: 'What is an interface?',
    answers: A('prg37', 'Contract for class methods', [
      'Class implementation',
      'Object instance',
      'Variable type',
    ]),
    level: 4,
  },
  {
    id: 'prg38',
    text: 'What is an abstract class?',
    answers: A('prg38', 'Class that cannot be instantiated', [
      'Concrete class',
      'Interface',
      'Object',
    ]),
    level: 4,
  },
  {
    id: 'prg39',
    text: 'What is method overloading?',
    answers: A('prg39', 'Same name, different parameters', [
      'Same name, same parameters',
      'Different name',
      'No parameters',
    ]),
    level: 4,
  },
  {
    id: 'prg40',
    text: 'What is method overriding?',
    answers: A('prg40', 'Redefining inherited method', [
      'Overloading',
      'Hiding',
      'Shadowing',
    ]),
    level: 4,
  },
  {
    id: 'prg41',
    text: 'What is a static method?',
    answers: A('prg41', 'Method belonging to class, not instance', [
      'Instance method',
      'Abstract method',
      'Virtual method',
    ]),
    level: 4,
  },
  {
    id: 'prg42',
    text: 'What is an instance method?',
    answers: A('prg42', 'Method belonging to object instance', [
      'Static method',
      'Class method',
      'Abstract method',
    ]),
    level: 4,
  },
  {
    id: 'prg43',
    text: 'What is exception handling?',
    answers: A('prg43', 'Managing runtime errors', [
      'Preventing syntax errors',
      'Debugging',
      'Testing',
    ]),
    level: 4,
  },
  {
    id: 'prg44',
    text: 'What is try-catch?',
    answers: A('prg44', 'Exception handling construct', [
      'Loop construct',
      'Condition construct',
      'Function construct',
    ]),
    level: 4,
  },
  {
    id: 'prg45',
    text: 'What is throwing an exception?',
    answers: A('prg45', 'Signaling an error', [
      'Catching error',
      'Ignoring error',
      'Logging error',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'prg46',
    text: 'What is functional programming?',
    answers: A('prg46', 'Programming with pure functions', [
      'Object-oriented programming',
      'Procedural programming',
      'Logic programming',
    ]),
    level: 5,
  },
  {
    id: 'prg47',
    text: 'What is a pure function?',
    answers: A('prg47', 'Function with no side effects', [
      'Function with side effects',
      'Impure function',
      'Void function',
    ]),
    level: 5,
  },
  {
    id: 'prg48',
    text: 'What is immutability?',
    answers: A('prg48', 'Data that cannot be changed', [
      'Mutable data',
      'Variable data',
      'Dynamic data',
    ]),
    level: 5,
  },
  {
    id: 'prg49',
    text: 'What is a higher-order function?',
    answers: A('prg49', 'Function taking/returning functions', [
      'Regular function',
      'Pure function',
      'Void function',
    ]),
    level: 5,
  },
  {
    id: 'prg50',
    text: 'What is a closure?',
    answers: A('prg50', 'Function with captured environment', [
      'Regular function',
      'Pure function',
      'Anonymous function',
    ]),
    level: 5,
  },
  {
    id: 'prg51',
    text: 'What is currying?',
    answers: A('prg51', 'Transforming multi-arg to single-arg functions', [
      'Partial application',
      'Function composition',
      'Memoization',
    ]),
    level: 6,
  },
  {
    id: 'prg52',
    text: 'What is partial application?',
    answers: A('prg52', 'Fixing some arguments of function', [
      'Currying',
      'Function composition',
      'Memoization',
    ]),
    level: 6,
  },
  {
    id: 'prg53',
    text: 'What is memoization?',
    answers: A('prg53', 'Caching function results', [
      'Currying',
      'Partial application',
      'Function composition',
    ]),
    level: 6,
  },
  {
    id: 'prg54',
    text: 'What is lazy evaluation?',
    answers: A('prg54', 'Delaying computation until needed', [
      'Eager evaluation',
      'Strict evaluation',
      'Immediate evaluation',
    ]),
    level: 6,
  },
  {
    id: 'prg55',
    text: 'What is a monad?',
    answers: A('prg55', 'Design pattern for chaining operations', [
      'Data structure',
      'Algorithm',
      'Programming language',
    ]),
    level: 6,
  },
  {
    id: 'prg56',
    text: 'What is a functor?',
    answers: A('prg56', 'Type that can be mapped over', [
      'Monad',
      'Applicative',
      'Monoid',
    ]),
    level: 7,
  },
  {
    id: 'prg57',
    text: 'What is an applicative functor?',
    answers: A('prg57', 'Functor with apply operation', [
      'Regular functor',
      'Monad',
      'Monoid',
    ]),
    level: 7,
  },
  {
    id: 'prg58',
    text: 'What is a monoid?',
    answers: A('prg58', 'Type with associative operation and identity', [
      'Monad',
      'Functor',
      'Applicative',
    ]),
    level: 7,
  },
  {
    id: 'prg59',
    text: 'What is referential transparency?',
    answers: A('prg59', 'Expression can be replaced by its value', [
      'Side effects',
      'Mutation',
      'State change',
    ]),
    level: 7,
  },
  {
    id: 'prg60',
    text: 'What is the Y combinator?',
    answers: A('prg60', 'Fixed-point combinator for recursion', [
      'Sorting algorithm',
      'Data structure',
      'Design pattern',
    ]),
    level: 7,
  },
  {
    id: 'prg61',
    text: 'What is continuation-passing style?',
    answers: A('prg61', 'Passing continuation as argument', [
      'Direct style',
      'Imperative style',
      'Object-oriented style',
    ]),
    level: 8,
  },
  {
    id: 'prg62',
    text: 'What is a continuation?',
    answers: A('prg62', 'Representation of rest of computation', [
      'Function',
      'Variable',
      'Loop',
    ]),
    level: 8,
  },
  {
    id: 'prg63',
    text: 'What is call/cc?',
    answers: A('prg63', 'Call with current continuation', [
      'Regular function call',
      'Tail call',
      'Recursive call',
    ]),
    level: 8,
  },
  {
    id: 'prg64',
    text: 'What is algebraic data types?',
    answers: A('prg64', 'Types formed by sum and product', [
      'Object types',
      'Primitive types',
      'Generic types',
    ]),
    level: 8,
  },
  {
    id: 'prg65',
    text: 'What is dependent types?',
    answers: A('prg65', 'Types depending on values', [
      'Independent types',
      'Generic types',
      'Primitive types',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'prg66',
    text: 'What is programming?',
    answers: A('prg66', 'Writing instructions for computers', [
      'Writing stories',
      'Drawing pictures',
      'Playing games',
    ]),
    level: 1,
  },
  {
    id: 'prg67',
    text: 'What is code?',
    answers: A('prg67', 'Instructions written in programming language', [
      'Random text',
      'Pictures',
      'Music',
    ]),
    level: 1,
  },
  {
    id: 'prg68',
    text: 'What is a bug?',
    answers: A('prg68', 'Error in code', [
      'Feature',
      'Correct code',
      'Comment',
    ]),
    level: 1,
  },
  {
    id: 'prg69',
    text: 'What is debugging?',
    answers: A('prg69', 'Finding and fixing errors', [
      'Adding errors',
      'Ignoring errors',
      'Creating errors',
    ]),
    level: 1,
  },
  {
    id: 'prg70',
    text: 'What is a programmer?',
    answers: A('prg70', 'Person who writes code', [
      'Person who reads code',
      'Person who deletes code',
      'Person who ignores code',
    ]),
    level: 1,
  },
  {
    id: 'prg71',
    text: 'What is a computer?',
    answers: A('prg71', 'Machine that runs programs', [
      'Machine that cooks',
      'Machine that cleans',
      'Machine that drives',
    ]),
    level: 1,
  },
  {
    id: 'prg72',
    text: 'What is software?',
    answers: A('prg72', 'Programs running on computer', [
      'Physical parts',
      'Electricity',
      'Internet',
    ]),
    level: 1,
  },
  {
    id: 'prg73',
    text: 'What is hardware?',
    answers: A('prg73', 'Physical parts of computer', [
      'Programs',
      'Data',
      'Internet',
    ]),
    level: 1,
  },
  {
    id: 'prg74',
    text: 'What is a file?',
    answers: A('prg74', 'Stored data on computer', [
      'Running program',
      'Physical object',
      'Person',
    ]),
    level: 1,
  },
  {
    id: 'prg75',
    text: 'What is saving?',
    answers: A('prg75', 'Storing data permanently', [
      'Deleting data',
      'Losing data',
      'Ignoring data',
    ]),
    level: 1,
  },
  {
    id: 'prg76',
    text: 'What is a variable?',
    answers: A('prg76', 'Named storage for data', [
      'Unnamed storage',
      'No storage',
      'Random storage',
    ]),
    level: 2,
  },
  {
    id: 'prg77',
    text: 'What is a function?',
    answers: A('prg77', 'Reusable block of code', [
      'Single use code',
      'No code',
      'Random code',
    ]),
    level: 2,
  },
  {
    id: 'prg78',
    text: 'What is a string?',
    answers: A('prg78', 'Text data type', [
      'Number type',
      'Boolean type',
      'No type',
    ]),
    level: 2,
  },
  {
    id: 'prg79',
    text: 'What is an integer?',
    answers: A('prg79', 'Whole number type', [
      'Decimal type',
      'Text type',
      'Boolean type',
    ]),
    level: 2,
  },
  {
    id: 'prg80',
    text: 'What is a boolean?',
    answers: A('prg80', 'True or false value', ['Number', 'Text', 'List']),
    level: 2,
  },
  {
    id: 'prg81',
    text: 'What is an array?',
    answers: A('prg81', 'Collection of items', [
      'Single item',
      'No items',
      'Random items',
    ]),
    level: 2,
  },
  {
    id: 'prg82',
    text: 'What is a loop?',
    answers: A('prg82', 'Repeating code', [
      'Single execution',
      'No execution',
      'Random execution',
    ]),
    level: 2,
  },
  {
    id: 'prg83',
    text: 'What is an if statement?',
    answers: A('prg83', 'Conditional execution', [
      'Always execute',
      'Never execute',
      'Random execute',
    ]),
    level: 2,
  },
  {
    id: 'prg84',
    text: 'What is a comment?',
    answers: A('prg84', 'Note in code not executed', [
      'Executed code',
      'Error',
      'Bug',
    ]),
    level: 2,
  },
  {
    id: 'prg85',
    text: 'What is syntax?',
    answers: A('prg85', 'Rules for writing code', [
      'Random writing',
      'No rules',
      'Any writing',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'prg86',
    text: 'What is object-oriented programming?',
    answers: A('prg86', 'Programming with objects and classes', [
      'Programming without objects',
      'Random programming',
      'No programming',
    ]),
    level: 3,
  },
  {
    id: 'prg87',
    text: 'What is a class?',
    answers: A('prg87', 'Blueprint for objects', [
      'Instance',
      'Variable',
      'Function',
    ]),
    level: 3,
  },
  {
    id: 'prg88',
    text: 'What is an object?',
    answers: A('prg88', 'Instance of a class', [
      'Class itself',
      'Function',
      'Variable',
    ]),
    level: 3,
  },
  {
    id: 'prg89',
    text: 'What is inheritance?',
    answers: A('prg89', 'Class getting properties from parent', [
      'Class losing properties',
      'No properties',
      'Random properties',
    ]),
    level: 3,
  },
  {
    id: 'prg90',
    text: 'What is encapsulation?',
    answers: A('prg90', 'Hiding internal details', [
      'Showing all details',
      'No details',
      'Random details',
    ]),
    level: 3,
  },
  {
    id: 'prg91',
    text: 'What is polymorphism?',
    answers: A('prg91', 'Same interface different implementations', [
      'Same implementation',
      'No interface',
      'Random interface',
    ]),
    level: 3,
  },
  {
    id: 'prg92',
    text: 'What is abstraction?',
    answers: A('prg92', 'Hiding complexity', [
      'Showing complexity',
      'No complexity',
      'Random complexity',
    ]),
    level: 3,
  },
  {
    id: 'prg93',
    text: 'What is a method?',
    answers: A('prg93', 'Function belonging to class', [
      'Standalone function',
      'Variable',
      'Class',
    ]),
    level: 3,
  },
  {
    id: 'prg94',
    text: 'What is a constructor?',
    answers: A('prg94', 'Method creating object', [
      'Method destroying object',
      'Regular method',
      'Variable',
    ]),
    level: 3,
  },
  {
    id: 'prg95',
    text: 'What is an interface?',
    answers: A('prg95', 'Contract for class methods', [
      'Implementation',
      'Variable',
      'Object',
    ]),
    level: 3,
  },
  {
    id: 'prg96',
    text: 'What is recursion?',
    answers: A('prg96', 'Function calling itself', [
      'Function calling others',
      'No calls',
      'Random calls',
    ]),
    level: 4,
  },
  {
    id: 'prg97',
    text: 'What is a callback?',
    answers: A('prg97', 'Function passed as argument', [
      'Function returned',
      'Variable',
      'Class',
    ]),
    level: 4,
  },
  {
    id: 'prg98',
    text: 'What is a closure?',
    answers: A('prg98', 'Function with captured variables', [
      'Function without variables',
      'Class',
      'Object',
    ]),
    level: 4,
  },
  {
    id: 'prg99',
    text: 'What is scope?',
    answers: A('prg99', 'Where variables are accessible', [
      'Where variables are created',
      'Where variables are deleted',
      'No access',
    ]),
    level: 4,
  },
  {
    id: 'prg100',
    text: 'What is a pointer?',
    answers: A('prg100', 'Variable storing memory address', [
      'Variable storing value',
      'Function',
      'Class',
    ]),
    level: 4,
  },
  {
    id: 'prg101',
    text: 'What is memory allocation?',
    answers: A('prg101', 'Reserving memory for data', [
      'Freeing memory',
      'No memory',
      'Random memory',
    ]),
    level: 4,
  },
  {
    id: 'prg102',
    text: 'What is garbage collection?',
    answers: A('prg102', 'Automatic memory cleanup', [
      'Manual cleanup',
      'No cleanup',
      'Random cleanup',
    ]),
    level: 4,
  },
  {
    id: 'prg103',
    text: 'What is exception handling?',
    answers: A('prg103', 'Managing runtime errors', [
      'Ignoring errors',
      'Creating errors',
      'No errors',
    ]),
    level: 4,
  },
  {
    id: 'prg104',
    text: 'What is a try-catch block?',
    answers: A('prg104', 'Code for handling exceptions', [
      'Code for creating exceptions',
      'Regular code',
      'Comment',
    ]),
    level: 4,
  },
  {
    id: 'prg105',
    text: 'What is unit testing?',
    answers: A('prg105', 'Testing individual components', [
      'Testing whole system',
      'No testing',
      'Random testing',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'prg106',
    text: 'What is functional programming?',
    answers: A('prg106', 'Programming with pure functions', [
      'Programming with objects',
      'Random programming',
      'No programming',
    ]),
    level: 5,
  },
  {
    id: 'prg107',
    text: 'What is a pure function?',
    answers: A('prg107', 'Function without side effects', [
      'Function with side effects',
      'Impure function',
      'No function',
    ]),
    level: 5,
  },
  {
    id: 'prg108',
    text: 'What is immutability?',
    answers: A('prg108', 'Data that cannot be changed', [
      'Data that can be changed',
      'No data',
      'Random data',
    ]),
    level: 5,
  },
  {
    id: 'prg109',
    text: 'What is a higher-order function?',
    answers: A('prg109', 'Function taking or returning functions', [
      'Regular function',
      'No function',
      'Random function',
    ]),
    level: 5,
  },
  {
    id: 'prg110',
    text: 'What is currying?',
    answers: A('prg110', 'Transforming multi-arg to single-arg functions', [
      'Combining functions',
      'No transformation',
      'Random transformation',
    ]),
    level: 5,
  },
  {
    id: 'prg111',
    text: 'What is a monad?',
    answers: A('prg111', 'Design pattern for computations', [
      'Data structure',
      'Algorithm',
      'Variable',
    ]),
    level: 6,
  },
  {
    id: 'prg112',
    text: 'What is lazy evaluation?',
    answers: A('prg112', 'Delaying computation until needed', [
      'Immediate computation',
      'No computation',
      'Random computation',
    ]),
    level: 6,
  },
  {
    id: 'prg113',
    text: 'What is pattern matching?',
    answers: A('prg113', 'Checking data against patterns', [
      'Random checking',
      'No checking',
      'Always matching',
    ]),
    level: 6,
  },
  {
    id: 'prg114',
    text: 'What is type inference?',
    answers: A('prg114', 'Compiler determining types', [
      'Programmer specifying all types',
      'No types',
      'Random types',
    ]),
    level: 6,
  },
  {
    id: 'prg115',
    text: 'What is a generic type?',
    answers: A('prg115', 'Type parameterized by other types', [
      'Specific type',
      'No type',
      'Random type',
    ]),
    level: 6,
  },
  {
    id: 'prg116',
    text: 'What is concurrency?',
    answers: A('prg116', 'Multiple tasks making progress', [
      'Single task',
      'No tasks',
      'Random tasks',
    ]),
    level: 7,
  },
  {
    id: 'prg117',
    text: 'What is parallelism?',
    answers: A('prg117', 'Multiple tasks running simultaneously', [
      'Sequential tasks',
      'No tasks',
      'Random tasks',
    ]),
    level: 7,
  },
  {
    id: 'prg118',
    text: 'What is a thread?',
    answers: A('prg118', 'Unit of execution', [
      'Unit of storage',
      'Unit of data',
      'No unit',
    ]),
    level: 7,
  },
  {
    id: 'prg119',
    text: 'What is a mutex?',
    answers: A('prg119', 'Lock for mutual exclusion', [
      'Unlock',
      'No lock',
      'Random lock',
    ]),
    level: 7,
  },
  {
    id: 'prg120',
    text: 'What is a deadlock?',
    answers: A('prg120', 'Processes waiting for each other', [
      'Processes running',
      'No processes',
      'Random processes',
    ]),
    level: 7,
  },
  {
    id: 'prg121',
    text: 'What is a race condition?',
    answers: A('prg121', 'Bug from timing of operations', [
      'Feature',
      'Correct behavior',
      'No condition',
    ]),
    level: 8,
  },
  {
    id: 'prg122',
    text: 'What is memory safety?',
    answers: A('prg122', 'Preventing invalid memory access', [
      'Allowing invalid access',
      'No memory',
      'Random access',
    ]),
    level: 8,
  },
  {
    id: 'prg123',
    text: 'What is ownership in Rust?',
    answers: A('prg123', 'Memory management system', [
      'Garbage collection',
      'Manual management',
      'No management',
    ]),
    level: 8,
  },
  {
    id: 'prg124',
    text: 'What is borrowing in Rust?',
    answers: A('prg124', 'Temporary access to data', [
      'Permanent access',
      'No access',
      'Random access',
    ]),
    level: 8,
  },
  {
    id: 'prg125',
    text: 'What is a lifetime in Rust?',
    answers: A('prg125', 'Scope of reference validity', [
      'Scope of value',
      'No scope',
      'Random scope',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'prg126',
    text: 'What is programming?',
    answers: A('prg126', 'Writing instructions for computers', [
      'Using computers',
      'Building computers',
      'Selling computers',
    ]),
    level: 1,
  },
  {
    id: 'prg127',
    text: 'What is code?',
    answers: A('prg127', 'Instructions written in programming language', [
      'Random text',
      'Numbers only',
      'Pictures',
    ]),
    level: 1,
  },
  {
    id: 'prg128',
    text: 'What is a programmer?',
    answers: A('prg128', 'Person who writes code', [
      'Person who uses computer',
      'Person who builds hardware',
      'Person who sells software',
    ]),
    level: 1,
  },
  {
    id: 'prg129',
    text: 'What is a programming language?',
    answers: A('prg129', 'Language for writing code', [
      'Human language',
      'Math language',
      'Music language',
    ]),
    level: 1,
  },
  {
    id: 'prg130',
    text: 'What is Python?',
    answers: A('prg130', 'Programming language', [
      'Snake',
      'Operating system',
      'Hardware',
    ]),
    level: 1,
  },
  {
    id: 'prg131',
    text: 'What is Java?',
    answers: A('prg131', 'Programming language', [
      'Coffee',
      'Operating system',
      'Hardware',
    ]),
    level: 1,
  },
  {
    id: 'prg132',
    text: 'What is a variable?',
    answers: A('prg132', 'Named storage for data', [
      'Constant value',
      'Function',
      'Loop',
    ]),
    level: 1,
  },
  {
    id: 'prg133',
    text: 'What is a value?',
    answers: A('prg133', 'Data stored in variable', [
      'Variable name',
      'Function',
      'Loop',
    ]),
    level: 1,
  },
  {
    id: 'prg134',
    text: 'What is a number in programming?',
    answers: A('prg134', 'Numeric data type', ['Text', 'Boolean', 'Function']),
    level: 1,
  },
  {
    id: 'prg135',
    text: 'What is text in programming?',
    answers: A('prg135', 'String data type', ['Number', 'Boolean', 'Function']),
    level: 1,
  },
  {
    id: 'prg136',
    text: 'What is true or false in programming?',
    answers: A('prg136', 'Boolean data type', ['Number', 'String', 'Function']),
    level: 1,
  },
  {
    id: 'prg137',
    text: 'What is a function?',
    answers: A('prg137', 'Reusable block of code', [
      'Variable',
      'Loop',
      'Condition',
    ]),
    level: 1,
  },
  {
    id: 'prg138',
    text: 'What is calling a function?',
    answers: A('prg138', 'Running the function', [
      'Creating function',
      'Deleting function',
      'Naming function',
    ]),
    level: 1,
  },
  {
    id: 'prg139',
    text: 'What is a loop?',
    answers: A('prg139', 'Code that repeats', [
      'Code that runs once',
      'Variable',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'prg140',
    text: 'What is an if statement?',
    answers: A('prg140', 'Conditional code execution', [
      'Loop',
      'Function',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg141',
    text: 'What is a condition?',
    answers: A('prg141', 'Test that is true or false', [
      'Always true',
      'Always false',
      'Number',
    ]),
    level: 1,
  },
  {
    id: 'prg142',
    text: 'What is an error?',
    answers: A('prg142', 'Problem in code', [
      'Correct code',
      'Feature',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg143',
    text: 'What is a bug?',
    answers: A('prg143', 'Mistake in code', [
      'Feature',
      'Correct code',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg144',
    text: 'What is debugging?',
    answers: A('prg144', 'Finding and fixing errors', [
      'Adding errors',
      'Writing code',
      'Running code',
    ]),
    level: 1,
  },
  {
    id: 'prg145',
    text: 'What is running code?',
    answers: A('prg145', 'Executing the program', [
      'Writing code',
      'Deleting code',
      'Saving code',
    ]),
    level: 1,
  },
  {
    id: 'prg146',
    text: 'What is output?',
    answers: A('prg146', 'Result produced by program', [
      'Input to program',
      'Code itself',
      'Error',
    ]),
    level: 1,
  },
  {
    id: 'prg147',
    text: 'What is input?',
    answers: A('prg147', 'Data given to program', [
      'Output from program',
      'Code itself',
      'Error',
    ]),
    level: 1,
  },
  {
    id: 'prg148',
    text: 'What is print in programming?',
    answers: A('prg148', 'Display output', [
      'Get input',
      'Create variable',
      'Make loop',
    ]),
    level: 1,
  },
  {
    id: 'prg149',
    text: 'What is a comment?',
    answers: A('prg149', 'Note in code not executed', [
      'Executed code',
      'Variable',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'prg150',
    text: 'What is syntax?',
    answers: A('prg150', 'Rules for writing code', [
      'Meaning of code',
      'Speed of code',
      'Size of code',
    ]),
    level: 1,
  },
  {
    id: 'prg151',
    text: 'What is a syntax error?',
    answers: A('prg151', 'Error in code structure', [
      'Logic error',
      'Runtime error',
      'No error',
    ]),
    level: 1,
  },
  {
    id: 'prg152',
    text: 'What is assignment?',
    answers: A('prg152', 'Giving value to variable', [
      'Creating function',
      'Making loop',
      'Printing output',
    ]),
    level: 1,
  },
  {
    id: 'prg153',
    text: 'What is addition in programming?',
    answers: A('prg153', 'Adding numbers with +', [
      'Subtracting',
      'Multiplying',
      'Dividing',
    ]),
    level: 1,
  },
  {
    id: 'prg154',
    text: 'What is subtraction in programming?',
    answers: A('prg154', 'Subtracting numbers with -', [
      'Adding',
      'Multiplying',
      'Dividing',
    ]),
    level: 1,
  },
  {
    id: 'prg155',
    text: 'What is multiplication in programming?',
    answers: A('prg155', 'Multiplying numbers with *', [
      'Adding',
      'Subtracting',
      'Dividing',
    ]),
    level: 1,
  },
  {
    id: 'prg156',
    text: 'What is division in programming?',
    answers: A('prg156', 'Dividing numbers with /', [
      'Adding',
      'Subtracting',
      'Multiplying',
    ]),
    level: 1,
  },
  {
    id: 'prg157',
    text: 'What is equals in programming?',
    answers: A('prg157', 'Comparison with == or ===', [
      'Assignment with =',
      'Addition',
      'Subtraction',
    ]),
    level: 1,
  },
  {
    id: 'prg158',
    text: 'What is not equals?',
    answers: A('prg158', 'Comparison with != or !==', [
      'Equals',
      'Assignment',
      'Addition',
    ]),
    level: 1,
  },
  {
    id: 'prg159',
    text: 'What is greater than?',
    answers: A('prg159', 'Comparison with >', [
      'Less than',
      'Equals',
      'Assignment',
    ]),
    level: 1,
  },
  {
    id: 'prg160',
    text: 'What is less than?',
    answers: A('prg160', 'Comparison with <', [
      'Greater than',
      'Equals',
      'Assignment',
    ]),
    level: 1,
  },
  {
    id: 'prg161',
    text: 'What is an array?',
    answers: A('prg161', 'List of values', [
      'Single value',
      'Function',
      'Loop',
    ]),
    level: 1,
  },
  {
    id: 'prg162',
    text: 'What is an index?',
    answers: A('prg162', 'Position in array', [
      'Value in array',
      'Size of array',
      'Type of array',
    ]),
    level: 1,
  },
  {
    id: 'prg163',
    text: 'What is the first index usually?',
    answers: A('prg163', '0', ['1', '-1', '10']),
    level: 1,
  },
  {
    id: 'prg164',
    text: 'What is a string?',
    answers: A('prg164', 'Text in quotes', ['Number', 'Boolean', 'Array']),
    level: 1,
  },
  {
    id: 'prg165',
    text: 'What is concatenation?',
    answers: A('prg165', 'Joining strings together', [
      'Splitting strings',
      'Deleting strings',
      'Comparing strings',
    ]),
    level: 1,
  },
  {
    id: 'prg166',
    text: 'What is a parameter?',
    answers: A('prg166', 'Input to function', [
      'Output from function',
      'Function name',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg167',
    text: 'What is a return value?',
    answers: A('prg167', 'Output from function', [
      'Input to function',
      'Function name',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg168',
    text: 'What is a while loop?',
    answers: A('prg168', 'Loop that runs while condition is true', [
      'Loop that runs once',
      'Function',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg169',
    text: 'What is a for loop?',
    answers: A('prg169', 'Loop with counter', [
      'Loop without counter',
      'Function',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg170',
    text: 'What is an infinite loop?',
    answers: A('prg170', 'Loop that never ends', [
      'Loop that ends',
      'Function',
      'Variable',
    ]),
    level: 1,
  },
  {
    id: 'prg171',
    text: 'What is break?',
    answers: A('prg171', 'Exit loop early', [
      'Continue loop',
      'Start loop',
      'Create loop',
    ]),
    level: 1,
  },
  {
    id: 'prg172',
    text: 'What is continue?',
    answers: A('prg172', 'Skip to next iteration', [
      'Exit loop',
      'Start loop',
      'Create loop',
    ]),
    level: 1,
  },
  {
    id: 'prg173',
    text: 'What is else?',
    answers: A('prg173', 'Code when if is false', [
      'Code when if is true',
      'Loop',
      'Function',
    ]),
    level: 1,
  },
  {
    id: 'prg174',
    text: 'What is elif or else if?',
    answers: A('prg174', 'Additional condition to check', [
      'First condition',
      'Last condition',
      'No condition',
    ]),
    level: 1,
  },
  {
    id: 'prg175',
    text: 'What is indentation?',
    answers: A('prg175', 'Spaces at start of line', [
      'Spaces at end',
      'No spaces',
      'Comments',
    ]),
    level: 1,
  },
  // ===== LEVEL 2-4: More Questions =====
  {
    id: 'prg176',
    text: 'What is a class?',
    answers: A('prg176', 'Blueprint for objects', [
      'Object itself',
      'Function',
      'Variable',
    ]),
    level: 2,
  },
  {
    id: 'prg177',
    text: 'What is an object?',
    answers: A('prg177', 'Instance of a class', [
      'Class itself',
      'Function',
      'Variable',
    ]),
    level: 2,
  },
  {
    id: 'prg178',
    text: 'What is a method?',
    answers: A('prg178', 'Function inside a class', [
      'Variable inside class',
      'Class itself',
      'Object',
    ]),
    level: 2,
  },
  {
    id: 'prg179',
    text: 'What is a property?',
    answers: A('prg179', 'Variable inside a class', [
      'Function inside class',
      'Class itself',
      'Object',
    ]),
    level: 2,
  },
  {
    id: 'prg180',
    text: 'What is inheritance?',
    answers: A('prg180', 'Class getting features from parent', [
      'Class giving features',
      'No features',
      'Random features',
    ]),
    level: 2,
  },
  {
    id: 'prg181',
    text: 'What is encapsulation?',
    answers: A('prg181', 'Hiding internal details', [
      'Showing all details',
      'No details',
      'Random details',
    ]),
    level: 3,
  },
  {
    id: 'prg182',
    text: 'What is polymorphism?',
    answers: A('prg182', 'Same interface different behavior', [
      'Same behavior',
      'No behavior',
      'Random behavior',
    ]),
    level: 3,
  },
  {
    id: 'prg183',
    text: 'What is abstraction?',
    answers: A('prg183', 'Hiding complexity', [
      'Showing complexity',
      'No complexity',
      'Adding complexity',
    ]),
    level: 3,
  },
  {
    id: 'prg184',
    text: 'What is a constructor?',
    answers: A('prg184', 'Method that creates object', [
      'Method that destroys',
      'Regular method',
      'Variable',
    ]),
    level: 2,
  },
  {
    id: 'prg185',
    text: 'What is this or self?',
    answers: A('prg185', 'Reference to current object', [
      'Reference to other object',
      'No reference',
      'Random reference',
    ]),
    level: 2,
  },
  {
    id: 'prg186',
    text: 'What is public?',
    answers: A('prg186', 'Accessible from anywhere', [
      'Only inside class',
      'Only in subclass',
      'Nowhere',
    ]),
    level: 2,
  },
  {
    id: 'prg187',
    text: 'What is private?',
    answers: A('prg187', 'Only accessible inside class', [
      'Accessible anywhere',
      'Only in subclass',
      'Nowhere',
    ]),
    level: 2,
  },
  {
    id: 'prg188',
    text: 'What is protected?',
    answers: A('prg188', 'Accessible in class and subclasses', [
      'Only in class',
      'Anywhere',
      'Nowhere',
    ]),
    level: 3,
  },
  {
    id: 'prg189',
    text: 'What is static?',
    answers: A('prg189', 'Belongs to class not instance', [
      'Belongs to instance',
      'No belonging',
      'Random',
    ]),
    level: 3,
  },
  {
    id: 'prg190',
    text: 'What is an interface?',
    answers: A('prg190', 'Contract for class methods', [
      'Implementation',
      'Variable',
      'Object',
    ]),
    level: 3,
  },
  {
    id: 'prg191',
    text: 'What is an abstract class?',
    answers: A('prg191', 'Class that cannot be instantiated', [
      'Regular class',
      'Interface',
      'Object',
    ]),
    level: 3,
  },
  {
    id: 'prg192',
    text: 'What is overriding?',
    answers: A('prg192', 'Replacing parent method', [
      'Adding method',
      'Removing method',
      'No change',
    ]),
    level: 3,
  },
  {
    id: 'prg193',
    text: 'What is overloading?',
    answers: A('prg193', 'Same name different parameters', [
      'Same parameters',
      'No parameters',
      'Random parameters',
    ]),
    level: 3,
  },
  {
    id: 'prg194',
    text: 'What is a module?',
    answers: A('prg194', 'File containing code', [
      'Single function',
      'Single variable',
      'No code',
    ]),
    level: 2,
  },
  {
    id: 'prg195',
    text: 'What is importing?',
    answers: A('prg195', 'Using code from another file', [
      'Creating code',
      'Deleting code',
      'Running code',
    ]),
    level: 2,
  },
  {
    id: 'prg196',
    text: 'What is a library?',
    answers: A('prg196', 'Collection of reusable code', [
      'Single function',
      'Single file',
      'No code',
    ]),
    level: 2,
  },
  {
    id: 'prg197',
    text: 'What is a framework?',
    answers: A('prg197', 'Structure for building applications', [
      'Single library',
      'Single function',
      'No structure',
    ]),
    level: 3,
  },
  {
    id: 'prg198',
    text: 'What is an exception?',
    answers: A('prg198', 'Error during execution', [
      'Normal execution',
      'No execution',
      'Compilation error',
    ]),
    level: 3,
  },
  {
    id: 'prg199',
    text: 'What is try-catch?',
    answers: A('prg199', 'Handling exceptions', [
      'Creating exceptions',
      'Ignoring exceptions',
      'No handling',
    ]),
    level: 3,
  },
  {
    id: 'prg200',
    text: 'What is throwing an exception?',
    answers: A('prg200', 'Raising an error', [
      'Catching error',
      'Ignoring error',
      'No error',
    ]),
    level: 3,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'prg201',
    text: 'What is recursion?',
    answers: A('prg201', 'Function calling itself', [
      'Function calling other',
      'No calling',
      'Loop',
    ]),
    level: 4,
  },
  {
    id: 'prg202',
    text: 'What is a callback?',
    answers: A('prg202', 'Function passed as argument', [
      'Function returned',
      'No function',
      'Variable',
    ]),
    level: 4,
  },
  {
    id: 'prg203',
    text: 'What is a closure?',
    answers: A('prg203', 'Function with access to outer scope', [
      'Function without access',
      'No function',
      'Variable',
    ]),
    level: 5,
  },
  {
    id: 'prg204',
    text: 'What is a lambda?',
    answers: A('prg204', 'Anonymous function', [
      'Named function',
      'No function',
      'Variable',
    ]),
    level: 4,
  },
  {
    id: 'prg205',
    text: 'What is a higher-order function?',
    answers: A('prg205', 'Function taking or returning function', [
      'Regular function',
      'No function',
      'Variable',
    ]),
    level: 5,
  },
  {
    id: 'prg206',
    text: 'What is map function?',
    answers: A('prg206', 'Apply function to each element', [
      'Filter elements',
      'Reduce elements',
      'Sort elements',
    ]),
    level: 4,
  },
  {
    id: 'prg207',
    text: 'What is filter function?',
    answers: A('prg207', 'Select elements matching condition', [
      'Apply function',
      'Reduce elements',
      'Sort elements',
    ]),
    level: 4,
  },
  {
    id: 'prg208',
    text: 'What is reduce function?',
    answers: A('prg208', 'Combine elements into single value', [
      'Apply function',
      'Filter elements',
      'Sort elements',
    ]),
    level: 4,
  },
  {
    id: 'prg209',
    text: 'What is async programming?',
    answers: A('prg209', 'Non-blocking code execution', [
      'Blocking execution',
      'No execution',
      'Random execution',
    ]),
    level: 5,
  },
  {
    id: 'prg210',
    text: 'What is a promise?',
    answers: A('prg210', 'Object representing future value', [
      'Current value',
      'No value',
      'Past value',
    ]),
    level: 5,
  },
  {
    id: 'prg211',
    text: 'What is async/await?',
    answers: A('prg211', 'Syntax for async code', [
      'Sync code',
      'No code',
      'Random code',
    ]),
    level: 5,
  },
  {
    id: 'prg212',
    text: 'What is a thread?',
    answers: A('prg212', 'Unit of execution', [
      'Unit of memory',
      'Unit of storage',
      'No unit',
    ]),
    level: 5,
  },
  {
    id: 'prg213',
    text: 'What is concurrency?',
    answers: A('prg213', 'Multiple tasks making progress', [
      'Single task',
      'No tasks',
      'Sequential tasks',
    ]),
    level: 5,
  },
  {
    id: 'prg214',
    text: 'What is parallelism?',
    answers: A('prg214', 'Multiple tasks running simultaneously', [
      'Sequential tasks',
      'No tasks',
      'Single task',
    ]),
    level: 5,
  },
  {
    id: 'prg215',
    text: 'What is a mutex?',
    answers: A('prg215', 'Lock for exclusive access', [
      'No lock',
      'Shared access',
      'Random access',
    ]),
    level: 6,
  },
  {
    id: 'prg216',
    text: 'What is a deadlock?',
    answers: A('prg216', 'Threads waiting for each other', [
      'Threads running',
      'No threads',
      'Single thread',
    ]),
    level: 6,
  },
  {
    id: 'prg217',
    text: 'What is garbage collection?',
    answers: A('prg217', 'Automatic memory management', [
      'Manual memory',
      'No memory',
      'Random memory',
    ]),
    level: 5,
  },
  {
    id: 'prg218',
    text: 'What is memory leak?',
    answers: A('prg218', 'Memory not freed', [
      'Memory freed',
      'No memory',
      'Random memory',
    ]),
    level: 5,
  },
  {
    id: 'prg219',
    text: 'What is a pointer?',
    answers: A('prg219', 'Variable storing memory address', [
      'Variable storing value',
      'No variable',
      'Function',
    ]),
    level: 5,
  },
  {
    id: 'prg220',
    text: 'What is null pointer?',
    answers: A('prg220', 'Pointer to nothing', [
      'Pointer to something',
      'No pointer',
      'Random pointer',
    ]),
    level: 5,
  },
  {
    id: 'prg221',
    text: 'What is type safety?',
    answers: A('prg221', 'Preventing type errors', [
      'Allowing type errors',
      'No types',
      'Random types',
    ]),
    level: 5,
  },
  {
    id: 'prg222',
    text: 'What is generics?',
    answers: A('prg222', 'Type parameters for code', [
      'No parameters',
      'Value parameters',
      'Random parameters',
    ]),
    level: 6,
  },
  {
    id: 'prg223',
    text: 'What is reflection?',
    answers: A('prg223', 'Examining code at runtime', [
      'Compile time only',
      'No examination',
      'Random examination',
    ]),
    level: 6,
  },
  {
    id: 'prg224',
    text: 'What is metaprogramming?',
    answers: A('prg224', 'Code that manipulates code', [
      'Regular code',
      'No code',
      'Random code',
    ]),
    level: 7,
  },
  {
    id: 'prg225',
    text: 'What is a macro?',
    answers: A('prg225', 'Code that generates code', [
      'Regular function',
      'Variable',
      'No code',
    ]),
    level: 7,
  },
  // ===== LEVEL 8: More Expert Questions =====
  {
    id: 'prg226',
    text: 'What is a decorator?',
    answers: A('prg226', 'Function modifying another function', [
      'Variable',
      'Class',
      'Loop',
    ]),
    level: 6,
  },
  {
    id: 'prg227',
    text: 'What is a generator?',
    answers: A('prg227', 'Function yielding values lazily', [
      'Regular function',
      'Variable',
      'Class',
    ]),
    level: 6,
  },
  {
    id: 'prg228',
    text: 'What is an iterator?',
    answers: A('prg228', 'Object for traversing collection', [
      'Collection itself',
      'Single element',
      'Function',
    ]),
    level: 5,
  },
  {
    id: 'prg229',
    text: 'What is lazy evaluation?',
    answers: A('prg229', 'Computing values only when needed', [
      'Computing all at once',
      'No computing',
      'Random computing',
    ]),
    level: 6,
  },
  {
    id: 'prg230',
    text: 'What is memoization?',
    answers: A('prg230', 'Caching function results', [
      'Recomputing always',
      'No caching',
      'Random caching',
    ]),
    level: 5,
  },
  {
    id: 'prg231',
    text: 'What is currying?',
    answers: A('prg231', 'Transforming multi-arg to single-arg functions', [
      'Combining functions',
      'No transformation',
      'Random transformation',
    ]),
    level: 7,
  },
  {
    id: 'prg232',
    text: 'What is partial application?',
    answers: A('prg232', 'Fixing some arguments of function', [
      'All arguments',
      'No arguments',
      'Random arguments',
    ]),
    level: 7,
  },
  {
    id: 'prg233',
    text: 'What is immutability?',
    answers: A('prg233', 'Data that cannot be changed', [
      'Data that can change',
      'No data',
      'Random data',
    ]),
    level: 5,
  },
  {
    id: 'prg234',
    text: 'What is pure function?',
    answers: A('prg234', 'Function with no side effects', [
      'Function with side effects',
      'No function',
      'Random function',
    ]),
    level: 6,
  },
  {
    id: 'prg235',
    text: 'What is a side effect?',
    answers: A('prg235', 'Change outside function scope', [
      'No change',
      'Return value',
      'Parameter',
    ]),
    level: 6,
  },
  {
    id: 'prg236',
    text: 'What is functional programming?',
    answers: A('prg236', 'Programming with pure functions', [
      'Object-oriented',
      'Procedural',
      'No paradigm',
    ]),
    level: 5,
  },
  {
    id: 'prg237',
    text: 'What is object-oriented programming?',
    answers: A('prg237', 'Programming with objects and classes', [
      'Functional',
      'Procedural',
      'No paradigm',
    ]),
    level: 4,
  },
  {
    id: 'prg238',
    text: 'What is procedural programming?',
    answers: A('prg238', 'Programming with procedures', [
      'Object-oriented',
      'Functional',
      'No paradigm',
    ]),
    level: 4,
  },
  {
    id: 'prg239',
    text: 'What is declarative programming?',
    answers: A('prg239', 'Describing what not how', [
      'Describing how',
      'No description',
      'Random description',
    ]),
    level: 6,
  },
  {
    id: 'prg240',
    text: 'What is imperative programming?',
    answers: A('prg240', 'Describing how step by step', [
      'Describing what',
      'No description',
      'Random description',
    ]),
    level: 6,
  },
  {
    id: 'prg241',
    text: 'What is dependency injection?',
    answers: A('prg241', 'Providing dependencies externally', [
      'Creating internally',
      'No dependencies',
      'Random dependencies',
    ]),
    level: 6,
  },
  {
    id: 'prg242',
    text: 'What is inversion of control?',
    answers: A('prg242', 'Framework calls your code', [
      'You call framework',
      'No calling',
      'Random calling',
    ]),
    level: 7,
  },
  {
    id: 'prg243',
    text: 'What is SOLID?',
    answers: A('prg243', 'Object-oriented design principles', [
      'Programming language',
      'Framework',
      'Database',
    ]),
    level: 6,
  },
  {
    id: 'prg244',
    text: 'What is DRY?',
    answers: A('prg244', 'Dont Repeat Yourself principle', [
      'Repeat everything',
      'No principle',
      'Random principle',
    ]),
    level: 5,
  },
  {
    id: 'prg245',
    text: 'What is KISS?',
    answers: A('prg245', 'Keep It Simple Stupid principle', [
      'Make it complex',
      'No principle',
      'Random principle',
    ]),
    level: 5,
  },
  {
    id: 'prg246',
    text: 'What is YAGNI?',
    answers: A('prg246', 'You Arent Gonna Need It', [
      'Build everything',
      'No principle',
      'Random principle',
    ]),
    level: 6,
  },
  {
    id: 'prg247',
    text: 'What is refactoring?',
    answers: A('prg247', 'Improving code without changing behavior', [
      'Changing behavior',
      'Deleting code',
      'No change',
    ]),
    level: 5,
  },
  {
    id: 'prg248',
    text: 'What is code smell?',
    answers: A('prg248', 'Indicator of potential problem', [
      'Good code',
      'No indicator',
      'Random indicator',
    ]),
    level: 6,
  },
  {
    id: 'prg249',
    text: 'What is technical debt?',
    answers: A('prg249', 'Cost of shortcuts in code', [
      'Good practice',
      'No cost',
      'Random cost',
    ]),
    level: 6,
  },
  {
    id: 'prg250',
    text: 'What is pair programming?',
    answers: A('prg250', 'Two programmers working together', [
      'Solo programming',
      'No programming',
      'Random programming',
    ]),
    level: 5,
  },
];
