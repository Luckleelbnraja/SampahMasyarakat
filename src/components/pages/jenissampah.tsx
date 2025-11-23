import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const trashOptions = [
  {
    id: 'plastik',
    label: 'SAMPAH PLASTIK',
    icon: require('../../assets/plastik.png'),
  },
  {
    id: 'elektronik',
    label: 'SAMPAH ELEKTRONIK',
    icon: require('../../assets/elektronik.png'),
  },
  {
    id: 'organik',
    label: 'SAMPAH ORGANIK',
    icon: require('../../assets/organik.png'),
  },
];

const ChooseTrashScreen: React.FC = () => {
  
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      navigation.navigate('ScheduleScreen' as never, { trashType: selected } as never);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Pilih{'\n'}Jenis Sampah</Text>

      {/* Trash Options */}
      <View style={styles.grid}>
        {trashOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.card,
              selected === item.id ? styles.cardSelected : null,
            ]}
            onPress={() => setSelected(item.id)}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Button Lanjut */}
      <TouchableOpacity
        style={[styles.buttonNext, !selected && { opacity: 0.5 }]}
        onPress={handleNext}
        disabled={!selected}
      >
        <Text style={styles.buttonText}>LANJUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseTrashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  backBtn: {
    width: '100%',
    marginTop: 35,
  },
  backText: {
    fontSize: 26,
  },

  title: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#42B758',
    textAlign: 'center',
    lineHeight: 32,
  },

  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 50,
  },

  card: {
    width: 150,
    height: 120,
    backgroundColor: '#98E6A0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  cardSelected: {
    backgroundColor: '#22A540',
    borderWidth: 3,
    borderColor: '#C6F5C8',
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#006D2F',
    textAlign: 'center',
  },

  buttonNext: {
    marginTop: 15,
    width: 300,
    height: 60,
    backgroundColor: '#06A64D',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
