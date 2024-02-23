import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, StatusBar, ScrollView,SafeAreaView} from 'react-native';
import ButtonRecup from '../components/ButtonRecup';



export default function RegistroScreen() {

  return (
    <ScrollView >
      <View style={styles.container}>
      <Image source={require('../../assets/image/Lcafe.jpeg')} 
       style={styles.logo}
     />
     <Text style={styles.titulo}>Formulario de Registro</Text>
     <Text style={styles.subtitulo}>Crea una cuenta</Text>
     <TextInput
       placeholder="E-mail@gmail.com"
       keyboardType='email-address'
       style={styles.textInput}
     />
     <TextInput
       placeholder="Contraseña"
       style={styles.textInput}
       secureTextEntry={true}
     />
     <TextInput
       placeholder="Nombre de usuario"
       style={styles.textInput}
     />
      <TextInput
       placeholder="Telefono"
       keyboardType='phone-pad'
       style={styles.textInput}
     />
     <Text style={styles.forgotPassword}>¿olvidó su contraseña?</Text>
     <ButtonRecup/>
     <StatusBar style="auto"/>
     </View>
    </ScrollView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E7F6',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    marginTop: 0,
  },
  logo: {
    flexDirection: 'column',
    width: "100%",
    height: 120,
  },
  titulo: {
    marginTop: 30,
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitulo: {
    marginTop: 20,
    fontSize: 25,
    color:'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 10,
    width: 300,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor:'#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color:'gray',
    marginTop: 30,
  }

})
