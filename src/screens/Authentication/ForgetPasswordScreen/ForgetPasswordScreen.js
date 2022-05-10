import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton';
import {useForm} from 'react-hook-form';
import ArrowIcon from '../../../components/Button/ArrowIcon';
import {useNavigation} from '@react-navigation/core';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  const {control} = useForm();
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const onSendPressed = () => {
    console.warn('onSendPressed');
  };
  const onBackButtonPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={styles.contianer}>
      <View style={{marginHorizontal: 15}}>
        <ArrowIcon onPress={onBackButtonPressed} />
        <View>
          <Text style={styles.headline}>Forgot password</Text>
        </View>
        <Text style={styles.text}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is valid'},
          }}
        />
        <View style={{marginTop: 64}}>
          <CustomButton text="SEND" onPress={onSendPressed} />
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
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default ForgetPasswordScreen;
