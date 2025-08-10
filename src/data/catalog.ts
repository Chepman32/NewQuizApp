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

const CATEGORY_DEFS: { id: string; name: string; description: string }[] = [
  { id: 'math', name: 'Math', description: 'Arithmetic, algebra and geometry' },
  { id: 'physics', name: 'Physics', description: 'Mechanics, units and laws of nature' },
  { id: 'chemistry', name: 'Chemistry', description: 'Elements, compounds and reactions' },
  { id: 'biology', name: 'Biology', description: 'Cells, genetics and life systems' },
  { id: 'astronomy', name: 'Astronomy', description: 'Planets, stars and the cosmos' },
  { id: 'geography', name: 'Geography', description: 'Earth, maps and countries' },
  { id: 'history', name: 'History', description: 'Events, eras and key figures' },
  { id: 'literature', name: 'Literature', description: 'Authors, works and genres' },
  { id: 'art', name: 'Art', description: 'Movements, techniques and artists' },
  { id: 'music', name: 'Music', description: 'Theory, genres and instruments' },
  { id: 'computer-science', name: 'Computer Science', description: 'Theory, data and computation' },
  { id: 'programming', name: 'Programming', description: 'Concepts, patterns and paradigms' },
  { id: 'algorithms', name: 'Algorithms', description: 'Sorting, graph and optimization' },
  { id: 'data-structures', name: 'Data Structures', description: 'Arrays, trees, maps and graphs' },
  { id: 'javascript', name: 'JavaScript', description: 'Language basics and runtime APIs' },
  { id: 'economics', name: 'Economics', description: 'Markets, micro and macro' },
  { id: 'psychology', name: 'Psychology', description: 'Behavior, cognition and theories' },
  { id: 'philosophy', name: 'Philosophy', description: 'Ideas, logic and ethics' },
  { id: 'anatomy', name: 'Anatomy', description: 'Human body systems and organs' },
  { id: 'sports', name: 'Sports', description: 'Rules, records and great moments' },
];

export const CATEGORIES: Category[] = CATEGORY_DEFS.map((c) => ({ id: c.id, name: c.name, description: c.description }));

const SUBTOPICS: string[] = [
  'Foundations',
  'Core Concepts',
  'Key Terms',
  'Problem Solving',
  'Real‑World Applications',
  'Famous Figures',
  'History & Origins',
  'Modern Topics',
  'Common Mistakes',
  'Quick Review',
  'Advanced Basics',
  'Practice Set A',
  'Practice Set B',
  'Patterns & Tricks',
  'Exam Essentials',
  'Everyday Examples',
  'Myths & Facts',
  'Data & Measures',
  'Systems Overview',
  'Challenge Set',
];

const A = (id: string, correct: string, others: string[]): Answer[] => {
  const all = [
    { id: `${id}-a1`, text: correct, isCorrect: true },
    ...others.map((t, i) => ({ id: `${id}-a${i + 2}`, text: t, isCorrect: false })),
  ];
  return all.sort(() => Math.random() - 0.5);
};

