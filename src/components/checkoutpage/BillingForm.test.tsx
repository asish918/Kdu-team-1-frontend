import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import BillingForm from './BillingForm';


test('renders Billing component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <BillingForm/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
});