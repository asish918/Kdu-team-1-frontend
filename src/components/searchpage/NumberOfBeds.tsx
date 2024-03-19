import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const NumberOfBeds: React.FC = () => {
 const [numberOfBeds, setNumberOfBeds] = useState<number>(1); // Default to 1 bed
 const { i18n } = useTranslation();

 const handleChange = (event: SelectChangeEvent) => {
    setNumberOfBeds(Number(event.target.value));
 };

 return (
    <Box marginBottom={2}>
      <FormControl fullWidth>
        <InputLabel id="numberOfBeds-label">Beds</InputLabel>
        <Select
          labelId="numberOfBeds-label"
          id="numberOfBeds"
          value={numberOfBeds.toString()}
          onChange={handleChange}
          label="Beds"
        >
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
        </Select>
      </FormControl>
    </Box>
 );
};

export default NumberOfBeds;

