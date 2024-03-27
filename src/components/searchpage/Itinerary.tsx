import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material'; 
const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
 };
 
 const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
 };
// Define the styled components
const ItineraryBox = styled.div`
 width: 330px;
 height: 494px;
 top: 544px;
 left: 1050px;
 background-color: #EFF0F1;
 border-radius: 5px 0px 0px 0px;
 opacity: 1;
 padding: 20px;
 box-sizing: border-box;
 display: flex; 
 flex-direction: column; 
 justify-content: space-between; 
 margin-top: 12px;
 @media ${device.tablet} {
    width: 220px; 
    left: 0;
    top: 0;
    position: static;
    margin-bottom: 12px;
    margin-left: 12px;
    margin-right: 12px;
 }

 @media ${device.desktop} {
    width: 100%;
    max-width: 100%;
    left: 0;
    top: 0;
    position: static;
 }
`;

const ItineraryTitle = styled.h2`
 margin: 0;
 font-size: 20px;
 font-weight: bold;
`;

const Itineraryname = styled.h2`
 margin: 0;
 font-size: 16px;
 font-weight: bold;
`;

const ItineraryDetails = styled.div`
 margin-top: 10px;
`;

const ItineraryItem = styled.div`
 display: flex; 
 justify-content: space-between; 
 margin-top: 10px;
`;

const ItineraryItemLabel = styled.span`
 font-weight: bold;
 color: #5D5D5D; 
`;

const ItineraryItemValue = styled.span`
 font-size: 14px;
 color: #5D5D5D; 
`;


const CheckoutButton = styled(Button)`
 padding: 10px 20px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 font-size: 16px;
 display: block;
`;

const Border = styled.div`
 width: 97%;
 border-top: 1px solid #5D5D5D;
 margin: 10px auto;
`;

// Itinerary component
const Itinerary = ({ itinerary }) => {
 return (
    <ItineraryBox>
      <ItineraryTitle>Your Trip Itinerary </ItineraryTitle>
      <ItineraryDetails>
        <Itineraryname>Long Beautiful Resort Name</Itineraryname>
        <ItineraryItem>
          <ItineraryItemLabel>Dates:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.dates}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Guests:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.guests}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Room:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.room}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Room Type:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.roomType}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Special Promo:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.specialPromo}</ItineraryItemValue>
        </ItineraryItem>
        <Border />
        <ItineraryItem>
          <ItineraryItemLabel>Subtotal:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.subtotal}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Taxes, Surcharges, Fees:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.taxes}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>VAT:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.vat}</ItineraryItemValue>
        </ItineraryItem>
        <Border />
        <ItineraryItem>
          <ItineraryItemLabel>Due Now:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.dueNow}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Due at Resort:</ItineraryItemLabel>
          <ItineraryItemValue>{itinerary.dueAtResort}</ItineraryItemValue>
        </ItineraryItem>
      </ItineraryDetails>
      <CheckoutButton variant="contained" color="primary" sx={{ margin: '6px' }}>Checkout</CheckoutButton>
    </ItineraryBox>
    
 );
};

export default Itinerary;




