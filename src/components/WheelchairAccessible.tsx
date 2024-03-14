// src/components/WheelchairAccessible.tsx
import React from 'react';
import styled from 'styled-components';
import AccessibleIcon from '@mui/icons-material/Accessible';

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
 return (
    <div>
      <IconContainer>
        <AccessibleIcon style={{ fontSize: '16px' }}/>
        <StyledLabel htmlFor="wheelchairAccessible">I need an Accessible Room</StyledLabel>
        <StyledCheckbox id="wheelchairAccessible" name="wheelchairAccessible" />
      </IconContainer>
    </div>
 );
};

export default WheelchairAccessible;

