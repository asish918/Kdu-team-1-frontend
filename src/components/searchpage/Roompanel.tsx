import React from 'react';
import RoomCard from './Roomcard';
import hotelImage1 from './hotel-2.jpeg'; 
import hotelImage2 from './hotel-image.avif'; 
import styled from 'styled-components';

const RoomCardsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 gap: 10px;
`;

const RoomCardWrapper = styled.div`
 flex: 0 0 calc(33.33% - 10px); 
 margin-bottom: 20px; 
`;

const RoomResultsPanel: React.FC = () => {
 // Example room data
 const rooms = [
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
    },
    
    // Add more room data as needed
    
 ];


 return (
  <RoomCardsContainer>
  {rooms.map((room, index) => (
    <RoomCardWrapper key={index}>
      <RoomCard {...room} />
    </RoomCardWrapper>
  ))}
</RoomCardsContainer>
 );
};

export default RoomResultsPanel;
