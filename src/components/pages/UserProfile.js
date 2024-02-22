import person from "../../resource/person.svg"
import { useAuth } from "../../context/AuthContext"
import '../../global.css'



const UserProfile = () => {
    const { authState } = useAuth();
    const { firstName, profileImage } = authState;

    const serverUrl = 'http://localhost:5001';

    const imageUrl = profileImage ? `${serverUrl}/uploads/${profileImage}` : person;
    console.log(imageUrl);
    console.log('serverUrl', serverUrl);


    return (
        <div className="userProfile">
            <div className="userProfile__container">
                <div className="userProfile__image">
                {profileImage ? <img src={imageUrl} alt="profile" /> : <img src={person} alt="profile" />}
                </div>
                <div className="userProfile__name">
                    <h1>{firstName}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
