import React from 'react';
import { InputBase } from '@mui/material';

const TextBox = ({
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 1,
  sx = {},
}) => {
  return (
    <InputBase
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      sx={{
        width: '100%',
        backgroundColor: '#F0F0F0',
        borderRadius: '2rem',
        padding: '1rem 2rem',
        ...sx, 
      }}
    />
  );
};

export default TextBox;
