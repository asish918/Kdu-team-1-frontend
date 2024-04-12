import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const SkeletonCardContainer = styled(Box)`
 margin: 20px;
 width: 300px;
 height: 520px;
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

const SkeletonImage = styled(Skeleton)`
 width: 100%;
 height: 200px;
 border-radius: 10px; 
`;

const SkeletonBottom = styled(Skeleton)`
 width: 40%;
 margin-left: 7px;
 height: 7%; 
 border-radius: 5px; 
 margin-top:10px;
`;

const SkeletonContent = styled(Skeleton)`
 width: 70%;
 margin-left: 7px;
 height: 5%;
 margin-bottom: 0px;
 margin-top:0px;
`;
const SkeletonMidContent = styled(Skeleton)`
 width: 35%;
 margin-left: 7px;
 height: 5%;
 margin-bottom: 0px;
 margin-top:0px;
`;


const SkeletonTitleContent = styled(Skeleton)`
 width: 94%;
 margin-left: 7px;
 height: 25%;
 
`;

const RoomCardSkeleton: React.FC = () => {
 return (
    <SkeletonCardContainer>
      <SkeletonImage variant="rectangular" />
      <SkeletonTitleContent variant="text" />
      <SkeletonContent variant="text" />
      <SkeletonMidContent variant="text" />
      <SkeletonContent variant="text" />
      <SkeletonMidContent variant="text" />
      <SkeletonContent variant="text" />
      <SkeletonBottom variant="rectangular" />
    </SkeletonCardContainer>
 );
};

export default RoomCardSkeleton;

