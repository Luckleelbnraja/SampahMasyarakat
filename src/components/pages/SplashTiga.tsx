import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Container, Skip } from '../../components/molecules';
import { Button, Gap } from '../../components/atoms';

const SplashTiga = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Skip onPress={() => {}} />
      </View>

      <Gap height={50} />
      <View style={styles.centerContent}>
        <Container
          image={require('../../assets/truck.png')}
          title="Daur ulang dalam satu sentuhan!"
          subtitle="Gunakan aplikasi ini untuk menemukan lokasi drop-off atau layanan penjemputan sampah daur ulang di sekitarmu."
          activeIndex={1}
        />
      </View>
      <Button label="NEXT" />
      <Gap height={49} />
    </View>
  );
};

export default SplashTiga;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  centerContent: {
    flex: 1,
    justifyContent: 'center',
  },
});
