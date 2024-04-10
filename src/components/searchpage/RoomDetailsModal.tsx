import { Dialog, DialogContent, DialogActions, Button, Typography, Theme, SxProps } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { roomCardNameGenerator } from '../../utils/util';
import { LocationOn as LocationIcon, People as OccupancyIcon, Bed as BedIcon } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DealCard from './DealCard';
import PromoCode from './PromoCode';
import { useTranslation } from 'react-i18next';
import { ExchangeRateData, PromotionType } from "../../types";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { formatCurrency } from '../../utils/i18next';
import { validatePromoCode } from '../../redux/thunks/validatePromo';
import { resetStatus } from '../../redux/reducers/promoReducer';
import { useEffect } from 'react';

const ImageContainer = styled.div`
 position: relative;
 width: 100%;
 height: 560px;
`;

const StyledImage = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 5px;
`;

const ImageTextOverlay = styled.div`
 position: absolute;
 bottom: 0;
 left: 0;
 padding: 10px;
 background-color: rgba(0, 0, 0, 0); 
 color: white;
 font-size: 2rem; 
 margin-left: 20px; 
`;

const IconContainer = styled.div`
 display: flex;
 align-items: flex-start;
 margin-bottom: 8px;
 margin-right: 30px;
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

const MainContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 width: 100%;
 height: 100%;
 padding: 23px 25px;
 flex-direction: column;
`;

const RoomInfoContainer = styled.div`
 display: flex;
 align-items: flex-start;
 width: 100%;
 margin-bottom: 20px;

 @media (max-width: 768px) {
    flex-wrap: wrap;
 }
`;

const StyledIconContainer = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;

 @media(max-width: 768px) {
    justify-content: space-between;
 }
`;

const StyledAmenitiesContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 100%;
 margin-top: 8px;
 flex-wrap: wrap;
 margin-left: 100px;

 @media (max-width: 768px) {
    margin-left: 0px;
 }
`;

const StyledAmenitiesColumn = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin-right: 8px;
`;

const StyledAmenityItem = styled.div`
 display: flex;
 align-items: center;
`;

const DialogSxProps: SxProps<Theme> = {
    width: '90%',
    height: '90%',
    maxWidth: 'none',
    maxHeight: 'none',
}

const DialogContentSxProps: SxProps<Theme> = {
    width: '100%', height: '100%', overflow: 'auto', padding: "0px"
}

const DealsPromoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const RoomInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const AmenitiesTitle = styled(Typography)`
    flex-basis: 100%;
    font-size: 1.2rem;
`

const InvalidPromo = styled.span`
    color: red;
`

