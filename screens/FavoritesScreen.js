import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { productsData } from '../data';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      let parsedFavorites = favoritesData ? JSON.parse(favoritesData) : [];
      // Ánh xạ image từ productsData
      parsedFavorites = parsedFavorites.map((item) => {
        const product = productsData.find((p) => p.name === item.name);
        return { ...item, image: product ? product.image : null };
      });
      console.log('FavoritesScreen - Loaded favorites:', parsedFavorites);
      setFavorites(parsedFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const addToCart = async (item) => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      let cart = cartData ? JSON.parse(cartData) : [];
      const existingItem = cart.find((cartItem) => cartItem.name === item.name);
      const itemToSave = { ...item, image: undefined }; // Bỏ image
      if (existingItem) {
        cart = cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        cart.push({ ...itemToSave, quantity: 1 });
      }
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      console.log('FavoritesScreen - Updated cart:', cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const addAllToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      let cart = cartData ? JSON.parse(cartData) : [];
      favorites.forEach((item) => {
        const existingItem = cart.find((cartItem) => cartItem.name === item.name);
        const itemToSave = { ...item, image: undefined }; // Bỏ image
        if (existingItem) {
          cart = cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
              : cartItem
          );
        } else {
          cart.push({ ...itemToSave, quantity: 1 });
        }
      });
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      console.log('FavoritesScreen - Added all to cart:', cart);
    } catch (error) {
      console.error('Error adding all to cart:', error);
    }
  };

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemWeight}>{item.weight}</Text>
      </View>
      <View style={styles.itemActions}>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>Your favorites list is empty</Text>
      ) : (
        <>
          <FlatList
            data={favorites}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.listContainer}
          />
          <TouchableOpacity style={styles.addAllButton} onPress={addAllToCart}>
            <Text style={styles.addAllText}>ADD ALL TO CART</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemWeight: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addAllButton: {
    backgroundColor: '#53B175',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  addAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FavoritesScreen;