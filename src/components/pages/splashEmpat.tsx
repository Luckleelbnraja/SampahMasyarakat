import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Container, Skip } from '../../components/molecules';
import { Button, Gap } from '../../components/atoms';

const SplashTiga = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Skip onPress={() => navigation.replace('SignIn')} />
      </View>

      <Gap height={50} />
      <View style={styles.centerContent}>
        <Container
          image={require('../../assets/truck.png')}
          title="Bantu bumi jadi lebih bersih"
          subtitle="Setiap aksi kecilmu berkontribusi besar untuk lingkungan yang lebih sehat dan berkelanjutan."
          activeIndex={2}
        />
      </View>

      <Button
        label="NEXT"
        onPress={() => navigation.replace('SignIn')}
        style={styles.nextButton}
      />
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

  nextButton: {
    marginHorizontal: 30,
    width: 'auto',
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
});
