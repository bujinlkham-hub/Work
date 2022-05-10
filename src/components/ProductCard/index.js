import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import FavoriteButton from '../Button/FavoriteButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const ProductItem = props => {
  const navigation = useNavigation();
  const {image, title, ratings, category, oldPrice, price, avgRating, id} =
    props.product;

  const onFavButtonPressed = () => {};
  const onProductItemPressed = () => {
    navigation.navigate('ProductScreen', {productID: id});
  };
  return (
    <Pressable style={styles.productContainer} onPress={onProductItemPressed}>
      <View style={styles.productImage}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.newContainer}>
          <Text style={styles.saleText}>NEW</Text>
        </View>
        <View style={styles.favIconContainer}>
          <FavoriteButton onPress={onFavButtonPressed} />
        </View>
      </View>
      <View style={styles.ratingsContainer}>
        {[0, 0, 0, 0, 0].map((el, i) => (
          <FontAwesome
            key={`${id}-${i}`}
            style={styles.star}
            name={i < Math.floor(avgRating) ? 'star' : 'star-o'}
            size={13}
            color={'#FFBA49'}
          />
        ))}
        <Text style={styles.text}>({ratings})</Text>
      </View>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.categoryTitle}>{category}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldprice}>{oldPrice}$</Text>
        <Text style={styles.price}> {price}$</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    marginRight: 15,
    marginTop: 10,
  },
  image: {
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.3,
    height: 230,
    overflow: 'hidden',
  },
  saleContainer: {
    position: 'absolute',
    width: 40,
    height: 24,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
  },
  saleText: {
    color: 'white',
    fontSize: 11,
  },
  favIconContainer: {
    position: 'absolute',
    top: 210,
    left: 135,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginVertical: 8,
    marginRight: 4,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldprice: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  price: {
    color: 'red',
    fontSize: 14,
  },
  newContainer: {
    position: 'absolute',
    width: 40,
    height: 24,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#1E1F28',
  },
  text: {
    color: '#ABB4BD',
    fontFamily: 'Metropolis-Regular',
  },
});

export default ProductItem;
