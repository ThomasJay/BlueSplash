import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import RoundedButton from '../components/RoundedButton';

/**
* @author
* @function LoginRegister

**/
const LoginRegister = props => {
  return (
    <View style={styles.componentContainer}>
      <RoundedButton
        inputStyles={{marginTop: 20}}
        textValue="Login"
        onPress={() => {}}
        color="green"
      />
      <RoundedButton
        inputStyles={{marginTop: 20}}
        textValue="Register"
        onPress={() => {}}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: '80%',
    marginHorizontal: '10%',
    paddingBottom: '10%',
  },
});
export default LoginRegister;
