import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/page/loggin';
import RegistroScreen from './src/page/registro';
import MenuScreen from './src/page/menu';
import VistaScreen from './src/page/vista';
import Vista2Screen from './src/page/vista2';
import Vista3Screen from './src/page/vista3';
import Vista4Screen from './src/page/vista4';

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
      <Stack.Screen name="menu" component={MenuScreen}/>
      <Stack.Screen name="vista" component={VistaScreen}/>
      <Stack.Screen name="vista2" component={Vista2Screen}/>
      <Stack.Screen name="vista3" component={Vista3Screen}/>
      <Stack.Screen name="vista4" component={Vista4Screen}/>
    </Stack.Navigator>
  </NavigationContainer>

   
  );
}
 