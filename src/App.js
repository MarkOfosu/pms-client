// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import AdminPortal from './components/memberPortal/AdminPortal';
import UserPortal from './components/memberPortal/UserPortal';
import BecomeMember from './components/pages/BeomeMember';
import HomeNavbar from './components/layout/HomeNavBar';
import MemberPage from './components/memberPortal/MemberPage';
import './global.css';

function App() {
  return (
    <div>
      <HomeNavbar />
        <Routes>
          <Route path='/' exact  element={<Home />} />
          <Route path='/becomeMember' element={<BecomeMember />} />
          <Route path='/memberPage' element={<MemberPage/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
