// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';
import { MenuItems } from './MenuItem'; // import the MenuItems

function CreateUserDropdown({ dropdownType }) {
    const dropdownItems = MenuItems[dropdownType]; // use the appropriate dropdown items based on the passed type

    return (
        <ul className='dropdown-menu'>
            {dropdownItems.map((item, index) => (
                <li key={index}>
                    <Link className={item.cName} to={item.path}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CreateUserDropdown;

