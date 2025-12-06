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
import { useDispatch } from 'react-redux';
import { addAttempt } from '../state/slices/progressSlice';
import { useT } from '../i18n';

type ResultItem = {
  id: string;
  text: string;
  correctAnswer: string;
  chosenAnswer?: string;
  isCorrect: boolean;
};
type Params = {
  score: number;
  total: number;
  timeSeconds: number;
  results: ResultItem[];
  quizId?: string;
  categoryId?: string;
};

export default function QuizResultsScreen() {
  const route = useRoute<any>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const theme = useTheme();
  const t = useT();
  const {
    score = 0,
    total = 0,
    timeSeconds = 0,
    results = [],
    quizId,
    categoryId,
  } = (route.params as Params) ?? {};
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  React.useEffect(() => {
    const id = `${quizId ?? 'quiz'}-${Date.now()}`;
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
  }, [dispatch, quizId, categoryId, score, total, timeSeconds]);

  const correctCount = score;
  const incorrectCount = Math.max(0, total - score);

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: { padding: 16 },
    cardLarge: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      padding: 16,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      marginBottom: 16,
    },
    headline: {
      fontSize: 32,
      fontWeight: '900',
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: 8,
    },
    centerRow: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
    },
    tilesRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
    tile: {
      flex: 1,
      backgroundColor: theme.colors.surfaceAlt,
      borderRadius: 14,
      padding: 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    tileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
    },
    tileHeaderText: { color: theme.colors.textSecondary, fontWeight: '700' },
    tileValue: {
      color: theme.colors.textPrimary,
      fontSize: 28,
      fontWeight: '800',
    },
    tableCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      padding: 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    tableHeader: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.hairline,
    },
    th: { color: theme.colors.textSecondary, fontWeight: '700' },
    tr: {
      flexDirection: 'row',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.hairline,
    },
    tdQ: { color: theme.colors.textPrimary, fontWeight: '700' },
    tdChosen: { color: theme.colors.textPrimary },
    tdCorrect: { color: theme.colors.primary, fontWeight: '700' },
    ctaRow: { flexDirection: 'row', gap: 12, marginTop: 16, marginBottom: 24 },
    primaryBtn: {
      flex: 1,
      backgroundColor: '#FF8A26',
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: 'center',
    },
    primaryBtnText: { color: '#1E1E2A', fontWeight: '900', fontSize: 16 },
    secondaryBtn: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#FF8A26',
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: 'center',
    },
    secondaryBtnText: { color: '#FF8A26', fontWeight: '900', fontSize: 16 },
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
