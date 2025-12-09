import React, { useMemo } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { RootState } from './src/state/store';
import { ThemeType } from './src/state/slices/appSlice';
import { ThemeProvider, useTheme } from './src/styles/ThemeContext';

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
