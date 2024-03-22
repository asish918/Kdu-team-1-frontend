
import React, { useState } from 'react';
import RoomCard from './Roomcard';
import hotelImage1 from './hotel-2.jpeg';
import hotelImage2 from './hotel-image.avif';
import styled from 'styled-components';
import Pagination from './Pagination';
import SortDropdown from './SortDropDown';


const RoomCardsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
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

 @media (max-width: 570px) {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState('default');
  const rooms = [
    {
      title: 'Deluxe Room',
      images: [hotelImage1, hotelImage2],
      ratings: 4.5,
      reviews: [],
      location: 'Building A, Floor 2',
      roomDetails: { size: 500, beds: 2, occupancy: 4 },
      deals: ['Free Wi-Fi', 'Complimentary breakfast'],
      averagePrice: 150,
    },
    {
      title: 'Deluxe Room',
      images: [hotelImage1, hotelImage2],
      ratings: 4.5,
      reviews: ['Great room!', 'Clean and comfortable.'],
      location: 'Building A, Floor 2',
      roomDetails: { size: 500, beds: 2, occupancy: 4 },
      deals: ['Free Wi-Fi', 'Complimentary breakfast'],
      averagePrice: 150,
    },
    {
      title: 'Deluxe Room',
      images: [hotelImage1, hotelImage2],
      ratings: 4.5,
      reviews: ['Great room!', 'Clean and comfortable.'],
      location: 'Building A, Floor 2',
      roomDetails: { size: 500, beds: 2, occupancy: 4 },
      deals: ['Free Wi-Fi', 'Complimentary breakfast'],
      averagePrice: 150,
    }

  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(rooms.length / itemsPerPage);
  const totalItems = rooms.length;

  const currentRooms = rooms.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);

  };
  return (
    <div>
      <HeaderAndControlsContainer>
        <RoomResultsTitle>Room Results</RoomResultsTitle>
        <RoomResultAction>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
          <SortDropdown value={sortCriteria} onChange={handleSortChange} />
        </RoomResultAction>
      </HeaderAndControlsContainer >

      <RoomCardsContainer>
        {currentRooms.map((room, index) => (
          <RoomCardWrapper key={index}>
            <RoomCard {...room} />
          </RoomCardWrapper>
        ))}
      </RoomCardsContainer>


    </div >
  );
};

export default RoomResultsPanel;
