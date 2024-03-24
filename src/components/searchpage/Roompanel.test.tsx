
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RoomResultsPanel from './Roompanel'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import roomResultReducer from '../../redux/reducers/roomResultReducer';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
 reducer: {
    roomResult: roomResultReducer,
 },
});

describe('RoomResultsPanel', () => {
 it('renders the RoomResultsPanel component', () => {
    render(
        <BrowserRouter>
         <AppProvider>
        <RoomResultsPanel />
        </AppProvider>
        </BrowserRouter>
          
    );  
    expect(screen.getByText('Room Results')).toBeInTheDocument();
    
 });
});


