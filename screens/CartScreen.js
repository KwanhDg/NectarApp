import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { productsData } from '../data';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      let parsedCart = cartData ? JSON.parse(cartData) : [];
      // Ánh xạ image từ productsData
      parsedCart = parsedCart.map((item) => {
        const product = productsData.find((p) => p.name === item.name);
        return { ...item, image: product ? product.image : null };
      });
      console.log('CartScreen - Loaded cart:', parsedCart);
      setCartItems(parsedCart);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadCart();
    }, [])
  );

  const increaseQuantity = async (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    // Lưu lại mà không có image
    const cartToSave = updatedCart.map(({ image, ...rest }) => rest);
    await AsyncStorage.setItem('cart', JSON.stringify(cartToSave));
    console.log('Updated cart (increase):', cartToSave);
  };

  const decreaseQuantity = async (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === item.name && (cartItem.quantity || 1) > 1
        ? { ...cartItem, quantity: (cartItem.quantity || 1) - 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    const cartToSave = updatedCart.map(({ image, ...rest }) => rest);
    await AsyncStorage.setItem('cart', JSON.stringify(cartToSave));
    console.log('Updated cart (decrease):', cartToSave);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemWeight}>{item.weight}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item)}>
            <Icon name="remove" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity || 1}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item)}>
            <Icon name="add" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemPrice}>${(item.price * (item.quantity || 1)).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>My Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.listContainer}
          />
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Go to Checkout</Text>
            <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
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
  cartItem: {
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#53B175',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 20,
  },
});

export default CartScreen;