import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useTheme } from '../styles/ThemeContext';
import { useT } from '../i18n';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';
import {
  getCategories,
  getQuizzesForCategoryLocalized,
} from '../data/catalog';
import { getDueReviewCount, getWeakCategories } from '../learning/reviewQueue';
import Icon from 'react-native-vector-icons/Feather';

export default function LearningScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const t = useT();
  const theme = useTheme();
  const { isTablet, contentMaxWidth, horizontalPadding } = useResponsive();

  const lang = useSelector((s: RootState) => s.app.language);
  const learning = useSelector((s: RootState) => s.learning);
  const { questionMastery, dailyStats, categoryMastery } = learning;

  const cats = useMemo(() => getCategories(lang as any), [lang]);

  // Calculate due reviews
  const dueReviews = useMemo(
    () => getDueReviewCount(questionMastery),
    [questionMastery],
  );

  // Calculate weak categories
  const weakCats = useMemo(
    () => getWeakCategories(categoryMastery, 3),
    [categoryMastery],
  );

  // Calculate category mastery percentages
  const categoryProgress = useMemo(() => {
    return cats.map(cat => {
      const quizzes = getQuizzesForCategoryLocalized(cat.id, lang as any);
      const totalQuestions = quizzes.reduce(
        (sum, q) => sum + q.questions.length,
        0,
      );
      const masteredInCategory = Object.values(questionMastery).filter(
        m => m.categoryId === cat.id && m.isMastered,
      ).length;
      const learningInCategory = Object.values(questionMastery).filter(
        m => m.categoryId === cat.id && m.isLearning,
      ).length;
      const masteryPercent =
        totalQuestions > 0
          ? Math.round((masteredInCategory / totalQuestions) * 100)
          : 0;
      return {
        ...cat,
        totalQuestions,
        masteredQuestions: masteredInCategory,
        learningQuestions: learningInCategory,
        masteryPercent,
      };
    });
  }, [cats, questionMastery, lang]);

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
      fontSize: responsiveFontSize(12, isTablet),
    },
    statValue: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(24, isTablet),
      fontWeight: '800',
      marginTop: 4,
    },
    dueCard: {
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
      padding: isTablet ? 24 : 20,
      marginBottom: isTablet ? 16 : 12,
    },
    dueTitle: {
      color: '#fff',
      fontSize: responsiveFontSize(18, isTablet),
      fontWeight: '800',
      marginBottom: 8,
    },
    dueSubtitle: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: responsiveFontSize(14, isTablet),
      marginBottom: 16,
    },
    startBtn: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: isTablet ? 16 : 14,
      alignItems: 'center',
    },
    startBtnText: {
      color: theme.colors.primary,
      fontWeight: '800',
      fontSize: responsiveFontSize(16, isTablet),
    },
    sectionTitle: {
      color: theme.colors.textSecondary,
      fontWeight: '800',
      marginBottom: 8,
      marginTop: 12,
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
    barFill: {
      height: '100%',
      borderRadius: 999,
    },
    weakCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: isTablet ? 16 : 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      marginRight: 12,
      minWidth: 160,
    },
    weakTitle: {
      color: theme.colors.textPrimary,
      fontWeight: '700',
      fontSize: responsiveFontSize(14, isTablet),
    },
    weakMeta: {
      color: theme.colors.textSecondary,
      fontSize: responsiveFontSize(12, isTablet),
      marginTop: 2,
    },
    emptyText: {
      color: theme.colors.textSecondary,
      fontSize: responsiveFontSize(14, isTablet),
      textAlign: 'center',
      padding: 20,
    },
  });

  const getMasteryColor = (percent: number) => {
    if (percent >= 70) return theme.colors.success;
    if (percent >= 30) return '#F5A623';
    return theme.colors.error;
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t('learning')}</Text>

        {/* Daily Progress Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{t('today_reviewed')}</Text>
            <Text style={styles.statValue}>{dailyStats.questionsReviewed}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{t('today_accuracy')}</Text>
            <Text style={styles.statValue}>
              {dailyStats.questionsReviewed > 0
                ? Math.round(
                    (dailyStats.correctAnswers /
                      dailyStats.questionsReviewed) *
                      100,
                  )
                : 0}
              %
            </Text>
          </View>
        </View>

        {/* Due Reviews Card */}
        {dueReviews.total > 0 ? (
          <View style={styles.dueCard}>
            <Text style={styles.dueTitle}>
              {dueReviews.total} {t('questions_due')}
            </Text>
            <Text style={styles.dueSubtitle}>
              {dueReviews.overdue} {t('overdue')} · {dueReviews.dueToday}{' '}
              {t('due_today')}
            </Text>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => {
                // Navigate to first category with due questions
                const firstCatWithDue = cats.find(cat => {
                  const hasDue = Object.values(questionMastery).some(
                    m =>
                      m.categoryId === cat.id &&
                      new Date(m.nextReviewDate) <= new Date(),
                  );
                  return hasDue;
                });
                if (firstCatWithDue) {
                  navigation.navigate('CategoryDetail', {
                    categoryId: firstCatWithDue.id,
                  });
                }
              }}
            >
              <Text style={styles.startBtnText}>{t('start_learning')}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={[
              styles.dueCard,
              { backgroundColor: theme.colors.success },
            ]}
          >
            <Text style={styles.dueTitle}>{t('all_caught_up')}</Text>
            <Text style={styles.dueSubtitle}>{t('no_reviews_due')}</Text>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => {
                // Navigate to first category to learn new questions
                if (cats.length > 0) {
                  navigation.navigate('CategoryDetail', {
                    categoryId: cats[0].id,
                  });
                }
              }}
            >
              <Text
                style={[styles.startBtnText, { color: theme.colors.success }]}
              >
                {t('learn_new')}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Weak Areas */}
        {weakCats.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>{t('weak_areas')}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={weakCats}
              keyExtractor={c => c.categoryId}
              renderItem={({ item }) => {
                const cat = cats.find(c => c.id === item.categoryId);
                return (
                  <TouchableOpacity
                    style={styles.weakCard}
                    onPress={() =>
                      navigation.navigate('CategoryDetail', {
                        categoryId: item.categoryId,
                      })
                    }
                  >
                    <Text style={styles.weakTitle}>{cat?.name || item.categoryId}</Text>
                    <Text style={styles.weakMeta}>
                      {item.overallMasteryPercent}% {t('mastery')}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </>
        )}

        {/* Category Mastery Grid */}
        <Text style={styles.sectionTitle}>{t('category_mastery')}</Text>
        {categoryProgress.map(cat => (
          <TouchableOpacity
            key={cat.id}
            style={styles.catCard}
            onPress={() =>
              navigation.navigate('CategoryDetail', { categoryId: cat.id })
            }
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.catTitle}>{cat.name}</Text>
                <Text style={styles.catMeta}>
                  {cat.masteredQuestions}/{cat.totalQuestions} {t('mastered')} ·{' '}
                  {cat.masteryPercent}%
                </Text>
              </View>
              <Icon
                name="chevron-right"
                size={20}
                color={theme.colors.textSecondary}
              />
            </View>
            <View style={styles.barTrack}>
              <View
                style={[
                  styles.barFill,
                  {
                    width: `${cat.masteryPercent}%`,
                    backgroundColor: getMasteryColor(cat.masteryPercent),
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
