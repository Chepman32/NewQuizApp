import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import Animated, { FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { getQuizByIdLocalized } from '../data/catalog';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useTheme } from '../styles/ThemeContext';
import { useT } from '../i18n';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';

const DIFFICULTIES = [
  'very easy',
  'easy',
  'intermediate',
  'normal',
  'hard',
  'very hard',
  'legendary',
  'professor',
] as const;

type Difficulty = (typeof DIFFICULTIES)[number];

const DIFFICULTY_KEYS: Record<Difficulty, string> = {
  'very easy': 'diff_very_easy',
  easy: 'diff_easy',
  intermediate: 'diff_intermediate',
  normal: 'diff_normal',
  hard: 'diff_hard',
  'very hard': 'diff_very_hard',
  legendary: 'diff_legendary',
  professor: 'diff_professor',
};

const questionCountForDifficulty: Record<Difficulty, number> = {
  'very easy': 10,
  easy: 20,
  intermediate: 30,
  normal: 40,
  hard: 50,
  'very hard': 60,
  legendary: 70,
  professor: 100,
};

export default function QuizStartScreen() {
  const route = useRoute<any>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const t = useT();
  const theme = useTheme();
  const { isTablet, contentMaxWidth, horizontalPadding } = useResponsive();
  const lang = useSelector((s: RootState) => s.app.language);
  const quizId: string | undefined = route.params?.quizId;
  const quiz = useMemo(
    () => getQuizByIdLocalized(quizId, lang as any),
    [quizId, lang],
  );
  const [difficulty, setDifficulty] = useState<Difficulty>(
    (quiz?.difficulty as Difficulty) ?? 'normal',
  );
  const totalQuestions = questionCountForDifficulty[difficulty];
  const estTime = Math.max(1, Math.round(totalQuestions * 0.3));
  const isPremium = useSelector((s: RootState) => s.app.isPremium);
  const isProfessorLocked = difficulty === 'professor' && !isPremium;

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: { flex: 1 },
    content: {
      padding: horizontalPadding,
      paddingBottom: 24,
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      width: '100%',
    },
    title: {
      fontSize: responsiveFontSize(28, isTablet),
      fontWeight: '800',
      marginBottom: isTablet ? 12 : 8,
      color: theme.colors.textPrimary,
    },
    metaRow: {
      flexDirection: 'row',
      gap: isTablet ? 12 : 8,
      marginBottom: isTablet ? 16 : 12,
    },
    metaPill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      backgroundColor: theme.colors.surfaceAlt,
      paddingHorizontal: isTablet ? 14 : 10,
      paddingVertical: isTablet ? 8 : 6,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    metaText: {
      color: theme.colors.textPrimary,
      fontWeight: '600',
      textTransform: 'capitalize',
      fontSize: responsiveFontSize(14, isTablet),
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: isTablet ? 20 : 16,
      marginBottom: isTablet ? 16 : 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    cardTitle: {
      fontSize: responsiveFontSize(18, isTablet),
      fontWeight: '700',
      marginBottom: isTablet ? 12 : 8,
      color: theme.colors.textPrimary,
    },
    paragraph: {
      color: theme.colors.textSecondary,
      fontSize: responsiveFontSize(14, isTablet),
      lineHeight: isTablet ? 24 : 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: isTablet ? 12 : 8,
    },
    rowTitle: {
      fontSize: responsiveFontSize(15, isTablet),
      fontWeight: '600',
      flexShrink: 1,
      color: theme.colors.textPrimary,
    },
    rowDesc: {
      color: theme.colors.textSecondary,
      marginTop: 2,
      fontSize: responsiveFontSize(14, isTablet),
    },
    sampleQ: {
      paddingVertical: isTablet ? 12 : 8,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.hairline,
    },
    sampleQText: {
      fontWeight: '600',
      marginBottom: 6,
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(14, isTablet),
    },
    answerChip: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.surfaceAlt,
      paddingHorizontal: isTablet ? 14 : 10,
      paddingVertical: isTablet ? 8 : 6,
      borderRadius: 10,
      marginRight: 8,
      marginBottom: 6,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    answerChipText: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(14, isTablet),
    },
    footer: {
      padding: horizontalPadding,
      backgroundColor: theme.colors.background,
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      width: '100%',
    },
    cta: {
      backgroundColor: theme.colors.primary,
      padding: isTablet ? 20 : 16,
      borderRadius: 16,
      alignItems: 'center',
    },
    ctaText: {
      color: 'white',
      fontWeight: '700',
      fontSize: responsiveFontSize(16, isTablet),
    },
    diffPill: {
      backgroundColor: theme.colors.surfaceAlt,
      paddingVertical: isTablet ? 12 : 10,
      paddingHorizontal: isTablet ? 18 : 14,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      flexDirection: 'row',
      alignItems: 'center',
    },
    diffPillLocked: { borderColor: '#F5A623' },
    diffPillActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    diffPillText: {
      color: theme.colors.textPrimary,
      textTransform: 'capitalize',
      fontWeight: '600',
      fontSize: responsiveFontSize(14, isTablet),
    },
    diffPillTextActive: { color: '#fff' },
  });

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Animated.Text entering={FadeInUp} style={styles.title}>
            {quiz?.title ?? 'Quiz'}
          </Animated.Text>

          <Animated.View entering={FadeInUp.delay(60)} style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Icon name="clock" size={14} color={theme.colors.textPrimary} />
              <Text style={styles.metaText}>
                {estTime} {t('unit_min')}
              </Text>
            </View>
            <View style={styles.metaPill}>
              <Icon
                name="trending-up"
                size={14}
                color={theme.colors.textPrimary}
              />
              <Text style={styles.metaText}>
                {t(DIFFICULTY_KEYS[difficulty])}
              </Text>
            </View>
            <View style={styles.metaPill}>
              <Icon name="list" size={14} color={theme.colors.textPrimary} />
              <Text style={styles.metaText}>
                {totalQuestions} {t('unit_qs')}
              </Text>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(90)} style={styles.card}>
            <Text style={styles.cardTitle}>{t('select_difficulty')}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DIFFICULTIES as readonly string[]}
              keyExtractor={d => d}
              contentContainerStyle={{ paddingVertical: 4 }}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
              renderItem={({ item }) => {
                const active = item === difficulty;
                const locked = item === 'professor' && !isPremium;
                return (
                  <TouchableOpacity
                    style={[
                      styles.diffPill,
                      active && styles.diffPillActive,
                      locked && styles.diffPillLocked,
                    ]}
                    onPress={() => setDifficulty(item as Difficulty)}
                    activeOpacity={0.9}
                  >
                    <Text
                      style={[
                        styles.diffPillText,
                        active && styles.diffPillTextActive,
                      ]}
                    >
                      {t(DIFFICULTY_KEYS[item as Difficulty])}
                    </Text>
                    {locked && (
                      <Icon
                        name="lock"
                        size={14}
                        color={theme.colors.textSecondary}
                        style={{ marginLeft: 6 }}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(120)} style={styles.card}>
            <Text style={styles.cardTitle}>{t('overview')}</Text>
            <Text style={styles.paragraph}>{quiz?.description}</Text>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(180)} style={styles.card}>
            <Text style={styles.cardTitle}>{t('themes')}</Text>
            {quiz?.themes.map(tTheme => (
              <View key={tTheme.id} style={styles.row}>
                <Icon
                  name="check-circle"
                  size={18}
                  color={theme.colors.success}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.rowTitle}>{tTheme.title}</Text>
                  <Text style={styles.rowDesc}>{tTheme.description}</Text>
                </View>
              </View>
            ))}
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(240)} style={styles.card}>
            <Text style={styles.cardTitle}>{t('requirements_to_pass')}</Text>
            {quiz?.requirements.map((r, idx) => (
              <View key={idx} style={styles.row}>
                <Icon name="shield" size={18} color="#8B9AF2" />
                <Text style={styles.rowTitle}>{r}</Text>
              </View>
            ))}
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(300)} style={styles.card}>
            <Text style={styles.cardTitle}>{t('sample_questions')}</Text>
            {quiz?.questions.slice(0, 3).map(q => (
              <View key={q.id} style={styles.sampleQ}>
                <Text style={styles.sampleQText}>{q.text}</Text>
                {q.answers.slice(0, 2).map(ans => (
                  <View key={ans.id} style={styles.answerChip}>
                    <Text style={styles.answerChipText}>{ans.text}</Text>
                  </View>
                ))}
              </View>
            ))}
          </Animated.View>
        </ScrollView>

        <View style={styles.footer}>
          {isProfessorLocked ? (
            <View
              style={[styles.cta, { backgroundColor: theme.colors.surfaceAlt }]}
            >
              <Text
                style={[styles.ctaText, { color: theme.colors.textSecondary }]}
              >
                {t('premium_required_prof')}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.cta}
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('Quiz', {
                  quizId: quiz?.id ?? 'q1',
                  categoryId: quiz?.categoryId ?? 'c1',
                  difficulty,
                })
              }
            >
              <Text style={styles.ctaText}>{t('start_quiz')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
