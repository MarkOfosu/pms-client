// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    firstName: '',
    userType: '',
    // profileImage: null, // Handle as per your requirement
  });

  const login = (userData) => {
    setAuthState({
      isLoggedIn: true,
      firstName: userData.firstName,
      userType: userData.userType,
      // profileImage: userData.profileImage,
    });
  };

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      firstName: '',
      userType: '',
      // profileImage: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

