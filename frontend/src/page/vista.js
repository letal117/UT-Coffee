import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const VistaScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafetería React</Text>
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
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default VistaScreen;