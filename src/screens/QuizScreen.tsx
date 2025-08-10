import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const translateX = useSharedValue(0);

  const next = () => {
    translateX.value = withTiming(-50, { duration: 200 }, () => {
      translateX.value = 50;
      translateX.value = withTiming(0, { duration: 200 });
    });
    setIndex((v) => v + 1);
  };

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateX: translateX.value }] }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.questionContainer, animatedStyle]}>
        <Text style={styles.question}>Question {index + 1}</Text>
        <TouchableOpacity style={styles.answer} onPress={next}>
          <Text>Answer A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answer} onPress={next}>
          <Text>Answer B</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  questionContainer: { flex: 1 },
  question: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  answer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
});

