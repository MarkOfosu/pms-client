// AdminPortal.js
import React, { useEffect,useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Footer from '../elements/footer.js';
import AdminNavbar from '../layout/AdminNavbar';
import CreateUser from '../pages/admin/CreateUser';
import CreateAdmin from '../pages/admin/CreateAdmin';
import LapSwimCheckIn from '../pages/admin/LapswimCheckIn.js';
import Profile from '../pages/admin/Profile';
import LapswimSchedule from '../pages/admin/LapswimSchedule';
import AquaAerobicsSchedule from '../pages/admin/AquaAerobicsSchedule';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';




const AdminPortal = () => {
  const { authState } = useAuth();
  const { isLoggedIn, userType, firstName, image } = authState;
  const navigate = useNavigate();

useEffect(() => {
  if (!isLoggedIn) {
    navigate('/');
  }
  
}, [isLoggedIn, navigate, userType]);

 


  return (
    <>
      <AdminNavbar user={{ firstName: firstName, image: image }} />
        <Routes>
          <Route path='/admin/createUser' element={<CreateUser />} />
          <Route path='/admin/createAdmin' element={<CreateAdmin />} />
          <Route path='/admin/lapSwimCheckIn' element={<LapSwimCheckIn />} />
          <Route path='/admin/Profile' element={<Profile />} />
          <Route path='/admin/createSchedule/lapswim' element={<LapswimSchedule />} />
          <Route path='/admin/createSchedule/aquaAerobics' element={<AquaAerobicsSchedule />} />
          <Route path='/admin/*' element={<Profile />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <div>
        <div className='memberPage'>
          
          {isLoggedIn ?  <h1 >Welcome {firstName}</h1> : null}
          </div>
        </div>
      <Footer />
    </>
  );
};

export default AdminPortal;





 

  