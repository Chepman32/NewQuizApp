// Question types for the question bank
export type QuestionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type RawQuestion = {
  id: string;
  text: string;
  correct: string;
  wrong: string[];
  level: QuestionLevel;
};

export type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
  level?: number;
};

// Helper to create answers array with shuffled order
export function createAnswers(
  id: string,
  correct: string,
  wrong: string[],
): Answer[] {
  const all: Answer[] = [
    { id: `${id}-a1`, text: correct, isCorrect: true },
    ...wrong.map((t, i) => ({
      id: `${id}-a${i + 2}`,
      text: t,
      isCorrect: false,
    })),
  ];
  // Shuffle answers
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

// Helper to generate questions from raw data
export function generateQuestions(
  categoryPrefix: string,
  rawQuestions: RawQuestion[],
): Question[] {
  return rawQuestions.map((q, index) => ({
    id: `${categoryPrefix}${index + 1}`,
    text: q.text,
    answers: createAnswers(`${categoryPrefix}${index + 1}`, q.correct, q.wrong),
    level: q.level,
  }));
}
