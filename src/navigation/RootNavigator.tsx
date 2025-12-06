import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import QuizStartScreen from '../screens/QuizStartScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizResultsScreen from '../screens/QuizResultsScreen';
import ProgressScreen from '../screens/ProgressScreen';
import StoreScreen from '../screens/StoreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '../styles/ThemeContext';
import { useT } from '../i18n';

Feather.loadFont();

type ResultItem = {
  id: string;
  text: string;
  correctAnswer: string;
  chosenAnswer?: string;
  isCorrect: boolean;
};

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  CategoryDetail: { categoryId: string };
  QuizStart: { quizId: string };
  Quiz: { quizId: string; categoryId?: string; difficulty?: string };
  QuizResults: {
    quizId?: string;
    categoryId?: string;
    score: number;
    total: number;
    timeSeconds: number;
    results: ResultItem[];
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const t = useT();
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.hairline,
        },
        tabBarIcon: ({ color, size }) => {
          const name =
            route.name === 'Quizzes'
              ? 'home'
              : route.name === 'Progress'
              ? 'bar-chart-2'
              : route.name === 'Premium'
              ? 'star'
              : 'settings';
          return <Icon name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Quizzes"
        component={HomeScreen}
        options={{ title: t('quizzes'), tabBarLabel: t('quizzes') }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ title: t('progress'), tabBarLabel: t('progress') }}
      />
      <Tab.Screen
        name="Premium"
        component={StoreScreen}
        options={{ title: t('premium'), tabBarLabel: t('premium') }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: t('settings_tab'), tabBarLabel: t('settings_tab') }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const t = useT();
  const theme = useTheme();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.textPrimary,
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <RootStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={{ title: t('category') }}
      />
      <RootStack.Screen
        name="QuizStart"
        component={QuizStartScreen}
        options={{ title: t('start_quiz_title') }}
      />
      <RootStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: t('quiz_title') }}
      />
      <RootStack.Screen
        name="QuizResults"
        component={QuizResultsScreen}
        options={{ title: t('results_title') }}
      />
    </RootStack.Navigator>
  );
}
