
import Login from '../elements/login';
import '../../global.css';
import '../styles/form.css';
import Footer from '../elements/footer';
import UserRegistration from '../elements/userRegistration';


const MemberPage = () => {
    return (
        <>
           
            <div className='memberPage'>
                <div className='page-container'>
                <UserRegistration/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MemberPage;

