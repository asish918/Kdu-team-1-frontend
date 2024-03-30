
import React, { useState } from 'react';
import RoomCard from './Roomcard';
import styled from 'styled-components';
import Pagination from './Pagination';
import SortDropdown from './SortDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Spinner from '../layout/Spinner';
import { setPriceSort } from '../../redux/reducers/filterSortReducer';
import { useTranslation } from 'react-i18next';
import Itinerary from './Itinerary';

const RoomCardsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 10px;
`;

const HeaderAndControlsContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 
 margin-top: 5px;
 @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px; 
    
 }
`;

const RoomCardWrapper = styled.div`
 flex-basis: calc(33.33% - 10px); 
 margin-bottom: 20px;

 @media (max-width: 768px) {
    flex-basis: 100%;
 }
`;

const RoomResultsTitle = styled.h3`
 margin-left: 20px; 
 margin-bottom: 2px; 
`;

const RoomResultAction = styled.div`
 display: flex;
 justify-content: flex-end;
 margin-right: 22px;
  
 @media (max-width: 570px) {
    justify-content: space-between;
    width: 100%;
    > :first-child {
      margin-left: 28px; 
    }
 }
`;

const NoResultDiv = styled.div`
  margin-left: 20px;
`

const RoomResultsPanel: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState('price low');
  const { roomResults, status } = useSelector((state: RootState) => state.roomResult)
  const itenaryVisible = useSelector((state: RootState) => state.itenary.visible);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  // TODO Fetch this data from Redux State (Asish)
  const itineraryData = {
    dates: 'May 9 - May 16, 2024',
    guests: '1 adult 1 child',
    room: '1 room',
    roomType: 'Executive Room',
    specialPromo: 'Special Promoname',
    subtotal: '$00.00',
    taxes: '$000.00',
    vat: '$000.00',
    dueNow: '$0000.00',
    dueAtResort: '$0000.00',
  };

  const handleSortChange = (criteria: string) => {
    if (criteria == "price low") {
      dispatch(setPriceSort(true))
    }
    else if (criteria == "price high") {
      dispatch(setPriceSort(false))
    }
    setSortCriteria(criteria)
  };
  return (
    <div>
      <HeaderAndControlsContainer>
        <RoomResultsTitle>{i18n.t("roomResultForm.roomResultTitle")}</RoomResultsTitle>
        <RoomResultAction>
          <Pagination />
          <SortDropdown value={sortCriteria} onChange={handleSortChange} />
        </RoomResultAction>
      </HeaderAndControlsContainer >

      {status === "loading" ?
        <Spinner size={80} />
        :
        roomResults?.results.length === 0 ?
          <NoResultDiv>
            No Results
          </NoResultDiv>
          :
          <RoomCardsContainer>
            {roomResults?.results.map((room, index) => (
              <RoomCardWrapper key={index}>
                <RoomCard {...room} />
              </RoomCardWrapper>
            ))}

            {
              itenaryVisible &&
              <Itinerary itinerary={itineraryData} />
            }

          </RoomCardsContainer>
      }

    </div>
  );
};

export default RoomResultsPanel;
