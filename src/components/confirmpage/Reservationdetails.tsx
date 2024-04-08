import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button, useTheme, useMediaQuery,Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import CancelRoomModal from './CancelRoomModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { generateDescription, getDateObject, prodUrlGenerator } from '../../utils/util';
import { useTranslation } from 'react-i18next';
import { ExchangeRateData } from '../../types';
import { formatCurrency } from '../../utils/i18next';
import { getCurrentUser } from 'aws-amplify/auth';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Styled components 
const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '5px'
});

const StyledTypography = styled(Typography)({
  marginBottom: '1px',
});

const LeftDiv = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  padding: '16px',
  borderRadius: '8px',
  overflow: 'hidden',
});

const RightDiv = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: '16px',
  padding: '16px',
});

const DateBox = styled(Box)({
  width: '105px',
  height: '106px',
  borderRadius: '5px 5px 5px 5px',
  border: '1px solid grey',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  padding: '2px',
  marginRight: '5px',
});

const CancelButton = styled(Button)({
  color: '#006EFF',
  textTransform: 'capitalize',
  marginTop: '-2px',
  marginBottom: '1px',
});
const StyledImage = styled('img')({
  width: '100%',
  height: '90%',
  objectFit: 'cover',
});

const OuterStyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 2,
  marginBottom: '20px',
  marginTop: '10px',
});
const StyledPeopleIcon = styled(PeopleIcon)({
  color: '#5D5D5D',
  marginRight: '12px',
  marginLeft: '48px',
  marginTop: '2px',
  marginBottom: '3px',
});
const TitleStyledTypography = styled(Typography)({
  fontWeight: 600,
  marginBottom: '10px',
});
const InnerStyledTypography = styled(Typography)({
  variant: 'body2',
  gutterBottom: true,
  marginBottom: '12px',
  color: '#5D5D5D',
});
const BottomStyledTypography = styled(Typography)({
  color: '#5D5D5D',
  variant: 'body2',
  gutterBottom: true,
  cursor: 'pointer',
});
const RateStyledTypography = styled(Typography)({
  variant: 'body2',
  marginTop: '4px',
});
const Ratesxprop = {
  fontWeight: 'bold',
  fontSize: '1.1 rem',
};
const FirstDateStyledTypography = styled(Typography)({
  variant: "body2",
  fontWeight: "bold",
});
const SecondDateStyledTypography = styled(Typography)({
  variant: 'body2',
});
 const IconButtonStyle = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
 }

const config = {
  headers: {
    'X-Api-Key': `${process.env.X_API_KEY}`
  }
};

