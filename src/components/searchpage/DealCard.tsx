import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, theme } from '@mui/system';
import { Theme, SxProps } from '@mui/material';

const CustomCard = styled(Card)(({ theme }) => ({
  height: '130px',
  width: '100%',
  border: '1px solid rgba(239, 240, 241, 1)',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
  '@media (max-width: 768px)': {
     height: '100px', 
  },
  '@media (max-width: 440px)': {
     height: '80px', 
  },
 }));
 
const LeftContent = styled(CardContent)(({ theme }) => ({
 flex: 7,
 backgroundColor: 'white',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'space-between',
}));

const RightContent = styled(CardContent)(({ theme }) => ({
 flex: 3,
 backgroundColor: '#EFF0F1',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'space-between',
}));

const DealTitle = styled(Typography)(({ theme }) => ({
 color: 'black',
 fontSize: '1.5rem', 
 '@media (max-width: 768px)': {
    fontSize: '1.2rem', 
 },
 '@media (max-width: 440px)': {
    fontSize: '0.9rem', 
 },
}));

const DealDescription = styled(Typography)(({ theme }) => ({
 color: 'black',
 fontSize: '1rem', 
 '@media (max-width: 768px)': {
    fontSize: '0.8rem', 
 },
 '@media (max-width: 440px)': {
    fontSize: '0.6rem', 
 },
}));

const Price = styled(Typography)(({ theme }) => ({
 color: 'black',
 fontSize: '1.2rem', 
 '@media (max-width: 768px)': {
    fontSize: '1rem', 
 },
 '@media (max-width: 440px)': {
    fontSize: '0.9rem', 
   
 },
}));

const SelectPackageButton = styled(Button)(({ theme }) => ({
 color: 'white',
 '@media (max-width: 768px)': {
    padding: '2px 6px',
    fontSize: '0.8rem', 
 },
 '@media (max-width: 440px)': {
    padding: '1px 2px',
    fontSize: '0.6rem', 

    
 },
}));
const TopopgraphySxProps: SxProps<Theme> = {
   mb: 1,
}
const DealCard = ({ dealTitle, dealDescription, price }) => {
 return (
    <CustomCard>
      <LeftContent>
        <DealTitle variant="h5">{dealTitle}</DealTitle>
        <DealDescription variant="body1">{dealDescription}</DealDescription>
      </LeftContent>
      <RightContent>
        <Price variant="h6">{price}</Price>
        <Typography variant="body1" color="text.secondary" sx={TopopgraphySxProps}>
          per night
        </Typography>
        <SelectPackageButton variant="contained">Select Package</SelectPackageButton>
      </RightContent>
    </CustomCard>
 );
};

export default DealCard;


