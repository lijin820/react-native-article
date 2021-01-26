import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Search content is here</Text>
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
