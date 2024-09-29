import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {
  Container,
  Divider,
  InputBase,
  Button,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import Dropzone from 'react-dropzone';
import {
  DeleteOutlined,
  EditOutlined,
  ImageOutlined,
} from '@mui/icons-material';
import FlexBox from '../UI/Flexbox';

import { useCreateCafe, useUpdateCafe } from '../../services/mutations';

const FormDialog = ({ open, setOpen, cafe, setCafe }) => {
  const [isImage, setIsImage] = useState(false);
  const createCafeMutation = useCreateCafe();
  const updateCafeMutation = useUpdateCafe();
  const handleSubmit = async () => {
    try {
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
        console.log(cafe);
        const updateData = {
          id: cafe.id,
          name: cafe.name,
          description: cafe.description,
          location: cafe.location,
        };
        if (cafe.logo) {
          updateData.logo = cafe.logo.name;
        }
        await updateCafeMutation.mutateAsync(updateData);
        handleClose();
      }
    } catch (error) {
      console.error('Error creating cafe:', error);
    }
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
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          padding: '10px 20px',
          fontSize: '16px',
          width: '200px',
          height: '50px',
          color: '#021d49',
          borderColor: '#021d49',
        }}
      >
        Add Cafe
      </Button>
      <Dialog open={open.open} onClose={handleClose}>
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
            <FlexBox gap="1.5rem" paddingBottom="1rem">
              <InputBase
                placeholder="Cafe Name"
                onChange={(e) =>
                  setCafe((prevCafe) => ({ ...prevCafe, name: e.target.value }))
                }
                value={cafe.name}
                sx={{
                  width: '100%',
                  backgroundColor: '#F0F0F0',
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                }}
              />
              <InputBase
                placeholder="Location"
                onChange={(e) =>
                  setCafe((prevCafe) => ({
                    ...prevCafe,
                    location: e.target.value,
                  }))
                }
                value={cafe.location}
                sx={{
                  width: '100%',
                  backgroundColor: '#F0F0F0',
                  borderRadius: '2rem',
                  padding: '1rem 2rem',
                }}
              />
            </FlexBox>
            <InputBase
              placeholder="Cafe Description (max 256 chars)"
              onChange={(e) =>
                setCafe((prevCafe) => ({
                  ...prevCafe,
                  description: e.target.value,
                }))
              }
              value={cafe.description}
              sx={{
                width: '100%',
                backgroundColor: '#F0F0F0',
                borderRadius: '2rem',
                padding: '3rem 2rem',
              }}
            />

            {isImage && (
              <Box
                border={`1px solid #A3A3A3`}
                borderRadius="5px"
                mt="1rem"
                p="1rem"
              >
                <Dropzone
                  acceptedFiles=".jpg,.jpeg,.png"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setCafe((prevCafe) => ({
                      ...prevCafe,
                      logo: acceptedFiles[0],
                    }))
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <FlexBox>
                      <Box
                        {...getRootProps()}
                        border={`2px dashed #4a7249`}
                        p="1rem"
                        width="100%"
                        sx={{ '&:hover': { cursor: 'pointer' } }}
                      >
                        <input {...getInputProps()} />
                        {!cafe.logo ? (
                          <p>Add Logo Here</p>
                        ) : (
                          <FlexBox>
                            <Typography>{cafe.logo.name}</Typography>
                            <EditOutlined />
                          </FlexBox>
                        )}
                      </Box>
                      {cafe.logo && (
                        <IconButton
                          onClick={() =>
                            setCafe((prevCafe) => ({ logo: null, ...prevCafe }))
                          }
                          sx={{ width: '15%' }}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      )}
                    </FlexBox>
                  )}
                </Dropzone>
              </Box>
            )}
            <Divider sx={{ margin: '1.25rem 0' }} />
            <FlexBox>
              <FlexBox gap="0.25rem" onClick={() => setIsImage(!isImage)}>
                <ImageOutlined sx={{ color: 'gray' }} />
                <Typography
                  color={'gray'}
                  sx={{ '&:hover': { cursor: 'pointer', color: 'gray' } }}
                >
                  {open.type === 'new' ? 'Attach a Logo' : 'Upload new logo'}
                </Typography>
              </FlexBox>
            </FlexBox>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              resetForm();
              handleClose();
            }}
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
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
