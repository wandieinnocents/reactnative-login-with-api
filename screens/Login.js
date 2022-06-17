import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import { useState } from 'react/cjs/react.production.min';
// import { AsyncStorage} from @react-native-community/async-storage;
import { createStackNavigator, createAppContainer } from 'react-navigation';
import axios from 'axios';

import Dashboard from './Dashboard';
import Register from './Register';
export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // set form vavlues
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = async() => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.email)
    loginFormData.append("password", formValue.password)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/login",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

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
        value={formValue.email}
        onChange={handleChange}
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
        value={formValue.password}
        onChange={handleChange}
      />

      {/* button */}
      <TouchableOpacity
        // onPress={handleSubmit}
        onPress={() =>navigation.navigate('Dashboard')}
        style={styles.btnContainer}
      >
        <Text style={styles.btnText}>LOGIN</Text>


      </TouchableOpacity>

      {/* dont have account  */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text >Dont have an account ? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
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
