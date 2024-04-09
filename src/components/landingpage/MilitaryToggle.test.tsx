import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import MilitaryToggle from './MilitaryToggle';
test('renders MilitaryToggle component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <MilitaryToggle/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
});