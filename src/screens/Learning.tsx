import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Learning() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Latest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  name: {
    fontSize: 18,
    marginLeft: 20,
    fontFamily: 'Raleway-Regular',
  },
});
