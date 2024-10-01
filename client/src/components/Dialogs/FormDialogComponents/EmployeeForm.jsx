import React, { useState, useEffect } from 'react';
import TextBox from '../../UI/TextBox';
import FlexBox from '../../UI/Flexbox';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from '@mui/material';

import BasicDatePicker from './DatePicker';

const EmployeeForm = ({ employee, setEmployee, cafes, setDialogHeight }) => {
  const [errors, setErrors] = useState({
    name: '',
    email_address: '',
    phone_number: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      // case 'name':
      //   if (value.length < 6 || value.length > 10) {
      //     error = 'Cafe name must be between 6 and 10 characters.';
      //   }
      //   break;
      case 'email_address':
        const emailRegex = /^\S+@\S+\.\S+$/;
        // const emailRegex = /^.*$/
        if (!emailRegex.test(value)) {
          error = 'Invalid email address.';
        }
        break;
      case 'phone_number':
        const phoneRegex = /^(8|9)\d{7}$/;
        // const phoneRegex = /^.*$/
        if (!phoneRegex.test(value)) {
          error = 'Phone number must start with 8 or 9 and have 8 digits.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (field, value) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [field]: value,
    }));
    console.log(employee)
    const error = validateField(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  useEffect(() => {
    if (isDropdownOpen) {
      setDialogHeight(`58%`);
    } else {
      setDialogHeight('auto');
    }
  }, [isDropdownOpen, cafes, setDialogHeight]);

  return (
    <Box className="flex flex-col gap-1">
      <FlexBox gap="1.5rem" paddingBottom="1rem">
        <FormControl fullWidth>
          <TextBox
            placeholder="Employee Name"
            value={employee.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextBox
            placeholder="Phone Number"
            value={employee.phone_number}
            onChange={(e) => handleChange('phone_number', e.target.value)}
            error={!!errors.phone_number}
            helperText={errors.phone_number}
          />
        </FormControl>
      </FlexBox>
      <FormControl fullWidth>
        <TextBox
          placeholder="Email Address"
          value={employee.email_address}
          onChange={(e) => handleChange('email_address', e.target.value)}
          error={!!errors.email_address}
          helperText={errors.email_address}
        />
      </FormControl>
      <Box className="py-6">
        <FormControl component="fieldset" error={!!errors.gender}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            value={employee.gender || ''}
            onChange={(e) => handleChange('gender', e.target.value)}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <FormControl fullWidth error={!!errors.assignedCafe}>
        <InputLabel>Assigned Café</InputLabel>
        <Select
          value={employee.cafe || ''}
          onChange={(e) => handleChange('cafe', e.target.value)}
          onOpen={() => setIsDropdownOpen(true)}
          onClose={() => setIsDropdownOpen(false)}
          label="Assigned Café"
          MenuProps={{
            // PaperProps: {
            //   style: {
            //     maxHeight: isDropdownOpen ? 'none' : 10 * 4.5,
            //   },
            // },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
          }}
        >
          {cafes.map((cafe) => (
            <MenuItem key={cafe} value={cafe}>
              {cafe}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className="py-4">
        <FormControl fullWidth>
          <BasicDatePicker
            value={employee.start_date}
            handleDateChange={(newDate) => {
              handleChange('start_date', newDate);
            }}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default EmployeeForm;
