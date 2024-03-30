
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ModalComponent from './ItineraryModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { decreaseStep, increaseStep, resetStep } from '../../redux/reducers/navigationReducer';
import { useNavigate } from 'react-router-dom';
import { generateDescription, itenaryDateFormat, roomCardNameGenerator } from '../../utils/util';
import { aD } from 'vitest/dist/reporters-P7C2ytIv.js';
import { setVisible } from '../../redux/reducers/itenaryReducer';

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

const ItenaryHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const RemoveButton = styled.button`
  color: ${props => props.theme.colors.secondaryBlue};
  cursor: pointer;
  transition: all 0.3s all; 
  &:active {
    transform: scale(0.8);
  }
`

const Itinerary = () => {
  const [openSpecialPromo, setOpenSpecialPromo] = useState(false);
  const [openTaxes, setOpenTaxes] = useState(false);

  const handleOpenSpecialPromo = () => setOpenSpecialPromo(true);
  const handleCloseSpecialPromo = () => setOpenSpecialPromo(false);

  const handleOpenTaxes = () => setOpenTaxes(true);
  const handleCloseTaxes = () => setOpenTaxes(false);

  const step = useSelector((state: RootState) => state.appNavigation.step)
  const itenary = useSelector((state: RootState) => state.itenary)
  const { adults, kids, teens, numberOfRooms, startDate, endDate } = useSelector((state: RootState) => state.searchForm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const promotionContent = (
    <div>
      <p>Circus Savings Promotion</p>
      <p>SAVE up to 30% OFF room rates w / 2-night minimum stay</p>
      <p>Package Total: $173.60</p>
    </div>
  );

  const taxesContent = (
    <div>
      <p>Taxes and Fees (Per Room):</p>
      <p>Resort Fee: $83.90</p>
      <p>Occupancy Tax: $23.22</p>
      <p>Due now: $75.45</p>
      <p>Due at Resort: $205.27</p>
    </div>
  );

  const handleClick = () => {
    if (step === 1) {
      dispatch(increaseStep());
      navigate("/checkout")
      return;
    }

    dispatch(decreaseStep());
    navigate(-1);
  }

  const handleRemove = () => {
    if (step == 2) {
      dispatch(resetStep());
      dispatch(setVisible(false));
      navigate(-1);
      return;
    }

    dispatch(resetStep());
    dispatch(setVisible(false));
  }

  return (
    <ItineraryBox>
      <ItenaryHeader>
        <ItineraryTitle>Your Trip Itinerary </ItineraryTitle>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </ItenaryHeader>
      <ItineraryDetails>
        <Itineraryname>{roomCardNameGenerator(itenary.room?.roomTypeName)}</Itineraryname>
        <ItineraryItem>
          <ItineraryItemValue>{itenaryDateFormat(startDate, endDate)} | {generateDescription(adults, kids, teens)}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemValue>{roomCardNameGenerator(itenary.room?.roomTypeName)}</ItineraryItemValue>
          <ItineraryItemValue>{numberOfRooms} room(s)</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Special Promo:
            <InfoIcon color="disabled" fontSize="small" onClick={handleOpenSpecialPromo} />
          </ItineraryItemLabel>

          <ItineraryItemValue>{itenary.promotion ? itenary.promotion.promotion_title : "Standard Rate"}</ItineraryItemValue>
        </ItineraryItem>
        <ModalComponent
          open={openSpecialPromo}
          handleClose={handleCloseSpecialPromo}
          title="Special Promo Information"
          content={promotionContent}
        />
        <Border />
        <ItineraryItem>
          <ItineraryItemLabel>Taxes, Surcharges, Fees:
            <InfoIcon color="disabled" fontSize="small" onClick={handleOpenTaxes} />
          </ItineraryItemLabel>

          <ItineraryItemValue>$000</ItineraryItemValue>
        </ItineraryItem>
        <ModalComponent
          open={openTaxes}
          handleClose={handleCloseTaxes}
          title="Taxes, Surcharges, Fees Information"
          content={taxesContent}
        />
        <ItineraryItem>
          <ItineraryItemLabel>VAT:</ItineraryItemLabel>
          <ItineraryItemValue>$000</ItineraryItemValue>
        </ItineraryItem>
        <Border />
        <ItineraryItem>
          <ItineraryItemLabel>Due Now:</ItineraryItemLabel>
          <ItineraryItemValue>$000</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>Due at Resort:</ItineraryItemLabel>
          <ItineraryItemValue>$000</ItineraryItemValue>
        </ItineraryItem>
      </ItineraryDetails>
      <CheckoutButton onClick={handleClick} variant="outlined" color="primary" sx={{ margin: '6px' }}>
        {step == 1 ? "Checkout" : "Continue Shopping"}
      </CheckoutButton>
    </ItineraryBox>
  );
};

export default Itinerary;