const ReservationDetails = () => {
  const theme = useTheme();
  const isSm768 = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs450 = useMediaQuery('(max-width:450px)');

  const [loginId, setLoginId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState('');

  const handleClickOpen = async () => {
    if (!loginId) {
      const res = await axios.get(prodUrlGenerator(`${process.env.SEND_OTP}?email=${bookingDetails?.billingEmail}`), config);
      if (res.status === 200) toast.success("OTP Sent Successfully");
      setOpen(true);
      return;
    }

    const deleteRes = await axios.get(prodUrlGenerator(`${process.env.DELETE_BOOKING}?reservationId=${bookingDetails?.reservationId}`), config)
    if (deleteRes.status === 200) toast.success("Booking Cancelled");
    console.log(deleteRes);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmOtp = async () => {
    try {
      const res = await axios.get(prodUrlGenerator(`${process.env.VERIFY_OTP}?email=${bookingDetails?.billingEmail}&otp=${otp}`), config);
      if (res.status === 200) {
        toast.success("OTP Confirmed. Booking Cancelled")
      }
      else if (res.status === 401) {
        toast.error("Invalid/Expired OTP")
        return;
      }

      const deleteRes = await axios.get(prodUrlGenerator(`${process.env.DELETE_BOOKING}?reservationId=${bookingDetails?.reservationId}`), config)
      console.log(deleteRes.data);
      handleClose();
    } catch (error) {
      toast.error("Invalid/Expired OTP")
    }
  };

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

  const bookingDetails = useSelector((state: RootState) => state.bookingDetails.result);
  const { t, i18n } = useTranslation();
  const exchangeRates: ExchangeRateData = useSelector((state: RootState) => state.intel.exchangeRates);
  const activeCurrency: string = useSelector((state: RootState) => state.intel.activeCurrency);
  const [cancellationPolicyOpen, setCancellationPolicyOpen] = useState(false); // New state for Cancellation Policy modal
  const handleCancellationPolicyOpen = () => {
    setCancellationPolicyOpen(true);
 };

 const handleCancellationPolicyClose = () => {
    setCancellationPolicyOpen(false);
 };
  return (
    <>
      <Toaster />
      <StyledBox>
        <StyledBox alignItems="center">
          <StyledTypography variant="h5" gutterBottom>
            Room {bookingDetails?.roomTypeId}: {bookingDetails?.roomTypeName}
          </StyledTypography>
          <StyledPeopleIcon />
          <StyledTypography variant="body1">
            {generateDescription(bookingDetails?.adults, bookingDetails?.children, 0)}
          </StyledTypography>
        </StyledBox>
        {
          !bookingDetails?.cancelled &&
          <CancelButton variant="text" onClick={handleClickOpen}>
            {i18n.t("confirmation.cancelRoom")}
          </CancelButton>
        }
        <CancelRoomModal
          open={open}
          handleClose={handleClose}
          handleConfirmOtp={handleConfirmOtp}
          otp={otp}
          setOtp={setOtp}
        />
      </StyledBox>
      <Grid container spacing={2}>
        <LeftDiv item xs={12} md={3} sm={6}>
          <StyledImage src={bookingDetails?.imageUrl} alt="Booking Image" />
        </LeftDiv>
        <RightDiv item xs={12} md={9} sm={6}>
          <OuterStyledBox>
            <DateBox>
              <FirstDateStyledTypography>{i18n.t("landingPageForm.checkIn")}</FirstDateStyledTypography>
              <SecondDateStyledTypography>{getDateObject(bookingDetails?.checkInDate).day}</SecondDateStyledTypography>
              <SecondDateStyledTypography>{getMonthName(getDateObject(bookingDetails?.checkInDate).month)} {getDateObject(bookingDetails?.checkInDate).year}</SecondDateStyledTypography>
            </DateBox>
            <DateBox>
              <FirstDateStyledTypography>{i18n.t("landingPageForm.checkOut")}</FirstDateStyledTypography>
              <SecondDateStyledTypography>{getDateObject(bookingDetails?.checkOutDate).day}</SecondDateStyledTypography>
              <SecondDateStyledTypography>{getMonthName(getDateObject(bookingDetails?.checkOutDate).month)} {getDateObject(bookingDetails?.checkOutDate).year}</SecondDateStyledTypography>
            </DateBox>
          </OuterStyledBox>
          <TitleStyledTypography variant="h5" gutterBottom>
            <strong>{bookingDetails?.promotionTitle}</strong>
          </TitleStyledTypography>
          <InnerStyledTypography>
            {bookingDetails?.promotionDescription}
          </InnerStyledTypography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
            <BottomStyledTypography onClick={handleCancellationPolicyOpen}>
                  Copy explaining the cancellation policy, if applicable.
            </BottomStyledTypography>
            </Grid>
            <Dialog
               open={cancellationPolicyOpen}
               onClose={handleCancellationPolicyClose}
               maxWidth="md"
               fullWidth={true}
               PaperProps={{
                 style: {
                      height: '80vh',
                      overflow: 'auto',
                         },
                   }}
                >
               <DialogTitle>
                  Cancellation Policy
             <IconButton
               aria-label="close"
                onClick={handleCancellationPolicyClose}
                sx={IconButtonStyle}
                  >
                <CloseIcon />
                </IconButton>
                </DialogTitle>
                <DialogContent>
          <DialogContentText>
                 Your cancellation policy details go here.
          </DialogContentText>
          </DialogContent>
          </Dialog>

            <Grid item xs={12} sm={6}>
              <RateStyledTypography align="right" sx={Ratesxprop}>
                {formatCurrency(bookingDetails?.nightlyRate, activeCurrency, exchangeRates, i18n)}/night total
              </RateStyledTypography>
            </Grid>
          </Grid>
        </RightDiv>
      </Grid>
    </>
  );
};

export default ReservationDetails;

// Function to get month name
const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString('default', { month: 'long' });
};






