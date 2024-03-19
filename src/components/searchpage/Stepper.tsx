import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';

const steps = ['1.Choose room', '2.Choose add on', '3.Checkout'];

function BookingStepper() {
 const [activeStep, setActiveStep] = useState(0);

 const handleStep = (step:any) => {
    setActiveStep(step);
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center',marginTop:'12px' }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ width: '30%', height: '100px' }}>
        {steps.map((label, index) => (
          <Step key={label} sx={{
            '& .MuiStepLabel-root': {
              color: index < activeStep ? 'blue' : 'inherit', 
              '&.Mui-completed': {
                color: 'red', 
              },
              '&.Mui-active': {
                color: 'red', 
              },
            },
          }}>
            <StepLabel onClick={() => handleStep(index)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
 );
}

export default BookingStepper;

















