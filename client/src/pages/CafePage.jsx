import { useState } from 'react';

import CafeGrid from '../components/Table/Cafe/CafeGrid';
import FilteringBreadcrumbs from '../components/Table/TableComponents/BreadCrumbs';
import FormDialog from '../components/Dialogs/FormDialog';
import { useGetCafesByLocation } from '../services/queries/cafeQueries';
import DeleteDialog from '../components/Dialogs/DeleteDialog';
import LoadingSpinner from '../components/State/Loading';

import Navbar from '../components/NavBar/Navbar';

const CafePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [openDialog, setOpenDialog] = useState({ open: false, type: 'new' });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [cafe, setCafe] = useState({
    name: '',
    description: '',
    location: '',
    logo: null,
    id: null,
  });

  const { data, isLoading, isError } = useGetCafesByLocation(selectedLocation);

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  if (isError) {
    return <div>Error fetching cafes</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const { cafes, locations } = data;
  const handleClickLocation = (location) => {
    setSelectedLocation(location === 'All locations' ? null : location);
  };
  const handleEditClick = (data) => {
    const { name, description, location, logo, id } = data;
    console.log(data);
    setCafe((prevCafe) => ({
      ...prevCafe,
      name,
      description,
      location,
      logo,
      id,
    }));
    setOpenDialog({ open: true, type: 'edit' });
  };
  const handleDeleteClick = (data) => {
    const { name, description, location, logo, id } = data;
    setCafe((prevCafe) => ({
      ...prevCafe,
      name,
      description,
      location,
      logo,
      id,
    }));
    setOpenDeleteDialog(true);
  };

  return (
    <>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <FilteringBreadcrumbs
            handleClick={handleClickLocation}
            selectedLocation={selectedLocation}
            values={['All locations', ...locations]}
          />
          <FormDialog
            open={openDialog}
            setOpen={setOpenDialog}
            cafe={cafe}
            setCafe={setCafe}
          />
        </div>
        <DeleteDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          cafe={cafe}
          setCafe={setCafe}
        />
        <CafeGrid
          cafes={cafes}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      </div>
    </>
  );
};

export default CafePage;
