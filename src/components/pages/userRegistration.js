//src/components/pages/userRegistration.js

import React, { useState } from 'react';
import '../styles/form.css';
import '../../global.css'
import Footer from '../pages/footer'
import {Link} from 'react-router-dom';
import Layout from '../layout';
import { useNavigate} from 'react-router-dom';

const UserRegistration = () =>{

    const [userData, setUserData] = useState({
        First_name: '',
        Last_name: '',
        Email_address: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const registerUser = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    
        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('User registered successfully');
            navigate('/login');

            //reset the form
            setUserData({
                First_name: '',
                Last_name: '',
                Email_address: '',
                password: '',
                confirmPassword: ''
            });
            
        })
        .catch((error) => {
            console.error('Error:', error);
           alert('Error registering user');
        });
    }

    return (
        <>
        <Layout />
        <div className='page-container'>
            <div className="form-container">
                <form onSubmit={registerUser} className='form'>
                    <h2>Register</h2>
                    <div class="input-wrapper">
                        <input 
                            onChange={handleChange}
                            name="First_name" 
                            value={userData.First_name} 
                            required />
                        <label for='firstName'>First name</label>
                        <div class='underline'></div>
                    </div>
                   
                    <div class="input-wrapper">
                        <input 
                            onChange={handleChange}
                            name="Last_name" 
                            value={userData.Last_name} 
                            required />
                        <label for='lastName'>Last name</label>
                        <div class='underline'></div>
                    </div>
                    
                    <div class="input-wrapper">
                        <input 
                            onChange={handleChange}
                            type="email" 
                            name="Email_address" 
                            value={userData.Email_address}
                            required />
                        <label for='email'>Email</label>
                        <div class='underline'></div>
                    </div>
                    <div class="input-wrapper">
                        <input 
                            onChange={handleChange}
                            type="password" 
                            name="password" 
                            value={userData.password} 
                            required />
                        <label for='password'>Password</label>
                        <div class='underline'></div>
                    </div>
                    <div class="input-wrapper">
                        <input 
                            onChange={handleChange}
                            type="password" 
                            name="confirmPassword" 
                            value={userData.confirmPassword} 
                            required />
                        <label for='confirmPassword'>Confirm Password</label>
                        <div class='underline'></div>
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



