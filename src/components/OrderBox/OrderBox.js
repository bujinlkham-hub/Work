import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const OrderBox = ({onPress}) => {
  return (
    <View>
      <View style={styles.OrderContainer}>
        <View style={{marginHorizontal: 15}}>
          <View style={styles.OrderNoAndDate}>
            <Text style={styles.OrderNo}>Order №1947034</Text>
            <Text style={styles.OrderText}>05-12-2019</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.OrderText}>Tracking number: </Text>
            <Text style={styles.OrderValue}>IW3475453455</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.OrderText}>Quantity: </Text>
              <Text style={styles.OrderValue}>3</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.OrderText}>Total Amount: </Text>
              <Text style={styles.OrderValue}>112$</Text>
            </View>
          </View>
          <View style={styles.detailAndDeliverStatusContainer}>
            <TouchableOpacity style={styles.detailContainer} onPress={onPress}>
              <Text style={styles.detailText}>Details</Text>
            </TouchableOpacity>
            <Text style={styles.deliveredText}>Delivered</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  OrderContainer: {
    width: '100%',
    height: 164,
    backgroundColor: '#2A2C36',
    borderRadius: 8,
    marginTop: 20,
    justifyContent: 'center',
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
  detailAndDeliverStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  detailContainer: {
    width: 98,
    height: 36,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
  deliveredText: {
    color: '#55D85A',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
  },
});

export default OrderBox;
