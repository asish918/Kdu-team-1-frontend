// DealCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import DealCard from './DealCard';
import AppProvider from '../../providers/AppProvider'; 
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'; 

// Mock Redux store
const store = createStore(rootReducer);

describe('DealCard component', () => {
 it('renders DealCard component correctly', () => {
    const mockDealTitle = 'Special Deal';
    const mockDealDescription = 'This is a special deal for you.';
    const mockPrice = 100;
    const mockPromotion = {}; 
    const mockRoom = {}; 

    render(
      <Provider store={store}>
        <Authenticator.Provider> 
          <BrowserRouter>
            <AppProvider>
              <DealCard
                dealTitle={mockDealTitle}
                dealDescription={mockDealDescription}
                price={mockPrice}
                promotion={mockPromotion}
                room={mockRoom}
              />
            </AppProvider>
          </BrowserRouter>
        </Authenticator.Provider>
      </Provider>
    );

    
   
 });
});

