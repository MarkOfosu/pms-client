

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logout from '../elements/Logout';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import CreateUserDropdown from './CreateUserDropdown';
import logo from '../../resource/logo1.png';
import UserProfile from '../../components/pages/UserProfile';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const UserNavbar = () => {

    const navigate = useNavigate();
    const { logout } = useAuth(); 
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleMouseEnter = (dropdownSetter) => {
        if (window.innerWidth < 960) {
            dropdownSetter(false);
        } else {
            dropdownSetter(true);
        }
    };

    const handleMouseLeave = (dropdownSetter) => {
        dropdownSetter(false);
    };

    const handleLogoutClick = async () => {
        try {
            await logout(); 
            alert('You are now logged out');
            closeMobileMenu();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/userLayout/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item' onClick={() => handleMouseEnter(setClick)}>
                        <Link to='/userLayout/account' className='nav-links' onClick={closeMobileMenu}>
                            Account
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/userLayout/reservations' className='nav-links' onClick={closeMobileMenu}>
                            Reservations
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/userLayout/dashboard' className='nav-links' onClick={closeMobileMenu}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                    <div className='nav-links-mobile' onClick={handleLogoutClick}>
                        Logout
                    </div>
                    </li>
                </ul>
                <UserProfile />
                <Logout />
            </nav>
        </>
    );
};

export default UserNavbar;
