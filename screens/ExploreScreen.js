import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#666"
        />
      </View>

      {/* Categories */}
      <ScrollView>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#F4F7F3' }]}>
            <Image
              source={require('../assets/images/vegetables.png')}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryName}>Fresh Fruits & Vegetable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFF9EC' }]}>
            <Image
              source={require('../assets/images/oil.png')}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryName}>Cooking Oil & Ghee</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FDEEEE' }]}>
            <Image
              source={require('../assets/images/meat.png')}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryName}>Meat & Fish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#F6F1F6' }]}>
            <Image
              source={require('../assets/images/snacks.png')}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryName}>Bakery & Snacks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#F5FAFE' }]}>
            <Image
              source={require('../assets/images/dairy.png')}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryName}>Dairy & Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#EBF9F5' }]}
            onPress={() => navigation.navigate('Beverages')}
          >
            <Image
              source={require('../assets/images/beverages.png')}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryName}>Beverages</Text>
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
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  categoryCard: {
    borderRadius: 15,
    padding: 15,
    width: '48%',
    alignItems: 'center',
  },
  categoryImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
});