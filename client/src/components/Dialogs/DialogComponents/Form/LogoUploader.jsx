import React from 'react';

import Dropzone from 'react-dropzone';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import FlexBox from '../../../UI/Flexbox';

const LogoUploader = ({ cafe, setCafe, open }) => (
  <>
    <Divider sx={{ margin: '1.25rem 0' }} />
    <Box border={`1px solid #A3A3A3`} borderRadius="5px" mt="1rem" p="1rem">
      <Dropzone
        acceptedFiles=".jpg,.jpeg,.png"
        multiple={false}
        onDrop={(acceptedFiles) =>
          setCafe((prevCafe) => ({
            ...prevCafe,
            logo: acceptedFiles[0],
          }))
        }
      >
        {({ getRootProps, getInputProps }) => (
          <FlexBox>
            <Box
              {...getRootProps()}
              border={`2px dashed #4a7249`}
              p="1rem"
              width="100%"
              sx={{ '&:hover': { cursor: 'pointer' } }}
            >
              <input {...getInputProps()} />
              {!cafe.logo ? (
                <p>Add Logo Here</p>
              ) : (
                <FlexBox>
                  <Typography>
                    {cafe.logo.name
                      ? cafe.logo.name
                      : cafe.logo.split('/').pop() === 'null'
                      ? 'Add Logo Here'
                      : cafe.logo.split('/').pop()}
                  </Typography>
                  <EditOutlined />
                </FlexBox>
              )}
            </Box>
            {cafe.logo && (
              <IconButton
                onClick={() =>
                  setCafe((prevCafe) => ({ ...prevCafe, logo: null }))
                }
                sx={{ width: '10%' }}
              >
                <DeleteOutlined />
              </IconButton>
            )}
          </FlexBox>
        )}
      </Dropzone>
    </Box>
  </>
);

export default LogoUploader;
