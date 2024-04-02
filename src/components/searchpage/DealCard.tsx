import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { PromotionType, Result } from "../../types";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPromotion, setRoom, setVisible } from '../../redux/reducers/itenaryReducer';
import { increaseStep } from '../../redux/reducers/navigationReducer';
import { useTranslation } from 'react-i18next';

const CustomCard = styled(Card)`
   width: 100%;
   border: 1px solid rgba(239, 240, 241, 1);
   display: flex;
   flex-direction: row;
   margin-top: 20px;
`;

const LeftContent = styled(CardContent)`
   flex: 7;
   background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const RightContent = styled(CardContent)`
   flex: 3;
   background-color: #EFF0F1;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
`;

const DealTitle = styled(Typography)`
   color: black;
   font-size: 1.5rem;
   @media (max-width: 768px) {
      font-size: 1.2rem;
   };
   @media (max-width: 440px) {
      font-size: 0.9rem;
   }
`;

const DealDescription = styled(Typography)`
   color: black;
   font-size: 1rem;
   @media (max-width: 768px) {
      font-size: 0.8rem;
   };
   @media (max-width: 440px) {
      font-size: 0.6rem;
   };
`;

const Price = styled(Typography)`
   color: black;
   font-size: 1.2rem;
   font-weight: bold;

   @media (max-width: 768px) {
      font-size: 1rem;
   };
   @media (max-width: 440px) {
      font-size: 0.9rem;

   };
`;

const SelectPackageButton = styled(Button)`
   color: white;
   width: 100%;
   @media (max-width: 768px) {
      font-size: 0.8rem;
   };
   @media (max-width: 440px) {
      font-size: 0.6rem;
   };
`;

interface DealCardProps {
   dealTitle: string | undefined;
   dealDescription: string | undefined;
   price: string | number;
   promotion?: PromotionType;
   room: Result;
}

const DealCard = ({ dealTitle, dealDescription, price, promotion, room }: DealCardProps) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { i18n } = useTranslation();

   const handleSelectPackage = () => {
      dispatch(setVisible(true));
      dispatch(increaseStep());
      dispatch(setPromotion(promotion!));
      dispatch(setRoom(room));
      navigate("/checkout")
   }

   return (
      <CustomCard>
         <LeftContent>
            <DealTitle variant="h5">{dealTitle}</DealTitle>
            <DealDescription variant="body1">{dealDescription}</DealDescription>
         </LeftContent>
         <RightContent>
            <Price variant="h6">{price}</Price>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
               {i18n.t("generic.perNight")}
            </Typography>
            <SelectPackageButton onClick={handleSelectPackage} variant="contained">{i18n.t("generic.selectPackageButton")}</SelectPackageButton>
         </RightContent>
      </CustomCard>
   );
};

export default DealCard;


