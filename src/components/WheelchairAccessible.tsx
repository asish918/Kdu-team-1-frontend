// src/components/WheelchairAccessible.tsx
import React from 'react';
import styled from 'styled-components';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { useTranslation } from 'react-i18next';

// Styled components
const StyledLabel = styled.label`
 margin-right: 10px;
 font-size: 14px;
 color: #333;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
 cursor: pointer;
`;


const IconContainer = styled.div`
 display: flex;
 align-items: center;
`;

const WheelchairAccessible: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <IconContainer>
        <StyledCheckbox id="wheelchairAccessible" name="wheelchairAccessible" />
        <AccessibleIcon style={{ fontSize: '16px' }} />
        <StyledLabel htmlFor="wheelchairAccessible">{i18n.t("landingPageForm.accessibility")}</StyledLabel>
      </IconContainer>
    </div>
  );
};

export default WheelchairAccessible;

