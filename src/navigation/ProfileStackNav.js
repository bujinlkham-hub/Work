import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/UserProfile/ProfileScreen';
import MyOrderScreen from '../screens/UserProfile/MyOrderScreen';
import OrderDetailScreen from '../screens/UserProfile/OrderDetailScreen';
const ProfileStackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
      <Stack.Screen component={MyOrderScreen} name="MyOrderScreen" />
      <Stack.Screen component={OrderDetailScreen} name="OrderDetailScreen" />
    </Stack.Navigator>
  );
};

export default ProfileStackNav;
