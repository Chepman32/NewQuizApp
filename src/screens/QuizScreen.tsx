import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { getQuizById } from '../data/mockQuizzes';

export default function QuizScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const quizId: string | undefined = route.params?.quizId;
  const quiz = useMemo(() => getQuizById(quizId), [quizId]);

  const [index, setIndex] = useState(0);
  const [freeHintsLeft, setFreeHintsLeft] = useState(2);
  const [results, setResults] = useState<{ id: string; text: string; correctAnswer: string; chosenAnswer?: string; isCorrect: boolean }[]>([]);
  const [hintSheetOpen, setHintSheetOpen] = useState(false);
  const [eliminatedIds, setEliminatedIds] = useState<Set<string>>(new Set());
  const [revealCorrect, setRevealCorrect] = useState(false);
  const translateX = useSharedValue(0);

  const timerRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => (timerRef.current += 1), 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const q = quiz?.questions[index];

  const goNext = (chosen?: string) => {
    if (!quiz || !q) return;
    const correct = q.answers.find((a) => a.isCorrect)?.text ?? '';
    const isCorrect = chosen ? chosen === correct : false;
    const newResults = [...results, { id: q.id, text: q.text, correctAnswer: correct, chosenAnswer: chosen, isCorrect }];
    setResults(newResults);

    translateX.value = withTiming(-50, { duration: 200 }, () => {
      translateX.value = 50;
      translateX.value = withTiming(0, { duration: 200 });
    });

    const nextIndex = index + 1;
    const isDone = nextIndex >= quiz.questions.length;
    if (isDone) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const score = newResults.reduce((acc, r) => acc + (r.isCorrect ? 1 : 0), 0);
      navigation.replace('QuizResults', {
        score,
        total: quiz.questions.length,
        timeSeconds: timerRef.current,
        results: newResults,
      });
    } else {
      setIndex(nextIndex);
      setFreeHintsLeft(2);
      setEliminatedIds(new Set());
      setRevealCorrect(false);
    }
  };

  const openHintSheet = () => {
    if (freeHintsLeft <= 0) return;
    setHintSheetOpen(true);
  };

  const applyHint = (type: '50-50' | 'reveal') => {
    if (!q || freeHintsLeft <= 0) return;
    if (type === '50-50') {
      const wrong = q.answers.filter((a) => !a.isCorrect && !eliminatedIds.has(a.id));
      // pick two wrong answers
      const shuffled = [...wrong].sort(() => Math.random() - 0.5);
      const chosen = shuffled.slice(0, 2).map((a) => a.id);
      const nextSet = new Set(eliminatedIds);
      chosen.forEach((id) => nextSet.add(id));
      setEliminatedIds(nextSet);
    } else if (type === 'reveal') {
      setRevealCorrect(true);
    }
    setFreeHintsLeft((v) => Math.max(0, v - 1));
    setHintSheetOpen(false);
  };

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateX: translateX.value }] }));

  if (!quiz || !q) {
    return (
      <View style={styles.container}>
        <Text>Loading…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.progress}>Question {index + 1} / {quiz.questions.length}</Text>
        <Text style={styles.progress}>Hints: {freeHintsLeft}</Text>
      </View>

      <Animated.View style={[styles.questionContainer, animatedStyle]}>
        <Text style={styles.question}>{q.text}</Text>
        {q.answers.map((a) => {
          const disabled = eliminatedIds.has(a.id);
          const isReveal = revealCorrect && a.isCorrect;
          return (
            <TouchableOpacity key={a.id} style={[styles.answer, disabled && styles.answerDisabled, isReveal && styles.answerReveal]} disabled={disabled} onPress={() => goNext(a.text)}>
              <Text style={[disabled && { opacity: 0.5 }]}>{a.text}</Text>
            </TouchableOpacity>
          );
        })}
      </Animated.View>

      <View style={styles.footerRow}>
        <TouchableOpacity
          style={[styles.hintBtn, freeHintsLeft <= 0 && { opacity: 0.5 }]}
          disabled={freeHintsLeft <= 0}
          onPress={openHintSheet}
        >
          <Text style={styles.hintText}>Use hint ({freeHintsLeft} left)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipBtn} onPress={() => goNext(undefined)}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={hintSheetOpen} animationType="slide" onRequestClose={() => setHintSheetOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setHintSheetOpen(false)} />
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>Choose a hint</Text>
          <TouchableOpacity style={styles.sheetItem} onPress={() => applyHint('50-50')}>
            <Text style={styles.sheetItemText}>Eliminate 2 incorrect answers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetItem} onPress={() => applyHint('reveal')}>
            <Text style={styles.sheetItemText}>Highlight the correct answer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

function prevScoreFrom(items: { isCorrect: boolean }[]) {
  return items.map((r) => (r.isCorrect ? 1 : 0));
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progress: { fontWeight: '700' },
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
  answerDisabled: { backgroundColor: '#F2F2F7' },
  answerReveal: { borderWidth: 2, borderColor: '#34C759' },
  footerRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
  hintBtn: { flex: 1, backgroundColor: '#34C759', padding: 14, borderRadius: 12, alignItems: 'center' },
  hintText: { color: '#fff', fontWeight: '700' },
  skipBtn: { backgroundColor: '#E9ECEF', padding: 14, borderRadius: 12 },
  skipText: { fontWeight: '700' },
  backdrop: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
  sheet: { position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: '#fff', padding: 16, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  sheetTitle: { fontSize: 18, fontWeight: '800', marginBottom: 8 },
  sheetItem: { paddingVertical: 14 },
  sheetItemText: { fontWeight: '600' },
});

