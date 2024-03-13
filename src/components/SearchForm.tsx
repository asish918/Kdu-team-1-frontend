// src/components/SearchForm.tsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropertyName from './PropertyName';
import NumberOfGuests from './NumberOfGuests';
import NumberOfRooms from './NumberOfRooms';
import WheelchairAccessible from './WheelchairAccessible';
import SearchButton from './SearchButton';
import BookingDateRange from './BookingDateRange';

const SearchForm: React.FC = () => {
 const [property, setProperty] = useState('');

 const handlePropertyChange = (property: string) => {
    setProperty(property);
 };
 const searchFormStyles = {
  maxWidth: 450,
  margin: '25px 25px 25px 25px',
  padding: 3,
  border: '1px solid #ddd',
  borderRadius: 1,
  boxShadow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
 };

 const handleSearch = () => {
    console.log('Searching...');
    // Implement search logic here
 };

 const isDisabled = !property; 

 return (
     <Box
      component="form"
      sx={searchFormStyles}
       >
      <PropertyName onPropertyChange={handlePropertyChange} />
      <BookingDateRange />
      <NumberOfGuests />
      <NumberOfRooms />
      <WheelchairAccessible />
      <SearchButton isDisabled={isDisabled} onClick={handleSearch} />
    </Box>
 );
};

export default SearchForm;


