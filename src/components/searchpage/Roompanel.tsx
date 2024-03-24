
import React, { useState } from 'react';
import RoomCard from './Roomcard';
import styled from 'styled-components';
import Pagination from './Pagination';
import SortDropdown from './SortDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Spinner from '../layout/Spinner';
import { setPriceSort } from '../../redux/reducers/filterSortReducer';


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


const RoomResultsPanel: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState('price low');
  const { roomResults, status } = useSelector((state: RootState) => state.roomResult)
  const dispatch = useDispatch();


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
        <RoomResultsTitle>Room Results</RoomResultsTitle>
        <RoomResultAction>
          <Pagination />
          <SortDropdown value={sortCriteria} onChange={handleSortChange} />
        </RoomResultAction>
      </HeaderAndControlsContainer >

      {status === "loading" ?
        <Spinner size={80} />
        :
        <RoomCardsContainer>
          {roomResults?.results.map((room, index) => (
            <RoomCardWrapper key={index}>
              <RoomCard {...room} />
            </RoomCardWrapper>
          ))}
        </RoomCardsContainer>
      }

    </div>
  );
};

export default RoomResultsPanel;
