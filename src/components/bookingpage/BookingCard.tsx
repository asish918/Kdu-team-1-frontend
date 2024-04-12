import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

interface BookingCardProps {
 roomName: string;
 roomLocation: string;
 bookingDates: string;
 costPerNight: number;
 images: string[];
 booking: boolean;
}

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconTextContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  margin: 16px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const StyledTypography = styled(Typography)`
 font-size: 1rem;
 font-weight: 500;
 line-height: 1.5;
`;

const StyledCarousel = styled(Carousel)`
 border-radius: 5px 5px 0 0;
 overflow: hidden;
`;

const StyledSticker = styled.div`
 position: relative;
 bottom: 10px;
 left: 10px;
 color: white; 
 padding: 5px 10px;
 border-radius: 5px;
 font-size: 14px;
 font-weight: bold;
 text-transform: uppercase;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
 transition: box-shadow 0.3s ease, transform 0.3s ease; 

 &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    transform: translateY(-2px); 
 }
`;


const BookingCard: React.FC<BookingCardProps> = ({ roomName, roomLocation, bookingDates, costPerNight, images,booking }) => {
    const stickerText = booking ? 'Booked' : 'Cancelled';
    const stickerColor = booking ? '#0e7d04' : '#FF5733'; 
 
    return (
        <StyledCard>
        <StyledCarousel aria-label="Room images carousel">
          {images.map((image, index) => (
            <div key={index}>
              <StyledImage src={image} alt={`Room ${index + 1}`} />
            </div>
          ))}
        </StyledCarousel>
        <CardContent>
          <IconTextContainer>
            <StyledTypography variant="h5" component="div">
              {roomName}
            </StyledTypography>
          </IconTextContainer>
          <IconTextContainer>
            <StyledTypography variant="body2" color="text.secondary">
              {roomLocation}
            </StyledTypography>
          </IconTextContainer>
          <IconTextContainer>
            <StyledTypography variant="body2" color="text.secondary">
              {bookingDates}
            </StyledTypography>
          </IconTextContainer>
          <IconTextContainer>
            <StyledTypography variant="body1" color="text.primary" style={{ fontWeight: 'bold' }}>
              ${costPerNight} per night
            </StyledTypography>
          </IconTextContainer>
        </CardContent>
        <StyledSticker style={{ backgroundColor: stickerColor }}>
          {stickerText}
        </StyledSticker>
      </StyledCard>
 );
};

export default BookingCard;


