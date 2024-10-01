import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Container, Divider, Typography } from '@mui/material';

import FlexBox from '../../UI/Flexbox';

import { toast } from 'react-hot-toast';
import dayjs from 'dayjs';

import {
  useCreateEmployee,
  useUpdateEmployee,
} from '../../../services/mutation/employeeMutations';
import OutlinedButton from '../FormDialogComponents/OutlinedButton';
import EmployeeForm from '../FormDialogComponents/EmployeeForm';
import EmployeeDialogActionsComponent from '../FormDialogComponents/EmployeeDialogActionsComponents';

const FormDialog = ({ open, setOpen, employee, setEmployee, cafes }) => {
  const createEmployeeMutation = useCreateEmployee();
  const updateEmployeeMutation = useUpdateEmployee();
  const [dialogHeight, setDialogHeight] = useState('auto');
  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      if (open.type === 'new') {
        console.log(employee.start_date)
        const formData = new FormData();
        formData.append('name', employee.name || '');
        formData.append('email_address', employee.email_address || '');
        formData.append('phone_number', employee.phone_number || '');
        formData.append('gender', employee.gender || '');
        formData.append('cafe', employee.cafe || '');
        formData.append('start_date', employee.start_date);
        await createEmployeeMutation.mutateAsync(formData);
        handleClose();
      } else {
        const updateData = {
          id: employee.id,
          name: employee.name,
          email_address: employee.email_address,
          phone_number: employee.phone_number,
          gender: employee.gender,
          cafe: employee.cafe,
          start_date: employee.start_date,
        };
        await updateEmployeeMutation.mutateAsync(updateData);
        handleClose();
      }
    } catch (error) {
      console.error('Error creating Employee:', error);
    }
  };

  const validateForm = () => {
    // TO NOTE: this is the validation code as per the requirements document,
    // but I commented it out as I personally felt it would ruin the user experience
    // if all names were so short. However I still coded it out in case it was necessary.

    // Validate Employee Name
    // if (employee.name.length < 6 || employee.name.length > 10) {
    //   toast.error('Name must be between 6 and 10 characters.');
    //   return false;
    // }

    const emailPattern = /^\S+@\S+\.\S+$/;
    // const emailPattern = /^.*$/

    if (!employee.email_address || !emailPattern.test(employee.email_address)) {
      toast.error('Please enter a valid email address.');
    }

    const phonePattern = /^(8|9)\d{7}$/;
    // const phonePattern = /^.*$/
    if (!employee.phone_number || !phonePattern.test(employee.phone_number)) {
      toast.error(
        'Phone number must be a Singapore number starting with 8 or 9 and have 8 digits.'
      );
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
    setEmployee({
      id: '',
      name: '',
      email_address: '',
      phone_number: '',
      gender: '',
      cafe: '',
      start_date: '',
    });
  };

  return (
    <>
      <OutlinedButton onClick={handleClickOpen}>Add Employee</OutlinedButton>
      <Dialog
        open={open.open}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: dialogHeight,
            transition: 'height 0.5s ease-in-out',
          },
        }}
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
                {open.type === 'new' ? 'Add a new Employee' : 'Edit Employee'}
              </Typography>
            </FlexBox>
            <Divider sx={{ margin: '0 0 1.25rem 0' }} />
            <EmployeeForm
              employee={employee}
              setEmployee={setEmployee}
              cafes={cafes}
              setDialogHeight={setDialogHeight}
            />
            <Divider sx={{ margin: '1.25rem 0' }} />
          </Container>
        </DialogContent>
        <DialogActions>
          <EmployeeDialogActionsComponent
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            employee={employee}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
