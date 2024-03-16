import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useTranslation } from 'react-i18next';
import { setAdults, setTotalGuests } from '../redux/reducers/landingPageReducer';


const NumberOfGuests: React.FC = () => {
  const adults = useSelector((state: RootState) => state.landingPage.adults);
  const totalGuests = useSelector((state: RootState) => state.landingPage.totalGuests);
  const numberOfRooms = useSelector((state: RootState) => state.landingPage.numberOfRooms);

  const [teens, setTeens] = useState(0);
  const [kids, setKids] = useState(0);
  const [selectOpen, setSelectOpen] = useState(false);

  const hotelPolicies = useSelector((state: RootState) => state.propertyConfig.property);

  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const handleGuestTypeChange = () => {
    return;
  };

  const handleGuestCountChange = (type: string, change: number): void => {
    const newTotal = totalGuests + change;
    if (newTotal <= hotelPolicies.maxGuests + 1) {
      switch (type) {
        case 'adults':
          dispatch(setAdults(Math.max(0, adults + change)))
          if (Math.max(0, adults + change) < numberOfRooms) break;
          dispatch(setTotalGuests(newTotal <= 0 ? 1 : newTotal))
          break;
        case 'teens':
          setTeens(prev => Math.max(0, prev + change));
          if (Math.max(0, teens + change) < 0) break;
          dispatch(setTotalGuests(newTotal <= 0 ? 1 : newTotal))
          break;
        case 'kids':
          setKids(prev => Math.max(0, prev + change));
          if (Math.max(0, kids + change) < 0) break;
          dispatch(setTotalGuests(newTotal <= 0 ? 1 : newTotal))
          break;
        default:
          break;
      }
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
        <InputLabel id="guest-type-label">{i18n.t("landingPageForm.guestType")}</InputLabel>
        <Select
          labelId="guest-type-label"
          id="guest-type"
          value={totalGuests.toString()}
          onChange={handleGuestTypeChange}
          label={i18n.t("landingPageForm.guestType")}
          open={selectOpen}
          onOpen={handleSelectOpen}
          onClose={handleSelectClose}
          renderValue={(value) => `Guests: ${value}`}
        >
          {hotelPolicies.guests.adults && (
            <MenuItem disableRipple value="adults">
              {i18n.t("landingPageForm.adult")}<br></br> ({i18n.t("landingPageForm.age")} 18+)
              <div style={{ marginLeft: '20px' }}>
                <Button onClick={() => handleGuestCountChange('adults', -1)}>-</Button>
                {adults}
                <Button onClick={() => handleGuestCountChange('adults', 1)}>+</Button>
              </div>
            </MenuItem>
          )}
          {hotelPolicies.guests.teens && (
            <MenuItem value="teens">
              {i18n.t("landingPageForm.teens")} <br></br> ({i18n.t("landingPageForm.age")} 13-17)
              <div style={{ marginLeft: '7px' }}>
                <Button onClick={() => handleGuestCountChange('teens', -1)}>-</Button>
                {teens}
                <Button onClick={() => handleGuestCountChange('teens', 1)}>+</Button>
              </div>
            </MenuItem>
          )}
          {hotelPolicies.guests.children && (
            <MenuItem value="kids">
              {i18n.t("landingPageForm.kids")} <br></br>({i18n.t("landingPageForm.age")} 0-12)
              <div style={{ marginLeft: '18px' }}>
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
