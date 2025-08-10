export type Difficulty =
  | 'very easy'
  | 'easy'
  | 'intermediate'
  | 'normal'
  | 'hard'
  | 'very hard'
  | 'legendary'
  | 'professor';

export type Category = {
  id: string;
  name: string;
  description?: string;
  iconName?: string;
};

export type QuizTheme = { id: string; title: string; description: string };

export type Answer = { id: string; text: string; isCorrect: boolean };
export type Question = { id: string; text: string; answers: Answer[] };

export type Quiz = {
  id: string;
  title: string;
  categoryId: string;
  difficulty: Difficulty;
  description: string;
  requirements: string[];
  actions: string[];
  themes: QuizTheme[];
  estimatedTimeMin: number;
  questions: Question[];
};

export const CATEGORIES: Category[] = [
  { id: 'math', name: 'Math', description: 'Arithmetic, algebra and geometry' },
  { id: 'physics', name: 'Physics', description: 'Mechanics, units and laws of nature' },
  { id: 'chemistry', name: 'Chemistry', description: 'Elements, compounds and reactions' },
  { id: 'javascript', name: 'JavaScript', description: 'Language basics and browser/runtime APIs' },
];

const DIFFICULTIES: Difficulty[] = [
  'very easy',
  'easy',
  'intermediate',
  'normal',
  'hard',
  'very hard',
  'legendary',
  'professor',
];

const questionsPerDifficulty: Record<Difficulty, number> = {
  'very easy': 10,
  easy: 20,
  intermediate: 30,
  normal: 40,
  hard: 50,
  'very hard': 60,
  legendary: 70,
  professor: 100,
};

