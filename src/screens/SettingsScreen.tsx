import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { toggleHaptics, toggleSoundEffects, addHints, toggleRequireAnswerConfirm } from '../state/slices/appSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const { soundEffectsEnabled, hapticsEnabled, hints, requireAnswerConfirm } = useSelector((s: RootState) => s.app);
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
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

        <View style={[styles.card]}>
          <Text style={styles.cardTitle}>Developer tools</Text>
          <Text style={{ marginBottom: 8 }}>Hints balance: {Number.isFinite(hints as number) ? hints : 0}</Text>
          <TouchableOpacity style={styles.devBtn} onPress={() => dispatch(addHints(20))}>
            <Text style={styles.devBtnText}>Add 20 hints</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F6F8' },
  container: { flex: 1, padding: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  label: { fontSize: 16 },
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontWeight: '800', marginBottom: 8 },
  devBtn: { backgroundColor: '#1C69D4', padding: 12, borderRadius: 10, alignItems: 'center' },
  devBtnText: { color: '#fff', fontWeight: '700' },
});

