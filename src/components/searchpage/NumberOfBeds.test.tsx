import { render, screen } from '@testing-library/react';
import NumberOfBeds from './NumberOfBeds'; 
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

test('renders the correct text for the number of beds', () => {
 
 render(
  <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <NumberOfBeds />
   </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
 
  );

 
});


