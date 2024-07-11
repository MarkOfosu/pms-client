// UserPortal.js
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import UserNavbar from '../navigation/UserNavbar';
import Dashboard from '../elements/Dashboard';
import Reservations from '../pages/users/Reservations';
import NotFound from '../elements/NotFound';
import AccountCard from '../elements/AccountCard';
import ProfileCard from '../elements/ProfileCard';
import Home from '../pages/home';


const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='profile' element={<ProfileCard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='account' element={<AccountCard />} />
        <Route path='reservations' element={<Reservations />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
};

export default UserLayout;
