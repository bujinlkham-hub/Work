import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/Button/CustomButton';

const AddShippingAddress = () => {
  const {control} = useForm();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <CustomHeader text="Adding Shipping Address" />
        <View style={styles.inputContainer}>
          <CustomInput
            name="Full name"
            control={control}
            placeholder="Full name"
            rules={{
              required: 'Full name is required',
              minLength: {
                value: 4,
                message: 'Full name should be at least 4 characters long',
              },
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            name="Address"
            control={control}
            placeholder="Address"
            rules={{
              required: 'Address is required',
              minLength: {
                value: 4,
                message: 'Address should be at least 4 characters long',
              },
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            name="City"
            control={control}
            placeholder="City"
            rules={{
              required: 'City is required',
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            name="State/Province/Region"
            control={control}
            placeholder="State/Province/Region"
            rules={{
              required: 'State/Province/Region is required',
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            name="Zip Code (Postal Code)"
            control={control}
            placeholder="Zip Code (Postal Code)"
            rules={{
              required: 'Zip Code (Postal Code) is required',
              minLength: {
                value: 2,
                message:
                  'Zip Code (Postal Code) should be at least 4 characters long',
              },
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            name="Country"
            control={control}
            placeholder="Country"
            rules={{
              required: 'Country is required',
            }}
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            text="SAVE ADDRESS"
            onPress={() => console.warn('SAVE ADDRESS pressed')}
          />
        </View>
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
  inputContainer: {
    marginVertical: 7,
  },
  button: {
    marginTop: 20,
  },
});

export default AddShippingAddress;
