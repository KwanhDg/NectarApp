import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker'; // Thêm import Picker

export default function SelectLocationScreen({ navigation }) {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('Types of your area');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('userLocation', JSON.stringify({ zone, area }));
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

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
        <View style={styles.container}>
          <Image
            source={require('../assets/images/location_icon.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subtitle}>
            Switch on your location to stay in tune with what’s happening in your area
          </Text>
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={zone}
              onValueChange={(itemValue) => setZone(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Banasree" value="Banasree" />
              <Picker.Item label="Other Zone" value="Other Zone" />
            </Picker>
          </View>
          <Text style={styles.label}>Your Area</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={area}
              onValueChange={(itemValue) => setArea(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Types of your area" value="Types of your area" />
              <Picker.Item label="Other Area" value="Other Area" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    marginTop: 150,
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
  },
  submitButton: {
    backgroundColor: '#53B175',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});