import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Gap from '../../components/atoms/gap';
import Button from '../../components/atoms/button';

const SplashDua = () => {
  return (
    <View style={styles.container}>

      {/* SKIP TOP RIGHT */}
      <View style={styles.skipWrapper}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
          <Ionicons name=" " source={require('../../assets/truck.png')} size={16} color="#02CF8E" />
        </TouchableOpacity>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Image
          source={require('../../assets/truck.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Gap height={24} />
        <Text style={styles.title}>Pilah sampah dengan mudah</Text>
        <Gap height={8} />

        <Text style={styles.subtitle}>
          Mulai kebiasaan baik dengan memilah sampah organik dan anorganik dari rumahmu.
        </Text>

        <Gap height={24} />

        {/* DOT INDICATOR */}
        <View style={styles.dotWrapper}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* NEXT BUTTON */}
      <View style={styles.nextWrapper}>
        <Button label="NEXT" />
      </View>

    </View>
  );
};

export default SplashDua;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* SKIP */
  skipWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 35.4,
    marginTop: 5.8,
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    color: '#02CF8E',
    fontSize: 16,
    marginRight: 4,
  },

  /* CONTENT */
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 448,
    height: 298,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#02CF8E',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#6E6E6E',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  /* DOTS */
  dotWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D6D6D6',
  },
  dotActive: {
    width: 20,
    backgroundColor: '#02CF8E',
  },

  /* NEXT BUTTON */
  nextWrapper: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
});
