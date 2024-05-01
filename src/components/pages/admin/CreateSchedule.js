import React, { useState } from 'react';
import '../../../global.css';

const CreateSchedule = ({ typeOfSchedule }) => {

  const initialState = {
    lapSwimSchedule: {
      date: '',
      lane: '',
      startTime: '',
      endTime: '',
      maxSwimmers: ''
    },
    swimLessonSchedule: {
      date: '',
      lane: '',
      startTime: '',
      endTime: '',
      maxParticipants: '',
      instructor: ''
    }
  };

const [scheduleData, setScheduleData] = useState(initialState[typeOfSchedule]);

  const handleChange = (e) => {
    setScheduleData({ ...scheduleData, [e.target.name]: e.target.value });
  };

  const handleCreateSchedule = async (e) => {
    e.preventDefault();

    if (typeOfSchedule === 'lapSwimSchedule') {
            const newSchedule = {
              date: scheduleData.date,
             lane: scheduleData.lane,
              startTime: scheduleData.startTime,
              endTime: scheduleData.endTime,
              maxSwimmers: scheduleData.maxSwimmers,
              Name: 'Lap Swim'
            };;
          
            if (newSchedule.startTime > newSchedule.endTime) {
              alert('Start time cannot be after end time');
              return;
            }
          
            if (
              newSchedule.date === '' ||
              newSchedule.lane === '' ||
              newSchedule.startTime === '' ||
              newSchedule.endTime === '' ||
              newSchedule.maxSwimmers === ''
            ) {
              alert('Please fill out all fields');
              return;
            }
          
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/create/lapSwimSchedule`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSchedule),
            })
              .then((response) => {
                if (!response.ok) {
                  return response.json().then((data) => {
                    throw new Error(data.message || 'Error creating schedule');
                  });
                }
                return response.json();
              })
              .then((data) => {
                alert('Schedule created successfully');
                setScheduleData( 
                    initialState.lapSwimSchedule 
                );
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          };

            if (typeOfSchedule === 'swimLessonSchedule') {
                const newSchedule = {
                    date: scheduleData.date,
                    lane: scheduleData.lane,
                    startTime: scheduleData.startTime,
                    endTime: scheduleData.endTime,
                    maxParticipants: scheduleData.maxParticipants,
                    instructor: scheduleData.instructor,
                };
                
                if (newSchedule.startTime > newSchedule.endTime) {
                    alert('Start time cannot be after end time');
                    return;
                }
                
                if (
                    newSchedule.date === '' ||
                    newSchedule.lane === '' ||
                    newSchedule.startTime === '' ||
                    newSchedule.endTime === '' ||
                    newSchedule.maxParticipants === '' ||
                    newSchedule.instructor === ''
                ) {
                    alert('Please fill out all fields');
                    return;
                }
                
                fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/create/swimLessonSchedule`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newSchedule),
                })
                    .then((response) => {
                    if (!response.ok) {
                        return response.json().then((data) => {
                        throw new Error(data.message || 'Error creating schedule');
                        });
                    }
                    return response.json();
                    })
                    .then((data) => {
                    alert('Schedule created successfully');
                    setScheduleData(
                        initialState.swimLessonSchedule
                    );
                    })
                    .catch((error) => {
                    console.error('Error:', error);
                    });
                }
        };

  return (
    

    <div className='create-schedule'>
        <h1>Add New {typeOfSchedule === 'lapSwimSchedule' ? 'Lap Swim' : 'Swim Lesson'} Schedule</h1>
        <br />
        <h2>Lane</h2>
        <select id='lane' name='lane' required value={scheduleData.lane} onChange={handleChange}>
            <option value=''>Select lane</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>  
        </select>
        <br /> 
        <h2>Schedule</h2>

        <form>
            <label htmlFor='date'>Date</label>
            <input type='date' id='date' name='date' onChange={handleChange} required></input>
            <label htmlFor='startTime'>Start Time</label>
            <input type='time' id='startTime' name='startTime' onChange={handleChange} required></input>
            <label htmlFor='endTime'>End Time</label>
            <input type='time' id='endTime' name='endTime' onChange={handleChange} required></input>
            {typeOfSchedule === 'lapSwimSchedule' && (
            <>
                <label htmlFor='maxSwimmers'>Max Swimmers</label>
                <input type='number' id='maxSwimmers' name='maxSwimmers' onChange={handleChange} required></input>
            </>
            )}
            {typeOfSchedule === 'swimLessonSchedule' && (
            <>
                <label htmlFor='maxParticipants'>Max Participants</label>
                <input type='number' id='maxParticipants' name='maxParticipants' onChange={handleChange} required></input>
                <label htmlFor='instructor'>Instructor</label>
                <input type='text' id='instructor' name='instructor' onChange={handleChange} required></input>
            </>
            )}
            <button type='submit' onClick={handleCreateSchedule}>Create</button>
        </form>
    </div>
  );
};

export default CreateSchedule;




