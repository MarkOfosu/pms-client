import React, { useState, useEffect } from 'react';
import '../styles/upcomingReservations.css'; 


const UpcomingReservations = () => {
    const [upcomingReservations, setUpcomingReservations] = useState([]);

    useEffect(() => {
        const fetchUpcomingReservations = async () => {
            try {
                const response = await fetch('/api/auth/upcoming/reservation', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setUpcomingReservations(data.upcomingReservations || []);
            } catch (error) {
                console.error('Failed to fetch upcoming reservations', error);
            }
        };
        fetchUpcomingReservations();
    }, []);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-header">Upcoming Reservations</h2>
            <div className='info-container'>
                {upcomingReservations.map((reservation) => (
                    <div key={reservation.ReservationID} className="reservation-card">
                        <p className="reservation-detail">{reservation.ActivityName}</p>
                        <span className="date">Date: {reservation.Date}</span>
                        {/* Add time display */}
                        <span className="time">Time: {reservation.StartTime} - {reservation.EndTime}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingReservations;
