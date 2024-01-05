// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
    );

    useEffect(() => {
        // Effect to run on component mount and whenever isLoggedIn changes
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    //MAKE IT ASYNC TO CHECK IF USER IS LOGGED IN
    const login = async () => {
        setIsLoggedIn(true); // Update state
        localStorage.setItem('isLoggedIn', true); // Update localStorage
    };

    const logout = () => {
        setIsLoggedIn(false); // Update state
        localStorage.removeItem('isLoggedIn'); // Clear localStorage
    };

    // const value = {
    //     isLoggedIn,
    //     login,
    //     logout,
    // };
        

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
