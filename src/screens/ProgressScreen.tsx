import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useTheme } from '../styles/ThemeContext';
import { getCategories, getQuizzesForCategoryLocalized } from '../data/catalog';
import { useT } from '../i18n';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';

export default function ProgressScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const progress = useSelector((s: RootState) => s.progress);
  const lang = useSelector((s: RootState) => s.app.language);
  const t = useT();
  const theme = useTheme();
  const { isTablet, contentMaxWidth, horizontalPadding } = useResponsive();

  const cats = React.useMemo(() => getCategories(lang as any), [lang]);

  const overall = useMemo(() => {
    const completed = progress.attempts.length;
    const questions = progress.totals.questionsAnswered;
    const correct = progress.totals.correctAnswers;
    const timeMinutes = Math.round(progress.totals.totalTimeSeconds / 60);
    const accuracy =
      questions > 0 ? Math.round((correct / questions) * 100) : 0;
    return {
      completed,
      questions,
      accuracy,
      timeMinutes,
    };
  }, [progress]);

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: {
      padding: horizontalPadding,
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      width: '100%',
    },
    title: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(28, isTablet),
      fontWeight: '800',
      marginBottom: isTablet ? 12 : 8,
    },
    statsRow: {
      flexDirection: 'row',
      gap: isTablet ? 16 : 12,
      marginBottom: isTablet ? 16 : 12,
    },
    statCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: isTablet ? 20 : 16,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    statLabel: {
      color: theme.colors.textSecondary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    statValue: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(24, isTablet),
      fontWeight: '800',
      marginTop: 6,
    },
    sectionTitle: {
      color: theme.colors.textSecondary,
      fontWeight: '800',
      marginBottom: 8,
      fontSize: responsiveFontSize(14, isTablet),
    },
    catCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: isTablet ? 20 : 16,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      marginBottom: 10,
    },
    catTitle: {
      color: theme.colors.textPrimary,
      fontWeight: '800',
      fontSize: responsiveFontSize(16, isTablet),
    },
    catMeta: {
      color: theme.colors.textSecondary,
      marginTop: 2,
      fontSize: responsiveFontSize(14, isTablet),
    },
    barTrack: {
      height: isTablet ? 10 : 8,
      backgroundColor: theme.colors.surfaceAlt,
      borderRadius: 999,
      marginTop: 8,
      overflow: 'hidden',
    },
    barFill: { height: '100%', backgroundColor: theme.colors.primary },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: isTablet ? 20 : 16,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      marginTop: 12,
    },
    muted: {
      color: theme.colors.textSecondary,
      fontSize: responsiveFontSize(14, isTablet),
    },
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t('progress')}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{t('quizzes_completed')}</Text>
            <Text style={styles.statValue}>{overall.completed}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{t('questions_answered')}</Text>
            <Text style={styles.statValue}>{overall.questions}</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{t('accuracy')}</Text>
            <Text style={styles.statValue}>{overall.accuracy}%</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{t('time_played')}</Text>
            <Text style={styles.statValue}>{overall.timeMinutes}m</Text>
          </View>
        </View>


        <Text style={[styles.sectionTitle, { marginTop: 12 }]}>
          {t('category')}
        </Text>
        <FlatList
          data={cats}
          keyExtractor={c => c.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 12 }}
          renderItem={({ item }) => {
            const quizzes = getQuizzesForCategoryLocalized(
              item.id,
              lang as any,
            );
            const totalAnswers = quizzes.reduce(
              (sum, q) => sum + q.questions.length,
              0,
            );
            const completedQuizIds = new Set(
              progress.attempts
                .filter(a => a.categoryId === item.id)
                .map(a => a.quizId),
            );
            const answeredCoverage = quizzes
              .filter(q => completedQuizIds.has(q.id))
              .reduce((sum, q) => sum + q.questions.length, 0);
            const pct = totalAnswers
              ? Math.round((answeredCoverage / totalAnswers) * 100)
              : 0;
            return (
              <TouchableOpacity
                style={styles.catCard}
                onPress={() =>
                  navigation.navigate('CategoryDetail', { categoryId: item.id })
                }
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.catTitle}>{item.name}</Text>
                  <Text style={styles.catMeta}>
                    {answeredCoverage}/{totalAnswers} {t('progress_answers')} ·{' '}
                    {pct}%
                  </Text>
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { width: `${pct}%` }]} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t('recent_activity')}</Text>
          {progress.attempts.length === 0 ? (
            <Text style={styles.muted}>{t('no_history_yet')}</Text>
          ) : (
            progress.attempts.slice(0, 10).map(a => (
              <View
                key={a.id}
                style={{
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.hairline,
                }}
              >
                <Text
                  style={{ color: theme.colors.textPrimary, fontWeight: '700' }}
                >
                  {a.quizId}
                </Text>
                <Text style={{ color: theme.colors.textSecondary }}>
                  {t('score')}: {Math.round((a.score / a.total) * 100)}% · {t('time')}:{' '}
                  {Math.floor(a.timeSeconds / 60)}m {a.timeSeconds % 60}s ·{' '}
                  {new Date(a.createdAt).toLocaleDateString()}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
