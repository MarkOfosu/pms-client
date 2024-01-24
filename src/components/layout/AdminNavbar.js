
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logout from '../elements/Logout';
import '../styles/Navbar.css';
import CreateUserDropdown from './Dropdown';
import logo from '../../resource/logo1.png'


const AdminNavbar = () => {
    const [click, setClick] = useState(false);
    const [dropdownCheckIn, setDropdownCheckIn] = useState(false);
    const [dropdownCreateSchedule, setDropdownCreateSchedule] = useState(false);
    const [dropdownCreateUser, setDropdownCreateUser] = useState(false);

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
                    {/* ... other nav items */}
                    <li className='nav-item'
                        onMouseEnter={() => handleMouseEnter(setDropdownCheckIn)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCheckIn)}
                    >
                        <Link  className='nav-links' onClick={closeMobileMenu}>
                            Check-In User <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        {dropdownCheckIn && <CreateUserDropdown dropdownType='checkInDropdownItems'/>}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={() => handleMouseEnter(setDropdownCreateSchedule)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCreateSchedule)}
                    >
                        <Link  className='nav-links' onClick={closeMobileMenu}>
                            Create Schedule <FontAwesomeIcon icon={faCaretDown} />
                        </Link>
                        {dropdownCreateSchedule && <CreateUserDropdown dropdownType='createScheduleDropdownItems'/>}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={() => handleMouseEnter(setDropdownCreateUser)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCreateUser)}
                    >
                    <Link className='nav-links' onClick={closeMobileMenu}>
                            Create User <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {dropdownCreateUser && <CreateUserDropdown dropdownType="createUserDropdownItems" />}
                    </li>
                    <li className='nav-item'>
                    <Link to='/adminProfile' className='nav-links' onClick={closeMobileMenu}>
                    Admin Profile
                    </Link>
                    </li>
                </ul>
                <Logout />
                </nav>
            </>
        );
    };

    export default AdminNavbar;