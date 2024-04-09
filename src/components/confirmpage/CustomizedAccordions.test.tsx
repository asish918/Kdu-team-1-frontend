import { render, screen } from '@testing-library/react';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import CustomizedAccordions from './CustomizedAccordions';



test('renders CustomizedAccordions component', () => {
 
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
      <AppProvider>
      <CustomizedAccordions/>
      </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
  );
 
  
});