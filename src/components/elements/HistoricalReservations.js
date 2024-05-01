import React, { useState, useEffect } from 'react';

const HistoricalReservations = () => {
    const [historicalReservations, setHistoricalReservations] = useState([]);

    useEffect(() => {
        const fetchHistoricalReservations = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/history`, {
                    method: 'GET',
                    credentials: 'include', // for sending cookies in cross-origin requests
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setHistoricalReservations(data.historicalReservations);
            } catch (error) {
                console.error('Failed to fetch historical reservations', error);
            }
        };

        fetchHistoricalReservations();
    }, []);

    return (
        <div>
            <h2>Historical Reservations</h2>
            <ul>
                {historicalReservations.map(reservation => (
                    <li key={reservation.ReservationID}>{reservation.ActivityName} on {reservation.Date}</li>
                ))}
            </ul>
        </div>
    );
};

export default HistoricalReservations;
