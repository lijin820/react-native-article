import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Resources() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Resources content is here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    marginLeft: 20,
  },
});
