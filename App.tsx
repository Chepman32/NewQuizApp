import React, { useEffect, useMemo } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { RootState } from './src/state/store';
import {
  addHints,
  markHintsSeeded,
  ThemeType,
} from './src/state/slices/appSlice';
import { ThemeProvider, useTheme } from './src/styles/ThemeContext';
import { themes } from './src/styles/theme';

function SeedHints() {
  const dispatch = useDispatch();
  const { hints, hintsSeeded } = useSelector((s: RootState) => s.app);
  useEffect(() => {
    const invalid =
      !Number.isFinite(hints as unknown as number) || (hints as number) <= 0;
    if (!hintsSeeded && invalid) {
      dispatch(addHints(20));
      dispatch(markHintsSeeded());
    }
  }, [dispatch, hints, hintsSeeded]);
  return null;
}

function AppContent() {
  const themeType = useSelector((s: RootState) => s.app.theme) as ThemeType;
  const appTheme = useTheme();

  const isDark = themeType === 'dark' || themeType === 'mono';
  const baseTheme = isDark ? DarkTheme : DefaultTheme;

  const navigationTheme: Theme = useMemo(
    () => ({
      ...baseTheme,
      dark: isDark,
      colors: {
        ...baseTheme.colors,
        primary: appTheme.colors.primary,
        background: appTheme.colors.background,
        card: appTheme.colors.surface,
        text: appTheme.colors.textPrimary,
        border: appTheme.colors.hairline,
        notification: appTheme.colors.primary,
      },
    }),
    [themeType, appTheme, baseTheme, isDark],
  );

  return (
    <>
      <SeedHints />
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={navigationTheme}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
              <AppContent />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
