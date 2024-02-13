import React, { useEffect, useState } from 'react';
import CreateTable from '../../elements/CreateTable';
import '../../../global.css';
import CreateSchedule from './CreateSchedule';
import { formatDate } from '../../../utils/utils';
import { formatTime } from '../../../utils/utils';
import { getDayOfWeek } from '../../../utils/utils';
import {CurrentSchedule} from '../../elements/CurrentSchedule';



const LapswimSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchSchedule = () => {
      fetch('/api/auth/lapSwimSchedule')
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch lap swim schedules');
          return response.json();
        })
        .then(data => {
          const processedData = data.map(item => {
            return {
              ...item,
              Day: getDayOfWeek(item.Date),
              Date: formatDate(item.Date),
              Time: `${formatTime(item.StartTime)} - ${formatTime(item.EndTime)}`,
              Lane: item.LaneNumber,
              'Max Swimmers': item.MaxSwimmers
            };
          });
          setScheduleData(processedData);
        })
        .catch(error => console.error('Error fetching lap swim schedules:', error));
    };

    fetchSchedule();
    const intervalId = setInterval(fetchSchedule, 5000); // Re-fetch every 5 seconds for updates
    return () => clearInterval(intervalId);
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
