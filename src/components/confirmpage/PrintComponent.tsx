import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Typography, Box } from '@mui/material';
import CompositionPage from './Composition';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { prodUrlGenerator, urlGenerator } from '../../utils/util';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

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

const config = {
  headers: {
    'X-Api-Key': `${process.env.X_API_KEY}`
  }
};

const PrintComponent: React.FC = () => {
  const bookingDetails = useSelector((state: RootState) => state.bookingDetails.result);
  const componentRef = useRef<HTMLDivElement>(null);
  const [allAccordionsOpen, setAllAccordionsOpen] = useState(false);
  const { t, i18n } = useTranslation();

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

  const handleEmail = async () => {
    const res = await axios.get(prodUrlGenerator(`${process.env.SEND_EMAIL}?email=${bookingDetails?.billingEmail}&reservationId=${bookingDetails?.reservationId}`), config);
    if (res.status === 200) toast.success("Email Sent Successfully");
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
      <Toaster />
      <Box sx={OuttermostBoxStyle}>
        <Typography variant="h6">{i18n.t("confirmation.upcomingReservation")} {bookingDetails?.reservationId}</Typography>
        {bookingDetails?.cancelled && <CancelledText>{i18n.t("confirmation.cancelled")}</CancelledText>}
        <Box sx={InnerBoxStyle}>
          <CustomButton onClick={handlePrint}>{i18n.t("confirmation.print")}</CustomButton>
          <CustomButton disabled={bookingDetails?.cancelled} onClick={handleEmail}>{i18n.t("confirmation.email")}</CustomButton>
        </Box>
      </Box>
      <div ref={componentRef}>
        <CompositionPage allAccordionsOpen={allAccordionsOpen} />
      </div>
    </div>
  );
};

export default PrintComponent;






