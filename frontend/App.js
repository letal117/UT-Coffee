import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './src/page/loggin';
import RegistroScreen from './src/components/registro';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={loginScreen}
        options={{title: 'hola'}}
      />
      <Stack.Screen name="vista" component={RegistroScreen}/>
      <Stack.Screen name="23" component={loginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>

   
  );
}
 