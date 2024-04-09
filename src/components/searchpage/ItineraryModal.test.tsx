import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import ModalComponent from './ItineraryModal';

test('renders the correct ModalComponent', () => {
 
 render(
  <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
   <ModalComponent/>
   </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
 
  );

 
});