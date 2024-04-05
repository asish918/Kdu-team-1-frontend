import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import TravelForm, { TravelFormFields } from '../checkoutpage/TravelForm';
import BillingForm, { BillingFormFields } from '../checkoutpage/BillingForm';
import PaymentForm from '../checkoutpage/PaymentForm';
import { useDispatch } from 'react-redux';
import { setBillingInfo, setTravellerInfo } from '../../redux/reducers/checkoutFormReducer';

const PaymentInfo: React.FC = () => {
  const [showTravellerInfo, setShowTravellerInfo] = useState(true);
  const [showBillingInfo, setShowBillingInfo] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitTravellerInfo = (data: TravelFormFields) => {
    dispatch(setTravellerInfo(data));
    setShowBillingInfo(true);
    setShowTravellerInfo(false);
  };

  const onSubmitBillingInfo = (data: BillingFormFields) => {
    console.log(data);
    dispatch(setBillingInfo(data));
    setShowPaymentInfo(true);
    setShowBillingInfo(false);
  };

  const handleEditBillingInfo = () => {
    setShowPaymentInfo(false);
    setShowBillingInfo(true);
  };

  const handleEditTravellerInfo = () => {
    setShowTravellerInfo(true);
    setShowBillingInfo(false);
  };

  const handlePurchase = () => {
    navigate("/confirmation")
  }

  const sectionTitleStyle = {
    backgroundColor: '#eff0f1',
    padding: '10px',
    borderRadius: '5px',
    mb: 2,
  };

  const MainTitle = {
    mb: 2,
  };

  return (
    <Box>
      <Typography variant="h5" sx={MainTitle}>
        Payment Info
      </Typography>
      <Typography variant="h6" sx={sectionTitleStyle}>
        1. Traveller Info
      </Typography>
      {showTravellerInfo && (
        <TravelForm onSubmitTravellerInfo={onSubmitTravellerInfo} />
      )}
      <Typography variant="h6" sx={sectionTitleStyle}>
        2. Billing Info
      </Typography>
      {showBillingInfo && (
        <BillingForm onSubmitBillingInfo={onSubmitBillingInfo} handleEditTravellerInfo={handleEditTravellerInfo} />
      )}
      <Typography variant="h6" sx={sectionTitleStyle}>
        3. Payment Info
      </Typography>
      {showPaymentInfo && (
        <PaymentForm handleEditBillingInfo={handleEditBillingInfo} handlePurchase={handlePurchase} />
      )}
    </Box>
  );
};

export default PaymentInfo;