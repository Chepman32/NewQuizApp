import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { getCategories } from '../data/catalog';
import { categoryColor } from '../styles/theme';
import { useTheme } from '../styles/ThemeContext';
import MathIcon from '../assets/icons/MathIcon';
import PhysicsIcon from '../assets/icons/PhysicsIcon';
import ChemistryIcon from '../assets/icons/ChemistryIcon';
import JavaScriptIcon from '../assets/icons/JavaScriptIcon';
import BiologyIcon from '../assets/icons/BiologyIcon';
import AstronomyIcon from '../assets/icons/AstronomyIcon';
import GeographyIcon from '../assets/icons/GeographyIcon';
import HistoryIcon from '../assets/icons/HistoryIcon';
import LiteratureIcon from '../assets/icons/LiteratureIcon';
import ArtIcon from '../assets/icons/ArtIcon';
import MusicIcon from '../assets/icons/MusicIcon';
import ComputerScienceIcon from '../assets/icons/ComputerScienceIcon';
import ProgrammingIcon from '../assets/icons/ProgrammingIcon';
import AlgorithmsIcon from '../assets/icons/AlgorithmsIcon';
import DataStructuresIcon from '../assets/icons/DataStructuresIcon';
import EconomicsIcon from '../assets/icons/EconomicsIcon';
import PsychologyIcon from '../assets/icons/PsychologyIcon';
import PhilosophyIcon from '../assets/icons/PhilosophyIcon';
import AnatomyIcon from '../assets/icons/AnatomyIcon';
import SportsIcon from '../assets/icons/SportsIcon';
import Feather from 'react-native-vector-icons/Feather';
import { useT } from '../i18n';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';

Feather.loadFont();

const iconMap: Record<string, (color: string) => React.ReactNode> = {
  'math': (color) => <MathIcon color={color} />,
  'physics': (color) => <PhysicsIcon color={color} />,
  'chemistry': (color) => <ChemistryIcon color={color} />,
  'javascript': (color) => <JavaScriptIcon color={color} />,
  'biology': (color) => <BiologyIcon color={color} />,
  'astronomy': (color) => <AstronomyIcon color={color} />,
  'geography': (color) => <GeographyIcon color={color} />,
  'history': (color) => <HistoryIcon color={color} />,
  'literature': (color) => <LiteratureIcon color={color} />,
  'art': (color) => <ArtIcon color={color} />,
  'music': (color) => <MusicIcon color={color} />,
  'computer-science': (color) => <ComputerScienceIcon color={color} />,
  'programming': (color) => <ProgrammingIcon color={color} />,
  'algorithms': (color) => <AlgorithmsIcon color={color} />,
  'data-structures': (color) => <DataStructuresIcon color={color} />,
  'economics': (color) => <EconomicsIcon color={color} />,
  'psychology': (color) => <PsychologyIcon color={color} />,
  'philosophy': (color) => <PhilosophyIcon color={color} />,
  'anatomy': (color) => <AnatomyIcon color={color} />,
  'sports': (color) => <SportsIcon color={color} />,
};

function renderCategoryIcon(id: string, color: string) {
  const iconRenderer = iconMap[id];
  return iconRenderer ? iconRenderer(color) : <Feather name="grid" size={24} color={color} />;
}

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const t = useT();
  const theme = useTheme();
  const lang = useSelector((s: RootState) => s.app.language);
  const data = React.useMemo(() => getCategories(lang as any), [lang]);

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: { flex: 1, paddingHorizontal: 16, paddingTop: 0 },
    title: {
      fontSize: 28,
      fontWeight: '800',
      color: theme.colors.textPrimary,
      marginBottom: 6,
    },
    subtitle: { color: theme.colors.textSecondary, marginBottom: 8 },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
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
    cardTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.colors.textPrimary,
    },
    cardDesc: { color: theme.colors.textSecondary, marginTop: 2 },
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('home_title')}</Text>
        <Text style={styles.subtitle}>{t('welcome_back')}</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 16 }}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInUp.delay(index * 50)}>
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.85}
                onPress={() =>
                  navigation.navigate('CategoryDetail', { categoryId: item.id })
                }
              >
                <View
                  style={[
                    styles.iconWrap,
                    { backgroundColor: categoryColor(item.id) + '33' },
                  ]}
                >
                  {renderCategoryIcon(item.id, categoryColor(item.id))}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  {!!item.description && (
                    <Text style={styles.cardDesc} numberOfLines={2}>
                      {item.description}
                    </Text>
                  )}
                </View>
                <Feather
                  name="chevron-right"
                  size={20}
                  color={theme.colors.textSecondary}
                />
              </TouchableOpacity>
            </Animated.View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
