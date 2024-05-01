import React, { useState, useEffect } from "react";
import '../styles/dashboard.css';


const AccountCard = ({ user }) => {
    const [profile, setProfile] = useState({
        accountBalance: 0,
        paymentDue: 0,
        membershipType: "",

    });

    
    useEffect(() => {
        const fetchUserAccount = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/account`);
                if (!response.ok) {
                    throw new Error("Error fetching user account");
                }
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchUserAccount();
    }
    , []);
    

       
    
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
