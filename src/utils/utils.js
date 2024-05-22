// utils/utils.js
export const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    // This ensures the date is interpreted in the user's local time zone for display
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  export const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };
  
  export const getDayOfWeek = (utcDate) => {
    const date = new Date(utcDate);
    return date.toLocaleDateString('en-US', { weekday: 'long' });


  };





  