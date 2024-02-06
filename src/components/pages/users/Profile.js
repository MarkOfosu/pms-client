import React from "react";

import AccountCard from "../../elements/AccountCard";
import ProfileCard from "../../elements/ProfileCard";


const StyleSheet = {
    profile: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: 'row',
      
    },
};


const Profile = () => {

    return (
        <div className="profile" style={StyleSheet.profile}>
        <ProfileCard user={{firstName: "Mark", lastName: "Ofosu", id: 1}} />
        <br />
        <AccountCard  user={{firstName: "Mark", lastName: "Ofosu", id: 1}} />
    </div>
    )
}
        

export default Profile;
