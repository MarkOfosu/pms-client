import React, { useState, useEffect, useRef } from 'react';
import { formatDate, formatTime, getDayOfWeek } from '../../../utils/utils';
import '../../styles/ReservationPage.css';
import '../../../global.css';
import '../../styles/Button.css';

const  ACTIVITY = {
    LAP_SWIM: { name: 'Lap Swim', id: 1 },
    AQUA_AEROBICS: { name: 'Aqua Aerobics', id: 2 },
    SWIM_LESSONS: { name: 'Swim Lessons', id: 3 },
        
};

const ActivitySelection = ({ selectedActivity, handleActivityChange }) => {
    return (
        <div className="activity-selection">
            <h2>Select Activity</h2>
            <select id="activity" name="activity" value={selectedActivity} onChange={handleActivityChange}>
                <option value="">Select an activity</option>
                {Object.entries(ACTIVITY).map(([key, { name }]) => (
                    <option key={key} value={key}>{name}</option> // Use name for display
                ))}
            </select>
        </div>
    );
};

     


const ReservationPage = () => {
    const [selectedActivity, setSelectedActivity] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [reservationError, setReservationError] = useState('');
    const [scheduleData, setScheduleData] = useState([]);
    const slotRef = useRef(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch('/api/auth/lapSwimSchedule');
                if (!response.ok) {
                    throw new Error('Failed to fetch lap swim schedules');
                }
                const data = await response.json();
                const processedData = data.map(item => ({
                    ...item,
                    Day: getDayOfWeek(item.Date),
                    Date: formatDate(item.Date),
                    Time: `${formatTime(item.StartTime)} - ${formatTime(item.EndTime)}`,
                    Lane: item.LaneNumber,
                    'Max Swimmers': item.MaxSwimmers,
                    ScheduleID: item.ScheduleID
                }));
                setScheduleData(processedData);
            } catch (error) {
                console.error('Error fetching lap swim schedules:', error);
            }
        };

        fetchSchedule();
        const intervalId = setInterval(fetchSchedule, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (slotRef.current && !slotRef.current.contains(event.target)) {
                setSelectedSlot('');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleActivityChange = (e) => {
        setSelectedActivity(e.target.value);
        setSelectedSlot('');
        setReservationError('');
    };

    const handleSlotSelection = (scheduleID) => {
        setSelectedSlot(scheduleID);
        setReservationError('');
    };

    // const handleSubmit = () => {
    //     if (!selectedActivity || !selectedSlot) {
    //         setReservationError('Please select time slot.');
    //         return;
    //     }

    //     const selectedSchedule = scheduleData.find(schedule => schedule.ScheduleID === selectedSlot);
    //     const { Day, Date, Time, Lane } = selectedSchedule;

    //     alert(`Reserved ${selectedActivity} on ${Day}, ${Date} at ${Time} in Lane ${Lane}`);
    //     setSelectedSlot('');
    // };

    const handlecreateReservation = async () => {
        if (!selectedActivity || !selectedSlot) {
            setReservationError('Please select an activity and time slot.');
            return;
        }

        const activityTypeId = ACTIVITY[selectedActivity].id;
    
        try {
            const response = await fetch('/api/auth/create/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include the Authorization header if needed, e.g.,
                    // Authorization: `Bearer ${yourAuthTokenHere}`,
                },
                body: JSON.stringify({
                    scheduleId: selectedSlot,
                    activityTypeId: activityTypeId, // Make sure your server accepts this
                }),
                credentials: 'include', // For sending cookies in cross-origin requests
            });
    
            if (!response.ok) {
                throw new Error('Failed to create reservation');
            }
    
            const selectedSchedule = scheduleData.find(schedule => schedule.ScheduleID === selectedSlot);
                const { Day, Date, Time, Lane } = selectedSchedule;
        
                alert(`Reserved ${selectedActivity} on ${Day}, ${Date} at ${Time} in Lane ${Lane}`);
                setSelectedSlot('');
            
            setSelectedSlot(''); // Reset selected slot on successful reservation
        } catch (error) {
            console.error('Error creating reservation:', error);
            setReservationError(error.message);
        }
    };

    return (
        <div className="page-container">
            <div className="reservation-container">
                <h1>Make a Reservation</h1>
                <ActivitySelection selectedActivity={selectedActivity} handleActivityChange={handleActivityChange} />

                {selectedActivity === 'LAP_SWIM' && (
                    scheduleData.length > 0 ? (
                        <div className="slots" ref={slotRef}>
                            {scheduleData.map((schedule, index) => {
                                const { Day, Date, Time, ScheduleID } = schedule;
                                return (
                                    <div
                                        key={index}
                                        className={`slot ${selectedSlot === ScheduleID ? 'selected' : ''}`}
                                        onClick={() => handleSlotSelection(ScheduleID)}
                                    >
                                        <h3>{Day}</h3>
                                        <p>{Date}</p>
                                        <p>{Time}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>Loading schedule...</p>
                    )
                )}
                <br />
                <br />
                <button onClick={handlecreateReservation} className='btn'>Reserve</button>
                {reservationError && <p className="error">{reservationError}</p>}
            </div>
        </div>
    );
};

export default ReservationPage;
