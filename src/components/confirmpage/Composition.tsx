import React from 'react';
import { Box } from '@mui/material';

import CustomizedAccordions from './CustomizedAccordions';
import ReservationDetails from './Reservationdetails';

const OuttermostBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  padding: 2, 
};
const InnerBoxStyle = {
  border: '1px solid',
  borderColor: 'divider',
  width: '100%',
  p: 2,
  marginBottom: 2,
};
const InnermostBoxStyle = {
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,  
};
const CompositionPage: React.FC = () => {
 
 return (
    <Box sx={OuttermostBoxStyle}>
      <Box sx={InnerBoxStyle}>
        <Box sx={InnermostBoxStyle}>
          <ReservationDetails/>
          <CustomizedAccordions/>
        </Box>  
      </Box>
    </Box>
 );
};

export default CompositionPage;


