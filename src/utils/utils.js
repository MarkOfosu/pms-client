// utils/utils.js
export const formatDate = (utcDate) => {
  if (!utcDate) return 'Invalid date';
  const date = new Date(utcDate);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const formatTime = (timeString) => {
  if (!timeString) return 'Invalid time';
  const [hours, minutes] = timeString.split(':');
  if (hours === undefined || minutes === undefined) return 'Invalid time';
  const date = new Date();
  date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export const getDayOfWeek = (utcDate) => {
  if (!utcDate) return 'Invalid date';
  const date = new Date(utcDate);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};
