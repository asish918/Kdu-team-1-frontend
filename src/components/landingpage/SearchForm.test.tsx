import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
test('renders SearchForm component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
        <SearchForm />
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );

});