// Category-specific question banks (short sets, reused across many quizzes)
const BANK: Record<string, Question[]> = {
  math: [
    { id: 'm1', text: '2 + 2 = ?', answers: A('m1', '4', ['3', '5', '6']) },
    { id: 'm2', text: '9 − 4 = ?', answers: A('m2', '5', ['6', '4', '3']) },
    { id: 'm3', text: '3 × 5 = ?', answers: A('m3', '15', ['8', '10', '20']) },
    { id: 'm4', text: '12 ÷ 3 = ?', answers: A('m4', '4', ['3', '2', '6']) },
    { id: 'm5', text: 'Prime number:', answers: A('m5', '17', ['12', '21', '20']) },
  ],
  physics: [
    { id: 'p1', text: 'SI unit of force?', answers: A('p1', 'Newton', ['Joule', 'Pascal', 'Watt']) },
    { id: 'p2', text: 'Speed = distance / …', answers: A('p2', 'time', ['mass', 'force', 'energy']) },
    { id: 'p3', text: 'Acceleration due to gravity near Earth (approx)?', answers: A('p3', '9.8 m/s²', ['1 g', '98 m/s', '6.67×10⁻¹¹']) },
    { id: 'p4', text: 'Work = force × …', answers: A('p4', 'displacement', ['time', 'mass', 'power']) },
    { id: 'p5', text: 'SI unit of energy?', answers: A('p5', 'Joule', ['Newton', 'Ampere', 'Volt']) },
  ],
  chemistry: [
    { id: 'c1', text: 'Chemical symbol for Sodium?', answers: A('c1', 'Na', ['So', 'S', 'Sn']) },
    { id: 'c2', text: 'H₂O is …', answers: A('c2', 'Water', ['Hydrogen Peroxide', 'Hydrogen', 'Oxygen']) },
    { id: 'c3', text: 'Atomic number of Carbon?', answers: A('c3', '6', ['8', '12', '14']) },
    { id: 'c4', text: 'Symbol for Potassium?', answers: A('c4', 'K', ['P', 'Po', 'Pt']) },
    { id: 'c5', text: 'NaCl commonly known as …', answers: A('c5', 'Salt', ['Soda', 'Lime', 'Chalk']) },
  ],
  javascript: [
    { id: 'j1', text: 'typeof null is …', answers: A('j1', 'object', ['null', 'undefined', 'string']) },
    { id: 'j2', text: 'Array.isArray([]) returns …', answers: A('j2', 'true', ['false', '[]', 'undefined']) },
    { id: 'j3', text: 'Strict equality operator is …', answers: A('j3', '===', ['==', '=>', '!==']) },
    { id: 'j4', text: 'JSON.parse("\"hi\"") returns …', answers: A('j4', '"hi"', ['hi', 'null', 'undefined']) },
    { id: 'j5', text: 'NaN === NaN evaluates to …', answers: A('j5', 'false', ['true', 'TypeError', '0']) },
  ],
  geography: [
    { id: 'g1', text: 'Capital of France is …', answers: A('g1', 'Paris', ['Lyon', 'Marseille', 'Nice']) },
    { id: 'g2', text: 'The Nile flows into which sea?', answers: A('g2', 'Mediterranean', ['Black Sea', 'Red Sea', 'Arabian Sea']) },
    { id: 'g3', text: 'Mount Everest lies in …', answers: A('g3', 'Himalayas', ['Andes', 'Alps', 'Rockies']) },
    { id: 'g4', text: 'The Sahara is a …', answers: A('g4', 'desert', ['river', 'lake', 'plateau']) },
    { id: 'g5', text: 'Largest ocean is …', answers: A('g5', 'Pacific', ['Atlantic', 'Indian', 'Arctic']) },
  ],
};

function questionsForCategory(categoryId: string): Question[] {
  const base = BANK[categoryId];
  if (base) return base;
  // Generic fallback tailored by category id/name
  return [
    { id: `${categoryId}-1`, text: `Intro fact about ${categoryId}?`, answers: A(`${categoryId}-1`, 'Yes', ['No', 'Maybe', 'Unknown']) },
    { id: `${categoryId}-2`, text: `Which relates to ${categoryId}?`, answers: A(`${categoryId}-2`, categoryId, ['Math', 'Physics', 'Art']) },
    { id: `${categoryId}-3`, text: `Common term in ${categoryId}?`, answers: A(`${categoryId}-3`, 'Basics', ['Random', 'Noise', 'None']) },
    { id: `${categoryId}-4`, text: `Choose a valid concept in ${categoryId}`, answers: A(`${categoryId}-4`, 'Core', ['Edge', 'Null', 'Gap']) },
    { id: `${categoryId}-5`, text: `${categoryId}: pick the correct option`, answers: A(`${categoryId}-5`, 'Correct', ['Wrong 1', 'Wrong 2', 'Wrong 3']) },
  ];
}

function buildThemes(categoryName: string): QuizTheme[] {
  return [
    { id: 't1', title: `${categoryName} basics`, description: 'Overview of fundamental ideas' },
    { id: 't2', title: 'Common pitfalls', description: 'Typical mistakes and how to avoid them' },
  ];
}

function makeQuiz(categoryId: string, categoryName: string, subtopic: string, index: number): Quiz {
  const qid = `${categoryId}-${index + 1}`;
  const baseQs = questionsForCategory(categoryId);
  return {
    id: qid,
    title: `${categoryName}: ${subtopic}`,
    categoryId,
    difficulty: 'very easy',
    description: `A focused set on ${subtopic.toLowerCase()} within ${categoryName}.`,
    requirements: ['Score 70%+', 'Finish within estimated time'],
    actions: ['Single-choice questions'],
    themes: buildThemes(categoryName),
    estimatedTimeMin: 10 + Math.round(Math.random() * 8),
    questions: baseQs.map((q, i) => ({
      ...q,
      id: `${qid}-q${i + 1}`,
      answers: q.answers.map((a, j) => ({ ...a, id: `${qid}-q${i + 1}-a${j + 1}` })),
    })),
  };
}

export const QUIZZES: Quiz[] = CATEGORY_DEFS.flatMap((cat) =>
  SUBTOPICS.slice(0, 20).map((sub, i) => makeQuiz(cat.id, cat.name, sub, i))
);

export function getQuizById(id?: string): Quiz | undefined {
  if (!id) return undefined;
  return QUIZZES.find((q) => q.id === id);
}

export function getQuizzesForCategory(categoryId: string): Quiz[] {
  return QUIZZES.filter((q) => q.categoryId === categoryId);
}
