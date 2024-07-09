import React, { useEffect, useState } from 'react';
import '../../../global.css';
import CreateSchedule from './CreateSchedule';
import { formatDate, formatTime, getDayOfWeek } from '../../../utils/utils';
import { CurrentSchedule } from '../../elements/CurrentSchedule';

const LapswimSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchSchedule = () => {
      fetch(`/api/auth/lapSwimSchedule`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log('Received data:', response);
          if (!response.ok) throw new Error('Failed to fetch lap swim schedules');
          return response.json();
        })
        .then(data => {
          const processedData = data.map(item => {
            return {
              Day: getDayOfWeek(item.date),
              Date: formatDate(item.date),
              Time: `${formatTime(item.starttime)} - ${formatTime(item.endtime)}`,
              Lane: item.lanenumber,
              'Max Swimmers': item.maxswimmers
            };
          });
          setScheduleData(processedData);
        })
        .catch(error => console.error('Error fetching lap swim schedules:', error));
    };

    fetchSchedule();
    const intervalId = setInterval(fetchSchedule, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='page-container'>
      <div className='lapswimSchedules'>
        <CurrentSchedule scheduleData={scheduleData} />
        <br /><br />
        <CreateSchedule typeOfSchedule="lapSwimSchedule" />
      </div>
    </div>
  );
}

export default LapswimSchedule;
