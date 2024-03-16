// src/components/SearchForm.tsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import PropertyName from './PropertyName';
import NumberOfGuests from './NumberOfGuests';
import NumberOfRooms from './NumberOfRooms';
import WheelchairAccessible from './WheelchairAccessible';
import SearchButton from './SearchButton';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { DatePicker } from './datepicker/DatePicker';

const SearchForm: React.FC = () => {
   const { propertyName } = useSelector((state: RootState) => state.landingPage)
   const wheelchairAccessible = useSelector((state: RootState) => state.propertyConfig.property.accessibility);

   const handleSearch = () => {
      console.log('Searching...');
      // Implement search logic here
   };

   return (
      <Box
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
         <PropertyName />
         {
            propertyName === "Team 1 Hotel" &&
            <>
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
                  <SearchButton isDisabled={false} onClick={handleSearch} />
               </Box>
            </>
         }
      </Box>
   );
};

export default SearchForm;



