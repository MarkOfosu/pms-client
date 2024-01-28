// src/App.js
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import AdminLayout from './components/memberPortal/AdminLayout';
import UserLayout from './components/memberPortal/UserLayout';
import BecomeMember from './components/pages/BeomeMember';
import HomeNavbar from './components/layout/HomeNavBar';
import MemberPage from './components/memberPortal/MemberPage';
import './global.css';
import NotFound from './components/pages/NotFound';


function App() {
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
