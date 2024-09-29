import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const Grid = ({ rowData, columnData, rowHeight, pageSize }) => {
  return (
    <div className="ag-theme-quartz" style={{ height: '600px', width: '90%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnData}
        pagination={true}
        paginationPageSize={pageSize}
        rowHeight={rowHeight}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default Grid;
