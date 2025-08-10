import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import Animated, { FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { getQuizById } from '../data/catalog';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';

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

type Difficulty = typeof DIFFICULTIES[number];

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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const quizId: string | undefined = route.params?.quizId;
  const quiz = useMemo(() => getQuizById(quizId), [quizId]);
  const [difficulty, setDifficulty] = useState<Difficulty>((quiz?.difficulty as Difficulty) ?? 'normal');
  const totalQuestions = questionCountForDifficulty[difficulty];
  const estTime = Math.max(10, Math.round(totalQuestions * 1.2));
  const isPremium = useSelector((s: RootState) => s.app.isPremium);
  const isProfessorLocked = difficulty === 'professor' && !isPremium;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Animated.Text entering={FadeInUp} style={styles.title}>
            {quiz?.title ?? 'Quiz'}
          </Animated.Text>

          <Animated.View entering={FadeInUp.delay(60)} style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Icon name="clock" size={14} color="#4A90E2" />
              <Text style={styles.metaText}>{estTime} min</Text>
            </View>
            <View style={styles.metaPill}>
              <Icon name="trending-up" size={14} color="#4A90E2" />
              <Text style={styles.metaText}>{difficulty}</Text>
            </View>
            <View style={styles.metaPill}>
              <Icon name="list" size={14} color="#4A90E2" />
              <Text style={styles.metaText}>{totalQuestions} Qs</Text>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(90)} style={styles.card}>
            <Text style={styles.cardTitle}>Select difficulty</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DIFFICULTIES as readonly string[]}
              keyExtractor={(d) => d}
              contentContainerStyle={{ paddingVertical: 4 }}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
              renderItem={({ item }) => {
                const active = item === difficulty;
                return (
                  <TouchableOpacity
                    style={[styles.diffPill, active && styles.diffPillActive]}
                    onPress={() => setDifficulty(item as Difficulty)}
                    activeOpacity={0.9}
                  >
                    <Text style={[styles.diffPillText, active && styles.diffPillTextActive]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(120)} style={styles.card}>
            <Text style={styles.cardTitle}>Overview</Text>
            <Text style={styles.paragraph}>{quiz?.description}</Text>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(180)} style={styles.card}>
            <Text style={styles.cardTitle}>Themes</Text>
            {quiz?.themes.map((t) => (
              <View key={t.id} style={styles.row}>
                <Icon name="check-circle" size={18} color="#34C759" />
                <View style={{ flex: 1 }}>
                  <Text style={styles.rowTitle}>{t.title}</Text>
                  <Text style={styles.rowDesc}>{t.description}</Text>
                </View>
              </View>
            ))}
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(240)} style={styles.card}>
            <Text style={styles.cardTitle}>What you will do</Text>
            {quiz?.actions.map((a, idx) => (
              <View key={idx} style={styles.row}>
                <Icon name="activity" size={18} color="#FF9F0A" />
                <Text style={styles.rowTitle}>{a}</Text>
              </View>
            ))}
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(300)} style={styles.card}>
            <Text style={styles.cardTitle}>Requirements to pass</Text>
            {quiz?.requirements.map((r, idx) => (
              <View key={idx} style={styles.row}>
                <Icon name="shield" size={18} color="#5856D6" />
                <Text style={styles.rowTitle}>{r}</Text>
              </View>
            ))}
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(360)} style={styles.card}>
            <Text style={styles.cardTitle}>Sample Questions</Text>
            {quiz?.questions.slice(0, 3).map((q) => (
              <View key={q.id} style={styles.sampleQ}>
                <Text style={styles.sampleQText}>{q.text}</Text>
                {q.answers.slice(0, 2).map((ans) => (
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
            <View style={[styles.cta, { backgroundColor: '#E9ECEF' }]}>
              <Text style={[styles.ctaText, { color: '#111' }]}>Premium required for Professor</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.cta}
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Quiz', { quizId: quiz?.id ?? 'q1' })}
            >
              <Text style={styles.ctaText}>Start Quiz</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F6F8' },
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 8 },
  metaRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  metaText: { color: '#1C69D4', fontWeight: '600', textTransform: 'capitalize' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  paragraph: { color: '#333' },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 8 },
  rowTitle: { fontSize: 15, fontWeight: '600', flexShrink: 1 },
  rowDesc: { color: '#555', marginTop: 2 },
  sampleQ: {
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  sampleQText: { fontWeight: '600', marginBottom: 6 },
  answerChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 6,
  },
  answerChipText: { color: '#111' },
  footer: { padding: 16, backgroundColor: '#F5F6F8' },
  cta: {
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaText: { color: 'white', fontWeight: '700' },
  diffPill: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  diffPillActive: { backgroundColor: '#1C69D4' },
  diffPillText: { color: '#111', textTransform: 'capitalize', fontWeight: '600' },
  diffPillTextActive: { color: '#fff' },
});

