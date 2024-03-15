import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface PropertyNameProps {
  onPropertyChange: (property: string) => void;
}

const PropertyName: React.FC<PropertyNameProps> = ({ onPropertyChange }) => {
  const [propertyName, setPropertyName] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setPropertyName(event.target.value);
    onPropertyChange(event.target.value);
  };


  const properties = ['property1', 'property2', 'property3'];

  return (
    <Box sx={{ marginBottom: 2 }}>
      <FormControl fullWidth required>
        <InputLabel id="propertyName-label" required>Property Name</InputLabel>
        <Select
          labelId="propertyName-label"
          id="propertyName"
          value={propertyName}
          onChange={handleChange}
          label="Property Name"
          aria-label="Property Name Selection"
        >
          <MenuItem value="">
            <em>Select a property</em>
          </MenuItem>
          {properties.map((property) => (
            <MenuItem key={property} value={property}>
              {property}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PropertyName;








