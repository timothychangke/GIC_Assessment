import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import './cafeColumn.css';

const getCafeColumnDefs = (handleEditClick) => [
  {
    headerName: 'Logo',
    field: 'logo',
    cellRenderer: (params) => (
      <img
        src={params.value}
        alt="Cafe Logo"
        style={{ width: '50px', height: '50px' }}
      />
    ),
    minWidth: 70,
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
    minWidth: 300,
    flex: 2,
    cellStyle: { textAlign: 'center' },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 300,
    flex: 3,
    cellStyle: { textAlign: 'center' },
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
    cellStyle: { textAlign: 'center' },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Employees',
    field: 'employees',
    sortable: true,
    minWidth: 300,
    flex: 1,
    cellStyle: { textAlign: 'center' },
    headerStyle: { textAlign: 'center' },
  },
  {
    headerName: 'Actions',
    field: 'actions',
    cellRenderer: (params) => (
      <IconButton
        color="primary"
        aria-label="edit"
        onClick={() => handleEditClick(params.data)}
      >
        <EditIcon />
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
