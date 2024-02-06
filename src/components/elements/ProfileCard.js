import React, { useState, useEffect } from "react";

const ProfileCard = ({ user }) => {

    const [profile, setProfile] = useState({
        lastName: "",
        firstName: "",
        title: "",
        email: "",
        phoneNumber: "",
        address: "",
        profilePicture: "",
    });

    useEffect(() => {
        fetch(`/api/auth/profile/${user.id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((profile) => {
                setProfile(profile);
            })
            .catch((err) => console.error(err));
    }, [user.id]);

    return (
        <div className="card-wrapper">
            <div> 
                <img src={profile.profilePicture} alt="profile" />

            
            </div>
            <div className="card-header">Profile</div>
            <div className="card-body">
                <div className="user-name">{user.firstName} {user.lastName}</div>
                <strong>Title:</strong> {profile.title}
                <br />
                <strong>Email:</strong> {profile.email}
                <br />
                <strong>Phone Number:</strong> {profile.phoneNumber}
                <br />
                <strong>Address:</strong> {profile.address}
            </div>
        </div>
    );

}

export default ProfileCard;