import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const Dropdown = ({onPress, text, value}) => {
  return (
    <TouchableOpacity style={styles.dropdown} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Feather name="chevron-down" size={20} color="white" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    borderColor: 'white',
    borderWidth: 0.2,
    borderRadius: 8,
    height: 40,
    width: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
  },
});

export default Dropdown;
