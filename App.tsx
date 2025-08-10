import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { RootState } from './src/state/store';
import { addHints, markHintsSeeded } from './src/state/slices/appSlice';

function SeedHints() {
  const dispatch = useDispatch();
  const { hints, hintsSeeded } = useSelector((s: RootState) => s.app);
  useEffect(() => {
    const invalid = !Number.isFinite(hints as unknown as number) || (hints as number) <= 0;
    if (!hintsSeeded && invalid) {
      dispatch(addHints(20));
      dispatch(markHintsSeeded());
    }
  }, [dispatch, hints, hintsSeeded]);
  return null;
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
              <SeedHints />
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <RootNavigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
