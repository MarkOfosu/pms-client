import React, { useState, useEffect } from 'react';
import '../../styles/CheckIn.css';

const CheckIn = () => {
    const [allReservations, setAllReservations] = useState([]);
    const [upcomingReservations, setUpcomingReservations] = useState([]);
    const [checkedInReservations, setCheckedInReservations] = useState([]);
    const [activityType, setActivityType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchAllReservations();
    }, []);

    useEffect(() => {
        filterAndSortReservations();
    }, [activityType, searchTerm, allReservations]);

    const fetchAllReservations = async () => {
        try {
            const response = await fetch(`/api/auth/reservations`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setAllReservations(data.reservations || []);
        } catch (error) {
            console.error('Failed to fetch reservations', error);
        }
    };

    const filterAndSortReservations = () => {
        const filtered = allReservations.filter(reservation => {
            return (activityType ? reservation.activityname === activityType : true) &&
                   (searchTerm ? reservation.username.toLowerCase().includes(searchTerm.toLowerCase()) || reservation.userid.toString().includes(searchTerm) : true);
        });

        const upcoming = filtered.filter(res => !res.ischeckedin);
        const checkedIn = filtered.filter(res => res.ischeckedin);

        setUpcomingReservations(upcoming);
        setCheckedInReservations(checkedIn);
    };

    const handleActivityChange = (event) => {
        setActivityType(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCheckIn = async (reservationId) => {
        try {
            const response = await fetch(`/api/auth/checkin/reservation/${reservationId}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to check in');
            alert(`Checked in reservation ID: ${reservationId}`);
            fetchAllReservations();
        } catch (error) {
            console.error('Error during check-in:', error);
            alert(error.message || 'An error occurred during check-in');
        }
    };

    return (
        <div className='check-in'>
            <h1 className='center-align'>Check In</h1>
            <div className='activity-select'>
                <select onChange={handleActivityChange} value={activityType}>
                    <option value="">Select Activity Type</option>
                    <option value='Lap Swim'>Lap Swim</option>
                    <option value='Aqua Aerobics'>Aqua Aerobics</option>
                    <option value='Swim Lessons'>Swim Lessons</option>
                    <option value='Family Swim'>Family Swim</option>
                    <option value='Swim Team'>Swim Team</option>
                    <option value='Water Polo'>Water Polo</option>
                </select>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <input
                    type='text'
                    placeholder='Search by User Name or ID'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <h2>Upcoming Reservations</h2>
            <div className='reservations-container'>
                {upcomingReservations.map(reservation => (
                    <div key={reservation.reservationid} className="reservation-card">
                        <p>User Name: {reservation.username}</p>
                        <p>Reservation ID: {reservation.reservationid}</p>
                        <p>Activity: {reservation.activityname}</p>
                        <p>Date: {reservation.date}</p>
                        <p>Time: {reservation.starttime} - {reservation.endtime}</p>
                        <button 
                          className="check-in-button" 
                          onClick={() => handleCheckIn(reservation.reservationid)}
                        >
                          Check In
                        </button>
                    </div>
                ))}
            </div>
            <h2>Checked In Reservations</h2>
            <div className='reservations-container'>
                {checkedInReservations.map(reservation => (
                    <div key={reservation.reservationid} className="reservation-card">
                        <p>User Name: {reservation.username}</p>
                        <p>Reservation ID: {reservation.reservationid}</p>
                        <p>Activity: {reservation.activityname}</p>
                        <p>Date: {reservation.date}</p>
                        <p>Time: {reservation.starttime} - {reservation.endtime}</p>
                        <p style={{ color: 'green' }}>Checked In</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CheckIn;
