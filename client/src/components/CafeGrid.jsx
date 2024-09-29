import getCafeColumnDefs from './columns/cafeColumnDefs';
import Grid from './Table/Table';

const CafeGrid = ({ cafes, onEditClick, onDeleteClick }) => {

  const cafeColumnDefs = getCafeColumnDefs(onEditClick, onDeleteClick);
  const rowData = cafes || [];

  return <Grid rowData={rowData} columnData={cafeColumnDefs} />;
};

export default CafeGrid;
