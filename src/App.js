import { TimePicker } from '@mui/x-date-pickers';
import React from 'react';
import './App.css';
import HelperText from './components/datepickertest';
import LocalizedTimePicker from './components/timepickertetst';
import FormProfile from './components/formprofile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='App-header'>
      <h2>นัดหมายการเข้าพบ</h2>
      <text>เลือกวันที่</text><HelperText />
      <text>เลือกเวลา</text><LocalizedTimePicker /><br></br>
      <FormProfile />
    </div>
    
  );
}

export default App;