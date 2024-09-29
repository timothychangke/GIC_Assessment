import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import '../column.css';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const getCafeColumnDefs = (onEditClick, onDeleteClick) => [
  {
    headerName: 'Logo',
    field: 'logo',
    cellRenderer: (params) => {
      console.log(params.value);
      return (
        <img
          src={params.value}
          alt="Cafe Logo"
          style={{ width: '150px', height: '150px', objectFit: 'contain' }}
        />
      );
    },
    minWidth: 200,
    flex: 1,
    cellStyle: centerStyle,
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
      ...centerStyle,
      fontWeight: 500,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 300,
    flex: 3,
    cellStyle: {
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
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
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: centerStyle,
  },
  {
    headerName: 'Employees',
    field: 'employees',
    sortable: true,
    minWidth: 300,
    flex: 1,
    cellStyle: {
      ...centerStyle,
      fontSize: '18px',
    },
    headerStyle: { textAlign: 'center' },
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
    cellStyle: centerStyle,
    headerStyle: centerStyle,
  },
];

export default getCafeColumnDefs;
