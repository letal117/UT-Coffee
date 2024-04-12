import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';

const Menu3Screen = () => {
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
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Agua")}>
          <Text>Agua</Text>
          <Text>$18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Agua 2")}>
          <Text>Agua Mineral</Text>
          <Text>$19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Jamaica")}>
          <Text>Agua de Jamaica</Text>
          <Text>$20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Horchata")}>
          <Text>Agua de Horchata</Text>
          <Text>$20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Refresco")}>
          <Text>Coca Cola</Text>
          <Text>$19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Refresco de sabor")}>
          <Text>Mundet</Text>
          <Text>$18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Refresco sabor")}>
          <Text>Fanta</Text>
          <Text>$18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("Refresco cristal")}>
          <Text>Cristal de Fresa</Text>
          <Text>$18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => addToCart("bebida")}>
          <Text>Fuze Tea</Text>
          <Text>$20</Text>
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

export default Menu3Screen;