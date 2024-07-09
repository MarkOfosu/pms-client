import React, { useState, useEffect } from "react";
import '../styles/dashboard.css';

const AccountCard = ({ user }) => {
    const [profile, setProfile] = useState({
        AccountBalance: null,
        PaymentDue: null,
        AccountDebit: null,
        AccountCredit: null,
    });

    useEffect(() => {
        const fetchUserAccount = async () => {
            try {
                const response = await fetch(`/api/auth/account`, {
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
                setProfile(data.account || {}); // Ensure there's always an object to prevent errors
            } catch (error) {
                console.error("Error fetching account details:", error);
                setProfile({
                    AccountBalance: null,
                    PaymentDue: null,
                    AccountDebit: null,
                    AccountCredit: null
                }); // Reset profile if there's an error
            }
        };
        fetchUserAccount();
    }, []);

    // Helper function to format account figures or display a placeholder
    const formatFigure = (figure) => {
        return figure !== null && figure !== undefined ? `$${figure.toFixed(2)}` : '-';
    };
    
    return (
        <div className="card-container">
            <h2 className="card-header">Account</h2>
            <div className="info-container">   
                <strong>Account Balance:</strong> {formatFigure(profile.AccountBalance)}
                <br />
                <strong>Payment Due:</strong> {formatFigure(profile.PaymentDue)}
            </div>
        </div>
    );
};

export default AccountCard;
