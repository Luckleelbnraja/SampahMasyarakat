import React from 'react';
import {StyleSheet, View} from 'react-native';

// Import Components
import Header from '../molecules/header/index';
import TruckImage from '../../assets/sampah.png';

const Homepage = () => {
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

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
});
