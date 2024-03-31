import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setBeds } from '../../redux/reducers/searchFormReducer';

const NumberOfBeds: React.FC = () => {
  const numberOfBeds = useSelector((state: RootState) => state.searchForm.beds);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setBeds(Number(event.target.value)))
  };

  return (
    <Box marginBottom={2}>
      <FormControl fullWidth>
        <InputLabel id="numberOfBeds-label">{i18n.t("landingPageForm.beds")}</InputLabel>
        <Select
          labelId="numberOfBeds-label"
          id="numberOfBeds"
          value={numberOfBeds.toString()}
          onChange={handleChange}
          label="Beds"
        >
          <MenuItem value={"0"}>Any</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NumberOfBeds;

