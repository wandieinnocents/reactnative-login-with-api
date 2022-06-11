import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import { useState } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native-web';



export default function Login() {

  // set states
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  
  myfun = async() => {
    // alert(email);
    await fetch('http://127.0.0.1:8000/api/login',{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'

      },
      // data that is posted
      body: JSON.stringify({"email": email,"password":password})

    }).then(res => res.json())
      .then(resData => {
        // alert(resData.token);
        console.log(resData);
      });
  }
  return (
    <View style={styles.container}>
      {/* icon */}
      

      <Image source={require('../assets/logo.png')} style={{width: 200, height: 200}}/>
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
        onChangeText={(value) => setEmail(value)}
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
        onChangeText={(value) => setPassword(value)}
      />

      {/* button */}
      <TouchableOpacity
        onPress={myfun}
        style={styles.btnContainer}
      > 
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>


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
