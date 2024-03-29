
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ModalComponent from './ItineraryModal';
import { Theme, SxProps } from '@mui/material';
import PromotionContent from './PromotionContent';
import TaxesContent from './TaxesContent';

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
 display: flex;
 align-items: center;
`;

const ItineraryItemValue = styled.span`
 font-size: 14px;
 color: #5D5D5D; 
`;

const CheckoutButton = styled(Button)`
 padding: 10px 20px;
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

const CheckoutButtonSxProps: SxProps<Theme> = {
  margin: '6px',
}

const Itinerary = ({ itinerary }) => {
  const [openSpecialPromo, setOpenSpecialPromo] = useState(false);
  const [openTaxes, setOpenTaxes] = useState(false);

  const handleOpenSpecialPromo = () => setOpenSpecialPromo(true);
  const handleCloseSpecialPromo = () => setOpenSpecialPromo(false);

  const handleOpenTaxes = () => setOpenTaxes(true);
  const handleCloseTaxes = () => setOpenTaxes(false);

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
          <ItineraryItemLabel>Special Promo:
            <InfoIcon color="disabled" fontSize="small" onClick={handleOpenSpecialPromo} />
          </ItineraryItemLabel>

          <ItineraryItemValue>{itinerary.specialPromo}</ItineraryItemValue>
        </ItineraryItem>
        <ModalComponent
          open={openSpecialPromo}
          handleClose={handleCloseSpecialPromo}
          title="Special Promo Information"
          content={<PromotionContent />}
        />
        <Border />
        <ItineraryItem>
          <ItineraryItemLabel>Taxes, Surcharges, Fees:
            <InfoIcon color="disabled" fontSize="small" onClick={handleOpenTaxes} />
          </ItineraryItemLabel>

          <ItineraryItemValue>{itinerary.taxes}</ItineraryItemValue>
        </ItineraryItem>
        <ModalComponent
          open={openTaxes}
          handleClose={handleCloseTaxes}
          title="Taxes, Surcharges, Fees Information"
          content={<TaxesContent />}
        />
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
      <CheckoutButton variant="outlined" color="primary" sx={CheckoutButtonSxProps}>Checkout</CheckoutButton>
    </ItineraryBox>
  );
};

export default Itinerary;




