


//   const headerColor = '#3f51b5'; // Example header color
//   const textColor = '#ffffff'; // Example text color
//   const columns = ['Day', 'Date', 'name', 'Lane', 'Max Swimmers', 'Time']; // Example column names

//   // Example data
//   const data = [
//     { Day: 'Monday', Date: 'Jan 2, 2024', name:'lapswim', Lane: 'Lane 1', 'Max Swimmers': 4 , Time: '6:00-7:00 AM'},
//     { Day: 'Tuesday', Date: 'Jan 3, 2024', name:'lapswim', Lane: 'Lane 2', 'Max Swimmers': 4 , Time: '6:00-7:00 AM'},
//     { Day: 'Wednesday', Date: 'Jan 4, 2024', name:'lapswim', Lane: 'Lane 3', 'Max Swimmers': 4 , Time: '6:00-7:00 AM'},
//     { Day: 'Thursday', Date: 'Jan 5, 2024', name:'lapswim', Lane: 'Lane 4', 'Max Swimmers': 4 , Time: '6:00-7:00 AM'},
//     { Day: 'Friday', Date: 'Jan 6, 2024', name:'lapswim', Lane: 'Lane 5', 'Max Swimmers': 4 , Time: '6:00-7:00 AM'},
//     { Day: 'Saturday', Date: 'Jan 7, 2024', name:'lapswim', Lane: 'Lane 6', 'Max Swimmers': 4 , Time: '6:00-7:00 AM'},

 
//   ];


import React, { useEffect, useState } from 'react';
import CreateTable from '../../elements/CreateTable';
import '../../../global.css';
import CreateSchedule from './CreateSchedule';
import { formatDate } from '../../../utils/utils';

const CurrentSchedule = ({ scheduleData }) => {
  const headerColor = '#3f51b5'; // Example header color
  const textColor = '#ffffff'; // Example text color
  const columns = ['Day', 'Date', 'Name', 'Lane', 'Max Swimmers', 'Time']; // Example column names

  return (
    <div>
      <h1>Current Schedule</h1>
      <CreateTable headerColor={headerColor} textColor={textColor} columns={columns} data={scheduleData} />
    </div>
  );
};



const LapswimSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Fetch schedule data from backend and update anytime the data changes
    fetch('/api/auth/lapSwimSchedule')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch lap swim schedules');
        }
        return response.json();
      })
      .then(data => {
        // Process the data here
        const processedData = data.map(item => {
          // Create Date objects for date, start time, and end time
          const dateObject = new Date(item.Date);
          const startTimeObject = new Date(`1970-01-01T${item.StartTime}Z`);
          const endTimeObject = new Date(`1970-01-01T${item.EndTime}Z`);
          
          // Use the formatDate function to get the day and the formatted date
          const day = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
          const formattedDate = formatDate(dateObject);
          
          // Format the time range, e.g., '6:00 AM - 7:00 AM'
          const formattedTime = `${startTimeObject.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - ${endTimeObject.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;

          return {
            ...item,
            Day: day,
            Date: formattedDate,
            Time: formattedTime
          };
        });
        setScheduleData(processedData); // Update state with processed data
      })
      .catch(error => {
        console.error('Error fetching lap swim schedules:', error);
      });
  }, []); 


  return (
    <div className='page-container'>
      <div className='lapswimSchedules'>
        <CurrentSchedule scheduleData={scheduleData} />
        <br /><br />
        <CreateSchedule typeOfSchedule="lapSwimSchedule"  />
      </div>
    </div>
  );
}

export default LapswimSchedule;
