import React from 'react';
import './styles.css';
import PatientInfo from './components/PatientInfo';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>View patient</h2>
      </div>
      <PatientInfo />
    </div>
  );
}

export default App;
