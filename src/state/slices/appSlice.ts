import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  isPremium: boolean;
  soundEffectsEnabled: boolean;
  hapticsEnabled: boolean;
  theme: 'light' | 'dark' | 'system';
};

const initialState: AppState = {
  isPremium: false,
  soundEffectsEnabled: true,
  hapticsEnabled: true,
  theme: 'system',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPremium(state, action: PayloadAction<boolean>) {
      state.isPremium = action.payload;
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
  },
});

export const { setPremium, toggleSoundEffects, toggleHaptics, setTheme } = appSlice.actions;
export default appSlice.reducer;

