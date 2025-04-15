import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BeveragesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productRow}>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/images/diet_coke.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>Diet Coke</Text>
            <Text style={styles.productWeight}>355ml, Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$1.99</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/images/sprite.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>Sprite Can</Text>
            <Text style={styles.productWeight}>325ml, Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$1.50</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productRow}>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/images/apple_juice.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>Apple & Grape Juice</Text>
            <Text style={styles.productWeight}>2L, Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$15.99</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/images/orange_juice.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>Orange Juice</Text>
            <Text style={styles.productWeight}>2L, Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$15.99</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productRow}>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/images/coca_cola.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>Coca Cola Can</Text>
            <Text style={styles.productWeight}>325ml, Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$4.99</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/images/pepsi.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>Pepsi Can</Text>
            <Text style={styles.productWeight}>325ml, Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>$4.99</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1, 
  },
  scrollContent: {
    paddingBottom: 20,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    padding: 10,
    width: '48%',
    minHeight: 200,
    alignItems: 'center', 
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center', 
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    textAlign: 'left', 
    alignSelf: 'flex-start', 
  },
  productWeight: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
    textAlign: 'left', 
    alignSelf: 'flex-start', 
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20, 
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#53B175',
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});