import React, { useState, useEffect } from "react";


const ProfileCard = () => {
    const [profile, setProfile] = useState({
        lastName: "",
        firstName: "",
        title: "",
        email: "",
        address: "",
        dateOfBirth: "",
        profilePicture: null,
        profilePicturePreview: null, // This will hold the preview URL
    });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {

        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/users`);
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

    useEffect(() => {
        return () => {
            if (profile.profilePicturePreview) {
                // Cleanup the object URL on unmount or before creating a new one
                URL.revokeObjectURL(profile.profilePicturePreview);
            }
        };
    }, [profile.profilePicturePreview]);

      
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profilePicture') {
            const file = files[0];
            if (file) {
                const objectUrl = URL.createObjectURL(file);
                setProfile({ ...profile, profilePicture: file, profilePicturePreview: objectUrl });
            }
        } else {
            setProfile({ ...profile, [name]: value });
        }
    };
      
      

    const handleSaveProfile = async () => {
        const formData = new FormData();
        formData.append('email', profile.email);
        formData.append('address', profile.address);
        formData.append('dateOfBirth', profile.dateOfBirth);

        if (profile.profilePicture) {
            formData.append('profilePicture', profile.profilePicture);
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/update/user`, {
                method: 'PUT',
                credentials: 'include',
                body: formData, // Send as FormData
            });

            if (!response.ok) {
                throw new Error("Error updating user profile");
            }
            // Refresh profile or handle success
            const updatedProfile = await response.json();
            setProfile({ ...profile, profilePicture: updatedProfile.profileImage, profilePicturePreview: null });
            setEditMode(false); // Exit edit mode after saving
        } catch (error) {
            console.error("Error:", error);
        }
    };
      

    return (
        <div className="card-container">
        <h2 className="card-header">Profile</h2>
            <div className="card-container">
                <div>
                <img src={profile.profilePicturePreview || profile.profilePicture} alt="profile"  className="profile-picture"/>
                {editMode && <input type="file" name="profilePicture" onChange={handleInputChange} />}
                </div>
            
                <div className="info-container">
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
        </div>
    );
};

export default ProfileCard;
