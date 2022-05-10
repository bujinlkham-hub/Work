import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const AddButton = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.root}>
      <Pressable
        style={styles.button}
        onPress={() => setQuantity(Math.max(0, quantity - 1))}>
        <Text style={styles.text}>-</Text>
      </Pressable>

      <Text style={styles.number}>{quantity}</Text>

      <Pressable
        style={styles.button}
        onPress={() => setQuantity(quantity + 1)}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2A2C36',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  text: {
    color: '#ABB4BD',
    fontSize: 30,
    lineHeight: 0,
    letterSpacing: 0,
  },
  number: {
    color: 'white',
    fontSize: 20,
    marginTop: 6,
    marginHorizontal: 10,
  },
});

export default AddButton;
