// src/App.js
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/pages/home';
import AdminLayout from './components/layout/AdminLayout';
import UserLayout from './components/layout/UserLayout';
import BecomeMember from './components/pages/BeomeMember';
import HomeNavbar from './components/navigation/HomeNavBar';
import MemberPage from './components/pages/MemberPage';
import './global.css';
import NotFound from './components/elements/NotFound';
import { useAuth } from './context/AuthContext'
import React, { useEffect } from 'react';




function App() {
  const { login, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      login(JSON.parse(user));
      navigate(user.userType === 1030 ? '/adminLayout' : user.userType === 1020 ? '/userLayout' : '/');
    }
    else {
      logout();
    }
  }, []);
 

  return (
    <div>
      <HomeNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/becomeMember' element={<BecomeMember />} />
        <Route path='/memberPage' element={<MemberPage />} />
        <Route path='/adminLayout/*' element={<AdminLayout />} />
        <Route path='/userLayout/*' element={<UserLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
