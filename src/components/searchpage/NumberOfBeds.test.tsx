import { render, screen } from '@testing-library/react';
import NumberOfBeds from './NumberOfBeds'; 
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders the correct text for the number of beds', () => {
 
 render(
    <BrowserRouter>
    <AppProvider>
    <NumberOfBeds />
   </AppProvider>
    </BrowserRouter>
 
  );

 
});


