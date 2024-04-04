import React, { useRef, forwardRef } from 'react';
import ReactToPrint from 'react-to-print';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CompositionPage from './Composition';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ComponentToPrint = forwardRef<HTMLDivElement, {}>((props, ref) => (
 <div ref={ref} >
   <CompositionPage/>    
 </div>

));
const OuttermostBoxStyle = {
  display: 'flex', 
  justifyContent: 'space-between',
  width: '98%',
  alignItems: 'center',
  marginBottom: -1,
  marginTop: 2,
  marginLeft:2,
};
const InnerBoxStyle = {
  display: 'flex',
  gap: 2,
};
const StyledButton = styled(Button)({
  color: '#006EFF',
  textTransform: 'capitalize',
  variant:"text",
 });
 

const PrintComponent: React.FC = () => {
 const componentRef = useRef<HTMLDivElement>(null);

 return (
    <div>
      <Box sx={OuttermostBoxStyle}>
        <Typography variant="h6">Upcoming reservation #XXXXXXXXX</Typography>
        <Box sx={InnerBoxStyle}>
        <ReactToPrint
        trigger={() => <StyledButton >
          Print
          </StyledButton>}
        content={() => componentRef.current}
      />
        <StyledButton >
        Email
        </StyledButton>
        </Box>
      </Box>
      <ComponentToPrint ref={componentRef} />
    </div>
 );
};

export default PrintComponent;

