import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark' | 'solar' | 'mono';

type AppState = {
  isPremium: boolean;
  soundEffectsEnabled: boolean;
  hapticsEnabled: boolean;
  theme: ThemeType;
  hints: number;
  hintsSeeded: boolean;
  requireAnswerConfirm: boolean;
  language: string;
};

const initialState: AppState = {
  isPremium: false,
  soundEffectsEnabled: true,
  hapticsEnabled: true,
  theme: 'dark',
  hints: 20,
  hintsSeeded: false,
  requireAnswerConfirm: false,
  language: 'en',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPremium(state, action: PayloadAction<boolean>) {
      state.isPremium = action.payload;
    },
    addHints(state, action: PayloadAction<number>) {
      const delta = Math.max(0, action.payload);
      state.hints += delta;
    },
    setHints(state, action: PayloadAction<number>) {
      state.hints = Math.max(0, action.payload);
    },
    consumeHint(state) {
      state.hints = Math.max(0, state.hints - 1);
    },
    markHintsSeeded(state) {
      state.hintsSeeded = true;
    },
    toggleSoundEffects(state) {
      state.soundEffectsEnabled = !state.soundEffectsEnabled;
    },
    toggleHaptics(state) {
      state.hapticsEnabled = !state.hapticsEnabled;
    },
    setTheme(state, action: PayloadAction<AppState['theme']>) {
      state.theme = action.payload;
    },
    toggleRequireAnswerConfirm(state) {
      state.requireAnswerConfirm = !state.requireAnswerConfirm;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const {
  setPremium,
  addHints,
  setHints,
  consumeHint,
  markHintsSeeded,
  toggleSoundEffects,
  toggleHaptics,
  setTheme,
  toggleRequireAnswerConfirm,
  setLanguage,
} = appSlice.actions;
export default appSlice.reducer;
