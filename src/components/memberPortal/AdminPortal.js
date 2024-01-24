// AdminPortal.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavbar from '../layout/AdminNavbar';
import CreateUser from '../pages/admin/CreateUser';
import CreateAdmin from '../pages/admin/CreateAdmin';
import LapSwimCheckIn from '../pages/admin/LapswimCheckIn.js';
import Profile from '../pages/admin/Profile';
import LapswimSchedule from '../pages/admin/LapswimSchedule';
import AquaAerobicsSchedule from '../pages/admin/AquaAerobicsSchedule';

//... Import other admin components

const AdminPortal = () => {
  return (
    <>
      <AdminNavbar />
        <Routes>
          <Route path='admin/createCustomer' element={<CreateUser />} />
          <Route path='admin/createAdmin' element={<CreateAdmin />} />
          <Route path='admin/lapSwimCheckIn' element={<LapSwimCheckIn />} />
          <Route path='admin/Profile' element={<Profile />} />
          <Route path='admin/createSchedule/lapswim' element={<LapswimSchedule />} />
          <Route path='admin/createSchedule/lessons' element={<AquaAerobicsSchedule />} />
        </Routes>
    </>
  );
};

export default AdminPortal;





 

  