import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const BantuanScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      
      {/* Tombol Back */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 20 }}>‹</Text>
        </TouchableOpacity>

      {/* Judul */}
      <Text style={styles.title}>Bantuan</Text>

      {/* Card Masalah Verifikasi */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Masalah Verifikasi</Text>
        <Text style={styles.cardDesc}>
          Periksa koneksi internet anda dan coba lagi
        </Text>
      </View>

      {/* Tombol FAQ */}
      <TouchableOpacity style={styles.faqButton}>
        <Text style={styles.faqText}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BantuanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  backBtn: {
    marginTop: 35,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#27AE60',
    alignSelf: 'center',
    marginTop: 10,
  },

  card: {
    backgroundColor: '#EEF1EF',
    borderRadius: 20,
    padding: 20,
    marginTop: 40,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27AE60',
    marginBottom: 10,
  },

  cardDesc: {
    fontSize: 16,
    color: '#27AE60',
  },

  faqButton: {
    backgroundColor: '#12A84F',
    paddingVertical: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140,
  },

  faqText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
