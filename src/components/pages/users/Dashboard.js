import React from "react";

import AccountCard from "../../elements/AccountCard";
import ProfileCard from "../../elements/ProfileCard";
import UpcomingReservations from "../../elements/UpcomingReservations";

import '../../styles/dashboard.css'


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <ProfileCard />
            <AccountCard />
            <UpcomingReservations />
            {/* ... any other dashboard items ... */}
        </div>
    );
};

export default Dashboard;

