import React, { useEffect, useState} from 'react'
import "../../../global.css"

const  LapswimSchedule = () => {

   // - show snapshot of current lapswim schedule in a box at top of page 
  // - with heading ‘Current scheule’
  // - show day,date,  lane , session time(four sessions per day) and max swimmers
  // - show button to edit schedule
  // - show button to delete schedule
  // - show button to add new schedule

  // - show form to add new schedule
  // - with heading ‘Create Schedule’
  // - show dropdown to select pool lane number(1-6)
  // - show date picker
  // - show start time picker
  // - show end time picker
  // - show input for max swimmers
  // - show button to create schedule
  //on submit create schedule , add to lapswim schedule db

  const [scheduleData, setscheduleData] = useState([{
    day: '', 
    date: '',
    lane: '',
    startTime: '',
    endTime: '',
    maxSwimmers: ''
  }]);

 
  const handleChange = (e) => {
    setscheduleData({ ...scheduleData, [e.target.name]: e.target.value });
  }

  const handleCreateSchedule= async (e) => {
      e.preventDefault();

      const newSchedule = {
        date: scheduleData.date,
        lane: scheduleData.lane,
        startTime: scheduleData.startTime,
        endTime: scheduleData.endTime,
        maxSwimmers: scheduleData.maxSwimmers, 
      }

      if (newSchedule.startTime > newSchedule.endTime) {
        alert('Start time cannot be after end time');
        return;
      }
      
      if (newSchedule.date === '' || newSchedule.lane === '' || newSchedule.startTime === '' || newSchedule.endTime === '' || newSchedule.maxSwimmers === '') {
        alert('Please fill out all fields');
        return;
      }

      fetch('/api/auth/lapswimSchedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSchedule),
      })
      .then(response => {
        console.log('Response from server:', response);
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(data.message || 'Error registering user');
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Schedule created successfully');
        setscheduleData({
          date: '',
          lane: '',
          startTime: '',
          endTime: '',
          maxSwimmers: ''
        })
      }
    );
  }


  
  return (
    <div className='page-container'>
      <div className='lapswimSchedule'>
        <h1 > Current schedule</h1>
        <br />  <br /> <br />  <br /> 

        

        <h1 >Add New Schedule</h1> 
          <br /> 
          <h2>Lane</h2>
          <select id='lane' name='lane' required value={scheduleData.lane} onChange={handleChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>  
          </select>
          <br />  <br /> 
          <form>
              <label for='date'>Date</label>
              <input type='date' id='date' name='date' onChange={handleChange} required></input>
              <label for='startTime'>Start Time</label>
              <input type='time' id='startTime' name='startTime'  onChange={handleChange} required></input>
              <label for='endTime'>End Time</label>
              <input type='time' id='endTime' name='endTime' onChange={handleChange} required></input>
              <label for='maxSwimmers'>Max Swimmers</label>
              <input type='number' id='maxSwimmers' name='maxSwimmers' onChange={handleChange} required></input>
              <button type='submit' onClick={handleCreateSchedule}>Create</button>
          </form>
        
      </div>
    </div>
  )
}

export default LapswimSchedule;