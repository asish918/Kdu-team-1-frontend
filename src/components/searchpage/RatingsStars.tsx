import React from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface RatingsStarsProps {
 rating: number;
}

const Starstyle = {
    color: '#26266D',
}

const RatingsStars: React.FC<RatingsStarsProps> = ({ rating }) => {
 const totalStars = 5;
 const fullStars = Math.floor(rating);
 const halfStar = rating % 1 !== 0;
 const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

 return (
    <Box>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} sx={Starstyle} />
      ))}
      {halfStar && <StarHalfIcon sx={Starstyle} />}
      {[...Array(emptyStars)].map((_, index) => (
        <StarBorderIcon key={index} sx={Starstyle} />
      ))}
    </Box>
 );
};

export default RatingsStars;

