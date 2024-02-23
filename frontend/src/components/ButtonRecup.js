import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonRecup = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('23')} >
           <LinearGradient
           // Button Linear Gradient
           colors={['#8E47D5','#3619C5']}
           start={{x: 0, y:0}}
           end={{x: 1, y:1}}
           style={styles.button}
           >
           <Text style={styles.text}>Iniciar</Text>
           </LinearGradient>
        </TouchableOpacity>
    );   
}

const styles = StyleSheet.create({
   container:{
    width: 200,
    alignItems:'center',
    marginTop: 30,
   
   },
   text: {
    fontSize: 14,
    color:'#fff',
    fontWeight:'bold'
   },
   button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
   }
  
  });
export default ButtonRecup;
 