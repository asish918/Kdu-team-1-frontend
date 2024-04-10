import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import DateToggle from './DateToggle';

test('renders DateToggle component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <DateToggle/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
});