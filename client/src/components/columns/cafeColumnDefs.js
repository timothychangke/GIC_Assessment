import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

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
    minWidth: 70, // Set a minimum width
    flex: 1, // Allow this column to grow/shrink
  },
  {
    headerName: 'Name',
    field: 'name',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 100,
    flex: 2, // This column takes up more space
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 150,
    flex: 3,
  },
  {
    headerName: 'Location',
    field: 'location',
    sortable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 100,
    flex: 2,
  },
  {
    headerName: 'Employees',
    field: 'employees',
    sortable: true,
    minWidth: 100,
    flex: 1,
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
    minWidth: 80,
    flex: 1,
  },
];

export default getCafeColumnDefs;
