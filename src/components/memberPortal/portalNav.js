import React from 'react';
import { Link } from 'react-router-dom';
import './portalNav.css';
import '../memberPortal/logout.css';
import Logout from '../memberPortal/logout';

const PortalNav = () => {
    return (
        <div>
            <nav className='nav'> 
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PortalNav;
