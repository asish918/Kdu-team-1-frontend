import { render, screen } from '@testing-library/react';
import { DatePicker } from './DatePicker';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

test('renders DatePicker component', () => {
  
  render(
    <BrowserRouter>
    <AppProvider>
    <DatePicker  step={0}/>
   </AppProvider>
   </BrowserRouter>
   
  );
 
});
