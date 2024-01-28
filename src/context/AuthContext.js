// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    firstName: '',
    userType: '',
    profileImage: null, 
  });

  //after refresh, check if user is logged in
  // useEffect(() => {
  //   fetch('/api/auth/checkLoggedIn')
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         throw new Error('Not logged in');
  //       }
  //       return response.json();
  //     })
  //     .then((userData) => {
  //       setAuthState({
  //         isLoggedIn: true,
  //         firstName: userData.firstName,
  //         userType: userData.userType,
  //         profileImage: userData.profileImage,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  // , []);


  const login = (userData) => {
    setAuthState({
      isLoggedIn: true,
      firstName: userData.firstName,
      userType: userData.userType,
      profileImage: userData.profileImage,
    });
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  const logout = () => {    
    setAuthState({
      isLoggedIn: false,
      firstName: '',
      userType: '',
      profileImage: null,
    });
    localStorage.removeItem('user');
    (async () => {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });
      } catch (err) {
        console.error(err);
      }
    })();
  
  }
  


  
 

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

