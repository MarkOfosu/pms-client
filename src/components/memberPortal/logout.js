// src/components/Logout.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../src/context/AuthContext';
import './logout.css';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let timeout;
    if (showTooltip) {
      // Hide the tooltip after 3 seconds
      timeout = setTimeout(() => {
        setShowTooltip(false);
        navigate('/'); // Navigate to home or login after logout
      }, 3000);
    }
    return () => clearTimeout(timeout); // Cleanup the timeout
  }, [showTooltip, navigate]);

  const handleLogoutClick = () => {
    logout();
    setShowTooltip(true); // Show the tooltip on click
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
