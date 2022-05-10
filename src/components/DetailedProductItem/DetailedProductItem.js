import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';
import FavoriteButton from '../Button/FavoriteButton';
import CustomButton from '../Button/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageC from './ImageC';
import CustomBottomSheet from '../CustomBottomSheet/CustomBottomSheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dropdown from '../Dropdowns';

const DetailedProductItem = props => {
  const sheetRef = React.useRef(null);
  const colorRef = React.useRef(null);
  const product = props.product;
  const [selectedSizeOption, setSelectedSizeOption] = useState('Size');
  const [selectedColorOption, setSelectedColorOption] = useState('Color');

  const renderContent = () => (
    <View style={styles.bottomSheetStyle}>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.panelTitle}>Select size</Text>
        </View>
        <View style={styles.panelSizeBoxContainer}>
          {product.size.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedSizeOption(option)}>
              <View style={styles.panelSizeBox}>
                <Text style={styles.text}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.SizeInfoContainer}>
        <Text style={styles.SizeText}>Size info</Text>
        <AntDesign
          name="right"
          size={10}
          color="white"
          style={styles.SizeIcon}
        />
      </View>
      <View style={{marginHorizontal: 15}}>
        <CustomButton text="ADD TO CART" />
      </View>
    </View>
  );
  const renderColorContent = () => (
    <View style={styles.bottomSheetStyle}>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.panelTitle}>Select color</Text>
        </View>
        <View style={styles.panelSizeBoxContainer}>
          {product.colors.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColorOption(option)}>
              <View style={styles.panelSizeBox}>
                <Text style={styles.text}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.SizeInfoContainer}>
        <Text style={styles.SizeText}>Color info</Text>
        <AntDesign
          name="right"
          size={10}
          color="white"
          style={styles.SizeIcon}
        />
      </View>
      <View style={{marginHorizontal: 15}}>
        <CustomButton text="ADD TO CART" />
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      <CustomBottomSheet sheetRef={sheetRef} renderContent={renderContent} />
      <CustomBottomSheet
        sheetRef={colorRef}
        renderContent={renderColorContent}
      />

      <CustomHeader name="share" text={product.category} />
      <ImageC images={product.images} />
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            text={selectedSizeOption}
            onPress={() => sheetRef.current.snapTo(0)}
          />
          <Dropdown
            text={selectedColorOption}
            onPress={() => colorRef.current.snapTo(0)}
          />
          <FavoriteButton />
        </View>
        <View style={styles.BrandAndPrice}>
          <Text style={styles.BrandPriceText}>{product.title}</Text>
          <Text style={styles.BrandPriceText}>${product.price}</Text>
        </View>
        <Text style={styles.Category}>{product.category}</Text>
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${product.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
              size={13}
              color={'#FFBA49'}
            />
          ))}
          <Text style={styles.text}>({product.ratings})</Text>
        </View>
        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>
        <View style={styles.custombutton}>
          <CustomButton
            text="ADD TO CART"
            onPress={() => {
              console.warn('ADD TO CART');
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {backgroundColor: '#1E1F28', height: '100%'},
  container: {
    marginHorizontal: 15,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  dropdown: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
  },
  BrandPriceText: {
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    fontSize: 24,
  },
  PriceText: {
    color: 'white',
  },
  Category: {
    color: '#ABB4BD',
    fontSize: 11,
    fontFamily: 'Metropolis-Regular',
  },
  description: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    letterSpacing: -0.15,
    lineHeight: 21,
  },

  BrandAndPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginVertical: 8,
    marginRight: 4,
  },
  custombutton: {
    marginVertical: 10,
    marginBottom: 100,
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

  panelSizeBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  SizeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    height: 48,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: '#ABB4BD',
  },
  header: {
    marginHorizontal: 15,
  },
  SizeText: {
    color: 'white',
    fontFamily: 'Metropolis-Regular',
    marginLeft: 15,
  },
  SizeIcon: {
    marginRight: 15,
  },
  panelSizeBox: {
    height: 40,
    width: 100,
    borderColor: '#ABB4BD',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 9,
  },
});

export default DetailedProductItem;
