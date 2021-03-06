import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Constants from "expo-constants";

const baseUrl = "http://127.0.0.1:8000/api"; 

export default function Register({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onChangePasswordConfirmationHandler = (password_confirmation) => {
    setPasswordConfirmation(password_confirmation);
  };


  // header options
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };


  const onSubmitFormHandler = async (event) => {
    // console.log();
    if (!name.trim() || !email.trim() || !password.trim() || !password_confirmation.trim()) {
      alert("Name or Email  or Password is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/register',options, 
      {
        name,
        email,
        password,
        password_confirmation,
      });
      if (response.code === 201) {
        console.log(response.message);  
        alert('You have created: ${JSON.stringify(response.data)}');
        setIsLoading(false);
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
      } else {
        // console.log(response.data);
        throw new Error("An error has occurred");
      }
    } catch (error) {
     console.log(error);        
      alert("An error has occurred");
      setIsLoading(false);
    }
  };
    
    
    return (
        <View style={styles.container}>

            {/* icon */}
            <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
            <TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop:20,
                    backgroundColor: '#f0f8ff',
                    color: '#000',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="Enter Your UserName "
                value={name}
                editable={!isLoading}
                onChangeText={onChangeNameHandler}
            />

            <TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop: 20,
                    backgroundColor: '#f0f8ff',
                    color: '#000',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="Enter  Email  Address "
                value={email}
                editable={!isLoading}
                onChangeText={onChangeEmailHandler}
            />

            <TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop: 20,
                    backgroundColor: '#f0f8ff',
                    color: '#000',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="Enter  your  Password"
                value={password}
                editable={!isLoading}
                onChangeText={onChangePasswordHandler}
            />


<TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop: 20,
                    backgroundColor: '#f0f8ff',
                    color: '#000',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="reenter  your  Password"
                value={password_confirmation}
                editable={!isLoading}
                onChangeText={onChangePasswordConfirmationHandler}
            />

            {/* button */}
            <TouchableOpacity
                // onPress={() => navigation.navigate('Login') }
                onPress={onSubmitFormHandler}

                style={styles.btnContainer}
                disabled={isLoading}
            >
                <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>

            {/* dont have account  */}
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text > Have an account ? </Text>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Login')
                    }>
                    <Text style={{ color: 'blue' }}>Login</Text>
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
