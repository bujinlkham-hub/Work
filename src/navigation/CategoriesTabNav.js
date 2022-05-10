import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ShopScreen from '../screens/Shop';
import CustomHeader from '../components/CustomHeader';

const Tab = createMaterialTopTabNavigator();

const CategoriesTabNav = () => {
  return (
    <>
      <CustomHeader text="Categories" name="search" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1E1F28',
          },
          tabBarLabelStyle: {
            color: 'white',
            fontFamily: 'Metropolis-Regular',
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#FF3E3E',
          },
        }}>
        <Tab.Screen name={'Women'} component={ShopScreen} />
        <Tab.Screen name={'Men'} component={ShopScreen} />
        <Tab.Screen name={'Kids'} component={ShopScreen} />
      </Tab.Navigator>
    </>
  );
};

export default CategoriesTabNav;
