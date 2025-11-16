import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Freepik} from '../../assets';

const OrderSuccess = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Order Selesai</Text>
        <Text style={styles.subtitle}>Mohon tunggu sesuai jadwal</Text>

        <View style={styles.imageBox}>
          <Image source={Freepik} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.successText}>Terima Kasih Sudah</Text>
          <Text style={styles.successText}>Menggunakan Jasa Kami</Text>
        </View>

        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>SELESAI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    marginBottom: 28,
  },
  imageBox: {
    width: 160,
    height: 160,
    marginVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  successText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#22A05A',
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonWrap: {
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    width: '85%',
    height: 48,
    backgroundColor: '#22A05A',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 14,
  },
});