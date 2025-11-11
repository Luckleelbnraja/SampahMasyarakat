import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = '#28E517', textColor = '#FFFFFF'}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
      <Text style={styles.text(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    borderRadius: 50,
  }),
  text: textColor => ({
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    color: textColor,
  }),
});