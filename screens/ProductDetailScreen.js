import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProductDetailScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="favorite-border" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <Image
          source={require('../assets/images/apple.png')}
          style={styles.productImage}
          resizeMode='contain'
        />

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Natural Red Apple</Text>
          <Text style={styles.productWeight}>1kg, Price</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <Icon name="remove" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Icon name="add" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.productPrice}>${4.99 * quantity}</Text>
          </View>
        </View>

        {/* Product Details */}
        <TouchableOpacity style={styles.detailSection}>
          <Text style={styles.detailTitle}>Product Detail</Text>
          <Icon name="keyboard-arrow-down" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.detailText}>
          Apples May Be Good for Weight Loss. Apples Are Good for Your Heart. As Part of a Healthful and Varied Diet.
        </Text>

        {/* Nutrition */}
        <TouchableOpacity style={styles.detailSection}>
          <Text style={styles.detailTitle}>Nutritions</Text>
          <Icon name="keyboard-arrow-down" size={24} color="#000" />
        </TouchableOpacity>

        {/* Review */}
        <TouchableOpacity style={styles.detailSection}>
          <Text style={styles.detailTitle}>Review</Text>
          <View style={styles.reviewStars}>
            <Icon name="star" size={20} color="#FFD700" />
            <Icon name="star" size={20} color="#FFD700" />
            <Icon name="star" size={20} color="#FFD700" />
            <Icon name="star" size={20} color="#FFD700" />
            <Icon name="star" size={20} color="#FFD700" />
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Add to Basket Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
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
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  productWeight: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  detailSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  addButton: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});