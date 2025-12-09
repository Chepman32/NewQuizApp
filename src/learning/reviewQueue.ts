import { QuestionMastery, ReviewItem, CategoryMasteryStats } from './types';
import type { Difficulty } from '../data/catalog';

export function buildReviewQueue(
  allQuestionIds: string[],
  masteryData: Record<string, QuestionMastery>,
  categoryId?: string,
  limit: number = 20,
): ReviewItem[] {
  const now = new Date();
  const queue: ReviewItem[] = [];

  for (const questionId of allQuestionIds) {
    const mastery = masteryData[questionId];

    // Filter by category if specified
    if (categoryId && mastery && mastery.categoryId !== categoryId) {
      continue;
    }

    if (!mastery) {
      // New question - lower priority than overdue
      queue.push({
        questionId,
        categoryId: categoryId || 'unknown',
        priority: 50,
        reason: 'new',
      });
      continue;
    }

    const reviewDate = new Date(mastery.nextReviewDate);
    const daysOverdue = Math.floor(
      (now.getTime() - reviewDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (daysOverdue > 0) {
      // Overdue: highest priority, scaled by how overdue
      queue.push({
        questionId,
        categoryId: mastery.categoryId,
        priority: 100 + Math.min(daysOverdue * 5, 50),
        reason: 'overdue',
      });
    } else if (daysOverdue === 0) {
      // Due today
      queue.push({
        questionId,
        categoryId: mastery.categoryId,
        priority: 90,
        reason: 'due_today',
      });
    } else if (mastery.isLearning) {
      // In learning phase - review more frequently
      queue.push({
        questionId,
        categoryId: mastery.categoryId,
        priority: 70 - mastery.repetitions * 5,
        reason: 'learning',
      });
    } else if (mastery.easinessFactor < 2.0) {
      // Weak questions - struggle items
      queue.push({
        questionId,
        categoryId: mastery.categoryId,
        priority: 60,
        reason: 'weak',
      });
    }
  }

  // Sort by priority (highest first) and take limit
  return queue.sort((a, b) => b.priority - a.priority).slice(0, limit);
}

export function getDueReviewCount(
  masteryData: Record<string, QuestionMastery>,
): {
  overdue: number;
  dueToday: number;
  learning: number;
  total: number;
} {
  const now = new Date();
  let overdue = 0;
  let dueToday = 0;
  let learning = 0;

  for (const mastery of Object.values(masteryData)) {
    const reviewDate = new Date(mastery.nextReviewDate);
    const daysOverdue = Math.floor(
      (now.getTime() - reviewDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (daysOverdue > 0) {
      overdue++;
    } else if (daysOverdue === 0) {
      dueToday++;
    }

    if (mastery.isLearning) {
      learning++;
    }
  }

  return {
    overdue,
    dueToday,
    learning,
    total: overdue + dueToday,
  };
}

export function computeCategoryStats(
  categoryId: string,
  masteryList: QuestionMastery[],
  totalQuestionsInCategory: number,
): CategoryMasteryStats {
  if (masteryList.length === 0) {
    return {
      categoryId,
      totalQuestions: totalQuestionsInCategory,
      masteredQuestions: 0,
      learningQuestions: 0,
      dueForReview: 0,
      averageEasiness: 2.5,
      overallMasteryPercent: 0,
      weakestDifficulty: null,
      strongestDifficulty: null,
    };
  }

  const now = new Date();
  let masteredCount = 0;
  let learningCount = 0;
  let dueCount = 0;
  let totalEasiness = 0;

  const difficultyStats: Record<string, { count: number; correct: number }> =
    {};

  for (const mastery of masteryList) {
    if (mastery.isMastered) masteredCount++;
    if (mastery.isLearning) learningCount++;

    const reviewDate = new Date(mastery.nextReviewDate);
    if (reviewDate <= now) dueCount++;

    totalEasiness += mastery.easinessFactor;

    // Track per-difficulty stats
    const diff = mastery.difficulty;
    if (!difficultyStats[diff]) {
      difficultyStats[diff] = { count: 0, correct: 0 };
    }
    difficultyStats[diff].count += mastery.totalAttempts;
    difficultyStats[diff].correct += mastery.correctAttempts;
  }

  // Find weakest and strongest difficulty
  let weakest: Difficulty | null = null;
  let strongest: Difficulty | null = null;
  let weakestAccuracy = 1;
  let strongestAccuracy = 0;

  for (const [diff, stats] of Object.entries(difficultyStats)) {
    if (stats.count === 0) continue;
    const accuracy = stats.correct / stats.count;
    if (accuracy < weakestAccuracy) {
      weakestAccuracy = accuracy;
      weakest = diff as Difficulty;
    }
    if (accuracy > strongestAccuracy) {
      strongestAccuracy = accuracy;
      strongest = diff as Difficulty;
    }
  }

  return {
    categoryId,
    totalQuestions: totalQuestionsInCategory,
    masteredQuestions: masteredCount,
    learningQuestions: learningCount,
    dueForReview: dueCount,
    averageEasiness: totalEasiness / masteryList.length,
    overallMasteryPercent: Math.round(
      (masteredCount / totalQuestionsInCategory) * 100,
    ),
    weakestDifficulty: weakest,
    strongestDifficulty: strongest,
  };
}

export function getWeakCategories(
  categoryStats: Record<string, CategoryMasteryStats>,
  limit: number = 3,
): CategoryMasteryStats[] {
  return Object.values(categoryStats)
    .filter(c => c.overallMasteryPercent < 70)
    .sort((a, b) => a.overallMasteryPercent - b.overallMasteryPercent)
    .slice(0, limit);
}
