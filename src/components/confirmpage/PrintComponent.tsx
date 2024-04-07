import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Typography, Box } from '@mui/material';
import CompositionPage from './Composition';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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
  marginLeft: 2,
};

const InnerBoxStyle = {
  display: 'flex',
  gap: 2,
};

const PrintComponent: React.FC = () => {
  const bookingDetails = useSelector((state: RootState) => state.bookingDetails.result);
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


  const CancelledText = styled('div')`
  background-color: red;
  padding: 3px;
  margin-right: auto;
  margin-left: 15px;
  border-radius: 5px;
  color: white;
`

  return (
    <div>
      <Box sx={OuttermostBoxStyle}>
        <Typography variant="h6">Upcoming reservation {bookingDetails?.reservationId}</Typography>
        {bookingDetails?.cancelled && <CancelledText>Cancelled</CancelledText>}
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






