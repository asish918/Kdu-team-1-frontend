import { render, screen } from '@testing-library/react';
import PropertyName from './PropertyName';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

test('renders PropertyName component', () => {  
  render(
    <Authenticator.Provider>
    <BrowserRouter>
    <AppProvider>
    <PropertyName />
   </AppProvider>
   </BrowserRouter>
   </Authenticator.Provider>
  
  );

  
});
