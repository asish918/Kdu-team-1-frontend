import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

const NumberOfGuests: React.FC = () => {
 const [guestType, setGuestType] = useState('');
 const [adults, setAdults] = useState(1);
 const [children, setChildren] = useState(0);
 const [totalGuests, setTotalGuests] = useState(adults + children);
 const [selectOpen, setSelectOpen] = useState(false);

 const handleGuestTypeChange = (event: SelectChangeEvent) => {
    setGuestType(event.target.value as string);
 };

 const handleGuestCountChange = (type: string, change: number): void => {
  if (type === 'adults') {
    setAdults(prev => Math.max(1, prev + change));
  } else {
    setChildren(prev => Math.max(0, prev + change));
  }
  setTotalGuests(prev => prev + change);
};


 const handleSelectOpen = () => {
    setSelectOpen(true);
 };

 const handleSelectClose = (event: React.SyntheticEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      event.preventDefault();
    } else {
      setSelectOpen(false);
    }
 };

 return (
    <Box sx={{ marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="guest-type-label">Guest Type</InputLabel>
        <Select
          labelId="guest-type-label"
          id="guest-type"
          value={totalGuests.toString()} 
          onChange={handleGuestTypeChange}
          label="Guest Type"
          open={selectOpen}
          onOpen={handleSelectOpen}
          onClose={handleSelectClose}
          renderValue={(value) => `Total Guests: ${value}`}
        >
          <MenuItem value="adults">
            Adults (Age 12+)
            <div>
              <Button onClick={() => handleGuestCountChange('adults', -1)}>-</Button>
              {adults}
              <Button onClick={() => handleGuestCountChange('adults', 1)}>+</Button>
            </div>
          </MenuItem>
          <MenuItem value="children">
            Children (Age 0-11)
            <div>
              <Button onClick={() => handleGuestCountChange('children', -1)}>-</Button>
              {children}
              <Button onClick={() => handleGuestCountChange('children', 1)}>+</Button>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
 );
};

export default NumberOfGuests;
















