import React from 'react';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const ReviewSectionSkeletonContainer = styled.div`
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

const ReviewSkeletonText = styled(Skeleton)`
 width: 53%;
 height: 1.9rem;
 margin-top: 25px;
`;

const ReviewSkeletonStars = styled(Skeleton)`
 width: 30%;
 height: 1.7rem;
 margin-top: 10px;
 margin-bottom: 10px;
`;

const ReviewSkeletonName = styled(Skeleton)`
 width: 15%;
 height: 1.7rem;
 margin-top: 10px;
`;

 interface Review {
    name: string;
    rating: number;
    review: string;
   }


const ReviewSectionSkeleton: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
 
 const skeletonItems = Array.from({ length: reviews.length }).fill(null);

 return (
    <ReviewSectionSkeletonContainer>
      {skeletonItems.map((_, index) => (
        <div key={index}>
          <ReviewSkeletonName variant="text" />
          <ReviewSkeletonStars variant="rectangular"/>
          <ReviewSkeletonText variant="text" />
        </div>
      ))}
    </ReviewSectionSkeletonContainer>
 );
};

export default ReviewSectionSkeleton;
