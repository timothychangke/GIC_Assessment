import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const FilterSelect = ({ cafes, selectedCafe, onSelectCafe }) => {
  if (!selectedCafe) {
    selectedCafe = 'All Cafes';
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Typography variant="h6" sx={{ color: '#021d49' }}>
        Filter Employee By:
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small-label">Cafes</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedCafe}
          label="Cafes"
          onChange={(e) => {
            e.preventDefault();
            onSelectCafe(e.target.value);
          }}
        >
          <MenuItem value="All Cafes">
            <em>All Cafes</em>
          </MenuItem>
          {cafes.map((cafe, idx) => (
            <MenuItem key={idx} value={cafe}>
              {cafe}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
