// import React from 'react'
// import {Outlet, Link} from 'react-router-dom'

// const Layout = () => {
//   return (
//     <>
//         <nav>
//             <ul>
//                 <li>
//                 <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                 <Link to="login">Login</Link>
//                 </li>
//                 <li>
//                 <Link to="userRegistration">User Registration</Link>
//                 </li>
//                 <li>
//                 <Link to="users">Users</Link>
//                 </li>
//             </ul>
            
//         </nav>
//         <Outlet />
      
//     </>
//   )
// }

// export default Layout;

import { Outlet, Link } from 'react-router-dom';
import './styles/layout.css';

const Layout = () => {

    return (
      <>
        <nav className='nav'> 
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/userRegistration" >User Registration</Link>
            </li>
            <li>
              <Link to="/users" >Users</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    );
};

export default Layout;