import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#666"
        />
      </View>

      {/* Categories */}
      <ScrollView>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/images/vegetables.png')} // Thay bằng ảnh rau củ
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Fresh Fruits & Vegetable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/images/oil.png')} // Thay bằng ảnh dầu ăn
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Cooking Oil & Ghee</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/images/meat.png')} // Thay bằng ảnh thịt
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Meat & Fish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/images/snacks.png')} // Thay bằng ảnh đồ ăn vặt
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Bakery & Snacks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/images/dairy.png')} // Thay bằng ảnh sữa
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Dairy & Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Beverages')}
          >
            <Image
              source={require('../assets/images/beverages.png')} // Thay bằng ảnh đồ uống
              style={styles.categoryImage}
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
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    margin: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
});