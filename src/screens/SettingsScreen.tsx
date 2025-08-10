import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { toggleHaptics, toggleSoundEffects } from '../state/slices/appSlice';

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const { soundEffectsEnabled, hapticsEnabled } = useSelector((s: RootState) => s.app);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Sound Effects</Text>
        <Switch value={soundEffectsEnabled} onValueChange={() => dispatch(toggleSoundEffects())} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Haptic Feedback</Text>
        <Switch value={hapticsEnabled} onValueChange={() => dispatch(toggleHaptics())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  label: { fontSize: 16 },
});

