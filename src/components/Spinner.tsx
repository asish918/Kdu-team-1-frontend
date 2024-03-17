import styled, { keyframes } from 'styled-components';

// Keyframe animation for rotating spinner
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled div for spinner
const SpinnerContainer = styled.div<{ $size: number }>`
  display: block;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border: 2px solid ${(props) => props.theme.colors.primaryDeepBlue};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`;

const SpinnerDiv = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

// Spinner component
const Spinner = ({ size = 40 }) => {
  return (
    <SpinnerDiv>
      <SpinnerContainer $size={size} />
    </SpinnerDiv>
  )
};

export default Spinner;
