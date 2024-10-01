import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Container,
  Divider,
  Button,
  Typography,
} from '@mui/material';

import FlexBox from '../../../UI/Flexbox';

const DeleteDialog = ({ open, handleClose, type, handleConfirmDelete }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            padding: '8px',
          },
        }}
      >
        <DialogContent>
          <Container>
            <FlexBox width="100%">
              <Typography
                fontWeight="bold"
                fontSize="28px"
                color="#021d49"
                paddingBottom={'8px'}
                margin="auto"
              >
                {`Delete ${type}`}
              </Typography>
            </FlexBox>
            <Divider sx={{ margin: '0 0 1.25rem 0' }} />
            <FlexBox width="100%">
              <DialogContentText id="alert-dialog-description">
                {`Are you sure you want to delete this ${type}? This action cannot be
                undone.`}
              </DialogContentText>
            </FlexBox>
            <Divider sx={{ margin: '0 1.25rem 0', paddingTop: '3rem' }} />
          </Container>
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
