import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { Typography, Box } from '@mui/material';
import CompositionPage from './Composition';
import { styled } from '@mui/material/styles';

// Define your custom button component
const CustomButton = styled('button')({
 color: '#006EFF',
 textTransform: 'capitalize',
 backgroundColor: 'transparent',
 border: 'none',
 cursor: 'pointer',
 padding: '6px 12px',
 fontSize: '1rem',
 '&:hover': {
    backgroundColor: '#f5f5f5',
 },
 '&:active': {
    backgroundColor: '#e0e0e0',
 },
});

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

const PrintComponent: React.FC = () => {
 const componentRef = useRef<HTMLDivElement>(null);
 const [allAccordionsOpen, setAllAccordionsOpen] = useState(false);

 const reactToPrint =
  useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => setAllAccordionsOpen(false)
  })

 const handlePrint = () => {
    setAllAccordionsOpen(true); 
    setTimeout(() => {
        reactToPrint();
    }, 100)
 };

 const handleEmail = () => {
    console.log("Hello Email");
 };

 return (
    <div>
      <Box sx={OuttermostBoxStyle}>
        <Typography variant="h6">Upcoming reservation #XXXXXXXXX</Typography>
        <Box sx={InnerBoxStyle}>
          <CustomButton onClick={handlePrint}>Print</CustomButton>
          <CustomButton onClick={handleEmail}>Email</CustomButton>
        </Box>
      </Box>
      <div ref={componentRef}>
        <CompositionPage allAccordionsOpen={allAccordionsOpen} />
      </div>
    </div>
 );
};

export default PrintComponent;






