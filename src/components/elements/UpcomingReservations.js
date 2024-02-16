import React, { useState, useEffect } from 'react';

const UpcomingReservations = () => {
    const [upcomingReservations, setUpcomingReservations] = useState([]);

    useEffect(() => {
        const fetchUpcomingReservations = async () => {
            try {
                const response = await fetch('/api/auth//upcoming', {
                    method: 'GET',
                    credentials: 'include', // for sending cookies in cross-origin requests
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setUpcomingReservations(data.upcomingReservations);
            } catch (error) {
                console.error('Failed to fetch upcoming reservations', error);
            }
        };

        fetchUpcomingReservations();
    }, []);

    return (
        <div>
            <h2>Upcoming Reservations</h2>
            <ul>
                {upcomingReservations.map(reservation => (
                    <li key={reservation.ReservationID}>{reservation.ActivityName} on {reservation.Date}</li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingReservations;
