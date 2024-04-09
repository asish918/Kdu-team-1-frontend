import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import PromoCode from './PromoCode';

test('renders the correct PromoCode', () => {
 
 render(
  <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
   <PromoCode/>
   </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
 
  );

 
});