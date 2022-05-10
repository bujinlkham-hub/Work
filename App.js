import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import LoginScreenNav from './src/navigation/LoginScreenNav';
import Router from './src/navigation/router';

const App = () => {
  return (
    <View style={styles.contianer}>
      <LoginScreenNav />
      <StatusBar barStyle="light-content" hidden={false} />
    </View>
  );
};
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#1E1F28',
  },
});

export default App;
