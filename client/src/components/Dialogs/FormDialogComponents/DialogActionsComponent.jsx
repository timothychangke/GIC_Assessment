import React from 'react';
import { Button } from '@mui/material';

const DialogActionsComponent = ({ handleClose, handleSubmit, cafe }) => (
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
      disabled={!(cafe.name && cafe.description && cafe.location)}
      onClick={handleSubmit}
    >
      Submit
    </Button>
  </>
);

export default DialogActionsComponent;
