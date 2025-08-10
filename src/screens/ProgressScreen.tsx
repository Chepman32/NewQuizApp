import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { theme } from '../styles/theme';
import { CATEGORIES, getQuizzesForCategory } from '../data/catalog';

export default function ProgressScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { hints } = useSelector((s: RootState) => s.app);
  const progress = useSelector((s: RootState) => s.progress);

  const overall = useMemo(() => {
    const completed = progress.attempts.length;
    const questions = progress.totals.questionsAnswered;
    const correct = progress.totals.correctAnswers;
    const timeMinutes = Math.round(progress.totals.totalTimeSeconds / 60);
    const accuracy = questions > 0 ? Math.round((correct / questions) * 100) : 0;
    const totalQuizzes = CATEGORIES.reduce((acc, c) => acc + getQuizzesForCategory(c.id).length, 0);
    return { completed, questions, accuracy, timeMinutes, totalQuizzes, hintsUsed: questions - correct };
  }, [progress]);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}> 
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Progress</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Quizzes Completed</Text>
            <Text style={styles.statValue}>{overall.completed}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Questions Answered</Text>
            <Text style={styles.statValue}>{overall.questions}</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Accuracy</Text>
            <Text style={styles.statValue}>{overall.accuracy}%</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Time Played</Text>
            <Text style={styles.statValue}>{overall.timeMinutes}m</Text>
          </View>
        </View>

        <View style={styles.hintsCard}>
          <Text style={styles.sectionTitle}>Hints</Text>
          <Text style={styles.hintsText}>Balance: {hints}</Text>
          <Text style={styles.hintsSub}>Used: {overall.hintsUsed} · Avg/quiz: {overall.completed ? (overall.hintsUsed / overall.completed).toFixed(1) : 0}</Text>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(c) => c.id}
          contentContainerStyle={{ paddingBottom: 12 }}
          renderItem={({ item }) => {
            const quizzes = getQuizzesForCategory(item.id);
            const totalAnswers = quizzes.reduce((sum, q) => sum + q.questions.length, 0);
            const completedQuizIds = new Set(
              progress.attempts.filter((a) => a.categoryId === item.id).map((a) => a.quizId)
            );
            const answeredCoverage = quizzes
              .filter((q) => completedQuizIds.has(q.id))
              .reduce((sum, q) => sum + q.questions.length, 0);
            const pct = totalAnswers ? Math.round((answeredCoverage / totalAnswers) * 100) : 0;
            return (
              <TouchableOpacity style={styles.catCard} onPress={() => navigation.navigate('CategoryDetail', { categoryId: item.id })}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.catTitle}>{item.name}</Text>
                  <Text style={styles.catMeta}>{answeredCoverage}/{totalAnswers} answers · {pct}%</Text>
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { width: `${pct}%` }]} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {progress.attempts.length === 0 ? (
            <Text style={styles.muted}>History will appear here after your first games.</Text>
          ) : (
            progress.attempts.slice(0, 10).map((a) => (
              <View key={a.id} style={{ paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: theme.colors.hairline }}>
                <Text style={{ color: theme.colors.textPrimary, fontWeight: '700' }}>{a.quizId}</Text>
                <Text style={{ color: theme.colors.textSecondary }}>Score: {Math.round((a.score / a.total) * 100)}% · Time: {Math.floor(a.timeSeconds/60)}m {a.timeSeconds%60}s · {new Date(a.createdAt).toLocaleDateString()}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { padding: 16 },
  title: { color: theme.colors.textPrimary, fontSize: 28, fontWeight: '800', marginBottom: 8 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  statCard: { flex: 1, backgroundColor: theme.colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.colors.hairline },
  statLabel: { color: theme.colors.textSecondary, fontWeight: '700' },
  statValue: { color: theme.colors.textPrimary, fontSize: 24, fontWeight: '800', marginTop: 6 },
  hintsCard: { backgroundColor: theme.colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.colors.hairline },
  sectionTitle: { color: theme.colors.textSecondary, fontWeight: '800', marginBottom: 8 },
  hintsText: { color: theme.colors.textPrimary, fontWeight: '800' },
  hintsSub: { color: theme.colors.textSecondary, marginTop: 2 },
  catCard: { backgroundColor: theme.colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.colors.hairline, marginBottom: 10 },
  catTitle: { color: theme.colors.textPrimary, fontWeight: '800' },
  catMeta: { color: theme.colors.textSecondary, marginTop: 2 },
  barTrack: { height: 8, backgroundColor: theme.colors.surface, borderRadius: 999, borderWidth: 1, borderColor: theme.colors.hairline, marginTop: 8, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: theme.colors.primary },
  card: { backgroundColor: theme.colors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.colors.hairline, marginTop: 12 },
  muted: { color: theme.colors.textSecondary },
});

