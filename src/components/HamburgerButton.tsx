import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function HamburgerButton() {
  return (
    <TouchableOpacity
      onPress={() => console.log('clicked')}
      style={styles.burgerBtn}>
      <Ionicons name={'menu-outline'} size={25} color={'black'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  burgerBtn: {
    marginLeft: 10,
  },
});
