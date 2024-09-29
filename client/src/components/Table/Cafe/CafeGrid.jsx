import getCafeColumnDefs from '../../Columns/Cafe/cafeColumnDefs';
import Grid from '../TableComponents/Grid';

const CafeGrid = ({ cafes, onEditClick, onDeleteClick }) => {
  const cafeColumnDefs = getCafeColumnDefs(onEditClick, onDeleteClick);
  const rowData = cafes || [];

  return (
    <Grid
      rowData={rowData}
      columnData={cafeColumnDefs}
      rowHeight={150}
      pageSize={5}
    />
  );
};

export default CafeGrid;
