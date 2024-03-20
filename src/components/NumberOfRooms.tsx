import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const NumberOfRooms: React.FC = () => {
 const [numberOfRooms, setNumberOfRooms] = useState<number>(1);

 const handleChange = (event: SelectChangeEvent) => {
    setNumberOfRooms(Number(event.target.value));
 };

 return (
    <Box marginBottom={2}>
      <FormControl fullWidth>
        <InputLabel id="numberOfRooms-label">Number of Rooms</InputLabel>
        <Select
          labelId="numberOfRooms-label"
          id="numberOfRooms"
          value={numberOfRooms.toString()}
          onChange={handleChange}
          label="Number of Rooms"
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((room) => (
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


