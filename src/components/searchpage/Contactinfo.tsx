import React from 'react';
import { Typography, Box } from '@mui/material';
const BoxStyle = {
  textAlign: 'left',
  backgroundColor: '#EFF0F1',
  padding: '10px',
  marginLeft: '2px',
  marginRight: '20px',
  marginTop: '10px',
  marginBottom: '10px',
  '@media (max-width: 768px)': {
    marginLeft: '10px',
    width: '100%',
    marginRight: '10px',
  },
};
const TopographyStyle = {
  mt: 1,
}
const ContactInfo: React.FC = () => {
  return (
    <Box
      sx={BoxStyle}
    >
      <Typography variant="h5" fontWeight="bold">
        Need help?
      </Typography>
      <Typography variant="h6" fontWeight="bold" sx={TopographyStyle}>
        Call 1-800-555-5555
      </Typography>
      <Typography variant="body1" sx={TopographyStyle}>
        Mon-Fr 8a-5p EST
      </Typography>
    </Box>
  );
};

export default ContactInfo;

