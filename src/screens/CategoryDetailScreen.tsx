import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

const mockQuizzes = [
  { id: 'q1', title: 'Basics' },
  { id: 'q2', title: 'Intermediate' },
  { id: 'q3', title: 'Advanced' },
];

export default function CategoryDetailScreen() {
  const route = useRoute<any>();
  const { categoryId } = route.params ?? {};
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>Category: {categoryId}</Text>
        <FlatList
          data={mockQuizzes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('QuizStart', { quizId: item.id })}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F6F8' },
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemText: { fontSize: 16, fontWeight: '600' },
});

