// AdminPortal.js
import React, { useEffect} from 'react';
import {Routes, Route } from 'react-router-dom';
import Footer from '../elements/footer.js';
import AdminNavbar from '../layout/AdminNavbar.js';
import CreateUser from '../pages/admin/CreateUser.js';
import CreateAdmin from '../pages/admin/CreateAdmin.js';
import LapSwimCheckIn from '../pages/admin/LapswimCheckIn.js';
import Profile from '../pages/admin/Profile.js';
import LapswimSchedule from '../pages/admin/LapswimSchedule.js';
import AquaAerobicsSchedule from '../pages/admin/AquaAerobicsSchedule.js';
import { useAuth } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import NotFound from '../pages/NotFound.js';
import MemberPage from './MemberPage.js';
import Logout from '../elements/Logout.js';

import UserRegistration from '../elements/UserRegistration.js';
import { Outlet } from 'react-router-dom';



const AdminLayout = () => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
        <>
          <AdminNavbar />
          <Routes>
            <Route index element={<CreateAdmin />} />
            <Route path='createUser' element={<CreateUser />} />
            <Route path='lapSwimCheckIn' element={<LapSwimCheckIn />} />
            <Route path='profile' element={<Profile />} />
            <Route path='createSchedule/lapswim' element={<LapswimSchedule />} />
            <Route path='createSchedule/aquaAerobics' element={<AquaAerobicsSchedule />} />
            <Route path='userRegistration' element={<UserRegistration />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <Outlet />
        </>
  );
};

export default AdminLayout;
