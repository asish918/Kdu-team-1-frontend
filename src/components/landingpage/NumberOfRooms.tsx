import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { setNumberOfRooms } from '../../redux/reducers/landingPageReducer';

const NumberOfRooms: React.FC = ({}) => {
  const numberOfRooms = useSelector((state: RootState) => state.landingPage.numberOfRooms);
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const maxRooms = useSelector((state: RootState) => state.propertyConfig.property.numberOfRooms);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setNumberOfRooms(Number(event.target.value)))
  };

  return (
    <Box marginBottom={2}>
      <FormControl fullWidth>
        <InputLabel id="numberOfRooms-label">{i18n.t("landingPageForm.rooms")}</InputLabel>
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


