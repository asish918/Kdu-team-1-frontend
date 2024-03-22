import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { LocationOn as LocationIcon, People as OccupancyIcon, Bed as BedIcon } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

// Define styled components
const RoomCardContainer = styled(Card)`
  margin: 20px;
  width: 300px;
  
  @media (max-width: 570px) {
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

interface RoomCardProps {
  title: string;
  images: string[];
  ratings: number;
  reviews: string[];
  location: string;
  roomDetails: {
    size: number;
    beds: number;
    occupancy: number;
  };
  deals: string[];
  averagePrice: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  images,
  ratings,
  reviews,
  location,
  roomDetails,
  deals,
  averagePrice,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <RoomCardContainer>
      <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} animation='slide'>
        {images.map((image, index) => (
          <StyledImage key={index} src={image} alt={`Room ${index}`} />
        ))}
      </Carousel>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ marginTop: '0px', marginLeft: '5px' }}>
            {title}
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            {reviews.length > 0 ? (
              <>
                <IconTextContainer>
                  <StarIcon fontSize="small" sx={{ marginRight: 1, color: '#26266d', marginTop: '26px' }} />
                  <Typography variant="body1" color="text.secondary" sx={{ marginTop: '26px' }}>
                    {ratings}
                  </Typography>
                </IconTextContainer>
                <Typography variant="body1" color="text.secondary">
                  {reviews.length} reviews
                </Typography>
              </>
            ) : (
              <Box sx={{ backgroundColor: '#cdcdee', borderRadius: '4px', padding: '4px' }}>
                <Typography variant="body1" color="black">
                  New property
                </Typography>
              </Box>
            )}
          </div>
        </div>

        <IconTextContainer>
          <LocationIcon fontSize="small" sx={{ marginRight: 1, color: 'grey' }} />
          <Typography variant="body1" color="text.secondary">
            {location}
          </Typography>
        </IconTextContainer>
        <Typography variant="body1" color="text.secondary" sx={{ marginLeft: '2px' }}>
          Inclusive {roomDetails.size} ft.
        </Typography>
        <IconTextContainer>
          <BedIcon fontSize="small" sx={{ marginRight: 1, color: 'grey' }} />
          <Typography variant="body1" color="text.secondary">
            {roomDetails.beds}
          </Typography>
        </IconTextContainer>
        <IconTextContainer>
          <OccupancyIcon fontSize="small" sx={{ marginRight: 1, color: 'grey' }} />
          <Typography variant="body1" color="text.secondary">
            {roomDetails.occupancy}
          </Typography>
        </IconTextContainer>

        <Box sx={{ marginTop: '8px', marginLeft: '-16px' }}>
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
              Special Deal
            </text>
          </svg>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {deals.join(', ')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', color: 'black' }}>
          ${averagePrice}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          per night
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
          Select Room
        </Button>
      </CardContent>
    </RoomCardContainer>
  );
};

export default RoomCard;
