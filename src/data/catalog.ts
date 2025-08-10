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

const SAMPLE_QUESTIONS: Question[] = [
  { id: 'q1', text: 'Which of these is a prime number?', answers: A('q1', '17', ['12', '21', '20']) },
  { id: 'q2', text: 'SI unit of force is…', answers: A('q2', 'Newton', ['Watt', 'Joule', 'Ampere']) },
  { id: 'q3', text: 'Which symbol represents potassium?', answers: A('q3', 'K', ['P', 'Pt', 'Po']) },
  { id: 'q4', text: 'Which city is the capital of France?', answers: A('q4', 'Paris', ['Lyon', 'Marseille', 'Toulouse']) },
  { id: 'q5', text: 'In programming, what does const declare?', answers: A('q5', 'A read‑only binding', ['A constant object', 'An immutable value', 'A global variable']) },
];

function buildThemes(categoryName: string): QuizTheme[] {
  return [
    { id: 't1', title: `${categoryName} basics`, description: 'Overview of fundamental ideas' },
    { id: 't2', title: 'Common pitfalls', description: 'Typical mistakes and how to avoid them' },
  ];
}

function makeQuiz(categoryId: string, categoryName: string, subtopic: string, index: number): Quiz {
  const qid = `${categoryId}-${index + 1}`;
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
    questions: SAMPLE_QUESTIONS.map((q, i) => ({
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
