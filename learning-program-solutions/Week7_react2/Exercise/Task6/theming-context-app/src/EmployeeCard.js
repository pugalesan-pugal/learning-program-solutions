// EmployeeCard.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <button className={theme === 'dark' ? 'btn-dark' : 'btn-light'}>
        View Profile
      </button>
    </div>
  );
};

export default EmployeeCard;
