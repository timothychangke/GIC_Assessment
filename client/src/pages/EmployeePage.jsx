import { useState } from 'react';
import FilterSelect from '../components/Dialogs/FormDialogComponents/FilterSelect';
import EmployeeGrid from '../components/Table/Employee/EmployeeGrid';
import { useGetEmployeesByCafe } from '../services/queries/employeeQueries';

const EmployeePage = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  // const [openDialog, setOpenDialog] = useState({ open: false, type: 'new' });
  // const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  // const [cafe, setCafe] = useState({
  //   name: '',
  //   description: '',
  //   location: '',
  //   logo: null,
  //   id: null,
  // });
  const handleEditClick = () => {};
  const handleDeleteClick = () => {};

  const handleSelectCafe = (cafe) => {
    setSelectedCafe(cafe === 'All Cafes' ? null : cafe);
  };

  const { data, isLoading, isError } = useGetEmployeesByCafe(selectedCafe);
  const cafes = data?.cafes || [];
  const employees = data?.employees || [];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '60vh',
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <EmployeeGrid
        employees={employees}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <FilterSelect
        cafes={cafes}
        selectedCafe={selectedCafe}
        onSelectCafe={handleSelectCafe}
      />
    </div>
  );
};

export default EmployeePage;
