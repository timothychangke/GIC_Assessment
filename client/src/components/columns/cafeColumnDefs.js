import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import './cafeColumn.css';

const getCafeColumnDefs = (onEditClick) => [
  {
    headerName: 'Logo',
    field: 'logo',
    cellRenderer: (params) => {
      console.log(params.value);
      return (
        <img
          src={params.value}
          alt="Cafe Logo"
          style={{ width: '100px', height: '100px', objectFit: 'contain' }}
        />
      );
    },
    minWidth: 200,
    flex: 1,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  {
    headerName: 'Name',
    field: 'name',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 100,
    flex: 2,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 500,
      fontSize: '18px',
    },
    headerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 300,
    flex: 3,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '18px',
    },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Location',
    field: 'location',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 300,
    flex: 2,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '18px',
    },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Employees',
    field: 'employees',
    sortable: true,
    minWidth: 300,
    flex: 1,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '18px',
    },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Actions',
    field: 'actions',
    cellRenderer: (params) => (
      <IconButton
        color="#021d49"
        aria-label="edit"
        onClick={() => onEditClick(params.data)}
      >
        <EditIcon sx={{ color: '#021d49' }} />
      </IconButton>
    ),
    minWidth: 100,
    flex: 1,
    cellStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerStyle: { textAlign: 'center' },
  },
];

export default getCafeColumnDefs;
