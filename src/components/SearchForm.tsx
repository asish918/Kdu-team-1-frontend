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
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { DatePicker } from './datepicker/DatePicker';

const SearchForm: React.FC = () => {
   const [property, setProperty] = useState('');
   const wheelchairAccessible = useSelector((state: RootState) => state.hotelPolicies.policies.wheelchair);

   const handlePropertyChange = (property: string) => {
      setProperty(property);
   };

   const handleSearch = () => {
      console.log('Searching...');
      // Implement search logic here
   };

   const isDisabled = !property;

   return (
      <Box
         component="form"
         sx={{
            maxWidth: 450,
            margin: '10px 25px 0px 25px',
            padding: 3,
            border: '1px solid #ddd',
            borderRadius: 1,
            boxShadow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: 'white',
         }}
      >
         <PropertyName onPropertyChange={handlePropertyChange} />
         {/* <BookingDateRange /> */}
         <DatePicker />
         <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Box sx={{ width: '70%' }}>
               <NumberOfGuests />
            </Box>
            <Box sx={{ width: '30%' }}>
               <NumberOfRooms />
            </Box>
         </Box>

         {wheelchairAccessible && <WheelchairAccessible />}
         <Box sx={{ width: '100%', display: "flex", justifyContent: 'center' }}> {/* Center the SearchButton */}
            <SearchButton isDisabled={isDisabled} onClick={handleSearch} />
         </Box>
      </Box>
   );
};

export default SearchForm;



