import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import * as React from 'react'; 
import Navigation from './components/Navigation';

const Stack = createNativeStackNavigator();

export default function App() { 
 
  return (
   
    <Navigation/>
   
  );
}


