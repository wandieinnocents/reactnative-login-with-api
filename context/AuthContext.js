import React, {createContext} from 'react';

//create auth context
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    <AuthContext.Provider value="Test Value"> {children} </AuthContext.Provider>
}
