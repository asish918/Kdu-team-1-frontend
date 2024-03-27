import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div<{ $size }>`
  display: inline-block;
  width: ${props => `${props.$size}px`};
  height: ${props => `${props.$size}px`};
  transform: translate(50%, 50%);
`;

const SpinnerInner = styled.div`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${props => props.theme.colors.primaryDeepBlue};
  animation: ${spinAnimation} 1s ease-in-out infinite;
`;

interface SpinnerProps {
    size: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
    return (
        <SpinnerContainer $size={size}>
            <SpinnerInner />
        </SpinnerContainer>
    );
};

export default Spinner;
