import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox';
const ShippingAddresses = () => {
  const navigation = useNavigation();
  const onAddAddressButtonPressed = () => {
    navigation.navigate('AddShippingAddress');
  };
  return (
    <View style={styles.root}>
      <CustomHeader text="Shipping Addresses" />
      <View style={styles.container}>
        <View style={styles.AddressCard}>
          <View style={{marginHorizontal: 20}}>
            <View style={styles.addresstopcontainer}>
              <Text style={styles.text}>Jane Doe</Text>
              <TouchableOpacity onPress={() => console.warn()}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.adressText}>
              3 Newbridge Court Chino Hills, CA 91709, United States
            </Text>
            <CustomCheckBox text="Use as the shipping address" />
          </View>
        </View>
        <TouchableOpacity onPress={onAddAddressButtonPressed}>
          <View style={styles.addButtonContainer}>
            <View style={styles.addButton}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
  },
  edit: {
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
    height: 140,
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
  addButtonContainer: {
    marginVertical: 20,
    alignItems: 'flex-end',
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 30,
    lineHeight: 0,
    letterSpacing: 0,
    bottom: 2,
  },
});

export default ShippingAddresses;
