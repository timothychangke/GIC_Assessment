import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const FilteringBreadcrumbs = ({ values, handleClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleLinkClick = (index) => {
    setSelectedIndex(index); 
    handleClick(values[index]); 
  };
  return (
    <div role="presentation">
    <Breadcrumbs aria-label="breadcrumb">
      {values.map((value, index) => (
        <Link
          key={index}
          underline="hover"
          color='black'
          onClick={() => handleLinkClick(index)} 
          sx={{
            fontWeight: selectedIndex === index ? 'bold' : 'normal', 
            cursor: 'pointer', 
            pointerEvents: selectedIndex === index ? 'none' : 'auto', 
            '&:hover': {
              color: selectedIndex === index ? 'primary' : 'inherit', 
            },
          }}
        >
          {value}
        </Link>
      ))}
    </Breadcrumbs>
  </div>
  );
};

export default FilteringBreadcrumbs;
