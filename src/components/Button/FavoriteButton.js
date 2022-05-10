import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const FavoriteButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const onFavButtonPressed = () => {
    setIsPressed(!isPressed);
  };
  return (
    <Pressable style={styles.favicon} onPress={onFavButtonPressed}>
      {isPressed ? (
        <AntDesign name="heart" size={15} color="#EF3651" />
      ) : (
        <AntDesign name="hearto" size={15} color="white" />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  favicon: {
    backgroundColor: '#2A2C36',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default FavoriteButton;
