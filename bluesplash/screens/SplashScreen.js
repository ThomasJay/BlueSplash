import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

/**
* @author
* @function SplashScreen

**/
const SplashScreen = props => {
  return (
    <View style={styles.screenContainer}>
      <Image source={require('../assets/splash_me.png')} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Blue Splash</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {position: 'absolute', bottom: 50},
  footerText: {fontSize: 20, fontWeight: 'bold'},
});
export default SplashScreen;
