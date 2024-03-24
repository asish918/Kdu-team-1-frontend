import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import styled from 'styled-components';

const steps = ['1.Choose room', '2.Choose add on', '3.Checkout'];

const StyledStepper = styled(Stepper)`
  width: 50%;
  height: 70px;
  margin-top: 15px;
  
  span.Mui-completed {
    color: 'red';
  }
  span.Mui-active {
    color: 'red';
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  `

const StepperContainer = styled.div`
  background-color: ${props => props.theme.colors.stepperGray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -7px;
  
  @media (max-width: 768px) {
    margin-top: -7px;
    height: 120px;
  }
`

function BookingStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step: any) => {
    setActiveStep(step);
  };

  return (
    <StepperContainer>
      <StyledStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel onClick={() => handleStep(index)}>{label}</StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </StepperContainer>
  );
}

export default BookingStepper;

















