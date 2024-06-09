import React, { useState, useEffect, useRef } from 'react';
import { formatDate, formatTime, getDayOfWeek } from '../../../utils/utils';
import '../../styles/ReservationPage.css';
import '../../../global.css';
import '../../styles/Button.css';

const ActivitySelection = ({ activities, selectedActivity, handleActivityChange }) => {
    return (
        <div className="activity-selection">
            <h2>Select Activity</h2>
            <select id="activity" name="activity" value={selectedActivity} onChange={handleActivityChange}>
                <option value="">Select an activity</option>
                {Object.values(activities).map((activity) => (
                    <option key={activity.id} value={activity.id}>
                        {activity.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

const ReservationPage = () => {
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [reservationError, setReservationError] = useState('');
    const [scheduleData, setScheduleData] = useState([]);
    const slotRef = useRef(null);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/activities`);
                if (!response.ok) throw new Error('Failed to fetch activities');
                const dataArray = await response.json();
                const dataObject = dataArray.reduce((acc, activity) => {
                    acc[activity.name] = { name: activity.name, id: activity.id };
                    return acc;
                }, {});
                setActivities(dataObject);

                // Set "Lap Swim" as the default selected activity if it exists
                if (dataObject['Lap Swim']) {
                    setSelectedActivity(dataObject['Lap Swim'].id.toString());
                }
            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };

        fetchActivities();
    }, []);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/lapSwimSchedule`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
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

    const handlecreateReservation = async () => {
        if (!selectedActivity || !selectedSlot) {
            setReservationError('Please select slot.');
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/create/reservation`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    activityID: selectedActivity,
                    scheduleID: selectedSlot,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to create reservation: ${errorData.message || 'Unknown error'}`);
            }

            const selectedSchedule = scheduleData.find(schedule => schedule.ScheduleID === selectedSlot);
            alert(`Reservation created successfully for ${selectedActivity} on ${selectedSchedule.Date} at ${selectedSchedule.Time}`);
        } catch (error) {
            console.error('Error creating reservation:', error);
            setReservationError(error.message);
        }
    };

    const selectedActivityName = Object.values(activities).find(activity => activity.id.toString() === selectedActivity)?.name;

    return (
        <div className="page-container">
            <div className="reservation-container">
                <h1>Make a Reservation</h1>
                <ActivitySelection activities={activities} selectedActivity={selectedActivity} handleActivityChange={handleActivityChange} />

                {selectedActivityName === "Lap Swim" && (
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
