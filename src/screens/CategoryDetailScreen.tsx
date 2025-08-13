import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { getQuizzesForCategoryLocalized, getCategories } from '../data/catalog';
import { theme } from '../styles/theme';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';

export default function CategoryDetailScreen() {
  const route = useRoute<any>();
  const { categoryId } = route.params ?? {};
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const lang = useSelector((s: RootState) => s.app.language);
  const quizzes = getQuizzesForCategoryLocalized(categoryId, lang as any);
  const cat = getCategories(lang as any).find((c) => c.id === categoryId);

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>{cat?.name || 'Category'}</Text>
        <FlatList
          data={quizzes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('QuizStart', { quizId: item.id })}
            >
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemSub} numberOfLines={1}>Difficulty: {item.difficulty}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '800', marginBottom: 12, color: theme.colors.textPrimary },
  item: {
    backgroundColor: theme.colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.hairline,
  },
  itemText: { fontSize: 16, fontWeight: '700', color: theme.colors.textPrimary },
  itemSub: { color: theme.colors.textSecondary, marginTop: 4 },
});

