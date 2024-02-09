import React, { useState, useEffect } from "react";

const ProfileCard = () => {
    const [profile, setProfile] = useState({
        lastName: "",
        firstName: "",
        title: "",
        email: "",
        address: "",
        dateOfBirth: "",
        profilePicture: Blob,
    });
    const [editMode, setEditMode] = useState(false);
    console.log(profile);

    useEffect(() => {

        const fetchProfile = async () => {
            try {
                const response = await fetch(`/api/auth/users`);
                if (!response.ok) {
                    throw new Error("Error fetching user profile");
                }
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchProfile();
    }, []);
      

    const handleInputChange = (e) => {
        // Update the profile state with the new input value
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = () => {
        // Send updated profile data to the server
        fetch(`/api/auth/update/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error updating user profile");
            }
            // Optionally handle success
            setEditMode(false); // Exit edit mode after saving
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div className="page-container">
            <div>
                <img src={profile.profilePicture} alt="profile" /> {editMode ? <input type="file" name="profilePicture" onChange={handleInputChange} /> : null }
            </div>
            <div className="card-header">Profile</div>
            <div className="card-body">
                <div className="user-name">{profile.firstName} {profile.lastName}</div>
                <strong>Title:</strong> 
                <br />
                <strong>Email:</strong> {editMode ? <input type="email" name="email" value={profile.email} onChange={handleInputChange} /> : profile.email}
                <br />
                <strong>Date of Birth:</strong> {profile.dateOfBirth} {editMode ? <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleInputChange} /> : null}
                <br />
                <strong>Address:</strong> {editMode ? <input type="text" name="address" value={profile.address} onChange={handleInputChange} /> : profile.address}
                <br />
                {editMode ?   
                    <div>
                    <button onClick={handleSaveProfile}>Save</button> 
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                    </div>
                    : 
                    <button onClick={() => setEditMode(true)}>Edit</button>}
            </div>
        </div>
    );
};

export default ProfileCard;
