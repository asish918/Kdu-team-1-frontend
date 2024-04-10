import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import CancelRoomModal from './CancelRoomModal';

test('renders CancelRoomModal component', () => {
    const handleClose = () => console.log('Close modal');
    const handleConfirmOtp = () => console.log('Confirm OTP');
    const setOtp = (value:any) => console.log('Set OTP:', value);
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
      <CancelRoomModal
        open={true}
        handleClose={handleClose}
        handleConfirmOtp={handleConfirmOtp}
        otp=""
        setOtp={setOtp}
      />
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );

  
});