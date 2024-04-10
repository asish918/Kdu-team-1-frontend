import { render, screen } from '@testing-library/react';
import NumberOfGuests from './NumberOfGuests';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

test('renders NumberOfGuests component', () => {
  
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <NumberOfGuests />
   </AppProvider>
   </BrowserRouter>
   </Authenticator.Provider> 
  
  );

  
});
