import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { productsData } from '../data'; // Nhập dữ liệu sản phẩm

export default function ExploreScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Lọc sản phẩm dựa trên tìm kiếm và bộ lọc
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesSearch && matchesCategory && matchesBrand;
  });

  // Chuyển đổi trạng thái chọn danh mục
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Chuyển đổi trạng thái chọn thương hiệu
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Áp dụng bộ lọc và đóng modal
  const applyFilters = () => {
    setIsFilterVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* Search Bar and Filter Icon */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity onPress={() => setIsFilterVisible(true)} style={styles.filterButton}>
          <Icon name="tune" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {searchQuery === '' ? (
          // Hiển thị danh mục khi thanh tìm kiếm trống
          <>
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
          </>
        ) : (
          // Hiển thị kết quả tìm kiếm khi có nội dung trong thanh tìm kiếm
          <View>
            {[...Array(Math.ceil(filteredProducts.length / 2))].map((_, index) => {
              const productIndex = index * 2;
              const product1 = filteredProducts[productIndex];
              const product2 = filteredProducts[productIndex + 1];

              return (
                <View style={styles.productRow} key={index}>
                  {product1 && (
                    <TouchableOpacity style={styles.productCard}>
                      <Image
                        source={product1.image}
                        style={styles.productImage}
                        resizeMode="contain"
                      />
                      <View style={styles.productInfo}>
                        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                          {product1.name}
                        </Text>
                        <Text style={styles.productWeight} numberOfLines={1} ellipsizeMode="tail">
                          {product1.weight}
                        </Text>
                        <View style={styles.priceContainer}>
                          <Text style={styles.productPrice}>${product1.price.toFixed(2)}</Text>
                          <TouchableOpacity style={styles.addButton}>
                            <Icon name="add" size={20} color="#fff" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  {product2 && (
                    <TouchableOpacity style={styles.productCard}>
                      <Image
                        source={product2.image}
                        style={styles.productImage}
                        resizeMode="contain"
                      />
                      <View style={styles.productInfo}>
                        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                          {product2.name}
                        </Text>
                        <Text style={styles.productWeight} numberOfLines={1} ellipsizeMode="tail">
                          {product2.weight}
                        </Text>
                        <View style={styles.priceContainer}>
                          <Text style={styles.productPrice}>${product2.price.toFixed(2)}</Text>
                          <TouchableOpacity style={styles.addButton}>
                            <Icon name="add" size={20} color="#fff" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterVisible}
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Modal Header với màu trắng */}
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setIsFilterVisible(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Filters</Text>
              <View style={{ width: 24 }} />
            </View>

            {/* Nội dung modal với màu #F5F5F5 */}
            <ScrollView style={styles.modalBody}>
              {/* Category Filter */}
              <Text style={styles.filterSectionTitle}>CATEGORY</Text>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleCategory('Eggs')}
              >
                <Icon
                  name={selectedCategories.includes('Eggs') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedCategories.includes('Eggs') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedCategories.includes('Eggs') ? '#53B175' : '#000' },
                  ]}
                >
                  Eggs
                </Text>
              </Pressable>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleCategory('Noodles & Pasta')}
              >
                <Icon
                  name={selectedCategories.includes('Noodles & Pasta') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedCategories.includes('Noodles & Pasta') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedCategories.includes('Noodles & Pasta') ? '#53B175' : '#000' },
                  ]}
                >
                  Noodles & Pasta
                </Text>
              </Pressable>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleCategory('Chips & Crisps')}
              >
                <Icon
                  name={selectedCategories.includes('Chips & Crisps') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedCategories.includes('Chips & Crisps') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedCategories.includes('Chips & Crisps') ? '#53B175' : '#000' },
                  ]}
                >
                  Chips & Crisps
                </Text>
              </Pressable>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleCategory('Fast Food')}
              >
                <Icon
                  name={selectedCategories.includes('Fast Food') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedCategories.includes('Fast Food') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedCategories.includes('Fast Food') ? '#53B175' : '#000' },
                  ]}
                >
                  Fast Food
                </Text>
              </Pressable>

              {/* Brand Filter */}
              <Text style={styles.filterSectionTitle}>BRAND</Text>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleBrand('Individual Collection')}
              >
                <Icon
                  name={selectedBrands.includes('Individual Collection') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedBrands.includes('Individual Collection') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedBrands.includes('Individual Collection') ? '#53B175' : '#000' },
                  ]}
                >
                  Individual Collection
                </Text>
              </Pressable>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleBrand('Coola')}
              >
                <Icon
                  name={selectedBrands.includes('Coola') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedBrands.includes('Coola') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedBrands.includes('Coola') ? '#53B175' : '#000' },
                  ]}
                >
                  Coola
                </Text>
              </Pressable>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleBrand('Local')}
              >
                <Icon
                  name={selectedBrands.includes('Local') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedBrands.includes('Local') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedBrands.includes('Local') ? '#53B175' : '#000' },
                  ]}
                >
                  Local
                </Text>
              </Pressable>
              <Pressable
                style={styles.filterOption}
                onPress={() => toggleBrand('Kasi Farms')}
              >
                <Icon
                  name={selectedBrands.includes('Kasi Farms') ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={selectedBrands.includes('Kasi Farms') ? '#53B175' : '#666'}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.filterOptionText,
                    { color: selectedBrands.includes('Kasi Farms') ? '#53B175' : '#000' },
                  ]}
                >
                  Kasi Farms
                </Text>
              </Pressable>

              {/* Apply Filter Button */}
              <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                <Text style={styles.applyButtonText}>Apply Filter</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    paddingHorizontal: 10,
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
  filterButton: {
    marginLeft: 10,
  },
  scrollContent: {
    paddingBottom: 20,
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
    height: 220,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  productInfo: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  productWeight: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
    textAlign: 'left',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  addButton: {
    backgroundColor: '#53B175',
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalBody: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    flex: 1, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    textTransform: 'uppercase',
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  filterOptionText: {
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});