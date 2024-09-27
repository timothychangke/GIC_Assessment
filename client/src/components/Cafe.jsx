import { useCreateCafe } from '../services/mutations';
import { useGetCafesByLocation } from '../services/queries';
import getCafeColumnDefs from './columns/cafeColumnDefs';
import Grid from './table/Table';

const CafeGrid = () => {
  const { data: cafes, isLoading, isError } = useGetCafesByLocation();
  const createCafeMutation = useCreateCafe();
  const handleCreateCafeSubmit = (newCafe) => {
    createCafeMutation.mutate(newCafe);
  };

  const handleEditClick = (cafeData) => {
    console.log('Editing Cafe:', cafeData);
  };

  const cafeColumnDefs = getCafeColumnDefs(handleEditClick);
  const rowData = cafes || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Grid rowData={rowData} columnData={cafeColumnDefs} />
    </div>
  );
};

export default CafeGrid;
