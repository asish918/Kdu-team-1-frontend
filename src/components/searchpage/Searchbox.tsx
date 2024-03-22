import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import NumberOfGuests from '../landingpage/NumberOfGuests';
import NumberOfRooms from '../landingpage/NumberOfRooms';
import { DatePicker } from '../datepicker/DatePicker';
import NumberOfBeds from './NumberOfBeds';
import { GuestsContainer, RoomsContainer } from '../landingpage/styled-components';
import styled from 'styled-components';
import WheelchairAccessible from '../landingpage/WheelchairAccessible';

interface SearchFormProps {
  onSearch: (params: { dateRange: Date[]; beds: number }) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
  const [dateRange, setDateRange] = useState<Date[]>([new Date(), new Date()]);
  const [beds, setBeds] = useState<number>(1);

  const handleSearch = () => {
    onSearch({ dateRange, beds });
  };

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 5px;
  padding: 8px;
`;

  const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  gap: 20px;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

  const ButtonStyled = styled(Button)`
  height: 80px;
  width: 40%;
  margin-bottom: 20px;
  margin-top: 2px;
`;


  const BedsContainer = styled.div`
  width: 30%;
    .MuiInputLabel-root {
      font-size: 1.2rem;
      color: black;
      position: absolute;
      top: 25px;
      left: 8px;
      margin-bottom: 10px;
      margin-left: -10px;
    }

  .MuiInputBase-input {
    padding-left: 10px;
    padding-top: 40px;
  }

  .MuiOutlinedInput-root {
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  @media (max-width: 570px) {
    width: 100%;
  }
  `

  return (
    <Container>
      <InnerContainer>
        <GuestsContainer $step={1}>
          <NumberOfGuests />
        </GuestsContainer>
        <RoomsContainer $step={1}>
          <NumberOfRooms />
        </RoomsContainer>
        <BedsContainer>
          <NumberOfBeds />
        </BedsContainer>
        <DatePicker step={1} />
        <WheelchairAccessible step={1} />
        <ButtonStyled variant="contained" onClick={handleSearch}>
          Search
        </ButtonStyled>
      </InnerContainer>
    </Container>
  );
}

export default SearchForm;





