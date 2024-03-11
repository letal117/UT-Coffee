import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/page/loggin';
import RegistroScreen from './src/page/registro';
import MenuScreen from './src/page/menu';
import VistaScreen from './src/page/vista';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="loggin"
        component={LoginScreen}
        options={{title: 'Bienvenido'}}
      />
      <Stack.Screen name="formulario" component={RegistroScreen}/>
      <Stack.Screen name="inicio" component={LoginScreen}/>
      <Stack.Screen name="vista" component={VistaScreen}/>
      <Stack.Screen name="menu" component={MenuScreen}/>
    </Stack.Navigator>
  </NavigationContainer>

   
  );
}
 