// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import AdminPortal from './components/memberPortal/AdminPortal';
import UserPortal from './components/memberPortal/UserPortal';
import BecomeMember from './components/pages/BeomeMember';
import HomeNavbar from './components/layout/HomeNavBar';
import './global.css';

function App() {
  return (
    <div>
      <HomeNavbar />
        <Routes>
          <Route path='/' exact  element={<Home />} />
          <Route path='/admin/*' element={<AdminPortal />} />
          <Route path='/user/*' element={<UserPortal />} />
          <Route path='/becomeMember' element={<BecomeMember />} />
        </Routes>
    </div>
  );
}

export default App;
