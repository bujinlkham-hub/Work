import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import bagsImage from '../../assets/images/logo/bags.png';
import CustomButton from '../../components/Button/CustomButton';

const SuccessScreen = () => {
  const navigation = useNavigation();
  const onContinueShoppingPressed = () => {
    navigation.navigate('HomeTabs');
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.center}>
          <Image source={bagsImage} style={styles.image} />
          <Text style={styles.title}>Success!</Text>
          <Text style={styles.text}>
            Your order will be delivered soon. Thank you for choosing our app!
          </Text>
        </View>
        <CustomButton
          text="CONTINUE SHOPPING"
          onPress={onContinueShoppingPressed}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1F28',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  center: {
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    color: 'white',
    fontSize: 34,
    fontFamily: 'Metropolis-bold',
  },
  text: {
    marginTop: 10,
    marginBottom: 100,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-regular',
    width: '60%',
    lineHeight: 20,
  },
});

export default SuccessScreen;
