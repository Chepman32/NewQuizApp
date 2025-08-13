import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { getQuizByIdLocalized } from '../data/catalog';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { consumeHint } from '../state/slices/appSlice';
import { theme } from '../styles/theme';
import { useT, useTf } from '../i18n';

export default function QuizScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const quizId: string | undefined = route.params?.quizId;
  const categoryId: string | undefined = route.params?.categoryId;
  const lang = useSelector((s: RootState) => s.app.language);
  const quiz = useMemo(() => getQuizByIdLocalized(quizId, lang as any), [quizId, lang]);

  const dispatch = useDispatch();
  const globalHints = useSelector((s: RootState) => s.app.hints);
  const requireConfirm = useSelector((s: RootState) => s.app.requireAnswerConfirm);
  const tt = useT();
  const tf = useTf();

  const [index, setIndex] = useState(0);
  const [hintSheetOpen, setHintSheetOpen] = useState(false);
  const [eliminatedIds, setEliminatedIds] = useState<Set<string>>(new Set());
  const [revealCorrect, setRevealCorrect] = useState(false);
  const [usedHintsThisQuestion, setUsedHintsThisQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined);
  const translateX = useSharedValue(0);

  const timerRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => (timerRef.current += 1), 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const q = quiz?.questions[index];

  const [results, setResults] = useState<{ id: string; text: string; correctAnswer: string; chosenAnswer?: string; isCorrect: boolean }[]>([]);

  const submitAnswer = (chosen?: string) => {
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
    const isDone = nextIndex >= (quiz?.questions.length ?? 0);
    if (isDone) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const score = newResults.reduce((acc, r) => acc + (r.isCorrect ? 1 : 0), 0);
      navigation.replace('QuizResults', {
        score,
        total: quiz?.questions.length ?? 0,
        timeSeconds: timerRef.current,
        results: newResults,
        quizId: quiz?.id,
        categoryId: quiz?.categoryId ?? categoryId,
      });
    } else {
      setIndex(nextIndex);
      setEliminatedIds(new Set());
      setRevealCorrect(false);
      setUsedHintsThisQuestion(0);
      setSelectedAnswer(undefined);
    }
  };

  const onAnswerPress = (text: string) => {
    if (requireConfirm) {
      setSelectedAnswer(text);
    } else {
      submitAnswer(text);
    }
  };

  const openHintSheet = () => {
    setHintSheetOpen(true);
  };

  const applyHint = (type: '50-50' | 'reveal') => {
    const canUse = globalHints > 0 && usedHintsThisQuestion < 2;
    if (!q || !canUse) return;
    if (type === '50-50') {
      const wrong = q.answers.filter((a) => !a.isCorrect && !eliminatedIds.has(a.id));
      const shuffled = [...wrong].sort(() => Math.random() - 0.5);
      const chosen = shuffled.slice(0, 2).map((a) => a.id);
      const nextSet = new Set(eliminatedIds);
      chosen.forEach((id) => nextSet.add(id));
      setEliminatedIds(nextSet);
    } else if (type === 'reveal') {
      setRevealCorrect(true);
    }
    dispatch(consumeHint());
    setUsedHintsThisQuestion((v) => v + 1);
    setHintSheetOpen(false);
  };

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateX: translateX.value }] }));

  if (!quiz || !q) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: theme.colors.textSecondary }}>Loading…</Text>
      </View>
    );
  }

  const hintAvailable = globalHints > 0 && usedHintsThisQuestion < 2;

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.progress}>{tf('question_progress', index + 1, quiz.questions.length)}</Text>
        <Text style={styles.progress}>{tt('hints')}: {globalHints || 0}</Text>
      </View>

      <Animated.View style={[styles.questionContainer, animatedStyle]}>
        <Text style={styles.question}>{q.text}</Text>
        {q.answers.map((a) => {
          const disabled = eliminatedIds.has(a.id);
          const isReveal = revealCorrect && a.isCorrect;
          const isSelected = selectedAnswer === a.text;
          return (
            <TouchableOpacity key={a.id} style={[styles.answer, disabled && styles.answerDisabled, isReveal && styles.answerReveal, isSelected && styles.answerSelected]} disabled={disabled} onPress={() => onAnswerPress(a.text)}>
              <Text style={[styles.answerText, disabled && { opacity: 0.5 }]}>{a.text}</Text>
            </TouchableOpacity>
          );
        })}
      </Animated.View>

      <View style={styles.footerRow}>
        <TouchableOpacity style={styles.hintBtn} onPress={openHintSheet}>
          <Text style={styles.hintText}>{tt('use_hint')} ({globalHints || 0} {tt('hints')})</Text>
        </TouchableOpacity>
        {requireConfirm && (
          <TouchableOpacity style={[styles.confirmBtn, !selectedAnswer && { opacity: 0.5 }]} disabled={!selectedAnswer} onPress={() => submitAnswer(selectedAnswer)}>
            <Text style={styles.confirmText}>{tt('confirm_answer')}</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal transparent visible={hintSheetOpen} animationType="slide" onRequestClose={() => setHintSheetOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setHintSheetOpen(false)} />
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>{tt('use_hint')}</Text>
          {!hintAvailable && (
            <Text style={{ marginBottom: 8, color: theme.colors.textSecondary }}>No hints available or limit reached (2 per question).</Text>
          )}
          <TouchableOpacity style={[styles.sheetItem, !hintAvailable && { opacity: 0.5 }]} disabled={!hintAvailable} onPress={() => applyHint('50-50')}>
            <Text style={styles.sheetItemText}>Eliminate 2 incorrect answers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sheetItem, !hintAvailable && { opacity: 0.5 }]} disabled={!hintAvailable} onPress={() => applyHint('reveal')}>
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
  container: { flex: 1, padding: 16, backgroundColor: theme.colors.background },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progress: { fontWeight: '700', color: theme.colors.textSecondary },
  questionContainer: { flex: 1 },
  question: { fontSize: 22, fontWeight: '800', marginBottom: 12, color: theme.colors.textPrimary },
  answer: {
    backgroundColor: theme.colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.hairline,
  },
  answerText: { color: theme.colors.textPrimary },
  answerDisabled: { backgroundColor: '#0F223C' },
  answerReveal: { borderWidth: 2, borderColor: theme.colors.success },
  answerSelected: { borderWidth: 2, borderColor: theme.colors.primary },
  footerRow: { marginTop: 8 },
  hintBtn: { backgroundColor: theme.colors.surfaceAlt, padding: 14, borderRadius: 12, alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: theme.colors.hairline },
  hintText: { color: theme.colors.textPrimary, fontWeight: '700' },
  confirmBtn: { backgroundColor: theme.colors.primary, padding: 14, borderRadius: 12, alignItems: 'center' },
  confirmText: { color: '#fff', fontWeight: '700' },
  backdrop: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
  sheet: { position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: theme.colors.surface, padding: 16, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderTopWidth: 1, borderColor: theme.colors.hairline },
  sheetTitle: { fontSize: 18, fontWeight: '800', marginBottom: 8, color: theme.colors.textPrimary },
  sheetItem: { paddingVertical: 14 },
  sheetItemText: { fontWeight: '600', color: theme.colors.textPrimary },
});

