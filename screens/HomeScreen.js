import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/carrot_icon.png')}
          style={styles.headerIcon}
        />
        <View style={styles.locationContainer}>
          <Icon name="location-on" size={20} color="#53B175" />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
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

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/images/banner.png')}
          style={styles.bannerImage}
        />
      </View>

      {/* Exclusive Offer */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate('ProductDetail')}
        >
          <Image
            source={require('../assets/images/banana.jpg')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Organic Bananas</Text>
          <Text style={styles.productWeight}>7pcs, Priceg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate('ProductDetail')}
        >
          <Image
            source={require('../assets/images/apple.png')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Red Apple</Text>
          <Text style={styles.productWeight}>1kg, Priceg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Best Selling */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Selling</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require('../assets/images/strawberry.png')} // Thay bằng ảnh dâu
            style={styles.productImage}
          />
          <Text style={styles.productName}>Strawberry</Text>
          <Text style={styles.productWeight}>1kg, Priceg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require('../assets/images/ginger.png')} // Thay bằng ảnh gừng
            style={styles.productImage}
          />
          <Text style={styles.productName}>Ginger</Text>
          <Text style={styles.productWeight}>1kg, Priceg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Groceries */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <TouchableOpacity style={styles.groceryCard}>
          <Image
            source={require('../assets/images/pulses.png')} // Thay bằng ảnh pulses
            style={styles.groceryImage}
          />
          <Text style={styles.groceryName}>Pulses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.groceryCard}>
          <Image
            source={require('../assets/images/rice.png')} // Thay bằng ảnh rice
            style={styles.groceryImage}
          />
          <Text style={styles.groceryName}>Rice</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require('../assets/images/beef.png')} // Thay bằng ảnh beef
            style={styles.productImage}
          />
          <Text style={styles.productName}>Beef Bone</Text>
          <Text style={styles.productWeight}>1kg, Priceg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require('../assets/images/chicken.png')} // Thay bằng ảnh chicken
            style={styles.productImage}
          />
          <Text style={styles.productName}>Broiler Chicken</Text>
          <Text style={styles.productWeight}>1kg, Priceg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
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
  bannerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAllText: {
    fontSize: 16,
    color: '#53B175',
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    width: 150,
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  productWeight: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  groceryCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    width: 150,
  },
  groceryImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  groceryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
});