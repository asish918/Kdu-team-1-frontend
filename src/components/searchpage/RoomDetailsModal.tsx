import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { bedTypeTextGenerator, roomCardNameGenerator } from '../../utils/util';
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
`;


const Left = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 60%; 
 margin-left: 20px;
`;

const Right = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 40%; 
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

const RoomDetailsModal = ({ open, onClose, roomDetails }) => {
    const Amenities = ["Wireless Internet Access","Cable & Pay TV Channels","Alarm Clock","Hair Dryer","In Room Safe","Iron and Ironing Board","Writing Desk and Chair"];
    const half = Math.ceil(Amenities.length / 2);
    const firstHalf = Amenities.slice(0, half);
    const secondHalf = Amenities.slice(half);
    
    const handleApplyPromoCode = (code: string) => {
        console.log('Applying promo code:', code);
        // Implement future logic here
    };

    const deals = [
        {
           dealTitle: "$150 Dining Credit Package",
           dealDescription: "Spend $10 every night you stay and earn $150 in dining credit at the resort.",
           price: "$99.99"
        },
        {
           dealTitle: "$200 Spa Credit Package",
           dealDescription: "Enjoy a full day spa experience and earn $200 in spa credit.",
           price: "$149.99"
        },
        {
           dealTitle: "$250 Wellness Package",
           dealDescription: "Experience a wellness retreat and earn $250 in wellness credit.",
           price: "$199.99"
        },
    ];

    return (
        <Dialog open={open} onClose={onClose} PaperProps={{
            sx: {
                width: '90%',
                height: '90%',
                maxWidth: 'none',
                maxHeight: 'none',
            }
        }}>
            <DialogContent sx={{ width: '100%', height: '100%', overflow: 'auto', padding: "0px" }}>
                <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} animation='slide'>
                    {roomDetails.highResImages.map((image, index) => (
                        <ImageContainer key={index}>
                            <StyledImage src={image} alt={`Room ${index}`} />
                            <ImageTextOverlay>
                                {roomCardNameGenerator(roomDetails.room_type_name)}
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
                                    {roomDetails.max_capacity}
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
                                    {roomDetails.area_in_square_feet} ft.
                                </Typography>
                            </IconContainer>
                        </StyledIconContainer>
                        <span>Smoke free and decorated in contemporary jewel and earth tones, the 15-story Casino Tower rooms are located directly above the casino. The 364 sq.ft. Casino Tower rooms are appointed with classic furnishings and include pillow-top mattresses, 40 inch flat panel plasma TV and Wi-Fi internet access.</span>
                        <Typography variant="body1" sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', mt: 2 }}>
                          Deals & Packages
                        </Typography>
                        {deals.map((deal, index) => (
                            <DealCard
                                key={index}
                                dealTitle={deal.dealTitle}
                                dealDescription={deal.dealDescription}
                                price={deal.price}
                            />
                        ))}
                        <PromoCode onApplyPromoCode={handleApplyPromoCode} />
                    </Left>
                    <Right>
                        <Typography variant="body1" style={{ color: 'black' }}>
                            Amenities
                        </Typography>
                        <StyledAmenitiesContainer>
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










