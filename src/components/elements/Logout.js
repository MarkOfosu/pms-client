//Button.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../styles/Button.css';
import logoutIcon from '../../resource/logout.svg';
import { Link } from 'react-router-dom';



const Logout = () => {
    const { authState, logout } = useAuth();


  const { isLoggedIn } = authState;
  const navigate = useNavigate();

 
  const handleLogoutClick = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
        alert('You are not logged in');
        return;
    }
    logout();
    navigate('/');
    
    alert('You are now logged out');
};
       
    return (
        <Link >
            <button onClick={handleLogoutClick} className='logout-btn btn'>
                Logout
                {/*<div className="btn-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>*/}
            </button>
        </Link>
    )
}

export default Logout;

