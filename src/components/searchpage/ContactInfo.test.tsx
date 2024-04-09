// ContactInfo.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactInfo from './Contactinfo';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

describe('ContactInfo component', () => {
 it('renders ContactInfo component correctly', () => {
    render(
      <Authenticator.Provider> 
    <BrowserRouter>
    <AppProvider>
    <ContactInfo />
   </AppProvider>
    </BrowserRouter>
    </Authenticator.Provider>
 
    );
 
  
 });
});
