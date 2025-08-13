import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { toggleHaptics, toggleSoundEffects, addHints, toggleRequireAnswerConfirm, setLanguage } from '../state/slices/appSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../styles/theme';
import { useT } from '../i18n';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ko', label: '한국어' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'zh', label: '中文' },
];

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const t = useT();
  const { soundEffectsEnabled, hapticsEnabled, hints, requireAnswerConfirm, language } = useSelector((s: RootState) => s.app);
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('settings')}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('preferences')}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('sound_effects')}</Text>
            <Switch value={soundEffectsEnabled} onValueChange={() => dispatch(toggleSoundEffects())} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('haptic_feedback')}</Text>
            <Switch value={hapticsEnabled} onValueChange={() => dispatch(toggleHaptics())} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('require_answer_confirmation')}</Text>
            <Switch value={requireAnswerConfirm} onValueChange={() => dispatch(toggleRequireAnswerConfirm())} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('language')}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {LANGS.map((l) => (
              <TouchableOpacity key={l.code} style={[styles.langPill, language === l.code && styles.langPillActive]} onPress={() => dispatch(setLanguage(l.code))}>
                <Text style={[styles.langText, language === l.code && styles.langTextActive]}>{l.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('developer_tools')}</Text>
          <Text style={styles.devText}>{t('hints_balance')}: {Number.isFinite(hints as number) ? hints : 0}</Text>
          <TouchableOpacity style={styles.devBtn} onPress={() => dispatch(addHints(20))}>
            <Text style={styles.devBtnText}>{t('add_20_hints')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, padding: 16 },
  title: { color: theme.colors.textPrimary, fontSize: 24, fontWeight: '800', marginBottom: 12 },
  section: { backgroundColor: theme.colors.surface, borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: theme.colors.hairline },
  sectionTitle: { color: theme.colors.textSecondary, fontWeight: '700', marginBottom: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.hairline,
  },
  label: { fontSize: 16, color: theme.colors.textPrimary },
  langPill: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 999, borderWidth: 1, borderColor: theme.colors.hairline },
  langPillActive: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  langText: { color: theme.colors.textPrimary },
  langTextActive: { color: '#fff', fontWeight: '700' },
  devText: { color: theme.colors.textSecondary, marginBottom: 8 },
  devBtn: { backgroundColor: theme.colors.primary, padding: 12, borderRadius: 10, alignItems: 'center' },
  devBtnText: { color: '#fff', fontWeight: '700' },
});

