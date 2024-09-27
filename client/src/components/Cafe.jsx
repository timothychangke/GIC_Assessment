import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { useCreateCafe } from '../services/mutations';
import { useGetCafesByLocation } from '../services/queries';
import getCafeColumnDefs from './columns/cafeColumnDefs';

const CafeGrid = () => {
  const { data: cafes, isLoading, isError } = useGetCafesByLocation();
  const createCafeMutation = useCreateCafe();
  const handleCreateCafeSubmit = (newCafe) => {
    createCafeMutation.mutate(newCafe);
  };

  const handleEditClick = (cafeData) => {
    console.log('Editing Cafe:', cafeData);
  };

  const cafeColumnDefs = getCafeColumnDefs(handleCreateCafeSubmit);
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
      <div
        className="ag-theme-quartz"
        style={{ height: '600px', width: '90%' }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={cafeColumnDefs}
          pagination={true}
          paginationPageSize={10}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default CafeGrid;
