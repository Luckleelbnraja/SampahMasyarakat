import { Image, View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const SplashSatu = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SplashDua'); // otomatis pindah ke SplashDua
    }, 1000); // 1 detik
    return () => clearTimeout(timer); // bersihkan timer kalau halaman di-unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/sampah.png')} style={styles.logo} />
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
