import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const mockCategories = [
  { id: 'cat1', name: 'Science', isPremium: false },
  { id: 'cat2', name: 'History', isPremium: true },
  { id: 'cat3', name: 'Programming', isPremium: false },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzes</Text>
      <FlatList
        data={mockCategories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInUp.delay(index * 60)}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              {item.isPremium && <Text style={styles.lock}>Premium</Text>}
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '600' },
  lock: { color: '#F5A623', marginTop: 6, fontWeight: '600' },
});

