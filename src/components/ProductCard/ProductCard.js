import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DATA from '../../assets/images/ProductItemImages/DATA';
import ProductItem from '.';
import CustomHeader from '../CustomHeader';
import CustomSort from '../CustomFilter/CustomSort';
import CustomBottomSheet from '../CustomBottomSheet/CustomBottomSheet';

const ProductCard = props => {
  const navigation = useNavigation();
  const Sorts = [
    'Popular',
    'Newest',
    'Customer review',
    'Price: lowest to high',
    'Price: highest to low',
  ];
  const [selectedSort, setSelectedSort] = useState('Sort');

  const onPriceFilterPressed = () => {
    ref.current.snapTo(0);
  };
  const ref = useRef();
  const renderContent = () => (
    <View style={styles.bottomSheetStyle}>
      <View>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.panelTitle}>Sort by</Text>
        </View>

        {Sorts.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedSort(option)}>
            <View style={styles.boxcontainer}>
              <Text style={styles.bottomsheetText}>{option}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <CustomHeader text="New" name="search" />
      <CustomBottomSheet sheetRef={ref} renderContent={renderContent} />
      <View style={styles.root}>
        <CustomSort
          onPriceFilterPressed={onPriceFilterPressed}
          selectedSort={selectedSort}
          onFilterPressed={() => navigation.navigate('CustomFilter')}
        />
        <View>
          <View style={styles.categoryContainer}>
            <FlatList
              data={DATA}
              numColumns={2}
              renderItem={({item}) => <ProductItem product={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={{marginBottom: -200}}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },

  root: {
    marginHorizontal: 15,
  },
  bottomSheetStyle: {
    backgroundColor: '#1E1F28',
    height: 450,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#ABB4BD',
    marginBottom: 10,
    marginTop: 15,
  },
  panelTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Metropolis-Bold',
    marginTop: 5,
    marginBottom: 10,
  },
  header: {
    marginHorizontal: 15,
  },
  boxcontainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    /*  backgroundColor: '#EF3651', */
  },
  bottomsheetText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Metropolis-regular',
    marginLeft: 15,
  },
});

export default ProductCard;
