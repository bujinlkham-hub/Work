import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../../components/Button/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import SocialButtons from '../../../components/Button/SocialButtons';
import ArrowIcon from '../../../components/Button/ArrowIcon';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginScreen = ({setisLogin}) => {
  const navigation = useNavigation();
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const {control} = useForm();
  const onLoginPressed = () => {
    setisLogin(true);
  };
  const onBackButtonPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={styles.contianer}>
      <View style={{marginHorizontal: 15}}>
        <ArrowIcon onPress={onBackButtonPressed} />
        <View>
          <Text style={styles.headline}>Login</Text>
        </View>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is valid'},
          }}
        />
        <CustomInput
          name="Password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <View style={styles.deezTextContainer}>
          <Pressable
            style={{flexDirection: 'row'}}
            onPress={onForgotPasswordPressed}>
            <Text style={styles.deezText}>Forgot your password?</Text>
            <FontAwesome name="long-arrow-right" size={16} color="#EF3651" />
          </Pressable>
        </View>
        <CustomButton text="LOGIN" onPress={onLoginPressed} />
        <View style={styles.socialButton}>
          <Text style={styles.text}>Or login with social account</Text>
          <SocialButtons />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contianer: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },

  headline: {
    marginTop: 30,
    marginBottom: 60,
    color: '#F6F6F6',
    fontSize: 34,
    fontFamily: 'Metropolis-Bold',
    lineHeight: 34,
  },
  deezTextContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 40,
    marginRight: 5,
  },
  deezText: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
  },

  socialButton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: Dimensions.get('window').height / 4,
  },
});

export default LoginScreen;
