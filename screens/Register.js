import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from "axios";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Constants from "expo-constants";

const baseUrl = "http://restapi.adequateshop.com/api/authaccount/"; 

export default function Register({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    
    return (
        <View style={styles.container}>

            {/* icon */}
            <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
            <TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop:20,
                    backgroundColor: '#f0f8ff',
                    color: '#ffffff',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="Enter Your UserName "
            />

            <TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop: 20,
                    backgroundColor: '#f0f8ff',
                    color: '#ffffff',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="Enter  Email  Address "
            />

            <TextInput
                style={{
                    height: 40, width: '90%',
                    marginTop: 20,
                    backgroundColor: '#f0f8ff',
                    color: '#ffffff',
                    textAlign: 'center', alignItems: 'center'

                }}
                placeholder="Enter  your  Password"
            />

            {/* button */}
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Login')
                }
                style={styles.btnContainer}
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
