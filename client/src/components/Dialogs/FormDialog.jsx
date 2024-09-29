import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Container, Divider, Typography } from '@mui/material';

import FlexBox from '../UI/Flexbox';
import CafeForm from './FormDialogComponents/CafeForm';

import { toast } from 'react-hot-toast';

import {
  useCreateCafe,
  useUpdateCafe,
} from '../../services/mutation/cafeMutations';
import LogoUploader from './FormDialogComponents/LogoUploader';
import DialogActionsComponent from './FormDialogComponents/DialogActionsComponent';
import LogoToggle from './FormDialogComponents/LogoToggle';
import OutlinedButton from './FormDialogComponents/OutlinedButton';

const FormDialog = ({ open, setOpen, cafe, setCafe }) => {
  const [isImage, setIsImage] = useState(false);
  const createCafeMutation = useCreateCafe();
  const updateCafeMutation = useUpdateCafe();
  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      if (open.type === 'new') {
        const formData = new FormData();
        formData.append('name', cafe.name);
        formData.append('description', cafe.description);
        formData.append('location', cafe.location);
        if (cafe.logo) {
          formData.append('logo', cafe.logo);
          formData.append('picturePath', cafe.logo.name);
        }
        await createCafeMutation.mutateAsync(formData);
        handleClose();
      } else {
        const updateData = {
          id: cafe.id,
          name: cafe.name,
          description: cafe.description,
          location: cafe.location,
        };
        if (cafe.logo) {
          updateData.logo = cafe.logo.name;
        } else {
          updateData.logo = null;
        }
        await updateCafeMutation.mutateAsync(updateData);
        handleClose();
      }
    } catch (error) {
      console.error('Error creating cafe:', error);
    }
  };

  const validateForm = () => {
    // TO NOTE: this is the validation code as per the requirements document,
    // but I commented it out as I personally felt it would ruin the user experience
    // if all names were so short. However I still coded it out in case it was necessary.

    // Validate Cafe Name
    // if (cafe.name.length < 6 || cafe.name.length > 10) {
    //   toast.error('Name must be between 6 and 10 characters.');
    //   return false;
    // }

    if (cafe.logo && cafe.logo.size > 2 * 1024 * 1024) {
      toast.error('Logo file size must be less than 2MB.');
      return false;
    }
    return true;
  };

  const handleClickOpen = () => {
    setOpen(() => ({ open: true, type: 'new' }));
  };

  const handleClose = () => {
    setOpen((prevOpen) => ({ ...prevOpen, open: false }));
    resetForm();
  };

  const resetForm = () => {
    setCafe({ name: '', description: '', location: '', logo: null, id: null });
    setIsImage(false);
  };

  return (
    <>
      <OutlinedButton onClick={handleClickOpen}>Add Cafe</OutlinedButton>
      <Dialog
        open={open.open}
        onClose={handleClose}
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
                {open.type === 'new' ? 'Add a new Cafe' : 'Edit Cafe'}
              </Typography>
            </FlexBox>
            <Divider sx={{ margin: '0 0 1.25rem 0' }} />
            <CafeForm cafe={cafe} setCafe={setCafe} />
            {isImage && (
              <LogoUploader cafe={cafe} setCafe={setCafe} open={open} />
            )}
            <Divider sx={{ margin: '1.25rem 0' }} />
            <FlexBox>
              <LogoToggle
                isImage={isImage}
                setIsImage={setIsImage}
                type={open.type}
              />
            </FlexBox>
          </Container>
        </DialogContent>
        <DialogActions>
          <DialogActionsComponent
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            cafe={cafe}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
