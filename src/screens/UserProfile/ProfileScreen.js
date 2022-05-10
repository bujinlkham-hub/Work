import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import image from '../../assets/images/elonmusk.jpeg';
import CustomHeader from '../../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const onMyOrderPressed = () => {
    navigation.navigate('MyOrderScreen');
  };
  const onShippingAddressPressed = () => {
    navigation.navigate('ShippingAddresses');
  };
  const onPaymentMethodPressed = () => {
    navigation.navigate('PaymentMethod');
  };
  const onSettingsPressed = () => {
    navigation.navigate('SettingsScreen');
  };
  return (
    <View style={styles.container}>
      <CustomHeader name="search" />
      <View style={styles.root}>
        <Text style={styles.title}>My profile</Text>
        <View style={styles.profileContainer}>
          <Image source={image} resizeMode="contain" style={styles.image} />
          <View>
            <Text style={styles.name}>Matilda Brown</Text>
            <Text style={styles.email}>matildabrown@mail.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.item} onPress={onMyOrderPressed}>
          <View>
            <Text style={styles.text}>My orders</Text>
            <Text style={styles.smalltext}>Already have 12 orders</Text>
          </View>
          <AntDesign name="right" color="#ABB4BD" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShippingAddressPressed}>
          <View style={styles.item}>
            <View>
              <Text style={styles.text}>Shipping addresses</Text>
              <Text style={styles.smalltext}>3 ddresses</Text>
            </View>
            <AntDesign name="right" color="#ABB4BD" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPaymentMethodPressed}>
          <View style={styles.item}>
            <View>
              <Text style={styles.text}>Payment methods</Text>
              <Text style={styles.smalltext}>Visa **34</Text>
            </View>
            <AntDesign name="right" color="#ABB4BD" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View>
              <Text style={styles.text}>Promocodes</Text>
              <Text style={styles.smalltext}>You have special promocodes</Text>
            </View>
            <AntDesign name="right" color="#ABB4BD" />
          </View>
        </TouchableOpacity>
        <View style={styles.item}>
          <View>
            <Text style={styles.text}>My reviews</Text>
            <Text style={styles.smalltext}>Reviews for 4 items</Text>
          </View>
          <AntDesign name="right" color="#ABB4BD" />
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={onSettingsPressed}>
            <Text style={styles.text}>Settings</Text>
            <Text style={styles.smalltext}>Notifications, password</Text>
          </TouchableOpacity>
          <AntDesign name="right" color="#ABB4BD" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
  root: {marginHorizontal: 15},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Metropolis-Bold',
  },
  email: {
    color: '#ABB4BD',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-bold',
    marginTop: 15,
  },
  smalltext: {
    color: '#ABB4BD',
    fontSize: 11,
    fontFamily: 'Metropolis-regular',
    marginTop: 5,
    marginBottom: 15,
  },
});

export default ProfileScreen;
