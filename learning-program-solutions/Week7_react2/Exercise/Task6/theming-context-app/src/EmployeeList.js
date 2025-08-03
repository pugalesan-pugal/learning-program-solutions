// EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <div>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
