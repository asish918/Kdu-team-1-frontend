import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
const BoxStyle = {
  textAlign: 'left',
  backgroundColor: '#EFF0F1',
  padding: '10px',
  marginLeft: '2px',
  marginRight: '20px',
  marginTop: '10px',
  marginBottom: '10px',
  width: '330px',
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
  const { t, i18n } = useTranslation();


  return (
    <Box
      sx={BoxStyle}
    >
      <Typography variant="h5" fontWeight="bold">
        {i18n.t("confirmation.needHelp")}
      </Typography>
      <Typography variant="h6" fontWeight="bold" sx={TopographyStyle}>
        {i18n.t("confirmation.call")} 1-800-555-5555
      </Typography>
      <Typography variant="body1" sx={TopographyStyle}>
        Mon-Fr 8a-5p EST
      </Typography>
    </Box>
  );
};

export default ContactInfo;

