import React, { useState, useEffect } from "react";
import '../styles/dashboard.css';


const AccountCard = ({ user }) => {
    const [profile, setProfile] = useState({
        AccountBalance: 0,
        PaymentDue: 0,
        AccountDebit: 0,
        AccountCredit: 0,
    });

    
    useEffect(() => {
        const fetchUserAccount = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/account`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Error fetching user account");
                }
                const data = await response.json();
                setProfile(data.account);
                console.log("Profile:", profile);
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
                    <strong>Account Balance:</strong> ${profile.AccountBalance}
                    <br />
                    <strong>Payment Due:</strong> ${profile.PaymentDue}
                
                </div>
            </div>
        </div>
    );
};


export default AccountCard;
