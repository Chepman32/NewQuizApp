export type QuizTheme = {
  id: string;
  title: string;
  description: string;
};

export type MockQuestion = {
  id: string;
  text: string;
  answers: { id: string; text: string; isCorrect: boolean }[];
};

export type MockQuiz = {
  id: string;
  title: string;
  categoryId: string;
  difficulty:
    | 'very easy'
    | 'easy'
    | 'intermediate'
    | 'normal'
    | 'hard'
    | 'very hard'
    | 'legendary'
    | 'professor';
  description: string;
  requirements: string[];
  actions: string[];
  themes: QuizTheme[];
  estimatedTimeMin: number;
  questions: MockQuestion[];
};

export const MOCK_QUIZZES: MockQuiz[] = (() => {
  const difficulties = [
    'very easy',
    'easy',
    'intermediate',
    'normal',
    'hard',
    'very hard',
    'legendary',
    'professor',
  ] as const;
  const questionCountForDifficulty: Record<typeof difficulties[number], number> = {
    'very easy': 10,
    easy: 20,
    intermediate: 30,
    normal: 40,
    hard: 50,
    'very hard': 60,
    legendary: 70,
    professor: 100,
  };
  const categories = ['cat1', 'cat2', 'cat3'];
  const arr: MockQuiz[] = [];
  for (let i = 1; i <= 40; i++) {
    const id = `q${i}`;
    const difficulty = difficulties[i % difficulties.length];
    const categoryId = categories[i % categories.length];
    const themes: QuizTheme[] = Array.from({ length: 4 }, (_, t) => ({
      id: `${id}-theme-${t + 1}`,
      title: `Theme ${t + 1}`,
      description: `Deep dive into theme ${t + 1} including core concepts and tricky edge-cases.`,
    }));
    const questionsTotal = questionCountForDifficulty[difficulty];
    const questions: MockQuestion[] = Array.from({ length: questionsTotal }, (_, qi) => ({
      id: `${id}-q-${qi + 1}`,
      text: `Question ${qi + 1} for ${id}: choose the correct option`,
      answers: Array.from({ length: 4 }, (_, ai) => ({
        id: `${id}-q-${qi + 1}-a-${ai + 1}`,
        text: `Answer ${ai + 1}`,
        isCorrect: ai === 1,
      })),
    }));
    arr.push({
      id,
      title: `Pro Quiz ${i}`,
      categoryId,
      difficulty,
      description:
        'A curated, hands-on assessment designed to evaluate understanding with real-world scenarios. Includes time-bound checkpoints, multi-select items, and explanation-driven reviews.',
      requirements: [
        'Score at least 70% to pass',
        'Finish within the estimated time',
        'Avoid leaving the app to keep timer running',
      ],
      actions: [
        'Single and multi-select questions',
        'Drag-and-drop ordering in some tasks',
        'Code/logic reasoning with short explanations',
      ],
      themes,
      estimatedTimeMin: Math.max(10, Math.round(questionsTotal * 1.2)),
      questions,
    });
  }
  return arr;
})();

export function getQuizById(id: string | undefined): MockQuiz | undefined {
  if (!id) return undefined;
  return MOCK_QUIZZES.find((q) => q.id === id);
}

