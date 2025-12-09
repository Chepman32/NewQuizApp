import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  QuestionMastery,
  DailyLearningStats,
  CategoryMasteryStats,
  AnswerQuality,
  createInitialMastery,
} from '../../learning/types';
import { calculateNextReview } from '../../learning/algorithm';
import { computeCategoryStats } from '../../learning/reviewQueue';
import type { Difficulty } from '../../data/catalog';

export interface LearningState {
  // Per-question mastery tracking
  questionMastery: Record<string, QuestionMastery>;

  // Daily learning stats
  dailyStats: DailyLearningStats;

  // Category-level aggregations
  categoryMastery: Record<string, CategoryMasteryStats>;
}

const getTodayDate = () => new Date().toISOString().split('T')[0];

const initialState: LearningState = {
  questionMastery: {},
  dailyStats: {
    date: getTodayDate(),
    questionsReviewed: 0,
    correctAnswers: 0,
    timeSpentSeconds: 0,
    newQuestionsSeen: 0,
    questionsMastered: 0,
  },
  categoryMastery: {},
};

const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    recordAnswer(
      state,
      action: PayloadAction<{
        questionId: string;
        categoryId: string;
        difficulty: Difficulty;
        quality: AnswerQuality;
        responseTimeMs: number;
      }>,
    ) {
      const { questionId, categoryId, difficulty, quality, responseTimeMs } =
        action.payload;

      // Get or create mastery record
      const existing =
        state.questionMastery[questionId] ??
        createInitialMastery(questionId, categoryId, difficulty);
      const wasNew = !state.questionMastery[questionId];
      const wasMastered = existing.isMastered;

      // Calculate new mastery values
      const updates = calculateNextReview(existing, quality, responseTimeMs);

      // Update mastery record
      state.questionMastery[questionId] = { ...existing, ...updates };

      // Update daily stats
      const today = getTodayDate();
      if (state.dailyStats.date !== today) {
        // Reset daily stats for new day
        state.dailyStats = {
          date: today,
          questionsReviewed: 0,
          correctAnswers: 0,
          timeSpentSeconds: 0,
          newQuestionsSeen: 0,
          questionsMastered: 0,
        };
      }
      state.dailyStats.questionsReviewed++;
      if (quality !== 'incorrect') {
        state.dailyStats.correctAnswers++;
      }
      if (wasNew) {
        state.dailyStats.newQuestionsSeen++;
      }
      if (updates.isMastered && !wasMastered) {
        state.dailyStats.questionsMastered++;
      }
    },

    addTimeSpent(state, action: PayloadAction<number>) {
      const today = getTodayDate();
      if (state.dailyStats.date !== today) {
        state.dailyStats = {
          date: today,
          questionsReviewed: 0,
          correctAnswers: 0,
          timeSpentSeconds: 0,
          newQuestionsSeen: 0,
          questionsMastered: 0,
        };
      }
      state.dailyStats.timeSpentSeconds += action.payload;
    },

    recomputeCategoryMastery(
      state,
      action: PayloadAction<{
        categoryId: string;
        totalQuestionsInCategory: number;
      }>,
    ) {
      const { categoryId, totalQuestionsInCategory } = action.payload;

      // Get all mastery records for this category
      const categoryMasteryList = Object.values(state.questionMastery).filter(
        m => m.categoryId === categoryId,
      );

      state.categoryMastery[categoryId] = computeCategoryStats(
        categoryId,
        categoryMasteryList,
        totalQuestionsInCategory,
      );
    },

    resetLearningData(state) {
      return initialState;
    },

    // Batch import mastery data (useful for syncing)
    importMasteryData(
      state,
      action: PayloadAction<Record<string, QuestionMastery>>,
    ) {
      state.questionMastery = {
        ...state.questionMastery,
        ...action.payload,
      };
    },
  },
});

export const {
  recordAnswer,
  addTimeSpent,
  recomputeCategoryMastery,
  resetLearningData,
  importMasteryData,
} = learningSlice.actions;

export default learningSlice.reducer;
