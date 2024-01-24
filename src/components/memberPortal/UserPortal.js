// UserPortal.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavbar from '../layout/UserNavbar';
import Profile from '../pages/users/Profile';
import Account from '../pages/users/Account';
import Reservations from '../pages/users/Reservations';
//... Import other user components

const UserPortal = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/account' element={<Account />} />
        <Route path='user/reservations' element={<Reservations />} />
        <Route path='user/*' element={<Profile />} />
      </Routes>
    </>
  );
};

export default UserPortal;
