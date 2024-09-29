import getCafeColumnDefs from './columns/cafeColumnDefs';
import Grid from './table/Table';

const CafeGrid = ({ cafes, onEditClick }) => {

  const cafeColumnDefs = getCafeColumnDefs(onEditClick);
  const rowData = cafes || [];

  return <Grid rowData={rowData} columnData={cafeColumnDefs} />;
};

export default CafeGrid;
