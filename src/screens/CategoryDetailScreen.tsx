import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { getQuizzesForCategoryLocalized, getCategories } from '../data/catalog';
import { useTheme } from '../styles/ThemeContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';

export default function CategoryDetailScreen() {
  const route = useRoute<any>();
  const { categoryId } = route.params ?? {};
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const lang = useSelector((s: RootState) => s.app.language);
  const theme = useTheme();
  const quizzes = getQuizzesForCategoryLocalized(categoryId, lang as any);
  const cat = getCategories(lang as any).find(c => c.id === categoryId);
  const { isTablet, numColumns, horizontalPadding, cardWidth } =
    useResponsive();

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: { flex: 1, padding: horizontalPadding },
    contentContainer: {
      paddingVertical: 8,
      ...(numColumns > 1 && { gap: 12 }),
    },
    columnWrapper: numColumns > 1 ? { gap: 12 } : undefined,
    title: {
      fontSize: responsiveFontSize(24, isTablet),
      fontWeight: '800',
      marginBottom: 12,
      color: theme.colors.textPrimary,
    },
    item: {
      backgroundColor: theme.colors.surface,
      padding: isTablet ? 20 : 16,
      borderRadius: 12,
      marginBottom: numColumns > 1 ? 0 : 10,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
      width: numColumns > 1 ? cardWidth : undefined,
    },
    itemText: {
      fontSize: responsiveFontSize(16, isTablet),
      fontWeight: '700',
      color: theme.colors.textPrimary,
    },
    itemSub: {
      fontSize: responsiveFontSize(14, isTablet),
      color: theme.colors.textSecondary,
      marginTop: 4,
    },
  });

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>{cat?.name || 'Category'}</Text>
        <FlatList
          data={quizzes}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          key={numColumns}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate('QuizStart', { quizId: item.id })
              }
            >
              <Text style={styles.itemText}>{item.title}</Text>
              <Text
                style={styles.itemSub}
                numberOfLines={numColumns > 1 ? 2 : 1}
              >
                {item.description}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
