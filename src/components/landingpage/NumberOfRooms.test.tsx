import { render, screen } from '@testing-library/react';
import NumberOfRooms from './NumberOfRooms';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders NumberOfRooms component', () => {
 
  render(
    <BrowserRouter>
    <AppProvider>
    <NumberOfRooms />
   </AppProvider>
   </BrowserRouter>
  );
  
});
