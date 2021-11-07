import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import signupscreen from './app/screens/signupscreen';
import loginscreen from './app/screens/loginscreen';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer> 
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    <Stack.Screen name="signup" component={signupscreen}/>
    <Stack.Screen name="login" component={loginscreen}/>
  </Stack.Navigator></NavigationContainer>
  )
}

export default App;

