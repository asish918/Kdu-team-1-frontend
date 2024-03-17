import React from 'react';
import PropertyName from './PropertyName';
import NumberOfGuests from './NumberOfGuests';
import NumberOfRooms from './NumberOfRooms';
import WheelchairAccessible from './WheelchairAccessible';
import SearchButton from './SearchButton';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { DatePicker } from '../datepicker/DatePicker';
import { CenteredContainer, FlexContainer, GuestsContainer, RoomsContainer, StyledBox } from './styled-components';


const SearchForm: React.FC = () => {
   const { propertyName } = useSelector((state: RootState) => state.landingPage)
   const wheelchairAccessible = useSelector((state: RootState) => state.propertyConfig.property.accessibility);

   const handleSearch = () => {
      console.log('Searching...');
      // Implement search logic here
   };

   return (
      <StyledBox>
         <PropertyName />
         {propertyName === "Team 1 Hotel" && (
            <>
               <DatePicker />
               <FlexContainer>
                  <GuestsContainer>
                     <NumberOfGuests />
                  </GuestsContainer>
                  <RoomsContainer>
                     <NumberOfRooms />
                  </RoomsContainer>
               </FlexContainer>
               {wheelchairAccessible && <WheelchairAccessible />}
               <CenteredContainer>
                  <SearchButton isDisabled={false} onClick={handleSearch} />
               </CenteredContainer>
            </>
         )}
      </StyledBox>
   );
};

export default SearchForm;
