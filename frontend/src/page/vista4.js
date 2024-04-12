import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Vista4Screen = ({navigation}) => {
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
      </View>
      <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('menu5')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/bebida 1.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Bebidas →</Text>
        <Text style={styles.description}>Las bebidas mas ricas </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cuadro} onPress={() => navigation.navigate('menu6')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/comida 1.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Comida →</Text>
        <Text style={styles.description}>Las comidas mas deliciosas</Text>
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
    marginTop: -20,
    backgroundColor: '#E2E7F6',
    borderRadius: 20,
    marginBottom: 40,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
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

export default Vista4Screen;