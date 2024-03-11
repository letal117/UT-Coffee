import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, StatusBar, ScrollView,TouchableOpacity} from 'react-native';




const RegistroScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.contenedor}>
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
     

      <TouchableOpacity onPress={() => navigation.navigate('inicio')} style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

     <Text style={styles.forgotPassword}>¿olvidó su contraseña?</Text>
     <StatusBar style="auto"/>
     </View>
    </ScrollView>
  );  
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#E2E7F6',
    //alignItems: 'center',
    width: "100%",
    height: "100%",
    marginTop: 0,
  },
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
  },
  button: {
    backgroundColor: 'black',
    width: '50%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }  

})

export default RegistroScreen;
