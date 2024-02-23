import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, StatusBar,Linking,TouchableOpacity } from 'react-native';




export default function loginScreen({navigation}) {
  const f = () => { Linking.openURL('http://facebook.com/');
  };
  
  const apple= () => {Linking.openURL('https://www.bing.com/ck/a?!&&p=1c3fde1a83604029JmltdHM9MTcwNzA5MTIwMCZpZ3VpZD0xZWI4MTg0Mi0xMmY0LTY2YmEtMGJiYy0wYWU0MTNlZTY3ZjkmaW5zaWQ9NTIwNA&ptn=3&ver=2&hsh=3&fclid=1eb81842-12f4-66ba-0bbc-0ae413ee67f9&psq=google&u=a1aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5teC8&ntb=1/');
  };
  
  const g = () => {Linking.openURL('http://apple.com/');
    
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/Lcafe.jpeg')} 
       style={styles.logo}
     />
     <Text style={styles.titulo}>UT-Coffee</Text>
     <Text style={styles.subtitulo}>inicia sesión en tu cuenta</Text>
     <TextInput
       placeholder="ingresatucorreo@gmail.com"
       style={styles.textInput}
     />
     <TextInput
       placeholder="contraseña"
       style={styles.textInput}
       secureTextEntry={true}
     />
     <Text style={styles.forgotPassword}>¿olvidó su contraseña?</Text>
   
     <TouchableOpacity onPress={() => navigation.navigate('vista')} >
     <Text style={styles.forgotPassword}>¿no tengo una cuenta?</Text>
     <StatusBar style="auto"/>
</TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.socialBoton}onPress={apple}>
            <Image source={require('../../assets/image/apple.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBoton}onPress={f}>
            <Image source={require('../../assets/image/facebook.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBoton}onPress={g}>
            <Image source={require('../../assets/image/google.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
        </View>

    </View>
     
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
    fontSize: 78,
    color: 'black',
    fontWeight: 'bold'
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialBoton: {
    marginTop: 20,
    borderRadius: 50,
    padding: 25,
  },
  socialLogo: {
    width: 30,
    height: 30,
  }  

})