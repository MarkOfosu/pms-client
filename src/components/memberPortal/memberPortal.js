//main page will be the login page
import Login from '../memberPortal/login';
import '../styles/home.css';
import '../../global.css';
import PortalNav from './portalNav';
import Footer from '../pages/footer'
import { useAuth } from '../../context/AuthContext';


const MemberPortal = () => {;  

    const { isLoggedIn } = useAuth();

    return (
        <div>
        <PortalNav />
        <div className='page-container'>
            {isLoggedIn ? <p>Welcome to the Member Portal</p> : <Login />}
        </div>
        <Footer />
        </div>
);
};

export default MemberPortal;