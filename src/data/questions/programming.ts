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
];
