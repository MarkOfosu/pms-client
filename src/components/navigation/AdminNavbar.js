
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import '../styles/Dropdown.css';
import CreateUserDropdown from './CreateUserDropdown';
import logo from '../../resource/logo1.png'
import UserProfile from '../../components/pages/UserProfile';
import Logout from '../elements/Logout';

import { useAuth } from '../../context/AuthContext';



const AdminNavbar = () => {
;
    const { logout } = useAuth(); 
    const [click, setClick] = useState(false);
    const [dropdownCreateSchedule, setDropdownCreateSchedule] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false);
        setDropdownCreateSchedule(false);
    }
 

    const toggleDropdown = (dropdownSetter) => {
        if (window.innerWidth < 960) {
            dropdownSetter(prevState => !prevState);
        }
    };

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
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };




    return (
   
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                    <Link to='/adminLayout/checkIn' className='nav-links' onClick={closeMobileMenu} >
                        Check-In User
                    </Link>
                
                    </li>

                    <li className='nav-item' onClick={() => toggleDropdown(setDropdownCreateSchedule)}
                    onMouseEnter={() => handleMouseEnter(setDropdownCreateSchedule)}
                        onMouseLeave={() => handleMouseLeave(setDropdownCreateSchedule)}>
                    <Link className='nav-links'>
                        Create Schedule <FontAwesomeIcon icon={faCaretDown} />
                    </Link>
                    {dropdownCreateSchedule && <CreateUserDropdown dropdownType='createScheduleDropdownItems'  onClick = {closeMobileMenu}/>}
                    </li>
                

                    <li className='nav-item'>
                    <Link  className='nav-links'to='/adminLayout/userRegistration' onClick={closeMobileMenu}> 
                        Create User
                    </Link>
                   

                    </li>
                    <li className='nav-item'>
                        <Link to='/adminLayout/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/adminLayout/dashboard' className='nav-links' onClick={closeMobileMenu}>
                            Dashboard
                        </Link>
                    </li>
                    
                    <li >
                    <div className='nav-links-mobile' onClick={handleLogoutClick}>
                        Logout
                    </div>
                    </li>
                    
                    </ul>
                    <UserProfile/>
                    <Logout />
                    </nav>

        );
    };

    export default AdminNavbar;