import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { useDeleteCafe } from '../../services/mutations';

const DeleteDialog = ({ open, setOpen, cafe, setCafe}) => {
  const deleteCafeMutation = useDeleteCafe();
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };
  const handleConfirmDelete = async () => {
    await deleteCafeMutation.mutateAsync(cafe.id);
    handleClose();
  };

  const resetForm = () => {
    setCafe({ name: '', description: '', location: '', logo: null, id: null });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Delete'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this cafe?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
