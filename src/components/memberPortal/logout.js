// src/components/Logout.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './logout.css';
import logoutIcon from '../../resource/logout.svg';
import Tooltip from '../tooltip';

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
    <Tooltip content="Logout" direction="right">
      <button onClick={handleLogoutClick} className="logout-button">
        <img src={logoutIcon} alt="Logout" />
        Log Out
      </button>
    </Tooltip>
      {showTooltip && <div className="logout-tooltip">Logout successful!</div>}
    </div>
  );
};

export default Logout;
