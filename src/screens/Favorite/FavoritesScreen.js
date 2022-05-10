import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const FavoritesScreen = () => {
  return (
    <View style={styles.root}>
      <CustomHeader text="Favorites" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1F28',
    height: '100%',
  },
});

export default FavoritesScreen;
