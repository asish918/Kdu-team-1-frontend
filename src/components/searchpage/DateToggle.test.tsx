// DateToggle.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import DateToggle from './DateToggle';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

describe('DateToggle component', () => {
 it('renders DateToggle component correctly', () => {
    
    const calendarToggle = (value:any) => value;
    const mockStartDate = '2024-04-08';
    const mockEndDate = '2024-04-15';

    render(
      <Authenticator.Provider> 
        <BrowserRouter>
          <AppProvider>
            <DateToggle
              calendarToggle={calendarToggle}
              startDate={mockStartDate}
              endDate={mockEndDate}
            />
          </AppProvider>
        </BrowserRouter>
      </Authenticator.Provider>
    );
 
 });
});
