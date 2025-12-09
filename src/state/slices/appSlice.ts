import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark' | 'solar' | 'mono';

type AppState = {
  soundEffectsEnabled: boolean;
  hapticsEnabled: boolean;
  theme: ThemeType;
  requireAnswerConfirm: boolean;
  language: string;
};

const initialState: AppState = {
  soundEffectsEnabled: true,
  hapticsEnabled: true,
  theme: 'dark',
  requireAnswerConfirm: false,
  language: 'en',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
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
  toggleSoundEffects,
  toggleHaptics,
  setTheme,
  toggleRequireAnswerConfirm,
  setLanguage,
} = appSlice.actions;
export default appSlice.reducer;
