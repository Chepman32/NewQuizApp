import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import {
  toggleHaptics,
  toggleSoundEffects,
  toggleRequireAnswerConfirm,
  setLanguage,
  setTheme,
  ThemeType,
} from '../state/slices/appSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../styles/ThemeContext';
import { useT } from '../i18n';
import { useResponsive, responsiveFontSize } from '../styles/useResponsive';

const THEMES: { key: ThemeType; labelKey: string }[] = [
  { key: 'light', labelKey: 'theme_light' },
  { key: 'dark', labelKey: 'theme_dark' },
  { key: 'solar', labelKey: 'theme_solar' },
  { key: 'mono', labelKey: 'theme_mono' },
];

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'th', label: 'ไทย' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'id', label: 'Indonesia' },
  { code: 'pl', label: 'Polski' },
  { code: 'uk', label: 'Українська' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'he', label: 'עברית' },
  { code: 'sv', label: 'Svenska' },
  { code: 'no', label: 'Norsk' },
  { code: 'da', label: 'Dansk' },
  { code: 'fi', label: 'Suomi' },
  { code: 'cs', label: 'Čeština' },
  { code: 'hu', label: 'Magyar' },
  { code: 'ro', label: 'Română' },
  { code: 'el', label: 'Ελληνικά' },
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'fil', label: 'Filipino' },
];

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const t = useT();
  const theme = useTheme();
  const { isTablet, contentMaxWidth, horizontalPadding } = useResponsive();
  const {
    soundEffectsEnabled,
    hapticsEnabled,
    requireAnswerConfirm,
    language,
    theme: currentTheme,
  } = useSelector((s: RootState) => s.app);

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: {
      flex: 1,
      padding: horizontalPadding,
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
      width: '100%',
    },
    title: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(24, isTablet),
      fontWeight: '800',
      marginBottom: isTablet ? 16 : 12,
    },
    section: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: isTablet ? 20 : 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    sectionTitle: {
      color: theme.colors.textSecondary,
      fontWeight: '700',
      marginBottom: isTablet ? 12 : 8,
      fontSize: responsiveFontSize(14, isTablet),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: isTablet ? 16 : 12,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.hairline,
    },
    label: {
      fontSize: responsiveFontSize(16, isTablet),
      color: theme.colors.textPrimary,
    },
    pill: {
      paddingVertical: isTablet ? 10 : 8,
      paddingHorizontal: isTablet ? 16 : 12,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.colors.hairline,
    },
    pillActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    pillText: {
      color: theme.colors.textPrimary,
      fontSize: responsiveFontSize(14, isTablet),
    },
    pillTextActive: { color: '#fff', fontWeight: '700' },
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{t('settings')}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('theme')}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {THEMES.map(th => (
              <TouchableOpacity
                key={th.key}
                style={[
                  styles.pill,
                  currentTheme === th.key && styles.pillActive,
                ]}
                onPress={() => dispatch(setTheme(th.key))}
              >
                <Text
                  style={[
                    styles.pillText,
                    currentTheme === th.key && styles.pillTextActive,
                  ]}
                >
                  {t(th.labelKey)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('preferences')}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('sound_effects')}</Text>
            <Switch
              value={!!soundEffectsEnabled}
              onValueChange={() => dispatch(toggleSoundEffects())}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('haptic_feedback')}</Text>
            <Switch
              value={!!hapticsEnabled}
              onValueChange={() => dispatch(toggleHaptics())}
            />
          </View>
          <View style={[styles.row, { borderBottomWidth: 0 }]}>
            <Text style={styles.label}>{t('require_answer_confirmation')}</Text>
            <Switch
              value={!!requireAnswerConfirm}
              onValueChange={() => dispatch(toggleRequireAnswerConfirm())}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('language')}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {LANGS.map(l => (
              <TouchableOpacity
                key={l.code}
                style={[styles.pill, language === l.code && styles.pillActive]}
                onPress={() => dispatch(setLanguage(l.code))}
              >
                <Text
                  style={[
                    styles.pillText,
                    language === l.code && styles.pillTextActive,
                  ]}
                >
                  {l.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
