import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Skip = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Skip</Text>
    </TouchableOpacity>
  );
};

export default Skip;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#02CF8E',
    fontWeight: '600',
  },
});
