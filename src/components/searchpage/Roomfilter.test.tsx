import { render, screen } from '@testing-library/react';
import CustomizedAccordions from './Roomfilter';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

test('renders CustomizedAccordions component', () => {
  render(
    <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <CustomizedAccordions />
   </AppProvider>
   </BrowserRouter>
   </Authenticator.Provider> 

  
  );

  const titleElement = screen.getByText(/Narrow your results/i);
  expect(titleElement);

  
  const bedTypesAccordion = screen.getByText(/Bed type/i);
  expect(bedTypesAccordion);

  
  const roomTypesAccordion = screen.getByText(/Room type/i);
  expect(roomTypesAccordion);
});