const RoomDetailsModal = ({ open, onClose, roomDetails }) => {
    const half = Math.ceil(roomDetails.amenities.length / 2);
    const firstHalf = roomDetails.amenities.slice(0, half);
    const secondHalf = roomDetails.amenities.slice(half);

    const dispatch = useDispatch();
    const { promo, status, message } = useSelector((state: RootState) => state.promoCode)

    const handleApplyPromoCode = (code: string) => {
        console.log('Applying promo code:', code);
        dispatch(validatePromoCode(`${process.env.PROMOTION_API}?promoCode=${code}&roomTypeId=${roomDetails.roomTypeId}`));
    };

    const exchangeRates: ExchangeRateData = useSelector((state: RootState) => state.intel.exchangeRates);
    const activeCurrency: string = useSelector((state: RootState) => state.intel.activeCurrency);
    const { i18n } = useTranslation();

    useEffect(() => {
        if (message === "The Promo Code is invalid") {
            setTimeout(() => {
                dispatch(resetStatus());
            }, 4000)
        }
    }, [status])

    return (
        <Dialog open={open} onClose={onClose} PaperProps={{
            sx: DialogSxProps
        }}>
            <DialogContent sx={DialogContentSxProps}>
                <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} animation='slide'>
                    {roomDetails.highResImages.map((image, index) => (
                        <ImageContainer key={index}>
                            <StyledImage src={image} alt={`Room ${index}`} />
                            <ImageTextOverlay>
                                {roomCardNameGenerator(roomDetails.roomTypeName)}
                            </ImageTextOverlay>
                        </ImageContainer>
                    ))}
                </Carousel>
                <MainContainer>
                    <RoomInfoContainer>
                        <RoomInfo>
                            <StyledIconContainer>
                                <IconContainer>
                                    <StyledOccupancyIcon fontSize="small" />
                                    <Typography variant="body1" color="text.secondary">
                                        {roomDetails.maxCapacity}
                                    </Typography>
                                </IconContainer>
                                <IconContainer>
                                    <StyledBedIcon fontSize="small" />
                                    <Typography variant="body1" color="text.secondary">
                                        {roomDetails.bedTypeText}
                                    </Typography>
                                </IconContainer>
                                <IconContainer>
                                    <StyledLocationIcon fontSize="small" />
                                    <Typography variant="body1" color="text.secondary">
                                        {roomDetails.areaInSquareFeet} ft.
                                    </Typography>
                                </IconContainer>
                            </StyledIconContainer>
                            <span>{roomDetails.description}</span>
                        </RoomInfo>
                        <StyledAmenitiesContainer>
                            <AmenitiesTitle variant="body1" style={{ color: 'black' }}>
                                {i18n.t("generic.amenitiesTitle")}
                            </AmenitiesTitle>
                            <StyledAmenitiesColumn>
                                {firstHalf.map((amenity, index) => (
                                    <StyledAmenityItem key={index}>
                                        <CheckCircleOutlineIcon style={{ marginRight: '4px' }} />
                                        {amenity}
                                    </StyledAmenityItem>
                                ))}
                            </StyledAmenitiesColumn>
                            <StyledAmenitiesColumn>
                                {secondHalf.map((amenity, index) => (
                                    <StyledAmenityItem key={index}>
                                        <CheckCircleOutlineIcon style={{ marginRight: '4px' }} />
                                        {amenity}
                                    </StyledAmenityItem>
                                ))}
                            </StyledAmenitiesColumn>
                        </StyledAmenitiesContainer>
                    </RoomInfoContainer>
                    <DealsPromoContainer>
                        {/* <Typography variant="body1" sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', mt: 2 }}>
                            {i18n.t("generic.standardRatesTitle")}
                        </Typography>
                        <DealCard
                            dealTitle="Standard Rate"
                            dealDescription="Spend $10 every night you stay and earn $150 in dining credit at the resort. "
                            price={formatCurrency(roomDetails.averageRate, activeCurrency, exchangeRates, i18n)}
                            room={roomDetails}

                        /> */}
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', mt: 5 }}>
                            {i18n.t("generic.dealsAndPackagesTitle")}
                        </Typography>
                        {roomDetails.validPromotions.map((deal: PromotionType, index: number) => (
                            <DealCard
                                key={index}
                                dealTitle={deal.promotion_title}
                                dealDescription={deal.promotion_description}
                                price={formatCurrency(deal.price_factor * roomDetails.averageRate, activeCurrency, exchangeRates, i18n)}
                                promotion={deal}
                                room={roomDetails}
                            />
                        ))}
                        {
                            status === "success" && promo?.room_type_id == roomDetails.roomTypeId &&
                            <>
                                <Typography variant="body1" sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', mt: 2 }}>
                                    Promotion
                                </Typography>
                                <DealCard
                                    dealTitle={promo?.promotion_title}
                                    dealDescription={promo?.promotion_description}
                                    price={formatCurrency(roomDetails.averageRate * promo?.price_factor, activeCurrency, exchangeRates, i18n)}
                                    room={roomDetails}
                                    promotion={promo}
                                />
                            </>
                        }
                        <PromoCode onApplyPromoCode={handleApplyPromoCode} />
                        {message === "The Promo Code is invalid" &&
                            <InvalidPromo>{message}</InvalidPromo>
                        }
                    </DealsPromoContainer>
                </MainContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RoomDetailsModal;