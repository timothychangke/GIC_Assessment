import getEmployeeColumnDefs from '../../Columns/Employee/employeeColumnDefs';
import Grid from '../TableComponents/Grid';
import FilterSelect from '../../Dialogs/DialogComponents/FilterSelect';

const EmployeeGrid = ({
  employees,
  onEditClick,
  onDeleteClick,
  cafes,
  selectedCafe,
  handleSelectCafe,
}) => {
  console.log(employees);
  const cafeColumnDefs = getEmployeeColumnDefs(onEditClick, onDeleteClick);
  const rowData = employees || [];
  return (
    <>
      <Grid
        rowData={rowData}
        columnData={cafeColumnDefs}
        rowHeight={50}
        pageSize={15}
      />
      <div style={{ marginTop: '320px', width: '400px' }}>
        <FilterSelect
          cafes={cafes}
          selectedCafe={selectedCafe}
          onSelectCafe={handleSelectCafe}
        />
      </div>
    </>
  );
};

export default EmployeeGrid;
