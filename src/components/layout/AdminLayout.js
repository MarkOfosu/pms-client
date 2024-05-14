// AdminLayout.js
import React, { useEffect} from 'react';
import {Routes, Route } from 'react-router-dom';
import Footer from '../elements/footer.js';
import AdminNavbar from '../navigation/AdminNavbar.js';
import CreateUser from '../pages/admin/CreateUser.js';
import CheckIn from '../pages/admin/CheckIn.js';
import LapswimSchedule from '../pages/admin/LapswimSchedule.js';
import AquaAerobicsSchedule from '../pages/admin/AquaAerobicsSchedule.js';
import { useAuth } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import NotFound from '../elements/NotFound.js'



import UserRegistration from '../elements/UserRegistration.js';
import { Outlet } from 'react-router-dom';
import Dashboard from '../elements/Dashboard.js';
import ProfileCard from '../elements/ProfileCard.js';
import Logout from '../elements/Logout.js';



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
            <Route index element={<Dashboard />} />
            <Route path='createUser' element={<CreateUser />} />
            <Route path='checkIn' element={<CheckIn />} />
            <Route path='profile' element={<ProfileCard />} />
            <Route  path='dashboard' element={<Dashboard />} />
            <Route path='createSchedule/lapswim' element={<LapswimSchedule />} />
            <Route path='createSchedule/aquaAerobics' element={<AquaAerobicsSchedule />} />
            <Route path='userRegistration' element={<UserRegistration />} />
            <Route path='logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <Outlet />
        </>
  );
};

export default AdminLayout;
