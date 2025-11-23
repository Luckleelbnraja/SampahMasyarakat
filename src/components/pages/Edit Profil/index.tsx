import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function EditProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* ======== HEADER BACK BUTTON ======== */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* ======== AVATAR ======== */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'file:///mnt/data/da3c8283-4b67-443f-8484-201e2fb4d919.png',
          }}
          style={styles.avatar}
        />

        {/* Edit photo button */}
        <TouchableOpacity style={styles.editIconWrapper}>
          <Text style={styles.editIcon}>✏️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Edit Profile</Text>

      {/* ======== INPUT NAME ======== */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* ======== INPUT EMAIL ======== */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* ======== INPUT PHONE NUMBER ======== */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>PHONE NUMBER</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* ======== LOCATION DROPDOWN (dummy) ======== */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>LOCATION</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => alert('Dropdown belum dihubungkan')}>
          <Text style={{color: location ? '#000' : '#999'}}>
            {location || 'Select location'}
          </Text>
          <Text style={styles.dropdownArrow}>⌄</Text>
        </TouchableOpacity>
      </View>

      {/* ======== SAVE BUTTON ======== */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => alert('Changes Saved!')}>
        <Text style={styles.saveText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backButton: {
    marginTop: 20,
    marginLeft: 15,
  },

  backArrow: {
    fontSize: 26,
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  editIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 135,
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 20,
    elevation: 3,
  },

  editIcon: {
    fontSize: 18,
  },

  inputBox: {
    marginHorizontal: 20,
    marginBottom: 15,
  },

  label: {
    fontSize: 12,
    color: '#777',
    marginBottom: 5,
  },

  textInput: {
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },

  dropdown: {
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdownArrow: {
    fontSize: 20,
    opacity: 0.6,
  },

  saveButton: {
    backgroundColor: '#32CD32',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 40,
  },

  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
