import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import SeniorCitizenToggle from './SeniorCitizenToggle';


test('renders SeniorCitizenToggle component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <SeniorCitizenToggle/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
});