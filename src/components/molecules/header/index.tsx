import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({name = "User", dateTime}) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatar} />

      <View style={{marginLeft: 12}}>
        <Text style={styles.haloText}>Halo, {name}</Text>
        <Text style={styles.dateText}>{dateTime}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 40,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  haloText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#32A852',
    marginBottom: 3,
  },
  dateText: {
    color: '#8E8E8E',
    fontSize: 12,
  },
});
