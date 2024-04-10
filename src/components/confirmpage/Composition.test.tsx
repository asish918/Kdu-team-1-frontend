import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import CompositionPage from './Composition';


test('renders CompositionPage component', () => {
 
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
      <CompositionPage/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );

  
});