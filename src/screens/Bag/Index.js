import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'; 

import ProductCardBag from '../../components/ProductCard/ProductCardBag';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/Button/CustomButton';
import {useNavigation} from '@react-navigation/native';
const BagScreen = () => {
  const navigation = useNavigation();
  const onCheckOutButtonPressed = () => {
    navigation.navigate('CheckOutScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <Text style={styles.Header}>My Bag</Text>
        <ProductCardBag />

        <View style={styles.promoContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your promo code"
            placeholderTextColor="#ABB4BD"
          />
          <View style={styles.arrowIcon}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={20}
              color="#2A2C36"
            />
          </View>
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalAmount}>Total amount:</Text>
          <Text style={styles.totalPrice}>124$</Text>
        </View>
        <CustomButton text={'CHECK OUT'} onPress={onCheckOutButtonPressed} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
  root: {
    marginTop: 50,
    marginHorizontal: 15,
  },
  Header: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: '#2A2C36',
    color: 'white',
  },
  arrowIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#ABB4BD',
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  promoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24,
  },
  totalAmount: {
    color: '#ABB4BD',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  totalPrice: {
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
  },
});

export default BagScreen;
