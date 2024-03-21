import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';

const MenuScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UT-Coffee</Text>
      <ScrollView style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Menú</Text>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Café Americano")}>
          <Text>Café Americano</Text>
          <Text>$40</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Café Latte")}>
          <Text>Café Latte</Text>
          <Text>$45</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Cappuccino")}>
          <Text>Cappuccino</Text>
          <Text>$50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Cafe Expreso")}>
          <Text>Café Expreso</Text>
          <Text>$55</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Cafe Moka")}>
          <Text>Café Moka</Text>
          <Text>$60</Text>
        </TouchableOpacity>
        {/* Otros elementos del menú */}
      </ScrollView>
      <View style={styles.cartContainer}>
        <Text style={styles.sectionTitle}>Carrito de Compras</Text>
        {cartItems.map((item, index) => (
          <Text key={index}>{item}</Text>
          
        ))}
         <TouchableOpacity style={styles.clearButton} onPress={() => clearCart()}>
          <Text style={styles.clearButtonText}>Limpiar Carrito</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#E2E7F6',
    width: "100%",
    height: "100%",
    marginTop: 0,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
   
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'auto'
  },
  menuContainer: {
    flex: 1,
  },
  
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontWeight: 'bold',
  },
  cartContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#8d4925',
  },
});

export default MenuScreen;