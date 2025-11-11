import {Image, View, StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../../assets/sampah.png';

const SplashSatu = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default SplashSatu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24D339',
  },
  logo: {
    width: 200,
    height: 263,
    resizeMode: 'contain',
  },
});
