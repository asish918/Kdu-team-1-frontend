import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface PromoCodeProps {
 onApplyPromoCode: (code: string) => void;
}

const PromoCode: React.FC<PromoCodeProps> = ({ onApplyPromoCode }) => {
 const [promoCode, setPromoCode] = useState('');

 const handlePromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(event.target.value);
 };

 const handleApplyPromoCode = () => {
    onApplyPromoCode(promoCode);
    setPromoCode('');
 };

 return (
    <Box sx={{ marginTop: '25px' }}>
      <TextField
        label="Enter a Promo Code"
        variant="outlined"
        value={promoCode}
        onChange={handlePromoCodeChange}
        sx={{ width: '201px', height: '48px' }}
      />
      <Button
        sx={{ width: '65px', height: '52px', marginLeft: '16px', marginTop:'2px' }}
        variant="contained"
        color="primary"
        onClick={handleApplyPromoCode}
      >
        Apply
      </Button>
    </Box>
 );
};

export default PromoCode;
