// Dropdown.js
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';
import { MenuItems } from './MenuItem'; // import the MenuItems
import  React, { useState } from 'react';

function CreateUserDropdown({ dropdownType }) {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);




    const dropdownItems = MenuItems[dropdownType]; // use the appropriate dropdown items based on the passed type

  

    return (
        <ul className='dropdown-menu'>
            {dropdownItems.map((item, index) => (
                <li key={index}>
                    <Link className={item.cName} to={item.path}   onClick={closeMobileMenu}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CreateUserDropdown;

