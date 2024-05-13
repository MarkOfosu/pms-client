import person from "../../resource/person.svg"
import { useAuth } from "../../context/AuthContext"
import '../../global.css';


const UserProfile = () => {
    const { authState } = useAuth();
    const { firstName, profileImage } = authState; 

    return (
        <div className="userProfile">
            <div className="userProfile__container">
                <div className="userProfile__image">
                {profileImage ?  <img src={profileImage} alt="profile" /> : <img src={person} alt="profile" />}
                </div>
                <div className="userProfile__name">
                    <h1>{firstName}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
