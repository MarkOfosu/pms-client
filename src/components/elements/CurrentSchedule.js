import CreateTable from "./CreateTable";

export const CurrentSchedule = ({ scheduleData }) => {
    const headerColor = '#3f51b5'; 
    const textColor = '#ffffff'; 
    const columns = ['Day', 'Date', 'Lane', 'Max Swimmers', 'Time']; 
  
    return (
      <div>
        <h1>Current Schedule (Lap Swim)</h1>
        <CreateTable headerColor={headerColor} textColor={textColor} columns={columns} data={scheduleData} />
      </div>
    );
  };

