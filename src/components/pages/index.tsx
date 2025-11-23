import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

// Komponen utama untuk halaman Profile
export default function ProfileScreen() {
  return (
    // Container utama yang membungkus seluruh tampilan
    <View style={styles.container}>
      {/* ================== HEADER ================== */}
      <View style={styles.header}>
        {/* Judul header */}
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* ================== CARD PROFILE ================== */}
      <View style={styles.card}>
        {/* Foto Profil */}
        <Image
          source={{
            uri: 'file:///mnt/data/dd3f24a1-8696-4ea3-91ba-058f6f95dce1.png',
          }}
          style={styles.avatar}
        />

        {/* Nama & Email Pengguna */}
        <View style={styles.info}>
          <Text style={styles.name}>Alun Seran</Text>
          <Text style={styles.email}>alunseran24@gmail.com</Text>
        </View>

        {/* Tombol Edit Profile */}
        <TouchableOpacity>
          <Text style={styles.edit}>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* ================== MENU ALAMAT ================== */}
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Alamat Saya</Text>
      </TouchableOpacity>

      {/* ================== MENU SIGN OUT ================== */}
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container utama seluruh halaman
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header hijau bagian atas
  header: {
    backgroundColor: '#32CD32',
    paddingVertical: 35,
    paddingHorizontal: 20,
  },

  // Teks "My Profile"
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Card putih berisi foto, nama, email, tombol edit
  card: {
    marginTop: -30, // Membuat card naik sedikit menimpa header
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row', // Isi card tersusun horizontal
    alignItems: 'center',
    shadowColor: '#000', // Efek shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  // Foto Profil
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30, // Membuat foto bulat
  },

  // Wrapper untuk nama & email
  info: {
    flex: 1,
    marginLeft: 10,
  },

  // Nama pengguna
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Email pengguna
  email: {
    color: '#777',
  },

  // Ikon edit
  edit: {
    fontSize: 18,
    opacity: 0.6,
  },

  // Item menu seperti “Alamat Saya” & “Sign out”
  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  // Teks dalam menu
  menuText: {
    fontSize: 16,
  },
});
