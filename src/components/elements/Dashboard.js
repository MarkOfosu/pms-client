import React from "react";

import AccountCard from "./AccountCard";
import ProfileCard from "./ProfileCard";
import UpcomingReservations from "./UpcomingReservations";
import '../styles/dashboard.css';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const { authState } = useAuth();
    const { userType } = authState;

    return (
        <div className="dashboard-container">
            {userType === 1020 ? (
                <>
                    <UpcomingReservations />
                    <AccountCard />
                    <ProfileCard />
                </>
            ) 
            : userType === 1030 ? (
                <>
                    <ProfileCard />
                    <AccountCard />
                </>
            )
            : (
                <h1>Page Not Found</h1>
            )}
        </div>
    );
}


export default Dashboard;
