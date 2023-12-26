// src/components/Logout.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './logout.css';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let timeout;
    if (showTooltip) {
      timeout = setTimeout(() => {
        setShowTooltip(false);
        navigate('/'); 
      }, 3000);
    }
    return () => clearTimeout(timeout); 
  }, [showTooltip, navigate]);

  const handleLogoutClick = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      logout();
      setShowTooltip(true);
    }
    
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogoutClick} className="logout-button">
        Logout
      </button>
      {showTooltip && <div className="logout-tooltip">Logout successful!</div>}
    </div>
  );
};

export default Logout;
