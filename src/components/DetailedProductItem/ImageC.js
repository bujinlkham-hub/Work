import React from 'react';
import {View, Image, FlatList, StyleSheet, Dimensions} from 'react-native';

const ImageC = ({images}) => {
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => <Image source={item} style={styles.image} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').width}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 400,
    resizeMode: 'contain',
  },
});

export default ImageC;
