import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

const StyledTextField = styled(TextField)({
  width: '201px',
  height: '48px',
});

const StyledButton = styled(Button)({
  width: '65px',
  height: '52px',
  marginLeft: '16px',
  marginTop: '2px',
});

const StyledBox = styled(Box)({
  marginTop: '25px',
});

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

  const { i18n } = useTranslation();

  return (
    <StyledBox>
      <StyledTextField
        label={i18n.t("generic.promoCodeInput")}
        variant="outlined"
        value={promoCode}
        onChange={handlePromoCodeChange}
      />
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleApplyPromoCode}
        disabled={promoCode.length === 0}
      >
        {i18n.t("generic.promoCodeButton")}
      </StyledButton>
    </StyledBox>
  );
};

export default PromoCode;
