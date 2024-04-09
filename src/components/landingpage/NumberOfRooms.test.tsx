import { render, screen } from '@testing-library/react';
import NumberOfRooms from './NumberOfRooms';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
test('renders NumberOfRooms component', () => {
 
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <NumberOfRooms />
   </AppProvider>
   </BrowserRouter>
   </Authenticator.Provider> 
  );
  
});
