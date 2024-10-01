import React from 'react';
import { Button } from '@mui/material';

const OutlinedButton = ({ onClick, children, sx }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        padding: '10px 20px',
        fontSize: '16px',
        width: '200px',
        height: '50px',
        color: '#021d49',
        borderColor: '#021d49',
        ...sx, 
      }}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
