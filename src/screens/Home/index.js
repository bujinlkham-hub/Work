import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import styles from './styles';
import imageBG from '../../assets/images/pexels-photo.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DATA from '../../assets/images/ProductItemImages/DATA';
import {FlatList} from 'react-native-gesture-handler';
import FavoriteButton from '../../components/Button/FavoriteButton';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = props => {
  const navigation = useNavigation();
  const onFavButtonPressed = () => {
    console.warn('onFavButtonPressed');
  };
  const onViewAllPressed = () => {
    navigation.navigate('ProductCard');
  };
  const onProductItemPressed = () => {
    console.warn('onProductItemPressed');
  };

  function Product() {
    const {id} = useParams();
    const url = 'http://localhost/api/getProdList';
    const [product, setProduct] = useState(null);

    useEffect(() => {
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          setProduct(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [id]);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={imageBG} style={styles.bgImage} />
        <Text style={styles.title}>20% OFF</Text>
      </View>
      <View style={styles.root}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Шsинэ бараа</Text>
          <Text style={styles.subtitleText} onPress={onViewAllPressed}>
            Бүгдийг харах
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}></Text>
        </View>
        {/* <FlatList
          data={product}
          renderItem={({item}) => (
            <Pressable style={styles.productContainer}>
              <View style={styles.productImage}>
                <Image
                  source={product.image_name}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.newContainer}>
                  <Text style={styles.saleText}>Шинэ</Text>
                </View>
                <View style={styles.favIconContainer}>
                  <FavoriteButton onPress={onFavButtonPressed} />
                </View>
              </View>
              <View style={styles.ratingsContainer}>
                {[0, 0, 0, 0, 0].map((el, i) => (
                  <FontAwesome
                    key={`${item.id}-${i}`}
                    style={styles.star}
                    name={i < Math.floor(product.discount) ? 'star' : 'star-o'}
                    size={13}
                    color={'#FFBA49'}
                  />
                ))}
                <Text style={styles.text}>({item.ratings})</Text>
              </View>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.categoryTitle}>{item.category}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.oldprice}>{item.oldPrice}$</Text>
                <Text style={styles.price}> {item.price}$</Text>
              </View>
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
