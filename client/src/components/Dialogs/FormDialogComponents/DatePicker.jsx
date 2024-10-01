import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({
  value,
  handleDateChange,
  setIsDropdownOpen,
}) {
  if (value === '') {
    value = dayjs();
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          value={value}
          onChange={handleDateChange}
          label="Start Date"
          onOpen={() => setIsDropdownOpen(true)}
          onClose={() => setIsDropdownOpen(false)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
