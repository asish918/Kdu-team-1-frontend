// CountdownTimer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

describe('CountdownTimer component', () => {
 it('renders CountdownTimer component correctly', () => {
    const mockNavigateTo = '/checkout-complete';
    const mockEndTime = 10; // 10 seconds for testing

    render(
      <MemoryRouter>
        <CountdownTimer navigateTo={mockNavigateTo} endTime={mockEndTime} />
      </MemoryRouter>
    );
 
    
 });
});
