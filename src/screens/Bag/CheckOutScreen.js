import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';
import DHLlogo from '../../assets/images/logo/DHL-Logo-PNG2.png';
import FedEXlogo from '../../assets/images/logo/FedEx-Logo-PNG5.png';
import USPSlogo from '../../assets/images/logo/USPS-Logo-PNG1.png';
import CustomButton from '../../components/Button/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import mastercard from '../../assets/images/logo/Mastercard-Logo-PNG10.png';
const CheckOutScreen = () => {
  const navigation = useNavigation();
  const onPaymentChangePressed = () => {
    navigation.navigate('PaymentMethod');
  };
  const onShippingAddressChangePressed = () => {
    navigation.navigate('ShippingAddresses');
  };
  const onSubmitOrderPressed = () => {
    navigation.navigate('SuccessScreen');
  };
  return (
    <View style={styles.root}>
      <CustomHeader text="Checkout" />
      <View style={styles.container}>
        <Text style={styles.title}>Shipping address</Text>
        <View style={styles.AddressCard}>
          <View style={{marginHorizontal: 15}}>
            <View style={styles.addresstopcontainer}>
              <Text style={styles.text}>Jane Doe</Text>
              <TouchableOpacity onPress={onShippingAddressChangePressed}>
                <Text style={styles.change}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.adressText}>
              3 Newbridge Court Chino Hills, CA 91709, United States
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 15,
            marginTop: 50,
            marginBottom: 20,
          }}>
          <Text style={styles.title}>Payment</Text>
          <TouchableOpacity onPress={onPaymentChangePressed}>
            <Text style={styles.change}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paymentContainer}>
          <View style={styles.paymentcard}>
            <Image source={mastercard} style={styles.mastercard} />
          </View>
          <Text style={styles.text}>**** **** **** 3947</Text>
        </View>
        <Text style={styles.title}>Delivery method</Text>
        <View style={styles.deliveryContainer}>
          <View style={styles.deliveryBox}>
            <Image source={FedEXlogo} style={styles.logo} />
            <Text style={styles.deliveryText}>2-3 days</Text>
          </View>
          <View style={styles.deliveryBox}>
            <Image source={USPSlogo} style={styles.logod} />
            <Text style={styles.deliveryText}>2-3 days</Text>
          </View>
          <View style={styles.deliveryBox}>
            <Image source={DHLlogo} style={styles.logo} />
            <Text style={styles.deliveryText}>2-3 days</Text>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.priceContainer}>
            <Text style={styles.pricetext}>Order:</Text>
            <Text style={styles.price}>112$</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.pricetext}>Delivery:</Text>
            <Text style={styles.price}>15$</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.pricetext}>Summary:</Text>
            <Text style={styles.price}>127$</Text>
          </View>
          <CustomButton text="SUBMIT ORDER" onPress={onSubmitOrderPressed} />
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
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
  },
  change: {
    color: '#EF3651',
    fontSize: 14,
    fontFamily: 'Metropolis-bold',
  },
  adressText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
    width: '80%',
    lineHeight: 20,
  },
  AddressCard: {
    width: '100%',
    height: 108,
    backgroundColor: '#2A2C36',
    borderRadius: 8,
    marginTop: 20,
    justifyContent: 'center',
  },
  addresstopcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentcard: {
    width: 64,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mastercard: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logo: {
    width: 60,
    height: 20,
    resizeMode: 'contain',
  },
  logod: {
    width: 65,
    height: 20,
    resizeMode: 'contain',
  },
  deliveryText: {
    color: '#ABB4BD',
    fontFamily: 'Metropolis-regular',
    marginTop: 8,
  },
  deliveryBox: {
    width: 110,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pricetext: {
    color: '#ABB4BD',
    fontFamily: 'Metropolis-regular',
  },
  price: {
    color: 'white',
    fontFamily: 'Metropolis-bold',
  },
});

export default CheckOutScreen;
