import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import image from '../../assets/images/categoriesImages/image1.jpg';

const ShopScreen = () => {
  const navigation = useNavigation();
  const onCategoryPressed = () => {
    navigation.navigate('ProductCard');
  };
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 15, marginTop: 15}}>
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>SUMMER SALES</Text>
          <Text style={styles.saleText}>Up to 50% off</Text>
        </View>
        <Pressable style={styles.categoryContainer} onPress={onCategoryPressed}>
          <Text style={styles.categoty}>New</Text>
          <Image source={image} style={styles.image} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F28',
    height: '100%',
  },

  title: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    fontSize: 18,
  },
  saleContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#FF3E3E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  saleTitle: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    fontSize: 24,
    fontWeight: '500',
  },
  saleText: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    fontSize: 14,
  },
  categoryContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#2A2C36',
    marginBottom: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoty: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },
  image: {
    height: '100%',
    width: '50%',
    resizeMode: 'cover',
  },
});

export default ShopScreen;
