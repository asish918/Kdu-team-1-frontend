import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const SkeletonBookingCardContainer = styled(Box)`
 margin: 20px;
 width: 420px;
 height: 410px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 transition: all 0.2s ease-in-out;
 border-radius: 10px; 

 &:hover {
    transform: scale(1.03);
    box-shadow: rgba(100, 100, 111, 0.3) 0px 10px 30px 0px; 
 }

 @media (max-width: 768px) {
    margin: 0 ;
    width: 100%; 
 }
`;

const SkeletonBookingImage = styled(Skeleton)`
 width: 100%;
 height: 200px;
 border-radius: 10px; 
`;

const SkeletonBookingBottom = styled(Skeleton)`
 width: 97%;
 margin-left: 12px;
 margin-right:0px;
 height: 9%; 
 border-radius: 5px; 
 margin-top:7px;
`;

const SkeletonBookingContent = styled(Skeleton)`
 width: 35%;
 margin-left: 7px;
 height: 8%;
 margin-bottom: 0px;
 margin-top:0px;
`;
const SkeletonBookingMidContent = styled(Skeleton)`
 width: 28%;
 margin-left: 7px;
 height: 6%;
 margin-bottom: 0px;
 margin-top:0px;
`;


const SkeletonBookingTitleContent = styled(Skeleton)`
 width: 55%;
 margin-left: 7px;
 height: 15%;
 
`;

const BookingCardSkeleton: React.FC = () => {
 return (
    <SkeletonBookingCardContainer>
      <SkeletonBookingImage variant="rectangular" />
      <SkeletonBookingTitleContent variant="text" />
      <SkeletonBookingContent variant="text" />
      <SkeletonBookingMidContent variant="text" />
      <SkeletonBookingContent variant="text" />
      <SkeletonBookingBottom variant="rectangular" />
    </SkeletonBookingCardContainer>
 );
};

export default BookingCardSkeleton;