export const QUIZZES: Quiz[] = (() => {
  const curated: Quiz[] = [];

  // Helper to create answer options with a correct one
  const A = (id: string, correct: string, others: string[]): Answer[] => {
    const all = [
      { id: `${id}-a1`, text: correct, isCorrect: true },
      ...others.map((t, i) => ({ id: `${id}-a${i + 2}`, text: t, isCorrect: false })),
    ];
    // shuffle for variety
    return all.sort(() => Math.random() - 0.5);
  };

  // Math — very easy (10)
  curated.push({
    id: 'math-basics-1',
    title: 'Math: Basic Arithmetic',
    categoryId: 'math',
    difficulty: 'very easy',
    description: 'Quick checks on addition, subtraction, multiplication and division.',
    requirements: ['Score 70%+', 'Finish within estimated time'],
    actions: ['Single-choice questions'],
    themes: [
      { id: 't1', title: 'Addition', description: 'Add two integers' },
      { id: 't2', title: 'Subtraction', description: 'Subtract two integers' },
      { id: 't3', title: 'Multiplication', description: 'Small products' },
      { id: 't4', title: 'Division', description: 'Exact division results' },
    ],
    estimatedTimeMin: 12,
    questions: [
      { id: 'm1', text: '2 + 2 = ?', answers: A('m1', '4', ['3', '5', '6']) },
      { id: 'm2', text: '9 − 4 = ?', answers: A('m2', '5', ['6', '4', '3']) },
      { id: 'm3', text: '3 × 5 = ?', answers: A('m3', '15', ['8', '10', '20']) },
      { id: 'm4', text: '12 ÷ 3 = ?', answers: A('m4', '4', ['3', '2', '6']) },
      { id: 'm5', text: '7 + 6 = ?', answers: A('m5', '13', ['12', '14', '15']) },
      { id: 'm6', text: '10 − 7 = ?', answers: A('m6', '3', ['2', '4', '5']) },
      { id: 'm7', text: '6 × 6 = ?', answers: A('m7', '36', ['30', '24', '42']) },
      { id: 'm8', text: '16 ÷ 4 = ?', answers: A('m8', '4', ['6', '8', '2']) },
      { id: 'm9', text: '5 × 0 = ?', answers: A('m9', '0', ['5', '1', '10']) },
      { id: 'm10', text: '11 + 9 = ?', answers: A('m10', '20', ['18', '21', '19']) },
    ],
  });

  // Physics — very easy (10)
  curated.push({
    id: 'physics-basics-1',
    title: 'Physics: Units & Basics',
    categoryId: 'physics',
    difficulty: 'very easy',
    description: 'Fundamental SI units and simple concepts.',
    requirements: ['Score 70%+'],
    actions: ['Single-choice questions'],
    themes: [
      { id: 'pt1', title: 'Units', description: 'SI base units' },
      { id: 'pt2', title: 'Forces', description: 'Basics of force' },
    ],
    estimatedTimeMin: 12,
    questions: [
      { id: 'p1', text: 'SI unit of force?', answers: A('p1', 'Newton', ['Joule', 'Pascal', 'Watt']) },
      { id: 'p2', text: 'Speed = distance / ?', answers: A('p2', 'time', ['mass', 'force', 'energy']) },
      { id: 'p3', text: 'Acceleration due to gravity near Earth (approx)?', answers: A('p3', '9.8 m/s²', ['1 g', '98 m/s', '6.67×10⁻¹¹']) },
      { id: 'p4', text: 'Who formulated the three laws of motion?', answers: A('p4', 'Isaac Newton', ['Galileo', 'Einstein', 'Maxwell']) },
      { id: 'p5', text: 'Work = force × ?', answers: A('p5', 'displacement', ['time', 'mass', 'power']) },
      { id: 'p6', text: 'SI unit of energy?', answers: A('p6', 'Joule', ['Newton', 'Ampere', 'Volt']) },
      { id: 'p7', text: 'Light travels fastest in?', answers: A('p7', 'Vacuum', ['Water', 'Air', 'Glass']) },
      { id: 'p8', text: 'Power is the rate of doing?', answers: A('p8', 'work', ['heat', 'momentum', 'charge']) },
      { id: 'p9', text: 'Momentum = mass × ?', answers: A('p9', 'velocity', ['acceleration', 'displacement', 'force']) },
      { id: 'p10', text: 'Unit of electric current?', answers: A('p10', 'Ampere', ['Volt', 'Ohm', 'Farad']) },
    ],
  });

  // Chemistry — very easy (10)
  curated.push({
    id: 'chem-basics-1',
    title: 'Chemistry: Elements & Symbols',
    categoryId: 'chemistry',
    difficulty: 'very easy',
    description: 'Common elements and their symbols.',
    requirements: ['Score 70%+'],
    actions: ['Single-choice questions'],
    themes: [
      { id: 'ct1', title: 'Periodic Table', description: 'Common elements' },
    ],
    estimatedTimeMin: 12,
    questions: [
      { id: 'c1', text: 'Chemical symbol for Sodium?', answers: A('c1', 'Na', ['So', 'S', 'Sn']) },
      { id: 'c2', text: 'H₂O is?', answers: A('c2', 'Water', ['Hydrogen Peroxide', 'Hydrogen', 'Oxygen']) },
      { id: 'c3', text: 'Atomic number of Carbon?', answers: A('c3', '6', ['8', '12', '14']) },
      { id: 'c4', text: 'Chemical symbol for Potassium?', answers: A('c4', 'K', ['P', 'Po', 'Pt']) },
      { id: 'c5', text: 'NaCl is commonly known as?', answers: A('c5', 'Salt', ['Soda', 'Lime', 'Chalk']) },
      { id: 'c6', text: 'Acids turn litmus?', answers: A('c6', 'red', ['blue', 'green', 'colorless']) },
      { id: 'c7', text: 'pH < 7 indicates?', answers: A('c7', 'acidic', ['basic', 'neutral', 'saline']) },
      { id: 'c8', text: 'He is the symbol for?', answers: A('c8', 'Helium', ['Hydrogen', 'Hafnium', 'Holmium']) },
      { id: 'c9', text: 'Fe stands for?', answers: A('c9', 'Iron', ['Fluorine', 'Fermium', 'Francium']) },
      { id: 'c10', text: 'CO₂ is?', answers: A('c10', 'Carbon dioxide', ['Carbon monoxide', 'Methane', 'Ozone']) },
    ],
  });

  // JavaScript — very easy (10)
  curated.push({
    id: 'js-fundamentals-1',
    title: 'JavaScript: Fundamentals',
    categoryId: 'javascript',
    difficulty: 'very easy',
    description: 'Basics of the language, types and simple APIs.',
    requirements: ['Score 70%+'],
    actions: ['Single-choice questions'],
    themes: [
      { id: 'jt1', title: 'Syntax', description: 'Language primitives' },
      { id: 'jt2', title: 'APIs', description: 'Common runtime APIs' },
    ],
    estimatedTimeMin: 12,
    questions: [
      { id: 'j1', text: 'typeof null is?', answers: A('j1', 'object', ['null', 'undefined', 'string']) },
      { id: 'j2', text: 'Array.isArray([]) returns?', answers: A('j2', 'true', ['false', '[]', 'undefined']) },
      { id: 'j3', text: "const x = 1; x = 2; // results in?", answers: A('j3', 'TypeError', ['1', '2', 'undefined']) },
      { id: 'j4', text: 'JSON.parse("\"hi\"") returns?', answers: A('j4', '"hi"', ['hi', 'null', 'undefined']) },
      { id: 'j5', text: 'Promise.then returns?', answers: A('j5', 'a new Promise', ['undefined', 'the same promise', 'void']) },
      { id: 'j6', text: 'NaN === NaN evaluates to?', answers: A('j6', 'false', ['true', 'TypeError', '0']) },
      { id: 'j7', text: 'Strict equality operator is?', answers: A('j7', '===', ['==', '=>', '!==']) },
      { id: 'j8', text: 'Which is falsy?', answers: A('j8', '0', ['"0"', '[]', '{}']) },
      { id: 'j9', text: 'document.querySelector returns?', answers: A('j9', 'Element | null', ['NodeList', 'HTMLCollection', 'string']) },
      { id: 'j10', text: 'setTimeout(...) schedules callback on?', answers: A('j10', 'task queue', ['microtask queue', 'render queue', 'GPU']) },
    ],
  });

  return curated;
})();

export function getQuizById(id?: string): Quiz | undefined {
  if (!id) return undefined;
  return QUIZZES.find((q) => q.id === id);
}

export function getQuizzesForCategory(categoryId: string): Quiz[] {
  return QUIZZES.filter((q) => q.categoryId === categoryId);
}
