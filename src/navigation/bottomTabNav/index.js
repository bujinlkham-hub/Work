import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import HomeScreen from '../../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import CategoriesTabNav from '../CategoriesTabNav';
import ArrowIcon from '../../components/Button/ArrowIcon';
import BagScreen from '../../screens/Bag/Index';
import FavoritesScreen from '../../screens/Favorite/FavoritesScreen';
import ProfileStackNav from '../ProfileStackNav';
import ShopStackNav from '../ShopStackNav';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EF3651',
        tabBarStyle: {
          backgroundColor: '#1E1F28',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={ShopStackNav}
        name="Categories"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={BagScreen}
        name="Bag"
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="shopping-bag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={FavoritesScreen}
        name="Favorities"
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileStackNav}
        name="Profile"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 24,
    borderTopWidth: 0,
  },
});

export default BottomTabNav;
