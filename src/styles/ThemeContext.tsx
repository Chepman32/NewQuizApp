import React, { createContext, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { themes, Theme } from './theme';
import { ThemeType } from '../state/slices/appSlice';

const ThemeContext = createContext<Theme>(themes.dark);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeType = useSelector((s: RootState) => s.app.theme) as ThemeType;
  const currentTheme = useMemo(
    () => themes[themeType] || themes.dark,
    [themeType],
  );

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

export function useColors() {
  const theme = useTheme();
  return theme.colors;
}
