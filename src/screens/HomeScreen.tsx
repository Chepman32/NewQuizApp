import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { CATEGORIES } from '../data/catalog';
import Feather from 'react-native-vector-icons/Feather';
import { categoryColor, theme } from '../styles/theme';

Feather.loadFont();

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
                  <Feather name={item.iconName || 'grid'} size={24} color={categoryColor(item.id)} />
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
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.textPrimary },
  cardDesc: { color: theme.colors.textSecondary, marginTop: 2 },
});

