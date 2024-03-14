import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; 

const NumberOfRooms: React.FC = () => {
 const [numberOfRooms, setNumberOfRooms] = useState<number>(1);

 // Access max_rooms from Redux store
 const maxRooms = useSelector((state: RootState) => state.hotelPolicies.policies.max_rooms);
 
 const handleChange = (event: SelectChangeEvent) => {
    setNumberOfRooms(Number(event.target.value));
 };

 return (
    <Box marginBottom={2}>
      <FormControl fullWidth>
        <InputLabel id="numberOfRooms-label">Rooms</InputLabel>
        <Select
          labelId="numberOfRooms-label"
          id="numberOfRooms"
          value={numberOfRooms.toString()}
          onChange={handleChange}
          label="Rooms"
        >
          {Array.from({ length: maxRooms }, (_, i) => i + 1).map((room) => (
            <MenuItem key={room} value={room}>
              {room}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
 );
};

export default NumberOfRooms;


