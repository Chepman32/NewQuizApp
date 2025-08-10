import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { toggleHaptics, toggleSoundEffects, addHints, toggleRequireAnswerConfirm } from '../state/slices/appSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../styles/theme';

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const { soundEffectsEnabled, hapticsEnabled, hints, requireAnswerConfirm } = useSelector((s: RootState) => s.app);
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Sound Effects</Text>
            <Switch value={soundEffectsEnabled} onValueChange={() => dispatch(toggleSoundEffects())} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Haptic Feedback</Text>
            <Switch value={hapticsEnabled} onValueChange={() => dispatch(toggleHaptics())} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Require answer confirmation</Text>
            <Switch value={requireAnswerConfirm} onValueChange={() => dispatch(toggleRequireAnswerConfirm())} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Developer tools</Text>
          <Text style={styles.devText}>Hints balance: {Number.isFinite(hints as number) ? hints : 0}</Text>
          <TouchableOpacity style={styles.devBtn} onPress={() => dispatch(addHints(20))}>
            <Text style={styles.devBtnText}>Add 20 hints</Text>
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
  devText: { color: theme.colors.textSecondary, marginBottom: 8 },
  devBtn: { backgroundColor: theme.colors.primary, padding: 12, borderRadius: 10, alignItems: 'center' },
  devBtnText: { color: '#fff', fontWeight: '700' },
});

