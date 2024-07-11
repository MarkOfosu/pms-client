import {useState} from 'react';

import { Link } from 'react-router-dom';
import logo from '../../resource/logo1.png';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const HomeNavbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

   
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
                    <Link to='/becomeMember' className='nav-links' onClick={closeMobileMenu}>Become a Member</Link>
                </li>
                <li className='nav-item portal' >
                    <Link to='/memberPage' className='nav-links' onClick={closeMobileMenu}>Member Portal</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HomeNavbar;
