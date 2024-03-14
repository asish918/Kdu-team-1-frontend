import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelPolicies } from '../slices/hotelPoliciesSlice'; 
import { RootState } from '../store';
import { useAppDispatch } from '../slices/hook';
 

const NumberOfGuests: React.FC = () => {
 const [guestType, setGuestType] = useState('');
 const [adults, setAdults] = useState(1);
 const [teens, setTeens] = useState(0);
 const [kids, setKids] = useState(0);
 const [totalGuests, setTotalGuests] = useState(adults + teens + kids);
 const [selectOpen, setSelectOpen] = useState(false);

 
 
 const dispatch = useAppDispatch();
 const hotelPolicies = useSelector((state: RootState) => state.hotelPolicies.policies);
 
 useEffect(() => {
    dispatch(fetchHotelPolicies());
 }, [dispatch]);

 const handleGuestTypeChange = (event: SelectChangeEvent) => {
    setGuestType(event.target.value as string);
 };

 const handleGuestCountChange = (type: string, change: number): void => {
 const newTotal = totalGuests + change;
 if (newTotal <= hotelPolicies.max_guests) {
    switch (type) {
      case 'adults':
        setAdults(prev => Math.max(0, prev + change));
        break;
      case 'teens':
        setTeens(prev => Math.max(0, prev + change));
        break;
      case 'kids':
        setKids(prev => Math.max(0, prev + change));
        break;
      default:
        break;
    }
    setTotalGuests(newTotal);
 }
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
          renderValue={(value) => `Guests: ${value}`}
        >
          {hotelPolicies.guests.adults && (
            <MenuItem value="adults">
              Adults<br></br> (Ages 18+)
              <div style={{marginLeft: '20px' }}>
                <Button onClick={() => handleGuestCountChange('adults', -1)}>-</Button>
                {adults}
                <Button onClick={() => handleGuestCountChange('adults', 1)}>+</Button>
              </div>
            </MenuItem>
          )}
          {hotelPolicies.guests.teens && (
            <MenuItem value="teens">
              Teens <br></br> (Ages 13-17)
              <div style={{marginLeft: '7px' }}>
                <Button onClick={() => handleGuestCountChange('teens', -1)}>-</Button>
                {teens}
                <Button onClick={() => handleGuestCountChange('teens', 1)}>+</Button>
              </div>
            </MenuItem>
          )}
          {hotelPolicies.guests.children && (
            <MenuItem value="kids">
              Kids <br></br>(Ages 0-12)
              <div style={{marginLeft: '18px' }}>
                <Button onClick={() => handleGuestCountChange('kids', -1)}>-</Button>
                {kids}
                <Button onClick={() => handleGuestCountChange('kids', 1)}>+</Button>
              </div>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
 );
};

export default NumberOfGuests;
