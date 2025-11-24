import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// Import Components
import Header from '../molecules/header/index';
import Button from '../atoms/button';

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        name="User"
        dateTime="Jul 15, 2021 - 11:05 AM"
      />

      <Image
        source={require('../../assets/truk.png')}
        style={styles.truckImage}
      />

      {/* Button Jadwal Penjemputan */}
      <View style={styles.buttonWrapper}>
        <Button 
          label="JADWAL PENJEMPUTAN" 
          onPress={() => navigation.navigate('JadwalSampah')} 
        />
      </View>

      {/* Button Jenis Sampah */}
      <View style={styles.smallButtonWrapper}>
        <Button 
          label="JENIS SAMPAH" 
          onPress={() => navigation.navigate('JenisSampah')} 
        />
      </View>
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
  truckImage: {
    width: 329,
    height: 186,
    marginTop: 63,
  },
  buttonWrapper: {
    width: 325,
    height: 150,
    marginTop: 72,
  },
  smallButtonWrapper: {
    width: 250,
    marginTop: 69,
  },
});
