//src/components/pages/login.js
import React, { useState } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom';
import '../../global.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    userName: '',
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
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Invalid credentials');
      }
    })
    .then(() => {
      login(true);
      navigate('/MemberPortal');
      setLoginData({
        userName: '',
        password: ''
      });
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
          <div className="input-wrapper">
            <input
              id='userName'
              name="userName"
              value={loginData.userName}
              onChange={handleChange}
              required
            />
            <label htmlFor="userName">Username</label>
            <div className='underline'></div>
          </div>
          <div className="input-wrapper">
            <input
              id='password'
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange} 
              required
            />
            <label htmlFor="password">Password</label>
            <div className='underline'></div>
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
