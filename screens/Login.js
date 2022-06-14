import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import { useState } from 'react/cjs/react.production.min';
// import { AsyncStorage} from @react-native-community/async-storage;
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './Dashboard';
import Register from './Register';
export default function Login({ navigation }) {

const [email,setEmail] = useState(null);
const [password,setPassword] = useState(null);

  // myfun = async() => {
  //   alert(email);
  // }
  return (
    <View style={styles.container}>
      {/* icon */}
      {/* <Image source={{uri: 'https://www.obg.eu.com/img/technologies/react.png'}}
       style={{width: 200, height: 200}} /> */}

      <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
      <TextInput
        style={{
          height: 40, width: '90%',
          marginTop: 20,
          backgroundColor: '#f0f8ff',
          color: 'black',
          textAlign: 'center', alignItems: 'center'
        }}
        placeholder="Enter Email Address "
      value={email}
      onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={{
          height: 40, width: '90%',
          marginTop: 20,
          backgroundColor: '#f0f8ff',
          color: 'black',
          textAlign: 'center', alignItems: 'center'

        }}
        placeholder="Enter your Password" 
      value={password}
      onChangeText={(text) => setPassword(text)}
      // secureTextEntry
      />

      {/* button */}
      <TouchableOpacity
        // onPress={myfun}
        onPress={() =>
          navigation.navigate('Dashboard')
        }
        style={styles.btnContainer}
      >
        <Text style={styles.btnText}>LOGIN</Text>


      </TouchableOpacity>

      {/* dont have account  */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text >Dont have an account ? </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Register')
          }>
          <Text style={{ color: 'blue' }}>Register </Text>
        </TouchableOpacity>
      </View>
    </View>
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
