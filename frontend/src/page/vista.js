import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const VistaScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image source={require('../../assets/image/Lcafe.jpeg')} 
       style={styles.logo}
     />
      <View style={styles.header}>
        <Text style={styles.appName}>UT-COFFEES</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar comida.."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Buscar', searchText)}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('menu')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/cafeteria 1.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Doña Eloiza →</Text>
        <Text style={styles.description}>La mejor comida rica y barata</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('menu')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/cafeteria 2.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Cafetería UT →</Text>
        <Text style={styles.description}>Comida a un precio muy bueno</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('menu')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/cafeteria 3.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Doña Carmelita →</Text>
        <Text style={styles.description}>La mejor comida que comer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: '#E2E7F6',
  },
  logo: {
    flexDirection: 'column',
    width: "100%",
    height: 120,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    marginTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  cuadro: {
    backgroundColor: '#E2E7F6',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
     
  },
  
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: 'gray',
  },
});

export default VistaScreen;