import {
  QuestionMastery,
  AnswerQuality,
  MasteryLevel,
  createInitialMastery,
} from './types';
import type { Difficulty } from '../data/catalog';

const MIN_EASINESS_FACTOR = 1.3;
const INITIAL_EASINESS_FACTOR = 2.5;

// Quality grade mapping (SM-2 uses 0-5 scale)
const QUALITY_GRADES: Record<AnswerQuality, number> = {
  perfect: 5,
  correct: 4,
  hesitant: 3,
  incorrect: 0,
};

// Response time thresholds in milliseconds
const FAST_RESPONSE_MS = 5000; // Under 5 seconds = perfect
const SLOW_RESPONSE_MS = 15000; // Over 15 seconds = hesitant

export function determineAnswerQuality(
  isCorrect: boolean,
  responseTimeMs: number,
): AnswerQuality {
  if (!isCorrect) {
    return 'incorrect';
  }

  if (responseTimeMs < FAST_RESPONSE_MS) {
    return 'perfect';
  } else if (responseTimeMs > SLOW_RESPONSE_MS) {
    return 'hesitant';
  }
  return 'correct';
}

export function calculateNextReview(
  mastery: QuestionMastery,
  quality: AnswerQuality,
  responseTimeMs: number,
): Partial<QuestionMastery> {
  const grade = QUALITY_GRADES[quality];
  const isCorrect = grade >= 3;

  let newEF = mastery.easinessFactor;
  let newInterval = mastery.interval;
  let newRepetitions = mastery.repetitions;

  if (isCorrect) {
    // Update Easiness Factor using SM-2 formula
    // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    newEF =
      mastery.easinessFactor +
      (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));

    // Clamp EF to minimum
    newEF = Math.max(MIN_EASINESS_FACTOR, newEF);

    // Calculate new interval
    if (mastery.repetitions === 0) {
      newInterval = 1; // First review: 1 day
    } else if (mastery.repetitions === 1) {
      newInterval = 6; // Second review: 6 days
    } else {
      newInterval = Math.round(mastery.interval * newEF);
    }

    newRepetitions = mastery.repetitions + 1;
  } else {
    // Incorrect: reset to beginning
    newRepetitions = 0;
    newInterval = 1;
    // EF stays the same on incorrect (SM-2 doesn't penalize EF for wrong)
  }

  const now = new Date();
  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + newInterval);

  const newTotalAttempts = mastery.totalAttempts + 1;
  const newCorrectAttempts = mastery.correctAttempts + (isCorrect ? 1 : 0);

  return {
    easinessFactor: newEF,
    interval: newInterval,
    repetitions: newRepetitions,
    nextReviewDate: nextReview.toISOString(),
    lastReviewDate: now.toISOString(),
    totalAttempts: newTotalAttempts,
    correctAttempts: newCorrectAttempts,
    averageResponseTimeMs: calculateNewAverage(
      mastery.averageResponseTimeMs,
      responseTimeMs,
      mastery.totalAttempts,
    ),
    masteryLevel: calculateMasteryLevel(newRepetitions, newEF, newInterval),
    isLearning: newRepetitions < 3,
    isMastered: newRepetitions >= 15 && newEF > 2.6 && newInterval > 21,
  };
}

function calculateNewAverage(
  currentAvg: number,
  newValue: number,
  currentCount: number,
): number {
  if (currentCount === 0) return newValue;
  return Math.round(
    (currentAvg * currentCount + newValue) / (currentCount + 1),
  );
}

export function calculateMasteryLevel(
  repetitions: number,
  ef: number,
  interval: number,
): MasteryLevel {
  if (repetitions === 0) return 0;
  if (repetitions < 3) return 1;
  if (repetitions < 5 || ef < 2.0) return 2;
  if (repetitions < 10 || ef < 2.3) return 3;
  if (repetitions < 15 || ef < 2.6 || interval <= 21) return 4;
  return 5;
}

export function getOrCreateMastery(
  masteryRecord: Record<string, QuestionMastery>,
  questionId: string,
  categoryId: string,
  difficulty: Difficulty,
): QuestionMastery {
  const existing = masteryRecord[questionId];
  if (existing) {
    return existing;
  }
  return createInitialMastery(questionId, categoryId, difficulty);
}

export function getMasteryLevelLabel(level: MasteryLevel): string {
  switch (level) {
    case 0:
      return 'New';
    case 1:
      return 'Learning';
    case 2:
      return 'Familiar';
    case 3:
      return 'Practiced';
    case 4:
      return 'Proficient';
    case 5:
      return 'Mastered';
    default:
      return 'Unknown';
  }
}
