import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useTheme } from '../styles/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const theme = useTheme();
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(1.2, { damping: 10 }, () => {
      scale.value = withSpring(1);
    });
    opacity.value = withTiming(1, { duration: 400 });

    const timeout = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 400 }, () => {
        runOnJS(navigation.replace)('Main');
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <Animated.View style={[styles.logo, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 96, height: 96, borderRadius: 48, backgroundColor: 'white' },
});
