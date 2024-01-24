// if userTypeId === 1020 ? navigate to customer page

// ### **Customer Page Flow**

// ### **Profile Section**

// - Personal information (editable): Name, Address, Phone.
// - Profile picture: Default image or user-uploaded.
// - Change password option.
// - edit profile

// ### **Account/Billing**

// - Display current account balance.
// - History of previous payments and charges.
// - Option to pay outstanding balances online.
// - Set up and manage payment methods.(stripe)

// ### **Reservation System**

// - View available time slots for activities (e.g., lap swim, aqua aerobics).
// - Make, view, and cancel reservations.
// - Reservation history.

// ### **Dashboard**

// - **Announcement Box**: Latest news, updates, or alerts from the center.
// - **Upcoming Appointments**: Quick view of upcoming reservations and events.
// - **Account Snapshot**: Overview of account balance, upcoming payments, and recent transactions.


import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logout from '../elements/Logout';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import CreateUserDropdown from './Dropdown';
import logo from '../../resource/logo1.png'


const UserNavbar = () => {
    const [click, setClick] = useState(false);
    // const [dropdownCheckIn, setDropdownCheckIn] = useState(false);
    // const [dropdownCreateSchedule, setDropdownCreateSchedule] = useState(false);
    // const [dropdownCreateUser, setDropdownCreateUser] = useState(false);

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
                    {/* Here you can use faBars and faTimes directly */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='user/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='user/account' className='nav-links' onClick={closeMobileMenu}>
                            Account / Billing
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='user/reservations' className='nav-links' onClick={closeMobileMenu}>
                            Reservations
                        </Link>
                    </li>
                </ul>
                <Logout />
            </nav>
        </>
        );
    };
    export default UserNavbar;