import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/button';
import Gap from '../../components/atoms/gap';

const SignIn = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.backButton} onPress={() => {}}>
        <Image
         source={require('../../assets/Vector.png')}  // ganti dengan icon kamu
         style={styles.backIcon}
        />
     </TouchableOpacity>

      {/* IMAGE HEADER */}
      <Image
        source={require('../../assets/truck.png')} // ganti sesuai nama assets kamu
        style={styles.headerImage}
      />

      {/* TITLE */}
      <Text style={styles.title}>Sign Up</Text>

      {/* FORM */}
      <View style={styles.formWrapper}>
         <TextInput
          label="Full Name"
          placeholder="Type your email address"
        />
        <Gap height={16} />

        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />

        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
        />
        <Gap height={24} />

        <Button label="SIGN IN" />
        <Gap height={12} />
      </View>

    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89E989', // warna hijau background
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    color: '#020202',
  },

  formWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 28,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
