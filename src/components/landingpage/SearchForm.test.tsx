import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders SearchForm component', () => {
  render(

    <BrowserRouter>
      <AppProvider>
        <SearchForm />
      </AppProvider>
    </BrowserRouter>
  );

});
