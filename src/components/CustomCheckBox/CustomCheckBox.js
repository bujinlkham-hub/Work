import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomCheckBox = ({onPress, text}) => {
  return (
    <View style={styles.checkBoxContainer}>
      <View style={styles.checkBox}></View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    color: 'white',
    marginLeft: 15,
  },
});

export default CustomCheckBox;
