import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import {
  getQuizByIdLocalized,
  getQuestionsForDifficulty,
  type Difficulty,
} from '../data/catalog';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
// Hints are now unlimited - no consumeHint needed
import { useTheme } from '../styles/ThemeContext';
import { useT, useTf } from '../i18n';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';

export default function QuizScreen() {
  const route = useRoute<any>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const quizId: string | undefined = route.params?.quizId;
  const categoryId: string | undefined = route.params?.categoryId;
  const difficulty: Difficulty = route.params?.difficulty ?? 'normal';
  const lang = useSelector((s: RootState) => s.app.language);
  const quiz = useMemo(
    () => getQuizByIdLocalized(quizId, lang as any),
    [quizId, lang],
  );

  // Get questions filtered by difficulty
  const questions = useMemo(() => {
    if (!quiz) return [];
    return getQuestionsForDifficulty(quiz.categoryId, difficulty, lang as any);
  }, [quiz, difficulty, lang]);

  const theme = useTheme();
  const { isTablet, contentMaxWidth, horizontalPadding, isLandscape } =
    useResponsive();

  const requireConfirm = useSelector(
    (s: RootState) => s.app.requireAnswerConfirm,
  );
  const tt = useT();
  const tf = useTf();

  const [index, setIndex] = useState(0);
  const [hintSheetOpen, setHintSheetOpen] = useState(false);
  const [eliminatedIds, setEliminatedIds] = useState<Set<string>>(new Set());
  const [revealCorrect, setRevealCorrect] = useState(false);
  const [usedHintsThisQuestion, setUsedHintsThisQuestion] = useState(0);
  const [hintUsedThisQuestion, setHintUsedThisQuestion] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(
    undefined,
  );
  const translateX = useSharedValue(0);

  const timerRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => (timerRef.current += 1), 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const q = questions[index];
  const [results, setResults] = useState<
    {
      id: string;
      text: string;
      correctAnswer: string;
      chosenAnswer?: string;
      isCorrect: boolean;
      hintUsed?: boolean;
    }[]
  >([]);

  const submitAnswer = (chosen?: string) => {
    if (!quiz || !q) return;
    const correct = q.answers.find(a => a.isCorrect)?.text ?? '';
    // Hint-assisted answers do NOT count as correct in progress
    const answeredCorrectly = chosen ? chosen === correct : false;
    const isCorrect = answeredCorrectly && !hintUsedThisQuestion;
    const newResults = [
      ...results,
      {
        id: q.id,
        text: q.text,
        correctAnswer: correct,
        chosenAnswer: chosen,
        isCorrect,
        hintUsed: hintUsedThisQuestion,
      },
    ];
    setResults(newResults);

    translateX.value = withTiming(-50, { duration: 200 }, () => {
      translateX.value = 50;
      translateX.value = withTiming(0, { duration: 200 });
    });

    const nextIndex = index + 1;
    const isDone = nextIndex >= questions.length;
    if (isDone) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const score = newResults.reduce(
        (acc, r) => acc + (r.isCorrect ? 1 : 0),
        0,
      );
      navigation.replace('QuizResults', {
        score,
        total: questions.length,
        timeSeconds: timerRef.current,
        results: newResults,
        quizId: quiz?.id,
        categoryId: quiz?.categoryId ?? categoryId,
        difficulty,
      });
    } else {
      setIndex(nextIndex);
      setEliminatedIds(new Set());
      setRevealCorrect(false);
      setUsedHintsThisQuestion(0);
      setHintUsedThisQuestion(false);
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

  const applyHint = (type: '50-50' | 'reveal') => {
    // Hints are unlimited, but max 2 per question
    const canUse = usedHintsThisQuestion < 2;
    if (!q || !canUse) return;
    if (type === '50-50') {
      const wrong = q.answers.filter(
        a => !a.isCorrect && !eliminatedIds.has(a.id),
      );
      const shuffled = [...wrong].sort(() => Math.random() - 0.5);
      const chosen = shuffled.slice(0, 2).map(a => a.id);
      const nextSet = new Set(eliminatedIds);
      chosen.forEach(id => nextSet.add(id));
      setEliminatedIds(nextSet);
    } else if (type === 'reveal') {
      setRevealCorrect(true);
    }
    setHintUsedThisQuestion(true);
    setUsedHintsThisQuestion(v => v + 1);
    setHintSheetOpen(false);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: horizontalPadding,
      backgroundColor: theme.colors.background,
    },
    innerContainer: {
      flex: 1,
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      width: '100%',
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: isTablet ? 16 : 8,
    },
    progress: {
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
      color: theme.colors.textSecondary,
    },
    questionContainer: { flex: 1 },
    question: {
      fontSize: responsiveFontSize(22, isTablet, 1.2),
      fontWeight: '800',
      marginBottom: isTablet ? 24 : 12,
      color: theme.colors.textPrimary,
    },
    answersContainer: {
      flexDirection: isTablet && isLandscape ? 'row' : 'column',
      flexWrap: isTablet && isLandscape ? 'wrap' : 'nowrap',
      gap: 12,
    },
    answer: {
      backgroundColor: theme.colors.surface,
      padding: isTablet ? 20 : 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      width: isTablet && isLandscape ? '48%' : '100%',
    },
    answerText: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(16, isTablet),
    },
    answerDisabled: { backgroundColor: theme.colors.surfaceAlt, opacity: 0.5 },
    answerReveal: { borderWidth: 2, borderColor: theme.colors.success },
    answerSelected: { borderWidth: 2, borderColor: theme.colors.primary },
    footerRow: { marginTop: isTablet ? 16 : 8 },
    hintBtn: {
      backgroundColor: theme.colors.surfaceAlt,
      padding: isTablet ? 18 : 14,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    hintText: {
      color: theme.colors.textPrimary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    confirmBtn: {
      backgroundColor: theme.colors.primary,
      padding: isTablet ? 18 : 14,
      borderRadius: 12,
      alignItems: 'center',
    },
    confirmText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.25)',
    },
    sheet: {
      position: 'absolute',
      left: isTablet ? '20%' : 0,
      right: isTablet ? '20%' : 0,
      bottom: isTablet ? '20%' : 0,
      backgroundColor: theme.colors.surface,
      padding: isTablet ? 24 : 16,
      borderRadius: isTablet ? 20 : 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderWidth: isTablet ? 1 : 0,
      borderTopWidth: 1,
      borderColor: theme.colors.hairline,
    },
    sheetTitle: {
      fontSize: responsiveFontSize(18, isTablet),
      fontWeight: '800',
      marginBottom: 8,
      color: theme.colors.textPrimary,
    },
    sheetItem: { paddingVertical: isTablet ? 18 : 14 },
    sheetItemText: {
      fontWeight: '600',
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(16, isTablet),
    },
  });

  if (!quiz || questions.length === 0 || !q) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text style={{ color: theme.colors.textSecondary }}>Loading…</Text>
      </View>
    );
  }

  // Hints are unlimited, but max 2 per question
  const hintAvailable = usedHintsThisQuestion < 2;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.topRow}>
          <Text style={styles.progress}>
            {tf('question_progress', index + 1, questions.length)}
          </Text>
        </View>

        <ScrollView
          style={styles.questionContainer}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={animatedStyle}>
            <Text style={styles.question}>{q.text}</Text>
            <View style={styles.answersContainer}>
              {q.answers.map(a => {
                const disabled = eliminatedIds.has(a.id);
                const isReveal = revealCorrect && a.isCorrect;
                const isSelected = selectedAnswer === a.text;
                return (
                  <TouchableOpacity
                    key={a.id}
                    style={[
                      styles.answer,
                      disabled && styles.answerDisabled,
                      isReveal && styles.answerReveal,
                      isSelected && styles.answerSelected,
                    ]}
                    disabled={disabled}
                    onPress={() => onAnswerPress(a.text)}
                  >
                    <Text
                      style={[styles.answerText, disabled && { opacity: 0.5 }]}
                    >
                      {a.text}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
        </ScrollView>

        <View style={styles.footerRow}>
          <TouchableOpacity
            style={styles.hintBtn}
            onPress={() => setHintSheetOpen(true)}
          >
            <Text style={styles.hintText}>
              {tt('use_hint')} ({2 - usedHintsThisQuestion} {tt('remaining')})
            </Text>
          </TouchableOpacity>
          {requireConfirm && (
            <TouchableOpacity
              style={[styles.confirmBtn, !selectedAnswer && { opacity: 0.5 }]}
              disabled={!selectedAnswer}
              onPress={() => submitAnswer(selectedAnswer)}
            >
              <Text style={styles.confirmText}>{tt('confirm_answer')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal
        transparent
        visible={hintSheetOpen}
        animationType={isTablet ? 'fade' : 'slide'}
        onRequestClose={() => setHintSheetOpen(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => setHintSheetOpen(false)}
        />
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>{tt('use_hint')}</Text>
          {!hintAvailable && (
            <Text
              style={{ marginBottom: 8, color: theme.colors.textSecondary }}
            >
              {tt('no_hints_message')}
            </Text>
          )}
          <TouchableOpacity
            style={[styles.sheetItem, !hintAvailable && { opacity: 0.5 }]}
            disabled={!hintAvailable}
            onPress={() => applyHint('50-50')}
          >
            <Text style={styles.sheetItemText}>{tt('eliminate_two')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sheetItem, !hintAvailable && { opacity: 0.5 }]}
            disabled={!hintAvailable}
            onPress={() => applyHint('reveal')}
          >
            <Text style={styles.sheetItemText}>{tt('reveal_correct')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
