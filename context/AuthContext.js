import React, { createContext } from 'react';
import { Text, View } from 'react-native';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    return (
       
        <AuthContext.Provider value="Test Value"> {children} </AuthContext.Provider>
       

    );
};
