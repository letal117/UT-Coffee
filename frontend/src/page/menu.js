import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';

const MenuScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UT-Coffee</Text>
      <ScrollView style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Menú</Text>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Café Americano")}>
          <Text>Café Americano</Text>
          <Text>$2.50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Café Latte")}>
          <Text>Café Latte</Text>
          <Text>$3.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Cappuccino")}>
          <Text>Cappuccino</Text>
          <Text>$3.50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Cafe Expreso")}>
          <Text>Café Expreso</Text>
          <Text>$4.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Cafe Moka")}>
          <Text>Café Moka</Text>
          <Text>$4.50</Text>
        </TouchableOpacity>
        {/* Otros elementos del menú */}
      </ScrollView>
      <View style={styles.cartContainer}>
        <Text style={styles.sectionTitle}>Carrito de Compras</Text>
        {cartItems.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
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
  },
  cartContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
});

export default MenuScreen;