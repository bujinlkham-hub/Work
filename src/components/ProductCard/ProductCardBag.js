import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddButton from '../Button/AddButton';
import image from '../../assets/images/categoriesImages/image2.jpg';
import Entypo from 'react-native-vector-icons/Entypo';
const ProductCardBag = ({onPress}) => {
  return (
    <View>
      <View style={styles.productContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.title}>
          <View style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.name}>Pullover</Text>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color="#ABB4BD"
                style={styles.icon}
                onPress={onPress}
              />
            </View>
            <View style={styles.option}>
              <View style={styles.option}>
                <Text style={styles.colorandsize}>Color:</Text>
                <Text style={styles.colorandsizetext}> Black</Text>
              </View>
              <View style={[styles.option, {marginLeft: 10}]}>
                <Text style={styles.colorandsize}>Size:</Text>
                <Text style={styles.colorandsizetext}> L</Text>
              </View>
            </View>
            <View style={styles.icon}>
              <AddButton />
              <Text style={styles.price}>51$</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: '#2A2C36',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    height: '100%',
    width: '30%',
    resizeMode: 'cover',
  },
  button: {
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  title: {
    width: '70%',
    backgroundColor: '#2A2C36',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-Bold',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
  },
  price: {
    color: 'white',
    fontSize: 15,
    marginRight: 9,
  },
  option: {
    flexDirection: 'row',
  },
  colorandsize: {
    color: '#ABB4BD',
    fontFamily: 'Metropolis-Regular',
  },
  colorandsizetext: {
    color: '#F6F6F6',
    fontFamily: 'Metropolis-Regular',
  },
  container: {
    marginTop: 5,
    marginLeft: 10,
  },
});

export default ProductCardBag;
