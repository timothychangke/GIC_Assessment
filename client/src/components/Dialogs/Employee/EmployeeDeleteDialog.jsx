import { useDeleteEmployee } from '../../../services/mutation/employeeMutations';
import DeleteDialog from '../DialogComponents/DeleteDialog/DeleteDialog';

const EmployeeDeleteDialog = ({ open, setOpen, employee, setEmployee }) => {
  const deleteEmployeeMutation = useDeleteEmployee();
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };
  const handleConfirmDelete = async () => {
    await deleteEmployeeMutation.mutateAsync(employee.id);
    handleClose();
  };

  const resetForm = () => {
    setEmployee({
      employeeID: '',
      name: '',
      email_address: '',
      phone_number: '',
      gender: '',
      start_date: '',
      cafe: '',
    });
  };
  return (
    <DeleteDialog
      open={open}
      handleClose={handleClose}
      handleConfirmDelete={handleConfirmDelete}
      type={'Employee'}
    />
  );
};

export default EmployeeDeleteDialog;
