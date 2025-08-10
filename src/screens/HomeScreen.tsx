import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { CATEGORIES } from '../data/catalog';
import { categoryColor, theme } from '../styles/theme';
import MathIcon from '../assets/icons/MathIcon';
import PhysicsIcon from '../assets/icons/PhysicsIcon';
import ChemistryIcon from '../assets/icons/ChemistryIcon';
import JavaScriptIcon from '../assets/icons/JavaScriptIcon';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

function renderCategoryIcon(id: string, color: string) {
  switch (id) {
    case 'math':
      return <MathIcon color={color} />;
    case 'physics':
      return <PhysicsIcon color={color} />;
    case 'chemistry':
      return <ChemistryIcon color={color} />;
    case 'javascript':
      return <JavaScriptIcon color={color} />;
    default:
      return <Feather name="grid" size={24} color={color} />;
  }
}

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 16 }}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInUp.delay(index * 50)}>
              <TouchableOpacity
                style={[styles.card, { borderColor: theme.colors.hairline }]}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('CategoryDetail', { categoryId: item.id })}
              >
                <View style={[styles.iconWrap, { backgroundColor: categoryColor(item.id) + '33' }] }>
                  {renderCategoryIcon(item.id, categoryColor(item.id))}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  {!!item.description && <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>}
                </View>
                <Feather name="chevron-right" size={20} color={theme.colors.textSecondary} />
              </TouchableOpacity>
            </Animated.View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 0 },
  title: { fontSize: 28, fontWeight: '800', color: theme.colors.textPrimary, marginBottom: 6 },
  subtitle: { color: theme.colors.textSecondary, marginBottom: 8 },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.textPrimary },
  cardDesc: { color: theme.colors.textSecondary, marginTop: 2 },
});

