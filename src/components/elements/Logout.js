//Button.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../styles/Button.css';
import logoutIcon from '../../resource/logout.svg';
import { Link } from 'react-router-dom';


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
        <Link to='/logout'>
            <button onClick={handleLogoutClick} className='btn'>
                Logout
            <img src={logoutIcon} alt="Logout" />
            </button>
        </Link>
    )
}

export default Logout;

