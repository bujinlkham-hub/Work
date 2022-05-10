import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import SettingsScreen from '../screens/UserProfile/SettingsScreen';
import CheckOutScreen from '../screens/Bag/CheckOutScreen';
import PaymentMethod from '../screens/Bag/PaymentMethod';
import ShippingAddresses from '../screens/Bag/ShippingAddresses';
import AddShippingAddress from '../screens/Bag/AddShippingAddress';
import SuccessScreen from '../screens/Bag/SuccessScreen';
import CustomFilter from '../components/CustomFilter/CustomFilter';
const Root = createStackNavigator();

const Router = () => {
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      <Root.Screen component={BottomTabNav} name="HomeTabs" />
      <Root.Screen component={ProductScreen} name="ProductScreen" />
      <Root.Screen component={CustomFilter} name="CustomFilter" />
      <Root.Screen component={SettingsScreen} name="SettingsScreen" />
      <Root.Screen component={CheckOutScreen} name="CheckOutScreen" />
      <Root.Screen component={PaymentMethod} name="PaymentMethod" />
      <Root.Screen component={ShippingAddresses} name="ShippingAddresses" />
      <Root.Screen component={AddShippingAddress} name="AddShippingAddress" />
      <Root.Screen component={SuccessScreen} name="SuccessScreen" />
    </Root.Navigator>
  );
};

export default Router;
