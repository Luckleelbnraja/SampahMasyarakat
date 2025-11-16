import React from 'react';
import {StyleSheet, View} from 'react-native';

// Import Components
import Header from '../molecules/header/index.js';
import TruckImage from '../../assets/sampah.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        name="User"
        dateTime="Jul 15, 2021 - 11:05 AM"
      />

      <TruckImage
        source={{
          uri: 'sampah.png', // ganti dengan gambar truck sendiri jika perlu
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
});
