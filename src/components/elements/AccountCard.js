import React, { useState, useEffect } from "react";
import '../styles/dashboard.css';


const AccountCard = ({ user }) => {
    const [profile, setProfile] = useState({
        accountBalance: 0,
        paymentDue: 0,
        membershipType: "",

    });

    
    useEffect(() => {
        fetch(`auth/api/profiles`)
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
    }, []);
    
    return (
        <div className="card-container">
            <h2 className="card-header">Account</h2>
            <div className="card-container">
                <div className="info-container">
                    <strong>Membership Type:</strong> {profile.membershipType}
                    <br />
                    <strong>Account Balance:</strong> ${profile.accountBalance}
                    <br />
                    <strong>Payment Due:</strong> ${profile.paymentDue}
                
                </div>
            </div>
        </div>
    );
};

export default AccountCard;
