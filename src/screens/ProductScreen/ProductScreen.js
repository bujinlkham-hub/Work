import React from 'react';
import {View, Text} from 'react-native';
import DetailedProductItem from '../../components/DetailedProductItem/DetailedProductItem';
import DATA from '../../assets/images/ProductItemImages/DATA';
import {useRoute} from '@react-navigation/native';

const ProductScreen = props => {
  const route = useRoute();
  const product = DATA.find(item => item.id === route.params.productID);
  console.log(route.params);
  return (
    <View>
      <DetailedProductItem product={product} />
    </View>
  );
};

export default ProductScreen;
