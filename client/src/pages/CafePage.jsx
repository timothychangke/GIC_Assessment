import { useState } from 'react';

import CafeGrid from '../components/CafeGrid';
import FilteringBreadcrumbs from '../components/table/BreadCrumbs';
import FormDialog from '../components/table/FormDialog';
import { Button } from '@mui/material';
import { useGetCafesByLocation } from '../services/queries';

const CafePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [openDialog, setOpenDialog] = useState({open: false, type: 'new'});
  const [cafe, setCafe] = useState({
    name: '',
    description: '',
    location: '',
    logo: null,
    id: null
  });

  const { data, isLoading, isError } = useGetCafesByLocation(selectedLocation);

  if (isLoading) {
    return <div>Loading...</div>; // or any loading spinner/component
  }

  if (isError) {
    return <div>Error fetching cafes</div>; // handle error state
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const { cafes, locations } = data;
  const handleClickLocation = (location) => {
    setSelectedLocation(location === 'All locations' ? null : location);
  };
  const handleEditClick = (data) => {
    console.log(data)
    const { name, description, location, logo, id } = data;
    setCafe((prevCafe) => ({ ...prevCafe, name, description, location, logo, id }));
    setOpenDialog({open: true, type: 'edit'});
  };
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
      <CafeGrid cafes={cafes} onEditClick={handleEditClick} />
    </div>
  );
};

export default CafePage;
