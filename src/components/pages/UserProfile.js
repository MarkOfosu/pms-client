import person from "../../resource/person.svg"
import { useAuth } from "../../context/AuthContext"
import '../../global.css'



const UserProfile = () => {
    const { authState } = useAuth();
    const { firstName, profileImage } = authState;

    const serverUrl = process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_BACKEND_URL 
    : process.env.REACT_APP_BACKEND_URL_DEV;

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
