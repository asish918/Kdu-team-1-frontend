
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RoomResultsPanel from './Roompanel'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import roomResultReducer from '../../redux/reducers/roomResultReducer';
import AppProvider from '../../providers/AppProvider';
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

const store = configureStore({
 reducer: {
    roomResult: roomResultReducer,
 },
});

describe('RoomResultsPanel', () => {
 it('renders the RoomResultsPanel component', () => {
    render(
      <Authenticator.Provider> 
        <BrowserRouter>
         <AppProvider>
        <RoomResultsPanel />
        </AppProvider>
        </BrowserRouter>
      </Authenticator.Provider> 
          
    );  
    expect(screen.getByText('Room Results')).toBeInTheDocument();
    
 });
});


