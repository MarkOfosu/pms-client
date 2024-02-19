import React, { useState, useEffect } from 'react';

const UpcomingReservations = () => {
    const [upcomingReservations, setUpcomingReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const fetchUpcomingReservations = async () => {
            try {
                const response = await fetch('/api/auth/upcoming/reservations', {
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
                setError('Failed to fetch upcoming reservations');
            } finally {
                setIsLoading(false);
            }
        };
        fetchUpcomingReservations();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (upcomingReservations.length === 0) return <div>No upcoming reservations.</div>;

    return (
        <div className="card-container">
            <h2 className="card-header">Upcoming Reservations</h2>
            <div className='info-container'>
                {upcomingReservations.map((reservation) => (
                    <div key={reservation.ReservationID} className="reservation-card">
                        <p className="reservation-detail">{reservation.ActivityName}</p>
                        <span className="date">Date: {reservation.Date}</span>
                        <span className="time">Time: {reservation.StartTime} - {reservation.EndTime}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingReservations;
