import { render, screen } from '@testing-library/react';
import PropertyName from './PropertyName';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders PropertyName component', () => {  
  render(
    <BrowserRouter>
    <AppProvider>
    <PropertyName />
   </AppProvider>
   </BrowserRouter>
  
  );

  
});
