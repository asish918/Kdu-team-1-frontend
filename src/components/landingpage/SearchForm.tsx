import React, { useEffect, useState } from 'react';
import PropertyName from './PropertyName';
import NumberOfGuests from './NumberOfGuests';
import NumberOfRooms from './NumberOfRooms';
import WheelchairAccessible from './WheelchairAccessible';
import SearchButton from './SearchButton';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { DatePicker } from '../datepicker/DatePicker';
import { CenteredContainer, FlexContainer, GuestsContainer, RoomsContainer, StyledBox } from './styled-components';
import queryString from 'query-string';
import { SearchFieldParams } from '../../types';
import { useSearchParams } from 'react-router-dom';
import { searchFieldParamsValidator } from '../../utils/validator';


const SearchForm: React.FC = () => {
   const { propertyName } = useSelector((state: RootState) => state.landingPage)
   const wheelchairAccessible = useSelector((state: RootState) => state.propertyConfig.property.accessibility);
   const searchFormParams = useSelector((state: RootState) => state.searchForm);

   const handleSearch = () => {
   };

   return (
      <StyledBox>
         <PropertyName />
         {propertyName === "Team 1 Hotel" && (
            <>
               <DatePicker step={0} />
               <FlexContainer>
                  <GuestsContainer $step={0}>
                     <NumberOfGuests />
                  </GuestsContainer>
                  <RoomsContainer $step={0}>
                     <NumberOfRooms />
                  </RoomsContainer>
               </FlexContainer>
               {wheelchairAccessible && <WheelchairAccessible step={0} />}
               <CenteredContainer>
                  <SearchButton isDisabled={!searchFieldParamsValidator(searchFormParams)} onClick={handleSearch} />
               </CenteredContainer>
            </>
         )}
      </StyledBox>
   );
};

export default SearchForm;
