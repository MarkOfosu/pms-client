// UserPortal.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavbar from '../layout/UserNavbar';
import Profile from '../pages/users/Profile';
import Account from '../pages/users/Account';
import Reservations from '../pages/users/Reservations';
import NotFound from '../pages/NotFound';
import { Outlet } from 'react-router-dom';
//... Import other user components

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route index element={<Profile />} />
        <Route path='account' element={<Account />} />
        <Route path='reservations' element={<Reservations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default UserLayout;
