import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import TravelForm, { TravelFormFields } from '../checkoutpage/TravelForm';
import BillingForm, { BillingFormFields } from '../checkoutpage/BillingForm';
import PaymentForm from '../checkoutpage/PaymentForm';
import { useDispatch, useSelector } from 'react-redux';
import { setBillingInfo, setTravellerInfo } from '../../redux/reducers/checkoutFormReducer';
import { RootState } from '../../redux/store';
import { BookingRequest } from '../../types';
import { getCurrentUser } from 'aws-amplify/auth';
import { createBooking } from '../../redux/thunks/createBooking';
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga";
import toast, { Toaster } from 'react-hot-toast';

const PaymentInfo: React.FC = () => {
  const [showTravellerInfo, setShowTravellerInfo] = useState(true);
  const [showBillingInfo, setShowBillingInfo] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [loginId, setLoginId] = useState<string | null>(null);

  const checkoutForm = useSelector((state: RootState) => state.checkoutForm);
  const itenary = useSelector((state: RootState) => state.itenary);
  const otherInfo = useSelector((state: RootState) => state.searchForm);
  const confirmationBooking = useSelector((state: RootState) => state.confirmationBooking)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitTravellerInfo = (data: TravelFormFields) => {
    dispatch(setTravellerInfo(data));
    setShowBillingInfo(true);
    setShowTravellerInfo(false);
  };

  const onSubmitBillingInfo = (data: BillingFormFields) => {
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

  const { t, i18n } = useTranslation();


  const handlePurchase = (event) => {
    event.preventDefault();

    // Track Purchase event
    ReactGA.event({
      category: 'User',
      action: 'Purchase Item',
      label: 'Rooms',
     });

    const bookingRequest: BookingRequest = {
      billing_info: {
        city: checkoutForm.billing_info.city,
        country: checkoutForm.billing_info.country,
        email: checkoutForm.billing_info.email,
        firstName: checkoutForm.billing_info.firstName,
        lastName: checkoutForm.billing_info.lastName,
        mailingAddress1: checkoutForm.billing_info.mailingAddress1,
        mailingAddress2: checkoutForm.billing_info.mailingAddress2,
        phone: parseInt(checkoutForm.billing_info.phone),
        state: checkoutForm.billing_info.state,
        zipcode: parseInt(checkoutForm.billing_info.zipcode)
      },
      traveller_info: {
        email: checkoutForm.traveller_info.email,
        firstName: checkoutForm.traveller_info.firstName,
        lastName: checkoutForm.traveller_info.lastName,
        phone: parseInt(checkoutForm.traveller_info.phone)
      },
      transaction_info: {
        nightlyRate: itenary.room?.averageRate,
        subtotal: itenary.subtotal,
        taxes: itenary.taxes,
        total: itenary.subtotal,
        vat: itenary.vat
      },
      booking_info: {
        adultCount: otherInfo.adults,
        amountDueResort: itenary.due_resort,
        checkInDate: otherInfo.startDate,
        checkOutDate: otherInfo.endDate,
        childCount: otherInfo.kids,
        email: loginId ?? checkoutForm.billing_info.email,
        guestName: checkoutForm.billing_info.firstName,
        offers: true,
        promotionId: parseInt(itenary.promotion?.promotion_id),
        rooms: otherInfo.numberOfRooms,
        roomTypeId: itenary.room?.roomTypeId,
        totalCost: itenary.subtotal
      }
    }

    console.log(bookingRequest);
    dispatch(createBooking({
      url: `${process.env.CREATE_BOOKING}`,
      requestBody: bookingRequest
    }));
  }

  useEffect(() => {
    if (confirmationBooking.status === "success") {
      navigate(`/confirmation?id=${confirmationBooking.result}`)
    }
    if (confirmationBooking.status === "error") {
      toast.error(confirmationBooking.message);
    }
  }, [confirmationBooking])

  useEffect(() => {
    async function fetchUserSession() {
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(signInDetails);
        setLoginId(signInDetails?.loginId);

      } catch (err) {
        console.log(err);
      }
    }

    fetchUserSession();
  }, [])

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
      <Toaster />
      <Typography variant="h5" sx={MainTitle}>
        {i18n.t("confirmation.paymentInfo")}
      </Typography>
      <Typography variant="h6" sx={sectionTitleStyle}>
        1. {i18n.t("confirmation.travellerInfo")}
      </Typography>
      {showTravellerInfo && (
        <TravelForm onSubmitTravellerInfo={onSubmitTravellerInfo} />
      )}
      <Typography variant="h6" sx={sectionTitleStyle}>
        2. {i18n.t("confirmation.billingInfo")}
      </Typography>
      {showBillingInfo && (
        <BillingForm onSubmitBillingInfo={onSubmitBillingInfo} handleEditTravellerInfo={handleEditTravellerInfo} />
      )}
      <Typography variant="h6" sx={sectionTitleStyle}>
        3. {i18n.t("confirmation.paymentInfo")}
      </Typography>
      {showPaymentInfo && (
        <PaymentForm handleEditBillingInfo={handleEditBillingInfo} handlePurchase={handlePurchase} />
      )}
    </Box>
  );
};

export default PaymentInfo;