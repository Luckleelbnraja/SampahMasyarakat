import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

export default function ProfileScreen() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'file:///mnt/data/e3e2d6cb-70d4-4387-a304-e7f0e3ed1c8f.png',
          }}
          style={styles.avatar}
        />

        <View style={styles.info}>
          <Text style={styles.name}>alun seran</Text>
          <Text style={styles.email}>alunseran@gmail.com</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.edit}>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* MENU ALAMAT */}
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Alamat Saya</Text>
      </TouchableOpacity>

      {/* SIGN OUT BUTTON */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setShowLogout(true)}>
        <Text style={styles.menuText}>Sign out</Text>
      </TouchableOpacity>

      {/* POP-UP LOGOUT CONFIRMATION */}
      <Modal transparent visible={showLogout} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Anda Yakin ingin keluar?</Text>

            <View style={styles.buttonRow}>
              {/* YES BUTTON */}
              <TouchableOpacity
                style={styles.yesButton}
                onPress={() => alert('Logged out!')}>
                <Text style={styles.buttonText}>YES</Text>
              </TouchableOpacity>

              {/* NO BUTTON */}
              <TouchableOpacity
                style={styles.noButton}
                onPress={() => setShowLogout(false)}>
                <Text style={styles.buttonText}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  header: {
    backgroundColor: '#32CD32',
    paddingVertical: 35,
    paddingHorizontal: 20,
  },

  headerTitle: {color: '#fff', fontSize: 20, fontWeight: 'bold'},

  card: {
    marginTop: -30,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },

  avatar: {width: 55, height: 55, borderRadius: 30},

  info: {flex: 1, marginLeft: 10},

  name: {fontSize: 16, fontWeight: 'bold'},

  email: {color: '#777'},

  edit: {fontSize: 18, opacity: 0.6},

  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  menuText: {fontSize: 16},

  /* ------- POP-UP MODAL ------- */
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  modalBox: {
    backgroundColor: '#32CD32',
    width: '75%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  buttonRow: {flexDirection: 'row'},

  yesButton: {
    backgroundColor: '#0e8f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },

  noButton: {
    backgroundColor: '#0e8f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
