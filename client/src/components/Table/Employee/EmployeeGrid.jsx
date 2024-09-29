import getEmployeeColumnDefs from '../../Columns/Employee/employeeColumnDefs';
import Grid from '../TableComponents/Grid';

const EmployeeGrid = ({ employees, onEditClick, onDeleteClick }) => {
  const cafeColumnDefs = getEmployeeColumnDefs(onEditClick, onDeleteClick);
  const rowData = employees || [];

  return (
    <Grid
      rowData={employees}
      columnData={cafeColumnDefs}
      rowHeight={50}
      pageSize={15}
    />
  );
};

export default EmployeeGrid;
