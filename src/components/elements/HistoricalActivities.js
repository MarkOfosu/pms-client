import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

// Component for each individual activity
const ActivityItem = ({ activity }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="activity-item">
            <div className="activity-summary" onClick={() => setIsExpanded(!isExpanded)}>
                <h4>{activity.ActivityName}</h4>
                <p>Date: {activity.Date}</p>
            </div>
            {isExpanded && (
                <div className="activity-details">
                    <p>Details: {activity.Details}</p>
                    <p>Time: {activity.StartTime} -{activity.EndTime} </p>
                    <p>Reserved by: {activity.FirstName} {activity.LastName}</p>
                </div>
            )}
        </div>
    );
};


const HistoricalActivities = ({ userId }) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch historical activities from the server
    useEffect(() => {
        const fetchHistoricalActivities = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/auth/history`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch historical activities');
                }
                const data = await response.json();
                setActivities(data.historicalReservations);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHistoricalActivities();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="card-container">
            <h2 className="card-header">Historical Activities</h2>
            <div className="info-container">
                {activities.length > 0 ? (
                    activities.map(activity => (
                        <ActivityItem key={activity.ReservationID} activity={activity} />
                    ))
                ) : (
                <div>No historical activities found</div>
                )}
            </div>        
        </div>
    );
}

export default HistoricalActivities;
