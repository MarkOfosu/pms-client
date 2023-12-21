//src/components/pages/login.js
import React, { useState } from 'react';
import '../styles/form.css';
import Footer from '../pages/footer'
import {Link} from 'react-router-dom';
import '../../global.css'
import { useNavigate } from 'react-router-dom';



const Login = () => {

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
             
              navigate('/users');
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
        <Footer />
      </div>
        
      );

      

}

export default Login;
