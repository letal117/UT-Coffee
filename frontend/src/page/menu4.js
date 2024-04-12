import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';

const Menu4Screen = () => {
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
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 1")}>
          <Text>Empanadas de pollo y queso</Text>
          <Text>$15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 6")}>
          <Text>Chilaquiles de pollo y asada</Text>
          <Text>$15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 2")}>
          <Text>Panuchos de asada y pollo</Text>
          <Text>$15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 3")}>
          <Text>Hamburguesa</Text>
          <Text>$50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 4")}>
          <Text>Tortas de Asada</Text>
          <Text>$40</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 5")}>
          <Text>Tacos de Asada</Text>
          <Text>$15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Comida 7")}>
          <Text>Milanesas</Text>
          <Text>$50</Text>
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

export default Menu4Screen;