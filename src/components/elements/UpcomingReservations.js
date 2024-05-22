import React, { useState, useEffect } from 'react';
import { formatTime, formatDate } from '../../utils/utils';

const UpcomingReservations = () => {
    const [upcomingReservations, setUpcomingReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchUpcomingReservations = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/upcoming/reservations`, {
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
            } finally {
                setIsLoading(false);
            }
        };
        fetchUpcomingReservations();
    }, []);

    return (
        <div className="card-container">
            <h2 className="card-header">Upcoming Reservations</h2>
            <div className='info-container'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    upcomingReservations.length === 0 ? (
                        <div>You have no upcoming reservations</div>
                    ) : (
                        upcomingReservations.map((reservation) => (
                            <div key={reservation.ReservationID} className="reservation-card">
                                <p className="reservation-detail">{reservation.ActivityName}</p>
                                <span className="date">Date: {formatDate(reservation.Date)}</span>
                                <span className="time">Time: {formatTime(reservation.StartTime)} - {formatTime(reservation.EndTime)}</span>
                            </div>
                        ))
                    )
                )}
            </div>
        </div>
    );
}

export default UpcomingReservations;
