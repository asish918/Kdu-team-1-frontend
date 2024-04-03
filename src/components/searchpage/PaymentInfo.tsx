import React, { useState,useEffect } from 'react';
import { TextField, Button, Box, Typography, Grid, Checkbox, FormControlLabel,MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';

import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';

type FormData = {
 firstName: string;
 lastName: string;
 phone: string;
 email: string;
 mailingAddress1: string;
 country: string;
 city: string;
 mailingAddress2: string;
 state: string;
 zip: string;
 cardName: string;
 cvv: string;
 expMM: string;
 expYY: string;
 specialoffer: boolean;
 agreeToTerms: boolean;
};

const PaymentInfo: React.FC = () => {
 const [showTravellerInfo, setShowTravellerInfo] = useState(true);
 const [showBillingInfo, setShowBillingInfo] = useState(false);
 const [showPaymentInfo, setShowPaymentInfo] = useState(false);
 const [selectedCountry, setSelectedCountry] = useState<ICountry>();
 const [selectedState, setSelectedState] = useState<IState>();

 

 const [countries, setCountries] = useState<ICountry[]>([]);
 const [states, setStates] = useState<IState[]>([]);
 const [cities, setCities] = useState<ICity[]>([]);


useEffect(() => {
  const fetchCountries = () => {
    const countries: ICountry[] = Country.getAllCountries();
    setCountries(countries);
  };
  fetchCountries();
}, []);

const handleCountryChange = (country: ICountry) => {
  setSelectedCountry(country);
  const localstates: IState[] = State.getStatesOfCountry(country.isoCode);
  console.log(localstates);
  console.log(country.isoCode);
  setStates(localstates);
};

const handleStateChange = async (state: IState) => {
  setSelectedState(state);
  const cities: ICity[] = City.getCitiesOfState(selectedCountry?.isoCode, state.isoCode);
  setCities(cities);
  console.log(state.isoCode)
  console.log(cities)
};

 const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      mailingAddress1: '',
      country: '',
      city: '',
      mailingAddress2: '',
      state: '',
      zip: '',
      cardName: '',
      cvv: '',
      expMM: '',
      expYY: '',
      specialoffer: false,
      agreeToTerms: false,
    },
 });

 const onSubmitTravellerInfo = (data: FormData) => {
    console.log(data);
    setShowBillingInfo(true);
    setShowTravellerInfo(false);
 };

 const onSubmitBillingInfo = (data: FormData) => {
    console.log(data);
    setShowPaymentInfo(true);
    setShowBillingInfo(false);
 };

 const onSubmitPaymentInfo = (data: FormData) => {
    console.log(data);
 };

 const handleEditBillingInfo = () => {
    setShowPaymentInfo(false);
    setShowBillingInfo(true);
 };

 const handleEditTravellerInfo = () => {
    setShowTravellerInfo(true);
    setShowBillingInfo(false);
 };

 // Define styles
 const sectionTitleStyle = {
    backgroundColor: '#eff0f1',
    padding: '10px',
    borderRadius: '5px',
    mb: 2,
 };
 const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent:"space-between",
 });

 const InnerStyledBox = styled(Box)({
  display:"flex",
  flexDirection:"column",
  width:"45%",
 });

 const InfoBox = styled(Box)({
  display:"flex",
  justifyContent:"flex-end",
 });

 const buttonStyle = {
    mb: 2,
    mr: 2,
 };
 const buttonStyletwo ={
   mr:1,
 }
 const MainTitle = {
  mb: 2,
};

 return (
    <Box>
      <Typography variant="h5" sx ={MainTitle}>
        Payment Info
      </Typography>
      <Typography variant="h6" sx={sectionTitleStyle}>
        1. Traveller Info
      </Typography>
      {showTravellerInfo && (
        <form onSubmit={handleSubmit(onSubmitTravellerInfo)}>
            <StyledBox>
              <InnerStyledBox>
              <TextField
                label="First Name"
                {...register('firstName')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                {...register('phone')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                {...register('email')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </InnerStyledBox>
            <InnerStyledBox>            
              <TextField
                label="Last Name"
                {...register('lastName')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </InnerStyledBox>
          </StyledBox>
          <InfoBox>
            <Button type="submit" variant="contained" color="primary" sx={buttonStyle}>
              NEXT:BILLING INFO
            </Button>
          </InfoBox>
        </form>
      )}
      <Typography variant="h6" sx={sectionTitleStyle}>
        2. Billing Info
      </Typography>
      {showBillingInfo && (
        <form onSubmit={handleSubmit(onSubmitBillingInfo)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                {...register('firstName')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Mailing Address 1"
                {...register('mailingAddress1')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              
               <TextField
              select
              label="Country"
              {...register('country')}
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              {countries.map((country) => (
                <MenuItem key={country.name} value={country}>
                 {country.name}
                </MenuItem>
              ))}
            </TextField>
            
          <TextField
              select
              label="City"
              {...register('city')}
              variant="outlined"
              fullWidth
              margin="normal"
            >
              {cities.map((city) => (
                <MenuItem key={city.name} value={city}>
                 {city.name}
                </MenuItem>
              ))}
            </TextField>

        
      
              <TextField
                label="Phone"
                {...register('phone')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                {...register('email')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                {...register('lastName')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Mailing Address 2"
                {...register('mailingAddress2')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                 
              <TextField
              select
              label="State"
              {...register('state')}
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => handleStateChange(e.target.value)}
            >
              {states.map((state) => (
                <MenuItem key={state.name} value={state}>
                 {state.name}
                </MenuItem>
              ))}
            </TextField>


                </Grid>
                <Grid item xs={6}>
                 <TextField
                    label="Zip"
                    {...register('zip')}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <InfoBox>
            <Button
              type="button"
              variant="text"
              color="primary"
              onClick={handleEditTravellerInfo}
              sx={buttonStyle}
            >
              Edit Traveller Info
            </Button>
            <Button type="submit" variant="contained" color="primary" sx={buttonStyle}>
              NEXT:PAYMENT INFO
            </Button>
          </InfoBox>
        </form>
      )}
      <Typography variant="h6" sx={sectionTitleStyle}>
        3. Payment Info
      </Typography>
      {showPaymentInfo && (
        <form onSubmit={handleSubmit(onSubmitPaymentInfo)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Card Name"
                {...register('cardName')}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="CVV"
                {...register('cvv')}
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
              />
              <FormControlLabel
                control={<Checkbox {...register('specialoffer')} />}
                label="Send me special offers"
              />
              <br />
              <FormControlLabel
                control={<Checkbox {...register('agreeToTerms')} />}
                label="I agree to the Terms and Policies of travel"
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                 <TextField
                    label="ExpMM"
                    {...register('expMM')}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                 />
                </Grid>
                <Grid item xs={6}>
                 <TextField
                    label="ExpYY"
                    {...register('expYY')}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <InfoBox>
            <Button
              type="button"
              variant="text"
              color="primary"
              onClick={handleEditBillingInfo}
              sx={buttonStyletwo}
            >
              Edit Billing Info
            </Button>
            <Button type="submit" variant="contained" color="primary">
              PURCHASE
            </Button>
          </InfoBox>
        </form>
      )}
    </Box>
 );
};

export default PaymentInfo;



