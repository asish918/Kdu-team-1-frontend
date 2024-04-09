import { render, screen } from '@testing-library/react';
import { DatePicker } from './DatePicker';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
test('renders DatePicker component', () => {
  
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <DatePicker  step={0}/>
   </AppProvider>
   </BrowserRouter>
   </Authenticator.Provider> 
   
  );
 
});
