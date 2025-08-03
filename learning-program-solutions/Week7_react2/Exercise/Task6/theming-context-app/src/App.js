// App.js
import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light'); // or 'dark'

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
