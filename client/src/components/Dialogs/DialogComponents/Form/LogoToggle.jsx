import React from 'react';
import FlexBox from '../../../UI/Flexbox';
import { ImageOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';

const LogoToggle = ({ isImage, setIsImage, type }) => {
  return (
    <FlexBox gap="0.25rem" onClick={() => setIsImage(!isImage)}>
      <ImageOutlined sx={{ color: 'gray' }} />
      <Typography
        color={'gray'}
        sx={{ '&:hover': { cursor: 'pointer', color: 'gray' } }}
      >
        {type === 'new' ? 'Attach a Logo' : 'Upload new logo'}
      </Typography>
    </FlexBox>
  );
};

export default LogoToggle;
