//src/App.js

import {BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import MemberPortal from './components/memberPortal/memberPortal'
import UserRegistration from './components/pages/userRegistration'
import Home from './components/pages/home'
import Users from './components/pages/users'
import NotFound from './components/pages/notFound'
import './global.css'

import Navbar from './components/menu/Navbar'


function App() {
 

  return (

    <Router>
      <Navbar />
      </Router>
        
      

  )
}


export default App
