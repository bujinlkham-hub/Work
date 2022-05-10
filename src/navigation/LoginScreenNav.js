import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/Authentication/SignUpScreen/SignUpScreen';
import LoginScreen from '../screens/Authentication/LoginScreen/LoginScreen';
import ForgetPasswordScreen from '../screens/Authentication/ForgetPasswordScreen/ForgetPasswordScreen';
import Router from '../navigation/router';
const LoginScreenNav = () => {
  const Stack = createStackNavigator();
  const [isLogin, setisLogin] = useState(false);
  console.log(isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogin === false ? (
          <>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn">
              {() => <LoginScreen isLogin={isLogin} setisLogin={setisLogin} />}
            </Stack.Screen>
            <Stack.Screen
              name="ForgotPassword"
              component={ForgetPasswordScreen}
            />
          </>
        ) : (
          <Stack.Screen name="MyApp" component={Router} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginScreenNav;
