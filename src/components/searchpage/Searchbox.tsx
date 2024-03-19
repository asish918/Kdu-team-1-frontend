import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import NumberOfGuests from '../landingpage/NumberOfGuests';
import NumberOfRooms from '../landingpage/NumberOfRooms';
import { DatePicker } from '../datepicker/DatePicker';
import NumberOfBeds from './NumberOfBeds';

interface SearchFormProps {
 onSearch: (params: { dateRange: Date[]; beds: number }) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
 const [dateRange, setDateRange] = useState<Date[]>([new Date(), new Date()]);
 const [beds, setBeds] = useState<number>(1);

 const handleSearch = () => {
    onSearch({ dateRange, beds });
 };

 return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', margin: '5px', padding : '8px' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" sx={{ gap: 4 } }>
        <Box sx={{ height: '50px', width: '1250px', mt: 2, mb: 2 }}>
          <NumberOfGuests/>
        </Box>
        <Box sx={{ height: '50px', width: '650px', mt: 2, mb: 2 }}>
          <NumberOfRooms/>
        </Box>
        <Box sx={{ height: '50px', width: '650px', mt: 2, mb: 2 }}>
          <NumberOfBeds/>
        </Box>
        <Box sx={{ height: '50px', width: '2650px', mt: 2, mb: 9 }}>
          <DatePicker />
        </Box>
         <Box >
          <Button variant="contained" onClick={handleSearch} sx={{ height: '50px', width: '120px',mb: 2,mt: 2 }}>Search</Button>

        </Box>
      </Box>
    </Box>
 );
}

export default SearchForm;





