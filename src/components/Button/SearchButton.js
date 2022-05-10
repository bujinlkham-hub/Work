import React from 'react';
import {View, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
const SearchButton = ({onPress, name}) => {
  return (
    <Fontisto
      name={name}
      size={20}
      color="white"
      style={styles.icon}
      onPress={onPress}
    />
  );
};
const styles = StyleSheet.create({
  icon: {},
});

export default SearchButton;
