// UserPortal.js
import React from 'react';
import {Routes, Route,Outlet } from 'react-router-dom';
import UserNavbar from '../navigation/UserNavbar';
import Dashboard from '../pages/users/Dashboard';
import Account from '../pages/users/Account';
import Reservations from '../pages/users/Reservations';
import NotFound from '../pages/NotFound';


const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='profile' element={<Dashboard />} />
        <Route path='account' element={<Account />} />
        <Route path='reservations' element={<Reservations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserLayout;
