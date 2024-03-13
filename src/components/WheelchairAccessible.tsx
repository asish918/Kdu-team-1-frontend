// src/components/WheelchairAccessible.tsx
import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledLabel = styled.label`
 margin-right: 10px;
 font-size: 14px;
 color: #333;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
 cursor: pointer;
`;

const WheelchairAccessible: React.FC = () => {
 return (
    <div>
      <StyledLabel htmlFor="wheelchairAccessible">Wheelchair Accessible</StyledLabel>
      <StyledCheckbox id="wheelchairAccessible" name="wheelchairAccessible" />
    </div>
 );
};

export default WheelchairAccessible;

