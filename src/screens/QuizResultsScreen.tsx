import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

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
};

export default function QuizResultsScreen() {
  const route = useRoute<any>();
  const { score = 0, total = 0, timeSeconds = 0, results = [] } = (route.params as Params) ?? {};
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.title}>Your Results</Text>
          <View style={styles.metricsRow}>
            <View style={styles.metric}>
              <Icon name="check-circle" size={18} color="#34C759" />
              <Text style={styles.metricText}>{score}/{total} correct</Text>
            </View>
            <View style={styles.metric}>
              <Icon name="percent" size={18} color="#1C69D4" />
              <Text style={styles.metricText}>{percent}%</Text>
            </View>
            <View style={styles.metric}>
              <Icon name="clock" size={18} color="#FF9F0A" />
              <Text style={styles.metricText}>{Math.round(timeSeconds/60)}m {timeSeconds%60}s</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Answer breakdown</Text>
          {results.map((r) => (
            <View key={r.id} style={styles.resultRow}>
              <Icon name={r.isCorrect ? 'check' : 'x'} size={18} color={r.isCorrect ? '#34C759' : '#FF3B30'} />
              <View style={{ flex: 1 }}>
                <Text style={styles.qText}>{r.text}</Text>
                <Text style={styles.aText}>Correct: {r.correctAnswer}</Text>
                {!!r.chosenAnswer && !r.isCorrect && (
                  <Text style={styles.aTextWrong}>Your answer: {r.chosenAnswer}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footerSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F6F8' },
  container: { padding: 16 },
  headerCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  metricsRow: { flexDirection: 'row', gap: 12 },
  metric: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#F1F5F9', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  metricText: { fontWeight: '700' },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16 },
  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  resultRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  qText: { fontWeight: '700' },
  aText: { color: '#333' },
  aTextWrong: { color: '#FF3B30' },
  footerSpacer: { height: 24 },
});

