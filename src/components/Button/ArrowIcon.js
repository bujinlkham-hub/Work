import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ArrowIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="left" size={20} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {},
});

export default ArrowIcon;
