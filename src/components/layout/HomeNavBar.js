

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resource/logo1.png';
import '../styles/Navbar.css';

const HomeNavbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/becomeMember' className='nav-links'>Become a Member</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-links'>Admin Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HomeNavbar;
