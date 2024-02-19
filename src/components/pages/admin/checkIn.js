import React, { useState, useEffect } from 'react';
import '../../styles/CheckIn.css';

const CheckIn = () => {
    const [allReservations, setAllReservations] = useState([]);
    const [filteredReservations, setFilteredReservations] = useState([]);
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
            // Ensure data is in the expected format, potentially logging it for debugging
            console.log(data);
            setAllReservations(data.reservations || []);
        } catch (error) {
            console.error('Failed to fetch reservations', error);
        }
    };
    

    const filterAndSortReservations = () => {
        let filtered = Array.isArray(allReservations) ? allReservations : [];
    
        if (activityType) {
            filtered = filtered.filter(reservation => reservation.ActivityName === activityType);
        }
    
        if (searchTerm) {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(
                reservation =>
                    (reservation.userName && reservation.userName.toLowerCase().includes(lowercasedSearchTerm)) ||
                    (reservation.UserID && reservation.UserID.toString().includes(searchTerm)) // Check if UserID exists and then compare
            );
        }
    
        // Sort by Date and Time
        filtered.sort((a, b) => new Date(a.Date) - new Date(b.Date) || new Date('1970/01/01 ' + a.StartTime) - new Date('1970/01/01 ' + b.StartTime));
    
        setFilteredReservations(filtered);
    };
    
    

    const handleActivityChange = (event) => {
        setActivityType(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='check-in'>
            <h1 className='center-align'>Check In</h1>
            <div>
                <select onChange={handleActivityChange} value={activityType}>
                    <option value="">Select Activity Type</option>
                    <option value='Lap Swim'>Lap Swim</option>
                    <option value='Aqua Aerobics'>Aqua Aerobics</option>
                    <option value='Swim Lessons'>Swim Lessons</option>
                    <option value='Family Swim'>Family Swim</option>
                    <option value='Swim Team'>Swim Team</option>
                    <option value='Water Polo'>Water Polo</option>
                </select>
            </div>
            <div>
                <h2>Upcoming Reservations</h2>
                <div>
                
                    {filteredReservations.map(reservation => (
                        <div key={reservation.ReservationID}>
                            <p>User Name: {reservation.userName}</p>
                            <p>Reservation ID: {reservation.ReservationID}</p>
                            <p>User ID: {reservation.UserID}</p>
                            <p>Activity: {reservation.ActivityName}</p>
                            <p>Date: {reservation.Date}</p>
                            <p>Time: {reservation.StartTime} - {reservation.EndTime}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Search for User</h1>
                <div>
                    <input
                        id='searchTerm'
                        type='text'
                        name='searchTerm'
                        placeholder='Search by Name or ID'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckIn;
