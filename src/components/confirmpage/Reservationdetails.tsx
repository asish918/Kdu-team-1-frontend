import React, { useState } from 'react';
import { Grid, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import CancelRoomModal from './CancelRoomModal';

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

const ReservationDetails = () => {
  const theme = useTheme();
  const isSm768 = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs450 = useMediaQuery('(max-width:450px)');

 const [open, setOpen] = useState(false);
 const [otp, setOtp] = useState('');

 const handleClickOpen = () => {
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

 const handleConfirmOtp = () => {
    // Handle OTP confirmation logic here
    console.log('OTP confirmed:', otp);
    handleClose();
 };

 const checkInDate = { day: '15', month: '04', year: '2024' };
 const checkOutDate = { day: '20', month: '04', year: '2024' };
 
 return (
    <>
      <StyledBox>
        <StyledBox alignItems="center">
          <StyledTypography variant="h5" gutterBottom>
            Room 1: Executive Room
          </StyledTypography>
          <StyledPeopleIcon />
          <StyledTypography variant="body1">
            2 adults, 1 child
          </StyledTypography>
        </StyledBox>
        <CancelButton variant="text" onClick={handleClickOpen}>
        Cancel Room
      </CancelButton>
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
          <StyledImage src="https://picsum.photos/200/200" alt="Package" />
        </LeftDiv>
        <RightDiv item xs={12} md={9} sm={6}>
          <OuterStyledBox>
            <DateBox>
              <FirstDateStyledTypography>Check-in</FirstDateStyledTypography>
              <SecondDateStyledTypography>{checkInDate.day}</SecondDateStyledTypography>
              <SecondDateStyledTypography>{getMonthName(checkInDate.month)} {checkInDate.year}</SecondDateStyledTypography>
            </DateBox>
            <DateBox>
              <FirstDateStyledTypography>Check-out</FirstDateStyledTypography>
              <SecondDateStyledTypography>{checkOutDate.day}</SecondDateStyledTypography>
              <SecondDateStyledTypography>{getMonthName(checkOutDate.month)} {checkOutDate.year}</SecondDateStyledTypography>
            </DateBox>
          </OuterStyledBox>
          <TitleStyledTypography variant="h5" gutterBottom>
            <strong>$150 Dining Credit Package</strong>
          </TitleStyledTypography>
          <InnerStyledTypography>
            Spend $10 every night you stay and earn $150 on dining
            <br />credit at the resort.
          </InnerStyledTypography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <BottomStyledTypography>
                Copy explaining the cancellation policy, if applicable.
              </BottomStyledTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RateStyledTypography align="right" sx={Ratesxprop}>
                $XXX/night total
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






