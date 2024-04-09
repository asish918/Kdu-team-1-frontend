import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import ReservationDetails from './Reservationdetails';

test('renders ReservationDetails component', () => {
 
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
      <ReservationDetails/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
  
});