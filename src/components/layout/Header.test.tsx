import { render, screen } from '@testing-library/react';
import Header from './Header';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders Header component', () => {
  render(
    <BrowserRouter>
      <AppProvider>
        <Header />
      </AppProvider>
    </BrowserRouter>

  );

});
