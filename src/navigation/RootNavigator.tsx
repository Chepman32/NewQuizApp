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

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  CategoryDetail: { categoryId: string };
  QuizStart: { quizId: string };
  Quiz: { quizId: string };
  QuizResults: { quizId: string; score: number };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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
      <Tab.Screen name="Quizzes" component={HomeScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Premium" component={StoreScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Main" component={MainTabs} />
      <RootStack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
      <RootStack.Screen name="QuizStart" component={QuizStartScreen} />
      <RootStack.Screen name="Quiz" component={QuizScreen} />
      <RootStack.Screen name="QuizResults" component={QuizResultsScreen} />
    </RootStack.Navigator>
  );
}

