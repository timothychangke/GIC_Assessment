import { useState } from 'react';
import EmployeeGrid from '../components/Table/Employee/EmployeeGrid';
import { useGetEmployeesByCafe } from '../services/queries/employeeQueries';
import LoadingSpinner from '../components/State/Loading';
import EmployeeFormDialog from '../components/Dialogs/Employee/EmployeeFormDialog';
import DeleteDialog from '../components/Dialogs/Employee/EmployeeDeleteDialog';
import dayjs from 'dayjs';
import FilterSelect from '../components/Dialogs/FormDialogComponents/FilterSelect';

const EmployeePage = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [openDialog, setOpenDialog] = useState({ open: false, type: 'new' });
  const [employee, setEmployee] = useState({
    employeeID: '',
    name: '',
    email_address: '',
    phone_number: '',
    gender: '',
    start_date: '',
    cafe: '',
  });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  // const [cafe, setCafe] = useState({
  //   name: '',
  //   description: '',
  //   location: '',
  //   logo: null,
  //   id: null,
  // });
  const handleEditClick = (data) => {
    const { id, name, email_address, phone_number, gender, cafe, start_date } =
      data;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      id,
      name,
      email_address,
      phone_number,
      gender,
      cafe,
      start_date: dayjs(start_date),
    }));
    setOpenDialog({ open: true, type: 'edit' });
  };
  const handleDeleteClick = (data) => {
    const { id, name, email_address, phone_number, gender, cafe, start_date } =
      data;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      id,
      name,
      email_address,
      phone_number,
      gender,
      cafe,
      start_date,
    }));
    setOpenDeleteDialog(true);
  };

  const handleSelectCafe = (cafe) => {
    setSelectedCafe(cafe === 'All Cafes' ? null : cafe);
  };

  const { data, isLoading, isError } = useGetEmployeesByCafe(selectedCafe);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error fetching cafes</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const cafes = data?.cafes || [];
  const employees = data?.employees || [];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <div></div>
          <EmployeeFormDialog
            open={openDialog}
            setOpen={setOpenDialog}
            employee={employee}
            setEmployee={setEmployee}
            cafes={cafes}
          />
        </div>
        <DeleteDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          employee={employee}
          setEmployee={setEmployee}
        />
        <EmployeeGrid
          employees={employees}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          cafes={cafes}
          selectedCafe={selectedCafe}
          handleSelectCafe={handleSelectCafe}
        />
      </div>
    </div>
  );
};

export default EmployeePage;
