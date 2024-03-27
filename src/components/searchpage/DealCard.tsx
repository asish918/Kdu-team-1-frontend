import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Custom styled components for the card and its parts
const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: '618px',
  height: '130px',
  border: '1px solid rgba(239, 240, 241, 1)',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
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
}));

const DealDescription = styled(Typography)(({ theme }) => ({
  color: 'black',
}));

const Price = styled(Typography)(({ theme }) => ({
  color: 'black',
}));

const SelectPackageButton = styled(Button)(({ theme }) => ({
  color: 'white',
}));

const DealCard = ({ dealTitle, dealDescription, price }) => {
  return (
    <CustomCard>
      <LeftContent>
        <DealTitle variant="h5">{dealTitle}</DealTitle>
        <DealDescription variant="body1">{dealDescription}</DealDescription>
      </LeftContent>
      <RightContent>
        <Price variant="h6">{price}</Price>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          per night
        </Typography>
        <SelectPackageButton variant="contained">Select Package</SelectPackageButton>
      </RightContent>
    </CustomCard>
  );
};

export default DealCard;

