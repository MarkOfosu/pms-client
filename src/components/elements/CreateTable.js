
import React from 'react';
import "../../global.css"

const CreateTable = ({ headerColor, textColor, columns, data }) => {
    
    return (
        <table className="table">
          <thead style={{ backgroundColor: headerColor, color: textColor }}>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{row[column]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center' }}>There are no schedules</td>
              </tr>
            )}
          </tbody>
        </table>
      );
};

export default CreateTable;