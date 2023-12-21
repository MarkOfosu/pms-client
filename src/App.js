//src/App.js

import {Routes, Route  } from 'react-router-dom'
import Login from './components/pages/login'
import UserRegistration from './components/pages/userRegistration'
import Home from './components/pages/home'
import Users from './components/pages/users'
import NotFound from './components/pages/notFound'


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userRegistration" element={<UserRegistration />} />
      <Route path="/users" element={<Users />} />
      <Route path='*' element={<NotFound />} /> 
    </Routes>
    
  )
}


export default App
