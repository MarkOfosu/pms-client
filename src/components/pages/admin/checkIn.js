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
          fetchAllReservations(); // Refresh the list after check-in
        } catch (error) {
          console.error('Error during check-in:', error);
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
          </div>
          <div className='reservation-list'>
            <h2>Upcoming Reservations</h2>
            <div className='reservations-container'>
            <div className='search-user'>
            <h1>Search for User</h1>
            <input
              id='searchTerm'
              type='text'
              placeholder='Search by User Name or ID'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
              {filteredReservations.length > 0 ? (
                filteredReservations.map(reservation => (
                  <div key={reservation.ReservationID} className="reservation-card">
                    <p>User Name: {reservation.userName}</p>
                    <p>Reservation ID: {reservation.ReservationID}</p>
                    <p>User ID: {reservation.UserID}</p>
                    <p>Activity: {reservation.ActivityName}</p>
                    <p>Date: {reservation.Date}</p>
                    <p>Time: {reservation.StartTime} - {reservation.EndTime}</p>
                    <button 
                      className="check-in-button" 
                      onClick={() => handleCheckIn(reservation.ReservationID)}
                    >
                      Check In
                    </button>
                  </div>
                ))
              ) : (
                <div className='no-reservations-message'>
                  <p>No reservations found for the selected activity type or search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
      
             

export default CheckIn;
