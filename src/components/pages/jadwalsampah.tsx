import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


// Contoh data jadwal
const schedules = [
  {
    id: 1,
    title: 'SAMPAH ELEKTRONIK',
    time: 'JAM 14:00 - 16:00 WITA',
    address: 'Jl. Arnold Mononutu, Airmadidi bawah, Minahasa',
    icon: require('../../assets/elektronik.png'),
  },
  {
    id: 2,
    title: 'SAMPAH ORGANIK',
    time: 'JAM 05:00 - 10:00 WITA',
    address: 'Jl. Arnold Mononutu, Airmadidi bawah, Minahasa',
    icon: require('../../assets/organik.png'),
  },
  {
    id: 3,
    title: 'SAMPAH PLASTIK',
    time: 'JAM 14:00 - 16:00 WITA',
    address: 'Jl. Arnold Mononutu, Airmadidi bawah, Minahasa',
    icon: require('../../assets/plastik.png'),
  },
];

const ScheduleScreen = () => {
  

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 20 }}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Jadwal jemput sampah</Text>

      {/* Hari */}
      <View style={styles.dayRow}>
        {['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((day, i) => (
          <Text key={i} style={styles.dayText}>{day}</Text>
        ))}
      </View>

      {/* List Jadwal */}
      <ScrollView style={{ width: '100%' }}>
        {schedules.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.icon} style={styles.icon} />

            <View style={styles.textWrapper}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.category}>{item.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  backBtn: {
    marginTop: 35,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38B349',
    marginTop: 20,
    marginBottom: 20,
  },

  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  dayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2FA63F',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 0.7,
    borderColor: '#ddd',
    marginBottom: 10,
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#C6F5C8',
  },

  textWrapper: {
    marginLeft: 15,
    flex: 1,
  },

  time: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },

  address: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },

  category: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1C9C3A',
  },
});
