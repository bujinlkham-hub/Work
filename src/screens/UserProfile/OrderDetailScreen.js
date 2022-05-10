import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CustomHeader from '../../components/CustomHeader';
import ProductCardOrder from '../../components/ProductCard/ProductCardOrder';
import {useNavigation} from '@react-navigation/native';
const OrderDetailScreen = () => {
  const navigation = useNavigation();
  const onLeaveFeedBackButtonPressed = () => {
    navigation.navigate('MyOrderScreen');
  };
  return (
    <ScrollView style={styles.root}>
      <CustomHeader text="Order Details" name="search" />
      <View style={styles.contianer}>
        <View style={styles.OrderNoAndDate}>
          <Text style={styles.OrderNo}>Order №1947034</Text>
          <Text style={styles.OrderText}>05-12-2019</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.OrderText}>Tracking number: </Text>
            <Text style={styles.OrderValue}>IW3475453455</Text>
          </View>
          <Text style={styles.deliveredText}>Delivered</Text>
        </View>
        <Text style={styles.OrderValue}>3 items</Text>
        <ProductCardOrder />
        <ProductCardOrder />
        <ProductCardOrder />
        <View style={{marginTop: 30}}>
          <Text style={styles.orderInformationText}>Order information</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.orderInformationTitle}>Shipping Address:</Text>
            <Text style={styles.orderInformationText}>
              3 Newbridge Court ,Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.orderInformationTitle}>Payment method:</Text>
            <Text style={styles.orderInformationText}>**** **** **** 3947</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.orderInformationTitle}>Delivery method:</Text>
            <Text style={styles.orderInformationText}>FedEx, 3 days, 15$</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.orderInformationTitle}>Discount:</Text>
            <Text style={styles.orderInformationText}>
              10%, Personal promo code
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.orderInformationTitle}>Total Amount:</Text>
            <Text style={styles.orderInformationText}>133$</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSecondary}>
            <Text style={styles.buttonText}>Reorder</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonPrimery}
            onPress={onLeaveFeedBackButtonPressed}>
            <Text style={styles.buttonText}>Leave feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
  contianer: {
    marginHorizontal: 15,
  },
  OrderNoAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  OrderNo: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
  },
  OrderText: {
    color: '#ABB4BD',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  OrderValue: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  deliveredText: {
    color: '#55D85A',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  orderInformationText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-bold',
    width: '60%',
  },
  orderInformationTitle: {
    color: '#ABB4BD',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 100,
  },
  buttonSecondary: {
    height: 36,
    width: 160,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimery: {
    height: 36,
    width: 160,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF3651',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
  },
});

export default OrderDetailScreen;
