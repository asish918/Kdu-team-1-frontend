// ReviewSection.tsx
import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import RatingsStars from './RatingsStars'; 

// Define the styled components for the ReviewSection
const ReviewSectionContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 20px;
 padding: 15px;
 background-color: #EFF0F1;
 border-radius: 8px; 
 justify-content: space-between; 
 width: 100%;
 margin-top: 15px;
 margin-bottom: 10px;

 @media (max-width: 580px) {
   grid-template-columns: 1fr;
 }
`;

const ReviewText = styled.div`
 font-size: 1.4rem; 
 line-height: 1.5; 
`;


interface Review {
 name: string;
 rating: number;
 review: string;
}


interface ReviewSectionProps {
 reviews: Review[];
}


const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
 return (
    <>
    <Typography variant="body1" sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem', mt: 5 }}>
     Reviews & Ratings
    </Typography>
    <ReviewSectionContainer>
      {reviews.map((review, index) => (
        <div key={index}>
          <Typography variant="h6" component="div" sx={{fontWeight: 'bold' }}> {review.name}</Typography>           
          <div>
            <RatingsStars rating={review.rating} />
          </div>          
          <ReviewText>
            <Typography variant="h6" component="div"> {review.review}</Typography>
          </ReviewText>
        </div>
      ))}
    </ReviewSectionContainer>
    </>
 );
};

export default ReviewSection;

