import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Attempt = {
  id: string; // unique id for attempt
  quizId: string;
  categoryId: string;
  score: number; // number correct
  total: number;
  timeSeconds: number;
  createdAt: string; // ISO date
};

export type ProgressState = {
  attempts: Attempt[];
  totals: {
    questionsAnswered: number;
    correctAnswers: number;
    totalTimeSeconds: number;
  };
};

const initialState: ProgressState = {
  attempts: [],
  totals: { questionsAnswered: 0, correctAnswers: 0, totalTimeSeconds: 0 },
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    addAttempt(state, action: PayloadAction<Attempt>) {
      state.attempts.unshift(action.payload);
      state.totals.questionsAnswered += action.payload.total;
      state.totals.correctAnswers += action.payload.score;
      state.totals.totalTimeSeconds += action.payload.timeSeconds;
    },
    clearProgress(state) {
      state.attempts = [];
      state.totals = { questionsAnswered: 0, correctAnswers: 0, totalTimeSeconds: 0 };
    },
  },
});

export const { addAttempt, clearProgress } = progressSlice.actions;
export default progressSlice.reducer;