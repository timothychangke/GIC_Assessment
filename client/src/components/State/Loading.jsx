import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <CircularProgress sx={{ color: '#021d49' }} />
      <Typography variant="h6" sx={{ marginTop: 2, color: '#021d49' }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
