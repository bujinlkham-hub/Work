import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import ShopScreen from '../screens/Shop';
import CategoriesTabNav from './CategoriesTabNav';
const Stack = createStackNavigator();
const ShopStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={CategoriesTabNav} name="CategoriesTabNav" />
      <Stack.Screen component={ProductCard} name="ProductCard" />
    </Stack.Navigator>
  );
};

export default ShopStackNav;
