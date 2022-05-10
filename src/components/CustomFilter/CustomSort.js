import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Arrow from '../../assets/images/PriceArrow.png';
const CustomSort = ({onFilterPressed, onPriceFilterPressed, selectedSort}) => {
  return (
    <View>
      <View style={styles.root}>
        <TouchableOpacity onPress={onFilterPressed}>
          <View style={styles.filterContainer}>
            <Ionicons name="ios-filter" size={22} color="white" />
            <Text style={styles.text}>Filters</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPriceFilterPressed}>
          <View style={styles.filterContainer}>
            <Image source={Arrow} style={styles.image} />
            <Text style={styles.text}>{selectedSort}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 30,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Metropolis-regular',
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default CustomSort;
