import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Gap from '../../atoms/gap';

const Container = ({ image, title, subtitle, activeIndex = 0 }) => {
  // jumlah dot fix 3 sesuai design
  const totalDots = 3;

  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Image source={image} style={styles.image} />

      {/* TITLE */}
      <Text style={styles.title}>{title}</Text>

      <Gap height={20} />

      {/* SUBTITLE */}
      <Text style={styles.subtitle}>{subtitle}</Text>

      <Gap height={28} />

      {/* DOTS */}
      <View style={styles.dotsRow}>
        {Array.from({ length: totalDots }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  image: {
    width: '85%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#11AD11',
    textAlign: 'center',
    marginTop: 50,
  },

  subtitle: {
    marginTop: 15,
    fontSize: 16,
    color: '#6E6E6E',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 12,
  },

  dotsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: '#11AD11',
    width: 22,
    borderRadius: 5,
  },
});
