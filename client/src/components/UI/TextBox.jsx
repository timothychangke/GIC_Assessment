import { InputBase, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledInputBase = styled(InputBase)(({ theme, error }) => ({
  width: '100%',
  backgroundColor: '#F0F0F0',
  borderRadius: '2rem',
  padding: '1rem 2rem',
  transition: 'all 0.3s ease-in-out',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: '#E8E8E8',
  },
  '&.Mui-focused': {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)',
  },
  ...(error && {
    border: '2px solid #FF3D00',
    backgroundColor: '#FFFFFF',
    '&:hover, &.Mui-focused': {
      border: '2px solid #FF3D00',
      backgroundColor: '#FFFFFF',
    },
  }),
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  color: '#FF3D00',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  marginLeft: '1rem',
  fontWeight: 500,
  letterSpacing: '0.03em',
  height: '1rem',
}));

const TextBox = ({
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 1,
  error = false,
  helperText = '',
  sx = {},
}) => {
  return (
    <Box sx={{ width: '100%', marginBottom: '1rem', position: 'relative' }}>
      <StyledInputBase
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        error={error}
        sx={sx}
      />
      <ErrorText>{error && helperText ? helperText : ''}</ErrorText>
    </Box>
  );
};

export default TextBox;
