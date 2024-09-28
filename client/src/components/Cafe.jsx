import { useCreateCafe } from '../services/mutations';
import { useGetCafesByLocation } from '../services/queries';
import getCafeColumnDefs from './columns/cafeColumnDefs';
import FilteringBreadcrumbs from './table/BreadCrumbs';
import Grid from './table/Table';

const CafeGrid = () => {
  const { data, isLoading, isError } = useGetCafesByLocation();

  // Check for loading state
  if (isLoading) {
    return <div>Loading...</div>; // or any loading spinner/component
  }

  // Check for error state
  if (isError) {
    return <div>Error fetching cafes</div>; // handle error state
  }

  // Ensure data is defined before destructuring
  if (!data) {
    return <div>No data available</div>; // handle case where data is undefined
  }
  const { cafes, locations } = data;
  //   const createCafeMutation = useCreateCafe();
  //   const handleCreateCafeSubmit = (newCafe) => {
  //     createCafeMutation.mutate(newCafe);
  //   };

  const handleClickLocation = () => {};

  const handleEditClick = (cafeData) => {
    console.log('Editing Cafe:', cafeData);
  };

  const cafeColumnDefs = getCafeColumnDefs(handleEditClick);
  const rowData = cafes || [];

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    height: '80vh',
    position: 'relative', 
    padding: '20px', 
  }}
>
  <FilteringBreadcrumbs
    handleClick={handleClickLocation}
    values={['All locations', ...locations]}
    style={{ marginBottom: '20px' }} 
  />
  <Grid rowData={rowData} columnData={cafeColumnDefs} />
</div>
  );
};

export default CafeGrid;
