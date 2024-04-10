
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spinner from './Spinner'; 
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

describe('Spinner', () => {
 it('renders the Spinner component', () => {
    render(
      <Authenticator.Provider> 
        <BrowserRouter>
        <AppProvider>
        <Spinner size={50} />
       </AppProvider>
       </BrowserRouter>
       </Authenticator.Provider> 
    
    );

 });
});
