import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BottomNavProps {
  onHomePress?: (event: GestureResponderEvent) => void;
  onProfilePress?: (event: GestureResponderEvent) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  onHomePress,
  onProfilePress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={onHomePress}>
        <Icon name="home-outline" size={28} color="#7F7F7F" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={onProfilePress}>
        <Icon name="person-outline" size={28} color="#25B66E" />
        <Text style={[styles.label, { color: '#25B66E' }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#EEF3FF',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    marginTop: 3,
    color: '#7F7F7F',
  },
});
