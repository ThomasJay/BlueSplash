import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  PixelRatio,
} from 'react-native';

import LoginRegister from '../components/LoginRegister';
/**
* @author
* @function OnboardingScreen

**/
const OnboardingScreen = props => {
  const {width, height} = Dimensions.get('window');
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            setSliderPage(event);
          }}>
          <View style={{width, height}}>
            <Image
              source={require('../assets/images/medical-1.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Smartest Doctors</Text>
              <Text style={styles.paragraph}>....that you can afford</Text>
            </View>
          </View>
          <View style={{width, height}}>
            <Image
              source={require('../assets/images/medical-2.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Microscopic</Text>
              <Text style={styles.paragraph}>....we look everywhere</Text>
            </View>
          </View>
          <View style={{width, height}}>
            <Image
              source={require('../assets/images/medical-3.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Graphing your life</Text>
              <Text style={styles.paragraph}>
                ....blips tell a lot about you
              </Text>
            </View>
          </View>
          <View style={{width, height}}>
            <Image
              source={require('../assets/images/medical-4.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Color Pills</Text>
              <Text style={styles.paragraph}>
                ....we have pills for everyone
              </Text>
            </View>
          </View>
          <View style={{width, height}}>
            <Image
              source={require('../assets/images/medical-5.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Look at this</Text>
              <Text style={styles.paragraph}>
                ....some one broke their neck
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {opacity: pageIndex === index ? 1 : 0.2},
              ]}
              key={index}
            />
          ))}
        </View>
        <LoginRegister />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(145),
    width: '90%',
    marginLeft: '5%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'white',
    marginLeft: 10,
  },
});
export default OnboardingScreen;
