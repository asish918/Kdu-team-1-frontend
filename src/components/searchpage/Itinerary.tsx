
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ModalComponent from './ItineraryModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { decreaseStep, increaseStep, resetStep } from '../../redux/reducers/navigationReducer';
import { useNavigate } from 'react-router-dom';
import { calculateTotal, generateDescription, itenaryDateFormat, itenaryDates, roomCardNameGenerator } from '../../utils/util';
import { setExtras, setVisible } from '../../redux/reducers/itenaryReducer';
import { useTranslation } from 'react-i18next';
import { ExchangeRateData } from '../../types';
import { formatCurrency } from '../../utils/i18next';

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
 /* height: 494px; */
 top: 544px;
 left: 1050px;
 background-color: #EFF0F1;
 border-radius: 0px 0px 0px 0px;
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
 text-align: left;
 font-size: 0.85rem;
`;

const ItineraryItemValue = styled.span`
 font-size: 14px;
 color: #5D5D5D; 
 text-align: right;
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

  const { t, i18n } = useTranslation();

  const step = useSelector((state: RootState) => state.appNavigation.step)
  const itenary = useSelector((state: RootState) => state.itenary)
  const exchangeRates: ExchangeRateData = useSelector((state: RootState) => state.intel.exchangeRates);
  const activeCurrency: string = useSelector((state: RootState) => state.intel.activeCurrency);
  const { resortFee, occupancyTax, taxes, vat, duePercent } = useSelector((state: RootState) => state.propertyConfig.property);
  const { adults, kids, teens, numberOfRooms, startDate, endDate } = useSelector((state: RootState) => state.searchForm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const promotionContent = (
    <div>
      <p>{itenary.promotion?.promotion_title}</p>
      <p>{itenary.promotion?.promotion_description}</p>
      <p>Package Total: {formatCurrency(itenary.subtotal, activeCurrency, exchangeRates, i18n)}</p>
    </div>
  );

  const taxesContent = (
    <div>
      <p>Taxes and Fees (Per Room):</p>
      <p>Resort Fee: {formatCurrency(itenary.resortFee, activeCurrency, exchangeRates, i18n)}</p>
      <p>Occupancy Tax: {formatCurrency(itenary.occupancy_tax, activeCurrency, exchangeRates, i18n)}</p>
      <p>Due now: {formatCurrency(itenary.due_now, activeCurrency, exchangeRates, i18n)}</p>
      <p>Due at Resort: {formatCurrency(itenary.due_resort, activeCurrency, exchangeRates, i18n)}</p>
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

  useEffect(() => {
    const total = calculateTotal(itenary.room?.rates, numberOfRooms);
    console.log(itenary);
    dispatch(setExtras({
      due_percent: duePercent,
      occupancy_tax: occupancyTax,
      taxes,
      total,
      vat,
      resortFee
    }))
  }, [])

  return (
    <ItineraryBox>
      <ItenaryHeader>
        <ItineraryTitle>{i18n.t("itenary.itenaryTitle")}</ItineraryTitle>
        <RemoveButton onClick={handleRemove}>{i18n.t("itenary.itenaryRemove")}</RemoveButton>
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
        {
          itenaryDates(startDate, endDate, itenary.room?.rates).map((item, index) => (
            <ItineraryItem key={index}>
              <ItineraryItemValue>{item.date}</ItineraryItemValue>
              <ItineraryItemValue>{formatCurrency(item.rate, activeCurrency, exchangeRates, i18n)}</ItineraryItemValue>
            </ItineraryItem>
          ))
        }
        <ItineraryItem>
          <ItineraryItemLabel>{i18n.t("itenary.itenarySpecialPromo")}:
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
          <ItineraryItemLabel>{i18n.t("itenary.itenaryTaxes")}:
            <InfoIcon color="disabled" fontSize="small" onClick={handleOpenTaxes} />
          </ItineraryItemLabel>

          <ItineraryItemValue>{formatCurrency(itenary.taxes, activeCurrency, exchangeRates, i18n)}</ItineraryItemValue>
        </ItineraryItem>
        <ModalComponent
          open={openTaxes}
          handleClose={handleCloseTaxes}
          title="Taxes, Surcharges, Fees Information"
          content={taxesContent}
        />
        <ItineraryItem>
          <ItineraryItemLabel>{i18n.t("itenary.itenaryVAT")}:</ItineraryItemLabel>
          <ItineraryItemValue>{formatCurrency(itenary.vat, activeCurrency, exchangeRates, i18n)}</ItineraryItemValue>
        </ItineraryItem>
        <Border />
        <ItineraryItem>
          <ItineraryItemLabel>{i18n.t("itenary.itenaryDueNow")}:</ItineraryItemLabel>
          <ItineraryItemValue>{formatCurrency(itenary.due_now, activeCurrency, exchangeRates, i18n)}</ItineraryItemValue>
        </ItineraryItem>
        <ItineraryItem>
          <ItineraryItemLabel>{i18n.t("itenary.itenaryDueResort")}:</ItineraryItemLabel>
          <ItineraryItemValue>{formatCurrency(itenary.due_resort, activeCurrency, exchangeRates, i18n)}</ItineraryItemValue>
        </ItineraryItem>
      </ItineraryDetails>
      <CheckoutButton onClick={handleClick} variant="outlined" color="primary" sx={{ margin: '6px' }}>
        {step == 1 || step == 0 ? i18n.t("itenary.itenaryCheckout") : i18n.t("itenary.itenaryContinueShopping")}
      </CheckoutButton>
    </ItineraryBox>
  );
};

export default Itinerary;




