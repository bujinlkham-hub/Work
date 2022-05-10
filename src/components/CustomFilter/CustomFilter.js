import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RangeSlider from 'rn-range-slider';

import CustomHeader from '../CustomHeader';
const CustomFilter = () => {
  const navigation = useNavigation();
  const COLORS = [
    '#020202',
    '#F6F6F6',
    '#F48117',
    '#BEA9A9',
    '#91BA4F',
    '#2CB1B1',
  ];
  const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  const CATEGORY = ['All', 'Woman', 'Men', 'Kids'];
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [activeSize, setActiveSize] = useState(SIZES[0]);
  const [activeCategory, setActiveCategory] = useState(CATEGORY[0]);
  return (
    <View style={styles.root}>
      <CustomHeader text="Filters" />
      <View style={styles.container}>
        <Text style={styles.title}>Price range</Text>
        {/* price slider */}
        <Text style={styles.title}>Colors</Text>
        <View style={styles.colorContainer}>
          {COLORS.map((item, index) => (
            <Pressable key={index} onPress={() => setActiveColor(item)}>
              <View
                style={
                  activeColor === item
                    ? styles.activeColorCircle
                    : styles.inActiveColorCircle
                }>
                <View style={[styles.colorCircle, {backgroundColor: item}]} />
              </View>
            </Pressable>
          ))}
        </View>
        <Text style={styles.title}>Sizes</Text>
        <View style={styles.sizeContainer}>
          {SIZES.map((item, index) => (
            <Pressable key={index} onPress={() => setActiveSize(item)}>
              <View
                style={
                  activeSize === item ? styles.activesizebox : styles.sizebox
                }>
                <Text style={styles.text}>{item}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <Text style={styles.title}>Category</Text>
        <View style={styles.categoryContainer}>
          {CATEGORY.map((item, index) => (
            <Pressable key={index} onPress={() => setActiveCategory(item)}>
              <View
                style={
                  activeCategory === item
                    ? styles.activeCategorybox
                    : styles.categorybox
                }>
                <Text style={styles.text}>{item}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button}>
              <Text style={styles.text}>Discard</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.buttonPrimery}>
              <Text style={styles.text}>Apply</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
  container: {
    marginHorizontal: 15,
  },
  title: {
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    fontSize: 16,
    marginVertical: 40,
  },
  text: {
    color: 'white',
    fontFamily: 'Metropolis-regular',
    fontSize: 14,
  },
  colorCircle: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  activeColorCircle: {
    width: 44,
    height: 44,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inActiveColorCircle: {
    width: 44,
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sizeContainer: {
    flexDirection: 'row',
  },
  sizebox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activesizebox: {
    width: 40,
    height: 40,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#EF3651',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categorybox: {
    width: 100,
    height: 40,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  activeCategorybox: {
    width: 100,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#EF3651',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    width: 170,
    height: 36,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimery: {
    width: 171,
    height: 37,
    borderRadius: 50,
    backgroundColor: '#EF3651',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomFilter;
