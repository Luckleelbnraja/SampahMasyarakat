import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/button';
import Gap from '../../components/atoms/gap';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/Vector.png')}  // icon back
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Image
        source={require('../../assets/truck.png')} // header image
        style={styles.headerImage}
      />
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.formWrapper}>
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

        <Button
          label="SIGN IN"
          onPress={() => navigation.replace('homepage')}
        />
        <Gap height={12} />

        <Button
          label="SIGN UP"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.replace('signUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89E989',
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
