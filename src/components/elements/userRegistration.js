//src/components/pages/userRegistration.js

import React, { useState } from 'react';
import '../styles/form.css';
import '../../global.css';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout';

const UserRegistration = () => {
  const [userData, setUserData] = useState({
    userName: '',  
    email: '',    
    firstName: '', 
    lastName: '',  
    dateOfBirth: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  
  const registerUser = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = {
      userName: userData.userName,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      dateOfBirth: userData.dateOfBirth,
      address: userData.address,
      password: userData.password
    };

    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          throw new Error(data.message || 'Error registering user');
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert('User registered successfully');
      navigate('/login');
      setUserData({
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        password: '',
        confirmPassword: ''
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error.message);
    });
};



    return (
        <>
        <div className='page-container'>
            <div className="form-container">
                <form onSubmit={registerUser} className='form'>
                    <h2>Register</h2>
                    <div className="input-wrapper">
                        <input
                            id='userName'
                            name="userName"
                            value={userData.userName}
                            onChange={handleChange}
                            autoComplete='on'
                            required
                        />
                        <label htmlFor="userName">Username</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='email'
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='firstName'
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="firstName">First Name</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='lastName'
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='dateOfBirth'
                            type="date"
                            name="dateOfBirth"
                            value={userData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='address'
                            name="address"
                            value={userData.address}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="address">Address</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='password'
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <div className='underline'></div>
                    </div>
                    <div className="input-wrapper">
                        <input
                            id='confirmPassword'
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className='underline'></div>
                    </div>
                    <button  type="submit" className='form-button'>Register</button>
                    <div className="link">
                        Already have an account? <Link to="/login">Login</Link>
                    </div> 
                </form>
            </div>
            <Footer />
        </div>
        </>
    );
}




export default UserRegistration;



