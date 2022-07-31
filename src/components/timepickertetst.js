import * as React from 'react';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import arSaLocale from 'date-fns/locale/ar-SA';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



export default function LocalizedTimePicker() {

    const localeMap = {
        en: enLocale,
        ru: ruLocale,
        ar: arSaLocale,
      };
      
      // prettier-ignore
      const ampmOptions = {
        'undefined': undefined,
        true: true,
        false: false };


  const [locale, setLocale] = React.useState('en');
  const [value, setValue] = React.useState(new Date());

  const [ampm, setAmpm] = React.useState(false);
  const [ampmOption, setAmpmOption] = React.useState('undefined');

  const selectAmpm = (event) => {
    setAmpm(ampmOptions[event.target.value]);
    setAmpmOption(event.target.value);
  };

  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={localeMap[locale]}
    >
      <Stack spacing={3}>
        
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
          ampm={ampm}
         
        />

      </Stack>
    </LocalizationProvider>
  );
}
