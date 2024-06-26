import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { LocationOn as LocationIcon, People as OccupancyIcon, Bed as BedIcon } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { ExchangeRateData, Result } from '../../types';
import { bedTypeTextGenerator, roomCardNameGenerator } from '../../utils/util';
import { formatCurrency } from '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import RoomDetailsModal from './RoomDetailsModal';
import { decreaseStep, increaseStep } from '../../redux/reducers/navigationReducer';
// Define styled components
const RoomCardContainer = styled(Card)`
 margin: 20px;
 width: 300px;
 height: 620px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 transition: all 0.2s ease-in-out;

 &:hover {
  transform: scale(1.03);
 }
  
 @media (max-width: 768px) {
    margin: 0 auto;
    width: 400px;
 }
`;

const StyledImage = styled.img`
 width: 100%;
 height: 200px;
 object-fit: cover;
 border-radius: 5px;
`;

const IconTextContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 8px;
`;

const TitleContainer = styled.div`
 display: flex;
 align-items: center;
 margin-top: 0px;
 margin-left: 5px;
 margin-bottom: 10px;
`;

const ReviewsContainer = styled.div`
 margin-left: auto;
`;

const LocationText = styled(Typography)`
 margin-left: 2px;
 margin-bottom: 5px;
`;

const DealsContainer = styled.div`
 margin-top: 8px;
 margin-left: -16px;
`;

const SpecialDealText = styled(Typography)`
 font-weight: bold;
 color: black;
 margin-block: 5px;
`;

const NewPropertyBox = styled.h2`
 background-color: ${props => props.theme.colors.secondaryNavyBlue};
 border-radius: 4px;
 padding: 4px;
 font-size: 0.8rem;
`;

// Styled components for icons
const StyledStarIcon = styled(StarIcon)`
 margin-right: 1px;
 color: ${props => props.theme.colors.primaryNavyBlue};
`;

const StyledLocationIcon = styled(LocationIcon)`
 margin-right: 1px;
 color: grey;
`;

const StyledBedIcon = styled(BedIcon)`
 margin-right: 4px;
 color: grey;
`;

const StyledOccupancyIcon = styled(OccupancyIcon)`
 margin-right: 4px;
 color: grey;
`;

const RoomTypeName = styled.h1`
  font-size: 1rem;
  width: 150px;
  word-wrap: break-word;
`

const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const RoomCard: React.FC<Result> = ({
  roomTypeName,
  areaInSquareFeet,
  averageRate,
  doubleBed,
  maxCapacity,
  singleBed,
  rating,
  reviews,
  lowResImages,
  highResImages,
  validPromotions,
  amenities,
  description,
  roomTypeId,
  bestPromotion,
  rates
}) => {
  const { t, i18n } = useTranslation();
  const exchangeRates: ExchangeRateData = useSelector((state: RootState) => state.intel.exchangeRates);
  const activeCurrency: string = useSelector((state: RootState) => state.intel.activeCurrency);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    dispatch(increaseStep());
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    dispatch(decreaseStep());
    setModalOpen(false);
  };

  return (
    <>

      <RoomCardContainer>
        <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} animation='slide'>
          {lowResImages.map((image, index) => (
            <StyledImage key={index} src={image} alt={`Room ${index}`} />
          ))}
        </Carousel>
        <CardContent>
          <TitleContainer>
            <RoomTypeName>
              {roomCardNameGenerator(roomTypeName)}
            </RoomTypeName>
            <ReviewsContainer>
              {reviews > 0 ? (
                <>
                  <RatingContainer>
                    <StyledStarIcon fontSize="small" />
                    <Typography variant="body1" color="text.secondary">
                      {rating}
                    </Typography>
                  </RatingContainer>
                  <Typography variant="body1" color="text.secondary">
                    {reviews} {i18n.t("generic.reviews")}
                  </Typography>
                </>
              ) : (
                <NewPropertyBox>
                  {i18n.t("generic.newPropertyTag")}
                </NewPropertyBox>
              )}
            </ReviewsContainer>
          </TitleContainer>

          <IconTextContainer>
            <StyledLocationIcon fontSize="small" />
            <LocationText variant="body1" color="text.secondary">
              {i18n.t("generic.location")}
            </LocationText>
          </IconTextContainer>
          <LocationText variant="body1" color="text.secondary">
            <i>{i18n.t("generic.inclusive")}</i> &emsp; {areaInSquareFeet} ft.
          </LocationText>
          <IconTextContainer>
            <StyledOccupancyIcon fontSize="small" />
            <Typography variant="body1" color="text.secondary">
              1-{maxCapacity}
            </Typography>
          </IconTextContainer>
          <IconTextContainer>
            <StyledBedIcon fontSize="small" />
            <Typography variant="body1" color="text.secondary">
              {bedTypeTextGenerator(doubleBed, singleBed)}
            </Typography>
          </IconTextContainer>

          <DealsContainer>
            <svg
              width="121"
              height="32"
              viewBox="0 0 121 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120.759 0H0V32H120.759L112.775 14.9677L120.759 0Z"
                fill="#26266D"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontWeight="400"
                fontSize="16px"
              >
                {i18n.t("generic.specialDealTitle")}
              </text>
            </svg>
          </DealsContainer>
          <Typography variant="body1" color="text.secondary">
            {bestPromotion.promotion_title}
          </Typography>
          <SpecialDealText variant="body1" color="text.secondary">
            {formatCurrency(averageRate * bestPromotion.price_factor, activeCurrency, exchangeRates, i18n)}
          </SpecialDealText>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            {i18n.t("generic.perNight")}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            {i18n.t("generic.selectRoomButton")}
          </Button>
        </CardContent>
      </RoomCardContainer>
      <RoomDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        roomDetails={{
          roomTypeName,
          areaInSquareFeet,
          maxCapacity,
          highResImages,
          bedTypeText: bedTypeTextGenerator(doubleBed, singleBed),
          validPromotions,
          amenities,
          description,
          averageRate,
          roomTypeId,
          rates
        }}
      />
    </>
  );
};

export default RoomCard;


