import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const AddAddressScreen: React.FC = () => {
  const [useLocation, setUseLocation] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      {/* ================== MAP IMAGE ================== */}
      <Image
        source={{
          uri: 'file:///mnt/data/85e0dc70-1884-490e-89e3-6bb80623366e.png',
        }}
        style={styles.map}
      />

      {/* ================== TITLE ================== */}
      <Text style={styles.title}>Masukkan Alamat</Text>

      {/* ================== INPUT KETERANGAN ================== */}
      <TextInput
        placeholder="Keterangan"
        placeholderTextColor="#999"
        style={styles.input}
      />

      {/* ================== INPUT ALAMAT ================== */}
      <TextInput
        placeholder="Alamat"
        placeholderTextColor="#999"
        style={styles.input}
      />

      {/* ================== USE CURRENT LOCATION ================== */}
      <View style={styles.row}>
        <Switch
          value={useLocation}
          onValueChange={setUseLocation}
          thumbColor={useLocation ? '#32CD32' : '#fff'}
          trackColor={{true: '#71e971', false: '#ccc'}}
        />
        <Text style={styles.switchText}>Use current location</Text>
      </View>

      {/* ================== BUTTON SIMPAN ================== */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>SIMPAN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  map: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 20,
  },

  switchText: {
    marginLeft: 10,
    fontSize: 15,
  },

  saveButton: {
    backgroundColor: '#32CD32',
    marginTop: 25,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },

  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
