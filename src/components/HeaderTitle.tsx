import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
  title: string;
};

export function HeaderTitle(props: HeaderProps) {
  const { title } = props;
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-Medium',
  },
});
