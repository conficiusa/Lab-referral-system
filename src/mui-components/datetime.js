import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker({ formData, setFormData,time_Sample }) {
  const handleDateTimeChange = (selectedDateTime) => {
    setFormData({ ...formData, time_Sample: selectedDateTime });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label="Date and Time of sample collection"
          format="DD/MM/YYYY hh:mm a"
          onChange={handleDateTimeChange}
          value={time_Sample}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
