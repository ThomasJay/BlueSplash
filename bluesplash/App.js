/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import I18N from './i18n/I18N';

console.log('Language found: ' + I18N('language'));

import Colors from './Colors';

import SplashScreen from './screens/SplashScreen';

const App = () => {
  const [splashMode, setSplashMode] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashMode(false);
    }, 3000);
  });

  if (splashMode) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {color: Colors.black, fontSize: 20, fontWeight: 'bold'},
});

export default App;
