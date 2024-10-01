import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import '../column.css';

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const getEmployeeColumnDefs = (onEditClick, onDeleteClick) => [
  {
    headerName: 'Gender',
    field: 'gender',
    cellRenderer: (params) => {
      return (
        <div style={centerStyle}>
          {params.value === 'Male' ? (
            <MaleIcon sx={{ color: '#021d49', fontSize: '2rem' }} />
          ) : (
            <FemaleIcon sx={{ color: '#d32f2f', fontSize: '2rem' }} />
          )}
        </div>
      );
    },
    minWidth: 150,
    flex: 0.5,
    headerStyle: centerStyle,
  },
  {
    headerName: 'Employee ID',
    field: 'id',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 150,
    flex: 1,
    cellStyle: {
      ...centerStyle,
      fontWeight: 500,
      fontSize: '18px',
    },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Name',
    field: 'name',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 150,
    flex: 2,
    cellStyle: {
      ...centerStyle,
      fontWeight: 500,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Email Address',
    field: 'email_address',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 200,
    flex: 2,
    cellStyle: {
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Phone Number',
    field: 'phone_number',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 150,
    flex: 1,
    cellStyle: {
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Days Worked',
    field: 'days_worked',
    sortable: true,
    minWidth: 150,
    flex: 1,
    cellStyle: {
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Cafe Name',
    field: 'cafe',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 200,
    flex: 2,
    cellStyle: {
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    cellRenderer: (params) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <IconButton aria-label="edit" onClick={() => onEditClick(params.data)}>
          <EditIcon sx={{ color: '#021d49', fontSize: '2rem' }} />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => onDeleteClick(params.data)}
        >
          <DeleteIcon sx={{ color: '#d32f2f', fontSize: '2rem' }} />
        </IconButton>
      </div>
    ),
    minWidth: 150,
    flex: 1,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerStyle: { textAlign: 'center' },
  },
];

export default getEmployeeColumnDefs;
