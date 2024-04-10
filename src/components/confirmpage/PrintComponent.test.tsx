import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import PrintComponent from './PrintComponent';




test('renders Print component', () => {
 
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
      <PrintComponent/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
  
});