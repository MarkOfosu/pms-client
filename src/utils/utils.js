
export const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    return formattedDate;

  };

  