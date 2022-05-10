import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import Google from '../../assets/loginIcon/Google.png';
import Facebook from '../../assets/loginIcon/Facebook.png';
const SocialButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <Pressable style={styles.iconContainer} onPress={onSignInGoogle}>
        <Image source={Google} style={styles.icon} />
      </Pressable>
      <Pressable style={styles.iconContainer} onPress={onSignInFacebook}>
        <Image source={Facebook} style={styles.icon} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    height: 64,
    width: 92,
    borderRadius: 24,
    backgroundColor: 'white',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
});

export default SocialButtons;
