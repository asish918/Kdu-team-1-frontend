// SortDropdown.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SortDropdown from './SortDropDown'; 
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

describe('SortDropdown', () => {
 it('renders the SortDropdown component', () => {
    render(
        <BrowserRouter>
        <AppProvider>
        <SortDropdown value="price low" onChange={() => {}} />
       </AppProvider>
       </BrowserRouter>
    
    );
    
 });
});
