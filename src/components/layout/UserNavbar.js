

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logout from '../elements/Logout';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import CreateUserDropdown from './CreateUserDropdown';
import logo from '../../resource/logo1.png';
import UserProfile from '../elements/UserProfile';

const UserNavbar = () => {
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
                        <a href='/user/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/user/account' className='nav-links' onClick={closeMobileMenu}>
                            Account / Billing
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/user/reservations' className='nav-links' onClick={closeMobileMenu}>
                            Reservations
                        </a>
                    </li>
                </ul>
                <UserProfile />
                <Logout />
            </nav>
        </>
    );
};

export default UserNavbar;
