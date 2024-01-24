//Button.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../styles/Button.css';
import logoutIcon from '../../resource/logout.svg';


const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        logout();
        alert("You are logged out");
        navigate('/');
    }else{
        alert("You are not logged in");
        navigate('/');  
    }
}

    return (
        
        <button onClick={handleLogoutClick} className='btn'>
        Log Out
        <img src={logoutIcon} alt="Logout" />
        </button>
        
    )
}

export default Logout;

