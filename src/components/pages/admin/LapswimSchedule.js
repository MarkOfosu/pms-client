import React, { useEffect, useState } from 'react';
import CreateTable from '../../elements/CreateTable';
import '../../../global.css';
import CreateSchedule from './CreateSchedule';
import { formatDate } from '../../../utils/utils';

const CurrentSchedule = ({ scheduleData }) => {
  const headerColor = '#3f51b5'; 
  const textColor = '#ffffff'; 
  const columns = ['Day', 'Date', 'Name', 'Lane', 'Max Swimmers', 'Time']; 

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
    fetch('/api/auth/lapSwimSchedule')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch lap swim schedules');
        }
        return response.json();
      })
      .then(data => {
        const processedData = data.map(item => {
          const dateObject = new Date(item.Date);
          const startTimeObject = new Date(`1970-01-01T${item.StartTime}Z`);
          const endTimeObject = new Date(`1970-01-01T${item.EndTime}Z`);
          
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
        setScheduleData(processedData); 
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
