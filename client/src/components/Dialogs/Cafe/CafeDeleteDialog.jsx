import { useDeleteCafe } from '../../../services/mutation/cafeMutations';
import DeleteDialog from '../DialogComponents/DeleteDialog/DeleteDialog';

const CafeDeleteDialog = ({ open, setOpen, cafe, setCafe }) => {
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
    <DeleteDialog
      open={open}
      handleClose={handleClose}
      handleConfirmDelete={handleConfirmDelete}
      type={'Cafe'}
    />
  );
};

export default CafeDeleteDialog;
