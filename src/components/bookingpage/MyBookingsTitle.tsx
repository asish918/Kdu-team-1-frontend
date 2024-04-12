import React from 'react';
import styled from 'styled-components';


const BookingContainer = styled.div`
 width: 100%;
 height: 18%;
 gap: 0px;
 opacity: 1;
 background: #e7e7ef;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 20px;
 margin-bottom: 8px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

 
 @media (max-width: 768px) {
    height: auto; 
    padding: 15px; 
 }
`;

const MainHeading = styled.h2`
 margin: 0;
 font-size: 2rem;
 font-weight: bold;
 color: #211645;

 
 @media (max-width: 768px) {
    font-size: 1.5rem;
 }
`;

const SubHeading = styled.h3`
 margin: 0;
 font-size: 1.1rem;
 font-weight: normal;
 color: #41417f;

 
 @media (max-width: 768px) {
    font-size: 1rem; 
 }
`;

const MyBookingsPage: React.FC = () => {
 return (
    <BookingContainer>
      <MainHeading>MY BOOKINGS</MainHeading>
      <SubHeading>Your Rooms are Available here!</SubHeading>
      
    </BookingContainer>
 );
};

export default MyBookingsPage;


