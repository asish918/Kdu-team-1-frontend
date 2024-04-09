import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import PaymentInfo from './PaymentInfo';


test('renders the correct PaymentInfo', () => {
 
 render(
  <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <PaymentInfo/>
   </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
 
  );

});