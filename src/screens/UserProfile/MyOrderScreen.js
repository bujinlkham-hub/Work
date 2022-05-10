import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import OrderBox from '../../components/OrderBox/OrderBox';
import {useNavigation} from '@react-navigation/native';
const MyOrderScreen = () => {
  const navigation = useNavigation();
  const onDetailsButtonPressed = () => {
    navigation.navigate('OrderDetailScreen');
  };
  return (
    <View style={styles.root}>
      <CustomHeader name="search" />
      <View style={styles.container}>
        <Text style={styles.title}>My Orders</Text>
        <View style={styles.topBarTitles}>
          <View style={styles.topBarTitle}>
            <Text style={styles.text}>Delivered</Text>
          </View>
          <View style={styles.topBarTitle}>
            <Text style={styles.text}>Processing</Text>
          </View>
          <View style={styles.topBarTitle}>
            <Text style={styles.text}>Cancelled</Text>
          </View>
        </View>
        <OrderBox onPress={onDetailsButtonPressed} />
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
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    marginBottom: 20,
  },
  text: {},
  topBarTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    width: 100,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default MyOrderScreen;
