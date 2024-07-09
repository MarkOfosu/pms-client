// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    firstName: '',
    userType: '',
    profileImage: null, 
  });


  const login = (userData) => {
    setAuthState({
      isLoggedIn: true,
      firstName: userData.firstName,
      userType: userData.userType,
      profileImage: userData.profileImage,
    });
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  const logout= async () => {
    const response = await fetch(`/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      setAuthState({
        isLoggedIn: false,
        firstName: '',
        userType: '',
        profileImage: null,
      });
      localStorage.removeItem('user');
    }
  }
    
  
  
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

