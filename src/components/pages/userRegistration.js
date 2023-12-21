//src/components/pages/userRegistration.js

import React, { useState } from 'react';
import '../styles/form.css';
import '../../global.css'
import Footer from '../pages/footer'
import {Link} from 'react-router-dom';

const UserRegistration = () =>{
    const [userData, setUserData] = useState({
        First_name: '',
        Last_name: '',
        Email_address: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const registerUser = async (e) => {
        e.preventDefault();
    
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

            //reset the form
            setUserData({
                First_name: '',
                Last_name: '',
                Email_address: '',
                password: ''
            });
            
        })
        .catch((error) => {
            console.error('Error:', error);
           alert('Error registering user');
        });
    }
    

    return (
        <div className='page-container'>
            <div className="form-container">
                <form onSubmit={registerUser} className='form'>
                    <h2>Register</h2>
                    <div className="input-container">
                        <input 
                            onChange={handleChange}
                            name="First_name" 
                            value={userData.First_name} 
                            placeholder='First name' 
                            required />
                    </div>
                    <div className="input-container">
                        <input 
                            onChange={handleChange}
                            name="Last_name" 
                            value={userData.Last_name} 
                            placeholder='Last name' 
                            required />
                    </div>
                    <div className="input-container">
                        <input 
                            onChange={handleChange}
                            type="email" 
                            name="Email_address" 
                            value={userData.Email_address} 
                            placeholder='Email' 
                            required />
                    
                    </div>
                    <div className="input-container">
                        <input 
                            onChange={handleChange}
                            type="password" 
                            name="password" 
                            value={userData.password} 
                            placeholder='Password' 
                            required />
                    </div>
                    <button  type="submit" className='form-button'>Register</button>
                    <div className="link">
                        Already have an account? <Link to="/login">Login</Link>
                    </div> 
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default UserRegistration;



