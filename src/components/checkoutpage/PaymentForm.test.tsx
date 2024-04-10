import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import PaymentForm from './PaymentForm';



test('renders PaymentForm component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <PaymentForm/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
  
 
});