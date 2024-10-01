import React from 'react';
import { Button } from '@mui/material';

const EmployeeDialogActionsComponent = ({ handleClose, handleSubmit, employee }) => (
  <>
    <Button
      onClick={handleClose}
      sx={{
        color: 'red',
        borderRadius: '3rem',
        marginLeft: '1rem',
      }}
    >
      Cancel
    </Button>
    <Button
      type="submit"
      disabled={!(employee.name && employee.phone_number && employee.email_address && employee.cafe)}
      onClick={handleSubmit}
    >
      Submit
    </Button>
  </>
);

export default EmployeeDialogActionsComponent;
