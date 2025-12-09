import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ScoreCircle from '../components/ScoreCircle';
import { useTheme } from '../styles/ThemeContext';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { addAttempt } from '../state/slices/progressSlice';
import { recordAnswer } from '../state/slices/learningSlice';
import { determineAnswerQuality } from '../learning/algorithm';
import { useT } from '../i18n';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';
import type { Difficulty } from '../data/catalog';

type ResultItem = {
  id: string;
  text: string;
  correctAnswer: string;
  chosenAnswer?: string;
  isCorrect: boolean;
  hintUsed?: boolean;
};
type Params = {
  score: number;
  total: number;
  timeSeconds: number;
  results: ResultItem[];
  quizId?: string;
  categoryId?: string;
  difficulty?: Difficulty;
};

export default function QuizResultsScreen() {
  const route = useRoute<any>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const theme = useTheme();
  const t = useT();
  const { isTablet, contentMaxWidth, horizontalPadding } = useResponsive();
  const {
    score = 0,
    total = 0,
    timeSeconds = 0,
    results = [],
    quizId,
    categoryId,
    difficulty = 'normal',
  } = (route.params as Params) ?? {};
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  // Average time per question in ms
  const avgTimePerQuestion = total > 0 ? (timeSeconds * 1000) / total : 5000;

  React.useEffect(() => {
    const id = `${quizId ?? 'quiz'}-${Date.now()}`;

    // Record progress attempt
    dispatch(
      addAttempt({
        id,
        quizId: quizId ?? 'unknown',
        categoryId: categoryId ?? 'unknown',
        score,
        total,
        timeSeconds,
        createdAt: new Date().toISOString(),
      }),
    );

    // Record learning data for each question (only if no hint was used)
    results.forEach(result => {
      // Skip hint-assisted answers for learning tracking
      // They already don't count as correct in progress
      if (result.hintUsed) return;

      const quality = determineAnswerQuality(result.isCorrect, avgTimePerQuestion);
      dispatch(
        recordAnswer({
          questionId: result.id,
          categoryId: categoryId ?? 'unknown',
          difficulty: difficulty as Difficulty,
          quality,
          responseTimeMs: avgTimePerQuestion,
        }),
      );
    });
  }, [dispatch, quizId, categoryId, score, total, timeSeconds, results, difficulty, avgTimePerQuestion]);

  const correctCount = score;
  const incorrectCount = Math.max(0, total - score);

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: {
      padding: horizontalPadding,
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      width: '100%',
    },
    cardLarge: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      padding: isTablet ? 24 : 16,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      marginBottom: 16,
    },
    headline: {
      fontSize: responsiveFontSize(32, isTablet),
      fontWeight: '900',
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: isTablet ? 16 : 8,
    },
    centerRow: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: isTablet ? 16 : 8,
    },
    tilesRow: {
      flexDirection: 'row',
      gap: isTablet ? 16 : 12,
      marginTop: isTablet ? 16 : 8,
    },
    tile: {
      flex: 1,
      backgroundColor: theme.colors.surfaceAlt,
      borderRadius: 14,
      padding: isTablet ? 16 : 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    tileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
    },
    tileHeaderText: {
      color: theme.colors.textSecondary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    tileValue: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(28, isTablet),
      fontWeight: '800',
    },
    tableCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      padding: isTablet ? 16 : 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    tableHeader: {
      flexDirection: 'row',
      paddingVertical: isTablet ? 14 : 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.hairline,
    },
    th: {
      color: theme.colors.textSecondary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    tr: {
      flexDirection: 'row',
      paddingVertical: isTablet ? 16 : 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.hairline,
    },
    tdQ: {
      color: theme.colors.textPrimary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    tdChosen: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(14, isTablet),
    },
    tdCorrect: {
      color: theme.colors.primary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    ctaRow: {
      flexDirection: 'row',
      gap: isTablet ? 16 : 12,
      marginTop: isTablet ? 24 : 16,
      marginBottom: 24,
    },
    primaryBtn: {
      flex: 1,
      backgroundColor: '#FF8A26',
      paddingVertical: isTablet ? 20 : 16,
      borderRadius: 16,
      alignItems: 'center',
    },
    primaryBtnText: {
      color: '#1E1E2A',
      fontWeight: '900',
      fontSize: responsiveFontSize(16, isTablet),
    },
    secondaryBtn: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#FF8A26',
      paddingVertical: isTablet ? 20 : 16,
      borderRadius: 16,
      alignItems: 'center',
    },
    secondaryBtnText: {
      color: '#FF8A26',
      fontWeight: '900',
      fontSize: responsiveFontSize(16, isTablet),
    },
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardLarge}>
          <Text style={styles.headline}>{t('your_results')}</Text>
          <View style={styles.centerRow}>
            <ScoreCircle
              percent={percent}
              gradientColors={['#30C8CA', '#2E7BFF']}
            />
          </View>

          <View style={styles.tilesRow}>
            <View style={styles.tile}>
              <View style={styles.tileHeader}>
                <Icon
                  name="check-circle"
                  size={16}
                  color={theme.colors.success}
                />
                <Text style={styles.tileHeaderText}>{t('correct')}</Text>
              </View>
              <Text style={styles.tileValue}>{correctCount}</Text>
            </View>
            <View style={styles.tile}>
              <View style={styles.tileHeader}>
                <Icon name="x-circle" size={16} color={theme.colors.error} />
                <Text style={styles.tileHeaderText}>{t('incorrect')}</Text>
              </View>
              <Text style={styles.tileValue}>{incorrectCount}</Text>
            </View>
            <View style={styles.tile}>
              <View style={styles.tileHeader}>
                <Icon name="clock" size={16} color="#F5A623" />
                <Text style={styles.tileHeaderText}>{t('time')}</Text>
              </View>
              <Text style={styles.tileValue}>
                {String(Math.floor(timeSeconds / 60)).padStart(2, '0')}:
                {String(timeSeconds % 60).padStart(2, '0')}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.tableCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.th, { flex: 1.2 }]}>{t('question')}</Text>
            <Text style={[styles.th, { flex: 1 }]}>{t('chosen_answer')}</Text>
            <Text style={[styles.th, { flex: 1 }]}>{t('correct_answer')}</Text>
          </View>
          {results.map((r, idx) => (
            <View
              key={r.id}
              style={[
                styles.tr,
                idx === results.length - 1 && { borderBottomWidth: 0 },
              ]}
            >
              <Text style={[styles.tdQ, { flex: 1.2 }]} numberOfLines={2}>
                {t('question')} {idx + 1}
              </Text>
              <Text
                style={[
                  styles.tdChosen,
                  {
                    flex: 1,
                    color: r.isCorrect
                      ? theme.colors.textPrimary
                      : theme.colors.error,
                  },
                ]}
                numberOfLines={1}
              >
                {r.chosenAnswer ?? '-'}
              </Text>
              <Text style={[styles.tdCorrect, { flex: 1 }]} numberOfLines={1}>
                {r.correctAnswer}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.ctaRow}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() =>
              navigation.replace('Quiz', { quizId: route.params?.quizId })
            }
          >
            <Text style={styles.primaryBtnText}>{t('play_again')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.popToTop()}
          >
            <Text style={styles.secondaryBtnText}>{t('back_to_category')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
