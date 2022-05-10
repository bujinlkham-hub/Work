import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 25,
  },

  container_PRIMARY: {
    backgroundColor: '#EF3651',
  },

  container_SECONDARY: {
    borderColor: 'white',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontFamily: 'Metropolis-Regular',
    fontSize: 14,
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
