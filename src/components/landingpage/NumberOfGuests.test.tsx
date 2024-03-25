import { render, screen } from '@testing-library/react';
import NumberOfGuests from './NumberOfGuests';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders NumberOfGuests component', () => {
  
  render(
    <BrowserRouter>
    <AppProvider>
    <NumberOfGuests />
   </AppProvider>
   </BrowserRouter>
  
  );

  
});
