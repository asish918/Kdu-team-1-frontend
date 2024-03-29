import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography,Theme, SxProps } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { roomCardNameGenerator } from '../../utils/util';
import { LocationOn as LocationIcon, People as OccupancyIcon, Bed as BedIcon } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DealCard from './DealCard';
import PromoCode from './PromoCode';

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

 @media (min-width: 768px) {
    flex-direction: row;
 }
`;

const Left = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 100%;
 margin-bottom: 20px;

 @media (min-width: 768px) {
    width: 60%;
    margin-left: 20px;
    margin-bottom: 0;
 }
`;

const Right = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 100%;
 margin-left: 20px;

 @media (min-width: 768px) {
    width: 40%;
 }
`;

const StyledIconContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
`;

const StyledAmenitiesContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 100%;
 margin-top: 8px;
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
const StyledTypographySxProps: SxProps<Theme>={
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '16px',
}
   
   const StyledAmenityTypography = styled(Typography)({
    color: 'black',
   });
   
   const StyledCheckCircleOutlineIcon = styled(CheckCircleOutlineIcon)({
    marginRight: '4px',
   });

const RoomDetailsModal = ({ open, onClose, roomDetails }) => {
    const half = Math.ceil(roomDetails.amenities.length / 2);
    const firstHalf = roomDetails.amenities.slice(0, half);
    const secondHalf = roomDetails.amenities.slice(half);

    const handleApplyPromoCode = (code: string) => {
        console.log('Applying promo code:', code);
        // Implement future logic here
    };

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
                    <Left>
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
                        <Typography variant="body1" sx={StyledTypographySxProps}>
                            Deals & Packages
                        </Typography>
                        {roomDetails.validPromotions.map((deal, index) => (
                            <DealCard
                                key={index}
                                dealTitle={deal.promotion_title}
                                dealDescription={deal.promotion_description}
                                price={deal.price_factor * roomDetails.averageRate}
                            />
                        ))}
                        <PromoCode onApplyPromoCode={handleApplyPromoCode} />
                    </Left>
                    <Right>
                        <StyledAmenityTypography variant="body1">
                          Amenities
                        </StyledAmenityTypography>
                        <StyledAmenitiesContainer>
                            <StyledAmenitiesColumn>
                                {firstHalf.map((amenity, index) => (
                                    <StyledAmenityItem key={index}>
                                       
                                        <StyledCheckCircleOutlineIcon />
                                        {amenity}
                                    </StyledAmenityItem>
                                ))}
                            </StyledAmenitiesColumn>
                            <StyledAmenitiesColumn>
                                {secondHalf.map((amenity, index) => (
                                    <StyledAmenityItem key={index}>
                                        
                                        <StyledCheckCircleOutlineIcon />
                                        {amenity}
                                    </StyledAmenityItem>
                                ))}
                            </StyledAmenitiesColumn>
                        </StyledAmenitiesContainer>
                    </Right>
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











