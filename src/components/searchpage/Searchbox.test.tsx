// SearchForm.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SearchForm from './Searchbox'; 
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

describe('SearchForm', () => {
 it('renders the SearchForm component', () => {
    render(
        <Authenticator.Provider> 
        <BrowserRouter>
         <AppProvider>
         <SearchForm onSearch={() => {}} />
        </AppProvider>
        </BrowserRouter>
        </Authenticator.Provider> 
    
    );

    
 });
});
