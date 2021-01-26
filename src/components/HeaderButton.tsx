import React, { Fragment } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type HeaderButtonProps = {
  align?: string;
};

export function HeaderButton({ align }: HeaderButtonProps) {
  return (
    <Fragment>
      {align === 'right' ? (
        <View style={styles.rightBtnWrapper}>
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <Ionicons
              name={'search-outline'}
              size={25}
              color={'black'}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <Ionicons
              name={'notifications-outline'}
              size={25}
              color={'black'}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => console.log('clicked')}
          style={styles.burgerBtn}>
          <Ionicons name={'menu-outline'} size={25} color={'black'} />
        </TouchableOpacity>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  burgerBtn: {
    marginLeft: 10,
  },
  rightBtnWrapper: {
    flexDirection: 'row',
  },
  rightIcon: {
    marginRight: 10,
  },
});
