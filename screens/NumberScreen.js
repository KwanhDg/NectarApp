import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const isPhoneNumberValid = phoneNumber.length === 10;

  return (
    <ImageBackground
      source={require('../assets/images/groceries.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.prefix}>🇧🇩 +880</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: isPhoneNumberValid ? '#53B175' : '#ccc' }]}
            onPress={() => isPhoneNumberValid && navigation.navigate('Verification')}
            disabled={!isPhoneNumberValid}
          >
            <Icon name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  prefix: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#53B175',
    borderRadius: 25,
  },
});
