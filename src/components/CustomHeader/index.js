import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ArrowIcon from '../Button/ArrowIcon';
import SearchButton from '../Button/SearchButton';
import {useNavigation} from '@react-navigation/native';
const CustomHeader = ({text, name}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <ArrowIcon onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{text}</Text>
        <SearchButton name={name} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1F28',
  },
  header: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    fontSize: 18,
  },
});

export default CustomHeader;
