import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import App from './Form';


test('renders Form component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <App/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
});