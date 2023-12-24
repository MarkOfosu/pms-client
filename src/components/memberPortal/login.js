//src/components/pages/login.js
import React, { useState } from 'react';
import '../styles/form.css';
import {Link} from 'react-router-dom';
import '../../global.css'
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';



const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        credentials: 'include' // Important for cookies
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Invalid email or password");
            } else {
                throw new Error("Internal Server Error");
            }
        }
        return response.json();
    })
    .then(data => {
        alert(data.message); // Display the message from the server
        if (data.message === "Login successful") {
          localStorage.setItem('isLoggedIn', 'true');
          login(true);
          navigate('/MemberPortal');
          setLoginData({
            email: '',
             password: ''
          });
        }
    })
    .catch((error) => {
        alert(error.message);
        console.error('Error:', error);
    });
  };




  return (
    <div className='page-container'>

      <div className="form-container">
        <form onSubmit={handleLogin} className="form">
          <h2>Welcome</h2>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange} 
              placeholder="Email"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange} 
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="form-button">LOGIN</button>
          <div className="link">
            Don’t have an account? <Link to="/userRegistration">Sign up</Link>
          </div>
        </form>       
      </div>
      
    </div>
      
    );

  

}

export default Login;


// const Login = () => {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginStatus, setLoginStatus] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const response = await fetch('/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });
//         const data = await response.json();
//         console.log(data);
//         if (data.status === 'ok') {
//             setLoginStatus('Login Successful');
//             navigate('/memberPortal');
//         } else {
//             setLoginStatus('Login Failed');
//         }
//     };

//     return (
//         <div>
//             <div className='page-container' >
//                 <div className='form-container'>
//                     <h1>Login</h1>
//                     <form onSubmit={handleLogin} className='form'>
//                         <div className='form-input'>
//                             <label htmlFor='username'>Username</label>
//                             <input
//                                 type='text'
//                                 name='username'
//                                 placeholder='Enter username'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                         </div>
//                         <div className='form-input'>
//                             <label htmlFor='password'>Password</label>
//                             <input
//                                 type='password'
//                                 name='password'
//                                 placeholder='Enter password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <button type='submit'>Login</button>
//                     </form>
//                     <p>{loginStatus}</p>
//                     <p>Not a member? <Link to='/userRegistration'>Register here</Link></p>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

