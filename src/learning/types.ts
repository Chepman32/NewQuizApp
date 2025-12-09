import type { Difficulty } from '../data/catalog';

export type AnswerQuality =
  | 'perfect' // Correct without hints, fast response
  | 'correct' // Correct without hints, normal response
  | 'hesitant' // Correct without hints, slow response
  | 'incorrect'; // Wrong answer

export type MasteryLevel = 0 | 1 | 2 | 3 | 4 | 5;
// 0 = New/Unknown
// 1 = Learning (1-2 correct)
// 2 = Familiar (3-4 correct)
// 3 = Practiced (5+ correct)
// 4 = Proficient (10+ correct)
// 5 = Mastered (15+ correct, EF > 2.6, interval > 21 days)

export interface QuestionMastery {
  questionId: string;
  categoryId: string;
  difficulty: Difficulty;

  // SM-2 core parameters
  easinessFactor: number; // EF: starts at 2.5, min 1.3
  interval: number; // Days until next review
  repetitions: number; // Consecutive correct answers

  // Extended tracking
  nextReviewDate: string; // ISO date
  lastReviewDate: string; // ISO date
  totalAttempts: number;
  correctAttempts: number;
  averageResponseTimeMs: number;

  // Mastery calculation
  masteryLevel: MasteryLevel;
  isLearning: boolean; // Still in initial learning phase
  isMastered: boolean; // Graduated from learning
}

export interface DailyLearningStats {
  date: string; // ISO date (YYYY-MM-DD)
  questionsReviewed: number;
  correctAnswers: number;
  timeSpentSeconds: number;
  newQuestionsSeen: number;
  questionsMastered: number;
}

export interface CategoryMasteryStats {
  categoryId: string;
  totalQuestions: number;
  masteredQuestions: number;
  learningQuestions: number;
  dueForReview: number;
  averageEasiness: number;
  overallMasteryPercent: number;
  weakestDifficulty: Difficulty | null;
  strongestDifficulty: Difficulty | null;
}

export interface ReviewItem {
  questionId: string;
  categoryId: string;
  priority: number;
  reason: 'overdue' | 'due_today' | 'learning' | 'weak' | 'new';
}

export function createInitialMastery(
  questionId: string,
  categoryId: string,
  difficulty: Difficulty,
): QuestionMastery {
  const now = new Date().toISOString();
  return {
    questionId,
    categoryId,
    difficulty,
    easinessFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReviewDate: now,
    lastReviewDate: now,
    totalAttempts: 0,
    correctAttempts: 0,
    averageResponseTimeMs: 0,
    masteryLevel: 0,
    isLearning: true,
    isMastered: false,
  };
}
