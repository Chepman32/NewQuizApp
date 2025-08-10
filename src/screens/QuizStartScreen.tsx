import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export default function QuizStartScreen() {
  const scale = useSharedValue(1);

  scale.value = withRepeat(withTiming(1.05, { duration: 1000 }), -1, true);

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Title</Text>
      <Animated.View style={[styles.cta, animatedStyle]}>
        <Text style={styles.ctaText}>Start Quiz</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  title: { fontSize: 24, fontWeight: '700' },
  cta: {
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  ctaText: { color: 'white', fontWeight: '600' },
});

