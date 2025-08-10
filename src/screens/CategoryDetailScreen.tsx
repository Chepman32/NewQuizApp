import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18 },
});

