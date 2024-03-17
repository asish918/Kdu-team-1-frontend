import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Property } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { setPropertyName } from '../../redux/reducers/landingPageReducer';

const PropertyName: React.FC = () => {
  const properties: Property[] = useSelector((state: RootState) => state.propertyList.propertyList)
  const propertyName = useSelector((state: RootState) => state.landingPage.propertyName);

  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setPropertyName(event.target.value))
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="propertyName-label" required>{i18n.t("landingPageForm.propertyName")}</InputLabel>
        <Select
          labelId="propertyName-label"
          id="propertyName"
          value={propertyName}
          onChange={handleChange}
          label={i18n.t("landingPageForm.propertyName")}
          aria-label="Property Name Selection"
        >
          {properties?.map((property) => (
            <MenuItem disabled={property.property_id !== 1} key={property.property_id} value={property.property_name}>
              {property.property_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PropertyName;








