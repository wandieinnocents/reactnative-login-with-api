import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import * as React from 'react'; 

const Stack = createNativeStackNavigator();

export default function App() { 


  return (
   
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register' }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // login button
  btnContainer: {
    elevation: 5,
    backgroundColor: "#4F8EF7",
    // borderRadius: 30,
    paddingVertical: 10,
    width: '90%',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  //login Button text
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

});
