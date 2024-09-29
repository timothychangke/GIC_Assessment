import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const FilteringBreadcrumbs = ({ values, handleClick, selectedLocation }) => {
  const handleLinkClick = async (index) => {
    await handleClick(values[index]);
  };
  if (!selectedLocation) {
    selectedLocation = 'All locations'
  }
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {values.map((value, index) => (
          <Link
            key={index}
            underline="hover"
            color="black"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(index);
            }}
            sx={{
              fontWeight: value === selectedLocation ? 'bold' : 'normal',
              cursor: 'pointer',
              pointerEvents: value === selectedLocation ? 'none' : 'auto',
              '&:hover': {
                color: value === selectedLocation ? 'primary' : 'inherit',
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
