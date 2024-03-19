import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { Card, CardContent, Typography, Button, CardActions, IconButton, Avatar, Collapse, Box } from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon, ExpandMore as ExpandMoreIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';

// Define styled components
const RoomCardContainer = styled(Card)`
 margin: 20px;
 width: 300px;
`;

const CarouselContainer = styled.div`
 margin-bottom: 20px;
`;

const StyledImage = styled.img`
 width: 100%;
 height: auto;
 object-fit: cover;
 border-radius: 5px;
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

 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
 };

 const handleExpandClick = () => {
    setExpanded(!expanded);
 };

 return (
    <RoomCardContainer>
      <CarouselContainer>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((image, index) => (
            <div key={index}>
              <StyledImage src={image} alt={`Room ${index}`} />
            </div>
          ))}
        </Carousel>
      </CarouselContainer>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Size: {roomDetails.size} sq.ft.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Beds: {roomDetails.beds}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Occupancy: {roomDetails.occupancy}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Average Price: ${averagePrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ratings: {ratings}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Reviews: {reviews.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deals: {deals.join(', ')}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
          Select Room
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More details about the room...</Typography>
        </CardContent>
      </Collapse>
    </RoomCardContainer>
 );
};

export default RoomCard;


